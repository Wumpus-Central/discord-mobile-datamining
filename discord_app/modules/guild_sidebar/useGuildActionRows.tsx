// === Module 16111: useGuildActionRows ===

// Module 16111 (useGuildActionRows)
import useIsNewMemberDefault from "useIsNewMember" /* 6831 */;
import useCanSeeEventsInChannelListDefault from "useCanSeeEventsInChannelList" /* 12074 */;
import useHasAllocateBoostPermissionDefault from "useHasAllocateBoostPermission" /* 12220 */;
import useTotalPossibleBoostCountDefault from "useTotalPossibleBoostCount" /* 16074 */;
import useIsEligibleForServerOnboardingSetupProgressDefault from "useIsEligibleForServerOnboardingSetupProgress" /* 16112 */;
import _slicedToArray from "module_32" /* 32 */;
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore" /* 5032 */;

const require = globalThis.__r;

const require = fn;
const ChannelListGuildActionRow = fn(7142).ChannelListGuildActionRow;
const GuildFeatures = fn(1074).GuildFeatures;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_sidebar/useGuildActionRows.tsx");

export default function useGuildActionRows(id) {
  _require = id;
  const tmp3 = useCanSeeEventsInChannelListDefault(id.id);
  let canReviewGuildMemberApplications = require("canReviewGuildMemberApplications").useCanReviewGuildMemberApplications(id.id);
  const obj = require("canReviewGuildMemberApplications");
  const showRoleSubscriptionsInChannelList = require("useRoleSubscriptionsVisibleInGuild").useShowRoleSubscriptionsInChannelList(id.id);
  const obj2 = require("useRoleSubscriptionsVisibleInGuild");
  const guildShopVisibleInGuild = require("useGuildShopVisibleInGuild").useGuildShopVisibleInGuild(id);
  const obj3 = require("useGuildShopVisibleInGuild");
  const result = require("SlayerStorefrontUtils").hasSocialLayerStorefront(id);
  const obj4 = require("SlayerStorefrontUtils");
  const canSeeOnboardingHome = require("OnboardingHomeUtils").useCanSeeOnboardingHome(id.id);
  const obj5 = require("OnboardingHomeUtils");
  const items = [GuildOnboardingHomeSettingsStore];
  const items1 = [id.id];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => GuildOnboardingHomeSettingsStore.getNewMemberActions(id.id), items1);
  const obj6 = require("useStateFromStores");
  const canAccessVibegrations = require("VibegrationsUtils").useCanAccessVibegrations(id, "useGuildActionRows");
  const obj7 = require("VibegrationsUtils");
  const tmp11 = useIsNewMemberDefault(id.id);
  const allActionsCompleted = require("MemberActionUtils").useAllActionsCompleted(id.id);
  const tmp13 = useIsEligibleForServerOnboardingSetupProgressDefault(id.id);
  const obj8 = require("MemberActionUtils");
  let str = "-DISABLED";
  if (tmp13) {
    str = "";
  }
  const obj9 = require("ServerOnboardingSetupProgressExperiment");
  const canAccessMemberSafetyPage = require("MemberSafetyPermissionsUtils").useCanAccessMemberSafetyPage(id.id);
  const tmp4Result = require("MemberSafetyPermissionsUtils");
  const features = id.features;
  const canUseGuildSpace = require("canUseGuildSpace").useCanUseGuildSpace(id.id, "useGuildActionRows");
  const hasItem = features.has(GuildFeatures.HUB);
  ({ features: features2, features: features3 } = id);
  const hasItem1 = features2.has(GuildFeatures.COMMUNITY);
  const hasItem2 = features3.has(GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY);
  const tmp4Result6 = require("canUseGuildSpace");
  const tmp20 = useHasAllocateBoostPermissionDefault(id.id);
  const tmp21 = useTotalPossibleBoostCountDefault(id);
  const isGuildOfficialMessagesEnabled = require("GuildOfficialMessageUtils").useIsGuildOfficialMessagesEnabled(id.id, "useGuildActionRows");
  const tmp4Result7 = require("GuildOfficialMessageUtils");
  const gameServerEnabled = require("GameServerExperiment").useGameServerEnabled(id.id, "useGuildActionRows");
  const features4 = id.features;
  const hasItem3 = features4.has(GuildFeatures.GAME_SERVERS);
  const tmp4Result8 = require("GameServerExperiment");
  const isGameServerTabAlwaysOnEnabled = require("GameServerTabAlwaysOnExperiment").useIsGameServerTabAlwaysOnEnabled("useGuildActionRows");
  require("useSelectedDismissibleContent");
  if (gameServerEnabled) {
    if (isGameServerTabAlwaysOnEnabled) {
      if (!hasItem3) {
        let items2 = [tmp4(2029).DismissibleContent.EMPTY_GAME_SERVER_TAB];
      }
      const items3 = [];
      if (hasItem) {
        items3.push(ChannelListGuildActionRow.GUILD_HUB_HEADER_OPTIONS);
      }
      if (tmp13) {
        if (obj9.useServerOnboardingSetupProgressExperiment(`useGuildActionRows${str}`).showSetupProgressRow) {
          items3.push(ChannelListGuildActionRow.GUILD_ONBOARDING_SETUP_PROGRESS);
        }
        let tmp38 = !hasItem;
        if (!hasItem) {
          tmp38 = canSeeOnboardingHome;
        }
        if (tmp38) {
          items3.push(ChannelListGuildActionRow.GUILD_HOME);
        }
        if (canUseGuildSpace) {
          items3.push(ChannelListGuildActionRow.GUILD_SPACE);
        }
        if (tmp3) {
          items3.push(ChannelListGuildActionRow.GUILD_SCHEDULED_EVENTS);
        }
        let tmp45 = !hasItem;
        if (!hasItem) {
          tmp45 = hasItem1;
        }
        if (tmp45) {
          items3.push(ChannelListGuildActionRow.CHANNELS_AND_ROLES);
        }
        if (showRoleSubscriptionsInChannelList) {
          items3.push(ChannelListGuildActionRow.GUILD_ROLE_SUBSCRIPTIONS);
        }
        if (guildShopVisibleInGuild) {
          items3.push(ChannelListGuildActionRow.GUILD_SHOP);
        }
        if (result) {
          items3.push(ChannelListGuildActionRow.GUILD_GAME_SHOP);
        }
        if (canReviewGuildMemberApplications) {
          const features5 = id.features;
          canReviewGuildMemberApplications = features5.has(GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL);
        }
        if (canReviewGuildMemberApplications) {
          items3.push(ChannelListGuildActionRow.GUILD_MOD_DASH_MEMBER_SAFETY);
        }
        if (tmp20) {
          items3.push(ChannelListGuildActionRow.GUILD_BOOSTS);
        }
        if (isGuildOfficialMessagesEnabled) {
          items3.push(ChannelListGuildActionRow.GUILD_OFFICIAL_MESSAGES);
        }
        if (gameServerEnabled) {
          if (hasItem3) {
            items3.push(ChannelListGuildActionRow.GAME_SERVERS);
          } else if (null != _slicedToArray(tmp27(items2, undefined, true), 1)[0]) {
            items3.push(ChannelListGuildActionRow.GAME_SERVERS_EMPTY);
          }
        }
        if (canAccessVibegrations) {
          items3.push(ChannelListGuildActionRow.GUILD_VIBEGRATIONS);
        }
        return items3;
      }
      if (!allActionsCompleted) {
        if (canSeeOnboardingHome) {
          if (tmp11) {
            if (null != stateFromStores) {
              if (stateFromStores.length > 0) {
                items3.push(ChannelListGuildActionRow.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR);
              }
            }
          }
        }
      }
      let premiumProgressBarEnabled = id.premiumProgressBarEnabled;
      if (premiumProgressBarEnabled) {
        premiumProgressBarEnabled = tmp21 > 0;
      }
      if (premiumProgressBarEnabled) {
        items3.push(ChannelListGuildActionRow.GUILD_PREMIUM_PROGRESS_BAR);
      }
    }
  }
  items2 = [];
  const tmp4Result9 = require("GameServerTabAlwaysOnExperiment");
};