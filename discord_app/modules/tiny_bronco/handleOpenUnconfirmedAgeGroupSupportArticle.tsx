// === Module 14492: handleOpenUnconfirmedAgeGroupSupportArticle ===

// Module 14492 (handleOpenUnconfirmedAgeGroupSupportArticle)
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2111 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8054 */;
import LocationMetadataStore from "LocationMetadataStore" /* 13458 */;

const TinyBroncoConstants = fn(9430);
({ TINY_BRONCO_AGE_GROUP_SUPPORT_ARTICLE_IDS_BY_COUNTRY: c3, TINY_BRONCO_DEFAULT_ARTICLE_ID: closure_4 } = TinyBroncoConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/tiny_bronco/handleOpenUnconfirmedAgeGroupSupportArticle.tsx");

export const handleOpenUnconfirmedAgeGroupSupportArticle = function handleOpenUnconfirmedAgeGroupSupportArticle() {
  const countryCode = LocationMetadataStore.getCountryCode();
  let tmp2;
  if (null != countryCode) {
    tmp2 = React3[countryCode.alpha2];
  }
  const obj = AgeVerificationActionCreatorsDefault;
  if (tmp2 == null) {
    tmp2 = React4;
  }
  obj.openUrl(HelpdeskUtilsDefault.getArticleURL(tmp2));
};