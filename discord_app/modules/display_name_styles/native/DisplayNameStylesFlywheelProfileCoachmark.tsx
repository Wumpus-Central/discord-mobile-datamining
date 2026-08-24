// === Module 16020: CoachmarkImage ===

// Module 16020 (CoachmarkImage)
import AccountAgeTier10LargeBadge from "AccountAgeTier10LargeBadge" /* 5447 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "mergeGuildAvatar" /* 1922 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1388 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = arg1;
function CoachmarkImage() {
  return <View style={callback().coachmarkImageContainer}>{jsx(AccountAgeTier10LargeBadge.DisplayNameLockeAbstractUI, { width: 160, height: 68, resizeMode: "contain" })}</View>;
}
let closure_8 = createCacheKey.createStyles({ coachmarkImageContainer: { alignItems: "center", justifyContent: "center" } });
let result = require("set").fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesFlywheelProfileCoachmark.tsx");

export default function DisplayNameStylesFlywheelProfileCoachmark(visible) {
  visible = visible.visible;
  const markAsDismissed = visible.markAsDismissed;
  dependencyMap = undefined;
  let React;
  let callback;
  const items = [closure_5];
  const stateFromStores = visible(589).useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = visible(589);
  const tmp4 = markAsDismissed;
  const result = markAsDismissed(4039).canUsePremiumProfileCustomization(stateFromStores);
  const intl = visible(1236).intl;
  const string = intl.string;
  const tmp6 = markAsDismissed(2693);
  if (result) {
    let stringResult = string(tmp6.h6sykk);
  } else {
    stringResult = string(tmp6.M5amXH);
  }
  dependencyMap = stringResult;
  const intl2 = tmp(1236).intl;
  const string2 = intl2.string;
  const tmp4Result = tmp4(2693);
  if (result) {
    let string2Result = string2(tmp4Result.TyUdka);
  } else {
    string2Result = string2(tmp4Result.dluV0R);
  }
  React = string2Result;
  const items1 = [markAsDismissed];
  callback = React.useCallback(() => {
    markAsDismissed(closure_1_6.USER_DISMISS);
  }, items1);
  const items2 = [stringResult, string2Result, visible, callback];
  const memo = React.useMemo(() => ({
    title: c2,
    description: c3,
    visible,
    position: "bottom",
    onDismiss: callback,
    renderImgComponent() {
      return callback(closure_9, {});
    }
  }), items2);
  const obj2 = markAsDismissed(4039);
  const coachmark = visible(9314).useCoachmark(visible.targetRef, memo);
  return null;
};