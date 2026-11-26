// === Module 19869: SharedSpacesWarningActionCreators ===

// Module 19869 (SharedSpacesWarningActionCreators)
import Constants from "Constants" /* 1071 */;
import HTTPUtils from "HTTPUtils" /* 1285 */;
import SharedSpacesWarningStore from "SharedSpacesWarningStore" /* 15224 */;
import size from "module_2" /* 2 */;

let closure_2 = SharedSpacesWarningStore.setDismissalTimeForChannel;
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/shared_space_warnings/SharedSpacesWarningActionCreators.tsx");

export function dismissGdmBlockedUserWarning(channelId) {
  closure_2(channelId);
  const HTTP = HTTPUtils.HTTP;
  const obj = { url: Endpoints.CHANNEL_BLOCKED_USER_WARNING_ACK(channelId), rejectWithError: HTTPUtils.rejectWithMigratedError() };
  return HTTP.post(obj);
}