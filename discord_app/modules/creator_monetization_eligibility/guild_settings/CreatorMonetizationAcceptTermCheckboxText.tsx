// discord_app/modules/creator_monetization_eligibility/guild_settings/CreatorMonetizationAcceptTermCheckboxText.tsx
import set from "../../../../_runtime/00002_set.js";
import ME from "../../../Constants.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import combinedDefault from "../../../utils/HelpdeskUtils.tsx";

const HelpdeskArticles = ME.HelpdeskArticles;
const result = set.fileFinishedImporting(
  "modules/creator_monetization_eligibility/guild_settings/CreatorMonetizationAcceptTermCheckboxText.tsx",
);

export const getCreatorMonetizationAcceptTermsCheckboxText = function getCreatorMonetizationAcceptTermsCheckboxText() {
  const intl = getSystemLocale.intl;
  const obj = {
    fullTermsUrl: combinedDefault.getArticleURL(HelpdeskArticles.CREATOR_TERMS),
    creatorRevenuePolicyUrl: null,
  };
  const obj2 = combinedDefault;
  obj[1] = combinedDefault.getArticleURL(HelpdeskArticles.CREATOR_POLICY);
  return intl.format(getSystemLocale.t["+ALa7+"], obj);
};
