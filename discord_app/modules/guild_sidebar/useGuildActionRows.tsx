// === Module 16079: useGuildActionRows ===

// Module 16079 (useGuildActionRows)
import useIsNewMemberDefault from "useIsNewMember" /* 6078 */;
import useCanSeeEventsInChannelListDefault from "useCanSeeEventsInChannelList" /* 12164 */;
import useHasAllocateBoostPermissionDefault from "useHasAllocateBoostPermission" /* 12301 */;
import useTotalPossibleBoostCountDefault from "useTotalPossibleBoostCount" /* 16042 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "handleSettingsLoadSuccess" /* 4707 */;
import { ChannelListGuildActionRow } from "ChannelListGuildActionRow" /* 7288 */;
import { GuildFeatures } from "ME" /* 673 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/guild_sidebar/useGuildActionRows.tsx");

export default function useGuildActionRows(id) {
  const _require = id;
  const tmp2 = useCanSeeEventsInChannelListDefault(id.id);
  const tmp3 = _require;
  let canReviewGuildMemberApplications = _require(6119).useCanReviewGuildMemberApplications(id.id);
  const obj = _require(6119);
  const showRoleSubscriptionsInChannelList = _require(6105).useShowRoleSubscriptionsInChannelList(id.id);
  const obj2 = _require(6105);
  const guildShopVisibleInGuild = _require(6117).useGuildShopVisibleInGuild(id);
  const obj3 = _require(6117);
  const result = _require(6081).hasSocialLayerStorefront(id);
  const obj4 = _require(6081);
  const canSeeOnboardingHome = _require(6077).useCanSeeOnboardingHome(id.id);
  const obj5 = _require(6077);
  const items = [closure_4];
  const items1 = [id.id];
  const stateFromStores = _require(644).useStateFromStores(items, () => closure_1_4.getNewMemberActions(id.id), items1);
  const obj6 = _require(644);
  const canAccessVibegrations = _require(6102).useCanAccessVibegrations(id, "useGuildActionRows");
  const obj7 = _require(6102);
  const tmp10 = useIsNewMemberDefault(id.id);
  const allActionsCompleted = _require(12078).useAllActionsCompleted(id.id);
  const obj8 = _require(12078);
  const canAccessMemberSafetyPage = _require(6120).useCanAccessMemberSafetyPage(id.id);
  const obj9 = _require(6120);
  const features = id.features;
  const canUseGuildSpace = _require(6079).useCanUseGuildSpace(id.id, "useGuildActionRows");
  const hasItem = features.has(GuildFeatures.HUB);
  ({ features: features2, features: features3 } = id);
  const hasItem1 = features2.has(GuildFeatures.COMMUNITY);
  const hasItem2 = features3.has(GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY);
  const obj10 = _require(6079);
  const tmp14 = GuildFeatures;
  const tmp18 = useHasAllocateBoostPermissionDefault(id.id);
  const mobileBoostProgressBarEnabled = _require(15977).useMobileBoostProgressBarEnabled("useGuildActionRows");
  const obj11 = _require(15977);
  const tmp20 = useTotalPossibleBoostCountDefault(id);
  const isGuildOfficialMessagesEnabled = _require(6122).useIsGuildOfficialMessagesEnabled(id.id, "useGuildActionRows");
  const obj12 = _require(6122);
  const gameServerEnabled = _require(4388).useGameServerEnabled(id.id, "useGuildActionRows");
  const features4 = id.features;
  const hasItem3 = features4.has(GuildFeatures.GAME_SERVERS);
  const obj13 = _require(4388);
  const isGameServerTabAlwaysOnEnabled = _require(16080).useIsGameServerTabAlwaysOnEnabled("useGuildActionRows");
  _require(6260);
  if (gameServerEnabled) {
    if (isGameServerTabAlwaysOnEnabled) {
      if (!hasItem3) {
        let items2 = [tmp3(1372).DismissibleContent.EMPTY_GAME_SERVER_TAB];
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
};