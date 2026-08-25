// === Module 9885: markChannelUnread ===

// Module 9885 (markChannelUnread)
import timestampDefault from "timestamp" /* 3 */;
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import markUnreadBySnowflakeID from "markUnreadBySnowflakeID" /* 9886 */;
import closure_3 from "ensureGuildLoaded" /* 1391 */;
import generateOldThreadCutoff from "generateOldThreadCutoff" /* 4395 */;
import closure_6 from "generateOldThreadCutoff" /* 4395 */;

require = arg1;
({ isNonMutedPrivateMessage: c4, ReadState: c5 } = generateOldThreadCutoff);
let closure_7 = new timestampDefault("markChannelUnread");
const tmp3 = new timestampDefault("markChannelUnread");
let result = require("set").fileFinishedImporting("modules/channel/markChannelUnread.tsx");

export default function markChannelUnread(arg0) {
  const lastMessageId = closure_5.get(arg0).lastMessageId;
  if (null != lastMessageId) {
    const result = DISCORD_EPOCHDefault.atPreviousMillisecond(lastMessageId);
    let num = 0;
    if (callback(channel.getChannel(arg0))) {
      num = 1;
    }
    const obj = { channelId: null, messageId: null };
    obj[0] = arg0;
    obj[1] = lastMessageId;
    logger.log("Marking channel unread", obj);
    const obj3 = DISCORD_EPOCHDefault;
    const result1 = markUnreadBySnowflakeID.markUnreadBySnowflakeID(arg0, result, num);
    const obj2 = markUnreadBySnowflakeID;
  }
};
export const useCanMarkChannelUnread = function useCanMarkChannelUnread(channel) {
  const _require = channel;
  const items = [closure_6];
  return _require(589).useStateFromStores(items, () => closure_1_6.canBeUnread(id.id) && closure_1_6.hasLastMessage(id.id) && !id.isCategory());
};