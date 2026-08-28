// discord_app/modules/coded_links/codedLinkQueue.tsx
import timestampDefault from "../debug/Logger.tsx";
import _isNativeReflectConstructDefault from "../../../_runtime/16926__isNativeReflectConstruct.js";

let closure_0 = new timestampDefault("codedLinkQueue");
const obj = new _isNativeReflectConstructDefault({ concurrency: 5, intervalCap: 10, interval: 2000 });
obj.on("add", () => {
  if (obj.size > 0) {
    logger.warn("Message link fetch queue backlog:", tmp.size);
  }
});
const tmp2 = new timestampDefault("codedLinkQueue");
const result = require("set").fileFinishedImporting("modules/coded_links/codedLinkQueue.tsx");

export const queueMessageLinkFetch = function queueMessageLinkFetch(arg0) {
  obj.add(arg0);
};