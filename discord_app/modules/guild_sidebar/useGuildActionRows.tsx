// === Module 15520: useGuildActionRows ===

// Module 15520 (useGuildActionRows)
import useIsNewMemberDefault from "useIsNewMember" /* 5284 */;
import useCanSeeEventsInChannelListDefault from "useCanSeeEventsInChannelList" /* 11546 */;
import useHasAllocateBoostPermissionDefault from "useHasAllocateBoostPermission" /* 11682 */;
import useTotalPossibleBoostCountDefault from "useTotalPossibleBoostCount" /* 15483 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import handleSettingsLoadSuccess from "handleSettingsLoadSuccess" /* 5048 */;
import { ChannelListGuildActionRow } from "ChannelListGuildActionRow" /* 5281 */;
import { GuildFeatures } from "ME" /* 676 */;

const require = fn;
let result = require("obj132").fileFinishedImporting("modules/guild_sidebar/useGuildActionRows.tsx");

export default function useGuildActionRows(id) {
  const _require = id;
  const tmp2 = useCanSeeEventsInChannelListDefault(id.id);
  const tmp3 = _require;
  let canReviewGuildMemberApplications = _require(7230).useCanReviewGuildMemberApplications(id.id);
  const obj = _require(7230);
  const showRoleSubscriptionsInChannelList = _require(7216).useShowRoleSubscriptionsInChannelList(id.id);
  const obj2 = _require(7216);
  const guildShopVisibleInGuild = _require(7228).useGuildShopVisibleInGuild(id);
  const obj3 = _require(7228);
  const result = _require(7200).hasSocialLayerStorefront(id);
  const obj4 = _require(7200);
  const canSeeOnboardingHome = _require(5283).useCanSeeOnboardingHome(id.id);
  const obj5 = _require(5283);
  const items = [closure_4];
  const items1 = [id.id];
  const stateFromStores = _require(647).useStateFromStores(items, () => closure_1_4.getNewMemberActions(id.id), items1);
  const obj6 = _require(647);
  const canManageVibegrations = _require(7214).useCanManageVibegrations(id, "useGuildActionRows");
  const obj7 = _require(7214);
  const tmp10 = useIsNewMemberDefault(id.id);
  const allActionsCompleted = _require(11455).useAllActionsCompleted(id.id);
  const obj8 = _require(11455);
  const canAccessMemberSafetyPage = _require(7231).useCanAccessMemberSafetyPage(id.id);
  const obj9 = _require(7231);
  const features = id.features;
  const canUseGuildSpace = _require(7198).useCanUseGuildSpace(id, "useGuildActionRows");
  const hasItem = features.has(GuildFeatures.HUB);
  ({ features: features2, features: features3 } = id);
  const hasItem1 = features2.has(GuildFeatures.COMMUNITY);
  const hasItem2 = features3.has(GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY);
  const obj10 = _require(7198);
  const tmp18 = useHasAllocateBoostPermissionDefault(id.id);
  const mobileBoostProgressBarEnabled = _require(15418).useMobileBoostProgressBarEnabled("useGuildActionRows");
  const obj11 = _require(15418);
  const tmp20 = useTotalPossibleBoostCountDefault(id);
  const isGuildOfficialMessagesEnabled = _require(7232).useIsGuildOfficialMessagesEnabled(id.id, "useGuildActionRows");
  const obj12 = _require(7232);
  const gameServerEnabled = _require(4285).useGameServerEnabled(id.id, "useGuildActionRows");
  const features4 = id.features;
  const hasItem3 = features4.has(GuildFeatures.GAME_SERVERS);
  const obj13 = _require(4285);
  const isGameServerTabAlwaysOnEnabled = _require(15521).useIsGameServerTabAlwaysOnEnabled("useGuildActionRows");
  _require(7366);
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
  const obj14 = _require(15521);
};