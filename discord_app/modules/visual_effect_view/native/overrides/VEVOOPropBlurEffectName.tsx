// === Module 15291: ? ===

// Module 15291
import closure_2 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import useVisualEffectViewOverrides from "useVisualEffectViewOverrides" /* 4806 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;

const require = arg1;
let c3 = importAllResult;
({ getVisualEffectViewOverrides: c4, setVisualEffectViewOverides: c5 } = useVisualEffectViewOverrides);
({ jsx: closure_6, Fragment: error, jsxs: closure_8 } = jsxProd);
let closure_9 = createCacheKey.createStyles({ radio: { fontSize: 14 } });
const memoResult = importAllResult.memo(function VEVOOPropBlurEffectName() {
  const _require = callback3();
  let obj = _require(visualEffectViewOverrideSharedStyles[5]);
  visualEffectViewOverrideSharedStyles = obj.useVisualEffectViewOverrideSharedStyles();
  const tmp2 = first(importAllResult.useState("Dark"), 2);
  first = tmp2[0];
  const tmp4 = first(tmp2[1].useState(false), 2);
  const first1 = tmp4[0];
  closure_5 = tmp4[1];
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
  obj = { style: items, label: "Blur Effect Name", disabled: !first1, leadingStyle: visualEffectViewOverrideSharedStyles.enabledSwitchStyle, leading: callback(_require(visualEffectViewOverrideSharedStyles[7]).FormSwitch, obj), subLabel: null };
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
  obj1 = { children: null };
  const tmp6 = first(tmp2[1].useState(first1().blurEffectNameOverride), 2);
  const items1 = [
    callback(_require(visualEffectViewOverrideSharedStyles[6]).FormSwitchRow, {
      label: "Theme: " + first,
      style: visualEffectViewOverrideSharedStyles.zeroPaddingHorizontal,
      disabled: !first1,
      value: "Dark" === first,
      onValueChange() {
        let str = "Dark";
        if ("Dark" === first) {
          str = "Light";
        }
        closure_3(str);
      }
    }),

  ];
  const BLUR_EFFECT_NAMES = _require(visualEffectViewOverrideSharedStyles[8]).BLUR_EFFECT_NAMES;
  const found = BLUR_EFFECT_NAMES.filter((arr) => -1 !== arr.indexOf(first));
  items1[1] = found.map((str) => {
    const lib = str;
    const items = [visualEffectViewOverrideSharedStyles.zeroPaddingHorizontal, { opacity: 1 }];
    return closure_1_6(lib(visualEffectViewOverrideSharedStyles[6]).FormRadioRow, {
      label: str.replace(first, ""),
      labelStyle: lib.radio,
      style: items,
      selected: str === closure_6,
      disabled: !first1,
      onPress() {
        closure_1_8(closure_0);
      }
    }, arg1);
  });
  obj1[0] = items1;
  obj[5] = callback2(closure_7, obj1);
  return callback(_require(visualEffectViewOverrideSharedStyles[6]).FormRow, obj);
});
const result = require("set").fileFinishedImporting("modules/visual_effect_view/native/overrides/VEVOOPropBlurEffectName.tsx");

export default memoResult;