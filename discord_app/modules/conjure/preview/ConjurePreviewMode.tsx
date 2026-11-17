// === Module 14379: ConjurePreviewMode ===

// Module 14379 (ConjurePreviewMode)
import util from "util" /* 1113 */;
import _modDef4133 from "module_4133" /* 4133 */;

require = fn;
const obj = {};
obj[fn(5971).EmbeddedSurfaceType.APP_CHANNEL] = _modDef4133.xI4N6Q;
obj[fn(5971).EmbeddedSurfaceType.VOICE_CHANNEL] = _modDef4133.oWMDh6;
obj[fn(5971).EmbeddedSurfaceType.MAIN] = _modDef4133["0ICBnS"];
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/preview/ConjurePreviewMode.tsx");

export const CONJURE_PREVIEW_MODE_ORDER = ["frame", "widget", "overlay", "bot"];
export function getPreviewFrameSurfaceLabel(surface) {
  const intl = util.intl;
  return intl.string(obj[surface]);
}