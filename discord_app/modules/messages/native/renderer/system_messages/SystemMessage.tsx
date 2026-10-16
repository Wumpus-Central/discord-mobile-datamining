// === Module 8197: SystemMessage ===

// Module 8197 (SystemMessage)
import AddRecipientSystemMessage from "AddRecipientSystemMessage" /* 8198 */;
import RemoveRecipientSystemMessage from "RemoveRecipientSystemMessage" /* 8216 */;
import CallSystemMessage from "CallSystemMessage" /* 8217 */;
import ChangeChannelNameSystemMessage from "ChangeChannelNameSystemMessage" /* 8220 */;
import ChangeChannelIconSystemMessage from "ChangeChannelIconSystemMessage" /* 8221 */;
import ChannelPinnedMessageSystemMessage from "ChannelPinnedMessageSystemMessage" /* 8222 */;
import UserJoinSystemMessage from "UserJoinSystemMessage" /* 8223 */;
import UserPremiumGuildSubscriptionSystemMessage from "UserPremiumGuildSubscriptionSystemMessage" /* 8244 */;
import UserPremiumGuildSubscriptionTierAchievedSystemMessage from "UserPremiumGuildSubscriptionTierAchievedSystemMessage" /* 8246 */;
import ChannelFollowAddSystemMessage from "ChannelFollowAddSystemMessage" /* 8257 */;
import GuildStreamSystemMessage from "GuildStreamSystemMessage" /* 8258 */;
import GuildDiscoverySystemMessage from "GuildDiscoverySystemMessage" /* 8259 */;
import ApplicationCommandSourceSystemMessage from "ApplicationCommandSourceSystemMessage" /* 8260 */;
import NewThreadSystemMessage from "NewThreadSystemMessage" /* 8262 */;
import ThreadStarterSystemMessage from "ThreadStarterSystemMessage" /* 8263 */;
import AutoModerationActionSystemMessage from "AutoModerationActionSystemMessage" /* 8264 */;
import RoleSubscriptionPurchaseSystemMessage from "RoleSubscriptionPurchaseSystemMessage" /* 8274 */;
import PurchaseNotificationSystemMessage from "PurchaseNotificationSystemMessage" /* 8275 */;
import StageStartSystemMessage from "StageStartSystemMessage" /* 8277 */;
import StageEndSystemMessage from "StageEndSystemMessage" /* 8278 */;
import StageTopicSystemMessage from "StageTopicSystemMessage" /* 8279 */;
import StageSpeakerSystemMessage from "StageSpeakerSystemMessage" /* 8280 */;
import StageRaiseHandSystemMessage from "StageRaiseHandSystemMessage" /* 8281 */;
import ApplicationSubscriptionPurchaseSystemMessage from "ApplicationSubscriptionPurchaseSystemMessage" /* 8282 */;
import PrivateChannelIntegrationSystemMessage from "PrivateChannelIntegrationSystemMessage" /* 8283 */;
import GuildAlertModeSystemMessage from "GuildAlertModeSystemMessage" /* 8284 */;
import GuildReportRaidSystemMessage from "GuildReportRaidSystemMessage" /* 8291 */;
import GuildReportFalseAlarmSystemMessage from "GuildReportFalseAlarmSystemMessage" /* 8292 */;
import PollResultSystemMessage from "PollResultSystemMessage" /* 8293 */;
import ChannelLinkedToLobbySystemMessage from "ChannelLinkedToLobbySystemMessage" /* 8295 */;
import InGameMessageNuxSystemMessage from "InGameMessageNuxSystemMessage" /* 8296 */;
import JoinRequestNotificationSystemMessage from "JoinRequestNotificationSystemMessage" /* 8297 */;
import PremiumGroupInviteSystemMessage from "PremiumGroupInviteSystemMessage" /* 8298 */;
import ReferralSystemMessage from "ReferralSystemMessage" /* 8304 */;
import VoiceSessionSystemMessage from "VoiceSessionSystemMessage" /* 8321 */;
import FriendRequestAcceptedSystemMessage from "FriendRequestAcceptedSystemMessage" /* 8325 */;
import GiftIntentSystemMessage from "GiftIntentSystemMessage" /* 8327 */;
import GuildSpaceSystemMessage from "GuildSpaceSystemMessage" /* 8338 */;
import Constants from "Constants" /* 1087 */;
import size from "module_2" /* 2 */;

({ MessageTypes: c2, BoostedGuildTiers: c3 } = Constants);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/SystemMessage.tsx");

export const createSystemMessageContent = function createSystemMessageContent(message) {
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
};