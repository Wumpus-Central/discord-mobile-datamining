// === Module 11433: ChatViewWrapperAnimatedKeyboard ===

// Module 11433 (ChatViewWrapperAnimatedKeyboard)
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5380 */;
import useCustomKeyboardHeightDefault from "useCustomKeyboardHeight" /* 5748 */;
import LayerScope from "LayerScope" /* 5750 */;
import useChannelSafeAreaHeightSharedValueDefault from "useChannelSafeAreaHeightSharedValue" /* 11434 */;
import useChannelSafeAreaBottomStylesDefault from "useChannelSafeAreaBottomStyles" /* 11446 */;
import useChatViewPointerEventsDefault from "useChatViewPointerEvents" /* 11448 */;
import StickyWrapper from "StickyWrapper" /* 11449 */;
import noop from "module_19" /* 19 */;

const _modDef1652 = _mod1652;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
const Easing = fn(1652).Easing;
let obj = { duration: fn(5383).timingStandardDuration, easing: Easing.bezier(0.2, 0, 0, 1) };
let closure_8 = { code: "(function ChatViewWrapperAnimatedKeyboardTsx1(){let[animatedHeight]=this.__closure;return animatedHeight.get();})" };
let closure_9 = { code: "(function ChatViewWrapperAnimatedKeyboardTsx2(height,heightPrev){let[animatedAdjustedMargin,animatedAdjustedMarginPending]=this.__closure;if(heightPrev==null){return;}if(height<heightPrev){animatedAdjustedMargin.set(height);animatedAdjustedMarginPending.set(-1);}else{animatedAdjustedMarginPending.set(height);}})" };
let closure_10 = { code: "(function ChatViewWrapperAnimatedKeyboardTsx3(finished){let[animatedAdjustedMarginPending,animatedAdjustedMargin]=this.__closure;if(!finished){return;}if(animatedAdjustedMarginPending.get()!==-1){animatedAdjustedMargin.set(animatedAdjustedMarginPending.get());animatedAdjustedMarginPending.set(-1);}})" };
let closure_11 = { code: "(function ChatViewWrapperAnimatedKeyboardTsx4(){let[animatedAdjustedMargin,withTiming,animatedHeight,INSET_ANIMATION_CONFIG2,_worklet_10333741439588_init_data,animatedAdjustedMarginPending]=this.__closure;return{flex:1,marginTop:animatedAdjustedMargin.get(),transform:[{translateY:withTiming(-animatedHeight.get(),INSET_ANIMATION_CONFIG2,'respect-motion-settings',function ChatViewWrapperAnimatedKeyboardTsx3Factory([_worklet_10333741439588_init_data,animatedAdjustedMarginPending,animatedAdjustedMargin]){const ChatViewWrapperAnimatedKeyboardTsx3=function(finished){if(!finished){return;}if(animatedAdjustedMarginPending.get()!==-1){animatedAdjustedMargin.set(animatedAdjustedMarginPending.get());animatedAdjustedMarginPending.set(-1);}};ChatViewWrapperAnimatedKeyboardTsx3.__closure=[animatedAdjustedMarginPending,animatedAdjustedMargin];ChatViewWrapperAnimatedKeyboardTsx3.__workletHash=10333741439588;ChatViewWrapperAnimatedKeyboardTsx3.__initData=_worklet_10333741439588_init_data;return ChatViewWrapperAnimatedKeyboardTsx3;}([_worklet_10333741439588_init_data,animatedAdjustedMarginPending,animatedAdjustedMargin]))}]};})" };
let closure_12 = noop.memo(function ChatViewWrapperSafeAreaBackground(channelId) {
  const tmp = useCustomKeyboardHeightDefault();
  const height = tmp;
  items = [tmp];
  obj = { style: null };
  const items1 = [
    useChannelSafeAreaBottomStylesDefault(channelId.channelId),
    noop.useMemo(() => {
      const rect = { position: "absolute", bottom: -height, height, right: 0, left: 0 };
      return rect;
    }, items)
  ];
  obj.style = items1;
  return hasOwnProperty(View, obj);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapperAnimatedKeyboard.tsx");

export default function ChatViewWrapperAnimatedKeyboard(arg0) {
  ({ channelId, style } = arg0);
  ({ children, stickyHeader } = arg0);
  obj = useChannelSafeAreaHeightSharedValueDefault();
  const tmp3 = useChatViewPointerEventsDefault(channelId);
  const sharedValue = _mod1652.useSharedValue(obj.get());
  const sharedValue1 = _mod1652.useSharedValue(-1);
  items = [closure_8, obj];
  c0 = undefined;
  [tmp7, tmp8] = items;
  class ChatViewWrapperAnimatedKeyboardTsx1 {
    constructor() {
      return closure_0.get();
    }
  }
  let items1 = [tmp8];
  ChatViewWrapperAnimatedKeyboardTsx1.__closure = items1;
  ChatViewWrapperAnimatedKeyboardTsx1.__workletHash = 8556393657523;
  ChatViewWrapperAnimatedKeyboardTsx1.__initData = tmp7;
  let items2 = [closure_9, sharedValue, sharedValue1];
  c0 = undefined;
  c1 = undefined;
  [tmp9, tmp10, tmp11] = items2;
  class ChatViewWrapperAnimatedKeyboardTsx2 {
    constructor(arg0, arg1) {
      if (null != arg1) {
        tmp = arg0;
        if (arg0 < arg1) {
          tmp4 = closure_0;
          result = closure_0.set(arg0);
          tmp6 = closure_1;
          num = -1;
          result1 = closure_1.set(-1);
        } else {
          tmp2 = closure_1;
          result2 = closure_1.set(arg0);
        }
      }
      return;
    }
  }
  const items3 = [tmp10, tmp11];
  ChatViewWrapperAnimatedKeyboardTsx2.__closure = items3;
  ChatViewWrapperAnimatedKeyboardTsx2.__workletHash = 10320676760625;
  ChatViewWrapperAnimatedKeyboardTsx2.__initData = tmp9;
  const animatedReaction = _mod1652.useAnimatedReaction(ChatViewWrapperAnimatedKeyboardTsx1, ChatViewWrapperAnimatedKeyboardTsx2);
  const items4 = [closure_11, sharedValue, timing_timing.withTiming, obj, obj, closure_10, sharedValue1];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  [tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19] = items4;
  class ChatViewWrapperAnimatedKeyboardTsx4 {
    constructor() {
      obj = { flex: 1, marginTop: closure_0.get(), transform: null };
      tmp = closure_1;
      tmp2 = -closure_2.get();
      tmp3 = closure_3;
      items = [, , ];
      items[0] = closure_4;
      items[1] = closure_5;
      items[2] = closure_0;
      closure_0 = undefined;
      closure_1 = undefined;
      [tmp4, tmp5, tmp6] = items;
      obj1 = { translateY: null };
      class ChatViewWrapperAnimatedKeyboardTsx3 {
        constructor(arg0) {
          tmp = arg0;
          if (arg0) {
            tmp2 = closure_0;
            num = -1;
            tmp = -1 !== closure_0.get();
          }
          if (tmp) {
            tmp3 = closure_1;
            tmp4 = closure_0;
            result = closure_1.set(closure_0.get());
            num2 = -1;
            result1 = closure_0.set(-1);
          }
          return;
        }
      }
      items1 = [, ];
      items1[0] = tmp5;
      items1[1] = tmp6;
      ChatViewWrapperAnimatedKeyboardTsx3.__closure = items1;
      ChatViewWrapperAnimatedKeyboardTsx3.__workletHash = 10333741439588;
      ChatViewWrapperAnimatedKeyboardTsx3.__initData = tmp4;
      obj1.translateY = tmp(tmp2, tmp3, "respect-motion-settings", ChatViewWrapperAnimatedKeyboardTsx3);
      items2 = [];
      items2[0] = obj1;
      obj.transform = items2;
      return obj;
    }
  }
  const items5 = [tmp14, tmp15, tmp16, tmp17, tmp18, tmp19];
  ChatViewWrapperAnimatedKeyboardTsx4.__closure = items5;
  ChatViewWrapperAnimatedKeyboardTsx4.__workletHash = 8586064025936;
  ChatViewWrapperAnimatedKeyboardTsx4.__initData = tmp13;
  const animatedStyle = _mod1652.useAnimatedStyle(ChatViewWrapperAnimatedKeyboardTsx4);
  const obj5 = { children: null };
  const obj6 = { header: stickyHeader, style, pointerEvents: tmp3, children: null };
  const obj7 = { style: animatedStyle, children: null };
  const items6 = [hasOwnProperty(View, { style, children }), hasOwnProperty(closure_12, { channelId })];
  obj7.children = items6;
  obj6.children = timestampProducer(_modDef1652.View, obj7);
  obj5.children = hasOwnProperty(StickyWrapper.StickyWrapper, obj6);
  return hasOwnProperty(LayerScope.LayerScope, obj5);
};