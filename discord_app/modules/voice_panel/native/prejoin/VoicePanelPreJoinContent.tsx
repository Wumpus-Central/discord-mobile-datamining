// === Module 17835: VoicePanelPreJoinContent ===

// Module 17835 (VoicePanelPreJoinContent)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1273 */;
import native from "native" /* 4827 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4850 */;
import Text_Text from "Text/Text" /* 5088 */;
import spring from "spring" /* 5378 */;
import NicknameUtilsDefault from "NicknameUtils" /* 5409 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5889 */;
import StreamKeyUtils from "StreamKeyUtils" /* 5900 */;
import NativeViewDefault from "NativeView" /* 6161 */;
import CircleErrorIcon from "CircleErrorIcon" /* 6289 */;
import StreamActionCreators from "StreamActionCreators" /* 7443 */;
import StageChannelModalActionCreators from "StageChannelModalActionCreators" /* 7492 */;
import FormComponents from "FormComponents" /* 8796 */;
import useTrackImpressionDefault from "useTrackImpression" /* 8971 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 11575 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2064 */;
import GameConsoleStore from "GameConsoleStore" /* 5111 */;
import VoiceChannelBlockedUserStore from "VoiceChannelBlockedUserStore" /* 14001 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 5897 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import MediaEngineStore from "MediaEngineStore" /* 2012 */;
import PermissionStore from "PermissionStore" /* 4750 */;
import SessionsStore from "SessionsStore" /* 5112 */;
import UserStore from "UserStore" /* 1390 */;
import VoiceStateStore from "VoiceStateStore" /* 5113 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 5116 */;

require = fn;
function renderItem(arg0, arg1, transitionState, transitionCleanUp) {
  const merged = Object.assign(arg1);
  return closure_1_27(closure_47, { transitionState, transitionCleanUp }, arg0);
}
let closure_3 = ["transitionState", "transitionCleanUp"];
const StyleSheet = fn(17).StyleSheet;
const MODE_CHANGE_PHYSICS = fn(11970).MODE_CHANGE_PHYSICS;
const EDGE_GUTTER = fn(11973).EDGE_GUTTER;
const Constants = fn(1085);
({ AnalyticEvents: closure_22, AnalyticsSections: closure_23, Permissions: closure_24 } = Constants);
const constants4 = fn(14005).VoiceChannelWarningSurfaces;
const Features = fn(5117).Features;
const jsxProd = fn(21);
({ jsx: closure_27, jsxs: closure_28, Fragment: closure_29 } = jsxProd);
const createStyles = fn(5092);
let obj = { contentWrapper: { paddingTop: EDGE_GUTTER + fn(11974).BASE_VOICE_PANEL_HEADER_HEIGHT + EDGE_GUTTER, gap: 24, paddingBottom: 16 }, channelInfoWrapper: { paddingHorizontal: 16 }, subheading: { textAlign: "center", paddingTop: 16, paddingBottom: 16 }, previewImageWrapper: null, previewImage: null, activityInfoWrapper: null, activityInfoHeader: null, joinButtonWrapper: null, optInChannelsContainer: null, blockedMemberWarning: null, consolePreJoinPadding: null };
let obj3 = { paddingTop: EDGE_GUTTER + fn(11974).BASE_VOICE_PANEL_HEADER_HEIGHT + EDGE_GUTTER, gap: 24, paddingBottom: 16 };
obj.previewImageWrapper = { position: "relative", width: "100%", aspectRatio: 1.7777777777777777, borderRadius: nativeDefault.radii.lg, overflow: "hidden", justifyContent: "center", backgroundColor: nativeDefault.colors.BLACK };
let obj5 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj5.opacity = 0.5;
obj.previewImage = obj5;
obj.activityInfoWrapper = { paddingHorizontal: 16 };
obj.activityInfoHeader = { marginBottom: 8 };
let obj6 = {};
let merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj6.display = "flex";
obj6.alignItems = "center";
obj6.justifyContent = "center";
obj.joinButtonWrapper = obj6;
obj.optInChannelsContainer = { marginHorizontal: 16 };
let obj4 = { position: "relative", width: "100%", aspectRatio: 1.7777777777777777, borderRadius: nativeDefault.radii.lg, overflow: "hidden", justifyContent: "center", backgroundColor: nativeDefault.colors.BLACK };
obj.blockedMemberWarning = { display: "flex", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.xs, borderColor: nativeDefault.colors.ICON_FEEDBACK_WARNING, borderWidth: 1, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING, marginHorizontal: nativeDefault.space.PX_16 };
obj.consolePreJoinPadding = { height: 36 };
let closure_30 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_31 = ReactCompilerGating.isReactCompilerEnabled() ? (function StreamPreview(channelId) {
  const cResult = stream(setFocused[27]).c(29);
  ({ voiceState, stream } = channelId);
  channelId = channelId.channelId;
  const tmp4 = closure_30();
  const context = noop.useContext(channelId(setFocused[28]));
  ({ mode, setFocused } = context);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function o() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    let tmp9 = fn;
  } else {
    tmp9 = cResult[2];
  }
  const obj = stream(setFocused[27]);
  const stateFromStores = stream(setFocused[29]).useStateFromStores(first, tmp9);
  stream(setFocused[30]);
  if (cResult[3] === stateFromStores) {
    if (cResult[4] === channelId) {
      if (cResult[5] === setFocused) {
        if (cResult[6] === stream) {
          let tmp12 = cResult[7];
        }
        const _Symbol = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [PermissionStore];
          cResult[8] = items1;
          let tmp13 = items1;
        } else {
          tmp13 = cResult[8];
        }
        if (cResult[9] !== stateFromStores) {
          const fn3 = function w() {
            return PermissionStore.can(constants3.CONNECT, stateFromStores);
          };
          cResult[9] = stateFromStores;
          cResult[10] = fn3;
          let tmp15 = fn3;
        } else {
          tmp15 = cResult[10];
        }
        let isGuildStageVoiceResult;
        const stateFromStores1 = stream(setFocused[29]).useStateFromStores(tmp13, tmp15);
        if (stateFromStores != null) {
          isGuildStageVoiceResult = stateFromStores.isGuildStageVoice();
        }
        if (isGuildStageVoiceResult) {
          if (tmp11) {
            return null;
          }
        }
        if (cResult[11] === voiceState.nick) {
          if (cResult[12] === voiceState.user) {
            let tmp21 = cResult[13];
          }
          if (cResult[14] === tmp4.activityInfoHeader) {
            if (cResult[15] === tmp21) {
              let tmp23 = cResult[16];
            }
            if (cResult[17] === tmp12) {
              if (cResult[18] === mode) {
                if (cResult[19] === stream) {
                  if (cResult[20] === tmp26) {
                    let tmp27 = cResult[21];
                  }
                  if (cResult[22] === tmp4.previewImageWrapper) {
                    if (cResult[23] === tmp27) {
                      let tmp30 = cResult[24];
                    }
                    if (cResult[25] === tmp4.activityInfoWrapper) {
                      if (cResult[26] === tmp30) {
                        if (cResult[27] === tmp23) {
                          let tmp33 = cResult[28];
                        }
                        return tmp33;
                      }
                    }
                    let obj2 = { style: tmp19, children: null };
                    const items2 = [tmp23, tmp30];
                    obj2.children = items2;
                    const tmp35 = closure_28(tmp5(setFocused[38]), obj2);
                    cResult[25] = tmp4.activityInfoWrapper;
                    cResult[26] = tmp30;
                    cResult[27] = tmp23;
                    cResult[28] = tmp35;
                    tmp33 = tmp35;
                  }
                  let obj3 = { style: tmp4.previewImageWrapper, children: tmp27 };
                  const tmp32 = closure_27(tmp5(setFocused[38]), obj3);
                  cResult[22] = tmp4.previewImageWrapper;
                  cResult[23] = tmp27;
                  cResult[24] = tmp32;
                  tmp30 = tmp32;
                }
              }
            }
            let obj4 = { mode, disabled: !stateFromStores1, stream, onPress: tmp12 };
            const tmp29 = closure_27(stream(setFocused[37]).VoicePanelStreamPreview, obj4);
            cResult[17] = tmp12;
            cResult[18] = mode;
            cResult[19] = stream;
            cResult[20] = !stateFromStores1;
            cResult[21] = tmp29;
            tmp27 = tmp29;
          }
          let obj5 = { variant: "text-sm/semibold", style: tmp20, color: "text-default", children: tmp21 };
          const tmp25 = closure_27(stream(setFocused[36]).Text, obj5);
          cResult[14] = tmp4.activityInfoHeader;
          cResult[15] = tmp21;
          cResult[16] = tmp25;
          tmp23 = tmp25;
        }
        const intl = stream(setFocused[35]).intl;
        let username = voiceState.nick;
        if (username == null) {
          username = voiceState.user.username;
        }
        const obj6 = { username };
        const formatResult = intl.format(stream(setFocused[35]).t.I0mOAs, obj6);
        cResult[11] = voiceState.nick;
        cResult[12] = voiceState.user;
        cResult[13] = formatResult;
        tmp21 = formatResult;
        const tmpResult4 = stream(setFocused[29]);
      }
    }
  }
  const fn2 = function _() {
    let isGuildStageVoiceResult;
    if (stateFromStores != null) {
      isGuildStageVoiceResult = stateFromStores.isGuildStageVoice();
    }
    if (isGuildStageVoiceResult) {
      StageChannelModalActionCreators.connectAndOpen(stateFromStores);
    } else {
      const voiceChannel = SelectedChannelActionCreatorsDefault.selectVoiceChannel(channelId);
      StreamActionCreators.watchStream(stream, { forceMultiple: true });
      setFocused(StreamKeyUtils.encodeStreamKey(stream));
    }
  };
  cResult[3] = stateFromStores;
  cResult[4] = channelId;
  cResult[5] = setFocused;
  cResult[6] = stream;
  cResult[7] = fn2;
  tmp12 = fn2;
  const tmpResult = stream(setFocused[29]);
}) : (function StreamPreview(channelId) {
  ({ voiceState, stream } = channelId);
  channelId = channelId.channelId;
  let setFocused;
  const tmp = closure_30();
  const context = noop.useContext(channelId(setFocused[28]));
  setFocused = context.setFocused;
  const items = [ChannelStore];
  const stateFromStores = stream(setFocused[29]).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const obj = stream(setFocused[29]);
  const items1 = [stateFromStores, channelId, stream, setFocused];
  const shouldHideChannelContent = stream(setFocused[30]).useShouldHideChannelContent(stateFromStores);
  const callback = noop.useCallback(() => {
    let isGuildStageVoiceResult;
    if (stateFromStores != null) {
      isGuildStageVoiceResult = stateFromStores.isGuildStageVoice();
    }
    if (isGuildStageVoiceResult) {
      StageChannelModalActionCreators.connectAndOpen(stateFromStores);
    } else {
      const voiceChannel = SelectedChannelActionCreatorsDefault.selectVoiceChannel(channelId);
      StreamActionCreators.watchStream(stream, { forceMultiple: true });
      setFocused(StreamKeyUtils.encodeStreamKey(stream));
    }
  }, items1);
  let obj3 = stream(setFocused[30]);
  const items2 = [PermissionStore];
  let isGuildStageVoiceResult;
  const stateFromStores1 = stream(setFocused[29]).useStateFromStores(items2, () => PermissionStore.can(constants3.CONNECT, stateFromStores));
  if (stateFromStores != null) {
    isGuildStageVoiceResult = stateFromStores.isGuildStageVoice();
  }
  if (!isGuildStageVoiceResult) {
    let obj2 = { style: tmp.activityInfoWrapper, children: null };
    let obj5 = { variant: "text-sm/semibold", style: tmp.activityInfoHeader, color: "text-default", children: null };
    const intl = stream(tmp3[35]).intl;
    let username = voiceState.nick;
    if (username == null) {
      username = voiceState.user.username;
    }
    const obj6 = { username };
    obj5.children = intl.format(stream(tmp3[35]).t.I0mOAs, obj6);
    const items3 = [closure_27(stream(tmp3[36]).Text, obj5), ];
    const obj7 = { style: tmp.previewImageWrapper, children: null };
    const tmp2Result = tmp2(tmp3[38]);
    const obj8 = { mode: context.mode, disabled: !stateFromStores1, stream, onPress: callback };
    obj7.children = closure_27(stream(tmp3[37]).VoicePanelStreamPreview, obj8);
    items3[1] = closure_27(tmp2(tmp3[38]), obj7);
    obj2.children = items3;
    let tmp11Result = closure_28(tmp2Result, obj2);
    const tmp2Result2 = tmp2(tmp3[38]);
  } else {
    tmp11Result = null;
  }
  return tmp11Result;
});
ReactCompilerGating = fn(558);
let closure_32 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelInfo(hasMembers) {
  const cResult = c.c(3);
  hasMembers = hasMembers.hasMembers;
  const tmp4 = closure_30();
  if (cResult[0] === hasMembers) {
    if (cResult[1] === tmp4) {
      let tmp5 = cResult[2];
    }
    return tmp5;
  }
  let tmp6 = null;
  if (!hasMembers) {
    const obj2 = { style: tmp4.channelInfoWrapper, children: null };
    const obj3 = { variant: "text-sm/medium", color: "text-default", style: tmp4.subheading, children: null };
    const intl = util.intl;
    obj3.children = intl.string(util.t.sS2J0G);
    obj2.children = closure_1_27(Text_Text.Text, obj3);
    tmp6 = closure_1_27(NativeViewDefault, obj2);
  }
  cResult[0] = hasMembers;
  cResult[1] = tmp4;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : (function ChannelInfo(hasMembers) {
  const tmp = closure_30();
  let tmp2 = null;
  if (!hasMembers.hasMembers) {
    const obj = { style: tmp.channelInfoWrapper, children: null };
    const obj2 = { variant: "text-sm/medium", color: "text-default", style: tmp.subheading, children: null };
    const intl = util.intl;
    obj2.children = intl.string(util.t.sS2J0G);
    obj.children = closure_1_27(Text_Text.Text, obj2);
    tmp2 = closure_1_27(NativeViewDefault, obj);
  }
  return tmp2;
}));
const __initData = { code: "function VoicePanelPreJoinContentTsx1(){const{windowDimensions}=this.__closure;return windowDimensions.get().width;}" };
const __initData2 = { code: "function VoicePanelPreJoinContentTsx2(width,previous){const{runOnJS,setActivityPreviewWidth,EDGE_GUTTER}=this.__closure;if(width===previous){return;}runOnJS(setActivityPreviewWidth)(width-(EDGE_GUTTER+16)*2);}" };
const __initData3 = { code: "function VoicePanelPreJoinContentTsx3(){const{windowDimensions}=this.__closure;return windowDimensions.get().width;}" };
const __initData4 = { code: "function VoicePanelPreJoinContentTsx4(width,previous){const{runOnJS,setActivityPreviewWidth,EDGE_GUTTER}=this.__closure;if(width===previous)return;runOnJS(setActivityPreviewWidth)(width-(EDGE_GUTTER+16)*2);}" };
ReactCompilerGating = fn(558);
let closure_37 = ReactCompilerGating.isReactCompilerEnabled() ? (function ActivityInfo(activity) {
  const cResult = activity(application[27]).c(52);
  activity = activity.activity;
  const analyticsLocations = activity.analyticsLocations;
  const tmp4 = closure_30();
  if (cResult[0] !== activity.applicationId) {
    const items = [activity.applicationId];
    cResult[0] = activity.applicationId;
    cResult[1] = items;
    let tmp5 = items;
  } else {
    tmp5 = cResult[1];
  }
  application = embeddedActivityJoinability(analyticsLocations(tmp2[39])(tmp5), 1)[0];
  if (cResult[2] !== activity.location) {
    const embeddedActivityLocationChannelId = tmp(tmp2[40]).getEmbeddedActivityLocationChannelId(activity.location);
    cResult[2] = activity.location;
    cResult[3] = embeddedActivityLocationChannelId;
    let tmp8 = embeddedActivityLocationChannelId;
    const tmpResult = tmp(tmp2[40]);
  } else {
    tmp8 = cResult[3];
  }
  const arr2 = analyticsLocations(application[41])(activity.applicationId, tmp8);
  const context = noop.useContext(tmp6(tmp2[28]));
  const channelId = context.channelId;
  const windowDimensions = context.windowDimensions;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function b() {
      return activity(first[42]).getWindowDimensions().width - 2 * (EDGE_GUTTER + 16);
    };
    cResult[4] = fn;
    let tmp11 = fn;
  } else {
    tmp11 = cResult[4];
  }
  let obj = activity(application[27]);
  [tmp13, tmp14] = embeddedActivityJoinability(noop.useState(tmp11), 2);
  asyncGeneratorStep = tmp14;
  const tmp7Result = embeddedActivityJoinability(noop.useState(tmp11), 2);
  class A {
    constructor() {
      return windowDimensions.get().width;
    }
  }
  A.__closure = { windowDimensions };
  A.__workletHash = 16837592262556;
  A.__initData = __initData;
  class T {
    constructor(arg0, arg1) {
      if (activity !== arg1) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[43]);
        tmp3 = closure_5;
        tmp4 = EDGE_GUTTER;
        num = 16;
        num2 = 2;
        tmp5 = obj.runOnJS(closure_5)(activity - 2 * (EDGE_GUTTER + 16));
      }
      return;
    }
  }
  const tmpResult3 = activity(application[43]);
  T.__closure = { runOnJS: activity(application[43]).runOnJS, setActivityPreviewWidth: tmp14, EDGE_GUTTER };
  T.__workletHash = 15273780609426;
  T.__initData = __initData2;
  const animatedReaction = tmpResult3.useAnimatedReaction(A, T);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const id = AuthenticationStore.getId();
    cResult[5] = id;
    let tmp16 = id;
  } else {
    tmp16 = cResult[5];
  }
  if (cResult[6] === application) {
    if (cResult[7] === channelId) {
      let tmp19 = cResult[8];
    }
    embeddedActivityJoinability = tmp(tmp2[44]).useEmbeddedActivityJoinability(tmp19);
    const tmp21 = embeddedActivityJoinability === tmp(tmp2[44]).EmbeddedActivityJoinability.CAN_JOIN;
    noop = tmp21;
    if (cResult[9] === activity.launchId) {
      if (cResult[10] === analyticsLocations) {
        if (cResult[11] === application) {
          if (cResult[12] === tmp21) {
            if (cResult[13] === channelId) {
              if (cResult[14] === embeddedActivityJoinability) {
                let tmp22 = cResult[15];
              }
              const _Symbol = Symbol;
              if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
                const items1 = ["embedded_background"];
                cResult[16] = items1;
                let tmp23 = items1;
              } else {
                tmp23 = cResult[16];
              }
              if (cResult[17] === activity.applicationId) {
                if (cResult[18] === tmp13) {
                  let tmp24 = cResult[19];
                }
                const tmp25 = tmp6(tmp2[46])(tmp24);
                if (null == application) {
                  return null;
                } else {
                  ({ activityInfoWrapper, activityInfoHeader } = tmp4);
                  if (cResult[20] !== arr2.length) {
                    const intl = tmp(tmp2[35]).intl;
                    const obj3 = { n: arr2.length };
                    const formatResult = intl.format(tmp(tmp2[35]).t["n/IJ6Y"], obj3);
                    cResult[20] = arr2.length;
                    class H {
                      constructor() {
                        obj = { embeddedActivityJoinability: closure_6, handleCanJoin: null };
                        tmp = analyticsLocations(closure_2[45]);
                        closure_0 = closure_5(function*() {
                          if (v3 === 2) {
                            v3 = 3;
                            throw new TypeError("Generator functions may not be called on executing generators");
                          } else if (tmp3 === 3) {
                            if (arg0 === 1) {
                              throw value;
                            } else if (arg0 === 2) {
                              const obj4 = { value, done: true };
                              return obj4;
                            } else {
                              return { value: "IconComponent", done: "+51" };
                            }
                          } else {
                            try {
                              v3 = 2;
                              if (0 === num3) {
                                num3 = 1;
                                if (arg0 === 1) {
                                  v3 = 3;
                                  throw value;
                                } else if (arg0 === 2) {
                                  v3 = 3;
                                  const obj5 = { value, done: true };
                                  return obj5;
                                } else if (closure_1_7) {
                                  if (null != inputApplication) {
                                    const obj6 = { channelId, applicationId: inputApplication.id, launchId: v3.launchId, inputApplication, analyticsLocations: num3 };
                                    v3 = num3;
                                    const obj7 = { value: v3(10923).maybeJoinEmbeddedActivity(obj6), done: false };
                                    return obj7;
                                  }
                                } else {
                                  const voiceChannel = analyticsLocations(5889).selectVoiceChannel(channelId);
                                  const obj2 = analyticsLocations(5889);
                                }
                              } else {
                                num3 = 1;
                                if (arg0 === 1) {
                                  v3 = 3;
                                  throw value;
                                } else if (arg0 === 2) {
                                  v3 = 3;
                                  const obj = { value, done: true };
                                  return obj;
                                }
                              }
                              v3 = 3;
                            } catch (tmp17) {
                              v3 = tmp;
                              throw tmp17;
                            }
                          }
                        });
                        obj.handleCanJoin = function handleCanJoin() {
                          const self = this;
                          const apply = closure_0.apply;
                          if (typeof apply === "unknown") {
                            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                          } else {
                            applyArgumentsResult = apply(self, arguments);
                          }
                          return applyArgumentsResult;
                        };
                        tmpResult = tmp(obj);
                        return;
                      }
                    }
                    cResult[21] = formatResult;
                    let tmp27 = formatResult;
                  } else {
                    tmp27 = cResult[21];
                  }
                  if (cResult[22] === tmp4.activityInfoHeader) {
                    if (cResult[23] === tmp27) {
                      let tmp29 = cResult[24];
                    }
                    if (cResult[25] !== tmp25) {
                      let obj5 = { imageBackground: tmp25, aspectRatio: 1.7777777777777777 };
                      cResult[25] = tmp25;
                      class H {
                        constructor() {
                          obj = { embeddedActivityJoinability: closure_6, handleCanJoin: null };
                          tmp = analyticsLocations(closure_2[45]);
                          closure_0 = closure_5(function*() {
                            if (v3 === 2) {
                              v3 = 3;
                              throw new TypeError("Generator functions may not be called on executing generators");
                            } else if (tmp3 === 3) {
                              if (arg0 === 1) {
                                throw value;
                              } else if (arg0 === 2) {
                                const obj4 = { value, done: true };
                                return obj4;
                              } else {
                                return { value: "IconComponent", done: "+51" };
                              }
                            } else {
                              try {
                                v3 = 2;
                                if (0 === num3) {
                                  num3 = 1;
                                  if (arg0 === 1) {
                                    v3 = 3;
                                    throw value;
                                  } else if (arg0 === 2) {
                                    v3 = 3;
                                    const obj5 = { value, done: true };
                                    return obj5;
                                  } else if (closure_1_7) {
                                    if (null != inputApplication) {
                                      const obj6 = { channelId, applicationId: inputApplication.id, launchId: v3.launchId, inputApplication, analyticsLocations: num3 };
                                      v3 = num3;
                                      const obj7 = { value: v3(10923).maybeJoinEmbeddedActivity(obj6), done: false };
                                      return obj7;
                                    }
                                  } else {
                                    const voiceChannel = analyticsLocations(5889).selectVoiceChannel(channelId);
                                    const obj2 = analyticsLocations(5889);
                                  }
                                } else {
                                  num3 = 1;
                                  if (arg0 === 1) {
                                    v3 = 3;
                                    throw value;
                                  } else if (arg0 === 2) {
                                    v3 = 3;
                                    const obj = { value, done: true };
                                    return obj;
                                  }
                                }
                                v3 = 3;
                              } catch (tmp17) {
                                v3 = tmp;
                                throw tmp17;
                              }
                            }
                          });
                          obj.handleCanJoin = function handleCanJoin() {
                            const self = this;
                            const apply = closure_0.apply;
                            if (typeof apply === "unknown") {
                              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                            } else {
                              applyArgumentsResult = apply(self, arguments);
                            }
                            return applyArgumentsResult;
                          };
                          tmpResult = tmp(obj);
                          return;
                        }
                      }
                      let tmp32 = closure_27(tmp6(tmp2[47]), obj5);
                      const tmp34 = closure_27(tmp6(tmp2[47]), obj5);
                    } else {
                      tmp32 = cResult[26];
                    }
                    if (cResult[27] === tmp4.previewImage) {
                      if (cResult[28] === tmp32) {
                        let tmp35 = cResult[29];
                      }
                      if (cResult[30] !== application.name) {
                        const intl2 = tmp(tmp2[35]).intl;
                        let obj6 = { name: application.name };
                        const formatToPlainStringResult = intl2.formatToPlainString(tmp(tmp2[35]).t["YV/hE8"], obj6);
                        cResult[30] = application.name;
                        class H {
                          constructor() {
                            obj = { embeddedActivityJoinability: closure_6, handleCanJoin: null };
                            tmp = analyticsLocations(closure_2[45]);
                            closure_0 = closure_5(function*() {
                              if (v3 === 2) {
                                v3 = 3;
                                throw new TypeError("Generator functions may not be called on executing generators");
                              } else if (tmp3 === 3) {
                                if (arg0 === 1) {
                                  throw value;
                                } else if (arg0 === 2) {
                                  const obj4 = { value, done: true };
                                  return obj4;
                                } else {
                                  return { value: "IconComponent", done: "+51" };
                                }
                              } else {
                                try {
                                  v3 = 2;
                                  if (0 === num3) {
                                    num3 = 1;
                                    if (arg0 === 1) {
                                      v3 = 3;
                                      throw value;
                                    } else if (arg0 === 2) {
                                      v3 = 3;
                                      const obj5 = { value, done: true };
                                      return obj5;
                                    } else if (closure_1_7) {
                                      if (null != inputApplication) {
                                        const obj6 = { channelId, applicationId: inputApplication.id, launchId: v3.launchId, inputApplication, analyticsLocations: num3 };
                                        v3 = num3;
                                        const obj7 = { value: v3(10923).maybeJoinEmbeddedActivity(obj6), done: false };
                                        return obj7;
                                      }
                                    } else {
                                      const voiceChannel = analyticsLocations(5889).selectVoiceChannel(channelId);
                                      const obj2 = analyticsLocations(5889);
                                    }
                                  } else {
                                    num3 = 1;
                                    if (arg0 === 1) {
                                      v3 = 3;
                                      throw value;
                                    } else if (arg0 === 2) {
                                      v3 = 3;
                                      const obj = { value, done: true };
                                      return obj;
                                    }
                                  }
                                  v3 = 3;
                                } catch (tmp17) {
                                  v3 = tmp;
                                  throw tmp17;
                                }
                              }
                            });
                            obj.handleCanJoin = function handleCanJoin() {
                              const self = this;
                              const apply = closure_0.apply;
                              if (typeof apply === "unknown") {
                                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                              } else {
                                applyArgumentsResult = apply(self, arguments);
                              }
                              return applyArgumentsResult;
                            };
                            tmpResult = tmp(obj);
                            return;
                          }
                        }
                        cResult[31] = formatToPlainStringResult;
                        let tmp38 = formatToPlainStringResult;
                      } else {
                        tmp38 = cResult[31];
                      }
                      if (cResult[32] !== application) {
                        const iconURL = application.getIconURL(20);
                        cResult[32] = application;
                        cResult[33] = iconURL;
                        class H {
                          constructor() {
                            obj = { embeddedActivityJoinability: closure_6, handleCanJoin: null };
                            tmp = analyticsLocations(closure_2[45]);
                            closure_0 = closure_5(function*() {
                              if (v3 === 2) {
                                v3 = 3;
                                throw new TypeError("Generator functions may not be called on executing generators");
                              } else if (tmp3 === 3) {
                                if (arg0 === 1) {
                                  throw value;
                                } else if (arg0 === 2) {
                                  const obj4 = { value, done: true };
                                  return obj4;
                                } else {
                                  return { value: "IconComponent", done: "+51" };
                                }
                              } else {
                                try {
                                  v3 = 2;
                                  if (0 === num3) {
                                    num3 = 1;
                                    if (arg0 === 1) {
                                      v3 = 3;
                                      throw value;
                                    } else if (arg0 === 2) {
                                      v3 = 3;
                                      const obj5 = { value, done: true };
                                      return obj5;
                                    } else if (closure_1_7) {
                                      if (null != inputApplication) {
                                        const obj6 = { channelId, applicationId: inputApplication.id, launchId: v3.launchId, inputApplication, analyticsLocations: num3 };
                                        v3 = num3;
                                        const obj7 = { value: v3(10923).maybeJoinEmbeddedActivity(obj6), done: false };
                                        return obj7;
                                      }
                                    } else {
                                      const voiceChannel = analyticsLocations(5889).selectVoiceChannel(channelId);
                                      const obj2 = analyticsLocations(5889);
                                    }
                                  } else {
                                    num3 = 1;
                                    if (arg0 === 1) {
                                      v3 = 3;
                                      throw value;
                                    } else if (arg0 === 2) {
                                      v3 = 3;
                                      const obj = { value, done: true };
                                      return obj;
                                    }
                                  }
                                  v3 = 3;
                                } catch (tmp17) {
                                  v3 = tmp;
                                  throw tmp17;
                                }
                              }
                            });
                            obj.handleCanJoin = function handleCanJoin() {
                              const self = this;
                              const apply = closure_0.apply;
                              if (typeof apply === "unknown") {
                                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                              } else {
                                applyArgumentsResult = apply(self, arguments);
                              }
                              return applyArgumentsResult;
                            };
                            tmpResult = tmp(obj);
                            return;
                          }
                        }
                      }
                      if (cResult[34] !== tmp40) {
                        let obj7 = { variant: "entity", source: null };
                        const size = { uri: tmp40, width: 20, height: 20 };
                        obj7.source = size;
                        const tmp44 = closure_27(tmp(tmp2[48]).Button.Icon, obj7);
                        class H {
                          constructor() {
                            obj = { embeddedActivityJoinability: closure_6, handleCanJoin: null };
                            tmp = analyticsLocations(closure_2[45]);
                            closure_0 = closure_5(function*() {
                              if (v3 === 2) {
                                v3 = 3;
                                throw new TypeError("Generator functions may not be called on executing generators");
                              } else if (tmp3 === 3) {
                                if (arg0 === 1) {
                                  throw value;
                                } else if (arg0 === 2) {
                                  const obj4 = { value, done: true };
                                  return obj4;
                                } else {
                                  return { value: "IconComponent", done: "+51" };
                                }
                              } else {
                                try {
                                  v3 = 2;
                                  if (0 === num3) {
                                    num3 = 1;
                                    if (arg0 === 1) {
                                      v3 = 3;
                                      throw value;
                                    } else if (arg0 === 2) {
                                      v3 = 3;
                                      const obj5 = { value, done: true };
                                      return obj5;
                                    } else if (closure_1_7) {
                                      if (null != inputApplication) {
                                        const obj6 = { channelId, applicationId: inputApplication.id, launchId: v3.launchId, inputApplication, analyticsLocations: num3 };
                                        v3 = num3;
                                        const obj7 = { value: v3(10923).maybeJoinEmbeddedActivity(obj6), done: false };
                                        return obj7;
                                      }
                                    } else {
                                      const voiceChannel = analyticsLocations(5889).selectVoiceChannel(channelId);
                                      const obj2 = analyticsLocations(5889);
                                    }
                                  } else {
                                    num3 = 1;
                                    if (arg0 === 1) {
                                      v3 = 3;
                                      throw value;
                                    } else if (arg0 === 2) {
                                      v3 = 3;
                                      const obj = { value, done: true };
                                      return obj;
                                    }
                                  }
                                  v3 = 3;
                                } catch (tmp17) {
                                  v3 = tmp;
                                  throw tmp17;
                                }
                              }
                            });
                            obj.handleCanJoin = function handleCanJoin() {
                              const self = this;
                              const apply = closure_0.apply;
                              if (typeof apply === "unknown") {
                                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                              } else {
                                applyArgumentsResult = apply(self, arguments);
                              }
                              return applyArgumentsResult;
                            };
                            tmpResult = tmp(obj);
                            return;
                          }
                        }
                        cResult[35] = tmp44;
                        let tmp42 = tmp44;
                      } else {
                        tmp42 = cResult[35];
                      }
                      if (cResult[36] === tmp22) {
                        if (cResult[37] === tmp38) {
                          if (cResult[38] === tmp42) {
                            let tmp45 = cResult[39];
                          }
                          if (cResult[40] === tmp4.joinButtonWrapper) {
                            if (cResult[41] === tmp45) {
                              let tmp49 = cResult[42];
                            }
                            if (cResult[43] === tmp22) {
                              if (cResult[44] === tmp4.previewImageWrapper) {
                                if (cResult[45] === tmp35) {
                                  if (cResult[46] === tmp49) {
                                    let tmp52 = cResult[47];
                                  }
                                  if (cResult[48] === tmp4.activityInfoWrapper) {
                                    if (cResult[49] === tmp29) {
                                      if (cResult[50] === tmp52) {
                                        let tmp55 = cResult[51];
                                      }
                                      return tmp55;
                                    }
                                  }
                                  const obj8 = { style: activityInfoWrapper, children: null };
                                  const items2 = [tmp29, ];
                                  class H {
                                    constructor() {
                                      obj = { embeddedActivityJoinability: closure_6, handleCanJoin: null };
                                      tmp = analyticsLocations(closure_2[45]);
                                      closure_0 = closure_5(function*() {
                                        if (v3 === 2) {
                                          v3 = 3;
                                          throw new TypeError("Generator functions may not be called on executing generators");
                                        } else if (tmp3 === 3) {
                                          if (arg0 === 1) {
                                            throw value;
                                          } else if (arg0 === 2) {
                                            const obj4 = { value, done: true };
                                            return obj4;
                                          } else {
                                            return { value: "IconComponent", done: "+51" };
                                          }
                                        } else {
                                          try {
                                            v3 = 2;
                                            if (0 === num3) {
                                              num3 = 1;
                                              if (arg0 === 1) {
                                                v3 = 3;
                                                throw value;
                                              } else if (arg0 === 2) {
                                                v3 = 3;
                                                const obj5 = { value, done: true };
                                                return obj5;
                                              } else if (closure_1_7) {
                                                if (null != inputApplication) {
                                                  const obj6 = { channelId, applicationId: inputApplication.id, launchId: v3.launchId, inputApplication, analyticsLocations: num3 };
                                                  v3 = num3;
                                                  const obj7 = { value: v3(10923).maybeJoinEmbeddedActivity(obj6), done: false };
                                                  return obj7;
                                                }
                                              } else {
                                                const voiceChannel = analyticsLocations(5889).selectVoiceChannel(channelId);
                                                const obj2 = analyticsLocations(5889);
                                              }
                                            } else {
                                              num3 = 1;
                                              if (arg0 === 1) {
                                                v3 = 3;
                                                throw value;
                                              } else if (arg0 === 2) {
                                                v3 = 3;
                                                const obj = { value, done: true };
                                                return obj;
                                              }
                                            }
                                            v3 = 3;
                                          } catch (tmp17) {
                                            v3 = tmp;
                                            throw tmp17;
                                          }
                                        }
                                      });
                                      obj.handleCanJoin = function handleCanJoin() {
                                        const self = this;
                                        const apply = closure_0.apply;
                                        if (typeof apply === "unknown") {
                                          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                                        } else {
                                          applyArgumentsResult = apply(self, arguments);
                                        }
                                        return applyArgumentsResult;
                                      };
                                      tmpResult = tmp(obj);
                                      return;
                                    }
                                  }
                                  obj8.children = items2;
                                  const tmp57 = closure_28(tmp6(tmp2[38]), obj8);
                                  cResult[48] = tmp4.activityInfoWrapper;
                                  cResult[49] = tmp29;
                                  cResult[50] = tmp52;
                                  cResult[51] = tmp57;
                                  tmp55 = tmp57;
                                }
                              }
                            }
                            const obj9 = { activeOpacity: 0.7, onPress: tmp22, style: tmp4.previewImageWrapper, accessible: false, children: null };
                            const items3 = [, ];
                            class H {
                              constructor() {
                                obj = { embeddedActivityJoinability: closure_6, handleCanJoin: null };
                                tmp = analyticsLocations(closure_2[45]);
                                closure_0 = closure_5(function*() {
                                  if (v3 === 2) {
                                    v3 = 3;
                                    throw new TypeError("Generator functions may not be called on executing generators");
                                  } else if (tmp3 === 3) {
                                    if (arg0 === 1) {
                                      throw value;
                                    } else if (arg0 === 2) {
                                      const obj4 = { value, done: true };
                                      return obj4;
                                    } else {
                                      return { value: "IconComponent", done: "+51" };
                                    }
                                  } else {
                                    try {
                                      v3 = 2;
                                      if (0 === num3) {
                                        num3 = 1;
                                        if (arg0 === 1) {
                                          v3 = 3;
                                          throw value;
                                        } else if (arg0 === 2) {
                                          v3 = 3;
                                          const obj5 = { value, done: true };
                                          return obj5;
                                        } else if (closure_1_7) {
                                          if (null != inputApplication) {
                                            const obj6 = { channelId, applicationId: inputApplication.id, launchId: v3.launchId, inputApplication, analyticsLocations: num3 };
                                            v3 = num3;
                                            const obj7 = { value: v3(10923).maybeJoinEmbeddedActivity(obj6), done: false };
                                            return obj7;
                                          }
                                        } else {
                                          const voiceChannel = analyticsLocations(5889).selectVoiceChannel(channelId);
                                          const obj2 = analyticsLocations(5889);
                                        }
                                      } else {
                                        num3 = 1;
                                        if (arg0 === 1) {
                                          v3 = 3;
                                          throw value;
                                        } else if (arg0 === 2) {
                                          v3 = 3;
                                          const obj = { value, done: true };
                                          return obj;
                                        }
                                      }
                                      v3 = 3;
                                    } catch (tmp17) {
                                      v3 = tmp;
                                      throw tmp17;
                                    }
                                  }
                                });
                                obj.handleCanJoin = function handleCanJoin() {
                                  const self = this;
                                  const apply = closure_0.apply;
                                  if (typeof apply === "unknown") {
                                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                                  } else {
                                    applyArgumentsResult = apply(self, arguments);
                                  }
                                  return applyArgumentsResult;
                                };
                                tmpResult = tmp(obj);
                                return;
                              }
                            }
                            items3[1] = tmp49;
                            obj9.children = items3;
                            const tmp54 = closure_28(tmp(tmp2[49]).PressableOpacity, obj9);
                            cResult[43] = tmp22;
                            cResult[44] = tmp4.previewImageWrapper;
                            cResult[45] = tmp35;
                            cResult[46] = tmp49;
                            cResult[47] = tmp54;
                            tmp52 = tmp54;
                          }
                          const obj10 = { style: tmp4.joinButtonWrapper, children: tmp45 };
                          const tmp51 = closure_27(tmp6(tmp2[38]), obj10);
                          class H {
                            constructor() {
                              obj = { embeddedActivityJoinability: closure_6, handleCanJoin: null };
                              tmp = analyticsLocations(closure_2[45]);
                              closure_0 = closure_5(function*() {
                                if (v3 === 2) {
                                  v3 = 3;
                                  throw new TypeError("Generator functions may not be called on executing generators");
                                } else if (tmp3 === 3) {
                                  if (arg0 === 1) {
                                    throw value;
                                  } else if (arg0 === 2) {
                                    const obj4 = { value, done: true };
                                    return obj4;
                                  } else {
                                    return { value: "IconComponent", done: "+51" };
                                  }
                                } else {
                                  try {
                                    v3 = 2;
                                    if (0 === num3) {
                                      num3 = 1;
                                      if (arg0 === 1) {
                                        v3 = 3;
                                        throw value;
                                      } else if (arg0 === 2) {
                                        v3 = 3;
                                        const obj5 = { value, done: true };
                                        return obj5;
                                      } else if (closure_1_7) {
                                        if (null != inputApplication) {
                                          const obj6 = { channelId, applicationId: inputApplication.id, launchId: v3.launchId, inputApplication, analyticsLocations: num3 };
                                          v3 = num3;
                                          const obj7 = { value: v3(10923).maybeJoinEmbeddedActivity(obj6), done: false };
                                          return obj7;
                                        }
                                      } else {
                                        const voiceChannel = analyticsLocations(5889).selectVoiceChannel(channelId);
                                        const obj2 = analyticsLocations(5889);
                                      }
                                    } else {
                                      num3 = 1;
                                      if (arg0 === 1) {
                                        v3 = 3;
                                        throw value;
                                      } else if (arg0 === 2) {
                                        v3 = 3;
                                        const obj = { value, done: true };
                                        return obj;
                                      }
                                    }
                                    v3 = 3;
                                  } catch (tmp17) {
                                    v3 = tmp;
                                    throw tmp17;
                                  }
                                }
                              });
                              obj.handleCanJoin = function handleCanJoin() {
                                const self = this;
                                const apply = closure_0.apply;
                                if (typeof apply === "unknown") {
                                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                                } else {
                                  applyArgumentsResult = apply(self, arguments);
                                }
                                return applyArgumentsResult;
                              };
                              tmpResult = tmp(obj);
                              return;
                            }
                          }
                          cResult[40] = tmp4.joinButtonWrapper;
                          cResult[41] = tmp45;
                          cResult[42] = tmp51;
                          tmp49 = tmp51;
                        }
                      }
                      class H {
                        constructor() {
                          obj = { embeddedActivityJoinability: closure_6, handleCanJoin: null };
                          tmp = analyticsLocations(closure_2[45]);
                          closure_0 = closure_5(function*() {
                            if (v3 === 2) {
                              v3 = 3;
                              throw new TypeError("Generator functions may not be called on executing generators");
                            } else if (tmp3 === 3) {
                              if (arg0 === 1) {
                                throw value;
                              } else if (arg0 === 2) {
                                const obj4 = { value, done: true };
                                return obj4;
                              } else {
                                return { value: "IconComponent", done: "+51" };
                              }
                            } else {
                              try {
                                v3 = 2;
                                if (0 === num3) {
                                  num3 = 1;
                                  if (arg0 === 1) {
                                    v3 = 3;
                                    throw value;
                                  } else if (arg0 === 2) {
                                    v3 = 3;
                                    const obj5 = { value, done: true };
                                    return obj5;
                                  } else if (closure_1_7) {
                                    if (null != inputApplication) {
                                      const obj6 = { channelId, applicationId: inputApplication.id, launchId: v3.launchId, inputApplication, analyticsLocations: num3 };
                                      v3 = num3;
                                      const obj7 = { value: v3(10923).maybeJoinEmbeddedActivity(obj6), done: false };
                                      return obj7;
                                    }
                                  } else {
                                    const voiceChannel = analyticsLocations(5889).selectVoiceChannel(channelId);
                                    const obj2 = analyticsLocations(5889);
                                  }
                                } else {
                                  num3 = 1;
                                  if (arg0 === 1) {
                                    v3 = 3;
                                    throw value;
                                  } else if (arg0 === 2) {
                                    v3 = 3;
                                    const obj = { value, done: true };
                                    return obj;
                                  }
                                }
                                v3 = 3;
                              } catch (tmp17) {
                                v3 = tmp;
                                throw tmp17;
                              }
                            }
                          });
                          obj.handleCanJoin = function handleCanJoin() {
                            const self = this;
                            const apply = closure_0.apply;
                            if (typeof apply === "unknown") {
                              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                            } else {
                              applyArgumentsResult = apply(self, arguments);
                            }
                            return applyArgumentsResult;
                          };
                          tmpResult = tmp(obj);
                          return;
                        }
                      }
                      tmp47[0] = tmp38;
                      tmp47[4] = tmp42;
                      tmp47[5] = tmp22;
                      const tmp48 = closure_27(tmp(tmp2[48]).Button, tmp47);
                      cResult[36] = tmp22;
                      cResult[37] = tmp38;
                      cResult[38] = tmp42;
                      cResult[39] = tmp48;
                      tmp45 = tmp48;
                    }
                    const obj11 = { style: tmp4.previewImage, children: null };
                    class H {
                      constructor() {
                        obj = { embeddedActivityJoinability: closure_6, handleCanJoin: null };
                        tmp = analyticsLocations(closure_2[45]);
                        closure_0 = closure_5(function*() {
                          if (v3 === 2) {
                            v3 = 3;
                            throw new TypeError("Generator functions may not be called on executing generators");
                          } else if (tmp3 === 3) {
                            if (arg0 === 1) {
                              throw value;
                            } else if (arg0 === 2) {
                              const obj4 = { value, done: true };
                              return obj4;
                            } else {
                              return { value: "IconComponent", done: "+51" };
                            }
                          } else {
                            try {
                              v3 = 2;
                              if (0 === num3) {
                                num3 = 1;
                                if (arg0 === 1) {
                                  v3 = 3;
                                  throw value;
                                } else if (arg0 === 2) {
                                  v3 = 3;
                                  const obj5 = { value, done: true };
                                  return obj5;
                                } else if (closure_1_7) {
                                  if (null != inputApplication) {
                                    const obj6 = { channelId, applicationId: inputApplication.id, launchId: v3.launchId, inputApplication, analyticsLocations: num3 };
                                    v3 = num3;
                                    const obj7 = { value: v3(10923).maybeJoinEmbeddedActivity(obj6), done: false };
                                    return obj7;
                                  }
                                } else {
                                  const voiceChannel = analyticsLocations(5889).selectVoiceChannel(channelId);
                                  const obj2 = analyticsLocations(5889);
                                }
                              } else {
                                num3 = 1;
                                if (arg0 === 1) {
                                  v3 = 3;
                                  throw value;
                                } else if (arg0 === 2) {
                                  v3 = 3;
                                  const obj = { value, done: true };
                                  return obj;
                                }
                              }
                              v3 = 3;
                            } catch (tmp17) {
                              v3 = tmp;
                              throw tmp17;
                            }
                          }
                        });
                        obj.handleCanJoin = function handleCanJoin() {
                          const self = this;
                          const apply = closure_0.apply;
                          if (typeof apply === "unknown") {
                            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                          } else {
                            applyArgumentsResult = apply(self, arguments);
                          }
                          return applyArgumentsResult;
                        };
                        tmpResult = tmp(obj);
                        return;
                      }
                    }
                    const tmp37 = closure_27(tmp6(tmp2[38]), obj11);
                    cResult[27] = tmp4.previewImage;
                    cResult[28] = tmp32;
                    cResult[29] = tmp37;
                    tmp35 = tmp37;
                  }
                  const obj12 = { variant: "text-sm/semibold", style: activityInfoHeader, color: "text-default", children: null };
                  class H {
                    constructor() {
                      obj = { embeddedActivityJoinability: closure_6, handleCanJoin: null };
                      tmp = analyticsLocations(closure_2[45]);
                      closure_0 = closure_5(function*() {
                        if (v3 === 2) {
                          v3 = 3;
                          throw new TypeError("Generator functions may not be called on executing generators");
                        } else if (tmp3 === 3) {
                          if (arg0 === 1) {
                            throw value;
                          } else if (arg0 === 2) {
                            const obj4 = { value, done: true };
                            return obj4;
                          } else {
                            return { value: "IconComponent", done: "+51" };
                          }
                        } else {
                          try {
                            v3 = 2;
                            if (0 === num3) {
                              num3 = 1;
                              if (arg0 === 1) {
                                v3 = 3;
                                throw value;
                              } else if (arg0 === 2) {
                                v3 = 3;
                                const obj5 = { value, done: true };
                                return obj5;
                              } else if (closure_1_7) {
                                if (null != inputApplication) {
                                  const obj6 = { channelId, applicationId: inputApplication.id, launchId: v3.launchId, inputApplication, analyticsLocations: num3 };
                                  v3 = num3;
                                  const obj7 = { value: v3(10923).maybeJoinEmbeddedActivity(obj6), done: false };
                                  return obj7;
                                }
                              } else {
                                const voiceChannel = analyticsLocations(5889).selectVoiceChannel(channelId);
                                const obj2 = analyticsLocations(5889);
                              }
                            } else {
                              num3 = 1;
                              if (arg0 === 1) {
                                v3 = 3;
                                throw value;
                              } else if (arg0 === 2) {
                                v3 = 3;
                                const obj = { value, done: true };
                                return obj;
                              }
                            }
                            v3 = 3;
                          } catch (tmp17) {
                            v3 = tmp;
                            throw tmp17;
                          }
                        }
                      });
                      obj.handleCanJoin = function handleCanJoin() {
                        const self = this;
                        const apply = closure_0.apply;
                        if (typeof apply === "unknown") {
                          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                        } else {
                          applyArgumentsResult = apply(self, arguments);
                        }
                        return applyArgumentsResult;
                      };
                      tmpResult = tmp(obj);
                      return;
                    }
                  }
                  const tmp31 = closure_27(tmp(tmp2[36]).Text, obj12);
                  cResult[22] = tmp4.activityInfoHeader;
                  cResult[23] = tmp27;
                  cResult[24] = tmp31;
                  tmp29 = tmp31;
                }
              }
              const obj13 = { applicationId: activity.applicationId, size: null, names: null };
              class H {
                constructor() {
                  obj = { embeddedActivityJoinability: closure_6, handleCanJoin: null };
                  tmp = analyticsLocations(closure_2[45]);
                  closure_0 = closure_5(function*() {
                    if (v3 === 2) {
                      v3 = 3;
                      throw new TypeError("Generator functions may not be called on executing generators");
                    } else if (tmp3 === 3) {
                      if (arg0 === 1) {
                        throw value;
                      } else if (arg0 === 2) {
                        const obj4 = { value, done: true };
                        return obj4;
                      } else {
                        return { value: "IconComponent", done: "+51" };
                      }
                    } else {
                      try {
                        v3 = 2;
                        if (0 === num3) {
                          num3 = 1;
                          if (arg0 === 1) {
                            v3 = 3;
                            throw value;
                          } else if (arg0 === 2) {
                            v3 = 3;
                            const obj5 = { value, done: true };
                            return obj5;
                          } else if (closure_1_7) {
                            if (null != inputApplication) {
                              const obj6 = { channelId, applicationId: inputApplication.id, launchId: v3.launchId, inputApplication, analyticsLocations: num3 };
                              v3 = num3;
                              const obj7 = { value: v3(10923).maybeJoinEmbeddedActivity(obj6), done: false };
                              return obj7;
                            }
                          } else {
                            const voiceChannel = analyticsLocations(5889).selectVoiceChannel(channelId);
                            const obj2 = analyticsLocations(5889);
                          }
                        } else {
                          num3 = 1;
                          if (arg0 === 1) {
                            v3 = 3;
                            throw value;
                          } else if (arg0 === 2) {
                            v3 = 3;
                            const obj = { value, done: true };
                            return obj;
                          }
                        }
                        v3 = 3;
                      } catch (tmp17) {
                        v3 = tmp;
                        throw tmp17;
                      }
                    }
                  });
                  obj.handleCanJoin = function handleCanJoin() {
                    const self = this;
                    const apply = closure_0.apply;
                    if (typeof apply === "unknown") {
                      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                    } else {
                      applyArgumentsResult = apply(self, arguments);
                    }
                    return applyArgumentsResult;
                  };
                  tmpResult = tmp(obj);
                  return;
                }
              }
              obj13.names = tmp23;
              cResult[17] = activity.applicationId;
              cResult[18] = tmp13;
              cResult[19] = obj13;
              tmp24 = obj13;
            }
          }
        }
      }
    }
    class H {
      constructor() {
        obj = { embeddedActivityJoinability: closure_6, handleCanJoin: null };
        tmp = analyticsLocations(closure_2[45]);
        closure_0 = closure_5(function*() {
          if (v3 === 2) {
            v3 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj4 = { value, done: true };
              return obj4;
            } else {
              return { value: "IconComponent", done: "+51" };
            }
          } else {
            try {
              v3 = 2;
              if (0 === num3) {
                num3 = 1;
                if (arg0 === 1) {
                  v3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  v3 = 3;
                  const obj5 = { value, done: true };
                  return obj5;
                } else if (closure_1_7) {
                  if (null != inputApplication) {
                    const obj6 = { channelId, applicationId: inputApplication.id, launchId: v3.launchId, inputApplication, analyticsLocations: num3 };
                    v3 = num3;
                    const obj7 = { value: v3(10923).maybeJoinEmbeddedActivity(obj6), done: false };
                    return obj7;
                  }
                } else {
                  const voiceChannel = analyticsLocations(5889).selectVoiceChannel(channelId);
                  const obj2 = analyticsLocations(5889);
                }
              } else {
                num3 = 1;
                if (arg0 === 1) {
                  v3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  v3 = 3;
                  const obj = { value, done: true };
                  return obj;
                }
              }
              v3 = 3;
            } catch (tmp17) {
              v3 = tmp;
              throw tmp17;
            }
          }
        });
        obj.handleCanJoin = function handleCanJoin() {
          const self = this;
          const apply = closure_0.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        };
        tmpResult = tmp(obj);
        return;
      }
    }
    cResult[9] = activity.launchId;
    cResult[10] = analyticsLocations;
    cResult[11] = application;
    cResult[12] = tmp21;
    cResult[13] = channelId;
    cResult[14] = embeddedActivityJoinability;
    cResult[15] = H;
    tmp22 = H;
    const tmpResult4 = tmp(tmp2[44]);
  }
  const obj14 = { userId: tmp16, channelId, application };
  cResult[6] = application;
  cResult[7] = channelId;
  cResult[8] = obj14;
  tmp19 = obj14;
  let obj2 = { runOnJS: activity(application[43]).runOnJS, setActivityPreviewWidth: tmp14, EDGE_GUTTER };
}) : (function ActivityInfo(activity) {
  activity = activity.activity;
  const analyticsLocations = activity.analyticsLocations;
  let application;
  embeddedActivityJoinability = undefined;
  noop = undefined;
  const tmp = closure_30();
  const items = [activity.applicationId];
  application = embeddedActivityJoinability(analyticsLocations(application[39])(items), 1)[0];
  const embeddedActivityLocationChannelId = activity(application[40]).getEmbeddedActivityLocationChannelId(activity.location);
  let obj2 = activity(application[40]);
  const context = noop.useContext(analyticsLocations(application[28]));
  const channelId = context.channelId;
  const windowDimensions = context.windowDimensions;
  const tmp7 = embeddedActivityJoinability(noop.useState(() => activity(first[42]).getWindowDimensions().width - 2 * (EDGE_GUTTER + 16)), 2);
  closure_5 = tmp9;
  const first1 = tmp7[0];
  const arr2 = analyticsLocations(application[41])(activity.applicationId, embeddedActivityLocationChannelId);
  const fn = function u() {
    return windowDimensions.get().width;
  };
  fn.__closure = { windowDimensions };
  fn.__workletHash = 5011127543326;
  fn.__initData = __initData3;
  const fn2 = function c(arg0, arg1) {
    if (arg0 !== arg1) {
      ReanimatedRexport.runOnJS(closure_5)(arg0 - 2 * (EDGE_GUTTER + 16));
    }
  };
  const obj3 = activity(application[43]);
  fn2.__closure = { runOnJS: activity(application[43]).runOnJS, setActivityPreviewWidth: tmp7[1], EDGE_GUTTER };
  fn2.__workletHash = 8964477880370;
  fn2.__initData = __initData4;
  const animatedReaction = obj3.useAnimatedReaction(fn, fn2);
  let obj = { runOnJS: activity(application[43]).runOnJS, setActivityPreviewWidth: tmp7[1], EDGE_GUTTER };
  let obj5 = activity(application[44]);
  embeddedActivityJoinability = obj5.useEmbeddedActivityJoinability({ userId: AuthenticationStore.getId(), channelId, application });
  const tmp12 = embeddedActivityJoinability === activity(application[44]).EmbeddedActivityJoinability.CAN_JOIN;
  noop = tmp12;
  const items1 = [activity.launchId, analyticsLocations, application, tmp12, channelId, embeddedActivityJoinability];
  const callback = noop.useCallback(() => {
    let obj = { embeddedActivityJoinability, handleCanJoin: null };
    closure_0 = closure_5(function*() {
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj4 = { value, done: true };
          return obj4;
        } else {
          return { value: "IconComponent", done: "+51" };
        }
      } else {
        try {
          v3 = 2;
          if (0 === num3) {
            num3 = 1;
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else if (closure_1_7) {
              if (null != inputApplication) {
                const obj6 = { channelId, applicationId: inputApplication.id, launchId: v3.launchId, inputApplication, analyticsLocations: num3 };
                v3 = num3;
                const obj7 = { value: v3(10923).maybeJoinEmbeddedActivity(obj6), done: false };
                return obj7;
              }
            } else {
              const voiceChannel = analyticsLocations(5889).selectVoiceChannel(channelId);
              const obj2 = analyticsLocations(5889);
            }
          } else {
            num3 = 1;
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              const obj = { value, done: true };
              return obj;
            }
          }
          v3 = 3;
        } catch (tmp17) {
          v3 = tmp;
          throw tmp17;
        }
      }
    });
    obj.handleCanJoin = function handleCanJoin() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    analyticsLocations(first[45])(obj);
  }, items1);
  let tmp16Result = null;
  if (null != application) {
    let obj6 = { style: tmp.activityInfoWrapper, children: null };
    let obj7 = { variant: "text-sm/semibold", style: tmp.activityInfoHeader, color: "text-default", children: null };
    const intl = tmp4(tmp3[35]).intl;
    const obj8 = { n: arr2.length };
    obj7.children = intl.format(tmp4(tmp3[35]).t["n/IJ6Y"], obj8);
    const items2 = [closure_27(tmp4(tmp3[36]).Text, obj7), ];
    const obj9 = { activeOpacity: 0.7, onPress: callback, style: tmp.previewImageWrapper, accessible: false, children: null };
    const obj10 = { style: tmp.previewImage, children: null };
    const tmp2Result = tmp2(tmp3[38]);
    const obj11 = { imageBackground: tmp14, aspectRatio: 1.7777777777777777 };
    obj10.children = closure_27(tmp2(tmp3[47]), obj11);
    const items3 = [closure_27(tmp2(tmp3[38]), obj10), ];
    const obj12 = { style: tmp.joinButtonWrapper, children: null };
    const tmp2Result3 = tmp2(tmp3[38]);
    const obj13 = { text: null, size: "sm", iconPosition: "start", variant: "primary-overlay", icon: null, onPress: null };
    const intl2 = tmp4(tmp3[35]).intl;
    const obj14 = { name: application.name };
    obj13.text = intl2.formatToPlainString(tmp4(tmp3[35]).t["YV/hE8"], obj14);
    const iconURL = application.getIconURL(20);
    const obj15 = { variant: "entity", source: null };
    const size = { uri: iconURL, width: 20, height: 20 };
    obj15.source = size;
    obj13.icon = closure_27(tmp4(tmp3[48]).Button.Icon, obj15);
    obj13.onPress = callback;
    obj12.children = closure_27(tmp4(tmp3[48]).Button, obj13);
    items3[1] = closure_27(tmp2(tmp3[38]), obj12);
    obj9.children = items3;
    items2[1] = closure_28(tmp4(tmp3[49]).PressableOpacity, obj9);
    obj6.children = items2;
    tmp16Result = closure_28(tmp2Result, obj6);
    const tmp2Result4 = tmp2(tmp3[38]);
  }
  return tmp16Result;
});
ReactCompilerGating = fn(558);
let closure_38 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function BlockedMembersWarning(ignoredUserIds) {
  const cResult = c.c(19);
  ({ channelId, blockedUserIds } = ignoredUserIds);
  const tmp4 = closure_30();
  if (cResult[0] !== blockedUserIds) {
    const _Array = Array;
    const arr = Array.from(blockedUserIds);
    cResult[0] = blockedUserIds;
    cResult[1] = arr;
    let tmp5 = arr;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === channelId) {
    if (cResult[3] === tmp5) {
      let tmp8 = cResult[4];
    }
    useTrackImpressionDefault(tmp8);
    const size = ignoredUserIds.ignoredUserIds.size;
    const size2 = blockedUserIds.size;
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = util.intl;
      const stringResult = intl.string(util.t.CjrALd);
      cResult[5] = stringResult;
      let tmp12 = stringResult;
    } else {
      tmp12 = cResult[5];
    }
    if (size2 > 0) {
      if (size > 0) {
        const _Symbol2 = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const intl4 = util.intl;
          const stringResult1 = intl4.string(util.t.MpRfpC);
          cResult[6] = stringResult1;
        }
      }
    }
    if (size > 0) {
      if (cResult[7] !== size) {
        const intl3 = util.intl;
        const obj2 = { n: size };
        const formatResult = intl3.format(util.t.u9trAZ, obj2);
        cResult[7] = size;
        cResult[8] = formatResult;
        let tmp16 = formatResult;
      } else {
        tmp16 = cResult[8];
      }
      let tmp14 = tmp16;
    } else if (cResult[9] !== size2) {
      const intl2 = util.intl;
      const obj3 = { n: size2 };
      const formatResult1 = intl2.format(util.t["6X29zb"], obj3);
      cResult[9] = size2;
      cResult[10] = formatResult1;
      tmp14 = formatResult1;
    } else {
      tmp14 = cResult[10];
    }
    const _Symbol3 = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp23 = closure_1_27(CircleErrorIcon.CircleErrorIcon, { color: "text-feedback-warning" });
      cResult[11] = tmp23;
      let tmp21 = tmp23;
    } else {
      tmp21 = cResult[11];
    }
    const _Symbol4 = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { flexShrink: 1 };
      cResult[12] = obj4;
      let tmp24 = obj4;
    } else {
      tmp24 = cResult[12];
    }
    const _Symbol5 = Symbol;
    if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
      let tmp26 = null;
      if (null != tmp12) {
        const obj5 = { variant: "heading-sm/semibold", children: tmp12 };
        tmp26 = closure_1_27(Text_Text.Text, obj5);
      }
      cResult[13] = tmp26;
      let tmp25 = tmp26;
    } else {
      tmp25 = cResult[13];
    }
    if (cResult[14] !== tmp14) {
      const obj6 = { variant: "text-sm/bold", color: "interactive-text-active", style: tmp24, children: null };
      const items = [tmp14, " ", tmp25];
      obj6.children = items;
      const tmp30 = closure_1_28(Text_Text.Text, obj6);
      cResult[14] = tmp14;
      cResult[15] = tmp30;
      let tmp28 = tmp30;
    } else {
      tmp28 = cResult[15];
    }
    if (cResult[16] === tmp4.blockedMemberWarning) {
      if (cResult[17] === tmp28) {
        let tmp31 = cResult[18];
      }
      return tmp31;
    }
    const obj7 = { style: tmp4.blockedMemberWarning, children: null };
    const items1 = [tmp21, tmp28];
    obj7.children = items1;
    const tmp33 = closure_1_28(NativeViewDefault, obj7);
    cResult[16] = tmp4.blockedMemberWarning;
    cResult[17] = tmp28;
    cResult[18] = tmp33;
    tmp31 = tmp33;
  }
  const obj8 = { name: discord_common_AnalyticsUtils.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING, properties: { channel_id: channelId, blocked_user_ids: tmp5, warning_surface: constants4.PRE_JOIN_SHEET } };
  cResult[2] = channelId;
  cResult[3] = tmp5;
  cResult[4] = obj8;
  tmp8 = obj8;
  const obj9 = { channel_id: channelId, blocked_user_ids: tmp5, warning_surface: constants4.PRE_JOIN_SHEET };
}) : (function BlockedMembersWarning(blockedUserIds) {
  blockedUserIds = blockedUserIds.blockedUserIds;
  ({ channelId, ignoredUserIds } = blockedUserIds);
  const obj = { name: null, properties: null };
  const tmp = closure_30();
  obj.name = discord_common_AnalyticsUtils.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING;
  const tmp4 = useTrackImpressionDefault;
  obj.properties = { channel_id: channelId, blocked_user_ids: Array.from(blockedUserIds), warning_surface: constants4.PRE_JOIN_SHEET };
  tmp4(obj);
  const size = ignoredUserIds.size;
  const size2 = blockedUserIds.size;
  const intl = util.intl;
  const stringResult = intl.string(util.t.CjrALd);
  if (size2 > 0) {
    if (size > 0) {
      const intl4 = util.intl;
      let stringResult1 = intl4.string(util.t.MpRfpC);
    }
    const obj3 = { style: tmp.blockedMemberWarning, children: null };
    const items = [closure_1_27(CircleErrorIcon.CircleErrorIcon, { color: "text-feedback-warning" }), ];
    const obj4 = { variant: "text-sm/bold", color: "interactive-text-active", style: { flexShrink: 1 }, children: null };
    const items1 = [stringResult1, " ", ];
    let tmp11Result = null;
    if (null != stringResult) {
      const obj5 = { variant: "heading-sm/semibold", children: stringResult };
      tmp11Result = closure_1_27(Text_Text.Text, obj5);
    }
    items1[2] = tmp11Result;
    obj4.children = items1;
    items[1] = closure_1_28(Text_Text.Text, obj4);
    obj3.children = items;
    return closure_1_28(NativeViewDefault, obj3);
  }
  if (size > 0) {
    const intl3 = util.intl;
    const obj6 = { n: size };
    stringResult1 = intl3.format(util.t.u9trAZ, obj6);
  } else {
    const intl2 = util.intl;
    const obj7 = { n: size2 };
    stringResult1 = intl2.format(util.t["6X29zb"], obj7);
  }
  const obj2 = { channel_id: channelId, blocked_user_ids: Array.from(blockedUserIds), warning_surface: constants4.PRE_JOIN_SHEET };
}));
ReactCompilerGating = fn(558);
let closure_39 = ReactCompilerGating.isReactCompilerEnabled() ? (function RoomMembersSection(arg0) {
  const cResult = c.c(7);
  ({ title, members, channelId, guildId } = arg0);
  if (cResult[0] === channelId) {
    if (cResult[1] === guildId) {
      if (cResult[2] === members) {
        let tmp2 = cResult[3];
      }
      if (cResult[4] === tmp2) {
        if (cResult[5] === title) {
          let tmp15 = cResult[6];
        }
        return tmp15;
      }
      const obj2 = { title, hasIcons: true, children: tmp2 };
      const tmp19 = closure_1_27(FormComponents.VoicePanelFormSection, obj2);
      cResult[4] = tmp2;
      cResult[5] = title;
      cResult[6] = tmp19;
      tmp15 = tmp19;
    }
  }
  const items = [];
  const iter = members[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp4 = nextResult;
    let user = UserStore.getUser(nextResult);
    let tmp7 = user;
    if (null != user) {
      let obj4 = { user: null, channelId: null, guildId: null, nick: null };
      obj4.user = tmp7;
      obj4.channelId = channelId;
      obj4.guildId = guildId;
      let obj3 = NicknameUtilsDefault;
      obj4.nick = obj3.getName(guildId, channelId, tmp7);
      let arr = items.push(closure_1_27(FormComponents.MemberRowItem, obj4, tmp4));
    }
    continue;
  }
  cResult[0] = channelId;
  cResult[1] = guildId;
  cResult[2] = members;
  cResult[3] = items;
  tmp2 = items;
}) : (function RoomMembersSection(title) {
  ({ members: require, channelId: importDefault, guildId: dependencyMap } = title);
  return closure_27(FormComponents.VoicePanelFormSection, {
    title: title.title,
    hasIcons: true,
    children: (() => {
      const items = [];
      const iter = dependencyMap[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp3 = nextResult;
        let user = UserStore.getUser(nextResult);
        let tmp6 = user;
        if (null != user) {
          let obj = { user: null, channelId: null, guildId: null, nick: null };
          obj.user = tmp6;
          obj.channelId = channelId;
          obj.guildId = guildId;
          let obj2 = NicknameUtilsDefault;
          obj.nick = obj2.getName(guildId, channelId, tmp6);
          let arr = items.push(closure_2_27(FormComponents.MemberRowItem, obj, tmp3));
        }
        continue;
      }
      return items;
    })()
  });
});
ReactCompilerGating = fn(558);
let closure_40 = ReactCompilerGating.isReactCompilerEnabled() ? (function RoomMembers(members) {
  const cResult = members(ignoredMembers[27]).c(33);
  members = members.members;
  ({ streamingMembers, blockedMembers } = members);
  ignoredMembers = members.ignoredMembers;
  const context = noop.useContext(blockedMembers(ignoredMembers[28]));
  const channelId = context.channelId;
  const guildId = context.guildId;
  const tmp5 = embeddedActivityJoinability(noop.useState(20), 2);
  const first = tmp5[0];
  embeddedActivityJoinability = tmp5[1];
  const sum = blockedMembers.size + ignoredMembers.size;
  const diff = members.length - sum;
  if (cResult[0] === blockedMembers) {
    if (cResult[1] === sum) {
      if (cResult[2] === channelId) {
        if (cResult[3] === ignoredMembers) {
          let tmp9 = cResult[4];
        }
        if (cResult[5] === channelId) {
          if (cResult[6] === streamingMembers) {
            if (cResult[10] === blockedMembers) {
              if (cResult[11] === channelId) {
                if (cResult[12] === guildId) {
                  let tmp17 = cResult[13];
                }
                if (cResult[14] === channelId) {
                  if (cResult[15] === guildId) {
                    if (cResult[16] === ignoredMembers) {
                      let tmp21 = cResult[17];
                    }
                    if (cResult[18] === blockedMembers) {
                      if (cResult[19] === sum) {
                        if (cResult[20] === channelId) {
                          if (cResult[21] === guildId) {
                            if (cResult[22] === ignoredMembers) {
                              if (cResult[23] === members) {
                                if (cResult[24] === diff) {
                                  if (cResult[25] === first) {
                                    let tmp25 = cResult[26];
                                  }
                                  if (cResult[27] === tmp9) {
                                    if (cResult[28] === tmp13) {
                                      if (cResult[29] === tmp17) {
                                        if (cResult[30] === tmp21) {
                                          if (cResult[31] === tmp25) {
                                            let tmp31 = cResult[32];
                                          }
                                          return tmp31;
                                        }
                                      }
                                    }
                                  }
                                  let obj2 = { children: null };
                                  let items = [tmp9, tmp13, tmp17, tmp21, tmp25];
                                  obj2.children = items;
                                  const tmp34 = closure_28(closure_29, obj2);
                                  cResult[27] = tmp9;
                                  cResult[28] = tmp13;
                                  cResult[29] = tmp17;
                                  cResult[30] = tmp21;
                                  cResult[31] = tmp25;
                                  cResult[32] = tmp34;
                                  tmp31 = tmp34;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                    let tmp27Result = diff > 0;
                    if (tmp27Result) {
                      if (0 === sum) {
                        const intl4 = tmp(tmp2[35]).intl;
                        let obj3 = { n: members.length };
                        let formatToPlainStringResult = intl4.formatToPlainString(tmp(tmp2[35]).t.vloEU7, obj3);
                      } else {
                        const intl3 = tmp(tmp2[35]).intl;
                        const obj4 = { n: diff };
                        formatToPlainStringResult = intl3.formatToPlainString(tmp(tmp2[35]).t.R0h4pE, obj4);
                      }
                      const obj5 = { hasIcons: true, title: formatToPlainStringResult, children: null };
                      const items1 = [
                        (() => {
                                              const items = [];
                                              for (const item10007 of members) {
                                                if (items.length >= first) {
                                                  obj.return();
                                                  break;
                                                } else {
                                                  let hasItem = blockedMembers.has(item10007.user.id);
                                                  if (!hasItem) {
                                                    hasItem = ignoredMembers.has(item10007.user.id);
                                                  }
                                                  if (!hasItem) {
                                                    let obj2 = { user: item10007.user, channelId, guildId, nick: null, showGameActivity: true };
                                                    let obj3 = NicknameUtilsDefault;
                                                    obj2.nick = obj3.getName(guildId, channelId, item10007.user);
                                                    let arr = items.push(closure_2_27(FormComponents.MemberRowItem, obj2, item10007.user.id));
                                                  }
                                                  continue;
                                                }
                                                return items;
                                              }
                                            })(),

                      ];
                      let tmp29 = diff > first;
                      if (tmp29) {
                        const obj6 = { label: null, onPress: null };
                        const intl5 = tmp(tmp2[35]).intl;
                        obj6.label = intl5.string(tmp(tmp2[35]).t.F4MCUO);
                        obj6.onPress = function onPress() {
                          return closure_6(first + 20);
                        };
                        tmp29 = closure_27(tmp(tmp2[55]).TableRow, obj6);
                      }
                      items1[1] = tmp29;
                      obj5.children = items1;
                      tmp27Result = closure_28(tmp(tmp2[53]).VoicePanelFormSection, obj5);
                    }
                    cResult[18] = blockedMembers;
                    cResult[19] = sum;
                    cResult[20] = channelId;
                    cResult[21] = guildId;
                    cResult[22] = ignoredMembers;
                    cResult[23] = members;
                    cResult[24] = diff;
                    cResult[25] = first;
                    cResult[26] = tmp27Result;
                    tmp25 = tmp27Result;
                  }
                }
                let tmp22 = ignoredMembers.size > 0;
                if (tmp22) {
                  const obj7 = { title: null, members: null, channelId: null, guildId: null };
                  const intl2 = tmp(tmp2[35]).intl;
                  const obj8 = { n: ignoredMembers.size };
                  obj7.title = intl2.formatToPlainString(tmp(tmp2[35]).t["/pXOCN"], obj8);
                  obj7.members = ignoredMembers;
                  obj7.channelId = channelId;
                  obj7.guildId = guildId;
                  tmp22 = closure_27(closure_39, obj7);
                }
                cResult[14] = channelId;
                cResult[15] = guildId;
                cResult[16] = ignoredMembers;
                cResult[17] = tmp22;
                tmp21 = tmp22;
              }
            }
            let tmp18 = blockedMembers.size > 0;
            if (tmp18) {
              const obj9 = { title: null, members: null, channelId: null, guildId: null };
              const intl = tmp(tmp2[35]).intl;
              const obj10 = { n: blockedMembers.size };
              obj9.title = intl.formatToPlainString(tmp(tmp2[35]).t.pGJ1Qy, obj10);
              obj9.members = blockedMembers;
              obj9.channelId = channelId;
              obj9.guildId = guildId;
              tmp18 = closure_27(closure_39, obj9);
            }
            cResult[10] = blockedMembers;
            cResult[11] = channelId;
            cResult[12] = guildId;
            cResult[13] = tmp18;
            tmp17 = tmp18;
          }
        }
        if (cResult[8] !== channelId) {
          const fn = function c(arg0) {
            const tmp = _slicedToArray(arg0, 2);
            return closure_2_27(closure_31, { channelId, voiceState: tmp[0], stream: tmp[1] }, tmp[1].ownerId);
          };
          cResult[8] = channelId;
          cResult[9] = fn;
          let tmp14 = fn;
        } else {
          tmp14 = cResult[9];
        }
        const mapped = streamingMembers.map(tmp14);
        cResult[5] = channelId;
        cResult[6] = streamingMembers;
        cResult[7] = mapped;
      }
    }
  }
  let tmp10 = sum > 0;
  if (tmp10) {
    const obj11 = { channelId, blockedUserIds: blockedMembers, ignoredUserIds: ignoredMembers };
    tmp10 = closure_27(closure_38, obj11);
  }
  cResult[0] = blockedMembers;
  cResult[1] = sum;
  cResult[2] = channelId;
  cResult[3] = ignoredMembers;
  cResult[4] = tmp10;
  tmp9 = tmp10;
  const obj = members(ignoredMembers[27]);
}) : (function RoomMembers(members) {
  members = members.members;
  ({ streamingMembers, blockedMembers } = members);
  const ignoredMembers = members.ignoredMembers;
  embeddedActivityJoinability = undefined;
  const context = noop.useContext(blockedMembers(ignoredMembers[28]));
  const channelId = context.channelId;
  const guildId = context.guildId;
  const tmp3 = embeddedActivityJoinability(noop.useState(20), 2);
  const first = tmp3[0];
  embeddedActivityJoinability = tmp3[1];
  const sum = blockedMembers.size + ignoredMembers.size;
  const diff = members.length - sum;
  let tmp9 = sum > 0;
  if (tmp9) {
    const obj = { channelId, blockedUserIds: blockedMembers, ignoredUserIds: ignoredMembers };
    tmp9 = closure_27(closure_38, obj);
  }
  const children = [
    tmp9,
    streamingMembers.map((item) => {
      [tmp, tmp2] = item;
      return closure_2_27(closure_31, { channelId, voiceState: tmp, stream: tmp2 }, tmp2.ownerId);
    }),
  ,
  ,

  ];
  let tmp12 = blockedMembers.size > 0;
  if (tmp12) {
    let obj2 = { title: null, members: null, channelId: null, guildId: null };
    const intl = members(tmp[35]).intl;
    let obj3 = { n: blockedMembers.size };
    obj2.title = intl.formatToPlainString(members(tmp[35]).t.pGJ1Qy, obj3);
    obj2.members = blockedMembers;
    obj2.channelId = channelId;
    obj2.guildId = guildId;
    tmp12 = closure_27(closure_39, obj2);
  }
  children[2] = tmp12;
  let tmp16 = ignoredMembers.size > 0;
  if (tmp16) {
    const obj4 = { title: null, members: null, channelId: null, guildId: null };
    const intl2 = members(tmp[35]).intl;
    const obj5 = { n: ignoredMembers.size };
    obj4.title = intl2.formatToPlainString(members(tmp[35]).t["/pXOCN"], obj5);
    obj4.members = ignoredMembers;
    obj4.channelId = channelId;
    obj4.guildId = guildId;
    tmp16 = closure_27(closure_39, obj4);
  }
  children[3] = tmp16;
  let tmp7Result = diff > 0;
  if (tmp7Result) {
    if (0 === sum) {
      const intl4 = tmp21(tmp[35]).intl;
      const obj6 = { n: members.length };
      let formatToPlainStringResult = intl4.formatToPlainString(tmp21(tmp[35]).t.vloEU7, obj6);
    } else {
      const intl3 = tmp21(tmp[35]).intl;
      const obj7 = { n: diff };
      formatToPlainStringResult = intl3.formatToPlainString(tmp21(tmp[35]).t.R0h4pE, obj7);
    }
    const obj8 = { hasIcons: true, title: formatToPlainStringResult, children: null };
    const items1 = [
      (() => {
          const items = [];
          for (const item10007 of members) {
            if (items.length >= first) {
              obj.return();
              break;
            } else {
              let hasItem = blockedMembers.has(item10007.user.id);
              if (!hasItem) {
                hasItem = ignoredMembers.has(item10007.user.id);
              }
              if (!hasItem) {
                let obj2 = { user: item10007.user, channelId, guildId, nick: null, showGameActivity: true };
                let obj3 = NicknameUtilsDefault;
                obj2.nick = obj3.getName(guildId, channelId, item10007.user);
                let arr = items.push(closure_2_27(FormComponents.MemberRowItem, obj2, item10007.user.id));
              }
              continue;
            }
            return items;
          }
        })(),

    ];
    let tmp23 = diff > first;
    if (tmp23) {
      const obj9 = { label: null, onPress: null };
      const intl5 = tmp21(tmp[35]).intl;
      obj9.label = intl5.string(tmp21(tmp[35]).t.F4MCUO);
      obj9.onPress = function onPress() {
        return closure_6(first + 20);
      };
      tmp23 = closure_27(tmp21(tmp[55]).TableRow, obj9);
    }
    items1[1] = tmp23;
    obj8.children = items1;
    tmp7Result = closure_28(members(tmp[53]).VoicePanelFormSection, obj8);
  }
  children[4] = tmp7Result;
  return closure_28(closure_29, { children });
});
ReactCompilerGating = fn(558);
let closure_41 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ConsoleConnectionPadding(channelId) {
  const cResult = channelId(576).c(7);
  channelId = channelId.channelId;
  const tmp4 = closure_30();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AuthenticationStore, GameConsoleStore, VoiceStateStore, SessionsStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function o() {
      const id = AuthenticationStore.getId();
      const voiceStateForSession = VoiceStateStore.getVoiceStateForSession(id, GameConsoleStore.getRemoteSessionId());
      const awaitingRemoteSessionInfo = GameConsoleStore.getAwaitingRemoteSessionInfo();
      channelId = undefined;
      if (awaitingRemoteSessionInfo != null) {
        channelId = awaitingRemoteSessionInfo.channelId;
      }
      let tmp6 = channelId === channelId;
      if (!tmp6) {
        let channelId1;
        if (voiceStateForSession != null) {
          channelId1 = voiceStateForSession.channelId;
        }
        let tmp8 = channelId1 === tmp5;
        if (tmp8) {
          let str;
          if (voiceStateForSession != null) {
            str = voiceStateForSession.sessionId;
          }
          if (str == null) {
            str = "";
          }
          tmp8 = null != SessionsStore.getSessionById(str);
        }
        tmp6 = tmp8;
      }
      return tmp6;
    };
    const items1 = [channelId];
    cResult[1] = channelId;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp11 = items1;
    let tmp10 = fn;
  } else {
    tmp10 = cResult[2];
    tmp11 = cResult[3];
  }
  const obj = channelId(576);
  const stateFromStores = channelId(504).useStateFromStores(first, tmp10, tmp11);
  if (cResult[4] === stateFromStores) {
    if (cResult[5] === tmp4) {
      let tmp13 = cResult[6];
    }
    return tmp13;
  }
  let tmp14 = null;
  if (stateFromStores) {
    const obj2 = { style: tmp4.consolePreJoinPadding };
    tmp14 = closure_27(NativeViewDefault, obj2);
  }
  cResult[4] = stateFromStores;
  cResult[5] = tmp4;
  cResult[6] = tmp14;
  tmp13 = tmp14;
  const tmpResult = channelId(504);
}) : (function ConsoleConnectionPadding(channelId) {
  channelId = channelId.channelId;
  const tmp = closure_30();
  const items = [AuthenticationStore, GameConsoleStore, VoiceStateStore, SessionsStore];
  const items1 = [channelId];
  let tmp3 = null;
  if (obj.useStateFromStores(items, () => {
    const id = AuthenticationStore.getId();
    const voiceStateForSession = VoiceStateStore.getVoiceStateForSession(id, GameConsoleStore.getRemoteSessionId());
    const awaitingRemoteSessionInfo = GameConsoleStore.getAwaitingRemoteSessionInfo();
    channelId = undefined;
    if (awaitingRemoteSessionInfo != null) {
      channelId = awaitingRemoteSessionInfo.channelId;
    }
    let tmp6 = channelId === channelId;
    if (!tmp6) {
      let channelId1;
      if (voiceStateForSession != null) {
        channelId1 = voiceStateForSession.channelId;
      }
      let tmp8 = channelId1 === tmp5;
      if (tmp8) {
        let str;
        if (voiceStateForSession != null) {
          str = voiceStateForSession.sessionId;
        }
        if (str == null) {
          str = "";
        }
        tmp8 = null != SessionsStore.getSessionById(str);
      }
      tmp6 = tmp8;
    }
    return tmp6;
  }, items1)) {
    const obj2 = { style: tmp.consolePreJoinPadding };
    tmp3 = closure_27(NativeViewDefault, obj2);
  }
  return tmp3;
}));
ReactCompilerGating = fn(558);
let closure_42 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function VoicePanelPreJoinContentInner(ignoredMembers) {
  const cResult = blockedMembers(channelId[27]).c(46);
  ({ members, streamingMembers, blockedMembers } = ignoredMembers);
  ignoredMembers = ignoredMembers.ignoredMembers;
  const activities = ignoredMembers.activities;
  const tmp4 = closure_30();
  const context = noop.useContext(ignoredMembers(channelId[28]));
  channelId = context.channelId;
  const guildId = context.guildId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function o() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    let tmp9 = fn;
  } else {
    tmp9 = cResult[2];
  }
  const obj = blockedMembers(channelId[27]);
  const stateFromStores = blockedMembers(channelId[29]).useStateFromStores(first, tmp9);
  const tmp11 = ignoredMembers(channelId[57])(stateFromStores);
  const tmpResult = blockedMembers(channelId[29]);
  const analyticsLocations = ignoredMembers(channelId[58])(tmp5(tmp2[59]).VOICE_PANEL_PRE_JOIN).analyticsLocations;
  if (cResult[3] === analyticsLocations) {
    if (cResult[4] === channelId) {
      if (cResult[5] === guildId) {
        let tmp13 = cResult[6];
        let tmp14 = cResult[7];
      }
      const effect = noop.useEffect(tmp13, tmp14);
      if (cResult[8] === blockedMembers) {
        if (cResult[9] === ignoredMembers) {
          if (cResult[10] === members) {
            const tmp20 = tmp5(tmp2[61])();
            closure_5 = tmp20;
            if (cResult[15] !== tmp20) {
              const fn3 = function x() {
                closure_5.lock();
                return () => {
                  closure_1_5.unlock();
                };
              };
              const items1 = [tmp20];
              cResult[15] = tmp20;
              cResult[16] = fn3;
              cResult[17] = items1;
              let tmp22 = items1;
              let tmp21 = fn3;
            } else {
              tmp21 = cResult[16];
              tmp22 = cResult[17];
            }
            const effect1 = noop.useEffect(tmp21, tmp22);
            if (cResult[18] !== members.length > 0) {
              const obj3 = { hasMembers: tmp24 };
              const tmp28 = closure_27(closure_32, obj3);
              cResult[18] = tmp24;
              cResult[19] = tmp28;
              let tmp25 = tmp28;
            } else {
              tmp25 = cResult[19];
            }
            if (cResult[20] === stateFromStores) {
              if (cResult[21] === tmp11) {
                if (cResult[22] === tmp4) {
                  let tmp29 = cResult[23];
                }
                if (cResult[24] === activities) {
                  if (cResult[25] === analyticsLocations) {
                    if (cResult[29] === blockedMembers) {
                      if (cResult[30] === ignoredMembers) {
                        if (cResult[31] === members) {
                          if (cResult[32] === streamingMembers) {
                            let tmp37 = cResult[33];
                          }
                          if (cResult[34] === tmp16) {
                            if (cResult[35] === guildId) {
                              let tmp41 = cResult[36];
                            }
                            if (cResult[37] !== channelId) {
                              const obj4 = { channelId };
                              const tmp48 = closure_27(closure_41, obj4);
                              cResult[37] = channelId;
                              cResult[38] = tmp48;
                              let tmp45 = tmp48;
                            } else {
                              tmp45 = cResult[38];
                            }
                            if (cResult[39] === tmp29) {
                              if (cResult[40] === tmp33) {
                                if (cResult[41] === tmp37) {
                                  if (cResult[42] === tmp41) {
                                    if (cResult[43] === tmp45) {
                                      if (cResult[44] === tmp25) {
                                        let tmp49 = cResult[45];
                                      }
                                      return tmp49;
                                    }
                                  }
                                }
                              }
                            }
                            const obj5 = { children: null };
                            const items2 = [tmp25, tmp29, tmp33, tmp37, tmp41, tmp45];
                            obj5.children = items2;
                            const tmp52 = closure_28(closure_29, obj5);
                            cResult[39] = tmp29;
                            cResult[40] = tmp33;
                            cResult[41] = tmp37;
                            cResult[42] = tmp41;
                            cResult[43] = tmp45;
                            cResult[44] = tmp25;
                            cResult[45] = tmp52;
                            tmp49 = tmp52;
                          }
                          let tmp43 = null != guildId;
                          if (tmp43) {
                            const obj6 = { members: tmp16, guildId };
                            tmp43 = closure_27(tmp5(tmp2[63]), obj6);
                          }
                          cResult[34] = tmp16;
                          cResult[35] = guildId;
                          cResult[36] = tmp43;
                          tmp41 = tmp43;
                        }
                      }
                    }
                    let tmp38 = members.length > 0 || blockedMembers.size > 0 || ignoredMembers.size > 0;
                    if (tmp38) {
                      const obj7 = { members, streamingMembers, blockedMembers, ignoredMembers };
                      tmp38 = closure_27(closure_40, obj7);
                    }
                    cResult[29] = blockedMembers;
                    cResult[30] = ignoredMembers;
                    cResult[31] = members;
                    cResult[32] = streamingMembers;
                    cResult[33] = tmp38;
                    tmp37 = tmp38;
                  }
                }
                if (cResult[27] !== analyticsLocations) {
                  const fn4 = function z(activity) {
                    return closure_2_27(closure_37, { activity, analyticsLocations }, activity.launchId);
                  };
                  cResult[27] = analyticsLocations;
                  cResult[28] = fn4;
                  let tmp34 = fn4;
                } else {
                  tmp34 = cResult[28];
                }
                const mapped = activities.map(tmp34);
                cResult[24] = activities;
                cResult[25] = analyticsLocations;
                cResult[26] = mapped;
              }
            }
            let tmp30 = null;
            if (tmp11) {
              const obj8 = { style: tmp4.optInChannelsContainer, channel: stateFromStores, analyticsSection: constants2.CHANNEL };
              tmp30 = closure_27(tmp5(tmp2[62]), obj8);
            }
            cResult[20] = stateFromStores;
            cResult[21] = tmp11;
            cResult[22] = tmp4;
            cResult[23] = tmp30;
            tmp29 = tmp30;
          }
        }
      }
      if (cResult[12] === blockedMembers) {
        if (cResult[13] === ignoredMembers) {
          let tmp17 = cResult[14];
        }
        const found = members.filter(tmp17);
        cResult[8] = blockedMembers;
        cResult[9] = ignoredMembers;
        cResult[10] = members;
        cResult[11] = found;
      }
      const fn2 = function w(user) {
        const hasItem = blockedMembers.has(user.user.id);
        let tmp2 = !hasItem;
        if (!hasItem) {
          tmp2 = !ignoredMembers.has(user.user.id);
        }
        return tmp2;
      };
      cResult[12] = blockedMembers;
      cResult[13] = ignoredMembers;
      cResult[14] = fn2;
      tmp17 = fn2;
    }
  }
  class E {
    constructor() {
      obj = closure_1(closure_2[60]);
      obj1 = { guild_id: guildId, channel_id: channelId, location_stack: analyticsLocations };
      trackResult = obj.track(AnalyticEvents.VIEW_VOICE_CHANNEL, obj1);
      return;
    }
  }
  const items3 = [channelId, guildId, analyticsLocations];
  cResult[3] = analyticsLocations;
  cResult[4] = channelId;
  cResult[5] = guildId;
  cResult[6] = E;
  cResult[7] = items3;
  tmp14 = items3;
  tmp13 = E;
  const tmp5Result = ignoredMembers(channelId[58]);
}) : (function VoicePanelPreJoinContentInner(members) {
  members = members.members;
  const blockedMembers = members.blockedMembers;
  const ignoredMembers = members.ignoredMembers;
  const activities = members.activities;
  const context = noop.useContext(blockedMembers(ignoredMembers[28]));
  const channelId = context.channelId;
  const guildId = context.guildId;
  const tmp = closure_30();
  const items = [ChannelStore];
  const stateFromStores = members(ignoredMembers[29]).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const obj = members(ignoredMembers[29]);
  const tmp6 = blockedMembers(ignoredMembers[57])(stateFromStores);
  const analyticsLocations = blockedMembers(ignoredMembers[58])(blockedMembers(ignoredMembers[59]).VOICE_PANEL_PRE_JOIN).analyticsLocations;
  const items1 = [channelId, guildId, analyticsLocations];
  const effect = noop.useEffect(() => {
    AnalyticsUtilsDefault.track(constants.VIEW_VOICE_CHANNEL, { guild_id: guildId, channel_id: channelId, location_stack: analyticsLocations });
  }, items1);
  const items2 = [members, blockedMembers, ignoredMembers];
  const memo = noop.useMemo(() => members.filter((user) => {
    const hasItem = set.has(user.user.id);
    let tmp2 = !hasItem;
    if (!hasItem) {
      tmp2 = !set2.has(user.user.id);
    }
    return tmp2;
  }), items2);
  const tmp10 = blockedMembers(ignoredMembers[61])();
  closure_6 = tmp10;
  const items3 = [tmp10];
  const effect1 = noop.useEffect(() => {
    closure_6.lock();
    return () => {
      closure_1_6.unlock();
    };
  }, items3);
  const items4 = [closure_27(closure_32, { hasMembers: members.length > 0 }), , , , , ];
  let tmp14Result = null;
  if (tmp6) {
    const obj3 = { style: tmp.optInChannelsContainer, channel: stateFromStores, analyticsSection: constants2.CHANNEL };
    tmp14Result = closure_27(tmp2(tmp3[62]), obj3);
  }
  items4[1] = tmp14Result;
  items4[2] = activities.map((activity) => closure_2_27(closure_37, { activity, analyticsLocations }, activity.launchId));
  let tmp14Result3 = members.length > 0 || blockedMembers.size > 0 || ignoredMembers.size > 0;
  if (tmp14Result3) {
    const obj4 = { members, streamingMembers: members.streamingMembers, blockedMembers, ignoredMembers };
    tmp14Result3 = closure_27(closure_40, obj4);
  }
  items4[3] = tmp14Result3;
  let tmp14Result4 = null != guildId;
  if (tmp14Result4) {
    const obj5 = { members: memo, guildId };
    tmp14Result4 = closure_27(tmp2(tmp3[63]), obj5);
  }
  const obj6 = { children: null };
  items4[4] = tmp14Result4;
  items4[5] = closure_27(closure_41, { channelId });
  obj6.children = items4;
  return closure_28(closure_29, obj6);
}));
const __initData5 = { code: "function VoicePanelPreJoinContentTsx5(){const{windowDimensions,roundToNearestPixel,controlsSpecs,safeArea,withSpring,transitionState,TransitionStates,interpolate,useReducedMotion,MODE_CHANGE_PHYSICS,runOnJS,transitionCleanUp}=this.__closure;const{height:windowHeight}=windowDimensions.get();return{paddingBottom:windowHeight-roundToNearestPixel(windowHeight*0.8)+controlsSpecs.get().height+safeArea.get().bottom,opacity:withSpring(transitionState===TransitionStates.YEETED?0:1),transform:[{translateY:withSpring(interpolate(!useReducedMotion.get()&&transitionState===TransitionStates.YEETED?1:0,[0,1],[0,400]),MODE_CHANGE_PHYSICS,\"respect-motion-settings\",function(t1){const finished=t1===undefined?false:t1;finished&&transitionState===TransitionStates.YEETED&&runOnJS(transitionCleanUp)();})}]};}" };
let closure_44 = { code: "function VoicePanelPreJoinContentTsx6(t1){const{transitionState,TransitionStates,runOnJS,transitionCleanUp}=this.__closure;const finished=t1===undefined?false:t1;finished&&transitionState===TransitionStates.YEETED&&runOnJS(transitionCleanUp)();}" };
const __initData6 = { code: "function VoicePanelPreJoinContentTsx7(){const{windowDimensions,roundToNearestPixel,controlsSpecs,safeArea,withSpring,transitionState,TransitionStates,interpolate,useReducedMotion,MODE_CHANGE_PHYSICS,runOnJS,transitionCleanUp}=this.__closure;const{height:windowHeight}=windowDimensions.get();return{paddingBottom:windowHeight-roundToNearestPixel(windowHeight*0.8)+controlsSpecs.get().height+safeArea.get().bottom,opacity:withSpring(transitionState===TransitionStates.YEETED?0:1),transform:[{translateY:withSpring(interpolate(!useReducedMotion.get()&&transitionState===TransitionStates.YEETED?1:0,[0,1],[0,400]),MODE_CHANGE_PHYSICS,'respect-motion-settings',function(finished=false){finished&&transitionState===TransitionStates.YEETED&&runOnJS(transitionCleanUp)();})}]};}" };
let closure_46 = { code: "function VoicePanelPreJoinContentTsx8(finished=false){const{transitionState,TransitionStates,runOnJS,transitionCleanUp}=this.__closure;finished&&transitionState===TransitionStates.YEETED&&runOnJS(transitionCleanUp)();}" };
ReactCompilerGating = fn(558);
let closure_47 = ReactCompilerGating.isReactCompilerEnabled() ? (function PreJoinTransitioner(transitionState) {
  const cResult = require("c").c(15);
  if (cResult[0] !== transitionState) {
    transitionState = transitionState.transitionState;
    importDefault = transitionState;
    const transitionCleanUp = transitionState.transitionCleanUp;
    _require = transitionCleanUp;
    const tmp9 = safeArea(transitionState, controlsSpecs);
    cResult[0] = transitionState;
    cResult[1] = tmp9;
    cResult[2] = transitionCleanUp;
    cResult[3] = transitionState;
    let tmp4 = tmp9;
    const tmp5 = transitionCleanUp;
    const tmp6 = transitionState;
  } else {
    tmp4 = cResult[1];
    _require = cResult[2];
    importDefault = cResult[3];
  }
  const tmp10 = closure_30();
  const context = noop.useContext(require("VoicePanelStateContext"));
  windowDimensions = context.windowDimensions;
  controlsSpecs = context.controlsSpecs;
  safeArea = context.safeArea;
  const preJoinContentSize = context.preJoinContentSize;
  const useReducedMotion = context.useReducedMotion;
  let obj = require("c");
  const tmp11 = importDefault;
  let fn = function p() {
    const height = windowDimensions.get().height;
    let obj = { paddingBottom: null, opacity: null, transform: null };
    const diff = height - roundToNearestPixelDefault(0.8 * height);
    const sum = diff + controlsSpecs.get().height;
    obj.paddingBottom = sum + safeArea.get().bottom;
    let num = 1;
    let num2 = 1;
    if (transitionState === native.TransitionStates.YEETED) {
      num2 = 0;
    }
    obj.opacity = spring.withSpring(num2);
    const tmp4Result = spring;
    if (useReducedMotion.get()) {
      num = 0;
    }
    const obj3 = { translateY: null };
    const tmp4Result2 = ReanimatedRexport;
    const fn = function n(arg0) {
      let tmp = undefined !== arg0 && arg0;
      if (tmp) {
        tmp = transitionState === closure_0(windowDimensions[65]).TransitionStates.YEETED;
      }
      if (tmp) {
        closure_0(windowDimensions[43]).runOnJS(transitionCleanUp)();
        const obj = closure_0(windowDimensions[43]);
      }
    };
    const interpolateResult = ReanimatedRexport.interpolate(num, [0, 1], [0, 400]);
    fn.__closure = { transitionState, TransitionStates: native.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, transitionCleanUp };
    fn.__workletHash = 10937921490250;
    fn.__initData = __initData;
    obj3.translateY = tmp4Result.withSpring(interpolateResult, MODE_CHANGE_PHYSICS, "respect-motion-settings", fn);
    const items = [obj3];
    obj.transform = items;
    return obj;
  };
  const tmpResult = require("ReanimatedRexport");
  fn.__closure = { windowDimensions, roundToNearestPixel: require("roundToNearestPixel"), controlsSpecs, safeArea, withSpring: require("spring").withSpring, transitionState: tmp6, TransitionStates: require("native").TransitionStates, interpolate: require("ReanimatedRexport").interpolate, useReducedMotion, MODE_CHANGE_PHYSICS, runOnJS: require("ReanimatedRexport").runOnJS, transitionCleanUp: tmp5 };
  fn.__workletHash = 2263333956491;
  fn.__initData = __initData5;
  const animatedStyle = tmpResult.useAnimatedStyle(fn);
  if (cResult[4] !== preJoinContentSize) {
    class S {
      constructor(arg0) {
        result = preJoinContentSize.set(closure_1(closure_2[56])(transitionState.nativeEvent.layout.height));
        return;
      }
    }
    cResult[4] = preJoinContentSize;
    cResult[5] = S;
  } else {
    class S {
      constructor(arg0) {
        result = preJoinContentSize.set(closure_1(closure_2[56])(transitionState.nativeEvent.layout.height));
        return;
      }
    }
  }
  if (cResult[6] !== tmp4) {
    class S {
      constructor(arg0) {
        result = preJoinContentSize.set(closure_1(closure_2[56])(transitionState.nativeEvent.layout.height));
        return;
      }
    }
    let obj3 = {};
    const merged = Object.assign(tmp4);
    const tmp20 = closure_27(closure_42, obj3);
    cResult[6] = tmp4;
    cResult[7] = tmp20;
  } else {
    class S {
      constructor(arg0) {
        result = preJoinContentSize.set(closure_1(closure_2[56])(transitionState.nativeEvent.layout.height));
        return;
      }
    }
  }
  if (cResult[8] === S) {
    class S {
      constructor(arg0) {
        result = preJoinContentSize.set(closure_1(closure_2[56])(transitionState.nativeEvent.layout.height));
        return;
      }
    }
  }
  let obj2 = { windowDimensions, roundToNearestPixel: require("roundToNearestPixel"), controlsSpecs, safeArea, withSpring: require("spring").withSpring, transitionState: tmp6, TransitionStates: require("native").TransitionStates, interpolate: require("ReanimatedRexport").interpolate, useReducedMotion, MODE_CHANGE_PHYSICS, runOnJS: require("ReanimatedRexport").runOnJS, transitionCleanUp: tmp5 };
  const obj4 = { onLayout: S, collapsable: false, style: tmp10.contentWrapper, children: tmp15 };
  cResult[8] = S;
  cResult[9] = tmp10.contentWrapper;
  cResult[10] = tmp15;
  cResult[11] = closure_27(tmp11(windowDimensions[38]), { onLayout: S, collapsable: false, style: tmp10.contentWrapper, children: tmp15 });
  const tmp21 = closure_27(tmp11(windowDimensions[38]), { onLayout: S, collapsable: false, style: tmp10.contentWrapper, children: tmp15 });
}) : (function PreJoinTransitioner(transitionState) {
  transitionState = transitionState.transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  const merged = Object.assign(transitionState, Object.assign({ transitionState: 0, transitionCleanUp: 0 }));
  let windowDimensions;
  const context = noop.useContext(transitionCleanUp(windowDimensions[28]));
  windowDimensions = context.windowDimensions;
  const controlsSpecs = context.controlsSpecs;
  const safeArea = context.safeArea;
  const preJoinContentSize = context.preJoinContentSize;
  const useReducedMotion = context.useReducedMotion;
  const tmp2 = closure_30();
  let fn = function s() {
    const height = windowDimensions.get().height;
    let obj = { paddingBottom: null, opacity: null, transform: null };
    const diff = height - roundToNearestPixelDefault(0.8 * height);
    const sum = diff + controlsSpecs.get().height;
    obj.paddingBottom = sum + safeArea.get().bottom;
    let num = 1;
    let num2 = 1;
    if (transitionState === native.TransitionStates.YEETED) {
      num2 = 0;
    }
    obj.opacity = spring.withSpring(num2);
    const tmp4Result = spring;
    if (useReducedMotion.get()) {
      num = 0;
    }
    const obj3 = { translateY: null };
    const tmp4Result2 = ReanimatedRexport;
    const fn = function o() {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = false;
      }
      if (flag) {
        flag = closure_1_0 === transitionState(windowDimensions[65]).TransitionStates.YEETED;
      }
      if (flag) {
        transitionState(windowDimensions[43]).runOnJS(transitionCleanUp)();
        const obj = transitionState(windowDimensions[43]);
      }
    };
    const interpolateResult = ReanimatedRexport.interpolate(num, [0, 1], [0, 400]);
    fn.__closure = { transitionState, TransitionStates: native.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, transitionCleanUp };
    fn.__workletHash = 7334812912765;
    fn.__initData = __initData;
    obj3.translateY = tmp4Result.withSpring(interpolateResult, MODE_CHANGE_PHYSICS, "respect-motion-settings", fn);
    const items = [obj3];
    obj.transform = items;
    return obj;
  };
  let obj = transitionState(windowDimensions[43]);
  fn.__closure = { windowDimensions, roundToNearestPixel: transitionCleanUp(windowDimensions[56]), controlsSpecs, safeArea, withSpring: transitionState(windowDimensions[64]).withSpring, transitionState, TransitionStates: transitionState(windowDimensions[65]).TransitionStates, interpolate: transitionState(windowDimensions[43]).interpolate, useReducedMotion, MODE_CHANGE_PHYSICS, runOnJS: transitionState(windowDimensions[43]).runOnJS, transitionCleanUp };
  fn.__workletHash = 11166098778384;
  fn.__initData = __initData6;
  let items = [preJoinContentSize];
  const animatedStyle = obj.useAnimatedStyle(fn);
  const callback = noop.useCallback((nativeEvent) => {
    const result = preJoinContentSize.set(roundToNearestPixelDefault(nativeEvent.nativeEvent.layout.height));
  }, items);
  let obj3 = { style: animatedStyle, collapsable: false, children: null };
  let obj2 = { windowDimensions, roundToNearestPixel: transitionCleanUp(windowDimensions[56]), controlsSpecs, safeArea, withSpring: transitionState(windowDimensions[64]).withSpring, transitionState, TransitionStates: transitionState(windowDimensions[65]).TransitionStates, interpolate: transitionState(windowDimensions[43]).interpolate, useReducedMotion, MODE_CHANGE_PHYSICS, runOnJS: transitionState(windowDimensions[43]).runOnJS, transitionCleanUp };
  const obj4 = { onLayout: callback, collapsable: false, style: tmp2.contentWrapper, children: null };
  const obj5 = {};
  const tmp6 = transitionCleanUp(windowDimensions[66]);
  const merged1 = Object.assign(merged);
  obj4.children = closure_27(closure_42, obj5);
  obj3.children = closure_27(transitionCleanUp(windowDimensions[38]), obj4);
  return closure_27(tmp6, obj3);
});
ReactCompilerGating = fn(558);
let obj7 = { display: "flex", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.xs, borderColor: nativeDefault.colors.ICON_FEEDBACK_WARNING, borderWidth: 1, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING, marginHorizontal: nativeDefault.space.PX_16 };
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/prejoin/VoicePanelPreJoinContent.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function VoicePanelPreJoinWrapper() {
  const cResult = channelId(576).c(8);
  const context = noop.useContext(guildId(11969));
  channelId = context.channelId;
  guildId = context.guildId;
  const tmp5 = guildId(17724)(channelId);
  dependencyMap = tmp5;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [SortedVoiceStateStore, VoiceChannelBlockedUserStore, EmbeddedActivitiesStore, MediaEngineStore, ApplicationStreamingStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channelId) {
    if (cResult[2] === tmp5) {
      if (cResult[3] === guildId) {
        let tmp12 = cResult[4];
        let tmp13 = cResult[5];
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp12, tmp13, tmp(17838).areVoicePanelPreJoinContentPropsEqual);
      if (cResult[6] !== stateFromStores) {
        const obj2 = { item: stateFromStores, renderItem };
        const tmp22 = closure_27(tmp(4827).TransitionItem, obj2);
        cResult[6] = stateFromStores;
        cResult[7] = tmp22;
        let tmp19 = tmp22;
      } else {
        tmp19 = cResult[7];
      }
      return tmp19;
    }
  }
  const fn = function t() {
    if (!closure_2) {
      voiceStatesForChannelAlt = voiceStatesForChannelAlt.getVoiceStatesForChannelAlt(tmp2, guildId);
      const blockedUsersForVoiceChannel = authStore.getBlockedUsersForVoiceChannel(tmp2);
      const ignoredUsersForVoiceChannel = authStore.getIgnoredUsersForVoiceChannel(tmp2);
      embeddedActivitiesForChannel = embeddedActivitiesForChannel.getEmbeddedActivitiesForChannel(tmp2);
      const obj = {
        members: voiceStatesForChannelAlt,
        activities: embeddedActivitiesForChannel,
        streamingMembers: (() => {
            const items = [];
            if (MediaEngineStore.supports(Features.VIDEO)) {
              const iter = voiceStatesForChannelAlt[Symbol.iterator]();
              const nextResult = iter.next();
              while (iter !== undefined) {
                let tmp7 = nextResult;
                if (nextResult.voiceState.selfStream) {
                  let streamForUser = ApplicationStreamingStore.getStreamForUser(tmp7.user.id, guildId);
                  if (null != streamForUser) {
                    let items1 = [tmp7, ];
                    items1[1] = tmp12;
                    let arr = items.push(items1);
                  }
                }
                continue;
              }
              return items;
            } else {
              return items;
            }
          })(),
        blockedMembers: blockedUsersForVoiceChannel,
        ignoredMembers: ignoredUsersForVoiceChannel
      };
      return obj;
    }
  };
  let items1 = [tmp5, channelId, guildId];
  cResult[1] = channelId;
  cResult[2] = tmp5;
  cResult[3] = guildId;
  cResult[4] = fn;
  cResult[5] = items1;
  tmp13 = items1;
  tmp12 = fn;
  let obj = channelId(576);
}) : (function VoicePanelPreJoinWrapper() {
  const context = noop.useContext(guildId(11969));
  const channelId = context.channelId;
  guildId = context.guildId;
  const tmp2 = guildId(17724)(channelId);
  dependencyMap = tmp2;
  let items = [SortedVoiceStateStore, VoiceChannelBlockedUserStore, EmbeddedActivitiesStore, MediaEngineStore, ApplicationStreamingStore];
  let items1 = [tmp2, channelId, guildId];
  const stateFromStores = channelId(504).useStateFromStores(items, () => {
    if (!closure_2) {
      voiceStatesForChannelAlt = voiceStatesForChannelAlt.getVoiceStatesForChannelAlt(tmp2, guildId);
      const blockedUsersForVoiceChannel = authStore.getBlockedUsersForVoiceChannel(tmp2);
      const ignoredUsersForVoiceChannel = authStore.getIgnoredUsersForVoiceChannel(tmp2);
      embeddedActivitiesForChannel = embeddedActivitiesForChannel.getEmbeddedActivitiesForChannel(tmp2);
      const obj = {
        members: voiceStatesForChannelAlt,
        activities: embeddedActivitiesForChannel,
        streamingMembers: (() => {
            const items = [];
            if (MediaEngineStore.supports(Features.VIDEO)) {
              const iter = voiceStatesForChannelAlt[Symbol.iterator]();
              const nextResult = iter.next();
              while (iter !== undefined) {
                let tmp7 = nextResult;
                if (nextResult.voiceState.selfStream) {
                  let streamForUser = ApplicationStreamingStore.getStreamForUser(tmp7.user.id, guildId);
                  if (null != streamForUser) {
                    let items1 = [tmp7, ];
                    items1[1] = tmp12;
                    let arr = items.push(items1);
                  }
                }
                continue;
              }
              return items;
            } else {
              return items;
            }
          })(),
        blockedMembers: blockedUsersForVoiceChannel,
        ignoredMembers: ignoredUsersForVoiceChannel
      };
      return obj;
    }
  }, items1, channelId(17838).areVoicePanelPreJoinContentPropsEqual);
  return closure_27(channelId(4827).TransitionItem, { item: stateFromStores, renderItem });
}));