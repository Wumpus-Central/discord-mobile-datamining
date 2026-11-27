// === Module 19889: StageSpeakInviteNotificationManager ===

// Module 19889 (StageSpeakInviteNotificationManager)
import util from "util" /* 1112 */;
import useChannelName from "useChannelName" /* 5659 */;
import useAudienceRequestToSpeakState from "useAudienceRequestToSpeakState" /* 6803 */;
import StageChannelUnifiedCallExperiment from "StageChannelUnifiedCallExperiment" /* 10272 */;
import PushNotificationDefault from "PushNotification" /* 10278 */;
import NotificationTextUtils from "NotificationTextUtils" /* 10604 */;
import InAppNotificationUtils from "InAppNotificationUtils" /* 10627 */;
import InAppNotificationActionCreatorsDefault from "InAppNotificationActionCreators" /* 10629 */;
import VoicePanelStore from "VoicePanelStore" /* 6965 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4892 */;
import GuildStore from "GuildStore" /* 4914 */;
import RelationshipStore from "RelationshipStore" /* 4985 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4946 */;
import UserStore from "UserStore" /* 1387 */;
import StageInstanceStore from "StageInstanceStore" /* 4897 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7475 */;

require = fn;
const InAppNotificationTypes = fn(1071).InAppNotificationTypes;
let c12 = null;
class StageSpeakInviteNotificationManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.actions = { VOICE_STATE_UPDATES: applyArgumentsResult.handleVoiceStateUpdates };
    return applyArgumentsResult;
  }
}
StageSpeakInviteNotificationManager.prototype["handleVoiceStateUpdates"] = function handleVoiceStateUpdates(voiceStates) {
  voiceStates = voiceStates.voiceStates;
  const id = AuthenticationStore.getId();
  const item = voiceStates.forEach((userId) => {
    if (userId.userId === closure_0) {
      const channelId = userId.channelId;
      if (null != channelId) {
        if (channelId === SelectedChannelStore.getVoiceChannelId()) {
          const audienceRequestToSpeakState = useAudienceRequestToSpeakState.getAudienceRequestToSpeakState(userId);
          if (audienceRequestToSpeakState === useAudienceRequestToSpeakState.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK) {
            if (c12 !== channelId) {
              c12 = channelId;
              const channel = ChannelStore.getChannel(channelId);
              let isStageUnifiedCallResult = null != channel;
              if (isStageUnifiedCallResult) {
                isStageUnifiedCallResult = StageChannelUnifiedCallExperiment.isStageUnifiedCall(channel, "StageSpeakInviteNotification");
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
                    const obj5 = { type: STAGE_SPEAK_INVITE, key: null, duration: null, onDismiss: null, channel: null, guild: null, inAppNotificationId: null };
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