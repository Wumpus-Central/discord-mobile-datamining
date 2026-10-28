// === Module 11797: ConjurePreviewMode ===

// Module 11797 (ConjurePreviewMode)
import util from "util" /* 1125 */;
import _modDef3863 from "module_3863" /* 3863 */;

require = fn;
const obj = {};
obj[fn(5662).EmbeddedSurfaceType.APP_CHANNEL] = _modDef3863.xI4N6Q;
obj[fn(5662).EmbeddedSurfaceType.VOICE_CHANNEL] = _modDef3863.oWMDh6;
obj[fn(5662).EmbeddedSurfaceType.MAIN] = _modDef3863["0ICBnS"];
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/preview/ConjurePreviewMode.tsx");

export const CONJURE_PREVIEW_MODE_ORDER = ["frame", "widget", "overlay", "bot"];
export const getPreviewFrameSurfaceLabel = function getPreviewFrameSurfaceLabel(surface) {
  const intl = util.intl;
  return intl.string(obj[surface]);
};