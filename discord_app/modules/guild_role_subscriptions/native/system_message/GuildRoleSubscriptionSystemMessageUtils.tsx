// === Module 11434: system_message/GuildRoleSubscriptionSystemMessageUtils ===

// Module 11434 (system_message/GuildRoleSubscriptionSystemMessageUtils)
import Constants from "Constants" /* 1085 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5105 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7167 */;
import GuildRoleSubscriptionSystemMessageUtils from "GuildRoleSubscriptionSystemMessageUtils" /* 7983 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/system_message/GuildRoleSubscriptionSystemMessageUtils.tsx");

export const handleRoleSubscriptionPurchaseSystemMessageCtaClicked = function handleRoleSubscriptionPurchaseSystemMessageCtaClicked(messageChannel, message, stickerId) {
  const obj = MessageActionCreatorsDefault;
  obj.sendGreetMessage(messageChannel.id, stickerId, MessageActionCreatorsDefault.getSendMessageOptionsForReply({ channel: messageChannel, message, shouldMention: true, showMentionToggle: true }));
  const obj3 = { channel: messageChannel, message, shouldMention: true, showMentionToggle: true };
  const roleSubscriptionPurchaseSystemMessageEventProperties = GuildRoleSubscriptionSystemMessageUtils.getRoleSubscriptionPurchaseSystemMessageEventProperties(messageChannel, message);
  const obj6 = {};
  const merged = Object.assign(roleSubscriptionPurchaseSystemMessageEventProperties);
  obj6.sticker_id = stickerId;
  AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CTA_CLICKED, obj6);
};