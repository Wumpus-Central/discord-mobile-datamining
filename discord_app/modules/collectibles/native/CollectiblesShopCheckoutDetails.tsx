// === Module 11967: ProfileEffectAssetPreview ===

// Module 11967 (ProfileEffectAssetPreview)
import set from "set" /* 679 */;
import ThemesDefault from "Themes" /* 712 */;
import getNameplateData from "getNameplateData" /* 1946 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1949 */;
import Text from "Text" /* 4734 */;
import preloadDefault from "preload" /* 5449 */;
import useMaybeFetchProfileFrameDefault from "useMaybeFetchProfileFrame" /* 8945 */;
import useProfileEffectDefault from "useProfileEffect" /* 8969 */;
import useCurrentUser from "useCurrentUser" /* 9176 */;
import AvatarDecorationSampleV2Default from "AvatarDecorationSampleV2" /* 9218 */;
import NameplateInnerDefault from "NameplateInner" /* 9221 */;
import filterLayerDefault from "filterLayer" /* 9225 */;
import metadataDefault from "metadata" /* 9246 */;
import FRACTIONAL_NITRO_COIN_SIZE from "FRACTIONAL_NITRO_COIN_SIZE" /* 9247 */;
import metadataDefault2 from "metadata" /* 11968 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { EXTERNAL_PRODUCT_SKU_IDS } from "items" /* 678 */;
import SAMPLE_PROFILE_ASPECT_RATIO from "SAMPLE_PROFILE_ASPECT_RATIO" /* 9207 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
function ProfileEffectAssetPreview(item) {
  const tmp = callback5();
  const tmp4 = useProfileEffectDefault(item.item.skuId);
  let tmp5 = null;
  if (null != tmp4) {
    let obj = { style: null, children: null };
    obj[0] = tmp.profileEffectContainer;
    obj = { uri: null };
    obj[0] = metadataDefault2;
    obj[0] = obj;
    obj[1] = tmp4.accessibilityLabel;
    obj[2] = tmp.profileEffect;
    const items = [callback(preloadDefault, obj), ];
    obj1 = { style: null, source: null, alt: null, resizeMode: "cover" };
    obj1[0] = tmp.profileEffect;
    const obj2 = { uri: null };
    obj2[0] = tmp4.thumbnailPreviewSrc;
    obj1[1] = obj2;
    obj1[2] = tmp4.title;
    items[1] = callback(preloadDefault, obj1);
    obj[1] = items;
    tmp5 = callback2(View, obj);
    const tmp2Result = preloadDefault;
  }
  return tmp5;
}
function ProfileFrameAssetPreview(arg0) {
  ({ item, width, height } = arg0);
  const tmp3 = useMaybeFetchProfileFrameDefault(item.skuId, "CollectiblesShopCheckoutDetails");
  let tmp4 = null;
  if (null != tmp3) {
    const obj = { profileFrame: null, previewWidth: null, previewHeight: null, profileBackgroundColor: null };
    obj[0] = tmp3;
    obj[1] = width;
    obj[2] = height;
    obj[3] = ThemesDefault.colors.BACKGROUND_BASE_LOW;
    tmp4 = callback(filterLayerDefault, obj);
    const tmpResult = filterLayerDefault;
  }
  return tmp4;
}
function BundleAssetPreview(height) {
  ({ product, width } = height);
  height = height.height;
  const tmp = callback3();
  dependencyMap = tmp;
  let obj = width(9205);
  const shopProductItems = obj.useShopProductItems(product);
  const bundleWidth = small.small.bundleWidth;
  const result = width / bundleWidth;
  c4 = result;
  let items = [tmp.bundlePreviewContainer, width, height];
  ({ firstProfileEffect, firstAvatarDecoration, firstNameplate } = shopProductItems);
  let items1 = [tmp.bundlePreviewScale, bundleWidth, result];
  const memo = bundleWidth.useMemo(() => {
    const items = [closure_2.bundlePreviewContainer, { width, height }];
    return items;
  }, items);
  const items2 = [width, height];
  const memo1 = bundleWidth.useMemo(() => {
    const items = [closure_2.bundlePreviewScale, ];
    const obj = { scale: c4 };
    const items1 = [obj];
    items[1] = obj;
    return items;
  }, items1);
  obj = { style: memo1, children: null };
  const memo2 = bundleWidth.useMemo(() => ({ width, height }), items2);
  obj[1] = callback(height(9206), { deco: firstAvatarDecoration, pfx: firstProfileEffect, nameplate: firstNameplate, previewAssets: product.previewAssets, disableStaticBackground: true, size: "small", targetSize: memo2 });
  obj[1] = callback(c4, obj);
  return callback(c4, obj);
}
function NameplateAssetPreview(item) {
  let obj = getNameplateData;
  const nameplateData = obj.getNameplateData(item.item);
  obj = { nameplate: nameplateData, fullOpacity: true, isSquarePreview: true, style: callback6().nameplate };
  return callback(NameplateInnerDefault, obj);
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
  const tmp = callback3();
  const items = [tmp.productPreviewContainer, { height: 55, width: num }];
  return callback(View, { style: items, children: callback(CollectibleProductPreviewContent, { product, width: num, height: 55, userAvatarSource: avatarSource }) });
}
function CollectibleProductPreviewContent(userAvatarSource) {
  ({ product, width, height } = userAvatarSource);
  const ALL = set.FractionalPremiumSKUsSets.ALL;
  if (ALL.has(product.skuId)) {
    let obj = { skuId: null, width: null, height: null };
    obj[0] = product.skuId;
    obj[1] = FRACTIONAL_NITRO_COIN_SIZE.FRACTIONAL_NITRO_COIN_SIZE.CHECKOUT;
    obj[2] = FRACTIONAL_NITRO_COIN_SIZE.FRACTIONAL_NITRO_COIN_SIZE.CHECKOUT;
    return callback(FRACTIONAL_NITRO_COIN_SIZE.FractionalNitroCoinIllustration, obj);
  } else if (product.skuId === EXTERNAL_PRODUCT_SKU_IDS.ORB_PROFILE_BADGE) {
    obj = { source: null, style: null };
    obj1 = { uri: null };
    obj1[0] = metadataDefault;
    obj[0] = obj1;
    obj[1] = tmp.externalProductImage;
    return callback(preloadDefault, obj);
  } else {
    const type = product.type;
    if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
      const obj2 = { item: null, size: null, avatarSource: null, animate: false };
      obj2[0] = product.items[0];
      obj2[1] = width;
      obj2[2] = userAvatarSource.userAvatarSource;
      return callback(AvatarDecorationSampleV2Default, obj2);
    } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT === type) {
      const obj3 = { item: null };
      obj3[0] = product.items[0];
      return callback(ProfileEffectAssetPreview, obj3);
    } else if (CollectiblesItemType.CollectiblesItemType.NAMEPLATE === type) {
      const obj4 = { item: null };
      obj4[0] = product.items[0];
      return callback(NameplateAssetPreview, obj4);
    } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME === type) {
      const obj5 = { item: null, width: null, height: null };
      obj5[0] = product.items[0];
      obj5[1] = width;
      obj5[2] = height;
      return callback(ProfileFrameAssetPreview, obj5);
    } else if (CollectiblesItemType.CollectiblesItemType.BUNDLE === type) {
      obj = { product: null, width: null, height: null };
      obj[0] = product;
      obj[1] = width;
      obj[2] = height;
      return callback(BundleAssetPreview, obj);
    } else {
      return null;
    }
  }
  tmp = callback3();
}
function ProductDetails(product) {
  product = product.product;
  require = product;
  const tmp = callback3();
  const items = [, ];
  ({ type: arr[0], skuId: arr[1] } = product);
  const memo = React.useMemo(() => {
    const ALL = product(dependencyMap[17]).FractionalPremiumSKUsSets.ALL;
    if (ALL.has(product.skuId)) {
      const intl7 = product(dependencyMap[21]).intl;
      return intl7.string(product(dependencyMap[21]).t.DFMPWS);
    } else if (product.skuId === EXTERNAL_PRODUCT_SKU_IDS.ORB_PROFILE_BADGE) {
      const intl6 = product(dependencyMap[21]).intl;
      return intl6.string(product(dependencyMap[21]).t["0+rBWT"]);
    } else {
      const type = product.type;
      if (product(dependencyMap[16]).CollectiblesItemType.AVATAR_DECORATION === type) {
        const intl5 = product(dependencyMap[21]).intl;
        return intl5.string(product(dependencyMap[21]).t["7v0T9P"]);
      } else if (product(dependencyMap[16]).CollectiblesItemType.PROFILE_EFFECT === type) {
        const intl4 = product(dependencyMap[21]).intl;
        return intl4.string(product(dependencyMap[21]).t.wR5wOo);
      } else if (product(dependencyMap[16]).CollectiblesItemType.NAMEPLATE === type) {
        const intl3 = product(dependencyMap[21]).intl;
        return intl3.string(product(dependencyMap[21]).t.x5CoXR);
      } else if (product(dependencyMap[16]).CollectiblesItemType.PROFILE_FRAME === type) {
        const intl2 = product(dependencyMap[21]).intl;
        return intl2.string(product(dependencyMap[21]).t.GWrZOd);
      } else if (product(dependencyMap[16]).CollectiblesItemType.BUNDLE === type) {
        const intl = product(dependencyMap[21]).intl;
        return intl.string(product(dependencyMap[21]).t.Zr5tjn);
      } else {
        return null;
      }
    }
  }, items);
  if (null == memo) {
    let obj = { style: null, children: null };
    obj[0] = tmp.productDetails;
    obj = { variant: "text-md/semibold", children: null };
    obj[1] = product.name;
    obj[1] = callback(Text.Text, obj);
    let tmp7 = callback(View, obj);
  } else {
    obj = { style: null, children: null };
    obj[0] = tmp.productDetails;
    obj1 = { product: null, recipientUser: null };
    obj1[0] = product;
    obj1[1] = product.recipientUser;
    const items1 = [callback(CollectibleProductPreview, obj1), ];
    const obj2 = { style: null, children: null };
    obj2[0] = tmp.productDetailsTextContainer;
    const obj3 = { variant: "text-md/semibold", children: null };
    obj3[1] = product.name;
    const items2 = [callback(Text.Text, obj3), ];
    const obj4 = { variant: "text-sm/medium", children: null };
    obj4[1] = memo;
    items2[1] = callback(Text.Text, obj4);
    obj2[1] = items2;
    items1[1] = callback2(View, obj2);
    obj[1] = items1;
    tmp7 = callback2(View, obj);
  }
  return tmp7;
}
function ProductPriceAmountTag(product) {
  product = product.product;
  require = product;
  const hasShopDiscount = product.hasShopDiscount;
  const useOrbPrice = product.useOrbPrice;
  const items = [product, hasShopDiscount, useOrbPrice];
  const memo = React.useMemo(() => {
    if (useOrbPrice) {
      let tmpResult = product(useOrbPrice[23]);
      const obj = { product: null, hasShopDiscount: null };
      obj[0] = closure_0;
      obj[1] = hasShopDiscount;
      const orbPrice = tmpResult.getProductOrbPrice(obj);
    } else {
      tmpResult = product(useOrbPrice[24]);
      const priceText = tmpResult.getFormattedPriceForCollectiblesProduct(closure_0, hasShopDiscount, true);
    }
    return { orbPrice, priceText };
  }, items);
  let orbPrice = memo.orbPrice;
  if (useOrbPrice) {
    let amount;
    if (orbPrice != null) {
      amount = orbPrice.amount;
    }
    let obj = { orbAmount: null };
    obj[0] = amount;
    let tmp3Result = callback(hasShopDiscount(useOrbPrice[25]), obj);
    const tmp9 = hasShopDiscount(useOrbPrice[25]);
  } else {
    obj = { variant: "text-md/semibold", children: null };
    obj[1] = tmp2;
    tmp3Result = callback(require(useOrbPrice[22]).Text, obj);
  }
  return tmp3Result;
}
({ BUNDLE_PREVIEW_CONFIG: closure_6, SAMPLE_PROFILE_ASPECT_RATIO } = SAMPLE_PROFILE_ASPECT_RATIO);
({ jsx: error, jsxs: closure_8 } = jsxProd);
let createCacheKey = { alignItems: "center", justifyContent: "center", overflow: "hidden", borderRadius: ThemesDefault.radii.xs };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { overflow: "hidden", alignItems: "center", justifyContent: "center" };
createCacheKey[3] = { borderRadius: ThemesDefault.radii.lg, flexDirection: "column", backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE };
createCacheKey[4] = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: ThemesDefault.space.PX_16, paddingVertical: ThemesDefault.space.PX_16 };
createCacheKey[5] = { justifyContent: "center", alignItems: "center" };
createCacheKey[6] = { display: "flex", flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_12 };
createCacheKey[7] = { gap: ThemesDefault.space.PX_4 };
createCacheKey[8] = { height: 36, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, justifyContent: "center", paddingHorizontal: ThemesDefault.space.PX_16, borderBottomLeftRadius: ThemesDefault.radii.lg, borderBottomRightRadius: ThemesDefault.radii.lg };
let closure_9 = createCacheKey.createStyles(createCacheKey);
let closure_10 = createCacheKey.createStyles((arg0) => {
  const colors = ThemesDefault.colors;
  if (arg0) {
    let BORDER_FEEDBACK_CRITICAL = colors.BACKGROUND_BRAND;
    let tmp4 = importDefault;
  } else {
    BORDER_FEEDBACK_CRITICAL = colors.BORDER_FEEDBACK_CRITICAL;
    tmp4 = importDefault;
  }
  const obj = { borderWidth: 2, borderColor: BORDER_FEEDBACK_CRITICAL, marginHorizontal: tmp4(712).space.PX_16, backgroundColor: "accessibilityRole" };
  obj[0] = obj;
  return obj;
});
const obj6 = { profileEffectContainer: null, profileEffect: null };
obj6[0] = { position: "relative", width: "100%", height: "100%", borderRadius: ThemesDefault.radii.xs, overflow: "hidden" };
obj6[1] = { position: "absolute", width: "100%", aspectRatio: SAMPLE_PROFILE_ASPECT_RATIO, top: 0 };
let closure_11 = createCacheKey.createStyles(obj6);
createCacheKey = { borderRadius: ThemesDefault.radii.xs };
createCacheKey[0] = createCacheKey;
let closure_12 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("modules/collectibles/native/CollectiblesShopCheckoutDetails.tsx");

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
  const tmp = callback3();
  let obj = useCurrentUser;
  const currentUser = obj.useCurrentUser();
  obj1 = flag2(4039);
  const canUseShopDiscountsResult = obj1.canUseShopDiscounts(currentUser);
  dependencyMap = canUseShopDiscountsResult;
  const items = [product, flag2, canUseShopDiscountsResult];
  const items1 = [tmp.productContainer, ];
  let giftProductContainer = flag3;
  const memo = React.useMemo(() => {
    let obj = product(_undefined[28]);
    const productNameAndTypeLabel = obj.getProductNameAndTypeLabel(closure_0);
    if (flag2) {
      const intl = product(_undefined[21]).intl;
      let tmpResult = product(_undefined[23]);
      obj = { product: null, hasShopDiscount: null };
      obj[0] = closure_0;
      obj[1] = _undefined;
      const productOrbPrice = tmpResult.getProductOrbPrice(obj);
      let str2;
      if (productOrbPrice != null) {
        str2 = productOrbPrice.amount;
      }
      if (str2 == null) {
        str2 = "";
      }
      obj = { orbAmount: null };
      obj[0] = str2;
      let str = intl.formatToPlainString(product(_undefined[21]).t.W4DfeF, obj);
    } else {
      tmpResult = product(_undefined[24]);
      str = tmpResult.getFormattedPriceForCollectiblesProduct(closure_0, _undefined, true);
      if (str == null) {
        str = "";
      }
    }
    return "" + productNameAndTypeLabel + ", " + str;
  }, items);
  if (flag3) {
    giftProductContainer = tmp2.giftProductContainer;
  }
  items1[1] = giftProductContainer;
  obj = { style: tmp.productDetailsContainer, accessibilityLabel: memo, accessible: true, children: null };
  const items2 = [callback(ProductDetails, { product, recipientUser: recipientUser.recipientUser }), callback(ProductPriceAmountTag, { product, hasShopDiscount: canUseShopDiscountsResult, useOrbPrice: flag2 })];
  obj[3] = items2;
  const items3 = [callback2(View, obj), ];
  if (flag3) {
    flag3 = !flag;
  }
  if (flag3) {
    obj1 = { style: null, children: null };
    obj1[0] = tmp.errorContainer;
    const obj2 = { variant: "text-xs/semibold", color: "text-feedback-critical", children: null };
    let intl = tmp3(1236).intl;
    obj2[2] = intl.string(tmp3(1236).t["3YfczA"]);
    obj1[1] = callback(tmp3(4734).Text, obj2);
    flag3 = callback(View, obj1);
  }
  items3[1] = flag3;
  obj[1] = items3;
  return callback2(View, obj);
};