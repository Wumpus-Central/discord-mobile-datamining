// discord_app/modules/voice_messages/native/components/VoiceMessageOverlay.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ComponentDispatchUtils from "../../../../utils/ComponentDispatchUtils.tsx";
import util from "../../../../intl/index.native.tsx";
import _mod1652 from "../../../../../_runtime/metro/01652__.js";
import timing_timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import useIsScreenReaderEnabled from "../../../a11y/native/useIsScreenReaderEnabled.native.tsx";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import useSafeAreaInsetsKeyboardAwareDefault from "../../../safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";
import _modDef5978 from "../../../../../_runtime/metro/05978__.js";
import setAccessibilityFocus from "../../../a11y/native/setAccessibilityFocus.android.tsx";
import LegacyTokens from "../../../../design/migrations/native/LegacyTokens.tsx";
import useRefValueDefault from "../../../../hooks/useRefValue.tsx";
import useKeyboardAnimatedValueDefault from "../../../keyboard/native/useKeyboardAnimatedValue.tsx";
import inlineStyles from "../../../../../_runtime/08197_inlineStyles.js";
import ChatInputActionButtonDefault from "../../../chat_input/native/action_buttons/ChatInputActionButton.tsx";
import _modDef14859 from "../../../../../_runtime/metro/14859__.js";
import VoiceMessageChatDefault from "VoiceMessageChat.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import apply from "../../../../../_runtime/00012_apply.js";

const module_1652_mod = _mod1652;

require = fn;
function useDerivedColors(voiceMessageAnimationState, token, RED_400, token2, token3) {
  items = [
    closure_27,
    voiceMessageAnimationState,
    require("timing/timing").withTiming,
    require("../../../../../_runtime/metro/01652__.js").Easing,
  ];
  _require = undefined;
  c1 = undefined;
  dependencyMap = undefined;
  [tmp3, tmp4, tmp5, tmp6] = items;
  class VoiceMessageOverlayTsx6 {
    constructor() {
      obj = { easing: closure_2.linear, duration: 150 };
      return closure_1(closure_0.get()[1], obj);
    }
  }
  let items1 = [tmp4, tmp5, tmp6];
  VoiceMessageOverlayTsx6.__closure = items1;
  VoiceMessageOverlayTsx6.__workletHash = 1937850946684;
  VoiceMessageOverlayTsx6.__initData = tmp3;
  const derivedValue = require("../../../../../_runtime/metro/01652__.js").useDerivedValue(VoiceMessageOverlayTsx6);
  const obj = require("../../../../../_runtime/metro/01652__.js");
  const items2 = [
    closure_28,
    voiceMessageAnimationState,
    token,
    token2,
    token3,
    RED_400,
    require("../../../../../_runtime/metro/01652__.js").interpolateColor,
    derivedValue,
    items,
  ];
  _require = undefined;
  c1 = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16] = items2;
  class VoiceMessageOverlayTsx7 {
    constructor() {
      tmp = closure_3(closure_0.get(), 2);
      if (tmp[0] + tmp[1] === 2) {
        tmp6 = closure_1;
        items = [, , ,];
        items[0] = closure_1;
        items[1] = closure_1;
        tmp7 = closure_2;
        items[2] = closure_2;
        tmp8 = closure_3;
        items[3] = closure_3;
        items1 = items;
      } else {
        tmp2 = closure_1;
        items1 = [, , ,];
        items1[0] = closure_1;
        tmp3 = closure_4;
        items1[1] = closure_4;
        tmp4 = closure_2;
        items1[2] = closure_2;
        tmp5 = closure_3;
        items1[3] = closure_3;
      }
      return closure_5(closure_6.get(), closure_7, items1);
    }
  }
  const items3 = [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16];
  VoiceMessageOverlayTsx7.__closure = items3;
  VoiceMessageOverlayTsx7.__workletHash = 10731604101373;
  VoiceMessageOverlayTsx7.__initData = tmp8;
  return require("../../../../../_runtime/metro/01652__.js").useDerivedValue(VoiceMessageOverlayTsx7);
}
function LockPill(voiceMessageAnimationState) {
  voiceMessageAnimationState = voiceMessageAnimationState.voiceMessageAnimationState;
  ({ safeAreaBottom, initialAnimation } = voiceMessageAnimationState);
  let tmp = closure_19();
  [tmp3, tmp4] = noop.useState(false);
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  items = [closure_36, voiceMessageAnimationState, VoiceMessageAnimationState];
  _require = undefined;
  importDefault = undefined;
  [tmp7, tmp8, tmp9] = items;
  class VoiceMessageOverlayTsx14 {
    constructor() {
      obj = closure_0;
      tmp2 = closure_0.get()[1] === closure_1.LOCKED || obj.get()[1] === tmp.LOCKING;
      return tmp2;
    }
  }
  let items1 = [tmp8, tmp9];
  VoiceMessageOverlayTsx14.__closure = items1;
  VoiceMessageOverlayTsx14.__workletHash = 6639518721222;
  VoiceMessageOverlayTsx14.__initData = tmp7;
  let items2 = [closure_37, require("../../../../../_runtime/metro/01705__.js").scheduleOnRN, tmp4];
  _require = undefined;
  importDefault = undefined;
  [tmp10, tmp11, tmp12] = items2;
  class VoiceMessageOverlayTsx15 {
    constructor(arg0, arg1) {
      if (voiceMessageAnimationState !== arg1) {
        tmp = closure_0;
        tmp2 = closure_1;
        tmp3 = closure_0(closure_1, voiceMessageAnimationState);
      }
      return;
    }
  }
  const items3 = [tmp11, tmp12];
  VoiceMessageOverlayTsx15.__closure = items3;
  VoiceMessageOverlayTsx15.__workletHash = 17511119327213;
  VoiceMessageOverlayTsx15.__initData = tmp10;
  const animatedReaction = require("../../../../../_runtime/metro/01652__.js").useAnimatedReaction(
    VoiceMessageOverlayTsx14,
    VoiceMessageOverlayTsx15,
  );
  let obj = require("../../../../../_runtime/metro/01652__.js");
  const token = require("useToken").useToken(
    nativeDefault.colors.MOBILE_VOICE_MESSAGE_RECORDING_LOCK_BACKGROUND_DEFAULT,
  );
  const tmp5Result = require("useToken");
  const token1 = require("useToken").useToken(
    nativeDefault.colors.MOBILE_VOICE_MESSAGE_RECORDING_LOCK_BACKGROUND_ACTIVE,
  );
  const tmp5Result12 = require("useToken");
  const tmp17 = useDerivedColors(voiceMessageAnimationState, token, token, token1, token1);
  const token2 = require("useToken").useToken(nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_LOCK_PILL_WIDTH);
  const tmp5Result13 = require("useToken");
  const token3 = require("useToken").useToken(nativeDefault.colors.MOBILE_VOICE_MESSAGE_RECORDING_LOCK_ICON_DEFAULT);
  const tmp5Result14 = require("useToken");
  const token4 = require("useToken").useToken(nativeDefault.colors.MOBILE_VOICE_MESSAGE_RECORDING_LOCK_ICON_ACTIVE);
  const tmp5Result15 = require("useToken");
  const tmp21 = useDerivedColors(voiceMessageAnimationState, token3, token3, token4, token4);
  const items4 = [
    closure_30,
    voiceMessageAnimationState,
    require("timing/timing").withTiming,
    require("../../../../../_runtime/metro/01652__.js").Easing,
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp22, tmp23, tmp24, tmp25] = items4;
  class VoiceMessageOverlayTsx8 {
    constructor() {
      obj = { easing: closure_2.linear, duration: 150 };
      return closure_1(closure_0.get()[1], obj);
    }
  }
  const items5 = [tmp23, tmp24, tmp25];
  VoiceMessageOverlayTsx8.__closure = items5;
  VoiceMessageOverlayTsx8.__workletHash = 13445838226418;
  VoiceMessageOverlayTsx8.__initData = tmp22;
  const derivedValue = require("../../../../../_runtime/metro/01652__.js").useDerivedValue(VoiceMessageOverlayTsx8);
  const tmp5Result16 = require("../../../../../_runtime/metro/01652__.js");
  const items6 = [
    closure_31,
    voiceMessageAnimationState,
    require("../../../../../_runtime/metro/01652__.js").interpolate,
    derivedValue,
    items,
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  [tmp28, tmp29, tmp30, tmp31, tmp32] = items6;
  class VoiceMessageOverlayTsx9 {
    constructor() {
      tmp = closure_3(closure_0.get(), 2);
      tmp2 = tmp[0] + tmp[1] === 2 ? [1, 1, 1, 0] : [1, 0, 1, 0];
      return closure_1(closure_2.get(), closure_3, tmp2);
    }
  }
  const items7 = [tmp29, tmp30, tmp31, tmp32];
  VoiceMessageOverlayTsx9.__closure = items7;
  VoiceMessageOverlayTsx9.__workletHash = 13136470989075;
  VoiceMessageOverlayTsx9.__initData = tmp28;
  const derivedValue1 = require("../../../../../_runtime/metro/01652__.js").useDerivedValue(VoiceMessageOverlayTsx9);
  const tmp5Result17 = require("../../../../../_runtime/metro/01652__.js");
  const items8 = [closure_32, require("../../../../../_runtime/metro/01652__.js").interpolate, derivedValue, items, 68];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  [tmp34, tmp35, tmp36, tmp37, tmp38] = items8;
  class VoiceMessageOverlayTsx10 {
    constructor() {
      obj = { height: null };
      items = [, , ,];
      items[0] = closure_3;
      items[1] = closure_3;
      items[2] = 104;
      items[3] = 104;
      obj.height = closure_0(closure_1.get(), closure_2, items);
      return obj;
    }
  }
  const items9 = [tmp35, tmp36, tmp37, tmp38];
  VoiceMessageOverlayTsx10.__closure = items9;
  VoiceMessageOverlayTsx10.__workletHash = 2807894586864;
  VoiceMessageOverlayTsx10.__initData = tmp34;
  const animatedStyle = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(VoiceMessageOverlayTsx10);
  const tmp5Result18 = require("../../../../../_runtime/metro/01652__.js");
  const items10 = [
    closure_33,
    require("../../../../../_runtime/metro/01652__.js").interpolate,
    derivedValue,
    items,
    token2,
    56,
    68,
    derivedValue1,
    tmp17,
    -56 - token2 / 2,
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  [tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49] = items10;
  class VoiceMessageOverlayTsx11 {
    constructor() {
      size = {
        width: null,
        height: null,
        opacity: closure_6.get(),
        backgroundColor: closure_7.get(),
        marginHorizontal: null,
        marginBottom: closure_0(closure_1.get(), closure_2, [0, 0, 36, 36]),
      };
      items = [, , ,];
      items[0] = closure_3;
      items[1] = closure_3;
      items[2] = closure_4;
      items[3] = closure_4;
      size.width = closure_0(closure_1.get(), closure_2, items);
      items1 = [, , ,];
      items1[0] = closure_5;
      items1[1] = closure_5;
      items1[2] = closure_4;
      items1[3] = closure_4;
      size.height = closure_0(closure_1.get(), closure_2, items1);
      items2 = [0, 0];
      items2[2] = closure_8;
      items2[3] = closure_8;
      size.marginHorizontal = closure_0(closure_1.get(), closure_2, items2);
      return size;
    }
  }
  const items11 = [tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49];
  VoiceMessageOverlayTsx11.__closure = items11;
  VoiceMessageOverlayTsx11.__workletHash = 2634943908675;
  VoiceMessageOverlayTsx11.__initData = tmp40;
  const animatedStyle1 = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(VoiceMessageOverlayTsx11);
  const tmp5Result19 = require("../../../../../_runtime/metro/01652__.js");
  const items12 = [
    closure_34,
    require("../../../../../_runtime/metro/01652__.js").interpolate,
    derivedValue,
    items,
    tmp21,
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  [tmp51, tmp52, tmp53, tmp54, tmp55] = items12;
  class VoiceMessageOverlayTsx12 {
    constructor() {
      size = {
        width: closure_0(closure_1.get(), closure_2, [24, 24, 32, 32]),
        height: closure_0(closure_1.get(), closure_2, [24, 24, 32, 32]),
        marginTop: closure_0(closure_1.get(), closure_2, [12, 12, 10, 10]),
        tintColor: closure_3.get(),
      };
      return size;
    }
  }
  const items13 = [tmp52, tmp53, tmp54, tmp55];
  VoiceMessageOverlayTsx12.__closure = items13;
  VoiceMessageOverlayTsx12.__workletHash = 9845319037974;
  VoiceMessageOverlayTsx12.__initData = tmp51;
  const animatedStyle2 = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(VoiceMessageOverlayTsx12);
  const tmp5Result20 = require("../../../../../_runtime/metro/01652__.js");
  const items14 = [closure_35, require("../../../../../_runtime/metro/01652__.js").interpolate, derivedValue, items];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp57, tmp58, tmp59, tmp60] = items14;
  class VoiceMessageOverlayTsx13 {
    constructor() {
      obj = { opacity: closure_0(closure_1.get(), closure_2, [1, 1, 0, 0]) };
      return obj;
    }
  }
  const items15 = [tmp58, tmp59, tmp60];
  VoiceMessageOverlayTsx13.__closure = items15;
  VoiceMessageOverlayTsx13.__workletHash = 15177392803931;
  VoiceMessageOverlayTsx13.__initData = tmp57;
  const animatedStyle3 = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(VoiceMessageOverlayTsx13);
  const tmp5Result21 = require("../../../../../_runtime/metro/01652__.js");
  const tmp14Result = importDefault(tmp3 ? 8001 : 11089);
  const tmp63 = useKeyboardAnimatedValueDefault(safeAreaBottom);
  const items16 = [closure_38, initialAnimation, tmp63, CHAT_INPUT_HEIGHT, 32, 8];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  [tmp64, tmp65, tmp66, tmp67, tmp68, tmp69] = items16;
  class VoiceMessageOverlayTsx16 {
    constructor() {
      obj = { opacity: closure_0.get(), bottom: null };
      sum = closure_1.get() + closure_2 + (closure_3 - closure_4);
      obj.bottom = sum + closure_4 * closure_0.get();
      return obj;
    }
  }
  const items17 = [tmp65, tmp66, tmp67, tmp68, tmp69];
  VoiceMessageOverlayTsx16.__closure = items17;
  VoiceMessageOverlayTsx16.__workletHash = 5009342521000;
  VoiceMessageOverlayTsx16.__initData = tmp64;
  const animatedStyle4 = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(VoiceMessageOverlayTsx16);
  const obj2 = { style: null, children: null };
  const items18 = [tmp.lockParentContainer, animatedStyle, animatedStyle4];
  obj2.style = items18;
  const obj3 = { style: null, children: null };
  const items19 = [tmp.lockContainer, animatedStyle1];
  obj3.style = items19;
  const items20 = [closure_13(closure_16, { style: animatedStyle2, source: tmp14Result })];
  const obj4 = { style: null, source: _modDef14859 };
  const items21 = [tmp.chevon, animatedStyle3];
  obj4.style = items21;
  items20[1] = closure_13(closure_16, obj4);
  obj3.children = items20;
  obj2.children = closure_14(module_1652.View, obj3);
  return closure_13(module_1652.View, obj2);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, AppState: closure_6 } = get_ActivityIndicator);
const useVoiceMessagesUIStore = fn(14462).useVoiceMessagesUIStore;
const VoiceMessageAnimationState = fn(14463).VoiceMessageAnimationState;
const ComponentActionsKeyed = fn(1072).ComponentActionsKeyed;
const CHAT_INPUT_HEIGHT = fn(13703).CHAT_INPUT_HEIGHT;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = jsxProd);
let module_1652 = module_1652_mod;
let closure_16 = module_1652.createAnimatedComponent(fn(1187).Icon);
let module_1652 = module_1652_mod;
let closure_17 = module_1652.createAnimatedComponent(fn(5866).Text);
let closure_18 = apply.memoize(() => module_1652.createAnimatedComponent(inlineStyles.Ellipse));
const createStyles = fn(5243);
let closure_19 = createStyles.createStyles(() => {
  const obj = {
    innerContainer: {
      flexDirection: "row",
      alignItems: "flex-end",
      paddingTop: 8,
      paddingHorizontal: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_CONTAINER_PADDING_HORIZONTAL,
      paddingBottom: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_CONTAINER_PADDING_BOTTOM,
    },
    contentContainer: { position: "absolute", bottom: 0, width: "100%", alignItems: "center", overflow: "hidden" },
    contentContainerFloating: { justifyContent: "flex-end", overflow: "visible" },
    floatingSendButton: null,
    floatingSendButtonActive: null,
    floatingSendButtonIconActive: null,
    voiceChatContainer: null,
    lockContainer: null,
    lockParentContainer: null,
    chevon: null,
  };
  const size = {
    width: nativeDefault.modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH,
    height: nativeDefault.modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT,
  };
  obj.floatingSendButton = size;
  const obj2 = {
    flexDirection: "row",
    alignItems: "flex-end",
    paddingTop: 8,
    paddingHorizontal: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_CONTAINER_PADDING_HORIZONTAL,
    paddingBottom: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_CONTAINER_PADDING_BOTTOM,
  };
  obj.floatingSendButtonActive = { backgroundColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ACTIVE_BACKGROUND };
  const obj3 = { backgroundColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ACTIVE_BACKGROUND };
  obj.floatingSendButtonIconActive = { tintColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ICON_ACTIVE_TINT };
  const obj4 = { tintColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ICON_ACTIVE_TINT };
  obj.voiceChatContainer = {
    flex: 1,
    height: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_CHAT_CONTAINER_HEIGHT,
    marginRight: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_CHAT_CONTAINER_MARGIN_RIGHT,
    alignItems: "flex-end",
  };
  const size1 = {
    height: 68,
    width: 56,
    borderRadius: nativeDefault.modules.button.BORDER_RADIUS,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    elevation: 12,
    shadowColor: nativeDefault.colors.BLACK,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.12,
    shadowRadius: 36,
    borderWidth: LegacyTokens.DARK_0_LIGHT_1,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.08)",
  };
  obj.lockContainer = size1;
  const obj5 = {
    flex: 1,
    height: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_CHAT_CONTAINER_HEIGHT,
    marginRight: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_CHAT_CONTAINER_MARGIN_RIGHT,
    alignItems: "flex-end",
  };
  obj.lockParentContainer = {
    position: "absolute",
    right: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_LOCK_PILL_OFFSET_RIGHT,
    width: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_LOCK_PILL_WIDTH,
  };
  const size2 = { height: 16, width: 16, marginTop: 8, tintColor: nativeDefault.colors.ICON_SUBTLE };
  obj.chevon = size2;
  return obj;
});
let items = [, , ,];
({ SENDING: arr[0], CANCELLING: arr[1], LOCKING: arr[2], LOCKED: arr[3] } = VoiceMessageAnimationState);
let closure_21 = {
  code: "(function VoiceMessageOverlayTsx1(){let[useReducedMotion,currWaveHeight]=this.__closure;var _currWaveHeight$get,_currWaveHeight;return useReducedMotion?0.5:(_currWaveHeight$get=(_currWaveHeight=currWaveHeight)===null||_currWaveHeight===void 0?void 0:_currWaveHeight.get())!==null&&_currWaveHeight$get!==void 0?_currWaveHeight$get:0;})",
};
let closure_22 = {
  code: "(function VoiceMessageOverlayTsx2(){let[derivedCurrWaveHeight,offsetThreshold]=this.__closure;return derivedCurrWaveHeight.get()*offsetThreshold;})",
};
let closure_23 = {
  code: "(function VoiceMessageOverlayTsx3(){let[voiceMessageEllipseBgColor,radius,offset]=this.__closure;return{fill:voiceMessageEllipseBgColor.get(),ry:radius+offset.get(),rx:radius,cy:radius+offset.get(),cx:radius};})",
};
let closure_24 = {
  code: "(function VoiceMessageOverlayTsx4(){let[radius,height,offset]=this.__closure;return{position:'absolute',width:radius*2,height:height.get()+offset.get(),bottom:0};})",
};
let closure_25 = {
  code: "(function VoiceMessageOverlayTsx5(){let[initialAnimation,recordingAnimation]=this.__closure;const animationValue=Math.min(initialAnimation.get(),recordingAnimation.get());return{opacity:animationValue};})",
};
let closure_26 = noop.memo(function VoiceMessagePrompt(voiceMessageState) {
  voiceMessageState = voiceMessageState.voiceMessageState;
  c0 = undefined;
  ({ initialAnimation, recordingAnimation, exiting } = voiceMessageState);
  let tmp2 = useVoiceMessagesUIStore(
    (savedVoiceMessageUploadData) => null != savedVoiceMessageUploadData.savedVoiceMessageUploadData,
  );
  const ref = noop.useRef(undefined);
  c1 = ref;
  const tmp5 = useRefValueDefault(ref);
  if (exiting) {
    c0 = tmp5;
    let stringResult = tmp5;
  } else {
    if (tmp2) {
      if (!tmp) {
        const intl = util.intl;
        stringResult = intl.string(util.t["m+sRVL"]);
        c0 = stringResult;
      }
    }
    if (tmp2) {
      if (voiceMessageState === VoiceMessageAnimationState.SENDING) {
        const intl6 = util.intl;
        const stringResult1 = intl6.string(util.t["zPxm/X"]);
        c0 = stringResult1;
        stringResult = stringResult1;
      }
    }
    if (tmp2) {
      if (voiceMessageState === VoiceMessageAnimationState.CANCELLING) {
        const intl5 = util.intl;
        const stringResult2 = intl5.string(util.t.sB81Bo);
        c0 = stringResult2;
        stringResult = stringResult2;
      }
    }
    if (!tmp2) {
      if (voiceMessageState === VoiceMessageAnimationState.SENDING) {
        const intl2 = util.intl;
        const stringResult3 = intl2.string(util.t.cyL7DJ);
        c0 = stringResult3;
        stringResult = stringResult3;
      }
    }
    if (!tmp2) {
      if (voiceMessageState === VoiceMessageAnimationState.CANCELLING) {
        const intl3 = util.intl;
        const stringResult4 = intl3.string(util.t["a+A3+f"]);
        c0 = stringResult4;
        stringResult = stringResult4;
      }
    }
    if (!tmp2) {
      tmp2 = voiceMessageState !== VoiceMessageAnimationState.LOCKING;
    }
    if (!tmp2) {
      const intl4 = util.intl;
      const stringResult5 = intl4.string(util.t["3qvtks"]);
      c0 = stringResult5;
      stringResult = stringResult5;
    }
  }
  items = [stringResult];
  const effect = noop.useEffect(() => {
    c1.current = current;
  }, items);
  _mod1652;
  const items1 = [closure_25, initialAnimation, recordingAnimation];
  c0 = undefined;
  c1 = undefined;
  [tmp25, tmp26, tmp27] = items1;
  class VoiceMessageOverlayTsx5 {
    constructor() {
      obj = { opacity: null };
      value = closure_0.get();
      obj.opacity = Math.min(value, closure_1.get());
      return obj;
    }
  }
  const items2 = [tmp26, tmp27];
  VoiceMessageOverlayTsx5.__closure = items2;
  VoiceMessageOverlayTsx5.__workletHash = 1077271154504;
  VoiceMessageOverlayTsx5.__initData = tmp25;
  let tmp29 = null;
  if (null != stringResult) {
    const obj2 = {
      style: tmp28,
      variant: "body-xs/medium",
      color: "interactive-text-default",
      maxFontSizeMultiplier: 2,
      children: stringResult,
    };
    tmp29 = state(closure_17, obj2);
  }
  return tmp29;
});
let closure_27 = {
  code: "(function VoiceMessageOverlayTsx6(){let[voiceMessageAnimationState,withTiming,Easing]=this.__closure;const currValue=voiceMessageAnimationState.get()[1];return withTiming(currValue,{easing:Easing.linear,duration:150});})",
};
let closure_28 = {
  code: "(function VoiceMessageOverlayTsx7(){let[voiceMessageAnimationState,sendingColor,lockingColor,lockedColor,cancelingColor,interpolateColor,timing,VOICE_MESSAGE_ANIMATION_STATES]=this.__closure;const[prevValue,currValue]=voiceMessageAnimationState.get();const distance=prevValue+currValue;const colors=distance===2?[sendingColor,sendingColor,lockingColor,lockedColor]:[sendingColor,cancelingColor,lockingColor,lockedColor];return interpolateColor(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,colors);})",
};
let closure_30 = {
  code: "(function VoiceMessageOverlayTsx8(){let[voiceMessageAnimationState,withTiming,Easing]=this.__closure;const currValue=voiceMessageAnimationState.get()[1];return withTiming(currValue,{easing:Easing.linear,duration:150});})",
};
let closure_31 = {
  code: "(function VoiceMessageOverlayTsx9(){let[voiceMessageAnimationState,interpolate,timing,VOICE_MESSAGE_ANIMATION_STATES]=this.__closure;const[prevValue,currValue]=voiceMessageAnimationState.get();const distance=prevValue+currValue;const opacity=distance===2?[1,1,1,0]:[1,0,1,0];return interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,opacity);})",
};
let closure_32 = {
  code: "(function VoiceMessageOverlayTsx10(){let[interpolate,timing,VOICE_MESSAGE_ANIMATION_STATES,LOCK_PILL_RESTING_HEIGHT]=this.__closure;return{height:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[LOCK_PILL_RESTING_HEIGHT,LOCK_PILL_RESTING_HEIGHT,104,104])};})",
};
let closure_33 = {
  code: "(function VoiceMessageOverlayTsx11(){let[interpolate,timing,VOICE_MESSAGE_ANIMATION_STATES,lockPillWidth,LOCK_PILL_LOCKED_SIZE,LOCK_PILL_RESTING_HEIGHT,lockContainerOpacity,lockedBackgroundColor,lockPillLockedOverhang]=this.__closure;return{width:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[lockPillWidth,lockPillWidth,LOCK_PILL_LOCKED_SIZE,LOCK_PILL_LOCKED_SIZE]),height:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[LOCK_PILL_RESTING_HEIGHT,LOCK_PILL_RESTING_HEIGHT,LOCK_PILL_LOCKED_SIZE,LOCK_PILL_LOCKED_SIZE]),opacity:lockContainerOpacity.get(),backgroundColor:lockedBackgroundColor.get(),marginHorizontal:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[0,0,lockPillLockedOverhang,lockPillLockedOverhang]),marginBottom:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[0,0,36,36])};})",
};
let closure_34 = {
  code: "(function VoiceMessageOverlayTsx12(){let[interpolate,timing,VOICE_MESSAGE_ANIMATION_STATES,lockIconColor]=this.__closure;return{width:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[24,24,32,32]),height:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[24,24,32,32]),marginTop:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[12,12,10,10]),tintColor:lockIconColor.get()};})",
};
let closure_35 = {
  code: "(function VoiceMessageOverlayTsx13(){let[interpolate,timing,VOICE_MESSAGE_ANIMATION_STATES]=this.__closure;return{opacity:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[1,1,0,0])};})",
};
let closure_36 = {
  code: "(function VoiceMessageOverlayTsx14(){let[voiceMessageAnimationState,VoiceMessageAnimationState]=this.__closure;return voiceMessageAnimationState.get()[1]===VoiceMessageAnimationState.LOCKED||voiceMessageAnimationState.get()[1]===VoiceMessageAnimationState.LOCKING;})",
};
let closure_37 = {
  code: "(function VoiceMessageOverlayTsx15(result,previous){let[scheduleOnRN,setLocked]=this.__closure;if(result!==previous){scheduleOnRN(setLocked,result);}})",
};
let closure_38 = {
  code: "(function VoiceMessageOverlayTsx16(){let[initialAnimation,animatedSafeAreaBottom,CHAT_INPUT_HEIGHT,LOCK_PILL_BOTTOM_OFFSET,INITIAL_SHIFT]=this.__closure;return{opacity:initialAnimation.get(),bottom:animatedSafeAreaBottom.get()+CHAT_INPUT_HEIGHT+(LOCK_PILL_BOTTOM_OFFSET-INITIAL_SHIFT)+INITIAL_SHIFT*initialAnimation.get()};})",
};
let closure_40 = {
  code: "(function VoiceMessageOverlayTsx17(){let[voiceMessageAnimationState]=this.__closure;return voiceMessageAnimationState.get()[1];})",
};
let closure_41 = {
  code: "(function VoiceMessageOverlayTsx18(state,previous){let[scheduleOnRN,setVoiceMessageState]=this.__closure;if(state!==previous){scheduleOnRN(setVoiceMessageState,state);}})",
};
let closure_42 = {
  code: "(function VoiceMessageOverlayTsx19(){let[initialAnimation,animatedInsetsBottom]=this.__closure;return{opacity:initialAnimation.get(),bottom:animatedInsetsBottom.get()};})",
};
let closure_43 = noop.memo(function VoiceMessageOverlay(channelId) {
  channelId = channelId.channelId;
  _require = channelId;
  ({ voiceMessageAnimationState, exiting } = channelId);
  importDefault = undefined;
  const token = require("useToken").useToken(
    nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_INLINE_FULL_GRADIENT_HEIGHT,
  );
  const tmp5 = closure_19();
  const bottom = useSafeAreaInsetsKeyboardAwareDefault({
    includeCustomKeyboardHeight: true,
    includeKeyboardHeight: true,
  }).insets.bottom;
  let obj = require("useToken");
  const tmp6 = useKeyboardAnimatedValueDefault(bottom);
  const keyboardOpenPaddingStyle = require("FloatingChatInputContainer").useKeyboardOpenPaddingStyle();
  const tmp8 = useVoiceMessagesUIStore((startTimeMillis) => null != startTimeMillis.startTimeMillis);
  closure_129_0 = tmp8;
  closure_129_1 = exiting;
  let obj2 = require("FloatingChatInputContainer");
  const sharedValue = require("../../../../../_runtime/metro/01652__.js").useSharedValue(0);
  closure_129_2 = sharedValue;
  closure_129_3 = noop.useRef(performance.now());
  items = [sharedValue];
  const effect = noop.useEffect(() => {
    const obj = _mod1652;
    const obj2 = timing_timing;
    const result = dependencyMap.set(
      obj.withDelay(500, obj2.withTiming(1, { easing: _mod1652.Easing.quad, duration: 250 })),
    );
  }, items);
  const items1 = [sharedValue, exiting];
  const effect1 = noop.useEffect(() => {
    if (c1) {
      const obj2 = { easing: _mod1652.Easing.quad, duration: 100 };
      const result = dependencyMap.set(timing_timing.withTiming(0, obj2));
    }
  }, items1);
  let obj3 = require("../../../../../_runtime/metro/01652__.js");
  const sharedValue1 = require("../../../../../_runtime/metro/01652__.js").useSharedValue(0);
  closure_129_4 = sharedValue1;
  const items2 = [sharedValue, sharedValue1, tmp8];
  const effect2 = noop.useEffect(() => {
    if (c0) {
      const obj2 = { easing: _mod1652.Easing.quad, duration: 200 };
      const result = noop.set(timing_timing.withTiming(1, obj2));
      const _performance = performance;
      if (performance.now() - ref2.current < 500) {
        const obj3 = { easing: _mod1652.Easing.quad, duration: 250 };
        const result1 = dependencyMap.set(timing_timing.withTiming(1, obj3));
        const tmp2Result = timing_timing;
      }
    }
  }, items2);
  const obj5 = require("../../../../../_runtime/metro/01652__.js");
  [tmp16, tmp17] = noop.useState(VoiceMessageAnimationState.SENDING);
  const tmp15 = _slicedToArray(noop.useState(VoiceMessageAnimationState.SENDING), 2);
  const items3 = [closure_40, voiceMessageAnimationState];
  _require = undefined;
  [tmp18, tmp19] = items3;
  class VoiceMessageOverlayTsx17 {
    constructor() {
      return closure_0.get()[1];
    }
  }
  const items4 = [tmp19];
  VoiceMessageOverlayTsx17.__closure = items4;
  VoiceMessageOverlayTsx17.__workletHash = 13417586896774;
  VoiceMessageOverlayTsx17.__initData = tmp18;
  const items5 = [closure_41, require("../../../../../_runtime/metro/01705__.js").scheduleOnRN, tmp17];
  _require = undefined;
  importDefault = undefined;
  [tmp20, tmp21, tmp22] = items5;
  class VoiceMessageOverlayTsx18 {
    constructor(arg0, arg1) {
      if (channelId !== arg1) {
        tmp = closure_0;
        tmp2 = closure_1;
        tmp3 = closure_0(closure_1, channelId);
      }
      return;
    }
  }
  const items6 = [tmp21, tmp22];
  VoiceMessageOverlayTsx18.__closure = items6;
  VoiceMessageOverlayTsx18.__workletHash = 8966188609438;
  VoiceMessageOverlayTsx18.__initData = tmp20;
  const animatedReaction = require("../../../../../_runtime/metro/01652__.js").useAnimatedReaction(
    VoiceMessageOverlayTsx17,
    VoiceMessageOverlayTsx18,
  );
  const ref = noop.useRef(null);
  const effect3 = noop.useEffect(() => {
    if (obj.getIsScreenReaderEnabled()) {
      const obj2 = { ref };
      const result = setAccessibilityFocus.setAccessibilityFocus(obj2);
      const tmpResult = setAccessibilityFocus;
    }
    obj = useIsScreenReaderEnabled;
  }, []);
  const items7 = [channelId];
  const effect4 = noop.useEffect(() => {
    closure_0 = closure_1_6.addEventListener("change", function endAudioRecordingOnAppInactive(event) {
      let tmp = "inactive" !== event;
      if (tmp) {
        tmp = "background" !== event;
      }
      if (!tmp) {
        const ComponentDispatch = c0(dependencyMap[32]).ComponentDispatch;
        const obj = {
          isCancelling: true,
          cancelReason: c0(dependencyMap[33]).VoiceMessageRecordingResult.CANCELLED_ON_BACKGROUND,
        };
        ComponentDispatch.dispatchKeyed(constants.VOICE_MESSAGE_SEND, closure_0, obj);
      }
    });
    return () => {
      closure_0.remove();
    };
  }, items7);
  const obj6 = require("../../../../../_runtime/metro/01652__.js");
  const items8 = [closure_42, sharedValue, tmp6];
  _require = undefined;
  importDefault = undefined;
  [tmp27, tmp28, tmp29] = items8;
  class VoiceMessageOverlayTsx19 {
    constructor() {
      obj = { opacity: closure_0.get(), bottom: closure_1.get() };
      return obj;
    }
  }
  const items9 = [tmp28, tmp29];
  VoiceMessageOverlayTsx19.__closure = items9;
  VoiceMessageOverlayTsx19.__workletHash = 1566219795574;
  VoiceMessageOverlayTsx19.__initData = tmp27;
  const animatedStyle = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(VoiceMessageOverlayTsx19);
  let tmpResult = require("../../../../../_runtime/metro/01652__.js");
  const wakeLock = require("WakeLock").useWakeLock("VoiceMessageOverlay");
  const obj7 = { style: null, children: null };
  const items10 = [tmp5.contentContainer, animatedStyle];
  const items11 = [tmp5.contentContainerFloating, keyboardOpenPaddingStyle];
  items10[2] = items11;
  obj7.style = items10;
  const items12 = [
    closure_13(require("ChatInputScrimGradient").ChatInputScrimGradient, { gradientHeight: token, inline: true }),
    closure_13(closure_26, {
      initialAnimation: sharedValue,
      recordingAnimation: sharedValue1,
      voiceMessageState: tmp16,
      exiting,
    }),
  ];
  const obj8 = { style: tmp5.innerContainer, children: null };
  const obj9 = { style: tmp5.voiceChatContainer, children: null };
  const obj10 = { isRecording: tmp8, initialAnimation: sharedValue, leftAccessory: null, rightAccessory: null };
  const tmpResult2 = require("WakeLock");
  const obj11 = {
    icon: _modDef5978,
    variant: null,
    size: "sm",
    maxFontSizeMultiplier: 2,
    accessibilityLabel: null,
    onPressIn: null,
    onPress: null,
  };
  let str = "tertiary";
  if (tmp16 === VoiceMessageAnimationState.CANCELLING) {
    str = "destructive";
  }
  obj11.variant = str;
  const intl = tmp(1113).intl;
  obj11.accessibilityLabel = intl.string(require("util").t.RdK9sV);
  obj11.onPressIn = function onPressIn() {
    return _undefined(dependencyMap[39]).triggerHaptic();
  };
  obj11.onPress = function onPress() {
    const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
    ComponentDispatch.dispatchKeyed(ComponentActionsKeyed.VOICE_MESSAGE_SEND, c0, { isCancelling: true });
  };
  obj10.leftAccessory = closure_13(require("IconButton").IconButton, obj11);
  const obj12 = {
    ref,
    active: null,
    style: null,
    activeStyle: null,
    activeIconStyle: null,
    IconComponent: null,
    accessibilityLabel: null,
    onPress: null,
  };
  let tmp38 = tmp16 === VoiceMessageAnimationState.SENDING;
  const tmp3Result = VoiceMessageChatDefault;
  if (!tmp38) {
    tmp38 = tmp16 === VoiceMessageAnimationState.LOCKED;
  }
  obj12.active = tmp38;
  ({
    floatingSendButton: obj14.style,
    floatingSendButtonActive: obj14.activeStyle,
    floatingSendButtonIconActive: obj14.activeIconStyle,
  } = tmp5);
  if (!tmp8) {
    if (!exiting) {
      let SendMessageIcon = tmp(12958).MicrophoneIcon;
    }
    const obj13 = { children: null };
    obj12.IconComponent = SendMessageIcon;
    const intl2 = tmp(1113).intl;
    obj12.accessibilityLabel = intl2.string(tmp(1113).t["+8GStU"]);
    obj12.onPress = function onPress() {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.dispatchKeyed(ComponentActionsKeyed.VOICE_MESSAGE_SEND, c0, { isCancelling: false });
    };
    obj10.rightAccessory = closure_13(tmp3Result2, obj12);
    obj9.children = closure_13(tmp3Result, obj10);
    obj8.children = closure_13(closure_5, obj9);
    items12[2] = closure_13(closure_5, obj8);
    obj7.children = items12;
    const items13 = [closure_14(tmp3(1652).View, obj7)];
    const obj15 = { safeAreaBottom: bottom, initialAnimation: sharedValue, voiceMessageAnimationState };
    items13[1] = closure_13(LockPill, obj15);
    obj13.children = items13;
    return closure_14(closure_15, obj13);
  }
  SendMessageIcon = tmp(5968).SendMessageIcon;
  tmp3Result2 = ChatInputActionButtonDefault;
});
const memoResult = noop.memo(function VoiceMessageEllipse(arg0) {
  ({ radius, voiceMessageAnimationState } = arg0);
  ({ opacity, height, offsetThreshold } = arg0);
  items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion, []);
  const tmp4 = useVoiceMessagesUIStore((currWaveHeight) => currWaveHeight.currWaveHeight);
  const items1 = [closure_21, stateFromStores, tmp4];
  c0 = undefined;
  c1 = undefined;
  [tmp5, tmp6, tmp7] = items1;
  class VoiceMessageOverlayTsx1 {
    constructor() {
      num = 0.5;
      if (!closure_0) {
        obj = closure_1;
        tmp = null;
        num2 = undefined;
        if (closure_1 != null) {
          num2 = obj.get();
        }
        if (num2 == null) {
          num2 = 0;
        }
        num = num2;
      }
      return num;
    }
  }
  const items2 = [tmp6, tmp7];
  VoiceMessageOverlayTsx1.__closure = items2;
  VoiceMessageOverlayTsx1.__workletHash = 14053531181026;
  VoiceMessageOverlayTsx1.__initData = tmp5;
  const derivedValue = _mod1652.useDerivedValue(VoiceMessageOverlayTsx1);
  const token = useToken.useToken(nativeDefault.colors.BACKGROUND_BRAND);
  const tmpResult = useToken;
  const tmp11 = useDerivedColors(
    voiceMessageAnimationState,
    token,
    nativeDefault.unsafe_rawColors.RED_400,
    token,
    token,
  );
  const items3 = [closure_22, derivedValue, offsetThreshold];
  c0 = undefined;
  c1 = undefined;
  [tmp12, tmp13, tmp14] = items3;
  class VoiceMessageOverlayTsx2 {
    constructor() {
      return closure_0.get() * closure_1;
    }
  }
  const items4 = [tmp13, tmp14];
  VoiceMessageOverlayTsx2.__closure = items4;
  VoiceMessageOverlayTsx2.__workletHash = 12904912958499;
  VoiceMessageOverlayTsx2.__initData = tmp12;
  const derivedValue1 = _mod1652.useDerivedValue(VoiceMessageOverlayTsx2);
  const tmpResult4 = _mod1652;
  const items5 = [closure_23, tmp11, radius, derivedValue1];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp16, tmp17, tmp18, tmp19] = items5;
  class VoiceMessageOverlayTsx3 {
    constructor() {
      obj = {
        fill: closure_0.get(),
        ry: closure_1 + closure_2.get(),
        rx: closure_1,
        cy: closure_1 + closure_2.get(),
        cx: closure_1,
      };
      return obj;
    }
  }
  const items6 = [tmp17, tmp18, tmp19];
  VoiceMessageOverlayTsx3.__closure = items6;
  VoiceMessageOverlayTsx3.__workletHash = 5686983311618;
  VoiceMessageOverlayTsx3.__initData = tmp16;
  const animatedProps = _mod1652.useAnimatedProps(VoiceMessageOverlayTsx3);
  const tmpResult5 = _mod1652;
  const items7 = [closure_24, radius, height, derivedValue1];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp21, tmp22, tmp23, tmp24] = items7;
  class VoiceMessageOverlayTsx4 {
    constructor() {
      size = { position: "absolute", width: 2 * closure_0, height: null, bottom: 0 };
      value = closure_1.get();
      size.height = value + closure_2.get();
      return size;
    }
  }
  const items8 = [tmp22, tmp23, tmp24];
  VoiceMessageOverlayTsx4.__closure = items8;
  VoiceMessageOverlayTsx4.__workletHash = 12520636886923;
  VoiceMessageOverlayTsx4.__initData = tmp21;
  const animatedStyle = _mod1652.useAnimatedStyle(VoiceMessageOverlayTsx4);
  const tmpResult6 = _mod1652;
  const obj3 = { style: animatedStyle, children: null };
  const tmp26 = closure_18();
  obj3.children = state(inlineStyles.Svg, { children: state(closure_18(), { animatedProps, opacity }) });
  return state(module_1652.View, obj3);
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_messages/native/components/VoiceMessageOverlay.tsx");

export default noop.memo(function VoiceMessageOverlayGuard(channelId) {
  channelId = channelId.channelId;
  const tmp = useVoiceMessagesUIStore((showRecordingOverlay) => showRecordingOverlay.showRecordingOverlay);
  closure_1 = tmp;
  items = [ChannelStore];
  const stateFromStores = channelId(504).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const tmp2 = useVoiceMessagesUIStore(
    (voiceMessageAnimationState) => voiceMessageAnimationState.voiceMessageAnimationState,
  );
  const tmp3 = _slicedToArray(noop.useState(tmp), 2);
  dependencyMap = tmp3[1];
  const items1 = [tmp];
  const effect = noop.useEffect(() => {
    if (closure_1) {
      closure_2(true);
    } else {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => closure_1_2(false), 100);
      return () => {
        clearTimeout(closure_0);
      };
    }
  }, items1);
  let isForumLikeChannelResult;
  if (stateFromStores != null) {
    isForumLikeChannelResult = stateFromStores.isForumLikeChannel();
  }
  let tmp6 = null;
  if (!isForumLikeChannelResult) {
    let tmp7 = null;
    if (null != tmp2) {
      tmp7 = null;
      if (tmp3[0]) {
        const obj2 = { channelId, voiceMessageAnimationState: tmp2, exiting: !tmp };
        tmp7 = closure_13(closure_43, obj2);
      }
    }
    tmp6 = tmp7;
  }
  return tmp6;
});
export const VoiceMessageEllipse = memoResult;
