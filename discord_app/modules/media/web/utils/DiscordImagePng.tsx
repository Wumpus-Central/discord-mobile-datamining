// === Module 7342: DiscordImagePng ===

// Module 7342 (DiscordImagePng)
import _modDef1983 from "module_1983" /* 1983 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let _self, c3, c6;

class DiscordImagePng {
  constructor(decoder, originalBuffer) {
    const obj = Object.create(new.target.prototype);
    obj.img = decoder;
    obj.originalBuffer = originalBuffer;
    return obj;
  }
  static create(originalBuffer) {
    let tmp = null;
    try {
      const decoder = _modDef1983;
      const self = this;
      tmp = new DiscordImagePng(decoder.decode(originalBuffer), originalBuffer);
    } catch (err) {
    }
    return tmp;
  }
  hasTransparency() {
    const self = this;
    if (4 !== this.img.ctype) {
      if (6 !== self.img.ctype) {
        return false;
      }
    }
    const obj = _modDef1983;
    const uint8Array = new Uint8Array(obj.toRGBA8(self.img)[0]);
    let num2 = 3;
    if (3 < uint8Array.length) {
      while (uint8Array[num2] >= 255) {
        num2 = num2 + 4;
      }
      return true;
    }
    return false;
  }
  isAnimated() {
    return null != this.img.tabs.acTL;
  }
  isPng8() {
    return 3 === this.img.ctype && this.img.depth <= 8;
  }
  hasSrgbIccProfile() {
    const self = this;
    return (async () => {
      let closure_0;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj = { value, done: true };
          return obj;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        while (true) {
          let icc;
          let closure_2;
          c6 = 2;
          let tmp3 = c3;
          if (0 === c3) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              let obj2 = { value, done: true };
              return obj2;
            } else {
              _self = undefined;
              icc = undefined;
              closure_2 = undefined;
              let obj4 = _self(closure_2[2]);
              c3 = 1;
              c6 = 1;
              let obj3 = { value: obj4.load(self.originalBuffer, { async: true, expanded: true, includeUnknown: true }), done: false };
              return obj3;
            }
          } else if (1 === tmp3) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              let obj5 = { value, done: true };
              return obj5;
            } else {
              _self = value;
              if (null == _self.icc) {
                c6 = 3;
                return { value: true, done: true };
              } else {
                icc = _self.icc;
                let _Object = Object;
                closure_2 = Object.keys(icc);
                let closure_1 = closure_2;
                _self = closure_2[Symbol.iterator]();
                while (_self !== undefined) {
                  let c5 = 1;
                  c3 = tmp9;
                  if ("ICC Description" === c3) {
                    let tmp12 = icc[c3];
                    let description;
                    if (tmp12 != null) {
                      description = tmp12.description;
                    }
                    if (null != description) {
                      if ("" !== icc[c3].description) {
                        let str = icc[c3].description;
                        let formatted = str.toLowerCase();
                        c5 = 0;
                        let tmp20 = !formatted.includes("srgb");
                        _self.return();
                        c6 = 3;
                        let obj6 = { value: !tmp20, done: true };
                        return obj6;
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
  }
  getBuffer() {
    return this.originalBuffer;
  }
}
const prototype = DiscordImagePng.prototype;
const result = size.fileFinishedImporting("modules/media/web/utils/DiscordImagePng.tsx");

export { DiscordImagePng };