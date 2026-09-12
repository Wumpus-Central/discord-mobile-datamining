// === Module 17530: codedLinkQueue ===

// Module 17530 (codedLinkQueue)
import LoggerDefault from "Logger" /* 3 */;
import _modDef17531 from "module_17531" /* 17531 */;

const logger = new LoggerDefault("codedLinkQueue");
const obj = new _modDef17531({ concurrency: 5, intervalCap: 10, interval: 2000 });
obj.on("add", () => {
  if (obj.size > 0) {
    logger.warn("Message link fetch queue backlog:", tmp.size);
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/coded_links/codedLinkQueue.tsx");

export const queueMessageLinkFetch = function queueMessageLinkFetch(arg0) {
  obj.add(arg0);
};