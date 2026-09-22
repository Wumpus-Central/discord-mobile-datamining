// === Module 16974: VibegrationsPreviewMode ===

// Module 16974 (VibegrationsPreviewMode)
import util from "util" /* 1115 */;
import _modDef3678 from "module_3678" /* 3678 */;
import size from "module_2" /* 2 */;

const obj = { frame: _modDef3678.TI6dfu, widget: _modDef3678.zshJSX, bot: _modDef3678.bBkuBd };
const result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsPreviewMode.tsx");

export const VIBEGRATIONS_PREVIEW_MODE_ORDER = ["frame", "widget", "bot"];
export const getPreviewModeLabel = function getPreviewModeLabel(id) {
  const intl = util.intl;
  return intl.string(obj[id]);
};
export const getPreviewModePanelId = function getPreviewModePanelId(arg0) {
  return "vibegrations-preview-mode-panel-" + arg0;
};