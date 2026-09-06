// === Module 1969: TypeUtils ===

// Module 1969 (TypeUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/type-utils/TypeUtils.tsx");

export function exact(arg0) {
  return arg0;
}
export const hasOwnProperty = function hasOwnProperty(key10009, Shape) {
  return key10009.hasOwnProperty(Shape);
};
export const dangerouslyCast = function dangerouslyCast(reduced, UnknownChannelRecord) {
  return Object.setPrototypeOf(reduced, UnknownChannelRecord.prototype);
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
    const error = new Error();
    throw error;
  }
};
export const arrayIsNotEmpty = function arrayIsNotEmpty(arg0) {
  return arg0.length > 0;
};