// discord_app/modules/slayer_storefront/native/getSocialLayerStorefrontSkuEmbedDetails.tsx
import _mod17 from "../../../../_runtime/metro/00017__.js";
import util from "../../../intl/index.native.tsx";
import SlayerStorefrontUtils from "../SlayerStorefrontUtils.tsx";
import _modDef10814 from "../../../../_runtime/metro/10814__.js";
import size from "../../../../_runtime/metro/00002__.js";

const Image = _mod17.Image;
const result = size.fileFinishedImporting(
  "modules/slayer_storefront/native/getSocialLayerStorefrontSkuEmbedDetails.tsx",
);

export function getSocialLayerStorefrontSkuEmbedDetails(value, application) {
  const obj = {
    title: value.name,
    subtitle: null,
    foregroundImageUrl: null,
    backgroundImageUrl: null,
    titleIconUrl: null,
    badgeText: null,
    badgeIconUrl: null,
  };
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
    uri = Image.resolveAssetSource(_modDef10814).uri;
  }
  obj.badgeIconUrl = uri;
  return obj;
}
