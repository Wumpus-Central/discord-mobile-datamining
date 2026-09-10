// === Module 14602: NativeRPCServer ===

// Module 14602 (NativeRPCServer)
import root from "root" /* 9626 */;
import RPCServerDefault from "RPCServer" /* 14603 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default new RPCServerDefault(() => Promise.resolve(root));