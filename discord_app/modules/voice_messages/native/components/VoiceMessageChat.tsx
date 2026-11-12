// discord_app/modules/voice_messages/native/components/VoiceMessageChat.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _mod1652 from "../../../../../_runtime/metro/01652__.js";
import timing_timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import spring_spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import springPresets from "../../../../design/animation/reanimated/spring/springPresets.tsx";
import utils_TimeUtils from "../../../../utils/native/TimeUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

const require = globalThis.__r;
const module_1652 = _mod1652;

require = fn;
function WaveformBar(value) {
  value = value.value;
  _require = value;
  const tmp = closure_16();
  const sharedValue = require("../../../../../_runtime/metro/01652__.js").useSharedValue(0);
  let obj = require("../../../../../_runtime/metro/01652__.js");
  const sharedValue1 = require("../../../../../_runtime/metro/01652__.js").useSharedValue(0);
  let obj2 = require("../../../../../_runtime/metro/01652__.js");
  const sharedValue2 = require("../../../../../_runtime/metro/01652__.js").useSharedValue(0);
  let obj3 = require("../../../../../_runtime/metro/01652__.js");
  items = [closure_17, sharedValue, sharedValue1, sharedValue2];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp6, tmp7, tmp8, tmp9] = items;
  class VoiceMessageChatTsx1 {
    constructor() {
      size = { height: closure_0.get(), width: closure_1.get(), marginRight: closure_2.get() };
      return size;
    }
  }
  const items1 = [tmp7, tmp8, tmp9];
  VoiceMessageChatTsx1.__closure = items1;
  VoiceMessageChatTsx1.__workletHash = 4154638191769;
  VoiceMessageChatTsx1.__initData = tmp6;
  const items2 = [sharedValue, value];
  const animatedStyle = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(VoiceMessageChatTsx1);
  const effect = noop.useEffect(() => {
    const result = 20 * Math.min(1, (c0 / application_id) * 1.25);
    const bound = Math.max(2, result);
    const result1 = _undefined2.set(spring_spring.withSpring(bound, springPresets.Reanimated3DefaultSpringConfig));
  }, items2);
  const items3 = [sharedValue1, sharedValue2];
  const effect1 = noop.useEffect(() => {
    const obj = timing_timing;
    const result = _undefined3.set(obj.withTiming(2, { duration: 300, easing: _mod1652.Easing.linear }));
    const obj2 = { duration: 300, easing: _mod1652.Easing.linear };
    const obj3 = timing_timing;
    const result1 = sharedValue2.set(obj3.withTiming(4, { duration: 300, easing: _mod1652.Easing.linear }));
  }, items3);
  const obj5 = { style: null };
  const items4 = [tmp.waveformBar, animatedStyle];
  obj5.style = items4;
  return closure_13(module_1652.View, obj5);
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
  let first1;
  noop = undefined;
  const tmp = closure_16();
  const tmp2 = useVoiceMessagesUIStore((startTimeMillis) => startTimeMillis.startTimeMillis);
  _require = tmp2;
  const tmp3 = first1(
    noop.useState(() => {
      let num = 0;
      if (null != c0) {
        const _Date = Date;
        num = Date.now() - tmp;
      }
      return num;
    }),
    2,
  );
  const first = tmp3[0];
  dependencyMap = tmp3[1];
  const tmp5 = first1(noop.useState(undefined), 2);
  first1 = tmp5[0];
  noop = tmp5[1];
  const tmp7 = useVoiceMessagesUIStore(
    (savedVoiceMessageUploadData) => null != savedVoiceMessageUploadData.savedVoiceMessageUploadData,
  );
  closure_5 = tmp7;
  items = [tmp2, tmp7];
  const token = require("useToken").useToken(first(575).modules.mobile.VOICE_MESSAGE_DURATION_TEXT_STYLE);
  const effect = noop.useEffect(() => {
    if (closure_5) {
      closure_2(closure_1_8 + closure_1_9);
      closure_4(constants.ENDED);
    } else {
      const _setInterval = setInterval;
      const interval = setInterval(() => {
        if (null != closure_0) {
          const _Date = Date;
          const diff = Date.now() - tmp;
          closure_1_2(diff);
          if (diff > closure_2_10) {
            closure_1_4(constants.REALLY_WARN);
          } else if (diff > closure_2_11) {
            closure_1_4(constants.WARN);
          }
        }
      }, 100);
      return () => {
        clearInterval(closure_0);
      };
    }
  }, items);
  const items1 = [first];
  const memo = noop.useMemo(() => utils_TimeUtils.getTimeFormat(first / 1000, { padMinutes: false }), items1);
  const tmp14 = first1(noop.useState(false), 2);
  closure_6 = tmp14[1];
  const items2 = [first1];
  const effect1 = noop.useEffect(() => {
    if (null != first1) {
      if (first1 !== constants.ENDED) {
        let num = 1000;
        if (!closure_6.useReducedMotion) {
          let num2 = 250;
          if (first1 === tmp4.WARN) {
            num2 = 500;
          }
          num = num2;
        }
        function flash() {
          closure_6((arg0) => !arg0);
          const timeout = setTimeout(flash, num);
        }
        closure_6((arg0) => !arg0);
        const _setTimeout = setTimeout;
        let timeout = setTimeout(flash, num);
        return () => {
          clearTimeout(closure_0);
        };
      } else {
        closure_6(true);
      }
    } else {
      closure_6(false);
    }
  }, items2);
  const obj = require("useToken");
  const tmp10 = first;
  const tmp8 = _require;
  const items3 = [closure_21, animationValue.animationValue];
  _require = undefined;
  [tmp16, tmp17] = items3;
  class VoiceMessageChatTsx2 {
    constructor() {
      obj = { opacity: closure_0.get() };
      return obj;
    }
  }
  const items4 = [tmp17];
  VoiceMessageChatTsx2.__closure = items4;
  VoiceMessageChatTsx2.__workletHash = 7684903526084;
  VoiceMessageChatTsx2.__initData = tmp16;
  const animatedStyle = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(VoiceMessageChatTsx2);
  const obj3 = { style: null, children: null };
  const items5 = [tmp.durationContainer, animatedStyle];
  obj3.style = items5;
  const items6 = [tmp.dot];
  let tmp22 = null != tmp2;
  if (tmp22) {
    tmp22 = !tmp7;
  }
  let dotDismissed = !tmp22;
  if (!tmp22) {
    dotDismissed = tmp.dotDismissed;
  }
  items6[1] = dotDismissed;
  const items7 = [closure_13(closure_5, { style: items6 })];
  const obj4 = { style: tmp.duration, variant: token, color: null, tabularNumbers: true, children: null };
  let str = "text-default";
  if (tmp14[0]) {
    str = "text-feedback-critical";
  }
  obj4.color = str;
  obj4.children = memo;
  items7[1] = closure_13(tmp8(5866).Text, obj4);
  obj3.children = items7;
  return closure_14(tmp10(1652).View, obj3);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ActivityIndicator } = get_ActivityIndicator);
const useVoiceMessagesUIStore = fn(14458).useVoiceMessagesUIStore;
const VoiceMessageConstants = fn(14459);
({
  VOICE_RECORDING_MAX_DURATION_MILLIS: closure_8,
  VOICE_RECORDING_MAX_DURATION_OFFSET: closure_9,
  VOICE_RECORDING_REALLY_WARN_DURATION_MILLIS: closure_10,
  VOICE_RECORDING_WARN_DURATION_MILLIS: closure_11,
  WAVEFORM_WAVE_MAX_VALUE: closure_12,
} = VoiceMessageConstants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
let closure_15 = module_1652.createAnimatedComponent(ActivityIndicator);
const createStyles = fn(5243);
let obj = {
  container: {
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
  },
  loading: { position: "absolute", left: 12 },
  dot: null,
  dotDismissed: null,
  waveformContainer: null,
  waveformBar: null,
  durationContainer: null,
  duration: null,
};
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
let obj2 = {
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
obj.waveformBar = {
  backgroundColor: nativeDefault.colors.MOBILE_VOICE_MESSAGE_RECORDING_WAVEFORM_BAR_BACKGROUND,
  borderRadius: 1,
};
let obj4 = {
  backgroundColor: nativeDefault.colors.MOBILE_VOICE_MESSAGE_RECORDING_WAVEFORM_BAR_BACKGROUND,
  borderRadius: 1,
};
obj.durationContainer = {
  flexDirection: "row",
  alignItems: "center",
  gap: 4,
  marginLeft: nativeDefault.modules.mobile.VOICE_MESSAGE_DURATION_MARGIN_LEFT,
};
let PlatformUtils = fn(1377);
PlatformUtils = PlatformUtils.isAndroid();
const mobile = nativeDefault.modules.mobile;
let obj6 = {
  lineHeight: PlatformUtils
    ? mobile.VOICE_MESSAGE_DURATION_LINE_HEIGHT_ANDROID
    : mobile.VOICE_MESSAGE_DURATION_LINE_HEIGHT_IOS,
  textAlignVertical: null,
};
PlatformUtils = fn(1377);
let str;
if (PlatformUtils.isAndroid()) {
  str = "center";
}
obj6.textAlignVertical = str;
obj.duration = obj6;
let closure_16 = createStyles.createStyles(obj);
let closure_17 = {
  code: "(function VoiceMessageChatTsx1(){let[animatedHeight,animatedWidth,animatedMargin]=this.__closure;return{height:animatedHeight.get(),width:animatedWidth.get(),marginRight:animatedMargin.get()};})",
};
let closure_20 = { WARN: 0, [0]: "WARN", REALLY_WARN: 1, [1]: "REALLY_WARN", ENDED: 2, [2]: "ENDED" };
let closure_21 = {
  code: "(function VoiceMessageChatTsx2(){let[animationValue]=this.__closure;return{opacity:animationValue.get()};})",
};
let closure_23 = {
  code: "(function VoiceMessageChatTsx3(){let[initialAnimation,isRecording]=this.__closure;return initialAnimation.get()===1&&isRecording;})",
};
let closure_24 = {
  code: "(function VoiceMessageChatTsx4(result,previous){let[animationValue,withTiming,Easing,loadingOpacity]=this.__closure;if(result&&result!==previous){animationValue.set(withTiming(1,{easing:Easing.quad,duration:200}));loadingOpacity.set(0);}})",
};
let closure_25 = {
  code: "(function VoiceMessageChatTsx5(){let[backgroundColor]=this.__closure;return{width:'100%',...(backgroundColor!=null?{backgroundColor:backgroundColor.get()}:{})};})",
};
let closure_26 = {
  code: "(function VoiceMessageChatTsx6(){let[loadingOpacity]=this.__closure;return{opacity:loadingOpacity.get()};})",
};
let obj5 = {
  flexDirection: "row",
  alignItems: "center",
  gap: 4,
  marginLeft: nativeDefault.modules.mobile.VOICE_MESSAGE_DURATION_MARGIN_LEFT,
};
size = fn(2);
let result = size.fileFinishedImporting("modules/voice_messages/native/components/VoiceMessageChat.tsx");

export default noop.memo(function VoiceMessageChat(isRecording) {
  isRecording = isRecording.isRecording;
  _require = isRecording;
  importDefault = undefined;
  ({ initialAnimation, backgroundColor, leftAccessory, rightAccessory } = isRecording);
  let tmp = closure_16();
  const token = require("useToken").useToken(nativeDefault.colors.MOBILE_VOICE_MESSAGE_RECORDING_SPINNER_COLOR);
  let obj = require("useToken");
  const sharedValue = require("../../../../../_runtime/metro/01652__.js").useSharedValue(0);
  items = [sharedValue, isRecording];
  const effect = noop.useEffect(() => {
    if (!timeout) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        const obj = c0(5485);
        const result = _undefined2.set(obj.withTiming(1, { easing: c0(1652).Easing.quad, duration: 200 }));
      }, 1000);
      return () => {
        clearTimeout(closure_0);
      };
    }
  }, items);
  let obj2 = require("../../../../../_runtime/metro/01652__.js");
  const sharedValue1 = require("../../../../../_runtime/metro/01652__.js").useSharedValue(0);
  let obj3 = require("../../../../../_runtime/metro/01652__.js");
  const items1 = [closure_23, initialAnimation, isRecording];
  _require = undefined;
  importDefault = undefined;
  [tmp9, tmp10, tmp11] = items1;
  class VoiceMessageChatTsx3 {
    constructor() {
      tmp = 1 === closure_0.get() && closure_1;
      return tmp;
    }
  }
  const items2 = [tmp10, tmp11];
  VoiceMessageChatTsx3.__closure = items2;
  VoiceMessageChatTsx3.__workletHash = 4127950941280;
  VoiceMessageChatTsx3.__initData = tmp9;
  const items3 = [
    closure_24,
    sharedValue1,
    require("timing/timing").withTiming,
    require("../../../../../_runtime/metro/01652__.js").Easing,
    sharedValue,
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  [tmp12, tmp13, tmp14, tmp15, tmp16] = items3;
  class VoiceMessageChatTsx4 {
    constructor(arg0, arg1) {
      tmp = isRecording;
      if (isRecording) {
        tmp2 = arg1;
        tmp = isRecording !== arg1;
      }
      if (tmp) {
        tmp3 = closure_0;
        tmp4 = closure_1;
        obj = { easing: null, duration: 200 };
        tmp5 = closure_2;
        obj.easing = closure_2.quad;
        num = 1;
        result = closure_0.set(closure_1(1, obj));
        tmp7 = closure_3;
        num2 = 0;
        result1 = closure_3.set(0);
      }
      return;
    }
  }
  const items4 = [tmp13, tmp14, tmp15, tmp16];
  VoiceMessageChatTsx4.__closure = items4;
  VoiceMessageChatTsx4.__workletHash = 6644508258045;
  VoiceMessageChatTsx4.__initData = tmp12;
  const animatedReaction = require("../../../../../_runtime/metro/01652__.js").useAnimatedReaction(
    VoiceMessageChatTsx3,
    VoiceMessageChatTsx4,
  );
  const obj4 = require("../../../../../_runtime/metro/01652__.js");
  const items5 = [closure_25, backgroundColor];
  _require = undefined;
  [tmp18, tmp19] = items5;
  class VoiceMessageChatTsx5 {
    constructor() {
      obj = closure_0;
      if (null != closure_0) {
        obj1 = { backgroundColor: null };
        obj1.backgroundColor = obj.get();
        obj5 = obj1;
      } else {
        obj5 = {};
      }
      obj6 = { width: "100%" };
      merged = Object.assign(obj5);
      return obj6;
    }
  }
  const items6 = [tmp19];
  VoiceMessageChatTsx5.__closure = items6;
  VoiceMessageChatTsx5.__workletHash = 14070656036467;
  VoiceMessageChatTsx5.__initData = tmp18;
  const animatedStyle = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(VoiceMessageChatTsx5);
  const tmp2Result = require("../../../../../_runtime/metro/01652__.js");
  const items7 = [closure_26, sharedValue];
  _require = undefined;
  [tmp21, tmp22] = items7;
  class VoiceMessageChatTsx6 {
    constructor() {
      obj = { opacity: closure_0.get() };
      return obj;
    }
  }
  const items8 = [tmp22];
  VoiceMessageChatTsx6.__closure = items8;
  VoiceMessageChatTsx6.__workletHash = 5849307603008;
  VoiceMessageChatTsx6.__initData = tmp21;
  const animatedStyle1 = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(VoiceMessageChatTsx6);
  const obj5 = { style: null, children: null };
  const items9 = [tmp.container, animatedStyle];
  obj5.style = items9;
  let tmp25 = null;
  if (!isRecording) {
    const obj6 = { style: null, color: null, size: "small" };
    const items10 = [tmp.loading, animatedStyle1];
    obj6.style = items10;
    obj6.color = token;
    tmp25 = closure_13(closure_15, obj6);
  }
  const items11 = [
    tmp25,
    leftAccessory,
    closure_13(Duration, { animationValue: sharedValue1 }),
    closure_13(Waveform, {}),
    rightAccessory,
  ];
  obj5.children = items11;
  return closure_14(module_1652.View, obj5);
});
