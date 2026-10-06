// === Module 8953: ExplicitMediaRedactionActionCreators ===

// Module 8953 (ExplicitMediaRedactionActionCreators)
import Constants from "Constants" /* 1085 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import size from "module_2" /* 2 */;

const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaRedactionActionCreators.tsx");

export const reportFalsePositive = function reportFalsePositive(channel_id, message_id, attachment_ids, embed_ids) {
  let obj;
  const HTTP = HTTPUtils.HTTP;
  const request = { url: Endpoints.EXPLICIT_MEDIA_REPORT_FALSE_POSITIVE, body: obj, rejectWithError: false };
  obj = { channel_id, message_id, attachment_ids, embed_ids };
  return HTTP.post(request);
};
export const reportFailedSendFalsePositive = function reportFailedSendFalsePositive(channelId, messageId, attachment_ids, mapped1) {
  let obj;
  const HTTP = HTTPUtils.HTTP;
  const request = { url: Endpoints.EXPLICIT_MEDIA_SENDER_REPORT_FALSE_POSITIVE, body: obj, rejectWithError: false };
  obj = { channel_id: channelId, message_id: messageId, attachment_ids, filenames: mapped1 };
  return HTTP.post(request);
};
export const sendMessagesForScanning = function sendMessagesForScanning(channel_id, message_ids) {
  let obj;
  const HTTP = HTTPUtils.HTTP;
  const request = { url: Endpoints.EXPLICIT_MEDIA_SCAN_MESSAGES(channel_id), body: obj, rejectWithError: false };
  obj = { message_ids };
  return HTTP.patch(request);
};
export const sendMultiChannelMessagesForScanning = function sendMultiChannelMessagesForScanning(found) {
  const mapped = found.map((channel_id) => ({ channel_id: channel_id.channel_id, message_id: channel_id.id }));
  const HTTP = HTTPUtils.HTTP;
  const request = { url: Endpoints.EXPLICIT_MEDIA_SCAN_MULTI_CHANNEL_MESSAGES, body: { messages: mapped }, rejectWithError: false };
  return HTTP.patch(request);
};