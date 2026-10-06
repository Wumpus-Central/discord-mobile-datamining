// === Module 10821: PremiumGiftSuccess ===

// Module 10821 (PremiumGiftSuccess)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import dismissible_content from "dismissible_content" /* 2036 */;
import DismissibleContentUtils from "DismissibleContentUtils" /* 2037 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import react from "react" /* 19 */;
import PromotionsStore from "PromotionsStore" /* 10409 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, giftPromotion, importDefault;

let c9;
let metroImportAll;
let metroImportDefault;
const View = react_native.View;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = createStyles.createStyles((arg0) => {
  let obj3;
  const obj = { bodyContainer: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingHorizontal: nativeDefault.space.PX_16, flex: 1, alignContent: "center", justifyContent: "center", flexGrow: 1 }, actionContainer: obj3 };
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingHorizontal: nativeDefault.space.PX_16, flex: 1, alignContent: "center", justifyContent: "center", flexGrow: 1 });
  obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingTop: nativeDefault.space.PX_16, paddingBottom: arg0 + nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
  const merged = Object.assign(nativeDefault.shadows.SHADOW_TOP_LOW);
  return obj;
});
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_1;
  let giftCodeRecord;
  let recipientUser;
  let reminderNotice;
  let selectedGiftingPromotionReward;
  let stateFromStores;
  let tmp11;
  let tmp12;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(23);
  closure_10(require("useSafeAreaInsets")().bottom);
  let obj2 = require("NativeGiftContext");
  const nativeGiftContext = obj2.useNativeGiftContext();
  ({ recipientUser, giftCodeRecord, selectedGiftingPromotionReward } = nativeGiftContext);
  require("module_38")(null != giftCodeRecord, "Gift code record cannot be null on success screen");
  const tmp8 = require("useGiftingPromotionConfig")();
  _require = tmp8;
  const tmp9 = require("useShouldShowGiftingPromotionDeco")();
  const tmp4 = importDefault;
  importDefault = tmp9;
  const obj3 = require("useFetchCollectiblesCategoriesAndPurchases");
  const getOrFetchPurchase = obj3.useGetOrFetchPurchase(selectedGiftingPromotionReward, false);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PromotionsStore];
    class A {
      constructor() {
        giftPromotion = giftPromotion.getGiftPromotion();
        let id;
        if (giftPromotion != null) {
          id = giftPromotion.id;
        }
        return id;
      }
    }
    cResult[0] = items;
    cResult[1] = A;
    tmp11 = items;
  } else {
    [tmp11, tmp12] = cResult;
  }
  const tmpResult = tmp(stateFromStores[15]);
  stateFromStores = tmpResult.useStateFromStores(tmp11, A);
  if (cResult[2] === stateFromStores) {
    if (cResult[3] === tmp8) {
      let tmp15;
      let tmp16;
      let tmp21;
      if (cResult[4] === tmp9) {
        tmp15 = cResult[5];
        tmp16 = cResult[6];
      }
      const effect = react.useEffect(tmp15, tmp16);
      class A {
        constructor() {
          giftPromotion = giftPromotion.getGiftPromotion();
          let id;
          if (giftPromotion != null) {
            id = giftPromotion.id;
          }
          return id;
        }
      }
      if (null == recipientUser) {
        class A {
          constructor() {
            giftPromotion = giftPromotion.getGiftPromotion();
            let id;
            if (giftPromotion != null) {
              id = giftPromotion.id;
            }
            return id;
          }
        }
      } else {
        tmp21 = closure_7(tmp4(stateFromStores[19]), {});
      }
      cResult[7] = giftCodeRecord;
      cResult[8] = recipientUser;
      cResult[9] = tmp21;
    }
  }
  const fn = function h() {
    const tmp = null != reminderNotice && null != reminderNotice.reminderNotice && closure_1 && null != stateFromStores;
    if (tmp) {
      const obj2 = { dismissAction: ContentDismissActionType.INDIRECT_ACTION };
      const obj = DismissibleContentUtils;
      const result = obj.markSnowflakeBoundDismissibleContentAsDismissed(dismissible_content.DismissibleContent.GIFTING_PROMOTION_REMINDER, stateFromStores, obj2);
    }
  };
  const items1 = [tmp9, tmp8, stateFromStores];
  cResult[2] = stateFromStores;
  cResult[3] = tmp8;
  cResult[4] = tmp9;
  cResult[5] = fn;
  cResult[6] = items1;
  tmp16 = items1;
  tmp15 = fn;
}) : (() => {
  let closure_1;
  let giftCodeRecord;
  let items2;
  let recipientUser;
  let reminderNotice;
  let selectedGiftingPromotionReward;
  let stateFromStores;
  let tmp12;
  let tmp12Result;
  let tmp13;
  let tmp = importDefault;
  const tmp3 = closure_10(require("useSafeAreaInsets")().bottom);
  let obj = require("NativeGiftContext");
  const nativeGiftContext = obj.useNativeGiftContext();
  ({ recipientUser, giftCodeRecord, selectedGiftingPromotionReward } = nativeGiftContext);
  require("module_38")(null != giftCodeRecord, "Gift code record cannot be null on success screen");
  const tmp7 = require("useGiftingPromotionConfig")();
  _require = tmp7;
  const tmp8 = require("useShouldShowGiftingPromotionDeco")();
  importDefault = tmp8;
  let obj2 = require("useFetchCollectiblesCategoriesAndPurchases");
  const getOrFetchPurchase = obj2.useGetOrFetchPurchase(selectedGiftingPromotionReward, false);
  const items = [PromotionsStore];
  const obj3 = require("get initialized");
  stateFromStores = obj3.useStateFromStores(items, () => {
    giftPromotion = giftPromotion.getGiftPromotion();
    let id;
    if (giftPromotion != null) {
      id = giftPromotion.id;
    }
    return id;
  });
  const items1 = [tmp8, tmp7, stateFromStores];
  const effect = react.useEffect(() => {
    const tmp = null != reminderNotice && null != reminderNotice.reminderNotice && closure_1 && null != stateFromStores;
    if (tmp) {
      const obj2 = { dismissAction: ContentDismissActionType.INDIRECT_ACTION };
      const obj = DismissibleContentUtils;
      const result = obj.markSnowflakeBoundDismissibleContentAsDismissed(dismissible_content.DismissibleContent.GIFTING_PROMOTION_REMINDER, stateFromStores, obj2);
    }
  }, items1);
  if (null == recipientUser) {
    const obj4 = { giftCodeRecord };
    tmp13 = closure_7(tmp(tmp2[18]), obj4);
    tmp12 = closure_7;
  } else {
    tmp12 = closure_7;
    tmp13 = closure_7(tmp(tmp2[19]), {});
  }
  if (null != getOrFetchPurchase) {
    const obj5 = { purchase: getOrFetchPurchase };
    tmp12Result = tmp12(tmp(tmp2[20]), obj5);
  } else if (null == recipientUser) {
    const obj6 = { giftCodeRecord };
    tmp12Result = tmp12(tmp4(tmp2[18]).PremiumGiftSuccessActions, obj6);
  } else {
    tmp12Result = tmp12(tmp4(tmp2[19]).PremiumGiftDMSuccessActions, {});
  }
  const obj7 = { children: items2 };
  items2 = [, ];
  const obj8 = { style: tmp3.bodyContainer, children: tmp13 };
  items2[0] = tmp12(View, obj8);
  const obj9 = { style: tmp3.actionContainer, children: tmp12Result };
  items2[1] = tmp12(View, obj9);
  return closure_9(closure_8, obj7);
});
let result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftSuccess.tsx");

export default tmp3;