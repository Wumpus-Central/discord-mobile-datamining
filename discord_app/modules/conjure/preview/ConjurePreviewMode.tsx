// === Module 12044: ConjurePreviewMode ===

// Module 12044 (ConjurePreviewMode)
import util from "util" /* 1114 */;
import _modDef3865 from "module_3865" /* 3865 */;

require = fn;
const obj = {};
obj[fn(5670).EmbeddedSurfaceType.APP_CHANNEL] = _modDef3865.xI4N6Q;
obj[fn(5670).EmbeddedSurfaceType.VOICE_CHANNEL] = _modDef3865.oWMDh6;
obj[fn(5670).EmbeddedSurfaceType.MAIN] = _modDef3865["0ICBnS"];
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/preview/ConjurePreviewMode.tsx");

export const CONJURE_PREVIEW_MODE_ORDER = ["frame", "widget", "overlay", "bot"];
export function getPreviewFrameSurfaceLabel(surface) {
  const intl = util.intl;
  return intl.string(obj[surface]);
}