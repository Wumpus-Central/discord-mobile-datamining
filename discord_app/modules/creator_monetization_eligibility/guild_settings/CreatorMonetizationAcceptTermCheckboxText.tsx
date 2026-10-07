// discord_app/modules/creator_monetization_eligibility/guild_settings/CreatorMonetizationAcceptTermCheckboxText.tsx
import Constants from "../../../Constants.tsx";
import util from "../../../intl/index.native.tsx";
import HelpdeskUtilsDefault from "../../../utils/HelpdeskUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const HelpdeskArticles = Constants.HelpdeskArticles;
const result = size.fileFinishedImporting(
  "modules/creator_monetization_eligibility/guild_settings/CreatorMonetizationAcceptTermCheckboxText.tsx",
);

export const getCreatorMonetizationAcceptTermsCheckboxText = function getCreatorMonetizationAcceptTermsCheckboxText() {
  const intl = util.intl;
  const obj = {
    fullTermsUrl: HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.CREATOR_TERMS),
    creatorRevenuePolicyUrl: null,
  };
  obj.creatorRevenuePolicyUrl = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.CREATOR_POLICY);
  return intl.format(util.t["+ALa7+"], obj);
};
