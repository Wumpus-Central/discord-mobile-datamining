// === Module 11142: ? ===

// Module 11142
import obj132 from "obj132" /* 2 */;
import sendRequest from "sendRequest" /* 530 */;
import ME from "ME" /* 676 */;

const Endpoints = ME.Endpoints;
const result = obj132.fileFinishedImporting("modules/private_channel_recipient/PrivateChannelRecipientActionCreators.tsx");

export default {
  updatePrivateChannelRecipientFlags(id, setFlagResult) {
    const HTTP = sendRequest.HTTP;
    { url: Endpoints.CHANNEL_RECIPIENT_ME(id), body: obj, rejectWithError: false };
    obj = { flags: setFlagResult };
    return HTTP.patch(obj);
  }
};