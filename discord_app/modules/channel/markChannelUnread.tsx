// discord_app/modules/channel/markChannelUnread.tsx
import timestampDefault from "../debug/Logger.tsx";
import DISCORD_EPOCHDefault from "../../utils/SnowflakeUtils.tsx";
import markUnreadBySnowflakeID from "../messages/markUnread.tsx";
import closure_3 from "../../stores/ChannelStore.tsx";
import generateOldThreadCutoff from "../../stores/ReadStateStore.tsx";
import closure_6 from "../../stores/ReadStateStore.tsx";

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
  return require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => closure_1_6.canBeUnread(id.id) && closure_1_6.hasLastMessage(id.id) && !id.isCategory());
};