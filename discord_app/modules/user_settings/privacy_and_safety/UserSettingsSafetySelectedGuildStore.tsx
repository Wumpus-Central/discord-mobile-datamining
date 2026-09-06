// discord_app/modules/user_settings/privacy_and_safety/UserSettingsSafetySelectedGuildStore.tsx
import 00560__ from "../../../../_runtime/metro/00560__.js";
import size from "../../../../_runtime/metro/00002__.js";

let closure_0 = { selectedGuildId: "0" };
const useUserSafetySettingsSelectedGuildStore = module_560.create((arg0) => {
  closure_0 = arg0;
  const obj = {};
  const merged = Object.assign(closure_0);
  obj.setSelectedGuildId = function setSelectedGuildId(selectedGuildId) {
    closure_0({ selectedGuildId });
  };
  obj.reset = function reset() {
    closure_0(closure_0);
  };
  return obj;
});
const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/UserSettingsSafetySelectedGuildStore.tsx");

export const GUILD_SELECT_ALL_SERVERS_OPTION_ID = "0";
export { useUserSafetySettingsSelectedGuildStore };
export const setSelectedGuildId = function setSelectedGuildId(selectedGuildId) {
  const obj = { selectedGuildId };
  return obj.setState(obj);
};
export const getSelectedGuildId = function getSelectedGuildId() {
  return obj.getState().selectedGuildId;
};