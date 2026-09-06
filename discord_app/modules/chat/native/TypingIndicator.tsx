// discord_app/modules/chat/native/TypingIndicator.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import native from "../../../../discord_common/js/packages/design/native.tsx";
import NicknameUtilsDefault from "../../../utils/NicknameUtils.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import springPresets from "../../../design/animation/reanimated/spring/springPresets.tsx";
import CustomTypingIndicatorUtils from "../../custom_typing_indicator/CustomTypingIndicatorUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import DevSettingsStore from "../../devtools/dev_settings/DevSettingsStore.tsx";
import RawGuildEmojiStore from "../../emojis/RawGuildEmojiStore.tsx";
import TypingStore from "../../../stores/TypingStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
function TypingIndicatorInner(channel) {
  channel = channel.channel;
  ({ typingUserIds, transitionState } = channel);
  const cleanUp = channel.cleanUp;
  closure_6 = undefined;
  let sharedValue;
  let sharedValue1;
  let obj = channel(cleanUp[14]);
  let customTypingIndicatorConfig = obj.useCustomTypingIndicatorConfig("TypingIndicatorInner");
  const canView = customTypingIndicatorConfig.canView;
  let obj1 = channel(cleanUp[11]);
  let items = [closure_6];
  const stateFromStores = obj1.useStateFromStores(items, () => closure_6.get("preview_own_typing_indicator"));
  let obj2 = canView;
  const callback = canView.useCallback(() => {
    const result = channel(cleanUp[15]).openCustomTypingIndicatorAnnounceActionSheet();
  }, []);
  obj = { channelId: channel.id, guildId: channel.getGuildId(), typingUserIds };
  const tmp7Result = transitionState(cleanUp[16])(obj);
  let first = null;
  if (1 === typingUserIds.length) {
    first = typingUserIds[0];
  }
  let tmpResult = tmp(tmp2[11]);
  const items1 = [TypingStore, UserStore, sharedValue];
  const items2 = [first, canView, stateFromStores, channel];
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(
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
  const effect = obj2.useEffect(() => {
    if (closure_6) {
      const obj = { channel_id: null, channel_type: null };
      ({ id: obj2.channel_id, type: obj2.channel_type } = channel);
      obj.track(AnalyticEvents.TYPING_INDICATOR_STYLE_SEEN, obj);
    }
  }, items3);
  tmpResult = tmp(tmp2[20]);
  sharedValue = tmpResult.useSharedValue(undefined);
  const items4 = [sharedValue];
  const callback1 = obj2.useCallback((nativeEvent) => {
    const result = sharedValue.set(nativeEvent.nativeEvent.layout);
  }, items4);
  let tmp7 = transitionState(cleanUp[16]);
  const tmp15 = closure_15(
    channel(cleanUp[21]).useToken(transitionState(cleanUp[13]).modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING),
  );
  const tmpResult1 = channel(cleanUp[21]);
  sharedValue1 = channel(cleanUp[20]).useSharedValue(0);
  const items5 = [cleanUp, transitionState, sharedValue1];
  const effect1 = obj2.useEffect(() => {
    if (transitionState === native.TransitionStates.YEETED) {
      const result = sharedValue1.set(0);
      cleanUp();
    }
  }, items5);
  const tmpResult2 = channel(cleanUp[20]);
  class O {
    constructor() {
      return closure_7.get();
    }
  }
  O.__closure = { typingIndicatorLayout: sharedValue };
  O.__workletHash = 10758673194436;
  O.__initData = __initData;
  class V {
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
        obj = closure_0(closure_2[23]);
        tmp7 = -channel.height;
        str = "respect-motion-settings";
        result = closure_8.set(
          obj.withSpring(tmp7, closure_0(closure_2[24]).springStandard, "respect-motion-settings"),
        );
      }
      return;
    }
  }
  obj = {
    translateYValue: sharedValue1,
    withSpring: tmp(tmp2[23]).withSpring,
    springStandard: tmp(tmp2[24]).springStandard,
  };
  V.__closure = obj;
  V.__workletHash = 14874351700395;
  V.__initData = __initData2;
  const animatedReaction = channel(cleanUp[20]).useAnimatedReaction(O, V);
  const tmpResult3 = channel(cleanUp[20]);
  const fn = function z() {
    value = sharedValue.get();
    let obj = sharedValue1;
    if (0 === sharedValue1.get()) {
      let num = 0;
    } else {
      num = 1;
    }
    obj = { opacity: num, top: null, transform: null };
    let height;
    if (value != null) {
      height = value.height;
    }
    obj.top = height;
    obj = { translateY: obj.get() };
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  obj1 = {
    typingIndicatorLayout: sharedValue,
    translateYValue: sharedValue1,
    transitionState,
    TransitionStates: tmp(tmp2[22]).TransitionStates,
  };
  fn.__closure = obj1;
  fn.__workletHash = 15240163018691;
  fn.__initData = __initData3;
  const animatedStyle = channel(cleanUp[20]).useAnimatedStyle(fn);
  obj2 = { style: null, onLayout: callback1, children: null };
  const items6 = [tmp15.typingWrapper, animatedStyle];
  obj2.style = items6;
  const obj3 = { style: tmp15.wrapperHoriz, children: null };
  const obj4 = { style: tmp15.horiz, children: null };
  if (null != stateFromStoresObject.config) {
    const obj5 = { config: null, username: null, onPress: null };
    ({ config: obj18.config, name: obj18.username } = stateFromStoresObject);
    let tmp27;
    if (customTypingIndicatorConfig.canSet) {
      tmp27 = callback;
    }
    obj5.onPress = tmp27;
    let tmp21Result = closure_12(transitionState(tmp2[25]), obj5);
    const tmp6Result = transitionState(tmp2[25]);
  } else {
    let tmp20Result = null;
    if (null != tmp7Result) {
      tmp20Result = closure_12(tmp(tmp2[26]).Ellipsis, {});
    }
    const obj6 = { children: null };
    const items7 = [tmp20Result];
    const obj7 = {
      style: tmp15.text,
      lineClamp: 1,
      maxFontSizeMultiplier: 2,
      variant: "text-xs/medium",
      color: "interactive-text-default",
      includeFontPadding: true,
      ellipsizeMode: "tail",
      children: tmp7Result,
    };
    items7[1] = closure_12(tmp(tmp2[27]).Text, obj7);
    obj6.children = items7;
    tmp21Result = closure_14(closure_13, obj6);
  }
  obj4.children = tmp21Result;
  const items8 = [closure_12(stateFromStores, obj4)];
  let tmp20Result1 = null;
  if (channel.rateLimitPerUser > 0) {
    const obj8 = { channel, hasTypingText: null != tmp7Result, slowmodeType: sharedValue1.SendMessage };
    tmp20Result1 = closure_12(transitionState(tmp2[28]), obj8);
  }
  items8[1] = tmp20Result1;
  obj3.children = items8;
  obj2.children = closure_14(stateFromStores, obj3);
  return closure_12(transitionState(cleanUp[20]).View, obj2);
}
function renderTypingIndicator(arg0, arg1, transitionState, cleanUp) {
  const obj = {};
  const merged = Object.assign(arg1);
  obj.transitionState = transitionState;
  obj.cleanUp = cleanUp;
  return closure_1_12(TypingIndicatorInner, obj, arg0);
}
const View = fn(17).View;
let closure_5 = fn(9485).useChatShowingAutoComplete;
const SlowmodeType = fn(7687).SlowmodeType;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(4560);
let closure_15 = createStyles.createStyles((arg0) => {
  let obj = { typingWrapper: null, wrapperHoriz: null, horiz: null, text: null };
  obj = {
    paddingTop: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_PADDING_TOP,
    paddingBottom: 4,
    paddingHorizontal: 16,
    alignSelf: "stretch",
    backgroundColor: "transparent",
    paddingRight: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING,
    paddingLeft: 2 * arg0,
  };
  obj.typingWrapper = obj;
  obj.wrapperHoriz = { justifyContent: "space-between", flexDirection: "row", alignItems: "center" };
  obj = { marginRight: nativeDefault.space.PX_8, alignItems: "center", flexDirection: "row", flex: 1 };
  obj.horiz = obj;
  obj.text = { flex: 1 };
  return obj;
});
const __initData = {
  code: "function TypingIndicatorTsx1(){const{typingIndicatorLayout}=this.__closure;return typingIndicatorLayout.get();}",
};
const __initData2 = {
  code: "function TypingIndicatorTsx2(current,prev){const{translateYValue,withSpring,springStandard}=this.__closure;if(current===prev)return;if(current==null)return;if(current.y.toFixed(2)!==current.height.toFixed(2))return;translateYValue.set(withSpring(-current.height,springStandard,'respect-motion-settings'));}",
};
const __initData3 = {
  code: "function TypingIndicatorTsx3(){const{typingIndicatorLayout,translateYValue,transitionState,TransitionStates}=this.__closure;const layout=typingIndicatorLayout.get();return{opacity:translateYValue.get()===0||transitionState===TransitionStates.YEETED?0:1,top:layout===null||layout===void 0?void 0:layout.height,transform:[{translateY:translateYValue.get()}]};}",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat/native/TypingIndicator.tsx");

export default noop.memo((channel) => {
  channel = channel.channel;
  const tmp = closure_5(channel.screenIndex);
  let typingUserIds;
  let memo;
  let obj = typingUserIds(memo[10]);
  typingUserIds = obj.useTypingUserIds(channel.id, 4);
  let items = [DevSettingsStore];
  const stateFromStores = typingUserIds(memo[11]).useStateFromStores(items, () =>
    DevSettingsStore.get("preview_own_typing_indicator"),
  );
  const obj2 = typingUserIds(memo[11]);
  const items1 = [UserStore];
  const stateFromStores1 = typingUserIds(memo[11]).useStateFromStores(items1, () => {
    currentUser = currentUser.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  const items2 = [stateFromStores, stateFromStores1, typingUserIds];
  memo = noop.useMemo(() => {
    if (stateFromStores) {
      if (null != memo) {
        const items = [tmp];
        let tmp3 = items;
      }
      return tmp3;
    }
    tmp3 = typingUserIds;
  }, items2);
  const items3 = [channel, memo, tmp];
  const memo1 = noop.useMemo(() => {
    let tmp3 = typingUserIds.rateLimitPerUser > 0;
    if (!tmp3) {
      tmp3 = memo.length > 0;
    }
    if (tmp3) {
      tmp3 = !stateFromStores;
    }
    let tmp4;
    if (tmp3) {
      const obj = { channel: typingUserIds, typingUserIds: memo };
      tmp4 = obj;
    }
    return tmp4;
  }, items3);
  obj = { item: memo1, renderItem: renderTypingIndicator };
  return closure_12(typingUserIds(memo[22]).TransitionItem, obj);
});
export const hasTypingIndicatorContent = function hasTypingIndicatorContent(channel, typingUserIdsForDisplay, arg2) {
  let tmp = channel.rateLimitPerUser > 0;
  if (!tmp) {
    tmp = typingUserIdsForDisplay.length > 0;
  }
  if (tmp) {
    tmp = !arg2;
  }
  return tmp;
};
export const useTypingUserIdsForDisplay = function useTypingUserIdsForDisplay(id, arg1) {
  typingUserIds = typingUserIds(stateFromStores1[10]).useTypingUserIds(id, arg1);
  const obj = typingUserIds(stateFromStores1[10]);
  const items = [DevSettingsStore];
  const stateFromStores = typingUserIds(stateFromStores1[11]).useStateFromStores(items, () =>
    DevSettingsStore.get("preview_own_typing_indicator"),
  );
  const obj2 = typingUserIds(stateFromStores1[11]);
  const items1 = [UserStore];
  stateFromStores1 = typingUserIds(stateFromStores1[11]).useStateFromStores(items1, () => {
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
      if (null != memo) {
        const items = [tmp];
        let tmp3 = items;
      }
      return tmp3;
    }
    tmp3 = typingUserIds;
  }, items2);
};
