// === Module 11901: AppealIngestionCollectSignal ===

// Module 11901 (AppealIngestionCollectSignal)
import DispatcherDefault from "Dispatcher" /* 573 */;
import nativeDefault from "native" /* 576 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import useA11yRolesNative from "useA11yRolesNative" /* 4277 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import SafetyHubUtils from "SafetyHubUtils" /* 8418 */;
import Form from "Form" /* 8593 */;
import noop from "module_19" /* 19 */;

require = fn;
function AppealSignalRadioRow(signal) {
  signal = signal.signal;
  ({ selected, onSelect: importDefault } = signal);
  let obj = useA11yRolesNative;
  const radioA11yNative = obj.useRadioA11yNative({ selected });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  obj = { style: signal.rowStyle, label: null, onPress: null, trailing: null, accessibilityRole: null, accessibilityState: null };
  obj = { text: SafetyHubUtils.getAppealSignalDisplayText(signal) };
  obj.label = timestampProducer(Form.FormRow.Label, obj);
  obj.onPress = function onPress() {
    return importDefault(signal);
  };
  obj.trailing = timestampProducer(Form.FormRow.Radio, { selected });
  obj.accessibilityRole = accessibilityRole;
  obj.accessibilityState = accessibilityState;
  return timestampProducer(Form.FormRow, obj);
}
const View = fn(17).View;
const SafetyHubConstants = fn(8419);
({ AppealIngestionSignal: closure_4, AppealIngestionSignalOrder: hasOwnProperty } = SafetyHubConstants);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { container: { flex: 1, paddingHorizontal: 16 }, form: null, formRow: null, formSection: null, disclaimer: null };
createStyles = { marginBottom: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles.form = createStyles;
createStyles.formRow = { paddingVertical: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles.formSection = { gap: 8 };
createStyles.disclaimer = { marginTop: 24 };
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/AppealIngestionCollectSignal.tsx");

export default function AppealIngestionCollectSignal(isDsaEligible) {
  isDsaEligible = isDsaEligible.isDsaEligible;
  function handleAppealSignalSelect(signal) {
    let obj = { type: "SAFETY_HUB_APPEAL_SIGNAL_SELECT", signal };
    obj.dispatch(obj);
    let tmp4 = isDsaEligible;
    if (isDsaEligible) {
      tmp4 = signal === constants.SOMETHING_ELSE;
    }
    if (tmp4) {
      obj = {
        onSave(userInput) {
            formRow(573);
            const obj = { type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE", userInput };
            obj.dispatch(obj);
            formRow(4527).hideActionSheet("AppealIngestionFreeTextAppealReasonActionSheet");
          },
        onClose() {
            return formRow(4527).hideActionSheet("AppealIngestionFreeTextAppealReasonActionSheet");
          }
      };
      ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11902, dependencyMap.paths), "AppealIngestionFreeTextAppealReasonActionSheet", obj);
      const tmpResult = ActionSheetActionCreatorsDefault;
    }
  }
  const tmp = closure_8();
  const formRow = tmp;
  let obj = isDsaEligible(11880);
  dependencyMap = obj.useSafetyHubAppealSignal();
  const intl = isDsaEligible(1114).intl;
  const intl2 = isDsaEligible(1114).intl;
  const stringResult = intl.string(isDsaEligible(1114).t["C5q+pW"]);
  obj = { children: null };
  const items = [closure_6(isDsaEligible(11886).AppealIngestionModalHeader, { headerText: stringResult, subHeaderText: intl2.string(isDsaEligible(1114).t.VEcRhw) }), ];
  obj = { style: tmp.container, children: null };
  const obj1 = { style: tmp.form, children: null };
  const stringResult1 = intl2.string(isDsaEligible(1114).t.VEcRhw);
  const items1 = [closure_6(isDsaEligible(8593).FormSection, { sectionBodyStyle: tmp.formSection, accessibilityRole: "radiogroup", children: closure_5.map((signal, index) => timestampProducer(AppealSignalRadioRow, { signal, selected: signal === closure_2, rowStyle: formRow.formRow, onSelect: handleAppealSignalSelect }, "formrow-" + index)) }), ];
  const obj3 = { style: tmp.disclaimer, children: null };
  const obj4 = { variant: "text-sm/normal", children: null };
  const intl3 = isDsaEligible(1114).intl;
  obj4.children = intl3.format(isDsaEligible(1114).t["8k9GCW"], {});
  obj3.children = closure_6(isDsaEligible(4556).Text, obj4);
  items1[1] = closure_6(handleAppealSignalSelect, obj3);
  obj1.children = items1;
  obj.children = closure_7(isDsaEligible(8593).Form, obj1);
  items[1] = closure_6(handleAppealSignalSelect, obj);
  obj.children = items;
  return closure_7(isDsaEligible(11886).AppealIngestionModalScreen, obj);
};