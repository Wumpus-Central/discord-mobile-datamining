// === Module 15023: handleOpenUnconfirmedAgeGroupSupportArticle ===

// Module 15023 (handleOpenUnconfirmedAgeGroupSupportArticle)
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2108 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8681 */;
import TinyBroncoConstants from "TinyBroncoConstants" /* 14952 */;
import size from "module_2" /* 2 */;

const TINY_BRONCO_ARTICLE_ID = TinyBroncoConstants.TINY_BRONCO_ARTICLE_ID;
const result = size.fileFinishedImporting("modules/tiny_bronco/handleOpenUnconfirmedAgeGroupSupportArticle.tsx");

export const handleOpenUnconfirmedAgeGroupSupportArticle = function handleOpenUnconfirmedAgeGroupSupportArticle() {
  const obj = AgeVerificationActionCreatorsDefault;
  obj.openUrl(HelpdeskUtilsDefault.getArticleURL(TINY_BRONCO_ARTICLE_ID));
};