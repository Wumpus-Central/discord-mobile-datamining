// discord_app/modules/video_calls/native/components/PictureInPictureGlobal.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native2 from "../../../../design/void/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import PrivateChannelCallUtils from "../../../../utils/native/PrivateChannelCallUtils.tsx";
import NavigatorConstants from "../../../../design/components/Navigator/native/NavigatorConstants.native.tsx";
import ChannelRTCParticipants from "../../../calls/ChannelRTCParticipants.tsx";
import transitionToActivityDefault from "../../../activities/utils/transitionToActivity.native.tsx";
import PictureInPictureDefault from "PictureInPicture.tsx";
import usePipVideoOrStreamDefault from "../usePipVideoOrStream.tsx";
import getPIPBottomOffsetForPIPMode from "../../../panels/morphable/native/getPIPBottomOffsetForPIPMode.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import EmbeddedActivitiesStore from "../../../activities/EmbeddedActivitiesStore.tsx";
import ChannelRTCStore from "../../../calls/ChannelRTCStore.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import MediaEngineStore from "../../../../stores/MediaEngineStore.tsx";

const require = globalThis.__r;

const usePipDimensionsDefault = tmp5(9107);
require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet: metroRequire, TouchableOpacity: closure_7 } = get_ActivityIndicator);
let closure_10 = fn(9100).useBestActiveChatInputContainerHeight;
const PictureInPicturePositions = fn(1085).PictureInPicturePositions;
const ParticipantTypes = fn(4917).ParticipantTypes;
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
let c17 = 12;
const createStyles = fn(4896);
let obj = {
  container: { flex: 1, marginLeft: 12, marginRight: 12 },
  elevationShadow: null,
  pip: null,
  background: null,
};
const native = fn(1188);
obj.elevationShadow = native.generateBoxShadowStyle(fn(1188).EIGHT_DP_ELEVATION_SHADOW_PARAMS);
obj.pip = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
let obj3 = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj.background = {
  backgroundColor: nativeDefault.colors.BLACK,
  borderRadius: nativeDefault.radii.sm,
  overflow: "hidden",
};
let closure_18 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_19 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (channel) => {
        const cResult = channel(576).c(64);
        channel = channel.channel;
        closure_18();
        const tmp6 = usePipVideoOrStreamDefault(channel.id);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [ChannelRTCStore, AuthenticationStore];
          cResult[0] = items;
          let first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== channel.id) {
          const fn = function o() {
            const streamParticipants = ChannelRTCStore.getStreamParticipants(channel.id);
            return streamParticipants.find((user) => user.user.id === id.getId());
          };
          cResult[1] = channel.id;
          cResult[2] = fn;
          let tmp10 = fn;
        } else {
          tmp10 = cResult[2];
        }
        let obj = channel(576);
        const stateFromStores = channel(504).useStateFromStores(first, tmp10);
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [ChannelRTCStore, EmbeddedActivitiesStore];
          cResult[3] = items1;
          let tmp12 = items1;
        } else {
          tmp12 = cResult[3];
        }
        if (cResult[4] !== channel.id) {
          class R {
            constructor() {
              currentEmbeddedActivity = closure_8.getCurrentEmbeddedActivity();
              participant = null;
              if (null != currentEmbeddedActivity) {
                tmp3 = closure_9;
                tmp4 = channel;
                tmp5 = closure_0;
                tmp6 = closure_2;
                obj = closure_0(closure_2[18]);
                obj1 = { applicationId: null, instanceId: null };
                ({ applicationId: obj2.applicationId, compositeInstanceId: obj2.instanceId } = currentEmbeddedActivity);
                participant = closure_9.getParticipant(channel.id, obj.getEmbeddedActivityParticipantId(obj1));
              }
              return participant;
            }
          }
          cResult[4] = channel.id;
          cResult[5] = R;
        } else {
          class R {
            constructor() {
              currentEmbeddedActivity = closure_8.getCurrentEmbeddedActivity();
              participant = null;
              if (null != currentEmbeddedActivity) {
                tmp3 = closure_9;
                tmp4 = channel;
                tmp5 = closure_0;
                tmp6 = closure_2;
                obj = closure_0(closure_2[18]);
                obj1 = { applicationId: null, instanceId: null };
                ({ applicationId: obj2.applicationId, compositeInstanceId: obj2.instanceId } = currentEmbeddedActivity);
                participant = closure_9.getParticipant(channel.id, obj.getEmbeddedActivityParticipantId(obj1));
              }
              return participant;
            }
          }
        }
        const tmpResult = channel(504);
        const stateFromStores1 = channel(504).useStateFromStores(tmp12, R);
        if (cResult[6] === stateFromStores1) {
          class R {
            constructor() {
              currentEmbeddedActivity = closure_8.getCurrentEmbeddedActivity();
              participant = null;
              if (null != currentEmbeddedActivity) {
                tmp3 = closure_9;
                tmp4 = channel;
                tmp5 = closure_0;
                tmp6 = closure_2;
                obj = closure_0(closure_2[18]);
                obj1 = { applicationId: null, instanceId: null };
                ({ applicationId: obj2.applicationId, compositeInstanceId: obj2.instanceId } = currentEmbeddedActivity);
                participant = closure_9.getParticipant(channel.id, obj.getEmbeddedActivityParticipantId(obj1));
              }
              return participant;
            }
          }
          if (tmp17) {
            class R {
              constructor() {
                currentEmbeddedActivity = closure_8.getCurrentEmbeddedActivity();
                participant = null;
                if (null != currentEmbeddedActivity) {
                  tmp3 = closure_9;
                  tmp4 = channel;
                  tmp5 = closure_0;
                  tmp6 = closure_2;
                  obj = closure_0(closure_2[18]);
                  obj1 = { applicationId: null, instanceId: null };
                  ({ applicationId: obj2.applicationId, compositeInstanceId: obj2.instanceId } =
                    currentEmbeddedActivity);
                  participant = closure_9.getParticipant(channel.id, obj.getEmbeddedActivityParticipantId(obj1));
                }
                return participant;
              }
            }
          }
          importDefault = tmp18;
          const _Symbol = Symbol;
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            class R {
              constructor() {
                currentEmbeddedActivity = closure_8.getCurrentEmbeddedActivity();
                participant = null;
                if (null != currentEmbeddedActivity) {
                  tmp3 = closure_9;
                  tmp4 = channel;
                  tmp5 = closure_0;
                  tmp6 = closure_2;
                  obj = closure_0(closure_2[18]);
                  obj1 = { applicationId: null, instanceId: null };
                  ({ applicationId: obj2.applicationId, compositeInstanceId: obj2.instanceId } =
                    currentEmbeddedActivity);
                  participant = closure_9.getParticipant(channel.id, obj.getEmbeddedActivityParticipantId(obj1));
                }
                return participant;
              }
            }
            const items2 = [MediaEngineStore];
            cResult[9] = items2;
            const tmp20 = items2;
          } else {
            class R {
              constructor() {
                currentEmbeddedActivity = closure_8.getCurrentEmbeddedActivity();
                participant = null;
                if (null != currentEmbeddedActivity) {
                  tmp3 = closure_9;
                  tmp4 = channel;
                  tmp5 = closure_0;
                  tmp6 = closure_2;
                  obj = closure_0(closure_2[18]);
                  obj1 = { applicationId: null, instanceId: null };
                  ({ applicationId: obj2.applicationId, compositeInstanceId: obj2.instanceId } =
                    currentEmbeddedActivity);
                  participant = closure_9.getParticipant(channel.id, obj.getEmbeddedActivityParticipantId(obj1));
                }
                return participant;
              }
            }
          }
          if (cResult[10] !== tmp18) {
            class C {
              constructor() {
                isLocalVideoDisabledResult = null != closure_1;
                if (isLocalVideoDisabledResult) {
                  tmp3 = closure_12;
                  isLocalVideoDisabledResult = closure_12.isLocalVideoDisabled(tmp.id);
                }
                return isLocalVideoDisabledResult;
              }
            }
            const items3 = [tmp18];
            cResult[10] = tmp18;
            cResult[11] = C;
            cResult[12] = items3;
            let tmp22 = items3;
          } else {
            class C {
              constructor() {
                isLocalVideoDisabledResult = null != closure_1;
                if (isLocalVideoDisabledResult) {
                  tmp3 = closure_12;
                  isLocalVideoDisabledResult = closure_12.isLocalVideoDisabled(tmp.id);
                }
                return isLocalVideoDisabledResult;
              }
            }
            tmp22 = cResult[12];
          }
          const stateFromStores2 = tmp(504).useStateFromStores(tmp20, C, tmp22);
          const _Symbol2 = Symbol;
          if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
            class C {
              constructor() {
                isLocalVideoDisabledResult = null != closure_1;
                if (isLocalVideoDisabledResult) {
                  tmp3 = closure_12;
                  isLocalVideoDisabledResult = closure_12.isLocalVideoDisabled(tmp.id);
                }
                return isLocalVideoDisabledResult;
              }
            }
            const items4 = [ChannelRTCStore, AuthenticationStore];
            cResult[13] = items4;
            const tmp24 = items4;
          } else {
            class C {
              constructor() {
                isLocalVideoDisabledResult = null != closure_1;
                if (isLocalVideoDisabledResult) {
                  tmp3 = closure_12;
                  isLocalVideoDisabledResult = closure_12.isLocalVideoDisabled(tmp.id);
                }
                return isLocalVideoDisabledResult;
              }
            }
          }
          if (cResult[14] !== channel.id) {
            class B {
              constructor() {
                participant = closure_9.getParticipant(channel.id, closure_11.getId());
                tmp2 = null;
                if (null != participant) {
                  tmp3 = ParticipantTypes;
                  tmp2 = null;
                  if (participant.type === ParticipantTypes.USER) {
                    tmp2 = null;
                    if (null != participant.streamId) {
                      tmp2 = participant;
                    }
                  }
                }
                return tmp2;
              }
            }
            cResult[14] = channel.id;
            cResult[15] = B;
          } else {
            class B {
              constructor() {
                participant = closure_9.getParticipant(channel.id, closure_11.getId());
                tmp2 = null;
                if (null != participant) {
                  tmp3 = ParticipantTypes;
                  tmp2 = null;
                  if (participant.type === ParticipantTypes.USER) {
                    tmp2 = null;
                    if (null != participant.streamId) {
                      tmp2 = participant;
                    }
                  }
                }
                return tmp2;
              }
            }
          }
          const tmpResult7 = tmp(504);
          const stateFromStores3 = tmp(504).useStateFromStores(tmp24, B);
          if (cResult[16] !== channel) {
            class M {
              constructor() {
                obj = closure_0(closure_2[20]);
                openGuildVoiceModalResult = obj.openGuildVoiceModal(channel, "PIP");
                return;
              }
            }
            cResult[16] = channel;
            cResult[17] = M;
          } else {
            class M {
              constructor() {
                obj = closure_0(closure_2[20]);
                openGuildVoiceModalResult = obj.openGuildVoiceModal(channel, "PIP");
                return;
              }
            }
          }
          dependencyMap = M;
          if (cResult[18] !== channel) {
            class M {
              constructor() {
                obj = closure_0(closure_2[20]);
                openGuildVoiceModalResult = obj.openGuildVoiceModal(channel, "PIP");
                return;
              }
            }
            tmp30[0] = channel;
            cResult[18] = channel;
            cResult[19] = tmp30;
          } else {
            class M {
              constructor() {
                obj = closure_0(closure_2[20]);
                openGuildVoiceModalResult = obj.openGuildVoiceModal(channel, "PIP");
                return;
              }
            }
          }
          const tmpResult8 = tmp(504);
          const shouldForcePipOrientation = tmp(9104).useShouldForcePipOrientation(tmp30);
          tmp(5919);
          if (cResult[20] === channel.id) {
            class M {
              constructor() {
                obj = closure_0(closure_2[20]);
                openGuildVoiceModalResult = obj.openGuildVoiceModal(channel, "PIP");
                return;
              }
            }
            ({ width, height } = usePipDimensionsDefault(tmp34));
            if (tmp33) {
              class M {
                constructor() {
                  obj = closure_0(closure_2[20]);
                  openGuildVoiceModalResult = obj.openGuildVoiceModal(channel, "PIP");
                  return;
                }
              }
            } else {
              class M {
                constructor() {
                  obj = closure_0(closure_2[20]);
                  openGuildVoiceModalResult = obj.openGuildVoiceModal(channel, "PIP");
                  return;
                }
              }
            }
            if (cResult[23] === height) {
              class M {
                constructor() {
                  obj = closure_0(closure_2[20]);
                  openGuildVoiceModalResult = obj.openGuildVoiceModal(channel, "PIP");
                  return;
                }
              }
            }
            const size = { height, width, flexDirection: tmp36 };
            cResult[23] = height;
            cResult[24] = width;
            cResult[25] = tmp36;
            cResult[26] = size;
            const tmp35 = usePipDimensionsDefault(tmp34);
          }
          const obj2 = { channelId: channel.id, forcedOrientation: shouldForcePipOrientation };
          cResult[20] = channel.id;
          cResult[21] = shouldForcePipOrientation;
          cResult[22] = obj2;
          tmp34 = obj2;
          const tmpResult9 = tmp(9104);
        }
        let tmp19 = stateFromStores1;
        if (null != tmp6) {
          class M {
            constructor() {
              obj = closure_0(closure_2[20]);
              openGuildVoiceModalResult = obj.openGuildVoiceModal(channel, "PIP");
              return;
            }
          }
          tmp19 = stateFromStores1;
          if (tmp6.user.id !== AuthenticationStore.getId()) {
            class M {
              constructor() {
                obj = closure_0(closure_2[20]);
                openGuildVoiceModalResult = obj.openGuildVoiceModal(channel, "PIP");
                return;
              }
            }
          }
        }
        cResult[6] = stateFromStores1;
        cResult[7] = tmp6;
        cResult[8] = tmp19;
        const tmpResult6 = channel(504);
      }
    : (channel) => {
        channel = channel.channel;
        let stateFromStores1;
        let onDoubleTap;
        let shouldForcePipOrientation;
        let isScreenLandscape;
        let width;
        let height;
        const tmp = closure_18();
        let tmp4 = stateFromStores1(onDoubleTap[16])(channel.id);
        const items = [ChannelRTCStore, AuthenticationStore];
        const stateFromStores = channel(onDoubleTap[17]).useStateFromStores(items, () => {
          const streamParticipants = ChannelRTCStore.getStreamParticipants(channel.id);
          return streamParticipants.find((user) => user.user.id === id.getId());
        });
        let obj = channel(onDoubleTap[17]);
        const items1 = [ChannelRTCStore, EmbeddedActivitiesStore];
        stateFromStores1 = channel(onDoubleTap[17]).useStateFromStores(items1, () => {
          const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
          let participant = null;
          if (null != currentEmbeddedActivity) {
            ({ applicationId: obj2.applicationId, compositeInstanceId: obj2.instanceId } = currentEmbeddedActivity);
            participant = ChannelRTCStore.getParticipant(
              channel.id,
              ChannelRTCParticipants.getEmbeddedActivityParticipantId({ applicationId: null, instanceId: null }),
            );
            const obj3 = { applicationId: null, instanceId: null };
          }
          return participant;
        });
        let tmp10 = stateFromStores1;
        let obj3 = channel(onDoubleTap[17]);
        if (null != tmp4) {
          tmp10 = stateFromStores1;
          if (tmp4.user.id !== AuthenticationStore.getId()) {
            tmp10 = tmp4;
          }
        }
        if (tmp9) {
          tmp10 = stateFromStores1;
        }
        stateFromStores1 = tmp10;
        tmp9 = stateFromStores1(onDoubleTap[19])(channel.id);
        const items2 = [MediaEngineStore];
        const items3 = [tmp10];
        const stateFromStores2 = channel(onDoubleTap[17]).useStateFromStores(
          items2,
          () => {
            let isLocalVideoDisabledResult = null != stateFromStores1;
            if (isLocalVideoDisabledResult) {
              isLocalVideoDisabledResult = MediaEngineStore.isLocalVideoDisabled(tmp.id);
            }
            return isLocalVideoDisabledResult;
          },
          items3,
        );
        const tmp5Result = channel(onDoubleTap[17]);
        const items4 = [ChannelRTCStore, AuthenticationStore];
        const stateFromStores3 = channel(onDoubleTap[17]).useStateFromStores(items4, () => {
          const participant = ChannelRTCStore.getParticipant(channel.id, AuthenticationStore.getId());
          let tmp2 = null;
          if (null != participant) {
            tmp2 = null;
            if (participant.type === ParticipantTypes.USER) {
              tmp2 = null;
              if (null != participant.streamId) {
                tmp2 = participant;
              }
            }
          }
          return tmp2;
        });
        const items5 = [channel];
        onDoubleTap = isScreenLandscape.useCallback(() => {
          PrivateChannelCallUtils.openGuildVoiceModal(channel, "PIP");
        }, items5);
        const tmp5Result4 = channel(onDoubleTap[17]);
        shouldForcePipOrientation = channel(onDoubleTap[21]).useShouldForcePipOrientation({ channel });
        const tmp5Result5 = channel(onDoubleTap[21]);
        isScreenLandscape = channel(onDoubleTap[22]).useIsScreenLandscape();
        let size = tmp2(tmp3[23])({ channelId: channel.id, forcedOrientation: shouldForcePipOrientation });
        width = size.width;
        height = size.height;
        const items6 = [shouldForcePipOrientation, isScreenLandscape, height, width];
        let type;
        const memo = isScreenLandscape.useMemo(() => {
          const size = { height, width, flexDirection: null };
          if (isScreenLandscape) {
            let str = "row";
          } else {
            str = "column";
          }
          size.flexDirection = str;
          return size;
        }, items6);
        if (tmp10 != null) {
          type = tmp10.type;
        }
        const tmp19 =
          type === ParticipantTypes.ACTIVITY &&
          stateFromStores1(onDoubleTap[25])(tmp10.applicationId) &&
          null == stateFromStores;
        let type1;
        if (tmp10 != null) {
          type1 = tmp10.type;
        }
        if (ParticipantTypes.HIDDEN_STREAM !== type1) {
          if (ParticipantTypes.STREAM !== type1) {
            if (ParticipantTypes.USER === type1) {
              let tmp22 = null;
              if (!stateFromStores2) {
                const obj5 = {
                  participant: tmp10,
                  avatarSize: tmp5(tmp3[12]).AvatarSizes.PROFILE,
                  resizeMode: tmp5(tmp3[27]).ResizeMode.COVER,
                  onSingleTap: onDoubleTap,
                  onDoubleTap,
                };
                tmp22 = closure_15(tmp2(tmp3[28]), obj5);
                const tmp2Result = tmp2(tmp3[28]);
              }
              let tmp21 = tmp22;
            } else {
              tmp21 = null;
              if (ParticipantTypes.ACTIVITY === type1) {
                const obj6 = {
                  participant: tmp10,
                  channel,
                  onSingleTap() {
                    const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
                    if (null != currentEmbeddedActivity) {
                      let _location;
                      if (currentEmbeddedActivity != null) {
                        _location = currentEmbeddedActivity.location;
                      }
                      transitionToActivityDefault(channel.guild_id, _location);
                    }
                    callback();
                  },
                };
                tmp21 = closure_15(tmp2(tmp3[30]), obj6);
              }
            }
          }
          const obj7 = { style: tmp.background, children: null };
          const obj8 = { style: null, children: null };
          const items7 = [, ,];
          ({ pip: arr8[0], elevationShadow: arr8[1] } = tmp);
          items7[2] = memo;
          obj8.style = items7;
          let tmp26Result = null != stateFromStores3;
          if (tmp26Result) {
            tmp26Result = !tmp19;
          }
          if (tmp26Result) {
            const obj9 = {
              participant: stateFromStores3,
              avatarSize: tmp5(tmp3[12]).AvatarSizes.PROFILE,
              resizeMode: tmp5(tmp3[27]).ResizeMode.COVER,
              onSingleTap: onDoubleTap,
            };
            tmp26Result = closure_15(tmp2(tmp3[28]), obj9);
            const tmp2Result3 = tmp2(tmp3[28]);
          }
          const items8 = [tmp26Result, ,];
          let tmp26Result2 = null != stateFromStores && !tmp19;
          if (tmp26Result2) {
            const obj10 = { onSingleTap: onDoubleTap };
            tmp26Result2 = closure_15(tmp2(tmp3[31]), obj10);
          }
          items8[1] = tmp26Result2;
          const obj11 = { activeOpacity: 0.7, children: null };
          items8[2] = (null == stateFromStores3 || null == stateFromStores || null == stateFromStores1) && tmp21;
          obj8.children = items8;
          obj11.children = closure_16(width, obj8);
          obj7.children = closure_15(closure_7, obj11);
          return closure_15(width, obj7);
        }
        const obj12 = { resizeMode: null, participant: null, onSingleTap: null, onDoubleTap: null };
        const obj4 = { channelId: channel.id, forcedOrientation: shouldForcePipOrientation };
        const tmp5Result6 = channel(onDoubleTap[22]);
        obj12.resizeMode = channel(onDoubleTap[27]).ResizeMode.CONTAIN;
        obj12.participant = tmp10;
        obj12.onSingleTap = onDoubleTap;
        obj12.onDoubleTap = onDoubleTap;
        tmp21 = closure_15(stateFromStores1(onDoubleTap[26]), obj12);
        const tmp2Result4 = stateFromStores1(onDoubleTap[26]);
      },
);
ReactCompilerGating = fn(558);
let closure_20 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (channel) => {
        const cResult = c.c(7);
        channel = channel.channel;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function l() {
            return constants.TOP_RIGHT;
          };
          cResult[0] = fn;
          let first = fn;
        } else {
          first = cResult[0];
        }
        [tmp5, tmp6] = noop.useState(first);
        if (cResult[1] !== channel) {
          const obj2 = { channel };
          const tmp10 = closure_1_15(closure_19, obj2);
          cResult[1] = channel;
          cResult[2] = tmp10;
          let tmp7 = tmp10;
        } else {
          tmp7 = cResult[2];
        }
        if (cResult[3] === channel) {
          if (cResult[4] === tmp5) {
            if (cResult[5] === tmp7) {
              let tmp11 = cResult[6];
            }
            return tmp11;
          }
        }
        const tmp12 = closure_1_15(PictureInPictureDefault, {
          channel,
          preferredPosition: tmp5,
          onMove: tmp6,
          children: tmp7,
        });
        cResult[3] = channel;
        cResult[4] = tmp5;
        cResult[5] = tmp7;
        cResult[6] = tmp12;
        tmp11 = tmp12;
        const tmp4 = _slicedToArray(noop.useState(first), 2);
      }
    : (channel) => {
        channel = channel.channel;
        [tmp2, tmp3] = noop.useState(() => constants.TOP_RIGHT);
        const obj = { channel, preferredPosition: tmp2, onMove: tmp3, children: null };
        const tmp = _slicedToArray(
          noop.useState(() => constants.TOP_RIGHT),
          2,
        );
        obj.children = closure_1_15(closure_19, { channel });
        return closure_1_15(PictureInPictureDefault, obj);
      },
);
const __initData = {
  code: "function PictureInPictureGlobalTsx1(){const{withTiming,drawerState,STANDARD_EASING}=this.__closure;return withTiming(drawerState,{easing:STANDARD_EASING,duration:250});}",
};
const __initData2 = {
  code: "function PictureInPictureGlobalTsx2(){const{interpolate,animatedDrawerState,NAV_BAR_HEIGHT,PADDING,chatInputContainerHeight,PIP_AVOIDANCE_TAB_BAR_HEIGHT}=this.__closure;return{marginTop:interpolate(animatedDrawerState.get(),[0,1],[NAV_BAR_HEIGHT+PADDING,PADDING]),marginBottom:interpolate(animatedDrawerState.get(),[0,1],[chatInputContainerHeight+PADDING,PIP_AVOIDANCE_TAB_BAR_HEIGHT+PADDING])};}",
};
const __initData3 = {
  code: "function PictureInPictureGlobalTsx3(){const{withTiming,drawerState,STANDARD_EASING}=this.__closure;return withTiming(drawerState,{easing:STANDARD_EASING,duration:250});}",
};
const __initData4 = {
  code: "function PictureInPictureGlobalTsx4(){const{interpolate,animatedDrawerState,NAV_BAR_HEIGHT,PADDING,chatInputContainerHeight,PIP_AVOIDANCE_TAB_BAR_HEIGHT}=this.__closure;return{marginTop:interpolate(animatedDrawerState.get(),[0,1],[NAV_BAR_HEIGHT+PADDING,PADDING]),marginBottom:interpolate(animatedDrawerState.get(),[0,1],[chatInputContainerHeight+PADDING,PIP_AVOIDANCE_TAB_BAR_HEIGHT+PADDING])};}",
};
ReactCompilerGating = fn(558);
let obj5 = { backgroundColor: nativeDefault.colors.BLACK, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
let size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/PictureInPictureGlobal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      const cResult = num(derivedValue[15]).c(14);
      channel = channel.channel;
      const tmp4 = closure_18();
      let obj = num(derivedValue[15]);
      num = 1;
      if (obj2.useIsChannelFocused()) {
        num = 0;
      }
      const tmp5 = closure_10();
      importDefault = tmp5;
      obj2 = num(derivedValue[33]);
      const fn = function n() {
        const obj = timing;
        return obj.withTiming(num, { easing: native2.STANDARD_EASING, duration: 250 });
      };
      const tmpResult = num(derivedValue[34]);
      fn.__closure = {
        withTiming: num(derivedValue[35]).withTiming,
        drawerState: num,
        STANDARD_EASING: num(derivedValue[12]).STANDARD_EASING,
      };
      fn.__workletHash = 5168896066356;
      fn.__initData = __initData;
      derivedValue = tmpResult.useDerivedValue(fn);
      const obj3 = {
        withTiming: num(derivedValue[35]).withTiming,
        drawerState: num,
        STANDARD_EASING: num(derivedValue[12]).STANDARD_EASING,
      };
      const fn2 = function o() {
        const obj = { marginTop: null, marginBottom: null };
        value = derivedValue.get();
        const items = [NavigatorConstants.NAV_BAR_HEIGHT + c17, c17];
        obj.marginTop = ReanimatedRexport.interpolate(value, [0, 1], items);
        const items1 = [closure_1 + c17];
        value2 = derivedValue.get();
        items1[1] = getPIPBottomOffsetForPIPMode.PIP_AVOIDANCE_TAB_BAR_HEIGHT + c17;
        obj.marginBottom = ReanimatedRexport.interpolate(value2, [0, 1], items1);
        return obj;
      };
      const tmpResult2 = num(derivedValue[34]);
      fn2.__closure = {
        interpolate: num(derivedValue[34]).interpolate,
        animatedDrawerState: derivedValue,
        NAV_BAR_HEIGHT: num(derivedValue[36]).NAV_BAR_HEIGHT,
        PADDING,
        chatInputContainerHeight: tmp5,
        PIP_AVOIDANCE_TAB_BAR_HEIGHT: num(derivedValue[37]).PIP_AVOIDANCE_TAB_BAR_HEIGHT,
      };
      fn2.__workletHash = 8833756900366;
      fn2.__initData = __initData2;
      const animatedStyle = tmpResult2.useAnimatedStyle(fn2);
      const obj4 = {
        interpolate: num(derivedValue[34]).interpolate,
        animatedDrawerState: derivedValue,
        NAV_BAR_HEIGHT: num(derivedValue[36]).NAV_BAR_HEIGHT,
        PADDING,
        chatInputContainerHeight: tmp5,
        PIP_AVOIDANCE_TAB_BAR_HEIGHT: num(derivedValue[37]).PIP_AVOIDANCE_TAB_BAR_HEIGHT,
      };
      const tmp8 = importDefault;
      ({ left, right } = require("useSafeAreaInsets")());
      if (cResult[0] === left) {
        if (cResult[1] === right) {
          let tmp10 = cResult[2];
        }
        if (cResult[3] === animatedStyle) {
          if (cResult[4] === tmp4.container) {
            let tmp11 = cResult[5];
          }
          if (cResult[6] !== channel) {
            const obj5 = { channel };
            const tmp15 = closure_15(closure_20, obj5);
            cResult[6] = channel;
            cResult[7] = tmp15;
            let tmp12 = tmp15;
          } else {
            tmp12 = cResult[7];
          }
          if (cResult[8] === tmp11) {
            if (cResult[9] === tmp12) {
              let tmp16 = cResult[10];
            }
            if (cResult[11] === tmp10) {
              if (cResult[12] === tmp16) {
                let tmp19 = cResult[13];
              }
              return tmp19;
            }
            const obj6 = { style: tmp10, pointerEvents: "box-none", children: tmp16 };
            const tmp22 = closure_15(closure_5, obj6);
            cResult[11] = tmp10;
            cResult[12] = tmp16;
            cResult[13] = tmp22;
            tmp19 = tmp22;
          }
          const obj7 = { style: tmp11, pointerEvents: "box-none", children: tmp12 };
          const tmp18 = closure_15(tmp8(tmp2[34]).View, obj7);
          cResult[8] = tmp11;
          cResult[9] = tmp12;
          cResult[10] = tmp18;
          tmp16 = tmp18;
        }
        let items = [tmp4.container, animatedStyle];
        cResult[3] = animatedStyle;
        cResult[4] = tmp4.container;
        cResult[5] = items;
        tmp11 = items;
      }
      let items1 = [closure_6.absoluteFill, { paddingLeft: left, paddingRight: right }];
      cResult[0] = left;
      cResult[1] = right;
      cResult[2] = items1;
      tmp10 = items1;
      const tmp9 = require("useSafeAreaInsets")();
    }
  : (channel) => {
      importDefault = undefined;
      let derivedValue;
      const tmp = closure_18();
      let num = 1;
      if (obj.useIsChannelFocused()) {
        num = 0;
      }
      const tmp4 = closure_10();
      importDefault = tmp4;
      obj = num(derivedValue[33]);
      const fn = function n() {
        const obj = timing;
        return obj.withTiming(num, { easing: native2.STANDARD_EASING, duration: 250 });
      };
      const tmp2Result = num(derivedValue[34]);
      fn.__closure = {
        withTiming: num(derivedValue[35]).withTiming,
        drawerState: num,
        STANDARD_EASING: num(derivedValue[12]).STANDARD_EASING,
      };
      fn.__workletHash = 13687629306038;
      fn.__initData = __initData3;
      derivedValue = tmp2Result.useDerivedValue(fn);
      let obj2 = {
        withTiming: num(derivedValue[35]).withTiming,
        drawerState: num,
        STANDARD_EASING: num(derivedValue[12]).STANDARD_EASING,
      };
      const fn2 = function o() {
        const obj = { marginTop: null, marginBottom: null };
        value = derivedValue.get();
        const items = [NavigatorConstants.NAV_BAR_HEIGHT + c17, c17];
        obj.marginTop = ReanimatedRexport.interpolate(value, [0, 1], items);
        const items1 = [closure_1 + c17];
        value2 = derivedValue.get();
        items1[1] = getPIPBottomOffsetForPIPMode.PIP_AVOIDANCE_TAB_BAR_HEIGHT + c17;
        obj.marginBottom = ReanimatedRexport.interpolate(value2, [0, 1], items1);
        return obj;
      };
      const tmp2Result2 = num(derivedValue[34]);
      fn2.__closure = {
        interpolate: num(derivedValue[34]).interpolate,
        animatedDrawerState: derivedValue,
        NAV_BAR_HEIGHT: num(derivedValue[36]).NAV_BAR_HEIGHT,
        PADDING,
        chatInputContainerHeight: tmp4,
        PIP_AVOIDANCE_TAB_BAR_HEIGHT: num(derivedValue[37]).PIP_AVOIDANCE_TAB_BAR_HEIGHT,
      };
      fn2.__workletHash = 5941339218056;
      fn2.__initData = __initData4;
      const animatedStyle = tmp2Result2.useAnimatedStyle(fn2);
      const rect = require("useSafeAreaInsets")();
      const obj4 = { style: null, pointerEvents: "box-none", children: null };
      let items = [closure_6.absoluteFill, { paddingLeft: rect.left, paddingRight: rect.right }];
      obj4.style = items;
      const obj5 = {
        style: null,
        pointerEvents: "box-none",
        children: closure_15(closure_20, { channel: channel.channel }),
      };
      let items1 = [tmp.container, animatedStyle];
      obj5.style = items1;
      obj4.children = closure_15(require("ReanimatedRexport").View, obj5);
      return closure_15(closure_5, obj4);
    };
