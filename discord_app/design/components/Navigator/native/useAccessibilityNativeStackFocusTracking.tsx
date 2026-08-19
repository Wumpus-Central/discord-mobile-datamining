// discord_app/design/components/Navigator/native/useAccessibilityNativeStackFocusTracking.tsx
import noop from "../../../../../_runtime/00019_noop.js";

const result = require("obj132").fileFinishedImporting("design/components/Navigator/native/useAccessibilityNativeStackFocusTracking.tsx");

export const useAccessibilityNativeStackFocusTracking = function useAccessibilityNativeStackFocusTracking() {
  return React.useMemo(() => {
    c0 = false;
    return {
      transitionStart(data) {
        if (data.data.closing) {
          callback(closure_1_1[1])();
        } else if (callback) {
          callback = false;
          callback(closure_1_1[2])();
        }
      },
      beforeRemove() {
        c0 = true;
      }
    };
  }, []);
};