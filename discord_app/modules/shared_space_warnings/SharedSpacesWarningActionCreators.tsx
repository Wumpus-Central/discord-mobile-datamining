// discord_app/modules/shared_space_warnings/SharedSpacesWarningActionCreators.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import sendRequest from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import ME from "../../Constants.tsx";
import useSharedSpacesWarningStore from "SharedSpacesWarningStore.tsx";

let closure_2 = useSharedSpacesWarningStore.setDismissalTimeForChannel;
const Endpoints = ME.Endpoints;
const result = obj132.fileFinishedImporting("modules/shared_space_warnings/SharedSpacesWarningActionCreators.tsx");

export const dismissGdmBlockedUserWarning = function dismissGdmBlockedUserWarning(channelId) {
  callback(channelId);
  const HTTP = sendRequest.HTTP;
  const obj = { url: Endpoints.CHANNEL_BLOCKED_USER_WARNING_ACK(channelId), rejectWithError: sendRequest.rejectWithMigratedError() };
  return HTTP.post(obj);
};