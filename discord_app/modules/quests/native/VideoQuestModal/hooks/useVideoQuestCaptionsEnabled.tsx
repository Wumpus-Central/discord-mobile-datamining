// === Module 17758: useVideoQuestCaptionsEnabled ===

// Module 17758 (useVideoQuestCaptionsEnabled)
import SystemCaptionPreference from "SystemCaptionPreference" /* 17759 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/hooks/useVideoQuestCaptionsEnabled.tsx");

export function useVideoQuestCaptionsEnabled() {
  [tmp2, require] = noop.useState(SystemCaptionPreference.getIsAlwaysOnCaptionsEnabled);
  const effect = noop.useEffect(() => {
    closure_0 = SystemCaptionPreference.addAlwaysOnCaptionsEnabledListener(closure_1_0);
    return () => closure_0.remove();
  }, []);
  const tmp = _slicedToArray(noop.useState(SystemCaptionPreference.getIsAlwaysOnCaptionsEnabled), 2);
  return { captionsEnabled: tmp2, toggleCaptions: noop.useCallback(() => require((arg0) => !arg0), []) };
}