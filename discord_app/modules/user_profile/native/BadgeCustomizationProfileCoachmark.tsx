// === Module 19270: BadgeCustomizationProfileCoachmark ===

// Module 19270 (BadgeCustomizationProfileCoachmark)
import util from "util" /* 1113 */;
import BadgesCoachmarkRive from "BadgesCoachmarkRive" /* 5208 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1385 */;

require = fn;
const ContentDismissActionType = fn(4988).ContentDismissActionType;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/BadgeCustomizationProfileCoachmark.tsx");

export default function BadgeCustomizationProfileCoachmark(markAsDismissed) {
  ({ targetRef, visible } = markAsDismissed);
  markAsDismissed = markAsDismissed.markAsDismissed;
  const onTryItOut = markAsDismissed.onTryItOut;
  let reducedMotion;
  items = [reducedMotion];
  const stateFromStores = visible(onTryItOut[3]).useStateFromStores(items, () => markAsDismissed(onTryItOut[4]).canUsePremiumProfileCustomization(reducedMotion.getCurrentUser()));
  reducedMotion = stateFromStores.useContext(visible(onTryItOut[5]).AccessibilityPreferencesContext).reducedMotion;
  const tmp2 = markAsDismissed(onTryItOut[6])(targetRef, visible);
  const position = tmp2;
  const items1 = [stateFromStores, visible, tmp2, markAsDismissed, onTryItOut, reducedMotion.enabled];
  const memo = stateFromStores.useMemo(() => {
    const obj = { title: null, description: null, visible: null, position: null, gradientColor: "blue", graphic: null, onDismiss: null, buttonLabel: null, buttonVariant: "primary", onButtonPress: null };
    const intl = util.intl;
    obj.title = intl.string(util.t["9JoKQb"]);
    const intl2 = util.intl;
    const t = util.t;
    obj.description = intl2.string(stateFromStores ? t.p82vky : t.IDh31t);
    obj.visible = visible;
    obj.position = position;
    const obj2 = { type: "rive", rive: BadgesCoachmarkRive.BadgesCoachmarkRive, aspectRatio: "16/9", riveProps: null };
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
  const coachmark = visible(onTryItOut[9]).useCoachmark(targetRef, memo);
  return null;
};