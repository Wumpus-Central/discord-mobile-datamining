// discord_app/modules/messages/native/renderer/system_messages/SystemMessage.tsx
import ME from "ME";
import { createAddRecipientSystemMessage } from "AddRecipientSystemMessage.tsx";
import { createApplicationCommandSourceSystemMessage } from "ApplicationCommandSourceSystemMessage.tsx";
import { createApplicationSubscriptionPurchaseSystemMessage } from "ApplicationSubscriptionPurchaseSystemMessage.tsx";
import { createAutoModerationActionSystemMessage } from "AutoModerationActionSystemMessage.tsx";
import { createCallSystemMessage } from "CallSystemMessage.tsx";
import { createChangeChannelIconSystemMessage } from "ChangeChannelIconSystemMessage.tsx";
import { createChangeChannelNameSystemMessage } from "ChangeChannelNameSystemMessage.tsx";
import { createChannelFollowAddSystemMessage } from "ChannelFollowAddSystemMessage.tsx";
import { createChannelLinkedToLobbySystemMessage } from "ChannelLinkedToLobbySystemMessage.tsx";
import { createChannelPinnedMessageSystemMessage } from "ChannelPinnedMessageSystemMessage.tsx";
import { createFriendRequestAcceptedSystemMessage } from "FriendRequestAcceptedSystemMessage.tsx";
import { createGiftIntentSystemMessage } from "GiftIntentSystemMessage.tsx";
import { nativeStyleProperties } from "GuildAlertModeSystemMessage.tsx";
import { createGuildDiscoveryDisqualifiedSystemMessage } from "GuildDiscoverySystemMessage.tsx";
import { createGuildReportFalseAlarmSystemMessage } from "GuildReportFalseAlarmSystemMessage.tsx";
import { createGuildReportRaidSystemMessage } from "GuildReportRaidSystemMessage.tsx";
import { createGuildStreamSystemMessage } from "GuildStreamSystemMessage.tsx";
import { createInGameMessageNuxSystemMessage } from "InGameMessageNuxSystemMessage.tsx";
import { createJoinRequestNotificationSystemMessage } from "JoinRequestNotificationSystemMessage.tsx";
import { createNewThreadSystemMessage } from "NewThreadSystemMessage.tsx";
import { createPollResultSystemMessage } from "PollResultSystemMessage.tsx";
import { createPremiumGroupInviteSystemMessage } from "PremiumGroupInviteSystemMessage.tsx";
import { createPrivateChannelIntegrationSystemMessage } from "PrivateChannelIntegrationSystemMessage.tsx";
import { createPurchaseNotificationSystemMessage } from "PurchaseNotificationSystemMessage.tsx";
import { createReferralSystemMessage } from "ReferralSystemMessage.tsx";
import { createRemoveRecipientSystemMessage } from "RemoveRecipientSystemMessage.tsx";
import { createRoleSubscriptionPurchaseSystemMessage } from "RoleSubscriptionPurchaseSystemMessage.tsx";
import { createStageEndSystemMessage } from "StageEndSystemMessage.tsx";
import { createStageRaiseHandSystemMessage } from "StageRaiseHandSystemMessage.tsx";
import { createStageSpeakerSystemMessage } from "StageSpeakerSystemMessage.tsx";
import { createStageStartSystemMessage } from "StageStartSystemMessage.tsx";
import { createStageTopicSystemMessage } from "StageTopicSystemMessage.tsx";
import { createThreadStarterSystemMessage } from "ThreadStarterSystemMessage.tsx";
import { createUserJoinSystemMessage } from "UserJoinSystemMessage.tsx";
import { createUserPremiumGuildSubscriptionSystemMessage } from "UserPremiumGuildSubscriptionSystemMessage.tsx";
import { createUserPremiumGuildSubscriptionTierAchievedSystemMessage } from "UserPremiumGuildSubscriptionTierAchievedSystemMessage.tsx";
import { createVoiceSessionSystemMessage } from "VoiceSessionSystemMessage.tsx";

let c3;
let obj1;
({ MessageTypes: obj1, BoostedGuildTiers: c3 } = ME);
const result = require("createRemoveRecipientSystemMessage").fileFinishedImporting("modules/messages/native/renderer/system_messages/SystemMessage.tsx");

export const createSystemMessageContent = function createSystemMessageContent(message) {
  const type = message.message.type;
  if (constants.RECIPIENT_ADD === type) {
    return createAddRecipientSystemMessage /* createAddRecipientSystemMessage */.createAddRecipientSystemMessage(message);
  } else if (tmp.RECIPIENT_REMOVE === type) {
    return createRemoveRecipientSystemMessage /* createRemoveRecipientSystemMessage */.createRemoveRecipientSystemMessage(message);
  } else if (tmp.CALL === type) {
    return createCallSystemMessage /* createCallSystemMessage */.createCallSystemMessage(message);
  } else if (tmp.CHANNEL_NAME_CHANGE === type) {
    return createChangeChannelNameSystemMessage /* createChangeChannelNameSystemMessage */.createChangeChannelNameSystemMessage(message);
  } else if (tmp.CHANNEL_ICON_CHANGE === type) {
    return createChangeChannelIconSystemMessage /* createChangeChannelIconSystemMessage */.createChangeChannelIconSystemMessage(message);
  } else if (tmp.CHANNEL_PINNED_MESSAGE === type) {
    return createChannelPinnedMessageSystemMessage /* createChannelPinnedMessageSystemMessage */.createChannelPinnedMessageSystemMessage(message);
  } else if (tmp.USER_JOIN === type) {
    return createUserJoinSystemMessage /* createUserJoinSystemMessage */.createUserJoinSystemMessage(message);
  } else if (tmp.GUILD_BOOST === type) {
    return createUserPremiumGuildSubscriptionSystemMessage /* createUserPremiumGuildSubscriptionSystemMessage */.createUserPremiumGuildSubscriptionSystemMessage(message);
  } else if (tmp.GUILD_BOOST_TIER_1 === type) {
    return createUserPremiumGuildSubscriptionTierAchievedSystemMessage /* createUserPremiumGuildSubscriptionTierAchievedSystemMessage */.createUserPremiumGuildSubscriptionTierAchievedSystemMessage(message, closure_3.TIER_1);
  } else if (tmp.GUILD_BOOST_TIER_2 === type) {
    return createUserPremiumGuildSubscriptionTierAchievedSystemMessage /* createUserPremiumGuildSubscriptionTierAchievedSystemMessage */.createUserPremiumGuildSubscriptionTierAchievedSystemMessage(message, closure_3.TIER_2);
  } else if (tmp.GUILD_BOOST_TIER_3 === type) {
    return createUserPremiumGuildSubscriptionTierAchievedSystemMessage /* createUserPremiumGuildSubscriptionTierAchievedSystemMessage */.createUserPremiumGuildSubscriptionTierAchievedSystemMessage(message, closure_3.TIER_3);
  } else if (tmp.CHANNEL_FOLLOW_ADD === type) {
    return createChannelFollowAddSystemMessage /* createChannelFollowAddSystemMessage */.createChannelFollowAddSystemMessage(message);
  } else if (tmp.GUILD_STREAM === type) {
    return createGuildStreamSystemMessage /* createGuildStreamSystemMessage */.createGuildStreamSystemMessage(message);
  } else if (tmp.GUILD_DISCOVERY_DISQUALIFIED === type) {
    return createGuildDiscoveryDisqualifiedSystemMessage /* createGuildDiscoveryDisqualifiedSystemMessage */.createGuildDiscoveryDisqualifiedSystemMessage(message);
  } else if (tmp.GUILD_DISCOVERY_REQUALIFIED === type) {
    return createGuildDiscoveryDisqualifiedSystemMessage /* createGuildDiscoveryDisqualifiedSystemMessage */.createGuildDiscoveryRequalifiedSystemMessage(message);
  } else if (tmp.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING === type) {
    return createGuildDiscoveryDisqualifiedSystemMessage /* createGuildDiscoveryDisqualifiedSystemMessage */.createGuildDiscoveryGracePeriodInitialWarningSystemMessage(message);
  } else if (tmp.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING === type) {
    return createGuildDiscoveryDisqualifiedSystemMessage /* createGuildDiscoveryDisqualifiedSystemMessage */.createGuildDiscoveryGracePeriodFinalWarningSystemMessage(message);
  } else {
    if (tmp.CHAT_INPUT_COMMAND !== type) {
      if (tmp.CONTEXT_MENU_COMMAND !== type) {
        if (tmp.GUILD_INVITE_REMINDER === type) {
          return null;
        } else if (tmp.THREAD_CREATED === type) {
          return createNewThreadSystemMessage /* createNewThreadSystemMessage */.createNewThreadSystemMessage(message);
        } else if (tmp.THREAD_STARTER_MESSAGE === type) {
          return createThreadStarterSystemMessage /* createThreadStarterSystemMessage */.createThreadStarterSystemMessage(message);
        } else if (tmp.AUTO_MODERATION_ACTION === type) {
          return createAutoModerationActionSystemMessage /* createAutoModerationActionSystemMessage */.createAutoModerationActionSystemMessage(message);
        } else if (tmp.ROLE_SUBSCRIPTION_PURCHASE === type) {
          return createRoleSubscriptionPurchaseSystemMessage /* createRoleSubscriptionPurchaseSystemMessage */.createRoleSubscriptionPurchaseSystemMessage(message);
        } else if (tmp.PURCHASE_NOTIFICATION === type) {
          return createPurchaseNotificationSystemMessage /* createPurchaseNotificationSystemMessage */.createPurchaseNotificationSystemMessage(message);
        } else if (tmp.STAGE_START === type) {
          return createStageStartSystemMessage /* createStageStartSystemMessage */.createStageStartSystemMessage(message);
        } else if (tmp.STAGE_END === type) {
          return createStageEndSystemMessage /* createStageEndSystemMessage */.createStageEndSystemMessage(message);
        } else if (tmp.STAGE_TOPIC === type) {
          return createStageTopicSystemMessage /* createStageTopicSystemMessage */.createStageTopicSystemMessage(message);
        } else if (tmp.STAGE_SPEAKER === type) {
          return createStageSpeakerSystemMessage /* createStageSpeakerSystemMessage */.createStageSpeakerSystemMessage(message);
        } else if (tmp.STAGE_RAISE_HAND === type) {
          return createStageRaiseHandSystemMessage /* createStageRaiseHandSystemMessage */.createStageRaiseHandSystemMessage(message);
        } else if (tmp.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION === type) {
          return createApplicationSubscriptionPurchaseSystemMessage /* createApplicationSubscriptionPurchaseSystemMessage */.createApplicationSubscriptionPurchaseSystemMessage(message);
        } else {
          if (tmp.PRIVATE_CHANNEL_INTEGRATION_ADDED !== type) {
            if (tmp.PRIVATE_CHANNEL_INTEGRATION_REMOVED !== type) {
              if (tmp.GUILD_INCIDENT_ALERT_MODE_ENABLED === type) {
                return nativeStyleProperties /* nativeStyleProperties */.createGuildAlertModeEnabledSystemMessage(message);
              } else if (tmp.GUILD_INCIDENT_ALERT_MODE_DISABLED === type) {
                return nativeStyleProperties /* nativeStyleProperties */.createGuildAlertModeDisabledSystemMessage(message);
              } else if (tmp.GUILD_INCIDENT_REPORT_RAID === type) {
                return createGuildReportRaidSystemMessage /* createGuildReportRaidSystemMessage */.createGuildReportRaidSystemMessage(message);
              } else if (tmp.GUILD_INCIDENT_REPORT_FALSE_ALARM === type) {
                return createGuildReportFalseAlarmSystemMessage /* createGuildReportFalseAlarmSystemMessage */.createGuildReportFalseAlarmSystemMessage(message);
              } else if (tmp.POLL_RESULT === type) {
                return createPollResultSystemMessage /* createPollResultSystemMessage */.createPollResultSystemMessage(message);
              } else if (tmp.CHANNEL_LINKED_TO_LOBBY === type) {
                return createChannelLinkedToLobbySystemMessage /* createChannelLinkedToLobbySystemMessage */.createChannelLinkedToLobbySystemMessage(message);
              } else if (tmp.IN_GAME_MESSAGE_NUX === type) {
                return createInGameMessageNuxSystemMessage /* createInGameMessageNuxSystemMessage */.createInGameMessageNuxSystemMessage(message);
              } else {
                if (tmp.GUILD_JOIN_REQUEST_ACCEPT_NOTIFICATION !== type) {
                  if (tmp.GUILD_JOIN_REQUEST_REJECT_NOTIFICATION !== type) {
                    if (tmp.GUILD_JOIN_REQUEST_WITHDRAWN_NOTIFICATION !== type) {
                      if (tmp.PREMIUM_GROUP_INVITE === type) {
                        return createPremiumGroupInviteSystemMessage /* createPremiumGroupInviteSystemMessage */.createPremiumGroupInviteSystemMessage(message);
                      } else if (tmp.PREMIUM_REFERRAL === type) {
                        return createReferralSystemMessage /* createReferralSystemMessage */.createReferralSystemMessage(message);
                      } else if (tmp.VOICE_SESSION === type) {
                        return createVoiceSessionSystemMessage /* createVoiceSessionSystemMessage */.createVoiceSessionSystemMessage(message);
                      } else if (tmp.FRIEND_REQUEST_ACCEPTED === type) {
                        return createFriendRequestAcceptedSystemMessage /* createFriendRequestAcceptedSystemMessage */.createFriendRequestAcceptedSystemMessage(message);
                      } else if (tmp.GIFTING_PROMPT === type) {
                        return createGiftIntentSystemMessage /* createGiftIntentSystemMessage */.createGiftIntentSystemMessage(message);
                      } else {
                        return null;
                      }
                    }
                  }
                }
                return createJoinRequestNotificationSystemMessage /* createJoinRequestNotificationSystemMessage */.createJoinRequestNotificationSystemMessage(message);
              }
            }
          }
          return createPrivateChannelIntegrationSystemMessage /* createPrivateChannelIntegrationSystemMessage */.createPrivateChannelIntegrationSystemMessage(message, message.message.type);
        }
      }
    }
    return createApplicationCommandSourceSystemMessage /* createApplicationCommandSourceSystemMessage */.createApplicationCommandSourceSystemMessage(message);
  }
};