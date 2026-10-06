// discord_app/modules/safety_hub/native/AppealIngestionCollectSignal.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import react2 from "../../../../_runtime/00576_react.js";
import DispatcherDefault from "../../../Dispatcher.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import asyncRequire from "../../../../_runtime/01987_asyncRequire.js";
import react_native2 from "../../../../discord_common/js/packages/design/hooks/useA11yRolesNative.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import SafetyHubUtils from "../SafetyHubUtils.tsx";
import Form2 from "../../../design/void/Form/native/index.tsx";
import react from "../../../../_runtime/00019_react.js";
import SafetyHubConstants from "../SafetyHubConstants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let dependencyMap;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
({ AppealIngestionSignal: closure_4, AppealIngestionSignalOrder: hasOwnProperty } = SafetyHubConstants);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: { flex: 1, paddingHorizontal: 16 },
  form: obj2,
  formRow: obj3,
  formSection: { gap: 8 },
  disclaimer: { marginTop: 24 },
};
obj2 = { marginBottom: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { paddingVertical: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let closure_8 = createStyles(obj);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (signal) => {
      let accessibilityRole;
      let accessibilityState;
      let onSelect;
      let rowStyle;
      let selected;
      let tmp4;
      let tmp6;
      let tmp8;
      const obj = react2;
      const cResult = obj.c(18);
      signal = signal.signal;
      ({ selected, rowStyle, onSelect } = signal);
      if (cResult[0] !== selected) {
        const obj2 = { selected };
        cResult[0] = selected;
        cResult[1] = obj2;
        tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      const tmpResult = react_native2;
      const radioA11yNative = tmpResult.useRadioA11yNative(tmp4);
      ({ accessibilityRole, accessibilityState } = radioA11yNative);
      if (cResult[2] !== signal) {
        const tmpResult2 = SafetyHubUtils;
        const appealSignalDisplayText = tmpResult2.getAppealSignalDisplayText(signal);
        cResult[2] = signal;
        cResult[3] = appealSignalDisplayText;
        tmp6 = appealSignalDisplayText;
      } else {
        tmp6 = cResult[3];
      }
      if (cResult[4] !== tmp6) {
        const obj3 = { text: tmp6 };
        const tmp10 = metroRequire(Form2.FormRow.Label, obj3);
        cResult[4] = tmp6;
        cResult[5] = tmp10;
        tmp8 = tmp10;
      } else {
        tmp8 = cResult[5];
      }
      if (cResult[6] === onSelect) {
        let tmp11;
        let tmp12;
        if (cResult[7] === signal) {
          tmp11 = cResult[8];
        }
        if (cResult[9] !== selected) {
          const obj4 = { selected };
          const tmp14 = metroRequire(Form2.FormRow.Radio, obj4);
          cResult[9] = selected;
          cResult[10] = tmp14;
          tmp12 = tmp14;
        } else {
          tmp12 = cResult[10];
        }
        if (cResult[11] === accessibilityRole) {
          if (cResult[12] === accessibilityState) {
            if (cResult[13] === rowStyle) {
              if (cResult[14] === tmp8) {
                if (cResult[15] === tmp11) {
                  let tmp15;
                  if (cResult[16] === tmp12) {
                    tmp15 = cResult[17];
                  }
                  return tmp15;
                }
              }
            }
          }
        }
        const obj5 = {
          style: rowStyle,
          label: tmp8,
          onPress: tmp11,
          trailing: tmp12,
          accessibilityRole,
          accessibilityState,
        };
        const tmp17 = metroRequire(Form2.FormRow, obj5);
        cResult[11] = accessibilityRole;
        cResult[12] = accessibilityState;
        cResult[13] = rowStyle;
        cResult[14] = tmp8;
        cResult[15] = tmp11;
        cResult[16] = tmp12;
        cResult[17] = tmp17;
        tmp15 = tmp17;
      }
      const fn = function u() {
        return onSelect(signal);
      };
      cResult[6] = onSelect;
      cResult[7] = signal;
      cResult[8] = fn;
      tmp11 = fn;
    }
  : (signal) => {
      let Label;
      let accessibilityRole;
      let accessibilityState;
      let closure_129_1;
      let obj3;
      let obj4;
      let selected;
      signal = signal.signal;
      ({ selected, onSelect: closure_129_1 } = signal);
      const rowStyle = signal.rowStyle;
      const obj = react_native2;
      const radioA11yNative = obj.useRadioA11yNative({ selected });
      ({ accessibilityRole, accessibilityState } = radioA11yNative);
      const obj2 = {
        style: rowStyle,
        label: metroRequire(Label, obj3),
        onPress() {
          return closure_1_1(signal);
        },
        trailing: metroRequire(Form2.FormRow.Radio, { selected }),
        accessibilityRole,
        accessibilityState,
      };
      const FormRow = Form2.FormRow;
      obj3 = { text: obj4.getAppealSignalDisplayText(signal) };
      Label = Form2.FormRow.Label;
      obj4 = SafetyHubUtils;
      return metroRequire(FormRow, obj2);
    };
const result = size.fileFinishedImporting("modules/safety_hub/native/AppealIngestionCollectSignal.tsx");

export default function AppealIngestionCollectSignal(isDsaEligible) {
  let Form;
  let Text;
  let closure_2;
  let intl3;
  let items;
  let items1;
  let obj4;
  let obj7;
  isDsaEligible = isDsaEligible.isDsaEligible;
  function handleAppealSignalSelect(signal) {
    let obj = DispatcherDefault;
    let obj2 = { type: "SAFETY_HUB_APPEAL_SIGNAL_SELECT", signal };
    obj.dispatch(obj2);
    const tmp4 = isDsaEligible && signal === constants.SOMETHING_ELSE;
    if (tmp4) {
      let obj3 = {
        onSave(userInput) {
          const obj = formRow(closure_1_2[12]);
          const obj2 = { type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE", userInput };
          obj.dispatch(obj2);
          const obj3 = formRow(closure_1_2[13]);
          obj3.hideActionSheet("AppealIngestionFreeTextAppealReasonActionSheet");
        },
        onClose() {
          const obj = formRow(closure_1_2[13]);
          return obj.hideActionSheet("AppealIngestionFreeTextAppealReasonActionSheet");
        },
      };
      const tmpResult = ActionSheetActionCreatorsDefault;
      tmpResult.openLazy(
        asyncRequire(11527, dependencyMap.paths),
        "AppealIngestionFreeTextAppealReasonActionSheet",
        obj3,
      );
    }
  }
  const tmp = closure_8();
  const formRow = tmp;
  let obj = isDsaEligible(11505);
  dependencyMap = obj.useSafetyHubAppealSignal();
  const intl = isDsaEligible(1126).intl;
  const stringResult = intl.string(isDsaEligible(1126).t["C5q+pW"]);
  const intl2 = isDsaEligible(1126).intl;
  let obj2 = { children: items };
  const stringResult1 = intl2.string(isDsaEligible(1126).t.VEcRhw);
  const AppealIngestionModalScreen = isDsaEligible(11511).AppealIngestionModalScreen;
  items = [
    closure_6(isDsaEligible(11511).AppealIngestionModalHeader, {
      headerText: stringResult,
      subHeaderText: stringResult1,
    }),
  ];
  let obj3 = { style: tmp.container, children: closure_7(Form, obj4) };
  obj4 = { style: tmp.form, children: items1 };
  Form = isDsaEligible(8924).Form;
  const obj5 = {
    sectionBodyStyle: tmp.formSection,
    accessibilityRole: "radiogroup",
    children: closure_5.map((signal, index) => {
      const obj = {
        signal,
        selected: signal === closure_2,
        rowStyle: formRow.formRow,
        onSelect: handleAppealSignalSelect,
      };
      return metroRequire(closure_9, obj, "formrow-" + index);
    }),
  };
  const FormSection = isDsaEligible(8924).FormSection;
  items1 = [closure_6(FormSection, obj5)];
  const obj6 = { style: tmp.disclaimer, children: closure_6(Text, obj7) };
  obj7 = { variant: "text-sm/normal", children: intl3.format(isDsaEligible(1126).t["8k9GCW"], {}) };
  Text = isDsaEligible(4892).Text;
  intl3 = isDsaEligible(1126).intl;
  items1[1] = closure_6(handleAppealSignalSelect, obj6);
  items[1] = closure_6(handleAppealSignalSelect, obj3);
  return closure_7(AppealIngestionModalScreen, obj2);
}
