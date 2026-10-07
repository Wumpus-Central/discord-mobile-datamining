// === Module 13448: SubscribeModalSuccessAlert ===

// Module 13448 (SubscribeModalSuccessAlert)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ConstantsIOS from "ConstantsIOS" /* 1105 */;
import util from "util" /* 1126 */;
import useThemeDefault from "useTheme" /* 4797 */;
import Text_Text from "Text/Text" /* 4892 */;
import LinearGradientDefault from "LinearGradient" /* 5612 */;
import BoostingActionCreators from "BoostingActionCreators" /* 5619 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5715 */;
import common_AlertDefault from "common/Alert" /* 5790 */;
import _mod13449 from "module_13449" /* 13449 */;
import SequencedLottieAnimationViewDefault from "SequencedLottieAnimationView" /* 13450 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2074 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Image: metroRequire } = get_ActivityIndicator);
const Gradients = fn(6951).Gradients;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4896);
let obj2 = { wrapper: { paddingHorizontal: 24, paddingBottom: 16, paddingTop: 4, alignItems: "stretch" }, animation: { width: "auto", height: 112, alignSelf: "center" }, text: { lineHeight: 18, textAlign: "center" }, activated: { padding: 2, borderRadius: nativeDefault.radii.xs, marginTop: 8 }, activatedBackground: null, activatedImage: null, successInfo: null };
let obj3 = { padding: 2, borderRadius: nativeDefault.radii.xs, marginTop: 8 };
obj2.activatedBackground = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingVertical: 12, paddingHorizontal: 20, alignItems: "center" };
obj2.activatedImage = { width: 220 };
obj2.successInfo = { marginTop: 24 };
let closure_11 = createStyles.createStyles(obj2);
let obj5 = { ENTRY: "entry", IDLE: "idle" };
const sceneSegments = { [obj5.ENTRY]: { BEG: 0, END: 180 }, [obj5.IDLE]: { BEG: 180, END: 360 } };
let ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(6);
  ({ nextScene, onSceneComplete, loop } = arg0);
  const tmp4 = closure_11();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = _mod13449;
    cResult[0] = tmpResult;
    let first = tmpResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === loop) {
    if (cResult[2] === nextScene) {
      if (cResult[3] === onSceneComplete) {
        if (cResult[4] === tmp4.animation) {
          let tmp7 = cResult[5];
        }
        return tmp7;
      }
    }
  }
  const tmp8 = options(SequencedLottieAnimationViewDefault, { nextScene, onSceneComplete, loop, sceneSegments, style: tmp4.animation, source: first });
  cResult[1] = loop;
  cResult[2] = nextScene;
  cResult[3] = onSceneComplete;
  cResult[4] = tmp4.animation;
  cResult[5] = tmp8;
  tmp7 = tmp8;
  const obj2 = { nextScene, onSceneComplete, loop, sceneSegments, style: tmp4.animation, source: first };
}) : ((arg0) => {
  ({ nextScene, onSceneComplete, loop } = arg0);
  const obj = { nextScene, onSceneComplete, loop, sceneSegments, style: closure_11().animation, source: null };
  const tmp = closure_11();
  obj.source = _mod13449;
  return options(SequencedLottieAnimationViewDefault, obj);
});
let closure_13 = tmp4;
tmp4.Scenes = obj5;
ReactCompilerGating = fn(558);
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingVertical: 12, paddingHorizontal: 20, alignItems: "center" };
const size = fn(2);
const result = size.fileFinishedImporting("components_native/premium/premium_guild_subscribe_modal/SubscribeModalSuccessAlert.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = guildId(576).c(42);
  guildId = guildId.guildId;
  const guildBoostSlots = guildId.guildBoostSlots;
  const tmp4 = closure_11();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function x() {
      return GuildStore.getGuild(guildId);
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  let obj = guildId(576);
  const stateFromStores = guildId(504).useStateFromStores(first, tmp7);
  if (cResult[3] !== guildBoostSlots) {
    const tmp11 = null != guildBoostSlots && guildBoostSlots.some((premiumGuildSubscription) => null != premiumGuildSubscription.premiumGuildSubscription);
    cResult[3] = guildBoostSlots;
    cResult[4] = tmp11;
  }
  let num6;
  if (guildBoostSlots != null) {
    num6 = guildBoostSlots.length;
  }
  if (num6 == null) {
    num6 = 1;
  }
  const tmpResult = guildId(504);
  [tmp14, importDefault] = noop.useState(Scenes.Scenes.ENTRY);
  const tmp13 = _slicedToArray(noop.useState(Scenes.Scenes.ENTRY), 2);
  [tmp16, dependencyMap] = noop.useState(false);
  const tmp15 = _slicedToArray(noop.useState(false), 2);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t.YKxJCI);
    class G {
      constructor() {
        obj = closure_1(closure_2[15]);
        closeResult = obj.close();
        obj2 = guildId(closure_2[16]);
        closeApplyBoostModalResult = obj2.closeApplyBoostModal();
        return;
      }
    }
    cResult[5] = stringResult;
    cResult[6] = G;
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor(arg0) {
        tmp = f63974;
        if (f63974.Scenes.ENTRY === guildId) {
          tmp3 = closure_1;
          return closure_1(tmp.Scenes.IDLE);
        } else if (tmp.Scenes.IDLE === guildId) {
          tmp2 = closure_2;
          flag = true;
          return closure_2(true);
        } else {
          return;
        }
      }
    }
    cResult[7] = R;
    class G {
      constructor() {
        obj = closure_1(closure_2[15]);
        closeResult = obj.close();
        obj2 = guildId(closure_2[16]);
        closeApplyBoostModalResult = obj2.closeApplyBoostModal();
        return;
      }
    }
  } else {
    class R {
      constructor(arg0) {
        tmp = f63974;
        if (f63974.Scenes.ENTRY === guildId) {
          tmp3 = closure_1;
          return closure_1(tmp.Scenes.IDLE);
        } else if (tmp.Scenes.IDLE === guildId) {
          tmp2 = closure_2;
          flag = true;
          return closure_2(true);
        } else {
          return;
        }
      }
    }
  }
  if (cResult[8] === tmp14) {
    class R {
      constructor(arg0) {
        tmp = f63974;
        if (f63974.Scenes.ENTRY === guildId) {
          tmp3 = closure_1;
          return closure_1(tmp.Scenes.IDLE);
        } else if (tmp.Scenes.IDLE === guildId) {
          tmp2 = closure_2;
          flag = true;
          return closure_2(true);
        } else {
          return;
        }
      }
    }
    if (tmpResult2.isThemeLight(tmp17)) {
      class R {
        constructor(arg0) {
          tmp = f63974;
          if (f63974.Scenes.ENTRY === guildId) {
            tmp3 = closure_1;
            return closure_1(tmp.Scenes.IDLE);
          } else if (tmp.Scenes.IDLE === guildId) {
            tmp2 = closure_2;
            flag = true;
            return closure_2(true);
          } else {
            return;
          }
        }
      }
    } else {
      class R {
        constructor(arg0) {
          tmp = f63974;
          if (f63974.Scenes.ENTRY === guildId) {
            tmp3 = closure_1;
            return closure_1(tmp.Scenes.IDLE);
          } else if (tmp.Scenes.IDLE === guildId) {
            tmp2 = closure_2;
            flag = true;
            return closure_2(true);
          } else {
            return;
          }
        }
      }
    }
    class G {
      constructor() {
        obj = closure_1(closure_2[15]);
        closeResult = obj.close();
        obj2 = guildId(closure_2[16]);
        closeApplyBoostModalResult = obj2.closeApplyBoostModal();
        return;
      }
    }
    const obj2 = { style: tmp4.activatedImage, source: tmp23 };
    const tmp27 = closure_9(closure_6, obj2);
    cResult[11] = tmp4.activatedImage;
    cResult[12] = tmp23;
    cResult[13] = tmp27;
    tmpResult2 = tmp(4735);
  }
  tmp17 = useThemeDefault();
  cResult[8] = tmp14;
  cResult[9] = tmp16;
  cResult[10] = closure_9(Scenes, { nextScene: tmp14, loop: tmp16, onSceneComplete: tmp21 });
  const tmp22 = closure_9(Scenes, { nextScene: tmp14, loop: tmp16, onSceneComplete: tmp21 });
}) : ((arg0) => {
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
  const tmp6 = _slicedToArray(noop.useState(Scenes.Scenes.ENTRY), 2);
  importDefault = tmp6[1];
  const tmp7 = _slicedToArray(noop.useState(false), 2);
  dependencyMap = tmp7[1];
  const obj2 = { style: tmp.wrapper, confirmText: null, onConfirm: null, children: null };
  const tmp9 = useThemeDefault();
  const intl = util.intl;
  obj2.confirmText = intl.string(util.t.YKxJCI);
  obj2.onConfirm = function onConfirm() {
    closure_1(5715).close();
    const obj = closure_1(5715);
    BoostingActionCreators.closeApplyBoostModal();
  };
  const items1 = [
    closure_9(Scenes, {
      nextScene: tmp6[0],
      loop: tmp7[0],
      onSceneComplete(currentScene) {
        if (Scenes.Scenes.ENTRY === currentScene) {
          return closure_1(Scenes.Scenes.IDLE);
        } else if (Scenes.Scenes.IDLE === currentScene) {
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
      if (Scenes.Scenes.ENTRY === currentScene) {
        return closure_1(Scenes.Scenes.IDLE);
      } else if (Scenes.Scenes.IDLE === currentScene) {
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
    let tmp8Result = tmp8(13451);
  } else {
    tmp8Result = tmp8(13452);
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
});