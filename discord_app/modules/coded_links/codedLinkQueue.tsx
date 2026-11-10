// === Module 19951: codedLinkQueue ===

// Module 19951 (codedLinkQueue)
import LoggerDefault from "Logger" /* 3 */;
import _modDef19952 from "module_19952" /* 19952 */;

const logger = new LoggerDefault("codedLinkQueue");
const obj = new _modDef19952({ concurrency: 5, intervalCap: 10, interval: 2000 });
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