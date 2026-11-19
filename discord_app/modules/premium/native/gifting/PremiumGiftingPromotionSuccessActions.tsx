// discord_app/modules/premium/native/gifting/PremiumGiftingPromotionSuccessActions.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ProductPurchaseSuccessActionCreatorsDefault from "../../../collectibles/native/ProductPurchaseSuccessActionCreators.tsx";
import PremiumGiftModal from "PremiumGiftModal.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
const createStyles = fn(4792);
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
  let onClose;
  let navigation;
  let onCancel;
  const tmp = closure_7();
  const nativeGiftContext = onClose(navigation[5]).useNativeGiftContext();
  onClose = nativeGiftContext.onClose;
  const prePurchaseGiftingBadgeProgress = nativeGiftContext.prePurchaseGiftingBadgeProgress;
  let obj = onClose(navigation[5]);
  navigation = onClose(navigation[6]).useNavigation();
  let obj2 = onClose(navigation[6]);
  const fetchCollectiblesProduct = onClose(navigation[7]).useFetchCollectiblesProduct(purchase.purchase.skuId);
  const product = fetchCollectiblesProduct.product;
  noop = product;
  let tmp12Result = null != product;
  if (tmp12Result) {
    tmp12Result = product.items.length > 0;
  }
  items = [prePurchaseGiftingBadgeProgress, navigation];
  onCancel = noop.useCallback(() => {
    if (null != prePurchaseGiftingBadgeProgress) {
      const obj = { currentProgress: tmp };
      navigation.navigate(PremiumGiftModal.PremiumGiftScreens.GIFTING_BADGE, obj);
    }
  }, items);
  const items1 = [product, onClose, onCancel, prePurchaseGiftingBadgeProgress, navigation];
  const obj4 = { style: tmp.container, children: null };
  const callback1 = noop.useCallback(() => {
    if (null != c3) {
      const obj3 = { product: tmp, onCancel };
      ProductPurchaseSuccessActionCreatorsDefault.open(obj3);
    } else if (null != prePurchaseGiftingBadgeProgress) {
      const obj = { currentProgress: tmp2 };
      navigation.navigate(PremiumGiftModal.PremiumGiftScreens.GIFTING_BADGE, obj);
    } else {
      onClose();
    }
  }, items1);
  if (tmp12Result) {
    const obj5 = { style: tmp.promoDetails, product, title: null, subtitle: null };
    const intl = tmp2(tmp3[11]).intl;
    obj5.title = intl.string(prePurchaseGiftingBadgeProgress(tmp3[12]).XeLTZl);
    let name;
    if (product != null) {
      name = product.name;
    }
    obj5.subtitle = name;
    tmp12Result = closure_5(tmp2(tmp3[10]).PremiumGiftPromotionCollectibleRewardDetails, obj5);
  }
  const items2 = [tmp12Result];
  const obj6 = { grow: true, text: null, loading: null, onPress: null };
  const intl2 = tmp2(tmp3[11]).intl;
  obj6.text = intl2.string(onClose(navigation[11]).t.kMYVwv);
  obj6.loading = fetchCollectiblesProduct.isFetching;
  obj6.onPress = callback1;
  items2[1] = closure_5(onClose(navigation[13]).Button, obj6);
  obj4.children = items2;
  return closure_6(onCancel, obj4);
}
