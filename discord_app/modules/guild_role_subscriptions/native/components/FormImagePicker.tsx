// discord_app/modules/guild_role_subscriptions/native/components/FormImagePicker.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ImageLoaderUtils from "../../../image_upload/ImageLoaderUtils.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import utils_UploadUtilsDefault from "../../../../utils/native/UploadUtils.tsx";
import TouchableHitBoxDefault from "../../../../design/void/TouchableHitBox/native/TouchableHitBox.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, closure_2;

let c9;
let metroImportAll;
let obj2;
let obj3;
let size;
function pickImage() {
  return obj(...arguments);
}
let obj = function _pickImage() {
  obj = _asyncToGenerator(async (size, arg1) => {
    let closure_1 = arg1;
    let c3 = 0;
    let c4 = 0;
    return (async (arg0, value) => {
      let obj3;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let base64;
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp;
              size = closure_1;
              base64 = undefined;
              c3 = 1;
              c4 = 1;
              const obj5 = { size };
              const obj6 = { value: obj3.openImagePicker(obj5), done: false };
              obj3 = utils_UploadUtilsDefault;
              return obj6;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          } else {
            base64 = value.base64;
            if (null != base64) {
              obj = { uri: base64 };
              size(obj);
            }
            c4 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp16) {
          c4 = 3;
          throw tmp16;
        }
      }
    })();
  });
  return obj(...arguments);
};
class ImagePickerIcon {
  constructor(disabled) {
    let image;
    let intl;
    let items1;
    let items2;
    let items3;
    let obj3;
    let previewResizeMode;
    let standalone;
    let style;
    let tmp10;
    let tmp12Result;
    ({ style, image } = disabled);
    ({ imageUploadSize: importDefault, setImage: dependencyMap, previewResizeMode, standalone, size } = disabled);
    let flag = disabled.disabled;
    const previewShape = disabled.previewShape;
    if (flag === undefined) {
      flag = false;
    }
    const tmp = closure_10();
    const tmp3 = previewShape === obj4.CIRCLE ? tmp.imageCircle : tmp.imageSquircle;
    const items = [image, size];
    const tmp2 = "center" === previewResizeMode ? tmp.imageCentered : tmp.image;
    const memo = react.useMemo(() => {
      let uri1;
      if (image != null) {
        uri1 = image.uri;
      }
      if (null != uri1) {
        const uri = image.uri;
        if (!uri.startsWith("data:")) {
          let uri3;
          if (null != size) {
            const uri2 = image.uri;
            const getBestMediaProxySize = ImageLoaderUtils.getBestMediaProxySize;
            ImageLoaderUtils;
            const _HermesInternal = HermesInternal;
            obj = ImageLoaderUtils;
            uri3 = uri2 + "?size=" + getBestMediaProxySize(tmp3 * obj.getDevicePixelRatio());
            image.uri = uri3;
          }
          return uri3;
        }
        uri3 = image.uri;
      }
    }, items);
    obj = {
      accessibilityRole: "button",
      accessibilityLabel: intl.string(image(1126).t.HNo5cG),
      accessibilityState: { disabled: flag },
      onPress() {
        return pickImage(importDefault, dependencyMap);
      },
      style: items1,
      disabled: flag,
      children: items3,
    };
    const tmp8 = TouchableHitBoxDefault;
    intl = image(1126).intl;
    items1 = [tmp.image, tmp3, tmp.imageContainerEmpty, flag && tmp.disabled, style];
    if (null != image) {
      const obj2 = { style: items2, resizeMode: previewResizeMode, source: obj3 };
      items2 = [tmp2, style, tmp3];
      const tmp6Result = FastImageDefault;
      if (previewResizeMode == null) {
        previewResizeMode = "cover";
      }
      obj3 = { uri: memo };
      tmp12Result = closure_8(tmp6Result, obj2);
      tmp10 = closure_8;
    } else {
      tmp10 = closure_8;
      tmp12Result = closure_8(image(16745).ImagePlusIcon, {});
    }
    items3 = [tmp12Result];
    let tmp10Result = null != image && !flag;
    if (tmp10Result) {
      const items4 = [tmp.editImageIcon];
      if (standalone) {
        standalone = tmp.standaloneIcon;
      }
      obj4 = { style: items4, children: tmp10(image(10071).PencilIcon, { color: "#292b30", size: "sm" }) };
      items4[1] = standalone;
      tmp10Result = tmp10(View, obj4);
    }
    items3[1] = tmp10Result;
    return closure_9(tmp8, obj);
  }
}
let closure_3 = ["description", "imageUploadSize", "image", "setImage", "disabled"];
const View = react_native.View;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
obj = {
  imageSelectionRow: { flexDirection: "row", justifyContent: "space-between", marginHorizontal: 16 },
  buttonColumn: { flex: 1, flexDirection: "column", marginEnd: 16 },
  imageDescription: { flexWrap: "wrap", marginBottom: 16 },
  image: { alignSelf: "center", width: 84, height: 84 },
  imageCentered: { alignSelf: "center", width: 20, height: 20 },
  imageCircle: { borderRadius: 42 },
  imageSquircle: obj2,
  imageContainerEmpty: obj3,
  editImageIcon: size,
  standaloneIcon: { top: -4, right: -4 },
  disabled: { opacity: 0.3 },
};
obj2 = { borderRadius: nativeDefault.radii.sm };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
size = {
  alignItems: "center",
  backgroundColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT,
  borderRadius: nativeDefault.radii.lg,
  top: 0,
  height: 24,
  justifyContent: "center",
  right: 0,
  padding: 4,
  position: "absolute",
  width: 24,
};
const authStore = createStyles(obj);
let obj4 = { CIRCLE: 0, [0]: "CIRCLE", SQUIRCLE: 1, [1]: "SQUIRCLE" };
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (disabled) => {
      let closure_0;
      let description;
      let image;
      let imageUploadSize;
      let items;
      let items1;
      let setImage;
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp7;
      obj = require("react");
      const cResult = obj.c(33);
      if (cResult[0] !== disabled) {
        ({ description, imageUploadSize } = disabled);
        _require = imageUploadSize;
        ({ image, setImage } = disabled);
        let closure_1 = setImage;
        disabled = disabled.disabled;
        const tmp12 = _objectWithoutProperties(disabled, closure_3);
        cResult[0] = disabled;
        cResult[1] = description;
        cResult[2] = disabled;
        cResult[3] = tmp12;
        cResult[4] = image;
        cResult[5] = imageUploadSize;
        cResult[6] = setImage;
        tmp7 = image;
        tmp6 = tmp12;
        tmp5 = disabled;
        tmp4 = description;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
        tmp6 = cResult[3];
        tmp7 = cResult[4];
        _require = cResult[5];
        closure_1 = cResult[6];
      }
      const tmp13 = closure_10();
      if (cResult[7] === imageUploadSize) {
        let tmp14;
        let tmp15;
        if (cResult[8] === setImage) {
          tmp14 = cResult[9];
        }
        if (cResult[10] !== tmp7) {
          let stringResult;
          if (null == tmp7) {
            const intl2 = tmp(1126).intl;
            stringResult = intl2.string(tmp(1126).t.bGPfSp);
          } else {
            const intl = tmp(1126).intl;
            stringResult = intl.string(tmp(1126).t["0KOido"]);
          }
          cResult[10] = tmp7;
          cResult[11] = stringResult;
          tmp15 = stringResult;
        } else {
          tmp15 = cResult[11];
        }
        if (cResult[12] === tmp4) {
          let tmp18;
          if (cResult[13] === tmp13.imageDescription) {
            tmp18 = cResult[14];
          }
          if (cResult[15] === tmp15) {
            if (cResult[16] === tmp5) {
              let tmp21;
              if (cResult[17] === tmp14) {
                tmp21 = cResult[18];
              }
              if (cResult[19] === tmp13.buttonColumn) {
                if (cResult[20] === tmp18) {
                  let tmp24;
                  if (cResult[21] === tmp21) {
                    tmp24 = cResult[22];
                  }
                  if (cResult[23] === tmp5) {
                    if (cResult[24] === tmp6) {
                      if (cResult[25] === tmp7) {
                        if (cResult[26] === imageUploadSize) {
                          let tmp28;
                          if (cResult[27] === setImage) {
                            tmp28 = cResult[28];
                          }
                          if (cResult[29] === tmp13.imageSelectionRow) {
                            if (cResult[30] === tmp24) {
                              let tmp35;
                              if (cResult[31] === tmp28) {
                                tmp35 = cResult[32];
                              }
                              return tmp35;
                            }
                          }
                          const obj2 = { style: tmp13.imageSelectionRow, children: items };
                          items = [tmp24, tmp28];
                          const tmp38 = closure_9(View, obj2);
                          cResult[29] = tmp13.imageSelectionRow;
                          cResult[30] = tmp24;
                          cResult[31] = tmp28;
                          cResult[32] = tmp38;
                          tmp35 = tmp38;
                        }
                      }
                    }
                  }
                  const obj3 = { disabled: tmp5, imageUploadSize, image: tmp7, setImage };
                  const merged = Object.assign(tmp6);
                  const tmp34 = closure_8(ImagePickerIcon, obj3);
                  cResult[23] = tmp5;
                  cResult[24] = tmp6;
                  cResult[25] = tmp7;
                  cResult[26] = imageUploadSize;
                  cResult[27] = setImage;
                  cResult[28] = tmp34;
                  tmp28 = tmp34;
                }
              }
              obj4 = { style: tmp13.buttonColumn, children: items1 };
              items1 = [tmp18, tmp21];
              const tmp27 = closure_9(View, obj4);
              cResult[19] = tmp13.buttonColumn;
              cResult[20] = tmp18;
              cResult[21] = tmp21;
              cResult[22] = tmp27;
              tmp24 = tmp27;
            }
          }
          const obj5 = { text: tmp15, variant: "secondary", onPress: tmp14, size: "md", disabled: tmp5 };
          const tmp23 = closure_8(require("components/Button/Button").Button, obj5);
          cResult[15] = tmp15;
          cResult[16] = tmp5;
          cResult[17] = tmp14;
          cResult[18] = tmp23;
          tmp21 = tmp23;
        }
        const obj6 = {
          style: tmp13.imageDescription,
          variant: "text-sm/medium",
          color: "text-default",
          children: tmp4,
        };
        const tmp20 = closure_8(require("Text/Text").Text, obj6);
        cResult[12] = tmp4;
        cResult[13] = tmp13.imageDescription;
        cResult[14] = tmp20;
        tmp18 = tmp20;
      }
      const fn = function h() {
        return pickImage(closure_0, closure_1);
      };
      cResult[7] = imageUploadSize;
      cResult[8] = setImage;
      cResult[9] = fn;
      tmp14 = fn;
    }
  : (imageUploadSize) => {
      let image;
      let items;
      let items1;
      let setImage;
      let stringResult;
      let tmp6;
      imageUploadSize = imageUploadSize.imageUploadSize;
      ({ image, setImage } = imageUploadSize);
      const disabled = imageUploadSize.disabled;
      const description = imageUploadSize.description;
      const merged = Object.assign(
        imageUploadSize,
        Object.assign({ description: 0, imageUploadSize: 0, image: 0, setImage: 0, disabled: 0 }),
      );
      const tmp2 = closure_10();
      if (null == image) {
        const intl2 = imageUploadSize(1126).intl;
        stringResult = intl2.string(imageUploadSize(1126).t.bGPfSp);
        tmp6 = imageUploadSize;
      } else {
        const intl = imageUploadSize(1126).intl;
        stringResult = intl.string(imageUploadSize(1126).t["0KOido"]);
        tmp6 = imageUploadSize;
      }
      const obj2 = { style: tmp2.buttonColumn, children: items };
      items = [,];
      obj = { style: tmp2.imageSelectionRow, children: items1 };
      const obj3 = {
        style: tmp2.imageDescription,
        variant: "text-sm/medium",
        color: "text-default",
        children: description,
      };
      items[0] = closure_8(tmp6(4892).Text, obj3);
      obj4 = {
        text: stringResult,
        variant: "secondary",
        onPress() {
          return pickImage(imageUploadSize, setImage);
        },
        size: "md",
        disabled,
      };
      items[1] = closure_8(tmp6(5601).Button, obj4);
      items1 = [closure_9(View, obj2)];
      const obj5 = { disabled, imageUploadSize, image, setImage };
      const merged1 = Object.assign(merged);
      items1[1] = closure_8(ImagePickerIcon, obj5);
      return closure_9(View, obj);
    };
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormImagePicker.tsx");

export default tmp4;
export const PreviewShape = obj4;
export { ImagePickerIcon };
