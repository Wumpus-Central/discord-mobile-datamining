// discord_app/modules/voice_panel/native/pip/VoicePanelPIPStateContext.tsx
import noop from "../../../../../_runtime/metro/00019__.js";

let size = {
  id: "disabled",
  mode: "isArray",
  width: false,
  height: null,
  containerHeight: "yes",
  showSecondaryPIP: null,
  scale: "x-sm",
};
const ReanimatedHelperTypes = fn(7848);
size.scale = ReanimatedHelperTypes.createFakeSharedValue(1);
const context = noop.createContext(size);
size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPStateContext.tsx");

export const VoicePanelPIPStateContext = context;
export function usePIPState() {
  return noop.useContext(context);
}
