// === Module 13147: SubscribeModalSuccessAlert ===

// Module 13147 (SubscribeModalSuccessAlert)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import ConstantsIOS from "ConstantsIOS" /* 1094 */;
import util from "util" /* 1115 */;
import useThemeDefault from "useTheme" /* 4763 */;
import Text_Text from "Text/Text" /* 4825 */;
import LinearGradientDefault from "LinearGradient" /* 5286 */;
import common_AlertDefault from "common/Alert" /* 5293 */;
import actions_BoostingActionCreators from "actions/BoostingActionCreators" /* 5741 */;
import SequencedLottieAnimationViewDefault from "SequencedLottieAnimationView" /* 13148 */;
import _mod13149 from "module_13149" /* 13149 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2066 */;

require = fn;
class PremiumPaymentGuildAnimation {
  constructor(arg0) {
    ({ nextScene, onSceneComplete, loop } = global);
    tmp = closure_11();
    obj = { nextScene, onSceneComplete, loop, sceneSegments: closure_12, style: tmp.animation, source: null };
    tmp2 = closure_1(closure_2[8]);
    obj.source = closure_0(closure_2[9]);
    return jsx(tmp2, obj);
  }
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Image: metroRequire } = get_ActivityIndicator);
const Gradients = fn(6847).Gradients;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4829);
let obj2 = { wrapper: { paddingHorizontal: 24, paddingBottom: 16, paddingTop: 4, alignItems: "stretch" }, animation: { width: "auto", height: 112, alignSelf: "center" }, text: { lineHeight: 18, textAlign: "center" }, activated: { padding: 2, borderRadius: nativeDefault.radii.xs, marginTop: 8 }, activatedBackground: null, activatedImage: null, successInfo: null };
let obj3 = { padding: 2, borderRadius: nativeDefault.radii.xs, marginTop: 8 };
obj2.activatedBackground = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingVertical: 12, paddingHorizontal: 20, alignItems: "center" };
obj2.activatedImage = { width: 220 };
obj2.successInfo = { marginTop: 24 };
let closure_11 = createStyles.createStyles(obj2);
let obj5 = { ENTRY: "entry", IDLE: "idle" };
const sceneSegments = { [obj5.ENTRY]: { BEG: 0, END: 180 }, [obj5.IDLE]: { BEG: 180, END: 360 } };
PremiumPaymentGuildAnimation.Scenes = obj5;
const size = fn(2);
const result = size.fileFinishedImporting("components_native/premium/premium_guild_subscribe_modal/SubscribeModalSuccessAlert.tsx");

export default function SubscribeModalSuccessAlert(arg0) {
  ({ guildId: require, guildBoostSlots } = arg0);
  importDefault = undefined;
  dependencyMap = undefined;
  const tmp = closure_11();
  const items = [GuildStore];
  let someResult = null != guildBoostSlots;
  const stateFromStores = initialize.useStateFromStores(items, () => GuildStore.getGuild(require));
  if (someResult) {
    someResult = guildBoostSlots.some((premiumGuildSubscription) => null != premiumGuildSubscription.premiumGuildSubscription);
  }
  let num;
  if (guildBoostSlots != null) {
    num = guildBoostSlots.length;
  }
  if (num == null) {
    num = 1;
  }
  const tmp6 = _slicedToArray(noop.useState(PremiumPaymentGuildAnimation.Scenes.ENTRY), 2);
  importDefault = tmp6[1];
  const tmp7 = _slicedToArray(noop.useState(false), 2);
  dependencyMap = tmp7[1];
  const obj2 = { style: tmp.wrapper, confirmText: null, onConfirm: null, children: null };
  const tmp9 = useThemeDefault();
  const intl = util.intl;
  obj2.confirmText = intl.string(util.t.YKxJCI);
  obj2.onConfirm = function onConfirm() {
    closure_1(5197).close();
    const obj = closure_1(5197);
    actions_BoostingActionCreators.closeApplyBoostModal();
  };
  const items1 = [
    closure_9(PremiumPaymentGuildAnimation, {
      nextScene: tmp6[0],
      loop: tmp7[0],
      onSceneComplete(currentScene) {
        if (PremiumPaymentGuildAnimation.Scenes.ENTRY === currentScene) {
          return closure_1(PremiumPaymentGuildAnimation.Scenes.IDLE);
        } else if (PremiumPaymentGuildAnimation.Scenes.IDLE === currentScene) {
          return dependencyMap(true);
        }
      }
    }),

  ];
  const obj4 = { style: tmp.activated, start: null, end: null, colors: null, children: null };
  const obj3 = {
    nextScene: tmp6[0],
    loop: tmp7[0],
    onSceneComplete(currentScene) {
      if (PremiumPaymentGuildAnimation.Scenes.ENTRY === currentScene) {
        return closure_1(PremiumPaymentGuildAnimation.Scenes.IDLE);
      } else if (PremiumPaymentGuildAnimation.Scenes.IDLE === currentScene) {
        return dependencyMap(true);
      }
    }
  };
  const tmp11 = common_AlertDefault;
  obj4.start = ConstantsIOS.HorizontalGradient.START;
  obj4.end = ConstantsIOS.HorizontalGradient.END;
  obj4.colors = Gradients.PREMIUM_GUILD;
  const obj5 = { style: tmp.activatedBackground, children: null };
  const obj6 = { style: tmp.activatedImage, source: null };
  const tmp14 = LinearGradientDefault;
  if (tmp2Result.isThemeLight(tmp9)) {
    let tmp8Result = tmp8(13150);
  } else {
    tmp8Result = tmp8(13151);
  }
  obj6.source = tmp8Result;
  obj5.children = closure_9(closure_6, obj6);
  obj4.children = closure_9(closure_5, obj5);
  const items2 = [closure_9(tmp14, obj4), ];
  const obj7 = { style: tmp.successInfo, children: null };
  const obj8 = { style: tmp.text, variant: "text-sm/medium", children: null };
  const intl2 = util.intl;
  const string = intl2.string;
  const t = util.t;
  if (someResult) {
    let stringResult = string(t.RMmWY3);
  } else {
    stringResult = string(t.d81BkZ);
  }
  const obj9 = { children: null };
  obj8.children = stringResult;
  const items3 = [closure_9(Text_Text.Text, obj8), ];
  const obj10 = { style: tmp.text, variant: "text-sm/medium", children: null };
  const intl3 = util.intl;
  obj10.children = intl3.format(util.t.r0IGsP, { guildName: stateFromStores.name, guildSubscriptionQuantity: num });
  items3[1] = closure_9(Text_Text.Text, obj10);
  obj7.children = items3;
  items2[1] = closure_10(closure_5, obj7);
  obj9.children = items2;
  items1[1] = closure_10(closure_5, obj9);
  obj2.children = items1;
  return closure_10(tmp11, obj2);
};