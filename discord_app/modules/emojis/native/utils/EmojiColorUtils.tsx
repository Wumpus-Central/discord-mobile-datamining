// === Module 15898: _getEmojiCacheKey ===

// Module 15898 (_getEmojiCacheKey)
import privDefault from "priv" /* 1400 */;
import closure_0 from "asyncGeneratorStep" /* 5 */;
import { NativeModules } from "get ActivityIndicator" /* 17 */;

function _getEmojiCacheKey(name) {
  return "" + name.name + "-" + name.id;
}
function _getFromCacheOrFallback2() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c4 = 0;
    c3 = 0;
    const iter = (function*(arg0) {
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
              closure_5 = undefined;
              c2 = 1;
              c4 = 1;
              return { value: "PX_16", done: true };
            }
          } else if (1 === tmp6) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj1 = { value: null, done: true };
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
  closure_4 = tmp;
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
    closure_0 = arg0;
    c4 = 0;
    c5 = 0;
    const iter = (function*(arg0) {
      if (c5 === 2) {
        c5 = 3;
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
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const callback = tmp5;
              closure_2 = tmp2;
              c0 = undefined;
              let ImageManager;
              ({ emoji: c0, emojiSource: closure_1 } = c0);
              c4 = 1;
              c5 = 1;
              return { value: "PX_16", done: true };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              const obj2 = { cache: null, cacheKey: null, fallbackParam: null, fallbackFunc: null };
              obj2[0] = closure_2;
              obj2[1] = callback(c0);
              obj2[2] = ImageManager;
              obj2[3] = ImageManager.ImageManager.getDominantColors;
              c4 = 2;
              c5 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = (function _getFromCacheOrFallback(arg0) {
                const self = this;
                const apply = c4.apply;
                if (typeof apply === "unknown") {
                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                } else {
                  applyArgumentsResult = apply(self, arguments);
                }
                return applyArgumentsResult;
              })(obj2);
              return obj3;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            ImageManager = arg1;
            if (arg1 == null) {
              ImageManager = [];
            }
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = ImageManager;
            return obj;
          }
        } catch (tmp15) {
          c5 = tmp;
          throw tmp15;
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_5 = tmp;
  let apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_2 = new privDefault(100);
const tmp2 = new privDefault(100);
let result = require("set").fileFinishedImporting("modules/emojis/native/utils/EmojiColorUtils.tsx");

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