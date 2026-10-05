// discord_app/modules/rpc/RpcCommandInterception.tsx
import size from "../../../_runtime/metro/00002__.js";

let c0 = null;
const result = size.fileFinishedImporting("modules/rpc/RpcCommandInterception.tsx");

export function setRpcCommandInterceptor(answerFor) {
  let c0 = answerFor;
}
export const interceptRpcCommand = function interceptRpcCommand(arg0) {
  if (null == _null) {
    return null;
  } else {
    try {
      return _null(arg0);
    } catch (err) {
      return null;
    }
  }
};
