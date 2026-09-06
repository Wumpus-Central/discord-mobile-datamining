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
    let obj = { channel: messageChannel, message, shouldMention: true, showMentionToggle: true };
    obj.sendGreetMessage(messageChannel.id, stickerId, MessageActionCreatorsDefault.getSendMessageOptionsForReply(obj));
    const roleSubscriptionPurchaseSystemMessageEventProperties =
      GuildRoleSubscriptionSystemMessageUtils.getRoleSubscriptionPurchaseSystemMessageEventProperties(
        messageChannel,
        message,
      );
    obj = {};
    const merged = Object.assign(roleSubscriptionPurchaseSystemMessageEventProperties);
    obj.sticker_id = stickerId;
    AppAnalyticsUtilsDefault.trackWithMetadata(
      AnalyticEvents.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CTA_CLICKED,
      obj,
    );
  };
