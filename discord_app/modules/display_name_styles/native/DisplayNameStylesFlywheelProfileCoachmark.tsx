// === Module 15654: CoachmarkImage ===

// Module 15654 (CoachmarkImage)
import noop from "noop";
import { View } from "get ActivityIndicator";
import mergeGuildAvatar from "mergeGuildAvatar";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let error;
let metroImportAll;
const require = arg1;
function CoachmarkImage() {
  const tmp = createCacheKey();
  let obj = { style: tmp.coachmarkImageContainer, children: null };
  const items = [callback(require(6790) /* AccountAgeTier10LargeBadge */.DisplayNameLockeAbstractUI, { width: 160, height: 68, resizeMode: "contain" }), ];
  obj = { style: tmp.betaTag };
  items[1] = callback(require(1297) /* Button */.BetaTag, obj);
  obj[1] = items;
  return callback2(View, obj);
}
({ jsx: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { coachmarkImageContainer: null, betaTag: null };
createCacheKey = { alignItems: "center", justifyContent: "center", gap: require("Themes").space.PX_12 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginLeft: 0 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
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
  const result = markAsDismissed(3839).canUsePremiumProfileCustomization(stateFromStores);
  const intl = visible(1236).intl;
  const string = intl.string;
  const tmp6 = markAsDismissed(2583);
  if (result) {
    let stringResult = string(tmp6.h6sykk);
  } else {
    stringResult = string(tmp6.M5amXH);
  }
  dependencyMap = stringResult;
  const intl2 = tmp(1236).intl;
  const string2 = intl2.string;
  const tmp4Result = tmp4(2583);
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
      return callback(closure_10, {});
    }
  }), items2);
  const obj2 = markAsDismissed(3839);
  const coachmark = visible(8440).useCoachmark(visible.targetRef, memo);
  return null;
};