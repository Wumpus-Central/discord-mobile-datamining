import { getSystemLocale } from "../../../intl/index.native.tsx";
import { combined } from "../../../utils/HelpdeskUtils.tsx";
// discord_app/modules/creator_monetization_eligibility/guild_settings/CreatorMonetizationAcceptTermCheckboxText.tsx
import { HelpdeskArticles } from "ME";

const result = require("combined").fileFinishedImporting("modules/creator_monetization_eligibility/guild_settings/CreatorMonetizationAcceptTermCheckboxText.tsx");

export const getCreatorMonetizationAcceptTermsCheckboxText = function getCreatorMonetizationAcceptTermsCheckboxText() {
  const intl = getSystemLocale /* getSystemLocale */.intl;
  const obj = { fullTermsUrl: null, creatorRevenuePolicyUrl: null };
  obj[0] = combined.getArticleURL(HelpdeskArticles.CREATOR_TERMS);
  const obj2 = combined;
  obj[1] = combined.getArticleURL(HelpdeskArticles.CREATOR_POLICY);
  return intl.format(getSystemLocale /* getSystemLocale */.t["+ALa7+"], obj);
};