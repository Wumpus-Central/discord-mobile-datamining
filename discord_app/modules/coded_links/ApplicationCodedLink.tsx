// discord_app/modules/coded_links/ApplicationCodedLink.tsx
import set from "makeStorefrontSKUCodedLink";
import { isDiscordFrontendDevelopment } from "../../utils/GlobalUtils.tsx";
import { CodedLinkType } from "CodedLink.tsx";

const items = [require("CodedLinkType").CodedLinkType.APP_DIRECTORY_PROFILE, require("CodedLinkType").CodedLinkType.ACTIVITY_BOOKMARK, require("CodedLinkType").CodedLinkType.APP_DIRECTORY_STOREFRONT, require("CodedLinkType").CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU, require("CodedLinkType").CodedLinkType.APP_OAUTH2_LINK];
let set = new Set(items);
const items1 = [require("CodedLinkType").CodedLinkType.APP_DIRECTORY_PROFILE, require("CodedLinkType").CodedLinkType.ACTIVITY_BOOKMARK, require("CodedLinkType").CodedLinkType.APP_OAUTH2_LINK];
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
    if (tmp(4331).CodedLinkType.APP_OAUTH2_LINK !== type) {
      if (tmp(4331).CodedLinkType.APP_DIRECTORY_STOREFRONT !== type) {
        if (tmp(4331).CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU === type) {
          let tmpResult = tmp(7218);
          const result = tmpResult.parseStorefrontSkuCodedLink(code);
          let tmp5 = null;
          if (null != result) {
            let obj = { type: null, applicationId: null, skuId: null };
            obj[0] = type;
            ({ applicationId: obj4[1], skuId: obj4[2] } = result);
            tmp5 = obj;
          }
          return tmp5;
        } else if (tmp(4331).CodedLinkType.ACTIVITY_BOOKMARK === type) {
          obj = { type: null, applicationId: null, params: null };
          obj[0] = type;
          obj[1] = code;
          tmpResult = tmp(7219);
          obj[2] = tmpResult.extractActivityBookmarkParams(url);
          return obj;
        }
      }
    }
  }
  obj = { type, applicationId: code };
  return obj;
};