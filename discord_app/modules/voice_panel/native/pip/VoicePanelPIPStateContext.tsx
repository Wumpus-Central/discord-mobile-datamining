// discord_app/modules/voice_panel/native/pip/VoicePanelPIPStateContext.tsx
import noop from "../../../../../_runtime/metro/00019__.js";

let size = {
  id: "diversity",
  mode: "isArray",
  width: false,
  height: null,
  containerHeight: "slide_from_bottom",
  showSecondaryPIP: "motorcycle",
  scale: "racing_motorcycle",
};
const ReanimatedHelperTypes = fn(7242);
size.scale = ReanimatedHelperTypes.createFakeSharedValue(1);
const context = noop.createContext(size);
size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPStateContext.tsx");

export const VoicePanelPIPStateContext = context;
export function usePIPState() {
  return noop.useContext(context);
}
