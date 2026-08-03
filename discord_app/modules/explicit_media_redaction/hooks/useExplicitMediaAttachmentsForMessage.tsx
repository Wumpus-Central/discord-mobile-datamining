// === Module 10046: useRedactableMediaAttachmentsForMessage ===

// Module 10046 (useRedactableMediaAttachmentsForMessage)
import reinjectEphemerals from "reinjectEphemerals";

const require = arg1;
const result = require("useEnabledHarmTypesBitmaskForChannelAndAuthorId").fileFinishedImporting("modules/explicit_media_redaction/hooks/useExplicitMediaAttachmentsForMessage.tsx");

export const useRedactableMediaAttachmentsForMessage = function useRedactableMediaAttachmentsForMessage(channelId, messageId, attachmentId) {
  const _require = channelId;
  const dependencyMap = messageId;
  let reinjectEphemerals = attachmentId;
  const items = [reinjectEphemerals];
  const stateFromStores = _require(647).useStateFromStores(items, () => attachmentId.getMessage(closure_0, closure_1));
  let obj = _require(647);
  let closure_3 = _require(10047).useEnabledHarmTypesBitmaskForMessage(stateFromStores);
  if (null == stateFromStores) {
    return [];
  } else {
    let found;
    if (stateFromStores != null) {
      const attachments = stateFromStores.attachments;
      if (attachments != null) {
        found = attachments.filter(tmp2);
      }
    }
    if (found == null) {
      found = [];
    }
    return found;
  }
  const obj2 = _require(10047);
};
export const useRedactableMediaEmbedsForMessage = function useRedactableMediaEmbedsForMessage(channelId, messageId, embedId) {
  const _require = channelId;
  const dependencyMap = messageId;
  let reinjectEphemerals = embedId;
  const items = [reinjectEphemerals];
  const stateFromStores = _require(647).useStateFromStores(items, () => embedId.getMessage(closure_0, closure_1));
  let obj = _require(647);
  let closure_3 = _require(10047).useEnabledHarmTypesBitmaskForMessage(stateFromStores);
  if (null == stateFromStores) {
    return [];
  } else {
    let found;
    if (stateFromStores != null) {
      const embeds = stateFromStores.embeds;
      if (embeds != null) {
        found = embeds.filter(tmp2);
      }
    }
    if (found == null) {
      found = [];
    }
    return found;
  }
  const obj2 = _require(10047);
};