// === Module 5566: postConnectionCallback ===

// Module 5566 (postConnectionCallback)
import HTTPUtils from "HTTPUtils" /* 1282 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ Endpoints: c2, FRIEND_SYNC_PLATFORM_TYPES: c3 } = Constants);
const result = size.fileFinishedImporting("modules/connections/postConnectionCallback.tsx");

export const postConnectionCallback = function postConnectionCallback(provider, arg1) {
  let obj;
  let obj3;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  const HTTP = HTTPUtils.HTTP;
  const request = { url: React2.CONNECTIONS_CALLBACK(provider), body: obj, oldFormErrors: true, rejectWithError: obj3.rejectWithMigratedError() };
  const post = HTTP.post;
  obj = { insecure: flag, friend_sync: set.has(provider) };
  const merged = Object.assign(arg1);
  obj3 = HTTPUtils;
  return post(request);
};