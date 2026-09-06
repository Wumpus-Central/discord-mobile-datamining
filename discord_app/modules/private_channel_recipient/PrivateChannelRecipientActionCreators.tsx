// === Module 11955: ? ===

// Module 11955
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import sendRequest from "sendRequest" /* 1272 */;

const Endpoints = ME.Endpoints;
const result = set.fileFinishedImporting("modules/private_channel_recipient/PrivateChannelRecipientActionCreators.tsx");

export default {
  updatePrivateChannelRecipientFlags(id, setFlagResult) {
    const HTTP = sendRequest.HTTP;
    obj = { url: Endpoints.CHANNEL_RECIPIENT_ME(id), body: obj, rejectWithError: false };
    obj = { flags: setFlagResult };
    return HTTP.patch(obj);
  }
};