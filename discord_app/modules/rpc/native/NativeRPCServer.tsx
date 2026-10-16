// === Module 15480: NativeRPCServer ===

// Module 15480 (NativeRPCServer)
import root from "root" /* 11252 */;
import RPCServerDefault from "RPCServer" /* 15481 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default new RPCServerDefault(() => Promise.resolve(root));