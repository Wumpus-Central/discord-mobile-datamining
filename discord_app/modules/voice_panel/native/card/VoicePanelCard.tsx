// === Module 20008: VoicePanelCard ===

// Module 20008 (VoicePanelCard)
import nativeDefault from "native" /* 575 */;
import _mod1655 from "module_1655" /* 1655 */;
import _mod1708 from "module_1708" /* 1708 */;
import LinearGradientDefault from "LinearGradient" /* 5893 */;
import spring_spring from "spring/spring" /* 5939 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6808 */;
import StreamActionCreators from "StreamActionCreators" /* 6862 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7918 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8476 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 10576 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11984 */;
import useVideoStreamErrorDefault from "useVideoStreamError" /* 12788 */;
import useUserTileBackgroundDefault from "useUserTileBackground" /* 19905 */;
import useStableParticipantDefault from "useStableParticipant" /* 19988 */;
import VoicePanelUserActionCreators from "VoicePanelUserActionCreators" /* 20011 */;
import computeCardBorderRadiusDefault from "computeCardBorderRadius" /* 20013 */;
import calculateContentCenterOffsetDefault from "calculateContentCenterOffset" /* 20014 */;
import useTapGesturesDefault from "useTapGestures" /* 20015 */;
import useCameraEncodeErrorDefault from "useCameraEncodeError" /* 20016 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SoundboardStore from "SoundboardStore" /* 6369 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6820 */;
import RTCConnectionStore from "RTCConnectionStore" /* 6071 */;
import SpeakingStore from "SpeakingStore" /* 6941 */;

const require = globalThis.__r;
const module_1655_mod = _mod1655;

const NativeViewDefault = tmp10(7722);
require = fn;
function SelfStreamCard(stream) {
  stream = stream.stream;
  _require = stream;
  const isFocused = stream.isFocused;
  const tmp = closure_32();
  let stringResult = dependencyMap;
  items = [ApplicationStreamingStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    currentUserActiveStream = currentUserActiveStream.getCurrentUserActiveStream();
    state = undefined;
    if (currentUserActiveStream != null) {
      state = currentUserActiveStream.state;
    }
    return state === constants.PAUSED;
  });
  const items1 = [stream];
  let string = noop.useCallback(() => {
    if (null != c0) {
      obj = StreamActionCreators;
      obj.stopStream(StreamKeyUtils.encodeStreamKey(tmp));
    }
  }, items1);
  obj = require("initialize");
  const items2 = [closure_33, isFocused, stream.sharedCoords];
  _require = undefined;
  importDefault = undefined;
  [tmp5, tmp6, tmp7] = items2;
  class VoicePanelCardTsx1 {
    constructor() {
      num = 16;
      tmp = closure_0;
      if (closure_0) {
        num = 0;
      }
      obj = { textAlign: "center", paddingHorizontal: 16, paddingVertical: num, width: null };
      str = "auto";
      if (!tmp) {
        tmp2 = closure_1;
        str = closure_1.get().width;
      }
      obj.width = str;
      return obj;
    }
  }
  const items3 = [tmp6, tmp7];
  VoicePanelCardTsx1.__closure = items3;
  VoicePanelCardTsx1.__workletHash = 10409373046786;
  VoicePanelCardTsx1.__initData = tmp5;
  const animatedStyle = require("module_1655").useAnimatedStyle(VoicePanelCardTsx1);
  const obj3 = { style: tmp.nonUserRoundedCard, children: null };
  let tmp12 = isFocused;
  let obj2 = require("module_1655");
  if (isFocused) {
    const obj4 = { style: tmp.blackBackground };
    tmp12 = closure_24(NativeViewDefault, obj4);
  }
  const items4 = [tmp12, , ];
  const obj5 = { style: animatedStyle, variant: null, color: "text-overlay-light", children: null };
  let str = "body-sm/semibold";
  if (isFocused) {
    str = "body-lg/semibold";
  }
  obj5.variant = str;
  const intl = tmp2(1113).intl;
  const string2 = intl.string;
  const t = tmp2(1113).t;
  if (stateFromStores) {
    let string2Result = string2(t["5q17w5"]);
  } else {
    string2Result = string2(t.gMOwov);
  }
  obj5.children = string2Result;
  items4[1] = closure_24(closure_27, obj5);
  if (!isFocused) {
    items4[2] = null;
    obj3.children = items4;
    return closure_26(tmp11, obj3);
  } else {
    let Text = tmp2(5929).Text;
    let obj6 = { style: tmp.selfStreamFocusedSubtitle, variant: "body-sm/medium", color: "text-overlay-light", children: null };
    const intl2 = tmp2(1113).intl;
    let intl3 = intl2.string;
    let t1 = tmp2(1113).t;
    if (stateFromStores) {
      let intl3Result = intl3(t1.LV1NSN);
    } else {
      intl3Result = intl3(t1.dKeLGt);
    }
    t1 = { children: null };
    obj6.children = intl3Result;
    obj6 = [, ];
    obj6[0] = closure_24(Text, obj6);
    const obj7 = { size: "lg", variant: "primary-overlay", onPress: string, text: null };
    intl3 = tmp2(1113).intl;
    string = intl3.string;
    stringResult = string(tmp2(1113).t.CpkXwZ);
    obj7.text = stringResult;
    Text = closure_24(tmp2(5936).Button, obj7);
    obj6[1] = Text;
    t1.children = obj6;
    closure_26(closure_25, t1);
    const tmp14Result = closure_24(Text, obj6);
  }
  tmp11 = NativeViewDefault;
}
function useCardPanelMode() {
  const context = noop.useContext(VoicePanelStateContextDefault);
  ({ mode, isDockEnabled } = context);
  items = [closure_38, isDockEnabled, mode, gesture];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp2, tmp3, tmp4, tmp5] = items;
  class VoicePanelCardTsx4 {
    constructor() {
      if (closure_0) {
        tmp = closure_1;
        if (closure_1.get() === closure_2.PIP) {
          PANEL = closure_2.PANEL;
        }
        return PANEL;
      }
      PANEL = closure_1.get();
      return;
    }
  }
  const items1 = [tmp3, tmp4, tmp5];
  VoicePanelCardTsx4.__closure = items1;
  VoicePanelCardTsx4.__workletHash = 6106186389117;
  VoicePanelCardTsx4.__initData = tmp2;
  return _mod1655.useDerivedValue(VoicePanelCardTsx4);
}
function SpeakingIndicator(arg0) {
  ({ id, userId: c0, isSelf, speakingOrPlayingSoundboard, layout } = arg0);
  const focused = noop.useContext(VoicePanelStateContextDefault).focused;
  const tmp3 = useCardPanelMode();
  const tmp4 = closure_32();
  const token = require("useToken").useToken(nativeDefault.modules.mobile.VOICE_TILE_BORDER_RADIUS);
  obj = require("useToken");
  const token1 = require("useToken").useToken(nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED);
  let obj2 = require("useToken");
  items = [c7];
  const stateFromStores = require("initialize").useStateFromStores(items, () => SoundboardStore.isUserPlayingSounds(c0));
  let obj3 = require("initialize");
  const items1 = [closure_43, tmp3, closure_14, focused, id, require("spring/spring").withSpring, computeCardBorderRadiusDefault, isSelf, token, closure_16];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  noop = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20] = items1;
  class VoicePanelCardTsx7 {
    constructor() {
      obj = closure_0;
      tmp = closure_0.get() !== closure_1.PIP;
      if (tmp) {
        tmp2 = closure_2;
        value = closure_2.get();
        tmp4 = null;
        id = undefined;
        if (value != null) {
          id = value.id;
        }
        tmp6 = closure_3;
        tmp = id === closure_3;
      }
      num = 1;
      if (tmp) {
        num = 0;
      }
      obj1 = { opacity: num, borderRadius: null };
      num2 = 0;
      tmp7 = closure_4;
      if (!tmp) {
        obj4 = { id: null, mode: null, focused: null, isSelf: null, defaultBorderRadius: null };
        tmp9 = closure_3;
        obj4.id = closure_3;
        tmp8 = closure_5;
        obj4.mode = obj.get();
        tmp10 = closure_2;
        value1 = closure_2.get();
        tmp12 = null;
        id1 = undefined;
        if (value1 != null) {
          id1 = value1.id;
        }
        obj4.focused = id1;
        tmp14 = closure_6;
        obj4.isSelf = closure_6;
        tmp15 = closure_7;
        obj4.defaultBorderRadius = closure_7;
        num2 = tmp8(obj4);
      }
      str = "animate-always";
      tmp16 = closure_8;
      if (tmp) {
        str = "animate-never";
      }
      obj1.borderRadius = tmp7(num2, tmp16, str);
      return obj1;
    }
  }
  const items2 = [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20];
  VoicePanelCardTsx7.__closure = items2;
  VoicePanelCardTsx7.__workletHash = 2180139685709;
  VoicePanelCardTsx7.__initData = tmp11;
  const animatedStyle = require("module_1655").useAnimatedStyle(VoicePanelCardTsx7);
  const obj4 = require("module_1655");
  const items3 = [closure_44, tmp3, closure_14, focused, id, require("spring/spring").withSpring, computeCardBorderRadiusDefault, isSelf, token, closure_16, speakingOrPlayingSoundboard, roundToNearestPixelDefault, 3, 2];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  noop = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  c11 = undefined;
  c12 = undefined;
  [tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35] = items3;
  class VoicePanelCardTsx8 {
    constructor() {
      obj = closure_0;
      tmp = closure_0.get() === closure_1.PIP;
      if (!tmp) {
        tmp2 = closure_2;
        value = closure_2.get();
        tmp4 = null;
        id = undefined;
        if (value != null) {
          id = value.id;
        }
        tmp6 = closure_3;
        tmp = id === closure_3;
      }
      tmp7 = closure_4;
      num = 0;
      if (!tmp) {
        obj1 = { id: null, mode: null, focused: null, isSelf: null, defaultBorderRadius: null };
        tmp9 = closure_3;
        obj1.id = closure_3;
        tmp8 = closure_5;
        obj1.mode = obj.get();
        tmp10 = closure_2;
        value1 = closure_2.get();
        tmp12 = null;
        id1 = undefined;
        if (value1 != null) {
          id1 = value1.id;
        }
        obj1.focused = id1;
        tmp14 = closure_6;
        obj1.isSelf = closure_6;
        tmp15 = closure_7;
        obj1.defaultBorderRadius = closure_7;
        num = tmp8(obj1);
      }
      tmp16 = closure_8;
      str = "animate-always";
      str2 = "animate-always";
      if (tmp) {
        str2 = "animate-never";
      }
      obj4 = { borderRadius: tmp7(num, tmp16, str2), borderWidth: null };
      num2 = 0;
      if (!tmp) {
        tmp17 = closure_9;
        num2 = 0;
        if (closure_9.get()) {
          tmp18 = closure_10;
          tmp19 = closure_11;
          tmp20 = closure_12;
          num2 = closure_10(closure_11 + closure_12);
        }
      }
      if (tmp) {
        str = "animate-never";
      }
      obj4.borderWidth = tmp7(num2, tmp16, str);
      return obj4;
    }
  }
  const items4 = [tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35];
  VoicePanelCardTsx8.__closure = items4;
  VoicePanelCardTsx8.__workletHash = 14127200655182;
  VoicePanelCardTsx8.__initData = tmp22;
  const animatedStyle1 = require("module_1655").useAnimatedStyle(VoicePanelCardTsx8);
  const tmp5Result = require("module_1655");
  const items5 = [closure_45, tmp3, closure_14, focused, id, require("spring/spring").withSpring, computeCardBorderRadiusDefault, isSelf, token, closure_16, speakingOrPlayingSoundboard, 3];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  noop = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  [tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48] = items5;
  class VoicePanelCardTsx9 {
    constructor() {
      obj = closure_0;
      tmp = closure_0.get() === closure_1.PIP;
      if (!tmp) {
        tmp2 = closure_2;
        value = closure_2.get();
        tmp4 = null;
        id = undefined;
        if (value != null) {
          id = value.id;
        }
        tmp6 = closure_3;
        tmp = id === closure_3;
      }
      tmp7 = closure_4;
      num = 0;
      if (!tmp) {
        obj1 = { id: null, mode: null, focused: null, isSelf: null, defaultBorderRadius: null };
        tmp9 = closure_3;
        obj1.id = closure_3;
        tmp8 = closure_5;
        obj1.mode = obj.get();
        tmp10 = closure_2;
        value1 = closure_2.get();
        tmp12 = null;
        id1 = undefined;
        if (value1 != null) {
          id1 = value1.id;
        }
        obj1.focused = id1;
        tmp14 = closure_6;
        obj1.isSelf = closure_6;
        tmp15 = closure_7;
        obj1.defaultBorderRadius = closure_7;
        num = tmp8(obj1);
      }
      tmp16 = closure_8;
      str = "animate-always";
      str2 = "animate-always";
      if (tmp) {
        str2 = "animate-never";
      }
      obj4 = { borderRadius: tmp7(num, tmp16, str2), borderWidth: null };
      num2 = 0;
      if (!tmp) {
        tmp17 = closure_9;
        num2 = 0;
        if (closure_9.get()) {
          num2 = closure_10;
        }
      }
      if (tmp) {
        str = "animate-never";
      }
      obj4.borderWidth = tmp7(num2, tmp16, str);
      return obj4;
    }
  }
  const items6 = [tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48];
  VoicePanelCardTsx9.__closure = items6;
  VoicePanelCardTsx9.__workletHash = 6036845509381;
  VoicePanelCardTsx9.__initData = tmp37;
  const animatedStyle2 = require("module_1655").useAnimatedStyle(VoicePanelCardTsx9);
  const obj5 = { style: tmp4.speakingIndicatorWrapper, layout, pointerEvents: "none", children: null };
  const obj6 = { style: null, layout, children: null };
  const items7 = [tmp4.speakingIndicatorClip, animatedStyle];
  obj6.style = items7;
  const obj7 = { style: null, layout };
  const items8 = [tmp4.speakingIndicatorUnderlay, animatedStyle1];
  obj7.style = items8;
  const items9 = [closure_24(module_1655.View, obj7), ];
  const items10 = [tmp4.speakingIndicatorBar, , ];
  let tmp52 = null;
  if (stateFromStores) {
    const obj8 = { borderColor: token1 };
    tmp52 = obj8;
  }
  items10[1] = tmp52;
  items10[2] = animatedStyle2;
  items9[1] = closure_24(module_1655.View, { style: items10, layout });
  obj6.children = items9;
  obj5.children = closure_26(module_1655.View, obj6);
  return closure_24(module_1655.View, obj5);
}
function AnimatedWrapper(arg0) {
  ({ cleanUp, id } = arg0);
  _require = id;
  ({ isRTCConnected, isScrollVisible, layoutPhysics } = arg0);
  importDefault = layoutPhysics;
  ({ transitionState, sharedVisible } = arg0);
  noop = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c10 = undefined;
  c11 = undefined;
  let sharedValue1;
  let callback1;
  ({ children, coords, longPressProgress } = arg0);
  dependencyMap = useAnalyticsLocationsDefault().analyticsLocations;
  const context = noop.useContext(VoicePanelStateContextDefault);
  const channelId = context.channelId;
  c3 = channelId;
  ({ contentDimensions, controlsSpecs: c4, focused } = context);
  c5 = focused;
  ({ hideControls: c6, isDockEnabled, mountedCards, safeArea, setFocused: c7, showControls: c8, windowDimensions, wrapperDimensions, wrapperOffset, pipHandoff } = context);
  c9 = pipHandoff;
  ({ connected, guildId, pipAvoidanceSpecs, scrollPosition } = context);
  const tmp5 = useCardPanelMode();
  const tmp3 = c32();
  const pIPState = require("VoicePanelPIPStateContext").usePIPState();
  const tmp8 = useStableParticipantDefault(id, channelId, guildId);
  const obj2 = require("VoicePanelPIPStateContext");
  let tmp9 = tmp8;
  if (!obj3.isStableParticipantWithUser(tmp8)) {
    tmp9 = closure_52;
  }
  isSelf = tmp9.isSelf;
  let id2 = tmp9.user.id;
  c10 = id2;
  let tmp10 = isDockEnabled;
  if (isDockEnabled) {
    tmp10 = !isRTCConnected;
  }
  obj3 = require("useStableParticipant");
  items = [closure_54, id, pIPState, tmp5, c14];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  [tmp12, tmp13, tmp14, tmp15, tmp16] = items;
  class VoicePanelCardTsx15 {
    constructor() {
      tmp = closure_0 === closure_1.id;
      if (tmp) {
        tmp2 = closure_2;
        tmp3 = closure_3;
        tmp = closure_2.get() === closure_3.PIP;
      }
      return tmp;
    }
  }
  let items1 = [tmp13, tmp14, tmp15, tmp16];
  VoicePanelCardTsx15.__closure = items1;
  VoicePanelCardTsx15.__workletHash = 15256278978202;
  VoicePanelCardTsx15.__initData = tmp12;
  const derivedValue = require("module_1655").useDerivedValue(VoicePanelCardTsx15);
  const tmp6Result = require("module_1655");
  let items2 = [closure_55, focused, id, tmp5, c14, scrollPosition];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  noop = undefined;
  [tmp18, tmp19, tmp20, tmp21, tmp22, tmp23] = items2;
  class VoicePanelCardTsx16 {
    constructor() {
      value = closure_0.get();
      id = undefined;
      if (value != null) {
        id = value.id;
      }
      if (id === closure_1) {
        tmp5 = closure_4;
        num = closure_4.get();
      } else {
        tmp3 = closure_2;
        tmp4 = closure_3;
        num = 0;
      }
      return num;
    }
  }
  const items3 = [tmp19, tmp20, tmp21, tmp22, tmp23];
  VoicePanelCardTsx16.__closure = items3;
  VoicePanelCardTsx16.__workletHash = 11655933282959;
  VoicePanelCardTsx16.__initData = tmp18;
  const derivedValue1 = require("module_1655").useDerivedValue(VoicePanelCardTsx16);
  const tmp6Result12 = require("module_1655");
  const items4 = [closure_56, connected, c20, safeArea, windowDimensions, contentDimensions, wrapperDimensions];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  noop = undefined;
  c5 = undefined;
  [tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31] = items4;
  class VoicePanelCardTsx17 {
    constructor() {
      if (closure_0.get()) {
        tmp3 = globalThis;
        _Math = Math;
        tmp4 = closure_1;
        tmp5 = closure_2;
        tmp6 = closure_3;
        tmp7 = closure_4;
        num2 = 2;
        bound = Math.max(closure_1, closure_2.get().left, (closure_3.get().width - closure_4.get().width) / 2);
      } else {
        tmp = closure_5;
        num = 2;
        bound = closure_5.get().drawerWidth / 2;
      }
      return bound;
    }
  }
  const items5 = [tmp26, tmp27, tmp28, tmp29, tmp30, tmp31];
  VoicePanelCardTsx17.__closure = items5;
  VoicePanelCardTsx17.__workletHash = 15075734874118;
  VoicePanelCardTsx17.__initData = tmp25;
  closure_129_0 = id;
  closure_129_1 = tmp8;
  closure_129_2 = transitionState;
  const derivedValue2 = require("module_1655").useDerivedValue(VoicePanelCardTsx17);
  const tmp6Result13 = require("module_1655");
  const sharedValue = require("module_1655").useSharedValue(transitionState);
  closure_129_3 = sharedValue;
  const tmp34 = c3(noop.useState(true), 2);
  closure_129_4 = tmp34[1];
  let type;
  if (tmp8 != null) {
    type = tmp8.type;
  }
  const items6 = [type, id];
  const callback = obj.useCallback((arg0) => {
    let type;
    if (_undefined2 != null) {
      type = _undefined2.type;
    }
    if (type === ParticipantTypes.ACTIVITY) {
      _undefined3(arg0 !== c0);
    }
  }, items6);
  const tmp6Result14 = require("module_1655");
  const items7 = [closure_48, focused];
  _require = undefined;
  [tmp37, tmp38] = items7;
  class VoicePanelCardTsx10 {
    constructor() {
      value = closure_0.get();
      id = undefined;
      if (value != null) {
        id = value.id;
      }
      return id;
    }
  }
  const items8 = [tmp38];
  VoicePanelCardTsx10.__closure = items8;
  VoicePanelCardTsx10.__workletHash = 13460061917882;
  VoicePanelCardTsx10.__initData = tmp37;
  const items9 = [closure_49, require("module_1708").scheduleOnRN, callback];
  _require = undefined;
  importDefault = undefined;
  [tmp39, tmp40, tmp41] = items9;
  class VoicePanelCardTsx11 {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        tmp = closure_0;
        tmp2 = closure_1;
        tmp3 = closure_0(closure_1, arg0);
      }
      return;
    }
  }
  const items10 = [tmp40, tmp41];
  VoicePanelCardTsx11.__closure = items10;
  VoicePanelCardTsx11.__workletHash = 15970315567352;
  VoicePanelCardTsx11.__initData = tmp39;
  const animatedReaction = require("module_1655").useAnimatedReaction(VoicePanelCardTsx10, VoicePanelCardTsx11);
  const tmp6Result15 = require("module_1655");
  const items11 = [closure_50, tmp5, focused, sharedValue];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp43, tmp44, tmp45, tmp46] = items11;
  class VoicePanelCardTsx12 {
    constructor() {
      obj = { mode: closure_0.get(), focused: closure_1.get(), transitionState: closure_2.get() };
      return obj;
    }
  }
  const items12 = [tmp44, tmp45, tmp46];
  VoicePanelCardTsx12.__closure = items12;
  VoicePanelCardTsx12.__workletHash = 13478324363917;
  VoicePanelCardTsx12.__initData = tmp43;
  const items13 = [closure_51, require("cheapWorkletShallowEqual").cheapWorkletShallowEqual, c14, require("native").TransitionStates, sharedVisible, isScrollVisible, require("module_1708").scheduleOnRN, cleanUp, id];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  noop = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  [tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55] = items13;
  class VoicePanelCardTsx13 {
    constructor(arg0, arg1) {
      tmp2 = arg1;
      tmp = closure_0;
      if (!tmp(arg0, tmp2)) {
        ({ focused, transitionState } = arg0);
        tmp3 = closure_1;
        if (focused != null) {
          id = focused.id;
        }
        if (null == arg1) {
          tmp4 = closure_2;
          if (transitionState !== closure_2.YEETED) {
            tmp21 = closure_3;
            num7 = 1;
            result = closure_3.set(1);
          }
        }
        if (transitionState === closure_2.YEETED) {
          obj = closure_3;
          num5 = 1;
          if (1 === closure_3.get()) {
            tmp16 = closure_4;
            if (closure_4.get()) {
              num6 = 0;
              result1 = obj.set(0);
            }
          }
          tmp17 = closure_5;
          tmp18 = closure_6;
          tmp19 = closure_5(closure_6);
        } else {
          transitionState1 = undefined;
          if (arg1 != null) {
            transitionState1 = arg1.transitionState;
          }
          if (transitionState1 === tmp5.YEETED) {
            tmp14 = closure_3;
            num4 = 1;
            result2 = closure_3.set(1);
          } else if (arg0.mode !== closure_1.PIP) {
            if (null == id) {
              tmp12 = closure_3;
              num3 = 1;
              result3 = closure_3.set(1);
            } else {
              tmp7 = closure_7;
              if (id !== closure_7) {
                tmp10 = closure_3;
                num2 = 0;
                result4 = closure_3.set(0);
              } else {
                tmp8 = closure_3;
                num = 1;
                result5 = closure_3.set(1);
              }
            }
          }
        }
      }
      return;
    }
  }
  const items14 = [tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55];
  VoicePanelCardTsx13.__closure = items14;
  VoicePanelCardTsx13.__workletHash = 3146139627673;
  VoicePanelCardTsx13.__initData = tmp47;
  const animatedReaction1 = require("module_1655").useAnimatedReaction(VoicePanelCardTsx12, VoicePanelCardTsx13);
  const layoutEffect = obj.useLayoutEffect(() => {
    const result = channelId.set(c2);
  });
  let tmp58 = !isDockEnabled;
  if (!isDockEnabled) {
    tmp58 = pIPState.mode === VoicePanelPIPModes.IN_APP;
  }
  const tmp6Result16 = require("module_1655");
  const token = require("useToken").useToken(tmp(575).modules.mobile.VOICE_TILE_BORDER_RADIUS);
  const tmp6Result17 = require("useToken");
  const items15 = [closure_58, coords, focused, id, tmp58, pIPState, require("VoicePanelPIPUtils").getScaledPIPContainerHeight, require("VoicePanelPIPUtils").getClampedPIPPosition, wrapperDimensions, windowDimensions, safeArea, pipAvoidanceSpecs, derivedValue1, derivedValue2, calculateContentCenterOffsetDefault, contentDimensions, sharedValue, require("native").TransitionStates, derivedValue, computeCardBorderRadiusDefault, tmp5, isSelf, token, sharedVisible, isRTCConnected, 0.75, wrapperOffset, require("module_1655").withDelay, require("timing/timing").withTiming, c31, c30, isScrollVisible, closure_57, require("module_1708").scheduleOnRN, cleanUp, tmp10, require("spring/spring").withSpring, layoutPhysics, c29, c23];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  noop = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  c11 = undefined;
  sharedValue1 = undefined;
  callback1 = undefined;
  c14 = undefined;
  c15 = undefined;
  c16 = undefined;
  c17 = undefined;
  c18 = undefined;
  VoicePanelPIPModes = undefined;
  c20 = undefined;
  c21 = undefined;
  c22 = undefined;
  c23 = undefined;
  c24 = undefined;
  c25 = undefined;
  c26 = undefined;
  c27 = undefined;
  c28 = undefined;
  c29 = undefined;
  c30 = undefined;
  c31 = undefined;
  c32 = undefined;
  c33 = undefined;
  c34 = undefined;
  c35 = undefined;
  c36 = undefined;
  c37 = undefined;
  c38 = undefined;
  [tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, tmp80, tmp81, tmp82, tmp83, tmp84, tmp85, tmp86, tmp87, tmp88, tmp89, tmp90, tmp91, tmp92, tmp93, tmp94, tmp95, tmp96, tmp97, tmp98, tmp99, tmp100] = items15;
  class VoicePanelCardTsx19 {
    constructor() {
      value = closure_0.get();
      ({ zIndex, width, height, x, y } = value);
      obj = closure_1;
      value1 = closure_1.get();
      id = undefined;
      if (value1 != null) {
        id = value1.id;
      }
      tmp4 = closure_2;
      tmp5 = id === closure_2;
      if (closure_3) {
        tmp9 = closure_4;
        scale = closure_4.scale;
        value2 = scale.get();
        result = closure_4.width * value2;
        height2 = closure_4.height * value2;
        tmp12 = closure_5;
        obj1 = { height: null, containerHeight: null, showSecondaryPIP: null, scale: null };
        ({ height: obj2.height, containerHeight: obj2.containerHeight, showSecondaryPIP: obj2.showSecondaryPIP } = closure_4);
        obj1.scale = value2;
        tmp14 = closure_6;
        size = { pipX: null, pipY: null, width: null, height: null, windowDimensions: null, safeArea: null, bottomAvoidanceRegion: null, topAvoidanceRegion: null };
        tmp15 = closure_7;
        tmp13 = closure_5(obj1);
        size.pipX = closure_7.get().pipX;
        size.pipY = closure_7.get().pipY;
        size.width = result;
        size.height = tmp13;
        tmp16 = closure_8;
        size.windowDimensions = closure_8.get();
        tmp17 = closure_9;
        size.safeArea = closure_9.get();
        tmp18 = closure_10;
        size.bottomAvoidanceRegion = closure_10.get().bottom;
        size.topAvoidanceRegion = closure_10.get().top;
        point = closure_6(size);
        num = point.x;
        tmp19 = closure_11;
        sum = closure_11.get() + point.y;
        width2 = result;
        num2 = zIndex;
      } else if (null != obj.get()) {
        sum = y;
        num = x;
        height2 = height;
        width2 = width;
        num2 = 0;
        if (tmp5) {
          tmp7 = closure_8;
          width2 = closure_8.get().width;
          height2 = closure_8.get().height;
          tmp8 = closure_11;
          sum = closure_11.get();
          num2 = 1;
          num = 0;
        }
      } else {
        tmp46 = closure_12;
        sum1 = x + closure_12.get();
        tmp48 = closure_13;
        obj10 = { contentHeight: null, windowHeight: null, safeArea: null };
        tmp49 = closure_14;
        obj10.contentHeight = closure_14.get().height;
        tmp50 = closure_8;
        obj10.windowHeight = closure_8.get().height;
        tmp51 = closure_9;
        obj10.safeArea = closure_9.get();
        sum2 = y + closure_13(obj10);
        tmp53 = closure_15;
        tmp54 = closure_16;
        sum = sum2;
        num = sum1;
        height2 = height;
        width2 = width;
        num2 = zIndex;
        if (closure_15.get() === closure_16.YEETED) {
          num8 = 4;
          sum = sum2 + height / 4;
          num = sum1;
          height2 = height;
          width2 = width;
          num2 = zIndex;
        }
      }
      obj4 = closure_17;
      if (closure_17.get()) {
        num2 = 9001;
      }
      obj11 = { id: tmp4, mode: closure_19.get(), focused: null, isSelf: null, defaultBorderRadius: null };
      tmp20 = closure_18;
      value3 = obj.get();
      id1 = undefined;
      if (value3 != null) {
        id1 = value3.id;
      }
      obj11.focused = id1;
      obj11.isSelf = closure_20;
      obj11.defaultBorderRadius = closure_21;
      obj6 = closure_22;
      tmp20Result = tmp20(obj11);
      if (0 !== closure_22.get()) {
        num4 = 1;
        num5 = 1;
        if (!tmp5) {
          tmp26 = closure_23;
          num5 = 1;
          if (!closure_23) {
            num5 = closure_24;
          }
        }
        num3 = num5;
      } else {
        value4 = obj.get();
        id2 = undefined;
        if (value4 != null) {
          id2 = value4.id;
        }
        num3 = 0;
      }
      gestureActive = closure_25.get().gestureActive;
      if (1 === obj6.get()) {
        num6 = 1;
      } else {
        value5 = obj.get();
        id3 = undefined;
        if (value5 != null) {
          id3 = value5.id;
        }
        num6 = 0.8;
      }
      tmp29 = closure_26;
      num7 = 100;
      if (obj4.get()) {
        num7 = 0;
      }
      size1 = { zIndex: tmp29(num7, closure_27(num2, closure_28)), opacity: null, width: null, height: null, transform: null, borderRadius: null };
      tmp30 = closure_27;
      tmp31 = closure_29;
      str = "animate-never";
      if (closure_30.get()) {
        str = "animate-always";
      }
      items = [, , , , , ];
      items[0] = closure_31;
      items[1] = obj6;
      items[2] = closure_15;
      items[3] = closure_16;
      items[4] = closure_32;
      items[5] = closure_33;
      [tmp32, tmp33, tmp34, tmp35, tmp36, tmp37] = items;
      class VoicePanelCardTsx18 {
        constructor(arg0) {
          tmp = arg0;
          if (arg0) {
            tmp2 = closure_0;
            num = 0;
            tmp = 0 === closure_0.get();
          }
          if (tmp) {
            tmp3 = closure_1;
            tmp4 = closure_2;
            tmp = closure_1.get() === closure_2.YEETED;
          }
          if (tmp) {
            tmp5 = closure_3;
            tmp6 = closure_4;
            tmp7 = closure_3(closure_4);
          }
          return;
        }
      }
      items1 = [, , , , ];
      items1[0] = tmp33;
      items1[1] = tmp34;
      items1[2] = tmp35;
      items1[3] = tmp36;
      items1[4] = tmp37;
      VoicePanelCardTsx18.__closure = items1;
      VoicePanelCardTsx18.__workletHash = 5099113999013;
      VoicePanelCardTsx18.__initData = tmp32;
      size1.opacity = tmp30(num3, tmp31, str, VoicePanelCardTsx18);
      size1.width = width2;
      size1.height = height2;
      tmp38 = num;
      if (!gestureActive) {
        tmp39 = closure_34;
        tmp38 = num;
        if (!closure_34) {
          tmp40 = closure_35;
          tmp41 = closure_36;
          str2 = "respect-motion-settings";
          tmp38 = closure_35(num, closure_36, "respect-motion-settings");
        }
      }
      items2 = [, , ];
      items2[0] = { translateX: tmp38 };
      tmp42 = sum;
      if (!gestureActive) {
        tmp43 = closure_34;
        tmp42 = sum;
        if (!closure_34) {
          tmp44 = closure_35;
          tmp45 = closure_36;
          str3 = "respect-motion-settings";
          tmp42 = closure_35(sum, closure_36, "respect-motion-settings");
        }
      }
      items2[1] = { translateY: tmp42 };
      obj12 = { scale: closure_35(num6, closure_37) };
      items2[2] = obj12;
      size1.transform = items2;
      size1.borderRadius = closure_35(tmp20Result, closure_38);
      return size1;
    }
  }
  const items16 = [tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, tmp80, tmp81, tmp82, tmp83, tmp84, tmp85, tmp86, tmp87, tmp88, tmp89, tmp90, tmp91, tmp92, tmp93, tmp94, tmp95, tmp96, tmp97, tmp98, tmp99, tmp100];
  VoicePanelCardTsx19.__closure = items16;
  VoicePanelCardTsx19.__workletHash = 9981854611383;
  VoicePanelCardTsx19.__initData = tmp61;
  const animatedStyle = require("module_1655").useAnimatedStyle(VoicePanelCardTsx19);
  const obj4 = {
    gesturesEnabled: tmp34[0],
    longPressProgress,
    onSingleTap() {
      closure_2_11(c0);
      if (_undefined3.get().mode === VoicePanelControlsModes.HIDDEN) {
        _undefined7({ debounce: true });
      } else {
        _undefined5({ debounce: true });
      }
    },
    onDoubleTap: null,
    onLongPress: null
  };
  const tmp6Result18 = require("module_1655");
  const tmpResult = useTapGesturesDefault;
  if (tmp6Result19.isStableActivityParticipant(tmp8)) {
    const fn = () => {
      value = _undefined4.get();
      let id;
      if (value != null) {
        id = value.id;
      }
      if (id !== c0) {
        _undefined6(tmp3);
      } else {
        _undefined6(null);
      }
    };
  } else if (isSelf) {
    const tmp6Result20 = tmp6(19988);
  }
  obj4.onDoubleTap = fn;
  let fn2;
  if (null != id2) {
    fn2 = () => {
      application_id(c0, userId);
      showUserProfileActionSheetDefault({ userId, channelId, isVoiceContext: true, sourceAnalyticsLocations });
    };
  }
  obj4.onLongPress = fn2;
  const items17 = [pipHandoff, id, tmp58];
  tmp6Result19 = require("useStableParticipant");
  const layoutEffect1 = obj.useLayoutEffect(() => {
    _undefined8.syncCardPIPLayout(c0, c11);
  }, items17);
  const items18 = [pipHandoff, id];
  const effect = obj.useEffect(() => () => _undefined8.removeCard(_undefined), items18);
  const tmpResultResult = tmpResult(obj4);
  sharedValue1 = require("module_1655").useSharedValue(0);
  const items19 = [pipHandoff, id];
  callback1 = obj.useCallback(() => _undefined8.setCardArrivedInPIP(c0), items19);
  const items20 = [tmp58, layoutPhysics, sharedValue1, callback1];
  const effect1 = obj.useEffect(() => {
    if (c11) {
      const result = sharedValue1.set(0);
      obj = spring_spring;
      items = [closure_59, _mod1708.scheduleOnRN, callback1];
      c0 = undefined;
      c1 = undefined;
      [tmp9, tmp10, tmp11] = items;
      class VoicePanelCardTsx20 {
        constructor(arg0) {
          if (true === arg0) {
            tmp = closure_0;
            tmp2 = closure_1;
            tmp3 = closure_0(closure_1);
          }
          return;
        }
      }
      const items1 = [tmp10, tmp11];
      VoicePanelCardTsx20.__closure = items1;
      VoicePanelCardTsx20.__workletHash = 1749161961019;
      VoicePanelCardTsx20.__initData = tmp9;
      const result1 = sharedValue1.set(obj.withSpring(1, tmp5, "animate-always", VoicePanelCardTsx20));
      return () => _undefined(c2[16]).cancelAnimation(sharedValue1);
    }
  }, items20);
  ({ thawing, pipCardSize } = pipHandoff.cardThaw);
  const items21 = [closure_60, tmp58, pipCardSize, tmp10, thawing, require("spring/spring").withSpring, layoutPhysics, wrapperOffset];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  noop = undefined;
  c5 = undefined;
  c6 = undefined;
  [tmp109, tmp110, tmp111, tmp112, tmp113, tmp114, tmp115, tmp116] = items21;
  class VoicePanelCardTsx21 {
    constructor(arg0) {
      size = { originX: arg0.currentOriginX, originY: arg0.currentOriginY, width: arg0.currentWidth, height: arg0.currentHeight };
      if (closure_0) {
        tmp = closure_1;
        size1 = { width: null, height: null };
        ({ targetWidth: obj2.width, targetHeight: obj2.height } = arg0);
        result = closure_1.set(size1);
      }
      if (closure_2) {
        str = "animate-never";
      } else {
        tmp3 = closure_3;
        str = "respect-motion-settings";
      }
      obj1 = { animations: null, initialValues: null, callback: null };
      size2 = { originX: closure_4(arg0.targetOriginX, closure_5, str), originY: closure_4(arg0.targetOriginY, closure_5, str), width: closure_4(arg0.targetWidth, closure_5, str), height: closure_4(arg0.targetHeight, closure_5, str) };
      obj1.animations = size2;
      obj1.initialValues = size;
      obj1.callback = function callback() {
        value = _undefined5.get();
        let gestureActive = value.gestureActive;
        if (!gestureActive) {
          gestureActive = 0 === value.y;
        }
        if (!gestureActive) {
          const result = _undefined5.set({ gestureActive: false, x: 0, y: 0 });
        }
      };
      return obj1;
    }
  }
  const items22 = [tmp110, tmp111, tmp112, tmp113, tmp114, tmp115, tmp116];
  VoicePanelCardTsx21.__closure = items22;
  VoicePanelCardTsx21.__workletHash = 7671746057522;
  VoicePanelCardTsx21.__initData = tmp109;
  const items23 = [tmp10, tmp58, layoutPhysics, pipCardSize, thawing, wrapperOffset];
  const callback2 = obj.useCallback(VoicePanelCardTsx21, items23);
  let obj5 = { gesture: tmpResultResult, children: null };
  const obj6 = { nativeID: null, style: null, layout: null, children: null };
  const tmp6Result21 = require("module_1655");
  obj6.nativeID = require("getExternalPipTileNativeId").getExternalPipTileNativeId("card", id);
  const items24 = [tmp3.positionWrapper, animatedStyle];
  obj6.style = items24;
  obj6.layout = callback2;
  obj6.children = children;
  obj5.children = c24(module_1655.View, obj6);
  return c24(require("LegacyBaseButton").GestureDetector, obj5);
}
get_ActivityIndicator = fn(17);
const StyleSheet = get_ActivityIndicator.StyleSheet;
const Pressable = get_ActivityIndicator.Pressable;
const StreamVolumeMovedStore = fn(15763);
({ clearStreamVolumeMovedHint: closure_11, consumeStreamVolumeMovedHint: closure_12 } = StreamVolumeMovedStore);
const VoicePanelConstants = fn(11985);
({ VoicePanelCTACard: map1, VoicePanelModes: closure_14, MODE_CHANGE_PHYSICS: closure_15, SPEAKING_PHYSICS: closure_16, VoicePanelCardItemType: closure_17 } = VoicePanelConstants);
const VoicePanelControlsModes = fn(11983).VoicePanelControlsModes;
let VoicePanelPIPModes = fn(19909).VoicePanelPIPModes;
const EDGE_GUTTER = fn(11988).EDGE_GUTTER;
const ApplicationStreamStates = fn(1072).ApplicationStreamStates;
const ParticipantTypes = fn(5983).ParticipantTypes;
const SCALE_PHYSICS = fn(11986).SCALE_PHYSICS;
const jsxProd = fn(21);
({ jsx: closure_24, Fragment: closure_25, jsxs: closure_26 } = jsxProd);
let module_1655 = module_1655_mod;
let closure_27 = module_1655.createAnimatedComponent(fn(5929).Text);
let module_1655 = module_1655_mod;
const LinearGradient = module_1655.createAnimatedComponent(LinearGradientDefault);
let tmp6 = fn(1187).AVATAR_SIZE_MAP[fn(undefined, 1187).AvatarSizes.XXLARGE];
let obj = {};
let merged = Object.assign(SCALE_PHYSICS);
obj.stiffness = 150;
let closure_30 = { duration: 200 };
let closure_31 = { duration: 0 };
const createStyles = fn(5306);
let obj2 = { positionWrapper: null, userRoundedCard: null, userRoundedCardContent: null, nonUserRoundedCard: null, blackBackground: null, selfStreamFocusedSubtitle: null, avatarImageMaskStyles: null, avatarPlaceholder: null, image: null, speakingIndicatorWrapper: null, speakingIndicatorClip: null, speakingIndicatorUnderlay: null, speakingIndicatorBar: null };
const rect = { position: "absolute", top: 0, left: 0, overflow: "hidden", backgroundColor: nativeDefault.colors.BLACK };
obj2.positionWrapper = rect;
obj2.userRoundedCard = { position: "absolute", top: -4, left: -4, bottom: -4, right: -4 };
let obj3 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj3.alignItems = "center";
obj3.justifyContent = "center";
obj3.backgroundColor = nativeDefault.unsafe_rawColors.PRIMARY_800;
obj2.userRoundedCardContent = obj3;
let size = { position: "absolute", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", backgroundColor: nativeDefault.colors.VOICE_VIDEO_VIDEO_TILE_BACKGROUND };
obj2.nonUserRoundedCard = size;
let obj4 = {};
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj4.backgroundColor = "black";
obj2.blackBackground = obj4;
obj2.selfStreamFocusedSubtitle = { textAlign: "center", marginTop: 4, marginBottom: 40 };
obj2.avatarImageMaskStyles = { position: "relative", borderRadius: nativeDefault.radii.round, overflow: "hidden" };
let size1 = { width: tmp6, height: tmp6, borderRadius: nativeDefault.radii.round, backgroundColor: "rgba(0,0,0,0.3)" };
obj2.avatarPlaceholder = size1;
obj2.image = { maxWidth: 80, maxHeight: 80 };
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj2.speakingIndicatorWrapper = {};
let obj8 = {};
const merged4 = Object.assign(StyleSheet.absoluteFillObject);
obj8.overflow = "hidden";
obj2.speakingIndicatorClip = obj8;
let obj9 = {};
const merged5 = Object.assign(StyleSheet.absoluteFillObject);
obj9.borderColor = nativeDefault.colors.BLACK;
obj2.speakingIndicatorUnderlay = obj9;
let obj10 = {};
const merged6 = Object.assign(StyleSheet.absoluteFillObject);
obj10.borderColor = nativeDefault.colors.STATUS_SPEAKING;
obj2.speakingIndicatorBar = obj10;
let closure_32 = createStyles.createStyles(obj2);
let closure_33 = { code: "(function VoicePanelCardTsx1(){let[isFocused,sharedCoords]=this.__closure;return{textAlign:'center',paddingHorizontal:16,paddingVertical:isFocused?0:16,width:isFocused?'auto':sharedCoords.get().width};})" };
let closure_35 = { code: "(function VoicePanelCardTsx2(){let[focused,id]=this.__closure;var _focused$get;return((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;})" };
let closure_36 = { code: "(function VoicePanelCardTsx3(isFocused,lastIsFocused){let[scheduleOnRN,setIsFocused]=this.__closure;if(isFocused!==lastIsFocused){scheduleOnRN(setIsFocused,isFocused);}})" };
let closure_37 = noop.memo(function AnimatedStreamCard(arg0) {
  ({ id, userId } = arg0);
  _require = userId;
  ({ streamId, streamGuildId } = arg0);
  importDefault = streamGuildId;
  ({ sharedCoords, layout } = arg0);
  let setFocused;
  ({ userNick, isSelf, isScrollVisible, longPressProgress } = arg0);
  const context = noop.useContext(require("VoicePanelStateContext"));
  setFocused = context.setFocused;
  ({ focused, mode } = context);
  items = [ApplicationStreamingStore];
  const items1 = [userId, streamGuildId];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => ({ stream: ApplicationStreamingStore.getStreamForUser(c0, c1), activeStream: ApplicationStreamingStore.getActiveStreamForUser(c0, c1) }), items1);
  const stream = stateFromStoresObject.stream;
  const activeStream = stateFromStoresObject.activeStream;
  const items2 = [stream, setFocused];
  const callback = noop.useCallback(() => {
    if (null != stream) {
      StreamActionCreators.watchStream(stream, { forceMultiple: true });
      setFocused(StreamKeyUtils.encodeStreamKey(stream));
    }
  }, items2);
  obj = require("initialize");
  [tmp8, tmp9] = stream(noop.useState(false), 2);
  const tmp7 = stream(noop.useState(false), 2);
  const items3 = [closure_35, focused, id];
  _require = undefined;
  importDefault = undefined;
  [tmp10, tmp11, tmp12] = items3;
  class VoicePanelCardTsx2 {
    constructor() {
      value = closure_0.get();
      id = undefined;
      if (value != null) {
        id = value.id;
      }
      return id === closure_1;
    }
  }
  const items4 = [tmp11, tmp12];
  VoicePanelCardTsx2.__closure = items4;
  VoicePanelCardTsx2.__workletHash = 10075488097657;
  VoicePanelCardTsx2.__initData = tmp10;
  const items5 = [closure_36, require("module_1708").scheduleOnRN, tmp9];
  _require = undefined;
  importDefault = undefined;
  [tmp13, tmp14, tmp15] = items5;
  class VoicePanelCardTsx3 {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        tmp = closure_0;
        tmp2 = closure_1;
        tmp3 = closure_0(closure_1, arg0);
      }
      return;
    }
  }
  const items6 = [tmp14, tmp15];
  VoicePanelCardTsx3.__closure = items6;
  VoicePanelCardTsx3.__workletHash = 10405109597495;
  VoicePanelCardTsx3.__initData = tmp13;
  const animatedReaction = require("module_1655").useAnimatedReaction(VoicePanelCardTsx2, VoicePanelCardTsx3);
  let obj2 = require("module_1655");
  const tmpResultResult = require("useVideoStreamError")(require("BaseConnectionEvent").MediaEngineContextTypes.STREAM, userId);
  if (isSelf) {
    const obj3 = { sharedCoords, stream, isFocused: tmp8 };
    return closure_24(SelfStreamCard, obj3);
  } else if (null == activeStream) {
    const obj4 = { mode, stream, onPress: callback, disabled: false, layout };
    return closure_24(tmp4(tmp2[32]).VoicePanelStreamPreview, obj4);
  } else {
    if (null == tmpResultResult) {
      if (activeStream.state !== ApplicationStreamStates.FAILED) {
        if (activeStream.state === ApplicationStreamStates.ENDED) {
          const obj5 = { stream: activeStream, removeSplashImage: !tmp8, type: tmp4(tmp2[33]).VideoEmptyTypes.STREAM_ENDED, style: StyleSheet.absoluteFill };
          return closure_24(tmp(tmp2[33]), obj5);
        } else {
          if (activeStream.state === ApplicationStreamStates.RECONNECTING) {
            const obj6 = { title: null };
            const intl = tmp4(tmp2[26]).intl;
            obj6.title = intl.string(tmp4(tmp2[26]).t["pdFFK+"]);
            let tmp21 = closure_24(tmp4(tmp2[34]).StreamTextOverlay, obj6);
          } else {
            tmp21 = null;
            if (activeStream.state === ApplicationStreamStates.PAUSED) {
              const obj7 = { title: null, subtext: null };
              const intl2 = tmp4(tmp2[26]).intl;
              obj7.title = intl2.string(tmp4(tmp2[26]).t["5q17w5"]);
              const intl3 = tmp4(tmp2[26]).intl;
              const obj8 = { username: userNick };
              obj7.subtext = intl3.formatToPlainString(tmp4(tmp2[26]).t.meVVlb, obj8);
              tmp21 = closure_24(tmp4(tmp2[34]).StreamTextOverlay, obj7);
            }
          }
          const obj9 = { layout, id, streamId: null, userId: null, streamKey: null, isScrollVisible: null, videoSpinnerContext: null, sharedCoords: null, isCamera: false, paused: null };
          if (streamId == null) {
            streamId = null;
          }
          const obj10 = { children: null };
          obj9.streamId = streamId;
          obj9.userId = userId;
          const tmpResult5 = tmp(tmp2[35]);
          obj9.streamKey = tmp4(tmp2[24]).encodeStreamKey(activeStream);
          obj9.isScrollVisible = isScrollVisible;
          obj9.videoSpinnerContext = tmp4(tmp2[36]).VideoSpinnerContext.REMOTE_STREAM;
          obj9.sharedCoords = sharedCoords;
          obj9.paused = activeStream.state === ApplicationStreamStates.PAUSED;
          const items7 = [closure_24(tmpResult5, obj9), tmp21, ];
          const obj11 = { streamKey: id, longPressProgress };
          items7[2] = closure_24(tmp(tmp2[37]), obj11);
          obj10.children = items7;
          return closure_26(closure_25, obj10);
        }
      }
    }
    const obj12 = { avError: tmpResultResult, stream: activeStream, removeSplashImage: !tmp8, type: tmp4(tmp2[33]).VideoEmptyTypes.STREAM_FAILED, style: StyleSheet.absoluteFill };
    return closure_24(tmp(tmp2[33]), obj12);
  }
  const tmpResult = require("useVideoStreamError");
});
let closure_38 = { code: "(function VoicePanelCardTsx4(){let[isDockEnabled,mode,VoicePanelModes]=this.__closure;return isDockEnabled&&mode.get()===VoicePanelModes.PIP?VoicePanelModes.PANEL:mode.get();})" };
let closure_40 = { code: "(function VoicePanelCardTsx5(){let[withTiming,isRinging,CONNECTING_OPACITY,backgroundColor]=this.__closure;return{opacity:withTiming(isRinging?CONNECTING_OPACITY:1,{duration:100},'animate-always'),backgroundColor:backgroundColor};})" };
let closure_41 = { code: "(function VoicePanelCardTsx6(){let[withSpring,mode,VoicePanelModes,layoutPhysics]=this.__closure;return{transform:[{scale:withSpring(mode.get()===VoicePanelModes.PIP?64/80:1,layoutPhysics)}]};})" };
let closure_42 = noop.memo(function AnimatedUserCardInner(guildId) {
  ({ layout, avatarURI, avatarDecoration, userId } = guildId);
  _require = userId;
  guildId = guildId.guildId;
  importDefault = guildId;
  const channelId = guildId.channelId;
  dependencyMap = channelId;
  ({ isRinging, layoutPhysics } = guildId);
  const tmp = closure_32();
  const controlsSpecs = noop.useContext(VoicePanelStateContextDefault).controlsSpecs;
  c3 = controlsSpecs;
  const tmp5 = useUserTileBackgroundDefault({ userId, guildId, avatarURI, location: "VoicePanelCard-native" });
  const gradientStops = tmp5.gradientStops;
  const MobileRequestToStreamExperiment = require("MobileRequestToStreamExperiment").MobileRequestToStreamExperiment;
  let guildId2 = guildId;
  if (guildId == null) {
    guildId2 = "";
  }
  const tmp4 = useCardPanelMode();
  items = [closure_40, require("timing/timing").withTiming, isRinging, 0.75, tmp5.backgroundColor];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  [tmp7, tmp8, tmp9, tmp10, tmp11] = items;
  class VoicePanelCardTsx5 {
    constructor() {
      num = 1;
      tmp = closure_0;
      if (closure_1) {
        num = closure_2;
      }
      obj = { opacity: tmp(num, { duration: 100 }, "animate-always"), backgroundColor: closure_3 };
      return obj;
    }
  }
  const items1 = [tmp8, tmp9, tmp10, tmp11];
  VoicePanelCardTsx5.__closure = items1;
  VoicePanelCardTsx5.__workletHash = 3534867939077;
  VoicePanelCardTsx5.__initData = tmp7;
  const animatedStyle = require("module_1655").useAnimatedStyle(VoicePanelCardTsx5);
  const tmp6Result = require("module_1655");
  const items2 = [closure_41, require("spring/spring").withSpring, tmp4, closure_14, layoutPhysics];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  [tmp13, tmp14, tmp15, tmp16, tmp17] = items2;
  class VoicePanelCardTsx6 {
    constructor() {
      tmp = closure_0;
      num = 1;
      if (closure_1.get() === closure_2.PIP) {
        num = 0.8;
      }
      obj = { transform: null };
      obj1 = { scale: tmp(num, closure_3) };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items3 = [tmp14, tmp15, tmp16, tmp17];
  VoicePanelCardTsx6.__closure = items3;
  VoicePanelCardTsx6.__workletHash = 9535486944330;
  VoicePanelCardTsx6.__initData = tmp13;
  let cachedSourceFromURI;
  const animatedStyle1 = require("module_1655").useAnimatedStyle(VoicePanelCardTsx6);
  if (null != avatarURI) {
    cachedSourceFromURI = tmp6(9516).getCachedSourceFromURI(avatarURI);
    const tmp6Result4 = tmp6(9516);
  }
  const items4 = [guildId, channelId, userId, controlsSpecs];
  const callback = noop.useCallback(() => {
    let tmp2 = null != c1;
    if (tmp2) {
      tmp2 = null != c2;
    }
    if (tmp2) {
      tmp2 = null != c0;
    }
    if (tmp2) {
      tmp2 = backgroundColor.get().mode !== VoicePanelControlsModes.HIDDEN;
    }
    if (tmp2) {
      const result = VoicePanelUserActionCreators.openVoicePanelUserActionSheet(c1, c2, c0);
    }
  }, items4);
  if (null != avatarDecoration) {
    const obj2 = { source: cachedSourceFromURI, size: tmp6(1187).AvatarSizes.XXLARGE, avatarDecoration };
    let tmp21Result = closure_24(tmp6(1187).Avatar, obj2);
    let tmp25 = closure_24;
  } else {
    const size = { source: cachedSourceFromURI, resizeMode: "stretch", width: 80, height: 80, style: tmp.image };
    tmp21Result = closure_24(tmp2(6020), size);
    tmp25 = closure_24;
    const tmp2Result = tmp2(6020);
  }
  const obj3 = { style: tmp.userRoundedCard, layout, children: null };
  const obj4 = { style: null, layout, children: null };
  const items5 = [tmp.userRoundedCardContent, animatedStyle];
  obj4.style = items5;
  let tmp25Result = null;
  if (null != gradientStops) {
    const obj5 = { colors: gradientStops, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, style: StyleSheet.absoluteFill, layout, pointerEvents: "none" };
    tmp25Result = tmp25(LinearGradient, obj5);
  }
  const items6 = [tmp25Result, ];
  if (null == cachedSourceFromURI) {
    const obj6 = { style: tmp.avatarPlaceholder };
    let tmp25Result3 = tmp25(tmp2(7722), obj6);
  } else {
    const obj7 = { layout, children: null };
    let prop;
    if (null == avatarDecoration) {
      prop = tmp.avatarImageMaskStyles;
    }
    const obj8 = { style: null, children: null };
    const items7 = [prop, animatedStyle1];
    obj8.style = items7;
    let tmp25Result4 = tmp21Result;
    if (MobileRequestToStreamExperiment.useConfig({ guildId: guildId2, location: "VoicePanelCard" }).enabled) {
      const obj9 = { onPress: callback, children: tmp21Result };
      tmp25Result4 = tmp25(Pressable, obj9);
    }
    obj8.children = tmp25Result4;
    obj7.children = tmp25(tmp2(1655).View, obj8);
    tmp25Result3 = tmp25(tmp2(1655).View, obj7);
  }
  items6[1] = tmp25Result3;
  obj4.children = items6;
  obj3.children = closure_26(module_1655.View, obj4);
  return tmp25(module_1655.View, obj3);
});
let closure_43 = { code: "(function VoicePanelCardTsx7(){let[mode,VoicePanelModes,focused,id,withSpring,computeCardBorderRadius,isSelf,defaultBorderRadius,SPEAKING_PHYSICS]=this.__closure;var _focused$get,_focused$get2;const disable=mode.get()!==VoicePanelModes.PIP&&((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;return{opacity:disable?0:1,borderRadius:withSpring(disable?0:computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius}),SPEAKING_PHYSICS,!disable?'animate-always':'animate-never')};})" };
let closure_44 = { code: "(function VoicePanelCardTsx8(){let[mode,VoicePanelModes,focused,id,withSpring,computeCardBorderRadius,isSelf,defaultBorderRadius,SPEAKING_PHYSICS,speakingOrPlayingSoundboard,roundToNearestPixel,SPEAKING_BORDER_SIZE,SPEAKING_INSET]=this.__closure;var _focused$get,_focused$get2;const disable=mode.get()===VoicePanelModes.PIP||((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;return{borderRadius:withSpring(!disable?computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius}):0,SPEAKING_PHYSICS,!disable?'animate-always':'animate-never'),borderWidth:withSpring(!disable&&speakingOrPlayingSoundboard.get()?roundToNearestPixel(SPEAKING_BORDER_SIZE+SPEAKING_INSET):0,SPEAKING_PHYSICS,!disable?'animate-always':'animate-never')};})" };
let closure_45 = { code: "(function VoicePanelCardTsx9(){let[mode,VoicePanelModes,focused,id,withSpring,computeCardBorderRadius,isSelf,defaultBorderRadius,SPEAKING_PHYSICS,speakingOrPlayingSoundboard,SPEAKING_BORDER_SIZE]=this.__closure;var _focused$get,_focused$get2;const disable=mode.get()===VoicePanelModes.PIP||((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;return{borderRadius:withSpring(!disable?computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius}):0,SPEAKING_PHYSICS,!disable?'animate-always':'animate-never'),borderWidth:withSpring(!disable&&speakingOrPlayingSoundboard.get()?SPEAKING_BORDER_SIZE:0,SPEAKING_PHYSICS,!disable?'animate-always':'animate-never')};})" };
let closure_47 = noop.memo(function LazySpeakingIndicator(id) {
  const tmp = id(noop.useState(() => {
    let isSpeakingResult = SpeakingStore.isSpeaking(id.id);
    if (!isSpeakingResult) {
      isSpeakingResult = SoundboardStore.isUserPlayingSounds(id.id);
    }
    return isSpeakingResult;
  }), 2);
  const first = tmp[0];
  closure_2 = tmp[1];
  id = id.id;
  items = [first, id];
  const effect = noop.useEffect(() => {
    if (!first) {
      const result = SpeakingStore.addConditionalChangeListener(() => {
        const isSpeakingResult = speaking.isSpeaking(id);
        let flag = !isSpeakingResult;
        if (isSpeakingResult) {
          closure_1_2(true);
          flag = false;
        }
        return flag;
      }, false);
      const result1 = SoundboardStore.addConditionalChangeListener(() => {
        const isUserPlayingSoundsResult = userPlayingSounds.isUserPlayingSounds(id);
        let flag = !isUserPlayingSoundsResult;
        if (isUserPlayingSoundsResult) {
          closure_1_2(true);
          flag = false;
        }
        return flag;
      }, false);
    }
  }, items);
  let tmp4 = null;
  if (first) {
    obj = {};
    const merged = Object.assign(id);
    tmp4 = closure_24(SpeakingIndicator, obj);
  }
  return tmp4;
});
let closure_48 = { code: "(function VoicePanelCardTsx10(){let[focused]=this.__closure;var _focused$get;return(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id;})" };
let closure_49 = { code: "(function VoicePanelCardTsx11(focusedId,previous){let[scheduleOnRN,handleFocusedParticipantChange]=this.__closure;if(focusedId===previous)return;scheduleOnRN(handleFocusedParticipantChange,focusedId);})" };
let closure_50 = { code: "(function VoicePanelCardTsx12(){let[mode,focused,sharedTransitionState]=this.__closure;return{mode:mode.get(),focused:focused.get(),transitionState:sharedTransitionState.get()};})" };
let closure_51 = { code: "(function VoicePanelCardTsx13(props,previous){let[cheapWorkletShallowEqual,VoicePanelModes,TransitionStates,sharedVisible,isScrollVisible,scheduleOnRN,cleanUp,id]=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{mode:mode,focused:focused,transitionState:transitionState}=props;const isPIPMode=mode===VoicePanelModes.PIP;const manuallyFocusedId=focused===null||focused===void 0?void 0:focused.id;if(previous==null&&transitionState!==TransitionStates.YEETED){sharedVisible.set(1);}else if(transitionState===TransitionStates.YEETED){if(sharedVisible.get()===1&&isScrollVisible.get()){sharedVisible.set(0);}else{scheduleOnRN(cleanUp);}}else if((previous===null||previous===void 0?void 0:previous.transitionState)===TransitionStates.YEETED){sharedVisible.set(1);}else if(!isPIPMode){if(manuallyFocusedId==null){sharedVisible.set(1);}else{if(manuallyFocusedId!==id){sharedVisible.set(0);}else{sharedVisible.set(1);}}}})" };
let closure_52 = { isSelf: false, hasVideo: false, user: { id: "r" } };
let items = [{ code: "(function layoutTransitionFunction_VoicePanelCardTsx14(values,physics,disableAnimation=false){let[withSpring]=this.__closure;const shouldAnimate=!disableAnimation?'respect-motion-settings':'animate-never';return{animations:{originX:withSpring(values.targetOriginX,physics,shouldAnimate),originY:withSpring(values.targetOriginY,physics,shouldAnimate),width:withSpring(values.targetWidth,physics,shouldAnimate),height:withSpring(values.targetHeight,physics,shouldAnimate)},initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight}};})" }, fn(5939).withSpring];
let closure_129_0;
[tmp14, tmp15] = items;
function layoutTransitionFunction(originX, arg1) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  let str = "respect-motion-settings";
  if (flag) {
    str = "animate-never";
  }
  obj = { animations: null, initialValues: null };
  const size = { originX: require(originX.targetOriginX, arg1, str), originY: require(originX.targetOriginY, arg1, str), width: require(originX.targetWidth, arg1, str), height: require(originX.targetHeight, arg1, str) };
  obj.animations = size;
  obj.initialValues = { originX: originX.currentOriginX, originY: originX.currentOriginY, width: originX.currentWidth, height: originX.currentHeight };
  return obj;
}
let items1 = [tmp15];
layoutTransitionFunction.__closure = items1;
layoutTransitionFunction.__workletHash = 8511050440717;
layoutTransitionFunction.__initData = tmp14;
let closure_54 = { code: "(function VoicePanelCardTsx15(){let[id,pipState,mode,VoicePanelModes]=this.__closure;if(id===pipState.id&&mode.get()===VoicePanelModes.PIP){return true;}return false;})" };
let closure_55 = { code: "(function VoicePanelCardTsx16(){let[focused,id,mode,VoicePanelModes,scrollPosition]=this.__closure;var _focused$get;return((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id||mode.get()===VoicePanelModes.PIP?scrollPosition.get():0;})" };
let closure_56 = { code: "(function VoicePanelCardTsx17(){let[connected,EDGE_GUTTER,safeArea,windowDimensions,contentDimensions,wrapperDimensions]=this.__closure;return connected.get()?Math.max(EDGE_GUTTER,safeArea.get().left,(windowDimensions.get().width-contentDimensions.get().width)/2):wrapperDimensions.get().drawerWidth/2;})" };
let closure_57 = { code: "(function VoicePanelCardTsx18(finished){let[sharedVisible,sharedTransitionState,TransitionStates,scheduleOnRN,cleanUp]=this.__closure;if(finished&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){scheduleOnRN(cleanUp);}})" };
let closure_58 = { code: "(function VoicePanelCardTsx19(){let[coords,focused,id,isPIP,pipState,getScaledPIPContainerHeight,getClampedPIPPosition,wrapperDimensions,windowDimensions,safeArea,pipAvoidanceSpecs,derivedScrollValue,xOffset,calculateContentCenterOffset,contentDimensions,sharedTransitionState,TransitionStates,zIndexOverride,computeCardBorderRadius,mode,isSelf,defaultBorderRadius,sharedVisible,isRTCConnected,CONNECTING_OPACITY,wrapperOffset,withDelay,withTiming,ZINDEX_TIMING,OPACITY_TIMING,isScrollVisible,_worklet_5099113999013_init_data,scheduleOnRN,cleanUp,holdPosition,withSpring,layoutPhysics,CARD_SCALE_PHYSICS,SCALE_PHYSICS]=this.__closure;var _focused$get,_focused$get2,_focused$get3,_focused$get4;let{zIndex:zIndex,width:width,height:height,x:x,y:y}=coords.get();const isFocused=((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;if(isPIP){const pipScale=pipState.scale.get();width=pipState.width*pipScale;height=pipState.height*pipScale;const pipHeight=getScaledPIPContainerHeight({height:pipState.height,containerHeight:pipState.containerHeight,showSecondaryPIP:pipState.showSecondaryPIP,scale:pipScale});const pipPosition=getClampedPIPPosition({pipX:wrapperDimensions.get().pipX,pipY:wrapperDimensions.get().pipY,width:width,height:pipHeight,windowDimensions:windowDimensions.get(),safeArea:safeArea.get(),bottomAvoidanceRegion:pipAvoidanceSpecs.get().bottom,topAvoidanceRegion:pipAvoidanceSpecs.get().top});x=pipPosition.x;y=derivedScrollValue.get()+pipPosition.y;}else if(focused.get()!=null){if(isFocused){zIndex=1;width=windowDimensions.get().width;height=windowDimensions.get().height;x=0;y=derivedScrollValue.get();}else{zIndex=0;}}else{x+=xOffset.get();y+=calculateContentCenterOffset({contentHeight:contentDimensions.get().height,windowHeight:windowDimensions.get().height,safeArea:safeArea.get()});if(sharedTransitionState.get()===TransitionStates.YEETED){y+=height/4;}}if(zIndexOverride.get()){zIndex=9001;}const borderRadius=computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius});const opacity=sharedVisible.get()===0&&((_focused$get3=focused.get())===null||_focused$get3===void 0?void 0:_focused$get3.id)!==id?0:!isFocused&&!isRTCConnected?CONNECTING_OPACITY:1;const gestureActive=wrapperOffset.get().gestureActive;const scaleTarget=sharedVisible.get()===1||((_focused$get4=focused.get())===null||_focused$get4===void 0?void 0:_focused$get4.id)===id?1:0.8;return{zIndex:withDelay(zIndexOverride.get()?0:100,withTiming(zIndex,ZINDEX_TIMING)),opacity:withTiming(opacity,OPACITY_TIMING,isScrollVisible.get()?'animate-always':'animate-never',function VoicePanelCardTsx18Factory([_worklet_5099113999013_init_data,sharedVisible,sharedTransitionState,TransitionStates,scheduleOnRN,cleanUp]){const VoicePanelCardTsx18=function(finished){if(finished&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){scheduleOnRN(cleanUp);}};VoicePanelCardTsx18.__closure=[sharedVisible,sharedTransitionState,TransitionStates,scheduleOnRN,cleanUp];VoicePanelCardTsx18.__workletHash=5099113999013;VoicePanelCardTsx18.__initData=_worklet_5099113999013_init_data;return VoicePanelCardTsx18;}([_worklet_5099113999013_init_data,sharedVisible,sharedTransitionState,TransitionStates,scheduleOnRN,cleanUp])),width:width,height:height,transform:[{translateX:gestureActive||holdPosition?x:withSpring(x,layoutPhysics,'respect-motion-settings')},{translateY:gestureActive||holdPosition?y:withSpring(y,layoutPhysics,'respect-motion-settings')},{scale:withSpring(scaleTarget,CARD_SCALE_PHYSICS)}],borderRadius:withSpring(borderRadius,SCALE_PHYSICS)};})" };
let closure_59 = { code: "(function VoicePanelCardTsx20(finished){let[scheduleOnRN,reportPIPArrival]=this.__closure;if(finished===true){scheduleOnRN(reportPIPArrival);}})" };
let closure_60 = { code: "(function VoicePanelCardTsx21(values){let[isPIP,pipCardSize,holdPosition,thawing,withSpring,layoutPhysics,wrapperOffset]=this.__closure;const initialValues={originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight};if(isPIP){pipCardSize.set({width:values.targetWidth,height:values.targetHeight});}const motion=holdPosition||thawing.get()?'animate-never':'respect-motion-settings';return{animations:{originX:withSpring(values.targetOriginX,layoutPhysics,motion),originY:withSpring(values.targetOriginY,layoutPhysics,motion),width:withSpring(values.targetWidth,layoutPhysics,motion),height:withSpring(values.targetHeight,layoutPhysics,motion)},initialValues:initialValues,callback:function(){const _wrapperOffset=wrapperOffset.get();if(!_wrapperOffset.gestureActive&&_wrapperOffset.y!==0){wrapperOffset.set({gestureActive:false,x:0,y:0});}}};})" };
let closure_62 = { code: "(function VoicePanelCardTsx22(){let[EDGE_GUTTER,coords,scrollPosition,windowDimensions]=this.__closure;const yPos=EDGE_GUTTER+coords.get().y;return yPos>scrollPosition.get()-coords.get().height&&yPos<scrollPosition.get()+windowDimensions.get().height;})" };
let closure_63 = { code: "(function VoicePanelCardTsx23(values,disableAnimation=false){let[layoutTransitionFunction,physics,holdPosition,thawing]=this.__closure;return layoutTransitionFunction(values,physics,disableAnimation||holdPosition||thawing.get());})" };
let obj6 = { position: "relative", borderRadius: nativeDefault.radii.round, overflow: "hidden" };
let obj7 = {};
size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/card/VoicePanelCard.tsx");

export default noop.memo(function VoicePanelCard(cleanUp) {
  ({ item, transitionState } = cleanUp);
  _require = undefined;
  importDefault = undefined;
  const id = item.id;
  const context = noop.useContext(VoicePanelStateContextDefault);
  ({ channelId, guildId, isCall, isDockEnabled, mountedCards } = context);
  const thawing = context.pipHandoff.cardThaw.thawing;
  ({ layoutManager, scrollPosition, windowDimensions } = context);
  const sharedValue = require("module_1655").useSharedValue(0);
  const tmp6 = useStableParticipantDefault(id, channelId, guildId);
  const obj2 = require("module_1655");
  let tmp7 = tmp6;
  if (!obj3.isStableParticipantWithUser(tmp6)) {
    tmp7 = closure_52;
  }
  isSelf = tmp7.isSelf;
  const id2 = tmp7.user.id;
  _require = id2;
  obj3 = require("useStableParticipant");
  items = [RTCConnectionStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => connected.isConnected());
  const tmp4Result = require("initialize");
  const tmp9 = require("useStableParticipant").isStableUserParticipant(tmp6) && tmp6.ringing;
  let str = "";
  if (null != tmp6) {
    str = "";
    if ("user" in tmp6) {
      str = tmp6.user.id;
    }
  }
  let type1;
  const tmp4Result8 = require("useStableParticipant");
  if (tmp6 != null) {
    type1 = tmp6.type;
  }
  if (type1 === ParticipantTypes.STREAM) {
    let DEFAULT = tmp4(6096).MediaEngineContextTypes.STREAM;
  } else {
    DEFAULT = tmp4(6096).MediaEngineContextTypes.DEFAULT;
  }
  const tmpResultResult = useVideoStreamErrorDefault(DEFAULT, str);
  useCameraEncodeErrorDefault(str);
  const tmpResult = useVideoStreamErrorDefault;
  if (transitionState === require("native").TransitionStates.MOUNTED) {
    let num = 1;
  } else {
    num = 0;
  }
  const sharedValue1 = require("module_1655").useSharedValue(num);
  const tmp4Result9 = require("module_1655");
  let tmp16 = null != id2;
  if (tmp16) {
    let isSpeakingResult = SpeakingStore.isSpeaking(id2);
    if (!isSpeakingResult) {
      isSpeakingResult = SoundboardStore.isUserPlayingSounds(id2);
    }
    tmp16 = isSpeakingResult;
  }
  const sharedValue2 = require("module_1655").useSharedValue(tmp16);
  const items1 = [id2, sharedValue2];
  const layoutEffect = noop.useLayoutEffect(() => {
    function handleChange() {
      let tmp3 = null != handleChange;
      if (tmp3) {
        let isSpeakingResult = SpeakingStore.isSpeaking(handleChange);
        if (!isSpeakingResult) {
          isSpeakingResult = defaultBorderRadius.isUserPlayingSounds(handleChange);
        }
        tmp3 = isSpeakingResult;
      }
      const result = _undefined.set(tmp3);
    }
    let tmp3 = null != handleChange;
    if (tmp3) {
      let isSpeakingResult = SpeakingStore.isSpeaking(tmp2);
      if (!isSpeakingResult) {
        isSpeakingResult = defaultBorderRadius.isUserPlayingSounds(tmp2);
      }
      tmp3 = isSpeakingResult;
    }
    let result = _undefined.set(tmp3);
    let result1 = SpeakingStore.addReactChangeListener(handleChange);
    const result2 = defaultBorderRadius.addReactChangeListener(handleChange);
    return () => {
      const result = SpeakingStore.removeReactChangeListener(handleChange);
      const result1 = SoundboardStore.removeReactChangeListener(handleChange);
    };
  }, items1);
  const tmp4Result10 = require("module_1655");
  const cardLayoutCoordsSubscription = require("VoicePanelCardLayoutManager").useCardLayoutCoordsSubscription(id, layoutManager);
  const tmp4Result11 = require("VoicePanelCardLayoutManager");
  const items2 = [closure_62, EDGE_GUTTER, cardLayoutCoordsSubscription, scrollPosition, windowDimensions];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  [tmp23, tmp24, tmp25, tmp26, tmp27] = items2;
  class VoicePanelCardTsx22 {
    constructor() {
      sum = closure_0 + closure_1.get().y;
      obj = closure_2;
      value = closure_2.get();
      tmp3 = sum > value - closure_1.get().height;
      if (tmp3) {
        tmp5 = closure_3;
        value1 = obj.get();
        tmp3 = sum < value1 + closure_3.get().height;
      }
      return tmp3;
    }
  }
  const items3 = [tmp24, tmp25, tmp26, tmp27];
  VoicePanelCardTsx22.__closure = items3;
  VoicePanelCardTsx22.__workletHash = 8849523770324;
  VoicePanelCardTsx22.__initData = tmp23;
  const derivedValue = require("module_1655").useDerivedValue(VoicePanelCardTsx22);
  if (isDockEnabled) {
    isDockEnabled = !stateFromStores;
  }
  const memo = noop.useMemo(() => ({ mass: closure_1_15.mass, damping: _undefined(_undefined2[61])(closure_1_15.damping - 2, closure_1_15.damping + 2), stiffness: _undefined(_undefined2[61])(closure_1_15.stiffness - 20, closure_1_15.stiffness + 20) }), []);
  const items4 = [closure_63, layoutTransitionFunction, memo, isDockEnabled, thawing];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  [tmp30, tmp31, tmp32, tmp33, tmp34] = items4;
  class VoicePanelCardTsx23 {
    constructor(arg0) {
      flag = arg1;
      if (arg1 === undefined) {
        flag = false;
      }
      tmp = closure_0;
      tmp2 = closure_1;
      if (!flag) {
        flag = closure_2;
      }
      if (!flag) {
        tmp3 = closure_3;
        flag = closure_3.get();
      }
      return tmp(cleanUp, tmp2, flag);
    }
  }
  const items5 = [tmp31, tmp32, tmp33, tmp34];
  VoicePanelCardTsx23.__closure = items5;
  VoicePanelCardTsx23.__workletHash = 5615584998884;
  VoicePanelCardTsx23.__initData = tmp30;
  const items6 = [isDockEnabled, memo, thawing];
  const callback = noop.useCallback(VoicePanelCardTsx23, items6);
  if (item.type === closure_17.CTA) {
    const id3 = item.id;
    if (closure_13.NO_VIDEO_PARTICIPANTS === id3) {
      let tmp41Result = closure_24(tmp(20018), {});
      let tmp39 = closure_24;
    } else if (closure_13.CALLER_DISCONNECTED === id3) {
      tmp41Result = closure_24(tmp(20019), {});
      tmp39 = closure_24;
    } else if (closure_13.NO_STAGE_SPEAKERS === id3) {
      tmp41Result = closure_24(tmp(20020), {});
      tmp39 = closure_24;
    }
    const obj4 = { cleanUp: cleanUp.cleanUp, coords: cardLayoutCoordsSubscription, id, isRTCConnected: stateFromStores, isScrollVisible: derivedValue, layoutPhysics: memo, transitionState, sharedVisible: sharedValue1, longPressProgress: sharedValue, children: null };
    const items7 = [tmp41Result, , ];
    let tmp39Result = null != tmp6;
    if (tmp39Result) {
      const obj5 = { isRinging: tmp9, participant: tmp6, label: null, layout: null };
      const tmpResult3 = tmp(20032);
      let userNick;
      if (tmp4Result13.isStableParticipantWithUser(tmp6)) {
        userNick = tmp6.userNick;
      }
      obj5.label = userNick;
      obj5.layout = callback;
      tmp39Result = tmp39(tmpResult3, obj5);
      tmp4Result13 = tmp4(19988);
    }
    items7[1] = tmp39Result;
    let result = tmp4(19988).isStableParticipantWithUser(tmp6);
    if (result) {
      const obj6 = { speakingOrPlayingSoundboard: sharedValue2, id, userId: tmp6.user.id, isSelf, layout: callback };
      result = tmp39(closure_47, obj6);
    }
    items7[2] = result;
    obj4.children = items7;
    return closure_26(AnimatedWrapper, obj4);
  } else if (null != tmp6) {
    const type = item.type;
    const type2 = tmp6.type;
    if (ParticipantTypes.USER === type2) {
      ({ streamId, user } = tmp6);
      if (tmp6.hasVideo) {
        if (stateFromStores) {
          if (tmp6.canRenderVideo) {
            if (null == tmpResultResult) {
              let tmp43 = closure_24;
              const obj7 = { id: tmp40, userId: user.id, streamId: null, isScrollVisible: null, videoSpinnerContext: null, sharedCoords: null, isCamera: true, focusOnReady: null, layout: null };
              if (streamId == null) {
                streamId = null;
              }
              obj7.streamId = streamId;
              obj7.isScrollVisible = derivedValue;
              const VideoSpinnerContext = tmp4(12797).VideoSpinnerContext;
              obj7.videoSpinnerContext = isSelf ? VideoSpinnerContext.SELF_VIDEO : VideoSpinnerContext.REMOTE_VIDEO;
              obj7.sharedCoords = cardLayoutCoordsSubscription;
              if (isCall) {
                isCall = !isSelf;
              }
              obj7.focusOnReady = isCall;
              obj7.layout = callback;
              let tmp43Result = tmp43(tmp(20009), obj7);
              const tmpResult4 = tmp(20009);
            }
            const obj8 = { avError: tmpResultResult, userId: user.id, style: null };
            user = StyleSheet.absoluteFill;
            obj8.style = user;
            tmp43Result = closure_24(tmp(20021), obj8);
            tmp43 = closure_24;
          }
        }
      }
      const obj9 = { isRinging: tmp9, avatarURI: user.getAvatarURL(guildId, 80, false), avatarDecoration: null, layout: null, layoutPhysics: null, userId: null, guildId: null, channelId: null };
      const userAvatarDecoration = tmp6.userAvatarDecoration;
      obj9.avatarDecoration = userAvatarDecoration;
      obj9.layout = callback;
      obj9.layoutPhysics = memo;
      obj9.userId = user.id;
      obj9.guildId = guildId;
      obj9.channelId = channelId;
      tmp39 = closure_24;
      tmp41Result = closure_24(closure_42, obj9);
    } else if (ParticipantTypes.STREAM === type2) {
      const obj11 = { userId: tmp6.user.id, id: null, streamGuildId: null, streamId: null, userNick: null, isSelf: null, sharedCoords: null, isScrollVisible: null, layout: null, longPressProgress: null };
      ({ id: obj10.id, streamGuildId: obj10.streamGuildId, streamId: obj10.streamId, userNick: obj10.userNick } = tmp6);
      obj11.isSelf = isSelf;
      obj11.sharedCoords = cardLayoutCoordsSubscription;
      obj11.isScrollVisible = derivedValue;
      obj11.layout = callback;
      obj11.longPressProgress = sharedValue;
      tmp41Result = closure_24(closure_37, obj11);
      tmp39 = closure_24;
    } else if (ParticipantTypes.ACTIVITY === type2) {
      const obj12 = { sharedVisible: sharedValue1, applicationId: tmp6.applicationId, layout: callback };
      tmp41Result = closure_24(tmp(20022), obj12, tmp6.id);
      tmp39 = closure_24;
    }
  }
  const obj13 = { isRinging: tmp9, avatarURI: "a", avatarDecoration: "isArray", layout: callback, layoutPhysics: memo, channelId };
  tmp41Result = closure_24(closure_42, obj13);
  tmp39 = closure_24;
  const tmp4Result12 = require("module_1655");
});