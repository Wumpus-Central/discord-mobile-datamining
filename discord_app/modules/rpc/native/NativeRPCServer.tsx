// === Module 9415: NativeRPCServer ===

// Module 9415 (NativeRPCServer)
import root from "root" /* 9416 */;
import RPCServerDefault from "RPCServer" /* 9417 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default new RPCServerDefault(() => Promise.resolve(root));