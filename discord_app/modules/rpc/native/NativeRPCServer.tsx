// === Module 7513: NativeRPCServer ===

// Module 7513 (NativeRPCServer)
import root from "root" /* 7514 */;
import RPCServerDefault from "RPCServer" /* 7515 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default new RPCServerDefault(() => Promise.resolve(root));