// discord_app/modules/quests/native/VideoQuestModal/hooks/useVideoQuestCaptionsEnabled.tsx
import SystemCaptionPreference from "../../../../a11y/native/SystemCaptionPreference.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/quests/native/VideoQuestModal/hooks/useVideoQuestCaptionsEnabled.tsx",
);

export function useVideoQuestCaptionsEnabled() {
  [tmp2, require] = noop.useState(SystemCaptionPreference.getIsAlwaysOnCaptionsEnabled);
  const effect = noop.useEffect(() => {
    closure_0 = SystemCaptionPreference.addAlwaysOnCaptionsEnabledListener(closure_1_0);
    return () => closure_0.remove();
  }, []);
  const tmp = _slicedToArray(noop.useState(SystemCaptionPreference.getIsAlwaysOnCaptionsEnabled), 2);
  return { captionsEnabled: tmp2, toggleCaptions: noop.useCallback(() => require((arg0) => !arg0), []) };
}
