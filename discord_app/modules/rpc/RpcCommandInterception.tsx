// discord_app/modules/rpc/RpcCommandInterception.tsx
import set from "../../../_runtime/00002_set.js";

let c0 = null;
const result = set.fileFinishedImporting("modules/rpc/RpcCommandInterception.tsx");

export function setRpcCommandInterceptor(arg0) {
  closure_0 = arg0;
}
export const interceptRpcCommand = function interceptRpcCommand(arg0) {
  if (null == _null) {
    return null;
  } else {
    try {
      return _null(arg0);
    } catch (err) {
      return tmp;
    }
  }
};
