// discord_app/modules/guild_onboarding_home/OnboardingHomeUtils.tsx
import FavoritesUtils from "../favorites/FavoritesUtils.tsx";
import GuildOnboardingUtils from "../guild_onboarding/GuildOnboardingUtils.tsx";
import GuildOnboardingHomeTypes from "GuildOnboardingHomeTypes.tsx";
import useIsNewMemberDefault from "useIsNewMember.tsx";
import guildHasOnboardingHomeDefault from "guildHasOnboardingHome.tsx";
import ImpersonateStore from "../impersonate/ImpersonateStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore.tsx";

const require = globalThis.__r;

require = fn;
const Constants = fn(1072);
({ GuildFeatures: closure_7, ME: closure_8 } = Constants);
const ChannelFlags = fn(4870).ChannelFlags;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_onboarding_home/OnboardingHomeUtils.tsx");

export function useCanSeeOnboardingHome(guild_id) {
  _require = guild_id;
  const tmp = useIsNewMemberDefault(guild_id);
  importDefault = tmp;
  const items = [ChannelStore, GuildStore, ImpersonateStore, GuildOnboardingHomeSettingsStore];
  const items1 = [guild_id, tmp];
  return require("useStateFromStores").useStateFromStores(
    items,
    () => {
      if (closure_0 !== React6) {
        let enabled = require;
        let hasItem1 = dependencyMap;
        if (!obj2.isFavoritesGuildId(closure_0)) {
          let has = GuildStore.getGuild(closure_0);
          let hasItem;
          if (has != null) {
            const features = has.features;
            hasItem = features.has(constants.COMMUNITY);
          }
          if (!hasItem) {
            return tmp7;
          } else if (ImpersonateStore.isFullServerPreview(closure_0)) {
            const id = has.id;
            const isSettingsEmptyResult = enabled(7399).isSettingsEmpty(
              GuildOnboardingHomeSettingsStore.getSettings(id),
            );
            hasItem1 = !isSettingsEmptyResult;
            enabled = GuildOnboardingHomeSettingsStore.getEnabled(id);
            if (!isSettingsEmptyResult) {
              const features2 = has.features;
              hasItem1 = features2.has(constants.COMMUNITY);
            }
            if (hasItem1) {
              const features3 = has.features;
              has = features3.has;
              hasItem1 = !(has(constants.GUILD_ONBOARDING) && !enabled);
              const tmp23 = has(constants.GUILD_ONBOARDING) && !enabled;
            }
            let tmp10 = hasItem1;
            const enabledResult = enabled(7399);
          } else {
            tmp10 = guildHasOnboardingHomeDefault(has);
            if (tmp10) {
              let tmp11 = closure_1;
              if (!closure_1) {
                const mutableGuildChannelsForGuild = ChannelStore.getMutableGuildChannelsForGuild(closure_0);
                let flag = false;
                const keys = Object.keys();
                if (keys !== undefined) {
                  flag = false;
                  while (keys[tmp] !== undefined) {
                    let obj3 = mutableGuildChannelsForGuild[tmp16];
                    flag = true;
                    if (obj3.hasFlag(ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) {
                      break;
                    }
                  }
                }
                tmp11 = flag;
              }
              tmp10 = tmp11;
            }
          }
        }
        obj2 = FavoritesUtils;
      }
      return false;
    },
    items1,
  );
}
export function canSeeOnboardingHome(id) {
  const guild = GuildStore.getGuild(id);
  if (null == guild) {
    return false;
  } else {
    if (id !== React6) {
      if (!obj3.isFavoritesGuildId(id)) {
        if (tmp2) {
          id = guild.id;
          const isSettingsEmptyResult = GuildOnboardingHomeTypes.isSettingsEmpty(
            GuildOnboardingHomeSettingsStore.getSettings(id),
          );
          let hasItem = !isSettingsEmptyResult;
          const enabled = GuildOnboardingHomeSettingsStore.getEnabled(id);
          if (!isSettingsEmptyResult) {
            const features6 = guild.features;
            hasItem = features6.has(constants.COMMUNITY);
          }
          if (hasItem) {
            const features7 = guild.features;
            hasItem = !(features7.has(constants.GUILD_ONBOARDING) && !enabled);
            const tmp14 = features7.has(constants.GUILD_ONBOARDING) && !enabled;
          }
          return hasItem;
        } else {
          let result = GuildOnboardingUtils.isGuildOnboardingSettingsAvailable(id);
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
      obj3 = FavoritesUtils;
    }
    return false;
  }
}
