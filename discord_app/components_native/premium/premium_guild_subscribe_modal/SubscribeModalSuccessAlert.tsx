// discord_app/components_native/premium/premium_guild_subscribe_modal/SubscribeModalSuccessAlert.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ConstantsIOS from "../../../ConstantsIOS.tsx";
import util from "../../../intl/index.native.tsx";
import useThemeDefault from "../../../hooks/useTheme.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import LinearGradientDefault from "../../../../_runtime/04987_LinearGradient.js";
import common_AlertDefault from "../../common/Alert.tsx";
import actions_BoostingActionCreators from "../../../actions/native/BoostingActionCreators.tsx";
import SequencedLottieAnimationViewDefault from "../../common/SequencedLottieAnimationView.tsx";
import _mod13623 from "../../../../_runtime/metro/13623__.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../stores/GuildStore.tsx";

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
const Gradients = fn(7432).Gradients;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
fn(4560);
let createStyles = {
  wrapper: { paddingHorizontal: 24, paddingBottom: 16, paddingTop: 4, alignItems: "stretch" },
  animation: { width: "auto", height: 112, alignSelf: "center" },
  text: { lineHeight: 18, textAlign: "center" },
  activated: null,
  activatedBackground: null,
  activatedImage: null,
  successInfo: null,
};
createStyles = { padding: 2, borderRadius: nativeDefault.radii.xs, marginTop: 8 };
createStyles.activated = createStyles;
createStyles.activatedBackground = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  paddingVertical: 12,
  paddingHorizontal: 20,
  alignItems: "center",
};
createStyles.activatedImage = { width: 220 };
createStyles.successInfo = { marginTop: 24 };
let closure_11 = createStyles.createStyles(createStyles);
let obj2 = { ENTRY: "entry", IDLE: "idle" };
const sceneSegments = { [obj2.ENTRY]: { BEG: 0, END: 180 }, [obj2.IDLE]: { BEG: 180, END: 360 } };
PremiumPaymentGuildAnimation.Scenes = obj2;
const size = fn(2);
const result = size.fileFinishedImporting(
  "components_native/premium/premium_guild_subscribe_modal/SubscribeModalSuccessAlert.tsx",
);

export default function SubscribeModalSuccessAlert(arg0) {
  ({ guildId: require, guildBoostSlots } = arg0);
  importDefault = undefined;
  dependencyMap = undefined;
  const tmp = closure_11();
  let obj = initialize;
  const items = [GuildStore];
  let someResult = null != guildBoostSlots;
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(require));
  if (someResult) {
    someResult = guildBoostSlots.some(
      (premiumGuildSubscription) => null != premiumGuildSubscription.premiumGuildSubscription,
    );
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
  obj = { style: tmp.wrapper, confirmText: null, onConfirm: null, children: null };
  const tmp9 = useThemeDefault();
  const intl = util.intl;
  obj.confirmText = intl.string(util.t.YKxJCI);
  obj.onConfirm = function onConfirm() {
    closure_1(4905).close();
    const obj = closure_1(4905);
    actions_BoostingActionCreators.closeApplyBoostModal();
  };
  obj = {
    nextScene: tmp6[0],
    loop: tmp7[0],
    onSceneComplete(currentScene) {
      if (PremiumPaymentGuildAnimation.Scenes.ENTRY === currentScene) {
        return closure_1(PremiumPaymentGuildAnimation.Scenes.IDLE);
      } else if (PremiumPaymentGuildAnimation.Scenes.IDLE === currentScene) {
        return dependencyMap(true);
      }
    },
  };
  const items1 = [closure_9(PremiumPaymentGuildAnimation, obj)];
  const obj1 = { style: tmp.activated, start: null, end: null, colors: null, children: null };
  const tmp11 = common_AlertDefault;
  obj1.start = ConstantsIOS.HorizontalGradient.START;
  obj1.end = ConstantsIOS.HorizontalGradient.END;
  obj1.colors = Gradients.PREMIUM_GUILD;
  const obj2 = { style: tmp.activatedBackground, children: null };
  const obj3 = { style: tmp.activatedImage, source: null };
  const tmp14 = LinearGradientDefault;
  if (tmp2Result.isThemeLight(tmp9)) {
    let tmp8Result = tmp8(13624);
  } else {
    tmp8Result = tmp8(13625);
  }
  obj3.source = tmp8Result;
  obj2.children = closure_9(closure_6, obj3);
  obj1.children = closure_9(closure_5, obj2);
  const items2 = [closure_9(tmp14, obj1)];
  const obj4 = { style: tmp.successInfo, children: null };
  const obj5 = { style: tmp.text, variant: "text-sm/medium", children: null };
  const intl2 = util.intl;
  const string = intl2.string;
  const t = util.t;
  if (someResult) {
    let stringResult = string(t.RMmWY3);
  } else {
    stringResult = string(t.d81BkZ);
  }
  const obj6 = { children: null };
  obj5.children = stringResult;
  const items3 = [closure_9(Text_Text.Text, obj5)];
  const obj7 = { style: tmp.text, variant: "text-sm/medium", children: null };
  const intl3 = util.intl;
  obj7.children = intl3.format(util.t.r0IGsP, { guildName: stateFromStores.name, guildSubscriptionQuantity: num });
  items3[1] = closure_9(Text_Text.Text, obj7);
  obj4.children = items3;
  items2[1] = closure_10(closure_5, obj4);
  obj6.children = items2;
  items1[1] = closure_10(closure_5, obj6);
  obj.children = items1;
  return closure_10(tmp11, obj);
}
