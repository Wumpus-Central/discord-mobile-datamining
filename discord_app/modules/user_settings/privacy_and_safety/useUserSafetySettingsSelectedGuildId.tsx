// === Module 14747: useUserSafetySettingsSelectedGuildId ===

// Module 14747 (useUserSafetySettingsSelectedGuildId)
import createGuildRecordFromRust from "createGuildRecordFromRust";
import GUILD_SELECT_ALL_SERVERS_OPTION_ID from "GUILD_SELECT_ALL_SERVERS_OPTION_ID";
import { GuildFeatures } from "ME";

let c3;
let c4;
const require = arg1;
({ GUILD_SELECT_ALL_SERVERS_OPTION_ID: c3, useUserSafetySettingsSelectedGuildStore: c4 } = GUILD_SELECT_ALL_SERVERS_OPTION_ID);
const result = require("ME").fileFinishedImporting("modules/user_settings/privacy_and_safety/useUserSafetySettingsSelectedGuildId.tsx");

export const useUserSafetySettingsSelectedGuildId = function useUserSafetySettingsSelectedGuildId() {
  return callback().selectedGuildId;
};
export const useAllServersOptionSelected = function useAllServersOptionSelected() {
  return callback().selectedGuildId === closure_3;
};
export const useIsSelectedGuildAHub = function useIsSelectedGuildAHub() {
  const selectedGuildId = callback().selectedGuildId;
  const items = [createGuildRecordFromRust];
  const stateFromStores = selectedGuildId(589).useStateFromStores(items, () => outer1_2.getGuild(selectedGuildId));
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