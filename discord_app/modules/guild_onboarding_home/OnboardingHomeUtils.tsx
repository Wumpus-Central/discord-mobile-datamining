// discord_app/modules/guild_onboarding_home/OnboardingHomeUtils.tsx
import getFavoritesAwareGuildName from "../favorites/FavoritesUtils.tsx";
import useIsNewMemberDefault from "useIsNewMember.tsx";
import isChattableChannel from "../guild_onboarding/GuildOnboardingUtils.tsx";
import initialize from "../impersonate/ImpersonateStore.tsx";
import ensureGuildLoaded from "../../stores/ChannelStore.tsx";
import createGuildRecordFromRust from "../../stores/GuildStore.tsx";
import handleSettingsLoadSuccess from "GuildOnboardingHomeSettingsStore.tsx";
import ME from "../../Constants.tsx";
import { ChannelFlags } from "../channel/ChannelConstants.tsx";

require = fn;
({ GuildFeatures: error, ME: closure_8 } = ME);
let result = require("obj132").fileFinishedImporting("modules/guild_onboarding_home/OnboardingHomeUtils.tsx");

export const useCanSeeOnboardingHome = function useCanSeeOnboardingHome(guild_id) {
  const _require = guild_id;
  const tmp = useIsNewMemberDefault(guild_id);
  importDefault = tmp;
  const items = [closure_4, closure_5, closure_3];
  const items1 = [guild_id, tmp];
  return require("../../../discord_common/js/packages/flux/useStateFromStores.tsx").useStateFromStores(items, () => {
    if (guild_id !== closure_1_8) {
      if (!obj3.isFavoritesGuildId(guild_id)) {
        let has = closure_1_5.getGuild(guild_id);
        let hasItem;
        if (has != null) {
          const features = has.features;
          hasItem = features.has(closure_1_7.COMMUNITY);
        }
        if (!hasItem) {
          return tmp7;
        } else if (closure_1_3.isFullServerPreview(guild_id)) {
          const id = has.id;
          let newMemberActions = closure_1_6.getNewMemberActions(id);
          if (newMemberActions == null) {
            newMemberActions = [];
          }
          let hasItem1 = newMemberActions.length > 0;
          const enabled = closure_1_6.getEnabled(id);
          if (hasItem1) {
            const features2 = has.features;
            hasItem1 = features2.has(closure_1_7.COMMUNITY);
          }
          if (hasItem1) {
            const features3 = has.features;
            has = features3.has;
            hasItem1 = !(has(closure_1_7.GUILD_ONBOARDING) && !enabled);
            const tmp21 = has(closure_1_7.GUILD_ONBOARDING) && !enabled;
          }
          let result = hasItem1;
        } else {
          result = guild_id(dependencyMap[9]).isGuildOnboardingSettingsAvailable(guild_id);
          if (!result) {
            result = callback(dependencyMap[10])(has);
          }
          if (result) {
            let tmp11 = callback;
            if (!callback) {
              const mutableGuildChannelsForGuild = closure_1_4.getMutableGuildChannelsForGuild(guild_id);
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
          const tmp23Result = guild_id(dependencyMap[9]);
        }
      }
      obj3 = guild_id(dependencyMap[8]);
    }
    return false;
  }, items1);
};
export const canSeeOnboardingHome = function canSeeOnboardingHome(id) {
  guild = guild.getGuild(id);
  if (null == guild) {
    return false;
  } else {
    if (id !== closure_8) {
      if (!obj3.isFavoritesGuildId(id)) {
        if (tmp2) {
          id = guild.id;
          newMemberActions = newMemberActions.getNewMemberActions(id);
          if (newMemberActions == null) {
            newMemberActions = [];
          }
          let hasItem = newMemberActions.length > 0;
          const enabled = newMemberActions.getEnabled(id);
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
          let result = isChattableChannel.isGuildOnboardingSettingsAvailable(id);
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
            hasItem1 = features4.has(constants.GUILD_SERVER_GUIDE);
          }
          if (!hasItem1) {
            hasItem1 = result;
          }
          if (hasItem1) {
            const features5 = guild.features;
            hasItem1 = features5.has(constants.COMMUNITY);
          }
          return hasItem1;
        }
      }
      obj3 = getFavoritesAwareGuildName;
    }
    return false;
  }
};