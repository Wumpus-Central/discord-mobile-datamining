// discord_app/modules/guild_sidebar/useGuildActionRows.tsx
import useIsNewMemberDefault from "../guild_onboarding_home/useIsNewMember.tsx";
import useCanSeeEventsInChannelListDefault from "../guild_scheduled_events/useCanSeeEventsInChannelList.tsx";
import useHasAllocateBoostPermissionDefault from "../premium/powerups/hooks/useHasAllocateBoostPermission.tsx";
import useTotalPossibleBoostCountDefault from "../premium/powerups/hooks/useTotalPossibleBoostCount.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import GuildOnboardingHomeSettingsStore from "../guild_onboarding_home/GuildOnboardingHomeSettingsStore.tsx";

const require = fn;
const ChannelListGuildActionRow = fn(7534).ChannelListGuildActionRow;
const GuildFeatures = fn(1074).GuildFeatures;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_sidebar/useGuildActionRows.tsx");

export default function useGuildActionRows(id) {
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
  const canAccessVibegrations = require("VibegrationsUtils").useCanAccessVibegrations(id, "useGuildActionRows");
  const obj7 = require("VibegrationsUtils");
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
  const tmp14 = GuildFeatures;
  const tmp18 = useHasAllocateBoostPermissionDefault(id.id);
  const mobileBoostProgressBarEnabled = require("MobileBoostProgressBarExperiment").useMobileBoostProgressBarEnabled(
    "useGuildActionRows",
  );
  const obj11 = require("MobileBoostProgressBarExperiment");
  const tmp20 = useTotalPossibleBoostCountDefault(id);
  const isGuildOfficialMessagesEnabled = require("GuildOfficialMessageUtils").useIsGuildOfficialMessagesEnabled(
    id.id,
    "useGuildActionRows",
  );
  const obj12 = require("GuildOfficialMessageUtils");
  const gameServerEnabled = require("GameServerExperiment").useGameServerEnabled(id.id, "useGuildActionRows");
  const features4 = id.features;
  const hasItem3 = features4.has(GuildFeatures.GAME_SERVERS);
  const obj13 = require("GameServerExperiment");
  const isGameServerTabAlwaysOnEnabled = require("GameServerTabAlwaysOnExperiment").useIsGameServerTabAlwaysOnEnabled(
    "useGuildActionRows",
  );
  require("useSelectedDismissibleContent");
  if (gameServerEnabled) {
    if (isGameServerTabAlwaysOnEnabled) {
      if (!hasItem3) {
        let items2 = [tmp3(1943).DismissibleContent.EMPTY_GAME_SERVER_TAB];
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
                } else if (null != _slicedToArray(tmp26(items2, undefined, true), 1)[0]) {
                  items3.push(ChannelListGuildActionRow.GAME_SERVERS_EMPTY);
                }
              }
              if (canAccessVibegrations) {
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
}
