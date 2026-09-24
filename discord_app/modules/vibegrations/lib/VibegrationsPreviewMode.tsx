// === Module 17059: VibegrationsPreviewMode ===

// Module 17059 (VibegrationsPreviewMode)
import util from "util" /* 1115 */;
import _modDef3714 from "module_3714" /* 3714 */;
import size from "module_2" /* 2 */;

const obj = { frame: _modDef3714.TI6dfu, widget: _modDef3714.zshJSX, bot: _modDef3714.bBkuBd };
const result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsPreviewMode.tsx");

export const VIBEGRATIONS_PREVIEW_MODE_ORDER = ["frame", "widget", "bot"];
export const getPreviewModeLabel = function getPreviewModeLabel(id) {
  const intl = util.intl;
  return intl.string(obj[id]);
};
export const getPreviewModePanelId = function getPreviewModePanelId(arg0) {
  return "vibegrations-preview-mode-panel-" + arg0;
};