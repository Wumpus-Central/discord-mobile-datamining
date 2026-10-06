// discord_app/modules/conjure/preview/ConjurePreviewMode.tsx
import intl2 from "../../../intl/index.native.tsx";
import _modDef3753 from "../intl/ConjureUntranslated.messages.js";
import size from "../../../../_runtime/metro/00002__.js";

const obj = { frame: _modDef3753.FKuG6X, widget: _modDef3753.oOAVlP, bot: _modDef3753.uE5z15 };
const result = size.fileFinishedImporting("modules/conjure/preview/ConjurePreviewMode.tsx");

export const CONJURE_PREVIEW_MODE_ORDER = ["frame", "widget", "bot"];
export const getPreviewModeLabel = function getPreviewModeLabel(id) {
  const intl = intl2.intl;
  return intl.string(obj[id]);
};
export const getPreviewModePanelId = function getPreviewModePanelId(arg0) {
  return "conjure-preview-mode-panel-" + arg0;
};
