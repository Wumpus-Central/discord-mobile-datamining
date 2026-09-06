// discord_app/modules/shared_space_warnings/SharedSpacesWarningActionCreators.tsx
import Constants from "../../Constants.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import SharedSpacesWarningStore from "SharedSpacesWarningStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_2 = SharedSpacesWarningStore.setDismissalTimeForChannel;
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/shared_space_warnings/SharedSpacesWarningActionCreators.tsx");

export const dismissGdmBlockedUserWarning = function dismissGdmBlockedUserWarning(channelId) {
  closure_2(channelId);
  const HTTP = HTTPUtils.HTTP;
  const obj = {
    url: Endpoints.CHANNEL_BLOCKED_USER_WARNING_ACK(channelId),
    rejectWithError: HTTPUtils.rejectWithMigratedError(),
  };
  return HTTP.post(obj);
};
