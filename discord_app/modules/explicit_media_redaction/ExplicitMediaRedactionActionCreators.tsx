// === Module 7610: ExplicitMediaRedactionActionCreators ===

// Module 7610 (ExplicitMediaRedactionActionCreators)
import Constants from "Constants" /* 1074 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import size from "module_2" /* 2 */;

const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaRedactionActionCreators.tsx");

export const reportFalsePositive = function reportFalsePositive(channel_id, message_id, attachment_ids, embed_ids) {
  const HTTP = HTTPUtils.HTTP;
  const request = { url: Endpoints.EXPLICIT_MEDIA_REPORT_FALSE_POSITIVE, body: { channel_id, message_id, attachment_ids, embed_ids }, rejectWithError: false };
  return HTTP.post(request);
};
export const reportFailedSendFalsePositive = function reportFailedSendFalsePositive(channelId, messageId, attachment_ids, filenames) {
  const HTTP = HTTPUtils.HTTP;
  const request = { url: Endpoints.EXPLICIT_MEDIA_SENDER_REPORT_FALSE_POSITIVE, body: { channel_id: channelId, message_id: messageId, attachment_ids, filenames }, rejectWithError: false };
  return HTTP.post(request);
};
export const sendMessagesForScanning = function sendMessagesForScanning(channel_id, message_ids) {
  const HTTP = HTTPUtils.HTTP;
  const request = { url: Endpoints.EXPLICIT_MEDIA_SCAN_MESSAGES(channel_id), body: { message_ids }, rejectWithError: false };
  return HTTP.patch(request);
};
export const sendMultiChannelMessagesForScanning = function sendMultiChannelMessagesForScanning(found) {
  const mapped = found.map((channel_id) => ({ channel_id: channel_id.channel_id, message_id: channel_id.id }));
  const HTTP = HTTPUtils.HTTP;
  const request = { url: Endpoints.EXPLICIT_MEDIA_SCAN_MULTI_CHANNEL_MESSAGES, body: { messages: mapped }, rejectWithError: false };
  return HTTP.patch(request);
};