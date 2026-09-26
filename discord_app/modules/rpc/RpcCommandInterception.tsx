// === Module 12448: RpcCommandInterception ===

// Module 12448 (RpcCommandInterception)
import size from "module_2" /* 2 */;

let global = null;
const result = size.fileFinishedImporting("modules/rpc/RpcCommandInterception.tsx");

export function setRpcCommandInterceptor(answerFor) {
  global = answerFor;
}
export const interceptRpcCommand = function interceptRpcCommand(framebus) {
  if (null == global) {
    return null;
  } else {
    try {
      return global(framebus);
    } catch (err) {
      return tmp;
    }
  }
};