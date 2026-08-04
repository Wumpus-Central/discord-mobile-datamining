// discord_app/modules/premium/native/gifting/PremiumGiftingPromotionSuccessActions.tsx
import Button from "Button";
import { View } from "Button";
import { isAvatarDecorationRecord } from "fromServer";
import { isNameplateRecord } from "fromServer";
import mergeGuildAvatar from "mergeGuildAvatar";
import jsxProd from "set";
import createCacheKey from "createCacheKey";

let c9;
let metroImportAll;
const require = arg1;
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
createCacheKey = { container: null, nameplateContainer: null, nameplateWrapper: null, singleAvatarContainer: null };
createCacheKey = { flexDirection: "column", alignItems: "center", gap: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { width: 234, height: 40, flexDirection: "row", alignItems: "center", position: "relative", borderRadius: require("Themes").radii.sm, overflow: "hidden" };
let obj1 = { width: 234, height: 40, flexDirection: "row", alignItems: "center", position: "relative", borderRadius: require("Themes").radii.sm, overflow: "hidden" };
createCacheKey[2] = { position: "absolute", left: 0, right: 0, top: 0, bottom: 0, borderRadius: require("Themes").radii.sm, overflow: "hidden" };
createCacheKey[3] = { flexDirection: "row", paddingRight: 15, justifyContent: "center", alignItems: "center", marginLeft: 5 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { position: "absolute", left: 0, right: 0, top: 0, bottom: 0, borderRadius: require("Themes").radii.sm, overflow: "hidden" };
const result = require("fromServer").fileFinishedImporting("modules/premium/native/gifting/PremiumGiftingPromotionSuccessActions.tsx");

export default function PremiumGiftingPromotionSuccessActions(purchase) {
  purchase = purchase.purchase;
  let onClose;
  let prePurchaseGiftingBadgeProgress;
  let navigation;
  let enabled;
  let c4;
  let callback;
  let tmp = createCacheKey();
  let obj = onClose(navigation[8]);
  const items = [mergeGuildAvatar];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj1 = onClose(navigation[9]);
  const nativeGiftContext = obj1.useNativeGiftContext();
  onClose = nativeGiftContext.onClose;
  prePurchaseGiftingBadgeProgress = nativeGiftContext.prePurchaseGiftingBadgeProgress;
  let obj2 = onClose(navigation[10]);
  navigation = obj2.useNavigation();
  const GiftingBadgeExperiment = onClose(navigation[11]).GiftingBadgeExperiment;
  enabled = GiftingBadgeExperiment.useConfig({ location: "PremiumGiftingPromotionSuccessActions" }).enabled;
  let obj3 = onClose(navigation[12]);
  const fetchCollectiblesProduct = obj3.useFetchCollectiblesProduct(purchase.skuId);
  const product = fetchCollectiblesProduct.product;
  c4 = product;
  const items1 = [enabled, prePurchaseGiftingBadgeProgress, navigation];
  callback = enabled.useCallback(() => {
    let tmp = enabled;
    if (enabled) {
      tmp = null != prePurchaseGiftingBadgeProgress;
    }
    if (tmp) {
      const obj = { currentProgress: null };
      obj[0] = prePurchaseGiftingBadgeProgress;
      navigation.navigate(onClose(navigation[13]).PremiumGiftScreens.GIFTING_BADGE, obj);
    }
  }, items1);
  const items2 = [product, onClose, callback, enabled, prePurchaseGiftingBadgeProgress, navigation];
  const first = purchase.items[0];
  obj = { style: tmp.container, children: null };
  const callback1 = enabled.useCallback(() => {
    if (null != c4) {
      let obj = { product: null, onCancel: null };
      obj[0] = tmp;
      obj[1] = callback;
      prePurchaseGiftingBadgeProgress(navigation[14]).open(obj);
      const obj2 = prePurchaseGiftingBadgeProgress(navigation[14]);
    } else {
      if (enabled) {
        if (null != prePurchaseGiftingBadgeProgress) {
          obj = { currentProgress: null };
          obj[0] = tmp3;
          navigation.navigate(onClose(navigation[13]).PremiumGiftScreens.GIFTING_BADGE, obj);
        }
      }
      onClose();
    }
  }, items2);
  if (isNameplateRecord(first)) {
    obj = { style: null, children: null };
    obj[0] = tmp.nameplateContainer;
    obj1 = { style: null, children: null };
    obj1[0] = tmp.nameplateWrapper;
    obj2 = { nameplate: null, fullOpacity: true, animate: true };
    const tmp20 = prePurchaseGiftingBadgeProgress(tmp3[15]);
    obj2[0] = tmp2(tmp3[16]).getNameplateData(first);
    obj1[1] = callback(tmp20, obj2);
    const items3 = [callback(tmp12, obj1), ];
    obj3 = { style: null, children: null };
    obj3[0] = tmp.singleAvatarContainer;
    const obj4 = { user: null, guildId: "Array", size: true, "aria-hidden": null };
    obj4[0] = stateFromStores;
    obj4[2] = tmp2(tmp3[17]).AvatarSizes.SMALL;
    obj3[1] = callback(tmp2(tmp3[17]).Avatar, obj4);
    items3[1] = callback(tmp12, obj3);
    obj[1] = items3;
    let tmp11Result = tmp11(tmp12, obj);
    const tmp2Result = tmp2(tmp3[16]);
  } else if (callback(first)) {
    const obj5 = { size: null, asset: null };
    obj5[0] = tmp2(tmp3[17]).AvatarSizes.LARGE;
    obj5[1] = first.asset;
    tmp11Result = callback(prePurchaseGiftingBadgeProgress(tmp3[18]), obj5);
    const tmp17 = prePurchaseGiftingBadgeProgress(tmp3[18]);
  }
  const items4 = [tmp11Result, ];
  const obj6 = { grow: true, text: null, loading: null, onPress: null };
  const intl = tmp2(tmp3[20]).intl;
  obj6[1] = intl.string(onClose(navigation[20]).t.kMYVwv);
  obj6[2] = fetchCollectiblesProduct.isFetching;
  obj6[3] = callback1;
  items4[1] = callback(onClose(navigation[19]).Button, obj6);
  obj[1] = items4;
  return closure_9(c4, obj);
};