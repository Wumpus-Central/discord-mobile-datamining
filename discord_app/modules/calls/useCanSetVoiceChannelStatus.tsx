import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import { Permissions } from "sum";

const require = arg1;
let items = [, , ];
({ SET_VOICE_CHANNEL_STATUS: arr[0], CONNECT: arr[1], VIEW_CHANNEL: arr[2] } = Permissions);
let items1 = [Permissions.SET_VOICE_CHANNEL_STATUS];
const result = require("applyOverwrites").fileFinishedImporting("modules/calls/useCanSetVoiceChannelStatus.tsx");

export default function useCanSetVoiceChannelStatus(arg0) {
  const _require = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const dependencyMap = arg2;
  const items = [getUncachedChannelPermissions];
  const items1 = [arg0, flag, arg2];
  return _require(589).useStateFromStores(items, () => {
    let closure_1 = outer1_3;
    return closure_1 ? outer1_5 : outer1_4.every((arg0) => {
      if (null == table) {
        let canResult = lib.can(arg0, closure_0);
      } else {
        let obj = lib(table[2]);
        obj = { permission: null, user: null, context: null };
        obj[0] = arg0;
        obj[1] = tmp;
        obj[2] = closure_0;
        canResult = obj.can(obj);
      }
      return canResult;
    });
  }, items1);
};
export const _canSetVoiceChannelStatus = function _canSetVoiceChannelStatus(arg0, arg1, arg2, arg3) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = arg3;
  return arg2 ? items1 : items.every((arg0) => {
    if (null == table) {
      let canResult = lib.can(arg0, closure_0);
    } else {
      let obj = lib(table[2]);
      obj = { permission: null, user: null, context: null };
      obj[0] = arg0;
      obj[1] = tmp;
      obj[2] = closure_0;
      canResult = obj.can(obj);
    }
    return canResult;
  });
};
export const canSetVoiceChannelStatus = function canSetVoiceChannelStatus(arg0) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let closure_0 = arg0;
  let closure_1 = getUncachedChannelPermissions;
  let closure_2 = arg2;
  return flag ? items1 : items.every((arg0) => {
    if (null == table) {
      let canResult = lib.can(arg0, closure_0);
    } else {
      let obj = lib(table[2]);
      obj = { permission: null, user: null, context: null };
      obj[0] = arg0;
      obj[1] = tmp;
      obj[2] = closure_0;
      canResult = obj.can(obj);
    }
    return canResult;
  });
};