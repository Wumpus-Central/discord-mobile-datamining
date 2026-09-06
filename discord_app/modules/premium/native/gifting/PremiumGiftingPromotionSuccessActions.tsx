// === Module 11076: PremiumGiftingPromotionSuccessActions ===

// Module 11076 (PremiumGiftingPromotionSuccessActions)
import ThemesDefault from "Themes" /* 576 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: null, promoDetails: null };
createCacheKey = { flexDirection: "column", alignItems: "center", gap: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { alignSelf: "stretch", paddingVertical: ThemesDefault.space.PX_12, paddingHorizontal: ThemesDefault.space.PX_16, borderRadius: ThemesDefault.radii.md, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE };
let closure_7 = createCacheKey.createStyles(createCacheKey);
let obj1 = { alignSelf: "stretch", paddingVertical: ThemesDefault.space.PX_12, paddingHorizontal: ThemesDefault.space.PX_16, borderRadius: ThemesDefault.radii.md, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE };
const result = require("set").fileFinishedImporting("modules/premium/native/gifting/PremiumGiftingPromotionSuccessActions.tsx");

export default function PremiumGiftingPromotionSuccessActions(purchase) {
  let onClose;
  let prePurchaseGiftingBadgeProgress;
  let navigation;
  let enabled;
  c4 = undefined;
  let callback;
  let tmp = callback();
  let obj = onClose(navigation[5]);
  const nativeGiftContext = obj.useNativeGiftContext();
  onClose = nativeGiftContext.onClose;
  prePurchaseGiftingBadgeProgress = nativeGiftContext.prePurchaseGiftingBadgeProgress;
  obj1 = onClose(navigation[6]);
  navigation = obj1.useNavigation();
  const GiftingBadgeExperiment = onClose(navigation[7]).GiftingBadgeExperiment;
  enabled = GiftingBadgeExperiment.useConfig({ location: "PremiumGiftingPromotionSuccessActions" }).enabled;
  const fetchCollectiblesProduct = onClose(navigation[8]).useFetchCollectiblesProduct(purchase.purchase.skuId);
  const product = fetchCollectiblesProduct.product;
  c4 = product;
  let tmp12Result = null != product;
  if (tmp12Result) {
    tmp12Result = product.items.length > 0;
  }
  const items = [enabled, prePurchaseGiftingBadgeProgress, navigation];
  callback = enabled.useCallback(() => {
    let tmp = enabled;
    if (enabled) {
      tmp = null != prePurchaseGiftingBadgeProgress;
    }
    if (tmp) {
      const obj = { currentProgress: null };
      obj[0] = prePurchaseGiftingBadgeProgress;
      navigation.navigate(onClose(navigation[9]).PremiumGiftScreens.GIFTING_BADGE, obj);
    }
  }, items);
  const items1 = [product, onClose, callback, enabled, prePurchaseGiftingBadgeProgress, navigation];
  obj = { style: tmp.container, children: null };
  const callback1 = enabled.useCallback(() => {
    if (null != c4) {
      let obj = { product: null, onCancel: null };
      obj[0] = tmp;
      obj[1] = callback;
      prePurchaseGiftingBadgeProgress(navigation[10]).open(obj);
      const obj2 = prePurchaseGiftingBadgeProgress(navigation[10]);
    } else {
      if (enabled) {
        if (null != prePurchaseGiftingBadgeProgress) {
          obj = { currentProgress: null };
          obj[0] = tmp3;
          navigation.navigate(onClose(navigation[9]).PremiumGiftScreens.GIFTING_BADGE, obj);
        }
      }
      onClose();
    }
  }, items1);
  if (tmp12Result) {
    obj = { style: null, product: null, title: null, subtitle: null };
    obj[0] = tmp.promoDetails;
    obj[1] = product;
    const intl = tmp2(tmp3[12]).intl;
    obj[2] = intl.string(prePurchaseGiftingBadgeProgress(tmp3[13]).XeLTZl);
    let name;
    if (product != null) {
      name = product.name;
    }
    obj[3] = name;
    tmp12Result = callback(tmp2(tmp3[11]).PremiumGiftPromotionCollectibleRewardDetails, obj);
    const tmp12 = callback;
  }
  const items2 = [tmp12Result, ];
  obj1 = { grow: true, text: null, loading: null, onPress: null };
  const intl2 = tmp2(tmp3[12]).intl;
  obj1[1] = intl2.string(onClose(navigation[12]).t.kMYVwv);
  obj1[2] = fetchCollectiblesProduct.isFetching;
  obj1[3] = callback1;
  items2[1] = callback(onClose(navigation[14]).Button, obj1);
  obj[1] = items2;
  return closure_6(c4, obj);
};