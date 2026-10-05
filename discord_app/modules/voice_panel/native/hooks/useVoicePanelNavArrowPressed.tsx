// === Module 17218: useVoicePanelNavArrowPressed ===

// Module 17218 (useVoicePanelNavArrowPressed)
import noop from "module_19" /* 19 */;

const require = fn;
const VoicePanelControlsModes = fn(11900).VoicePanelControlsModes;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useVoicePanelNavArrowPressed.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = focused(dismissPanel[3]).c(5);
  const context = controlsSpecs.useContext(setFocused(dismissPanel[4]));
  focused = context.focused;
  setFocused = context.setFocused;
  dismissPanel = context.dismissPanel;
  controlsSpecs = context.controlsSpecs;
  if (cResult[0] === controlsSpecs) {
    if (cResult[1] === dismissPanel) {
      if (cResult[2] === focused) {
        if (cResult[3] === setFocused) {
          let tmp3 = cResult[4];
        }
        return tmp3;
      }
    }
  }
  const fn = function n() {
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
  };
  cResult[0] = controlsSpecs;
  cResult[1] = dismissPanel;
  cResult[2] = focused;
  cResult[3] = setFocused;
  cResult[4] = fn;
  tmp3 = fn;
}) : (() => {
  const context = controlsSpecs.useContext(setFocused(dismissPanel[4]));
  const focused = context.focused;
  setFocused = context.setFocused;
  dismissPanel = context.dismissPanel;
  controlsSpecs = context.controlsSpecs;
  const items = [focused, controlsSpecs, dismissPanel, setFocused];
  return controlsSpecs.useCallback(() => {
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
});