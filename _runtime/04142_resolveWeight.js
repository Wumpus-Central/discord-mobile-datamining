// _runtime/04142_resolveWeight.js
import "_slicedToArray";
import "asyncGeneratorStep";
import { NitroModules } from "metro/04112__.js";

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
  obj = /^https?:\/\//;
}
require("get ActivityIndicator").Image;
let closure_3 = NitroModules.createHybridObject("RiveFontConfig");
function _loadFont() {
  const self = this;
  const tmp = _setFallbackFonts((arg0) => {
    closure_0 = arg0;
    c1 = 0;
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              obj1 = { value: null, done: true };
              obj1[0] = closure_1_3.loadFontFromBytes(closure_0);
              return obj1;
            } else if (typeof closure_0 === "number") {
              const assetSource = closure_1_2.resolveAssetSource(closure_0);
              let uri;
              if (assetSource != null) {
                uri = assetSource.uri;
              }
              if (uri) {
                c1 = 3;
                const obj2 = { value: null, done: true };
                obj2[0] = closure_1_5(assetSource.uri);
                return obj2;
              } else {
                const _Error = Error;
                const _HermesInternal = HermesInternal;
                error = new Error("Invalid font asset: could not resolve require() ID " + closure_0 + ". Ensure 'ttf' is in metro.config.js assetExts.");
                throw error;
              }
            } else {
              if (typeof closure_0 === "object") {
                if ("name" in closure_0) {
                  c1 = 3;
                  const obj3 = { value: null, done: true };
                  obj3[0] = closure_1_3.loadFontByName(closure_0.name);
                  return obj3;
                }
              }
              if (typeof closure_0 === "object") {
                if ("uri" in closure_0) {
                  c1 = 3;
                  const obj4 = { value: null, done: true };
                  obj4[0] = closure_1_5(closure_0.uri);
                  return obj4;
                }
              }
              if (typeof closure_0 === "string") {
                obj = /^https?:\/\//;
                if (!obj.test(closure_0)) {
                  obj1 = /^file:\/\//;
                  if (!obj1.test(closure_0)) {
                    const fontFromResource = closure_1_3.loadFontFromResource(closure_0);
                  }
                  c1 = 3;
                }
                const fontFromURL = closure_1_3.loadFontFromURL(closure_0);
              } else {
                const _Error2 = Error;
                const _String = String;
                const _HermesInternal2 = HermesInternal;
                const error1 = new Error("Invalid font source: " + String(closure_0));
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
  closure_0 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _setFallbackFonts(arg0) {
  const self = this;
  const tmp = _setFallbackFonts((arg0) => {
    closure_0 = arg0;
    c4 = 0;
    c3 = 0;
    c6 = 0;
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
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        while (true) {
          c3 = 2;
          if (0 === v0) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let _Object = Object;
              let entries = Object.entries(callback);
              closure_1 = entries[Symbol.iterator]();
              while (closure_1 !== undefined) {
                c6 = 1;
                let tmp11 = callback(tmp9, 2);
                let tmp13 = tmp11[1];
                if (tmp13) {
                  let setFontsForWeightResult = c3.setFontsForWeight(v0(tmp12), tmp13);
                }
                c6 = 0;
                continue;
              }
              v0 = 2;
              c3 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = c3.applyFallbackFonts();
              return obj1;
            }
          } else if (1 === tmp3) {
            c6 = 0;
            closure_1.return();
            throw closure_5;
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c3 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        }
      }
    })();
  });
  closure_1 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _clearFallbackFonts() {
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
        return { value: "HermesInternal", done: "HermesInternal" };
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
          obj[0] = closure_1_3.clearFallbackFonts();
          return obj;
        }
      } catch (tmp5) {
        c0 = tmp;
        throw tmp5;
      }
    }
  });
  closure_2 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}

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