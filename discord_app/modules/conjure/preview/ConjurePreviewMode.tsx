// === Module 11468: ConjurePreviewMode ===

// Module 11468 (ConjurePreviewMode)
import util from "util" /* 1112 */;
import _modDef4245 from "module_4245" /* 4245 */;

require = fn;
const obj = {};
obj[fn(5687).EmbeddedSurfaceType.APP_CHANNEL] = _modDef4245.xI4N6Q;
obj[fn(5687).EmbeddedSurfaceType.VOICE_CHANNEL] = _modDef4245.oWMDh6;
obj[fn(5687).EmbeddedSurfaceType.MAIN] = _modDef4245["0ICBnS"];
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/preview/ConjurePreviewMode.tsx");

export const CONJURE_PREVIEW_MODE_ORDER = ["frame", "widget", "overlay", "bot"];
export function getPreviewFrameSurfaceLabel(surface) {
  const intl = util.intl;
  return intl.string(obj[surface]);
}