// === Module 14832: handleOpenAgeGatedContentSupportArticle ===

// Module 14832 (handleOpenAgeGatedContentSupportArticle)
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2024 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8476 */;
import TinyBroncoConstants from "TinyBroncoConstants" /* 14761 */;
import size from "module_2" /* 2 */;

let closure_2 = TinyBroncoConstants.TINY_BRONCO_SUPPORT_ARTICLE_ID;
const result = size.fileFinishedImporting("modules/tiny_bronco/handleOpenAgeGatedContentSupportArticle.tsx");

export const handleOpenAgeGatedContentSupportArticle = function handleOpenAgeGatedContentSupportArticle() {
  const obj = AgeVerificationActionCreatorsDefault;
  obj.openUrl(HelpdeskUtilsDefault.getArticleURL(closure_2));
};