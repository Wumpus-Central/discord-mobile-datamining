// === Module 11697: ConjurePreviewMode ===

// Module 11697 (ConjurePreviewMode)
import util from "util" /* 1128 */;
import _modDef3883 from "module_3883" /* 3883 */;

require = fn;
const obj = { frame: _modDef3883.FKuG6X, widget: _modDef3883.oOAVlP, overlay: _modDef3883.EnTNKg, bot: _modDef3883.uE5z15 };
const obj2 = {};
obj2[fn(6297).EmbeddedSurfaceType.APP_CHANNEL] = _modDef3883.xI4N6Q;
obj2[fn(6297).EmbeddedSurfaceType.VOICE_CHANNEL] = _modDef3883.oWMDh6;
obj2[fn(6297).EmbeddedSurfaceType.MAIN] = _modDef3883["0ICBnS"];
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/preview/ConjurePreviewMode.tsx");

export const CONJURE_PREVIEW_MODE_ORDER = ["frame", "widget", "overlay", "bot"];
export const getPreviewModeLabel = function getPreviewModeLabel(arg0) {
  const intl = util.intl;
  return intl.string(obj[arg0]);
};
export const getPreviewFrameSurfaceLabel = function getPreviewFrameSurfaceLabel(surface) {
  const intl = util.intl;
  return intl.string(obj2[surface]);
};