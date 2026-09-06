// === Module 11076: PremiumGiftingPromotionSuccessActions ===

// Module 11076 (PremiumGiftingPromotionSuccessActions)
import nativeDefault from "native" /* 576 */;
import PremiumGiftModal from "PremiumGiftModal" /* 10662 */;
import ProductPurchaseSuccessActionCreatorsDefault from "ProductPurchaseSuccessActionCreators" /* 11077 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { container: null, promoDetails: null };
createStyles = { flexDirection: "column", alignItems: "center", gap: nativeDefault.space.PX_16 };
createStyles.container = createStyles;
createStyles.promoDetails = { alignSelf: "stretch", paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftingPromotionSuccessActions.tsx");

export default function PremiumGiftingPromotionSuccessActions(purchase) {
  let onClose;
  let navigation;
  let onCancel;
  let tmp = closure_7();
  let obj = onClose(navigation[5]);
  const nativeGiftContext = obj.useNativeGiftContext();
  onClose = nativeGiftContext.onClose;
  const prePurchaseGiftingBadgeProgress = nativeGiftContext.prePurchaseGiftingBadgeProgress;
  let obj1 = onClose(navigation[6]);
  navigation = obj1.useNavigation();
  const GiftingBadgeExperiment = onClose(navigation[7]).GiftingBadgeExperiment;
  const enabled = GiftingBadgeExperiment.useConfig({ location: "PremiumGiftingPromotionSuccessActions" }).enabled;
  const fetchCollectiblesProduct = onClose(navigation[8]).useFetchCollectiblesProduct(purchase.purchase.skuId);
  const product = fetchCollectiblesProduct.product;
  c4 = product;
  let tmp12Result = null != product;
  if (tmp12Result) {
    tmp12Result = product.items.length > 0;
  }
  const items = [enabled, prePurchaseGiftingBadgeProgress, navigation];
  onCancel = enabled.useCallback(() => {
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
  obj = { style: tmp.container, children: null };
  const callback1 = enabled.useCallback(() => {
    if (null != c4) {
      let obj = { product: tmp, onCancel };
      ProductPurchaseSuccessActionCreatorsDefault.open(obj);
    } else {
      if (enabled) {
        if (null != prePurchaseGiftingBadgeProgress) {
          obj = { currentProgress: tmp3 };
          navigation.navigate(PremiumGiftModal.PremiumGiftScreens.GIFTING_BADGE, obj);
        }
      }
      onClose();
    }
  }, items1);
  if (tmp12Result) {
    obj = { style: tmp.promoDetails, product, title: null, subtitle: null };
    const intl = tmp2(tmp3[12]).intl;
    obj.title = intl.string(prePurchaseGiftingBadgeProgress(tmp3[13]).XeLTZl);
    let name;
    if (product != null) {
      name = product.name;
    }
    obj.subtitle = name;
    tmp12Result = onCancel(tmp2(tmp3[11]).PremiumGiftPromotionCollectibleRewardDetails, obj);
  }
  const items2 = [tmp12Result, ];
  obj1 = { grow: true, text: null, loading: null, onPress: null };
  const intl2 = tmp2(tmp3[12]).intl;
  obj1.text = intl2.string(onClose(navigation[12]).t.kMYVwv);
  obj1.loading = fetchCollectiblesProduct.isFetching;
  obj1.onPress = callback1;
  items2[1] = onCancel(onClose(navigation[14]).Button, obj1);
  obj.children = items2;
  return closure_6(c4, obj);
};