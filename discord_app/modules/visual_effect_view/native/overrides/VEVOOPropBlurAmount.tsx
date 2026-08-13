// discord_app/modules/visual_effect_view/native/overrides/VEVOOPropBlurAmount.tsx
import _slicedToArray from "_slicedToArray";
import importAllResult from "noop";
import useVisualEffectViewOverrides from "useVisualEffectViewOverrides";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { FormSwitch } from "../../../../design/components/Forms/native/FormSwitch.native.tsx";
import { Form } from "../../../../design/void/Form/native/index.tsx";

let c5;
let closure_6;
const require = arg1;
let c4 = importAllResult;
({ getVisualEffectViewOverrides: c5, setVisualEffectViewOverides: closure_6 } = useVisualEffectViewOverrides);
let closure_8 = createCacheKey.createStyles({ enabledSwitchStyle: { alignSelf: "flex-start" } });
const memoResult = importAllResult.memo(function VEVOOPropBlurAmount() {
  let require;
  let tmp3;
  const tmp = callback2();
  [tmp3, require] = callback(importAllResult.useState(false), 2);
  const tmp4 = callback(importAllResult.useState(callback().blurAmountOverride), 2);
  const first = tmp4[0];
  const dependencyMap = tmp4[1];
  const tmp2 = callback(importAllResult.useState(false), 2);
  callback = importAllResult.useCallback((blurAmountOverride) => {
    if (null != blurAmountOverride) {
      callback2(blurAmountOverride);
    }
    const obj = {};
    const merged = Object.assign(outer1_5());
    obj.blurAmountOverride = blurAmountOverride;
    outer1_6(obj);
  }, []);
  let str;
  if (first != null) {
    str = first.toFixed(3);
  }
  if (str == null) {
    str = "";
  }
  obj = { label: "Blur Amount " + str, leadingStyle: tmp.enabledSwitchStyle, leading: tmp7(FormSwitch.FormSwitch, obj), subLabel: tmp7(first(15141), obj1), disabled: !tmp3 };
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
  const tmp8 = require;
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
const result = require("useVisualEffectViewOverrides").fileFinishedImporting("modules/visual_effect_view/native/overrides/VEVOOPropBlurAmount.tsx");

export default memoResult;