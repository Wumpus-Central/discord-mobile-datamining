// === Module 12731: GiftBadgePostPurchase ===

// Module 12731 (GiftBadgePostPurchase)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import _modDef2661 from "module_2661" /* 2661 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 5056 */;
import Text_Text from "Text/Text" /* 5086 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5940 */;
import GiftingBadgesUtils from "GiftingBadgesUtils" /* 10085 */;
import GiftingBadgeIconDefault from "GiftingBadgeIcon" /* 10091 */;
import GiftingBadgeProgressDefault from "GiftingBadgeProgress" /* 12733 */;
import GiftingBadgeLevelUpProgressDefault from "GiftingBadgeLevelUpProgress" /* 12734 */;
import noop from "module_19" /* 19 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8292 */;

const require = globalThis.__r;

const initialize = formatToPlainString(504);
require = fn;
const View = fn(17).View;
const GiftingBadgeConstants = fn(12732);
({ getRemainingGiftsToNextTier: metroRequire, getTierForProgress: closure_7, getNextTierForProgress: closure_8 } = GiftingBadgeConstants);
const ContentDismissActionType = fn(2060).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5090);
let closure_12 = createStyles.createStyles((arg0) => {
  const obj = { screenContainer: { flex: 1 }, content: { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_16 }, progressWrapper: null, messageSection: null, centerText: null, levelUpIconWrapper: null, levelUpBody: null, levelUpProgress: null, footer: null };
  const obj2 = { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_16 };
  obj.progressWrapper = { padding: nativeDefault.space.PX_16, width: "100%", marginBottom: nativeDefault.space.PX_24 };
  const obj3 = { padding: nativeDefault.space.PX_16, width: "100%", marginBottom: nativeDefault.space.PX_24 };
  obj.messageSection = { gap: nativeDefault.space.PX_12, alignItems: "center", width: "100%", paddingHorizontal: nativeDefault.space.PX_16 };
  obj.centerText = { textAlign: "center" };
  const obj4 = { gap: nativeDefault.space.PX_12, alignItems: "center", width: "100%", paddingHorizontal: nativeDefault.space.PX_16 };
  obj.levelUpIconWrapper = { paddingVertical: 26, paddingHorizontal: 74, marginBottom: nativeDefault.space.PX_48 };
  const obj5 = { paddingVertical: 26, paddingHorizontal: 74, marginBottom: nativeDefault.space.PX_48 };
  obj.levelUpBody = { gap: nativeDefault.space.PX_12, alignItems: "center", width: "100%" };
  obj.levelUpProgress = { maxWidth: 260 };
  const obj6 = { gap: nativeDefault.space.PX_12, alignItems: "center", width: "100%" };
  obj.footer = { width: "100%", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 + arg0 };
  return obj;
});
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function PostPurchaseFooter(onSendGift) {
  const cResult = onSendGift(576).c(11);
  onSendGift = onSendGift.onSendGift;
  const tmp5 = closure_12(useSafeAreaInsetsDefault().bottom);
  if (cResult[0] !== onSendGift) {
    const fn = function o() {
      ModalActionCreatorsDefault.pop();
      onSendGift();
    };
    cResult[0] = onSendGift;
    cResult[1] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class T {
      constructor() {
        arr = closure_1_1(closure_1_2[11]);
        arr1 = arr.pop();
        obj = onSendGift(closure_1_2[12]);
        rootNavigationRef = obj.getRootNavigationRef();
        if (rootNavigationRef != null) {
          str = "you";
          navigateResult = rootNavigationRef.navigate("you");
        }
        return;
      }
    }
    cResult[2] = T;
  } else {
    class T {
      constructor() {
        arr = closure_1_1(closure_1_2[11]);
        arr1 = arr.pop();
        obj = onSendGift(closure_1_2[12]);
        rootNavigationRef = obj.getRootNavigationRef();
        if (rootNavigationRef != null) {
          str = "you";
          navigateResult = rootNavigationRef.navigate("you");
        }
        return;
      }
    }
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class T {
      constructor() {
        arr = closure_1_1(closure_1_2[11]);
        arr1 = arr.pop();
        obj = onSendGift(closure_1_2[12]);
        rootNavigationRef = obj.getRootNavigationRef();
        if (rootNavigationRef != null) {
          str = "you";
          navigateResult = rootNavigationRef.navigate("you");
        }
        return;
      }
    }
    const obj2 = { size: "sm", color: nativeDefault.colors.CONTROL_PRIMARY_TEXT_DEFAULT };
    const tmp10 = closure_10(tmp(11561).GiftIcon, obj2);
    const intl = tmp(1126).intl;
    const stringResult = intl.string(_modDef2661.g86YiI);
    cResult[3] = tmp10;
    cResult[4] = stringResult;
    let tmp9 = stringResult;
    const tmp8 = tmp10;
  } else {
    class T {
      constructor() {
        arr = closure_1_1(closure_1_2[11]);
        arr1 = arr.pop();
        obj = onSendGift(closure_1_2[12]);
        rootNavigationRef = obj.getRootNavigationRef();
        if (rootNavigationRef != null) {
          str = "you";
          navigateResult = rootNavigationRef.navigate("you");
        }
        return;
      }
    }
    tmp9 = cResult[4];
  }
  if (cResult[5] !== tmp6) {
    class T {
      constructor() {
        arr = closure_1_1(closure_1_2[11]);
        arr1 = arr.pop();
        obj = onSendGift(closure_1_2[12]);
        rootNavigationRef = obj.getRootNavigationRef();
        if (rootNavigationRef != null) {
          str = "you";
          navigateResult = rootNavigationRef.navigate("you");
        }
        return;
      }
    }
    const obj3 = { grow: true, variant: "primary", icon: tmp8, text: tmp9, onPress: tmp6 };
    const tmp13 = closure_10(tmp(5375).Button, obj3);
    cResult[5] = tmp6;
    cResult[6] = tmp13;
  } else {
    class T {
      constructor() {
        arr = closure_1_1(closure_1_2[11]);
        arr1 = arr.pop();
        obj = onSendGift(closure_1_2[12]);
        rootNavigationRef = obj.getRootNavigationRef();
        if (rootNavigationRef != null) {
          str = "you";
          navigateResult = rootNavigationRef.navigate("you");
        }
        return;
      }
    }
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class T {
      constructor() {
        arr = closure_1_1(closure_1_2[11]);
        arr1 = arr.pop();
        obj = onSendGift(closure_1_2[12]);
        rootNavigationRef = obj.getRootNavigationRef();
        if (rootNavigationRef != null) {
          str = "you";
          navigateResult = rootNavigationRef.navigate("you");
        }
        return;
      }
    }
    const obj4 = { grow: true, variant: "secondary", text: null, onPress: null };
    const intl2 = tmp(1126).intl;
    obj4.text = intl2.string(_modDef2661["sa/cfM"]);
    obj4.onPress = T;
    const tmp15 = closure_10(tmp(5375).Button, obj4);
    cResult[7] = tmp15;
    const tmp14 = tmp15;
  } else {
    class T {
      constructor() {
        arr = closure_1_1(closure_1_2[11]);
        arr1 = arr.pop();
        obj = onSendGift(closure_1_2[12]);
        rootNavigationRef = obj.getRootNavigationRef();
        if (rootNavigationRef != null) {
          str = "you";
          navigateResult = rootNavigationRef.navigate("you");
        }
        return;
      }
    }
  }
  if (cResult[8] === tmp5.footer) {
    class T {
      constructor() {
        arr = closure_1_1(closure_1_2[11]);
        arr1 = arr.pop();
        obj = onSendGift(closure_1_2[12]);
        rootNavigationRef = obj.getRootNavigationRef();
        if (rootNavigationRef != null) {
          str = "you";
          navigateResult = rootNavigationRef.navigate("you");
        }
        return;
      }
    }
    return tmp16;
  }
  const obj5 = { style: tmp5.footer, children: null };
  const items = [tmp12, tmp14];
  obj5.children = items;
  tmp16 = closure_11(View, obj5);
  cResult[8] = tmp5.footer;
  cResult[9] = tmp12;
  cResult[10] = tmp16;
  const obj = onSendGift(576);
}) : (function PostPurchaseFooter(onSendGift) {
  onSendGift = onSendGift.onSendGift;
  const items = [onSendGift];
  const callback = noop.useCallback(() => {
    ModalActionCreatorsDefault.pop();
    onSendGift();
  }, items);
  const obj = { style: closure_12(useSafeAreaInsetsDefault().bottom).footer, children: null };
  const callback1 = noop.useCallback(() => {
    ModalActionCreatorsDefault.pop();
    const rootNavigationRef = onSendGift(4937).getRootNavigationRef();
    if (rootNavigationRef != null) {
      rootNavigationRef.navigate("you");
    }
  }, []);
  const obj2 = { grow: true, variant: "primary", icon: null, text: null, onPress: null };
  const tmp = closure_12(useSafeAreaInsetsDefault().bottom);
  obj2.icon = closure_10(onSendGift(11561).GiftIcon, { size: "sm", color: nativeDefault.colors.CONTROL_PRIMARY_TEXT_DEFAULT });
  const intl = onSendGift(1126).intl;
  obj2.text = intl.string(_modDef2661.g86YiI);
  obj2.onPress = callback;
  const items1 = [closure_10(onSendGift(5375).Button, obj2), ];
  const obj4 = { grow: true, variant: "secondary", text: null, onPress: null };
  const intl2 = onSendGift(1126).intl;
  obj4.text = intl2.string(_modDef2661["sa/cfM"]);
  obj4.onPress = callback1;
  items1[1] = closure_10(onSendGift(5375).Button, obj4);
  obj.children = items1;
  return closure_11(View, obj);
});
ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function InProgressScreen(arg0) {
  const cResult = c.c(28);
  ({ progress, title, progressBarTitle, description, currentTier, nextTier, onSendGift } = arg0);
  const tmp5 = closure_12(useSafeAreaInsetsDefault().bottom);
  if (cResult[0] === currentTier) {
    if (cResult[1] === nextTier) {
      if (cResult[2] === progress) {
        if (cResult[3] === progressBarTitle) {
          let tmp6 = cResult[4];
        }
        if (cResult[5] === tmp5.progressWrapper) {
          if (cResult[6] === tmp6) {
            let tmp8 = cResult[7];
          }
          if (cResult[8] === tmp5.centerText) {
            if (cResult[9] === title) {
              let tmp12 = cResult[10];
            }
            if (cResult[11] === description) {
              if (cResult[12] === tmp5.centerText) {
                let tmp15 = cResult[13];
              }
              if (cResult[14] === tmp5.messageSection) {
                if (cResult[15] === tmp12) {
                  if (cResult[16] === tmp15) {
                    let tmp18 = cResult[17];
                  }
                  if (cResult[18] === tmp5.content) {
                    if (cResult[19] === tmp8) {
                      if (cResult[20] === tmp18) {
                        let tmp22 = cResult[21];
                      }
                      if (cResult[22] !== onSendGift) {
                        const obj2 = { onSendGift };
                        const tmp29 = collapsed(closure_13, obj2);
                        cResult[22] = onSendGift;
                        cResult[23] = tmp29;
                        let tmp26 = tmp29;
                      } else {
                        tmp26 = cResult[23];
                      }
                      if (cResult[24] === tmp5.screenContainer) {
                        if (cResult[25] === tmp22) {
                          if (cResult[26] === tmp26) {
                            let tmp30 = cResult[27];
                          }
                          return tmp30;
                        }
                      }
                      const obj3 = { style: tmp5.screenContainer, children: null };
                      const items = [tmp22, tmp26];
                      obj3.children = items;
                      const tmp33 = closure_1_11(View, obj3);
                      cResult[24] = tmp5.screenContainer;
                      cResult[25] = tmp22;
                      cResult[26] = tmp26;
                      cResult[27] = tmp33;
                      tmp30 = tmp33;
                    }
                  }
                  const obj4 = { style: tmp5.content, children: null };
                  const items1 = [tmp8, tmp18];
                  obj4.children = items1;
                  const tmp25 = closure_1_11(View, obj4);
                  cResult[18] = tmp5.content;
                  cResult[19] = tmp8;
                  cResult[20] = tmp18;
                  cResult[21] = tmp25;
                  tmp22 = tmp25;
                }
              }
              const obj5 = { style: tmp5.messageSection, children: null };
              const items2 = [tmp12, tmp15];
              obj5.children = items2;
              const tmp21 = closure_1_11(View, obj5);
              cResult[14] = tmp5.messageSection;
              cResult[15] = tmp12;
              cResult[16] = tmp15;
              cResult[17] = tmp21;
              tmp18 = tmp21;
            }
            const obj6 = { variant: "text-md/medium", color: "text-subtle", style: tmp5.centerText, children: description };
            const tmp17 = collapsed(Text_Text.Text, obj6);
            cResult[11] = description;
            cResult[12] = tmp5.centerText;
            cResult[13] = tmp17;
            tmp15 = tmp17;
          }
          const obj7 = { variant: "heading-xxl/bold", style: tmp5.centerText, children: title };
          const tmp14 = collapsed(Text_Text.Text, obj7);
          cResult[8] = tmp5.centerText;
          cResult[9] = title;
          cResult[10] = tmp14;
          tmp12 = tmp14;
        }
        const obj8 = { style: tmp5.progressWrapper, children: tmp6 };
        const tmp11 = collapsed(View, obj8);
        cResult[5] = tmp5.progressWrapper;
        cResult[6] = tmp6;
        cResult[7] = tmp11;
        tmp8 = tmp11;
      }
    }
  }
  const tmp7 = collapsed(GiftingBadgeProgressDefault, { progress, currentTier, nextTier, iconSize: 48, title: progressBarTitle });
  cResult[0] = currentTier;
  cResult[1] = nextTier;
  cResult[2] = progress;
  cResult[3] = progressBarTitle;
  cResult[4] = tmp7;
  tmp6 = tmp7;
}) : (function InProgressScreen(arg0) {
  ({ progress, title, progressBarTitle, description, currentTier, nextTier, onSendGift } = arg0);
  const tmp = closure_12(useSafeAreaInsetsDefault().bottom);
  const obj = { style: tmp.screenContainer, children: null };
  const obj2 = { style: tmp.content, children: null };
  const items = [collapsed(View, { style: tmp.progressWrapper, children: collapsed(GiftingBadgeProgressDefault, { progress, currentTier, nextTier, iconSize: 48, title: progressBarTitle }) }), ];
  const obj4 = { style: tmp.messageSection, children: null };
  const items1 = [collapsed(Text_Text.Text, { variant: "heading-xxl/bold", style: tmp.centerText, children: title }), collapsed(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", style: tmp.centerText, children: description })];
  obj4.children = items1;
  items[1] = closure_1_11(View, obj4);
  obj2.children = items;
  const items2 = [closure_1_11(View, obj2), collapsed(closure_13, { onSendGift })];
  obj.children = items2;
  return closure_1_11(View, obj);
});
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function LevelUpScreen(arg0) {
  const cResult = c.c(43);
  ({ simulatedProgress, currentTier, newTier, nextTier, giftsToNextTier, onSendGift } = arg0);
  const tmp5 = closure_12(useSafeAreaInsetsDefault().bottom);
  const isGiftingBadgeComplexArtEnabled = GiftingBadgesUtils.useIsGiftingBadgeComplexArtEnabled("GiftBadgePostPurchase");
  if (cResult[0] === isGiftingBadgeComplexArtEnabled) {
    if (cResult[1] === newTier) {
      let tmp7 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      class I {
        constructor() {
          obj = closure_1_0(closure_1_2[20]);
          result = obj.triggerHapticFeedback(closure_1_1(closure_1_2[21]).IMPACT_HEAVY);
          return;
        }
      }
      const items = [];
      cResult[3] = I;
      cResult[4] = items;
      let tmp11 = items;
    } else {
      class I {
        constructor() {
          obj = closure_1_0(closure_1_2[20]);
          result = obj.triggerHapticFeedback(closure_1_1(closure_1_2[21]).IMPACT_HEAVY);
          return;
        }
      }
      tmp11 = cResult[4];
    }
    const effect = noop.useEffect(I, tmp11);
    let tmp15 = null != nextTier && null != giftsToNextTier;
    if (tmp15) {
      class I {
        constructor() {
          obj = closure_1_0(closure_1_2[20]);
          result = obj.triggerHapticFeedback(closure_1_1(closure_1_2[21]).IMPACT_HEAVY);
          return;
        }
      }
      tmp15 = giftsToNextTier > 0;
    }
    ({ screenContainer, content } = tmp5);
    if (cResult[5] !== tmp7) {
      class I {
        constructor() {
          obj = closure_1_0(closure_1_2[20]);
          result = obj.triggerHapticFeedback(closure_1_1(closure_1_2[21]).IMPACT_HEAVY);
          return;
        }
      }
      if (tmp17) {
        class I {
          constructor() {
            obj = closure_1_0(closure_1_2[20]);
            result = obj.triggerHapticFeedback(closure_1_1(closure_1_2[21]).IMPACT_HEAVY);
            return;
          }
        }
        const obj3 = { icon: tmp7, size: 140 };
        tmp17 = collapsed(GiftingBadgeIconDefault, obj3);
      }
      cResult[5] = tmp7;
      cResult[6] = tmp17;
    } else {
      class I {
        constructor() {
          obj = closure_1_0(closure_1_2[20]);
          result = obj.triggerHapticFeedback(closure_1_1(closure_1_2[21]).IMPACT_HEAVY);
          return;
        }
      }
    }
    if (cResult[7] === tmp5.levelUpIconWrapper) {
      class I {
        constructor() {
          obj = closure_1_0(closure_1_2[20]);
          result = obj.triggerHapticFeedback(closure_1_1(closure_1_2[21]).IMPACT_HEAVY);
          return;
        }
      }
      if (cResult[10] === currentTier) {
        class I {
          constructor() {
            obj = closure_1_0(closure_1_2[20]);
            result = obj.triggerHapticFeedback(closure_1_1(closure_1_2[21]).IMPACT_HEAVY);
            return;
          }
        }
      }
      const obj4 = { progress: simulatedProgress, currentTier, newTier, style: tmp5.levelUpProgress };
      const tmp24 = collapsed(GiftingBadgeLevelUpProgressDefault, obj4);
      cResult[10] = currentTier;
      cResult[11] = newTier;
      cResult[12] = simulatedProgress;
      cResult[13] = tmp5.levelUpProgress;
      cResult[14] = tmp24;
    }
    const obj5 = { style: tmp5.levelUpIconWrapper, children: tmp16 };
    const tmp21 = collapsed(View, obj5);
    cResult[7] = tmp5.levelUpIconWrapper;
    cResult[8] = tmp16;
    cResult[9] = tmp21;
  }
  const giftingBadgeTierIconUrl = GiftingBadgesUtils.getGiftingBadgeTierIconUrl(newTier, isGiftingBadgeComplexArtEnabled);
  cResult[0] = isGiftingBadgeComplexArtEnabled;
  cResult[1] = newTier;
  cResult[2] = giftingBadgeTierIconUrl;
  tmp7 = giftingBadgeTierIconUrl;
  const tmpResult = GiftingBadgesUtils;
}) : (function LevelUpScreen(arg0) {
  ({ newTier, nextTier, giftsToNextTier } = arg0);
  ({ simulatedProgress, currentTier, onSendGift } = arg0);
  const tmp3 = closure_12(useSafeAreaInsetsDefault().bottom);
  const isGiftingBadgeComplexArtEnabled = GiftingBadgesUtils.useIsGiftingBadgeComplexArtEnabled("GiftBadgePostPurchase");
  const giftingBadgeTierIconUrl = GiftingBadgesUtils.getGiftingBadgeTierIconUrl(newTier, isGiftingBadgeComplexArtEnabled);
  const effect = noop.useEffect(() => {
    const result = require("HapticUtils").triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_HEAVY);
  }, []);
  const obj3 = { style: tmp3.screenContainer, children: null };
  const obj4 = { style: tmp3.content, children: null };
  const obj5 = { style: tmp3.levelUpIconWrapper, children: null };
  let tmp10Result = null != giftingBadgeTierIconUrl;
  if (tmp10Result) {
    const obj6 = { icon: giftingBadgeTierIconUrl, size: 140 };
    tmp10Result = collapsed(GiftingBadgeIconDefault, obj6);
  }
  obj5.children = tmp10Result;
  const items = [collapsed(View, obj5), ];
  const obj7 = { style: tmp3.levelUpBody, children: null };
  const items1 = [collapsed(GiftingBadgeLevelUpProgressDefault, { progress: simulatedProgress, currentTier, newTier, style: tmp3.levelUpProgress }), ];
  const obj9 = { style: tmp3.messageSection, children: null };
  const obj10 = { variant: "heading-xxl/bold", style: tmp3.centerText, children: null };
  const intl = util.intl;
  let str = newTier.name;
  if (str == null) {
    str = "";
  }
  obj10.children = intl.format(_modDef2661.k8MmO8, { tierName: str });
  const items2 = [collapsed(Text_Text.Text, obj10), ];
  let tmp10Result2 = null != nextTier && null != giftsToNextTier;
  if (tmp10Result2) {
    tmp10Result2 = giftsToNextTier > 0;
  }
  if (tmp10Result2) {
    const obj11 = { variant: "text-md/normal", color: "text-subtle", style: tmp3.centerText, children: null };
    const intl2 = util.intl;
    const obj12 = { count: giftsToNextTier, nextTierName: null };
    let str2 = nextTier.name;
    if (str2 == null) {
      str2 = "";
    }
    obj12.nextTierName = str2;
    obj11.children = intl2.format(_modDef2661["6QVlxw"], obj12);
    tmp10Result2 = collapsed(Text_Text.Text, obj11);
  }
  items2[1] = tmp10Result2;
  obj9.children = items2;
  items1[1] = closure_1_11(View, obj9);
  obj7.children = items1;
  items[1] = closure_1_11(View, obj7);
  obj4.children = items;
  const items3 = [closure_1_11(View, obj4), collapsed(closure_13, { onSendGift })];
  obj3.children = items3;
  return closure_1_11(View, obj3);
});
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/native/gifting/GiftBadgePostPurchase.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GiftBadgePostPurchase(arg0) {
  let formatToPlainString = require;
  let obj = dependencyMap;
  const cResult = c.c(34);
  ({ currentProgress, onSendGift } = arg0);
  let str = "react.memo_cache_sentinel";
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      const result = require("DismissibleContentUnsafeUtils").UNSAFE_markDismissibleContentAsDismissed(require("dismissible_content").DismissibleContent.NEW_GIFTING_BADGES_COACHMARK, { dismissAction: constants.INDIRECT_ACTION });
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp2 = fn;
    tmp3 = items;
  } else {
    [tmp2, tmp3] = cResult;
  }
  const effect = noop.useEffect(tmp2, tmp3);
  if (cResult[2] === Symbol.for(str)) {
    const items1 = [BadgeDirectoryStore];
    const fn2 = function v() {
      badgeById = badgeById.getBadgeById(require("BadgeId").BadgeId.GIFTING);
      let tiers;
      if (badgeById != null) {
        tiers = badgeById.tiers;
      }
      return tiers;
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    let tmp6 = fn2;
    let tmp5 = items1;
  } else {
    tmp5 = cResult[2];
    tmp6 = cResult[3];
  }
  const stateFromStores = initialize.useStateFromStores(tmp5, tmp6);
  if (null == stateFromStores) {
    return null;
  } else {
    if (cResult[4] === currentProgress) {
      if (cResult[5] === onSendGift) {
        if (cResult[6] === stateFromStores) {
          const _Symbol4 = Symbol;
          if (cResult[14] !== Symbol.for("react.early_return_sentinel")) {
            return tmp16;
          } else {
            if (cResult[25] === tmp9) {
              if (cResult[26] === onSendGift) {
                if (cResult[27] === tmp11) {
                  if (cResult[28] === tmp10) {
                    if (cResult[29] === tmp13) {
                      if (cResult[30] === tmp14) {
                        if (cResult[31] === tmp15) {
                          if (cResult[32] === tmp12) {
                            let tmp60 = cResult[33];
                          }
                          return tmp60;
                        }
                      }
                    }
                  }
                }
              }
            }
            const obj3 = { title: tmp13, description: tmp14, progressBarTitle: tmp15, progress: tmp11, currentTier: tmp12, nextTier: tmp10, onSendGift };
            const tmp62 = collapsed(tmp9, obj3);
            cResult[25] = tmp9;
            cResult[26] = onSendGift;
            cResult[27] = tmp11;
            cResult[28] = tmp10;
            cResult[29] = tmp13;
            cResult[30] = tmp14;
            cResult[31] = tmp15;
            cResult[32] = tmp12;
            cResult[33] = tmp62;
            tmp60 = tmp62;
          }
        }
      }
    }
    const _Symbol = Symbol;
    const tmp19 = React5(stateFromStores, currentProgress);
    const sum = currentProgress + 1;
    if (cResult[15] === sum) {
      if (cResult[16] === stateFromStores) {
        let tmp21 = cResult[17];
      }
      if (tmp21 != null) {
        const key = tmp21.key;
      }
      if (tmp19 != null) {
        const key2 = tmp19.key;
      }
      const tmp24 = closure_1_8(stateFromStores, sum);
      if (cResult[18] === sum) {
        if (cResult[19] === stateFromStores) {
          let tmp25 = cResult[20];
        }
        if (key !== key2) {
          if (null != tmp21) {
            const obj4 = { simulatedProgress: sum, currentTier: tmp19, newTier: tmp21, nextTier: tmp24, giftsToNextTier: tmp25, onSendGift };
            let tmp33Result = collapsed(closure_15, obj4);
            let tmp38;
            let tmp39;
            let tmp40;
            let tmp41;
            cResult[4] = currentProgress;
            cResult[5] = onSendGift;
            cResult[6] = stateFromStores;
            cResult[7] = tmp41;
            cResult[8] = tmp24;
            cResult[9] = sum;
            cResult[10] = tmp21;
            cResult[11] = tmp40;
            cResult[12] = tmp39;
            cResult[13] = tmp38;
            cResult[14] = tmp33Result;
          }
          const _Symbol3 = Symbol;
          if (cResult[23] === Symbol.for(str)) {
            const intl3 = util.intl;
            const stringResult = intl3.string(_modDef2661["/rBQud"]);
            const intl4 = util.intl;
            str = intl4.string(_modDef2661.DDQMlx);
            cResult[23] = stringResult;
            cResult[24] = str;
            let tmp44 = str;
            let tmp43 = stringResult;
          } else {
            tmp43 = cResult[23];
            tmp44 = cResult[24];
          }
          let name;
          if (tmp19 != null) {
            name = tmp19.name;
          }
          let str4 = "";
          if (null != name) {
            const intl5 = util.intl;
            formatToPlainString = intl5.formatToPlainString;
            let name1;
            if (tmp19 != null) {
              name1 = tmp19.name;
            }
            obj = { tierName: name1 };
            str4 = formatToPlainString(_modDef2661.bwyQt8, obj);
          }
          tmp38 = str4;
          tmp33Result = forResult;
          tmp39 = tmp44;
          tmp40 = tmp43;
          tmp41 = closure_14;
        }
        if (1 === tmp25) {
          const intl6 = util.intl;
          let str3;
          if (tmp24 != null) {
            str3 = tmp24.name;
          }
          if (str3 == null) {
            str3 = "";
          }
          const obj5 = { nextTier: str3 };
          const _Symbol2 = Symbol;
          if (cResult[21] === Symbol.for(str)) {
            const intl = util.intl;
            const stringResult1 = intl.string(_modDef2661.oqDrEM);
            const intl2 = util.intl;
            const stringResult2 = intl2.string(_modDef2661["Ka5s+Q"]);
            cResult[21] = stringResult1;
            cResult[22] = stringResult2;
            let tmp30 = stringResult2;
            let tmp29 = stringResult1;
          } else {
            tmp29 = cResult[21];
            tmp30 = cResult[22];
          }
          const obj6 = { title: intl6.formatToPlainString(_modDef2661.KjdBPz, obj5), description: tmp29, progressBarTitle: tmp30, progress: sum, currentTier: tmp21, nextTier: tmp24, onSendGift };
          tmp33Result = collapsed(closure_14, obj6);
          const formatToPlainStringResult1 = intl6.formatToPlainString(_modDef2661.KjdBPz, obj5);
        }
      }
      const tmp27 = timestampProducer(stateFromStores, sum);
      cResult[18] = sum;
      cResult[19] = stateFromStores;
      cResult[20] = tmp27;
      tmp25 = tmp27;
    }
    const tmp18Result = React5(stateFromStores, sum);
    cResult[15] = sum;
    cResult[16] = stateFromStores;
    cResult[17] = tmp18Result;
    tmp21 = tmp18Result;
    forResult = Symbol.for("react.early_return_sentinel");
  }
  const formatToPlainStringResult = initialize;
}) : (function GiftBadgePostPurchase(arg0) {
  ({ currentProgress, onSendGift } = arg0);
  const effect = noop.useEffect(() => {
    const result = require("DismissibleContentUnsafeUtils").UNSAFE_markDismissibleContentAsDismissed(require("dismissible_content").DismissibleContent.NEW_GIFTING_BADGES_COACHMARK, { dismissAction: constants.INDIRECT_ACTION });
  }, []);
  const items = [BadgeDirectoryStore];
  const stateFromStores = initialize.useStateFromStores(items, () => {
    badgeById = badgeById.getBadgeById(require("BadgeId").BadgeId.GIFTING);
    let tiers;
    if (badgeById != null) {
      tiers = badgeById.tiers;
    }
    return tiers;
  });
  if (null == stateFromStores) {
    return null;
  } else {
    const tmp24 = React5(stateFromStores, currentProgress);
    const sum = currentProgress + 1;
    const tmp26 = React5(stateFromStores, sum);
    let key;
    if (tmp26 != null) {
      key = tmp26.key;
    }
    let key1;
    if (tmp24 != null) {
      key1 = tmp24.key;
    }
    const tmp8 = closure_1_8(stateFromStores, sum);
    const tmp10 = timestampProducer(stateFromStores, sum);
    if (key !== key1) {
      if (null != tmp26) {
        const obj2 = { simulatedProgress: sum, currentTier: tmp24, newTier: tmp26, nextTier: tmp8, giftsToNextTier: tmp10, onSendGift };
        let tmp11Result = collapsed(closure_15, obj2);
      }
      return tmp11Result;
    }
    if (1 === tmp10) {
      const intl2 = util.intl;
      let str2;
      if (tmp8 != null) {
        str2 = tmp8.name;
      }
      if (str2 == null) {
        str2 = "";
      }
      const obj3 = { title: null, description: null, progressBarTitle: null, progress: null, currentTier: null, nextTier: null, onSendGift: null };
      const obj4 = { nextTier: str2 };
      obj3.title = intl2.formatToPlainString(_modDef2661.KjdBPz, obj4);
      const intl3 = util.intl;
      obj3.description = intl3.string(_modDef2661.oqDrEM);
      const intl4 = util.intl;
      obj3.progressBarTitle = intl4.string(_modDef2661["Ka5s+Q"]);
      obj3.progress = sum;
      obj3.currentTier = tmp26;
      obj3.nextTier = tmp8;
      obj3.onSendGift = onSendGift;
      let obj5 = obj3;
    } else {
      obj5 = { title: null, description: null, progressBarTitle: null, progress: null, currentTier: null, nextTier: null, onSendGift: null };
      const intl5 = util.intl;
      obj5.title = intl5.string(_modDef2661["/rBQud"]);
      const intl6 = util.intl;
      obj5.description = intl6.string(_modDef2661.DDQMlx);
      let name;
      if (tmp24 != null) {
        name = tmp24.name;
      }
      let str = "";
      if (null != name) {
        const intl = util.intl;
        let name1;
        if (tmp24 != null) {
          name1 = tmp24.name;
        }
        const obj6 = { tierName: name1 };
        str = intl.formatToPlainString(_modDef2661.bwyQt8, obj6);
      }
      obj5.progressBarTitle = str;
      obj5.progress = sum;
      obj5.currentTier = tmp26;
      obj5.nextTier = tmp8;
      obj5.onSendGift = onSendGift;
    }
    tmp11Result = collapsed(closure_14, obj5);
  }
});