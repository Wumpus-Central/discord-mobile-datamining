// === Module 16155: HasBadgeCoachmark ===

// Module 16155 (HasBadgeCoachmark)
import initialize from "initialize" /* 589 */;
import ThemesDefault from "Themes" /* 712 */;
import messagesProxyDefault from "messagesProxy" /* 2431 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;
import QUICK_SWITCHERDefault from "QUICK_SWITCHER" /* 7159 */;
import GiftingBadgeIconDefault from "GiftingBadgeIcon" /* 10302 */;
import metadataDefault from "metadata" /* 16156 */;
import noop from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1388 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
function HasBadgeCoachmark(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  ({ currentTier, giftCount } = markAsDismissed);
  const tmp = callback3();
  const items = [markAsDismissed];
  const items1 = [markAsDismissed];
  const callback = React.useCallback(() => {
    ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
    markAsDismissed(ContentDismissActionType.TAKE_ACTION);
    const rootNavigationRef = markAsDismissed(dependencyMap[8]).getRootNavigationRef();
    if (rootNavigationRef != null) {
      rootNavigationRef.navigate("you");
    }
  }, items);
  const callback1 = React.useCallback(() => {
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items1);
  let obj = { style: tmp.graphicContainer, children: null };
  let tmp4Result = null != currentTier.simple_icon_url;
  if (tmp4Result) {
    obj1 = { icon: null, size: 120 };
    obj1[0] = currentTier.simple_icon_url;
    tmp4Result = callback(GiftingBadgeIconDefault, obj1);
  }
  obj[1] = tmp4Result;
  const items2 = [callback(closure_5, obj), , ];
  const obj2 = { style: tmp.textContainer, children: null };
  const obj3 = { style: tmp.text, variant: "heading-xl/bold", color: "text-strong", children: null };
  const intl = tmp5(1236).intl;
  let str = currentTier.name;
  if (str == null) {
    str = "";
  }
  obj3[3] = intl.format(messagesProxyDefault["a+jfuy"], { tierName: str });
  const items3 = [callback(markAsDismissed(4734).Text, obj3), ];
  const obj4 = { style: tmp.text, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = tmp5(1236).intl;
  if (giftCount == null) {
    giftCount = 0;
  }
  obj4[3] = intl2.formatToPlainString(messagesProxyDefault.QxRA6w, { giftCount });
  items3[1] = callback(markAsDismissed(4734).Text, obj4);
  obj2[1] = items3;
  items2[1] = callback2(closure_5, obj2);
  const obj5 = { style: tmp.footer, children: null };
  const obj6 = { grow: true, text: null, onPress: null };
  const intl3 = tmp5(1236).intl;
  obj6[1] = intl3.string(markAsDismissed(1236).t.RzWDqY);
  obj6[2] = callback;
  obj5[1] = callback(markAsDismissed(4745).Button, obj6);
  items2[2] = callback(closure_5, obj5);
  obj[1] = items2;
  obj[2] = callback2(closure_5, obj);
  return callback(markAsDismissed(6950).BottomSheet, obj);
}
function NewBadgeCoachmark(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp = callback3();
  let items = [markAsDismissed];
  const items1 = [markAsDismissed];
  const callback = React.useCallback(() => {
    let obj = ACTION_SHEET_HEIGHT_HALFDefault;
    obj.hideActionSheet();
    markAsDismissed(ContentDismissActionType.TAKE_ACTION);
    obj = { analyticsLocations: null };
    const items = [QUICK_SWITCHERDefault.GIFTING_BADGE_COACHMARK];
    obj[0] = items;
    markAsDismissed(dependencyMap[15]).openGiftModal(obj);
  }, items);
  const callback1 = React.useCallback(() => {
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items1);
  let obj = { style: tmp.graphicContainer, children: null };
  obj1 = { source: { uri: metadataDefault }, style: tmp.newBadgeImage };
  obj[1] = callback(closure_4, obj1);
  const items2 = [callback(closure_5, obj), , ];
  const obj3 = { style: tmp.textContainer, children: null };
  const obj4 = { style: tmp.text, variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
  const intl = markAsDismissed(1236).intl;
  obj4[3] = intl.string(messagesProxyDefault.Q2RQka);
  const items3 = [callback(markAsDismissed(4734).Text, obj4), ];
  const obj5 = { style: tmp.text, variant: "text-sm/medium", color: "text-muted", children: null };
  const intl2 = markAsDismissed(1236).intl;
  obj5[3] = intl2.string(messagesProxyDefault["3EQnkg"]);
  items3[1] = callback(markAsDismissed(4734).Text, obj5);
  obj3[1] = items3;
  items2[1] = callback2(closure_5, obj3);
  const obj6 = { style: tmp.footer, children: null };
  const obj7 = { grow: true, text: null, icon: null, onPress: null };
  const intl3 = markAsDismissed(1236).intl;
  obj7[1] = intl3.string(messagesProxyDefault.DZnomS);
  obj7[2] = callback(markAsDismissed(9589).GiftIcon, { size: "sm", color: ThemesDefault.colors.CONTROL_PRIMARY_TEXT_DEFAULT });
  obj7[3] = callback;
  obj6[1] = callback(markAsDismissed(4745).Button, obj7);
  items2[2] = callback(closure_5, obj6);
  obj[1] = items2;
  obj[2] = callback2(closure_5, obj);
  return callback(markAsDismissed(6950).BottomSheet, obj);
}
({ Image: c4, View: c5 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: c9 } = jsxProd);
const createCacheKey = { alignItems: "center", paddingHorizontal: 20, paddingBottom: 20, gap: ThemesDefault.space.PX_24 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { height: 188, width: 335, alignItems: "center", justifyContent: "center", padding: ThemesDefault.space.PX_16 };
createCacheKey[2] = { width: "100%", height: "100%", objectFit: "contain" };
createCacheKey[3] = { gap: ThemesDefault.space.PX_8 };
createCacheKey[4] = { textAlign: "center" };
createCacheKey[5] = { width: "100%" };
let closure_10 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/premium/gifting/native/views/GiftingBadgesCoachmarkActionSheet.tsx");

export default function GiftingBadgesCoachmarkActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  let obj = initialize;
  const items = [closure_6];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { currentTier: getCurrentTier(callback(8932).BadgeId.GIFTING), giftCount: null };
    ({ getCurrentTier, getSingleRequirementProgress } = closure_6);
    const singleRequirementProgress = getSingleRequirementProgress(callback(8932).BadgeId.GIFTING);
    let current;
    if (singleRequirementProgress != null) {
      current = singleRequirementProgress.current;
    }
    obj[1] = current;
    return obj;
  });
  const currentTier = stateFromStoresObject.currentTier;
  if (null != currentTier) {
    obj = { markAsDismissed: null, currentTier: null, giftCount: null };
    obj[0] = markAsDismissed;
    obj[1] = currentTier;
    obj[2] = tmp2;
    let tmp5 = callback(HasBadgeCoachmark, obj);
  } else {
    obj = { markAsDismissed: null };
    obj[0] = markAsDismissed;
    tmp5 = callback(NewBadgeCoachmark, obj);
  }
  return tmp5;
};