// discord_app/modules/voice_panel/native/prejoin/VoicePanelPreJoinContent.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl6 from "../../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import discord_common_AnalyticsUtils from "../../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import CircleErrorIcon from "../../../../design/components/Icon/native/redesign/generated/CircleErrorIcon.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Constants2 from "../../../../../discord_common/js/packages/media-engine/Constants.tsx";
import StreamKeyUtils from "../../../go_live/utils/StreamKeyUtils.tsx";
import StreamActionCreators from "../../../../actions/StreamActionCreators.tsx";
import NicknameUtilsDefault from "../../../../utils/NicknameUtils.tsx";
import SelectedChannelActionCreatorsDefault from "../../../../actions/SelectedChannelActionCreators.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import NativeViewDefault from "../../../core/native/NativeView.tsx";
import StageChannelModalActionCreators from "../../../stage_channels/StageChannelModalActionCreators.tsx";
import useTrackImpressionDefault from "../../../app_analytics/useTrackImpression.tsx";
import FormComponents from "../shared/FormComponents.tsx";
import roundToNearestPixelDefault from "../utils/roundToNearestPixel.tsx";
import VoicePanelConstants from "../../VoicePanelConstants.tsx";
import VoicePanelCardConstants from "../card/VoicePanelCardConstants.tsx";
import calculateVoicePanelHeaderSpecs from "../header/calculateVoicePanelHeaderSpecs.tsx";
import SharedSpaceWarningConstants from "../../../shared_space_warnings/SharedSpaceWarningConstants.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import _asyncToGenerator_mod from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../../_runtime/00019_react.js";
import EmbeddedActivitiesStore from "../../../activities/EmbeddedActivitiesStore.tsx";
import GameConsoleStore from "../../../game_console/GameConsoleStore.tsx";
import VoiceChannelBlockedUserStore from "../../../shared_space_warnings/VoiceChannelBlockedUserStore.tsx";
import ApplicationStreamingStore from "../../../../stores/ApplicationStreamingStore.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import MediaEngineStore from "../../../../stores/MediaEngineStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import SessionsStore from "../../../../stores/SessionsStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import VoiceStateStore from "../../../../stores/VoiceStateStore.tsx";
import SortedVoiceStateStore from "../../../../stores/views/SortedVoiceStateStore.tsx";
import Constants from "../../../../Constants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require,
  activity,
  dependencyMap,
  embeddedActivitiesForChannel,
  embeddedActivityJoinability,
  hasMembers,
  importDefault,
  lockResult;

let closure_22;
let closure_23;
let closure_24;
let closure_27;
let closure_28;
let closure_29;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
function renderItem(arg0, arg1, transitionState, transitionCleanUp) {
  const obj = { transitionState, transitionCleanUp };
  const merged = Object.assign(arg1);
  return closure_27(closure_47, obj, arg0);
}
let closure_3 = ["transitionState", "transitionCleanUp"];
let _asyncToGenerator = _asyncToGenerator_mod;
let react = react_mod;
const StyleSheet = react_native.StyleSheet;
const MODE_CHANGE_PHYSICS = VoicePanelConstants.MODE_CHANGE_PHYSICS;
const EDGE_GUTTER = VoicePanelCardConstants.EDGE_GUTTER;
({ AnalyticEvents: closure_22, AnalyticsSections: closure_23, Permissions: closure_24 } = Constants);
const constants4 = SharedSpaceWarningConstants.VoiceChannelWarningSurfaces;
const Features = Constants2.Features;
({ jsx: closure_27, jsxs: closure_28, Fragment: closure_29 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  contentWrapper: obj2,
  channelInfoWrapper: { paddingHorizontal: 16 },
  subheading: { textAlign: "center", paddingTop: 16, paddingBottom: 16 },
  previewImageWrapper: obj3,
  previewImage: obj4,
  activityInfoWrapper: { paddingHorizontal: 16 },
  activityInfoHeader: { marginBottom: 8 },
  joinButtonWrapper: obj5,
  optInChannelsContainer: { marginHorizontal: 16 },
  blockedMemberWarning: obj6,
  consolePreJoinPadding: { height: 36 },
};
obj2 = {
  paddingTop: EDGE_GUTTER + calculateVoicePanelHeaderSpecs.BASE_VOICE_PANEL_HEADER_HEIGHT + EDGE_GUTTER,
  gap: 24,
  paddingBottom: 16,
};
createStyles = createStyles.createStyles;
obj3 = {
  position: "relative",
  width: "100%",
  aspectRatio: 1.7777777777777777,
  borderRadius: nativeDefault.radii.lg,
  overflow: "hidden",
  justifyContent: "center",
  backgroundColor: nativeDefault.colors.BLACK,
};
obj4 = { opacity: 0.5 };
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj5 = { display: "flex", alignItems: "center", justifyContent: "center" };
let merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj6 = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
  padding: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.xs,
  borderColor: nativeDefault.colors.ICON_FEEDBACK_WARNING,
  borderWidth: 1,
  backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING,
  marginHorizontal: nativeDefault.space.PX_16,
};
let closure_30 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_31 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      let first;
      let items2;
      let mode;
      let setFocused;
      let stream;
      let tmp9;
      let voiceState;
      const obj = stream(setFocused[27]);
      const cResult = obj.c(29);
      ({ voiceState, stream } = channelId);
      channelId = channelId.channelId;
      const tmp4 = closure_30();
      const context = react.useContext(channelId(setFocused[28]));
      ({ mode, setFocused } = context);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channelId) {
        const fn = function o() {
          return ChannelStore.getChannel(channelId);
        };
        cResult[1] = channelId;
        cResult[2] = fn;
        tmp9 = fn;
      } else {
        tmp9 = cResult[2];
      }
      const tmpResult = stream(setFocused[29]);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp9);
      stream(setFocused[30]);
      if (cResult[3] === stateFromStores) {
        if (cResult[4] === channelId) {
          if (cResult[5] === setFocused) {
            let tmp12;
            let tmp13;
            let tmp15;
            if (cResult[6] === stream) {
              tmp12 = cResult[7];
            }
            const _Symbol = Symbol;
            if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
              const items1 = [PermissionStore];
              cResult[8] = items1;
              tmp13 = items1;
            } else {
              tmp13 = cResult[8];
            }
            if (cResult[9] !== stateFromStores) {
              const fn3 = function w() {
                return PermissionStore.can(constants.CONNECT, stateFromStores);
              };
              cResult[9] = stateFromStores;
              cResult[10] = fn3;
              tmp15 = fn3;
            } else {
              tmp15 = cResult[10];
            }
            let isGuildStageVoiceResult;
            const tmpResult4 = stream(setFocused[29]);
            const stateFromStores1 = tmpResult4.useStateFromStores(tmp13, tmp15);
            if (stateFromStores != null) {
              isGuildStageVoiceResult = stateFromStores.isGuildStageVoice();
            }
            if (isGuildStageVoiceResult) {
              if (tmp11) {
                return null;
              }
            }
            if (cResult[11] === voiceState.nick) {
              let tmp21;
              if (cResult[12] === voiceState.user) {
                tmp21 = cResult[13];
              }
              if (cResult[14] === tmp4.activityInfoHeader) {
                let tmp23;
                if (cResult[15] === tmp21) {
                  tmp23 = cResult[16];
                }
                if (cResult[17] === tmp12) {
                  if (cResult[18] === mode) {
                    if (cResult[19] === stream) {
                      let tmp27;
                      if (cResult[20] === !stateFromStores1) {
                        tmp27 = cResult[21];
                      }
                      if (cResult[22] === tmp4.previewImageWrapper) {
                        let tmp30;
                        if (cResult[23] === tmp27) {
                          tmp30 = cResult[24];
                        }
                        if (cResult[25] === tmp4.activityInfoWrapper) {
                          if (cResult[26] === tmp30) {
                            let tmp33;
                            if (cResult[27] === tmp23) {
                              tmp33 = cResult[28];
                            }
                            return tmp33;
                          }
                        }
                        let obj2 = { style: tmp19, children: items2 };
                        items2 = [tmp23, tmp30];
                        const tmp35 = closure_28(channelId(setFocused[38]), obj2);
                        cResult[25] = tmp4.activityInfoWrapper;
                        cResult[26] = tmp30;
                        cResult[27] = tmp23;
                        cResult[28] = tmp35;
                        tmp33 = tmp35;
                      }
                      let obj3 = { style: tmp4.previewImageWrapper, children: tmp27 };
                      const tmp32 = closure_27(channelId(setFocused[38]), obj3);
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
            const format = intl.format;
            let username = voiceState.nick;
            const I0mOAs = stream(setFocused[35]).t.I0mOAs;
            if (username == null) {
              username = voiceState.user.username;
            }
            const obj6 = { username };
            const formatResult = format(I0mOAs, obj6);
            cResult[11] = voiceState.nick;
            cResult[12] = voiceState.user;
            cResult[13] = formatResult;
            tmp21 = formatResult;
          }
        }
      }
      const fn2 = function _() {
        let isGuildStageVoiceResult;
        if (stateFromStores != null) {
          isGuildStageVoiceResult = stateFromStores.isGuildStageVoice();
        }
        if (isGuildStageVoiceResult) {
          const obj5 = StageChannelModalActionCreators;
          obj5.connectAndOpen(stateFromStores);
        } else {
          const obj2 = SelectedChannelActionCreatorsDefault;
          const voiceChannel = obj2.selectVoiceChannel(channelId);
          const obj3 = StreamActionCreators;
          obj3.watchStream(stream, { forceMultiple: true });
          const obj4 = StreamKeyUtils;
          setFocused(obj4.encodeStreamKey(stream));
        }
      };
      cResult[3] = stateFromStores;
      cResult[4] = channelId;
      cResult[5] = setFocused;
      cResult[6] = stream;
      cResult[7] = fn2;
      tmp12 = fn2;
    }
  : (channelId) => {
      let I0mOAs;
      let format;
      let items3;
      let obj6;
      let obj8;
      let stream;
      let tmp11Result;
      let voiceState;
      ({ voiceState, stream } = channelId);
      channelId = channelId.channelId;
      let setFocused;
      const tmp = closure_30();
      const context = react.useContext(channelId(setFocused[28]));
      setFocused = context.setFocused;
      const mode = context.mode;
      const items = [ChannelStore];
      const obj = stream(setFocused[29]);
      const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
      let obj3 = stream(setFocused[30]);
      const items1 = [stateFromStores, channelId, stream, setFocused];
      const shouldHideChannelContent = obj3.useShouldHideChannelContent(stateFromStores);
      const callback = react.useCallback(() => {
        let isGuildStageVoiceResult;
        if (stateFromStores != null) {
          isGuildStageVoiceResult = stateFromStores.isGuildStageVoice();
        }
        if (isGuildStageVoiceResult) {
          const obj5 = StageChannelModalActionCreators;
          obj5.connectAndOpen(stateFromStores);
        } else {
          const obj2 = SelectedChannelActionCreatorsDefault;
          const voiceChannel = obj2.selectVoiceChannel(channelId);
          const obj3 = StreamActionCreators;
          obj3.watchStream(stream, { forceMultiple: true });
          const obj4 = StreamKeyUtils;
          setFocused(obj4.encodeStreamKey(stream));
        }
      }, items1);
      let obj4 = stream(setFocused[29]);
      const items2 = [PermissionStore];
      let isGuildStageVoiceResult;
      const stateFromStores1 = obj4.useStateFromStores(items2, () =>
        PermissionStore.can(constants.CONNECT, stateFromStores),
      );
      if (stateFromStores != null) {
        isGuildStageVoiceResult = stateFromStores.isGuildStageVoice();
      }
      if (!isGuildStageVoiceResult) {
        let obj2 = { style: tmp.activityInfoWrapper, children: items3 };
        let obj5 = {
          variant: "text-sm/semibold",
          style: tmp.activityInfoHeader,
          color: "text-default",
          children: format(I0mOAs, obj6),
        };
        const tmp2Result = channelId(setFocused[38]);
        const Text = stream(tmp3[36]).Text;
        const intl = stream(tmp3[35]).intl;
        format = intl.format;
        let username = voiceState.nick;
        I0mOAs = stream(tmp3[35]).t.I0mOAs;
        if (username == null) {
          username = voiceState.user.username;
        }
        obj6 = { username };
        items3 = [closure_27(Text, obj5)];
        const obj7 = {
          style: tmp.previewImageWrapper,
          children: closure_27(stream(setFocused[37]).VoicePanelStreamPreview, obj8),
        };
        obj8 = { mode, disabled: !stateFromStores1, stream, onPress: callback };
        const tmp2Result2 = channelId(setFocused[38]);
        items3[1] = closure_27(tmp2Result2, obj7);
        tmp11Result = closure_28(tmp2Result, obj2);
      } else {
        tmp11Result = null;
      }
      return tmp11Result;
    };
let memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_32 = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (hasMembers) => {
        let Text;
        let intl;
        let obj3;
        const obj = react2;
        const cResult = obj.c(3);
        hasMembers = hasMembers.hasMembers;
        const tmp4 = closure_30();
        if (cResult[0] === hasMembers) {
          let tmp5;
          if (cResult[1] === tmp4) {
            tmp5 = cResult[2];
          }
          return tmp5;
        }
        let tmp6 = null;
        if (!hasMembers) {
          const obj2 = { style: tmp4.channelInfoWrapper, children: closure_27(Text, obj3) };
          obj3 = {
            variant: "text-sm/medium",
            color: "text-default",
            style: tmp4.subheading,
            children: intl.string(intl6.t.sS2J0G),
          };
          const tmp9 = NativeViewDefault;
          Text = Text_Text.Text;
          intl = intl6.intl;
          tmp6 = closure_27(tmp9, obj2);
        }
        cResult[0] = hasMembers;
        cResult[1] = tmp4;
        cResult[2] = tmp6;
        tmp5 = tmp6;
      }
    : (hasMembers) => {
        let Text;
        let intl;
        let obj2;
        hasMembers = hasMembers.hasMembers;
        const tmp = closure_30();
        let tmp2 = null;
        if (!hasMembers) {
          const obj = { style: tmp.channelInfoWrapper, children: closure_27(Text, obj2) };
          obj2 = {
            variant: "text-sm/medium",
            color: "text-default",
            style: tmp.subheading,
            children: intl.string(intl6.t.sS2J0G),
          };
          const tmp6 = NativeViewDefault;
          Text = Text_Text.Text;
          intl = intl6.intl;
          tmp2 = closure_27(tmp6, obj);
        }
        return tmp2;
      },
);
const __initData = {
  code: "function VoicePanelPreJoinContentTsx1(){const{windowDimensions}=this.__closure;return windowDimensions.get().width;}",
};
const __initData2 = {
  code: "function VoicePanelPreJoinContentTsx2(width,previous){const{runOnJS,setActivityPreviewWidth,EDGE_GUTTER}=this.__closure;if(width===previous){return;}runOnJS(setActivityPreviewWidth)(width-(EDGE_GUTTER+16)*2);}",
};
const __initData3 = {
  code: "function VoicePanelPreJoinContentTsx3(){const{windowDimensions}=this.__closure;return windowDimensions.get().width;}",
};
const __initData4 = {
  code: "function VoicePanelPreJoinContentTsx4(width,previous){const{runOnJS,setActivityPreviewWidth,EDGE_GUTTER}=this.__closure;if(width===previous)return;runOnJS(setActivityPreviewWidth)(width-(EDGE_GUTTER+16)*2);}",
};
ReactCompilerGating = ReactCompilerGating_mod;
let closure_37 = ReactCompilerGating.isReactCompilerEnabled()
  ? (activity) => {
      let activityInfoHeader;
      let activityInfoWrapper;
      let application;
      let closure_5;
      let closure_7;
      let items2;
      let items3;
      let tmp11;
      let tmp13;
      let tmp14;
      let tmp16;
      let tmp5;
      let tmp8;
      let tmp = activity;
      const tmp2 = application;
      let obj = activity(application[27]);
      const cResult = obj.c(52);
      activity = activity.activity;
      let analyticsLocations = activity.analyticsLocations;
      const tmp4 = closure_30();
      if (cResult[0] !== activity.applicationId) {
        const items = [activity.applicationId];
        cResult[0] = activity.applicationId;
        cResult[1] = items;
        tmp5 = items;
      } else {
        tmp5 = cResult[1];
      }
      application = embeddedActivityJoinability(analyticsLocations(tmp2[39])(tmp5), 1)[0];
      if (cResult[2] !== activity.location) {
        const tmpResult = tmp(tmp2[40]);
        const embeddedActivityLocationChannelId = tmpResult.getEmbeddedActivityLocationChannelId(activity.location);
        cResult[2] = activity.location;
        cResult[3] = embeddedActivityLocationChannelId;
        tmp8 = embeddedActivityLocationChannelId;
      } else {
        tmp8 = cResult[3];
      }
      const arr2 = analyticsLocations(tmp2[41])(activity.applicationId, tmp8);
      let obj4 = react;
      const context = react.useContext(tmp6(tmp2[28]));
      const channelId = context.channelId;
      const windowDimensions = context.windowDimensions;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function b() {
          const obj = activity(first[42]);
          return obj.getWindowDimensions().width - 2 * (EDGE_GUTTER + 16);
        };
        cResult[4] = fn;
        tmp11 = fn;
      } else {
        tmp11 = cResult[4];
      }
      [tmp13, tmp14] = embeddedActivityJoinability(obj4.useState(tmp11), 2);
      _asyncToGenerator = tmp14;
      embeddedActivityJoinability(obj4.useState(tmp11), 2);
      const tmpResult3 = tmp(tmp2[43]);
      class A {
        constructor() {
          return windowDimensions.get().width;
        }
      }
      A.__closure = { windowDimensions };
      A.__workletHash = 16837592262556;
      A.__initData = __initData;
      class P {
        constructor(arg0, arg1) {
          if (arg0 !== arg1) {
            const obj = ReanimatedRexport;
            obj.runOnJS(_asyncToGenerator)(arg0 - 2 * (EDGE_GUTTER + 16));
          }
        }
      }
      let obj2 = { runOnJS: tmp(tmp2[43]).runOnJS, setActivityPreviewWidth: tmp14, EDGE_GUTTER };
      P.__closure = obj2;
      P.__workletHash = 15273780609426;
      P.__initData = __initData2;
      const animatedReaction = tmpResult3.useAnimatedReaction(A, P);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const id = AuthenticationStore.getId();
        cResult[5] = id;
        tmp16 = id;
      } else {
        tmp16 = cResult[5];
      }
      if (cResult[6] === application) {
        let tmp19;
        if (cResult[7] === channelId) {
          tmp19 = cResult[8];
        }
        const tmpResult4 = tmp(tmp2[44]);
        embeddedActivityJoinability = tmpResult4.useEmbeddedActivityJoinability(tmp19);
        const tmp21 = embeddedActivityJoinability === tmp(tmp2[44]).EmbeddedActivityJoinability.CAN_JOIN;
        react = tmp21;
        if (cResult[9] === activity.launchId) {
          if (cResult[10] === analyticsLocations) {
            if (cResult[11] === application) {
              if (cResult[12] === tmp21) {
                if (cResult[13] === channelId) {
                  let tmp22;
                  let tmp23;
                  if (cResult[14] === embeddedActivityJoinability) {
                    tmp22 = cResult[15];
                  }
                  const _Symbol = Symbol;
                  if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
                    const items1 = ["embedded_background"];
                    cResult[16] = items1;
                    tmp23 = items1;
                  } else {
                    tmp23 = cResult[16];
                  }
                  if (cResult[17] === activity.applicationId) {
                    let tmp24;
                    if (cResult[18] === tmp13) {
                      tmp24 = cResult[19];
                    }
                    const tmp25 = analyticsLocations(tmp2[46])(tmp24);
                    if (null == application) {
                      return null;
                    } else {
                      let tmp27;
                      ({ activityInfoWrapper, activityInfoHeader } = tmp4);
                      if (cResult[20] !== arr2.length) {
                        const intl = tmp(tmp2[35]).intl;
                        let obj3 = { n: arr2.length };
                        const formatResult = intl.format(tmp(tmp2[35]).t["n/IJ6Y"], obj3);
                        cResult[20] = arr2.length;
                        class W {
                          constructor() {
                            obj = { embeddedActivityJoinability: closure_6, handleCanJoin: null };
                            tmp = analyticsLocations(closure_2[45]);
                            closure_0 = closure_5(function* () {
                              let v3;
                              if (v3 === 2) {
                                v3 = 3;
                                throw new TypeError("Generator functions may not be called on executing generators");
                              } else if (tmp2 === 3) {
                                if (arg0 === 1) {
                                  throw value;
                                } else if (arg0 === 2) {
                                  const obj4 = { value, done: true };
                                  return obj4;
                                } else {
                                  return { value: "IconComponent", done: null };
                                }
                              } else {
                                try {
                                  v3 = 2;
                                  if (0 === analyticsLocations) {
                                    if (arg0 === 1) {
                                      v3 = 3;
                                      throw value;
                                    } else if (arg0 === 2) {
                                      v3 = 3;
                                      const obj5 = { value, done: true };
                                      return obj5;
                                    } else if (closure_1_7) {
                                      if (null != inputApplication) {
                                        const obj6 = {
                                          channelId,
                                          applicationId: inputApplication.id,
                                          launchId: v3.launchId,
                                          inputApplication,
                                          analyticsLocations,
                                        };
                                        analyticsLocations = 1;
                                        const obj3 = v3(application[45]);
                                        v3 = 1;
                                        const obj7 = { value: obj3.maybeJoinEmbeddedActivity(obj6), done: false };
                                        return obj7;
                                      }
                                    } else {
                                      const obj2 = analyticsLocations(application[32]);
                                      const voiceChannel = obj2.selectVoiceChannel(channelId);
                                    }
                                  } else if (arg0 === 1) {
                                    v3 = 3;
                                    throw value;
                                  } else if (arg0 === 2) {
                                    v3 = 3;
                                    const obj = { value, done: true };
                                    return obj;
                                  }
                                  v3 = 3;
                                  return { value: "IconComponent", done: null };
                                } catch (tmp15) {
                                  v3 = 3;
                                  throw tmp15;
                                }
                              }
                            });
                            obj.handleCanJoin = function () {
                              return closure_0(...arguments);
                            };
                            tmpResult = tmp(obj);
                            return;
                          }
                        }
                        cResult[21] = formatResult;
                        tmp27 = formatResult;
                      } else {
                        tmp27 = cResult[21];
                      }
                      if (cResult[22] === tmp4.activityInfoHeader) {
                        let tmp29;
                        let tmp32;
                        if (cResult[23] === tmp27) {
                          tmp29 = cResult[24];
                        }
                        const previewImageWrapper = tmp4.previewImageWrapper;
                        if (cResult[25] !== tmp25) {
                          let obj5 = { imageBackground: tmp25, aspectRatio: 1.7777777777777777 };
                          cResult[25] = tmp25;
                          const tmp34 = closure_27(analyticsLocations(tmp2[47]), obj5);
                          class W {
                            constructor() {
                              obj = { embeddedActivityJoinability: closure_6, handleCanJoin: null };
                              tmp = analyticsLocations(closure_2[45]);
                              closure_0 = closure_5(function* () {
                                let v3;
                                if (v3 === 2) {
                                  v3 = 3;
                                  throw new TypeError("Generator functions may not be called on executing generators");
                                } else if (tmp2 === 3) {
                                  if (arg0 === 1) {
                                    throw value;
                                  } else if (arg0 === 2) {
                                    const obj4 = { value, done: true };
                                    return obj4;
                                  } else {
                                    return { value: "IconComponent", done: null };
                                  }
                                } else {
                                  try {
                                    v3 = 2;
                                    if (0 === analyticsLocations) {
                                      if (arg0 === 1) {
                                        v3 = 3;
                                        throw value;
                                      } else if (arg0 === 2) {
                                        v3 = 3;
                                        const obj5 = { value, done: true };
                                        return obj5;
                                      } else if (closure_1_7) {
                                        if (null != inputApplication) {
                                          const obj6 = {
                                            channelId,
                                            applicationId: inputApplication.id,
                                            launchId: v3.launchId,
                                            inputApplication,
                                            analyticsLocations,
                                          };
                                          analyticsLocations = 1;
                                          const obj3 = v3(application[45]);
                                          v3 = 1;
                                          const obj7 = { value: obj3.maybeJoinEmbeddedActivity(obj6), done: false };
                                          return obj7;
                                        }
                                      } else {
                                        const obj2 = analyticsLocations(application[32]);
                                        const voiceChannel = obj2.selectVoiceChannel(channelId);
                                      }
                                    } else if (arg0 === 1) {
                                      v3 = 3;
                                      throw value;
                                    } else if (arg0 === 2) {
                                      v3 = 3;
                                      const obj = { value, done: true };
                                      return obj;
                                    }
                                    v3 = 3;
                                    return { value: "IconComponent", done: null };
                                  } catch (tmp15) {
                                    v3 = 3;
                                    throw tmp15;
                                  }
                                }
                              });
                              obj.handleCanJoin = function () {
                                return closure_0(...arguments);
                              };
                              tmpResult = tmp(obj);
                              return;
                            }
                          }
                          tmp32 = tmp34;
                        } else {
                          tmp32 = cResult[26];
                        }
                        if (cResult[27] === tmp4.previewImage) {
                          let tmp35;
                          let tmp38;
                          let tmp42;
                          if (cResult[28] === tmp32) {
                            tmp35 = cResult[29];
                          }
                          const joinButtonWrapper = tmp4.joinButtonWrapper;
                          if (cResult[30] !== application.name) {
                            const intl2 = tmp(tmp2[35]).intl;
                            let obj6 = { name: application.name };
                            const formatToPlainStringResult = intl2.formatToPlainString(
                              tmp(tmp2[35]).t["YV/hE8"],
                              obj6,
                            );
                            cResult[30] = application.name;
                            class W {
                              constructor() {
                                obj = { embeddedActivityJoinability: closure_6, handleCanJoin: null };
                                tmp = analyticsLocations(closure_2[45]);
                                closure_0 = closure_5(function* () {
                                  let v3;
                                  if (v3 === 2) {
                                    v3 = 3;
                                    throw new TypeError(
                                      "Generator functions may not be called on executing generators",
                                    );
                                  } else if (tmp2 === 3) {
                                    if (arg0 === 1) {
                                      throw value;
                                    } else if (arg0 === 2) {
                                      const obj4 = { value, done: true };
                                      return obj4;
                                    } else {
                                      return { value: "IconComponent", done: null };
                                    }
                                  } else {
                                    try {
                                      v3 = 2;
                                      if (0 === analyticsLocations) {
                                        if (arg0 === 1) {
                                          v3 = 3;
                                          throw value;
                                        } else if (arg0 === 2) {
                                          v3 = 3;
                                          const obj5 = { value, done: true };
                                          return obj5;
                                        } else if (closure_1_7) {
                                          if (null != inputApplication) {
                                            const obj6 = {
                                              channelId,
                                              applicationId: inputApplication.id,
                                              launchId: v3.launchId,
                                              inputApplication,
                                              analyticsLocations,
                                            };
                                            analyticsLocations = 1;
                                            const obj3 = v3(application[45]);
                                            v3 = 1;
                                            const obj7 = { value: obj3.maybeJoinEmbeddedActivity(obj6), done: false };
                                            return obj7;
                                          }
                                        } else {
                                          const obj2 = analyticsLocations(application[32]);
                                          const voiceChannel = obj2.selectVoiceChannel(channelId);
                                        }
                                      } else if (arg0 === 1) {
                                        v3 = 3;
                                        throw value;
                                      } else if (arg0 === 2) {
                                        v3 = 3;
                                        const obj = { value, done: true };
                                        return obj;
                                      }
                                      v3 = 3;
                                      return { value: "IconComponent", done: null };
                                    } catch (tmp15) {
                                      v3 = 3;
                                      throw tmp15;
                                    }
                                  }
                                });
                                obj.handleCanJoin = function () {
                                  return closure_0(...arguments);
                                };
                                tmpResult = tmp(obj);
                                return;
                              }
                            }
                            cResult[31] = formatToPlainStringResult;
                            tmp38 = formatToPlainStringResult;
                          } else {
                            tmp38 = cResult[31];
                          }
                          if (cResult[32] !== application) {
                            const iconURL = application.getIconURL(20);
                            cResult[32] = application;
                            cResult[33] = iconURL;
                            class W {
                              constructor() {
                                obj = { embeddedActivityJoinability: closure_6, handleCanJoin: null };
                                tmp = analyticsLocations(closure_2[45]);
                                closure_0 = closure_5(function* () {
                                  let v3;
                                  if (v3 === 2) {
                                    v3 = 3;
                                    throw new TypeError(
                                      "Generator functions may not be called on executing generators",
                                    );
                                  } else if (tmp2 === 3) {
                                    if (arg0 === 1) {
                                      throw value;
                                    } else if (arg0 === 2) {
                                      const obj4 = { value, done: true };
                                      return obj4;
                                    } else {
                                      return { value: "IconComponent", done: null };
                                    }
                                  } else {
                                    try {
                                      v3 = 2;
                                      if (0 === analyticsLocations) {
                                        if (arg0 === 1) {
                                          v3 = 3;
                                          throw value;
                                        } else if (arg0 === 2) {
                                          v3 = 3;
                                          const obj5 = { value, done: true };
                                          return obj5;
                                        } else if (closure_1_7) {
                                          if (null != inputApplication) {
                                            const obj6 = {
                                              channelId,
                                              applicationId: inputApplication.id,
                                              launchId: v3.launchId,
                                              inputApplication,
                                              analyticsLocations,
                                            };
                                            analyticsLocations = 1;
                                            const obj3 = v3(application[45]);
                                            v3 = 1;
                                            const obj7 = { value: obj3.maybeJoinEmbeddedActivity(obj6), done: false };
                                            return obj7;
                                          }
                                        } else {
                                          const obj2 = analyticsLocations(application[32]);
                                          const voiceChannel = obj2.selectVoiceChannel(channelId);
                                        }
                                      } else if (arg0 === 1) {
                                        v3 = 3;
                                        throw value;
                                      } else if (arg0 === 2) {
                                        v3 = 3;
                                        const obj = { value, done: true };
                                        return obj;
                                      }
                                      v3 = 3;
                                      return { value: "IconComponent", done: null };
                                    } catch (tmp15) {
                                      v3 = 3;
                                      throw tmp15;
                                    }
                                  }
                                });
                                obj.handleCanJoin = function () {
                                  return closure_0(...arguments);
                                };
                                tmpResult = tmp(obj);
                                return;
                              }
                            }
                          }
                          if (cResult[34] !== tmp40) {
                            let obj7 = { variant: "entity", source: size };
                            size = { uri: tmp40, width: 20, height: 20 };
                            const tmp44 = closure_27(tmp(tmp2[48]).Button.Icon, obj7);
                            class W {
                              constructor() {
                                obj = { embeddedActivityJoinability: closure_6, handleCanJoin: null };
                                tmp = analyticsLocations(closure_2[45]);
                                closure_0 = closure_5(function* () {
                                  let v3;
                                  if (v3 === 2) {
                                    v3 = 3;
                                    throw new TypeError(
                                      "Generator functions may not be called on executing generators",
                                    );
                                  } else if (tmp2 === 3) {
                                    if (arg0 === 1) {
                                      throw value;
                                    } else if (arg0 === 2) {
                                      const obj4 = { value, done: true };
                                      return obj4;
                                    } else {
                                      return { value: "IconComponent", done: null };
                                    }
                                  } else {
                                    try {
                                      v3 = 2;
                                      if (0 === analyticsLocations) {
                                        if (arg0 === 1) {
                                          v3 = 3;
                                          throw value;
                                        } else if (arg0 === 2) {
                                          v3 = 3;
                                          const obj5 = { value, done: true };
                                          return obj5;
                                        } else if (closure_1_7) {
                                          if (null != inputApplication) {
                                            const obj6 = {
                                              channelId,
                                              applicationId: inputApplication.id,
                                              launchId: v3.launchId,
                                              inputApplication,
                                              analyticsLocations,
                                            };
                                            analyticsLocations = 1;
                                            const obj3 = v3(application[45]);
                                            v3 = 1;
                                            const obj7 = { value: obj3.maybeJoinEmbeddedActivity(obj6), done: false };
                                            return obj7;
                                          }
                                        } else {
                                          const obj2 = analyticsLocations(application[32]);
                                          const voiceChannel = obj2.selectVoiceChannel(channelId);
                                        }
                                      } else if (arg0 === 1) {
                                        v3 = 3;
                                        throw value;
                                      } else if (arg0 === 2) {
                                        v3 = 3;
                                        const obj = { value, done: true };
                                        return obj;
                                      }
                                      v3 = 3;
                                      return { value: "IconComponent", done: null };
                                    } catch (tmp15) {
                                      v3 = 3;
                                      throw tmp15;
                                    }
                                  }
                                });
                                obj.handleCanJoin = function () {
                                  return closure_0(...arguments);
                                };
                                tmpResult = tmp(obj);
                                return;
                              }
                            }
                            cResult[35] = tmp44;
                            tmp42 = tmp44;
                          } else {
                            tmp42 = cResult[35];
                          }
                          if (cResult[36] === tmp22) {
                            if (cResult[37] === tmp38) {
                              let tmp45;
                              if (cResult[38] === tmp42) {
                                tmp45 = cResult[39];
                              }
                              if (cResult[40] === tmp4.joinButtonWrapper) {
                                let tmp49;
                                if (cResult[41] === tmp45) {
                                  tmp49 = cResult[42];
                                }
                                if (cResult[43] === tmp22) {
                                  if (cResult[44] === tmp4.previewImageWrapper) {
                                    if (cResult[45] === tmp35) {
                                      let tmp52;
                                      if (cResult[46] === tmp49) {
                                        tmp52 = cResult[47];
                                      }
                                      if (cResult[48] === tmp4.activityInfoWrapper) {
                                        if (cResult[49] === tmp29) {
                                          let tmp55;
                                          if (cResult[50] === tmp52) {
                                            tmp55 = cResult[51];
                                          }
                                          return tmp55;
                                        }
                                      }
                                      const obj8 = { style: activityInfoWrapper, children: items2 };
                                      items2 = [tmp29];
                                      class W {
                                        constructor() {
                                          obj = { embeddedActivityJoinability: closure_6, handleCanJoin: null };
                                          tmp = analyticsLocations(closure_2[45]);
                                          closure_0 = closure_5(function* () {
                                            let v3;
                                            if (v3 === 2) {
                                              v3 = 3;
                                              throw new TypeError(
                                                "Generator functions may not be called on executing generators",
                                              );
                                            } else if (tmp2 === 3) {
                                              if (arg0 === 1) {
                                                throw value;
                                              } else if (arg0 === 2) {
                                                const obj4 = { value, done: true };
                                                return obj4;
                                              } else {
                                                return { value: "IconComponent", done: null };
                                              }
                                            } else {
                                              try {
                                                v3 = 2;
                                                if (0 === analyticsLocations) {
                                                  if (arg0 === 1) {
                                                    v3 = 3;
                                                    throw value;
                                                  } else if (arg0 === 2) {
                                                    v3 = 3;
                                                    const obj5 = { value, done: true };
                                                    return obj5;
                                                  } else if (closure_1_7) {
                                                    if (null != inputApplication) {
                                                      const obj6 = {
                                                        channelId,
                                                        applicationId: inputApplication.id,
                                                        launchId: v3.launchId,
                                                        inputApplication,
                                                        analyticsLocations,
                                                      };
                                                      analyticsLocations = 1;
                                                      const obj3 = v3(application[45]);
                                                      v3 = 1;
                                                      const obj7 = {
                                                        value: obj3.maybeJoinEmbeddedActivity(obj6),
                                                        done: false,
                                                      };
                                                      return obj7;
                                                    }
                                                  } else {
                                                    const obj2 = analyticsLocations(application[32]);
                                                    const voiceChannel = obj2.selectVoiceChannel(channelId);
                                                  }
                                                } else if (arg0 === 1) {
                                                  v3 = 3;
                                                  throw value;
                                                } else if (arg0 === 2) {
                                                  v3 = 3;
                                                  const obj = { value, done: true };
                                                  return obj;
                                                }
                                                v3 = 3;
                                                return { value: "IconComponent", done: null };
                                              } catch (tmp15) {
                                                v3 = 3;
                                                throw tmp15;
                                              }
                                            }
                                          });
                                          obj.handleCanJoin = function () {
                                            return closure_0(...arguments);
                                          };
                                          tmpResult = tmp(obj);
                                          return;
                                        }
                                      }
                                      const tmp57 = closure_28(analyticsLocations(tmp2[38]), obj8);
                                      cResult[48] = tmp4.activityInfoWrapper;
                                      cResult[49] = tmp29;
                                      cResult[50] = tmp52;
                                      cResult[51] = tmp57;
                                      tmp55 = tmp57;
                                    }
                                  }
                                }
                                const obj9 = {
                                  activeOpacity: 0.7,
                                  onPress: tmp22,
                                  style: previewImageWrapper,
                                  accessible: false,
                                  children: items3,
                                };
                                items3 = [,];
                                class W {
                                  constructor() {
                                    obj = { embeddedActivityJoinability: closure_6, handleCanJoin: null };
                                    tmp = analyticsLocations(closure_2[45]);
                                    closure_0 = closure_5(function* () {
                                      let v3;
                                      if (v3 === 2) {
                                        v3 = 3;
                                        throw new TypeError(
                                          "Generator functions may not be called on executing generators",
                                        );
                                      } else if (tmp2 === 3) {
                                        if (arg0 === 1) {
                                          throw value;
                                        } else if (arg0 === 2) {
                                          const obj4 = { value, done: true };
                                          return obj4;
                                        } else {
                                          return { value: "IconComponent", done: null };
                                        }
                                      } else {
                                        try {
                                          v3 = 2;
                                          if (0 === analyticsLocations) {
                                            if (arg0 === 1) {
                                              v3 = 3;
                                              throw value;
                                            } else if (arg0 === 2) {
                                              v3 = 3;
                                              const obj5 = { value, done: true };
                                              return obj5;
                                            } else if (closure_1_7) {
                                              if (null != inputApplication) {
                                                const obj6 = {
                                                  channelId,
                                                  applicationId: inputApplication.id,
                                                  launchId: v3.launchId,
                                                  inputApplication,
                                                  analyticsLocations,
                                                };
                                                analyticsLocations = 1;
                                                const obj3 = v3(application[45]);
                                                v3 = 1;
                                                const obj7 = {
                                                  value: obj3.maybeJoinEmbeddedActivity(obj6),
                                                  done: false,
                                                };
                                                return obj7;
                                              }
                                            } else {
                                              const obj2 = analyticsLocations(application[32]);
                                              const voiceChannel = obj2.selectVoiceChannel(channelId);
                                            }
                                          } else if (arg0 === 1) {
                                            v3 = 3;
                                            throw value;
                                          } else if (arg0 === 2) {
                                            v3 = 3;
                                            const obj = { value, done: true };
                                            return obj;
                                          }
                                          v3 = 3;
                                          return { value: "IconComponent", done: null };
                                        } catch (tmp15) {
                                          v3 = 3;
                                          throw tmp15;
                                        }
                                      }
                                    });
                                    obj.handleCanJoin = function () {
                                      return closure_0(...arguments);
                                    };
                                    tmpResult = tmp(obj);
                                    return;
                                  }
                                }
                                items3[1] = tmp49;
                                const tmp54 = closure_28(tmp(tmp2[49]).PressableOpacity, obj9);
                                cResult[43] = tmp22;
                                cResult[44] = tmp4.previewImageWrapper;
                                cResult[45] = tmp35;
                                cResult[46] = tmp49;
                                cResult[47] = tmp54;
                                tmp52 = tmp54;
                              }
                              const obj10 = { style: joinButtonWrapper, children: tmp45 };
                              const tmp51 = closure_27(analyticsLocations(tmp2[38]), obj10);
                              class W {
                                constructor() {
                                  obj = { embeddedActivityJoinability: closure_6, handleCanJoin: null };
                                  tmp = analyticsLocations(closure_2[45]);
                                  closure_0 = closure_5(function* () {
                                    let v3;
                                    if (v3 === 2) {
                                      v3 = 3;
                                      throw new TypeError(
                                        "Generator functions may not be called on executing generators",
                                      );
                                    } else if (tmp2 === 3) {
                                      if (arg0 === 1) {
                                        throw value;
                                      } else if (arg0 === 2) {
                                        const obj4 = { value, done: true };
                                        return obj4;
                                      } else {
                                        return { value: "IconComponent", done: null };
                                      }
                                    } else {
                                      try {
                                        v3 = 2;
                                        if (0 === analyticsLocations) {
                                          if (arg0 === 1) {
                                            v3 = 3;
                                            throw value;
                                          } else if (arg0 === 2) {
                                            v3 = 3;
                                            const obj5 = { value, done: true };
                                            return obj5;
                                          } else if (closure_1_7) {
                                            if (null != inputApplication) {
                                              const obj6 = {
                                                channelId,
                                                applicationId: inputApplication.id,
                                                launchId: v3.launchId,
                                                inputApplication,
                                                analyticsLocations,
                                              };
                                              analyticsLocations = 1;
                                              const obj3 = v3(application[45]);
                                              v3 = 1;
                                              const obj7 = { value: obj3.maybeJoinEmbeddedActivity(obj6), done: false };
                                              return obj7;
                                            }
                                          } else {
                                            const obj2 = analyticsLocations(application[32]);
                                            const voiceChannel = obj2.selectVoiceChannel(channelId);
                                          }
                                        } else if (arg0 === 1) {
                                          v3 = 3;
                                          throw value;
                                        } else if (arg0 === 2) {
                                          v3 = 3;
                                          const obj = { value, done: true };
                                          return obj;
                                        }
                                        v3 = 3;
                                        return { value: "IconComponent", done: null };
                                      } catch (tmp15) {
                                        v3 = 3;
                                        throw tmp15;
                                      }
                                    }
                                  });
                                  obj.handleCanJoin = function () {
                                    return closure_0(...arguments);
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
                          class W {
                            constructor() {
                              obj = { embeddedActivityJoinability: closure_6, handleCanJoin: null };
                              tmp = analyticsLocations(closure_2[45]);
                              closure_0 = closure_5(function* () {
                                let v3;
                                if (v3 === 2) {
                                  v3 = 3;
                                  throw new TypeError("Generator functions may not be called on executing generators");
                                } else if (tmp2 === 3) {
                                  if (arg0 === 1) {
                                    throw value;
                                  } else if (arg0 === 2) {
                                    const obj4 = { value, done: true };
                                    return obj4;
                                  } else {
                                    return { value: "IconComponent", done: null };
                                  }
                                } else {
                                  try {
                                    v3 = 2;
                                    if (0 === analyticsLocations) {
                                      if (arg0 === 1) {
                                        v3 = 3;
                                        throw value;
                                      } else if (arg0 === 2) {
                                        v3 = 3;
                                        const obj5 = { value, done: true };
                                        return obj5;
                                      } else if (closure_1_7) {
                                        if (null != inputApplication) {
                                          const obj6 = {
                                            channelId,
                                            applicationId: inputApplication.id,
                                            launchId: v3.launchId,
                                            inputApplication,
                                            analyticsLocations,
                                          };
                                          analyticsLocations = 1;
                                          const obj3 = v3(application[45]);
                                          v3 = 1;
                                          const obj7 = { value: obj3.maybeJoinEmbeddedActivity(obj6), done: false };
                                          return obj7;
                                        }
                                      } else {
                                        const obj2 = analyticsLocations(application[32]);
                                        const voiceChannel = obj2.selectVoiceChannel(channelId);
                                      }
                                    } else if (arg0 === 1) {
                                      v3 = 3;
                                      throw value;
                                    } else if (arg0 === 2) {
                                      v3 = 3;
                                      const obj = { value, done: true };
                                      return obj;
                                    }
                                    v3 = 3;
                                    return { value: "IconComponent", done: null };
                                  } catch (tmp15) {
                                    v3 = 3;
                                    throw tmp15;
                                  }
                                }
                              });
                              obj.handleCanJoin = function () {
                                return closure_0(...arguments);
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
                        class W {
                          constructor() {
                            obj = { embeddedActivityJoinability: closure_6, handleCanJoin: null };
                            tmp = analyticsLocations(closure_2[45]);
                            closure_0 = closure_5(function* () {
                              let v3;
                              if (v3 === 2) {
                                v3 = 3;
                                throw new TypeError("Generator functions may not be called on executing generators");
                              } else if (tmp2 === 3) {
                                if (arg0 === 1) {
                                  throw value;
                                } else if (arg0 === 2) {
                                  const obj4 = { value, done: true };
                                  return obj4;
                                } else {
                                  return { value: "IconComponent", done: null };
                                }
                              } else {
                                try {
                                  v3 = 2;
                                  if (0 === analyticsLocations) {
                                    if (arg0 === 1) {
                                      v3 = 3;
                                      throw value;
                                    } else if (arg0 === 2) {
                                      v3 = 3;
                                      const obj5 = { value, done: true };
                                      return obj5;
                                    } else if (closure_1_7) {
                                      if (null != inputApplication) {
                                        const obj6 = {
                                          channelId,
                                          applicationId: inputApplication.id,
                                          launchId: v3.launchId,
                                          inputApplication,
                                          analyticsLocations,
                                        };
                                        analyticsLocations = 1;
                                        const obj3 = v3(application[45]);
                                        v3 = 1;
                                        const obj7 = { value: obj3.maybeJoinEmbeddedActivity(obj6), done: false };
                                        return obj7;
                                      }
                                    } else {
                                      const obj2 = analyticsLocations(application[32]);
                                      const voiceChannel = obj2.selectVoiceChannel(channelId);
                                    }
                                  } else if (arg0 === 1) {
                                    v3 = 3;
                                    throw value;
                                  } else if (arg0 === 2) {
                                    v3 = 3;
                                    const obj = { value, done: true };
                                    return obj;
                                  }
                                  v3 = 3;
                                  return { value: "IconComponent", done: null };
                                } catch (tmp15) {
                                  v3 = 3;
                                  throw tmp15;
                                }
                              }
                            });
                            obj.handleCanJoin = function () {
                              return closure_0(...arguments);
                            };
                            tmpResult = tmp(obj);
                            return;
                          }
                        }
                        const tmp37 = closure_27(analyticsLocations(tmp2[38]), obj11);
                        cResult[27] = tmp4.previewImage;
                        cResult[28] = tmp32;
                        cResult[29] = tmp37;
                        tmp35 = tmp37;
                      }
                      const obj12 = {
                        variant: "text-sm/semibold",
                        style: activityInfoHeader,
                        color: "text-default",
                        children: null,
                      };
                      class W {
                        constructor() {
                          obj = { embeddedActivityJoinability: closure_6, handleCanJoin: null };
                          tmp = analyticsLocations(closure_2[45]);
                          closure_0 = closure_5(function* () {
                            let v3;
                            if (v3 === 2) {
                              v3 = 3;
                              throw new TypeError("Generator functions may not be called on executing generators");
                            } else if (tmp2 === 3) {
                              if (arg0 === 1) {
                                throw value;
                              } else if (arg0 === 2) {
                                const obj4 = { value, done: true };
                                return obj4;
                              } else {
                                return { value: "IconComponent", done: null };
                              }
                            } else {
                              try {
                                v3 = 2;
                                if (0 === analyticsLocations) {
                                  if (arg0 === 1) {
                                    v3 = 3;
                                    throw value;
                                  } else if (arg0 === 2) {
                                    v3 = 3;
                                    const obj5 = { value, done: true };
                                    return obj5;
                                  } else if (closure_1_7) {
                                    if (null != inputApplication) {
                                      const obj6 = {
                                        channelId,
                                        applicationId: inputApplication.id,
                                        launchId: v3.launchId,
                                        inputApplication,
                                        analyticsLocations,
                                      };
                                      analyticsLocations = 1;
                                      const obj3 = v3(application[45]);
                                      v3 = 1;
                                      const obj7 = { value: obj3.maybeJoinEmbeddedActivity(obj6), done: false };
                                      return obj7;
                                    }
                                  } else {
                                    const obj2 = analyticsLocations(application[32]);
                                    const voiceChannel = obj2.selectVoiceChannel(channelId);
                                  }
                                } else if (arg0 === 1) {
                                  v3 = 3;
                                  throw value;
                                } else if (arg0 === 2) {
                                  v3 = 3;
                                  const obj = { value, done: true };
                                  return obj;
                                }
                                v3 = 3;
                                return { value: "IconComponent", done: null };
                              } catch (tmp15) {
                                v3 = 3;
                                throw tmp15;
                              }
                            }
                          });
                          obj.handleCanJoin = function () {
                            return closure_0(...arguments);
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
                  const obj13 = { applicationId: activity.applicationId, size: null, names: tmp23 };
                  class W {
                    constructor() {
                      obj = { embeddedActivityJoinability: closure_6, handleCanJoin: null };
                      tmp = analyticsLocations(closure_2[45]);
                      closure_0 = closure_5(function* () {
                        let v3;
                        if (v3 === 2) {
                          v3 = 3;
                          throw new TypeError("Generator functions may not be called on executing generators");
                        } else if (tmp2 === 3) {
                          if (arg0 === 1) {
                            throw value;
                          } else if (arg0 === 2) {
                            const obj4 = { value, done: true };
                            return obj4;
                          } else {
                            return { value: "IconComponent", done: null };
                          }
                        } else {
                          try {
                            v3 = 2;
                            if (0 === analyticsLocations) {
                              if (arg0 === 1) {
                                v3 = 3;
                                throw value;
                              } else if (arg0 === 2) {
                                v3 = 3;
                                const obj5 = { value, done: true };
                                return obj5;
                              } else if (closure_1_7) {
                                if (null != inputApplication) {
                                  const obj6 = {
                                    channelId,
                                    applicationId: inputApplication.id,
                                    launchId: v3.launchId,
                                    inputApplication,
                                    analyticsLocations,
                                  };
                                  analyticsLocations = 1;
                                  const obj3 = v3(application[45]);
                                  v3 = 1;
                                  const obj7 = { value: obj3.maybeJoinEmbeddedActivity(obj6), done: false };
                                  return obj7;
                                }
                              } else {
                                const obj2 = analyticsLocations(application[32]);
                                const voiceChannel = obj2.selectVoiceChannel(channelId);
                              }
                            } else if (arg0 === 1) {
                              v3 = 3;
                              throw value;
                            } else if (arg0 === 2) {
                              v3 = 3;
                              const obj = { value, done: true };
                              return obj;
                            }
                            v3 = 3;
                            return { value: "IconComponent", done: null };
                          } catch (tmp15) {
                            v3 = 3;
                            throw tmp15;
                          }
                        }
                      });
                      obj.handleCanJoin = function () {
                        return closure_0(...arguments);
                      };
                      tmpResult = tmp(obj);
                      return;
                    }
                  }
                  cResult[17] = activity.applicationId;
                  cResult[18] = tmp13;
                  cResult[19] = obj13;
                  tmp24 = obj13;
                }
              }
            }
          }
        }
        class W {
          constructor() {
            obj = { embeddedActivityJoinability: closure_6, handleCanJoin: null };
            tmp = analyticsLocations(closure_2[45]);
            closure_0 = closure_5(function* () {
              let v3;
              if (v3 === 2) {
                v3 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp2 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  return { value: "IconComponent", done: null };
                }
              } else {
                try {
                  v3 = 2;
                  if (0 === analyticsLocations) {
                    if (arg0 === 1) {
                      v3 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      v3 = 3;
                      const obj5 = { value, done: true };
                      return obj5;
                    } else if (closure_1_7) {
                      if (null != inputApplication) {
                        const obj6 = {
                          channelId,
                          applicationId: inputApplication.id,
                          launchId: v3.launchId,
                          inputApplication,
                          analyticsLocations,
                        };
                        analyticsLocations = 1;
                        const obj3 = v3(application[45]);
                        v3 = 1;
                        const obj7 = { value: obj3.maybeJoinEmbeddedActivity(obj6), done: false };
                        return obj7;
                      }
                    } else {
                      const obj2 = analyticsLocations(application[32]);
                      const voiceChannel = obj2.selectVoiceChannel(channelId);
                    }
                  } else if (arg0 === 1) {
                    v3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    v3 = 3;
                    const obj = { value, done: true };
                    return obj;
                  }
                  v3 = 3;
                  return { value: "IconComponent", done: null };
                } catch (tmp15) {
                  v3 = 3;
                  throw tmp15;
                }
              }
            });
            obj.handleCanJoin = function () {
              return closure_0(...arguments);
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
        cResult[15] = W;
        tmp22 = W;
      }
      const obj14 = { userId: tmp16, channelId, application };
      cResult[6] = application;
      cResult[7] = channelId;
      cResult[8] = obj14;
      tmp19 = obj14;
    }
  : (activity) => {
      let Button;
      let Icon;
      let closure_7;
      let intl;
      let intl2;
      let items2;
      let items3;
      let obj11;
      let obj13;
      let obj14;
      let obj15;
      let obj8;
      activity = activity.activity;
      let analyticsLocations = activity.analyticsLocations;
      let application;
      embeddedActivityJoinability = undefined;
      react = undefined;
      let tmp = closure_30();
      const tmp2 = analyticsLocations;
      const items = [activity.applicationId];
      application = embeddedActivityJoinability(analyticsLocations(application[39])(items), 1)[0];
      let obj2 = activity(application[40]);
      const embeddedActivityLocationChannelId = obj2.getEmbeddedActivityLocationChannelId(activity.location);
      const arr2 = analyticsLocations(application[41])(activity.applicationId, embeddedActivityLocationChannelId);
      const context = react.useContext(analyticsLocations(application[28]));
      const channelId = context.channelId;
      const windowDimensions = context.windowDimensions;
      const tmp7 = embeddedActivityJoinability(
        react.useState(() => {
          const obj = activity(first[42]);
          return obj.getWindowDimensions().width - 2 * (EDGE_GUTTER + 16);
        }),
        2,
      );
      let closure_5 = tmp9;
      const first1 = tmp7[0];
      let obj3 = activity(application[43]);
      const fn = function u() {
        return windowDimensions.get().width;
      };
      fn.__closure = { windowDimensions };
      fn.__workletHash = 5011127543326;
      fn.__initData = __initData3;
      const fn2 = function c(arg0, arg1) {
        if (arg0 !== arg1) {
          const obj = ReanimatedRexport;
          obj.runOnJS(closure_5)(arg0 - 2 * (EDGE_GUTTER + 16));
        }
      };
      let obj = { runOnJS: activity(application[43]).runOnJS, setActivityPreviewWidth: tmp9, EDGE_GUTTER };
      fn2.__closure = obj;
      fn2.__workletHash = 8964477880370;
      fn2.__initData = __initData4;
      const animatedReaction = obj3.useAnimatedReaction(fn, fn2);
      let obj5 = activity(application[44]);
      let obj4 = { userId: AuthenticationStore.getId(), channelId, application };
      embeddedActivityJoinability = obj5.useEmbeddedActivityJoinability(obj4);
      const tmp12 = embeddedActivityJoinability === activity(application[44]).EmbeddedActivityJoinability.CAN_JOIN;
      react = tmp12;
      const items1 = [
        activity.launchId,
        analyticsLocations,
        application,
        tmp12,
        channelId,
        embeddedActivityJoinability,
      ];
      const callback = react.useCallback(() => {
        let obj = {
          embeddedActivityJoinability,
          handleCanJoin: function () {
            return closure_0(...arguments);
          },
        };
        const tmp = analyticsLocations(first[45]);
        let closure_0 = closure_5(function* () {
          let v3;
          if (v3 === 2) {
            v3 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp2 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj4 = { value, done: true };
              return obj4;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              v3 = 2;
              if (0 === analyticsLocations) {
                if (arg0 === 1) {
                  v3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  v3 = 3;
                  const obj5 = { value, done: true };
                  return obj5;
                } else if (closure_1_7) {
                  if (null != inputApplication) {
                    const obj6 = {
                      channelId,
                      applicationId: inputApplication.id,
                      launchId: v3.launchId,
                      inputApplication,
                      analyticsLocations,
                    };
                    analyticsLocations = 1;
                    const obj3 = v3(application[45]);
                    v3 = 1;
                    const obj7 = { value: obj3.maybeJoinEmbeddedActivity(obj6), done: false };
                    return obj7;
                  }
                } else {
                  const obj2 = analyticsLocations(application[32]);
                  const voiceChannel = obj2.selectVoiceChannel(channelId);
                }
              } else if (arg0 === 1) {
                v3 = 3;
                throw value;
              } else if (arg0 === 2) {
                v3 = 3;
                const obj = { value, done: true };
                return obj;
              }
              v3 = 3;
              return { value: "IconComponent", done: null };
            } catch (tmp15) {
              v3 = 3;
              throw tmp15;
            }
          }
        });
        tmp(obj);
      }, items1);
      let tmp16Result = null;
      if (null != application) {
        let obj6 = { style: tmp.activityInfoWrapper, children: items2 };
        let obj7 = {
          variant: "text-sm/semibold",
          style: tmp.activityInfoHeader,
          color: "text-default",
          children: intl.format(activity(tmp3[35]).t["n/IJ6Y"], obj8),
        };
        const tmp2Result = tmp2(application[38]);
        const Text = tmp4(tmp3[36]).Text;
        intl = tmp4(tmp3[35]).intl;
        obj8 = { n: arr2.length };
        items2 = [closure_27(Text, obj7)];
        const obj9 = {
          activeOpacity: 0.7,
          onPress: callback,
          style: tmp.previewImageWrapper,
          accessible: false,
          children: items3,
        };
        const PressableOpacity = tmp4(tmp3[49]).PressableOpacity;
        const obj10 = { style: tmp.previewImage, children: closure_27(tmp2(application[47]), obj11) };
        obj11 = { imageBackground: tmp14, aspectRatio: 1.7777777777777777 };
        const tmp2Result3 = tmp2(application[38]);
        items3 = [closure_27(tmp2Result3, obj10)];
        const obj12 = { style: tmp.joinButtonWrapper, children: closure_27(Button, obj13) };
        obj13 = {
          text: intl2.formatToPlainString(activity(application[35]).t["YV/hE8"], obj14),
          size: "sm",
          iconPosition: "start",
          variant: "primary-overlay",
          icon: closure_27(Icon, obj15),
          onPress: callback,
        };
        const tmp2Result4 = tmp2(application[38]);
        Button = tmp4(tmp3[48]).Button;
        intl2 = tmp4(tmp3[35]).intl;
        obj14 = { name: application.name };
        Icon = tmp4(tmp3[48]).Button.Icon;
        const iconURL = application.getIconURL(20);
        obj15 = { variant: "entity", source: size };
        size = { uri: iconURL, width: 20, height: 20 };
        items3[1] = closure_27(tmp2Result4, obj12);
        items2[1] = closure_28(PressableOpacity, obj9);
        tmp16Result = closure_28(tmp2Result, obj6);
      }
      return tmp16Result;
    };
const memo2 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_38 = memo2(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (ignoredUserIds) => {
        let blockedUserIds;
        let channelId;
        let items;
        let items1;
        let obj9;
        let tmp5;
        const obj = react2;
        const cResult = obj.c(19);
        ({ channelId, blockedUserIds } = ignoredUserIds);
        ignoredUserIds = ignoredUserIds.ignoredUserIds;
        const tmp4 = closure_30();
        if (cResult[0] !== blockedUserIds) {
          const _Array = Array;
          const arr = Array.from(blockedUserIds);
          cResult[0] = blockedUserIds;
          cResult[1] = arr;
          tmp5 = arr;
        } else {
          tmp5 = cResult[1];
        }
        if (cResult[2] === channelId) {
          let tmp8;
          let tmp12;
          let tmp14;
          if (cResult[3] === tmp5) {
            tmp8 = cResult[4];
          }
          useTrackImpressionDefault(tmp8);
          size = ignoredUserIds.size;
          const size2 = blockedUserIds.size;
          const _Symbol = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = intl6.intl;
            const stringResult = intl.string(intl6.t.CjrALd);
            cResult[5] = stringResult;
            tmp12 = stringResult;
          } else {
            tmp12 = cResult[5];
          }
          if (size2 > 0) {
            let tmp20;
            let tmp23;
            let tmp24;
            let tmp27;
            if (size > 0) {
              let tmp18;
              const _Symbol2 = Symbol;
              if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
                const intl4 = intl6.intl;
                const stringResult1 = intl4.string(intl6.t.MpRfpC);
                cResult[6] = stringResult1;
                tmp18 = stringResult1;
              } else {
                tmp18 = cResult[6];
              }
              tmp14 = tmp18;
            }
            const _Symbol3 = Symbol;
            if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp22 = closure_27(CircleErrorIcon.CircleErrorIcon, { color: "text-feedback-warning" });
              cResult[11] = tmp22;
              tmp20 = tmp22;
            } else {
              tmp20 = cResult[11];
            }
            const _Symbol4 = Symbol;
            if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
              const obj2 = { flexShrink: 1 };
              cResult[12] = obj2;
              tmp23 = obj2;
            } else {
              tmp23 = cResult[12];
            }
            const _Symbol5 = Symbol;
            if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
              let tmp25 = null;
              if (null != tmp12) {
                const obj3 = { variant: "heading-sm/semibold", children: tmp12 };
                tmp25 = closure_27(Text_Text.Text, obj3);
              }
              cResult[13] = tmp25;
              tmp24 = tmp25;
            } else {
              tmp24 = cResult[13];
            }
            if (cResult[14] !== tmp14) {
              const obj4 = { variant: "text-sm/bold", color: "interactive-text-active", style: tmp23, children: items };
              items = [tmp14, " ", tmp24];
              const tmp29 = closure_28(Text_Text.Text, obj4);
              cResult[14] = tmp14;
              cResult[15] = tmp29;
              tmp27 = tmp29;
            } else {
              tmp27 = cResult[15];
            }
            if (cResult[16] === tmp4.blockedMemberWarning) {
              let tmp30;
              if (cResult[17] === tmp27) {
                tmp30 = cResult[18];
              }
              return tmp30;
            }
            const obj5 = { style: tmp4.blockedMemberWarning, children: items1 };
            items1 = [tmp20, tmp27];
            const tmp32 = closure_28(NativeViewDefault, obj5);
            cResult[16] = tmp4.blockedMemberWarning;
            cResult[17] = tmp27;
            cResult[18] = tmp32;
            tmp30 = tmp32;
          }
          if (size > 0) {
            let tmp16;
            if (cResult[7] !== size) {
              const intl3 = intl6.intl;
              const obj6 = { n: size };
              const formatResult = intl3.format(intl6.t.u9trAZ, obj6);
              cResult[7] = size;
              cResult[8] = formatResult;
              tmp16 = formatResult;
            } else {
              tmp16 = cResult[8];
            }
            tmp14 = tmp16;
          } else if (cResult[9] !== size2) {
            const intl2 = intl6.intl;
            const obj7 = { n: size2 };
            const formatResult1 = intl2.format(intl6.t["6X29zb"], obj7);
            cResult[9] = size2;
            cResult[10] = formatResult1;
            tmp14 = formatResult1;
          } else {
            tmp14 = cResult[10];
          }
        }
        const obj8 = {
          name: discord_common_AnalyticsUtils.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
          properties: obj9,
        };
        obj9 = { channel_id: channelId, blocked_user_ids: tmp5, warning_surface: constants4.PRE_JOIN_SHEET };
        cResult[2] = channelId;
        cResult[3] = tmp5;
        cResult[4] = obj8;
        tmp8 = obj8;
      }
    : (blockedUserIds) => {
        let channelId;
        let ignoredUserIds;
        let items;
        let items1;
        let stringResult1;
        blockedUserIds = blockedUserIds.blockedUserIds;
        ({ channelId, ignoredUserIds } = blockedUserIds);
        const obj = {
          name: discord_common_AnalyticsUtils.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
          properties: {
            channel_id: channelId,
            blocked_user_ids: Array.from(blockedUserIds),
            warning_surface: constants4.PRE_JOIN_SHEET,
          },
        };
        const tmp = closure_30();
        const tmp4 = useTrackImpressionDefault;
        ({
          channel_id: channelId,
          blocked_user_ids: Array.from(blockedUserIds),
          warning_surface: constants4.PRE_JOIN_SHEET,
        });
        tmp4(obj);
        size = ignoredUserIds.size;
        const size2 = blockedUserIds.size;
        const intl = intl6.intl;
        const stringResult = intl.string(intl6.t.CjrALd);
        if (size2 > 0) {
          if (size > 0) {
            const intl4 = intl6.intl;
            stringResult1 = intl4.string(intl6.t.MpRfpC);
          }
          const obj3 = { style: tmp.blockedMemberWarning, children: items };
          items = [,];
          const tmp2Result = NativeViewDefault;
          items[0] = closure_27(CircleErrorIcon.CircleErrorIcon, { color: "text-feedback-warning" });
          const obj4 = {
            variant: "text-sm/bold",
            color: "interactive-text-active",
            style: { flexShrink: 1 },
            children: items1,
          };
          items1 = [stringResult1, " "];
          let tmp11Result = null;
          const Text = Text_Text.Text;
          if (null != stringResult) {
            const obj5 = { variant: "heading-sm/semibold", children: stringResult };
            tmp11Result = closure_27(Text_Text.Text, obj5);
          }
          items1[2] = tmp11Result;
          items[1] = closure_28(Text, obj4);
          return closure_28(tmp2Result, obj3);
        }
        if (size > 0) {
          const intl3 = intl6.intl;
          const obj6 = { n: size };
          stringResult1 = intl3.format(intl6.t.u9trAZ, obj6);
        } else {
          const intl2 = intl6.intl;
          const obj7 = { n: size2 };
          stringResult1 = intl2.format(intl6.t["6X29zb"], obj7);
        }
      },
);
ReactCompilerGating = ReactCompilerGating_mod;
let closure_39 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let channelId;
      let guildId;
      let members;
      let obj3;
      let title;
      const obj = react2;
      const cResult = obj.c(7);
      ({ title, members, channelId, guildId } = arg0);
      if (cResult[0] === channelId) {
        if (cResult[1] === guildId) {
          let tmp2;
          if (cResult[2] === members) {
            tmp2 = cResult[3];
          }
          if (cResult[4] === tmp2) {
            let tmp15;
            if (cResult[5] === title) {
              tmp15 = cResult[6];
            }
            return tmp15;
          }
          const obj2 = { title, hasIcons: true, children: tmp2 };
          const tmp19 = closure_27(FormComponents.VoicePanelFormSection, obj2);
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
          let push = items.push;
          let obj4 = { user: tmp7, channelId, guildId, nick: obj3.getName(guildId, channelId, tmp7) };
          let MemberRowItem = FormComponents.MemberRowItem;
          obj3 = NicknameUtilsDefault;
          let arr = push(closure_27(MemberRowItem, obj4, tmp4));
        }
        continue;
      }
      cResult[0] = channelId;
      cResult[1] = guildId;
      cResult[2] = members;
      cResult[3] = items;
      tmp2 = items;
    }
  : (title) => {
      let channelId;
      let guildId;
      let require;
      ({ members: require, channelId: importDefault, guildId: dependencyMap } = title);
      let obj = {
        title: title.title,
        hasIcons: true,
        children: (() => {
          let obj2;
          const items = [];
          const iter = _require[Symbol.iterator]();
          const nextResult = iter.next();
          while (iter !== undefined) {
            let tmp3 = nextResult;
            let user = UserStore.getUser(nextResult);
            let tmp6 = user;
            if (null != user) {
              let push = items.push;
              let obj = {
                user: tmp6,
                channelId: importDefault,
                guildId: dependencyMap,
                nick: obj2.getName(dependencyMap, importDefault, tmp6),
              };
              let MemberRowItem = FormComponents.MemberRowItem;
              obj2 = NicknameUtilsDefault;
              let arr = push(closure_27(MemberRowItem, obj, tmp3));
            }
            continue;
          }
          return items;
        })(),
      };
      const VoicePanelFormSection = FormComponents.VoicePanelFormSection;
      return closure_27(VoicePanelFormSection, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_40 = ReactCompilerGating.isReactCompilerEnabled()
  ? (members) => {
      let blockedMembers;
      let closure_6;
      let ignoredMembers;
      let intl;
      let intl2;
      let intl5;
      let items;
      let items1;
      let obj10;
      let obj8;
      let streamingMembers;
      let tmp = members;
      let obj = members(ignoredMembers[27]);
      const cResult = obj.c(33);
      members = members.members;
      ({ streamingMembers, blockedMembers } = members);
      ignoredMembers = members.ignoredMembers;
      const context = react.useContext(blockedMembers(ignoredMembers[28]));
      const channelId = context.channelId;
      const guildId = context.guildId;
      const tmp5 = embeddedActivityJoinability(react.useState(20), 2);
      const first = tmp5[0];
      embeddedActivityJoinability = tmp5[1];
      const sum = blockedMembers.size + ignoredMembers.size;
      const diff = members.length - sum;
      if (cResult[0] === blockedMembers) {
        if (cResult[1] === sum) {
          if (cResult[2] === channelId) {
            let tmp9;
            let tmp14;
            if (cResult[3] === ignoredMembers) {
              tmp9 = cResult[4];
            }
            if (cResult[5] === channelId) {
              let tmp13;
              if (cResult[6] === streamingMembers) {
                tmp13 = cResult[7];
              }
              if (cResult[10] === blockedMembers) {
                if (cResult[11] === channelId) {
                  let tmp16;
                  if (cResult[12] === guildId) {
                    tmp16 = cResult[13];
                  }
                  if (cResult[14] === channelId) {
                    if (cResult[15] === guildId) {
                      let tmp20;
                      if (cResult[16] === ignoredMembers) {
                        tmp20 = cResult[17];
                      }
                      if (cResult[18] === blockedMembers) {
                        if (cResult[19] === sum) {
                          if (cResult[20] === channelId) {
                            if (cResult[21] === guildId) {
                              if (cResult[22] === ignoredMembers) {
                                if (cResult[23] === members) {
                                  if (cResult[24] === diff) {
                                    let tmp24;
                                    if (cResult[25] === first) {
                                      tmp24 = cResult[26];
                                    }
                                    if (cResult[27] === tmp9) {
                                      if (cResult[28] === tmp13) {
                                        if (cResult[29] === tmp16) {
                                          if (cResult[30] === tmp20) {
                                            let tmp30;
                                            if (cResult[31] === tmp24) {
                                              tmp30 = cResult[32];
                                            }
                                            return tmp30;
                                          }
                                        }
                                      }
                                    }
                                    let obj2 = { children: items };
                                    items = [tmp9, tmp13, tmp16, tmp20, tmp24];
                                    const tmp33 = closure_28(closure_29, obj2);
                                    cResult[27] = tmp9;
                                    cResult[28] = tmp13;
                                    cResult[29] = tmp16;
                                    cResult[30] = tmp20;
                                    cResult[31] = tmp24;
                                    cResult[32] = tmp33;
                                    tmp30 = tmp33;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                      let tmp26Result = diff > 0;
                      if (tmp26Result) {
                        let formatToPlainStringResult;
                        const VoicePanelFormSection = tmp(tmp2[53]).VoicePanelFormSection;
                        if (0 === sum) {
                          const intl4 = tmp(tmp2[35]).intl;
                          let obj3 = { n: members.length };
                          formatToPlainStringResult = intl4.formatToPlainString(tmp(tmp2[35]).t.vloEU7, obj3);
                        } else {
                          const intl3 = tmp(tmp2[35]).intl;
                          const obj4 = { n: diff };
                          formatToPlainStringResult = intl3.formatToPlainString(tmp(tmp2[35]).t.R0h4pE, obj4);
                        }
                        const obj5 = { hasIcons: true, title: formatToPlainStringResult, children: items1 };
                        items1 = [
                          (() => {
                            const items = [];
                            for (const item10007 of members) {
                              if (items.length >= first) {
                                obj.return();
                                break;
                              } else {
                                let hasItem =
                                  blockedMembers.has(item10007.user.id) || ignoredMembers.has(item10007.user.id);
                                if (!hasItem) {
                                  let push = items.push;
                                  let obj2 = {
                                    user: item10007.user,
                                    channelId,
                                    guildId,
                                    nick: obj3.getName(guildId, channelId, item10007.user),
                                    showGameActivity: true,
                                  };
                                  let MemberRowItem = FormComponents.MemberRowItem;
                                  let obj3 = NicknameUtilsDefault;
                                  let arr = push(closure_27(MemberRowItem, obj2, item10007.user.id));
                                }
                                continue;
                              }
                              return items;
                            }
                          })(),
                        ];
                        let tmp28 = diff > first;
                        if (tmp28) {
                          const obj6 = {
                            label: intl5.string(tmp(ignoredMembers[35]).t.F4MCUO),
                            onPress() {
                              return closure_6(first + 20);
                            },
                          };
                          const TableRow = tmp(tmp2[55]).TableRow;
                          intl5 = tmp(tmp2[35]).intl;
                          tmp28 = closure_27(TableRow, obj6);
                        }
                        items1[1] = tmp28;
                        tmp26Result = closure_28(VoicePanelFormSection, obj5);
                      }
                      cResult[18] = blockedMembers;
                      cResult[19] = sum;
                      cResult[20] = channelId;
                      cResult[21] = guildId;
                      cResult[22] = ignoredMembers;
                      cResult[23] = members;
                      cResult[24] = diff;
                      cResult[25] = first;
                      cResult[26] = tmp26Result;
                      tmp24 = tmp26Result;
                    }
                  }
                  let tmp21 = ignoredMembers.size > 0;
                  if (tmp21) {
                    const obj7 = {
                      title: intl2.formatToPlainString(tmp(ignoredMembers[35]).t["/pXOCN"], obj8),
                      members: ignoredMembers,
                      channelId,
                      guildId,
                    };
                    intl2 = tmp(tmp2[35]).intl;
                    obj8 = { n: ignoredMembers.size };
                    tmp21 = closure_27(closure_39, obj7);
                  }
                  cResult[14] = channelId;
                  cResult[15] = guildId;
                  cResult[16] = ignoredMembers;
                  cResult[17] = tmp21;
                  tmp20 = tmp21;
                }
              }
              let tmp17 = blockedMembers.size > 0;
              if (tmp17) {
                const obj9 = {
                  title: intl.formatToPlainString(tmp(ignoredMembers[35]).t.pGJ1Qy, obj10),
                  members: blockedMembers,
                  channelId,
                  guildId,
                };
                intl = tmp(tmp2[35]).intl;
                obj10 = { n: blockedMembers.size };
                tmp17 = closure_27(closure_39, obj9);
              }
              cResult[10] = blockedMembers;
              cResult[11] = channelId;
              cResult[12] = guildId;
              cResult[13] = tmp17;
              tmp16 = tmp17;
            }
            if (cResult[8] !== channelId) {
              const fn = function c(arg0) {
                const tmp = _slicedToArray(arg0, 2);
                const obj = { channelId, voiceState: tmp[0], stream: tmp[1] };
                return closure_27(closure_31, obj, tmp[1].ownerId);
              };
              cResult[8] = channelId;
              cResult[9] = fn;
              tmp14 = fn;
            } else {
              tmp14 = cResult[9];
            }
            const mapped = streamingMembers.map(tmp14);
            cResult[5] = channelId;
            cResult[6] = streamingMembers;
            cResult[7] = mapped;
            tmp13 = mapped;
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
    }
  : (members) => {
      let blockedMembers;
      let closure_6;
      let intl;
      let intl2;
      let intl5;
      let items1;
      let obj3;
      let obj5;
      let streamingMembers;
      members = members.members;
      ({ streamingMembers, blockedMembers } = members);
      const ignoredMembers = members.ignoredMembers;
      embeddedActivityJoinability = undefined;
      const tmp = ignoredMembers;
      const context = react.useContext(blockedMembers(ignoredMembers[28]));
      const channelId = context.channelId;
      const guildId = context.guildId;
      const tmp3 = embeddedActivityJoinability(react.useState(20), 2);
      const first = tmp3[0];
      embeddedActivityJoinability = tmp3[1];
      const sum = blockedMembers.size + ignoredMembers.size;
      const diff = members.length - sum;
      let tmp9 = sum > 0;
      if (tmp9) {
        let obj = { channelId, blockedUserIds: blockedMembers, ignoredUserIds: ignoredMembers };
        tmp9 = closure_27(closure_38, obj);
      }
      const children = [
        tmp9,
        streamingMembers.map((item) => {
          let tmp;
          let tmp2;
          [tmp, tmp2] = item;
          const obj = { channelId, voiceState: tmp, stream: tmp2 };
          return closure_27(closure_31, obj, tmp2.ownerId);
        }),
        ,
        ,
      ];
      let tmp12 = blockedMembers.size > 0;
      if (tmp12) {
        let obj2 = {
          title: intl.formatToPlainString(members(tmp[35]).t.pGJ1Qy, obj3),
          members: blockedMembers,
          channelId,
          guildId,
        };
        intl = members(tmp[35]).intl;
        obj3 = { n: blockedMembers.size };
        tmp12 = closure_27(closure_39, obj2);
      }
      children[2] = tmp12;
      let tmp16 = ignoredMembers.size > 0;
      if (tmp16) {
        const obj4 = {
          title: intl2.formatToPlainString(members(tmp[35]).t["/pXOCN"], obj5),
          members: ignoredMembers,
          channelId,
          guildId,
        };
        intl2 = members(tmp[35]).intl;
        obj5 = { n: ignoredMembers.size };
        tmp16 = closure_27(closure_39, obj4);
      }
      children[3] = tmp16;
      let tmp7Result = diff > 0;
      if (tmp7Result) {
        let formatToPlainStringResult;
        const VoicePanelFormSection = members(tmp[53]).VoicePanelFormSection;
        if (0 === sum) {
          const intl4 = tmp21(tmp[35]).intl;
          const obj6 = { n: members.length };
          formatToPlainStringResult = intl4.formatToPlainString(tmp21(tmp[35]).t.vloEU7, obj6);
        } else {
          const intl3 = tmp21(tmp[35]).intl;
          const obj7 = { n: diff };
          formatToPlainStringResult = intl3.formatToPlainString(tmp21(tmp[35]).t.R0h4pE, obj7);
        }
        const obj8 = { hasIcons: true, title: formatToPlainStringResult, children: items1 };
        items1 = [
          (() => {
            const items = [];
            for (const item10007 of members) {
              if (items.length >= first) {
                obj.return();
                break;
              } else {
                let hasItem = blockedMembers.has(item10007.user.id) || ignoredMembers.has(item10007.user.id);
                if (!hasItem) {
                  let push = items.push;
                  let obj2 = {
                    user: item10007.user,
                    channelId,
                    guildId,
                    nick: obj3.getName(guildId, channelId, item10007.user),
                    showGameActivity: true,
                  };
                  let MemberRowItem = FormComponents.MemberRowItem;
                  let obj3 = NicknameUtilsDefault;
                  let arr = push(closure_27(MemberRowItem, obj2, item10007.user.id));
                }
                continue;
              }
              return items;
            }
          })(),
        ];
        let tmp23 = diff > first;
        if (tmp23) {
          const obj9 = {
            label: intl5.string(members(tmp[35]).t.F4MCUO),
            onPress() {
              return closure_6(first + 20);
            },
          };
          const TableRow = tmp21(tmp[55]).TableRow;
          intl5 = tmp21(tmp[35]).intl;
          tmp23 = closure_27(TableRow, obj9);
        }
        items1[1] = tmp23;
        tmp7Result = closure_28(VoicePanelFormSection, obj8);
      }
      children[4] = tmp7Result;
      return closure_28(closure_29, { children });
    };
const memo3 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_41 = memo3(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (channelId) => {
        let first;
        let tmp10;
        let tmp11;
        const obj = channelId(576);
        const cResult = obj.c(7);
        const tmp = channelId;
        channelId = channelId.channelId;
        const tmp4 = closure_30();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [AuthenticationStore, GameConsoleStore, VoiceStateStore, SessionsStore];
          cResult[0] = items;
          first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== channelId) {
          const fn = function o() {
            const id = AuthenticationStore.getId();
            const voiceStateForSession = VoiceStateStore.getVoiceStateForSession(
              id,
              GameConsoleStore.getRemoteSessionId(),
            );
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
                const getSessionById = SessionsStore.getSessionById;
                if (voiceStateForSession != null) {
                  str = voiceStateForSession.sessionId;
                }
                if (str == null) {
                  str = "";
                }
                tmp8 = null != getSessionById(str);
              }
              tmp6 = tmp8;
            }
            return tmp6;
          };
          const items1 = [channelId];
          cResult[1] = channelId;
          cResult[2] = fn;
          cResult[3] = items1;
          tmp11 = items1;
          tmp10 = fn;
        } else {
          tmp10 = cResult[2];
          tmp11 = cResult[3];
        }
        const tmpResult = tmp(504);
        const stateFromStores = tmpResult.useStateFromStores(first, tmp10, tmp11);
        if (cResult[4] === stateFromStores) {
          let tmp13;
          if (cResult[5] === tmp4) {
            tmp13 = cResult[6];
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
      }
    : (channelId) => {
        channelId = channelId.channelId;
        const items = [AuthenticationStore, GameConsoleStore, VoiceStateStore, SessionsStore];
        const items1 = [channelId];
        let tmp3 = null;
        const tmp = closure_30();
        const obj = channelId(504);
        if (
          obj.useStateFromStores(
            items,
            () => {
              const id = AuthenticationStore.getId();
              const voiceStateForSession = VoiceStateStore.getVoiceStateForSession(
                id,
                GameConsoleStore.getRemoteSessionId(),
              );
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
                  const getSessionById = SessionsStore.getSessionById;
                  if (voiceStateForSession != null) {
                    str = voiceStateForSession.sessionId;
                  }
                  if (str == null) {
                    str = "";
                  }
                  tmp8 = null != getSessionById(str);
                }
                tmp6 = tmp8;
              }
              return tmp6;
            },
            items1,
          )
        ) {
          const obj2 = { style: tmp.consolePreJoinPadding };
          tmp3 = closure_27(NativeViewDefault, obj2);
        }
        return tmp3;
      },
);
ReactCompilerGating = ReactCompilerGating_mod;
let closure_42 = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (ignoredMembers) => {
        let blockedMembers;
        let channelId;
        let closure_5;
        let first;
        let members;
        let streamingMembers;
        let tmp17;
        let tmp9;
        let tmp2 = channelId;
        let obj = blockedMembers(channelId[27]);
        const cResult = obj.c(46);
        ({ members, streamingMembers, blockedMembers } = ignoredMembers);
        ignoredMembers = ignoredMembers.ignoredMembers;
        const tmp4 = closure_30();
        const context = react.useContext(ignoredMembers(channelId[28]));
        channelId = context.channelId;
        const guildId = context.guildId;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [ChannelStore];
          cResult[0] = items;
          first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== channelId) {
          const fn = function o() {
            return ChannelStore.getChannel(channelId);
          };
          cResult[1] = channelId;
          cResult[2] = fn;
          tmp9 = fn;
        } else {
          tmp9 = cResult[2];
        }
        const tmpResult = blockedMembers(tmp2[29]);
        const stateFromStores = tmpResult.useStateFromStores(first, tmp9);
        const tmp11 = ignoredMembers(tmp2[57])(stateFromStores);
        const tmp5Result = ignoredMembers(tmp2[58]);
        const analyticsLocations = tmp5Result(tmp5(tmp2[59]).VOICE_PANEL_PRE_JOIN).analyticsLocations;
        if (cResult[3] === analyticsLocations) {
          if (cResult[4] === channelId) {
            let tmp13;
            let tmp14;
            if (cResult[5] === guildId) {
              tmp13 = cResult[6];
              tmp14 = cResult[7];
            }
            const effect = react.useEffect(tmp13, tmp14);
            if (cResult[8] === blockedMembers) {
              if (cResult[9] === ignoredMembers) {
                let tmp21;
                const tmp19 = ignoredMembers(tmp2[61])();
                _asyncToGenerator = tmp19;
                if (cResult[15] !== tmp19) {
                  class J {
                    constructor() {
                      lockResult = closure_5.lock();
                      return () => {
                        closure_1_5.unlock();
                      };
                    }
                  }
                  const items1 = [tmp19];
                  cResult[15] = tmp19;
                  cResult[16] = J;
                  cResult[17] = items1;
                  tmp21 = items1;
                } else {
                  class J {
                    constructor() {
                      lockResult = closure_5.lock();
                      return () => {
                        closure_1_5.unlock();
                      };
                    }
                  }
                  tmp21 = cResult[17];
                }
                const effect1 = react.useEffect(J, tmp21);
                if (cResult[18] !== members.length > 0) {
                  class J {
                    constructor() {
                      lockResult = closure_5.lock();
                      return () => {
                        closure_1_5.unlock();
                      };
                    }
                  }
                  const obj3 = { hasMembers: members.length > 0 };
                  cResult[18] = members.length > 0;
                  cResult[19] = closure_27(closure_32, obj3);
                  const tmp26 = closure_27(closure_32, obj3);
                } else {
                  class J {
                    constructor() {
                      lockResult = closure_5.lock();
                      return () => {
                        closure_1_5.unlock();
                      };
                    }
                  }
                }
                if (cResult[20] === stateFromStores) {
                  class J {
                    constructor() {
                      lockResult = closure_5.lock();
                      return () => {
                        closure_1_5.unlock();
                      };
                    }
                  }
                }
                let tmp28 = null;
                if (tmp11) {
                  class J {
                    constructor() {
                      lockResult = closure_5.lock();
                      return () => {
                        closure_1_5.unlock();
                      };
                    }
                  }
                  const obj4 = {
                    style: tmp4.optInChannelsContainer,
                    channel: stateFromStores,
                    analyticsSection: constants2.CHANNEL,
                  };
                  tmp28 = closure_27(tmp5(tmp2[62]), obj4);
                }
                cResult[20] = stateFromStores;
                cResult[21] = tmp11;
                cResult[22] = tmp4;
                cResult[23] = tmp28;
              }
            }
            if (cResult[12] === blockedMembers) {
              class J {
                constructor() {
                  lockResult = closure_5.lock();
                  return () => {
                    closure_1_5.unlock();
                  };
                }
              }
              const found = members.filter(tmp17);
              cResult[8] = blockedMembers;
              cResult[9] = ignoredMembers;
              cResult[10] = members;
              cResult[11] = found;
            }
            const fn2 = function w(user) {
              const hasItem = blockedMembers.has(user.user.id);
              const tmp2 = !hasItem && !ignoredMembers.has(user.user.id);
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
            const obj = AnalyticsUtilsDefault;
            const obj2 = { guild_id: guildId, channel_id: channelId, location_stack: analyticsLocations };
            obj.track(constants.VIEW_VOICE_CHANNEL, obj2);
          }
        }
        const items2 = [channelId, guildId, analyticsLocations];
        cResult[3] = analyticsLocations;
        cResult[4] = channelId;
        cResult[5] = guildId;
        cResult[6] = E;
        cResult[7] = items2;
        tmp14 = items2;
        tmp13 = E;
      }
    : (members) => {
        members = members.members;
        const blockedMembers = members.blockedMembers;
        const ignoredMembers = members.ignoredMembers;
        const activities = members.activities;
        const streamingMembers = members.streamingMembers;
        let tmp2 = blockedMembers;
        const tmp = closure_30();
        const context = react.useContext(blockedMembers(ignoredMembers[28]));
        const channelId = context.channelId;
        const guildId = context.guildId;
        let obj = members(ignoredMembers[29]);
        const items = [ChannelStore];
        const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
        const tmp6 = blockedMembers(ignoredMembers[57])(stateFromStores);
        const tmp7 = blockedMembers(ignoredMembers[58]);
        const analyticsLocations = tmp7(blockedMembers(ignoredMembers[59]).VOICE_PANEL_PRE_JOIN).analyticsLocations;
        const items1 = [channelId, guildId, analyticsLocations];
        const effect = react.useEffect(() => {
          const obj = AnalyticsUtilsDefault;
          const obj2 = { guild_id: guildId, channel_id: channelId, location_stack: analyticsLocations };
          obj.track(constants.VIEW_VOICE_CHANNEL, obj2);
        }, items1);
        const items2 = [members, blockedMembers, ignoredMembers];
        const memo = react.useMemo(
          () =>
            members.filter((user) => {
              const hasItem = set.has(user.user.id);
              const tmp2 = !hasItem && !set2.has(user.user.id);
              return tmp2;
            }),
          items2,
        );
        const tmp10 = blockedMembers(ignoredMembers[61])();
        let closure_6 = tmp10;
        const items3 = [tmp10];
        const effect1 = react.useEffect(() => {
          closure_6.lock();
          return () => {
            closure_1_6.unlock();
          };
        }, items3);
        let obj2 = { hasMembers: members.length > 0 };
        const items4 = [closure_27(closure_32, obj2), , , , ,];
        let tmp14Result = null;
        if (tmp6) {
          const obj3 = {
            style: tmp.optInChannelsContainer,
            channel: stateFromStores,
            analyticsSection: constants2.CHANNEL,
          };
          tmp14Result = closure_27(tmp2(tmp3[62]), obj3);
        }
        items4[1] = tmp14Result;
        items4[2] = activities.map((activity) => {
          const obj = { activity, analyticsLocations };
          return closure_27(closure_37, obj, activity.launchId);
        });
        let tmp14Result3 = members.length > 0 || blockedMembers.size > 0 || ignoredMembers.size > 0;
        if (tmp14Result3) {
          const obj4 = { members, streamingMembers, blockedMembers, ignoredMembers };
          tmp14Result3 = closure_27(closure_40, obj4);
        }
        items4[3] = tmp14Result3;
        let tmp14Result4 = null != guildId;
        if (tmp14Result4) {
          const obj5 = { members: memo, guildId };
          tmp14Result4 = closure_27(tmp2(tmp3[63]), obj5);
        }
        const obj6 = { children: items4 };
        items4[4] = tmp14Result4;
        items4[5] = closure_27(closure_41, { channelId });
        return closure_28(closure_29, obj6);
      },
);
const __initData5 = {
  code: 'function VoicePanelPreJoinContentTsx5(){const{windowDimensions,roundToNearestPixel,controlsSpecs,safeArea,withSpring,transitionState,TransitionStates,interpolate,useReducedMotion,MODE_CHANGE_PHYSICS,runOnJS,transitionCleanUp}=this.__closure;const{height:windowHeight}=windowDimensions.get();return{paddingBottom:windowHeight-roundToNearestPixel(windowHeight*0.8)+controlsSpecs.get().height+safeArea.get().bottom,opacity:withSpring(transitionState===TransitionStates.YEETED?0:1),transform:[{translateY:withSpring(interpolate(!useReducedMotion.get()&&transitionState===TransitionStates.YEETED?1:0,[0,1],[0,400]),MODE_CHANGE_PHYSICS,"respect-motion-settings",function(t1){const finished=t1===undefined?false:t1;finished&&transitionState===TransitionStates.YEETED&&runOnJS(transitionCleanUp)();})}]};}',
};
let closure_44 = {
  code: "function VoicePanelPreJoinContentTsx6(t1){const{transitionState,TransitionStates,runOnJS,transitionCleanUp}=this.__closure;const finished=t1===undefined?false:t1;finished&&transitionState===TransitionStates.YEETED&&runOnJS(transitionCleanUp)();}",
};
const __initData6 = {
  code: "function VoicePanelPreJoinContentTsx7(){const{windowDimensions,roundToNearestPixel,controlsSpecs,safeArea,withSpring,transitionState,TransitionStates,interpolate,useReducedMotion,MODE_CHANGE_PHYSICS,runOnJS,transitionCleanUp}=this.__closure;const{height:windowHeight}=windowDimensions.get();return{paddingBottom:windowHeight-roundToNearestPixel(windowHeight*0.8)+controlsSpecs.get().height+safeArea.get().bottom,opacity:withSpring(transitionState===TransitionStates.YEETED?0:1),transform:[{translateY:withSpring(interpolate(!useReducedMotion.get()&&transitionState===TransitionStates.YEETED?1:0,[0,1],[0,400]),MODE_CHANGE_PHYSICS,'respect-motion-settings',function(finished=false){finished&&transitionState===TransitionStates.YEETED&&runOnJS(transitionCleanUp)();})}]};}",
};
let closure_46 = {
  code: "function VoicePanelPreJoinContentTsx8(finished=false){const{transitionState,TransitionStates,runOnJS,transitionCleanUp}=this.__closure;finished&&transitionState===TransitionStates.YEETED&&runOnJS(transitionCleanUp)();}",
};
ReactCompilerGating = ReactCompilerGating_mod;
let closure_47 = ReactCompilerGating.isReactCompilerEnabled()
  ? (transitionState) => {
      let controlsSpecs;
      let safeArea;
      let tmp4;
      let tmp5;
      let tmp6;
      let windowDimensions;
      let tmp = _require;
      let obj = require("react");
      const cResult = obj.c(15);
      if (cResult[0] !== transitionState) {
        transitionState = transitionState.transitionState;
        importDefault = transitionState;
        const transitionCleanUp = transitionState.transitionCleanUp;
        _require = transitionCleanUp;
        const tmp9 = safeArea(transitionState, controlsSpecs);
        let num = 0;
        cResult[0] = transitionState;
        let num2 = 1;
        cResult[1] = tmp9;
        cResult[2] = transitionCleanUp;
        cResult[3] = transitionState;
        tmp5 = transitionCleanUp;
        tmp4 = tmp9;
        tmp6 = transitionState;
      } else {
        tmp4 = cResult[1];
        _require = cResult[2];
        importDefault = cResult[3];
      }
      const tmp10 = closure_30();
      const context = react.useContext(require("VoicePanelStateContext"));
      windowDimensions = context.windowDimensions;
      controlsSpecs = context.controlsSpecs;
      safeArea = context.safeArea;
      const preJoinContentSize = context.preJoinContentSize;
      const useReducedMotion = context.useReducedMotion;
      let fn = function p() {
        let fn;
        let interpolateResult;
        let items;
        let num2;
        let sum;
        let withSpring;
        const height = windowDimensions.get().height;
        let obj = { paddingBottom: sum + safeArea.get().bottom, opacity: withSpring(num2), transform: items };
        const diff = height - roundToNearestPixelDefault(0.8 * height);
        sum = diff + controlsSpecs.get().height;
        withSpring = spring.withSpring;
        let num = 1;
        num2 = 1;
        spring;
        if (transitionState === native.TransitionStates.YEETED) {
          num2 = 0;
        }
        const withSpring2 = spring.withSpring;
        spring;
        const interpolate = ReanimatedRexport.interpolate;
        ReanimatedRexport;
        if (useReducedMotion.get()) {
          num = 0;
        }
        const obj2 = { translateY: withSpring2(interpolateResult, MODE_CHANGE_PHYSICS, "respect-motion-settings", fn) };
        fn = function t(arg0) {
          const tmp =
            undefined !== arg0 && arg0 && transitionState === closure_0(windowDimensions[65]).TransitionStates.YEETED;
          if (tmp) {
            const obj = closure_0(windowDimensions[43]);
            obj.runOnJS(closure_1_0)();
          }
        };
        interpolateResult = interpolate(num, [0, 1], [0, 400]);
        fn.__closure = {
          transitionState,
          TransitionStates: native.TransitionStates,
          runOnJS: ReanimatedRexport.runOnJS,
          transitionCleanUp,
        };
        fn.__workletHash = 10937921490250;
        fn.__initData = __initData;
        ({
          transitionState,
          TransitionStates: native.TransitionStates,
          runOnJS: ReanimatedRexport.runOnJS,
          transitionCleanUp,
        });
        items = [obj2];
        return obj;
      };
      const tmpResult = tmp(windowDimensions[43]);
      let obj2 = {
        windowDimensions,
        roundToNearestPixel: require("roundToNearestPixel"),
        controlsSpecs,
        safeArea,
        withSpring: tmp(tmp2[64]).withSpring,
        transitionState: tmp6,
        TransitionStates: tmp(tmp2[65]).TransitionStates,
        interpolate: tmp(tmp2[43]).interpolate,
        useReducedMotion,
        MODE_CHANGE_PHYSICS,
        runOnJS: tmp(tmp2[43]).runOnJS,
        transitionCleanUp: tmp5,
      };
      fn.__closure = obj2;
      fn.__workletHash = 2263333956491;
      fn.__initData = __initData5;
      const animatedStyle = tmpResult.useAnimatedStyle(fn);
      if (cResult[4] !== preJoinContentSize) {
        class S {
          constructor(nativeEvent) {
            const result = preJoinContentSize.set(roundToNearestPixelDefault(nativeEvent.nativeEvent.layout.height));
          }
        }
        cResult[4] = preJoinContentSize;
        cResult[5] = S;
      } else {
        class S {
          constructor(nativeEvent) {
            const result = preJoinContentSize.set(roundToNearestPixelDefault(nativeEvent.nativeEvent.layout.height));
          }
        }
      }
      if (cResult[6] !== tmp4) {
        class S {
          constructor(nativeEvent) {
            const result = preJoinContentSize.set(roundToNearestPixelDefault(nativeEvent.nativeEvent.layout.height));
          }
        }
        const obj3 = {};
        const merged = Object.assign(tmp4);
        cResult[6] = tmp4;
        cResult[7] = closure_27(closure_42, obj3);
        const tmp20 = closure_27(closure_42, obj3);
      } else {
        class S {
          constructor(nativeEvent) {
            const result = preJoinContentSize.set(roundToNearestPixelDefault(nativeEvent.nativeEvent.layout.height));
          }
        }
      }
      if (cResult[8] === S) {
        class S {
          constructor(nativeEvent) {
            const result = preJoinContentSize.set(roundToNearestPixelDefault(nativeEvent.nativeEvent.layout.height));
          }
        }
      }
      const obj4 = { onLayout: S, collapsable: false, style: tmp10.contentWrapper, children: tmp15 };
      cResult[8] = S;
      cResult[9] = tmp10.contentWrapper;
      cResult[10] = tmp15;
      cResult[11] = closure_27(require("NativeView"), obj4);
      closure_27(require("NativeView"), obj4);
    }
  : (transitionState) => {
      let obj4;
      let obj5;
      let tmp7;
      transitionState = transitionState.transitionState;
      const transitionCleanUp = transitionState.transitionCleanUp;
      const merged = Object.assign(transitionState, Object.assign({ transitionState: 0, transitionCleanUp: 0 }));
      let windowDimensions;
      const tmp2 = closure_30();
      const context = react.useContext(transitionCleanUp(windowDimensions[28]));
      windowDimensions = context.windowDimensions;
      const controlsSpecs = context.controlsSpecs;
      const safeArea = context.safeArea;
      const preJoinContentSize = context.preJoinContentSize;
      const useReducedMotion = context.useReducedMotion;
      let obj = transitionState(windowDimensions[43]);
      let fn = function s() {
        let fn;
        let interpolateResult;
        let items;
        let num2;
        let sum;
        let withSpring;
        const height = windowDimensions.get().height;
        let obj = { paddingBottom: sum + safeArea.get().bottom, opacity: withSpring(num2), transform: items };
        const diff = height - roundToNearestPixelDefault(0.8 * height);
        sum = diff + controlsSpecs.get().height;
        withSpring = spring.withSpring;
        let num = 1;
        num2 = 1;
        spring;
        if (transitionState === native.TransitionStates.YEETED) {
          num2 = 0;
        }
        const withSpring2 = spring.withSpring;
        spring;
        const interpolate = ReanimatedRexport.interpolate;
        ReanimatedRexport;
        if (useReducedMotion.get()) {
          num = 0;
        }
        const obj2 = { translateY: withSpring2(interpolateResult, MODE_CHANGE_PHYSICS, "respect-motion-settings", fn) };
        fn = function o() {
          let flag = arg0;
          if (arg0 === undefined) {
            flag = false;
          }
          if (flag) {
            flag = closure_1_0 === transitionState(windowDimensions[65]).TransitionStates.YEETED;
          }
          if (flag) {
            const obj = transitionState(windowDimensions[43]);
            obj.runOnJS(transitionCleanUp)();
          }
        };
        interpolateResult = interpolate(num, [0, 1], [0, 400]);
        fn.__closure = {
          transitionState,
          TransitionStates: native.TransitionStates,
          runOnJS: ReanimatedRexport.runOnJS,
          transitionCleanUp,
        };
        fn.__workletHash = 7334812912765;
        fn.__initData = __initData;
        ({
          transitionState,
          TransitionStates: native.TransitionStates,
          runOnJS: ReanimatedRexport.runOnJS,
          transitionCleanUp,
        });
        items = [obj2];
        return obj;
      };
      let obj2 = {
        windowDimensions,
        roundToNearestPixel: transitionCleanUp(windowDimensions[56]),
        controlsSpecs,
        safeArea,
        withSpring: transitionState(windowDimensions[64]).withSpring,
        transitionState,
        TransitionStates: transitionState(windowDimensions[65]).TransitionStates,
        interpolate: transitionState(windowDimensions[43]).interpolate,
        useReducedMotion,
        MODE_CHANGE_PHYSICS,
        runOnJS: transitionState(windowDimensions[43]).runOnJS,
        transitionCleanUp,
      };
      fn.__closure = obj2;
      fn.__workletHash = 11166098778384;
      fn.__initData = __initData6;
      let items = [preJoinContentSize];
      const animatedStyle = obj.useAnimatedStyle(fn);
      const callback = react.useCallback((nativeEvent) => {
        const result = preJoinContentSize.set(roundToNearestPixelDefault(nativeEvent.nativeEvent.layout.height));
      }, items);
      const obj3 = { style: animatedStyle, collapsable: false, children: closure_27(tmp7, obj4) };
      obj4 = {
        onLayout: callback,
        collapsable: false,
        style: tmp2.contentWrapper,
        children: closure_27(closure_42, obj5),
      };
      obj5 = {};
      const tmp6 = transitionCleanUp(windowDimensions[66]);
      tmp7 = transitionCleanUp(windowDimensions[38]);
      const merged1 = Object.assign(merged);
      return closure_27(tmp6, obj3);
    };
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        let channelId;
        let closure_2;
        let first;
        let guildId;
        let obj = channelId(576);
        const cResult = obj.c(8);
        const context = react.useContext(guildId(11901));
        channelId = context.channelId;
        guildId = context.guildId;
        const tmp5 = guildId(17190)(channelId);
        dependencyMap = tmp5;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          let items = [
            SortedVoiceStateStore,
            VoiceChannelBlockedUserStore,
            EmbeddedActivitiesStore,
            MediaEngineStore,
            ApplicationStreamingStore,
          ];
          cResult[0] = items;
          first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] === channelId) {
          if (cResult[2] === tmp5) {
            let tmp12;
            let tmp13;
            let tmp19;
            if (cResult[3] === guildId) {
              tmp12 = cResult[4];
              tmp13 = cResult[5];
            }
            const tmpResult = channelId(504);
            let tmp14 = tmpResult;
            const stateFromStores = tmpResult.useStateFromStores(
              first,
              tmp12,
              tmp13,
              tmp(17305).areVoicePanelPreJoinContentPropsEqual,
            );
            if (cResult[6] !== stateFromStores) {
              const obj2 = { item: stateFromStores, renderItem };
              const tmp22 = closure_27(channelId(4589).TransitionItem, obj2);
              cResult[6] = stateFromStores;
              cResult[7] = tmp22;
              tmp19 = tmp22;
            } else {
              tmp19 = cResult[7];
            }
            return tmp19;
          }
        }
        const fn = function n() {
          if (!closure_2) {
            const getVoiceStatesForChannelAlt = SortedVoiceStateStore.getVoiceStatesForChannelAlt;
            const voiceStatesForChannelAlt = getVoiceStatesForChannelAlt(tmp3, guildId);
            const blockedUsersForVoiceChannel = authStore.getBlockedUsersForVoiceChannel(tmp3);
            const ignoredUsersForVoiceChannel = authStore.getIgnoredUsersForVoiceChannel(tmp3);
            embeddedActivitiesForChannel = embeddedActivitiesForChannel.getEmbeddedActivitiesForChannel(tmp3);
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
                        let items1 = [tmp7];
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
              ignoredMembers: ignoredUsersForVoiceChannel,
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
      }
    : () => {
        let closure_2;
        let guildId;
        const context = react.useContext(guildId(11901));
        const channelId = context.channelId;
        guildId = context.guildId;
        const tmp2 = guildId(17190)(channelId);
        dependencyMap = tmp2;
        let obj = channelId(504);
        let items = [
          SortedVoiceStateStore,
          VoiceChannelBlockedUserStore,
          EmbeddedActivitiesStore,
          MediaEngineStore,
          ApplicationStreamingStore,
        ];
        let items1 = [tmp2, channelId, guildId];
        const stateFromStores = obj.useStateFromStores(
          items,
          () => {
            if (!closure_2) {
              const getVoiceStatesForChannelAlt = SortedVoiceStateStore.getVoiceStatesForChannelAlt;
              const voiceStatesForChannelAlt = getVoiceStatesForChannelAlt(tmp3, guildId);
              const blockedUsersForVoiceChannel = authStore.getBlockedUsersForVoiceChannel(tmp3);
              const ignoredUsersForVoiceChannel = authStore.getIgnoredUsersForVoiceChannel(tmp3);
              embeddedActivitiesForChannel = embeddedActivitiesForChannel.getEmbeddedActivitiesForChannel(tmp3);
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
                          let items1 = [tmp7];
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
                ignoredMembers: ignoredUsersForVoiceChannel,
              };
              return obj;
            }
          },
          items1,
          channelId(17305).areVoicePanelPreJoinContentPropsEqual,
        );
        const obj2 = { item: stateFromStores, renderItem };
        return closure_27(channelId(4589).TransitionItem, obj2);
      },
);
let size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/prejoin/VoicePanelPreJoinContent.tsx");

export default memoResult;
