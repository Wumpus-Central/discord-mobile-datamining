// discord_app/modules/display_name_styles/native/DisplayNameStylesFlywheelProfileCoachmark.tsx
import noop from "noop";
import { View } from "get ActivityIndicator";
import mergeGuildAvatar from "mergeGuildAvatar";
import { ContentDismissActionType } from "ContentDismissActionType";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { AccountAgeTier10LargeBadge } from "../../../design/assets/native.tsx";

const require = arg1;
function CoachmarkImage() {
  return <View style={callback().coachmarkImageContainer}>{jsx(AccountAgeTier10LargeBadge.DisplayNameLockeAbstractUI, { width: 160, height: 68, resizeMode: "contain" })}</View>;
}
let closure_8 = createCacheKey.createStyles({ coachmarkImageContainer: { alignItems: "center", justifyContent: "center" } });
let result = require("mergeGuildAvatar").fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesFlywheelProfileCoachmark.tsx");

export default function DisplayNameStylesFlywheelProfileCoachmark(visible) {
  visible = visible.visible;
  const markAsDismissed = visible.markAsDismissed;
  let dependencyMap;
  let React;
  let callback;
  const items = [mergeGuildAvatar];
  const stateFromStores = visible(589).useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = visible(589);
  const tmp4 = markAsDismissed;
  const result = markAsDismissed(4007).canUsePremiumProfileCustomization(stateFromStores);
  const intl = visible(1236).intl;
  const string = intl.string;
  const tmp6 = markAsDismissed(2661);
  if (result) {
    let stringResult = string(tmp6.h6sykk);
  } else {
    stringResult = string(tmp6.M5amXH);
  }
  dependencyMap = stringResult;
  const intl2 = tmp(1236).intl;
  const string2 = intl2.string;
  const tmp4Result = tmp4(2661);
  if (result) {
    let string2Result = string2(tmp4Result.TyUdka);
  } else {
    string2Result = string2(tmp4Result.dluV0R);
  }
  React = string2Result;
  const items1 = [markAsDismissed];
  callback = React.useCallback(() => {
    markAsDismissed(outer1_6.USER_DISMISS);
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
  const obj2 = markAsDismissed(4007);
  const coachmark = visible(8698).useCoachmark(visible.targetRef, memo);
  return null;
};