// discord_app/modules/voice_panel/native/pip/VoicePanelPIPStateContext.tsx
import noop from "../../../../../_runtime/metro/00019__.js";

let size = {
  id: "dispatch",
  mode: "isArray",
  width: false,
  height: null,
  containerHeight: "\u{1F468}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FB}",
  showSecondaryPIP: true,
  scale: null,
};
const ReanimatedHelperTypes = fn(6691);
size.scale = ReanimatedHelperTypes.createFakeSharedValue(1);
const context = noop.createContext(size);
size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPStateContext.tsx");

export const VoicePanelPIPStateContext = context;
export const usePIPState = function usePIPState() {
  return noop.useContext(context);
};
