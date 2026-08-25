// === Module 8219: createSystemMessageContent ===

// Module 8219 (createSystemMessageContent)
import set from "set" /* 2 */;
import createAddRecipientSystemMessage from "createAddRecipientSystemMessage" /* 8220 */;
import createRemoveRecipientSystemMessage from "createRemoveRecipientSystemMessage" /* 8238 */;
import createCallSystemMessage from "createCallSystemMessage" /* 8239 */;
import createChangeChannelNameSystemMessage from "createChangeChannelNameSystemMessage" /* 8242 */;
import createChangeChannelIconSystemMessage from "createChangeChannelIconSystemMessage" /* 8243 */;
import createChannelPinnedMessageSystemMessage from "createChannelPinnedMessageSystemMessage" /* 8244 */;
import createUserJoinSystemMessage from "createUserJoinSystemMessage" /* 8245 */;
import createUserPremiumGuildSubscriptionSystemMessage from "createUserPremiumGuildSubscriptionSystemMessage" /* 8263 */;
import createUserPremiumGuildSubscriptionTierAchievedSystemMessage from "createUserPremiumGuildSubscriptionTierAchievedSystemMessage" /* 8265 */;
import createChannelFollowAddSystemMessage from "createChannelFollowAddSystemMessage" /* 8266 */;
import createGuildStreamSystemMessage from "createGuildStreamSystemMessage" /* 8267 */;
import createGuildDiscoveryDisqualifiedSystemMessage from "createGuildDiscoveryDisqualifiedSystemMessage" /* 8268 */;
import createApplicationCommandSourceSystemMessage from "createApplicationCommandSourceSystemMessage" /* 8269 */;
import createNewThreadSystemMessage from "createNewThreadSystemMessage" /* 8271 */;
import createThreadStarterSystemMessage from "createThreadStarterSystemMessage" /* 8272 */;
import createAutoModerationActionSystemMessage from "createAutoModerationActionSystemMessage" /* 8273 */;
import createRoleSubscriptionPurchaseSystemMessage from "createRoleSubscriptionPurchaseSystemMessage" /* 8282 */;
import createPurchaseNotificationSystemMessage from "createPurchaseNotificationSystemMessage" /* 8283 */;
import createStageStartSystemMessage from "createStageStartSystemMessage" /* 8285 */;
import createStageEndSystemMessage from "createStageEndSystemMessage" /* 8286 */;
import createStageTopicSystemMessage from "createStageTopicSystemMessage" /* 8287 */;
import createStageSpeakerSystemMessage from "createStageSpeakerSystemMessage" /* 8288 */;
import createStageRaiseHandSystemMessage from "createStageRaiseHandSystemMessage" /* 8289 */;
import createApplicationSubscriptionPurchaseSystemMessage from "createApplicationSubscriptionPurchaseSystemMessage" /* 8290 */;
import createPrivateChannelIntegrationSystemMessage from "createPrivateChannelIntegrationSystemMessage" /* 8291 */;
import nativeStyleProperties from "nativeStyleProperties" /* 8292 */;
import createGuildReportRaidSystemMessage from "createGuildReportRaidSystemMessage" /* 8299 */;
import createGuildReportFalseAlarmSystemMessage from "createGuildReportFalseAlarmSystemMessage" /* 8300 */;
import createPollResultSystemMessage from "createPollResultSystemMessage" /* 8301 */;
import createChannelLinkedToLobbySystemMessage from "createChannelLinkedToLobbySystemMessage" /* 8303 */;
import createInGameMessageNuxSystemMessage from "createInGameMessageNuxSystemMessage" /* 8304 */;
import createJoinRequestNotificationSystemMessage from "createJoinRequestNotificationSystemMessage" /* 8305 */;
import createPremiumGroupInviteSystemMessage from "createPremiumGroupInviteSystemMessage" /* 8306 */;
import createReferralSystemMessage from "createReferralSystemMessage" /* 8311 */;
import createVoiceSessionSystemMessage from "createVoiceSessionSystemMessage" /* 8323 */;
import createFriendRequestAcceptedSystemMessage from "createFriendRequestAcceptedSystemMessage" /* 8327 */;
import createGiftIntentSystemMessage from "createGiftIntentSystemMessage" /* 8329 */;
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