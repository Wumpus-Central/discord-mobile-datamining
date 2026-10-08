// === Module 14814: handleOpenUnconfirmedAgeGroupSupportArticle ===

// Module 14814 (handleOpenUnconfirmedAgeGroupSupportArticle)
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2127 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7492 */;
import LocationMetadataStore from "LocationMetadataStore" /* 10633 */;

const TinyBroncoConstants = fn(5933);
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