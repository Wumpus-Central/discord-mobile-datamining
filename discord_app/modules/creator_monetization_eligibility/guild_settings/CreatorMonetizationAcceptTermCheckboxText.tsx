// === Module 19805: CreatorMonetizationAcceptTermCheckboxText ===

// Module 19805 (CreatorMonetizationAcceptTermCheckboxText)
import Constants from "Constants" /* 1084 */;
import util from "util" /* 1125 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2065 */;
import size from "module_2" /* 2 */;

const HelpdeskArticles = Constants.HelpdeskArticles;
const result = size.fileFinishedImporting("modules/creator_monetization_eligibility/guild_settings/CreatorMonetizationAcceptTermCheckboxText.tsx");

export function getCreatorMonetizationAcceptTermsCheckboxText() {
  const intl = util.intl;
  const obj = { fullTermsUrl: HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.CREATOR_TERMS), creatorRevenuePolicyUrl: null };
  obj.creatorRevenuePolicyUrl = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.CREATOR_POLICY);
  return intl.format(util.t["+ALa7+"], obj);
}