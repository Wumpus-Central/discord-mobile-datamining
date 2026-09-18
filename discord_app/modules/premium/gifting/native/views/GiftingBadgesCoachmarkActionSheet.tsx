// discord_app/modules/premium/gifting/native/views/GiftingBadgesCoachmarkActionSheet.tsx
import initialize from "../../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef2576 from "../../GiftingBadge.messages.js";
import RootNavigationRef from "../../../../main_tabs_v2/RootNavigationRef.native.tsx";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import AnalyticsLocationDefault from "../../../../app_analytics/AnalyticsLocation.tsx";
import BadgeId from "../../../../../../discord_common/js/shared/shared-constants/BadgeId.tsx";
import utils_openGiftModal from "../../../native/utils/openGiftModal.tsx";
import GiftingBadgeIconDefault from "GiftingBadgeIcon.tsx";
import _modDef17318 from "../../../../../../discord_assets/assets/gifting/new_gifting_badges.png.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import BadgeDirectoryStore from "../../../../badges/BadgeDirectoryStore.tsx";

require = fn;
function HasBadgeCoachmark(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  ({ currentTier, giftCount } = markAsDismissed);
  const tmp = closure_10();
  const isGiftingBadgeComplexArtEnabled = markAsDismissed(10990).useIsGiftingBadgeComplexArtEnabled(
    "GiftingBadgesCoachmarkActionSheet",
  );
  let obj = markAsDismissed(10990);
  const giftingBadgeTierIconUrl = markAsDismissed(10990).getGiftingBadgeTierIconUrl(
    currentTier,
    isGiftingBadgeComplexArtEnabled,
  );
  const items = [markAsDismissed];
  const items1 = [markAsDismissed];
  const callback = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    markAsDismissed(ContentDismissActionType.TAKE_ACTION);
    const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
    if (rootNavigationRef != null) {
      rootNavigationRef.navigate("you");
    }
  }, items);
  const callback1 = noop.useCallback(() => {
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items1);
  const obj3 = { startExpanded: true, onDismiss: callback1, children: null };
  const obj4 = { style: tmp.container, children: null };
  const obj5 = { style: tmp.graphicContainer, children: null };
  let tmp8Result = null != giftingBadgeTierIconUrl;
  if (tmp8Result) {
    const obj6 = { icon: giftingBadgeTierIconUrl, size: 120 };
    tmp8Result = closure_8(GiftingBadgeIconDefault, obj6);
  }
  obj5.children = tmp8Result;
  const items2 = [closure_8(closure_5, obj5), ,];
  const obj7 = { style: tmp.textContainer, children: null };
  const obj8 = { style: tmp.text, variant: "heading-xl/bold", color: "text-strong", children: null };
  const intl = tmp2(1115).intl;
  let str = currentTier.name;
  if (str == null) {
    str = "";
  }
  obj8.children = intl.format(_modDef2576["a+jfuy"], { tierName: str });
  const items3 = [closure_8(markAsDismissed(4718).Text, obj8)];
  const obj9 = { style: tmp.text, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = tmp2(1115).intl;
  if (giftCount == null) {
    giftCount = 0;
  }
  obj9.children = intl2.formatToPlainString(_modDef2576.QxRA6w, { giftCount });
  items3[1] = closure_8(markAsDismissed(4718).Text, obj9);
  obj7.children = items3;
  items2[1] = closure_9(closure_5, obj7);
  const obj10 = { style: tmp.footer, children: null };
  const obj11 = { grow: true, text: null, onPress: null };
  const intl3 = tmp2(1115).intl;
  obj11.text = intl3.string(markAsDismissed(1115).t.RzWDqY);
  obj11.onPress = callback;
  obj10.children = closure_8(markAsDismissed(5144).Button, obj11);
  items2[2] = closure_8(closure_5, obj10);
  obj4.children = items2;
  obj3.children = closure_9(closure_5, obj4);
  return closure_8(markAsDismissed(7346).BottomSheet, obj3);
}
function NewBadgeCoachmark(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp = closure_10();
  let items = [markAsDismissed];
  const items1 = [markAsDismissed];
  const callback = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    markAsDismissed(ContentDismissActionType.TAKE_ACTION);
    const obj3 = { analyticsLocations: null };
    const items = [AnalyticsLocationDefault.GIFTING_BADGE_COACHMARK];
    obj3.analyticsLocations = items;
    utils_openGiftModal.openGiftModal(obj3);
  }, items);
  const callback1 = noop.useCallback(() => {
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items1);
  let obj = { startExpanded: true, onDismiss: callback1, children: null };
  const obj2 = { style: tmp.container, children: null };
  let obj3 = { style: tmp.graphicContainer, children: null };
  const obj4 = { source: { uri: _modDef17318 }, style: tmp.newBadgeImage };
  obj3.children = closure_8(closure_4, obj4);
  const items2 = [closure_8(closure_5, obj3), ,];
  const obj6 = { style: tmp.textContainer, children: null };
  const obj7 = { style: tmp.text, variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
  const intl = markAsDismissed(1115).intl;
  obj7.children = intl.string(_modDef2576.Q2RQka);
  const items3 = [closure_8(markAsDismissed(4718).Text, obj7)];
  const obj8 = { style: tmp.text, variant: "text-sm/medium", color: "text-muted", children: null };
  const intl2 = markAsDismissed(1115).intl;
  obj8.children = intl2.string(_modDef2576["3EQnkg"]);
  items3[1] = closure_8(markAsDismissed(4718).Text, obj8);
  obj6.children = items3;
  items2[1] = closure_9(closure_5, obj6);
  const obj9 = { style: tmp.footer, children: null };
  const obj10 = { grow: true, text: null, icon: null, onPress: null };
  const intl3 = markAsDismissed(1115).intl;
  obj10.text = intl3.string(_modDef2576.DZnomS);
  const obj5 = { uri: _modDef17318 };
  obj10.icon = closure_8(markAsDismissed(11284).GiftIcon, {
    size: "sm",
    color: nativeDefault.colors.CONTROL_PRIMARY_TEXT_DEFAULT,
  });
  obj10.onPress = callback;
  obj9.children = closure_8(markAsDismissed(5144).Button, obj10);
  items2[2] = closure_8(closure_5, obj9);
  obj2.children = items2;
  obj.children = closure_9(closure_5, obj2);
  return closure_8(markAsDismissed(7346).BottomSheet, obj);
}
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const ContentDismissActionType = fn(1955).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4722);
let obj2 = {
  container: { alignItems: "center", paddingHorizontal: 20, paddingBottom: 20, gap: nativeDefault.space.PX_24 },
  graphicContainer: null,
  newBadgeImage: null,
  textContainer: null,
  text: null,
  footer: null,
};
let size = {
  height: 188,
  width: 335,
  alignItems: "center",
  justifyContent: "center",
  padding: nativeDefault.space.PX_16,
};
obj2.graphicContainer = size;
obj2.newBadgeImage = { width: "100%", height: "100%", objectFit: "contain" };
let obj3 = { alignItems: "center", paddingHorizontal: 20, paddingBottom: 20, gap: nativeDefault.space.PX_24 };
obj2.textContainer = { gap: nativeDefault.space.PX_8 };
obj2.text = { textAlign: "center" };
obj2.footer = { width: "100%" };
let closure_10 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/premium/gifting/native/views/GiftingBadgesCoachmarkActionSheet.tsx");

export default function GiftingBadgesCoachmarkActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const items = [BadgeDirectoryStore];
  const stateFromStoresObject = initialize.useStateFromStoresObject(items, () => {
    const obj = { currentTier: BadgeDirectoryStore.getCurrentTier(BadgeId.BadgeId.GIFTING), giftCount: null };
    const singleRequirementProgress = BadgeDirectoryStore.getSingleRequirementProgress(BadgeId.BadgeId.GIFTING);
    let current;
    if (singleRequirementProgress != null) {
      current = singleRequirementProgress.current;
    }
    obj.giftCount = current;
    return obj;
  });
  const currentTier = stateFromStoresObject.currentTier;
  if (null != currentTier) {
    const obj2 = { markAsDismissed, currentTier, giftCount: tmp2 };
    let tmp5 = React6(HasBadgeCoachmark, obj2);
  } else {
    const obj3 = { markAsDismissed };
    tmp5 = React6(NewBadgeCoachmark, obj3);
  }
  return tmp5;
}
