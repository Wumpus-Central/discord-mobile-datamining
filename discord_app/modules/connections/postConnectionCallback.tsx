// discord_app/modules/connections/postConnectionCallback.tsx
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

({ Endpoints: c2, FRIEND_SYNC_PLATFORM_TYPES: c3 } = Constants);
const result = size.fileFinishedImporting("modules/connections/postConnectionCallback.tsx");

export const postConnectionCallback = function postConnectionCallback(provider, arg1) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  const HTTP = HTTPUtils.HTTP;
  const request = {
    url: React2.CONNECTIONS_CALLBACK(provider),
    body: null,
    oldFormErrors: true,
    rejectWithError: null,
  };
  const obj = {};
  const merged = Object.assign(arg1);
  obj.insecure = flag;
  obj.friend_sync = set.has(provider);
  request.body = obj;
  request.rejectWithError = HTTPUtils.rejectWithMigratedError();
  return HTTP.post(request);
};
