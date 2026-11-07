// === Module 9409: NativeRPCServer ===

// Module 9409 (NativeRPCServer)
import root from "root" /* 9410 */;
import RPCServerDefault from "RPCServer" /* 9411 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default new RPCServerDefault(() => Promise.resolve(root));