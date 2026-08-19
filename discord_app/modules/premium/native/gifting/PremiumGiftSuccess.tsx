// === Module 10383: PremiumGiftSuccess ===

// Module 10383 (PremiumGiftSuccess)
import ThemesDefault from "Themes" /* 712 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import createEmptyPromotionsByType from "createEmptyPromotionsByType" /* 7628 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1388 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = fn;
({ jsx: error, Fragment: closure_8, jsxs: c9 } = jsxProd);
let closure_10 = createCacheKey.createStyles((arg0) => {
  let obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, paddingHorizontal: ThemesDefault.space.PX_16, flex: 1, alignContent: "center", justifyContent: "center", flexGrow: 1 };
  obj[0] = obj;
  obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, paddingTop: ThemesDefault.space.PX_16, paddingBottom: arg0 + ThemesDefault.space.PX_16, paddingHorizontal: ThemesDefault.space.PX_16, gap: ThemesDefault.space.PX_8 };
  const merged = Object.assign(ThemesDefault.shadows.SHADOW_TOP_LOW);
  obj[1] = obj;
  return obj;
});
let result = require("obj132").fileFinishedImporting("modules/premium/native/gifting/PremiumGiftSuccess.tsx");

export default function PremiumGiftSuccess() {
  const tmp3 = callback3(importDefault(stateFromStores[7])().bottom);
  let obj = _require(stateFromStores[8]);
  const nativeGiftContext = obj.useNativeGiftContext();
  ({ recipientUser, giftCodeRecord, selectedGiftingPromotionReward } = nativeGiftContext);
  importDefault(stateFromStores[9])(null != giftCodeRecord, "Gift code record cannot be null on success screen");
  const tmp7 = importDefault(stateFromStores[10])();
  _require = tmp7;
  const tmp8 = importDefault(stateFromStores[11])();
  importDefault = tmp8;
  obj1 = _require(stateFromStores[12]);
  const getOrFetchPurchase = obj1.useGetOrFetchPurchase(selectedGiftingPromotionReward, false);
  let obj2 = _require(stateFromStores[13]);
  const items = [closure_5];
  stateFromStores = obj2.useStateFromStores(items, () => {
    giftPromotion = giftPromotion.getGiftPromotion();
    let id;
    if (giftPromotion != null) {
      id = giftPromotion.id;
    }
    return id;
  });
  let obj3 = importDefault(stateFromStores[14]);
  const config = obj3.useConfig({ location: "PremiumGiftSuccess" });
  const items1 = [tmp8, tmp7, stateFromStores];
  const effect = React.useEffect(() => {
    let tmp = null != lib && null != lib.reminderNotice && closure_1;
    if (tmp) {
      tmp = null != stateFromStores;
    }
    if (tmp) {
      lib(stateFromStores[16]);
      const obj = { dismissAction: null };
      obj[0] = ContentDismissActionType.INDIRECT_ACTION;
      const result = obj.markSnowflakeBoundDismissibleContentAsDismissed(lib(stateFromStores[17]).DismissibleContent.GIFTING_PROMOTION_REMINDER, stateFromStores, obj);
    }
  }, items1);
  if (null == recipientUser) {
    obj = { giftCodeRecord: null };
    obj[0] = giftCodeRecord;
    let tmp14 = callback(tmp(tmp2[18]), obj);
    let tmp13 = callback;
  } else {
    tmp13 = callback;
    tmp14 = callback(tmp(tmp2[19]), {});
  }
  if (tmp8) {
    if (config.enabled) {
      if (selectedGiftingPromotionReward === _require(stateFromStores[15]).GiftingPromotionRewardSKUIds.SUMMER_2026_GOGO_FAKE_SKU_ID) {
        let code;
        if (null == recipientUser) {
          code = giftCodeRecord.code;
        }
        obj = { giftCode: null };
        obj[0] = code;
        let tmp13Result = tmp13(tmp(tmp2[20]), obj);
        const tmpResult = tmp(tmp2[20]);
      }
      obj1 = { children: null };
      obj2 = { style: null, children: null };
      obj2[0] = tmp3.bodyContainer;
      obj2[1] = tmp14;
      const items2 = [tmp13(View, obj2), ];
      obj3 = { style: null, children: null };
      obj3[0] = tmp3.actionContainer;
      obj3[1] = tmp13Result;
      items2[1] = tmp13(View, obj3);
      obj1[0] = items2;
      return callback2(closure_8, obj1);
    }
  }
  if (null != getOrFetchPurchase) {
    const obj4 = { purchase: null };
    obj4[0] = getOrFetchPurchase;
    tmp13Result = tmp13(tmp(tmp2[21]), obj4);
  } else if (null == recipientUser) {
    const obj5 = { giftCodeRecord: null };
    obj5[0] = giftCodeRecord;
    tmp13Result = tmp13(tmp4(tmp2[18]).PremiumGiftSuccessActions, obj5);
  } else {
    tmp13Result = tmp13(tmp4(tmp2[19]).PremiumGiftDMSuccessActions, {});
  }
};