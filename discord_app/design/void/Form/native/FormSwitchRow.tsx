// discord_app/design/void/Form/native/FormSwitchRow.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import RedesignCompat from "../../../components/RedesignCompat/native/RedesignCompat.native.tsx";
import FormRowDefault from "FormRow.tsx";
import FormLabelDefault from "FormLabel.tsx";
import TableSwitchRow2 from "../../../components/TableRow/native/TableSwitchRow.native.tsx";
import Form_FormSwitchDefault from "FormSwitch.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let onValueChange;

let c9;
let metroImportAll;
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
const View = react_native.View;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = createStyles.createStyles({
  trailing: { flex: 1, flexDirection: "row", width: "100%", alignItems: "center" },
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onValueChange) => {
      let accessibilityHint;
      let disabled;
      let first;
      let items1;
      let label;
      let numberOfLines;
      let subLabel;
      let switchProps;
      let tmp11;
      let tmp12;
      let tmp5;
      let tmp6;
      let tmp9;
      let trailing;
      const obj = react2;
      const cResult = obj.c(48);
      if (cResult[0] !== onValueChange) {
        onValueChange = onValueChange.onValueChange;
        let closure_0 = onValueChange;
        const value = onValueChange.value;
        let closure_1 = value;
        ({ disabled, label, subLabel, accessibilityHint, trailing, numberOfLines, switchProps } = onValueChange);
        const tmp16 = _objectWithoutProperties(onValueChange, closure_3);
        class D {
          constructor() {
            const tmp2 = null != closure_0 && null != closure_1;
            if (tmp2) {
              closure_0(!closure_1);
            }
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
        tmp12 = trailing;
        tmp11 = switchProps;
        tmp9 = subLabel;
        tmp6 = numberOfLines;
        tmp5 = label;
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
        let tmp25;
        [first, closure_3] = react.useState(tmp13);
        if (cResult[16] !== tmp13) {
          class O {
            constructor() {
              closure_3(closure_1);
            }
          }
          const items = [tmp13];
          cResult[16] = tmp13;
          cResult[17] = O;
          cResult[18] = items;
          tmp25 = items;
        } else {
          class O {
            constructor() {
              closure_3(closure_1);
            }
          }
          tmp25 = cResult[18];
        }
        const effect = react.useEffect(O, tmp25);
        if (cResult[19] === first) {
          class O {
            constructor() {
              closure_3(closure_1);
            }
          }
          if (typeof tmp5 === "string") {
            class O {
              constructor() {
                closure_3(closure_1);
              }
            }
          }
          let sum = tmp28;
          const tmp30 = null != undefined && typeof tmp9 === "string";
          if (tmp30) {
            class O {
              constructor() {
                closure_3(closure_1);
              }
            }
            const _HermesInternal = HermesInternal;
            sum = tmp28 + " " + tmp9;
          }
          if (cResult[22] === tmp5) {
            class O {
              constructor() {
                closure_3(closure_1);
              }
            }
            if (cResult[25] === tmp18.trailing) {
              class O {
                constructor() {
                  closure_3(closure_1);
                }
              }
            }
            const obj4 = { style: tmp18.trailing, children: items1 };
            items1 = [tmp32, null != tmp12 && tmp12];
            cResult[25] = tmp18.trailing;
            const tmp40 = React4(View, obj4);
            class D {
              constructor() {
                const tmp2 = null != closure_0 && null != closure_1;
                if (tmp2) {
                  closure_0(!closure_1);
                }
              }
            }
            cResult[26] = tmp32;
            cResult[27] = null != tmp12 && tmp12;
            cResult[28] = tmp40;
          }
          const obj5 = { numberOfLines: tmp6, text: tmp5 };
          const tmp35 = metroImportAll(FormLabelDefault, obj5);
          class D {
            constructor() {
              const tmp2 = null != closure_0 && null != closure_1;
              if (tmp2) {
                closure_0(!closure_1);
              }
            }
          }
          cResult[22] = tmp5;
          cResult[23] = tmp6;
          cResult[24] = tmp35;
        }
        const fn = function j() {
          const tmp = closure_3(!first);
          const timerId = setTimeout(() => {
            if (closure_1_0 != null) {
              tmp(!first);
            }
          });
        };
        cResult[19] = first;
        class D {
          constructor() {
            const tmp2 = null != closure_0 && null != closure_1;
            if (tmp2) {
              closure_0(!closure_1);
            }
          }
        }
        cResult[20] = tmp7;
        cResult[21] = fn;
      }
      class D {
        constructor() {
          const tmp2 = null != closure_0 && null != closure_1;
          if (tmp2) {
            closure_0(!closure_1);
          }
        }
      }
      cResult[13] = tmp7;
      cResult[14] = tmp13;
      cResult[15] = D;
    }
  : (onValueChange) => {
      let accessibilityHint;
      let first;
      let fn;
      let items1;
      let label;
      let numberOfLines;
      let obj3;
      let obj4;
      let subLabel;
      let switchProps;
      let tmp13Result;
      let trailing;
      onValueChange = onValueChange.onValueChange;
      const value = onValueChange.value;
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
      first = undefined;
      closure_3 = undefined;
      let tmp2 = closure_10();
      const obj = PlatformUtils;
      const isAndroidResult = obj.isAndroid();
      [first, closure_3] = react.useState(value);
      const items = [value];
      const effect = react.useEffect(() => {
        closure_3(value);
      }, items);
      let tmp8;
      if (typeof label === "string") {
        tmp8 = label;
      }
      let sum = tmp8;
      const tmp9 = null != tmp8 && typeof subLabel === "string";
      if (tmp9) {
        const _HermesInternal = HermesInternal;
        sum = tmp8 + " " + subLabel;
      }
      const obj2 = {
        label: React4(View, obj3),
        subLabel,
        disabled: flag,
        onPress: fn,
        accessible: true,
        onAccessibilityTap() {
          const tmp = closure_3(!first);
          const timerId = setTimeout(() => {
            if (onValueChange != null) {
              tmp(!first);
            }
          });
        },
        accessibilityRole: "switch",
        accessibilityLabel: sum,
        accessibilityState: { disabled: flag, checked: first },
        accessibilityHint,
        trailing: metroImportAll(tmp13Result, obj4),
      };
      const tmp14 = FormRowDefault;
      const merged1 = Object.assign(merged);
      obj3 = { style: tmp2.trailing, children: items1 };
      items1 = [metroImportAll(FormLabelDefault, { numberOfLines, text: label }), null != trailing && trailing];
      fn = undefined;
      if (isAndroidResult) {
        fn = () => {
          const tmp2 = null != onValueChange && null != value;
          if (tmp2) {
            onValueChange(!value);
          }
        };
      }
      obj4 = { disabled: flag, value, onValueChange };
      tmp13Result = Form_FormSwitchDefault;
      const merged2 = Object.assign(switchProps);
      return metroImportAll(tmp14, obj2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (DEPRECATED_style) => {
      let tmp4;
      const obj = react2;
      const cResult = obj.c(7);
      if (react.useContext(RedesignCompat.RedesignCompatContext)) {
        let tmp11;
        if (cResult[0] !== DEPRECATED_style) {
          const obj2 = { value: null, onValueChange: null };
          ({ value: obj3.value, onValueChange: obj3.onValueChange } = DEPRECATED_style);
          const TableSwitchRow = TableSwitchRow2.TableSwitchRow;
          const merged = Object.assign(DEPRECATED_style);
          const tmp16 = metroImportAll(TableSwitchRow, obj2);
          cResult[0] = DEPRECATED_style;
          cResult[1] = tmp16;
          tmp11 = tmp16;
        } else {
          tmp11 = cResult[1];
        }
        if (cResult[2] === DEPRECATED_style.DEPRECATED_style) {
          let tmp17;
          if (cResult[3] === tmp11) {
            tmp17 = cResult[4];
          }
          tmp4 = tmp17;
        }
        const obj4 = { style: DEPRECATED_style.DEPRECATED_style, children: tmp11 };
        const tmp20 = metroImportAll(View, obj4);
        cResult[2] = DEPRECATED_style.DEPRECATED_style;
        cResult[3] = tmp11;
        cResult[4] = tmp20;
        tmp17 = tmp20;
      } else if (cResult[5] !== DEPRECATED_style) {
        const obj7 = {};
        const merged1 = Object.assign(DEPRECATED_style);
        const tmp10 = metroImportAll(closure_11, obj7);
        cResult[5] = DEPRECATED_style;
        cResult[6] = tmp10;
        tmp4 = tmp10;
      } else {
        tmp4 = cResult[6];
      }
      return tmp4;
    }
  : (DEPRECATED_style) => {
      let TableSwitchRow;
      let obj5;
      let tmp3Result;
      if (react.useContext(RedesignCompat.RedesignCompatContext)) {
        const obj2 = { style: DEPRECATED_style.DEPRECATED_style, children: metroImportAll(TableSwitchRow, obj5) };
        obj5 = { value: null, onValueChange: null };
        ({ value: obj3.value, onValueChange: obj3.onValueChange } = DEPRECATED_style);
        TableSwitchRow = TableSwitchRow2.TableSwitchRow;
        const merged = Object.assign(DEPRECATED_style);
        tmp3Result = metroImportAll(View, obj2);
      } else {
        const obj = {};
        const merged1 = Object.assign(DEPRECATED_style);
        tmp3Result = metroImportAll(closure_11, obj);
      }
      return tmp3Result;
    };
const result = size.fileFinishedImporting("design/void/Form/native/FormSwitchRow.tsx");

export default tmp3;
