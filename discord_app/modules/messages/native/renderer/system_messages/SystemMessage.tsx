// discord_app/modules/messages/native/renderer/system_messages/SystemMessage.tsx
import ME from "ME";

let c3;
let obj1;
({ MessageTypes: obj1, BoostedGuildTiers: c3 } = ME);
const result = require("createRemoveRecipientSystemMessage").fileFinishedImporting("modules/messages/native/renderer/system_messages/SystemMessage.tsx");

export const createSystemMessageContent = function createSystemMessageContent(message) {
  const type = message.message.type;
  if (constants.RECIPIENT_ADD === type) {
    return require("AddRecipientSystemMessage.tsx") /* createAddRecipientSystemMessage */.createAddRecipientSystemMessage(message);
  } else if (tmp.RECIPIENT_REMOVE === type) {
    return require("RemoveRecipientSystemMessage.tsx") /* createRemoveRecipientSystemMessage */.createRemoveRecipientSystemMessage(message);
  } else if (tmp.CALL === type) {
    return require("CallSystemMessage.tsx") /* createCallSystemMessage */.createCallSystemMessage(message);
  } else if (tmp.CHANNEL_NAME_CHANGE === type) {
    return require("ChangeChannelNameSystemMessage.tsx") /* createChangeChannelNameSystemMessage */.createChangeChannelNameSystemMessage(message);
  } else if (tmp.CHANNEL_ICON_CHANGE === type) {
    return require("ChangeChannelIconSystemMessage.tsx") /* createChangeChannelIconSystemMessage */.createChangeChannelIconSystemMessage(message);
  } else if (tmp.CHANNEL_PINNED_MESSAGE === type) {
    return require("ChannelPinnedMessageSystemMessage.tsx") /* createChannelPinnedMessageSystemMessage */.createChannelPinnedMessageSystemMessage(message);
  } else if (tmp.USER_JOIN === type) {
    return require("UserJoinSystemMessage.tsx") /* createUserJoinSystemMessage */.createUserJoinSystemMessage(message);
  } else if (tmp.GUILD_BOOST === type) {
    return require("UserPremiumGuildSubscriptionSystemMessage.tsx") /* createUserPremiumGuildSubscriptionSystemMessage */.createUserPremiumGuildSubscriptionSystemMessage(message);
  } else if (tmp.GUILD_BOOST_TIER_1 === type) {
    return require("UserPremiumGuildSubscriptionTierAchievedSystemMessage.tsx") /* createUserPremiumGuildSubscriptionTierAchievedSystemMessage */.createUserPremiumGuildSubscriptionTierAchievedSystemMessage(message, closure_3.TIER_1);
  } else if (tmp.GUILD_BOOST_TIER_2 === type) {
    return require("UserPremiumGuildSubscriptionTierAchievedSystemMessage.tsx") /* createUserPremiumGuildSubscriptionTierAchievedSystemMessage */.createUserPremiumGuildSubscriptionTierAchievedSystemMessage(message, closure_3.TIER_2);
  } else if (tmp.GUILD_BOOST_TIER_3 === type) {
    return require("UserPremiumGuildSubscriptionTierAchievedSystemMessage.tsx") /* createUserPremiumGuildSubscriptionTierAchievedSystemMessage */.createUserPremiumGuildSubscriptionTierAchievedSystemMessage(message, closure_3.TIER_3);
  } else if (tmp.CHANNEL_FOLLOW_ADD === type) {
    return require("ChannelFollowAddSystemMessage.tsx") /* createChannelFollowAddSystemMessage */.createChannelFollowAddSystemMessage(message);
  } else if (tmp.GUILD_STREAM === type) {
    return require("GuildStreamSystemMessage.tsx") /* createGuildStreamSystemMessage */.createGuildStreamSystemMessage(message);
  } else if (tmp.GUILD_DISCOVERY_DISQUALIFIED === type) {
    return require("GuildDiscoverySystemMessage.tsx") /* createGuildDiscoveryDisqualifiedSystemMessage */.createGuildDiscoveryDisqualifiedSystemMessage(message);
  } else if (tmp.GUILD_DISCOVERY_REQUALIFIED === type) {
    return require("GuildDiscoverySystemMessage.tsx") /* createGuildDiscoveryDisqualifiedSystemMessage */.createGuildDiscoveryRequalifiedSystemMessage(message);
  } else if (tmp.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING === type) {
    return require("GuildDiscoverySystemMessage.tsx") /* createGuildDiscoveryDisqualifiedSystemMessage */.createGuildDiscoveryGracePeriodInitialWarningSystemMessage(message);
  } else if (tmp.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING === type) {
    return require("GuildDiscoverySystemMessage.tsx") /* createGuildDiscoveryDisqualifiedSystemMessage */.createGuildDiscoveryGracePeriodFinalWarningSystemMessage(message);
  } else {
    if (tmp.CHAT_INPUT_COMMAND !== type) {
      if (tmp.CONTEXT_MENU_COMMAND !== type) {
        if (tmp.GUILD_INVITE_REMINDER === type) {
          return null;
        } else if (tmp.THREAD_CREATED === type) {
          return require("NewThreadSystemMessage.tsx") /* createNewThreadSystemMessage */.createNewThreadSystemMessage(message);
        } else if (tmp.THREAD_STARTER_MESSAGE === type) {
          return require("ThreadStarterSystemMessage.tsx") /* createThreadStarterSystemMessage */.createThreadStarterSystemMessage(message);
        } else if (tmp.AUTO_MODERATION_ACTION === type) {
          return require("AutoModerationActionSystemMessage.tsx") /* createAutoModerationActionSystemMessage */.createAutoModerationActionSystemMessage(message);
        } else if (tmp.ROLE_SUBSCRIPTION_PURCHASE === type) {
          return require("RoleSubscriptionPurchaseSystemMessage.tsx") /* createRoleSubscriptionPurchaseSystemMessage */.createRoleSubscriptionPurchaseSystemMessage(message);
        } else if (tmp.PURCHASE_NOTIFICATION === type) {
          return require("PurchaseNotificationSystemMessage.tsx") /* createPurchaseNotificationSystemMessage */.createPurchaseNotificationSystemMessage(message);
        } else if (tmp.STAGE_START === type) {
          return require("StageStartSystemMessage.tsx") /* createStageStartSystemMessage */.createStageStartSystemMessage(message);
        } else if (tmp.STAGE_END === type) {
          return require("StageEndSystemMessage.tsx") /* createStageEndSystemMessage */.createStageEndSystemMessage(message);
        } else if (tmp.STAGE_TOPIC === type) {
          return require("StageTopicSystemMessage.tsx") /* createStageTopicSystemMessage */.createStageTopicSystemMessage(message);
        } else if (tmp.STAGE_SPEAKER === type) {
          return require("StageSpeakerSystemMessage.tsx") /* createStageSpeakerSystemMessage */.createStageSpeakerSystemMessage(message);
        } else if (tmp.STAGE_RAISE_HAND === type) {
          return require("StageRaiseHandSystemMessage.tsx") /* createStageRaiseHandSystemMessage */.createStageRaiseHandSystemMessage(message);
        } else if (tmp.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION === type) {
          return require("ApplicationSubscriptionPurchaseSystemMessage.tsx") /* createApplicationSubscriptionPurchaseSystemMessage */.createApplicationSubscriptionPurchaseSystemMessage(message);
        } else {
          if (tmp.PRIVATE_CHANNEL_INTEGRATION_ADDED !== type) {
            if (tmp.PRIVATE_CHANNEL_INTEGRATION_REMOVED !== type) {
              if (tmp.GUILD_INCIDENT_ALERT_MODE_ENABLED === type) {
                return require("GuildAlertModeSystemMessage.tsx") /* nativeStyleProperties */.createGuildAlertModeEnabledSystemMessage(message);
              } else if (tmp.GUILD_INCIDENT_ALERT_MODE_DISABLED === type) {
                return require("GuildAlertModeSystemMessage.tsx") /* nativeStyleProperties */.createGuildAlertModeDisabledSystemMessage(message);
              } else if (tmp.GUILD_INCIDENT_REPORT_RAID === type) {
                return require("GuildReportRaidSystemMessage.tsx") /* createGuildReportRaidSystemMessage */.createGuildReportRaidSystemMessage(message);
              } else if (tmp.GUILD_INCIDENT_REPORT_FALSE_ALARM === type) {
                return require("GuildReportFalseAlarmSystemMessage.tsx") /* createGuildReportFalseAlarmSystemMessage */.createGuildReportFalseAlarmSystemMessage(message);
              } else if (tmp.POLL_RESULT === type) {
                return require("PollResultSystemMessage.tsx") /* createPollResultSystemMessage */.createPollResultSystemMessage(message);
              } else if (tmp.CHANNEL_LINKED_TO_LOBBY === type) {
                return require("ChannelLinkedToLobbySystemMessage.tsx") /* createChannelLinkedToLobbySystemMessage */.createChannelLinkedToLobbySystemMessage(message);
              } else if (tmp.IN_GAME_MESSAGE_NUX === type) {
                return require("InGameMessageNuxSystemMessage.tsx") /* createInGameMessageNuxSystemMessage */.createInGameMessageNuxSystemMessage(message);
              } else {
                if (tmp.GUILD_JOIN_REQUEST_ACCEPT_NOTIFICATION !== type) {
                  if (tmp.GUILD_JOIN_REQUEST_REJECT_NOTIFICATION !== type) {
                    if (tmp.GUILD_JOIN_REQUEST_WITHDRAWN_NOTIFICATION !== type) {
                      if (tmp.PREMIUM_GROUP_INVITE === type) {
                        return require("PremiumGroupInviteSystemMessage.tsx") /* createPremiumGroupInviteSystemMessage */.createPremiumGroupInviteSystemMessage(message);
                      } else if (tmp.PREMIUM_REFERRAL === type) {
                        return require("ReferralSystemMessage.tsx") /* createReferralSystemMessage */.createReferralSystemMessage(message);
                      } else if (tmp.VOICE_SESSION === type) {
                        return require("VoiceSessionSystemMessage.tsx") /* createVoiceSessionSystemMessage */.createVoiceSessionSystemMessage(message);
                      } else if (tmp.FRIEND_REQUEST_ACCEPTED === type) {
                        return require("FriendRequestAcceptedSystemMessage.tsx") /* createFriendRequestAcceptedSystemMessage */.createFriendRequestAcceptedSystemMessage(message);
                      } else if (tmp.GIFTING_PROMPT === type) {
                        return require("GiftIntentSystemMessage.tsx") /* createGiftIntentSystemMessage */.createGiftIntentSystemMessage(message);
                      } else {
                        return null;
                      }
                    }
                  }
                }
                return require("JoinRequestNotificationSystemMessage.tsx") /* createJoinRequestNotificationSystemMessage */.createJoinRequestNotificationSystemMessage(message);
              }
            }
          }
          return require("PrivateChannelIntegrationSystemMessage.tsx") /* createPrivateChannelIntegrationSystemMessage */.createPrivateChannelIntegrationSystemMessage(message, message.message.type);
        }
      }
    }
    return require("ApplicationCommandSourceSystemMessage.tsx") /* createApplicationCommandSourceSystemMessage */.createApplicationCommandSourceSystemMessage(message);
  }
};