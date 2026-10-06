// discord_app/modules/media_uploads/getUploaderFileSizeMetrics.tsx
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/media_uploads/getUploaderFileSizeMetrics.tsx");

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
  const f98869 = (acc, item) => acc + item;
  let items = totalPreCompressionSize.items;
  if (items == null) {
    items = [];
  }
  const mapped = items.map((preCompressionSize) => preCompressionSize.preCompressionSize);
  const mapped1 = items.map((postCompressionSize) => {
    let currentSize = postCompressionSize.postCompressionSize;
    if (currentSize == null) {
      currentSize = postCompressionSize.currentSize;
    }
    return currentSize;
  });
  const obj = {
    preCompressionFileSizes: mapped,
    postCompressionFileSizes: mapped1,
    preCompressionAggregateSize: totalPreCompressionSize,
    postCompressionAggregateSize: null,
    numAttachments: null,
  };
  if (totalPreCompressionSize.totalPreCompressionSize > 0) {
    totalPreCompressionSize = totalPreCompressionSize.totalPreCompressionSize;
  } else {
    totalPreCompressionSize = mapped.reduce(f98869, 0);
  }
  if (null != totalPreCompressionSize.totalPostCompressionSize) {
    let totalPostCompressionSize;
    if (totalPreCompressionSize.totalPostCompressionSize > 0) {
      totalPostCompressionSize = totalPreCompressionSize.totalPostCompressionSize;
    }
    obj.postCompressionAggregateSize = totalPostCompressionSize;
    obj.numAttachments =
      totalPreCompressionSize.attachmentsCount > 0 ? totalPreCompressionSize.attachmentsCount : items.length;
    return obj;
  }
  totalPostCompressionSize = mapped1.reduce(f98869, 0);
};
