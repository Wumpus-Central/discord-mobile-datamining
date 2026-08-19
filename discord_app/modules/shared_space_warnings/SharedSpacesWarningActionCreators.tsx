// === Module 13287: dismissGdmBlockedUserWarning ===

// Module 13287 (dismissGdmBlockedUserWarning)
import obj132 from "obj132" /* 2 */;
import sendRequest from "sendRequest" /* 530 */;
import ME from "ME" /* 676 */;
import useSharedSpacesWarningStore from "useSharedSpacesWarningStore" /* 13283 */;

let closure_2 = useSharedSpacesWarningStore.setDismissalTimeForChannel;
const Endpoints = ME.Endpoints;
const result = obj132.fileFinishedImporting("modules/shared_space_warnings/SharedSpacesWarningActionCreators.tsx");

export const dismissGdmBlockedUserWarning = function dismissGdmBlockedUserWarning(channelId) {
  callback(channelId);
  const HTTP = sendRequest.HTTP;
  const obj = { url: Endpoints.CHANNEL_BLOCKED_USER_WARNING_ACK(channelId), rejectWithError: sendRequest.rejectWithMigratedError() };
  return HTTP.post(obj);
};