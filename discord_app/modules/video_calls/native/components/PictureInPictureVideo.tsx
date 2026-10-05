// discord_app/modules/video_calls/native/components/PictureInPictureVideo.tsx
import get_initialized from "../../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import useWindowDimensionsDefault from "../../../screen/useWindowDimensions.native.tsx";
import useToken2 from "../../../../design/tokens/native/useToken.tsx";
import AssetRegistryDefault from "../../../../../_runtime/04808_AssetRegistry.js";
import CallConstants from "../../../calls/CallConstants.tsx";
import ChannelRTCActionCreatorsDefault from "../../../../actions/ChannelRTCActionCreators.tsx";
import useAvatarColorDefault from "../../../avatar/useAvatarColor.tsx";
import transitionToActivityDefault from "../../../activities/utils/transitionToActivity.native.tsx";
import useShouldForcePipOrientation from "useShouldForcePipOrientation.tsx";
import usePipDimensionsDefault from "usePipDimensions.tsx";
import useIsViewingActivity from "../../../activities/native/useIsViewingActivity.tsx";
import VideoRenderer from "VideoRenderer.tsx";
import UserTileDefault from "UserTile.tsx";
import useAvatarSpeakingColor from "../../../calls/native/useAvatarSpeakingColor.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import EmbeddedActivitiesStore from "../../../activities/EmbeddedActivitiesStore.tsx";
import ChannelRTCStore from "../../../calls/ChannelRTCStore.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import MediaEngineStore from "../../../../stores/MediaEngineStore.tsx";
import SelectedChannelStore from "../../../../stores/SelectedChannelStore.tsx";
import SpeakingStore from "../../../../stores/SpeakingStore.tsx";
import ChannelCallLifecycleStore from "../ChannelCallLifecycleStore.tsx";
import ChannelCallStore from "../ChannelCallStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import native_mod from "../../../../design/void/native.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let channelId;

let closure_14;
let closure_16;
let closure_17;
let closure_18;
let closure_4;
let hasOwnProperty;
let map1;
let native;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
function areParticipantsEqual(arg0, arg1) {
  let tmp;
  let tmp2;
  [, , tmp] = arg0;
  [, , tmp2] = arg1;
  return tmp === tmp2;
}
({ TouchableOpacity: closure_4, View: hasOwnProperty } = react_native);
({ togglePipFocus: map1, useIsVoiceChatFocused: closure_14 } = ChannelCallStore);
const ParticipantTypes = CallConstants.ParticipantTypes;
({ jsx: closure_16, Fragment: closure_17, jsxs: closure_18 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  elevationShadow: native.generateBoxShadowStyle(native.EIGHT_DP_ELEVATION_SHADOW_PARAMS),
  background: obj2,
  backgroundPipFab: obj3,
  pip: obj4,
  pipFab: obj5,
  avatarContainer: { width: "100%", height: "100%", alignItems: "center", justifyContent: "center" },
  activityPipContainer: { flex: 1, width: "100%" },
  thermalAlertIconContainer: {
    width: 22,
    height: 22,
    backgroundColor: "rgba(78, 80, 88, 0.48)",
    borderRadius: 11,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 6,
    left: 6,
  },
  thermalAlertIcon: size,
};
createStyles = createStyles.createStyles;
native = native_mod;
obj2 = { backgroundColor: nativeDefault.colors.BLACK, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj3 = { backgroundColor: nativeDefault.colors.BLACK, borderRadius: nativeDefault.radii.lg };
obj4 = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj5 = { borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
size = { width: 14, height: 14, color: nativeDefault.colors.WHITE };
let closure_19 = createStyles(obj);
const memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (channel) => {
        let openVoice;
        const tmp = channel;
        let obj = channel(openVoice[17]);
        const cResult = obj.c(42);
        channel = channel.channel;
        const pipParticipant = channel.pipParticipant;
        const selfParticipant = channel.selfParticipant;
        const obj2 = channel(openVoice[18]);
        const voiceChatNavigationContext = obj2.useVoiceChatNavigationContext();
        openVoice = undefined;
        if (voiceChatNavigationContext != null) {
          openVoice = voiceChatNavigationContext.openVoice;
        }
        if (openVoice == null) {
          openVoice = pipParticipant(tmp2[19]).noop;
        }
        const tmp7 = closure_14();
        let closure_3 = tmp7;
        const tmp9 = pipParticipant(tmp2[20])(channel.id);
        let closure_4 = tmp9;
        let applicationId;
        const first = cResult[0];
        if (pipParticipant != null) {
          applicationId = pipParticipant.applicationId;
        }
        if (first === applicationId) {
          let tmp22;
          let tmp25;
          let tmp24;
          let type;
          if (pipParticipant != null) {
            type = pipParticipant.type;
          }
          const _Symbol = Symbol;
          if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
            const items = [MediaEngineStore];
            cResult[3] = items;
            tmp22 = items;
          } else {
            tmp22 = cResult[3];
          }
          if (cResult[4] !== pipParticipant) {
            const fn = function y() {
              const isLocalVideoDisabledResult =
                null != pipParticipant && MediaEngineStore.isLocalVideoDisabled(tmp.id);
              return isLocalVideoDisabledResult;
            };
            const items1 = [pipParticipant];
            cResult[4] = pipParticipant;
            cResult[5] = fn;
            cResult[6] = items1;
            tmp25 = items1;
            tmp24 = fn;
          } else {
            tmp24 = cResult[5];
            tmp25 = cResult[6];
          }
          const tmpResult = tmp(openVoice[22]);
          const stateFromStores = tmpResult.useStateFromStores(tmp22, tmp24, tmp25);
          if (cResult[7] === tmp7) {
            if (cResult[8] === openVoice) {
              let tmp29;
              let id1;
              const tmp27 = cResult[9];
              if (pipParticipant != null) {
                id1 = pipParticipant.id;
              }
              if (tmp27 === id1) {
                tmp29 = cResult[10];
              }
              if (cResult[11] === channel.id) {
                if (cResult[12] === tmp9) {
                  if (cResult[13] === tmp7) {
                    let tmp31;
                    let tmp43;
                    let tmp48Result;
                    if (cResult[14] === openVoice) {
                      tmp31 = cResult[15];
                    }
                    let type1;
                    if (pipParticipant != null) {
                      type1 = pipParticipant.type;
                    }
                    if (ParticipantTypes.HIDDEN_STREAM !== type1) {
                      if (ParticipantTypes.STREAM !== type1) {
                        if (ParticipantTypes.USER === type1) {
                          let tmp40 = null;
                          if (pipParticipant(openVoice[27])(pipParticipant)) {
                            tmp40 = null;
                            if (!stateFromStores) {
                              const obj3 = {
                                participant: pipParticipant,
                                avatarSize: tmp(openVoice[14]).AvatarSizes.PROFILE,
                                resizeMode: null,
                                onSingleTap: tmp31,
                                onDoubleTap: tmp31,
                              };
                              const tmp8Result = pipParticipant(openVoice[28]);
                              class V {
                                constructor() {
                                  if (closure_3) {
                                    openVoice();
                                  }
                                  if (closure_4) {
                                    const obj = ChannelRTCActionCreatorsDefault;
                                    const participant = obj.selectParticipant(channel.id, null);
                                  } else {
                                    map1();
                                  }
                                }
                              }
                              tmp40 = closure_16(tmp8Result, obj3);
                            }
                          }
                          cResult[22] = stateFromStores;
                          class V {
                            constructor() {
                              if (closure_3) {
                                openVoice();
                              }
                              if (closure_4) {
                                const obj = ChannelRTCActionCreatorsDefault;
                                const participant = obj.selectParticipant(channel.id, null);
                              } else {
                                map1();
                              }
                            }
                          }
                          cResult[23] = tmp31;
                          cResult[24] = pipParticipant;
                          cResult[25] = tmp40;
                        } else if (ParticipantTypes.ACTIVITY === type1) {
                          if (cResult[26] === channel.guild_id) {
                            if (cResult[27] === tmp7) {
                              let tmp34;
                              if (cResult[28] === openVoice) {
                                tmp34 = cResult[29];
                              }
                              class Y {
                                constructor() {
                                  const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
                                  if (null != currentEmbeddedActivity) {
                                    transitionToActivityDefault(channel.guild_id, currentEmbeddedActivity.location);
                                  }
                                  if (closure_3) {
                                    openVoice();
                                  }
                                }
                              }
                              const obj4 = { participant: pipParticipant, channel: null, onSingleTap: tmp34 };
                              class V {
                                constructor() {
                                  if (closure_3) {
                                    openVoice();
                                  }
                                  if (closure_4) {
                                    const obj = ChannelRTCActionCreatorsDefault;
                                    const participant = obj.selectParticipant(channel.id, null);
                                  } else {
                                    map1();
                                  }
                                }
                              }
                              cResult[30] = channel;
                              cResult[31] = pipParticipant;
                              cResult[32] = tmp34;
                              cResult[33] = closure_16(pipParticipant(openVoice[30]), obj4);
                              const tmp37 = closure_16(pipParticipant(openVoice[30]), obj4);
                            }
                          }
                          class Y {
                            constructor() {
                              const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
                              if (null != currentEmbeddedActivity) {
                                transitionToActivityDefault(channel.guild_id, currentEmbeddedActivity.location);
                              }
                              if (closure_3) {
                                openVoice();
                              }
                            }
                          }
                          cResult[26] = channel.guild_id;
                          class V {
                            constructor() {
                              if (closure_3) {
                                openVoice();
                              }
                              if (closure_4) {
                                const obj = ChannelRTCActionCreatorsDefault;
                                const participant = obj.selectParticipant(channel.id, null);
                              } else {
                                map1();
                              }
                            }
                          }
                          cResult[28] = openVoice;
                          cResult[29] = Y;
                          tmp34 = Y;
                        }
                      }
                      let tmp52 = null;
                      if (null != selfParticipant) {
                        tmp52 = null;
                        class Y {
                          constructor() {
                            const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
                            if (null != currentEmbeddedActivity) {
                              transitionToActivityDefault(channel.guild_id, currentEmbeddedActivity.location);
                            }
                            if (closure_3) {
                              openVoice();
                            }
                          }
                        }
                      }
                      class V {
                        constructor() {
                          if (closure_3) {
                            openVoice();
                          }
                          if (closure_4) {
                            const obj = ChannelRTCActionCreatorsDefault;
                            const participant = obj.selectParticipant(channel.id, null);
                          } else {
                            map1();
                          }
                        }
                      }
                      cResult[35] = tmp7;
                      cResult[36] = openVoice;
                      cResult[37] = selfParticipant;
                      cResult[38] = tmp52;
                    }
                    class V {
                      constructor() {
                        if (closure_3) {
                          openVoice();
                        }
                        if (closure_4) {
                          const obj = ChannelRTCActionCreatorsDefault;
                          const participant = obj.selectParticipant(channel.id, null);
                        } else {
                          map1();
                        }
                      }
                    }
                    let id = pipParticipant.user.id;
                    if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
                      class Y {
                        constructor() {
                          const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
                          if (null != currentEmbeddedActivity) {
                            transitionToActivityDefault(channel.guild_id, currentEmbeddedActivity.location);
                          }
                          if (closure_3) {
                            openVoice();
                          }
                        }
                      }
                      cResult[16] = tmp45;
                      tmp43 = tmp45;
                    } else {
                      tmp43 = cResult[16];
                    }
                    if ((cResult[17] === id) === tmp43) {
                      if (cResult[18] === tmp31) {
                        if (cResult[19] === tmp29) {
                          class Y {
                            constructor() {
                              const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
                              if (null != currentEmbeddedActivity) {
                                transitionToActivityDefault(channel.guild_id, currentEmbeddedActivity.location);
                              }
                              if (closure_3) {
                                openVoice();
                              }
                            }
                          }
                        }
                      }
                    }
                    if (id === tmp43) {
                      const obj5 = { onSingleTap: null, onDoubleTap: tmp29 };
                      class Y {
                        constructor() {
                          const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
                          if (null != currentEmbeddedActivity) {
                            transitionToActivityDefault(channel.guild_id, currentEmbeddedActivity.location);
                          }
                          if (closure_3) {
                            openVoice();
                          }
                        }
                      }
                      tmp48Result = closure_16(tmp8(tmp2[24]), obj5);
                    } else {
                      const obj6 = {
                        removeEmptyStateButton: true,
                        removeEmptyStateImage: true,
                        resizeMode: tmp(openVoice[26]).ResizeMode.CONTAIN,
                        participant: pipParticipant,
                        onSingleTap: tmp31,
                        onDoubleTap: null,
                      };
                      class Y {
                        constructor() {
                          const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
                          if (null != currentEmbeddedActivity) {
                            transitionToActivityDefault(channel.guild_id, currentEmbeddedActivity.location);
                          }
                          if (closure_3) {
                            openVoice();
                          }
                        }
                      }
                      class V {
                        constructor() {
                          if (closure_3) {
                            openVoice();
                          }
                          if (closure_4) {
                            const obj = ChannelRTCActionCreatorsDefault;
                            const participant = obj.selectParticipant(channel.id, null);
                          } else {
                            map1();
                          }
                        }
                      }
                      tmp48Result = closure_16(tmp49, obj6);
                    }
                    cResult[17] = id === tmp43;
                    cResult[18] = tmp31;
                    cResult[19] = tmp29;
                    cResult[20] = pipParticipant;
                    cResult[21] = tmp48Result;
                  }
                }
              }
              class V {
                constructor() {
                  if (closure_3) {
                    openVoice();
                  }
                  if (closure_4) {
                    const obj = ChannelRTCActionCreatorsDefault;
                    const participant = obj.selectParticipant(channel.id, null);
                  } else {
                    map1();
                  }
                }
              }
              cResult[11] = channel.id;
              cResult[12] = tmp9;
              cResult[13] = tmp7;
              cResult[14] = openVoice;
              cResult[15] = V;
              tmp31 = V;
            }
          }
          cResult[7] = tmp7;
          cResult[8] = openVoice;
          let id2;
          if (pipParticipant != null) {
            id2 = pipParticipant.id;
          }
          const fn2 = function k() {
            const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
            if (null != voiceChannelId) {
              let id;
              const selectParticipant = ChannelRTCActionCreatorsDefault.selectParticipant;
              ChannelRTCActionCreatorsDefault;
              if (pipParticipant != null) {
                id = pipParticipant.id;
              }
              if (id == null) {
                id = null;
              }
              const participant = selectParticipant(voiceChannelId, id);
              if (closure_3) {
                openVoice();
              }
            }
          };
          cResult[9] = id2;
          cResult[10] = fn2;
          tmp29 = fn2;
        }
        let type2;
        if (pipParticipant != null) {
          type2 = pipParticipant.type;
        }
        let tmp17Result = type2 === ParticipantTypes.ACTIVITY;
        if (tmp17Result) {
          let applicationId1;
          class Y {
            constructor() {
              const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
              if (null != currentEmbeddedActivity) {
                transitionToActivityDefault(channel.guild_id, currentEmbeddedActivity.location);
              }
              if (closure_3) {
                openVoice();
              }
            }
          }
          if (pipParticipant != null) {
            applicationId1 = pipParticipant.applicationId;
          }
          tmp17Result = tmp17(applicationId1);
        }
        let applicationId2;
        if (pipParticipant != null) {
          applicationId2 = pipParticipant.applicationId;
        }
        cResult[0] = applicationId2;
        let type3;
        if (pipParticipant != null) {
          type3 = pipParticipant.type;
        }
        cResult[1] = type3;
        cResult[2] = tmp17Result;
      }
    : (channel) => {
        let items2;
        let tmp20;
        channel = channel.channel;
        const pipParticipant = channel.pipParticipant;
        const selfParticipant = channel.selfParticipant;
        let openVoice;
        let closure_3;
        let closure_4;
        const tmp = channel;
        let obj = channel(openVoice[18]);
        const voiceChatNavigationContext = obj.useVoiceChatNavigationContext();
        openVoice = undefined;
        if (voiceChatNavigationContext != null) {
          openVoice = voiceChatNavigationContext.openVoice;
        }
        if (openVoice == null) {
          openVoice = pipParticipant(tmp2[19]).noop;
        }
        closure_3 = closure_14();
        closure_4 = pipParticipant(tmp2[20])(channel.id);
        let type;
        if (pipParticipant != null) {
          type = pipParticipant.type;
        }
        let tmp6ResultResult = type === ParticipantTypes.ACTIVITY;
        if (tmp6ResultResult) {
          let applicationId;
          const tmp6Result = pipParticipant(openVoice[21]);
          if (pipParticipant != null) {
            applicationId = pipParticipant.applicationId;
          }
          tmp6ResultResult = tmp6Result(applicationId);
        }
        const items = [MediaEngineStore];
        const items1 = [pipParticipant];
        let type1;
        const tmpResult = tmp(openVoice[22]);
        const stateFromStores = tmpResult.useStateFromStores(
          items,
          () => {
            const isLocalVideoDisabledResult = null != pipParticipant && MediaEngineStore.isLocalVideoDisabled(tmp.id);
            return isLocalVideoDisabledResult;
          },
          items1,
        );
        if (pipParticipant != null) {
          type1 = pipParticipant.type;
        }
        function onPipTap() {
          if (closure_3) {
            openVoice();
          }
          if (closure_4) {
            const obj = ChannelRTCActionCreatorsDefault;
            const participant = obj.selectParticipant(channel.id, null);
          } else {
            map1();
          }
        }
        if (ParticipantTypes.HIDDEN_STREAM !== type1) {
          let tmp14;
          if (ParticipantTypes.STREAM !== type1) {
            if (ParticipantTypes.USER === type1) {
              let tmp15 = null;
              if (pipParticipant(openVoice[27])(pipParticipant)) {
                tmp15 = null;
                if (!stateFromStores) {
                  const obj2 = {
                    participant: pipParticipant,
                    avatarSize: tmp(openVoice[14]).AvatarSizes.PROFILE,
                    resizeMode: tmp(openVoice[26]).ResizeMode.COVER,
                    onSingleTap: onPipTap,
                    onDoubleTap: onPipTap,
                  };
                  const tmp6Result4 = pipParticipant(openVoice[28]);
                  tmp15 = closure_16(tmp6Result4, obj2);
                }
              }
              tmp14 = tmp15;
            } else {
              tmp14 = null;
              if (ParticipantTypes.ACTIVITY === type1) {
                const obj3 = {
                  participant: pipParticipant,
                  channel,
                  onSingleTap() {
                    const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
                    if (null != currentEmbeddedActivity) {
                      transitionToActivityDefault(channel.guild_id, currentEmbeddedActivity.location);
                    }
                    if (closure_3) {
                      openVoice();
                    }
                  },
                };
                tmp14 = closure_16(tmp6(tmp2[30]), obj3);
              }
            }
          }
          let tmp24 = null;
          if (null != selfParticipant) {
            tmp24 = null;
            if (!tmp6ResultResult) {
              const obj4 = {
                participant: selfParticipant,
                avatarSize: tmp(openVoice[14]).AvatarSizes.PROFILE,
                resizeMode: tmp(openVoice[26]).ResizeMode.COVER,
                onSingleTap() {
                  if (closure_3) {
                    openVoice();
                  } else {
                    map1();
                  }
                },
              };
              const tmp6Result5 = pipParticipant(openVoice[28]);
              tmp24 = closure_16(tmp6Result5, obj4);
            }
          }
          const obj5 = { children: items2 };
          items2 = [tmp24, tmp14];
          return closure_18(closure_17, obj5);
        }
        if (pipParticipant.user.id === AuthenticationStore.getId()) {
          function onScreenshareTap() {
            const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
            if (null != voiceChannelId) {
              let id;
              const selectParticipant = ChannelRTCActionCreatorsDefault.selectParticipant;
              ChannelRTCActionCreatorsDefault;
              if (pipParticipant != null) {
                id = pipParticipant.id;
              }
              if (id == null) {
                id = null;
              }
              const participant = selectParticipant(voiceChannelId, id);
              if (closure_3) {
                openVoice();
              }
            }
          }
          const obj6 = { onSingleTap: onScreenshareTap, onDoubleTap: onScreenshareTap };
          tmp20 = closure_16(tmp6(tmp2[24]), obj6);
        } else {
          const obj7 = {
            removeEmptyStateButton: true,
            removeEmptyStateImage: true,
            resizeMode: tmp(openVoice[26]).ResizeMode.CONTAIN,
            participant: pipParticipant,
            onSingleTap: onPipTap,
            onDoubleTap: onPipTap,
          };
          const tmp6Result6 = pipParticipant(openVoice[25]);
          tmp20 = closure_16(tmp6Result6, obj7);
        }
        tmp14 = tmp20;
      },
);
ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      let arr4;
      let leadingEdgeDebounce;
      let reactingToThermalState;
      let speaking;
      let tmp10;
      let tmp11;
      let tmp13;
      let tmp16;
      let tmp4;
      let tmp5;
      let tmp8;
      const obj = channelId(leadingEdgeDebounce[17]);
      const cResult = obj.c(18);
      channelId = channelId.channelId;
      const selfParticipant = channelId.selfParticipant;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [ChannelCallLifecycleStore];
        const fn = function o() {
          return reactingToThermalState.isReactingToThermalState();
        };
        let num = 0;
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = channelId(leadingEdgeDebounce[22]);
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [ChannelRTCStore];
        cResult[2] = items1;
        tmp8 = items1;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] !== channelId) {
        const fn2 = function h() {
          const items = [
            ChannelRTCStore.getParticipants(channelId),
            ChannelRTCStore.getVideoParticipants(channelId),
            ChannelRTCStore.getParticipantsVersion(channelId),
          ];
          return items;
        };
        const items2 = [channelId];
        cResult[3] = channelId;
        cResult[4] = fn2;
        cResult[5] = items2;
        tmp11 = items2;
        tmp10 = fn2;
      } else {
        tmp10 = cResult[4];
        tmp11 = cResult[5];
      }
      const tmpResult4 = channelId(leadingEdgeDebounce[22]);
      [arr4, r10057] = tmpResult4.useStateFromStores(tmp8, tmp10, tmp11, areParticipantsEqual);
      _slicedToArray(tmpResult4.useStateFromStores(tmp8, tmp10, tmp11, areParticipantsEqual), 2);
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const items3 = [SpeakingStore];
        cResult[6] = items3;
        tmp13 = items3;
      } else {
        tmp13 = cResult[6];
      }
      if (cResult[7] !== selfParticipant) {
        class A {
          constructor() {
            found = null;
            if (null != selfParticipant) {
              tmp2 = closure_11;
              speakers = closure_11.getSpeakers();
              found = speakers.find((item) => {
                const isSpeakingResult = item !== user.user.id && speaking.isSpeaking(item);
                return isSpeakingResult;
              });
            }
            return found;
          }
        }
        const items4 = [selfParticipant];
        cResult[7] = selfParticipant;
        cResult[8] = A;
        cResult[9] = items4;
        tmp16 = items4;
      } else {
        class A {
          constructor() {
            found = null;
            if (null != selfParticipant) {
              tmp2 = closure_11;
              speakers = closure_11.getSpeakers();
              found = speakers.find((item) => {
                const isSpeakingResult = item !== user.user.id && speaking.isSpeaking(item);
                return isSpeakingResult;
              });
            }
            return found;
          }
        }
        tmp16 = cResult[9];
      }
      const tmpResult5 = channelId(leadingEdgeDebounce[22]);
      const stateFromStores1 = tmpResult5.useStateFromStores(tmp13, A, tmp16);
      const tmpResult6 = channelId(leadingEdgeDebounce[31]);
      leadingEdgeDebounce = tmpResult6.useLeadingEdgeDebounce(stateFromStores1, 1000);
      if (null != leadingEdgeDebounce) {
        class A {
          constructor() {
            found = null;
            if (null != selfParticipant) {
              tmp2 = closure_11;
              speakers = closure_11.getSpeakers();
              found = speakers.find((item) => {
                const isSpeakingResult = item !== user.user.id && speaking.isSpeaking(item);
                return isSpeakingResult;
              });
            }
            return found;
          }
        }
        if (cResult[13] !== leadingEdgeDebounce) {
          class V {
            constructor(id) {
              return id.id === leadingEdgeDebounce;
            }
          }
          cResult[13] = leadingEdgeDebounce;
          cResult[14] = V;
        } else {
          class V {
            constructor(id) {
              return id.id === leadingEdgeDebounce;
            }
          }
        }
        let found = arr4.find(V);
        cResult[10] = arr4;
        cResult[11] = leadingEdgeDebounce;
        cResult[12] = found;
      }
      if (selfParticipant != null) {
        class V {
          constructor(id) {
            return id.id === leadingEdgeDebounce;
          }
        }
      }
      if (null != undefined) {
        class V {
          constructor(id) {
            return id.id === leadingEdgeDebounce;
          }
        }
      } else {
        class V {
          constructor(id) {
            return id.id === leadingEdgeDebounce;
          }
        }
        return selfParticipant;
      }
    }
  : (channelId) => {
      let arr4;
      let reactingToThermalState;
      let speaking;
      let tmp3;
      const f99342 = () => {
        const items = [
          ChannelRTCStore.getParticipants(channelId),
          ChannelRTCStore.getVideoParticipants(channelId),
          ChannelRTCStore.getParticipantsVersion(channelId),
        ];
        return items;
      };
      channelId = channelId.channelId;
      const selfParticipant = channelId.selfParticipant;
      let leadingEdgeDebounce;
      let items = [ChannelCallLifecycleStore];
      const obj = channelId(leadingEdgeDebounce[22]);
      const stateFromStores = obj.useStateFromStores(items, () => reactingToThermalState.isReactingToThermalState());
      const items1 = [ChannelRTCStore];
      const items2 = [channelId];
      const obj2 = channelId(leadingEdgeDebounce[22]);
      [arr4, tmp3] = obj2.useStateFromStores(items1, f99342, items2, areParticipantsEqual);
      _slicedToArray(obj2.useStateFromStores(items1, f99342, items2, areParticipantsEqual), 2);
      const items3 = [SpeakingStore];
      const items4 = [selfParticipant];
      const obj3 = channelId(leadingEdgeDebounce[22]);
      const stateFromStores1 = obj3.useStateFromStores(
        items3,
        () => {
          let user;
          let found = null;
          if (null != selfParticipant) {
            const speakers = SpeakingStore.getSpeakers();
            found = speakers.find((item) => {
              const isSpeakingResult = item !== user.user.id && speaking.isSpeaking(item);
              return isSpeakingResult;
            });
          }
          return found;
        },
        items4,
      );
      const obj4 = channelId(leadingEdgeDebounce[31]);
      leadingEdgeDebounce = obj4.useLeadingEdgeDebounce(stateFromStores1, 1000);
      if (null != leadingEdgeDebounce) {
        let found = arr4.find((id) => id.id === leadingEdgeDebounce);
        if (null != found) {
          if (found.type === ParticipantTypes.USER) {
            return found;
          }
        }
      }
      let streamId;
      if (selfParticipant != null) {
        streamId = selfParticipant.streamId;
      }
      if (null != streamId) {
        return selfParticipant;
      } else {
        if (!stateFromStores) {
          const items5 = [];
          let num = 0;
          HermesBuiltin.arraySpread(items5, tmp3, 0);
          const first = items5.sort((lastSpoke, lastSpoke2) => {
            let num = -1;
            if (lastSpoke.lastSpoke < lastSpoke2.lastSpoke) {
              num = 1;
            }
            return num;
          })[0];
          if (null != first) {
            return first;
          }
        }
        return selfParticipant;
      }
    };
const memo2 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_23 = memo2(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let Icon;
        let channel;
        let items1;
        let obj5;
        let selfParticipant;
        let tmp10;
        let tmp5;
        let tmp6;
        let tmp9;
        const obj = react2;
        const cResult = obj.c(30);
        ({ channel, selfParticipant } = arg0);
        const tmp4 = closure_19();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          let items = [ChannelCallLifecycleStore];
          const fn = function o() {
            const items = [
              ChannelCallLifecycleStore.consumedRequestToRespondToSeriousThermalState(),
              ChannelCallLifecycleStore.isReactingToThermalState(),
            ];
            return items;
          };
          cResult[0] = items;
          cResult[1] = fn;
        } else {
          [tmp5, tmp6] = cResult;
        }
        const tmpResult = get_initialized;
        [tmp9, tmp10] = tmpResult.useStateFromStoresArray(tmp5, tmp6);
        _slicedToArray(tmpResult.useStateFromStoresArray(tmp5, tmp6), 2);
        if (cResult[2] === channel.id) {
          let tmp11;
          if (cResult[3] === selfParticipant) {
            tmp11 = cResult[4];
          }
          const tmp13 = closure_22(tmp11);
          const useToken = useToken2.useToken;
          useToken2;
          if (cResult[5] === channel.guild_id) {
            let tmp20;
            let user1;
            const tmp17 = cResult[6];
            if (tmp13 != null) {
              user1 = tmp13.user;
            }
            if (tmp17 === user1) {
              tmp20 = cResult[7];
            }
            const tmp24 = useAvatarColorDefault(tmp20, tmp16);
            let id;
            if (tmp13 != null) {
              id = tmp13.user.id;
            }
            if (cResult[8] === channel.guild_id) {
              let tmp27;
              if (cResult[9] === id) {
                tmp27 = cResult[10];
              }
              const tmpResult4 = useAvatarSpeakingColor;
              const avatarSpeakingColor = tmpResult4.useAvatarSpeakingColor(tmp27);
              if (null == tmp13) {
                return null;
              } else {
                let tmp31;
                let tmp30 = null != tmp13.streamId;
                if (tmp30) {
                  const voiceState = tmp13.voiceState;
                  let selfVideo;
                  if (voiceState != null) {
                    selfVideo = voiceState.selfVideo;
                  }
                  tmp30 = selfVideo;
                }
                if (cResult[11] !== tmp24) {
                  const obj2 = { backgroundColor: tmp24 };
                  cResult[11] = tmp24;
                  cResult[12] = obj2;
                  tmp31 = obj2;
                } else {
                  tmp31 = cResult[12];
                }
                if (cResult[13] === tmp4.avatarContainer) {
                  let tmp32;
                  let tmp33;
                  if (cResult[14] === tmp31) {
                    tmp32 = cResult[15];
                  }
                  if (cResult[16] === channel) {
                    if (cResult[17] === tmp10) {
                      if (cResult[18] === tmp13) {
                        if (cResult[19] === avatarSpeakingColor) {
                          if (cResult[20] === tmp30) {
                            tmp33 = cResult[21];
                          }
                          if (cResult[22] === tmp9) {
                            if (cResult[23] === tmp4.thermalAlertIcon) {
                              let tmp38;
                              if (cResult[24] === tmp4.thermalAlertIconContainer) {
                                tmp38 = cResult[25];
                              }
                              if (cResult[26] === tmp38) {
                                if (cResult[27] === tmp32) {
                                  let tmp42;
                                  if (cResult[28] === tmp33) {
                                    tmp42 = cResult[29];
                                  }
                                  return tmp42;
                                }
                              }
                              const obj3 = { style: tmp32, children: items1 };
                              items1 = [tmp33, tmp38];
                              const tmp45 = authStore4(hasOwnProperty, obj3);
                              cResult[26] = tmp38;
                              cResult[27] = tmp32;
                              cResult[28] = tmp33;
                              cResult[29] = tmp45;
                              tmp42 = tmp45;
                            }
                          }
                          let tmp39 = null;
                          if (tmp9) {
                            const obj4 = { style: tmp4.thermalAlertIconContainer, children: authStore3(Icon, obj5) };
                            obj5 = {
                              style: tmp4.thermalAlertIcon,
                              source: AssetRegistryDefault,
                              color: tmp4.thermalAlertIcon.color,
                            };
                            Icon = native.Icon;
                            tmp39 = authStore3(hasOwnProperty, obj4);
                          }
                          cResult[22] = tmp9;
                          cResult[23] = tmp4.thermalAlertIcon;
                          cResult[24] = tmp4.thermalAlertIconContainer;
                          cResult[25] = tmp39;
                          tmp38 = tmp39;
                        }
                      }
                    }
                  }
                  if (tmp30) {
                    let tmp36;
                    if (!tmp10) {
                      const obj6 = {
                        participant: tmp13,
                        avatarSize: native.AvatarSizes.PROFILE,
                        resizeMode: VideoRenderer.ResizeMode.COVER,
                      };
                      const tmp15Result = UserTileDefault;
                      tmp36 = authStore3(tmp15Result, obj6);
                    }
                    cResult[16] = channel;
                    cResult[17] = tmp10;
                    cResult[18] = tmp13;
                    cResult[19] = avatarSpeakingColor;
                    cResult[20] = tmp30;
                    cResult[21] = tmp36;
                    tmp33 = tmp36;
                  }
                  const obj7 = {
                    size: native.AvatarSizes.LARGE_48,
                    channel,
                    guildId: channel.guild_id,
                    user: null,
                    speaking: null,
                    speakingColor: avatarSpeakingColor,
                  };
                  const Avatar = native.Avatar;
                  ({ user: obj8.user, speaking: obj8.speaking } = tmp13);
                  tmp36 = authStore3(Avatar, obj7);
                }
                const items2 = [tmp4.avatarContainer, tmp31];
                cResult[13] = tmp4.avatarContainer;
                cResult[14] = tmp31;
                cResult[15] = items2;
                tmp32 = items2;
              }
            }
            const obj9 = { userId: id, guildId: channel.guild_id };
            cResult[8] = channel.guild_id;
            cResult[9] = id;
            cResult[10] = obj9;
            tmp27 = obj9;
          }
          let avatarURL;
          if (tmp13 != null) {
            const user = tmp13.user;
            avatarURL = user.getAvatarURL(channel.guild_id, 80);
          }
          cResult[5] = channel.guild_id;
          let user2;
          if (tmp13 != null) {
            user2 = tmp13.user;
          }
          cResult[6] = user2;
          cResult[7] = avatarURL;
          tmp20 = avatarURL;
        }
        const obj10 = { channelId: channel.id, selfParticipant };
        cResult[2] = channel.id;
        cResult[3] = selfParticipant;
        cResult[4] = obj10;
        tmp11 = obj10;
      }
    : (channel) => {
        let Icon;
        let items1;
        let obj9;
        let tmp5;
        let tmp6;
        const f99347 = () => {
          const items = [
            ChannelCallLifecycleStore.consumedRequestToRespondToSeriousThermalState(),
            ChannelCallLifecycleStore.isReactingToThermalState(),
          ];
          return items;
        };
        channel = channel.channel;
        const selfParticipant = channel.selfParticipant;
        const tmp = closure_19();
        let items = [ChannelCallLifecycleStore];
        const obj = get_initialized;
        const obj2 = { channelId: channel.id, selfParticipant };
        [tmp5, tmp6] = obj.useStateFromStoresArray(items, f99347);
        _slicedToArray(obj.useStateFromStoresArray(items, f99347), 2);
        const tmp7 = closure_22(obj2);
        let avatarURL;
        const obj3 = useToken2;
        const token = obj3.useToken(nativeDefault.unsafe_rawColors.PRIMARY_800);
        if (tmp7 != null) {
          const user = tmp7.user;
          avatarURL = user.getAvatarURL(channel.guild_id, 80);
        }
        const tmp11 = useAvatarColorDefault(avatarURL, token);
        useAvatarSpeakingColor;
        if (tmp7 != null) {
          const id = tmp7.user.id;
        }
        if (null == tmp7) {
          return null;
        } else {
          let tmp15 = null != tmp7.streamId;
          if (tmp15) {
            const voiceState = tmp7.voiceState;
            let selfVideo;
            if (voiceState != null) {
              selfVideo = voiceState.selfVideo;
            }
            tmp15 = selfVideo;
          }
          const obj4 = { style: items1, children: null };
          items1 = [tmp.avatarContainer];
          const obj5 = { backgroundColor: tmp11 };
          items1[1] = obj5;
          if (tmp15) {
            let tmp18;
            let tmp20;
            if (!tmp6) {
              tmp18 = authStore3;
              const obj6 = {
                participant: tmp7,
                avatarSize: native.AvatarSizes.PROFILE,
                resizeMode: VideoRenderer.ResizeMode.COVER,
              };
              const tmp8Result = UserTileDefault;
              tmp20 = authStore3(tmp8Result, obj6);
            }
            const items2 = [tmp20];
            let tmp18Result = null;
            if (tmp5) {
              const obj8 = { style: tmp.thermalAlertIconContainer, children: tmp18(Icon, obj9) };
              obj9 = { style: tmp.thermalAlertIcon, source: AssetRegistryDefault, color: tmp.thermalAlertIcon.color };
              Icon = native.Icon;
              tmp18Result = tmp18(hasOwnProperty, obj8);
            }
            items2[1] = tmp18Result;
            obj4.children = items2;
            return tmp16(hasOwnProperty, obj4);
          }
          const obj16 = {
            size: native.AvatarSizes.LARGE_48,
            channel,
            guildId: channel.guild_id,
            user: null,
            speaking: null,
            speakingColor: tmp13,
          };
          const Avatar = native.Avatar;
          ({ user: obj7.user, speaking: obj7.speaking } = tmp7);
          tmp20 = authStore3(Avatar, obj16);
          tmp18 = authStore3;
        }
      },
);
const memo3 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memo3Result = memo3(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let channel;
        let height;
        let obj7;
        let obj9;
        let pipParticipant;
        let selfParticipant;
        let tmp5;
        let tmp7;
        let width;
        const obj = react2;
        const cResult = obj.c(28);
        ({ channel, pipParticipant, selfParticipant } = arg0);
        const tmp4 = closure_19();
        if (cResult[0] !== channel.id) {
          const obj2 = { channelId: channel.id };
          cResult[0] = channel.id;
          cResult[1] = obj2;
          tmp5 = obj2;
        } else {
          tmp5 = cResult[1];
        }
        const tmpResult = useIsViewingActivity;
        const isViewingActivity = tmpResult.useIsViewingActivity(tmp5);
        if (cResult[2] !== channel) {
          const obj3 = { channel };
          cResult[2] = channel;
          cResult[3] = obj3;
          tmp7 = obj3;
        } else {
          tmp7 = cResult[3];
        }
        const tmpResult3 = useShouldForcePipOrientation;
        const shouldForcePipOrientation = tmpResult3.useShouldForcePipOrientation(tmp7);
        if (cResult[4] === channel.id) {
          let tmp9;
          let tmp15;
          let str;
          let tmp17;
          if (cResult[5] === shouldForcePipOrientation) {
            tmp9 = cResult[6];
          }
          const tmp11 = usePipDimensionsDefault(tmp9);
          const tmp13 = isViewingActivity ? tmp4.backgroundPipFab : tmp4.background;
          const tmp14 = isViewingActivity ? tmp4.pipFab : tmp4.pip;
          ({ width, height } = useWindowDimensionsDefault());
          useWindowDimensionsDefault();
          if (cResult[7] !== tmp4.elevationShadow) {
            let elevationShadow;
            const tmpResult4 = PlatformUtils;
            if (tmpResult4.isAndroid()) {
              elevationShadow = tmp4.elevationShadow;
            }
            cResult[7] = tmp4.elevationShadow;
            cResult[8] = elevationShadow;
            tmp15 = elevationShadow;
          } else {
            tmp15 = cResult[8];
          }
          if (width > height) {
            str = "row";
          } else {
            str = "column";
          }
          if (cResult[9] !== str) {
            const obj4 = { flexDirection: str };
            cResult[9] = str;
            cResult[10] = obj4;
            tmp17 = obj4;
          } else {
            tmp17 = cResult[10];
          }
          if (cResult[11] === tmp11) {
            if (cResult[12] === tmp14) {
              if (cResult[13] === tmp15) {
                let tmp18;
                let tmp20Result;
                if (cResult[14] === tmp17) {
                  tmp18 = cResult[15];
                }
                if (cResult[16] === channel) {
                  if (cResult[17] === isViewingActivity) {
                    if (cResult[18] === pipParticipant) {
                      if (cResult[19] === selfParticipant) {
                        let tmp19;
                        if (cResult[20] === tmp4.activityPipContainer) {
                          tmp19 = cResult[21];
                        }
                        if (cResult[22] === tmp19) {
                          let tmp25;
                          if (cResult[23] === tmp18) {
                            tmp25 = cResult[24];
                          }
                          if (cResult[25] === tmp25) {
                            let tmp30;
                            if (cResult[26] === tmp13) {
                              tmp30 = cResult[27];
                            }
                            return tmp30;
                          }
                          const obj5 = { style: tmp13, children: tmp25 };
                          const tmp33 = authStore3(hasOwnProperty, obj5);
                          cResult[25] = tmp25;
                          cResult[26] = tmp13;
                          cResult[27] = tmp33;
                          tmp30 = tmp33;
                        }
                        const obj6 = { activeOpacity: 0.7, children: authStore3(hasOwnProperty, obj7) };
                        obj7 = { style: tmp18, children: tmp19 };
                        const tmp29 = authStore3(React3, obj6);
                        cResult[22] = tmp19;
                        cResult[23] = tmp18;
                        cResult[24] = tmp29;
                        tmp25 = tmp29;
                      }
                    }
                  }
                }
                if (isViewingActivity) {
                  const obj8 = {
                    pointerEvents: "none",
                    style: tmp4.activityPipContainer,
                    children: authStore3(closure_23, obj9),
                  };
                  obj9 = { channel, pipParticipant, selfParticipant };
                  tmp20Result = authStore3(hasOwnProperty, obj8);
                } else {
                  const obj10 = { channel, pipParticipant, selfParticipant };
                  tmp20Result = authStore3(closure_20, obj10);
                }
                cResult[16] = channel;
                cResult[17] = isViewingActivity;
                cResult[18] = pipParticipant;
                cResult[19] = selfParticipant;
                cResult[20] = tmp4.activityPipContainer;
                cResult[21] = tmp20Result;
                tmp19 = tmp20Result;
              }
            }
          }
          const items = [tmp14, tmp15, tmp17, tmp11];
          cResult[11] = tmp11;
          cResult[12] = tmp14;
          cResult[13] = tmp15;
          cResult[14] = tmp17;
          cResult[15] = items;
          tmp18 = items;
        }
        const obj11 = { channelId: channel.id, forcedOrientation: shouldForcePipOrientation };
        cResult[4] = channel.id;
        cResult[5] = shouldForcePipOrientation;
        cResult[6] = obj11;
        tmp9 = obj11;
      }
    : (arg0) => {
        let channel;
        let height;
        let obj10;
        let obj8;
        let pipParticipant;
        let selfParticipant;
        let str;
        let tmp8Result;
        let width;
        ({ channel, pipParticipant, selfParticipant } = arg0);
        const tmp = closure_19();
        const obj = useIsViewingActivity;
        const obj2 = { channelId: channel.id };
        const isViewingActivity = obj.useIsViewingActivity(obj2);
        const obj3 = useShouldForcePipOrientation;
        const shouldForcePipOrientation = obj3.useShouldForcePipOrientation({ channel });
        const obj4 = { channelId: channel.id, forcedOrientation: shouldForcePipOrientation };
        const tmp6 = usePipDimensionsDefault(obj4);
        const items = [isViewingActivity ? tmp.pipFab : tmp.pip, , ,];
        const obj5 = {
          style: isViewingActivity ? tmp.backgroundPipFab : tmp.background,
          children: authStore3(React3, obj10),
        };
        ({ width, height } = useWindowDimensionsDefault());
        useWindowDimensionsDefault();
        let elevationShadow;
        const tmp2Result = PlatformUtils;
        if (tmp2Result.isAndroid()) {
          elevationShadow = tmp.elevationShadow;
        }
        items[1] = elevationShadow;
        if (width > height) {
          str = "row";
        } else {
          str = "column";
        }
        const obj6 = { style: items, children: tmp8Result };
        items[2] = { flexDirection: str };
        items[3] = tmp6;
        if (isViewingActivity) {
          const obj7 = {
            pointerEvents: "none",
            style: tmp.activityPipContainer,
            children: authStore3(closure_23, obj8),
          };
          obj8 = { channel, pipParticipant, selfParticipant };
          tmp8Result = authStore3(hasOwnProperty, obj7);
        } else {
          const obj9 = { channel, pipParticipant, selfParticipant };
          tmp8Result = authStore3(closure_20, obj9);
        }
        obj10 = { activeOpacity: 0.7, children: authStore3(hasOwnProperty, obj6) };
        return authStore3(hasOwnProperty, obj5);
      },
);
size = size_mod;
const result = size.fileFinishedImporting("modules/video_calls/native/components/PictureInPictureVideo.tsx");

export default memo3Result;
export { areParticipantsEqual };
