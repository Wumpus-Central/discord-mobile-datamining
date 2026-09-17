// === Module 11232: PremiumGiftSuccess ===

// Module 11232 (PremiumGiftSuccess)
import nativeDefault from "native" /* 576 */;
import dismissible_content from "dismissible_content" /* 1944 */;
import DismissibleContentUtils from "DismissibleContentUtils" /* 1946 */;
import noop from "module_19" /* 19 */;
import PromotionsStore from "PromotionsStore" /* 10814 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const ContentDismissActionType = fn(1955).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4640);
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
  const obj3 = require("initialize");
  const config = require("PremiumGiftingGogoPromotionExperiment").useConfig({ location: "PremiumGiftSuccess" });
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
    const obj5 = { giftCodeRecord };
    let tmp14 = closure_7(tmp(tmp2[18]), obj5);
    let tmp13 = closure_7;
  } else {
    tmp13 = closure_7;
    tmp14 = closure_7(tmp(tmp2[19]), {});
  }
  if (tmp8) {
    if (config.enabled) {
      if (selectedGiftingPromotionReward === require("GiftingPromotionRewardSKUIds").GiftingPromotionRewardSKUIds.SUMMER_2026_GOGO_FAKE_SKU_ID) {
        let code;
        if (null == recipientUser) {
          code = giftCodeRecord.code;
        }
        const obj6 = { giftCode: code };
        let tmp13Result = tmp13(tmp(tmp2[20]), obj6);
        const tmpResult = tmp(tmp2[20]);
      }
      const obj7 = { children: null };
      const obj8 = { style: tmp3.bodyContainer, children: tmp14 };
      const items2 = [tmp13(View, obj8), ];
      const obj9 = { style: tmp3.actionContainer, children: tmp13Result };
      items2[1] = tmp13(View, obj9);
      obj7.children = items2;
      return closure_9(closure_8, obj7);
    }
  }
  if (null != getOrFetchPurchase) {
    const obj10 = { purchase: getOrFetchPurchase };
    tmp13Result = tmp13(tmp(tmp2[21]), obj10);
  } else if (null == recipientUser) {
    const obj11 = { giftCodeRecord };
    tmp13Result = tmp13(tmp4(tmp2[18]).PremiumGiftSuccessActions, obj11);
  } else {
    tmp13Result = tmp13(tmp4(tmp2[19]).PremiumGiftDMSuccessActions, {});
  }
  const obj4 = require("PremiumGiftingGogoPromotionExperiment");
};