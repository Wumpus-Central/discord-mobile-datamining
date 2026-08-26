// discord_app/modules/guild_role_subscriptions/native/components/FormImagePicker.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import preloadDefault from "../../../../components_native/common/FastImage.tsx";
import renderDefault from "../../../../design/void/TouchableHitBox/native/TouchableHitBox.tsx";
import closure_3 from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
function pickImage() {
  const self = this;
  const apply = _pickImage.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _pickImage() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c3 = 0;
    c4 = 0;
    return (function*(arg0, base64) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw base64;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = base64;
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
              throw base64;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = base64;
              return obj;
            } else {
              closure_2 = tmp2;
              const callback = base64;
              base64 = undefined;
              let obj2 = callback2(closure_1_2[6]);
              obj1 = { size: null };
              obj1[0] = callback;
              c3 = 1;
              c4 = 1;
              obj2 = { value: null, done: false };
              obj2[0] = obj2.openImagePicker(obj1);
              return obj2;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw base64;
          } else if (arg0 === 2) {
            c4 = 3;
            obj3 = { value: null, done: true };
            obj3[0] = base64;
            return obj3;
          } else {
            base64 = base64.base64;
            if (null != base64) {
              obj = { uri: null };
              obj[0] = base64;
              callback(obj);
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
  });
  closure_11 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
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
        uri = tmp.uri;
      }
      if (null != uri) {
        uri = tmp.uri;
        if (!uri.startsWith("data:")) {
          if (null != size) {
            const obj = image(closure_1_2[7]);
            const _HermesInternal = HermesInternal;
            let uri2 = tmp.uri + "?size=" + obj.getBestMediaProxySize(tmp3 * image(closure_1_2[7]).getDevicePixelRatio());
            tmp.uri = uri2;
            const obj2 = image(closure_1_2[7]);
          }
          return uri2;
        }
        uri2 = tmp.uri;
      }
    }, items);
    tmp5 = jsxs;
    tmp6 = imageUploadSize;
    obj = { accessibilityRole: "button", accessibilityLabel: null, accessibilityState: null, onPress: null, style: null, disabled: null, children: null };
    tmp9 = image;
    tmp8 = require("render");
    intl = require("getSystemLocale").intl;
    obj[1] = intl.string(require("getSystemLocale").t.HNo5cG);
    obj[2] = { disabled: flag };
    obj[3] = function onPress() {
      return closure_1_10(closure_1, closure_2);
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
    obj[4] = items1;
    obj[5] = flag;
    if (null != image) {
      tmp12 = jsx;
      obj = { style: null, resizeMode: null, source: null };
      items2 = [, , ];
      items2[0] = tmp2;
      items2[1] = style;
      items2[2] = tmp3;
      obj[0] = items2;
      tmp6Result = require("preload");
      if (previewResizeMode == null) {
        previewResizeMode = "cover";
      }
      obj[1] = previewResizeMode;
      obj1 = { uri: null };
      obj1[0] = memo;
      obj[2] = obj1;
      tmp12Result = tmp12(tmp6Result, obj);
      tmp10 = tmp12;
    } else {
      tmp10 = jsx;
      tmp12Result = jsx(require("ImagePlusIcon").ImagePlusIcon, {});
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
      obj2[0] = items4;
      obj2[1] = tmp10(require("PencilIcon").PencilIcon, { color: "#292b30", size: "sm" });
      tmp10Result = tmp10(tmp15, obj2);
    }
    items3[1] = tmp10Result;
    obj[6] = items3;
    return tmp5(tmp8, obj);
  }
}
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { imageSelectionRow: { flexDirection: "row", justifyContent: "space-between", marginHorizontal: 16 }, buttonColumn: { flex: 1, flexDirection: "column", marginEnd: 16 }, imageDescription: { flexWrap: "wrap", marginBottom: 16 }, image: { alignSelf: "center", width: 84, height: 84 }, imageCentered: { alignSelf: "center", width: 20, height: 20 }, imageCircle: { borderRadius: 42 }, imageSquircle: null, imageContainerEmpty: null, editImageIcon: null, standaloneIcon: null, disabled: null };
createCacheKey = { borderRadius: ThemesDefault.radii.sm };
createCacheKey[6] = createCacheKey;
createCacheKey[7] = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST };
let obj1 = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST };
createCacheKey[8] = { alignItems: "center", backgroundColor: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT, borderRadius: ThemesDefault.radii.lg, top: 0, height: 24, justifyContent: "center", right: 0, padding: 4, position: "absolute", width: 24 };
createCacheKey[9] = { top: -4, right: -4 };
createCacheKey[10] = { opacity: 0.3 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
let obj3 = { CIRCLE: 0, [0]: "CIRCLE", SQUIRCLE: 1, [1]: "SQUIRCLE" };
let obj2 = { alignItems: "center", backgroundColor: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT, borderRadius: ThemesDefault.radii.lg, top: 0, height: 24, justifyContent: "center", right: 0, padding: 4, position: "absolute", width: 24 };
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormImagePicker.tsx");

export default function FormImagePicker(children) {
  const imageUploadSize = children.imageUploadSize;
  ({ image, setImage } = children);
  const disabled = children.disabled;
  const merged = Object.assign(children, Object.create(null));
  const tmp2 = callback4();
  if (null == image) {
    const intl2 = imageUploadSize(1236).intl;
    let stringResult = intl2.string(imageUploadSize(1236).t.bGPfSp);
    let tmp6 = imageUploadSize;
  } else {
    const intl = imageUploadSize(1236).intl;
    stringResult = intl.string(imageUploadSize(1236).t["0KOido"]);
    tmp6 = imageUploadSize;
  }
  let obj = { style: tmp2.imageSelectionRow, children: null };
  obj = { style: tmp2.buttonColumn, children: null };
  obj = { style: tmp2.imageDescription, variant: "text-sm/medium", color: "text-default", children: children.description };
  const items = [
    callback2(tmp6(4440).Text, obj),
    callback2(tmp6(4879).Button, {
      text: stringResult,
      variant: "secondary",
      onPress() {
        return closure_1_10(imageUploadSize, setImage);
      },
      size: "md",
      disabled
    })
  ];
  obj[1] = items;
  const items1 = [callback3(View, obj), ];
  const obj2 = {};
  const merged1 = Object.assign(merged);
  obj2.disabled = disabled;
  obj2.imageUploadSize = imageUploadSize;
  obj2.image = image;
  obj2.setImage = setImage;
  items1[1] = callback2(ImagePickerIcon, obj2);
  obj[1] = items1;
  return callback3(View, obj);
};
export const PreviewShape = obj3;
export { ImagePickerIcon };