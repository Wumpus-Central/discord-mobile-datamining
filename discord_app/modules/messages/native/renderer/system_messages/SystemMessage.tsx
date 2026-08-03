import ME from "ME";

let c3;
let obj1;
({ MessageTypes: obj1, BoostedGuildTiers: c3 } = ME);
const result = require("createRemoveRecipientSystemMessage").fileFinishedImporting("modules/messages/native/renderer/system_messages/SystemMessage.tsx");

export const createSystemMessageContent = function createSystemMessageContent(message) {
  const type = message.message.type;
  if (constants.RECIPIENT_ADD === type) {
    return require(7866) /* createAddRecipientSystemMessage */.createAddRecipientSystemMessage(message);
  } else if (tmp.RECIPIENT_REMOVE === type) {
    return require(7883) /* createRemoveRecipientSystemMessage */.createRemoveRecipientSystemMessage(message);
  } else if (tmp.CALL === type) {
    return require(7884) /* createCallSystemMessage */.createCallSystemMessage(message);
  } else if (tmp.CHANNEL_NAME_CHANGE === type) {
    return require(7887) /* createChangeChannelNameSystemMessage */.createChangeChannelNameSystemMessage(message);
  } else if (tmp.CHANNEL_ICON_CHANGE === type) {
    return require(7888) /* createChangeChannelIconSystemMessage */.createChangeChannelIconSystemMessage(message);
  } else if (tmp.CHANNEL_PINNED_MESSAGE === type) {
    return require(7889) /* createChannelPinnedMessageSystemMessage */.createChannelPinnedMessageSystemMessage(message);
  } else if (tmp.USER_JOIN === type) {
    return require(7890) /* createUserJoinSystemMessage */.createUserJoinSystemMessage(message);
  } else if (tmp.GUILD_BOOST === type) {
    return require(7908) /* createUserPremiumGuildSubscriptionSystemMessage */.createUserPremiumGuildSubscriptionSystemMessage(message);
  } else if (tmp.GUILD_BOOST_TIER_1 === type) {
    return require(7910) /* createUserPremiumGuildSubscriptionTierAchievedSystemMessage */.createUserPremiumGuildSubscriptionTierAchievedSystemMessage(message, closure_3.TIER_1);
  } else if (tmp.GUILD_BOOST_TIER_2 === type) {
    return require(7910) /* createUserPremiumGuildSubscriptionTierAchievedSystemMessage */.createUserPremiumGuildSubscriptionTierAchievedSystemMessage(message, closure_3.TIER_2);
  } else if (tmp.GUILD_BOOST_TIER_3 === type) {
    return require(7910) /* createUserPremiumGuildSubscriptionTierAchievedSystemMessage */.createUserPremiumGuildSubscriptionTierAchievedSystemMessage(message, closure_3.TIER_3);
  } else if (tmp.CHANNEL_FOLLOW_ADD === type) {
    return require(7911) /* createChannelFollowAddSystemMessage */.createChannelFollowAddSystemMessage(message);
  } else if (tmp.GUILD_STREAM === type) {
    return require(7912) /* createGuildStreamSystemMessage */.createGuildStreamSystemMessage(message);
  } else if (tmp.GUILD_DISCOVERY_DISQUALIFIED === type) {
    return require(7913) /* createGuildDiscoveryDisqualifiedSystemMessage */.createGuildDiscoveryDisqualifiedSystemMessage(message);
  } else if (tmp.GUILD_DISCOVERY_REQUALIFIED === type) {
    return require(7913) /* createGuildDiscoveryDisqualifiedSystemMessage */.createGuildDiscoveryRequalifiedSystemMessage(message);
  } else if (tmp.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING === type) {
    return require(7913) /* createGuildDiscoveryDisqualifiedSystemMessage */.createGuildDiscoveryGracePeriodInitialWarningSystemMessage(message);
  } else if (tmp.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING === type) {
    return require(7913) /* createGuildDiscoveryDisqualifiedSystemMessage */.createGuildDiscoveryGracePeriodFinalWarningSystemMessage(message);
  } else {
    if (tmp.CHAT_INPUT_COMMAND !== type) {
      if (tmp.CONTEXT_MENU_COMMAND !== type) {
        if (tmp.GUILD_INVITE_REMINDER === type) {
          return null;
        } else if (tmp.THREAD_CREATED === type) {
          return require(7916) /* createNewThreadSystemMessage */.createNewThreadSystemMessage(message);
        } else if (tmp.THREAD_STARTER_MESSAGE === type) {
          return require(7917) /* createThreadStarterSystemMessage */.createThreadStarterSystemMessage(message);
        } else if (tmp.AUTO_MODERATION_ACTION === type) {
          return require(7918) /* createAutoModerationActionSystemMessage */.createAutoModerationActionSystemMessage(message);
        } else if (tmp.ROLE_SUBSCRIPTION_PURCHASE === type) {
          return require(7927) /* createRoleSubscriptionPurchaseSystemMessage */.createRoleSubscriptionPurchaseSystemMessage(message);
        } else if (tmp.PURCHASE_NOTIFICATION === type) {
          return require(7928) /* createPurchaseNotificationSystemMessage */.createPurchaseNotificationSystemMessage(message);
        } else if (tmp.STAGE_START === type) {
          return require(7930) /* createStageStartSystemMessage */.createStageStartSystemMessage(message);
        } else if (tmp.STAGE_END === type) {
          return require(7931) /* createStageEndSystemMessage */.createStageEndSystemMessage(message);
        } else if (tmp.STAGE_TOPIC === type) {
          return require(7932) /* createStageTopicSystemMessage */.createStageTopicSystemMessage(message);
        } else if (tmp.STAGE_SPEAKER === type) {
          return require(7933) /* createStageSpeakerSystemMessage */.createStageSpeakerSystemMessage(message);
        } else if (tmp.STAGE_RAISE_HAND === type) {
          return require(7934) /* createStageRaiseHandSystemMessage */.createStageRaiseHandSystemMessage(message);
        } else if (tmp.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION === type) {
          return require(7935) /* createApplicationSubscriptionPurchaseSystemMessage */.createApplicationSubscriptionPurchaseSystemMessage(message);
        } else {
          if (tmp.PRIVATE_CHANNEL_INTEGRATION_ADDED !== type) {
            if (tmp.PRIVATE_CHANNEL_INTEGRATION_REMOVED !== type) {
              if (tmp.GUILD_INCIDENT_ALERT_MODE_ENABLED === type) {
                return require(7937) /* nativeStyleProperties */.createGuildAlertModeEnabledSystemMessage(message);
              } else if (tmp.GUILD_INCIDENT_ALERT_MODE_DISABLED === type) {
                return require(7937) /* nativeStyleProperties */.createGuildAlertModeDisabledSystemMessage(message);
              } else if (tmp.GUILD_INCIDENT_REPORT_RAID === type) {
                return require(7944) /* createGuildReportRaidSystemMessage */.createGuildReportRaidSystemMessage(message);
              } else if (tmp.GUILD_INCIDENT_REPORT_FALSE_ALARM === type) {
                return require(7945) /* createGuildReportFalseAlarmSystemMessage */.createGuildReportFalseAlarmSystemMessage(message);
              } else if (tmp.POLL_RESULT === type) {
                return require(7946) /* createPollResultSystemMessage */.createPollResultSystemMessage(message);
              } else if (tmp.CHANNEL_LINKED_TO_LOBBY === type) {
                return require(7948) /* createChannelLinkedToLobbySystemMessage */.createChannelLinkedToLobbySystemMessage(message);
              } else if (tmp.IN_GAME_MESSAGE_NUX === type) {
                return require(7949) /* createInGameMessageNuxSystemMessage */.createInGameMessageNuxSystemMessage(message);
              } else {
                if (tmp.GUILD_JOIN_REQUEST_ACCEPT_NOTIFICATION !== type) {
                  if (tmp.GUILD_JOIN_REQUEST_REJECT_NOTIFICATION !== type) {
                    if (tmp.GUILD_JOIN_REQUEST_WITHDRAWN_NOTIFICATION !== type) {
                      if (tmp.PREMIUM_GROUP_INVITE === type) {
                        return require(7951) /* createPremiumGroupInviteSystemMessage */.createPremiumGroupInviteSystemMessage(message);
                      } else if (tmp.PREMIUM_REFERRAL === type) {
                        return require(7956) /* createReferralSystemMessage */.createReferralSystemMessage(message);
                      } else if (tmp.VOICE_SESSION === type) {
                        return require(7968) /* createVoiceSessionSystemMessage */.createVoiceSessionSystemMessage(message);
                      } else if (tmp.FRIEND_REQUEST_ACCEPTED === type) {
                        return require(7972) /* createFriendRequestAcceptedSystemMessage */.createFriendRequestAcceptedSystemMessage(message);
                      } else if (tmp.GIFTING_PROMPT === type) {
                        return require(7974) /* createGiftIntentSystemMessage */.createGiftIntentSystemMessage(message);
                      } else {
                        return null;
                      }
                    }
                  }
                }
                return require(7950) /* createJoinRequestNotificationSystemMessage */.createJoinRequestNotificationSystemMessage(message);
              }
            }
          }
          return require(7936) /* createPrivateChannelIntegrationSystemMessage */.createPrivateChannelIntegrationSystemMessage(message, message.message.type);
        }
      }
    }
    return require(7914) /* createApplicationCommandSourceSystemMessage */.createApplicationCommandSourceSystemMessage(message);
  }
};