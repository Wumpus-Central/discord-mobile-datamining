// discord_app/design/components/Navigator/native/useAccessibilityNativeStackFocusTracking.tsx
import setAccessibilityFocusPreviousDefault from "../../../../modules/a11y/native/setAccessibilityFocusPrevious.tsx";
import markAccessibilityFocusDefault from "../../../../modules/a11y/native/markAccessibilityFocus.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const size = fn(2);
const result = size.fileFinishedImporting(
  "design/components/Navigator/native/useAccessibilityNativeStackFocusTracking.tsx",
);

export const useAccessibilityNativeStackFocusTracking = function useAccessibilityNativeStackFocusTracking() {
  return noop.useMemo(() => {
    c0 = false;
    return {
      transitionStart(data) {
        if (data.data.closing) {
          markAccessibilityFocusDefault();
        } else if (c0) {
          c0 = false;
          setAccessibilityFocusPreviousDefault();
        }
      },
      beforeRemove() {
        c0 = true;
      },
    };
  }, []);
};
