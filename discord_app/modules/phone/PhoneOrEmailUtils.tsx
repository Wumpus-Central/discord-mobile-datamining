// discord_app/modules/phone/PhoneOrEmailUtils.tsx
import size from "../../../_runtime/metro/00002__.js";

const PhoneOrEmailSelectorForceMode = { PHONE: "phone", EMAIL: "email" };
const re1 = /^[-() \d]+$/;
const result = size.fileFinishedImporting("modules/phone/PhoneOrEmailUtils.tsx");

export { PhoneOrEmailSelectorForceMode };
export const shouldShowCountryCodeSelector = function shouldShowCountryCodeSelector(forceMode, value) {
  if (forceMode === obj.PHONE) {
    let tmp2 = !value.startsWith("+");
  } else {
    tmp2 = forceMode !== tmp.EMAIL;
    if (tmp2) {
      let isMatch = value.length >= 3;
      if (isMatch) {
        isMatch = re1.test(value);
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
