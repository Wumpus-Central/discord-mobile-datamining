// === Module 9429: NsfwServerInviteWarningVariant ===

// Module 9429 (NsfwServerInviteWarningVariant)
import util from "util" /* 1115 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 5057 */;
import getTinyBroncoWarningDescriptions from "getTinyBroncoWarningDescriptions" /* 9430 */;
import useAgeGroupPresentation from "useAgeGroupPresentation" /* 9431 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_gate/NsfwServerInviteWarningVariant.tsx");

export const getNsfwServerInviteWarningVariant = function getNsfwServerInviteWarningVariant(arg0) {
  const tmp3 = getTinyBroncoWarningDescriptions.getTinyBroncoServerDescriptions()[arg0];
  const obj2 = { text: null, joins: false };
  const intl = util.intl;
  obj2.text = intl.string(util.t.FDSSia);
  if (useAgeGroupPresentation.AgeGroupState.ADULT === arg0) {
    const obj3 = { description: tmp3, confirm: null, goBackIsPrimary: false };
    const obj4 = { text: null, joins: true };
    const intl2 = util.intl;
    obj4.text = intl2.string(util.t.wVq7uo);
    obj3.confirm = obj4;
    return obj3;
  } else if (useAgeGroupPresentation.AgeGroupState.TEEN === arg0) {
    const obj5 = { description: tmp3, confirm: obj2, goBackIsPrimary: true };
    return obj5;
  } else if (useAgeGroupPresentation.AgeGroupState.UNVERIFIED === arg0) {
    const obj6 = { description: tmp3, confirm: obj2, goBackIsPrimary: false };
    return obj6;
  }
};
export const useGatedAgeGroup = function useGatedAgeGroup() {
  const isVerifiedTeen = AgeVerificationUtils.useIsVerifiedTeen();
  const isVerifiedAdult = AgeVerificationUtils.useIsVerifiedAdult();
  const AgeGroupState = useAgeGroupPresentation.AgeGroupState;
  if (isVerifiedTeen) {
    let TEEN = AgeGroupState.TEEN;
  } else {
    TEEN = isVerifiedAdult ? AgeGroupState.ADULT : AgeGroupState.UNVERIFIED;
  }
  return TEEN;
};