// === Module 15395: getSocialLayerStorefrontSkuEmbedDetails ===

// Module 15395 (getSocialLayerStorefrontSkuEmbedDetails)
import _mod17 from "module_17" /* 17 */;
import util from "util" /* 1113 */;
import SlayerStorefrontUtils from "SlayerStorefrontUtils" /* 7468 */;
import _modDef10805 from "module_10805" /* 10805 */;
import size from "module_2" /* 2 */;

const Image = _mod17.Image;
const result = size.fileFinishedImporting("modules/slayer_storefront/native/getSocialLayerStorefrontSkuEmbedDetails.tsx");

export function getSocialLayerStorefrontSkuEmbedDetails(value, application) {
  const obj = { title: value.name, subtitle: null, foregroundImageUrl: null, backgroundImageUrl: null, titleIconUrl: null, badgeText: null, badgeIconUrl: null };
  const intl = util.intl;
  obj.subtitle = intl.string(util.t.V91tvy);
  const str = SlayerStorefrontUtils.getCardImageURL(value);
  let str1;
  if (str != null) {
    str1 = str.toString();
  }
  if (str1 == null) {
    str1 = application.getIconURL(512);
  }
  obj.foregroundImageUrl = str1;
  const str2 = SlayerStorefrontUtils.getCardBackgroundImageURL(value);
  let str5;
  if (str2 != null) {
    str5 = str2.toString();
  }
  obj.backgroundImageUrl = str5;
  const tmpResult = SlayerStorefrontUtils;
  const str3 = SlayerStorefrontUtils.getPrimaryCarouselItemInfo(value, application.id).primaryIconAsset;
  let str6;
  if (str3 != null) {
    str6 = str3.toString();
  }
  obj.titleIconUrl = str6;
  let formatted;
  if (value.exclusive) {
    const intl2 = util.intl;
    formatted = intl2.string(util.t.RiDMFz).toUpperCase();
    const str4 = intl2.string(util.t.RiDMFz);
  }
  obj.badgeText = formatted;
  let uri;
  if (value.exclusive) {
    uri = Image.resolveAssetSource(_modDef10805).uri;
  }
  obj.badgeIconUrl = uri;
  return obj;
}