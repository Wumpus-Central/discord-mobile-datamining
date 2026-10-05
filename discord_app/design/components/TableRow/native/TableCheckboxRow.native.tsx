// discord_app/design/components/TableRow/native/TableCheckboxRow.native.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import native from "../../../utils/native.tsx";
import react_native from "../../../../../discord_common/js/packages/design/hooks/useA11yRolesNative.tsx";
import ReanimatedRexport from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import FormCheckbox from "../../Forms/native/FormCheckbox.native.tsx";
import TableRow2 from "TableRow.native.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let checked, dependencyMap;

let closure_2 = ["checked", "label", "subLabel", "disabled", "onPress", "accessibilityHint"];
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (checked) => {
      let accessibilityRole;
      let accessibilityState;
      let disabled;
      let label;
      let onPress;
      let subLabel;
      let tmp10;
      let tmp16;
      let tmp4;
      let tmp6;
      let tmp8;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(35);
      if (cResult[0] !== checked) {
        checked = checked.checked;
        let closure_0 = checked;
        ({ label, subLabel, disabled, onPress } = checked);
        dependencyMap = onPress;
        const accessibilityHint = checked.accessibilityHint;
        const tmp13 = _objectWithoutProperties(checked, closure_2);
        cResult[0] = checked;
        cResult[1] = accessibilityHint;
        class T {
          constructor() {
            const result = sharedValue.set(0);
            closure_1(!closure_0);
          }
        }
        cResult[2] = checked;
        cResult[3] = label;
        cResult[4] = onPress;
        cResult[5] = tmp13;
        cResult[6] = subLabel;
        cResult[7] = disabled;
        tmp10 = disabled;
        tmp9 = subLabel;
        tmp8 = tmp13;
        tmp6 = label;
        tmp4 = accessibilityHint;
      } else {
        tmp4 = cResult[1];
        closure_0 = cResult[2];
        tmp6 = cResult[3];
        dependencyMap = cResult[4];
        tmp8 = cResult[5];
        tmp9 = cResult[6];
        tmp10 = cResult[7];
      }
      const tmpResult = ReanimatedRexport;
      const sharedValue = tmpResult.useSharedValue(0);
      if (cResult[8] !== sharedValue) {
        const fn = function x() {
          const result = sharedValue.set(1);
        };
        cResult[8] = sharedValue;
        cResult[9] = fn;
        tmp16 = fn;
      } else {
        tmp16 = cResult[9];
      }
      if (cResult[10] === tmp5) {
        if (cResult[11] === onPress) {
          let tmp17;
          let tmp18;
          let str;
          if (cResult[12] === sharedValue) {
            tmp17 = cResult[13];
          }
          if (cResult[14] !== tmp6) {
            const tmpResult4 = native;
            const nodeText = tmpResult4.getNodeText(tmp6);
            cResult[14] = tmp6;
            cResult[15] = nodeText;
            tmp18 = nodeText;
          } else {
            tmp18 = cResult[15];
          }
          if (cResult[16] !== tmp9) {
            const tmpResult5 = native;
            const nodeText1 = tmpResult5.getNodeText(tmp9);
            cResult[16] = tmp9;
            cResult[17] = nodeText1;
            str = nodeText1;
          } else {
            str = cResult[17];
          }
          if (cResult[18] === tmp5) {
            let tmp21;
            let tmp26;
            if (cResult[19] === (undefined !== tmp10 && tmp10)) {
              tmp21 = cResult[20];
            }
            const tmpResult6 = react_native;
            const checkboxA11yNative = tmpResult6.useCheckboxA11yNative(tmp21);
            ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
            if (str == null) {
              str = "";
            }
            const _HermesInternal = HermesInternal;
            const combined = "" + tmp18 + ", " + str;
            if (cResult[21] !== tmp5) {
              const tmp28 = jsx(FormCheckbox.FormCheckbox, { checked: tmp5 });
              cResult[21] = tmp5;
              cResult[22] = tmp28;
              tmp26 = tmp28;
            } else {
              tmp26 = cResult[22];
            }
            if (cResult[23] === tmp4) {
              if (cResult[24] === accessibilityRole) {
                if (cResult[25] === accessibilityState) {
                  if (cResult[26] === (undefined !== tmp10 && tmp10)) {
                    if (cResult[27] === tmp16) {
                      if (cResult[28] === tmp17) {
                        if (cResult[29] === tmp6) {
                          if (cResult[30] === tmp8) {
                            if (cResult[31] === tmp9) {
                              if (cResult[32] === combined) {
                                let tmp29;
                                if (cResult[33] === tmp26) {
                                  tmp29 = cResult[34];
                                }
                                return tmp29;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            class T {
              constructor() {
                const result = sharedValue.set(0);
                closure_1(!closure_0);
              }
            }
            const TableRow = TableRow2.TableRow;
            const merged = Object.assign(tmp8);
            tmp31.arrow = false;
            tmp31.label = tmp6;
            tmp31.subLabel = tmp9;
            tmp31.disabled = undefined !== tmp10 && tmp10;
            tmp31.accessibilityState = accessibilityState;
            tmp31.accessible = true;
            tmp31.accessibilityRole = accessibilityRole;
            tmp31.accessibilityLabel = combined;
            tmp31.accessibilityHint = tmp4;
            tmp31.onPressIn = tmp16;
            tmp31.onPress = tmp17;
            tmp31.trailing = tmp26;
            const tmp35 = <TableRow {...tmp31} />;
            cResult[23] = tmp4;
            cResult[24] = accessibilityRole;
            cResult[25] = accessibilityState;
            cResult[26] = undefined !== tmp10 && tmp10;
            cResult[27] = tmp16;
            cResult[28] = tmp17;
            cResult[29] = tmp6;
            cResult[30] = tmp8;
            cResult[31] = tmp9;
            cResult[32] = combined;
            cResult[33] = tmp26;
            cResult[34] = tmp35;
            tmp29 = tmp35;
          }
          const obj3 = { checked: tmp5, disabled: undefined !== tmp10 && tmp10 };
          cResult[18] = tmp5;
          cResult[19] = undefined !== tmp10 && tmp10;
          cResult[20] = obj3;
          tmp21 = obj3;
        }
      }
      class T {
        constructor() {
          const result = sharedValue.set(0);
          closure_1(!closure_0);
        }
      }
      cResult[10] = tmp5;
      cResult[11] = onPress;
      cResult[12] = sharedValue;
      cResult[13] = T;
      tmp17 = T;
    }
  : (checked) => {
      let accessibilityRole;
      let accessibilityState;
      let disabled;
      let label;
      let subLabel;
      checked = checked.checked;
      ({ label, subLabel, disabled } = checked);
      if (disabled === undefined) {
        disabled = false;
      }
      const onPress = checked.onPress;
      const accessibilityHint = checked.accessibilityHint;
      const merged = Object.assign(
        checked,
        Object.assign({ checked: 0, label: 0, subLabel: 0, disabled: 0, onPress: 0, accessibilityHint: 0 }),
      );
      const obj = ReanimatedRexport;
      const sharedValue = obj.useSharedValue(0);
      const items = [sharedValue];
      const items1 = [onPress, sharedValue, checked];
      const callback = react.useCallback(() => {
        const result = sharedValue.set(1);
      }, items);
      const callback1 = react.useCallback(() => {
        const result = sharedValue.set(0);
        onPress(!checked);
      }, items1);
      const obj2 = native;
      const nodeText = obj2.getNodeText(label);
      const obj3 = native;
      const nodeText1 = obj3.getNodeText(subLabel);
      const obj4 = react_native;
      const checkboxA11yNative = obj4.useCheckboxA11yNative({ checked, disabled });
      ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
      const TableRow = TableRow2.TableRow;
      const merged1 = Object.assign(merged);
      let str = nodeText1;
      if (nodeText1 == null) {
        str = "";
      }
      return (
        <TableRow
          arrow={false}
          label={label}
          subLabel={subLabel}
          disabled={disabled}
          accessibilityState={accessibilityState}
          accessible
          accessibilityRole={accessibilityRole}
          accessibilityLabel={"" + nodeText + ", " + str}
          accessibilityHint={accessibilityHint}
          onPressIn={callback}
          onPress={callback1}
          trailing={jsx(FormCheckbox.FormCheckbox, { checked })}
        />
      );
    };
let result = size.fileFinishedImporting("design/components/TableRow/native/TableCheckboxRow.native.tsx");

export const TableCheckboxRow = tmp2;
