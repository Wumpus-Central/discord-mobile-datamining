import initialize from "initialize";
import mergeGuildAvatar from "mergeGuildAvatar";
import getState from "getState";
import { AnalyticEvents } from "ME";

const require = arg1;
const result = require("getState").fileFinishedImporting("modules/replies/native/replyToMessage.tsx");

export default function longPressMessageHandleReply(arg0) {
  let actionSource;
  let channel;
  let chatInputRef;
  let invertible;
  let message;
  ({ message, channel, chatInputRef, actionSource, invertible } = arg0);
  if (invertible === undefined) {
    invertible = false;
  }
  editingMessage = editingMessage.getEditingMessage(channel.id);
  if (null != editingMessage) {
    const currentUser = authStore.getCurrentUser();
    let obj = { message_id: null, channel_id: null, guild_id: null, context_action: "edit", reason: null, is_own_message: null };
    obj[0] = message.id;
    ({ id: obj11[1], guild_id: obj11[2] } = channel);
    const obj10 = importDefault(698);
    obj[4] = require(9575) /* handleEdit */.getContextBarCancelReason("edit", actionSource);
    obj[5] = null != currentUser && currentUser.id === editingMessage.author.id;
    obj10.track(AnalyticEvents.CHAT_CONTEXT_BAR_ACTION_CANCELED, obj);
    const obj12 = require(9575) /* handleEdit */;
  }
  obj = importDefault(5718);
  obj.endEditMessage(channel.id);
  pendingReply = pendingReply.getPendingReply(channel.id);
  if (invertible) {
    if ("message_swipe" === actionSource) {
      if (null != pendingReply) {
        if (pendingReply.message.id === message.id) {
          const currentUser1 = authStore.getCurrentUser();
          let tmp3Result = tmp3(698);
          obj = { message_id: null, channel_id: null, guild_id: null, context_action: "reply", reason: "swipe_reply_undo", is_own_message: null };
          obj[0] = message.id;
          ({ id: obj8[1], guild_id: obj8[2] } = channel);
          let tmp18 = null != currentUser1;
          if (tmp18) {
            tmp18 = currentUser1.id === pendingReply.message.author.id;
          }
          obj[5] = tmp18;
          tmp3Result.track(AnalyticEvents.CHAT_CONTEXT_BAR_ACTION_CANCELED, obj);
          require(9577) /* createPendingReply */.deletePendingReply(channel.id);
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
          const obj9 = require(9577) /* createPendingReply */;
        }
      }
    }
  }
  tmp3Result = tmp3(698);
  const merged = Object.assign(require(4388) /* collectGuildAnalyticsMetadata */.collectGuildAnalyticsMetadata(channel.guild_id));
  const obj1 = { source: actionSource };
  const obj4 = require(4388) /* collectGuildAnalyticsMetadata */;
  const tmp7 = require;
  const merged1 = Object.assign(require(4388) /* collectGuildAnalyticsMetadata */.collectChannelAnalyticsMetadata(channel));
  tmp3Result.track(AnalyticEvents.REPLY_MESSAGE_STARTED, obj1);
  const currentUser2 = authStore.getCurrentUser();
  const isDMResult = channel.isDM();
  let tmp13 = !isDMResult;
  if (!isDMResult) {
    tmp13 = null != currentUser2;
  }
  if (tmp13) {
    tmp13 = message.author.id !== currentUser2.id;
  }
  const obj5 = require(4388) /* collectGuildAnalyticsMetadata */;
  const pendingReply1 = tmp7(9577).createPendingReply({ message, channel, shouldMention: tmp13, source: actionSource });
  if (chatInputRef != null) {
    const current3 = chatInputRef.current;
    if (current3 != null) {
      current3.openSystemKeyboard();
    }
  }
};