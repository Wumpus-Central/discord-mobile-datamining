// === Module 14754: handleOpenAgeGatedContentSupportArticle ===

// Module 14754 (handleOpenAgeGatedContentSupportArticle)
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2024 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8411 */;
import TinyBroncoConstants from "TinyBroncoConstants" /* 14683 */;
import size from "module_2" /* 2 */;

let closure_2 = TinyBroncoConstants.TINY_BRONCO_SUPPORT_ARTICLE_ID;
const result = size.fileFinishedImporting("modules/tiny_bronco/handleOpenAgeGatedContentSupportArticle.tsx");

export const handleOpenAgeGatedContentSupportArticle = function handleOpenAgeGatedContentSupportArticle() {
  const obj = AgeVerificationActionCreatorsDefault;
  obj.openUrl(HelpdeskUtilsDefault.getArticleURL(closure_2));
};