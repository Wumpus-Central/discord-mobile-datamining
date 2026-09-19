// === Module 11338: PremiumGiftSuccess ===

// Module 11338 (PremiumGiftSuccess)
import nativeDefault from "native" /* 576 */;
import dismissible_content from "dismissible_content" /* 2027 */;
import DismissibleContentUtils from "DismissibleContentUtils" /* 2029 */;
import noop from "module_19" /* 19 */;
import PromotionsStore from "PromotionsStore" /* 10924 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const ContentDismissActionType = fn(2038).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4756);
let closure_10 = createStyles.createStyles((arg0) => {
  const obj = { bodyContainer: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingHorizontal: nativeDefault.space.PX_16, flex: 1, alignContent: "center", justifyContent: "center", flexGrow: 1 }, actionContainer: null };
  const obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingHorizontal: nativeDefault.space.PX_16, flex: 1, alignContent: "center", justifyContent: "center", flexGrow: 1 };
  const merged = Object.assign(nativeDefault.shadows.SHADOW_TOP_LOW);
  obj.actionContainer = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingTop: nativeDefault.space.PX_16, paddingBottom: arg0 + nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftSuccess.tsx");

export default function PremiumGiftSuccess() {
  const tmp3 = closure_10(require("useSafeAreaInsets")().bottom);
  const nativeGiftContext = require("NativeGiftContext").useNativeGiftContext();
  ({ recipientUser, giftCodeRecord, selectedGiftingPromotionReward } = nativeGiftContext);
  require("module_38")(null != giftCodeRecord, "Gift code record cannot be null on success screen");
  const tmp7 = require("useGiftingPromotionConfig")();
  _require = tmp7;
  const tmp8 = require("useShouldShowGiftingPromotionDeco")();
  importDefault = tmp8;
  let obj = require("NativeGiftContext");
  const getOrFetchPurchase = require("useFetchCollectiblesCategoriesAndPurchases").useGetOrFetchPurchase(selectedGiftingPromotionReward, false);
  let obj2 = require("useFetchCollectiblesCategoriesAndPurchases");
  const items = [PromotionsStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => {
    giftPromotion = giftPromotion.getGiftPromotion();
    let id;
    if (giftPromotion != null) {
      id = giftPromotion.id;
    }
    return id;
  });
  const items1 = [tmp8, tmp7, stateFromStores];
  const effect = noop.useEffect(() => {
    let tmp = null != reminderNotice && null != reminderNotice.reminderNotice && closure_1;
    if (tmp) {
      tmp = null != stateFromStores;
    }
    if (tmp) {
      const obj2 = { dismissAction: ContentDismissActionType.INDIRECT_ACTION };
      const result = DismissibleContentUtils.markSnowflakeBoundDismissibleContentAsDismissed(dismissible_content.DismissibleContent.GIFTING_PROMOTION_REMINDER, stateFromStores, obj2);
    }
  }, items1);
  if (null == recipientUser) {
    const obj4 = { giftCodeRecord };
    let tmp13 = closure_7(tmp(tmp2[16]), obj4);
    let tmp12 = closure_7;
  } else {
    tmp12 = closure_7;
    tmp13 = closure_7(tmp(tmp2[17]), {});
  }
  if (null != getOrFetchPurchase) {
    const obj5 = { purchase: getOrFetchPurchase };
    let tmp12Result = tmp12(tmp(tmp2[18]), obj5);
  } else if (null == recipientUser) {
    const obj6 = { giftCodeRecord };
    tmp12Result = tmp12(tmp4(tmp2[16]).PremiumGiftSuccessActions, obj6);
  } else {
    tmp12Result = tmp12(tmp4(tmp2[17]).PremiumGiftDMSuccessActions, {});
  }
  const obj7 = { children: null };
  const items2 = [tmp12(View, { style: tmp3.bodyContainer, children: tmp13 }), tmp12(View, { style: tmp3.actionContainer, children: tmp12Result })];
  obj7.children = items2;
  return closure_9(closure_8, obj7);
};