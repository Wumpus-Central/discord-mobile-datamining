// discord_app/modules/coded_links/codedLinkQueue.tsx
import LoggerDefault from "../debug/Logger.tsx";
import _modDef17451 from "../../../_runtime/metro/17451__.js";

const logger = new LoggerDefault("codedLinkQueue");
const obj = new _modDef17451({ concurrency: 5, intervalCap: 10, interval: 2000 });
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
