// === Module 11199: trackRepliedMessageClicked ===

// Module 11199 (trackRepliedMessageClicked)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import collectGuildAnalyticsMetadata from "collectGuildAnalyticsMetadata" /* 4668 */;
import processMessage from "processMessage" /* 7308 */;
import maybeCreateMessageRecordFromSnapshotDefault from "maybeCreateMessageRecordFromSnapshot" /* 8842 */;

const ReferencedMessageState = processMessage.ReferencedMessageState;
const AnalyticEvents = ME.AnalyticEvents;
const result = set.fileFinishedImporting("modules/replies/trackRepliedMessageClicked.tsx");

export default function trackRepliedMessageClicked(messageReference, state, channel_id) {
  messageReference = messageReference.messageReference;
  let message_id;
  if (messageReference != null) {
    message_id = messageReference.message_id;
  }
  let tmp3 = null;
  let tmp4 = null;
  if (state.state === ReferencedMessageState.LOADED) {
    const tmp9 = maybeCreateMessageRecordFromSnapshotDefault(state.message);
    const content = tmp9.content;
    let num;
    if (content != null) {
      num = content.length;
    }
    if (num == null) {
      num = 0;
    }
    tmp3 = num;
    tmp4 = tmp9.attachments.length > 0 || tmp9.embeds.length > 0 || tmp9.stickerItems.length > 0 || tmp9.stickers.length > 0;
    const tmp5 = tmp9.attachments.length > 0 || tmp9.embeds.length > 0 || tmp9.stickerItems.length > 0 || tmp9.stickers.length > 0;
  }
  let obj = collectGuildAnalyticsMetadata;
  const guild_id = channel_id.guild_id;
  obj = { guild_id, channel_id: channel_id.id, reply_message_id: messageReference.id, replied_message_id: message_id, replied_message_is_loaded: state.state === ReferencedMessageState.LOADED, replied_message_has_media: tmp4, replied_message_length: tmp3 };
  obj.trackWithMetadata(AnalyticEvents.REPLIED_MESSAGE_CLICKED, obj);
};