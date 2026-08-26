// discord_app/modules/collectibles/native/CollectiblesShopCardCardDetailsV2.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getPremiumPlanItemDefault from "../../../utils/PremiumUtils.tsx";
import map from "../../../design/tokens/native/useToken.tsx";
import hexToRgba from "../../../utils/ColorUtils.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import LinearGradientDefault from "../../../../_runtime/04891_LinearGradient.js";
import useCurrentUser from "../hooks/useCurrentUser.tsx";
import useCanPurchaseFrames from "../hooks/useCanPurchaseFrames.tsx";
import getCardProductName from "../utils/getProductName.tsx";
import importAllResult from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../../stores/native/IAPStore.android.tsx";
import ME from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
let c3 = importAllResult;
({ CurrencyCodes: closure_6, VerticalGradient: error } = ME);
({ jsx: closure_8, jsxs: c9 } = jsxProd);
let obj = { regularMetadataContainer: null, assetName: null, priceVariantsContainer: null, priceDescription: null, text: null, discountPercentage: null, wheelIcon: null, androidTextPadding: null };
obj = { position: "absolute", height: "45%", width: "100%", padding: 10, flex: 1, bottom: 0, overflow: "hidden", borderBottomLeftRadius: ThemesDefault.radii.sm, borderBottomRightRadius: ThemesDefault.radii.sm, display: "flex", flexDirection: "column", justifyContent: "flex-end" };
obj[0] = obj;
obj[1] = { marginBottom: 4 };
createCacheKey = { display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", gap: ThemesDefault.space.PX_4 };
obj[2] = createCacheKey;
obj[3] = { display: "flex", flexDirection: "row", alignItems: "center", flex: 1 };
obj[4] = { flexShrink: 1 };
obj[5] = { paddingLeft: 3 };
obj[6] = { marginTop: 0, marginRight: 3 };
obj[7] = { paddingBottom: 2 };
let closure_10 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo((arg0) => {
  ({ product, hasShopDiscount } = arg0);
  ({ styles, collectibleProductState } = arg0);
  let selectedProduct;
  let memo;
  let balance;
  ({ discountSource, isFetchingGoogleSkus, preferVCPrice, isDisabled } = arg0);
  let obj = hasShopDiscount(memo[7]);
  const defaultVariantIndex = obj.useDefaultVariantIndex(product);
  obj1 = hasShopDiscount(memo[8]);
  selectedProduct = obj1.getSelectedProduct(product, defaultVariantIndex);
  let obj2 = hasShopDiscount(memo[9]);
  const formattedPriceForCollectiblesProduct = obj2.getFormattedPriceForCollectiblesProduct(selectedProduct, hasShopDiscount, true);
  const items = [selectedProduct, hasShopDiscount];
  memo = balance.useMemo(() => {
    let obj = hasShopDiscount(memo[8]);
    obj = { product: selectedProduct, hasShopDiscount };
    return obj.getProductOrbPrice(obj);
  }, items);
  const items1 = [selectedProduct, hasShopDiscount];
  const memo1 = balance.useMemo(() => hasShopDiscount(memo[10]).getProductDiscount(selectedProduct, hasShopDiscount).discountPercentage, items1);
  const items2 = [selectedProduct, hasShopDiscount];
  const memo2 = balance.useMemo(() => hasShopDiscount(memo[10]).getProductDiscount(selectedProduct, hasShopDiscount, closure_1_6.DISCORD_ORB).discountPercentage, items2);
  let obj3 = hasShopDiscount(memo[11]);
  balance = obj3.useFetchVirtualCurrencyBalance().balance;
  const items3 = [balance, memo];
  const memo3 = balance.useMemo(() => {
    let tmp2 = null;
    if (null != memo) {
      tmp2 = null;
      if (null != balance) {
        tmp2 = tmp.amount <= tmp3;
      }
    }
    return tmp2;
  }, items3);
  if (isFetchingGoogleSkus) {
    if (null == formattedPriceForCollectiblesProduct) {
      return callback(tmp(tmp2[12]).CollectiblesShopPricePlaceholder, {});
    }
  }
  if ("partiallyOwnedBundle" === collectibleProductState) {
    obj = { style: null, children: null };
    obj[0] = styles.priceDescription;
    obj = { variant: "text-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1, style: null, children: null };
    obj[3] = styles.text;
    const intl6 = tmp(tmp2[14]).intl;
    obj[4] = intl6.string(tmp(tmp2[14]).t.BEjTij);
    obj[1] = callback(tmp(tmp2[13]).Text, obj);
    return callback(View, obj);
  } else if ("purchased" === collectibleProductState) {
    obj1 = { style: null, children: null };
    obj1[0] = styles.priceDescription;
    obj2 = { variant: "text-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1, style: null, children: null };
    obj2[3] = styles.text;
    const intl5 = tmp(tmp2[14]).intl;
    obj2[4] = intl5.string(tmp(tmp2[14]).t["6cfuDj"]);
    obj1[1] = callback(tmp(tmp2[13]).Text, obj2);
    return callback(View, obj1);
  } else if ("nitroUpsell" === collectibleProductState) {
    obj3 = { style: null, children: null };
    obj3[0] = styles.priceDescription;
    const obj4 = { variant: "text-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1, style: null, children: null };
    obj4[3] = styles.text;
    const intl4 = tmp(tmp2[14]).intl;
    obj4[4] = intl4.string(tmp(tmp2[14]).t.sEAnVH);
    obj3[1] = callback(tmp(tmp2[13]).Text, obj4);
    return callback(View, obj3);
  } else if ("nitroClaim" === collectibleProductState) {
    const obj5 = { style: null, children: null };
    obj5[0] = styles.priceDescription;
    const obj6 = { variant: "text-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1, style: null, children: null };
    obj6[3] = styles.text;
    const intl3 = tmp(tmp2[14]).intl;
    obj6[4] = intl3.string(tmp(tmp2[14]).t.rt69oo);
    obj5[1] = callback(tmp(tmp2[13]).Text, obj6);
    return callback(View, obj5);
  } else {
    if (isDisabled) {
      const obj7 = { style: null, children: null };
      obj7[0] = styles.priceDescription;
      const obj8 = { variant: "text-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1, style: null, children: null };
      obj8[3] = styles.text;
      const intl2 = tmp(tmp2[14]).intl;
      obj8[4] = intl2.string(tmp(tmp2[14]).t.wu4gyV);
      obj7[1] = callback(tmp(tmp2[13]).Text, obj8);
      let tmp11Result = callback(View, obj7);
    } else {
      if (null != memo) {
        if (null != balance) {
          if (true !== preferVCPrice) {
            if (!memo3) {
              tmp11Result = tmp11(tmp12, obj9);
            }
          }
          const items4 = [styles.priceDescription, ];
          let num = 1;
          if (false === memo3) {
            num = 0.5;
          }
          obj9 = { style: null, children: null };
          const obj10 = { opacity: null };
          obj10[0] = num;
          items4[1] = obj10;
          obj9[0] = items4;
          const obj11 = { size: "xxs", color: "mobile-text-heading-primary", style: null };
          obj11[2] = styles.wheelIcon;
          const items5 = [callback(tmp(tmp2[15]).OrbsIcon, obj11), , ];
          const obj12 = { variant: "text-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1, accessibilityLabel: null, style: null, children: null };
          const intl = tmp(tmp2[14]).intl;
          const obj13 = { orbAmount: null };
          obj13[0] = memo.amount;
          obj12[3] = intl.formatToPlainString(tmp(tmp2[14]).t.W4DfeF, obj13);
          const items6 = [styles.text, ];
          let tmpResult = tmp(tmp2[16]);
          items6[1] = tmpResult.isAndroid() && styles.androidTextPadding;
          obj12[4] = items6;
          obj12[5] = memo.amount;
          items5[1] = callback(tmp(tmp2[13]).Text, obj12);
          let tmp14Result = memo2 >= tmp(tmp2[10]).DISCOUNT_DISPLAY_MINIMUM_THRESHOLD;
          if (tmp14Result) {
            const items7 = [, , ];
            ({ discountPercentage: arr8[0], text: arr8[1] } = styles);
            tmpResult = tmp(tmp2[16]);
            let androidTextPadding;
            if (tmpResult.isAndroid()) {
              androidTextPadding = styles.androidTextPadding;
            }
            const obj14 = { style: null, color: "text-feedback-positive", variant: "text-xs/semibold", lineClamp: 1, children: null };
            items7[2] = androidTextPadding;
            obj14[0] = items7;
            const _HermesInternal = HermesInternal;
            obj14[4] = "-" + memo2 + "%";
            tmp14Result = tmp14(tmp(tmp2[13]).Text, obj14);
          }
          items5[2] = tmp14Result;
          obj9[1] = items5;
          const tmp15 = tmpResult.isAndroid() && styles.androidTextPadding;
        }
      }
      const obj15 = { style: null, children: null };
      obj15[0] = styles.priceDescription;
      if (!hasShopDiscount) {
        const items8 = [hasShopDiscount, , ];
        const items9 = [styles.text, ];
        const tmpResult1 = tmp(tmp2[16]);
        const obj16 = { variant: "text-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1, style: null, children: null };
        items9[1] = tmp(tmp2[16]).isAndroid() && styles.androidTextPadding;
        obj16[3] = items9;
        obj16[4] = formattedPriceForCollectiblesProduct;
        items8[1] = callback(tmp(tmp2[13]).Text, obj16);
        let tmp24Result = memo1 >= tmp(tmp2[10]).DISCOUNT_DISPLAY_MINIMUM_THRESHOLD;
        if (tmp24Result) {
          const items10 = [, , ];
          ({ discountPercentage: arr11[0], text: arr11[1] } = styles);
          let androidTextPadding1;
          if (tmpResult2.isAndroid()) {
            androidTextPadding1 = styles.androidTextPadding;
          }
          const obj17 = { style: null, color: "text-feedback-positive", variant: "text-xs/semibold", lineClamp: 1, children: null };
          items10[2] = androidTextPadding1;
          obj17[0] = items10;
          const _HermesInternal2 = HermesInternal;
          obj17[4] = "-" + memo1 + "%";
          tmp24Result = tmp24(tmp(tmp2[13]).Text, obj17);
          tmpResult2 = tmp(tmp2[16]);
        }
        items8[2] = tmp24Result;
        obj15[1] = items8;
        obj9 = obj15;
        const tmp25 = tmp(tmp2[16]).isAndroid() && styles.androidTextPadding;
      } else if (discountSource === tmp(tmp2[10]).ShopDiscountSource.THIRDPARTY) {
        const obj18 = { size: "xs", color: "mobile-text-heading-primary", style: null };
        obj18[2] = styles.wheelIcon;
        let tmp21 = callback(tmp(tmp2[17]).TagIcon, obj18);
      } else {
        const obj19 = { size: "xs", color: "mobile-text-heading-primary", style: null };
        obj19[2] = styles.wheelIcon;
        tmp21 = callback(tmp(tmp2[18]).NitroWheelIcon, obj19);
      }
    }
    return tmp11Result;
  }
});
const unpackModuleId = memoResult;
memoResult.displayName = "PriceDescription";
const memoResult1 = importAllResult.memo(function CardDetailsV2(arg0) {
  ({ product, hidePrice } = arg0);
  ({ collectibleProductState, preferVCPrice, isDisabled } = arg0);
  const tmp = callback2();
  let obj = useCurrentUser;
  const currentUser = obj.useCurrentUser();
  obj1 = useCanPurchaseFrames;
  let isProfileFramesEarlyAccessPhase = obj1.useIsProfileFramesEarlyAccessPhase("CollectiblesShopCardCardDetailsV2");
  if (isProfileFramesEarlyAccessPhase) {
    let tmp2Result = tmp2(7225);
    const productType = tmp2Result.getProductType(product);
    isProfileFramesEarlyAccessPhase = productType === tmp2(1950).CollectiblesItemType.PROFILE_FRAME;
  }
  let obj3 = getPremiumPlanItemDefault;
  tmp2Result = tmp2(7226);
  const shopDiscountSource = tmp2Result.getShopDiscountSource(currentUser);
  const tmp8 = obj3.canUseShopDiscounts(currentUser) || isProfileFramesEarlyAccessPhase;
  const token = map.useToken(tmp7(712).colors.BACKGROUND_BASE_LOW);
  const tmp2Result1 = map;
  const tmp2Result2 = hexToRgba;
  const tmp2Result3 = hexToRgba;
  const hexToRgbaStringResult = tmp2Result2.hexToRgbaString(hexToRgba.hexWithOpacity(token, 0.9));
  const tmp2Result4 = hexToRgba;
  const tmp2Result5 = hexToRgba;
  const hexToRgbaStringResult1 = tmp2Result4.hexToRgbaString(hexToRgba.hexWithOpacity(token, 0));
  const cardProductName = getCardProductName.getCardProductName(product);
  const tmp2Result6 = getCardProductName;
  const items = [closure_5];
  const stateFromStores = initialize.useStateFromStores(items, () => fetchingGoogleSkus.isFetchingGoogleSkus());
  obj = { style: items1, colors: items2, locations: [0, 0.4, 1], start: constants.START, end: constants.END, children: null };
  items1 = [tmp.regularMetadataContainer];
  items2 = [hexToRgbaStringResult1, hexToRgbaStringResult, token];
  const tmp2Result7 = initialize;
  obj = { style: tmp.assetName, variant: "heading-sm/bold", color: "mobile-text-heading-primary", lineClamp: 1, accessibilityRole: "header", children: cardProductName };
  const items3 = [callback(Text.Text, obj), ];
  let tmp15Result = !hidePrice;
  if (!hidePrice) {
    obj1 = { style: null, children: null };
    obj1[0] = tmp.priceVariantsContainer;
    const obj2 = { product: null, hasShopDiscount: null, discountSource: null, styles: null, collectibleProductState: null, isFetchingGoogleSkus: null, preferVCPrice: null, isDisabled: null };
    obj2[0] = product;
    obj2[1] = tmp8;
    obj2[2] = shopDiscountSource;
    obj2[3] = tmp;
    obj2[4] = collectibleProductState;
    obj2[5] = stateFromStores;
    obj2[6] = preferVCPrice;
    obj2[7] = isDisabled;
    const items4 = [tmp17(closure_11, obj2), ];
    obj3 = { product: null };
    obj3[0] = product;
    items4[1] = tmp17(tmp7(9644), obj3);
    obj1[1] = items4;
    tmp15Result = tmp15(View, obj1);
  }
  items3[1] = tmp15Result;
  obj[5] = items3;
  return closure_9(LinearGradientDefault, obj);
});
const result = require("set").fileFinishedImporting("modules/collectibles/native/CollectiblesShopCardCardDetailsV2.tsx");

export default memoResult1;