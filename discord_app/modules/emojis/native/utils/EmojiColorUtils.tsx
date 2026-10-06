// discord_app/modules/emojis/native/utils/EmojiColorUtils.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import LRUCacheDefault from "../../../../../_runtime/01444_LRUCache.js";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import size from "../../../../../_runtime/metro/00002__.js";

let c4, c5;

function _getEmojiCacheKey(name) {
  return "" + name.name + "-" + name.id;
}
let obj = function _getFromCacheOrFallback2() {
  obj = _asyncToGenerator(async (arg0) => {
    let c0;
    let c1;
    let c2;
    let c3;
    let value;
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let v0;
      try {
        let value2;
        c4 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp3;
            c0 = undefined;
            c1 = undefined;
            v0 = undefined;
            ({ cache: c0, cacheKey: c1, fallbackParam: c2, fallbackFunc: c3 } = closure_0);
            value = undefined;
            value2 = undefined;
            c2 = 1;
            c4 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === c2) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            value = c0.get(c1);
            if (null != value) {
              c4 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              v0 = 1;
              c2 = 3;
              c4 = 1;
              const obj6 = { value: v0(c2), done: false };
              return obj6;
            }
          }
        } else if (2 === c2) {
          v0 = 0;
          c4 = 3;
          return { value: null, done: true };
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          v0 = 0;
          c4 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          value2 = value;
          if (null != value2) {
            const result = c0.set(c1, value2);
          }
          v0 = 0;
          c4 = 3;
          obj = { value: value2, done: true };
          return obj;
        }
      } catch (tmp21) {
        if (0 === v0) {
          c4 = 3;
          throw tmp21;
        } else {
          c2 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _getEmojiDominantColors() {
  obj = _asyncToGenerator(async (arg0) => {
    let c0;
    let c1;
    let closure_1;
    let value;
    function _getFromCacheOrFallback() {
      return closure_1_6(...arguments);
    }
    let closure_0 = arg0;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let fallbackParam;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_3 = tmp4;
            let closure_2 = tmp;
            c0 = undefined;
            fallbackParam = undefined;
            ({ emoji: c0, emojiSource: c1 } = closure_0);
            c4 = 1;
            c5 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const obj5 = {
              cache: closure_131_4,
              cacheKey: closure_131_5(c0),
              fallbackParam,
              fallbackFunc(value2) {
                obj = closure_1_0(closure_1_1[3]);
                return obj.getDominantColors(closure_1_3.resolveAssetSource(value2));
              },
            };
            c4 = 2;
            c5 = 1;
            const obj6 = { value: _getFromCacheOrFallback(obj5), done: false };
            return obj6;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          if (value == null) {
            value = [];
          }
          c5 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp13) {
        c5 = 3;
        throw tmp13;
      }
    }
  });
  return obj(...arguments);
};
const Image = react_native.Image;
const tmp2 = new LRUCacheDefault(100);
let closure_4 = tmp2;
let result = size.fileFinishedImporting("modules/emojis/native/utils/EmojiColorUtils.tsx");

export const getEmojiDominantColors = function getEmojiDominantColors() {
  return obj(...arguments);
};
