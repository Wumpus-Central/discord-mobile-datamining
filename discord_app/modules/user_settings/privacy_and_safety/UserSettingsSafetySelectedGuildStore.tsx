// discord_app/modules/user_settings/privacy_and_safety/UserSettingsSafetySelectedGuildStore.tsx
import 00570__ from "../../../../_runtime/metro/00570__.js";
import size from "../../../../_runtime/metro/00002__.js";

let closure_0 = { selectedGuildId: "0" };
const useUserSafetySettingsSelectedGuildStore = module_570.create((arg0) => {
  closure_0 = arg0;
  let obj = {
    setSelectedGuildId(selectedGuildId) {
      const obj = { selectedGuildId };
      closure_0(obj);
    },
    reset() {
      closure_0(closure_0);
    }
  };
  const merged = Object.assign(closure_0);
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