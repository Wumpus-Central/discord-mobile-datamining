// discord_app/modules/pinot/native/PinotSettingsLazy.tsx
import SettingsConstants from "../../user_settings/core/native/SettingsConstants.tsx";
import SettingBuilders from "../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const obj2 = {};
const merged = Object.assign({
  useTitle() {
    return "";
  },
  parent: SettingsConstants.MobileUserSettings.DATA_AND_PRIVACY,
  usePredicate() {
    return false;
  },
  unsearchable: true,
});
obj2.useValue = function useValue() {
  return false;
};
obj2.onValueChange = function onValueChange() {};
const toggle = SettingBuilders.createToggle(obj2);
const result = size.fileFinishedImporting("modules/pinot/native/PinotSettingsLazy.tsx");

export const PinotMemberSetting = toggle;
export function usePinotDataPrivacySections() {
  return [];
}
