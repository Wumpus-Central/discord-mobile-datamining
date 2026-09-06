// === Module 9508: closeVoicePanels ===

// Module 9508 (closeVoicePanels)
import Constants from "Constants" /* 1074 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1109 */;
import size from "module_2" /* 2 */;

const ComponentActions = Constants.ComponentActions;
const result = size.fileFinishedImporting("modules/voice_panel/native/utils/closeVoicePanels.tsx");

export default function closeVoicePanels() {
  const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.VOICE_PANEL_CLOSE);
};