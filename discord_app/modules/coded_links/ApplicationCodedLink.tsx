// discord_app/modules/coded_links/ApplicationCodedLink.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import isDiscordFrontendDevelopment from "../../utils/GlobalUtils.tsx";
import CodedLinkType from "CodedLink.tsx";
import makeStorefrontSKUCodedLink from "../application_storefront/storefrontMessageEmbedCodedLink.tsx";
import extractActivityBookmarkParams from "../applications/message_embed/utils/activityBookmarkUtils.tsx";

const items = [CodedLinkType.CodedLinkType.APP_DIRECTORY_PROFILE, CodedLinkType.CodedLinkType.ACTIVITY_BOOKMARK, CodedLinkType.CodedLinkType.APP_DIRECTORY_STOREFRONT, CodedLinkType.CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU, CodedLinkType.CodedLinkType.APP_OAUTH2_LINK];
const set = new Set(items);
const items1 = [CodedLinkType.CodedLinkType.APP_DIRECTORY_PROFILE, CodedLinkType.CodedLinkType.ACTIVITY_BOOKMARK, CodedLinkType.CodedLinkType.APP_OAUTH2_LINK];
const set1 = new Set(items1);
let result = obj132.fileFinishedImporting("modules/coded_links/ApplicationCodedLink.tsx");

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
    if (CodedLinkType.CodedLinkType.APP_OAUTH2_LINK !== type) {
      if (CodedLinkType.CodedLinkType.APP_DIRECTORY_STOREFRONT !== type) {
        if (CodedLinkType.CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU === type) {
          let tmpResult = makeStorefrontSKUCodedLink;
          const result = tmpResult.parseStorefrontSkuCodedLink(code);
          let tmp5 = null;
          if (null != result) {
            let obj = { type: null, applicationId: null, skuId: null };
            obj[0] = type;
            ({ applicationId: obj4[1], skuId: obj4[2] } = result);
            tmp5 = obj;
          }
          return tmp5;
        } else if (CodedLinkType.CodedLinkType.ACTIVITY_BOOKMARK === type) {
          obj = { type: null, applicationId: null, params: null };
          obj[0] = type;
          obj[1] = code;
          tmpResult = extractActivityBookmarkParams;
          obj[2] = tmpResult.extractActivityBookmarkParams(url);
          return obj;
        }
      }
    }
  }
  obj = { type, applicationId: code };
  return obj;
};