// === Module 17080: ConjurePreviewMode ===

// Module 17080 (ConjurePreviewMode)
import util from "util" /* 1126 */;
import _modDef3849 from "module_3849" /* 3849 */;

require = fn;
const obj = { frame: _modDef3849.FKuG6X, widget: _modDef3849.oOAVlP, overlay: _modDef3849.EnTNKg, bot: _modDef3849.uE5z15 };
const obj2 = {};
obj2[fn(8610).EmbeddedSurfaceType.APP_CHANNEL] = _modDef3849.xI4N6Q;
obj2[fn(8610).EmbeddedSurfaceType.VOICE_CHANNEL] = _modDef3849.oWMDh6;
obj2[fn(8610).EmbeddedSurfaceType.MAIN] = _modDef3849["0ICBnS"];
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