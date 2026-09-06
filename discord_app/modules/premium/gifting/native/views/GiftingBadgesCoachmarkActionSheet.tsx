// === Module 16938: GiftingBadgesCoachmarkActionSheet ===

// Module 16938 (GiftingBadgesCoachmarkActionSheet)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import _modDef2492 from "module_2492" /* 2492 */;
import RootNavigationRef from "RootNavigationRef" /* 4418 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7182 */;
import BadgeId from "BadgeId" /* 8184 */;
import utils_openGiftModal from "utils/openGiftModal" /* 10661 */;
import GiftingBadgeIconDefault from "GiftingBadgeIcon" /* 10749 */;
import _modDef16939 from "module_16939" /* 16939 */;
import noop from "module_19" /* 19 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8192 */;

require = fn;
function HasBadgeCoachmark(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  ({ currentTier, giftCount } = markAsDismissed);
  const tmp = closure_10();
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
  let obj = { startExpanded: true, onDismiss: callback1, children: null };
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.graphicContainer, children: null };
  let tmp4Result = null != currentTier.simple_icon_url;
  if (tmp4Result) {
    const obj1 = { icon: currentTier.simple_icon_url, size: 120 };
    tmp4Result = tmp4(GiftingBadgeIconDefault, obj1);
  }
  obj.children = tmp4Result;
  const items2 = [closure_8(closure_5, obj), , ];
  const obj2 = { style: tmp.textContainer, children: null };
  const obj3 = { style: tmp.text, variant: "heading-xl/bold", color: "text-strong", children: null };
  const intl = tmp5(1114).intl;
  let str = currentTier.name;
  if (str == null) {
    str = "";
  }
  obj3.children = intl.format(_modDef2492["a+jfuy"], { tierName: str });
  const items3 = [closure_8(markAsDismissed(4556).Text, obj3), ];
  const obj4 = { style: tmp.text, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = tmp5(1114).intl;
  if (giftCount == null) {
    giftCount = 0;
  }
  obj4.children = intl2.formatToPlainString(_modDef2492.QxRA6w, { giftCount });
  items3[1] = closure_8(markAsDismissed(4556).Text, obj4);
  obj2.children = items3;
  items2[1] = closure_9(closure_5, obj2);
  const obj5 = { style: tmp.footer, children: null };
  const obj6 = { grow: true, text: null, onPress: null };
  const intl3 = tmp5(1114).intl;
  obj6.text = intl3.string(markAsDismissed(1114).t.RzWDqY);
  obj6.onPress = callback;
  obj5.children = closure_8(markAsDismissed(4975).Button, obj6);
  items2[2] = closure_8(closure_5, obj5);
  obj.children = items2;
  obj.children = closure_9(closure_5, obj);
  return closure_8(markAsDismissed(7150).BottomSheet, obj);
}
function NewBadgeCoachmark(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp = closure_10();
  let items = [markAsDismissed];
  const items1 = [markAsDismissed];
  const callback = noop.useCallback(() => {
    let obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    markAsDismissed(ContentDismissActionType.TAKE_ACTION);
    obj = { analyticsLocations: null };
    const items = [AnalyticsLocationDefault.GIFTING_BADGE_COACHMARK];
    obj.analyticsLocations = items;
    utils_openGiftModal.openGiftModal(obj);
  }, items);
  const callback1 = noop.useCallback(() => {
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items1);
  let obj = { startExpanded: true, onDismiss: callback1, children: null };
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.graphicContainer, children: null };
  const obj1 = { source: { uri: _modDef16939 }, style: tmp.newBadgeImage };
  obj.children = closure_8(closure_4, obj1);
  const items2 = [closure_8(closure_5, obj), , ];
  const obj3 = { style: tmp.textContainer, children: null };
  const obj4 = { style: tmp.text, variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
  const intl = markAsDismissed(1114).intl;
  obj4.children = intl.string(_modDef2492.Q2RQka);
  const items3 = [closure_8(markAsDismissed(4556).Text, obj4), ];
  const obj5 = { style: tmp.text, variant: "text-sm/medium", color: "text-muted", children: null };
  const intl2 = markAsDismissed(1114).intl;
  obj5.children = intl2.string(_modDef2492["3EQnkg"]);
  items3[1] = closure_8(markAsDismissed(4556).Text, obj5);
  obj3.children = items3;
  items2[1] = closure_9(closure_5, obj3);
  const obj6 = { style: tmp.footer, children: null };
  const obj7 = { grow: true, text: null, icon: null, onPress: null };
  const intl3 = markAsDismissed(1114).intl;
  obj7.text = intl3.string(_modDef2492.DZnomS);
  const obj2 = { uri: _modDef16939 };
  obj7.icon = closure_8(markAsDismissed(11030).GiftIcon, { size: "sm", color: nativeDefault.colors.CONTROL_PRIMARY_TEXT_DEFAULT });
  obj7.onPress = callback;
  obj6.children = closure_8(markAsDismissed(4975).Button, obj7);
  items2[2] = closure_8(closure_5, obj6);
  obj.children = items2;
  obj.children = closure_9(closure_5, obj);
  return closure_8(markAsDismissed(7150).BottomSheet, obj);
}
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
fn(4560);
let createStyles = { container: null, graphicContainer: null, newBadgeImage: null, textContainer: null, text: null, footer: null };
createStyles = { alignItems: "center", paddingHorizontal: 20, paddingBottom: 20, gap: nativeDefault.space.PX_24 };
createStyles.container = createStyles;
let size = { height: 188, width: 335, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_16 };
createStyles.graphicContainer = size;
createStyles.newBadgeImage = { width: "100%", height: "100%", objectFit: "contain" };
createStyles.textContainer = { gap: nativeDefault.space.PX_8 };
createStyles.text = { textAlign: "center" };
createStyles.footer = { width: "100%" };
let closure_10 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/premium/gifting/native/views/GiftingBadgesCoachmarkActionSheet.tsx");

export default function GiftingBadgesCoachmarkActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  let obj = initialize;
  const items = [BadgeDirectoryStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
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
    obj = { markAsDismissed, currentTier, giftCount: tmp2 };
    let tmp5 = React6(HasBadgeCoachmark, obj);
  } else {
    obj = { markAsDismissed };
    tmp5 = React6(NewBadgeCoachmark, obj);
  }
  return tmp5;
};