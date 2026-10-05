// === Module 17547: codedLinkQueue ===

// Module 17547 (codedLinkQueue)
import LoggerDefault from "Logger" /* 3 */;
import _modDef17548 from "module_17548" /* 17548 */;
import size from "module_2" /* 2 */;

const logger = new LoggerDefault("codedLinkQueue");
new LoggerDefault("codedLinkQueue");
const obj = new _modDef17548({ concurrency: 5, intervalCap: 10, interval: 2000 });
obj.on("add", () => {
  if (obj.size > 0) {
    logger.warn("Message link fetch queue backlog:", tmp.size);
  }
});
const result = size.fileFinishedImporting("modules/coded_links/codedLinkQueue.tsx");

export const queueMessageLinkFetch = function queueMessageLinkFetch(arg0) {
  obj.add(arg0);
};