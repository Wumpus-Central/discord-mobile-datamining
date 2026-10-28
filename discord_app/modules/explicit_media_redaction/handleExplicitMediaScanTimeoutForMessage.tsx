// === Module 7737: handleExplicitMediaScanTimeoutForMessage ===

// Module 7737 (handleExplicitMediaScanTimeoutForMessage)
import _mod12 from "module_12" /* 12 */;
import ExplicitMediaRedactionConstants from "ExplicitMediaRedactionConstants" /* 7429 */;
import findComponentMediaDefault from "findComponentMedia" /* 7436 */;
import size from "module_2" /* 2 */;

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
const result = size.fileFinishedImporting("modules/explicit_media_redaction/handleExplicitMediaScanTimeoutForMessage.tsx");

export const handleExplicitMediaScanTimeoutForMessage = function handleExplicitMediaScanTimeoutForMessage(message) {
  let attachments = message.attachments;
  let embeds = message.embeds;
  const attachments1 = attachments.map((item) => {
    const obj = {};
    const merged = Object.assign(item);
    obj.content_scan_version = -1;
    return obj;
  });
  const embeds1 = embeds.map((components) => {
    if (null == components.components) {
      const obj2 = {};
      const merged = Object.assign(components);
      obj2.contentScanVersion = -1;
      return obj2;
    } else {
      const cloneDeepResult = closure_1_0(closure_1_2[1]).cloneDeep(components.components);
      closure_1_4(cloneDeepResult);
      const obj3 = {};
      const merged1 = Object.assign(components);
      obj3.contentScanVersion = -1;
      obj3.components = cloneDeepResult;
      return obj3;
    }
  });
  const components = _mod12.cloneDeep(message.components);
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
          const obj = {};
          const merged = Object.assign(item);
          obj.content_scan_version = -1;
          return obj;
        });
        const mapped1 = embeds.map((components) => {
          if (null == components.components) {
            const obj2 = {};
            const merged = Object.assign(components);
            obj2.contentScanVersion = -1;
            return obj2;
          } else {
            const cloneDeepResult = closure_1_0(closure_1_2[1]).cloneDeep(components.components);
            closure_1_4(cloneDeepResult);
            const obj3 = {};
            const merged1 = Object.assign(components);
            obj3.contentScanVersion = -1;
            obj3.components = cloneDeepResult;
            return obj3;
          }
        });
        let cloneDeepResult = _mod12.cloneDeep(message.components);
        failOverComponentMedia(cloneDeepResult);
        return message.merge({ message: message.merge({ attachments: mapped, embeds: mapped1, components: cloneDeepResult }) });
      });
    }
  }
  return message.merge({ attachments: attachments1, embeds: embeds1, components, messageSnapshots: messageSnapshots1 });
};