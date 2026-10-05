// === Module 1207: assert ===

// Module 1207 (assert)

export const assert = function assert(opt, arg1) {
  const tmp = opt;
  if (!tmp) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error(arg1);
    throw error;
  }
};
export const assertNever = function assertNever(arg0, arg1) {
  let text = arg1;
  const _Error = Error;
  if (null == arg1) {
    text = `Unexpected object: ${arg0}`;
  }
  const _Error1 = new _Error(text);
  throw _Error1;
};
export const assertInt32 = function assertInt32(NumberResult) {
  if (typeof NumberResult !== "number") {
    const _Error2 = Error;
    const self3 = this;
    const self4 = this;
    const error = new Error("invalid int 32: " + typeof NumberResult);
    throw error;
  } else {
    const _Number = Number;
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error1 = new Error("invalid int 32: " + NumberResult);
    throw error1;
  }
};
export const assertUInt32 = function assertUInt32(NumberResult) {
  if (typeof NumberResult !== "number") {
    const _Error2 = Error;
    const self3 = this;
    const self4 = this;
    const error = new Error("invalid uint 32: " + typeof NumberResult);
    throw error;
  } else {
    const _Number = Number;
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error1 = new Error("invalid uint 32: " + NumberResult);
    throw error1;
  }
};
export const assertFloat32 = function assertFloat32(NumberResult) {
  if (typeof NumberResult !== "number") {
    const _Error2 = Error;
    const self3 = this;
    const self4 = this;
    const error = new Error("invalid float 32: " + typeof NumberResult);
    throw error;
  } else {
    const _Number = Number;
    if (Number.isFinite(NumberResult)) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error1 = new Error("invalid float 32: " + NumberResult);
      throw error1;
    }
  }
};