// === Module 5027: reportFalsePositive ===

// Module 5027 (reportFalsePositive)
import obj132 from "obj132" /* 2 */;
import sendRequest from "sendRequest" /* 530 */;
import ME from "ME" /* 676 */;

const Endpoints = ME.Endpoints;
const result = obj132.fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaRedactionActionCreators.tsx");

export const reportFalsePositive = function reportFalsePositive(channel_id, message_id, attachment_ids, embed_ids) {
  const HTTP = sendRequest.HTTP;
  const obj = { channel_id, message_id, attachment_ids, embed_ids };
  return HTTP.post(obj);
};
export const reportFailedSendFalsePositive = function reportFailedSendFalsePositive(channelId, messageId, closure_2, closure_3) {
  const HTTP = sendRequest.HTTP;
  const obj = { channel_id: channelId, message_id: messageId, attachment_ids: closure_2, filenames: closure_3 };
  return HTTP.post(obj);
};
export const sendMessagesForScanning = function sendMessagesForScanning(channel_id, message_ids) {
  const HTTP = sendRequest.HTTP;
  { url: Endpoints.EXPLICIT_MEDIA_SCAN_MESSAGES(channel_id), body: obj, rejectWithError: false };
  obj = { message_ids };
  return HTTP.patch(obj);
};
export const sendMultiChannelMessagesForScanning = function sendMultiChannelMessagesForScanning(found) {
  const mapped = found.map((item, index) => ({ channel_id: item.channel_id, message_id: item.id }));
  const HTTP = sendRequest.HTTP;
  return HTTP.patch({ url: Endpoints.EXPLICIT_MEDIA_SCAN_MULTI_CHANNEL_MESSAGES, body: { messages: mapped }, rejectWithError: false });
};