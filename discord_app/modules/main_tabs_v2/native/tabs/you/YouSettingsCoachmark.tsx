// === Module 16785: YouSettingsCoachmark ===

// Module 16785 (YouSettingsCoachmark)
import useCoachmark from "useCoachmark" /* 11127 */;
import useReferralProgramCoachmark from "useReferralProgramCoachmark" /* 16786 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouSettingsCoachmark.tsx");

export default function YouSettingsCoachmark(buttonRef) {
  const merged = Object.assign(buttonRef, Object.assign({ buttonRef: 0 }));
  const coachmark = useCoachmark.useCoachmark(buttonRef.buttonRef, merged);
  return null;
};
export const useYouSettingsCoachmark = function useYouSettingsCoachmark(disabled) {
  let referralProgramCoachmark = useReferralProgramCoachmark.useReferralProgramCoachmark({ disabled: disabled.disabled });
  if (referralProgramCoachmark == null) {
    referralProgramCoachmark = null;
  }
  return referralProgramCoachmark;
};