// === Module 16229: useGuildActionRows ===

// Module 16229 (useGuildActionRows)
import Constants from "Constants" /* 1085 */;
import useIsNewMemberDefault from "useIsNewMember" /* 6738 */;
import GuildSidebarConstants from "GuildSidebarConstants" /* 7058 */;
import useCanSeeEventsInChannelListDefault from "useCanSeeEventsInChannelList" /* 12024 */;
import useHasAllocateBoostPermissionDefault from "useHasAllocateBoostPermission" /* 12185 */;
import useTotalPossibleBoostCountDefault from "useTotalPossibleBoostCount" /* 16192 */;
import useIsEligibleForServerOnboardingSetupProgressDefault from "useIsEligibleForServerOnboardingSetupProgress" /* 16230 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore" /* 5083 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const ChannelListGuildActionRow = GuildSidebarConstants.ChannelListGuildActionRow;
const GuildFeatures = Constants.GuildFeatures;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((id) => {
  let features2;
  let features3;
  let first;
  let tmp13;
  let tmp14;
  let tmp30;
  let tmp33;
  _require = id;
  const obj = require("react");
  const cResult = obj.c(10);
  const tmp5 = useCanSeeEventsInChannelListDefault(id.id);
  const obj2 = require("canReviewGuildMemberApplications");
  let canReviewGuildMemberApplications = obj2.useCanReviewGuildMemberApplications(id.id);
  const obj3 = require("useRoleSubscriptionsVisibleInGuild");
  const showRoleSubscriptionsInChannelList = obj3.useShowRoleSubscriptionsInChannelList(id.id);
  const obj4 = require("useGuildShopVisibleInGuild");
  const guildShopVisibleInGuild = obj4.useGuildShopVisibleInGuild(id);
  const obj5 = require("SlayerStorefrontUtils");
  const result = obj5.hasSocialLayerStorefront(id);
  const obj6 = require("OnboardingHomeUtils");
  const canSeeOnboardingHome = obj6.useCanSeeOnboardingHome(id.id);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildOnboardingHomeSettingsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== id.id) {
    const fn = function o() {
      return GuildOnboardingHomeSettingsStore.getNewMemberActions(id.id);
    };
    const items1 = [id.id];
    cResult[1] = id.id;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp14 = items1;
    tmp13 = fn;
  } else {
    tmp13 = cResult[2];
    tmp14 = cResult[3];
  }
  const tmpResult = require("useStateFromStores");
  const stateFromStores = tmpResult.useStateFromStores(first, tmp13, tmp14);
  const tmpResult10 = require("ConjureUtils");
  const canAccessConjure = tmpResult10.useCanAccessConjure(id, "useGuildActionRows");
  const tmp16 = useIsNewMemberDefault(id.id);
  const tmpResult11 = require("MemberActionUtils");
  const allActionsCompleted = tmpResult11.useAllActionsCompleted(id.id);
  const tmp18 = useIsEligibleForServerOnboardingSetupProgressDefault(id.id);
  let str = "-DISABLED";
  const useServerOnboardingSetupProgressExperiment = require("ServerOnboardingSetupProgressExperiment").useServerOnboardingSetupProgressExperiment;
  require("ServerOnboardingSetupProgressExperiment");
  if (tmp18) {
    str = "";
  }
  const showSetupProgressRow = useServerOnboardingSetupProgressExperiment(`useGuildActionRows${str}`).showSetupProgressRow;
  const tmpResult13 = require("MemberSafetyPermissionsUtils");
  const canAccessMemberSafetyPage = tmpResult13.useCanAccessMemberSafetyPage(id.id);
  const features = id.features;
  const tmpResult14 = require("canUseGuildSpace");
  const canUseGuildSpace = tmpResult14.useCanUseGuildSpace(id.id, "useGuildActionRows");
  const hasItem = features.has(GuildFeatures.HUB);
  ({ features: features2, features: features3 } = id);
  const hasItem1 = features2.has(GuildFeatures.COMMUNITY);
  const hasItem2 = features3.has(GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY);
  const tmp26 = useHasAllocateBoostPermissionDefault(id.id);
  const tmp27 = useTotalPossibleBoostCountDefault(id);
  const tmpResult15 = require("GuildOfficialMessageUtils");
  const isGuildOfficialMessagesEnabled = tmpResult15.useIsGuildOfficialMessagesEnabled(id.id, "useGuildActionRows");
  const tmpResult16 = require("GameServerExperiment");
  const gameServerEnabled = tmpResult16.useGameServerEnabled(id.id, "useGuildActionRows");
  if (cResult[4] !== id.features) {
    const features4 = id.features;
    const hasItem3 = features4.has(GuildFeatures.GAME_SERVERS);
    cResult[4] = id.features;
    cResult[5] = hasItem3;
    tmp30 = hasItem3;
  } else {
    tmp30 = cResult[5];
  }
  const tmpResult17 = require("GameServerTabAlwaysOnExperiment");
  const isGameServerTabAlwaysOnEnabled = tmpResult17.useIsGameServerTabAlwaysOnEnabled("useGuildActionRows");
  if (cResult[6] === gameServerEnabled) {
    if (cResult[7] === tmp30) {
      if (cResult[8] === isGameServerTabAlwaysOnEnabled) {
        tmp33 = cResult[9];
      }
      const items2 = [];
      const tmpResult18 = require("useSelectedDismissibleContent");
      const first1 = _slicedToArray(tmpResult18.useSelectedDismissibleContent(tmp33, undefined, true), 1)[0];
      if (hasItem) {
        items2.push(ChannelListGuildActionRow.GUILD_HUB_HEADER_OPTIONS);
      }
      if (tmp18) {
        if (showSetupProgressRow) {
          items2.push(ChannelListGuildActionRow.GUILD_ONBOARDING_SETUP_PROGRESS);
        }
        const tmp45 = !hasItem && canSeeOnboardingHome;
        if (tmp45) {
          items2.push(ChannelListGuildActionRow.GUILD_HOME);
        }
        if (canUseGuildSpace) {
          items2.push(ChannelListGuildActionRow.GUILD_SPACE);
        }
        if (tmp5) {
          items2.push(ChannelListGuildActionRow.GUILD_SCHEDULED_EVENTS);
        }
        const tmp52 = !hasItem && hasItem1;
        if (tmp52) {
          items2.push(ChannelListGuildActionRow.CHANNELS_AND_ROLES);
        }
        if (showRoleSubscriptionsInChannelList) {
          items2.push(ChannelListGuildActionRow.GUILD_ROLE_SUBSCRIPTIONS);
        }
        if (guildShopVisibleInGuild) {
          items2.push(ChannelListGuildActionRow.GUILD_SHOP);
        }
        if (result) {
          items2.push(ChannelListGuildActionRow.GUILD_GAME_SHOP);
        }
        if (canReviewGuildMemberApplications) {
          const features5 = id.features;
          canReviewGuildMemberApplications = features5.has(GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL);
        }
        if (canReviewGuildMemberApplications) {
          items2.push(ChannelListGuildActionRow.GUILD_MOD_DASH_MEMBER_SAFETY);
        }
        if (tmp26) {
          items2.push(ChannelListGuildActionRow.GUILD_BOOSTS);
        }
        if (isGuildOfficialMessagesEnabled) {
          items2.push(ChannelListGuildActionRow.GUILD_OFFICIAL_MESSAGES);
        }
        if (gameServerEnabled) {
          if (tmp30) {
            items2.push(ChannelListGuildActionRow.GAME_SERVERS);
          } else if (null != first1) {
            items2.push(ChannelListGuildActionRow.GAME_SERVERS_EMPTY);
          }
        }
        if (canAccessConjure) {
          items2.push(ChannelListGuildActionRow.GUILD_CONJURE);
        }
        return items2;
      }
      if (!allActionsCompleted) {
        if (canSeeOnboardingHome) {
          if (tmp16) {
            if (null != stateFromStores) {
              if (stateFromStores.length > 0) {
                items2.push(ChannelListGuildActionRow.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR);
              }
            }
          }
        }
      }
      const premiumProgressBarEnabled = id.premiumProgressBarEnabled && tmp27 > 0;
      if (premiumProgressBarEnabled) {
        items2.push(ChannelListGuildActionRow.GUILD_PREMIUM_PROGRESS_BAR);
      }
    }
  }
  if (gameServerEnabled) {
    if (isGameServerTabAlwaysOnEnabled) {
      let items3;
      if (!tmp30) {
        items3 = [require("dismissible_content").DismissibleContent.EMPTY_GAME_SERVER_TAB];
      }
      cResult[6] = gameServerEnabled;
      cResult[7] = tmp30;
      cResult[8] = isGameServerTabAlwaysOnEnabled;
      cResult[9] = items3;
      tmp33 = items3;
    }
  }
  items3 = [];
}) : ((id) => {
  let features2;
  let features3;
  _require = id;
  const tmp3 = useCanSeeEventsInChannelListDefault(id.id);
  const obj = require("canReviewGuildMemberApplications");
  let canReviewGuildMemberApplications = obj.useCanReviewGuildMemberApplications(id.id);
  const obj2 = require("useRoleSubscriptionsVisibleInGuild");
  const showRoleSubscriptionsInChannelList = obj2.useShowRoleSubscriptionsInChannelList(id.id);
  const obj3 = require("useGuildShopVisibleInGuild");
  const guildShopVisibleInGuild = obj3.useGuildShopVisibleInGuild(id);
  const obj4 = require("SlayerStorefrontUtils");
  const result = obj4.hasSocialLayerStorefront(id);
  const obj5 = require("OnboardingHomeUtils");
  const canSeeOnboardingHome = obj5.useCanSeeOnboardingHome(id.id);
  const items = [GuildOnboardingHomeSettingsStore];
  const items1 = [id.id];
  const obj6 = require("useStateFromStores");
  const stateFromStores = obj6.useStateFromStores(items, () => GuildOnboardingHomeSettingsStore.getNewMemberActions(id.id), items1);
  const obj7 = require("ConjureUtils");
  const canAccessConjure = obj7.useCanAccessConjure(id, "useGuildActionRows");
  const tmp11 = useIsNewMemberDefault(id.id);
  const obj8 = require("MemberActionUtils");
  const allActionsCompleted = obj8.useAllActionsCompleted(id.id);
  const tmp13 = useIsEligibleForServerOnboardingSetupProgressDefault(id.id);
  let str = "-DISABLED";
  const useServerOnboardingSetupProgressExperiment = require("ServerOnboardingSetupProgressExperiment").useServerOnboardingSetupProgressExperiment;
  require("ServerOnboardingSetupProgressExperiment");
  if (tmp13) {
    str = "";
  }
  const showSetupProgressRow = useServerOnboardingSetupProgressExperiment(`useGuildActionRows${str}`).showSetupProgressRow;
  const tmp4Result = require("MemberSafetyPermissionsUtils");
  const canAccessMemberSafetyPage = tmp4Result.useCanAccessMemberSafetyPage(id.id);
  const features = id.features;
  const tmp4Result6 = require("canUseGuildSpace");
  const canUseGuildSpace = tmp4Result6.useCanUseGuildSpace(id.id, "useGuildActionRows");
  const hasItem = features.has(GuildFeatures.HUB);
  ({ features: features2, features: features3 } = id);
  const hasItem1 = features2.has(GuildFeatures.COMMUNITY);
  const hasItem2 = features3.has(GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY);
  const tmp21 = useHasAllocateBoostPermissionDefault(id.id);
  const tmp22 = useTotalPossibleBoostCountDefault(id);
  const tmp4Result7 = require("GuildOfficialMessageUtils");
  const isGuildOfficialMessagesEnabled = tmp4Result7.useIsGuildOfficialMessagesEnabled(id.id, "useGuildActionRows");
  const tmp4Result8 = require("GameServerExperiment");
  const gameServerEnabled = tmp4Result8.useGameServerEnabled(id.id, "useGuildActionRows");
  const features4 = id.features;
  const hasItem3 = features4.has(GuildFeatures.GAME_SERVERS);
  const tmp4Result9 = require("GameServerTabAlwaysOnExperiment");
  const isGameServerTabAlwaysOnEnabled = tmp4Result9.useIsGameServerTabAlwaysOnEnabled("useGuildActionRows");
  require("useSelectedDismissibleContent");
  if (gameServerEnabled) {
    if (isGameServerTabAlwaysOnEnabled) {
      let items2;
      if (!hasItem3) {
        items2 = [require("dismissible_content").DismissibleContent.EMPTY_GAME_SERVER_TAB];
      }
      const items3 = [];
      const first = _slicedToArray(tmp28(items2, undefined, true), 1)[0];
      if (hasItem) {
        items3.push(ChannelListGuildActionRow.GUILD_HUB_HEADER_OPTIONS);
      }
      if (tmp13) {
        if (showSetupProgressRow) {
          items3.push(ChannelListGuildActionRow.GUILD_ONBOARDING_SETUP_PROGRESS);
        }
        const tmp40 = !hasItem && canSeeOnboardingHome;
        if (tmp40) {
          items3.push(ChannelListGuildActionRow.GUILD_HOME);
        }
        if (canUseGuildSpace) {
          items3.push(ChannelListGuildActionRow.GUILD_SPACE);
        }
        if (tmp3) {
          items3.push(ChannelListGuildActionRow.GUILD_SCHEDULED_EVENTS);
        }
        const tmp47 = !hasItem && hasItem1;
        if (tmp47) {
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
        if (tmp21) {
          items3.push(ChannelListGuildActionRow.GUILD_BOOSTS);
        }
        if (isGuildOfficialMessagesEnabled) {
          items3.push(ChannelListGuildActionRow.GUILD_OFFICIAL_MESSAGES);
        }
        if (gameServerEnabled) {
          if (hasItem3) {
            items3.push(ChannelListGuildActionRow.GAME_SERVERS);
          } else if (null != first) {
            items3.push(ChannelListGuildActionRow.GAME_SERVERS_EMPTY);
          }
        }
        if (canAccessConjure) {
          items3.push(ChannelListGuildActionRow.GUILD_CONJURE);
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
      const premiumProgressBarEnabled = id.premiumProgressBarEnabled && tmp22 > 0;
      if (premiumProgressBarEnabled) {
        items3.push(ChannelListGuildActionRow.GUILD_PREMIUM_PROGRESS_BAR);
      }
    }
  }
  items2 = [];
});
let result = size.fileFinishedImporting("modules/guild_sidebar/useGuildActionRows.tsx");

export default tmp2;