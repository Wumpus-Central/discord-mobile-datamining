// discord_app/modules/explicit_media_redaction/hooks/useExplicitMediaAttachmentsForMessage.tsx
import ObscuredMediaUtils from "../ObscuredMediaUtils.tsx";
import ExplicitMediaRedactionModels from "../ExplicitMediaRedactionModels.tsx";
import MessageStore from "../../../stores/MessageStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/explicit_media_redaction/hooks/useExplicitMediaAttachmentsForMessage.tsx",
);

export const useRedactableMediaAttachmentsForMessage = function useRedactableMediaAttachmentsForMessage(
  channelId,
  messageId,
  attachmentId,
) {
  _require = channelId;
  dependencyMap = messageId;
  closure_2 = attachmentId;
  const items = [closure_2];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () =>
    MessageStore.getMessage(closure_0, closure_1),
  );
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
};
export const useRedactableMediaEmbedsForMessage = function useRedactableMediaEmbedsForMessage(
  channelId,
  messageId,
  embedId,
) {
  _require = channelId;
  dependencyMap = messageId;
  closure_2 = embedId;
  const items = [closure_2];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () =>
    MessageStore.getMessage(closure_0, closure_1),
  );
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
};
