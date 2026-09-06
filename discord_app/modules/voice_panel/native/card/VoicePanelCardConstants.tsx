// === Module 12276: VoicePanelCardConstants ===

// Module 12276 (VoicePanelCardConstants)
import nativeDefault from "native" /* 576 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/voice_panel/native/card/VoicePanelCardConstants.tsx");

export const CARD_SIZE = 165;
export const CALL_TILE_GUTTER = 12;
export const EDGE_GUTTER = 12;
export const getCallTileGutter = function getCallTileGutter() {
  let enabledExperiments = arg0;
  if (arg0 === undefined) {
    enabledExperiments = [];
  }
  const VOICE_PANEL_GUTTER = nativeDefault.modules.mobile.VOICE_PANEL_GUTTER;
  return VOICE_PANEL_GUTTER.resolve({ enabledExperiments });
};
export const getEdgeGutter = function getEdgeGutter() {
  let enabledExperiments = arg0;
  if (arg0 === undefined) {
    enabledExperiments = [];
  }
  const VOICE_PANEL_GUTTER = nativeDefault.modules.mobile.VOICE_PANEL_GUTTER;
  return VOICE_PANEL_GUTTER.resolve({ enabledExperiments });
};
export const CARD_BACKGROUND_OPACITY_ANDROID = 0.32;
export const VOICE_PANEL_CONTROLS_OPACITY_ANDROID = 0.54;
export const VOICE_PANEL_CARD_INNER_PADDING = 8;