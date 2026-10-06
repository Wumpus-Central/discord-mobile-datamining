// === Module 15881: VEVOOPropBlurAmount ===

// Module 15881 (VEVOOPropBlurAmount)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import FormSwitch from "FormSwitch" /* 6706 */;
import Form from "Form" /* 8924 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import VEVOOStore from "VEVOOStore" /* 5781 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap;

let hasOwnProperty;
let metroRequire;
let _slicedToArray = _slicedToArray_mod;
({ getVisualEffectViewOverrides: hasOwnProperty, setVisualEffectViewOverides: metroRequire } = VEVOOStore);
const jsx = Fragment.jsx;
let closure_8 = createStyles.createStyles({ enabledSwitchStyle: { alignSelf: "flex-start" } });
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_2;
  let closure_3;
  let first;
  let tmp13;
  let tmp14;
  let tmp17;
  let tmp7;
  let obj = react2;
  const cResult = obj.c(18);
  const tmp4 = closure_8();
  [tmp7, require] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  const tmp5 = _slicedToArray;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp10 = closure_5();
    cResult[0] = tmp10;
    first = tmp10;
  } else {
    first = cResult[0];
  }
  const tmp5Result = tmp5(react.useState(first.blurAmountOverride), 2);
  const first1 = tmp5Result[0];
  dependencyMap = tmp5Result[1];
  const ref = react.useRef(first1);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function w(blurAmountOverride) {
      if (null != blurAmountOverride) {
        closure_2(blurAmountOverride);
      }
      const obj = { blurAmountOverride };
      const merged = Object.assign(hasOwnProperty());
      metroRequire(obj);
    };
    cResult[1] = fn;
    tmp13 = fn;
  } else {
    tmp13 = cResult[1];
  }
  _slicedToArray = tmp13;
  if (cResult[2] !== first1) {
    let str;
    if (first1 != null) {
      str = first1.toFixed(3);
    }
    if (str == null) {
      str = "";
    }
    cResult[2] = first1;
    cResult[3] = str;
    tmp14 = str;
  } else {
    tmp14 = cResult[3];
  }
  const combined = "Blur Amount " + tmp14;
  if (cResult[4] !== first1) {
    const fn2 = function x(arg0) {
      require(arg0);
      let tmp3;
      if (arg0) {
        tmp3 = first1;
      }
      closure_3(tmp3);
    };
    cResult[4] = first1;
    cResult[5] = fn2;
    tmp17 = fn2;
  } else {
    tmp17 = cResult[5];
  }
  if (cResult[6] === tmp7) {
    let tmp18;
    if (cResult[7] === tmp17) {
      tmp18 = cResult[8];
    }
    if (cResult[9] === !tmp7) {
      let tmp22;
      if (cResult[10] === !tmp7) {
        tmp22 = cResult[11];
      }
      if (cResult[12] === tmp4.enabledSwitchStyle) {
        if (cResult[13] === combined) {
          if (cResult[14] === tmp18) {
            if (cResult[15] === tmp22) {
              let tmp27;
              if (cResult[16] === !tmp7) {
                tmp27 = cResult[17];
              }
              return tmp27;
            }
          }
        }
      }
      const tmp29 = jsx(Form.FormRow, { label: combined, leadingStyle: tmp4.enabledSwitchStyle, leading: tmp18, subLabel: tmp22, disabled: !tmp7 });
      cResult[12] = tmp4.enabledSwitchStyle;
      cResult[13] = combined;
      cResult[14] = tmp18;
      cResult[15] = tmp22;
      cResult[16] = !tmp7;
      cResult[17] = tmp29;
      tmp27 = tmp29;
    }
    const tmp25 = jsx(first1(15882), { disabled: !tmp7, disabledOpacity: !tmp7, initialValue: ref, onValueChange: tmp13 });
    cResult[9] = !tmp7;
    cResult[10] = !tmp7;
    cResult[11] = tmp25;
    tmp22 = tmp25;
  }
  const tmp19 = jsx(FormSwitch.FormSwitch, { value: tmp7, onValueChange: tmp17 });
  cResult[6] = tmp7;
  cResult[7] = tmp17;
  cResult[8] = tmp19;
  tmp18 = tmp19;
}) : (() => {
  let closure_2;
  let onValueChange;
  let tmp3;
  const tmp = closure_8();
  [tmp3, require] = onValueChange(react.useState(false), 2);
  const tmp2 = onValueChange(react.useState(false), 2);
  const tmp4 = onValueChange(react.useState(closure_5().blurAmountOverride), 2);
  const first = tmp4[0];
  dependencyMap = tmp4[1];
  const ref = react.useRef(first);
  onValueChange = react.useCallback((blurAmountOverride) => {
    if (null != blurAmountOverride) {
      closure_2(blurAmountOverride);
    }
    const obj = { blurAmountOverride };
    const merged = Object.assign(hasOwnProperty());
    metroRequire(obj);
  }, []);
  let str;
  const FormRow = Form.FormRow;
  if (first != null) {
    str = first.toFixed(3);
  }
  if (str == null) {
    str = "";
  }
  return <FormRow label={"Blur Amount " + str} leadingStyle={tmp.enabledSwitchStyle} leading={null} subLabel={null} disabled={!tmp3} />;
}));
const result = size.fileFinishedImporting("modules/visual_effect_view/native/overrides/VEVOOPropBlurAmount.tsx");

export default memoResult;