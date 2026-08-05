// discord_app/modules/creator_monetization_eligibility/guild_settings/CreatorMonetizationAcceptTermCheckboxText.tsx
import { HelpdeskArticles } from "ME";

const result = require("combined").fileFinishedImporting("modules/creator_monetization_eligibility/guild_settings/CreatorMonetizationAcceptTermCheckboxText.tsx");

export const getCreatorMonetizationAcceptTermsCheckboxText = function getCreatorMonetizationAcceptTermsCheckboxText() {
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  const obj = { fullTermsUrl: null, creatorRevenuePolicyUrl: null };
  obj[0] = require("../../../utils/HelpdeskUtils.tsx").getArticleURL(HelpdeskArticles.CREATOR_TERMS);
  const obj2 = require("../../../utils/HelpdeskUtils.tsx");
  obj[1] = require("../../../utils/HelpdeskUtils.tsx").getArticleURL(HelpdeskArticles.CREATOR_POLICY);
  return intl.format(require("../../../intl/index.native.tsx") /* getSystemLocale */.t["+ALa7+"], obj);
};