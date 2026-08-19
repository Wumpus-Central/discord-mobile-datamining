// discord_app/modules/phone/PhoneOrEmailUtils.tsx
import obj132 from "../../../_runtime/00002_obj132.js";

let obj = { PHONE: "phone", EMAIL: "email" };
const re1 = /^[-() \d]+$/;
const result = obj132.fileFinishedImporting("modules/phone/PhoneOrEmailUtils.tsx");

export const PhoneOrEmailSelectorForceMode = obj;
export const shouldShowCountryCodeSelector = function shouldShowCountryCodeSelector(forceMode, value) {
  if (forceMode === obj.PHONE) {
    let tmp2 = !value.startsWith("+");
  } else {
    tmp2 = forceMode !== tmp.EMAIL;
    if (tmp2) {
      let isMatch = value.length >= 3;
      if (isMatch) {
        isMatch = regex.test(value);
      }
      tmp2 = isMatch;
    }
  }
  return tmp2;
};
export const getPhoneOrEmail = function getPhoneOrEmail(arg0) {
  obj = /^\+\d/;
  return obj.test(arg0) ? obj.PHONE : obj.EMAIL;
};