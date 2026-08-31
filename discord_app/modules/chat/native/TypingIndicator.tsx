// === Module 11503: TypingIndicatorInner ===

// Module 11503 (TypingIndicatorInner)
import ThemesDefault from "Themes" /* 712 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { useChatShowingAutoComplete as closure_5 } from "updateChatInputContainerHeight" /* 9495 */;
import closure_6 from "getUserAgnosticState" /* 4447 */;
import closure_7 from "fromServer" /* 5371 */;
import { SlowmodeType } from "setCooldown" /* 7399 */;
import closure_9 from "handleTypingStart" /* 11504 */;
import closure_10 from "mergeGuildAvatar" /* 1922 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

const require = arg1;
function TypingIndicatorInner(channel) {
  channel = channel.channel;
  ({ typingUserIds, transitionState } = channel);
  const cleanUp = channel.cleanUp;
  let canView;
  let stateFromStores;
  let first;
  let sharedValue;
  let sharedValue1;
  let obj = channel(cleanUp[13]);
  let customTypingIndicatorConfig = obj.useCustomTypingIndicatorConfig("TypingIndicatorInner");
  canView = customTypingIndicatorConfig.canView;
  obj1 = channel(cleanUp[10]);
  let items = [sharedValue];
  stateFromStores = obj1.useStateFromStores(items, () => sharedValue.get("preview_own_typing_indicator"));
  let obj2 = canView;
  const callback = canView.useCallback(() => {
    const result = channel(cleanUp[14]).openCustomTypingIndicatorAnnounceActionSheet();
  }, []);
  obj = { channelId: channel.id, guildId: channel.getGuildId(), typingUserIds };
  const tmp7Result = transitionState(cleanUp[15])(obj);
  first = null;
  if (1 === typingUserIds.length) {
    first = typingUserIds[0];
  }
  let tmpResult = tmp(tmp2[10]);
  const items1 = [closure_9, closure_10, sharedValue1];
  const items2 = [first, canView, stateFromStores, channel];
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(items1, () => {
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
              guildEmojis = sharedValue1.getGuildEmojis(guildId);
            }
            const obj = { config: null, name: null };
            const obj2 = channel(cleanUp[16]);
            obj[0] = obj2.getViewableCustomTypingIndicatorConfig(customTypingIndicatorConfig, channel, tmp, guildEmojis);
            obj[1] = transitionState(cleanUp[17]).getName(guildId, channel.id, user);
            return obj;
          }
        }
        return { config: null, name: null };
      }
    }
    return { config: null, name: null };
  }, items2);
  tmpResult = tmp(tmp2[18]);
  sharedValue = tmpResult.useSharedValue(undefined);
  const items3 = [sharedValue];
  const callback1 = obj2.useCallback((nativeEvent) => {
    const result = sharedValue.set(nativeEvent.nativeEvent.layout);
  }, items3);
  let tmp7 = transitionState(cleanUp[15]);
  const tmp13 = callback3(channel(cleanUp[19]).useToken(transitionState(cleanUp[12]).modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING));
  const tmpResult1 = channel(cleanUp[19]);
  sharedValue1 = channel(cleanUp[18]).useSharedValue(0);
  const items4 = [cleanUp, transitionState, sharedValue1];
  const effect = obj2.useEffect(() => {
    if (transitionState === channel(cleanUp[20]).TransitionStates.YEETED) {
      const result = sharedValue1.set(0);
      cleanUp();
    }
  }, items4);
  const tmpResult2 = channel(cleanUp[18]);
  class D {
    constructor() {
      return closure_6.get();
    }
  }
  D.__closure = { typingIndicatorLayout: sharedValue };
  D.__workletHash = 10758673194436;
  D.__initData = closure_15;
  const fn = function w(arg0) {
    let tmp = arg0 !== arg1;
    if (tmp) {
      tmp = null != arg0;
    }
    if (tmp) {
      const y = arg0.y;
      const height = arg0.height;
      tmp = y.toFixed(2) === height.toFixed(2);
      const toFixedResult = y.toFixed(2);
    }
    if (tmp) {
      const result = sharedValue1.set(channel(cleanUp[21]).withSpring(-arg0.height, channel(cleanUp[22]).springStandard, "respect-motion-settings"));
      const obj = channel(cleanUp[21]);
      const tmp7 = -arg0.height;
    }
  };
  obj = { translateYValue: sharedValue1, withSpring: tmp(tmp2[21]).withSpring, springStandard: tmp(tmp2[22]).springStandard };
  fn.__closure = obj;
  fn.__workletHash = 14874351700395;
  fn.__initData = closure_16;
  const animatedReaction = channel(cleanUp[18]).useAnimatedReaction(D, fn);
  const tmpResult3 = channel(cleanUp[18]);
  const fn2 = function k() {
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
  obj1 = { typingIndicatorLayout: sharedValue, translateYValue: sharedValue1, transitionState, TransitionStates: tmp(tmp2[20]).TransitionStates };
  fn2.__closure = obj1;
  fn2.__workletHash = 15240163018691;
  fn2.__initData = closure_17;
  const animatedStyle = channel(cleanUp[18]).useAnimatedStyle(fn2);
  obj2 = { style: items5, onLayout: callback1, children: null };
  items5 = [tmp13.typingWrapper, animatedStyle];
  const obj3 = { style: tmp13.wrapperHoriz, children: null };
  const obj4 = { style: tmp13.horiz, children: null };
  if (null != stateFromStoresObject.config) {
    const obj5 = { config: null, username: null, onPress: null };
    ({ config: obj18[0], name: obj18[1] } = stateFromStoresObject);
    let tmp25;
    if (customTypingIndicatorConfig.canSet) {
      tmp25 = callback;
    }
    obj5[2] = tmp25;
    let tmp19Result = tmp18(tmp6(tmp2[23]), obj5);
    const tmp6Result = tmp6(tmp2[23]);
  } else {
    let tmp18Result = null;
    if (null != tmp7Result) {
      tmp18Result = tmp18(tmp(tmp2[24]).Ellipsis, {});
    }
    const obj6 = { children: null };
    const items6 = [tmp18Result, ];
    const obj7 = { style: null, lineClamp: 1, maxFontSizeMultiplier: 2, variant: "text-xs/medium", color: "interactive-text-default", includeFontPadding: true, ellipsizeMode: "tail", children: null };
    obj7[0] = tmp13.text;
    obj7[7] = tmp7Result;
    items6[1] = tmp18(tmp(tmp2[25]).Text, obj7);
    obj6[0] = items6;
    tmp19Result = tmp19(closure_12, obj6);
    const tmp21 = closure_12;
  }
  obj4[1] = tmp19Result;
  const items7 = [closure_11(stateFromStores, obj4), ];
  let tmp18Result1 = null;
  if (channel.rateLimitPerUser > 0) {
    const obj8 = { channel: null, hasTypingText: null, slowmodeType: null };
    obj8[0] = channel;
    obj8[1] = null != tmp7Result;
    obj8[2] = SlowmodeType.SendMessage;
    tmp18Result1 = tmp18(tmp6(tmp2[26]), obj8);
  }
  items7[1] = tmp18Result1;
  obj3[1] = items7;
  obj2[2] = closure_13(stateFromStores, obj3);
  return closure_11(transitionState(cleanUp[18]).View, obj2);
}
function renderTypingIndicator(arg0, arg1, transitionState, cleanUp) {
  const obj = {};
  const merged = Object.assign(arg1);
  obj.transitionState = transitionState;
  obj.cleanUp = cleanUp;
  return callback2(TypingIndicatorInner, obj, arg0);
}
let c3 = importAllResult;
({ jsx: unpackModuleId, Fragment: closure_12, jsxs: map1 } = jsxProd);
let closure_14 = createCacheKey.createStyles((arg0) => {
  let obj = { typingWrapper: null, wrapperHoriz: null, horiz: null, text: null };
  obj = { paddingTop: ThemesDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_PADDING_TOP, paddingBottom: 4, paddingHorizontal: 16, alignSelf: "stretch", backgroundColor: "transparent", paddingRight: ThemesDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING, paddingLeft: 2 * arg0 };
  obj[0] = obj;
  obj[1] = { justifyContent: "space-between", flexDirection: "row", alignItems: "center" };
  obj = { marginRight: ThemesDefault.space.PX_8, alignItems: "center", flexDirection: "row", flex: 1 };
  obj[2] = obj;
  obj[3] = { flex: 1 };
  return obj;
});
let closure_15 = { code: "function TypingIndicatorTsx1(){const{typingIndicatorLayout}=this.__closure;return typingIndicatorLayout.get();}" };
let closure_16 = { code: "function TypingIndicatorTsx2(current,prev){const{translateYValue,withSpring,springStandard}=this.__closure;if(current===prev)return;if(current==null)return;if(current.y.toFixed(2)!==current.height.toFixed(2))return;translateYValue.set(withSpring(-current.height,springStandard,'respect-motion-settings'));}" };
let closure_17 = { code: "function TypingIndicatorTsx3(){const{typingIndicatorLayout,translateYValue,transitionState,TransitionStates}=this.__closure;const layout=typingIndicatorLayout.get();return{opacity:translateYValue.get()===0||transitionState===TransitionStates.YEETED?0:1,top:layout===null||layout===void 0?void 0:layout.height,transform:[{translateY:translateYValue.get()}]};}" };
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
  let obj = typingUserIds(memo[9]);
  typingUserIds = obj.useTypingUserIds(channel.id, 4);
  let items = [closure_6];
  stateFromStores = typingUserIds(memo[10]).useStateFromStores(items, () => closure_6.get("preview_own_typing_indicator"));
  const obj2 = typingUserIds(memo[10]);
  const items1 = [closure_10];
  const stateFromStores1 = typingUserIds(memo[10]).useStateFromStores(items1, () => {
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
  return callback2(typingUserIds(memo[20]).TransitionItem, obj);
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
  typingUserIds = typingUserIds(stateFromStores1[9]).useTypingUserIds(id, arg1);
  const obj = typingUserIds(stateFromStores1[9]);
  const items = [closure_6];
  const stateFromStores = typingUserIds(stateFromStores1[10]).useStateFromStores(items, () => closure_6.get("preview_own_typing_indicator"));
  const obj2 = typingUserIds(stateFromStores1[10]);
  const items1 = [closure_10];
  stateFromStores1 = typingUserIds(stateFromStores1[10]).useStateFromStores(items1, () => {
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