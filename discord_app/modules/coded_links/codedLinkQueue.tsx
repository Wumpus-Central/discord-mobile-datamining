// === Module 19560: codedLinkQueue ===

// Module 19560 (codedLinkQueue)
import LoggerDefault from "Logger" /* 3 */;
import _modDef19561 from "module_19561" /* 19561 */;

const logger = new LoggerDefault("codedLinkQueue");
const obj = new _modDef19561({ concurrency: 5, intervalCap: 10, interval: 2000 });
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