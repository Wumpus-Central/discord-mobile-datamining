// discord_app/modules/voice_messages/native/components/VoiceMessageChat.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_6 from "../../../a11y/AccessibilityStore.tsx";
import { useVoiceMessagesUIStore } from "../VoiceMessagesUIStore.tsx";
import VoiceMessageAnimationState from "../../VoiceMessageConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import importDefaultResult from "../../../reanimated/ReanimatedRexport.tsx";
import set from "../../../../utils/PlatformUtils.tsx";

let require = arg1;
function WaveformBar(value) {
  value = value.value;
  require = value;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  const tmp = callback3();
  sharedValue = require(sharedValue1[7]).useSharedValue(0);
  let obj = require(sharedValue1[7]);
  sharedValue1 = require(sharedValue1[7]).useSharedValue(0);
  const obj2 = require(sharedValue1[7]);
  sharedValue2 = require(sharedValue1[7]).useSharedValue(0);
  const obj3 = require(sharedValue1[7]);
  const fn = function o() {
    return { height: sharedValue.get(), width: sharedValue1.get(), marginRight: sharedValue2.get() };
  };
  fn.__closure = { animatedHeight: sharedValue, animatedWidth: sharedValue1, animatedMargin: sharedValue2 };
  fn.__workletHash = 8768145898720;
  fn.__initData = closure_17;
  const items = [sharedValue, value];
  const animatedStyle = require(sharedValue1[7]).useAnimatedStyle(fn);
  const effect = importAllResult.useEffect(() => {
    const result = 20 * Math.min(1, closure_0 / closure_1_12 * 1.25);
    const result1 = sharedValue.set(value(sharedValue1[11]).withSpring(Math.max(2, result)));
  }, items);
  const items1 = [sharedValue1, sharedValue2];
  const effect1 = importAllResult.useEffect(() => {
    let obj = value(sharedValue1[12]);
    obj = { duration: 300, easing: value(sharedValue1[7]).Easing.linear };
    const result = sharedValue1.set(obj.withTiming(2, obj));
    obj = { duration: 300, easing: value(sharedValue1[7]).Easing.linear };
    const result1 = sharedValue2.set(value(sharedValue1[12]).withTiming(4, obj));
  }, items1);
  const style = [tmp.waveformBar, animatedStyle];
  return callback2(sharedValue(sharedValue1[7]).View, { style });
}
function Waveform() {
  useVoiceMessagesUIStore((waveformVersion) => waveformVersion.waveformVersion);
  const tmp = callback3();
  const tmp3 = callback(importAllResult.useState(0), 2);
  closure_0 = tmp3[1];
  const substr = useVoiceMessagesUIStore((waveform) => waveform.waveform).slice(-tmp3[0]);
  const arr = useVoiceMessagesUIStore((waveform) => waveform.waveform);
  return callback2(closure_5, {
    style: tmp.waveformContainer,
    onLayout: importAllResult.useCallback((nativeEvent) => {
      callback(Math.round(nativeEvent.nativeEvent.layout.width / 6) + 2);
    }, []),
    children: substr.map((arg0) => {
      [tmp, tmp2] = arg0;
      return callback2(closure_18, { value }, tmp2);
    })
  });
}
function Duration(animationValue) {
  animationValue = animationValue.animationValue;
  importDefault = undefined;
  let first;
  let callback;
  let first1;
  closure_5 = undefined;
  closure_6 = undefined;
  useVoiceMessagesUIStore = undefined;
  const tmp = callback3();
  const tmp2 = useVoiceMessagesUIStore((startTimeMillis) => startTimeMillis.startTimeMillis);
  importDefault = tmp2;
  const tmp3 = callback(first1.useState(() => {
    let num = 0;
    if (null != closure_1) {
      const _Date = Date;
      num = Date.now() - tmp;
    }
    return num;
  }), 2);
  first = tmp3[0];
  callback = tmp3[1];
  const tmp5 = callback(first1.useState(undefined), 2);
  first1 = tmp5[0];
  closure_5 = tmp5[1];
  const tmp7 = useVoiceMessagesUIStore((savedVoiceMessageUploadData) => null != savedVoiceMessageUploadData.savedVoiceMessageUploadData);
  closure_6 = tmp7;
  let obj = animationValue(first[13]);
  const items = [tmp2, tmp7];
  const token = obj.useToken(importDefault(first[9]).modules.mobile.VOICE_MESSAGE_DURATION_TEXT_STYLE);
  const effect = first1.useEffect(() => {
    if (closure_6) {
      callback(closure_1_8 + closure_1_9);
      callback2(closure_1_20.ENDED);
    } else {
      const _setInterval = setInterval;
      const interval = setInterval(() => {
        if (null != closure_1) {
          const _Date = Date;
          const diff = Date.now() - tmp;
          callback(diff);
          if (diff > closure_1_10) {
            callback2(closure_1_20.REALLY_WARN);
          } else if (diff > closure_1_11) {
            callback2(closure_1_20.WARN);
          }
        }
      }, 100);
      return () => {
        clearInterval(closure_0);
      };
    }
  }, items);
  const items1 = [first];
  const memo = first1.useMemo(() => animationValue(first[14]).getTimeFormat(first / 1000, { padMinutes: false }), items1);
  const tmp13 = callback(first1.useState(false), 2);
  useVoiceMessagesUIStore = tmp13[1];
  const items2 = [first1];
  const effect1 = first1.useEffect(() => {
    if (null != first1) {
      if (tmp !== closure_1_20.ENDED) {
        let num = 1000;
        if (!useReducedMotion.useReducedMotion) {
          let num2 = 250;
          if (tmp === tmp4.WARN) {
            num2 = 500;
          }
          num = num2;
        }
        function flash() {
          closure_1_7((arg0) => !arg0);
          const timeout = setTimeout(flash, num);
        }
        callback3((arg0) => !arg0);
        const _setTimeout = setTimeout;
        let timeout = setTimeout(flash, num);
        return () => {
          clearTimeout(closure_0);
        };
      } else {
        callback3(true);
      }
    } else {
      callback3(false);
    }
  }, items2);
  const fn = function x() {
    return { opacity: animationValue.get() };
  };
  fn.__closure = { animationValue };
  fn.__workletHash = 4012974382717;
  fn.__initData = closure_21;
  const animatedStyle = animationValue(first[7]).useAnimatedStyle(fn);
  obj = { style: items3, children: null };
  items3 = [tmp.durationContainer, animatedStyle];
  const items4 = [tmp.dot, ];
  let tmp19 = null != tmp2;
  if (tmp19) {
    tmp19 = !tmp7;
  }
  let dotDismissed = !tmp19;
  if (!tmp19) {
    dotDismissed = tmp.dotDismissed;
  }
  items4[1] = dotDismissed;
  const items5 = [closure_13(closure_5, { style: items4 }), ];
  obj = { style: tmp.duration, variant: token, color: null, tabularNumbers: true, children: null };
  let str = "text-default";
  if (tmp13[0]) {
    str = "text-feedback-critical";
  }
  obj[2] = str;
  obj[4] = memo;
  items5[1] = closure_13(animationValue(first[15]).Text, obj);
  obj[1] = items5;
  return closure_14(importDefault(first[7]).View, obj);
}
let c4 = importAllResult;
({ View: c5, ActivityIndicator } = get_ActivityIndicator);
({ VOICE_RECORDING_MAX_DURATION_MILLIS: closure_8, VOICE_RECORDING_MAX_DURATION_OFFSET: c9, VOICE_RECORDING_REALLY_WARN_DURATION_MILLIS: c10, VOICE_RECORDING_WARN_DURATION_MILLIS: unpackModuleId, WAVEFORM_WAVE_MAX_VALUE: closure_12 } = VoiceMessageAnimationState);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
let closure_15 = importDefaultResult.createAnimatedComponent(ActivityIndicator);
let obj = { container: null, loading: null, dot: null, dotDismissed: null, waveformContainer: null, waveformBar: null, durationContainer: null, duration: null };
obj = { height: "100%", flexDirection: "row", alignItems: "center", paddingVertical: ThemesDefault.modules.mobile.VOICE_MESSAGE_RECORDING_CONTAINER_PADDING_VERTICAL, paddingHorizontal: ThemesDefault.modules.mobile.VOICE_MESSAGE_RECORDING_PILL_PADDING_HORIZONTAL, gap: ThemesDefault.modules.mobile.VOICE_MESSAGE_CHAT_GAP, borderRadius: ThemesDefault.modules.mobile.VOICE_MESSAGE_RECORDING_PILL_BORDER_RADIUS, backgroundColor: ThemesDefault.colors.MOBILE_CHATINPUT_BACKGROUND_DEFAULT, borderWidth: ThemesDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH, borderColor: ThemesDefault.colors.MOBILE_CHATINPUT_BORDER_ACTIVE };
obj[0] = obj;
obj[1] = { position: "absolute", left: 12 };
obj[2] = { height: 6, width: 6, backgroundColor: ThemesDefault.unsafe_rawColors.RED_400, borderRadius: ThemesDefault.radii.round };
obj[3] = { backgroundColor: "transparent" };
obj[4] = { flex: 1, height: "100%", overflow: "hidden", justifyContent: "flex-end", flexDirection: "row", alignItems: "center" };
createCacheKey = { backgroundColor: ThemesDefault.colors.MOBILE_VOICE_MESSAGE_RECORDING_WAVEFORM_BAR_BACKGROUND, borderRadius: 1 };
obj[5] = createCacheKey;
let obj1 = { height: 6, width: 6, backgroundColor: ThemesDefault.unsafe_rawColors.RED_400, borderRadius: ThemesDefault.radii.round };
obj[6] = { flexDirection: "row", alignItems: "center", gap: 4, marginLeft: ThemesDefault.modules.mobile.VOICE_MESSAGE_DURATION_MARGIN_LEFT };
set = set.isAndroid();
const mobile = ThemesDefault.modules.mobile;
let obj4 = { lineHeight: set ? mobile.VOICE_MESSAGE_DURATION_LINE_HEIGHT_ANDROID : mobile.VOICE_MESSAGE_DURATION_LINE_HEIGHT_IOS, textAlignVertical: null };
let str;
if (set.isAndroid()) {
  str = "center";
}
obj4[1] = str;
obj[7] = obj4;
let closure_16 = createCacheKey.createStyles(obj);
let closure_17 = { code: "function VoiceMessageChatTsx1(){const{animatedHeight,animatedWidth,animatedMargin}=this.__closure;return{height:animatedHeight.get(),width:animatedWidth.get(),marginRight:animatedMargin.get()};}" };
let closure_20 = { WARN: 0, [0]: "WARN", REALLY_WARN: 1, [1]: "REALLY_WARN", ENDED: 2, [2]: "ENDED" };
let closure_21 = { code: "function VoiceMessageChatTsx2(){const{animationValue}=this.__closure;return{opacity:animationValue.get()};}" };
let closure_23 = { code: "function VoiceMessageChatTsx3(){const{initialAnimation,isRecording}=this.__closure;return initialAnimation.get()===1&&isRecording;}" };
let closure_24 = { code: "function VoiceMessageChatTsx4(result,previous){const{animationValue,withTiming,Easing,loadingOpacity}=this.__closure;if(result&&result!==previous){animationValue.set(withTiming(1,{easing:Easing.quad,duration:200}));loadingOpacity.set(0);}}" };
let closure_25 = { code: "function VoiceMessageChatTsx5(){const{backgroundColor}=this.__closure;return{width:'100%',...(backgroundColor!=null?{backgroundColor:backgroundColor.get()}:{})};}" };
let closure_26 = { code: "function VoiceMessageChatTsx6(){const{loadingOpacity}=this.__closure;return{opacity:loadingOpacity.get()};}" };
let obj3 = { flexDirection: "row", alignItems: "center", gap: 4, marginLeft: ThemesDefault.modules.mobile.VOICE_MESSAGE_DURATION_MARGIN_LEFT };
let result = set.fileFinishedImporting("modules/voice_messages/native/components/VoiceMessageChat.tsx");

export default importAllResult.memo((isRecording) => {
  isRecording = isRecording.isRecording;
  const initialAnimation = isRecording.initialAnimation;
  const backgroundColor = isRecording.backgroundColor;
  let sharedValue;
  let sharedValue1;
  ({ leftAccessory, rightAccessory } = isRecording);
  let tmp = callback3();
  let obj = isRecording(backgroundColor[13]);
  const token = obj.useToken(initialAnimation(backgroundColor[9]).colors.MOBILE_VOICE_MESSAGE_RECORDING_SPINNER_COLOR);
  obj1 = isRecording(backgroundColor[7]);
  sharedValue = obj1.useSharedValue(0);
  const items = [sharedValue, isRecording];
  const effect = sharedValue1.useEffect(() => {
    if (!timeout) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        let obj = callback(closure_1_2[12]);
        obj = { easing: callback(closure_1_2[7]).Easing.quad, duration: 200 };
        const result = closure_3.set(obj.withTiming(1, obj));
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
  fn.__initData = closure_23;
  class A {
    constructor(arg0, arg1) {
      tmp = isRecording;
      if (isRecording) {
        tmp2 = arg1;
        tmp = isRecording !== arg1;
      }
      if (tmp) {
        tmp3 = closure_4;
        tmp4 = isRecording;
        tmp5 = backgroundColor;
        obj = isRecording(backgroundColor[12]);
        obj = { easing: null, duration: 200 };
        obj[0] = isRecording(backgroundColor[7]).Easing.quad;
        num = 1;
        result = closure_4.set(obj.withTiming(1, obj));
        tmp7 = closure_3;
        num2 = 0;
        result1 = closure_3.set(0);
      }
      return;
    }
  }
  obj = { animationValue: sharedValue1, withTiming: isRecording(backgroundColor[12]).withTiming, Easing: isRecording(backgroundColor[7]).Easing, loadingOpacity: sharedValue };
  A.__closure = obj;
  A.__workletHash = 7661977794788;
  A.__initData = closure_24;
  const animatedReaction = isRecording(backgroundColor[7]).useAnimatedReaction(fn, A);
  const obj4 = isRecording(backgroundColor[7]);
  class R {
    constructor() {
      obj = backgroundColor;
      if (null != backgroundColor) {
        obj = { backgroundColor: null };
        obj[0] = obj.get();
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
  R.__initData = closure_25;
  const animatedStyle = isRecording(backgroundColor[7]).useAnimatedStyle(R);
  const obj6 = isRecording(backgroundColor[7]);
  const fn2 = function f() {
    return { opacity: sharedValue.get() };
  };
  fn2.__closure = { loadingOpacity: sharedValue };
  fn2.__workletHash = 17421928475897;
  fn2.__initData = closure_26;
  const animatedStyle1 = isRecording(backgroundColor[7]).useAnimatedStyle(fn2);
  obj = { style: items1, children: null };
  items1 = [tmp.container, animatedStyle];
  let tmp10 = null;
  if (!isRecording) {
    obj1 = { style: null, color: null, size: "small" };
    const items2 = [tmp.loading, animatedStyle1];
    obj1[0] = items2;
    obj1[1] = token;
    tmp10 = callback2(closure_15, obj1);
  }
  const items3 = [tmp10, leftAccessory, callback2(Duration, { animationValue: sharedValue1 }), callback2(Waveform, {}), rightAccessory];
  obj[1] = items3;
  return closure_14(initialAnimation(backgroundColor[7]).View, obj);
});