// === Module 12256: ConjurePreviewMode ===

// Module 12256 (ConjurePreviewMode)
import util from "util" /* 1113 */;
import _modDef4024 from "module_4024" /* 4024 */;

require = fn;
const obj = {};
obj[fn(5829).EmbeddedSurfaceType.APP_CHANNEL] = _modDef4024.xI4N6Q;
obj[fn(5829).EmbeddedSurfaceType.VOICE_CHANNEL] = _modDef4024.oWMDh6;
obj[fn(5829).EmbeddedSurfaceType.MAIN] = _modDef4024["0ICBnS"];
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/preview/ConjurePreviewMode.tsx");

export const CONJURE_PREVIEW_MODE_ORDER = ["frame", "widget", "overlay", "bot"];
export function getPreviewFrameSurfaceLabel(surface) {
  const intl = util.intl;
  return intl.string(obj[surface]);
}