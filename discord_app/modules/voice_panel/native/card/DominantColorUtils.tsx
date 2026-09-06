// discord_app/modules/voice_panel/native/card/DominantColorUtils.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import privDefault from "../../../../../_runtime/01437_priv.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
get_ActivityIndicator = fn(17);
({ NativeModules: hasOwnProperty, Image: metroRequire } = get_ActivityIndicator);
let closure_7 = new privDefault({ max: 1000 });
let tmp3 = new privDefault({ max: 1000 });
let closure_8 = new privDefault({ max: 1000 });
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/card/DominantColorUtils.tsx");

export const getCachedSourceFromURI = function getCachedSourceFromURI(avatarURI) {
  let obj = closure_8;
  value = closure_8.get(avatarURI);
  if (value == null) {
    let tmp2 = avatarURI;
    if (typeof avatarURI !== "number") {
      let tmp3 = null;
      if (null != avatarURI) {
        tmp3 = null;
        if ("" !== avatarURI.trim()) {
          obj = { uri: avatarURI };
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
    hexToRgbResult = closure_7.get(arg0);
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
                obj = { uri: str };
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
            let dominantColorsLocalAsset = ImageManager.getDominantColorsLocalAsset(
              closure_1_6.resolveAssetSource(value),
            );
          } else {
            const ImageManager2 = closure_1_5.ImageManager;
            dominantColorsLocalAsset = ImageManager2.getDominantColors(closure_1_6.resolveAssetSource(value));
          }
          dominantColorsLocalAsset
            .then((result) => {
              const tmp = _slicedToArray(result[0], 3);
              const obj = { r: tmp[0], g: tmp[1], b: tmp[2] };
              result = closure_2_7.set(value, obj);
              if (ref.current) {
                closure_1_2(obj);
              }
            })
            .catch(() => {});
          const nextPromise = dominantColorsLocalAsset.then((result) => {
            const tmp = _slicedToArray(result[0], 3);
            const obj = { r: tmp[0], g: tmp[1], b: tmp[2] };
            result = closure_2_7.set(value, obj);
            if (ref.current) {
              closure_1_2(obj);
            }
          });
        }
      } else {
        closure_2((arg0) => {
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
export const useDominantColorFromImage = function useDominantColorFromImage(arg0) {
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
    hexToRgbResult = closure_7.get(arg0);
  }
  if (hexToRgbResult == null) {
    hexToRgbResult = require("ColorUtils").hexToRgb(nativeDefault.unsafe_rawColors.PRIMARY_800);
    const obj2 = require("ColorUtils");
  }
  [tmp8, dependencyMap] = _slicedToArray(noop.useState(hexToRgbResult), 2);
  const items = [arg0];
  const effect1 = noop.useEffect(() => {
    value = undefined;
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
                obj = { uri: str };
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
            let dominantColorsLocalAsset = ImageManager.getDominantColorsLocalAsset(
              closure_1_6.resolveAssetSource(value),
            );
          } else {
            const ImageManager2 = closure_1_5.ImageManager;
            dominantColorsLocalAsset = ImageManager2.getDominantColors(closure_1_6.resolveAssetSource(value));
          }
          dominantColorsLocalAsset
            .then((result) => {
              const tmp = _slicedToArray(result[0], 3);
              const obj = { r: tmp[0], g: tmp[1], b: tmp[2] };
              result = closure_2_7.set(value, obj);
              if (ref.current) {
                closure_1_2(obj);
              }
            })
            .catch(() => {});
          const nextPromise = dominantColorsLocalAsset.then((result) => {
            const tmp = _slicedToArray(result[0], 3);
            const obj = { r: tmp[0], g: tmp[1], b: tmp[2] };
            result = closure_2_7.set(value, obj);
            if (ref.current) {
              closure_1_2(obj);
            }
          });
        }
      } else {
        closure_2((arg0) => {
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
};
