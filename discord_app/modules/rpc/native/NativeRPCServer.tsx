// === Module 9192: NativeRPCServer ===

// Module 9192 (NativeRPCServer)
import root from "root" /* 9193 */;
import RPCServerDefault from "RPCServer" /* 9194 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default new RPCServerDefault(() => Promise.resolve(root));