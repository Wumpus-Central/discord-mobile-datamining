// === Module 11312: ConjurePreviewMode ===

// Module 11312 (ConjurePreviewMode)
import util from "util" /* 1112 */;
import _modDef4192 from "module_4192" /* 4192 */;

require = fn;
const obj = {};
obj[fn(5561).EmbeddedSurfaceType.APP_CHANNEL] = _modDef4192.xI4N6Q;
obj[fn(5561).EmbeddedSurfaceType.VOICE_CHANNEL] = _modDef4192.oWMDh6;
obj[fn(5561).EmbeddedSurfaceType.MAIN] = _modDef4192["0ICBnS"];
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/preview/ConjurePreviewMode.tsx");

export const CONJURE_PREVIEW_MODE_ORDER = ["frame", "widget", "overlay", "bot"];
export function getPreviewFrameSurfaceLabel(surface) {
  const intl = util.intl;
  return intl.string(obj[surface]);
}