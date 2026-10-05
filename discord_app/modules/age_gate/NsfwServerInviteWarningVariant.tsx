// discord_app/modules/age_gate/NsfwServerInviteWarningVariant.tsx
import Constants from "../../Constants.tsx";
import intl3 from "../../intl/index.native.tsx";
import AgeVerificationUtils from "../age_assurance/AgeVerificationUtils.tsx";
import getTinyBroncoWarningDescriptions from "../tiny_bronco/getTinyBroncoWarningDescriptions.tsx";
import useAgeGroupPresentation from "../age_assurance/useAgeGroupPresentation.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const AbortCodes = Constants.AbortCodes;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let TEEN;
      const obj = AgeVerificationUtils;
      const isVerifiedTeen = obj.useIsVerifiedTeen();
      const obj2 = AgeVerificationUtils;
      const isVerifiedAdult = obj2.useIsVerifiedAdult();
      const AgeGroupState = useAgeGroupPresentation.AgeGroupState;
      if (isVerifiedTeen) {
        TEEN = AgeGroupState.TEEN;
      } else {
        TEEN = isVerifiedAdult ? AgeGroupState.ADULT : AgeGroupState.UNVERIFIED;
      }
      return TEEN;
    }
  : () => {
      let TEEN;
      const obj = AgeVerificationUtils;
      const isVerifiedTeen = obj.useIsVerifiedTeen();
      const obj2 = AgeVerificationUtils;
      const isVerifiedAdult = obj2.useIsVerifiedAdult();
      const AgeGroupState = useAgeGroupPresentation.AgeGroupState;
      if (isVerifiedTeen) {
        TEEN = AgeGroupState.TEEN;
      } else {
        TEEN = isVerifiedAdult ? AgeGroupState.ADULT : AgeGroupState.UNVERIFIED;
      }
      return TEEN;
    };
const result = size.fileFinishedImporting("modules/age_gate/NsfwServerInviteWarningVariant.tsx");

export const getNsfwServerInviteWarningVariant = function getNsfwServerInviteWarningVariant(gatedAgeGroup) {
  let intl;
  let intl2;
  let obj4;
  const obj = getTinyBroncoWarningDescriptions;
  const tmp3 = obj.getTinyBroncoServerDescriptions()[gatedAgeGroup];
  const obj2 = { text: intl.string(intl3.t.FDSSia), joins: false };
  intl = intl3.intl;
  if (useAgeGroupPresentation.AgeGroupState.ADULT === gatedAgeGroup) {
    const obj3 = { description: tmp3, confirm: obj4, goBackIsPrimary: false };
    obj4 = { text: intl2.string(intl3.t.wVq7uo), joins: true };
    intl2 = intl3.intl;
    return obj3;
  } else if (useAgeGroupPresentation.AgeGroupState.TEEN === gatedAgeGroup) {
    return { description: tmp3, confirm: obj2, goBackIsPrimary: true };
  } else if (useAgeGroupPresentation.AgeGroupState.UNVERIFIED === gatedAgeGroup) {
    return { description: tmp3, confirm: obj2, goBackIsPrimary: false };
  }
};
export const useGatedAgeGroup = tmp2;
export const getNsfwServerInviteWarningAgeGroupForError = function getNsfwServerInviteWarningAgeGroupForError(arg0) {
  let UNVERIFIED;
  let tmp3;
  if (AbortCodes.UNDER_MINIMUM_AGE === arg0) {
    UNVERIFIED = useAgeGroupPresentation.AgeGroupState.TEEN;
    tmp3 = require;
  } else if (tmp.AGE_GROUP_UNVERIFIED === arg0) {
    tmp3 = require;
    UNVERIFIED = useAgeGroupPresentation.AgeGroupState.UNVERIFIED;
  } else {
    return null;
  }
  let tmp7 = null;
  const tmp3Result = tmp3(9429);
  if (tmp3Result.getIsInviteAcceptAgeGroupErrorsEnabled("invite_accept_error")) {
    tmp7 = UNVERIFIED;
  }
  return tmp7;
};
