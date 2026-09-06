// === Module 8847: CollectiblesShopCardCardDetailsV2 ===

// Module 8847 (CollectiblesShopCardCardDetailsV2)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4218 */;
import useToken from "useToken" /* 4262 */;
import ColorUtils from "ColorUtils" /* 4409 */;
import Text_Text from "Text/Text" /* 4556 */;
import LinearGradientDefault from "LinearGradient" /* 4987 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7553 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7554 */;
import useCurrentUser from "useCurrentUser" /* 8178 */;
import useCanPurchaseFrames from "useCanPurchaseFrames" /* 8830 */;
import getProductName from "getProductName" /* 8864 */;
import noop from "module_19" /* 19 */;
import IAPStore from "IAPStore" /* 7237 */;

require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ CurrencyCodes: metroRequire, VerticalGradient: closure_7 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4560);
let obj = { regularMetadataContainer: null, assetName: null, priceVariantsContainer: null, priceDescription: null, text: null, discountPercentage: null, wheelIcon: null, androidTextPadding: null };
let size = { position: "absolute", height: "45%", width: "100%", padding: 10, flex: 1, bottom: 0, overflow: "hidden", borderBottomLeftRadius: nativeDefault.radii.sm, borderBottomRightRadius: nativeDefault.radii.sm, display: "flex", flexDirection: "column", justifyContent: "flex-end" };
obj.regularMetadataContainer = size;
obj.assetName = { marginBottom: 4 };
obj = { display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", gap: nativeDefault.space.PX_4 };
obj.priceVariantsContainer = obj;
obj.priceDescription = { display: "flex", flexDirection: "row", alignItems: "center", flex: 1 };
obj.text = { flexShrink: 1 };
obj.discountPercentage = { paddingLeft: 3 };
obj.wheelIcon = { marginTop: 0, marginRight: 3 };
obj.androidTextPadding = { paddingBottom: 2 };
let closure_10 = createStyles.createStyles(obj);
const memoResult = noop.memo((arg0) => {
  ({ product, hasShopDiscount } = arg0);
  ({ styles, collectibleProductState } = arg0);
  let memo;
  let balance;
  ({ discountSource, isFetchingGoogleSkus, preferVCPrice, isDisabled } = arg0);
  let obj = hasShopDiscount(memo[7]);
  const defaultVariantIndex = obj.useDefaultVariantIndex(product);
  let obj1 = hasShopDiscount(memo[8]);
  const selectedProduct = obj1.getSelectedProduct(product, defaultVariantIndex);
  let obj2 = hasShopDiscount(memo[9]);
  const formattedPriceForCollectiblesProduct = obj2.getFormattedPriceForCollectiblesProduct(selectedProduct, hasShopDiscount, true);
  const items = [selectedProduct, hasShopDiscount];
  memo = balance.useMemo(() => {
    const obj = { product: selectedProduct, hasShopDiscount };
    return obj.getProductOrbPrice(obj);
  }, items);
  const items1 = [selectedProduct, hasShopDiscount];
  const memo1 = balance.useMemo(() => CollectiblesUtils.getProductDiscount(selectedProduct, hasShopDiscount).discountPercentage, items1);
  const items2 = [selectedProduct, hasShopDiscount];
  const memo2 = balance.useMemo(() => CollectiblesUtils.getProductDiscount(selectedProduct, hasShopDiscount, constants.DISCORD_ORB).discountPercentage, items2);
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
      return closure_8(tmp(tmp2[12]).CollectiblesShopPricePlaceholder, {});
    }
  }
  if ("partiallyOwnedBundle" === collectibleProductState) {
    obj = { style: styles.priceDescription, children: null };
    obj = { variant: "text-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1, style: styles.text, children: null };
    const intl6 = tmp(tmp2[14]).intl;
    obj.children = intl6.string(tmp(tmp2[14]).t.BEjTij);
    obj.children = closure_8(tmp(tmp2[13]).Text, obj);
    return closure_8(View, obj);
  } else if ("purchased" === collectibleProductState) {
    obj1 = { style: styles.priceDescription, children: null };
    obj2 = { variant: "text-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1, style: styles.text, children: null };
    const intl5 = tmp(tmp2[14]).intl;
    obj2.children = intl5.string(tmp(tmp2[14]).t["6cfuDj"]);
    obj1.children = closure_8(tmp(tmp2[13]).Text, obj2);
    return closure_8(View, obj1);
  } else if ("nitroUpsell" === collectibleProductState) {
    obj3 = { style: styles.priceDescription, children: null };
    const obj4 = { variant: "text-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1, style: styles.text, children: null };
    const intl4 = tmp(tmp2[14]).intl;
    obj4.children = intl4.string(tmp(tmp2[14]).t.sEAnVH);
    obj3.children = closure_8(tmp(tmp2[13]).Text, obj4);
    return closure_8(View, obj3);
  } else if ("nitroClaim" === collectibleProductState) {
    const obj5 = { style: styles.priceDescription, children: null };
    const obj6 = { variant: "text-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1, style: styles.text, children: null };
    const intl3 = tmp(tmp2[14]).intl;
    obj6.children = intl3.string(tmp(tmp2[14]).t.rt69oo);
    obj5.children = closure_8(tmp(tmp2[13]).Text, obj6);
    return closure_8(View, obj5);
  } else {
    if (isDisabled) {
      const obj7 = { style: styles.priceDescription, children: null };
      const obj8 = { variant: "text-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1, style: styles.text, children: null };
      const intl2 = tmp(tmp2[14]).intl;
      obj8.children = intl2.string(tmp(tmp2[14]).t.wu4gyV);
      obj7.children = closure_8(tmp(tmp2[13]).Text, obj8);
      let tmp11Result = closure_8(View, obj7);
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
          const obj10 = { opacity: num };
          items4[1] = obj10;
          obj9.style = items4;
          const obj11 = { size: "xxs", color: "mobile-text-heading-primary", style: styles.wheelIcon };
          const items5 = [closure_8(tmp(tmp2[15]).OrbsIcon, obj11), , ];
          const obj12 = { variant: "text-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1, accessibilityLabel: null, style: null, children: null };
          const intl = tmp(tmp2[14]).intl;
          const obj13 = { orbAmount: memo.amount };
          obj12.accessibilityLabel = intl.formatToPlainString(tmp(tmp2[14]).t.W4DfeF, obj13);
          const items6 = [styles.text, ];
          let tmpResult = tmp(tmp2[16]);
          items6[1] = tmpResult.isAndroid() && styles.androidTextPadding;
          obj12.style = items6;
          obj12.children = memo.amount;
          items5[1] = closure_8(tmp(tmp2[13]).Text, obj12);
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
            obj14.style = items7;
            const _HermesInternal = HermesInternal;
            obj14.children = "-" + memo2 + "%";
            tmp14Result = tmp14(tmp(tmp2[13]).Text, obj14);
          }
          items5[2] = tmp14Result;
          obj9.children = items5;
          const tmp15 = tmpResult.isAndroid() && styles.androidTextPadding;
        }
      }
      const obj15 = { style: styles.priceDescription, children: null };
      if (!hasShopDiscount) {
        const items8 = [hasShopDiscount, , ];
        const items9 = [styles.text, ];
        const tmpResult1 = tmp(tmp2[16]);
        const obj16 = { variant: "text-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1, style: null, children: null };
        items9[1] = tmp(tmp2[16]).isAndroid() && styles.androidTextPadding;
        obj16.style = items9;
        obj16.children = formattedPriceForCollectiblesProduct;
        items8[1] = closure_8(tmp(tmp2[13]).Text, obj16);
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
          obj17.style = items10;
          const _HermesInternal2 = HermesInternal;
          obj17.children = "-" + memo1 + "%";
          tmp24Result = tmp24(tmp(tmp2[13]).Text, obj17);
          tmpResult2 = tmp(tmp2[16]);
        }
        items8[2] = tmp24Result;
        obj15.children = items8;
        obj9 = obj15;
        const tmp25 = tmp(tmp2[16]).isAndroid() && styles.androidTextPadding;
      } else if (discountSource === tmp(tmp2[10]).ShopDiscountSource.THIRDPARTY) {
        const obj18 = { size: "xs", color: "mobile-text-heading-primary", style: styles.wheelIcon };
        let tmp21 = closure_8(tmp(tmp2[17]).TagIcon, obj18);
      } else {
        const obj19 = { size: "xs", color: "mobile-text-heading-primary", style: styles.wheelIcon };
        tmp21 = closure_8(tmp(tmp2[18]).NitroWheelIcon, obj19);
      }
    }
    return tmp11Result;
  }
});
memoResult.displayName = "PriceDescription";
size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopCardCardDetailsV2.tsx");

export default noop.memo(function CardDetailsV2(arg0) {
  ({ product, hidePrice } = arg0);
  ({ collectibleProductState, preferVCPrice, isDisabled } = arg0);
  const tmp = closure_10();
  let obj = useCurrentUser;
  const currentUser = obj.useCurrentUser();
  let obj1 = useCanPurchaseFrames;
  let isProfileFramesEarlyAccessPhase = obj1.useIsProfileFramesEarlyAccessPhase("CollectiblesShopCardCardDetailsV2");
  if (isProfileFramesEarlyAccessPhase) {
    let tmp2Result = tmp2(7553);
    const productType = tmp2Result.getProductType(product);
    isProfileFramesEarlyAccessPhase = productType === tmp2(1889).CollectiblesItemType.PROFILE_FRAME;
  }
  let obj3 = PremiumUtilsDefault;
  tmp2Result = tmp2(7554);
  const shopDiscountSource = tmp2Result.getShopDiscountSource(currentUser);
  const tmp8 = obj3.canUseShopDiscounts(currentUser) || isProfileFramesEarlyAccessPhase;
  const token = useToken.useToken(tmp7(576).colors.BACKGROUND_BASE_LOW);
  const tmp2Result1 = useToken;
  const tmp2Result2 = ColorUtils;
  const tmp2Result3 = ColorUtils;
  const hexToRgbaStringResult = tmp2Result2.hexToRgbaString(ColorUtils.hexWithOpacity(token, 0.9));
  const tmp2Result4 = ColorUtils;
  const tmp2Result5 = ColorUtils;
  const hexToRgbaStringResult1 = tmp2Result4.hexToRgbaString(ColorUtils.hexWithOpacity(token, 0));
  const cardProductName = getProductName.getCardProductName(product);
  const tmp2Result6 = getProductName;
  const items = [IAPStore];
  const stateFromStores = initialize.useStateFromStores(items, () => fetchingGoogleSkus.isFetchingGoogleSkus());
  obj = { style: null, colors: null, locations: [0, 0.4, 1], start: constants2.START, end: constants2.END, children: null };
  const items1 = [tmp.regularMetadataContainer];
  obj.style = items1;
  const items2 = [hexToRgbaStringResult1, hexToRgbaStringResult, token];
  obj.colors = items2;
  const tmp2Result7 = initialize;
  obj = { style: tmp.assetName, variant: "heading-sm/bold", color: "mobile-text-heading-primary", lineClamp: 1, accessibilityRole: "header", children: cardProductName };
  const items3 = [React6(Text_Text.Text, obj), ];
  let tmp15Result = !hidePrice;
  if (!hidePrice) {
    obj1 = { style: tmp.priceVariantsContainer, children: null };
    const obj2 = { product, hasShopDiscount: tmp8, discountSource: shopDiscountSource, styles: tmp, collectibleProductState, isFetchingGoogleSkus: stateFromStores, preferVCPrice, isDisabled };
    const items4 = [tmp17(memoResult, obj2), ];
    obj3 = { product };
    items4[1] = tmp17(tmp7(8865), obj3);
    obj1.children = items4;
    tmp15Result = tmp15(View, obj1);
  }
  items3[1] = tmp15Result;
  obj.children = items3;
  return React7(LinearGradientDefault, obj);
});