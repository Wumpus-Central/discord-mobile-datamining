// discord_app/modules/voice_panel/native/utils/closeVoicePanels.tsx
import Constants from "../../../../Constants.tsx";
import ComponentDispatchUtils from "../../../../utils/ComponentDispatchUtils.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const ComponentActions = Constants.ComponentActions;
const result = size.fileFinishedImporting("modules/voice_panel/native/utils/closeVoicePanels.tsx");

export default function closeVoicePanels() {
  const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.VOICE_PANEL_CLOSE);
}
