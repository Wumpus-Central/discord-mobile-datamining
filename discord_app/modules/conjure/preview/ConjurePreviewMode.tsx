// === Module 18294: ConjurePreviewMode ===

// Module 18294 (ConjurePreviewMode)
import util from "util" /* 1113 */;
import _modDef4121 from "module_4121" /* 4121 */;

require = fn;
const obj = {};
obj[fn(5467).EmbeddedSurfaceType.APP_CHANNEL] = _modDef4121.xI4N6Q;
obj[fn(5467).EmbeddedSurfaceType.VOICE_CHANNEL] = _modDef4121.oWMDh6;
obj[fn(5467).EmbeddedSurfaceType.MAIN] = _modDef4121["0ICBnS"];
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/preview/ConjurePreviewMode.tsx");

export const CONJURE_PREVIEW_MODE_ORDER = ["frame", "widget", "overlay", "bot"];
export function getPreviewFrameSurfaceLabel(surface) {
  const intl = util.intl;
  return intl.string(obj[surface]);
}