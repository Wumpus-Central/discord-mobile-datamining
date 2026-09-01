// discord_app/modules/premium/gifting/native/views/GiftingBadgesCoachmarkActionSheet.tsx
import initialize from "../../../../../../discord_common/js/packages/flux/index.tsx";
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import messagesProxyDefault from "../../GiftingBadge.messages.js";
import GiftingBadgeIconDefault from "GiftingBadgeIcon.tsx";
import metadataDefault from "../../../../../../discord_assets/assets/gifting/new_gifting_badges.png.js";
import closure_3 from "../../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_6 from "../../../../badges/BadgeDirectoryStore.tsx";
import { ContentDismissActionType } from "../../../../dismissible_content/DismissibleContentConstants.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function HasBadgeCoachmark(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  ({ currentTier, giftCount } = markAsDismissed);
  const tmp = callback3();
  const items = [markAsDismissed];
  const items1 = [markAsDismissed];
  const callback = React.useCallback(() => {
    closure_1_1(closure_1_2[7]).hideActionSheet();
    markAsDismissed(closure_1_7.TAKE_ACTION);
    const obj = closure_1_1(closure_1_2[7]);
    const rootNavigationRef = markAsDismissed(closure_1_2[8]).getRootNavigationRef();
    if (rootNavigationRef != null) {
      rootNavigationRef.navigate("you");
    }
  }, items);
  const callback1 = React.useCallback(() => {
    markAsDismissed(closure_1_7.USER_DISMISS);
  }, items1);
  let obj = { startExpanded: true, onDismiss: callback1, children: null };
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.graphicContainer, children: null };
  let tmp4Result = null != currentTier.simple_icon_url;
  if (tmp4Result) {
    obj1 = { icon: null, size: 120 };
    obj1[0] = currentTier.simple_icon_url;
    tmp4Result = tmp4(GiftingBadgeIconDefault, obj1);
  }
  obj[1] = tmp4Result;
  const items2 = [closure_8(closure_5, obj), ,];
  const obj2 = { style: tmp.textContainer, children: null };
  const obj3 = { style: tmp.text, variant: "heading-xl/bold", color: "text-strong", children: null };
  const intl = tmp5(1236).intl;
  let str = currentTier.name;
  if (str == null) {
    str = "";
  }
  obj3[3] = intl.format(messagesProxyDefault["a+jfuy"], { tierName: str });
  const items3 = [closure_8(markAsDismissed(4474).Text, obj3)];
  const obj4 = { style: tmp.text, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = tmp5(1236).intl;
  if (giftCount == null) {
    giftCount = 0;
  }
  obj4[3] = intl2.formatToPlainString(messagesProxyDefault.QxRA6w, { giftCount });
  items3[1] = closure_8(markAsDismissed(4474).Text, obj4);
  obj2[1] = items3;
  items2[1] = closure_9(closure_5, obj2);
  const obj5 = { style: tmp.footer, children: null };
  const obj6 = { grow: true, text: null, onPress: null };
  const intl3 = tmp5(1236).intl;
  obj6[1] = intl3.string(markAsDismissed(1236).t.RzWDqY);
  obj6[2] = callback;
  obj5[1] = closure_8(markAsDismissed(4928).Button, obj6);
  items2[2] = closure_8(closure_5, obj5);
  obj[1] = items2;
  obj[2] = closure_9(closure_5, obj);
  return closure_8(markAsDismissed(5622).BottomSheet, obj);
}
function NewBadgeCoachmark(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp = callback3();
  let items = [markAsDismissed];
  const items1 = [markAsDismissed];
  const callback = React.useCallback(() => {
    let obj = closure_1_1(closure_1_2[7]);
    obj.hideActionSheet();
    markAsDismissed(closure_1_7.TAKE_ACTION);
    obj = { analyticsLocations: null };
    const items = [closure_1_1(closure_1_2[16]).GIFTING_BADGE_COACHMARK];
    obj[0] = items;
    markAsDismissed(closure_1_2[15]).openGiftModal(obj);
  }, items);
  const callback1 = React.useCallback(() => {
    markAsDismissed(closure_1_7.USER_DISMISS);
  }, items1);
  let obj = { startExpanded: true, onDismiss: callback1, children: null };
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.graphicContainer, children: null };
  obj1 = { source: { uri: metadataDefault }, style: tmp.newBadgeImage };
  obj[1] = callback(closure_4, obj1);
  const items2 = [callback(closure_5, obj), ,];
  const obj3 = { style: tmp.textContainer, children: null };
  const obj4 = { style: tmp.text, variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
  const intl = markAsDismissed(1236).intl;
  obj4[3] = intl.string(messagesProxyDefault.Q2RQka);
  const items3 = [callback(markAsDismissed(4474).Text, obj4)];
  const obj5 = { style: tmp.text, variant: "text-sm/medium", color: "text-muted", children: null };
  const intl2 = markAsDismissed(1236).intl;
  obj5[3] = intl2.string(messagesProxyDefault["3EQnkg"]);
  items3[1] = callback(markAsDismissed(4474).Text, obj5);
  obj3[1] = items3;
  items2[1] = callback2(closure_5, obj3);
  const obj6 = { style: tmp.footer, children: null };
  const obj7 = { grow: true, text: null, icon: null, onPress: null };
  const intl3 = markAsDismissed(1236).intl;
  obj7[1] = intl3.string(messagesProxyDefault.DZnomS);
  const obj2 = { uri: metadataDefault };
  obj7[2] = callback(markAsDismissed(10774).GiftIcon, {
    size: "sm",
    color: ThemesDefault.colors.CONTROL_PRIMARY_TEXT_DEFAULT,
  });
  obj7[3] = callback;
  obj6[1] = callback(markAsDismissed(4928).Button, obj7);
  items2[2] = callback(closure_5, obj6);
  obj[1] = items2;
  obj[2] = callback2(closure_5, obj);
  return callback(markAsDismissed(5622).BottomSheet, obj);
}
({ Image: c4, View: c5 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: c9 } = jsxProd);
createCacheKey = {
  container: null,
  graphicContainer: null,
  newBadgeImage: null,
  textContainer: null,
  text: null,
  footer: null,
};
createCacheKey = { alignItems: "center", paddingHorizontal: 20, paddingBottom: 20, gap: ThemesDefault.space.PX_24 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = {
  height: 188,
  width: 335,
  alignItems: "center",
  justifyContent: "center",
  padding: ThemesDefault.space.PX_16,
};
createCacheKey[2] = { width: "100%", height: "100%", objectFit: "contain" };
let obj1 = {
  height: 188,
  width: 335,
  alignItems: "center",
  justifyContent: "center",
  padding: ThemesDefault.space.PX_16,
};
createCacheKey[3] = { gap: ThemesDefault.space.PX_8 };
createCacheKey[4] = { textAlign: "center" };
createCacheKey[5] = { width: "100%" };
let closure_10 = createCacheKey.createStyles(createCacheKey);
let obj2 = { gap: ThemesDefault.space.PX_8 };
const result = require("set").fileFinishedImporting(
  "modules/premium/gifting/native/views/GiftingBadgesCoachmarkActionSheet.tsx",
);

export default function GiftingBadgesCoachmarkActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  let obj = initialize;
  const items = [closure_6];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { currentTier: getCurrentTier(callback(8557).BadgeId.GIFTING), giftCount: null };
    ({ getCurrentTier, getSingleRequirementProgress } = closure_6);
    const singleRequirementProgress = getSingleRequirementProgress(callback(8557).BadgeId.GIFTING);
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
}
