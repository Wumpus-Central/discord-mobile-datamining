// discord_app/modules/tiny_bronco/handleOpenAgeGatedContentSupportArticle.tsx
import HelpdeskUtilsDefault from "../../utils/HelpdeskUtils.tsx";
import AgeVerificationActionCreatorsDefault from "../age_assurance/AgeVerificationActionCreators.native.tsx";
import TinyBroncoConstants from "TinyBroncoConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_2 = TinyBroncoConstants.TINY_BRONCO_SUPPORT_ARTICLE_ID;
const result = size.fileFinishedImporting("modules/tiny_bronco/handleOpenAgeGatedContentSupportArticle.tsx");

export const handleOpenAgeGatedContentSupportArticle = function handleOpenAgeGatedContentSupportArticle() {
  const obj = AgeVerificationActionCreatorsDefault;
  obj.openUrl(HelpdeskUtilsDefault.getArticleURL(closure_2));
};
