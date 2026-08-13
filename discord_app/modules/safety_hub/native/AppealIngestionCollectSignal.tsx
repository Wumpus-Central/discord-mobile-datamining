// discord_app/modules/safety_hub/native/AppealIngestionCollectSignal.tsx
import "noop";
import { View } from "set";
import SafetyHubView from "SafetyHubView";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
let closure_6;
let error;
const require = arg1;
function AppealSignalRadioRow(signal) {
  let accessibilityRole;
  let accessibilityState;
  let importDefault;
  let selected;
  signal = signal.signal;
  ({ selected, onSelect: importDefault } = signal);
  let obj = signal(4073);
  const radioA11yNative = obj.useRadioA11yNative({ selected });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  obj = { style: signal.rowStyle, label: null, onPress: null, trailing: null, accessibilityRole: null, accessibilityState: null };
  obj = { text: null };
  obj[0] = signal(7849).getAppealSignalDisplayText(signal);
  obj[1] = callback(signal(8012).FormRow.Label, obj);
  obj[2] = function onPress() {
    return callback(signal);
  };
  obj[3] = callback(signal(8012).FormRow.Radio, { selected });
  obj[4] = accessibilityRole;
  obj[5] = accessibilityState;
  return callback(signal(8012).FormRow, obj);
}
({ AppealIngestionSignal: c4, AppealIngestionSignalOrder: c5 } = SafetyHubView);
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { container: { flex: 1, paddingHorizontal: 16 }, form: null, formRow: null, formSection: null, disclaimer: null };
createCacheKey = { marginBottom: 16, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { paddingVertical: 16, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST };
createCacheKey[3] = { gap: 8 };
createCacheKey[4] = { marginTop: 24 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { paddingVertical: 16, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST };
const result = require("SafetyHubView").fileFinishedImporting("modules/safety_hub/native/AppealIngestionCollectSignal.tsx");

export default function AppealIngestionCollectSignal(isDsaEligible) {
  isDsaEligible = isDsaEligible.isDsaEligible;
  let c1;
  let dependencyMap;
  function handleAppealSignalSelect(signal) {
    let obj = _undefined(table[10]);
    obj = { type: "SAFETY_HUB_APPEAL_SIGNAL_SELECT", signal };
    obj.dispatch(obj);
    let tmp4 = isDsaEligible;
    if (isDsaEligible) {
      tmp4 = signal === outer1_4.SOMETHING_ELSE;
    }
    if (tmp4) {
      obj = { onSave: null, onClose: null };
      obj[0] = function onSave(userInput) {
        let obj = callback(709);
        obj = { type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE", userInput };
        obj.dispatch(obj);
        callback(4310).hideActionSheet("AppealIngestionFreeTextAppealReasonActionSheet");
      };
      obj[1] = function onClose() {
        return callback(4310).hideActionSheet("AppealIngestionFreeTextAppealReasonActionSheet");
      };
      _undefined(tmp2[11]).openLazy(isDsaEligible(tmp2[13])(tmp2[12], tmp2.paths), "AppealIngestionFreeTextAppealReasonActionSheet", obj);
      const tmpResult = _undefined(tmp2[11]);
    }
  }
  const tmp = createCacheKey();
  c1 = tmp;
  let obj = isDsaEligible(11336);
  dependencyMap = obj.useSafetyHubAppealSignal();
  const intl = isDsaEligible(1236).intl;
  const intl2 = isDsaEligible(1236).intl;
  const stringResult = intl.string(isDsaEligible(1236).t["C5q+pW"]);
  obj = { children: null };
  const items = [callback(isDsaEligible(11351).AppealIngestionModalHeader, { headerText: stringResult, subHeaderText: intl2.string(isDsaEligible(1236).t.VEcRhw) }), ];
  obj = { style: tmp.container, children: null };
  const obj1 = { style: tmp.form, children: null };
  const obj2 = { sectionBodyStyle: tmp.formSection, accessibilityRole: "radiogroup", children: null };
  obj2[2] = closure_5.map((signal) => outer1_6(outer1_9, { signal, selected: signal === closure_2, rowStyle: _undefined.formRow, onSelect: handleAppealSignalSelect }, "formrow-" + arg1));
  const items1 = [callback(isDsaEligible(8012).FormSection, obj2), ];
  const obj3 = { style: tmp.disclaimer, children: null };
  const obj4 = { variant: "text-sm/normal", children: null };
  const intl3 = isDsaEligible(1236).intl;
  obj4[1] = intl3.format(isDsaEligible(1236).t["8k9GCW"], {});
  obj3[1] = callback(isDsaEligible(4338).Text, obj4);
  items1[1] = callback(handleAppealSignalSelect, obj3);
  obj1[1] = items1;
  obj[1] = callback2(isDsaEligible(8012).Form, obj1);
  items[1] = callback(handleAppealSignalSelect, obj);
  obj[0] = items;
  return callback2(isDsaEligible(11351).AppealIngestionModalScreen, obj);
};