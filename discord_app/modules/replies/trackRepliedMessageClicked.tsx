// discord_app/modules/replies/trackRepliedMessageClicked.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import ME from "../../Constants.tsx";
import processMessage from "ReferencedMessageStore.tsx";
import collectGuildAnalyticsMetadata from "../app_analytics/AppAnalyticsUtils.tsx";
import maybeCreateMessageRecordFromSnapshotDefault from "../forwarding/maybeCreateMessageRecordFromSnapshot.tsx";

const ReferencedMessageState = processMessage.ReferencedMessageState;
const AnalyticEvents = ME.AnalyticEvents;
const result = obj132.fileFinishedImporting("modules/replies/trackRepliedMessageClicked.tsx");

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
  }
  const guild_id = channel_id.guild_id;
  const obj = { guild_id, channel_id: channel_id.id, reply_message_id: messageReference.id, replied_message_id: message_id, replied_message_is_loaded: state.state === ReferencedMessageState.LOADED, replied_message_has_media: tmp4, replied_message_length: tmp3 };
  obj.trackWithMetadata(AnalyticEvents.REPLIED_MESSAGE_CLICKED, obj);
};