// discord_app/modules/favorites/native/onboarding/FavoritesGuildCoachmarkIntro.tsx
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import closure_5 from "withEqualityFn" /* 15547 */;
import { FAVORITES } from "ME" /* 676 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1388 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let closure_9 = { code: "function FavoritesGuildCoachmarkIntroTsx1(){const{scrollPosition}=this.__closure;return scrollPosition.get()<=0;}" };
let closure_10 = { code: "function FavoritesGuildCoachmarkIntroTsx2(atTop,wasAtTop){const{runOnJS,setScrolledToTop}=this.__closure;if(atTop===wasAtTop){return;}runOnJS(setScrolledToTop)(atTop);}" };
let result = require("set").fileFinishedImporting("modules/favorites/native/onboarding/FavoritesGuildCoachmarkIntro.tsx");

export default function FavoritesGuildCoachmarkIntro(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  let scrollPosition;
  let first;
  let callback;
  callback = undefined;
  let callback1;
  scrollPosition = callback1.getState().scrollPosition;
  const tmp = callback(callback.useState(() => scrollPosition.get() <= 0), 2);
  first = tmp[0];
  callback = tmp3;
  let obj = markAsDismissed(first[6]);
  const fn = function v() {
    return scrollPosition.get() <= 0;
  };
  fn.__closure = { scrollPosition };
  fn.__workletHash = 6053526688640;
  fn.__initData = closure_9;
  const fn2 = function p(arg0, arg1) {
    if (arg0 !== arg1) {
      markAsDismissed(first[6]).runOnJS(closure_3)(arg0);
      const obj = markAsDismissed(first[6]);
    }
  };
  obj = { runOnJS: markAsDismissed(first[6]).runOnJS, setScrolledToTop: tmp3 };
  fn2.__closure = obj;
  fn2.__workletHash = 13648062364539;
  fn2.__initData = closure_10;
  const animatedReaction = obj.useAnimatedReaction(fn, fn2);
  const items = [markAsDismissed];
  callback = callback.useCallback(() => {
    markAsDismissed(closure_1_7.USER_DISMISS);
  }, items);
  const items1 = [markAsDismissed];
  callback1 = callback.useCallback(() => {
    const result = markAsDismissed(first[7]).setNextFavoritesGuildViewSource("intro_dc");
    scrollPosition(first[8])(closure_1_6);
    markAsDismissed(closure_1_7.TAKE_ACTION);
  }, items1);
  const items2 = [first, callback, callback1];
  const memo = callback.useMemo(() => {
    const obj = { visible: first, position: "bottom", title: null, description: null, onDismiss: null, renderImgComponent: null, buttonLabel: null, onButtonPress: null };
    const intl = markAsDismissed(first[9]).intl;
    obj[2] = intl.string(scrollPosition(first[10])["bu/mLv"]);
    const intl2 = markAsDismissed(first[9]).intl;
    obj[3] = intl2.string(scrollPosition(first[10]).kxQJ7q);
    obj[4] = callback;
    obj[5] = function renderImgComponent() {
      return callback2(callback(table[11]), {});
    };
    const intl3 = markAsDismissed(first[9]).intl;
    obj[6] = intl3.string(scrollPosition(first[10])["vN/KQ9"]);
    obj[7] = callback1;
    return obj;
  }, items2);
  const coachmark = markAsDismissed(first[12]).useCoachmark(markAsDismissed.targetRef, memo);
  return null;
};