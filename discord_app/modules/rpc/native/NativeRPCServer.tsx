// === Module 9291: NativeRPCServer ===

// Module 9291 (NativeRPCServer)
import root from "root" /* 9292 */;
import RPCServerDefault from "RPCServer" /* 9293 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default new RPCServerDefault(() => Promise.resolve(root));