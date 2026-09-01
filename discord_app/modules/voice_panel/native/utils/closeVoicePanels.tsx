// discord_app/modules/voice_panel/native/utils/closeVoicePanels.tsx
import set from "../../../../../_runtime/00002_set.js";
import ME from "../../../../Constants.tsx";
import ComponentDispatcher from "../../../../utils/ComponentDispatchUtils.tsx";

const ComponentActions = ME.ComponentActions;
const result = set.fileFinishedImporting("modules/voice_panel/native/utils/closeVoicePanels.tsx");

export default function closeVoicePanels() {
  const ComponentDispatch = ComponentDispatcher.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.VOICE_PANEL_CLOSE);
}
