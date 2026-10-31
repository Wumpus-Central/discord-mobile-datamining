// === Module 19196: useExternalPIPModeRestore ===

// Module 19196 (useExternalPIPModeRestore)
import noop from "module_19" /* 19 */;

const VoicePanelModes = fn(11223).VoicePanelModes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/dock/useExternalPIPModeRestore.tsx");

export default function useExternalPIPModeRestore(arg0, arg1, arg2) {
  closure_0 = arg0;
  closure_1 = arg1;
  noop = arg2;
  const items = [arg0, arg1, arg2];
  const effect = noop.useEffect(() => {
    if (c0) {
      c0 = null;
      closure_1 = closure_0(closure_1[2]).addOnPipModeChangedListener((arg0) => {
        if (arg0) {
          c0 = closure_1.get();
        } else {
          c0 = null;
          if (!tmp4) {
            let tmp6 = closure_1.get() !== VoicePanelModes.DISMISSED;
            if (tmp6) {
              tmp6 = closure_1.get() !== tmp;
            }
            if (tmp6) {
              closure_2(tmp);
            }
          }
          tmp4 = c0 !== VoicePanelModes.PIP && c0 !== VoicePanelModes.PANEL;
        }
      });
      return () => {
        let removeResult;
        if (closure_1 != null) {
          removeResult = closure_1.remove();
        }
        return removeResult;
      };
    }
  }, items);
};