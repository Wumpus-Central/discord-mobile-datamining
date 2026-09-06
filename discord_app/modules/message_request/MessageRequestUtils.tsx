// === Module 13837: MessageRequestUtils ===

// Module 13837 (MessageRequestUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import MessageRequestStore from "MessageRequestStore" /* 7219 */;
import SpamMessageRequestStore from "SpamMessageRequestStore" /* 7220 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/MessageRequestUtils.tsx");

export const filterOutMessageRequestsAndSpam = function filterOutMessageRequestsAndSpam(arg0) {
  let tmp = arg1;
  if (arg1 === undefined) {
    let items = [MessageRequestStore, SpamMessageRequestStore];
    tmp = items;
  }
  [messageRequest, ] = tmp;
  messageRequest = arg0;
  const keys = SnowflakeUtilsDefault.keys(arg0);
  const mapped = keys.map((item) => {
    const items = [item, messageRequest[item]];
    return items;
  });
  return Array.from(mapped.filter((item) => {
    [, tmp] = item;
    const isMessageRequestResult = messageRequest.isMessageRequest(tmp.id);
    let tmp3 = !isMessageRequestResult;
    if (!isMessageRequestResult) {
      tmp3 = !nextResult1.isSpam(tmp.id);
    }
    return tmp3;
  })).reduce((acc, item) => {
    [r10007, tmp] = item;
    return Object.assign(acc, { [r10007]: tmp });
  }, {});
};
export const filterOutMessageRequestsAndSpamById = function filterOutMessageRequestsAndSpamById(unreadPrivateChannelIds) {
  let tmp = items;
  if (items === undefined) {
    items = [MessageRequestStore, SpamMessageRequestStore];
    tmp = items;
  }
  [importDefault, ] = tmp;
  return unreadPrivateChannelIds.filter((item) => {
    const isMessageRequestResult = nextResult.isMessageRequest(item);
    let tmp2 = !isMessageRequestResult;
    if (!isMessageRequestResult) {
      tmp2 = !nextResult1.isSpam(item);
    }
    return tmp2;
  });
};
export const isMessageRequestOrSpamRequest = function isMessageRequestOrSpamRequest(channelId) {
  let tmp = items;
  if (items === undefined) {
    items = [MessageRequestStore, SpamMessageRequestStore];
    tmp = items;
  }
  [obj, obj2] = tmp;
  return obj.isMessageRequest(channelId) || obj2.isSpam(channelId);
};
export const shouldShowMessageRequests = function shouldShowMessageRequests() {
  let tmp = arg0;
  if (arg0 === undefined) {
    const items = [MessageRequestStore, SpamMessageRequestStore];
    tmp = items;
  }
  [obj, obj2] = tmp;
  const spamChannelsCount = obj2.getSpamChannelsCount();
  return obj.getMessageRequestsCount() > 0 || spamChannelsCount > 0;
};