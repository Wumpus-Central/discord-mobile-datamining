// === Module 4875: TypeUtils ===

// Module 4875 (TypeUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/type-utils/TypeUtils.tsx");

export function exact(arg0) {
  return arg0;
}
export function hasOwnProperty(key10009, Shape) {
  return key10009.hasOwnProperty(Shape);
}
export function dangerouslyCast(type, UnknownChannelRecord) {
  return Object.setPrototypeOf(type, UnknownChannelRecord.prototype);
}
export function assertUnreachable(id, arg1) {
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
}
export function arrayIsNotEmpty(arg0) {
  return arg0.length > 0;
}