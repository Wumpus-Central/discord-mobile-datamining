// === Module 13047: ConjurePreviewMode ===

// Module 13047 (ConjurePreviewMode)
import util from "util" /* 1113 */;
import _modDef4079 from "module_4079" /* 4079 */;

require = fn;
const obj = {};
obj[fn(5914).EmbeddedSurfaceType.APP_CHANNEL] = _modDef4079.xI4N6Q;
obj[fn(5914).EmbeddedSurfaceType.VOICE_CHANNEL] = _modDef4079.oWMDh6;
obj[fn(5914).EmbeddedSurfaceType.MAIN] = _modDef4079["0ICBnS"];
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/preview/ConjurePreviewMode.tsx");

export const CONJURE_PREVIEW_MODE_ORDER = ["frame", "widget", "overlay", "bot"];
export function getPreviewFrameSurfaceLabel(surface) {
  const intl = util.intl;
  return intl.string(obj[surface]);
}