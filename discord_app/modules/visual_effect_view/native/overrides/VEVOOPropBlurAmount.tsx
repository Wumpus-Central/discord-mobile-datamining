// === Module 16022: VEVOOPropBlurAmount ===

// Module 16022 (VEVOOPropBlurAmount)
import FormSwitch from "FormSwitch" /* 7304 */;
import Form from "Form" /* 8716 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const VEVOOStore = fn(5047);
({ getVisualEffectViewOverrides: hasOwnProperty, setVisualEffectViewOverides: metroRequire } = VEVOOStore);
const jsx = fn(21).jsx;
const createStyles = fn(4636);
let closure_8 = createStyles.createStyles({ enabledSwitchStyle: { alignSelf: "flex-start" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/visual_effect_view/native/overrides/VEVOOPropBlurAmount.tsx");

export default noop.memo(function VEVOOPropBlurAmount() {
  const tmp = closure_8();
  [tmp3, require] = onValueChange(noop.useState(false), 2);
  const tmp4 = onValueChange(noop.useState(closure_5().blurAmountOverride), 2);
  const first = tmp4[0];
  dependencyMap = tmp4[1];
  const tmp2 = onValueChange(noop.useState(false), 2);
  onValueChange = noop.useCallback((blurAmountOverride) => {
    if (null != blurAmountOverride) {
      closure_2(blurAmountOverride);
    }
    const obj = {};
    const merged = Object.assign(hasOwnProperty());
    obj.blurAmountOverride = blurAmountOverride;
    timestampProducer(obj);
  }, []);
  let str;
  if (first != null) {
    str = first.toFixed(3);
  }
  if (str == null) {
    str = "";
  }
  let obj = { label: "Blur Amount " + str, leadingStyle: tmp.enabledSwitchStyle, leading: null, subLabel: null, disabled: !tmp3 };
  obj = {
    value: tmp3,
    onValueChange(arg0) {
      require(arg0);
      let tmp3;
      if (arg0) {
        tmp3 = first;
      }
      callback(tmp3);
    }
  };
  obj.leading = jsx(FormSwitch.FormSwitch, {
    value: tmp3,
    onValueChange(arg0) {
      require(arg0);
      let tmp3;
      if (arg0) {
        tmp3 = first;
      }
      callback(tmp3);
    }
  });
  const ref = noop.useRef(first);
  obj.subLabel = jsx(first(16023), { disabled: !tmp3, disabledOpacity: !tmp3, initialValue: noop.useRef(first), onValueChange });
  return jsx(Form.FormRow, {
    value: tmp3,
    onValueChange(arg0) {
      require(arg0);
      let tmp3;
      if (arg0) {
        tmp3 = first;
      }
      callback(tmp3);
    }
  });
});