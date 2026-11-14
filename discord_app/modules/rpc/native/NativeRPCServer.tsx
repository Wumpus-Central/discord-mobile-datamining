// === Module 7298: NativeRPCServer ===

// Module 7298 (NativeRPCServer)
import root from "root" /* 7299 */;
import RPCServerDefault from "RPCServer" /* 7300 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default new RPCServerDefault(() => Promise.resolve(root));