import { ComponentDispatcher } from "../../../../utils/ComponentDispatchUtils.tsx";
// discord_app/modules/voice_panel/native/utils/closeVoicePanels.tsx
import { ComponentActions } from "ME";

const result = require("set").fileFinishedImporting("modules/voice_panel/native/utils/closeVoicePanels.tsx");

export default function closeVoicePanels() {
  const ComponentDispatch = ComponentDispatcher /* ComponentDispatcher */.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.VOICE_PANEL_CLOSE);
};