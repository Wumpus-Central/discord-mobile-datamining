// discord_common/js/packages/design/components/AccessibilityAnnouncer/useCharacterLimitAnnouncement.tsx
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer.android.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting(
  "../discord_common/js/packages/design/components/AccessibilityAnnouncer/useCharacterLimitAnnouncement.tsx",
);

export const useCharacterLimitAnnouncement = function useCharacterLimitAnnouncement(currentLength) {
  currentLength = currentLength.currentLength;
  const maxLength = currentLength.maxLength;
  const message = currentLength.message;
  message.useRef(false);
  const items = [currentLength, maxLength, message];
  const effect = message.useEffect(() => {
    if (null != maxLength) {
      if (currentLength >= tmp) {
        if (!ref.current) {
          tmp4.current = true;
          const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
          AccessibilityAnnouncer.announce(message, "assertive");
        }
      }
      if (currentLength < tmp) {
        ref.current = false;
      }
    }
  }, items);
};
