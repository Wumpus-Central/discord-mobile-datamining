// === Module 9229: getCachedSourceFromURI ===

// Module 9229 (getCachedSourceFromURI)
import ThemesDefault from "Themes" /* 712 */;
import privDefault from "priv" /* 1405 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const require = fn;
({ NativeModules: c5, Image: closure_6 } = get_ActivityIndicator);
let closure_7 = new privDefault({ max: 1000 });
let tmp3 = new privDefault({ max: 1000 });
let closure_8 = new privDefault({ max: 1000 });
const tmp4 = new privDefault({ max: 1000 });
let result = require("obj132").fileFinishedImporting("modules/voice_panel/native/card/DominantColorUtils.tsx");

export const getCachedSourceFromURI = function getCachedSourceFromURI(avatarURI) {
  let obj = closure_8;
  let value = closure_8.get(avatarURI);
  if (value == null) {
    let tmp2 = avatarURI;
    if (typeof avatarURI !== "number") {
      let tmp3 = null;
      if (null != avatarURI) {
        tmp3 = null;
        if ("" !== avatarURI.trim()) {
          obj = { uri: null };
          obj[0] = avatarURI;
          tmp3 = obj;
        }
      }
      tmp2 = tmp3;
    }
    value = tmp2;
  }
  const result = obj.set(avatarURI, value);
  return value;
};
export const useDominantRGBFromImage = function useDominantRGBFromImage(arg0) {
  const _require = arg0;
  importDefault = React.useRef(true);
  const effect = React.useEffect(() => () => {
    closure_1.current = false;
  }, []);
  let hexToRgbResult;
  if (null != arg0) {
    hexToRgbResult = store.get(arg0);
  }
  if (hexToRgbResult == null) {
    hexToRgbResult = _require(4223).hexToRgb(ThemesDefault.unsafe_rawColors.PRIMARY_800);
    const obj2 = _require(4223);
  }
  const tmp7 = callback(React.useState(hexToRgbResult), 2);
  dependencyMap = tmp7[1];
  const items = [arg0];
  const effect1 = React.useEffect(() => {
    let value;
    if (null != closure_0) {
      value = closure_1_7.get(str);
    }
    closure_0 = value;
    if (null != closure_0) {
      if (null == value) {
        let obj = closure_1_8;
        value = closure_1_8.get(str);
        if (value == null) {
          let tmp6 = str;
          if (typeof str !== "number") {
            let tmp7 = null;
            if (null != str) {
              tmp7 = null;
              if ("" !== str.trim()) {
                obj = { uri: null };
                obj[0] = str;
                tmp7 = obj;
              }
            }
            tmp6 = tmp7;
          }
          value = tmp6;
        }
        let result = obj.set(str, value);
        if (null != value) {
          if (typeof value === "number") {
            const ImageManager = closure_1_5.ImageManager;
            let dominantColorsLocalAsset = ImageManager.getDominantColorsLocalAsset(closure_1_6.resolveAssetSource(value));
          } else {
            const ImageManager2 = closure_1_5.ImageManager;
            dominantColorsLocalAsset = ImageManager2.getDominantColors(closure_1_6.resolveAssetSource(value));
          }
          dominantColorsLocalAsset.then((result) => {
            const tmp = closure_1_3(result[0], 3);
            const obj = { r: tmp[0], g: tmp[1], b: tmp[2] };
            result = closure_1_7.set(closure_0, obj);
            if (ref.current) {
              callback(obj);
            }
          }).catch((error) => {

          });
          const nextPromise = dominantColorsLocalAsset.then((result) => {
            const tmp = closure_1_3(result[0], 3);
            const obj = { r: tmp[0], g: tmp[1], b: tmp[2] };
            result = closure_1_7.set(closure_0, obj);
            if (ref.current) {
              callback(obj);
            }
          });
        }
      } else {
        callback((arg0) => {
          let tmp = closure_0;
          if (closure_0 === arg0) {
            tmp = arg0;
          }
          return tmp;
        });
      }
    }
  }, items);
  return tmp7[0];
};
export const useDominantColorFromImage = function useDominantColorFromImage(arg0) {
  const _require = arg0;
  importDefault = React.useRef(true);
  const effect = React.useEffect(() => () => {
    closure_1.current = false;
  }, []);
  let hexToRgbResult;
  if (null != arg0) {
    hexToRgbResult = store.get(arg0);
  }
  if (hexToRgbResult == null) {
    hexToRgbResult = _require(4223).hexToRgb(ThemesDefault.unsafe_rawColors.PRIMARY_800);
    const obj2 = _require(4223);
  }
  [tmp8, dependencyMap] = callback(React.useState(hexToRgbResult), 2);
  const items = [arg0];
  const effect1 = React.useEffect(() => {
    let value;
    if (null != closure_0) {
      value = closure_1_7.get(str);
    }
    closure_0 = value;
    if (null != closure_0) {
      if (null == value) {
        let obj = closure_1_8;
        value = closure_1_8.get(str);
        if (value == null) {
          let tmp6 = str;
          if (typeof str !== "number") {
            let tmp7 = null;
            if (null != str) {
              tmp7 = null;
              if ("" !== str.trim()) {
                obj = { uri: null };
                obj[0] = str;
                tmp7 = obj;
              }
            }
            tmp6 = tmp7;
          }
          value = tmp6;
        }
        let result = obj.set(str, value);
        if (null != value) {
          if (typeof value === "number") {
            const ImageManager = closure_1_5.ImageManager;
            let dominantColorsLocalAsset = ImageManager.getDominantColorsLocalAsset(closure_1_6.resolveAssetSource(value));
          } else {
            const ImageManager2 = closure_1_5.ImageManager;
            dominantColorsLocalAsset = ImageManager2.getDominantColors(closure_1_6.resolveAssetSource(value));
          }
          dominantColorsLocalAsset.then((result) => {
            const tmp = closure_1_3(result[0], 3);
            const obj = { r: tmp[0], g: tmp[1], b: tmp[2] };
            result = closure_1_7.set(closure_0, obj);
            if (ref.current) {
              callback(obj);
            }
          }).catch((error) => {

          });
          const nextPromise = dominantColorsLocalAsset.then((result) => {
            const tmp = closure_1_3(result[0], 3);
            const obj = { r: tmp[0], g: tmp[1], b: tmp[2] };
            result = closure_1_7.set(closure_0, obj);
            if (ref.current) {
              callback(obj);
            }
          });
        }
      } else {
        callback((arg0) => {
          let tmp = closure_0;
          if (closure_0 === arg0) {
            tmp = arg0;
          }
          return tmp;
        });
      }
    }
  }, items);
  return "rgb(" + tmp8.r + ", " + tmp8.g + ", " + tmp8.b + ")";
};