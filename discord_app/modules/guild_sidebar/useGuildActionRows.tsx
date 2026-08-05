// discord_app/modules/guild_sidebar/useGuildActionRows.tsx
import _slicedToArray from "_slicedToArray";
import handleSettingsLoadSuccess from "handleSettingsLoadSuccess";
import { ChannelListGuildActionRow } from "ChannelListGuildActionRow";
import { GuildFeatures } from "ME";

const require = arg1;
let result = require("ChannelListGuildActionRow").fileFinishedImporting("modules/guild_sidebar/useGuildActionRows.tsx");

export default function useGuildActionRows(id) {
  let features2;
  let features3;
  const _require = id;
  const tmp2 = require("../guild_scheduled_events/useCanSeeEventsInChannelList.tsx")(id.id);
  const tmp3 = _require;
  let canReviewGuildMemberApplications = _require("../guild_member_verification/canReviewGuildMemberApplications.tsx").useCanReviewGuildMemberApplications(id.id);
  const obj = _require("../guild_member_verification/canReviewGuildMemberApplications.tsx");
  const showRoleSubscriptionsInChannelList = _require("../guild_role_subscriptions/useRoleSubscriptionsVisibleInGuild.tsx").useShowRoleSubscriptionsInChannelList(id.id);
  const obj2 = _require("../guild_role_subscriptions/useRoleSubscriptionsVisibleInGuild.tsx");
  const guildShopVisibleInGuild = _require("../creator_monetization/guild_shop/useGuildShopVisibleInGuild.tsx").useGuildShopVisibleInGuild(id);
  const obj3 = _require("../creator_monetization/guild_shop/useGuildShopVisibleInGuild.tsx");
  const result = _require("../slayer_storefront/SlayerStorefrontUtils.tsx").hasSocialLayerStorefront(id);
  const obj4 = _require("../slayer_storefront/SlayerStorefrontUtils.tsx");
  const canSeeOnboardingHome = _require("../guild_onboarding_home/OnboardingHomeUtils.tsx").useCanSeeOnboardingHome(id.id);
  const obj5 = _require("../guild_onboarding_home/OnboardingHomeUtils.tsx");
  const items = [handleSettingsLoadSuccess];
  const items1 = [id.id];
  const stateFromStores = _require("../../../discord_common/js/packages/flux/useStateFromStores.tsx").useStateFromStores(items, () => outer1_4.getNewMemberActions(id.id), items1);
  const obj6 = _require("../../../discord_common/js/packages/flux/useStateFromStores.tsx");
  const canManageVibegrations = _require("../vibegrations/lib/VibegrationsUtils.tsx").useCanManageVibegrations(id, "useGuildActionRows");
  const obj7 = _require("../vibegrations/lib/VibegrationsUtils.tsx");
  const tmp10 = require("../guild_onboarding_home/useIsNewMember.tsx")(id.id);
  const allActionsCompleted = _require("../guild_onboarding_home/MemberActionUtils.tsx").useAllActionsCompleted(id.id);
  const obj8 = _require("../guild_onboarding_home/MemberActionUtils.tsx");
  const canAccessMemberSafetyPage = _require("../guild_mod_dash_member_safety/MemberSafetyPermissionsUtils.tsx").useCanAccessMemberSafetyPage(id.id);
  const obj9 = _require("../guild_mod_dash_member_safety/MemberSafetyPermissionsUtils.tsx");
  const features = id.features;
  const canUseGuildSpace = _require("../guild_space/canUseGuildSpace.tsx").useCanUseGuildSpace(id, "useGuildActionRows");
  const hasItem = features.has(GuildFeatures.HUB);
  ({ features: features2, features: features3 } = id);
  const hasItem1 = features2.has(GuildFeatures.COMMUNITY);
  const hasItem2 = features3.has(GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY);
  const obj10 = _require("../guild_space/canUseGuildSpace.tsx");
  const tmp14 = GuildFeatures;
  const tmp18 = require("../premium/powerups/hooks/useHasAllocateBoostPermission.tsx")(id.id);
  const mobileBoostProgressBarEnabled = _require("../premium/powerups/experiments/MobileBoostProgressBarExperiment.tsx").useMobileBoostProgressBarEnabled("useGuildActionRows");
  const obj11 = _require("../premium/powerups/experiments/MobileBoostProgressBarExperiment.tsx");
  const tmp20 = require("../premium/powerups/hooks/useTotalPossibleBoostCount.tsx")(id);
  const isGuildOfficialMessagesEnabled = _require("../messages/GuildOfficialMessageUtils.tsx").useIsGuildOfficialMessagesEnabled(id.id, "useGuildActionRows");
  const obj12 = _require("../messages/GuildOfficialMessageUtils.tsx");
  const gameServerEnabled = _require("../game_server/GameServerExperiment.tsx").useGameServerEnabled(id.id, "useGuildActionRows");
  const features4 = id.features;
  const hasItem3 = features4.has(GuildFeatures.GAME_SERVERS);
  const obj13 = _require("../game_server/GameServerExperiment.tsx");
  const isGameServerTabAlwaysOnEnabled = _require("../game_server/experiments/GameServerTabAlwaysOnExperiment.tsx").useIsGameServerTabAlwaysOnEnabled("useGuildActionRows");
  _require("../dismissible_content/hooks/useSelectedDismissibleContent.tsx");
  if (gameServerEnabled) {
    if (isGameServerTabAlwaysOnEnabled) {
      if (!hasItem3) {
        let items2 = [tmp3(1358).DismissibleContent.EMPTY_GAME_SERVER_TAB];
      }
      const items3 = [];
      if (canUseGuildSpace) {
        items3.push(ChannelListGuildActionRow.GUILD_SPACE);
      }
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
              let tmp38 = !hasItem;
              if (!hasItem) {
                tmp38 = canSeeOnboardingHome;
              }
              if (tmp38) {
                items3.push(ChannelListGuildActionRow.GUILD_HOME);
              }
              if (tmp2) {
                items3.push(ChannelListGuildActionRow.GUILD_SCHEDULED_EVENTS);
              }
              let tmp43 = !hasItem;
              if (!hasItem) {
                tmp43 = hasItem1;
              }
              if (tmp43) {
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
                canReviewGuildMemberApplications = features5.has(tmp14.MEMBER_VERIFICATION_MANUAL_APPROVAL);
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
                } else if (null != callback(tmp26(items2, undefined, true), 1)[0]) {
                  items3.push(ChannelListGuildActionRow.GAME_SERVERS_EMPTY);
                }
              }
              if (canManageVibegrations) {
                items3.push(ChannelListGuildActionRow.GUILD_VIBEGRATIONS);
              }
              return items3;
            }
          }
        }
      }
      let tmp35 = id.premiumProgressBarEnabled && mobileBoostProgressBarEnabled;
      if (tmp35) {
        tmp35 = tmp20 > 0;
      }
      if (tmp35) {
        items3.push(ChannelListGuildActionRow.GUILD_PREMIUM_PROGRESS_BAR);
      }
    }
  }
  items2 = [];
};