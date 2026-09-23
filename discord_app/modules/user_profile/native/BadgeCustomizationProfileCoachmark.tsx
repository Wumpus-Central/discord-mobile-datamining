// === Module 17351: BadgeCustomizationProfileCoachmark ===

// Module 17351 (BadgeCustomizationProfileCoachmark)
import util from "util" /* 1115 */;
import native from "native" /* 4533 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const ContentDismissActionType = fn(2039).ContentDismissActionType;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/BadgeCustomizationProfileCoachmark.tsx");

export default function BadgeCustomizationProfileCoachmark(visible) {
  visible = visible.visible;
  const markAsDismissed = visible.markAsDismissed;
  const onTryItOut = visible.onTryItOut;
  let reducedMotion;
  const items = [reducedMotion];
  const stateFromStores = visible(onTryItOut[3]).useStateFromStores(items, () => markAsDismissed(onTryItOut[4]).canUsePremiumProfileCustomization(reducedMotion.getCurrentUser()));
  reducedMotion = stateFromStores.useContext(visible(onTryItOut[5]).AccessibilityPreferencesContext).reducedMotion;
  const items1 = [stateFromStores, visible, markAsDismissed, onTryItOut, reducedMotion.enabled];
  const memo = stateFromStores.useMemo(() => {
    const obj = { title: null, description: null, visible: null, position: "bottom", gradientColor: "blue", graphic: null, onDismiss: null, buttonLabel: null, buttonVariant: "primary", onButtonPress: null };
    const intl = util.intl;
    obj.title = intl.string(util.t["9JoKQb"]);
    const intl2 = util.intl;
    const t = util.t;
    obj.description = intl2.string(stateFromStores ? t.p82vky : t.IDh31t);
    obj.visible = visible;
    const obj2 = { type: "rive", rive: native.BadgesCoachmarkRive, aspectRatio: "16/9", riveProps: null };
    const obj3 = { dataBinding: { on: visible, reducedMotion: reducedMotion.enabled } };
    obj2.riveProps = obj3;
    obj.graphic = obj2;
    obj.onDismiss = function onDismiss() {
      return markAsDismissed(constants.USER_DISMISS);
    };
    const intl3 = util.intl;
    obj.buttonLabel = intl3.string(util.t["4P5I8V"]);
    obj.onButtonPress = function onButtonPress() {
      markAsDismissed(constants.TAKE_ACTION);
      onTryItOut();
    };
    return obj;
  }, items1);
  let obj = visible(onTryItOut[3]);
  const coachmark = visible(onTryItOut[8]).useCoachmark(visible.targetRef, memo);
  return null;
};