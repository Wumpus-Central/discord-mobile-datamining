// === Module 1197: assert ===

// Module 1197 (assert)

export const assert = function assert(arg0, arg1) {
  if (!arg0) {
    const _Error = Error;
    const error = new Error(arg1);
    throw error;
  }
};
export const assertNever = function assertNever(arg0, arg1) {
  let text = arg1;
  if (null == arg1) {
    text = `Unexpected object: ${arg0}`;
  }
  const error = new Error(text);
  throw error;
};
export const assertInt32 = function assertInt32(NumberResult) {
  if (typeof NumberResult !== "number") {
    const _Error2 = Error;
    const error = new Error("invalid int 32: " + typeof NumberResult);
    throw error;
  } else {
    const _Number = Number;
    const _Error = Error;
    const error1 = new Error("invalid int 32: " + NumberResult);
    throw error1;
  }
};
export const assertUInt32 = function assertUInt32(NumberResult) {
  if (typeof NumberResult !== "number") {
    const _Error2 = Error;
    const error = new Error("invalid uint 32: " + typeof NumberResult);
    throw error;
  } else {
    const _Number = Number;
    const _Error = Error;
    const error1 = new Error("invalid uint 32: " + NumberResult);
    throw error1;
  }
};
export const assertFloat32 = function assertFloat32(NumberResult) {
  if (typeof NumberResult !== "number") {
    const _Error2 = Error;
    const error = new Error("invalid float 32: " + typeof NumberResult);
    throw error;
  } else {
    const _Number = Number;
    if (Number.isFinite(NumberResult)) {
      const _Error = Error;
      const error1 = new Error("invalid float 32: " + NumberResult);
      throw error1;
    }
  }
};