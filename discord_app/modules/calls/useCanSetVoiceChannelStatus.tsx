// discord_app/modules/calls/useCanSetVoiceChannelStatus.tsx
import Constants from "../../../discord_common/js/shared/Constants.tsx";
import PermissionStore_mod from "../../stores/PermissionStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap;

let PermissionStore = PermissionStore_mod;
const Permissions = Constants.Permissions;
let items = [, ,];
({ SET_VOICE_CHANNEL_STATUS: arr[0], CONNECT: arr[1], VIEW_CHANNEL: arr[2] } = Permissions);
let items1 = [Permissions.SET_VOICE_CHANNEL_STATUS];
function _canSetVoiceChannelStatus(arg0, arg1, arg2, arg3) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = arg3;
  const obj = arg2 ? items1 : items;
  return obj.every((permission) => {
    let canResult;
    if (null == closure_2) {
      canResult = closure_1.can(permission, context);
    } else {
      const obj2 = { permission, user: tmp, context };
      const obj = PermissionStore(closure_2_2[2]);
      canResult = obj.can(obj2);
    }
    return canResult;
  });
}
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1, arg2) => {
      let closure_0;
      let first;
      _require = arg0;
      let closure_1 = arg2;
      let obj = require("react");
      const cResult = obj.c(6);
      dependencyMap = tmp4;
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        items = [PermissionStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === arg0) {
        if (cResult[2] === (undefined !== arg1 && arg1)) {
          let tmp7;
          let tmp8;
          if (cResult[3] === arg2) {
            tmp7 = cResult[4];
            tmp8 = cResult[5];
          }
          const tmpResult = tmp(504);
          return tmpResult.useStateFromStores(first, tmp7, tmp8);
        }
      }
      class S {
        constructor() {
          closure_1 = closure_3;
          closure_2 = closure_1;
          obj = closure_2 ? closure_5 : closure_4;
          return obj.every(() => {
            /* body not rendered: F129400 */
          });
        }
      }
      items1 = [arg0, undefined !== arg1 && arg1, arg2];
      cResult[1] = arg0;
      cResult[2] = undefined !== arg1 && arg1;
      cResult[3] = arg2;
      cResult[4] = S;
      cResult[5] = items1;
      tmp8 = items1;
      tmp7 = S;
    }
  : (arg0) => {
      _require = arg0;
      let flag = arg1;
      if (arg1 === undefined) {
        flag = false;
      }
      dependencyMap = arg2;
      let obj = require("get initialized");
      items = [PermissionStore];
      items1 = [arg0, flag, arg2];
      return obj.useStateFromStores(
        items,
        () => {
          let obj = flag ? items1 : items;
          return obj.every((permission) => {
            let canResult;
            if (null == closure_2) {
              canResult = closure_1.can(permission, context);
            } else {
              const obj2 = { permission, user: tmp, context };
              const obj = PermissionStore(closure_2_2[2]);
              canResult = obj.can(obj2);
            }
            return canResult;
          });
        },
        items1,
      );
    };
const result = size.fileFinishedImporting("modules/calls/useCanSetVoiceChannelStatus.tsx");

export default tmp2;
export { _canSetVoiceChannelStatus };
export const canSetVoiceChannelStatus = function canSetVoiceChannelStatus(arg0) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let closure_0 = arg0;
  let closure_1 = PermissionStore;
  let closure_2 = arg2;
  const obj = flag ? items1 : items;
  return obj.every((permission) => {
    let canResult;
    if (null == closure_2) {
      canResult = closure_1.can(permission, context);
    } else {
      const obj2 = { permission, user: tmp, context };
      const obj = PermissionStore(closure_2_2[2]);
      canResult = obj.can(obj2);
    }
    return canResult;
  });
};
