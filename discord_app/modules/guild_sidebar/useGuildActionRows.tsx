// discord_app/modules/guild_sidebar/useGuildActionRows.tsx
import useIsNewMemberDefault from "../guild_onboarding_home/useIsNewMember.tsx";
import useCanSeeEventsInChannelListDefault from "../guild_scheduled_events/useCanSeeEventsInChannelList.tsx";
import useHasAllocateBoostPermissionDefault from "../premium/powerups/hooks/useHasAllocateBoostPermission.tsx";
import useTotalPossibleBoostCountDefault from "../premium/powerups/hooks/useTotalPossibleBoostCount.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import GuildOnboardingHomeSettingsStore from "../guild_onboarding_home/GuildOnboardingHomeSettingsStore.tsx";

const require = globalThis.__r;

const require = fn;
const ChannelListGuildActionRow = fn(7701).ChannelListGuildActionRow;
const GuildFeatures = fn(1084).GuildFeatures;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_sidebar/useGuildActionRows.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useGuildActionRows(id) {
      _require = id;
      const cResult = require("c").c(11);
      const obj = require("c");
      const tmp5 = useCanSeeEventsInChannelListDefault(id.id);
      let canReviewGuildMemberApplications =
        require("canReviewGuildMemberApplications").useCanReviewGuildMemberApplications(id.id);
      const obj2 = require("canReviewGuildMemberApplications");
      const showRoleSubscriptionsInChannelList =
        require("useRoleSubscriptionsVisibleInGuild").useShowRoleSubscriptionsInChannelList(id.id);
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
        const fn = function t() {
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
      const tmpResult9 = require("ConjureUtils");
      const tmp16 = useIsNewMemberDefault(id.id);
      const allActionsCompleted = require("MemberActionUtils").useAllActionsCompleted(id.id);
      const tmpResult10 = require("MemberActionUtils");
      const canAccessMemberSafetyPage = require("MemberSafetyPermissionsUtils").useCanAccessMemberSafetyPage(id.id);
      const tmpResult11 = require("MemberSafetyPermissionsUtils");
      const features = id.features;
      const canUseGuildSpace = require("canUseGuildSpace").useCanUseGuildSpace(id.id, "useGuildActionRows");
      const hasItem = features.has(GuildFeatures.HUB);
      ({ features: features2, features: features3 } = id);
      const hasItem1 = features2.has(GuildFeatures.COMMUNITY);
      const hasItem2 = features3.has(GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY);
      const tmpResult12 = require("canUseGuildSpace");
      const tmp24 = useHasAllocateBoostPermissionDefault(id.id);
      const tmp25 = useTotalPossibleBoostCountDefault(id);
      const isGuildOfficialMessagesEnabled = require("GuildOfficialMessageUtils").useIsGuildOfficialMessagesEnabled(
        id.id,
        "useGuildActionRows",
      );
      const tmpResult13 = require("GuildOfficialMessageUtils");
      const gameServerEnabled = require("GameServerExperiment").useGameServerEnabled(id.id, "useGuildActionRows");
      if (cResult[4] !== id.features) {
        const features4 = id.features;
        const hasItem3 = features4.has(GuildFeatures.GAME_SERVERS);
        cResult[4] = id.features;
        cResult[5] = hasItem3;
        let tmp28 = hasItem3;
      } else {
        tmp28 = cResult[5];
      }
      const tmpResult14 = require("GameServerExperiment");
      const isGameServerTabAlwaysOnEnabled =
        require("GameServerTabAlwaysOnExperiment").useIsGameServerTabAlwaysOnEnabled("useGuildActionRows");
      if (cResult[6] === gameServerEnabled) {
        if (cResult[7] === tmp28) {
          if (cResult[8] === isGameServerTabAlwaysOnEnabled) {
            const _Symbol = Symbol;
            if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
              const obj7 = { bypassAutoDismiss: true };
              cResult[10] = obj7;
              let tmp32 = obj7;
            } else {
              tmp32 = cResult[10];
            }
            const items2 = [];
            if (hasItem) {
              items2.push(ChannelListGuildActionRow.GUILD_HUB_HEADER_OPTIONS);
            }
            if (!allActionsCompleted) {
              if (canSeeOnboardingHome) {
                if (tmp16) {
                  if (null != stateFromStores) {
                    if (stateFromStores.length > 0) {
                      items2.push(ChannelListGuildActionRow.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR);
                    }
                    let tmp41 = !hasItem;
                    if (!hasItem) {
                      tmp41 = canSeeOnboardingHome;
                    }
                    if (tmp41) {
                      items2.push(ChannelListGuildActionRow.GUILD_HOME);
                    }
                    if (canUseGuildSpace) {
                      items2.push(ChannelListGuildActionRow.GUILD_SPACE);
                    }
                    if (tmp5) {
                      items2.push(ChannelListGuildActionRow.GUILD_SCHEDULED_EVENTS);
                    }
                    let tmp48 = !hasItem;
                    if (!hasItem) {
                      tmp48 = hasItem1;
                    }
                    if (tmp48) {
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
                      canReviewGuildMemberApplications = features5.has(
                        GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL,
                      );
                    }
                    if (canReviewGuildMemberApplications) {
                      items2.push(ChannelListGuildActionRow.GUILD_MOD_DASH_MEMBER_SAFETY);
                    }
                    if (tmp24) {
                      items2.push(ChannelListGuildActionRow.GUILD_BOOSTS);
                    }
                    if (isGuildOfficialMessagesEnabled) {
                      items2.push(ChannelListGuildActionRow.GUILD_OFFICIAL_MESSAGES);
                    }
                    if (gameServerEnabled) {
                      if (tmp28) {
                        items2.push(ChannelListGuildActionRow.GAME_SERVERS);
                      } else if (
                        null != _slicedToArray(tmpResult16.useSelectedDismissibleContent(cResult[9], tmp32), 1)[0]
                      ) {
                        items2.push(ChannelListGuildActionRow.GAME_SERVERS_EMPTY);
                      }
                    }
                    if (canAccessConjure) {
                      items2.push(ChannelListGuildActionRow.GUILD_CONJURE);
                    }
                    return items2;
                  }
                }
              }
            }
            let premiumProgressBarEnabled = id.premiumProgressBarEnabled;
            if (premiumProgressBarEnabled) {
              premiumProgressBarEnabled = tmp25 > 0;
            }
            if (premiumProgressBarEnabled) {
              items2.push(ChannelListGuildActionRow.GUILD_PREMIUM_PROGRESS_BAR);
            }
            tmpResult16 = tmp(7555);
          }
        }
      }
      if (gameServerEnabled) {
        if (isGameServerTabAlwaysOnEnabled) {
          if (!tmp28) {
            let items3 = [tmp(4841).DismissibleContent.EMPTY_GAME_SERVER_TAB];
          }
          cResult[6] = gameServerEnabled;
          cResult[7] = tmp28;
          cResult[8] = isGameServerTabAlwaysOnEnabled;
          cResult[9] = items3;
        }
      }
      items3 = [];
      const tmpResult15 = require("GameServerTabAlwaysOnExperiment");
    }
  : function useGuildActionRows(id) {
      _require = id;
      const tmp2 = useCanSeeEventsInChannelListDefault(id.id);
      const tmp3 = _require;
      let canReviewGuildMemberApplications =
        require("canReviewGuildMemberApplications").useCanReviewGuildMemberApplications(id.id);
      const obj = require("canReviewGuildMemberApplications");
      const showRoleSubscriptionsInChannelList =
        require("useRoleSubscriptionsVisibleInGuild").useShowRoleSubscriptionsInChannelList(id.id);
      const obj2 = require("useRoleSubscriptionsVisibleInGuild");
      const guildShopVisibleInGuild = require("useGuildShopVisibleInGuild").useGuildShopVisibleInGuild(id);
      const obj3 = require("useGuildShopVisibleInGuild");
      const result = require("SlayerStorefrontUtils").hasSocialLayerStorefront(id);
      const obj4 = require("SlayerStorefrontUtils");
      const canSeeOnboardingHome = require("OnboardingHomeUtils").useCanSeeOnboardingHome(id.id);
      const obj5 = require("OnboardingHomeUtils");
      const items = [GuildOnboardingHomeSettingsStore];
      const items1 = [id.id];
      const stateFromStores = require("useStateFromStores").useStateFromStores(
        items,
        () => GuildOnboardingHomeSettingsStore.getNewMemberActions(id.id),
        items1,
      );
      const obj6 = require("useStateFromStores");
      const canAccessConjure = require("ConjureUtils").useCanAccessConjure(id, "useGuildActionRows");
      const obj7 = require("ConjureUtils");
      const tmp10 = useIsNewMemberDefault(id.id);
      const allActionsCompleted = require("MemberActionUtils").useAllActionsCompleted(id.id);
      const obj8 = require("MemberActionUtils");
      const canAccessMemberSafetyPage = require("MemberSafetyPermissionsUtils").useCanAccessMemberSafetyPage(id.id);
      const obj9 = require("MemberSafetyPermissionsUtils");
      const features = id.features;
      const canUseGuildSpace = require("canUseGuildSpace").useCanUseGuildSpace(id.id, "useGuildActionRows");
      const hasItem = features.has(GuildFeatures.HUB);
      ({ features: features2, features: features3 } = id);
      const hasItem1 = features2.has(GuildFeatures.COMMUNITY);
      const hasItem2 = features3.has(GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY);
      const obj10 = require("canUseGuildSpace");
      const tmp18 = useHasAllocateBoostPermissionDefault(id.id);
      const tmp19 = useTotalPossibleBoostCountDefault(id);
      const isGuildOfficialMessagesEnabled = require("GuildOfficialMessageUtils").useIsGuildOfficialMessagesEnabled(
        id.id,
        "useGuildActionRows",
      );
      const obj11 = require("GuildOfficialMessageUtils");
      const gameServerEnabled = require("GameServerExperiment").useGameServerEnabled(id.id, "useGuildActionRows");
      const features4 = id.features;
      const hasItem3 = features4.has(GuildFeatures.GAME_SERVERS);
      const obj12 = require("GameServerExperiment");
      const isGameServerTabAlwaysOnEnabled =
        require("GameServerTabAlwaysOnExperiment").useIsGameServerTabAlwaysOnEnabled("useGuildActionRows");
      require("useSelectedDismissibleContent");
      if (gameServerEnabled) {
        if (isGameServerTabAlwaysOnEnabled) {
          if (!hasItem3) {
            let items2 = [tmp3(4841).DismissibleContent.EMPTY_GAME_SERVER_TAB];
          }
          const items3 = [];
          if (hasItem) {
            items3.push(ChannelListGuildActionRow.GUILD_HUB_HEADER_OPTIONS);
          }
          if (!allActionsCompleted) {
            if (canSeeOnboardingHome) {
              if (tmp10) {
                if (null != stateFromStores) {
                  if (stateFromStores.length > 0) {
                    items3.push(ChannelListGuildActionRow.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR);
                  }
                  let tmp34 = !hasItem;
                  if (!hasItem) {
                    tmp34 = canSeeOnboardingHome;
                  }
                  if (tmp34) {
                    items3.push(ChannelListGuildActionRow.GUILD_HOME);
                  }
                  if (canUseGuildSpace) {
                    items3.push(ChannelListGuildActionRow.GUILD_SPACE);
                  }
                  if (tmp2) {
                    items3.push(ChannelListGuildActionRow.GUILD_SCHEDULED_EVENTS);
                  }
                  let tmp41 = !hasItem;
                  if (!hasItem) {
                    tmp41 = hasItem1;
                  }
                  if (tmp41) {
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
                  if (tmp18) {
                    items3.push(ChannelListGuildActionRow.GUILD_BOOSTS);
                  }
                  if (isGuildOfficialMessagesEnabled) {
                    items3.push(ChannelListGuildActionRow.GUILD_OFFICIAL_MESSAGES);
                  }
                  if (gameServerEnabled) {
                    if (hasItem3) {
                      items3.push(ChannelListGuildActionRow.GAME_SERVERS);
                    } else if (null != _slicedToArray(tmp25(items2, { bypassAutoDismiss: true }), 1)[0]) {
                      items3.push(ChannelListGuildActionRow.GAME_SERVERS_EMPTY);
                    }
                  }
                  if (canAccessConjure) {
                    items3.push(ChannelListGuildActionRow.GUILD_CONJURE);
                  }
                  return items3;
                }
              }
            }
          }
          let premiumProgressBarEnabled = id.premiumProgressBarEnabled;
          if (premiumProgressBarEnabled) {
            premiumProgressBarEnabled = tmp19 > 0;
          }
          if (premiumProgressBarEnabled) {
            items3.push(ChannelListGuildActionRow.GUILD_PREMIUM_PROGRESS_BAR);
          }
        }
      }
      items2 = [];
      const obj13 = require("GameServerTabAlwaysOnExperiment");
    };
