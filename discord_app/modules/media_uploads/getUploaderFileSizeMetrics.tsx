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
  let items = totalPreCompressionSize.items;
  if (items == null) {
    items = [];
  }
  const mapped = items.map((preCompressionSize) => preCompressionSize.preCompressionSize);
  const mapped1 = items.map((postCompressionSize) => {
    let preCompressionSize = postCompressionSize.postCompressionSize;
    if (preCompressionSize == null) {
      preCompressionSize = postCompressionSize.preCompressionSize;
    }
    return preCompressionSize;
  });
  const obj = {
    preCompressionFileSizes: mapped,
    postCompressionFileSizes: mapped1,
    preCompressionAggregateSize: null,
    postCompressionAggregateSize: null,
    numAttachments: null,
  };
  if (totalPreCompressionSize.totalPreCompressionSize > 0) {
    totalPreCompressionSize = totalPreCompressionSize.totalPreCompressionSize;
  } else {
    totalPreCompressionSize = mapped.reduce((acc, item) => acc + item, 0);
  }
  obj.preCompressionAggregateSize = totalPreCompressionSize;
  if (null != totalPreCompressionSize.totalPostCompressionSize) {
    if (totalPreCompressionSize.totalPostCompressionSize > 0) {
      let totalPostCompressionSize = totalPreCompressionSize.totalPostCompressionSize;
    }
    obj.postCompressionAggregateSize = totalPostCompressionSize;
    obj.numAttachments =
      totalPreCompressionSize.attachmentsCount > 0 ? totalPreCompressionSize.attachmentsCount : items.length;
    return obj;
  }
  totalPostCompressionSize = mapped1.reduce((acc, item) => acc + item, 0);
};
