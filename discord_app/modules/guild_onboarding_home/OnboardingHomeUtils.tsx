// discord_app/modules/guild_onboarding_home/OnboardingHomeUtils.tsx
import initialize from "initialize";
import ensureGuildLoaded from "ensureGuildLoaded";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import handleSettingsLoadSuccess from "handleSettingsLoadSuccess";
import ME from "ME";
import { ChannelFlags } from "set";

let error;
let metroImportAll;
const require = arg1;
({ GuildFeatures: error, ME: metroImportAll } = ME);
let result = require("createGuildRecordFromRust").fileFinishedImporting("modules/guild_onboarding_home/OnboardingHomeUtils.tsx");

export const useCanSeeOnboardingHome = function useCanSeeOnboardingHome(guild_id) {
  const _require = guild_id;
  const tmp = require("useIsNewMember.tsx")(guild_id);
  importDefault = tmp;
  const items = [ensureGuildLoaded, createGuildRecordFromRust, initialize];
  const items1 = [guild_id, tmp];
  return _require("../../../discord_common/js/packages/flux/useStateFromStores.tsx").useStateFromStores(items, () => {
    if (guild_id !== outer1_8) {
      if (!obj3.isFavoritesGuildId(tmp2)) {
        let has = outer1_5.getGuild(tmp2);
        let hasItem;
        if (has != null) {
          const features = has.features;
          hasItem = features.has(outer1_7.COMMUNITY);
        }
        if (!hasItem) {
          return tmp7;
        } else if (outer1_3.isFullServerPreview(tmp2)) {
          const id = has.id;
          let newMemberActions = outer1_6.getNewMemberActions(id);
          if (newMemberActions == null) {
            newMemberActions = [];
          }
          let hasItem1 = newMemberActions.length > 0;
          const enabled = outer1_6.getEnabled(id);
          if (hasItem1) {
            const features2 = has.features;
            hasItem1 = features2.has(outer1_7.COMMUNITY);
          }
          if (hasItem1) {
            const features3 = has.features;
            has = features3.has;
            hasItem1 = !(has(outer1_7.GUILD_ONBOARDING) && !enabled);
            const tmp21 = has(outer1_7.GUILD_ONBOARDING) && !enabled;
          }
          let result = hasItem1;
          const obj2 = outer1_6;
        } else {
          result = tmp23(tmp24[9]).isGuildOnboardingSettingsAvailable(tmp2);
          if (!result) {
            result = tmp(tmp24[10])(has);
          }
          if (result) {
            let tmp11 = tmp;
            if (!tmp) {
              const mutableGuildChannelsForGuild = outer1_4.getMutableGuildChannelsForGuild(tmp2);
              let flag = false;
              const keys = Object.keys();
              if (keys !== undefined) {
                flag = false;
                while (keys[tmp] !== undefined) {
                  let tmp25 = tmp16;
                  let obj4 = mutableGuildChannelsForGuild[tmp16];
                  let tmp26 = outer1_9;
                  flag = true;
                  if (obj4.hasFlag(outer1_9.IS_GUILD_RESOURCE_CHANNEL)) {
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
      obj3 = guild_id(outer1_2[8]);
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
          let result = tmp14(5217).isGuildOnboardingSettingsAvailable(id);
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
      obj3 = require("../favorites/FavoritesUtils.tsx") /* getFavoritesAwareGuildName */;
      tmp14 = require;
    }
    return false;
  }
};