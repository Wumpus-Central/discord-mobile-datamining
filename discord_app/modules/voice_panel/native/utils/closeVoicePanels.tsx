// === Module 8706: closeVoicePanels ===

// Module 8706 (closeVoicePanels)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import ComponentDispatcher from "ComponentDispatcher" /* 1231 */;

const ComponentActions = ME.ComponentActions;
const result = obj132.fileFinishedImporting("modules/voice_panel/native/utils/closeVoicePanels.tsx");

export default function closeVoicePanels() {
  const ComponentDispatch = ComponentDispatcher.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.VOICE_PANEL_CLOSE);
};