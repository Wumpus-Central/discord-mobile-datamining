// discord_app/modules/media_uploads/buildFileSizeLimitEventProperties.tsx
import obj132 from "../../../_runtime/00002_obj132.js";

const result = obj132.fileFinishedImporting("modules/media_uploads/buildFileSizeLimitEventProperties.tsx");

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