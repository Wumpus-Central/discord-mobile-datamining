// discord_app/modules/voice_panel/native/hooks/useVoicePanelNavArrowPressed.tsx
import VoicePanelControlsConstants from "../controls/VoicePanelControlsConstants.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const VoicePanelControlsModes = VoicePanelControlsConstants.VoicePanelControlsModes;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let controlsSpecs;
      let dismissPanel;
      let focused;
      let setFocused;
      const obj = focused(dismissPanel[3]);
      const cResult = obj.c(5);
      const context = controlsSpecs.useContext(setFocused(dismissPanel[4]));
      focused = context.focused;
      setFocused = context.setFocused;
      dismissPanel = context.dismissPanel;
      controlsSpecs = context.controlsSpecs;
      if (cResult[0] === controlsSpecs) {
        if (cResult[1] === dismissPanel) {
          if (cResult[2] === focused) {
            let tmp3;
            if (cResult[3] === setFocused) {
              tmp3 = cResult[4];
            }
            return tmp3;
          }
        }
      }
      const fn = function n() {
        const value = focused.get();
        let id;
        if (value != null) {
          id = value.id;
        }
        if (null != id) {
          let flag;
          if (controlsSpecs.get().mode !== VoicePanelControlsModes.DRAWER) {
            setFocused(null);
            flag = true;
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
    }
  : () => {
      let controlsSpecs;
      let dismissPanel;
      let setFocused;
      const context = controlsSpecs.useContext(setFocused(dismissPanel[4]));
      const focused = context.focused;
      setFocused = context.setFocused;
      dismissPanel = context.dismissPanel;
      controlsSpecs = context.controlsSpecs;
      const items = [focused, controlsSpecs, dismissPanel, setFocused];
      return controlsSpecs.useCallback(() => {
        const value = focused.get();
        let id;
        if (value != null) {
          id = value.id;
        }
        if (null != id) {
          let flag;
          if (controlsSpecs.get().mode !== VoicePanelControlsModes.DRAWER) {
            setFocused(null);
            flag = true;
          }
          return flag;
        }
        flag = dismissPanel();
      }, items);
    };
const result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useVoicePanelNavArrowPressed.tsx");

export default tmp2;
