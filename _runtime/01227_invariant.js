// === Module 1227: invariant ===

// Module 1227 (invariant)

export default function invariant(arg0, arg1) {
  if (!arg0) {
    const _Error = Error;
    error = new Error("Invariant failed");
    throw error;
  }
};