// === Module 9258: NativeRPCServer ===

// Module 9258 (NativeRPCServer)
import root from "root" /* 9259 */;
import RPCServerDefault from "RPCServer" /* 9260 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default new RPCServerDefault(() => Promise.resolve(root));