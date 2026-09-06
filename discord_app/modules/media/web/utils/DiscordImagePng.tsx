// === Module 5210: DiscordImagePng ===

// Module 5210 (DiscordImagePng)
import decodeImageDefault from "decodeImage" /* 1892 */;
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
  return (async (arg0, value) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      while (true) {
        c6 = 2;
        let tmp3 = c3;
        if (0 === c3) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_2 = tmp3;
            closure_130_0 = undefined;
            let icc;
            closure_130_2 = undefined;
            closure_130_3 = undefined;
            let obj3 = _self(closure_2[2]);
            c3 = 1;
            c6 = 1;
            let obj1 = { value: obj3.load(self.originalBuffer, { async: true, expanded: true, includeUnknown: true }), done: false };
            return obj1;
          }
        } else if (1 === tmp3) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            let obj2 = { value, done: true };
            return obj2;
          } else {
            closure_130_0 = value;
            if (null == closure_130_0.icc) {
              c6 = 3;
              return { value: true, done: true };
            } else {
              icc = closure_130_0.icc;
              let _Object = Object;
              closure_130_2 = Object.keys(icc);
              closure_1 = closure_130_2;
              _self = closure_130_2[Symbol.iterator]();
              while (_self !== undefined) {
                c5 = 1;
                closure_130_3 = tmp9;
                if ("ICC Description" === closure_130_3) {
                  let tmp12 = icc[closure_130_3];
                  let description;
                  if (tmp12 != null) {
                    description = tmp12.description;
                  }
                  if (null != description) {
                    if ("" !== icc[closure_130_3].description) {
                      let str = icc[closure_130_3].description;
                      let formatted = str.toLowerCase();
                      c5 = 0;
                      let tmp20 = !formatted.includes("srgb");
                      _self.return();
                      c6 = 3;
                      obj3 = { value: !tmp20, done: true };
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
          _self.return();
          throw DiscordImagePng;
        }
      }
    }
  })();
};
prototype["getBuffer"] = function getBuffer() {
  return this.originalBuffer;
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/media/web/utils/DiscordImagePng.tsx");

export { DiscordImagePng };