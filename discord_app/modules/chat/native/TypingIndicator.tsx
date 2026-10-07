// discord_app/modules/chat/native/TypingIndicator.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import native from "../../../../discord_common/js/packages/design/native.tsx";
import NicknameUtilsDefault from "../../../utils/NicknameUtils.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import springPresets from "../../../design/animation/reanimated/spring/springPresets.tsx";
import useTypingUsersIds from "../useTypingUsersIds.tsx";
import CustomTypingIndicatorUtils from "../../custom_typing_indicator/CustomTypingIndicatorUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import DevSettingsStore from "../../devtools/dev_settings/DevSettingsStore.tsx";
import RawGuildEmojiStore from "../../emojis/RawGuildEmojiStore.tsx";
import TypingStore from "../../../stores/TypingStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
function renderTypingIndicator(arg0, arg1, transitionState, cleanUp) {
  const obj = {};
  const merged = Object.assign(arg1);
  obj.transitionState = transitionState;
  obj.cleanUp = cleanUp;
  return __initData(closure_23, obj, arg0);
}
const View = fn(17).View;
let closure_5 = fn(9100).useChatShowingAutoComplete;
const SlowmodeType = fn(7184).SlowmodeType;
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = jsxProd);
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      const cResult = c.c(8);
      const typingUserIds = useTypingUsersIds.useTypingUserIds(arg0, arg1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [DevSettingsStore];
        const fn = function s() {
          return DevSettingsStore.get("preview_own_typing_indicator");
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const stateFromStores = initialize.useStateFromStores(tmp5, tmp6);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [UserStore];
        const fn2 = function h() {
          currentUser = currentUser.getCurrentUser();
          let id;
          if (currentUser != null) {
            id = currentUser.id;
          }
          return id;
        };
        cResult[2] = items1;
        cResult[3] = fn2;
        let tmp10 = fn2;
        let tmp9 = items1;
      } else {
        tmp9 = cResult[2];
        tmp10 = cResult[3];
      }
      const tmpResult = initialize;
      const stateFromStores1 = initialize.useStateFromStores(tmp9, tmp10);
      if (cResult[4] === stateFromStores1) {
        if (cResult[5] === stateFromStores) {
          if (cResult[6] === typingUserIds) {
            let tmp13 = cResult[7];
          }
          return tmp13;
        }
      }
      let tmp14 = typingUserIds;
      if (stateFromStores) {
        tmp14 = typingUserIds;
        if (null != stateFromStores1) {
          const items2 = [stateFromStores1];
          tmp14 = items2;
        }
      }
      cResult[4] = stateFromStores1;
      cResult[5] = stateFromStores;
      cResult[6] = typingUserIds;
      cResult[7] = tmp14;
      tmp13 = tmp14;
      const tmpResult2 = initialize;
    }
  : (arg0, arg1) => {
      typingUserIds = typingUserIds(stateFromStores1[12]).useTypingUserIds(arg0, arg1);
      const obj = typingUserIds(stateFromStores1[12]);
      let items = [DevSettingsStore];
      const stateFromStores = typingUserIds(stateFromStores1[13]).useStateFromStores(items, () =>
        DevSettingsStore.get("preview_own_typing_indicator"),
      );
      const obj2 = typingUserIds(stateFromStores1[13]);
      const items1 = [UserStore];
      stateFromStores1 = typingUserIds(stateFromStores1[13]).useStateFromStores(items1, () => {
        currentUser = currentUser.getCurrentUser();
        let id;
        if (currentUser != null) {
          id = currentUser.id;
        }
        return id;
      });
      const items2 = [stateFromStores, stateFromStores1, typingUserIds];
      return noop.useMemo(() => {
        if (stateFromStores) {
          if (null != stateFromStores1) {
            const items = [tmp];
            let tmp3 = items;
          }
          return tmp3;
        }
        tmp3 = typingUserIds;
      }, items2);
    };
let closure_15 = tmp3;
const createStyles = fn(4896);
let closure_16 = createStyles.createStyles((arg0) => {
  const obj = {
    typingWrapper: {
      paddingTop: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_PADDING_TOP,
      paddingBottom: 4,
      paddingHorizontal: 16,
      alignSelf: "stretch",
      backgroundColor: "transparent",
      paddingRight: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING,
      paddingLeft: 2 * arg0,
    },
    wrapperHoriz: { justifyContent: "space-between", flexDirection: "row", alignItems: "center" },
    horiz: null,
    text: null,
  };
  const obj2 = {
    paddingTop: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_PADDING_TOP,
    paddingBottom: 4,
    paddingHorizontal: 16,
    alignSelf: "stretch",
    backgroundColor: "transparent",
    paddingRight: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING,
    paddingLeft: 2 * arg0,
  };
  obj.horiz = { marginRight: nativeDefault.space.PX_8, alignItems: "center", flexDirection: "row", flex: 1 };
  obj.text = { flex: 1 };
  return obj;
});
let closure_17 = {
  code: "function TypingIndicatorTsx1(){const{typingIndicatorLayout}=this.__closure;return typingIndicatorLayout.get();}",
};
let closure_18 = {
  code: 'function TypingIndicatorTsx2(current,prev){const{translateYValue,withSpring,springStandard}=this.__closure;if(current===prev){return;}if(current==null){return;}if(current.y.toFixed(2)!==current.height.toFixed(2)){return;}translateYValue.set(withSpring(-current.height,springStandard,"respect-motion-settings"));}',
};
let closure_19 = {
  code: "function TypingIndicatorTsx3(){const{typingIndicatorLayout,translateYValue,transitionState,TransitionStates}=this.__closure;const layout=typingIndicatorLayout.get();return{opacity:translateYValue.get()===0||transitionState===TransitionStates.YEETED?0:1,top:layout===null||layout===void 0?void 0:layout.height,transform:[{translateY:translateYValue.get()}]};}",
};
const __initData = {
  code: "function TypingIndicatorTsx4(){const{typingIndicatorLayout}=this.__closure;return typingIndicatorLayout.get();}",
};
const __initData2 = {
  code: "function TypingIndicatorTsx5(current,prev){const{translateYValue,withSpring,springStandard}=this.__closure;if(current===prev)return;if(current==null)return;if(current.y.toFixed(2)!==current.height.toFixed(2))return;translateYValue.set(withSpring(-current.height,springStandard,'respect-motion-settings'));}",
};
const __initData3 = {
  code: "function TypingIndicatorTsx6(){const{typingIndicatorLayout,translateYValue,transitionState,TransitionStates}=this.__closure;const layout=typingIndicatorLayout.get();return{opacity:translateYValue.get()===0||transitionState===TransitionStates.YEETED?0:1,top:layout===null||layout===void 0?void 0:layout.height,transform:[{translateY:translateYValue.get()}]};}",
};
ReactCompilerGating = fn(558);
let closure_23 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      const cResult = channel(cleanUp[11]).c(52);
      channel = channel.channel;
      ({ typingUserIds, transitionState } = channel);
      cleanUp = channel.cleanUp;
      let obj = channel(cleanUp[11]);
      let tmp = channel;
      const tmp2 = cleanUp;
      let customTypingIndicatorConfig = channel(cleanUp[16]).useCustomTypingIndicatorConfig("TypingIndicatorInner");
      const canView = customTypingIndicatorConfig.canView;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [DevSettingsStore];
        class T {
          constructor() {
            return closure_6.get("preview_own_typing_indicator");
          }
        }
        cResult[0] = items;
        cResult[1] = T;
        tmp5 = items;
      } else {
        [tmp5, tmp6] = cResult;
      }
      let obj2 = channel(cleanUp[16]);
      const stateFromStores = tmp(tmp2[13]).useStateFromStores(tmp5, T);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        class F {
          constructor() {
            obj = channel(cleanUp[17]);
            result = obj.openCustomTypingIndicatorAnnounceActionSheet();
            return;
          }
        }
        cResult[2] = F;
        class T {
          constructor() {
            return closure_6.get("preview_own_typing_indicator");
          }
        }
      } else {
        class F {
          constructor() {
            obj = channel(cleanUp[17]);
            result = obj.openCustomTypingIndicatorAnnounceActionSheet();
            return;
          }
        }
      }
      if (cResult[3] !== channel) {
        class F {
          constructor() {
            obj = channel(cleanUp[17]);
            result = obj.openCustomTypingIndicatorAnnounceActionSheet();
            return;
          }
        }
        cResult[3] = channel;
        class T {
          constructor() {
            return closure_6.get("preview_own_typing_indicator");
          }
        }
        cResult[4] = tmp10;
      } else {
        class F {
          constructor() {
            obj = channel(cleanUp[17]);
            result = obj.openCustomTypingIndicatorAnnounceActionSheet();
            return;
          }
        }
      }
      if (cResult[5] === channel.id) {
        class F {
          constructor() {
            obj = channel(cleanUp[17]);
            result = obj.openCustomTypingIndicatorAnnounceActionSheet();
            return;
          }
        }
      }
      cResult[5] = channel.id;
      cResult[6] = tmp10;
      cResult[7] = typingUserIds;
      cResult[8] = { channelId: channel.id, guildId: tmp10, typingUserIds };
      let obj3 = { channelId: channel.id, guildId: tmp10, typingUserIds };
      const tmpResult = tmp(tmp2[13]);
    }
  : (channel) => {
      channel = channel.channel;
      ({ typingUserIds, transitionState } = channel);
      const cleanUp = channel.cleanUp;
      closure_6 = undefined;
      let sharedValue;
      let sharedValue1;
      let customTypingIndicatorConfig = channel(cleanUp[16]).useCustomTypingIndicatorConfig("TypingIndicatorInner");
      const canView = customTypingIndicatorConfig.canView;
      let obj = channel(cleanUp[16]);
      let items = [closure_6];
      const stateFromStores = channel(cleanUp[13]).useStateFromStores(items, () =>
        closure_6.get("preview_own_typing_indicator"),
      );
      const callback = canView.useCallback(() => {
        const result = channel(cleanUp[17]).openCustomTypingIndicatorAnnounceActionSheet();
      }, []);
      const obj4 = { channelId: channel.id, guildId: null, typingUserIds: null };
      let obj2 = channel(cleanUp[13]);
      obj4.guildId = channel.getGuildId();
      obj4.typingUserIds = typingUserIds;
      const tmp7Result = transitionState(cleanUp[18])(obj4);
      let first = null;
      if (1 === typingUserIds.length) {
        first = typingUserIds[0];
      }
      let tmp7 = transitionState(cleanUp[18]);
      const items1 = [TypingStore, UserStore, sharedValue];
      const items2 = [first, canView, stateFromStores, channel];
      const stateFromStoresObject = channel(cleanUp[13]).useStateFromStoresObject(
        items1,
        () => {
          if (null != first) {
            if (canView) {
              const user = UserStore.getUser(first);
              if (stateFromStores) {
                let typingIndicatorStyle;
                if (user != null) {
                  typingIndicatorStyle = user.typingIndicatorStyle;
                }
                if (typingIndicatorStyle == null) {
                  typingIndicatorStyle = null;
                }
                let customTypingIndicatorConfig = typingIndicatorStyle;
              } else {
                customTypingIndicatorConfig = TypingStore.getCustomTypingIndicatorConfig(first);
              }
              if (null != customTypingIndicatorConfig) {
                if (null != user) {
                  const guildId = channel.getGuildId();
                  let guildEmojis = null;
                  if (null != guildId) {
                    guildEmojis = RawGuildEmojiStore.getGuildEmojis(guildId);
                  }
                  const obj = { config: null, name: null };
                  const obj2 = CustomTypingIndicatorUtils;
                  obj.config = obj2.getViewableCustomTypingIndicatorConfig(
                    customTypingIndicatorConfig,
                    channel,
                    first,
                    guildEmojis,
                  );
                  obj.name = NicknameUtilsDefault.getName(guildId, channel.id, user);
                  return obj;
                }
              }
              return { config: null, name: null };
            }
          }
          return { config: null, name: null };
        },
        items2,
      );
      closure_6 = tmp11;
      const items3 = [null != stateFromStoresObject.config, ,];
      ({ id: arr4[1], type: arr4[2] } = channel);
      const effect = obj3.useEffect(() => {
        if (closure_6) {
          ({ id: obj2.channel_id, type: obj2.channel_type } = channel);
          AnalyticsUtilsDefault.track(AnalyticEvents.TYPING_INDICATOR_STYLE_SEEN, {
            channel_id: null,
            channel_type: null,
          });
          const obj3 = { channel_id: null, channel_type: null };
        }
      }, items3);
      const tmpResult = channel(cleanUp[13]);
      sharedValue = channel(cleanUp[22]).useSharedValue(undefined);
      const items4 = [sharedValue];
      const callback1 = obj3.useCallback((nativeEvent) => {
        const result = sharedValue.set(nativeEvent.nativeEvent.layout);
      }, items4);
      const tmpResult6 = channel(cleanUp[22]);
      const tmp15 = closure_16(
        channel(cleanUp[23]).useToken(
          transitionState(cleanUp[15]).modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING,
        ),
      );
      const tmpResult7 = channel(cleanUp[23]);
      sharedValue1 = channel(cleanUp[22]).useSharedValue(0);
      const items5 = [cleanUp, transitionState, sharedValue1];
      const effect1 = obj3.useEffect(() => {
        if (transitionState === native.TransitionStates.YEETED) {
          const result = sharedValue1.set(0);
          cleanUp();
        }
      }, items5);
      const tmpResult8 = channel(cleanUp[22]);
      class P {
        constructor() {
          return closure_7.get();
        }
      }
      P.__closure = { typingIndicatorLayout: sharedValue };
      P.__workletHash = 13600672167329;
      P.__initData = __initData;
      class U {
        constructor(arg0, arg1) {
          tmp = channel !== arg1;
          if (tmp) {
            tmp2 = null;
            tmp = null != channel;
          }
          if (tmp) {
            y = channel.y;
            num = 2;
            height = channel.height;
            toFixedResult = y.toFixed(2);
            tmp = toFixedResult === height.toFixed(2);
          }
          if (tmp) {
            tmp4 = closure_8;
            tmp5 = closure_0;
            tmp6 = closure_2;
            obj = closure_0(closure_2[25]);
            tmp7 = -channel.height;
            str = "respect-motion-settings";
            result = closure_8.set(
              obj.withSpring(tmp7, closure_0(closure_2[26]).springStandard, "respect-motion-settings"),
            );
          }
          return;
        }
      }
      const tmpResult9 = channel(cleanUp[22]);
      U.__closure = {
        translateYValue: sharedValue1,
        withSpring: channel(cleanUp[25]).withSpring,
        springStandard: channel(cleanUp[26]).springStandard,
      };
      U.__workletHash = 16463416523660;
      U.__initData = __initData2;
      const animatedReaction = tmpResult9.useAnimatedReaction(P, U);
      const obj5 = {
        translateYValue: sharedValue1,
        withSpring: channel(cleanUp[25]).withSpring,
        springStandard: channel(cleanUp[26]).springStandard,
      };
      class G {
        constructor() {
          value = closure_7.get();
          obj = closure_8;
          if (0 === closure_8.get()) {
            num = 0;
          } else {
            tmp2 = transitionState;
            tmp3 = closure_0;
            tmp4 = closure_2;
            num = 1;
          }
          obj1 = { opacity: num, top: null, transform: null };
          height = undefined;
          if (value != null) {
            height = value.height;
          }
          obj1.top = height;
          obj4 = { translateY: obj.get() };
          items = [];
          items[0] = obj4;
          obj1.transform = items;
          return obj1;
        }
      }
      const tmpResult10 = channel(cleanUp[22]);
      G.__closure = {
        typingIndicatorLayout: sharedValue,
        translateYValue: sharedValue1,
        transitionState,
        TransitionStates: channel(cleanUp[24]).TransitionStates,
      };
      G.__workletHash = 12928775581926;
      G.__initData = __initData3;
      const animatedStyle = tmpResult10.useAnimatedStyle(G);
      const obj7 = { style: null, onLayout: callback1, children: null };
      const items6 = [tmp15.typingWrapper, animatedStyle];
      obj7.style = items6;
      const obj8 = { style: tmp15.wrapperHoriz, children: null };
      const obj9 = { style: tmp15.horiz, children: null };
      if (null != stateFromStoresObject.config) {
        const obj10 = { config: null, username: null, onPress: null };
        ({ config: obj18.config, name: obj18.username } = stateFromStoresObject);
        let tmp27;
        if (customTypingIndicatorConfig.canSet) {
          tmp27 = callback;
        }
        obj10.onPress = tmp27;
        let tmp21Result = closure_12(transitionState(tmp2[27]), obj10);
        const tmp6Result = transitionState(tmp2[27]);
      } else {
        let tmp20Result3 = null;
        if (null != tmp7Result) {
          tmp20Result3 = closure_12(tmp(tmp2[28]).Ellipsis, {});
        }
        const obj11 = { children: null };
        const items7 = [tmp20Result3];
        const obj12 = {
          style: tmp15.text,
          lineClamp: 1,
          maxFontSizeMultiplier: 2,
          variant: "text-xs/medium",
          color: "interactive-text-default",
          includeFontPadding: true,
          ellipsizeMode: "tail",
          children: tmp7Result,
        };
        items7[1] = closure_12(tmp(tmp2[29]).Text, obj12);
        obj11.children = items7;
        tmp21Result = closure_14(closure_13, obj11);
      }
      obj9.children = tmp21Result;
      const items8 = [closure_12(stateFromStores, obj9)];
      let tmp20Result4 = null;
      if (channel.rateLimitPerUser > 0) {
        const obj13 = { channel, hasTypingText: null != tmp7Result, slowmodeType: sharedValue1.SendMessage };
        tmp20Result4 = closure_12(transitionState(tmp2[30]), obj13);
      }
      items8[1] = tmp20Result4;
      obj8.children = items8;
      obj7.children = closure_14(stateFromStores, obj8);
      return closure_12(transitionState(cleanUp[22]).View, obj7);
    };
ReactCompilerGating = fn(558);
function hasTypingIndicatorContent(channel, typingUserIdsForDisplay, arg2) {
  let tmp = channel.rateLimitPerUser > 0;
  if (!tmp) {
    tmp = typingUserIdsForDisplay.length > 0;
  }
  if (tmp) {
    tmp = !arg2;
  }
  return tmp;
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat/native/TypingIndicator.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (channel) => {
        const cResult = c.c(6);
        channel = channel.channel;
        const tmp4 = closure_5(channel.screenIndex);
        const arr = closure_15(channel.id, 4);
        if (cResult[0] === channel) {
          if (cResult[1] === tmp4) {
            if (cResult[2] === arr) {
              let tmp5 = cResult[3];
            }
            if (cResult[4] !== tmp5) {
              const obj2 = { item: tmp5, renderItem: renderTypingIndicator };
              const tmp11 = __initData(native.TransitionItem, obj2);
              cResult[4] = tmp5;
              cResult[5] = tmp11;
              let tmp8 = tmp11;
            } else {
              tmp8 = cResult[5];
            }
            return tmp8;
          }
        }
        let tmp7;
        if (tmp6) {
          const obj3 = { channel, typingUserIds: arr };
          tmp7 = obj3;
        }
        cResult[0] = channel;
        cResult[1] = tmp4;
        cResult[2] = arr;
        cResult[3] = tmp7;
        tmp5 = tmp7;
        tmp6 = (channel.rateLimitPerUser > 0 || arr.length > 0) && !tmp4;
      }
    : (channel) => {
        channel = channel.channel;
        const tmp = closure_5(channel.screenIndex);
        closure_1 = tmp;
        const tmp2 = closure_15(channel.id, 4);
        const typingUserIds = tmp2;
        const items = [channel, tmp2, tmp];
        const memo = noop.useMemo(() => {
          let tmp3 = channel.rateLimitPerUser > 0;
          if (!tmp3) {
            tmp3 = typingUserIds.length > 0;
          }
          if (tmp3) {
            tmp3 = !closure_1;
          }
          let tmp4;
          if (tmp3) {
            const obj = { channel, typingUserIds };
            tmp4 = obj;
          }
          return tmp4;
        }, items);
        return __initData(native.TransitionItem, { item: memo, renderItem: renderTypingIndicator });
      },
);
export { hasTypingIndicatorContent };
export const useTypingUserIdsForDisplay = tmp3;
