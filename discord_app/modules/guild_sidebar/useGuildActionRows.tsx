// discord_app/modules/guild_sidebar/useGuildActionRows.tsx
import useIsNewMemberDefault from "../guild_onboarding_home/useIsNewMember.tsx";
import useCanSeeEventsInChannelListDefault from "../guild_scheduled_events/useCanSeeEventsInChannelList.tsx";
import useHasAllocateBoostPermissionDefault from "../premium/powerups/hooks/useHasAllocateBoostPermission.tsx";
import useTotalPossibleBoostCountDefault from "../premium/powerups/hooks/useTotalPossibleBoostCount.tsx";
import closure_3 from "../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../guild_onboarding_home/GuildOnboardingHomeSettingsStore.tsx";
import { ChannelListGuildActionRow } from "GuildSidebarConstants.tsx";
import { GuildFeatures } from "../../Constants.tsx";
import { defaultAreStatesEqual } from "../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import { useGuildShopVisibleInGuild } from "../creator_monetization/guild_shop/useGuildShopVisibleInGuild.tsx";
import { useSelectedDismissibleContent } from "../dismissible_content/hooks/useSelectedDismissibleContent.tsx";
import { experiment } from "../game_server/GameServerExperiment.tsx";
import { canReviewGuildMemberApplications } from "../guild_member_verification/canReviewGuildMemberApplications.tsx";
import { getContextForPermission } from "../guild_mod_dash_member_safety/MemberSafetyPermissionsUtils.tsx";
import { useMemberActionsForChannel } from "../guild_onboarding_home/MemberActionUtils.tsx";
import { useCanSeeOnboardingHome } from "../guild_onboarding_home/OnboardingHomeUtils.tsx";
import { computeCanEveryoneInGuildSeeRoleSubscriptions } from "../guild_role_subscriptions/useRoleSubscriptionsVisibleInGuild.tsx";
import { isGuildSpaceAdmin } from "../guild_space/canUseGuildSpace.tsx";
import { useCanManageGuildOfficialMessages } from "../messages/GuildOfficialMessageUtils.tsx";
import { apexExperiment } from "../premium/powerups/experiments/MobileBoostProgressBarExperiment.tsx";
import { getPrice } from "../slayer_storefront/SlayerStorefrontUtils.tsx";
import { vibegrationsAppIdFromTopic } from "../vibegrations/lib/VibegrationsUtils.tsx";

const require = arg1;
let result = require("set").fileFinishedImporting("modules/guild_sidebar/useGuildActionRows.tsx");

export default function useGuildActionRows(id) {
  const _require = id;
  const tmp2 = useCanSeeEventsInChannelListDefault(id.id);
  const tmp3 = _require;
  let canReviewGuildMemberApplications = require("../guild_member_verification/canReviewGuildMemberApplications.tsx").useCanReviewGuildMemberApplications(id.id);
  const obj = canReviewGuildMemberApplications;
  const showRoleSubscriptionsInChannelList = require("../guild_role_subscriptions/useRoleSubscriptionsVisibleInGuild.tsx").useShowRoleSubscriptionsInChannelList(id.id);
  const obj2 = computeCanEveryoneInGuildSeeRoleSubscriptions;
  const guildShopVisibleInGuild = require("../creator_monetization/guild_shop/useGuildShopVisibleInGuild.tsx").useGuildShopVisibleInGuild(id);
  const obj3 = useGuildShopVisibleInGuild;
  const result = require("../slayer_storefront/SlayerStorefrontUtils.tsx").hasSocialLayerStorefront(id);
  const obj4 = getPrice;
  const canSeeOnboardingHome = require("../guild_onboarding_home/OnboardingHomeUtils.tsx").useCanSeeOnboardingHome(id.id);
  const obj5 = useCanSeeOnboardingHome;
  const items = [closure_4];
  const items1 = [id.id];
  const stateFromStores = require("../../../discord_common/js/packages/flux/useStateFromStores.tsx").useStateFromStores(items, () => closure_1_4.getNewMemberActions(id.id), items1);
  const obj6 = defaultAreStatesEqual;
  const canManageVibegrations = require("../vibegrations/lib/VibegrationsUtils.tsx").useCanManageVibegrations(id, "useGuildActionRows");
  const obj7 = vibegrationsAppIdFromTopic;
  const tmp10 = useIsNewMemberDefault(id.id);
  const allActionsCompleted = require("../guild_onboarding_home/MemberActionUtils.tsx").useAllActionsCompleted(id.id);
  const obj8 = useMemberActionsForChannel;
  const canAccessMemberSafetyPage = require("../guild_mod_dash_member_safety/MemberSafetyPermissionsUtils.tsx").useCanAccessMemberSafetyPage(id.id);
  const obj9 = getContextForPermission;
  const features = id.features;
  const canUseGuildSpace = require("../guild_space/canUseGuildSpace.tsx").useCanUseGuildSpace(id, "useGuildActionRows");
  const hasItem = features.has(GuildFeatures.HUB);
  ({ features: features2, features: features3 } = id);
  const hasItem1 = features2.has(GuildFeatures.COMMUNITY);
  const hasItem2 = features3.has(GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY);
  const obj10 = isGuildSpaceAdmin;
  const tmp14 = GuildFeatures;
  const tmp18 = useHasAllocateBoostPermissionDefault(id.id);
  const mobileBoostProgressBarEnabled = require("../premium/powerups/experiments/MobileBoostProgressBarExperiment.tsx").useMobileBoostProgressBarEnabled("useGuildActionRows");
  const obj11 = apexExperiment;
  const tmp20 = useTotalPossibleBoostCountDefault(id);
  const isGuildOfficialMessagesEnabled = require("../messages/GuildOfficialMessageUtils.tsx").useIsGuildOfficialMessagesEnabled(id.id, "useGuildActionRows");
  const obj12 = useCanManageGuildOfficialMessages;
  const gameServerEnabled = require("../game_server/GameServerExperiment.tsx").useGameServerEnabled(id.id, "useGuildActionRows");
  const features4 = id.features;
  const hasItem3 = features4.has(GuildFeatures.GAME_SERVERS);
  const obj13 = experiment;
  const isGameServerTabAlwaysOnEnabled = require("../game_server/experiments/GameServerTabAlwaysOnExperiment.tsx").useIsGameServerTabAlwaysOnEnabled("useGuildActionRows");
  useSelectedDismissibleContent;
  if (gameServerEnabled) {
    if (isGameServerTabAlwaysOnEnabled) {
      if (!hasItem3) {
        let items2 = [tmp3(1377).DismissibleContent.EMPTY_GAME_SERVER_TAB];
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
              let tmp36 = !hasItem;
              if (!hasItem) {
                tmp36 = canSeeOnboardingHome;
              }
              if (tmp36) {
                items3.push(ChannelListGuildActionRow.GUILD_HOME);
              }
              if (canUseGuildSpace) {
                items3.push(ChannelListGuildActionRow.GUILD_SPACE);
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
      let tmp33 = id.premiumProgressBarEnabled && mobileBoostProgressBarEnabled;
      if (tmp33) {
        tmp33 = tmp20 > 0;
      }
      if (tmp33) {
        items3.push(ChannelListGuildActionRow.GUILD_PREMIUM_PROGRESS_BAR);
      }
    }
  }
  items2 = [];
};