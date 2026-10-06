// === Module 6737: OnboardingHomeUtils ===

// Module 6737 (OnboardingHomeUtils)
import ChannelConstants from "ChannelConstants" /* 2058 */;
import FavoritesUtils from "FavoritesUtils" /* 2077 */;
import guildHasOnboardingHomeDefault from "guildHasOnboardingHome" /* 5085 */;
import GuildOnboardingUtils from "GuildOnboardingUtils" /* 6608 */;
import useIsNewMemberDefault from "useIsNewMember" /* 6738 */;
import ImpersonateStore from "ImpersonateStore" /* 2105 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore" /* 5083 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let metroImportAll;
let metroImportDefault;
({ GuildFeatures: metroImportDefault, ME: metroImportAll } = Constants);
const ChannelFlags = ChannelConstants.ChannelFlags;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let closure_1;
  let first;
  _require = arg0;
  const tmp = _require;
  const obj = require("react");
  const cResult = obj.c(5);
  const tmp4 = useIsNewMemberDefault(arg0);
  importDefault = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore, GuildStore, ImpersonateStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    let tmp9;
    let tmp10;
    if (cResult[2] === tmp4) {
      tmp9 = cResult[3];
      tmp10 = cResult[4];
    }
    const tmpResult = tmp(573);
    return tmpResult.useStateFromStores(first, tmp9, tmp10);
  }
  const fn = function f() {
    if (closure_0 !== metroImportAll) {
      const obj3 = FavoritesUtils;
      if (!obj3.isFavoritesGuildId(closure_0)) {
        const guild = GuildStore.getGuild(closure_0);
        let hasItem;
        if (guild != null) {
          const features = guild.features;
          hasItem = features.has(metroImportDefault.COMMUNITY);
        }
        let tmp8 = hasItem;
        if (tmp8) {
          let result;
          if (ImpersonateStore.isFullServerPreview(closure_0)) {
            const id = guild.id;
            let newMemberActions = GuildOnboardingHomeSettingsStore.getNewMemberActions(id);
            if (newMemberActions == null) {
              newMemberActions = [];
            }
            let hasItem1 = newMemberActions.length > 0;
            const enabled = GuildOnboardingHomeSettingsStore.getEnabled(id);
            if (hasItem1) {
              const features2 = guild.features;
              hasItem1 = features2.has(metroImportDefault.COMMUNITY);
            }
            if (hasItem1) {
              const features3 = guild.features;
              hasItem1 = !(features3.has(metroImportDefault.GUILD_ONBOARDING) && !enabled);
              features3.has(metroImportDefault.GUILD_ONBOARDING) && !enabled;
            }
            result = hasItem1;
          } else {
            const tmp23Result = GuildOnboardingUtils;
            result = tmp23Result.isGuildOnboardingSettingsAvailable(closure_0) || guildHasOnboardingHomeDefault(guild);
            if (result) {
              let tmp12 = closure_1;
              if (!tmp12) {
                const mutableGuildChannelsForGuild = ChannelStore.getMutableGuildChannelsForGuild(closure_0);
                let flag = false;
                const keys = Object.keys();
                if (keys !== undefined) {
                  flag = false;
                  while (keys[tmp] !== undefined) {
                    let obj4 = mutableGuildChannelsForGuild[tmp17];
                    flag = true;
                    if (obj4.hasFlag(ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) {
                      break;
                    }
                  }
                }
                tmp12 = flag;
              }
              result = tmp12;
            }
          }
          tmp8 = result;
        }
        return tmp8;
      }
    }
    return false;
  };
  const items1 = [arg0, tmp4];
  cResult[1] = arg0;
  cResult[2] = tmp4;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp10 = items1;
  tmp9 = fn;
}) : ((arg0) => {
  let closure_0;
  let closure_1;
  _require = arg0;
  const tmp = useIsNewMemberDefault(arg0);
  importDefault = tmp;
  const items = [ChannelStore, GuildStore, ImpersonateStore];
  const items1 = [arg0, tmp];
  const obj = require("useStateFromStores");
  return obj.useStateFromStores(items, () => {
    if (closure_0 !== metroImportAll) {
      const obj3 = FavoritesUtils;
      if (!obj3.isFavoritesGuildId(closure_0)) {
        const guild = GuildStore.getGuild(closure_0);
        let hasItem;
        if (guild != null) {
          const features = guild.features;
          hasItem = features.has(metroImportDefault.COMMUNITY);
        }
        let tmp8 = hasItem;
        if (tmp8) {
          let result;
          if (ImpersonateStore.isFullServerPreview(closure_0)) {
            const id = guild.id;
            let newMemberActions = GuildOnboardingHomeSettingsStore.getNewMemberActions(id);
            if (newMemberActions == null) {
              newMemberActions = [];
            }
            let hasItem1 = newMemberActions.length > 0;
            const enabled = GuildOnboardingHomeSettingsStore.getEnabled(id);
            if (hasItem1) {
              const features2 = guild.features;
              hasItem1 = features2.has(metroImportDefault.COMMUNITY);
            }
            if (hasItem1) {
              const features3 = guild.features;
              hasItem1 = !(features3.has(metroImportDefault.GUILD_ONBOARDING) && !enabled);
              features3.has(metroImportDefault.GUILD_ONBOARDING) && !enabled;
            }
            result = hasItem1;
          } else {
            const tmp23Result = GuildOnboardingUtils;
            result = tmp23Result.isGuildOnboardingSettingsAvailable(closure_0) || guildHasOnboardingHomeDefault(guild);
            if (result) {
              let tmp12 = closure_1;
              if (!tmp12) {
                const mutableGuildChannelsForGuild = ChannelStore.getMutableGuildChannelsForGuild(closure_0);
                let flag = false;
                const keys = Object.keys();
                if (keys !== undefined) {
                  flag = false;
                  while (keys[tmp] !== undefined) {
                    let obj4 = mutableGuildChannelsForGuild[tmp17];
                    flag = true;
                    if (obj4.hasFlag(ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) {
                      break;
                    }
                  }
                }
                tmp12 = flag;
              }
              result = tmp12;
            }
          }
          tmp8 = result;
        }
        return tmp8;
      }
    }
    return false;
  }, items1);
});
let result = size.fileFinishedImporting("modules/guild_onboarding_home/OnboardingHomeUtils.tsx");

export const useCanSeeOnboardingHome = tmp3;
export const canSeeOnboardingHome = function canSeeOnboardingHome(id) {
  const guild = GuildStore.getGuild(id);
  if (null == guild) {
    return false;
  } else {
    if (id !== metroImportAll) {
      const obj3 = FavoritesUtils;
      if (!obj3.isFavoritesGuildId(id)) {
        if (tmp2) {
          id = guild.id;
          let newMemberActions = GuildOnboardingHomeSettingsStore.getNewMemberActions(id);
          if (newMemberActions == null) {
            newMemberActions = [];
          }
          let hasItem = newMemberActions.length > 0;
          const enabled = GuildOnboardingHomeSettingsStore.getEnabled(id);
          if (hasItem) {
            const features6 = guild.features;
            hasItem = features6.has(metroImportDefault.COMMUNITY);
          }
          if (hasItem) {
            const features7 = guild.features;
            hasItem = !(features7.has(metroImportDefault.GUILD_ONBOARDING) && !enabled);
            features7.has(metroImportDefault.GUILD_ONBOARDING) && !enabled;
          }
          return hasItem;
        } else {
          const tmp14Result = GuildOnboardingUtils;
          let result = tmp14Result.isGuildOnboardingSettingsAvailable(id);
          if (result) {
            const features = guild.features;
            result = features.has(metroImportDefault.GUILD_ONBOARDING);
          }
          if (result) {
            const features2 = guild.features;
            result = features2.has(metroImportDefault.GUILD_SERVER_GUIDE);
          }
          const features3 = guild.features;
          let hasItem1 = features3.has(metroImportDefault.GUILD_ONBOARDING);
          if (hasItem1) {
            const features4 = guild.features;
            hasItem1 = features4.has(metroImportDefault.GUILD_SERVER_GUIDE);
          }
          if (!hasItem1) {
            hasItem1 = result;
          }
          if (hasItem1) {
            const features5 = guild.features;
            hasItem1 = features5.has(metroImportDefault.COMMUNITY);
          }
          return hasItem1;
        }
      }
    }
    return false;
  }
};