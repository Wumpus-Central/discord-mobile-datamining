// === Module 16577: getCreatorMonetizationAcceptTermsCheckboxText ===

// Module 16577 (getCreatorMonetizationAcceptTermsCheckboxText)
import { HelpdeskArticles } from "ME";

const result = require("combined").fileFinishedImporting("modules/creator_monetization_eligibility/guild_settings/CreatorMonetizationAcceptTermCheckboxText.tsx");

export const getCreatorMonetizationAcceptTermsCheckboxText = function getCreatorMonetizationAcceptTermsCheckboxText() {
  const intl = require(1236) /* getSystemLocale */.intl;
  const obj = { fullTermsUrl: null, creatorRevenuePolicyUrl: null };
  obj[0] = importDefault(1945).getArticleURL(HelpdeskArticles.CREATOR_TERMS);
  const obj2 = importDefault(1945);
  obj[1] = importDefault(1945).getArticleURL(HelpdeskArticles.CREATOR_POLICY);
  return intl.format(require(1236) /* getSystemLocale */.t["+ALa7+"], obj);
};