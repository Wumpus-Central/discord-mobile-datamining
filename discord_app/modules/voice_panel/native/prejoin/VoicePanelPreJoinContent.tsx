// discord_app/modules/voice_panel/native/prejoin/VoicePanelPreJoinContent.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import discord_common_AnalyticsUtils from "../../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import StreamKeyUtils from "../../../go_live/utils/StreamKeyUtils.tsx";
import StreamActionCreators from "../../../../actions/StreamActionCreators.tsx";
import NicknameUtilsDefault from "../../../../utils/NicknameUtils.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import SelectedChannelActionCreatorsDefault from "../../../../actions/SelectedChannelActionCreators.tsx";
import NativeViewDefault from "../../../core/native/NativeView.tsx";
import useTrackImpressionDefault from "../../../app_analytics/useTrackImpression.tsx";
import FormComponents from "../shared/FormComponents.tsx";
import roundToNearestPixelDefault from "../utils/roundToNearestPixel.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
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

require = fn;
function StreamPreview(channelId) {
  ({ voiceState, stream } = channelId);
  channelId = channelId.channelId;
  let setFocused;
  const tmp = closure_28();
  const context = noop.useContext(channelId(setFocused[25]));
  setFocused = context.setFocused;
  const items = [channelId, stream, setFocused];
  const callback = noop.useCallback(() => {
    const voiceChannel = SelectedChannelActionCreatorsDefault.selectVoiceChannel(channelId);
    StreamActionCreators.watchStream(stream, { forceMultiple: true });
    setFocused(StreamKeyUtils.encodeStreamKey(stream));
  }, items);
  let obj = stream(setFocused[29]);
  const items1 = [ChannelStore];
  closure_3 = obj.useStateFromStores(items1, () => ChannelStore.getChannel(channelId));
  let obj1 = stream(setFocused[29]);
  const items2 = [PermissionStore];
  const stateFromStores = obj1.useStateFromStores(items2, () => PermissionStore.can(constants3.CONNECT, closure_3));
  obj = { style: tmp.activityInfoWrapper, children: null };
  obj = { variant: "text-sm/semibold", style: tmp.activityInfoHeader, color: "text-default", children: null };
  const intl = stream(setFocused[32]).intl;
  let username = voiceState.nick;
  if (username == null) {
    username = voiceState.user.username;
  }
  obj.children = intl.format(stream(setFocused[32]).t.I0mOAs, { username });
  const items3 = [closure_25(stream(setFocused[31]).Text, obj)];
  obj1 = { style: tmp.previewImageWrapper, children: null };
  const tmp6 = stream;
  const tmp8 = closure_26;
  const tmp9 = channelId(setFocused[30]);
  obj1.children = closure_25(tmp6(setFocused[33]).VoicePanelStreamPreview, {
    mode: context.mode,
    disabled: !stateFromStores,
    stream,
    onPress: callback,
  });
  items3[1] = closure_25(channelId(setFocused[30]), obj1);
  obj.children = items3;
  return tmp8(tmp9, obj);
}
function ActivityInfo(activity) {
  activity = activity.activity;
  const analyticsLocations = activity.analyticsLocations;
  let application;
  let windowDimensions;
  noop = undefined;
  const tmp = closure_28();
  const items = [activity.applicationId];
  application = windowDimensions(analyticsLocations(application[34])(items), 1)[0];
  let obj1 = activity(application[35]);
  const embeddedActivityLocationChannelId = obj1.getEmbeddedActivityLocationChannelId(activity.location);
  const context = noop.useContext(analyticsLocations(application[25]));
  const channelId = context.channelId;
  windowDimensions = context.windowDimensions;
  const tmp7 = windowDimensions(
    noop.useState(() => activity(first[37]).getWindowDimensions().width - 2 * (EDGE_GUTTER + 16)),
    2,
  );
  noop = tmp9;
  const first1 = tmp7[0];
  let obj2 = activity(application[38]);
  const fn = function u() {
    return windowDimensions.get().width;
  };
  fn.__closure = { windowDimensions };
  fn.__workletHash = 16837592262556;
  fn.__initData = __initData;
  const fn2 = function c(arg0, arg1) {
    if (arg0 !== arg1) {
      ReanimatedRexport.runOnJS(closure_5)(arg0 - 2 * (EDGE_GUTTER + 16));
    }
  };
  let obj = { runOnJS: activity(application[38]).runOnJS, setActivityPreviewWidth: tmp9, EDGE_GUTTER };
  fn2.__closure = obj;
  fn2.__workletHash = 1481130207412;
  fn2.__initData = __initData2;
  const animatedReaction = obj2.useAnimatedReaction(fn, fn2);
  let obj4 = activity(application[39]);
  obj = { userId: AuthenticationStore.getId(), channelId, application };
  const embeddedActivityJoinability = obj4.useEmbeddedActivityJoinability(obj);
  const tmp12 = embeddedActivityJoinability === activity(application[39]).EmbeddedActivityJoinability.CAN_JOIN;
  closure_7 = tmp12;
  const items1 = [activity.launchId, analyticsLocations, application, tmp12, channelId, embeddedActivityJoinability];
  const callback = noop.useCallback(() => {
    let obj = { embeddedActivityJoinability, handleCanJoin: null };
    closure_0 = channelId(function* (arg0, value) {
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
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
              obj = { value, done: true };
              return obj;
            } else if (closure_1_7) {
              if (null != dependencyMap) {
                let obj2 = v3(9530);
                let obj1 = {
                  channelId,
                  applicationId: tmp9.id,
                  launchId: v3.launchId,
                  inputApplication: tmp9,
                  analyticsLocations: num3,
                };
                v3 = num3;
                obj2 = { value: null, done: false };
                obj2.value = obj2.maybeJoinEmbeddedActivity(obj1);
                return obj2;
              }
            } else {
              obj1 = analyticsLocations(5411);
              const voiceChannel = obj1.selectVoiceChannel(channelId);
            }
          } else {
            num3 = 1;
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              obj = { value, done: true };
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
    obj.handleCanJoin = function () {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    analyticsLocations(first[40])(obj);
  }, items1);
  let tmp16Result = null;
  if (null != application) {
    obj1 = { style: tmp.activityInfoWrapper, children: null };
    tmp2(tmp3[30]);
    obj2 = { variant: "text-sm/semibold", style: tmp.activityInfoHeader, color: "text-default", children: null };
    const intl = tmp4(tmp3[32]).intl;
    const obj3 = { n: arr2.length };
    obj2.children = intl.format(tmp4(tmp3[32]).t["n/IJ6Y"], obj3);
    const items2 = [closure_25(tmp4(tmp3[31]).Text, obj2)];
    obj4 = { activeOpacity: 0.7, onPress: callback, style: tmp.previewImageWrapper, accessible: false, children: null };
    const obj5 = { style: tmp.previewImage, children: null };
    const tmp2Result = tmp2(tmp3[30]);
    const obj6 = { imageBackground: tmp14, aspectRatio: 1.7777777777777777 };
    obj5.children = closure_25(tmp2(tmp3[43]), obj6);
    const items3 = [closure_25(tmp2Result, obj5)];
    const obj7 = { style: tmp.joinButtonWrapper, children: null };
    const obj8 = {
      text: null,
      size: "sm",
      iconPosition: "start",
      variant: "primary-overlay",
      icon: null,
      onPress: null,
    };
    const intl2 = tmp4(tmp3[32]).intl;
    const obj9 = { name: application.name };
    obj8.text = intl2.formatToPlainString(tmp4(tmp3[32]).t["YV/hE8"], obj9);
    const iconURL = application.getIconURL(20);
    const obj10 = { variant: "entity", source: null };
    const size = { uri: iconURL, width: 20, height: 20 };
    obj10.source = size;
    obj8.icon = closure_25(tmp4(tmp3[44]).Button.Icon, obj10);
    obj8.onPress = callback;
    obj7.children = closure_25(tmp4(tmp3[44]).Button, obj8);
    items3[1] = closure_25(tmp2(tmp3[30]), obj7);
    obj4.children = items3;
    items2[1] = closure_26(tmp4(tmp3[42]).PressableOpacity, obj4);
    obj1.children = items2;
    tmp16Result = tmp16(tmp2Result, obj1);
    const tmp2Result1 = tmp2(tmp3[30]);
  }
  return tmp16Result;
}
function RoomMembersSection(title) {
  ({ members: require, channelId: importDefault, guildId: dependencyMap } = title);
  return closure_25(FormComponents.VoicePanelFormSection, {
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
          let arr = items.push(closure_2_25(FormComponents.MemberRowItem, obj, tmp3));
        }
        continue;
      }
      return items;
    })(),
  });
}
function RoomMembers(members) {
  members = members.members;
  ({ streamingMembers, blockedMembers } = members);
  const ignoredMembers = members.ignoredMembers;
  let first;
  const context = first.useContext(blockedMembers(ignoredMembers[25]));
  const channelId = context.channelId;
  const guildId = context.guildId;
  let tmp3 = guildId(first.useState(20), 2);
  first = tmp3[0];
  closure_6 = tmp3[1];
  const sum = blockedMembers.size + ignoredMembers.size;
  const diff = members.length - sum;
  let tmp9 = sum > 0;
  if (tmp9) {
    let obj = { channelId, blockedUserIds: blockedMembers, ignoredUserIds: ignoredMembers };
    tmp9 = closure_25(closure_34, obj);
  }
  const children = [
    tmp9,
    streamingMembers.map((item) => {
      [tmp, tmp2] = item;
      return closure_2_25(StreamPreview, { channelId, voiceState: tmp, stream: tmp2 }, tmp2.ownerId);
    }),
    ,
    ,
  ];
  let tmp12 = blockedMembers.size > 0;
  if (tmp12) {
    obj = { title: null, members: null, channelId: null, guildId: null };
    const intl = members(tmp[32]).intl;
    obj = { n: blockedMembers.size };
    obj.title = intl.formatToPlainString(members(tmp[32]).t.pGJ1Qy, obj);
    obj.members = blockedMembers;
    obj.channelId = channelId;
    obj.guildId = guildId;
    tmp12 = closure_25(RoomMembersSection, obj);
  }
  children[2] = tmp12;
  let tmp16 = ignoredMembers.size > 0;
  if (tmp16) {
    const obj1 = { title: null, members: null, channelId: null, guildId: null };
    const intl2 = members(tmp[32]).intl;
    const obj2 = { n: ignoredMembers.size };
    obj1.title = intl2.formatToPlainString(members(tmp[32]).t["/pXOCN"], obj2);
    obj1.members = ignoredMembers;
    obj1.channelId = channelId;
    obj1.guildId = guildId;
    tmp16 = closure_25(RoomMembersSection, obj1);
  }
  children[3] = tmp16;
  let tmp7Result = diff > 0;
  if (tmp7Result) {
    if (0 === sum) {
      const intl4 = tmp21(tmp[32]).intl;
      let obj3 = { n: members.length };
      let formatToPlainStringResult = intl4.formatToPlainString(tmp21(tmp[32]).t.vloEU7, obj3);
    } else {
      const intl3 = tmp21(tmp[32]).intl;
      const obj4 = { n: diff };
      formatToPlainStringResult = intl3.formatToPlainString(tmp21(tmp[32]).t.R0h4pE, obj4);
    }
    const obj5 = { hasIcons: true, title: formatToPlainStringResult, children: null };
    const items1 = [
      (() => {
        const items = [];
        for (const item10007 of members) {
          let tmp = item10007;
          if (items.length >= first) {
            obj.return();
            break;
          } else {
            let hasItem = blockedMembers.has(tmp.user.id);
            if (!hasItem) {
              hasItem = ignoredMembers.has(tmp.user.id);
            }
            if (!hasItem) {
              let obj = { user: null, channelId: null, guildId: null, nick: null, showGameActivity: true };
              obj.user = tmp.user;
              obj.channelId = channelId;
              obj.guildId = guildId;
              let obj3 = NicknameUtilsDefault;
              obj.nick = obj3.getName(guildId, channelId, tmp.user);
              let arr = items.push(closure_2_25(FormComponents.MemberRowItem, obj, tmp.user.id));
            }
            continue;
          }
          return items;
        }
      })(),
    ];
    let tmp23 = diff > first;
    if (tmp23) {
      const obj6 = { label: null, onPress: null };
      const intl5 = tmp21(tmp[32]).intl;
      obj6.label = intl5.string(tmp21(tmp[32]).t.F4MCUO);
      obj6.onPress = function onPress() {
        return closure_6(first + 20);
      };
      tmp23 = closure_25(tmp21(tmp[50]).TableRow, obj6);
    }
    items1[1] = tmp23;
    obj5.children = items1;
    tmp7Result = tmp7(members(tmp[48]).VoicePanelFormSection, obj5);
  }
  children[4] = tmp7Result;
  return closure_26(closure_27, { children });
}
function PreJoinTransitioner(transitionState) {
  transitionState = transitionState.transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  const merged = Object.assign(transitionState, Object.assign({ transitionState: 0, transitionCleanUp: 0 }));
  let windowDimensions;
  let preJoinContentSize;
  const context = preJoinContentSize.useContext(transitionCleanUp(windowDimensions[25]));
  windowDimensions = context.windowDimensions;
  const controlsSpecs = context.controlsSpecs;
  const safeArea = context.safeArea;
  preJoinContentSize = context.preJoinContentSize;
  const useReducedMotion = context.useReducedMotion;
  transitionState(windowDimensions[38]);
  let fn = function l() {
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
    tmp4(4974);
    const tmp4Result = tmp4(4296);
    if (useReducedMotion.get()) {
      num = 0;
    }
    obj = { translateY: null };
    const fn = function o() {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = false;
      }
      if (flag) {
        flag = closure_1_0 === transitionState(windowDimensions[59]).TransitionStates.YEETED;
      }
      if (flag) {
        transitionState(windowDimensions[38]).runOnJS(transitionCleanUp)();
        const obj = transitionState(windowDimensions[38]);
      }
    };
    obj = {
      transitionState: tmp5,
      TransitionStates: tmp4(4271).TransitionStates,
      runOnJS: tmp4(4296).runOnJS,
      transitionCleanUp,
    };
    fn.__closure = obj;
    fn.__workletHash = 2541522666097;
    fn.__initData = __initData;
    obj.translateY = tmp4Result.withSpring(
      tmp4Result.interpolate(num, [0, 1], [0, 400]),
      MODE_CHANGE_PHYSICS,
      "respect-motion-settings",
      fn,
    );
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  let obj = {
    windowDimensions,
    roundToNearestPixel: transitionCleanUp(windowDimensions[51]),
    controlsSpecs,
    safeArea,
    withSpring: transitionState(windowDimensions[58]).withSpring,
    transitionState,
    TransitionStates: transitionState(windowDimensions[59]).TransitionStates,
    interpolate: transitionState(windowDimensions[38]).interpolate,
    useReducedMotion,
    MODE_CHANGE_PHYSICS,
    runOnJS: transitionState(windowDimensions[38]).runOnJS,
    transitionCleanUp,
  };
  fn.__closure = obj;
  fn.__workletHash = 16643118377748;
  fn.__initData = __initData3;
  let items = [preJoinContentSize];
  const animatedStyle = obj.useAnimatedStyle(fn);
  const callback = preJoinContentSize.useCallback((nativeEvent) => {
    const result = preJoinContentSize.set(roundToNearestPixelDefault(nativeEvent.nativeEvent.layout.height));
  }, items);
  obj = { style: animatedStyle, collapsable: false, children: null };
  const tmp2 = closure_28();
  const obj1 = { onLayout: callback, collapsable: false, style: tmp2.contentWrapper, children: null };
  let obj2 = {};
  const tmp6 = transitionCleanUp(windowDimensions[60]);
  const merged1 = Object.assign(merged);
  obj1.children = closure_25(closure_38, obj2);
  obj.children = closure_25(transitionCleanUp(windowDimensions[30]), obj1);
  return closure_25(tmp6, obj);
}
function renderItem(arg0, arg1, transitionState, transitionCleanUp) {
  const merged = Object.assign(arg1);
  return closure_1_25(PreJoinTransitioner, { transitionState, transitionCleanUp }, arg0);
}
const StyleSheet = fn(17).StyleSheet;
const MODE_CHANGE_PHYSICS = fn(12273).MODE_CHANGE_PHYSICS;
const EDGE_GUTTER = fn(12276).EDGE_GUTTER;
const Constants = fn(1074);
({ AnalyticEvents: closure_20, AnalyticsSections: closure_21, Permissions: closure_22 } = Constants);
const constants4 = fn(13737).VoiceChannelWarningSurfaces;
const Features = fn(4585).Features;
const jsxProd = fn(21);
({ jsx: closure_25, jsxs: closure_26, Fragment: closure_27 } = jsxProd);
fn(4560);
let obj = {
  contentWrapper: null,
  channelInfoWrapper: null,
  subheading: null,
  previewImageWrapper: null,
  previewImage: null,
  activityInfoWrapper: null,
  activityInfoHeader: null,
  joinButtonWrapper: null,
  optInChannelsContainer: null,
  blockedMemberWarning: null,
  consolePreJoinPadding: null,
};
obj = { paddingTop: EDGE_GUTTER + fn(12277).BASE_VOICE_PANEL_HEADER_HEIGHT + EDGE_GUTTER, gap: 24, paddingBottom: 16 };
obj.contentWrapper = obj;
obj.channelInfoWrapper = { paddingHorizontal: 16 };
obj.subheading = { textAlign: "center", paddingTop: 16, paddingBottom: 16 };
const createStyles = {
  position: "relative",
  width: "100%",
  aspectRatio: 1.7777777777777777,
  borderRadius: nativeDefault.radii.lg,
  overflow: "hidden",
  justifyContent: "center",
  backgroundColor: nativeDefault.colors.BLACK,
};
obj.previewImageWrapper = createStyles;
let obj2 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj2.opacity = 0.5;
obj.previewImage = obj2;
obj.activityInfoWrapper = { paddingHorizontal: 16 };
obj.activityInfoHeader = { marginBottom: 8 };
let obj3 = {};
let merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj3.display = "flex";
obj3.alignItems = "center";
obj3.justifyContent = "center";
obj.joinButtonWrapper = obj3;
obj.optInChannelsContainer = { marginHorizontal: 16 };
obj.blockedMemberWarning = {
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
obj.consolePreJoinPadding = { height: 36 };
let closure_28 = createStyles.createStyles(obj);
let closure_30 = noop.memo((hasMembers) => {
  const tmp = closure_28();
  let tmp2 = null;
  if (!hasMembers.hasMembers) {
    let obj = { style: tmp.channelInfoWrapper, children: null };
    obj = { variant: "text-sm/medium", color: "text-default", style: tmp.subheading, children: null };
    const intl = util.intl;
    obj.children = intl.string(util.t.sS2J0G);
    obj.children = closure_1_25(Text_Text.Text, obj);
    tmp2 = closure_1_25(NativeViewDefault, obj);
  }
  return tmp2;
});
const __initData = {
  code: "function VoicePanelPreJoinContentTsx1(){const{windowDimensions}=this.__closure;return windowDimensions.get().width;}",
};
const __initData2 = {
  code: "function VoicePanelPreJoinContentTsx2(width,previous){const{runOnJS,setActivityPreviewWidth,EDGE_GUTTER}=this.__closure;if(width===previous)return;runOnJS(setActivityPreviewWidth)(width-(EDGE_GUTTER+16)*2);}",
};
let closure_34 = noop.memo((blockedUserIds) => {
  blockedUserIds = blockedUserIds.blockedUserIds;
  ({ channelId, ignoredUserIds } = blockedUserIds);
  let obj = { name: null, properties: null };
  const tmp = closure_28();
  obj.name = discord_common_AnalyticsUtils.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING;
  obj = {
    channel_id: channelId,
    blocked_user_ids: Array.from(blockedUserIds),
    warning_surface: constants4.PRE_JOIN_SHEET,
  };
  obj.properties = obj;
  useTrackImpressionDefault(obj);
  const size = ignoredUserIds.size;
  const size2 = blockedUserIds.size;
  const intl = util.intl;
  const stringResult = intl.string(util.t.CjrALd);
  if (size2 > 0) {
    if (size > 0) {
      const intl4 = tmp5(1114).intl;
      let stringResult1 = intl4.string(tmp5(1114).t.MpRfpC);
    }
    obj = { style: tmp.blockedMemberWarning, children: null };
    const items = [closure_1_25(tmp5(6610).CircleErrorIcon, { color: "text-feedback-warning" })];
    const obj1 = {
      variant: "text-sm/bold",
      color: "interactive-text-active",
      style: { flexShrink: 1 },
      children: null,
    };
    const items1 = [stringResult1, " "];
    let tmp11Result = null;
    if (null != stringResult) {
      const obj2 = { variant: "heading-sm/semibold", children: stringResult };
      tmp11Result = closure_1_25(tmp5(4556).Text, obj2);
    }
    items1[2] = tmp11Result;
    obj1.children = items1;
    items[1] = dependencyMap(tmp5(4556).Text, obj1);
    obj.children = items;
    return dependencyMap(NativeViewDefault, obj);
  }
  if (size > 0) {
    const intl3 = tmp5(1114).intl;
    const obj3 = { n: size };
    stringResult1 = intl3.format(tmp5(1114).t.u9trAZ, obj3);
  } else {
    const intl2 = tmp5(1114).intl;
    const obj4 = { n: size2 };
    stringResult1 = intl2.format(tmp5(1114).t["6X29zb"], obj4);
  }
});
let closure_37 = noop.memo((channelId) => {
  channelId = channelId.channelId;
  let obj = channelId(504);
  const items = [AuthenticationStore, GameConsoleStore, VoiceStateStore, SessionsStore];
  const items1 = [channelId];
  let tmp3 = null;
  if (
    obj.useStateFromStores(
      items,
      () => {
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
      },
      items1,
    )
  ) {
    obj = { style: tmp.consolePreJoinPadding };
    tmp3 = closure_25(NativeViewDefault, obj);
  }
  return tmp3;
});
let closure_38 = noop.memo(function VoicePanelPreJoinContentInner(members) {
  members = members.members;
  const blockedMembers = members.blockedMembers;
  const ignoredMembers = members.ignoredMembers;
  const activities = members.activities;
  let analyticsLocations;
  const context = analyticsLocations.useContext(blockedMembers(ignoredMembers[25]));
  const channelId = context.channelId;
  const guildId = context.guildId;
  let obj = members(ignoredMembers[29]);
  const items = [ChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const tmp = closure_28();
  const tmp6 = blockedMembers(ignoredMembers[52])(stateFromStores);
  analyticsLocations = blockedMembers(ignoredMembers[53])(
    blockedMembers(ignoredMembers[54]).VOICE_PANEL_PRE_JOIN,
  ).analyticsLocations;
  const items1 = [channelId, guildId, analyticsLocations];
  const effect = analyticsLocations.useEffect(() => {
    const obj = { guild_id: guildId, channel_id: channelId, location_stack: analyticsLocations };
    obj.track(constants.VIEW_VOICE_CHANNEL, obj);
  }, items1);
  const items2 = [members, blockedMembers, ignoredMembers];
  obj = { hasMembers: members.length > 0 };
  const memo = analyticsLocations.useMemo(
    () =>
      members.filter((user) => {
        const hasItem = set.has(user.user.id);
        let tmp2 = !hasItem;
        if (!hasItem) {
          tmp2 = !set2.has(user.user.id);
        }
        return tmp2;
      }),
    items2,
  );
  const items3 = [closure_25(closure_30, obj), , , , ,];
  let tmp12Result = null;
  if (tmp6) {
    obj = { style: tmp.optInChannelsContainer, channel: stateFromStores, analyticsSection: constants2.CHANNEL };
    tmp12Result = tmp12(tmp2(tmp3[56]), obj);
  }
  items3[1] = tmp12Result;
  items3[2] = activities.map((activity) =>
    closure_2_25(ActivityInfo, { activity, analyticsLocations }, activity.launchId),
  );
  tmp12Result = members.length > 0 || blockedMembers.size > 0 || ignoredMembers.size > 0;
  if (tmp12Result) {
    const obj1 = { members, streamingMembers: members.streamingMembers, blockedMembers, ignoredMembers };
    tmp12Result = tmp12(RoomMembers, obj1);
  }
  items3[3] = tmp12Result;
  let tmp12Result1 = null != guildId;
  if (tmp12Result1) {
    const obj2 = { members: memo, guildId };
    tmp12Result1 = tmp12(tmp2(tmp3[57]), obj2);
  }
  const obj3 = { children: null };
  items3[4] = tmp12Result1;
  items3[5] = closure_25(closure_37, { channelId });
  obj3.children = items3;
  return closure_26(closure_27, obj3);
});
const __initData3 = {
  code: "function VoicePanelPreJoinContentTsx3(){const{windowDimensions,roundToNearestPixel,controlsSpecs,safeArea,withSpring,transitionState,TransitionStates,interpolate,useReducedMotion,MODE_CHANGE_PHYSICS,runOnJS,transitionCleanUp}=this.__closure;const{height:windowHeight}=windowDimensions.get();return{paddingBottom:windowHeight-roundToNearestPixel(windowHeight*0.8)+controlsSpecs.get().height+safeArea.get().bottom,opacity:withSpring(transitionState===TransitionStates.YEETED?0:1),transform:[{translateY:withSpring(interpolate(!useReducedMotion.get()&&transitionState===TransitionStates.YEETED?1:0,[0,1],[0,400]),MODE_CHANGE_PHYSICS,'respect-motion-settings',function(finished=false){finished&&transitionState===TransitionStates.YEETED&&runOnJS(transitionCleanUp)();})}]};}",
};
let closure_40 = {
  code: "function VoicePanelPreJoinContentTsx4(finished=false){const{transitionState,TransitionStates,runOnJS,transitionCleanUp}=this.__closure;finished&&transitionState===TransitionStates.YEETED&&runOnJS(transitionCleanUp)();}",
};
let obj4 = {
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
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/prejoin/VoicePanelPreJoinContent.tsx");

export default noop.memo(function VoicePanelPreJoinWrapper() {
  const context = noop.useContext(guildId(12272));
  const channelId = context.channelId;
  guildId = context.guildId;
  const tmp2 = guildId(17037)(channelId);
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
    channelId(17163).areVoicePanelPreJoinContentPropsEqual,
  );
  obj = { item: stateFromStores, renderItem };
  return closure_25(channelId(4271).TransitionItem, obj);
});
