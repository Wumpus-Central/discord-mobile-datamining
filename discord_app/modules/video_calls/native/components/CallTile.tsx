// discord_app/modules/video_calls/native/components/CallTile.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import ReanimatedRexportDefault from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import ChannelRTCActionCreatorsDefault from "../../../../actions/ChannelRTCActionCreators.tsx";
import showUserProfileActionSheetDefault from "../../../user_profile/native/showUserProfileActionSheet.tsx";
import AssetRegistryDefault from "../../../../../_runtime/08786_AssetRegistry.js";
import AssetRegistryDefault2 from "../../../../../_runtime/09477_AssetRegistry.js";
import TouchableStreamPreviewDefault from "../../../../components_native/TouchableStreamPreview.tsx";
import AssetRegistryDefault3 from "../../../../../_runtime/09760_AssetRegistry.js";
import AssetRegistryDefault4 from "../../../../../_runtime/09761_AssetRegistry.js";
import AssetRegistryDefault5 from "../../../../../_runtime/09762_AssetRegistry.js";
import ParticipantTitleDefault from "ParticipantTitle.tsx";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import ApplicationStreamingStore from "../../../../stores/ApplicationStreamingStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import ChannelCallStore from "../ChannelCallStore.tsx";
import CallConstants from "../../../calls/CallConstants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ColorUtils_mod from "../../../../utils/ColorUtils.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let obj1, tmp2;

let ColorUtils;
let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let closure_4;
let hasOwnProperty;
let map1;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
let rect;
let unpackModuleId;
({ StyleSheet: closure_4, View: hasOwnProperty } = react_native);
({ resetFocus: metroImportAll, toggleFocus: c9 } = ChannelCallStore);
({ ParticipantTypes: c10, isStreamParticipant: unpackModuleId, VoicePlatforms: closure_12 } = CallConstants);
({ jsx: map1, Fragment: closure_14, jsxs: closure_15 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  liveContainer: { position: "absolute", top: 8, right: 8 },
  titleIcon: { marginRight: 6 },
  usernameContainer: obj2,
  usernamePosition: rect,
  streamPreview: obj3,
  screenshareContainer: obj4,
  stageStreamContainer: obj5,
};
obj2 = {
  flexDirection: "row",
  alignItems: "center",
  alignSelf: "flex-start",
  backgroundColor: ColorUtils.hexOpacityToRgba(nativeDefault.unsafe_rawColors.PRIMARY_700, 0.5),
  borderRadius: nativeDefault.radii.sm,
  paddingHorizontal: 8,
  paddingVertical: 4,
};
createStyles = createStyles.createStyles;
ColorUtils = ColorUtils_mod;
rect = {
  overflow: "hidden",
  position: "absolute",
  bottom: 8,
  left: 8,
  right: 40,
  borderRadius: nativeDefault.radii.sm,
};
obj3 = { flex: 1, width: "100%", backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_600 };
obj4 = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  width: "100%",
  backgroundColor: nativeDefault.colors.BLACK,
};
obj5 = { backgroundColor: nativeDefault.colors.BLACK };
let closure_16 = createStyles(obj);
let memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (participant) => {
        let analyticsLocations;
        let avatarSize;
        let bottom;
        let channel;
        let contentStyle;
        let currentUser;
        let first;
        let hasBottomSafeArea;
        let hasLeftSafeArea;
        let hasNotch;
        let hasRightSafeArea;
        let hasTopSafeArea;
        let items2;
        let resizeMode;
        let right;
        let shrinkStreamEmptyState;
        let tmp10;
        let obj = participant(analyticsLocations[11]);
        const cResult = obj.c(60);
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
        ({ bottom, right } = channel(analyticsLocations[13])());
        channel(analyticsLocations[13])();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [ApplicationStreamingStore];
          cResult[0] = items;
          first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== participant) {
          const fn = function o() {
            let activeStreamForUser;
            let streamForUser = null;
            if (unpackModuleId(participant)) {
              streamForUser = ApplicationStreamingStore.getStreamForUser(
                participant.user.id,
                participant.stream.guildId,
              );
            }
            const obj = { stream: streamForUser, activeStream: activeStreamForUser };
            activeStreamForUser = null;
            if (unpackModuleId(participant)) {
              activeStreamForUser = ApplicationStreamingStore.getActiveStreamForUser(
                participant.user.id,
                participant.stream.guildId,
              );
            }
            return obj;
          };
          cResult[1] = participant;
          cResult[2] = fn;
          tmp10 = fn;
        } else {
          tmp10 = cResult[2];
        }
        const tmpResult = participant(analyticsLocations[14]);
        const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp10);
        const activeStream = stateFromStoresObject.activeStream;
        if (cResult[3] === channel.id) {
          let tmp13;
          if (cResult[4] === participant.id) {
            tmp13 = cResult[5];
          }
          if (cResult[6] === analyticsLocations) {
            let tmp14;
            if (cResult[7] === channel.id) {
              tmp14 = cResult[8];
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
              let tmp15;
              let tmp17;
              let tmp16;
              let tmp25;
              if (cResult[10] === num8) {
                tmp15 = cResult[11];
              }
              const _Symbol = Symbol;
              if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
                const items1 = [UserStore];
                class J {
                  constructor() {
                    return currentUser.getCurrentUser();
                  }
                }
                cResult[12] = J;
                cResult[13] = items1;
                tmp17 = items1;
                tmp16 = J;
              } else {
                tmp16 = cResult[12];
                tmp17 = cResult[13];
              }
              const tmpResult2 = participant(analyticsLocations[14]);
              const stateFromStores = tmpResult2.useStateFromStores(tmp17, tmp16);
              const type = participant.type;
              if (constants.HIDDEN_STREAM === type) {
                if (cResult[14] === contentStyle) {
                  let tmp36;
                  if (cResult[15] === participant) {
                    tmp36 = cResult[16];
                  }
                  tmp25 = tmp36;
                }
                class J {
                  constructor() {
                    return currentUser.getCurrentUser();
                  }
                }
                tmp39[0] = participant;
                tmp39[1] = contentStyle;
                const tmp40 = closure_13(closure_17, tmp39);
                cResult[14] = contentStyle;
                cResult[15] = participant;
                cResult[16] = tmp40;
                tmp36 = tmp40;
              } else if (constants.STREAM === type) {
                if (null != activeStream) {
                  const ownerId = activeStream.ownerId;
                  if (stateFromStores != null) {
                    const id = stateFromStores.id;
                  }
                  class J {
                    constructor() {
                      return currentUser.getCurrentUser();
                    }
                  }
                } else {
                  tmp25 = null;
                  if (null != tmp12) {
                    if (cResult[33] === contentStyle) {
                      let tmp31;
                      if (cResult[34] === participant) {
                        tmp31 = cResult[35];
                      }
                      tmp25 = tmp31;
                    }
                    class J {
                      constructor() {
                        return currentUser.getCurrentUser();
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
                      if (cResult[39] === (undefined !== hasNotch && hasNotch)) {
                        if (cResult[40] === tmp14) {
                          if (cResult[41] === participant) {
                            if (cResult[42] === resizeMode) {
                              let tmp26;
                              if (cResult[43] === tmp15) {
                                tmp26 = cResult[44];
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
                  avatarSize,
                  onSingleTap,
                  onDoubleTap: tmp13,
                  onLongPress: tmp14,
                  statusStyle: tmp15,
                  hasNotch: undefined !== hasNotch && hasNotch,
                  resizeMode,
                  style: contentStyle,
                };
                class J {
                  constructor() {
                    return currentUser.getCurrentUser();
                  }
                }
                const tmp29 = closure_13(channel(analyticsLocations[19]), obj2);
                cResult[36] = avatarSize;
                cResult[37] = contentStyle;
                cResult[38] = tmp13;
                cResult[39] = undefined !== hasNotch && hasNotch;
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
                      let tmp21;
                      if (cResult[47] === participant) {
                        tmp21 = cResult[48];
                      }
                      tmp25 = tmp21;
                    }
                  }
                  const obj3 = { participant: null, style: contentStyle, channel, onSingleTap };
                  class J {
                    constructor() {
                      return currentUser.getCurrentUser();
                    }
                  }
                  const tmp24 = closure_13(channel(analyticsLocations[20]), obj3);
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
                          let tmp41;
                          if (cResult[55] === participant) {
                            tmp41 = cResult[56];
                          }
                          if (cResult[57] === tmp25) {
                            let tmp46;
                            if (cResult[58] === tmp41) {
                              tmp46 = cResult[59];
                            }
                            return tmp46;
                          }
                          class J {
                            constructor() {
                              return currentUser.getCurrentUser();
                            }
                          }
                          const obj4 = { children: items2 };
                          items2 = [tmp25, tmp41];
                          const tmp48 = closure_15(closure_14, obj4);
                          cResult[57] = tmp25;
                          cResult[58] = tmp41;
                          cResult[59] = tmp48;
                          tmp46 = tmp48;
                        }
                      }
                    }
                  }
                }
              }
              let tmp43 = null;
              if (participant.type !== constants.ACTIVITY) {
                const obj5 = {
                  participant: null,
                  isActiveStream: null != activeStream,
                  channel,
                  hasTopSafeArea,
                  hasLeftSafeArea,
                  hasRightSafeArea,
                  hasBottomSafeArea,
                };
                class J {
                  constructor() {
                    return currentUser.getCurrentUser();
                  }
                }
                tmp43 = closure_13(closure_21, obj5);
              }
              cResult[49] = activeStream;
              cResult[50] = channel;
              cResult[51] = hasBottomSafeArea;
              cResult[52] = hasLeftSafeArea;
              cResult[53] = hasRightSafeArea;
              cResult[54] = hasTopSafeArea;
              cResult[55] = participant;
              cResult[56] = tmp43;
              tmp41 = tmp43;
            }
            const rect = { bottom: num7, right: num8 };
            cResult[9] = num7;
            cResult[10] = num8;
            cResult[11] = rect;
            tmp15 = rect;
          }
          const fn2 = function j(user) {
            const obj = {
              userId: user.user.id,
              channelId: channel.id,
              isVoiceContext: true,
              sourceAnalyticsLocations: analyticsLocations,
            };
            showUserProfileActionSheetDefault(obj);
          };
          cResult[6] = analyticsLocations;
          cResult[7] = channel.id;
          cResult[8] = fn2;
          tmp14 = fn2;
        }
        class U {
          constructor() {
            metroImportAll();
            const obj = ChannelRTCActionCreatorsDefault;
            participant = obj.selectParticipant(channel.id, participant.id);
          }
        }
        cResult[3] = channel.id;
        cResult[4] = participant.id;
        cResult[5] = U;
        tmp13 = U;
      }
    : (participant) => {
        let avatarSize;
        let contentStyle;
        let currentUser;
        let hasLeftSafeArea;
        let hasNotch;
        let hasTopSafeArea;
        let items5;
        let obj6;
        let shrinkStreamEmptyState;
        let stageStreamContainer;
        let tmp10;
        let tmp2Result;
        participant = participant.participant;
        const channel = participant.channel;
        const hasRightSafeArea = participant.hasRightSafeArea;
        const hasBottomSafeArea = participant.hasBottomSafeArea;
        ({ contentStyle, hasNotch } = participant);
        ({ avatarSize, hasTopSafeArea, hasLeftSafeArea, shrinkStreamEmptyState } = participant);
        if (hasNotch === undefined) {
          hasNotch = false;
        }
        const resizeMode = participant.resizeMode;
        const tmp = closure_16();
        const analyticsLocations = channel(hasRightSafeArea[12])().analyticsLocations;
        let rect = channel(hasRightSafeArea[13])();
        const bottom = rect.bottom;
        const right = rect.right;
        let obj = participant(hasRightSafeArea[14]);
        const items = [right];
        const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
          let activeStreamForUser;
          let streamForUser = null;
          if (unpackModuleId(participant)) {
            streamForUser = ApplicationStreamingStore.getStreamForUser(participant.user.id, participant.stream.guildId);
          }
          const obj = { stream: streamForUser, activeStream: activeStreamForUser };
          activeStreamForUser = null;
          if (unpackModuleId(participant)) {
            activeStreamForUser = ApplicationStreamingStore.getActiveStreamForUser(
              participant.user.id,
              participant.stream.guildId,
            );
          }
          return obj;
        });
        const activeStream = stateFromStoresObject.activeStream;
        const items1 = [channel.id, participant.id];
        const stream = stateFromStoresObject.stream;
        const callback = hasBottomSafeArea.useCallback(() => {
          metroImportAll();
          const obj = ChannelRTCActionCreatorsDefault;
          participant = obj.selectParticipant(channel.id, participant.id);
        }, items1);
        const items2 = [channel.id, analyticsLocations];
        const items3 = [hasBottomSafeArea, hasRightSafeArea, bottom, right];
        const callback1 = hasBottomSafeArea.useCallback((user) => {
          const obj = {
            userId: user.user.id,
            channelId: channel.id,
            isVoiceContext: true,
            sourceAnalyticsLocations: analyticsLocations,
          };
          showUserProfileActionSheetDefault(obj);
        }, items2);
        const memo = hasBottomSafeArea.useMemo(() => {
          let num2;
          let num = 8;
          if (hasBottomSafeArea) {
            num = 8 + bottom;
          }
          const rect = { bottom: num, right: num2 };
          num2 = 8;
          if (hasRightSafeArea) {
            num2 = 8 + right;
          }
          return rect;
        }, items3);
        const items4 = [UserStore];
        const obj2 = participant(hasRightSafeArea[14]);
        const stateFromStores = obj2.useStateFromStores(items4, () => currentUser.getCurrentUser());
        const type = participant.type;
        if (constants.HIDDEN_STREAM === type) {
          const obj3 = { participant, style: contentStyle };
          tmp10 = closure_13(closure_17, obj3);
        } else if (constants.STREAM === type) {
          if (null != activeStream) {
            let tmp17Result;
            let id;
            const ownerId = activeStream.ownerId;
            if (stateFromStores != null) {
              id = stateFromStores.id;
            }
            if (ownerId !== id) {
              const obj4 = {
                participant,
                onSingleTap,
                onDoubleTap: callback,
                removeEmptyStateImage: shrinkStreamEmptyState,
                onFullScreen: callback,
                fullscreenIconStyle: memo,
                style: contentStyle,
              };
              tmp17Result = closure_13(tmp2(tmp3[17]), obj4);
            } else {
              const obj5 = { style: tmp.screenshareContainer, children: closure_13(tmp2Result, obj6) };
              obj6 = { participant, onSingleTap, onDoubleTap: callback, containerStyle: stageStreamContainer };
              stageStreamContainer = undefined;
              const tmp18 = bottom;
              tmp2Result = channel(hasRightSafeArea[18]);
              if (channel.isGuildStageVoice()) {
                stageStreamContainer = tmp.stageStreamContainer;
              }
              tmp17Result = closure_13(tmp18, obj5);
            }
            tmp10 = tmp17Result;
          } else {
            tmp10 = null;
            if (null != stream) {
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
            resizeMode,
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
        const obj11 = { children: items5 };
        items5 = [tmp10, tmp27];
        return closure_15(closure_14, obj11);
      },
);
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let participant;
      let style;
      const obj = react2;
      const cResult = obj.c(11);
      ({ participant, style } = arg0);
      const tmp3 = closure_16();
      const id = participant.user.id;
      if (cResult[0] === style) {
        let tmp4;
        let tmp6;
        let tmp7;
        if (cResult[1] === tmp3.streamPreview) {
          tmp4 = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { aspectRatio: "duration", borderRadius: false };
          cResult[3] = obj2;
          tmp6 = obj2;
        } else {
          tmp6 = cResult[3];
        }
        const _Symbol2 = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function l() {
            return closure_1_8();
          };
          cResult[4] = fn;
          tmp7 = fn;
        } else {
          tmp7 = cResult[4];
        }
        if (cResult[5] === participant.stream.guildId) {
          let tmp8;
          if (cResult[6] === id) {
            tmp8 = cResult[7];
          }
          if (cResult[8] === tmp4) {
            let tmp12;
            if (cResult[9] === tmp8) {
              tmp12 = cResult[10];
            }
            return tmp12;
          }
          const obj3 = { style: tmp4, children: tmp8 };
          const tmp15 = map1(hasOwnProperty, obj3);
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
        const tmp11 = map1(TouchableStreamPreviewDefault, obj4);
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
      let items;
      let obj2;
      participant = participant.participant;
      const style = participant.style;
      const obj = { style: items, children: map1(TouchableStreamPreviewDefault, obj2) };
      items = [closure_16().streamPreview, style];
      obj2 = {
        guildId: participant.stream.guildId,
        userId: participant.user.id,
        style: { aspectRatio: "duration", borderRadius: false },
        disableTransition: true,
        onPress() {
          return closure_1_8();
        },
      };
      return map1(hasOwnProperty, obj);
    };
let closure_17 = tmp9;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? (participant) => {
      let tmp6;
      const obj = react2;
      const cResult = obj.c(3);
      participant = participant.participant;
      const tmp4 = closure_16();
      if (participant.type === constants.STREAM) {
        tmp6 = AssetRegistryDefault3;
      } else if (participant.type === tmp5.USER) {
        const voicePlatform = participant.voicePlatform;
        if (constants2.MOBILE === voicePlatform) {
          tmp6 = AssetRegistryDefault4;
        } else if (constants2.XBOX === voicePlatform) {
          tmp6 = AssetRegistryDefault;
        } else if (constants2.PLAYSTATION === voicePlatform) {
          tmp6 = AssetRegistryDefault2;
        } else if (constants2.QUEST === voicePlatform) {
          tmp6 = AssetRegistryDefault5;
        }
      }
      let tmp12 = null;
      if (null != tmp6) {
        if (cResult[0] === tmp6) {
          let tmp13;
          if (cResult[1] === tmp4.titleIcon) {
            tmp13 = cResult[2];
          }
          tmp12 = tmp13;
        }
        const obj2 = {
          source: tmp6,
          size: native.Icon.Sizes.REFRESH_SMALL_16,
          color: nativeDefault.unsafe_rawColors.WHITE,
          style: tmp4.titleIcon,
        };
        const Icon = native.Icon;
        const tmp16 = map1(Icon, obj2);
        cResult[0] = tmp6;
        cResult[1] = tmp4.titleIcon;
        cResult[2] = tmp16;
        tmp13 = tmp16;
      }
      return tmp12;
    }
  : (participant) => {
      let tmp3;
      participant = participant.participant;
      const tmp = closure_16();
      if (participant.type === constants.STREAM) {
        tmp3 = AssetRegistryDefault3;
      } else if (participant.type === tmp2.USER) {
        const voicePlatform = participant.voicePlatform;
        if (constants2.MOBILE === voicePlatform) {
          tmp3 = AssetRegistryDefault4;
        } else if (constants2.XBOX === voicePlatform) {
          tmp3 = AssetRegistryDefault;
        } else if (constants2.PLAYSTATION === voicePlatform) {
          tmp3 = AssetRegistryDefault2;
        } else if (constants2.QUEST === voicePlatform) {
          tmp3 = AssetRegistryDefault5;
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
        const Icon = native.Icon;
        tmp14 = map1(Icon, obj);
      }
      return tmp14;
    };
const __initData = {
  code: "function CallTileTsx1(){const{withTiming,reveal,STANDARD_EASING}=this.__closure;return{opacity:withTiming(reveal?1:0,{easing:STANDARD_EASING,duration:250})};}",
};
const __initData2 = {
  code: "function CallTileTsx2(){const{withTiming,reveal,STANDARD_EASING}=this.__closure;return{opacity:withTiming(reveal?1:0,{easing:STANDARD_EASING,duration:250})};}",
};
ReactCompilerGating = ReactCompilerGating_mod;
let tmp10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let bottom;
      let channel;
      let hasBottomSafeArea;
      let hasLeftSafeArea;
      let hasRightSafeArea;
      let hasTopSafeArea;
      let isActiveStream;
      let items;
      let items1;
      let left;
      let participant;
      let reveal;
      let right;
      let top;
      let obj = reveal(576);
      const cResult = obj.c(27);
      ({ participant, isActiveStream, channel } = arg0);
      ({ hasLeftSafeArea, hasRightSafeArea, hasBottomSafeArea, hasTopSafeArea } = arg0);
      const tmp4 = closure_16();
      ({ bottom, left, top, right } = useSafeAreaInsetsDefault());
      useSafeAreaInsetsDefault();
      const tmp = reveal;
      reveal = react.useContext(reveal(9094).RevealContext).reveal;
      let obj2 = reveal(4618);
      const fn = function l() {
        let obj2;
        let num = 0;
        const withTiming = timing.withTiming;
        timing;
        if (reveal) {
          num = 1;
        }
        const obj = { opacity: withTiming(num, obj2) };
        obj2 = { easing: native.STANDARD_EASING, duration: 250 };
        return obj;
      };
      fn.__closure = { withTiming: reveal(4897).withTiming, reveal, STANDARD_EASING: reveal(1188).STANDARD_EASING };
      fn.__workletHash = 15640123774063;
      fn.__initData = __initData;
      ({ withTiming: reveal(4897).withTiming, reveal, STANDARD_EASING: reveal(1188).STANDARD_EASING });
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
            let tmp8;
            if (cResult[3] === num4) {
              tmp8 = cResult[4];
            }
            if (cResult[5] === animatedStyle) {
              let tmp9;
              if (cResult[6] === tmp8) {
                tmp9 = cResult[7];
              }
              if (cResult[8] === isActiveStream) {
                let tmp11;
                let tmp15;
                if (cResult[9] === tmp4.liveContainer) {
                  tmp11 = cResult[10];
                }
                if (cResult[11] !== participant) {
                  const obj4 = { participant };
                  const tmp18 = closure_13(closure_18, obj4);
                  cResult[11] = participant;
                  cResult[12] = tmp18;
                  tmp15 = tmp18;
                } else {
                  tmp15 = cResult[12];
                }
                if (cResult[13] === channel) {
                  let tmp19;
                  if (cResult[14] === participant) {
                    tmp19 = cResult[15];
                  }
                  if (cResult[16] === tmp4.usernameContainer) {
                    if (cResult[17] === tmp15) {
                      let tmp22;
                      if (cResult[18] === tmp19) {
                        tmp22 = cResult[19];
                      }
                      if (cResult[20] === tmp4.usernamePosition) {
                        let tmp26;
                        if (cResult[21] === tmp22) {
                          tmp26 = cResult[22];
                        }
                        if (cResult[23] === tmp26) {
                          if (cResult[24] === tmp9) {
                            let tmp30;
                            if (cResult[25] === tmp11) {
                              tmp30 = cResult[26];
                            }
                            return tmp30;
                          }
                        }
                        const obj5 = { pointerEvents: "none", style: tmp9, children: items };
                        items = [tmp11, tmp26];
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
                  const obj7 = { style: tmp4.usernameContainer, children: items1 };
                  items1 = [tmp15, tmp19];
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
              if (tmp12) {
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
    }
  : (arg0) => {
      let bottom;
      let channel;
      let hasBottomSafeArea;
      let hasLeftSafeArea;
      let hasRightSafeArea;
      let hasTopSafeArea;
      let isActiveStream;
      let items;
      let items1;
      let items2;
      let left;
      let num2;
      let num3;
      let num4;
      let obj6;
      let participant;
      let right;
      let top;
      ({ participant, isActiveStream } = arg0);
      let reveal;
      ({ channel, hasLeftSafeArea, hasRightSafeArea, hasBottomSafeArea, hasTopSafeArea } = arg0);
      const tmp = closure_16();
      ({ bottom, left, top, right } = useSafeAreaInsetsDefault());
      useSafeAreaInsetsDefault();
      const tmp5 = reveal;
      reveal = react.useContext(reveal(9094).RevealContext).reveal;
      let obj = reveal(4618);
      class A {
        constructor() {
          tmp = closure_0;
          tmp2 = closure_2;
          tmp3 = closure_0(closure_2[30]);
          num = 0;
          withTiming = tmp3.withTiming;
          if (reveal) {
            num = 1;
          }
          obj = { opacity: null };
          obj1 = { easing: tmp(tmp2[27]).STANDARD_EASING, duration: 250 };
          obj.opacity = withTiming(num, obj1);
          return obj;
        }
      }
      let obj2 = { withTiming: reveal(4897).withTiming, reveal, STANDARD_EASING: reveal(1188).STANDARD_EASING };
      A.__closure = obj2;
      A.__workletHash = 1463196379948;
      A.__initData = __initData2;
      let num = 0;
      const animatedStyle = obj.useAnimatedStyle(A);
      if (hasBottomSafeArea) {
        num = bottom;
      }
      const rect = { bottom: num, right: num2, left: num3, top: num4 };
      num2 = 0;
      if (hasRightSafeArea) {
        num2 = right;
      }
      num3 = 0;
      if (hasLeftSafeArea) {
        num3 = left;
      }
      num4 = 0;
      if (hasTopSafeArea) {
        num4 = top;
      }
      const obj3 = { pointerEvents: "none", style: items, children: items1 };
      items = [closure_4.absoluteFill, rect, animatedStyle];
      const View = ReanimatedRexportDefault.View;
      if (isActiveStream) {
        const obj4 = { style: tmp.liveContainer, children: closure_13(tmp5(1188).LiveTag, {}) };
        isActiveStream = closure_13(closure_5, obj4);
      }
      items1 = [isActiveStream];
      const obj5 = { style: tmp.usernamePosition, children: closure_15(closure_5, obj6) };
      obj6 = { style: tmp.usernameContainer, children: items2 };
      items2 = [closure_13(closure_18, { participant }), closure_13(ParticipantTitleDefault, { channel, participant })];
      items1[1] = closure_13(closure_5, obj5);
      return closure_15(View, obj3);
    };
let closure_21 = tmp10;
const result = size.fileFinishedImporting("modules/video_calls/native/components/CallTile.tsx");

export default memoResult;
export const StreamPreviewTile = tmp9;
export const TileOverlay = tmp10;
