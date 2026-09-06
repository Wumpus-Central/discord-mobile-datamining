// discord_app/modules/guild_onboarding_home/OnboardingHomeUtils.tsx
import FavoritesUtils from "../favorites/FavoritesUtils.tsx";
import guildHasOnboardingHomeDefault from "guildHasOnboardingHome.tsx";
import useIsNewMemberDefault from "useIsNewMember.tsx";
import ImpersonateStore from "../impersonate/ImpersonateStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore.tsx";

require = fn;
const Constants = fn(1074);
({ GuildFeatures: closure_7, ME: closure_8 } = Constants);
const ChannelFlags = fn(1964).ChannelFlags;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_onboarding_home/OnboardingHomeUtils.tsx");

export const useCanSeeOnboardingHome = function useCanSeeOnboardingHome(guild_id) {
  _require = guild_id;
  const tmp = useIsNewMemberDefault(guild_id);
  importDefault = tmp;
  const items = [ChannelStore, GuildStore, ImpersonateStore];
  const items1 = [guild_id, tmp];
  return require("useStateFromStores").useStateFromStores(
    items,
    () => {
      if (closure_0 !== React6) {
        if (!obj3.isFavoritesGuildId(tmp2)) {
          let has = GuildStore.getGuild(tmp2);
          let hasItem;
          if (has != null) {
            const features = has.features;
            hasItem = features.has(constants.COMMUNITY);
          }
          if (!hasItem) {
            return tmp7;
          } else if (ImpersonateStore.isFullServerPreview(tmp2)) {
            const id = has.id;
            let newMemberActions = GuildOnboardingHomeSettingsStore.getNewMemberActions(id);
            if (newMemberActions == null) {
              newMemberActions = [];
            }
            let hasItem1 = newMemberActions.length > 0;
            const enabled = GuildOnboardingHomeSettingsStore.getEnabled(id);
            if (hasItem1) {
              const features2 = has.features;
              hasItem1 = features2.has(constants.COMMUNITY);
            }
            if (hasItem1) {
              const features3 = has.features;
              has = features3.has;
              hasItem1 = !(has(constants.GUILD_ONBOARDING) && !enabled);
              const tmp21 = has(constants.GUILD_ONBOARDING) && !enabled;
            }
            let result = hasItem1;
          } else {
            result = tmp23(7106).isGuildOnboardingSettingsAvailable(tmp2);
            if (!result) {
              result = guildHasOnboardingHomeDefault(has);
            }
            if (result) {
              let tmp11 = closure_1;
              if (!closure_1) {
                const mutableGuildChannelsForGuild = ChannelStore.getMutableGuildChannelsForGuild(tmp2);
                let flag = false;
                const keys = Object.keys();
                if (keys !== undefined) {
                  flag = false;
                  while (keys[tmp] !== undefined) {
                    let obj4 = mutableGuildChannelsForGuild[tmp16];
                    flag = true;
                    if (obj4.hasFlag(ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) {
                      break;
                    }
                  }
                }
                tmp11 = flag;
              }
              result = tmp11;
            }
            const tmp23Result = tmp23(7106);
          }
        }
        obj3 = FavoritesUtils;
        tmp23 = require;
      }
      return false;
    },
    items1,
  );
};
export const canSeeOnboardingHome = function canSeeOnboardingHome(id) {
  const guild = GuildStore.getGuild(id);
  if (null == guild) {
    return false;
  } else {
    if (id !== React6) {
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
            hasItem = features6.has(constants.COMMUNITY);
          }
          if (hasItem) {
            const features7 = guild.features;
            hasItem = !(features7.has(constants.GUILD_ONBOARDING) && !enabled);
            const tmp12 = features7.has(constants.GUILD_ONBOARDING) && !enabled;
          }
          return hasItem;
        } else {
          let result = tmp14(7106).isGuildOnboardingSettingsAvailable(id);
          if (result) {
            const features = guild.features;
            result = features.has(constants.GUILD_ONBOARDING);
          }
          if (result) {
            const features2 = guild.features;
            result = features2.has(constants.GUILD_SERVER_GUIDE);
          }
          const features3 = guild.features;
          let hasItem1 = features3.has(constants.GUILD_ONBOARDING);
          if (hasItem1) {
            const features4 = guild.features;
            hasItem1 = features4.has(tmp6.GUILD_SERVER_GUIDE);
          }
          if (!hasItem1) {
            hasItem1 = result;
          }
          if (hasItem1) {
            const features5 = guild.features;
            hasItem1 = features5.has(tmp6.COMMUNITY);
          }
          return hasItem1;
        }
      }
      obj3 = FavoritesUtils;
      tmp14 = require;
    }
    return false;
  }
};
