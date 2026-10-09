// === Module 17013: ConjurePreviewMode ===

// Module 17013 (ConjurePreviewMode)
import util from "util" /* 1126 */;
import _modDef3827 from "module_3827" /* 3827 */;

require = fn;
const obj = { frame: _modDef3827.FKuG6X, widget: _modDef3827.oOAVlP, overlay: _modDef3827.EnTNKg, bot: _modDef3827.uE5z15 };
const obj2 = {};
obj2[fn(8594).EmbeddedSurfaceType.APP_CHANNEL] = _modDef3827.xI4N6Q;
obj2[fn(8594).EmbeddedSurfaceType.VOICE_CHANNEL] = _modDef3827.oWMDh6;
obj2[fn(8594).EmbeddedSurfaceType.MAIN] = _modDef3827["0ICBnS"];
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