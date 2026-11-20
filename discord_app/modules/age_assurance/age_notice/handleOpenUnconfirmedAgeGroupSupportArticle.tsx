// === Module 15901: handleOpenUnconfirmedAgeGroupSupportArticle ===

// Module 15901 (handleOpenUnconfirmedAgeGroupSupportArticle)
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2186 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7673 */;
import LocationMetadataStore from "LocationMetadataStore" /* 10508 */;

const AgeNoticeConstants = fn(6303);
({ AGE_NOTICE_AGE_GROUP_SUPPORT_ARTICLE_IDS_BY_COUNTRY: c3, AGE_NOTICE_DEFAULT_ARTICLE_ID: closure_4 } = AgeNoticeConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/age_notice/handleOpenUnconfirmedAgeGroupSupportArticle.tsx");

export function handleOpenUnconfirmedAgeGroupSupportArticle() {
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
}