// discord_app/modules/premium/native/gifting/PremiumGiftSuccess.tsx
import set from "set";
import { View } from "PremiumGiftDMSuccessBody";
import createEmptyPromotionsByType from "createEmptyPromotionsByType";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c9;
let error;
let metroImportAll;
let require = arg1;
({ jsx: error, Fragment: metroImportAll, jsxs: c9 } = jsxProd);
let closure_10 = createCacheKey.createStyles((arg0) => {
  let obj = { bodyContainer: null, actionContainer: null };
  obj = { backgroundColor: require("../../../../../discord_common/js/packages/tokens/native.tsx").colors.BACKGROUND_BASE_LOW, paddingHorizontal: require("../../../../../discord_common/js/packages/tokens/native.tsx").space.PX_16, flex: 1, alignContent: "center", justifyContent: "center", flexGrow: 1 };
  obj[0] = obj;
  obj = { backgroundColor: require("../../../../../discord_common/js/packages/tokens/native.tsx").colors.BACKGROUND_BASE_LOW, paddingTop: require("../../../../../discord_common/js/packages/tokens/native.tsx").space.PX_16, paddingBottom: arg0 + require("../../../../../discord_common/js/packages/tokens/native.tsx").space.PX_16, paddingHorizontal: require("../../../../../discord_common/js/packages/tokens/native.tsx").space.PX_16, gap: require("../../../../../discord_common/js/packages/tokens/native.tsx").space.PX_8 };
  const merged = Object.assign(require("../../../../../discord_common/js/packages/tokens/native.tsx").shadows.SHADOW_TOP_LOW);
  obj[1] = obj;
  return obj;
});
let result = require("createEmptyPromotionsByType").fileFinishedImporting("modules/premium/native/gifting/PremiumGiftSuccess.tsx");

export default function PremiumGiftSuccess() {
  let giftCodeRecord;
  let recipientUser;
  let selectedGiftingPromotionReward;
  const tmp3 = callback3(importDefault(stateFromStores[7])().bottom);
  let obj = require(stateFromStores[8]);
  const nativeGiftContext = obj.useNativeGiftContext();
  ({ recipientUser, giftCodeRecord, selectedGiftingPromotionReward } = nativeGiftContext);
  importDefault(stateFromStores[9])(null != giftCodeRecord, "Gift code record cannot be null on success screen");
  const tmp7 = importDefault(stateFromStores[10])();
  require = tmp7;
  const tmp8 = importDefault(stateFromStores[11])();
  importDefault = tmp8;
  let obj1 = require(stateFromStores[12]);
  const getOrFetchPurchase = obj1.useGetOrFetchPurchase(selectedGiftingPromotionReward, false);
  let obj2 = require(stateFromStores[13]);
  const items = [createEmptyPromotionsByType];
  stateFromStores = obj2.useStateFromStores(items, () => {
    giftPromotion = giftPromotion.getGiftPromotion();
    let id;
    if (giftPromotion != null) {
      id = giftPromotion.id;
    }
    return id;
  });
  const items1 = [tmp8, tmp7, stateFromStores];
  const effect = React.useEffect(() => {
    let tmp = null != tmp7 && null != tmp7.reminderNotice && closure_1;
    if (tmp) {
      tmp = null != stateFromStores;
    }
    if (tmp) {
      let obj = tmp7(stateFromStores[14]);
      obj = { dismissAction: null };
      obj[0] = outer1_6.INDIRECT_ACTION;
      const result = obj.markSnowflakeBoundDismissibleContentAsDismissed(tmp7(stateFromStores[15]).DismissibleContent.GIFTING_PROMOTION_REMINDER, stateFromStores, obj);
    }
  }, items1);
  if (null == recipientUser) {
    obj = { giftCodeRecord: null };
    obj[0] = giftCodeRecord;
    let tmp13 = callback(tmp(tmp2[16]), obj);
    let tmp12 = callback;
  } else {
    tmp12 = callback;
    tmp13 = callback(tmp(tmp2[17]), {});
  }
  if (null != getOrFetchPurchase) {
    obj = { purchase: null };
    obj[0] = getOrFetchPurchase;
    let tmp12Result = tmp12(tmp(tmp2[18]), obj);
  } else if (null == recipientUser) {
    obj1 = { giftCodeRecord: null };
    obj1[0] = giftCodeRecord;
    tmp12Result = tmp12(tmp4(tmp2[16]).PremiumGiftSuccessActions, obj1);
  } else {
    tmp12Result = tmp12(tmp4(tmp2[17]).PremiumGiftDMSuccessActions, {});
  }
  obj2 = { children: null };
  const items2 = [tmp12(View, { style: tmp3.bodyContainer, children: tmp13 }), tmp12(View, { style: tmp3.actionContainer, children: tmp12Result })];
  obj2[0] = items2;
  return callback2(closure_8, obj2);
};