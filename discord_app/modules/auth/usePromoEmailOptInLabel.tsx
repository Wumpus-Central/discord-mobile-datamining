// === Module 17973: usePromoEmailOptInLabel ===

// Module 17973 (usePromoEmailOptInLabel)
import util from "util" /* 1114 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/usePromoEmailOptInLabel.tsx");

export function usePromoEmailOptInLabel(ylFCLt, REGISTER_PROMO_EMAIL_CHECKBOX_MOBILE) {
  let LSoXK5 = ylFCLt;
  const intl = util.intl;
  if (obj.useConfig(obj2).trackingCopy) {
    LSoXK5 = util.t.LSoXK5;
  }
  return intl.string(LSoXK5);
}