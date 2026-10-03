// === Module 16581: VibegrationsPreviewMode ===

// Module 16581 (VibegrationsPreviewMode)
import util from "util" /* 1126 */;
import _modDef3723 from "module_3723" /* 3723 */;
import size from "module_2" /* 2 */;

const obj = { frame: _modDef3723.TI6dfu, widget: _modDef3723.zshJSX, bot: _modDef3723.bBkuBd };
const result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsPreviewMode.tsx");

export const VIBEGRATIONS_PREVIEW_MODE_ORDER = ["frame", "widget", "bot"];
export const getPreviewModeLabel = function getPreviewModeLabel(id) {
  const intl = util.intl;
  return intl.string(obj[id]);
};
export const getPreviewModePanelId = function getPreviewModePanelId(arg0) {
  return "vibegrations-preview-mode-panel-" + arg0;
};