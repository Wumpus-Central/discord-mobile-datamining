// === Module 17592: codedLinkQueue ===

// Module 17592 (codedLinkQueue)
import LoggerDefault from "Logger" /* 3 */;
import _modDef17593 from "module_17593" /* 17593 */;
import size from "module_2" /* 2 */;

const logger = new LoggerDefault("codedLinkQueue");
new LoggerDefault("codedLinkQueue");
const obj = new _modDef17593({ concurrency: 5, intervalCap: 10, interval: 2000 });
obj.on("add", () => {
  if (obj.size > 0) {
    logger.warn("Message link fetch queue backlog:", tmp.size);
  }
});
const result = size.fileFinishedImporting("modules/coded_links/codedLinkQueue.tsx");

export const queueMessageLinkFetch = function queueMessageLinkFetch(arg0) {
  obj.add(arg0);
};