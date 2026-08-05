// discord_app/modules/media_uploads/getUploaderFileSizeMetrics.tsx
const result = require("set").fileFinishedImporting("modules/media_uploads/getUploaderFileSizeMetrics.tsx");

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
export const getUploaderFileSizeMetrics = function getUploaderFileSizeMetrics(items) {
  items = items.items;
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
  const obj = { preCompressionFileSizes: mapped, postCompressionFileSizes: mapped1, preCompressionAggregateSize: null, postCompressionAggregateSize: null, numAttachments: null };
  if (items.totalPreCompressionSize > 0) {
    let totalPreCompressionSize = items.totalPreCompressionSize;
  } else {
    totalPreCompressionSize = mapped.reduce((arg0, arg1) => arg0 + arg1, 0);
  }
  obj[2] = totalPreCompressionSize;
  if (null != items.totalPostCompressionSize) {
    if (items.totalPostCompressionSize > 0) {
      let totalPostCompressionSize = items.totalPostCompressionSize;
    }
    obj[3] = totalPostCompressionSize;
    obj[4] = items.attachmentsCount > 0 ? items.attachmentsCount : items.length;
    return obj;
  }
  totalPostCompressionSize = mapped1.reduce((arg0, arg1) => arg0 + arg1, 0);
};