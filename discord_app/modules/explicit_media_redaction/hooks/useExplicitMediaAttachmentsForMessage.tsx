// === Module 13539: useExplicitMediaAttachmentsForMessage ===

// Module 13539 (useExplicitMediaAttachmentsForMessage)
import ObscuredMediaUtils from "ObscuredMediaUtils" /* 7605 */;
import ExplicitMediaRedactionModels from "ExplicitMediaRedactionModels" /* 7611 */;
import MessageStore from "MessageStore" /* 6199 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useExplicitMediaAttachmentsForMessage.tsx");

export function useRedactableMediaAttachmentsForMessage(channelId, messageId, attachmentId) {
  _require = channelId;
  dependencyMap = messageId;
  closure_2 = attachmentId;
  items = [closure_2];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => MessageStore.getMessage(closure_0, closure_1));
  let obj = require("useStateFromStores");
  closure_3 = require("useContentHarmTypes").useEnabledHarmTypesBitmaskForMessage(stateFromStores);
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
  const obj2 = require("useContentHarmTypes");
}
export function useRedactableMediaEmbedsForMessage(channelId, messageId, embedId) {
  _require = channelId;
  dependencyMap = messageId;
  closure_2 = embedId;
  items = [closure_2];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => MessageStore.getMessage(closure_0, closure_1));
  let obj = require("useStateFromStores");
  closure_3 = require("useContentHarmTypes").useEnabledHarmTypesBitmaskForMessage(stateFromStores);
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
  const obj2 = require("useContentHarmTypes");
}