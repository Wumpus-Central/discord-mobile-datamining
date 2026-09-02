// === Module 17534: getCreatorMonetizationAcceptTermsCheckboxText ===

// Module 17534 (getCreatorMonetizationAcceptTermsCheckboxText)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import combinedDefault from "combined" /* 1994 */;

const HelpdeskArticles = ME.HelpdeskArticles;
const result = set.fileFinishedImporting("modules/creator_monetization_eligibility/guild_settings/CreatorMonetizationAcceptTermCheckboxText.tsx");

export const getCreatorMonetizationAcceptTermsCheckboxText = function getCreatorMonetizationAcceptTermsCheckboxText() {
  const intl = getSystemLocale.intl;
  const obj = { fullTermsUrl: combinedDefault.getArticleURL(HelpdeskArticles.CREATOR_TERMS), creatorRevenuePolicyUrl: null };
  const obj2 = combinedDefault;
  obj[1] = combinedDefault.getArticleURL(HelpdeskArticles.CREATOR_POLICY);
  return intl.format(getSystemLocale.t["+ALa7+"], obj);
};