// discord_app/modules/voice_panel/native/utils/closeVoicePanels.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import ME from "../../../../Constants.tsx";
import ComponentDispatcher from "../../../../utils/ComponentDispatchUtils.tsx";

const ComponentActions = ME.ComponentActions;
const result = obj132.fileFinishedImporting("modules/voice_panel/native/utils/closeVoicePanels.tsx");

export default function closeVoicePanels() {
  const ComponentDispatch = ComponentDispatcher.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.VOICE_PANEL_CLOSE);
};