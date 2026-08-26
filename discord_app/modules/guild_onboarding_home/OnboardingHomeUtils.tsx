// discord_app/modules/guild_onboarding_home/OnboardingHomeUtils.tsx
import getFavoritesAwareGuildName from "../favorites/FavoritesUtils.tsx";
import useIsNewMemberDefault from "useIsNewMember.tsx";
import closure_3 from "../impersonate/ImpersonateStore.tsx";
import closure_4 from "../../stores/ChannelStore.tsx";
import closure_5 from "../../stores/GuildStore.tsx";
import closure_6 from "GuildOnboardingHomeSettingsStore.tsx";
import ME from "../../Constants.tsx";
import { ChannelFlags } from "../channel/ChannelConstants.tsx";

require = arg1;
({ GuildFeatures: error, ME: closure_8 } = ME);
let result = require("set").fileFinishedImporting("modules/guild_onboarding_home/OnboardingHomeUtils.tsx");

export const useCanSeeOnboardingHome = function useCanSeeOnboardingHome(guild_id) {
  const _require = guild_id;
  const tmp = useIsNewMemberDefault(guild_id);
  importDefault = tmp;
  const items = [closure_4, closure_5, closure_3];
  const items1 = [guild_id, tmp];
  return require("../../../discord_common/js/packages/flux/useStateFromStores.tsx").useStateFromStores(items, () => {
    if (guild_id !== closure_1_8) {
      if (!obj3.isFavoritesGuildId(tmp2)) {
        let has = closure_1_5.getGuild(tmp2);
        let hasItem;
        if (has != null) {
          const features = has.features;
          hasItem = features.has(closure_1_7.COMMUNITY);
        }
        if (!hasItem) {
          return tmp7;
        } else if (closure_1_3.isFullServerPreview(tmp2)) {
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
          const obj2 = closure_1_6;
        } else {
          result = tmp23(tmp24[9]).isGuildOnboardingSettingsAvailable(tmp2);
          if (!result) {
            result = callback(tmp24[10])(has);
          }
          if (result) {
            let tmp11 = callback;
            if (!callback) {
              const mutableGuildChannelsForGuild = closure_1_4.getMutableGuildChannelsForGuild(tmp2);
              let flag = false;
              const keys = Object.keys();
              if (keys !== undefined) {
                flag = false;
                while (keys[tmp] !== undefined) {
                  let tmp25 = tmp16;
                  let obj4 = mutableGuildChannelsForGuild[tmp16];
                  let tmp26 = closure_1_9;
                  flag = true;
                  if (obj4.hasFlag(closure_1_9.IS_GUILD_RESOURCE_CHANNEL)) {
                    break;
                  }
                }
              }
              tmp11 = flag;
            }
            result = tmp11;
          }
          const tmp23Result = tmp23(tmp24[9]);
        }
      }
      obj3 = guild_id(closure_1_2[8]);
      tmp23 = guild_id;
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
          let result = tmp14(5421).isGuildOnboardingSettingsAvailable(id);
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
      obj3 = getFavoritesAwareGuildName;
      tmp14 = require;
    }
    return false;
  }
};