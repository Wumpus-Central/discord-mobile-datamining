// discord_app/modules/user_settings/privacy_and_safety/useUserSafetySettingsSelectedGuildId.tsx
import createGuildRecordFromRust from "../../../stores/GuildStore.tsx";
import GUILD_SELECT_ALL_SERVERS_OPTION_ID from "UserSettingsSafetySelectedGuildStore.tsx";
import { GuildFeatures } from "../../../Constants.tsx";

const require = fn;
({ GUILD_SELECT_ALL_SERVERS_OPTION_ID: c3, useUserSafetySettingsSelectedGuildStore: c4 } = GUILD_SELECT_ALL_SERVERS_OPTION_ID);
const result = require("obj132").fileFinishedImporting("modules/user_settings/privacy_and_safety/useUserSafetySettingsSelectedGuildId.tsx");

export const useUserSafetySettingsSelectedGuildId = function useUserSafetySettingsSelectedGuildId() {
  return callback().selectedGuildId;
};
export const useAllServersOptionSelected = function useAllServersOptionSelected() {
  return callback().selectedGuildId === closure_3;
};
export const useIsSelectedGuildAHub = function useIsSelectedGuildAHub() {
  const selectedGuildId = callback().selectedGuildId;
  const items = [closure_2];
  const stateFromStores = selectedGuildId(589).useStateFromStores(items, () => closure_1_2.getGuild(selectedGuildId));
  let flag;
  if (stateFromStores != null) {
    const features = stateFromStores.features;
    flag = features.has(GuildFeatures.HUB);
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};