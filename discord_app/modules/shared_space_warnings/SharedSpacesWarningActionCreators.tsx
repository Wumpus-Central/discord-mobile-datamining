// discord_app/modules/shared_space_warnings/SharedSpacesWarningActionCreators.tsx
import set from "../../../_runtime/00002_set.js";
import ME from "../../Constants.tsx";
import sendRequest from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import useSharedSpacesWarningStore from "SharedSpacesWarningStore.tsx";

let closure_2 = useSharedSpacesWarningStore.setDismissalTimeForChannel;
const Endpoints = ME.Endpoints;
const result = set.fileFinishedImporting("modules/shared_space_warnings/SharedSpacesWarningActionCreators.tsx");

export const dismissGdmBlockedUserWarning = function dismissGdmBlockedUserWarning(channelId) {
  callback(channelId);
  const HTTP = sendRequest.HTTP;
  const obj = {
    url: Endpoints.CHANNEL_BLOCKED_USER_WARNING_ACK(channelId),
    rejectWithError: sendRequest.rejectWithMigratedError(),
  };
  return HTTP.post(obj);
};
