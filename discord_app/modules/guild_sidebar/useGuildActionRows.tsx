// === Module 15585: useGuildActionRows ===

// Module 15585 (useGuildActionRows)
import useIsNewMemberDefault from "useIsNewMember" /* 5289 */;
import useCanSeeEventsInChannelListDefault from "useCanSeeEventsInChannelList" /* 11595 */;
import useHasAllocateBoostPermissionDefault from "useHasAllocateBoostPermission" /* 11731 */;
import useTotalPossibleBoostCountDefault from "useTotalPossibleBoostCount" /* 15548 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "handleSettingsLoadSuccess" /* 5053 */;
import { ChannelListGuildActionRow } from "ChannelListGuildActionRow" /* 5286 */;
import { GuildFeatures } from "ME" /* 676 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/guild_sidebar/useGuildActionRows.tsx");

export default function useGuildActionRows(id) {
  const _require = id;
  const tmp2 = useCanSeeEventsInChannelListDefault(id.id);
  const tmp3 = _require;
  let canReviewGuildMemberApplications = _require(7268).useCanReviewGuildMemberApplications(id.id);
  const obj = _require(7268);
  const showRoleSubscriptionsInChannelList = _require(7254).useShowRoleSubscriptionsInChannelList(id.id);
  const obj2 = _require(7254);
  const guildShopVisibleInGuild = _require(7266).useGuildShopVisibleInGuild(id);
  const obj3 = _require(7266);
  const result = _require(7238).hasSocialLayerStorefront(id);
  const obj4 = _require(7238);
  const canSeeOnboardingHome = _require(5288).useCanSeeOnboardingHome(id.id);
  const obj5 = _require(5288);
  const items = [closure_4];
  const items1 = [id.id];
  const stateFromStores = _require(647).useStateFromStores(items, () => closure_1_4.getNewMemberActions(id.id), items1);
  const obj6 = _require(647);
  const canManageVibegrations = _require(7252).useCanManageVibegrations(id, "useGuildActionRows");
  const obj7 = _require(7252);
  const tmp10 = useIsNewMemberDefault(id.id);
  const allActionsCompleted = _require(11504).useAllActionsCompleted(id.id);
  const obj8 = _require(11504);
  const canAccessMemberSafetyPage = _require(7269).useCanAccessMemberSafetyPage(id.id);
  const obj9 = _require(7269);
  const features = id.features;
  const canUseGuildSpace = _require(7236).useCanUseGuildSpace(id, "useGuildActionRows");
  const hasItem = features.has(GuildFeatures.HUB);
  ({ features: features2, features: features3 } = id);
  const hasItem1 = features2.has(GuildFeatures.COMMUNITY);
  const hasItem2 = features3.has(GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY);
  const obj10 = _require(7236);
  const tmp14 = GuildFeatures;
  const tmp18 = useHasAllocateBoostPermissionDefault(id.id);
  const mobileBoostProgressBarEnabled = _require(15482).useMobileBoostProgressBarEnabled("useGuildActionRows");
  const obj11 = _require(15482);
  const tmp20 = useTotalPossibleBoostCountDefault(id);
  const isGuildOfficialMessagesEnabled = _require(7270).useIsGuildOfficialMessagesEnabled(id.id, "useGuildActionRows");
  const obj12 = _require(7270);
  const gameServerEnabled = _require(4289).useGameServerEnabled(id.id, "useGuildActionRows");
  const features4 = id.features;
  const hasItem3 = features4.has(GuildFeatures.GAME_SERVERS);
  const obj13 = _require(4289);
  const isGameServerTabAlwaysOnEnabled = _require(15586).useIsGameServerTabAlwaysOnEnabled("useGuildActionRows");
  _require(7404);
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