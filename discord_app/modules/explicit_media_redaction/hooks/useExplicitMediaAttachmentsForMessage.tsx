// discord_app/modules/explicit_media_redaction/hooks/useExplicitMediaAttachmentsForMessage.tsx
import closure_2 from "../../../stores/MessageStore.tsx";
import { defaultAreStatesEqual } from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import { useEnabledHarmTypesBitmaskForChannelAndAuthorId } from "useContentHarmTypes.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting(
  "modules/explicit_media_redaction/hooks/useExplicitMediaAttachmentsForMessage.tsx",
);

export const useRedactableMediaAttachmentsForMessage = function useRedactableMediaAttachmentsForMessage(
  channelId,
  messageId,
  attachmentId,
) {
  const _require = channelId;
  dependencyMap = messageId;
  closure_2 = attachmentId;
  const items = [closure_2];
  const stateFromStores =
    require("../../../../discord_common/js/packages/flux/useStateFromStores.tsx").useStateFromStores(items, () =>
      attachmentId.getMessage(closure_0, closure_1),
    );
  let obj = defaultAreStatesEqual;
  closure_3 = require("useContentHarmTypes.tsx").useEnabledHarmTypesBitmaskForMessage(stateFromStores);
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
  const obj2 = useEnabledHarmTypesBitmaskForChannelAndAuthorId;
};
export const useRedactableMediaEmbedsForMessage = function useRedactableMediaEmbedsForMessage(
  channelId,
  messageId,
  embedId,
) {
  const _require = channelId;
  dependencyMap = messageId;
  closure_2 = embedId;
  const items = [closure_2];
  const stateFromStores =
    require("../../../../discord_common/js/packages/flux/useStateFromStores.tsx").useStateFromStores(items, () =>
      embedId.getMessage(closure_0, closure_1),
    );
  let obj = defaultAreStatesEqual;
  closure_3 = require("useContentHarmTypes.tsx").useEnabledHarmTypesBitmaskForMessage(stateFromStores);
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
  const obj2 = useEnabledHarmTypesBitmaskForChannelAndAuthorId;
};
