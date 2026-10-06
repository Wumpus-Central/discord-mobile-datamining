// === Module 7187: ApplicationCodedLink ===

// Module 7187 (ApplicationCodedLink)
import GlobalUtils from "GlobalUtils" /* 1375 */;
import CodedLink from "CodedLink" /* 4881 */;
import _slicedToArray from "_slicedToArray" /* 7188 */;
import activityBookmarkUtils from "activityBookmarkUtils" /* 7189 */;
import size from "module_2" /* 2 */;

const items = [CodedLink.CodedLinkType.APP_DIRECTORY_PROFILE, CodedLink.CodedLinkType.ACTIVITY_BOOKMARK, CodedLink.CodedLinkType.APP_DIRECTORY_STOREFRONT, CodedLink.CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU, CodedLink.CodedLinkType.APP_OAUTH2_LINK];
const set = new Set(items);
const items1 = [CodedLink.CodedLinkType.APP_DIRECTORY_PROFILE, CodedLink.CodedLinkType.ACTIVITY_BOOKMARK, CodedLink.CodedLinkType.APP_OAUTH2_LINK];
const set1 = new Set(items1);
let result = size.fileFinishedImporting("modules/coded_links/ApplicationCodedLink.tsx");

export const APP_LINK_CODED_TYPES = set;
export const isApplicationCodedLink = function isApplicationCodedLink(type) {
  const obj = GlobalUtils;
  return obj.isInSet(type, set);
};
export const APP_LINK_CODED_TYPES_MOBILE_SUPPORT = set1;
export const isApplicationCodedLinkMobileSupported = function isApplicationCodedLinkMobileSupported(type) {
  const obj = GlobalUtils;
  return obj.isInSet(type, set1);
};
export const getApplicationCodedLinkData = function getApplicationCodedLinkData(type, code, url) {
  let tmpResult2;
  if (CodedLink.CodedLinkType.APP_DIRECTORY_PROFILE !== type) {
    if (CodedLink.CodedLinkType.APP_OAUTH2_LINK !== type) {
      if (CodedLink.CodedLinkType.APP_DIRECTORY_STOREFRONT !== type) {
        if (CodedLink.CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU === type) {
          const tmpResult = _slicedToArray;
          const result = tmpResult.parseStorefrontSkuCodedLink(code);
          let tmp5 = null;
          if (null != result) {
            const obj2 = { type, applicationId: null, skuId: null };
            ({ applicationId: obj4.applicationId, skuId: obj4.skuId } = result);
            tmp5 = obj2;
          }
          return tmp5;
        } else if (CodedLink.CodedLinkType.ACTIVITY_BOOKMARK === type) {
          const obj = { type, applicationId: code, params: tmpResult2.extractActivityBookmarkParams(url) };
          tmpResult2 = activityBookmarkUtils;
          return obj;
        }
      }
    }
  }
  return { type, applicationId: code };
};