// === Module 12256: ConjurePreviewMode ===

// Module 12256 (ConjurePreviewMode)
import util from "util" /* 1113 */;
import _modDef4028 from "module_4028" /* 4028 */;

require = fn;
const obj = {};
obj[fn(5801).EmbeddedSurfaceType.APP_CHANNEL] = _modDef4028.xI4N6Q;
obj[fn(5801).EmbeddedSurfaceType.VOICE_CHANNEL] = _modDef4028.oWMDh6;
obj[fn(5801).EmbeddedSurfaceType.MAIN] = _modDef4028["0ICBnS"];
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/preview/ConjurePreviewMode.tsx");

export const CONJURE_PREVIEW_MODE_ORDER = ["frame", "widget", "overlay", "bot"];
export function getPreviewFrameSurfaceLabel(surface) {
  const intl = util.intl;
  return intl.string(obj[surface]);
}