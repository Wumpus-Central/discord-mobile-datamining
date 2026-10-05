// discord_app/modules/main_tabs_v2/native/tabs/you/YouSettingsCoachmark.tsx
import react from "../../../../../../_runtime/00576_react.js";
import useCoachmark from "../../../../../design/components/Coachmark/native/useCoachmark.native.tsx";
import useReferralProgramCoachmark from "../../../../premium/referral_program/hooks/native/useReferralProgramCoachmark.tsx";
import _objectWithoutProperties from "../../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import ReactCompilerGating_mod from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let disabled;

let closure_2 = ["buttonRef"];
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (disabled) => {
      let tmp4;
      const obj = react;
      const cResult = obj.c(2);
      disabled = disabled.disabled;
      if (cResult[0] !== disabled) {
        const obj2 = { disabled };
        cResult[0] = disabled;
        cResult[1] = obj2;
        tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      const tmpResult = useReferralProgramCoachmark;
      let referralProgramCoachmark = tmpResult.useReferralProgramCoachmark(tmp4);
      if (referralProgramCoachmark == null) {
        referralProgramCoachmark = null;
      }
      return referralProgramCoachmark;
    }
  : (disabled) => {
      disabled = disabled.disabled;
      const obj = useReferralProgramCoachmark;
      let referralProgramCoachmark = obj.useReferralProgramCoachmark({ disabled });
      if (referralProgramCoachmark == null) {
        referralProgramCoachmark = null;
      }
      return referralProgramCoachmark;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_4 = ReactCompilerGating.isReactCompilerEnabled();
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouSettingsCoachmark.tsx");

export default function YouSettingsCoachmark(buttonRef) {
  if (closure_4) {
    let tmp12;
    let tmp11;
    const obj3 = react;
    const cResult = obj3.c(3);
    if (cResult[0] !== buttonRef) {
      const buttonRef2 = buttonRef.buttonRef;
      const tmp15 = _objectWithoutProperties(buttonRef, closure_2);
      cResult[0] = buttonRef;
      cResult[1] = buttonRef2;
      cResult[2] = tmp15;
      tmp12 = tmp15;
      tmp11 = buttonRef2;
    } else {
      tmp11 = cResult[1];
      tmp12 = cResult[2];
    }
    const tmp8Result = useCoachmark;
    const coachmark = tmp8Result.useCoachmark(tmp11, tmp12);
  } else {
    buttonRef = buttonRef.buttonRef;
    const merged = Object.assign(buttonRef, Object.assign({ buttonRef: 0 }));
    const obj2 = useCoachmark;
    const coachmark1 = obj2.useCoachmark(buttonRef, merged);
  }
  return null;
}
export const useYouSettingsCoachmark = tmp2;
