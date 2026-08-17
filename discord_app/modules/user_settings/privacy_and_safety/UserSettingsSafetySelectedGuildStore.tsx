// discord_app/modules/user_settings/privacy_and_safety/UserSettingsSafetySelectedGuildStore.tsx
import set from "../../../../_runtime/00002_set.js";
import keys from "../../../../_runtime/00644_keys.js";

let closure_0 = { selectedGuildId: "0" };
let obj = keys.create((arg0) => {
  closure_0 = arg0;
  obj = {};
  const merged = Object.assign(closure_0);
  obj.setSelectedGuildId = function setSelectedGuildId(selectedGuildId) {
    callback({ selectedGuildId });
  };
  obj.reset = function reset() {
    callback(callback);
  };
  return obj;
});
const result = set.fileFinishedImporting("modules/user_settings/privacy_and_safety/UserSettingsSafetySelectedGuildStore.tsx");

export const GUILD_SELECT_ALL_SERVERS_OPTION_ID = "0";
export const useUserSafetySettingsSelectedGuildStore = obj;
export const setSelectedGuildId = function setSelectedGuildId(selectedGuildId) {
  obj = { selectedGuildId };
  return obj.setState(obj);
};
export const getSelectedGuildId = function getSelectedGuildId() {
  return obj.getState().selectedGuildId;
};