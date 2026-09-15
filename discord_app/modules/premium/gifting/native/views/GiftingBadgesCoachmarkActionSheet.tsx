// === Module 17091: GiftingBadgesCoachmarkActionSheet ===

// Module 17091 (GiftingBadgesCoachmarkActionSheet)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import _modDef2493 from "module_2493" /* 2493 */;
import RootNavigationRef from "RootNavigationRef" /* 4498 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4606 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7289 */;
import BadgeId from "BadgeId" /* 8304 */;
import utils_openGiftModal from "utils/openGiftModal" /* 10794 */;
import GiftingBadgeIconDefault from "GiftingBadgeIcon" /* 10882 */;
import _modDef17092 from "module_17092" /* 17092 */;
import noop from "module_19" /* 19 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8312 */;

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
  const obj2 = { style: tmp.container, children: null };
  const obj3 = { style: tmp.graphicContainer, children: null };
  let tmp4Result = null != currentTier.simple_icon_url;
  if (tmp4Result) {
    const obj4 = { icon: currentTier.simple_icon_url, size: 120 };
    tmp4Result = closure_8(GiftingBadgeIconDefault, obj4);
  }
  obj3.children = tmp4Result;
  const items2 = [closure_8(closure_5, obj3), , ];
  const obj5 = { style: tmp.textContainer, children: null };
  const obj6 = { style: tmp.text, variant: "heading-xl/bold", color: "text-strong", children: null };
  const intl = tmp5(1115).intl;
  let str = currentTier.name;
  if (str == null) {
    str = "";
  }
  obj6.children = intl.format(_modDef2493["a+jfuy"], { tierName: str });
  const items3 = [closure_8(markAsDismissed(4635).Text, obj6), ];
  const obj7 = { style: tmp.text, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = tmp5(1115).intl;
  if (giftCount == null) {
    giftCount = 0;
  }
  obj7.children = intl2.formatToPlainString(_modDef2493.QxRA6w, { giftCount });
  items3[1] = closure_8(markAsDismissed(4635).Text, obj7);
  obj5.children = items3;
  items2[1] = closure_9(closure_5, obj5);
  const obj8 = { style: tmp.footer, children: null };
  const obj9 = { grow: true, text: null, onPress: null };
  const intl3 = tmp5(1115).intl;
  obj9.text = intl3.string(markAsDismissed(1115).t.RzWDqY);
  obj9.onPress = callback;
  obj8.children = closure_8(markAsDismissed(5059).Button, obj9);
  items2[2] = closure_8(closure_5, obj8);
  obj2.children = items2;
  obj.children = closure_9(closure_5, obj2);
  return closure_8(markAsDismissed(7257).BottomSheet, obj);
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
  const obj4 = { source: { uri: _modDef17092 }, style: tmp.newBadgeImage };
  obj3.children = closure_8(closure_4, obj4);
  const items2 = [closure_8(closure_5, obj3), , ];
  const obj6 = { style: tmp.textContainer, children: null };
  const obj7 = { style: tmp.text, variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
  const intl = markAsDismissed(1115).intl;
  obj7.children = intl.string(_modDef2493.Q2RQka);
  const items3 = [closure_8(markAsDismissed(4635).Text, obj7), ];
  const obj8 = { style: tmp.text, variant: "text-sm/medium", color: "text-muted", children: null };
  const intl2 = markAsDismissed(1115).intl;
  obj8.children = intl2.string(_modDef2493["3EQnkg"]);
  items3[1] = closure_8(markAsDismissed(4635).Text, obj8);
  obj6.children = items3;
  items2[1] = closure_9(closure_5, obj6);
  const obj9 = { style: tmp.footer, children: null };
  const obj10 = { grow: true, text: null, icon: null, onPress: null };
  const intl3 = markAsDismissed(1115).intl;
  obj10.text = intl3.string(_modDef2493.DZnomS);
  const obj5 = { uri: _modDef17092 };
  obj10.icon = closure_8(markAsDismissed(11169).GiftIcon, { size: "sm", color: nativeDefault.colors.CONTROL_PRIMARY_TEXT_DEFAULT });
  obj10.onPress = callback;
  obj9.children = closure_8(markAsDismissed(5059).Button, obj10);
  items2[2] = closure_8(closure_5, obj9);
  obj2.children = items2;
  obj.children = closure_9(closure_5, obj2);
  return closure_8(markAsDismissed(7257).BottomSheet, obj);
}
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const ContentDismissActionType = fn(1955).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4639);
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
    const obj2 = { markAsDismissed, currentTier, giftCount: tmp2 };
    let tmp5 = React6(HasBadgeCoachmark, obj2);
  } else {
    const obj3 = { markAsDismissed };
    tmp5 = React6(NewBadgeCoachmark, obj3);
  }
  return tmp5;
};