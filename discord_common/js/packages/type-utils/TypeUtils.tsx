// === Module 1385: exact ===

// Module 1385 (exact)
const result = require("set").fileFinishedImporting("../discord_common/js/packages/type-utils/TypeUtils.tsx");

export function exact(arg0) {
  return arg0;
}
export const hasOwnProperty = function hasOwnProperty(key10009, type) {
  return key10009.hasOwnProperty(type);
};
export const dangerouslyCast = function dangerouslyCast(reduced, ForumChannelRecord) {
  return Object.setPrototypeOf(reduced, ForumChannelRecord.prototype);
};
export const assertUnreachable = function assertUnreachable(closure_0, arg1) {
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