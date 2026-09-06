// === Module 8753: maybeCreateMessageRecordFromSnapshot ===

// Module 8753 (maybeCreateMessageRecordFromSnapshot)
import isForwardMessageDefault from "isForwardMessage" /* 7302 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/forwarding/maybeCreateMessageRecordFromSnapshot.tsx");

export default function maybeCreateMessageRecordFromSnapshot(merge, arg1) {
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
    const obj = { content: tmp.message.content, attachments: tmp.message.attachments, embeds: tmp.message.embeds, flags: tmp.message.flags, components: tmp.message.components, editedTimestamp: null, timestamp: tmp.message.timestamp, codedLinks: tmp.message.codedLinks, reactions: [], messageSnapshots: [], stickers: tmp.message.stickers, stickerItems: tmp.message.stickerItems, customRenderedContent: null };
    mergeResult = merge.merge(obj);
  }
  return mergeResult;
};