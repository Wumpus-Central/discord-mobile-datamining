// === Module 16620: BadgeCustomizationProfileCoachmark ===

// Module 16620 (BadgeCustomizationProfileCoachmark)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import BadgesCoachmarkRive from "BadgesCoachmarkRive" /* 4559 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const ContentDismissActionType = fn(2042).ContentDismissActionType;
const PX_64 = nativeDefault.space.PX_64;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/BadgeCustomizationProfileCoachmark.tsx");

export default function BadgeCustomizationProfileCoachmark(markAsDismissed) {
  ({ targetRef, visible } = markAsDismissed);
  targetRef = visible;
  markAsDismissed = markAsDismissed.markAsDismissed;
  visible = markAsDismissed;
  const onTryItOut = markAsDismissed.onTryItOut;
  let reducedMotion;
  let str2;
  const items = [str2];
  const stateFromStores = targetRef(504).useStateFromStores(items, () => visible(_undefined[9]).canUsePremiumProfileCustomization(str2.getCurrentUser()));
  reducedMotion = reducedMotion.useContext(targetRef(4550).AccessibilityPreferencesContext).reducedMotion;
  dependencyMap = undefined;
  const height = visible(1479)().height;
  let rect = visible(1613)();
  let obj = targetRef(504);
  let obj2 = reducedMotion;
  [rect2, c2] = stateFromStores(reducedMotion.useState(null), 2);
  const items1 = [targetRef, visible, height];
  const effect = reducedMotion.useEffect(() => {
    if (visible) {
      const current = targetRef.current;
      if (current != null) {
        current.measureInWindow((arg0, top, arg2, arg3) => {
          if (0 !== arg3) {
            const rect = { top, bottom: top + arg3 };
            _undefined(rect);
          }
        });
      }
    }
  }, items1);
  let str = "bottom";
  str2 = "bottom";
  if (null != rect2) {
    if (height - tmpResult.getFloatingNavBottomMargin(rect.bottom) - PX_64 - rect2.bottom < rect2.top - rect.top) {
      str = "top";
    }
    str2 = str;
    tmpResult = tmp(16600);
  }
  const items2 = [stateFromStores, visible, str2, markAsDismissed, onTryItOut, reducedMotion.enabled];
  const memo = obj2.useMemo(() => {
    const obj = { title: null, description: null, visible: null, position: null, gradientColor: "blue", graphic: null, onDismiss: null, buttonLabel: null, buttonVariant: "primary", onButtonPress: null };
    const intl = util.intl;
    obj.title = intl.string(util.t["9JoKQb"]);
    const intl2 = util.intl;
    const t = util.t;
    obj.description = intl2.string(stateFromStores ? t.p82vky : t.IDh31t);
    obj.visible = targetRef;
    obj.position = str2;
    const obj2 = { type: "rive", rive: BadgesCoachmarkRive.BadgesCoachmarkRive, aspectRatio: "16/9", riveProps: null };
    const obj3 = { dataBinding: { on: targetRef, reducedMotion: reducedMotion.enabled } };
    obj2.riveProps = obj3;
    obj.graphic = obj2;
    obj.onDismiss = function onDismiss() {
      return visible(constants.USER_DISMISS);
    };
    const intl3 = util.intl;
    obj.buttonLabel = intl3.string(util.t["4P5I8V"]);
    obj.onButtonPress = function onButtonPress() {
      visible(constants.TAKE_ACTION);
      _undefined();
    };
    return obj;
  }, items2);
  const tmp4 = stateFromStores(reducedMotion.useState(null), 2);
  const coachmark = targetRef(10589).useCoachmark(targetRef, memo);
  return null;
};