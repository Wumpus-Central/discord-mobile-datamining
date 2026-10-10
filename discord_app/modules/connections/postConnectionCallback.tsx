// === Module 5887: postConnectionCallback ===

// Module 5887 (postConnectionCallback)
import HTTPUtils from "HTTPUtils" /* 1295 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

({ Endpoints: c2, FRIEND_SYNC_PLATFORM_TYPES: c3 } = Constants);
const result = size.fileFinishedImporting("modules/connections/postConnectionCallback.tsx");

export const postConnectionCallback = function postConnectionCallback(provider, arg1) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  const HTTP = HTTPUtils.HTTP;
  const request = { url: React2.CONNECTIONS_CALLBACK(provider), body: null, oldFormErrors: true, rejectWithError: null };
  const obj = {};
  const merged = Object.assign(arg1);
  obj.insecure = flag;
  obj.friend_sync = set.has(provider);
  request.body = obj;
  request.rejectWithError = HTTPUtils.rejectWithMigratedError();
  return HTTP.post(request);
};