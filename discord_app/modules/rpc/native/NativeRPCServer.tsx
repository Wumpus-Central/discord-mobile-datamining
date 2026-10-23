// === Module 9235: NativeRPCServer ===

// Module 9235 (NativeRPCServer)
import root from "root" /* 9236 */;
import RPCServerDefault from "RPCServer" /* 9237 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default new RPCServerDefault(() => Promise.resolve(root));