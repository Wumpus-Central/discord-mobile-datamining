// === Module 6528: ? ===

// Module 6528

export const findLastIndex = function findLastIndex(mapped, fn) {
  let diff = mapped.length - 1;
  if (0 <= diff) {
    while (!fn(mapped[diff])) {
      diff = diff - 1;
    }
    return diff;
  }
  return -1;
};