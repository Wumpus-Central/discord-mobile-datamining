// discord_app/modules/guild_role_subscriptions/native/system_message/GuildRoleSubscriptionSystemMessageUtils.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import ME from "../../../../Constants.tsx";
import collectGuildAnalyticsMetadataDefault from "../../../app_analytics/AppAnalyticsUtils.tsx";
import trackInviteDefault from "../../../../actions/MessageActionCreators.tsx";
import identityHook from "../../GuildRoleSubscriptionSystemMessageUtils.tsx";

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