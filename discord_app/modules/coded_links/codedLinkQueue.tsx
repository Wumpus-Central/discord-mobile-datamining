// === Module 19516: codedLinkQueue ===

// Module 19516 (codedLinkQueue)
import LoggerDefault from "Logger" /* 3 */;
import _modDef19517 from "module_19517" /* 19517 */;

const logger = new LoggerDefault("codedLinkQueue");
const obj = new _modDef19517({ concurrency: 5, intervalCap: 10, interval: 2000 });
obj.on("add", () => {
  if (obj.size > 0) {
    logger.warn("Message link fetch queue backlog:", tmp.size);
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/coded_links/codedLinkQueue.tsx");

export function queueMessageLinkFetch(arg0) {
  obj.add(arg0);
}