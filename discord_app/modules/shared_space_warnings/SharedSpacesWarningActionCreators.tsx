// discord_app/modules/shared_space_warnings/SharedSpacesWarningActionCreators.tsx
import { setDismissalTimeForChannel as closure_2 } from "useSharedSpacesWarningStore";
import { Endpoints } from "ME";
import { sendRequest } from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";

const result = require("sendRequest").fileFinishedImporting("modules/shared_space_warnings/SharedSpacesWarningActionCreators.tsx");

export const dismissGdmBlockedUserWarning = function dismissGdmBlockedUserWarning(channelId) {
  callback(channelId);
  const HTTP = sendRequest /* sendRequest */.HTTP;
  const obj = { url: Endpoints.CHANNEL_BLOCKED_USER_WARNING_ACK(channelId), rejectWithError: null };
  obj[1] = sendRequest /* sendRequest */.rejectWithMigratedError();
  return HTTP.post(obj);
};