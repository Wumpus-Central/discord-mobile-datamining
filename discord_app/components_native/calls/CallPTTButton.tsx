// discord_app/components_native/calls/CallPTTButton.tsx
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import useCanSpeakInChannelDefault from "../../modules/stage_channels/useCanSpeakInChannel.tsx";
import MediaEngineActionCreators from "../../modules/media_engine/MediaEngineActionCreators.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";
import ChannelStore from "../../stores/ChannelStore.tsx";
import MediaEngineStore from "../../stores/MediaEngineStore.tsx";
import RTCConnectionStore from "../../stores/RTCConnectionStore.tsx";

const require = globalThis.__r;

const _modDef1652 = View(1652);
require = fn;
const InputModes = fn(1072).InputModes;
const jsx = fn(21).jsx;
const CallPTTButtonLooks = { BRAND: "brand", BLUR: "blur" };
const createStyles = fn(5142);
let obj2 = {
  button: { margin: 13 },
  container: null,
  buttonBlur: null,
  buttonBlurPressed: null,
  textStyle: null,
  brandButtonContainer: null,
};
let obj4 = { borderRadius: nativeDefault.radii.xs, overflow: "hidden", backgroundColor: null };
let ColorUtils = fn(5139);
obj4.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.WHITE, 0.24);
obj2.container = obj4;
obj2.buttonBlur = { backgroundColor: "transparent" };
const obj5 = { backgroundColor: null };
ColorUtils = fn(5139);
obj5.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BLACK, 0.6);
obj2.buttonBlurPressed = obj5;
obj2.textStyle = { fontSize: 16 };
obj2.brandButtonContainer = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_11 = createStyles.createStyles(obj2);
let closure_12 = {
  code: "(function CallPTTButtonTsx1(){let[scheduleOnRN,setDragging,setPressed,setIsSwipeToChatDisabled]=this.__closure;scheduleOnRN(setDragging,true);scheduleOnRN(setPressed,false);if(setIsSwipeToChatDisabled!=null){scheduleOnRN(setIsSwipeToChatDisabled,false);}})",
};
let closure_13 = {
  code: "(function CallPTTButtonTsx2(){let[scheduleOnRN,setDragging]=this.__closure;scheduleOnRN(setDragging,false);})",
};
let obj7 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
const size = fn(2);
const result = size.fileFinishedImporting("components_native/calls/CallPTTButton.tsx");

export default noop.memo((look) => {
  let BRAND = look.look;
  if (BRAND === undefined) {
    BRAND = obj.BRAND;
  }
  ({ style, sendCallback } = look);
  _require = sendCallback;
  importDefault = stopCallback;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  let first1;
  let mode;
  let ref;
  let prop;
  let string = closure_11();
  let handleStartSend = dependencyMap;
  obj = require("initialize");
  items = [mode];
  const stateFromStores = obj.useStateFromStores(items, () => mode.getMode());
  const items1 = [ref];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => ref.getChannelId());
  dependencyMap = stateFromStores1;
  const obj2 = require("initialize");
  const items2 = [first1];
  const items3 = [stateFromStores1];
  const stateFromStores2 = require("initialize").useStateFromStores(items2, () => ChannelStore.getChannel(c2), items3);
  let View = importDefault;
  const obj3 = require("initialize");
  const tmp6 = _slicedToArray(noop.useState(false), 2);
  const first = tmp6[0];
  _slicedToArray = first;
  noop = tmp8;
  const tmp9 = _slicedToArray(noop.useState(false), 2);
  first1 = tmp9[0];
  mode = tmp11;
  let isGuildStageVoiceResult;
  if (stateFromStores2 != null) {
    isGuildStageVoiceResult = stateFromStores2.isGuildStageVoice();
  }
  if (isGuildStageVoiceResult) {
    isGuildStageVoiceResult = !tmp5;
  }
  ref = obj5.useRef(false);
  tmp5 = useCanSpeakInChannelDefault(stateFromStores1);
  const voiceChatNavigationContext = require("VoiceChatModalContext").useVoiceChatNavigationContext();
  prop = undefined;
  if (voiceChatNavigationContext != null) {
    prop = voiceChatNavigationContext.setIsSwipeToChatDisabled;
  }
  const items4 = [ref, first, first1, sendCallback, look.stopCallback];
  const effect = obj5.useEffect(() => {
    let tmp = c3;
    if (!c3) {
      tmp = first1;
    }
    if (tmp !== ref.current) {
      MediaEngineActionCreators.setPushToTalkState(MediaEngineStore.getMediaEngine(), tmp);
      if (tmp) {
        if (_undefined != null) {
          _undefined();
        }
      } else if (_undefined2 != null) {
        _undefined2();
      }
    }
    ref.current = tmp;
  }, items4);
  const Gesture = tmp2(5422).Gesture;
  const tmp2Result = require("VoiceChatModalContext");
  const items5 = [closure_12, require("../../../_runtime/metro/01705__.js").scheduleOnRN, tmp9[1], tmp6[1], prop];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  [tmp17, tmp18, tmp19, tmp20, tmp21] = items5;
  class CallPTTButtonTsx1 {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_0(closure_1, true);
      tmp3 = closure_0(closure_2, false);
      if (null != closure_3) {
        tmpResult = tmp(closure_3, false);
      }
      return;
    }
  }
  const items6 = [tmp18, tmp19, tmp20, tmp21];
  CallPTTButtonTsx1.__closure = items6;
  CallPTTButtonTsx1.__workletHash = 7400317648187;
  CallPTTButtonTsx1.__initData = tmp17;
  const PanResult = Gesture.Pan();
  const items7 = [closure_13, require("../../../_runtime/metro/01705__.js").scheduleOnRN, tmp9[1]];
  _require = undefined;
  importDefault = undefined;
  [tmp22, tmp23, tmp24] = items7;
  class CallPTTButtonTsx2 {
    constructor() {
      tmp = closure_0(closure_1, false);
      return;
    }
  }
  const items8 = [tmp23, tmp24];
  CallPTTButtonTsx2.__closure = items8;
  CallPTTButtonTsx2.__workletHash = 9346672580777;
  CallPTTButtonTsx2.__initData = tmp22;
  let onEndResult = Gesture.Pan().onStart(CallPTTButtonTsx1).onEnd(CallPTTButtonTsx2);
  let tmp26 = null;
  if (null != stateFromStores1) {
    tmp26 = null;
    if (prop.VOICE_ACTIVITY !== stateFromStores) {
      tmp26 = null;
      if (!isGuildStageVoiceResult) {
        if (BRAND === obj.BRAND) {
          const items9 = [string.brandButtonContainer];
          const items10 = [string.button, style];
          let buttonBlurPressed = items10;
          let items11 = items9;
        } else {
          items11 = [, ,];
          ({ button: arr10[0], container: arr10[1] } = string);
          items11[2] = style;
          if (!first) {
            if (!first1) {
              buttonBlurPressed = string.buttonBlur;
            }
          }
          buttonBlurPressed = string.buttonBlurPressed;
        }
        const obj4 = { gesture: onEndResult, children: null };
        View = _modDef1652.View;
        const obj6 = { style: items11, children: null };
        style = tmp2(1187).Button;
        const obj7 = {
          style: buttonBlurPressed,
          textStyle: string.textStyle,
          text: null,
          onTouchStart: null,
          onTouchEnd: null,
          darkenOnPress: true,
        };
        const intl = tmp2(1113).intl;
        string = intl.string;
        obj7.text = string(tmp2(1113).t.Q8gkVL);
        handleStartSend = function handleStartSend() {
          closure_4(true);
          mode(false);
          if (prop != null) {
            prop(true);
          }
        };
        obj7.onTouchStart = handleStartSend;
        obj7.onTouchEnd = function handleStopSend() {
          closure_4(false);
          if (prop != null) {
            prop(false);
          }
        };
        obj6.children = (
          <style
            style={buttonBlurPressed}
            textStyle={string.textStyle}
            text={null}
            onTouchStart={null}
            onTouchEnd={null}
            darkenOnPress
          />
        );
        onEndResult = <View style={items11}>{null}</View>;
        obj4.children = onEndResult;
        jsx(tmp2(5422).GestureDetector, { gesture: onEndResult, children: null });
      }
    }
  }
  return tmp26;
});
export { CallPTTButtonLooks };
