import { useCoachmark } from "../../../../../design/components/Coachmark/native/useCoachmark.native.tsx";
import { ReferralProgramCoachmarkImg } from "../../../../premium/referral_program/hooks/native/useReferralProgramCoachmark.tsx";
// discord_app/modules/main_tabs_v2/native/tabs/you/YouSettingsCoachmark.tsx
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouSettingsCoachmark.tsx");

export default function YouSettingsCoachmark(buttonRef) {
  const merged = Object.assign(buttonRef, Object.create(null));
  const coachmark = useCoachmark /* useCoachmark */.useCoachmark(buttonRef.buttonRef, merged);
  return null;
};
export const useYouSettingsCoachmark = function useYouSettingsCoachmark(disabled) {
  let referralProgramCoachmark = ReferralProgramCoachmarkImg /* ReferralProgramCoachmarkImg */.useReferralProgramCoachmark({ disabled: disabled.disabled });
  if (referralProgramCoachmark == null) {
    referralProgramCoachmark = null;
  }
  return referralProgramCoachmark;
};