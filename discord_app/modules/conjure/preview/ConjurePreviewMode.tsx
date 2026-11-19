// === Module 18287: ConjurePreviewMode ===

// Module 18287 (ConjurePreviewMode)
import util from "util" /* 1113 */;
import _modDef4089 from "module_4089" /* 4089 */;

require = fn;
const obj = {};
obj[fn(5436).EmbeddedSurfaceType.APP_CHANNEL] = _modDef4089.xI4N6Q;
obj[fn(5436).EmbeddedSurfaceType.VOICE_CHANNEL] = _modDef4089.oWMDh6;
obj[fn(5436).EmbeddedSurfaceType.MAIN] = _modDef4089["0ICBnS"];
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/preview/ConjurePreviewMode.tsx");

export const CONJURE_PREVIEW_MODE_ORDER = ["frame", "widget", "overlay", "bot"];
export function getPreviewFrameSurfaceLabel(surface) {
  const intl = util.intl;
  return intl.string(obj[surface]);
}