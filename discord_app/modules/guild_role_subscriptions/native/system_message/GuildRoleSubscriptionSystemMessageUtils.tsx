// discord_app/modules/guild_role_subscriptions/native/system_message/GuildRoleSubscriptionSystemMessageUtils.tsx
import { AnalyticEvents } from "ME";

const result = require("identityHook").fileFinishedImporting("modules/guild_role_subscriptions/native/system_message/GuildRoleSubscriptionSystemMessageUtils.tsx");

export const handleRoleSubscriptionPurchaseSystemMessageCtaClicked = function handleRoleSubscriptionPurchaseSystemMessageCtaClicked(messageChannel, message, stickerId) {
  let obj = require("../../../../actions/MessageActionCreators.tsx");
  obj = { channel: messageChannel, message, shouldMention: true, showMentionToggle: true };
  obj.sendGreetMessage(messageChannel.id, stickerId, require("../../../../actions/MessageActionCreators.tsx").getSendMessageOptionsForReply(obj));
  const obj2 = require("../../../../actions/MessageActionCreators.tsx");
  const roleSubscriptionPurchaseSystemMessageEventProperties = require("../../GuildRoleSubscriptionSystemMessageUtils.tsx") /* identityHook */.getRoleSubscriptionPurchaseSystemMessageEventProperties(messageChannel, message);
  const obj4 = require("../../GuildRoleSubscriptionSystemMessageUtils.tsx") /* identityHook */;
  obj = {};
  const merged = Object.assign(roleSubscriptionPurchaseSystemMessageEventProperties);
  obj.sticker_id = stickerId;
  require("../../../app_analytics/AppAnalyticsUtils.tsx").trackWithMetadata(AnalyticEvents.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CTA_CLICKED, obj);
};