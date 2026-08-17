// _runtime/00039_MessageQueue.js
import MessageQueue from "MessageQueue" /* 40 */;

const _default = new MessageQueue.default();
Object.defineProperty(global, "__fbBatchedBridge", { configurable: true, value: _default });

export default _default;