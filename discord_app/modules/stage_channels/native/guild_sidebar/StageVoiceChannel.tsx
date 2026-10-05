// discord_app/modules/stage_channels/native/guild_sidebar/StageVoiceChannel.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl5 from "../../../../intl/index.native.tsx";
import KeyboardManagerUtilsAll from "../../../../utils/native/KeyboardManagerUtils.tsx";
import SortedVoiceStateStore2 from "../../../../stores/views/SortedVoiceStateStore.tsx";
import useChannelNameDefault from "../../../channel/useChannelName.tsx";
import PrivateChannelCallUtils from "../../../../utils/native/PrivateChannelCallUtils.tsx";
import StageMediaHooks from "../../StageMediaHooks.tsx";
import useShowMemberVerificationGate from "../../../guild_member_verification/hooks/useShowMemberVerificationGate.tsx";
import MemberVerificationModalActionCreators from "../../../guild_member_verification/MemberVerificationModalActionCreators.tsx";
import openChannelLongPressActionSheet from "../../../channel/native/openChannelLongPressActionSheet.tsx";
import RedesignChannelListConstants from "../../../channel_list_v2/native/RedesignChannelListConstants.tsx";
import ChannelItemDefault from "../../../guild_sidebar/native/ChannelItem.tsx";
import ChannelInfoDefault from "../../../guild_sidebar/native/ChannelInfo.tsx";
import useStageChannelSpeakerVoiceStatesDefault from "../../useStageChannelSpeakerVoiceStates.tsx";
import react from "../../../../../_runtime/00019_react.js";
import CollapsedVoiceChannelStore from "../../../../stores/CollapsedVoiceChannelStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import ReadStateStore from "../../../../stores/ReadStateStore.tsx";
import UserGuildSettingsStore from "../../../../stores/UserGuildSettingsStore.tsx";
import StageInstanceStore from "../../StageInstanceStore.tsx";
import Constants from "../../../../Constants.tsx";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const SortedVoiceStateStore = SortedVoiceStateStore2;

let closure_14;
let map1;
let obj2;
function getStageChannelAccessibilityProps(arg0) {
  let channel;
  let channelName;
  let formatToPlainStringResult1;
  let intl3;
  let userCount;
  ({ channelName, channel, userCount } = arg0);
  const intl = intl5.intl;
  const formatToPlainStringResult = intl.formatToPlainString(intl5.t.TPPk2T, { channelName });
  if (null != channel.userLimit) {
    if (channel.userLimit > 0) {
      const intl2 = intl5.intl;
      const obj = { channelName, userCount, limit: channel.userLimit };
      formatToPlainStringResult1 = intl2.formatToPlainString(intl5.t.rhh6Ev, obj);
    }
    const obj2 = {
      accessible: true,
      accessibilityRole: "button",
      accessibilityLabel: formatToPlainStringResult1,
      accessibilityHint: intl3.string(intl5.t.g6pBAk),
    };
    intl3 = intl5.intl;
    return obj2;
  }
  formatToPlainStringResult1 = formatToPlainStringResult;
  if (userCount > 0) {
    const intl4 = intl5.intl;
    const obj3 = { channelName, userCount };
    formatToPlainStringResult1 = intl4.formatToPlainString(intl5.t["7yr3Qc"], obj3);
  }
}
const View = react_native.View;
const NO_VOICE_STATES = SortedVoiceStateStore2.NO_VOICE_STATES;
({ MAX_STAGE_VOICE_USER_LIMIT: map1, Permissions: closure_14 } = Constants);
const CHANNEL_MARGIN_VERTICAL = RedesignChannelListConstants.CHANNEL_MARGIN_VERTICAL;
const jsx = Fragment.jsx;
let obj = { voiceStates: { marginLeft: 36, marginBottom: 8 }, container: obj2 };
obj2 = { marginVertical: CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md };
let closure_17 = createStyles.createStyles(obj);
const memo = react.memo;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (channel) => {
        let collapsed;
        let first;
        let hasMedia;
        let hasUnread;
        let locked;
        let resolvedUnreadSetting;
        let stageInstance;
        let tmp12;
        let tmp13;
        let voiceStates;
        let obj = channel(576);
        const cResult = obj.c(38);
        channel = channel.channel;
        closure_17();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [
            StageInstanceStore,
            ReadStateStore,
            UserGuildSettingsStore,
            SortedVoiceStateStore,
            PermissionStore,
            CollapsedVoiceChannelStore,
          ];
          cResult[0] = items;
          first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== channel) {
          const fn = function b() {
            let obj2;
            const obj = {
              stageInstance: StageInstanceStore.getStageInstanceByChannel(channel.id),
              hasUnread: ReadStateStore.hasUnread(channel.id),
              resolvedUnreadSetting: UserGuildSettingsStore.resolveUnreadSetting(channel),
              voiceStates: SortedVoiceStateStore.getVoiceStatesForChannel(channel),
              hasMedia: obj2.getStageHasMedia(channel.id),
              locked: !PermissionStore.can(constants.CONNECT, channel),
              collapsed: CollapsedVoiceChannelStore.isCollapsed(channel.id),
            };
            obj2 = StageMediaHooks;
            return obj;
          };
          const items1 = [channel];
          cResult[1] = channel;
          cResult[2] = fn;
          cResult[3] = items1;
          tmp13 = items1;
          tmp12 = fn;
        } else {
          tmp12 = cResult[2];
          tmp13 = cResult[3];
        }
        const tmpResult = channel(504);
        const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp12, tmp13);
        ({ stageInstance, hasUnread, resolvedUnreadSetting, voiceStates, hasMedia, locked, collapsed } =
          stateFromStoresObject);
        let arr3 = useStageChannelSpeakerVoiceStatesDefault(channel.guild_id)[channel.id];
        if (arr3 == null) {
          arr3 = NO_VOICE_STATES;
        }
        const tmpResult3 = channel(5588);
        const stageParticipantsCount = tmpResult3.useStageParticipantsCount(
          channel.id,
          tmp(5582).StageChannelParticipantNamedIndex.AUDIENCE,
        );
        const sum = stageParticipantsCount + arr3.length;
        if (cResult[4] !== channel) {
          class N {
            constructor() {
              const guildId = channel.getGuildId();
              if (null != guildId) {
                const obj = useShowMemberVerificationGate;
                if (obj.shouldShowMembershipVerificationGate(guildId)) {
                  const obj4 = MemberVerificationModalActionCreators;
                  return obj4.openMemberVerificationModal(guildId);
                }
              }
              const obj2 = KeyboardManagerUtilsAll;
              const result = obj2.dismissGlobalKeyboard();
              const obj3 = PrivateChannelCallUtils;
              obj3.openGuildVoiceModal(channel, "Channel List");
            }
          }
          cResult[4] = channel;
          cResult[5] = N;
        } else {
          class N {
            constructor() {
              const guildId = channel.getGuildId();
              if (null != guildId) {
                const obj = useShowMemberVerificationGate;
                if (obj.shouldShowMembershipVerificationGate(guildId)) {
                  const obj4 = MemberVerificationModalActionCreators;
                  return obj4.openMemberVerificationModal(guildId);
                }
              }
              const obj2 = KeyboardManagerUtilsAll;
              const result = obj2.dismissGlobalKeyboard();
              const obj3 = PrivateChannelCallUtils;
              obj3.openGuildVoiceModal(channel, "Channel List");
            }
          }
        }
        if (cResult[6] !== channel.id) {
          class N {
            constructor() {
              const guildId = channel.getGuildId();
              if (null != guildId) {
                const obj = useShowMemberVerificationGate;
                if (obj.shouldShowMembershipVerificationGate(guildId)) {
                  const obj4 = MemberVerificationModalActionCreators;
                  return obj4.openMemberVerificationModal(guildId);
                }
              }
              const obj2 = KeyboardManagerUtilsAll;
              const result = obj2.dismissGlobalKeyboard();
              const obj3 = PrivateChannelCallUtils;
              obj3.openGuildVoiceModal(channel, "Channel List");
            }
          }
          cResult[6] = channel.id;
          cResult[7] = tmp20;
        } else {
          class N {
            constructor() {
              const guildId = channel.getGuildId();
              if (null != guildId) {
                const obj = useShowMemberVerificationGate;
                if (obj.shouldShowMembershipVerificationGate(guildId)) {
                  const obj4 = MemberVerificationModalActionCreators;
                  return obj4.openMemberVerificationModal(guildId);
                }
              }
              const obj2 = KeyboardManagerUtilsAll;
              const result = obj2.dismissGlobalKeyboard();
              const obj3 = PrivateChannelCallUtils;
              obj3.openGuildVoiceModal(channel, "Channel List");
            }
          }
        }
        const tmp21 = useChannelNameDefault(channel, false);
        const tmpResult4 = channel(9054);
        const isConnectedToVoiceChannel = tmpResult4.useIsConnectedToVoiceChannel(channel);
        if (stageInstance != null) {
          class N {
            constructor() {
              const guildId = channel.getGuildId();
              if (null != guildId) {
                const obj = useShowMemberVerificationGate;
                if (obj.shouldShowMembershipVerificationGate(guildId)) {
                  const obj4 = MemberVerificationModalActionCreators;
                  return obj4.openMemberVerificationModal(guildId);
                }
              }
              const obj2 = KeyboardManagerUtilsAll;
              const result = obj2.dismissGlobalKeyboard();
              const obj3 = PrivateChannelCallUtils;
              obj3.openGuildVoiceModal(channel, "Channel List");
            }
          }
        }
        if (cResult[8] === channel) {
          class N {
            constructor() {
              const guildId = channel.getGuildId();
              if (null != guildId) {
                const obj = useShowMemberVerificationGate;
                if (obj.shouldShowMembershipVerificationGate(guildId)) {
                  const obj4 = MemberVerificationModalActionCreators;
                  return obj4.openMemberVerificationModal(guildId);
                }
              }
              const obj2 = KeyboardManagerUtilsAll;
              const result = obj2.dismissGlobalKeyboard();
              const obj3 = PrivateChannelCallUtils;
              obj3.openGuildVoiceModal(channel, "Channel List");
            }
          }
        }
        cResult[8] = channel;
        cResult[9] = tmp21;
        cResult[10] = sum;
        cResult[11] = getStageChannelAccessibilityProps({ channel, channelName: tmp21, userCount: sum });
        getStageChannelAccessibilityProps({ channel, channelName: tmp21, userCount: sum });
      }
    : (channel) => {
        let collapsed;
        let hasMedia;
        let hasUnread;
        let locked;
        let resolvedUnreadSetting;
        let stageInstance;
        let voiceStates;
        channel = channel.channel;
        const selected = channel.selected;
        const tmp = closure_17();
        let obj = channel(504);
        const items = [
          StageInstanceStore,
          ReadStateStore,
          UserGuildSettingsStore,
          SortedVoiceStateStore,
          PermissionStore,
          CollapsedVoiceChannelStore,
        ];
        const items1 = [channel];
        const stateFromStoresObject = obj.useStateFromStoresObject(
          items,
          () => {
            let obj2;
            const obj = {
              stageInstance: StageInstanceStore.getStageInstanceByChannel(channel.id),
              hasUnread: ReadStateStore.hasUnread(channel.id),
              resolvedUnreadSetting: UserGuildSettingsStore.resolveUnreadSetting(channel),
              voiceStates: SortedVoiceStateStore.getVoiceStatesForChannel(channel),
              hasMedia: obj2.getStageHasMedia(channel.id),
              locked: !PermissionStore.can(constants.CONNECT, channel),
              collapsed: CollapsedVoiceChannelStore.isCollapsed(channel.id),
            };
            obj2 = StageMediaHooks;
            return obj;
          },
          items1,
        );
        ({ stageInstance, hasUnread, hasMedia, collapsed } = stateFromStoresObject);
        ({ resolvedUnreadSetting, voiceStates, locked } = stateFromStoresObject);
        let arr3 = useStageChannelSpeakerVoiceStatesDefault(channel.guild_id)[channel.id];
        if (arr3 == null) {
          arr3 = NO_VOICE_STATES;
        }
        const tmp2Result = channel(5588);
        const stageParticipantsCount = tmp2Result.useStageParticipantsCount(
          channel.id,
          tmp2(5582).StageChannelParticipantNamedIndex.AUDIENCE,
        );
        const items2 = [channel];
        const sum = stageParticipantsCount + arr3.length;
        const items3 = [channel.id];
        const callback = react.useCallback(() => {
          const guildId = channel.getGuildId();
          if (null != guildId) {
            const obj = useShowMemberVerificationGate;
            if (obj.shouldShowMembershipVerificationGate(guildId)) {
              const obj4 = MemberVerificationModalActionCreators;
              return obj4.openMemberVerificationModal(guildId);
            }
          }
          const obj2 = KeyboardManagerUtilsAll;
          const result = obj2.dismissGlobalKeyboard();
          const obj3 = PrivateChannelCallUtils;
          obj3.openGuildVoiceModal(channel, "Channel List");
        }, items2);
        const callback1 = react.useCallback(() => {
          const obj = openChannelLongPressActionSheet;
          const result = obj.openChannelLongPressActionSheet(channel.id);
        }, items3);
        let topic;
        const tmp10 = useChannelNameDefault(channel, false);
        const tmp2Result2 = channel(9054);
        const isConnectedToVoiceChannel = tmp2Result2.useIsConnectedToVoiceChannel(channel);
        if (stageInstance != null) {
          topic = stageInstance.topic;
        }
        ChannelItemDefault;
        const merged = Object.assign(
          getStageChannelAccessibilityProps({ channel, channelName: tmp10, userCount: sum }),
        );
        if (hasUnread) {
          hasUnread = isConnectedToVoiceChannel;
        }
        ChannelInfoDefault;
        if (!hasMedia) {
          hasMedia = channel.userLimit > 0 && channel.userLimit < closure_13;
          const tmp17 = channel.userLimit > 0 && channel.userLimit < closure_13;
        }
        let tmp13Result = arr3.length > 0;
        if (tmp13Result) {
          tmp13Result = <View style={tmp.voiceStates}>{null}</View>;
        }
        return (
          <tmp5Result
            onPress={callback}
            onLongPress={callback1}
            style={tmp.container}
            channel={channel}
            selected={selected}
            locked={locked}
            isChannelLive={null != stageInstance}
            unread={hasUnread}
            resolvedUnreadSetting={resolvedUnreadSetting}
            subtitle={topic}
            channelInfo={
              <tmp5Result2
                channel={channel}
                isChannelSelected={selected}
                isChannelCollapsed={collapsed}
                enableConnectedUserLimit={hasMedia}
                voiceStates={voiceStates}
              />
            }
          >
            {tmp13Result}
          </tmp5Result>
        );
      },
);
let result = size.fileFinishedImporting("modules/stage_channels/native/guild_sidebar/StageVoiceChannel.tsx");

export default memoResult;
