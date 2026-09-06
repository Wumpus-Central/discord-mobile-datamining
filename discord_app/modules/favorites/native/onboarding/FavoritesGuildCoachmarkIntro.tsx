// === Module 16313: FavoritesGuildCoachmarkIntro ===

// Module 16313 (FavoritesGuildCoachmarkIntro)
import util from "util" /* 1114 */;
import _modDef3225 from "module_3225" /* 3225 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import FavoritesGuildAnalytics from "FavoritesGuildAnalytics" /* 10233 */;
import transitionGuildsBarToGuildOrOpenSelectedChannelDefault from "transitionGuildsBarToGuildOrOpenSelectedChannel" /* 16308 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildsBarDnDStore from "GuildsBarDnDStore" /* 16284 */;

require = fn;
const FAVORITES = fn(1074).FAVORITES;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsx = fn(21).jsx;
const __initData = { code: "function FavoritesGuildCoachmarkIntroTsx1(){const{scrollPosition}=this.__closure;return scrollPosition.get()<=0;}" };
const __initData2 = { code: "function FavoritesGuildCoachmarkIntroTsx2(atTop,wasAtTop){const{runOnJS,setScrolledToTop}=this.__closure;if(atTop===wasAtTop){return;}runOnJS(setScrolledToTop)(atTop);}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/favorites/native/onboarding/FavoritesGuildCoachmarkIntro.tsx");

export default function FavoritesGuildCoachmarkIntro(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  _slicedToArray = undefined;
  let onDismiss;
  let callback1;
  const scrollPosition = callback1.getState().scrollPosition;
  const tmp = _slicedToArray(onDismiss.useState(() => scrollPosition.get() <= 0), 2);
  const visible = tmp[0];
  _slicedToArray = tmp3;
  markAsDismissed(visible[6]);
  const fn = function v() {
    return scrollPosition.get() <= 0;
  };
  fn.__closure = { scrollPosition };
  fn.__workletHash = 6053526688640;
  fn.__initData = __initData;
  const fn2 = function p(arg0, arg1) {
    if (arg0 !== arg1) {
      ReanimatedRexport.runOnJS(closure_3)(arg0);
    }
  };
  let obj = { runOnJS: markAsDismissed(visible[6]).runOnJS, setScrolledToTop: tmp3 };
  fn2.__closure = obj;
  fn2.__workletHash = 13648062364539;
  fn2.__initData = __initData2;
  const animatedReaction = obj.useAnimatedReaction(fn, fn2);
  const items = [markAsDismissed];
  onDismiss = onDismiss.useCallback(() => {
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items);
  const items1 = [markAsDismissed];
  callback1 = onDismiss.useCallback(() => {
    const result = FavoritesGuildAnalytics.setNextFavoritesGuildViewSource("intro_dc");
    transitionGuildsBarToGuildOrOpenSelectedChannelDefault(FAVORITES);
    markAsDismissed(ContentDismissActionType.TAKE_ACTION);
  }, items1);
  const items2 = [visible, onDismiss, callback1];
  const memo = onDismiss.useMemo(() => {
    const obj = { visible, position: "bottom", title: null, description: null, onDismiss: null, renderImgComponent: null, buttonLabel: null, onButtonPress: null };
    const intl = util.intl;
    obj.title = intl.string(_modDef3225["bu/mLv"]);
    const intl2 = util.intl;
    obj.description = intl2.string(_modDef3225.kxQJ7q);
    obj.onDismiss = onDismiss;
    obj.renderImgComponent = function renderImgComponent() {
      return closure_1_8(scrollPosition(visible[11]), {});
    };
    const intl3 = util.intl;
    obj.buttonLabel = intl3.string(_modDef3225["vN/KQ9"]);
    obj.onButtonPress = callback1;
    return obj;
  }, items2);
  const coachmark = markAsDismissed(visible[12]).useCoachmark(markAsDismissed.targetRef, memo);
  return null;
};