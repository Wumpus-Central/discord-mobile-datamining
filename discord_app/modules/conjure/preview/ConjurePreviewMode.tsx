// discord_app/modules/conjure/preview/ConjurePreviewMode.tsx
import util from "../../../intl/index.native.tsx";
import _modDef3865 from "../intl/ConjureUntranslated.messages.js";

require = fn;
const obj = {
  frame: _modDef3865.FKuG6X,
  widget: _modDef3865.oOAVlP,
  overlay: _modDef3865.EnTNKg,
  bot: _modDef3865.uE5z15,
};
const obj2 = {};
obj2[fn(7263).EmbeddedSurfaceType.APP_CHANNEL] = _modDef3865.xI4N6Q;
obj2[fn(7263).EmbeddedSurfaceType.VOICE_CHANNEL] = _modDef3865.oWMDh6;
obj2[fn(7263).EmbeddedSurfaceType.MAIN] = _modDef3865["0ICBnS"];
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
