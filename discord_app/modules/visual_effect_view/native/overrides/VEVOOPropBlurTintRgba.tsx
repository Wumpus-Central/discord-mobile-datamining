import _slicedToArray from "_slicedToArray";
import importAllResult from "noop";
import { View } from "get ActivityIndicator";
import useVisualEffectViewOverrides from "useVisualEffectViewOverrides";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c10;
let c9;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
let c4 = importAllResult;
({ getVisualEffectViewOverrides: closure_6, setVisualEffectViewOverides: error } = useVisualEffectViewOverrides);
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = jsxProd);
let obj = { tintColor: null };
obj = { width: require("Themes").space.PX_32, height: require("Themes").space.PX_32, backgroundColor: require("Themes").unsafe_rawColors.PRIMARY_700, borderRadius: require("Themes").radii.sm };
obj[0] = obj;
let closure_11 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function VEVOOPropBlurTintRgba() {
  let require;
  let tmp7;
  let obj = require(14857) /* VisualEffectViewOverrideOverlay_ */;
  const visualEffectViewOverrideSharedStyles = obj.useVisualEffectViewOverrideSharedStyles();
  let obj1 = importAllResult;
  let tmp = callback3();
  [tmp7, require] = first1(importAllResult.useState(false), 2);
  let str = callback().blurTintRgbaOverrideHex;
  if (str == null) {
    str = "black";
  }
  let tmp5Result = tmp5(importAllResult.useState(str), 2);
  const first = tmp5Result[0];
  const dependencyMap = tmp5Result[1];
  tmp5Result = tmp5(obj1.useState(callback().blurTintRgbaOverrideOpacity), 2);
  first1 = tmp5Result[0];
  const tmp6 = first1(importAllResult.useState(false), 2);
  const tmp8 = callback;
  let closure_5 = obj1.useCallback((blurTintRgbaOverrideHex, blurTintRgbaOverrideOpacity) => {
    if (null != blurTintRgbaOverrideHex) {
      dependencyMap(blurTintRgbaOverrideHex);
    }
    if (null != blurTintRgbaOverrideOpacity) {
      callback2(blurTintRgbaOverrideOpacity);
    }
    let hexToRgbaStringResult;
    if (null != blurTintRgbaOverrideHex) {
      if (null != blurTintRgbaOverrideOpacity) {
        let obj = outer1_0(4037);
        hexToRgbaStringResult = obj.hexToRgbaString(blurTintRgbaOverrideHex, blurTintRgbaOverrideOpacity);
      }
    }
    obj = {};
    const merged = Object.assign(outer1_6());
    obj.blurTintRgbaOverrideOpacity = blurTintRgbaOverrideOpacity;
    obj.blurTintRgbaOverrideHex = blurTintRgbaOverrideHex;
    obj.blurTintRgbaOverride = hexToRgbaStringResult;
    if (null == hexToRgbaStringResult) {
      obj = {};
      const merged1 = Object.assign(obj);
      obj.blurTintRgbaOverride = "rgba(0, 0, 0, 0)";
      outer1_7(obj);
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        outer1_7(obj);
      });
    } else {
      outer1_7(obj);
    }
  }, []);
  obj = { style: items, labelStyle: visualEffectViewOverrideSharedStyles.zeroHeight, leadingStyle: visualEffectViewOverrideSharedStyles.enabledSwitchStyle, leading: null, subLabel: null, disabled: null, onPress: null };
  items = [visualEffectViewOverrideSharedStyles.zeroPaddingVertical];
  obj = {
    value: tmp7,
    onValueChange(arg0) {
      callback(arg0);
      if (arg0) {
        tmp2(first, first1);
      } else {
        tmp2(undefined, undefined);
      }
    }
  };
  obj[3] = callback2(require(5560) /* FormSwitch */.FormSwitch, obj);
  obj1 = { style: visualEffectViewOverrideSharedStyles.zeroPadding, label: "Blur Tint", trailing: null };
  const items1 = [tmp.tintColor, { backgroundColor: first }];
  obj1[2] = callback2(closure_5, { style: items1 });
  const items2 = [callback2(require(7639) /* Form */.FormRow, obj1), ];
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
  const tmp14 = closure_10;
  const tmp15 = closure_9;
  obj2[3] = callback2(first(14859), {
    disabled: !tmp7,
    initialValue: obj1.useRef(first1),
    onValueChange(arg0) {
      callback3(first, arg0);
    }
  });
  items2[1] = callback2(require(7639) /* Form */.FormRow, obj2);
  obj3[0] = items2;
  obj[4] = tmp14(tmp15, obj3);
  obj[5] = !tmp7;
  obj[6] = function onPress() {
    const obj = { color: null, onSelect: null };
    const tmp = first(13714);
    obj[0] = outer1_0(688).hex2int(first);
    obj[1] = function onSelect(color) {
      callback(outer1_0(outer1_2[13]).int2hex(color), _slicedToArray);
    };
    tmp(obj);
  };
  return callback2(require(7639) /* Form */.FormRow, obj);
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/visual_effect_view/native/overrides/VEVOOPropBlurTintRgba.tsx");

export default memoResult;