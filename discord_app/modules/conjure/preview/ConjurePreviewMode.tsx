// === Module 12297: ConjurePreviewMode ===

// Module 12297 (ConjurePreviewMode)
import util from "util" /* 1112 */;
import _modDef4190 from "module_4190" /* 4190 */;

require = fn;
const obj = {};
obj[fn(5557).EmbeddedSurfaceType.APP_CHANNEL] = _modDef4190.xI4N6Q;
obj[fn(5557).EmbeddedSurfaceType.VOICE_CHANNEL] = _modDef4190.oWMDh6;
obj[fn(5557).EmbeddedSurfaceType.MAIN] = _modDef4190["0ICBnS"];
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/preview/ConjurePreviewMode.tsx");

export const CONJURE_PREVIEW_MODE_ORDER = ["frame", "widget", "overlay", "bot"];
export function getPreviewFrameSurfaceLabel(surface) {
  const intl = util.intl;
  return intl.string(obj[surface]);
}