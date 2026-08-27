// === Module 8099: buildFileSizeLimitEventProperties ===

// Module 8099 (buildFileSizeLimitEventProperties)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/media_uploads/buildFileSizeLimitEventProperties.tsx");

export const buildFileSizeLimitEventProperties = function buildFileSizeLimitEventProperties(arg0) {
  ({ guildId, channelId } = arg0);
  ({ userIndividualFileSizeLimit, numAttachments, preCompressionFileSizes, preCompressionAggregateSize, postCompressionFileSizes, postCompressionAggregateSize, attachmentMimeTypes, errorType, kestrelVariant } = arg0);
  if (undefined !== channelId) {
    let obj = { channel_id: null };
    obj[0] = channelId;
  } else {
    obj = {};
  }
  obj = {};
  const merged = Object.assign(obj);
  if (undefined !== guildId) {
    obj1 = { guild_id: null };
    obj1[0] = guildId;
    let obj2 = obj1;
  } else {
    obj2 = {};
  }
  const merged1 = Object.assign(obj2);
  obj.user_individual_file_size_limit = userIndividualFileSizeLimit;
  obj.num_attachments = numAttachments;
  obj.pre_compression_file_sizes = preCompressionFileSizes;
  obj.pre_compression_aggregate_file_size = preCompressionAggregateSize;
  obj.post_compression_file_sizes = postCompressionFileSizes;
  obj.post_compression_aggregate_file_size = postCompressionAggregateSize;
  obj.attachment_mimetypes = attachmentMimeTypes;
  obj.error_type = errorType;
  obj.kestrel_variant = kestrelVariant;
  return obj;
};