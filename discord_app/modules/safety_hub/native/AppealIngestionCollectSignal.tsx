// discord_app/modules/safety_hub/native/AppealIngestionCollectSignal.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import useA11yRolesNative from "../../../../discord_common/js/packages/design/hooks/useA11yRolesNative.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import SafetyHubUtils from "../SafetyHubUtils.tsx";
import Form from "../../../design/void/Form/native/index.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function AppealSignalRadioRow(signal) {
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
}
const View = fn(17).View;
const SafetyHubConstants = fn(8537);
({ AppealIngestionSignal: closure_4, AppealIngestionSignalOrder: hasOwnProperty } = SafetyHubConstants);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4636);
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
          formRow(573).dispatch({ type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE", userInput });
          const obj = formRow(573);
          const obj2 = { type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE", userInput };
          formRow(4603).hideActionSheet("AppealIngestionFreeTextAppealReasonActionSheet");
        },
        onClose() {
          return formRow(4603).hideActionSheet("AppealIngestionFreeTextAppealReasonActionSheet");
        },
      };
      ActionSheetActionCreatorsDefault.openLazy(
        asyncRequireImpl(12033, dependencyMap.paths),
        "AppealIngestionFreeTextAppealReasonActionSheet",
        obj3,
      );
      const tmpResult = ActionSheetActionCreatorsDefault;
    }
    let obj2 = { type: "SAFETY_HUB_APPEAL_SIGNAL_SELECT", signal };
  }
  const tmp = closure_8();
  const formRow = tmp;
  dependencyMap = isDsaEligible(12011).useSafetyHubAppealSignal();
  const intl = isDsaEligible(1114).intl;
  let obj = isDsaEligible(12011);
  const intl2 = isDsaEligible(1114).intl;
  const stringResult = intl.string(isDsaEligible(1114).t["C5q+pW"]);
  let obj2 = { children: null };
  const items = [
    closure_6(isDsaEligible(12017).AppealIngestionModalHeader, {
      headerText: stringResult,
      subHeaderText: intl2.string(isDsaEligible(1114).t.VEcRhw),
    }),
  ];
  let obj3 = { style: tmp.container, children: null };
  const obj4 = { style: tmp.form, children: null };
  const stringResult1 = intl2.string(isDsaEligible(1114).t.VEcRhw);
  const items1 = [
    closure_6(isDsaEligible(8716).FormSection, {
      sectionBodyStyle: tmp.formSection,
      accessibilityRole: "radiogroup",
      children: closure_5.map((signal, index) =>
        timestampProducer(
          AppealSignalRadioRow,
          { signal, selected: signal === closure_2, rowStyle: formRow.formRow, onSelect: handleAppealSignalSelect },
          "formrow-" + index,
        ),
      ),
    }),
  ];
  const obj6 = { style: tmp.disclaimer, children: null };
  const obj7 = { variant: "text-sm/normal", children: null };
  const intl3 = isDsaEligible(1114).intl;
  obj7.children = intl3.format(isDsaEligible(1114).t["8k9GCW"], {});
  obj6.children = closure_6(isDsaEligible(4632).Text, obj7);
  items1[1] = closure_6(handleAppealSignalSelect, obj6);
  obj4.children = items1;
  obj3.children = closure_7(isDsaEligible(8716).Form, obj4);
  items[1] = closure_6(handleAppealSignalSelect, obj3);
  obj2.children = items;
  return closure_7(isDsaEligible(12017).AppealIngestionModalScreen, obj2);
}
