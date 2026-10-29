// === Module 13109: ExplicitMediaRedactionActionCreators ===

// Module 13109 (ExplicitMediaRedactionActionCreators)
import Constants from "Constants" /* 1084 */;
import HTTPUtils from "HTTPUtils" /* 1294 */;
import size from "module_2" /* 2 */;

const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaRedactionActionCreators.tsx");

export function reportFalsePositive(channel_id, message_id, attachment_ids, embed_ids) {
  const HTTP = HTTPUtils.HTTP;
  const request = { url: Endpoints.EXPLICIT_MEDIA_REPORT_FALSE_POSITIVE, body: { channel_id, message_id, attachment_ids, embed_ids }, rejectWithError: false };
  return HTTP.post(request);
}
export function reportFailedSendFalsePositive(channelId, messageId, attachment_ids, filenames) {
  const HTTP = HTTPUtils.HTTP;
  const request = { url: Endpoints.EXPLICIT_MEDIA_SENDER_REPORT_FALSE_POSITIVE, body: { channel_id: channelId, message_id: messageId, attachment_ids, filenames }, rejectWithError: false };
  return HTTP.post(request);
}
export function sendMessagesForScanning(channel_id, message_ids) {
  const HTTP = HTTPUtils.HTTP;
  const request = { url: Endpoints.EXPLICIT_MEDIA_SCAN_MESSAGES(channel_id), body: { message_ids }, rejectWithError: false };
  return HTTP.patch(request);
}
export function sendMultiChannelMessagesForScanning(found) {
  const mapped = found.map((channel_id) => ({ channel_id: channel_id.channel_id, message_id: channel_id.id }));
  const HTTP = HTTPUtils.HTTP;
  const request = { url: Endpoints.EXPLICIT_MEDIA_SCAN_MULTI_CHANNEL_MESSAGES, body: { messages: mapped }, rejectWithError: false };
  return HTTP.patch(request);
}