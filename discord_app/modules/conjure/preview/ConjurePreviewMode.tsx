// === Module 13136: ConjurePreviewMode ===

// Module 13136 (ConjurePreviewMode)
import util from "util" /* 1113 */;
import _modDef4131 from "module_4131" /* 4131 */;

require = fn;
const obj = {};
obj[fn(5977).EmbeddedSurfaceType.APP_CHANNEL] = _modDef4131.xI4N6Q;
obj[fn(5977).EmbeddedSurfaceType.VOICE_CHANNEL] = _modDef4131.oWMDh6;
obj[fn(5977).EmbeddedSurfaceType.MAIN] = _modDef4131["0ICBnS"];
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/preview/ConjurePreviewMode.tsx");

export const CONJURE_PREVIEW_MODE_ORDER = ["frame", "widget", "overlay", "bot"];
export function getPreviewFrameSurfaceLabel(surface) {
  const intl = util.intl;
  return intl.string(obj[surface]);
}