// === Module 11010: CollectiblesShopCheckoutDetails ===

// Module 11010 (CollectiblesShopCheckoutDetails)
import nativeDefault from "native" /* 576 */;
import FractionalPremiumSKUs from "FractionalPremiumSKUs" /* 1077 */;
import util from "util" /* 1114 */;
import utils from "utils" /* 1886 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1889 */;
import Text_Text from "Text/Text" /* 4556 */;
import FastImageDefault from "FastImage" /* 5587 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7553 */;
import useShopProductItems from "useShopProductItems" /* 8171 */;
import useCurrentUser from "useCurrentUser" /* 8178 */;
import useMaybeFetchProfileFrameDefault from "useMaybeFetchProfileFrame" /* 8201 */;
import useProfileEffectDefault from "useProfileEffect" /* 8226 */;
import BundleSampleV2Default from "BundleSampleV2" /* 8797 */;
import AvatarDecorationSampleV2Default from "AvatarDecorationSampleV2" /* 8810 */;
import NameplateDefault from "Nameplate" /* 8818 */;
import ProfileFrameSamplePreviewDefault from "ProfileFrameSamplePreview" /* 8822 */;
import _modDef8845 from "module_8845" /* 8845 */;
import FractionalNitroCoinIllustration from "FractionalNitroCoinIllustration" /* 8846 */;
import collectibles_CollectiblesUtils from "collectibles/CollectiblesUtils" /* 8848 */;
import getProductName from "getProductName" /* 8864 */;
import _modDef11011 from "module_11011" /* 11011 */;
import noop from "module_19" /* 19 */;

require = fn;
function ProfileEffectAssetPreview(item) {
  const tmp = closure_11();
  const tmp4 = useProfileEffectDefault(item.item.skuId);
  let tmp5 = null;
  if (null != tmp4) {
    let obj = { style: tmp.profileEffectContainer, children: null };
    obj = { source: null, alt: null, style: null, resizeMode: "cover" };
    obj = { uri: _modDef11011 };
    obj.source = obj;
    obj.alt = tmp4.accessibilityLabel;
    obj.style = tmp.profileEffect;
    const items = [React5(FastImageDefault, obj), ];
    const obj1 = { style: tmp.profileEffect, source: null, alt: null, resizeMode: "cover" };
    const obj2 = { uri: tmp4.thumbnailPreviewSrc };
    obj1.source = obj2;
    obj1.alt = tmp4.title;
    items[1] = React5(FastImageDefault, obj1);
    obj.children = items;
    tmp5 = React6(View, obj);
    const tmp2Result = FastImageDefault;
  }
  return tmp5;
}
function ProfileFrameAssetPreview(arg0) {
  ({ item, width, height } = arg0);
  const tmp3 = useMaybeFetchProfileFrameDefault(item.skuId, "CollectiblesShopCheckoutDetails");
  let tmp4 = null;
  if (null != tmp3) {
    const obj = { profileFrame: tmp3, previewWidth: width, previewHeight: height, profileBackgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
    tmp4 = React5(ProfileFrameSamplePreviewDefault, obj);
    const tmpResult = ProfileFrameSamplePreviewDefault;
  }
  return tmp4;
}
function BundleAssetPreview(height) {
  ({ product, width } = height);
  height = height.height;
  const tmp = closure_9();
  closure_2 = tmp;
  let obj = useShopProductItems;
  const shopProductItems = obj.useShopProductItems(product);
  const bundleWidth = small.small.bundleWidth;
  const result = width / bundleWidth;
  c4 = result;
  let items = [tmp.bundlePreviewContainer, width, height];
  ({ firstProfileEffect, firstAvatarDecoration, firstNameplate } = shopProductItems);
  let items1 = [tmp.bundlePreviewScale, bundleWidth, result];
  const memo = noop.useMemo(() => {
    const items = [closure_2.bundlePreviewContainer, ];
    const size = { width, height };
    items[1] = size;
    return items;
  }, items);
  const items2 = [width, height];
  const memo1 = noop.useMemo(() => {
    const items = [closure_2.bundlePreviewScale, ];
    const size = { width: bundleWidth, height: bundleWidth, transform: null };
    const items1 = [{ scale }];
    size.transform = items1;
    items[1] = size;
    return items;
  }, items1);
  obj = { style: memo, children: null };
  obj = { style: memo1, children: null };
  const memo2 = noop.useMemo(() => {
    const size = { width, height };
    return size;
  }, items2);
  obj.children = React5(BundleSampleV2Default, { deco: firstAvatarDecoration, pfx: firstProfileEffect, nameplate: firstNameplate, previewAssets: product.previewAssets, disableStaticBackground: true, size: "small", targetSize: memo2 });
  obj.children = React5(View, obj);
  return React5(View, obj);
}
function NameplateAssetPreview(item) {
  let obj = utils;
  const nameplateData = obj.getNameplateData(item.item);
  obj = { nameplate: nameplateData, fullOpacity: true, isSquarePreview: true, style: closure_12().nameplate };
  return React5(NameplateDefault, obj);
}
function CollectibleProductPreview(arg0) {
  ({ product, recipientUser } = arg0);
  if (product.type === CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT) {
    let num = 42;
  } else {
    num = 55;
  }
  let avatarSource;
  if (recipientUser != null) {
    avatarSource = recipientUser.getAvatarSource(undefined, false, num);
  }
  const obj = { style: null, children: React5(CollectibleProductPreviewContent, { product, width: num, height: 55, userAvatarSource: avatarSource }) };
  const items = [closure_9().productPreviewContainer, { height: 55, width: num }];
  obj.style = items;
  return React5(View, obj);
}
function CollectibleProductPreviewContent(userAvatarSource) {
  ({ product, width, height } = userAvatarSource);
  const ALL = FractionalPremiumSKUs.FractionalPremiumSKUsSets.ALL;
  if (ALL.has(product.skuId)) {
    const size = { skuId: product.skuId, width: FractionalNitroCoinIllustration.FRACTIONAL_NITRO_COIN_SIZE.CHECKOUT, height: FractionalNitroCoinIllustration.FRACTIONAL_NITRO_COIN_SIZE.CHECKOUT };
    return React5(FractionalNitroCoinIllustration.FractionalNitroCoinIllustration, size);
  } else if (product.skuId === EXTERNAL_PRODUCT_SKU_IDS.ORB_PROFILE_BADGE) {
    let obj = { source: null, style: null };
    obj = { uri: _modDef8845 };
    obj.source = obj;
    obj.style = tmp.externalProductImage;
    return React5(FastImageDefault, obj);
  } else {
    const type = product.type;
    if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
      const obj1 = { item: product.items[0], size: width, avatarSource: userAvatarSource.userAvatarSource, animate: false };
      return React5(AvatarDecorationSampleV2Default, obj1);
    } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT === type) {
      const obj2 = { item: product.items[0] };
      return React5(ProfileEffectAssetPreview, obj2);
    } else if (CollectiblesItemType.CollectiblesItemType.NAMEPLATE === type) {
      const obj3 = { item: product.items[0] };
      return React5(NameplateAssetPreview, obj3);
    } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME === type) {
      const size1 = { item: product.items[0], width, height };
      return React5(ProfileFrameAssetPreview, size1);
    } else if (CollectiblesItemType.CollectiblesItemType.BUNDLE === type) {
      const size2 = { product, width, height };
      return React5(BundleAssetPreview, size2);
    } else {
      return null;
    }
  }
  tmp = closure_9();
}
function ProductDetails(product) {
  product = product.product;
  require = product;
  const tmp = closure_9();
  const items = [, ];
  ({ type: arr[0], skuId: arr[1] } = product);
  const memo = noop.useMemo(() => {
    const ALL = FractionalPremiumSKUs.FractionalPremiumSKUsSets.ALL;
    if (ALL.has(product.skuId)) {
      const intl7 = util.intl;
      return intl7.string(util.t.DFMPWS);
    } else if (product.skuId === EXTERNAL_PRODUCT_SKU_IDS.ORB_PROFILE_BADGE) {
      const intl6 = util.intl;
      return intl6.string(util.t["0+rBWT"]);
    } else {
      const type = product.type;
      if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
        const intl5 = util.intl;
        return intl5.string(util.t["7v0T9P"]);
      } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT === type) {
        const intl4 = util.intl;
        return intl4.string(util.t.wR5wOo);
      } else if (CollectiblesItemType.CollectiblesItemType.NAMEPLATE === type) {
        const intl3 = util.intl;
        return intl3.string(util.t.x5CoXR);
      } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME === type) {
        const intl2 = util.intl;
        return intl2.string(util.t.GWrZOd);
      } else if (CollectiblesItemType.CollectiblesItemType.BUNDLE === type) {
        const intl = util.intl;
        return intl.string(util.t.Zr5tjn);
      } else {
        return null;
      }
    }
  }, items);
  if (null == memo) {
    let obj = { style: tmp.productDetails, children: null };
    obj = { variant: "text-md/semibold", children: product.name };
    obj.children = closure_7(Text_Text.Text, obj);
    let tmp7 = closure_7(View, obj);
  } else {
    obj = { style: tmp.productDetails, children: null };
    const obj1 = { product, recipientUser: product.recipientUser };
    const items1 = [closure_7(CollectibleProductPreview, obj1), ];
    const obj2 = { style: tmp.productDetailsTextContainer, children: null };
    const obj3 = { variant: "text-md/semibold", children: product.name };
    const items2 = [closure_7(Text_Text.Text, obj3), ];
    const obj4 = { variant: "text-sm/medium", children: memo };
    items2[1] = closure_7(Text_Text.Text, obj4);
    obj2.children = items2;
    items1[1] = closure_8(View, obj2);
    obj.children = items1;
    tmp7 = closure_8(View, obj);
  }
  return tmp7;
}
function ProductPriceAmountTag(product) {
  product = product.product;
  require = product;
  const hasShopDiscount = product.hasShopDiscount;
  const useOrbPrice = product.useOrbPrice;
  const items = [product, hasShopDiscount, useOrbPrice];
  const memo = noop.useMemo(() => {
    if (useOrbPrice) {
      let tmpResult = CollectiblesProductUtils;
      const obj = { product, hasShopDiscount };
      const orbPrice = tmpResult.getProductOrbPrice(obj);
    } else {
      tmpResult = collectibles_CollectiblesUtils;
      const priceText = tmpResult.getFormattedPriceForCollectiblesProduct(product, hasShopDiscount, true);
    }
    return { orbPrice, priceText };
  }, items);
  let orbPrice = memo.orbPrice;
  if (useOrbPrice) {
    let amount;
    if (orbPrice != null) {
      amount = orbPrice.amount;
    }
    let obj = { orbAmount: amount };
    let tmp3Result = closure_7(hasShopDiscount(useOrbPrice[25]), obj);
    const tmp9 = hasShopDiscount(useOrbPrice[25]);
  } else {
    obj = { variant: "text-md/semibold", children: tmp2 };
    tmp3Result = closure_7(require("Text/Text").Text, obj);
  }
  return tmp3Result;
}
const View = fn(17).View;
const EXTERNAL_PRODUCT_SKU_IDS = fn(1076).EXTERNAL_PRODUCT_SKU_IDS;
const CollectiblesPreviewConstants = fn(8798);
({ BUNDLE_PREVIEW_CONFIG: metroRequire, SAMPLE_PROFILE_ASPECT_RATIO } = CollectiblesPreviewConstants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { externalProductImage: { width: 45, height: 45 }, bundlePreviewContainer: null, bundlePreviewScale: null, productContainer: null, productDetailsContainer: null, productPreviewContainer: null, productDetails: null, productDetailsTextContainer: null, errorContainer: null };
createStyles = { alignItems: "center", justifyContent: "center", overflow: "hidden", borderRadius: nativeDefault.radii.xs };
createStyles.bundlePreviewContainer = createStyles;
createStyles.bundlePreviewScale = { overflow: "hidden", alignItems: "center", justifyContent: "center" };
createStyles.productContainer = { borderRadius: nativeDefault.radii.lg, flexDirection: "column", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let obj1 = { borderRadius: nativeDefault.radii.lg, flexDirection: "column", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
createStyles.productDetailsContainer = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_16 };
createStyles.productPreviewContainer = { justifyContent: "center", alignItems: "center" };
let obj2 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_16 };
createStyles.productDetails = { display: "flex", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
let obj3 = { display: "flex", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
createStyles.productDetailsTextContainer = { gap: nativeDefault.space.PX_4 };
let obj4 = { gap: nativeDefault.space.PX_4 };
createStyles.errorContainer = { height: 36, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_16, borderBottomLeftRadius: nativeDefault.radii.lg, borderBottomRightRadius: nativeDefault.radii.lg };
let closure_9 = createStyles.createStyles(createStyles);
createStyles = fn(4560);
let closure_10 = createStyles.createStyles((arg0) => {
  const colors = nativeDefault.colors;
  if (arg0) {
    let BORDER_FEEDBACK_CRITICAL = colors.BACKGROUND_BRAND;
    let tmp4 = importDefault;
  } else {
    BORDER_FEEDBACK_CRITICAL = colors.BORDER_FEEDBACK_CRITICAL;
    tmp4 = importDefault;
  }
  let obj = { giftProductContainer: null };
  obj = { borderWidth: 2, borderColor: BORDER_FEEDBACK_CRITICAL, marginHorizontal: tmp4(576).space.PX_16, backgroundColor: "call" };
  obj.giftProductContainer = obj;
  return obj;
});
createStyles = fn(4560);
const obj6 = { profileEffectContainer: null, profileEffect: null };
let size = { position: "relative", width: "100%", height: "100%", borderRadius: nativeDefault.radii.xs, overflow: "hidden" };
obj6.profileEffectContainer = size;
obj6.profileEffect = { position: "absolute", width: "100%", aspectRatio: SAMPLE_PROFILE_ASPECT_RATIO, top: 0 };
let closure_11 = createStyles.createStyles(obj6);
fn(4560);
const obj7 = { nameplate: null };
createStyles = { borderRadius: nativeDefault.radii.xs };
obj7.nameplate = createStyles;
let closure_12 = createStyles.createStyles(obj7);
size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopCheckoutDetails.tsx");

export default function CollectiblesShopCheckoutDetails(recipientUser) {
  const product = recipientUser.product;
  require = product;
  let flag = recipientUser.isValidRecipient;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = recipientUser.useOrbPrice;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = recipientUser.isGift;
  if (flag3 === undefined) {
    flag3 = false;
  }
  const tmp = closure_9();
  let obj = useCurrentUser;
  const currentUser = obj.useCurrentUser();
  let obj1 = flag2(4218);
  const canUseShopDiscountsResult = obj1.canUseShopDiscounts(currentUser);
  dependencyMap = canUseShopDiscountsResult;
  const items = [product, flag2, canUseShopDiscountsResult];
  const items1 = [tmp.productContainer, ];
  let giftProductContainer = flag3;
  const memo = noop.useMemo(() => {
    let obj = getProductName;
    const productNameAndTypeLabel = obj.getProductNameAndTypeLabel(product);
    if (flag2) {
      const intl = util.intl;
      let tmpResult = CollectiblesProductUtils;
      obj = { product, hasShopDiscount };
      const productOrbPrice = tmpResult.getProductOrbPrice(obj);
      let str2;
      if (productOrbPrice != null) {
        str2 = productOrbPrice.amount;
      }
      if (str2 == null) {
        str2 = "";
      }
      obj = { orbAmount: str2 };
      let str = intl.formatToPlainString(util.t.W4DfeF, obj);
    } else {
      tmpResult = collectibles_CollectiblesUtils;
      str = tmpResult.getFormattedPriceForCollectiblesProduct(product, hasShopDiscount, true);
      if (str == null) {
        str = "";
      }
    }
    return "" + productNameAndTypeLabel + ", " + str;
  }, items);
  if (flag3) {
    giftProductContainer = tmp2.giftProductContainer;
  }
  obj = { style: items1, children: null };
  items1[1] = giftProductContainer;
  obj = { style: tmp.productDetailsContainer, accessibilityLabel: memo, accessible: true, children: null };
  const items2 = [closure_7(ProductDetails, { product, recipientUser: recipientUser.recipientUser }), closure_7(ProductPriceAmountTag, { product, hasShopDiscount: canUseShopDiscountsResult, useOrbPrice: flag2 })];
  obj.children = items2;
  const items3 = [closure_8(View, obj), ];
  if (flag3) {
    flag3 = !flag;
  }
  if (flag3) {
    obj1 = { style: tmp.errorContainer, children: null };
    const obj2 = { variant: "text-xs/semibold", color: "text-feedback-critical", children: null };
    let intl = tmp3(1114).intl;
    obj2.children = intl.string(tmp3(1114).t["3YfczA"]);
    obj1.children = closure_7(tmp3(4556).Text, obj2);
    flag3 = closure_7(View, obj1);
  }
  items3[1] = flag3;
  obj.children = items3;
  return closure_8(View, obj);
};