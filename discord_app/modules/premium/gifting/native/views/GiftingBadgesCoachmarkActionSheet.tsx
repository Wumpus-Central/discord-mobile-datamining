// === Module 19627: GiftingBadgesCoachmarkActionSheet ===

// Module 19627 (GiftingBadgesCoachmarkActionSheet)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 575 */;
import _modDef2781 from "module_2781" /* 2781 */;
import RootNavigationRef from "RootNavigationRef" /* 5430 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import FastImageDefault from "FastImage" /* 5957 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7871 */;
import BadgeId from "BadgeId" /* 8414 */;
import utils_openGiftModal from "utils/openGiftModal" /* 11600 */;
import GiftingBadgeIconDefault from "GiftingBadgeIcon" /* 11619 */;
import _modDef19628 from "module_19628" /* 19628 */;
import noop from "module_19" /* 19 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8481 */;

require = fn;
function HasBadgeCoachmark(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  ({ currentTier, giftCount } = markAsDismissed);
  const tmp = closure_9();
  const giftingBadgeTierIconUrl = markAsDismissed(11617).getGiftingBadgeTierIconUrl(currentTier);
  items = [markAsDismissed];
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
  const obj2 = { startExpanded: true, onDismiss: callback1, children: null };
  const obj3 = { style: tmp.container, children: null };
  const obj4 = { style: tmp.graphicContainer, children: null };
  let tmp7Result = null != giftingBadgeTierIconUrl;
  if (tmp7Result) {
    const obj5 = { icon: giftingBadgeTierIconUrl, size: 120 };
    tmp7Result = closure_7(GiftingBadgeIconDefault, obj5);
  }
  obj4.children = tmp7Result;
  const items2 = [closure_7(View, obj4), , ];
  const obj6 = { style: tmp.textContainer, children: null };
  const obj7 = { style: tmp.text, variant: "heading-xl/semibold", color: "text-strong", children: null };
  const intl = tmp2(1113).intl;
  let str = currentTier.name;
  if (str == null) {
    str = "";
  }
  obj7.children = intl.format(_modDef2781["a+jfuy"], { tierName: str });
  const items3 = [closure_7(markAsDismissed(5866).Text, obj7), ];
  const obj8 = { style: tmp.text, variant: "body-sm/medium", color: "text-default", children: null };
  if ("noCount" === markAsDismissed.variant) {
    const intl3 = tmp2(1113).intl;
    let stringResult = intl3.string(_modDef2781["0N8fCf"]);
  } else {
    const intl2 = tmp2(1113).intl;
    if (giftCount == null) {
      giftCount = 0;
    }
    const obj9 = { giftCount };
    stringResult = intl2.formatToPlainString(_modDef2781.QxRA6w, obj9);
  }
  obj8.children = stringResult;
  items3[1] = closure_7(markAsDismissed(5866).Text, obj8);
  obj6.children = items3;
  items2[1] = closure_8(View, obj6);
  const obj10 = { style: tmp.footer, children: null };
  const obj11 = { grow: true, text: null, onPress: null };
  const intl4 = tmp2(1113).intl;
  obj11.text = intl4.string(markAsDismissed(1113).t.RzWDqY);
  obj11.onPress = callback;
  obj10.children = closure_7(markAsDismissed(5873).Button, obj11);
  items2[2] = closure_7(View, obj10);
  obj3.children = items2;
  obj2.children = closure_8(View, obj3);
  return closure_7(markAsDismissed(5503).BottomSheet, obj2);
}
function NewBadgeCoachmark(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp = closure_9();
  items = [markAsDismissed];
  const items1 = [markAsDismissed];
  const callback = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    markAsDismissed(ContentDismissActionType.TAKE_ACTION);
    const obj3 = { analyticsLocations: null };
    items = [AnalyticsLocationDefault.GIFTING_BADGE_COACHMARK];
    obj3.analyticsLocations = items;
    utils_openGiftModal.openGiftModal(obj3);
  }, items);
  const callback1 = noop.useCallback(() => {
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items1);
  let obj = { startExpanded: true, onDismiss: callback1, children: null };
  const obj2 = { style: tmp.container, children: null };
  let obj3 = { style: tmp.graphicContainer, children: null };
  const obj4 = { source: null, style: null };
  const obj5 = { uri: _modDef19628 };
  obj4.source = obj5;
  obj4.style = tmp.newBadgeImage;
  obj3.children = closure_7(FastImageDefault, obj4);
  const items2 = [closure_7(View, obj3), , ];
  const obj6 = { style: tmp.textContainer, children: null };
  const obj7 = { style: tmp.text, variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = markAsDismissed(1113).intl;
  obj7.children = intl.string(_modDef2781.Q2RQka);
  const items3 = [closure_7(markAsDismissed(5866).Text, obj7), ];
  const obj8 = { style: tmp.text, variant: "body-sm/medium", color: "text-muted", children: null };
  const intl2 = markAsDismissed(1113).intl;
  obj8.children = intl2.string(_modDef2781["3EQnkg"]);
  items3[1] = closure_7(markAsDismissed(5866).Text, obj8);
  obj6.children = items3;
  items2[1] = closure_8(View, obj6);
  const obj9 = { style: tmp.footer, children: null };
  const obj10 = { grow: true, text: null, icon: null, onPress: null };
  const intl3 = markAsDismissed(1113).intl;
  obj10.text = intl3.string(_modDef2781.DZnomS);
  obj10.icon = closure_7(markAsDismissed(11757).GiftIcon, { size: "sm", color: nativeDefault.colors.CONTROL_PRIMARY_TEXT_DEFAULT });
  obj10.onPress = callback;
  obj9.children = closure_7(markAsDismissed(5873).Button, obj10);
  items2[2] = closure_7(View, obj9);
  obj2.children = items2;
  obj.children = closure_8(View, obj2);
  return closure_7(markAsDismissed(5503).BottomSheet, obj);
}
const View = fn(17).View;
const ContentDismissActionType = fn(5089).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5243);
let obj2 = { container: { alignItems: "center", paddingHorizontal: 20, paddingBottom: 20, gap: nativeDefault.space.PX_24 }, graphicContainer: null, newBadgeImage: null, textContainer: null, text: null, footer: null };
let size = { height: 188, width: 335, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_16 };
obj2.graphicContainer = size;
obj2.newBadgeImage = { width: "100%", height: "100%", resizeMode: "contain" };
let obj3 = { alignItems: "center", paddingHorizontal: 20, paddingBottom: 20, gap: nativeDefault.space.PX_24 };
obj2.textContainer = { gap: nativeDefault.space.PX_8 };
obj2.text = { textAlign: "center" };
obj2.footer = { width: "100%" };
let closure_9 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/premium/gifting/native/views/GiftingBadgesCoachmarkActionSheet.tsx");

export default function GiftingBadgesCoachmarkActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  items = [BadgeDirectoryStore];
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
    let tmp5 = metroImportDefault(HasBadgeCoachmark, obj2);
  } else {
    const obj3 = { markAsDismissed };
    tmp5 = metroImportDefault(NewBadgeCoachmark, obj3);
  }
  return tmp5;
};