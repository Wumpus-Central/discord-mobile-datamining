// discord_app/design/void/Form/native/FormSwitchRow.tsx
import c from "../../../../../_runtime/00576_c.js";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import RedesignCompat from "../../../components/RedesignCompat/native/RedesignCompat.native.tsx";
import FormRowDefault from "FormRow.tsx";
import FormLabelDefault from "FormLabel.tsx";
import TableSwitchRow from "../../../components/TableRow/native/TableSwitchRow.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const Form_FormSwitchDefault = tmp13(8905);
require = fn;
let closure_3 = [
  "onValueChange",
  "value",
  "disabled",
  "label",
  "subLabel",
  "accessibilityHint",
  "trailing",
  "numberOfLines",
  "switchProps",
];
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4890);
let closure_10 = createStyles.createStyles({
  trailing: { flex: 1, flexDirection: "row", width: "100%", alignItems: "center" },
});
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onValueChange) => {
      const cResult = c.c(48);
      if (cResult[0] !== onValueChange) {
        onValueChange = onValueChange.onValueChange;
        closure_0 = onValueChange;
        value = onValueChange.value;
        closure_1 = value;
        ({ disabled, label, subLabel, accessibilityHint, trailing, numberOfLines, switchProps } = onValueChange);
        const tmp16 = _objectWithoutProperties(onValueChange, closure_3);
        class D {
          constructor() {
            tmp2 = null != closure_0;
            tmp = closure_0;
            if (tmp2) {
              tmp3 = closure_1;
              tmp2 = null != closure_1;
            }
            if (tmp2) {
              tmp4 = closure_1;
              tmpResult = tmp(!closure_1);
            }
            return;
          }
        }
        cResult[0] = onValueChange;
        cResult[1] = accessibilityHint;
        cResult[2] = label;
        cResult[3] = numberOfLines;
        cResult[4] = onValueChange;
        cResult[5] = tmp16;
        cResult[6] = subLabel;
        cResult[7] = disabled;
        cResult[8] = switchProps;
        cResult[9] = trailing;
        cResult[10] = value;
        let tmp12 = trailing;
        let tmp11 = switchProps;
        let tmp9 = subLabel;
        let tmp6 = numberOfLines;
        let tmp5 = label;
      } else {
        tmp5 = cResult[2];
        tmp6 = cResult[3];
        closure_0 = cResult[4];
        tmp9 = cResult[6];
        tmp11 = cResult[8];
        tmp12 = cResult[9];
        closure_1 = cResult[10];
      }
      if (cResult[11] !== tmp11) {
        let obj2 = tmp11;
        if (undefined === tmp11) {
          obj2 = {};
        }
        cResult[11] = tmp11;
        cResult[12] = obj2;
      }
      const tmp18 = closure_10();
      PlatformUtils;
      if (cResult[13] === tmp7) {
        [first, closure_3] = noop.useState(tmp13);
        if (cResult[16] !== tmp13) {
          class O {
            constructor() {
              tmp = closure_3(closure_1);
              return;
            }
          }
          const items = [tmp13];
          cResult[16] = tmp13;
          cResult[17] = O;
          cResult[18] = items;
          let tmp25 = items;
        } else {
          class O {
            constructor() {
              tmp = closure_3(closure_1);
              return;
            }
          }
          tmp25 = cResult[18];
        }
        const effect = noop.useEffect(O, tmp25);
        if (cResult[19] === first) {
          class O {
            constructor() {
              tmp = closure_3(closure_1);
              return;
            }
          }
          if (typeof tmp5 === "string") {
            class O {
              constructor() {
                tmp = closure_3(closure_1);
                return;
              }
            }
          }
          let sum = tmp28;
          if (tmp30) {
            class O {
              constructor() {
                tmp = closure_3(closure_1);
                return;
              }
            }
            const _HermesInternal = HermesInternal;
            sum = tmp28 + " " + tmp9;
          }
          if (cResult[22] === tmp5) {
            class O {
              constructor() {
                tmp = closure_3(closure_1);
                return;
              }
            }
            if (cResult[25] === tmp18.trailing) {
              class O {
                constructor() {
                  tmp = closure_3(closure_1);
                  return;
                }
              }
            }
            const obj4 = { style: tmp18.trailing, children: null };
            const items1 = [tmp32, null != tmp12 && tmp12];
            obj4.children = items1;
            const tmp40 = options(View, obj4);
            cResult[25] = tmp18.trailing;
            class D {
              constructor() {
                tmp2 = null != closure_0;
                tmp = closure_0;
                if (tmp2) {
                  tmp3 = closure_1;
                  tmp2 = null != closure_1;
                }
                if (tmp2) {
                  tmp4 = closure_1;
                  tmpResult = tmp(!closure_1);
                }
                return;
              }
            }
            cResult[26] = tmp32;
            cResult[27] = null != tmp12 && tmp12;
            cResult[28] = tmp40;
          }
          const obj5 = { numberOfLines: tmp6, text: tmp5 };
          const tmp35 = closure_1_8(FormLabelDefault, obj5);
          class D {
            constructor() {
              tmp2 = null != closure_0;
              tmp = closure_0;
              if (tmp2) {
                tmp3 = closure_1;
                tmp2 = null != closure_1;
              }
              if (tmp2) {
                tmp4 = closure_1;
                tmpResult = tmp(!closure_1);
              }
              return;
            }
          }
          cResult[22] = tmp5;
          cResult[23] = tmp6;
          cResult[24] = tmp35;
          tmp30 = null != undefined && typeof tmp9 === "string";
        }
        const fn = function j() {
          closure_3(!first);
          const timerId = setTimeout(() => {
            if (closure_1_0 != null) {
              tmp(!first);
            }
          });
        };
        cResult[19] = first;
        class D {
          constructor() {
            tmp2 = null != closure_0;
            tmp = closure_0;
            if (tmp2) {
              tmp3 = closure_1;
              tmp2 = null != closure_1;
            }
            if (tmp2) {
              tmp4 = closure_1;
              tmpResult = tmp(!closure_1);
            }
            return;
          }
        }
        cResult[20] = tmp7;
        cResult[21] = fn;
      }
      class D {
        constructor() {
          tmp2 = null != closure_0;
          tmp = closure_0;
          if (tmp2) {
            tmp3 = closure_1;
            tmp2 = null != closure_1;
          }
          if (tmp2) {
            tmp4 = closure_1;
            tmpResult = tmp(!closure_1);
          }
          return;
        }
      }
      cResult[13] = tmp7;
      cResult[14] = tmp13;
      cResult[15] = D;
    }
  : (onValueChange) => {
      onValueChange = onValueChange.onValueChange;
      value = onValueChange.value;
      importDefault = value;
      let flag = onValueChange.disabled;
      if (flag === undefined) {
        flag = false;
      }
      ({ label, subLabel, trailing, switchProps, accessibilityHint, numberOfLines } = onValueChange);
      if (switchProps === undefined) {
        switchProps = {};
      }
      const merged = Object.assign(
        onValueChange,
        Object.assign({
          onValueChange: 0,
          value: 0,
          disabled: 0,
          label: 0,
          subLabel: 0,
          accessibilityHint: 0,
          trailing: 0,
          numberOfLines: 0,
          switchProps: 0,
        }),
      );
      checked = undefined;
      closure_3 = undefined;
      let tmp2 = closure_10();
      [checked, closure_3] = noop.useState(value);
      const items = [value];
      const effect = noop.useEffect(() => {
        closure_3(value);
      }, items);
      let tmp8;
      if (typeof label === "string") {
        tmp8 = label;
      }
      let sum = tmp8;
      if (tmp9) {
        const _HermesInternal = HermesInternal;
        sum = tmp8 + " " + subLabel;
      }
      const obj2 = {};
      const isAndroidResult = PlatformUtils.isAndroid();
      tmp9 = null != tmp8 && typeof subLabel === "string";
      const merged1 = Object.assign(merged);
      const obj3 = { style: tmp2.trailing, children: null };
      const items1 = [closure_1_8(FormLabelDefault, { numberOfLines, text: label }), null != trailing && trailing];
      obj3.children = items1;
      obj2.label = options(View, obj3);
      obj2.subLabel = subLabel;
      obj2.disabled = flag;
      let fn;
      if (isAndroidResult) {
        fn = () => {
          let tmp2 = null != onValueChange;
          if (tmp2) {
            tmp2 = null != value;
          }
          if (tmp2) {
            onValueChange(!value);
          }
        };
      }
      obj2.onPress = fn;
      obj2.accessible = true;
      obj2.onAccessibilityTap = function onAccessibilityTap() {
        closure_3(!first);
        const timerId = setTimeout(() => {
          if (onValueChange != null) {
            tmp(!checked);
          }
        });
      };
      obj2.accessibilityRole = "switch";
      obj2.accessibilityLabel = sum;
      obj2.accessibilityState = { disabled: flag, checked };
      obj2.accessibilityHint = accessibilityHint;
      const obj4 = { disabled: flag, value, onValueChange };
      const tmp14 = FormRowDefault;
      const merged2 = Object.assign(switchProps);
      obj2.trailing = closure_1_8(Form_FormSwitchDefault, obj4);
      return closure_1_8(tmp14, obj2);
    };
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormSwitchRow.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let DEPRECATED_style = arg0;
      const cResult = c.c(7);
      if (noop.useContext(RedesignCompat.RedesignCompatContext)) {
        if (cResult[0] !== DEPRECATED_style) {
          const obj2 = { value: null, onValueChange: null };
          ({ value: obj3.value, onValueChange: obj3.onValueChange } = DEPRECATED_style);
          const merged = Object.assign(DEPRECATED_style);
          const tmp16 = closure_1_8(TableSwitchRow.TableSwitchRow, obj2);
          cResult[0] = DEPRECATED_style;
          cResult[1] = tmp16;
          let tmp11 = tmp16;
        } else {
          tmp11 = cResult[1];
        }
        if (cResult[2] === DEPRECATED_style.DEPRECATED_style) {
        }
        const obj4 = { style: DEPRECATED_style.DEPRECATED_style, children: tmp11 };
        const tmp20 = closure_1_8(View, obj4);
        DEPRECATED_style = DEPRECATED_style.DEPRECATED_style;
        cResult[2] = DEPRECATED_style;
        cResult[3] = tmp11;
        cResult[4] = tmp20;
      } else {
        if (cResult[5] !== DEPRECATED_style) {
          const obj7 = {};
          const merged1 = Object.assign(DEPRECATED_style);
          const tmp10 = closure_1_8(closure_11, obj7);
          cResult[5] = DEPRECATED_style;
          cResult[6] = tmp10;
          let tmp4 = tmp10;
        } else {
          tmp4 = cResult[6];
        }
        return tmp4;
      }
    }
  : (DEPRECATED_style) => {
      if (noop.useContext(RedesignCompat.RedesignCompatContext)) {
        const obj2 = { style: DEPRECATED_style.DEPRECATED_style, children: null };
        const obj5 = { value: null, onValueChange: null };
        ({ value: obj3.value, onValueChange: obj3.onValueChange } = DEPRECATED_style);
        const merged = Object.assign(DEPRECATED_style);
        obj2.children = closure_1_8(TableSwitchRow.TableSwitchRow, obj5);
        let tmp3Result = closure_1_8(View, obj2);
      } else {
        const obj = {};
        const merged1 = Object.assign(DEPRECATED_style);
        tmp3Result = closure_1_8(closure_11, obj);
      }
      return tmp3Result;
    };
