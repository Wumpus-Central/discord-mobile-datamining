// === Module 9180: NativeRPCServer ===

// Module 9180 (NativeRPCServer)
import root from "root" /* 9181 */;
import RPCServerDefault from "RPCServer" /* 9182 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default new RPCServerDefault(() => Promise.resolve(root));