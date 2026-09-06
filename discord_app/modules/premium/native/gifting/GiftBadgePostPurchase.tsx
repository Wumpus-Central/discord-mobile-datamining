// discord_app/modules/premium/native/gifting/GiftBadgePostPurchase.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import dismissible_content from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import _modDef2492 from "../../gifting/GiftingBadge.messages.js";
import DismissibleContentUnsafeUtils from "../../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import HapticUtils from "../../../haptics/HapticUtils.native.tsx";
import haptics_HapticFeedbackTypesDefault from "../../../haptics/HapticFeedbackTypes.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import BadgeId from "../../../../../discord_common/js/shared/shared-constants/BadgeId.tsx";
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
    let arr = ModalActionCreatorsDefault;
    arr = arr.pop();
    onSendGift();
  }, items);
  let obj = { style: closure_12(useSafeAreaInsetsDefault().bottom).footer, children: null };
  const callback1 = noop.useCallback(() => {
    let arr = ModalActionCreatorsDefault;
    arr = arr.pop();
    const rootNavigationRef = onSendGift(4418).getRootNavigationRef();
    if (rootNavigationRef != null) {
      rootNavigationRef.navigate("you");
    }
  }, []);
  obj = { grow: true, variant: "primary", icon: null, text: null, onPress: null };
  obj = { size: "sm", color: nativeDefault.colors.CONTROL_PRIMARY_TEXT_DEFAULT };
  obj.icon = closure_10(onSendGift(11030).GiftIcon, obj);
  const intl = onSendGift(1114).intl;
  obj.text = intl.string(_modDef2492.g86YiI);
  obj.onPress = callback;
  const items1 = [closure_10(onSendGift(4975).Button, obj)];
  const obj1 = { grow: true, variant: "secondary", text: null, onPress: null };
  const intl2 = onSendGift(1114).intl;
  obj1.text = intl2.string(_modDef2492["sa/cfM"]);
  obj1.onPress = callback1;
  items1[1] = closure_10(onSendGift(4975).Button, obj1);
  obj.children = items1;
  return closure_11(View, obj);
}
function InProgressScreen(arg0) {
  ({ progress, title, progressBarTitle, description, currentTier, nextTier, onSendGift } = arg0);
  const tmp = closure_12(useSafeAreaInsetsDefault().bottom);
  let obj = { style: tmp.screenContainer, children: null };
  obj = { style: tmp.content, children: null };
  obj = {
    style: tmp.progressWrapper,
    children: closure_1_10(GiftingBadgeProgressDefault, {
      progress,
      currentTier,
      nextTier,
      iconSize: 48,
      title: progressBarTitle,
    }),
  };
  const items = [closure_1_10(View, obj)];
  const obj1 = { style: tmp.messageSection, children: null };
  const items1 = [
    closure_1_10(Text_Text.Text, { variant: "heading-xxl/bold", style: tmp.centerText, children: title }),
    closure_1_10(Text_Text.Text, {
      variant: "text-md/medium",
      color: "text-subtle",
      style: tmp.centerText,
      children: description,
    }),
  ];
  obj1.children = items1;
  items[1] = closure_1_11(View, obj1);
  obj.children = items;
  const items2 = [closure_1_11(View, obj), closure_1_10(PostPurchaseFooter, { onSendGift })];
  obj.children = items2;
  return closure_1_11(View, obj);
}
function LevelUpScreen(arg0) {
  ({ newTier, nextTier, giftsToNextTier } = arg0);
  ({ simulatedProgress, currentTier, onSendGift } = arg0);
  const tmp3 = closure_12(useSafeAreaInsetsDefault().bottom);
  const effect = noop.useEffect(() => {
    const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_HEAVY);
  }, []);
  let obj = { style: tmp3.screenContainer, children: null };
  obj = { style: tmp3.content, children: null };
  obj = { style: tmp3.levelUpIconWrapper, children: null };
  let tmp7Result = null != newTier.simple_icon_url;
  if (tmp7Result) {
    const obj1 = { icon: newTier.simple_icon_url, size: 140 };
    tmp7Result = closure_1_10(GiftingBadgeIconDefault, obj1);
  }
  obj.children = tmp7Result;
  const items = [closure_1_10(View, obj)];
  const obj2 = { style: tmp3.levelUpBody, children: null };
  const items1 = [
    closure_1_10(GiftingBadgeLevelUpProgressDefault, {
      progress: simulatedProgress,
      currentTier,
      newTier,
      style: tmp3.levelUpProgress,
    }),
  ];
  const obj4 = { style: tmp3.messageSection, children: null };
  const obj5 = { variant: "heading-xxl/bold", style: tmp3.centerText, children: null };
  const intl = util.intl;
  let str = newTier.name;
  if (str == null) {
    str = "";
  }
  obj5.children = intl.format(_modDef2492.k8MmO8, { tierName: str });
  const items2 = [closure_1_10(Text_Text.Text, obj5)];
  tmp7Result = null != nextTier && null != giftsToNextTier;
  if (tmp7Result) {
    tmp7Result = giftsToNextTier > 0;
  }
  if (tmp7Result) {
    const obj6 = { variant: "text-md/normal", color: "text-subtle", style: tmp3.centerText, children: null };
    const intl2 = util.intl;
    const obj7 = { count: giftsToNextTier, nextTierName: null };
    let str2 = nextTier.name;
    if (str2 == null) {
      str2 = "";
    }
    obj7.nextTierName = str2;
    obj6.children = intl2.format(_modDef2492["6QVlxw"], obj7);
    tmp7Result = closure_1_10(Text_Text.Text, obj6);
  }
  items2[1] = tmp7Result;
  obj4.children = items2;
  items1[1] = closure_1_11(View, obj4);
  obj2.children = items1;
  items[1] = closure_1_11(View, obj2);
  obj.children = items;
  const items3 = [closure_1_11(View, obj), closure_1_10(PostPurchaseFooter, { onSendGift })];
  obj.children = items3;
  return closure_1_11(View, obj);
}
const View = fn(17).View;
const GiftingBadgeConstants = fn(11029);
({
  getRemainingGiftsToNextTier: metroRequire,
  getTierForProgress: closure_7,
  getNextTierForProgress: closure_8,
} = GiftingBadgeConstants);
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4560);
let closure_12 = createStyles.createStyles((arg0) => {
  let obj = {
    screenContainer: { flex: 1 },
    content: null,
    progressWrapper: null,
    messageSection: null,
    centerText: null,
    levelUpIconWrapper: null,
    levelUpBody: null,
    levelUpProgress: null,
    footer: null,
  };
  obj = { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_16 };
  obj.content = obj;
  obj = { padding: nativeDefault.space.PX_16, width: "100%", marginBottom: nativeDefault.space.PX_24 };
  obj.progressWrapper = obj;
  obj.messageSection = {
    gap: nativeDefault.space.PX_12,
    alignItems: "center",
    width: "100%",
    paddingHorizontal: nativeDefault.space.PX_16,
  };
  obj.centerText = { textAlign: "center" };
  const obj1 = {
    gap: nativeDefault.space.PX_12,
    alignItems: "center",
    width: "100%",
    paddingHorizontal: nativeDefault.space.PX_16,
  };
  obj.levelUpIconWrapper = { paddingVertical: 26, paddingHorizontal: 74, marginBottom: nativeDefault.space.PX_48 };
  const obj2 = { paddingVertical: 26, paddingHorizontal: 74, marginBottom: nativeDefault.space.PX_48 };
  obj.levelUpBody = { gap: nativeDefault.space.PX_12, alignItems: "center", width: "100%" };
  obj.levelUpProgress = { maxWidth: 260 };
  const obj3 = { gap: nativeDefault.space.PX_12, alignItems: "center", width: "100%" };
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
    const obj = { dismissAction: constants.INDIRECT_ACTION };
    const result = obj.UNSAFE_markDismissibleContentAsDismissed(
      dismissible_content.DismissibleContent.NEW_GIFTING_BADGES_COACHMARK,
      obj,
    );
  }, []);
  let obj = initialize;
  const items = [BadgeDirectoryStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
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
        obj = {
          simulatedProgress: sum,
          currentTier: tmp24,
          newTier: tmp26,
          nextTier: tmp8,
          giftsToNextTier: tmp10,
          onSendGift,
        };
        let tmp11Result = closure_1_10(LevelUpScreen, obj);
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
      obj = {
        title: null,
        description: null,
        progressBarTitle: null,
        progress: null,
        currentTier: null,
        nextTier: null,
        onSendGift: null,
      };
      const obj1 = { nextTier: str2 };
      obj.title = intl2.formatToPlainString(_modDef2492.KjdBPz, obj1);
      const intl3 = util.intl;
      obj.description = intl3.string(_modDef2492.oqDrEM);
      const intl4 = util.intl;
      obj.progressBarTitle = intl4.string(_modDef2492["Ka5s+Q"]);
      obj.progress = sum;
      obj.currentTier = tmp26;
      obj.nextTier = tmp8;
      obj.onSendGift = onSendGift;
      let obj2 = obj;
    } else {
      obj2 = {
        title: null,
        description: null,
        progressBarTitle: null,
        progress: null,
        currentTier: null,
        nextTier: null,
        onSendGift: null,
      };
      const intl5 = util.intl;
      obj2.title = intl5.string(_modDef2492["/rBQud"]);
      const intl6 = util.intl;
      obj2.description = intl6.string(_modDef2492.DDQMlx);
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
        const obj3 = { tierName: name1 };
        str = intl.formatToPlainString(_modDef2492.bwyQt8, obj3);
      }
      obj2.progressBarTitle = str;
      obj2.progress = sum;
      obj2.currentTier = tmp26;
      obj2.nextTier = tmp8;
      obj2.onSendGift = onSendGift;
    }
    tmp11Result = closure_1_10(InProgressScreen, obj2);
  }
}
