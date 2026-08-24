// === Module 16471: StreamPreview ===

// Module 16471 (StreamPreview)
import encodeProperties from "encodeProperties" /* 503 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4739 */;
import setDefault from "set" /* 7228 */;
import trackImpressionDefault from "trackImpression" /* 9214 */;
import VoiceBadges from "VoiceBadges" /* 9715 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import { StyleSheet } from "get ActivityIndicator" /* 17 */;
import closure_6 from "participantFromServer" /* 1390 */;
import closure_7 from "set" /* 4545 */;
import closure_8 from "init" /* 13339 */;
import closure_9 from "reset" /* 4658 */;
import closure_10 from "fetchFingerprint" /* 1218 */;
import closure_11 from "ensureGuildLoaded" /* 1391 */;
import closure_12 from "_detectH265HardwareDecode" /* 4501 */;
import closure_13 from "getUncachedChannelPermissions" /* 4024 */;
import closure_14 from "handleUpdate" /* 4546 */;
import closure_15 from "mergeGuildAvatar" /* 1922 */;
import closure_16 from "updateVoiceState" /* 4547 */;
import closure_17 from "getVoiceStatesForGuild" /* 4550 */;
import { MODE_CHANGE_PHYSICS } from "VoicePanelModes" /* 11489 */;
import { EDGE_GUTTER } from "CARD_SIZE" /* 11492 */;
import ME from "ME" /* 676 */;
import { VoiceChannelWarningSurfaces as closure_23 } from "GdmWarningMedium" /* 13344 */;
import { Features } from "DesktopSources" /* 4534 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

require = arg1;
function StreamPreview(channelId) {
  ({ voiceState, stream } = channelId);
  channelId = channelId.channelId;
  let setFocused;
  closure_3 = undefined;
  const tmp = callback2();
  const context = importAllResult.useContext(channelId(setFocused[25]));
  setFocused = context.setFocused;
  const items = [channelId, stream, setFocused];
  const callback = importAllResult.useCallback(() => {
    const voiceChannel = channelId(setFocused[26]).selectVoiceChannel(channelId);
    const obj = channelId(setFocused[26]);
    stream(setFocused[27]).watchStream(stream, { forceMultiple: true });
    const obj2 = stream(setFocused[27]);
    setFocused(stream(setFocused[28]).encodeStreamKey(stream));
  }, items);
  let obj = stream(setFocused[29]);
  const items1 = [closure_11];
  closure_3 = obj.useStateFromStores(items1, () => closure_1_11.getChannel(channelId));
  obj1 = stream(setFocused[29]);
  const items2 = [closure_13];
  const stateFromStores = obj1.useStateFromStores(items2, () => closure_1_13.can(closure_1_22.CONNECT, closure_3));
  obj = { style: tmp.activityInfoWrapper, children: null };
  obj = { variant: "text-sm/semibold", style: tmp.activityInfoHeader, color: "text-default", children: null };
  const intl = stream(setFocused[32]).intl;
  let username = voiceState.nick;
  if (username == null) {
    username = voiceState.user.username;
  }
  obj[3] = intl.format(stream(setFocused[32]).t.I0mOAs, { username });
  const items3 = [closure_25(stream(setFocused[31]).Text, obj), ];
  obj1 = { style: tmp.previewImageWrapper, children: null };
  const tmp2 = channelId;
  const tmp6 = stream;
  const tmp8 = closure_26;
  const tmp9 = channelId(setFocused[30]);
  obj1[1] = closure_25(tmp6(setFocused[33]).VoicePanelStreamPreview, { mode: context.mode, disabled: !stateFromStores, stream, onPress: callback });
  items3[1] = closure_25(channelId(setFocused[30]), obj1);
  obj[1] = items3;
  return tmp8(tmp9, obj);
}
function ActivityInfo(activity) {
  activity = activity.activity;
  const analyticsLocations = activity.analyticsLocations;
  let first;
  let channelId;
  let windowDimensions;
  importAllResult = undefined;
  let embeddedActivityJoinability;
  closure_7 = undefined;
  const tmp = callback2();
  const items = [activity.applicationId];
  first = windowDimensions(analyticsLocations(first[34])(items), 1)[0];
  obj1 = activity(first[35]);
  const embeddedActivityLocationChannelId = obj1.getEmbeddedActivityLocationChannelId(activity.location);
  const context = importAllResult.useContext(analyticsLocations(first[25]));
  channelId = context.channelId;
  windowDimensions = context.windowDimensions;
  const tmp7 = windowDimensions(importAllResult.useState(() => activity(first[37]).getWindowDimensions().width - 2 * (closure_19 + 16)), 2);
  importAllResult = tmp9;
  const first1 = tmp7[0];
  let obj2 = activity(first[38]);
  const fn = function u() {
    return windowDimensions.get().width;
  };
  fn.__closure = { windowDimensions };
  fn.__workletHash = 16837592262556;
  fn.__initData = closure_31;
  const fn2 = function c(arg0, arg1) {
    if (arg0 !== arg1) {
      activity(first[38]).runOnJS(closure_5)(arg0 - 2 * (closure_1_19 + 16));
      const obj = activity(first[38]);
    }
  };
  let obj = { runOnJS: activity(first[38]).runOnJS, setActivityPreviewWidth: tmp9, EDGE_GUTTER };
  fn2.__closure = obj;
  fn2.__workletHash = 1481130207412;
  fn2.__initData = closure_32;
  const animatedReaction = obj2.useAnimatedReaction(fn, fn2);
  let obj4 = activity(first[39]);
  obj = { userId: id.getId(), channelId, application: first };
  embeddedActivityJoinability = obj4.useEmbeddedActivityJoinability(obj);
  const tmp12 = embeddedActivityJoinability === activity(first[39]).EmbeddedActivityJoinability.CAN_JOIN;
  closure_7 = tmp12;
  const items1 = [activity.launchId, analyticsLocations, first, tmp12, channelId, embeddedActivityJoinability];
  const callback = importAllResult.useCallback(() => {
    let obj = { embeddedActivityJoinability, handleCanJoin: null };
    closure_0 = channelId(function*() {
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
            } else if (closure_1_7) {
              if (null != closure_1_2) {
                let obj2 = v0(closure_2_2[40]);
                obj1 = { channelId: null, applicationId: null, launchId: null, inputApplication: null, analyticsLocations: null };
                obj1[0] = closure_1_3;
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
              obj1 = closure_2_1(closure_2_2[26]);
              const voiceChannel = obj1.selectVoiceChannel(closure_1_3);
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
    analyticsLocations(first[40])(obj);
  }, items1);
  let tmp16Result = null;
  if (null != first) {
    obj1 = { style: null, children: null };
    obj1[0] = tmp.activityInfoWrapper;
    let tmp2Result = tmp2(tmp3[30]);
    obj2 = { variant: "text-sm/semibold", style: null, color: "text-default", children: null };
    obj2[1] = tmp.activityInfoHeader;
    const intl = tmp4(tmp3[32]).intl;
    const obj3 = { n: null };
    obj3[0] = arr2.length;
    obj2[3] = intl.format(tmp4(tmp3[32]).t["n/IJ6Y"], obj3);
    const items2 = [callback(tmp4(tmp3[31]).Text, obj2), ];
    obj4 = { activeOpacity: 0.7, onPress: null, style: null, accessible: false, children: null };
    obj4[1] = callback;
    obj4[2] = tmp.previewImageWrapper;
    const obj5 = { style: null, children: null };
    obj5[0] = tmp.previewImage;
    tmp2Result = tmp2(tmp3[30]);
    const obj6 = { imageBackground: null, aspectRatio: 1.7777777777777777 };
    obj6[0] = tmp14;
    obj5[1] = callback(tmp2(tmp3[43]), obj6);
    const items3 = [callback(tmp2Result, obj5), ];
    const obj7 = { style: null, children: null };
    obj7[0] = tmp.joinButtonWrapper;
    const obj8 = { text: null, size: "sm", iconPosition: "start", variant: "primary-overlay", icon: null, onPress: null };
    const intl2 = tmp4(tmp3[32]).intl;
    const obj9 = { name: null };
    obj9[0] = first.name;
    obj8[0] = intl2.formatToPlainString(tmp4(tmp3[32]).t["YV/hE8"], obj9);
    const iconURL = first.getIconURL(20);
    const obj10 = { variant: "entity", source: null };
    const obj11 = { uri: null, width: 20, height: 20 };
    obj11[0] = iconURL;
    obj10[1] = obj11;
    obj8[4] = callback(tmp4(tmp3[44]).Button.Icon, obj10);
    obj8[5] = callback;
    obj7[1] = callback(tmp4(tmp3[44]).Button, obj8);
    items3[1] = callback(tmp2(tmp3[30]), obj7);
    obj4[4] = items3;
    items2[1] = closure_26(tmp4(tmp3[42]).PressableOpacity, obj4);
    obj1[1] = items2;
    tmp16Result = tmp16(tmp2Result, obj1);
    const tmp2Result1 = tmp2(tmp3[30]);
  }
  return tmp16Result;
}
function RoomMembersSection(title) {
  ({ members: require, channelId: importDefault, guildId: dependencyMap } = title);
  return callback(VoiceBadges.VoicePanelFormSection, {
    title: title.title,
    hasIcons: true,
    children: (() => {
      const items = [];
      const iter = dependencyMap[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp4 = closure_1_15;
        let tmp3 = nextResult;
        let user = closure_1_15.getUser(nextResult);
        let tmp6 = user;
        if (null != user) {
          let tmp7 = closure_1_25;
          let tmp8 = closure_1_0;
          let tmp9 = closure_1_2;
          let obj = { user: null, channelId: null, guildId: null, nick: null };
          let tmp10 = user;
          obj[0] = tmp6;
          let tmp11 = closure_1;
          obj[1] = closure_1;
          let tmp12 = closure_2;
          obj[2] = closure_2;
          let tmp13 = closure_1_1;
          let obj2 = closure_1_1(closure_1_2[49]);
          obj[3] = obj2.getName(closure_2, closure_1, tmp6);
          let tmp14 = nextResult;
          let arr = items.push(closure_1_25(closure_1_0(closure_1_2[48]).MemberRowItem, obj, tmp3));
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
  let channelId;
  let guildId;
  let first;
  closure_6 = undefined;
  const context = first.useContext(blockedMembers(ignoredMembers[25]));
  channelId = context.channelId;
  guildId = context.guildId;
  let tmp3 = guildId(first.useState(20), 2);
  first = tmp3[0];
  closure_6 = tmp3[1];
  const sum = blockedMembers.size + ignoredMembers.size;
  const diff = members.length - sum;
  let tmp9 = sum > 0;
  if (tmp9) {
    let obj = { channelId: null, blockedUserIds: null, ignoredUserIds: null };
    obj[0] = channelId;
    obj[1] = blockedMembers;
    obj[2] = ignoredMembers;
    tmp9 = callback(closure_34, obj);
  }
  const children = [
    tmp9,
    streamingMembers.map((arg0) => {
      [tmp, tmp2] = arg0;
      return closure_1_25(closure_1_29, { channelId, voiceState: tmp, stream: tmp2 }, tmp2.ownerId);
    }),
  ,
  ,

  ];
  let tmp12 = blockedMembers.size > 0;
  if (tmp12) {
    obj = { title: null, members: null, channelId: null, guildId: null };
    const intl = members(tmp[32]).intl;
    obj = { n: null };
    obj[0] = blockedMembers.size;
    obj[0] = intl.formatToPlainString(members(tmp[32]).t.pGJ1Qy, obj);
    obj[1] = blockedMembers;
    obj[2] = channelId;
    obj[3] = guildId;
    tmp12 = callback(RoomMembersSection, obj);
  }
  children[2] = tmp12;
  let tmp16 = ignoredMembers.size > 0;
  if (tmp16) {
    obj1 = { title: null, members: null, channelId: null, guildId: null };
    const intl2 = members(tmp[32]).intl;
    const obj2 = { n: null };
    obj2[0] = ignoredMembers.size;
    obj1[0] = intl2.formatToPlainString(members(tmp[32]).t["/pXOCN"], obj2);
    obj1[1] = ignoredMembers;
    obj1[2] = channelId;
    obj1[3] = guildId;
    tmp16 = callback(RoomMembersSection, obj1);
  }
  children[3] = tmp16;
  let tmp7Result = diff > 0;
  if (tmp7Result) {
    if (0 === sum) {
      const intl4 = tmp21(tmp[32]).intl;
      let obj3 = { n: null };
      obj3[0] = members.length;
      let formatToPlainStringResult = intl4.formatToPlainString(tmp21(tmp[32]).t.vloEU7, obj3);
    } else {
      const intl3 = tmp21(tmp[32]).intl;
      const obj4 = { n: null };
      obj4[0] = diff;
      formatToPlainStringResult = intl3.formatToPlainString(tmp21(tmp[32]).t.R0h4pE, obj4);
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
                let tmp6 = closure_1_25;
                let tmp7 = members;
                let tmp8 = ignoredMembers;
                let obj = { user: null, channelId: null, guildId: null, nick: null, showGameActivity: true };
                let tmp9 = item10007;
                obj[0] = tmp.user;
                let tmp10 = channelId;
                obj[1] = channelId;
                let tmp11 = guildId;
                obj[2] = guildId;
                let tmp12 = blockedMembers;
                let obj3 = blockedMembers(ignoredMembers[49]);
                obj[3] = obj3.getName(guildId, channelId, tmp.user);
                let arr = items.push(closure_1_25(members(ignoredMembers[48]).MemberRowItem, obj, tmp.user.id));
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
      obj6[0] = intl5.string(tmp21(tmp[32]).t.F4MCUO);
      obj6[1] = function onPress() {
        return callback(first + 20);
      };
      tmp23 = callback(tmp21(tmp[50]).TableRow, obj6);
    }
    items1[1] = tmp23;
    obj5[2] = items1;
    tmp7Result = tmp7(members(tmp[48]).VoicePanelFormSection, obj5);
  }
  children[4] = tmp7Result;
  return closure_26(closure_27, { children });
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
  const context = preJoinContentSize.useContext(transitionCleanUp(windowDimensions[25]));
  windowDimensions = context.windowDimensions;
  controlsSpecs = context.controlsSpecs;
  safeArea = context.safeArea;
  preJoinContentSize = context.preJoinContentSize;
  useReducedMotion = context.useReducedMotion;
  let obj = transitionState(windowDimensions[38]);
  let fn = function l() {
    const height = windowDimensions.get().height;
    let obj = { paddingBottom: null, opacity: null, transform: null };
    const diff = height - transitionCleanUp(windowDimensions[51])(0.8 * height);
    const sum = diff + controlsSpecs.get().height;
    obj[0] = sum + safeArea.get().bottom;
    let num = 1;
    let num2 = 1;
    if (transitionState === transitionState(windowDimensions[59]).TransitionStates.YEETED) {
      num2 = 0;
    }
    obj[1] = transitionState(windowDimensions[58]).withSpring(num2);
    let tmp4Result = tmp4(tmp[58]);
    tmp4Result = tmp4(tmp[38]);
    if (useReducedMotion.get()) {
      num = 0;
    }
    obj = { translateY: null };
    const obj2 = transitionState(windowDimensions[58]);
    const fn = function o() {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = false;
      }
      if (flag) {
        flag = closure_0 === closure_1_0(closure_1_2[59]).TransitionStates.YEETED;
      }
      if (flag) {
        closure_1_0(closure_1_2[38]).runOnJS(closure_1)();
        const obj = closure_1_0(closure_1_2[38]);
      }
    };
    obj = { transitionState: tmp5, TransitionStates: tmp4(tmp[59]).TransitionStates, runOnJS: tmp4(tmp[38]).runOnJS, transitionCleanUp };
    fn.__closure = obj;
    fn.__workletHash = 2541522666097;
    fn.__initData = closure_1_40;
    obj[0] = tmp4Result.withSpring(tmp4Result.interpolate(num, [0, 1], [0, 400]), closure_1_18, "respect-motion-settings", fn);
    const items = [obj];
    obj[2] = items;
    return obj;
  };
  obj = { windowDimensions, roundToNearestPixel: transitionCleanUp(windowDimensions[51]), controlsSpecs, safeArea, withSpring: transitionState(windowDimensions[58]).withSpring, transitionState, TransitionStates: transitionState(windowDimensions[59]).TransitionStates, interpolate: transitionState(windowDimensions[38]).interpolate, useReducedMotion, MODE_CHANGE_PHYSICS, runOnJS: transitionState(windowDimensions[38]).runOnJS, transitionCleanUp };
  fn.__closure = obj;
  fn.__workletHash = 16643118377748;
  fn.__initData = closure_39;
  let items = [preJoinContentSize];
  const animatedStyle = obj.useAnimatedStyle(fn);
  const callback = preJoinContentSize.useCallback((nativeEvent) => {
    const result = preJoinContentSize.set(transitionCleanUp(windowDimensions[51])(nativeEvent.nativeEvent.layout.height));
  }, items);
  obj = { style: animatedStyle, collapsable: false, children: null };
  const tmp2 = callback2();
  obj1 = { onLayout: callback, collapsable: false, style: tmp2.contentWrapper, children: null };
  let obj2 = {};
  const tmp6 = transitionCleanUp(windowDimensions[60]);
  const merged1 = Object.assign(merged);
  obj1[3] = callback(closure_38, obj2);
  obj[2] = callback(transitionCleanUp(windowDimensions[30]), obj1);
  return callback(tmp6, obj);
}
function renderItem(arg0, arg1, transitionState, transitionCleanUp) {
  const merged = Object.assign(arg1);
  return callback(PreJoinTransitioner, { transitionState, transitionCleanUp }, arg0);
}
let c5 = importAllResult;
({ AnalyticEvents: closure_20, AnalyticsSections: closure_21, Permissions: closure_22 } = ME);
({ jsx: closure_25, jsxs: closure_26, Fragment: closure_27 } = jsxProd);
let obj = { contentWrapper: null, channelInfoWrapper: null, subheading: null, previewImageWrapper: null, previewImage: null, activityInfoWrapper: null, activityInfoHeader: null, joinButtonWrapper: null, optInChannelsContainer: null, blockedMemberWarning: null, consolePreJoinPadding: null };
obj = { paddingTop: EDGE_GUTTER + require("t").BASE_VOICE_PANEL_HEADER_HEIGHT + EDGE_GUTTER, gap: 24, paddingBottom: 16 };
obj[0] = obj;
obj[1] = { paddingHorizontal: 16 };
obj[2] = { textAlign: "center", paddingTop: 16, paddingBottom: 16 };
createCacheKey = { position: "relative", width: "100%", aspectRatio: 1.7777777777777777, borderRadius: ThemesDefault.radii.lg, overflow: "hidden", justifyContent: "center", backgroundColor: ThemesDefault.colors.BLACK };
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
obj[9] = { display: "flex", flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_8, padding: ThemesDefault.space.PX_8, borderRadius: ThemesDefault.radii.xs, borderColor: ThemesDefault.colors.ICON_FEEDBACK_WARNING, borderWidth: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_FEEDBACK_WARNING, marginHorizontal: ThemesDefault.space.PX_16 };
obj[10] = { height: 36 };
let closure_28 = createCacheKey.createStyles(obj);
let closure_30 = importAllResult.memo((hasMembers) => {
  const tmp = callback2();
  let tmp2 = null;
  if (!hasMembers.hasMembers) {
    let obj = { style: null, children: null };
    obj[0] = tmp.channelInfoWrapper;
    obj = { variant: "text-sm/medium", color: "text-default", style: null, children: null };
    obj[2] = tmp.subheading;
    const intl = getSystemLocale.intl;
    obj[3] = intl.string(getSystemLocale.t.sS2J0G);
    obj[1] = callback(Text.Text, obj);
    tmp2 = callback(setDefault, obj);
    const tmp6 = setDefault;
  }
  return tmp2;
});
let closure_31 = { code: "function VoicePanelPreJoinContentTsx1(){const{windowDimensions}=this.__closure;return windowDimensions.get().width;}" };
let closure_32 = { code: "function VoicePanelPreJoinContentTsx2(width,previous){const{runOnJS,setActivityPreviewWidth,EDGE_GUTTER}=this.__closure;if(width===previous)return;runOnJS(setActivityPreviewWidth)(width-(EDGE_GUTTER+16)*2);}" };
let closure_34 = importAllResult.memo((blockedUserIds) => {
  blockedUserIds = blockedUserIds.blockedUserIds;
  ({ channelId, ignoredUserIds } = blockedUserIds);
  let obj = { name: null, properties: null };
  const tmp = callback2();
  const tmp2 = importDefault;
  obj[0] = encodeProperties.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING;
  obj = { channel_id: channelId, blocked_user_ids: Array.from(blockedUserIds), warning_surface: constants2.PRE_JOIN_SHEET };
  obj[1] = obj;
  trackImpressionDefault(obj);
  const size = ignoredUserIds.size;
  const size2 = blockedUserIds.size;
  const intl = getSystemLocale.intl;
  const stringResult = intl.string(getSystemLocale.t.CjrALd);
  if (size2 > 0) {
    if (size > 0) {
      const intl4 = tmp5(1236).intl;
      let stringResult1 = intl4.string(tmp5(1236).t.MpRfpC);
    }
    obj = { style: null, children: null };
    obj[0] = tmp.blockedMemberWarning;
    const items = [callback(tmp5(8113).CircleErrorIcon, { color: "text-feedback-warning" }), ];
    obj1 = { variant: "text-sm/bold", color: "interactive-text-active", style: null, children: null };
    obj1[2] = { flexShrink: 1 };
    const items1 = [stringResult1, " ", ];
    let tmp11Result = null;
    if (null != stringResult) {
      const obj2 = { variant: "heading-sm/semibold", children: null };
      obj2[1] = stringResult;
      tmp11Result = callback(tmp5(4739).Text, obj2);
    }
    items1[2] = tmp11Result;
    obj1[3] = items1;
    items[1] = closure_26(tmp5(4739).Text, obj1);
    obj[1] = items;
    return closure_26(setDefault, obj);
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
let closure_37 = importAllResult.memo((channelId) => {
  channelId = channelId.channelId;
  let obj = channelId(589);
  const items = [closure_10, closure_7, closure_16, closure_14];
  const items1 = [channelId];
  let tmp3 = null;
  if (obj.useStateFromStores(items, () => {
    const id = closure_1_10.getId();
    const voiceStateForSession = closure_1_16.getVoiceStateForSession(id, closure_1_7.getRemoteSessionId());
    const awaitingRemoteSessionInfo = closure_1_7.getAwaitingRemoteSessionInfo();
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
        tmp8 = null != closure_1_14.getSessionById(str);
      }
      tmp6 = tmp8;
    }
    return tmp6;
  }, items1)) {
    obj = { style: null };
    obj[0] = tmp.consolePreJoinPadding;
    tmp3 = callback(setDefault, obj);
  }
  return tmp3;
});
let closure_38 = importAllResult.memo(function VoicePanelPreJoinContentInner(members) {
  members = members.members;
  const blockedMembers = members.blockedMembers;
  const ignoredMembers = members.ignoredMembers;
  const activities = members.activities;
  let channelId;
  let guildId;
  let analyticsLocations;
  const context = analyticsLocations.useContext(blockedMembers(ignoredMembers[25]));
  channelId = context.channelId;
  guildId = context.guildId;
  let obj = members(ignoredMembers[29]);
  const items = [closure_11];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_11.getChannel(channelId));
  const tmp = callback2();
  const tmp6 = blockedMembers(ignoredMembers[52])(stateFromStores);
  analyticsLocations = blockedMembers(ignoredMembers[53])(blockedMembers(ignoredMembers[54]).VOICE_PANEL_PRE_JOIN).analyticsLocations;
  const items1 = [channelId, guildId, analyticsLocations];
  const effect = analyticsLocations.useEffect(() => {
    let obj = blockedMembers(ignoredMembers[55]);
    obj = { guild_id: guildId, channel_id: channelId, location_stack: analyticsLocations };
    obj.track(closure_1_20.VIEW_VOICE_CHANNEL, obj);
  }, items1);
  const items2 = [members, blockedMembers, ignoredMembers];
  obj = { hasMembers: members.length > 0 };
  const memo = analyticsLocations.useMemo(() => members.filter((user) => {
    const hasItem = set.has(user.user.id);
    let tmp2 = !hasItem;
    if (!hasItem) {
      tmp2 = !set2.has(user.user.id);
    }
    return tmp2;
  }), items2);
  const items3 = [callback(closure_30, obj), , , , , ];
  let tmp12Result = null;
  if (tmp6) {
    obj = { style: null, channel: null, analyticsSection: null };
    obj[0] = tmp.optInChannelsContainer;
    obj[1] = stateFromStores;
    obj[2] = constants.CHANNEL;
    tmp12Result = tmp12(tmp2(tmp3[56]), obj);
  }
  items3[1] = tmp12Result;
  items3[2] = activities.map((activity) => closure_1_25(closure_1_33, { activity, analyticsLocations }, activity.launchId));
  tmp12Result = members.length > 0 || blockedMembers.size > 0 || ignoredMembers.size > 0;
  if (tmp12Result) {
    obj1 = { members: null, streamingMembers: null, blockedMembers: null, ignoredMembers: null };
    obj1[0] = members;
    obj1[1] = members.streamingMembers;
    obj1[2] = blockedMembers;
    obj1[3] = ignoredMembers;
    tmp12Result = tmp12(RoomMembers, obj1);
  }
  items3[3] = tmp12Result;
  let tmp12Result1 = null != guildId;
  if (tmp12Result1) {
    const obj2 = { members: null, guildId: null };
    obj2[0] = memo;
    obj2[1] = guildId;
    tmp12Result1 = tmp12(tmp2(tmp3[57]), obj2);
  }
  const obj3 = { children: null };
  items3[4] = tmp12Result1;
  items3[5] = callback(closure_37, { channelId });
  obj3[0] = items3;
  return closure_26(closure_27, obj3);
});
let closure_39 = { code: "function VoicePanelPreJoinContentTsx3(){const{windowDimensions,roundToNearestPixel,controlsSpecs,safeArea,withSpring,transitionState,TransitionStates,interpolate,useReducedMotion,MODE_CHANGE_PHYSICS,runOnJS,transitionCleanUp}=this.__closure;const{height:windowHeight}=windowDimensions.get();return{paddingBottom:windowHeight-roundToNearestPixel(windowHeight*0.8)+controlsSpecs.get().height+safeArea.get().bottom,opacity:withSpring(transitionState===TransitionStates.YEETED?0:1),transform:[{translateY:withSpring(interpolate(!useReducedMotion.get()&&transitionState===TransitionStates.YEETED?1:0,[0,1],[0,400]),MODE_CHANGE_PHYSICS,'respect-motion-settings',function(finished=false){finished&&transitionState===TransitionStates.YEETED&&runOnJS(transitionCleanUp)();})}]};}" };
let closure_40 = { code: "function VoicePanelPreJoinContentTsx4(finished=false){const{transitionState,TransitionStates,runOnJS,transitionCleanUp}=this.__closure;finished&&transitionState===TransitionStates.YEETED&&runOnJS(transitionCleanUp)();}" };
let obj4 = { display: "flex", flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_8, padding: ThemesDefault.space.PX_8, borderRadius: ThemesDefault.radii.xs, borderColor: ThemesDefault.colors.ICON_FEEDBACK_WARNING, borderWidth: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_FEEDBACK_WARNING, marginHorizontal: ThemesDefault.space.PX_16 };
const memoResult = importAllResult.memo(function VoicePanelPreJoinWrapper() {
  const context = importAllResult.useContext(guildId(11488));
  const channelId = context.channelId;
  guildId = context.guildId;
  const tmp2 = guildId(16353)(channelId);
  dependencyMap = tmp2;
  let obj = channelId(589);
  let items = [closure_17, closure_8, closure_6, closure_12, closure_9];
  let items1 = [tmp2, channelId, guildId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    if (!closure_2) {
      const voiceStatesForChannelAlt = closure_1_17.getVoiceStatesForChannelAlt(tmp2, guildId);
      const blockedUsersForVoiceChannel = closure_1_8.getBlockedUsersForVoiceChannel(tmp2);
      const ignoredUsersForVoiceChannel = closure_1_8.getIgnoredUsersForVoiceChannel(tmp2);
      const embeddedActivitiesForChannel = closure_1_6.getEmbeddedActivitiesForChannel(tmp2);
      const obj = { members: null, activities: null, streamingMembers: null, blockedMembers: null, ignoredMembers: null };
      obj[0] = voiceStatesForChannelAlt;
      obj[1] = embeddedActivitiesForChannel;
      obj[2] = (() => {
        const items = [];
        if (closure_2_12.supports(closure_2_24.VIDEO)) {
          const iter = voiceStatesForChannelAlt[Symbol.iterator]();
          const nextResult = iter.next();
          while (iter !== undefined) {
            let tmp7 = nextResult;
            if (nextResult.voiceState.selfStream) {
              let tmp8 = closure_2_9;
              let tmp9 = nextResult;
              let tmp10 = closure_1_1;
              let streamForUser = closure_2_9.getStreamForUser(tmp7.user.id, closure_1_1);
              if (null != streamForUser) {
                let tmp13 = nextResult;
                let items1 = [tmp7, ];
                let tmp14 = streamForUser;
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
      })();
      obj[3] = blockedUsersForVoiceChannel;
      obj[4] = ignoredUsersForVoiceChannel;
      return obj;
    }
  }, items1, channelId(16474).areVoicePanelPreJoinContentPropsEqual);
  obj = { item: stateFromStores, renderItem };
  return callback(channelId(4107).TransitionItem, obj);
});
let result = require("set").fileFinishedImporting("modules/voice_panel/native/prejoin/VoicePanelPreJoinContent.tsx");

export default memoResult;