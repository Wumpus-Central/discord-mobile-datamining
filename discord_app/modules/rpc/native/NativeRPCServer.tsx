// === Module 9228: NativeRPCServer ===

// Module 9228 (NativeRPCServer)
import root from "root" /* 9229 */;
import RPCServerDefault from "RPCServer" /* 9230 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default new RPCServerDefault(() => Promise.resolve(root));