// discord_app/modules/safety_hub/native/AppealIngestionCollectSignal.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import SafetyHubView from "../SafetyHubConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
function AppealSignalRadioRow(signal) {
  signal = signal.signal;
  ({ selected, onSelect: importDefault } = signal);
  let obj = signal(4205);
  const radioA11yNative = obj.useRadioA11yNative({ selected });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  obj = {
    style: signal.rowStyle,
    label: null,
    onPress: null,
    trailing: null,
    accessibilityRole: null,
    accessibilityState: null,
  };
  obj = { text: signal(8704).getAppealSignalDisplayText(signal) };
  obj[1] = callback(signal(8372).FormRow.Label, obj);
  obj[2] = function onPress() {
    return callback(signal);
  };
  obj[3] = callback(signal(8372).FormRow.Radio, { selected });
  obj[4] = accessibilityRole;
  obj[5] = accessibilityState;
  return callback(signal(8372).FormRow, obj);
}
noopAll;
({ AppealIngestionSignal: c4, AppealIngestionSignalOrder: c5 } = SafetyHubView);
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = {
  container: { flex: 1, paddingHorizontal: 16 },
  form: null,
  formRow: null,
  formSection: null,
  disclaimer: null,
};
createCacheKey = { marginBottom: 16, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { paddingVertical: 16, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST };
createCacheKey[3] = { gap: 8 };
createCacheKey[4] = { marginTop: 24 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
let obj1 = { paddingVertical: 16, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST };
const result = require("set").fileFinishedImporting("modules/safety_hub/native/AppealIngestionCollectSignal.tsx");

export default function AppealIngestionCollectSignal(isDsaEligible) {
  isDsaEligible = isDsaEligible.isDsaEligible;
  closure_1 = undefined;
  dependencyMap = undefined;
  function handleAppealSignalSelect(signal) {
    let obj = lib(table[10]);
    obj = { type: "SAFETY_HUB_APPEAL_SIGNAL_SELECT", signal };
    obj.dispatch(obj);
    let tmp4 = isDsaEligible;
    if (isDsaEligible) {
      tmp4 = signal === closure_1_4.SOMETHING_ELSE;
    }
    if (tmp4) {
      obj = { onSave: null, onClose: null };
      obj[0] = function onSave(userInput) {
        let obj = callback(706);
        obj = { type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE", userInput };
        obj.dispatch(obj);
        callback(4445).hideActionSheet("AppealIngestionFreeTextAppealReasonActionSheet");
      };
      obj[1] = function onClose() {
        return callback(4445).hideActionSheet("AppealIngestionFreeTextAppealReasonActionSheet");
      };
      lib(tmp2[11]).openLazy(
        isDsaEligible(tmp2[13])(tmp2[12], tmp2.paths),
        "AppealIngestionFreeTextAppealReasonActionSheet",
        obj,
      );
      const tmpResult = lib(tmp2[11]);
    }
  }
  const tmp = callback3();
  closure_1 = tmp;
  let obj = isDsaEligible(11677);
  dependencyMap = obj.useSafetyHubAppealSignal();
  const intl = isDsaEligible(1233).intl;
  const intl2 = isDsaEligible(1233).intl;
  const stringResult = intl.string(isDsaEligible(1233).t["C5q+pW"]);
  obj = { children: null };
  const items = [
    callback(isDsaEligible(11692).AppealIngestionModalHeader, {
      headerText: stringResult,
      subHeaderText: intl2.string(isDsaEligible(1233).t.VEcRhw),
    }),
  ];
  obj = { style: tmp.container, children: null };
  obj1 = { style: tmp.form, children: null };
  const stringResult1 = intl2.string(isDsaEligible(1233).t.VEcRhw);
  const items1 = [
    callback(isDsaEligible(8372).FormSection, {
      sectionBodyStyle: tmp.formSection,
      accessibilityRole: "radiogroup",
      children: closure_5.map((signal) =>
        closure_1_6(
          closure_1_9,
          { signal, selected: signal === closure_2, rowStyle: lib.formRow, onSelect: handleAppealSignalSelect },
          "formrow-" + arg1,
        ),
      ),
    }),
  ];
  const obj3 = { style: tmp.disclaimer, children: null };
  const obj4 = { variant: "text-sm/normal", children: null };
  const intl3 = isDsaEligible(1233).intl;
  obj4[1] = intl3.format(isDsaEligible(1233).t["8k9GCW"], {});
  obj3[1] = callback(isDsaEligible(4474).Text, obj4);
  items1[1] = callback(handleAppealSignalSelect, obj3);
  obj1[1] = items1;
  obj[1] = callback2(isDsaEligible(8372).Form, obj1);
  items[1] = callback(handleAppealSignalSelect, obj);
  obj[0] = items;
  return callback2(isDsaEligible(11692).AppealIngestionModalScreen, obj);
}
