// === Module 9466: RpcCommandInterception ===

// Module 9466 (RpcCommandInterception)
import size from "module_2" /* 2 */;

let global = null;
const result = size.fileFinishedImporting("modules/rpc/RpcCommandInterception.tsx");

export function setRpcCommandInterceptor(arg0) {
  global = arg0;
}
export function interceptRpcCommand(framebus) {
  if (null == global) {
    return null;
  } else {
    try {
      return global(framebus);
    } catch (err) {
      return tmp;
    }
  }
}