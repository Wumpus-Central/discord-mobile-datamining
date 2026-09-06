// === Module 297: normalizeRect ===

// Module 297 (normalizeRect)

export function createSquare(bottom) {
  const rect = { bottom, left: bottom, right: bottom, top: bottom };
  return rect;
}
export const normalizeRect = function normalizeRect(hitSlop) {
  let tmp = hitSlop;
  if (typeof hitSlop === "number") {
    const rect = { bottom: hitSlop, left: hitSlop, right: hitSlop, top: hitSlop };
    tmp = rect;
  }
  return tmp;
};