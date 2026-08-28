// === Module 15402: useUserSafetySettingsSelectedGuildId ===

// Module 15402 (useUserSafetySettingsSelectedGuildId)
import closure_2 from "createGuildRecordFromRust" /* 1910 */;
import GUILD_SELECT_ALL_SERVERS_OPTION_ID from "GUILD_SELECT_ALL_SERVERS_OPTION_ID" /* 15400 */;
import { GuildFeatures } from "ME" /* 676 */;

const require = arg1;
({ GUILD_SELECT_ALL_SERVERS_OPTION_ID: c3, useUserSafetySettingsSelectedGuildStore: c4 } = GUILD_SELECT_ALL_SERVERS_OPTION_ID);
const result = require("set").fileFinishedImporting("modules/user_settings/privacy_and_safety/useUserSafetySettingsSelectedGuildId.tsx");

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