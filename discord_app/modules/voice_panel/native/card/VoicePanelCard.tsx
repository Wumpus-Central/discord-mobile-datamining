// discord_app/modules/voice_panel/native/card/VoicePanelCard.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexport2 from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import LinearGradientDefault from "../../../../../_runtime/05387_LinearGradient.js";
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
import ApplicationStreamingStore from "../../../../stores/ApplicationStreamingStore.tsx";
import RTCConnectionStore from "../../../../stores/RTCConnectionStore.tsx";
import SpeakingStore from "../../../../stores/SpeakingStore.tsx";

const ReanimatedRexport_mod = ReanimatedRexport2;

require = fn;
const StyleSheet = fn(17).StyleSheet;
const VoicePanelConstants = fn(11989);
({ VoicePanelCTACard: closure_9, VoicePanelModes: c10, MODE_CHANGE_PHYSICS: closure_11, SPEAKING_PHYSICS: closure_12, VoicePanelCardItemType: map1 } = VoicePanelConstants);
const VoicePanelControlsModes = fn(11987).VoicePanelControlsModes;
const VoicePanelPIPModes = fn(17516).VoicePanelPIPModes;
const EDGE_GUTTER = fn(11992).EDGE_GUTTER;
const ApplicationStreamStates = fn(1085).ApplicationStreamStates;
const ParticipantTypes = fn(5113).ParticipantTypes;
let SCALE_PHYSICS = fn(11990).SCALE_PHYSICS;
const jsxProd = fn(21);
({ jsx: closure_20, Fragment: closure_21, jsxs: closure_22 } = jsxProd);
let ReanimatedRexport = ReanimatedRexport_mod;
let closure_23 = ReanimatedRexport.createAnimatedComponent(fn(5086).Text);
let ReanimatedRexport = ReanimatedRexport_mod;
const LinearGradient = ReanimatedRexport.createAnimatedComponent(LinearGradientDefault);
let tmp4 = fn(1200).AVATAR_SIZE_MAP[fn(undefined, 1200).AvatarSizes.XXLARGE];
let obj = {};
let merged = Object.assign(SCALE_PHYSICS);
obj.stiffness = 150;
let closure_26 = { duration: 200 };
let closure_27 = { duration: 0 };
let c28 = 0.75;
const createStyles = fn(5090);
let obj2 = { positionWrapper: null, userRoundedCard: null, nonUserRoundedCard: null, blackBackground: null, selfStreamFocusedSubtitle: null, avatarImageMaskStyles: null, avatarPlaceholder: null, image: null, speakingIndicatorWrapper: null, speakingIndicatorUnderlay: null, speakingIndicatorBar: null };
const rect = { position: "absolute", top: 0, left: 0, overflow: "hidden", backgroundColor: nativeDefault.colors.BLACK };
obj2.positionWrapper = rect;
const rect1 = { position: "absolute", top: -4, left: -4, bottom: -4, right: -4, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_800 };
obj2.userRoundedCard = rect1;
let size = { position: "absolute", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", backgroundColor: nativeDefault.colors.VOICE_VIDEO_VIDEO_TILE_BACKGROUND };
obj2.nonUserRoundedCard = size;
let obj3 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj3.backgroundColor = "black";
obj2.blackBackground = obj3;
obj2.selfStreamFocusedSubtitle = { textAlign: "center", marginTop: 4, marginBottom: 40 };
obj2.avatarImageMaskStyles = { position: "relative", borderRadius: nativeDefault.radii.round, overflow: "hidden" };
let size1 = { width: tmp4, height: tmp4, borderRadius: nativeDefault.radii.round, backgroundColor: "rgba(0,0,0,0.3)" };
obj2.avatarPlaceholder = size1;
obj2.image = { maxWidth: 80, maxHeight: 80 };
let obj6 = {};
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj6.overflow = "hidden";
obj2.speakingIndicatorWrapper = obj6;
let obj7 = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj7.borderColor = nativeDefault.colors.BLACK;
obj2.speakingIndicatorUnderlay = obj7;
const merged4 = Object.assign(StyleSheet.absoluteFillObject);
obj2.speakingIndicatorBar = {};
let closure_29 = createStyles.createStyles(obj2);
let __initData = { code: "function VoicePanelCardTsx1(){const{isFocused,sharedCoords}=this.__closure;return{textAlign:\"center\",paddingHorizontal:16,paddingVertical:isFocused?0:16,width:isFocused?\"auto\":sharedCoords.get().width};}" };
const __initData2 = { code: "function VoicePanelCardTsx2(){const{isFocused,sharedCoords}=this.__closure;return{textAlign:'center',paddingHorizontal:16,paddingVertical:isFocused?0:16,width:isFocused?'auto':sharedCoords.get().width};}" };
let ReactCompilerGating = fn(558);
const defaultBorderRadius2 = ReactCompilerGating.isReactCompilerEnabled() ? (function SelfStreamCard(sharedCoords) {
  const cResult = sharedCoords(isFocused[21]).c(18);
  sharedCoords = sharedCoords.sharedCoords;
  const stream = sharedCoords.stream;
  isFocused = sharedCoords.isFocused;
  const tmp4 = closure_29();
  if (cResult[0] !== stream) {
    const fn = function s() {
      if (null != stream) {
        obj = StreamActionCreators;
        obj.stopStream(StreamKeyUtils.encodeStreamKey(tmp));
      }
    };
    cResult[0] = stream;
    cResult[1] = fn;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  obj = sharedCoords(isFocused[21]);
  const fn2 = function h() {
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
  fn2.__closure = { isFocused, sharedCoords };
  fn2.__workletHash = 1330083185339;
  fn2.__initData = __initData;
  const animatedStyle = sharedCoords(isFocused[14]).useAnimatedStyle(fn2);
  if (cResult[2] === isFocused) {
    if (cResult[3] === tmp4.blackBackground) {
      let tmp8 = cResult[4];
    }
    let str = "text-sm/semibold";
    if (isFocused) {
      str = "text-lg/semibold";
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(tmp2[25]).intl;
      const stringResult = intl.string(tmp(tmp2[25]).t.gMOwov);
      cResult[5] = stringResult;
      let tmp13 = stringResult;
    } else {
      tmp13 = cResult[5];
    }
    if (cResult[6] === str) {
      if (cResult[7] === animatedStyle) {
        let tmp15 = cResult[8];
      }
      if (cResult[9] === tmp5) {
        if (cResult[10] === isFocused) {
          if (cResult[11] === tmp4.selfStreamFocusedSubtitle) {
            let tmp19 = cResult[12];
          }
          if (cResult[13] === tmp4.nonUserRoundedCard) {
            if (cResult[14] === tmp8) {
              if (cResult[15] === tmp15) {
                if (cResult[16] === tmp19) {
                  let tmp24 = cResult[17];
                }
                return tmp24;
              }
            }
          }
          let obj2 = { style: tmp7, children: null };
          const items = [tmp8, tmp15, tmp19];
          obj2.children = items;
          const tmp27 = closure_22(stream(tmp2[24]), obj2);
          cResult[13] = tmp4.nonUserRoundedCard;
          cResult[14] = tmp8;
          cResult[15] = tmp15;
          cResult[16] = tmp19;
          cResult[17] = tmp27;
          tmp24 = tmp27;
        }
      }
      let tmp20 = null;
      if (isFocused) {
        const obj3 = { children: null };
        const obj4 = { style: tmp4.selfStreamFocusedSubtitle, variant: "text-sm/medium", color: "text-overlay-light", children: null };
        const intl2 = tmp(tmp2[25]).intl;
        obj4.children = intl2.string(tmp(tmp2[25]).t.dKeLGt);
        const items1 = [closure_20(tmp(tmp2[15]).Text, obj4), ];
        const obj5 = { size: "lg", variant: "primary-overlay", onPress: tmp5, text: null };
        const intl3 = tmp(tmp2[25]).intl;
        obj5.text = intl3.string(tmp(tmp2[25]).t.CpkXwZ);
        items1[1] = closure_20(tmp(tmp2[26]).Button, obj5);
        obj3.children = items1;
        tmp20 = closure_22(closure_21, obj3);
      }
      cResult[9] = tmp5;
      cResult[10] = isFocused;
      cResult[11] = tmp4.selfStreamFocusedSubtitle;
      cResult[12] = tmp20;
      tmp19 = tmp20;
    }
    const obj6 = { style: animatedStyle, variant: str, color: "text-overlay-light", children: tmp13 };
    const tmp18 = closure_20(closure_23, obj6);
    cResult[6] = str;
    cResult[7] = animatedStyle;
    cResult[8] = tmp18;
    tmp15 = tmp18;
  }
  let tmp9 = isFocused;
  if (isFocused) {
    const obj7 = { style: tmp4.blackBackground };
    tmp9 = closure_20(stream(tmp2[24]), obj7);
  }
  cResult[2] = isFocused;
  cResult[3] = tmp4.blackBackground;
  cResult[4] = tmp9;
  tmp8 = tmp9;
  const tmpResult = sharedCoords(isFocused[14]);
}) : (function SelfStreamCard(sharedCoords) {
  sharedCoords = sharedCoords.sharedCoords;
  const stream = sharedCoords.stream;
  const isFocused = sharedCoords.isFocused;
  const tmp = closure_29();
  const items = [stream];
  const callback = noop.useCallback(() => {
    if (null != stream) {
      obj = StreamActionCreators;
      obj.stopStream(StreamKeyUtils.encodeStreamKey(tmp));
    }
  }, items);
  const fn = function l() {
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
  const animatedStyle = sharedCoords(isFocused[14]).useAnimatedStyle(fn);
  let obj2 = { style: tmp.nonUserRoundedCard, children: null };
  let tmp9 = isFocused;
  obj = sharedCoords(isFocused[14]);
  const tmp7 = stream;
  if (isFocused) {
    const obj3 = { style: tmp.blackBackground };
    tmp9 = closure_20(tmp7(tmp4[24]), obj3);
  }
  const items1 = [tmp9, , ];
  const obj4 = { style: animatedStyle, variant: null, color: "text-overlay-light", children: null };
  let str = "text-sm/semibold";
  if (isFocused) {
    str = "text-lg/semibold";
  }
  obj4.variant = str;
  const intl = tmp3(tmp4[25]).intl;
  obj4.children = intl.string(sharedCoords(isFocused[25]).t.gMOwov);
  items1[1] = closure_20(closure_23, obj4);
  let tmp6Result = null;
  if (isFocused) {
    const obj5 = { children: null };
    const obj6 = { style: tmp.selfStreamFocusedSubtitle, variant: "text-sm/medium", color: "text-overlay-light", children: null };
    const intl2 = tmp3(tmp4[25]).intl;
    obj6.children = intl2.string(tmp3(tmp4[25]).t.dKeLGt);
    const items2 = [closure_20(tmp3(tmp4[15]).Text, obj6), ];
    const obj7 = { size: "lg", variant: "primary-overlay", onPress: callback, text: null };
    const intl3 = tmp3(tmp4[25]).intl;
    obj7.text = intl3.string(tmp3(tmp4[25]).t.CpkXwZ);
    items2[1] = closure_20(tmp3(tmp4[26]).Button, obj7);
    obj5.children = items2;
    tmp6Result = closure_22(closure_21, obj5);
  }
  items1[2] = tmp6Result;
  obj2.children = items1;
  return closure_22(stream(isFocused[24]), obj2);
});
const __initData3 = { code: "function VoicePanelCardTsx3(){const{focused,id}=this.__closure;var _focused$get;return((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;}" };
__initData = { code: "function VoicePanelCardTsx4(isFocused_0,lastIsFocused){const{runOnJS,setIsFocused}=this.__closure;if(isFocused_0!==lastIsFocused){runOnJS(setIsFocused)(isFocused_0);}}" };
const __initData4 = { code: "function VoicePanelCardTsx5(){const{focused,id}=this.__closure;var _focused$get;return((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;}" };
const __initData5 = { code: "function VoicePanelCardTsx6(isFocused_0,lastIsFocused){const{runOnJS,setIsFocused}=this.__closure;if(isFocused_0!==lastIsFocused){runOnJS(setIsFocused)(isFocused_0);}}" };
ReactCompilerGating = fn(558);
let closure_37 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function AnimatedStreamCard(id) {
  const cResult = id(streamGuildId[21]).c(44);
  id = id.id;
  const userId = id.userId;
  ({ streamId, streamGuildId } = id);
  ({ userNick, sharedCoords, isScrollVisible, layout } = id);
  const context = setFocused.useContext(userId(streamGuildId[27]));
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
    const stateFromStoresObject = tmp(streamGuildId[28]).useStateFromStoresObject(first, tmp8, tmp9);
    const stream = stateFromStoresObject.stream;
    const activeStream = stateFromStoresObject.activeStream;
    if (cResult[5] === setFocused) {
      if (cResult[6] === stream) {
        let tmp11 = cResult[7];
      }
      [tmp14, tmp15] = focused(setFocused.useState(false), 2);
      ApplicationStreamingStore = tmp15;
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
      G.__initData = __initData3;
      class Y {
        constructor(arg0, arg1) {
          if (id !== arg1) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[14]);
            tmp3 = closure_6;
            tmp4 = obj.runOnJS(closure_6)(id);
          }
          return;
        }
      }
      const obj4 = { runOnJS: tmp(streamGuildId[14]).runOnJS, setIsFocused: tmp15 };
      Y.__closure = obj4;
      Y.__workletHash = 16381883582731;
      Y.__initData = __initData;
      const animatedReaction = tmp(streamGuildId[14]).useAnimatedReaction(G, Y);
      const tmpResult3 = tmp(streamGuildId[14]);
      const tmp4ResultResult = tmp4(streamGuildId[29])(tmp(streamGuildId[30]).MediaEngineContextTypes.STREAM, userId);
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
        const tmp63 = closure_20(closure_32, obj5);
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
        cResult[16] = closure_20(tmp(streamGuildId[31]).VoicePanelStreamPreview, obj6);
        class Y {
          constructor(arg0, arg1) {
            if (id !== arg1) {
              tmp = closure_0;
              tmp2 = closure_2;
              obj = closure_0(closure_2[14]);
              tmp3 = closure_6;
              tmp4 = obj.runOnJS(closure_6)(id);
            }
            return;
          }
        }
        const tmp59 = closure_20(tmp(streamGuildId[31]).VoicePanelStreamPreview, obj6);
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
              const obj7 = { stream: activeStream, removeSplashImage: !tmp14, type: tmp(streamGuildId[32]).VideoEmptyTypes.STREAM_ENDED, style: null };
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
              const tmp50 = closure_20(tmp4(streamGuildId[32]), obj7);
              cResult[21] = activeStream;
              cResult[22] = !tmp14;
              cResult[23] = tmp50;
              tmp46 = tmp50;
              const tmp4Result4 = tmp4(streamGuildId[32]);
            } else if (activeStream.state === ApplicationStreamStates.RECONNECTING) {
              const _Symbol = Symbol;
              if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
                const obj8 = { title: null };
                const intl3 = tmp(streamGuildId[25]).intl;
                obj8.title = intl3.string(tmp(streamGuildId[25]).t["pdFFK+"]);
                cResult[24] = closure_20(tmp(streamGuildId[33]).StreamTextOverlay, obj8);
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
                const tmp32 = closure_20(tmp(streamGuildId[33]).StreamTextOverlay, obj8);
              }
            } else {
              let tmp29 = null;
              if (activeStream.state === ApplicationStreamStates.PAUSED) {
                const _Symbol2 = Symbol;
                if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl = tmp(streamGuildId[25]).intl;
                  const stringResult = intl.string(tmp(streamGuildId[25]).t["5q17w5"]);
                  cResult[25] = stringResult;
                  let tmp22 = stringResult;
                } else {
                  tmp22 = cResult[25];
                }
                if (cResult[26] !== userNick) {
                  const intl2 = tmp(streamGuildId[25]).intl;
                  const obj9 = { username: userNick };
                  cResult[26] = userNick;
                  cResult[27] = intl2.formatToPlainString(tmp(streamGuildId[25]).t.meVVlb, obj9);
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
                  const formatToPlainStringResult = intl2.formatToPlainString(tmp(streamGuildId[25]).t.meVVlb, obj9);
                }
                if (cResult[28] !== tmp24) {
                  const obj10 = { title: tmp22, subtext: tmp24 };
                  cResult[28] = tmp24;
                  cResult[29] = closure_20(tmp(streamGuildId[33]).StreamTextOverlay, obj10);
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
                  const tmp28 = closure_20(tmp(streamGuildId[33]).StreamTextOverlay, obj10);
                } else {
                  const tmp26 = cResult[29];
                }
                tmp29 = tmp26;
              }
              if (streamId == null) {
                streamId = null;
              }
              if (cResult[30] !== activeStream) {
                const encodeStreamKeyResult = tmp(streamGuildId[23]).encodeStreamKey(activeStream);
                cResult[30] = activeStream;
                cResult[31] = encodeStreamKeyResult;
                let tmp34 = encodeStreamKeyResult;
                const tmpResult4 = tmp(streamGuildId[23]);
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
              tmp4(streamGuildId[34]);
              obj12.videoSpinnerContext = tmp(streamGuildId[35]).VideoSpinnerContext.REMOTE_STREAM;
              obj12.sharedCoords = sharedCoords;
              obj12.paused = activeStream.state === ApplicationStreamStates.PAUSED;
              class Y {
                constructor(arg0, arg1) {
                  if (id !== arg1) {
                    tmp = closure_0;
                    tmp2 = closure_2;
                    obj = closure_0(closure_2[14]);
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
        const tmp56 = closure_20(tmp4(streamGuildId[32]), obj13);
        cResult[17] = activeStream;
        cResult[18] = !tmp14;
        class Y {
          constructor(arg0, arg1) {
            if (id !== arg1) {
              tmp = closure_0;
              tmp2 = closure_2;
              obj = closure_0(closure_2[14]);
              tmp3 = closure_6;
              tmp4 = obj.runOnJS(closure_6)(id);
            }
            return;
          }
        }
        cResult[20] = tmp56;
        tmp52 = tmp56;
        const tmp4Result6 = tmp4(streamGuildId[32]);
      }
      const tmp4Result = tmp4(streamGuildId[29]);
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
    const tmpResult = tmp(streamGuildId[28]);
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
  obj = id(streamGuildId[21]);
}) : (function AnimatedStreamCard(id) {
  id = id.id;
  const userId = id.userId;
  ({ streamId, streamGuildId } = id);
  ({ sharedCoords, layout } = id);
  let setFocused;
  c6 = undefined;
  ({ userNick, isSelf, isScrollVisible } = id);
  const context = setFocused.useContext(userId(streamGuildId[27]));
  const focused = context.focused;
  setFocused = context.setFocused;
  const items = [c6];
  const items1 = [userId, streamGuildId];
  const stateFromStoresObject = id(streamGuildId[28]).useStateFromStoresObject(items, () => ({ stream: ApplicationStreamingStore.getStreamForUser(userId, streamGuildId), activeStream: ApplicationStreamingStore.getActiveStreamForUser(userId, streamGuildId) }), items1);
  const stream = stateFromStoresObject.stream;
  const activeStream = stateFromStoresObject.activeStream;
  const items2 = [stream, setFocused];
  const callback = setFocused.useCallback(() => {
    if (null != stream) {
      StreamActionCreators.watchStream(stream, { forceMultiple: true });
      setFocused(StreamKeyUtils.encodeStreamKey(stream));
    }
  }, items2);
  obj = id(streamGuildId[28]);
  [tmp8, tmp9] = focused(setFocused.useState(false), 2);
  c6 = tmp9;
  const tmp7 = focused(setFocused.useState(false), 2);
  const fn = function v() {
    value = focused.get();
    id = undefined;
    if (value != null) {
      id = value.id;
    }
    return id === id;
  };
  fn.__closure = { focused, id };
  fn.__workletHash = 720082375367;
  fn.__initData = __initData4;
  class I {
    constructor(arg0, arg1) {
      if (id !== arg1) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[14]);
        tmp3 = closure_6;
        tmp4 = obj.runOnJS(closure_6)(id);
      }
      return;
    }
  }
  let obj2 = id(streamGuildId[14]);
  I.__closure = { runOnJS: id(streamGuildId[14]).runOnJS, setIsFocused: tmp9 };
  I.__workletHash = 1640804275081;
  I.__initData = __initData5;
  const animatedReaction = obj2.useAnimatedReaction(fn, I);
  const obj3 = { runOnJS: id(streamGuildId[14]).runOnJS, setIsFocused: tmp9 };
  const tmp11Result = userId(streamGuildId[29])(id(streamGuildId[30]).MediaEngineContextTypes.STREAM, userId);
  if (isSelf) {
    const obj4 = { sharedCoords, stream, isFocused: tmp8 };
    return closure_20(closure_32, obj4);
  } else if (null == activeStream) {
    const obj5 = { mode: context.mode, stream, onPress: callback, disabled: false, layout };
    return closure_20(tmp4(streamGuildId[31]).VoicePanelStreamPreview, obj5);
  } else {
    if (null == tmp11Result) {
      if (activeStream.state !== ApplicationStreamStates.FAILED) {
        if (activeStream.state === ApplicationStreamStates.ENDED) {
          const obj6 = { stream: activeStream, removeSplashImage: !tmp8, type: tmp4(streamGuildId[32]).VideoEmptyTypes.STREAM_ENDED, style: stream.absoluteFill };
          return closure_20(tmp(streamGuildId[32]), obj6);
        } else {
          if (activeStream.state === ApplicationStreamStates.RECONNECTING) {
            const obj7 = { title: null };
            const intl = tmp4(streamGuildId[25]).intl;
            obj7.title = intl.string(tmp4(streamGuildId[25]).t["pdFFK+"]);
            let tmp15 = closure_20(tmp4(streamGuildId[33]).StreamTextOverlay, obj7);
          } else {
            tmp15 = null;
            if (activeStream.state === ApplicationStreamStates.PAUSED) {
              const obj8 = { title: null, subtext: null };
              const intl2 = tmp4(streamGuildId[25]).intl;
              obj8.title = intl2.string(tmp4(streamGuildId[25]).t["5q17w5"]);
              const intl3 = tmp4(streamGuildId[25]).intl;
              const obj9 = { username: userNick };
              obj8.subtext = intl3.formatToPlainString(tmp4(streamGuildId[25]).t.meVVlb, obj9);
              tmp15 = closure_20(tmp4(streamGuildId[33]).StreamTextOverlay, obj8);
            }
          }
          const obj10 = { layout, id, streamId: null, userId: null, streamKey: null, isScrollVisible: null, videoSpinnerContext: null, sharedCoords: null, isCamera: false, paused: null };
          if (streamId == null) {
            streamId = null;
          }
          const obj11 = { children: null };
          obj10.streamId = streamId;
          obj10.userId = userId;
          const tmpResult3 = tmp(streamGuildId[34]);
          obj10.streamKey = tmp4(streamGuildId[23]).encodeStreamKey(activeStream);
          obj10.isScrollVisible = isScrollVisible;
          obj10.videoSpinnerContext = tmp4(streamGuildId[35]).VideoSpinnerContext.REMOTE_STREAM;
          obj10.sharedCoords = sharedCoords;
          obj10.paused = activeStream.state === ApplicationStreamStates.PAUSED;
          const items3 = [closure_20(tmpResult3, obj10), tmp15];
          obj11.children = items3;
          return closure_22(closure_21, obj11);
        }
      }
    }
    const obj12 = { avError: tmp11Result, stream: activeStream, removeSplashImage: !tmp8, type: tmp4(streamGuildId[32]).VideoEmptyTypes.STREAM_FAILED, style: stream.absoluteFill };
    return closure_20(tmp(streamGuildId[32]), obj12);
  }
  const tmp11 = userId(streamGuildId[29]);
}));
const __initData6 = { code: "function VoicePanelCardTsx7(){const{withTiming,isRinging,CONNECTING_OPACITY,solidBackgroundColor}=this.__closure;return{opacity:withTiming(isRinging?CONNECTING_OPACITY:1,{duration:100},\"animate-always\"),backgroundColor:solidBackgroundColor};}" };
const __initData7 = { code: "function VoicePanelCardTsx8(){const{withSpring,mode,VoicePanelModes,layoutPhysics}=this.__closure;return{transform:[{scale:withSpring(mode.get()===VoicePanelModes.PIP?0.8:1,layoutPhysics)}]};}" };
const __initData8 = { code: "function VoicePanelCardTsx9(){const{withTiming,isRinging,CONNECTING_OPACITY,solidBackgroundColor}=this.__closure;return{opacity:withTiming(isRinging?CONNECTING_OPACITY:1,{duration:100},'animate-always'),backgroundColor:solidBackgroundColor};}" };
const __initData9 = { code: "function VoicePanelCardTsx10(){const{withSpring,mode,VoicePanelModes,layoutPhysics}=this.__closure;return{transform:[{scale:withSpring(mode.get()===VoicePanelModes.PIP?64/80:1,layoutPhysics)}]};}" };
ReactCompilerGating = fn(558);
let closure_42 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function AnimatedUserCardInner(isRinging) {
  const cResult = isRinging(mode[21]).c(30);
  isRinging = isRinging.isRinging;
  ({ layout, avatarURI, avatarDecoration, layoutPhysics } = isRinging);
  ({ userId, guildId } = isRinging);
  let image = closure_29();
  mode = noop.useContext(layoutPhysics(mode[27])).mode;
  isRinging(mode[36]);
  if (cResult[0] === guildId) {
    if (cResult[1] === userId) {
      let tmp7 = cResult[2];
    }
    const tmp8 = layoutPhysics(tmp2[37])(tmp7);
    let str = "transparent";
    if (null == tmp8) {
      str = tmp6;
    }
    class C {
      constructor() {
        obj = closure_0(closure_2[38]);
        num = 1;
        if (isRinging) {
          num = c28;
        }
        obj1 = { opacity: obj.withTiming(num, { duration: 100 }, "animate-always"), backgroundColor: closure_3 };
        return obj1;
      }
    }
    let obj2 = { withTiming: tmp(tmp2[38]).withTiming, isRinging, CONNECTING_OPACITY, solidBackgroundColor: str };
    C.__closure = obj2;
    C.__workletHash = 14362526641310;
    C.__initData = __initData6;
    const animatedStyle = tmp(tmp2[14]).useAnimatedStyle(C);
    const tmpResult = tmp(tmp2[14]);
    const fn = function y() {
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
    fn.__closure = obj3;
    fn.__workletHash = 1926256435326;
    fn.__initData = __initData7;
    const animatedStyle1 = tmp(tmp2[14]).useAnimatedStyle(fn);
    if (cResult[3] !== avatarURI) {
      let cachedSourceFromURI;
      if (null != avatarURI) {
        cachedSourceFromURI = tmp(tmp2[36]).getCachedSourceFromURI(avatarURI);
        const tmpResult4 = tmp(tmp2[36]);
      }
      cResult[3] = avatarURI;
      cResult[4] = cachedSourceFromURI;
      let tmp16 = cachedSourceFromURI;
    } else {
      tmp16 = cResult[4];
    }
    if (cResult[5] === animatedStyle) {
      if (cResult[6] === image.userRoundedCard) {
        let tmp18 = cResult[7];
      }
      if (cResult[8] === tmp8) {
        if (cResult[9] === layout) {
          let tmp19 = cResult[10];
        }
        if (null != tmp16) {
          let prop;
          if (null == avatarDecoration) {
            prop = image.avatarImageMaskStyles;
          }
          if (cResult[13] === animatedStyle1) {
            if (cResult[14] === prop) {
              let tmp29 = cResult[15];
            }
            if (cResult[16] === avatarDecoration) {
              if (cResult[17] === tmp16) {
                if (cResult[18] === tmp27) {
                  if (cResult[19] === image.image) {
                    if (cResult[21] === layout) {
                      if (cResult[22] === tmp29) {
                      }
                    }
                    const obj4 = { style: tmp29, layout, children: cResult[20] };
                    class C {
                      constructor() {
                        obj = closure_0(closure_2[38]);
                        num = 1;
                        if (isRinging) {
                          num = c28;
                        }
                        obj1 = { opacity: obj.withTiming(num, { duration: 100 }, "animate-always"), backgroundColor: closure_3 };
                        return obj1;
                      }
                    }
                    cResult[21] = layout;
                    cResult[22] = tmp29;
                    cResult[23] = cResult[20];
                    cResult[24] = tmp36;
                  }
                }
              }
            }
            if (tmp27) {
              const obj5 = { source: tmp16, size: tmp(tmp2[17]).AvatarSizes.XXLARGE, avatarDecoration };
              let tmp31Result = closure_20(tmp(tmp2[17]).Avatar, obj5);
            } else {
              const size = { source: tmp16, resizeMode: "stretch", width: 80, height: 80, style: image.image };
              tmp31Result = closure_20(layoutPhysics(tmp2[40]), size);
            }
            cResult[16] = avatarDecoration;
            class C {
              constructor() {
                obj = closure_0(closure_2[38]);
                num = 1;
                if (isRinging) {
                  num = c28;
                }
                obj1 = { opacity: obj.withTiming(num, { duration: 100 }, "animate-always"), backgroundColor: closure_3 };
                return obj1;
              }
            }
            cResult[18] = tmp27;
            image = image.image;
            cResult[19] = image;
            cResult[20] = tmp31Result;
          }
          let items = [prop, animatedStyle1];
          class C {
            constructor() {
              obj = closure_0(closure_2[38]);
              num = 1;
              if (isRinging) {
                num = c28;
              }
              obj1 = { opacity: obj.withTiming(num, { duration: 100 }, "animate-always"), backgroundColor: closure_3 };
              return obj1;
            }
          }
          cResult[13] = animatedStyle1;
          cResult[14] = prop;
          cResult[15] = items;
          tmp29 = items;
        } else {
          if (cResult[11] !== image.avatarPlaceholder) {
            const obj6 = { style: image.avatarPlaceholder };
            cResult[11] = image.avatarPlaceholder;
            class C {
              constructor() {
                obj = closure_0(closure_2[38]);
                num = 1;
                if (isRinging) {
                  num = c28;
                }
                obj1 = { opacity: obj.withTiming(num, { duration: 100 }, "animate-always"), backgroundColor: closure_3 };
                return obj1;
              }
            }
            let tmp24 = closure_20(layoutPhysics(tmp2[24]), obj6);
            const tmp26 = closure_20(layoutPhysics(tmp2[24]), obj6);
          } else {
            tmp24 = cResult[12];
          }
          if (cResult[25] === layout) {
            if (cResult[26] === tmp18) {
              if (cResult[27] === tmp19) {
                if (cResult[28] === tmp24) {
                  let tmp38 = cResult[29];
                }
                return tmp38;
              }
            }
          }
          const obj7 = { style: tmp18, layout, children: null };
          const items1 = [, ];
          class C {
            constructor() {
              obj = closure_0(closure_2[38]);
              num = 1;
              if (isRinging) {
                num = c28;
              }
              obj1 = { opacity: obj.withTiming(num, { duration: 100 }, "animate-always"), backgroundColor: closure_3 };
              return obj1;
            }
          }
          items1[1] = tmp24;
          obj7.children = items1;
          const tmp40 = closure_22(layoutPhysics(tmp2[41]), obj7);
          cResult[25] = layout;
          cResult[26] = tmp18;
          cResult[27] = tmp19;
          cResult[28] = tmp24;
          cResult[29] = tmp40;
          tmp38 = tmp40;
        }
      }
      let tmp20 = null;
      if (null != tmp8) {
        const obj8 = { colors: tmp8, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, style: null, layout: null, pointerEvents: "none" };
        class C {
          constructor() {
            obj = closure_0(closure_2[38]);
            num = 1;
            if (isRinging) {
              num = c28;
            }
            obj1 = { opacity: obj.withTiming(num, { duration: 100 }, "animate-always"), backgroundColor: closure_3 };
            return obj1;
          }
        }
        obj8.layout = layout;
        tmp20 = closure_20(LinearGradient, obj8);
      }
      cResult[8] = tmp8;
      class C {
        constructor() {
          obj = closure_0(closure_2[38]);
          num = 1;
          if (isRinging) {
            num = c28;
          }
          obj1 = { opacity: obj.withTiming(num, { duration: 100 }, "animate-always"), backgroundColor: closure_3 };
          return obj1;
        }
      }
      cResult[10] = tmp20;
      tmp19 = tmp20;
    }
    const items2 = [image.userRoundedCard, animatedStyle];
    cResult[5] = animatedStyle;
    cResult[6] = image.userRoundedCard;
    cResult[7] = items2;
    tmp18 = items2;
    const tmpResult3 = tmp(tmp2[14]);
  }
  const obj9 = { userId, guildId, location: "VoicePanelCard-native" };
  cResult[0] = guildId;
  cResult[1] = userId;
  cResult[2] = obj9;
  tmp7 = obj9;
  obj = isRinging(mode[21]);
}) : (function AnimatedUserCardInner(isRinging) {
  isRinging = isRinging.isRinging;
  ({ layout, avatarURI, avatarDecoration, layoutPhysics } = isRinging);
  let mode;
  ({ userId, guildId } = isRinging);
  const tmp = closure_29();
  mode = noop.useContext(layoutPhysics(mode[27])).mode;
  const dominantColorFromImage = isRinging(mode[36]).useDominantColorFromImage(avatarURI);
  const tmp6 = layoutPhysics(mode[37])({ userId, guildId, location: "VoicePanelCard-native" });
  let str = "transparent";
  if (null == tmp6) {
    str = dominantColorFromImage;
  }
  obj = isRinging(mode[36]);
  const fn = function _() {
    let num = 1;
    if (isRinging) {
      num = c28;
    }
    return { opacity: timing.withTiming(num, { duration: 100 }, "animate-always"), backgroundColor: str };
  };
  const tmp4Result = isRinging(mode[14]);
  fn.__closure = { withTiming: isRinging(mode[38]).withTiming, isRinging, CONNECTING_OPACITY, solidBackgroundColor: str };
  fn.__workletHash = 8753835850480;
  fn.__initData = __initData8;
  const animatedStyle = tmp4Result.useAnimatedStyle(fn);
  let obj2 = { withTiming: isRinging(mode[38]).withTiming, isRinging, CONNECTING_OPACITY, solidBackgroundColor: str };
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
  const tmp4Result3 = isRinging(mode[14]);
  fn2.__closure = { withSpring: isRinging(mode[39]).withSpring, mode, VoicePanelModes, layoutPhysics };
  fn2.__workletHash = 10965423163748;
  fn2.__initData = __initData9;
  let cachedSourceFromURI;
  const animatedStyle1 = tmp4Result3.useAnimatedStyle(fn2);
  if (null != avatarURI) {
    cachedSourceFromURI = tmp4(tmp3[36]).getCachedSourceFromURI(avatarURI);
    const tmp4Result4 = tmp4(tmp3[36]);
  }
  const obj4 = { style: null, layout, children: null };
  let items = [tmp.userRoundedCard, animatedStyle];
  obj4.style = items;
  let tmp12 = null;
  const obj3 = { withSpring: isRinging(mode[39]).withSpring, mode, VoicePanelModes, layoutPhysics };
  if (null != tmp6) {
    const obj5 = { colors: tmp6, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, style: StyleSheet.absoluteFill, layout, pointerEvents: "none" };
    tmp12 = closure_20(LinearGradient, obj5);
  }
  const items1 = [tmp12, ];
  if (null == cachedSourceFromURI) {
    const obj6 = { style: tmp.avatarPlaceholder };
    let tmp21Result2 = closure_20(layoutPhysics(tmp3[24]), obj6);
  } else {
    let prop;
    if (null == avatarDecoration) {
      prop = tmp.avatarImageMaskStyles;
    }
    const obj7 = { style: null, layout: null, children: null };
    const items2 = [prop, animatedStyle1];
    obj7.style = items2;
    obj7.layout = layout;
    if (null != avatarDecoration) {
      const obj8 = { source: cachedSourceFromURI, size: tmp4(tmp3[17]).AvatarSizes.XXLARGE, avatarDecoration };
      let tmp21Result = closure_20(tmp4(tmp3[17]).Avatar, obj8);
    } else {
      const size = { source: cachedSourceFromURI, resizeMode: "stretch", width: 80, height: 80, style: tmp.image };
      tmp21Result = closure_20(layoutPhysics(tmp3[40]), size);
    }
    obj7.children = tmp21Result;
    tmp21Result2 = closure_20(layoutPhysics(tmp3[41]), obj7);
    const tmp2Result2 = layoutPhysics(tmp3[41]);
  }
  items1[1] = tmp21Result2;
  obj4.children = items1;
  return closure_22(layoutPhysics(mode[41]), obj4);
}));
const __initData10 = { code: "function VoicePanelCardTsx11(){const{mode,VoicePanelModes,focused,id,withSpring,computeCardBorderRadius,isSelf,defaultBorderRadius,SPEAKING_PHYSICS}=this.__closure;var _focused$get,_focused$get2;const disable=mode.get()!==VoicePanelModes.PIP&&((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;return{opacity:disable?0:1,borderRadius:withSpring(disable?0:computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius}),SPEAKING_PHYSICS,!disable?\"animate-always\":\"animate-never\")};}" };
const __initData11 = { code: "function VoicePanelCardTsx12(){const{mode,VoicePanelModes,focused,id,withSpring,computeCardBorderRadius,isSelf,defaultBorderRadius,SPEAKING_PHYSICS,speaking,roundToNearestPixel,SPEAKING_BORDER_SIZE,SPEAKING_INSET}=this.__closure;var _focused$get,_focused$get2;const disable_0=mode.get()===VoicePanelModes.PIP||((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;return{borderRadius:withSpring(!disable_0?computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius}):0,SPEAKING_PHYSICS,!disable_0?\"animate-always\":\"animate-never\"),borderWidth:withSpring(!disable_0&&speaking.get()?roundToNearestPixel(SPEAKING_BORDER_SIZE+SPEAKING_INSET):0,SPEAKING_PHYSICS,!disable_0?\"animate-always\":\"animate-never\")};}" };
const __initData12 = { code: "function VoicePanelCardTsx13(){const{mode,VoicePanelModes,focused,id,withSpring,computeCardBorderRadius,isSelf,defaultBorderRadius,SPEAKING_PHYSICS,speaking,SPEAKING_BORDER_SIZE}=this.__closure;var _focused$get,_focused$get2;const disable_1=mode.get()===VoicePanelModes.PIP||((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;return{borderRadius:withSpring(!disable_1?computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius}):0,SPEAKING_PHYSICS,!disable_1?\"animate-always\":\"animate-never\"),borderWidth:withSpring(!disable_1&&speaking.get()?SPEAKING_BORDER_SIZE:0,SPEAKING_PHYSICS,!disable_1?\"animate-always\":\"animate-never\")};}" };
const __initData13 = { code: "function VoicePanelCardTsx14(){const{mode,VoicePanelModes,focused,id,withSpring,computeCardBorderRadius,isSelf,defaultBorderRadius,SPEAKING_PHYSICS}=this.__closure;var _focused$get,_focused$get2;const disable=mode.get()!==VoicePanelModes.PIP&&((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;return{opacity:disable?0:1,borderRadius:withSpring(disable?0:computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius}),SPEAKING_PHYSICS,!disable?'animate-always':'animate-never')};}" };
const __initData14 = { code: "function VoicePanelCardTsx15(){const{mode,VoicePanelModes,focused,id,withSpring,computeCardBorderRadius,isSelf,defaultBorderRadius,SPEAKING_PHYSICS,speaking,roundToNearestPixel,SPEAKING_BORDER_SIZE,SPEAKING_INSET}=this.__closure;var _focused$get,_focused$get2;const disable_0=mode.get()===VoicePanelModes.PIP||((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;return{borderRadius:withSpring(!disable_0?computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius}):0,SPEAKING_PHYSICS,!disable_0?'animate-always':'animate-never'),borderWidth:withSpring(!disable_0&&speaking.get()?roundToNearestPixel(SPEAKING_BORDER_SIZE+SPEAKING_INSET):0,SPEAKING_PHYSICS,!disable_0?'animate-always':'animate-never')};}" };
const __initData15 = { code: "function VoicePanelCardTsx16(){const{mode,VoicePanelModes,focused,id,withSpring,computeCardBorderRadius,isSelf,defaultBorderRadius,SPEAKING_PHYSICS,speaking,SPEAKING_BORDER_SIZE}=this.__closure;var _focused$get,_focused$get2;const disable_1=mode.get()===VoicePanelModes.PIP||((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;return{borderRadius:withSpring(!disable_1?computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius}):0,SPEAKING_PHYSICS,!disable_1?'animate-always':'animate-never'),borderWidth:withSpring(!disable_1&&speaking.get()?SPEAKING_BORDER_SIZE:0,SPEAKING_PHYSICS,!disable_1?'animate-always':'animate-never')};}" };
ReactCompilerGating = fn(558);
let closure_49 = ReactCompilerGating.isReactCompilerEnabled() ? (function SpeakingIndicator(id) {
  const cResult = id(speaking[21]).c(26);
  id = id.id;
  ({ userId, isSelf } = id);
  speaking = id.speaking;
  const layout = id.layout;
  const context = focused.useContext(isSelf(speaking[27]));
  const mode = context.mode;
  focused = context.focused;
  const guildId = context.guildId;
  const tmp6 = closure_29();
  obj = id(speaking[21]);
  const token = id(speaking[42]).useToken(isSelf(speaking[19]).modules.mobile.VOICE_TILE_BORDER_RADIUS);
  if (cResult[0] === guildId) {
    if (cResult[1] === userId) {
      let tmp8 = cResult[2];
    }
    const avatarSpeakingColor = tmp(tmp2[43]).useAvatarSpeakingColor(tmp8);
    const tmpResult = tmp(tmp2[43]);
    const fn = function y() {
      let tmp = mode.get() !== VoicePanelModes.PIP;
      if (tmp) {
        value = focused.get();
        id = undefined;
        if (value != null) {
          id = value.id;
        }
        tmp = id === id;
      }
      let num = 1;
      if (tmp) {
        num = 0;
      }
      const obj2 = { opacity: num, borderRadius: null };
      let num2 = 0;
      if (!tmp) {
        const obj4 = { id, mode: mode.get(), focused: null, isSelf: null, defaultBorderRadius: null };
        value2 = focused.get();
        let id1;
        if (value2 != null) {
          id1 = value2.id;
        }
        obj4.focused = id1;
        obj4.isSelf = isSelf;
        obj4.defaultBorderRadius = token;
        num2 = computeCardBorderRadiusDefault(obj4);
      }
      let str = "animate-always";
      if (tmp) {
        str = "animate-never";
      }
      obj2.borderRadius = spring.withSpring(num2, SPEAKING_PHYSICS, str);
      return obj2;
    };
    let obj3 = { mode, VoicePanelModes, focused, id, withSpring: tmp(tmp2[39]).withSpring, computeCardBorderRadius: isSelf(tmp2[44]), isSelf, defaultBorderRadius: token, SPEAKING_PHYSICS };
    fn.__closure = obj3;
    fn.__workletHash = 11554900074499;
    fn.__initData = __initData10;
    const animatedStyle = tmp(tmp2[14]).useAnimatedStyle(fn);
    const tmpResult4 = tmp(tmp2[14]);
    class E {
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
          tmp17 = closure_5;
          obj1.defaultBorderRadius = closure_5;
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
          tmp19 = speaking;
          num2 = 0;
          if (speaking.get()) {
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
    let obj4 = { mode, VoicePanelModes, focused, id, withSpring: tmp(tmp2[39]).withSpring, computeCardBorderRadius: isSelf(tmp2[44]), isSelf, defaultBorderRadius: token, SPEAKING_PHYSICS, speaking, roundToNearestPixel: isSelf(tmp2[45]), SPEAKING_BORDER_SIZE: 3, SPEAKING_INSET: 2 };
    E.__closure = obj4;
    E.__workletHash = 9044857468643;
    E.__initData = __initData11;
    const animatedStyle1 = tmp(tmp2[14]).useAnimatedStyle(E);
    const tmpResult5 = tmp(tmp2[14]);
    const fn2 = function b() {
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
        if (speaking.get()) {
          num2 = 3;
        }
      }
      if (tmp) {
        str = "animate-never";
      }
      obj4.borderWidth = spring.withSpring(num2, SPEAKING_PHYSICS, str);
      return obj4;
    };
    const obj5 = { mode, VoicePanelModes, focused, id, withSpring: tmp(tmp2[39]).withSpring, computeCardBorderRadius: isSelf(tmp2[44]), isSelf, defaultBorderRadius: token, SPEAKING_PHYSICS, speaking, SPEAKING_BORDER_SIZE: 3 };
    fn2.__closure = obj5;
    fn2.__workletHash = 382845800969;
    fn2.__initData = __initData12;
    const animatedStyle2 = tmp(tmp2[14]).useAnimatedStyle(fn2);
    if (cResult[3] === tmp6.speakingIndicatorWrapper) {
      if (cResult[4] === animatedStyle) {
        let tmp18 = cResult[5];
      }
      if (cResult[6] === tmp6.speakingIndicatorUnderlay) {
        if (cResult[7] === animatedStyle1) {
          let tmp19 = cResult[8];
        }
        if (cResult[9] === layout) {
          if (cResult[10] === tmp19) {
            let tmp20 = cResult[11];
          }
          if (cResult[12] !== avatarSpeakingColor) {
            const obj6 = { borderColor: avatarSpeakingColor };
            cResult[12] = avatarSpeakingColor;
            cResult[13] = obj6;
            let tmp23 = obj6;
          } else {
            tmp23 = cResult[13];
          }
          if (cResult[14] === animatedStyle2) {
            if (cResult[15] === tmp6.speakingIndicatorBar) {
              if (cResult[16] === tmp23) {
                let tmp24 = cResult[17];
              }
              if (cResult[18] === layout) {
                if (cResult[19] === tmp24) {
                  let tmp25 = cResult[20];
                }
                if (cResult[21] === layout) {
                  if (cResult[22] === tmp18) {
                    if (cResult[23] === tmp20) {
                      if (cResult[24] === tmp25) {
                        let tmp28 = cResult[25];
                      }
                      return tmp28;
                    }
                  }
                }
                const obj7 = { style: tmp18, layout, pointerEvents: "none", children: null };
                const items = [tmp20, tmp25];
                obj7.children = items;
                const tmp30 = closure_22(isSelf(tmp2[41]), obj7);
                cResult[21] = layout;
                cResult[22] = tmp18;
                cResult[23] = tmp20;
                cResult[24] = tmp25;
                cResult[25] = tmp30;
                tmp28 = tmp30;
              }
              const obj8 = { style: tmp24, layout };
              const tmp27 = closure_20(isSelf(tmp2[41]), obj8);
              cResult[18] = layout;
              cResult[19] = tmp24;
              cResult[20] = tmp27;
              tmp25 = tmp27;
            }
          }
          const items1 = [tmp6.speakingIndicatorBar, tmp23, animatedStyle2];
          cResult[14] = animatedStyle2;
          cResult[15] = tmp6.speakingIndicatorBar;
          cResult[16] = tmp23;
          cResult[17] = items1;
          tmp24 = items1;
        }
        const obj9 = { style: tmp19, layout };
        const tmp22 = closure_20(isSelf(tmp2[41]), obj9);
        cResult[9] = layout;
        cResult[10] = tmp19;
        cResult[11] = tmp22;
        tmp20 = tmp22;
      }
      const items2 = [tmp6.speakingIndicatorUnderlay, animatedStyle1];
      cResult[6] = tmp6.speakingIndicatorUnderlay;
      cResult[7] = animatedStyle1;
      cResult[8] = items2;
      tmp19 = items2;
    }
    const items3 = [tmp6.speakingIndicatorWrapper, animatedStyle];
    cResult[3] = tmp6.speakingIndicatorWrapper;
    cResult[4] = animatedStyle;
    cResult[5] = items3;
    tmp18 = items3;
    const tmpResult6 = tmp(tmp2[14]);
  }
  const obj10 = { userId, guildId };
  cResult[0] = guildId;
  cResult[1] = userId;
  cResult[2] = obj10;
  tmp8 = obj10;
  let obj2 = id(speaking[42]);
}) : (function SpeakingIndicator(userId) {
  let id = userId.id;
  const isSelf = userId.isSelf;
  const speaking = userId.speaking;
  const layout = userId.layout;
  let focused;
  const context = focused.useContext(isSelf(speaking[27]));
  const mode = context.mode;
  focused = context.focused;
  const tmp2 = closure_29();
  const token = id(speaking[42]).useToken(isSelf(speaking[19]).modules.mobile.VOICE_TILE_BORDER_RADIUS);
  obj = id(speaking[42]);
  const avatarSpeakingColor = id(speaking[43]).useAvatarSpeakingColor({ userId: userId.userId, guildId: context.guildId });
  let obj2 = id(speaking[43]);
  const fn = function u() {
    let tmp = mode.get() !== VoicePanelModes.PIP;
    if (tmp) {
      value = focused.get();
      id = undefined;
      if (value != null) {
        id = value.id;
      }
      tmp = id === id;
    }
    let num = 1;
    if (tmp) {
      num = 0;
    }
    const obj2 = { opacity: num, borderRadius: null };
    let num2 = 0;
    if (!tmp) {
      const obj4 = { id, mode: mode.get(), focused: null, isSelf: null, defaultBorderRadius: null };
      value2 = focused.get();
      let id1;
      if (value2 != null) {
        id1 = value2.id;
      }
      obj4.focused = id1;
      obj4.isSelf = isSelf;
      obj4.defaultBorderRadius = token;
      num2 = computeCardBorderRadiusDefault(obj4);
    }
    let str = "animate-always";
    if (tmp) {
      str = "animate-never";
    }
    obj2.borderRadius = spring.withSpring(num2, SPEAKING_PHYSICS, str);
    return obj2;
  };
  let obj3 = id(speaking[14]);
  fn.__closure = { mode, VoicePanelModes, focused, id, withSpring: id(speaking[39]).withSpring, computeCardBorderRadius: isSelf(speaking[44]), isSelf, defaultBorderRadius: token, SPEAKING_PHYSICS };
  fn.__workletHash = 10993051977798;
  fn.__initData = __initData13;
  const animatedStyle = obj3.useAnimatedStyle(fn);
  let obj4 = { mode, VoicePanelModes, focused, id, withSpring: id(speaking[39]).withSpring, computeCardBorderRadius: isSelf(speaking[44]), isSelf, defaultBorderRadius: token, SPEAKING_PHYSICS };
  const fn2 = function h() {
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
      if (speaking.get()) {
        num2 = roundToNearestPixelDefault(5);
      }
    }
    if (tmp) {
      str = "animate-never";
    }
    obj4.borderWidth = spring.withSpring(num2, SPEAKING_PHYSICS, str);
    return obj4;
  };
  const obj5 = id(speaking[14]);
  fn2.__closure = { mode, VoicePanelModes, focused, id, withSpring: id(speaking[39]).withSpring, computeCardBorderRadius: isSelf(speaking[44]), isSelf, defaultBorderRadius: token, SPEAKING_PHYSICS, speaking, roundToNearestPixel: isSelf(speaking[45]), SPEAKING_BORDER_SIZE: 3, SPEAKING_INSET: 2 };
  fn2.__workletHash = 492143708356;
  fn2.__initData = __initData14;
  const animatedStyle1 = obj5.useAnimatedStyle(fn2);
  const obj6 = { mode, VoicePanelModes, focused, id, withSpring: id(speaking[39]).withSpring, computeCardBorderRadius: isSelf(speaking[44]), isSelf, defaultBorderRadius: token, SPEAKING_PHYSICS, speaking, roundToNearestPixel: isSelf(speaking[45]), SPEAKING_BORDER_SIZE: 3, SPEAKING_INSET: 2 };
  const fn3 = function p() {
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
      if (speaking.get()) {
        num2 = 3;
      }
    }
    if (tmp) {
      str = "animate-never";
    }
    obj4.borderWidth = spring.withSpring(num2, SPEAKING_PHYSICS, str);
    return obj4;
  };
  const obj7 = id(speaking[14]);
  fn3.__closure = { mode, VoicePanelModes, focused, id, withSpring: id(speaking[39]).withSpring, computeCardBorderRadius: isSelf(speaking[44]), isSelf, defaultBorderRadius: token, SPEAKING_PHYSICS, speaking, SPEAKING_BORDER_SIZE: 3 };
  fn3.__workletHash = 14974168975148;
  fn3.__initData = __initData15;
  const animatedStyle2 = obj7.useAnimatedStyle(fn3);
  const obj9 = { style: null, layout, pointerEvents: "none", children: null };
  const items = [tmp2.speakingIndicatorWrapper, animatedStyle];
  obj9.style = items;
  const obj8 = { mode, VoicePanelModes, focused, id, withSpring: id(speaking[39]).withSpring, computeCardBorderRadius: isSelf(speaking[44]), isSelf, defaultBorderRadius: token, SPEAKING_PHYSICS, speaking, SPEAKING_BORDER_SIZE: 3 };
  const obj10 = { style: null, layout };
  const items1 = [tmp2.speakingIndicatorUnderlay, animatedStyle1];
  obj10.style = items1;
  const items2 = [closure_20(isSelf(speaking[41]), obj10), ];
  const obj11 = { style: null, layout };
  const items3 = [tmp2.speakingIndicatorBar, { borderColor: avatarSpeakingColor }, animatedStyle2];
  obj11.style = items3;
  items2[1] = closure_20(isSelf(speaking[41]), obj11);
  obj9.children = items2;
  return closure_22(isSelf(speaking[41]), obj9);
});
ReactCompilerGating = fn(558);
let closure_50 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function LazySpeakingIndicator(id) {
  _require = id;
  const cResult = require("c").c(9);
  if (cResult[0] !== id.id) {
    const fn = function o() {
      return SpeakingStore.isSpeaking(id.id);
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
      tmp9 = closure_20(closure_49, obj3);
    }
    cResult[6] = id;
    cResult[7] = first;
    cResult[8] = tmp9;
    tmp8 = tmp9;
  }
  const fn2 = function u() {
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
    }
  };
  const items = [first, id];
  cResult[2] = id;
  cResult[3] = first;
  cResult[4] = fn2;
  cResult[5] = items;
  tmp6 = items;
  tmp5 = fn2;
  obj = require("c");
}) : (function LazySpeakingIndicator(id) {
  const tmp = id(noop.useState(() => SpeakingStore.isSpeaking(id.id)), 2);
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
    }
  }, items);
  let tmp4 = null;
  if (first) {
    obj = {};
    const merged = Object.assign(id);
    tmp4 = closure_20(closure_49, obj);
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
let closure_59 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSharedTransitionState(id) {
  const cResult = id(transitionState[21]).c(6);
  id = id.id;
  ({ participant: importDefault, transitionState } = id);
  const cleanUp = id.cleanUp;
  const mode = id.mode;
  const focused = id.focused;
  const isScrollVisible = id.isScrollVisible;
  const sharedVisible = id.sharedVisible;
  obj = id(transitionState[21]);
  const sharedValue = id(transitionState[14]).useSharedValue(transitionState);
  const obj2 = id(transitionState[14]);
  const obj3 = mode;
  [tmp4, closure_9] = cleanUp(mode.useState(true), 2);
  function handleFocusedParticipantChange(arg0) {
    type = undefined;
    if (type != null) {
      type = type.type;
    }
    if (type === ParticipantTypes.ACTIVITY) {
      constants(arg0 !== id);
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
  const obj4 = id(transitionState[14]);
  fn2.__closure = { runOnJS: id(transitionState[14]).runOnJS, handleFocusedParticipantChange };
  fn2.__workletHash = 17532866120556;
  fn2.__initData = __initData17;
  const animatedReaction = obj4.useAnimatedReaction(fn, fn2);
  const obj5 = { runOnJS: id(transitionState[14]).runOnJS, handleFocusedParticipantChange };
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
  const obj6 = id(transitionState[14]);
  fn4.__closure = { cheapWorkletShallowEqual: id(transitionState[46]).cheapWorkletShallowEqual, VoicePanelModes: handleFocusedParticipantChange, TransitionStates: id(transitionState[47]).TransitionStates, sharedVisible, isScrollVisible, runOnJS: id(transitionState[14]).runOnJS, cleanUp, id };
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
  const fn5 = function h() {
    const result = sharedValue.set(transitionState);
  };
  cResult[0] = sharedValue;
  cResult[1] = transitionState;
  cResult[2] = fn5;
  tmp7 = fn5;
}) : (function useSharedTransitionState(id) {
  id = id.id;
  const participant = id.participant;
  const transitionState = id.transitionState;
  const cleanUp = id.cleanUp;
  const mode = id.mode;
  const focused = id.focused;
  const isScrollVisible = id.isScrollVisible;
  const sharedVisible = id.sharedVisible;
  VoicePanelModes = undefined;
  const sharedTransitionState = id(transitionState[14]).useSharedValue(transitionState);
  const cardGestureEnabled = cleanUp(mode.useState(true), 2);
  closure_9 = cardGestureEnabled[1];
  let type;
  if (participant != null) {
    type = participant.type;
  }
  const items = [type, id];
  VoicePanelModes = mode.useCallback((arg0) => {
    let type;
    if (participant != null) {
      type = participant.type;
    }
    if (type === ParticipantTypes.ACTIVITY) {
      closure_9(arg0 !== id);
    }
  }, items);
  obj = id(transitionState[14]);
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
  let tmpResult = id(transitionState[14]);
  fn.__closure = { runOnJS: id(transitionState[14]).runOnJS, handleFocusedParticipantChange: VoicePanelModes };
  fn.__workletHash = 9126813650947;
  fn.__initData = __initData21;
  const animatedReaction = tmpResult.useAnimatedReaction(P, fn);
  const obj3 = { runOnJS: id(transitionState[14]).runOnJS, handleFocusedParticipantChange: VoicePanelModes };
  const fn2 = function v() {
    return { mode: mode.get(), focused: focused.get(), transitionState: sharedTransitionState.get() };
  };
  fn2.__closure = { mode, focused, sharedTransitionState };
  fn2.__workletHash = 653803491766;
  fn2.__initData = __initData22;
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
          tmpResult = tmp(tmp2[14]);
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
  const tmpResult2 = id(transitionState[14]);
  I.__closure = { cheapWorkletShallowEqual: id(transitionState[46]).cheapWorkletShallowEqual, VoicePanelModes, TransitionStates: id(transitionState[47]).TransitionStates, sharedVisible, isScrollVisible, runOnJS: id(transitionState[14]).runOnJS, cleanUp, id };
  I.__workletHash = 751243994154;
  I.__initData = __initData23;
  const animatedReaction1 = tmpResult2.useAnimatedReaction(fn2, I);
  const layoutEffect = obj2.useLayoutEffect(() => {
    const result = sharedTransitionState.set(transitionState);
  });
  return { sharedTransitionState, cardGestureEnabled: cardGestureEnabled[0] };
});
let closure_60 = { isSelf: false, hasVideo: false, user: { id: "create" } };
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
let obj4 = { position: "relative", borderRadius: nativeDefault.radii.round, overflow: "hidden" };
let obj8 = {};
layoutTransitionFunction.__closure = { withSpring: fn(5374).withSpring };
layoutTransitionFunction.__workletHash = 14607823135698;
layoutTransitionFunction.__initData = { code: "function layoutTransitionFunction_VoicePanelCardTsx25(values,physics,scale,lastScale,disableAnimation=false){const{withSpring}=this.__closure;const scaleAdjustment=scale.get()/lastScale.get();const shouldAnimate=!disableAnimation?'respect-motion-settings':'animate-never';return{animations:{originX:withSpring(values.targetOriginX,physics,shouldAnimate),originY:withSpring(values.targetOriginY,physics,shouldAnimate),width:withSpring(values.targetWidth,physics,shouldAnimate),height:withSpring(values.targetHeight,physics,shouldAnimate)},initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth*scaleAdjustment,height:values.currentHeight*scaleAdjustment},callback:function(){lastScale.set(scale.get());}};}" };
const __initData24 = { code: "function VoicePanelCardTsx26(){const{id,pipState,mode,VoicePanelModes}=this.__closure;if(id===pipState.id&&mode.get()===VoicePanelModes.PIP){return true;}return false;}" };
const __initData25 = { code: "function VoicePanelCardTsx27(){const{focused,id,mode,VoicePanelModes,scrollPosition}=this.__closure;var _focused$get;return((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id||mode.get()===VoicePanelModes.PIP?scrollPosition.get():0;}" };
const __initData26 = { code: "function VoicePanelCardTsx28(){const{connected,EDGE_GUTTER,safeArea,windowDimensions,contentDimensions,wrapperDimensions}=this.__closure;return connected.get()?Math.max(EDGE_GUTTER,safeArea.get().left,(windowDimensions.get().width-contentDimensions.get().width)/2):wrapperDimensions.get().drawerWidth/2;}" };
const __initData27 = { code: "function VoicePanelCardTsx29(){const{coords,focused,id,isPIP,pipState,getScaledPIPContainerHeight,getClampedPIPPosition,wrapperDimensions,windowDimensions,safeArea,pipAvoidanceSpecs,derivedScrollValue,xOffset,calculateContentCenterOffset,contentDimensions,sharedTransitionState,TransitionStates,zIndexOverride,computeCardBorderRadius,mode,isSelf,defaultBorderRadius,sharedVisible,isRTCConnected,CONNECTING_OPACITY,wrapperOffset,withDelay,withTiming,ZINDEX_TIMING,OPACITY_TIMING,isScrollVisible,runOnJS,cleanUp,withSpring,layoutPhysics,CARD_SCALE_PHYSICS,SCALE_PHYSICS}=this.__closure;var _focused$get,_focused$get2,_focused$get3,_focused$get4;let{zIndex:zIndex,width:width,height:height,x:x,y:y}=coords.get();const isFocused=((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;if(isPIP){const pipScale=pipState.scale.get();width=pipState.width*pipScale;height=pipState.height*pipScale;const pipHeight=getScaledPIPContainerHeight({height:pipState.height,containerHeight:pipState.containerHeight,showSecondaryPIP:pipState.showSecondaryPIP,scale:pipScale});const pipPosition=getClampedPIPPosition({pipX:wrapperDimensions.get().pipX,pipY:wrapperDimensions.get().pipY,width:width,height:pipHeight,windowDimensions:windowDimensions.get(),safeArea:safeArea.get(),bottomAvoidanceRegion:pipAvoidanceSpecs.get().bottom,topAvoidanceRegion:pipAvoidanceSpecs.get().top});x=pipPosition.x;y=derivedScrollValue.get()+pipPosition.y;}else{if(focused.get()!=null){if(isFocused){zIndex=1;width=windowDimensions.get().width;height=windowDimensions.get().height;x=0;y=derivedScrollValue.get();}else{zIndex=0;}}else{x=x+xOffset.get();y=y+calculateContentCenterOffset({contentHeight:contentDimensions.get().height,windowHeight:windowDimensions.get().height,safeArea:safeArea.get()});if(sharedTransitionState.get()===TransitionStates.YEETED){y=y+height/4;}}}if(zIndexOverride.get()){zIndex=9001;}const borderRadius=computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius});const opacity=sharedVisible.get()===0&&((_focused$get3=focused.get())===null||_focused$get3===void 0?void 0:_focused$get3.id)!==id?0:!isFocused&&!isRTCConnected?CONNECTING_OPACITY:1;const gestureActive=wrapperOffset.get().gestureActive;const scaleTarget=sharedVisible.get()===1||((_focused$get4=focused.get())===null||_focused$get4===void 0?void 0:_focused$get4.id)===id?1:0.8;return{zIndex:withDelay(zIndexOverride.get()?0:100,withTiming(zIndex,ZINDEX_TIMING)),opacity:withTiming(opacity,OPACITY_TIMING,isScrollVisible.get()?\"animate-always\":\"animate-never\",function(finished){if(finished&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){runOnJS(cleanUp)();}}),width:width,height:height,transform:[{translateX:gestureActive?x:withSpring(x,layoutPhysics,\"respect-motion-settings\")},{translateY:gestureActive?y:withSpring(y,layoutPhysics,\"respect-motion-settings\")},{scale:withSpring(scaleTarget,CARD_SCALE_PHYSICS)}],borderRadius:withSpring(borderRadius,SCALE_PHYSICS)};}" };
let closure_66 = { code: "function VoicePanelCardTsx30(finished){const{sharedVisible,sharedTransitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){runOnJS(cleanUp)();}}" };
const __initData28 = { code: "function VoicePanelCardTsx31(finished_0){const{runOnJS,reportPIPArrival}=this.__closure;if(finished_0===true){runOnJS(reportPIPArrival)();}}" };
const __initData29 = { code: "function VoicePanelCardTsx32(values){const{pipState,lastPIPScale,withSpring,layoutPhysics,wrapperOffset}=this.__closure;const scaleAdjustment=pipState.scale.get()/lastPIPScale.get();const initialValues={originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth*scaleAdjustment,height:values.currentHeight*scaleAdjustment};return{animations:{originX:withSpring(values.targetOriginX,layoutPhysics,\"respect-motion-settings\"),originY:withSpring(values.targetOriginY,layoutPhysics,\"respect-motion-settings\"),width:withSpring(values.targetWidth,layoutPhysics,\"respect-motion-settings\"),height:withSpring(values.targetHeight,layoutPhysics,\"respect-motion-settings\")},initialValues:initialValues,callback:function(){const _wrapperOffset=wrapperOffset.get();if(!_wrapperOffset.gestureActive&&_wrapperOffset.y!==0){wrapperOffset.set({gestureActive:false,x:0,y:0});}lastPIPScale.set(pipState.scale.get());}};}" };
const __initData30 = { code: "function VoicePanelCardTsx33(){const{id,pipState,mode,VoicePanelModes}=this.__closure;if(id===pipState.id&&mode.get()===VoicePanelModes.PIP){return true;}return false;}" };
const __initData31 = { code: "function VoicePanelCardTsx34(){const{focused,id,mode,VoicePanelModes,scrollPosition}=this.__closure;var _focused$get;return((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id||mode.get()===VoicePanelModes.PIP?scrollPosition.get():0;}" };
const __initData32 = { code: "function VoicePanelCardTsx35(){const{connected,EDGE_GUTTER,safeArea,windowDimensions,contentDimensions,wrapperDimensions}=this.__closure;return connected.get()?Math.max(EDGE_GUTTER,safeArea.get().left,(windowDimensions.get().width-contentDimensions.get().width)/2):wrapperDimensions.get().drawerWidth/2;}" };
const __initData33 = { code: "function VoicePanelCardTsx36(){const{coords,focused,id,isPIP,pipState,getScaledPIPContainerHeight,getClampedPIPPosition,wrapperDimensions,windowDimensions,safeArea,pipAvoidanceSpecs,derivedScrollValue,xOffset,calculateContentCenterOffset,contentDimensions,sharedTransitionState,TransitionStates,zIndexOverride,computeCardBorderRadius,mode,isSelf,defaultBorderRadius,sharedVisible,isRTCConnected,CONNECTING_OPACITY,wrapperOffset,withDelay,withTiming,ZINDEX_TIMING,OPACITY_TIMING,isScrollVisible,runOnJS,cleanUp,withSpring,layoutPhysics,CARD_SCALE_PHYSICS,SCALE_PHYSICS}=this.__closure;var _focused$get,_focused$get2,_focused$get3,_focused$get4;let{zIndex:zIndex,width:width,height:height,x:x,y:y}=coords.get();const isFocused=((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;if(isPIP){const pipScale=pipState.scale.get();width=pipState.width*pipScale;height=pipState.height*pipScale;const pipHeight=getScaledPIPContainerHeight({height:pipState.height,containerHeight:pipState.containerHeight,showSecondaryPIP:pipState.showSecondaryPIP,scale:pipScale});const pipPosition=getClampedPIPPosition({pipX:wrapperDimensions.get().pipX,pipY:wrapperDimensions.get().pipY,width:width,height:pipHeight,windowDimensions:windowDimensions.get(),safeArea:safeArea.get(),bottomAvoidanceRegion:pipAvoidanceSpecs.get().bottom,topAvoidanceRegion:pipAvoidanceSpecs.get().top});x=pipPosition.x;y=derivedScrollValue.get()+pipPosition.y;}else if(focused.get()!=null){if(isFocused){zIndex=1;width=windowDimensions.get().width;height=windowDimensions.get().height;x=0;y=derivedScrollValue.get();}else{zIndex=0;}}else{x+=xOffset.get();y+=calculateContentCenterOffset({contentHeight:contentDimensions.get().height,windowHeight:windowDimensions.get().height,safeArea:safeArea.get()});if(sharedTransitionState.get()===TransitionStates.YEETED){y+=height/4;}}if(zIndexOverride.get()){zIndex=9001;}const borderRadius=computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius});const opacity=sharedVisible.get()===0&&((_focused$get3=focused.get())===null||_focused$get3===void 0?void 0:_focused$get3.id)!==id?0:!isFocused&&!isRTCConnected?CONNECTING_OPACITY:1;const gestureActive=wrapperOffset.get().gestureActive;const scaleTarget=sharedVisible.get()===1||((_focused$get4=focused.get())===null||_focused$get4===void 0?void 0:_focused$get4.id)===id?1:0.8;return{zIndex:withDelay(zIndexOverride.get()?0:100,withTiming(zIndex,ZINDEX_TIMING)),opacity:withTiming(opacity,OPACITY_TIMING,isScrollVisible.get()?'animate-always':'animate-never',function(finished){if(finished&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){runOnJS(cleanUp)();}}),width:width,height:height,transform:[{translateX:gestureActive?x:withSpring(x,layoutPhysics,'respect-motion-settings')},{translateY:gestureActive?y:withSpring(y,layoutPhysics,'respect-motion-settings')},{scale:withSpring(scaleTarget,CARD_SCALE_PHYSICS)}],borderRadius:withSpring(borderRadius,SCALE_PHYSICS)};}" };
const __initData34 = { code: "function VoicePanelCardTsx37(finished){const{sharedVisible,sharedTransitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){runOnJS(cleanUp)();}}" };
let closure_74 = { code: "function VoicePanelCardTsx38(finished_0){const{runOnJS,reportPIPArrival}=this.__closure;if(finished_0===true){runOnJS(reportPIPArrival)();}}" };
const __initData35 = { code: "function VoicePanelCardTsx39(values){const{pipState,lastPIPScale,withSpring,layoutPhysics,wrapperOffset}=this.__closure;const scaleAdjustment=pipState.scale.get()/lastPIPScale.get();const initialValues={originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth*scaleAdjustment,height:values.currentHeight*scaleAdjustment};return{animations:{originX:withSpring(values.targetOriginX,layoutPhysics,'respect-motion-settings'),originY:withSpring(values.targetOriginY,layoutPhysics,'respect-motion-settings'),width:withSpring(values.targetWidth,layoutPhysics,'respect-motion-settings'),height:withSpring(values.targetHeight,layoutPhysics,'respect-motion-settings')},initialValues:initialValues,callback:function(){const _wrapperOffset=wrapperOffset.get();if(!_wrapperOffset.gestureActive&&_wrapperOffset.y!==0){wrapperOffset.set({gestureActive:false,x:0,y:0});}lastPIPScale.set(pipState.scale.get());}};}" };
ReactCompilerGating = fn(558);
let closure_76 = ReactCompilerGating.isReactCompilerEnabled() ? (function AnimatedWrapper(coords) {
  const cResult = cleanUp(id[21]).c(64);
  ({ children, cleanUp } = coords);
  coords = coords.coords;
  id = coords.id;
  const isRTCConnected = coords.isRTCConnected;
  const isScrollVisible = coords.isScrollVisible;
  const layoutPhysics = coords.layoutPhysics;
  ({ transitionState, sharedVisible } = coords);
  const analyticsLocations = coords(id[48])().analyticsLocations;
  derivedValue2();
  const context = isScrollVisible.useContext(coords(id[27]));
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
  obj = cleanUp(id[21]);
  const pIPState = cleanUp(id[49]).usePIPState();
  const tmp8 = coords(id[50])(id, channelId, context.guildId);
  if (cResult[0] !== tmp8) {
    let tmp10 = tmp8;
    if (!tmpResult.isStableParticipantWithUser(tmp8)) {
      tmp10 = closure_60;
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
  ee.__closure = { id, pipState: pIPState, mode, VoicePanelModes: contentDimensions };
  ee.__workletHash = 13055769514275;
  ee.__initData = __initData24;
  const derivedValue = cleanUp(id[14]).useDerivedValue(ee);
  let obj4 = { id, pipState: pIPState, mode, VoicePanelModes: contentDimensions };
  const tmpResult9 = cleanUp(id[14]);
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
  te.__closure = { focused, id, mode, VoicePanelModes: contentDimensions, scrollPosition };
  te.__workletHash = 17164022773012;
  te.__initData = __initData25;
  const derivedValue1 = cleanUp(id[14]).useDerivedValue(te);
  const tmpResult10 = cleanUp(id[14]);
  function ie() {
    if (connected.get()) {
      const _Math = Math;
      let bound = Math.max(EDGE_GUTTER, safeArea.get().left, (windowDimensions.get().width - contentDimensions.get().width) / 2);
    } else {
      bound = wrapperDimensions.get().drawerWidth / 2;
    }
    return bound;
  }
  ie.__closure = { connected, EDGE_GUTTER: safeArea, safeArea, windowDimensions, contentDimensions, wrapperDimensions };
  ie.__workletHash = 4094014471347;
  ie.__initData = __initData26;
  derivedValue2 = cleanUp(id[14]).useDerivedValue(ie);
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
                  const tmp16 = closure_59(tmp14);
                  const sharedTransitionState = tmp16.sharedTransitionState;
                  closure_31 = tmp18;
                  const token = cleanUp(tmp2[42]).useToken(tmp4(tmp2[19]).modules.mobile.VOICE_TILE_BORDER_RADIUS);
                  const tmpResult12 = cleanUp(tmp2[42]);
                  function ce() {
                    value = coords.get();
                    ({ zIndex, width, height, x, y } = value);
                    const value7 = focused.get();
                    id = undefined;
                    if (value7 != null) {
                      id = value7.id;
                    }
                    if (closure_31) {
                      const scale = pIPState.scale;
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
                          num5 = c28;
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
                    size1.zIndex = obj9.withDelay(num7, timing.withTiming(num2, closure_27));
                    let str = "animate-never";
                    if (isScrollVisible.get()) {
                      str = "animate-always";
                    }
                    class E {
                      constructor(arg0) {
                        tmp = arg0;
                        if (arg0) {
                          tmp2 = closure_1_6;
                          num = 0;
                          tmp = 0 === closure_1_6.get();
                        }
                        if (tmp) {
                          tmp3 = closure_1_30;
                          tmp5 = cleanUp;
                          tmp6 = id;
                          value = closure_1_30.get();
                          tmp = value === cleanUp(id[47]).TransitionStates.YEETED;
                        }
                        if (tmp) {
                          tmp7 = cleanUp;
                          tmp8 = id;
                          obj = cleanUp(id[14]);
                          tmp9 = closure_1_0;
                          tmp10 = obj.runOnJS(closure_1_0)();
                        }
                        return;
                      }
                    }
                    const obj12 = timing;
                    E.__closure = { sharedVisible, sharedTransitionState, TransitionStates: native.TransitionStates, runOnJS: ReanimatedRexport2.runOnJS, cleanUp };
                    E.__workletHash = 13155030685943;
                    E.__initData = __initData;
                    size1.opacity = obj12.withTiming(num3, closure_26, str, E);
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
                  let obj6 = { coords, focused, id, isPIP: pIPState.mode === pipAvoidanceSpecs.IN_APP, pipState: pIPState, getScaledPIPContainerHeight: cleanUp(tmp2[51]).getScaledPIPContainerHeight, getClampedPIPPosition: cleanUp(tmp2[51]).getClampedPIPPosition, wrapperDimensions, windowDimensions, safeArea, pipAvoidanceSpecs, derivedScrollValue: derivedValue1, xOffset: derivedValue2, calculateContentCenterOffset: tmp4(tmp2[52]), contentDimensions, sharedTransitionState, TransitionStates: cleanUp(tmp2[47]).TransitionStates, zIndexOverride: derivedValue, computeCardBorderRadius: tmp4(tmp2[44]), mode, isSelf, defaultBorderRadius: token, sharedVisible, isRTCConnected, CONNECTING_OPACITY: derivedValue1, wrapperOffset, withDelay: cleanUp(tmp2[14]).withDelay, withTiming: cleanUp(tmp2[38]).withTiming, ZINDEX_TIMING: derivedValue, OPACITY_TIMING: id2, isScrollVisible, runOnJS: cleanUp(tmp2[14]).runOnJS, cleanUp, withSpring: cleanUp(tmp2[39]).withSpring, layoutPhysics, CARD_SCALE_PHYSICS: isSelf, SCALE_PHYSICS: showControls };
                  ce.__closure = obj6;
                  ce.__workletHash = 7444094303589;
                  ce.__initData = __initData27;
                  const animatedStyle = cleanUp(tmp2[14]).useAnimatedStyle(ce);
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
                                              const sharedValue = cleanUp(tmp2[14]).useSharedValue(0);
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
                                                                cleanUp(id[14]).runOnJS(reportPIPArrival)();
                                                                obj = cleanUp(id[14]);
                                                              }
                                                            };
                                                            obj1 = { runOnJS: null, reportPIPArrival: null };
                                                            obj1.runOnJS = closure_0(closure_2[14]).runOnJS;
                                                            tmp6 = closure_34;
                                                            obj1.reportPIPArrival = closure_34;
                                                            fn.__closure = obj1;
                                                            num2 = 10819702965315;
                                                            fn.__workletHash = 10819702965315;
                                                            tmp7 = closure_67;
                                                            fn.__initData = closure_67;
                                                            str = "animate-always";
                                                            num3 = 1;
                                                            tmp8 = obj;
                                                            tmp9 = fn;
                                                            result1 = closure_33.set(obj.withSpring(1, layoutPhysics, "animate-always", fn));
                                                            return () => cleanUp(id[14]).cancelAnimation(sharedValue);
                                                          } else {
                                                            return;
                                                          }
                                                        }
                                                      }
                                                      const sharedValue1 = cleanUp(tmp2[14]).useSharedValue(obj17.get());
                                                      class Ne {
                                                        constructor() {
                                                          return pipHandoff.setCardArrivedInPIP(id);
                                                        }
                                                      }
                                                      class Be {
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
                                                      Be.__closure = obj7;
                                                      Be.__workletHash = 1978895565164;
                                                      Be.__initData = __initData29;
                                                      cResult[49] = sharedValue1;
                                                      cResult[50] = layoutPhysics;
                                                      cResult[51] = pIPState.scale;
                                                      cResult[52] = wrapperOffset;
                                                      cResult[53] = Be;
                                                      const tmpResult15 = cleanUp(tmp2[14]);
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
                                                          cleanUp(id[14]).runOnJS(reportPIPArrival)();
                                                          obj = cleanUp(id[14]);
                                                        }
                                                      };
                                                      obj1 = { runOnJS: null, reportPIPArrival: null };
                                                      obj1.runOnJS = closure_0(closure_2[14]).runOnJS;
                                                      tmp6 = closure_34;
                                                      obj1.reportPIPArrival = closure_34;
                                                      fn.__closure = obj1;
                                                      num2 = 10819702965315;
                                                      fn.__workletHash = 10819702965315;
                                                      tmp7 = closure_67;
                                                      fn.__initData = closure_67;
                                                      str = "animate-always";
                                                      num3 = 1;
                                                      tmp8 = obj;
                                                      tmp9 = fn;
                                                      result1 = closure_33.set(obj.withSpring(1, layoutPhysics, "animate-always", fn));
                                                      return () => cleanUp(id[14]).cancelAnimation(sharedValue);
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
                                              const tmpResult14 = cleanUp(tmp2[14]);
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
                                        class Re {
                                          constructor() {
                                            syncCardPIPLayoutResult = pipHandoff.syncCardPIPLayout(id, closure_31);
                                            return;
                                          }
                                        }
                                        const items2 = [pipHandoff, id, ];
                                        cResult[31] = id;
                                        cResult[32] = tmp18;
                                        cResult[33] = pipHandoff;
                                        cResult[34] = Re;
                                        cResult[35] = items2;
                                        tmp36 = items2;
                                        tmp35 = Re;
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
                  const tmpResult13 = cleanUp(tmp2[14]);
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
  let obj5 = { connected, EDGE_GUTTER: safeArea, safeArea, windowDimensions, contentDimensions, wrapperDimensions };
  const tmpResult11 = cleanUp(id[14]);
}) : (function AnimatedWrapper(cleanUp) {
  cleanUp = cleanUp.cleanUp;
  const coords = cleanUp.coords;
  let id = cleanUp.id;
  const isRTCConnected = cleanUp.isRTCConnected;
  const isScrollVisible = cleanUp.isScrollVisible;
  const layoutPhysics = cleanUp.layoutPhysics;
  const sharedVisible = cleanUp.sharedVisible;
  c11 = undefined;
  focused = undefined;
  c13 = undefined;
  mode = undefined;
  c18 = undefined;
  SCALE_PHYSICS = undefined;
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
  const context = isScrollVisible.useContext(coords(id[27]));
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
  const tmp3 = derivedValue2();
  const pIPState = cleanUp(id[49]).usePIPState();
  const tmp7 = coords(id[50])(id, channelId, guildId);
  let obj2 = cleanUp(id[49]);
  let tmp8 = tmp7;
  if (!obj3.isStableParticipantWithUser(tmp7)) {
    tmp8 = closure_60;
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
  fn.__closure = { id, pipState: pIPState, mode, VoicePanelModes: contentDimensions };
  fn.__workletHash = 14658609388807;
  fn.__initData = __initData30;
  derivedValue = cleanUp(id[14]).useDerivedValue(fn);
  let obj4 = { id, pipState: pIPState, mode, VoicePanelModes: contentDimensions };
  const tmp5Result = cleanUp(id[14]);
  const fn2 = function w() {
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
  };
  fn2.__closure = { focused, id, mode, VoicePanelModes: contentDimensions, scrollPosition };
  fn2.__workletHash = 1094240470006;
  fn2.__initData = __initData31;
  derivedValue1 = cleanUp(id[14]).useDerivedValue(fn2);
  const tmp5Result9 = cleanUp(id[14]);
  class C {
    constructor() {
      if (connected.get()) {
        tmp3 = globalThis;
        _Math = Math;
        tmp4 = EDGE_GUTTER;
        tmp5 = safeArea;
        tmp6 = windowDimensions;
        tmp7 = contentDimensions;
        num2 = 2;
        bound = Math.max(EDGE_GUTTER, safeArea.get().left, (windowDimensions.get().width - contentDimensions.get().width) / 2);
      } else {
        tmp = wrapperDimensions;
        num = 2;
        bound = wrapperDimensions.get().drawerWidth / 2;
      }
      return bound;
    }
  }
  C.__closure = { connected, EDGE_GUTTER: safeArea, safeArea, windowDimensions, contentDimensions, wrapperDimensions };
  C.__workletHash = 12954455503263;
  C.__initData = __initData32;
  derivedValue2 = cleanUp(id[14]).useDerivedValue(C);
  const tmp12 = closure_59({ id, participant: tmp7, transitionState, cleanUp, mountedCards, mode, focused, isScrollVisible, sharedVisible });
  sharedTransitionState = tmp12.sharedTransitionState;
  closure_31 = tmp13;
  let obj5 = { connected, EDGE_GUTTER: safeArea, safeArea, windowDimensions, contentDimensions, wrapperDimensions };
  const tmp5Result10 = cleanUp(id[14]);
  token = cleanUp(id[42]).useToken(tmp(tmp2[19]).modules.mobile.VOICE_TILE_BORDER_RADIUS);
  const tmp5Result11 = cleanUp(id[42]);
  class E {
    constructor() {
      value = coords.get();
      ({ zIndex, width, height, x, y } = value);
      obj = focused;
      value1 = focused.get();
      id = undefined;
      if (value1 != null) {
        id = value1.id;
      }
      tmp4 = id;
      tmp5 = id === id;
      if (closure_31) {
        tmp9 = closure_24;
        scale = closure_24.scale;
        value2 = scale.get();
        result = closure_24.width * value2;
        height2 = closure_24.height * value2;
        tmp12 = closure_0;
        tmp13 = closure_2;
        obj2 = closure_0(closure_2[51]);
        obj1 = { height: null, containerHeight: null, showSecondaryPIP: null, scale: null };
        ({ height: obj3.height, containerHeight: obj3.containerHeight, showSecondaryPIP: obj3.showSecondaryPIP } = closure_24);
        obj1.scale = value2;
        tmp15 = closure_0;
        tmp16 = closure_2;
        scaledPIPContainerHeight = obj2.getScaledPIPContainerHeight(obj1);
        obj4 = closure_0(closure_2[51]);
        size = { pipX: null, pipY: null, width: null, height: null, windowDimensions: null, safeArea: null, bottomAvoidanceRegion: null, topAvoidanceRegion: null };
        tmp17 = wrapperDimensions;
        size.pipX = wrapperDimensions.get().pipX;
        size.pipY = wrapperDimensions.get().pipY;
        size.width = result;
        size.height = scaledPIPContainerHeight;
        tmp18 = windowDimensions;
        size.windowDimensions = windowDimensions.get();
        tmp19 = safeArea;
        size.safeArea = safeArea.get();
        tmp20 = pipAvoidanceSpecs;
        size.bottomAvoidanceRegion = pipAvoidanceSpecs.get().bottom;
        size.topAvoidanceRegion = pipAvoidanceSpecs.get().top;
        point = obj4.getClampedPIPPosition(size);
        num = point.x;
        tmp21 = closure_28;
        sum = closure_28.get() + point.y;
        width2 = result;
        num2 = zIndex;
      } else if (null != obj.get()) {
        sum = y;
        num = x;
        height2 = height;
        width2 = width;
        num2 = 0;
        if (tmp5) {
          tmp7 = windowDimensions;
          width2 = windowDimensions.get().width;
          height2 = windowDimensions.get().height;
          tmp8 = closure_28;
          sum = closure_28.get();
          num2 = 1;
          num = 0;
        }
      } else {
        tmp40 = closure_29;
        sum1 = x + closure_29.get();
        tmp42 = closure_1;
        tmp43 = closure_2;
        obj20 = { contentHeight: null, windowHeight: null, safeArea: null };
        tmp45 = contentDimensions;
        tmp44 = closure_1(closure_2[52]);
        obj20.contentHeight = contentDimensions.get().height;
        tmp46 = windowDimensions;
        obj20.windowHeight = windowDimensions.get().height;
        tmp47 = safeArea;
        obj20.safeArea = safeArea.get();
        sum2 = y + tmp44(obj20);
        tmp49 = sharedTransitionState;
        tmp51 = closure_0;
        tmp52 = closure_2;
        value3 = sharedTransitionState.get();
        sum = sum2;
        num = sum1;
        height2 = height;
        width2 = width;
        num2 = zIndex;
        if (value3 === closure_0(closure_2[47]).TransitionStates.YEETED) {
          num8 = 4;
          sum = sum2 + height / 4;
          num = sum1;
          height2 = height;
          width2 = width;
          num2 = zIndex;
        }
      }
      obj6 = closure_27;
      if (closure_27.get()) {
        num2 = 9001;
      }
      obj21 = { id: tmp4, mode: null, focused: null, isSelf: null, defaultBorderRadius: null };
      tmp22 = closure_1(closure_2[44]);
      obj21.mode = mode.get();
      value4 = obj.get();
      id1 = undefined;
      if (value4 != null) {
        id1 = value4.id;
      }
      obj21.focused = id1;
      obj21.isSelf = isSelf;
      obj21.defaultBorderRadius = closure_32;
      obj8 = sharedVisible;
      tmp22Result = tmp22(obj21);
      if (0 !== sharedVisible.get()) {
        num4 = 1;
        num5 = 1;
        if (!tmp5) {
          tmp28 = isRTCConnected;
          num5 = 1;
          if (!isRTCConnected) {
            num5 = c28;
          }
        }
        num3 = num5;
      } else {
        value5 = obj.get();
        id2 = undefined;
        if (value5 != null) {
          id2 = value5.id;
        }
        num3 = 0;
      }
      gestureActive = wrapperOffset.get().gestureActive;
      if (1 === obj8.get()) {
        num6 = 1;
      } else {
        value6 = obj.get();
        id3 = undefined;
        if (value6 != null) {
          id3 = value6.id;
        }
        num6 = 0.8;
      }
      obj9 = closure_0(closure_2[14]);
      num7 = 100;
      if (obj6.get()) {
        num7 = 0;
      }
      size1 = { zIndex: null, opacity: null, width: null, height: null, transform: null, borderRadius: null };
      obj11 = closure_0(closure_2[38]);
      size1.zIndex = obj9.withDelay(num7, obj11.withTiming(num2, closure_27));
      obj12 = closure_0(closure_2[38]);
      tmp31 = closure_26;
      str = "animate-never";
      if (isScrollVisible.get()) {
        str = "animate-always";
      }
      class E {
        constructor(arg0) {
          tmp = cleanUp;
          if (cleanUp) {
            tmp2 = closure_1_6;
            num = 0;
            tmp = 0 === closure_1_6.get();
          }
          if (tmp) {
            tmp3 = closure_1_30;
            tmp5 = cleanUp;
            tmp6 = id;
            value = closure_1_30.get();
            tmp = value === cleanUp(id[47]).TransitionStates.YEETED;
          }
          if (tmp) {
            tmp7 = cleanUp;
            tmp8 = id;
            obj = cleanUp(id[14]);
            tmp9 = closure_1_0;
            tmp10 = obj.runOnJS(closure_1_0)();
          }
          return;
        }
      }
      obj22 = { sharedVisible: obj8, sharedTransitionState, TransitionStates: closure_0(closure_2[47]).TransitionStates, runOnJS: closure_0(closure_2[14]).runOnJS, cleanUp };
      E.__closure = obj22;
      E.__workletHash = 1424486009360;
      E.__initData = closure_73;
      size1.opacity = obj12.withTiming(num3, tmp31, str, E);
      size1.width = width2;
      size1.height = height2;
      withSpringResult = num;
      if (!gestureActive) {
        tmp33 = closure_0;
        tmp34 = closure_2;
        obj14 = closure_0(closure_2[39]);
        tmp35 = layoutPhysics;
        str2 = "respect-motion-settings";
        withSpringResult = obj14.withSpring(num, layoutPhysics, "respect-motion-settings");
      }
      items = [, , ];
      items[0] = { translateX: withSpringResult };
      withSpringResult1 = sum;
      if (!gestureActive) {
        tmp37 = closure_0;
        tmp38 = closure_2;
        obj15 = closure_0(closure_2[39]);
        tmp39 = layoutPhysics;
        str3 = "respect-motion-settings";
        withSpringResult1 = obj15.withSpring(sum, layoutPhysics, "respect-motion-settings");
      }
      items[1] = { translateY: withSpringResult1 };
      obj23 = { scale: null };
      obj17 = closure_0(closure_2[39]);
      obj23.scale = obj17.withSpring(num6, closure_25);
      items[2] = obj23;
      size1.transform = items;
      obj18 = closure_0(closure_2[39]);
      size1.borderRadius = obj18.withSpring(tmp22Result, SCALE_PHYSICS);
      return size1;
    }
  }
  const tmp5Result12 = cleanUp(id[14]);
  E.__closure = { coords, focused, id, isPIP: pIPState.mode === pipAvoidanceSpecs.IN_APP, pipState: pIPState, getScaledPIPContainerHeight: cleanUp(id[51]).getScaledPIPContainerHeight, getClampedPIPPosition: cleanUp(id[51]).getClampedPIPPosition, wrapperDimensions, windowDimensions, safeArea, pipAvoidanceSpecs, derivedScrollValue: derivedValue1, xOffset: derivedValue2, calculateContentCenterOffset: coords(id[52]), contentDimensions, sharedTransitionState, TransitionStates: cleanUp(id[47]).TransitionStates, zIndexOverride: derivedValue, computeCardBorderRadius: coords(id[44]), mode, isSelf, defaultBorderRadius: token, sharedVisible, isRTCConnected, CONNECTING_OPACITY: derivedValue1, wrapperOffset, withDelay: cleanUp(id[14]).withDelay, withTiming: cleanUp(id[38]).withTiming, ZINDEX_TIMING: derivedValue, OPACITY_TIMING: id2, isScrollVisible, runOnJS: cleanUp(id[14]).runOnJS, cleanUp, withSpring: cleanUp(id[39]).withSpring, layoutPhysics, CARD_SCALE_PHYSICS: isSelf, SCALE_PHYSICS };
  E.__workletHash = 12967186727989;
  E.__initData = __initData33;
  const animatedStyle = tmp5Result12.useAnimatedStyle(E);
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
  let obj6 = { coords, focused, id, isPIP: pIPState.mode === pipAvoidanceSpecs.IN_APP, pipState: pIPState, getScaledPIPContainerHeight: cleanUp(id[51]).getScaledPIPContainerHeight, getClampedPIPPosition: cleanUp(id[51]).getClampedPIPPosition, wrapperDimensions, windowDimensions, safeArea, pipAvoidanceSpecs, derivedScrollValue: derivedValue1, xOffset: derivedValue2, calculateContentCenterOffset: coords(id[52]), contentDimensions, sharedTransitionState, TransitionStates: cleanUp(id[47]).TransitionStates, zIndexOverride: derivedValue, computeCardBorderRadius: coords(id[44]), mode, isSelf, defaultBorderRadius: token, sharedVisible, isRTCConnected, CONNECTING_OPACITY: derivedValue1, wrapperOffset, withDelay: cleanUp(id[14]).withDelay, withTiming: cleanUp(id[38]).withTiming, ZINDEX_TIMING: derivedValue, OPACITY_TIMING: id2, isScrollVisible, runOnJS: cleanUp(id[14]).runOnJS, cleanUp, withSpring: cleanUp(id[39]).withSpring, layoutPhysics, CARD_SCALE_PHYSICS: isSelf, SCALE_PHYSICS };
  const tmpResult = coords(id[54]);
  if (tmp5Result13.isStableActivityParticipant(tmp7)) {
    const fn3 = () => {
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
    const tmp5Result14 = tmp5(tmp2[50]);
  }
  obj7.onDoubleTap = fn3;
  let fn4;
  if (null != id2) {
    fn4 = () => showUserProfileActionSheetDefault({ userId: id2, channelId, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations });
  }
  obj7.onLongPress = fn4;
  let items = [pipHandoff, id, pIPState.mode === pipAvoidanceSpecs.IN_APP];
  tmp5Result13 = cleanUp(id[50]);
  const layoutEffect = obj.useLayoutEffect(() => {
    pipHandoff.syncCardPIPLayout(id, closure_31);
  }, items);
  const items1 = [pipHandoff, id];
  const effect = obj.useEffect(() => () => pipHandoff.removeCard(id), items1);
  const tmpResultResult = tmpResult(obj7);
  sharedValue = cleanUp(id[14]).useSharedValue(0);
  const items2 = [pipHandoff, id];
  reportPIPArrival = obj.useCallback(() => pipHandoff.setCardArrivedInPIP(id), items2);
  const items3 = [pIPState.mode === pipAvoidanceSpecs.IN_APP, layoutPhysics, sharedValue, reportPIPArrival];
  const effect1 = obj.useEffect(() => {
    if (closure_31) {
      const result = sharedValue.set(0);
      obj = spring;
      const fn = function t(arg0) {
        if (true === arg0) {
          cleanUp(id[14]).runOnJS(reportPIPArrival)();
          obj = cleanUp(id[14]);
        }
      };
      const obj2 = { runOnJS: ReanimatedRexport2.runOnJS, reportPIPArrival };
      fn.__closure = obj2;
      fn.__workletHash = 7717924685354;
      fn.__initData = __initData2;
      const result1 = sharedValue.set(obj.withSpring(1, layoutPhysics, "animate-always", fn));
      return () => cleanUp(id[14]).cancelAnimation(sharedValue);
    }
  }, items3);
  const tmp5Result15 = cleanUp(id[14]);
  let scale = pIPState.scale;
  sharedValue1 = cleanUp(id[14]).useSharedValue(scale.get());
  function me(currentOriginX) {
    let scale = pIPState.scale;
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
  const tmp5Result16 = cleanUp(id[14]);
  me.__closure = { pipState: pIPState, lastPIPScale: sharedValue1, withSpring: cleanUp(id[39]).withSpring, layoutPhysics, wrapperOffset };
  me.__workletHash = 12776532702151;
  me.__initData = __initData35;
  const items4 = [layoutPhysics, wrapperOffset, sharedValue1, pIPState.scale];
  const callback1 = obj.useCallback(me, items4);
  let obj9 = { gesture: tmpResultResult, children: null };
  let obj10 = { style: null, layout: callback1, children };
  const items5 = [tmp3.positionWrapper, animatedStyle];
  obj10.style = items5;
  obj9.children = windowDimensions(coords(id[41]), obj10);
  return windowDimensions(cleanUp(id[55]).GestureDetector, obj9);
});
const __initData36 = { code: "function VoicePanelCardTsx40(){const{EDGE_GUTTER,coords,scrollPosition,windowDimensions}=this.__closure;const yPos=EDGE_GUTTER+coords.get().y;return yPos>scrollPosition.get()-coords.get().height&&yPos<scrollPosition.get()+windowDimensions.get().height;}" };
const __initData37 = { code: "function layoutTransition_VoicePanelCardTsx41(values,t10){const{layoutTransitionFunction,physics,pipState,lastPipScale}=this.__closure;const disableAnimation=t10===undefined?false:t10;return layoutTransitionFunction(values,physics,pipState.scale,lastPipScale,disableAnimation);}" };
const __initData38 = { code: "function VoicePanelCardTsx42(){const{EDGE_GUTTER,coords,scrollPosition,windowDimensions}=this.__closure;const yPos=EDGE_GUTTER+coords.get().y;return yPos>scrollPosition.get()-coords.get().height&&yPos<scrollPosition.get()+windowDimensions.get().height;}" };
let closure_80 = { code: "function layoutTransition_VoicePanelCardTsx43(values,disableAnimation=false){const{layoutTransitionFunction,physics,pipState,lastPipScale}=this.__closure;return layoutTransitionFunction(values,physics,pipState.scale,lastPipScale,disableAnimation);}" };
ReactCompilerGating = fn(558);
let obj9 = { withSpring: fn(5374).withSpring };
size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/card/VoicePanelCard.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function VoicePanelCard(arg0) {
  const cResult = scrollPosition(id2[21]).c(81);
  ({ item, transitionState, cleanUp } = arg0);
  const id = item.id;
  const context = noop.useContext(windowDimensions(id2[27]));
  ({ guildId, isCall, mountedCards, scrollPosition } = context);
  windowDimensions = context.windowDimensions;
  ({ channelId, layoutManager } = context);
  const tmp6 = windowDimensions(id2[50])(id, channelId, guildId);
  if (cResult[0] !== tmp6) {
    let tmp8 = tmp6;
    if (!tmpResult.isStableParticipantWithUser(tmp6)) {
      tmp8 = closure_60;
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
    class N {
      constructor() {
        return closure_7.isConnected();
      }
    }
    cResult[2] = items;
    cResult[3] = N;
    let tmp10 = N;
    let tmp9 = items;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  obj = scrollPosition(id2[21]);
  const obj2 = noop;
  const stateFromStores = scrollPosition(id2[28]).useStateFromStores(tmp9, tmp10);
  if (cResult[4] !== tmp6) {
    const tmp14 = scrollPosition(tmp2[50]).isStableUserParticipant(tmp6) && tmp6.ringing;
    class N {
      constructor() {
        return closure_7.isConnected();
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
  const tmpResult10 = scrollPosition(id2[28]);
  if (tmp6 != null) {
    type1 = tmp6.type;
  }
  if (type1 === ParticipantTypes.STREAM) {
    let DEFAULT = scrollPosition(tmp2[30]).MediaEngineContextTypes.STREAM;
  } else {
    DEFAULT = scrollPosition(tmp2[30]).MediaEngineContextTypes.DEFAULT;
  }
  windowDimensions(id2[29])(DEFAULT, str);
  windowDimensions(id2[56])(str);
  const tmp4Result = windowDimensions(id2[29]);
  if (transitionState === scrollPosition(id2[47]).TransitionStates.MOUNTED) {
    let num7 = 1;
  } else {
    num7 = 0;
  }
  const sharedValue = scrollPosition(id2[14]).useSharedValue(num7);
  const tmpResult12 = scrollPosition(id2[14]);
  let isSpeakingResult = null != id2;
  if (isSpeakingResult) {
    isSpeakingResult = SpeakingStore.isSpeaking(id2);
  }
  const sharedValue1 = scrollPosition(id2[14]).useSharedValue(isSpeakingResult);
  if (cResult[6] === sharedValue1) {
    if (cResult[7] === id2) {
      let tmp24 = cResult[8];
      let tmp25 = cResult[9];
    }
    const layoutEffect = obj2.useLayoutEffect(tmp24, tmp25);
    scrollPosition(tmp2[57]);
    class N {
      constructor() {
        return closure_7.isConnected();
      }
    }
    noop = tmp28;
    const fn = function j() {
      const sum = EDGE_GUTTER + tmp28.get().y;
      value = scrollPosition.get();
      let tmp3 = sum > value - tmp28.get().height;
      if (tmp3) {
        value2 = scrollPosition.get();
        tmp3 = sum < value2 + windowDimensions.get().height;
      }
      return tmp3;
    };
    const obj3 = { EDGE_GUTTER, coords: tmp28, scrollPosition, windowDimensions };
    fn.__closure = obj3;
    fn.__workletHash = 2901522095465;
    fn.__initData = __initData36;
    const derivedValue = scrollPosition(tmp2[14]).useDerivedValue(fn);
    const tmpResult15 = scrollPosition(tmp2[14]);
    const pIPState = scrollPosition(tmp2[49]).usePIPState();
    const tmpResult16 = scrollPosition(tmp2[49]);
    const scale = pIPState.scale;
    const sharedValue2 = scrollPosition(tmp2[14]).useSharedValue(scale.get());
    const _Symbol = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { mass: closure_11.mass, damping: null, stiffness: null };
      class N {
        constructor() {
          return closure_7.isConnected();
        }
      }
      obj4.damping = tmp4(tmp2[58])(closure_11.damping - 2, closure_11.damping + 2);
      obj4.stiffness = tmp4(tmp2[58])(closure_11.stiffness - 20, closure_11.stiffness + 20);
      cResult[10] = obj4;
      let tmp34 = obj4;
    } else {
      tmp34 = cResult[10];
    }
    RTCConnectionStore = tmp34;
    if (cResult[11] === sharedValue2) {
      if (cResult[12] === pIPState.scale) {
        let tmp36 = cResult[13];
      }
      ({ physics, layoutTransition: layoutTransition2 } = tmp36);
      class N {
        constructor() {
          return closure_7.isConnected();
        }
      }
      if (item.type === constants2.CTA) {
        const id5 = item.id;
        if (constants.NO_VIDEO_PARTICIPANTS === id5) {
          const _Symbol3 = Symbol;
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            class N {
              constructor() {
                return closure_7.isConnected();
              }
            }
            const tmp63 = closure_20(tmp4(tmp2[59]), {});
          }
          class N {
            constructor() {
              return closure_7.isConnected();
            }
          }
        } else {
          if (tmp53.CALLER_DISCONNECTED === id5) {
            const _Symbol2 = Symbol;
            if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
              class N {
                constructor() {
                  return closure_7.isConnected();
                }
              }
              const tmp60 = closure_20(tmp4(tmp2[60]), {});
            }
            class N {
              constructor() {
                return closure_7.isConnected();
              }
            }
          }
          if (cResult[58] === tmp13) {
            if (cResult[59] === layoutTransition2) {
              if (cResult[60] === tmp6) {
                if (cResult[61] === sharedValue1) {
                  let tmp64 = cResult[62];
                }
                if (cResult[63] === id) {
                  if (cResult[64] === isSelf) {
                    if (cResult[65] === layoutTransition2) {
                      if (cResult[66] === tmp6) {
                        if (cResult[67] === sharedValue1) {
                          let tmp66 = cResult[68];
                        }
                        if (cResult[69] === tmp39) {
                          if (cResult[70] === cleanUp) {
                            if (cResult[71] === tmp28) {
                              if (cResult[72] === id) {
                                if (cResult[73] === stateFromStores) {
                                  if (cResult[74] === derivedValue) {
                                    if (cResult[75] === physics) {
                                      if (cResult[76] === sharedValue) {
                                        if (cResult[77] === tmp64) {
                                          if (cResult[78] === tmp66) {
                                            if (cResult[79] === transitionState) {
                                              let tmp71 = cResult[80];
                                            }
                                            return tmp71;
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
                        class N {
                          constructor() {
                            return closure_7.isConnected();
                          }
                        }
                        const obj5 = { cleanUp, coords: tmp28, id, isRTCConnected: stateFromStores, isScrollVisible: derivedValue, layoutPhysics: physics, transitionState, sharedVisible: sharedValue, children: null };
                        const items1 = [tmp39, tmp64, tmp66];
                        obj5.children = items1;
                        const tmp73 = closure_22(closure_76, obj5);
                        cResult[69] = tmp39;
                        cResult[70] = cleanUp;
                        cResult[71] = tmp28;
                        cResult[72] = id;
                        cResult[73] = stateFromStores;
                        cResult[74] = derivedValue;
                        cResult[75] = physics;
                        cResult[76] = sharedValue;
                        cResult[77] = tmp64;
                        cResult[78] = tmp66;
                        cResult[79] = transitionState;
                        cResult[80] = tmp73;
                        tmp71 = tmp73;
                      }
                    }
                  }
                }
                scrollPosition(tmp2[50]);
                class N {
                  constructor() {
                    return closure_7.isConnected();
                  }
                }
                if (tmp68) {
                  const obj6 = { speaking: null, id: null, userId: null, isSelf: null, layout: null };
                  class N {
                    constructor() {
                      return closure_7.isConnected();
                    }
                  }
                  obj6.id = id;
                  obj6.userId = tmp6.user.id;
                  obj6.isSelf = isSelf;
                  obj6.layout = layoutTransition2;
                  tmp68 = closure_20(closure_50, obj6);
                }
                cResult[63] = id;
                cResult[64] = isSelf;
                cResult[65] = layoutTransition2;
                cResult[66] = tmp6;
                cResult[67] = sharedValue1;
                cResult[68] = tmp68;
                tmp66 = tmp68;
              }
            }
          }
          class N {
            constructor() {
              return closure_7.isConnected();
            }
          }
          cResult[58] = tmp13;
          cResult[59] = layoutTransition2;
          cResult[60] = tmp6;
          cResult[61] = sharedValue1;
          cResult[62] = null != tmp6;
          tmp64 = tmp65;
        }
      } else if (null != tmp6) {
        const type = tmp6.type;
        if (ParticipantTypes.USER === type) {
          ({ id: id4, streamId, user: user2 } = tmp6);
          class N {
            constructor() {
              return closure_7.isConnected();
            }
          }
          if (cResult[28] === guildId) {
            if (cResult[29] === user2) {
              let tmp47 = cResult[30];
            }
            const userAvatarDecoration = tmp6.userAvatarDecoration;
            class N {
              constructor() {
                return closure_7.isConnected();
              }
            }
            const obj7 = { isRinging: tmp13, avatarURI: tmp47, avatarDecoration: userAvatarDecoration, layout: layoutTransition2, layoutPhysics: physics, userId: user2.id, guildId };
            const tmp52 = closure_20(closure_42, obj7);
            cResult[31] = guildId;
            cResult[32] = tmp13;
            cResult[33] = layoutTransition2;
            cResult[34] = physics;
            cResult[35] = tmp47;
            cResult[36] = userAvatarDecoration;
            cResult[37] = user2.id;
            cResult[38] = tmp52;
          }
          const avatarURL = user2.getAvatarURL(guildId, 80, false);
          cResult[28] = guildId;
          cResult[29] = user2;
          cResult[30] = avatarURL;
          tmp47 = avatarURL;
        } else if (ParticipantTypes.STREAM === type) {
          ({ user, id: id3, streamGuildId } = tmp6);
          class N {
            constructor() {
              return closure_7.isConnected();
            }
          }
          const userNick = tmp6.userNick;
          if (cResult[39] === tmp28) {
            if (cResult[40] === id3) {
              if (cResult[41] === derivedValue) {
                if (cResult[42] === isSelf) {
                  if (cResult[43] === layoutTransition2) {
                    if (cResult[44] === streamGuildId) {
                      if (cResult[45] === tmp42) {
                        if (cResult[46] === user.id) {
                          if (cResult[47] === userNick) {
                            let tmp43 = cResult[48];
                          }
                          tmp39 = tmp43;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          const obj8 = { userId: user.id, id: id3, streamGuildId, streamId: tmp42, userNick, isSelf, sharedCoords: tmp28, isScrollVisible: derivedValue, layout: layoutTransition2 };
          const tmp46 = closure_20(closure_37, obj8);
          cResult[39] = tmp28;
          cResult[40] = id3;
          cResult[41] = derivedValue;
          cResult[42] = isSelf;
          cResult[43] = layoutTransition2;
          cResult[44] = streamGuildId;
          cResult[45] = tmp42;
          cResult[46] = user.id;
          cResult[47] = userNick;
          cResult[48] = tmp46;
          tmp43 = tmp46;
        } else if (ParticipantTypes.ACTIVITY === type) {
          if (cResult[49] === layoutTransition2) {
            if (cResult[50] === tmp6.applicationId) {
              if (cResult[51] === tmp6.id) {
                if (cResult[52] === sharedValue) {
                  tmp39 = cResult[53];
                }
              }
            }
          }
          const obj9 = { sharedVisible: null, applicationId: null, layout: null };
          class N {
            constructor() {
              return closure_7.isConnected();
            }
          }
          obj9.applicationId = tmp6.applicationId;
          obj9.layout = layoutTransition2;
          const tmp41 = closure_20(tmp4(tmp2[62]), obj9, tmp6.id);
          cResult[49] = layoutTransition2;
          cResult[50] = tmp6.applicationId;
          cResult[51] = tmp6.id;
          cResult[52] = sharedValue;
          cResult[53] = tmp41;
          tmp39 = tmp41;
        }
      }
      if (cResult[54] === tmp13) {
        if (cResult[55] === layoutTransition2) {
          if (cResult[56] === physics) {
            let tmp54 = cResult[57];
          }
          tmp39 = tmp54;
        }
      }
      const obj10 = { isRinging: tmp13, avatarURI: "r", avatarDecoration: "code", layout: layoutTransition2, layoutPhysics: physics };
      const tmp57 = closure_20(closure_42, obj10);
      cResult[54] = tmp13;
      cResult[55] = layoutTransition2;
      cResult[56] = physics;
      cResult[57] = tmp57;
      tmp54 = tmp57;
    }
    const obj11 = { physics: tmp34, layoutTransition: null };
    function layoutTransition(originX, arg1) {
      return layoutTransitionFunction(originX, closure_7, pIPState.scale, sharedValue2, undefined !== arg1 && arg1);
    }
    const obj12 = { layoutTransitionFunction, physics: tmp34, pipState: pIPState, lastPipScale: sharedValue2 };
    layoutTransition.__closure = obj12;
    layoutTransition.__workletHash = 5354393718549;
    layoutTransition.__initData = __initData37;
    obj11.layoutTransition = layoutTransition;
    cResult[11] = sharedValue2;
    cResult[12] = pIPState.scale;
    cResult[13] = obj11;
    tmp36 = obj11;
    const tmpResult17 = scrollPosition(tmp2[14]);
  }
  class B {
    constructor() {
      handleChange = function handleChange() {
        let isSpeakingResult = null != id2;
        if (isSpeakingResult) {
          isSpeakingResult = SpeakingStore.isSpeaking(tmp2);
        }
        const result = sharedValue1.set(isSpeakingResult);
      };
      isSpeakingResult = null != id;
      tmp = closure_3;
      if (isSpeakingResult) {
        tmp4 = closure_1_8;
        isSpeakingResult = closure_1_8.isSpeaking(tmp2);
      }
      result = closure_3.set(isSpeakingResult);
      result1 = closure_1_8.addReactChangeListener(handleChange);
      return () => {
        const result = SpeakingStore.removeReactChangeListener(handleChange);
      };
    }
  }
  const items2 = [id2, sharedValue1];
  cResult[6] = sharedValue1;
  cResult[7] = id2;
  cResult[8] = B;
  cResult[9] = items2;
  tmp25 = items2;
  tmp24 = B;
  const tmpResult13 = scrollPosition(id2[14]);
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
  const context = cardLayoutCoordsSubscription.useContext(windowDimensions(id2[27]));
  ({ guildId, isCall, mountedCards, scrollPosition } = context);
  windowDimensions = context.windowDimensions;
  ({ channelId, layoutManager } = context);
  const tmp4 = windowDimensions(id2[50])(id, channelId, guildId);
  let tmp6 = tmp4;
  if (!obj2.isStableParticipantWithUser(tmp4)) {
    tmp6 = closure_60;
  }
  const isSelf = tmp6.isSelf;
  id2 = tmp6.user.id;
  obj2 = scrollPosition(id2[50]);
  const items = [RTCConnectionStore];
  const stateFromStores = scrollPosition(id2[28]).useStateFromStores(items, () => connected.isConnected());
  const tmp5Result = scrollPosition(id2[28]);
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
    let DEFAULT = tmp5(tmp2[30]).MediaEngineContextTypes.STREAM;
  } else {
    DEFAULT = tmp5(tmp2[30]).MediaEngineContextTypes.DEFAULT;
  }
  const tmpResultResult = windowDimensions(id2[29])(DEFAULT, str);
  windowDimensions(id2[56])(str);
  const tmpResult = windowDimensions(id2[29]);
  if (transitionState === scrollPosition(id2[47]).TransitionStates.MOUNTED) {
    let num = 1;
  } else {
    num = 0;
  }
  const sharedValue = scrollPosition(id2[14]).useSharedValue(num);
  const tmp5Result11 = scrollPosition(id2[14]);
  let isSpeakingResult = null != id2;
  if (isSpeakingResult) {
    isSpeakingResult = SpeakingStore.isSpeaking(id2);
  }
  sharedValue1 = scrollPosition(id2[14]).useSharedValue(isSpeakingResult);
  const items1 = [id2, sharedValue1];
  const layoutEffect = obj.useLayoutEffect(() => {
    function handleChange() {
      let isSpeakingResult = null != id2;
      if (isSpeakingResult) {
        isSpeakingResult = SpeakingStore.isSpeaking(tmp2);
      }
      const result = sharedValue1.set(isSpeakingResult);
    }
    let isSpeakingResult = null != id2;
    if (isSpeakingResult) {
      isSpeakingResult = SpeakingStore.isSpeaking(tmp2);
    }
    let result = sharedValue1.set(isSpeakingResult);
    const result1 = SpeakingStore.addReactChangeListener(handleChange);
    return () => {
      const result = SpeakingStore.removeReactChangeListener(handleChange);
    };
  }, items1);
  const tmp5Result12 = scrollPosition(id2[14]);
  cardLayoutCoordsSubscription = scrollPosition(id2[57]).useCardLayoutCoordsSubscription(id, layoutManager);
  const tmp5Result13 = scrollPosition(id2[57]);
  class B {
    constructor() {
      sum = EDGE_GUTTER + closure_4.get().y;
      obj = scrollPosition;
      value = scrollPosition.get();
      tmp3 = sum > value - closure_4.get().height;
      if (tmp3) {
        tmp5 = windowDimensions;
        value1 = obj.get();
        tmp3 = sum < value1 + windowDimensions.get().height;
      }
      return tmp3;
    }
  }
  B.__closure = { EDGE_GUTTER, coords: cardLayoutCoordsSubscription, scrollPosition, windowDimensions };
  B.__workletHash = 4524381131947;
  B.__initData = __initData38;
  const derivedValue = scrollPosition(id2[14]).useDerivedValue(B);
  const obj3 = { EDGE_GUTTER, coords: cardLayoutCoordsSubscription, scrollPosition, windowDimensions };
  const tmp5Result14 = scrollPosition(id2[14]);
  pIPState = scrollPosition(id2[49]).usePIPState();
  const tmp5Result15 = scrollPosition(id2[49]);
  const scale = pIPState.scale;
  sharedValue2 = scrollPosition(id2[14]).useSharedValue(scale.get());
  const items2 = [pIPState.scale, sharedValue2];
  const memo = obj.useMemo(() => {
    const physics = { mass: closure_1_11.mass, damping: windowDimensions(id2[58])(closure_1_11.damping - 2, closure_1_11.damping + 2), stiffness: windowDimensions(id2[58])(closure_1_11.stiffness - 20, closure_1_11.stiffness + 20) };
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
      let tmp29Result = closure_20(tmp(tmp2[59]), {});
      let tmp27 = closure_20;
    } else if (tmp38.CALLER_DISCONNECTED === id3) {
      tmp29Result = closure_20(tmp(tmp2[60]), {});
      tmp27 = closure_20;
    }
    const obj4 = { cleanUp: cleanUp.cleanUp, coords: cardLayoutCoordsSubscription, id, isRTCConnected: stateFromStores, isScrollVisible: derivedValue, layoutPhysics: physics, transitionState, sharedVisible: sharedValue, children: null };
    const items3 = [tmp29Result, , ];
    let tmp27Result = null != tmp4;
    if (tmp27Result) {
      const obj5 = { isRinging: tmp8, participant: tmp4, label: null, layout: null, speaking: null };
      const tmpResult3 = tmp(tmp2[63]);
      let userNick;
      if (tmp5Result17.isStableParticipantWithUser(tmp4)) {
        userNick = tmp4.userNick;
      }
      obj5.label = userNick;
      obj5.layout = layoutTransition;
      obj5.speaking = sharedValue1;
      tmp27Result = tmp27(tmpResult3, obj5);
      tmp5Result17 = tmp5(tmp2[50]);
    }
    items3[1] = tmp27Result;
    let result = tmp5(tmp2[50]).isStableParticipantWithUser(tmp4);
    if (result) {
      const obj6 = { speaking: sharedValue1, id, userId: tmp4.user.id, isSelf, layout: layoutTransition };
      result = tmp27(closure_50, obj6);
    }
    items3[2] = result;
    obj4.children = items3;
    return closure_22(closure_76, obj4);
  } else if (null != tmp4) {
    const type = item.type;
    const type2 = tmp4.type;
    if (ParticipantTypes.USER === type2) {
      ({ streamId, user } = tmp4);
      if (tmp4.hasVideo) {
        if (stateFromStores) {
          if (tmp4.canRenderVideo) {
            if (null == tmpResultResult) {
              let tmp31 = closure_20;
              const obj7 = { id: tmp28, userId: user.id, streamId: null, isScrollVisible: null, videoSpinnerContext: null, sharedCoords: null, isCamera: true, focusOnReady: null, layout: null };
              if (streamId == null) {
                streamId = null;
              }
              obj7.streamId = streamId;
              obj7.isScrollVisible = derivedValue;
              const VideoSpinnerContext = tmp5(tmp2[35]).VideoSpinnerContext;
              obj7.videoSpinnerContext = isSelf ? VideoSpinnerContext.SELF_VIDEO : VideoSpinnerContext.REMOTE_VIDEO;
              obj7.sharedCoords = cardLayoutCoordsSubscription;
              if (isCall) {
                isCall = !isSelf;
              }
              obj7.focusOnReady = isCall;
              obj7.layout = layoutTransition;
              let tmp31Result = tmp31(tmp(tmp2[34]), obj7);
              const tmpResult4 = tmp(tmp2[34]);
            }
            const obj8 = { avError: tmpResultResult, userId: user.id, style: null };
            user = pIPState.absoluteFill;
            obj8.style = user;
            tmp31Result = closure_20(tmp(tmp2[61]), obj8);
            tmp31 = closure_20;
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
      tmp27 = closure_20;
      tmp29Result = closure_20(closure_42, obj9);
    } else if (ParticipantTypes.STREAM === type2) {
      const obj10 = { userId: tmp4.user.id, id: null, streamGuildId: null, streamId: null, userNick: null, isSelf: null, sharedCoords: null, isScrollVisible: null, layout: null };
      ({ id: obj12.id, streamGuildId: obj12.streamGuildId, streamId: obj12.streamId, userNick: obj12.userNick } = tmp4);
      obj10.isSelf = isSelf;
      obj10.sharedCoords = cardLayoutCoordsSubscription;
      obj10.isScrollVisible = derivedValue;
      obj10.layout = layoutTransition;
      tmp29Result = closure_20(closure_37, obj10);
      tmp27 = closure_20;
    } else if (ParticipantTypes.ACTIVITY === type2) {
      const obj11 = { sharedVisible: sharedValue, applicationId: tmp4.applicationId, layout: layoutTransition };
      tmp29Result = closure_20(tmp(tmp2[62]), obj11, tmp4.id);
      tmp27 = closure_20;
    }
  }
  const obj13 = { isRinging: tmp8, avatarURI: "r", avatarDecoration: "code", layout: layoutTransition, layoutPhysics: physics };
  tmp29Result = closure_20(closure_42, obj13);
  tmp27 = closure_20;
  const tmp5Result16 = scrollPosition(id2[14]);
}));