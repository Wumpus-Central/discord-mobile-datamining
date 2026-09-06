// discord_app/modules/premium/native/gifting/PremiumGiftSuccess.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import dismissible_content from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentUtils from "../../../dismissible_content/DismissibleContentUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import PromotionsStore from "../../promotions/PromotionsStore.tsx";

require = fn;
const View = fn(17).View;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4560);
let closure_10 = createStyles.createStyles((arg0) => {
  let obj = { bodyContainer: null, actionContainer: null };
  obj = {
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    paddingHorizontal: nativeDefault.space.PX_16,
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    flexGrow: 1,
  };
  obj.bodyContainer = obj;
  obj = {
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    paddingTop: nativeDefault.space.PX_16,
    paddingBottom: arg0 + nativeDefault.space.PX_16,
    paddingHorizontal: nativeDefault.space.PX_16,
    gap: nativeDefault.space.PX_8,
  };
  const merged = Object.assign(nativeDefault.shadows.SHADOW_TOP_LOW);
  obj.actionContainer = obj;
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftSuccess.tsx");

export default function PremiumGiftSuccess() {
  const tmp3 = closure_10(require("useSafeAreaInsets")().bottom);
  let obj = require("NativeGiftContext");
  const nativeGiftContext = obj.useNativeGiftContext();
  ({ recipientUser, giftCodeRecord, selectedGiftingPromotionReward } = nativeGiftContext);
  require("../../../../../_runtime/metro/00038__.js")(
    null != giftCodeRecord,
    "Gift code record cannot be null on success screen",
  );
  const tmp7 = require("useGiftingPromotionConfig")();
  _require = tmp7;
  const tmp8 = require("useShouldShowGiftingPromotionDeco")();
  importDefault = tmp8;
  let obj1 = require("useFetchCollectiblesCategoriesAndPurchases");
  const getOrFetchPurchase = obj1.useGetOrFetchPurchase(selectedGiftingPromotionReward, false);
  let obj2 = require("initialize");
  const items = [PromotionsStore];
  stateFromStores = obj2.useStateFromStores(items, () => {
    giftPromotion = giftPromotion.getGiftPromotion();
    let id;
    if (giftPromotion != null) {
      id = giftPromotion.id;
    }
    return id;
  });
  let obj3 = require("PremiumGiftingGogoPromotionExperiment");
  const config = obj3.useConfig({ location: "PremiumGiftSuccess" });
  const items1 = [tmp8, tmp7, stateFromStores];
  const effect = noop.useEffect(() => {
    let tmp = null != reminderNotice && null != reminderNotice.reminderNotice && closure_1;
    if (tmp) {
      tmp = null != stateFromStores;
    }
    if (tmp) {
      const obj = { dismissAction: ContentDismissActionType.INDIRECT_ACTION };
      const result = obj.markSnowflakeBoundDismissibleContentAsDismissed(
        dismissible_content.DismissibleContent.GIFTING_PROMOTION_REMINDER,
        stateFromStores,
        obj,
      );
    }
  }, items1);
  if (null == recipientUser) {
    obj = { giftCodeRecord };
    let tmp14 = closure_7(tmp(tmp2[18]), obj);
    let tmp13 = closure_7;
  } else {
    tmp13 = closure_7;
    tmp14 = closure_7(tmp(tmp2[19]), {});
  }
  if (tmp8) {
    if (config.enabled) {
      if (
        selectedGiftingPromotionReward ===
        require("GiftingPromotionRewardSKUIds").GiftingPromotionRewardSKUIds.SUMMER_2026_GOGO_FAKE_SKU_ID
      ) {
        let code;
        if (null == recipientUser) {
          code = giftCodeRecord.code;
        }
        obj = { giftCode: code };
        let tmp13Result = tmp13(tmp(tmp2[20]), obj);
        const tmpResult = tmp(tmp2[20]);
      }
      obj1 = { children: null };
      obj2 = { style: tmp3.bodyContainer, children: tmp14 };
      const items2 = [tmp13(View, obj2)];
      obj3 = { style: tmp3.actionContainer, children: tmp13Result };
      items2[1] = tmp13(View, obj3);
      obj1.children = items2;
      return closure_9(closure_8, obj1);
    }
  }
  if (null != getOrFetchPurchase) {
    const obj4 = { purchase: getOrFetchPurchase };
    tmp13Result = tmp13(tmp(tmp2[21]), obj4);
  } else if (null == recipientUser) {
    const obj5 = { giftCodeRecord };
    tmp13Result = tmp13(tmp4(tmp2[18]).PremiumGiftSuccessActions, obj5);
  } else {
    tmp13Result = tmp13(tmp4(tmp2[19]).PremiumGiftDMSuccessActions, {});
  }
}
