// === Module 4637: RiveFonts ===

// Module 4637 (RiveFonts)
import react_native from "react-native" /* 17 */;
import _mod4609 from "module_4609" /* 4609 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;

const require = globalThis.__r;
let c0, c1, c3;

function resolveWeight(arg0) {
  let num = 0;
  if ("default" !== arg0) {
    const _Number = Number;
    num = Number(arg0);
  }
  return num;
}
function loadFontByURI(arg0) {
  const obj = /^https?:\/\//;
  if (!obj.test(arg0)) {
    let fontFromResource;
    const obj2 = /^file:\/\//;
    if (!obj2.test(arg0)) {
      fontFromResource = closure_3.loadFontFromResource(arg0);
    }
    return fontFromResource;
  }
  fontFromResource = closure_3.loadFontFromURL(arg0);
}
const Image = react_native.Image;
const NitroModules = _mod4609.NitroModules;
let closure_3 = NitroModules.createHybridObject("RiveFontConfig");
let obj = {
  loadFont(arg0) {
    return obj(...arguments);
  },
  systemFallback() {
    return closure_3.getSystemDefaultFont();
  },
  setFallbackFonts(arg0) {
    return obj(...arguments);
  },
  clearFallbackFonts() {
    return obj(...arguments);
  }
};
obj = function _loadFont() {
  obj = _asyncToGenerator(async function(arg0) {
    let closure_0 = arg0;
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c1 = 2;
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          const _ArrayBuffer = ArrayBuffer;
          if (closure_0 instanceof ArrayBuffer) {
            c1 = 3;
            const obj5 = { value: closure_1_3.loadFontFromBytes(closure_0), done: true };
            return obj5;
          } else if (typeof closure_0 === "number") {
            const assetSource = closure_1_2.resolveAssetSource(closure_0);
            let uri;
            if (assetSource != null) {
              uri = assetSource.uri;
            }
            if (uri) {
              c1 = 3;
              const obj6 = { value: closure_1_5(assetSource.uri), done: true };
              return obj6;
            } else {
              const _Error = Error;
              const _HermesInternal = HermesInternal;
              const self = this;
              const self2 = this;
              const error = new Error("Invalid font asset: could not resolve require() ID " + closure_0 + ". Ensure 'ttf' is in metro.config.js assetExts.");
              throw error;
            }
          } else {
            if (typeof closure_0 === "object") {
              if ("name" in closure_0) {
                c1 = 3;
                const obj7 = { value: closure_1_3.loadFontByName(closure_0.name), done: true };
                return obj7;
              }
            }
            if (typeof closure_0 === "object") {
              if ("uri" in closure_0) {
                c1 = 3;
                const obj8 = { value: closure_1_5(closure_0.uri), done: true };
                return obj8;
              }
            }
            if (typeof closure_0 === "string") {
              obj = /^https?:\/\//;
              if (!obj.test(closure_0)) {
                let fontFromResource;
                const obj2 = /^file:\/\//;
                if (!obj2.test(closure_0)) {
                  fontFromResource = closure_1_3.loadFontFromResource(closure_0);
                }
                c1 = 3;
                const obj9 = { value: fontFromResource, done: true };
                return obj9;
              }
              fontFromResource = closure_1_3.loadFontFromURL(closure_0);
            } else {
              const _Error2 = Error;
              const _String = String;
              const _HermesInternal2 = HermesInternal;
              const self3 = this;
              const self4 = this;
              const error1 = new Error("Invalid font source: " + String(closure_0));
              throw error1;
            }
          }
        }
      } catch (tmp16) {
        c1 = 3;
        throw tmp16;
      }
    }
  });
  return obj(...arguments);
};
obj = function _setFallbackFonts() {
  obj = _asyncToGenerator(async (arg0) => {
    let v2;
    let closure_0 = arg0;
    if (c3 === 2) {
      c3 = 3;
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
      while (true) {
        let closure_1;
        c3 = 2;
        if (0 === v2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            let _Object = Object;
            let entries = Object.entries(closure_0);
            closure_1 = entries[Symbol.iterator]();
            while (closure_1 !== undefined) {
              let c6 = 1;
              let tmp11 = closure_0(tmp9, 2);
              let tmp13 = tmp11[1];
              if (tmp13) {
                let setFontsForWeightResult = c3.setFontsForWeight(v2(tmp12), tmp13);
              }
              c6 = 0;
              continue;
            }
            v2 = 2;
            c3 = 1;
            let obj4 = { value: c3.applyFallbackFonts(), done: false };
            return obj4;
          }
        } else if (1 === tmp3) {
          c6 = 0;
          closure_1.return();
          throw closure_1_5;
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c3 = 3;
          return { value: "IconComponent", done: null };
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _clearFallbackFonts() {
  obj = _asyncToGenerator(async () => {
    if (c0 === 2) {
      c0 = 3;
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
      try {
        c0 = 2;
        if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          c0 = 3;
          obj = { value: closure_1_3.clearFallbackFonts(), done: true };
          return obj;
        }
      } catch (tmp4) {
        c0 = 3;
        throw tmp4;
      }
    }
  });
  return obj(...arguments);
};

export const RiveFonts = obj;