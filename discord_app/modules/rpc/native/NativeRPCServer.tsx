// === Module 9295: NativeRPCServer ===

// Module 9295 (NativeRPCServer)
import root from "root" /* 9296 */;
import RPCServerDefault from "RPCServer" /* 9297 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default new RPCServerDefault(() => Promise.resolve(root));