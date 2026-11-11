// === Module 7234: NativeRPCServer ===

// Module 7234 (NativeRPCServer)
import root from "root" /* 7235 */;
import RPCServerDefault from "RPCServer" /* 7236 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default new RPCServerDefault(() => Promise.resolve(root));