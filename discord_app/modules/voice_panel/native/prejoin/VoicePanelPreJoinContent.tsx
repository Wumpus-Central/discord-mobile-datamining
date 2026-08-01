// === Module 16006: StreamPreview ===

// Module 16006 (StreamPreview)
import set from "set";
import useGetOrFetchApplications from "useGetOrFetchApplications";
import importAllResult from "jsxProd";
import { StyleSheet } from "ME";
import participantFromServer from "participantFromServer";
import closure_7 from "set";
import init from "init";
import reset from "reset";
import fetchFingerprint from "fetchFingerprint";
import ensureGuildLoaded from "ensureGuildLoaded";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import handleUpdate from "handleUpdate";
import mergeGuildAvatar from "mergeGuildAvatar";
import updateVoiceState from "updateVoiceState";
import getVoiceStatesForGuild from "getVoiceStatesForGuild";
import { MODE_CHANGE_PHYSICS } from "VoicePanelModes";
import { EDGE_GUTTER } from "CARD_SIZE";
import ME from "ME";
import { VoiceChannelWarningSurfaces as closure_22 } from "GdmWarningMedium";
import jsxProd from "t";
import createCacheKey from "createCacheKey";

let closure_19;
let closure_20;
let closure_21;
let closure_23;
let closure_24;
let closure_25;
const require = arg1;
function StreamPreview(channelId) {
  let stream;
  let voiceState;
  ({ voiceState, stream } = channelId);
  channelId = channelId.channelId;
  let setFocused;
  let set;
  const tmp = callback2();
  const context = importAllResult.useContext(channelId(setFocused[23]));
  setFocused = context.setFocused;
  const items = [channelId, stream, setFocused];
  const callback = importAllResult.useCallback(() => {
    const voiceChannel = channelId(setFocused[24]).selectVoiceChannel(channelId);
    const obj = channelId(setFocused[24]);
    stream(setFocused[25]).watchStream(stream, { forceMultiple: true });
    const obj2 = stream(setFocused[25]);
    setFocused(stream(setFocused[26]).encodeStreamKey(stream));
  }, items);
  let obj = stream(setFocused[27]);
  const items1 = [ensureGuildLoaded];
  set = obj.useStateFromStores(items1, () => outer1_11.getChannel(channelId));
  let obj1 = stream(setFocused[27]);
  const items2 = [getUncachedChannelPermissions];
  const stateFromStores = obj1.useStateFromStores(items2, () => outer1_12.can(outer1_21.CONNECT, set));
  obj = { style: tmp.activityInfoWrapper, children: null };
  obj = { variant: "text-sm/semibold", style: tmp.activityInfoHeader, color: "text-default", children: null };
  const intl = stream(setFocused[30]).intl;
  let username = voiceState.nick;
  if (username == null) {
    username = voiceState.user.username;
  }
  obj[3] = intl.format(stream(setFocused[30]).t.I0mOAs, { username });
  const items3 = [closure_23(stream(setFocused[29]).Text, obj), ];
  obj1 = { style: tmp.previewImageWrapper, children: null };
  const tmp2 = channelId;
  const tmp6 = stream;
  const tmp8 = closure_24;
  const tmp9 = channelId(setFocused[28]);
  obj1[1] = closure_23(tmp6(setFocused[31]).VoicePanelStreamPreview, { mode: context.mode, disabled: !stateFromStores, stream, onPress: callback });
  items3[1] = closure_23(channelId(setFocused[28]), obj1);
  obj[1] = items3;
  return tmp8(tmp9, obj);
}
function ActivityInfo(activity) {
  activity = activity.activity;
  const analyticsLocations = activity.analyticsLocations;
  let first;
  let channelId;
  let windowDimensions;
  let importAllResult;
  let embeddedActivityJoinability;
  let c7;
  const tmp = callback2();
  const items = [activity.applicationId];
  first = windowDimensions(analyticsLocations(first[32])(items), 1)[0];
  let obj1 = activity(first[33]);
  const embeddedActivityLocationChannelId = obj1.getEmbeddedActivityLocationChannelId(activity.location);
  const context = importAllResult.useContext(analyticsLocations(first[23]));
  channelId = context.channelId;
  windowDimensions = context.windowDimensions;
  const tmp7 = windowDimensions(importAllResult.useState(() => activity(first[35]).getWindowDimensions().width - 2 * (closure_18 + 16)), 2);
  importAllResult = tmp9;
  const first1 = tmp7[0];
  let obj2 = activity(first[36]);
  const fn = function u() {
    return windowDimensions.get().width;
  };
  fn.__closure = { windowDimensions };
  fn.__workletHash = 16837592262556;
  fn.__initData = closure_29;
  const fn2 = function c(arg0, arg1) {
    if (arg0 !== arg1) {
      activity(first[36]).runOnJS(c5)(arg0 - 2 * (outer1_18 + 16));
      const obj = activity(first[36]);
    }
  };
  let obj = { runOnJS: activity(first[36]).runOnJS, setActivityPreviewWidth: tmp9, EDGE_GUTTER };
  fn2.__closure = obj;
  fn2.__workletHash = 1481130207412;
  fn2.__initData = closure_30;
  const animatedReaction = obj2.useAnimatedReaction(fn, fn2);
  let obj4 = activity(first[37]);
  obj = { userId: id.getId(), channelId, application: first };
  embeddedActivityJoinability = obj4.useEmbeddedActivityJoinability(obj);
  const tmp12 = embeddedActivityJoinability === activity(first[37]).EmbeddedActivityJoinability.CAN_JOIN;
  c7 = tmp12;
  const items1 = [activity.launchId, analyticsLocations, first, tmp12, channelId, embeddedActivityJoinability];
  const callback = importAllResult.useCallback(() => {
    let obj = { embeddedActivityJoinability, handleCanJoin: null };
    let closure_0 = channelId(function*() {
      if (v0 === 2) {
        v0 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          v0 = 2;
          if (0 === num3) {
            num3 = 1;
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else if (outer1_7) {
              if (null != outer1_2) {
                let obj2 = v0(outer2_2[38]);
                let obj1 = { channelId: null, applicationId: null, launchId: null, inputApplication: null, analyticsLocations: null };
                obj1[0] = outer1_3;
                obj1[1] = tmp9.id;
                obj1[2] = v0.launchId;
                obj1[3] = tmp9;
                obj1[4] = c1;
                v0 = num3;
                obj2 = { value: null, done: false };
                obj2[0] = obj2.maybeJoinEmbeddedActivity(obj1);
                return obj2;
              }
            } else {
              obj1 = outer2_1(outer2_2[24]);
              const voiceChannel = obj1.selectVoiceChannel(outer1_3);
            }
          } else {
            num3 = 1;
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
          }
          v0 = 3;
        } catch (tmp17) {
          v0 = tmp;
          throw tmp17;
        }
      }
    });
    obj[1] = function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    analyticsLocations(first[38])(obj);
  }, items1);
  let tmp16Result = null;
  if (null != first) {
    obj1 = { style: null, children: null };
    obj1[0] = tmp.activityInfoWrapper;
    let tmp2Result = tmp2(tmp3[28]);
    obj2 = { variant: "text-sm/semibold", style: null, color: "text-default", children: null };
    obj2[1] = tmp.activityInfoHeader;
    const intl = tmp4(tmp3[30]).intl;
    const obj3 = { n: null };
    obj3[0] = arr2.length;
    obj2[3] = intl.format(tmp4(tmp3[30]).t["n/IJ6Y"], obj3);
    const items2 = [callback(tmp4(tmp3[29]).Text, obj2), ];
    obj4 = { activeOpacity: 0.7, onPress: null, style: null, accessible: false, children: null };
    obj4[1] = callback;
    obj4[2] = tmp.previewImageWrapper;
    const obj5 = { style: null, children: null };
    obj5[0] = tmp.previewImage;
    tmp2Result = tmp2(tmp3[28]);
    const obj6 = { imageBackground: null, aspectRatio: 1.7777777777777777 };
    obj6[0] = tmp14;
    obj5[1] = callback(tmp2(tmp3[41]), obj6);
    const items3 = [callback(tmp2Result, obj5), ];
    const obj7 = { style: null, children: null };
    obj7[0] = tmp.joinButtonWrapper;
    const obj8 = { text: null, size: "sm", iconPosition: "start", variant: "primary-overlay", icon: null, onPress: null };
    const intl2 = tmp4(tmp3[30]).intl;
    const obj9 = { name: null };
    obj9[0] = first.name;
    obj8[0] = intl2.formatToPlainString(tmp4(tmp3[30]).t["YV/hE8"], obj9);
    const iconURL = first.getIconURL(20);
    const obj10 = { variant: "entity", source: null };
    const obj11 = { uri: null, width: 20, height: 20 };
    obj11[0] = iconURL;
    obj10[1] = obj11;
    obj8[4] = callback(tmp4(tmp3[42]).Button.Icon, obj10);
    obj8[5] = callback;
    obj7[1] = callback(tmp4(tmp3[42]).Button, obj8);
    items3[1] = callback(tmp2(tmp3[28]), obj7);
    obj4[4] = items3;
    items2[1] = closure_24(tmp4(tmp3[40]).PressableOpacity, obj4);
    obj1[1] = items2;
    tmp16Result = tmp16(tmp2Result, obj1);
    const tmp2Result1 = tmp2(tmp3[28]);
  }
  return tmp16Result;
}
function RoomMembersSection(title) {
  let dependencyMap;
  let importDefault;
  let require;
  ({ members: require, channelId: importDefault, guildId: dependencyMap } = title);
  let obj = { title: title.title, hasIcons: true, children: null };
  obj[2] = (() => {
    const items = [];
    const iter = dependencyMap[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp4 = outer1_14;
      let tmp3 = nextResult;
      let user = outer1_14.getUser(nextResult);
      let tmp6 = user;
      if (null != user) {
        let tmp7 = outer1_23;
        let tmp8 = outer1_0;
        let tmp9 = outer1_2;
        let obj = { user: null, channelId: null, guildId: null, nick: null };
        let tmp10 = user;
        obj[0] = tmp6;
        let tmp11 = closure_1;
        obj[1] = closure_1;
        let tmp12 = closure_2;
        obj[2] = closure_2;
        let tmp13 = outer1_1;
        let obj2 = outer1_1(outer1_2[47]);
        obj[3] = obj2.getName(closure_2, closure_1, tmp6);
        let tmp14 = nextResult;
        let arr = items.push(outer1_23(outer1_0(outer1_2[46]).MemberRowItem, obj, tmp3));
      }
      continue;
    }
    return items;
  })();
  return callback(require(8869) /* VoiceBadges */.VoicePanelFormSection, obj);
}
function RoomMembers(members) {
  let blockedMembers;
  let streamingMembers;
  members = members.members;
  ({ streamingMembers, blockedMembers } = members);
  const ignoredMembers = members.ignoredMembers;
  let channelId;
  let guildId;
  let first;
  let participantFromServer;
  const context = first.useContext(blockedMembers(ignoredMembers[23]));
  channelId = context.channelId;
  guildId = context.guildId;
  let tmp3 = guildId(first.useState(20), 2);
  first = tmp3[0];
  participantFromServer = tmp3[1];
  const sum = blockedMembers.size + ignoredMembers.size;
  const diff = members.length - sum;
  let tmp9 = sum > 0;
  if (tmp9) {
    let obj = { channelId: null, blockedUserIds: null, ignoredUserIds: null };
    obj[0] = channelId;
    obj[1] = blockedMembers;
    obj[2] = ignoredMembers;
    tmp9 = callback(closure_32, obj);
  }
  const children = [
    tmp9,
    streamingMembers.map((arg0) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = arg0;
      return outer1_23(outer1_27, { channelId, voiceState: tmp, stream: tmp2 }, tmp2.ownerId);
    }),
  ,
  ,

  ];
  let tmp12 = blockedMembers.size > 0;
  if (tmp12) {
    obj = { title: null, members: null, channelId: null, guildId: null };
    const intl = members(tmp[30]).intl;
    obj = { n: null };
    obj[0] = blockedMembers.size;
    obj[0] = intl.formatToPlainString(members(tmp[30]).t.pGJ1Qy, obj);
    obj[1] = blockedMembers;
    obj[2] = channelId;
    obj[3] = guildId;
    tmp12 = callback(RoomMembersSection, obj);
  }
  children[2] = tmp12;
  let tmp16 = ignoredMembers.size > 0;
  if (tmp16) {
    const obj1 = { title: null, members: null, channelId: null, guildId: null };
    const intl2 = members(tmp[30]).intl;
    const obj2 = { n: null };
    obj2[0] = ignoredMembers.size;
    obj1[0] = intl2.formatToPlainString(members(tmp[30]).t["/pXOCN"], obj2);
    obj1[1] = ignoredMembers;
    obj1[2] = channelId;
    obj1[3] = guildId;
    tmp16 = callback(RoomMembersSection, obj1);
  }
  children[3] = tmp16;
  let tmp7Result = diff > 0;
  if (tmp7Result) {
    if (0 === sum) {
      const intl4 = tmp21(tmp[30]).intl;
      let obj3 = { n: null };
      obj3[0] = members.length;
      let formatToPlainStringResult = intl4.formatToPlainString(tmp21(tmp[30]).t.vloEU7, obj3);
    } else {
      const intl3 = tmp21(tmp[30]).intl;
      const obj4 = { n: null };
      obj4[0] = diff;
      formatToPlainStringResult = intl3.formatToPlainString(tmp21(tmp[30]).t.R0h4pE, obj4);
    }
    const obj5 = { hasIcons: true, title: null, children: null };
    obj5[1] = formatToPlainStringResult;
    const items1 = [
      (() => {
          const items = [];
          for (const item10007 of members) {
            let tmp = item10007;
            let tmp2 = first;
            if (items.length >= first) {
              let tmp14 = obj;
              obj.return();
              break;
            } else {
              let tmp15 = blockedMembers;
              let tmp16 = item10007;
              let hasItem = blockedMembers.has(tmp.user.id);
              if (!hasItem) {
                let tmp3 = ignoredMembers;
                let tmp4 = item10007;
                hasItem = ignoredMembers.has(tmp.user.id);
              }
              if (!hasItem) {
                let tmp6 = outer1_23;
                let tmp7 = members;
                let tmp8 = ignoredMembers;
                let obj = { user: null, channelId: null, guildId: null, nick: null };
                let tmp9 = item10007;
                obj[0] = tmp.user;
                let tmp10 = channelId;
                obj[1] = channelId;
                let tmp11 = guildId;
                obj[2] = guildId;
                let tmp12 = blockedMembers;
                let obj3 = blockedMembers(ignoredMembers[47]);
                obj[3] = obj3.getName(guildId, channelId, tmp.user);
                let arr = items.push(outer1_23(members(ignoredMembers[46]).MemberRowItem, obj, tmp.user.id));
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
      const intl5 = tmp21(tmp[30]).intl;
      obj6[0] = intl5.string(tmp21(tmp[30]).t.F4MCUO);
      obj6[1] = function onPress() {
        return callback(first + 20);
      };
      tmp23 = callback(tmp21(tmp[48]).TableRow, obj6);
    }
    items1[1] = tmp23;
    obj5[2] = items1;
    tmp7Result = tmp7(members(tmp[46]).VoicePanelFormSection, obj5);
  }
  children[4] = tmp7Result;
  return closure_24(closure_25, { children });
}
function PreJoinTransitioner(transitionState) {
  transitionState = transitionState.transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  const merged = Object.assign(transitionState, Object.create(null));
  let windowDimensions;
  let controlsSpecs;
  let safeArea;
  let preJoinContentSize;
  let useReducedMotion;
  const context = preJoinContentSize.useContext(transitionCleanUp(windowDimensions[23]));
  windowDimensions = context.windowDimensions;
  controlsSpecs = context.controlsSpecs;
  safeArea = context.safeArea;
  preJoinContentSize = context.preJoinContentSize;
  useReducedMotion = context.useReducedMotion;
  let obj = transitionState(windowDimensions[36]);
  let fn = function l() {
    const height = windowDimensions.get().height;
    let obj = { paddingBottom: null, opacity: null, transform: null };
    const diff = height - transitionCleanUp(windowDimensions[49])(0.8 * height);
    const sum = diff + controlsSpecs.get().height;
    obj[0] = sum + safeArea.get().bottom;
    let num = 1;
    let num2 = 1;
    if (transitionState === transitionState(windowDimensions[56]).TransitionStates.YEETED) {
      num2 = 0;
    }
    obj[1] = transitionState(windowDimensions[55]).withSpring(num2);
    let tmp4Result = tmp4(tmp[55]);
    tmp4Result = tmp4(tmp[36]);
    if (useReducedMotion.get()) {
      num = 0;
    }
    obj = { translateY: null };
    const obj2 = transitionState(windowDimensions[55]);
    const fn = function o() {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = false;
      }
      if (flag) {
        flag = closure_0 === outer1_0(outer1_2[56]).TransitionStates.YEETED;
      }
      if (flag) {
        outer1_0(outer1_2[36]).runOnJS(closure_1)();
        const obj = outer1_0(outer1_2[36]);
      }
    };
    obj = { transitionState: tmp5, TransitionStates: tmp4(tmp[56]).TransitionStates, runOnJS: tmp4(tmp[36]).runOnJS, transitionCleanUp };
    fn.__closure = obj;
    fn.__workletHash = 2541522666097;
    fn.__initData = outer1_38;
    obj[0] = tmp4Result.withSpring(tmp4Result.interpolate(num, [0, 1], [0, 400]), outer1_17, "respect-motion-settings", fn);
    const items = [obj];
    obj[2] = items;
    return obj;
  };
  obj = { windowDimensions, roundToNearestPixel: transitionCleanUp(windowDimensions[49]), controlsSpecs, safeArea, withSpring: transitionState(windowDimensions[55]).withSpring, transitionState, TransitionStates: transitionState(windowDimensions[56]).TransitionStates, interpolate: transitionState(windowDimensions[36]).interpolate, useReducedMotion, MODE_CHANGE_PHYSICS, runOnJS: transitionState(windowDimensions[36]).runOnJS, transitionCleanUp };
  fn.__closure = obj;
  fn.__workletHash = 16643118377748;
  fn.__initData = closure_37;
  let items = [preJoinContentSize];
  const animatedStyle = obj.useAnimatedStyle(fn);
  const callback = preJoinContentSize.useCallback((nativeEvent) => {
    const result = preJoinContentSize.set(transitionCleanUp(windowDimensions[49])(nativeEvent.nativeEvent.layout.height));
  }, items);
  obj = { style: animatedStyle, collapsable: false, children: null };
  const tmp2 = callback2();
  const obj1 = { onLayout: callback, collapsable: false, style: tmp2.contentWrapper, children: null };
  let obj2 = {};
  const tmp6 = transitionCleanUp(windowDimensions[57]);
  const merged1 = Object.assign(merged);
  obj1[3] = callback(closure_36, obj2);
  obj[2] = callback(transitionCleanUp(windowDimensions[28]), obj1);
  return callback(tmp6, obj);
}
function renderItem(arg0, arg1, transitionState, transitionCleanUp) {
  const merged = Object.assign(arg1);
  return callback(PreJoinTransitioner, { transitionState, transitionCleanUp }, arg0);
}
let c5 = importAllResult;
({ AnalyticEvents: closure_19, AnalyticsSections: closure_20, Permissions: closure_21 } = ME);
({ jsx: closure_23, jsxs: closure_24, Fragment: closure_25 } = jsxProd);
let obj = { contentWrapper: null, channelInfoWrapper: null, subheading: null, previewImageWrapper: null, previewImage: null, activityInfoWrapper: null, activityInfoHeader: null, joinButtonWrapper: null, optInChannelsContainer: null, blockedMemberWarning: null, consolePreJoinPadding: null };
obj = { paddingTop: EDGE_GUTTER + require("t").BASE_VOICE_PANEL_HEADER_HEIGHT + EDGE_GUTTER, gap: 24, paddingBottom: 16 };
obj[0] = obj;
obj[1] = { paddingHorizontal: 16 };
obj[2] = { textAlign: "center", paddingTop: 16, paddingBottom: 16 };
createCacheKey = { position: "relative", width: "100%", aspectRatio: 1.7777777777777777, borderRadius: require("Themes").radii.lg, overflow: "hidden", justifyContent: "center", backgroundColor: require("Themes").colors.BLACK };
obj[3] = createCacheKey;
let obj2 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj2.opacity = 0.5;
obj[4] = obj2;
obj[5] = { paddingHorizontal: 16 };
obj[6] = { marginBottom: 8 };
let obj3 = {};
let merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj3.display = "flex";
obj3.alignItems = "center";
obj3.justifyContent = "center";
obj[7] = obj3;
obj[8] = { marginHorizontal: 16 };
obj[9] = { display: "flex", flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_8, padding: require("Themes").space.PX_8, borderRadius: require("Themes").radii.xs, borderColor: require("Themes").colors.ICON_FEEDBACK_WARNING, borderWidth: 1, backgroundColor: require("Themes").colors.BACKGROUND_FEEDBACK_WARNING, marginHorizontal: require("Themes").space.PX_16 };
obj[10] = { height: 36 };
let closure_26 = createCacheKey.createStyles(obj);
let closure_28 = importAllResult.memo((hasMembers) => {
  const tmp = callback2();
  let tmp2 = null;
  if (!hasMembers.hasMembers) {
    let obj = { style: null, children: null };
    obj[0] = tmp.channelInfoWrapper;
    obj = { variant: "text-sm/medium", color: "text-default", style: null, children: null };
    obj[2] = tmp.subheading;
    const intl = require(1236) /* getSystemLocale */.intl;
    obj[3] = intl.string(require(1236) /* getSystemLocale */.t.sS2J0G);
    obj[1] = callback(require(4189) /* Text */.Text, obj);
    tmp2 = callback(importDefault(5572), obj);
    const tmp6 = importDefault(5572);
  }
  return tmp2;
});
let closure_29 = { code: "function VoicePanelPreJoinContentTsx1(){const{windowDimensions}=this.__closure;return windowDimensions.get().width;}" };
let closure_30 = { code: "function VoicePanelPreJoinContentTsx2(width,previous){const{runOnJS,setActivityPreviewWidth,EDGE_GUTTER}=this.__closure;if(width===previous)return;runOnJS(setActivityPreviewWidth)(width-(EDGE_GUTTER+16)*2);}" };
let closure_32 = importAllResult.memo((blockedUserIds) => {
  let channelId;
  let ignoredUserIds;
  blockedUserIds = blockedUserIds.blockedUserIds;
  ({ channelId, ignoredUserIds } = blockedUserIds);
  let obj = { name: null, properties: null };
  const tmp = callback2();
  const tmp2 = importDefault;
  obj[0] = require(503) /* encodeProperties */.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING;
  obj = { channel_id: channelId, blocked_user_ids: Array.from(blockedUserIds), warning_surface: constants2.PRE_JOIN_SHEET };
  obj[1] = obj;
  importDefault(8436)(obj);
  const size = ignoredUserIds.size;
  const size2 = blockedUserIds.size;
  const intl = require(1236) /* getSystemLocale */.intl;
  const stringResult = intl.string(require(1236) /* getSystemLocale */.t.CjrALd);
  if (size2 > 0) {
    if (size > 0) {
      const intl4 = tmp5(1236).intl;
      let stringResult1 = intl4.string(tmp5(1236).t.MpRfpC);
    }
    obj = { style: null, children: null };
    obj[0] = tmp.blockedMemberWarning;
    const items = [callback(tmp5(6733).CircleErrorIcon, { color: "text-feedback-warning" }), ];
    const obj1 = { variant: "text-sm/bold", color: "interactive-text-active", style: null, children: null };
    obj1[2] = { flexShrink: 1 };
    const items1 = [stringResult1, " ", ];
    let tmp11Result = null;
    if (null != stringResult) {
      const obj2 = { variant: "heading-sm/semibold", children: null };
      obj2[1] = stringResult;
      tmp11Result = callback(tmp5(4189).Text, obj2);
    }
    items1[2] = tmp11Result;
    obj1[3] = items1;
    items[1] = closure_24(tmp5(4189).Text, obj1);
    obj[1] = items;
    return closure_24(tmp2(5572), obj);
  }
  if (size > 0) {
    const intl3 = tmp5(1236).intl;
    const obj3 = { n: null };
    obj3[0] = size;
    stringResult1 = intl3.format(tmp5(1236).t.u9trAZ, obj3);
  } else {
    const intl2 = tmp5(1236).intl;
    const obj4 = { n: null };
    obj4[0] = size2;
    stringResult1 = intl2.format(tmp5(1236).t["6X29zb"], obj4);
  }
});
let closure_35 = importAllResult.memo((channelId) => {
  channelId = channelId.channelId;
  let obj = channelId(589);
  const items = [fetchFingerprint, closure_7, updateVoiceState, handleUpdate];
  const items1 = [channelId];
  let tmp3 = null;
  if (obj.useStateFromStores(items, () => {
    const id = outer1_10.getId();
    const voiceStateForSession = outer1_15.getVoiceStateForSession(id, outer1_7.getRemoteSessionId());
    const awaitingRemoteSessionInfo = outer1_7.getAwaitingRemoteSessionInfo();
    let channelId;
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
        tmp8 = null != outer1_13.getSessionById(str);
      }
      tmp6 = tmp8;
    }
    return tmp6;
  }, items1)) {
    obj = { style: null };
    obj[0] = tmp.consolePreJoinPadding;
    tmp3 = callback(importDefault(5572), obj);
  }
  return tmp3;
});
let closure_36 = importAllResult.memo(function VoicePanelPreJoinContentInner(streamingMembers) {
  let activities;
  let blockedMembers;
  let ignoredMembers;
  let members;
  ({ members, blockedMembers, ignoredMembers, activities } = streamingMembers);
  let channelId;
  let guildId;
  let analyticsLocations;
  const context = importAllResult.useContext(guildId(analyticsLocations[23]));
  channelId = context.channelId;
  guildId = context.guildId;
  let obj = channelId(analyticsLocations[27]);
  const items = [ensureGuildLoaded];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_11.getChannel(channelId));
  const tmp = callback2();
  const tmp2 = guildId;
  const tmp3 = analyticsLocations;
  const tmp6 = guildId(analyticsLocations[50])(stateFromStores);
  analyticsLocations = guildId(analyticsLocations[51])(guildId(analyticsLocations[52]).VOICE_PANEL_PRE_JOIN).analyticsLocations;
  const items1 = [channelId, guildId, analyticsLocations];
  const effect = importAllResult.useEffect(() => {
    let obj = guildId(analyticsLocations[53]);
    obj = { guild_id: guildId, channel_id: channelId, location_stack: analyticsLocations };
    obj.track(outer1_19.VIEW_VOICE_CHANNEL, obj);
  }, items1);
  obj = { hasMembers: members.length > 0 };
  const items2 = [callback(closure_28, obj), , , , ];
  let tmp11Result = null;
  if (tmp6) {
    obj = { style: null, channel: null, analyticsSection: null };
    obj[0] = tmp.optInChannelsContainer;
    obj[1] = stateFromStores;
    obj[2] = constants.CHANNEL;
    tmp11Result = tmp11(tmp2(tmp3[54]), obj);
  }
  items2[1] = tmp11Result;
  items2[2] = activities.map((activity) => outer1_23(outer1_31, { activity, analyticsLocations }, activity.launchId));
  tmp11Result = members.length > 0 || blockedMembers.size > 0 || ignoredMembers.size > 0;
  if (tmp11Result) {
    const obj1 = { members: null, streamingMembers: null, blockedMembers: null, ignoredMembers: null };
    obj1[0] = members;
    obj1[1] = streamingMembers.streamingMembers;
    obj1[2] = blockedMembers;
    obj1[3] = ignoredMembers;
    tmp11Result = tmp11(RoomMembers, obj1);
  }
  const obj2 = { children: null };
  items2[3] = tmp11Result;
  items2[4] = callback(closure_35, { channelId });
  obj2[0] = items2;
  return closure_24(closure_25, obj2);
});
let closure_37 = { code: "function VoicePanelPreJoinContentTsx3(){const{windowDimensions,roundToNearestPixel,controlsSpecs,safeArea,withSpring,transitionState,TransitionStates,interpolate,useReducedMotion,MODE_CHANGE_PHYSICS,runOnJS,transitionCleanUp}=this.__closure;const{height:windowHeight}=windowDimensions.get();return{paddingBottom:windowHeight-roundToNearestPixel(windowHeight*0.8)+controlsSpecs.get().height+safeArea.get().bottom,opacity:withSpring(transitionState===TransitionStates.YEETED?0:1),transform:[{translateY:withSpring(interpolate(!useReducedMotion.get()&&transitionState===TransitionStates.YEETED?1:0,[0,1],[0,400]),MODE_CHANGE_PHYSICS,'respect-motion-settings',function(finished=false){finished&&transitionState===TransitionStates.YEETED&&runOnJS(transitionCleanUp)();})}]};}" };
let closure_38 = { code: "function VoicePanelPreJoinContentTsx4(finished=false){const{transitionState,TransitionStates,runOnJS,transitionCleanUp}=this.__closure;finished&&transitionState===TransitionStates.YEETED&&runOnJS(transitionCleanUp)();}" };
let obj4 = { display: "flex", flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_8, padding: require("Themes").space.PX_8, borderRadius: require("Themes").radii.xs, borderColor: require("Themes").colors.ICON_FEEDBACK_WARNING, borderWidth: 1, backgroundColor: require("Themes").colors.BACKGROUND_FEEDBACK_WARNING, marginHorizontal: require("Themes").space.PX_16 };
const memoResult = importAllResult.memo(function VoicePanelPreJoinWrapper() {
  const context = importAllResult.useContext(guildId(10050));
  const channelId = context.channelId;
  guildId = context.guildId;
  const tmp2 = guildId(15885)(channelId);
  const dependencyMap = tmp2;
  let obj = channelId(589);
  let items = [getVoiceStatesForGuild, init, participantFromServer, reset];
  let items1 = [tmp2, channelId, guildId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    if (!closure_2) {
      const voiceStatesForChannelAlt = outer1_16.getVoiceStatesForChannelAlt(tmp2, guildId);
      const blockedUsersForVoiceChannel = outer1_8.getBlockedUsersForVoiceChannel(tmp2);
      const ignoredUsersForVoiceChannel = outer1_8.getIgnoredUsersForVoiceChannel(tmp2);
      const embeddedActivitiesForChannel = outer1_6.getEmbeddedActivitiesForChannel(tmp2);
      const obj = { members: null, activities: null, streamingMembers: null, blockedMembers: null, ignoredMembers: null };
      obj[0] = voiceStatesForChannelAlt;
      obj[1] = embeddedActivitiesForChannel;
      obj[2] = (() => {
        const items = [];
        const iter = voiceStatesForChannelAlt[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp3 = nextResult;
          if (nextResult.voiceState.selfStream) {
            let tmp4 = outer2_9;
            let tmp5 = nextResult;
            let tmp6 = outer1_1;
            let streamForUser = outer2_9.getStreamForUser(tmp3.user.id, outer1_1);
            if (null != streamForUser) {
              let tmp9 = nextResult;
              let items1 = [tmp3, ];
              let tmp10 = streamForUser;
              items1[1] = tmp8;
              let arr = items.push(items1);
            }
          }
          continue;
        }
        return items;
      })();
      obj[3] = blockedUsersForVoiceChannel;
      obj[4] = ignoredUsersForVoiceChannel;
      return obj;
    }
  }, items1, channelId(16007).areVoicePanelPreJoinContentPropsEqual);
  obj = { item: stateFromStores, renderItem };
  return callback(channelId(4538).TransitionItem, obj);
});
let result = require("noop").fileFinishedImporting("modules/voice_panel/native/prejoin/VoicePanelPreJoinContent.tsx");

export default memoResult;