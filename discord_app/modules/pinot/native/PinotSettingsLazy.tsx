// === Module 16179: PinotSettingsLazy ===

// Module 16179 (PinotSettingsLazy)
import SettingsConstants from "SettingsConstants" /* 7974 */;
import SettingBuilders_mod from "SettingBuilders" /* 10629 */;
import size from "module_2" /* 2 */;

const obj = {
  useTitle() {
    return "";
  },
  parent: SettingsConstants.MobileUserSettings.DATA_AND_PRIVACY,
  usePredicate() {
    return false;
  },
  unsearchable: true
};
let SettingBuilders = SettingBuilders_mod;
const obj2 = {};
const merged = Object.assign(obj);
obj2.useValue = function useValue() {
  return false;
};
obj2.onValueChange = function onValueChange() {

};
const toggle = SettingBuilders.createToggle(obj2);
let SettingBuilders = SettingBuilders_mod;
const obj3 = {};
const merged1 = Object.assign(obj);
obj3.onPress = function onPress() {

};
const pressable = SettingBuilders.createPressable(obj3);
const result = size.fileFinishedImporting("modules/pinot/native/PinotSettingsLazy.tsx");

export const PinotMemberSetting = toggle;
export const PinotMemberSettingSave = pressable;
export function usePinotDataPrivacySections() {
  return [];
}