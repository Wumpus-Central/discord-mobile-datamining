// discord_app/modules/tiny_bronco/handleOpenUnconfirmedAgeGroupSupportArticle.tsx
import HelpdeskUtilsDefault from "../../utils/HelpdeskUtils.tsx";
import AgeVerificationActionCreatorsDefault from "../age_assurance/AgeVerificationActionCreators.native.tsx";
import LocationMetadataStore from "../location_metadata/stores/LocationMetadataStore.tsx";
import TinyBroncoConstants from "TinyBroncoConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let c3;
let closure_4;
({ TINY_BRONCO_AGE_GROUP_SUPPORT_ARTICLE_IDS_BY_COUNTRY: c3, TINY_BRONCO_DEFAULT_ARTICLE_ID: closure_4 } =
  TinyBroncoConstants);
const result = size.fileFinishedImporting("modules/tiny_bronco/handleOpenUnconfirmedAgeGroupSupportArticle.tsx");

export const handleOpenUnconfirmedAgeGroupSupportArticle = function handleOpenUnconfirmedAgeGroupSupportArticle() {
  const countryCode = LocationMetadataStore.getCountryCode();
  let tmp2;
  if (null != countryCode) {
    tmp2 = _false[countryCode.alpha2];
  }
  const openUrl = AgeVerificationActionCreatorsDefault.openUrl;
  AgeVerificationActionCreatorsDefault;
  const getArticleURL = HelpdeskUtilsDefault.getArticleURL;
  HelpdeskUtilsDefault;
  if (tmp2 == null) {
    tmp2 = React3;
  }
  openUrl(getArticleURL(tmp2));
};
