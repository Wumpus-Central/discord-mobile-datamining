// === Module 17271: VoicePanelCard ===

// Module 17271 (VoicePanelCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import native from "native" /* 1188 */;
import native2 from "native" /* 4589 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 4612 */;
import Text_Text from "Text/Text" /* 4886 */;
import timing from "timing" /* 4891 */;
import CallConstants from "CallConstants" /* 4911 */;
import StreamKeyUtils from "StreamKeyUtils" /* 4942 */;
import StreamActionCreators from "StreamActionCreators" /* 5032 */;
import spring from "spring" /* 5597 */;
import LinearGradientDefault from "LinearGradient" /* 5605 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7850 */;
import cheapWorkletShallowEqual2 from "cheapWorkletShallowEqual" /* 9074 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 10725 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11900 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11903 */;
import VoicePanelCardConstants from "VoicePanelCardConstants" /* 11905 */;
import VoicePanelPIPUtils from "VoicePanelPIPUtils" /* 17205 */;
import VoicePanelPIPConstants from "VoicePanelPIPConstants" /* 17206 */;
import computeCardBorderRadiusDefault from "computeCardBorderRadius" /* 17274 */;
import calculateContentCenterOffsetDefault from "calculateContentCenterOffset" /* 17275 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ApplicationStreamingStore_mod from "ApplicationStreamingStore" /* 4912 */;
import RTCConnectionStore_mod from "RTCConnectionStore" /* 4913 */;
import SpeakingStore from "SpeakingStore" /* 5576 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11902 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const ReanimatedRexport_mod = ReanimatedRexport2;
let _require, dependencyMap, importDefault, obj1, set;

let c10;
let c9;
let closure_12;
let closure_20;
let closure_21;
let closure_22;
let map1;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let rect;
let rect1;
let size;
let size1;
let unpackModuleId;
let react = react_mod;
const StyleSheet = react_native.StyleSheet;
let ApplicationStreamingStore = ApplicationStreamingStore_mod;
let RTCConnectionStore = RTCConnectionStore_mod;
({ VoicePanelCTACard: c9, VoicePanelModes: c10, MODE_CHANGE_PHYSICS: unpackModuleId, SPEAKING_PHYSICS: closure_12, VoicePanelCardItemType: map1 } = VoicePanelConstants);
const VoicePanelControlsModes = VoicePanelControlsConstants.VoicePanelControlsModes;
const VoicePanelPIPModes = VoicePanelPIPConstants.VoicePanelPIPModes;
const EDGE_GUTTER = VoicePanelCardConstants.EDGE_GUTTER;
const ApplicationStreamStates = Constants.ApplicationStreamStates;
const ParticipantTypes = CallConstants.ParticipantTypes;
let SCALE_PHYSICS = MorphablePanelConstants.SCALE_PHYSICS;
({ jsx: closure_20, Fragment: closure_21, jsxs: closure_22 } = Fragment);
let ReanimatedRexport = ReanimatedRexport_mod;
let closure_23 = ReanimatedRexport.createAnimatedComponent(Text_Text.Text);
ReanimatedRexport = ReanimatedRexport_mod;
const LinearGradient = ReanimatedRexport.createAnimatedComponent(LinearGradientDefault);
let tmp4 = native.AVATAR_SIZE_MAP[native.AvatarSizes.XXLARGE];
let __closure = { stiffness: 150 };
let merged = Object.assign(SCALE_PHYSICS);
let closure_26 = { duration: 200 };
let closure_27 = { duration: 0 };
let c28 = 0.75;
let createStyles = createStyles_mod;
let obj2 = { positionWrapper: rect, userRoundedCard: rect1, nonUserRoundedCard: size, blackBackground: obj3, selfStreamFocusedSubtitle: { textAlign: "center", marginTop: 4, marginBottom: 40 }, avatarImageMaskStyles: obj4, avatarPlaceholder: size1, image: { maxWidth: 80, maxHeight: 80 }, speakingIndicatorWrapper: obj5, speakingIndicatorUnderlay: obj6, speakingIndicatorBar: obj7 };
rect = { position: "absolute", top: 0, left: 0, overflow: "hidden", backgroundColor: nativeDefault.colors.BLACK };
createStyles = createStyles.createStyles;
rect1 = { position: "absolute", top: -4, left: -4, bottom: -4, right: -4, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_800 };
size = { position: "absolute", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", backgroundColor: nativeDefault.colors.VOICE_VIDEO_VIDEO_TILE_BACKGROUND };
obj3 = { backgroundColor: "black" };
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4 = { position: "relative", borderRadius: nativeDefault.radii.round, overflow: "hidden" };
size1 = { width: tmp4, height: tmp4, borderRadius: nativeDefault.radii.round, backgroundColor: "rgba(0,0,0,0.3)" };
obj5 = { overflow: "hidden" };
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj6 = { borderColor: nativeDefault.colors.BLACK };
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj7 = {};
const merged4 = Object.assign(StyleSheet.absoluteFillObject);
let closure_29 = createStyles(obj2);
let __initData = { code: "function VoicePanelCardTsx1(){const{isFocused,sharedCoords}=this.__closure;return{textAlign:\"center\",paddingHorizontal:16,paddingVertical:isFocused?0:16,width:isFocused?\"auto\":sharedCoords.get().width};}" };
const __initData2 = { code: "function VoicePanelCardTsx2(){const{isFocused,sharedCoords}=this.__closure;return{textAlign:'center',paddingHorizontal:16,paddingVertical:isFocused?0:16,width:isFocused?'auto':sharedCoords.get().width};}" };
let ReactCompilerGating = ReactCompilerGating_mod;
const defaultBorderRadius2 = ReactCompilerGating.isReactCompilerEnabled() ? ((sharedCoords) => {
  let intl2;
  let intl3;
  let isFocused;
  let items;
  let items1;
  let tmp5;
  const tmp = sharedCoords;
  let obj = sharedCoords(isFocused[21]);
  const cResult = obj.c(18);
  sharedCoords = sharedCoords.sharedCoords;
  const stream = sharedCoords.stream;
  isFocused = sharedCoords.isFocused;
  const tmp4 = closure_29();
  if (cResult[0] !== stream) {
    const fn = function s() {
      if (null != stream) {
        const stopStream = StreamActionCreators.stopStream;
        StreamActionCreators;
        const obj = StreamKeyUtils;
        stopStream(obj.encodeStreamKey(tmp));
      }
    };
    let num = 0;
    cResult[0] = stream;
    cResult[1] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  const fn2 = function h() {
    let str;
    let num = 16;
    if (isFocused) {
      num = 0;
    }
    const obj = { textAlign: "center", paddingHorizontal: 16, paddingVertical: num, width: str };
    str = "auto";
    if (!isFocused) {
      str = sharedCoords.get().width;
    }
    return obj;
  };
  fn2.__closure = { isFocused, sharedCoords };
  fn2.__workletHash = 1330083185339;
  fn2.__initData = __initData;
  const tmpResult = tmp(isFocused[14]);
  const animatedStyle = tmpResult.useAnimatedStyle(fn2);
  if (cResult[2] === isFocused) {
    let tmp8;
    let tmp13;
    if (cResult[3] === tmp4.blackBackground) {
      tmp8 = cResult[4];
    }
    let str = "text-sm/semibold";
    if (isFocused) {
      str = "text-lg/semibold";
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(tmp2[25]).intl;
      const stringResult = intl.string(tmp(isFocused[25]).t.gMOwov);
      cResult[5] = stringResult;
      tmp13 = stringResult;
    } else {
      tmp13 = cResult[5];
    }
    if (cResult[6] === str) {
      let tmp15;
      if (cResult[7] === animatedStyle) {
        tmp15 = cResult[8];
      }
      if (cResult[9] === tmp5) {
        if (cResult[10] === isFocused) {
          let tmp19;
          if (cResult[11] === tmp4.selfStreamFocusedSubtitle) {
            tmp19 = cResult[12];
          }
          if (cResult[13] === tmp4.nonUserRoundedCard) {
            if (cResult[14] === tmp8) {
              if (cResult[15] === tmp15) {
                let tmp24;
                if (cResult[16] === tmp19) {
                  tmp24 = cResult[17];
                }
                return tmp24;
              }
            }
          }
          const obj2 = { style: tmp7, children: items };
          items = [tmp8, tmp15, tmp19];
          const tmp27 = closure_22(stream(isFocused[24]), obj2);
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
        const obj3 = { children: items1 };
        const obj4 = { style: tmp4.selfStreamFocusedSubtitle, variant: "text-sm/medium", color: "text-overlay-light", children: intl2.string(tmp(isFocused[25]).t.dKeLGt) };
        const Text = tmp(tmp2[15]).Text;
        intl2 = tmp(tmp2[25]).intl;
        items1 = [closure_20(Text, obj4), ];
        const obj5 = { size: "lg", variant: "primary-overlay", onPress: tmp5, text: intl3.string(tmp(isFocused[25]).t.CpkXwZ) };
        const Button = tmp(tmp2[26]).Button;
        intl3 = tmp(tmp2[25]).intl;
        items1[1] = closure_20(Button, obj5);
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
  if (tmp9) {
    const obj7 = { style: tmp4.blackBackground };
    tmp9 = closure_20(stream(tmp2[24]), obj7);
  }
  cResult[2] = isFocused;
  cResult[3] = tmp4.blackBackground;
  cResult[4] = tmp9;
  tmp8 = tmp9;
}) : ((sharedCoords) => {
  let intl;
  let intl2;
  let intl3;
  let items1;
  let items2;
  let str;
  sharedCoords = sharedCoords.sharedCoords;
  const stream = sharedCoords.stream;
  const isFocused = sharedCoords.isFocused;
  const tmp = closure_29();
  const items = [stream];
  const tmp4 = isFocused;
  const callback = react.useCallback(() => {
    if (null != stream) {
      const stopStream = StreamActionCreators.stopStream;
      StreamActionCreators;
      const obj = StreamKeyUtils;
      stopStream(obj.encodeStreamKey(tmp));
    }
  }, items);
  let obj = sharedCoords(isFocused[14]);
  const fn = function l() {
    let str;
    let num = 16;
    if (isFocused) {
      num = 0;
    }
    const obj = { textAlign: "center", paddingHorizontal: 16, paddingVertical: num, width: str };
    str = "auto";
    if (!isFocused) {
      str = sharedCoords.get().width;
    }
    return obj;
  };
  fn.__closure = { isFocused, sharedCoords };
  fn.__workletHash = 4905346923512;
  fn.__initData = __initData2;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let tmp9 = isFocused;
  const obj2 = { style: tmp.nonUserRoundedCard, children: items1 };
  const tmp7 = stream;
  const tmp8 = stream(isFocused[24]);
  if (isFocused) {
    const obj3 = { style: tmp.blackBackground };
    tmp9 = closure_20(tmp7(tmp4[24]), obj3);
  }
  items1 = [tmp9, , ];
  const obj4 = { style: animatedStyle, variant: str, color: "text-overlay-light", children: intl.string(sharedCoords(tmp4[25]).t.gMOwov) };
  str = "text-sm/semibold";
  if (isFocused) {
    str = "text-lg/semibold";
  }
  intl = tmp3(tmp4[25]).intl;
  items1[1] = closure_20(closure_23, obj4);
  let tmp6Result = null;
  if (isFocused) {
    const obj5 = { children: items2 };
    const obj6 = { style: tmp.selfStreamFocusedSubtitle, variant: "text-sm/medium", color: "text-overlay-light", children: intl2.string(sharedCoords(tmp4[25]).t.dKeLGt) };
    const Text = tmp3(tmp4[15]).Text;
    intl2 = tmp3(tmp4[25]).intl;
    items2 = [closure_20(Text, obj6), ];
    const obj7 = { size: "lg", variant: "primary-overlay", onPress: callback, text: intl3.string(sharedCoords(tmp4[25]).t.CpkXwZ) };
    const Button = tmp3(tmp4[26]).Button;
    intl3 = tmp3(tmp4[25]).intl;
    items2[1] = closure_20(Button, obj7);
    tmp6Result = closure_22(closure_21, obj5);
  }
  items1[2] = tmp6Result;
  return closure_22(tmp8, obj2);
});
const __initData3 = { code: "function VoicePanelCardTsx3(){const{focused,id}=this.__closure;var _focused$get;return((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;}" };
__initData = { code: "function VoicePanelCardTsx4(isFocused_0,lastIsFocused){const{runOnJS,setIsFocused}=this.__closure;if(isFocused_0!==lastIsFocused){runOnJS(setIsFocused)(isFocused_0);}}" };
const __initData4 = { code: "function VoicePanelCardTsx5(){const{focused,id}=this.__closure;var _focused$get;return((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;}" };
const __initData5 = { code: "function VoicePanelCardTsx6(isFocused_0,lastIsFocused){const{runOnJS,setIsFocused}=this.__closure;if(isFocused_0!==lastIsFocused){runOnJS(setIsFocused)(isFocused_0);}}" };
let memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_37 = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((id) => {
  let closure_6;
  let first;
  let intl3;
  let isScrollVisible;
  let layout;
  let mode;
  let setFocused;
  let sharedCoords;
  let streamGuildId;
  let streamId;
  let tmp14;
  let tmp15;
  let userNick;
  let obj = id(streamGuildId[21]);
  const cResult = obj.c(44);
  id = id.id;
  const userId = id.userId;
  ({ streamId, streamGuildId } = id);
  ({ userNick, sharedCoords, isScrollVisible, layout } = id);
  const isSelf = id.isSelf;
  const context = setFocused.useContext(userId(streamGuildId[27]));
  const focused = context.focused;
  ({ mode, setFocused } = context);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ApplicationStreamingStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === streamGuildId) {
    let tmp8;
    let tmp9;
    if (cResult[2] === userId) {
      tmp8 = cResult[3];
      tmp9 = cResult[4];
    }
    const tmpResult = id(streamGuildId[28]);
    const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp8, tmp9);
    const stream = stateFromStoresObject.stream;
    const activeStream = stateFromStoresObject.activeStream;
    if (cResult[5] === setFocused) {
      let tmp11;
      if (cResult[6] === stream) {
        tmp11 = cResult[7];
      }
      [tmp14, tmp15] = focused(setFocused.useState(false), 2);
      ApplicationStreamingStore = tmp15;
      focused(setFocused.useState(false), 2);
      const tmpResult3 = id(streamGuildId[14]);
      class G {
        constructor() {
          const value = focused.get();
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
          if (arg0 !== arg1) {
            const obj = ReanimatedRexport2;
            obj.runOnJS(ApplicationStreamingStore)(arg0);
          }
        }
      }
      const useAnimatedReaction = tmpResult3.useAnimatedReaction;
      Y.__closure = { runOnJS: id(streamGuildId[14]).runOnJS, setIsFocused: tmp15 };
      Y.__workletHash = 16381883582731;
      Y.__initData = __initData;
      const obj4 = { runOnJS: id(streamGuildId[14]).runOnJS, setIsFocused: tmp15 };
      const animatedReaction = useAnimatedReaction(G, Y);
      const tmp4Result = userId(streamGuildId[29]);
      const tmp4ResultResult = tmp4Result(id(streamGuildId[30]).MediaEngineContextTypes.STREAM, userId);
      if (isSelf) {
        if (cResult[8] === tmp14) {
          if (cResult[9] === sharedCoords) {
            let tmp60;
            if (cResult[10] === stream) {
              tmp60 = cResult[11];
            }
            return tmp60;
          }
        }
        const obj5 = { sharedCoords, stream, isFocused: tmp14 };
        const tmp63 = closure_20(closure_32, obj5);
        class G {
          constructor() {
            const value = focused.get();
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
              let tmp57;
              if (cResult[15] === stream) {
                tmp57 = cResult[16];
              }
              return tmp57;
            }
          }
        }
        const obj6 = { mode, stream, onPress: tmp11, disabled: false, layout };
        const tmp59 = closure_20(id(streamGuildId[31]).VoicePanelStreamPreview, obj6);
        class G {
          constructor() {
            const value = focused.get();
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
        cResult[16] = tmp59;
        class Y {
          constructor(arg0, arg1) {
            if (arg0 !== arg1) {
              const obj = ReanimatedRexport2;
              obj.runOnJS(ApplicationStreamingStore)(arg0);
            }
          }
        }
      } else {
        if (null == tmp4ResultResult) {
          if (activeStream.state !== ApplicationStreamStates.FAILED) {
            if (activeStream.state === ApplicationStreamStates.ENDED) {
              if (cResult[21] === activeStream) {
                let tmp46;
                if (cResult[22] === !tmp14) {
                  tmp46 = cResult[23];
                }
                return tmp46;
              }
              const obj7 = { stream: activeStream, removeSplashImage: !tmp14, type: id(streamGuildId[32]).VideoEmptyTypes.STREAM_ENDED, style: null };
              const tmp4Result4 = userId(streamGuildId[32]);
              class G {
                constructor() {
                  const value = focused.get();
                  id = undefined;
                  if (value != null) {
                    id = value.id;
                  }
                  return id === id;
                }
              }
              const tmp50 = closure_20(tmp4Result4, obj7);
              cResult[21] = activeStream;
              cResult[22] = !tmp14;
              cResult[23] = tmp50;
              tmp46 = tmp50;
            } else {
              let tmp30;
              let tmp34;
              if (activeStream.state === ApplicationStreamStates.RECONNECTING) {
                let tmp31;
                const _Symbol = Symbol;
                if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
                  const obj8 = { title: intl3.string(id(streamGuildId[25]).t["pdFFK+"]) };
                  const StreamTextOverlay = tmp(streamGuildId[33]).StreamTextOverlay;
                  intl3 = tmp(streamGuildId[25]).intl;
                  cResult[24] = closure_20(StreamTextOverlay, obj8);
                  closure_20(StreamTextOverlay, obj8);
                  class G {
                    constructor() {
                      const value = focused.get();
                      id = undefined;
                      if (value != null) {
                        id = value.id;
                      }
                      return id === id;
                    }
                  }
                } else {
                  tmp31 = cResult[24];
                }
                tmp30 = tmp31;
              } else {
                tmp30 = null;
                if (activeStream.state === ApplicationStreamStates.PAUSED) {
                  let tmp23;
                  let tmp27;
                  const _Symbol2 = Symbol;
                  if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl = tmp(streamGuildId[25]).intl;
                    const stringResult = intl.string(id(streamGuildId[25]).t["5q17w5"]);
                    cResult[25] = stringResult;
                    tmp23 = stringResult;
                  } else {
                    tmp23 = cResult[25];
                  }
                  if (cResult[26] !== userNick) {
                    const intl2 = tmp(streamGuildId[25]).intl;
                    const obj9 = { username: userNick };
                    cResult[26] = userNick;
                    cResult[27] = intl2.formatToPlainString(id(streamGuildId[25]).t.meVVlb, obj9);
                    intl2.formatToPlainString(id(streamGuildId[25]).t.meVVlb, obj9);
                    class G {
                      constructor() {
                        const value = focused.get();
                        id = undefined;
                        if (value != null) {
                          id = value.id;
                        }
                        return id === id;
                      }
                    }
                  }
                  if (cResult[28] !== tmp25) {
                    const obj10 = { title: tmp23, subtext: tmp25 };
                    cResult[28] = tmp25;
                    cResult[29] = closure_20(id(streamGuildId[33]).StreamTextOverlay, obj10);
                    closure_20(id(streamGuildId[33]).StreamTextOverlay, obj10);
                    class G {
                      constructor() {
                        const value = focused.get();
                        id = undefined;
                        if (value != null) {
                          id = value.id;
                        }
                        return id === id;
                      }
                    }
                  } else {
                    tmp27 = cResult[29];
                  }
                  tmp30 = tmp27;
                }
              }
              if (streamId == null) {
                streamId = null;
              }
              if (cResult[30] !== activeStream) {
                const tmpResult4 = id(streamGuildId[23]);
                const encodeStreamKeyResult = tmpResult4.encodeStreamKey(activeStream);
                cResult[30] = activeStream;
                cResult[31] = encodeStreamKeyResult;
                tmp34 = encodeStreamKeyResult;
              } else {
                tmp34 = cResult[31];
              }
              if (cResult[32] === id) {
                if (cResult[33] === isScrollVisible) {
                  if (cResult[34] === layout) {
                    if (cResult[35] === sharedCoords) {
                      if (cResult[36] === streamId) {
                        if (cResult[37] === tmp34) {
                          if (cResult[38] === activeStream.state === ApplicationStreamStates.PAUSED) {
                            let tmp37;
                            if (cResult[39] === userId) {
                              tmp37 = cResult[40];
                            }
                            if (cResult[41] === tmp30) {
                              let tmp41;
                              if (cResult[42] === tmp37) {
                                tmp41 = cResult[43];
                              }
                              return tmp41;
                            }
                            const items1 = [, ];
                            items1[0] = tmp37;
                            items1[1] = tmp30;
                            class G {
                              constructor() {
                                const value = focused.get();
                                id = undefined;
                                if (value != null) {
                                  id = value.id;
                                }
                                return id === id;
                              }
                            }
                            cResult[41] = tmp30;
                            cResult[42] = tmp37;
                            cResult[43] = tmp44;
                            tmp41 = tmp44;
                          }
                        }
                      }
                    }
                  }
                }
              }
              const obj12 = { layout, id, streamId: null, userId, streamKey: tmp34, isScrollVisible, videoSpinnerContext: id(streamGuildId[35]).VideoSpinnerContext.REMOTE_STREAM, sharedCoords, isCamera: false, paused: activeStream.state === ApplicationStreamStates.PAUSED };
              class G {
                constructor() {
                  const value = focused.get();
                  id = undefined;
                  if (value != null) {
                    id = value.id;
                  }
                  return id === id;
                }
              }
              const tmp4Result5 = userId(streamGuildId[34]);
              const tmp40 = closure_20(tmp4Result5, obj12);
              class Y {
                constructor(arg0, arg1) {
                  if (arg0 !== arg1) {
                    const obj = ReanimatedRexport2;
                    obj.runOnJS(ApplicationStreamingStore)(arg0);
                  }
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
          if (cResult[18] === !tmp14) {
            let tmp52;
            if (cResult[19] === tmp4ResultResult) {
              tmp52 = cResult[20];
            }
            return tmp52;
          }
        }
        const obj13 = { avError: tmp4ResultResult, stream: activeStream, removeSplashImage: !tmp14, type: null, style: stream.absoluteFill };
        const tmp4Result6 = userId(streamGuildId[32]);
        class G {
          constructor() {
            const value = focused.get();
            id = undefined;
            if (value != null) {
              id = value.id;
            }
            return id === id;
          }
        }
        const tmp56 = closure_20(tmp4Result6, obj13);
        cResult[17] = activeStream;
        cResult[18] = !tmp14;
        class Y {
          constructor(arg0, arg1) {
            if (arg0 !== arg1) {
              const obj = ReanimatedRexport2;
              obj.runOnJS(ApplicationStreamingStore)(arg0);
            }
          }
        }
        cResult[20] = tmp56;
        tmp52 = tmp56;
      }
    }
    const fn2 = function x() {
      if (null != stream) {
        const obj = StreamActionCreators;
        obj.watchStream(stream, { forceMultiple: true });
        const obj2 = StreamKeyUtils;
        setFocused(obj2.encodeStreamKey(stream));
      }
    };
    cResult[6] = stream;
    cResult[7] = fn2;
    tmp11 = fn2;
  }
  const fn = function u() {
    const obj = { stream: ApplicationStreamingStore.getStreamForUser(userId, streamGuildId), activeStream: ApplicationStreamingStore.getActiveStreamForUser(userId, streamGuildId) };
    return obj;
  };
  const items2 = [userId, streamGuildId];
  cResult[1] = streamGuildId;
  cResult[2] = userId;
  cResult[3] = fn;
  cResult[4] = items2;
  tmp9 = items2;
  tmp8 = fn;
}) : ((id) => {
  let intl;
  let intl2;
  let intl3;
  let isScrollVisible;
  let isSelf;
  let items3;
  let layout;
  let obj9;
  let sharedCoords;
  let streamGuildId;
  let streamId;
  let tmp4Result;
  let tmp8;
  let tmp9;
  let userNick;
  id = id.id;
  const userId = id.userId;
  ({ streamId, streamGuildId } = id);
  ({ sharedCoords, layout } = id);
  let setFocused;
  let c6;
  ({ userNick, isSelf, isScrollVisible } = id);
  const context = setFocused.useContext(userId(streamGuildId[27]));
  const focused = context.focused;
  setFocused = context.setFocused;
  const mode = context.mode;
  let obj = id(streamGuildId[28]);
  const items = [c6];
  const items1 = [userId, streamGuildId];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { stream: ApplicationStreamingStore.getStreamForUser(userId, streamGuildId), activeStream: ApplicationStreamingStore.getActiveStreamForUser(userId, streamGuildId) };
    return obj;
  }, items1);
  const stream = stateFromStoresObject.stream;
  const activeStream = stateFromStoresObject.activeStream;
  const items2 = [stream, setFocused];
  const callback = setFocused.useCallback(() => {
    if (null != stream) {
      const obj = StreamActionCreators;
      obj.watchStream(stream, { forceMultiple: true });
      const obj2 = StreamKeyUtils;
      setFocused(obj2.encodeStreamKey(stream));
    }
  }, items2);
  [tmp8, tmp9] = focused(setFocused.useState(false), 2);
  c6 = tmp9;
  focused(setFocused.useState(false), 2);
  let obj2 = id(streamGuildId[14]);
  class I {
    constructor() {
      const value = focused.get();
      id = undefined;
      if (value != null) {
        id = value.id;
      }
      return id === id;
    }
  }
  I.__closure = { focused, id };
  I.__workletHash = 720082375367;
  I.__initData = __initData4;
  const fn = function w(arg0, arg1) {
    if (arg0 !== arg1) {
      const obj = ReanimatedRexport2;
      obj.runOnJS(c6)(arg0);
    }
  };
  fn.__closure = { runOnJS: id(streamGuildId[14]).runOnJS, setIsFocused: tmp9 };
  fn.__workletHash = 1640804275081;
  fn.__initData = __initData5;
  ({ runOnJS: id(streamGuildId[14]).runOnJS, setIsFocused: tmp9 });
  const animatedReaction = obj2.useAnimatedReaction(I, fn);
  const tmp11 = userId(streamGuildId[29]);
  const tmp11Result = tmp11(id(streamGuildId[30]).MediaEngineContextTypes.STREAM, userId);
  if (isSelf) {
    const obj4 = { sharedCoords, stream, isFocused: tmp8 };
    return closure_20(closure_32, obj4);
  } else if (null == activeStream) {
    const obj5 = { mode, stream, onPress: callback, disabled: false, layout };
    return closure_20(id(streamGuildId[31]).VoicePanelStreamPreview, obj5);
  } else {
    if (null == tmp11Result) {
      if (activeStream.state !== ApplicationStreamStates.FAILED) {
        if (activeStream.state === ApplicationStreamStates.ENDED) {
          const obj6 = { stream: activeStream, removeSplashImage: !tmp8, type: id(streamGuildId[32]).VideoEmptyTypes.STREAM_ENDED, style: stream.absoluteFill };
          const tmpResult = userId(streamGuildId[32]);
          return closure_20(tmpResult, obj6);
        } else {
          let tmp15;
          if (activeStream.state === ApplicationStreamStates.RECONNECTING) {
            const obj7 = { title: intl.string(id(streamGuildId[25]).t["pdFFK+"]) };
            const StreamTextOverlay = tmp4(streamGuildId[33]).StreamTextOverlay;
            intl = tmp4(streamGuildId[25]).intl;
            tmp15 = closure_20(StreamTextOverlay, obj7);
          } else {
            tmp15 = null;
            if (activeStream.state === ApplicationStreamStates.PAUSED) {
              const obj8 = { title: intl2.string(id(streamGuildId[25]).t["5q17w5"]), subtext: intl3.formatToPlainString(id(streamGuildId[25]).t.meVVlb, obj9) };
              const StreamTextOverlay2 = tmp4(streamGuildId[33]).StreamTextOverlay;
              intl2 = tmp4(streamGuildId[25]).intl;
              intl3 = tmp4(streamGuildId[25]).intl;
              obj9 = { username: userNick };
              tmp15 = closure_20(StreamTextOverlay2, obj8);
            }
          }
          const obj10 = { layout, id, streamId, userId, streamKey: tmp4Result.encodeStreamKey(activeStream), isScrollVisible, videoSpinnerContext: id(streamGuildId[35]).VideoSpinnerContext.REMOTE_STREAM, sharedCoords, isCamera: false, paused: activeStream.state === ApplicationStreamStates.PAUSED };
          const tmpResult3 = userId(streamGuildId[34]);
          if (streamId == null) {
            streamId = null;
          }
          const obj11 = { children: items3 };
          tmp4Result = id(streamGuildId[23]);
          items3 = [closure_20(tmpResult3, obj10), tmp15];
          return closure_22(closure_21, obj11);
        }
      }
    }
    const obj12 = { avError: tmp11Result, stream: activeStream, removeSplashImage: !tmp8, type: id(streamGuildId[32]).VideoEmptyTypes.STREAM_FAILED, style: stream.absoluteFill };
    const tmpResult4 = userId(streamGuildId[32]);
    return closure_20(tmpResult4, obj12);
  }
}));
const __initData6 = { code: "function VoicePanelCardTsx7(){const{withTiming,isRinging,CONNECTING_OPACITY,solidBackgroundColor}=this.__closure;return{opacity:withTiming(isRinging?CONNECTING_OPACITY:1,{duration:100},\"animate-always\"),backgroundColor:solidBackgroundColor};}" };
const __initData7 = { code: "function VoicePanelCardTsx8(){const{withSpring,mode,VoicePanelModes,layoutPhysics}=this.__closure;return{transform:[{scale:withSpring(mode.get()===VoicePanelModes.PIP?0.8:1,layoutPhysics)}]};}" };
const __initData8 = { code: "function VoicePanelCardTsx9(){const{withTiming,isRinging,CONNECTING_OPACITY,solidBackgroundColor}=this.__closure;return{opacity:withTiming(isRinging?CONNECTING_OPACITY:1,{duration:100},'animate-always'),backgroundColor:solidBackgroundColor};}" };
const __initData9 = { code: "function VoicePanelCardTsx10(){const{withSpring,mode,VoicePanelModes,layoutPhysics}=this.__closure;return{transform:[{scale:withSpring(mode.get()===VoicePanelModes.PIP?64/80:1,layoutPhysics)}]};}" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_42 = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((isRinging) => {
  let avatarDecoration;
  let avatarURI;
  let guildId;
  let items1;
  let layout;
  let layoutPhysics;
  let mode;
  let userId;
  const tmp = isRinging;
  let obj = isRinging(mode[21]);
  const cResult = obj.c(30);
  isRinging = isRinging.isRinging;
  ({ layout, avatarURI, avatarDecoration, layoutPhysics } = isRinging);
  ({ userId, guildId } = isRinging);
  const tmp4 = closure_29();
  mode = react.useContext(layoutPhysics(mode[27])).mode;
  isRinging(mode[36]);
  if (cResult[0] === guildId) {
    let tmp8;
    let tmp19;
    if (cResult[1] === userId) {
      tmp8 = cResult[2];
    }
    const tmp9 = layoutPhysics(mode[37])(tmp8);
    let str = "transparent";
    if (null == tmp9) {
      str = tmp7;
    }
    const fn = function y() {
      let num = 1;
      const withTiming = timing.withTiming;
      timing;
      if (isRinging) {
        num = c28;
      }
      const obj = { opacity: withTiming(num, { duration: 100 }, "animate-always"), backgroundColor: str };
      return obj;
    };
    const obj2 = { withTiming: tmp(mode[38]).withTiming, isRinging, CONNECTING_OPACITY, solidBackgroundColor: str };
    const useAnimatedStyle = tmp(mode[14]).useAnimatedStyle;
    tmp(mode[14]);
    fn.__closure = obj2;
    let num = 14362526641310;
    fn.__workletHash = 14362526641310;
    fn.__initData = __initData6;
    const animatedStyle = useAnimatedStyle(fn);
    const tmpResult3 = tmp(mode[14]);
    class C {
      constructor() {
        let items;
        const withSpring = spring.withSpring;
        let num = 1;
        spring;
        if (mode.get() === constants.PIP) {
          num = 0.8;
        }
        const obj = { transform: items };
        items = [{ scale: withSpring(num, layoutPhysics) }];
        ({ scale: withSpring(num, layoutPhysics) });
        return obj;
      }
    }
    const useAnimatedStyle2 = tmpResult3.useAnimatedStyle;
    C.__closure = { withSpring: tmp(mode[39]).withSpring, mode, VoicePanelModes, layoutPhysics };
    C.__workletHash = 1926256435326;
    C.__initData = __initData7;
    const obj3 = { withSpring: tmp(mode[39]).withSpring, mode, VoicePanelModes, layoutPhysics };
    const animatedStyle2 = useAnimatedStyle2(C);
    if (cResult[3] !== avatarURI) {
      let cachedSourceFromURI;
      if (null != avatarURI) {
        const tmpResult4 = tmp(mode[36]);
        cachedSourceFromURI = tmpResult4.getCachedSourceFromURI(avatarURI);
      }
      cResult[3] = avatarURI;
      cResult[4] = cachedSourceFromURI;
      tmp19 = cachedSourceFromURI;
    } else {
      tmp19 = cResult[4];
    }
    if (cResult[5] === animatedStyle) {
      let tmp21;
      if (cResult[6] === tmp4.userRoundedCard) {
        tmp21 = cResult[7];
      }
      if (cResult[8] === tmp9) {
        let tmp22;
        let tmp27;
        if (cResult[9] === layout) {
          tmp22 = cResult[10];
        }
        if (null != tmp19) {
          let prop;
          if (null == avatarDecoration) {
            prop = tmp4.avatarImageMaskStyles;
          }
          if (cResult[13] === animatedStyle2) {
            let tmp32;
            let tmp34Result;
            if (cResult[14] === prop) {
              tmp32 = cResult[15];
            }
            if (cResult[16] === avatarDecoration) {
              if (cResult[17] === tmp19) {
                if (cResult[18] === null != avatarDecoration) {
                  let tmp33;
                  if (cResult[19] === tmp4.image) {
                    tmp33 = cResult[20];
                  }
                  if (cResult[21] === layout) {
                    if (cResult[22] === tmp32) {
                      let tmp36;
                      if (cResult[23] === tmp33) {
                        tmp36 = cResult[24];
                      }
                      tmp27 = tmp36;
                    }
                  }
                  const obj4 = { style: tmp32, layout, children: tmp33 };
                  const tmp38 = closure_20(layoutPhysics(mode[41]), obj4);
                  cResult[21] = layout;
                  cResult[22] = tmp32;
                  cResult[23] = tmp33;
                  cResult[24] = tmp38;
                  tmp36 = tmp38;
                }
              }
            }
            if (null != avatarDecoration) {
              const obj5 = { source: tmp19, size: tmp(mode[17]).AvatarSizes.XXLARGE, avatarDecoration };
              const Avatar = tmp(tmp2[17]).Avatar;
              tmp34Result = closure_20(Avatar, obj5);
            } else {
              size = { source: tmp19, resizeMode: "stretch", width: 80, height: 80, style: tmp4.image };
              tmp34Result = closure_20(layoutPhysics(tmp2[40]), size);
            }
            cResult[16] = avatarDecoration;
            cResult[17] = tmp19;
            cResult[18] = null != avatarDecoration;
            cResult[19] = tmp4.image;
            cResult[20] = tmp34Result;
            tmp33 = tmp34Result;
          }
          let items = [prop, animatedStyle2];
          cResult[13] = animatedStyle2;
          cResult[14] = prop;
          cResult[15] = items;
          tmp32 = items;
        } else if (cResult[11] !== tmp4.avatarPlaceholder) {
          const obj6 = { style: tmp4.avatarPlaceholder };
          const tmp29 = closure_20(layoutPhysics(mode[24]), obj6);
          cResult[11] = tmp4.avatarPlaceholder;
          cResult[12] = tmp29;
          tmp27 = tmp29;
        } else {
          tmp27 = cResult[12];
        }
        if (cResult[25] === layout) {
          if (cResult[26] === tmp21) {
            if (cResult[27] === tmp22) {
              let tmp39;
              if (cResult[28] === tmp27) {
                tmp39 = cResult[29];
              }
              return tmp39;
            }
          }
        }
        const obj7 = { style: tmp21, layout, children: items1 };
        items1 = [tmp22, tmp27];
        cResult[25] = layout;
        cResult[26] = tmp21;
        cResult[27] = tmp22;
        cResult[28] = tmp27;
        cResult[29] = closure_22(layoutPhysics(mode[41]), obj7);
        closure_22(layoutPhysics(mode[41]), obj7);
        class C {
          constructor() {
            let items;
            const withSpring = spring.withSpring;
            let num = 1;
            spring;
            if (mode.get() === constants.PIP) {
              num = 0.8;
            }
            const obj = { transform: items };
            items = [{ scale: withSpring(num, layoutPhysics) }];
            ({ scale: withSpring(num, layoutPhysics) });
            return obj;
          }
        }
      }
      let tmp23 = null;
      if (null != tmp9) {
        const obj8 = { colors: tmp9, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, style: StyleSheet.absoluteFill, layout, pointerEvents: "none" };
        tmp23 = closure_20(LinearGradient, obj8);
      }
      cResult[8] = tmp9;
      cResult[9] = layout;
      cResult[10] = tmp23;
      tmp22 = tmp23;
    }
    const items2 = [tmp4.userRoundedCard, animatedStyle];
    cResult[5] = animatedStyle;
    cResult[6] = tmp4.userRoundedCard;
    cResult[7] = items2;
    tmp21 = items2;
  }
  const obj9 = { userId, guildId, location: "VoicePanelCard-native" };
  cResult[0] = guildId;
  cResult[1] = userId;
  cResult[2] = obj9;
  tmp8 = obj9;
}) : ((isRinging) => {
  let avatarDecoration;
  let avatarURI;
  let guildId;
  let items;
  let items1;
  let items2;
  let layout;
  let layoutPhysics;
  let tmp21Result;
  let tmp21Result2;
  let userId;
  isRinging = isRinging.isRinging;
  ({ layout, avatarURI, avatarDecoration, layoutPhysics } = isRinging);
  let mode;
  ({ userId, guildId } = isRinging);
  const tmp = closure_29();
  mode = react.useContext(layoutPhysics(mode[27])).mode;
  let obj = isRinging(mode[36]);
  const dominantColorFromImage = obj.useDominantColorFromImage(avatarURI);
  const tmp6 = layoutPhysics(mode[37])({ userId, guildId, location: "VoicePanelCard-native" });
  let str = "transparent";
  if (null == tmp6) {
    str = dominantColorFromImage;
  }
  const fn = function _() {
    let num = 1;
    const withTiming = timing.withTiming;
    timing;
    if (isRinging) {
      num = c28;
    }
    const obj = { opacity: withTiming(num, { duration: 100 }, "animate-always"), backgroundColor: str };
    return obj;
  };
  const tmp4Result = isRinging(mode[14]);
  const obj2 = { withTiming: tmp4(tmp3[38]).withTiming, isRinging, CONNECTING_OPACITY, solidBackgroundColor: str };
  fn.__closure = obj2;
  fn.__workletHash = 8753835850480;
  fn.__initData = __initData8;
  const animatedStyle = tmp4Result.useAnimatedStyle(fn);
  const fn2 = function f() {
    let items;
    const withSpring = spring.withSpring;
    let num = 1;
    spring;
    if (mode.get() === constants.PIP) {
      num = 0.8;
    }
    const obj = { transform: items };
    items = [{ scale: withSpring(num, layoutPhysics) }];
    ({ scale: withSpring(num, layoutPhysics) });
    return obj;
  };
  const tmp4Result3 = isRinging(mode[14]);
  fn2.__closure = { withSpring: isRinging(mode[39]).withSpring, mode, VoicePanelModes, layoutPhysics };
  fn2.__workletHash = 10965423163748;
  fn2.__initData = __initData9;
  let cachedSourceFromURI;
  ({ withSpring: isRinging(mode[39]).withSpring, mode, VoicePanelModes, layoutPhysics });
  const animatedStyle1 = tmp4Result3.useAnimatedStyle(fn2);
  if (null != avatarURI) {
    const tmp4Result4 = isRinging(mode[36]);
    cachedSourceFromURI = tmp4Result4.getCachedSourceFromURI(avatarURI);
  }
  const obj4 = { style: items, layout, children: items1 };
  items = [tmp.userRoundedCard, animatedStyle];
  let tmp12 = null;
  const tmp2Result = layoutPhysics(mode[41]);
  if (null != tmp6) {
    const obj5 = { colors: tmp6, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, style: StyleSheet.absoluteFill, layout, pointerEvents: "none" };
    tmp12 = closure_20(LinearGradient, obj5);
  }
  items1 = [tmp12, ];
  if (null == cachedSourceFromURI) {
    const obj6 = { style: tmp.avatarPlaceholder };
    tmp21Result2 = closure_20(layoutPhysics(tmp3[24]), obj6);
  } else {
    let prop;
    const tmp2Result2 = layoutPhysics(mode[41]);
    if (null == avatarDecoration) {
      prop = tmp.avatarImageMaskStyles;
    }
    const obj7 = { style: items2, layout, children: tmp21Result };
    items2 = [prop, animatedStyle1];
    if (null != avatarDecoration) {
      const obj8 = { source: cachedSourceFromURI, size: isRinging(mode[17]).AvatarSizes.XXLARGE, avatarDecoration };
      const Avatar = tmp4(tmp3[17]).Avatar;
      tmp21Result = closure_20(Avatar, obj8);
    } else {
      size = { source: cachedSourceFromURI, resizeMode: "stretch", width: 80, height: 80, style: tmp.image };
      tmp21Result = closure_20(layoutPhysics(tmp3[40]), size);
    }
    tmp21Result2 = closure_20(tmp2Result2, obj7);
  }
  items1[1] = tmp21Result2;
  return closure_22(tmp2Result, obj4);
}));
const __initData10 = { code: "function VoicePanelCardTsx11(){const{mode,VoicePanelModes,focused,id,withSpring,computeCardBorderRadius,isSelf,defaultBorderRadius,SPEAKING_PHYSICS}=this.__closure;var _focused$get,_focused$get2;const disable=mode.get()!==VoicePanelModes.PIP&&((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;return{opacity:disable?0:1,borderRadius:withSpring(disable?0:computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius}),SPEAKING_PHYSICS,!disable?\"animate-always\":\"animate-never\")};}" };
const __initData11 = { code: "function VoicePanelCardTsx12(){const{mode,VoicePanelModes,focused,id,withSpring,computeCardBorderRadius,isSelf,defaultBorderRadius,SPEAKING_PHYSICS,speaking,roundToNearestPixel,SPEAKING_BORDER_SIZE,SPEAKING_INSET}=this.__closure;var _focused$get,_focused$get2;const disable_0=mode.get()===VoicePanelModes.PIP||((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;return{borderRadius:withSpring(!disable_0?computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius}):0,SPEAKING_PHYSICS,!disable_0?\"animate-always\":\"animate-never\"),borderWidth:withSpring(!disable_0&&speaking.get()?roundToNearestPixel(SPEAKING_BORDER_SIZE+SPEAKING_INSET):0,SPEAKING_PHYSICS,!disable_0?\"animate-always\":\"animate-never\")};}" };
const __initData12 = { code: "function VoicePanelCardTsx13(){const{mode,VoicePanelModes,focused,id,withSpring,computeCardBorderRadius,isSelf,defaultBorderRadius,SPEAKING_PHYSICS,speaking,SPEAKING_BORDER_SIZE}=this.__closure;var _focused$get,_focused$get2;const disable_1=mode.get()===VoicePanelModes.PIP||((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;return{borderRadius:withSpring(!disable_1?computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius}):0,SPEAKING_PHYSICS,!disable_1?\"animate-always\":\"animate-never\"),borderWidth:withSpring(!disable_1&&speaking.get()?SPEAKING_BORDER_SIZE:0,SPEAKING_PHYSICS,!disable_1?\"animate-always\":\"animate-never\")};}" };
const __initData13 = { code: "function VoicePanelCardTsx14(){const{mode,VoicePanelModes,focused,id,withSpring,computeCardBorderRadius,isSelf,defaultBorderRadius,SPEAKING_PHYSICS}=this.__closure;var _focused$get,_focused$get2;const disable=mode.get()!==VoicePanelModes.PIP&&((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;return{opacity:disable?0:1,borderRadius:withSpring(disable?0:computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius}),SPEAKING_PHYSICS,!disable?'animate-always':'animate-never')};}" };
const __initData14 = { code: "function VoicePanelCardTsx15(){const{mode,VoicePanelModes,focused,id,withSpring,computeCardBorderRadius,isSelf,defaultBorderRadius,SPEAKING_PHYSICS,speaking,roundToNearestPixel,SPEAKING_BORDER_SIZE,SPEAKING_INSET}=this.__closure;var _focused$get,_focused$get2;const disable_0=mode.get()===VoicePanelModes.PIP||((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;return{borderRadius:withSpring(!disable_0?computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius}):0,SPEAKING_PHYSICS,!disable_0?'animate-always':'animate-never'),borderWidth:withSpring(!disable_0&&speaking.get()?roundToNearestPixel(SPEAKING_BORDER_SIZE+SPEAKING_INSET):0,SPEAKING_PHYSICS,!disable_0?'animate-always':'animate-never')};}" };
const __initData15 = { code: "function VoicePanelCardTsx16(){const{mode,VoicePanelModes,focused,id,withSpring,computeCardBorderRadius,isSelf,defaultBorderRadius,SPEAKING_PHYSICS,speaking,SPEAKING_BORDER_SIZE}=this.__closure;var _focused$get,_focused$get2;const disable_1=mode.get()===VoicePanelModes.PIP||((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;return{borderRadius:withSpring(!disable_1?computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius}):0,SPEAKING_PHYSICS,!disable_1?'animate-always':'animate-never'),borderWidth:withSpring(!disable_1&&speaking.get()?SPEAKING_BORDER_SIZE:0,SPEAKING_PHYSICS,!disable_1?'animate-always':'animate-never')};}" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_49 = ReactCompilerGating.isReactCompilerEnabled() ? ((id) => {
  let focused;
  let isSelf;
  let items;
  let speaking;
  let userId;
  let tmp = id;
  const obj = id(speaking[21]);
  const cResult = obj.c(26);
  id = id.id;
  ({ userId, isSelf } = id);
  speaking = id.speaking;
  const layout = id.layout;
  const context = focused.useContext(isSelf(speaking[27]));
  const mode = context.mode;
  focused = context.focused;
  const guildId = context.guildId;
  const tmp6 = closure_29();
  let obj2 = id(speaking[42]);
  const token = obj2.useToken(isSelf(speaking[19]).modules.mobile.VOICE_TILE_BORDER_RADIUS);
  if (cResult[0] === guildId) {
    let tmp8;
    if (cResult[1] === userId) {
      tmp8 = cResult[2];
    }
    const tmpResult = tmp(speaking[43]);
    const avatarSpeakingColor = tmpResult.useAvatarSpeakingColor(tmp8);
    const tmpResult4 = tmp(speaking[14]);
    class C {
      constructor() {
        let id1;
        let num2;
        let str;
        let withSpring;
        let tmp = mode.get() !== constants.PIP;
        if (tmp) {
          const value = focused.get();
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
        const obj2 = { opacity: num, borderRadius: withSpring(num2, closure_12, str) };
        num2 = 0;
        withSpring = spring.withSpring;
        spring;
        if (!tmp) {
          const obj3 = { id, mode: mode.get(), focused: id1, isSelf, defaultBorderRadius: token };
          const tmp10 = computeCardBorderRadiusDefault;
          const value2 = focused.get();
          id1 = undefined;
          if (value2 != null) {
            id1 = value2.id;
          }
          num2 = tmp10(obj3);
        }
        str = "animate-always";
        if (tmp) {
          str = "animate-never";
        }
        return obj2;
      }
    }
    let obj3 = { mode, VoicePanelModes, focused, id, withSpring: tmp(speaking[39]).withSpring, computeCardBorderRadius: isSelf(speaking[44]), isSelf, defaultBorderRadius: token, SPEAKING_PHYSICS };
    const useAnimatedStyle = tmpResult4.useAnimatedStyle;
    C.__closure = obj3;
    let num = 11554900074499;
    C.__workletHash = 11554900074499;
    C.__initData = __initData10;
    const animatedStyle = useAnimatedStyle(C);
    const tmpResult5 = tmp(speaking[14]);
    class E {
      constructor() {
        let id1;
        let num2;
        let withSpring2;
        let tmp = mode.get() === constants.PIP;
        if (!tmp) {
          const value = focused.get();
          id = undefined;
          if (value != null) {
            id = value.id;
          }
          tmp = id === id;
        }
        let num = 0;
        const withSpring = spring.withSpring;
        spring;
        if (!tmp) {
          const obj2 = { id, mode: mode.get(), focused: id1, isSelf, defaultBorderRadius: token };
          const tmp11 = computeCardBorderRadiusDefault;
          const value2 = focused.get();
          id1 = undefined;
          if (value2 != null) {
            id1 = value2.id;
          }
          num = tmp11(obj2);
        }
        let str = "animate-always";
        let str2 = "animate-always";
        if (tmp) {
          str2 = "animate-never";
        }
        const obj3 = { borderRadius: withSpring(num, closure_12, str2), borderWidth: withSpring2(num2, closure_12, str) };
        num2 = 0;
        withSpring2 = spring.withSpring;
        spring;
        if (!tmp) {
          num2 = 0;
          if (speaking.get()) {
            num2 = roundToNearestPixelDefault(5);
          }
        }
        if (tmp) {
          str = "animate-never";
        }
        return obj3;
      }
    }
    const useAnimatedStyle2 = tmpResult5.useAnimatedStyle;
    E.__closure = { mode, VoicePanelModes, focused, id, withSpring: tmp(speaking[39]).withSpring, computeCardBorderRadius: isSelf(speaking[44]), isSelf, defaultBorderRadius: token, SPEAKING_PHYSICS, speaking, roundToNearestPixel: isSelf(speaking[45]), SPEAKING_BORDER_SIZE: 3, SPEAKING_INSET: 2 };
    let num2 = 9044857468643;
    E.__workletHash = 9044857468643;
    E.__initData = __initData11;
    const obj4 = { mode, VoicePanelModes, focused, id, withSpring: tmp(speaking[39]).withSpring, computeCardBorderRadius: isSelf(speaking[44]), isSelf, defaultBorderRadius: token, SPEAKING_PHYSICS, speaking, roundToNearestPixel: isSelf(speaking[45]), SPEAKING_BORDER_SIZE: 3, SPEAKING_INSET: 2 };
    const animatedStyle2 = useAnimatedStyle2(E);
    const fn = function b() {
      let id1;
      let num2;
      let withSpring2;
      let tmp = mode.get() === constants.PIP;
      if (!tmp) {
        const value = focused.get();
        id = undefined;
        if (value != null) {
          id = value.id;
        }
        tmp = id === id;
      }
      let num = 0;
      const withSpring = spring.withSpring;
      spring;
      if (!tmp) {
        const obj2 = { id, mode: mode.get(), focused: id1, isSelf, defaultBorderRadius: token };
        const tmp11 = computeCardBorderRadiusDefault;
        const value2 = focused.get();
        id1 = undefined;
        if (value2 != null) {
          id1 = value2.id;
        }
        num = tmp11(obj2);
      }
      let str = "animate-always";
      let str2 = "animate-always";
      if (tmp) {
        str2 = "animate-never";
      }
      const obj3 = { borderRadius: withSpring(num, closure_12, str2), borderWidth: withSpring2(num2, closure_12, str) };
      num2 = 0;
      withSpring2 = spring.withSpring;
      spring;
      if (!tmp) {
        num2 = 0;
        if (speaking.get()) {
          num2 = 3;
        }
      }
      if (tmp) {
        str = "animate-never";
      }
      return obj3;
    };
    const obj5 = { mode, VoicePanelModes, focused, id, withSpring: tmp(speaking[39]).withSpring, computeCardBorderRadius: isSelf(speaking[44]), isSelf, defaultBorderRadius: token, SPEAKING_PHYSICS, speaking, SPEAKING_BORDER_SIZE: 3 };
    const useAnimatedStyle3 = tmp(speaking[14]).useAnimatedStyle;
    tmp(speaking[14]);
    fn.__closure = obj5;
    fn.__workletHash = 382845800969;
    fn.__initData = __initData12;
    const animatedStyle3 = useAnimatedStyle3(fn);
    if (cResult[3] === tmp6.speakingIndicatorWrapper) {
      let tmp21;
      if (cResult[4] === animatedStyle) {
        tmp21 = cResult[5];
      }
      if (cResult[6] === tmp6.speakingIndicatorUnderlay) {
        let tmp22;
        if (cResult[7] === animatedStyle2) {
          tmp22 = cResult[8];
        }
        if (cResult[9] === layout) {
          let tmp23;
          let tmp26;
          if (cResult[10] === tmp22) {
            tmp23 = cResult[11];
          }
          if (cResult[12] !== avatarSpeakingColor) {
            const obj6 = { borderColor: avatarSpeakingColor };
            cResult[12] = avatarSpeakingColor;
            class C {
              constructor() {
                let id1;
                let num2;
                let str;
                let withSpring;
                let tmp = mode.get() !== constants.PIP;
                if (tmp) {
                  const value = focused.get();
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
                const obj2 = { opacity: num, borderRadius: withSpring(num2, closure_12, str) };
                num2 = 0;
                withSpring = spring.withSpring;
                spring;
                if (!tmp) {
                  const obj3 = { id, mode: mode.get(), focused: id1, isSelf, defaultBorderRadius: token };
                  const tmp10 = computeCardBorderRadiusDefault;
                  const value2 = focused.get();
                  id1 = undefined;
                  if (value2 != null) {
                    id1 = value2.id;
                  }
                  num2 = tmp10(obj3);
                }
                str = "animate-always";
                if (tmp) {
                  str = "animate-never";
                }
                return obj2;
              }
            }
            cResult[13] = obj6;
            tmp26 = obj6;
          } else {
            tmp26 = cResult[13];
          }
          if (cResult[14] === animatedStyle3) {
            if (cResult[15] === tmp6.speakingIndicatorBar) {
              let tmp27;
              if (cResult[16] === tmp26) {
                tmp27 = cResult[17];
              }
              if (cResult[18] === layout) {
                let tmp28;
                if (cResult[19] === tmp27) {
                  tmp28 = cResult[20];
                }
                if (cResult[21] === layout) {
                  if (cResult[22] === tmp21) {
                    if (cResult[23] === tmp23) {
                      let tmp31;
                      if (cResult[24] === tmp28) {
                        tmp31 = cResult[25];
                      }
                      return tmp31;
                    }
                  }
                }
                const obj7 = { style: null, layout, pointerEvents: "none", children: items };
                class C {
                  constructor() {
                    let id1;
                    let num2;
                    let str;
                    let withSpring;
                    let tmp = mode.get() !== constants.PIP;
                    if (tmp) {
                      const value = focused.get();
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
                    const obj2 = { opacity: num, borderRadius: withSpring(num2, closure_12, str) };
                    num2 = 0;
                    withSpring = spring.withSpring;
                    spring;
                    if (!tmp) {
                      const obj3 = { id, mode: mode.get(), focused: id1, isSelf, defaultBorderRadius: token };
                      const tmp10 = computeCardBorderRadiusDefault;
                      const value2 = focused.get();
                      id1 = undefined;
                      if (value2 != null) {
                        id1 = value2.id;
                      }
                      num2 = tmp10(obj3);
                    }
                    str = "animate-always";
                    if (tmp) {
                      str = "animate-never";
                    }
                    return obj2;
                  }
                }
                items = [tmp23, tmp28];
                const tmp33 = closure_22(isSelf(speaking[41]), obj7);
                cResult[21] = layout;
                cResult[22] = tmp21;
                cResult[23] = tmp23;
                cResult[24] = tmp28;
                cResult[25] = tmp33;
                tmp31 = tmp33;
              }
              const obj8 = { style: null, layout };
              class C {
                constructor() {
                  let id1;
                  let num2;
                  let str;
                  let withSpring;
                  let tmp = mode.get() !== constants.PIP;
                  if (tmp) {
                    const value = focused.get();
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
                  const obj2 = { opacity: num, borderRadius: withSpring(num2, closure_12, str) };
                  num2 = 0;
                  withSpring = spring.withSpring;
                  spring;
                  if (!tmp) {
                    const obj3 = { id, mode: mode.get(), focused: id1, isSelf, defaultBorderRadius: token };
                    const tmp10 = computeCardBorderRadiusDefault;
                    const value2 = focused.get();
                    id1 = undefined;
                    if (value2 != null) {
                      id1 = value2.id;
                    }
                    num2 = tmp10(obj3);
                  }
                  str = "animate-always";
                  if (tmp) {
                    str = "animate-never";
                  }
                  return obj2;
                }
              }
              const tmp30 = closure_20(isSelf(speaking[41]), obj8);
              cResult[18] = layout;
              cResult[19] = tmp27;
              cResult[20] = tmp30;
              tmp28 = tmp30;
            }
          }
          const items1 = [, , ];
          class C {
            constructor() {
              let id1;
              let num2;
              let str;
              let withSpring;
              let tmp = mode.get() !== constants.PIP;
              if (tmp) {
                const value = focused.get();
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
              const obj2 = { opacity: num, borderRadius: withSpring(num2, closure_12, str) };
              num2 = 0;
              withSpring = spring.withSpring;
              spring;
              if (!tmp) {
                const obj3 = { id, mode: mode.get(), focused: id1, isSelf, defaultBorderRadius: token };
                const tmp10 = computeCardBorderRadiusDefault;
                const value2 = focused.get();
                id1 = undefined;
                if (value2 != null) {
                  id1 = value2.id;
                }
                num2 = tmp10(obj3);
              }
              str = "animate-always";
              if (tmp) {
                str = "animate-never";
              }
              return obj2;
            }
          }
          items1[1] = tmp26;
          items1[2] = animatedStyle3;
          cResult[14] = animatedStyle3;
          cResult[15] = tmp6.speakingIndicatorBar;
          cResult[16] = tmp26;
          cResult[17] = items1;
          tmp27 = items1;
        }
        const obj9 = { style: null, layout };
        class C {
          constructor() {
            let id1;
            let num2;
            let str;
            let withSpring;
            let tmp = mode.get() !== constants.PIP;
            if (tmp) {
              const value = focused.get();
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
            const obj2 = { opacity: num, borderRadius: withSpring(num2, closure_12, str) };
            num2 = 0;
            withSpring = spring.withSpring;
            spring;
            if (!tmp) {
              const obj3 = { id, mode: mode.get(), focused: id1, isSelf, defaultBorderRadius: token };
              const tmp10 = computeCardBorderRadiusDefault;
              const value2 = focused.get();
              id1 = undefined;
              if (value2 != null) {
                id1 = value2.id;
              }
              num2 = tmp10(obj3);
            }
            str = "animate-always";
            if (tmp) {
              str = "animate-never";
            }
            return obj2;
          }
        }
        const tmp25 = closure_20(isSelf(speaking[41]), obj9);
        cResult[9] = layout;
        cResult[10] = tmp22;
        cResult[11] = tmp25;
        tmp23 = tmp25;
      }
      const items2 = [tmp6.speakingIndicatorUnderlay, ];
      class C {
        constructor() {
          let id1;
          let num2;
          let str;
          let withSpring;
          let tmp = mode.get() !== constants.PIP;
          if (tmp) {
            const value = focused.get();
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
          const obj2 = { opacity: num, borderRadius: withSpring(num2, closure_12, str) };
          num2 = 0;
          withSpring = spring.withSpring;
          spring;
          if (!tmp) {
            const obj3 = { id, mode: mode.get(), focused: id1, isSelf, defaultBorderRadius: token };
            const tmp10 = computeCardBorderRadiusDefault;
            const value2 = focused.get();
            id1 = undefined;
            if (value2 != null) {
              id1 = value2.id;
            }
            num2 = tmp10(obj3);
          }
          str = "animate-always";
          if (tmp) {
            str = "animate-never";
          }
          return obj2;
        }
      }
      cResult[6] = tmp6.speakingIndicatorUnderlay;
      cResult[7] = animatedStyle2;
      cResult[8] = items2;
      tmp22 = items2;
    }
    const items3 = [tmp6.speakingIndicatorWrapper, animatedStyle];
    cResult[3] = tmp6.speakingIndicatorWrapper;
    cResult[4] = animatedStyle;
    cResult[5] = items3;
    tmp21 = items3;
  }
  const obj10 = { userId, guildId };
  cResult[0] = guildId;
  cResult[1] = userId;
  cResult[2] = obj10;
  tmp8 = obj10;
}) : ((id) => {
  let items;
  let items1;
  let items2;
  let items3;
  id = id.id;
  const isSelf = id.isSelf;
  const speaking = id.speaking;
  const layout = id.layout;
  let focused;
  const userId = id.userId;
  const context = focused.useContext(isSelf(speaking[27]));
  const mode = context.mode;
  focused = context.focused;
  const guildId = context.guildId;
  const tmp2 = closure_29();
  const obj = id(speaking[42]);
  const token = obj.useToken(isSelf(speaking[19]).modules.mobile.VOICE_TILE_BORDER_RADIUS);
  let obj2 = id(speaking[43]);
  const avatarSpeakingColor = obj2.useAvatarSpeakingColor({ userId, guildId });
  let obj3 = id(speaking[14]);
  const fn = function u() {
    let id1;
    let num2;
    let str;
    let withSpring;
    let tmp = mode.get() !== constants.PIP;
    if (tmp) {
      const value = focused.get();
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
    const obj2 = { opacity: num, borderRadius: withSpring(num2, closure_12, str) };
    num2 = 0;
    withSpring = spring.withSpring;
    spring;
    if (!tmp) {
      const obj3 = { id, mode: mode.get(), focused: id1, isSelf, defaultBorderRadius: token };
      const tmp10 = computeCardBorderRadiusDefault;
      const value2 = focused.get();
      id1 = undefined;
      if (value2 != null) {
        id1 = value2.id;
      }
      num2 = tmp10(obj3);
    }
    str = "animate-always";
    if (tmp) {
      str = "animate-never";
    }
    return obj2;
  };
  fn.__closure = { mode, VoicePanelModes, focused, id, withSpring: id(speaking[39]).withSpring, computeCardBorderRadius: isSelf(speaking[44]), isSelf, defaultBorderRadius: token, SPEAKING_PHYSICS };
  fn.__workletHash = 10993051977798;
  fn.__initData = __initData13;
  ({ mode, VoicePanelModes, focused, id, withSpring: id(speaking[39]).withSpring, computeCardBorderRadius: isSelf(speaking[44]), isSelf, defaultBorderRadius: token, SPEAKING_PHYSICS });
  const animatedStyle = obj3.useAnimatedStyle(fn);
  const fn2 = function h() {
    let id1;
    let num2;
    let withSpring2;
    let tmp = mode.get() === constants.PIP;
    if (!tmp) {
      const value = focused.get();
      id = undefined;
      if (value != null) {
        id = value.id;
      }
      tmp = id === id;
    }
    let num = 0;
    const withSpring = spring.withSpring;
    spring;
    if (!tmp) {
      const obj2 = { id, mode: mode.get(), focused: id1, isSelf, defaultBorderRadius: token };
      const tmp11 = computeCardBorderRadiusDefault;
      const value2 = focused.get();
      id1 = undefined;
      if (value2 != null) {
        id1 = value2.id;
      }
      num = tmp11(obj2);
    }
    let str = "animate-always";
    let str2 = "animate-always";
    if (tmp) {
      str2 = "animate-never";
    }
    const obj3 = { borderRadius: withSpring(num, closure_12, str2), borderWidth: withSpring2(num2, closure_12, str) };
    num2 = 0;
    withSpring2 = spring.withSpring;
    spring;
    if (!tmp) {
      num2 = 0;
      if (speaking.get()) {
        num2 = roundToNearestPixelDefault(5);
      }
    }
    if (tmp) {
      str = "animate-never";
    }
    return obj3;
  };
  const obj5 = id(speaking[14]);
  fn2.__closure = { mode, VoicePanelModes, focused, id, withSpring: id(speaking[39]).withSpring, computeCardBorderRadius: isSelf(speaking[44]), isSelf, defaultBorderRadius: token, SPEAKING_PHYSICS, speaking, roundToNearestPixel: isSelf(speaking[45]), SPEAKING_BORDER_SIZE: 3, SPEAKING_INSET: 2 };
  fn2.__workletHash = 492143708356;
  fn2.__initData = __initData14;
  ({ mode, VoicePanelModes, focused, id, withSpring: id(speaking[39]).withSpring, computeCardBorderRadius: isSelf(speaking[44]), isSelf, defaultBorderRadius: token, SPEAKING_PHYSICS, speaking, roundToNearestPixel: isSelf(speaking[45]), SPEAKING_BORDER_SIZE: 3, SPEAKING_INSET: 2 });
  const animatedStyle1 = obj5.useAnimatedStyle(fn2);
  const fn3 = function p() {
    let id1;
    let num2;
    let withSpring2;
    let tmp = mode.get() === constants.PIP;
    if (!tmp) {
      const value = focused.get();
      id = undefined;
      if (value != null) {
        id = value.id;
      }
      tmp = id === id;
    }
    let num = 0;
    const withSpring = spring.withSpring;
    spring;
    if (!tmp) {
      const obj2 = { id, mode: mode.get(), focused: id1, isSelf, defaultBorderRadius: token };
      const tmp11 = computeCardBorderRadiusDefault;
      const value2 = focused.get();
      id1 = undefined;
      if (value2 != null) {
        id1 = value2.id;
      }
      num = tmp11(obj2);
    }
    let str = "animate-always";
    let str2 = "animate-always";
    if (tmp) {
      str2 = "animate-never";
    }
    const obj3 = { borderRadius: withSpring(num, closure_12, str2), borderWidth: withSpring2(num2, closure_12, str) };
    num2 = 0;
    withSpring2 = spring.withSpring;
    spring;
    if (!tmp) {
      num2 = 0;
      if (speaking.get()) {
        num2 = 3;
      }
    }
    if (tmp) {
      str = "animate-never";
    }
    return obj3;
  };
  const obj7 = id(speaking[14]);
  fn3.__closure = { mode, VoicePanelModes, focused, id, withSpring: id(speaking[39]).withSpring, computeCardBorderRadius: isSelf(speaking[44]), isSelf, defaultBorderRadius: token, SPEAKING_PHYSICS, speaking, SPEAKING_BORDER_SIZE: 3 };
  fn3.__workletHash = 14974168975148;
  fn3.__initData = __initData15;
  ({ mode, VoicePanelModes, focused, id, withSpring: id(speaking[39]).withSpring, computeCardBorderRadius: isSelf(speaking[44]), isSelf, defaultBorderRadius: token, SPEAKING_PHYSICS, speaking, SPEAKING_BORDER_SIZE: 3 });
  const animatedStyle2 = obj7.useAnimatedStyle(fn3);
  const obj9 = { style: items, layout, pointerEvents: "none", children: items2 };
  items = [tmp2.speakingIndicatorWrapper, animatedStyle];
  const tmp8 = isSelf(speaking[41]);
  const obj10 = { style: items1, layout };
  items1 = [tmp2.speakingIndicatorUnderlay, animatedStyle1];
  items2 = [closure_20(isSelf(speaking[41]), obj10), ];
  const obj11 = { style: items3, layout };
  items3 = [tmp2.speakingIndicatorBar, { borderColor: avatarSpeakingColor }, animatedStyle2];
  items2[1] = closure_20(isSelf(speaking[41]), obj11);
  return closure_22(tmp8, obj9);
});
const memo2 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_50 = memo2(ReactCompilerGating.isReactCompilerEnabled() ? ((id) => {
  let closure_2;
  let speaking;
  let tmp2;
  _require = id;
  const obj = require("react");
  const cResult = obj.c(9);
  if (cResult[0] !== id.id) {
    const fn = function o() {
      return SpeakingStore.isSpeaking(id.id);
    };
    cResult[0] = id.id;
    cResult[1] = fn;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  const tmp3 = id(react.useState(tmp2), 2);
  const first = tmp3[0];
  dependencyMap = tmp3[1];
  id = id.id;
  if (cResult[2] === id) {
    let tmp5;
    let tmp6;
    if (cResult[3] === first) {
      tmp5 = cResult[4];
      tmp6 = cResult[5];
    }
    const effect = react.useEffect(tmp5, tmp6);
    if (cResult[6] === id) {
      let tmp8;
      if (cResult[7] === first) {
        tmp8 = cResult[8];
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
      let flag = false;
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
}) : ((id) => {
  let speaking;
  const tmp = id(react.useState(() => SpeakingStore.isSpeaking(id.id)), 2);
  const first = tmp[0];
  let closure_2 = tmp[1];
  id = id.id;
  const items = [first, id];
  const effect = react.useEffect(() => {
    if (!first) {
      let flag = false;
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
    const obj = {};
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
ReactCompilerGating = ReactCompilerGating_mod;
let closure_59 = ReactCompilerGating.isReactCompilerEnabled() ? ((id) => {
  let closure_9;
  let tmp4;
  let transitionState;
  let type;
  let obj = id(transitionState[21]);
  const cResult = obj.c(6);
  id = id.id;
  ({ participant: importDefault, transitionState } = id);
  const cleanUp = id.cleanUp;
  let mode = id.mode;
  const focused = id.focused;
  const isScrollVisible = id.isScrollVisible;
  const sharedVisible = id.sharedVisible;
  const obj2 = id(transitionState[14]);
  const sharedValue = obj2.useSharedValue(transitionState);
  const tmp3 = cleanUp(mode.useState(true), 2);
  [tmp4, closure_9] = tmp3;
  function handleFocusedParticipantChange(arg0) {
    importDefault = undefined;
    if (importDefault != null) {
      importDefault = importDefault.type;
    }
    if (importDefault === ParticipantTypes.ACTIVITY) {
      constants(arg0 !== id);
    }
  }
  const fn = function l() {
    const value = focused.get();
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
      const obj = ReanimatedRexport2;
      obj.runOnJS(handleFocusedParticipantChange)(arg0);
    }
  };
  const obj4 = id(transitionState[14]);
  fn2.__closure = { runOnJS: id(transitionState[14]).runOnJS, handleFocusedParticipantChange };
  fn2.__workletHash = 17532866120556;
  fn2.__initData = __initData17;
  ({ runOnJS: id(transitionState[14]).runOnJS, handleFocusedParticipantChange });
  const animatedReaction = obj4.useAnimatedReaction(fn, fn2);
  const fn3 = function u() {
    const obj = { mode: mode.get(), focused: focused.get(), transitionState: sharedValue.get() };
    return obj;
  };
  fn3.__closure = { mode, focused, sharedTransitionState: sharedValue };
  fn3.__workletHash = 16460342773567;
  fn3.__initData = __initData18;
  const fn4 = function c(mode, transitionState) {
    const cheapWorkletShallowEqual = cheapWorkletShallowEqual2.cheapWorkletShallowEqual;
    cheapWorkletShallowEqual2;
    const tmp4 = transitionState;
    if (!cheapWorkletShallowEqual(mode, tmp4)) {
      ({ focused, transitionState } = mode);
      mode = mode.mode;
      const PIP = handleFocusedParticipantChange.PIP;
      if (focused != null) {
        id = focused.id;
      }
      if (null == transitionState) {
        if (transitionState !== native2.TransitionStates.YEETED) {
          const result = sharedVisible.set(1);
        }
      }
      if (transitionState === native2.TransitionStates.YEETED) {
        if (1 === sharedVisible.get()) {
          if (isScrollVisible.get()) {
            const result1 = sharedVisible.set(0);
          }
        }
        const tmpResult = ReanimatedRexport2;
        tmpResult.runOnJS(cleanUp)();
      } else {
        let transitionState1;
        if (transitionState != null) {
          transitionState1 = transitionState.transitionState;
        }
        if (transitionState1 === native2.TransitionStates.YEETED) {
          const result2 = sharedVisible.set(1);
        } else if (mode !== PIP) {
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
  };
  const obj6 = id(transitionState[14]);
  fn4.__closure = { cheapWorkletShallowEqual: id(transitionState[46]).cheapWorkletShallowEqual, VoicePanelModes: handleFocusedParticipantChange, TransitionStates: id(transitionState[47]).TransitionStates, sharedVisible, isScrollVisible, runOnJS: id(transitionState[14]).runOnJS, cleanUp, id };
  fn4.__workletHash = 14989414495662;
  fn4.__initData = __initData19;
  ({ cheapWorkletShallowEqual: id(transitionState[46]).cheapWorkletShallowEqual, VoicePanelModes: handleFocusedParticipantChange, TransitionStates: id(transitionState[47]).TransitionStates, sharedVisible, isScrollVisible, runOnJS: id(transitionState[14]).runOnJS, cleanUp, id });
  const animatedReaction1 = obj6.useAnimatedReaction(fn3, fn4);
  const obj3 = mode;
  if (cResult[0] === sharedValue) {
    let tmp7;
    if (cResult[1] === transitionState) {
      tmp7 = cResult[2];
    }
    const layoutEffect = obj3.useLayoutEffect(tmp7);
    if (cResult[3] === tmp4) {
      let tmp9;
      if (cResult[4] === sharedValue) {
        tmp9 = cResult[5];
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
}) : ((id) => {
  let callback;
  id = id.id;
  const participant = id.participant;
  const transitionState = id.transitionState;
  const cleanUp = id.cleanUp;
  let mode = id.mode;
  const focused = id.focused;
  const isScrollVisible = id.isScrollVisible;
  const sharedVisible = id.sharedVisible;
  VoicePanelModes = undefined;
  let obj = id(transitionState[14]);
  const sharedTransitionState = obj.useSharedValue(transitionState);
  let tmp4 = cleanUp(mode.useState(true), 2);
  let closure_9 = tmp4[1];
  let type;
  const cardGestureEnabled = tmp4[0];
  const obj2 = mode;
  const useCallback = mode.useCallback;
  if (participant != null) {
    type = participant.type;
  }
  const items = [type, id];
  VoicePanelModes = useCallback((arg0) => {
    let type;
    if (participant != null) {
      type = participant.type;
    }
    if (type === ParticipantTypes.ACTIVITY) {
      closure_9(arg0 !== id);
    }
  }, items);
  let tmpResult = tmp(tmp2[14]);
  class P {
    constructor() {
      const value = focused.get();
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
      const obj = ReanimatedRexport2;
      obj.runOnJS(callback)(arg0);
    }
  };
  fn.__closure = { runOnJS: id(transitionState[14]).runOnJS, handleFocusedParticipantChange: VoicePanelModes };
  fn.__workletHash = 9126813650947;
  fn.__initData = __initData21;
  ({ runOnJS: id(transitionState[14]).runOnJS, handleFocusedParticipantChange: VoicePanelModes });
  const animatedReaction = tmpResult.useAnimatedReaction(P, fn);
  const tmpResult2 = id(transitionState[14]);
  class I {
    constructor() {
      const obj = { mode: mode.get(), focused: focused.get(), transitionState: sharedTransitionState.get() };
      return obj;
    }
  }
  I.__closure = { mode, focused, sharedTransitionState };
  I.__workletHash = 653803491766;
  I.__initData = __initData22;
  const fn2 = function w(mode, transitionState) {
    const cheapWorkletShallowEqual = cheapWorkletShallowEqual2.cheapWorkletShallowEqual;
    cheapWorkletShallowEqual2;
    const tmp4 = transitionState;
    if (!cheapWorkletShallowEqual(mode, tmp4)) {
      ({ focused, transitionState } = mode);
      mode = mode.mode;
      const PIP = c10.PIP;
      if (focused != null) {
        id = focused.id;
      }
      if (null == transitionState) {
        if (transitionState !== native2.TransitionStates.YEETED) {
          const result = sharedVisible.set(1);
        }
      }
      if (transitionState === native2.TransitionStates.YEETED) {
        if (1 === sharedVisible.get()) {
          if (isScrollVisible.get()) {
            const result1 = sharedVisible.set(0);
          }
        }
        const tmpResult = ReanimatedRexport2;
        tmpResult.runOnJS(cleanUp)();
      } else {
        let transitionState1;
        if (transitionState != null) {
          transitionState1 = transitionState.transitionState;
        }
        if (transitionState1 === native2.TransitionStates.YEETED) {
          const result2 = sharedVisible.set(1);
        } else if (mode !== PIP) {
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
  };
  fn2.__closure = { cheapWorkletShallowEqual: id(transitionState[46]).cheapWorkletShallowEqual, VoicePanelModes, TransitionStates: id(transitionState[47]).TransitionStates, sharedVisible, isScrollVisible, runOnJS: id(transitionState[14]).runOnJS, cleanUp, id };
  fn2.__workletHash = 751243994154;
  fn2.__initData = __initData23;
  ({ cheapWorkletShallowEqual: id(transitionState[46]).cheapWorkletShallowEqual, VoicePanelModes, TransitionStates: id(transitionState[47]).TransitionStates, sharedVisible, isScrollVisible, runOnJS: id(transitionState[14]).runOnJS, cleanUp, id });
  const animatedReaction1 = tmpResult2.useAnimatedReaction(I, fn2);
  const layoutEffect = obj2.useLayoutEffect(() => {
    const result = sharedTransitionState.set(transitionState);
  });
  return { sharedTransitionState, cardGestureEnabled };
});
let closure_60 = { isSelf: false, hasVideo: false, user: { id: "r" } };
function layoutTransitionFunction(originX, connected, scale, sharedValue1) {
  let str3;
  let str4;
  let targetHeight;
  let targetOriginY;
  let targetWidth;
  let withSpring2;
  let withSpring3;
  let withSpring4;
  let closure_0 = scale;
  let closure_1 = sharedValue1;
  const value = scale.get();
  let result = value / sharedValue1.get();
  let str = "animate-always";
  let str2 = "animate-always";
  const withSpring = spring.withSpring;
  const targetOriginX = originX.targetOriginX;
  spring;
  if (flag) {
    str2 = "animate-never";
  }
  size = { originX: withSpring(targetOriginX, connected, str2), originY: withSpring2(targetOriginY, connected, str3), width: withSpring3(targetWidth, connected, str4), height: withSpring4(targetHeight, connected, str) };
  str3 = str;
  withSpring2 = spring.withSpring;
  targetOriginY = originX.targetOriginY;
  spring;
  if (flag) {
    str3 = "animate-never";
  }
  str4 = str;
  withSpring3 = spring.withSpring;
  targetWidth = originX.targetWidth;
  spring;
  if (flag) {
    str4 = "animate-never";
  }
  withSpring4 = spring.withSpring;
  targetHeight = originX.targetHeight;
  spring;
  if (flag) {
    str = "animate-never";
  }
  return {
    animations: size,
    initialValues: { originX: originX.currentOriginX, originY: originX.currentOriginY, width: originX.currentWidth * result, height: originX.currentHeight * result },
    callback() {
      const result = closure_1.set(closure_0.get());
    }
  };
}
let obj8 = { withSpring: spring.withSpring };
layoutTransitionFunction.__closure = obj8;
layoutTransitionFunction.__workletHash = 4828663868420;
layoutTransitionFunction.__initData = { code: "function layoutTransitionFunction_VoicePanelCardTsx25(values,physics,scale,lastScale,disableAnimation=false){const{withSpring}=this.__closure;const scaleAdjustment=scale.get()/lastScale.get();return{animations:{originX:withSpring(values.targetOriginX,physics,!disableAnimation?'animate-always':'animate-never'),originY:withSpring(values.targetOriginY,physics,!disableAnimation?'animate-always':'animate-never'),width:withSpring(values.targetWidth,physics,!disableAnimation?'animate-always':'animate-never'),height:withSpring(values.targetHeight,physics,!disableAnimation?'animate-always':'animate-never')},initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth*scaleAdjustment,height:values.currentHeight*scaleAdjustment},callback:function(){lastScale.set(scale.get());}};}" };
const __initData24 = { code: "function VoicePanelCardTsx26(){const{id,pipState,mode,VoicePanelModes}=this.__closure;if(id===pipState.id&&mode.get()===VoicePanelModes.PIP){return true;}return false;}" };
const __initData25 = { code: "function VoicePanelCardTsx27(){const{focused,id,mode,VoicePanelModes,scrollPosition}=this.__closure;var _focused$get;return((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id||mode.get()===VoicePanelModes.PIP?scrollPosition.get():0;}" };
const __initData26 = { code: "function VoicePanelCardTsx28(){const{connected,EDGE_GUTTER,safeArea,windowDimensions,contentDimensions,wrapperDimensions}=this.__closure;return connected.get()?Math.max(EDGE_GUTTER,safeArea.get().left,(windowDimensions.get().width-contentDimensions.get().width)/2):wrapperDimensions.get().drawerWidth/2;}" };
const __initData27 = { code: "function VoicePanelCardTsx29(){const{coords,focused,id,isPIP,pipState,getScaledPIPContainerHeight,getClampedPIPPosition,wrapperDimensions,windowDimensions,safeArea,pipAvoidanceSpecs,derivedScrollValue,xOffset,calculateContentCenterOffset,contentDimensions,sharedTransitionState,TransitionStates,zIndexOverride,computeCardBorderRadius,mode,isSelf,defaultBorderRadius,sharedVisible,isRTCConnected,CONNECTING_OPACITY,wrapperOffset,withDelay,withTiming,ZINDEX_TIMING,OPACITY_TIMING,isScrollVisible,runOnJS,cleanUp,withSpring,layoutPhysics,CARD_SCALE_PHYSICS,SCALE_PHYSICS}=this.__closure;var _focused$get,_focused$get2,_focused$get3,_focused$get4;let{zIndex:zIndex,width:width,height:height,x:x,y:y}=coords.get();const isFocused=((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;if(isPIP){const pipScale=pipState.scale.get();width=pipState.width*pipScale;height=pipState.height*pipScale;const pipHeight=getScaledPIPContainerHeight({height:pipState.height,containerHeight:pipState.containerHeight,showSecondaryPIP:pipState.showSecondaryPIP,scale:pipScale});const pipPosition=getClampedPIPPosition({pipX:wrapperDimensions.get().pipX,pipY:wrapperDimensions.get().pipY,width:width,height:pipHeight,windowDimensions:windowDimensions.get(),safeArea:safeArea.get(),bottomAvoidanceRegion:pipAvoidanceSpecs.get().bottom,topAvoidanceRegion:pipAvoidanceSpecs.get().top});x=pipPosition.x;y=derivedScrollValue.get()+pipPosition.y;}else{if(focused.get()!=null){if(isFocused){zIndex=1;width=windowDimensions.get().width;height=windowDimensions.get().height;x=0;y=derivedScrollValue.get();}else{zIndex=0;}}else{x=x+xOffset.get();y=y+calculateContentCenterOffset({contentHeight:contentDimensions.get().height,windowHeight:windowDimensions.get().height,safeArea:safeArea.get()});if(sharedTransitionState.get()===TransitionStates.YEETED){y=y+height/4;}}}if(zIndexOverride.get()){zIndex=9001;}const borderRadius=computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius});const opacity=sharedVisible.get()===0&&((_focused$get3=focused.get())===null||_focused$get3===void 0?void 0:_focused$get3.id)!==id?0:!isFocused&&!isRTCConnected?CONNECTING_OPACITY:1;const gestureActive=wrapperOffset.get().gestureActive;const scaleTarget=sharedVisible.get()===1||((_focused$get4=focused.get())===null||_focused$get4===void 0?void 0:_focused$get4.id)===id?1:0.8;return{zIndex:withDelay(zIndexOverride.get()?0:100,withTiming(zIndex,ZINDEX_TIMING)),opacity:withTiming(opacity,OPACITY_TIMING,isScrollVisible.get()?\"animate-always\":\"animate-never\",function(finished){if(finished&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){runOnJS(cleanUp)();}}),width:width,height:height,transform:[{translateX:gestureActive?x:withSpring(x,layoutPhysics,\"animate-always\")},{translateY:gestureActive?y:withSpring(y,layoutPhysics,\"animate-always\")},{scale:withSpring(scaleTarget,CARD_SCALE_PHYSICS)}],borderRadius:withSpring(borderRadius,SCALE_PHYSICS)};}" };
let closure_66 = { code: "function VoicePanelCardTsx30(finished){const{sharedVisible,sharedTransitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){runOnJS(cleanUp)();}}" };
const __initData28 = { code: "function VoicePanelCardTsx31(finished_0){const{runOnJS,reportPIPArrival}=this.__closure;if(finished_0===true){runOnJS(reportPIPArrival)();}}" };
const __initData29 = { code: "function VoicePanelCardTsx32(values){const{pipState,lastPIPScale,withSpring,layoutPhysics,wrapperOffset}=this.__closure;const scaleAdjustment=pipState.scale.get()/lastPIPScale.get();const initialValues={originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth*scaleAdjustment,height:values.currentHeight*scaleAdjustment};return{animations:{originX:withSpring(values.targetOriginX,layoutPhysics,\"animate-always\"),originY:withSpring(values.targetOriginY,layoutPhysics,\"animate-always\"),width:withSpring(values.targetWidth,layoutPhysics,\"animate-always\"),height:withSpring(values.targetHeight,layoutPhysics,\"animate-always\")},initialValues:initialValues,callback:function(){const _wrapperOffset=wrapperOffset.get();if(!_wrapperOffset.gestureActive&&_wrapperOffset.y!==0){wrapperOffset.set({gestureActive:false,x:0,y:0});}lastPIPScale.set(pipState.scale.get());}};}" };
const __initData30 = { code: "function VoicePanelCardTsx33(){const{id,pipState,mode,VoicePanelModes}=this.__closure;if(id===pipState.id&&mode.get()===VoicePanelModes.PIP){return true;}return false;}" };
const __initData31 = { code: "function VoicePanelCardTsx34(){const{focused,id,mode,VoicePanelModes,scrollPosition}=this.__closure;var _focused$get;return((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id||mode.get()===VoicePanelModes.PIP?scrollPosition.get():0;}" };
const __initData32 = { code: "function VoicePanelCardTsx35(){const{connected,EDGE_GUTTER,safeArea,windowDimensions,contentDimensions,wrapperDimensions}=this.__closure;return connected.get()?Math.max(EDGE_GUTTER,safeArea.get().left,(windowDimensions.get().width-contentDimensions.get().width)/2):wrapperDimensions.get().drawerWidth/2;}" };
const __initData33 = { code: "function VoicePanelCardTsx36(){const{coords,focused,id,isPIP,pipState,getScaledPIPContainerHeight,getClampedPIPPosition,wrapperDimensions,windowDimensions,safeArea,pipAvoidanceSpecs,derivedScrollValue,xOffset,calculateContentCenterOffset,contentDimensions,sharedTransitionState,TransitionStates,zIndexOverride,computeCardBorderRadius,mode,isSelf,defaultBorderRadius,sharedVisible,isRTCConnected,CONNECTING_OPACITY,wrapperOffset,withDelay,withTiming,ZINDEX_TIMING,OPACITY_TIMING,isScrollVisible,runOnJS,cleanUp,withSpring,layoutPhysics,CARD_SCALE_PHYSICS,SCALE_PHYSICS}=this.__closure;var _focused$get,_focused$get2,_focused$get3,_focused$get4;let{zIndex:zIndex,width:width,height:height,x:x,y:y}=coords.get();const isFocused=((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;if(isPIP){const pipScale=pipState.scale.get();width=pipState.width*pipScale;height=pipState.height*pipScale;const pipHeight=getScaledPIPContainerHeight({height:pipState.height,containerHeight:pipState.containerHeight,showSecondaryPIP:pipState.showSecondaryPIP,scale:pipScale});const pipPosition=getClampedPIPPosition({pipX:wrapperDimensions.get().pipX,pipY:wrapperDimensions.get().pipY,width:width,height:pipHeight,windowDimensions:windowDimensions.get(),safeArea:safeArea.get(),bottomAvoidanceRegion:pipAvoidanceSpecs.get().bottom,topAvoidanceRegion:pipAvoidanceSpecs.get().top});x=pipPosition.x;y=derivedScrollValue.get()+pipPosition.y;}else if(focused.get()!=null){if(isFocused){zIndex=1;width=windowDimensions.get().width;height=windowDimensions.get().height;x=0;y=derivedScrollValue.get();}else{zIndex=0;}}else{x+=xOffset.get();y+=calculateContentCenterOffset({contentHeight:contentDimensions.get().height,windowHeight:windowDimensions.get().height,safeArea:safeArea.get()});if(sharedTransitionState.get()===TransitionStates.YEETED){y+=height/4;}}if(zIndexOverride.get()){zIndex=9001;}const borderRadius=computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius});const opacity=sharedVisible.get()===0&&((_focused$get3=focused.get())===null||_focused$get3===void 0?void 0:_focused$get3.id)!==id?0:!isFocused&&!isRTCConnected?CONNECTING_OPACITY:1;const gestureActive=wrapperOffset.get().gestureActive;const scaleTarget=sharedVisible.get()===1||((_focused$get4=focused.get())===null||_focused$get4===void 0?void 0:_focused$get4.id)===id?1:0.8;return{zIndex:withDelay(zIndexOverride.get()?0:100,withTiming(zIndex,ZINDEX_TIMING)),opacity:withTiming(opacity,OPACITY_TIMING,isScrollVisible.get()?'animate-always':'animate-never',function(finished){if(finished&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){runOnJS(cleanUp)();}}),width:width,height:height,transform:[{translateX:gestureActive?x:withSpring(x,layoutPhysics,'animate-always')},{translateY:gestureActive?y:withSpring(y,layoutPhysics,'animate-always')},{scale:withSpring(scaleTarget,CARD_SCALE_PHYSICS)}],borderRadius:withSpring(borderRadius,SCALE_PHYSICS)};}" };
const __initData34 = { code: "function VoicePanelCardTsx37(finished){const{sharedVisible,sharedTransitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){runOnJS(cleanUp)();}}" };
let closure_74 = { code: "function VoicePanelCardTsx38(finished_0){const{runOnJS,reportPIPArrival}=this.__closure;if(finished_0===true){runOnJS(reportPIPArrival)();}}" };
const __initData35 = { code: "function VoicePanelCardTsx39(values){const{pipState,lastPIPScale,withSpring,layoutPhysics,wrapperOffset}=this.__closure;const scaleAdjustment=pipState.scale.get()/lastPIPScale.get();const initialValues={originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth*scaleAdjustment,height:values.currentHeight*scaleAdjustment};return{animations:{originX:withSpring(values.targetOriginX,layoutPhysics,'animate-always'),originY:withSpring(values.targetOriginY,layoutPhysics,'animate-always'),width:withSpring(values.targetWidth,layoutPhysics,'animate-always'),height:withSpring(values.targetHeight,layoutPhysics,'animate-always')},initialValues:initialValues,callback:function(){const _wrapperOffset=wrapperOffset.get();if(!_wrapperOffset.gestureActive&&_wrapperOffset.y!==0){wrapperOffset.set({gestureActive:false,x:0,y:0});}lastPIPScale.set(pipState.scale.get());}};}" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_76 = ReactCompilerGating.isReactCompilerEnabled() ? ((coords) => {
  let children;
  let cleanUp;
  let derivedValue2;
  let id;
  let mountedCards;
  let pipAvoidanceSpecs;
  let sharedVisible;
  let tmp9;
  let transitionState;
  let obj = cleanUp(id[21]);
  const cResult = obj.c(64);
  ({ children, cleanUp } = coords);
  coords = coords.coords;
  id = coords.id;
  const isRTCConnected = coords.isRTCConnected;
  const isScrollVisible = coords.isScrollVisible;
  const layoutPhysics = coords.layoutPhysics;
  ({ transitionState, sharedVisible } = coords);
  let tmp4 = coords;
  const analyticsLocations = coords(id[48])().analyticsLocations;
  derivedValue2();
  let obj2 = isScrollVisible;
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
  const guildId = context.guildId;
  const obj3 = cleanUp(id[49]);
  const pIPState = obj3.usePIPState();
  const tmp8 = coords(id[50])(id, channelId, guildId);
  if (cResult[0] !== tmp8) {
    let tmp10 = tmp8;
    const tmpResult = cleanUp(id[50]);
    if (!tmpResult.isStableParticipantWithUser(tmp8)) {
      tmp10 = closure_60;
    }
    let num = 0;
    cResult[0] = tmp8;
    let num2 = 1;
    cResult[1] = tmp10;
    tmp9 = tmp10;
  } else {
    tmp9 = cResult[1];
  }
  const isSelf = tmp9.isSelf;
  let id2 = tmp9.user.id;
  function ee() {
    const tmp = id === pIPState.id && mode.get() === contentDimensions.PIP;
    return tmp;
  }
  let obj4 = { id, pipState: pIPState, mode, VoicePanelModes: contentDimensions };
  ee.__closure = obj4;
  ee.__workletHash = 13055769514275;
  ee.__initData = __initData24;
  const tmpResult9 = cleanUp(id[14]);
  const derivedValue = tmpResult9.useDerivedValue(ee);
  function ie() {
    let num;
    const value = focused.get();
    id = undefined;
    if (value != null) {
      id = value.id;
    }
    if (id === id) {
      num = scrollPosition.get();
    } else {
      num = 0;
    }
    return num;
  }
  ie.__closure = { focused, id, mode, VoicePanelModes: contentDimensions, scrollPosition };
  ie.__workletHash = 17164022773012;
  ie.__initData = __initData25;
  const tmpResult10 = cleanUp(id[14]);
  const derivedValue1 = tmpResult10.useDerivedValue(ie);
  function te() {
    let maxResult;
    if (connected.get()) {
      const _Math = Math;
      const left = safeArea.get().left;
      maxResult = max(EDGE_GUTTER, left, (windowDimensions.get().width - contentDimensions.get().width) / 2);
    } else {
      maxResult = wrapperDimensions.get().drawerWidth / 2;
    }
    return maxResult;
  }
  let obj5 = { connected, EDGE_GUTTER: safeArea, safeArea, windowDimensions, contentDimensions, wrapperDimensions };
  te.__closure = obj5;
  te.__workletHash = 4094014471347;
  te.__initData = __initData26;
  const tmpResult11 = cleanUp(id[14]);
  derivedValue2 = tmpResult11.useDerivedValue(te);
  if (cResult[2] === cleanUp) {
    if (cResult[3] === focused) {
      if (cResult[4] === id) {
        if (cResult[5] === isScrollVisible) {
          if (cResult[6] === mode) {
            if (cResult[7] === mountedCards) {
              if (cResult[8] === tmp8) {
                if (cResult[9] === sharedVisible) {
                  let tmp14;
                  if (cResult[10] === transitionState) {
                    tmp14 = cResult[11];
                  }
                  const tmp16 = closure_59(tmp14);
                  const sharedTransitionState = tmp16.sharedTransitionState;
                  const cardGestureEnabled = tmp16.cardGestureEnabled;
                  const tmp18 = pIPState.mode === pipAvoidanceSpecs.IN_APP;
                  let closure_31 = tmp18;
                  const tmpResult12 = cleanUp(id[42]);
                  const token = tmpResult12.useToken(tmp4(tmp2[19]).modules.mobile.VOICE_TILE_BORDER_RADIUS);
                  function ce() {
                    let height;
                    let height2;
                    let id1;
                    let items;
                    let num;
                    let num2;
                    let num3;
                    let num6;
                    let obj14;
                    let obj15;
                    let obj9;
                    let str;
                    let sum;
                    let width;
                    let width2;
                    let withTiming;
                    let x;
                    let y;
                    let zIndex;
                    let value = coords.get();
                    ({ zIndex, width, height, x, y } = value);
                    const value7 = focused.get();
                    id = undefined;
                    if (value7 != null) {
                      id = value7.id;
                    }
                    const tmp4 = id;
                    if (closure_31) {
                      const scale = pIPState.scale;
                      const value8 = scale.get();
                      const result = pIPState.width * value8;
                      height2 = pIPState.height * value8;
                      const obj4 = { height: null, containerHeight: null, showSecondaryPIP: null, scale: value8 };
                      ({ height: obj3.height, containerHeight: obj3.containerHeight, showSecondaryPIP: obj3.showSecondaryPIP } = pIPState);
                      const obj2 = VoicePanelPIPUtils;
                      const scaledPIPContainerHeight = obj2.getScaledPIPContainerHeight(obj4);
                      size = { pipX: wrapperDimensions.get().pipX, pipY: wrapperDimensions.get().pipY, width: result, height: scaledPIPContainerHeight, windowDimensions: windowDimensions.get(), safeArea: safeArea.get(), bottomAvoidanceRegion: pipAvoidanceSpecs.get().bottom, topAvoidanceRegion: pipAvoidanceSpecs.get().top };
                      const getClampedPIPPosition = VoicePanelPIPUtils.getClampedPIPPosition;
                      VoicePanelPIPUtils;
                      const point = getClampedPIPPosition(size);
                      num = point.x;
                      sum = derivedValue1.get() + point.y;
                      width2 = result;
                      num2 = zIndex;
                    } else if (null != focused.get()) {
                      sum = y;
                      num = x;
                      height2 = height;
                      width2 = width;
                      num2 = 0;
                      if (id === id) {
                        width2 = windowDimensions.get().width;
                        height2 = windowDimensions.get().height;
                        sum = derivedValue1.get();
                        num2 = 1;
                        num = 0;
                      }
                    } else {
                      const sum1 = x + derivedValue2.get();
                      const obj6 = { contentHeight: contentDimensions.get().height, windowHeight: windowDimensions.get().height, safeArea: safeArea.get() };
                      const tmp48 = calculateContentCenterOffsetDefault;
                      const sum2 = y + tmp48(obj6);
                      const value9 = sharedTransitionState.get();
                      sum = sum2;
                      num = sum1;
                      height2 = height;
                      width2 = width;
                      num2 = zIndex;
                      if (value9 === native2.TransitionStates.YEETED) {
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
                    const obj8 = { id: tmp4, mode: mode.get(), focused: id1, isSelf, defaultBorderRadius: token };
                    const tmp24 = computeCardBorderRadiusDefault;
                    const value10 = focused.get();
                    id1 = undefined;
                    if (value10 != null) {
                      id1 = value10.id;
                    }
                    const tmp24Result = tmp24(obj8);
                    if (0 !== sharedVisible.get()) {
                      let num5 = 1;
                      if (id !== id) {
                        num5 = 1;
                        if (!isRTCConnected) {
                          num5 = c28;
                        }
                      }
                      num3 = num5;
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
                      num6 = 1;
                    } else {
                      const value12 = focused.get();
                      let id3;
                      if (value12 != null) {
                        id3 = value12.id;
                      }
                      num6 = 0.8;
                    }
                    const withDelay = ReanimatedRexport2.withDelay;
                    let num7 = 100;
                    ReanimatedRexport2;
                    if (derivedValue.get()) {
                      num7 = 0;
                    }
                    const size1 = { zIndex: withDelay(num7, obj9.withTiming(num2, closure_27)), opacity: withTiming(num3, closure_26, str, E), width: width2, height: height2, transform: items, borderRadius: obj15.withSpring(tmp24Result, SCALE_PHYSICS) };
                    obj9 = timing;
                    withTiming = timing.withTiming;
                    str = "animate-never";
                    timing;
                    if (isScrollVisible.get()) {
                      str = "animate-always";
                    }
                    class E {
                      constructor(arg0) {
                        tmp = arg0;
                        if (tmp) {
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
                    E.__closure = { sharedVisible, sharedTransitionState, TransitionStates: native2.TransitionStates, runOnJS: ReanimatedRexport2.runOnJS, cleanUp };
                    E.__workletHash = 13155030685943;
                    E.__initData = __initData;
                    ({ sharedVisible, sharedTransitionState, TransitionStates: native2.TransitionStates, runOnJS: ReanimatedRexport2.runOnJS, cleanUp });
                    let withSpringResult = num;
                    if (!gestureActive) {
                      const obj11 = spring;
                      withSpringResult = obj11.withSpring(num, layoutPhysics, "animate-always");
                    }
                    items = [{ translateX: withSpringResult }, , ];
                    let withSpringResult1 = sum;
                    if (!gestureActive) {
                      const obj12 = spring;
                      withSpringResult1 = obj12.withSpring(sum, layoutPhysics, "animate-always");
                    }
                    items[1] = { translateY: withSpringResult1 };
                    const obj13 = { scale: obj14.withSpring(num6, focused) };
                    items[2] = obj13;
                    obj14 = spring;
                    obj15 = spring;
                    return size1;
                  }
                  let obj6 = { coords, focused, id, isPIP: tmp18, pipState: pIPState, getScaledPIPContainerHeight: cleanUp(tmp2[51]).getScaledPIPContainerHeight, getClampedPIPPosition: cleanUp(tmp2[51]).getClampedPIPPosition, wrapperDimensions, windowDimensions, safeArea, pipAvoidanceSpecs, derivedScrollValue: derivedValue1, xOffset: derivedValue2, calculateContentCenterOffset: tmp4(tmp2[52]), contentDimensions, sharedTransitionState, TransitionStates: cleanUp(tmp2[47]).TransitionStates, zIndexOverride: derivedValue, computeCardBorderRadius: tmp4(tmp2[44]), mode, isSelf, defaultBorderRadius: token, sharedVisible, isRTCConnected, CONNECTING_OPACITY: derivedValue1, wrapperOffset, withDelay: cleanUp(tmp2[14]).withDelay, withTiming: cleanUp(tmp2[38]).withTiming, ZINDEX_TIMING: derivedValue, OPACITY_TIMING: id2, isScrollVisible, runOnJS: cleanUp(tmp2[14]).runOnJS, cleanUp, withSpring: cleanUp(tmp2[39]).withSpring, layoutPhysics, CARD_SCALE_PHYSICS: isSelf, SCALE_PHYSICS: showControls };
                  const useAnimatedStyle = cleanUp(tmp2[14]).useAnimatedStyle;
                  cleanUp(id[14]);
                  let tmp24 = isSelf;
                  ce.__closure = obj6;
                  let num3 = 6790371372357;
                  ce.__workletHash = 6790371372357;
                  ce.__initData = __initData27;
                  const animatedStyle = useAnimatedStyle(ce);
                  if (cResult[12] === controlsSpecs) {
                    if (cResult[13] === hideControls) {
                      let tmp28;
                      if (cResult[14] === showControls) {
                        tmp28 = cResult[15];
                      }
                      if (cResult[16] === focused) {
                        if (cResult[17] === id) {
                          if (cResult[18] === isSelf) {
                            if (cResult[19] === tmp8) {
                              let tmp29;
                              let fn;
                              if (cResult[20] === setFocused) {
                                tmp29 = cResult[21];
                              }
                              if (cResult[22] === analyticsLocations) {
                                if (cResult[23] === channelId) {
                                  let tmp32;
                                  if (cResult[24] === id2) {
                                    tmp32 = cResult[25];
                                  }
                                  if (cResult[26] === cardGestureEnabled) {
                                    if (cResult[27] === tmp28) {
                                      if (cResult[28] === tmp29) {
                                        let tmp34;
                                        if (cResult[29] === tmp32) {
                                          tmp34 = cResult[30];
                                        }
                                        tmp4(id[54])(tmp34);
                                        if (cResult[31] === id) {
                                          if (cResult[32] === tmp18) {
                                            let tmp36;
                                            let tmp37;
                                            if (cResult[33] === pipHandoff) {
                                              tmp36 = cResult[34];
                                              tmp37 = cResult[35];
                                            }
                                            const layoutEffect = obj2.useLayoutEffect(tmp36, tmp37);
                                            if (cResult[36] === id) {
                                              let tmp39;
                                              let tmp40;
                                              if (cResult[37] === pipHandoff) {
                                                tmp39 = cResult[38];
                                                tmp40 = cResult[39];
                                              }
                                              const effect = obj2.useEffect(tmp39, tmp40);
                                              const tmpResult14 = cleanUp(id[14]);
                                              class Oe {
                                                constructor() {
                                                  return () => pipHandoff.removeCard(id);
                                                }
                                              }
                                              const sharedValue = tmpResult14.useSharedValue(0);
                                              if (cResult[40] === id) {
                                                let tmp43;
                                                if (cResult[41] === pipHandoff) {
                                                  tmp43 = cResult[42];
                                                }
                                                reportPIPArrival = tmp43;
                                                if (cResult[43] === tmp18) {
                                                  if (cResult[44] === layoutPhysics) {
                                                    if (cResult[45] === sharedValue) {
                                                      let tmp44;
                                                      let tmp45;
                                                      if (cResult[46] === tmp43) {
                                                        tmp44 = cResult[47];
                                                        tmp45 = cResult[48];
                                                      }
                                                      const effect1 = obj2.useEffect(tmp44, tmp45);
                                                      const tmpResult15 = cleanUp(id[14]);
                                                      class Ye {
                                                        constructor() {
                                                          tmp = closure_31;
                                                          if (tmp) {
                                                            tmp2 = closure_33;
                                                            num = 0;
                                                            result = closure_33.set(0);
                                                            tmp4 = closure_0;
                                                            tmp5 = closure_2;
                                                            set = closure_33.set;
                                                            tmp6 = closure_0(closure_2[39]);
                                                            tmp7 = layoutPhysics;
                                                            fn = function t(arg0) {
                                                              if (true === arg0) {
                                                                const obj = cleanUp(id[14]);
                                                                obj.runOnJS(reportPIPArrival)();
                                                              }
                                                            };
                                                            obj = { runOnJS: null, reportPIPArrival: null };
                                                            withSpring = tmp6.withSpring;
                                                            obj.runOnJS = closure_0(closure_2[14]).runOnJS;
                                                            tmp8 = closure_34;
                                                            obj.reportPIPArrival = closure_34;
                                                            fn.__closure = obj;
                                                            num2 = 10819702965315;
                                                            fn.__workletHash = 10819702965315;
                                                            tmp9 = closure_67;
                                                            fn.__initData = closure_67;
                                                            str = "animate-always";
                                                            num3 = 1;
                                                            tmp10 = tmp6;
                                                            tmp11 = fn;
                                                            result1 = set(withSpring(1, layoutPhysics, "animate-always", fn));
                                                            return () => {
                                                              const obj = cleanUp(id[14]);
                                                              return obj.cancelAnimation(sharedValue);
                                                            };
                                                          } else {
                                                            return;
                                                          }
                                                        }
                                                      }
                                                      const sharedValue1 = tmpResult15.useSharedValue(obj16.get());
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
                                                          size1.originX = obj4.withSpring(coords.targetOriginX, layoutPhysics, "animate-always");
                                                          obj5 = closure_0(closure_2[39]);
                                                          size1.originY = obj5.withSpring(coords.targetOriginY, layoutPhysics, "animate-always");
                                                          obj6 = closure_0(closure_2[39]);
                                                          size1.width = obj6.withSpring(coords.targetWidth, layoutPhysics, "animate-always");
                                                          obj7 = closure_0(closure_2[39]);
                                                          size1.height = obj7.withSpring(coords.targetHeight, layoutPhysics, "animate-always");
                                                          obj1.animations = size1;
                                                          obj1.initialValues = size;
                                                          obj1.callback = function callback() {
                                                            const value = wrapperOffset.get();
                                                            const gestureActive = value.gestureActive || 0 === value.y;
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
                                                      Be.__workletHash = 1811305792108;
                                                      Be.__initData = __initData29;
                                                      cResult[49] = sharedValue1;
                                                      cResult[50] = layoutPhysics;
                                                      cResult[51] = pIPState.scale;
                                                      cResult[52] = wrapperOffset;
                                                      cResult[53] = Be;
                                                    }
                                                  }
                                                }
                                                class Ye {
                                                  constructor() {
                                                    tmp = closure_31;
                                                    if (tmp) {
                                                      tmp2 = closure_33;
                                                      num = 0;
                                                      result = closure_33.set(0);
                                                      tmp4 = closure_0;
                                                      tmp5 = closure_2;
                                                      set = closure_33.set;
                                                      tmp6 = closure_0(closure_2[39]);
                                                      tmp7 = layoutPhysics;
                                                      fn = function t(arg0) {
                                                        if (true === arg0) {
                                                          const obj = cleanUp(id[14]);
                                                          obj.runOnJS(reportPIPArrival)();
                                                        }
                                                      };
                                                      obj = { runOnJS: null, reportPIPArrival: null };
                                                      withSpring = tmp6.withSpring;
                                                      obj.runOnJS = closure_0(closure_2[14]).runOnJS;
                                                      tmp8 = closure_34;
                                                      obj.reportPIPArrival = closure_34;
                                                      fn.__closure = obj;
                                                      num2 = 10819702965315;
                                                      fn.__workletHash = 10819702965315;
                                                      tmp9 = closure_67;
                                                      fn.__initData = closure_67;
                                                      str = "animate-always";
                                                      num3 = 1;
                                                      tmp10 = tmp6;
                                                      tmp11 = fn;
                                                      result1 = set(withSpring(1, layoutPhysics, "animate-always", fn));
                                                      return () => {
                                                        const obj = cleanUp(id[14]);
                                                        return obj.cancelAnimation(sharedValue);
                                                      };
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
                                                cResult[46] = tmp43;
                                                cResult[47] = Ye;
                                                cResult[48] = items;
                                                tmp45 = items;
                                                tmp44 = Ye;
                                              }
                                              class Ne {
                                                constructor() {
                                                  return pipHandoff.setCardArrivedInPIP(id);
                                                }
                                              }
                                              cResult[40] = id;
                                              cResult[41] = pipHandoff;
                                              cResult[42] = Ne;
                                              tmp43 = Ne;
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
                                            tmp40 = items1;
                                            tmp39 = Oe;
                                          }
                                        }
                                        class Ve {
                                          constructor() {
                                            pipHandoff.syncCardPIPLayout(id, closure_31);
                                          }
                                        }
                                        const items2 = [pipHandoff, id, ];
                                        cResult[31] = id;
                                        cResult[32] = tmp18;
                                        cResult[33] = pipHandoff;
                                        cResult[34] = Ve;
                                        cResult[35] = items2;
                                        tmp37 = items2;
                                        tmp36 = Ve;
                                      }
                                    }
                                  }
                                  let obj8 = { gesturesEnabled: null, onSingleTap: tmp28, onDoubleTap: tmp29, onLongPress: tmp32 };
                                  cResult[27] = tmp28;
                                  cResult[28] = tmp29;
                                  cResult[29] = tmp32;
                                  cResult[30] = obj8;
                                  tmp34 = obj8;
                                }
                              }
                              if (null != id2) {
                                fn = () => {
                                  const obj = { userId: id2, channelId, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations };
                                  return showUserProfileActionSheetDefault(obj);
                                };
                              }
                              cResult[22] = analyticsLocations;
                              cResult[24] = id2;
                              cResult[25] = fn;
                              tmp32 = fn;
                            }
                          }
                        }
                      }
                      cleanUp(id[50]);
                      cResult[16] = focused;
                      cResult[18] = isSelf;
                      cResult[19] = tmp8;
                      cResult[20] = setFocused;
                      cResult[21] = tmp31;
                      tmp29 = tmp31;
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
                  let num5 = 13;
                  cResult[13] = hideControls;
                  let num6 = 14;
                  cResult[14] = showControls;
                  let num7 = 15;
                  cResult[15] = ue;
                  tmp28 = ue;
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
}) : ((cleanUp) => {
  let _undefined;
  let _undefined2;
  let _undefined3;
  let _undefined4;
  let c11;
  let c13;
  let c18;
  let c19;
  let children;
  let fn4;
  let fn5;
  let focused;
  let guildId;
  let items5;
  let mode;
  let mountedCards;
  let obj10;
  let transitionState;
  let windowDimensions;
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
  let closure_31;
  let token;
  let sharedValue;
  reportPIPArrival = undefined;
  let sharedValue1;
  let tmp = coords;
  ({ children, transitionState } = cleanUp);
  const analyticsLocations = coords(id[48])().analyticsLocations;
  let obj = isScrollVisible;
  const tmp3 = derivedValue2();
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
  let obj2 = cleanUp(id[49]);
  const pIPState = obj2.usePIPState();
  const tmp7 = coords(id[50])(id, channelId, guildId);
  const obj3 = cleanUp(id[50]);
  let tmp8 = tmp7;
  if (!obj3.isStableParticipantWithUser(tmp7)) {
    tmp8 = closure_60;
  }
  isSelf = tmp8.isSelf;
  id2 = tmp8.user.id;
  let fn = function f() {
    const tmp = id === pIPState.id && mode.get() === contentDimensions.PIP;
    return tmp;
  };
  let obj4 = { id, pipState: pIPState, mode, VoicePanelModes: contentDimensions };
  fn.__closure = obj4;
  fn.__workletHash = 14658609388807;
  fn.__initData = __initData30;
  const tmp5Result = cleanUp(id[14]);
  derivedValue = tmp5Result.useDerivedValue(fn);
  const fn2 = function v() {
    let num;
    const value = focused.get();
    id = undefined;
    if (value != null) {
      id = value.id;
    }
    if (id === id) {
      num = scrollPosition.get();
    } else {
      num = 0;
    }
    return num;
  };
  fn2.__closure = { focused, id, mode, VoicePanelModes: contentDimensions, scrollPosition };
  fn2.__workletHash = 1094240470006;
  fn2.__initData = __initData31;
  const tmp5Result9 = cleanUp(id[14]);
  derivedValue1 = tmp5Result9.useDerivedValue(fn2);
  const fn3 = function y() {
    let maxResult;
    if (connected.get()) {
      const _Math = Math;
      const left = safeArea.get().left;
      maxResult = max(EDGE_GUTTER, left, (windowDimensions.get().width - contentDimensions.get().width) / 2);
    } else {
      maxResult = wrapperDimensions.get().drawerWidth / 2;
    }
    return maxResult;
  };
  let obj5 = { connected, EDGE_GUTTER: safeArea, safeArea, windowDimensions, contentDimensions, wrapperDimensions };
  fn3.__closure = obj5;
  fn3.__workletHash = 12954455503263;
  fn3.__initData = __initData32;
  const tmp5Result10 = cleanUp(id[14]);
  derivedValue2 = tmp5Result10.useDerivedValue(fn3);
  const tmp12 = closure_59({ id, participant: tmp7, transitionState, cleanUp, mountedCards, mode, focused, isScrollVisible, sharedVisible });
  sharedTransitionState = tmp12.sharedTransitionState;
  closure_31 = tmp13;
  const cardGestureEnabled = tmp12.cardGestureEnabled;
  const tmp5Result11 = cleanUp(id[42]);
  token = tmp5Result11.useToken(tmp(tmp2[19]).modules.mobile.VOICE_TILE_BORDER_RADIUS);
  const tmp5Result12 = cleanUp(id[14]);
  class E {
    constructor() {
      let height;
      let height2;
      let id1;
      let items;
      let num;
      let num2;
      let num3;
      let num6;
      let obj14;
      let obj15;
      let obj9;
      let str;
      let sum;
      let width;
      let width2;
      let withTiming;
      let x;
      let y;
      let zIndex;
      let value = coords.get();
      ({ zIndex, width, height, x, y } = value);
      const value7 = focused.get();
      id = undefined;
      if (value7 != null) {
        id = value7.id;
      }
      const tmp4 = id;
      if (closure_31) {
        const scale = pIPState.scale;
        const value8 = scale.get();
        const result = pIPState.width * value8;
        height2 = pIPState.height * value8;
        const obj4 = { height: null, containerHeight: null, showSecondaryPIP: null, scale: value8 };
        ({ height: obj3.height, containerHeight: obj3.containerHeight, showSecondaryPIP: obj3.showSecondaryPIP } = pIPState);
        const obj2 = VoicePanelPIPUtils;
        const scaledPIPContainerHeight = obj2.getScaledPIPContainerHeight(obj4);
        size = { pipX: wrapperDimensions.get().pipX, pipY: wrapperDimensions.get().pipY, width: result, height: scaledPIPContainerHeight, windowDimensions: windowDimensions.get(), safeArea: safeArea.get(), bottomAvoidanceRegion: pipAvoidanceSpecs.get().bottom, topAvoidanceRegion: pipAvoidanceSpecs.get().top };
        const getClampedPIPPosition = VoicePanelPIPUtils.getClampedPIPPosition;
        VoicePanelPIPUtils;
        const point = getClampedPIPPosition(size);
        num = point.x;
        sum = derivedValue1.get() + point.y;
        width2 = result;
        num2 = zIndex;
      } else if (null != focused.get()) {
        sum = y;
        num = x;
        height2 = height;
        width2 = width;
        num2 = 0;
        if (id === id) {
          width2 = windowDimensions.get().width;
          height2 = windowDimensions.get().height;
          sum = derivedValue1.get();
          num2 = 1;
          num = 0;
        }
      } else {
        const sum1 = x + derivedValue2.get();
        const obj6 = { contentHeight: contentDimensions.get().height, windowHeight: windowDimensions.get().height, safeArea: safeArea.get() };
        const tmp48 = calculateContentCenterOffsetDefault;
        const sum2 = y + tmp48(obj6);
        const value9 = sharedTransitionState.get();
        sum = sum2;
        num = sum1;
        height2 = height;
        width2 = width;
        num2 = zIndex;
        if (value9 === native2.TransitionStates.YEETED) {
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
      const obj8 = { id: tmp4, mode: mode.get(), focused: id1, isSelf, defaultBorderRadius: token };
      const tmp24 = computeCardBorderRadiusDefault;
      const value10 = focused.get();
      id1 = undefined;
      if (value10 != null) {
        id1 = value10.id;
      }
      const tmp24Result = tmp24(obj8);
      if (0 !== sharedVisible.get()) {
        let num5 = 1;
        if (id !== id) {
          num5 = 1;
          if (!isRTCConnected) {
            num5 = c28;
          }
        }
        num3 = num5;
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
        num6 = 1;
      } else {
        const value12 = focused.get();
        let id3;
        if (value12 != null) {
          id3 = value12.id;
        }
        num6 = 0.8;
      }
      const withDelay = ReanimatedRexport2.withDelay;
      let num7 = 100;
      ReanimatedRexport2;
      if (derivedValue.get()) {
        num7 = 0;
      }
      const size1 = { zIndex: withDelay(num7, obj9.withTiming(num2, closure_27)), opacity: withTiming(num3, closure_26, str, E), width: width2, height: height2, transform: items, borderRadius: obj15.withSpring(tmp24Result, SCALE_PHYSICS) };
      obj9 = timing;
      withTiming = timing.withTiming;
      str = "animate-never";
      timing;
      if (isScrollVisible.get()) {
        str = "animate-always";
      }
      class E {
        constructor(arg0) {
          tmp = arg0;
          if (tmp) {
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
      E.__closure = { sharedVisible, sharedTransitionState, TransitionStates: native2.TransitionStates, runOnJS: ReanimatedRexport2.runOnJS, cleanUp };
      E.__workletHash = 1424486009360;
      E.__initData = __initData;
      ({ sharedVisible, sharedTransitionState, TransitionStates: native2.TransitionStates, runOnJS: ReanimatedRexport2.runOnJS, cleanUp });
      let withSpringResult = num;
      if (!gestureActive) {
        const obj11 = spring;
        withSpringResult = obj11.withSpring(num, layoutPhysics, "animate-always");
      }
      items = [{ translateX: withSpringResult }, , ];
      let withSpringResult1 = sum;
      if (!gestureActive) {
        const obj12 = spring;
        withSpringResult1 = obj12.withSpring(sum, layoutPhysics, "animate-always");
      }
      items[1] = { translateY: withSpringResult1 };
      const obj13 = { scale: obj14.withSpring(num6, focused) };
      items[2] = obj13;
      obj14 = spring;
      obj15 = spring;
      return size1;
    }
  }
  let obj6 = { coords, focused, id, isPIP: tmp13, pipState: pIPState, getScaledPIPContainerHeight: tmp5(tmp2[51]).getScaledPIPContainerHeight, getClampedPIPPosition: tmp5(tmp2[51]).getClampedPIPPosition, wrapperDimensions, windowDimensions, safeArea, pipAvoidanceSpecs, derivedScrollValue: derivedValue1, xOffset: derivedValue2, calculateContentCenterOffset: tmp(tmp2[52]), contentDimensions, sharedTransitionState, TransitionStates: tmp5(tmp2[47]).TransitionStates, zIndexOverride: derivedValue, computeCardBorderRadius: tmp(tmp2[44]), mode, isSelf, defaultBorderRadius: token, sharedVisible, isRTCConnected, CONNECTING_OPACITY: derivedValue1, wrapperOffset, withDelay: tmp5(tmp2[14]).withDelay, withTiming: tmp5(tmp2[38]).withTiming, ZINDEX_TIMING: derivedValue, OPACITY_TIMING: id2, isScrollVisible, runOnJS: tmp5(tmp2[14]).runOnJS, cleanUp, withSpring: tmp5(tmp2[39]).withSpring, layoutPhysics, CARD_SCALE_PHYSICS: isSelf, SCALE_PHYSICS };
  E.__closure = obj6;
  E.__workletHash = 7266076771477;
  E.__initData = __initData33;
  const animatedStyle = tmp5Result12.useAnimatedStyle(E);
  let obj7 = {
    gesturesEnabled: cardGestureEnabled,
    onSingleTap() {
      if (_undefined.get().mode === VoicePanelControlsModes.HIDDEN) {
        _undefined4({ debounce: true });
      } else {
        _undefined2({ debounce: true });
      }
    },
    onDoubleTap: fn4,
    onLongPress: fn5
  };
  const tmpResult = tmp(id[54]);
  const tmp5Result13 = cleanUp(id[50]);
  if (tmp5Result13.isStableActivityParticipant(tmp7)) {
    fn4 = () => {
      const value = focused.get();
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
    cleanUp(id[50]);
  }
  fn5 = undefined;
  if (null != id2) {
    fn5 = () => {
      const obj = { userId: id2, channelId, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations };
      return showUserProfileActionSheetDefault(obj);
    };
  }
  let items = [pipHandoff, id, pIPState.mode === pipAvoidanceSpecs.IN_APP];
  const tmpResultResult = tmpResult(obj7);
  const layoutEffect = obj.useLayoutEffect(() => {
    pipHandoff.syncCardPIPLayout(id, closure_31);
  }, items);
  const items1 = [pipHandoff, id];
  const effect = obj.useEffect(() => () => pipHandoff.removeCard(id), items1);
  const tmp5Result15 = cleanUp(id[14]);
  sharedValue = tmp5Result15.useSharedValue(0);
  const items2 = [pipHandoff, id];
  reportPIPArrival = obj.useCallback(() => pipHandoff.setCardArrivedInPIP(id), items2);
  const items3 = [pIPState.mode === pipAvoidanceSpecs.IN_APP, layoutPhysics, sharedValue, reportPIPArrival];
  const effect1 = obj.useEffect(() => {
    if (closure_31) {
      const result = sharedValue.set(0);
      set = sharedValue.set;
      const fn = function t(arg0) {
        if (true === arg0) {
          const obj = cleanUp(id[14]);
          obj.runOnJS(reportPIPArrival)();
        }
      };
      const tmp6 = spring;
      __closure = { runOnJS: ReanimatedRexport2.runOnJS, reportPIPArrival };
      const withSpring = tmp6.withSpring;
      fn.__closure = __closure;
      fn.__workletHash = 7717924685354;
      fn.__initData = __initData2;
      const result1 = set(withSpring(1, layoutPhysics, "animate-always", fn));
      return () => {
        const obj = cleanUp(id[14]);
        return obj.cancelAnimation(sharedValue);
      };
    }
  }, items3);
  let scale = pIPState.scale;
  const tmp5Result16 = cleanUp(id[14]);
  sharedValue1 = tmp5Result16.useSharedValue(scale.get());
  function me(currentOriginX) {
    let obj4;
    let obj5;
    let obj6;
    let obj7;
    let size1;
    let scale = pIPState.scale;
    let value = scale.get();
    let result = value / sharedValue1.get();
    size = { originX: currentOriginX.currentOriginX, originY: currentOriginX.currentOriginY, width: currentOriginX.currentWidth * result, height: currentOriginX.currentHeight * result };
    const obj = {
      animations: size1,
      initialValues: size,
      callback() {
        const value = wrapperOffset.get();
        const gestureActive = value.gestureActive || 0 === value.y;
        if (!gestureActive) {
          const result = wrapperOffset.set({ gestureActive: false, x: 0, y: 0 });
        }
        scale = scale.scale;
        const result1 = sharedValue1.set(scale.get());
      }
    };
    size1 = { originX: obj4.withSpring(currentOriginX.targetOriginX, layoutPhysics, "animate-always"), originY: obj5.withSpring(currentOriginX.targetOriginY, layoutPhysics, "animate-always"), width: obj6.withSpring(currentOriginX.targetWidth, layoutPhysics, "animate-always"), height: obj7.withSpring(currentOriginX.targetHeight, layoutPhysics, "animate-always") };
    obj4 = spring;
    obj5 = spring;
    obj6 = spring;
    obj7 = spring;
    return obj;
  }
  let obj8 = { pipState: pIPState, lastPIPScale: sharedValue1, withSpring: tmp5(tmp2[39]).withSpring, layoutPhysics, wrapperOffset };
  me.__closure = obj8;
  me.__workletHash = 17498243044039;
  me.__initData = __initData35;
  const items4 = [layoutPhysics, wrapperOffset, sharedValue1, pIPState.scale];
  const callback1 = obj.useCallback(me, items4);
  let obj9 = { gesture: tmpResultResult, children: windowDimensions(tmp(tmp2[41]), obj10) };
  const GestureDetector = tmp5(tmp2[55]).GestureDetector;
  obj10 = { style: items5, layout: callback1, children };
  items5 = [tmp3.positionWrapper, animatedStyle];
  return windowDimensions(GestureDetector, obj9);
});
const __initData36 = { code: "function VoicePanelCardTsx40(){const{EDGE_GUTTER,coords,scrollPosition,windowDimensions}=this.__closure;const yPos=EDGE_GUTTER+coords.get().y;return yPos>scrollPosition.get()-coords.get().height&&yPos<scrollPosition.get()+windowDimensions.get().height;}" };
const __initData37 = { code: "function layoutTransition_VoicePanelCardTsx41(values,t10){const{layoutTransitionFunction,physics,pipState,lastPipScale}=this.__closure;const disableAnimation=t10===undefined?false:t10;return layoutTransitionFunction(values,physics,pipState.scale,lastPipScale,disableAnimation);}" };
const __initData38 = { code: "function VoicePanelCardTsx42(){const{EDGE_GUTTER,coords,scrollPosition,windowDimensions}=this.__closure;const yPos=EDGE_GUTTER+coords.get().y;return yPos>scrollPosition.get()-coords.get().height&&yPos<scrollPosition.get()+windowDimensions.get().height;}" };
let closure_80 = { code: "function layoutTransition_VoicePanelCardTsx43(values,disableAnimation=false){const{layoutTransitionFunction,physics,pipState,lastPipScale}=this.__closure;return layoutTransitionFunction(values,physics,pipState.scale,lastPipScale,disableAnimation);}" };
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let DEFAULT;
  let channelId;
  let cleanUp;
  let closure_4;
  let connected;
  let guildId;
  let id2;
  let id3;
  let id4;
  let isCall;
  let item;
  let items1;
  let layoutManager;
  let layoutTransition;
  let layoutTransition2;
  let mountedCards;
  let num7;
  let physics;
  let scrollPosition;
  let streamGuildId;
  let streamId;
  let tmp10;
  let tmp13;
  let tmp41;
  let tmp68Result;
  let tmp7;
  let tmp73;
  let tmp9;
  let transitionState;
  let user;
  let user2;
  let userNick1;
  let windowDimensions;
  const tmp2 = id2;
  const obj = scrollPosition(id2[21]);
  const cResult = obj.c(81);
  ({ item, transitionState, cleanUp } = arg0);
  const id = item.id;
  const context = react.useContext(windowDimensions(id2[27]));
  ({ guildId, isCall, mountedCards, scrollPosition } = context);
  windowDimensions = context.windowDimensions;
  ({ channelId, layoutManager } = context);
  const tmp6 = windowDimensions(id2[50])(id, channelId, guildId);
  const obj2 = react;
  if (cResult[0] !== tmp6) {
    let tmp8 = tmp6;
    const tmpResult = scrollPosition(tmp2[50]);
    if (!tmpResult.isStableParticipantWithUser(tmp6)) {
      tmp8 = closure_60;
    }
    cResult[0] = tmp6;
    cResult[1] = tmp8;
    tmp7 = tmp8;
  } else {
    tmp7 = cResult[1];
  }
  const isSelf = tmp7.isSelf;
  id2 = tmp7.user.id;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RTCConnectionStore];
    class N {
      constructor() {
        return connected.isConnected();
      }
    }
    cResult[2] = items;
    cResult[3] = N;
    tmp10 = N;
    tmp9 = items;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult11 = scrollPosition(tmp2[28]);
  const stateFromStores = tmpResult11.useStateFromStores(tmp9, tmp10);
  if (cResult[4] !== tmp6) {
    const tmpResult12 = scrollPosition(tmp2[50]);
    const tmp14 = tmpResult12.isStableUserParticipant(tmp6) && tmp6.ringing;
    class N {
      constructor() {
        return connected.isConnected();
      }
    }
    cResult[5] = tmp14;
    tmp13 = tmp14;
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
  const tmp4Result = windowDimensions(tmp2[29]);
  if (tmp6 != null) {
    type1 = tmp6.type;
  }
  if (type1 === ParticipantTypes.STREAM) {
    DEFAULT = scrollPosition(tmp2[30]).MediaEngineContextTypes.STREAM;
  } else {
    DEFAULT = scrollPosition(tmp2[30]).MediaEngineContextTypes.DEFAULT;
  }
  tmp4Result(DEFAULT, str);
  windowDimensions(tmp2[56])(str);
  const useSharedValue = scrollPosition(tmp2[14]).useSharedValue;
  scrollPosition(tmp2[14]);
  if (transitionState === scrollPosition(tmp2[47]).TransitionStates.MOUNTED) {
    num7 = 1;
  } else {
    num7 = 0;
  }
  const sharedValue = useSharedValue(num7);
  let isSpeakingResult = null != id2;
  const useSharedValue2 = scrollPosition(tmp2[14]).useSharedValue;
  scrollPosition(tmp2[14]);
  if (isSpeakingResult) {
    isSpeakingResult = SpeakingStore.isSpeaking(id2);
  }
  const sharedValue2 = useSharedValue2(isSpeakingResult);
  if (cResult[6] === sharedValue2) {
    let tmp26;
    let tmp27;
    let tmp36;
    if (cResult[7] === id2) {
      tmp26 = cResult[8];
      tmp27 = cResult[9];
    }
    const layoutEffect = obj2.useLayoutEffect(tmp26, tmp27);
    scrollPosition(tmp2[57]);
    class N {
      constructor() {
        return connected.isConnected();
      }
    }
    react = tmp30;
    const fn = function j() {
      const sum = EDGE_GUTTER + react.get().y;
      const value = scrollPosition.get();
      let tmp3 = sum > value - react.get().height;
      if (tmp3) {
        const value2 = scrollPosition.get();
        tmp3 = sum < value2 + windowDimensions.get().height;
      }
      return tmp3;
    };
    const obj3 = { EDGE_GUTTER, coords: tmp30, scrollPosition, windowDimensions };
    fn.__closure = obj3;
    fn.__workletHash = 2901522095465;
    fn.__initData = __initData36;
    const tmpResult16 = scrollPosition(tmp2[14]);
    const derivedValue = tmpResult16.useDerivedValue(fn);
    const tmpResult17 = scrollPosition(tmp2[49]);
    const pIPState = tmpResult17.usePIPState();
    const scale = pIPState.scale;
    const tmpResult18 = scrollPosition(tmp2[14]);
    const sharedValue1 = tmpResult18.useSharedValue(scale.get());
    const _Symbol = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { mass: closure_11.mass, damping: windowDimensions(tmp2[58])(closure_11.damping - 2, closure_11.damping + 2), stiffness: windowDimensions(tmp2[58])(closure_11.stiffness - 20, closure_11.stiffness + 20) };
      class N {
        constructor() {
          return connected.isConnected();
        }
      }
      cResult[10] = obj4;
      tmp36 = obj4;
    } else {
      tmp36 = cResult[10];
    }
    RTCConnectionStore = tmp36;
    if (cResult[11] === sharedValue1) {
      let tmp38;
      if (cResult[12] === pIPState.scale) {
        tmp38 = cResult[13];
      }
      ({ physics, layoutTransition: layoutTransition2 } = tmp38);
      class N {
        constructor() {
          return connected.isConnected();
        }
      }
      if (item.type === constants2.CTA) {
        const id5 = item.id;
        if (constants.NO_VIDEO_PARTICIPANTS === id5) {
          const _Symbol3 = Symbol;
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            closure_20(windowDimensions(tmp2[59]), {});
            class N {
              constructor() {
                return connected.isConnected();
              }
            }
          }
          class N {
            constructor() {
              return connected.isConnected();
            }
          }
        } else if (tmp55.CALLER_DISCONNECTED === id5) {
          const _Symbol2 = Symbol;
          if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
            closure_20(windowDimensions(tmp2[60]), {});
            class N {
              constructor() {
                return connected.isConnected();
              }
            }
          }
          class N {
            constructor() {
              return connected.isConnected();
            }
          }
        }
        if (cResult[58] === tmp13) {
          if (cResult[59] === layoutTransition2) {
            if (cResult[60] === tmp6) {
              let tmp66;
              if (cResult[61] === sharedValue2) {
                tmp66 = cResult[62];
              }
              if (cResult[63] === id) {
                if (cResult[64] === isSelf) {
                  if (cResult[65] === layoutTransition2) {
                    if (cResult[66] === tmp6) {
                      let tmp71;
                      if (cResult[67] === sharedValue2) {
                        tmp71 = cResult[68];
                      }
                      if (cResult[69] === tmp41) {
                        if (cResult[70] === cleanUp) {
                          if (cResult[71] === tmp30) {
                            if (cResult[72] === id) {
                              if (cResult[73] === stateFromStores) {
                                if (cResult[74] === derivedValue) {
                                  if (cResult[75] === physics) {
                                    if (cResult[76] === sharedValue) {
                                      if (cResult[77] === tmp66) {
                                        if (cResult[78] === tmp71) {
                                          let tmp76;
                                          if (cResult[79] === transitionState) {
                                            tmp76 = cResult[80];
                                          }
                                          return tmp76;
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
                          return connected.isConnected();
                        }
                      }
                      const obj5 = { cleanUp, coords: tmp30, id, isRTCConnected: stateFromStores, isScrollVisible: derivedValue, layoutPhysics: physics, transitionState, sharedVisible: sharedValue, children: items1 };
                      items1 = [tmp41, tmp66, tmp71];
                      const tmp78 = closure_22(closure_76, obj5);
                      cResult[69] = tmp41;
                      cResult[70] = cleanUp;
                      cResult[71] = tmp30;
                      cResult[72] = id;
                      cResult[73] = stateFromStores;
                      cResult[74] = derivedValue;
                      cResult[75] = physics;
                      cResult[76] = sharedValue;
                      cResult[77] = tmp66;
                      cResult[78] = tmp71;
                      cResult[79] = transitionState;
                      cResult[80] = tmp78;
                      tmp76 = tmp78;
                    }
                  }
                }
              }
              scrollPosition(tmp2[50]);
              class N {
                constructor() {
                  return connected.isConnected();
                }
              }
              if (tmp73) {
                const obj6 = { speaking: null, id, userId: tmp6.user.id, isSelf, layout: layoutTransition2 };
                class N {
                  constructor() {
                    return connected.isConnected();
                  }
                }
                tmp73 = closure_20(closure_50, obj6);
              }
              cResult[63] = id;
              cResult[64] = isSelf;
              cResult[65] = layoutTransition2;
              cResult[66] = tmp6;
              cResult[67] = sharedValue2;
              cResult[68] = tmp73;
              tmp71 = tmp73;
            }
          }
        }
        class N {
          constructor() {
            return connected.isConnected();
          }
        }
        if (tmp68Result) {
          const obj7 = { isRinging: tmp13, participant: null, label: userNick1, layout: layoutTransition2, speaking: sharedValue2 };
          class N {
            constructor() {
              return connected.isConnected();
            }
          }
          userNick1 = undefined;
          const tmp4Result2 = windowDimensions(tmp2[63]);
          const tmpResult20 = scrollPosition(tmp2[50]);
          if (tmpResult20.isStableParticipantWithUser(tmp6)) {
            userNick1 = tmp6.userNick;
          }
          tmp68Result = closure_20(tmp4Result2, obj7);
        }
        cResult[58] = tmp13;
        cResult[59] = layoutTransition2;
        cResult[60] = tmp6;
        cResult[61] = sharedValue2;
        cResult[62] = tmp68Result;
        tmp66 = tmp68Result;
      } else if (null != tmp6) {
        const type = tmp6.type;
        if (ParticipantTypes.USER === type) {
          ({ id: id4, streamId, user: user2 } = tmp6);
          class N {
            constructor() {
              return connected.isConnected();
            }
          }
          if (cResult[28] === guildId) {
            let tmp49;
            if (cResult[29] === user2) {
              tmp49 = cResult[30];
            }
            const userAvatarDecoration = tmp6.userAvatarDecoration;
            class N {
              constructor() {
                return connected.isConnected();
              }
            }
            const obj8 = { isRinging: tmp13, avatarURI: tmp49, avatarDecoration: userAvatarDecoration, layout: layoutTransition2, layoutPhysics: physics, userId: user2.id, guildId };
            cResult[31] = guildId;
            cResult[32] = tmp13;
            cResult[33] = layoutTransition2;
            cResult[34] = physics;
            cResult[35] = tmp49;
            cResult[36] = userAvatarDecoration;
            cResult[37] = user2.id;
            cResult[38] = closure_20(closure_42, obj8);
            const tmp54 = closure_20(closure_42, obj8);
          }
          const avatarURL = user2.getAvatarURL(guildId, 80, false);
          cResult[28] = guildId;
          cResult[29] = user2;
          cResult[30] = avatarURL;
          tmp49 = avatarURL;
        } else if (ParticipantTypes.STREAM === type) {
          ({ user, id: id3, streamGuildId } = tmp6);
          class N {
            constructor() {
              return connected.isConnected();
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
                          let tmp45;
                          if (cResult[47] === userNick) {
                            tmp45 = cResult[48];
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
          const obj9 = { userId: user.id, id: id3, streamGuildId, streamId: tmp44, userNick, isSelf, sharedCoords: tmp30, isScrollVisible: derivedValue, layout: layoutTransition2 };
          const tmp48 = closure_20(closure_37, obj9);
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
          const obj10 = { sharedVisible: null, applicationId: tmp6.applicationId, layout: layoutTransition2 };
          class N {
            constructor() {
              return connected.isConnected();
            }
          }
          const tmp43 = closure_20(windowDimensions(tmp2[62]), obj10, tmp6.id);
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
          let tmp56;
          if (cResult[56] === physics) {
            tmp56 = cResult[57];
          }
          tmp41 = tmp56;
        }
      }
      const obj11 = { isRinging: tmp13, avatarURI: "r", avatarDecoration: "emoji", layout: layoutTransition2, layoutPhysics: physics };
      const tmp59 = closure_20(closure_42, obj11);
      cResult[54] = tmp13;
      cResult[55] = layoutTransition2;
      cResult[56] = physics;
      cResult[57] = tmp59;
      tmp56 = tmp59;
    }
    const obj12 = { physics: tmp36, layoutTransition };
    layoutTransition = function layoutTransition(originX, arg1) {
      const tmp = undefined !== arg1 && arg1;
      return layoutTransitionFunction(originX, connected, pIPState.scale, sharedValue1, tmp);
    };
    const obj13 = { layoutTransitionFunction, physics: tmp36, pipState: pIPState, lastPipScale: sharedValue1 };
    layoutTransition.__closure = obj13;
    layoutTransition.__workletHash = 5354393718549;
    layoutTransition.__initData = __initData37;
    cResult[11] = sharedValue1;
    cResult[12] = pIPState.scale;
    cResult[13] = obj12;
    tmp38 = obj12;
  }
  class B {
    constructor() {
      handleChange = function handleChange() {
        const isSpeakingResult = null != id2 && SpeakingStore.isSpeaking(tmp2);
        const result = set(isSpeakingResult);
      };
      isSpeakingResult = null != id;
      tmp = closure_3;
      set = closure_3.set;
      if (isSpeakingResult) {
        tmp4 = closure_1_8;
        isSpeakingResult = closure_1_8.isSpeaking(tmp2);
      }
      result = set(isSpeakingResult);
      result1 = closure_1_8.addReactChangeListener(handleChange);
      return () => {
        const result = SpeakingStore.removeReactChangeListener(handleChange);
      };
    }
  }
  const items2 = [id2, sharedValue2];
  cResult[6] = sharedValue2;
  cResult[7] = id2;
  cResult[8] = B;
  cResult[9] = items2;
  tmp27 = items2;
  tmp26 = B;
}) : ((cleanUp) => {
  let DEFAULT;
  let VideoSpinnerContext;
  let channelId;
  let connected;
  let guildId;
  let isCall;
  let item;
  let items3;
  let layoutManager;
  let layoutTransition;
  let mountedCards;
  let num;
  let physics;
  let scrollPosition;
  let streamId;
  let tmp28;
  let tmp29;
  let transitionState;
  let user;
  let userAvatarDecoration;
  let userNick;
  ({ item, transitionState } = cleanUp);
  scrollPosition = undefined;
  let windowDimensions;
  let id2;
  let sharedValue2;
  let cardLayoutCoordsSubscription;
  let pIPState;
  let sharedValue1;
  const id = item.id;
  const obj = cardLayoutCoordsSubscription;
  const tmp2 = id2;
  cleanUp = cleanUp.cleanUp;
  const context = cardLayoutCoordsSubscription.useContext(windowDimensions(id2[27]));
  ({ guildId, isCall, mountedCards, scrollPosition } = context);
  windowDimensions = context.windowDimensions;
  ({ channelId, layoutManager } = context);
  const tmp4 = windowDimensions(id2[50])(id, channelId, guildId);
  let obj2 = scrollPosition(id2[50]);
  let tmp6 = tmp4;
  if (!obj2.isStableParticipantWithUser(tmp4)) {
    tmp6 = closure_60;
  }
  const isSelf = tmp6.isSelf;
  id2 = tmp6.user.id;
  const items = [RTCConnectionStore];
  const tmp5Result = scrollPosition(tmp2[28]);
  const stateFromStores = tmp5Result.useStateFromStores(items, () => connected.isConnected());
  const tmp5Result10 = scrollPosition(tmp2[50]);
  const tmp8 = tmp5Result10.isStableUserParticipant(tmp4) && tmp4.ringing;
  let str = "";
  if (null != tmp4) {
    str = "";
    if ("user" in tmp4) {
      str = tmp4.user.id;
    }
  }
  let type1;
  const tmpResult = windowDimensions(tmp2[29]);
  if (tmp4 != null) {
    type1 = tmp4.type;
  }
  if (type1 === ParticipantTypes.STREAM) {
    DEFAULT = tmp5(tmp2[30]).MediaEngineContextTypes.STREAM;
  } else {
    DEFAULT = tmp5(tmp2[30]).MediaEngineContextTypes.DEFAULT;
  }
  const tmpResultResult = tmpResult(DEFAULT, str);
  const tmp13 = windowDimensions(tmp2[56])(str);
  const useSharedValue = scrollPosition(tmp2[14]).useSharedValue;
  scrollPosition(tmp2[14]);
  if (transitionState === scrollPosition(tmp2[47]).TransitionStates.MOUNTED) {
    num = 1;
  } else {
    num = 0;
  }
  const sharedValue = useSharedValue(num);
  let isSpeakingResult = null != id2;
  const useSharedValue2 = scrollPosition(tmp2[14]).useSharedValue;
  scrollPosition(tmp2[14]);
  if (isSpeakingResult) {
    isSpeakingResult = SpeakingStore.isSpeaking(id2);
  }
  sharedValue2 = useSharedValue2(isSpeakingResult);
  const items1 = [id2, sharedValue2];
  const layoutEffect = obj.useLayoutEffect(() => {
    function handleChange() {
      const isSpeakingResult = null != id2 && SpeakingStore.isSpeaking(tmp2);
      const result = set(isSpeakingResult);
    }
    let isSpeakingResult = null != id2;
    set = sharedValue2.set;
    if (isSpeakingResult) {
      isSpeakingResult = SpeakingStore.isSpeaking(tmp2);
    }
    let result = set(isSpeakingResult);
    const result1 = SpeakingStore.addReactChangeListener(handleChange);
    return () => {
      const result = SpeakingStore.removeReactChangeListener(handleChange);
    };
  }, items1);
  const tmp5Result13 = scrollPosition(tmp2[57]);
  cardLayoutCoordsSubscription = tmp5Result13.useCardLayoutCoordsSubscription(id, layoutManager);
  const tmp5Result14 = scrollPosition(tmp2[14]);
  class B {
    constructor() {
      const sum = EDGE_GUTTER + cardLayoutCoordsSubscription.get().y;
      const value = scrollPosition.get();
      let tmp3 = sum > value - cardLayoutCoordsSubscription.get().height;
      if (tmp3) {
        const value2 = scrollPosition.get();
        tmp3 = sum < value2 + windowDimensions.get().height;
      }
      return tmp3;
    }
  }
  let obj3 = { EDGE_GUTTER, coords: cardLayoutCoordsSubscription, scrollPosition, windowDimensions };
  B.__closure = obj3;
  B.__workletHash = 4524381131947;
  B.__initData = __initData38;
  const derivedValue = tmp5Result14.useDerivedValue(B);
  const tmp5Result15 = scrollPosition(tmp2[49]);
  pIPState = tmp5Result15.usePIPState();
  const scale = pIPState.scale;
  const tmp5Result16 = scrollPosition(tmp2[14]);
  sharedValue1 = tmp5Result16.useSharedValue(scale.get());
  const items2 = [pIPState.scale, sharedValue1];
  const memo = obj.useMemo(() => {
    let layoutTransition;
    const physics = { mass: closure_1_11.mass, damping: windowDimensions(id2[58])(closure_1_11.damping - 2, closure_1_11.damping + 2), stiffness: windowDimensions(id2[58])(closure_1_11.stiffness - 20, closure_1_11.stiffness + 20) };
    const obj2 = { physics, layoutTransition };
    layoutTransition = function layoutTransition(originX) {
      let flag;
      if (flag === undefined) {
        flag = false;
      }
      return layoutTransitionFunction(originX, obj, pIPState.scale, sharedValue1, flag);
    };
    const obj3 = { layoutTransitionFunction, physics, pipState: pIPState, lastPipScale: sharedValue1 };
    layoutTransition.__closure = obj3;
    layoutTransition.__workletHash = 3971511316222;
    layoutTransition.__initData = __initData;
    return obj2;
  }, items2);
  ({ physics, layoutTransition } = memo);
  if (item.type === constants2.CTA) {
    const id3 = item.id;
    if (constants.NO_VIDEO_PARTICIPANTS === id3) {
      tmp28 = closure_20(tmp(tmp2[59]), {});
      tmp29 = closure_20;
    } else if (tmp39.CALLER_DISCONNECTED === id3) {
      tmp28 = closure_20(tmp(tmp2[60]), {});
      tmp29 = closure_20;
    }
    const obj4 = { cleanUp, coords: cardLayoutCoordsSubscription, id, isRTCConnected: stateFromStores, isScrollVisible: derivedValue, layoutPhysics: physics, transitionState, sharedVisible: sharedValue, children: items3 };
    items3 = [tmp28, , ];
    let tmp29Result = null != tmp4;
    if (tmp29Result) {
      const obj5 = { isRinging: tmp8, participant: tmp4, label: userNick, layout: layoutTransition, speaking: sharedValue2 };
      userNick = undefined;
      const tmpResult3 = windowDimensions(tmp2[63]);
      const tmp5Result17 = scrollPosition(tmp2[50]);
      if (tmp5Result17.isStableParticipantWithUser(tmp4)) {
        userNick = tmp4.userNick;
      }
      tmp29Result = tmp29(tmpResult3, obj5);
    }
    items3[1] = tmp29Result;
    const tmp5Result18 = scrollPosition(tmp2[50]);
    let result = tmp5Result18.isStableParticipantWithUser(tmp4);
    if (result) {
      const obj6 = { speaking: sharedValue2, id, userId: tmp4.user.id, isSelf, layout: layoutTransition };
      result = tmp29(closure_50, obj6);
    }
    items3[2] = result;
    return closure_22(closure_76, obj4);
  } else if (null != tmp4) {
    const type = item.type;
    const type2 = tmp4.type;
    if (ParticipantTypes.USER === type2) {
      let tmp31;
      ({ streamId, user } = tmp4);
      if (tmp4.hasVideo) {
        if (stateFromStores) {
          let tmp31Result;
          if (tmp4.canRenderVideo) {
            let tmp34;
            if (null != tmpResultResult) {
              let tmp34Result;
              if (null == tmp13) {
                const obj7 = { avError: tmpResultResult, userId: user.id, style: pIPState.absoluteFill };
                tmp34Result = closure_20(tmp(tmp2[61]), obj7);
                tmp34 = closure_20;
              }
              tmp31 = tmp34;
              tmp31Result = tmp34Result;
            }
            tmp34 = closure_20;
            const obj8 = { id: tmp30, userId: user.id, streamId, isScrollVisible: derivedValue, videoSpinnerContext: isSelf ? VideoSpinnerContext.SELF_VIDEO : VideoSpinnerContext.REMOTE_VIDEO, sharedCoords: cardLayoutCoordsSubscription, isCamera: true, focusOnReady: isCall, layout: layoutTransition };
            const tmpResult4 = windowDimensions(tmp2[34]);
            if (streamId == null) {
              streamId = null;
            }
            VideoSpinnerContext = tmp5(tmp2[35]).VideoSpinnerContext;
            if (isCall) {
              isCall = !isSelf;
            }
            tmp34Result = tmp34(tmpResult4, obj8);
          }
          tmp29 = tmp31;
          tmp28 = tmp31Result;
        }
      }
      tmp31 = closure_20;
      let flag = false;
      const obj9 = { isRinging: tmp8, avatarURI: user.getAvatarURL(guildId, 80, false), avatarDecoration: userAvatarDecoration, layout: layoutTransition, layoutPhysics: physics, userId: user.id, guildId };
      userAvatarDecoration = tmp4.userAvatarDecoration;
      tmp31Result = tmp31(closure_42, obj9);
    } else if (ParticipantTypes.STREAM === type2) {
      const obj11 = { userId: tmp4.user.id, id: null, streamGuildId: null, streamId: null, userNick: null, isSelf, sharedCoords: cardLayoutCoordsSubscription, isScrollVisible: derivedValue, layout: layoutTransition };
      ({ id: obj10.id, streamGuildId: obj10.streamGuildId, streamId: obj10.streamId, userNick: obj10.userNick } = tmp4);
      tmp28 = closure_20(closure_37, obj11);
      tmp29 = closure_20;
    } else if (ParticipantTypes.ACTIVITY === type2) {
      const obj12 = { sharedVisible: sharedValue, applicationId: tmp4.applicationId, layout: layoutTransition };
      tmp28 = closure_20(tmp(tmp2[62]), obj12, tmp4.id);
      tmp29 = closure_20;
    }
  }
  const obj13 = { isRinging: tmp8, avatarURI: "r", avatarDecoration: "emoji", layout: layoutTransition, layoutPhysics: physics };
  tmp28 = closure_20(closure_42, obj13);
  tmp29 = closure_20;
}));
size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/card/VoicePanelCard.tsx");

export default memoResult;