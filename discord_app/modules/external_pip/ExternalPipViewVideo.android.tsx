// === Module 17466: ExternalPipViewVideo ===

// Module 17466 (ExternalPipViewVideo)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5012 */;
import Text_Text from "Text/Text" /* 5086 */;
import ExternalPipDefault from "ExternalPip" /* 5219 */;
import StreamEnded from "StreamEnded" /* 10704 */;
import DCDVideoRendererDefault from "DCDVideoRenderer" /* 10715 */;
import VideoActionCreators from "VideoActionCreators" /* 17467 */;
import useExternalPipParticipantDefault from "useExternalPipParticipant" /* 17468 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2063 */;
import UserStore from "UserStore" /* 1389 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, StyleSheet, View: metroRequire, PixelRatio: closure_7 } = get_ActivityIndicator);
const ParticipantTypes = fn(5113).ParticipantTypes;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
const createStyles = fn(5090);
let obj = { container: null, video: null, videoUnavailableWrap: null, videoUnavailableSpinner: null, unavailable: null, unavailableText: null, unavaiableImage: null, user: null };
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.backgroundColor = nativeDefault.colors.BACKGROUND_SURFACE_HIGH;
obj.container = obj3;
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj.video = {};
let obj5 = {};
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj5.margin = nativeDefault.space.PX_16;
obj5.borderRadius = nativeDefault.radii.sm;
obj5.justifyContent = "center";
obj5.alignContent = "center";
obj5.flexDirection = "row";
obj5.alignItems = "center";
obj5.flexWrap = "wrap";
obj5.flex = 1;
obj.videoUnavailableWrap = obj5;
obj.videoUnavailableSpinner = { marginTop: nativeDefault.space.PX_16 };
let obj4 = {};
let obj6 = { marginTop: nativeDefault.space.PX_16 };
obj.unavailable = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, padding: nativeDefault.space.PX_8, margin: nativeDefault.space.PX_8, justifyContent: "center", alignContent: "center", alignItems: "center", flexDirection: "row", flexWrap: "wrap", flex: 1 };
let obj7 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, padding: nativeDefault.space.PX_8, margin: nativeDefault.space.PX_8, justifyContent: "center", alignContent: "center", alignItems: "center", flexDirection: "row", flexWrap: "wrap", flex: 1 };
obj.unavailableText = { marginLeft: nativeDefault.space.PX_4, textAlign: "center" };
const obj8 = { marginLeft: nativeDefault.space.PX_4, textAlign: "center" };
obj.unavaiableImage = { marginBottom: nativeDefault.space.PX_8, resizeMode: "contain", aspectRatio: 2.5, width: "80%" };
const obj10 = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj10.backgroundColor = nativeDefault.colors.BACKGROUND_BASE_LOWEST;
obj10.borderRadius = nativeDefault.radii.sm;
obj10.margin = nativeDefault.space.PX_8;
obj10.alignItems = "center";
obj10.justifyContent = "center";
obj.user = obj10;
let closure_14 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function useStreamReady(arg0, arg1) {
  closure_0 = arg0;
  const cResult = c.c(10);
  let num = 300;
  if (undefined !== arg1) {
    num = arg1;
  }
  [streamReady, closure_3] = noop.useState(undefined);
  [tmp5, noop] = noop.useState(false);
  if (cResult[0] !== arg0) {
    const fn = function s() {
      return closure_3(closure_0);
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === streamReady) {
    if (cResult[3] === num) {
      let tmp7 = cResult[4];
      let tmp8 = cResult[5];
    }
    const effect = noop.useEffect(tmp7, tmp8);
    if (cResult[6] === tmp5) {
      if (cResult[7] === streamReady) {
        if (cResult[8] === tmp6) {
          let tmp10 = cResult[9];
        }
        return tmp10;
      }
    }
    const obj3 = { streamReady, streamReadLongTime: tmp5, streamReadyCallback: tmp6 };
    cResult[6] = tmp5;
    cResult[7] = streamReady;
    cResult[8] = tmp6;
    cResult[9] = obj3;
    tmp10 = obj3;
  }
  const fn2 = function h() {
    if (null == first) {
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
  };
  const items = [streamReady, num];
  cResult[2] = streamReady;
  cResult[3] = num;
  cResult[4] = fn2;
  cResult[5] = items;
  tmp8 = items;
  tmp7 = fn2;
  const tmp4 = _slicedToArray(noop.useState(false), 2);
}) : (function useStreamReady(arg0) {
  closure_0 = arg0;
  let num = arg1;
  if (arg1 === undefined) {
    num = 300;
  }
  streamReady = undefined;
  closure_3 = undefined;
  [streamReady, closure_3] = noop.useState(undefined);
  const streamReadLongTime = _slicedToArray(noop.useState(false), 2);
  closure_4 = streamReadLongTime[1];
  const items = [arg0];
  const items1 = [streamReady, num];
  const effect = noop.useEffect(() => {
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
  return { streamReady, streamReadLongTime: streamReadLongTime[0], streamReadyCallback: noop.useCallback(() => closure_3(closure_0), items) };
});
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function ExternalPipViewVideoUnavailable(wasStream) {
  const cResult = c.c(12);
  wasStream = wasStream.wasStream;
  const tmp4 = closure_14();
  if (cResult[0] === tmp4.unavaiableImage) {
    if (cResult[1] === wasStream) {
      if (cResult[3] !== wasStream) {
        const intl = util.intl;
        if (wasStream) {
          let result = intl.formatToMarkdownString(util.t["1Ww0Hi"], {});
        } else {
          result = intl.string(util.t.Nzo5nz);
        }
        cResult[3] = wasStream;
        cResult[4] = result;
      } else {
        if (cResult[5] === tmp4.unavailableText) {
          if (cResult[6] === tmp8) {
            let tmp11 = cResult[7];
          }
          if (cResult[8] === tmp4.unavailable) {
            if (cResult[9] === tmp5) {
              if (cResult[10] === tmp11) {
                let tmp14 = cResult[11];
              }
              return tmp14;
            }
          }
          const obj2 = { style: tmp4.unavailable, children: null };
          const items = [tmp5, tmp11];
          obj2.children = items;
          const tmp17 = __initData(timestampProducer, obj2);
          cResult[8] = tmp4.unavailable;
          cResult[9] = tmp5;
          cResult[10] = tmp11;
          cResult[11] = tmp17;
          tmp14 = tmp17;
        }
        const obj3 = { variant: "text-md/semibold", style: tmp4.unavailableText, lineClamp: 1, children: cResult[4] };
        const tmp13 = closure_1_11(Text_Text.Text, obj3);
        cResult[5] = tmp4.unavailableText;
        cResult[6] = cResult[4];
        cResult[7] = tmp13;
        tmp11 = tmp13;
      }
    }
  }
  if (wasStream) {
    const obj4 = { style: tmp4.unavaiableImage };
    let tmp6Result = closure_1_11(StreamEnded.StreamEnded, obj4);
  } else {
    tmp6Result = closure_1_11(CircleInformationIcon.CircleInformationIcon, {});
  }
  cResult[0] = tmp4.unavaiableImage;
  cResult[1] = wasStream;
  cResult[2] = tmp6Result;
}) : (function ExternalPipViewVideoUnavailable(wasStream) {
  wasStream = wasStream.wasStream;
  const tmp = closure_14();
  const obj = { style: tmp.unavailable, children: null };
  if (wasStream) {
    const obj2 = { style: tmp.unavaiableImage };
    let tmp4Result = closure_1_11(StreamEnded.StreamEnded, obj2);
    let tmp8 = closure_1_11;
    let tmp10 = require;
  } else {
    tmp4Result = closure_1_11(CircleInformationIcon.CircleInformationIcon, {});
    tmp8 = closure_1_11;
    tmp10 = require;
  }
  const items = [tmp4Result, ];
  const obj3 = { variant: "text-md/semibold", style: tmp.unavailableText, lineClamp: 1, children: null };
  const intl = tmp10(1126).intl;
  if (wasStream) {
    let result = intl.formatToMarkdownString(tmp10(1126).t["1Ww0Hi"], {});
  } else {
    result = intl.string(tmp10(1126).t.Nzo5nz);
  }
  obj3.children = result;
  items[1] = tmp8(tmp10(5086).Text, obj3);
  obj.children = items;
  return __initData(timestampProducer, obj);
});
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function ExternalPipViewVideoUser(userId) {
  const cResult = userId(576).c(17);
  userId = userId.userId;
  const channelId = userId.channelId;
  const speaking = userId.speaking;
  closure_14();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== userId) {
    const fn = function l() {
      return UserStore.getUser(userId);
    };
    cResult[1] = userId;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const obj = userId(576);
  const stateFromStores = userId(504).useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ChannelStore];
    cResult[3] = items1;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== channelId) {
    class I {
      constructor() {
        channel = closure_8.getChannel(channelId);
        guild_id = undefined;
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
        channel = closure_8.getChannel(channelId);
        guild_id = undefined;
        if (channel != null) {
          guild_id = channel.guild_id;
        }
        return guild_id;
      }
    }
  }
  const tmpResult = userId(504);
  const stateFromStores1 = userId(504).useStateFromStores(tmp9, I);
  if (cResult[6] === stateFromStores1) {
    class I {
      constructor() {
        channel = closure_8.getChannel(channelId);
        guild_id = undefined;
        if (channel != null) {
          guild_id = channel.guild_id;
        }
        return guild_id;
      }
    }
    const avatarSpeakingColor = tmp(10723).useAvatarSpeakingColor(obj3);
    if (cResult[9] === stateFromStores1) {
      class I {
        constructor() {
          channel = closure_8.getChannel(channelId);
          guild_id = undefined;
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
          channel = closure_8.getChannel(channelId);
          guild_id = undefined;
          if (channel != null) {
            guild_id = channel.guild_id;
          }
          return guild_id;
        }
      }
      const obj2 = { user: stateFromStores, avatarDecoration: stateFromStores.avatarDecoration, guildId: stateFromStores1, size: tmp(1200).AvatarSizes.XXLARGE, animate: speaking, speaking, speakingColor: avatarSpeakingColor };
      tmp15 = closure_11(tmp(1200).Avatar, obj2);
    }
    cResult[9] = stateFromStores1;
    cResult[10] = speaking;
    cResult[11] = avatarSpeakingColor;
    cResult[12] = stateFromStores;
    cResult[13] = tmp15;
    const tmpResult4 = tmp(10723);
  }
  obj3 = { userId, guildId: stateFromStores1 };
  cResult[6] = stateFromStores1;
  cResult[7] = userId;
  cResult[8] = obj3;
  const tmpResult3 = userId(504);
}) : (function ExternalPipViewVideoUser(userId) {
  userId = userId.userId;
  ({ channelId: importDefault, speaking } = userId);
  const tmp = closure_14();
  const items = [UserStore];
  const stateFromStores = userId(504).useStateFromStores(items, () => UserStore.getUser(userId));
  const obj = userId(504);
  const items1 = [ChannelStore];
  const stateFromStores1 = userId(504).useStateFromStores(items1, () => {
    const channel = ChannelStore.getChannel(importDefault);
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    return guild_id;
  });
  userId(10723);
  const obj3 = { style: tmp.user, children: null };
  let tmp8Result = null;
  if (null != stateFromStores) {
    const obj4 = { user: stateFromStores, avatarDecoration: stateFromStores.avatarDecoration, guildId: stateFromStores1, size: tmp2(1200).AvatarSizes.XXLARGE, animate: speaking, speaking, speakingColor: tmp7 };
    tmp8Result = closure_11(tmp2(1200).Avatar, obj4);
  }
  obj3.children = tmp8Result;
  return closure_11(closure_6, obj3);
});
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (function ExternalPipViewVideoStream(streamId) {
  const cResult = streamId(576).c(23);
  streamId = streamId.streamId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "ExternalPipViewVideoStream" };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  let obj = streamId(576);
  const surfaceDirectRendererExperiment = streamId(5229).useSurfaceDirectRendererExperiment(streamId.userId, first);
  const tmpResult = streamId(5229);
  ({ streamReady, streamReadLongTime, streamReadyCallback } = closure_15(streamId));
  const tmp7 = closure_14();
  let num2 = 1;
  if (null == streamReady) {
    num2 = 0;
  }
  if (cResult[1] !== num2) {
    const obj3 = { opacity: num2 };
    cResult[1] = num2;
    cResult[2] = obj3;
    let tmp8 = obj3;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === tmp7.video) {
    if (cResult[4] === tmp8) {
      let tmp9 = cResult[5];
    }
    const token = tmp(4778).useToken(nativeDefault.colors.TEXT_FEEDBACK_INFO);
    importDefault = closure_7.get();
    if (cResult[6] !== streamId) {
      const fn = function w(nativeEvent) {
        if (null != streamId) {
          ({ width, height } = nativeEvent.nativeEvent.layout);
          const size = { width: width * closure_1, height: height * closure_1 };
          VideoActionCreators.updateVideoSize(tmp, size, 1);
        }
      };
      cResult[6] = streamId;
      cResult[7] = fn;
      let tmp13 = fn;
    } else {
      tmp13 = cResult[7];
    }
    if (cResult[8] === tmp13) {
      if (cResult[9] === streamId) {
        if (cResult[10] === streamReadyCallback) {
          if (cResult[11] === tmp9) {
            if (cResult[12] === surfaceDirectRendererExperiment) {
              let tmp14 = cResult[13];
            }
            if (cResult[14] === token) {
              if (cResult[15] === streamReadLongTime) {
                if (cResult[16] === streamReady) {
                  if (cResult[17] === tmp7.videoUnavailableSpinner) {
                    if (cResult[18] === tmp7.videoUnavailableWrap) {
                      let tmp17 = cResult[19];
                    }
                    if (cResult[20] === tmp14) {
                      if (cResult[21] === tmp17) {
                        let tmp22 = cResult[22];
                      }
                      return tmp22;
                    }
                    const obj4 = { children: null };
                    const items = [tmp14, tmp17];
                    obj4.children = items;
                    const tmp25 = closure_12(closure_13, obj4);
                    cResult[20] = tmp14;
                    cResult[21] = tmp17;
                    cResult[22] = tmp25;
                    tmp22 = tmp25;
                  }
                }
              }
            }
            let tmp18 = null;
            if (null == streamReady) {
              tmp18 = null;
              if (streamReadLongTime) {
                const obj5 = { style: tmp7.videoUnavailableWrap, children: null };
                const obj6 = { style: tmp7.videoUnavailableSpinner, size: "large", color: token };
                obj5.children = closure_11(closure_5, obj6);
                tmp18 = closure_11(closure_6, obj5);
              }
            }
            cResult[14] = token;
            cResult[15] = streamReadLongTime;
            cResult[16] = streamReady;
            cResult[17] = tmp7.videoUnavailableSpinner;
            cResult[18] = tmp7.videoUnavailableWrap;
            cResult[19] = tmp18;
            tmp17 = tmp18;
          }
        }
      }
    }
    const obj7 = { useSurfaceDirectRenderer: surfaceDirectRendererExperiment, style: tmp9, streamId, onReady: streamReadyCallback, onLayout: tmp13 };
    const tmp16 = closure_11(DCDVideoRendererDefault, obj7);
    cResult[8] = tmp13;
    cResult[9] = streamId;
    cResult[10] = streamReadyCallback;
    cResult[11] = tmp9;
    cResult[12] = surfaceDirectRendererExperiment;
    cResult[13] = tmp16;
    tmp14 = tmp16;
    const tmpResult2 = tmp(4778);
  }
  const items1 = [tmp7.video, tmp8];
  cResult[3] = tmp7.video;
  cResult[4] = tmp8;
  cResult[5] = items1;
  tmp9 = items1;
  const tmp6 = closure_15(streamId);
}) : (function ExternalPipViewVideoStream(streamId) {
  streamId = streamId.streamId;
  const surfaceDirectRendererExperiment = streamId(5229).useSurfaceDirectRendererExperiment(streamId.userId, { location: "ExternalPipViewVideoStream" });
  const tmp2 = closure_15(streamId);
  const streamReady = tmp2.streamReady;
  ({ streamReadLongTime, streamReadyCallback } = tmp2);
  const tmp3 = closure_14();
  dependencyMap = tmp3;
  let items = [tmp3, streamReady];
  const memo = noop.useMemo(() => {
    const items = [video.video, ];
    let num = 1;
    if (null == streamReady) {
      num = 0;
    }
    items[1] = { opacity: num };
    return items;
  }, items);
  let obj = streamId(5229);
  const token = streamId(4778).useToken(streamReady(587).colors.TEXT_FEEDBACK_INFO);
  value = closure_7.get();
  c3 = value;
  const items1 = [streamId, value];
  const callback = noop.useCallback((nativeEvent) => {
    if (null != streamId) {
      ({ width, height } = nativeEvent.nativeEvent.layout);
      const size = { width: width * c3, height: height * c3 };
      VideoActionCreators.updateVideoSize(tmp, size, 1);
    }
  }, items1);
  const children = [closure_11(streamReady(10715), { useSurfaceDirectRenderer: surfaceDirectRendererExperiment, style: memo, streamId, onReady: streamReadyCallback, onLayout: callback }), ];
  let tmp10Result = null;
  if (null == streamReady) {
    tmp10Result = null;
    if (streamReadLongTime) {
      const obj3 = { style: tmp3.videoUnavailableWrap, children: null };
      const obj4 = { style: tmp3.videoUnavailableSpinner, size: "large", color: token };
      obj3.children = closure_11(closure_5, obj4);
      tmp10Result = closure_11(closure_6, obj3);
    }
  }
  children[1] = tmp10Result;
  return closure_12(closure_13, { children });
});
ReactCompilerGating = fn(558);
const obj9 = { marginBottom: nativeDefault.space.PX_8, resizeMode: "contain", aspectRatio: 2.5, width: "80%" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/external_pip/ExternalPipViewVideo.android.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ExternalPipViewVideo(onLayout) {
  const cResult = c.c(15);
  onLayout = onLayout.onLayout;
  const tmp2 = closure_14();
  ({ channelId, selectedParticipantStreamId, selectedParticipantUserId, selectedParticipantSpeaking, focusedParticipantType } = useExternalPipParticipantDefault());
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l() {
      ExternalPipDefault.refreshPipUi();
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === focusedParticipantType) {
    if (cResult[2] === selectedParticipantStreamId) {
      if (cResult[3] === selectedParticipantUserId) {
        let tmp5 = cResult[4];
      }
      const effect = noop.useEffect(first, tmp5);
      if (cResult[5] === channelId) {
        if (cResult[6] === focusedParticipantType) {
          if (cResult[7] === selectedParticipantSpeaking) {
            if (cResult[8] === selectedParticipantStreamId) {
              if (cResult[9] === selectedParticipantUserId) {
                if (cResult[11] === onLayout) {
                  if (cResult[12] === tmp2.container) {
                    if (cResult[13] === tmp8) {
                      let tmp19 = cResult[14];
                    }
                    return tmp19;
                  }
                }
                const obj2 = { style: tmp2.container, onLayout, children: cResult[10] };
                const tmp22 = closure_1_11(timestampProducer, obj2);
                cResult[11] = onLayout;
                cResult[12] = tmp2.container;
                cResult[13] = cResult[10];
                cResult[14] = tmp22;
                tmp19 = tmp22;
              }
            }
          }
        }
      }
      if (null != selectedParticipantStreamId) {
        const obj3 = { streamId: selectedParticipantStreamId, userId: selectedParticipantUserId };
        let tmp10Result = closure_1_11(closure_18, obj3);
      } else if (null != selectedParticipantUserId) {
        const obj4 = { userId: selectedParticipantUserId, channelId, speaking: selectedParticipantSpeaking };
        tmp10Result = closure_1_11(closure_17, obj4);
      } else {
        let tmp12 = focusedParticipantType === ParticipantTypes.STREAM;
        if (!tmp12) {
          tmp12 = focusedParticipantType === ParticipantTypes.HIDDEN_STREAM;
        }
        const obj5 = { wasStream: tmp12 };
        tmp10Result = closure_1_11(closure_16, obj5);
      }
      cResult[5] = channelId;
      cResult[6] = focusedParticipantType;
      cResult[7] = selectedParticipantSpeaking;
      cResult[8] = selectedParticipantStreamId;
      cResult[9] = selectedParticipantUserId;
      cResult[10] = tmp10Result;
    }
  }
  const items = [selectedParticipantStreamId, selectedParticipantUserId, focusedParticipantType];
  cResult[1] = focusedParticipantType;
  cResult[2] = selectedParticipantStreamId;
  cResult[3] = selectedParticipantUserId;
  cResult[4] = items;
  tmp5 = items;
  const tmp3 = useExternalPipParticipantDefault();
}) : (function ExternalPipViewVideo(onLayout) {
  const tmp2 = useExternalPipParticipantDefault();
  ({ selectedParticipantStreamId, selectedParticipantUserId, focusedParticipantType } = tmp2);
  const items = [selectedParticipantStreamId, selectedParticipantUserId, focusedParticipantType];
  ({ channelId, selectedParticipantSpeaking } = tmp2);
  const effect = noop.useEffect(() => {
    ExternalPipDefault.refreshPipUi();
  }, items);
  const obj = { style: closure_14().container, onLayout: onLayout.onLayout, children: null };
  if (null != selectedParticipantStreamId) {
    const obj2 = { streamId: selectedParticipantStreamId, userId: selectedParticipantUserId };
    let tmp4Result = closure_1_11(closure_18, obj2);
  } else if (null != selectedParticipantUserId) {
    const obj3 = { userId: selectedParticipantUserId, channelId, speaking: selectedParticipantSpeaking };
    tmp4Result = closure_1_11(closure_17, obj3);
  } else {
    let tmp7 = focusedParticipantType === ParticipantTypes.STREAM;
    if (!tmp7) {
      tmp7 = focusedParticipantType === ParticipantTypes.HIDDEN_STREAM;
    }
    const obj4 = { wasStream: tmp7 };
    tmp4Result = closure_1_11(closure_16, obj4);
  }
  obj.children = tmp4Result;
  return closure_1_11(timestampProducer, obj);
}));