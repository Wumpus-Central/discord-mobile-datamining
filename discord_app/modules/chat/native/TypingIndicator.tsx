// discord_app/modules/chat/native/TypingIndicator.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import importAllResult from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { useChatShowingAutoComplete as closure_5 } from "../../chat_input/native/useChatBottomManagerUIStore.tsx";
import closure_6 from "../../devtools/dev_settings/DevSettingsStore.tsx";
import closure_7 from "../../emojis/RawGuildEmojiStore.tsx";
import { SlowmodeType } from "../../../stores/SlowmodeStore.tsx";
import closure_9 from "../../../stores/TypingStore.tsx";
import closure_10 from "../../../stores/UserStore.tsx";
import { AnalyticEvents } from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
function TypingIndicatorInner(channel) {
  channel = channel.channel;
  ({ typingUserIds, transitionState } = channel);
  const cleanUp = channel.cleanUp;
  let canView;
  let stateFromStores;
  let first;
  closure_6 = undefined;
  let sharedValue;
  let sharedValue1;
  let obj = channel(cleanUp[14]);
  let customTypingIndicatorConfig = obj.useCustomTypingIndicatorConfig("TypingIndicatorInner");
  canView = customTypingIndicatorConfig.canView;
  obj1 = channel(cleanUp[11]);
  let items = [closure_6];
  stateFromStores = obj1.useStateFromStores(items, () => closure_6.get("preview_own_typing_indicator"));
  let obj2 = canView;
  const callback = canView.useCallback(() => {
    const result = channel(cleanUp[15]).openCustomTypingIndicatorAnnounceActionSheet();
  }, []);
  obj = { channelId: channel.id, guildId: channel.getGuildId(), typingUserIds };
  const tmp7Result = transitionState(cleanUp[16])(obj);
  first = null;
  if (1 === typingUserIds.length) {
    first = typingUserIds[0];
  }
  let tmpResult = tmp(tmp2[11]);
  const items1 = [closure_9, closure_10, sharedValue];
  const items2 = [first, canView, stateFromStores, channel];
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(
    items1,
    () => {
      if (null != first) {
        if (canView) {
          const user = closure_1_10.getUser(tmp);
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
            customTypingIndicatorConfig = closure_1_9.getCustomTypingIndicatorConfig(tmp);
          }
          if (null != customTypingIndicatorConfig) {
            if (null != user) {
              const guildId = channel.getGuildId();
              let guildEmojis = null;
              if (null != guildId) {
                guildEmojis = sharedValue.getGuildEmojis(guildId);
              }
              const obj = { config: null, name: null };
              const obj2 = channel(cleanUp[17]);
              obj[0] = obj2.getViewableCustomTypingIndicatorConfig(
                customTypingIndicatorConfig,
                channel,
                tmp,
                guildEmojis,
              );
              obj[1] = transitionState(cleanUp[18]).getName(guildId, channel.id, user);
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
      let obj = transitionState(cleanUp[19]);
      obj = { channel_id: null, channel_type: null };
      ({ id: obj2[0], type: obj2[1] } = channel);
      obj.track(closure_1_11.TYPING_INDICATOR_STYLE_SEEN, obj);
    }
  }, items3);
  tmpResult = tmp(tmp2[20]);
  sharedValue = tmpResult.useSharedValue(undefined);
  const items4 = [sharedValue];
  const callback1 = obj2.useCallback((nativeEvent) => {
    const result = sharedValue.set(nativeEvent.nativeEvent.layout);
  }, items4);
  let tmp7 = transitionState(cleanUp[16]);
  const tmp15 = callback3(
    channel(cleanUp[21]).useToken(transitionState(cleanUp[13]).modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING),
  );
  const tmpResult1 = channel(cleanUp[21]);
  sharedValue1 = channel(cleanUp[20]).useSharedValue(0);
  const items5 = [cleanUp, transitionState, sharedValue1];
  const effect1 = obj2.useEffect(() => {
    if (transitionState === channel(cleanUp[22]).TransitionStates.YEETED) {
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
  O.__initData = closure_16;
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
        tmp5 = channel;
        tmp6 = cleanUp;
        obj = channel(cleanUp[23]);
        tmp7 = -channel.height;
        str = "respect-motion-settings";
        result = closure_8.set(obj.withSpring(tmp7, channel(cleanUp[24]).springStandard, "respect-motion-settings"));
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
  V.__initData = closure_17;
  const animatedReaction = channel(cleanUp[20]).useAnimatedReaction(O, V);
  const tmpResult3 = channel(cleanUp[20]);
  const fn = function z() {
    const value = sharedValue.get();
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
    obj[1] = height;
    obj = { translateY: obj.get() };
    const items = [obj];
    obj[2] = items;
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
  fn.__initData = closure_18;
  const animatedStyle = channel(cleanUp[20]).useAnimatedStyle(fn);
  obj2 = { style: items6, onLayout: callback1, children: null };
  items6 = [tmp15.typingWrapper, animatedStyle];
  const obj3 = { style: tmp15.wrapperHoriz, children: null };
  const obj4 = { style: tmp15.horiz, children: null };
  if (null != stateFromStoresObject.config) {
    const obj5 = { config: null, username: null, onPress: null };
    ({ config: obj18[0], name: obj18[1] } = stateFromStoresObject);
    let tmp27;
    if (customTypingIndicatorConfig.canSet) {
      tmp27 = callback;
    }
    obj5[2] = tmp27;
    let tmp21Result = tmp20(tmp6(tmp2[25]), obj5);
    const tmp6Result = tmp6(tmp2[25]);
  } else {
    let tmp20Result = null;
    if (null != tmp7Result) {
      tmp20Result = tmp20(tmp(tmp2[26]).Ellipsis, {});
    }
    const obj6 = { children: null };
    const items7 = [tmp20Result];
    const obj7 = {
      style: null,
      lineClamp: 1,
      maxFontSizeMultiplier: 2,
      variant: "text-xs/medium",
      color: "interactive-text-default",
      includeFontPadding: true,
      ellipsizeMode: "tail",
      children: null,
    };
    obj7[0] = tmp15.text;
    obj7[7] = tmp7Result;
    items7[1] = tmp20(tmp(tmp2[27]).Text, obj7);
    obj6[0] = items7;
    tmp21Result = tmp21(closure_13, obj6);
    const tmp23 = closure_13;
  }
  obj4[1] = tmp21Result;
  const items8 = [closure_12(stateFromStores, obj4)];
  let tmp20Result1 = null;
  if (channel.rateLimitPerUser > 0) {
    const obj8 = { channel: null, hasTypingText: null, slowmodeType: null };
    obj8[0] = channel;
    obj8[1] = null != tmp7Result;
    obj8[2] = sharedValue1.SendMessage;
    tmp20Result1 = tmp20(tmp6(tmp2[28]), obj8);
  }
  items8[1] = tmp20Result1;
  obj3[1] = items8;
  obj2[2] = closure_14(stateFromStores, obj3);
  return closure_12(transitionState(cleanUp[20]).View, obj2);
}
function renderTypingIndicator(arg0, arg1, transitionState, cleanUp) {
  const obj = {};
  const merged = Object.assign(arg1);
  obj.transitionState = transitionState;
  obj.cleanUp = cleanUp;
  return callback2(TypingIndicatorInner, obj, arg0);
}
let c3 = importAllResult;
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = jsxProd);
let closure_15 = createCacheKey.createStyles((arg0) => {
  let obj = { typingWrapper: null, wrapperHoriz: null, horiz: null, text: null };
  obj = {
    paddingTop: ThemesDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_PADDING_TOP,
    paddingBottom: 4,
    paddingHorizontal: 16,
    alignSelf: "stretch",
    backgroundColor: "transparent",
    paddingRight: ThemesDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING,
    paddingLeft: 2 * arg0,
  };
  obj[0] = obj;
  obj[1] = { justifyContent: "space-between", flexDirection: "row", alignItems: "center" };
  obj = { marginRight: ThemesDefault.space.PX_8, alignItems: "center", flexDirection: "row", flex: 1 };
  obj[2] = obj;
  obj[3] = { flex: 1 };
  return obj;
});
let closure_16 = {
  code: "function TypingIndicatorTsx1(){const{typingIndicatorLayout}=this.__closure;return typingIndicatorLayout.get();}",
};
let closure_17 = {
  code: "function TypingIndicatorTsx2(current,prev){const{translateYValue,withSpring,springStandard}=this.__closure;if(current===prev)return;if(current==null)return;if(current.y.toFixed(2)!==current.height.toFixed(2))return;translateYValue.set(withSpring(-current.height,springStandard,'respect-motion-settings'));}",
};
let closure_18 = {
  code: "function TypingIndicatorTsx3(){const{typingIndicatorLayout,translateYValue,transitionState,TransitionStates}=this.__closure;const layout=typingIndicatorLayout.get();return{opacity:translateYValue.get()===0||transitionState===TransitionStates.YEETED?0:1,top:layout===null||layout===void 0?void 0:layout.height,transform:[{translateY:translateYValue.get()}]};}",
};
const memoResult = importAllResult.memo((channel) => {
  channel = channel.channel;
  let typingUserIds = channel;
  let stateFromStores;
  let memo;
  const tmp = callback(channel.screenIndex);
  stateFromStores = tmp;
  typingUserIds = undefined;
  stateFromStores = undefined;
  memo = undefined;
  let obj = typingUserIds(memo[10]);
  typingUserIds = obj.useTypingUserIds(channel.id, 4);
  let items = [closure_6];
  stateFromStores = typingUserIds(memo[11]).useStateFromStores(items, () =>
    closure_6.get("preview_own_typing_indicator"),
  );
  const obj2 = typingUserIds(memo[11]);
  const items1 = [closure_10];
  const stateFromStores1 = typingUserIds(memo[11]).useStateFromStores(items1, () => {
    currentUser = currentUser.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  memo = stateFromStores1;
  const items2 = [stateFromStores, stateFromStores1, typingUserIds];
  memo = importAllResult.useMemo(() => {
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
  const memo1 = importAllResult.useMemo(() => {
    let tmp3 = typingUserIds.rateLimitPerUser > 0;
    if (!tmp3) {
      tmp3 = arr.length > 0;
    }
    if (tmp3) {
      tmp3 = !stateFromStores;
    }
    let tmp4;
    if (tmp3) {
      const obj = { channel: null, typingUserIds: null };
      obj[0] = typingUserIds;
      obj[1] = arr;
      tmp4 = obj;
    }
    return tmp4;
  }, items3);
  obj = { item: memo1, renderItem: renderTypingIndicator };
  return callback2(typingUserIds(memo[22]).TransitionItem, obj);
});
let result = require("set").fileFinishedImporting("modules/chat/native/TypingIndicator.tsx");

export default memoResult;
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
  const items = [closure_6];
  const stateFromStores = typingUserIds(stateFromStores1[11]).useStateFromStores(items, () =>
    closure_6.get("preview_own_typing_indicator"),
  );
  const obj2 = typingUserIds(stateFromStores1[11]);
  const items1 = [closure_10];
  stateFromStores1 = typingUserIds(stateFromStores1[11]).useStateFromStores(items1, () => {
    currentUser = currentUser.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  const items2 = [stateFromStores, stateFromStores1, typingUserIds];
  return importAllResult.useMemo(() => {
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
