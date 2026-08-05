// discord_app/modules/voice_panel/native/pip/VoicePanelPIPStateContext.tsx
import importAllResult from "noop";

let c0 = importAllResult;
const context = importAllResult.createContext({ id: "displayName", mode: "isArray", width: false, height: "Marshall Islands", containerHeight: "MH", showSecondaryPIP: "+692" });
const result = require("set").fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPStateContext.tsx");

export const VoicePanelPIPStateContext = context;
export const usePIPState = function usePIPState() {
  return importAllResult.useContext(context);
};