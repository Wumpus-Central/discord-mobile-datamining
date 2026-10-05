// === Module 184: toError ===

// Module 184 (toError)

export default function toError(arg0) {
  let error = arg0;
  if (!(arg0 instanceof Error)) {
    const _Error = Error;
    const _String = String;
    const self = this;
    const self2 = this;
    error = new Error(String(arg0));
  }
  return error;
};