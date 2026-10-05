// === Module 2064: TypeUtils ===

// Module 2064 (TypeUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/type-utils/TypeUtils.tsx");

export function exact(arg0) {
  return arg0;
}
export const hasOwnProperty = function hasOwnProperty(keys, type) {
  return keys.hasOwnProperty(type);
};
export const dangerouslyCast = function dangerouslyCast(result, UnknownChannelRecord) {
  return Object.setPrototypeOf(result, UnknownChannelRecord.prototype);
};
export const assertUnreachable = function assertUnreachable(id, arg1) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let flag = obj.andFail;
  if (flag === undefined) {
    flag = true;
  }
  if (flag) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error();
    throw error;
  }
};
export const arrayIsNotEmpty = function arrayIsNotEmpty(arg0) {
  return arg0.length > 0;
};