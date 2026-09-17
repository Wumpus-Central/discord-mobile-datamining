// === Module 14650: NativeRPCServer ===

// Module 14650 (NativeRPCServer)
import root from "root" /* 9710 */;
import RPCServerDefault from "RPCServer" /* 14651 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default new RPCServerDefault(() => Promise.resolve(root));