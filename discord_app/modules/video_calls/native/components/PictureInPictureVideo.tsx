// discord_app/modules/video_calls/native/components/PictureInPictureVideo.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native2 from "../../../../design/void/native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import useWindowDimensionsDefault from "../../../screen/useWindowDimensions.native.tsx";
import useToken2 from "../../../../design/tokens/native/useToken.tsx";
import _modDef4814 from "../../../../../_runtime/metro/04814__.js";
import ChannelRTCActionCreatorsDefault from "../../../../actions/ChannelRTCActionCreators.tsx";
import useAvatarColorDefault from "../../../avatar/useAvatarColor.tsx";
import transitionToActivityDefault from "../../../activities/utils/transitionToActivity.native.tsx";
import useShouldForcePipOrientation from "useShouldForcePipOrientation.tsx";
import usePipDimensionsDefault from "usePipDimensions.tsx";
import useIsViewingActivity from "../../../activities/native/useIsViewingActivity.tsx";
import VideoRenderer from "VideoRenderer.tsx";
import UserTileDefault from "UserTile.tsx";
import useAvatarSpeakingColor from "../../../calls/native/useAvatarSpeakingColor.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import EmbeddedActivitiesStore from "../../../activities/EmbeddedActivitiesStore.tsx";
import ChannelRTCStore from "../../../calls/ChannelRTCStore.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import MediaEngineStore from "../../../../stores/MediaEngineStore.tsx";
import SelectedChannelStore from "../../../../stores/SelectedChannelStore.tsx";
import SpeakingStore from "../../../../stores/SpeakingStore.tsx";
import ChannelCallLifecycleStore from "../ChannelCallLifecycleStore.tsx";

require = fn;
function areParticipantsEqual(arg0, arg1) {
  [, , tmp] = arg0;
  [, , tmp2] = arg1;
  return tmp === tmp2;
}
get_ActivityIndicator = fn(17);
({ TouchableOpacity: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const ChannelCallStore = fn(9086);
({ togglePipFocus: map1, useIsVoiceChatFocused: closure_14 } = ChannelCallStore);
const ParticipantTypes = fn(4917).ParticipantTypes;
const jsxProd = fn(21);
({ jsx: closure_16, Fragment: closure_17, jsxs: closure_18 } = jsxProd);
const createStyles = fn(4896);
let obj = {
  elevationShadow: null,
  background: null,
  backgroundPipFab: null,
  pip: null,
  pipFab: null,
  avatarContainer: null,
  activityPipContainer: null,
  thermalAlertIconContainer: null,
  thermalAlertIcon: null,
};
const native = fn(1188);
obj.elevationShadow = native.generateBoxShadowStyle(fn(1188).EIGHT_DP_ELEVATION_SHADOW_PARAMS);
obj.background = {
  backgroundColor: nativeDefault.colors.BLACK,
  borderRadius: nativeDefault.radii.sm,
  overflow: "hidden",
};
let obj3 = { backgroundColor: nativeDefault.colors.BLACK, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj.backgroundPipFab = { backgroundColor: nativeDefault.colors.BLACK, borderRadius: nativeDefault.radii.lg };
let obj5 = { backgroundColor: nativeDefault.colors.BLACK, borderRadius: nativeDefault.radii.lg };
obj.pip = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
let obj6 = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj.pipFab = { borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
obj.avatarContainer = { width: "100%", height: "100%", alignItems: "center", justifyContent: "center" };
obj.activityPipContainer = { flex: 1, width: "100%" };
obj.thermalAlertIconContainer = {
  width: 22,
  height: 22,
  backgroundColor: "rgba(78, 80, 88, 0.48)",
  borderRadius: 11,
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  top: 6,
  left: 6,
};
let size = { width: 14, height: 14, color: nativeDefault.colors.WHITE };
obj.thermalAlertIcon = size;
let closure_19 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_20 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (channel) => {
        const cResult = channel(openVoice[17]).c(42);
        channel = channel.channel;
        const pipParticipant = channel.pipParticipant;
        const selfParticipant = channel.selfParticipant;
        let obj = channel(openVoice[17]);
        const voiceChatNavigationContext = channel(openVoice[18]).useVoiceChatNavigationContext();
        openVoice = undefined;
        if (voiceChatNavigationContext != null) {
          openVoice = voiceChatNavigationContext.openVoice;
        }
        if (openVoice == null) {
          openVoice = pipParticipant(tmp2[19]).noop;
        }
        const tmp7 = closure_14();
        closure_3 = tmp7;
        const tmp9 = pipParticipant(openVoice[20])(channel.id);
        closure_4 = tmp9;
        let applicationId;
        if (pipParticipant != null) {
          applicationId = pipParticipant.applicationId;
        }
        if (cResult[0] === applicationId) {
          let type;
          if (pipParticipant != null) {
            type = pipParticipant.type;
          }
          const _Symbol = Symbol;
          if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
            const items = [MediaEngineStore];
            cResult[3] = items;
            let tmp20 = items;
          } else {
            tmp20 = cResult[3];
          }
          if (cResult[4] !== pipParticipant) {
            const fn = function y() {
              let isLocalVideoDisabledResult = null != pipParticipant;
              if (isLocalVideoDisabledResult) {
                isLocalVideoDisabledResult = MediaEngineStore.isLocalVideoDisabled(tmp.id);
              }
              return isLocalVideoDisabledResult;
            };
            const items1 = [pipParticipant];
            cResult[4] = pipParticipant;
            cResult[5] = fn;
            cResult[6] = items1;
            let tmp23 = items1;
            let tmp22 = fn;
          } else {
            tmp22 = cResult[5];
            tmp23 = cResult[6];
          }
          const stateFromStores = tmp(tmp2[22]).useStateFromStores(tmp20, tmp22, tmp23);
          if (cResult[7] === tmp7) {
            if (cResult[8] === openVoice) {
              let id;
              if (pipParticipant != null) {
                id = pipParticipant.id;
              }
              if (cResult[9] === id) {
                let tmp26 = cResult[10];
              }
              if (cResult[11] === channel.id) {
                if (cResult[12] === tmp9) {
                  if (cResult[13] === tmp7) {
                    if (cResult[14] === openVoice) {
                      let tmp28 = cResult[15];
                    }
                    let type1;
                    if (pipParticipant != null) {
                      type1 = pipParticipant.type;
                    }
                    if (ParticipantTypes.HIDDEN_STREAM !== type1) {
                      if (ParticipantTypes.STREAM !== type1) {
                        if (ParticipantTypes.USER === type1) {
                          if (cResult[22] === stateFromStores) {
                            if (cResult[23] === tmp28) {
                            }
                          }
                          let tmp37 = null;
                          if (tmp8(tmp2[27])(pipParticipant)) {
                            tmp37 = null;
                            if (!stateFromStores) {
                              const obj3 = {
                                participant: pipParticipant,
                                avatarSize: tmp(tmp2[14]).AvatarSizes.PROFILE,
                                resizeMode: null,
                                onSingleTap: null,
                                onDoubleTap: null,
                              };
                              class V {
                                constructor() {
                                  if (closure_3) {
                                    tmp = noop;
                                    tmp2 = noop();
                                  }
                                  if (closure_4) {
                                    tmp5 = closure_1;
                                    tmp6 = closure_2;
                                    obj = closure_1(closure_2[23]);
                                    tmp7 = channel;
                                    tmp8 = null;
                                    participant = obj.selectParticipant(channel.id, null);
                                  } else {
                                    tmp3 = togglePipFocus;
                                    tmp4 = togglePipFocus();
                                  }
                                  return;
                                }
                              }
                              obj3.onSingleTap = tmp28;
                              obj3.onDoubleTap = tmp28;
                              tmp37 = closure_16(tmp8(tmp2[28]), obj3);
                              const tmp8Result = tmp8(tmp2[28]);
                            }
                          }
                          cResult[22] = stateFromStores;
                          class V {
                            constructor() {
                              if (closure_3) {
                                tmp = noop;
                                tmp2 = noop();
                              }
                              if (closure_4) {
                                tmp5 = closure_1;
                                tmp6 = closure_2;
                                obj = closure_1(closure_2[23]);
                                tmp7 = channel;
                                tmp8 = null;
                                participant = obj.selectParticipant(channel.id, null);
                              } else {
                                tmp3 = togglePipFocus;
                                tmp4 = togglePipFocus();
                              }
                              return;
                            }
                          }
                          cResult[23] = tmp28;
                          cResult[24] = pipParticipant;
                          cResult[25] = tmp37;
                        } else if (ParticipantTypes.ACTIVITY === type1) {
                          if (cResult[26] === channel.guild_id) {
                            if (cResult[27] === tmp7) {
                              if (cResult[28] === openVoice) {
                                let tmp31 = cResult[29];
                              }
                              class Y {
                                constructor() {
                                  currentEmbeddedActivity = closure_6.getCurrentEmbeddedActivity();
                                  if (null != currentEmbeddedActivity) {
                                    tmp2 = closure_1;
                                    tmp3 = closure_2;
                                    tmp4 = channel;
                                    tmp5 = closure_1(closure_2[29])(channel.guild_id, currentEmbeddedActivity.location);
                                  }
                                  if (closure_3) {
                                    tmp6 = noop;
                                    tmp7 = noop();
                                  }
                                  return;
                                }
                              }
                              const obj4 = { participant: pipParticipant, channel: null, onSingleTap: null };
                              class V {
                                constructor() {
                                  if (closure_3) {
                                    tmp = noop;
                                    tmp2 = noop();
                                  }
                                  if (closure_4) {
                                    tmp5 = closure_1;
                                    tmp6 = closure_2;
                                    obj = closure_1(closure_2[23]);
                                    tmp7 = channel;
                                    tmp8 = null;
                                    participant = obj.selectParticipant(channel.id, null);
                                  } else {
                                    tmp3 = togglePipFocus;
                                    tmp4 = togglePipFocus();
                                  }
                                  return;
                                }
                              }
                              obj4.onSingleTap = tmp31;
                              const tmp34 = closure_16(tmp8(tmp2[30]), obj4);
                              cResult[30] = channel;
                              cResult[31] = pipParticipant;
                              cResult[32] = tmp31;
                              cResult[33] = tmp34;
                            }
                          }
                          class Y {
                            constructor() {
                              currentEmbeddedActivity = closure_6.getCurrentEmbeddedActivity();
                              if (null != currentEmbeddedActivity) {
                                tmp2 = closure_1;
                                tmp3 = closure_2;
                                tmp4 = channel;
                                tmp5 = closure_1(closure_2[29])(channel.guild_id, currentEmbeddedActivity.location);
                              }
                              if (closure_3) {
                                tmp6 = noop;
                                tmp7 = noop();
                              }
                              return;
                            }
                          }
                          cResult[26] = channel.guild_id;
                          class V {
                            constructor() {
                              if (closure_3) {
                                tmp = noop;
                                tmp2 = noop();
                              }
                              if (closure_4) {
                                tmp5 = closure_1;
                                tmp6 = closure_2;
                                obj = closure_1(closure_2[23]);
                                tmp7 = channel;
                                tmp8 = null;
                                participant = obj.selectParticipant(channel.id, null);
                              } else {
                                tmp3 = togglePipFocus;
                                tmp4 = togglePipFocus();
                              }
                              return;
                            }
                          }
                          cResult[28] = openVoice;
                          cResult[29] = Y;
                          tmp31 = Y;
                        }
                        let tmp50 = null;
                        if (null != selfParticipant) {
                          tmp50 = null;
                          class Y {
                            constructor() {
                              currentEmbeddedActivity = closure_6.getCurrentEmbeddedActivity();
                              if (null != currentEmbeddedActivity) {
                                tmp2 = closure_1;
                                tmp3 = closure_2;
                                tmp4 = channel;
                                tmp5 = closure_1(closure_2[29])(channel.guild_id, currentEmbeddedActivity.location);
                              }
                              if (closure_3) {
                                tmp6 = noop;
                                tmp7 = noop();
                              }
                              return;
                            }
                          }
                        }
                        class V {
                          constructor() {
                            if (closure_3) {
                              tmp = noop;
                              tmp2 = noop();
                            }
                            if (closure_4) {
                              tmp5 = closure_1;
                              tmp6 = closure_2;
                              obj = closure_1(closure_2[23]);
                              tmp7 = channel;
                              tmp8 = null;
                              participant = obj.selectParticipant(channel.id, null);
                            } else {
                              tmp3 = togglePipFocus;
                              tmp4 = togglePipFocus();
                            }
                            return;
                          }
                        }
                        cResult[35] = tmp7;
                        cResult[36] = openVoice;
                        cResult[37] = selfParticipant;
                        cResult[38] = tmp50;
                      }
                    }
                    class V {
                      constructor() {
                        if (closure_3) {
                          tmp = noop;
                          tmp2 = noop();
                        }
                        if (closure_4) {
                          tmp5 = closure_1;
                          tmp6 = closure_2;
                          obj = closure_1(closure_2[23]);
                          tmp7 = channel;
                          tmp8 = null;
                          participant = obj.selectParticipant(channel.id, null);
                        } else {
                          tmp3 = togglePipFocus;
                          tmp4 = togglePipFocus();
                        }
                        return;
                      }
                    }
                    if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
                      class Y {
                        constructor() {
                          currentEmbeddedActivity = closure_6.getCurrentEmbeddedActivity();
                          if (null != currentEmbeddedActivity) {
                            tmp2 = closure_1;
                            tmp3 = closure_2;
                            tmp4 = channel;
                            tmp5 = closure_1(closure_2[29])(channel.guild_id, currentEmbeddedActivity.location);
                          }
                          if (closure_3) {
                            tmp6 = noop;
                            tmp7 = noop();
                          }
                          return;
                        }
                      }
                      cResult[16] = tmp42;
                      let tmp40 = tmp42;
                    } else {
                      tmp40 = cResult[16];
                    }
                    if (pipParticipant.user.id === tmp40) {
                      const obj5 = { onSingleTap: null, onDoubleTap: null };
                      class Y {
                        constructor() {
                          currentEmbeddedActivity = closure_6.getCurrentEmbeddedActivity();
                          if (null != currentEmbeddedActivity) {
                            tmp2 = closure_1;
                            tmp3 = closure_2;
                            tmp4 = channel;
                            tmp5 = closure_1(closure_2[29])(channel.guild_id, currentEmbeddedActivity.location);
                          }
                          if (closure_3) {
                            tmp6 = noop;
                            tmp7 = noop();
                          }
                          return;
                        }
                      }
                      obj5.onDoubleTap = tmp26;
                      let tmp44Result = closure_16(tmp8(tmp2[24]), obj5);
                    } else {
                      const obj6 = {
                        removeEmptyStateButton: true,
                        removeEmptyStateImage: true,
                        resizeMode: null,
                        participant: null,
                        onSingleTap: null,
                        onDoubleTap: null,
                      };
                      class Y {
                        constructor() {
                          currentEmbeddedActivity = closure_6.getCurrentEmbeddedActivity();
                          if (null != currentEmbeddedActivity) {
                            tmp2 = closure_1;
                            tmp3 = closure_2;
                            tmp4 = channel;
                            tmp5 = closure_1(closure_2[29])(channel.guild_id, currentEmbeddedActivity.location);
                          }
                          if (closure_3) {
                            tmp6 = noop;
                            tmp7 = noop();
                          }
                          return;
                        }
                      }
                      obj6.resizeMode = tmp(tmp2[26]).ResizeMode.CONTAIN;
                      obj6.participant = pipParticipant;
                      obj6.onSingleTap = tmp28;
                      class V {
                        constructor() {
                          if (closure_3) {
                            tmp = noop;
                            tmp2 = noop();
                          }
                          if (closure_4) {
                            tmp5 = closure_1;
                            tmp6 = closure_2;
                            obj = closure_1(closure_2[23]);
                            tmp7 = channel;
                            tmp8 = null;
                            participant = obj.selectParticipant(channel.id, null);
                          } else {
                            tmp3 = togglePipFocus;
                            tmp4 = togglePipFocus();
                          }
                          return;
                        }
                      }
                      tmp44Result = closure_16(tmp45, obj6);
                    }
                    cResult[17] = pipParticipant.user.id === tmp40;
                    cResult[18] = tmp28;
                    cResult[19] = tmp26;
                    cResult[20] = pipParticipant;
                    cResult[21] = tmp44Result;
                  }
                }
              }
              class V {
                constructor() {
                  if (closure_3) {
                    tmp = noop;
                    tmp2 = noop();
                  }
                  if (closure_4) {
                    tmp5 = closure_1;
                    tmp6 = closure_2;
                    obj = closure_1(closure_2[23]);
                    tmp7 = channel;
                    tmp8 = null;
                    participant = obj.selectParticipant(channel.id, null);
                  } else {
                    tmp3 = togglePipFocus;
                    tmp4 = togglePipFocus();
                  }
                  return;
                }
              }
              cResult[11] = channel.id;
              cResult[12] = tmp9;
              cResult[13] = tmp7;
              cResult[14] = openVoice;
              cResult[15] = V;
              tmp28 = V;
            }
          }
          cResult[7] = tmp7;
          cResult[8] = openVoice;
          let id1;
          if (pipParticipant != null) {
            id1 = pipParticipant.id;
          }
          const fn2 = function k() {
            const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
            if (null != voiceChannelId) {
              let id;
              if (pipParticipant != null) {
                id = pipParticipant.id;
              }
              if (id == null) {
                id = null;
              }
              const participant = ChannelRTCActionCreatorsDefault.selectParticipant(voiceChannelId, id);
              if (closure_3) {
                openVoice();
              }
            }
          };
          cResult[9] = id1;
          cResult[10] = fn2;
          tmp26 = fn2;
          const tmpResult = tmp(tmp2[22]);
        }
        let type2;
        if (pipParticipant != null) {
          type2 = pipParticipant.type;
        }
        let tmp15Result = type2 === ParticipantTypes.ACTIVITY;
        if (tmp15Result) {
          let applicationId1;
          class Y {
            constructor() {
              currentEmbeddedActivity = closure_6.getCurrentEmbeddedActivity();
              if (null != currentEmbeddedActivity) {
                tmp2 = closure_1;
                tmp3 = closure_2;
                tmp4 = channel;
                tmp5 = closure_1(closure_2[29])(channel.guild_id, currentEmbeddedActivity.location);
              }
              if (closure_3) {
                tmp6 = noop;
                tmp7 = noop();
              }
              return;
            }
          }
          if (pipParticipant != null) {
            applicationId1 = pipParticipant.applicationId;
          }
          tmp15Result = tmp15(applicationId1);
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
        cResult[2] = tmp15Result;
        const obj2 = channel(openVoice[18]);
      }
    : (channel) => {
        channel = channel.channel;
        const pipParticipant = channel.pipParticipant;
        const selfParticipant = channel.selfParticipant;
        let openVoice;
        closure_3 = undefined;
        closure_4 = undefined;
        const voiceChatNavigationContext = channel(openVoice[18]).useVoiceChatNavigationContext();
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
          if (pipParticipant != null) {
            applicationId = pipParticipant.applicationId;
          }
          tmp6ResultResult = tmp6(tmp2[21])(applicationId);
          const tmp6Result = tmp6(tmp2[21]);
        }
        let obj = channel(openVoice[18]);
        const items = [MediaEngineStore];
        const items1 = [pipParticipant];
        let type1;
        const stateFromStores = channel(openVoice[22]).useStateFromStores(
          items,
          () => {
            let isLocalVideoDisabledResult = null != pipParticipant;
            if (isLocalVideoDisabledResult) {
              isLocalVideoDisabledResult = MediaEngineStore.isLocalVideoDisabled(tmp.id);
            }
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
            const participant = ChannelRTCActionCreatorsDefault.selectParticipant(channel.id, null);
          } else {
            __initData2();
          }
        }
        if (ParticipantTypes.HIDDEN_STREAM !== type1) {
          if (ParticipantTypes.STREAM !== type1) {
            if (ParticipantTypes.USER === type1) {
              let tmp15 = null;
              if (tmp6(tmp2[27])(pipParticipant)) {
                tmp15 = null;
                if (!stateFromStores) {
                  const obj2 = {
                    participant: pipParticipant,
                    avatarSize: tmp(tmp2[14]).AvatarSizes.PROFILE,
                    resizeMode: tmp(tmp2[26]).ResizeMode.COVER,
                    onSingleTap: onPipTap,
                    onDoubleTap: onPipTap,
                  };
                  tmp15 = closure_16(tmp6(tmp2[28]), obj2);
                  const tmp6Result4 = tmp6(tmp2[28]);
                }
              }
              let tmp14 = tmp15;
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
            let tmp24 = null;
            if (null != selfParticipant) {
              tmp24 = null;
              if (!tmp6ResultResult) {
                const obj4 = {
                  participant: selfParticipant,
                  avatarSize: tmp(tmp2[14]).AvatarSizes.PROFILE,
                  resizeMode: tmp(tmp2[26]).ResizeMode.COVER,
                  onSingleTap() {
                    if (closure_3) {
                      openVoice();
                    } else {
                      __initData2();
                    }
                  },
                };
                tmp24 = closure_16(tmp6(tmp2[28]), obj4);
                const tmp6Result5 = tmp6(tmp2[28]);
              }
            }
            const obj5 = { children: null };
            const items2 = [tmp24, tmp14];
            obj5.children = items2;
            return closure_18(closure_17, obj5);
          }
        }
        if (pipParticipant.user.id === AuthenticationStore.getId()) {
          function onScreenshareTap() {
            const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
            if (null != voiceChannelId) {
              let id;
              if (pipParticipant != null) {
                id = pipParticipant.id;
              }
              if (id == null) {
                id = null;
              }
              const participant = ChannelRTCActionCreatorsDefault.selectParticipant(voiceChannelId, id);
              if (closure_3) {
                openVoice();
              }
            }
          }
          const obj6 = { onSingleTap: onScreenshareTap, onDoubleTap: onScreenshareTap };
          closure_16(tmp6(tmp2[24]), obj6);
        } else {
          const obj7 = {
            removeEmptyStateButton: true,
            removeEmptyStateImage: true,
            resizeMode: tmp(tmp2[26]).ResizeMode.CONTAIN,
            participant: pipParticipant,
            onSingleTap: onPipTap,
            onDoubleTap: onPipTap,
          };
          closure_16(tmp6(tmp2[25]), obj7);
          const tmp6Result6 = tmp6(tmp2[25]);
        }
        const tmpResult = channel(openVoice[22]);
      },
);
ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      const cResult = channelId(leadingEdgeDebounce[17]).c(18);
      channelId = channelId.channelId;
      const selfParticipant = channelId.selfParticipant;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [ChannelCallLifecycleStore];
        const fn = function o() {
          return reactingToThermalState.isReactingToThermalState();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const obj = channelId(leadingEdgeDebounce[17]);
      const stateFromStores = channelId(leadingEdgeDebounce[22]).useStateFromStores(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [ChannelRTCStore];
        cResult[2] = items1;
        let tmp8 = items1;
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
        let tmp11 = items2;
        let tmp10 = fn2;
      } else {
        tmp10 = cResult[4];
        tmp11 = cResult[5];
      }
      const tmpResult = channelId(leadingEdgeDebounce[22]);
      const tmpResult4 = channelId(leadingEdgeDebounce[22]);
      [arr4, r10057] = channelId(leadingEdgeDebounce[22]).useStateFromStores(tmp8, tmp10, tmp11, areParticipantsEqual);
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const items3 = [SpeakingStore];
        cResult[6] = items3;
        let tmp13 = items3;
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
                let isSpeakingResult = item !== user.user.id;
                if (isSpeakingResult) {
                  isSpeakingResult = speaking.isSpeaking(item);
                }
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
        let tmp16 = items4;
      } else {
        class A {
          constructor() {
            found = null;
            if (null != selfParticipant) {
              tmp2 = closure_11;
              speakers = closure_11.getSpeakers();
              found = speakers.find((item) => {
                let isSpeakingResult = item !== user.user.id;
                if (isSpeakingResult) {
                  isSpeakingResult = speaking.isSpeaking(item);
                }
                return isSpeakingResult;
              });
            }
            return found;
          }
        }
        tmp16 = cResult[9];
      }
      const tmp12 = _slicedToArray(
        channelId(leadingEdgeDebounce[22]).useStateFromStores(tmp8, tmp10, tmp11, areParticipantsEqual),
        2,
      );
      const stateFromStores1 = channelId(leadingEdgeDebounce[22]).useStateFromStores(tmp13, A, tmp16);
      const tmpResult5 = channelId(leadingEdgeDebounce[22]);
      leadingEdgeDebounce = channelId(leadingEdgeDebounce[31]).useLeadingEdgeDebounce(stateFromStores1, 1000);
      if (null != leadingEdgeDebounce) {
        class A {
          constructor() {
            found = null;
            if (null != selfParticipant) {
              tmp2 = closure_11;
              speakers = closure_11.getSpeakers();
              found = speakers.find((item) => {
                let isSpeakingResult = item !== user.user.id;
                if (isSpeakingResult) {
                  isSpeakingResult = speaking.isSpeaking(item);
                }
                return isSpeakingResult;
              });
            }
            return found;
          }
        }
        if (cResult[13] !== leadingEdgeDebounce) {
          class V {
            constructor(arg0) {
              return channelId.id === closure_2;
            }
          }
          cResult[13] = leadingEdgeDebounce;
          cResult[14] = V;
        } else {
          class V {
            constructor(arg0) {
              return channelId.id === closure_2;
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
          constructor(arg0) {
            return channelId.id === closure_2;
          }
        }
      }
      if (null != undefined) {
        class V {
          constructor(arg0) {
            return channelId.id === closure_2;
          }
        }
      } else {
        class V {
          constructor(arg0) {
            return channelId.id === closure_2;
          }
        }
        return selfParticipant;
      }
      const tmpResult6 = channelId(leadingEdgeDebounce[31]);
    }
  : (channelId) => {
      channelId = channelId.channelId;
      const selfParticipant = channelId.selfParticipant;
      let leadingEdgeDebounce;
      let items = [ChannelCallLifecycleStore];
      const stateFromStores = channelId(leadingEdgeDebounce[22]).useStateFromStores(items, () =>
        reactingToThermalState.isReactingToThermalState(),
      );
      const obj = channelId(leadingEdgeDebounce[22]);
      const items1 = [ChannelRTCStore];
      const items2 = [channelId];
      const obj2 = channelId(leadingEdgeDebounce[22]);
      [arr4, tmp3] = channelId(leadingEdgeDebounce[22]).useStateFromStores(
        items1,
        () => {
          const items = [
            ChannelRTCStore.getParticipants(channelId),
            ChannelRTCStore.getVideoParticipants(channelId),
            ChannelRTCStore.getParticipantsVersion(channelId),
          ];
          return items;
        },
        items2,
        areParticipantsEqual,
      );
      const tmp2 = _slicedToArray(
        channelId(leadingEdgeDebounce[22]).useStateFromStores(
          items1,
          () => {
            const items = [
              ChannelRTCStore.getParticipants(channelId),
              ChannelRTCStore.getVideoParticipants(channelId),
              ChannelRTCStore.getParticipantsVersion(channelId),
            ];
            return items;
          },
          items2,
          areParticipantsEqual,
        ),
        2,
      );
      const items3 = [SpeakingStore];
      const items4 = [selfParticipant];
      const stateFromStores1 = channelId(leadingEdgeDebounce[22]).useStateFromStores(
        items3,
        () => {
          let found = null;
          if (null != selfParticipant) {
            const speakers = SpeakingStore.getSpeakers();
            found = speakers.find((item) => {
              let isSpeakingResult = item !== user.user.id;
              if (isSpeakingResult) {
                isSpeakingResult = speaking.isSpeaking(item);
              }
              return isSpeakingResult;
            });
          }
          return found;
        },
        items4,
      );
      const obj3 = channelId(leadingEdgeDebounce[22]);
      leadingEdgeDebounce = channelId(leadingEdgeDebounce[31]).useLeadingEdgeDebounce(stateFromStores1, 1000);
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
          HermesBuiltin.arraySpread(tmp3, 0);
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
      const obj4 = channelId(leadingEdgeDebounce[31]);
    };
ReactCompilerGating = fn(558);
let closure_23 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        const cResult = c.c(30);
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
          tmp5 = items;
          tmp6 = fn;
        } else {
          [tmp5, tmp6] = cResult;
        }
        const tmpResult = initialize;
        [tmp9, tmp10] = initialize.useStateFromStoresArray(tmp5, tmp6);
        if (cResult[2] === channel.id) {
          if (cResult[3] === selfParticipant) {
            let tmp11 = cResult[4];
          }
          const tmp13 = closure_22(tmp11);
          const useToken = useToken2.useToken;
          if (cResult[5] === channel.guild_id) {
            let user1;
            if (tmp13 != null) {
              user1 = tmp13.user;
            }
            if (cResult[6] === user1) {
              let tmp19 = cResult[7];
            }
            const tmp23 = useAvatarColorDefault(tmp19, tmp16);
            let id;
            if (tmp13 != null) {
              id = tmp13.user.id;
            }
            if (cResult[8] === channel.guild_id) {
              if (cResult[9] === id) {
                let tmp26 = cResult[10];
              }
              const avatarSpeakingColor = useAvatarSpeakingColor.useAvatarSpeakingColor(tmp26);
              if (null == tmp13) {
                return null;
              } else {
                let tmp29 = null != tmp13.streamId;
                if (tmp29) {
                  const voiceState = tmp13.voiceState;
                  let selfVideo;
                  if (voiceState != null) {
                    selfVideo = voiceState.selfVideo;
                  }
                  tmp29 = selfVideo;
                }
                if (cResult[11] !== tmp23) {
                  const obj2 = { backgroundColor: tmp23 };
                  cResult[11] = tmp23;
                  cResult[12] = obj2;
                  let tmp30 = obj2;
                } else {
                  tmp30 = cResult[12];
                }
                if (cResult[13] === tmp4.avatarContainer) {
                  if (cResult[14] === tmp30) {
                    let tmp31 = cResult[15];
                  }
                  if (cResult[16] === channel) {
                    if (cResult[17] === tmp10) {
                      if (cResult[18] === tmp13) {
                        if (cResult[19] === avatarSpeakingColor) {
                          if (cResult[20] === tmp29) {
                            if (cResult[22] === tmp9) {
                              if (cResult[23] === tmp4.thermalAlertIcon) {
                                if (cResult[24] === tmp4.thermalAlertIconContainer) {
                                  let tmp38 = cResult[25];
                                }
                                if (cResult[26] === tmp38) {
                                  if (cResult[27] === tmp31) {
                                    if (cResult[28] === tmp32) {
                                      let tmp42 = cResult[29];
                                    }
                                    return tmp42;
                                  }
                                }
                                const obj3 = { style: tmp31, children: null };
                                const items1 = [tmp32, tmp38];
                                obj3.children = items1;
                                const tmp45 = collapsedCategories(hasOwnProperty, obj3);
                                cResult[26] = tmp38;
                                cResult[27] = tmp31;
                                cResult[28] = tmp32;
                                cResult[29] = tmp45;
                                tmp42 = tmp45;
                              }
                            }
                            let tmp39 = null;
                            if (tmp9) {
                              const obj4 = { style: tmp4.thermalAlertIconContainer, children: null };
                              const obj5 = {
                                style: tmp4.thermalAlertIcon,
                                source: _modDef4814,
                                color: tmp4.thermalAlertIcon.color,
                              };
                              obj4.children = value2(native2.Icon, obj5);
                              tmp39 = value2(hasOwnProperty, obj4);
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
                  }
                  if (tmp29) {
                    if (!tmp10) {
                      const obj6 = {
                        participant: tmp13,
                        avatarSize: native2.AvatarSizes.PROFILE,
                        resizeMode: VideoRenderer.ResizeMode.COVER,
                      };
                      let tmp35 = value2(UserTileDefault, obj6);
                      const tmp15Result = UserTileDefault;
                    }
                    cResult[16] = channel;
                    cResult[17] = tmp10;
                    cResult[18] = tmp13;
                    cResult[19] = avatarSpeakingColor;
                    cResult[20] = tmp29;
                    cResult[21] = tmp35;
                  }
                  const obj7 = {
                    size: native2.AvatarSizes.LARGE_48,
                    channel,
                    guildId: channel.guild_id,
                    user: null,
                    speaking: null,
                    speakingColor: null,
                  };
                  ({ user: obj8.user, speaking: obj8.speaking } = tmp13);
                  obj7.speakingColor = avatarSpeakingColor;
                  tmp35 = value2(native2.Avatar, obj7);
                }
                const items2 = [tmp4.avatarContainer, tmp30];
                cResult[13] = tmp4.avatarContainer;
                cResult[14] = tmp30;
                cResult[15] = items2;
                tmp31 = items2;
              }
              const tmpResult4 = useAvatarSpeakingColor;
            }
            const obj9 = { userId: id, guildId: channel.guild_id };
            cResult[8] = channel.guild_id;
            cResult[9] = id;
            cResult[10] = obj9;
            tmp26 = obj9;
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
          tmp19 = avatarURL;
          const tmpResult3 = useToken2;
        }
        const obj10 = { channelId: channel.id, selfParticipant };
        cResult[2] = channel.id;
        cResult[3] = selfParticipant;
        cResult[4] = obj10;
        tmp11 = obj10;
        const tmp8 = _slicedToArray(initialize.useStateFromStoresArray(tmp5, tmp6), 2);
      }
    : (channel) => {
        channel = channel.channel;
        const tmp = closure_19();
        let items = [ChannelCallLifecycleStore];
        [tmp5, tmp6] = initialize.useStateFromStoresArray(items, () => {
          const items = [
            ChannelCallLifecycleStore.consumedRequestToRespondToSeriousThermalState(),
            ChannelCallLifecycleStore.isReactingToThermalState(),
          ];
          return items;
        });
        const tmp7 = closure_22({ channelId: channel.id, selfParticipant: channel.selfParticipant });
        const obj2 = { channelId: channel.id, selfParticipant: channel.selfParticipant };
        const tmp4 = _slicedToArray(
          initialize.useStateFromStoresArray(items, () => {
            const items = [
              ChannelCallLifecycleStore.consumedRequestToRespondToSeriousThermalState(),
              ChannelCallLifecycleStore.isReactingToThermalState(),
            ];
            return items;
          }),
          2,
        );
        let avatarURL;
        const token = useToken2.useToken(nativeDefault.unsafe_rawColors.PRIMARY_800);
        if (tmp7 != null) {
          const user = tmp7.user;
          avatarURL = user.getAvatarURL(channel.guild_id, 80);
        }
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
          const obj4 = { style: null, children: null };
          const items1 = [tmp.avatarContainer];
          const obj5 = { backgroundColor: tmp11 };
          items1[1] = obj5;
          obj4.style = items1;
          if (tmp15) {
            if (!tmp6) {
              let tmp18 = value2;
              const obj6 = {
                participant: tmp7,
                avatarSize: native2.AvatarSizes.PROFILE,
                resizeMode: VideoRenderer.ResizeMode.COVER,
              };
              let tmp20 = value2(UserTileDefault, obj6);
              const tmp8Result = UserTileDefault;
            }
            const items2 = [tmp20];
            let tmp18Result = null;
            if (tmp5) {
              const obj8 = { style: tmp.thermalAlertIconContainer, children: null };
              const obj9 = { style: tmp.thermalAlertIcon, source: _modDef4814, color: tmp.thermalAlertIcon.color };
              obj8.children = tmp18(native2.Icon, obj9);
              tmp18Result = tmp18(hasOwnProperty, obj8);
            }
            items2[1] = tmp18Result;
            obj4.children = items2;
            return tmp16(hasOwnProperty, obj4);
          }
          const obj16 = {
            size: native2.AvatarSizes.LARGE_48,
            channel,
            guildId: channel.guild_id,
            user: null,
            speaking: null,
            speakingColor: null,
          };
          ({ user: obj7.user, speaking: obj7.speaking } = tmp7);
          obj16.speakingColor = tmp13;
          tmp20 = value2(native2.Avatar, obj16);
          tmp18 = value2;
        }
        tmp11 = useAvatarColorDefault(avatarURL, token);
      },
);
ReactCompilerGating = fn(558);
let obj7 = { borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/PictureInPictureVideo.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        const cResult = c.c(28);
        ({ channel, pipParticipant, selfParticipant } = arg0);
        let activityPipContainer = closure_19();
        if (cResult[0] !== channel.id) {
          const obj2 = { channelId: channel.id };
          cResult[0] = channel.id;
          cResult[1] = obj2;
          let tmp4 = obj2;
        } else {
          tmp4 = cResult[1];
        }
        const isViewingActivity = useIsViewingActivity.useIsViewingActivity(tmp4);
        if (cResult[2] !== channel) {
          const obj3 = { channel };
          cResult[2] = channel;
          cResult[3] = obj3;
          let tmp6 = obj3;
        } else {
          tmp6 = cResult[3];
        }
        const tmpResult = useIsViewingActivity;
        const shouldForcePipOrientation = useShouldForcePipOrientation.useShouldForcePipOrientation(tmp6);
        if (cResult[4] === channel.id) {
          if (cResult[5] === shouldForcePipOrientation) {
            let tmp8 = cResult[6];
          }
          const tmp10 = usePipDimensionsDefault(tmp8);
          const tmp12 = isViewingActivity ? activityPipContainer.backgroundPipFab : activityPipContainer.background;
          const tmp13 = isViewingActivity ? activityPipContainer.pipFab : activityPipContainer.pip;
          ({ width, height } = useWindowDimensionsDefault());
          if (cResult[7] !== activityPipContainer.elevationShadow) {
            let elevationShadow;
            if (tmpResult4.isAndroid()) {
              elevationShadow = activityPipContainer.elevationShadow;
            }
            cResult[7] = activityPipContainer.elevationShadow;
            cResult[8] = elevationShadow;
            let tmp14 = elevationShadow;
            tmpResult4 = PlatformUtils;
          } else {
            tmp14 = cResult[8];
          }
          if (width > height) {
            let str = "row";
          } else {
            str = "column";
          }
          if (cResult[9] !== str) {
            const obj4 = { flexDirection: str };
            cResult[9] = str;
            cResult[10] = obj4;
            let tmp16 = obj4;
          } else {
            tmp16 = cResult[10];
          }
          if (cResult[11] === tmp10) {
            if (cResult[12] === tmp13) {
              if (cResult[13] === tmp14) {
                if (cResult[14] === tmp16) {
                  let tmp17 = cResult[15];
                }
                if (cResult[16] === channel) {
                  if (cResult[17] === isViewingActivity) {
                    if (cResult[18] === pipParticipant) {
                      if (cResult[19] === selfParticipant) {
                        if (cResult[20] === activityPipContainer.activityPipContainer) {
                          if (cResult[22] === cResult[21]) {
                            if (cResult[23] === tmp17) {
                              let tmp25 = cResult[24];
                            }
                            if (cResult[25] === tmp25) {
                              if (cResult[26] === tmp12) {
                                let tmp30 = cResult[27];
                              }
                              return tmp30;
                            }
                            const obj5 = { style: tmp12, children: tmp25 };
                            const tmp33 = value2(hasOwnProperty, obj5);
                            cResult[25] = tmp25;
                            cResult[26] = tmp12;
                            cResult[27] = tmp33;
                            tmp30 = tmp33;
                          }
                          const obj6 = { activeOpacity: 0.7, children: null };
                          const obj7 = { style: tmp17, children: cResult[21] };
                          obj6.children = value2(hasOwnProperty, obj7);
                          const tmp29 = value2(React4, obj6);
                          cResult[22] = cResult[21];
                          cResult[23] = tmp17;
                          cResult[24] = tmp29;
                          tmp25 = tmp29;
                        }
                      }
                    }
                  }
                }
                if (isViewingActivity) {
                  const obj8 = {
                    pointerEvents: "none",
                    style: activityPipContainer.activityPipContainer,
                    children: null,
                  };
                  const obj9 = { channel, pipParticipant, selfParticipant };
                  obj8.children = value2(closure_23, obj9);
                  let tmp19Result = value2(hasOwnProperty, obj8);
                } else {
                  const obj10 = { channel, pipParticipant, selfParticipant };
                  tmp19Result = value2(closure_20, obj10);
                }
                cResult[16] = channel;
                cResult[17] = isViewingActivity;
                cResult[18] = pipParticipant;
                cResult[19] = selfParticipant;
                activityPipContainer = activityPipContainer.activityPipContainer;
                cResult[20] = activityPipContainer;
                cResult[21] = tmp19Result;
              }
            }
          }
          const items = [tmp13, tmp14, tmp16, tmp10];
          cResult[11] = tmp10;
          cResult[12] = tmp13;
          cResult[13] = tmp14;
          cResult[14] = tmp16;
          cResult[15] = items;
          tmp17 = items;
          const tmp11 = useWindowDimensionsDefault();
        }
        const obj11 = { channelId: channel.id, forcedOrientation: shouldForcePipOrientation };
        cResult[4] = channel.id;
        cResult[5] = shouldForcePipOrientation;
        cResult[6] = obj11;
        tmp8 = obj11;
        const tmpResult3 = useShouldForcePipOrientation;
      }
    : (arg0) => {
        ({ channel, pipParticipant, selfParticipant } = arg0);
        const tmp = closure_19();
        const isViewingActivity = useIsViewingActivity.useIsViewingActivity({ channelId: channel.id });
        const obj2 = { channelId: channel.id };
        const shouldForcePipOrientation = useShouldForcePipOrientation.useShouldForcePipOrientation({ channel });
        const obj4 = { channelId: channel.id, forcedOrientation: shouldForcePipOrientation };
        const tmp6 = usePipDimensionsDefault({ channelId: channel.id, forcedOrientation: shouldForcePipOrientation });
        const obj5 = { style: isViewingActivity ? tmp.backgroundPipFab : tmp.background, children: null };
        const items = [isViewingActivity ? tmp.pipFab : tmp.pip, , ,];
        ({ width, height } = useWindowDimensionsDefault());
        const tmp7 = useWindowDimensionsDefault();
        let elevationShadow;
        if (tmp2Result.isAndroid()) {
          elevationShadow = tmp.elevationShadow;
        }
        items[1] = elevationShadow;
        if (width > height) {
          let str = "row";
        } else {
          str = "column";
        }
        const obj6 = { style: items, children: null };
        items[2] = { flexDirection: str };
        items[3] = tmp6;
        if (isViewingActivity) {
          const obj7 = { pointerEvents: "none", style: tmp.activityPipContainer, children: null };
          const obj8 = { channel, pipParticipant, selfParticipant };
          obj7.children = value2(closure_23, obj8);
          let tmp8Result = value2(hasOwnProperty, obj7);
        } else {
          const obj9 = { channel, pipParticipant, selfParticipant };
          tmp8Result = value2(closure_20, obj9);
        }
        tmp2Result = PlatformUtils;
        obj6.children = tmp8Result;
        obj5.children = value2(React4, { activeOpacity: 0.7, children: value2(hasOwnProperty, obj6) });
        return value2(hasOwnProperty, obj5);
      },
);
export { areParticipantsEqual };
