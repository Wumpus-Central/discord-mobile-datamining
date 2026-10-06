// === Module 16625: ConjurePreviewMode ===

// Module 16625 (ConjurePreviewMode)
import intl2 from "intl" /* 1126 */;
import _modDef3753 from "module_3753" /* 3753 */;
import size from "module_2" /* 2 */;

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