import asyncGeneratorStep from "asyncGeneratorStep";
import { NativeModules } from "get ActivityIndicator";

function _getEmojiCacheKey(name) {
  return "" + name.name + "-" + name.id;
}
function _getFromCacheOrFallback2() {
  const self = this;
  const tmp = callback((arg0) => {
    let asyncGeneratorStep = arg0;
    let c2 = 0;
    let c4 = 0;
    let c3 = 0;
    const iter = (function*(arg0) {
      let c0;
      let c1;
      let c2;
      let c3;
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
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
          c4 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              c1 = tmp6;
              let store;
              c1 = undefined;
              c2 = undefined;
              let v0;
              ({ cache: c0, cacheKey: c1, fallbackParam: c2, fallbackFunc: c3 } = store);
              c4 = undefined;
              let closure_5;
              c2 = 1;
              c4 = 1;
              return { value: "ct", done: "Array" };
            }
          } else if (1 === tmp6) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              c4 = store.get(c1);
              if (null != c4) {
                c4 = 3;
                const obj2 = { value: null, done: true };
                obj2[0] = c4;
                return obj2;
              } else {
                v0 = 1;
                c2 = 3;
                c4 = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = v0(c2);
                return obj3;
              }
            }
          } else if (2 === tmp6) {
            v0 = 0;
            c4 = 3;
            return { value: null, done: true };
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 0;
            c4 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            closure_5 = arg1;
            if (null != closure_5) {
              const result = store.set(c1, closure_5);
            }
            v0 = 0;
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = closure_5;
            return obj;
          }
        } catch (tmp24) {
          if (tmp3 === v0) {
            c4 = tmp2;
            throw tmp24;
          } else {
            c2 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _getFromCacheOrFallback2 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _getEmojiDominantColors() {
  let self = this;
  const tmp = callback((arg0) => {
    let asyncGeneratorStep = arg0;
    let c4 = 0;
    let c5 = 0;
    const iter = (function*(arg0) {
      let c0;
      let closure_1;
      let closure_2 = tmp2;
      ({ emoji: c0, emojiSource: closure_1 } = c0);
      yield "ct";
      const obj2 = { cache: null, cacheKey: null, fallbackParam: null, fallbackFunc: null };
      obj2[0] = closure_2;
      obj2[1] = callback(c0);
      obj2[2] = ImageManager;
      obj2[3] = ImageManager.ImageManager.getDominantColors;
      ImageManager = yield (function _getFromCacheOrFallback(arg0) {
        const self = this;
        const apply = c4.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(obj2);
      if (arg1 == null) {
        ImageManager = [];
      }
      return ImageManager;
    })();
    iter.next();
    return iter;
  });
  const _getEmojiDominantColors = tmp;
  let apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const tmp2 = new require("priv")(100);
let result = require("priv").fileFinishedImporting("modules/emojis/native/utils/EmojiColorUtils.tsx");

export const getEmojiDominantColors = function getEmojiDominantColors(arg0) {
  const self = this;
  const apply = _getEmojiDominantColors.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};