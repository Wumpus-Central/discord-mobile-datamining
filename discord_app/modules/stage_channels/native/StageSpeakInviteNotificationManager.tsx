// discord_app/modules/stage_channels/native/StageSpeakInviteNotificationManager.tsx
import util from "../../../intl/index.native.tsx";
import useChannelName from "../../channel/useChannelName.tsx";
import useAudienceRequestToSpeakState from "../useAudienceRequestToSpeakState.tsx";
import NotificationTextUtils from "../../notifications/NotificationTextUtils.tsx";
import InAppNotificationUtils from "../../in_app_notifications/native/InAppNotificationUtils.tsx";
import InAppNotificationActionCreatorsDefault from "../../../actions/native/InAppNotificationActionCreators.tsx";
import StageChannelUnifiedCallExperiment from "../StageChannelUnifiedCallExperiment.tsx";
import PushNotificationDefault from "../../../lib/pushnotification/PushNotification.tsx";
import VoicePanelStore from "../../voice_panel/VoicePanelStore.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import SelectedChannelStore from "../../../stores/SelectedChannelStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import StageInstanceStore from "../StageInstanceStore.tsx";
import AutomaticLifecycleManager from "../../../lib/AutomaticLifecycleManager.tsx";

require = fn;
const InAppNotificationTypes = fn(1072).InAppNotificationTypes;
let c12 = null;
class StageSpeakInviteNotificationManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.actions = { VOICE_STATE_UPDATES: applyArgumentsResult.handleVoiceStateUpdates };
    return applyArgumentsResult;
  }
}
StageSpeakInviteNotificationManager.prototype["handleVoiceStateUpdates"] = function handleVoiceStateUpdates(
  voiceStates,
) {
  voiceStates = voiceStates.voiceStates;
  const id = AuthenticationStore.getId();
  const item = voiceStates.forEach((userId) => {
    if (userId.userId === closure_0) {
      const channelId = userId.channelId;
      if (null != channelId) {
        if (channelId === SelectedChannelStore.getVoiceChannelId()) {
          const audienceRequestToSpeakState = useAudienceRequestToSpeakState.getAudienceRequestToSpeakState(userId);
          if (
            audienceRequestToSpeakState ===
            useAudienceRequestToSpeakState.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
          ) {
            if (c12 !== channelId) {
              c12 = channelId;
              const channel = ChannelStore.getChannel(channelId);
              let isStageUnifiedCallResult = null != channel;
              if (isStageUnifiedCallResult) {
                isStageUnifiedCallResult = StageChannelUnifiedCallExperiment.isStageUnifiedCall(
                  channel,
                  "StageSpeakInviteNotification",
                );
                const tmp2Result = StageChannelUnifiedCallExperiment;
              }
              if (isStageUnifiedCallResult) {
                const intl = util.intl;
                const obj2 = { channelName: null, channelTopic: null };
                const obj3 = PushNotificationDefault;
                obj2.channelName = useChannelName.computeChannelName(channel, UserStore, RelationshipStore);
                const stageInstanceByChannel = StageInstanceStore.getStageInstanceByChannel(channel.id);
                let topic;
                if (stageInstanceByChannel != null) {
                  topic = stageInstanceByChannel.topic;
                }
                const obj4 = { alertBody: null };
                obj2.channelTopic = topic;
                obj4.alertBody = intl.formatToPlainString(util.t.sqnsSP, obj2);
                const result = obj3.presentLocalNotification(obj4);
                state = VoicePanelStore.getState();
                if (!state.isChannelOpen(channel.id)) {
                  if (tmp2Result6.allowInAppNotifications()) {
                    const STAGE_SPEAK_INVITE = InAppNotificationTypes.STAGE_SPEAK_INVITE;
                    const obj5 = {
                      type: STAGE_SPEAK_INVITE,
                      key: null,
                      duration: null,
                      onDismiss: null,
                      channel: null,
                      guild: null,
                      inAppNotificationId: null,
                    };
                    const _HermesInternal = HermesInternal;
                    obj5.key = "stage-speak-invite-" + channel.id;
                    const tmp7Result = InAppNotificationActionCreatorsDefault;
                    obj5.duration = InAppNotificationUtils.getNotificationDuration(STAGE_SPEAK_INVITE);
                    obj5.onDismiss = function onDismiss() {
                      closure_1_1(closure_1_2[13]).clearNotification();
                    };
                    obj5.channel = channel;
                    obj5.guild = GuildStore.getGuild(channel.guild_id);
                    const tmp2Result7 = InAppNotificationUtils;
                    obj5.inAppNotificationId = InAppNotificationUtils.generateInAppNotificationId();
                    tmp7Result.enqueueNotification(obj5);
                    const tmp2Result8 = InAppNotificationUtils;
                  }
                  tmp2Result6 = NotificationTextUtils;
                }
                const tmp2Result5 = useChannelName;
              }
            }
          } else {
            c12 = null;
          }
        }
      }
      c12 = null;
    }
  });
};
const stageSpeakInviteNotificationManager = new StageSpeakInviteNotificationManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/native/StageSpeakInviteNotificationManager.tsx");

export default stageSpeakInviteNotificationManager;
