// _runtime/04588_resolveWeight.js
import "module_32";
import "asyncGeneratorStep";

const require = globalThis.__r;

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
fn(17).Image;
const NitroModules = fn(4558).NitroModules;
let closure_3 = NitroModules.createHybridObject("RiveFontConfig");
let _slicedToArray = function _loadFont() {
  const self = this;
  const tmp = asyncGeneratorStep(async (arg0) => {
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
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
              const obj6 = { value: loadFontByURI(assetSource.uri), done: true };
              return obj6;
            } else {
              const _Error = Error;
              const _HermesInternal = HermesInternal;
              const error = new Error(
                "Invalid font asset: could not resolve require() ID " +
                  closure_0 +
                  ". Ensure 'ttf' is in metro.config.js assetExts.",
              );
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
                const obj8 = { value: loadFontByURI(closure_0.uri), done: true };
                return obj8;
              }
            }
            if (typeof closure_0 === "string") {
              if (!obj.test(closure_0)) {
                if (!obj2.test(closure_0)) {
                  const fontFromResource = closure_1_3.loadFontFromResource(closure_0);
                }
                c1 = 3;
                obj2 = /^file:\/\//;
              }
              const fontFromURL = closure_1_3.loadFontFromURL(closure_0);
              obj = /^https?:\/\//;
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
  });
  _slicedToArray = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
let asyncGeneratorStep = function _setFallbackFonts() {
  const self = this;
  const tmp = asyncGeneratorStep(async (arg0) => {
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
        return { value: "HermesInternal", done: null };
      }
    } else {
      while (true) {
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
              c6 = 1;
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
          throw loadFontByURI;
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          let obj = { value, done: true };
          return obj;
        } else {
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      }
    }
  });
  asyncGeneratorStep = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
const Image = async function _clearFallbackFonts() {
  if (c0 === 2) {
    c0 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
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
        const obj = { value: closure_1_3.clearFallbackFonts(), done: true };
        return obj;
      }
    } catch (tmp5) {
      c0 = tmp;
      throw tmp5;
    }
  }
};

export const RiveFonts = {
  loadFont(arg0) {
    const self = this;
    const apply = _slicedToArray.apply;
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
    const apply = asyncGeneratorStep.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  clearFallbackFonts() {
    const self = this;
    const apply = closure_2.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
};
