// discord_app/modules/user_settings/voice/native/UserSettingsVoiceInputOptions.tsx
import util from "../../../../intl/index.native.tsx";
import showSimpleActionSheet from "../../../action_sheet/native/showSimpleActionSheet.tsx";
import AudioActionCreatorsDefault from "../../../../actions/AudioActionCreators.tsx";
import VoiceSensitivityDefault from "../../../../components_native/common/VoiceSensitivity.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import MediaEngineStore from "../../../../stores/MediaEngineStore.tsx";

require = fn;
function handleInputModePress() {
  let obj = { key: "InputMode", header: null, options: null, hasIcons: false };
  obj = { title: null };
  const intl = util.intl;
  obj.title = intl.string(util.t["pS+K2L"]);
  obj.header = obj;
  const obj1 = { label: null, onPress: null };
  const intl2 = util.intl;
  obj1.label = intl2.string(util.t.Q8gkVL);
  obj1.onPress = function onPress() {
    AudioActionCreatorsDefault.setMode(constants.PUSH_TO_TALK);
  };
  const items = [obj1];
  const obj2 = { label: null, onPress: null };
  const intl3 = util.intl;
  obj2.label = intl3.string(util.t.cHCEOJ);
  obj2.onPress = function onPress() {
    AudioActionCreatorsDefault.setMode(constants.VOICE_ACTIVITY);
  };
  items[1] = obj2;
  obj.options = items;
  const result = obj.showSimpleActionSheet(obj);
}
const View = fn(17).View;
const InputModes = fn(1074).InputModes;
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4560);
let closure_9 = createStyles.createStyles({ value: { textAlign: "right" }, slider: { marginTop: 4 } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoiceInputOptions.tsx");

export default function UserSettingsVoiceInputOptions() {
  const iter = closure_9();
  let obj = inputMode(504);
  const items = [MediaEngineStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({
    inputMode: MediaEngineStore.getMode(),
    vadThreshold: MediaEngineStore.getModeOptions().threshold,
    vadAutoThreshold: MediaEngineStore.getModeOptions().autoThreshold,
  }));
  inputMode = stateFromStoresObject.inputMode;
  const vadAutoThreshold = stateFromStoresObject.vadAutoThreshold;
  obj = { title: null, hasIcons: false, children: null };
  const intl = inputMode(1114).intl;
  obj.title = intl.string(inputMode(1114).t.LKCupB);
  obj = { label: null, trailing: null, onPress: null };
  const intl2 = inputMode(1114).intl;
  obj.label = intl2.string(inputMode(1114).t["pS+K2L"]);
  const obj1 = { style: iter.value, variant: "text-md/medium", color: "text-muted", children: null };
  if (inputMode === InputModes.PUSH_TO_TALK) {
    const intl4 = tmp(1114).intl;
    let stringResult = intl4.string(tmp(1114).t.Q8gkVL);
  } else {
    const intl3 = tmp(1114).intl;
    stringResult = intl3.string(tmp(1114).t.cHCEOJ);
  }
  obj1.children = stringResult;
  obj.trailing = closure_6(inputMode(4556).Text, obj1);
  obj.onPress = handleInputModePress;
  const items1 = [closure_6(inputMode(5605).TableRow, obj)];
  let tmp4Result = null;
  if (inputMode !== InputModes.PUSH_TO_TALK) {
    const obj2 = { children: null };
    const obj3 = { label: null, value: null, onValueChange: null };
    const intl5 = tmp(1114).intl;
    obj3.label = intl5.string(tmp(1114).t.Z4oaN0);
    obj3.value = vadAutoThreshold;
    obj3.onValueChange = function onValueChange(autoThreshold) {
      const obj = { autoThreshold };
      return obj.setMode(inputMode, obj);
    };
    const items2 = [tmp5(tmp(7201).TableSwitchRow, obj3)];
    const obj4 = { label: null, subLabel: null };
    const intl6 = tmp(1114).intl;
    obj4.label = intl6.string(tmp(1114).t["o+2oMK"]);
    const obj5 = { style: iter.slider, children: null };
    const obj6 = {
      auto: vadAutoThreshold,
      threshold: stateFromStoresObject.vadThreshold,
      onThresholdChange(threshold) {
        const obj = { threshold };
        return obj.setMode(inputMode, obj);
      },
    };
    obj5.children = tmp5(VoiceSensitivityDefault, obj6);
    obj4.subLabel = tmp5(View, obj5);
    items2[1] = tmp5(tmp(5605).TableRow, obj4);
    obj2.children = items2;
    tmp4Result = tmp4(closure_7, obj2);
  }
  items1[1] = tmp4Result;
  obj.children = items1;
  return closure_8(inputMode(9979).UserSettingsTableRowGroup, obj);
}
export { handleInputModePress };
