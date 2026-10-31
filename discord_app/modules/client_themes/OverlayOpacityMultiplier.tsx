// === Module 5193: OverlayOpacityMultiplier ===

// Module 5193 (OverlayOpacityMultiplier)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/OverlayOpacityMultiplier.tsx");

export function normalizeOverlayOpacityMultiplier(unsupported_overlayOpacityMultiplier) {
  let num = unsupported_overlayOpacityMultiplier.unsupported_overlayOpacityMultiplier;
  if (num == null) {
    num = 1;
  }
  let num2 = 1;
  if (Number.isFinite(num)) {
    const _Math = Math;
    const _Math2 = Math;
    num2 = Math.min(1, Math.max(0, num));
  }
  return num2;
}