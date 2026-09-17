// === Module 17360: useCanSetVoiceChannelStatus ===

// Module 17360 (useCanSetVoiceChannelStatus)
import PermissionStore from "PermissionStore" /* 4278 */;

const require = globalThis.__r;

const require = fn;
const Permissions = fn(1085).Permissions;
let items = [, , ];
({ SET_VOICE_CHANNEL_STATUS: arr[0], CONNECT: arr[1], VIEW_CHANNEL: arr[2] } = Permissions);
let items1 = [Permissions.SET_VOICE_CHANNEL_STATUS];
const size = fn(2);
const result = size.fileFinishedImporting("modules/calls/useCanSetVoiceChannelStatus.tsx");

export default function useCanSetVoiceChannelStatus(arg0) {
  _require = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  dependencyMap = arg2;
  items = [PermissionStore];
  items1 = [arg0, flag, arg2];
  return require("initialize").useStateFromStores(items, () => {
    closure_1 = PermissionStore;
    return flag ? items1 : items.every((permission) => {
      if (null == dependencyMap) {
        let canResult = closure_1.can(permission, context);
      } else {
        const obj2 = { permission, user: tmp, context };
        canResult = flag(dependencyMap[2]).can(obj2);
        const obj = flag(dependencyMap[2]);
      }
      return canResult;
    });
  }, items1);
};
export const _canSetVoiceChannelStatus = function _canSetVoiceChannelStatus(arg0, arg1, arg2, arg3) {
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = arg3;
  return arg2 ? items1 : items.every((permission) => {
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
export const canSetVoiceChannelStatus = function canSetVoiceChannelStatus(arg0) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  closure_0 = arg0;
  closure_1 = PermissionStore;
  closure_2 = arg2;
  return flag ? items1 : items.every((permission) => {
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