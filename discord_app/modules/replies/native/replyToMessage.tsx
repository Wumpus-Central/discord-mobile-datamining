// === Module 11318: replyToMessage ===

// Module 11318 (replyToMessage)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5076 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 6978 */;
import LongPressMessageActionSheetUtils from "LongPressMessageActionSheetUtils" /* 11303 */;
import PendingReplyActionCreators from "PendingReplyActionCreators" /* 11305 */;
import EditMessageStore from "EditMessageStore" /* 7178 */;
import UserStore from "UserStore" /* 1377 */;
import PendingReplyStore from "PendingReplyStore" /* 7177 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/replies/native/replyToMessage.tsx");

export default function longPressMessageHandleReply(arg0) {
  let actionSource;
  let channel;
  let chatInputRef;
  let invertible;
  let message;
  let obj9;
  let tmp20;
  ({ message, channel, chatInputRef, actionSource, invertible } = arg0);
  if (invertible === undefined) {
    invertible = false;
  }
  const editingMessage = EditMessageStore.getEditingMessage(channel.id);
  if (null != editingMessage) {
    const currentUser = UserStore.getCurrentUser();
    ({ id: obj8.channel_id, guild_id: obj8.guild_id } = channel);
    const obj2 = { message_id: message.id, channel_id: null, guild_id: null, context_action: "edit", reason: obj9.getContextBarCancelReason("edit", actionSource), is_own_message: null != currentUser && currentUser.id === editingMessage.author.id };
    const track3 = AnalyticsUtilsDefault.track;
    const CHAT_CONTEXT_BAR_ACTION_CANCELED2 = AnalyticEvents.CHAT_CONTEXT_BAR_ACTION_CANCELED;
    AnalyticsUtilsDefault;
    obj9 = LongPressMessageActionSheetUtils;
    track3(CHAT_CONTEXT_BAR_ACTION_CANCELED2, obj2);
  }
  const obj = MessageActionCreatorsDefault;
  obj.endEditMessage(channel.id);
  const pendingReply = PendingReplyStore.getPendingReply(channel.id);
  if (invertible) {
    if ("message_swipe" === actionSource) {
      if (null != pendingReply) {
        if (pendingReply.message.id === message.id) {
          const currentUser1 = UserStore.getCurrentUser();
          const obj5 = { message_id: message.id, channel_id: null, guild_id: null, context_action: "reply", reason: "swipe_reply_undo", is_own_message: tmp20 };
          ({ id: obj6.channel_id, guild_id: obj6.guild_id } = channel);
          tmp20 = null != currentUser1;
          const track2 = AnalyticsUtilsDefault.track;
          const CHAT_CONTEXT_BAR_ACTION_CANCELED = AnalyticEvents.CHAT_CONTEXT_BAR_ACTION_CANCELED;
          AnalyticsUtilsDefault;
          if (tmp20) {
            tmp20 = currentUser1.id === pendingReply.message.author.id;
          }
          track2(CHAT_CONTEXT_BAR_ACTION_CANCELED, obj5);
          const obj7 = PendingReplyActionCreators;
          obj7.deletePendingReply(channel.id);
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
  const track = AnalyticsUtilsDefault.track;
  const REPLY_MESSAGE_STARTED = AnalyticEvents.REPLY_MESSAGE_STARTED;
  const obj12 = { source: actionSource };
  AnalyticsUtilsDefault;
  const obj3 = AppAnalyticsUtils;
  const merged = Object.assign(obj3.collectGuildAnalyticsMetadata(channel.guild_id));
  const obj4 = AppAnalyticsUtils;
  const merged1 = Object.assign(obj4.collectChannelAnalyticsMetadata(channel));
  track(REPLY_MESSAGE_STARTED, obj12);
  const currentUser2 = UserStore.getCurrentUser();
  const tmp14 = !channel.isDM() && null != currentUser2 && message.author.id !== currentUser2.id;
  const tmp8Result = PendingReplyActionCreators;
  const pendingReply1 = tmp8Result.createPendingReply({ message, channel, shouldMention: tmp14, source: actionSource });
  if (chatInputRef != null) {
    const current3 = chatInputRef.current;
    if (current3 != null) {
      current3.openSystemKeyboard();
    }
  }
};