// === Module 9456: NativeRPCServer ===

// Module 9456 (NativeRPCServer)
import root from "root" /* 9457 */;
import RPCServerDefault from "RPCServer" /* 9458 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default new RPCServerDefault(() => Promise.resolve(root));