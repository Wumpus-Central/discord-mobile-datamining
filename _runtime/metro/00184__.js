// === Module 184: ? ===

// Module 184

export default function toError(arg0) {
  let error = arg0;
  if (!(arg0 instanceof Error)) {
    const _Error = Error;
    const _String = String;
    error = new Error(String(arg0));
  }
  return error;
};