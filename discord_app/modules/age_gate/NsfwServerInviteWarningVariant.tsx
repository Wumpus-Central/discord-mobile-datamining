// === Module 9623: NsfwServerInviteWarningVariant ===

// Module 9623 (NsfwServerInviteWarningVariant)
import Constants from "Constants" /* 1085 */;
import util from "util" /* 1126 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 5909 */;
import getTinyBroncoWarningDescriptions from "getTinyBroncoWarningDescriptions" /* 5926 */;
import useAgeGroupPresentation from "useAgeGroupPresentation" /* 9624 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const AbortCodes = Constants.AbortCodes;
const result = size.fileFinishedImporting("modules/age_gate/NsfwServerInviteWarningVariant.tsx");

export const getNsfwServerInviteWarningVariant = function getNsfwServerInviteWarningVariant(gatedAgeGroup) {
  const tmp3 = getTinyBroncoWarningDescriptions.getTinyBroncoServerDescriptions()[gatedAgeGroup];
  const obj2 = { text: null, joins: false };
  const intl = util.intl;
  obj2.text = intl.string(util.t.FDSSia);
  if (useAgeGroupPresentation.AgeGroupState.ADULT === gatedAgeGroup) {
    const obj3 = { description: tmp3, confirm: null, goBackIsPrimary: false };
    const obj4 = { text: null, joins: true };
    const intl2 = util.intl;
    obj4.text = intl2.string(util.t.wVq7uo);
    obj3.confirm = obj4;
    return obj3;
  } else if (useAgeGroupPresentation.AgeGroupState.TEEN === gatedAgeGroup) {
    const obj5 = { description: tmp3, confirm: obj2, goBackIsPrimary: true };
    return obj5;
  } else if (useAgeGroupPresentation.AgeGroupState.UNVERIFIED === gatedAgeGroup) {
    const obj6 = { description: tmp3, confirm: obj2, goBackIsPrimary: false };
    return obj6;
  }
};
export const useGatedAgeGroup = ReactCompilerGating.isReactCompilerEnabled() ? (function useGatedAgeGroup() {
  const isVerifiedTeen = AgeVerificationUtils.useIsVerifiedTeen();
  const isVerifiedAdult = AgeVerificationUtils.useIsVerifiedAdult();
  const AgeGroupState = useAgeGroupPresentation.AgeGroupState;
  if (isVerifiedTeen) {
    let TEEN = AgeGroupState.TEEN;
  } else {
    TEEN = isVerifiedAdult ? AgeGroupState.ADULT : AgeGroupState.UNVERIFIED;
  }
  return TEEN;
}) : (function useGatedAgeGroup() {
  const isVerifiedTeen = AgeVerificationUtils.useIsVerifiedTeen();
  const isVerifiedAdult = AgeVerificationUtils.useIsVerifiedAdult();
  const AgeGroupState = useAgeGroupPresentation.AgeGroupState;
  if (isVerifiedTeen) {
    let TEEN = AgeGroupState.TEEN;
  } else {
    TEEN = isVerifiedAdult ? AgeGroupState.ADULT : AgeGroupState.UNVERIFIED;
  }
  return TEEN;
});
export const getNsfwServerInviteWarningAgeGroupForError = function getNsfwServerInviteWarningAgeGroupForError(arg0) {
  if (AbortCodes.UNDER_MINIMUM_AGE === arg0) {
    let UNVERIFIED = useAgeGroupPresentation.AgeGroupState.TEEN;
  } else if (tmp.AGE_GROUP_UNVERIFIED === arg0) {
    UNVERIFIED = useAgeGroupPresentation.AgeGroupState.UNVERIFIED;
  } else {
    return null;
  }
  let tmp7 = null;
  if (tmp3Result.getIsInviteAcceptAgeGroupErrorsEnabled("invite_accept_error")) {
    tmp7 = UNVERIFIED;
  }
  return tmp7;
};