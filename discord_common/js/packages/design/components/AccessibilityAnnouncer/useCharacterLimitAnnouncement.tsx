// discord_common/js/packages/design/components/AccessibilityAnnouncer/useCharacterLimitAnnouncement.tsx
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer.android.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../../../discord_app/modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let currentLength;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (currentLength) => {
      let maxLength;
      const obj = currentLength(maxLength[2]);
      const cResult = obj.c(5);
      currentLength = currentLength.currentLength;
      maxLength = currentLength.maxLength;
      const message = currentLength.message;
      const ref = message.useRef(false);
      const obj2 = message;
      if (cResult[0] === currentLength) {
        if (cResult[1] === maxLength) {
          let tmp2;
          let tmp3;
          if (cResult[2] === message) {
            tmp2 = cResult[3];
            tmp3 = cResult[4];
          }
          const effect = obj2.useEffect(tmp2, tmp3);
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
      const ref = message.useRef(false);
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
const result = size.fileFinishedImporting(
  "../discord_common/js/packages/design/components/AccessibilityAnnouncer/useCharacterLimitAnnouncement.tsx",
);

export const useCharacterLimitAnnouncement = tmp2;
