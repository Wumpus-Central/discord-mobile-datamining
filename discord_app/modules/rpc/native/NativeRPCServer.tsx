// === Module 9328: NativeRPCServer ===

// Module 9328 (NativeRPCServer)
import root from "root" /* 9329 */;
import RPCServerDefault from "RPCServer" /* 9330 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default new RPCServerDefault(() => Promise.resolve(root));