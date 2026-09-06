// discord_app/modules/visual_effect_view/native/overrides/VEVOOPropTintColor.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import utils_ColorUtils from "../../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import ColorUtils from "../../../../utils/ColorUtils.tsx";
import FormSwitch from "../../../../design/components/Forms/native/FormSwitch.native.tsx";
import Form from "../../../../design/void/Form/native/index.tsx";
import showCustomColorPickerActionSheetDefault from "../../../color_picker/native/showCustomColorPickerActionSheet.tsx";
import VEVOO from "VEVOO.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const VEVOOStore = fn(4966);
({ getVisualEffectViewOverrides: metroRequire, setVisualEffectViewOverides: closure_7 } = VEVOOStore);
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4560);
let obj = { tintColor: null };
let size = {
  width: nativeDefault.space.PX_32,
  height: nativeDefault.space.PX_32,
  backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_700,
  borderRadius: nativeDefault.radii.sm,
};
obj.tintColor = size;
let closure_11 = createStyles.createStyles(obj);
size = fn(2);
const result = size.fileFinishedImporting("modules/visual_effect_view/native/overrides/VEVOOPropTintColor.tsx");

export default noop.memo(function VEVOOPropTintColor() {
  let obj = VEVOO;
  const visualEffectViewOverrideSharedStyles = obj.useVisualEffectViewOverrideSharedStyles();
  let obj1 = noop;
  let tmp = closure_11();
  [tmp7, require] = first1(noop.useState(false), 2);
  let str = closure_6().tintColorOverrideHex;
  if (str == null) {
    str = "black";
  }
  let tmp5Result = tmp5(noop.useState(str), 2);
  const backgroundColor = tmp5Result[0];
  dependencyMap = tmp5Result[1];
  tmp5Result = tmp5(obj1.useState(closure_6().tintColorOverrideOpacity), 2);
  first1 = tmp5Result[0];
  noop = tmp5Result[1];
  const tmp6 = first1(noop.useState(false), 2);
  closure_5 = obj1.useCallback((tintColorOverrideHex, tintColorOverrideOpacity) => {
    if (null != tintColorOverrideHex) {
      closure_2(tintColorOverrideHex);
    }
    if (null != tintColorOverrideOpacity) {
      closure_4(tintColorOverrideOpacity);
    }
    let hexToRgbaStringResult;
    if (null != tintColorOverrideHex) {
      if (null != tintColorOverrideOpacity) {
        let obj = ColorUtils;
        hexToRgbaStringResult = obj.hexToRgbaString(tintColorOverrideHex, tintColorOverrideOpacity);
      }
    }
    obj = {};
    const merged = Object.assign(timestampProducer());
    obj.tintColorOverrideOpacity = tintColorOverrideOpacity;
    obj.tintColorOverrideHex = tintColorOverrideHex;
    obj.tintColorOverride = hexToRgbaStringResult;
    if (null == hexToRgbaStringResult) {
      obj = {};
      const merged1 = Object.assign(obj);
      obj.tintColorOverride = "rgba(0, 0, 0, 0)";
      React5(obj);
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        closure_2_7(obj);
      });
    } else {
      React5(obj);
    }
  }, []);
  obj = {
    style: null,
    labelStyle: visualEffectViewOverrideSharedStyles.zeroHeight,
    leadingStyle: visualEffectViewOverrideSharedStyles.enabledSwitchStyle,
    leading: null,
    subLabel: null,
    disabled: null,
    onPress: null,
  };
  const items = [visualEffectViewOverrideSharedStyles.zeroPaddingVertical];
  obj.style = items;
  obj = {
    value: tmp7,
    onValueChange(arg0) {
      require(arg0);
      if (arg0) {
        tmp2(first, first1);
      } else {
        tmp2(undefined, undefined);
      }
    },
  };
  obj.leading = closure_8(FormSwitch.FormSwitch, obj);
  obj1 = { style: visualEffectViewOverrideSharedStyles.zeroPadding, label: "Blur Tint", trailing: null };
  const obj2 = { style: null };
  const items1 = [tmp.tintColor, { backgroundColor }];
  obj2.style = items1;
  obj1.trailing = closure_8(closure_5, obj2);
  const items2 = [closure_8(Form.FormRow, obj1)];
  const obj3 = {
    style: visualEffectViewOverrideSharedStyles.zeroPaddingHorizontal,
    disabled: !tmp7,
    label: null,
    subLabel: null,
  };
  let str2;
  if (first1 != null) {
    str2 = first1.toFixed(3);
  }
  if (str2 == null) {
    str2 = "";
  }
  const obj4 = { children: null };
  obj3.label = "Blur Tint Opacity " + str2;
  const ref = obj1.useRef(first1);
  const tmp14 = closure_10;
  const tmp15 = closure_9;
  obj3.subLabel = closure_8(backgroundColor(15928), {
    disabled: !tmp7,
    initialValue: obj1.useRef(first1),
    onValueChange(arg0) {
      closure_5(first, arg0);
    },
  });
  items2[1] = closure_8(Form.FormRow, obj3);
  obj4.children = items2;
  obj.subLabel = tmp14(tmp15, obj4);
  obj.disabled = !tmp7;
  obj.onPress = function onPress() {
    const obj = { color: null, onSelect: null };
    const tmp = showCustomColorPickerActionSheetDefault;
    obj.color = utils_ColorUtils.hex2int(first);
    obj.onSelect = function onSelect(color) {
      closure_1_5(require("utils/ColorUtils").int2hex(color), first1);
    };
    tmp(obj);
  };
  return closure_8(Form.FormRow, obj);
});
