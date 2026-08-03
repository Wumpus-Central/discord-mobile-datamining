import noop from "noop";
import { FAVORITES } from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("ContentDismissActionType").fileFinishedImporting("modules/favorites/native/onboarding/FavoritesGuildCoachmarkIntro.tsx");

export default function FavoritesGuildCoachmarkIntro(visible) {
  visible = visible.visible;
  const markAsDismissed = visible.markAsDismissed;
  let callback;
  let callback1;
  const items = [markAsDismissed];
  callback = callback1.useCallback(() => {
    markAsDismissed(outer1_5.USER_DISMISS);
  }, items);
  const items1 = [markAsDismissed];
  callback1 = callback1.useCallback(() => {
    if (!obj.getIsFavoritesGuildEnabled()) {
      let tmpResult = tmp(tmp2[5]);
      const result = tmpResult.setFavoritesGuildVisibility(true, "favorites_button_onboarding");
    }
    tmpResult = tmp(tmp2[6]);
    const result1 = tmpResult.setNextFavoritesGuildViewSource("intro_dc");
    markAsDismissed(callback[7])(outer1_4);
    markAsDismissed(outer1_5.TAKE_ACTION);
  }, items1);
  const items2 = [visible, callback, callback1];
  const memo = callback1.useMemo(() => {
    const obj = { visible, position: "bottom", title: null, description: null, onDismiss: null, renderImgComponent: null, buttonLabel: null, onButtonPress: null };
    const intl = visible(callback[8]).intl;
    obj[2] = intl.string(markAsDismissed(callback[9])["bu/mLv"]);
    const intl2 = visible(callback[8]).intl;
    obj[3] = intl2.string(markAsDismissed(callback[9]).kxQJ7q);
    obj[4] = callback;
    obj[5] = function renderImgComponent() {
      return callback2(callback(table[10]), {});
    };
    const intl3 = visible(callback[8]).intl;
    obj[6] = intl3.string(markAsDismissed(callback[9])["vN/KQ9"]);
    obj[7] = callback1;
    return obj;
  }, items2);
  const coachmark = visible(callback[11]).useCoachmark(visible.targetRef, memo);
  return null;
};