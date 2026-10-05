// === Module 13650: MessageRequestUtils ===

// Module 13650 (MessageRequestUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import MessageRequestStore from "MessageRequestStore" /* 6720 */;
import SpamMessageRequestStore from "SpamMessageRequestStore" /* 6721 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/message_request/MessageRequestUtils.tsx");

export const filterOutMessageRequestsAndSpam = function filterOutMessageRequestsAndSpam(arg0) {
  let tmp = arg1;
  if (arg1 === undefined) {
    let items = [MessageRequestStore, SpamMessageRequestStore];
    tmp = items;
  }
  const iter = tmp[Symbol.iterator]();
  let tmp4 = iter === undefined;
  let nextResult;
  if (!tmp4) {
    nextResult = iter.next();
  }
  let nextResult1;
  if (!tmp4) {
    tmp4 = tmp8;
    if (!tmp4) {
      nextResult1 = iter.next();
      tmp4 = tmp8;
    }
  }
  if (!tmp4) {
    iter.return();
  }
  let closure_0 = arg0;
  const obj = SnowflakeUtilsDefault;
  const keys = obj.keys(arg0);
  const mapped = keys.map((item) => {
    const items = [item, closure_0[item]];
    return items;
  });
  const arr = Array.from(mapped.filter((item) => {
    let tmp;
    [, tmp] = item;
    let tmp3 = !nextResult.isMessageRequest(tmp.id);
    nextResult.isMessageRequest(tmp.id);
    if (tmp3) {
      tmp3 = !nextResult1.isSpam(tmp.id);
    }
    return tmp3;
  }));
  return arr.reduce((acc, item) => {
    let tmp;
    [r10007, tmp] = item;
    return Object.assign(acc, { [r10007]: tmp });
  }, {});
};
export const filterOutMessageRequestsAndSpamById = function filterOutMessageRequestsAndSpamById(unreadPrivateChannelIds) {
  let items;
  let tmp = items;
  if (items === undefined) {
    items = [MessageRequestStore, SpamMessageRequestStore];
    tmp = items;
  }
  const iter = tmp[Symbol.iterator]();
  let tmp4 = iter === undefined;
  let nextResult;
  if (!tmp4) {
    nextResult = iter.next();
  }
  let nextResult1;
  if (!tmp4) {
    tmp4 = tmp8;
    if (!tmp4) {
      nextResult1 = iter.next();
      tmp4 = tmp8;
    }
  }
  if (!tmp4) {
    iter.return();
  }
  return unreadPrivateChannelIds.filter((item) => {
    let tmp2 = !nextResult.isMessageRequest(item);
    nextResult.isMessageRequest(item);
    if (tmp2) {
      tmp2 = !nextResult1.isSpam(item);
    }
    return tmp2;
  });
};
export const isMessageRequestOrSpamRequest = function isMessageRequestOrSpamRequest(channelId) {
  let items;
  let obj;
  let obj2;
  let tmp = items;
  if (items === undefined) {
    items = [MessageRequestStore, SpamMessageRequestStore];
    tmp = items;
  }
  [obj, obj2] = tmp;
  const tmp4 = obj.isMessageRequest(channelId) || obj2.isSpam(channelId);
  return tmp4;
};
export const shouldShowMessageRequests = function shouldShowMessageRequests() {
  let obj;
  let obj2;
  let tmp = arg0;
  if (arg0 === undefined) {
    const items = [MessageRequestStore, SpamMessageRequestStore];
    tmp = items;
  }
  [obj, obj2] = tmp;
  const spamChannelsCount = obj2.getSpamChannelsCount();
  const tmp5 = obj.getMessageRequestsCount() > 0 || spamChannelsCount > 0;
  return tmp5;
};