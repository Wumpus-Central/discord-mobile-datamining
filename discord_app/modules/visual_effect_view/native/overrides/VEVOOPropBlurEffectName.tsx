import _slicedToArray from "_slicedToArray";
import importAllResult from "noop";
import useVisualEffectViewOverrides from "useVisualEffectViewOverrides";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
let c3 = importAllResult;
({ getVisualEffectViewOverrides: c4, setVisualEffectViewOverides: c5 } = useVisualEffectViewOverrides);
({ jsx: closure_6, Fragment: error, jsxs: metroImportAll } = jsxProd);
let closure_9 = createCacheKey.createStyles({ radio: { fontSize: 14 } });
const memoResult = importAllResult.memo(function VEVOOPropBlurEffectName() {
  let closure_6;
  let closure_7;
  const _require = callback3();
  let obj = _require(visualEffectViewOverrideSharedStyles[5]);
  visualEffectViewOverrideSharedStyles = obj.useVisualEffectViewOverrideSharedStyles();
  const tmp2 = first(importAllResult.useState("Dark"), 2);
  first = tmp2[0];
  const tmp4 = first(tmp2[1].useState(false), 2);
  const first1 = tmp4[0];
  let closure_5 = tmp4[1];
  [closure_6, closure_7] = first(tmp2[1].useState(first1().blurEffectNameOverride), 2);
  const callback2 = importAllResult.useCallback((blurEffectNameOverride) => {
    if (null != blurEffectNameOverride) {
      callback2(blurEffectNameOverride);
    }
    const obj = {};
    const merged = Object.assign(first1());
    obj.blurEffectNameOverride = blurEffectNameOverride;
    callback(obj);
  }, []);
  obj = { style: items, label: "Blur Effect Name", disabled: !first1, leadingStyle: visualEffectViewOverrideSharedStyles.enabledSwitchStyle, leading: null, subLabel: null };
  items = [visualEffectViewOverrideSharedStyles.zeroPaddingVertical];
  obj = {
    value: first1,
    onValueChange(arg0) {
      callback(arg0);
      let tmp3;
      if (arg0) {
        tmp3 = closure_6;
      }
      closure_8(tmp3);
    }
  };
  obj[4] = callback(_require(visualEffectViewOverrideSharedStyles[7]).FormSwitch, obj);
  const obj1 = { children: null };
  const obj2 = { label: null, style: null, disabled: null, value: null, onValueChange: null };
  obj2[0] = "Theme: " + first;
  obj2[1] = visualEffectViewOverrideSharedStyles.zeroPaddingHorizontal;
  obj2[2] = !first1;
  obj2[3] = "Dark" === first;
  obj2[4] = function onValueChange() {
    let str = "Dark";
    if ("Dark" === first) {
      str = "Light";
    }
    closure_3(str);
  };
  const items1 = [callback(_require(visualEffectViewOverrideSharedStyles[6]).FormSwitchRow, obj2), ];
  const BLUR_EFFECT_NAMES = _require(visualEffectViewOverrideSharedStyles[8]).BLUR_EFFECT_NAMES;
  const found = BLUR_EFFECT_NAMES.filter((arr) => -1 !== arr.indexOf(first));
  items1[1] = found.map((str) => {
    const lib = str;
    const obj = { label: null, labelStyle: null, style: null, selected: null, disabled: null, onPress: null };
    obj[0] = str.replace(first, "");
    obj[1] = lib.radio;
    const items = [visualEffectViewOverrideSharedStyles.zeroPaddingHorizontal, { opacity: 1 }];
    obj[2] = items;
    obj[3] = str === closure_6;
    obj[4] = !first1;
    obj[5] = function onPress() {
      outer1_8(closure_0);
    };
    return outer1_6(lib(visualEffectViewOverrideSharedStyles[6]).FormRadioRow, obj, arg1);
  });
  obj1[0] = items1;
  obj[5] = callback2(closure_7, obj1);
  return callback(_require(visualEffectViewOverrideSharedStyles[6]).FormRow, obj);
});
const result = require("useVisualEffectViewOverrides").fileFinishedImporting("modules/visual_effect_view/native/overrides/VEVOOPropBlurEffectName.tsx");

export default memoResult;