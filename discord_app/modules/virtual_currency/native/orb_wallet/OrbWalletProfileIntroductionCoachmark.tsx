// === Module 19457: OrbWalletProfileIntroductionCoachmark ===

// Module 19457 (OrbWalletProfileIntroductionCoachmark)
import util from "util" /* 1113 */;
import _modDef19458 from "module_19458" /* 19458 */;
import noop from "module_19" /* 19 */;

require = fn;
const ContentDismissActionType = fn(5089).ContentDismissActionType;
const size = fn(2);
const result = size.fileFinishedImporting("modules/virtual_currency/native/orb_wallet/OrbWalletProfileIntroductionCoachmark.tsx");

export default function OrbWalletProfileIntroductionCoachmark(visible) {
  visible = visible.visible;
  const markAsDismissed = visible.markAsDismissed;
  const onSeeChallenges = visible.onSeeChallenges;
  items = [visible, markAsDismissed, onSeeChallenges];
  const memo = noop.useMemo(() => {
    const obj = { title: null, description: null, visible: null, position: "top", graphic: null, onDismiss: null, buttonLabel: null, buttonVariant: "primary", onButtonPress: null };
    const intl = util.intl;
    obj.title = intl.string(util.t["Q+dH5r"]);
    const intl2 = util.intl;
    obj.description = intl2.string(util.t.YKJw4W);
    obj.visible = visible;
    const obj2 = { type: "image", src: { uri: _modDef19458 }, aspectRatio: "16/9" };
    obj.graphic = obj2;
    obj.onDismiss = function onDismiss() {
      return markAsDismissed(constants.USER_DISMISS);
    };
    const intl3 = util.intl;
    obj.buttonLabel = intl3.string(util.t.dcOuei);
    obj.onButtonPress = function onButtonPress() {
      markAsDismissed(constants.TAKE_ACTION);
      onSeeChallenges();
    };
    return obj;
  }, items);
  const coachmark = visible(onSeeChallenges[4]).useCoachmark(visible.targetRef, memo);
  return null;
};