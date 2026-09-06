// === Module 13738: SharedSpacesWarningActionCreators ===

// Module 13738 (SharedSpacesWarningActionCreators)
import Constants from "Constants" /* 1074 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import SharedSpacesWarningStore from "SharedSpacesWarningStore" /* 13734 */;
import size from "module_2" /* 2 */;

let closure_2 = SharedSpacesWarningStore.setDismissalTimeForChannel;
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/shared_space_warnings/SharedSpacesWarningActionCreators.tsx");

export const dismissGdmBlockedUserWarning = function dismissGdmBlockedUserWarning(channelId) {
  closure_2(channelId);
  const HTTP = HTTPUtils.HTTP;
  const obj = { url: Endpoints.CHANNEL_BLOCKED_USER_WARNING_ACK(channelId), rejectWithError: HTTPUtils.rejectWithMigratedError() };
  return HTTP.post(obj);
};