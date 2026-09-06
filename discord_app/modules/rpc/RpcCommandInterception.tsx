// discord_app/modules/rpc/RpcCommandInterception.tsx
import size from "../../../_runtime/metro/00002__.js";

let global = null;
const result = size.fileFinishedImporting("modules/rpc/RpcCommandInterception.tsx");

export function setRpcCommandInterceptor(arg0) {
  global = arg0;
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
