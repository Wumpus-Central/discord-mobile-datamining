// === Module 11411: ConjurePreviewMode ===

// Module 11411 (ConjurePreviewMode)
import util from "util" /* 1112 */;
import _modDef4244 from "module_4244" /* 4244 */;

require = fn;
const obj = {};
obj[fn(5656).EmbeddedSurfaceType.APP_CHANNEL] = _modDef4244.xI4N6Q;
obj[fn(5656).EmbeddedSurfaceType.VOICE_CHANNEL] = _modDef4244.oWMDh6;
obj[fn(5656).EmbeddedSurfaceType.MAIN] = _modDef4244["0ICBnS"];
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/preview/ConjurePreviewMode.tsx");

export const CONJURE_PREVIEW_MODE_ORDER = ["frame", "widget", "overlay", "bot"];
export function getPreviewFrameSurfaceLabel(surface) {
  const intl = util.intl;
  return intl.string(obj[surface]);
}