// discord_app/modules/voice_panel/native/card/VoicePanelCard.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexport2 from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import LinearGradientDefault from "../../../../../_runtime/05258_LinearGradient.js";
import StreamKeyUtils from "../../../go_live/utils/StreamKeyUtils.tsx";
import StreamActionCreators from "../../../../actions/StreamActionCreators.tsx";
import showUserProfileActionSheetDefault from "../../../user_profile/native/showUserProfileActionSheet.tsx";
import cheapWorkletShallowEqual from "../../../reanimated/native/cheapWorkletShallowEqual.tsx";
import roundToNearestPixelDefault from "../utils/roundToNearestPixel.tsx";
import VoicePanelPIPUtils from "../pip/VoicePanelPIPUtils.tsx";
import computeCardBorderRadiusDefault from "../utils/computeCardBorderRadius.tsx";
import calculateContentCenterOffsetDefault from "../utils/calculateContentCenterOffset.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import SoundboardStore from "../../../soundboard/SoundboardStore.tsx";
import ApplicationStreamingStore from "../../../../stores/ApplicationStreamingStore.tsx";
import RTCConnectionStore from "../../../../stores/RTCConnectionStore.tsx";
import SpeakingStore from "../../../../stores/SpeakingStore.tsx";

const ReanimatedRexport_mod = ReanimatedRexport2;

require = fn;
const StyleSheet = fn(17).StyleSheet;
const VoicePanelConstants = fn(10897);
({ VoicePanelCTACard: c10, VoicePanelModes: closure_11, MODE_CHANGE_PHYSICS: closure_12, SPEAKING_PHYSICS: map1, VoicePanelCardItemType: closure_14 } = VoicePanelConstants);
const VoicePanelControlsModes = fn(10895).VoicePanelControlsModes;
const VoicePanelPIPModes = fn(18442).VoicePanelPIPModes;
const EDGE_GUTTER = fn(10900).EDGE_GUTTER;
const ApplicationStreamStates = fn(1087).ApplicationStreamStates;
const ParticipantTypes = fn(5632).ParticipantTypes;
const SCALE_PHYSICS = fn(10898).SCALE_PHYSICS;
const jsxProd = fn(21);
({ jsx: closure_21, Fragment: closure_22, jsxs: closure_23 } = jsxProd);
let ReanimatedRexport = ReanimatedRexport_mod;
let scale = ReanimatedRexport.createAnimatedComponent(fn(5234).Text);
let ReanimatedRexport = ReanimatedRexport_mod;
const LinearGradient = ReanimatedRexport.createAnimatedComponent(LinearGradientDefault);
let tmp4 = fn(1202).AVATAR_SIZE_MAP[fn(undefined, 1202).AvatarSizes.XXLARGE];
let obj = {};
let merged = Object.assign(SCALE_PHYSICS);
obj.stiffness = 150;
let closure_27 = { duration: 200 };
let closure_28 = { duration: 0 };
let c29 = 0.75;
const createStyles = fn(4971);
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
let size1 = { width: tmp4, height: tmp4, borderRadius: nativeDefault.radii.round, backgroundColor: "rgba(0,0,0,0.3)" };
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
let closure_30 = createStyles.createStyles(obj2);
let __initData = { code: "function VoicePanelCardTsx1(){const{isFocused,sharedCoords}=this.__closure;return{textAlign:\"center\",paddingHorizontal:16,paddingVertical:isFocused?0:16,width:isFocused?\"auto\":sharedCoords.get().width};}" };
const __initData2 = { code: "function VoicePanelCardTsx2(){const{isFocused,sharedCoords}=this.__closure;return{textAlign:'center',paddingHorizontal:16,paddingVertical:isFocused?0:16,width:isFocused?'auto':sharedCoords.get().width};}" };
let ReactCompilerGating = fn(558);
let closure_33 = ReactCompilerGating.isReactCompilerEnabled() ? (function SelfStreamCard(sharedCoords) {
  const cResult = sharedCoords(isFocused[22]).c(23);
  sharedCoords = sharedCoords.sharedCoords;
  const stream = sharedCoords.stream;
  isFocused = sharedCoords.isFocused;
  const tmp4 = closure_30();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ApplicationStreamingStore];
    const fn = function n() {
      currentUserActiveStream = currentUserActiveStream.getCurrentUserActiveStream();
      let state;
      if (currentUserActiveStream != null) {
        state = currentUserActiveStream.state;
      }
      return state === constants.PAUSED;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  obj = sharedCoords(isFocused[22]);
  const stateFromStores = sharedCoords(isFocused[23]).useStateFromStores(tmp5, tmp6);
  if (cResult[2] !== stream) {
    const fn2 = function p() {
      if (null != stream) {
        obj = StreamActionCreators;
        obj.stopStream(StreamKeyUtils.encodeStreamKey(tmp));
      }
    };
    cResult[2] = stream;
    cResult[3] = fn2;
    let tmp9 = fn2;
  } else {
    tmp9 = cResult[3];
  }
  const tmpResult = sharedCoords(isFocused[23]);
  const fn3 = function f() {
    let num = 16;
    if (isFocused) {
      num = 0;
    }
    obj = { textAlign: "center", paddingHorizontal: 16, paddingVertical: num, width: null };
    let str = "auto";
    if (!isFocused) {
      str = sharedCoords.get().width;
    }
    obj.width = str;
    return obj;
  };
  fn3.__closure = { isFocused, sharedCoords };
  fn3.__workletHash = 1330083185339;
  fn3.__initData = __initData;
  const animatedStyle = sharedCoords(isFocused[15]).useAnimatedStyle(fn3);
  if (cResult[4] === isFocused) {
    if (cResult[5] === tmp4.blackBackground) {
      let tmp11 = cResult[6];
    }
    let str = "text-sm/semibold";
    if (isFocused) {
      str = "text-lg/semibold";
    }
    if (cResult[7] !== stateFromStores) {
      const intl = tmp(tmp2[27]).intl;
      const string = intl.string;
      let t = tmp(tmp2[27]).t;
      if (stateFromStores) {
        t = t["5q17w5"];
        let stringResult = string(t);
      } else {
        stringResult = string(t.gMOwov);
      }
      cResult[7] = stateFromStores;
      cResult[8] = stringResult;
    } else {
      if (cResult[9] === str) {
        if (cResult[10] === tmp15) {
          if (cResult[11] === animatedStyle) {
            let tmp19 = cResult[12];
          }
          if (cResult[13] === tmp9) {
            if (cResult[14] === isFocused) {
              if (cResult[15] === stateFromStores) {
                if (cResult[16] === tmp4.selfStreamFocusedSubtitle) {
                  let tmp23 = cResult[17];
                }
                if (cResult[18] === tmp4.nonUserRoundedCard) {
                  if (cResult[19] === tmp11) {
                    if (cResult[20] === tmp19) {
                      if (cResult[21] === tmp23) {
                        let tmp31 = cResult[22];
                      }
                      return tmp31;
                    }
                  }
                }
                let obj2 = { style: tmp4.nonUserRoundedCard, children: null };
                const items1 = [tmp11, tmp19, tmp23];
                obj2.children = items1;
                const tmp34 = closure_23(stream(tmp2[26]), obj2);
                cResult[18] = tmp4.nonUserRoundedCard;
                cResult[19] = tmp11;
                cResult[20] = tmp19;
                cResult[21] = tmp23;
                cResult[22] = tmp34;
                tmp31 = tmp34;
              }
            }
          }
          if (!isFocused) {
            cResult[13] = tmp9;
            cResult[14] = isFocused;
            cResult[15] = stateFromStores;
            cResult[16] = tmp4.selfStreamFocusedSubtitle;
            cResult[17] = null;
            tmp23 = null;
          } else {
            let Text = tmp(tmp2[16]).Text;
            let obj3 = { style: tmp4.selfStreamFocusedSubtitle, variant: "text-sm/medium", color: "text-overlay-light", children: null };
            let string2 = tmp(tmp2[27]).intl;
            let string3 = string2.string;
            let t1 = tmp(tmp2[27]).t;
            if (stateFromStores) {
              let string3Result = string3(t1.LV1NSN);
            } else {
              string3Result = string3(t1.dKeLGt);
            }
            t1 = { children: null };
            obj3.children = string3Result;
            obj3 = [, ];
            obj3[0] = closure_21(Text, obj3);
            const obj4 = { size: "lg", variant: "primary-overlay", onPress: tmp9, text: null };
            const intl2 = tmp(tmp2[27]).intl;
            string2 = intl2.string;
            string3 = string2(tmp(tmp2[27]).t.CpkXwZ);
            obj4.text = string3;
            Text = closure_21(tmp(tmp2[28]).Button, obj4);
            obj3[1] = Text;
            t1.children = obj3;
            closure_23(closure_22, t1);
            const tmp27Result = closure_21(Text, obj3);
          }
        }
      }
      const obj5 = { style: animatedStyle, variant: str, color: "text-overlay-light", children: cResult[8] };
      const tmp22 = closure_21(closure_24, obj5);
      cResult[9] = str;
      cResult[10] = cResult[8];
      cResult[11] = animatedStyle;
      cResult[12] = tmp22;
      tmp19 = tmp22;
    }
  }
  let tmp12 = isFocused;
  if (isFocused) {
    const obj6 = { style: tmp4.blackBackground };
    tmp12 = closure_21(stream(tmp2[26]), obj6);
  }
  cResult[4] = isFocused;
  cResult[5] = tmp4.blackBackground;
  cResult[6] = tmp12;
  tmp11 = tmp12;
  const tmpResult2 = sharedCoords(isFocused[15]);
}) : (function SelfStreamCard(sharedCoords) {
  sharedCoords = sharedCoords.sharedCoords;
  const stream = sharedCoords.stream;
  const isFocused = sharedCoords.isFocused;
  const tmp = closure_30();
  let stringResult = isFocused;
  const items = [ApplicationStreamingStore];
  const stateFromStores = sharedCoords(isFocused[23]).useStateFromStores(items, () => {
    currentUserActiveStream = currentUserActiveStream.getCurrentUserActiveStream();
    let state;
    if (currentUserActiveStream != null) {
      state = currentUserActiveStream.state;
    }
    return state === constants.PAUSED;
  });
  const items1 = [stream];
  let string = noop.useCallback(() => {
    if (null != stream) {
      obj = StreamActionCreators;
      obj.stopStream(StreamKeyUtils.encodeStreamKey(tmp));
    }
  }, items1);
  obj = sharedCoords(isFocused[23]);
  const fn = function c() {
    let num = 16;
    if (isFocused) {
      num = 0;
    }
    obj = { textAlign: "center", paddingHorizontal: 16, paddingVertical: num, width: null };
    let str = "auto";
    if (!isFocused) {
      str = sharedCoords.get().width;
    }
    obj.width = str;
    return obj;
  };
  fn.__closure = { isFocused, sharedCoords };
  fn.__workletHash = 4905346923512;
  fn.__initData = __initData2;
  const animatedStyle = sharedCoords(isFocused[15]).useAnimatedStyle(fn);
  const obj3 = { style: tmp.nonUserRoundedCard, children: null };
  let tmp9 = isFocused;
  let obj2 = sharedCoords(isFocused[15]);
  const tmp7 = stream;
  if (isFocused) {
    const obj4 = { style: tmp.blackBackground };
    tmp9 = closure_21(tmp7(stringResult[26]), obj4);
  }
  const items2 = [tmp9, , ];
  const obj5 = { style: animatedStyle, variant: null, color: "text-overlay-light", children: null };
  let str = "text-sm/semibold";
  if (isFocused) {
    str = "text-lg/semibold";
  }
  obj5.variant = str;
  const intl = tmp2(stringResult[27]).intl;
  const string2 = intl.string;
  const t = tmp2(stringResult[27]).t;
  if (stateFromStores) {
    let string2Result = string2(t["5q17w5"]);
  } else {
    string2Result = string2(t.gMOwov);
  }
  obj5.children = string2Result;
  items2[1] = closure_21(closure_24, obj5);
  if (!isFocused) {
    items2[2] = null;
    obj3.children = items2;
    return closure_23(tmp8, obj3);
  } else {
    let Text = tmp2(stringResult[16]).Text;
    let obj6 = { style: tmp.selfStreamFocusedSubtitle, variant: "text-sm/medium", color: "text-overlay-light", children: null };
    const intl2 = tmp2(stringResult[27]).intl;
    let intl3 = intl2.string;
    let t1 = tmp2(stringResult[27]).t;
    if (stateFromStores) {
      let intl3Result = intl3(t1.LV1NSN);
    } else {
      intl3Result = intl3(t1.dKeLGt);
    }
    t1 = { children: null };
    obj6.children = intl3Result;
    obj6 = [, ];
    obj6[0] = closure_21(Text, obj6);
    const obj7 = { size: "lg", variant: "primary-overlay", onPress: string, text: null };
    intl3 = tmp2(stringResult[27]).intl;
    string = intl3.string;
    stringResult = string(tmp2(stringResult[27]).t.CpkXwZ);
    obj7.text = stringResult;
    Text = closure_21(tmp2(stringResult[28]).Button, obj7);
    obj6[1] = Text;
    t1.children = obj6;
    closure_23(closure_22, t1);
    const tmp11Result = closure_21(Text, obj6);
  }
  tmp8 = stream(isFocused[26]);
});
__initData = { code: "function VoicePanelCardTsx3(){const{focused,id}=this.__closure;var _focused$get;return((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;}" };
const __initData3 = { code: "function VoicePanelCardTsx4(isFocused_0,lastIsFocused){const{runOnJS,setIsFocused}=this.__closure;if(isFocused_0!==lastIsFocused){runOnJS(setIsFocused)(isFocused_0);}}" };
const __initData4 = { code: "function VoicePanelCardTsx5(){const{focused,id}=this.__closure;var _focused$get;return((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;}" };
const __initData5 = { code: "function VoicePanelCardTsx6(isFocused_0,lastIsFocused){const{runOnJS,setIsFocused}=this.__closure;if(isFocused_0!==lastIsFocused){runOnJS(setIsFocused)(isFocused_0);}}" };
ReactCompilerGating = fn(558);
let closure_38 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function AnimatedStreamCard(id) {
  const cResult = id(streamGuildId[22]).c(44);
  id = id.id;
  const userId = id.userId;
  ({ streamId, streamGuildId } = id);
  ({ userNick, sharedCoords, isScrollVisible, layout } = id);
  const context = setFocused.useContext(userId(streamGuildId[29]));
  const focused = context.focused;
  ({ mode, setFocused } = context);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ApplicationStreamingStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === streamGuildId) {
    if (cResult[2] === userId) {
      let tmp8 = cResult[3];
      let tmp9 = cResult[4];
    }
    const stateFromStoresObject = tmp(streamGuildId[23]).useStateFromStoresObject(first, tmp8, tmp9);
    const stream = stateFromStoresObject.stream;
    const activeStream = stateFromStoresObject.activeStream;
    if (cResult[5] === setFocused) {
      if (cResult[6] === stream) {
        let tmp11 = cResult[7];
      }
      [tmp14, tmp15] = focused(setFocused.useState(false), 2);
      const SoundboardStore = tmp15;
      const tmp13 = focused(setFocused.useState(false), 2);
      class G {
        constructor() {
          value = focused.get();
          id = undefined;
          if (value != null) {
            id = value.id;
          }
          return id === id;
        }
      }
      const obj3 = { focused, id };
      G.__closure = obj3;
      G.__workletHash = 15599603386177;
      G.__initData = __initData;
      class Y {
        constructor(arg0, arg1) {
          if (id !== arg1) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[15]);
            tmp3 = closure_6;
            tmp4 = obj.runOnJS(closure_6)(id);
          }
          return;
        }
      }
      const obj4 = { runOnJS: tmp(streamGuildId[15]).runOnJS, setIsFocused: tmp15 };
      Y.__closure = obj4;
      Y.__workletHash = 16381883582731;
      Y.__initData = __initData3;
      const animatedReaction = tmp(streamGuildId[15]).useAnimatedReaction(G, Y);
      const tmpResult3 = tmp(streamGuildId[15]);
      const tmp4ResultResult = tmp4(streamGuildId[30])(tmp(streamGuildId[31]).MediaEngineContextTypes.STREAM, userId);
      if (id.isSelf) {
        if (cResult[8] === tmp14) {
          if (cResult[9] === sharedCoords) {
            if (cResult[10] === stream) {
              let tmp60 = cResult[11];
            }
            return tmp60;
          }
        }
        const obj5 = { sharedCoords, stream, isFocused: tmp14 };
        const tmp63 = closure_21(closure_33, obj5);
        class G {
          constructor() {
            value = focused.get();
            id = undefined;
            if (value != null) {
              id = value.id;
            }
            return id === id;
          }
        }
        cResult[9] = sharedCoords;
        cResult[10] = stream;
        cResult[11] = tmp63;
        tmp60 = tmp63;
      } else if (null == activeStream) {
        if (cResult[12] === tmp11) {
          if (cResult[13] === layout) {
            if (cResult[14] === mode) {
              if (cResult[15] === stream) {
                const tmp57 = cResult[16];
              }
              return tmp57;
            }
          }
        }
        const obj6 = { mode, stream, onPress: tmp11, disabled: false, layout };
        class G {
          constructor() {
            value = focused.get();
            id = undefined;
            if (value != null) {
              id = value.id;
            }
            return id === id;
          }
        }
        cResult[13] = layout;
        cResult[14] = mode;
        cResult[15] = stream;
        cResult[16] = closure_21(tmp(streamGuildId[32]).VoicePanelStreamPreview, obj6);
        class Y {
          constructor(arg0, arg1) {
            if (id !== arg1) {
              tmp = closure_0;
              tmp2 = closure_2;
              obj = closure_0(closure_2[15]);
              tmp3 = closure_6;
              tmp4 = obj.runOnJS(closure_6)(id);
            }
            return;
          }
        }
        const tmp59 = closure_21(tmp(streamGuildId[32]).VoicePanelStreamPreview, obj6);
      } else {
        if (null == tmp4ResultResult) {
          if (activeStream.state !== ApplicationStreamStates.FAILED) {
            if (activeStream.state === ApplicationStreamStates.ENDED) {
              if (cResult[21] === activeStream) {
                if (cResult[22] === tmp45) {
                  let tmp46 = cResult[23];
                }
                return tmp46;
              }
              const obj7 = { stream: activeStream, removeSplashImage: !tmp14, type: tmp(streamGuildId[33]).VideoEmptyTypes.STREAM_ENDED, style: null };
              class G {
                constructor() {
                  value = focused.get();
                  id = undefined;
                  if (value != null) {
                    id = value.id;
                  }
                  return id === id;
                }
              }
              const tmp50 = closure_21(tmp4(streamGuildId[33]), obj7);
              cResult[21] = activeStream;
              cResult[22] = !tmp14;
              cResult[23] = tmp50;
              tmp46 = tmp50;
              const tmp4Result4 = tmp4(streamGuildId[33]);
            } else if (activeStream.state === ApplicationStreamStates.RECONNECTING) {
              const _Symbol = Symbol;
              if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
                const obj8 = { title: null };
                const intl3 = tmp(streamGuildId[27]).intl;
                obj8.title = intl3.string(tmp(streamGuildId[27]).t["pdFFK+"]);
                cResult[24] = closure_21(tmp(streamGuildId[34]).StreamTextOverlay, obj8);
                class G {
                  constructor() {
                    value = focused.get();
                    id = undefined;
                    if (value != null) {
                      id = value.id;
                    }
                    return id === id;
                  }
                }
                const tmp32 = closure_21(tmp(streamGuildId[34]).StreamTextOverlay, obj8);
              }
            } else {
              let tmp29 = null;
              if (activeStream.state === ApplicationStreamStates.PAUSED) {
                const _Symbol2 = Symbol;
                if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl = tmp(streamGuildId[27]).intl;
                  const stringResult = intl.string(tmp(streamGuildId[27]).t["5q17w5"]);
                  cResult[25] = stringResult;
                  let tmp22 = stringResult;
                } else {
                  tmp22 = cResult[25];
                }
                if (cResult[26] !== userNick) {
                  const intl2 = tmp(streamGuildId[27]).intl;
                  const obj9 = { username: userNick };
                  cResult[26] = userNick;
                  cResult[27] = intl2.formatToPlainString(tmp(streamGuildId[27]).t.meVVlb, obj9);
                  class G {
                    constructor() {
                      value = focused.get();
                      id = undefined;
                      if (value != null) {
                        id = value.id;
                      }
                      return id === id;
                    }
                  }
                  const formatToPlainStringResult = intl2.formatToPlainString(tmp(streamGuildId[27]).t.meVVlb, obj9);
                }
                if (cResult[28] !== tmp24) {
                  const obj10 = { title: tmp22, subtext: tmp24 };
                  cResult[28] = tmp24;
                  cResult[29] = closure_21(tmp(streamGuildId[34]).StreamTextOverlay, obj10);
                  class G {
                    constructor() {
                      value = focused.get();
                      id = undefined;
                      if (value != null) {
                        id = value.id;
                      }
                      return id === id;
                    }
                  }
                  const tmp28 = closure_21(tmp(streamGuildId[34]).StreamTextOverlay, obj10);
                } else {
                  const tmp26 = cResult[29];
                }
                tmp29 = tmp26;
              }
              if (streamId == null) {
                streamId = null;
              }
              if (cResult[30] !== activeStream) {
                const encodeStreamKeyResult = tmp(streamGuildId[25]).encodeStreamKey(activeStream);
                cResult[30] = activeStream;
                cResult[31] = encodeStreamKeyResult;
                let tmp34 = encodeStreamKeyResult;
                const tmpResult4 = tmp(streamGuildId[25]);
              } else {
                tmp34 = cResult[31];
              }
              if (cResult[32] === id) {
                if (cResult[33] === isScrollVisible) {
                  if (cResult[34] === layout) {
                    if (cResult[35] === sharedCoords) {
                      if (cResult[36] === streamId) {
                        if (cResult[37] === tmp34) {
                          if (cResult[38] === tmp36) {
                            if (cResult[39] === userId) {
                              let tmp37 = cResult[40];
                            }
                            if (cResult[41] === tmp29) {
                              if (cResult[42] === tmp37) {
                                let tmp41 = cResult[43];
                              }
                              return tmp41;
                            }
                            const items1 = [tmp37, tmp29];
                            { children: null }.children = items1;
                            class G {
                              constructor() {
                                value = focused.get();
                                id = undefined;
                                if (value != null) {
                                  id = value.id;
                                }
                                return id === id;
                              }
                            }
                            cResult[41] = tmp29;
                            cResult[42] = tmp37;
                            cResult[43] = tmp44;
                            tmp41 = tmp44;
                            const obj11 = { children: null };
                          }
                        }
                      }
                    }
                  }
                }
              }
              const obj12 = { layout, id: null, streamId: null, userId: null, streamKey: null, isScrollVisible: null, videoSpinnerContext: null, sharedCoords: null, isCamera: false, paused: null };
              class G {
                constructor() {
                  value = focused.get();
                  id = undefined;
                  if (value != null) {
                    id = value.id;
                  }
                  return id === id;
                }
              }
              obj12.streamId = streamId;
              obj12.userId = userId;
              obj12.streamKey = tmp34;
              obj12.isScrollVisible = isScrollVisible;
              tmp4(streamGuildId[35]);
              obj12.videoSpinnerContext = tmp(streamGuildId[36]).VideoSpinnerContext.REMOTE_STREAM;
              obj12.sharedCoords = sharedCoords;
              obj12.paused = activeStream.state === ApplicationStreamStates.PAUSED;
              class Y {
                constructor(arg0, arg1) {
                  if (id !== arg1) {
                    tmp = closure_0;
                    tmp2 = closure_2;
                    obj = closure_0(closure_2[15]);
                    tmp3 = closure_6;
                    tmp4 = obj.runOnJS(closure_6)(id);
                  }
                  return;
                }
              }
              cResult[32] = id;
              cResult[33] = isScrollVisible;
              cResult[34] = layout;
              cResult[35] = sharedCoords;
              cResult[36] = streamId;
              cResult[37] = tmp34;
              cResult[38] = activeStream.state === ApplicationStreamStates.PAUSED;
              cResult[39] = userId;
              cResult[40] = tmp40;
              tmp37 = tmp40;
            }
          }
        }
        if (cResult[17] === activeStream) {
          if (cResult[18] === tmp51) {
            if (cResult[19] === tmp4ResultResult) {
              let tmp52 = cResult[20];
            }
            return tmp52;
          }
        }
        const obj13 = { avError: tmp4ResultResult, stream: activeStream, removeSplashImage: !tmp14, type: null, style: null };
        class G {
          constructor() {
            value = focused.get();
            id = undefined;
            if (value != null) {
              id = value.id;
            }
            return id === id;
          }
        }
        obj13.style = stream.absoluteFill;
        const tmp56 = closure_21(tmp4(streamGuildId[33]), obj13);
        cResult[17] = activeStream;
        cResult[18] = !tmp14;
        class Y {
          constructor(arg0, arg1) {
            if (id !== arg1) {
              tmp = closure_0;
              tmp2 = closure_2;
              obj = closure_0(closure_2[15]);
              tmp3 = closure_6;
              tmp4 = obj.runOnJS(closure_6)(id);
            }
            return;
          }
        }
        cResult[20] = tmp56;
        tmp52 = tmp56;
        const tmp4Result6 = tmp4(streamGuildId[33]);
      }
      const tmp4Result = tmp4(streamGuildId[30]);
    }
    const fn2 = function x() {
      if (null != stream) {
        StreamActionCreators.watchStream(stream, { forceMultiple: true });
        setFocused(StreamKeyUtils.encodeStreamKey(stream));
      }
    };
    cResult[6] = stream;
    cResult[7] = fn2;
    tmp11 = fn2;
    const tmpResult = tmp(streamGuildId[23]);
  }
  const fn = function u() {
    return { stream: ApplicationStreamingStore.getStreamForUser(userId, streamGuildId), activeStream: ApplicationStreamingStore.getActiveStreamForUser(userId, streamGuildId) };
  };
  const items2 = [userId, streamGuildId];
  cResult[1] = streamGuildId;
  cResult[2] = userId;
  cResult[3] = fn;
  cResult[4] = items2;
  tmp9 = items2;
  tmp8 = fn;
  obj = id(streamGuildId[22]);
}) : (function AnimatedStreamCard(id) {
  id = id.id;
  const userId = id.userId;
  ({ streamId, streamGuildId } = id);
  ({ sharedCoords, layout } = id);
  let setFocused;
  ({ userNick, isSelf, isScrollVisible } = id);
  const context = setFocused.useContext(userId(streamGuildId[29]));
  const focused = context.focused;
  setFocused = context.setFocused;
  const items = [ApplicationStreamingStore];
  const items1 = [userId, streamGuildId];
  const stateFromStoresObject = id(streamGuildId[23]).useStateFromStoresObject(items, () => ({ stream: ApplicationStreamingStore.getStreamForUser(userId, streamGuildId), activeStream: ApplicationStreamingStore.getActiveStreamForUser(userId, streamGuildId) }), items1);
  const stream = stateFromStoresObject.stream;
  const activeStream = stateFromStoresObject.activeStream;
  const items2 = [stream, setFocused];
  const callback = setFocused.useCallback(() => {
    if (null != stream) {
      StreamActionCreators.watchStream(stream, { forceMultiple: true });
      setFocused(StreamKeyUtils.encodeStreamKey(stream));
    }
  }, items2);
  obj = id(streamGuildId[23]);
  [tmp8, tmp9] = focused(setFocused.useState(false), 2);
  c6 = tmp9;
  const tmp7 = focused(setFocused.useState(false), 2);
  class C {
    constructor() {
      value = focused.get();
      id = undefined;
      if (value != null) {
        id = value.id;
      }
      return id === id;
    }
  }
  C.__closure = { focused, id };
  C.__workletHash = 720082375367;
  C.__initData = __initData4;
  class I {
    constructor(arg0, arg1) {
      if (id !== arg1) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[15]);
        tmp3 = closure_6;
        tmp4 = obj.runOnJS(closure_6)(id);
      }
      return;
    }
  }
  let obj2 = id(streamGuildId[15]);
  I.__closure = { runOnJS: id(streamGuildId[15]).runOnJS, setIsFocused: tmp9 };
  I.__workletHash = 1640804275081;
  I.__initData = __initData5;
  const animatedReaction = obj2.useAnimatedReaction(C, I);
  const obj3 = { runOnJS: id(streamGuildId[15]).runOnJS, setIsFocused: tmp9 };
  const tmp11Result = userId(streamGuildId[30])(id(streamGuildId[31]).MediaEngineContextTypes.STREAM, userId);
  if (isSelf) {
    const obj4 = { sharedCoords, stream, isFocused: tmp8 };
    return closure_21(closure_33, obj4);
  } else if (null == activeStream) {
    const obj5 = { mode: context.mode, stream, onPress: callback, disabled: false, layout };
    return closure_21(tmp4(streamGuildId[32]).VoicePanelStreamPreview, obj5);
  } else {
    if (null == tmp11Result) {
      if (activeStream.state !== ApplicationStreamStates.FAILED) {
        if (activeStream.state === ApplicationStreamStates.ENDED) {
          const obj6 = { stream: activeStream, removeSplashImage: !tmp8, type: tmp4(streamGuildId[33]).VideoEmptyTypes.STREAM_ENDED, style: stream.absoluteFill };
          return closure_21(tmp(streamGuildId[33]), obj6);
        } else {
          if (activeStream.state === ApplicationStreamStates.RECONNECTING) {
            const obj7 = { title: null };
            const intl = tmp4(streamGuildId[27]).intl;
            obj7.title = intl.string(tmp4(streamGuildId[27]).t["pdFFK+"]);
            let tmp15 = closure_21(tmp4(streamGuildId[34]).StreamTextOverlay, obj7);
          } else {
            tmp15 = null;
            if (activeStream.state === ApplicationStreamStates.PAUSED) {
              const obj8 = { title: null, subtext: null };
              const intl2 = tmp4(streamGuildId[27]).intl;
              obj8.title = intl2.string(tmp4(streamGuildId[27]).t["5q17w5"]);
              const intl3 = tmp4(streamGuildId[27]).intl;
              const obj9 = { username: userNick };
              obj8.subtext = intl3.formatToPlainString(tmp4(streamGuildId[27]).t.meVVlb, obj9);
              tmp15 = closure_21(tmp4(streamGuildId[34]).StreamTextOverlay, obj8);
            }
          }
          const obj10 = { layout, id, streamId: null, userId: null, streamKey: null, isScrollVisible: null, videoSpinnerContext: null, sharedCoords: null, isCamera: false, paused: null };
          if (streamId == null) {
            streamId = null;
          }
          const obj11 = { children: null };
          obj10.streamId = streamId;
          obj10.userId = userId;
          const tmpResult3 = tmp(streamGuildId[35]);
          obj10.streamKey = tmp4(streamGuildId[25]).encodeStreamKey(activeStream);
          obj10.isScrollVisible = isScrollVisible;
          obj10.videoSpinnerContext = tmp4(streamGuildId[36]).VideoSpinnerContext.REMOTE_STREAM;
          obj10.sharedCoords = sharedCoords;
          obj10.paused = activeStream.state === ApplicationStreamStates.PAUSED;
          const items3 = [closure_21(tmpResult3, obj10), tmp15];
          obj11.children = items3;
          return closure_23(closure_22, obj11);
        }
      }
    }
    const obj12 = { avError: tmp11Result, stream: activeStream, removeSplashImage: !tmp8, type: tmp4(streamGuildId[33]).VideoEmptyTypes.STREAM_FAILED, style: stream.absoluteFill };
    return closure_21(tmp(streamGuildId[33]), obj12);
  }
  const tmp11 = userId(streamGuildId[30]);
}));
const __initData6 = { code: "function VoicePanelCardTsx7(){const{withTiming,isRinging,CONNECTING_OPACITY,backgroundColor}=this.__closure;return{opacity:withTiming(isRinging?CONNECTING_OPACITY:1,{duration:100},\"animate-always\"),backgroundColor:backgroundColor};}" };
const __initData7 = { code: "function VoicePanelCardTsx8(){const{withSpring,mode,VoicePanelModes,layoutPhysics}=this.__closure;return{transform:[{scale:withSpring(mode.get()===VoicePanelModes.PIP?0.8:1,layoutPhysics)}]};}" };
const __initData8 = { code: "function VoicePanelCardTsx9(){const{withTiming,isRinging,CONNECTING_OPACITY,backgroundColor}=this.__closure;return{opacity:withTiming(isRinging?CONNECTING_OPACITY:1,{duration:100},'animate-always'),backgroundColor:backgroundColor};}" };
const __initData9 = { code: "function VoicePanelCardTsx10(){const{withSpring,mode,VoicePanelModes,layoutPhysics}=this.__closure;return{transform:[{scale:withSpring(mode.get()===VoicePanelModes.PIP?64/80:1,layoutPhysics)}]};}" };
ReactCompilerGating = fn(558);
let closure_43 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function AnimatedUserCardInner(isRinging) {
  const cResult = isRinging(mode[22]).c(36);
  isRinging = isRinging.isRinging;
  ({ layout, avatarURI, avatarDecoration, layoutPhysics } = isRinging);
  ({ userId, guildId } = isRinging);
  const tmp4 = closure_30();
  mode = noop.useContext(layoutPhysics(mode[29])).mode;
  if (cResult[0] === avatarURI) {
    if (cResult[1] === guildId) {
      if (cResult[2] === userId) {
        let tmp6 = cResult[3];
      }
      ({ gradientStops, backgroundColor } = layoutPhysics(tmp2[37])(tmp6));
      const tmp7 = layoutPhysics(tmp2[37])(tmp6);
      const fn = function v() {
        let num = 1;
        if (isRinging) {
          num = c29;
        }
        return { opacity: timing.withTiming(num, { duration: 100 }, "animate-always"), backgroundColor };
      };
      let obj2 = { withTiming: tmp(tmp2[38]).withTiming, isRinging, CONNECTING_OPACITY, backgroundColor };
      fn.__closure = obj2;
      fn.__workletHash = 13655669649054;
      fn.__initData = __initData6;
      const animatedStyle = tmp(tmp2[15]).useAnimatedStyle(fn);
      const tmpResult = tmp(tmp2[15]);
      const fn2 = function w() {
        let num = 1;
        if (mode.get() === VoicePanelModes.PIP) {
          num = 0.8;
        }
        const obj2 = { transform: null };
        const items = [{ scale: spring.withSpring(num, layoutPhysics) }];
        obj2.transform = items;
        return obj2;
      };
      const obj3 = { withSpring: tmp(tmp2[39]).withSpring, mode, VoicePanelModes, layoutPhysics };
      fn2.__closure = obj3;
      fn2.__workletHash = 1926256435326;
      fn2.__initData = __initData7;
      const animatedStyle1 = tmp(tmp2[15]).useAnimatedStyle(fn2);
      if (cResult[4] !== avatarURI) {
        let cachedSourceFromURI;
        if (null != avatarURI) {
          cachedSourceFromURI = tmp(tmp2[40]).getCachedSourceFromURI(avatarURI);
          const tmpResult4 = tmp(tmp2[40]);
        }
        cResult[4] = avatarURI;
        cResult[5] = cachedSourceFromURI;
        let image = cachedSourceFromURI;
      } else {
        image = cResult[5];
      }
      if (cResult[6] === animatedStyle) {
        if (cResult[7] === tmp4.userRoundedCardContent) {
          let tmp17 = cResult[8];
        }
        if (cResult[9] === gradientStops) {
          if (cResult[10] === layout) {
            let tmp18 = cResult[11];
          }
          if (null != image) {
            let prop;
            if (null == avatarDecoration) {
              prop = tmp4.avatarImageMaskStyles;
            }
            if (cResult[14] === animatedStyle1) {
              if (cResult[15] === prop) {
                let tmp29 = cResult[16];
              }
              if (cResult[17] === avatarDecoration) {
                if (cResult[18] === image) {
                  if (cResult[19] === tmp27) {
                    if (cResult[20] === tmp4.image) {
                      if (cResult[22] === tmp29) {
                        if (cResult[23] === tmp30) {
                          let tmp34 = cResult[24];
                        }
                        if (cResult[25] === layout) {
                        }
                        const obj4 = { layout, children: tmp34 };
                        const tmp39 = closure_21(layoutPhysics(tmp2[42]), obj4);
                        cResult[25] = layout;
                        cResult[26] = tmp34;
                        cResult[27] = tmp39;
                      }
                      const obj5 = { style: tmp29, children: cResult[21] };
                      const tmp36 = closure_21(layoutPhysics(tmp2[42]), obj5);
                      cResult[22] = tmp29;
                      cResult[23] = cResult[21];
                      cResult[24] = tmp36;
                      tmp34 = tmp36;
                    }
                  }
                }
              }
              if (tmp27) {
                const obj6 = { source: image, size: tmp(tmp2[18]).AvatarSizes.XXLARGE, avatarDecoration };
                let tmp31Result = closure_21(tmp(tmp2[18]).Avatar, obj6);
              } else {
                const size = { source: image, resizeMode: "stretch", width: 80, height: 80, style: tmp4.image };
                tmp31Result = closure_21(layoutPhysics(tmp2[41]), size);
              }
              cResult[17] = avatarDecoration;
              cResult[18] = image;
              cResult[19] = tmp27;
              image = tmp4.image;
              cResult[20] = image;
              cResult[21] = tmp31Result;
            }
            let items = [prop, animatedStyle1];
            cResult[14] = animatedStyle1;
            cResult[15] = prop;
            cResult[16] = items;
            tmp29 = items;
          } else {
            if (cResult[12] !== tmp4.avatarPlaceholder) {
              const obj7 = { style: tmp4.avatarPlaceholder };
              const tmp26 = closure_21(layoutPhysics(tmp2[26]), obj7);
              cResult[12] = tmp4.avatarPlaceholder;
              cResult[13] = tmp26;
              let tmp24 = tmp26;
            } else {
              tmp24 = cResult[13];
            }
            if (cResult[28] === tmp17) {
              if (cResult[29] === tmp18) {
                if (cResult[30] === tmp24) {
                  let tmp41 = cResult[31];
                }
                if (cResult[32] === layout) {
                  if (cResult[33] === tmp4.userRoundedCard) {
                    if (cResult[34] === tmp41) {
                      let tmp44 = cResult[35];
                    }
                    return tmp44;
                  }
                }
                const obj8 = { style: tmp16, layout, children: tmp41 };
                const tmp46 = closure_21(layoutPhysics(tmp2[42]), obj8);
                cResult[32] = layout;
                cResult[33] = tmp4.userRoundedCard;
                cResult[34] = tmp41;
                cResult[35] = tmp46;
                tmp44 = tmp46;
              }
            }
            const obj9 = { style: tmp17, children: null };
            const items1 = [tmp18, tmp24];
            obj9.children = items1;
            const tmp43 = closure_23(layoutPhysics(tmp2[42]), obj9);
            cResult[28] = tmp17;
            cResult[29] = tmp18;
            cResult[30] = tmp24;
            cResult[31] = tmp43;
            tmp41 = tmp43;
          }
        }
        let tmp19 = null;
        if (null != gradientStops) {
          const obj10 = { colors: gradientStops, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, style: StyleSheet.absoluteFill, layout, pointerEvents: "none" };
          tmp19 = closure_21(LinearGradient, obj10);
        }
        cResult[9] = gradientStops;
        cResult[10] = layout;
        cResult[11] = tmp19;
        tmp18 = tmp19;
      }
      const items2 = [tmp4.userRoundedCardContent, animatedStyle];
      cResult[6] = animatedStyle;
      cResult[7] = tmp4.userRoundedCardContent;
      cResult[8] = items2;
      tmp17 = items2;
      const tmpResult3 = tmp(tmp2[15]);
    }
  }
  const obj11 = { userId, guildId, avatarURI, location: "VoicePanelCard-native" };
  cResult[0] = avatarURI;
  cResult[1] = guildId;
  cResult[2] = userId;
  cResult[3] = obj11;
  tmp6 = obj11;
  obj = isRinging(mode[22]);
}) : (function AnimatedUserCardInner(isRinging) {
  isRinging = isRinging.isRinging;
  ({ layout, avatarURI, avatarDecoration, layoutPhysics } = isRinging);
  let mode;
  backgroundColor = undefined;
  ({ userId, guildId } = isRinging);
  const tmp = closure_30();
  mode = noop.useContext(layoutPhysics(mode[29])).mode;
  ({ gradientStops, backgroundColor } = layoutPhysics(mode[37])({ userId, guildId, avatarURI, location: "VoicePanelCard-native" }));
  const tmp4 = layoutPhysics(mode[37])({ userId, guildId, avatarURI, location: "VoicePanelCard-native" });
  const fn = function _() {
    let num = 1;
    if (isRinging) {
      num = c29;
    }
    return { opacity: timing.withTiming(num, { duration: 100 }, "animate-always"), backgroundColor };
  };
  obj = isRinging(mode[15]);
  fn.__closure = { withTiming: isRinging(mode[38]).withTiming, isRinging, CONNECTING_OPACITY, backgroundColor };
  fn.__workletHash = 12115732984752;
  fn.__initData = __initData8;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let obj2 = { withTiming: isRinging(mode[38]).withTiming, isRinging, CONNECTING_OPACITY, backgroundColor };
  const fn2 = function f() {
    let num = 1;
    if (mode.get() === VoicePanelModes.PIP) {
      num = 0.8;
    }
    const obj2 = { transform: null };
    const items = [{ scale: spring.withSpring(num, layoutPhysics) }];
    obj2.transform = items;
    return obj2;
  };
  const obj3 = isRinging(mode[15]);
  fn2.__closure = { withSpring: isRinging(mode[39]).withSpring, mode, VoicePanelModes, layoutPhysics };
  fn2.__workletHash = 10965423163748;
  fn2.__initData = __initData9;
  let cachedSourceFromURI;
  const animatedStyle1 = obj3.useAnimatedStyle(fn2);
  if (null != avatarURI) {
    cachedSourceFromURI = tmp5(tmp3[40]).getCachedSourceFromURI(avatarURI);
    const tmp5Result = tmp5(tmp3[40]);
  }
  const obj5 = { style: tmp.userRoundedCard, layout, children: null };
  const obj4 = { withSpring: isRinging(mode[39]).withSpring, mode, VoicePanelModes, layoutPhysics };
  const obj6 = { style: null, children: null };
  let items = [tmp.userRoundedCardContent, animatedStyle];
  obj6.style = items;
  let tmp9Result = null;
  const tmp2Result = layoutPhysics(mode[42]);
  if (null != gradientStops) {
    const obj7 = { colors: gradientStops, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, style: StyleSheet.absoluteFill, layout, pointerEvents: "none" };
    tmp9Result = closure_21(LinearGradient, obj7);
  }
  const items1 = [tmp9Result, ];
  if (null == cachedSourceFromURI) {
    const obj8 = { style: tmp.avatarPlaceholder };
    let tmp9Result3 = closure_21(layoutPhysics(tmp3[26]), obj8);
  } else {
    const obj9 = { layout, children: null };
    let prop;
    const tmp2Result5 = layoutPhysics(tmp3[42]);
    if (null == avatarDecoration) {
      prop = tmp.avatarImageMaskStyles;
    }
    const obj10 = { style: null, children: null };
    const items2 = [prop, animatedStyle1];
    obj10.style = items2;
    if (null != avatarDecoration) {
      const obj11 = { source: cachedSourceFromURI, size: tmp5(tmp3[18]).AvatarSizes.XXLARGE, avatarDecoration };
      let tmp9Result4 = closure_21(tmp5(tmp3[18]).Avatar, obj11);
    } else {
      const size = { source: cachedSourceFromURI, resizeMode: "stretch", width: 80, height: 80, style: tmp.image };
      tmp9Result4 = closure_21(layoutPhysics(tmp3[41]), size);
    }
    obj10.children = tmp9Result4;
    obj9.children = closure_21(layoutPhysics(tmp3[42]), obj10);
    tmp9Result3 = closure_21(tmp2Result5, obj9);
    const tmp2Result6 = layoutPhysics(tmp3[42]);
  }
  items1[1] = tmp9Result3;
  obj6.children = items1;
  obj5.children = closure_23(layoutPhysics(mode[42]), obj6);
  return closure_21(tmp2Result, obj5);
}));
const __initData10 = { code: "function VoicePanelCardTsx11(){const{mode,VoicePanelModes,focused,id,withSpring,computeCardBorderRadius,isSelf,defaultBorderRadius,SPEAKING_PHYSICS}=this.__closure;var _focused$get,_focused$get2;const disable=mode.get()!==VoicePanelModes.PIP&&((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;return{opacity:disable?0:1,borderRadius:withSpring(disable?0:computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius}),SPEAKING_PHYSICS,!disable?\"animate-always\":\"animate-never\")};}" };
const __initData11 = { code: "function VoicePanelCardTsx12(){const{mode,VoicePanelModes,focused,id,withSpring,computeCardBorderRadius,isSelf,defaultBorderRadius,SPEAKING_PHYSICS,speakingOrPlayingSoundboard,roundToNearestPixel,SPEAKING_BORDER_SIZE,SPEAKING_INSET}=this.__closure;var _focused$get,_focused$get2;const disable_0=mode.get()===VoicePanelModes.PIP||((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;return{borderRadius:withSpring(!disable_0?computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius}):0,SPEAKING_PHYSICS,!disable_0?\"animate-always\":\"animate-never\"),borderWidth:withSpring(!disable_0&&speakingOrPlayingSoundboard.get()?roundToNearestPixel(SPEAKING_BORDER_SIZE+SPEAKING_INSET):0,SPEAKING_PHYSICS,!disable_0?\"animate-always\":\"animate-never\")};}" };
const __initData12 = { code: "function VoicePanelCardTsx13(){const{mode,VoicePanelModes,focused,id,withSpring,computeCardBorderRadius,isSelf,defaultBorderRadius,SPEAKING_PHYSICS,speakingOrPlayingSoundboard,SPEAKING_BORDER_SIZE}=this.__closure;var _focused$get,_focused$get2;const disable_1=mode.get()===VoicePanelModes.PIP||((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;return{borderRadius:withSpring(!disable_1?computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius}):0,SPEAKING_PHYSICS,!disable_1?\"animate-always\":\"animate-never\"),borderWidth:withSpring(!disable_1&&speakingOrPlayingSoundboard.get()?SPEAKING_BORDER_SIZE:0,SPEAKING_PHYSICS,!disable_1?\"animate-always\":\"animate-never\")};}" };
const __initData13 = { code: "function VoicePanelCardTsx14(){const{mode,VoicePanelModes,focused,id,withSpring,computeCardBorderRadius,isSelf,defaultBorderRadius,SPEAKING_PHYSICS}=this.__closure;var _focused$get,_focused$get2;const disable=mode.get()!==VoicePanelModes.PIP&&((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;return{opacity:disable?0:1,borderRadius:withSpring(disable?0:computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius}),SPEAKING_PHYSICS,!disable?'animate-always':'animate-never')};}" };
const __initData14 = { code: "function VoicePanelCardTsx15(){const{mode,VoicePanelModes,focused,id,withSpring,computeCardBorderRadius,isSelf,defaultBorderRadius,SPEAKING_PHYSICS,speakingOrPlayingSoundboard,roundToNearestPixel,SPEAKING_BORDER_SIZE,SPEAKING_INSET}=this.__closure;var _focused$get,_focused$get2;const disable_0=mode.get()===VoicePanelModes.PIP||((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;return{borderRadius:withSpring(!disable_0?computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius}):0,SPEAKING_PHYSICS,!disable_0?'animate-always':'animate-never'),borderWidth:withSpring(!disable_0&&speakingOrPlayingSoundboard.get()?roundToNearestPixel(SPEAKING_BORDER_SIZE+SPEAKING_INSET):0,SPEAKING_PHYSICS,!disable_0?'animate-always':'animate-never')};}" };
const __initData15 = { code: "function VoicePanelCardTsx16(){const{mode,VoicePanelModes,focused,id,withSpring,computeCardBorderRadius,isSelf,defaultBorderRadius,SPEAKING_PHYSICS,speakingOrPlayingSoundboard,SPEAKING_BORDER_SIZE}=this.__closure;var _focused$get,_focused$get2;const disable_1=mode.get()===VoicePanelModes.PIP||((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;return{borderRadius:withSpring(!disable_1?computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius}):0,SPEAKING_PHYSICS,!disable_1?'animate-always':'animate-never'),borderWidth:withSpring(!disable_1&&speakingOrPlayingSoundboard.get()?SPEAKING_BORDER_SIZE:0,SPEAKING_PHYSICS,!disable_1?'animate-always':'animate-never')};}" };
ReactCompilerGating = fn(558);
let closure_50 = ReactCompilerGating.isReactCompilerEnabled() ? (function SpeakingIndicator(id) {
  const cResult = id(isSelf[22]).c(30);
  id = id.id;
  const userId = id.userId;
  isSelf = id.isSelf;
  const speakingOrPlayingSoundboard = id.speakingOrPlayingSoundboard;
  const layout = id.layout;
  const context = mode.useContext(userId(isSelf[29]));
  mode = context.mode;
  const focused = context.focused;
  const tmp6 = closure_30();
  obj = id(isSelf[22]);
  const token = id(isSelf[43]).useToken(userId(isSelf[20]).modules.mobile.VOICE_TILE_BORDER_RADIUS);
  let obj2 = id(isSelf[43]);
  const token1 = id(isSelf[43]).useToken(userId(isSelf[20]).colors.REDESIGN_INPUT_CONTROL_SELECTED);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [token];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== userId) {
    const fn = function l() {
      return SoundboardStore.isUserPlayingSounds(userId);
    };
    cResult[1] = userId;
    cResult[2] = fn;
    let tmp11 = fn;
  } else {
    tmp11 = cResult[2];
  }
  let obj3 = id(isSelf[43]);
  const stateFromStores = id(isSelf[23]).useStateFromStores(first, tmp11);
  const tmpResult = id(isSelf[23]);
  class T {
    constructor() {
      obj = mode;
      tmp = mode.get() !== VoicePanelModes.PIP;
      if (tmp) {
        tmp2 = focused;
        value = focused.get();
        tmp4 = null;
        id = undefined;
        if (value != null) {
          id = value.id;
        }
        tmp6 = id;
        tmp = id === id;
      }
      num = 1;
      if (tmp) {
        num = 0;
      }
      obj1 = { opacity: num, borderRadius: null };
      tmp7 = closure_2;
      obj3 = closure_0(closure_2[39]);
      num2 = 0;
      if (!tmp) {
        tmp8 = closure_1;
        obj5 = { id: null, mode: null, focused: null, isSelf: null, defaultBorderRadius: null };
        tmp10 = id;
        obj5.id = id;
        tmp9 = closure_1(tmp7[44]);
        obj5.mode = obj.get();
        tmp11 = focused;
        value1 = focused.get();
        tmp13 = null;
        id1 = undefined;
        if (value1 != null) {
          id1 = value1.id;
        }
        obj5.focused = id1;
        tmp15 = isSelf;
        obj5.isSelf = isSelf;
        tmp16 = closure_6;
        obj5.defaultBorderRadius = closure_6;
        num2 = tmp9(obj5);
      }
      str = "animate-always";
      tmp17 = SPEAKING_PHYSICS;
      if (tmp) {
        str = "animate-never";
      }
      obj1.borderRadius = obj3.withSpring(num2, tmp17, str);
      return obj1;
    }
  }
  const tmpResult4 = id(isSelf[15]);
  T.__closure = { mode, VoicePanelModes, focused, id, withSpring: id(isSelf[39]).withSpring, computeCardBorderRadius: userId(isSelf[44]), isSelf, defaultBorderRadius: token, SPEAKING_PHYSICS };
  T.__workletHash = 11554900074499;
  T.__initData = __initData10;
  const animatedStyle = tmpResult4.useAnimatedStyle(T);
  let obj4 = { mode, VoicePanelModes, focused, id, withSpring: id(isSelf[39]).withSpring, computeCardBorderRadius: userId(isSelf[44]), isSelf, defaultBorderRadius: token, SPEAKING_PHYSICS };
  class A {
    constructor() {
      obj = mode;
      tmp = mode.get() === VoicePanelModes.PIP;
      if (!tmp) {
        tmp2 = focused;
        value = focused.get();
        tmp4 = null;
        id = undefined;
        if (value != null) {
          id = value.id;
        }
        tmp6 = id;
        tmp = id === id;
      }
      tmp8 = closure_2;
      tmp7 = closure_0;
      obj2 = closure_0(closure_2[39]);
      num = 0;
      if (!tmp) {
        tmp9 = closure_1;
        obj1 = { id: null, mode: null, focused: null, isSelf: null, defaultBorderRadius: null };
        tmp11 = id;
        obj1.id = id;
        tmp10 = closure_1(tmp8[44]);
        obj1.mode = obj.get();
        tmp12 = focused;
        value1 = focused.get();
        tmp14 = null;
        id1 = undefined;
        if (value1 != null) {
          id1 = value1.id;
        }
        obj1.focused = id1;
        tmp16 = isSelf;
        obj1.isSelf = isSelf;
        tmp17 = closure_6;
        obj1.defaultBorderRadius = closure_6;
        num = tmp10(obj1);
      }
      tmp18 = SPEAKING_PHYSICS;
      str = "animate-always";
      str2 = "animate-always";
      if (tmp) {
        str2 = "animate-never";
      }
      obj6 = { borderRadius: obj2.withSpring(num, tmp18, str2), borderWidth: null };
      tmp7Result = tmp7(tmp8[39]);
      num2 = 0;
      if (!tmp) {
        tmp19 = closure_3;
        num2 = 0;
        if (closure_3.get()) {
          tmp20 = closure_1;
          num3 = 5;
          num2 = closure_1(tmp8[45])(5);
        }
      }
      if (tmp) {
        str = "animate-never";
      }
      obj6.borderWidth = tmp7Result.withSpring(num2, tmp18, str);
      return obj6;
    }
  }
  const tmpResult5 = id(isSelf[15]);
  A.__closure = { mode, VoicePanelModes, focused, id, withSpring: id(isSelf[39]).withSpring, computeCardBorderRadius: userId(isSelf[44]), isSelf, defaultBorderRadius: token, SPEAKING_PHYSICS, speakingOrPlayingSoundboard, roundToNearestPixel: userId(isSelf[45]), SPEAKING_BORDER_SIZE: 3, SPEAKING_INSET: 2 };
  A.__workletHash = 17414722144995;
  A.__initData = __initData11;
  const animatedStyle1 = tmpResult5.useAnimatedStyle(A);
  const obj5 = { mode, VoicePanelModes, focused, id, withSpring: id(isSelf[39]).withSpring, computeCardBorderRadius: userId(isSelf[44]), isSelf, defaultBorderRadius: token, SPEAKING_PHYSICS, speakingOrPlayingSoundboard, roundToNearestPixel: userId(isSelf[45]), SPEAKING_BORDER_SIZE: 3, SPEAKING_INSET: 2 };
  class V {
    constructor() {
      obj = mode;
      tmp = mode.get() === VoicePanelModes.PIP;
      if (!tmp) {
        tmp2 = focused;
        value = focused.get();
        tmp4 = null;
        id = undefined;
        if (value != null) {
          id = value.id;
        }
        tmp6 = id;
        tmp = id === id;
      }
      tmp8 = closure_2;
      tmp7 = closure_0;
      obj2 = closure_0(closure_2[39]);
      num = 0;
      if (!tmp) {
        tmp9 = closure_1;
        obj1 = { id: null, mode: null, focused: null, isSelf: null, defaultBorderRadius: null };
        tmp11 = id;
        obj1.id = id;
        tmp10 = closure_1(tmp8[44]);
        obj1.mode = obj.get();
        tmp12 = focused;
        value1 = focused.get();
        tmp14 = null;
        id1 = undefined;
        if (value1 != null) {
          id1 = value1.id;
        }
        obj1.focused = id1;
        tmp16 = isSelf;
        obj1.isSelf = isSelf;
        tmp17 = closure_6;
        obj1.defaultBorderRadius = closure_6;
        num = tmp10(obj1);
      }
      tmp18 = SPEAKING_PHYSICS;
      str = "animate-always";
      str2 = "animate-always";
      if (tmp) {
        str2 = "animate-never";
      }
      obj6 = { borderRadius: obj2.withSpring(num, tmp18, str2), borderWidth: null };
      tmp7Result = tmp7(tmp8[39]);
      num2 = 0;
      if (!tmp) {
        tmp19 = closure_3;
        num2 = 0;
        if (closure_3.get()) {
          num2 = 3;
        }
      }
      if (tmp) {
        str = "animate-never";
      }
      obj6.borderWidth = tmp7Result.withSpring(num2, tmp18, str);
      return obj6;
    }
  }
  const tmpResult6 = id(isSelf[15]);
  V.__closure = { mode, VoicePanelModes, focused, id, withSpring: id(isSelf[39]).withSpring, computeCardBorderRadius: userId(isSelf[44]), isSelf, defaultBorderRadius: token, SPEAKING_PHYSICS, speakingOrPlayingSoundboard, SPEAKING_BORDER_SIZE: 3 };
  V.__workletHash = 10337106009897;
  V.__initData = __initData12;
  const animatedStyle2 = tmpResult6.useAnimatedStyle(V);
  if (cResult[3] === tmp6.speakingIndicatorClip) {
    if (cResult[4] === animatedStyle) {
      let tmp16 = cResult[5];
    }
    if (cResult[6] === tmp6.speakingIndicatorUnderlay) {
      if (cResult[7] === animatedStyle1) {
        let tmp17 = cResult[8];
      }
      if (cResult[9] === layout) {
        if (cResult[10] === tmp17) {
          let tmp18 = cResult[11];
        }
        if (cResult[12] === stateFromStores) {
          if (cResult[13] === token1) {
            let tmp21 = cResult[14];
          }
          if (cResult[15] === animatedStyle2) {
            if (cResult[16] === tmp6.speakingIndicatorBar) {
              if (cResult[17] === tmp21) {
                let tmp23 = cResult[18];
              }
              if (cResult[19] === layout) {
                if (cResult[20] === tmp23) {
                  let tmp24 = cResult[21];
                }
                if (cResult[22] === tmp16) {
                  if (cResult[23] === tmp18) {
                    if (cResult[24] === tmp24) {
                      let tmp27 = cResult[25];
                    }
                    if (cResult[26] === layout) {
                      if (cResult[27] === tmp6.speakingIndicatorWrapper) {
                        if (cResult[28] === tmp27) {
                          let tmp30 = cResult[29];
                        }
                        return tmp30;
                      }
                    }
                    const obj7 = { style: tmp6.speakingIndicatorWrapper, layout, pointerEvents: "none", children: tmp27 };
                    const tmp32 = closure_21(tmp4(tmp2[42]), obj7);
                    cResult[26] = layout;
                    cResult[27] = tmp6.speakingIndicatorWrapper;
                    cResult[28] = tmp27;
                    cResult[29] = tmp32;
                    tmp30 = tmp32;
                  }
                }
                const obj8 = { style: tmp16, children: null };
                const items1 = [tmp18, tmp24];
                obj8.children = items1;
                const tmp29 = closure_23(tmp4(tmp2[42]), obj8);
                cResult[22] = tmp16;
                cResult[23] = tmp18;
                cResult[24] = tmp24;
                cResult[25] = tmp29;
                tmp27 = tmp29;
              }
              const obj9 = { style: tmp23, layout };
              const tmp26 = closure_21(tmp4(tmp2[42]), obj9);
              cResult[19] = layout;
              cResult[20] = tmp23;
              cResult[21] = tmp26;
              tmp24 = tmp26;
            }
          }
          const items2 = [tmp6.speakingIndicatorBar, tmp21, animatedStyle2];
          cResult[15] = animatedStyle2;
          cResult[16] = tmp6.speakingIndicatorBar;
          cResult[17] = tmp21;
          cResult[18] = items2;
          tmp23 = items2;
        }
        let tmp22 = null;
        if (stateFromStores) {
          const obj10 = { borderColor: token1 };
          tmp22 = obj10;
        }
        cResult[12] = stateFromStores;
        cResult[13] = token1;
        cResult[14] = tmp22;
        tmp21 = tmp22;
      }
      const obj11 = { style: tmp17, layout };
      const tmp20 = closure_21(tmp4(tmp2[42]), obj11);
      cResult[9] = layout;
      cResult[10] = tmp17;
      cResult[11] = tmp20;
      tmp18 = tmp20;
    }
    const items3 = [tmp6.speakingIndicatorUnderlay, animatedStyle1];
    cResult[6] = tmp6.speakingIndicatorUnderlay;
    cResult[7] = animatedStyle1;
    cResult[8] = items3;
    tmp17 = items3;
  }
  const items4 = [tmp6.speakingIndicatorClip, animatedStyle];
  cResult[3] = tmp6.speakingIndicatorClip;
  cResult[4] = animatedStyle;
  cResult[5] = items4;
  tmp16 = items4;
  const obj6 = { mode, VoicePanelModes, focused, id, withSpring: id(isSelf[39]).withSpring, computeCardBorderRadius: userId(isSelf[44]), isSelf, defaultBorderRadius: token, SPEAKING_PHYSICS, speakingOrPlayingSoundboard, SPEAKING_BORDER_SIZE: 3 };
}) : (function SpeakingIndicator(id) {
  id = id.id;
  ({ userId: importDefault, isSelf } = id);
  const speakingOrPlayingSoundboard = id.speakingOrPlayingSoundboard;
  const layout = id.layout;
  let mode;
  const context = mode.useContext(require("VoicePanelStateContext"));
  mode = context.mode;
  const focused = context.focused;
  const tmp2 = closure_30();
  const token = id(isSelf[43]).useToken(require("native").modules.mobile.VOICE_TILE_BORDER_RADIUS);
  obj = id(isSelf[43]);
  const token1 = id(isSelf[43]).useToken(require("native").colors.REDESIGN_INPUT_CONTROL_SELECTED);
  let obj2 = id(isSelf[43]);
  const items = [token];
  const stateFromStores = id(isSelf[23]).useStateFromStores(items, () => SoundboardStore.isUserPlayingSounds(importDefault));
  let obj3 = id(isSelf[23]);
  class S {
    constructor() {
      obj = mode;
      tmp = mode.get() !== VoicePanelModes.PIP;
      if (tmp) {
        tmp2 = focused;
        value = focused.get();
        tmp4 = null;
        id = undefined;
        if (value != null) {
          id = value.id;
        }
        tmp6 = id;
        tmp = id === id;
      }
      num = 1;
      if (tmp) {
        num = 0;
      }
      obj1 = { opacity: num, borderRadius: null };
      tmp7 = closure_2;
      obj3 = closure_0(closure_2[39]);
      num2 = 0;
      if (!tmp) {
        tmp8 = closure_1;
        obj5 = { id: null, mode: null, focused: null, isSelf: null, defaultBorderRadius: null };
        tmp10 = id;
        obj5.id = id;
        tmp9 = closure_1(tmp7[44]);
        obj5.mode = obj.get();
        tmp11 = focused;
        value1 = focused.get();
        tmp13 = null;
        id1 = undefined;
        if (value1 != null) {
          id1 = value1.id;
        }
        obj5.focused = id1;
        tmp15 = isSelf;
        obj5.isSelf = isSelf;
        tmp16 = closure_6;
        obj5.defaultBorderRadius = closure_6;
        num2 = tmp9(obj5);
      }
      str = "animate-always";
      tmp17 = SPEAKING_PHYSICS;
      if (tmp) {
        str = "animate-never";
      }
      obj1.borderRadius = obj3.withSpring(num2, tmp17, str);
      return obj1;
    }
  }
  let obj4 = id(isSelf[15]);
  S.__closure = { mode, VoicePanelModes, focused, id, withSpring: id(isSelf[39]).withSpring, computeCardBorderRadius: require("computeCardBorderRadius"), isSelf, defaultBorderRadius: token, SPEAKING_PHYSICS };
  S.__workletHash = 10993051977798;
  S.__initData = __initData13;
  const animatedStyle = obj4.useAnimatedStyle(S);
  const obj5 = { mode, VoicePanelModes, focused, id, withSpring: id(isSelf[39]).withSpring, computeCardBorderRadius: require("computeCardBorderRadius"), isSelf, defaultBorderRadius: token, SPEAKING_PHYSICS };
  const fn = function h() {
    let tmp = mode.get() === VoicePanelModes.PIP;
    if (!tmp) {
      value = focused.get();
      id = undefined;
      if (value != null) {
        id = value.id;
      }
      tmp = id === id;
    }
    let num = 0;
    if (!tmp) {
      const obj3 = { id, mode: mode.get(), focused: null, isSelf: null, defaultBorderRadius: null };
      value2 = focused.get();
      let id1;
      if (value2 != null) {
        id1 = value2.id;
      }
      obj3.focused = id1;
      obj3.isSelf = isSelf;
      obj3.defaultBorderRadius = token;
      num = computeCardBorderRadiusDefault(obj3);
    }
    let str = "animate-always";
    let str2 = "animate-always";
    if (tmp) {
      str2 = "animate-never";
    }
    const obj4 = { borderRadius: spring.withSpring(num, SPEAKING_PHYSICS, str2), borderWidth: null };
    let num2 = 0;
    if (!tmp) {
      num2 = 0;
      if (speakingOrPlayingSoundboard.get()) {
        num2 = roundToNearestPixelDefault(5);
      }
    }
    if (tmp) {
      str = "animate-never";
    }
    obj4.borderWidth = spring.withSpring(num2, SPEAKING_PHYSICS, str);
    return obj4;
  };
  const obj6 = id(isSelf[15]);
  fn.__closure = { mode, VoicePanelModes, focused, id, withSpring: id(isSelf[39]).withSpring, computeCardBorderRadius: require("computeCardBorderRadius"), isSelf, defaultBorderRadius: token, SPEAKING_PHYSICS, speakingOrPlayingSoundboard, roundToNearestPixel: require("roundToNearestPixel"), SPEAKING_BORDER_SIZE: 3, SPEAKING_INSET: 2 };
  fn.__workletHash = 10981366572356;
  fn.__initData = __initData14;
  const animatedStyle1 = obj6.useAnimatedStyle(fn);
  const obj7 = { mode, VoicePanelModes, focused, id, withSpring: id(isSelf[39]).withSpring, computeCardBorderRadius: require("computeCardBorderRadius"), isSelf, defaultBorderRadius: token, SPEAKING_PHYSICS, speakingOrPlayingSoundboard, roundToNearestPixel: require("roundToNearestPixel"), SPEAKING_BORDER_SIZE: 3, SPEAKING_INSET: 2 };
  const fn2 = function _() {
    let tmp = mode.get() === VoicePanelModes.PIP;
    if (!tmp) {
      value = focused.get();
      id = undefined;
      if (value != null) {
        id = value.id;
      }
      tmp = id === id;
    }
    let num = 0;
    if (!tmp) {
      const obj3 = { id, mode: mode.get(), focused: null, isSelf: null, defaultBorderRadius: null };
      value2 = focused.get();
      let id1;
      if (value2 != null) {
        id1 = value2.id;
      }
      obj3.focused = id1;
      obj3.isSelf = isSelf;
      obj3.defaultBorderRadius = token;
      num = computeCardBorderRadiusDefault(obj3);
    }
    let str = "animate-always";
    let str2 = "animate-always";
    if (tmp) {
      str2 = "animate-never";
    }
    const obj4 = { borderRadius: spring.withSpring(num, SPEAKING_PHYSICS, str2), borderWidth: null };
    let num2 = 0;
    if (!tmp) {
      num2 = 0;
      if (speakingOrPlayingSoundboard.get()) {
        num2 = 3;
      }
    }
    if (tmp) {
      str = "animate-never";
    }
    obj4.borderWidth = spring.withSpring(num2, SPEAKING_PHYSICS, str);
    return obj4;
  };
  const obj8 = id(isSelf[15]);
  fn2.__closure = { mode, VoicePanelModes, focused, id, withSpring: id(isSelf[39]).withSpring, computeCardBorderRadius: require("computeCardBorderRadius"), isSelf, defaultBorderRadius: token, SPEAKING_PHYSICS, speakingOrPlayingSoundboard, SPEAKING_BORDER_SIZE: 3 };
  fn2.__workletHash = 7340222275404;
  fn2.__initData = __initData15;
  const animatedStyle2 = obj8.useAnimatedStyle(fn2);
  const obj10 = { style: tmp2.speakingIndicatorWrapper, layout, pointerEvents: "none", children: null };
  const obj9 = { mode, VoicePanelModes, focused, id, withSpring: id(isSelf[39]).withSpring, computeCardBorderRadius: require("computeCardBorderRadius"), isSelf, defaultBorderRadius: token, SPEAKING_PHYSICS, speakingOrPlayingSoundboard, SPEAKING_BORDER_SIZE: 3 };
  const obj11 = { style: null, children: null };
  const items1 = [tmp2.speakingIndicatorClip, animatedStyle];
  obj11.style = items1;
  let tmp10 = require("ReanimatedNativeView");
  const obj12 = { style: null, layout };
  const items2 = [tmp2.speakingIndicatorUnderlay, animatedStyle1];
  obj12.style = items2;
  const items3 = [closure_21(require("ReanimatedNativeView"), obj12), ];
  const items4 = [tmp2.speakingIndicatorBar, , ];
  let tmp14 = null;
  const tmp12 = require("ReanimatedNativeView");
  if (stateFromStores) {
    const obj13 = { borderColor: token1 };
    tmp14 = obj13;
  }
  items4[1] = tmp14;
  items4[2] = animatedStyle2;
  items3[1] = closure_21(require("ReanimatedNativeView"), { style: items4, layout });
  obj11.children = items3;
  obj10.children = closure_23(tmp12, obj11);
  return closure_21(tmp10, obj10);
});
ReactCompilerGating = fn(558);
let closure_51 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function LazySpeakingIndicator(id) {
  _require = id;
  const cResult = require("c").c(9);
  if (cResult[0] !== id.id) {
    const fn = function l() {
      let isSpeakingResult = SpeakingStore.isSpeaking(id.id);
      if (!isSpeakingResult) {
        isSpeakingResult = SoundboardStore.isUserPlayingSounds(id.id);
      }
      return isSpeakingResult;
    };
    cResult[0] = id.id;
    cResult[1] = fn;
    let tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  const tmp3 = id(noop.useState(tmp2), 2);
  const first = tmp3[0];
  dependencyMap = tmp3[1];
  id = id.id;
  if (cResult[2] === id) {
    if (cResult[3] === first) {
      let tmp5 = cResult[4];
      let tmp6 = cResult[5];
    }
    const effect = noop.useEffect(tmp5, tmp6);
    if (cResult[6] === id) {
      if (cResult[7] === first) {
        let tmp8 = cResult[8];
      }
      return tmp8;
    }
    let tmp9 = null;
    if (first) {
      const obj3 = {};
      const merged = Object.assign(id);
      tmp9 = closure_21(closure_50, obj3);
    }
    cResult[6] = id;
    cResult[7] = first;
    cResult[8] = tmp9;
    tmp8 = tmp9;
  }
  class S {
    constructor() {
      if (!closure_1) {
        tmp = closure_9;
        flag = false;
        result = closure_9.addConditionalChangeListener(() => {
          const isSpeakingResult = speaking.isSpeaking(id);
          let flag = !isSpeakingResult;
          if (isSpeakingResult) {
            closure_1_2(true);
            flag = false;
          }
          return flag;
        }, false);
        tmp3 = closure_6;
        result1 = closure_6.addConditionalChangeListener(() => {
          const isUserPlayingSoundsResult = userPlayingSounds.isUserPlayingSounds(id);
          let flag = !isUserPlayingSoundsResult;
          if (isUserPlayingSoundsResult) {
            closure_1_2(true);
            flag = false;
          }
          return flag;
        }, false);
      }
      return;
    }
  }
  const items = [first, id];
  cResult[2] = id;
  cResult[3] = first;
  cResult[4] = S;
  cResult[5] = items;
  tmp6 = items;
  tmp5 = S;
  obj = require("c");
}) : (function LazySpeakingIndicator(id) {
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
  const items = [first, id];
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
    tmp4 = closure_21(closure_50, obj);
  }
  return tmp4;
}));
const __initData16 = { code: "function VoicePanelCardTsx17(){const{focused}=this.__closure;var _focused$get;return(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id;}" };
const __initData17 = { code: "function VoicePanelCardTsx18(focusedId_0,previous){const{runOnJS,handleFocusedParticipantChange}=this.__closure;if(focusedId_0===previous){return;}runOnJS(handleFocusedParticipantChange)(focusedId_0);}" };
const __initData18 = { code: "function VoicePanelCardTsx19(){const{mode,focused,sharedTransitionState}=this.__closure;return{mode:mode.get(),focused:focused.get(),transitionState:sharedTransitionState.get()};}" };
const __initData19 = { code: "function VoicePanelCardTsx20(props,previous_0){const{cheapWorkletShallowEqual,VoicePanelModes,TransitionStates,sharedVisible,isScrollVisible,runOnJS,cleanUp,id}=this.__closure;if(cheapWorkletShallowEqual(props,previous_0!==null&&previous_0!==void 0?previous_0:undefined)){return;}const{mode:mode_0,focused:focused_0,transitionState:transitionState_0}=props;const isPIPMode=mode_0===VoicePanelModes.PIP;const manuallyFocusedId=focused_0===null||focused_0===void 0?void 0:focused_0.id;if(previous_0==null&&transitionState_0!==TransitionStates.YEETED){sharedVisible.set(1);}else{if(transitionState_0===TransitionStates.YEETED){if(sharedVisible.get()===1&&isScrollVisible.get()){sharedVisible.set(0);}else{runOnJS(cleanUp)();}}else{if((previous_0===null||previous_0===void 0?void 0:previous_0.transitionState)===TransitionStates.YEETED){sharedVisible.set(1);}else{if(!isPIPMode){if(manuallyFocusedId==null){sharedVisible.set(1);}else{if(manuallyFocusedId!==id){sharedVisible.set(0);}else{sharedVisible.set(1);}}}}}}}" };
const __initData20 = { code: "function VoicePanelCardTsx21(){const{focused}=this.__closure;var _focused$get;return(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id;}" };
const __initData21 = { code: "function VoicePanelCardTsx22(focusedId_0,previous){const{runOnJS,handleFocusedParticipantChange}=this.__closure;if(focusedId_0===previous)return;runOnJS(handleFocusedParticipantChange)(focusedId_0);}" };
const __initData22 = { code: "function VoicePanelCardTsx23(){const{mode,focused,sharedTransitionState}=this.__closure;return{mode:mode.get(),focused:focused.get(),transitionState:sharedTransitionState.get()};}" };
const __initData23 = { code: "function VoicePanelCardTsx24(props,previous_0){const{cheapWorkletShallowEqual,VoicePanelModes,TransitionStates,sharedVisible,isScrollVisible,runOnJS,cleanUp,id}=this.__closure;if(cheapWorkletShallowEqual(props,previous_0!==null&&previous_0!==void 0?previous_0:undefined))return;const{mode:mode_0,focused:focused_0,transitionState:transitionState_0}=props;const isPIPMode=mode_0===VoicePanelModes.PIP;const manuallyFocusedId=focused_0===null||focused_0===void 0?void 0:focused_0.id;if(previous_0==null&&transitionState_0!==TransitionStates.YEETED){sharedVisible.set(1);}else if(transitionState_0===TransitionStates.YEETED){if(sharedVisible.get()===1&&isScrollVisible.get()){sharedVisible.set(0);}else{runOnJS(cleanUp)();}}else if((previous_0===null||previous_0===void 0?void 0:previous_0.transitionState)===TransitionStates.YEETED){sharedVisible.set(1);}else if(!isPIPMode){if(manuallyFocusedId==null){sharedVisible.set(1);}else{if(manuallyFocusedId!==id){sharedVisible.set(0);}else{sharedVisible.set(1);}}}}" };
ReactCompilerGating = fn(558);
let closure_60 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSharedTransitionState(id) {
  const cResult = id(transitionState[22]).c(6);
  id = id.id;
  ({ participant: importDefault, transitionState } = id);
  const cleanUp = id.cleanUp;
  const mode = id.mode;
  const focused = id.focused;
  const isScrollVisible = id.isScrollVisible;
  const sharedVisible = id.sharedVisible;
  obj = id(transitionState[22]);
  const sharedValue = id(transitionState[15]).useSharedValue(transitionState);
  const obj2 = id(transitionState[15]);
  const obj3 = mode;
  [tmp4, SpeakingStore] = cleanUp(mode.useState(true), 2);
  function handleFocusedParticipantChange(arg0) {
    type = undefined;
    if (type != null) {
      type = type.type;
    }
    if (type === ParticipantTypes.ACTIVITY) {
      SpeakingStore(arg0 !== id);
    }
  }
  let tmp3 = cleanUp(mode.useState(true), 2);
  const fn = function l() {
    value = focused.get();
    id = undefined;
    if (value != null) {
      id = value.id;
    }
    return id;
  };
  fn.__closure = { focused };
  fn.__workletHash = 11657970594532;
  fn.__initData = __initData16;
  const fn2 = function o(arg0, arg1) {
    if (arg0 !== arg1) {
      ReanimatedRexport2.runOnJS(handleFocusedParticipantChange)(arg0);
    }
  };
  const obj4 = id(transitionState[15]);
  fn2.__closure = { runOnJS: id(transitionState[15]).runOnJS, handleFocusedParticipantChange };
  fn2.__workletHash = 17532866120556;
  fn2.__initData = __initData17;
  const animatedReaction = obj4.useAnimatedReaction(fn, fn2);
  const obj5 = { runOnJS: id(transitionState[15]).runOnJS, handleFocusedParticipantChange };
  const fn3 = function u() {
    return { mode: mode.get(), focused: focused.get(), transitionState: sharedValue.get() };
  };
  fn3.__closure = { mode, focused, sharedTransitionState: sharedValue };
  fn3.__workletHash = 16460342773567;
  fn3.__initData = __initData18;
  const fn4 = function c(mode, transitionState) {
    if (!obj.cheapWorkletShallowEqual(mode, tmp3)) {
      ({ focused, transitionState } = mode);
      if (focused != null) {
        id = focused.id;
      }
      if (null == transitionState) {
        if (transitionState !== native.TransitionStates.YEETED) {
          const result = sharedVisible.set(1);
        }
      }
      if (transitionState === native.TransitionStates.YEETED) {
        if (1 === sharedVisible.get()) {
          if (isScrollVisible.get()) {
            const result1 = sharedVisible.set(0);
          }
        }
        ReanimatedRexport2.runOnJS(cleanUp)();
        const tmpResult = ReanimatedRexport2;
      } else {
        let transitionState1;
        if (transitionState != null) {
          transitionState1 = transitionState.transitionState;
        }
        if (transitionState1 === native.TransitionStates.YEETED) {
          const result2 = sharedVisible.set(1);
        } else if (mode.mode !== VoicePanelModes.PIP) {
          if (null == id) {
            const result3 = sharedVisible.set(1);
          } else if (id !== id) {
            const result4 = sharedVisible.set(0);
          } else {
            const result5 = sharedVisible.set(1);
          }
        }
      }
    }
    obj = cheapWorkletShallowEqual;
    tmp3 = transitionState;
  };
  const obj6 = id(transitionState[15]);
  fn4.__closure = { cheapWorkletShallowEqual: id(transitionState[46]).cheapWorkletShallowEqual, VoicePanelModes, TransitionStates: id(transitionState[47]).TransitionStates, sharedVisible, isScrollVisible, runOnJS: id(transitionState[15]).runOnJS, cleanUp, id };
  fn4.__workletHash = 14989414495662;
  fn4.__initData = __initData19;
  const animatedReaction1 = obj6.useAnimatedReaction(fn3, fn4);
  if (cResult[0] === sharedValue) {
    if (cResult[1] === transitionState) {
      let tmp7 = cResult[2];
    }
    const layoutEffect = obj3.useLayoutEffect(tmp7);
    if (cResult[3] === tmp4) {
      if (cResult[4] === sharedValue) {
        let tmp9 = cResult[5];
      }
      return tmp9;
    }
    const obj8 = { sharedTransitionState: sharedValue, cardGestureEnabled: tmp4 };
    cResult[3] = tmp4;
    cResult[4] = sharedValue;
    cResult[5] = obj8;
    tmp9 = obj8;
  }
  class S {
    constructor() {
      result = closure_8.set(transitionState);
      return;
    }
  }
  cResult[0] = sharedValue;
  cResult[1] = transitionState;
  cResult[2] = S;
  tmp7 = S;
}) : (function useSharedTransitionState(id) {
  id = id.id;
  const participant = id.participant;
  const transitionState = id.transitionState;
  const cleanUp = id.cleanUp;
  const mode = id.mode;
  const focused = id.focused;
  const isScrollVisible = id.isScrollVisible;
  const sharedVisible = id.sharedVisible;
  let handleFocusedParticipantChange;
  const sharedTransitionState = id(transitionState[15]).useSharedValue(transitionState);
  const cardGestureEnabled = cleanUp(mode.useState(true), 2);
  closure_9 = cardGestureEnabled[1];
  let type;
  if (participant != null) {
    type = participant.type;
  }
  const items = [type, id];
  handleFocusedParticipantChange = mode.useCallback((arg0) => {
    let type;
    if (participant != null) {
      type = participant.type;
    }
    if (type === ParticipantTypes.ACTIVITY) {
      closure_9(arg0 !== id);
    }
  }, items);
  obj = id(transitionState[15]);
  const obj2 = mode;
  class P {
    constructor() {
      value = focused.get();
      id = undefined;
      if (value != null) {
        id = value.id;
      }
      return id;
    }
  }
  P.__closure = { focused };
  P.__workletHash = 14565336493281;
  P.__initData = __initData20;
  const fn = function f(arg0, arg1) {
    if (arg0 !== arg1) {
      ReanimatedRexport2.runOnJS(callback)(arg0);
    }
  };
  let tmpResult = id(transitionState[15]);
  fn.__closure = { runOnJS: id(transitionState[15]).runOnJS, handleFocusedParticipantChange };
  fn.__workletHash = 9126813650947;
  fn.__initData = __initData21;
  const animatedReaction = tmpResult.useAnimatedReaction(P, fn);
  const obj3 = { runOnJS: id(transitionState[15]).runOnJS, handleFocusedParticipantChange };
  class C {
    constructor() {
      obj = { mode: mode.get(), focused: focused.get(), transitionState: closure_8.get() };
      return obj;
    }
  }
  C.__closure = { mode, focused, sharedTransitionState };
  C.__workletHash = 653803491766;
  C.__initData = __initData22;
  class I {
    constructor(arg0, arg1) {
      tmp = closure_0;
      tmp2 = closure_2;
      obj = closure_0(closure_2[46]);
      tmp3 = arg1;
      if (!obj.cheapWorkletShallowEqual(id, tmp3)) {
        ({ focused, transitionState } = id);
        tmp4 = VoicePanelModes;
        if (focused != null) {
          id = focused.id;
        }
        if (null == arg1) {
          if (transitionState !== tmp(tmp2[47]).TransitionStates.YEETED) {
            tmp19 = sharedVisible;
            num7 = 1;
            result = sharedVisible.set(1);
          }
        }
        if (transitionState === tmp(tmp2[47]).TransitionStates.YEETED) {
          obj2 = sharedVisible;
          num5 = 1;
          if (1 === sharedVisible.get()) {
            tmp15 = isScrollVisible;
            if (isScrollVisible.get()) {
              num6 = 0;
              result1 = obj2.set(0);
            }
          }
          tmpResult = tmp(tmp2[15]);
          tmp16 = cleanUp;
          tmp17 = tmpResult.runOnJS(cleanUp)();
        } else {
          transitionState1 = undefined;
          if (arg1 != null) {
            transitionState1 = arg1.transitionState;
          }
          if (transitionState1 === tmp(tmp2[47]).TransitionStates.YEETED) {
            tmp13 = sharedVisible;
            num4 = 1;
            result2 = sharedVisible.set(1);
          } else if (id.mode !== VoicePanelModes.PIP) {
            if (null == id) {
              tmp11 = sharedVisible;
              num3 = 1;
              result3 = sharedVisible.set(1);
            } else {
              tmp6 = id;
              if (id !== id) {
                tmp9 = sharedVisible;
                num2 = 0;
                result4 = sharedVisible.set(0);
              } else {
                tmp7 = sharedVisible;
                num = 1;
                result5 = sharedVisible.set(1);
              }
            }
          }
        }
      }
      return;
    }
  }
  const tmpResult2 = id(transitionState[15]);
  I.__closure = { cheapWorkletShallowEqual: id(transitionState[46]).cheapWorkletShallowEqual, VoicePanelModes, TransitionStates: id(transitionState[47]).TransitionStates, sharedVisible, isScrollVisible, runOnJS: id(transitionState[15]).runOnJS, cleanUp, id };
  I.__workletHash = 751243994154;
  I.__initData = __initData23;
  const animatedReaction1 = tmpResult2.useAnimatedReaction(C, I);
  const layoutEffect = obj2.useLayoutEffect(() => {
    const result = sharedTransitionState.set(transitionState);
  });
  return { sharedTransitionState, cardGestureEnabled: cardGestureEnabled[0] };
});
let closure_61 = { isSelf: false, hasVideo: false, user: { id: "r" } };
function layoutTransitionFunction(originX, SUBTLE_SPRING, scale, sharedValue2) {
  if (flag === undefined) {
    flag = false;
  }
  value = scale.get();
  let result = value / sharedValue2.get();
  let str = "respect-motion-settings";
  if (flag) {
    str = "animate-never";
  }
  obj = { animations: null, initialValues: null, callback: null };
  const size = { originX: spring.withSpring(originX.targetOriginX, SUBTLE_SPRING, str), originY: null, width: null, height: null };
  size.originY = spring.withSpring(originX.targetOriginY, SUBTLE_SPRING, str);
  size.width = spring.withSpring(originX.targetWidth, SUBTLE_SPRING, str);
  size.height = spring.withSpring(originX.targetHeight, SUBTLE_SPRING, str);
  obj.animations = size;
  obj.initialValues = { originX: originX.currentOriginX, originY: originX.currentOriginY, width: originX.currentWidth * result, height: originX.currentHeight * result };
  obj.callback = function callback() {
    const result = sharedValue2.set(scale.get());
  };
  return obj;
}
let obj6 = { position: "relative", borderRadius: nativeDefault.radii.round, overflow: "hidden" };
let obj7 = {};
layoutTransitionFunction.__closure = { withSpring: fn(5247).withSpring };
layoutTransitionFunction.__workletHash = 14607823135698;
layoutTransitionFunction.__initData = { code: "function layoutTransitionFunction_VoicePanelCardTsx25(values,physics,scale,lastScale,disableAnimation=false){const{withSpring}=this.__closure;const scaleAdjustment=scale.get()/lastScale.get();const shouldAnimate=!disableAnimation?'respect-motion-settings':'animate-never';return{animations:{originX:withSpring(values.targetOriginX,physics,shouldAnimate),originY:withSpring(values.targetOriginY,physics,shouldAnimate),width:withSpring(values.targetWidth,physics,shouldAnimate),height:withSpring(values.targetHeight,physics,shouldAnimate)},initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth*scaleAdjustment,height:values.currentHeight*scaleAdjustment},callback:function(){lastScale.set(scale.get());}};}" };
const __initData24 = { code: "function VoicePanelCardTsx26(){const{id,pipState,mode,VoicePanelModes}=this.__closure;if(id===pipState.id&&mode.get()===VoicePanelModes.PIP){return true;}return false;}" };
const __initData25 = { code: "function VoicePanelCardTsx27(){const{focused,id,mode,VoicePanelModes,scrollPosition}=this.__closure;var _focused$get;return((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id||mode.get()===VoicePanelModes.PIP?scrollPosition.get():0;}" };
const __initData26 = { code: "function VoicePanelCardTsx28(){const{connected,EDGE_GUTTER,safeArea,windowDimensions,contentDimensions,wrapperDimensions}=this.__closure;return connected.get()?Math.max(EDGE_GUTTER,safeArea.get().left,(windowDimensions.get().width-contentDimensions.get().width)/2):wrapperDimensions.get().drawerWidth/2;}" };
const __initData27 = { code: "function VoicePanelCardTsx29(){const{coords,focused,id,isPIP,pipState,getScaledPIPContainerHeight,getClampedPIPPosition,wrapperDimensions,windowDimensions,safeArea,pipAvoidanceSpecs,derivedScrollValue,xOffset,calculateContentCenterOffset,contentDimensions,sharedTransitionState,TransitionStates,zIndexOverride,computeCardBorderRadius,mode,isSelf,defaultBorderRadius,sharedVisible,isRTCConnected,CONNECTING_OPACITY,wrapperOffset,withDelay,withTiming,ZINDEX_TIMING,OPACITY_TIMING,isScrollVisible,runOnJS,cleanUp,withSpring,layoutPhysics,CARD_SCALE_PHYSICS,SCALE_PHYSICS}=this.__closure;var _focused$get,_focused$get2,_focused$get3,_focused$get4;let{zIndex:zIndex,width:width,height:height,x:x,y:y}=coords.get();const isFocused=((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;if(isPIP){const pipScale=pipState.scale.get();width=pipState.width*pipScale;height=pipState.height*pipScale;const pipHeight=getScaledPIPContainerHeight({height:pipState.height,containerHeight:pipState.containerHeight,showSecondaryPIP:pipState.showSecondaryPIP,scale:pipScale});const pipPosition=getClampedPIPPosition({pipX:wrapperDimensions.get().pipX,pipY:wrapperDimensions.get().pipY,width:width,height:pipHeight,windowDimensions:windowDimensions.get(),safeArea:safeArea.get(),bottomAvoidanceRegion:pipAvoidanceSpecs.get().bottom,topAvoidanceRegion:pipAvoidanceSpecs.get().top});x=pipPosition.x;y=derivedScrollValue.get()+pipPosition.y;}else{if(focused.get()!=null){if(isFocused){zIndex=1;width=windowDimensions.get().width;height=windowDimensions.get().height;x=0;y=derivedScrollValue.get();}else{zIndex=0;}}else{x=x+xOffset.get();y=y+calculateContentCenterOffset({contentHeight:contentDimensions.get().height,windowHeight:windowDimensions.get().height,safeArea:safeArea.get()});if(sharedTransitionState.get()===TransitionStates.YEETED){y=y+height/4;}}}if(zIndexOverride.get()){zIndex=9001;}const borderRadius=computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius});const opacity=sharedVisible.get()===0&&((_focused$get3=focused.get())===null||_focused$get3===void 0?void 0:_focused$get3.id)!==id?0:!isFocused&&!isRTCConnected?CONNECTING_OPACITY:1;const gestureActive=wrapperOffset.get().gestureActive;const scaleTarget=sharedVisible.get()===1||((_focused$get4=focused.get())===null||_focused$get4===void 0?void 0:_focused$get4.id)===id?1:0.8;return{zIndex:withDelay(zIndexOverride.get()?0:100,withTiming(zIndex,ZINDEX_TIMING)),opacity:withTiming(opacity,OPACITY_TIMING,isScrollVisible.get()?\"animate-always\":\"animate-never\",function(finished){if(finished&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){runOnJS(cleanUp)();}}),width:width,height:height,transform:[{translateX:gestureActive?x:withSpring(x,layoutPhysics,\"respect-motion-settings\")},{translateY:gestureActive?y:withSpring(y,layoutPhysics,\"respect-motion-settings\")},{scale:withSpring(scaleTarget,CARD_SCALE_PHYSICS)}],borderRadius:withSpring(borderRadius,SCALE_PHYSICS)};}" };
let closure_67 = { code: "function VoicePanelCardTsx30(finished){const{sharedVisible,sharedTransitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){runOnJS(cleanUp)();}}" };
const __initData28 = { code: "function VoicePanelCardTsx31(finished_0){const{runOnJS,reportPIPArrival}=this.__closure;if(finished_0===true){runOnJS(reportPIPArrival)();}}" };
const __initData29 = { code: "function VoicePanelCardTsx32(values){const{pipState,lastPIPScale,withSpring,layoutPhysics,wrapperOffset}=this.__closure;const scaleAdjustment=pipState.scale.get()/lastPIPScale.get();const initialValues={originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth*scaleAdjustment,height:values.currentHeight*scaleAdjustment};return{animations:{originX:withSpring(values.targetOriginX,layoutPhysics,\"respect-motion-settings\"),originY:withSpring(values.targetOriginY,layoutPhysics,\"respect-motion-settings\"),width:withSpring(values.targetWidth,layoutPhysics,\"respect-motion-settings\"),height:withSpring(values.targetHeight,layoutPhysics,\"respect-motion-settings\")},initialValues:initialValues,callback:function(){const _wrapperOffset=wrapperOffset.get();if(!_wrapperOffset.gestureActive&&_wrapperOffset.y!==0){wrapperOffset.set({gestureActive:false,x:0,y:0});}lastPIPScale.set(pipState.scale.get());}};}" };
const __initData30 = { code: "function VoicePanelCardTsx33(){const{id,pipState,mode,VoicePanelModes}=this.__closure;if(id===pipState.id&&mode.get()===VoicePanelModes.PIP){return true;}return false;}" };
const __initData31 = { code: "function VoicePanelCardTsx34(){const{focused,id,mode,VoicePanelModes,scrollPosition}=this.__closure;var _focused$get;return((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id||mode.get()===VoicePanelModes.PIP?scrollPosition.get():0;}" };
const __initData32 = { code: "function VoicePanelCardTsx35(){const{connected,EDGE_GUTTER,safeArea,windowDimensions,contentDimensions,wrapperDimensions}=this.__closure;return connected.get()?Math.max(EDGE_GUTTER,safeArea.get().left,(windowDimensions.get().width-contentDimensions.get().width)/2):wrapperDimensions.get().drawerWidth/2;}" };
const __initData33 = { code: "function VoicePanelCardTsx36(){const{coords,focused,id,isPIP,pipState,getScaledPIPContainerHeight,getClampedPIPPosition,wrapperDimensions,windowDimensions,safeArea,pipAvoidanceSpecs,derivedScrollValue,xOffset,calculateContentCenterOffset,contentDimensions,sharedTransitionState,TransitionStates,zIndexOverride,computeCardBorderRadius,mode,isSelf,defaultBorderRadius,sharedVisible,isRTCConnected,CONNECTING_OPACITY,wrapperOffset,withDelay,withTiming,ZINDEX_TIMING,OPACITY_TIMING,isScrollVisible,runOnJS,cleanUp,withSpring,layoutPhysics,CARD_SCALE_PHYSICS,SCALE_PHYSICS}=this.__closure;var _focused$get,_focused$get2,_focused$get3,_focused$get4;let{zIndex:zIndex,width:width,height:height,x:x,y:y}=coords.get();const isFocused=((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;if(isPIP){const pipScale=pipState.scale.get();width=pipState.width*pipScale;height=pipState.height*pipScale;const pipHeight=getScaledPIPContainerHeight({height:pipState.height,containerHeight:pipState.containerHeight,showSecondaryPIP:pipState.showSecondaryPIP,scale:pipScale});const pipPosition=getClampedPIPPosition({pipX:wrapperDimensions.get().pipX,pipY:wrapperDimensions.get().pipY,width:width,height:pipHeight,windowDimensions:windowDimensions.get(),safeArea:safeArea.get(),bottomAvoidanceRegion:pipAvoidanceSpecs.get().bottom,topAvoidanceRegion:pipAvoidanceSpecs.get().top});x=pipPosition.x;y=derivedScrollValue.get()+pipPosition.y;}else if(focused.get()!=null){if(isFocused){zIndex=1;width=windowDimensions.get().width;height=windowDimensions.get().height;x=0;y=derivedScrollValue.get();}else{zIndex=0;}}else{x+=xOffset.get();y+=calculateContentCenterOffset({contentHeight:contentDimensions.get().height,windowHeight:windowDimensions.get().height,safeArea:safeArea.get()});if(sharedTransitionState.get()===TransitionStates.YEETED){y+=height/4;}}if(zIndexOverride.get()){zIndex=9001;}const borderRadius=computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius});const opacity=sharedVisible.get()===0&&((_focused$get3=focused.get())===null||_focused$get3===void 0?void 0:_focused$get3.id)!==id?0:!isFocused&&!isRTCConnected?CONNECTING_OPACITY:1;const gestureActive=wrapperOffset.get().gestureActive;const scaleTarget=sharedVisible.get()===1||((_focused$get4=focused.get())===null||_focused$get4===void 0?void 0:_focused$get4.id)===id?1:0.8;return{zIndex:withDelay(zIndexOverride.get()?0:100,withTiming(zIndex,ZINDEX_TIMING)),opacity:withTiming(opacity,OPACITY_TIMING,isScrollVisible.get()?'animate-always':'animate-never',function(finished){if(finished&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){runOnJS(cleanUp)();}}),width:width,height:height,transform:[{translateX:gestureActive?x:withSpring(x,layoutPhysics,'respect-motion-settings')},{translateY:gestureActive?y:withSpring(y,layoutPhysics,'respect-motion-settings')},{scale:withSpring(scaleTarget,CARD_SCALE_PHYSICS)}],borderRadius:withSpring(borderRadius,SCALE_PHYSICS)};}" };
let closure_74 = { code: "function VoicePanelCardTsx37(finished){const{sharedVisible,sharedTransitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){runOnJS(cleanUp)();}}" };
let closure_75 = { code: "function VoicePanelCardTsx38(finished_0){const{runOnJS,reportPIPArrival}=this.__closure;if(finished_0===true){runOnJS(reportPIPArrival)();}}" };
const __initData34 = { code: "function VoicePanelCardTsx39(values){const{pipState,lastPIPScale,withSpring,layoutPhysics,wrapperOffset}=this.__closure;const scaleAdjustment=pipState.scale.get()/lastPIPScale.get();const initialValues={originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth*scaleAdjustment,height:values.currentHeight*scaleAdjustment};return{animations:{originX:withSpring(values.targetOriginX,layoutPhysics,'respect-motion-settings'),originY:withSpring(values.targetOriginY,layoutPhysics,'respect-motion-settings'),width:withSpring(values.targetWidth,layoutPhysics,'respect-motion-settings'),height:withSpring(values.targetHeight,layoutPhysics,'respect-motion-settings')},initialValues:initialValues,callback:function(){const _wrapperOffset=wrapperOffset.get();if(!_wrapperOffset.gestureActive&&_wrapperOffset.y!==0){wrapperOffset.set({gestureActive:false,x:0,y:0});}lastPIPScale.set(pipState.scale.get());}};}" };
ReactCompilerGating = fn(558);
let closure_77 = ReactCompilerGating.isReactCompilerEnabled() ? (function AnimatedWrapper(coords) {
  const cResult = cleanUp(id[22]).c(67);
  ({ children, cleanUp } = coords);
  coords = coords.coords;
  id = coords.id;
  const isRTCConnected = coords.isRTCConnected;
  const isScrollVisible = coords.isScrollVisible;
  const layoutPhysics = coords.layoutPhysics;
  ({ transitionState, sharedVisible } = coords);
  const analyticsLocations = coords(id[48])().analyticsLocations;
  sharedTransitionState();
  const context = isScrollVisible.useContext(coords(id[29]));
  const channelId = context.channelId;
  const connected = context.connected;
  const contentDimensions = context.contentDimensions;
  const controlsSpecs = context.controlsSpecs;
  const focused = context.focused;
  const hideControls = context.hideControls;
  const mode = context.mode;
  ({ mountedCards, pipAvoidanceSpecs } = context);
  const safeArea = context.safeArea;
  const scrollPosition = context.scrollPosition;
  const setFocused = context.setFocused;
  const showControls = context.showControls;
  const windowDimensions = context.windowDimensions;
  const wrapperDimensions = context.wrapperDimensions;
  const wrapperOffset = context.wrapperOffset;
  const pipHandoff = context.pipHandoff;
  obj = cleanUp(id[22]);
  const pIPState = cleanUp(id[49]).usePIPState();
  const tmp8 = coords(id[50])(id, channelId, context.guildId);
  if (cResult[0] !== tmp8) {
    let tmp10 = tmp8;
    if (!tmpResult.isStableParticipantWithUser(tmp8)) {
      tmp10 = closure_61;
    }
    cResult[0] = tmp8;
    cResult[1] = tmp10;
    let tmp9 = tmp10;
    tmpResult = cleanUp(tmp2[50]);
  } else {
    tmp9 = cResult[1];
  }
  const isSelf = tmp9.isSelf;
  let id2 = tmp9.user.id;
  const obj3 = cleanUp(id[49]);
  function ee() {
    let tmp = id === pIPState.id;
    if (tmp) {
      tmp = mode.get() === VoicePanelModes.PIP;
    }
    return tmp;
  }
  ee.__closure = { id, pipState: pIPState, mode, VoicePanelModes: controlsSpecs };
  ee.__workletHash = 13055769514275;
  ee.__initData = __initData24;
  const derivedValue = cleanUp(id[15]).useDerivedValue(ee);
  let obj4 = { id, pipState: pIPState, mode, VoicePanelModes: controlsSpecs };
  const tmpResult9 = cleanUp(id[15]);
  function te() {
    value = focused.get();
    id = undefined;
    if (value != null) {
      id = value.id;
    }
    if (id === id) {
      let num = scrollPosition.get();
    } else {
      num = 0;
    }
    return num;
  }
  te.__closure = { focused, id, mode, VoicePanelModes: controlsSpecs, scrollPosition };
  te.__workletHash = 17164022773012;
  te.__initData = __initData25;
  const derivedValue1 = cleanUp(id[15]).useDerivedValue(te);
  const tmpResult10 = cleanUp(id[15]);
  function ie() {
    if (connected.get()) {
      const _Math = Math;
      let bound = Math.max(EDGE_GUTTER, safeArea.get().left, (windowDimensions.get().width - contentDimensions.get().width) / 2);
    } else {
      bound = wrapperDimensions.get().drawerWidth / 2;
    }
    return bound;
  }
  ie.__closure = { connected, EDGE_GUTTER: scrollPosition, safeArea, windowDimensions, contentDimensions, wrapperDimensions };
  ie.__workletHash = 4094014471347;
  ie.__initData = __initData26;
  const derivedValue2 = cleanUp(id[15]).useDerivedValue(ie);
  if (cResult[2] === cleanUp) {
    if (cResult[3] === focused) {
      if (cResult[4] === id) {
        if (cResult[5] === isScrollVisible) {
          if (cResult[6] === mode) {
            if (cResult[7] === mountedCards) {
              if (cResult[8] === tmp8) {
                if (cResult[9] === sharedVisible) {
                  if (cResult[10] === transitionState) {
                    let tmp14 = cResult[11];
                  }
                  const tmp16 = closure_60(tmp14);
                  sharedTransitionState = tmp16.sharedTransitionState;
                  closure_31 = tmp18;
                  const token = cleanUp(tmp2[43]).useToken(tmp4(tmp2[20]).modules.mobile.VOICE_TILE_BORDER_RADIUS);
                  const tmpResult12 = cleanUp(tmp2[43]);
                  function ce() {
                    value = coords.get();
                    ({ zIndex, width, height, x, y } = value);
                    const value7 = focused.get();
                    id = undefined;
                    if (value7 != null) {
                      id = value7.id;
                    }
                    if (closure_31) {
                      scale = pIPState.scale;
                      const value8 = scale.get();
                      const result = pIPState.width * value8;
                      let height2 = pIPState.height * value8;
                      const obj5 = { height: null, containerHeight: null, showSecondaryPIP: null, scale: null };
                      ({ height: obj3.height, containerHeight: obj3.containerHeight, showSecondaryPIP: obj3.showSecondaryPIP } = pIPState);
                      obj5.scale = value8;
                      const scaledPIPContainerHeight = VoicePanelPIPUtils.getScaledPIPContainerHeight(obj5);
                      const size = { pipX: wrapperDimensions.get().pipX, pipY: wrapperDimensions.get().pipY, width: result, height: scaledPIPContainerHeight, windowDimensions: windowDimensions.get(), safeArea: safeArea.get(), bottomAvoidanceRegion: pipAvoidanceSpecs.get().bottom, topAvoidanceRegion: pipAvoidanceSpecs.get().top };
                      const point = VoicePanelPIPUtils.getClampedPIPPosition(size);
                      let num = point.x;
                      let sum = derivedValue1.get() + point.y;
                      let width2 = result;
                      let num2 = zIndex;
                    } else if (null != focused.get()) {
                      sum = y;
                      num = x;
                      height2 = height;
                      width2 = width;
                      num2 = 0;
                      if (tmp5) {
                        width2 = windowDimensions.get().width;
                        height2 = windowDimensions.get().height;
                        sum = derivedValue1.get();
                        num2 = 1;
                        num = 0;
                      }
                    } else {
                      const sum1 = x + derivedValue2.get();
                      const obj7 = { contentHeight: contentDimensions.get().height, windowHeight: windowDimensions.get().height, safeArea: safeArea.get() };
                      const sum2 = y + calculateContentCenterOffsetDefault(obj7);
                      const value9 = sharedTransitionState.get();
                      sum = sum2;
                      num = sum1;
                      height2 = height;
                      width2 = width;
                      num2 = zIndex;
                      if (value9 === native.TransitionStates.YEETED) {
                        sum = sum2 + height / 4;
                        num = sum1;
                        height2 = height;
                        width2 = width;
                        num2 = zIndex;
                      }
                    }
                    if (derivedValue.get()) {
                      num2 = 9001;
                    }
                    const obj10 = { id, mode: mode.get(), focused: null, isSelf: null, defaultBorderRadius: null };
                    const value10 = focused.get();
                    let id1;
                    if (value10 != null) {
                      id1 = value10.id;
                    }
                    obj10.focused = id1;
                    obj10.isSelf = isSelf;
                    obj10.defaultBorderRadius = token;
                    if (0 !== sharedVisible.get()) {
                      let num5 = 1;
                      if (!tmp5) {
                        num5 = 1;
                        if (!isRTCConnected) {
                          num5 = c29;
                        }
                      }
                      let num3 = num5;
                    } else {
                      const value11 = focused.get();
                      id2 = undefined;
                      if (value11 != null) {
                        id2 = value11.id;
                      }
                      num3 = 0;
                    }
                    const gestureActive = wrapperOffset.get().gestureActive;
                    if (1 === sharedVisible.get()) {
                      let num6 = 1;
                    } else {
                      const value12 = focused.get();
                      let id3;
                      if (value12 != null) {
                        id3 = value12.id;
                      }
                      num6 = 0.8;
                    }
                    const tmp22Result = computeCardBorderRadiusDefault(obj10);
                    let num7 = 100;
                    if (derivedValue.get()) {
                      num7 = 0;
                    }
                    const size1 = { zIndex: null, opacity: null, width: null, height: null, transform: null, borderRadius: null };
                    const obj9 = ReanimatedRexport2;
                    size1.zIndex = obj9.withDelay(num7, timing.withTiming(num2, closure_28));
                    let str = "animate-never";
                    if (isScrollVisible.get()) {
                      str = "animate-always";
                    }
                    const fn = function y(arg0) {
                      let tmp = arg0;
                      if (arg0) {
                        tmp = 0 === sharedVisible.get();
                      }
                      if (tmp) {
                        value = sharedTransitionState.get();
                        tmp = value === cleanUp(id[47]).TransitionStates.YEETED;
                      }
                      if (tmp) {
                        cleanUp(id[15]).runOnJS(closure_1_0)();
                        obj = cleanUp(id[15]);
                      }
                    };
                    const obj12 = timing;
                    fn.__closure = { sharedVisible, sharedTransitionState, TransitionStates: native.TransitionStates, runOnJS: ReanimatedRexport2.runOnJS, cleanUp };
                    fn.__workletHash = 13155030685943;
                    fn.__initData = __initData;
                    size1.opacity = obj12.withTiming(num3, closure_27, str, fn);
                    size1.width = width2;
                    size1.height = height2;
                    let withSpringResult = num;
                    if (!gestureActive) {
                      withSpringResult = spring.withSpring(num, layoutPhysics, "respect-motion-settings");
                    }
                    const items = [{ translateX: withSpringResult }, , ];
                    let withSpringResult1 = sum;
                    if (!gestureActive) {
                      withSpringResult1 = spring.withSpring(sum, layoutPhysics, "respect-motion-settings");
                    }
                    items[1] = { translateY: withSpringResult1 };
                    const obj16 = { scale: null };
                    const obj13 = { sharedVisible, sharedTransitionState, TransitionStates: native.TransitionStates, runOnJS: ReanimatedRexport2.runOnJS, cleanUp };
                    obj16.scale = spring.withSpring(num6, focused);
                    items[2] = obj16;
                    size1.transform = items;
                    size1.borderRadius = spring.withSpring(tmp22Result, SCALE_PHYSICS);
                    return size1;
                  }
                  let obj6 = { coords, focused, id, isPIP: pIPState.mode === safeArea.IN_APP, pipState: pIPState, getScaledPIPContainerHeight: cleanUp(tmp2[51]).getScaledPIPContainerHeight, getClampedPIPPosition: cleanUp(tmp2[51]).getClampedPIPPosition, wrapperDimensions, windowDimensions, safeArea, pipAvoidanceSpecs, derivedScrollValue: derivedValue1, xOffset: derivedValue2, calculateContentCenterOffset: tmp4(tmp2[52]), contentDimensions, sharedTransitionState, TransitionStates: cleanUp(tmp2[47]).TransitionStates, zIndexOverride: derivedValue, computeCardBorderRadius: tmp4(tmp2[44]), mode, isSelf, defaultBorderRadius: token, sharedVisible, isRTCConnected, CONNECTING_OPACITY: derivedValue2, wrapperOffset, withDelay: cleanUp(tmp2[15]).withDelay, withTiming: cleanUp(tmp2[38]).withTiming, ZINDEX_TIMING: derivedValue1, OPACITY_TIMING: derivedValue, isScrollVisible, runOnJS: cleanUp(tmp2[15]).runOnJS, cleanUp, withSpring: cleanUp(tmp2[39]).withSpring, layoutPhysics, CARD_SCALE_PHYSICS: id2, SCALE_PHYSICS: windowDimensions };
                  ce.__closure = obj6;
                  ce.__workletHash = 7444094303589;
                  ce.__initData = __initData27;
                  const animatedStyle = cleanUp(tmp2[15]).useAnimatedStyle(ce);
                  if (cResult[12] === controlsSpecs) {
                    if (cResult[13] === hideControls) {
                      if (cResult[14] === showControls) {
                        let tmp27 = cResult[15];
                      }
                      if (cResult[16] === focused) {
                        if (cResult[17] === id) {
                          if (cResult[18] === isSelf) {
                            if (cResult[19] === tmp8) {
                              if (cResult[20] === setFocused) {
                                let tmp28 = cResult[21];
                              }
                              if (cResult[22] === analyticsLocations) {
                                if (cResult[23] === channelId) {
                                  if (cResult[24] === id2) {
                                    let tmp31 = cResult[25];
                                  }
                                  if (cResult[26] === tmp16.cardGestureEnabled) {
                                    if (cResult[27] === tmp27) {
                                      if (cResult[28] === tmp28) {
                                        if (cResult[29] === tmp31) {
                                          let tmp33 = cResult[30];
                                        }
                                        tmp4(tmp2[54])(tmp33);
                                        if (cResult[31] === id) {
                                          if (cResult[32] === tmp18) {
                                            if (cResult[33] === pipHandoff) {
                                              let tmp35 = cResult[34];
                                              let tmp36 = cResult[35];
                                            }
                                            const layoutEffect = obj2.useLayoutEffect(tmp35, tmp36);
                                            if (cResult[36] === id) {
                                              if (cResult[37] === pipHandoff) {
                                                let tmp38 = cResult[38];
                                                let tmp39 = cResult[39];
                                              }
                                              const effect = obj2.useEffect(tmp38, tmp39);
                                              class Oe {
                                                constructor() {
                                                  return () => pipHandoff.removeCard(id);
                                                }
                                              }
                                              const sharedValue = cleanUp(tmp2[15]).useSharedValue(0);
                                              if (cResult[40] === id) {
                                                if (cResult[41] === pipHandoff) {
                                                  let tmp42 = cResult[42];
                                                }
                                                reportPIPArrival = tmp42;
                                                if (cResult[43] === tmp18) {
                                                  if (cResult[44] === layoutPhysics) {
                                                    if (cResult[45] === sharedValue) {
                                                      if (cResult[46] === tmp42) {
                                                        let tmp43 = cResult[47];
                                                        let tmp44 = cResult[48];
                                                      }
                                                      const effect1 = obj2.useEffect(tmp43, tmp44);
                                                      class Ye {
                                                        constructor() {
                                                          if (closure_31) {
                                                            tmp = closure_33;
                                                            num = 0;
                                                            result = closure_33.set(0);
                                                            tmp3 = closure_0;
                                                            tmp4 = closure_2;
                                                            obj = closure_0(closure_2[39]);
                                                            tmp5 = layoutPhysics;
                                                            fn = function t(arg0) {
                                                              if (true === arg0) {
                                                                cleanUp(id[15]).runOnJS(reportPIPArrival)();
                                                                obj = cleanUp(id[15]);
                                                              }
                                                            };
                                                            obj1 = { runOnJS: null, reportPIPArrival: null };
                                                            obj1.runOnJS = closure_0(closure_2[15]).runOnJS;
                                                            tmp6 = closure_34;
                                                            obj1.reportPIPArrival = closure_34;
                                                            fn.__closure = obj1;
                                                            num2 = 10819702965315;
                                                            fn.__workletHash = 10819702965315;
                                                            tmp7 = closure_68;
                                                            fn.__initData = closure_68;
                                                            str = "animate-always";
                                                            num3 = 1;
                                                            tmp8 = obj;
                                                            tmp9 = fn;
                                                            result1 = closure_33.set(obj.withSpring(1, layoutPhysics, "animate-always", fn));
                                                            return () => cleanUp(id[15]).cancelAnimation(sharedValue);
                                                          } else {
                                                            return;
                                                          }
                                                        }
                                                      }
                                                      const sharedValue1 = cleanUp(tmp2[15]).useSharedValue(obj17.get());
                                                      class Ne {
                                                        constructor() {
                                                          return pipHandoff.setCardArrivedInPIP(id);
                                                        }
                                                      }
                                                      class Fe {
                                                        constructor(arg0) {
                                                          scale = closure_24.scale;
                                                          value = scale.get();
                                                          result = value / closure_35.get();
                                                          size = { originX: coords.currentOriginX, originY: coords.currentOriginY, width: coords.currentWidth * result, height: coords.currentHeight * result };
                                                          obj1 = { animations: null, initialValues: null, callback: null };
                                                          size1 = { originX: null, originY: null, width: null, height: null };
                                                          obj4 = closure_0(closure_2[39]);
                                                          size1.originX = obj4.withSpring(coords.targetOriginX, layoutPhysics, "respect-motion-settings");
                                                          obj5 = closure_0(closure_2[39]);
                                                          size1.originY = obj5.withSpring(coords.targetOriginY, layoutPhysics, "respect-motion-settings");
                                                          obj6 = closure_0(closure_2[39]);
                                                          size1.width = obj6.withSpring(coords.targetWidth, layoutPhysics, "respect-motion-settings");
                                                          obj7 = closure_0(closure_2[39]);
                                                          size1.height = obj7.withSpring(coords.targetHeight, layoutPhysics, "respect-motion-settings");
                                                          obj1.animations = size1;
                                                          obj1.initialValues = size;
                                                          obj1.callback = function callback() {
                                                            value = wrapperOffset.get();
                                                            let gestureActive = value.gestureActive;
                                                            if (!gestureActive) {
                                                              gestureActive = 0 === value.y;
                                                            }
                                                            if (!gestureActive) {
                                                              const result = wrapperOffset.set({ gestureActive: false, x: 0, y: 0 });
                                                            }
                                                            scale = scale.scale;
                                                            const result1 = sharedValue1.set(scale.get());
                                                          };
                                                          return obj1;
                                                        }
                                                      }
                                                      let obj7 = { pipState: pIPState, lastPIPScale: sharedValue1, withSpring: cleanUp(tmp2[39]).withSpring, layoutPhysics, wrapperOffset };
                                                      Fe.__closure = obj7;
                                                      Fe.__workletHash = 1978895565164;
                                                      Fe.__initData = __initData29;
                                                      cResult[49] = sharedValue1;
                                                      cResult[50] = layoutPhysics;
                                                      cResult[51] = pIPState.scale;
                                                      cResult[52] = wrapperOffset;
                                                      cResult[53] = Fe;
                                                      const tmpResult15 = cleanUp(tmp2[15]);
                                                    }
                                                  }
                                                }
                                                class Ye {
                                                  constructor() {
                                                    if (closure_31) {
                                                      tmp = closure_33;
                                                      num = 0;
                                                      result = closure_33.set(0);
                                                      tmp3 = closure_0;
                                                      tmp4 = closure_2;
                                                      obj = closure_0(closure_2[39]);
                                                      tmp5 = layoutPhysics;
                                                      fn = function t(arg0) {
                                                        if (true === arg0) {
                                                          cleanUp(id[15]).runOnJS(reportPIPArrival)();
                                                          obj = cleanUp(id[15]);
                                                        }
                                                      };
                                                      obj1 = { runOnJS: null, reportPIPArrival: null };
                                                      obj1.runOnJS = closure_0(closure_2[15]).runOnJS;
                                                      tmp6 = closure_34;
                                                      obj1.reportPIPArrival = closure_34;
                                                      fn.__closure = obj1;
                                                      num2 = 10819702965315;
                                                      fn.__workletHash = 10819702965315;
                                                      tmp7 = closure_68;
                                                      fn.__initData = closure_68;
                                                      str = "animate-always";
                                                      num3 = 1;
                                                      tmp8 = obj;
                                                      tmp9 = fn;
                                                      result1 = closure_33.set(obj.withSpring(1, layoutPhysics, "animate-always", fn));
                                                      return () => cleanUp(id[15]).cancelAnimation(sharedValue);
                                                    } else {
                                                      return;
                                                    }
                                                  }
                                                }
                                                let items = [tmp18, layoutPhysics, , ];
                                                class Ne {
                                                  constructor() {
                                                    return pipHandoff.setCardArrivedInPIP(id);
                                                  }
                                                }
                                                cResult[43] = tmp18;
                                                cResult[44] = layoutPhysics;
                                                cResult[45] = sharedValue;
                                                cResult[46] = tmp42;
                                                cResult[47] = Ye;
                                                cResult[48] = items;
                                                tmp44 = items;
                                                tmp43 = Ye;
                                              }
                                              class Ne {
                                                constructor() {
                                                  return pipHandoff.setCardArrivedInPIP(id);
                                                }
                                              }
                                              cResult[40] = id;
                                              cResult[41] = pipHandoff;
                                              cResult[42] = Ne;
                                              tmp42 = Ne;
                                              const tmpResult14 = cleanUp(tmp2[15]);
                                            }
                                            class Oe {
                                              constructor() {
                                                return () => pipHandoff.removeCard(id);
                                              }
                                            }
                                            const items1 = [pipHandoff, id];
                                            cResult[37] = pipHandoff;
                                            cResult[38] = Oe;
                                            cResult[39] = items1;
                                            tmp39 = items1;
                                            tmp38 = Oe;
                                          }
                                        }
                                        class Ve {
                                          constructor() {
                                            syncCardPIPLayoutResult = pipHandoff.syncCardPIPLayout(id, closure_31);
                                            return;
                                          }
                                        }
                                        const items2 = [pipHandoff, id, ];
                                        cResult[31] = id;
                                        cResult[32] = tmp18;
                                        cResult[33] = pipHandoff;
                                        cResult[34] = Ve;
                                        cResult[35] = items2;
                                        tmp36 = items2;
                                        tmp35 = Ve;
                                      }
                                    }
                                  }
                                  const obj8 = { gesturesEnabled: null, onSingleTap: tmp27, onDoubleTap: tmp28, onLongPress: tmp31 };
                                  cResult[27] = tmp27;
                                  cResult[28] = tmp28;
                                  cResult[29] = tmp31;
                                  cResult[30] = obj8;
                                  tmp33 = obj8;
                                }
                              }
                              if (null != id2) {
                                let fn = () => showUserProfileActionSheetDefault({ userId: id2, channelId, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations });
                              }
                              cResult[22] = analyticsLocations;
                              cResult[24] = id2;
                              cResult[25] = fn;
                              tmp31 = fn;
                            }
                          }
                        }
                      }
                      cleanUp(tmp2[50]);
                      cResult[16] = focused;
                      cResult[18] = isSelf;
                      cResult[19] = tmp8;
                      cResult[20] = setFocused;
                      cResult[21] = tmp30;
                      tmp28 = tmp30;
                    }
                  }
                  function ue() {
                    if (controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN) {
                      showControls({ debounce: true });
                    } else {
                      hideControls({ debounce: true });
                    }
                  }
                  cResult[12] = controlsSpecs;
                  cResult[13] = hideControls;
                  cResult[14] = showControls;
                  cResult[15] = ue;
                  tmp27 = ue;
                  const tmpResult13 = cleanUp(tmp2[15]);
                }
              }
            }
          }
        }
      }
    }
  }
  let obj9 = { id, participant: tmp8, transitionState, cleanUp, mountedCards, mode, focused, isScrollVisible, sharedVisible };
  cResult[2] = cleanUp;
  cResult[3] = focused;
  cResult[4] = id;
  cResult[5] = isScrollVisible;
  cResult[6] = mode;
  cResult[7] = mountedCards;
  cResult[8] = tmp8;
  cResult[9] = sharedVisible;
  cResult[10] = transitionState;
  cResult[11] = obj9;
  tmp14 = obj9;
  let obj5 = { connected, EDGE_GUTTER: scrollPosition, safeArea, windowDimensions, contentDimensions, wrapperDimensions };
  const tmpResult11 = cleanUp(id[15]);
}) : (function AnimatedWrapper(cleanUp) {
  cleanUp = cleanUp.cleanUp;
  const coords = cleanUp.coords;
  let id = cleanUp.id;
  const isRTCConnected = cleanUp.isRTCConnected;
  const isScrollVisible = cleanUp.isScrollVisible;
  const layoutPhysics = cleanUp.layoutPhysics;
  const sharedVisible = cleanUp.sharedVisible;
  VoicePanelModes = undefined;
  focused = undefined;
  c13 = undefined;
  mode = undefined;
  c18 = undefined;
  c19 = undefined;
  windowDimensions = undefined;
  let isSelf;
  let id2;
  let derivedValue;
  let derivedValue1;
  let derivedValue2;
  let sharedTransitionState;
  closure_31 = undefined;
  let token;
  let sharedValue;
  reportPIPArrival = undefined;
  let sharedValue1;
  ({ children, transitionState } = cleanUp);
  const analyticsLocations = coords(id[48])().analyticsLocations;
  const context = isScrollVisible.useContext(coords(id[29]));
  const channelId = context.channelId;
  const connected = context.connected;
  const contentDimensions = context.contentDimensions;
  ({ controlsSpecs: c11, focused } = context);
  ({ hideControls: c13, mode } = context);
  const pipAvoidanceSpecs = context.pipAvoidanceSpecs;
  const safeArea = context.safeArea;
  const scrollPosition = context.scrollPosition;
  ({ setFocused: c18, showControls: c19, windowDimensions } = context);
  const wrapperDimensions = context.wrapperDimensions;
  const wrapperOffset = context.wrapperOffset;
  const pipHandoff = context.pipHandoff;
  ({ guildId, mountedCards } = context);
  const tmp3 = sharedTransitionState();
  const pIPState = cleanUp(id[49]).usePIPState();
  const tmp7 = coords(id[50])(id, channelId, guildId);
  let obj2 = cleanUp(id[49]);
  let tmp8 = tmp7;
  if (!obj3.isStableParticipantWithUser(tmp7)) {
    tmp8 = closure_61;
  }
  isSelf = tmp8.isSelf;
  id2 = tmp8.user.id;
  obj3 = cleanUp(id[50]);
  let fn = function f() {
    let tmp = id === pIPState.id;
    if (tmp) {
      tmp = mode.get() === VoicePanelModes.PIP;
    }
    return tmp;
  };
  fn.__closure = { id, pipState: pIPState, mode, VoicePanelModes };
  fn.__workletHash = 14658609388807;
  fn.__initData = __initData30;
  derivedValue = cleanUp(id[15]).useDerivedValue(fn);
  let obj4 = { id, pipState: pIPState, mode, VoicePanelModes };
  const tmp5Result = cleanUp(id[15]);
  class P {
    constructor() {
      value = focused.get();
      id = undefined;
      if (value != null) {
        id = value.id;
      }
      if (id === id) {
        tmp5 = scrollPosition;
        num = scrollPosition.get();
      } else {
        tmp3 = mode;
        tmp4 = VoicePanelModes;
        num = 0;
      }
      return num;
    }
  }
  P.__closure = { focused, id, mode, VoicePanelModes, scrollPosition };
  P.__workletHash = 1094240470006;
  P.__initData = __initData31;
  derivedValue1 = cleanUp(id[15]).useDerivedValue(P);
  const tmp5Result10 = cleanUp(id[15]);
  const fn2 = function w() {
    if (connected.get()) {
      const _Math = Math;
      let bound = Math.max(EDGE_GUTTER, safeArea.get().left, (windowDimensions.get().width - contentDimensions.get().width) / 2);
    } else {
      bound = wrapperDimensions.get().drawerWidth / 2;
    }
    return bound;
  };
  fn2.__closure = { connected, EDGE_GUTTER: scrollPosition, safeArea, windowDimensions, contentDimensions, wrapperDimensions };
  fn2.__workletHash = 12954455503263;
  fn2.__initData = __initData32;
  derivedValue2 = cleanUp(id[15]).useDerivedValue(fn2);
  const tmp12 = closure_60({ id, participant: tmp7, transitionState, cleanUp, mountedCards, mode, focused, isScrollVisible, sharedVisible });
  sharedTransitionState = tmp12.sharedTransitionState;
  closure_31 = tmp13;
  let obj5 = { connected, EDGE_GUTTER: scrollPosition, safeArea, windowDimensions, contentDimensions, wrapperDimensions };
  const tmp5Result11 = cleanUp(id[15]);
  token = cleanUp(id[43]).useToken(tmp(tmp2[20]).modules.mobile.VOICE_TILE_BORDER_RADIUS);
  const tmp5Result12 = cleanUp(id[43]);
  const fn3 = function y() {
    value = coords.get();
    ({ zIndex, width, height, x, y } = value);
    const value7 = focused.get();
    id = undefined;
    if (value7 != null) {
      id = value7.id;
    }
    if (closure_31) {
      scale = pIPState.scale;
      const value8 = scale.get();
      const result = pIPState.width * value8;
      let height2 = pIPState.height * value8;
      const obj5 = { height: null, containerHeight: null, showSecondaryPIP: null, scale: null };
      ({ height: obj3.height, containerHeight: obj3.containerHeight, showSecondaryPIP: obj3.showSecondaryPIP } = pIPState);
      obj5.scale = value8;
      const scaledPIPContainerHeight = VoicePanelPIPUtils.getScaledPIPContainerHeight(obj5);
      const size = { pipX: wrapperDimensions.get().pipX, pipY: wrapperDimensions.get().pipY, width: result, height: scaledPIPContainerHeight, windowDimensions: windowDimensions.get(), safeArea: safeArea.get(), bottomAvoidanceRegion: pipAvoidanceSpecs.get().bottom, topAvoidanceRegion: pipAvoidanceSpecs.get().top };
      const point = VoicePanelPIPUtils.getClampedPIPPosition(size);
      let num = point.x;
      let sum = derivedValue1.get() + point.y;
      let width2 = result;
      let num2 = zIndex;
    } else if (null != focused.get()) {
      sum = y;
      num = x;
      height2 = height;
      width2 = width;
      num2 = 0;
      if (tmp5) {
        width2 = windowDimensions.get().width;
        height2 = windowDimensions.get().height;
        sum = derivedValue1.get();
        num2 = 1;
        num = 0;
      }
    } else {
      const sum1 = x + derivedValue2.get();
      const obj7 = { contentHeight: contentDimensions.get().height, windowHeight: windowDimensions.get().height, safeArea: safeArea.get() };
      const sum2 = y + calculateContentCenterOffsetDefault(obj7);
      const value9 = sharedTransitionState.get();
      sum = sum2;
      num = sum1;
      height2 = height;
      width2 = width;
      num2 = zIndex;
      if (value9 === native.TransitionStates.YEETED) {
        sum = sum2 + height / 4;
        num = sum1;
        height2 = height;
        width2 = width;
        num2 = zIndex;
      }
    }
    if (derivedValue.get()) {
      num2 = 9001;
    }
    const obj10 = { id, mode: mode.get(), focused: null, isSelf: null, defaultBorderRadius: null };
    const value10 = focused.get();
    let id1;
    if (value10 != null) {
      id1 = value10.id;
    }
    obj10.focused = id1;
    obj10.isSelf = isSelf;
    obj10.defaultBorderRadius = token;
    if (0 !== sharedVisible.get()) {
      let num5 = 1;
      if (!tmp5) {
        num5 = 1;
        if (!isRTCConnected) {
          num5 = c29;
        }
      }
      let num3 = num5;
    } else {
      const value11 = focused.get();
      id2 = undefined;
      if (value11 != null) {
        id2 = value11.id;
      }
      num3 = 0;
    }
    const gestureActive = wrapperOffset.get().gestureActive;
    if (1 === sharedVisible.get()) {
      let num6 = 1;
    } else {
      const value12 = focused.get();
      let id3;
      if (value12 != null) {
        id3 = value12.id;
      }
      num6 = 0.8;
    }
    const tmp22Result = computeCardBorderRadiusDefault(obj10);
    let num7 = 100;
    if (derivedValue.get()) {
      num7 = 0;
    }
    const size1 = { zIndex: null, opacity: null, width: null, height: null, transform: null, borderRadius: null };
    const obj9 = ReanimatedRexport2;
    size1.zIndex = obj9.withDelay(num7, timing.withTiming(num2, closure_28));
    let str = "animate-never";
    if (isScrollVisible.get()) {
      str = "animate-always";
    }
    const fn = function y(arg0) {
      let tmp = arg0;
      if (arg0) {
        tmp = 0 === sharedVisible.get();
      }
      if (tmp) {
        value = sharedTransitionState.get();
        tmp = value === cleanUp(id[47]).TransitionStates.YEETED;
      }
      if (tmp) {
        cleanUp(id[15]).runOnJS(closure_1_0)();
        obj = cleanUp(id[15]);
      }
    };
    const obj12 = timing;
    fn.__closure = { sharedVisible, sharedTransitionState, TransitionStates: native.TransitionStates, runOnJS: ReanimatedRexport2.runOnJS, cleanUp };
    fn.__workletHash = 1424486009360;
    fn.__initData = __initData;
    size1.opacity = obj12.withTiming(num3, closure_27, str, fn);
    size1.width = width2;
    size1.height = height2;
    let withSpringResult = num;
    if (!gestureActive) {
      withSpringResult = spring.withSpring(num, layoutPhysics, "respect-motion-settings");
    }
    const items = [{ translateX: withSpringResult }, , ];
    let withSpringResult1 = sum;
    if (!gestureActive) {
      withSpringResult1 = spring.withSpring(sum, layoutPhysics, "respect-motion-settings");
    }
    items[1] = { translateY: withSpringResult1 };
    const obj16 = { scale: null };
    const obj13 = { sharedVisible, sharedTransitionState, TransitionStates: native.TransitionStates, runOnJS: ReanimatedRexport2.runOnJS, cleanUp };
    obj16.scale = spring.withSpring(num6, focused);
    items[2] = obj16;
    size1.transform = items;
    size1.borderRadius = spring.withSpring(tmp22Result, SCALE_PHYSICS);
    return size1;
  };
  const tmp5Result13 = cleanUp(id[15]);
  fn3.__closure = { coords, focused, id, isPIP: pIPState.mode === safeArea.IN_APP, pipState: pIPState, getScaledPIPContainerHeight: cleanUp(id[51]).getScaledPIPContainerHeight, getClampedPIPPosition: cleanUp(id[51]).getClampedPIPPosition, wrapperDimensions, windowDimensions, safeArea, pipAvoidanceSpecs, derivedScrollValue: derivedValue1, xOffset: derivedValue2, calculateContentCenterOffset: coords(id[52]), contentDimensions, sharedTransitionState, TransitionStates: cleanUp(id[47]).TransitionStates, zIndexOverride: derivedValue, computeCardBorderRadius: coords(id[44]), mode, isSelf, defaultBorderRadius: token, sharedVisible, isRTCConnected, CONNECTING_OPACITY: derivedValue2, wrapperOffset, withDelay: cleanUp(id[15]).withDelay, withTiming: cleanUp(id[38]).withTiming, ZINDEX_TIMING: derivedValue1, OPACITY_TIMING: derivedValue, isScrollVisible, runOnJS: cleanUp(id[15]).runOnJS, cleanUp, withSpring: cleanUp(id[39]).withSpring, layoutPhysics, CARD_SCALE_PHYSICS: id2, SCALE_PHYSICS: windowDimensions };
  fn3.__workletHash = 12967186727989;
  fn3.__initData = __initData33;
  const animatedStyle = tmp5Result13.useAnimatedStyle(fn3);
  let obj7 = {
    gesturesEnabled: tmp12.cardGestureEnabled,
    onSingleTap() {
      if (_undefined.get().mode === VoicePanelControlsModes.HIDDEN) {
        _undefined4({ debounce: true });
      } else {
        _undefined2({ debounce: true });
      }
    },
    onDoubleTap: null,
    onLongPress: null
  };
  let obj6 = { coords, focused, id, isPIP: pIPState.mode === safeArea.IN_APP, pipState: pIPState, getScaledPIPContainerHeight: cleanUp(id[51]).getScaledPIPContainerHeight, getClampedPIPPosition: cleanUp(id[51]).getClampedPIPPosition, wrapperDimensions, windowDimensions, safeArea, pipAvoidanceSpecs, derivedScrollValue: derivedValue1, xOffset: derivedValue2, calculateContentCenterOffset: coords(id[52]), contentDimensions, sharedTransitionState, TransitionStates: cleanUp(id[47]).TransitionStates, zIndexOverride: derivedValue, computeCardBorderRadius: coords(id[44]), mode, isSelf, defaultBorderRadius: token, sharedVisible, isRTCConnected, CONNECTING_OPACITY: derivedValue2, wrapperOffset, withDelay: cleanUp(id[15]).withDelay, withTiming: cleanUp(id[38]).withTiming, ZINDEX_TIMING: derivedValue1, OPACITY_TIMING: derivedValue, isScrollVisible, runOnJS: cleanUp(id[15]).runOnJS, cleanUp, withSpring: cleanUp(id[39]).withSpring, layoutPhysics, CARD_SCALE_PHYSICS: id2, SCALE_PHYSICS: windowDimensions };
  const tmpResult = coords(id[54]);
  if (tmp5Result14.isStableActivityParticipant(tmp7)) {
    const fn4 = () => {
      value = focused.get();
      id = undefined;
      if (value != null) {
        id = value.id;
      }
      if (id !== id) {
        _undefined3(tmp3);
      } else {
        _undefined3(null);
      }
    };
  } else if (isSelf) {
    const tmp5Result15 = tmp5(tmp2[50]);
  }
  obj7.onDoubleTap = fn4;
  let fn5;
  if (null != id2) {
    fn5 = () => showUserProfileActionSheetDefault({ userId: id2, channelId, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations });
  }
  obj7.onLongPress = fn5;
  let items = [pipHandoff, id, pIPState.mode === safeArea.IN_APP];
  tmp5Result14 = cleanUp(id[50]);
  const layoutEffect = obj.useLayoutEffect(() => {
    pipHandoff.syncCardPIPLayout(id, closure_31);
  }, items);
  const items1 = [pipHandoff, id];
  const effect = obj.useEffect(() => () => pipHandoff.removeCard(id), items1);
  const tmpResultResult = tmpResult(obj7);
  sharedValue = cleanUp(id[15]).useSharedValue(0);
  const items2 = [pipHandoff, id];
  reportPIPArrival = obj.useCallback(() => pipHandoff.setCardArrivedInPIP(id), items2);
  const items3 = [pIPState.mode === safeArea.IN_APP, layoutPhysics, sharedValue, reportPIPArrival];
  const effect1 = obj.useEffect(() => {
    if (closure_31) {
      const result = sharedValue.set(0);
      obj = spring;
      const fn = function t(arg0) {
        if (true === arg0) {
          cleanUp(id[15]).runOnJS(reportPIPArrival)();
          obj = cleanUp(id[15]);
        }
      };
      const obj2 = { runOnJS: ReanimatedRexport2.runOnJS, reportPIPArrival };
      fn.__closure = obj2;
      fn.__workletHash = 7717924685354;
      fn.__initData = __initData2;
      const result1 = sharedValue.set(obj.withSpring(1, layoutPhysics, "animate-always", fn));
      return () => cleanUp(id[15]).cancelAnimation(sharedValue);
    }
  }, items3);
  const tmp5Result16 = cleanUp(id[15]);
  scale = pIPState.scale;
  sharedValue1 = cleanUp(id[15]).useSharedValue(scale.get());
  function me(currentOriginX) {
    scale = pIPState.scale;
    value = scale.get();
    let result = value / sharedValue1.get();
    const size = { originX: currentOriginX.currentOriginX, originY: currentOriginX.currentOriginY, width: currentOriginX.currentWidth * result, height: currentOriginX.currentHeight * result };
    obj = { animations: null, initialValues: null, callback: null };
    const size1 = { originX: spring.withSpring(currentOriginX.targetOriginX, layoutPhysics, "respect-motion-settings"), originY: null, width: null, height: null };
    size1.originY = spring.withSpring(currentOriginX.targetOriginY, layoutPhysics, "respect-motion-settings");
    size1.width = spring.withSpring(currentOriginX.targetWidth, layoutPhysics, "respect-motion-settings");
    size1.height = spring.withSpring(currentOriginX.targetHeight, layoutPhysics, "respect-motion-settings");
    obj.animations = size1;
    obj.initialValues = size;
    obj.callback = function callback() {
      value = wrapperOffset.get();
      let gestureActive = value.gestureActive;
      if (!gestureActive) {
        gestureActive = 0 === value.y;
      }
      if (!gestureActive) {
        const result = wrapperOffset.set({ gestureActive: false, x: 0, y: 0 });
      }
      scale = scale.scale;
      const result1 = sharedValue1.set(scale.get());
    };
    return obj;
  }
  const tmp5Result17 = cleanUp(id[15]);
  me.__closure = { pipState: pIPState, lastPIPScale: sharedValue1, withSpring: cleanUp(id[39]).withSpring, layoutPhysics, wrapperOffset };
  me.__workletHash = 12776532702151;
  me.__initData = __initData34;
  const items4 = [layoutPhysics, wrapperOffset, sharedValue1, pIPState.scale];
  const callback1 = obj.useCallback(me, items4);
  let obj9 = { gesture: tmpResultResult, children: null };
  let obj10 = { nativeID: null, style: null, layout: null, children: null };
  const obj8 = { pipState: pIPState, lastPIPScale: sharedValue1, withSpring: cleanUp(id[39]).withSpring, layoutPhysics, wrapperOffset };
  const tmpResult2 = coords(id[42]);
  obj10.nativeID = cleanUp(id[55]).getExternalPipTileNativeId("card", id);
  const items5 = [tmp3.positionWrapper, animatedStyle];
  obj10.style = items5;
  obj10.layout = callback1;
  obj10.children = children;
  obj9.children = wrapperDimensions(tmpResult2, obj10);
  return wrapperDimensions(cleanUp(id[56]).GestureDetector, obj9);
});
const __initData35 = { code: "function VoicePanelCardTsx40(){const{EDGE_GUTTER,coords,scrollPosition,windowDimensions}=this.__closure;const yPos=EDGE_GUTTER+coords.get().y;return yPos>scrollPosition.get()-coords.get().height&&yPos<scrollPosition.get()+windowDimensions.get().height;}" };
const __initData36 = { code: "function layoutTransition_VoicePanelCardTsx41(values,t10){const{layoutTransitionFunction,physics,pipState,lastPipScale}=this.__closure;const disableAnimation=t10===undefined?false:t10;return layoutTransitionFunction(values,physics,pipState.scale,lastPipScale,disableAnimation);}" };
const __initData37 = { code: "function VoicePanelCardTsx42(){const{EDGE_GUTTER,coords,scrollPosition,windowDimensions}=this.__closure;const yPos=EDGE_GUTTER+coords.get().y;return yPos>scrollPosition.get()-coords.get().height&&yPos<scrollPosition.get()+windowDimensions.get().height;}" };
let closure_81 = { code: "function layoutTransition_VoicePanelCardTsx43(values,disableAnimation=false){const{layoutTransitionFunction,physics,pipState,lastPipScale}=this.__closure;return layoutTransitionFunction(values,physics,pipState.scale,lastPipScale,disableAnimation);}" };
ReactCompilerGating = fn(558);
let obj11 = { withSpring: fn(5247).withSpring };
size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/card/VoicePanelCard.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function VoicePanelCard(arg0) {
  const cResult = scrollPosition(id2[22]).c(80);
  ({ item, transitionState, cleanUp } = arg0);
  const id = item.id;
  const context = noop.useContext(windowDimensions(id2[29]));
  ({ guildId, isCall, mountedCards, scrollPosition } = context);
  windowDimensions = context.windowDimensions;
  ({ channelId, layoutManager } = context);
  const tmp6 = windowDimensions(id2[50])(id, channelId, guildId);
  if (cResult[0] !== tmp6) {
    let tmp8 = tmp6;
    if (!tmpResult.isStableParticipantWithUser(tmp6)) {
      tmp8 = closure_61;
    }
    cResult[0] = tmp6;
    cResult[1] = tmp8;
    let tmp7 = tmp8;
    tmpResult = scrollPosition(tmp2[50]);
  } else {
    tmp7 = cResult[1];
  }
  const isSelf = tmp7.isSelf;
  id2 = tmp7.user.id;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RTCConnectionStore];
    class H {
      constructor() {
        return closure_1_8.isConnected();
      }
    }
    cResult[2] = items;
    cResult[3] = H;
    let tmp10 = H;
    let tmp9 = items;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  obj = scrollPosition(id2[22]);
  const obj2 = noop;
  const stateFromStores = scrollPosition(id2[23]).useStateFromStores(tmp9, tmp10);
  if (cResult[4] !== tmp6) {
    const tmp14 = scrollPosition(tmp2[50]).isStableUserParticipant(tmp6) && tmp6.ringing;
    class H {
      constructor() {
        return closure_1_8.isConnected();
      }
    }
    cResult[5] = tmp14;
    let tmp13 = tmp14;
    const tmpResult11 = scrollPosition(tmp2[50]);
  } else {
    tmp13 = cResult[5];
  }
  let str = "";
  if (null != tmp6) {
    str = "";
    if ("user" in tmp6) {
      str = tmp6.user.id;
    }
  }
  let type1;
  const tmpResult10 = scrollPosition(id2[23]);
  if (tmp6 != null) {
    type1 = tmp6.type;
  }
  if (type1 === ParticipantTypes.STREAM) {
    let DEFAULT = scrollPosition(tmp2[31]).MediaEngineContextTypes.STREAM;
  } else {
    DEFAULT = scrollPosition(tmp2[31]).MediaEngineContextTypes.DEFAULT;
  }
  windowDimensions(id2[30])(DEFAULT, str);
  windowDimensions(id2[57])(str);
  const tmp4Result = windowDimensions(id2[30]);
  if (transitionState === scrollPosition(id2[47]).TransitionStates.MOUNTED) {
    let num7 = 1;
  } else {
    num7 = 0;
  }
  const sharedValue = scrollPosition(id2[15]).useSharedValue(num7);
  const tmpResult12 = scrollPosition(id2[15]);
  if (null != id2) {
    let isSpeakingResult = SpeakingStore.isSpeaking(id2);
    if (!isSpeakingResult) {
      isSpeakingResult = sharedValue2.isUserPlayingSounds(id2);
    }
    class H {
      constructor() {
        return closure_1_8.isConnected();
      }
    }
  }
  const sharedValue1 = scrollPosition(id2[15]).useSharedValue(tmp21);
  if (cResult[6] === sharedValue1) {
    if (cResult[7] === id2) {
      let tmp26 = cResult[8];
      let tmp27 = cResult[9];
    }
    const layoutEffect = obj2.useLayoutEffect(tmp26, tmp27);
    scrollPosition(tmp2[58]);
    class H {
      constructor() {
        return closure_1_8.isConnected();
      }
    }
    noop = tmp30;
    const fn2 = function q() {
      const sum = EDGE_GUTTER + tmp30.get().y;
      value = scrollPosition.get();
      let tmp3 = sum > value - tmp30.get().height;
      if (tmp3) {
        value2 = scrollPosition.get();
        tmp3 = sum < value2 + windowDimensions.get().height;
      }
      return tmp3;
    };
    const obj3 = { EDGE_GUTTER, coords: tmp30, scrollPosition, windowDimensions };
    fn2.__closure = obj3;
    fn2.__workletHash = 2901522095465;
    fn2.__initData = __initData35;
    const derivedValue = scrollPosition(tmp2[15]).useDerivedValue(fn2);
    const tmpResult15 = scrollPosition(tmp2[15]);
    const pIPState = scrollPosition(tmp2[49]).usePIPState();
    const tmpResult16 = scrollPosition(tmp2[49]);
    scale = pIPState.scale;
    sharedValue2 = scrollPosition(tmp2[15]).useSharedValue(scale.get());
    const _Symbol = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { mass: closure_12.mass, damping: null, stiffness: null };
      class H {
        constructor() {
          return closure_1_8.isConnected();
        }
      }
      obj4.damping = tmp4(tmp2[59])(closure_12.damping - 2, closure_12.damping + 2);
      obj4.stiffness = tmp4(tmp2[59])(closure_12.stiffness - 20, closure_12.stiffness + 20);
      cResult[10] = obj4;
      let tmp36 = obj4;
    } else {
      tmp36 = cResult[10];
    }
    closure_7 = tmp36;
    if (cResult[11] === sharedValue2) {
      if (cResult[12] === pIPState.scale) {
        let tmp38 = cResult[13];
      }
      ({ physics, layoutTransition: layoutTransition2 } = tmp38);
      class H {
        constructor() {
          return closure_1_8.isConnected();
        }
      }
      if (item.type === constants2.CTA) {
        const id5 = item.id;
        if (constants.NO_VIDEO_PARTICIPANTS === id5) {
          const _Symbol3 = Symbol;
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            class H {
              constructor() {
                return closure_1_8.isConnected();
              }
            }
            const tmp65 = closure_21(tmp4(tmp2[60]), {});
          }
          class H {
            constructor() {
              return closure_1_8.isConnected();
            }
          }
        } else {
          if (tmp55.CALLER_DISCONNECTED === id5) {
            const _Symbol2 = Symbol;
            if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
              class H {
                constructor() {
                  return closure_1_8.isConnected();
                }
              }
              const tmp62 = closure_21(tmp4(tmp2[61]), {});
            }
            class H {
              constructor() {
                return closure_1_8.isConnected();
              }
            }
          }
          if (cResult[58] === tmp13) {
            if (cResult[59] === layoutTransition2) {
              if (cResult[60] === tmp6) {
                let tmp66 = cResult[61];
              }
              if (cResult[62] === id) {
                if (cResult[63] === isSelf) {
                  if (cResult[64] === layoutTransition2) {
                    if (cResult[65] === tmp6) {
                      if (cResult[66] === sharedValue1) {
                        let tmp68 = cResult[67];
                      }
                      if (cResult[68] === tmp41) {
                        if (cResult[69] === cleanUp) {
                          if (cResult[70] === tmp30) {
                            if (cResult[71] === id) {
                              if (cResult[72] === stateFromStores) {
                                if (cResult[73] === derivedValue) {
                                  if (cResult[74] === physics) {
                                    if (cResult[75] === sharedValue) {
                                      if (cResult[76] === tmp66) {
                                        if (cResult[77] === tmp68) {
                                          if (cResult[78] === transitionState) {
                                            let tmp73 = cResult[79];
                                          }
                                          return tmp73;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                      class H {
                        constructor() {
                          return closure_1_8.isConnected();
                        }
                      }
                      const obj5 = { cleanUp, coords: tmp30, id, isRTCConnected: stateFromStores, isScrollVisible: derivedValue, layoutPhysics: physics, transitionState, sharedVisible: sharedValue, children: null };
                      const items1 = [tmp41, tmp66, tmp68];
                      obj5.children = items1;
                      const tmp75 = closure_23(closure_77, obj5);
                      cResult[68] = tmp41;
                      cResult[69] = cleanUp;
                      cResult[70] = tmp30;
                      cResult[71] = id;
                      cResult[72] = stateFromStores;
                      cResult[73] = derivedValue;
                      cResult[74] = physics;
                      cResult[75] = sharedValue;
                      cResult[76] = tmp66;
                      cResult[77] = tmp68;
                      cResult[78] = transitionState;
                      cResult[79] = tmp75;
                      tmp73 = tmp75;
                    }
                  }
                }
              }
              scrollPosition(tmp2[50]);
              class H {
                constructor() {
                  return closure_1_8.isConnected();
                }
              }
              if (tmp70) {
                const obj6 = { speakingOrPlayingSoundboard: null, id: null, userId: null, isSelf: null, layout: null };
                class H {
                  constructor() {
                    return closure_1_8.isConnected();
                  }
                }
                obj6.id = id;
                obj6.userId = tmp6.user.id;
                obj6.isSelf = isSelf;
                obj6.layout = layoutTransition2;
                tmp70 = closure_21(closure_51, obj6);
              }
              cResult[62] = id;
              cResult[63] = isSelf;
              cResult[64] = layoutTransition2;
              cResult[65] = tmp6;
              cResult[66] = sharedValue1;
              cResult[67] = tmp70;
              tmp68 = tmp70;
            }
          }
          class H {
            constructor() {
              return closure_1_8.isConnected();
            }
          }
          cResult[58] = tmp13;
          cResult[59] = layoutTransition2;
          cResult[60] = tmp6;
          cResult[61] = null != tmp6;
          tmp66 = tmp67;
        }
      } else if (null != tmp6) {
        const type = tmp6.type;
        if (ParticipantTypes.USER === type) {
          ({ id: id4, streamId, user: user2 } = tmp6);
          class H {
            constructor() {
              return closure_1_8.isConnected();
            }
          }
          if (cResult[28] === guildId) {
            if (cResult[29] === user2) {
              let tmp49 = cResult[30];
            }
            const userAvatarDecoration = tmp6.userAvatarDecoration;
            class H {
              constructor() {
                return closure_1_8.isConnected();
              }
            }
            const obj7 = { isRinging: tmp13, avatarURI: tmp49, avatarDecoration: userAvatarDecoration, layout: layoutTransition2, layoutPhysics: physics, userId: user2.id, guildId };
            const tmp54 = closure_21(closure_43, obj7);
            cResult[31] = guildId;
            cResult[32] = tmp13;
            cResult[33] = layoutTransition2;
            cResult[34] = physics;
            cResult[35] = tmp49;
            cResult[36] = userAvatarDecoration;
            cResult[37] = user2.id;
            cResult[38] = tmp54;
          }
          const avatarURL = user2.getAvatarURL(guildId, 80, false);
          cResult[28] = guildId;
          cResult[29] = user2;
          cResult[30] = avatarURL;
          tmp49 = avatarURL;
        } else if (ParticipantTypes.STREAM === type) {
          ({ user, id: id3, streamGuildId } = tmp6);
          class H {
            constructor() {
              return closure_1_8.isConnected();
            }
          }
          const userNick = tmp6.userNick;
          if (cResult[39] === tmp30) {
            if (cResult[40] === id3) {
              if (cResult[41] === derivedValue) {
                if (cResult[42] === isSelf) {
                  if (cResult[43] === layoutTransition2) {
                    if (cResult[44] === streamGuildId) {
                      if (cResult[45] === tmp44) {
                        if (cResult[46] === user.id) {
                          if (cResult[47] === userNick) {
                            let tmp45 = cResult[48];
                          }
                          tmp41 = tmp45;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          const obj8 = { userId: user.id, id: id3, streamGuildId, streamId: tmp44, userNick, isSelf, sharedCoords: tmp30, isScrollVisible: derivedValue, layout: layoutTransition2 };
          const tmp48 = closure_21(closure_38, obj8);
          cResult[39] = tmp30;
          cResult[40] = id3;
          cResult[41] = derivedValue;
          cResult[42] = isSelf;
          cResult[43] = layoutTransition2;
          cResult[44] = streamGuildId;
          cResult[45] = tmp44;
          cResult[46] = user.id;
          cResult[47] = userNick;
          cResult[48] = tmp48;
          tmp45 = tmp48;
        } else if (ParticipantTypes.ACTIVITY === type) {
          if (cResult[49] === layoutTransition2) {
            if (cResult[50] === tmp6.applicationId) {
              if (cResult[51] === tmp6.id) {
                if (cResult[52] === sharedValue) {
                  tmp41 = cResult[53];
                }
              }
            }
          }
          const obj9 = { sharedVisible: null, applicationId: null, layout: null };
          class H {
            constructor() {
              return closure_1_8.isConnected();
            }
          }
          obj9.applicationId = tmp6.applicationId;
          obj9.layout = layoutTransition2;
          const tmp43 = closure_21(tmp4(tmp2[63]), obj9, tmp6.id);
          cResult[49] = layoutTransition2;
          cResult[50] = tmp6.applicationId;
          cResult[51] = tmp6.id;
          cResult[52] = sharedValue;
          cResult[53] = tmp43;
          tmp41 = tmp43;
        }
      }
      if (cResult[54] === tmp13) {
        if (cResult[55] === layoutTransition2) {
          if (cResult[56] === physics) {
            let tmp56 = cResult[57];
          }
          tmp41 = tmp56;
        }
      }
      const obj10 = { isRinging: tmp13, avatarURI: "r", avatarDecoration: "toCharArray$esjava$1", layout: layoutTransition2, layoutPhysics: physics };
      const tmp59 = closure_21(closure_43, obj10);
      cResult[54] = tmp13;
      cResult[55] = layoutTransition2;
      cResult[56] = physics;
      cResult[57] = tmp59;
      tmp56 = tmp59;
    }
    const obj11 = { physics: tmp36, layoutTransition: null };
    function layoutTransition(originX, arg1) {
      return layoutTransitionFunction(originX, closure_7, pIPState.scale, sharedValue2, undefined !== arg1 && arg1);
    }
    const obj12 = { layoutTransitionFunction, physics: tmp36, pipState: pIPState, lastPipScale: sharedValue2 };
    layoutTransition.__closure = obj12;
    layoutTransition.__workletHash = 5354393718549;
    layoutTransition.__initData = __initData36;
    obj11.layoutTransition = layoutTransition;
    cResult[11] = sharedValue2;
    cResult[12] = pIPState.scale;
    cResult[13] = obj11;
    tmp38 = obj11;
    const tmpResult17 = scrollPosition(tmp2[15]);
  }
  const fn = function $() {
    function handleChange() {
      let tmp3 = null != id2;
      if (tmp3) {
        let isSpeakingResult = SpeakingStore.isSpeaking(id2);
        if (!isSpeakingResult) {
          isSpeakingResult = sharedValue2.isUserPlayingSounds(id2);
        }
        tmp3 = isSpeakingResult;
      }
      const result = sharedValue1.set(tmp3);
    }
    let tmp3 = null != id2;
    if (tmp3) {
      let isSpeakingResult = SpeakingStore.isSpeaking(id2);
      if (!isSpeakingResult) {
        isSpeakingResult = sharedValue2.isUserPlayingSounds(id2);
      }
      tmp3 = isSpeakingResult;
    }
    let result = sharedValue1.set(tmp3);
    let result1 = SpeakingStore.addReactChangeListener(handleChange);
    const result2 = sharedValue2.addReactChangeListener(handleChange);
    return () => {
      const result = SpeakingStore.removeReactChangeListener(handleChange);
      const result1 = SoundboardStore.removeReactChangeListener(handleChange);
    };
  };
  const items2 = [id2, sharedValue1];
  cResult[6] = sharedValue1;
  cResult[7] = id2;
  cResult[8] = fn;
  cResult[9] = items2;
  tmp27 = items2;
  tmp26 = fn;
  const tmpResult13 = scrollPosition(id2[15]);
}) : (function VoicePanelCard(cleanUp) {
  ({ item, transitionState } = cleanUp);
  scrollPosition = undefined;
  let windowDimensions;
  let id2;
  let sharedValue1;
  let cardLayoutCoordsSubscription;
  let pIPState;
  let sharedValue2;
  const id = item.id;
  const context = cardLayoutCoordsSubscription.useContext(windowDimensions(id2[29]));
  ({ guildId, isCall, mountedCards, scrollPosition } = context);
  windowDimensions = context.windowDimensions;
  ({ channelId, layoutManager } = context);
  const tmp4 = windowDimensions(id2[50])(id, channelId, guildId);
  let tmp6 = tmp4;
  if (!obj2.isStableParticipantWithUser(tmp4)) {
    tmp6 = closure_61;
  }
  const isSelf = tmp6.isSelf;
  id2 = tmp6.user.id;
  obj2 = scrollPosition(id2[50]);
  const items = [RTCConnectionStore];
  const stateFromStores = scrollPosition(id2[23]).useStateFromStores(items, () => connected.isConnected());
  const tmp5Result = scrollPosition(id2[23]);
  const tmp8 = scrollPosition(id2[50]).isStableUserParticipant(tmp4) && tmp4.ringing;
  let str = "";
  if (null != tmp4) {
    str = "";
    if ("user" in tmp4) {
      str = tmp4.user.id;
    }
  }
  let type1;
  const tmp5Result10 = scrollPosition(id2[50]);
  if (tmp4 != null) {
    type1 = tmp4.type;
  }
  if (type1 === ParticipantTypes.STREAM) {
    let DEFAULT = tmp5(tmp2[31]).MediaEngineContextTypes.STREAM;
  } else {
    DEFAULT = tmp5(tmp2[31]).MediaEngineContextTypes.DEFAULT;
  }
  const tmpResultResult = windowDimensions(id2[30])(DEFAULT, str);
  windowDimensions(id2[57])(str);
  const tmpResult = windowDimensions(id2[30]);
  if (transitionState === scrollPosition(id2[47]).TransitionStates.MOUNTED) {
    let num = 1;
  } else {
    num = 0;
  }
  const sharedValue = scrollPosition(id2[15]).useSharedValue(num);
  const tmp5Result11 = scrollPosition(id2[15]);
  let tmp15 = null != id2;
  if (tmp15) {
    let isSpeakingResult = SpeakingStore.isSpeaking(id2);
    if (!isSpeakingResult) {
      isSpeakingResult = sharedValue2.isUserPlayingSounds(id2);
    }
    tmp15 = isSpeakingResult;
  }
  sharedValue1 = scrollPosition(id2[15]).useSharedValue(tmp15);
  const items1 = [id2, sharedValue1];
  const layoutEffect = obj.useLayoutEffect(() => {
    function handleChange() {
      let tmp3 = null != id2;
      if (tmp3) {
        let isSpeakingResult = SpeakingStore.isSpeaking(id2);
        if (!isSpeakingResult) {
          isSpeakingResult = sharedValue2.isUserPlayingSounds(id2);
        }
        tmp3 = isSpeakingResult;
      }
      const result = sharedValue1.set(tmp3);
    }
    let tmp3 = null != id2;
    if (tmp3) {
      let isSpeakingResult = SpeakingStore.isSpeaking(id2);
      if (!isSpeakingResult) {
        isSpeakingResult = sharedValue2.isUserPlayingSounds(id2);
      }
      tmp3 = isSpeakingResult;
    }
    let result = sharedValue1.set(tmp3);
    let result1 = SpeakingStore.addReactChangeListener(handleChange);
    const result2 = sharedValue2.addReactChangeListener(handleChange);
    return () => {
      const result = SpeakingStore.removeReactChangeListener(handleChange);
      const result1 = SoundboardStore.removeReactChangeListener(handleChange);
    };
  }, items1);
  const tmp5Result12 = scrollPosition(id2[15]);
  cardLayoutCoordsSubscription = scrollPosition(id2[58]).useCardLayoutCoordsSubscription(id, layoutManager);
  const tmp5Result13 = scrollPosition(id2[58]);
  const fn = function $() {
    const sum = EDGE_GUTTER + cardLayoutCoordsSubscription.get().y;
    value = scrollPosition.get();
    let tmp3 = sum > value - cardLayoutCoordsSubscription.get().height;
    if (tmp3) {
      value2 = scrollPosition.get();
      tmp3 = sum < value2 + windowDimensions.get().height;
    }
    return tmp3;
  };
  fn.__closure = { EDGE_GUTTER, coords: cardLayoutCoordsSubscription, scrollPosition, windowDimensions };
  fn.__workletHash = 4524381131947;
  fn.__initData = __initData37;
  const derivedValue = scrollPosition(id2[15]).useDerivedValue(fn);
  const obj3 = { EDGE_GUTTER, coords: cardLayoutCoordsSubscription, scrollPosition, windowDimensions };
  const tmp5Result14 = scrollPosition(id2[15]);
  pIPState = scrollPosition(id2[49]).usePIPState();
  const tmp5Result15 = scrollPosition(id2[49]);
  scale = pIPState.scale;
  sharedValue2 = scrollPosition(id2[15]).useSharedValue(scale.get());
  const items2 = [pIPState.scale, sharedValue2];
  const memo = obj.useMemo(() => {
    const physics = { mass: closure_1_12.mass, damping: windowDimensions(id2[59])(closure_1_12.damping - 2, closure_1_12.damping + 2), stiffness: windowDimensions(id2[59])(closure_1_12.stiffness - 20, closure_1_12.stiffness + 20) };
    const obj2 = { physics, layoutTransition: null };
    function layoutTransition(originX) {
      if (flag === undefined) {
        flag = false;
      }
      return layoutTransitionFunction(originX, obj, pIPState.scale, sharedValue2, flag);
    }
    layoutTransition.__closure = { layoutTransitionFunction, physics, pipState: pIPState, lastPipScale: sharedValue2 };
    layoutTransition.__workletHash = 3971511316222;
    layoutTransition.__initData = __initData;
    obj2.layoutTransition = layoutTransition;
    return obj2;
  }, items2);
  ({ physics, layoutTransition } = memo);
  if (item.type === constants2.CTA) {
    const id3 = item.id;
    if (constants.NO_VIDEO_PARTICIPANTS === id3) {
      let tmp31Result = closure_21(tmp(tmp2[60]), {});
      let tmp29 = closure_21;
    } else if (tmp40.CALLER_DISCONNECTED === id3) {
      tmp31Result = closure_21(tmp(tmp2[61]), {});
      tmp29 = closure_21;
    }
    const obj4 = { cleanUp: cleanUp.cleanUp, coords: cardLayoutCoordsSubscription, id, isRTCConnected: stateFromStores, isScrollVisible: derivedValue, layoutPhysics: physics, transitionState, sharedVisible: sharedValue, children: null };
    const items3 = [tmp31Result, , ];
    let tmp29Result = null != tmp4;
    if (tmp29Result) {
      const obj5 = { isRinging: tmp8, participant: tmp4, label: null, layout: null };
      const tmpResult3 = tmp(tmp2[64]);
      let userNick;
      if (tmp5Result17.isStableParticipantWithUser(tmp4)) {
        userNick = tmp4.userNick;
      }
      obj5.label = userNick;
      obj5.layout = layoutTransition;
      tmp29Result = tmp29(tmpResult3, obj5);
      tmp5Result17 = tmp5(tmp2[50]);
    }
    items3[1] = tmp29Result;
    let result = tmp5(tmp2[50]).isStableParticipantWithUser(tmp4);
    if (result) {
      const obj6 = { speakingOrPlayingSoundboard: sharedValue1, id, userId: tmp4.user.id, isSelf, layout: layoutTransition };
      result = tmp29(closure_51, obj6);
    }
    items3[2] = result;
    obj4.children = items3;
    return closure_23(closure_77, obj4);
  } else if (null != tmp4) {
    const type = item.type;
    const type2 = tmp4.type;
    if (ParticipantTypes.USER === type2) {
      ({ streamId, user } = tmp4);
      if (tmp4.hasVideo) {
        if (stateFromStores) {
          if (tmp4.canRenderVideo) {
            if (null == tmpResultResult) {
              let tmp33 = closure_21;
              const obj7 = { id: tmp30, userId: user.id, streamId: null, isScrollVisible: null, videoSpinnerContext: null, sharedCoords: null, isCamera: true, focusOnReady: null, layout: null };
              if (streamId == null) {
                streamId = null;
              }
              obj7.streamId = streamId;
              obj7.isScrollVisible = derivedValue;
              const VideoSpinnerContext = tmp5(tmp2[36]).VideoSpinnerContext;
              obj7.videoSpinnerContext = isSelf ? VideoSpinnerContext.SELF_VIDEO : VideoSpinnerContext.REMOTE_VIDEO;
              obj7.sharedCoords = cardLayoutCoordsSubscription;
              if (isCall) {
                isCall = !isSelf;
              }
              obj7.focusOnReady = isCall;
              obj7.layout = layoutTransition;
              let tmp33Result = tmp33(tmp(tmp2[35]), obj7);
              const tmpResult4 = tmp(tmp2[35]);
            }
            const obj8 = { avError: tmpResultResult, userId: user.id, style: null };
            user = pIPState.absoluteFill;
            obj8.style = user;
            tmp33Result = closure_21(tmp(tmp2[62]), obj8);
            tmp33 = closure_21;
          }
        }
      }
      const obj9 = { isRinging: tmp8, avatarURI: user.getAvatarURL(guildId, 80, false), avatarDecoration: null, layout: null, layoutPhysics: null, userId: null, guildId: null };
      const userAvatarDecoration = tmp4.userAvatarDecoration;
      obj9.avatarDecoration = userAvatarDecoration;
      obj9.layout = layoutTransition;
      obj9.layoutPhysics = physics;
      obj9.userId = user.id;
      obj9.guildId = guildId;
      tmp29 = closure_21;
      tmp31Result = closure_21(closure_43, obj9);
    } else if (ParticipantTypes.STREAM === type2) {
      const obj10 = { userId: tmp4.user.id, id: null, streamGuildId: null, streamId: null, userNick: null, isSelf: null, sharedCoords: null, isScrollVisible: null, layout: null };
      ({ id: obj12.id, streamGuildId: obj12.streamGuildId, streamId: obj12.streamId, userNick: obj12.userNick } = tmp4);
      obj10.isSelf = isSelf;
      obj10.sharedCoords = cardLayoutCoordsSubscription;
      obj10.isScrollVisible = derivedValue;
      obj10.layout = layoutTransition;
      tmp31Result = closure_21(closure_38, obj10);
      tmp29 = closure_21;
    } else if (ParticipantTypes.ACTIVITY === type2) {
      const obj11 = { sharedVisible: sharedValue, applicationId: tmp4.applicationId, layout: layoutTransition };
      tmp31Result = closure_21(tmp(tmp2[63]), obj11, tmp4.id);
      tmp29 = closure_21;
    }
  }
  const obj13 = { isRinging: tmp8, avatarURI: "r", avatarDecoration: "toCharArray$esjava$1", layout: layoutTransition, layoutPhysics: physics };
  tmp31Result = closure_21(closure_43, obj13);
  tmp29 = closure_21;
  const tmp5Result16 = scrollPosition(id2[15]);
}));