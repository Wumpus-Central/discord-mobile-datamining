// === Module 6643: PhoneOrEmailUtils ===

// Module 6643 (PhoneOrEmailUtils)
import size from "module_2" /* 2 */;

const PhoneOrEmailSelectorForceMode = { PHONE: "phone", EMAIL: "email" };
const re1 = /^[-() \d]+$/;
const result = size.fileFinishedImporting("modules/phone/PhoneOrEmailUtils.tsx");

export { PhoneOrEmailSelectorForceMode };
export const shouldShowCountryCodeSelector = function shouldShowCountryCodeSelector(forceMode, cResult) {
  if (forceMode === obj.PHONE) {
    let tmp2 = !cResult.startsWith("+");
  } else {
    tmp2 = forceMode !== tmp.EMAIL;
    if (tmp2) {
      let isMatch = cResult.length >= 3;
      if (isMatch) {
        isMatch = re1.test(cResult);
      }
      tmp2 = isMatch;
    }
  }
  return tmp2;
};
export const getPhoneOrEmail = function getPhoneOrEmail(arg0) {
  const obj = /^\+\d/;
  return obj.test(arg0) ? obj.PHONE : obj.EMAIL;
};