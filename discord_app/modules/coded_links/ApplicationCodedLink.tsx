// discord_app/modules/coded_links/ApplicationCodedLink.tsx
import isDiscordFrontendDevelopment from "../../utils/GlobalUtils.tsx";
import CodedLinkType from "CodedLink.tsx";
import set from "../../../_runtime/00002_set.js";

const items = [CodedLinkType.CodedLinkType.APP_DIRECTORY_PROFILE, CodedLinkType.CodedLinkType.ACTIVITY_BOOKMARK, CodedLinkType.CodedLinkType.APP_DIRECTORY_STOREFRONT, CodedLinkType.CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU, CodedLinkType.CodedLinkType.APP_OAUTH2_LINK];
let set = new Set(items);
const items1 = [CodedLinkType.CodedLinkType.APP_DIRECTORY_PROFILE, CodedLinkType.CodedLinkType.ACTIVITY_BOOKMARK, CodedLinkType.CodedLinkType.APP_OAUTH2_LINK];
const set1 = new Set(items1);
let result = set.fileFinishedImporting("modules/coded_links/ApplicationCodedLink.tsx");

export const APP_LINK_CODED_TYPES = set;
export const isApplicationCodedLink = function isApplicationCodedLink(type) {
  return isDiscordFrontendDevelopment.isInSet(type, set);
};
export const APP_LINK_CODED_TYPES_MOBILE_SUPPORT = set1;
export const isApplicationCodedLinkMobileSupported = function isApplicationCodedLinkMobileSupported(type) {
  return isDiscordFrontendDevelopment.isInSet(type, set1);
};
export const getApplicationCodedLinkData = function getApplicationCodedLinkData(type, code, url) {
  if (CodedLinkType.CodedLinkType.APP_DIRECTORY_PROFILE !== type) {
    if (tmp(4367).CodedLinkType.APP_OAUTH2_LINK !== type) {
      if (tmp(4367).CodedLinkType.APP_DIRECTORY_STOREFRONT !== type) {
        if (tmp(4367).CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU === type) {
          let tmpResult = tmp(4383);
          const result = tmpResult.parseStorefrontSkuCodedLink(code);
          let tmp5 = null;
          if (null != result) {
            let obj = { type: null, applicationId: null, skuId: null };
            obj[0] = type;
            ({ applicationId: obj4[1], skuId: obj4[2] } = result);
            tmp5 = obj;
          }
          return tmp5;
        } else if (tmp(4367).CodedLinkType.ACTIVITY_BOOKMARK === type) {
          obj = { type: null, applicationId: null, params: null };
          obj[0] = type;
          obj[1] = code;
          tmpResult = tmp(7482);
          obj[2] = tmpResult.extractActivityBookmarkParams(url);
          return obj;
        }
      }
    }
  }
  obj = { type, applicationId: code };
  return obj;
};