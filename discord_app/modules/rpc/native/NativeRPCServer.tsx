// === Module 14806: NativeRPCServer ===

// Module 14806 (NativeRPCServer)
import root from "root" /* 9583 */;
import RPCServerDefault from "RPCServer" /* 14807 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default new RPCServerDefault(() => Promise.resolve(root));