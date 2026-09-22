// discord_app/modules/premium/native/gifting/GiftBadgePostPurchase.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import dismissible_content from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import _modDef2578 from "../../gifting/GiftingBadge.messages.js";
import DismissibleContentUnsafeUtils from "../../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import HapticUtils from "../../../haptics/HapticUtils.native.tsx";
import haptics_HapticFeedbackTypesDefault from "../../../haptics/HapticFeedbackTypes.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import BadgeId from "../../../../../discord_common/js/shared/shared-constants/BadgeId.tsx";
import GiftingBadgesUtils from "../../gifting/GiftingBadgesUtils.tsx";
import GiftingBadgeIconDefault from "../../gifting/native/views/GiftingBadgeIcon.tsx";
import GiftingBadgeProgressDefault from "../../gifting/native/views/GiftingBadgeProgress.tsx";
import GiftingBadgeLevelUpProgressDefault from "../../gifting/native/views/GiftingBadgeLevelUpProgress.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import BadgeDirectoryStore from "../../../badges/BadgeDirectoryStore.tsx";

require = fn;
function PostPurchaseFooter(onSendGift) {
  onSendGift = onSendGift.onSendGift;
  const items = [onSendGift];
  const callback = noop.useCallback(() => {
    ModalActionCreatorsDefault.pop();
    onSendGift();
  }, items);
  const obj = { style: closure_12(useSafeAreaInsetsDefault().bottom).footer, children: null };
  const callback1 = noop.useCallback(() => {
    ModalActionCreatorsDefault.pop();
    const rootNavigationRef = onSendGift(4615).getRootNavigationRef();
    if (rootNavigationRef != null) {
      rootNavigationRef.navigate("you");
    }
  }, []);
  const obj2 = { grow: true, variant: "primary", icon: null, text: null, onPress: null };
  const tmp = closure_12(useSafeAreaInsetsDefault().bottom);
  obj2.icon = closure_10(onSendGift(11305).GiftIcon, {
    size: "sm",
    color: nativeDefault.colors.CONTROL_PRIMARY_TEXT_DEFAULT,
  });
  const intl = onSendGift(1115).intl;
  obj2.text = intl.string(_modDef2578.g86YiI);
  obj2.onPress = callback;
  const items1 = [closure_10(onSendGift(5187).Button, obj2)];
  const obj4 = { grow: true, variant: "secondary", text: null, onPress: null };
  const intl2 = onSendGift(1115).intl;
  obj4.text = intl2.string(_modDef2578["sa/cfM"]);
  obj4.onPress = callback1;
  items1[1] = closure_10(onSendGift(5187).Button, obj4);
  obj.children = items1;
  return closure_11(View, obj);
}
function InProgressScreen(arg0) {
  ({ progress, title, progressBarTitle, description, currentTier, nextTier, onSendGift } = arg0);
  const tmp = closure_12(useSafeAreaInsetsDefault().bottom);
  const obj = { style: tmp.screenContainer, children: null };
  const obj2 = { style: tmp.content, children: null };
  const items = [
    closure_1_10(View, {
      style: tmp.progressWrapper,
      children: closure_1_10(GiftingBadgeProgressDefault, {
        progress,
        currentTier,
        nextTier,
        iconSize: 48,
        title: progressBarTitle,
      }),
    }),
  ];
  const obj4 = { style: tmp.messageSection, children: null };
  const items1 = [
    closure_1_10(Text_Text.Text, { variant: "heading-xxl/bold", style: tmp.centerText, children: title }),
    closure_1_10(Text_Text.Text, {
      variant: "text-md/medium",
      color: "text-subtle",
      style: tmp.centerText,
      children: description,
    }),
  ];
  obj4.children = items1;
  items[1] = closure_1_11(View, obj4);
  obj2.children = items;
  const items2 = [closure_1_11(View, obj2), closure_1_10(PostPurchaseFooter, { onSendGift })];
  obj.children = items2;
  return closure_1_11(View, obj);
}
function LevelUpScreen(arg0) {
  ({ newTier, nextTier, giftsToNextTier } = arg0);
  ({ simulatedProgress, currentTier, onSendGift } = arg0);
  const tmp3 = closure_12(useSafeAreaInsetsDefault().bottom);
  const isGiftingBadgeComplexArtEnabled =
    GiftingBadgesUtils.useIsGiftingBadgeComplexArtEnabled("GiftBadgePostPurchase");
  const giftingBadgeTierIconUrl = GiftingBadgesUtils.getGiftingBadgeTierIconUrl(
    newTier,
    isGiftingBadgeComplexArtEnabled,
  );
  const effect = noop.useEffect(() => {
    const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_HEAVY);
  }, []);
  const obj3 = { style: tmp3.screenContainer, children: null };
  const obj4 = { style: tmp3.content, children: null };
  const obj5 = { style: tmp3.levelUpIconWrapper, children: null };
  let tmp10Result = null != giftingBadgeTierIconUrl;
  if (tmp10Result) {
    const obj6 = { icon: giftingBadgeTierIconUrl, size: 140 };
    tmp10Result = closure_1_10(GiftingBadgeIconDefault, obj6);
  }
  obj5.children = tmp10Result;
  const items = [closure_1_10(View, obj5)];
  const obj7 = { style: tmp3.levelUpBody, children: null };
  const items1 = [
    closure_1_10(GiftingBadgeLevelUpProgressDefault, {
      progress: simulatedProgress,
      currentTier,
      newTier,
      style: tmp3.levelUpProgress,
    }),
  ];
  const obj9 = { style: tmp3.messageSection, children: null };
  const obj10 = { variant: "heading-xxl/bold", style: tmp3.centerText, children: null };
  const intl = util.intl;
  let str = newTier.name;
  if (str == null) {
    str = "";
  }
  obj10.children = intl.format(_modDef2578.k8MmO8, { tierName: str });
  const items2 = [closure_1_10(Text_Text.Text, obj10)];
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
    obj11.children = intl2.format(_modDef2578["6QVlxw"], obj12);
    tmp10Result2 = closure_1_10(Text_Text.Text, obj11);
  }
  items2[1] = tmp10Result2;
  obj9.children = items2;
  items1[1] = closure_1_11(View, obj9);
  obj7.children = items1;
  items[1] = closure_1_11(View, obj7);
  obj4.children = items;
  const items3 = [closure_1_11(View, obj4), closure_1_10(PostPurchaseFooter, { onSendGift })];
  obj3.children = items3;
  return closure_1_11(View, obj3);
}
const View = fn(17).View;
const GiftingBadgeConstants = fn(11304);
({
  getRemainingGiftsToNextTier: metroRequire,
  getTierForProgress: closure_7,
  getNextTierForProgress: closure_8,
} = GiftingBadgeConstants);
const ContentDismissActionType = fn(2039).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4757);
let closure_12 = createStyles.createStyles((arg0) => {
  const obj = {
    screenContainer: { flex: 1 },
    content: { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_16 },
    progressWrapper: null,
    messageSection: null,
    centerText: null,
    levelUpIconWrapper: null,
    levelUpBody: null,
    levelUpProgress: null,
    footer: null,
  };
  const obj2 = { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_16 };
  obj.progressWrapper = { padding: nativeDefault.space.PX_16, width: "100%", marginBottom: nativeDefault.space.PX_24 };
  const obj3 = { padding: nativeDefault.space.PX_16, width: "100%", marginBottom: nativeDefault.space.PX_24 };
  obj.messageSection = {
    gap: nativeDefault.space.PX_12,
    alignItems: "center",
    width: "100%",
    paddingHorizontal: nativeDefault.space.PX_16,
  };
  obj.centerText = { textAlign: "center" };
  const obj4 = {
    gap: nativeDefault.space.PX_12,
    alignItems: "center",
    width: "100%",
    paddingHorizontal: nativeDefault.space.PX_16,
  };
  obj.levelUpIconWrapper = { paddingVertical: 26, paddingHorizontal: 74, marginBottom: nativeDefault.space.PX_48 };
  const obj5 = { paddingVertical: 26, paddingHorizontal: 74, marginBottom: nativeDefault.space.PX_48 };
  obj.levelUpBody = { gap: nativeDefault.space.PX_12, alignItems: "center", width: "100%" };
  obj.levelUpProgress = { maxWidth: 260 };
  const obj6 = { gap: nativeDefault.space.PX_12, alignItems: "center", width: "100%" };
  obj.footer = {
    width: "100%",
    gap: nativeDefault.space.PX_12,
    paddingHorizontal: nativeDefault.space.PX_16,
    paddingBottom: nativeDefault.space.PX_16 + arg0,
  };
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/native/gifting/GiftBadgePostPurchase.tsx");

export default function GiftBadgePostPurchase(arg0) {
  ({ currentProgress, onSendGift } = arg0);
  const effect = noop.useEffect(() => {
    const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(
      dismissible_content.DismissibleContent.NEW_GIFTING_BADGES_COACHMARK,
      { dismissAction: constants.INDIRECT_ACTION },
    );
  }, []);
  const items = [BadgeDirectoryStore];
  const stateFromStores = initialize.useStateFromStores(items, () => {
    badgeById = badgeById.getBadgeById(BadgeId.BadgeId.GIFTING);
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
    const tmp8 = React6(stateFromStores, sum);
    const tmp10 = timestampProducer(stateFromStores, sum);
    if (key !== key1) {
      if (null != tmp26) {
        const obj2 = {
          simulatedProgress: sum,
          currentTier: tmp24,
          newTier: tmp26,
          nextTier: tmp8,
          giftsToNextTier: tmp10,
          onSendGift,
        };
        let tmp11Result = closure_1_10(LevelUpScreen, obj2);
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
      const obj3 = {
        title: null,
        description: null,
        progressBarTitle: null,
        progress: null,
        currentTier: null,
        nextTier: null,
        onSendGift: null,
      };
      const obj4 = { nextTier: str2 };
      obj3.title = intl2.formatToPlainString(_modDef2578.KjdBPz, obj4);
      const intl3 = util.intl;
      obj3.description = intl3.string(_modDef2578.oqDrEM);
      const intl4 = util.intl;
      obj3.progressBarTitle = intl4.string(_modDef2578["Ka5s+Q"]);
      obj3.progress = sum;
      obj3.currentTier = tmp26;
      obj3.nextTier = tmp8;
      obj3.onSendGift = onSendGift;
      let obj5 = obj3;
    } else {
      obj5 = {
        title: null,
        description: null,
        progressBarTitle: null,
        progress: null,
        currentTier: null,
        nextTier: null,
        onSendGift: null,
      };
      const intl5 = util.intl;
      obj5.title = intl5.string(_modDef2578["/rBQud"]);
      const intl6 = util.intl;
      obj5.description = intl6.string(_modDef2578.DDQMlx);
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
        str = intl.formatToPlainString(_modDef2578.bwyQt8, obj6);
      }
      obj5.progressBarTitle = str;
      obj5.progress = sum;
      obj5.currentTier = tmp26;
      obj5.nextTier = tmp8;
      obj5.onSendGift = onSendGift;
    }
    tmp11Result = closure_1_10(InProgressScreen, obj5);
  }
}
