// discord_app/modules/premium/native/gifting/GiftBadgePostPurchase.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import _modDef2781 from "../../gifting/GiftingBadge.messages.js";
import dismissible_content from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentUnsafeUtils from "../../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import BadgeId from "../../../../../discord_common/js/shared/shared-constants/BadgeId.tsx";
import BadgeDirectoryActionCreators from "../../../badges/BadgeDirectoryActionCreators.tsx";
import GiftingBadgeProgressDefault from "../../gifting/native/views/GiftingBadgeProgress.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import BadgeDirectoryStore from "../../../badges/BadgeDirectoryStore.tsx";

require = fn;
function PostPurchaseFooter(onSendGift) {
  onSendGift = onSendGift.onSendGift;
  items = [onSendGift];
  const callback = noop.useCallback(() => {
    ModalActionCreatorsDefault.pop();
    onSendGift();
  }, items);
  const obj = { style: closure_12(useSafeAreaInsetsDefault().bottom).footer, children: null };
  const callback1 = noop.useCallback(() => {
    ModalActionCreatorsDefault.pop();
    const rootNavigationRef = onSendGift(5430).getRootNavigationRef();
    if (rootNavigationRef != null) {
      rootNavigationRef.navigate("you");
    }
  }, []);
  const obj2 = { grow: true, variant: "primary", icon: null, text: null, onPress: null };
  const tmp = closure_12(useSafeAreaInsetsDefault().bottom);
  obj2.icon = closure_10(onSendGift(11751).GiftIcon, {
    size: "sm",
    color: nativeDefault.colors.CONTROL_PRIMARY_TEXT_DEFAULT,
  });
  const intl = onSendGift(1113).intl;
  obj2.text = intl.string(_modDef2781.g86YiI);
  obj2.onPress = callback;
  const items1 = [closure_10(onSendGift(5873).Button, obj2)];
  const obj4 = { grow: true, variant: "secondary", text: null, onPress: null };
  const intl2 = onSendGift(1113).intl;
  obj4.text = intl2.string(_modDef2781["sa/cfM"]);
  obj4.onPress = callback1;
  items1[1] = closure_10(onSendGift(5873).Button, obj4);
  obj.children = items1;
  return closure_11(View, obj);
}
function InProgressScreen(arg0) {
  ({ progress, title, progressBarTitle, description, currentTier, nextTier, onSendGift } = arg0);
  const tmp = closure_12(useSafeAreaInsetsDefault().bottom);
  const obj = { style: tmp.screenContainer, children: null };
  const obj2 = { style: tmp.content, children: null };
  items = [
    refs(View, {
      style: tmp.progressWrapper,
      children: refs(GiftingBadgeProgressDefault, {
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
    refs(Text_Text.Text, { variant: "heading-xxl/semibold", style: tmp.centerText, children: title }),
    refs(Text_Text.Text, {
      variant: "body-md/medium",
      color: "text-subtle",
      style: tmp.centerText,
      children: description,
    }),
  ];
  obj4.children = items1;
  items[1] = closure_1_11(View, obj4);
  obj2.children = items;
  const items2 = [closure_1_11(View, obj2), refs(PostPurchaseFooter, { onSendGift })];
  obj.children = items2;
  return closure_1_11(View, obj);
}
function LevelUpScreen(newTier) {
  newTier = newTier.newTier;
  ({ nextTier, giftsToNextTier } = newTier);
  let isBadgeUnreadStateEnabled;
  ({ simulatedProgress, currentTier, onSendGift } = newTier);
  let tmp3 = closure_12(isBadgeUnreadStateEnabled(1627)().bottom);
  const giftingBadgeTierIconUrl = newTier(11611).getGiftingBadgeTierIconUrl(newTier);
  let obj = newTier(11611);
  items = [BadgeDirectoryStore];
  const items1 = [newTier.key];
  const stateFromStores = newTier(504).useStateFromStores(
    items,
    () => {
      const badgeById = BadgeDirectoryStore.getBadgeById(BadgeId.BadgeId.GIFTING);
      let has_updates;
      if (badgeById != null) {
        has_updates = badgeById.has_updates;
      }
      let tmp3 = true === has_updates;
      if (tmp3) {
        tmp3 = badgeById.current_tier === newTier.key;
      }
      return tmp3;
    },
    items1,
  );
  const obj2 = newTier(504);
  isBadgeUnreadStateEnabled = stateFromStores;
  if (stateFromStores) {
    isBadgeUnreadStateEnabled = obj3.useIsBadgeUnreadStateEnabled({
      location: "GiftBadgePostPurchase",
      hasUnread: stateFromStores,
    });
  }
  const effect = noop.useEffect(() => {
    const result = newTier(5491).triggerHapticFeedback(isBadgeUnreadStateEnabled(5492).IMPACT_HEAVY);
  }, []);
  const items2 = [isBadgeUnreadStateEnabled];
  const effect1 = noop.useEffect(() => {
    if (isBadgeUnreadStateEnabled) {
      BadgeDirectoryActionCreators.ackBadge(BadgeId.BadgeId.GIFTING);
    }
  }, items2);
  const obj4 = { style: tmp3.screenContainer, children: null };
  const obj5 = { style: tmp3.content, children: null };
  const obj6 = { style: tmp3.levelUpIconWrapper, children: null };
  let tmp12Result = null != giftingBadgeTierIconUrl;
  if (tmp12Result) {
    const obj7 = { icon: giftingBadgeTierIconUrl, size: 140 };
    tmp12Result = closure_10(tmp(11613), obj7);
  }
  obj6.children = tmp12Result;
  const items3 = [closure_10(View, obj6)];
  const obj8 = { style: tmp3.levelUpBody, children: null };
  const items4 = [
    closure_10(isBadgeUnreadStateEnabled(11754), {
      progress: simulatedProgress,
      currentTier,
      newTier,
      style: tmp3.levelUpProgress,
    }),
  ];
  const obj10 = { style: tmp3.messageSection, children: null };
  const obj11 = { variant: "heading-xxl/semibold", style: tmp3.centerText, children: null };
  const intl = tmp4(1113).intl;
  let str = newTier.name;
  if (str == null) {
    str = "";
  }
  obj11.children = intl.format(isBadgeUnreadStateEnabled(2781).k8MmO8, { tierName: str });
  const items5 = [closure_10(newTier(5866).Text, obj11)];
  let tmp12Result2 = null != nextTier && null != giftsToNextTier;
  if (tmp12Result2) {
    tmp12Result2 = giftsToNextTier > 0;
  }
  if (tmp12Result2) {
    const obj12 = { variant: "body-md/normal", color: "text-subtle", style: tmp3.centerText, children: null };
    const intl2 = tmp4(1113).intl;
    const obj13 = { count: giftsToNextTier, nextTierName: null };
    let str2 = nextTier.name;
    if (str2 == null) {
      str2 = "";
    }
    obj13.nextTierName = str2;
    obj12.children = intl2.format(tmp(2781)["6QVlxw"], obj13);
    tmp12Result2 = closure_10(tmp4(5866).Text, obj12);
  }
  items5[1] = tmp12Result2;
  obj10.children = items5;
  items4[1] = closure_11(View, obj10);
  obj8.children = items4;
  items3[1] = closure_11(View, obj8);
  obj5.children = items3;
  const items6 = [closure_11(View, obj5), closure_10(PostPurchaseFooter, { onSendGift })];
  obj4.children = items6;
  return closure_11(View, obj4);
}
const View = fn(17).View;
const GiftingBadgeConstants = fn(11750);
({
  getRemainingGiftsToNextTier: closure_6,
  getTierForProgress: metroImportDefault,
  getNextTierForProgress: closure_8,
} = GiftingBadgeConstants);
const ContentDismissActionType = fn(5089).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5243);
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
  items = [BadgeDirectoryStore];
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
    const tmp24 = metroImportDefault(stateFromStores, currentProgress);
    const sum = currentProgress + 1;
    const tmp26 = metroImportDefault(stateFromStores, sum);
    let key;
    if (tmp26 != null) {
      key = tmp26.key;
    }
    let key1;
    if (tmp24 != null) {
      key1 = tmp24.key;
    }
    const tmp8 = React5(stateFromStores, sum);
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
        let tmp11Result = refs(LevelUpScreen, obj2);
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
      obj3.title = intl2.formatToPlainString(_modDef2781.KjdBPz, obj4);
      const intl3 = util.intl;
      obj3.description = intl3.string(_modDef2781.oqDrEM);
      const intl4 = util.intl;
      obj3.progressBarTitle = intl4.string(_modDef2781["Ka5s+Q"]);
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
      obj5.title = intl5.string(_modDef2781["/rBQud"]);
      const intl6 = util.intl;
      obj5.description = intl6.string(_modDef2781.DDQMlx);
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
        str = intl.formatToPlainString(_modDef2781.bwyQt8, obj6);
      }
      obj5.progressBarTitle = str;
      obj5.progress = sum;
      obj5.currentTier = tmp26;
      obj5.nextTier = tmp8;
      obj5.onSendGift = onSendGift;
    }
    tmp11Result = refs(InProgressScreen, obj5);
  }
}
