// === Module 9711: StageActionHeader ===

// Module 9711 (StageActionHeader)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import useChannelNameDefault from "useChannelName" /* 5043 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5070 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5091 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 5097 */;
import LinearGradientDefault from "LinearGradient" /* 5605 */;
import NavigatorConstants from "NavigatorConstants" /* 6068 */;
import StageChannelActionCreatorExtras from "StageChannelActionCreatorExtras" /* 8070 */;
import AssetRegistryDefault from "AssetRegistry" /* 8276 */;
import StatusBarDefault from "StatusBar" /* 9060 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9193 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9481 */;
import StageMusicActionCreators from "StageMusicActionCreators" /* 9573 */;
import ChannelCallNavigatorIconDefault from "ChannelCallNavigatorIcon" /* 9587 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 9712 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 9713 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 9714 */;
import useMyCurrentStageChannelRoleDefault from "useMyCurrentStageChannelRole" /* 9717 */;
import ChannelCallHeaderButtons from "ChannelCallHeaderButtons" /* 9718 */;
import react from "react" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4906 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildReadStateStore from "GuildReadStateStore" /* 7121 */;
import GuildStore from "GuildStore" /* 2074 */;
import StageInstanceStore from "StageInstanceStore" /* 2056 */;
import StageMusicStore from "StageMusicStore" /* 9559 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ColorUtils_mod from "ColorUtils" /* 4727 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let channelId;

let ColorUtils;
let c10;
let closure_12;
let map1;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let unpackModuleId;
const View = react_native.View;
({ AnalyticEvents: c10, InstantInviteSources: unpackModuleId } = Constants);
({ jsx: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { header: obj2, leftTitleContainer: { marginLeft: 12, flex: 1 }, titleWrapper: { position: "relative", flex: 1, justifyContent: "center" }, linearGradient: { position: "absolute", zIndex: 1, left: 0, right: 0, top: 0, bottom: 0 }, iconBackground: obj3, iconContainer: obj4, settingsButton: { marginRight: 4 }, stageInfo: obj5, stageInfoTopic: { marginLeft: 4 }, icon: obj6 };
obj2 = { height: NavigatorConstants.NAV_BAR_HEIGHT, flexDirection: "row", alignItems: "center", paddingHorizontal: 12, overflow: "visible" };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.WHITE, 0.1) };
ColorUtils = ColorUtils_mod;
obj4 = { backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.WHITE, 0.1) };
ColorUtils = ColorUtils_mod;
obj5 = { flex: 1, flexDirection: "row", alignItems: "center", color: nativeDefault.colors.TEXT_SUBTLE };
obj6 = { marginLeft: 8, marginRight: 4, tintColor: nativeDefault.colors.TEXT_SUBTLE };
let closure_14 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let obj3;
  let tmp10;
  let tmp5;
  let tmp6;
  let totalMentionCount;
  const tmp = channel;
  let obj = channel(576);
  const cResult = obj.c(12);
  channel = channel.channel;
  const tmp4 = closure_14();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildReadStateStore];
    const fn = function o() {
      return totalMentionCount.getTotalMentionCount();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] !== channel) {
    class S {
      constructor() {
        const track = AnalyticsUtilsDefault.track;
        const VIDEO_LAYOUT_TOGGLED = constants.VIDEO_LAYOUT_TOGGLED;
        const obj = { video_layout: "pop out" };
        AnalyticsUtilsDefault;
        const obj2 = AppAnalyticsUtils;
        const merged = Object.assign(obj2.collectVoiceAnalyticsMetadata(channel.id));
        track(VIDEO_LAYOUT_TOGGLED, obj);
        const obj3 = StatusBarDefault;
        obj3.setHidden(false);
        const popWithKey = ModalActionCreatorsDefault.popWithKey;
        ModalActionCreatorsDefault;
        const obj4 = PrivateChannelCallUtils;
        popWithKey(obj4.getVoiceChannelKey(channel.id));
        const obj5 = ChannelRTCActionCreatorsDefault;
        const participant = obj5.selectParticipant(channel.id, null);
      }
    }
    cResult[2] = channel;
    cResult[3] = S;
  } else {
    class S {
      constructor() {
        const track = AnalyticsUtilsDefault.track;
        const VIDEO_LAYOUT_TOGGLED = constants.VIDEO_LAYOUT_TOGGLED;
        const obj = { video_layout: "pop out" };
        AnalyticsUtilsDefault;
        const obj2 = AppAnalyticsUtils;
        const merged = Object.assign(obj2.collectVoiceAnalyticsMetadata(channel.id));
        track(VIDEO_LAYOUT_TOGGLED, obj);
        const obj3 = StatusBarDefault;
        obj3.setHidden(false);
        const popWithKey = ModalActionCreatorsDefault.popWithKey;
        ModalActionCreatorsDefault;
        const obj4 = PrivateChannelCallUtils;
        popWithKey(obj4.getVoiceChannelKey(channel.id));
        const obj5 = ChannelRTCActionCreatorsDefault;
        const participant = obj5.selectParticipant(channel.id, null);
      }
    }
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        const track = AnalyticsUtilsDefault.track;
        const VIDEO_LAYOUT_TOGGLED = constants.VIDEO_LAYOUT_TOGGLED;
        const obj = { video_layout: "pop out" };
        AnalyticsUtilsDefault;
        const obj2 = AppAnalyticsUtils;
        const merged = Object.assign(obj2.collectVoiceAnalyticsMetadata(channel.id));
        track(VIDEO_LAYOUT_TOGGLED, obj);
        const obj3 = StatusBarDefault;
        obj3.setHidden(false);
        const popWithKey = ModalActionCreatorsDefault.popWithKey;
        ModalActionCreatorsDefault;
        const obj4 = PrivateChannelCallUtils;
        popWithKey(obj4.getVoiceChannelKey(channel.id));
        const obj5 = ChannelRTCActionCreatorsDefault;
        const participant = obj5.selectParticipant(channel.id, null);
      }
    }
    const stringResult = obj3.string(tmp(1126).t.cpT0Cq);
    cResult[4] = stringResult;
    tmp10 = stringResult;
  } else {
    class S {
      constructor() {
        const track = AnalyticsUtilsDefault.track;
        const VIDEO_LAYOUT_TOGGLED = constants.VIDEO_LAYOUT_TOGGLED;
        const obj = { video_layout: "pop out" };
        AnalyticsUtilsDefault;
        const obj2 = AppAnalyticsUtils;
        const merged = Object.assign(obj2.collectVoiceAnalyticsMetadata(channel.id));
        track(VIDEO_LAYOUT_TOGGLED, obj);
        const obj3 = StatusBarDefault;
        obj3.setHidden(false);
        const popWithKey = ModalActionCreatorsDefault.popWithKey;
        ModalActionCreatorsDefault;
        const obj4 = PrivateChannelCallUtils;
        popWithKey(obj4.getVoiceChannelKey(channel.id));
        const obj5 = ChannelRTCActionCreatorsDefault;
        const participant = obj5.selectParticipant(channel.id, null);
      }
    }
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        const track = AnalyticsUtilsDefault.track;
        const VIDEO_LAYOUT_TOGGLED = constants.VIDEO_LAYOUT_TOGGLED;
        const obj = { video_layout: "pop out" };
        AnalyticsUtilsDefault;
        const obj2 = AppAnalyticsUtils;
        const merged = Object.assign(obj2.collectVoiceAnalyticsMetadata(channel.id));
        track(VIDEO_LAYOUT_TOGGLED, obj);
        const obj3 = StatusBarDefault;
        obj3.setHidden(false);
        const popWithKey = ModalActionCreatorsDefault.popWithKey;
        ModalActionCreatorsDefault;
        const obj4 = PrivateChannelCallUtils;
        popWithKey(obj4.getVoiceChannelKey(channel.id));
        const obj5 = ChannelRTCActionCreatorsDefault;
        const participant = obj5.selectParticipant(channel.id, null);
      }
    }
    cResult[5] = tmp13;
  } else {
    class S {
      constructor() {
        const track = AnalyticsUtilsDefault.track;
        const VIDEO_LAYOUT_TOGGLED = constants.VIDEO_LAYOUT_TOGGLED;
        const obj = { video_layout: "pop out" };
        AnalyticsUtilsDefault;
        const obj2 = AppAnalyticsUtils;
        const merged = Object.assign(obj2.collectVoiceAnalyticsMetadata(channel.id));
        track(VIDEO_LAYOUT_TOGGLED, obj);
        const obj3 = StatusBarDefault;
        obj3.setHidden(false);
        const popWithKey = ModalActionCreatorsDefault.popWithKey;
        ModalActionCreatorsDefault;
        const obj4 = PrivateChannelCallUtils;
        popWithKey(obj4.getVoiceChannelKey(channel.id));
        const obj5 = ChannelRTCActionCreatorsDefault;
        const participant = obj5.selectParticipant(channel.id, null);
      }
    }
  }
  if (cResult[6] !== stateFromStores) {
    class S {
      constructor() {
        const track = AnalyticsUtilsDefault.track;
        const VIDEO_LAYOUT_TOGGLED = constants.VIDEO_LAYOUT_TOGGLED;
        const obj = { video_layout: "pop out" };
        AnalyticsUtilsDefault;
        const obj2 = AppAnalyticsUtils;
        const merged = Object.assign(obj2.collectVoiceAnalyticsMetadata(channel.id));
        track(VIDEO_LAYOUT_TOGGLED, obj);
        const obj3 = StatusBarDefault;
        obj3.setHidden(false);
        const popWithKey = ModalActionCreatorsDefault.popWithKey;
        ModalActionCreatorsDefault;
        const obj4 = PrivateChannelCallUtils;
        popWithKey(obj4.getVoiceChannelKey(channel.id));
        const obj5 = ChannelRTCActionCreatorsDefault;
        const participant = obj5.selectParticipant(channel.id, null);
      }
    }
    let obj2 = { value: stateFromStores, maskStyle: tmp13 };
    cResult[6] = stateFromStores;
    cResult[7] = closure_12(tmp(1188).MaskedBadge, obj2);
    const tmp15 = closure_12(tmp(1188).MaskedBadge, obj2);
  } else {
    class S {
      constructor() {
        const track = AnalyticsUtilsDefault.track;
        const VIDEO_LAYOUT_TOGGLED = constants.VIDEO_LAYOUT_TOGGLED;
        const obj = { video_layout: "pop out" };
        AnalyticsUtilsDefault;
        const obj2 = AppAnalyticsUtils;
        const merged = Object.assign(obj2.collectVoiceAnalyticsMetadata(channel.id));
        track(VIDEO_LAYOUT_TOGGLED, obj);
        const obj3 = StatusBarDefault;
        obj3.setHidden(false);
        const popWithKey = ModalActionCreatorsDefault.popWithKey;
        ModalActionCreatorsDefault;
        const obj4 = PrivateChannelCallUtils;
        popWithKey(obj4.getVoiceChannelKey(channel.id));
        const obj5 = ChannelRTCActionCreatorsDefault;
        const participant = obj5.selectParticipant(channel.id, null);
      }
    }
  }
  if (cResult[8] === S) {
    class S {
      constructor() {
        const track = AnalyticsUtilsDefault.track;
        const VIDEO_LAYOUT_TOGGLED = constants.VIDEO_LAYOUT_TOGGLED;
        const obj = { video_layout: "pop out" };
        AnalyticsUtilsDefault;
        const obj2 = AppAnalyticsUtils;
        const merged = Object.assign(obj2.collectVoiceAnalyticsMetadata(channel.id));
        track(VIDEO_LAYOUT_TOGGLED, obj);
        const obj3 = StatusBarDefault;
        obj3.setHidden(false);
        const popWithKey = ModalActionCreatorsDefault.popWithKey;
        ModalActionCreatorsDefault;
        const obj4 = PrivateChannelCallUtils;
        popWithKey(obj4.getVoiceChannelKey(channel.id));
        const obj5 = ChannelRTCActionCreatorsDefault;
        const participant = obj5.selectParticipant(channel.id, null);
      }
    }
  }
  let obj4 = { source: AssetRegistryDefault3, accessibilityLabel: tmp10, onPress: S, containerStyle: tmp4.iconContainer, disableBackground: true, children: tmp14 };
  const tmp16 = ChannelCallNavigatorIconDefault;
  cResult[8] = S;
  cResult[9] = tmp4.iconContainer;
  cResult[10] = tmp14;
  cResult[11] = closure_12(tmp16, obj4);
  closure_12(tmp16, obj4);
}) : ((channel) => {
  let intl;
  let totalMentionCount;
  channel = channel.channel;
  const tmp = closure_14();
  let obj = channel(504);
  const items = [GuildReadStateStore];
  const stateFromStores = obj.useStateFromStores(items, () => totalMentionCount.getTotalMentionCount());
  let obj2 = {
    source: AssetRegistryDefault3,
    accessibilityLabel: intl.string(channel(1126).t.cpT0Cq),
    onPress() {
      const track = AnalyticsUtilsDefault.track;
      const VIDEO_LAYOUT_TOGGLED = constants.VIDEO_LAYOUT_TOGGLED;
      const obj = { video_layout: "pop out" };
      AnalyticsUtilsDefault;
      const obj2 = AppAnalyticsUtils;
      const merged = Object.assign(obj2.collectVoiceAnalyticsMetadata(channel.id));
      track(VIDEO_LAYOUT_TOGGLED, obj);
      const obj3 = StatusBarDefault;
      obj3.setHidden(false);
      const popWithKey = ModalActionCreatorsDefault.popWithKey;
      ModalActionCreatorsDefault;
      const obj4 = PrivateChannelCallUtils;
      popWithKey(obj4.getVoiceChannelKey(channel.id));
      const obj5 = ChannelRTCActionCreatorsDefault;
      const participant = obj5.selectParticipant(channel.id, null);
    },
    containerStyle: tmp.iconContainer,
    disableBackground: true,
    children: closure_12(channel(1188).MaskedBadge, { value: stateFromStores, maskStyle: {} })
  };
  const tmp3 = ChannelCallNavigatorIconDefault;
  intl = channel(1126).intl;
  return closure_12(tmp3, obj2);
});
let closure_15 = tmp6;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let first;
  let items3;
  let tmp10;
  let tmp14;
  let tmp9;
  const obj = channel(576);
  const cResult = obj.c(28);
  channel = channel.channel;
  const tmp4 = closure_14();
  useChannelNameDefault(channel);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [StageInstanceStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel.id) {
    const fn = function c() {
      return StageInstanceStore.getStageInstanceByChannel(channel.id);
    };
    const items1 = [channel.id];
    cResult[1] = channel.id;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp10 = items1;
    tmp9 = fn;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult = channel(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp9, tmp10);
  const tmpResult4 = channel(5588);
  const stageParticipantsCount = tmpResult4.useStageParticipantsCount(channel.id, tmp(5582).StageChannelParticipantNamedIndex.AUDIENCE);
  const tmpResult5 = channel(5588);
  const actualStageSpeakerCount = tmpResult5.useActualStageSpeakerCount(channel.id);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [ChannelRTCStore];
    cResult[4] = items2;
    tmp14 = items2;
  } else {
    tmp14 = cResult[4];
  }
  if (cResult[5] !== channel.id) {
    class I {
      constructor() {
        return ChannelRTCStore.getSelectedParticipant(channel.id);
      }
    }
    cResult[5] = channel.id;
    cResult[6] = I;
  } else {
    class I {
      constructor() {
        return ChannelRTCStore.getSelectedParticipant(channel.id);
      }
    }
  }
  const tmpResult6 = channel(504);
  const stateFromStores1 = tmpResult6.useStateFromStores(tmp14, I);
  if (cResult[7] === stateFromStores1) {
    class I {
      constructor() {
        return ChannelRTCStore.getSelectedParticipant(channel.id);
      }
    }
    if (stateFromStores != null) {
      class I {
        constructor() {
          return ChannelRTCStore.getSelectedParticipant(channel.id);
        }
      }
    }
    if (undefined == null) {
      class I {
        constructor() {
          return ChannelRTCStore.getSelectedParticipant(channel.id);
        }
      }
    }
    if (cResult[10] !== undefined) {
      class I {
        constructor() {
          return ChannelRTCStore.getSelectedParticipant(channel.id);
        }
      }
      const obj2 = { color: "text-overlay-light", variant: "text-md/semibold", children: undefined };
      cResult[10] = undefined;
      cResult[11] = closure_12(channel(4886).Text, obj2);
      const tmp23 = closure_12(channel(4886).Text, obj2);
    } else {
      class I {
        constructor() {
          return ChannelRTCStore.getSelectedParticipant(channel.id);
        }
      }
    }
    if (cResult[12] === tmp4.titleWrapper) {
      class I {
        constructor() {
          return ChannelRTCStore.getSelectedParticipant(channel.id);
        }
      }
    }
    const obj3 = { style: tmp4.titleWrapper, children: items3 };
    items3 = [tmp18, tmp22];
    cResult[12] = tmp4.titleWrapper;
    cResult[13] = tmp18;
    cResult[14] = tmp22;
    cResult[15] = closure_13(View, obj3);
    const tmp27 = closure_13(View, obj3);
  }
  let tmp19 = null == stateFromStores1;
  if (tmp19) {
    class I {
      constructor() {
        return ChannelRTCStore.getSelectedParticipant(channel.id);
      }
    }
    const obj4 = { style: tmp4.linearGradient, colors: ["#00000000", "#000000"], start: { x: 0.85, y: 0 }, end: { x: 1, y: 0 } };
    tmp19 = closure_12(LinearGradientDefault, obj4);
  }
  cResult[7] = stateFromStores1;
  cResult[8] = tmp4.linearGradient;
  cResult[9] = tmp19;
}) : ((channel) => {
  let items3;
  let items4;
  let items5;
  channel = channel.channel;
  const tmp = closure_14();
  const tmp4 = useChannelNameDefault(channel);
  const items = [StageInstanceStore];
  const items1 = [channel.id];
  const obj = channel(504);
  const stateFromStores = obj.useStateFromStores(items, () => StageInstanceStore.getStageInstanceByChannel(channel.id), items1);
  const obj2 = channel(5588);
  const stageParticipantsCount = obj2.useStageParticipantsCount(channel.id, channel(5582).StageChannelParticipantNamedIndex.AUDIENCE);
  const obj3 = channel(5588);
  const actualStageSpeakerCount = obj3.useActualStageSpeakerCount(channel.id);
  const items2 = [ChannelRTCStore];
  const obj5 = { pointerEvents: "none", style: tmp.leftTitleContainer, children: items4 };
  const obj6 = { style: tmp.titleWrapper, children: items3 };
  const obj4 = channel(504);
  let tmp11 = null == obj4.useStateFromStores(items2, () => ChannelRTCStore.getSelectedParticipant(channel.id));
  if (tmp11) {
    const obj7 = { style: tmp.linearGradient, colors: ["#00000000", "#000000"], start: { x: 0.85, y: 0 }, end: { x: 1, y: 0 } };
    tmp11 = closure_12(LinearGradientDefault, obj7);
  }
  items3 = [tmp11, ];
  let topic;
  const Text = tmp5(4886).Text;
  if (stateFromStores != null) {
    topic = stateFromStores.topic;
  }
  if (topic == null) {
    topic = tmp4;
  }
  items3[1] = closure_12(Text, { color: "text-overlay-light", variant: "text-md/semibold", children: topic });
  items4 = [closure_13(View, obj6), ];
  let tmp9Result = null != stateFromStores;
  if (tmp9Result) {
    const obj8 = { style: tmp.stageInfo, children: items5 };
    const obj9 = { source: AssetRegistryDefault2, size: channel(1188).Icon.Sizes.SMALL, disableColor: true };
    const Icon = tmp5(1188).Icon;
    items5 = [closure_12(Icon, obj9), , , , , ];
    const obj10 = { variant: "text-xs/normal", style: tmp.stageInfoTopic, children: tmp4 };
    items5[1] = closure_12(channel(4886).Text, obj10);
    const obj11 = { source: AssetRegistryDefault, size: channel(1188).Icon.Sizes.SMALL, style: tmp.icon };
    const Icon2 = tmp5(1188).Icon;
    items5[2] = closure_12(Icon2, obj11);
    const obj12 = { variant: "text-xs/normal", children: actualStageSpeakerCount };
    items5[3] = closure_12(channel(4886).Text, obj12);
    const obj13 = { source: AssetRegistryDefault4, size: channel(1188).Icon.Sizes.SMALL, style: tmp.icon };
    const Icon3 = tmp5(1188).Icon;
    items5[4] = closure_12(Icon3, obj13);
    const obj14 = { variant: "text-xs/normal", children: stageParticipantsCount };
    items5[5] = closure_12(channel(4886).Text, obj14);
    tmp9Result = closure_13(View, obj8);
  }
  items4[1] = tmp9Result;
  return closure_13(View, obj5);
});
let closure_16 = tmp7;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let obj3;
  let tmp10;
  let tmp5;
  let tmp6;
  let totalMentionCount;
  const tmp = channel;
  let obj = channel(576);
  const cResult = obj.c(12);
  channel = channel.channel;
  const tmp4 = closure_14();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildReadStateStore];
    const fn = function o() {
      return totalMentionCount.getTotalMentionCount();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] !== channel) {
    class S {
      constructor() {
        const track = AnalyticsUtilsDefault.track;
        const VIDEO_LAYOUT_TOGGLED = constants.VIDEO_LAYOUT_TOGGLED;
        const obj = { video_layout: "pop out" };
        AnalyticsUtilsDefault;
        const obj2 = AppAnalyticsUtils;
        const merged = Object.assign(obj2.collectVoiceAnalyticsMetadata(channel.id));
        track(VIDEO_LAYOUT_TOGGLED, obj);
        const obj3 = StatusBarDefault;
        obj3.setHidden(false);
        const popWithKey = ModalActionCreatorsDefault.popWithKey;
        ModalActionCreatorsDefault;
        const obj4 = PrivateChannelCallUtils;
        popWithKey(obj4.getVoiceChannelKey(channel.id));
        const obj5 = ChannelRTCActionCreatorsDefault;
        const participant = obj5.selectParticipant(channel.id, null);
      }
    }
    cResult[2] = channel;
    cResult[3] = S;
  } else {
    class S {
      constructor() {
        const track = AnalyticsUtilsDefault.track;
        const VIDEO_LAYOUT_TOGGLED = constants.VIDEO_LAYOUT_TOGGLED;
        const obj = { video_layout: "pop out" };
        AnalyticsUtilsDefault;
        const obj2 = AppAnalyticsUtils;
        const merged = Object.assign(obj2.collectVoiceAnalyticsMetadata(channel.id));
        track(VIDEO_LAYOUT_TOGGLED, obj);
        const obj3 = StatusBarDefault;
        obj3.setHidden(false);
        const popWithKey = ModalActionCreatorsDefault.popWithKey;
        ModalActionCreatorsDefault;
        const obj4 = PrivateChannelCallUtils;
        popWithKey(obj4.getVoiceChannelKey(channel.id));
        const obj5 = ChannelRTCActionCreatorsDefault;
        const participant = obj5.selectParticipant(channel.id, null);
      }
    }
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        const track = AnalyticsUtilsDefault.track;
        const VIDEO_LAYOUT_TOGGLED = constants.VIDEO_LAYOUT_TOGGLED;
        const obj = { video_layout: "pop out" };
        AnalyticsUtilsDefault;
        const obj2 = AppAnalyticsUtils;
        const merged = Object.assign(obj2.collectVoiceAnalyticsMetadata(channel.id));
        track(VIDEO_LAYOUT_TOGGLED, obj);
        const obj3 = StatusBarDefault;
        obj3.setHidden(false);
        const popWithKey = ModalActionCreatorsDefault.popWithKey;
        ModalActionCreatorsDefault;
        const obj4 = PrivateChannelCallUtils;
        popWithKey(obj4.getVoiceChannelKey(channel.id));
        const obj5 = ChannelRTCActionCreatorsDefault;
        const participant = obj5.selectParticipant(channel.id, null);
      }
    }
    const stringResult = obj3.string(tmp(1126).t.cpT0Cq);
    cResult[4] = stringResult;
    tmp10 = stringResult;
  } else {
    class S {
      constructor() {
        const track = AnalyticsUtilsDefault.track;
        const VIDEO_LAYOUT_TOGGLED = constants.VIDEO_LAYOUT_TOGGLED;
        const obj = { video_layout: "pop out" };
        AnalyticsUtilsDefault;
        const obj2 = AppAnalyticsUtils;
        const merged = Object.assign(obj2.collectVoiceAnalyticsMetadata(channel.id));
        track(VIDEO_LAYOUT_TOGGLED, obj);
        const obj3 = StatusBarDefault;
        obj3.setHidden(false);
        const popWithKey = ModalActionCreatorsDefault.popWithKey;
        ModalActionCreatorsDefault;
        const obj4 = PrivateChannelCallUtils;
        popWithKey(obj4.getVoiceChannelKey(channel.id));
        const obj5 = ChannelRTCActionCreatorsDefault;
        const participant = obj5.selectParticipant(channel.id, null);
      }
    }
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        const track = AnalyticsUtilsDefault.track;
        const VIDEO_LAYOUT_TOGGLED = constants.VIDEO_LAYOUT_TOGGLED;
        const obj = { video_layout: "pop out" };
        AnalyticsUtilsDefault;
        const obj2 = AppAnalyticsUtils;
        const merged = Object.assign(obj2.collectVoiceAnalyticsMetadata(channel.id));
        track(VIDEO_LAYOUT_TOGGLED, obj);
        const obj3 = StatusBarDefault;
        obj3.setHidden(false);
        const popWithKey = ModalActionCreatorsDefault.popWithKey;
        ModalActionCreatorsDefault;
        const obj4 = PrivateChannelCallUtils;
        popWithKey(obj4.getVoiceChannelKey(channel.id));
        const obj5 = ChannelRTCActionCreatorsDefault;
        const participant = obj5.selectParticipant(channel.id, null);
      }
    }
    cResult[5] = tmp13;
  } else {
    class S {
      constructor() {
        const track = AnalyticsUtilsDefault.track;
        const VIDEO_LAYOUT_TOGGLED = constants.VIDEO_LAYOUT_TOGGLED;
        const obj = { video_layout: "pop out" };
        AnalyticsUtilsDefault;
        const obj2 = AppAnalyticsUtils;
        const merged = Object.assign(obj2.collectVoiceAnalyticsMetadata(channel.id));
        track(VIDEO_LAYOUT_TOGGLED, obj);
        const obj3 = StatusBarDefault;
        obj3.setHidden(false);
        const popWithKey = ModalActionCreatorsDefault.popWithKey;
        ModalActionCreatorsDefault;
        const obj4 = PrivateChannelCallUtils;
        popWithKey(obj4.getVoiceChannelKey(channel.id));
        const obj5 = ChannelRTCActionCreatorsDefault;
        const participant = obj5.selectParticipant(channel.id, null);
      }
    }
  }
  if (cResult[6] !== stateFromStores) {
    class S {
      constructor() {
        const track = AnalyticsUtilsDefault.track;
        const VIDEO_LAYOUT_TOGGLED = constants.VIDEO_LAYOUT_TOGGLED;
        const obj = { video_layout: "pop out" };
        AnalyticsUtilsDefault;
        const obj2 = AppAnalyticsUtils;
        const merged = Object.assign(obj2.collectVoiceAnalyticsMetadata(channel.id));
        track(VIDEO_LAYOUT_TOGGLED, obj);
        const obj3 = StatusBarDefault;
        obj3.setHidden(false);
        const popWithKey = ModalActionCreatorsDefault.popWithKey;
        ModalActionCreatorsDefault;
        const obj4 = PrivateChannelCallUtils;
        popWithKey(obj4.getVoiceChannelKey(channel.id));
        const obj5 = ChannelRTCActionCreatorsDefault;
        const participant = obj5.selectParticipant(channel.id, null);
      }
    }
    let obj2 = { value: stateFromStores, maskStyle: tmp13 };
    cResult[6] = stateFromStores;
    cResult[7] = closure_12(tmp(1188).MaskedBadge, obj2);
    const tmp15 = closure_12(tmp(1188).MaskedBadge, obj2);
  } else {
    class S {
      constructor() {
        const track = AnalyticsUtilsDefault.track;
        const VIDEO_LAYOUT_TOGGLED = constants.VIDEO_LAYOUT_TOGGLED;
        const obj = { video_layout: "pop out" };
        AnalyticsUtilsDefault;
        const obj2 = AppAnalyticsUtils;
        const merged = Object.assign(obj2.collectVoiceAnalyticsMetadata(channel.id));
        track(VIDEO_LAYOUT_TOGGLED, obj);
        const obj3 = StatusBarDefault;
        obj3.setHidden(false);
        const popWithKey = ModalActionCreatorsDefault.popWithKey;
        ModalActionCreatorsDefault;
        const obj4 = PrivateChannelCallUtils;
        popWithKey(obj4.getVoiceChannelKey(channel.id));
        const obj5 = ChannelRTCActionCreatorsDefault;
        const participant = obj5.selectParticipant(channel.id, null);
      }
    }
  }
  if (cResult[8] === S) {
    class S {
      constructor() {
        const track = AnalyticsUtilsDefault.track;
        const VIDEO_LAYOUT_TOGGLED = constants.VIDEO_LAYOUT_TOGGLED;
        const obj = { video_layout: "pop out" };
        AnalyticsUtilsDefault;
        const obj2 = AppAnalyticsUtils;
        const merged = Object.assign(obj2.collectVoiceAnalyticsMetadata(channel.id));
        track(VIDEO_LAYOUT_TOGGLED, obj);
        const obj3 = StatusBarDefault;
        obj3.setHidden(false);
        const popWithKey = ModalActionCreatorsDefault.popWithKey;
        ModalActionCreatorsDefault;
        const obj4 = PrivateChannelCallUtils;
        popWithKey(obj4.getVoiceChannelKey(channel.id));
        const obj5 = ChannelRTCActionCreatorsDefault;
        const participant = obj5.selectParticipant(channel.id, null);
      }
    }
  }
  let obj4 = { source: AssetRegistryDefault3, accessibilityLabel: tmp10, onPress: S, containerStyle: tmp4.iconContainer, disableBackground: true, children: tmp14 };
  const tmp16 = ChannelCallNavigatorIconDefault;
  cResult[8] = S;
  cResult[9] = tmp4.iconContainer;
  cResult[10] = tmp14;
  cResult[11] = closure_12(tmp16, obj4);
  closure_12(tmp16, obj4);
}) : ((channel) => {
  let intl;
  let totalMentionCount;
  channel = channel.channel;
  const tmp = closure_14();
  let obj = channel(504);
  const items = [GuildReadStateStore];
  const stateFromStores = obj.useStateFromStores(items, () => totalMentionCount.getTotalMentionCount());
  let obj2 = {
    source: AssetRegistryDefault3,
    accessibilityLabel: intl.string(channel(1126).t.cpT0Cq),
    onPress() {
      const track = AnalyticsUtilsDefault.track;
      const VIDEO_LAYOUT_TOGGLED = constants.VIDEO_LAYOUT_TOGGLED;
      const obj = { video_layout: "pop out" };
      AnalyticsUtilsDefault;
      const obj2 = AppAnalyticsUtils;
      const merged = Object.assign(obj2.collectVoiceAnalyticsMetadata(channel.id));
      track(VIDEO_LAYOUT_TOGGLED, obj);
      const obj3 = StatusBarDefault;
      obj3.setHidden(false);
      const popWithKey = ModalActionCreatorsDefault.popWithKey;
      ModalActionCreatorsDefault;
      const obj4 = PrivateChannelCallUtils;
      popWithKey(obj4.getVoiceChannelKey(channel.id));
      const obj5 = ChannelRTCActionCreatorsDefault;
      const participant = obj5.selectParticipant(channel.id, null);
    },
    containerStyle: tmp.iconContainer,
    disableBackground: true,
    children: closure_12(channel(1188).MaskedBadge, { value: stateFromStores, maskStyle: {} })
  };
  const tmp3 = ChannelCallNavigatorIconDefault;
  intl = channel(1126).intl;
  return closure_12(tmp3, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let first;
  let obj = channelId(576);
  const cResult = obj.c(10);
  channelId = channelId.channelId;
  const onOpenRTCDebugOverlay = channelId.onOpenRTCDebugOverlay;
  const tmp4 = closure_14();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(channelId(1126).t["lIx5+G"]);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === tmp4.iconBackground) {
    let tmp7;
    if (cResult[2] === tmp4.settingsButton) {
      tmp7 = cResult[3];
    }
    if (cResult[4] === channelId) {
      let tmp8;
      if (cResult[5] === onOpenRTCDebugOverlay) {
        tmp8 = cResult[6];
      }
      if (cResult[7] === tmp7) {
        let tmp9;
        if (cResult[8] === tmp8) {
          tmp9 = cResult[9];
        }
        return tmp9;
      }
      const obj2 = { accessibilityLabel: first, containerStyle: tmp7, source: onOpenRTCDebugOverlay(9714), onPress: tmp8, disableBackground: true };
      const tmp12 = onOpenRTCDebugOverlay(9587);
      const tmp13 = closure_12(tmp12, obj2);
      cResult[7] = tmp7;
      cResult[8] = tmp8;
      cResult[9] = tmp13;
      tmp9 = tmp13;
    }
    const fn = function l() {
      const obj = StageChannelActionCreatorExtras;
      return obj.openStageSettingsSheet(channelId, onOpenRTCDebugOverlay);
    };
    cResult[4] = channelId;
    cResult[5] = onOpenRTCDebugOverlay;
    cResult[6] = fn;
    tmp8 = fn;
  }
  const items = [, ];
  ({ iconBackground: arr[0], settingsButton: arr[1] } = tmp4);
  cResult[1] = tmp4.iconBackground;
  cResult[2] = tmp4.settingsButton;
  cResult[3] = items;
  tmp7 = items;
}) : ((arg0) => {
  let intl;
  let items;
  let require;
  ({ channelId: require, onOpenRTCDebugOverlay: importDefault } = arg0);
  let obj = {
    accessibilityLabel: intl.string(intl2.t["lIx5+G"]),
    containerStyle: items,
    source: AssetRegistryDefault5,
    onPress() {
      const obj = StageChannelActionCreatorExtras;
      return obj.openStageSettingsSheet(_require, importDefault);
    },
    disableBackground: true
  };
  const tmp = closure_14();
  const tmp2 = ChannelCallNavigatorIconDefault;
  intl = intl2.intl;
  items = [, ];
  ({ iconBackground: arr[0], settingsButton: arr[1] } = tmp);
  return closure_12(tmp2, obj);
});
let closure_17 = tmp9;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp10 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let first;
  let stateFromStores1;
  let tmp10;
  let tmp14;
  let tmp16;
  let tmp7;
  let tmp8;
  const tmp = channelId;
  let obj = channelId(stateFromStores1[20]);
  const cResult = obj.c(17);
  channelId = channelId.channelId;
  const tmp4 = closure_14();
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
    const items1 = [channelId];
    cResult[1] = channelId;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = tmp(stateFromStores1[21]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [GuildStore];
    cResult[4] = items2;
    tmp10 = items2;
  } else {
    tmp10 = cResult[4];
  }
  let guild_id;
  const tmp12 = cResult[5];
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  if (tmp12 !== guild_id) {
    let guild_id1;
    if (stateFromStores != null) {
      guild_id1 = stateFromStores.guild_id;
    }
    const fn2 = function p() {
      let guild_id;
      const getGuild = GuildStore.getGuild;
      if (stateFromStores != null) {
        guild_id = stateFromStores.guild_id;
      }
      if (guild_id == null) {
        guild_id = null;
      }
      return getGuild(guild_id);
    };
    cResult[5] = guild_id1;
    cResult[6] = fn2;
    tmp14 = fn2;
  } else {
    tmp14 = cResult[6];
  }
  if (cResult[7] !== stateFromStores) {
    const items3 = [stateFromStores];
    cResult[7] = stateFromStores;
    cResult[8] = items3;
    tmp16 = items3;
  } else {
    tmp16 = cResult[8];
  }
  const tmpResult3 = tmp(stateFromStores1[21]);
  stateFromStores1 = tmpResult3.useStateFromStores(tmp10, tmp14, tmp16);
  const tmpResult4 = tmp(stateFromStores1[37]);
  const activeEvent = tmpResult4.useActiveEvent(channelId);
  let tmp19 = null;
  if (null != stateFromStores) {
    tmp19 = null;
    if (null != stateFromStores1) {
      let tmp20;
      const _Symbol = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(tmp2[23]).intl;
        const stringResult = intl.string(tmp(stateFromStores1[23]).t.VINpSK);
        cResult[9] = stringResult;
        tmp20 = stringResult;
      } else {
        tmp20 = cResult[9];
      }
      if (cResult[10] === stateFromStores) {
        let id;
        const tmp22 = cResult[11];
        if (activeEvent != null) {
          id = activeEvent.id;
        }
        if (tmp22 === id) {
          let tmp24;
          if (cResult[12] === stateFromStores1) {
            tmp24 = cResult[13];
          }
          if (cResult[14] === tmp4.iconBackground) {
            let tmp26;
            if (cResult[15] === tmp24) {
              tmp26 = cResult[16];
            }
            tmp19 = tmp26;
          }
          let obj2 = { accessibilityLabel: tmp20, containerStyle: tmp4.iconBackground, source: stateFromStores(stateFromStores1[39]), IconComponent: tmp(stateFromStores1[40]).GroupPlusIcon, onPress: tmp24, disableBackground: true };
          const tmp29 = stateFromStores(stateFromStores1[25]);
          const tmp30 = closure_12(tmp29, obj2);
          cResult[14] = tmp4.iconBackground;
          cResult[15] = tmp24;
          cResult[16] = tmp30;
          tmp26 = tmp30;
        }
      }
      cResult[10] = stateFromStores;
      let id1;
      if (activeEvent != null) {
        id1 = activeEvent.id;
      }
      const fn3 = function x() {
        let id;
        if (null != stateFromStores1.vanityURLCode) {
          const obj2 = instant_invite_InstantInviteUtils;
          const result = obj2.showVanityUrlInviteActionSheet(tmp, stateFromStores, unpackModuleId.STAGE_CHANNEL);
        } else {
          const obj = { source: unpackModuleId.STAGE_CHANNEL, guildScheduledEventId: id };
          id = undefined;
          const showInstantInviteActionSheet = instant_invite_InstantInviteUtils.showInstantInviteActionSheet;
          instant_invite_InstantInviteUtils;
          if (activeEvent != null) {
            id = activeEvent.id;
          }
          const result1 = showInstantInviteActionSheet(stateFromStores, obj);
        }
      };
      cResult[11] = id1;
      cResult[12] = stateFromStores1;
      cResult[13] = fn3;
      tmp24 = fn3;
    }
  }
  return tmp19;
}) : ((channelId) => {
  let intl;
  channelId = channelId.channelId;
  let stateFromStores1;
  const tmp = closure_14();
  let obj = channelId(stateFromStores1[21]);
  const items = [ChannelStore];
  const items1 = [channelId];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  let obj2 = channelId(stateFromStores1[21]);
  const items2 = [GuildStore];
  const items3 = [stateFromStores];
  stateFromStores1 = obj2.useStateFromStores(items2, () => {
    let guild_id;
    const getGuild = GuildStore.getGuild;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    if (guild_id == null) {
      guild_id = null;
    }
    return getGuild(guild_id);
  }, items3);
  const obj3 = channelId(stateFromStores1[37]);
  let id = obj3.useActiveEvent(channelId);
  let tmp6 = null;
  if (null != stateFromStores) {
    tmp6 = null;
    if (null != stateFromStores1) {
      const obj4 = {
        accessibilityLabel: intl.string(channelId(stateFromStores1[23]).t.VINpSK),
        containerStyle: tmp.iconBackground,
        source: stateFromStores(stateFromStores1[39]),
        IconComponent: channelId(stateFromStores1[40]).GroupPlusIcon,
        onPress() {
              if (null != stateFromStores1.vanityURLCode) {
                const obj2 = instant_invite_InstantInviteUtils;
                const result = obj2.showVanityUrlInviteActionSheet(tmp, stateFromStores, unpackModuleId.STAGE_CHANNEL);
              } else {
                const obj = { source: unpackModuleId.STAGE_CHANNEL, guildScheduledEventId: id };
                id = undefined;
                const showInstantInviteActionSheet = instant_invite_InstantInviteUtils.showInstantInviteActionSheet;
                instant_invite_InstantInviteUtils;
                if (id != null) {
                  id = id.id;
                }
                const result1 = showInstantInviteActionSheet(stateFromStores, obj);
              }
            },
        disableBackground: true
      };
      const tmp9 = stateFromStores(stateFromStores1[25]);
      intl = tmp2(tmp3[23]).intl;
      tmp6 = closure_12(tmp9, obj4);
    }
  }
  return tmp6;
});
let closure_18 = tmp10;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp11 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let muted;
  let stateFromStores;
  let tmp5;
  let tmp6;
  let obj = stateFromStores(576);
  const cResult = obj.c(11);
  channelId = channelId.channelId;
  const tmp4 = closure_14();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [StageMusicStore];
    const fn = function o() {
      return muted.isMuted();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = stateFromStores(504);
  stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  const tmpResult2 = stateFromStores(9561);
  if (tmpResult2.useShowStageMusicMuteButton(channelId)) {
    let tmp10;
    let tmp14;
    if (cResult[2] !== stateFromStores) {
      let stringResult;
      const intl = tmp(1126).intl;
      const string = intl.string;
      const t = tmp(1126).t;
      if (stateFromStores) {
        stringResult = string(t.ScHlfl);
      } else {
        stringResult = string(t.zqxfrf);
      }
      cResult[2] = stateFromStores;
      cResult[3] = stringResult;
      tmp10 = stringResult;
    } else {
      tmp10 = cResult[3];
    }
    const tmp12Result = importDefault(stateFromStores ? 9567 : 9568);
    if (cResult[4] !== stateFromStores) {
      const fn2 = function y() {
        const obj = StageMusicActionCreators;
        return obj.updateStageMusicMuted(!stateFromStores);
      };
      cResult[4] = stateFromStores;
      cResult[5] = fn2;
      tmp14 = fn2;
    } else {
      tmp14 = cResult[5];
    }
    if (cResult[6] === tmp4.iconBackground) {
      if (cResult[7] === tmp10) {
        if (cResult[8] === tmp12Result) {
          let tmp15;
          if (cResult[9] === tmp14) {
            tmp15 = cResult[10];
          }
          return tmp15;
        }
      }
    }
    const obj2 = { accessibilityLabel: tmp10, containerStyle: tmp4.iconBackground, source: tmp12Result, onPress: tmp14, disableBackground: true };
    const tmp17 = closure_12(ChannelCallNavigatorIconDefault, obj2);
    cResult[6] = tmp4.iconBackground;
    cResult[7] = tmp10;
    cResult[8] = tmp12Result;
    cResult[9] = tmp14;
    cResult[10] = tmp17;
    tmp15 = tmp17;
  } else {
    return null;
  }
}) : ((channelId) => {
  let muted;
  let stateFromStores;
  channelId = channelId.channelId;
  const tmp = closure_14();
  let obj = stateFromStores(504);
  const items = [StageMusicStore];
  stateFromStores = obj.useStateFromStores(items, () => muted.isMuted());
  let tmp6Result = null;
  const obj2 = stateFromStores(9561);
  if (obj2.useShowStageMusicMuteButton(channelId)) {
    let stringResult;
    const tmp8 = ChannelCallNavigatorIconDefault;
    const intl = tmp2(1126).intl;
    const string = intl.string;
    const t = tmp2(1126).t;
    if (stateFromStores) {
      stringResult = string(t.ScHlfl);
    } else {
      stringResult = string(t.zqxfrf);
    }
    const obj3 = {
      accessibilityLabel: stringResult,
      containerStyle: tmp.iconBackground,
      source: importDefault(stateFromStores ? 9567 : 9568),
      onPress() {
          const obj = StageMusicActionCreators;
          return obj.updateStageMusicMuted(!stateFromStores);
        },
      disableBackground: true
    };
    tmp6Result = closure_12(tmp8, obj3);
  }
  return tmp6Result;
});
let closure_19 = tmp11;
const memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
function closeStageModal(id) {
  const track = AnalyticsUtilsDefault.track;
  const VIDEO_LAYOUT_TOGGLED = constants.VIDEO_LAYOUT_TOGGLED;
  const obj = { video_layout: "pop out" };
  AnalyticsUtilsDefault;
  const obj2 = AppAnalyticsUtils;
  const merged = Object.assign(obj2.collectVoiceAnalyticsMetadata(id.id));
  track(VIDEO_LAYOUT_TOGGLED, obj);
  const obj3 = StatusBarDefault;
  obj3.setHidden(false);
  const popWithKey = ModalActionCreatorsDefault.popWithKey;
  ModalActionCreatorsDefault;
  const obj4 = PrivateChannelCallUtils;
  popWithKey(obj4.getVoiceChannelKey(id.id));
}
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let channel;
  let fullscreenStream;
  let items;
  let onOpenRTCDebugOverlay;
  let speaker;
  const obj = react2;
  const cResult = obj.c(25);
  ({ channel, fullscreenStream, onOpenRTCDebugOverlay } = arg0);
  const tmp4 = closure_14();
  const tmp5 = useMyCurrentStageChannelRoleDefault(channel.id);
  if (tmp5 != null) {
    speaker = tmp5.speaker;
  }
  if (cResult[0] === channel) {
    let tmp6;
    let tmp8;
    if (cResult[1] === fullscreenStream) {
      tmp6 = cResult[2];
    }
    if (cResult[3] !== channel) {
      const obj2 = { channel };
      const tmp11 = closure_12(closure_16, obj2);
      cResult[3] = channel;
      cResult[4] = tmp11;
      tmp8 = tmp11;
    } else {
      tmp8 = cResult[4];
    }
    if (cResult[5] === channel.id) {
      let tmp12;
      if (cResult[6] === speaker) {
        tmp12 = cResult[7];
      }
      if (cResult[8] === channel) {
        let tmp16;
        let tmp20;
        let tmp23;
        if (cResult[9] === fullscreenStream) {
          tmp16 = cResult[10];
        }
        const _Symbol = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp22 = closure_12(ChannelCallHeaderButtons.CameraButton, {});
          cResult[11] = tmp22;
          tmp20 = tmp22;
        } else {
          tmp20 = cResult[11];
        }
        if (cResult[12] !== channel.id) {
          const obj3 = { channelId: channel.id };
          const tmp26 = closure_12(closure_18, obj3);
          cResult[12] = channel.id;
          cResult[13] = tmp26;
          tmp23 = tmp26;
        } else {
          tmp23 = cResult[13];
        }
        if (cResult[14] === channel.id) {
          let tmp27;
          if (cResult[15] === onOpenRTCDebugOverlay) {
            tmp27 = cResult[16];
          }
          if (cResult[17] === tmp4.header) {
            if (cResult[18] === tmp6) {
              if (cResult[19] === tmp8) {
                if (cResult[20] === tmp12) {
                  if (cResult[21] === tmp16) {
                    if (cResult[22] === tmp23) {
                      let tmp31;
                      if (cResult[23] === tmp27) {
                        tmp31 = cResult[24];
                      }
                      return tmp31;
                    }
                  }
                }
              }
            }
          }
          const obj4 = { style: tmp4.header, pointerEvents: "box-none", children: items };
          items = [tmp6, tmp8, tmp12, tmp16, tmp20, tmp23, tmp27];
          const tmp34 = map1(View, obj4);
          cResult[17] = tmp4.header;
          cResult[18] = tmp6;
          cResult[19] = tmp8;
          cResult[20] = tmp12;
          cResult[21] = tmp16;
          cResult[22] = tmp23;
          cResult[23] = tmp27;
          cResult[24] = tmp34;
          tmp31 = tmp34;
        }
        const obj5 = { channelId: channel.id, onOpenRTCDebugOverlay };
        const tmp30 = closure_12(closure_17, obj5);
        cResult[14] = channel.id;
        cResult[15] = onOpenRTCDebugOverlay;
        cResult[16] = tmp30;
        tmp27 = tmp30;
      }
      let tmp17 = fullscreenStream;
      if (tmp17) {
        const obj6 = { channel };
        tmp17 = closure_12(ChannelCallHeaderButtons.GridButton, obj6);
      }
      cResult[8] = channel;
      cResult[9] = fullscreenStream;
      cResult[10] = tmp17;
      tmp16 = tmp17;
    }
    let tmp13 = speaker;
    if (tmp13) {
      const obj7 = { channelId: channel.id };
      tmp13 = closure_12(closure_19, obj7);
    }
    cResult[5] = channel.id;
    cResult[6] = speaker;
    cResult[7] = tmp13;
    tmp12 = tmp13;
  }
  const tmp7 = closure_12(closure_15, { channel, fullscreenStream });
  cResult[0] = channel;
  cResult[1] = fullscreenStream;
  cResult[2] = tmp7;
  tmp6 = tmp7;
}) : ((onOpenRTCDebugOverlay) => {
  let channel;
  let fullscreenStream;
  let items;
  ({ channel, fullscreenStream } = onOpenRTCDebugOverlay);
  onOpenRTCDebugOverlay = onOpenRTCDebugOverlay.onOpenRTCDebugOverlay;
  const tmp = closure_14();
  const tmp3 = useMyCurrentStageChannelRoleDefault(channel.id);
  let speaker;
  if (tmp3 != null) {
    speaker = tmp3.speaker;
  }
  const obj = { style: tmp.header, pointerEvents: "box-none", children: items };
  items = [closure_12(closure_15, { channel, fullscreenStream }), closure_12(closure_16, { channel }), , , , , ];
  if (speaker) {
    const obj2 = { channelId: channel.id };
    speaker = closure_12(closure_19, obj2);
  }
  items[2] = speaker;
  if (fullscreenStream) {
    const obj3 = { channel };
    fullscreenStream = closure_12(ChannelCallHeaderButtons.GridButton, obj3);
  }
  items[3] = fullscreenStream;
  items[4] = closure_12(ChannelCallHeaderButtons.CameraButton, {});
  const obj4 = { channelId: channel.id };
  items[5] = closure_12(closure_18, obj4);
  const obj5 = { channelId: channel.id, onOpenRTCDebugOverlay };
  items[6] = closure_12(closure_17, obj5);
  return map1(View, obj);
}));
let result = size.fileFinishedImporting("modules/stage_channels/native/components/StageActionHeader.tsx");

export default memoResult;
export { closeStageModal };
export const HideStageChannelCallIcon = tmp6;
export const StageChannelCallHeader = tmp7;
export const HideChannelCallButton = tmp8;
export const StageSettingsButton = tmp9;
export const StageInviteButton = tmp10;
export const MusicMuteButton = tmp11;