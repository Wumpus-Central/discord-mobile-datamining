// === Module 6904: NativeRPCServer ===

// Module 6904 (NativeRPCServer)
import root from "root" /* 6905 */;
import RPCServerDefault from "RPCServer" /* 6906 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default new RPCServerDefault(() => Promise.resolve(root));