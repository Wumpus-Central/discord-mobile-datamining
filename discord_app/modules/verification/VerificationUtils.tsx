// discord_app/modules/verification/VerificationUtils.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import applyDefault from "../../../_runtime/00012_apply.js";
import getSystemLocale from "../../intl/index.native.tsx";
import ME from "../../Constants.tsx";

const UserRequiredActions = ME.UserRequiredActions;
const VerificationTypes = ME.VerificationTypes;
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
let closure_5 = { [UserRequiredActions.REQUIRE_VERIFIED_EMAIL]: items, [UserRequiredActions.REQUIRE_VERIFIED_PHONE]: items1, [UserRequiredActions.REQUIRE_REVERIFIED_EMAIL]: items2, [UserRequiredActions.REQUIRE_REVERIFIED_PHONE]: items3, [UserRequiredActions.REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE]: items4, [UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE]: items5, [UserRequiredActions.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE]: items6, [UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE]: items7, [UserRequiredActions.REQUIRE_CAPTCHA]: items8, [UserRequiredActions.AGREEMENTS]: [], [UserRequiredActions.REQUIRE_SAFETY_FLOWS]: [] };
let result = obj132.fileFinishedImporting("modules/verification/VerificationUtils.tsx");

export default {
  isPhoneReverification(currentUser, action) {
    let tmp = undefined !== currentUser && currentUser.isPhoneVerified();
    if (tmp) {
      tmp = action === UserRequiredActions.REQUIRE_REVERIFIED_PHONE || action === UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || action === UserRequiredActions.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE;
    }
    return tmp;
  },
  isEmailReverification(stateFromStores1) {
    return stateFromStores1 === UserRequiredActions.REQUIRE_REVERIFIED_EMAIL || stateFromStores1 === UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || stateFromStores1 === UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE;
  },
  isFullScreenVerification(action) {
    let result = action === UserRequiredActions.REQUIRE_CAPTCHA || action === UserRequiredActions.REQUIRE_VERIFIED_EMAIL || action === UserRequiredActions.REQUIRE_VERIFIED_PHONE || action === UserRequiredActions.REQUIRE_REVERIFIED_PHONE || action === UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || action === UserRequiredActions.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE;
    if (!result) {
      const self = this;
      result = this.isEmailReverification(action);
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
      const intl5 = getSystemLocale.intl;
      return intl5.string(getSystemLocale.t["1MPz27"]);
    } else if (VerificationTypes.PHONE === item) {
      const intl4 = getSystemLocale.intl;
      return intl4.string(getSystemLocale.t.mjJeco);
    } else if (VerificationTypes.REVERIFY_EMAIL === item) {
      const intl3 = getSystemLocale.intl;
      return intl3.string(getSystemLocale.t.nmdPFX);
    } else if (VerificationTypes.REVERIFY_PHONE === item) {
      const intl2 = getSystemLocale.intl;
      return intl2.string(getSystemLocale.t.of2125);
    } else {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t["oF6+Ww"]);
    }
  },
  areVerificationTypesEqual(arg0, arg1) {
    return applyDefault.isEqual(arg0, arg1);
  }
};