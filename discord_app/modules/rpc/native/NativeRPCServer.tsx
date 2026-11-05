// === Module 9481: NativeRPCServer ===

// Module 9481 (NativeRPCServer)
import root from "root" /* 9482 */;
import RPCServerDefault from "RPCServer" /* 9483 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default new RPCServerDefault(() => Promise.resolve(root));