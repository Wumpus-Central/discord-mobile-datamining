// === Module 17302: PinotSettingsLazy ===

// Module 17302 (PinotSettingsLazy)
import SettingsConstants from "SettingsConstants" /* 8331 */;
import SettingBuilders from "SettingBuilders" /* 11212 */;
import size from "module_2" /* 2 */;

const obj2 = {};
const merged = Object.assign({
  useTitle() {
    return "";
  },
  parent: SettingsConstants.MobileUserSettings.DATA_AND_PRIVACY,
  usePredicate() {
    return false;
  },
  unsearchable: true
});
obj2.useValue = function useValue() {
  return false;
};
obj2.onValueChange = function onValueChange() {

};
const toggle = SettingBuilders.createToggle(obj2);
const result = size.fileFinishedImporting("modules/pinot/native/PinotSettingsLazy.tsx");

export const PinotMemberSetting = toggle;
export function usePinotDataPrivacySections() {
  return [];
}