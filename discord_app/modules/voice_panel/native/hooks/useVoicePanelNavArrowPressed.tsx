// discord_app/modules/voice_panel/native/hooks/useVoicePanelNavArrowPressed.tsx
import noop from "../../../../../_runtime/metro/00019__.js";

const VoicePanelControlsModes = fn(12271).VoicePanelControlsModes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useVoicePanelNavArrowPressed.tsx");

export default function useVoicePanelNavArrowPressed() {
  const context = dismissPanel.useContext(focused(setFocused[2]));
  focused = context.focused;
  setFocused = context.setFocused;
  dismissPanel = context.dismissPanel;
  const controlsSpecs = context.controlsSpecs;
  const items = [focused, controlsSpecs, dismissPanel, setFocused];
  return dismissPanel.useCallback(() => {
    value = focused.get();
    let id;
    if (value != null) {
      id = value.id;
    }
    if (null != id) {
      if (controlsSpecs.get().mode !== VoicePanelControlsModes.DRAWER) {
        setFocused(null);
        let flag = true;
      }
      return flag;
    }
    flag = dismissPanel();
  }, items);
}
