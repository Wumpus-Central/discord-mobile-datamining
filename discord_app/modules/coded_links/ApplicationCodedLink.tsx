// discord_app/modules/coded_links/ApplicationCodedLink.tsx
import GlobalUtils from "../../utils/GlobalUtils.tsx";
import CodedLink from "CodedLink.tsx";
import storefrontMessageEmbedCodedLink from "../application_storefront/storefrontMessageEmbedCodedLink.tsx";
import activityBookmarkUtils from "../applications/message_embed/utils/activityBookmarkUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

const items = [
  CodedLink.CodedLinkType.APP_DIRECTORY_PROFILE,
  CodedLink.CodedLinkType.ACTIVITY_BOOKMARK,
  CodedLink.CodedLinkType.APP_DIRECTORY_STOREFRONT,
  CodedLink.CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU,
  CodedLink.CodedLinkType.APP_OAUTH2_LINK,
];
const set = new Set(items);
const items1 = [
  CodedLink.CodedLinkType.APP_DIRECTORY_PROFILE,
  CodedLink.CodedLinkType.ACTIVITY_BOOKMARK,
  CodedLink.CodedLinkType.APP_OAUTH2_LINK,
];
const set1 = new Set(items1);
let result = size.fileFinishedImporting("modules/coded_links/ApplicationCodedLink.tsx");

export const APP_LINK_CODED_TYPES = set;
export const isApplicationCodedLink = function isApplicationCodedLink(type) {
  return GlobalUtils.isInSet(type, set);
};
export const APP_LINK_CODED_TYPES_MOBILE_SUPPORT = set1;
export const isApplicationCodedLinkMobileSupported = function isApplicationCodedLinkMobileSupported(type) {
  return GlobalUtils.isInSet(type, set1);
};
export const getApplicationCodedLinkData = function getApplicationCodedLinkData(type, code, url) {
  if (CodedLink.CodedLinkType.APP_DIRECTORY_PROFILE !== type) {
    if (CodedLink.CodedLinkType.APP_OAUTH2_LINK !== type) {
      if (CodedLink.CodedLinkType.APP_DIRECTORY_STOREFRONT !== type) {
        if (CodedLink.CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU === type) {
          let tmpResult = storefrontMessageEmbedCodedLink;
          const result = tmpResult.parseStorefrontSkuCodedLink(code);
          let tmp5 = null;
          if (null != result) {
            let obj = { type, applicationId: null, skuId: null };
            ({ applicationId: obj4.applicationId, skuId: obj4.skuId } = result);
            tmp5 = obj;
          }
          return tmp5;
        } else if (CodedLink.CodedLinkType.ACTIVITY_BOOKMARK === type) {
          obj = { type, applicationId: code, params: null };
          tmpResult = activityBookmarkUtils;
          obj.params = tmpResult.extractActivityBookmarkParams(url);
          return obj;
        }
      }
    }
  }
  obj = { type, applicationId: code };
  return obj;
};
