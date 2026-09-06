// discord_app/modules/user_profile/native/BadgeCustomizationProfileCoachmark.tsx
import util from "../../../intl/index.native.tsx";
import native from "../../../../discord_common/js/packages/design/native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/BadgeCustomizationProfileCoachmark.tsx");

export default function BadgeCustomizationProfileCoachmark(visible) {
  visible = visible.visible;
  const markAsDismissed = visible.markAsDismissed;
  const onTryItOut = visible.onTryItOut;
  const items = [UserStore];
  const stateFromStores = visible(onTryItOut[3]).useStateFromStores(items, () =>
    markAsDismissed(onTryItOut[4]).canUsePremiumProfileCustomization(currentUser.getCurrentUser()),
  );
  const items1 = [stateFromStores, visible, markAsDismissed, onTryItOut];
  const memo = stateFromStores.useMemo(() => {
    let obj = {
      title: null,
      description: null,
      visible: null,
      position: "bottom",
      gradientColor: "blue",
      graphic: null,
      onDismiss: null,
      buttonLabel: null,
      buttonVariant: "primary",
      onButtonPress: null,
    };
    const intl = util.intl;
    obj.title = intl.string(util.t["9JoKQb"]);
    const intl2 = util.intl;
    const t = util.t;
    obj.description = intl2.string(stateFromStores ? t.p82vky : t.IDh31t);
    obj.visible = visible;
    obj = { type: "rive", rive: native.BadgesCoachmarkRive, aspectRatio: "16/9", riveProps: null };
    obj = { dataBinding: { on: visible } };
    obj.riveProps = obj;
    obj.graphic = obj;
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
  const coachmark = visible(onTryItOut[7]).useCoachmark(visible.targetRef, memo);
  return null;
}
