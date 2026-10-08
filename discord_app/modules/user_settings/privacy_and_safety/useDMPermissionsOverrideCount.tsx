// discord_app/modules/user_settings/privacy_and_safety/useDMPermissionsOverrideCount.tsx
import GuildStore from "../../../stores/GuildStore.tsx";

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/useDMPermissionsOverrideCount.tsx");

export const useDMPermissionsOverrideCount = ReactCompilerGating.isReactCompilerEnabled()
  ? function useDMPermissionsOverrideCount() {
      const cResult = setting(defaultGuildsRestricted[2]).c(5);
      const RestrictedGuildIds = setting(defaultGuildsRestricted[3]).RestrictedGuildIds;
      setting = RestrictedGuildIds.useSetting();
      const obj = setting(defaultGuildsRestricted[2]);
      const tmp = setting;
      const tmp2 = defaultGuildsRestricted;
      defaultGuildsRestricted = setting(defaultGuildsRestricted[4]).useDefaultGuildsRestricted();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === defaultGuildsRestricted) {
        if (cResult[2] === setting) {
          let tmp8 = cResult[3];
          let tmp9 = cResult[4];
        }
        return tmp(tmp2[5]).useStateFromStores(first, tmp8, tmp9);
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
      const obj2 = setting(defaultGuildsRestricted[4]);
    }
  : function useDMPermissionsOverrideCount() {
      const RestrictedGuildIds = setting(defaultGuildsRestricted[3]).RestrictedGuildIds;
      setting = RestrictedGuildIds.useSetting();
      defaultGuildsRestricted = setting(defaultGuildsRestricted[4]).useDefaultGuildsRestricted();
      const obj = setting(defaultGuildsRestricted[4]);
      const items = [GuildStore];
      const items1 = [setting, defaultGuildsRestricted];
      return setting(defaultGuildsRestricted[5]).useStateFromStores(
        items,
        () => {
          set = new Set(set);
          guildIds = guildIds.getGuildIds();
          return guildIds.filter((item) => set.has(item) !== defaultGuildsRestricted).length;
        },
        items1,
      );
    };
