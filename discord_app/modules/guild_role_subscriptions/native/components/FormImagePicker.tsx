// === Module 17730: FormImagePicker ===

// Module 17730 (FormImagePicker)
import nativeDefault from "native" /* 576 */;
import ImageLoaderUtils from "ImageLoaderUtils" /* 1430 */;
import utils_UploadUtilsDefault from "utils/UploadUtils" /* 5138 */;
import FastImageDefault from "FastImage" /* 5587 */;
import TouchableHitBoxDefault from "TouchableHitBox" /* 9050 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

require = fn;
function pickImage() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_11 = async function _pickImage() {
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
        let obj = { value, done: true };
        return obj;
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
            obj = { value, done: true };
            return obj;
          } else {
            closure_2 = tmp2;
            closure_130_0 = closure_1;
            let base64;
            obj2 = utils_UploadUtilsDefault;
            const obj1 = { size };
            c3 = 1;
            c4 = 1;
            obj2 = { value: null, done: false };
            obj2.value = obj2.openImagePicker(obj1);
            return obj2;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          base64 = value.base64;
          if (null != base64) {
            obj = { uri: base64 };
            closure_130_0(obj);
          }
          c4 = 3;
          return { value: "HermesInternal", done: null };
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
    tmp = closure_8();
    tmp3 = global.previewShape === closure_9.CIRCLE ? tmp.imageCircle : tmp.imageSquircle;
    items = [, ];
    items[0] = image;
    items[1] = size;
    tmp2 = "center" === previewResizeMode ? tmp.imageCentered : tmp.image;
    tmp7 = setImage;
    memo = closure_4.useMemo(() => {
      let uri;
      if (image != null) {
        uri = image.uri;
      }
      if (null != uri) {
        uri = image.uri;
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
    tmp8 = imageUploadSize(setImage[8]);
    intl = image(setImage[9]).intl;
    obj.accessibilityLabel = intl.string(image(setImage[9]).t.HNo5cG);
    obj.accessibilityState = { disabled: flag };
    obj.onPress = function onPress() {
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
      obj = { style: null, resizeMode: null, source: null };
      items2 = [, , ];
      items2[0] = tmp2;
      items2[1] = style;
      items2[2] = tmp3;
      obj.style = items2;
      tmp6Result = tmp6(tmp7[10]);
      if (previewResizeMode == null) {
        previewResizeMode = "cover";
      }
      obj.resizeMode = previewResizeMode;
      obj1 = { uri: null };
      obj1.uri = memo;
      obj.source = obj1;
      tmp12Result = tmp12(tmp6Result, obj);
      tmp10 = tmp12;
    } else {
      tmp10 = jsx;
      tmp12Result = jsx(tmp9(tmp7[11]).ImagePlusIcon, {});
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
      obj2 = { style: null, children: null };
      items4[1] = standalone;
      obj2.style = items4;
      obj2.children = tmp10(tmp9(tmp7[12]).PencilIcon, { color: "#292b30", size: "sm" });
      tmp10Result = tmp10(tmp15, obj2);
    }
    items3[1] = tmp10Result;
    obj.children = items3;
    return tmp5(tmp8, obj);
  }
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { imageSelectionRow: { flexDirection: "row", justifyContent: "space-between", marginHorizontal: 16 }, buttonColumn: { flex: 1, flexDirection: "column", marginEnd: 16 }, imageDescription: { flexWrap: "wrap", marginBottom: 16 }, image: { alignSelf: "center", width: 84, height: 84 }, imageCentered: { alignSelf: "center", width: 20, height: 20 }, imageCircle: { borderRadius: 42 }, imageSquircle: null, imageContainerEmpty: null, editImageIcon: null, standaloneIcon: null, disabled: null };
createStyles = { borderRadius: nativeDefault.radii.sm };
createStyles.imageSquircle = createStyles;
createStyles.imageContainerEmpty = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let size = { alignItems: "center", backgroundColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, borderRadius: nativeDefault.radii.lg, top: 0, height: 24, justifyContent: "center", right: 0, padding: 4, position: "absolute", width: 24 };
createStyles.editImageIcon = size;
createStyles.standaloneIcon = { top: -4, right: -4 };
createStyles.disabled = { opacity: 0.3 };
const React6 = createStyles.createStyles(createStyles);
let obj2 = { CIRCLE: 0, [0]: "CIRCLE", SQUIRCLE: 1, [1]: "SQUIRCLE" };
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormImagePicker.tsx");

export default function FormImagePicker(children) {
  const imageUploadSize = children.imageUploadSize;
  ({ image, setImage } = children);
  const disabled = children.disabled;
  const merged = Object.assign(children, Object.assign({ description: 0, imageUploadSize: 0, image: 0, setImage: 0, disabled: 0 }));
  const tmp2 = closure_8();
  if (null == image) {
    const intl2 = imageUploadSize(1114).intl;
    let stringResult = intl2.string(imageUploadSize(1114).t.bGPfSp);
    let tmp6 = imageUploadSize;
  } else {
    const intl = imageUploadSize(1114).intl;
    stringResult = intl.string(imageUploadSize(1114).t["0KOido"]);
    tmp6 = imageUploadSize;
  }
  let obj = { style: tmp2.imageSelectionRow, children: null };
  obj = { style: tmp2.buttonColumn, children: null };
  obj = { style: tmp2.imageDescription, variant: "text-sm/medium", color: "text-default", children: children.description };
  const items = [
    closure_6(tmp6(4556).Text, obj),
    closure_6(tmp6(4975).Button, {
      text: stringResult,
      variant: "secondary",
      onPress() {
        return pickImage(imageUploadSize, setImage);
      },
      size: "md",
      disabled
    })
  ];
  obj.children = items;
  const items1 = [closure_7(View, obj), ];
  obj2 = {};
  const merged1 = Object.assign(merged);
  obj2.disabled = disabled;
  obj2.imageUploadSize = imageUploadSize;
  obj2.image = image;
  obj2.setImage = setImage;
  items1[1] = closure_6(ImagePickerIcon, obj2);
  obj.children = items1;
  return closure_7(View, obj);
};
export const PreviewShape = obj2;
export { ImagePickerIcon };