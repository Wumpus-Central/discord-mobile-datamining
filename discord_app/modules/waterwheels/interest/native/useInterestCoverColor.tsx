// === Module 18673: useInterestCoverColor ===

// Module 18673 (useInterestCoverColor)
import _modDef671 from "module_671" /* 671 */;
import privDefault from "priv" /* 1453 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
function accessibleCoverColor(arg0) {
  let hexResult1;
  let tmp10Result;
  let tmp10Result2;
  const tmp4 = _slicedToArray(_modDef671(...arg0).hsl(), 3);
  [tmp5, tmp6] = tmp4;
  let bound = Math.min(tmp4[2], 0.36);
  const tmp3Result = _modDef671(...arg0);
  let num = 0;
  if (Number.isFinite(tmp5)) {
    num = tmp5;
  }
  let hexResult = _modDef671.hsl(num, Math.min(tmp6, 0.35), bound).hex();
  const hslResult = _modDef671.hsl(num, Math.min(tmp6, 0.35), bound);
  const tmpResult = _modDef671;
  if (tmpResult.contrast("#ffffff", tmpResult2.mix(hexResult, "#ffffff", 0.12, "rgb")) < sum) {
    do {
      let _Math = Math;
      let bound1 = Math.max(0, bound - 0.01);
      let obj6 = _modDef671;
      let _Number = Number;
      let num2 = 0;
      if (Number.isFinite(tmp5)) {
        num2 = tmp5;
      }
      let _Math2 = Math;
      let hslResult1 = obj6.hsl(num2, Math.min(tmp6, 0.35), bound1);
      hexResult1 = hslResult1.hex();
      tmp10Result = _modDef671;
      tmp10Result2 = _modDef671;
      let str = "#ffffff";
      let str2 = "rgb";
      bound = bound1;
      hexResult = hexResult1;
    } while (tmp10Result.contrast("#ffffff", tmp10Result2.mix(hexResult1, "#ffffff", 0.12, "rgb")) < sum);
  }
  return hexResult;
}
function fetchInterestCoverColor(arg0, uri) {
  closure_2 = async function _extractColor() {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_1 = tmp3;
            uri = tmp7;
            closure_128_0 = undefined;
            closure_128_1 = undefined;
            c2 = 1;
            c3 = 2;
            c4 = 1;
            const obj5 = { value: uri(c2[6]).getPaletteForAvatar(uri), done: false };
            return obj5;
          }
        } else if (1 === tmp7) {
          c2 = 0;
          c4 = 3;
          return { value: null, done: true };
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 0;
          c4 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_128_0 = value;
          let first;
          if (closure_128_0 != null) {
            first = closure_128_0[0];
          }
          closure_128_1 = first;
          let color = null;
          if (null != closure_128_1) {
            color = null;
            if (!closure_128_1.some((item) => {
              const isFiniteResult = Number.isFinite(item);
              let tmp2 = !isFiniteResult;
              if (isFiniteResult) {
                tmp2 = item < 0;
              }
              if (!tmp2) {
                tmp2 = item > 255;
              }
              return tmp2;
            })) {
              closure_129_1.color = accessibleCoverColor(closure_128_1);
              color = closure_129_1.color;
            }
          }
          c2 = 0;
          c4 = 3;
          const obj = { value: color, done: true };
          return obj;
        }
      } catch (tmp22) {
        if (tmp4 === c2) {
          c4 = tmp2;
          throw tmp22;
        } else {
          c3 = tmp;
        }
      }
    }
  };
  value = closure_7.get(arg0);
  uri = undefined;
  if (value != null) {
    uri = value.uri;
  }
  if (uri === uri) {
    return value.pending;
  } else {
    let obj2 = {
      uri,
      color: null,
      pending: (function extractColor() {
          const self = this;
          const apply = closure_2.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        })()
    };
    const result = closure_7.set(arg0, obj2);
    return obj2.pending;
  }
}
const sum = fn(5148).WCAGContrastRatios.Text + 0.3;
let closure_7 = new privDefault({ max: 256 });
const size = fn(2);
let result = size.fileFinishedImporting("modules/waterwheels/interest/native/useInterestCoverColor.tsx");

export default function useInterestCoverColor(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  [tmp2, dependencyMap] = noop.useState(null);
  items = [arg0, arg1];
  const effect = noop.useEffect(() => {
    closure_2 = async function _resolveColor() {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
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
          c3 = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_1 = tmp5;
              const gameId = tmp2;
              closure_128_0 = undefined;
              v1 = 1;
              c3 = 1;
              const obj4 = { value: fetchInterestCoverColor(gameId, closure_2_0), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_128_0 = value;
            if (closure_129_1) {
              const obj = { gameId, uri: closure_129_0, color: closure_128_0 };
              v1(obj);
            }
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp17) {
          c3 = tmp;
          throw tmp17;
        }
      }
    };
    if (null != c1) {
      closure_0 = c1;
      c1 = true;
      (function resolveColor() {
        const self = this;
        const apply = closure_2.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })();
      return () => {
        c1 = false;
      };
    }
  }, items);
  if (null == arg1) {
    return null;
  } else {
    let gameId;
    if (tmp2 != null) {
      gameId = tmp2.gameId;
    }
    if (gameId === arg0) {
      if (tmp2.uri === arg1) {
        return tmp2.color;
      }
    }
    value = closure_7.get(arg0);
    let uri;
    if (value != null) {
      uri = value.uri;
    }
    let color = null;
    if (uri === arg1) {
      color = value.color;
    }
    return color;
  }
  const tmp = _slicedToArray(noop.useState(null), 2);
};
export const COVER_TEXTURE_OPACITY = 0.12;
export const COVER_COLOR_MAX_SATURATION = 0.35;
export const COVER_COLOR_MAX_LIGHTNESS = 0.36;
export const COVER_COLOR_TEXT_CONTRAST = sum;
export const COVER_ART_LUMINANCE_RATIO = 0.5;
export { accessibleCoverColor };
export function coverArtColor(backgroundColor) {
  const obj = _modDef671(backgroundColor);
  return obj.luminance(0.5 * obj.luminance()).hex();
}
export { fetchInterestCoverColor };