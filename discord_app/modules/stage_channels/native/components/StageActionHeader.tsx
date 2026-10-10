// discord_app/modules/stage_channels/native/components/StageActionHeader.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import ChannelRTCActionCreatorsDefault from "../../../../actions/ChannelRTCActionCreators.tsx";
import AppAnalyticsUtils from "../../../app_analytics/AppAnalyticsUtils.tsx";
import LinearGradientDefault from "../../../../../_runtime/05391_LinearGradient.js";
import useChannelNameDefault from "../../../channel/useChannelName.tsx";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import PrivateChannelCallUtils from "../../../../utils/native/PrivateChannelCallUtils.tsx";
import StageChannelActionCreatorExtras from "../../StageChannelActionCreatorExtras.native.tsx";
import _modDef7718 from "../../../../../_runtime/metro/07718__.js";
import _modDef8560 from "../../../../../_runtime/metro/08560__.js";
import instant_invite_InstantInviteUtils from "../../../instant_invite/native/InstantInviteUtils.tsx";
import StatusBarDefault from "../../../status_bar/native/components/StatusBar.android.tsx";
import StageMusicActionCreators from "../../StageMusicActionCreators.tsx";
import ChannelCallNavigatorIconDefault from "../../../video_calls/native/components/ChannelCallNavigatorIcon.tsx";
import _modDef11145 from "../../../../../_runtime/metro/11145__.js";
import _modDef11146 from "../../../../../_runtime/metro/11146__.js";
import _modDef11147 from "../../../../../_runtime/metro/11147__.js";
import useMyCurrentStageChannelRoleDefault from "../../useMyCurrentStageChannelRole.tsx";
import ChannelCallHeaderButtons from "../../../video_calls/native/components/ChannelCallHeaderButtons.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelRTCStore from "../../../calls/ChannelRTCStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import GuildReadStateStore from "../../../../stores/GuildReadStateStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import StageInstanceStore from "../../StageInstanceStore.tsx";
import StageMusicStore from "../../StageMusicStore.tsx";

require = fn;
const View = fn(17).View;
const Constants = fn(1085);
({ AnalyticEvents: c10, InstantInviteSources: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(5092);
let obj = {
  header: {
    height: fn(6258).NAV_BAR_HEIGHT,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    overflow: "visible",
  },
  leftTitleContainer: { marginLeft: 12, flex: 1 },
  titleWrapper: { position: "relative", flex: 1, justifyContent: "center" },
  linearGradient: { position: "absolute", zIndex: 1, left: 0, right: 0, top: 0, bottom: 0 },
  iconBackground: null,
  iconContainer: null,
  settingsButton: null,
  stageInfo: null,
  stageInfoTopic: null,
  icon: null,
};
let obj4 = { backgroundColor: null };
let ColorUtils = fn(4967);
obj4.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.WHITE, 0.1);
obj.iconBackground = obj4;
let obj5 = { backgroundColor: null };
ColorUtils = fn(4967);
obj5.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.WHITE, 0.1);
obj.iconContainer = obj5;
obj.settingsButton = { marginRight: 4 };
let obj3 = {
  height: fn(6258).NAV_BAR_HEIGHT,
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: 12,
  overflow: "visible",
};
obj.stageInfo = { flex: 1, flexDirection: "row", alignItems: "center", color: nativeDefault.colors.TEXT_SUBTLE };
obj.stageInfoTopic = { marginLeft: 4 };
let obj7 = { flex: 1, flexDirection: "row", alignItems: "center", color: nativeDefault.colors.TEXT_SUBTLE };
obj.icon = { marginLeft: 8, marginRight: 4, tintColor: nativeDefault.colors.TEXT_SUBTLE };
let closure_14 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function HideStageChannelCallIcon(channel) {
      const cResult = channel(576).c(12);
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
      let obj = channel(576);
      const stateFromStores = channel(504).useStateFromStores(tmp5, tmp6);
      if (cResult[2] !== channel) {
        function handleClose() {
          const obj = AnalyticsUtilsDefault;
          const obj2 = { video_layout: "pop out" };
          const merged = Object.assign(AppAnalyticsUtils.collectVoiceAnalyticsMetadata(channel.id));
          obj.track(constants.VIDEO_LAYOUT_TOGGLED, obj2);
          StatusBarDefault.setHidden(false);
          const obj5 = ModalActionCreatorsDefault;
          obj5.popWithKey(PrivateChannelCallUtils.getVoiceChannelKey(channel.id));
          const participant = ChannelRTCActionCreatorsDefault.selectParticipant(channel.id, null);
        }
        cResult[2] = channel;
        cResult[3] = handleClose;
        let tmp9 = handleClose;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(tmp(1126).t.cpT0Cq);
        cResult[4] = stringResult;
        let tmp10 = stringResult;
      } else {
        tmp10 = cResult[4];
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        let obj2 = {};
        cResult[5] = obj2;
        let tmp12 = obj2;
      } else {
        tmp12 = cResult[5];
      }
      if (cResult[6] !== stateFromStores) {
        let obj3 = { value: stateFromStores, maskStyle: tmp12 };
        const tmp15 = closure_12(tmp(1200).MaskedBadge, obj3);
        cResult[6] = stateFromStores;
        cResult[7] = tmp15;
        let tmp13 = tmp15;
      } else {
        tmp13 = cResult[7];
      }
      if (cResult[8] === tmp9) {
        if (cResult[9] === tmp4.iconContainer) {
          if (cResult[10] === tmp13) {
            let tmp16 = cResult[11];
          }
          return tmp16;
        }
      }
      let obj4 = {
        source: null,
        accessibilityLabel: null,
        onPress: null,
        containerStyle: null,
        disableBackground: true,
        children: null,
      };
      const tmpResult = channel(504);
      obj4.source = _modDef11145;
      obj4.accessibilityLabel = tmp10;
      obj4.onPress = tmp9;
      obj4.containerStyle = tmp4.iconContainer;
      obj4.children = tmp13;
      const tmp18 = closure_12(ChannelCallNavigatorIconDefault, obj4);
      cResult[8] = tmp9;
      cResult[9] = tmp4.iconContainer;
      cResult[10] = tmp13;
      cResult[11] = tmp18;
      tmp16 = tmp18;
    }
  : function HideStageChannelCallIcon(channel) {
      channel = channel.channel;
      const tmp = closure_14();
      const items = [GuildReadStateStore];
      const stateFromStores = channel(504).useStateFromStores(items, () => totalMentionCount.getTotalMentionCount());
      let obj2 = {
        source: null,
        accessibilityLabel: null,
        onPress: null,
        containerStyle: null,
        disableBackground: true,
        children: null,
      };
      let obj = channel(504);
      obj2.source = _modDef11145;
      const intl = channel(1126).intl;
      obj2.accessibilityLabel = intl.string(channel(1126).t.cpT0Cq);
      obj2.onPress = function handleClose() {
        const obj = AnalyticsUtilsDefault;
        const obj2 = { video_layout: "pop out" };
        const merged = Object.assign(AppAnalyticsUtils.collectVoiceAnalyticsMetadata(channel.id));
        obj.track(constants.VIDEO_LAYOUT_TOGGLED, obj2);
        StatusBarDefault.setHidden(false);
        const obj5 = ModalActionCreatorsDefault;
        obj5.popWithKey(PrivateChannelCallUtils.getVoiceChannelKey(channel.id));
        const participant = ChannelRTCActionCreatorsDefault.selectParticipant(channel.id, null);
      };
      obj2.containerStyle = tmp.iconContainer;
      obj2.children = closure_12(channel(1200).MaskedBadge, { value: stateFromStores, maskStyle: {} });
      return closure_12(ChannelCallNavigatorIconDefault, obj2);
    };
let closure_15 = tmp4;
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? function StageChannelCallHeader(channel) {
      const cResult = channel(576).c(28);
      channel = channel.channel;
      const tmp4 = closure_14();
      const tmp6 = useChannelNameDefault(channel);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [StageInstanceStore];
        cResult[0] = items;
        let first = items;
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
        let tmp10 = items1;
        let tmp9 = fn;
      } else {
        tmp9 = cResult[2];
        tmp10 = cResult[3];
      }
      const obj = channel(576);
      const stateFromStores = channel(504).useStateFromStores(first, tmp9, tmp10);
      const tmpResult = channel(504);
      const stageParticipantsCount = channel(5956).useStageParticipantsCount(
        channel.id,
        tmp(5950).StageChannelParticipantNamedIndex.AUDIENCE,
      );
      const tmpResult4 = channel(5956);
      const actualStageSpeakerCount = channel(5956).useActualStageSpeakerCount(channel.id);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [ChannelRTCStore];
        cResult[4] = items2;
        let tmp14 = items2;
      } else {
        tmp14 = cResult[4];
      }
      if (cResult[5] !== channel.id) {
        const fn2 = function b() {
          return ChannelRTCStore.getSelectedParticipant(channel.id);
        };
        cResult[5] = channel.id;
        cResult[6] = fn2;
        let tmp16 = fn2;
      } else {
        tmp16 = cResult[6];
      }
      const tmpResult5 = channel(5956);
      const stateFromStores1 = channel(504).useStateFromStores(tmp14, tmp16);
      if (cResult[7] === stateFromStores1) {
        if (cResult[8] === tmp4.linearGradient) {
          let tmp18 = cResult[9];
        }
        let topic;
        if (stateFromStores != null) {
          topic = stateFromStores.topic;
        }
        if (topic == null) {
          topic = tmp6;
        }
        if (cResult[10] !== topic) {
          const obj2 = { color: "text-overlay-light", variant: "text-md/semibold", children: topic };
          const tmp25 = closure_12(tmp(5088).Text, obj2);
          cResult[10] = topic;
          cResult[11] = tmp25;
          let tmp23 = tmp25;
        } else {
          tmp23 = cResult[11];
        }
        if (cResult[12] === tmp4.titleWrapper) {
          if (cResult[13] === tmp18) {
            if (cResult[14] === tmp23) {
              let tmp26 = cResult[15];
            }
            if (cResult[16] === stageParticipantsCount) {
              if (cResult[17] === tmp6) {
                if (cResult[18] === actualStageSpeakerCount) {
                  if (cResult[19] === stateFromStores) {
                    if (cResult[20] === tmp4.icon) {
                      if (cResult[21] === tmp4.stageInfo) {
                        if (cResult[22] === tmp4.stageInfoTopic) {
                          let tmp30 = cResult[23];
                        }
                        if (cResult[24] === tmp4.leftTitleContainer) {
                          if (cResult[25] === tmp30) {
                            if (cResult[26] === tmp26) {
                              let tmp35 = cResult[27];
                            }
                            return tmp35;
                          }
                        }
                        const obj3 = { pointerEvents: "none", style: tmp4.leftTitleContainer, children: null };
                        const items3 = [tmp26, tmp30];
                        obj3.children = items3;
                        const tmp38 = closure_13(View, obj3);
                        cResult[24] = tmp4.leftTitleContainer;
                        cResult[25] = tmp30;
                        cResult[26] = tmp26;
                        cResult[27] = tmp38;
                        tmp35 = tmp38;
                      }
                    }
                  }
                }
              }
            }
            let tmp31 = null != stateFromStores;
            if (tmp31) {
              const obj4 = { style: tmp4.stageInfo, children: null };
              const obj5 = { source: _modDef8560, size: tmp(1200).Icon.Sizes.SMALL, disableColor: true };
              const items4 = [closure_12(tmp(1200).Icon, obj5), , , , ,];
              const obj6 = { variant: "text-xs/normal", style: tmp4.stageInfoTopic, children: tmp6 };
              items4[1] = closure_12(tmp(5088).Text, obj6);
              const obj7 = { source: _modDef7718, size: tmp(1200).Icon.Sizes.SMALL, style: tmp4.icon };
              items4[2] = closure_12(tmp(1200).Icon, obj7);
              const obj8 = { variant: "text-xs/normal", children: actualStageSpeakerCount };
              items4[3] = closure_12(tmp(5088).Text, obj8);
              const obj9 = { source: _modDef11146, size: tmp(1200).Icon.Sizes.SMALL, style: tmp4.icon };
              items4[4] = closure_12(tmp(1200).Icon, obj9);
              const obj10 = { variant: "text-xs/normal", children: stageParticipantsCount };
              items4[5] = closure_12(tmp(5088).Text, obj10);
              obj4.children = items4;
              tmp31 = closure_13(View, obj4);
            }
            cResult[16] = stageParticipantsCount;
            cResult[17] = tmp6;
            cResult[18] = actualStageSpeakerCount;
            cResult[19] = stateFromStores;
            cResult[20] = tmp4.icon;
            cResult[21] = tmp4.stageInfo;
            cResult[22] = tmp4.stageInfoTopic;
            cResult[23] = tmp31;
            tmp30 = tmp31;
          }
        }
        const obj11 = { style: tmp4.titleWrapper, children: null };
        const items5 = [tmp18, tmp23];
        obj11.children = items5;
        const tmp29 = closure_13(View, obj11);
        cResult[12] = tmp4.titleWrapper;
        cResult[13] = tmp18;
        cResult[14] = tmp23;
        cResult[15] = tmp29;
        tmp26 = tmp29;
      }
      let tmp19 = null == stateFromStores1;
      if (tmp19) {
        const obj12 = {
          style: tmp4.linearGradient,
          colors: ["#00000000", "#000000"],
          start: { x: 0.85, y: 0 },
          end: { x: 1, y: 0 },
        };
        tmp19 = closure_12(LinearGradientDefault, obj12);
      }
      cResult[7] = stateFromStores1;
      cResult[8] = tmp4.linearGradient;
      cResult[9] = tmp19;
      tmp18 = tmp19;
      const tmpResult6 = channel(504);
    }
  : function StageChannelCallHeader(channel) {
      channel = channel.channel;
      const tmp = closure_14();
      const tmp4 = useChannelNameDefault(channel);
      const items = [StageInstanceStore];
      const items1 = [channel.id];
      const stateFromStores = channel(504).useStateFromStores(
        items,
        () => StageInstanceStore.getStageInstanceByChannel(channel.id),
        items1,
      );
      const obj = channel(504);
      const stageParticipantsCount = channel(5956).useStageParticipantsCount(
        channel.id,
        channel(5950).StageChannelParticipantNamedIndex.AUDIENCE,
      );
      const obj2 = channel(5956);
      const actualStageSpeakerCount = channel(5956).useActualStageSpeakerCount(channel.id);
      const obj3 = channel(5956);
      const items2 = [ChannelRTCStore];
      const obj5 = { pointerEvents: "none", style: tmp.leftTitleContainer, children: null };
      const obj6 = { style: tmp.titleWrapper, children: null };
      let tmp11 =
        null == channel(504).useStateFromStores(items2, () => ChannelRTCStore.getSelectedParticipant(channel.id));
      if (tmp11) {
        const obj7 = {
          style: tmp.linearGradient,
          colors: ["#00000000", "#000000"],
          start: { x: 0.85, y: 0 },
          end: { x: 1, y: 0 },
        };
        tmp11 = closure_12(LinearGradientDefault, obj7);
      }
      const items3 = [tmp11];
      let topic;
      if (stateFromStores != null) {
        topic = stateFromStores.topic;
      }
      if (topic == null) {
        topic = tmp4;
      }
      items3[1] = closure_12(channel(5088).Text, {
        color: "text-overlay-light",
        variant: "text-md/semibold",
        children: topic,
      });
      obj6.children = items3;
      const items4 = [closure_13(View, obj6)];
      let tmp9Result = null != stateFromStores;
      if (tmp9Result) {
        const obj8 = { style: tmp.stageInfo, children: null };
        const obj9 = { source: _modDef8560, size: tmp5(1200).Icon.Sizes.SMALL, disableColor: true };
        const items5 = [closure_12(tmp5(1200).Icon, obj9), , , , ,];
        const obj10 = { variant: "text-xs/normal", style: tmp.stageInfoTopic, children: tmp4 };
        items5[1] = closure_12(tmp5(5088).Text, obj10);
        const obj11 = { source: _modDef7718, size: tmp5(1200).Icon.Sizes.SMALL, style: tmp.icon };
        items5[2] = closure_12(tmp5(1200).Icon, obj11);
        const obj12 = { variant: "text-xs/normal", children: actualStageSpeakerCount };
        items5[3] = closure_12(tmp5(5088).Text, obj12);
        const obj13 = { source: _modDef11146, size: tmp5(1200).Icon.Sizes.SMALL, style: tmp.icon };
        items5[4] = closure_12(tmp5(1200).Icon, obj13);
        const obj14 = { variant: "text-xs/normal", children: stageParticipantsCount };
        items5[5] = closure_12(tmp5(5088).Text, obj14);
        obj8.children = items5;
        tmp9Result = closure_13(View, obj8);
      }
      items4[1] = tmp9Result;
      obj5.children = items4;
      return closure_13(View, obj5);
    };
let closure_16 = tmp5;
fn(558);
let obj9 = { marginLeft: 8, marginRight: 4, tintColor: nativeDefault.colors.TEXT_SUBTLE };
ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? function StageSettingsButton(channelId) {
      const cResult = channelId(576).c(10);
      channelId = channelId.channelId;
      const onOpenRTCDebugOverlay = channelId.onOpenRTCDebugOverlay;
      const tmp4 = closure_14();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(tmp(1126).t["lIx5+G"]);
        cResult[0] = stringResult;
        let first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === tmp4.iconBackground) {
        if (cResult[2] === tmp4.settingsButton) {
          let tmp7 = cResult[3];
        }
        if (cResult[4] === channelId) {
          if (cResult[5] === onOpenRTCDebugOverlay) {
            let tmp8 = cResult[6];
          }
          if (cResult[7] === tmp7) {
            if (cResult[8] === tmp8) {
              let tmp9 = cResult[9];
            }
            return tmp9;
          }
          const obj2 = {
            accessibilityLabel: first,
            containerStyle: tmp7,
            source: onOpenRTCDebugOverlay(11147),
            onPress: tmp8,
            disableBackground: true,
          };
          const tmp13 = closure_12(onOpenRTCDebugOverlay(11003), obj2);
          cResult[7] = tmp7;
          cResult[8] = tmp8;
          cResult[9] = tmp13;
          tmp9 = tmp13;
          const tmp12 = onOpenRTCDebugOverlay(11003);
        }
        const fn = function l() {
          return StageChannelActionCreatorExtras.openStageSettingsSheet(channelId, onOpenRTCDebugOverlay);
        };
        cResult[4] = channelId;
        cResult[5] = onOpenRTCDebugOverlay;
        cResult[6] = fn;
        tmp8 = fn;
      }
      const items = [,];
      ({ iconBackground: arr[0], settingsButton: arr[1] } = tmp4);
      cResult[1] = tmp4.iconBackground;
      cResult[2] = tmp4.settingsButton;
      cResult[3] = items;
      tmp7 = items;
      const obj = channelId(576);
    }
  : function StageSettingsButton(arg0) {
      ({ channelId: require, onOpenRTCDebugOverlay: importDefault } = arg0);
      const obj = {
        accessibilityLabel: null,
        containerStyle: null,
        source: null,
        onPress: null,
        disableBackground: true,
      };
      const tmp = closure_14();
      const intl = util.intl;
      obj.accessibilityLabel = intl.string(util.t["lIx5+G"]);
      const items = [,];
      ({ iconBackground: arr[0], settingsButton: arr[1] } = tmp);
      obj.containerStyle = items;
      obj.source = _modDef11147;
      obj.onPress = function onPress() {
        return StageChannelActionCreatorExtras.openStageSettingsSheet(_require, importDefault);
      };
      return closure_12(ChannelCallNavigatorIconDefault, obj);
    };
let closure_17 = tmp7;
ReactCompilerGating = fn(558);
let tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? function StageInviteButton(channelId) {
      let GroupPlusIcon = stateFromStores1;
      const cResult = channelId(stateFromStores1[20]).c(17);
      channelId = channelId.channelId;
      let iconBackground = closure_14();
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
        const items1 = [channelId];
        cResult[1] = channelId;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp6 = items1;
        let tmp5 = fn;
      } else {
        tmp5 = cResult[2];
        tmp6 = cResult[3];
      }
      let obj = channelId(stateFromStores1[20]);
      const stateFromStores = channelId(GroupPlusIcon[21]).useStateFromStores(first, tmp5, tmp6);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [GuildStore];
        cResult[4] = items2;
        let tmp8 = items2;
      } else {
        tmp8 = cResult[4];
      }
      let guild_id;
      if (stateFromStores != null) {
        guild_id = stateFromStores.guild_id;
      }
      if (cResult[5] !== guild_id) {
        let guild_id1;
        if (stateFromStores != null) {
          guild_id1 = stateFromStores.guild_id;
        }
        const fn2 = function f() {
          let guild_id;
          if (stateFromStores != null) {
            guild_id = stateFromStores.guild_id;
          }
          if (guild_id == null) {
            guild_id = null;
          }
          return GuildStore.getGuild(guild_id);
        };
        cResult[5] = guild_id1;
        cResult[6] = fn2;
        let tmp11 = fn2;
      } else {
        tmp11 = cResult[6];
      }
      if (cResult[7] !== stateFromStores) {
        const items3 = [stateFromStores];
        cResult[7] = stateFromStores;
        cResult[8] = items3;
        let tmp13 = items3;
      } else {
        tmp13 = cResult[8];
      }
      const tmpResult = channelId(GroupPlusIcon[21]);
      stateFromStores1 = channelId(GroupPlusIcon[21]).useStateFromStores(tmp8, tmp11, tmp13);
      const tmpResult3 = channelId(GroupPlusIcon[21]);
      const activeEvent = channelId(GroupPlusIcon[37]).useActiveEvent(channelId);
      let tmp16 = null;
      if (null != stateFromStores) {
        tmp16 = null;
        if (null != stateFromStores1) {
          const _Symbol = Symbol;
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(GroupPlusIcon[23]).intl;
            const stringResult = intl.string(tmp(GroupPlusIcon[23]).t.VINpSK);
            cResult[9] = stringResult;
            let tmp17 = stringResult;
          } else {
            tmp17 = cResult[9];
          }
          if (cResult[10] === stateFromStores) {
            let id;
            if (activeEvent != null) {
              id = activeEvent.id;
            }
            if (cResult[11] === id) {
              if (cResult[12] === stateFromStores1) {
                let tmp20 = cResult[13];
              }
              if (cResult[14] === iconBackground.iconBackground) {
              }
              let obj2 = {
                accessibilityLabel: tmp17,
                containerStyle: iconBackground.iconBackground,
                source: null,
                IconComponent: null,
                onPress: null,
                disableBackground: true,
              };
              tmp17 = stateFromStores(GroupPlusIcon[39]);
              obj2.source = tmp17;
              GroupPlusIcon = tmp(GroupPlusIcon[40]).GroupPlusIcon;
              obj2.IconComponent = GroupPlusIcon;
              obj2.onPress = tmp20;
              const tmp26 = closure_12(stateFromStores(GroupPlusIcon[25]), obj2);
              iconBackground = iconBackground.iconBackground;
              cResult[14] = iconBackground;
              cResult[15] = tmp20;
              cResult[16] = tmp26;
              const tmp25 = stateFromStores(GroupPlusIcon[25]);
            }
          }
          cResult[10] = stateFromStores;
          let id1;
          if (activeEvent != null) {
            id1 = activeEvent.id;
          }
          const fn3 = function _() {
            if (null != stateFromStores1.vanityURLCode) {
              const result = instant_invite_InstantInviteUtils.showVanityUrlInviteActionSheet(
                tmp,
                stateFromStores,
                constants2.STAGE_CHANNEL,
              );
            } else {
              const obj2 = { source: constants2.STAGE_CHANNEL, guildScheduledEventId: null };
              let id;
              if (activeEvent != null) {
                id = activeEvent.id;
              }
              obj2.guildScheduledEventId = id;
              const result1 = instant_invite_InstantInviteUtils.showInstantInviteActionSheet(stateFromStores, obj2);
            }
          };
          cResult[11] = id1;
          cResult[12] = stateFromStores1;
          cResult[13] = fn3;
          tmp20 = fn3;
        }
      }
      return tmp16;
    }
  : function StageInviteButton(channelId) {
      channelId = channelId.channelId;
      let stateFromStores1;
      const tmp = closure_14();
      const items = [ChannelStore];
      const items1 = [channelId];
      const stateFromStores = channelId(stateFromStores1[21]).useStateFromStores(
        items,
        () => ChannelStore.getChannel(channelId),
        items1,
      );
      let obj = channelId(stateFromStores1[21]);
      const items2 = [GuildStore];
      const items3 = [stateFromStores];
      stateFromStores1 = channelId(stateFromStores1[21]).useStateFromStores(
        items2,
        () => {
          let guild_id;
          if (stateFromStores != null) {
            guild_id = stateFromStores.guild_id;
          }
          if (guild_id == null) {
            guild_id = null;
          }
          return GuildStore.getGuild(guild_id);
        },
        items3,
      );
      let obj2 = channelId(stateFromStores1[21]);
      let id = channelId(stateFromStores1[37]).useActiveEvent(channelId);
      let tmp6 = null;
      if (null != stateFromStores) {
        tmp6 = null;
        if (null != stateFromStores1) {
          const obj4 = {
            accessibilityLabel: null,
            containerStyle: null,
            source: null,
            IconComponent: null,
            onPress: null,
            disableBackground: true,
          };
          const intl = tmp2(tmp3[23]).intl;
          obj4.accessibilityLabel = intl.string(tmp2(tmp3[23]).t.VINpSK);
          obj4.containerStyle = tmp.iconBackground;
          obj4.source = stateFromStores(tmp3[39]);
          obj4.IconComponent = tmp2(tmp3[40]).GroupPlusIcon;
          obj4.onPress = function onPress() {
            if (null != stateFromStores1.vanityURLCode) {
              const result = instant_invite_InstantInviteUtils.showVanityUrlInviteActionSheet(
                tmp,
                stateFromStores,
                constants2.STAGE_CHANNEL,
              );
            } else {
              const obj2 = { source: constants2.STAGE_CHANNEL, guildScheduledEventId: null };
              id = undefined;
              if (id != null) {
                id = id.id;
              }
              obj2.guildScheduledEventId = id;
              const result1 = instant_invite_InstantInviteUtils.showInstantInviteActionSheet(stateFromStores, obj2);
            }
          };
          tmp6 = closure_12(stateFromStores(tmp3[25]), obj4);
          const tmp9 = stateFromStores(tmp3[25]);
        }
      }
      return tmp6;
    };
let closure_18 = tmp8;
ReactCompilerGating = fn(558);
let tmp9 = ReactCompilerGating.isReactCompilerEnabled()
  ? function MusicMuteButton(channelId) {
      const cResult = stateFromStores(576).c(11);
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
      const obj = stateFromStores(576);
      stateFromStores = stateFromStores(504).useStateFromStores(tmp5, tmp6);
      const tmpResult = stateFromStores(504);
      if (tmpResult2.useShowStageMusicMuteButton(channelId.channelId)) {
        if (cResult[2] !== stateFromStores) {
          const intl = tmp(1126).intl;
          const string = intl.string;
          let ScHlfl = tmp(1126).t;
          if (stateFromStores) {
            ScHlfl = ScHlfl.ScHlfl;
            let stringResult = string(ScHlfl);
          } else {
            stringResult = string(ScHlfl.zqxfrf);
          }
          cResult[2] = stateFromStores;
          cResult[3] = stringResult;
        } else {
          const tmp12Result = importDefault(stateFromStores ? 10985 : 10986);
          if (cResult[4] !== stateFromStores) {
            class C {
              constructor() {
                obj = closure_0(closure_2[44]);
                return obj.updateStageMusicMuted(!closure_0);
              }
            }
            cResult[4] = stateFromStores;
            cResult[5] = C;
          } else {
            class C {
              constructor() {
                obj = closure_0(closure_2[44]);
                return obj.updateStageMusicMuted(!closure_0);
              }
            }
          }
          if (cResult[6] === tmp4.iconBackground) {
            class C {
              constructor() {
                obj = closure_0(closure_2[44]);
                return obj.updateStageMusicMuted(!closure_0);
              }
            }
          }
          const obj2 = {
            accessibilityLabel: cResult[3],
            containerStyle: tmp4.iconBackground,
            source: tmp12Result,
            onPress: C,
            disableBackground: true,
          };
          const tmp17 = closure_12(ChannelCallNavigatorIconDefault, obj2);
          cResult[6] = tmp4.iconBackground;
          cResult[7] = cResult[3];
          cResult[8] = tmp12Result;
          cResult[9] = C;
          cResult[10] = tmp17;
        }
      } else {
        class C {
          constructor() {
            obj = closure_0(closure_2[44]);
            return obj.updateStageMusicMuted(!closure_0);
          }
        }
        return null;
      }
      tmpResult2 = stateFromStores(10979);
    }
  : function MusicMuteButton(channelId) {
      let stateFromStores;
      const tmp = closure_14();
      const items = [StageMusicStore];
      stateFromStores = stateFromStores(504).useStateFromStores(items, () => muted.isMuted());
      const obj = stateFromStores(504);
      if (!obj2.useShowStageMusicMuteButton(channelId.channelId)) {
        return null;
      } else {
        const intl = tmp2(1126).intl;
        const string = intl.string;
        const t = tmp2(1126).t;
        if (stateFromStores) {
          let stringResult = string(t.ScHlfl);
        } else {
          stringResult = string(t.zqxfrf);
        }
        const obj3 = {
          accessibilityLabel: stringResult,
          containerStyle: tmp.iconBackground,
          source: importDefault(stateFromStores ? 10985 : 10986),
          onPress() {
            return StageMusicActionCreators.updateStageMusicMuted(!stateFromStores);
          },
          disableBackground: true,
        };
        closure_12(ChannelCallNavigatorIconDefault, obj3);
      }
      obj2 = stateFromStores(10979);
    };
let closure_19 = tmp9;
ReactCompilerGating = fn(558);
function closeStageModal(id) {
  const obj = AnalyticsUtilsDefault;
  const obj2 = { video_layout: "pop out" };
  const merged = Object.assign(AppAnalyticsUtils.collectVoiceAnalyticsMetadata(id.id));
  obj.track(constants.VIDEO_LAYOUT_TOGGLED, obj2);
  StatusBarDefault.setHidden(false);
  const obj5 = ModalActionCreatorsDefault;
  obj5.popWithKey(PrivateChannelCallUtils.getVoiceChannelKey(id.id));
}
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? function HideChannelCallButton(channel) {
      const cResult = channel(576).c(12);
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
      let obj = channel(576);
      const stateFromStores = channel(504).useStateFromStores(tmp5, tmp6);
      if (cResult[2] !== channel) {
        function handleClose() {
          const obj = AnalyticsUtilsDefault;
          const obj2 = { video_layout: "pop out" };
          const merged = Object.assign(AppAnalyticsUtils.collectVoiceAnalyticsMetadata(channel.id));
          obj.track(constants.VIDEO_LAYOUT_TOGGLED, obj2);
          StatusBarDefault.setHidden(false);
          const obj5 = ModalActionCreatorsDefault;
          obj5.popWithKey(PrivateChannelCallUtils.getVoiceChannelKey(channel.id));
          const participant = ChannelRTCActionCreatorsDefault.selectParticipant(channel.id, null);
        }
        cResult[2] = channel;
        cResult[3] = handleClose;
        let tmp9 = handleClose;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(tmp(1126).t.cpT0Cq);
        cResult[4] = stringResult;
        let tmp10 = stringResult;
      } else {
        tmp10 = cResult[4];
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        let obj2 = {};
        cResult[5] = obj2;
        let tmp12 = obj2;
      } else {
        tmp12 = cResult[5];
      }
      if (cResult[6] !== stateFromStores) {
        let obj3 = { value: stateFromStores, maskStyle: tmp12 };
        const tmp15 = closure_12(tmp(1200).MaskedBadge, obj3);
        cResult[6] = stateFromStores;
        cResult[7] = tmp15;
        let tmp13 = tmp15;
      } else {
        tmp13 = cResult[7];
      }
      if (cResult[8] === tmp9) {
        if (cResult[9] === tmp4.iconContainer) {
          if (cResult[10] === tmp13) {
            let tmp16 = cResult[11];
          }
          return tmp16;
        }
      }
      let obj4 = {
        source: null,
        accessibilityLabel: null,
        onPress: null,
        containerStyle: null,
        disableBackground: true,
        children: null,
      };
      const tmpResult = channel(504);
      obj4.source = _modDef11145;
      obj4.accessibilityLabel = tmp10;
      obj4.onPress = tmp9;
      obj4.containerStyle = tmp4.iconContainer;
      obj4.children = tmp13;
      const tmp18 = closure_12(ChannelCallNavigatorIconDefault, obj4);
      cResult[8] = tmp9;
      cResult[9] = tmp4.iconContainer;
      cResult[10] = tmp13;
      cResult[11] = tmp18;
      tmp16 = tmp18;
    }
  : function HideChannelCallButton(channel) {
      channel = channel.channel;
      const tmp = closure_14();
      const items = [GuildReadStateStore];
      const stateFromStores = channel(504).useStateFromStores(items, () => totalMentionCount.getTotalMentionCount());
      let obj2 = {
        source: null,
        accessibilityLabel: null,
        onPress: null,
        containerStyle: null,
        disableBackground: true,
        children: null,
      };
      let obj = channel(504);
      obj2.source = _modDef11145;
      const intl = channel(1126).intl;
      obj2.accessibilityLabel = intl.string(channel(1126).t.cpT0Cq);
      obj2.onPress = function handleClose() {
        const obj = AnalyticsUtilsDefault;
        const obj2 = { video_layout: "pop out" };
        const merged = Object.assign(AppAnalyticsUtils.collectVoiceAnalyticsMetadata(channel.id));
        obj.track(constants.VIDEO_LAYOUT_TOGGLED, obj2);
        StatusBarDefault.setHidden(false);
        const obj5 = ModalActionCreatorsDefault;
        obj5.popWithKey(PrivateChannelCallUtils.getVoiceChannelKey(channel.id));
        const participant = ChannelRTCActionCreatorsDefault.selectParticipant(channel.id, null);
      };
      obj2.containerStyle = tmp.iconContainer;
      obj2.children = closure_12(channel(1200).MaskedBadge, { value: stateFromStores, maskStyle: {} });
      return closure_12(ChannelCallNavigatorIconDefault, obj2);
    };
const size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/native/components/StageActionHeader.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function StageActionHeader(arg0) {
        const cResult = c.c(25);
        ({ channel, fullscreenStream, onOpenRTCDebugOverlay } = arg0);
        const tmp4 = closure_14();
        const tmp5 = useMyCurrentStageChannelRoleDefault(channel.id);
        if (tmp5 != null) {
          const speaker = tmp5.speaker;
        }
        if (cResult[0] === channel) {
          if (cResult[1] === fullscreenStream) {
            let tmp6 = cResult[2];
          }
          if (cResult[3] !== channel) {
            const obj2 = { channel };
            const tmp11 = __initData(closure_16, obj2);
            cResult[3] = channel;
            cResult[4] = tmp11;
            let tmp8 = tmp11;
          } else {
            tmp8 = cResult[4];
          }
          if (cResult[5] === channel.id) {
            if (cResult[6] === speaker) {
              let tmp12 = cResult[7];
            }
            if (cResult[8] === channel) {
              if (cResult[9] === fullscreenStream) {
                let tmp16 = cResult[10];
              }
              const _Symbol = Symbol;
              if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
                const tmp22 = __initData(ChannelCallHeaderButtons.CameraButton, {});
                cResult[11] = tmp22;
                let tmp20 = tmp22;
              } else {
                tmp20 = cResult[11];
              }
              if (cResult[12] !== channel.id) {
                const obj3 = { channelId: channel.id };
                const tmp26 = __initData(closure_18, obj3);
                cResult[12] = channel.id;
                cResult[13] = tmp26;
                let tmp23 = tmp26;
              } else {
                tmp23 = cResult[13];
              }
              if (cResult[14] === channel.id) {
                if (cResult[15] === onOpenRTCDebugOverlay) {
                  let tmp27 = cResult[16];
                }
                if (cResult[17] === tmp4.header) {
                  if (cResult[18] === tmp6) {
                    if (cResult[19] === tmp8) {
                      if (cResult[20] === tmp12) {
                        if (cResult[21] === tmp16) {
                          if (cResult[22] === tmp23) {
                            if (cResult[23] === tmp27) {
                              let tmp31 = cResult[24];
                            }
                            return tmp31;
                          }
                        }
                      }
                    }
                  }
                }
                const obj4 = { style: tmp4.header, pointerEvents: "box-none", children: null };
                const items = [tmp6, tmp8, tmp12, tmp16, tmp20, tmp23, tmp27];
                obj4.children = items;
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
              const tmp30 = __initData(closure_17, obj5);
              cResult[14] = channel.id;
              cResult[15] = onOpenRTCDebugOverlay;
              cResult[16] = tmp30;
              tmp27 = tmp30;
            }
            let tmp17 = fullscreenStream;
            if (fullscreenStream) {
              const obj6 = { channel };
              tmp17 = __initData(ChannelCallHeaderButtons.GridButton, obj6);
            }
            cResult[8] = channel;
            cResult[9] = fullscreenStream;
            cResult[10] = tmp17;
            tmp16 = tmp17;
          }
          let tmp13 = speaker;
          if (speaker) {
            const obj7 = { channelId: channel.id };
            tmp13 = __initData(closure_19, obj7);
          }
          cResult[5] = channel.id;
          cResult[6] = speaker;
          cResult[7] = tmp13;
          tmp12 = tmp13;
        }
        const tmp7 = __initData(closure_15, { channel, fullscreenStream });
        cResult[0] = channel;
        cResult[1] = fullscreenStream;
        cResult[2] = tmp7;
        tmp6 = tmp7;
      }
    : function StageActionHeader(onOpenRTCDebugOverlay) {
        ({ channel, fullscreenStream } = onOpenRTCDebugOverlay);
        const tmp3 = useMyCurrentStageChannelRoleDefault(channel.id);
        let speaker;
        if (tmp3 != null) {
          speaker = tmp3.speaker;
        }
        const obj = { style: closure_14().header, pointerEvents: "box-none", children: null };
        const items = [
          __initData(closure_15, { channel, fullscreenStream }),
          __initData(closure_16, { channel }),
          ,
          ,
          ,
          ,
        ];
        if (speaker) {
          const obj2 = { channelId: channel.id };
          speaker = __initData(closure_19, obj2);
        }
        items[2] = speaker;
        if (fullscreenStream) {
          const obj3 = { channel };
          fullscreenStream = __initData(ChannelCallHeaderButtons.GridButton, obj3);
        }
        items[3] = fullscreenStream;
        items[4] = __initData(ChannelCallHeaderButtons.CameraButton, {});
        items[5] = __initData(closure_18, { channelId: channel.id });
        items[6] = __initData(closure_17, {
          channelId: channel.id,
          onOpenRTCDebugOverlay: onOpenRTCDebugOverlay.onOpenRTCDebugOverlay,
        });
        obj.children = items;
        return map1(View, obj);
      },
);
export { closeStageModal };
export const HideStageChannelCallIcon = tmp4;
export const StageChannelCallHeader = tmp5;
export const HideChannelCallButton = tmp6;
export const StageSettingsButton = tmp7;
export const StageInviteButton = tmp8;
export const MusicMuteButton = tmp9;
