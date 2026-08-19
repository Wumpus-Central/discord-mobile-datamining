// discord_app/modules/private_channel_recipient/PrivateChannelRecipientActionCreators.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import sendRequest from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import ME from "../../Constants.tsx";

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