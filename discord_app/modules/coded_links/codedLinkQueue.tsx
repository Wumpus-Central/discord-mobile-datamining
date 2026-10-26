// === Module 18870: codedLinkQueue ===

// Module 18870 (codedLinkQueue)
import LoggerDefault from "Logger" /* 3 */;
import _modDef18871 from "module_18871" /* 18871 */;

const logger = new LoggerDefault("codedLinkQueue");
const obj = new _modDef18871({ concurrency: 5, intervalCap: 10, interval: 2000 });
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