// === Module 8515: DominantColorUtils ===

// Module 8515 (DominantColorUtils)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import LRUCacheDefault from "LRUCache" /* 1444 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault, uri;

const Image = react_native.Image;
let tmp2 = new LRUCacheDefault({ max: 1000 });
let closure_6 = tmp2;
let tmp3 = new LRUCacheDefault({ max: 1000 });
let closure_7 = tmp3;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((uri) => {
  let closure_1;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp4;
  let tmp5;
  let tmp7;
  _require = uri;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(7);
  importDefault = react.useRef(true);
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
  const effect = react.useEffect(tmp4, tmp5);
  if (cResult[2] !== uri) {
    let hexToRgbResult;
    if (null != uri) {
      hexToRgbResult = closure_6.get(uri);
    }
    if (hexToRgbResult == null) {
      const tmpResult = tmp(4733);
      hexToRgbResult = tmpResult.hexToRgb(nativeDefault.unsafe_rawColors.PRIMARY_800);
    }
    cResult[2] = uri;
    cResult[3] = hexToRgbResult;
    tmp7 = hexToRgbResult;
  } else {
    tmp7 = cResult[3];
  }
  [tmp13, dependencyMap] = react.useState(tmp7);
  _slicedToArray(react.useState(tmp7), 2);
  if (cResult[4] !== uri) {
    const fn2 = function v() {
      let value;
      if (null != uri) {
        value = closure_1_6.get(str);
      }
      uri = value;
      if (null != uri) {
        if (null == value) {
          let value2 = closure_1_7.get(str);
          if (value2 == null) {
            let tmp6 = str;
            if (typeof uri !== "number") {
              let tmp7 = null;
              if (null != uri) {
                tmp7 = null;
                if ("" !== uri.trim()) {
                  tmp7 = { uri };
                  const obj2 = { uri };
                }
              }
              tmp6 = tmp7;
            }
            value2 = tmp6;
          }
          let result = closure_1_7.set(str, value2);
          if (null != value2) {
            let dominantColorsLocalAsset;
            if (typeof value2 === "number") {
              const obj3 = ref(dependencyMap[9]);
              dominantColorsLocalAsset = obj3.getDominantColorsLocalAsset(Image.resolveAssetSource(value2));
            } else {
              const obj4 = ref(dependencyMap[9]);
              dominantColorsLocalAsset = obj4.getDominantColors(Image.resolveAssetSource(value2));
            }
            const nextPromise = dominantColorsLocalAsset.then((result) => {
              const tmp = _slicedToArray(result[0], 3);
              const obj = { r: tmp[0], g: tmp[1], b: tmp[2] };
              result = closure_2_6.set(closure_0, obj);
              if (ref.current) {
                closure_1_2(obj);
              }
            });
            nextPromise.catch(() => {

            });
          }
        } else {
          dependencyMap((arg0) => {
            let tmp = closure_0;
            if (closure_0 === arg0) {
              tmp = arg0;
            }
            return tmp;
          });
        }
      }
    };
    const items1 = [uri];
    cResult[4] = uri;
    cResult[5] = fn2;
    cResult[6] = items1;
    tmp15 = items1;
    tmp14 = fn2;
  } else {
    tmp14 = cResult[5];
    tmp15 = cResult[6];
  }
  const effect1 = react.useEffect(tmp14, tmp15);
  return tmp13;
}) : ((uri) => {
  let closure_1;
  let closure_2;
  let first;
  _require = uri;
  importDefault = react.useRef(true);
  const effect = react.useEffect(() => () => {
    closure_1_1.current = false;
  }, []);
  let hexToRgbResult;
  const useState = react.useState;
  if (null != uri) {
    hexToRgbResult = closure_6.get(uri);
  }
  if (hexToRgbResult == null) {
    let obj2 = require("ColorUtils");
    let tmp6 = importDefault;
    hexToRgbResult = obj2.hexToRgb(nativeDefault.unsafe_rawColors.PRIMARY_800);
  }
  [first, dependencyMap] = useState(hexToRgbResult);
  const items = [uri];
  const effect1 = react.useEffect(() => {
    let value;
    if (null != uri) {
      value = closure_1_6.get(str);
    }
    uri = value;
    if (null != uri) {
      if (null == value) {
        let value2 = closure_1_7.get(str);
        if (value2 == null) {
          let tmp6 = str;
          if (typeof uri !== "number") {
            let tmp7 = null;
            if (null != uri) {
              tmp7 = null;
              if ("" !== uri.trim()) {
                tmp7 = { uri };
                const obj2 = { uri };
              }
            }
            tmp6 = tmp7;
          }
          value2 = tmp6;
        }
        let result = closure_1_7.set(str, value2);
        if (null != value2) {
          let dominantColorsLocalAsset;
          if (typeof value2 === "number") {
            const obj3 = ref(closure_2[9]);
            dominantColorsLocalAsset = obj3.getDominantColorsLocalAsset(Image.resolveAssetSource(value2));
          } else {
            const obj4 = ref(closure_2[9]);
            dominantColorsLocalAsset = obj4.getDominantColors(Image.resolveAssetSource(value2));
          }
          const nextPromise = dominantColorsLocalAsset.then((result) => {
            const tmp = _slicedToArray(result[0], 3);
            const obj = { r: tmp[0], g: tmp[1], b: tmp[2] };
            result = closure_2_6.set(closure_0, obj);
            if (ref.current) {
              closure_1_2(obj);
            }
          });
          nextPromise.catch(() => {

          });
        }
      } else {
        closure_2((arg0) => {
          let tmp = closure_0;
          if (closure_0 === arg0) {
            tmp = arg0;
          }
          return tmp;
        });
      }
    }
  }, items);
  return first;
});
let closure_8 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const tmp = closure_8(arg0);
  return "rgb(" + tmp.r + ", " + tmp.g + ", " + tmp.b + ")";
}) : ((arg0) => {
  const tmp = closure_8(arg0);
  return "rgb(" + tmp.r + ", " + tmp.g + ", " + tmp.b + ")";
});
function getCachedSourceFromURI(avatarURI) {
  let value = closure_7.get(avatarURI);
  if (value == null) {
    let tmp2 = avatarURI;
    if (typeof avatarURI !== "number") {
      let tmp3 = null;
      if (null != avatarURI) {
        tmp3 = null;
        if ("" !== avatarURI.trim()) {
          tmp3 = { uri: avatarURI };
          const obj2 = { uri: avatarURI };
        }
      }
      tmp2 = tmp3;
    }
    value = tmp2;
  }
  const result = closure_7.set(avatarURI, value);
  return value;
}
let result = size.fileFinishedImporting("modules/voice_panel/native/card/DominantColorUtils.tsx");

export { getCachedSourceFromURI };
export const useDominantRGBFromImage = tmp4;
export const useDominantColorFromImage = tmp5;