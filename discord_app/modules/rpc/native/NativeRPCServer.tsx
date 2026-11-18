// === Module 6813: NativeRPCServer ===

// Module 6813 (NativeRPCServer)
import root from "root" /* 6814 */;
import RPCServerDefault from "RPCServer" /* 6815 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default new RPCServerDefault(() => Promise.resolve(root));