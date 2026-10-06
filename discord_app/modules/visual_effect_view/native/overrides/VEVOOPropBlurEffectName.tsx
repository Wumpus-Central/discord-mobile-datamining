// === Module 15884: VEVOOPropBlurEffectName ===

// Module 15884 (VEVOOPropBlurEffectName)
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import VEVOOStore from "VEVOOStore" /* 5781 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_0, tmp, tmp2Result, tmpResult;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let react = react_mod;
({ getVisualEffectViewOverrides: closure_4, setVisualEffectViewOverides: hasOwnProperty } = VEVOOStore);
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles({ radio: { fontSize: 14 } });
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_3;
  let first;
  let first2;
  let tmp16;
  let visualEffectViewOverrideSharedStyles;
  let obj = require("react");
  const cResult = obj.c(34);
  _require = closure_9();
  const tmp4 = closure_9();
  const obj2 = require("VEVOO");
  visualEffectViewOverrideSharedStyles = obj2.useVisualEffectViewOverrideSharedStyles();
  const tmp7 = first(react.useState("Dark"), 2);
  const tmp6 = first;
  first = tmp7[0];
  const obj3 = react;
  react = tmp7[1];
  const tmp9 = first(react.useState(false), 2);
  const first1 = tmp9[0];
  let closure_5 = tmp9[1];
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp13 = first1();
    cResult[0] = tmp13;
    first2 = tmp13;
  } else {
    first2 = cResult[0];
  }
  const tmp6Result = tmp6(obj3.useState(first2.blurEffectNameOverride), 2);
  const first3 = tmp6Result[0];
  let closure_7 = tmp6Result[1];
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class O {
      constructor(arg0) {
        if (null != arg0) {
          tmp = closure_7;
          tmp2 = closure_7(arg0);
        }
        obj = {};
        merged = Object.assign(closure_4());
        obj.blurEffectNameOverride = arg0;
        tmp4 = closure_5(obj);
        return;
      }
    }
    cResult[1] = O;
    tmp16 = O;
  } else {
    class O {
      constructor(arg0) {
        if (null != arg0) {
          tmp = closure_7;
          tmp2 = closure_7(arg0);
        }
        obj = {};
        merged = Object.assign(closure_4());
        obj.blurEffectNameOverride = arg0;
        tmp4 = closure_5(obj);
        return;
      }
    }
  }
  O = tmp16;
  if (cResult[2] !== visualEffectViewOverrideSharedStyles.zeroPaddingVertical) {
    class O {
      constructor(arg0) {
        if (null != arg0) {
          tmp = closure_7;
          tmp2 = closure_7(arg0);
        }
        obj = {};
        merged = Object.assign(closure_4());
        obj.blurEffectNameOverride = arg0;
        tmp4 = closure_5(obj);
        return;
      }
    }
    ({ zeroPaddingVertical: tmp18[0], zeroPaddingVertical: tmp3[2] } = visualEffectViewOverrideSharedStyles);
    cResult[3] = tmp18;
  } else {
    class O {
      constructor(arg0) {
        if (null != arg0) {
          tmp = closure_7;
          tmp2 = closure_7(arg0);
        }
        obj = {};
        merged = Object.assign(closure_4());
        obj.blurEffectNameOverride = arg0;
        tmp4 = closure_5(obj);
        return;
      }
    }
  }
  if (cResult[4] !== first3) {
    class H {
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
    cResult[4] = first3;
    cResult[5] = H;
  } else {
    class H {
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
  if (cResult[6] === first1) {
    class H {
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
    let str = "Theme: ";
    const combined = "Theme: " + first;
    if (cResult[9] !== first) {
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
      cResult[9] = first;
      cResult[10] = T;
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
    if (cResult[11] === visualEffectViewOverrideSharedStyles.zeroPaddingHorizontal) {
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
    cResult[11] = visualEffectViewOverrideSharedStyles.zeroPaddingHorizontal;
    cResult[12] = T;
    cResult[13] = combined;
    cResult[14] = !first1;
    cResult[15] = "Dark" === first;
    cResult[16] = first3(require("Form").FormSwitchRow, obj4);
    const tmp27 = first3(require("Form").FormSwitchRow, obj4);
  }
  cResult[6] = first1;
  cResult[7] = H;
  cResult[8] = first3(require("FormSwitch").FormSwitch, { value: first1, onValueChange: H });
  first3(require("FormSwitch").FormSwitch, { value: first1, onValueChange: H });
}) : (() => {
  let closure_3;
  let closure_6;
  let closure_7;
  let first;
  let items;
  let items1;
  let obj3;
  let obj4;
  let visualEffectViewOverrideSharedStyles;
  _require = closure_9();
  let obj = require("VEVOO");
  visualEffectViewOverrideSharedStyles = obj.useVisualEffectViewOverrideSharedStyles();
  const tmp2 = first(react.useState("Dark"), 2);
  first = tmp2[0];
  react = tmp2[1];
  const tmp4 = first(react.useState(false), 2);
  const first1 = tmp4[0];
  let closure_5 = tmp4[1];
  [closure_6, closure_7] = first(react.useState(first1().blurEffectNameOverride), 2);
  first(react.useState(first1().blurEffectNameOverride), 2);
  let closure_8 = react.useCallback((blurEffectNameOverride) => {
    if (null != blurEffectNameOverride) {
      closure_7(blurEffectNameOverride);
    }
    const obj = { blurEffectNameOverride };
    const merged = Object.assign(React3());
    hasOwnProperty(obj);
  }, []);
  const obj2 = { style: items, label: "Blur Effect Name", disabled: !first1, leadingStyle: visualEffectViewOverrideSharedStyles.enabledSwitchStyle, leading: closure_6(require("FormSwitch").FormSwitch, obj3), subLabel: closure_8(closure_7, obj4) };
  items = [visualEffectViewOverrideSharedStyles.zeroPaddingVertical];
  const FormRow = require("Form").FormRow;
  obj3 = {
    value: first1,
    onValueChange(arg0) {
      closure_5(arg0);
      let tmp3;
      if (arg0) {
        tmp3 = closure_6;
      }
      closure_8(tmp3);
    }
  };
  obj4 = { children: items1 };
  const obj5 = {
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
  };
  const FormSwitchRow = require("Form").FormSwitchRow;
  items1 = [closure_6(FormSwitchRow, obj5), ];
  const BLUR_EFFECT_NAMES = require("VisualEffectViewIOS").BLUR_EFFECT_NAMES;
  const found = BLUR_EFFECT_NAMES.filter((arr) => -1 !== arr.indexOf(first));
  items1[1] = found.map((item, index) => {
    let items;
    closure_0 = item;
    const obj = {
      label: item.replace(first, ""),
      labelStyle: closure_0.radio,
      style: items,
      selected: item === closure_6,
      disabled: !first1,
      onPress() {
        closure_8(item);
      }
    };
    const FormRadioRow = closure_0(visualEffectViewOverrideSharedStyles[9]).FormRadioRow;
    items = [visualEffectViewOverrideSharedStyles.zeroPaddingHorizontal, { opacity: 1 }];
    return closure_6(FormRadioRow, obj, index);
  });
  return closure_6(FormRow, obj2);
}));
const result = size.fileFinishedImporting("modules/visual_effect_view/native/overrides/VEVOOPropBlurEffectName.tsx");

export default memoResult;