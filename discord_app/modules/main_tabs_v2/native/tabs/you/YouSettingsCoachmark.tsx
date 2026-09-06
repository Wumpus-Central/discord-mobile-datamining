// discord_app/modules/main_tabs_v2/native/tabs/you/YouSettingsCoachmark.tsx
import useCoachmark from "../../../../../design/components/Coachmark/native/useCoachmark.native.tsx";
import useReferralProgramCoachmark from "../../../../premium/referral_program/hooks/native/useReferralProgramCoachmark.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouSettingsCoachmark.tsx");

export default function YouSettingsCoachmark(buttonRef) {
  const merged = Object.assign(buttonRef, Object.assign({ buttonRef: 0 }));
  const coachmark = useCoachmark.useCoachmark(buttonRef.buttonRef, merged);
  return null;
}
export const useYouSettingsCoachmark = function useYouSettingsCoachmark(disabled) {
  let referralProgramCoachmark = useReferralProgramCoachmark.useReferralProgramCoachmark({
    disabled: disabled.disabled,
  });
  if (referralProgramCoachmark == null) {
    referralProgramCoachmark = null;
  }
  return referralProgramCoachmark;
};
