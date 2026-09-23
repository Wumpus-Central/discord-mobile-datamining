// === Module 16260: useDMPermissionsOverrideCount ===

// Module 16260 (useDMPermissionsOverrideCount)
import GuildStore from "GuildStore" /* 2064 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/useDMPermissionsOverrideCount.tsx");

export const useDMPermissionsOverrideCount = function useDMPermissionsOverrideCount() {
  const RestrictedGuildIds = setting(defaultGuildsRestricted[1]).RestrictedGuildIds;
  setting = RestrictedGuildIds.useSetting();
  defaultGuildsRestricted = setting(defaultGuildsRestricted[2]).useDefaultGuildsRestricted();
  const obj = setting(defaultGuildsRestricted[2]);
  const items = [GuildStore];
  const items1 = [setting, defaultGuildsRestricted];
  return setting(defaultGuildsRestricted[3]).useStateFromStores(items, () => {
    set = new Set(set);
    guildIds = guildIds.getGuildIds();
    return guildIds.filter((item) => set.has(item) !== defaultGuildsRestricted).length;
  }, items1);
};