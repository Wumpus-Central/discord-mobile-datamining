// discord_app/modules/collectibles/native/CollectiblesShopCardCardDetailsV2.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import PremiumUtilsDefault from "../../../utils/PremiumUtils.tsx";
import useToken from "../../../design/tokens/native/useToken.tsx";
import ColorUtils from "../../../utils/ColorUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import LinearGradientDefault from "../../../../_runtime/05286_LinearGradient.js";
import CollectiblesProductUtils from "../utils/CollectiblesProductUtils.tsx";
import CollectiblesUtils from "../CollectiblesUtils.tsx";
import useCurrentUser from "../hooks/useCurrentUser.tsx";
import getProductName from "../utils/getProductName.tsx";
import CollectiblesShopCardVariantsDefault from "CollectiblesShopCardVariants.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import IAPStore from "../../../stores/native/IAPStore.android.tsx";

require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ CurrencyCodes: metroRequire, VerticalGradient: closure_7 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4829);
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
  let memo;
  let balance;
  ({ discountSource, isFetchingGoogleSkus, preferVCPrice, isDisabled } = arg0);
  const defaultVariantIndex = hasShopDiscount(memo[7]).useDefaultVariantIndex(product);
  const obj = hasShopDiscount(memo[7]);
  const selectedProduct = hasShopDiscount(memo[8]).getSelectedProduct(product, defaultVariantIndex);
  const obj2 = hasShopDiscount(memo[8]);
  const formattedPriceForCollectiblesProduct = hasShopDiscount(memo[9]).getFormattedPriceForCollectiblesProduct(
    selectedProduct,
    hasShopDiscount,
    true,
  );
  const items = [selectedProduct, hasShopDiscount];
  memo = balance.useMemo(
    () => CollectiblesProductUtils.getProductOrbPrice({ product: selectedProduct, hasShopDiscount }),
    items,
  );
  const items1 = [selectedProduct, hasShopDiscount];
  const memo1 = balance.useMemo(
    () => CollectiblesUtils.getProductDiscount(selectedProduct, hasShopDiscount).discountPercentage,
    items1,
  );
  const items2 = [selectedProduct, hasShopDiscount];
  const memo2 = balance.useMemo(
    () =>
      CollectiblesUtils.getProductDiscount(selectedProduct, hasShopDiscount, constants.DISCORD_ORB).discountPercentage,
    items2,
  );
  const obj3 = hasShopDiscount(memo[9]);
  balance = hasShopDiscount(memo[11]).useFetchVirtualCurrencyBalance().balance;
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
      return closure_8(hasShopDiscount(tmp2[12]).CollectiblesShopPricePlaceholder, {});
    }
  }
  if ("partiallyOwnedBundle" === collectibleProductState) {
    const obj5 = { style: styles.priceDescription, children: null };
    const obj6 = {
      variant: "text-xs/semibold",
      color: "mobile-text-heading-primary",
      lineClamp: 1,
      style: styles.text,
      children: null,
    };
    const intl6 = hasShopDiscount(tmp2[14]).intl;
    obj6.children = intl6.string(hasShopDiscount(tmp2[14]).t.BEjTij);
    obj5.children = closure_8(hasShopDiscount(tmp2[13]).Text, obj6);
    return closure_8(View, obj5);
  } else if ("purchased" === collectibleProductState) {
    const obj7 = { style: styles.priceDescription, children: null };
    const obj8 = {
      variant: "text-xs/semibold",
      color: "mobile-text-heading-primary",
      lineClamp: 1,
      style: styles.text,
      children: null,
    };
    const intl5 = hasShopDiscount(tmp2[14]).intl;
    obj8.children = intl5.string(hasShopDiscount(tmp2[14]).t["6cfuDj"]);
    obj7.children = closure_8(hasShopDiscount(tmp2[13]).Text, obj8);
    return closure_8(View, obj7);
  } else if ("nitroUpsell" === collectibleProductState) {
    const obj9 = { style: styles.priceDescription, children: null };
    const obj10 = {
      variant: "text-xs/semibold",
      color: "mobile-text-heading-primary",
      lineClamp: 1,
      style: styles.text,
      children: null,
    };
    const intl4 = hasShopDiscount(tmp2[14]).intl;
    obj10.children = intl4.string(hasShopDiscount(tmp2[14]).t.sEAnVH);
    obj9.children = closure_8(hasShopDiscount(tmp2[13]).Text, obj10);
    return closure_8(View, obj9);
  } else if ("nitroClaim" === collectibleProductState) {
    const obj11 = { style: styles.priceDescription, children: null };
    const obj12 = {
      variant: "text-xs/semibold",
      color: "mobile-text-heading-primary",
      lineClamp: 1,
      style: styles.text,
      children: null,
    };
    const intl3 = hasShopDiscount(tmp2[14]).intl;
    obj12.children = intl3.string(hasShopDiscount(tmp2[14]).t.rt69oo);
    obj11.children = closure_8(hasShopDiscount(tmp2[13]).Text, obj12);
    return closure_8(View, obj11);
  } else {
    if (isDisabled) {
      const obj13 = { style: styles.priceDescription, children: null };
      const obj14 = {
        variant: "text-xs/semibold",
        color: "mobile-text-heading-primary",
        lineClamp: 1,
        style: styles.text,
        children: null,
      };
      const intl2 = hasShopDiscount(tmp2[14]).intl;
      obj14.children = intl2.string(hasShopDiscount(tmp2[14]).t.wu4gyV);
      obj13.children = closure_8(hasShopDiscount(tmp2[13]).Text, obj14);
      let tmp11Result = closure_8(View, obj13);
    } else {
      if (null != memo) {
        if (null != balance) {
          if (true !== preferVCPrice) {
            if (!memo3) {
              tmp11Result = tmp11(tmp12, obj15);
            }
          }
          const items4 = [styles.priceDescription];
          let num = 1;
          if (false === memo3) {
            num = 0.5;
          }
          obj15 = { style: null, children: null };
          const obj16 = { opacity: num };
          items4[1] = obj16;
          obj15.style = items4;
          const obj17 = { size: "xxs", color: "mobile-text-heading-primary", style: styles.wheelIcon };
          const items5 = [closure_8(hasShopDiscount(tmp2[15]).OrbsIcon, obj17), ,];
          const obj18 = {
            variant: "text-xs/semibold",
            color: "mobile-text-heading-primary",
            lineClamp: 1,
            accessibilityLabel: null,
            style: null,
            children: null,
          };
          const intl = hasShopDiscount(tmp2[14]).intl;
          const obj19 = { orbAmount: memo.amount };
          obj18.accessibilityLabel = intl.formatToPlainString(hasShopDiscount(tmp2[14]).t.W4DfeF, obj19);
          const items6 = [styles.text];
          const tmpResult = hasShopDiscount(tmp2[16]);
          items6[1] = hasShopDiscount(tmp2[16]).isAndroid() && styles.androidTextPadding;
          obj18.style = items6;
          obj18.children = memo.amount;
          items5[1] = closure_8(hasShopDiscount(tmp2[13]).Text, obj18);
          let tmp14Result = memo2 >= hasShopDiscount(tmp2[10]).DISCOUNT_DISPLAY_MINIMUM_THRESHOLD;
          if (tmp14Result) {
            const items7 = [, ,];
            ({ discountPercentage: arr8[0], text: arr8[1] } = styles);
            let androidTextPadding;
            if (tmpResult4.isAndroid()) {
              androidTextPadding = styles.androidTextPadding;
            }
            const obj20 = {
              style: null,
              color: "text-feedback-positive",
              variant: "text-xs/semibold",
              lineClamp: 1,
              children: null,
            };
            items7[2] = androidTextPadding;
            obj20.style = items7;
            const _HermesInternal = HermesInternal;
            obj20.children = "-" + memo2 + "%";
            tmp14Result = closure_8(hasShopDiscount(tmp2[13]).Text, obj20);
            tmpResult4 = hasShopDiscount(tmp2[16]);
          }
          items5[2] = tmp14Result;
          obj15.children = items5;
          const tmp15 = hasShopDiscount(tmp2[16]).isAndroid() && styles.androidTextPadding;
        }
      }
      const obj21 = { style: styles.priceDescription, children: null };
      if (!hasShopDiscount) {
        const items8 = [hasShopDiscount, ,];
        const items9 = [styles.text];
        const tmpResult5 = hasShopDiscount(tmp2[16]);
        const obj22 = {
          variant: "text-xs/semibold",
          color: "mobile-text-heading-primary",
          lineClamp: 1,
          style: null,
          children: null,
        };
        items9[1] = hasShopDiscount(tmp2[16]).isAndroid() && styles.androidTextPadding;
        obj22.style = items9;
        obj22.children = formattedPriceForCollectiblesProduct;
        items8[1] = closure_8(hasShopDiscount(tmp2[13]).Text, obj22);
        let tmp24Result = memo1 >= hasShopDiscount(tmp2[10]).DISCOUNT_DISPLAY_MINIMUM_THRESHOLD;
        if (tmp24Result) {
          const items10 = [, ,];
          ({ discountPercentage: arr11[0], text: arr11[1] } = styles);
          let androidTextPadding1;
          if (tmpResult6.isAndroid()) {
            androidTextPadding1 = styles.androidTextPadding;
          }
          const obj23 = {
            style: null,
            color: "text-feedback-positive",
            variant: "text-xs/semibold",
            lineClamp: 1,
            children: null,
          };
          items10[2] = androidTextPadding1;
          obj23.style = items10;
          const _HermesInternal2 = HermesInternal;
          obj23.children = "-" + memo1 + "%";
          tmp24Result = closure_8(hasShopDiscount(tmp2[13]).Text, obj23);
          tmpResult6 = hasShopDiscount(tmp2[16]);
        }
        items8[2] = tmp24Result;
        obj21.children = items8;
        obj15 = obj21;
        const tmp25 = hasShopDiscount(tmp2[16]).isAndroid() && styles.androidTextPadding;
      } else if (discountSource === hasShopDiscount(tmp2[10]).ShopDiscountSource.THIRDPARTY) {
        const obj24 = { size: "xs", color: "mobile-text-heading-primary", style: styles.wheelIcon };
        let tmp21 = closure_8(hasShopDiscount(tmp2[17]).TagIcon, obj24);
      } else {
        const obj25 = { size: "xs", color: "mobile-text-heading-primary", style: styles.wheelIcon };
        tmp21 = closure_8(hasShopDiscount(tmp2[18]).NitroWheelIcon, obj25);
      }
    }
    return tmp11Result;
  }
  const obj4 = hasShopDiscount(memo[11]);
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
  ({ collectibleProductState, preferVCPrice, isDisabled } = arg0);
  const tmp = closure_10();
  const currentUser = useCurrentUser.useCurrentUser();
  const canUseShopDiscountsResult = PremiumUtilsDefault.canUseShopDiscounts(currentUser);
  const shopDiscountSource = CollectiblesUtils.getShopDiscountSource(currentUser);
  const token = useToken.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
  const obj5 = ColorUtils;
  const hexToRgbaStringResult = obj5.hexToRgbaString(ColorUtils.hexWithOpacity(token, 0.9));
  const obj7 = ColorUtils;
  const hexToRgbaStringResult1 = obj7.hexToRgbaString(ColorUtils.hexWithOpacity(token, 0));
  const cardProductName = getProductName.getCardProductName(product);
  const items = [IAPStore];
  const stateFromStores = initialize.useStateFromStores(items, () => fetchingGoogleSkus.isFetchingGoogleSkus());
  const obj11 = {
    style: null,
    colors: null,
    locations: [0, 0.4, 1],
    start: constants2.START,
    end: constants2.END,
    children: null,
  };
  const items1 = [tmp.regularMetadataContainer];
  obj11.style = items1;
  const items2 = [hexToRgbaStringResult1, hexToRgbaStringResult, token];
  obj11.colors = items2;
  const items3 = [
    React6(Text_Text.Text, {
      style: tmp.assetName,
      variant: "heading-sm/bold",
      color: "mobile-text-heading-primary",
      lineClamp: 1,
      accessibilityRole: "header",
      children: cardProductName,
    }),
  ];
  let tmp12Result = !hidePrice;
  if (!hidePrice) {
    const obj13 = { style: tmp.priceVariantsContainer, children: null };
    const obj14 = {
      product,
      hasShopDiscount: canUseShopDiscountsResult,
      discountSource: shopDiscountSource,
      styles: tmp,
      collectibleProductState,
      isFetchingGoogleSkus: stateFromStores,
      preferVCPrice,
      isDisabled,
    };
    const items4 = [React6(memoResult, obj14)];
    const obj15 = { product };
    items4[1] = React6(CollectiblesShopCardVariantsDefault, obj15);
    obj13.children = items4;
    tmp12Result = React7(View, obj13);
  }
  items3[1] = tmp12Result;
  obj11.children = items3;
  return React7(LinearGradientDefault, obj11);
});
