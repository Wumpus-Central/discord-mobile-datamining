// === Module 4907: create ===

// Module 4907 (create)
import decodeImageDefault from "decodeImage" /* 1952 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = fn;
let DiscordImagePng;
class DiscordImagePng {
  constructor(arg0, arg1) {
    obj = Object.create(new.target.prototype);
    obj.img = global;
    obj.originalBuffer = fn;
    return obj;
  }
}
const prototype = DiscordImagePng.prototype;
DiscordImagePng["create"] = function create(originalBuffer) {
  try {
    const decoder = decodeImageDefault;
    return new DiscordImagePng(decoder.decode(originalBuffer), originalBuffer);
  } catch (err) {
  }
};
prototype["hasTransparency"] = function hasTransparency() {
  const self = this;
  if (4 !== this.img.ctype) {
    if (6 !== self.img.ctype) {
      return false;
    }
  }
  const uint8Array = new Uint8Array(decodeImageDefault.toRGBA8(self.img)[0]);
  let num2 = 3;
  if (3 < uint8Array.length) {
    while (uint8Array[num2] >= 255) {
      num2 = num2 + 4;
    }
    return true;
  }
  return false;
};
prototype["isAnimated"] = function isAnimated() {
  return null != this.img.tabs.acTL;
};
prototype["isPng8"] = function isPng8() {
  let tmp = 3 === this.img.ctype;
  if (tmp) {
    tmp = this.img.depth <= 8;
  }
  return tmp;
};
prototype["hasSrgbIccProfile"] = function hasSrgbIccProfile() {
  const self = this;
  return callback(function*() {
    if (c6 === 2) {
      c6 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      while (true) {
        c6 = 2;
        let tmp3 = c3;
        if (0 === c3) {
          if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_0 = undefined;
            dependencyMap = undefined;
            let dependencyMap2;
            let obj3 = self(closure_1_2[2]);
            c3 = 1;
            c6 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = obj3.load(self.originalBuffer, { async: true, expanded: true, includeUnknown: true });
            return obj1;
          }
        } else if (1 === tmp3) {
          if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            let obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            closure_0 = arg1;
            if (null == closure_0.icc) {
              c6 = 3;
              return { value: true, done: true };
            } else {
              dependencyMap = closure_0.icc;
              let _Object = Object;
              dependencyMap2 = Object.keys(dependencyMap);
              dependencyMap = dependencyMap2;
              closure_0 = dependencyMap2[Symbol.iterator]();
              while (closure_0 !== undefined) {
                c5 = 1;
                c3 = tmp9;
                if ("ICC Description" === c3) {
                  let tmp12 = dependencyMap[c3];
                  let description;
                  if (tmp12 != null) {
                    description = tmp12.description;
                  }
                  if (null != description) {
                    if ("" !== dependencyMap[c3].description) {
                      let str = dependencyMap[c3].description;
                      let formatted = str.toLowerCase();
                      c5 = 0;
                      let tmp20 = !formatted.includes("srgb");
                      closure_0.return();
                      c6 = 3;
                      obj3 = { value: null, done: true };
                      obj3[0] = !tmp20;
                      return obj3;
                    }
                  }
                }
                c5 = 0;
                continue;
              }
              c6 = 3;
              return { value: false, done: true };
            }
          }
        } else {
          c5 = 0;
          closure_0.return();
          throw closure_4;
        }
      }
    }
  })();
};
prototype["getBuffer"] = function getBuffer() {
  return this.originalBuffer;
};
const result = require("obj132").fileFinishedImporting("modules/media/web/utils/DiscordImagePng.tsx");

export { DiscordImagePng };