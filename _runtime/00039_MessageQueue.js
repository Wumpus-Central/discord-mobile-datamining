// _runtime/00039_MessageQueue.js
import MessageQueue from "00040_MessageQueue.js";

const _default = new MessageQueue.default();
Object.defineProperty(global, "__fbBatchedBridge", { configurable: true, value: _default });

export default _default;