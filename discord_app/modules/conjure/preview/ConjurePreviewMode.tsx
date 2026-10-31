// === Module 12083: ConjurePreviewMode ===

// Module 12083 (ConjurePreviewMode)
import util from "util" /* 1113 */;
import _modDef3868 from "module_3868" /* 3868 */;

require = fn;
const obj = {};
obj[fn(5675).EmbeddedSurfaceType.APP_CHANNEL] = _modDef3868.xI4N6Q;
obj[fn(5675).EmbeddedSurfaceType.VOICE_CHANNEL] = _modDef3868.oWMDh6;
obj[fn(5675).EmbeddedSurfaceType.MAIN] = _modDef3868["0ICBnS"];
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/preview/ConjurePreviewMode.tsx");

export const CONJURE_PREVIEW_MODE_ORDER = ["frame", "widget", "overlay", "bot"];
export function getPreviewFrameSurfaceLabel(surface) {
  const intl = util.intl;
  return intl.string(obj[surface]);
}