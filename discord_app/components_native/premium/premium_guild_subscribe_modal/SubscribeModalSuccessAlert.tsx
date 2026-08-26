// discord_app/components_native/premium/premium_guild_subscribe_modal/SubscribeModalSuccessAlert.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import keys from "../../../ConstantsIOS.tsx";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import useThemeDefault from "../../../hooks/useTheme.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import LinearGradientDefault from "../../../../_runtime/04891_LinearGradient.js";
import componentDidMountDefault from "../../common/Alert.tsx";
import componentDidMountDefault2 from "../../common/SequencedLottieAnimationView.tsx";
import _mod13172 from "../../../../_runtime/metro/13172__.js";
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_7 from "../../../stores/GuildStore.tsx";
import { Gradients } from "../../../modules/colors/native/ColorConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
class PremiumPaymentGuildAnimation {
  constructor(arg0) {
    ({ nextScene, onSceneComplete, loop } = global);
    tmp = closure_11();
    obj = { nextScene, onSceneComplete, loop, sceneSegments: closure_12, style: tmp.animation, source: null };
    tmp2 = require("componentDidMount");
    obj[5] = require("../../../../_runtime/metro/13172__.js");
    return jsx(tmp2, obj);
  }
}
({ View: c5, Image: closure_6 } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { wrapper: { paddingHorizontal: 24, paddingBottom: 16, paddingTop: 4, alignItems: "stretch" }, animation: { width: "auto", height: 112, alignSelf: "center" }, text: { lineHeight: 18, textAlign: "center" }, activated: null, activatedBackground: null, activatedImage: null, successInfo: null };
createCacheKey = { padding: 2, borderRadius: ThemesDefault.radii.xs, marginTop: 8 };
createCacheKey[3] = createCacheKey;
createCacheKey[4] = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, paddingVertical: 12, paddingHorizontal: 20, alignItems: "center" };
createCacheKey[5] = { width: 220 };
createCacheKey[6] = { marginTop: 24 };
let closure_11 = createCacheKey.createStyles(createCacheKey);
let obj2 = { ENTRY: "entry", IDLE: "idle" };
let closure_12 = { [obj2.ENTRY]: { BEG: 0, END: 180 }, [obj2.IDLE]: { BEG: 180, END: 360 } };
PremiumPaymentGuildAnimation.Scenes = obj2;
let obj1 = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, paddingVertical: 12, paddingHorizontal: 20, alignItems: "center" };
const result = require("set").fileFinishedImporting("components_native/premium/premium_guild_subscribe_modal/SubscribeModalSuccessAlert.tsx");

export default function SubscribeModalSuccessAlert(arg0) {
  ({ guildId: require, guildBoostSlots } = arg0);
  importDefault = undefined;
  dependencyMap = undefined;
  const tmp = callback3();
  let obj = initialize;
  const items = [closure_7];
  let someResult = null != guildBoostSlots;
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_7.getGuild(closure_0));
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
  const tmp6 = callback(React.useState(PremiumPaymentGuildAnimation.Scenes.ENTRY), 2);
  importDefault = tmp6[1];
  const tmp7 = callback(React.useState(false), 2);
  dependencyMap = tmp7[1];
  obj = { style: tmp.wrapper, confirmText: null, onConfirm: null, children: null };
  const tmp9 = useThemeDefault();
  const intl = tmp2(1236).intl;
  obj[1] = intl.string(getSystemLocale.t.YKxJCI);
  obj[2] = function onConfirm() {
    callback2(4809).close();
    const obj = callback2(4809);
    callback(5324).closeApplyBoostModal();
  };
  obj = {
    nextScene: tmp6[0],
    loop: tmp7[0],
    onSceneComplete(currentScene) {
      if (closure_1_13.Scenes.ENTRY === currentScene) {
        return callback2(tmp.Scenes.IDLE);
      } else if (tmp.Scenes.IDLE === currentScene) {
        return dependencyMap(true);
      }
    }
  };
  const items1 = [callback2(PremiumPaymentGuildAnimation, obj), ];
  obj1 = { style: tmp.activated, start: null, end: null, colors: null, children: null };
  const tmp11 = componentDidMountDefault;
  obj1[1] = keys.HorizontalGradient.START;
  obj1[2] = keys.HorizontalGradient.END;
  obj1[3] = Gradients.PREMIUM_GUILD;
  const obj2 = { style: tmp.activatedBackground, children: null };
  const obj3 = { style: tmp.activatedImage, source: null };
  const tmp14 = LinearGradientDefault;
  const tmp15 = closure_6;
  if (tmp2Result.isThemeLight(tmp9)) {
    let tmp8Result = tmp8(13173);
  } else {
    tmp8Result = tmp8(13174);
  }
  obj3[1] = tmp8Result;
  obj2[1] = callback2(tmp15, obj3);
  obj1[4] = callback2(closure_5, obj2);
  const items2 = [callback2(tmp14, obj1), ];
  const obj4 = { style: tmp.successInfo, children: null };
  const obj5 = { style: tmp.text, variant: "text-sm/medium", children: null };
  const intl2 = tmp2(1236).intl;
  const string = intl2.string;
  const t = tmp2(1236).t;
  if (someResult) {
    let stringResult = string(t.RMmWY3);
  } else {
    stringResult = string(t.d81BkZ);
  }
  const obj6 = { children: null };
  obj5[2] = stringResult;
  const items3 = [callback2(Text.Text, obj5), ];
  const obj7 = { style: tmp.text, variant: "text-sm/medium", children: null };
  const intl3 = tmp2(1236).intl;
  obj7[2] = intl3.format(getSystemLocale.t.r0IGsP, { guildName: stateFromStores.name, guildSubscriptionQuantity: num });
  items3[1] = callback2(Text.Text, obj7);
  obj4[1] = items3;
  items2[1] = closure_10(closure_5, obj4);
  obj6[0] = items2;
  items1[1] = closure_10(closure_5, obj6);
  obj[3] = items1;
  return closure_10(tmp11, obj);
};