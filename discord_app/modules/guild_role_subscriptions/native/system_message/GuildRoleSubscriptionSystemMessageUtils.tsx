// === Module 11828: system_message/GuildRoleSubscriptionSystemMessageUtils ===

// Module 11828 (system_message/GuildRoleSubscriptionSystemMessageUtils)
import Constants from "Constants" /* 1074 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 4740 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7456 */;
import GuildRoleSubscriptionSystemMessageUtils from "GuildRoleSubscriptionSystemMessageUtils" /* 7992 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/system_message/GuildRoleSubscriptionSystemMessageUtils.tsx");

export const handleRoleSubscriptionPurchaseSystemMessageCtaClicked = function handleRoleSubscriptionPurchaseSystemMessageCtaClicked(messageChannel, message, stickerId) {
  let obj = { channel: messageChannel, message, shouldMention: true, showMentionToggle: true };
  obj.sendGreetMessage(messageChannel.id, stickerId, MessageActionCreatorsDefault.getSendMessageOptionsForReply(obj));
  const roleSubscriptionPurchaseSystemMessageEventProperties = GuildRoleSubscriptionSystemMessageUtils.getRoleSubscriptionPurchaseSystemMessageEventProperties(messageChannel, message);
  obj = {};
  const merged = Object.assign(roleSubscriptionPurchaseSystemMessageEventProperties);
  obj.sticker_id = stickerId;
  AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CTA_CLICKED, obj);
};