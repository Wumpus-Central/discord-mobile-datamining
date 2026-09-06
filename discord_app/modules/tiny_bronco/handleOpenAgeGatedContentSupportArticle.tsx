// discord_app/modules/tiny_bronco/handleOpenAgeGatedContentSupportArticle.tsx
import set from "../../../_runtime/00002_set.js";
import combinedDefault from "../../utils/HelpdeskUtils.tsx";
import openIncodeAgeVerificationModalDefault from "../age_assurance/AgeVerificationActionCreators.native.tsx";
import TINY_BRONCO_BLOG_URL from "TinyBroncoConstants.tsx";

let closure_2 = TINY_BRONCO_BLOG_URL.TINY_BRONCO_SUPPORT_ARTICLE_ID;
const result = set.fileFinishedImporting("modules/tiny_bronco/handleOpenAgeGatedContentSupportArticle.tsx");

export const handleOpenAgeGatedContentSupportArticle = function handleOpenAgeGatedContentSupportArticle() {
  const obj = openIncodeAgeVerificationModalDefault;
  obj.openUrl(combinedDefault.getArticleURL(closure_2));
};
