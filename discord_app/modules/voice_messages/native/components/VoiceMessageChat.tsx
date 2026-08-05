// discord_app/modules/voice_messages/native/components/VoiceMessageChat.tsx
import _slicedToArray from "_slicedToArray";
import importAllResult from "set";
import get_ActivityIndicator from "Text";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import { useVoiceMessagesUIStore } from "VoiceMessageRecordingStatus";
import VoiceMessageAnimationState from "VoiceMessageAnimationState";
import { ThemeTypes } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import importDefaultResult from "module_4146";
import set from "set";
import set from "set";
import set from "get ActivityIndicator";

let ActivityIndicator;
let c10;
let c5;
let c9;
let closure_12;
let closure_14;
let closure_15;
let metroImportAll;
let unpackModuleId;
let require = arg1;
function WaveformBar(value) {
  value = value.value;
  const require = value;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  const tmp = callback3();
  sharedValue = require(sharedValue1[8]).useSharedValue(0);
  let obj = require(sharedValue1[8]);
  sharedValue1 = require(sharedValue1[8]).useSharedValue(0);
  const obj2 = require(sharedValue1[8]);
  sharedValue2 = require(sharedValue1[8]).useSharedValue(0);
  const obj3 = require(sharedValue1[8]);
  const fn = function o() {
    return { height: sharedValue.get(), width: sharedValue1.get(), marginRight: sharedValue2.get() };
  };
  fn.__closure = { animatedHeight: sharedValue, animatedWidth: sharedValue1, animatedMargin: sharedValue2 };
  fn.__workletHash = 8768145898720;
  fn.__initData = closure_18;
  const items = [sharedValue, value];
  const animatedStyle = require(sharedValue1[8]).useAnimatedStyle(fn);
  const effect = importAllResult.useEffect(() => {
    const result = 20 * Math.min(1, closure_0 / outer1_12 * 1.25);
    const result1 = sharedValue.set(value(sharedValue1[12]).withSpring(Math.max(2, result)));
  }, items);
  const items1 = [sharedValue1, sharedValue2];
  const effect1 = importAllResult.useEffect(() => {
    let obj = value(sharedValue1[13]);
    obj = { duration: 300, easing: value(sharedValue1[8]).Easing.linear };
    const result = sharedValue1.set(obj.withTiming(2, obj));
    obj = { duration: 300, easing: value(sharedValue1[8]).Easing.linear };
    const result1 = sharedValue2.set(value(sharedValue1[13]).withTiming(4, obj));
  }, items1);
  const style = [tmp.waveformBar, animatedStyle];
  return callback2(sharedValue(sharedValue1[8]).View, { style });
}
function Waveform() {
  useVoiceMessagesUIStore((waveformVersion) => waveformVersion.waveformVersion);
  const tmp = callback3();
  const tmp3 = callback(importAllResult.useState(0), 2);
  let closure_0 = tmp3[1];
  const substr = useVoiceMessagesUIStore((waveform) => waveform.waveform).slice(-tmp3[0]);
  const arr = useVoiceMessagesUIStore((waveform) => waveform.waveform);
  return callback2(closure_5, {
    style: tmp.waveformContainer,
    onLayout: importAllResult.useCallback((nativeEvent) => {
      callback(Math.round(nativeEvent.nativeEvent.layout.width / 6) + 2);
    }, []),
    children: substr.map((arg0) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = arg0;
      return callback2(closure_19, { value }, tmp2);
    })
  });
}
function Duration(animationValue) {
  animationValue = animationValue.animationValue;
  let importDefault;
  let first;
  let callback;
  let first1;
  let closure_5;
  let c6;
  let useVoiceMessagesUIStore;
  const tmp = callback3();
  let obj = animationValue(first[14]);
  const chatInputFloating = obj.useMobileVisualRefreshConfig({ location: "voice-message-chat" }).chatInputFloating;
  const tmp4 = useVoiceMessagesUIStore((startTimeMillis) => startTimeMillis.startTimeMillis);
  importDefault = tmp4;
  const tmp5 = callback(first1.useState(() => {
    let num = 0;
    if (null != c1) {
      const _Date = Date;
      num = Date.now() - tmp;
    }
    return num;
  }), 2);
  first = tmp5[0];
  callback = tmp5[1];
  const tmp7 = callback(first1.useState(undefined), 2);
  first1 = tmp7[0];
  closure_5 = tmp7[1];
  const tmp9 = useVoiceMessagesUIStore((savedVoiceMessageUploadData) => null != savedVoiceMessageUploadData.savedVoiceMessageUploadData);
  c6 = tmp9;
  let obj1 = animationValue(first[15]);
  const items = [tmp4, tmp9];
  const token = obj1.useToken(importDefault(first[10]).modules.mobile.VOICE_MESSAGE_DURATION_TEXT_STYLE);
  const effect = first1.useEffect(() => {
    if (c6) {
      callback(outer1_8 + outer1_9);
      callback2(outer1_21.ENDED);
    } else {
      const _setInterval = setInterval;
      const interval = setInterval(() => {
        if (null != closure_1) {
          const _Date = Date;
          const diff = Date.now() - tmp;
          callback(diff);
          if (diff > outer1_10) {
            callback2(outer1_21.REALLY_WARN);
          } else if (diff > outer1_11) {
            callback2(outer1_21.WARN);
          }
        }
      }, 100);
      return () => {
        clearInterval(closure_0);
      };
    }
  }, items);
  const items1 = [first];
  const memo = first1.useMemo(() => animationValue(first[16]).getTimeFormat(first / 1000, { padMinutes: false }), items1);
  const tmp13 = callback(first1.useState(false), 2);
  useVoiceMessagesUIStore = tmp13[1];
  const items2 = [first1];
  const effect1 = first1.useEffect(() => {
    if (null != first1) {
      if (tmp !== outer1_21.ENDED) {
        let num = 1000;
        if (!_undefined.useReducedMotion) {
          let num2 = 250;
          if (tmp === tmp4.WARN) {
            num2 = 500;
          }
          num = num2;
        }
        function flash() {
          outer1_7((arg0) => !arg0);
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
  class B {
    constructor() {
      obj = { opacity: animationValue.get() };
      return obj;
    }
  }
  B.__closure = { animationValue };
  B.__workletHash = 4012974382717;
  B.__initData = closure_22;
  const animatedStyle = animationValue(first[8]).useAnimatedStyle(B);
  obj = { style: items3, children: null };
  items3 = [tmp.durationContainer, animatedStyle];
  const items4 = [tmp.dot, ];
  let tmp19 = null != tmp4;
  if (tmp19) {
    tmp19 = !tmp9;
  }
  let dotDismissed = !tmp19;
  if (!tmp19) {
    dotDismissed = tmp.dotDismissed;
  }
  items4[1] = dotDismissed;
  const items5 = [closure_14(closure_5, { style: items4 }), ];
  obj = { style: tmp.duration, variant: token, color: null, tabularNumbers: true, children: null };
  let str = "text-feedback-critical";
  if (!tmp13[0]) {
    let str2 = "text-overlay-light";
    if (chatInputFloating) {
      str2 = "text-default";
    }
    str = str2;
  }
  obj[2] = str;
  obj[4] = memo;
  items5[1] = closure_14(animationValue(first[17]).Text, obj);
  obj[1] = items5;
  const tmp16Result = closure_15(importDefault(first[8]).View, obj);
  let tmp17Result = tmp16Result;
  if (!chatInputFloating) {
    obj1 = { theme: null, children: null };
    obj1[0] = ThemeTypes.DARK;
    obj1[1] = tmp16Result;
    tmp17Result = tmp17(tmp2(tmp3[18]).ThemeContextProvider, obj1);
  }
  return tmp17Result;
}
let c4 = importAllResult;
({ View: c5, ActivityIndicator } = get_ActivityIndicator);
({ VOICE_RECORDING_MAX_DURATION_MILLIS: metroImportAll, VOICE_RECORDING_MAX_DURATION_OFFSET: c9, VOICE_RECORDING_REALLY_WARN_DURATION_MILLIS: c10, VOICE_RECORDING_WARN_DURATION_MILLIS: unpackModuleId, WAVEFORM_WAVE_MAX_VALUE: closure_12 } = VoiceMessageAnimationState);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let closure_16 = require("module_4146").createAnimatedComponent(ActivityIndicator);
let obj = { container: null, loading: null, dot: null, dotDismissed: null, waveformContainer: null, waveformBar: null, durationContainer: null, duration: null };
obj = { height: "100%", flexDirection: "row", alignItems: "center", paddingVertical: require("Themes").modules.mobile.VOICE_MESSAGE_RECORDING_CONTAINER_PADDING_VERTICAL, paddingHorizontal: require("Themes").modules.mobile.VOICE_MESSAGE_RECORDING_PILL_PADDING_HORIZONTAL, gap: require("Themes").modules.mobile.VOICE_MESSAGE_CHAT_GAP, borderRadius: require("Themes").modules.mobile.VOICE_MESSAGE_RECORDING_PILL_BORDER_RADIUS, backgroundColor: require("Themes").colors.MOBILE_CHATINPUT_BACKGROUND_DEFAULT, borderWidth: require("Themes").modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH, borderColor: require("Themes").colors.MOBILE_CHATINPUT_BORDER_ACTIVE };
obj[0] = obj;
obj[1] = { position: "absolute", left: 12 };
obj[2] = { height: 6, width: 6, backgroundColor: require("Themes").unsafe_rawColors.RED_400, borderRadius: require("Themes").radii.round };
obj[3] = { backgroundColor: "transparent" };
obj[4] = { flex: 1, height: "100%", overflow: "hidden", justifyContent: "flex-end", flexDirection: "row", alignItems: "center" };
createCacheKey = { backgroundColor: require("Themes").colors.MOBILE_VOICE_MESSAGE_RECORDING_WAVEFORM_BAR_BACKGROUND, borderRadius: 1 };
obj[5] = createCacheKey;
let obj1 = { height: 6, width: 6, backgroundColor: require("Themes").unsafe_rawColors.RED_400, borderRadius: require("Themes").radii.round };
obj[6] = { flexDirection: "row", alignItems: "center", gap: 4, marginLeft: require("Themes").modules.mobile.VOICE_MESSAGE_DURATION_MARGIN_LEFT };
set = set.isAndroid();
const mobile = require("Themes").modules.mobile;
let obj4 = { lineHeight: set ? mobile.VOICE_MESSAGE_DURATION_LINE_HEIGHT_ANDROID : mobile.VOICE_MESSAGE_DURATION_LINE_HEIGHT_IOS, textAlignVertical: null };
let str;
if (set.isAndroid()) {
  str = "center";
}
obj4[1] = str;
obj[7] = obj4;
let closure_17 = createCacheKey.createStyles(obj);
let closure_18 = { code: "function VoiceMessageChatTsx1(){const{animatedHeight,animatedWidth,animatedMargin}=this.__closure;return{height:animatedHeight.get(),width:animatedWidth.get(),marginRight:animatedMargin.get()};}" };
let closure_21 = { WARN: 0, [0]: "WARN", REALLY_WARN: 1, [1]: "REALLY_WARN", ENDED: 2, [2]: "ENDED" };
let closure_22 = { code: "function VoiceMessageChatTsx2(){const{animationValue}=this.__closure;return{opacity:animationValue.get()};}" };
let closure_24 = { code: "function VoiceMessageChatTsx3(){const{initialAnimation,isRecording}=this.__closure;return initialAnimation.get()===1&&isRecording;}" };
let closure_25 = { code: "function VoiceMessageChatTsx4(result,previous){const{animationValue,withTiming,Easing,loadingOpacity}=this.__closure;if(result&&result!==previous){animationValue.set(withTiming(1,{easing:Easing.quad,duration:200}));loadingOpacity.set(0);}}" };
let closure_26 = { code: "function VoiceMessageChatTsx5(){const{floating,initialAnimation,backgroundColor}=this.__closure;return{width:floating?'100%':80+20*initialAnimation.get()+\"%\",...(backgroundColor!=null?{backgroundColor:backgroundColor.get()}:{})};}" };
let closure_27 = { code: "function VoiceMessageChatTsx6(){const{loadingOpacity}=this.__closure;return{opacity:loadingOpacity.get()};}" };
let obj3 = { flexDirection: "row", alignItems: "center", gap: 4, marginLeft: require("Themes").modules.mobile.VOICE_MESSAGE_DURATION_MARGIN_LEFT };
let result = set.fileFinishedImporting("modules/voice_messages/native/components/VoiceMessageChat.tsx");

export default importAllResult.memo((isRecording) => {
  let leftAccessory;
  let rightAccessory;
  isRecording = isRecording.isRecording;
  const initialAnimation = isRecording.initialAnimation;
  const backgroundColor = isRecording.backgroundColor;
  let chatInputFloating;
  let sharedValue;
  let sharedValue1;
  ({ leftAccessory, rightAccessory } = isRecording);
  let tmp = callback3();
  let obj = isRecording(backgroundColor[14]);
  chatInputFloating = obj.useMobileVisualRefreshConfig({ location: "voice-message-chat" }).chatInputFloating;
  let obj1 = isRecording(backgroundColor[15]);
  const token = obj1.useToken(initialAnimation(backgroundColor[10]).colors.MOBILE_VOICE_MESSAGE_RECORDING_SPINNER_COLOR);
  sharedValue = isRecording(backgroundColor[8]).useSharedValue(0);
  const items = [sharedValue, isRecording];
  const effect = sharedValue.useEffect(() => {
    if (!timeout) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        let obj = callback(outer1_2[13]);
        obj = { easing: callback(outer1_2[8]).Easing.quad, duration: 200 };
        const result = closure_4.set(obj.withTiming(1, obj));
      }, 1000);
      return () => {
        clearTimeout(closure_0);
      };
    }
  }, items);
  const obj3 = isRecording(backgroundColor[8]);
  sharedValue1 = isRecording(backgroundColor[8]).useSharedValue(0);
  const obj4 = isRecording(backgroundColor[8]);
  class R {
    constructor() {
      tmp = 1 === initialAnimation.get() && isRecording;
      return tmp;
    }
  }
  R.__closure = { initialAnimation, isRecording };
  R.__workletHash = 7599681139161;
  R.__initData = closure_24;
  class A {
    constructor(arg0, arg1) {
      tmp = isRecording;
      if (isRecording) {
        tmp2 = arg1;
        tmp = isRecording !== arg1;
      }
      if (tmp) {
        tmp3 = useEffect;
        tmp4 = isRecording;
        tmp5 = backgroundColor;
        obj = isRecording(backgroundColor[13]);
        obj = { easing: null, duration: 200 };
        obj[0] = isRecording(backgroundColor[8]).Easing.quad;
        num = 1;
        result = useEffect.set(obj.withTiming(1, obj));
        tmp7 = c4;
        num2 = 0;
        result1 = c4.set(0);
      }
      return;
    }
  }
  obj = { animationValue: sharedValue1, withTiming: isRecording(backgroundColor[13]).withTiming, Easing: isRecording(backgroundColor[8]).Easing, loadingOpacity: sharedValue };
  A.__closure = obj;
  A.__workletHash = 7661977794788;
  A.__initData = closure_25;
  const animatedReaction = isRecording(backgroundColor[8]).useAnimatedReaction(R, A);
  const obj5 = isRecording(backgroundColor[8]);
  const fn = function f() {
    let str = "100%";
    if (!chatInputFloating) {
      str = `${80 + 20 * initialAnimation.get()}%`;
    }
    let obj = { width: str };
    if (null != backgroundColor) {
      obj = { backgroundColor: null };
      obj[0] = backgroundColor.get();
    } else {
      obj = {};
    }
    const merged = Object.assign(obj);
    return obj;
  };
  fn.__closure = { floating: chatInputFloating, initialAnimation, backgroundColor };
  fn.__workletHash = 13010440051763;
  fn.__initData = closure_26;
  const animatedStyle = isRecording(backgroundColor[8]).useAnimatedStyle(fn);
  const obj7 = isRecording(backgroundColor[8]);
  class C {
    constructor() {
      obj = { opacity: c4.get() };
      return obj;
    }
  }
  C.__closure = { loadingOpacity: sharedValue };
  C.__workletHash = 17421928475897;
  C.__initData = closure_27;
  const animatedStyle1 = isRecording(backgroundColor[8]).useAnimatedStyle(C);
  obj = { style: items1, children: null };
  items1 = [tmp.container, animatedStyle];
  let tmp10 = null;
  if (!isRecording) {
    obj1 = { style: null, color: null, size: "small" };
    const items2 = [tmp.loading, animatedStyle1];
    obj1[0] = items2;
    obj1[1] = token;
    tmp10 = callback2(closure_16, obj1);
  }
  const items3 = [tmp10, leftAccessory, callback2(Duration, { animationValue: sharedValue1 }), callback2(Waveform, {}), rightAccessory];
  obj[1] = items3;
  return closure_15(initialAnimation(backgroundColor[8]).View, obj);
});