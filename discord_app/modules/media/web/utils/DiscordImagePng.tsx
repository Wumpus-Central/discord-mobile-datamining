// discord_app/modules/media/web/utils/DiscordImagePng.tsx
import asyncGeneratorStep from "asyncGeneratorStep";
import { decodeImage } from "../../../../../_runtime/01952_decodeImage.js";

const require = arg1;
let DiscordImagePng;
class DiscordImagePng {
  constructor(arg0, arg1) {
    obj = Object.create(new.target.prototype);
    obj.img = global;
    obj.originalBuffer = arg1;
    return obj;
  }
}
const prototype = DiscordImagePng.prototype;
DiscordImagePng["create"] = function create(originalBuffer) {
  try {
    return new DiscordImagePng(decodeImage.decode(originalBuffer), originalBuffer);
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
  const uint8Array = new Uint8Array(decodeImage.toRGBA8(self.img)[0]);
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
        let num = 2;
        c6 = 2;
        let tmp3 = c3;
        if (0 === c3) {
          if (arg0 === 1) {
            let num9 = 3;
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            let num8 = 3;
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let dependencyMap2 = tmp3;
            let closure_0;
            let dependencyMap;
            dependencyMap2 = undefined;
            c3 = undefined;
            let tmp22 = outer1_0;
            let tmp23 = outer1_2;
            let obj3 = outer1_0(outer1_2[2]);
            let tmp24 = outer1_0;
            c3 = 1;
            let num7 = 1;
            c6 = 1;
            let obj1 = { value: null, done: false };
            obj1[0] = obj3.load(outer1_0.originalBuffer, { async: true, expanded: true, includeUnknown: true });
            return obj1;
          }
        } else if (1 === tmp3) {
          if (arg0 === 1) {
            let num6 = 3;
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            let num5 = 3;
            c6 = 3;
            let obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            let tmp31 = dependencyMap2;
            closure_0 = arg1;
            let tmp32 = closure_0;
            if (null == closure_0.icc) {
              let num4 = 3;
              c6 = 3;
              return { value: true, done: true };
            } else {
              let tmp33 = dependencyMap2;
              let tmp34 = closure_0;
              dependencyMap = closure_0.icc;
              let _Object = Object;
              let tmp35 = dependencyMap;
              dependencyMap2 = Object.keys(dependencyMap);
              let tmp36 = dependencyMap2;
              dependencyMap = dependencyMap2;
              let tmp37 = dependencyMap2;
              dependencyMap = dependencyMap2;
              closure_0 = dependencyMap2[Symbol.iterator]();
              let tmp7 = dependencyMap;
              let tmp8 = closure_0;
              while (closure_0 !== undefined) {
                let tmp38 = dependencyMap2;
                let c5 = 1;
                c3 = tmp9;
                let tmp39 = c3;
                if ("ICC Description" === c3) {
                  let tmp10 = dependencyMap;
                  let tmp11 = c3;
                  let tmp12 = dependencyMap[c3];
                  let description;
                  if (tmp12 != null) {
                    description = tmp12.description;
                  }
                  if (null != description) {
                    let tmp14 = dependencyMap2;
                    let tmp15 = dependencyMap;
                    let tmp16 = c3;
                    if ("" !== dependencyMap[c3].description) {
                      let tmp17 = dependencyMap2;
                      let tmp18 = dependencyMap;
                      let tmp19 = c3;
                      let str = dependencyMap[c3].description;
                      let formatted = str.toLowerCase();
                      c5 = 0;
                      let tmp21 = closure_0;
                      let tmp20 = !formatted.includes("srgb");
                      closure_0.return();
                      let num2 = 3;
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
              let num3 = 3;
              c6 = 3;
              return { value: false, done: true };
            }
          }
        } else {
          let tmp4 = closure_4;
          let tmp5 = closure_4;
          c5 = 0;
          let tmp6 = closure_0;
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
const result = require("load").fileFinishedImporting("modules/media/web/utils/DiscordImagePng.tsx");

export { DiscordImagePng };