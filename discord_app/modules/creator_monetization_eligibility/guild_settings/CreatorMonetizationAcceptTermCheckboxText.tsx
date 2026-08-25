// === Module 17060: getCreatorMonetizationAcceptTermsCheckboxText ===

// Module 17060 (getCreatorMonetizationAcceptTermsCheckboxText)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import combinedDefault from "combined" /* 1995 */;

const HelpdeskArticles = ME.HelpdeskArticles;
const result = set.fileFinishedImporting("modules/creator_monetization_eligibility/guild_settings/CreatorMonetizationAcceptTermCheckboxText.tsx");

export const getCreatorMonetizationAcceptTermsCheckboxText = function getCreatorMonetizationAcceptTermsCheckboxText() {
  const intl = getSystemLocale.intl;
  const obj = { fullTermsUrl: combinedDefault.getArticleURL(HelpdeskArticles.CREATOR_TERMS), creatorRevenuePolicyUrl: null };
  const obj2 = combinedDefault;
  obj[1] = combinedDefault.getArticleURL(HelpdeskArticles.CREATOR_POLICY);
  return intl.format(getSystemLocale.t["+ALa7+"], obj);
};