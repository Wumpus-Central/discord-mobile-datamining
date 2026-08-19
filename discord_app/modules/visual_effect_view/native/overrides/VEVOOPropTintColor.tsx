// discord_app/modules/visual_effect_view/native/overrides/VEVOOPropTintColor.tsx
import int2hslRaw from "../../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import hexToRgba from "../../../../utils/ColorUtils.tsx";
import FormSwitch from "../../../../design/components/Forms/native/FormSwitch.native.tsx";
import Form from "../../../../design/void/Form/native/index.tsx";
import VisualEffectViewOverrideOverlay_ from "VEVOO.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import useVisualEffectViewOverrides from "VEVOOStore.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = fn;
let c4 = importAllResult;
({ getVisualEffectViewOverrides: closure_6, setVisualEffectViewOverides: error } = useVisualEffectViewOverrides);
({ jsx: closure_8, Fragment: c9, jsxs: c10 } = jsxProd);
let obj = { width: ThemesDefault.space.PX_32, height: ThemesDefault.space.PX_32, backgroundColor: ThemesDefault.unsafe_rawColors.PRIMARY_700, borderRadius: ThemesDefault.radii.sm };
obj[0] = obj;
let closure_11 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function VEVOOPropTintColor() {
  let obj = VisualEffectViewOverrideOverlay_;
  const visualEffectViewOverrideSharedStyles = obj.useVisualEffectViewOverrideSharedStyles();
  obj1 = importAllResult;
  let tmp = callback3();
  [tmp7, require] = first1(importAllResult.useState(false), 2);
  let str = callback().tintColorOverrideHex;
  if (str == null) {
    str = "black";
  }
  let tmp5Result = tmp5(importAllResult.useState(str), 2);
  const first = tmp5Result[0];
  dependencyMap = tmp5Result[1];
  tmp5Result = tmp5(obj1.useState(callback().tintColorOverrideOpacity), 2);
  first1 = tmp5Result[0];
  const tmp6 = first1(importAllResult.useState(false), 2);
  closure_5 = obj1.useCallback((tintColorOverrideHex, tintColorOverrideOpacity) => {
    if (null != tintColorOverrideHex) {
      dependencyMap(tintColorOverrideHex);
    }
    if (null != tintColorOverrideOpacity) {
      callback2(tintColorOverrideOpacity);
    }
    let hexToRgbaStringResult;
    if (null != tintColorOverrideHex) {
      if (null != tintColorOverrideOpacity) {
        let obj = hexToRgba;
        hexToRgbaStringResult = obj.hexToRgbaString(tintColorOverrideHex, tintColorOverrideOpacity);
      }
    }
    obj = {};
    const merged = Object.assign(closure_1_6());
    obj.tintColorOverrideOpacity = tintColorOverrideOpacity;
    obj.tintColorOverrideHex = tintColorOverrideHex;
    obj.tintColorOverride = hexToRgbaStringResult;
    if (null == hexToRgbaStringResult) {
      obj = {};
      const merged1 = Object.assign(obj);
      obj.tintColorOverride = "rgba(0, 0, 0, 0)";
      closure_1_7(obj);
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        closure_1_7(obj);
      });
    } else {
      closure_1_7(obj);
    }
  }, []);
  { style: items, labelStyle: visualEffectViewOverrideSharedStyles.zeroHeight, leadingStyle: visualEffectViewOverrideSharedStyles.enabledSwitchStyle, leading: callback2(FormSwitch.FormSwitch, obj), subLabel: null, disabled: null, onPress: null };
  items = [visualEffectViewOverrideSharedStyles.zeroPaddingVertical];
  obj = {
    value: tmp7,
    onValueChange(arg0) {
      callback(arg0);
      if (arg0) {
        callback(first, first1);
      } else {
        callback(undefined, undefined);
      }
    }
  };
  obj1 = { style: visualEffectViewOverrideSharedStyles.zeroPadding, label: "Blur Tint", trailing: callback2(closure_5, { style: items1 }) };
  items1 = [tmp.tintColor, { backgroundColor: first }];
  const items2 = [callback2(Form.FormRow, obj1), ];
  const obj2 = { style: visualEffectViewOverrideSharedStyles.zeroPaddingHorizontal, disabled: !tmp7, label: null, subLabel: null };
  let str2;
  if (first1 != null) {
    str2 = first1.toFixed(3);
  }
  if (str2 == null) {
    str2 = "";
  }
  const obj3 = { children: null };
  obj2[2] = "Blur Tint Opacity " + str2;
  const ref = obj1.useRef(first1);
  obj2[3] = callback2(first(15195), {
    disabled: !tmp7,
    initialValue: obj1.useRef(first1),
    onValueChange(arg0) {
      callback3(first, arg0);
    }
  });
  items2[1] = callback2(Form.FormRow, obj2);
  obj3[0] = items2;
  obj[4] = callback(closure_9, obj3);
  obj[5] = !tmp7;
  obj[6] = function onPress() {
    const obj = { color: null, onSelect: null };
    const tmp = first(14009);
    obj[0] = int2hslRaw.hex2int(first);
    obj[1] = function onSelect(color) {
      callback(closure_1_0(closure_1_2[13]).int2hex(color), closure_3);
    };
    tmp(obj);
  };
  return callback2(Form.FormRow, obj);
});
const result = require("obj132").fileFinishedImporting("modules/visual_effect_view/native/overrides/VEVOOPropTintColor.tsx");

export default memoResult;