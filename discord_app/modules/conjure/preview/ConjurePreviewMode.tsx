// === Module 11718: ConjurePreviewMode ===

// Module 11718 (ConjurePreviewMode)
import util from "util" /* 1128 */;
import _modDef3820 from "module_3820" /* 3820 */;

require = fn;
const obj = {};
obj[fn(5587).EmbeddedSurfaceType.APP_CHANNEL] = _modDef3820.xI4N6Q;
obj[fn(5587).EmbeddedSurfaceType.VOICE_CHANNEL] = _modDef3820.oWMDh6;
obj[fn(5587).EmbeddedSurfaceType.MAIN] = _modDef3820["0ICBnS"];
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/preview/ConjurePreviewMode.tsx");

export const CONJURE_PREVIEW_MODE_ORDER = ["frame", "widget", "overlay", "bot"];
export const getPreviewFrameSurfaceLabel = function getPreviewFrameSurfaceLabel(surface) {
  const intl = util.intl;
  return intl.string(obj[surface]);
};