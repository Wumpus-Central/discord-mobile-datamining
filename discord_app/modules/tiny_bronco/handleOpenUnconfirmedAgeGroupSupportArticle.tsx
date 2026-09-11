// === Module 14806: handleOpenUnconfirmedAgeGroupSupportArticle ===

// Module 14806 (handleOpenUnconfirmedAgeGroupSupportArticle)
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2024 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8497 */;
import TinyBroncoConstants from "TinyBroncoConstants" /* 14735 */;
import size from "module_2" /* 2 */;

const TINY_BRONCO_ARTICLE_ID = TinyBroncoConstants.TINY_BRONCO_ARTICLE_ID;
const result = size.fileFinishedImporting("modules/tiny_bronco/handleOpenUnconfirmedAgeGroupSupportArticle.tsx");

export const handleOpenUnconfirmedAgeGroupSupportArticle = function handleOpenUnconfirmedAgeGroupSupportArticle() {
  const obj = AgeVerificationActionCreatorsDefault;
  obj.openUrl(HelpdeskUtilsDefault.getArticleURL(TINY_BRONCO_ARTICLE_ID));
};