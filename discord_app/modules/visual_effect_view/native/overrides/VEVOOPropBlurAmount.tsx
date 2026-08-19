// === Module 15194: ? ===

// Module 15194
import FormSwitch from "FormSwitch" /* 7179 */;
import Form from "Form" /* 8083 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import useVisualEffectViewOverrides from "useVisualEffectViewOverrides" /* 4726 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
let c4 = importAllResult;
({ getVisualEffectViewOverrides: c5, setVisualEffectViewOverides: closure_6 } = useVisualEffectViewOverrides);
let closure_8 = createCacheKey.createStyles({ enabledSwitchStyle: { alignSelf: "flex-start" } });
const memoResult = importAllResult.memo(function VEVOOPropBlurAmount() {
  const tmp = callback2();
  [tmp3, require] = callback(importAllResult.useState(false), 2);
  const tmp4 = callback(importAllResult.useState(callback().blurAmountOverride), 2);
  const first = tmp4[0];
  dependencyMap = tmp4[1];
  const tmp2 = callback(importAllResult.useState(false), 2);
  callback = importAllResult.useCallback((blurAmountOverride) => {
    if (null != blurAmountOverride) {
      callback2(blurAmountOverride);
    }
    const obj = {};
    const merged = Object.assign(closure_1_5());
    obj.blurAmountOverride = blurAmountOverride;
    closure_1_6(obj);
  }, []);
  let str;
  if (first != null) {
    str = first.toFixed(3);
  }
  if (str == null) {
    str = "";
  }
  { label: "Blur Amount " + str, leadingStyle: tmp.enabledSwitchStyle, leading: jsx(FormSwitch.FormSwitch, obj), subLabel: jsx(first(15195), obj1), disabled: !tmp3 };
  obj = {
    value: tmp3,
    onValueChange(arg0) {
      callback(arg0);
      let tmp3;
      if (arg0) {
        tmp3 = first;
      }
      callback(tmp3);
    }
  };
  const ref = importAllResult.useRef(first);
  return jsx(Form.FormRow, {
    value: tmp3,
    onValueChange(arg0) {
      callback(arg0);
      let tmp3;
      if (arg0) {
        tmp3 = first;
      }
      callback(tmp3);
    }
  });
});
const result = require("obj132").fileFinishedImporting("modules/visual_effect_view/native/overrides/VEVOOPropBlurAmount.tsx");

export default memoResult;