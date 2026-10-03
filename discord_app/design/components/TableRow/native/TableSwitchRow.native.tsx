// === Module 6698: TableSwitchRow ===

// Module 6698 (TableSwitchRow)
import c from "c" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import native from "native" /* 4582 */;
import Text_Text from "Text/Text" /* 4886 */;
import TableRow from "TableRow" /* 5993 */;
import FormSwitch from "FormSwitch" /* 6699 */;
import _slicedToArray from "module_32" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_2 = ["value", "onValueChange", "label", "subLabel", "trailing", "disabled", "accessibilityHint", "variant"];
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4890);
let closure_9 = createStyles.createStyles(() => ({ labelWithTrailing: { flexDirection: "row", alignItems: "center", gap: 8 } }));
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/TableRow/native/TableSwitchRow.native.tsx");

export const TableSwitchRow = ReactCompilerGating.isReactCompilerEnabled() ? ((value) => {
  const cResult = c.c(47);
  if (cResult[0] !== value) {
    value = value.value;
    closure_1 = value;
    const onValueChange = value.onValueChange;
    closure_0 = onValueChange;
    ({ label, subLabel, trailing, disabled, accessibilityHint, variant } = value);
    const tmp15 = _objectWithoutProperties(value, closure_2);
    class V {
      constructor() {
        tmpResult = undefined;
        if (closure_0 != null) {
          tmp3 = closure_1;
          tmpResult = tmp(!closure_1);
        }
        return tmpResult;
      }
    }
    cResult[0] = value;
    cResult[1] = accessibilityHint;
    cResult[2] = label;
    cResult[3] = onValueChange;
    cResult[4] = tmp15;
    cResult[5] = subLabel;
    cResult[6] = disabled;
    cResult[7] = trailing;
    cResult[8] = value;
    cResult[9] = variant;
    let tmp12 = variant;
    let tmp10 = trailing;
    let tmp8 = subLabel;
    let tmp5 = label;
  } else {
    tmp5 = cResult[2];
    closure_0 = cResult[3];
    tmp8 = cResult[5];
    tmp10 = cResult[7];
    closure_1 = cResult[8];
    tmp12 = cResult[9];
  }
  const tmp16 = closure_9();
  PlatformUtils;
  if (cResult[10] === tmp6) {
    if (cResult[13] !== tmp5) {
      const nodeText = native.getNodeText(tmp5);
      cResult[13] = tmp5;
      cResult[14] = nodeText;
      const tmpResult3 = native;
    }
    if (cResult[15] !== tmp8) {
      const nodeText1 = native.getNodeText(tmp8);
      cResult[15] = tmp8;
      cResult[16] = nodeText1;
      const tmpResult4 = native;
    }
    [r10076, closure_2] = noop.useState(tmp11);
    if (cResult[17] !== tmp11) {
      class N {
        constructor() {
          tmp = closure_2(closure_1);
          return;
        }
      }
      const items = [tmp11];
      cResult[17] = tmp11;
      cResult[18] = N;
      cResult[19] = items;
      let tmp26 = items;
    } else {
      class N {
        constructor() {
          tmp = closure_2(closure_1);
          return;
        }
      }
      tmp26 = cResult[19];
    }
    const effect = noop.useEffect(N, tmp26);
    if (cResult[20] === tmp6) {
      class N {
        constructor() {
          tmp = closure_2(closure_1);
          return;
        }
      }
      if (cResult[23] === tmp5) {
        class N {
          constructor() {
            tmp = closure_2(closure_1);
            return;
          }
        }
      }
      let tmp34Result = tmp5;
      if (null != tmp10) {
        class N {
          constructor() {
            tmp = closure_2(closure_1);
            return;
          }
        }
        tmp36[0] = tmp16.labelWithTrailing;
        let tmp32Result = tmp5;
        if (!noop.isValidElement(tmp5)) {
          class N {
            constructor() {
              tmp = closure_2(closure_1);
              return;
            }
          }
          if ("danger" === tmp12) {
            class N {
              constructor() {
                tmp = closure_2(closure_1);
                return;
              }
            }
          }
          const obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", includeFontPadding: true, children: tmp5 };
          tmp32Result = tmp32(Text_Text.Text, obj2);
        }
        const items1 = [tmp32Result, tmp10];
        tmp36[1] = items1;
        tmp34Result = closure_1_8(View, tmp36);
      }
      cResult[23] = tmp5;
      cResult[24] = tmp16;
      cResult[25] = tmp10;
      cResult[26] = tmp12;
      class V {
        constructor() {
          tmpResult = undefined;
          if (closure_0 != null) {
            tmp3 = closure_1;
            tmpResult = tmp(!closure_1);
          }
          return tmpResult;
        }
      }
      cResult[27] = tmp34Result;
    }
    const fn = function $() {
      closure_1_2(!closure_1);
      const timerId = setTimeout(() => {
        if (closure_1_0 != null) {
          tmp(!closure_1_1);
        }
      });
    };
    class V {
      constructor() {
        tmpResult = undefined;
        if (closure_0 != null) {
          tmp3 = closure_1;
          tmpResult = tmp(!closure_1);
        }
        return tmpResult;
      }
    }
    cResult[20] = tmp6;
    cResult[21] = tmp11;
    cResult[22] = fn;
    const tmp24 = _slicedToArray(noop.useState(tmp11), 2);
  }
  class V {
    constructor() {
      tmpResult = undefined;
      if (closure_0 != null) {
        tmp3 = closure_1;
        tmpResult = tmp(!closure_1);
      }
      return tmpResult;
    }
  }
  cResult[10] = tmp6;
  cResult[11] = tmp11;
  cResult[12] = V;
}) : ((value) => {
  value = value.value;
  require = value;
  ({ onValueChange: dependencyMap, label, subLabel, trailing, disabled } = value);
  if (disabled === undefined) {
    disabled = false;
  }
  const variant = value.variant;
  const merged = Object.assign(value, Object.assign({ value: 0, onValueChange: 0, label: 0, subLabel: 0, trailing: 0, disabled: 0, accessibilityHint: 0, variant: 0 }));
  const tmp2 = closure_9();
  const isAndroidResult = PlatformUtils.isAndroid();
  const nodeText = native.getNodeText(label);
  const nodeText1 = native.getNodeText(subLabel);
  const tmp8 = _slicedToArray(noop.useState(value), 2);
  closure_2 = tmp8[1];
  const items = [value];
  const effect = noop.useEffect(() => {
    closure_2(value);
  }, items);
  const obj5 = {};
  const merged1 = Object.assign(merged);
  obj5.variant = variant;
  obj5.arrow = false;
  let tmp15Result = label;
  if (null != trailing) {
    const obj6 = { style: tmp2.labelWithTrailing, children: null };
    let tmp10Result = label;
    if (!noop.isValidElement(label)) {
      let str = "mobile-text-heading-primary";
      if ("danger" === variant) {
        str = "text-feedback-critical";
      }
      const obj7 = { variant: "text-md/semibold", color: str, includeFontPadding: true, children: label };
      tmp10Result = React5(tmp3(4886).Text, obj7);
    }
    const items1 = [tmp10Result, trailing];
    obj6.children = items1;
    tmp15Result = closure_1_8(View, obj6);
  }
  obj5.label = tmp15Result;
  obj5.subLabel = subLabel;
  obj5.disabled = disabled;
  obj5.accessibilityState = { disabled, checked: tmp8[0] };
  obj5.accessible = true;
  obj5.accessibilityRole = "switch";
  let str3 = nodeText1;
  if (nodeText1 == null) {
    str3 = "";
  }
  function handleOnPress() {
    let tmpResult;
    if (dependencyMap != null) {
      tmpResult = tmp(!value);
    }
    return tmpResult;
  }
  obj5.accessibilityLabel = "" + nodeText + ", " + str3;
  obj5.accessibilityHint = value.accessibilityHint;
  let tmp14;
  if (isAndroidResult) {
    tmp14 = handleOnPress;
  }
  obj5.onPress = tmp14;
  obj5.onAccessibilityTap = function onAccessibilityTap() {
    closure_2(!value);
    const timerId = setTimeout(() => {
      if (closure_1_1 != null) {
        tmp(!closure_1_0);
      }
    });
  };
  obj5.trailing = React5(FormSwitch.FormSwitch, { "aria-hidden": true, value, onValueChange: handleOnPress, disabled });
  return React5(TableRow.TableRow, obj5);
});