// discord_app/modules/external_pip/ExternalPipViewVideo.android.tsx
import react2 from "../../../_runtime/00576_react.js";
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../intl/index.native.tsx";
import CircleInformationIcon from "../../design/components/Icon/native/redesign/generated/CircleInformationIcon.tsx";
import Text_Text from "../../design/components/Text/native/Text.tsx";
import CallConstants from "../calls/CallConstants.tsx";
import StreamEnded from "../../design/components/Illustration/native/redesign/generated/StreamEnded.tsx";
import ExternalPipDefault from "ExternalPip.android.tsx";
import VideoActionCreators from "../media/VideoActionCreators.tsx";
import useExternalPipParticipantDefault from "useExternalPipParticipant.android.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../_runtime/00019_react.js";
import react_native from "../../../_runtime/00017_react-native.js";
import ChannelStore from "../../stores/ChannelStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import Fragment from "../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../_runtime/metro/00002__.js";

let dependencyMap, flag, importDefault, onLayout, streamId, updateVideoSizeResult, wasStream;

let StyleSheet;
let closure_12;
let hasOwnProperty;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj9;
let unpackModuleId;
({ ActivityIndicator: hasOwnProperty, StyleSheet, View: metroRequire, PixelRatio: metroImportDefault } = react_native);
const ParticipantTypes = CallConstants.ParticipantTypes;
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: obj2,
  video: obj3,
  videoUnavailableWrap: obj4,
  videoUnavailableSpinner: obj5,
  unavailable: {
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
    borderRadius: nativeDefault.radii.sm,
    padding: nativeDefault.space.PX_8,
    margin: nativeDefault.space.PX_8,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
  },
  unavailableText: { marginLeft: nativeDefault.space.PX_4, textAlign: "center" },
  unavaiableImage: { marginBottom: nativeDefault.space.PX_8, resizeMode: "contain", aspectRatio: 2.5, width: "80%" },
  user: obj9,
};
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4 = {
  margin: nativeDefault.space.PX_16,
  borderRadius: nativeDefault.radii.sm,
  justifyContent: "center",
  alignContent: "center",
  flexDirection: "row",
  alignItems: "center",
  flexWrap: "wrap",
  flex: 1,
};
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj5 = { marginTop: nativeDefault.space.PX_16 };
({
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.sm,
  padding: nativeDefault.space.PX_8,
  margin: nativeDefault.space.PX_8,
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
  flexDirection: "row",
  flexWrap: "wrap",
  flex: 1,
});
({ marginLeft: nativeDefault.space.PX_4, textAlign: "center" });
obj9 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderRadius: nativeDefault.radii.sm,
  margin: nativeDefault.space.PX_8,
  alignItems: "center",
  justifyContent: "center",
};
({ marginBottom: nativeDefault.space.PX_8, resizeMode: "contain", aspectRatio: 2.5, width: "80%" });
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
let closure_14 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let closure_129_4;
      let closure_3;
      let first;
      let tmp5;
      let tmp6;
      let closure_0 = arg0;
      const obj = react2;
      const cResult = obj.c(10);
      let num = 300;
      if (undefined !== arg1) {
        num = arg1;
      }
      [first, closure_3] = react.useState(undefined);
      [tmp5, closure_129_4] = react.useState(false);
      _slicedToArray(react.useState(false), 2);
      if (cResult[0] !== arg0) {
        const fn = function s() {
          return closure_3(closure_0);
        };
        cResult[0] = arg0;
        cResult[1] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] === first) {
        let tmp7;
        let tmp8;
        if (cResult[3] === num) {
          tmp7 = cResult[4];
          tmp8 = cResult[5];
        }
        const effect = react.useEffect(tmp7, tmp8);
        if (cResult[6] === tmp5) {
          if (cResult[7] === first) {
            let tmp10;
            if (cResult[8] === tmp6) {
              tmp10 = cResult[9];
            }
            return tmp10;
          }
        }
        const obj3 = { streamReady: first, streamReadLongTime: tmp5, streamReadyCallback: tmp6 };
        cResult[6] = tmp5;
        cResult[7] = first;
        cResult[8] = tmp6;
        cResult[9] = obj3;
        tmp10 = obj3;
      }
      class R {
        constructor() {
          if (null == closure_2) {
            tmp3 = globalThis;
            _setTimeout = setTimeout;
            tmp4 = closure_1;
            closure_0 = setTimeout(() => {
              closure_1_4(true);
            }, closure_1);
            return () => {
              clearTimeout(closure_0);
            };
          } else {
            tmp = closure_4;
            flag = false;
            tmp2 = closure_4(false);
            return;
          }
        }
      }
      const items = [first, num];
      cResult[2] = first;
      cResult[3] = num;
      cResult[4] = R;
      cResult[5] = items;
      tmp8 = items;
      tmp7 = R;
    }
  : (arg0) => {
      let closure_3;
      let closure_4;
      let streamReadLongTime;
      let streamReady;
      let closure_0 = arg0;
      let num = arg1;
      if (arg1 === undefined) {
        num = 300;
      }
      streamReady = undefined;
      closure_3 = undefined;
      closure_4 = undefined;
      [streamReady, closure_3] = react.useState(undefined);
      [streamReadLongTime, closure_4] = react.useState(false);
      const items = [arg0];
      const items1 = [streamReady, num];
      const streamReadyCallback = react.useCallback(() => closure_3(closure_0), items);
      const effect = react.useEffect(() => {
        if (null == streamReady) {
          const _setTimeout = setTimeout;
          const timeout = setTimeout(() => {
            closure_1_4(true);
          }, num);
          return () => {
            clearTimeout(closure_0);
          };
        } else {
          closure_4(false);
        }
      }, items1);
      return { streamReady, streamReadLongTime, streamReadyCallback };
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? (wasStream) => {
      let items;
      let tmp6Result;
      const obj = react2;
      const cResult = obj.c(12);
      wasStream = wasStream.wasStream;
      const tmp4 = closure_14();
      if (cResult[0] === tmp4.unavaiableImage) {
        let tmp5;
        let tmp8;
        if (cResult[1] === wasStream) {
          tmp5 = cResult[2];
        }
        if (cResult[3] !== wasStream) {
          let result;
          const intl = intl2.intl;
          if (wasStream) {
            result = intl.formatToMarkdownString(intl2.t["1Ww0Hi"], {});
          } else {
            result = intl.string(intl2.t.Nzo5nz);
          }
          cResult[3] = wasStream;
          cResult[4] = result;
          tmp8 = result;
        } else {
          tmp8 = cResult[4];
        }
        if (cResult[5] === tmp4.unavailableText) {
          let tmp10;
          if (cResult[6] === tmp8) {
            tmp10 = cResult[7];
          }
          if (cResult[8] === tmp4.unavailable) {
            if (cResult[9] === tmp5) {
              let tmp13;
              if (cResult[10] === tmp10) {
                tmp13 = cResult[11];
              }
              return tmp13;
            }
          }
          const obj2 = { style: tmp4.unavailable, children: items };
          items = [tmp5, tmp10];
          const tmp16 = closure_12(metroRequire, obj2);
          cResult[8] = tmp4.unavailable;
          cResult[9] = tmp5;
          cResult[10] = tmp10;
          cResult[11] = tmp16;
          tmp13 = tmp16;
        }
        const obj3 = { variant: "text-md/semibold", style: tmp4.unavailableText, lineClamp: 1, children: tmp8 };
        const tmp12 = unpackModuleId(Text_Text.Text, obj3);
        cResult[5] = tmp4.unavailableText;
        cResult[6] = tmp8;
        cResult[7] = tmp12;
        tmp10 = tmp12;
      }
      if (wasStream) {
        const obj4 = { style: tmp4.unavaiableImage };
        tmp6Result = unpackModuleId(StreamEnded.StreamEnded, obj4);
      } else {
        tmp6Result = unpackModuleId(CircleInformationIcon.CircleInformationIcon, {});
      }
      cResult[0] = tmp4.unavaiableImage;
      cResult[1] = wasStream;
      cResult[2] = tmp6Result;
      tmp5 = tmp6Result;
    }
  : (wasStream) => {
      let items;
      let result;
      let tmp10;
      let tmp4Result;
      let tmp8;
      wasStream = wasStream.wasStream;
      const tmp = closure_14();
      const obj = { style: tmp.unavailable, children: items };
      if (wasStream) {
        const obj2 = { style: tmp.unavaiableImage };
        tmp4Result = unpackModuleId(StreamEnded.StreamEnded, obj2);
        tmp8 = unpackModuleId;
        tmp10 = require;
      } else {
        tmp4Result = unpackModuleId(CircleInformationIcon.CircleInformationIcon, {});
        tmp8 = unpackModuleId;
        tmp10 = require;
      }
      items = [tmp4Result];
      const obj3 = { variant: "text-md/semibold", style: tmp.unavailableText, lineClamp: 1, children: result };
      const Text = tmp10(4892).Text;
      const intl = tmp10(1126).intl;
      if (wasStream) {
        result = intl.formatToMarkdownString(tmp10(1126).t["1Ww0Hi"], {});
      } else {
        result = intl.string(tmp10(1126).t.Nzo5nz);
      }
      items[1] = tmp8(Text, obj3);
      return closure_12(metroRequire, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? (userId) => {
      let first;
      let obj3;
      let tmp7;
      let tmp9;
      const obj = userId(576);
      const cResult = obj.c(17);
      userId = userId.userId;
      const channelId = userId.channelId;
      const speaking = userId.speaking;
      closure_14();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== userId) {
        const fn = function l() {
          return UserStore.getUser(userId);
        };
        cResult[1] = userId;
        cResult[2] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const tmpResult = userId(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [ChannelStore];
        cResult[3] = items1;
        tmp9 = items1;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] !== channelId) {
        class I {
          constructor() {
            const channel = ChannelStore.getChannel(channelId);
            let guild_id;
            if (channel != null) {
              guild_id = channel.guild_id;
            }
            return guild_id;
          }
        }
        cResult[4] = channelId;
        cResult[5] = I;
      } else {
        class I {
          constructor() {
            const channel = ChannelStore.getChannel(channelId);
            let guild_id;
            if (channel != null) {
              guild_id = channel.guild_id;
            }
            return guild_id;
          }
        }
      }
      const tmpResult3 = userId(504);
      const stateFromStores1 = tmpResult3.useStateFromStores(tmp9, I);
      if (cResult[6] === stateFromStores1) {
        class I {
          constructor() {
            const channel = ChannelStore.getChannel(channelId);
            let guild_id;
            if (channel != null) {
              guild_id = channel.guild_id;
            }
            return guild_id;
          }
        }
        const tmpResult4 = userId(9157);
        const avatarSpeakingColor = tmpResult4.useAvatarSpeakingColor(obj3);
        if (cResult[9] === stateFromStores1) {
          class I {
            constructor() {
              const channel = ChannelStore.getChannel(channelId);
              let guild_id;
              if (channel != null) {
                guild_id = channel.guild_id;
              }
              return guild_id;
            }
          }
        }
        let tmp15 = null;
        if (null != stateFromStores) {
          class I {
            constructor() {
              const channel = ChannelStore.getChannel(channelId);
              let guild_id;
              if (channel != null) {
                guild_id = channel.guild_id;
              }
              return guild_id;
            }
          }
          const obj2 = {
            user: stateFromStores,
            avatarDecoration: stateFromStores.avatarDecoration,
            guildId: stateFromStores1,
            size: userId(1188).AvatarSizes.XXLARGE,
            animate: speaking,
            speaking,
            speakingColor: avatarSpeakingColor,
          };
          const Avatar = tmp(1188).Avatar;
          tmp15 = closure_11(Avatar, obj2);
        }
        cResult[9] = stateFromStores1;
        cResult[10] = speaking;
        cResult[11] = avatarSpeakingColor;
        cResult[12] = stateFromStores;
        cResult[13] = tmp15;
      }
      obj3 = { userId, guildId: stateFromStores1 };
      cResult[6] = stateFromStores1;
      cResult[7] = userId;
      cResult[8] = obj3;
    }
  : (userId) => {
      let speaking;
      let tmp8Result;
      userId = userId.userId;
      ({ channelId: importDefault, speaking } = userId);
      const items = [UserStore];
      const tmp = closure_14();
      const obj = userId(504);
      const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(userId));
      const items1 = [ChannelStore];
      const obj2 = userId(504);
      const stateFromStores1 = obj2.useStateFromStores(items1, () => {
        const channel = ChannelStore.getChannel(importDefault);
        let guild_id;
        if (channel != null) {
          guild_id = channel.guild_id;
        }
        return guild_id;
      });
      userId(9157);
      const obj3 = { style: tmp.user, children: tmp8Result };
      tmp8Result = null;
      if (null != stateFromStores) {
        const obj4 = {
          user: stateFromStores,
          avatarDecoration: stateFromStores.avatarDecoration,
          guildId: stateFromStores1,
          size: userId(1188).AvatarSizes.XXLARGE,
          animate: speaking,
          speaking,
          speakingColor: tmp7,
        };
        const Avatar = tmp2(1188).Avatar;
        tmp8Result = closure_11(Avatar, obj4);
      }
      return closure_11(closure_6, obj3);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? (streamId) => {
      let closure_1;
      let first;
      let streamReadLongTime;
      let streamReady;
      let streamReadyCallback;
      let tmp8;
      const tmp = streamId;
      let obj = streamId(576);
      const cResult = obj.c(23);
      streamId = streamId.streamId;
      const userId = streamId.userId;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { location: "ExternalPipViewVideoStream" };
        cResult[0] = obj2;
        first = obj2;
      } else {
        first = cResult[0];
      }
      const tmpResult = tmp(9141);
      const surfaceDirectRendererExperiment = tmpResult.useSurfaceDirectRendererExperiment(userId, first);
      ({ streamReady, streamReadLongTime, streamReadyCallback } = closure_15(streamId));
      closure_15(streamId);
      const tmp7 = closure_14();
      let num2 = 1;
      if (null == streamReady) {
        num2 = 0;
      }
      if (cResult[1] !== num2) {
        const obj3 = { opacity: num2 };
        cResult[1] = num2;
        cResult[2] = obj3;
        tmp8 = obj3;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] === tmp7.video) {
        let tmp9;
        if (cResult[4] === tmp8) {
          tmp9 = cResult[5];
        }
        const tmpResult2 = tmp(4586);
        const token = tmpResult2.useToken(nativeDefault.colors.TEXT_FEEDBACK_INFO);
        const tmp10 = importDefault;
        importDefault = closure_7.get();
        if (cResult[6] !== streamId) {
          class P {
            constructor(arg0) {
              if (null != streamId) {
                tmp2 = streamId;
                tmp3 = closure_0;
                tmp4 = closure_2;
                ({ width, height } = streamId.nativeEvent.layout);
                obj = closure_0(closure_2[20]);
                size = { width: null, height: null };
                tmp5 = closure_1;
                size.width = width * closure_1;
                size.height = height * closure_1;
                num = 1;
                updateVideoSizeResult = obj.updateVideoSize(tmp, size, 1);
              }
              return;
            }
          }
          cResult[6] = streamId;
          cResult[7] = P;
        } else {
          class P {
            constructor(arg0) {
              if (null != streamId) {
                tmp2 = streamId;
                tmp3 = closure_0;
                tmp4 = closure_2;
                ({ width, height } = streamId.nativeEvent.layout);
                obj = closure_0(closure_2[20]);
                size = { width: null, height: null };
                tmp5 = closure_1;
                size.width = width * closure_1;
                size.height = height * closure_1;
                num = 1;
                updateVideoSizeResult = obj.updateVideoSize(tmp, size, 1);
              }
              return;
            }
          }
        }
        if (cResult[8] === P) {
          class P {
            constructor(arg0) {
              if (null != streamId) {
                tmp2 = streamId;
                tmp3 = closure_0;
                tmp4 = closure_2;
                ({ width, height } = streamId.nativeEvent.layout);
                obj = closure_0(closure_2[20]);
                size = { width: null, height: null };
                tmp5 = closure_1;
                size.width = width * closure_1;
                size.height = height * closure_1;
                num = 1;
                updateVideoSizeResult = obj.updateVideoSize(tmp, size, 1);
              }
              return;
            }
          }
        }
        const obj4 = {
          useSurfaceDirectRenderer: surfaceDirectRendererExperiment,
          style: tmp9,
          streamId,
          onReady: streamReadyCallback,
          onLayout: P,
        };
        cResult[8] = P;
        cResult[9] = streamId;
        cResult[10] = streamReadyCallback;
        cResult[11] = tmp9;
        cResult[12] = surfaceDirectRendererExperiment;
        cResult[13] = closure_11(tmp10(9149), obj4);
        const tmp16 = closure_11(tmp10(9149), obj4);
      }
      const items = [tmp7.video, tmp8];
      cResult[3] = tmp7.video;
      cResult[4] = tmp8;
      cResult[5] = items;
      tmp9 = items;
    }
  : (streamId) => {
      let obj4;
      let streamReadLongTime;
      let streamReadyCallback;
      let video;
      streamId = streamId.streamId;
      const userId = streamId.userId;
      let obj = streamId(9141);
      const surfaceDirectRendererExperiment = obj.useSurfaceDirectRendererExperiment(userId, {
        location: "ExternalPipViewVideoStream",
      });
      const tmp2 = closure_15(streamId);
      const streamReady = tmp2.streamReady;
      ({ streamReadLongTime, streamReadyCallback } = tmp2);
      const tmp3 = closure_14();
      dependencyMap = tmp3;
      let items = [tmp3, streamReady];
      const memo = react.useMemo(() => {
        const items = [video.video];
        let num = 1;
        if (null == streamReady) {
          num = 0;
        }
        items[1] = { opacity: num };
        return items;
      }, items);
      const obj2 = streamId(4586);
      const token = obj2.useToken(streamReady(587).colors.TEXT_FEEDBACK_INFO);
      const value = closure_7.get();
      let c3 = value;
      const items1 = [streamId, value];
      const callback = react.useCallback((nativeEvent) => {
        let height;
        let width;
        if (null != streamId) {
          ({ width, height } = nativeEvent.nativeEvent.layout);
          size = { width: width * c3, height: height * c3 };
          const obj = VideoActionCreators;
          obj.updateVideoSize(tmp, size, 1);
        }
      }, items1);
      const children = [
        closure_11(streamReady(9149), {
          useSurfaceDirectRenderer: surfaceDirectRendererExperiment,
          style: memo,
          streamId,
          onReady: streamReadyCallback,
          onLayout: callback,
        }),
      ];
      let tmp10Result = null;
      if (null == streamReady) {
        tmp10Result = null;
        if (streamReadLongTime) {
          const obj3 = { style: tmp3.videoUnavailableWrap, children: closure_11(closure_5, obj4) };
          obj4 = { style: tmp3.videoUnavailableSpinner, size: "large", color: token };
          tmp10Result = closure_11(closure_6, obj3);
        }
      }
      children[1] = tmp10Result;
      return closure_12(closure_13, { children });
    };
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (onLayout) => {
        let channelId;
        let first;
        let focusedParticipantType;
        let selectedParticipantSpeaking;
        let selectedParticipantStreamId;
        let selectedParticipantUserId;
        let obj = react2;
        const cResult = obj.c(15);
        onLayout = onLayout.onLayout;
        const tmp2 = closure_14();
        ({
          channelId,
          selectedParticipantStreamId,
          selectedParticipantUserId,
          selectedParticipantSpeaking,
          focusedParticipantType,
        } = useExternalPipParticipantDefault());
        useExternalPipParticipantDefault();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function l() {
            const obj = ExternalPipDefault;
            obj.refreshPipUi();
          };
          cResult[0] = fn;
          first = fn;
        } else {
          first = cResult[0];
        }
        if (cResult[1] === focusedParticipantType) {
          if (cResult[2] === selectedParticipantStreamId) {
            let tmp5;
            let tmp10Result;
            if (cResult[3] === selectedParticipantUserId) {
              tmp5 = cResult[4];
            }
            const effect = react.useEffect(first, tmp5);
            if (cResult[5] === channelId) {
              if (cResult[6] === focusedParticipantType) {
                if (cResult[7] === selectedParticipantSpeaking) {
                  if (cResult[8] === selectedParticipantStreamId) {
                    let tmp8;
                    if (cResult[9] === selectedParticipantUserId) {
                      tmp8 = cResult[10];
                    }
                    if (cResult[11] === onLayout) {
                      if (cResult[12] === tmp2.container) {
                        let tmp18;
                        if (cResult[13] === tmp8) {
                          tmp18 = cResult[14];
                        }
                        return tmp18;
                      }
                    }
                    const obj2 = { style: tmp2.container, onLayout, children: tmp8 };
                    const tmp21 = unpackModuleId(metroRequire, obj2);
                    cResult[11] = onLayout;
                    cResult[12] = tmp2.container;
                    cResult[13] = tmp8;
                    cResult[14] = tmp21;
                    tmp18 = tmp21;
                  }
                }
              }
            }
            if (null != selectedParticipantStreamId) {
              const obj3 = { streamId: selectedParticipantStreamId, userId: selectedParticipantUserId };
              tmp10Result = unpackModuleId(closure_18, obj3);
            } else if (null != selectedParticipantUserId) {
              const obj4 = { userId: selectedParticipantUserId, channelId, speaking: selectedParticipantSpeaking };
              tmp10Result = unpackModuleId(closure_17, obj4);
            } else {
              const obj5 = {
                wasStream:
                  focusedParticipantType === ParticipantTypes.STREAM ||
                  focusedParticipantType === ParticipantTypes.HIDDEN_STREAM,
              };
              tmp10Result = unpackModuleId(closure_16, obj5);
            }
            cResult[5] = channelId;
            cResult[6] = focusedParticipantType;
            cResult[7] = selectedParticipantSpeaking;
            cResult[8] = selectedParticipantStreamId;
            cResult[9] = selectedParticipantUserId;
            cResult[10] = tmp10Result;
            tmp8 = tmp10Result;
          }
        }
        const items = [selectedParticipantStreamId, selectedParticipantUserId, focusedParticipantType];
        cResult[1] = focusedParticipantType;
        cResult[2] = selectedParticipantStreamId;
        cResult[3] = selectedParticipantUserId;
        cResult[4] = items;
        tmp5 = items;
      }
    : (onLayout) => {
        let channelId;
        let focusedParticipantType;
        let selectedParticipantSpeaking;
        let selectedParticipantStreamId;
        let selectedParticipantUserId;
        let tmp4Result;
        onLayout = onLayout.onLayout;
        const tmp = closure_14();
        const tmp2 = useExternalPipParticipantDefault();
        ({ selectedParticipantStreamId, selectedParticipantUserId, focusedParticipantType } = tmp2);
        const items = [selectedParticipantStreamId, selectedParticipantUserId, focusedParticipantType];
        ({ channelId, selectedParticipantSpeaking } = tmp2);
        const effect = react.useEffect(() => {
          const obj = ExternalPipDefault;
          obj.refreshPipUi();
        }, items);
        let obj = { style: tmp.container, onLayout, children: tmp4Result };
        if (null != selectedParticipantStreamId) {
          const obj2 = { streamId: selectedParticipantStreamId, userId: selectedParticipantUserId };
          tmp4Result = unpackModuleId(closure_18, obj2);
        } else if (null != selectedParticipantUserId) {
          const obj3 = { userId: selectedParticipantUserId, channelId, speaking: selectedParticipantSpeaking };
          tmp4Result = unpackModuleId(closure_17, obj3);
        } else {
          const obj4 = {
            wasStream:
              focusedParticipantType === ParticipantTypes.STREAM ||
              focusedParticipantType === ParticipantTypes.HIDDEN_STREAM,
          };
          tmp4Result = unpackModuleId(closure_16, obj4);
        }
        return unpackModuleId(metroRequire, obj);
      },
);
let size = size_mod;
let result = size.fileFinishedImporting("modules/external_pip/ExternalPipViewVideo.android.tsx");

export default memoResult;
