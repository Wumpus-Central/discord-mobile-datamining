// discord_app/modules/chat/native/TypingIndicator.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import importAllResult from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { useChatShowingAutoComplete as closure_5 } from "../../chat_input/native/useChatBottomManagerUIStore.tsx";
import { SlowmodeType } from "../../../stores/SlowmodeStore.tsx";
import closure_7 from "../../../stores/TypingStore.tsx";
import closure_8 from "../../../stores/UserStore.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
function TypingIndicatorInner(channel) {
  channel = channel.channel;
  ({ typingUserIds, transitionState } = channel);
  const cleanUp = channel.cleanUp;
  let isCustomTypingIndicatorViewerEnabled;
  let first;
  let sharedValue;
  let sharedValue1;
  let obj = channel(cleanUp[9]);
  obj1 = channel(cleanUp[10]);
  isCustomTypingIndicatorViewerEnabled = obj1.useIsCustomTypingIndicatorViewerEnabled("TypingIndicatorInner");
  let obj2 = isCustomTypingIndicatorViewerEnabled;
  const callback = isCustomTypingIndicatorViewerEnabled.useCallback(() => {
    const result = channel(cleanUp[11]).openCustomTypingIndicatorAnnounceActionSheet();
  }, []);
  obj = { channelId: channel.id, guildId: channel.getGuildId(), typingUserIds };
  const tmp6Result = transitionState(cleanUp[12])(obj);
  first = null;
  if (1 === typingUserIds.length) {
    first = typingUserIds[0];
  }
  let tmpResult = tmp(tmp2[13]);
  let items = [closure_7, closure_8];
  const items1 = [first, isCustomTypingIndicatorViewerEnabled, channel];
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(items, () => {
    if (null != first) {
      if (isCustomTypingIndicatorViewerEnabled) {
        const customTypingIndicatorConfig = closure_1_7.getCustomTypingIndicatorConfig(tmp);
        const user = closure_1_8.getUser(tmp);
        if (null != customTypingIndicatorConfig) {
          if (null != user) {
            let obj = { config: null, name: null };
            obj[0] = customTypingIndicatorConfig;
            obj[1] = transitionState(cleanUp[14]).getName(channel.getGuildId(), channel.id, user);
            const obj2 = transitionState(cleanUp[14]);
          }
          return obj;
        }
        obj = { config: null, name: null };
      }
    }
    return { config: null, name: null };
  }, items1);
  tmpResult = tmp(tmp2[15]);
  sharedValue = tmpResult.useSharedValue(undefined);
  const items2 = [sharedValue];
  const callback1 = obj2.useCallback((nativeEvent) => {
    const result = sharedValue.set(nativeEvent.nativeEvent.layout);
  }, items2);
  const tmp12 = callback3();
  const tmp6 = transitionState(cleanUp[12]);
  sharedValue1 = channel(cleanUp[15]).useSharedValue(0);
  const items3 = [cleanUp, transitionState, sharedValue1];
  const effect = obj2.useEffect(() => {
    if (transitionState === channel(cleanUp[16]).TransitionStates.YEETED) {
      const result = sharedValue1.set(0);
      cleanUp();
    }
  }, items3);
  const tmpResult1 = channel(cleanUp[15]);
  const fn = function v() {
    return sharedValue.get();
  };
  fn.__closure = { typingIndicatorLayout: sharedValue };
  fn.__workletHash = 10758673194436;
  fn.__initData = closure_13;
  class C {
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
        tmp4 = closure_6;
        tmp5 = channel;
        tmp6 = cleanUp;
        obj = channel(cleanUp[17]);
        tmp7 = -channel.height;
        str = "respect-motion-settings";
        result = closure_6.set(obj.withSpring(tmp7, channel(cleanUp[18]).springStandard, "respect-motion-settings"));
      }
      return;
    }
  }
  obj = { translateYValue: sharedValue1, withSpring: tmp(tmp2[17]).withSpring, springStandard: tmp(tmp2[18]).springStandard };
  C.__closure = obj;
  C.__workletHash = 14874351700395;
  C.__initData = closure_14;
  const animatedReaction = channel(cleanUp[15]).useAnimatedReaction(fn, C);
  const tmpResult2 = channel(cleanUp[15]);
  class P {
    constructor() {
      value = closure_5.get();
      obj = closure_6;
      if (0 === closure_6.get()) {
        num = 0;
      } else {
        tmp2 = transitionState;
        tmp3 = channel;
        tmp4 = cleanUp;
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
  obj1 = { typingIndicatorLayout: sharedValue, translateYValue: sharedValue1, transitionState, TransitionStates: tmp(tmp2[16]).TransitionStates };
  P.__closure = obj1;
  P.__workletHash = 15240163018691;
  P.__initData = closure_15;
  const animatedStyle = channel(cleanUp[15]).useAnimatedStyle(P);
  const tmpResult3 = channel(cleanUp[15]);
  const token = channel(cleanUp[19]).useToken(tmp5(tmp2[8]).modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING);
  const items4 = [tmp12.typingWrapper, , ];
  let tmp19;
  if (obj.useMobileVisualRefreshConfig({ location: "TypingIndicatorInner" }).chatInputFloating) {
    const items5 = [tmp12.floatingWrapper, ];
    obj2 = { paddingLeft: null };
    obj2[0] = 2 * token;
    items5[1] = obj2;
    tmp19 = items5;
  }
  const obj3 = { style: items4, onLayout: callback1, children: null };
  items4[1] = tmp19;
  items4[2] = animatedStyle;
  const obj4 = { style: tmp12.wrapperHoriz, children: null };
  const obj5 = { style: tmp12.horiz, children: null };
  if (null != stateFromStoresObject.config) {
    const obj6 = { config: null, username: null, emojiSize: 16, textEmojiLineHeight: 24, onPressGlyph: null };
    ({ config: obj19[0], name: obj19[1] } = stateFromStoresObject);
    obj6[4] = callback;
    let tmp20Result = tmp18(tmp5(tmp2[20]), obj6);
  } else {
    let tmp18Result = null;
    if (null != tmp6Result) {
      tmp18Result = tmp18(tmp(tmp2[21]).Ellipsis, {});
    }
    const obj7 = { children: null };
    const items6 = [tmp18Result, ];
    const obj8 = { style: null, lineClamp: 1, maxFontSizeMultiplier: 2, variant: "text-xs/medium", color: "interactive-text-default", ellipsizeMode: "tail", children: null };
    obj8[0] = tmp12.text;
    obj8[6] = tmp6Result;
    items6[1] = tmp18(tmp(tmp2[22]).Text, obj8);
    obj7[0] = items6;
    tmp20Result = tmp20(closure_10, obj7);
    const tmp22 = closure_10;
  }
  obj5[1] = tmp20Result;
  const items7 = [closure_9(first, obj5), ];
  let tmp18Result1 = null;
  if (channel.rateLimitPerUser > 0) {
    const obj9 = { channel: null, hasTypingText: null, slowmodeType: null };
    obj9[0] = channel;
    obj9[1] = null != tmp6Result;
    obj9[2] = sharedValue1.SendMessage;
    tmp18Result1 = tmp18(tmp5(tmp2[23]), obj9);
  }
  items7[1] = tmp18Result1;
  obj4[1] = items7;
  obj3[2] = closure_11(first, obj4);
  return closure_9(transitionState(cleanUp[15]).View, obj3);
}
function renderTypingIndicator(arg0, arg1, transitionState, cleanUp) {
  const obj = {};
  const merged = Object.assign(arg1);
  obj.transitionState = transitionState;
  obj.cleanUp = cleanUp;
  return callback2(TypingIndicatorInner, obj, arg0);
}
let c3 = importAllResult;
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = jsxProd);
let obj = { typingWrapper: null, floatingWrapper: null, wrapperHoriz: null, horiz: null, text: null };
obj = { paddingTop: ThemesDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_PADDING_TOP, paddingBottom: 4, paddingHorizontal: 16, alignSelf: "stretch", backgroundColor: ThemesDefault.colors.MOBILE_TYPING_INDICATOR_BACKGROUND_DEFAULT };
obj[0] = obj;
createCacheKey = { backgroundColor: "transparent", paddingRight: ThemesDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING };
obj[1] = createCacheKey;
obj[2] = { justifyContent: "space-between", flexDirection: "row", alignItems: "center" };
obj[3] = { marginRight: ThemesDefault.space.PX_8, alignItems: "center", flexDirection: "row", flex: 1 };
obj[4] = { flex: 1 };
let closure_12 = createCacheKey.createStyles(obj);
let closure_13 = { code: "function TypingIndicatorTsx1(){const{typingIndicatorLayout}=this.__closure;return typingIndicatorLayout.get();}" };
let closure_14 = { code: "function TypingIndicatorTsx2(current,prev){const{translateYValue,withSpring,springStandard}=this.__closure;if(current===prev)return;if(current==null)return;if(current.y.toFixed(2)!==current.height.toFixed(2))return;translateYValue.set(withSpring(-current.height,springStandard,'respect-motion-settings'));}" };
let closure_15 = { code: "function TypingIndicatorTsx3(){const{typingIndicatorLayout,translateYValue,transitionState,TransitionStates}=this.__closure;const layout=typingIndicatorLayout.get();return{opacity:translateYValue.get()===0||transitionState===TransitionStates.YEETED?0:1,top:layout===null||layout===void 0?void 0:layout.height,transform:[{translateY:translateYValue.get()}]};}" };
let obj2 = { marginRight: ThemesDefault.space.PX_8, alignItems: "center", flexDirection: "row", flex: 1 };
const memoResult = importAllResult.memo((channel) => {
  channel = channel.channel;
  closure_1 = undefined;
  let typingUserIds;
  const tmp = callback(channel.screenIndex);
  closure_1 = tmp;
  let obj = channel(typingUserIds[24]);
  typingUserIds = obj.useTypingUserIds(channel.id, 4);
  const items = [channel, typingUserIds, tmp];
  const memo = importAllResult.useMemo(() => {
    let tmp3 = channel.rateLimitPerUser > 0;
    if (!tmp3) {
      tmp3 = arr.length > 0;
    }
    if (tmp3) {
      tmp3 = !closure_1;
    }
    let tmp4;
    if (tmp3) {
      const obj = { channel: null, typingUserIds: null };
      obj[0] = channel;
      obj[1] = arr;
      tmp4 = obj;
    }
    return tmp4;
  }, items);
  obj = { item: memo, renderItem: renderTypingIndicator };
  return callback2(channel(typingUserIds[16]).TransitionItem, obj);
});
let result = require("set").fileFinishedImporting("modules/chat/native/TypingIndicator.tsx");

export default memoResult;
export const hasTypingIndicatorContent = function hasTypingIndicatorContent(channel, typingUserIds, arg2) {
  let tmp = channel.rateLimitPerUser > 0;
  if (!tmp) {
    tmp = typingUserIds.length > 0;
  }
  if (tmp) {
    tmp = !arg2;
  }
  return tmp;
};