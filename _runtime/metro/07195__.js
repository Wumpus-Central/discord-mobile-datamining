// === Module 7195: ? ===

// Module 7195

export function findLastIndex(arg0, fn) {
  let diff = arg0.length - 1;
  if (0 <= diff) {
    while (!fn(arg0[diff])) {
      diff = diff - 1;
    }
    return diff;
  }
  return -1;
}