// === Module 16077: EmojiSourceUtils ===

// Module 16077 (EmojiSourceUtils)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = fn;
let closure_4 = async function _getEmojiSource(arg0, value) {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
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
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c5 = 0;
          closure_4 = tmp2;
          closure_132_1 = undefined;
          closure_132_0 = closure_0;
          let num11 = closure_1;
          if (closure_1 === undefined) {
            num11 = 32;
          }
          closure_132_1 = num11;
          closure_132_2 = undefined;
          closure_132_3 = undefined;
          c6 = 1;
          c7 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else {
          let name = closure_132_0.name;
          if (name == null) {
            name = "";
          }
          const obj2 = { name, id: closure_132_0.id, animated: false };
          const emojiUrl = closure_133_0(closure_133_1[2]).getEmojiUrl(obj2, closure_132_1);
          c2 = emojiUrl;
          if (emojiUrl == null) {
            c2 = "";
          }
          closure_132_2 = c2;
          if ("" !== closure_132_2) {
            let obj5 = closure_133_0(closure_133_1[3]);
            c7 = 3;
            const obj3 = { value: obj5.makeSource(closure_132_2), done: true };
            return obj3;
          } else {
            const ImageManager = closure_133_3.ImageManager;
            c6 = 2;
            c7 = 1;
            const obj4 = { value: ImageManager.getEmojiBase64(closure_132_0.name, closure_132_1), done: false };
            return obj4;
          }
          const obj11 = closure_133_0(closure_133_1[2]);
        }
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c7 = 3;
        obj5 = { value, done: true };
        return obj5;
      } else {
        closure_132_3 = value;
        obj = closure_133_0(closure_133_1[3]);
        const _HermesInternal = HermesInternal;
        c7 = 3;
        const obj6 = { value: obj.makeSource("data:image/png;base64," + closure_132_3), done: true };
        return obj6;
      }
    } catch (tmp29) {
      c7 = tmp;
      throw tmp29;
    }
  }
};
const NativeModules = fn(17).NativeModules;
const size = fn(2);
const result = size.fileFinishedImporting("modules/emojis/native/utils/EmojiSourceUtils.tsx");

export const getEmojiSource = function getEmojiSource() {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};