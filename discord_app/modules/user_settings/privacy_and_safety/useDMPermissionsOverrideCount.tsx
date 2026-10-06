// === Module 15817: useDMPermissionsOverrideCount ===

// Module 15817 (useDMPermissionsOverrideCount)
import GuildStore from "GuildStore" /* 2074 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let guildIds, set;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let defaultGuildsRestricted;
  let first;
  let setting;
  const obj = setting(defaultGuildsRestricted[2]);
  const cResult = obj.c(5);
  const RestrictedGuildIds = setting(defaultGuildsRestricted[3]).RestrictedGuildIds;
  const tmp = setting;
  setting = RestrictedGuildIds.useSetting();
  const obj2 = setting(defaultGuildsRestricted[4]);
  const tmp2 = defaultGuildsRestricted;
  defaultGuildsRestricted = obj2.useDefaultGuildsRestricted();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === defaultGuildsRestricted) {
    let tmp8;
    let tmp9;
    if (cResult[2] === setting) {
      tmp8 = cResult[3];
      tmp9 = cResult[4];
    }
    const tmpResult = tmp(tmp2[5]);
    return tmpResult.useStateFromStores(first, tmp8, tmp9);
  }
  const fn = function u() {
    set = new Set(set);
    guildIds = guildIds.getGuildIds();
    return guildIds.filter((item) => set.has(item) !== defaultGuildsRestricted).length;
  };
  const items1 = [setting, defaultGuildsRestricted];
  cResult[1] = defaultGuildsRestricted;
  cResult[2] = setting;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp9 = items1;
  tmp8 = fn;
}) : (() => {
  let defaultGuildsRestricted;
  let setting;
  const RestrictedGuildIds = setting(defaultGuildsRestricted[3]).RestrictedGuildIds;
  setting = RestrictedGuildIds.useSetting();
  const obj = setting(defaultGuildsRestricted[4]);
  defaultGuildsRestricted = obj.useDefaultGuildsRestricted();
  const items = [GuildStore];
  const items1 = [setting, defaultGuildsRestricted];
  const obj2 = setting(defaultGuildsRestricted[5]);
  return obj2.useStateFromStores(items, () => {
    set = new Set(set);
    guildIds = guildIds.getGuildIds();
    return guildIds.filter((item) => set.has(item) !== defaultGuildsRestricted).length;
  }, items1);
});
const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/useDMPermissionsOverrideCount.tsx");

export const useDMPermissionsOverrideCount = tmp2;