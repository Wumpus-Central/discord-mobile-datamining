// === Module 14375: SystemMessage ===

// Module 14375 (SystemMessage)
import AddRecipientSystemMessage from "AddRecipientSystemMessage" /* 14376 */;
import RemoveRecipientSystemMessage from "RemoveRecipientSystemMessage" /* 14377 */;
import CallSystemMessage from "CallSystemMessage" /* 14378 */;
import ChangeChannelNameSystemMessage from "ChangeChannelNameSystemMessage" /* 14379 */;
import ChangeChannelIconSystemMessage from "ChangeChannelIconSystemMessage" /* 14380 */;
import ChannelPinnedMessageSystemMessage from "ChannelPinnedMessageSystemMessage" /* 14381 */;
import UserJoinSystemMessage from "UserJoinSystemMessage" /* 14382 */;
import UserPremiumGuildSubscriptionSystemMessage from "UserPremiumGuildSubscriptionSystemMessage" /* 14385 */;
import UserPremiumGuildSubscriptionTierAchievedSystemMessage from "UserPremiumGuildSubscriptionTierAchievedSystemMessage" /* 14387 */;
import ChannelFollowAddSystemMessage from "ChannelFollowAddSystemMessage" /* 14388 */;
import GuildStreamSystemMessage from "GuildStreamSystemMessage" /* 14389 */;
import GuildDiscoverySystemMessage from "GuildDiscoverySystemMessage" /* 14390 */;
import ApplicationCommandSourceSystemMessage from "ApplicationCommandSourceSystemMessage" /* 14391 */;
import NewThreadSystemMessage from "NewThreadSystemMessage" /* 14393 */;
import ThreadStarterSystemMessage from "ThreadStarterSystemMessage" /* 14394 */;
import AutoModerationActionSystemMessage from "AutoModerationActionSystemMessage" /* 14395 */;
import RoleSubscriptionPurchaseSystemMessage from "RoleSubscriptionPurchaseSystemMessage" /* 14401 */;
import PurchaseNotificationSystemMessage from "PurchaseNotificationSystemMessage" /* 14402 */;
import StageStartSystemMessage from "StageStartSystemMessage" /* 14404 */;
import StageEndSystemMessage from "StageEndSystemMessage" /* 14405 */;
import StageTopicSystemMessage from "StageTopicSystemMessage" /* 14406 */;
import StageSpeakerSystemMessage from "StageSpeakerSystemMessage" /* 14407 */;
import StageRaiseHandSystemMessage from "StageRaiseHandSystemMessage" /* 14408 */;
import ApplicationSubscriptionPurchaseSystemMessage from "ApplicationSubscriptionPurchaseSystemMessage" /* 14409 */;
import PrivateChannelIntegrationSystemMessage from "PrivateChannelIntegrationSystemMessage" /* 14410 */;
import GuildAlertModeSystemMessage from "GuildAlertModeSystemMessage" /* 14411 */;
import GuildReportRaidSystemMessage from "GuildReportRaidSystemMessage" /* 14414 */;
import GuildReportFalseAlarmSystemMessage from "GuildReportFalseAlarmSystemMessage" /* 14415 */;
import PollResultSystemMessage from "PollResultSystemMessage" /* 14416 */;
import ChannelLinkedToLobbySystemMessage from "ChannelLinkedToLobbySystemMessage" /* 14425 */;
import InGameMessageNuxSystemMessage from "InGameMessageNuxSystemMessage" /* 14426 */;
import JoinRequestNotificationSystemMessage from "JoinRequestNotificationSystemMessage" /* 14427 */;
import PremiumGroupInviteSystemMessage from "PremiumGroupInviteSystemMessage" /* 14428 */;
import ReferralSystemMessage from "ReferralSystemMessage" /* 14431 */;
import VoiceSessionSystemMessage from "VoiceSessionSystemMessage" /* 14436 */;
import FriendRequestAcceptedSystemMessage from "FriendRequestAcceptedSystemMessage" /* 14437 */;
import GiftIntentSystemMessage from "GiftIntentSystemMessage" /* 14439 */;
import GuildSpaceSystemMessage from "GuildSpaceSystemMessage" /* 14444 */;
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