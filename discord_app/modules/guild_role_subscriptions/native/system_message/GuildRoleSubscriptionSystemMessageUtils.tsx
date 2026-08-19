// === Module 11007: handleRoleSubscriptionPurchaseSystemMessageCtaClicked ===

// Module 11007 (handleRoleSubscriptionPurchaseSystemMessageCtaClicked)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import collectGuildAnalyticsMetadataDefault from "collectGuildAnalyticsMetadata" /* 5042 */;
import trackInviteDefault from "trackInvite" /* 7427 */;
import identityHook from "identityHook" /* 8211 */;

const AnalyticEvents = ME.AnalyticEvents;
const result = obj132.fileFinishedImporting("modules/guild_role_subscriptions/native/system_message/GuildRoleSubscriptionSystemMessageUtils.tsx");

export const handleRoleSubscriptionPurchaseSystemMessageCtaClicked = function handleRoleSubscriptionPurchaseSystemMessageCtaClicked(messageChannel, message, stickerId) {
  let obj = { channel: messageChannel, message, shouldMention: true, showMentionToggle: true };
  obj.sendGreetMessage(messageChannel.id, stickerId, trackInviteDefault.getSendMessageOptionsForReply(obj));
  const roleSubscriptionPurchaseSystemMessageEventProperties = identityHook.getRoleSubscriptionPurchaseSystemMessageEventProperties(messageChannel, message);
  obj = {};
  const merged = Object.assign(roleSubscriptionPurchaseSystemMessageEventProperties);
  obj.sticker_id = stickerId;
  collectGuildAnalyticsMetadataDefault.trackWithMetadata(AnalyticEvents.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CTA_CLICKED, obj);
};