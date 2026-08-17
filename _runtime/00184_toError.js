// _runtime/00184_toError.js
arg5.default = function toError(arg0) {
  error = arg0;
  if (!(arg0 instanceof Error)) {
    const _Error = Error;
    const _String = String;
    error = new Error(String(arg0));
  }
  return error;
};