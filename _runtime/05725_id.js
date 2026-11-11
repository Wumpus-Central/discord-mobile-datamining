// === Module 5725: id ===

// Module 5725 (id)
let c0 = 0;

export () => {
  const result = (c0 + 1) % Number.MAX_SAFE_INTEGER;
  c0 = result;
  return result;
}