// discord_app/modules/replies/native/replyToMessage.tsx
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import AppAnalyticsUtils from "../../app_analytics/AppAnalyticsUtils.tsx";
import MessageActionCreatorsDefault from "../../../actions/MessageActionCreators.tsx";
import LongPressMessageActionSheetUtils from "../../messages/native/long_press/LongPressMessageActionSheetUtils.tsx";
import PendingReplyActionCreators from "../PendingReplyActionCreators.tsx";
import EditMessageStore from "../../../stores/EditMessageStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import PendingReplyStore from "../PendingReplyStore.tsx";

require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/replies/native/replyToMessage.tsx");

export default function longPressMessageHandleReply(arg0) {
  ({ message, channel, chatInputRef, actionSource, invertible } = arg0);
  if (invertible === undefined) {
    invertible = false;
  }
  const editingMessage = EditMessageStore.getEditingMessage(channel.id);
  if (null != editingMessage) {
    const currentUser = UserStore.getCurrentUser();
    const obj2 = {
      message_id: message.id,
      channel_id: null,
      guild_id: null,
      context_action: "edit",
      reason: null,
      is_own_message: null,
    };
    ({ id: obj11.channel_id, guild_id: obj11.guild_id } = channel);
    const obj10 = AnalyticsUtilsDefault;
    obj2.reason = LongPressMessageActionSheetUtils.getContextBarCancelReason("edit", actionSource);
    obj2.is_own_message = null != currentUser && currentUser.id === editingMessage.author.id;
    obj10.track(AnalyticEvents.CHAT_CONTEXT_BAR_ACTION_CANCELED, obj2);
  }
  MessageActionCreatorsDefault.endEditMessage(channel.id);
  const pendingReply = PendingReplyStore.getPendingReply(channel.id);
  if (invertible) {
    if ("message_swipe" === actionSource) {
      if (null != pendingReply) {
        if (pendingReply.message.id === message.id) {
          const currentUser1 = UserStore.getCurrentUser();
          const obj3 = {
            message_id: message.id,
            channel_id: null,
            guild_id: null,
            context_action: "reply",
            reason: "swipe_reply_undo",
            is_own_message: null,
          };
          ({ id: obj8.channel_id, guild_id: obj8.guild_id } = channel);
          let tmp18 = null != currentUser1;
          if (tmp18) {
            tmp18 = currentUser1.id === pendingReply.message.author.id;
          }
          obj3.is_own_message = tmp18;
          AnalyticsUtilsDefault.track(AnalyticEvents.CHAT_CONTEXT_BAR_ACTION_CANCELED, obj3);
          const tmp3Result = AnalyticsUtilsDefault;
          PendingReplyActionCreators.deletePendingReply(channel.id);
          let text;
          if (chatInputRef != null) {
            const current = chatInputRef.current;
            if (current != null) {
              text = current.getText();
            }
          }
          if ("" === text) {
            if (chatInputRef != null) {
              const current2 = chatInputRef.current;
              if (current2 != null) {
                current2.dismissKeyboard();
              }
            }
          }
        }
      }
    }
  }
  const obj6 = { source: actionSource };
  const tmp3Result2 = AnalyticsUtilsDefault;
  const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(channel.guild_id));
  const merged1 = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadata(channel));
  tmp3Result2.track(AnalyticEvents.REPLY_MESSAGE_STARTED, obj6);
  const currentUser2 = UserStore.getCurrentUser();
  const isDMResult = channel.isDM();
  let tmp13 = !isDMResult;
  if (!isDMResult) {
    tmp13 = null != currentUser2;
  }
  if (tmp13) {
    tmp13 = message.author.id !== currentUser2.id;
  }
  const pendingReply1 = PendingReplyActionCreators.createPendingReply({
    message,
    channel,
    shouldMention: tmp13,
    source: actionSource,
  });
  if (chatInputRef != null) {
    const current3 = chatInputRef.current;
    if (current3 != null) {
      current3.openSystemKeyboard();
    }
  }
  const tmp7Result = PendingReplyActionCreators;
}
