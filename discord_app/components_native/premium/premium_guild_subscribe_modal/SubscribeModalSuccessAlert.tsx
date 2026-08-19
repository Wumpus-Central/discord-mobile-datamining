// === Module 13054: PremiumPaymentGuildAnimation ===

// Module 13054 (PremiumPaymentGuildAnimation)
import initialize from "initialize" /* 589 */;
import keys from "keys" /* 691 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import useThemeDefault from "useTheme" /* 4310 */;
import Text from "Text" /* 4734 */;
import LinearGradientDefault from "LinearGradient" /* 4756 */;
import componentDidMountDefault from "componentDidMount" /* 4763 */;
import componentDidMountDefault2 from "componentDidMount" /* 13055 */;
import _mod13056 from "module_13056" /* 13056 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import { Gradients } from "items" /* 7403 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
class PremiumPaymentGuildAnimation {
  constructor(arg0) {
    ({ nextScene, onSceneComplete, loop } = global);
    tmp = closure_11();
    obj = { nextScene, onSceneComplete, loop, sceneSegments: closure_12, style: tmp.animation, source: null };
    tmp2 = require("componentDidMount");
    obj[5] = require("module_13056");
    return jsx(tmp2, obj);
  }
}
({ View: c5, Image: closure_6 } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10 } = jsxProd);
const createCacheKey = { padding: 2, borderRadius: ThemesDefault.radii.xs, marginTop: 8 };
createCacheKey[3] = createCacheKey;
createCacheKey[4] = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, paddingVertical: 12, paddingHorizontal: 20, alignItems: "center" };
createCacheKey[5] = { width: 220 };
createCacheKey[6] = { marginTop: 24 };
let closure_11 = createCacheKey.createStyles(createCacheKey);
let obj2 = { ENTRY: "entry", IDLE: "idle" };
let closure_12 = { [obj2.ENTRY]: { BEG: 0, END: 180 }, [obj2.IDLE]: { BEG: 180, END: 360 } };
PremiumPaymentGuildAnimation.Scenes = obj2;
const result = require("obj132").fileFinishedImporting("components_native/premium/premium_guild_subscribe_modal/SubscribeModalSuccessAlert.tsx");

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
    someResult = guildBoostSlots.some((item, index) => null != item.premiumGuildSubscription);
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
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.YKxJCI);
  obj[2] = function onConfirm() {
    callback2(4656).close();
    const obj = callback2(4656);
    callback(6710).closeApplyBoostModal();
  };
  obj = {
    nextScene: tmp6[0],
    loop: tmp7[0],
    onSceneComplete(currentScene) {
      if (PremiumPaymentGuildAnimation.Scenes.ENTRY === currentScene) {
        return callback2(PremiumPaymentGuildAnimation.Scenes.IDLE);
      } else if (PremiumPaymentGuildAnimation.Scenes.IDLE === currentScene) {
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
  if (tmp2Result.isThemeLight(tmp9)) {
    let tmp8Result = tmp8(13057);
  } else {
    tmp8Result = tmp8(13058);
  }
  obj3[1] = tmp8Result;
  obj2[1] = callback2(closure_6, obj3);
  obj1[4] = callback2(closure_5, obj2);
  const items2 = [callback2(tmp14, obj1), ];
  const obj4 = { style: tmp.successInfo, children: null };
  const obj5 = { style: tmp.text, variant: "text-sm/medium", children: null };
  const intl2 = getSystemLocale.intl;
  const string = intl2.string;
  const t = getSystemLocale.t;
  if (someResult) {
    let stringResult = string(t.RMmWY3);
  } else {
    stringResult = string(t.d81BkZ);
  }
  const obj6 = { children: null };
  obj5[2] = stringResult;
  const items3 = [callback2(Text.Text, obj5), ];
  const obj7 = { style: tmp.text, variant: "text-sm/medium", children: null };
  const intl3 = getSystemLocale.intl;
  obj7[2] = intl3.format(getSystemLocale.t.r0IGsP, { guildName: stateFromStores.name, guildSubscriptionQuantity: num });
  items3[1] = callback2(Text.Text, obj7);
  obj4[1] = items3;
  items2[1] = callback(closure_5, obj4);
  obj6[0] = items2;
  items1[1] = callback(closure_5, obj6);
  obj[3] = items1;
  return callback(tmp11, obj);
};