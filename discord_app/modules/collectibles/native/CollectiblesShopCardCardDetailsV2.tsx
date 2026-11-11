// discord_app/modules/collectibles/native/CollectiblesShopCardCardDetailsV2.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import PremiumUtilsDefault from "../../../utils/PremiumUtils.tsx";
import LinearGradientDefault from "../../../../_runtime/05830_LinearGradient.js";
import CollectiblesUtils from "../CollectiblesUtils.tsx";
import CollectiblesShopCardVariantsDefault from "CollectiblesShopCardVariants.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import IAPStore from "../../../stores/native/IAPStore.android.tsx";

require = fn;
const View = fn(17).View;
const Constants = fn(1072);
({ CurrencyCodes: closure_6, VerticalGradient: metroImportDefault } = Constants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5243);
let obj = {
  regularMetadataContainer: null,
  assetName: null,
  priceVariantsContainer: null,
  priceDescription: null,
  text: null,
  discountPercentage: null,
  wheelIcon: null,
  androidTextPadding: null,
};
let size = {
  position: "absolute",
  height: "45%",
  width: "100%",
  padding: 10,
  flex: 1,
  bottom: 0,
  overflow: "hidden",
  borderBottomLeftRadius: nativeDefault.radii.sm,
  borderBottomRightRadius: nativeDefault.radii.sm,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
};
obj.regularMetadataContainer = size;
obj.assetName = { marginBottom: 4 };
obj.priceVariantsContainer = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  gap: nativeDefault.space.PX_4,
};
obj.priceDescription = { display: "flex", flexDirection: "row", alignItems: "center", flex: 1 };
obj.text = { flexShrink: 1 };
obj.discountPercentage = { paddingLeft: 3 };
obj.wheelIcon = { marginTop: 0, marginRight: 3 };
obj.androidTextPadding = { paddingBottom: 2 };
let closure_10 = createStyles.createStyles(obj);
const memoResult = noop.memo((arg0) => {
  ({ product, hasShopDiscount } = arg0);
  ({ styles, collectibleProductState } = arg0);
  ({ discountSource, isFetchingGoogleSkus, preferVCPrice, isDisabled } = arg0);
  const defaultVariantIndex = hasShopDiscount(10350).useDefaultVariantIndex(product);
  const obj = hasShopDiscount(10350);
  const selectedProduct = hasShopDiscount(8430).getSelectedProduct(product, defaultVariantIndex);
  const obj2 = hasShopDiscount(8430);
  const formattedPriceForCollectiblesProduct = hasShopDiscount(10366).getFormattedPriceForCollectiblesProduct(
    selectedProduct,
    hasShopDiscount,
    true,
  );
  const obj3 = hasShopDiscount(10366);
  const isFiatExclusiveTargetedOfferPromotion =
    hasShopDiscount(10368).useIsFiatExclusiveTargetedOfferPromotion(selectedProduct);
  const obj4 = hasShopDiscount(10368);
  const virtualCurrencyData = hasShopDiscount(10369).useVirtualCurrencyData(selectedProduct, hasShopDiscount);
  ({ price, canAfford } = virtualCurrencyData);
  items = [selectedProduct, hasShopDiscount];
  const memo = noop.useMemo(
    () => CollectiblesUtils.getProductDiscount(selectedProduct, hasShopDiscount).discountPercentage,
    items,
  );
  const items1 = [selectedProduct, hasShopDiscount];
  const memo1 = noop.useMemo(
    () =>
      CollectiblesUtils.getProductDiscount(selectedProduct, hasShopDiscount, constants.DISCORD_ORB).discountPercentage,
    items1,
  );
  if (isFetchingGoogleSkus) {
    if (null == formattedPriceForCollectiblesProduct) {
      return closure_8(hasShopDiscount(10377).CollectiblesShopPricePlaceholder, {});
    }
  }
  if ("partiallyOwnedBundle" === collectibleProductState) {
    const obj6 = { style: styles.priceDescription, children: null };
    const obj7 = {
      variant: "body-xs/semibold",
      color: "mobile-text-heading-primary",
      lineClamp: 1,
      style: styles.text,
      children: null,
    };
    const intl6 = hasShopDiscount(1113).intl;
    obj7.children = intl6.string(hasShopDiscount(1113).t.BEjTij);
    obj6.children = closure_8(hasShopDiscount(5866).Text, obj7);
    return closure_8(View, obj6);
  } else if ("purchased" === collectibleProductState) {
    const obj8 = { style: styles.priceDescription, children: null };
    const obj9 = {
      variant: "body-xs/semibold",
      color: "mobile-text-heading-primary",
      lineClamp: 1,
      style: styles.text,
      children: null,
    };
    const intl5 = hasShopDiscount(1113).intl;
    obj9.children = intl5.string(hasShopDiscount(1113).t["6cfuDj"]);
    obj8.children = closure_8(hasShopDiscount(5866).Text, obj9);
    return closure_8(View, obj8);
  } else if ("nitroUpsell" === collectibleProductState) {
    const obj10 = { style: styles.priceDescription, children: null };
    const obj11 = {
      variant: "body-xs/semibold",
      color: "mobile-text-heading-primary",
      lineClamp: 1,
      style: styles.text,
      children: null,
    };
    const intl4 = hasShopDiscount(1113).intl;
    obj11.children = intl4.string(hasShopDiscount(1113).t.sEAnVH);
    obj10.children = closure_8(hasShopDiscount(5866).Text, obj11);
    return closure_8(View, obj10);
  } else if ("nitroClaim" === collectibleProductState) {
    const obj12 = { style: styles.priceDescription, children: null };
    const obj13 = {
      variant: "body-xs/semibold",
      color: "mobile-text-heading-primary",
      lineClamp: 1,
      style: styles.text,
      children: null,
    };
    const intl3 = hasShopDiscount(1113).intl;
    obj13.children = intl3.string(hasShopDiscount(1113).t.rt69oo);
    obj12.children = closure_8(hasShopDiscount(5866).Text, obj13);
    return closure_8(View, obj12);
  } else {
    if (isDisabled) {
      const obj14 = { style: styles.priceDescription, children: null };
      const obj15 = {
        variant: "body-xs/semibold",
        color: "mobile-text-heading-primary",
        lineClamp: 1,
        style: styles.text,
        children: null,
      };
      const intl2 = hasShopDiscount(1113).intl;
      obj15.children = intl2.string(hasShopDiscount(1113).t.wu4gyV);
      obj14.children = closure_8(hasShopDiscount(5866).Text, obj15);
      let tmp11Result = closure_8(View, obj14);
    } else {
      if (null != price) {
        if (null != virtualCurrencyData.balance) {
          if (true !== preferVCPrice) {
            if (true !== canAfford) {
              tmp11Result = tmp11(tmp12, obj16);
            }
          }
          const items2 = [styles.priceDescription];
          let num = 1;
          if (false === canAfford) {
            num = 0.5;
          }
          obj16 = { style: null, children: null };
          const obj17 = { opacity: num };
          items2[1] = obj17;
          obj16.style = items2;
          const obj18 = { size: "xxs", color: "mobile-text-heading-primary", style: styles.wheelIcon };
          const items3 = [closure_8(hasShopDiscount(9375).OrbsIcon, obj18), ,];
          const obj19 = {
            variant: "body-xs/semibold",
            color: "mobile-text-heading-primary",
            lineClamp: 1,
            accessibilityLabel: null,
            style: null,
            children: null,
          };
          const intl = hasShopDiscount(1113).intl;
          const obj20 = { orbAmount: price.amount };
          obj19.accessibilityLabel = intl.formatToPlainString(hasShopDiscount(1113).t.W4DfeF, obj20);
          const items4 = [styles.text];
          const tmpResult = hasShopDiscount(1377);
          items4[1] = hasShopDiscount(1377).isAndroid() && styles.androidTextPadding;
          obj19.style = items4;
          obj19.children = price.amount;
          items3[1] = closure_8(hasShopDiscount(5866).Text, obj19);
          let tmp14Result = memo1 >= hasShopDiscount(8431).DISCOUNT_DISPLAY_MINIMUM_THRESHOLD;
          if (tmp14Result) {
            const items5 = [, ,];
            ({ discountPercentage: arr6[0], text: arr6[1] } = styles);
            let androidTextPadding;
            if (tmpResult4.isAndroid()) {
              androidTextPadding = styles.androidTextPadding;
            }
            const obj21 = {
              style: null,
              color: "text-feedback-positive",
              variant: "body-xs/semibold",
              lineClamp: 1,
              children: null,
            };
            items5[2] = androidTextPadding;
            obj21.style = items5;
            const _HermesInternal = HermesInternal;
            obj21.children = "-" + memo1 + "%";
            tmp14Result = closure_8(hasShopDiscount(5866).Text, obj21);
            tmpResult4 = hasShopDiscount(1377);
          }
          items3[2] = tmp14Result;
          obj16.children = items3;
          const tmp15 = hasShopDiscount(1377).isAndroid() && styles.androidTextPadding;
        }
      }
      const obj22 = { style: styles.priceDescription, children: null };
      if (!hasShopDiscount) {
        const items6 = [hasShopDiscount, ,];
        const items7 = [styles.text];
        const tmpResult5 = hasShopDiscount(1377);
        const obj23 = {
          variant: "body-xs/semibold",
          color: "mobile-text-heading-primary",
          lineClamp: 1,
          style: null,
          children: null,
        };
        items7[1] = hasShopDiscount(1377).isAndroid() && styles.androidTextPadding;
        obj23.style = items7;
        obj23.children = formattedPriceForCollectiblesProduct;
        items6[1] = closure_8(hasShopDiscount(5866).Text, obj23);
        let tmp24Result = memo >= hasShopDiscount(8431).DISCOUNT_DISPLAY_MINIMUM_THRESHOLD;
        if (tmp24Result) {
          const items8 = [, ,];
          ({ discountPercentage: arr9[0], text: arr9[1] } = styles);
          let androidTextPadding1;
          if (tmpResult6.isAndroid()) {
            androidTextPadding1 = styles.androidTextPadding;
          }
          const obj24 = {
            style: null,
            color: "text-feedback-positive",
            variant: "body-xs/semibold",
            lineClamp: 1,
            children: null,
          };
          items8[2] = androidTextPadding1;
          obj24.style = items8;
          const _HermesInternal2 = HermesInternal;
          obj24.children = "-" + memo + "%";
          tmp24Result = closure_8(hasShopDiscount(5866).Text, obj24);
          tmpResult6 = hasShopDiscount(1377);
        }
        items6[2] = tmp24Result;
        obj22.children = items6;
        obj16 = obj22;
        const tmp25 = hasShopDiscount(1377).isAndroid() && styles.androidTextPadding;
      } else if (discountSource === hasShopDiscount(8431).ShopDiscountSource.THIRDPARTY) {
        const obj25 = { size: "xs", color: "mobile-text-heading-primary", style: styles.wheelIcon };
        let tmp21 = closure_8(hasShopDiscount(9455).TagIcon, obj25);
      } else {
        const obj26 = { size: "xs", color: "mobile-text-heading-primary", style: styles.wheelIcon };
        tmp21 = closure_8(hasShopDiscount(9369).NitroWheelIcon, obj26);
      }
    }
    return tmp11Result;
  }
  const obj5 = hasShopDiscount(10369);
});
memoResult.displayName = "PriceDescription";
let obj3 = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  gap: nativeDefault.space.PX_4,
};
size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopCardCardDetailsV2.tsx");

export default noop.memo(function CardDetailsV2(arg0) {
  ({ product, hidePrice } = arg0);
  let isInImprovedMobileShopLoading;
  ({ collectibleProductState, preferVCPrice, isDisabled } = arg0);
  const tmp = closure_10();
  const currentUser = isInImprovedMobileShopLoading(9343).useCurrentUser();
  const obj = isInImprovedMobileShopLoading(9343);
  const canUseShopDiscountsResult = PremiumUtilsDefault.canUseShopDiscounts(currentUser);
  const shopDiscountSource = isInImprovedMobileShopLoading(8431).getShopDiscountSource(currentUser);
  const obj3 = isInImprovedMobileShopLoading(8431);
  const token = isInImprovedMobileShopLoading(5839).useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
  const obj4 = isInImprovedMobileShopLoading(5839);
  const obj5 = isInImprovedMobileShopLoading(5240);
  const obj6 = isInImprovedMobileShopLoading(5240);
  const hexToRgbaStringResult = obj5.hexToRgbaString(isInImprovedMobileShopLoading(5240).hexWithOpacity(token, 0.9));
  const obj7 = isInImprovedMobileShopLoading(5240);
  const obj8 = isInImprovedMobileShopLoading(5240);
  const hexToRgbaStringResult1 = obj7.hexToRgbaString(isInImprovedMobileShopLoading(5240).hexWithOpacity(token, 0));
  const cardProductName = isInImprovedMobileShopLoading(10378).getCardProductName(product);
  const obj9 = isInImprovedMobileShopLoading(10378);
  isInImprovedMobileShopLoading = isInImprovedMobileShopLoading(10379).useIsInImprovedMobileShopLoading();
  const obj10 = isInImprovedMobileShopLoading(10379);
  items = [IAPStore];
  const items1 = [isInImprovedMobileShopLoading];
  const stateFromStores = isInImprovedMobileShopLoading(504).useStateFromStores(
    items,
    () => {
      let isFetchingGoogleSkusResult = !isInImprovedMobileShopLoading;
      if (!isInImprovedMobileShopLoading) {
        isFetchingGoogleSkusResult = IAPStore.isFetchingGoogleSkus();
      }
      return isFetchingGoogleSkusResult;
    },
    items1,
  );
  const obj12 = {
    style: tmp.regularMetadataContainer,
    colors: null,
    locations: [0, 0.4, 1],
    start: constants2.START,
    end: constants2.END,
    children: null,
  };
  const items2 = [hexToRgbaStringResult1, hexToRgbaStringResult, token];
  obj12.colors = items2;
  const obj11 = isInImprovedMobileShopLoading(504);
  const items3 = [
    closure_8(isInImprovedMobileShopLoading(5866).Text, {
      style: tmp.assetName,
      variant: "heading-xs/semibold",
      color: "mobile-text-heading-primary",
      lineClamp: 1,
      accessibilityRole: "header",
      children: cardProductName,
    }),
  ];
  let tmp13Result = !hidePrice;
  if (!hidePrice) {
    const obj14 = { style: tmp.priceVariantsContainer, children: null };
    const obj15 = {
      product,
      hasShopDiscount: canUseShopDiscountsResult,
      discountSource: shopDiscountSource,
      styles: tmp,
      collectibleProductState,
      isFetchingGoogleSkus: stateFromStores,
      preferVCPrice,
      isDisabled,
    };
    const items4 = [closure_8(closure_11, obj15)];
    const obj16 = { product };
    items4[1] = closure_8(CollectiblesShopCardVariantsDefault, obj16);
    obj14.children = items4;
    tmp13Result = closure_9(View, obj14);
  }
  items3[1] = tmp13Result;
  obj12.children = items3;
  return closure_9(LinearGradientDefault, obj12);
});
