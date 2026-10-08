// discord_app/modules/safety_hub/native/AppealIngestionCollectSignal.tsx
import c from "../../../../_runtime/00576_c.js";
import DispatcherDefault from "../../../Dispatcher.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import asyncRequireImpl from "../../../../_runtime/01999_asyncRequireImpl.js";
import useA11yRolesNative from "../../../../discord_common/js/packages/design/hooks/useA11yRolesNative.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import SafetyHubUtils from "../SafetyHubUtils.tsx";
import Form from "../../../design/void/Form/native/index.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const SafetyHubConstants = fn(5921);
({ AppealIngestionSignal: closure_4, AppealIngestionSignalOrder: hasOwnProperty } = SafetyHubConstants);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5090);
let obj2 = {
  container: { flex: 1, paddingHorizontal: 16 },
  form: { marginBottom: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW },
  formRow: null,
  formSection: null,
  disclaimer: null,
};
let obj3 = { marginBottom: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.formRow = { paddingVertical: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj2.formSection = { gap: 8 };
obj2.disclaimer = { marginTop: 24 };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? function AppealSignalRadioRow(signal) {
      const cResult = c.c(18);
      signal = signal.signal;
      ({ selected, rowStyle, onSelect } = signal);
      if (cResult[0] !== selected) {
        const obj2 = { selected };
        cResult[0] = selected;
        cResult[1] = obj2;
        let tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      const radioA11yNative = useA11yRolesNative.useRadioA11yNative(tmp4);
      ({ accessibilityRole, accessibilityState } = radioA11yNative);
      if (cResult[2] !== signal) {
        const appealSignalDisplayText = SafetyHubUtils.getAppealSignalDisplayText(signal);
        cResult[2] = signal;
        cResult[3] = appealSignalDisplayText;
        let tmp6 = appealSignalDisplayText;
        const tmpResult2 = SafetyHubUtils;
      } else {
        tmp6 = cResult[3];
      }
      if (cResult[4] !== tmp6) {
        const obj3 = { text: tmp6 };
        const tmp10 = timestampProducer(Form.FormRow.Label, obj3);
        cResult[4] = tmp6;
        cResult[5] = tmp10;
        let tmp8 = tmp10;
      } else {
        tmp8 = cResult[5];
      }
      if (cResult[6] === onSelect) {
        if (cResult[7] === signal) {
          let tmp11 = cResult[8];
        }
        if (cResult[9] !== selected) {
          const obj4 = { selected };
          const tmp14 = timestampProducer(Form.FormRow.Radio, obj4);
          cResult[9] = selected;
          cResult[10] = tmp14;
          let tmp12 = tmp14;
        } else {
          tmp12 = cResult[10];
        }
        if (cResult[11] === accessibilityRole) {
          if (cResult[12] === accessibilityState) {
            if (cResult[13] === rowStyle) {
              if (cResult[14] === tmp8) {
                if (cResult[15] === tmp11) {
                  if (cResult[16] === tmp12) {
                    let tmp15 = cResult[17];
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
        const tmp17 = timestampProducer(Form.FormRow, obj5);
        cResult[11] = accessibilityRole;
        cResult[12] = accessibilityState;
        cResult[13] = rowStyle;
        cResult[14] = tmp8;
        class R {
          constructor() {
            return onSelect(signal);
          }
        }
        cResult[16] = tmp12;
        cResult[17] = tmp17;
        tmp15 = tmp17;
      }
      class R {
        constructor() {
          return onSelect(signal);
        }
      }
      cResult[6] = onSelect;
      cResult[7] = signal;
      cResult[8] = R;
      tmp11 = R;
      const tmpResult = useA11yRolesNative;
    }
  : function AppealSignalRadioRow(signal) {
      signal = signal.signal;
      ({ selected, onSelect: importDefault } = signal);
      const radioA11yNative = useA11yRolesNative.useRadioA11yNative({ selected });
      ({ accessibilityRole, accessibilityState } = radioA11yNative);
      const obj2 = {
        style: signal.rowStyle,
        label: null,
        onPress: null,
        trailing: null,
        accessibilityRole: null,
        accessibilityState: null,
      };
      const obj3 = { text: null };
      obj3.text = SafetyHubUtils.getAppealSignalDisplayText(signal);
      obj2.label = timestampProducer(Form.FormRow.Label, obj3);
      obj2.onPress = function onPress() {
        return importDefault(signal);
      };
      obj2.trailing = timestampProducer(Form.FormRow.Radio, { selected });
      obj2.accessibilityRole = accessibilityRole;
      obj2.accessibilityState = accessibilityState;
      return timestampProducer(Form.FormRow, obj2);
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/AppealIngestionCollectSignal.tsx");

export default function AppealIngestionCollectSignal(isDsaEligible) {
  isDsaEligible = isDsaEligible.isDsaEligible;
  function handleAppealSignalSelect(signal) {
    DispatcherDefault.dispatch({ type: "SAFETY_HUB_APPEAL_SIGNAL_SELECT", signal });
    let tmp4 = isDsaEligible;
    if (isDsaEligible) {
      tmp4 = signal === constants.SOMETHING_ELSE;
    }
    if (tmp4) {
      const obj3 = {
        onSave(userInput) {
          formRow(584).dispatch({ type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE", userInput });
          const obj = formRow(584);
          const obj2 = { type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE", userInput };
          formRow(5054).hideActionSheet("AppealIngestionFreeTextAppealReasonActionSheet");
        },
        onClose() {
          return formRow(5054).hideActionSheet("AppealIngestionFreeTextAppealReasonActionSheet");
        },
      };
      ActionSheetActionCreatorsDefault.openLazy(
        asyncRequireImpl(11525, dependencyMap.paths),
        "AppealIngestionFreeTextAppealReasonActionSheet",
        obj3,
      );
      const tmpResult = ActionSheetActionCreatorsDefault;
    }
    let obj2 = { type: "SAFETY_HUB_APPEAL_SIGNAL_SELECT", signal };
  }
  const tmp = closure_8();
  const formRow = tmp;
  dependencyMap = isDsaEligible(11497).useSafetyHubAppealSignal();
  const intl = isDsaEligible(1126).intl;
  let obj = isDsaEligible(11497);
  const intl2 = isDsaEligible(1126).intl;
  const stringResult = intl.string(isDsaEligible(1126).t["C5q+pW"]);
  let obj2 = { children: null };
  const items = [
    closure_6(isDsaEligible(11503).AppealIngestionModalHeader, {
      headerText: stringResult,
      subHeaderText: intl2.string(isDsaEligible(1126).t.VEcRhw),
    }),
  ];
  let obj3 = { style: tmp.container, children: null };
  const obj4 = { style: tmp.form, children: null };
  const stringResult1 = intl2.string(isDsaEligible(1126).t.VEcRhw);
  const items1 = [
    closure_6(isDsaEligible(8555).FormSection, {
      sectionBodyStyle: tmp.formSection,
      accessibilityRole: "radiogroup",
      children: closure_5.map((signal, index) =>
        timestampProducer(
          closure_9,
          { signal, selected: signal === closure_2, rowStyle: formRow.formRow, onSelect: handleAppealSignalSelect },
          "formrow-" + index,
        ),
      ),
    }),
  ];
  const obj6 = { style: tmp.disclaimer, children: null };
  const obj7 = { variant: "text-sm/normal", children: null };
  const intl3 = isDsaEligible(1126).intl;
  obj7.children = intl3.format(isDsaEligible(1126).t["8k9GCW"], {});
  obj6.children = closure_6(isDsaEligible(5086).Text, obj7);
  items1[1] = closure_6(handleAppealSignalSelect, obj6);
  obj4.children = items1;
  obj3.children = closure_7(isDsaEligible(8555).Form, obj4);
  items[1] = closure_6(handleAppealSignalSelect, obj3);
  obj2.children = items;
  return closure_7(isDsaEligible(11503).AppealIngestionModalScreen, obj2);
}
