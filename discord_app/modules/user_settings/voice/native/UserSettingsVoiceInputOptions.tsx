// === Module 10330: UserSettingsVoiceInputOptions ===

// Module 10330 (UserSettingsVoiceInputOptions)
import util from "util" /* 1115 */;
import showSimpleActionSheet from "showSimpleActionSheet" /* 7527 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9995 */;
import VoiceSensitivityDefault from "VoiceSensitivity" /* 10331 */;
import noop from "module_19" /* 19 */;
import MediaEngineStore from "MediaEngineStore" /* 1992 */;

require = fn;
function handleInputModePress() {
  const obj2 = { key: "InputMode", header: null, options: null, hasIcons: false };
  const obj3 = { title: null };
  const intl = util.intl;
  obj3.title = intl.string(util.t["pS+K2L"]);
  obj2.header = obj3;
  const obj4 = { label: null, onPress: null };
  const intl2 = util.intl;
  obj4.label = intl2.string(util.t.Q8gkVL);
  obj4.onPress = function onPress() {
    AudioActionCreatorsDefault.setMode(constants.PUSH_TO_TALK);
  };
  const items = [obj4, ];
  const obj5 = { label: null, onPress: null };
  const intl3 = util.intl;
  obj5.label = intl3.string(util.t.cHCEOJ);
  obj5.onPress = function onPress() {
    AudioActionCreatorsDefault.setMode(constants.VOICE_ACTIVITY);
  };
  items[1] = obj5;
  obj2.options = items;
  const result = showSimpleActionSheet.showSimpleActionSheet(obj2);
}
const View = fn(17).View;
const InputModes = fn(1074).InputModes;
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4829);
let closure_9 = createStyles.createStyles({ value: { textAlign: "right" }, slider: { marginTop: 4 } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoiceInputOptions.tsx");

export default function UserSettingsVoiceInputOptions() {
  const iter = closure_9();
  const items = [MediaEngineStore];
  const stateFromStoresObject = inputMode(504).useStateFromStoresObject(items, () => ({ inputMode: MediaEngineStore.getMode(), vadThreshold: MediaEngineStore.getModeOptions().threshold, vadAutoThreshold: MediaEngineStore.getModeOptions().autoThreshold }));
  inputMode = stateFromStoresObject.inputMode;
  const vadAutoThreshold = stateFromStoresObject.vadAutoThreshold;
  const obj2 = { title: null, hasIcons: false, children: null };
  const intl = inputMode(1115).intl;
  obj2.title = intl.string(inputMode(1115).t.LKCupB);
  const obj3 = { label: null, trailing: null, onPress: null };
  const intl2 = inputMode(1115).intl;
  obj3.label = intl2.string(inputMode(1115).t["pS+K2L"]);
  const obj4 = { style: iter.value, variant: "text-md/medium", color: "text-muted", children: null };
  if (inputMode === InputModes.PUSH_TO_TALK) {
    const intl4 = tmp(1115).intl;
    let stringResult = intl4.string(tmp(1115).t.Q8gkVL);
  } else {
    const intl3 = tmp(1115).intl;
    stringResult = intl3.string(tmp(1115).t.cHCEOJ);
  }
  obj4.children = stringResult;
  obj3.trailing = closure_6(inputMode(4825).Text, obj4);
  obj3.onPress = handleInputModePress;
  const items1 = [closure_6(inputMode(5910).TableRow, obj3), ];
  let tmp4Result = null;
  if (inputMode !== InputModes.PUSH_TO_TALK) {
    const obj5 = { children: null };
    const obj6 = { label: null, value: null, onValueChange: null };
    const intl5 = tmp(1115).intl;
    obj6.label = intl5.string(tmp(1115).t.Z4oaN0);
    obj6.value = vadAutoThreshold;
    obj6.onValueChange = function onValueChange(autoThreshold) {
      return AudioActionCreatorsDefault.setMode(inputMode, { autoThreshold });
    };
    const items2 = [closure_6(tmp(7533).TableSwitchRow, obj6), ];
    const obj7 = { label: null, subLabel: null };
    const intl6 = tmp(1115).intl;
    obj7.label = intl6.string(tmp(1115).t["o+2oMK"]);
    const obj8 = { style: iter.slider, children: null };
    const obj9 = {
      auto: vadAutoThreshold,
      threshold: stateFromStoresObject.vadThreshold,
      onThresholdChange(threshold) {
          return AudioActionCreatorsDefault.setMode(inputMode, { threshold });
        }
    };
    obj8.children = closure_6(VoiceSensitivityDefault, obj9);
    obj7.subLabel = closure_6(View, obj8);
    items2[1] = closure_6(tmp(5910).TableRow, obj7);
    obj5.children = items2;
    tmp4Result = closure_8(closure_7, obj5);
  }
  items1[1] = tmp4Result;
  obj2.children = items1;
  return closure_8(inputMode(10326).UserSettingsTableRowGroup, obj2);
};
export { handleInputModePress };