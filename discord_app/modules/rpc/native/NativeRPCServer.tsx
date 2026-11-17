// === Module 7308: NativeRPCServer ===

// Module 7308 (NativeRPCServer)
import root from "root" /* 7309 */;
import RPCServerDefault from "RPCServer" /* 7310 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default new RPCServerDefault(() => Promise.resolve(root));