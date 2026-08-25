// === Module 16150: BadgeCustomizationProfileCoachmark ===

// Module 16150 (BadgeCustomizationProfileCoachmark)
import closure_3 from "noop" /* 19 */;
import closure_4 from "mergeGuildAvatar" /* 1922 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1388 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/user_profile/native/BadgeCustomizationProfileCoachmark.tsx");

export default function BadgeCustomizationProfileCoachmark(visible) {
  visible = visible.visible;
  const markAsDismissed = visible.markAsDismissed;
  const onTryItOut = visible.onTryItOut;
  let stateFromStores;
  const items = [closure_4];
  stateFromStores = visible(onTryItOut[3]).useStateFromStores(items, () => markAsDismissed(onTryItOut[4]).canUsePremiumProfileCustomization(currentUser.getCurrentUser()));
  const items1 = [stateFromStores, visible, markAsDismissed, onTryItOut];
  const memo = stateFromStores.useMemo(() => {
    let obj = { title: null, description: null, visible: null, position: "bottom", gradientColor: "blue", graphic: null, onDismiss: null, buttonLabel: null, buttonVariant: "primary", onButtonPress: null };
    const intl = visible(onTryItOut[5]).intl;
    obj[0] = intl.string(visible(onTryItOut[5]).t["9JoKQb"]);
    const intl2 = visible(onTryItOut[5]).intl;
    const t = visible(onTryItOut[5]).t;
    obj[1] = intl2.string(stateFromStores ? t.p82vky : t.IDh31t);
    obj[2] = visible;
    obj = { type: "image", src: null, aspectRatio: "16/9" };
    obj = { uri: markAsDismissed(tmp2[6]) };
    obj[1] = obj;
    obj[5] = obj;
    obj[6] = function onDismiss() {
      return callback(closure_1_5.USER_DISMISS);
    };
    const intl3 = tmp(tmp2[5]).intl;
    obj[7] = intl3.string(visible(onTryItOut[5]).t["4P5I8V"]);
    obj[9] = function onButtonPress() {
      callback(closure_1_5.TAKE_ACTION);
      callback2();
    };
    return obj;
  }, items1);
  let obj = visible(onTryItOut[3]);
  const coachmark = visible(onTryItOut[7]).useCoachmark(visible.targetRef, memo);
  return null;
};