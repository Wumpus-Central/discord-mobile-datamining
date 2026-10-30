// === Module 9500: DominantColorUtils ===

// Module 9500 (DominantColorUtils)
import nativeDefault from "native" /* 575 */;
import privDefault from "priv" /* 1452 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const Image = fn(17).Image;
let closure_6 = new privDefault({ max: 1000 });
let tmp2 = new privDefault({ max: 1000 });
let closure_7 = new privDefault({ max: 1000 });
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/card/DominantColorUtils.tsx");

export function getCachedSourceFromURI(avatarURL) {
  value = closure_7.get(avatarURL);
  if (value == null) {
    let tmp2 = avatarURL;
    if (typeof avatarURL !== "number") {
      let tmp3 = null;
      if (null != avatarURL) {
        tmp3 = null;
        if ("" !== avatarURL.trim()) {
          const obj2 = { uri: avatarURL };
          tmp3 = obj2;
        }
      }
      tmp2 = tmp3;
    }
    value = tmp2;
  }
  const result = closure_7.set(avatarURL, value);
  return value;
}
export function useDominantRGBFromImage(arg0) {
  _require = arg0;
  importDefault = noop.useRef(true);
  const effect = noop.useEffect(() => () => {
    closure_1_1.current = false;
  }, []);
  let hexToRgbResult;
  if (null != arg0) {
    hexToRgbResult = closure_6.get(arg0);
  }
  if (hexToRgbResult == null) {
    hexToRgbResult = require("ColorUtils").hexToRgb(nativeDefault.unsafe_rawColors.PRIMARY_800);
    const obj2 = require("ColorUtils");
  }
  const tmp7 = _slicedToArray(noop.useState(hexToRgbResult), 2);
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
            let dominantColorsLocalAsset = ref(1894).getDominantColorsLocalAsset(Image.resolveAssetSource(value2));
            const obj3 = ref(1894);
          } else {
            dominantColorsLocalAsset = ref(1894).getDominantColors(Image.resolveAssetSource(value2));
            const obj4 = ref(1894);
          }
          dominantColorsLocalAsset.then((result) => {
            const tmp = _slicedToArray(result[0], 3);
            const obj = { r: tmp[0], g: tmp[1], b: tmp[2] };
            result = closure_2_6.set(value, obj);
            if (ref.current) {
              dependencyMap(obj);
            }
          }).catch(() => {

          });
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
}
export function useDominantColorFromImage(avatarURI) {
  _require = avatarURI;
  importDefault = noop.useRef(true);
  const effect = noop.useEffect(() => () => {
    closure_1_1.current = false;
  }, []);
  let hexToRgbResult;
  if (null != avatarURI) {
    hexToRgbResult = closure_6.get(avatarURI);
  }
  if (hexToRgbResult == null) {
    hexToRgbResult = require("ColorUtils").hexToRgb(nativeDefault.unsafe_rawColors.PRIMARY_800);
    let obj2 = require("ColorUtils");
  }
  [tmp8, dependencyMap] = noop.useState(hexToRgbResult);
  const items = [avatarURI];
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
            let dominantColorsLocalAsset = ref(1894).getDominantColorsLocalAsset(Image.resolveAssetSource(value2));
            const obj3 = ref(1894);
          } else {
            dominantColorsLocalAsset = ref(1894).getDominantColors(Image.resolveAssetSource(value2));
            const obj4 = ref(1894);
          }
          dominantColorsLocalAsset.then((result) => {
            const tmp = _slicedToArray(result[0], 3);
            const obj = { r: tmp[0], g: tmp[1], b: tmp[2] };
            result = closure_2_6.set(value, obj);
            if (ref.current) {
              dependencyMap(obj);
            }
          }).catch(() => {

          });
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
  return "rgb(" + tmp8.r + ", " + tmp8.g + ", " + tmp8.b + ")";
}