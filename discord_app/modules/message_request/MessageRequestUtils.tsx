// === Module 13064: filterOutMessageRequestsAndSpam ===

// Module 13064 (filterOutMessageRequestsAndSpam)
import processChannel from "processChannel" /* 4799 */;
import processChannel2 from "processChannel" /* 4800 */;

const result = require("obj132").fileFinishedImporting("modules/message_request/MessageRequestUtils.tsx");

export const filterOutMessageRequestsAndSpam = function filterOutMessageRequestsAndSpam(arg0) {
  let tmp = arg1;
  if (arg1 === undefined) {
    let items = [closure_2, closure_3];
    tmp = items;
  }
  [importDefault, ] = tmp;
  importDefault = arg0;
  const keys = importDefault(nextResult1[2]).keys(arg0);
  const mapped = keys.map((item, index) => {
    const items = [item, messageRequest[item]];
    return items;
  });
  const obj = importDefault(nextResult1[2]);
  return Array.from(mapped.filter((item, index) => {
    [, tmp] = item;
    const isMessageRequestResult = messageRequest.isMessageRequest(tmp.id);
    let tmp3 = !isMessageRequestResult;
    if (!isMessageRequestResult) {
      tmp3 = !nextResult1.isSpam(tmp.id);
    }
    return tmp3;
  })).reduce((acc, item, index) => {
    [r10007, tmp] = item;
    return Object.assign(acc, { [r10007]: tmp });
  }, {});
};
export const filterOutMessageRequestsAndSpamById = function filterOutMessageRequestsAndSpamById(unreadPrivateChannelIds, items) {
  let tmp = items;
  if (items === undefined) {
    items = [closure_2, closure_3];
    tmp = items;
  }
  [importDefault, ] = tmp;
  return unreadPrivateChannelIds.filter((item, index) => {
    const isMessageRequestResult = nextResult.isMessageRequest(item);
    let tmp2 = !isMessageRequestResult;
    if (!isMessageRequestResult) {
      tmp2 = !nextResult1.isSpam(item);
    }
    return tmp2;
  });
};
export const isMessageRequestOrSpamRequest = function isMessageRequestOrSpamRequest(channelId, items) {
  let tmp = items;
  if (items === undefined) {
    items = [closure_2, closure_3];
    tmp = items;
  }
  [obj, obj2] = tmp;
  return obj.isMessageRequest(channelId) || obj2.isSpam(channelId);
};
export const shouldShowMessageRequests = function shouldShowMessageRequests() {
  let tmp = arg0;
  if (arg0 === undefined) {
    const items = [closure_2, closure_3];
    tmp = items;
  }
  [obj, obj2] = tmp;
  const spamChannelsCount = obj2.getSpamChannelsCount();
  return obj.getMessageRequestsCount() > 0 || spamChannelsCount > 0;
};