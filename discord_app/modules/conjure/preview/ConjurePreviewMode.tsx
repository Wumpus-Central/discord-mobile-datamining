// === Module 12175: ConjurePreviewMode ===

// Module 12175 (ConjurePreviewMode)
import util from "util" /* 1112 */;
import _modDef4091 from "module_4091" /* 4091 */;

require = fn;
const obj = {};
obj[fn(5438).EmbeddedSurfaceType.APP_CHANNEL] = _modDef4091.xI4N6Q;
obj[fn(5438).EmbeddedSurfaceType.VOICE_CHANNEL] = _modDef4091.oWMDh6;
obj[fn(5438).EmbeddedSurfaceType.MAIN] = _modDef4091["0ICBnS"];
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/preview/ConjurePreviewMode.tsx");

export const CONJURE_PREVIEW_MODE_ORDER = ["frame", "widget", "overlay", "bot"];
export function getPreviewFrameSurfaceLabel(surface) {
  const intl = util.intl;
  return intl.string(obj[surface]);
}