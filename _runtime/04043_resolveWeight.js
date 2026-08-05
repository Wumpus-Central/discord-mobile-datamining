// _runtime/04043_resolveWeight.js
import _loadFont from "_slicedToArray";
import _setFallbackFonts from "asyncGeneratorStep";
import { Image as _clearFallbackFonts } from "get ActivityIndicator";
import { NitroModules } from "module_4017";

function resolveWeight(arg0) {
  let num = 0;
  if ("default" !== arg0) {
    const _Number = Number;
    num = Number(arg0);
  }
  return num;
}
function loadFontByURI(arg0) {
  if (!obj.test(arg0)) {
    if (!obj2.test(arg0)) {
      let fontFromResource = closure_3.loadFontFromResource(arg0);
    }
    return fontFromResource;
  }
  fontFromResource = closure_3.loadFontFromURL(arg0);
}
let closure_3 = NitroModules.createHybridObject("RiveFontConfig");
_loadFont = function _loadFont() {
  const self = this;
  const tmp = _setFallbackFonts((arg0) => {
    let closure_0 = arg0;
    let c1 = 0;
    return (function*(arg0) {
      if (c1 === 2) {
        c1 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
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
          c1 = 2;
          if (arg0 === 1) {
            c1 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c1 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const _ArrayBuffer = ArrayBuffer;
            if (closure_0 instanceof ArrayBuffer) {
              c1 = 3;
              let obj1 = { value: null, done: true };
              obj1[0] = outer1_3.loadFontFromBytes(tmp26);
              return obj1;
            } else if (typeof tmp26 === "number") {
              const assetSource = outer1_2.resolveAssetSource(tmp26);
              let uri;
              if (assetSource != null) {
                uri = assetSource.uri;
              }
              if (uri) {
                c1 = 3;
                const obj2 = { value: null, done: true };
                obj2[0] = outer1_5(assetSource.uri);
                return obj2;
              } else {
                const _Error = Error;
                const _HermesInternal = HermesInternal;
                const error = new Error("Invalid font asset: could not resolve require() ID " + tmp26 + ". Ensure 'ttf' is in metro.config.js assetExts.");
                throw error;
              }
            } else {
              if (typeof tmp26 === "object") {
                if ("name" in tmp26) {
                  c1 = 3;
                  const obj3 = { value: null, done: true };
                  obj3[0] = outer1_3.loadFontByName(tmp26.name);
                  return obj3;
                }
              }
              if (typeof tmp26 === "object") {
                if ("uri" in tmp26) {
                  c1 = 3;
                  const obj4 = { value: null, done: true };
                  obj4[0] = outer1_5(tmp26.uri);
                  return obj4;
                }
              }
              if (typeof tmp26 === "string") {
                obj = /^https?:\/\//;
                if (!obj.test(tmp26)) {
                  obj1 = /^file:\/\//;
                  if (!obj1.test(tmp26)) {
                    const fontFromResource = outer1_3.loadFontFromResource(tmp26);
                  }
                  c1 = 3;
                }
                const fontFromURL = outer1_3.loadFontFromURL(tmp26);
              } else {
                const _Error2 = Error;
                const _String = String;
                const _HermesInternal2 = HermesInternal;
                const error1 = new Error("Invalid font source: " + String(tmp26));
                throw error1;
              }
            }
          }
        } catch (tmp20) {
          c1 = tmp;
          throw tmp20;
        }
      }
    })();
  });
  const _loadFont = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
_setFallbackFonts = function _setFallbackFonts(arg0) {
  const self = this;
  const tmp = _setFallbackFonts((arg0) => {
    let closure_0 = arg0;
    let c4 = 0;
    let c3 = 0;
    let c6 = 0;
    return (function*(arg0) {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp2 === 3) {
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
        while (true) {
          let num = 2;
          c3 = 2;
          if (0 === v0) {
            if (arg0 === 1) {
              let num7 = 3;
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              let num6 = 3;
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let tmp23 = callback;
              let _Object = Object;
              let entries = Object.entries(callback);
              let tmp25 = entries;
              let closure_1 = entries[Symbol.iterator]();
              let tmp7 = entries;
              let tmp8 = closure_1;
              while (closure_1 !== undefined) {
                let c6 = 1;
                let tmp10 = callback;
                let tmp11 = callback(tmp9, 2);
                let tmp13 = tmp11[1];
                if (tmp13) {
                  let tmp14 = c3;
                  let tmp15 = v0;
                  let setFontsForWeightResult = c3.setFontsForWeight(v0(tmp12), tmp13);
                }
                c6 = 0;
                continue;
              }
              let tmp17 = c3;
              v0 = 2;
              let num5 = 1;
              c3 = 1;
              let obj1 = { value: null, done: false };
              obj1[0] = c3.applyFallbackFonts();
              return obj1;
            }
          } else if (1 === tmp3) {
            let tmp4 = closure_5;
            let tmp5 = closure_5;
            c6 = 0;
            let tmp6 = closure_1;
            closure_1.return();
            throw closure_5;
          } else if (arg0 === 1) {
            let num4 = 3;
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            let num3 = 3;
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let num2 = 3;
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        }
      }
    })();
  });
  _setFallbackFonts = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
_clearFallbackFonts = function _clearFallbackFonts() {
  const self = this;
  const tmp = _setFallbackFonts(function*() {
    if (c0 === 2) {
      c0 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
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
        c0 = 2;
        if (arg0 === 1) {
          c0 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c0 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          c0 = 3;
          obj = { value: null, done: true };
          obj[0] = outer1_3.clearFallbackFonts();
          return obj;
        }
      } catch (tmp5) {
        c0 = tmp;
        throw tmp5;
      }
    }
  });
  const _clearFallbackFonts = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};

export const RiveFonts = {
  loadFont(arg0) {
    const self = this;
    const apply = _loadFont.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  systemFallback() {
    return closure_3.getSystemDefaultFont();
  },
  setFallbackFonts(arg0) {
    const self = this;
    const apply = _setFallbackFonts.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  clearFallbackFonts() {
    const self = this;
    const apply = _clearFallbackFonts.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
};