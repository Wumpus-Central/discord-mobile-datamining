// === Module 9201: maybeCreateMessageRecordFromSnapshot ===

// Module 9201 (maybeCreateMessageRecordFromSnapshot)
import set from "set" /* 2 */;
import isForwardMessageDefault from "isForwardMessage" /* 5031 */;

const result = set.fileFinishedImporting("modules/forwarding/maybeCreateMessageRecordFromSnapshot.tsx");

export default function maybeCreateMessageRecordFromSnapshot(merge) {
  let tmp = arg1;
  if (arg1 == null) {
    let first;
    if (isForwardMessageDefault(merge)) {
      first = merge.messageSnapshots[0];
    }
    tmp = first;
  }
  let mergeResult = merge;
  if (null != tmp) {
    const obj = { content: null, attachments: null, embeds: null, flags: null, components: null, editedTimestamp: null, timestamp: null, codedLinks: null, reactions: null, messageSnapshots: null, stickers: null, stickerItems: null, customRenderedContent: null };
    obj[0] = tmp.message.content;
    obj[1] = tmp.message.attachments;
    obj[2] = tmp.message.embeds;
    obj[3] = tmp.message.flags;
    obj[4] = tmp.message.components;
    obj[6] = tmp.message.timestamp;
    obj[7] = tmp.message.codedLinks;
    obj[8] = [];
    obj[9] = [];
    obj[10] = tmp.message.stickers;
    obj[11] = tmp.message.stickerItems;
    mergeResult = merge.merge(obj);
  }
  return mergeResult;
};