// === Module 12040: useForwardPreviewContent ===

// Module 12040 (useForwardPreviewContent)
import getUncachedChannelPermissions from "getUncachedChannelPermissions" /* 4021 */;

const require = fn;
let result = require("obj132").fileFinishedImporting("modules/forwarding/ForwardPreviewUtils.tsx");

export const useForwardPreviewContent = function useForwardPreviewContent(message) {
  message = message.message;
  ({ channel: dependencyMap, forwardOptions } = message);
  let onlyEmbedIndices;
  let onlyAttachmentIds;
  if (forwardOptions != null) {
    onlyAttachmentIds = forwardOptions.onlyAttachmentIds;
  }
  onlyEmbedIndices = undefined;
  if (forwardOptions != null) {
    onlyEmbedIndices = forwardOptions.onlyEmbedIndices;
  }
  const first = message.messageSnapshots[0];
  message = undefined;
  if (first != null) {
    message = first.message;
  }
  let attachments = message.attachments;
  if (null != onlyAttachmentIds) {
    const attachments1 = message.attachments;
    attachments = attachments1.filter((item, index) => onlyAttachmentIds.includes(item.id));
  } else if (null != onlyEmbedIndices) {
    attachments = [];
  }
  const items = [];
  let obj = message(589);
  const items1 = [onlyAttachmentIds];
  if (obj.useStateFromStores(items1, () => {
    let shouldStripEmbedsResult = null != closure_1;
    if (shouldStripEmbedsResult) {
      shouldStripEmbedsResult = !message(dependencyMap[2]).canEmbedLinks(tmp, onlyAttachmentIds);
      const obj = message(dependencyMap[2]);
    }
    if (shouldStripEmbedsResult) {
      shouldStripEmbedsResult = message(dependencyMap[2]).shouldStripEmbeds(message);
      const obj2 = message(dependencyMap[2]);
    }
    return shouldStripEmbedsResult;
  })) {
    let tmp6 = null != onlyEmbedIndices;
    if (!tmp6) {
      let tmp7 = "" === message.content;
      if (tmp7) {
        tmp7 = items.length > 0;
      }
      tmp6 = tmp7;
    }
    let result = message;
    if (tmp6) {
      const mapped = items.map((item, index) => item.url);
      result = message.set("content", mapped.join("\n"));
    }
    let tmp8 = "" === result.content;
    if (tmp8) {
      const first1 = result.embeds[0];
      let rawDescription;
      if (first1 != null) {
        rawDescription = first1.rawDescription;
      }
      tmp8 = null != rawDescription;
    }
    let result1 = result;
    if (tmp8) {
      result1 = result.set("content", result.embeds[0].rawDescription);
    }
    obj = { attachments: null, embeds: null, hasContent: null, contentMessage: null };
    obj[0] = attachments;
    obj[1] = items;
    obj[2] = "" !== result1.content && null == onlyAttachmentIds;
    obj[3] = result1;
    return obj;
  } else {
    let embeds = message.embeds;
    if (null != onlyEmbedIndices) {
      const embeds1 = message.embeds;
      embeds = embeds1.filter((item, index) => onlyEmbedIndices.includes(index));
    } else if (null != onlyAttachmentIds) {
      embeds = [];
    }
  }
};