// === Module 19223: YouSettingsCoachmark ===

// Module 19223 (YouSettingsCoachmark)
import useCoachmark from "useCoachmark" /* 10076 */;
import useConsoleConnectionCoachmark from "useConsoleConnectionCoachmark" /* 19224 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouSettingsCoachmark.tsx");

export default function YouSettingsCoachmark(buttonRef) {
  const merged = Object.assign(buttonRef, Object.assign({ buttonRef: 0 }));
  const coachmark = useCoachmark.useCoachmark(buttonRef.buttonRef, merged);
  return null;
};
export function useYouSettingsCoachmark(disabled) {
  disabled = disabled.disabled;
  let consoleConnectionCoachmark = useConsoleConnectionCoachmark.useConsoleConnectionCoachmark({ disabled });
  if (consoleConnectionCoachmark == null) {
    consoleConnectionCoachmark = obj2.useReferralProgramCoachmark({ disabled });
  }
  if (consoleConnectionCoachmark == null) {
    consoleConnectionCoachmark = null;
  }
  return consoleConnectionCoachmark;
}