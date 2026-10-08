// === Module 18260: FormImagePicker ===

// Module 18260 (FormImagePicker)
import nativeDefault from "native" /* 587 */;
import ImageLoaderUtils from "ImageLoaderUtils" /* 1449 */;
import FastImageDefault from "FastImage" /* 6164 */;
import TouchableHitBoxDefault from "TouchableHitBox" /* 7013 */;
import utils_UploadUtilsDefault from "utils/UploadUtils" /* 7741 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
function pickImage() {
  const self = this;
  const apply = closure_13.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_13 = async function _pickImage() {
  closure_1 = arg1;
  c3 = 0;
  c4 = 0;
  return (async (arg0, value) => {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
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
            closure_2 = tmp2;
            closure_130_0 = closure_1;
            let base64;
            obj5 = { size };
            c3 = 1;
            c4 = 1;
            const obj6 = { value: utils_UploadUtilsDefault.openImagePicker(obj5), done: false };
            return obj6;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          base64 = value.base64;
          if (null != base64) {
            const obj = { uri: base64 };
            closure_130_0(obj);
          }
          c4 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp17) {
        c4 = tmp;
        throw tmp17;
      }
    }
  })();
};
class ImagePickerIcon {
  constructor(arg0) {
    ({ style, image } = global);
    ({ imageUploadSize, setImage, previewResizeMode, standalone, size } = global);
    flag = global.disabled;
    if (flag === undefined) {
      flag = false;
    }
    tmp = closure_10();
    tmp3 = global.previewShape === closure_11.CIRCLE ? tmp.imageCircle : tmp.imageSquircle;
    items = [, ];
    items[0] = image;
    items[1] = size;
    tmp2 = "center" === previewResizeMode ? tmp.imageCentered : tmp.image;
    tmp7 = setImage;
    memo = closure_6.useMemo(() => {
      let uri1;
      if (image != null) {
        uri1 = image.uri;
      }
      if (null != uri1) {
        const uri = image.uri;
        if (!uri.startsWith("data:")) {
          if (null != size) {
            const obj = ImageLoaderUtils;
            const _HermesInternal = HermesInternal;
            let uri2 = image.uri + "?size=" + obj.getBestMediaProxySize(tmp3 * ImageLoaderUtils.getDevicePixelRatio());
            image.uri = uri2;
          }
          return uri2;
        }
        uri2 = image.uri;
      }
    }, items);
    tmp5 = jsxs;
    tmp6 = imageUploadSize;
    obj = { accessibilityRole: "button", accessibilityLabel: null, accessibilityState: null, onPress: null, style: null, disabled: null, children: null };
    tmp9 = image;
    tmp8 = imageUploadSize(setImage[9]);
    intl = image(setImage[10]).intl;
    obj.accessibilityLabel = intl.string(image(setImage[10]).t.HNo5cG);
    obj.accessibilityState = { disabled: flag };
    obj.onPress = function handleSelectImage() {
      return pickImage(importDefault, dependencyMap);
    };
    items1 = [, , , , ];
    items1[0] = tmp.image;
    items1[1] = tmp3;
    items1[2] = tmp.imageContainerEmpty;
    disabled = flag;
    if (flag) {
      disabled = tmp.disabled;
    }
    items1[3] = disabled;
    items1[4] = style;
    obj.style = items1;
    obj.disabled = flag;
    if (null != image) {
      tmp12 = jsx;
      obj1 = { style: null, resizeMode: null, source: null };
      items2 = [, , ];
      items2[0] = tmp2;
      items2[1] = style;
      items2[2] = tmp3;
      obj1.style = items2;
      tmp6Result = tmp6(tmp7[11]);
      if (previewResizeMode == null) {
        previewResizeMode = "cover";
      }
      obj1.resizeMode = previewResizeMode;
      obj5 = { uri: null };
      obj5.uri = memo;
      obj1.source = obj5;
      tmp12Result = tmp12(tmp6Result, obj1);
      tmp10 = tmp12;
    } else {
      tmp10 = jsx;
      tmp12Result = jsx(tmp9(tmp7[12]).ImagePlusIcon, {});
    }
    items3 = [, ];
    items3[0] = tmp12Result;
    tmp10Result = null != image && !flag;
    if (tmp10Result) {
      items4 = [, ];
      items4[0] = tmp.editImageIcon;
      tmp15 = View;
      if (standalone) {
        standalone = tmp.standaloneIcon;
      }
      obj6 = { style: null, children: null };
      items4[1] = standalone;
      obj6.style = items4;
      obj6.children = tmp10(tmp9(tmp7[13]).PencilIcon, { color: "#292b30", size: "sm" });
      tmp10Result = tmp10(tmp15, obj6);
    }
    items3[1] = tmp10Result;
    obj.children = items3;
    return tmp5(tmp8, obj);
  }
}
let closure_3 = ["description", "imageUploadSize", "image", "setImage", "disabled"];
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { imageSelectionRow: { flexDirection: "row", justifyContent: "space-between", marginHorizontal: 16 }, buttonColumn: { flex: 1, flexDirection: "column", marginEnd: 16 }, imageDescription: { flexWrap: "wrap", marginBottom: 16 }, image: { alignSelf: "center", width: 84, height: 84 }, imageCentered: { alignSelf: "center", width: 20, height: 20 }, imageCircle: { borderRadius: 42 }, imageSquircle: { borderRadius: nativeDefault.radii.sm }, imageContainerEmpty: null, editImageIcon: null, standaloneIcon: null, disabled: null };
let obj3 = { borderRadius: nativeDefault.radii.sm };
obj2.imageContainerEmpty = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let size = { alignItems: "center", backgroundColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, borderRadius: nativeDefault.radii.lg, top: 0, height: 24, justifyContent: "center", right: 0, padding: 4, position: "absolute", width: 24 };
obj2.editImageIcon = size;
obj2.standaloneIcon = { top: -4, right: -4 };
obj2.disabled = { opacity: 0.3 };
const collapsed = createStyles.createStyles(obj2);
let obj5 = { CIRCLE: 0, [0]: "CIRCLE", SQUIRCLE: 1, [1]: "SQUIRCLE" };
const ReactCompilerGating = fn(558);
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormImagePicker.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function FormImagePicker(disabled) {
  const cResult = require("c").c(33);
  if (cResult[0] !== disabled) {
    ({ description, imageUploadSize } = disabled);
    _require = imageUploadSize;
    ({ image, setImage } = disabled);
    closure_1 = setImage;
    disabled = disabled.disabled;
    const tmp12 = _objectWithoutProperties(disabled, closure_3);
    cResult[0] = disabled;
    cResult[1] = description;
    cResult[2] = disabled;
    cResult[3] = tmp12;
    cResult[4] = image;
    cResult[5] = imageUploadSize;
    cResult[6] = setImage;
    let tmp7 = image;
    let tmp6 = tmp12;
    let tmp5 = disabled;
    let tmp4 = description;
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
    if (cResult[8] === setImage) {
      let tmp14 = cResult[9];
    }
    if (cResult[10] !== tmp7) {
      if (null == tmp7) {
        const intl2 = tmp(1126).intl;
        let stringResult = intl2.string(tmp(1126).t.bGPfSp);
      } else {
        const intl = tmp(1126).intl;
        stringResult = intl.string(tmp(1126).t["0KOido"]);
      }
      cResult[10] = tmp7;
      cResult[11] = stringResult;
    } else {
      if (cResult[12] === tmp4) {
        if (cResult[13] === tmp13.imageDescription) {
          let tmp19 = cResult[14];
        }
        if (cResult[15] === tmp15) {
          if (cResult[16] === tmp5) {
            if (cResult[17] === tmp14) {
              let tmp22 = cResult[18];
            }
            if (cResult[19] === tmp13.buttonColumn) {
              if (cResult[20] === tmp19) {
                if (cResult[21] === tmp22) {
                  let tmp25 = cResult[22];
                }
                if (cResult[23] === tmp5) {
                  if (cResult[24] === tmp6) {
                    if (cResult[25] === tmp7) {
                      if (cResult[26] === imageUploadSize) {
                        if (cResult[27] === setImage) {
                          let tmp29 = cResult[28];
                        }
                        if (cResult[29] === tmp13.imageSelectionRow) {
                          if (cResult[30] === tmp25) {
                            if (cResult[31] === tmp29) {
                              let tmp36 = cResult[32];
                            }
                            return tmp36;
                          }
                        }
                        const obj2 = { style: tmp13.imageSelectionRow, children: null };
                        const items = [tmp25, tmp29];
                        obj2.children = items;
                        const tmp39 = closure_9(View, obj2);
                        cResult[29] = tmp13.imageSelectionRow;
                        cResult[30] = tmp25;
                        cResult[31] = tmp29;
                        cResult[32] = tmp39;
                        tmp36 = tmp39;
                      }
                    }
                  }
                }
                const obj3 = {};
                const merged = Object.assign(tmp6);
                obj3.disabled = tmp5;
                obj3.imageUploadSize = imageUploadSize;
                obj3.image = tmp7;
                obj3.setImage = setImage;
                const tmp35 = closure_8(ImagePickerIcon, obj3);
                cResult[23] = tmp5;
                cResult[24] = tmp6;
                cResult[25] = tmp7;
                cResult[26] = imageUploadSize;
                cResult[27] = setImage;
                cResult[28] = tmp35;
                tmp29 = tmp35;
              }
            }
            const obj4 = { style: tmp13.buttonColumn, children: null };
            const items1 = [tmp19, tmp22];
            obj4.children = items1;
            const tmp28 = closure_9(View, obj4);
            cResult[19] = tmp13.buttonColumn;
            cResult[20] = tmp19;
            cResult[21] = tmp22;
            cResult[22] = tmp28;
            tmp25 = tmp28;
          }
        }
        obj5 = { text: tmp15, variant: "secondary", onPress: tmp14, size: "md", disabled: tmp5 };
        const tmp24 = closure_8(tmp(5375).Button, obj5);
        cResult[15] = tmp15;
        cResult[16] = tmp5;
        cResult[17] = tmp14;
        cResult[18] = tmp24;
        tmp22 = tmp24;
      }
      const obj6 = { style: tmp13.imageDescription, variant: "text-sm/medium", color: "text-default", children: tmp4 };
      const tmp21 = closure_8(tmp(5086).Text, obj6);
      cResult[12] = tmp4;
      cResult[13] = tmp13.imageDescription;
      cResult[14] = tmp21;
      tmp19 = tmp21;
    }
  }
  function handleSelectImage() {
    return pickImage(closure_0, closure_1);
  }
  cResult[7] = imageUploadSize;
  cResult[8] = setImage;
  cResult[9] = handleSelectImage;
  tmp14 = handleSelectImage;
  const obj = require("c");
}) : (function FormImagePicker(children) {
  const imageUploadSize = children.imageUploadSize;
  ({ image, setImage } = children);
  const disabled = children.disabled;
  const merged = Object.assign(children, Object.assign({ description: 0, imageUploadSize: 0, image: 0, setImage: 0, disabled: 0 }));
  const tmp2 = closure_10();
  if (null == image) {
    const intl2 = imageUploadSize(1126).intl;
    let stringResult = intl2.string(imageUploadSize(1126).t.bGPfSp);
    let tmp6 = imageUploadSize;
  } else {
    const intl = imageUploadSize(1126).intl;
    stringResult = intl.string(imageUploadSize(1126).t["0KOido"]);
    tmp6 = imageUploadSize;
  }
  const obj = { style: tmp2.imageSelectionRow, children: null };
  const obj2 = { style: tmp2.buttonColumn, children: null };
  const items = [
    closure_8(tmp6(5086).Text, { style: tmp2.imageDescription, variant: "text-sm/medium", color: "text-default", children: children.description }),
    closure_8(tmp6(5375).Button, {
      text: stringResult,
      variant: "secondary",
      onPress: function handleSelectImage() {
        return pickImage(imageUploadSize, setImage);
      },
      size: "md",
      disabled
    })
  ];
  obj2.children = items;
  const items1 = [closure_9(View, obj2), ];
  obj5 = {};
  const merged1 = Object.assign(merged);
  obj5.disabled = disabled;
  obj5.imageUploadSize = imageUploadSize;
  obj5.image = image;
  obj5.setImage = setImage;
  items1[1] = closure_8(ImagePickerIcon, obj5);
  obj.children = items1;
  return closure_9(View, obj);
});
export const PreviewShape = obj5;
export { ImagePickerIcon };