// === Module 15110: NativeRPCServer ===

// Module 15110 (NativeRPCServer)
import root from "root" /* 10938 */;
import RPCServerDefault from "RPCServer" /* 15111 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default new RPCServerDefault(() => Promise.resolve(root));