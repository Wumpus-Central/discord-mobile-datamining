// === Module 14323: SystemMessage ===

// Module 14323 (SystemMessage)
import AddRecipientSystemMessage from "AddRecipientSystemMessage" /* 14324 */;
import RemoveRecipientSystemMessage from "RemoveRecipientSystemMessage" /* 14325 */;
import CallSystemMessage from "CallSystemMessage" /* 14326 */;
import ChangeChannelNameSystemMessage from "ChangeChannelNameSystemMessage" /* 14327 */;
import ChangeChannelIconSystemMessage from "ChangeChannelIconSystemMessage" /* 14328 */;
import ChannelPinnedMessageSystemMessage from "ChannelPinnedMessageSystemMessage" /* 14329 */;
import UserJoinSystemMessage from "UserJoinSystemMessage" /* 14330 */;
import UserPremiumGuildSubscriptionSystemMessage from "UserPremiumGuildSubscriptionSystemMessage" /* 14333 */;
import UserPremiumGuildSubscriptionTierAchievedSystemMessage from "UserPremiumGuildSubscriptionTierAchievedSystemMessage" /* 14335 */;
import ChannelFollowAddSystemMessage from "ChannelFollowAddSystemMessage" /* 14336 */;
import GuildStreamSystemMessage from "GuildStreamSystemMessage" /* 14337 */;
import GuildDiscoverySystemMessage from "GuildDiscoverySystemMessage" /* 14338 */;
import ApplicationCommandSourceSystemMessage from "ApplicationCommandSourceSystemMessage" /* 14339 */;
import NewThreadSystemMessage from "NewThreadSystemMessage" /* 14341 */;
import ThreadStarterSystemMessage from "ThreadStarterSystemMessage" /* 14342 */;
import AutoModerationActionSystemMessage from "AutoModerationActionSystemMessage" /* 14343 */;
import RoleSubscriptionPurchaseSystemMessage from "RoleSubscriptionPurchaseSystemMessage" /* 14349 */;
import PurchaseNotificationSystemMessage from "PurchaseNotificationSystemMessage" /* 14350 */;
import StageStartSystemMessage from "StageStartSystemMessage" /* 14352 */;
import StageEndSystemMessage from "StageEndSystemMessage" /* 14353 */;
import StageTopicSystemMessage from "StageTopicSystemMessage" /* 14354 */;
import StageSpeakerSystemMessage from "StageSpeakerSystemMessage" /* 14355 */;
import StageRaiseHandSystemMessage from "StageRaiseHandSystemMessage" /* 14356 */;
import ApplicationSubscriptionPurchaseSystemMessage from "ApplicationSubscriptionPurchaseSystemMessage" /* 14357 */;
import PrivateChannelIntegrationSystemMessage from "PrivateChannelIntegrationSystemMessage" /* 14358 */;
import GuildAlertModeSystemMessage from "GuildAlertModeSystemMessage" /* 14359 */;
import GuildReportRaidSystemMessage from "GuildReportRaidSystemMessage" /* 14362 */;
import GuildReportFalseAlarmSystemMessage from "GuildReportFalseAlarmSystemMessage" /* 14363 */;
import PollResultSystemMessage from "PollResultSystemMessage" /* 14364 */;
import ChannelLinkedToLobbySystemMessage from "ChannelLinkedToLobbySystemMessage" /* 14373 */;
import InGameMessageNuxSystemMessage from "InGameMessageNuxSystemMessage" /* 14374 */;
import JoinRequestNotificationSystemMessage from "JoinRequestNotificationSystemMessage" /* 14375 */;
import PremiumGroupInviteSystemMessage from "PremiumGroupInviteSystemMessage" /* 14376 */;
import ReferralSystemMessage from "ReferralSystemMessage" /* 14379 */;
import VoiceSessionSystemMessage from "VoiceSessionSystemMessage" /* 14384 */;
import FriendRequestAcceptedSystemMessage from "FriendRequestAcceptedSystemMessage" /* 14385 */;
import GiftIntentSystemMessage from "GiftIntentSystemMessage" /* 14387 */;
import GuildSpaceSystemMessage from "GuildSpaceSystemMessage" /* 14392 */;
import Constants from "Constants" /* 1071 */;
import size from "module_2" /* 2 */;

({ MessageTypes: c2, BoostedGuildTiers: c3 } = Constants);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/SystemMessage.tsx");

export function createSystemMessageContent(message) {
  const type = message.message.type;
  if (constants.RECIPIENT_ADD === type) {
    return AddRecipientSystemMessage.createAddRecipientSystemMessage(message);
  } else if (constants.RECIPIENT_REMOVE === type) {
    return RemoveRecipientSystemMessage.createRemoveRecipientSystemMessage(message);
  } else if (constants.CALL === type) {
    return CallSystemMessage.createCallSystemMessage(message);
  } else if (constants.CHANNEL_NAME_CHANGE === type) {
    return ChangeChannelNameSystemMessage.createChangeChannelNameSystemMessage(message);
  } else if (constants.CHANNEL_ICON_CHANGE === type) {
    return ChangeChannelIconSystemMessage.createChangeChannelIconSystemMessage(message);
  } else if (constants.CHANNEL_PINNED_MESSAGE === type) {
    return ChannelPinnedMessageSystemMessage.createChannelPinnedMessageSystemMessage(message);
  } else if (constants.USER_JOIN === type) {
    return UserJoinSystemMessage.createUserJoinSystemMessage(message);
  } else if (constants.GUILD_BOOST === type) {
    return UserPremiumGuildSubscriptionSystemMessage.createUserPremiumGuildSubscriptionSystemMessage(message);
  } else if (constants.GUILD_BOOST_TIER_1 === type) {
    return UserPremiumGuildSubscriptionTierAchievedSystemMessage.createUserPremiumGuildSubscriptionTierAchievedSystemMessage(message, React3.TIER_1);
  } else if (constants.GUILD_BOOST_TIER_2 === type) {
    return UserPremiumGuildSubscriptionTierAchievedSystemMessage.createUserPremiumGuildSubscriptionTierAchievedSystemMessage(message, React3.TIER_2);
  } else if (constants.GUILD_BOOST_TIER_3 === type) {
    return UserPremiumGuildSubscriptionTierAchievedSystemMessage.createUserPremiumGuildSubscriptionTierAchievedSystemMessage(message, React3.TIER_3);
  } else if (constants.CHANNEL_FOLLOW_ADD === type) {
    return ChannelFollowAddSystemMessage.createChannelFollowAddSystemMessage(message);
  } else if (constants.GUILD_STREAM === type) {
    return GuildStreamSystemMessage.createGuildStreamSystemMessage(message);
  } else if (constants.GUILD_DISCOVERY_DISQUALIFIED === type) {
    return GuildDiscoverySystemMessage.createGuildDiscoveryDisqualifiedSystemMessage(message);
  } else if (constants.GUILD_DISCOVERY_REQUALIFIED === type) {
    return GuildDiscoverySystemMessage.createGuildDiscoveryRequalifiedSystemMessage(message);
  } else if (constants.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING === type) {
    return GuildDiscoverySystemMessage.createGuildDiscoveryGracePeriodInitialWarningSystemMessage(message);
  } else if (constants.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING === type) {
    return GuildDiscoverySystemMessage.createGuildDiscoveryGracePeriodFinalWarningSystemMessage(message);
  } else {
    if (constants.CHAT_INPUT_COMMAND !== type) {
      if (constants.CONTEXT_MENU_COMMAND !== type) {
        if (constants.GUILD_INVITE_REMINDER === type) {
          return null;
        } else if (constants.THREAD_CREATED === type) {
          return NewThreadSystemMessage.createNewThreadSystemMessage(message);
        } else if (constants.THREAD_STARTER_MESSAGE === type) {
          return ThreadStarterSystemMessage.createThreadStarterSystemMessage(message);
        } else if (constants.AUTO_MODERATION_ACTION === type) {
          return AutoModerationActionSystemMessage.createAutoModerationActionSystemMessage(message);
        } else if (constants.ROLE_SUBSCRIPTION_PURCHASE === type) {
          return RoleSubscriptionPurchaseSystemMessage.createRoleSubscriptionPurchaseSystemMessage(message);
        } else if (constants.PURCHASE_NOTIFICATION === type) {
          return PurchaseNotificationSystemMessage.createPurchaseNotificationSystemMessage(message);
        } else if (constants.STAGE_START === type) {
          return StageStartSystemMessage.createStageStartSystemMessage(message);
        } else if (constants.STAGE_END === type) {
          return StageEndSystemMessage.createStageEndSystemMessage(message);
        } else if (constants.STAGE_TOPIC === type) {
          return StageTopicSystemMessage.createStageTopicSystemMessage(message);
        } else if (constants.STAGE_SPEAKER === type) {
          return StageSpeakerSystemMessage.createStageSpeakerSystemMessage(message);
        } else if (constants.STAGE_RAISE_HAND === type) {
          return StageRaiseHandSystemMessage.createStageRaiseHandSystemMessage(message);
        } else if (constants.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION === type) {
          return ApplicationSubscriptionPurchaseSystemMessage.createApplicationSubscriptionPurchaseSystemMessage(message);
        } else {
          if (constants.PRIVATE_CHANNEL_INTEGRATION_ADDED !== type) {
            if (constants.PRIVATE_CHANNEL_INTEGRATION_REMOVED !== type) {
              if (constants.GUILD_INCIDENT_ALERT_MODE_ENABLED === type) {
                return GuildAlertModeSystemMessage.createGuildAlertModeEnabledSystemMessage(message);
              } else if (constants.GUILD_INCIDENT_ALERT_MODE_DISABLED === type) {
                return GuildAlertModeSystemMessage.createGuildAlertModeDisabledSystemMessage(message);
              } else if (constants.GUILD_INCIDENT_REPORT_RAID === type) {
                return GuildReportRaidSystemMessage.createGuildReportRaidSystemMessage(message);
              } else if (constants.GUILD_INCIDENT_REPORT_FALSE_ALARM === type) {
                return GuildReportFalseAlarmSystemMessage.createGuildReportFalseAlarmSystemMessage(message);
              } else if (constants.POLL_RESULT === type) {
                return PollResultSystemMessage.createPollResultSystemMessage(message);
              } else if (constants.CHANNEL_LINKED_TO_LOBBY === type) {
                return ChannelLinkedToLobbySystemMessage.createChannelLinkedToLobbySystemMessage(message);
              } else if (constants.IN_GAME_MESSAGE_NUX === type) {
                return InGameMessageNuxSystemMessage.createInGameMessageNuxSystemMessage(message);
              } else {
                if (constants.GUILD_JOIN_REQUEST_ACCEPT_NOTIFICATION !== type) {
                  if (constants.GUILD_JOIN_REQUEST_REJECT_NOTIFICATION !== type) {
                    if (constants.GUILD_JOIN_REQUEST_WITHDRAWN_NOTIFICATION !== type) {
                      if (constants.PREMIUM_GROUP_INVITE === type) {
                        return PremiumGroupInviteSystemMessage.createPremiumGroupInviteSystemMessage(message);
                      } else if (constants.PREMIUM_REFERRAL === type) {
                        return ReferralSystemMessage.createReferralSystemMessage(message);
                      } else if (constants.VOICE_SESSION === type) {
                        return VoiceSessionSystemMessage.createVoiceSessionSystemMessage(message);
                      } else if (constants.FRIEND_REQUEST_ACCEPTED === type) {
                        return FriendRequestAcceptedSystemMessage.createFriendRequestAcceptedSystemMessage(message);
                      } else if (constants.GIFTING_PROMPT === type) {
                        return GiftIntentSystemMessage.createGiftIntentSystemMessage(message);
                      } else if (constants.GUILD_SPACE_MESSAGE === type) {
                        return GuildSpaceSystemMessage.createGuildSpaceSystemMessage(message);
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
          return PrivateChannelIntegrationSystemMessage.createPrivateChannelIntegrationSystemMessage(message, message.message.type);
        }
      }
    }
    return ApplicationCommandSourceSystemMessage.createApplicationCommandSourceSystemMessage(message);
  }
}