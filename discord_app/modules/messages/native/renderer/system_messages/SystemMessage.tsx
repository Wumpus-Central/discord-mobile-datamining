// discord_app/modules/messages/native/renderer/system_messages/SystemMessage.tsx
import AddRecipientSystemMessage from "AddRecipientSystemMessage.tsx";
import RemoveRecipientSystemMessage from "RemoveRecipientSystemMessage.tsx";
import CallSystemMessage from "CallSystemMessage.tsx";
import ChangeChannelNameSystemMessage from "ChangeChannelNameSystemMessage.tsx";
import ChangeChannelIconSystemMessage from "ChangeChannelIconSystemMessage.tsx";
import ChannelPinnedMessageSystemMessage from "ChannelPinnedMessageSystemMessage.tsx";
import UserJoinSystemMessage from "UserJoinSystemMessage.tsx";
import UserPremiumGuildSubscriptionSystemMessage from "UserPremiumGuildSubscriptionSystemMessage.tsx";
import UserPremiumGuildSubscriptionTierAchievedSystemMessage from "UserPremiumGuildSubscriptionTierAchievedSystemMessage.tsx";
import ChannelFollowAddSystemMessage from "ChannelFollowAddSystemMessage.tsx";
import GuildStreamSystemMessage from "GuildStreamSystemMessage.tsx";
import GuildDiscoverySystemMessage from "GuildDiscoverySystemMessage.tsx";
import ApplicationCommandSourceSystemMessage from "ApplicationCommandSourceSystemMessage.tsx";
import NewThreadSystemMessage from "NewThreadSystemMessage.tsx";
import ThreadStarterSystemMessage from "ThreadStarterSystemMessage.tsx";
import AutoModerationActionSystemMessage from "AutoModerationActionSystemMessage.tsx";
import RoleSubscriptionPurchaseSystemMessage from "RoleSubscriptionPurchaseSystemMessage.tsx";
import PurchaseNotificationSystemMessage from "PurchaseNotificationSystemMessage.tsx";
import StageStartSystemMessage from "StageStartSystemMessage.tsx";
import StageEndSystemMessage from "StageEndSystemMessage.tsx";
import StageTopicSystemMessage from "StageTopicSystemMessage.tsx";
import StageSpeakerSystemMessage from "StageSpeakerSystemMessage.tsx";
import StageRaiseHandSystemMessage from "StageRaiseHandSystemMessage.tsx";
import ApplicationSubscriptionPurchaseSystemMessage from "ApplicationSubscriptionPurchaseSystemMessage.tsx";
import PrivateChannelIntegrationSystemMessage from "PrivateChannelIntegrationSystemMessage.tsx";
import GuildAlertModeSystemMessage from "GuildAlertModeSystemMessage.tsx";
import GuildReportRaidSystemMessage from "GuildReportRaidSystemMessage.tsx";
import GuildReportFalseAlarmSystemMessage from "GuildReportFalseAlarmSystemMessage.tsx";
import PollResultSystemMessage from "PollResultSystemMessage.tsx";
import ChannelLinkedToLobbySystemMessage from "ChannelLinkedToLobbySystemMessage.tsx";
import InGameMessageNuxSystemMessage from "InGameMessageNuxSystemMessage.tsx";
import JoinRequestNotificationSystemMessage from "JoinRequestNotificationSystemMessage.tsx";
import PremiumGroupInviteSystemMessage from "PremiumGroupInviteSystemMessage.tsx";
import ReferralSystemMessage from "ReferralSystemMessage.tsx";
import VoiceSessionSystemMessage from "VoiceSessionSystemMessage.tsx";
import FriendRequestAcceptedSystemMessage from "FriendRequestAcceptedSystemMessage.tsx";
import GiftIntentSystemMessage from "GiftIntentSystemMessage.tsx";
import Constants from "../../../../../Constants.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

({ MessageTypes: c2, BoostedGuildTiers: c3 } = Constants);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/SystemMessage.tsx");

export const createSystemMessageContent = function createSystemMessageContent(message) {
  const type = message.message.type;
  if (constants.RECIPIENT_ADD === type) {
    return AddRecipientSystemMessage.createAddRecipientSystemMessage(message);
  } else if (tmp.RECIPIENT_REMOVE === type) {
    return RemoveRecipientSystemMessage.createRemoveRecipientSystemMessage(message);
  } else if (tmp.CALL === type) {
    return CallSystemMessage.createCallSystemMessage(message);
  } else if (tmp.CHANNEL_NAME_CHANGE === type) {
    return ChangeChannelNameSystemMessage.createChangeChannelNameSystemMessage(message);
  } else if (tmp.CHANNEL_ICON_CHANGE === type) {
    return ChangeChannelIconSystemMessage.createChangeChannelIconSystemMessage(message);
  } else if (tmp.CHANNEL_PINNED_MESSAGE === type) {
    return ChannelPinnedMessageSystemMessage.createChannelPinnedMessageSystemMessage(message);
  } else if (tmp.USER_JOIN === type) {
    return UserJoinSystemMessage.createUserJoinSystemMessage(message);
  } else if (tmp.GUILD_BOOST === type) {
    return UserPremiumGuildSubscriptionSystemMessage.createUserPremiumGuildSubscriptionSystemMessage(message);
  } else if (tmp.GUILD_BOOST_TIER_1 === type) {
    return UserPremiumGuildSubscriptionTierAchievedSystemMessage.createUserPremiumGuildSubscriptionTierAchievedSystemMessage(
      message,
      React3.TIER_1,
    );
  } else if (tmp.GUILD_BOOST_TIER_2 === type) {
    return UserPremiumGuildSubscriptionTierAchievedSystemMessage.createUserPremiumGuildSubscriptionTierAchievedSystemMessage(
      message,
      React3.TIER_2,
    );
  } else if (tmp.GUILD_BOOST_TIER_3 === type) {
    return UserPremiumGuildSubscriptionTierAchievedSystemMessage.createUserPremiumGuildSubscriptionTierAchievedSystemMessage(
      message,
      React3.TIER_3,
    );
  } else if (tmp.CHANNEL_FOLLOW_ADD === type) {
    return ChannelFollowAddSystemMessage.createChannelFollowAddSystemMessage(message);
  } else if (tmp.GUILD_STREAM === type) {
    return GuildStreamSystemMessage.createGuildStreamSystemMessage(message);
  } else if (tmp.GUILD_DISCOVERY_DISQUALIFIED === type) {
    return GuildDiscoverySystemMessage.createGuildDiscoveryDisqualifiedSystemMessage(message);
  } else if (tmp.GUILD_DISCOVERY_REQUALIFIED === type) {
    return GuildDiscoverySystemMessage.createGuildDiscoveryRequalifiedSystemMessage(message);
  } else if (tmp.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING === type) {
    return GuildDiscoverySystemMessage.createGuildDiscoveryGracePeriodInitialWarningSystemMessage(message);
  } else if (tmp.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING === type) {
    return GuildDiscoverySystemMessage.createGuildDiscoveryGracePeriodFinalWarningSystemMessage(message);
  } else {
    if (tmp.CHAT_INPUT_COMMAND !== type) {
      if (tmp.CONTEXT_MENU_COMMAND !== type) {
        if (tmp.GUILD_INVITE_REMINDER === type) {
          return null;
        } else if (tmp.THREAD_CREATED === type) {
          return NewThreadSystemMessage.createNewThreadSystemMessage(message);
        } else if (tmp.THREAD_STARTER_MESSAGE === type) {
          return ThreadStarterSystemMessage.createThreadStarterSystemMessage(message);
        } else if (tmp.AUTO_MODERATION_ACTION === type) {
          return AutoModerationActionSystemMessage.createAutoModerationActionSystemMessage(message);
        } else if (tmp.ROLE_SUBSCRIPTION_PURCHASE === type) {
          return RoleSubscriptionPurchaseSystemMessage.createRoleSubscriptionPurchaseSystemMessage(message);
        } else if (tmp.PURCHASE_NOTIFICATION === type) {
          return PurchaseNotificationSystemMessage.createPurchaseNotificationSystemMessage(message);
        } else if (tmp.STAGE_START === type) {
          return StageStartSystemMessage.createStageStartSystemMessage(message);
        } else if (tmp.STAGE_END === type) {
          return StageEndSystemMessage.createStageEndSystemMessage(message);
        } else if (tmp.STAGE_TOPIC === type) {
          return StageTopicSystemMessage.createStageTopicSystemMessage(message);
        } else if (tmp.STAGE_SPEAKER === type) {
          return StageSpeakerSystemMessage.createStageSpeakerSystemMessage(message);
        } else if (tmp.STAGE_RAISE_HAND === type) {
          return StageRaiseHandSystemMessage.createStageRaiseHandSystemMessage(message);
        } else if (tmp.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION === type) {
          return ApplicationSubscriptionPurchaseSystemMessage.createApplicationSubscriptionPurchaseSystemMessage(
            message,
          );
        } else {
          if (tmp.PRIVATE_CHANNEL_INTEGRATION_ADDED !== type) {
            if (tmp.PRIVATE_CHANNEL_INTEGRATION_REMOVED !== type) {
              if (tmp.GUILD_INCIDENT_ALERT_MODE_ENABLED === type) {
                return GuildAlertModeSystemMessage.createGuildAlertModeEnabledSystemMessage(message);
              } else if (tmp.GUILD_INCIDENT_ALERT_MODE_DISABLED === type) {
                return GuildAlertModeSystemMessage.createGuildAlertModeDisabledSystemMessage(message);
              } else if (tmp.GUILD_INCIDENT_REPORT_RAID === type) {
                return GuildReportRaidSystemMessage.createGuildReportRaidSystemMessage(message);
              } else if (tmp.GUILD_INCIDENT_REPORT_FALSE_ALARM === type) {
                return GuildReportFalseAlarmSystemMessage.createGuildReportFalseAlarmSystemMessage(message);
              } else if (tmp.POLL_RESULT === type) {
                return PollResultSystemMessage.createPollResultSystemMessage(message);
              } else if (tmp.CHANNEL_LINKED_TO_LOBBY === type) {
                return ChannelLinkedToLobbySystemMessage.createChannelLinkedToLobbySystemMessage(message);
              } else if (tmp.IN_GAME_MESSAGE_NUX === type) {
                return InGameMessageNuxSystemMessage.createInGameMessageNuxSystemMessage(message);
              } else {
                if (tmp.GUILD_JOIN_REQUEST_ACCEPT_NOTIFICATION !== type) {
                  if (tmp.GUILD_JOIN_REQUEST_REJECT_NOTIFICATION !== type) {
                    if (tmp.GUILD_JOIN_REQUEST_WITHDRAWN_NOTIFICATION !== type) {
                      if (tmp.PREMIUM_GROUP_INVITE === type) {
                        return PremiumGroupInviteSystemMessage.createPremiumGroupInviteSystemMessage(message);
                      } else if (tmp.PREMIUM_REFERRAL === type) {
                        return ReferralSystemMessage.createReferralSystemMessage(message);
                      } else if (tmp.VOICE_SESSION === type) {
                        return VoiceSessionSystemMessage.createVoiceSessionSystemMessage(message);
                      } else if (tmp.FRIEND_REQUEST_ACCEPTED === type) {
                        return FriendRequestAcceptedSystemMessage.createFriendRequestAcceptedSystemMessage(message);
                      } else if (tmp.GIFTING_PROMPT === type) {
                        return GiftIntentSystemMessage.createGiftIntentSystemMessage(message);
                      } else {
                        return null;
                      }
                    }
                  }
                }
                return JoinRequestNotificationSystemMessage.createJoinRequestNotificationSystemMessage(message);
              }
            }
          }
          return PrivateChannelIntegrationSystemMessage.createPrivateChannelIntegrationSystemMessage(
            message,
            message.message.type,
          );
        }
      }
    }
    return ApplicationCommandSourceSystemMessage.createApplicationCommandSourceSystemMessage(message);
  }
};
