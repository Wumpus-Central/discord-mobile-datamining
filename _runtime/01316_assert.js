arg5.assert = undefined;
arg5.assertNever = undefined;
arg5.assertInt32 = undefined;
arg5.assertUInt32 = undefined;
arg5.assertFloat32 = undefined;
arg5.assert = function assert(arg0, arg1) {
  if (!arg0) {
    const _Error = Error;
    const error = new Error(arg1);
    throw error;
  }
};
arg5.assertNever = function assertNever(arg0, arg1) {
  let text = arg1;
  if (null == arg1) {
    text = `Unexpected object: ${arg0}`;
  }
  const error = new Error(text);
  throw error;
};
arg5.assertInt32 = function assertInt32(NumberResult) {
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
arg5.assertUInt32 = function assertUInt32(NumberResult) {
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
arg5.assertFloat32 = function assertFloat32(NumberResult) {
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