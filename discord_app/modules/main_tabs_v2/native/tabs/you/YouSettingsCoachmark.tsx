// discord_app/modules/main_tabs_v2/native/tabs/you/YouSettingsCoachmark.tsx
import set from "set" /* 2 */;
import useCoachmark from "useCoachmark" /* 9314 */;
import ReferralProgramCoachmarkImg from "ReferralProgramCoachmarkImg" /* 16006 */;

const result = set.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouSettingsCoachmark.tsx");

export default function YouSettingsCoachmark(buttonRef) {
  const merged = Object.assign(buttonRef, Object.create(null));
  const coachmark = useCoachmark.useCoachmark(buttonRef.buttonRef, merged);
  return null;
};
export const useYouSettingsCoachmark = function useYouSettingsCoachmark(disabled) {
  let referralProgramCoachmark = ReferralProgramCoachmarkImg.useReferralProgramCoachmark({ disabled: disabled.disabled });
  if (referralProgramCoachmark == null) {
    referralProgramCoachmark = null;
  }
  return referralProgramCoachmark;
};