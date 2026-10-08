// discord_app/modules/calls/useCanSetVoiceChannelStatus.tsx
import PermissionStore from "../../stores/PermissionStore.tsx";

const require = globalThis.__r;

const require = fn;
const Permissions = fn(1096).Permissions;
let items = [, ,];
({ SET_VOICE_CHANNEL_STATUS: arr[0], CONNECT: arr[1], VIEW_CHANNEL: arr[2] } = Permissions);
let items1 = [Permissions.SET_VOICE_CHANNEL_STATUS];
const ReactCompilerGating = fn(558);
function _canSetVoiceChannelStatus(arg0, arg1, arg2, arg3) {
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = arg3;
  return arg2
    ? items1
    : items.every((permission) => {
        if (null == dependencyMap) {
          let canResult = closure_1.can(permission, context);
        } else {
          const obj2 = { permission, user: tmp, context };
          canResult = flag(dependencyMap[2]).can(obj2);
          const obj = flag(dependencyMap[2]);
        }
        return canResult;
      });
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/calls/useCanSetVoiceChannelStatus.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useCanSetVoiceChannelStatus(arg0, arg1, arg2) {
      _require = arg0;
      closure_1 = arg2;
      const cResult = require("c").c(6);
      dependencyMap = tmp4;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        items = [PermissionStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === arg0) {
        if (cResult[2] === tmp4) {
          if (cResult[3] === arg2) {
            let tmp7 = cResult[4];
            let tmp8 = cResult[5];
          }
          return tmp(504).useStateFromStores(first, tmp7, tmp8);
        }
      }
      const fn = function o() {
        closure_1 = PermissionStore;
        closure_2 = closure_1;
        return closure_2
          ? items1
          : items.every((permission) => {
              if (null == dependencyMap) {
                let canResult = closure_1.can(permission, context);
              } else {
                const obj2 = { permission, user: tmp, context };
                canResult = flag(dependencyMap[2]).can(obj2);
                const obj = flag(dependencyMap[2]);
              }
              return canResult;
            });
      };
      items1 = [arg0, undefined !== arg1 && arg1, arg2];
      cResult[1] = arg0;
      cResult[2] = undefined !== arg1 && arg1;
      cResult[3] = arg2;
      cResult[4] = fn;
      cResult[5] = items1;
      tmp8 = items1;
      tmp7 = fn;
      const obj = require("c");
      tmp = _require;
    }
  : function useCanSetVoiceChannelStatus(arg0) {
      _require = arg0;
      let flag = arg1;
      if (arg1 === undefined) {
        flag = false;
      }
      dependencyMap = arg2;
      items = [PermissionStore];
      items1 = [arg0, flag, arg2];
      return require("initialize").useStateFromStores(
        items,
        () => {
          closure_1 = PermissionStore;
          return flag
            ? items1
            : items.every((permission) => {
                if (null == dependencyMap) {
                  let canResult = closure_1.can(permission, context);
                } else {
                  const obj2 = { permission, user: tmp, context };
                  canResult = flag(dependencyMap[2]).can(obj2);
                  const obj = flag(dependencyMap[2]);
                }
                return canResult;
              });
        },
        items1,
      );
    };
export { _canSetVoiceChannelStatus };
export const canSetVoiceChannelStatus = function canSetVoiceChannelStatus(arg0) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  closure_0 = arg0;
  closure_1 = PermissionStore;
  closure_2 = arg2;
  return flag
    ? items1
    : items.every((permission) => {
        if (null == dependencyMap) {
          let canResult = closure_1.can(permission, context);
        } else {
          const obj2 = { permission, user: tmp, context };
          canResult = flag(dependencyMap[2]).can(obj2);
          const obj = flag(dependencyMap[2]);
        }
        return canResult;
      });
};
