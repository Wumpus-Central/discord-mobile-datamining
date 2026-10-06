// discord_app/modules/video_calls/native/components/PictureInPictureGlobal.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import CallConstants from "../../../calls/CallConstants.tsx";
import PrivateChannelCallUtils from "../../../../utils/native/PrivateChannelCallUtils.tsx";
import NavigatorConstants from "../../../../design/components/Navigator/native/NavigatorConstants.native.tsx";
import ChannelRTCParticipants from "../../../calls/ChannelRTCParticipants.tsx";
import transitionToActivityDefault from "../../../activities/utils/transitionToActivity.native.tsx";
import useChatBottomManagerUIStore from "../../../chat_input/native/useChatBottomManagerUIStore.tsx";
import PictureInPictureDefault from "PictureInPicture.tsx";
import getPIPBottomOffsetForPIPMode from "../../../panels/morphable/native/getPIPBottomOffsetForPIPMode.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import EmbeddedActivitiesStore from "../../../activities/EmbeddedActivitiesStore.tsx";
import ChannelRTCStore from "../../../calls/ChannelRTCStore.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import MediaEngineStore from "../../../../stores/MediaEngineStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import native_mod from "../../../../design/void/native.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let channel, importDefault;

let closure_15;
let closure_16;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let native;
let obj2;
let obj3;
({ View: hasOwnProperty, StyleSheet: metroRequire, TouchableOpacity: metroImportDefault } = react_native);
let closure_10 = useChatBottomManagerUIStore.useBestActiveChatInputContainerHeight;
const PictureInPicturePositions = Constants.PictureInPicturePositions;
const ParticipantTypes = CallConstants.ParticipantTypes;
({ jsx: closure_15, jsxs: closure_16 } = Fragment);
let c17 = 12;
let createStyles = createStyles_mod;
let obj = {
  container: { flex: 1, marginLeft: 12, marginRight: 12 },
  elevationShadow: native.generateBoxShadowStyle(native.EIGHT_DP_ELEVATION_SHADOW_PARAMS),
  pip: obj2,
  background: obj3,
};
createStyles = createStyles.createStyles;
native = native_mod;
obj2 = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj3 = { backgroundColor: nativeDefault.colors.BLACK, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
let closure_18 = createStyles(obj);
let memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (channel) => {
        let closure_1;
        let first;
        let height;
        let tmp10;
        let tmp12;
        let width;
        const tmp = channel;
        let tmp2 = M;
        let obj = channel(M[15]);
        const cResult = obj.c(64);
        channel = channel.channel;
        let tmp4 = closure_18();
        const tmp6 = require("usePipVideoOrStream")(channel.id);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [ChannelRTCStore, AuthenticationStore];
          cResult[0] = items;
          first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== channel.id) {
          const fn = function o() {
            let id;
            const streamParticipants = ChannelRTCStore.getStreamParticipants(channel.id);
            return streamParticipants.find((user) => user.user.id === id.getId());
          };
          cResult[1] = channel.id;
          cResult[2] = fn;
          tmp10 = fn;
        } else {
          tmp10 = cResult[2];
        }
        const tmpResult = tmp(tmp2[17]);
        const stateFromStores = tmpResult.useStateFromStores(first, tmp10);
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [ChannelRTCStore, EmbeddedActivitiesStore];
          cResult[3] = items1;
          tmp12 = items1;
        } else {
          tmp12 = cResult[3];
        }
        if (cResult[4] !== channel.id) {
          class R {
            constructor() {
              const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
              let participant = null;
              if (null != currentEmbeddedActivity) {
                const getParticipant = ChannelRTCStore.getParticipant;
                const id = channel.id;
                const obj3 = { applicationId: null, instanceId: null };
                ({ applicationId: obj2.applicationId, compositeInstanceId: obj2.instanceId } = currentEmbeddedActivity);
                const obj = ChannelRTCParticipants;
                participant = getParticipant(id, obj.getEmbeddedActivityParticipantId(obj3));
              }
              return participant;
            }
          }
          cResult[4] = channel.id;
          cResult[5] = R;
        } else {
          class R {
            constructor() {
              const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
              let participant = null;
              if (null != currentEmbeddedActivity) {
                const getParticipant = ChannelRTCStore.getParticipant;
                const id = channel.id;
                const obj3 = { applicationId: null, instanceId: null };
                ({ applicationId: obj2.applicationId, compositeInstanceId: obj2.instanceId } = currentEmbeddedActivity);
                const obj = ChannelRTCParticipants;
                participant = getParticipant(id, obj.getEmbeddedActivityParticipantId(obj3));
              }
              return participant;
            }
          }
        }
        const tmpResult6 = tmp(tmp2[17]);
        const stateFromStores1 = tmpResult6.useStateFromStores(tmp12, R);
        if (cResult[6] === stateFromStores1) {
          let tmp20;
          let tmp22;
          let tmp24;
          let tmp28;
          class R {
            constructor() {
              const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
              let participant = null;
              if (null != currentEmbeddedActivity) {
                const getParticipant = ChannelRTCStore.getParticipant;
                const id = channel.id;
                const obj3 = { applicationId: null, instanceId: null };
                ({ applicationId: obj2.applicationId, compositeInstanceId: obj2.instanceId } = currentEmbeddedActivity);
                const obj = ChannelRTCParticipants;
                participant = getParticipant(id, obj.getEmbeddedActivityParticipantId(obj3));
              }
              return participant;
            }
          }
          if (tmp17) {
            class R {
              constructor() {
                const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
                let participant = null;
                if (null != currentEmbeddedActivity) {
                  const getParticipant = ChannelRTCStore.getParticipant;
                  const id = channel.id;
                  const obj3 = { applicationId: null, instanceId: null };
                  ({ applicationId: obj2.applicationId, compositeInstanceId: obj2.instanceId } =
                    currentEmbeddedActivity);
                  const obj = ChannelRTCParticipants;
                  participant = getParticipant(id, obj.getEmbeddedActivityParticipantId(obj3));
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
                const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
                let participant = null;
                if (null != currentEmbeddedActivity) {
                  const getParticipant = ChannelRTCStore.getParticipant;
                  const id = channel.id;
                  const obj3 = { applicationId: null, instanceId: null };
                  ({ applicationId: obj2.applicationId, compositeInstanceId: obj2.instanceId } =
                    currentEmbeddedActivity);
                  const obj = ChannelRTCParticipants;
                  participant = getParticipant(id, obj.getEmbeddedActivityParticipantId(obj3));
                }
                return participant;
              }
            }
            const items2 = [MediaEngineStore];
            cResult[9] = items2;
            tmp20 = items2;
          } else {
            class R {
              constructor() {
                const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
                let participant = null;
                if (null != currentEmbeddedActivity) {
                  const getParticipant = ChannelRTCStore.getParticipant;
                  const id = channel.id;
                  const obj3 = { applicationId: null, instanceId: null };
                  ({ applicationId: obj2.applicationId, compositeInstanceId: obj2.instanceId } =
                    currentEmbeddedActivity);
                  const obj = ChannelRTCParticipants;
                  participant = getParticipant(id, obj.getEmbeddedActivityParticipantId(obj3));
                }
                return participant;
              }
            }
          }
          if (cResult[10] !== tmp18) {
            class C {
              constructor() {
                const isLocalVideoDisabledResult =
                  null != importDefault && MediaEngineStore.isLocalVideoDisabled(tmp.id);
                return isLocalVideoDisabledResult;
              }
            }
            const items3 = [tmp18];
            cResult[10] = tmp18;
            cResult[11] = C;
            cResult[12] = items3;
            tmp22 = items3;
          } else {
            class C {
              constructor() {
                const isLocalVideoDisabledResult =
                  null != importDefault && MediaEngineStore.isLocalVideoDisabled(tmp.id);
                return isLocalVideoDisabledResult;
              }
            }
            tmp22 = cResult[12];
          }
          const tmpResult7 = tmp(tmp2[17]);
          const stateFromStores2 = tmpResult7.useStateFromStores(tmp20, C, tmp22);
          const _Symbol2 = Symbol;
          if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
            class C {
              constructor() {
                const isLocalVideoDisabledResult =
                  null != importDefault && MediaEngineStore.isLocalVideoDisabled(tmp.id);
                return isLocalVideoDisabledResult;
              }
            }
            const items4 = [ChannelRTCStore, AuthenticationStore];
            cResult[13] = items4;
            tmp24 = items4;
          } else {
            class C {
              constructor() {
                const isLocalVideoDisabledResult =
                  null != importDefault && MediaEngineStore.isLocalVideoDisabled(tmp.id);
                return isLocalVideoDisabledResult;
              }
            }
          }
          if (cResult[14] !== channel.id) {
            class B {
              constructor() {
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
              }
            }
            cResult[14] = channel.id;
            cResult[15] = B;
          } else {
            class B {
              constructor() {
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
              }
            }
          }
          const tmpResult8 = tmp(tmp2[17]);
          const stateFromStores3 = tmpResult8.useStateFromStores(tmp24, B);
          if (cResult[16] !== channel) {
            class M {
              constructor() {
                const obj = PrivateChannelCallUtils;
                obj.openGuildVoiceModal(channel, "PIP");
              }
            }
            cResult[16] = channel;
            cResult[17] = M;
            tmp28 = M;
          } else {
            class M {
              constructor() {
                const obj = PrivateChannelCallUtils;
                obj.openGuildVoiceModal(channel, "PIP");
              }
            }
          }
          M = tmp28;
          if (cResult[18] !== channel) {
            class M {
              constructor() {
                const obj = PrivateChannelCallUtils;
                obj.openGuildVoiceModal(channel, "PIP");
              }
            }
            tmp30[0] = channel;
            cResult[18] = channel;
            cResult[19] = tmp30;
          } else {
            class M {
              constructor() {
                const obj = PrivateChannelCallUtils;
                obj.openGuildVoiceModal(channel, "PIP");
              }
            }
          }
          const tmpResult9 = tmp(tmp2[21]);
          const shouldForcePipOrientation = tmpResult9.useShouldForcePipOrientation(tmp30);
          tmp(tmp2[22]);
          if (cResult[20] === channel.id) {
            class M {
              constructor() {
                const obj = PrivateChannelCallUtils;
                obj.openGuildVoiceModal(channel, "PIP");
              }
            }
            ({ width, height } = require("usePipDimensions")(tmp34));
            require("usePipDimensions")(tmp34);
            if (tmp33) {
              class M {
                constructor() {
                  const obj = PrivateChannelCallUtils;
                  obj.openGuildVoiceModal(channel, "PIP");
                }
              }
            } else {
              class M {
                constructor() {
                  const obj = PrivateChannelCallUtils;
                  obj.openGuildVoiceModal(channel, "PIP");
                }
              }
            }
            if (cResult[23] === height) {
              class M {
                constructor() {
                  const obj = PrivateChannelCallUtils;
                  obj.openGuildVoiceModal(channel, "PIP");
                }
              }
            }
            size = { height, width, flexDirection: tmp36 };
            cResult[23] = height;
            cResult[24] = width;
            cResult[25] = tmp36;
            cResult[26] = size;
          }
          const obj2 = { channelId: channel.id, forcedOrientation: shouldForcePipOrientation };
          cResult[20] = channel.id;
          cResult[21] = shouldForcePipOrientation;
          cResult[22] = obj2;
        }
        let tmp19 = stateFromStores1;
        if (null != tmp6) {
          class M {
            constructor() {
              const obj = PrivateChannelCallUtils;
              obj.openGuildVoiceModal(channel, "PIP");
            }
          }
          tmp19 = stateFromStores1;
          if (tmp6.user.id !== AuthenticationStore.getId()) {
            class M {
              constructor() {
                const obj = PrivateChannelCallUtils;
                obj.openGuildVoiceModal(channel, "PIP");
              }
            }
          }
        }
        cResult[6] = stateFromStores1;
        cResult[7] = tmp6;
        cResult[8] = tmp19;
      }
    : (channel) => {
        let callback;
        let items7;
        let items8;
        let obj11;
        channel = channel.channel;
        let stateFromStores1;
        let onDoubleTap;
        let shouldForcePipOrientation;
        let isScreenLandscape;
        let width;
        let height;
        const tmp = closure_18();
        let tmp2 = stateFromStores1;
        let tmp4 = stateFromStores1(onDoubleTap[16])(channel.id);
        let obj = channel(onDoubleTap[17]);
        const items = [ChannelRTCStore, AuthenticationStore];
        const stateFromStores = obj.useStateFromStores(items, () => {
          let id;
          const streamParticipants = ChannelRTCStore.getStreamParticipants(channel.id);
          return streamParticipants.find((user) => user.user.id === id.getId());
        });
        let obj3 = channel(onDoubleTap[17]);
        const items1 = [ChannelRTCStore, EmbeddedActivitiesStore];
        stateFromStores1 = obj3.useStateFromStores(items1, () => {
          const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
          let participant = null;
          if (null != currentEmbeddedActivity) {
            const getParticipant = ChannelRTCStore.getParticipant;
            const id = channel.id;
            const obj3 = { applicationId: null, instanceId: null };
            ({ applicationId: obj2.applicationId, compositeInstanceId: obj2.instanceId } = currentEmbeddedActivity);
            const obj = ChannelRTCParticipants;
            participant = getParticipant(id, obj.getEmbeddedActivityParticipantId(obj3));
          }
          return participant;
        });
        let tmp10 = stateFromStores1;
        const tmp9 = stateFromStores1(onDoubleTap[19])(channel.id);
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
        const items2 = [MediaEngineStore];
        const items3 = [tmp10];
        const tmp5Result = channel(onDoubleTap[17]);
        const stateFromStores2 = tmp5Result.useStateFromStores(
          items2,
          () => {
            const isLocalVideoDisabledResult =
              null != stateFromStores1 && MediaEngineStore.isLocalVideoDisabled(tmp.id);
            return isLocalVideoDisabledResult;
          },
          items3,
        );
        const items4 = [ChannelRTCStore, AuthenticationStore];
        const tmp5Result4 = channel(onDoubleTap[17]);
        const stateFromStores3 = tmp5Result4.useStateFromStores(items4, () => {
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
          const obj = PrivateChannelCallUtils;
          obj.openGuildVoiceModal(channel, "PIP");
        }, items5);
        const tmp5Result5 = channel(onDoubleTap[21]);
        shouldForcePipOrientation = tmp5Result5.useShouldForcePipOrientation({ channel });
        const tmp5Result6 = channel(onDoubleTap[22]);
        isScreenLandscape = tmp5Result6.useIsScreenLandscape();
        const obj4 = { channelId: channel.id, forcedOrientation: shouldForcePipOrientation };
        size = tmp2(tmp3[23])(obj4);
        width = size.width;
        height = size.height;
        const items6 = [shouldForcePipOrientation, isScreenLandscape, height, width];
        let type;
        const memo = isScreenLandscape.useMemo(() => {
          let str;
          size = { height, width, flexDirection: str };
          if (isScreenLandscape) {
            str = "row";
          } else {
            str = "column";
          }
          return size;
        }, items6);
        if (tmp10 != null) {
          type = tmp10.type;
        }
        const tmp19 =
          type === ParticipantTypes.ACTIVITY && tmp2(onDoubleTap[25])(tmp10.applicationId) && null == stateFromStores;
        let type1;
        if (tmp10 != null) {
          type1 = tmp10.type;
        }
        if (ParticipantTypes.HIDDEN_STREAM !== type1) {
          let tmp21;
          if (ParticipantTypes.STREAM !== type1) {
            if (ParticipantTypes.USER === type1) {
              let tmp22 = null;
              if (!stateFromStores2) {
                const obj5 = {
                  participant: tmp10,
                  avatarSize: channel(onDoubleTap[12]).AvatarSizes.PROFILE,
                  resizeMode: channel(onDoubleTap[27]).ResizeMode.COVER,
                  onSingleTap: onDoubleTap,
                  onDoubleTap,
                };
                const tmp2Result = tmp2(onDoubleTap[28]);
                tmp22 = closure_15(tmp2Result, obj5);
              }
              tmp21 = tmp22;
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
                      const guild_id = channel.guild_id;
                      const tmp4 = transitionToActivityDefault;
                      if (currentEmbeddedActivity != null) {
                        _location = currentEmbeddedActivity.location;
                      }
                      tmp4(guild_id, _location);
                    }
                    callback();
                  },
                };
                tmp21 = closure_15(tmp2(tmp3[30]), obj6);
              }
            }
          }
          const obj8 = { style: items7, children: items8 };
          items7 = [, ,];
          ({ pip: arr8[0], elevationShadow: arr8[1] } = tmp);
          items7[2] = memo;
          let tmp26Result = null != stateFromStores3 && !tmp19;
          const obj7 = { style: tmp.background, children: closure_15(closure_7, obj11) };
          if (tmp26Result) {
            const obj9 = {
              participant: stateFromStores3,
              avatarSize: channel(onDoubleTap[12]).AvatarSizes.PROFILE,
              resizeMode: channel(onDoubleTap[27]).ResizeMode.COVER,
              onSingleTap: onDoubleTap,
            };
            const tmp2Result3 = tmp2(onDoubleTap[28]);
            tmp26Result = closure_15(tmp2Result3, obj9);
          }
          items8 = [tmp26Result, ,];
          let tmp26Result2 = null != stateFromStores && !tmp19;
          if (tmp26Result2) {
            const obj10 = { onSingleTap: onDoubleTap };
            tmp26Result2 = closure_15(tmp2(tmp3[31]), obj10);
          }
          items8[1] = tmp26Result2;
          const tmp33 = (null == stateFromStores3 || null == stateFromStores || null == stateFromStores1) && tmp21;
          items8[2] = tmp33;
          obj11 = { activeOpacity: 0.7, children: closure_16(width, obj8) };
          return closure_15(width, obj7);
        }
        const obj12 = {
          resizeMode: channel(onDoubleTap[27]).ResizeMode.CONTAIN,
          participant: tmp10,
          onSingleTap: onDoubleTap,
          onDoubleTap,
        };
        const tmp2Result4 = tmp2(onDoubleTap[26]);
        tmp21 = closure_15(tmp2Result4, obj12);
      },
);
const memo2 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = memo2(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (channel) => {
        let first;
        let tmp5;
        let tmp6;
        let tmp7;
        const obj = react2;
        const cResult = obj.c(7);
        channel = channel.channel;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function l() {
            return constants.TOP_RIGHT;
          };
          cResult[0] = fn;
          first = fn;
        } else {
          first = cResult[0];
        }
        [tmp5, tmp6] = react.useState(first);
        _slicedToArray(react.useState(first), 2);
        if (cResult[1] !== channel) {
          const obj2 = { channel };
          const tmp10 = closure_15(closure_19, obj2);
          cResult[1] = channel;
          cResult[2] = tmp10;
          tmp7 = tmp10;
        } else {
          tmp7 = cResult[2];
        }
        if (cResult[3] === channel) {
          if (cResult[4] === tmp5) {
            let tmp11;
            if (cResult[5] === tmp7) {
              tmp11 = cResult[6];
            }
            return tmp11;
          }
        }
        const tmp12 = closure_15(PictureInPictureDefault, {
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
      }
    : (channel) => {
        let tmp2;
        let tmp3;
        const f128673 = () => constants.TOP_RIGHT;
        channel = channel.channel;
        [tmp2, tmp3] = react.useState(f128673);
        const obj = { channel, preferredPosition: tmp2, onMove: tmp3, children: closure_15(closure_19, { channel }) };
        _slicedToArray(react.useState(f128673), 2);
        const tmp4 = PictureInPictureDefault;
        return closure_15(tmp4, obj);
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
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let closure_1;
      let derivedValue;
      let left;
      let num;
      let right;
      const tmp = num;
      let obj = num(derivedValue[15]);
      const cResult = obj.c(14);
      channel = channel.channel;
      const tmp4 = closure_18();
      let obj2 = num(derivedValue[33]);
      num = 1;
      if (obj2.useIsChannelFocused()) {
        num = 0;
      }
      const tmp5 = closure_10();
      importDefault = tmp5;
      const fn = function n() {
        const obj = timing;
        const obj2 = { easing: native.STANDARD_EASING, duration: 250 };
        return obj.withTiming(num, obj2);
      };
      const tmpResult = tmp(derivedValue[34]);
      fn.__closure = {
        withTiming: tmp(derivedValue[35]).withTiming,
        drawerState: num,
        STANDARD_EASING: tmp(derivedValue[12]).STANDARD_EASING,
      };
      fn.__workletHash = 5168896066356;
      fn.__initData = __initData;
      ({
        withTiming: tmp(derivedValue[35]).withTiming,
        drawerState: num,
        STANDARD_EASING: tmp(derivedValue[12]).STANDARD_EASING,
      });
      derivedValue = tmpResult.useDerivedValue(fn);
      const fn2 = function o() {
        let interpolate;
        let interpolate2;
        let items;
        let items1;
        let value;
        let value2;
        const obj = {
          marginTop: interpolate(value, [0, 1], items),
          marginBottom: interpolate2(value2, [0, 1], items1),
        };
        interpolate = ReanimatedRexport.interpolate;
        ReanimatedRexport;
        value = derivedValue.get();
        items = [NavigatorConstants.NAV_BAR_HEIGHT + c17, c17];
        interpolate2 = ReanimatedRexport.interpolate;
        items1 = [closure_1 + c17];
        ReanimatedRexport;
        value2 = derivedValue.get();
        items1[1] = getPIPBottomOffsetForPIPMode.PIP_AVOIDANCE_TAB_BAR_HEIGHT + c17;
        return obj;
      };
      const tmpResult2 = tmp(derivedValue[34]);
      fn2.__closure = {
        interpolate: tmp(derivedValue[34]).interpolate,
        animatedDrawerState: derivedValue,
        NAV_BAR_HEIGHT: tmp(derivedValue[36]).NAV_BAR_HEIGHT,
        PADDING,
        chatInputContainerHeight: tmp5,
        PIP_AVOIDANCE_TAB_BAR_HEIGHT: tmp(derivedValue[37]).PIP_AVOIDANCE_TAB_BAR_HEIGHT,
      };
      fn2.__workletHash = 8833756900366;
      fn2.__initData = __initData2;
      ({
        interpolate: tmp(derivedValue[34]).interpolate,
        animatedDrawerState: derivedValue,
        NAV_BAR_HEIGHT: tmp(derivedValue[36]).NAV_BAR_HEIGHT,
        PADDING,
        chatInputContainerHeight: tmp5,
        PIP_AVOIDANCE_TAB_BAR_HEIGHT: tmp(derivedValue[37]).PIP_AVOIDANCE_TAB_BAR_HEIGHT,
      });
      const animatedStyle = tmpResult2.useAnimatedStyle(fn2);
      ({ left, right } = require("useSafeAreaInsets")());
      require("useSafeAreaInsets")();
      const tmp8 = importDefault;
      if (cResult[0] === left) {
        let tmp10;
        if (cResult[1] === right) {
          tmp10 = cResult[2];
        }
        if (cResult[3] === animatedStyle) {
          let tmp11;
          let tmp12;
          if (cResult[4] === tmp4.container) {
            tmp11 = cResult[5];
          }
          if (cResult[6] !== channel) {
            const obj5 = { channel };
            const tmp15 = closure_15(closure_20, obj5);
            cResult[6] = channel;
            cResult[7] = tmp15;
            tmp12 = tmp15;
          } else {
            tmp12 = cResult[7];
          }
          if (cResult[8] === tmp11) {
            let tmp16;
            if (cResult[9] === tmp12) {
              tmp16 = cResult[10];
            }
            if (cResult[11] === tmp10) {
              let tmp19;
              if (cResult[12] === tmp16) {
                tmp19 = cResult[13];
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
          const tmp18 = closure_15(tmp8(derivedValue[34]).View, obj7);
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
    }
  : (channel) => {
      let View;
      let closure_1;
      let items;
      let items1;
      let obj5;
      let num;
      importDefault = undefined;
      let derivedValue;
      channel = channel.channel;
      const tmp3 = derivedValue;
      const tmp = closure_18();
      let obj = num(derivedValue[33]);
      num = 1;
      if (obj.useIsChannelFocused()) {
        num = 0;
      }
      const tmp4 = closure_10();
      importDefault = tmp4;
      const fn = function n() {
        const obj = timing;
        const obj2 = { easing: native.STANDARD_EASING, duration: 250 };
        return obj.withTiming(num, obj2);
      };
      const tmp2Result = num(tmp3[34]);
      let obj2 = {
        withTiming: tmp2(tmp3[35]).withTiming,
        drawerState: num,
        STANDARD_EASING: tmp2(tmp3[12]).STANDARD_EASING,
      };
      fn.__closure = obj2;
      fn.__workletHash = 13687629306038;
      fn.__initData = __initData3;
      derivedValue = tmp2Result.useDerivedValue(fn);
      const fn2 = function o() {
        let interpolate;
        let interpolate2;
        let items;
        let items1;
        let value;
        let value2;
        const obj = {
          marginTop: interpolate(value, [0, 1], items),
          marginBottom: interpolate2(value2, [0, 1], items1),
        };
        interpolate = ReanimatedRexport.interpolate;
        ReanimatedRexport;
        value = derivedValue.get();
        items = [NavigatorConstants.NAV_BAR_HEIGHT + c17, c17];
        interpolate2 = ReanimatedRexport.interpolate;
        items1 = [closure_1 + c17];
        ReanimatedRexport;
        value2 = derivedValue.get();
        items1[1] = getPIPBottomOffsetForPIPMode.PIP_AVOIDANCE_TAB_BAR_HEIGHT + c17;
        return obj;
      };
      const tmp2Result2 = num(tmp3[34]);
      fn2.__closure = {
        interpolate: num(tmp3[34]).interpolate,
        animatedDrawerState: derivedValue,
        NAV_BAR_HEIGHT: num(tmp3[36]).NAV_BAR_HEIGHT,
        PADDING,
        chatInputContainerHeight: tmp4,
        PIP_AVOIDANCE_TAB_BAR_HEIGHT: num(tmp3[37]).PIP_AVOIDANCE_TAB_BAR_HEIGHT,
      };
      fn2.__workletHash = 5941339218056;
      fn2.__initData = __initData4;
      ({
        interpolate: num(tmp3[34]).interpolate,
        animatedDrawerState: derivedValue,
        NAV_BAR_HEIGHT: num(tmp3[36]).NAV_BAR_HEIGHT,
        PADDING,
        chatInputContainerHeight: tmp4,
        PIP_AVOIDANCE_TAB_BAR_HEIGHT: num(tmp3[37]).PIP_AVOIDANCE_TAB_BAR_HEIGHT,
      });
      const animatedStyle = tmp2Result2.useAnimatedStyle(fn2);
      const rect = require("useSafeAreaInsets")();
      const obj4 = { style: items, pointerEvents: "box-none", children: closure_15(View, obj5) };
      items = [closure_6.absoluteFill, { paddingLeft: rect.left, paddingRight: rect.right }];
      obj5 = { style: items1, pointerEvents: "box-none", children: closure_15(closure_20, { channel }) };
      items1 = [tmp.container, animatedStyle];
      View = require("ReanimatedRexport").View;
      return closure_15(closure_5, obj4);
    };
let size = size_mod;
const result = size.fileFinishedImporting("modules/video_calls/native/components/PictureInPictureGlobal.tsx");

export default tmp6;
