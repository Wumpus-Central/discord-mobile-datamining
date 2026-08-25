// === Module 11388: handleRoleSubscriptionPurchaseSystemMessageCtaClicked ===

// Module 11388 (handleRoleSubscriptionPurchaseSystemMessageCtaClicked)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import collectGuildAnalyticsMetadataDefault from "collectGuildAnalyticsMetadata" /* 4588 */;
import trackInviteDefault from "trackInvite" /* 7063 */;
import identityHook from "identityHook" /* 8252 */;

const AnalyticEvents = ME.AnalyticEvents;
const result = set.fileFinishedImporting("modules/guild_role_subscriptions/native/system_message/GuildRoleSubscriptionSystemMessageUtils.tsx");

export const handleRoleSubscriptionPurchaseSystemMessageCtaClicked = function handleRoleSubscriptionPurchaseSystemMessageCtaClicked(messageChannel, message, stickerId) {
  let obj = trackInviteDefault;
  obj = { channel: messageChannel, message, shouldMention: true, showMentionToggle: true };
  obj.sendGreetMessage(messageChannel.id, stickerId, trackInviteDefault.getSendMessageOptionsForReply(obj));
  const obj2 = trackInviteDefault;
  const roleSubscriptionPurchaseSystemMessageEventProperties = identityHook.getRoleSubscriptionPurchaseSystemMessageEventProperties(messageChannel, message);
  const obj4 = identityHook;
  obj = {};
  const merged = Object.assign(roleSubscriptionPurchaseSystemMessageEventProperties);
  obj.sticker_id = stickerId;
  collectGuildAnalyticsMetadataDefault.trackWithMetadata(AnalyticEvents.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CTA_CLICKED, obj);
};