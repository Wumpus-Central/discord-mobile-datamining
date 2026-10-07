// discord_common/js/packages/design/components/AccessibilityAnnouncer/useCharacterLimitAnnouncement.tsx
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer.android.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "../discord_common/js/packages/design/components/AccessibilityAnnouncer/useCharacterLimitAnnouncement.tsx",
);

export const useCharacterLimitAnnouncement = ReactCompilerGating.isReactCompilerEnabled()
  ? (currentLength) => {
      const cResult = currentLength(maxLength[2]).c(5);
      currentLength = currentLength.currentLength;
      maxLength = currentLength.maxLength;
      const message = currentLength.message;
      message.useRef(false);
      if (cResult[0] === currentLength) {
        if (cResult[1] === maxLength) {
          if (cResult[2] === message) {
            let tmp2 = cResult[3];
            let tmp3 = cResult[4];
          }
          const effect = message.useEffect(tmp2, tmp3);
        }
      }
      const fn = function t() {
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
      };
      const items = [currentLength, maxLength, message];
      cResult[0] = currentLength;
      cResult[1] = maxLength;
      cResult[2] = message;
      cResult[3] = fn;
      cResult[4] = items;
      tmp3 = items;
      tmp2 = fn;
    }
  : (currentLength) => {
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
