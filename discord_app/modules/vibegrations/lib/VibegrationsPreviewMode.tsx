// === Module 16888: VibegrationsPreviewMode ===

// Module 16888 (VibegrationsPreviewMode)
import util from "util" /* 1115 */;
import _modDef3676 from "module_3676" /* 3676 */;
import size from "module_2" /* 2 */;

const obj = { frame: _modDef3676.TI6dfu, widget: _modDef3676.zshJSX, bot: _modDef3676.bBkuBd };
const result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsPreviewMode.tsx");

export const VIBEGRATIONS_PREVIEW_MODE_ORDER = ["frame", "widget", "bot"];
export const getPreviewModeLabel = function getPreviewModeLabel(id) {
  const intl = util.intl;
  return intl.string(obj[id]);
};
export const getPreviewModePanelId = function getPreviewModePanelId(arg0) {
  return "vibegrations-preview-mode-panel-" + arg0;
};