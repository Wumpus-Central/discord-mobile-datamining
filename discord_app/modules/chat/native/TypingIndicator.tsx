// discord_app/modules/chat/native/TypingIndicator.tsx
import ThemesDefault from "Themes" /* 712 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { useChatShowingAutoComplete as closure_5 } from "updateChatInputContainerHeight" /* 8682 */;
import { SlowmodeType } from "setCooldown" /* 7440 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = arg1;
function TypingIndicatorInner(cleanUp) {
  ({ channel, transitionState } = cleanUp);
  cleanUp = cleanUp.cleanUp;
  let sharedValue;
  let sharedValue1;
  let obj = transitionState(sharedValue[7]);
  obj = { channelId: channel.id, guildId: channel.getGuildId(), typingUserIds: cleanUp.typingUserIds };
  const tmp4Result = cleanUp(sharedValue[8])(obj);
  let obj2 = transitionState(sharedValue[9]);
  sharedValue = obj2.useSharedValue(undefined);
  let items = [sharedValue];
  const callback = sharedValue1.useCallback((nativeEvent) => {
    const result = sharedValue.set(nativeEvent.nativeEvent.layout);
  }, items);
  const tmp8 = callback3();
  let obj3 = transitionState(sharedValue[9]);
  sharedValue1 = obj3.useSharedValue(0);
  const items1 = [cleanUp, transitionState, sharedValue1];
  const effect = sharedValue1.useEffect(() => {
    if (transitionState === transitionState(sharedValue[10]).TransitionStates.YEETED) {
      const result = sharedValue1.set(0);
      cleanUp();
    }
  }, items1);
  let obj4 = transitionState(sharedValue[9]);
  class S {
    constructor() {
      return closure_2.get();
    }
  }
  S.__closure = { typingIndicatorLayout: sharedValue };
  S.__workletHash = 10758673194436;
  S.__initData = closure_10;
  const fn = function f(arg0) {
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
      const result = sharedValue1.set(transitionState(sharedValue[11]).withSpring(-arg0.height, transitionState(sharedValue[12]).springStandard, "respect-motion-settings"));
      const obj = transitionState(sharedValue[11]);
      const tmp7 = -arg0.height;
    }
  };
  obj = { translateYValue: sharedValue1, withSpring: transitionState(sharedValue[11]).withSpring, springStandard: transitionState(sharedValue[12]).springStandard };
  fn.__closure = obj;
  fn.__workletHash = 14874351700395;
  fn.__initData = closure_11;
  const animatedReaction = obj4.useAnimatedReaction(S, fn);
  let obj6 = transitionState(sharedValue[9]);
  class E {
    constructor() {
      value = closure_2.get();
      obj = closure_3;
      if (0 === closure_3.get()) {
        num = 0;
      } else {
        tmp2 = transitionState;
        tmp3 = transitionState;
        tmp4 = closure_2;
        num = 1;
      }
      obj = { opacity: num, top: null, transform: null };
      height = undefined;
      if (value != null) {
        height = value.height;
      }
      obj[1] = height;
      obj1 = { translateY: obj.get() };
      items = [];
      items[0] = obj1;
      obj[2] = items;
      return obj;
    }
  }
  const tmp3 = cleanUp;
  const tmp4 = cleanUp(sharedValue[8]);
  E.__closure = { typingIndicatorLayout: sharedValue, translateYValue: sharedValue1, transitionState, TransitionStates: transitionState(sharedValue[10]).TransitionStates };
  E.__workletHash = 15240163018691;
  E.__initData = closure_12;
  const animatedStyle = obj6.useAnimatedStyle(E);
  obj1 = { typingIndicatorLayout: sharedValue, translateYValue: sharedValue1, transitionState, TransitionStates: transitionState(sharedValue[10]).TransitionStates };
  const token = transitionState(sharedValue[13]).useToken(cleanUp(sharedValue[6]).modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING);
  const items2 = [tmp8.typingWrapper, , ];
  let tmp15;
  if (obj.useMobileVisualRefreshConfig({ location: "TypingIndicatorInner" }).chatInputFloating) {
    const items3 = [tmp8.floatingWrapper, ];
    obj2 = { paddingLeft: null };
    obj2[0] = 2 * token;
    items3[1] = obj2;
    tmp15 = items3;
  }
  obj3 = { style: items2, onLayout: callback, children: null };
  items2[1] = tmp15;
  items2[2] = animatedStyle;
  obj4 = { style: tmp8.wrapperHoriz, children: null };
  const obj5 = { style: tmp8.horiz, children: null };
  let tmp14Result = null;
  if (null != tmp4Result) {
    tmp14Result = tmp14(tmp(tmp2[14]).Ellipsis, {});
  }
  const items4 = [tmp14Result, ];
  obj6 = { style: tmp8.text, lineClamp: 1, maxFontSizeMultiplier: 2, variant: "text-xs/medium", color: "interactive-text-default", ellipsizeMode: "tail", children: tmp4Result };
  items4[1] = closure_7(transitionState(sharedValue[15]).Text, obj6);
  obj5[1] = items4;
  const items5 = [closure_8(View, obj5), ];
  tmp14Result = null;
  if (channel.rateLimitPerUser > 0) {
    const obj7 = { channel: null, hasTypingText: null, slowmodeType: null };
    obj7[0] = channel;
    obj7[1] = null != tmp4Result;
    obj7[2] = SlowmodeType.SendMessage;
    tmp14Result = tmp14(tmp3(tmp2[16]), obj7);
  }
  items5[1] = tmp14Result;
  obj4[1] = items5;
  obj3[2] = closure_8(View, obj4);
  return closure_7(cleanUp(sharedValue[9]).View, obj3);
}
function renderTypingIndicator(arg0, arg1, transitionState, cleanUp) {
  const obj = {};
  const merged = Object.assign(arg1);
  obj.transitionState = transitionState;
  obj.cleanUp = cleanUp;
  return callback2(TypingIndicatorInner, obj, arg0);
}
let c3 = importAllResult;
({ jsx: error, jsxs: closure_8 } = jsxProd);
let obj = { typingWrapper: null, floatingWrapper: null, wrapperHoriz: null, horiz: null, text: null };
obj = { paddingTop: ThemesDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_PADDING_TOP, paddingBottom: 4, paddingHorizontal: 16, alignSelf: "stretch", backgroundColor: ThemesDefault.colors.MOBILE_TYPING_INDICATOR_BACKGROUND_DEFAULT };
obj[0] = obj;
createCacheKey = { backgroundColor: "transparent", paddingRight: ThemesDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING };
obj[1] = createCacheKey;
obj[2] = { justifyContent: "space-between", flexDirection: "row", alignItems: "center" };
obj[3] = { marginRight: ThemesDefault.space.PX_8, alignItems: "center", flexDirection: "row", flex: 1 };
obj[4] = { flex: 1 };
let closure_9 = createCacheKey.createStyles(obj);
let closure_10 = { code: "function TypingIndicatorTsx1(){const{typingIndicatorLayout}=this.__closure;return typingIndicatorLayout.get();}" };
let closure_11 = { code: "function TypingIndicatorTsx2(current,prev){const{translateYValue,withSpring,springStandard}=this.__closure;if(current===prev)return;if(current==null)return;if(current.y.toFixed(2)!==current.height.toFixed(2))return;translateYValue.set(withSpring(-current.height,springStandard,'respect-motion-settings'));}" };
let closure_12 = { code: "function TypingIndicatorTsx3(){const{typingIndicatorLayout,translateYValue,transitionState,TransitionStates}=this.__closure;const layout=typingIndicatorLayout.get();return{opacity:translateYValue.get()===0||transitionState===TransitionStates.YEETED?0:1,top:layout===null||layout===void 0?void 0:layout.height,transform:[{translateY:translateYValue.get()}]};}" };
let obj2 = { marginRight: ThemesDefault.space.PX_8, alignItems: "center", flexDirection: "row", flex: 1 };
const memoResult = importAllResult.memo((channel) => {
  channel = channel.channel;
  closure_1 = undefined;
  let typingUserIds;
  const tmp = callback(channel.screenIndex);
  closure_1 = tmp;
  let obj = channel(typingUserIds[17]);
  typingUserIds = obj.useTypingUserIds(channel.id, 4);
  const items = [channel, typingUserIds, tmp];
  const memo = importAllResult.useMemo(() => {
    if (channel.rateLimitPerUser > 0) {
      if (!closure_1) {
        const obj = { channel: null, typingUserIds: null };
        obj[0] = tmp;
        obj[1] = typingUserIds;
        const tmp3 = obj;
      }
    }
    return tmp3;
  }, items);
  obj = { item: memo, renderItem: renderTypingIndicator };
  return callback2(channel(typingUserIds[10]).TransitionItem, obj);
});
let result = require("set").fileFinishedImporting("modules/chat/native/TypingIndicator.tsx");

export default memoResult;