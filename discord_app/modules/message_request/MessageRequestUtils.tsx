// === Module 13061: filterOutMessageRequestsAndSpam ===

// Module 13061 (filterOutMessageRequestsAndSpam)
import processChannel from "processChannel";
import closure_3 from "processChannel";

const result = require("DISCORD_EPOCH").fileFinishedImporting("modules/message_request/MessageRequestUtils.tsx");

export const filterOutMessageRequestsAndSpam = function filterOutMessageRequestsAndSpam(arg0) {
  let importDefault;
  let tmp = arg1;
  if (arg1 === undefined) {
    let items = [processChannel, closure_3];
    tmp = items;
  }
  [importDefault, ] = tmp;
  importDefault = arg0;
  const keys = importDefault(nextResult1[2]).keys(arg0);
  const mapped = keys.map((arg0) => {
    const items = [arg0, messageRequest[arg0]];
    return items;
  });
  const obj = importDefault(nextResult1[2]);
  return Array.from(mapped.filter((arg0) => {
    let tmp;
    [, tmp] = arg0;
    const isMessageRequestResult = messageRequest.isMessageRequest(tmp.id);
    let tmp3 = !isMessageRequestResult;
    if (!isMessageRequestResult) {
      tmp3 = !nextResult1.isSpam(tmp.id);
    }
    return tmp3;
  })).reduce((arg0, arg1) => {
    let tmp;
    [r10007, tmp] = arg1;
    return Object.assign(arg0, { [r10007]: tmp });
  }, {});
};
export const filterOutMessageRequestsAndSpamById = function filterOutMessageRequestsAndSpamById(unreadPrivateChannelIds, items) {
  let importDefault;
  let tmp = items;
  if (items === undefined) {
    items = [processChannel, closure_3];
    tmp = items;
  }
  [importDefault, ] = tmp;
  return unreadPrivateChannelIds.filter((id) => {
    const isMessageRequestResult = nextResult.isMessageRequest(id);
    let tmp2 = !isMessageRequestResult;
    if (!isMessageRequestResult) {
      tmp2 = !nextResult1.isSpam(id);
    }
    return tmp2;
  });
};
export const isMessageRequestOrSpamRequest = function isMessageRequestOrSpamRequest(channelId, items) {
  let obj;
  let obj2;
  let tmp = items;
  if (items === undefined) {
    items = [processChannel, closure_3];
    tmp = items;
  }
  [obj, obj2] = tmp;
  return obj.isMessageRequest(channelId) || obj2.isSpam(channelId);
};
export const shouldShowMessageRequests = function shouldShowMessageRequests() {
  let obj;
  let obj2;
  let tmp = arg0;
  if (arg0 === undefined) {
    const items = [processChannel, closure_3];
    tmp = items;
  }
  [obj, obj2] = tmp;
  const spamChannelsCount = obj2.getSpamChannelsCount();
  return obj.getMessageRequestsCount() > 0 || spamChannelsCount > 0;
};