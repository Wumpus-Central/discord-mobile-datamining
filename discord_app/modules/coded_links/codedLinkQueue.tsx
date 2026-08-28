// === Module 16925: queueMessageLinkFetch ===

// Module 16925 (queueMessageLinkFetch)
import timestampDefault from "timestamp" /* 3 */;
import _isNativeReflectConstructDefault from "_isNativeReflectConstruct" /* 16926 */;

let closure_0 = new timestampDefault("codedLinkQueue");
const obj = new _isNativeReflectConstructDefault({ concurrency: 5, intervalCap: 10, interval: 2000 });
obj.on("add", () => {
  if (obj.size > 0) {
    logger.warn("Message link fetch queue backlog:", tmp.size);
  }
});
const tmp2 = new timestampDefault("codedLinkQueue");
const result = require("set").fileFinishedImporting("modules/coded_links/codedLinkQueue.tsx");

export const queueMessageLinkFetch = function queueMessageLinkFetch(arg0) {
  obj.add(arg0);
};