// discord_app/modules/verification/VerificationUtils.tsx
import _modDef12 from "../../../_runtime/metro/00012__.js";
import intl6 from "../../intl/index.native.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let EMAIL;
let PHONE;
let REVERIFY_EMAIL;
let REVERIFY_PHONE;
const UserRequiredActions = Constants.UserRequiredActions;
const VerificationTypes = Constants.VerificationTypes;
({ EMAIL, PHONE, REVERIFY_EMAIL, REVERIFY_PHONE } = VerificationTypes);
const items = [EMAIL];
const items1 = [PHONE];
const items2 = [REVERIFY_EMAIL];
const items3 = [REVERIFY_PHONE];
const items4 = [EMAIL, PHONE];
const items5 = [PHONE, REVERIFY_EMAIL];
const items6 = [EMAIL, REVERIFY_PHONE];
const items7 = [REVERIFY_EMAIL, REVERIFY_PHONE];
const items8 = [VerificationTypes.CAPTCHA];
let closure_5 = {
  [UserRequiredActions.REQUIRE_VERIFIED_EMAIL]: items,
  [UserRequiredActions.REQUIRE_VERIFIED_PHONE]: items1,
  [UserRequiredActions.REQUIRE_REVERIFIED_EMAIL]: items2,
  [UserRequiredActions.REQUIRE_REVERIFIED_PHONE]: items3,
  [UserRequiredActions.REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE]: items4,
  [UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE]: items5,
  [UserRequiredActions.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE]: items6,
  [UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE]: items7,
  [UserRequiredActions.REQUIRE_CAPTCHA]: items8,
  [UserRequiredActions.AGREEMENTS]: [],
  [UserRequiredActions.REQUIRE_SAFETY_FLOWS]: [],
};
let obj = {
  isPhoneReverification(currentUser, action) {
    let tmp = undefined !== currentUser && currentUser.isPhoneVerified();
    if (tmp) {
      tmp =
        action === UserRequiredActions.REQUIRE_REVERIFIED_PHONE ||
        action === UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE ||
        action === UserRequiredActions.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE;
    }
    return tmp;
  },
  isEmailReverification(stateFromStores1) {
    return (
      stateFromStores1 === UserRequiredActions.REQUIRE_REVERIFIED_EMAIL ||
      stateFromStores1 === UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE ||
      stateFromStores1 === UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE
    );
  },
  isFullScreenVerification(requiredAction) {
    let result =
      requiredAction === UserRequiredActions.REQUIRE_CAPTCHA ||
      requiredAction === UserRequiredActions.REQUIRE_VERIFIED_EMAIL ||
      requiredAction === UserRequiredActions.REQUIRE_VERIFIED_PHONE ||
      requiredAction === UserRequiredActions.REQUIRE_REVERIFIED_PHONE ||
      requiredAction === UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE ||
      requiredAction === UserRequiredActions.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE;
    if (!result) {
      const self = this;
      result = this.isEmailReverification(requiredAction);
    }
    return result;
  },
  getVerificationTypes(action) {
    if (null != action) {
      return [];
    }
  },
  getButtonTitle(item) {
    if (VerificationTypes.EMAIL === item) {
      const intl5 = intl6.intl;
      return intl5.string(intl6.t["1MPz27"]);
    } else if (VerificationTypes.PHONE === item) {
      const intl4 = intl6.intl;
      return intl4.string(intl6.t.mjJeco);
    } else if (VerificationTypes.REVERIFY_EMAIL === item) {
      const intl3 = intl6.intl;
      return intl3.string(intl6.t.nmdPFX);
    } else if (VerificationTypes.REVERIFY_PHONE === item) {
      const intl2 = intl6.intl;
      return intl2.string(intl6.t.of2125);
    } else {
      const intl = intl6.intl;
      return intl.string(intl6.t["oF6+Ww"]);
    }
  },
  areVerificationTypesEqual(arg0, arg1) {
    const obj = _modDef12;
    return obj.isEqual(arg0, arg1);
  },
};
let result = size.fileFinishedImporting("modules/verification/VerificationUtils.tsx");

export default obj;
