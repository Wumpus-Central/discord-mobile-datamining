// === Module 11591: TypingIndicator ===

// Module 11591 (TypingIndicator)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import native from "native" /* 4595 */;
import NicknameUtilsDefault from "NicknameUtils" /* 5048 */;
import spring from "spring" /* 5604 */;
import springPresets from "springPresets" /* 5605 */;
import SlowmodeStore from "SlowmodeStore" /* 7184 */;
import useChatBottomManagerUIStore from "useChatBottomManagerUIStore" /* 9100 */;
import useTypingUsersIds from "useTypingUsersIds" /* 11593 */;
import CustomTypingIndicatorUtils from "CustomTypingIndicatorUtils" /* 11600 */;
import react from "react" /* 19 */;
import DevSettingsStore from "DevSettingsStore" /* 4895 */;
import RawGuildEmojiStore from "RawGuildEmojiStore" /* 5647 */;
import TypingStore from "TypingStore" /* 11592 */;
import UserStore from "UserStore" /* 1377 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import createStyles from "createStyles" /* 4896 */;
import size from "module_2" /* 2 */;

let currentUser, set;

let closure_12;
let closure_14;
let map1;
function renderTypingIndicator(arg0, arg1, transitionState, cleanUp) {
  const obj = { transitionState, cleanUp };
  const merged = Object.assign(arg1);
  return closure_12(closure_23, obj, arg0);
}
let View = react_native.View;
let closure_5 = useChatBottomManagerUIStore.useChatShowingAutoComplete;
const SlowmodeType = SlowmodeStore.SlowmodeType;
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let tmp10;
  let tmp5;
  let tmp6;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(8);
  const obj2 = useTypingUsersIds;
  const typingUserIds = obj2.useTypingUserIds(arg0, arg1);
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
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
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
    tmp10 = fn2;
    tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult2 = get_initialized;
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp9, tmp10);
  if (cResult[4] === stateFromStores1) {
    if (cResult[5] === stateFromStores) {
      let tmp13;
      if (cResult[6] === typingUserIds) {
        tmp13 = cResult[7];
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
}) : ((arg0, arg1) => {
  let stateFromStores1;
  let typingUserIds;
  const obj = typingUserIds(stateFromStores1[12]);
  typingUserIds = obj.useTypingUserIds(arg0, arg1);
  let items = [DevSettingsStore];
  const obj2 = typingUserIds(stateFromStores1[13]);
  const stateFromStores = obj2.useStateFromStores(items, () => DevSettingsStore.get("preview_own_typing_indicator"));
  const items1 = [UserStore];
  const obj3 = typingUserIds(stateFromStores1[13]);
  stateFromStores1 = obj3.useStateFromStores(items1, () => {
    currentUser = currentUser.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  const items2 = [stateFromStores, stateFromStores1, typingUserIds];
  return react.useMemo(() => {
    if (stateFromStores) {
      let tmp4;
      if (null != stateFromStores1) {
        const items = [tmp2];
        tmp4 = items;
      }
      return tmp4;
    }
    tmp4 = typingUserIds;
  }, items2);
});
let closure_15 = tmp4;
let closure_16 = createStyles.createStyles((arg0) => {
  const obj = { typingWrapper: { paddingTop: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_PADDING_TOP, paddingBottom: 4, paddingHorizontal: 16, alignSelf: "stretch", backgroundColor: "transparent", paddingRight: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING, paddingLeft: 2 * arg0 }, wrapperHoriz: { justifyContent: "space-between", flexDirection: "row", alignItems: "center" }, horiz: { marginRight: nativeDefault.space.PX_8, alignItems: "center", flexDirection: "row", flex: 1 }, text: { flex: 1 } };
  ({ paddingTop: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_PADDING_TOP, paddingBottom: 4, paddingHorizontal: 16, alignSelf: "stretch", backgroundColor: "transparent", paddingRight: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING, paddingLeft: 2 * arg0 });
  ({ marginRight: nativeDefault.space.PX_8, alignItems: "center", flexDirection: "row", flex: 1 });
  return obj;
});
let closure_17 = { code: "function TypingIndicatorTsx1(){const{typingIndicatorLayout}=this.__closure;return typingIndicatorLayout.get();}" };
let closure_18 = { code: "function TypingIndicatorTsx2(current,prev){const{translateYValue,withSpring,springStandard}=this.__closure;if(current===prev){return;}if(current==null){return;}if(current.y.toFixed(2)!==current.height.toFixed(2)){return;}translateYValue.set(withSpring(-current.height,springStandard,\"respect-motion-settings\"));}" };
let closure_19 = { code: "function TypingIndicatorTsx3(){const{typingIndicatorLayout,translateYValue,transitionState,TransitionStates}=this.__closure;const layout=typingIndicatorLayout.get();return{opacity:translateYValue.get()===0||transitionState===TransitionStates.YEETED?0:1,top:layout===null||layout===void 0?void 0:layout.height,transform:[{translateY:translateYValue.get()}]};}" };
const __initData = { code: "function TypingIndicatorTsx4(){const{typingIndicatorLayout}=this.__closure;return typingIndicatorLayout.get();}" };
const __initData2 = { code: "function TypingIndicatorTsx5(current,prev){const{translateYValue,withSpring,springStandard}=this.__closure;if(current===prev)return;if(current==null)return;if(current.y.toFixed(2)!==current.height.toFixed(2))return;translateYValue.set(withSpring(-current.height,springStandard,'respect-motion-settings'));}" };
const __initData3 = { code: "function TypingIndicatorTsx6(){const{typingIndicatorLayout,translateYValue,transitionState,TransitionStates}=this.__closure;const layout=typingIndicatorLayout.get();return{opacity:translateYValue.get()===0||transitionState===TransitionStates.YEETED?0:1,top:layout===null||layout===void 0?void 0:layout.height,transform:[{translateY:translateYValue.get()}]};}" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let cleanUp;
  let tmp5;
  let tmp6;
  let transitionState;
  let typingUserIds;
  let tmp = channel;
  let obj = channel(cleanUp[11]);
  const cResult = obj.c(52);
  channel = channel.channel;
  ({ typingUserIds, transitionState } = channel);
  const tmp2 = cleanUp;
  cleanUp = channel.cleanUp;
  let obj2 = channel(cleanUp[16]);
  let customTypingIndicatorConfig = obj2.useCustomTypingIndicatorConfig("TypingIndicatorInner");
  const canView = customTypingIndicatorConfig.canView;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [DevSettingsStore];
    class T {
      constructor() {
        return closure_6.get("preview_own_typing_indicator");
      }
    }
    let num = 0;
    cResult[0] = items;
    cResult[1] = T;
    tmp5 = items;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = tmp(tmp2[13]);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, T);
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
  const id = channel.id;
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
  let obj3 = { channelId: id, guildId: tmp10, typingUserIds };
  cResult[5] = channel.id;
  cResult[6] = tmp10;
  cResult[7] = typingUserIds;
  cResult[8] = obj3;
}) : ((channel) => {
  let items6;
  let items7;
  let items8;
  let obj8;
  let tmp21Result;
  let tmp27;
  let transitionState;
  let typingUserIds;
  channel = channel.channel;
  ({ typingUserIds, transitionState } = channel);
  const cleanUp = channel.cleanUp;
  let closure_6;
  let sharedValue;
  let sharedValue1;
  let tmp = channel;
  let obj = channel(cleanUp[16]);
  let customTypingIndicatorConfig = obj.useCustomTypingIndicatorConfig("TypingIndicatorInner");
  const canView = customTypingIndicatorConfig.canView;
  const canSet = customTypingIndicatorConfig.canSet;
  let obj2 = channel(cleanUp[13]);
  let items = [closure_6];
  const stateFromStores = obj2.useStateFromStores(items, () => closure_6.get("preview_own_typing_indicator"));
  let obj3 = canView;
  const callback = canView.useCallback(() => {
    const obj = channel(cleanUp[17]);
    const result = obj.openCustomTypingIndicatorAnnounceActionSheet();
  }, []);
  const obj4 = { channelId: channel.id, guildId: channel.getGuildId(), typingUserIds };
  let tmp7 = transitionState(cleanUp[18]);
  const tmp7Result = tmp7(obj4);
  let first = null;
  if (1 === typingUserIds.length) {
    first = typingUserIds[0];
  }
  const items1 = [TypingStore, UserStore, sharedValue];
  const items2 = [first, canView, stateFromStores, channel];
  const tmpResult = tmp(cleanUp[13]);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(items1, () => {
    let obj2;
    let obj3;
    if (null != first) {
      if (canView) {
        let customTypingIndicatorConfig;
        const user = UserStore.getUser(first);
        if (stateFromStores) {
          let typingIndicatorStyle;
          if (user != null) {
            typingIndicatorStyle = user.typingIndicatorStyle;
          }
          if (typingIndicatorStyle == null) {
            typingIndicatorStyle = null;
          }
          customTypingIndicatorConfig = typingIndicatorStyle;
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
            const obj = { config: obj2.getViewableCustomTypingIndicatorConfig(customTypingIndicatorConfig, channel, first, guildEmojis), name: obj3.getName(guildId, channel.id, user) };
            obj2 = CustomTypingIndicatorUtils;
            obj3 = NicknameUtilsDefault;
            return obj;
          }
        }
        return { config: null, name: null };
      }
    }
    return { config: null, name: null };
  }, items2);
  closure_6 = tmp11;
  const items3 = [null != stateFromStoresObject.config, , ];
  ({ id: arr4[1], type: arr4[2] } = channel);
  const effect = obj3.useEffect(() => {
    if (closure_6) {
      const obj3 = { channel_id: null, channel_type: null };
      ({ id: obj2.channel_id, type: obj2.channel_type } = channel);
      const obj = AnalyticsUtilsDefault;
      obj.track(AnalyticEvents.TYPING_INDICATOR_STYLE_SEEN, obj3);
    }
  }, items3);
  const tmpResult6 = tmp(cleanUp[22]);
  sharedValue = tmpResult6.useSharedValue(undefined);
  const items4 = [sharedValue];
  const callback1 = obj3.useCallback((nativeEvent) => {
    const result = sharedValue.set(nativeEvent.nativeEvent.layout);
  }, items4);
  const tmpResult7 = tmp(cleanUp[23]);
  const tmp15 = closure_16(tmpResult7.useToken(transitionState(cleanUp[15]).modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING));
  const tmpResult8 = tmp(cleanUp[22]);
  sharedValue1 = tmpResult8.useSharedValue(0);
  const items5 = [cleanUp, transitionState, sharedValue1];
  const effect1 = obj3.useEffect(() => {
    if (transitionState === native.TransitionStates.YEETED) {
      const result = sharedValue1.set(0);
      cleanUp();
    }
  }, items5);
  const tmpResult9 = tmp(cleanUp[22]);
  class P {
    constructor() {
      return sharedValue.get();
    }
  }
  P.__closure = { typingIndicatorLayout: sharedValue };
  P.__workletHash = 13600672167329;
  P.__initData = __initData;
  class U {
    constructor(arg0, arg1) {
      let tmp = arg0 !== arg1 && null != arg0;
      if (tmp) {
        const y = arg0.y;
        const height = arg0.height;
        const toFixedResult = y.toFixed(2);
        tmp = toFixedResult === height.toFixed(2);
      }
      if (tmp) {
        set = sharedValue1.set;
        const obj = spring;
        const tmp7 = -arg0.height;
        const result = set(obj.withSpring(tmp7, springPresets.springStandard, "respect-motion-settings"));
      }
    }
  }
  U.__closure = { translateYValue: sharedValue1, withSpring: tmp(cleanUp[25]).withSpring, springStandard: tmp(cleanUp[26]).springStandard };
  U.__workletHash = 16463416523660;
  U.__initData = __initData2;
  ({ translateYValue: sharedValue1, withSpring: tmp(cleanUp[25]).withSpring, springStandard: tmp(cleanUp[26]).springStandard });
  const animatedReaction = tmpResult9.useAnimatedReaction(P, U);
  const tmpResult10 = tmp(cleanUp[22]);
  class G {
    constructor() {
      let height;
      let items;
      let num;
      const value = sharedValue.get();
      if (0 === sharedValue1.get()) {
        num = 0;
      } else {
        num = 1;
      }
      const obj2 = { opacity: num, top: height, transform: items };
      height = undefined;
      if (value != null) {
        height = value.height;
      }
      items = [{ translateY: sharedValue1.get() }];
      ({ translateY: sharedValue1.get() });
      return obj2;
    }
  }
  G.__closure = { typingIndicatorLayout: sharedValue, translateYValue: sharedValue1, transitionState, TransitionStates: tmp(cleanUp[24]).TransitionStates };
  G.__workletHash = 12928775581926;
  G.__initData = __initData3;
  ({ typingIndicatorLayout: sharedValue, translateYValue: sharedValue1, transitionState, TransitionStates: tmp(cleanUp[24]).TransitionStates });
  const animatedStyle = tmpResult10.useAnimatedStyle(G);
  const obj7 = { style: items6, onLayout: callback1, children: closure_14(stateFromStores, obj8) };
  items6 = [tmp15.typingWrapper, animatedStyle];
  obj8 = { style: tmp15.wrapperHoriz, children: items8 };
  const obj9 = { style: tmp15.horiz, children: tmp21Result };
  View = transitionState(tmp2[22]).View;
  if (null != stateFromStoresObject.config) {
    const obj10 = { config: null, username: null, onPress: tmp27 };
    ({ config: obj18.config, name: obj18.username } = stateFromStoresObject);
    tmp27 = undefined;
    const tmp6Result = transitionState(cleanUp[27]);
    if (canSet) {
      tmp27 = callback;
    }
    tmp21Result = closure_12(tmp6Result, obj10);
  } else {
    let tmp20Result3 = null;
    if (null != tmp7Result) {
      tmp20Result3 = closure_12(tmp(tmp2[28]).Ellipsis, {});
    }
    const obj11 = { children: items7 };
    items7 = [tmp20Result3, ];
    const obj12 = { style: tmp15.text, lineClamp: 1, maxFontSizeMultiplier: 2, variant: "text-xs/medium", color: "interactive-text-default", includeFontPadding: true, ellipsizeMode: "tail", children: tmp7Result };
    items7[1] = closure_12(tmp(cleanUp[29]).Text, obj12);
    tmp21Result = closure_14(closure_13, obj11);
  }
  items8 = [closure_12(stateFromStores, obj9), ];
  let tmp20Result4 = null;
  if (channel.rateLimitPerUser > 0) {
    const obj13 = { channel, hasTypingText: null != tmp7Result, slowmodeType: sharedValue1.SendMessage };
    tmp20Result4 = closure_12(transitionState(tmp2[30]), obj13);
  }
  items8[1] = tmp20Result4;
  return closure_12(View, obj7);
});
let memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
function hasTypingIndicatorContent(channel, typingUserIdsForDisplay, arg2) {
  return (channel.rateLimitPerUser > 0 || typingUserIdsForDisplay.length > 0) && !arg2;
}
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const obj = react2;
  const cResult = obj.c(6);
  channel = channel.channel;
  const tmp4 = closure_5(channel.screenIndex);
  const arr = closure_15(channel.id, 4);
  if (cResult[0] === channel) {
    if (cResult[1] === tmp4) {
      let tmp5;
      let tmp8;
      if (cResult[2] === arr) {
        tmp5 = cResult[3];
      }
      if (cResult[4] !== tmp5) {
        const obj2 = { item: tmp5, renderItem: renderTypingIndicator };
        const tmp11 = closure_12(native.TransitionItem, obj2);
        cResult[4] = tmp5;
        cResult[5] = tmp11;
        tmp8 = tmp11;
      } else {
        tmp8 = cResult[5];
      }
      return tmp8;
    }
  }
  let tmp7;
  const tmp6 = (channel.rateLimitPerUser > 0 || arr.length > 0) && !tmp4;
  if (tmp6) {
    tmp7 = { channel, typingUserIds: arr };
    const obj3 = { channel, typingUserIds: arr };
  }
  cResult[0] = channel;
  cResult[1] = tmp4;
  cResult[2] = arr;
  cResult[3] = tmp7;
  tmp5 = tmp7;
}) : ((channel) => {
  channel = channel.channel;
  const tmp = closure_5(channel.screenIndex);
  let closure_1 = tmp;
  const tmp2 = closure_15(channel.id, 4);
  let closure_2 = tmp2;
  const items = [channel, tmp2, tmp];
  const memo = react.useMemo(() => {
    let tmp4;
    const tmp3 = (channel.rateLimitPerUser > 0 || typingUserIds.length > 0) && !closure_1;
    if (tmp3) {
      tmp4 = { channel, typingUserIds };
      const obj = { channel, typingUserIds };
    }
    return tmp4;
  }, items);
  let obj = { item: memo, renderItem: renderTypingIndicator };
  return closure_12(native.TransitionItem, obj);
}));
let result = size.fileFinishedImporting("modules/chat/native/TypingIndicator.tsx");

export default memoResult;
export { hasTypingIndicatorContent };
export const useTypingUserIdsForDisplay = tmp4;