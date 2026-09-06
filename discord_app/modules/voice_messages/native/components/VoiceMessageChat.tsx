// discord_app/modules/voice_messages/native/components/VoiceMessageChat.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport2 from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import utils_TimeUtils from "../../../../utils/native/TimeUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

const ReanimatedRexport = ReanimatedRexport2;

require = fn;
function WaveformBar(value) {
  value = value.value;
  const require = value;
  let sharedValue1;
  let obj = require("ReanimatedRexport");
  const sharedValue = obj.useSharedValue(0);
  const tmp = closure_16();
  sharedValue1 = require("ReanimatedRexport").useSharedValue(0);
  const obj2 = require("ReanimatedRexport");
  const sharedValue2 = require("ReanimatedRexport").useSharedValue(0);
  const obj3 = require("ReanimatedRexport");
  const fn = function o() {
    const size = { height: sharedValue.get(), width: sharedValue1.get(), marginRight: sharedValue2.get() };
    return size;
  };
  fn.__closure = { animatedHeight: sharedValue, animatedWidth: sharedValue1, animatedMargin: sharedValue2 };
  fn.__workletHash = 8768145898720;
  fn.__initData = __initData;
  const items = [sharedValue, value];
  const animatedStyle = require("ReanimatedRexport").useAnimatedStyle(fn);
  const effect = noop.useEffect(() => {
    const result = 20 * Math.min(1, (value / closure_2_12) * 1.25);
    const result1 = sharedValue.set(spring.withSpring(Math.max(2, result)));
  }, items);
  const items1 = [sharedValue1, sharedValue2];
  const effect1 = noop.useEffect(() => {
    let obj = { duration: 300, easing: ReanimatedRexport2.Easing.linear };
    const result = sharedValue1.set(obj.withTiming(2, obj));
    obj = { duration: 300, easing: ReanimatedRexport2.Easing.linear };
    const result1 = sharedValue2.set(timing.withTiming(4, obj));
  }, items1);
  obj = { style: null };
  const items2 = [tmp.waveformBar, animatedStyle];
  obj.style = items2;
  return closure_13(sharedValue(sharedValue1[7]).View, obj);
}
function Waveform() {
  useVoiceMessagesUIStore((waveformVersion) => waveformVersion.waveformVersion);
  const tmp = closure_16();
  const tmp3 = _slicedToArray(noop.useState(0), 2);
  closure_0 = tmp3[1];
  const substr = useVoiceMessagesUIStore((waveform) => waveform.waveform).slice(-tmp3[0]);
  const arr = useVoiceMessagesUIStore((waveform) => waveform.waveform);
  return closure_13(closure_5, {
    style: tmp.waveformContainer,
    onLayout: noop.useCallback((nativeEvent) => {
      closure_0(Math.round(nativeEvent.nativeEvent.layout.width / 6) + 2);
    }, []),
    children: substr.map((item) => {
      [tmp, tmp2] = item;
      return closure_1_13(WaveformBar, { value }, tmp2);
    }),
  });
}
function Duration(animationValue) {
  animationValue = animationValue.animationValue;
  _slicedToArray = undefined;
  let first1;
  useVoiceMessagesUIStore = undefined;
  const tmp = closure_16();
  const tmp2 = useVoiceMessagesUIStore((startTimeMillis) => startTimeMillis.startTimeMillis);
  importDefault = tmp2;
  const tmp3 = _slicedToArray(
    first1.useState(() => {
      let num = 0;
      if (null != closure_1) {
        const _Date = Date;
        num = Date.now() - tmp;
      }
      return num;
    }),
    2,
  );
  const first = tmp3[0];
  _slicedToArray = tmp3[1];
  const tmp5 = _slicedToArray(first1.useState(undefined), 2);
  first1 = tmp5[0];
  closure_5 = tmp5[1];
  const tmp7 = useVoiceMessagesUIStore(
    (savedVoiceMessageUploadData) => null != savedVoiceMessageUploadData.savedVoiceMessageUploadData,
  );
  const useReducedMotion = tmp7;
  let obj = animationValue(first[13]);
  const items = [tmp2, tmp7];
  const token = obj.useToken(require("native").modules.mobile.VOICE_MESSAGE_DURATION_TEXT_STYLE);
  const effect = first1.useEffect(() => {
    if (closure_6) {
      closure_3(closure_1_8 + closure_1_9);
      closure_5(constants.ENDED);
    } else {
      const _setInterval = setInterval;
      const interval = setInterval(() => {
        if (null != closure_1_1) {
          const _Date = Date;
          const diff = Date.now() - tmp;
          closure_1_3(diff);
          if (diff > closure_2_10) {
            closure_1_5(constants.REALLY_WARN);
          } else if (diff > closure_2_11) {
            closure_1_5(constants.WARN);
          }
        }
      }, 100);
      return () => {
        clearInterval(closure_0);
      };
    }
  }, items);
  const items1 = [first];
  const memo = first1.useMemo(() => utils_TimeUtils.getTimeFormat(first / 1000, { padMinutes: false }), items1);
  const tmp13 = _slicedToArray(first1.useState(false), 2);
  useVoiceMessagesUIStore = tmp13[1];
  const items2 = [first1];
  const effect1 = first1.useEffect(() => {
    if (null != first1) {
      if (tmp !== constants.ENDED) {
        let num = 1000;
        if (!useReducedMotion.useReducedMotion) {
          let num2 = 250;
          if (tmp === tmp4.WARN) {
            num2 = 500;
          }
          num = num2;
        }
        function flash() {
          closure_7((arg0) => !arg0);
          const timeout = setTimeout(flash, num);
        }
        closure_7((arg0) => !arg0);
        const _setTimeout = setTimeout;
        let timeout = setTimeout(flash, num);
        return () => {
          clearTimeout(closure_0);
        };
      } else {
        closure_7(true);
      }
    } else {
      closure_7(false);
    }
  }, items2);
  const fn = function x() {
    return { opacity: animationValue.get() };
  };
  fn.__closure = { animationValue };
  fn.__workletHash = 4012974382717;
  fn.__initData = __initData2;
  const animatedStyle = animationValue(first[7]).useAnimatedStyle(fn);
  obj = { style: null, children: null };
  const items3 = [tmp.durationContainer, animatedStyle];
  obj.style = items3;
  const items4 = [tmp.dot];
  let tmp19 = null != tmp2;
  if (tmp19) {
    tmp19 = !tmp7;
  }
  let dotDismissed = !tmp19;
  if (!tmp19) {
    dotDismissed = tmp.dotDismissed;
  }
  items4[1] = dotDismissed;
  const items5 = [closure_13(closure_5, { style: items4 })];
  obj = { style: tmp.duration, variant: token, color: null, tabularNumbers: true, children: null };
  let str = "text-default";
  if (tmp13[0]) {
    str = "text-feedback-critical";
  }
  obj.color = str;
  obj.children = memo;
  items5[1] = closure_13(animationValue(first[15]).Text, obj);
  obj.children = items5;
  return closure_14(require("ReanimatedRexport").View, obj);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ActivityIndicator } = get_ActivityIndicator);
let useVoiceMessagesUIStore = fn(11960).useVoiceMessagesUIStore;
const VoiceMessageConstants = fn(11961);
({
  VOICE_RECORDING_MAX_DURATION_MILLIS: closure_8,
  VOICE_RECORDING_MAX_DURATION_OFFSET: closure_9,
  VOICE_RECORDING_REALLY_WARN_DURATION_MILLIS: c10,
  VOICE_RECORDING_WARN_DURATION_MILLIS: closure_11,
  WAVEFORM_WAVE_MAX_VALUE: closure_12,
} = VoiceMessageConstants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
let closure_15 = ReanimatedRexport.createAnimatedComponent(ActivityIndicator);
fn(4560);
let obj = {
  container: null,
  loading: null,
  dot: null,
  dotDismissed: null,
  waveformContainer: null,
  waveformBar: null,
  durationContainer: null,
  duration: null,
};
obj = {
  height: "100%",
  flexDirection: "row",
  alignItems: "center",
  paddingVertical: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_CONTAINER_PADDING_VERTICAL,
  paddingHorizontal: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_PILL_PADDING_HORIZONTAL,
  gap: nativeDefault.modules.mobile.VOICE_MESSAGE_CHAT_GAP,
  borderRadius: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_PILL_BORDER_RADIUS,
  backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_DEFAULT,
  borderWidth: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH,
  borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_ACTIVE,
};
obj.container = obj;
obj.loading = { position: "absolute", left: 12 };
let size = {
  height: 6,
  width: 6,
  backgroundColor: nativeDefault.unsafe_rawColors.RED_400,
  borderRadius: nativeDefault.radii.round,
};
obj.dot = size;
obj.dotDismissed = { backgroundColor: "transparent" };
obj.waveformContainer = {
  flex: 1,
  height: "100%",
  overflow: "hidden",
  justifyContent: "flex-end",
  flexDirection: "row",
  alignItems: "center",
};
obj.waveformBar = {
  backgroundColor: nativeDefault.colors.MOBILE_VOICE_MESSAGE_RECORDING_WAVEFORM_BAR_BACKGROUND,
  borderRadius: 1,
};
const createStyles = {
  flexDirection: "row",
  alignItems: "center",
  gap: 4,
  marginLeft: nativeDefault.modules.mobile.VOICE_MESSAGE_DURATION_MARGIN_LEFT,
};
obj.durationContainer = createStyles;
let PlatformUtils = fn(1115);
PlatformUtils = PlatformUtils.isAndroid();
const mobile = nativeDefault.modules.mobile;
let obj3 = {
  lineHeight: PlatformUtils
    ? mobile.VOICE_MESSAGE_DURATION_LINE_HEIGHT_ANDROID
    : mobile.VOICE_MESSAGE_DURATION_LINE_HEIGHT_IOS,
  textAlignVertical: null,
};
PlatformUtils = fn(1115);
let str;
if (PlatformUtils.isAndroid()) {
  str = "center";
}
obj3.textAlignVertical = str;
obj.duration = obj3;
let closure_16 = createStyles.createStyles(obj);
const __initData = {
  code: "function VoiceMessageChatTsx1(){const{animatedHeight,animatedWidth,animatedMargin}=this.__closure;return{height:animatedHeight.get(),width:animatedWidth.get(),marginRight:animatedMargin.get()};}",
};
let closure_20 = { WARN: 0, [0]: "WARN", REALLY_WARN: 1, [1]: "REALLY_WARN", ENDED: 2, [2]: "ENDED" };
const __initData2 = {
  code: "function VoiceMessageChatTsx2(){const{animationValue}=this.__closure;return{opacity:animationValue.get()};}",
};
const __initData3 = {
  code: "function VoiceMessageChatTsx3(){const{initialAnimation,isRecording}=this.__closure;return initialAnimation.get()===1&&isRecording;}",
};
const __initData4 = {
  code: "function VoiceMessageChatTsx4(result,previous){const{animationValue,withTiming,Easing,loadingOpacity}=this.__closure;if(result&&result!==previous){animationValue.set(withTiming(1,{easing:Easing.quad,duration:200}));loadingOpacity.set(0);}}",
};
const __initData5 = {
  code: "function VoiceMessageChatTsx5(){const{backgroundColor}=this.__closure;return{width:'100%',...(backgroundColor!=null?{backgroundColor:backgroundColor.get()}:{})};}",
};
const __initData6 = {
  code: "function VoiceMessageChatTsx6(){const{loadingOpacity}=this.__closure;return{opacity:loadingOpacity.get()};}",
};
let obj1 = {
  backgroundColor: nativeDefault.colors.MOBILE_VOICE_MESSAGE_RECORDING_WAVEFORM_BAR_BACKGROUND,
  borderRadius: 1,
};
size = fn(2);
let result = size.fileFinishedImporting("modules/voice_messages/native/components/VoiceMessageChat.tsx");

export default noop.memo((isRecording) => {
  isRecording = isRecording.isRecording;
  const initialAnimation = isRecording.initialAnimation;
  const backgroundColor = isRecording.backgroundColor;
  let sharedValue1;
  ({ leftAccessory, rightAccessory } = isRecording);
  let tmp = closure_16();
  let obj = isRecording(backgroundColor[13]);
  const token = obj.useToken(initialAnimation(backgroundColor[9]).colors.MOBILE_VOICE_MESSAGE_RECORDING_SPINNER_COLOR);
  let obj1 = isRecording(backgroundColor[7]);
  const sharedValue = obj1.useSharedValue(0);
  const items = [sharedValue, isRecording];
  const effect = sharedValue1.useEffect(() => {
    if (!timeout) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        isRecording(backgroundColor[12]);
        const obj = { easing: isRecording(backgroundColor[7]).Easing.quad, duration: 200 };
        const result = sharedValue.set(obj.withTiming(1, obj));
      }, 1000);
      return () => {
        clearTimeout(closure_0);
      };
    }
  }, items);
  sharedValue1 = isRecording(backgroundColor[7]).useSharedValue(0);
  const obj3 = isRecording(backgroundColor[7]);
  const fn = function h() {
    return 1 === initialAnimation.get() && isRecording;
  };
  fn.__closure = { initialAnimation, isRecording };
  fn.__workletHash = 7599681139161;
  fn.__initData = __initData3;
  class A {
    constructor(arg0, arg1) {
      tmp = isRecording;
      if (isRecording) {
        tmp2 = arg1;
        tmp = isRecording !== arg1;
      }
      if (tmp) {
        tmp3 = closure_4;
        tmp4 = closure_0;
        tmp5 = closure_2;
        obj = closure_0(closure_2[12]);
        obj = { easing: null, duration: 200 };
        obj.easing = closure_0(closure_2[7]).Easing.quad;
        num = 1;
        result = closure_4.set(obj.withTiming(1, obj));
        tmp7 = closure_3;
        num2 = 0;
        result1 = closure_3.set(0);
      }
      return;
    }
  }
  obj = {
    animationValue: sharedValue1,
    withTiming: isRecording(backgroundColor[12]).withTiming,
    Easing: isRecording(backgroundColor[7]).Easing,
    loadingOpacity: sharedValue,
  };
  A.__closure = obj;
  A.__workletHash = 7661977794788;
  A.__initData = __initData4;
  const animatedReaction = isRecording(backgroundColor[7]).useAnimatedReaction(fn, A);
  const obj4 = isRecording(backgroundColor[7]);
  class R {
    constructor() {
      obj = backgroundColor;
      if (null != backgroundColor) {
        obj = { backgroundColor: null };
        obj.backgroundColor = obj.get();
        obj1 = obj;
      } else {
        obj1 = {};
      }
      obj2 = { width: "100%" };
      merged = Object.assign(obj1);
      return obj2;
    }
  }
  R.__closure = { backgroundColor };
  R.__workletHash = 118691194506;
  R.__initData = __initData5;
  const animatedStyle = isRecording(backgroundColor[7]).useAnimatedStyle(R);
  const obj6 = isRecording(backgroundColor[7]);
  const fn2 = function f() {
    return { opacity: sharedValue.get() };
  };
  fn2.__closure = { loadingOpacity: sharedValue };
  fn2.__workletHash = 17421928475897;
  fn2.__initData = __initData6;
  const animatedStyle1 = isRecording(backgroundColor[7]).useAnimatedStyle(fn2);
  obj = { style: null, children: null };
  const items1 = [tmp.container, animatedStyle];
  obj.style = items1;
  let tmp10 = null;
  if (!isRecording) {
    obj1 = { style: null, color: null, size: "small" };
    const items2 = [tmp.loading, animatedStyle1];
    obj1.style = items2;
    obj1.color = token;
    tmp10 = closure_13(closure_15, obj1);
  }
  const items3 = [
    tmp10,
    leftAccessory,
    closure_13(Duration, { animationValue: sharedValue1 }),
    closure_13(Waveform, {}),
    rightAccessory,
  ];
  obj.children = items3;
  return closure_14(initialAnimation(backgroundColor[7]).View, obj);
});
