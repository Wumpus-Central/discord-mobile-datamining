// === Module 13857: useCheckpointCharacterTextureManager ===

// Module 13857 (useCheckpointCharacterTextureManager)
import DataBindByName from "DataBindByName" /* 5216 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

require = fn;
function loadImage() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_5 = async function _loadImage(arg0) {
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c1 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          c3 = 1;
          const RiveImages = DataBindByName.RiveImages;
          c2 = 2;
          c1 = 1;
          const obj4 = { value: RiveImages.loadFromURLAsync(closure_0), done: false };
          return obj4;
        }
      } else if (1 === tmp6) {
        c3 = 0;
        c1 = 3;
        return { value: null, done: true };
      } else if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 0;
        c1 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        c3 = 0;
        c1 = 3;
        const obj = { value, done: true };
        return obj;
      }
    } catch (tmp10) {
      if (tmp3 === c3) {
        c1 = tmp2;
        throw tmp10;
      } else {
        c2 = tmp;
      }
    }
  }
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/checkpoint/native/useCheckpointCharacterTextureManager.tsx");

export function useCheckpointCharacterTextureManager(arg0) {
  closure_0 = arg0;
  items = [arg0];
  return noop.useMemo(() => {
    let tmp = null;
    if (null != closure_0) {
      const obj = {
        load: loadImage,
        swap(arg0) {
            const result = closure_1_0.updateReferencedAssets({
              data: Object.fromEntries(Array.from(arg0, (arg0) => {
                [tmp, tmp2] = arg0;
                items = [tmp, { image: tmp2 }];
                return items;
              }))
            });
          },
        release(arg0) {
            closure_0 = arg0;
            const timerId = setTimeout(() => closure_0.forEach((dispose) => dispose.dispose()), 1000);
          }
      };
      tmp = obj;
    }
    return tmp;
  }, items);
}