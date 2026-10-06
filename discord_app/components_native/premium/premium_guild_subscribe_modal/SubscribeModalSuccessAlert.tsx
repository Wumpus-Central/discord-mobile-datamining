// discord_app/components_native/premium/premium_guild_subscribe_modal/SubscribeModalSuccessAlert.tsx
import get_initialized from "../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ConstantsIOS from "../../../ConstantsIOS.tsx";
import intl4 from "../../../intl/index.native.tsx";
import shared from "../../../design/shared.tsx";
import useThemeDefault from "../../../hooks/useTheme.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import LinearGradientDefault from "../../../../_runtime/05612_LinearGradient.js";
import actions_AlertActionCreatorsDefault from "../../../actions/native/AlertActionCreators.tsx";
import AlertDefault from "../../common/Alert.tsx";
import ColorConstants from "../../../modules/colors/native/ColorConstants.tsx";
import _mod13449 from "../../../../_runtime/metro/13449__.js";
import SequencedLottieAnimationViewDefault from "../../common/SequencedLottieAnimationView.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import GuildStore from "../../../stores/GuildStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let dependencyMap, guildId, importDefault;

let c10;
let c9;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
({ View: hasOwnProperty, Image: metroRequire } = react_native);
const Gradients = ColorConstants.Gradients;
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  wrapper: { paddingHorizontal: 24, paddingBottom: 16, paddingTop: 4, alignItems: "stretch" },
  animation: { width: "auto", height: 112, alignSelf: "center" },
  text: { lineHeight: 18, textAlign: "center" },
  activated: obj2,
  activatedBackground: obj3,
  activatedImage: { width: 220 },
  successInfo: { marginTop: 24 },
};
obj2 = { padding: 2, borderRadius: nativeDefault.radii.xs, marginTop: 8 };
createStyles = createStyles.createStyles;
obj3 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  paddingVertical: 12,
  paddingHorizontal: 20,
  alignItems: "center",
};
let closure_11 = createStyles(obj);
let obj4 = { ENTRY: "entry", IDLE: "idle" };
const sceneSegments = { [obj4.ENTRY]: { BEG: 0, END: 180 }, [obj4.IDLE]: { BEG: 180, END: 360 } };
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let first;
      let loop;
      let nextScene;
      let onSceneComplete;
      const obj = react2;
      const cResult = obj.c(6);
      ({ nextScene, onSceneComplete, loop } = arg0);
      const tmp4 = closure_11();
      const animation = tmp4.animation;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmpResult = _mod13449;
        cResult[0] = tmpResult;
        first = tmpResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === loop) {
        if (cResult[2] === nextScene) {
          if (cResult[3] === onSceneComplete) {
            let tmp7;
            if (cResult[4] === tmp4.animation) {
              tmp7 = cResult[5];
            }
            return tmp7;
          }
        }
      }
      const obj2 = { nextScene, onSceneComplete, loop, sceneSegments, style: animation, source: first };
      const tmp8 = React4(SequencedLottieAnimationViewDefault, obj2);
      cResult[1] = loop;
      cResult[2] = nextScene;
      cResult[3] = onSceneComplete;
      cResult[4] = tmp4.animation;
      cResult[5] = tmp8;
      tmp7 = tmp8;
    }
  : (arg0) => {
      let loop;
      let nextScene;
      let onSceneComplete;
      ({ nextScene, onSceneComplete, loop } = arg0);
      const obj = { nextScene, onSceneComplete, loop, sceneSegments, style: closure_11().animation, source: _mod13449 };
      const tmp2 = SequencedLottieAnimationViewDefault;
      return React4(tmp2, obj);
    };
let closure_13 = tmp5;
tmp5.Scenes = obj4;
ReactCompilerGating = ReactCompilerGating_mod;
const tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let first;
      let tmp14;
      let tmp16;
      let tmp7;
      const f114942 = (premiumGuildSubscription) => null != premiumGuildSubscription.premiumGuildSubscription;
      let obj = guildId(576);
      const cResult = obj.c(42);
      guildId = guildId.guildId;
      const guildBoostSlots = guildId.guildBoostSlots;
      const tmp4 = closure_11();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guildId) {
        const fn = function x() {
          return GuildStore.getGuild(guildId);
        };
        cResult[1] = guildId;
        cResult[2] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const tmpResult = guildId(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
      if (cResult[3] !== guildBoostSlots) {
        cResult[3] = guildBoostSlots;
        cResult[4] = null != guildBoostSlots && guildBoostSlots.some(f114942);
        const tmp11 = null != guildBoostSlots && guildBoostSlots.some(f114942);
      }
      let num6;
      if (guildBoostSlots != null) {
        num6 = guildBoostSlots.length;
      }
      if (num6 == null) {
        num6 = 1;
      }
      [tmp14, importDefault] = react.useState(Scenes.Scenes.ENTRY);
      _slicedToArray(react.useState(Scenes.Scenes.ENTRY), 2);
      [tmp16, dependencyMap] = react.useState(false);
      _slicedToArray(react.useState(false), 2);
      const tmp17 = useThemeDefault();
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(guildId(1126).t.YKxJCI);
        class G {
          constructor() {
            const obj = actions_AlertActionCreatorsDefault;
            obj.close();
            const obj2 = guildId(dependencyMap[16]);
            obj2.closeApplyBoostModal();
          }
        }
        cResult[5] = stringResult;
        cResult[6] = G;
      }
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        class R {
          constructor(arg0) {
            if (Scenes.Scenes.ENTRY === arg0) {
              return importDefault(Scenes.Scenes.IDLE);
            } else if (Scenes.Scenes.IDLE === arg0) {
              return dependencyMap(true);
            }
          }
        }
        cResult[7] = R;
        class G {
          constructor() {
            const obj = actions_AlertActionCreatorsDefault;
            obj.close();
            const obj2 = guildId(dependencyMap[16]);
            obj2.closeApplyBoostModal();
          }
        }
      } else {
        class R {
          constructor(arg0) {
            if (Scenes.Scenes.ENTRY === arg0) {
              return importDefault(Scenes.Scenes.IDLE);
            } else if (Scenes.Scenes.IDLE === arg0) {
              return dependencyMap(true);
            }
          }
        }
      }
      if (cResult[8] === tmp14) {
        class R {
          constructor(arg0) {
            if (Scenes.Scenes.ENTRY === arg0) {
              return importDefault(Scenes.Scenes.IDLE);
            } else if (Scenes.Scenes.IDLE === arg0) {
              return dependencyMap(true);
            }
          }
        }
        const tmpResult2 = guildId(4735);
        if (tmpResult2.isThemeLight(tmp17)) {
          class R {
            constructor(arg0) {
              if (Scenes.Scenes.ENTRY === arg0) {
                return importDefault(Scenes.Scenes.IDLE);
              } else if (Scenes.Scenes.IDLE === arg0) {
                return dependencyMap(true);
              }
            }
          }
        } else {
          class R {
            constructor(arg0) {
              if (Scenes.Scenes.ENTRY === arg0) {
                return importDefault(Scenes.Scenes.IDLE);
              } else if (Scenes.Scenes.IDLE === arg0) {
                return dependencyMap(true);
              }
            }
          }
        }
        class G {
          constructor() {
            const obj = actions_AlertActionCreatorsDefault;
            obj.close();
            const obj2 = guildId(dependencyMap[16]);
            obj2.closeApplyBoostModal();
          }
        }
        let obj2 = { style: tmp4.activatedImage, source: tmp23 };
        cResult[11] = tmp4.activatedImage;
        cResult[12] = tmp23;
        cResult[13] = closure_9(closure_6, obj2);
        const tmp27 = closure_9(closure_6, obj2);
      }
      cResult[8] = tmp14;
      cResult[9] = tmp16;
      cResult[10] = closure_9(Scenes, { nextScene: tmp14, loop: tmp16, onSceneComplete: tmp21 });
      closure_9(Scenes, { nextScene: tmp14, loop: tmp16, onSceneComplete: tmp21 });
    }
  : (arg0) => {
      let closure_1;
      let closure_2;
      let first;
      let first1;
      let guildBoostSlots;
      let intl;
      let intl3;
      let items1;
      let items3;
      let obj11;
      let obj5;
      let obj6;
      let stringResult;
      let tmp10Result;
      ({ guildId: require, guildBoostSlots } = arg0);
      importDefault = undefined;
      dependencyMap = undefined;
      const tmp = closure_11();
      let obj = get_initialized;
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
      [first, importDefault] = react.useState(Scenes.Scenes.ENTRY);
      [first1, dependencyMap] = react.useState(false);
      let obj2 = {
        style: tmp.wrapper,
        confirmText: intl.string(intl4.t.YKxJCI),
        onConfirm() {
          const obj = closure_1(closure_2[15]);
          obj.close();
          const obj2 = require("BoostingActionCreators");
          obj2.closeApplyBoostModal();
        },
        children: items1,
      };
      const tmp11 = useThemeDefault();
      const tmp13 = AlertDefault;
      intl = intl4.intl;
      items1 = [,];
      const obj3 = {
        nextScene: first,
        loop: first1,
        onSceneComplete(currentScene) {
          if (Scenes.Scenes.ENTRY === currentScene) {
            return closure_1(Scenes.Scenes.IDLE);
          } else if (Scenes.Scenes.IDLE === currentScene) {
            return closure_2(true);
          }
        },
      };
      items1[0] = closure_9(Scenes, obj3);
      const obj4 = {
        style: tmp.activated,
        start: ConstantsIOS.HorizontalGradient.START,
        end: ConstantsIOS.HorizontalGradient.END,
        colors: Gradients.PREMIUM_GUILD,
        children: closure_9(closure_5, obj5),
      };
      const tmp16 = LinearGradientDefault;
      obj5 = { style: tmp.activatedBackground, children: closure_9(closure_6, obj6) };
      obj6 = { style: tmp.activatedImage, source: tmp10Result };
      const tmp2Result = shared;
      if (tmp2Result.isThemeLight(tmp11)) {
        tmp10Result = tmp10(13451);
      } else {
        tmp10Result = tmp10(13452);
      }
      const items2 = [closure_9(tmp16, obj4)];
      const obj7 = { style: tmp.successInfo, children: items3 };
      const obj8 = { style: tmp.text, variant: "text-sm/medium", children: stringResult };
      const Text = Text_Text.Text;
      const intl2 = intl4.intl;
      const string = intl2.string;
      const t = intl4.t;
      if (someResult) {
        stringResult = string(t.RMmWY3);
      } else {
        stringResult = string(t.d81BkZ);
      }
      const obj9 = { children: items2 };
      items3 = [closure_9(Text, obj8)];
      const obj10 = { style: tmp.text, variant: "text-sm/medium", children: intl3.format(intl4.t.r0IGsP, obj11) };
      const Text2 = Text_Text.Text;
      intl3 = intl4.intl;
      obj11 = { guildName: stateFromStores.name, guildSubscriptionQuantity: num };
      items3[1] = closure_9(Text2, obj10);
      items2[1] = closure_10(closure_5, obj7);
      items1[1] = closure_10(closure_5, obj9);
      return closure_10(tmp13, obj2);
    };
const result = size.fileFinishedImporting(
  "components_native/premium/premium_guild_subscribe_modal/SubscribeModalSuccessAlert.tsx",
);

export default tmp6;
