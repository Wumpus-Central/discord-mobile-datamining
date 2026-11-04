// === Module 9474: NativeRPCServer ===

// Module 9474 (NativeRPCServer)
import root from "root" /* 9475 */;
import RPCServerDefault from "RPCServer" /* 9476 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default new RPCServerDefault(() => Promise.resolve(root));