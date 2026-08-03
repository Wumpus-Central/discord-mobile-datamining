// === Module 15072: _getEmojiSource ===

// Module 15072 (_getEmojiSource)
import asyncGeneratorStep from "asyncGeneratorStep";
import { NativeModules } from "get ActivityIndicator";

const require = arg1;
function _getEmojiSource() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c6 = 0;
    let c7 = 0;
    const iter = (function*(arg0) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let c5 = 0;
              let closure_4 = tmp2;
              let num11;
              if (num11 === undefined) {
                num11 = 32;
              }
              let asyncGeneratorStep;
              let ImageManager;
              c6 = 1;
              c7 = 1;
              return { value: "ct", done: "Array" };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              const name = lib.name;
              ImageManager = name;
              if (name == null) {
                ImageManager = "";
              }
              const obj2 = { name: null, id: null, animated: false };
              obj2[0] = ImageManager;
              obj2[1] = lib.id;
              const emojiUrl = lib(num11[2]).getEmojiUrl(obj2, num11);
              asyncGeneratorStep = emojiUrl;
              if (emojiUrl == null) {
                asyncGeneratorStep = "";
              }
              if ("" !== asyncGeneratorStep) {
                let obj5 = lib(num11[3]);
                c7 = 3;
                const obj3 = { value: null, done: true };
                obj3[0] = obj5.makeSource(asyncGeneratorStep);
                return obj3;
              } else {
                ImageManager = ImageManager.ImageManager;
                c6 = 2;
                c7 = 1;
                const obj4 = { value: null, done: false };
                obj4[0] = ImageManager.getEmojiBase64(lib.name, num11);
                return obj4;
              }
              const obj11 = lib(num11[2]);
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c7 = 3;
            obj5 = { value: null, done: true };
            obj5[0] = arg1;
            return obj5;
          } else {
            ImageManager = arg1;
            obj = lib(num11[3]);
            const _HermesInternal = HermesInternal;
            c7 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = obj.makeSource("data:image/png;base64," + ImageManager);
            return obj6;
          }
        } catch (tmp29) {
          c7 = tmp;
          throw tmp29;
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _getEmojiSource = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("getEmojiUnavailableReason").fileFinishedImporting("modules/emojis/native/utils/EmojiSourceUtils.tsx");

export const getEmojiSource = function getEmojiSource(emoji) {
  const self = this;
  const apply = _getEmojiSource.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};