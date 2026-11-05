// === Module 12289: ConjurePreviewMode ===

// Module 12289 (ConjurePreviewMode)
import util from "util" /* 1113 */;
import _modDef3995 from "module_3995" /* 3995 */;

require = fn;
const obj = {};
obj[fn(5811).EmbeddedSurfaceType.APP_CHANNEL] = _modDef3995.xI4N6Q;
obj[fn(5811).EmbeddedSurfaceType.VOICE_CHANNEL] = _modDef3995.oWMDh6;
obj[fn(5811).EmbeddedSurfaceType.MAIN] = _modDef3995["0ICBnS"];
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/preview/ConjurePreviewMode.tsx");

export const CONJURE_PREVIEW_MODE_ORDER = ["frame", "widget", "overlay", "bot"];
export function getPreviewFrameSurfaceLabel(surface) {
  const intl = util.intl;
  return intl.string(obj[surface]);
}