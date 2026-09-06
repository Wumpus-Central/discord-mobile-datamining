// === Module 16078: utils/EmojiColorUtils ===

// Module 16078 (utils/EmojiColorUtils)
import privDefault from "priv" /* 1437 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

function _getEmojiCacheKey(name) {
  return "" + name.name + "-" + name.id;
}
let closure_4 = async function _getFromCacheOrFallback2(arg0) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
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
      c4 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_1 = tmp6;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          ({ cache: closure_129_0, cacheKey: closure_129_1, fallbackParam: closure_129_2, fallbackFunc: closure_129_3 } = closure_0);
          closure_129_4 = undefined;
          closure_129_5 = undefined;
          c2 = 1;
          c4 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp6) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else {
          closure_129_4 = closure_129_0.get(closure_129_1);
          if (null != closure_129_4) {
            c4 = 3;
            const obj2 = { value: closure_129_4, done: true };
            return obj2;
          } else {
            c3 = 1;
            c2 = 3;
            c4 = 1;
            const obj3 = { value: closure_129_3(closure_129_2), done: false };
            return obj3;
          }
        }
      } else if (2 === tmp6) {
        c3 = 0;
        c4 = 3;
        return { value: null, done: true };
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 0;
        c4 = 3;
        const obj4 = { value, done: true };
        return obj4;
      } else {
        closure_129_5 = value;
        if (null != closure_129_5) {
          const result = closure_129_0.set(closure_129_1, closure_129_5);
        }
        c3 = 0;
        c4 = 3;
        obj = { value: closure_129_5, done: true };
        return obj;
      }
    } catch (tmp24) {
      if (tmp3 === c3) {
        c4 = tmp2;
        throw tmp24;
      } else {
        c2 = tmp;
      }
    }
  }
};
let closure_5 = async function _getEmojiDominantColors(arg0) {
  if (c5 === 2) {
    c5 = 3;
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
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_3 = tmp5;
          closure_2 = tmp2;
          closure_130_0 = undefined;
          closure_130_1 = undefined;
          ({ emoji: closure_130_0, emojiSource: closure_130_1 } = closure_0);
          c4 = 1;
          c5 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else {
          const obj2 = { cache: closure_131_2, cacheKey: closure_131_3(closure_130_0), fallbackParam: closure_130_1, fallbackFunc: closure_131_1.ImageManager.getDominantColors };
          c4 = 2;
          c5 = 1;
          const obj3 = {
            value: (function _getFromCacheOrFallback() {
                      const self = this;
                      const apply = closure_1_4.apply;
                      if (typeof apply === "unknown") {
                        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                      } else {
                        applyArgumentsResult = apply(self, arguments);
                      }
                      return applyArgumentsResult;
                    })(obj2),
            done: false
          };
          return obj3;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        const obj4 = { value, done: true };
        return obj4;
      } else {
        if (value == null) {
          value = [];
        }
        c5 = 3;
        obj = { value, done: true };
        return obj;
      }
    } catch (tmp15) {
      c5 = tmp;
      throw tmp15;
    }
  }
};
const NativeModules = fn(17).NativeModules;
let closure_2 = new privDefault(100);
const size = fn(2);
let result = size.fileFinishedImporting("modules/emojis/native/utils/EmojiColorUtils.tsx");

export const getEmojiDominantColors = function getEmojiDominantColors() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};