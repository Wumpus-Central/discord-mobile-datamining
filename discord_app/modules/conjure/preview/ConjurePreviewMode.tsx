// === Module 12247: ConjurePreviewMode ===

// Module 12247 (ConjurePreviewMode)
import util from "util" /* 1113 */;
import _modDef4026 from "module_4026" /* 4026 */;

require = fn;
const obj = {};
obj[fn(5799).EmbeddedSurfaceType.APP_CHANNEL] = _modDef4026.xI4N6Q;
obj[fn(5799).EmbeddedSurfaceType.VOICE_CHANNEL] = _modDef4026.oWMDh6;
obj[fn(5799).EmbeddedSurfaceType.MAIN] = _modDef4026["0ICBnS"];
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/preview/ConjurePreviewMode.tsx");

export const CONJURE_PREVIEW_MODE_ORDER = ["frame", "widget", "overlay", "bot"];
export function getPreviewFrameSurfaceLabel(surface) {
  const intl = util.intl;
  return intl.string(obj[surface]);
}