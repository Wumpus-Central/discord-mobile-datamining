// === Module 9443: buildFileSizeLimitEventProperties ===

// Module 9443 (buildFileSizeLimitEventProperties)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/buildFileSizeLimitEventProperties.tsx");

export const buildFileSizeLimitEventProperties = function buildFileSizeLimitEventProperties(arg0) {
  ({ guildId, channelId } = arg0);
  ({ userIndividualFileSizeLimit, numAttachments, preCompressionFileSizes, preCompressionAggregateSize, postCompressionFileSizes, postCompressionAggregateSize, attachmentMimeTypes, errorType, kestrelVariant } = arg0);
  if (undefined !== channelId) {
    const obj2 = { channel_id: channelId };
    let obj = obj2;
  } else {
    obj = {};
  }
  const obj3 = {};
  const merged = Object.assign(obj);
  if (undefined !== guildId) {
    const obj4 = { guild_id: guildId };
    let obj5 = obj4;
  } else {
    obj5 = {};
  }
  const merged1 = Object.assign(obj5);
  obj3.user_individual_file_size_limit = userIndividualFileSizeLimit;
  obj3.num_attachments = numAttachments;
  obj3.pre_compression_file_sizes = preCompressionFileSizes;
  obj3.pre_compression_aggregate_file_size = preCompressionAggregateSize;
  obj3.post_compression_file_sizes = postCompressionFileSizes;
  obj3.post_compression_aggregate_file_size = postCompressionAggregateSize;
  obj3.attachment_mimetypes = attachmentMimeTypes;
  obj3.error_type = errorType;
  obj3.kestrel_variant = kestrelVariant;
  return obj3;
};