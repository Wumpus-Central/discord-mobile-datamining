// discord_app/modules/video_calls/native/components/CallTile.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import ReanimatedRexportDefault from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import ChannelRTCActionCreatorsDefault from "../../../../actions/ChannelRTCActionCreators.tsx";
import showUserProfileActionSheetDefault from "../../../user_profile/native/showUserProfileActionSheet.tsx";
import _modDef8754 from "../../../../../_runtime/metro/08754__.js";
import _modDef9464 from "../../../../../_runtime/metro/09464__.js";
import TouchableStreamPreviewDefault from "../../../../components_native/TouchableStreamPreview.tsx";
import _modDef9747 from "../../../../../_runtime/metro/09747__.js";
import _modDef9748 from "../../../../../_runtime/metro/09748__.js";
import _modDef9749 from "../../../../../_runtime/metro/09749__.js";
import ParticipantTitleDefault from "ParticipantTitle.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ApplicationStreamingStore from "../../../../stores/ApplicationStreamingStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const ChannelCallStore = fn(9050);
({ resetFocus: closure_8, toggleFocus: closure_9 } = ChannelCallStore);
const CallConstants = fn(4911);
({ ParticipantTypes: c10, isStreamParticipant: closure_11, VoicePlatforms: closure_12 } = CallConstants);
const jsxProd = fn(21);
({ jsx: map1, Fragment: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(4890);
let obj = {
  liveContainer: { position: "absolute", top: 8, right: 8 },
  titleIcon: { marginRight: 6 },
  usernameContainer: null,
  usernamePosition: null,
  streamPreview: null,
  screenshareContainer: null,
  stageStreamContainer: null,
};
let obj3 = {
  flexDirection: "row",
  alignItems: "center",
  alignSelf: "flex-start",
  backgroundColor: null,
  borderRadius: null,
  paddingHorizontal: 8,
  paddingVertical: 4,
};
const ColorUtils = fn(4727);
obj3.backgroundColor = ColorUtils.hexOpacityToRgba(nativeDefault.unsafe_rawColors.PRIMARY_700, 0.5);
obj3.borderRadius = nativeDefault.radii.sm;
obj.usernameContainer = obj3;
let rect = {
  overflow: "hidden",
  position: "absolute",
  bottom: 8,
  left: 8,
  right: 40,
  borderRadius: nativeDefault.radii.sm,
};
obj.usernamePosition = rect;
obj.streamPreview = { flex: 1, width: "100%", backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_600 };
let obj4 = { flex: 1, width: "100%", backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_600 };
obj.screenshareContainer = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  width: "100%",
  backgroundColor: nativeDefault.colors.BLACK,
};
let obj6 = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  width: "100%",
  backgroundColor: nativeDefault.colors.BLACK,
};
obj.stageStreamContainer = { backgroundColor: nativeDefault.colors.BLACK };
let closure_16 = createStyles.createStyles(obj);
fn(558);
let obj7 = { backgroundColor: nativeDefault.colors.BLACK };
let ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(11);
      ({ participant, style } = arg0);
      const tmp3 = closure_16();
      const id = participant.user.id;
      if (cResult[0] === style) {
        if (cResult[1] === tmp3.streamPreview) {
          let tmp4 = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { aspectRatio: "done", borderRadius: false };
          cResult[3] = obj2;
          let tmp6 = obj2;
        } else {
          tmp6 = cResult[3];
        }
        const _Symbol2 = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function l() {
            return closure_1_8();
          };
          cResult[4] = fn;
          let tmp7 = fn;
        } else {
          tmp7 = cResult[4];
        }
        if (cResult[5] === participant.stream.guildId) {
          if (cResult[6] === id) {
            let tmp8 = cResult[7];
          }
          if (cResult[8] === tmp4) {
            if (cResult[9] === tmp8) {
              let tmp12 = cResult[10];
            }
            return tmp12;
          }
          const obj3 = { style: tmp4, children: tmp8 };
          const tmp15 = __initData2(hasOwnProperty, obj3);
          cResult[8] = tmp4;
          cResult[9] = tmp8;
          cResult[10] = tmp15;
          tmp12 = tmp15;
        }
        const obj4 = {
          guildId: participant.stream.guildId,
          userId: id,
          style: tmp6,
          disableTransition: true,
          onPress: tmp7,
        };
        const tmp11 = __initData2(TouchableStreamPreviewDefault, obj4);
        cResult[5] = participant.stream.guildId;
        cResult[6] = id;
        cResult[7] = tmp11;
        tmp8 = tmp11;
      }
      const items = [tmp3.streamPreview, style];
      cResult[0] = style;
      cResult[1] = tmp3.streamPreview;
      cResult[2] = items;
      tmp4 = items;
    }
  : (participant) => {
      participant = participant.participant;
      const obj = { style: null, children: null };
      const items = [closure_16().streamPreview, participant.style];
      obj.style = items;
      obj.children = __initData2(TouchableStreamPreviewDefault, {
        guildId: participant.stream.guildId,
        userId: participant.user.id,
        style: { aspectRatio: "done", borderRadius: false },
        disableTransition: true,
        onPress() {
          return closure_1_8();
        },
      });
      return __initData2(hasOwnProperty, obj);
    };
let closure_17 = tmp7;
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? (participant) => {
      let titleIcon = dependencyMap;
      const cResult = c.c(3);
      participant = participant.participant;
      let titleIcon2 = closure_16();
      if (participant.type === constants.STREAM) {
        let tmp4 = _modDef9747;
      } else if (participant.type === tmp3.USER) {
        const voicePlatform = participant.voicePlatform;
        if (constants2.MOBILE === voicePlatform) {
          tmp4 = _modDef9748;
        } else if (constants2.XBOX === voicePlatform) {
          tmp4 = _modDef8754;
        } else if (constants2.PLAYSTATION === voicePlatform) {
          tmp4 = _modDef9464;
        } else if (constants2.QUEST === voicePlatform) {
          tmp4 = _modDef9749;
        }
      }
      if (null == tmp4) {
        return null;
      } else {
        if (cResult[0] === tmp4) {
        }
        const obj2 = {
          source: tmp4,
          size: native.Icon.Sizes.REFRESH_SMALL_16,
          color: nativeDefault.unsafe_rawColors.WHITE,
          style: null,
        };
        titleIcon = titleIcon2.titleIcon;
        obj2.style = titleIcon;
        const tmp13 = __initData2(native.Icon, obj2);
        cResult[0] = tmp4;
        titleIcon2 = titleIcon2.titleIcon;
        cResult[1] = titleIcon2;
        cResult[2] = tmp13;
      }
    }
  : (participant) => {
      participant = participant.participant;
      if (participant.type === constants.STREAM) {
        let tmp3 = _modDef9747;
      } else if (participant.type === tmp2.USER) {
        const voicePlatform = participant.voicePlatform;
        if (constants2.MOBILE === voicePlatform) {
          tmp3 = _modDef9748;
        } else if (constants2.XBOX === voicePlatform) {
          tmp3 = _modDef8754;
        } else if (constants2.PLAYSTATION === voicePlatform) {
          tmp3 = _modDef9464;
        } else if (constants2.QUEST === voicePlatform) {
          tmp3 = _modDef9749;
        }
      }
      let tmp14 = null;
      if (null != tmp3) {
        const obj = {
          source: tmp3,
          size: native.Icon.Sizes.REFRESH_SMALL_16,
          color: nativeDefault.unsafe_rawColors.WHITE,
          style: tmp.titleIcon,
        };
        tmp14 = __initData2(native.Icon, obj);
      }
      return tmp14;
    };
const __initData = {
  code: "function CallTileTsx1(){const{withTiming,reveal,STANDARD_EASING}=this.__closure;return{opacity:withTiming(reveal?1:0,{easing:STANDARD_EASING,duration:250})};}",
};
const __initData2 = {
  code: "function CallTileTsx2(){const{withTiming,reveal,STANDARD_EASING}=this.__closure;return{opacity:withTiming(reveal?1:0,{easing:STANDARD_EASING,duration:250})};}",
};
ReactCompilerGating = fn(558);
let tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = reveal(576).c(27);
      ({ participant, isActiveStream, channel } = arg0);
      ({ hasLeftSafeArea, hasRightSafeArea, hasBottomSafeArea, hasTopSafeArea } = arg0);
      const tmp4 = closure_16();
      let obj = reveal(576);
      const tmp = reveal;
      ({ bottom, left, top, right } = useSafeAreaInsetsDefault());
      reveal = noop.useContext(reveal(9058).RevealContext).reveal;
      const tmp6 = useSafeAreaInsetsDefault();
      const fn = function l() {
        let num = 0;
        if (reveal) {
          num = 1;
        }
        const obj2 = { opacity: null };
        const obj = timing;
        obj2.opacity = obj.withTiming(num, { easing: native.STANDARD_EASING, duration: 250 });
        return obj2;
      };
      let obj2 = reveal(4612);
      fn.__closure = { withTiming: reveal(4891).withTiming, reveal, STANDARD_EASING: reveal(1188).STANDARD_EASING };
      fn.__workletHash = 15640123774063;
      fn.__initData = __initData;
      const animatedStyle = obj2.useAnimatedStyle(fn);
      let num = 0;
      if (hasBottomSafeArea) {
        num = bottom;
      }
      let num2 = 0;
      if (hasRightSafeArea) {
        num2 = right;
      }
      let num3 = 0;
      if (hasLeftSafeArea) {
        num3 = left;
      }
      let num4 = 0;
      if (hasTopSafeArea) {
        num4 = top;
      }
      if (cResult[0] === num) {
        if (cResult[1] === num2) {
          if (cResult[2] === num3) {
            if (cResult[3] === num4) {
              let tmp8 = cResult[4];
            }
            if (cResult[5] === animatedStyle) {
              if (cResult[6] === tmp8) {
                let tmp9 = cResult[7];
              }
              if (cResult[8] === isActiveStream) {
                if (cResult[9] === tmp4.liveContainer) {
                  let tmp11 = cResult[10];
                }
                if (cResult[11] !== participant) {
                  const obj4 = { participant };
                  const tmp18 = closure_13(closure_18, obj4);
                  cResult[11] = participant;
                  cResult[12] = tmp18;
                  let tmp15 = tmp18;
                } else {
                  tmp15 = cResult[12];
                }
                if (cResult[13] === channel) {
                  if (cResult[14] === participant) {
                    let tmp19 = cResult[15];
                  }
                  if (cResult[16] === tmp4.usernameContainer) {
                    if (cResult[17] === tmp15) {
                      if (cResult[18] === tmp19) {
                        let tmp22 = cResult[19];
                      }
                      if (cResult[20] === tmp4.usernamePosition) {
                        if (cResult[21] === tmp22) {
                          let tmp26 = cResult[22];
                        }
                        if (cResult[23] === tmp26) {
                          if (cResult[24] === tmp9) {
                            if (cResult[25] === tmp11) {
                              let tmp30 = cResult[26];
                            }
                            return tmp30;
                          }
                        }
                        const obj5 = { pointerEvents: "none", style: tmp9, children: null };
                        const items = [tmp11, tmp26];
                        obj5.children = items;
                        const tmp32 = closure_15(ReanimatedRexportDefault.View, obj5);
                        cResult[23] = tmp26;
                        cResult[24] = tmp9;
                        cResult[25] = tmp11;
                        cResult[26] = tmp32;
                        tmp30 = tmp32;
                      }
                      const obj6 = { style: tmp4.usernamePosition, children: tmp22 };
                      const tmp29 = closure_13(closure_5, obj6);
                      cResult[20] = tmp4.usernamePosition;
                      cResult[21] = tmp22;
                      cResult[22] = tmp29;
                      tmp26 = tmp29;
                    }
                  }
                  const obj7 = { style: tmp4.usernameContainer, children: null };
                  const items1 = [tmp15, tmp19];
                  obj7.children = items1;
                  const tmp25 = closure_15(closure_5, obj7);
                  cResult[16] = tmp4.usernameContainer;
                  cResult[17] = tmp15;
                  cResult[18] = tmp19;
                  cResult[19] = tmp25;
                  tmp22 = tmp25;
                }
                const obj8 = { channel, participant };
                const tmp21 = closure_13(ParticipantTitleDefault, obj8);
                cResult[13] = channel;
                cResult[14] = participant;
                cResult[15] = tmp21;
                tmp19 = tmp21;
              }
              let tmp12 = isActiveStream;
              if (isActiveStream) {
                const obj9 = { style: tmp4.liveContainer, children: closure_13(tmp(1188).LiveTag, {}) };
                tmp12 = closure_13(closure_5, obj9);
              }
              cResult[8] = isActiveStream;
              cResult[9] = tmp4.liveContainer;
              cResult[10] = tmp12;
              tmp11 = tmp12;
            }
            const items2 = [closure_4.absoluteFill, tmp8, animatedStyle];
            cResult[5] = animatedStyle;
            cResult[6] = tmp8;
            cResult[7] = items2;
            tmp9 = items2;
          }
        }
      }
      const rect = { bottom: num, right: num2, left: num3, top: num4 };
      cResult[0] = num;
      cResult[1] = num2;
      cResult[2] = num3;
      cResult[3] = num4;
      cResult[4] = rect;
      tmp8 = rect;
      const obj3 = { withTiming: reveal(4891).withTiming, reveal, STANDARD_EASING: reveal(1188).STANDARD_EASING };
    }
  : (arg0) => {
      ({ participant, isActiveStream } = arg0);
      let reveal;
      ({ channel, hasLeftSafeArea, hasRightSafeArea, hasBottomSafeArea, hasTopSafeArea } = arg0);
      const tmp = closure_16();
      ({ bottom, left, top, right } = useSafeAreaInsetsDefault());
      reveal = noop.useContext(reveal(9058).RevealContext).reveal;
      const tmp4 = useSafeAreaInsetsDefault();
      const tmp5 = reveal;
      class A {
        constructor() {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[30]);
          num = 0;
          if (reveal) {
            num = 1;
          }
          obj1 = { opacity: null };
          obj4 = { easing: tmp(tmp2[27]).STANDARD_EASING, duration: 250 };
          obj1.opacity = obj.withTiming(num, obj4);
          return obj1;
        }
      }
      let obj = reveal(4612);
      A.__closure = { withTiming: reveal(4891).withTiming, reveal, STANDARD_EASING: reveal(1188).STANDARD_EASING };
      A.__workletHash = 1463196379948;
      A.__initData = __initData2;
      let num = 0;
      const animatedStyle = obj.useAnimatedStyle(A);
      if (hasBottomSafeArea) {
        num = bottom;
      }
      const rect = { bottom: num, right: null, left: null, top: null };
      let num2 = 0;
      if (hasRightSafeArea) {
        num2 = right;
      }
      rect.right = num2;
      let num3 = 0;
      if (hasLeftSafeArea) {
        num3 = left;
      }
      rect.left = num3;
      let num4 = 0;
      if (hasTopSafeArea) {
        num4 = top;
      }
      rect.top = num4;
      const obj3 = { pointerEvents: "none", style: null, children: null };
      const items = [closure_4.absoluteFill, rect, animatedStyle];
      obj3.style = items;
      if (isActiveStream) {
        const obj4 = { style: tmp.liveContainer, children: closure_13(tmp5(1188).LiveTag, {}) };
        isActiveStream = closure_13(closure_5, obj4);
      }
      const items1 = [isActiveStream];
      const obj5 = { style: tmp.usernamePosition, children: null };
      const obj6 = { style: tmp.usernameContainer, children: null };
      const items2 = [
        closure_13(closure_18, { participant }),
        closure_13(ParticipantTitleDefault, { channel, participant }),
      ];
      obj6.children = items2;
      obj5.children = closure_15(closure_5, obj6);
      items1[1] = closure_13(closure_5, obj5);
      obj3.children = items1;
      return closure_15(ReanimatedRexportDefault.View, obj3);
    };
let closure_21 = tmp8;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/CallTile.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (participant) => {
        const cResult = participant(analyticsLocations[11]).c(60);
        participant = participant.participant;
        ({ avatarSize, channel } = participant);
        ({
          hasTopSafeArea,
          hasLeftSafeArea,
          hasRightSafeArea,
          hasBottomSafeArea,
          shrinkStreamEmptyState,
          contentStyle,
          hasNotch,
          resizeMode,
        } = participant);
        closure_16();
        analyticsLocations = channel(tmp2[12])().analyticsLocations;
        let obj = participant(analyticsLocations[11]);
        ({ bottom, right } = channel(analyticsLocations[13])());
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [ApplicationStreamingStore];
          cResult[0] = items;
          let first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== participant) {
          const fn = function o() {
            let streamForUser = null;
            if (closure_2_11(participant)) {
              streamForUser = ApplicationStreamingStore.getStreamForUser(
                participant.user.id,
                participant.stream.guildId,
              );
            }
            const obj = { stream: streamForUser, activeStream: null };
            let activeStreamForUser = null;
            if (closure_2_11(participant)) {
              activeStreamForUser = ApplicationStreamingStore.getActiveStreamForUser(
                participant.user.id,
                participant.stream.guildId,
              );
            }
            obj.activeStream = activeStreamForUser;
            return obj;
          };
          cResult[1] = participant;
          cResult[2] = fn;
          let tmp10 = fn;
        } else {
          tmp10 = cResult[2];
        }
        const tmp7 = channel(analyticsLocations[13])();
        const stateFromStoresObject = participant(analyticsLocations[14]).useStateFromStoresObject(first, tmp10);
        const activeStream = stateFromStoresObject.activeStream;
        if (cResult[3] === channel.id) {
          if (cResult[4] === participant.id) {
            let tmp13 = cResult[5];
          }
          if (cResult[6] === analyticsLocations) {
            if (cResult[7] === channel.id) {
              let tmp14 = cResult[8];
            }
            let num7 = 8;
            if (hasBottomSafeArea) {
              num7 = 8 + bottom;
            }
            let num8 = 8;
            if (hasRightSafeArea) {
              num8 = 8 + right;
            }
            if (cResult[9] === num7) {
              if (cResult[10] === num8) {
                let tmp15 = cResult[11];
              }
              const _Symbol = Symbol;
              if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
                const items1 = [UserStore];
                class J {
                  constructor() {
                    return closure_1_7.getCurrentUser();
                  }
                }
                cResult[12] = J;
                cResult[13] = items1;
                let tmp17 = items1;
                let tmp16 = J;
              } else {
                tmp16 = cResult[12];
                tmp17 = cResult[13];
              }
              const stateFromStores = tmp(tmp2[14]).useStateFromStores(tmp17, tmp16);
              const type = participant.type;
              if (constants.HIDDEN_STREAM === type) {
                if (cResult[14] === contentStyle) {
                }
                class J {
                  constructor() {
                    return closure_1_7.getCurrentUser();
                  }
                }
                tmp39[0] = participant;
                tmp39[1] = contentStyle;
                const tmp40 = closure_13(closure_17, tmp39);
                cResult[14] = contentStyle;
                cResult[15] = participant;
                cResult[16] = tmp40;
              } else {
                if (constants.STREAM === type) {
                  if (null != activeStream) {
                    const ownerId = activeStream.ownerId;
                    if (stateFromStores != null) {
                      const id = stateFromStores.id;
                    }
                    class J {
                      constructor() {
                        return closure_1_7.getCurrentUser();
                      }
                    }
                  } else {
                    let tmp25 = null;
                    if (null != tmp12) {
                      if (cResult[33] === contentStyle) {
                        if (cResult[34] === participant) {
                          let tmp31 = cResult[35];
                        }
                        tmp25 = tmp31;
                      }
                      class J {
                        constructor() {
                          return closure_1_7.getCurrentUser();
                        }
                      }
                      tmp34[0] = participant;
                      tmp34[1] = contentStyle;
                      const tmp35 = closure_13(closure_17, tmp34);
                      cResult[33] = contentStyle;
                      cResult[34] = participant;
                      cResult[35] = tmp35;
                      tmp31 = tmp35;
                    }
                  }
                } else if (constants.USER === type) {
                  if (cResult[36] === avatarSize) {
                    if (cResult[37] === contentStyle) {
                      if (cResult[38] === tmp13) {
                        if (cResult[39] === tmp4) {
                          if (cResult[40] === tmp14) {
                            if (cResult[41] === participant) {
                              if (cResult[42] === resizeMode) {
                                if (cResult[43] === tmp15) {
                                  let tmp26 = cResult[44];
                                }
                                tmp25 = tmp26;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  const obj2 = {
                    participant: null,
                    avatarSize: null,
                    onSingleTap: null,
                    onDoubleTap: null,
                    onLongPress: null,
                    statusStyle: null,
                    hasNotch: null,
                    resizeMode: null,
                    style: null,
                  };
                  class J {
                    constructor() {
                      return closure_1_7.getCurrentUser();
                    }
                  }
                  obj2.avatarSize = avatarSize;
                  obj2.onSingleTap = onSingleTap;
                  obj2.onDoubleTap = tmp13;
                  obj2.onLongPress = tmp14;
                  obj2.statusStyle = tmp15;
                  obj2.hasNotch = tmp4;
                  obj2.resizeMode = resizeMode;
                  obj2.style = contentStyle;
                  const tmp29 = closure_13(channel(tmp2[19]), obj2);
                  cResult[36] = avatarSize;
                  cResult[37] = contentStyle;
                  cResult[38] = tmp13;
                  cResult[39] = tmp4;
                  cResult[40] = tmp14;
                  cResult[41] = participant;
                  cResult[42] = resizeMode;
                  cResult[43] = tmp15;
                  cResult[44] = tmp29;
                  tmp26 = tmp29;
                } else {
                  tmp25 = null;
                  if (constants.ACTIVITY === type) {
                    if (cResult[45] === channel) {
                      if (cResult[46] === contentStyle) {
                        if (cResult[47] === participant) {
                          let tmp21 = cResult[48];
                        }
                        tmp25 = tmp21;
                      }
                    }
                    const obj3 = { participant: null, style: null, channel: null, onSingleTap: null };
                    class J {
                      constructor() {
                        return closure_1_7.getCurrentUser();
                      }
                    }
                    obj3.style = contentStyle;
                    obj3.channel = channel;
                    obj3.onSingleTap = onSingleTap;
                    const tmp24 = closure_13(channel(tmp2[20]), obj3);
                    cResult[45] = channel;
                    cResult[46] = contentStyle;
                    cResult[47] = participant;
                    cResult[48] = tmp24;
                    tmp21 = tmp24;
                  }
                }
                if (cResult[49] === activeStream) {
                  if (cResult[50] === channel) {
                    if (cResult[51] === hasBottomSafeArea) {
                      if (cResult[52] === hasLeftSafeArea) {
                        if (cResult[53] === hasRightSafeArea) {
                          if (cResult[54] === hasTopSafeArea) {
                            if (cResult[55] === participant) {
                              let tmp42 = cResult[56];
                            }
                            if (cResult[57] === tmp25) {
                              if (cResult[58] === tmp42) {
                                let tmp47 = cResult[59];
                              }
                              return tmp47;
                            }
                            class J {
                              constructor() {
                                return closure_1_7.getCurrentUser();
                              }
                            }
                            const obj4 = { children: null };
                            const items2 = [tmp25, tmp42];
                            obj4.children = items2;
                            const tmp49 = closure_15(closure_14, obj4);
                            cResult[57] = tmp25;
                            cResult[58] = tmp42;
                            cResult[59] = tmp49;
                            tmp47 = tmp49;
                          }
                        }
                      }
                    }
                  }
                }
                class J {
                  constructor() {
                    return closure_1_7.getCurrentUser();
                  }
                }
                if (participant.type !== constants.ACTIVITY) {
                  const obj5 = {
                    participant: null,
                    isActiveStream: null,
                    channel: null,
                    hasTopSafeArea: null,
                    hasLeftSafeArea: null,
                    hasRightSafeArea: null,
                    hasBottomSafeArea: null,
                  };
                  class J {
                    constructor() {
                      return closure_1_7.getCurrentUser();
                    }
                  }
                  obj5.isActiveStream = null != activeStream;
                  obj5.channel = channel;
                  obj5.hasTopSafeArea = hasTopSafeArea;
                  obj5.hasLeftSafeArea = hasLeftSafeArea;
                  obj5.hasRightSafeArea = hasRightSafeArea;
                  obj5.hasBottomSafeArea = hasBottomSafeArea;
                  const tmp44 = closure_13(closure_21, obj5);
                }
                cResult[49] = activeStream;
                cResult[50] = channel;
                cResult[51] = hasBottomSafeArea;
                cResult[52] = hasLeftSafeArea;
                cResult[53] = hasRightSafeArea;
                cResult[54] = hasTopSafeArea;
                cResult[55] = participant;
                cResult[56] = tmp44;
                tmp42 = tmp44;
              }
              const tmpResult2 = tmp(tmp2[14]);
            }
            const rect = { bottom: num7, right: num8 };
            cResult[9] = num7;
            cResult[10] = num8;
            cResult[11] = rect;
            tmp15 = rect;
          }
          const fn2 = function j(user) {
            showUserProfileActionSheetDefault({
              userId: user.user.id,
              channelId: channel.id,
              isVoiceContext: true,
              sourceAnalyticsLocations: analyticsLocations,
            });
          };
          cResult[6] = analyticsLocations;
          cResult[7] = channel.id;
          cResult[8] = fn2;
          tmp14 = fn2;
        }
        class U {
          constructor() {
            tmp = resetFocus();
            obj = closure_1(closure_2[15]);
            participant = obj.selectParticipant(channel.id, participant.id);
            return;
          }
        }
        cResult[3] = channel.id;
        cResult[4] = participant.id;
        cResult[5] = U;
        tmp13 = U;
        const tmpResult = participant(analyticsLocations[14]);
      }
    : (participant) => {
        participant = participant.participant;
        const channel = participant.channel;
        const hasRightSafeArea = participant.hasRightSafeArea;
        const hasBottomSafeArea = participant.hasBottomSafeArea;
        ({ contentStyle, hasNotch } = participant);
        ({ avatarSize, hasTopSafeArea, hasLeftSafeArea, shrinkStreamEmptyState } = participant);
        if (hasNotch === undefined) {
          hasNotch = false;
        }
        const tmp = closure_16();
        const analyticsLocations = channel(hasRightSafeArea[12])().analyticsLocations;
        let rect = channel(hasRightSafeArea[13])();
        const bottom = rect.bottom;
        const right = rect.right;
        const items = [right];
        const stateFromStoresObject = participant(hasRightSafeArea[14]).useStateFromStoresObject(items, () => {
          let streamForUser = null;
          if (closure_2_11(participant)) {
            streamForUser = ApplicationStreamingStore.getStreamForUser(participant.user.id, participant.stream.guildId);
          }
          const obj = { stream: streamForUser, activeStream: null };
          let activeStreamForUser = null;
          if (closure_2_11(participant)) {
            activeStreamForUser = ApplicationStreamingStore.getActiveStreamForUser(
              participant.user.id,
              participant.stream.guildId,
            );
          }
          obj.activeStream = activeStreamForUser;
          return obj;
        });
        const activeStream = stateFromStoresObject.activeStream;
        const items1 = [channel.id, participant.id];
        const callback = hasBottomSafeArea.useCallback(() => {
          closure_2_8();
          participant = ChannelRTCActionCreatorsDefault.selectParticipant(channel.id, participant.id);
        }, items1);
        const items2 = [channel.id, analyticsLocations];
        const items3 = [hasBottomSafeArea, hasRightSafeArea, bottom, right];
        const callback1 = hasBottomSafeArea.useCallback((user) => {
          showUserProfileActionSheetDefault({
            userId: user.user.id,
            channelId: channel.id,
            isVoiceContext: true,
            sourceAnalyticsLocations: analyticsLocations,
          });
        }, items2);
        const memo = hasBottomSafeArea.useMemo(() => {
          let num = 8;
          if (hasBottomSafeArea) {
            num = 8 + bottom;
          }
          const rect = { bottom: num, right: null };
          let num2 = 8;
          if (hasRightSafeArea) {
            num2 = 8 + right;
          }
          rect.right = num2;
          return rect;
        }, items3);
        let obj = participant(hasRightSafeArea[14]);
        const items4 = [UserStore];
        const stateFromStores = participant(hasRightSafeArea[14]).useStateFromStores(items4, () =>
          currentUser.getCurrentUser(),
        );
        const type = participant.type;
        if (constants.HIDDEN_STREAM === type) {
          const obj3 = { participant, style: contentStyle };
          let tmp10 = closure_13(closure_17, obj3);
        } else if (constants.STREAM === type) {
          if (null != activeStream) {
            let id;
            if (stateFromStores != null) {
              id = stateFromStores.id;
            }
            if (activeStream.ownerId !== id) {
              const obj4 = {
                participant,
                onSingleTap,
                onDoubleTap: callback,
                removeEmptyStateImage: shrinkStreamEmptyState,
                onFullScreen: callback,
                fullscreenIconStyle: memo,
                style: contentStyle,
              };
              let tmp17Result = closure_13(tmp2(tmp3[17]), obj4);
            } else {
              const obj5 = { style: tmp.screenshareContainer, children: null };
              const obj6 = { participant, onSingleTap, onDoubleTap: callback, containerStyle: null };
              let stageStreamContainer;
              if (channel.isGuildStageVoice()) {
                stageStreamContainer = tmp.stageStreamContainer;
              }
              obj6.containerStyle = stageStreamContainer;
              obj5.children = closure_13(tmp2(tmp3[18]), obj6);
              tmp17Result = closure_13(bottom, obj5);
              const tmp2Result = tmp2(tmp3[18]);
            }
            tmp10 = tmp17Result;
          } else {
            tmp10 = null;
            if (null != stateFromStoresObject.stream) {
              const obj7 = { participant, style: contentStyle };
              tmp10 = closure_13(closure_17, obj7);
            }
          }
        } else if (constants.USER === type) {
          const obj8 = {
            participant,
            avatarSize,
            onSingleTap,
            onDoubleTap: callback,
            onLongPress: callback1,
            statusStyle: memo,
            hasNotch,
            resizeMode: participant.resizeMode,
            style: contentStyle,
          };
          tmp10 = closure_13(tmp2(tmp3[19]), obj8);
        } else {
          tmp10 = null;
          if (constants.ACTIVITY === type) {
            const obj9 = { participant, style: contentStyle, channel, onSingleTap };
            tmp10 = closure_13(tmp2(tmp3[20]), obj9);
          }
        }
        let tmp27 = null;
        if (participant.type !== constants.ACTIVITY) {
          const obj10 = {
            participant,
            isActiveStream: null != activeStream,
            channel,
            hasTopSafeArea,
            hasLeftSafeArea,
            hasRightSafeArea,
            hasBottomSafeArea,
          };
          tmp27 = closure_13(closure_21, obj10);
        }
        const obj11 = { children: null };
        const items5 = [tmp10, tmp27];
        obj11.children = items5;
        return closure_15(closure_14, obj11);
      },
);
export const StreamPreviewTile = tmp7;
export const TileOverlay = tmp8;
