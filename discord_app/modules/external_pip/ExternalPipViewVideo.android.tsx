// === Module 18960: ExternalPipViewVideo ===

// Module 18960 (ExternalPipViewVideo)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1125 */;
import Text_Text from "Text/Text" /* 5271 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5724 */;
import ExternalPipDefault from "ExternalPip" /* 5862 */;
import VideoActionCreators from "VideoActionCreators" /* 18962 */;
import useExternalPipParticipantDefault from "useExternalPipParticipant" /* 18963 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 4857 */;
import UserStore from "UserStore" /* 1389 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
({ View: closure_7, PixelRatio: closure_8 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
const createStyles = fn(5005);
let obj = { container: null, video: null, videoUnavailableWrap: null, videoUnavailableSpinner: null, unavailable: null, unavailableText: null, user: null };
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
const obj9 = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj9.alignItems = "center";
obj9.justifyContent = "center";
obj.user = obj9;
let closure_14 = createStyles.createStyles(obj);
const start = { x: 0, y: 0 };
const end = { x: 0, y: 1 };
let ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function useStreamReady(arg0, arg1) {
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
  const items = [streamReady, num];
  cResult[2] = streamReady;
  cResult[3] = num;
  cResult[4] = R;
  cResult[5] = items;
  tmp8 = items;
  tmp7 = R;
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
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (function ExternalPipViewVideoUnavailable() {
  const cResult = c.c(7);
  const tmp4 = closure_14();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = closure_1_11(CircleInformationIcon.CircleInformationIcon, {});
    cResult[0] = tmp7;
    let first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.Nzo5nz);
    cResult[1] = stringResult;
    let tmp8 = stringResult;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] !== tmp4.unavailableText) {
    const obj2 = { variant: "text-md/semibold", style: tmp4.unavailableText, lineClamp: 1, children: tmp8 };
    const tmp12 = closure_1_11(Text_Text.Text, obj2);
    cResult[2] = tmp4.unavailableText;
    cResult[3] = tmp12;
    let tmp10 = tmp12;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] === tmp4.unavailable) {
    if (cResult[5] === tmp10) {
      let tmp13 = cResult[6];
    }
    return tmp13;
  }
  const obj3 = { style: tmp4.unavailable, children: null };
  const items = [first, tmp10];
  obj3.children = items;
  const tmp14 = __initData(React5, obj3);
  cResult[4] = tmp4.unavailable;
  cResult[5] = tmp10;
  cResult[6] = tmp14;
  tmp13 = tmp14;
}) : (function ExternalPipViewVideoUnavailable() {
  const tmp = closure_14();
  const obj = { style: tmp.unavailable, children: null };
  const items = [closure_1_11(CircleInformationIcon.CircleInformationIcon, {}), ];
  const obj2 = { variant: "text-md/semibold", style: tmp.unavailableText, lineClamp: 1, children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.Nzo5nz);
  items[1] = closure_1_11(Text_Text.Text, obj2);
  obj.children = items;
  return __initData(React5, obj);
});
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (function ExternalPipViewVideoUser(userId) {
  const cResult = userId(576).c(29);
  userId = userId.userId;
  const channelId = userId.channelId;
  const speaking = userId.speaking;
  const tmp4 = closure_14();
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
    let tmp8 = items1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== channelId) {
    const fn2 = function x() {
      const channel = ChannelStore.getChannel(channelId);
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      return guild_id;
    };
    cResult[4] = channelId;
    cResult[5] = fn2;
    let tmp10 = fn2;
  } else {
    tmp10 = cResult[5];
  }
  const tmpResult = userId(504);
  const stateFromStores1 = userId(504).useStateFromStores(tmp8, tmp10);
  const tmpResult3 = userId(504);
  const avatarDecoration = userId(6840).useAvatarDecoration(stateFromStores, stateFromStores1);
  if (cResult[6] === stateFromStores1) {
    if (cResult[7] === stateFromStores) {
      let tmp13 = cResult[8];
    }
    if (cResult[9] === stateFromStores1) {
      if (cResult[10] === tmp13) {
        if (cResult[11] === userId) {
          let tmp15 = cResult[12];
        }
        ({ gradientStops, backgroundColor } = channelId(18961)(tmp15));
        if (cResult[13] !== backgroundColor) {
          const obj2 = { backgroundColor };
          cResult[13] = backgroundColor;
          cResult[14] = obj2;
          let tmp18 = obj2;
        } else {
          tmp18 = cResult[14];
        }
        if (cResult[15] === tmp4.user) {
          if (cResult[16] === tmp18) {
            let tmp19 = cResult[17];
          }
          if (cResult[18] !== gradientStops) {
            let tmp21 = null;
            if (null != gradientStops) {
              const obj3 = { colors: gradientStops, start, end, style: StyleSheet.absoluteFill, pointerEvents: "none" };
              tmp21 = closure_11(tmp16(5295), obj3);
            }
            cResult[18] = gradientStops;
            cResult[19] = tmp21;
            let tmp20 = tmp21;
          } else {
            tmp20 = cResult[19];
          }
          if (cResult[20] === avatarDecoration) {
            if (cResult[21] === stateFromStores1) {
              if (cResult[22] === speaking) {
                if (cResult[23] === stateFromStores) {
                  let tmp26 = cResult[24];
                }
                if (cResult[25] === tmp26) {
                  if (cResult[26] === tmp20) {
                    if (cResult[27] === tmp19) {
                      let tmp29 = cResult[28];
                    }
                    return tmp29;
                  }
                }
                const obj4 = { style: tmp19, children: null };
                const items2 = [tmp20, tmp26];
                obj4.children = items2;
                const tmp32 = closure_12(closure_7, obj4);
                cResult[25] = tmp26;
                cResult[26] = tmp20;
                cResult[27] = tmp19;
                cResult[28] = tmp32;
                tmp29 = tmp32;
              }
            }
          }
          let tmp27 = null;
          if (null != stateFromStores) {
            const obj5 = { user: stateFromStores, avatarDecoration, guildId: stateFromStores1, size: tmp(1199).AvatarSizes.XXLARGE, speaking };
            tmp27 = closure_11(tmp(1199).Avatar, obj5);
          }
          cResult[20] = avatarDecoration;
          cResult[21] = stateFromStores1;
          cResult[22] = speaking;
          cResult[23] = stateFromStores;
          cResult[24] = tmp27;
          tmp26 = tmp27;
        }
        const items3 = [tmp4.user, tmp18];
        cResult[15] = tmp4.user;
        cResult[16] = tmp18;
        cResult[17] = items3;
        tmp19 = items3;
        tmp16 = channelId;
        const tmp17 = channelId(18961)(tmp15);
      }
    }
    const obj6 = { userId, guildId: stateFromStores1, avatarURI: tmp13, location: "ExternalPipViewVideo-native" };
    cResult[9] = stateFromStores1;
    cResult[10] = tmp13;
    cResult[11] = userId;
    cResult[12] = obj6;
    tmp15 = obj6;
  }
  let avatarURL;
  if (stateFromStores != null) {
    avatarURL = stateFromStores.getAvatarURL(stateFromStores1, 80, false);
  }
  cResult[6] = stateFromStores1;
  cResult[7] = stateFromStores;
  cResult[8] = avatarURL;
  tmp13 = avatarURL;
  const tmpResult4 = userId(6840);
}) : (function ExternalPipViewVideoUser(userId) {
  userId = userId.userId;
  const channelId = userId.channelId;
  backgroundColor = undefined;
  const tmp = closure_14();
  dependencyMap = tmp;
  let items = [UserStore];
  const stateFromStores = userId(504).useStateFromStores(items, () => UserStore.getUser(userId));
  const obj = userId(504);
  const items1 = [ChannelStore];
  const stateFromStores1 = userId(504).useStateFromStores(items1, () => {
    const channel = ChannelStore.getChannel(channelId);
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    return guild_id;
  });
  const obj3 = userId(504);
  const avatarDecoration = userId(6840).useAvatarDecoration(stateFromStores, stateFromStores1);
  const obj2 = { userId, guildId: stateFromStores1, avatarURI: null, location: "ExternalPipViewVideo-native" };
  let avatarURL;
  const obj4 = userId(6840);
  const tmp6 = channelId;
  if (stateFromStores != null) {
    avatarURL = stateFromStores.getAvatarURL(stateFromStores1, 80, false);
  }
  obj2.avatarURI = avatarURL;
  const tmp7 = channelId(18961);
  ({ gradientStops, backgroundColor } = channelId(18961)(obj2));
  const items2 = [tmp.user, backgroundColor];
  const obj5 = {
    style: noop.useMemo(() => {
      const items = [user.user, { backgroundColor }];
      return items;
    }, items2),
    children: null
  };
  let tmp12 = null;
  if (null != gradientStops) {
    const obj6 = { colors: gradientStops, start, end, style: StyleSheet.absoluteFill, pointerEvents: "none" };
    tmp12 = closure_11(tmp6(5295), obj6);
  }
  const items3 = [tmp12, ];
  let tmp17 = null;
  if (null != stateFromStores) {
    const obj7 = { user: stateFromStores, avatarDecoration, guildId: stateFromStores1, size: tmp2(1199).AvatarSizes.XXLARGE, speaking: userId.speaking };
    tmp17 = closure_11(tmp2(1199).Avatar, obj7);
  }
  items3[1] = tmp17;
  obj5.children = items3;
  return closure_12(closure_7, obj5);
});
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? (function ExternalPipViewVideoStream(streamId) {
  const cResult = streamId(576).c(26);
  streamId = streamId.streamId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "ExternalPipViewVideoStream" };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  let obj = streamId(576);
  const surfaceDirectRendererExperiment = streamId(5876).useSurfaceDirectRendererExperiment(streamId.userId, first);
  const tmp6 = closure_17(streamId);
  const streamReady = tmp6.streamReady;
  ({ streamReadLongTime, streamReadyCallback } = tmp6);
  if (cResult[1] !== streamReady) {
    const fn = function b() {
      if (null != streamReady) {
        ExternalPipDefault.setPipContentReady();
      }
    };
    const items = [streamReady];
    cResult[1] = streamReady;
    cResult[2] = fn;
    cResult[3] = items;
    let tmp8 = items;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const effect = noop.useEffect(tmp7, tmp8);
  const tmp10 = closure_14();
  let num5 = 1;
  if (null == streamReady) {
    num5 = 0;
  }
  if (cResult[4] !== num5) {
    const obj3 = { opacity: num5 };
    cResult[4] = num5;
    cResult[5] = obj3;
    let tmp11 = obj3;
  } else {
    tmp11 = cResult[5];
  }
  if (cResult[6] === tmp10.video) {
    if (cResult[7] === tmp11) {
      let tmp12 = cResult[8];
    }
    const token = tmp(5289).useToken(streamReady(587).colors.TEXT_FEEDBACK_INFO);
    dependencyMap = closure_8.get();
    if (cResult[9] !== streamId) {
      const fn2 = function w(nativeEvent) {
        if (null != streamId) {
          ({ width, height } = nativeEvent.nativeEvent.layout);
          const size = { width: width * closure_2, height: height * closure_2 };
          VideoActionCreators.updateVideoSize(tmp, size, 1);
        }
      };
      cResult[9] = streamId;
      cResult[10] = fn2;
      let tmp16 = fn2;
    } else {
      tmp16 = cResult[10];
    }
    if (cResult[11] === tmp16) {
      if (cResult[12] === streamId) {
        if (cResult[13] === streamReadyCallback) {
          if (cResult[14] === tmp12) {
            if (cResult[15] === surfaceDirectRendererExperiment) {
              let tmp17 = cResult[16];
            }
            if (cResult[17] === token) {
              if (cResult[18] === streamReadLongTime) {
                if (cResult[19] === streamReady) {
                  if (cResult[20] === tmp10.videoUnavailableSpinner) {
                    if (cResult[21] === tmp10.videoUnavailableWrap) {
                      let tmp20 = cResult[22];
                    }
                    if (cResult[23] === tmp17) {
                      if (cResult[24] === tmp20) {
                        let tmp25 = cResult[25];
                      }
                      return tmp25;
                    }
                    const obj4 = { children: null };
                    const items1 = [tmp17, tmp20];
                    obj4.children = items1;
                    const tmp28 = closure_12(closure_13, obj4);
                    cResult[23] = tmp17;
                    cResult[24] = tmp20;
                    cResult[25] = tmp28;
                    tmp25 = tmp28;
                  }
                }
              }
            }
            let tmp21 = null;
            if (null == streamReady) {
              tmp21 = null;
              if (streamReadLongTime) {
                const obj5 = { style: tmp10.videoUnavailableWrap, children: null };
                const obj6 = { style: tmp10.videoUnavailableSpinner, size: "large", color: token };
                obj5.children = closure_11(closure_5, obj6);
                tmp21 = closure_11(closure_7, obj5);
              }
            }
            cResult[17] = token;
            cResult[18] = streamReadLongTime;
            cResult[19] = streamReady;
            cResult[20] = tmp10.videoUnavailableSpinner;
            cResult[21] = tmp10.videoUnavailableWrap;
            cResult[22] = tmp21;
            tmp20 = tmp21;
          }
        }
      }
    }
    const obj7 = { useSurfaceDirectRenderer: surfaceDirectRendererExperiment, style: tmp12, streamId, onReady: streamReadyCallback, onLayout: tmp16 };
    const tmp19 = closure_11(streamReady(11534), obj7);
    cResult[11] = tmp16;
    cResult[12] = streamId;
    cResult[13] = streamReadyCallback;
    cResult[14] = tmp12;
    cResult[15] = surfaceDirectRendererExperiment;
    cResult[16] = tmp19;
    tmp17 = tmp19;
    const tmpResult2 = tmp(5289);
  }
  const items2 = [tmp10.video, tmp11];
  cResult[6] = tmp10.video;
  cResult[7] = tmp11;
  cResult[8] = items2;
  tmp12 = items2;
  const tmpResult = streamId(5876);
}) : (function ExternalPipViewVideoStream(streamId) {
  streamId = streamId.streamId;
  const surfaceDirectRendererExperiment = streamId(5876).useSurfaceDirectRendererExperiment(streamId.userId, { location: "ExternalPipViewVideoStream" });
  const tmp2 = closure_17(streamId);
  const streamReady = tmp2.streamReady;
  let items = [streamReady];
  ({ streamReadLongTime, streamReadyCallback } = tmp2);
  const effect = noop.useEffect(() => {
    if (null != streamReady) {
      ExternalPipDefault.setPipContentReady();
    }
  }, items);
  const tmp4 = closure_14();
  dependencyMap = tmp4;
  const items1 = [tmp4, streamReady];
  const memo = noop.useMemo(() => {
    const items = [video.video, ];
    let num = 1;
    if (null == streamReady) {
      num = 0;
    }
    items[1] = { opacity: num };
    return items;
  }, items1);
  let obj = streamId(5876);
  const token = streamId(5289).useToken(streamReady(587).colors.TEXT_FEEDBACK_INFO);
  value = closure_8.get();
  c3 = value;
  const items2 = [streamId, value];
  const callback = noop.useCallback((nativeEvent) => {
    if (null != streamId) {
      ({ width, height } = nativeEvent.nativeEvent.layout);
      const size = { width: width * c3, height: height * c3 };
      VideoActionCreators.updateVideoSize(tmp, size, 1);
    }
  }, items2);
  const children = [closure_11(streamReady(11534), { useSurfaceDirectRenderer: surfaceDirectRendererExperiment, style: memo, streamId, onReady: streamReadyCallback, onLayout: callback }), ];
  let tmp11Result = null;
  if (null == streamReady) {
    tmp11Result = null;
    if (streamReadLongTime) {
      const obj3 = { style: tmp4.videoUnavailableWrap, children: null };
      const obj4 = { style: tmp4.videoUnavailableSpinner, size: "large", color: token };
      obj3.children = closure_11(closure_5, obj4);
      tmp11Result = closure_11(closure_7, obj3);
    }
  }
  children[1] = tmp11Result;
  return closure_12(closure_13, { children });
});
ReactCompilerGating = fn(558);
const obj8 = { marginLeft: nativeDefault.space.PX_4, textAlign: "center" };
let size = fn(2);
const result = size.fileFinishedImporting("modules/external_pip/ExternalPipViewVideo.android.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ExternalPipViewVideo(onLayout) {
  const cResult = onLayout(576).c(17);
  onLayout = onLayout.onLayout;
  const tmp2 = closure_14();
  let obj = onLayout(576);
  ({ channelId, participantType, selectedParticipantStreamId, selectedParticipantUserId, selectedParticipantSpeaking } = useExternalPipParticipantDefault());
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l() {
      closure_1(dependencyMap[19]).refreshPipUi();
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === participantType) {
    if (cResult[2] === selectedParticipantStreamId) {
      if (cResult[3] === selectedParticipantUserId) {
        let tmp5 = cResult[4];
      }
      const effect = noop.useEffect(first, tmp5);
      importDefault = tmp9;
      if (cResult[5] === null != selectedParticipantStreamId) {
        if (cResult[6] === onLayout) {
          let tmp10 = cResult[7];
        }
        if (cResult[8] === channelId) {
          if (cResult[9] === selectedParticipantSpeaking) {
            if (cResult[10] === selectedParticipantStreamId) {
              if (cResult[11] === selectedParticipantUserId) {
                if (cResult[13] === tmp10) {
                  if (cResult[14] === tmp2.container) {
                    if (cResult[15] === tmp11) {
                      let tmp20 = cResult[16];
                    }
                    return tmp20;
                  }
                }
                const obj2 = { style: tmp2.container, onLayout: tmp10, children: null };
                class E {
                  constructor(arg0) {
                    if (!closure_1) {
                      tmp = closure_1;
                      tmp2 = closure_2;
                      obj = closure_1(closure_2[19]);
                      setPipContentReadyResult = obj.setPipContentReady();
                    }
                    if (onLayout != null) {
                      tmp5 = onLayout;
                      tmp4Result = tmp4(onLayout);
                    }
                    return;
                  }
                }
                const tmp23 = closure_11(closure_7, obj2);
                cResult[13] = tmp10;
                cResult[14] = tmp2.container;
                cResult[15] = cResult[12];
                cResult[16] = tmp23;
                tmp20 = tmp23;
              }
            }
          }
        }
        if (null != selectedParticipantStreamId) {
          const obj3 = { streamId: selectedParticipantStreamId, userId: selectedParticipantUserId };
          let tmp14 = closure_11(closure_20, obj3);
        } else if (null != selectedParticipantUserId) {
          const obj4 = { userId: selectedParticipantUserId, channelId, speaking: selectedParticipantSpeaking };
          tmp14 = closure_11(closure_19, obj4);
        } else {
          tmp14 = closure_11(closure_18, {});
        }
        cResult[8] = channelId;
        cResult[9] = selectedParticipantSpeaking;
        class E {
          constructor(arg0) {
            if (!closure_1) {
              tmp = closure_1;
              tmp2 = closure_2;
              obj = closure_1(closure_2[19]);
              setPipContentReadyResult = obj.setPipContentReady();
            }
            if (onLayout != null) {
              tmp5 = onLayout;
              tmp4Result = tmp4(onLayout);
            }
            return;
          }
        }
        cResult[10] = selectedParticipantStreamId;
        cResult[11] = selectedParticipantUserId;
        cResult[12] = tmp14;
      }
      class E {
        constructor(arg0) {
          if (!closure_1) {
            tmp = closure_1;
            tmp2 = closure_2;
            obj = closure_1(closure_2[19]);
            setPipContentReadyResult = obj.setPipContentReady();
          }
          if (onLayout != null) {
            tmp5 = onLayout;
            tmp4Result = tmp4(onLayout);
          }
          return;
        }
      }
      cResult[5] = null != selectedParticipantStreamId;
      cResult[6] = onLayout;
      cResult[7] = E;
      tmp10 = E;
    }
  }
  const items = [selectedParticipantStreamId, selectedParticipantUserId, participantType];
  cResult[1] = participantType;
  cResult[2] = selectedParticipantStreamId;
  cResult[3] = selectedParticipantUserId;
  cResult[4] = items;
  tmp5 = items;
  const tmp3 = useExternalPipParticipantDefault();
}) : (function ExternalPipViewVideo(onLayout) {
  onLayout = onLayout.onLayout;
  const tmp2 = useExternalPipParticipantDefault();
  ({ selectedParticipantStreamId, selectedParticipantUserId } = tmp2);
  const items = [selectedParticipantStreamId, selectedParticipantUserId, ];
  ({ participantType: arr[2], channelId, selectedParticipantSpeaking } = tmp2);
  const effect = noop.useEffect(() => {
    closure_1(dependencyMap[19]).refreshPipUi();
  }, items);
  importDefault = tmp4;
  const items1 = [null != selectedParticipantStreamId, onLayout];
  let obj = {
    style: closure_14().container,
    onLayout: noop.useCallback((arg0) => {
      if (!closure_1) {
        ExternalPipDefault.setPipContentReady();
      }
      if (onLayout != null) {
        tmp4(arg0);
      }
    }, items1),
    children: null
  };
  if (null != selectedParticipantStreamId) {
    const obj2 = { streamId: selectedParticipantStreamId, userId: selectedParticipantUserId };
    let tmp5Result = closure_11(closure_20, obj2);
  } else if (null != selectedParticipantUserId) {
    const obj3 = { userId: selectedParticipantUserId, channelId, speaking: selectedParticipantSpeaking };
    tmp5Result = closure_11(closure_19, obj3);
  } else {
    tmp5Result = closure_11(closure_18, {});
  }
  obj.children = tmp5Result;
  return closure_11(closure_7, obj);
}));