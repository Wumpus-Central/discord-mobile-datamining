// === Module 6582: useCharacterLimitAnnouncement ===

// Module 6582 (useCharacterLimitAnnouncement)
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4590 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let currentLength;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((currentLength) => {
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
}) : ((currentLength) => {
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
});
const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/AccessibilityAnnouncer/useCharacterLimitAnnouncement.tsx");

export const useCharacterLimitAnnouncement = tmp2;