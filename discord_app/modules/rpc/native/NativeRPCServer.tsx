// === Module 9259: NativeRPCServer ===

// Module 9259 (NativeRPCServer)
import root from "root" /* 9260 */;
import RPCServerDefault from "RPCServer" /* 9261 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default new RPCServerDefault(() => Promise.resolve(root));