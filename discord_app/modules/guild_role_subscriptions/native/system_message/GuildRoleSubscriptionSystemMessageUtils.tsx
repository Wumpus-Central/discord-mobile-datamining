// discord_app/modules/guild_role_subscriptions/native/system_message/GuildRoleSubscriptionSystemMessageUtils.tsx
import Constants from "../../../../Constants.tsx";
import AppAnalyticsUtilsDefault from "../../../app_analytics/AppAnalyticsUtils.tsx";
import MessageActionCreatorsDefault from "../../../../actions/MessageActionCreators.tsx";
import GuildRoleSubscriptionSystemMessageUtils from "../../GuildRoleSubscriptionSystemMessageUtils.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/system_message/GuildRoleSubscriptionSystemMessageUtils.tsx",
);

export const handleRoleSubscriptionPurchaseSystemMessageCtaClicked =
  function handleRoleSubscriptionPurchaseSystemMessageCtaClicked(messageChannel, message, stickerId) {
    const sendGreetMessage = MessageActionCreatorsDefault.sendGreetMessage;
    const id = messageChannel.id;
    MessageActionCreatorsDefault;
    const obj = MessageActionCreatorsDefault;
    const obj2 = { channel: messageChannel, message, shouldMention: true, showMentionToggle: true };
    sendGreetMessage(id, stickerId, obj.getSendMessageOptionsForReply(obj2));
    const obj3 = GuildRoleSubscriptionSystemMessageUtils;
    const roleSubscriptionPurchaseSystemMessageEventProperties =
      obj3.getRoleSubscriptionPurchaseSystemMessageEventProperties(messageChannel, message);
    const obj4 = { sticker_id: stickerId };
    const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
    const ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CTA_CLICKED =
      AnalyticEvents.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CTA_CLICKED;
    AppAnalyticsUtilsDefault;
    const merged = Object.assign(roleSubscriptionPurchaseSystemMessageEventProperties);
    trackWithMetadata(ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CTA_CLICKED, obj4);
  };
