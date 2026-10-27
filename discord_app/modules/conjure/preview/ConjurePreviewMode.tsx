// === Module 11761: ConjurePreviewMode ===

// Module 11761 (ConjurePreviewMode)
import util from "util" /* 1125 */;
import _modDef3831 from "module_3831" /* 3831 */;

require = fn;
const obj = {};
obj[fn(5627).EmbeddedSurfaceType.APP_CHANNEL] = _modDef3831.xI4N6Q;
obj[fn(5627).EmbeddedSurfaceType.VOICE_CHANNEL] = _modDef3831.oWMDh6;
obj[fn(5627).EmbeddedSurfaceType.MAIN] = _modDef3831["0ICBnS"];
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/preview/ConjurePreviewMode.tsx");

export const CONJURE_PREVIEW_MODE_ORDER = ["frame", "widget", "overlay", "bot"];
export const getPreviewFrameSurfaceLabel = function getPreviewFrameSurfaceLabel(surface) {
  const intl = util.intl;
  return intl.string(obj[surface]);
};