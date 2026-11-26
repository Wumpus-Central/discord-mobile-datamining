// === Module 7639: NativeRPCServer ===

// Module 7639 (NativeRPCServer)
import root from "root" /* 7640 */;
import RPCServerDefault from "RPCServer" /* 7641 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default new RPCServerDefault(() => Promise.resolve(root));