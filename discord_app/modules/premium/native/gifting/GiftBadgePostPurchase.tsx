// === Module 10710: PostPurchaseFooter ===

// Module 10710 (PostPurchaseFooter)
import initialize from "initialize" /* 589 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1629 */;
import messagesProxyDefault from "messagesProxy" /* 2466 */;
import Text from "Text" /* 4442 */;
import GiftingBadgeProgressBarDefault from "GiftingBadgeProgressBar" /* 10713 */;
import GiftingBadgeLevelUpProgressDefault from "GiftingBadgeLevelUpProgress" /* 10714 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "initialize" /* 8506 */;
import getTierForProgress from "getTierForProgress" /* 10711 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1388 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

require = arg1;
function PostPurchaseFooter(onSendGift) {
  onSendGift = onSendGift.onSendGift;
  const items = [onSendGift];
  const callback = React.useCallback(() => {
    let arr = closure_1_1(closure_1_2[9]);
    arr = arr.pop();
    onSendGift();
  }, items);
  let obj = { style: callback6(useSafeAreaInsetsDefault().bottom).footer, children: null };
  const callback1 = React.useCallback(() => {
    let arr = callback(4689);
    arr = arr.pop();
    const rootNavigationRef = onSendGift(4301).getRootNavigationRef();
    if (rootNavigationRef != null) {
      rootNavigationRef.navigate("you");
    }
  }, []);
  obj = { grow: true, variant: "primary", icon: null, text: null, onPress: null };
  obj = { size: "sm", color: ThemesDefault.colors.CONTROL_PRIMARY_TEXT_DEFAULT };
  obj[2] = callback4(onSendGift(10712).GiftIcon, obj);
  const intl = onSendGift(1236).intl;
  obj[3] = intl.string(messagesProxyDefault.g86YiI);
  obj[4] = callback;
  const items1 = [callback4(onSendGift(4893).Button, obj), ];
  obj1 = { grow: true, variant: "secondary", text: null, onPress: null };
  const intl2 = onSendGift(1236).intl;
  obj1[2] = intl2.string(messagesProxyDefault["sa/cfM"]);
  obj1[3] = callback1;
  items1[1] = callback4(onSendGift(4893).Button, obj1);
  obj[1] = items1;
  return callback5(View, obj);
}
function InProgressScreen(arg0) {
  ({ progress, title, progressBarTitle, description, currentTier, nextTier, onSendGift } = arg0);
  const tmp = callback6(useSafeAreaInsetsDefault().bottom);
  let obj = { style: tmp.screenContainer, children: null };
  obj = { style: tmp.content, children: null };
  obj = { style: tmp.progressWrapper, children: callback4(GiftingBadgeProgressBarDefault, { progress, currentTier, nextTier, iconSize: 48, title: progressBarTitle }) };
  const items = [callback4(View, obj), ];
  obj1 = { style: tmp.messageSection, children: null };
  const items1 = [callback4(Text.Text, { variant: "heading-xxl/bold", style: tmp.centerText, children: title }), callback4(Text.Text, { variant: "text-md/medium", color: "text-subtle", style: tmp.centerText, children: description })];
  obj1[1] = items1;
  items[1] = callback5(View, obj1);
  obj[1] = items;
  const items2 = [callback5(View, obj), callback4(PostPurchaseFooter, { onSendGift })];
  obj[1] = items2;
  return callback5(View, obj);
}
function LevelUpScreen(arg0) {
  ({ newTier, nextTier, giftsToNextTier } = arg0);
  ({ simulatedProgress, currentTier, onSendGift } = arg0);
  const tmp3 = callback6(useSafeAreaInsetsDefault().bottom);
  const effect = React.useEffect(() => {
    const result = callback(4414).triggerHapticFeedback(callback2(4415).IMPACT_HEAVY);
  }, []);
  let obj = { style: tmp3.screenContainer, children: null };
  obj = { style: tmp3.content, children: null };
  obj = { style: tmp3.levelUpIconWrapper, children: null };
  let tmp7Result = null != newTier.simple_icon_url;
  if (tmp7Result) {
    obj1 = { icon: null, size: 140 };
    obj1[0] = newTier.simple_icon_url;
    tmp7Result = tmp7(tmp(10460), obj1);
  }
  obj[1] = tmp7Result;
  const items = [closure_10(View, obj), ];
  const obj2 = { style: tmp3.levelUpBody, children: null };
  const items1 = [closure_10(GiftingBadgeLevelUpProgressDefault, { progress: simulatedProgress, currentTier, newTier, style: tmp3.levelUpProgress }), ];
  const obj4 = { style: tmp3.messageSection, children: null };
  const obj5 = { variant: "heading-xxl/bold", style: tmp3.centerText, children: null };
  const intl = getSystemLocale.intl;
  let str = newTier.name;
  if (str == null) {
    str = "";
  }
  obj5[2] = intl.format(messagesProxyDefault.k8MmO8, { tierName: str });
  const items2 = [closure_10(Text.Text, obj5), ];
  tmp7Result = null != nextTier && null != giftsToNextTier;
  if (tmp7Result) {
    tmp7Result = giftsToNextTier > 0;
  }
  if (tmp7Result) {
    const obj6 = { variant: "text-md/normal", color: "text-subtle", style: null, children: null };
    obj6[2] = tmp3.centerText;
    const intl2 = tmp9(1236).intl;
    const obj7 = { count: null, nextTierName: null };
    obj7[0] = giftsToNextTier;
    let str2 = nextTier.name;
    if (str2 == null) {
      str2 = "";
    }
    obj7[1] = str2;
    obj6[3] = intl2.format(tmp(2466)["6QVlxw"], obj7);
    tmp7Result = tmp7(tmp9(4442).Text, obj6);
  }
  items2[1] = tmp7Result;
  obj4[1] = items2;
  items1[1] = closure_11(View, obj4);
  obj2[1] = items1;
  items[1] = closure_11(View, obj2);
  obj[1] = items;
  const items3 = [closure_11(View, obj), closure_10(PostPurchaseFooter, { onSendGift })];
  obj[1] = items3;
  return closure_11(View, obj);
}
({ getRemainingGiftsToNextTier: closure_6, getTierForProgress: error, getNextTierForProgress: closure_8 } = getTierForProgress);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
let closure_12 = createCacheKey.createStyles((arg0) => {
  let obj = { screenContainer: { flex: 1 }, content: null, progressWrapper: null, messageSection: null, centerText: null, levelUpIconWrapper: null, levelUpBody: null, levelUpProgress: null, footer: null };
  obj = { flex: 1, alignItems: "center", justifyContent: "center", padding: ThemesDefault.space.PX_16 };
  obj[1] = obj;
  obj = { padding: ThemesDefault.space.PX_16, width: "100%", marginBottom: ThemesDefault.space.PX_24 };
  obj[2] = obj;
  obj[3] = { gap: ThemesDefault.space.PX_12, alignItems: "center", width: "100%", paddingHorizontal: ThemesDefault.space.PX_16 };
  obj[4] = { textAlign: "center" };
  obj1 = { gap: ThemesDefault.space.PX_12, alignItems: "center", width: "100%", paddingHorizontal: ThemesDefault.space.PX_16 };
  obj[5] = { paddingVertical: 26, paddingHorizontal: 74, marginBottom: ThemesDefault.space.PX_48 };
  const obj2 = { paddingVertical: 26, paddingHorizontal: 74, marginBottom: ThemesDefault.space.PX_48 };
  obj[6] = { gap: ThemesDefault.space.PX_12, alignItems: "center", width: "100%" };
  obj[7] = { maxWidth: 260 };
  const obj3 = { gap: ThemesDefault.space.PX_12, alignItems: "center", width: "100%" };
  obj[8] = { width: "100%", gap: ThemesDefault.space.PX_12, paddingHorizontal: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_16 + arg0 };
  return obj;
});
let result = require("set").fileFinishedImporting("modules/premium/native/gifting/GiftBadgePostPurchase.tsx");

export default function GiftBadgePostPurchase(arg0) {
  ({ currentProgress, onSendGift } = arg0);
  const effect = React.useEffect(() => {
    let obj = callback(4267);
    obj = { dismissAction: constants.INDIRECT_ACTION };
    const result = obj.UNSAFE_markDismissibleContentAsDismissed(callback(1377).DismissibleContent.NEW_GIFTING_BADGES_COACHMARK, obj);
  }, []);
  let obj = initialize;
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => {
    badgeById = badgeById.getBadgeById(callback(8503).BadgeId.GIFTING);
    let tiers;
    if (badgeById != null) {
      tiers = badgeById.tiers;
    }
    return tiers;
  });
  if (null == stateFromStores) {
    return null;
  } else {
    const tmp24 = callback2(stateFromStores, currentProgress);
    const sum = currentProgress + 1;
    const tmp26 = callback2(stateFromStores, sum);
    let key;
    if (tmp26 != null) {
      key = tmp26.key;
    }
    let key1;
    if (tmp24 != null) {
      key1 = tmp24.key;
    }
    const tmp8 = callback3(stateFromStores, sum);
    const tmp10 = callback(stateFromStores, sum);
    if (key !== key1) {
      if (null != tmp26) {
        obj = { simulatedProgress: null, currentTier: null, newTier: null, nextTier: null, giftsToNextTier: null, onSendGift: null };
        obj[0] = sum;
        obj[1] = tmp24;
        obj[2] = tmp26;
        obj[3] = tmp8;
        obj[4] = tmp10;
        obj[5] = onSendGift;
        let tmp11Result = callback4(LevelUpScreen, obj);
      }
      return tmp11Result;
    }
    if (1 === tmp10) {
      const intl2 = tmp2(1236).intl;
      let str2;
      if (tmp8 != null) {
        str2 = tmp8.name;
      }
      if (str2 == null) {
        str2 = "";
      }
      obj = { title: null, description: null, progressBarTitle: null, progress: null, currentTier: null, nextTier: null, onSendGift: null };
      obj1 = { nextTier: null };
      obj1[0] = str2;
      obj[0] = intl2.formatToPlainString(messagesProxyDefault.KjdBPz, obj1);
      const intl3 = tmp2(1236).intl;
      obj[1] = intl3.string(messagesProxyDefault.oqDrEM);
      const intl4 = tmp2(1236).intl;
      obj[2] = intl4.string(messagesProxyDefault["Ka5s+Q"]);
      obj[3] = sum;
      obj[4] = tmp26;
      obj[5] = tmp8;
      obj[6] = onSendGift;
      let obj2 = obj;
      const tmp18 = tmp26;
      const tmp19 = tmp8;
    } else {
      obj2 = { title: null, description: null, progressBarTitle: null, progress: null, currentTier: null, nextTier: null, onSendGift: null };
      const intl5 = tmp2(1236).intl;
      obj2[0] = intl5.string(messagesProxyDefault["/rBQud"]);
      const intl6 = tmp2(1236).intl;
      obj2[1] = intl6.string(messagesProxyDefault.DDQMlx);
      let name;
      if (tmp24 != null) {
        name = tmp24.name;
      }
      let str = "";
      if (null != name) {
        const intl = tmp2(1236).intl;
        let name1;
        if (tmp24 != null) {
          name1 = tmp24.name;
        }
        const obj3 = { tierName: null };
        obj3[0] = name1;
        str = intl.formatToPlainString(tmp27(2466).bwyQt8, obj3);
      }
      obj2[2] = str;
      obj2[3] = sum;
      obj2[4] = tmp26;
      obj2[5] = tmp8;
      obj2[6] = onSendGift;
      const tmp15 = tmp26;
      const tmp16 = tmp8;
      tmp27 = importDefault;
    }
    tmp11Result = callback4(InProgressScreen, obj2);
    const tmp11 = callback4;
    const tmp12 = InProgressScreen;
  }
};