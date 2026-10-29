// === Module 11851: ConjurePreviewMode ===

// Module 11851 (ConjurePreviewMode)
import util from "util" /* 1125 */;
import _modDef3864 from "module_3864" /* 3864 */;

require = fn;
const obj = {};
obj[fn(5664).EmbeddedSurfaceType.APP_CHANNEL] = _modDef3864.xI4N6Q;
obj[fn(5664).EmbeddedSurfaceType.VOICE_CHANNEL] = _modDef3864.oWMDh6;
obj[fn(5664).EmbeddedSurfaceType.MAIN] = _modDef3864["0ICBnS"];
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/preview/ConjurePreviewMode.tsx");

export const CONJURE_PREVIEW_MODE_ORDER = ["frame", "widget", "overlay", "bot"];
export function getPreviewFrameSurfaceLabel(surface) {
  const intl = util.intl;
  return intl.string(obj[surface]);
}