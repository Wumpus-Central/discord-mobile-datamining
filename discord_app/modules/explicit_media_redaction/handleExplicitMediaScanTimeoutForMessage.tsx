// discord_app/modules/explicit_media_redaction/handleExplicitMediaScanTimeoutForMessage.tsx
import ExplicitMediaRedactionConstants from "ExplicitMediaRedactionConstants.tsx";
import findComponentMediaDefault from "findComponentMedia.tsx";
import size from "../../../_runtime/metro/00002__.js";

function failOverComponentMedia(components) {
  const iter = findComponentMediaDefault(components)[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let obj = { version: FAILOVER_SCAN_VERSION, flags: null };
    let contentScanMetadata = nextResult.contentScanMetadata;
    let num;
    if (contentScanMetadata != null) {
      num = contentScanMetadata.flags;
    }
    if (num == null) {
      num = 0;
    }
    obj.flags = num;
    nextResult.contentScanMetadata = obj;
    continue;
  }
  const tmp = findComponentMediaDefault(components);
}
const FAILOVER_SCAN_VERSION = ExplicitMediaRedactionConstants.FAILOVER_SCAN_VERSION;
const result = size.fileFinishedImporting(
  "modules/explicit_media_redaction/handleExplicitMediaScanTimeoutForMessage.tsx",
);

export const handleExplicitMediaScanTimeoutForMessage = function handleExplicitMediaScanTimeoutForMessage(message) {
  let attachments = message.attachments;
  let embeds = message.embeds;
  const attachments1 = attachments.map((item) => {
    item.content_scan_version = -1;
    return item;
  });
  let components = message.components;
  const embeds1 = embeds.map((components) => {
    components.contentScanVersion = -1;
    components = components.components;
    if (components == null) {
      components = [];
    }
    closure_1_3(components);
    return components;
  });
  failOverComponentMedia(components);
  const messageSnapshots = message.messageSnapshots;
  let messageSnapshots1 = messageSnapshots;
  if (null != messageSnapshots) {
    messageSnapshots1 = messageSnapshots;
    if (0 !== messageSnapshots.length) {
      messageSnapshots1 = messageSnapshots.map((message) => {
        message = message.message;
        const attachments = message.attachments;
        const embeds = message.embeds;
        const mapped = attachments.map((item) => {
          item.content_scan_version = -1;
          return item;
        });
        let components = message.components;
        const mapped1 = embeds.map((components) => {
          components.contentScanVersion = -1;
          components = components.components;
          if (components == null) {
            components = [];
          }
          closure_1_3(components);
          return components;
        });
        failOverComponentMedia(components);
        return message.merge({ message: message.merge({ attachments: mapped, embeds: mapped1, components }) });
      });
    }
  }
  return message.merge({ attachments: attachments1, embeds: embeds1, components, messageSnapshots: messageSnapshots1 });
};
