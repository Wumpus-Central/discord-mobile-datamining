// === Module 18100: codedLinkQueue ===

// Module 18100 (codedLinkQueue)
import LoggerDefault from "Logger" /* 3 */;
import _modDef18101 from "module_18101" /* 18101 */;

const logger = new LoggerDefault("codedLinkQueue");
const obj = new _modDef18101({ concurrency: 5, intervalCap: 10, interval: 2000 });
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