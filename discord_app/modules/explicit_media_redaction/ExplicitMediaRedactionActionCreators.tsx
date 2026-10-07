// discord_app/modules/explicit_media_redaction/ExplicitMediaRedactionActionCreators.tsx
import Constants from "../../Constants.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaRedactionActionCreators.tsx");

export const reportFalsePositive = function reportFalsePositive(channel_id, message_id, attachment_ids, embed_ids) {
  const HTTP = HTTPUtils.HTTP;
  const request = {
    url: Endpoints.EXPLICIT_MEDIA_REPORT_FALSE_POSITIVE,
    body: { channel_id, message_id, attachment_ids, embed_ids },
    rejectWithError: false,
  };
  return HTTP.post(request);
};
export const reportFailedSendFalsePositive = function reportFailedSendFalsePositive(
  channelId,
  messageId,
  attachment_ids,
  filenames,
) {
  const HTTP = HTTPUtils.HTTP;
  const request = {
    url: Endpoints.EXPLICIT_MEDIA_SENDER_REPORT_FALSE_POSITIVE,
    body: { channel_id: channelId, message_id: messageId, attachment_ids, filenames },
    rejectWithError: false,
  };
  return HTTP.post(request);
};
export const sendMessagesForScanning = function sendMessagesForScanning(channel_id, message_ids) {
  const HTTP = HTTPUtils.HTTP;
  const request = {
    url: Endpoints.EXPLICIT_MEDIA_SCAN_MESSAGES(channel_id),
    body: { message_ids },
    rejectWithError: false,
  };
  return HTTP.patch(request);
};
export const sendMultiChannelMessagesForScanning = function sendMultiChannelMessagesForScanning(found) {
  const mapped = found.map((channel_id) => ({ channel_id: channel_id.channel_id, message_id: channel_id.id }));
  const HTTP = HTTPUtils.HTTP;
  const request = {
    url: Endpoints.EXPLICIT_MEDIA_SCAN_MULTI_CHANNEL_MESSAGES,
    body: { messages: mapped },
    rejectWithError: false,
  };
  return HTTP.patch(request);
};
