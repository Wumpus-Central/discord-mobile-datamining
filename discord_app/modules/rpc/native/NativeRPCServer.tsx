// === Module 9427: NativeRPCServer ===

// Module 9427 (NativeRPCServer)
import root from "root" /* 9428 */;
import RPCServerDefault from "RPCServer" /* 9429 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default new RPCServerDefault(() => Promise.resolve(root));