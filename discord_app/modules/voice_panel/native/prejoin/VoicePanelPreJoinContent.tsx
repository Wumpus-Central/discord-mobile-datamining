// === Module 17309: VoicePanelPreJoinContent ===

// Module 17309 (VoicePanelPreJoinContent)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1249 */;
import native from "native" /* 4350 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4376 */;
import Text_Text from "Text/Text" /* 4635 */;
import StreamKeyUtils from "StreamKeyUtils" /* 4691 */;
import StreamActionCreators from "StreamActionCreators" /* 4781 */;
import NicknameUtilsDefault from "NicknameUtils" /* 4791 */;
import spring from "spring" /* 5058 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5496 */;
import NativeViewDefault from "NativeView" /* 5674 */;
import CircleErrorIcon from "CircleErrorIcon" /* 6715 */;
import useTrackImpressionDefault from "useTrackImpression" /* 8897 */;
import FormComponents from "FormComponents" /* 9250 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 11130 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1957 */;
import GameConsoleStore from "GameConsoleStore" /* 4656 */;
import VoiceChannelBlockedUserStore from "VoiceChannelBlockedUserStore" /* 13827 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4661 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 1958 */;
import MediaEngineStore from "MediaEngineStore" /* 1909 */;
import PermissionStore from "PermissionStore" /* 4278 */;
import SessionsStore from "SessionsStore" /* 4657 */;
import UserStore from "UserStore" /* 1372 */;
import VoiceStateStore from "VoiceStateStore" /* 4658 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4663 */;

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
  const items1 = [ChannelStore];
  closure_3 = stream(setFocused[29]).useStateFromStores(items1, () => ChannelStore.getChannel(channelId));
  let obj = stream(setFocused[29]);
  const tmp2 = channelId;
  const items2 = [PermissionStore];
  const stateFromStores = stream(setFocused[29]).useStateFromStores(items2, () => PermissionStore.can(constants3.CONNECT, closure_3));
  const obj3 = { style: tmp.activityInfoWrapper, children: null };
  let obj2 = stream(setFocused[29]);
  const obj4 = { variant: "text-sm/semibold", style: tmp.activityInfoHeader, color: "text-default", children: null };
  const intl = stream(setFocused[32]).intl;
  let username = voiceState.nick;
  if (username == null) {
    username = voiceState.user.username;
  }
  obj4.children = intl.format(stream(setFocused[32]).t.I0mOAs, { username });
  const items3 = [closure_25(stream(setFocused[31]).Text, obj4), ];
  const obj5 = { style: tmp.previewImageWrapper, children: null };
  const tmp9 = channelId(setFocused[30]);
  obj5.children = closure_25(stream(setFocused[33]).VoicePanelStreamPreview, { mode: context.mode, disabled: !stateFromStores, stream, onPress: callback });
  items3[1] = closure_25(tmp2(setFocused[30]), obj5);
  obj3.children = items3;
  return closure_26(tmp9, obj3);
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
  const embeddedActivityLocationChannelId = activity(application[35]).getEmbeddedActivityLocationChannelId(activity.location);
  let obj2 = activity(application[35]);
  const context = noop.useContext(analyticsLocations(application[25]));
  const channelId = context.channelId;
  windowDimensions = context.windowDimensions;
  const tmp7 = windowDimensions(noop.useState(() => activity(first[37]).getWindowDimensions().width - 2 * (EDGE_GUTTER + 16)), 2);
  noop = tmp9;
  const first1 = tmp7[0];
  const arr2 = analyticsLocations(application[36])(activity.applicationId, embeddedActivityLocationChannelId);
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
  const obj3 = activity(application[38]);
  fn2.__closure = { runOnJS: activity(application[38]).runOnJS, setActivityPreviewWidth: tmp7[1], EDGE_GUTTER };
  fn2.__workletHash = 1481130207412;
  fn2.__initData = __initData2;
  const animatedReaction = obj3.useAnimatedReaction(fn, fn2);
  let obj = { runOnJS: activity(application[38]).runOnJS, setActivityPreviewWidth: tmp7[1], EDGE_GUTTER };
  let obj5 = activity(application[39]);
  const embeddedActivityJoinability = obj5.useEmbeddedActivityJoinability({ userId: AuthenticationStore.getId(), channelId, application });
  const tmp12 = embeddedActivityJoinability === activity(application[39]).EmbeddedActivityJoinability.CAN_JOIN;
  closure_7 = tmp12;
  const items1 = [activity.launchId, analyticsLocations, application, tmp12, channelId, embeddedActivityJoinability];
  const callback = noop.useCallback(() => {
    let obj = { embeddedActivityJoinability, handleCanJoin: null };
    closure_0 = channelId(function*() {
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
              const obj5 = { value, done: true };
              return obj5;
            } else if (closure_1_7) {
              if (null != inputApplication) {
                const obj6 = { channelId, applicationId: inputApplication.id, launchId: v3.launchId, inputApplication, analyticsLocations: num3 };
                v3 = num3;
                const obj7 = { value: v3(9662).maybeJoinEmbeddedActivity(obj6), done: false };
                return obj7;
              }
            } else {
              const voiceChannel = analyticsLocations(5496).selectVoiceChannel(channelId);
              const obj2 = analyticsLocations(5496);
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
    obj.handleCanJoin = function() {
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
    let obj6 = { style: tmp.activityInfoWrapper, children: null };
    let obj7 = { variant: "text-sm/semibold", style: tmp.activityInfoHeader, color: "text-default", children: null };
    const intl = tmp4(tmp3[32]).intl;
    const obj8 = { n: arr2.length };
    obj7.children = intl.format(tmp4(tmp3[32]).t["n/IJ6Y"], obj8);
    const items2 = [closure_25(tmp4(tmp3[31]).Text, obj7), ];
    const obj9 = { activeOpacity: 0.7, onPress: callback, style: tmp.previewImageWrapper, accessible: false, children: null };
    const obj10 = { style: tmp.previewImage, children: null };
    const tmp2Result = tmp2(tmp3[30]);
    const obj11 = { imageBackground: tmp14, aspectRatio: 1.7777777777777777 };
    obj10.children = closure_25(tmp2(tmp3[43]), obj11);
    const items3 = [closure_25(tmp2(tmp3[30]), obj10), ];
    const obj12 = { style: tmp.joinButtonWrapper, children: null };
    const tmp2Result3 = tmp2(tmp3[30]);
    const obj13 = { text: null, size: "sm", iconPosition: "start", variant: "primary-overlay", icon: null, onPress: null };
    const intl2 = tmp4(tmp3[32]).intl;
    const obj14 = { name: application.name };
    obj13.text = intl2.formatToPlainString(tmp4(tmp3[32]).t["YV/hE8"], obj14);
    const iconURL = application.getIconURL(20);
    const obj15 = { variant: "entity", source: null };
    const size = { uri: iconURL, width: 20, height: 20 };
    obj15.source = size;
    obj13.icon = closure_25(tmp4(tmp3[44]).Button.Icon, obj15);
    obj13.onPress = callback;
    obj12.children = closure_25(tmp4(tmp3[44]).Button, obj13);
    items3[1] = closure_25(tmp2(tmp3[30]), obj12);
    obj9.children = items3;
    items2[1] = closure_26(tmp4(tmp3[42]).PressableOpacity, obj9);
    obj6.children = items2;
    tmp16Result = closure_26(tmp2Result, obj6);
    const tmp2Result4 = tmp2(tmp3[30]);
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
    })()
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
  const tmp3 = guildId(first.useState(20), 2);
  first = tmp3[0];
  closure_6 = tmp3[1];
  const sum = blockedMembers.size + ignoredMembers.size;
  const diff = members.length - sum;
  let tmp9 = sum > 0;
  if (tmp9) {
    const obj = { channelId, blockedUserIds: blockedMembers, ignoredUserIds: ignoredMembers };
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
    let obj2 = { title: null, members: null, channelId: null, guildId: null };
    const intl = members(tmp[32]).intl;
    let obj3 = { n: blockedMembers.size };
    obj2.title = intl.formatToPlainString(members(tmp[32]).t.pGJ1Qy, obj3);
    obj2.members = blockedMembers;
    obj2.channelId = channelId;
    obj2.guildId = guildId;
    tmp12 = closure_25(RoomMembersSection, obj2);
  }
  children[2] = tmp12;
  let tmp16 = ignoredMembers.size > 0;
  if (tmp16) {
    const obj4 = { title: null, members: null, channelId: null, guildId: null };
    const intl2 = members(tmp[32]).intl;
    const obj5 = { n: ignoredMembers.size };
    obj4.title = intl2.formatToPlainString(members(tmp[32]).t["/pXOCN"], obj5);
    obj4.members = ignoredMembers;
    obj4.channelId = channelId;
    obj4.guildId = guildId;
    tmp16 = closure_25(RoomMembersSection, obj4);
  }
  children[3] = tmp16;
  let tmp7Result = diff > 0;
  if (tmp7Result) {
    if (0 === sum) {
      const intl4 = tmp21(tmp[32]).intl;
      const obj6 = { n: members.length };
      let formatToPlainStringResult = intl4.formatToPlainString(tmp21(tmp[32]).t.vloEU7, obj6);
    } else {
      const intl3 = tmp21(tmp[32]).intl;
      const obj7 = { n: diff };
      formatToPlainStringResult = intl3.formatToPlainString(tmp21(tmp[32]).t.R0h4pE, obj7);
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
                let arr = items.push(closure_2_25(FormComponents.MemberRowItem, obj2, item10007.user.id));
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
      const intl5 = tmp21(tmp[32]).intl;
      obj9.label = intl5.string(tmp21(tmp[32]).t.F4MCUO);
      obj9.onPress = function onPress() {
        return closure_6(first + 20);
      };
      tmp23 = closure_25(tmp21(tmp[50]).TableRow, obj9);
    }
    items1[1] = tmp23;
    obj8.children = items1;
    tmp7Result = closure_26(members(tmp[48]).VoicePanelFormSection, obj8);
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
  const tmp2 = closure_28();
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
        flag = closure_1_0 === transitionState(windowDimensions[59]).TransitionStates.YEETED;
      }
      if (flag) {
        transitionState(windowDimensions[38]).runOnJS(transitionCleanUp)();
        const obj = transitionState(windowDimensions[38]);
      }
    };
    const interpolateResult = ReanimatedRexport.interpolate(num, [0, 1], [0, 400]);
    fn.__closure = { transitionState, TransitionStates: native.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, transitionCleanUp };
    fn.__workletHash = 2541522666097;
    fn.__initData = __initData;
    obj3.translateY = tmp4Result.withSpring(interpolateResult, MODE_CHANGE_PHYSICS, "respect-motion-settings", fn);
    const items = [obj3];
    obj.transform = items;
    return obj;
  };
  let obj = transitionState(windowDimensions[38]);
  fn.__closure = { windowDimensions, roundToNearestPixel: transitionCleanUp(windowDimensions[51]), controlsSpecs, safeArea, withSpring: transitionState(windowDimensions[58]).withSpring, transitionState, TransitionStates: transitionState(windowDimensions[59]).TransitionStates, interpolate: transitionState(windowDimensions[38]).interpolate, useReducedMotion, MODE_CHANGE_PHYSICS, runOnJS: transitionState(windowDimensions[38]).runOnJS, transitionCleanUp };
  fn.__workletHash = 16643118377748;
  fn.__initData = __initData3;
  let items = [preJoinContentSize];
  const animatedStyle = obj.useAnimatedStyle(fn);
  const callback = preJoinContentSize.useCallback((nativeEvent) => {
    const result = preJoinContentSize.set(roundToNearestPixelDefault(nativeEvent.nativeEvent.layout.height));
  }, items);
  let obj3 = { style: animatedStyle, collapsable: false, children: null };
  let obj2 = { windowDimensions, roundToNearestPixel: transitionCleanUp(windowDimensions[51]), controlsSpecs, safeArea, withSpring: transitionState(windowDimensions[58]).withSpring, transitionState, TransitionStates: transitionState(windowDimensions[59]).TransitionStates, interpolate: transitionState(windowDimensions[38]).interpolate, useReducedMotion, MODE_CHANGE_PHYSICS, runOnJS: transitionState(windowDimensions[38]).runOnJS, transitionCleanUp };
  const obj4 = { onLayout: callback, collapsable: false, style: tmp2.contentWrapper, children: null };
  const obj5 = {};
  const tmp6 = transitionCleanUp(windowDimensions[60]);
  const merged1 = Object.assign(merged);
  obj4.children = closure_25(closure_38, obj5);
  obj3.children = closure_25(transitionCleanUp(windowDimensions[30]), obj4);
  return closure_25(tmp6, obj3);
}
function renderItem(arg0, arg1, transitionState, transitionCleanUp) {
  const merged = Object.assign(arg1);
  return closure_1_25(PreJoinTransitioner, { transitionState, transitionCleanUp }, arg0);
}
const StyleSheet = fn(17).StyleSheet;
const MODE_CHANGE_PHYSICS = fn(12407).MODE_CHANGE_PHYSICS;
const EDGE_GUTTER = fn(12410).EDGE_GUTTER;
const Constants = fn(1074);
({ AnalyticEvents: closure_20, AnalyticsSections: closure_21, Permissions: closure_22 } = Constants);
const constants4 = fn(13832).VoiceChannelWarningSurfaces;
const Features = fn(4664).Features;
const jsxProd = fn(21);
({ jsx: closure_25, jsxs: closure_26, Fragment: closure_27 } = jsxProd);
const createStyles = fn(4639);
let obj = { contentWrapper: { paddingTop: EDGE_GUTTER + fn(12411).BASE_VOICE_PANEL_HEADER_HEIGHT + EDGE_GUTTER, gap: 24, paddingBottom: 16 }, channelInfoWrapper: { paddingHorizontal: 16 }, subheading: { textAlign: "center", paddingTop: 16, paddingBottom: 16 }, previewImageWrapper: null, previewImage: null, activityInfoWrapper: null, activityInfoHeader: null, joinButtonWrapper: null, optInChannelsContainer: null, blockedMemberWarning: null, consolePreJoinPadding: null };
let obj3 = { paddingTop: EDGE_GUTTER + fn(12411).BASE_VOICE_PANEL_HEADER_HEIGHT + EDGE_GUTTER, gap: 24, paddingBottom: 16 };
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
let closure_28 = createStyles.createStyles(obj);
let closure_30 = noop.memo((hasMembers) => {
  const tmp = closure_28();
  let tmp2 = null;
  if (!hasMembers.hasMembers) {
    const obj = { style: tmp.channelInfoWrapper, children: null };
    const obj2 = { variant: "text-sm/medium", color: "text-default", style: tmp.subheading, children: null };
    const intl = util.intl;
    obj2.children = intl.string(util.t.sS2J0G);
    obj.children = closure_1_25(Text_Text.Text, obj2);
    tmp2 = closure_1_25(NativeViewDefault, obj);
  }
  return tmp2;
});
const __initData = { code: "function VoicePanelPreJoinContentTsx1(){const{windowDimensions}=this.__closure;return windowDimensions.get().width;}" };
const __initData2 = { code: "function VoicePanelPreJoinContentTsx2(width,previous){const{runOnJS,setActivityPreviewWidth,EDGE_GUTTER}=this.__closure;if(width===previous)return;runOnJS(setActivityPreviewWidth)(width-(EDGE_GUTTER+16)*2);}" };
let closure_34 = noop.memo((blockedUserIds) => {
  blockedUserIds = blockedUserIds.blockedUserIds;
  ({ channelId, ignoredUserIds } = blockedUserIds);
  const obj = { name: null, properties: null };
  const tmp = closure_28();
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
    const items = [closure_1_25(CircleErrorIcon.CircleErrorIcon, { color: "text-feedback-warning" }), ];
    const obj4 = { variant: "text-sm/bold", color: "interactive-text-active", style: { flexShrink: 1 }, children: null };
    const items1 = [stringResult1, " ", ];
    let tmp11Result = null;
    if (null != stringResult) {
      const obj5 = { variant: "heading-sm/semibold", children: stringResult };
      tmp11Result = closure_1_25(Text_Text.Text, obj5);
    }
    items1[2] = tmp11Result;
    obj4.children = items1;
    items[1] = dependencyMap(Text_Text.Text, obj4);
    obj3.children = items;
    return dependencyMap(NativeViewDefault, obj3);
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
});
let closure_37 = noop.memo((channelId) => {
  channelId = channelId.channelId;
  const tmp = closure_28();
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
    tmp3 = closure_25(NativeViewDefault, obj2);
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
  const tmp = closure_28();
  const items = [ChannelStore];
  const stateFromStores = members(ignoredMembers[29]).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const obj = members(ignoredMembers[29]);
  const tmp6 = blockedMembers(ignoredMembers[52])(stateFromStores);
  analyticsLocations = blockedMembers(ignoredMembers[53])(blockedMembers(ignoredMembers[54]).VOICE_PANEL_PRE_JOIN).analyticsLocations;
  const items1 = [channelId, guildId, analyticsLocations];
  const effect = analyticsLocations.useEffect(() => {
    AnalyticsUtilsDefault.track(constants.VIEW_VOICE_CHANNEL, { guild_id: guildId, channel_id: channelId, location_stack: analyticsLocations });
  }, items1);
  const items2 = [members, blockedMembers, ignoredMembers];
  const memo = analyticsLocations.useMemo(() => members.filter((user) => {
    const hasItem = set.has(user.user.id);
    let tmp2 = !hasItem;
    if (!hasItem) {
      tmp2 = !set2.has(user.user.id);
    }
    return tmp2;
  }), items2);
  const items3 = [closure_25(closure_30, { hasMembers: members.length > 0 }), , , , , ];
  let tmp12Result = null;
  if (tmp6) {
    const obj3 = { style: tmp.optInChannelsContainer, channel: stateFromStores, analyticsSection: constants2.CHANNEL };
    tmp12Result = closure_25(tmp2(tmp3[56]), obj3);
  }
  items3[1] = tmp12Result;
  items3[2] = activities.map((activity) => closure_2_25(ActivityInfo, { activity, analyticsLocations }, activity.launchId));
  let tmp12Result3 = members.length > 0 || blockedMembers.size > 0 || ignoredMembers.size > 0;
  if (tmp12Result3) {
    const obj4 = { members, streamingMembers: members.streamingMembers, blockedMembers, ignoredMembers };
    tmp12Result3 = closure_25(RoomMembers, obj4);
  }
  items3[3] = tmp12Result3;
  let tmp12Result4 = null != guildId;
  if (tmp12Result4) {
    const obj5 = { members: memo, guildId };
    tmp12Result4 = closure_25(tmp2(tmp3[57]), obj5);
  }
  const obj6 = { children: null };
  items3[4] = tmp12Result4;
  items3[5] = closure_25(closure_37, { channelId });
  obj6.children = items3;
  return closure_26(closure_27, obj6);
});
const __initData3 = { code: "function VoicePanelPreJoinContentTsx3(){const{windowDimensions,roundToNearestPixel,controlsSpecs,safeArea,withSpring,transitionState,TransitionStates,interpolate,useReducedMotion,MODE_CHANGE_PHYSICS,runOnJS,transitionCleanUp}=this.__closure;const{height:windowHeight}=windowDimensions.get();return{paddingBottom:windowHeight-roundToNearestPixel(windowHeight*0.8)+controlsSpecs.get().height+safeArea.get().bottom,opacity:withSpring(transitionState===TransitionStates.YEETED?0:1),transform:[{translateY:withSpring(interpolate(!useReducedMotion.get()&&transitionState===TransitionStates.YEETED?1:0,[0,1],[0,400]),MODE_CHANGE_PHYSICS,'respect-motion-settings',function(finished=false){finished&&transitionState===TransitionStates.YEETED&&runOnJS(transitionCleanUp)();})}]};}" };
let closure_40 = { code: "function VoicePanelPreJoinContentTsx4(finished=false){const{transitionState,TransitionStates,runOnJS,transitionCleanUp}=this.__closure;finished&&transitionState===TransitionStates.YEETED&&runOnJS(transitionCleanUp)();}" };
let obj7 = { display: "flex", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.xs, borderColor: nativeDefault.colors.ICON_FEEDBACK_WARNING, borderWidth: 1, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING, marginHorizontal: nativeDefault.space.PX_16 };
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/prejoin/VoicePanelPreJoinContent.tsx");

export default noop.memo(function VoicePanelPreJoinWrapper() {
  const context = noop.useContext(guildId(12406));
  const channelId = context.channelId;
  guildId = context.guildId;
  const tmp2 = guildId(17186)(channelId);
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
  }, items1, channelId(17312).areVoicePanelPreJoinContentPropsEqual);
  return closure_25(channelId(4350).TransitionItem, { item: stateFromStores, renderItem });
});