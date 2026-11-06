// === Module 19841: codedLinkQueue ===

// Module 19841 (codedLinkQueue)
import LoggerDefault from "Logger" /* 3 */;
import _modDef19842 from "module_19842" /* 19842 */;

const logger = new LoggerDefault("codedLinkQueue");
const obj = new _modDef19842({ concurrency: 5, intervalCap: 10, interval: 2000 });
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