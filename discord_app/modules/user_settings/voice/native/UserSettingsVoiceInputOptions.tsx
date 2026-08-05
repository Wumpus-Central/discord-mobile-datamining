// discord_app/modules/user_settings/voice/native/UserSettingsVoiceInputOptions.tsx
import "noop";
import { View } from "get ActivityIndicator";
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import { InputModes } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_6;
let error;
let metroImportAll;
const require = arg1;
function handleInputModePress() {
  let obj = require(5643) /* showSimpleActionSheet */;
  obj = { key: "InputMode", header: null, options: null, hasIcons: false };
  obj = { title: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t["pS+K2L"]);
  obj[1] = obj;
  const obj1 = { label: null, onPress: null };
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj1[0] = intl2.string(require(1236) /* getSystemLocale */.t.Q8gkVL);
  obj1[1] = function onPress() {
    callback(9077).setMode(constants.PUSH_TO_TALK);
  };
  const items = [obj1, ];
  const obj2 = { label: null, onPress: null };
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj2[0] = intl3.string(require(1236) /* getSystemLocale */.t.cHCEOJ);
  obj2[1] = function onPress() {
    callback(9077).setMode(constants.VOICE_ACTIVITY);
  };
  items[1] = obj2;
  obj[2] = items;
  const result = obj.showSimpleActionSheet(obj);
}
({ jsx: closure_6, Fragment: error, jsxs: metroImportAll } = jsxProd);
let closure_9 = createCacheKey.createStyles({ value: { textAlign: "right" }, slider: { marginTop: 4 } });
let result = require("_detectH265HardwareDecode").fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoiceInputOptions.tsx");

export default function UserSettingsVoiceInputOptions() {
  const iter = callback();
  let obj = inputMode(589);
  const items = [_detectH265HardwareDecode];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ inputMode: store.getMode(), vadThreshold: store.getModeOptions().threshold, vadAutoThreshold: store.getModeOptions().autoThreshold }));
  inputMode = stateFromStoresObject.inputMode;
  const vadAutoThreshold = stateFromStoresObject.vadAutoThreshold;
  obj = { title: null, hasIcons: false, children: null };
  const intl = inputMode(1236).intl;
  obj[0] = intl.string(inputMode(1236).t.LKCupB);
  obj = { label: null, trailing: null, onPress: null };
  const intl2 = inputMode(1236).intl;
  obj[0] = intl2.string(inputMode(1236).t["pS+K2L"]);
  const obj1 = { style: iter.value, variant: "text-md/medium", color: "text-muted", children: null };
  if (inputMode === InputModes.PUSH_TO_TALK) {
    const intl4 = tmp(1236).intl;
    let stringResult = intl4.string(tmp(1236).t.Q8gkVL);
  } else {
    const intl3 = tmp(1236).intl;
    stringResult = intl3.string(tmp(1236).t.cHCEOJ);
  }
  obj1[3] = stringResult;
  obj[1] = closure_6(inputMode(4281).Text, obj1);
  obj[2] = handleInputModePress;
  const items1 = [closure_6(inputMode(5315).TableRow, obj), ];
  let tmp4Result = null;
  if (inputMode !== InputModes.PUSH_TO_TALK) {
    const obj2 = { children: null };
    const obj3 = { label: null, value: null, onValueChange: null };
    const intl5 = tmp(1236).intl;
    obj3[0] = intl5.string(tmp(1236).t.Z4oaN0);
    obj3[1] = vadAutoThreshold;
    obj3[2] = function onValueChange(autoThreshold) {
      let obj = outer1_1(outer1_2[8]);
      obj = { autoThreshold };
      return obj.setMode(inputMode, obj);
    };
    const items2 = [tmp5(tmp(5650).TableSwitchRow, obj3), ];
    const obj4 = { label: null, subLabel: null };
    const intl6 = tmp(1236).intl;
    obj4[0] = intl6.string(tmp(1236).t["o+2oMK"]);
    const obj5 = { style: null, children: null };
    obj5[0] = iter.slider;
    const obj6 = { auto: null, threshold: null, onThresholdChange: null };
    obj6[0] = vadAutoThreshold;
    obj6[1] = stateFromStoresObject.vadThreshold;
    obj6[2] = function onThresholdChange(threshold) {
      let obj = outer1_1(outer1_2[8]);
      obj = { threshold };
      return obj.setMode(inputMode, obj);
    };
    obj5[1] = tmp5(importDefault(10745), obj6);
    obj4[1] = tmp5(View, obj5);
    items2[1] = tmp5(tmp(5315).TableRow, obj4);
    obj2[0] = items2;
    tmp4Result = tmp4(closure_7, obj2);
  }
  items1[1] = tmp4Result;
  obj[2] = items1;
  return closure_8(inputMode(10740).UserSettingsTableRowGroup, obj);
};
export { handleInputModePress };