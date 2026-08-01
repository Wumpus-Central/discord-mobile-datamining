// === Module 1230: invariant ===

// Module 1230 (invariant)

export default function invariant(arg0, arg1) {
  if (!arg0) {
    const _Error = Error;
    const error = new Error("Invariant failed");
    throw error;
  }
};