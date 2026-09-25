// === Module 16729: GiftingBadgesCoachmarkActionSheet ===

// Module 16729 (GiftingBadgesCoachmarkActionSheet)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import _modDef2582 from "module_2582" /* 2582 */;
import RootNavigationRef from "RootNavigationRef" /* 4689 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6598 */;
import BadgeId from "BadgeId" /* 7622 */;
import utils_openGiftModal from "utils/openGiftModal" /* 10113 */;
import GiftingBadgeIconDefault from "GiftingBadgeIcon" /* 10202 */;
import _modDef16730 from "module_16730" /* 16730 */;
import noop from "module_19" /* 19 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 7630 */;

require = fn;
function HasBadgeCoachmark(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  ({ currentTier, giftCount } = markAsDismissed);
  const tmp = closure_10();
  const isGiftingBadgeComplexArtEnabled = markAsDismissed(10196).useIsGiftingBadgeComplexArtEnabled("GiftingBadgesCoachmarkActionSheet");
  let obj = markAsDismissed(10196);
  const giftingBadgeTierIconUrl = markAsDismissed(10196).getGiftingBadgeTierIconUrl(currentTier, isGiftingBadgeComplexArtEnabled);
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
  const items2 = [closure_8(closure_5, obj5), , ];
  const obj7 = { style: tmp.textContainer, children: null };
  const obj8 = { style: tmp.text, variant: "heading-xl/bold", color: "text-strong", children: null };
  const intl = tmp2(1115).intl;
  let str = currentTier.name;
  if (str == null) {
    str = "";
  }
  obj8.children = intl.format(_modDef2582["a+jfuy"], { tierName: str });
  const items3 = [closure_8(markAsDismissed(4825).Text, obj8), ];
  const obj9 = { style: tmp.text, variant: "text-sm/medium", color: "text-default", children: null };
  if ("noCount" === markAsDismissed.variant) {
    const intl3 = tmp2(1115).intl;
    let stringResult = intl3.string(_modDef2582["0N8fCf"]);
  } else {
    const intl2 = tmp2(1115).intl;
    if (giftCount == null) {
      giftCount = 0;
    }
    const obj10 = { giftCount };
    stringResult = intl2.formatToPlainString(_modDef2582.QxRA6w, obj10);
  }
  obj9.children = stringResult;
  items3[1] = closure_8(markAsDismissed(4825).Text, obj9);
  obj7.children = items3;
  items2[1] = closure_9(closure_5, obj7);
  const obj11 = { style: tmp.footer, children: null };
  const obj12 = { grow: true, text: null, onPress: null };
  const intl4 = tmp2(1115).intl;
  obj12.text = intl4.string(markAsDismissed(1115).t.RzWDqY);
  obj12.onPress = callback;
  obj11.children = closure_8(markAsDismissed(5274).Button, obj12);
  items2[2] = closure_8(closure_5, obj11);
  obj4.children = items2;
  obj3.children = closure_9(closure_5, obj4);
  return closure_8(markAsDismissed(6566).BottomSheet, obj3);
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
  const obj4 = { source: { uri: _modDef16730 }, style: tmp.newBadgeImage };
  obj3.children = closure_8(closure_4, obj4);
  const items2 = [closure_8(closure_5, obj3), , ];
  const obj6 = { style: tmp.textContainer, children: null };
  const obj7 = { style: tmp.text, variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
  const intl = markAsDismissed(1115).intl;
  obj7.children = intl.string(_modDef2582.Q2RQka);
  const items3 = [closure_8(markAsDismissed(4825).Text, obj7), ];
  const obj8 = { style: tmp.text, variant: "text-sm/medium", color: "text-muted", children: null };
  const intl2 = markAsDismissed(1115).intl;
  obj8.children = intl2.string(_modDef2582["3EQnkg"]);
  items3[1] = closure_8(markAsDismissed(4825).Text, obj8);
  obj6.children = items3;
  items2[1] = closure_9(closure_5, obj6);
  const obj9 = { style: tmp.footer, children: null };
  const obj10 = { grow: true, text: null, icon: null, onPress: null };
  const intl3 = markAsDismissed(1115).intl;
  obj10.text = intl3.string(_modDef2582.DZnomS);
  const obj5 = { uri: _modDef16730 };
  obj10.icon = closure_8(markAsDismissed(10485).GiftIcon, { size: "sm", color: nativeDefault.colors.CONTROL_PRIMARY_TEXT_DEFAULT });
  obj10.onPress = callback;
  obj9.children = closure_8(markAsDismissed(5274).Button, obj10);
  items2[2] = closure_8(closure_5, obj9);
  obj2.children = items2;
  obj.children = closure_9(closure_5, obj2);
  return closure_8(markAsDismissed(6566).BottomSheet, obj);
}
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const ContentDismissActionType = fn(2041).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4829);
let obj2 = { container: { alignItems: "center", paddingHorizontal: 20, paddingBottom: 20, gap: nativeDefault.space.PX_24 }, graphicContainer: null, newBadgeImage: null, textContainer: null, text: null, footer: null };
let size = { height: 188, width: 335, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_16 };
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
    const obj2 = { markAsDismissed, currentTier, giftCount: tmp2, variant: markAsDismissed.variant };
    let tmp5 = React6(HasBadgeCoachmark, obj2);
  } else {
    const obj3 = { markAsDismissed };
    tmp5 = React6(NewBadgeCoachmark, obj3);
  }
  return tmp5;
};