// discord_app/modules/premium/native/gifting/PremiumGiftingPromotionSuccessActions.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import PremiumGiftModal from "PremiumGiftModal.tsx";
import ProductPurchaseSuccessActionCreatorsDefault from "../../../collectibles/native/ProductPurchaseSuccessActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4757);
let obj2 = {
  container: { flexDirection: "column", alignItems: "center", gap: nativeDefault.space.PX_16 },
  promoDetails: null,
};
let obj3 = { flexDirection: "column", alignItems: "center", gap: nativeDefault.space.PX_16 };
obj2.promoDetails = {
  alignSelf: "stretch",
  paddingVertical: nativeDefault.space.PX_12,
  paddingHorizontal: nativeDefault.space.PX_16,
  borderRadius: nativeDefault.radii.md,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftingPromotionSuccessActions.tsx");

export default function PremiumGiftingPromotionSuccessActions(purchase) {
  purchase = purchase.purchase;
  let prePurchaseGiftingBadgeProgress;
  let onCancel;
  let tmp = closure_7();
  const nativeGiftContext = purchase(prePurchaseGiftingBadgeProgress[5]).useNativeGiftContext();
  const onClose = nativeGiftContext.onClose;
  prePurchaseGiftingBadgeProgress = nativeGiftContext.prePurchaseGiftingBadgeProgress;
  ({ allRewards, claimableRewards } = nativeGiftContext);
  let obj = purchase(prePurchaseGiftingBadgeProgress[5]);
  const navigation = purchase(prePurchaseGiftingBadgeProgress[6]).useNavigation();
  const GiftingBadgeExperiment = purchase(prePurchaseGiftingBadgeProgress[7]).GiftingBadgeExperiment;
  const enabled = GiftingBadgeExperiment.useConfig({ location: "PremiumGiftingPromotionSuccessActions" }).enabled;
  let obj2 = purchase(prePurchaseGiftingBadgeProgress[6]);
  const fetchCollectiblesProduct = purchase(prePurchaseGiftingBadgeProgress[8]).useFetchCollectiblesProduct(
    purchase.skuId,
  );
  const product = fetchCollectiblesProduct.product;
  c5 = product;
  let tmp7 = null != product;
  if (tmp7) {
    tmp7 = product.items.length > 0;
  }
  if (claimableRewards != null) {
    const found = claimableRewards.filter((item) => item !== purchase.skuId);
  }
  if (null != allRewards) {
    if (allRewards.length > 0) {
      if (null != found) {
        if (0 === found.length) {
          const intl2 = tmp2(tmp3[9]).intl;
          const obj4 = { count: allRewards.length };
          let formatToPlainStringResult = intl2.formatToPlainString(onClose(tmp3[10]).cMHedL, obj4);
          let tmp9 = onClose;
        }
        const items = [enabled, prePurchaseGiftingBadgeProgress, navigation];
        onCancel = navigation.useCallback(() => {
          let tmp = enabled;
          if (enabled) {
            tmp = null != prePurchaseGiftingBadgeProgress;
          }
          if (tmp) {
            const obj = { currentProgress: prePurchaseGiftingBadgeProgress };
            navigation.navigate(PremiumGiftModal.PremiumGiftScreens.GIFTING_BADGE, obj);
          }
        }, items);
        const items1 = [product, onClose, onCancel, enabled, prePurchaseGiftingBadgeProgress, navigation];
        const obj5 = { style: tmp.container, children: null };
        const callback1 = navigation.useCallback(() => {
          if (null != c5) {
            const obj3 = { product: tmp, onCancel };
            ProductPurchaseSuccessActionCreatorsDefault.open(obj3);
          } else {
            if (enabled) {
              if (null != prePurchaseGiftingBadgeProgress) {
                const obj = { currentProgress: tmp3 };
                navigation.navigate(PremiumGiftModal.PremiumGiftScreens.GIFTING_BADGE, obj);
              }
            }
            onClose();
          }
        }, items1);
        if (tmp7) {
          const obj6 = { style: tmp.promoDetails, product, title: null, subtitle: null };
          const intl3 = tmp2(tmp3[9]).intl;
          obj6.title = intl3.string(tmp9(tmp3[10]).WvAqZA);
          obj6.subtitle = formatToPlainStringResult;
          tmp7 = c5(tmp2(tmp3[13]).PremiumGiftPromotionCollectibleRewardDetails, obj6);
        }
        const items2 = [tmp7];
        const obj7 = { grow: true, text: null, loading: null, onPress: null };
        const intl4 = tmp2(tmp3[9]).intl;
        obj7.text = intl4.string(tmp2(tmp3[9]).t.kMYVwv);
        obj7.loading = fetchCollectiblesProduct.isFetching;
        obj7.onPress = callback1;
        items2[1] = c5(tmp2(tmp3[14]).Button, obj7);
        obj5.children = items2;
        return onCancel(enabled, obj5);
      }
    }
  }
  const intl = tmp2(tmp3[9]).intl;
  formatToPlainStringResult = intl.string(onClose(tmp3[10])["/8znyU"]);
  tmp9 = onClose;
}
