// discord_app/modules/private_channel_recipient/PrivateChannelRecipientActionCreators.tsx
import { Endpoints } from "ME";

const result = require("set").fileFinishedImporting("modules/private_channel_recipient/PrivateChannelRecipientActionCreators.tsx");

export default {
  updatePrivateChannelRecipientFlags(id, setFlagResult) {
    const HTTP = require("../../../discord_common/js/packages/http-utils/HTTPUtils.tsx") /* sendRequest */.HTTP;
    obj = { url: Endpoints.CHANNEL_RECIPIENT_ME(id), body: obj, rejectWithError: false };
    obj = { flags: setFlagResult };
    return HTTP.patch(obj);
  }
};