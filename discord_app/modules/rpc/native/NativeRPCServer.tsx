// === Module 9164: NativeRPCServer ===

// Module 9164 (NativeRPCServer)
import root from "root" /* 9165 */;
import RPCServerDefault from "RPCServer" /* 9166 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default new RPCServerDefault(() => Promise.resolve(root));