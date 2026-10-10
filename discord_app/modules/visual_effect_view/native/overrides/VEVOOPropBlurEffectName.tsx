// === Module 16326: VEVOOPropBlurEffectName ===

// Module 16326 (VEVOOPropBlurEffectName)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const VEVOOStore = fn(5366);
({ getVisualEffectViewOverrides: closure_4, setVisualEffectViewOverides: hasOwnProperty } = VEVOOStore);
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5092);
let closure_9 = createStyles.createStyles({ radio: { fontSize: 14 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/visual_effect_view/native/overrides/VEVOOPropBlurEffectName.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function VEVOOPropBlurEffectName() {
  const cResult = require("c").c(32);
  let obj = require("c");
  _require = closure_9();
  const tmp4 = closure_9();
  visualEffectViewOverrideSharedStyles = require("VEVOO").useVisualEffectViewOverrideSharedStyles();
  const tmp7 = first(noop.useState("Dark"), 2);
  first = tmp7[0];
  noop = tmp7[1];
  const tmp9 = first(noop.useState(false), 2);
  const first1 = tmp9[0];
  closure_5 = tmp9[1];
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp13 = first1();
    cResult[0] = tmp13;
    let first2 = tmp13;
  } else {
    first2 = cResult[0];
  }
  const tmp6Result = first(noop.useState(first2.blurEffectNameOverride), 2);
  const first3 = tmp6Result[0];
  closure_7 = tmp6Result[1];
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function _(blurEffectNameOverride) {
      if (null != blurEffectNameOverride) {
        closure_7(blurEffectNameOverride);
      }
      const obj = {};
      const merged = Object.assign(React4());
      obj.blurEffectNameOverride = blurEffectNameOverride;
      hasOwnProperty(obj);
    };
    cResult[1] = fn;
    let tmp16 = fn;
  } else {
    tmp16 = cResult[1];
  }
  closure_8 = tmp16;
  ({ zeroPaddingVertical, enabledSwitchStyle } = visualEffectViewOverrideSharedStyles);
  if (cResult[2] !== first3) {
    class C {
      constructor(arg0) {
        tmp = closure_5(arg0);
        tmp3 = undefined;
        tmp2 = closure_8;
        if (arg0) {
          tmp3 = closure_6;
        }
        tmp2Result = tmp2(tmp3);
        return;
      }
    }
    cResult[2] = first3;
    cResult[3] = C;
  } else {
    class C {
      constructor(arg0) {
        tmp = closure_5(arg0);
        tmp3 = undefined;
        tmp2 = closure_8;
        if (arg0) {
          tmp3 = closure_6;
        }
        tmp2Result = tmp2(tmp3);
        return;
      }
    }
  }
  if (cResult[4] === first1) {
    class C {
      constructor(arg0) {
        tmp = closure_5(arg0);
        tmp3 = undefined;
        tmp2 = closure_8;
        if (arg0) {
          tmp3 = closure_6;
        }
        tmp2Result = tmp2(tmp3);
        return;
      }
    }
    const _HermesInternal = HermesInternal;
    const combined = "Theme: " + first;
    if (cResult[7] !== first) {
      class T {
        constructor() {
          str = "Dark";
          tmp = closure_3;
          if ("Dark" === closure_2) {
            str = "Light";
          }
          tmpResult = tmp(str);
          return;
        }
      }
      cResult[7] = first;
      cResult[8] = T;
    } else {
      class T {
        constructor() {
          str = "Dark";
          tmp = closure_3;
          if ("Dark" === closure_2) {
            str = "Light";
          }
          tmpResult = tmp(str);
          return;
        }
      }
    }
    if (cResult[9] === visualEffectViewOverrideSharedStyles.zeroPaddingHorizontal) {
      class T {
        constructor() {
          str = "Dark";
          tmp = closure_3;
          if ("Dark" === closure_2) {
            str = "Light";
          }
          tmpResult = tmp(str);
          return;
        }
      }
    }
    const obj4 = { label: combined, style: visualEffectViewOverrideSharedStyles.zeroPaddingHorizontal, disabled: !first1, value: "Dark" === first, onValueChange: T };
    const tmp25 = first3(tmp(tmp2[9]).FormSwitchRow, obj4);
    cResult[9] = visualEffectViewOverrideSharedStyles.zeroPaddingHorizontal;
    cResult[10] = T;
    cResult[11] = combined;
    cResult[12] = !first1;
    cResult[13] = "Dark" === first;
    cResult[14] = tmp25;
  }
  const obj2 = require("VEVOO");
  cResult[4] = first1;
  cResult[5] = C;
  cResult[6] = first3(require("FormSwitch").FormSwitch, { value: first1, onValueChange: C });
  const tmp18 = first3(require("FormSwitch").FormSwitch, { value: first1, onValueChange: C });
}) : (function VEVOOPropBlurEffectName() {
  _require = closure_9();
  visualEffectViewOverrideSharedStyles = require("VEVOO").useVisualEffectViewOverrideSharedStyles();
  const tmp2 = first(noop.useState("Dark"), 2);
  first = tmp2[0];
  noop = tmp2[1];
  const tmp4 = first(noop.useState(false), 2);
  const first1 = tmp4[0];
  closure_5 = tmp4[1];
  let obj = require("VEVOO");
  [closure_6, closure_7] = first(noop.useState(first1().blurEffectNameOverride), 2);
  closure_8 = noop.useCallback((blurEffectNameOverride) => {
    if (null != blurEffectNameOverride) {
      closure_1_7(blurEffectNameOverride);
    }
    const obj = {};
    const merged = Object.assign(React4());
    obj.blurEffectNameOverride = blurEffectNameOverride;
    hasOwnProperty(obj);
  }, []);
  const obj2 = {
    style: visualEffectViewOverrideSharedStyles.zeroPaddingVertical,
    label: "Blur Effect Name",
    disabled: !first1,
    leadingStyle: visualEffectViewOverrideSharedStyles.enabledSwitchStyle,
    leading: closure_6(require("FormSwitch").FormSwitch, {
      value: first1,
      onValueChange(arg0) {
        closure_5(arg0);
        let tmp3;
        if (arg0) {
          tmp3 = closure_1_6;
        }
        closure_8(tmp3);
      }
    }),
    subLabel: null
  };
  const obj4 = { children: null };
  const obj3 = {
    value: first1,
    onValueChange(arg0) {
      closure_5(arg0);
      let tmp3;
      if (arg0) {
        tmp3 = closure_1_6;
      }
      closure_8(tmp3);
    }
  };
  const tmp6 = first(noop.useState(first1().blurEffectNameOverride), 2);
  let items = [
    closure_6(require("Form").FormSwitchRow, {
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
  const BLUR_EFFECT_NAMES = require("VisualEffectViewIOS").BLUR_EFFECT_NAMES;
  const found = BLUR_EFFECT_NAMES.filter((arr) => -1 !== arr.indexOf(first));
  items[1] = found.map((item, index) => {
    closure_0 = item;
    const obj = {
      label: item.replace(first, ""),
      labelStyle: closure_0.radio,
      style: null,
      selected: item === closure_6,
      disabled: !first1,
      onPress() {
        closure_8(closure_0);
      }
    };
    const items = [visualEffectViewOverrideSharedStyles.zeroPaddingHorizontal, { opacity: 1 }];
    obj.style = items;
    return closure_1_6(closure_0(visualEffectViewOverrideSharedStyles[9]).FormRadioRow, obj, index);
  });
  obj4.children = items;
  obj2.subLabel = closure_8(closure_7, obj4);
  return closure_6(require("Form").FormRow, obj2);
}));