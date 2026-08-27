// === Module 13306: dismissGdmBlockedUserWarning ===

// Module 13306 (dismissGdmBlockedUserWarning)
import set from "set" /* 2 */;
import sendRequest from "sendRequest" /* 530 */;
import ME from "ME" /* 676 */;
import useSharedSpacesWarningStore from "useSharedSpacesWarningStore" /* 13302 */;

let closure_2 = useSharedSpacesWarningStore.setDismissalTimeForChannel;
const Endpoints = ME.Endpoints;
const result = set.fileFinishedImporting("modules/shared_space_warnings/SharedSpacesWarningActionCreators.tsx");

export const dismissGdmBlockedUserWarning = function dismissGdmBlockedUserWarning(channelId) {
  callback(channelId);
  const HTTP = sendRequest.HTTP;
  const obj = { url: Endpoints.CHANNEL_BLOCKED_USER_WARNING_ACK(channelId), rejectWithError: sendRequest.rejectWithMigratedError() };
  return HTTP.post(obj);
};