// === Module 8320: sanitizeMediaDimension ===

// Module 8320 (sanitizeMediaDimension)
import obj132 from "obj132" /* 2 */;

const result = obj132.fileFinishedImporting("modules/messages/native/renderer/sanitizeMediaDimension.tsx");

export const sanitizeMediaDimension = function sanitizeMediaDimension(height) {
  if (typeof height !== "number") {
    let num = height;
  } else {
    const _Number = Number;
    num = 0;
    if (Number.isFinite(height)) {
      num = 0;
    }
  }
  return num;
};