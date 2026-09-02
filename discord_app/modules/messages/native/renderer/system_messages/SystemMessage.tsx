// === Module 7876: createSystemMessageContent ===

// Module 7876 (createSystemMessageContent)
import set from "set" /* 2 */;
import createAddRecipientSystemMessage from "createAddRecipientSystemMessage" /* 7877 */;
import createRemoveRecipientSystemMessage from "createRemoveRecipientSystemMessage" /* 7896 */;
import createCallSystemMessage from "createCallSystemMessage" /* 7897 */;
import createChangeChannelNameSystemMessage from "createChangeChannelNameSystemMessage" /* 7900 */;
import createChangeChannelIconSystemMessage from "createChangeChannelIconSystemMessage" /* 7901 */;
import createChannelPinnedMessageSystemMessage from "createChannelPinnedMessageSystemMessage" /* 7902 */;
import createUserJoinSystemMessage from "createUserJoinSystemMessage" /* 7903 */;
import createUserPremiumGuildSubscriptionSystemMessage from "createUserPremiumGuildSubscriptionSystemMessage" /* 7921 */;
import createUserPremiumGuildSubscriptionTierAchievedSystemMessage from "createUserPremiumGuildSubscriptionTierAchievedSystemMessage" /* 7923 */;
import createChannelFollowAddSystemMessage from "createChannelFollowAddSystemMessage" /* 7924 */;
import createGuildStreamSystemMessage from "createGuildStreamSystemMessage" /* 7925 */;
import createGuildDiscoveryDisqualifiedSystemMessage from "createGuildDiscoveryDisqualifiedSystemMessage" /* 7926 */;
import createApplicationCommandSourceSystemMessage from "createApplicationCommandSourceSystemMessage" /* 7927 */;
import createNewThreadSystemMessage from "createNewThreadSystemMessage" /* 7929 */;
import createThreadStarterSystemMessage from "createThreadStarterSystemMessage" /* 7930 */;
import createAutoModerationActionSystemMessage from "createAutoModerationActionSystemMessage" /* 7931 */;
import createRoleSubscriptionPurchaseSystemMessage from "createRoleSubscriptionPurchaseSystemMessage" /* 7940 */;
import createPurchaseNotificationSystemMessage from "createPurchaseNotificationSystemMessage" /* 7941 */;
import createStageStartSystemMessage from "createStageStartSystemMessage" /* 7943 */;
import createStageEndSystemMessage from "createStageEndSystemMessage" /* 7944 */;
import createStageTopicSystemMessage from "createStageTopicSystemMessage" /* 7945 */;
import createStageSpeakerSystemMessage from "createStageSpeakerSystemMessage" /* 7946 */;
import createStageRaiseHandSystemMessage from "createStageRaiseHandSystemMessage" /* 7947 */;
import createApplicationSubscriptionPurchaseSystemMessage from "createApplicationSubscriptionPurchaseSystemMessage" /* 7948 */;
import createPrivateChannelIntegrationSystemMessage from "createPrivateChannelIntegrationSystemMessage" /* 7949 */;
import nativeStyleProperties from "nativeStyleProperties" /* 7950 */;
import createGuildReportRaidSystemMessage from "createGuildReportRaidSystemMessage" /* 7957 */;
import createGuildReportFalseAlarmSystemMessage from "createGuildReportFalseAlarmSystemMessage" /* 7958 */;
import createPollResultSystemMessage from "createPollResultSystemMessage" /* 7959 */;
import createChannelLinkedToLobbySystemMessage from "createChannelLinkedToLobbySystemMessage" /* 7961 */;
import createInGameMessageNuxSystemMessage from "createInGameMessageNuxSystemMessage" /* 7962 */;
import createJoinRequestNotificationSystemMessage from "createJoinRequestNotificationSystemMessage" /* 7963 */;
import createPremiumGroupInviteSystemMessage from "createPremiumGroupInviteSystemMessage" /* 7964 */;
import createReferralSystemMessage from "createReferralSystemMessage" /* 7970 */;
import createVoiceSessionSystemMessage from "createVoiceSessionSystemMessage" /* 7988 */;
import createFriendRequestAcceptedSystemMessage from "createFriendRequestAcceptedSystemMessage" /* 7992 */;
import createGiftIntentSystemMessage from "createGiftIntentSystemMessage" /* 7994 */;
import ME from "ME" /* 673 */;

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