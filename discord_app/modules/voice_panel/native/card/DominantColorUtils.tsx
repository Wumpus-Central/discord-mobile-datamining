// discord_app/modules/voice_panel/native/card/DominantColorUtils.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import privDefault from "../../../../../_runtime/01457_priv.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
const Image = fn(17).Image;
let closure_6 = new privDefault({ max: 1000 });
let tmp2 = new privDefault({ max: 1000 });
let closure_7 = new privDefault({ max: 1000 });
let ReactCompilerGating = fn(558);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useDominantRGBFromImage(arg0) {
      _require = arg0;
      const cResult = require("c").c(7);
      importDefault = noop.useRef(true);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function l() {
          return () => {
            closure_1_1.current = false;
          };
        };
        const items = [];
        cResult[0] = fn;
        cResult[1] = items;
        tmp4 = fn;
        tmp5 = items;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const effect = noop.useEffect(tmp4, tmp5);
      if (cResult[2] !== arg0) {
        let hexToRgbResult;
        if (null != arg0) {
          hexToRgbResult = closure_6.get(arg0);
        }
        if (hexToRgbResult == null) {
          hexToRgbResult = tmp(4967).hexToRgb(nativeDefault.unsafe_rawColors.PRIMARY_800);
          const tmpResult = tmp(4967);
        }
        cResult[2] = arg0;
        cResult[3] = hexToRgbResult;
        let tmp7 = hexToRgbResult;
      } else {
        tmp7 = cResult[3];
      }
      let obj = require("c");
      tmp = _require;
      [tmp13, dependencyMap] = noop.useState(tmp7);
      if (cResult[4] !== arg0) {
        const fn2 = function v() {
          value = undefined;
          if (null != closure_0) {
            value = closure_1_6.get(str);
          }
          closure_0 = value;
          if (null != closure_0) {
            if (null == value) {
              value2 = closure_1_7.get(str);
              if (value2 == null) {
                let tmp6 = str;
                if (typeof str !== "number") {
                  let tmp7 = null;
                  if (null != str) {
                    tmp7 = null;
                    if ("" !== str.trim()) {
                      const obj2 = { uri: str };
                      tmp7 = obj2;
                    }
                  }
                  tmp6 = tmp7;
                }
                value2 = tmp6;
              }
              let result = closure_1_7.set(str, value2);
              if (null != value2) {
                if (typeof value2 === "number") {
                  let dominantColorsLocalAsset = ref(1899).getDominantColorsLocalAsset(
                    Image.resolveAssetSource(value2),
                  );
                  const obj3 = ref(1899);
                } else {
                  dominantColorsLocalAsset = ref(1899).getDominantColors(Image.resolveAssetSource(value2));
                  const obj4 = ref(1899);
                }
                dominantColorsLocalAsset
                  .then((result) => {
                    const tmp = _slicedToArray(result[0], 3);
                    const obj = { r: tmp[0], g: tmp[1], b: tmp[2] };
                    result = closure_2_6.set(value, obj);
                    if (ref.current) {
                      dependencyMap(obj);
                    }
                  })
                  .catch(() => {});
                const nextPromise = dominantColorsLocalAsset.then((result) => {
                  const tmp = _slicedToArray(result[0], 3);
                  const obj = { r: tmp[0], g: tmp[1], b: tmp[2] };
                  result = closure_2_6.set(value, obj);
                  if (ref.current) {
                    dependencyMap(obj);
                  }
                });
              }
            } else {
              dependencyMap((arg0) => {
                let tmp = value;
                if (value === arg0) {
                  tmp = arg0;
                }
                return tmp;
              });
            }
          }
        };
        const items1 = [arg0];
        cResult[4] = arg0;
        cResult[5] = fn2;
        cResult[6] = items1;
        let tmp15 = items1;
        let tmp14 = fn2;
      } else {
        tmp14 = cResult[5];
        tmp15 = cResult[6];
      }
      const effect1 = noop.useEffect(tmp14, tmp15);
      return tmp13;
    }
  : function useDominantRGBFromImage(arg0) {
      _require = arg0;
      importDefault = noop.useRef(true);
      const effect = noop.useEffect(
        () => () => {
          closure_1_1.current = false;
        },
        [],
      );
      let hexToRgbResult;
      if (null != arg0) {
        hexToRgbResult = closure_6.get(arg0);
      }
      if (hexToRgbResult == null) {
        hexToRgbResult = require("ColorUtils").hexToRgb(nativeDefault.unsafe_rawColors.PRIMARY_800);
        let obj2 = require("ColorUtils");
      }
      let tmp7 = _slicedToArray(noop.useState(hexToRgbResult), 2);
      dependencyMap = tmp7[1];
      const items = [arg0];
      const effect1 = noop.useEffect(() => {
        value = undefined;
        if (null != closure_0) {
          value = closure_1_6.get(str);
        }
        closure_0 = value;
        if (null != closure_0) {
          if (null == value) {
            value2 = closure_1_7.get(str);
            if (value2 == null) {
              let tmp6 = str;
              if (typeof str !== "number") {
                let tmp7 = null;
                if (null != str) {
                  tmp7 = null;
                  if ("" !== str.trim()) {
                    const obj2 = { uri: str };
                    tmp7 = obj2;
                  }
                }
                tmp6 = tmp7;
              }
              value2 = tmp6;
            }
            let result = closure_1_7.set(str, value2);
            if (null != value2) {
              if (typeof value2 === "number") {
                let dominantColorsLocalAsset = ref(1899).getDominantColorsLocalAsset(Image.resolveAssetSource(value2));
                const obj3 = ref(1899);
              } else {
                dominantColorsLocalAsset = ref(1899).getDominantColors(Image.resolveAssetSource(value2));
                const obj4 = ref(1899);
              }
              dominantColorsLocalAsset
                .then((result) => {
                  const tmp = _slicedToArray(result[0], 3);
                  const obj = { r: tmp[0], g: tmp[1], b: tmp[2] };
                  result = closure_2_6.set(value, obj);
                  if (ref.current) {
                    dependencyMap(obj);
                  }
                })
                .catch(() => {});
              const nextPromise = dominantColorsLocalAsset.then((result) => {
                const tmp = _slicedToArray(result[0], 3);
                const obj = { r: tmp[0], g: tmp[1], b: tmp[2] };
                result = closure_2_6.set(value, obj);
                if (ref.current) {
                  dependencyMap(obj);
                }
              });
            }
          } else {
            dependencyMap((arg0) => {
              let tmp = value;
              if (value === arg0) {
                tmp = arg0;
              }
              return tmp;
            });
          }
        }
      }, items);
      return tmp7[0];
    };
let closure_8 = tmp4;
ReactCompilerGating = fn(558);
let tmp3 = new privDefault({ max: 1000 });
function getCachedSourceFromURI(avatarURI) {
  value = closure_7.get(avatarURI);
  if (value == null) {
    let tmp2 = avatarURI;
    if (typeof avatarURI !== "number") {
      let tmp3 = null;
      if (null != avatarURI) {
        tmp3 = null;
        if ("" !== avatarURI.trim()) {
          const obj2 = { uri: avatarURI };
          tmp3 = obj2;
        }
      }
      tmp2 = tmp3;
    }
    value = tmp2;
  }
  const result = closure_7.set(avatarURI, value);
  return value;
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/card/DominantColorUtils.tsx");

export { getCachedSourceFromURI };
export const useDominantRGBFromImage = tmp4;
export const useDominantColorFromImage = ReactCompilerGating.isReactCompilerEnabled()
  ? function useDominantColorFromImage(arg0) {
      const tmp = closure_8(arg0);
      return "rgb(" + tmp.r + ", " + tmp.g + ", " + tmp.b + ")";
    }
  : function useDominantColorFromImage(arg0) {
      const tmp = closure_8(arg0);
      return "rgb(" + tmp.r + ", " + tmp.g + ", " + tmp.b + ")";
    };
