import _slicedToArray from "_slicedToArray";
import registerAsset from "registerAsset";
import get_ActivityIndicator from "keys";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import { Gradients } from "items";
import jsxProd from "Text";
import createCacheKey from "createCacheKey";

let c10;
let c5;
let c9;
let closure_6;
const require = arg1;
class PremiumPaymentGuildAnimation {
  constructor(arg0) {
    ({ nextScene, onSceneComplete, loop } = global);
    tmp = jsxs();
    obj = { nextScene, onSceneComplete, loop, sceneSegments: idle, style: tmp.animation, source: null };
    tmp2 = require("componentDidMount");
    obj[5] = require("module_12801");
    return jsx(tmp2, obj);
  }
}
({ View: c5, Image: closure_6 } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { wrapper: { paddingHorizontal: 24, paddingBottom: 16, paddingTop: 4, alignItems: "stretch" }, animation: { width: "auto", height: 112, alignSelf: "center" }, text: { lineHeight: 18, textAlign: "center" }, activated: null, activatedBackground: null, activatedImage: null, successInfo: null };
createCacheKey = { padding: 2, borderRadius: require("Themes").radii.xs, marginTop: 8 };
createCacheKey[3] = createCacheKey;
createCacheKey[4] = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, paddingVertical: 12, paddingHorizontal: 20, alignItems: "center" };
createCacheKey[5] = { width: 220 };
createCacheKey[6] = { marginTop: 24 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { ENTRY: "entry", IDLE: "idle" };
let closure_12 = { [obj2.ENTRY]: { BEG: 0, END: 180 }, [obj2.IDLE]: { BEG: 180, END: 360 } };
PremiumPaymentGuildAnimation.Scenes = obj2;
let obj1 = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, paddingVertical: 12, paddingHorizontal: 20, alignItems: "center" };
const result = require("get ActivityIndicator").fileFinishedImporting("components_native/premium/premium_guild_subscribe_modal/SubscribeModalSuccessAlert.tsx");

export default function SubscribeModalSuccessAlert(arg0) {
  let guildBoostSlots;
  let require;
  ({ guildId: require, guildBoostSlots } = arg0);
  let importDefault;
  let dependencyMap;
  const tmp = createCacheKey();
  let obj = require(589) /* initialize */;
  const items = [createGuildRecordFromRust];
  let someResult = null != guildBoostSlots;
  const stateFromStores = obj.useStateFromStores(items, () => outer1_7.getGuild(closure_0));
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
  const tmp9 = importDefault(4221)();
  const intl = tmp2(1236).intl;
  obj[1] = intl.string(require(1236) /* getSystemLocale */.t.YKxJCI);
  obj[2] = function onConfirm() {
    callback2(4624).close();
    const obj = callback2(4624);
    callback(5118).closeApplyBoostModal();
  };
  obj = {
    nextScene: tmp6[0],
    loop: tmp7[0],
    onSceneComplete(currentScene) {
      if (outer1_13.Scenes.ENTRY === currentScene) {
        return callback2(tmp.Scenes.IDLE);
      } else if (tmp.Scenes.IDLE === currentScene) {
        return dependencyMap(true);
      }
    }
  };
  const items1 = [callback2(PremiumPaymentGuildAnimation, obj), ];
  const obj1 = { style: tmp.activated, start: null, end: null, colors: null, children: null };
  const tmp11 = importDefault(4713);
  obj1[1] = require(691) /* keys */.HorizontalGradient.START;
  obj1[2] = require(691) /* keys */.HorizontalGradient.END;
  obj1[3] = Gradients.PREMIUM_GUILD;
  const obj2 = { style: tmp.activatedBackground, children: null };
  const obj3 = { style: tmp.activatedImage, source: null };
  const tmp14 = importDefault(4706);
  const tmp15 = closure_6;
  if (tmp2Result.isThemeLight(tmp9)) {
    let tmp8Result = tmp8(12802);
  } else {
    tmp8Result = tmp8(12803);
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
  const items3 = [callback2(require(4281) /* Text */.Text, obj5), ];
  const obj7 = { style: tmp.text, variant: "text-sm/medium", children: null };
  const intl3 = tmp2(1236).intl;
  obj7[2] = intl3.format(require(1236) /* getSystemLocale */.t.r0IGsP, { guildName: stateFromStores.name, guildSubscriptionQuantity: num });
  items3[1] = callback2(require(4281) /* Text */.Text, obj7);
  obj4[1] = items3;
  items2[1] = closure_10(closure_5, obj4);
  obj6[0] = items2;
  items1[1] = closure_10(closure_5, obj6);
  obj[3] = items1;
  return closure_10(tmp11, obj);
};