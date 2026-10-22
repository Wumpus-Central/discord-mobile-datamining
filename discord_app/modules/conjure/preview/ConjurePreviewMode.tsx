// discord_app/modules/conjure/preview/ConjurePreviewMode.tsx
import util from "../../../intl/index.native.tsx";
import _modDef3830 from "../intl/ConjureUntranslated.messages.js";

require = fn;
const obj = {};
obj[fn(5612).EmbeddedSurfaceType.APP_CHANNEL] = _modDef3830.xI4N6Q;
obj[fn(5612).EmbeddedSurfaceType.VOICE_CHANNEL] = _modDef3830.oWMDh6;
obj[fn(5612).EmbeddedSurfaceType.MAIN] = _modDef3830["0ICBnS"];
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/preview/ConjurePreviewMode.tsx");

export const CONJURE_PREVIEW_MODE_ORDER = ["frame", "widget", "overlay", "bot"];
export const getPreviewFrameSurfaceLabel = function getPreviewFrameSurfaceLabel(surface) {
  const intl = util.intl;
  return intl.string(obj[surface]);
};
