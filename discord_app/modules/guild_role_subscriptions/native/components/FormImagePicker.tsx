// discord_app/modules/guild_role_subscriptions/native/components/FormImagePicker.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ImageLoaderUtils from "../../../image_upload/ImageLoaderUtils.tsx";
import utils_UploadUtilsDefault from "../../../../utils/native/UploadUtils.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import TouchableHitBoxDefault from "../../../../design/void/TouchableHitBox/native/TouchableHitBox.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";

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
        const obj2 = { value, done: true };
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
    items = [,];
    items[0] = image;
    items[1] = size;
    tmp2 = "center" === previewResizeMode ? tmp.imageCentered : tmp.image;
    tmp7 = setImage;
    memo = closure_4.useMemo(() => {
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
    obj = {
      accessibilityRole: "button",
      accessibilityLabel: null,
      accessibilityState: null,
      onPress: null,
      style: null,
      disabled: null,
      children: null,
    };
    tmp9 = image;
    tmp8 = imageUploadSize(setImage[8]);
    intl = image(setImage[9]).intl;
    obj.accessibilityLabel = intl.string(image(setImage[9]).t.HNo5cG);
    obj.accessibilityState = { disabled: flag };
    obj.onPress = function onPress() {
      return pickImage(importDefault, dependencyMap);
    };
    items1 = [, , , ,];
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
      items2 = [, ,];
      items2[0] = tmp2;
      items2[1] = style;
      items2[2] = tmp3;
      obj1.style = items2;
      tmp6Result = tmp6(tmp7[10]);
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
      tmp12Result = jsx(tmp9(tmp7[11]).ImagePlusIcon, {});
    }
    items3 = [,];
    items3[0] = tmp12Result;
    tmp10Result = null != image && !flag;
    if (tmp10Result) {
      items4 = [,];
      items4[0] = tmp.editImageIcon;
      tmp15 = View;
      if (standalone) {
        standalone = tmp.standaloneIcon;
      }
      obj6 = { style: null, children: null };
      items4[1] = standalone;
      obj6.style = items4;
      obj6.children = tmp10(tmp9(tmp7[12]).PencilIcon, { color: "#292b30", size: "sm" });
      tmp10Result = tmp10(tmp15, obj6);
    }
    items3[1] = tmp10Result;
    obj.children = items3;
    return tmp5(tmp8, obj);
  }
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4722);
let obj2 = {
  imageSelectionRow: { flexDirection: "row", justifyContent: "space-between", marginHorizontal: 16 },
  buttonColumn: { flex: 1, flexDirection: "column", marginEnd: 16 },
  imageDescription: { flexWrap: "wrap", marginBottom: 16 },
  image: { alignSelf: "center", width: 84, height: 84 },
  imageCentered: { alignSelf: "center", width: 20, height: 20 },
  imageCircle: { borderRadius: 42 },
  imageSquircle: { borderRadius: nativeDefault.radii.sm },
  imageContainerEmpty: null,
  editImageIcon: null,
  standaloneIcon: null,
  disabled: null,
};
let obj3 = { borderRadius: nativeDefault.radii.sm };
obj2.imageContainerEmpty = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let size = {
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
obj2.editImageIcon = size;
obj2.standaloneIcon = { top: -4, right: -4 };
obj2.disabled = { opacity: 0.3 };
const React6 = createStyles.createStyles(obj2);
let obj5 = { CIRCLE: 0, [0]: "CIRCLE", SQUIRCLE: 1, [1]: "SQUIRCLE" };
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormImagePicker.tsx");

export default function FormImagePicker(children) {
  const imageUploadSize = children.imageUploadSize;
  ({ image, setImage } = children);
  const disabled = children.disabled;
  const merged = Object.assign(
    children,
    Object.assign({ description: 0, imageUploadSize: 0, image: 0, setImage: 0, disabled: 0 }),
  );
  const tmp2 = closure_8();
  if (null == image) {
    const intl2 = imageUploadSize(1115).intl;
    let stringResult = intl2.string(imageUploadSize(1115).t.bGPfSp);
    let tmp6 = imageUploadSize;
  } else {
    const intl = imageUploadSize(1115).intl;
    stringResult = intl.string(imageUploadSize(1115).t["0KOido"]);
    tmp6 = imageUploadSize;
  }
  const obj = { style: tmp2.imageSelectionRow, children: null };
  const obj2 = { style: tmp2.buttonColumn, children: null };
  const items = [
    closure_6(tmp6(4718).Text, {
      style: tmp2.imageDescription,
      variant: "text-sm/medium",
      color: "text-default",
      children: children.description,
    }),
    closure_6(tmp6(5144).Button, {
      text: stringResult,
      variant: "secondary",
      onPress() {
        return pickImage(imageUploadSize, setImage);
      },
      size: "md",
      disabled,
    }),
  ];
  obj2.children = items;
  const items1 = [closure_7(View, obj2)];
  obj5 = {};
  const merged1 = Object.assign(merged);
  obj5.disabled = disabled;
  obj5.imageUploadSize = imageUploadSize;
  obj5.image = image;
  obj5.setImage = setImage;
  items1[1] = closure_6(ImagePickerIcon, obj5);
  obj.children = items1;
  return closure_7(View, obj);
}
export const PreviewShape = obj5;
export { ImagePickerIcon };
