// === Module 8816: buildFileSizeLimitEventProperties ===

// Module 8816 (buildFileSizeLimitEventProperties)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/buildFileSizeLimitEventProperties.tsx");

export const buildFileSizeLimitEventProperties = function buildFileSizeLimitEventProperties(arg0) {
  let attachmentMimeTypes;
  let channelId;
  let errorType;
  let guildId;
  let numAttachments;
  let obj;
  let obj5;
  let postCompressionAggregateSize;
  let postCompressionFileSizes;
  let preCompressionAggregateSize;
  let preCompressionFileSizes;
  let userIndividualFileSizeLimit;
  ({ guildId, channelId } = arg0);
  ({ userIndividualFileSizeLimit, numAttachments, preCompressionFileSizes, preCompressionAggregateSize, postCompressionFileSizes, postCompressionAggregateSize, attachmentMimeTypes, errorType } = arg0);
  if (undefined !== channelId) {
    obj = { channel_id: channelId };
    const obj2 = { channel_id: channelId };
  } else {
    obj = {};
  }
  const obj3 = { user_individual_file_size_limit: userIndividualFileSizeLimit, num_attachments: numAttachments, pre_compression_file_sizes: preCompressionFileSizes, pre_compression_aggregate_file_size: preCompressionAggregateSize, post_compression_file_sizes: postCompressionFileSizes, post_compression_aggregate_file_size: postCompressionAggregateSize, attachment_mimetypes: attachmentMimeTypes, error_type: errorType };
  const merged = Object.assign(obj);
  if (undefined !== guildId) {
    obj5 = { guild_id: guildId };
    const obj4 = { guild_id: guildId };
  } else {
    obj5 = {};
  }
  const merged1 = Object.assign(obj5);
  return obj3;
};