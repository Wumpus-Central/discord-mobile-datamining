// === Module 8183: createSystemMessageContent ===

// Module 8183 (createSystemMessageContent)
import set from "set" /* 2 */;
import createAddRecipientSystemMessage from "createAddRecipientSystemMessage" /* 8184 */;
import createRemoveRecipientSystemMessage from "createRemoveRecipientSystemMessage" /* 8201 */;
import createCallSystemMessage from "createCallSystemMessage" /* 8202 */;
import createChangeChannelNameSystemMessage from "createChangeChannelNameSystemMessage" /* 8205 */;
import createChangeChannelIconSystemMessage from "createChangeChannelIconSystemMessage" /* 8206 */;
import createChannelPinnedMessageSystemMessage from "createChannelPinnedMessageSystemMessage" /* 8207 */;
import createUserJoinSystemMessage from "createUserJoinSystemMessage" /* 8208 */;
import createUserPremiumGuildSubscriptionSystemMessage from "createUserPremiumGuildSubscriptionSystemMessage" /* 8222 */;
import createUserPremiumGuildSubscriptionTierAchievedSystemMessage from "createUserPremiumGuildSubscriptionTierAchievedSystemMessage" /* 8224 */;
import createChannelFollowAddSystemMessage from "createChannelFollowAddSystemMessage" /* 8225 */;
import createGuildStreamSystemMessage from "createGuildStreamSystemMessage" /* 8226 */;
import createGuildDiscoveryDisqualifiedSystemMessage from "createGuildDiscoveryDisqualifiedSystemMessage" /* 8227 */;
import createApplicationCommandSourceSystemMessage from "createApplicationCommandSourceSystemMessage" /* 8228 */;
import createNewThreadSystemMessage from "createNewThreadSystemMessage" /* 8230 */;
import createThreadStarterSystemMessage from "createThreadStarterSystemMessage" /* 8231 */;
import createAutoModerationActionSystemMessage from "createAutoModerationActionSystemMessage" /* 8232 */;
import createRoleSubscriptionPurchaseSystemMessage from "createRoleSubscriptionPurchaseSystemMessage" /* 8241 */;
import createPurchaseNotificationSystemMessage from "createPurchaseNotificationSystemMessage" /* 8242 */;
import createStageStartSystemMessage from "createStageStartSystemMessage" /* 8244 */;
import createStageEndSystemMessage from "createStageEndSystemMessage" /* 8245 */;
import createStageTopicSystemMessage from "createStageTopicSystemMessage" /* 8246 */;
import createStageSpeakerSystemMessage from "createStageSpeakerSystemMessage" /* 8247 */;
import createStageRaiseHandSystemMessage from "createStageRaiseHandSystemMessage" /* 8248 */;
import createApplicationSubscriptionPurchaseSystemMessage from "createApplicationSubscriptionPurchaseSystemMessage" /* 8249 */;
import createPrivateChannelIntegrationSystemMessage from "createPrivateChannelIntegrationSystemMessage" /* 8250 */;
import nativeStyleProperties from "nativeStyleProperties" /* 8251 */;
import createGuildReportRaidSystemMessage from "createGuildReportRaidSystemMessage" /* 8258 */;
import createGuildReportFalseAlarmSystemMessage from "createGuildReportFalseAlarmSystemMessage" /* 8259 */;
import createPollResultSystemMessage from "createPollResultSystemMessage" /* 8260 */;
import createChannelLinkedToLobbySystemMessage from "createChannelLinkedToLobbySystemMessage" /* 8262 */;
import createInGameMessageNuxSystemMessage from "createInGameMessageNuxSystemMessage" /* 8263 */;
import createJoinRequestNotificationSystemMessage from "createJoinRequestNotificationSystemMessage" /* 8264 */;
import createPremiumGroupInviteSystemMessage from "createPremiumGroupInviteSystemMessage" /* 8265 */;
import createReferralSystemMessage from "createReferralSystemMessage" /* 8270 */;
import createVoiceSessionSystemMessage from "createVoiceSessionSystemMessage" /* 8282 */;
import createFriendRequestAcceptedSystemMessage from "createFriendRequestAcceptedSystemMessage" /* 8286 */;
import createGiftIntentSystemMessage from "createGiftIntentSystemMessage" /* 8288 */;
import ME from "ME" /* 676 */;

({ MessageTypes: obj1, BoostedGuildTiers: c3 } = ME);
const result = set.fileFinishedImporting("modules/messages/native/renderer/system_messages/SystemMessage.tsx");

export const createSystemMessageContent = function createSystemMessageContent(message) {
  const type = message.message.type;
  if (constants.RECIPIENT_ADD === type) {
    return createAddRecipientSystemMessage.createAddRecipientSystemMessage(message);
  } else if (tmp.RECIPIENT_REMOVE === type) {
    return createRemoveRecipientSystemMessage.createRemoveRecipientSystemMessage(message);
  } else if (tmp.CALL === type) {
    return createCallSystemMessage.createCallSystemMessage(message);
  } else if (tmp.CHANNEL_NAME_CHANGE === type) {
    return createChangeChannelNameSystemMessage.createChangeChannelNameSystemMessage(message);
  } else if (tmp.CHANNEL_ICON_CHANGE === type) {
    return createChangeChannelIconSystemMessage.createChangeChannelIconSystemMessage(message);
  } else if (tmp.CHANNEL_PINNED_MESSAGE === type) {
    return createChannelPinnedMessageSystemMessage.createChannelPinnedMessageSystemMessage(message);
  } else if (tmp.USER_JOIN === type) {
    return createUserJoinSystemMessage.createUserJoinSystemMessage(message);
  } else if (tmp.GUILD_BOOST === type) {
    return createUserPremiumGuildSubscriptionSystemMessage.createUserPremiumGuildSubscriptionSystemMessage(message);
  } else if (tmp.GUILD_BOOST_TIER_1 === type) {
    return createUserPremiumGuildSubscriptionTierAchievedSystemMessage.createUserPremiumGuildSubscriptionTierAchievedSystemMessage(message, closure_3.TIER_1);
  } else if (tmp.GUILD_BOOST_TIER_2 === type) {
    return createUserPremiumGuildSubscriptionTierAchievedSystemMessage.createUserPremiumGuildSubscriptionTierAchievedSystemMessage(message, closure_3.TIER_2);
  } else if (tmp.GUILD_BOOST_TIER_3 === type) {
    return createUserPremiumGuildSubscriptionTierAchievedSystemMessage.createUserPremiumGuildSubscriptionTierAchievedSystemMessage(message, closure_3.TIER_3);
  } else if (tmp.CHANNEL_FOLLOW_ADD === type) {
    return createChannelFollowAddSystemMessage.createChannelFollowAddSystemMessage(message);
  } else if (tmp.GUILD_STREAM === type) {
    return createGuildStreamSystemMessage.createGuildStreamSystemMessage(message);
  } else if (tmp.GUILD_DISCOVERY_DISQUALIFIED === type) {
    return createGuildDiscoveryDisqualifiedSystemMessage.createGuildDiscoveryDisqualifiedSystemMessage(message);
  } else if (tmp.GUILD_DISCOVERY_REQUALIFIED === type) {
    return createGuildDiscoveryDisqualifiedSystemMessage.createGuildDiscoveryRequalifiedSystemMessage(message);
  } else if (tmp.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING === type) {
    return createGuildDiscoveryDisqualifiedSystemMessage.createGuildDiscoveryGracePeriodInitialWarningSystemMessage(message);
  } else if (tmp.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING === type) {
    return createGuildDiscoveryDisqualifiedSystemMessage.createGuildDiscoveryGracePeriodFinalWarningSystemMessage(message);
  } else {
    if (tmp.CHAT_INPUT_COMMAND !== type) {
      if (tmp.CONTEXT_MENU_COMMAND !== type) {
        if (tmp.GUILD_INVITE_REMINDER === type) {
          return null;
        } else if (tmp.THREAD_CREATED === type) {
          return createNewThreadSystemMessage.createNewThreadSystemMessage(message);
        } else if (tmp.THREAD_STARTER_MESSAGE === type) {
          return createThreadStarterSystemMessage.createThreadStarterSystemMessage(message);
        } else if (tmp.AUTO_MODERATION_ACTION === type) {
          return createAutoModerationActionSystemMessage.createAutoModerationActionSystemMessage(message);
        } else if (tmp.ROLE_SUBSCRIPTION_PURCHASE === type) {
          return createRoleSubscriptionPurchaseSystemMessage.createRoleSubscriptionPurchaseSystemMessage(message);
        } else if (tmp.PURCHASE_NOTIFICATION === type) {
          return createPurchaseNotificationSystemMessage.createPurchaseNotificationSystemMessage(message);
        } else if (tmp.STAGE_START === type) {
          return createStageStartSystemMessage.createStageStartSystemMessage(message);
        } else if (tmp.STAGE_END === type) {
          return createStageEndSystemMessage.createStageEndSystemMessage(message);
        } else if (tmp.STAGE_TOPIC === type) {
          return createStageTopicSystemMessage.createStageTopicSystemMessage(message);
        } else if (tmp.STAGE_SPEAKER === type) {
          return createStageSpeakerSystemMessage.createStageSpeakerSystemMessage(message);
        } else if (tmp.STAGE_RAISE_HAND === type) {
          return createStageRaiseHandSystemMessage.createStageRaiseHandSystemMessage(message);
        } else if (tmp.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION === type) {
          return createApplicationSubscriptionPurchaseSystemMessage.createApplicationSubscriptionPurchaseSystemMessage(message);
        } else {
          if (tmp.PRIVATE_CHANNEL_INTEGRATION_ADDED !== type) {
            if (tmp.PRIVATE_CHANNEL_INTEGRATION_REMOVED !== type) {
              if (tmp.GUILD_INCIDENT_ALERT_MODE_ENABLED === type) {
                return nativeStyleProperties.createGuildAlertModeEnabledSystemMessage(message);
              } else if (tmp.GUILD_INCIDENT_ALERT_MODE_DISABLED === type) {
                return nativeStyleProperties.createGuildAlertModeDisabledSystemMessage(message);
              } else if (tmp.GUILD_INCIDENT_REPORT_RAID === type) {
                return createGuildReportRaidSystemMessage.createGuildReportRaidSystemMessage(message);
              } else if (tmp.GUILD_INCIDENT_REPORT_FALSE_ALARM === type) {
                return createGuildReportFalseAlarmSystemMessage.createGuildReportFalseAlarmSystemMessage(message);
              } else if (tmp.POLL_RESULT === type) {
                return createPollResultSystemMessage.createPollResultSystemMessage(message);
              } else if (tmp.CHANNEL_LINKED_TO_LOBBY === type) {
                return createChannelLinkedToLobbySystemMessage.createChannelLinkedToLobbySystemMessage(message);
              } else if (tmp.IN_GAME_MESSAGE_NUX === type) {
                return createInGameMessageNuxSystemMessage.createInGameMessageNuxSystemMessage(message);
              } else {
                if (tmp.GUILD_JOIN_REQUEST_ACCEPT_NOTIFICATION !== type) {
                  if (tmp.GUILD_JOIN_REQUEST_REJECT_NOTIFICATION !== type) {
                    if (tmp.GUILD_JOIN_REQUEST_WITHDRAWN_NOTIFICATION !== type) {
                      if (tmp.PREMIUM_GROUP_INVITE === type) {
                        return createPremiumGroupInviteSystemMessage.createPremiumGroupInviteSystemMessage(message);
                      } else if (tmp.PREMIUM_REFERRAL === type) {
                        return createReferralSystemMessage.createReferralSystemMessage(message);
                      } else if (tmp.VOICE_SESSION === type) {
                        return createVoiceSessionSystemMessage.createVoiceSessionSystemMessage(message);
                      } else if (tmp.FRIEND_REQUEST_ACCEPTED === type) {
                        return createFriendRequestAcceptedSystemMessage.createFriendRequestAcceptedSystemMessage(message);
                      } else if (tmp.GIFTING_PROMPT === type) {
                        return createGiftIntentSystemMessage.createGiftIntentSystemMessage(message);
                      } else {
                        return null;
                      }
                    }
                  }
                }
                return createJoinRequestNotificationSystemMessage.createJoinRequestNotificationSystemMessage(message);
              }
            }
          }
          return createPrivateChannelIntegrationSystemMessage.createPrivateChannelIntegrationSystemMessage(message, message.message.type);
        }
      }
    }
    return createApplicationCommandSourceSystemMessage.createApplicationCommandSourceSystemMessage(message);
  }
};