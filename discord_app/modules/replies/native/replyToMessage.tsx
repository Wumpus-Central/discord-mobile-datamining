// === Module 10872: longPressMessageHandleReply ===

// Module 10872 (longPressMessageHandleReply)
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import collectGuildAnalyticsMetadata from "collectGuildAnalyticsMetadata" /* 5042 */;
import trackInviteDefault from "trackInvite" /* 7427 */;
import handleEdit from "handleEdit" /* 10857 */;
import createPendingReply from "createPendingReply" /* 10859 */;
import initialize from "initialize" /* 7435 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import getState from "getState" /* 7434 */;
import { AnalyticEvents } from "ME" /* 676 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/replies/native/replyToMessage.tsx");

export default function longPressMessageHandleReply(arg0) {
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
    const obj10 = expandEventPropertiesDefault;
    obj[4] = handleEdit.getContextBarCancelReason("edit", actionSource);
    obj[5] = null != currentUser && currentUser.id === editingMessage.author.id;
    obj10.track(AnalyticEvents.CHAT_CONTEXT_BAR_ACTION_CANCELED, obj);
  }
  obj = trackInviteDefault;
  obj.endEditMessage(channel.id);
  pendingReply = pendingReply.getPendingReply(channel.id);
  if (invertible) {
    if ("message_swipe" === actionSource) {
      if (null != pendingReply) {
        if (pendingReply.message.id === message.id) {
          const currentUser1 = authStore.getCurrentUser();
          let tmp3Result = expandEventPropertiesDefault;
          obj = { message_id: null, channel_id: null, guild_id: null, context_action: "reply", reason: "swipe_reply_undo", is_own_message: null };
          obj[0] = message.id;
          ({ id: obj8[1], guild_id: obj8[2] } = channel);
          let tmp18 = null != currentUser1;
          if (tmp18) {
            tmp18 = currentUser1.id === pendingReply.message.author.id;
          }
          obj[5] = tmp18;
          tmp3Result.track(AnalyticEvents.CHAT_CONTEXT_BAR_ACTION_CANCELED, obj);
          createPendingReply.deletePendingReply(channel.id);
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
  tmp3Result = expandEventPropertiesDefault;
  const merged = Object.assign(collectGuildAnalyticsMetadata.collectGuildAnalyticsMetadata(channel.guild_id));
  obj1 = { source: actionSource };
  const merged1 = Object.assign(collectGuildAnalyticsMetadata.collectChannelAnalyticsMetadata(channel));
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
  const pendingReply1 = createPendingReply.createPendingReply({ message, channel, shouldMention: tmp13, source: actionSource });
  if (chatInputRef != null) {
    const current3 = chatInputRef.current;
    if (current3 != null) {
      current3.openSystemKeyboard();
    }
  }
  const tmp7Result = createPendingReply;
};