// discord_app/modules/safety_hub/native/AppealIngestionCollectSignal.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import SafetyHubView from "../SafetyHubConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
function AppealSignalRadioRow(signal) {
  signal = signal.signal;
  ({ selected, onSelect: importDefault } = signal);
  let obj = signal(4105);
  const radioA11yNative = obj.useRadioA11yNative({ selected });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  obj = { text: signal(5437).getAppealSignalDisplayText(signal) };
  obj[1] = callback(signal(8083).FormRow.Label, obj);
  obj[2] = function onPress() {
    return callback(signal);
  };
  obj[3] = callback(signal(8083).FormRow.Radio, { selected });
  obj[4] = accessibilityRole;
  obj[5] = accessibilityState;
  return callback(signal(8083).FormRow, obj);
}
noopAll;
({ AppealIngestionSignal: c4, AppealIngestionSignalOrder: c5 } = SafetyHubView);
({ jsx: closure_6, jsxs: error } = jsxProd);
const createCacheKey = { marginBottom: 16, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { paddingVertical: 16, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST };
createCacheKey[3] = { gap: 8 };
createCacheKey[4] = { marginTop: 24 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/safety_hub/native/AppealIngestionCollectSignal.tsx");

export default function AppealIngestionCollectSignal(isDsaEligible) {
  isDsaEligible = isDsaEligible.isDsaEligible;
  function handleAppealSignalSelect(signal) {
    lib(table[10]);
    let obj = { type: "SAFETY_HUB_APPEAL_SIGNAL_SELECT", signal };
    obj.dispatch(obj);
    let tmp4 = isDsaEligible;
    if (isDsaEligible) {
      tmp4 = signal === closure_1_4.SOMETHING_ELSE;
    }
    if (tmp4) {
      obj = { onSave: null, onClose: null };
      obj[0] = function onSave(userInput) {
        callback(709);
        const obj = { type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE", userInput };
        obj.dispatch(obj);
        callback(4342).hideActionSheet("AppealIngestionFreeTextAppealReasonActionSheet");
      };
      obj[1] = function onClose() {
        return callback(4342).hideActionSheet("AppealIngestionFreeTextAppealReasonActionSheet");
      };
      lib(table[11]).openLazy(isDsaEligible(table[13])(table[12], table.paths), "AppealIngestionFreeTextAppealReasonActionSheet", obj);
      const tmpResult = lib(table[11]);
    }
  }
  const tmp = callback3();
  closure_1 = tmp;
  let obj = isDsaEligible(11066);
  dependencyMap = obj.useSafetyHubAppealSignal();
  const intl = isDsaEligible(1236).intl;
  const intl2 = isDsaEligible(1236).intl;
  const stringResult = intl.string(isDsaEligible(1236).t["C5q+pW"]);
  const items = [callback(isDsaEligible(11081).AppealIngestionModalHeader, { headerText: stringResult, subHeaderText: intl2.string(isDsaEligible(1236).t.VEcRhw) }), ];
  obj = { style: tmp.container, children: null };
  obj1 = { style: tmp.form, children: null };
  const stringResult1 = intl2.string(isDsaEligible(1236).t.VEcRhw);
  const items1 = [callback(isDsaEligible(8083).FormSection, { sectionBodyStyle: tmp.formSection, accessibilityRole: "radiogroup", children: closure_5.map((item, index) => closure_1_6(AppealSignalRadioRow, { signal: item, selected: item === closure_2, rowStyle: lib.formRow, onSelect: handleAppealSignalSelect }, "formrow-" + index)) }), ];
  const obj3 = { style: tmp.disclaimer, children: null };
  const obj4 = { variant: "text-sm/normal", children: null };
  const intl3 = isDsaEligible(1236).intl;
  obj4[1] = intl3.format(isDsaEligible(1236).t["8k9GCW"], {});
  obj3[1] = callback(isDsaEligible(4734).Text, obj4);
  items1[1] = callback(handleAppealSignalSelect, obj3);
  obj1[1] = items1;
  obj[1] = callback2(isDsaEligible(8083).Form, obj1);
  items[1] = callback(handleAppealSignalSelect, obj);
  obj[0] = items;
  return callback2(isDsaEligible(11081).AppealIngestionModalScreen, obj);
};