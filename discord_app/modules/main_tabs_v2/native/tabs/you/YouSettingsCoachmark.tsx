// discord_app/modules/main_tabs_v2/native/tabs/you/YouSettingsCoachmark.tsx
import c from "../../../../../../_runtime/00576_c.js";
import useCoachmark from "../../../../../design/components/Coachmark/native/useCoachmark.native.tsx";
import useReferralProgramCoachmark from "../../../../premium/referral_program/hooks/native/useReferralProgramCoachmark.tsx";
import _objectWithoutProperties from "../../../../../../_runtime/metro/00109__objectWithoutProperties.js";

require = fn;
let closure_2 = ["buttonRef"];
fn(558);
const ReactCompilerGating = fn(558);
let closure_4 = ReactCompilerGating.isReactCompilerEnabled();
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouSettingsCoachmark.tsx");

export default function YouSettingsCoachmark(buttonRef) {
  if (closure_4) {
    let obj3 = require;
    let coachmark = dependencyMap;
    const cResult = c.c(3);
    if (cResult[0] !== buttonRef) {
      buttonRef = buttonRef.buttonRef;
      const tmp13 = _objectWithoutProperties(buttonRef, closure_2);
      cResult[0] = buttonRef;
      cResult[1] = buttonRef;
      cResult[2] = tmp13;
      let tmp10 = tmp13;
      let tmp9 = buttonRef;
    } else {
      tmp9 = cResult[1];
      tmp10 = cResult[2];
    }
    obj3 = obj3(9375);
    coachmark = obj3.useCoachmark(tmp9, tmp10);
  } else {
    const merged = Object.assign(buttonRef, Object.assign({ buttonRef: 0 }));
    const coachmark1 = useCoachmark.useCoachmark(buttonRef.buttonRef, merged);
    return null;
  }
}
export const useYouSettingsCoachmark = ReactCompilerGating.isReactCompilerEnabled()
  ? function useYouSettingsCoachmark(disabled) {
      const cResult = c.c(2);
      disabled = disabled.disabled;
      if (cResult[0] !== disabled) {
        const obj2 = { disabled };
        cResult[0] = disabled;
        cResult[1] = obj2;
        let tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      let referralProgramCoachmark = useReferralProgramCoachmark.useReferralProgramCoachmark(tmp4);
      if (referralProgramCoachmark == null) {
        referralProgramCoachmark = null;
      }
      return referralProgramCoachmark;
    }
  : function useYouSettingsCoachmark(disabled) {
      let referralProgramCoachmark = useReferralProgramCoachmark.useReferralProgramCoachmark({
        disabled: disabled.disabled,
      });
      if (referralProgramCoachmark == null) {
        referralProgramCoachmark = null;
      }
      return referralProgramCoachmark;
    };
