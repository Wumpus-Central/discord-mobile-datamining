// === Module 6785: NativeRPCServer ===

// Module 6785 (NativeRPCServer)
import root from "root" /* 6786 */;
import RPCServerDefault from "RPCServer" /* 6787 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default new RPCServerDefault(() => Promise.resolve(root));