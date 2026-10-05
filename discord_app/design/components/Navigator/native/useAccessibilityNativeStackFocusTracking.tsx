// discord_app/design/components/Navigator/native/useAccessibilityNativeStackFocusTracking.tsx
import react_nativeDefault from "../../../../modules/a11y/native/setAccessibilityFocusPrevious.tsx";
import react_nativeDefault2 from "../../../../modules/a11y/native/markAccessibilityFocus.tsx";
import react from "../../../../../_runtime/00019_react.js";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "design/components/Navigator/native/useAccessibilityNativeStackFocusTracking.tsx",
);

export const useAccessibilityNativeStackFocusTracking = function useAccessibilityNativeStackFocusTracking() {
  return react.useMemo(() => {
    let c0 = false;
    return {
      transitionStart(data) {
        if (data.data.closing) {
          react_nativeDefault2();
        } else {
          const tmp = c0;
          if (tmp) {
            c0 = false;
            react_nativeDefault();
          }
        }
      },
      beforeRemove() {
        c0 = true;
      },
    };
  }, []);
};
