// === Module 12950: PrivateChannelRecipientActionCreators ===

// Module 12950 (PrivateChannelRecipientActionCreators)
import Constants from "Constants" /* 1071 */;
import HTTPUtils from "HTTPUtils" /* 1285 */;
import size from "module_2" /* 2 */;

const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/private_channel_recipient/PrivateChannelRecipientActionCreators.tsx");

export default {
  updatePrivateChannelRecipientFlags(id, setFlagResult) {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.CHANNEL_RECIPIENT_ME(id), body: { flags: setFlagResult }, rejectWithError: false };
    return HTTP.patch(request);
  }
};