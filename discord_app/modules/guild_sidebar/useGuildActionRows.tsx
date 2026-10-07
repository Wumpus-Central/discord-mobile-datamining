// === Module 16229: useGuildActionRows ===

// Module 16229 (useGuildActionRows)
import useIsNewMemberDefault from "useIsNewMember" /* 6738 */;
import useCanSeeEventsInChannelListDefault from "useCanSeeEventsInChannelList" /* 12024 */;
import useHasAllocateBoostPermissionDefault from "useHasAllocateBoostPermission" /* 12185 */;
import useTotalPossibleBoostCountDefault from "useTotalPossibleBoostCount" /* 16192 */;
import useIsEligibleForServerOnboardingSetupProgressDefault from "useIsEligibleForServerOnboardingSetupProgress" /* 16230 */;
import _slicedToArray from "module_32" /* 32 */;
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore" /* 5083 */;

const require = globalThis.__r;

const require = fn;
const ChannelListGuildActionRow = fn(7058).ChannelListGuildActionRow;
const GuildFeatures = fn(1085).GuildFeatures;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_sidebar/useGuildActionRows.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((id) => {
  _require = id;
  const cResult = require("c").c(10);
  const obj = require("c");
  const tmp5 = useCanSeeEventsInChannelListDefault(id.id);
  let canReviewGuildMemberApplications = require("canReviewGuildMemberApplications").useCanReviewGuildMemberApplications(id.id);
  const obj2 = require("canReviewGuildMemberApplications");
  const showRoleSubscriptionsInChannelList = require("useRoleSubscriptionsVisibleInGuild").useShowRoleSubscriptionsInChannelList(id.id);
  const obj3 = require("useRoleSubscriptionsVisibleInGuild");
  const guildShopVisibleInGuild = require("useGuildShopVisibleInGuild").useGuildShopVisibleInGuild(id);
  const obj4 = require("useGuildShopVisibleInGuild");
  const result = require("SlayerStorefrontUtils").hasSocialLayerStorefront(id);
  const obj5 = require("SlayerStorefrontUtils");
  const canSeeOnboardingHome = require("OnboardingHomeUtils").useCanSeeOnboardingHome(id.id);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildOnboardingHomeSettingsStore];
    cResult[0] = items;
    let first = items;
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
    let tmp14 = items1;
    let tmp13 = fn;
  } else {
    tmp13 = cResult[2];
    tmp14 = cResult[3];
  }
  const obj6 = require("OnboardingHomeUtils");
  const stateFromStores = require("useStateFromStores").useStateFromStores(first, tmp13, tmp14);
  const tmpResult = require("useStateFromStores");
  const canAccessConjure = require("ConjureUtils").useCanAccessConjure(id, "useGuildActionRows");
  const tmpResult10 = require("ConjureUtils");
  const tmp16 = useIsNewMemberDefault(id.id);
  const allActionsCompleted = require("MemberActionUtils").useAllActionsCompleted(id.id);
  const tmp18 = useIsEligibleForServerOnboardingSetupProgressDefault(id.id);
  const tmpResult11 = require("MemberActionUtils");
  let str = "-DISABLED";
  if (tmp18) {
    str = "";
  }
  const tmpResult12 = require("ServerOnboardingSetupProgressExperiment");
  const canAccessMemberSafetyPage = require("MemberSafetyPermissionsUtils").useCanAccessMemberSafetyPage(id.id);
  const tmpResult13 = require("MemberSafetyPermissionsUtils");
  const features = id.features;
  const canUseGuildSpace = require("canUseGuildSpace").useCanUseGuildSpace(id.id, "useGuildActionRows");
  const hasItem = features.has(GuildFeatures.HUB);
  ({ features: features2, features: features3 } = id);
  const hasItem1 = features2.has(GuildFeatures.COMMUNITY);
  const hasItem2 = features3.has(GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY);
  const tmpResult14 = require("canUseGuildSpace");
  const tmp25 = useHasAllocateBoostPermissionDefault(id.id);
  const tmp26 = useTotalPossibleBoostCountDefault(id);
  const isGuildOfficialMessagesEnabled = require("GuildOfficialMessageUtils").useIsGuildOfficialMessagesEnabled(id.id, "useGuildActionRows");
  const tmpResult15 = require("GuildOfficialMessageUtils");
  const gameServerEnabled = require("GameServerExperiment").useGameServerEnabled(id.id, "useGuildActionRows");
  if (cResult[4] !== id.features) {
    const features4 = id.features;
    const hasItem3 = features4.has(GuildFeatures.GAME_SERVERS);
    cResult[4] = id.features;
    cResult[5] = hasItem3;
    let tmp29 = hasItem3;
  } else {
    tmp29 = cResult[5];
  }
  const tmpResult16 = require("GameServerExperiment");
  const isGameServerTabAlwaysOnEnabled = require("GameServerTabAlwaysOnExperiment").useIsGameServerTabAlwaysOnEnabled("useGuildActionRows");
  if (cResult[6] === gameServerEnabled) {
    if (cResult[7] === tmp29) {
      if (cResult[8] === isGameServerTabAlwaysOnEnabled) {
        const items2 = [];
        if (hasItem) {
          items2.push(ChannelListGuildActionRow.GUILD_HUB_HEADER_OPTIONS);
        }
        if (tmp18) {
          if (tmpResult12.useServerOnboardingSetupProgressExperiment(`useGuildActionRows${str}`).showSetupProgressRow) {
            items2.push(ChannelListGuildActionRow.GUILD_ONBOARDING_SETUP_PROGRESS);
          }
          let tmp43 = !hasItem;
          if (!hasItem) {
            tmp43 = canSeeOnboardingHome;
          }
          if (tmp43) {
            items2.push(ChannelListGuildActionRow.GUILD_HOME);
          }
          if (canUseGuildSpace) {
            items2.push(ChannelListGuildActionRow.GUILD_SPACE);
          }
          if (tmp5) {
            items2.push(ChannelListGuildActionRow.GUILD_SCHEDULED_EVENTS);
          }
          let tmp50 = !hasItem;
          if (!hasItem) {
            tmp50 = hasItem1;
          }
          if (tmp50) {
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
          if (tmp25) {
            items2.push(ChannelListGuildActionRow.GUILD_BOOSTS);
          }
          if (isGuildOfficialMessagesEnabled) {
            items2.push(ChannelListGuildActionRow.GUILD_OFFICIAL_MESSAGES);
          }
          if (gameServerEnabled) {
            if (tmp29) {
              items2.push(ChannelListGuildActionRow.GAME_SERVERS);
            } else if (null != _slicedToArray(tmpResult18.useSelectedDismissibleContent(cResult[9], undefined, true), 1)[0]) {
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
        let premiumProgressBarEnabled = id.premiumProgressBarEnabled;
        if (premiumProgressBarEnabled) {
          premiumProgressBarEnabled = tmp26 > 0;
        }
        if (premiumProgressBarEnabled) {
          items2.push(ChannelListGuildActionRow.GUILD_PREMIUM_PROGRESS_BAR);
        }
        tmpResult18 = tmp(6901);
      }
    }
  }
  if (gameServerEnabled) {
    if (isGameServerTabAlwaysOnEnabled) {
      if (!tmp29) {
        let items3 = [tmp(2036).DismissibleContent.EMPTY_GAME_SERVER_TAB];
      }
      cResult[6] = gameServerEnabled;
      cResult[7] = tmp29;
      cResult[8] = isGameServerTabAlwaysOnEnabled;
      cResult[9] = items3;
    }
  }
  items3 = [];
  const tmpResult17 = require("GameServerTabAlwaysOnExperiment");
}) : ((id) => {
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
  const canAccessConjure = require("ConjureUtils").useCanAccessConjure(id, "useGuildActionRows");
  const obj7 = require("ConjureUtils");
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
        let items2 = [tmp4(2036).DismissibleContent.EMPTY_GAME_SERVER_TAB];
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
});