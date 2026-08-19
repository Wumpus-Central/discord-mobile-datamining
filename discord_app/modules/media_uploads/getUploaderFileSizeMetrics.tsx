// discord_app/modules/media_uploads/getUploaderFileSizeMetrics.tsx
import obj132 from "../../../_runtime/00002_obj132.js";

const result = obj132.fileFinishedImporting("modules/media_uploads/getUploaderFileSizeMetrics.tsx");

export const getUploaderChannelId = function getUploaderChannelId(file) {
  const items = file.items;
  let channelId;
  if (items != null) {
    const first = items[0];
    if (first != null) {
      channelId = first.channelId;
    }
  }
  if (channelId == null) {
    channelId = null;
  }
  return channelId;
};
export const getUploaderFileSizeMetrics = function getUploaderFileSizeMetrics(totalPreCompressionSize) {
  let items = totalPreCompressionSize.items;
  if (items == null) {
    items = [];
  }
  const mapped = items.map((item, index) => item.preCompressionSize);
  const mapped1 = items.map((item, index) => {
    let preCompressionSize = item.postCompressionSize;
    if (preCompressionSize == null) {
      preCompressionSize = item.preCompressionSize;
    }
    return preCompressionSize;
  });
  const obj = { preCompressionFileSizes: mapped, postCompressionFileSizes: mapped1, preCompressionAggregateSize: null, postCompressionAggregateSize: null, numAttachments: null };
  if (totalPreCompressionSize.totalPreCompressionSize > 0) {
    totalPreCompressionSize = totalPreCompressionSize.totalPreCompressionSize;
  } else {
    totalPreCompressionSize = mapped.reduce((acc, item, index) => acc + item, 0);
  }
  obj[2] = totalPreCompressionSize;
  if (null != totalPreCompressionSize.totalPostCompressionSize) {
    if (totalPreCompressionSize.totalPostCompressionSize > 0) {
      let totalPostCompressionSize = totalPreCompressionSize.totalPostCompressionSize;
    }
    obj[3] = totalPostCompressionSize;
    obj[4] = totalPreCompressionSize.attachmentsCount > 0 ? totalPreCompressionSize.attachmentsCount : items.length;
    return obj;
  }
  totalPostCompressionSize = mapped1.reduce((acc, item, index) => acc + item, 0);
};