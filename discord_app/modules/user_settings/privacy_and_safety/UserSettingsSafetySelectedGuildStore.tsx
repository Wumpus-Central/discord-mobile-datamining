// === Module 15869: UserSettingsSafetySelectedGuildStore ===

// Module 15869 (UserSettingsSafetySelectedGuildStore)
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

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