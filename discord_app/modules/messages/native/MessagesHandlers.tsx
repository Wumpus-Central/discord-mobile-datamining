// discord_app/modules/messages/native/MessagesHandlers.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import SnowflakeUtilsDefault from "../../../utils/SnowflakeUtils.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import router_utils from "../../routing/router_utils.tsx";
import ThreadConstants from "../../threads/ThreadConstants.tsx";
import intl4 from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import Server from "../../../flow/Server.tsx";
import asyncRequire from "../../../../_runtime/01987_asyncRequire.js";
import LinkingDefault from "../../../lib/native/Linking.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import AssetRegistryDefault from "../../../../_runtime/04817_AssetRegistry.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import haptics_HapticFeedbackTypesDefault from "../../haptics/HapticFeedbackTypes.tsx";
import parseURLDefault from "../../../utils/native/parseURL.tsx";
import InviteCodeUtils from "../../instant_invite/InviteCodeUtils.tsx";
import CodedLink from "../../coded_links/CodedLink.tsx";
import AppAnalyticsUtilsDefault from "../../app_analytics/AppAnalyticsUtils.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import PrivateChannelCallUtils from "../../../utils/native/PrivateChannelCallUtils.tsx";
import AgeGateUtils from "../../age_gate/AgeGateUtils.tsx";
import InteractionComponentUtils from "../../interaction_components/InteractionComponentUtils.tsx";
import InteractionComponentTypes from "../../interaction_components/InteractionComponentTypes.tsx";
import SelectedChannelActionCreatorsDefault from "../../../actions/SelectedChannelActionCreators.tsx";
import BoostingActionCreatorsAll from "../../../actions/native/BoostingActionCreators.tsx";
import AlertActionCreatorsDefault from "../../../actions/AlertActionCreators.tsx";
import EmailVerificationModalActionCreatorsDefault from "../../../actions/native/EmailVerificationModalActionCreators.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import GuildCapUpsellHooks from "../../premium/GuildCapUpsellHooks.tsx";
import ThreadHooks from "../../threads/ThreadHooks.tsx";
import SpoilerChannelUtils from "../../spoiler_channels/SpoilerChannelUtils.tsx";
import transitionToGuild2 from "../../routing/transitionToGuild.native.tsx";
import openPremiumPlanSelectionActionSheetDefault from "../../premium/native/openPremiumPlanSelectionActionSheet.tsx";
import MessageActionCreatorsDefault from "../../../actions/MessageActionCreators.tsx";
import AutomodMessageUtils from "../../guild_automod/AutomodMessageUtils.tsx";
import GuildScheduledEventStore2 from "../../guild_scheduled_events/GuildScheduledEventStore.tsx";
import InviteTypeUtils from "../../instant_invite/InviteTypeUtils.tsx";
import Constants2 from "../../instant_invite/Constants.tsx";
import getInviteURLDefault from "../../instant_invite/getInviteURL.tsx";
import ExperimentEmbedUtils from "../../experiments/ExperimentEmbedUtils.tsx";
import ConversationsActionCreators from "../../conversations/ConversationsActionCreators.tsx";
import ConversationsAnalytics2 from "../../conversations/ConversationsAnalytics.tsx";
import ConversationNavigator from "../../conversations/components/native/ConversationNavigator.tsx";
import RowGeneratorConstants from "renderer/RowGeneratorConstants.tsx";
import MessageAccessibilityActions from "MessageAccessibilityActions.tsx";
import DoubleTapToReactUtils from "../../double_tap_to_react/native/DoubleTapToReactUtils.tsx";
import canAddNewReactionsDefault from "../../reactions/canAddNewReactions.tsx";
import WelcomeCTAUtils from "../../welcome_cta/WelcomeCTAUtils.tsx";
import GuildAntiRaidUtils from "../../guild_antiraid/GuildAntiRaidUtils.tsx";
import GuildAntiRaidTypes from "../../guild_antiraid/GuildAntiRaidTypes.tsx";
import PublicGuildsUtils from "../../public_guilds/PublicGuildsUtils.tsx";
import isCrosspostDefault from "../isCrosspost.tsx";
import InteractionUtils from "../../interactions/InteractionUtils.tsx";
import showUserProfileActionSheetDefault from "../../user_profile/native/showUserProfileActionSheet.tsx";
import openMediaModal from "../../media_viewer/native/components/openMediaModal.tsx";
import MediaSourceUtil from "../../media_viewer/native/MediaSourceUtil.tsx";
import InstantInviteActionCreators from "../../../actions/InstantInviteActionCreators.tsx";
import StageChannelModalActionCreators from "../../stage_channels/StageChannelModalActionCreators.tsx";
import StageChannelActionCreators from "../../stage_channels/StageChannelActionCreators.tsx";
import AgeVerificationActionCreatorsDefault from "../../age_assurance/AgeVerificationActionCreators.native.tsx";
import SafetyHubConstants from "../../safety_hub/SafetyHubConstants.tsx";
import ApplicationUtils from "../../../utils/native/ApplicationUtils.tsx";
import PremiumUpsellUtilsDefault from "../../../utils/native/PremiumUpsellUtils.tsx";
import trackApplicationOpenDefault from "../../activities/utils/trackApplicationOpen.tsx";
import useGuildProfileCTA from "../../guild_profile/hooks/useGuildProfileCTA.tsx";
import SummaryActionCreatorsDefault from "../../summaries/SummaryActionCreators.tsx";
import messages_MessagesUtils from "MessagesUtils.tsx";
import reactions_ReactionUtils from "../../reactions/native/ReactionUtils.tsx";
import VoiceChannelListInviteExperiment from "../VoiceChannelListInviteExperiment.tsx";
import VoiceChannelListInviteEmbed from "renderer/row_data/embeds/coded_links/invite/VoiceChannelListInviteEmbed.tsx";
import autocompleter_AutocompleteUtils from "../../autocompleter/native/AutocompleteUtils.tsx";
import showStickerDetailActionSheet from "../../stickers/native/showStickerDetailActionSheet.tsx";
import utils_openGiftModal from "../../premium/native/utils/openGiftModal.tsx";
import SocialLayerStorefrontNativeActionCreators from "../../slayer_storefront/native/SocialLayerStorefrontNativeActionCreators.tsx";
import showChatGDMCustomizeActionSheetDefault from "../../group_dm/native/showChatGDMCustomizeActionSheet.tsx";
import MarkupReactCommandRule from "../../markup/native/MarkupReactCommandRule.tsx";
import openBlockedPaymentsCountryActionSheetDefault from "../../billing/native/openBlockedPaymentsCountryActionSheet.tsx";
import ActivitiesActionCreatorsDefault from "../../../actions/ActivitiesActionCreators.tsx";
import isAlertOrActionSheetOpen from "../../../components_native/chat/isAlertOrActionSheetOpen.tsx";
import MessageDataSnowflakeUtils from "snowflake/MessageDataSnowflakeUtils.tsx";
import contentHandlers2 from "../../../components_native/chat/contentHandlers.tsx";
import handleAcceptEventInstantInviteDefault from "../../guild_scheduled_events/native/handleAcceptEventInstantInvite.tsx";
import openPinnedMessagesDefault from "openPinnedMessages.tsx";
import trackRepliedMessageClickedDefault from "../../replies/trackRepliedMessageClicked.tsx";
import showLongPressMessageActionSheet2 from "long_press/showLongPressMessageActionSheet.tsx";
import LongPressMessageActionSheetUtils from "long_press/LongPressMessageActionSheetUtils.tsx";
import replyToMessageDefault from "../../replies/native/replyToMessage.tsx";
import ForwardModalUtils from "../../forwarding/native/ForwardModalUtils.tsx";
import PollsActionCreatorsDefault from "../../polls/PollsActionCreators.tsx";
import canEditMessageDefault from "../canEditMessage.tsx";
import UploadActionCreatorsDefault from "../../../actions/native/UploadActionCreators.tsx";
import getCurrentUserPresenceActivityDefault from "../../activities/utils/getCurrentUserPresenceActivity.tsx";
import GamesActionCreatorsDefault from "../../../actions/GamesActionCreators.native.tsx";
import build_overrides_BuildOverrideUtils from "../../build_overrides/native/BuildOverrideUtils.tsx";
import guild_templates_GuildTemplateActionCreatorsDefault from "../../guild_templates/native/GuildTemplateActionCreators.tsx";
import ExperimentEmbedPlatformUtils from "../../experiments/native/ExperimentEmbedPlatformUtils.tsx";
import PremiumGiftingIntentUtils from "../../premium/gifting/utils/PremiumGiftingIntentUtils.tsx";
import system_message_GuildRoleSubscriptionSystemMessageUtils from "../../guild_role_subscriptions/native/system_message/GuildRoleSubscriptionSystemMessageUtils.tsx";
import showModerateUserActionSheetDefault from "../../guild_automod/native/showModerateUserActionSheet.tsx";
import GuildAutomodActionActionCreators from "../../guild_automod/GuildAutomodActionActionCreators.native.tsx";
import ForumOriginalPoster from "../../forums/native/ForumOriginalPoster.tsx";
import VoiceMessageAnalytics from "../../voice_messages/VoiceMessageAnalytics.tsx";
import MediaAnalytics from "../../media/MediaAnalytics.tsx";
import MediaChannelActionCreatorsAll from "../../media_channel/MediaChannelActionCreators.tsx";
import jumpToReferencedMessageDefault from "jumpToReferencedMessage.tsx";
import handleForwardBreadcrumbDefault from "../../forwarding/handleForwardBreadcrumb.tsx";
import getInlineForwardOptions from "../../forwarding/getInlineForwardOptions.tsx";
import openSoundmojiActionSheetDefault from "../../premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx";
import ContentInventoryActionCreators from "../../content_inventory/ContentInventoryActionCreators.tsx";
import onTapCheckpointCard from "../../checkpoint/native/onTapCheckpointCard.tsx";
import createAppMessageEmbed from "../../applications/message_embed/native/createAppMessageEmbed.tsx";
import previewSharedClientTheme from "../../client_themes/native/chat/previewSharedClientTheme.tsx";
import sharedClientThemeViewed from "../../client_themes/native/chat/sharedClientThemeViewed.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import ApplicationStore from "../../applications/ApplicationStore.tsx";
import SelectedConversationStore from "../../conversations/SelectedConversationStore.tsx";
import ApplicationDirectoryApplicationsStore from "../../global_discovery_apps/stores/ApplicationDirectoryApplicationsStore.tsx";
import GuildIncidentsStore from "../../guild_antiraid/GuildIncidentsStore.tsx";
import PremiumGiftingIntentStore from "../../premium/gifting/PremiumGiftingIntentStore.tsx";
import QuestStore from "../../quests/QuestStore.tsx";
import ReferencedMessageStore from "../../replies/ReferencedMessageStore.tsx";
import SummaryStore from "../../summaries/SummaryStore.tsx";
import JoinedThreadsStore from "../../threads/JoinedThreadsStore.tsx";
import UserAffinitiesV2Store from "../../user_affinities/UserAffinitiesV2Store.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GiftCodeStore from "../../../stores/GiftCodeStore.tsx";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import InviteStore from "../../../stores/InviteStore.tsx";
import LocalActivityStore from "../../../stores/LocalActivityStore.tsx";
import MessageStore from "../../../stores/MessageStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import PresenceStore from "../../../stores/PresenceStore.tsx";
import SelectedChannelStore from "../../../stores/SelectedChannelStore.tsx";
import SelectedGuildStore from "../../../stores/SelectedGuildStore.tsx";
import SelfPresenceStore from "../../../stores/SelfPresenceStore.tsx";
import UploadStore from "../../../stores/UploadStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import Constants from "../../../Constants.tsx";
import PremiumConstants from "../../premium/PremiumConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const InstantInviteActionCreatorsDefault = InstantInviteActionCreators;
let application, applicationActivity, c1, c3, channel, guildScheduledEvent, handleMessagesTapLink;

let closure_37;
let closure_38;
let closure_39;
let closure_40;
let closure_41;
let closure_42;
let closure_43;
let closure_44;
let closure_45;
let closure_46;
let closure_47;
let closure_48;
let closure_49;
let closure_50;
let closure_51;
let closure_52;
let closure_53;
let closure_54;
let closure_55;
let closure_56;
let closure_57;
let closure_59;
let closure_60;
let closure_4 = ["messageId"];
let closure_5 = ["messageId"];
let closure_14 = GuildScheduledEventStore2.isGuildScheduledEventActive;
const SeparatorAction = RowGeneratorConstants.SeparatorAction;
({
  ActivityActionTypes: closure_37,
  ActivityFlags: closure_38,
  ActivityGamePlatforms: closure_39,
  ActivityTypes: closure_40,
  AnalyticEvents: closure_41,
  AnalyticsGameOpenTypes: closure_42,
  AnalyticsLocations: closure_43,
  AnalyticsObjects: closure_44,
  AnalyticsObjectTypes: closure_45,
  AnalyticsPages: closure_46,
  AnalyticsSections: closure_47,
  LinkingTypes: closure_48,
  ME: closure_49,
  MessageFlags: closure_50,
  MessageStates: closure_51,
  MessageTypes: closure_52,
  Permissions: closure_53,
  Routes: closure_54,
  UpsellTypes: closure_55,
  UserSettingsSections: closure_56,
  WebBrowserType: closure_57,
} = Constants);
const InviteTypes = Constants2.InviteTypes;
({ PremiumTypes: closure_59, PremiumUpsellTypes: closure_60 } = PremiumConstants);
let closure_61 = SafetyHubConstants.SafetySystemNotificationCtaType;
let closure_62 = ThreadConstants.OpenThreadAnalyticsLocations;
const jsx = Fragment.jsx;
let tmp4 = new LoggerDefault("GameOrganizationInviteEmbed");
let closure_64 = tmp4;
let items = [AnalyticsLocationDefault.PREMIUM_GIFT_INTENT_CARD];
let result = size.fileFinishedImporting("modules/messages/native/MessagesHandlers.tsx");
class MessagesHandlers {
  constructor(getParams) {
    let TIER_2;
    let constants12;
    let friendAnniversaries;
    let logger;
    let obj = Object.create(new.target.prototype);
    obj.getMessageData = function getMessageData(messageId) {
      if (null == messageId) {
        return null;
      } else {
        const message = obj.params.getMessage(messageId);
        if (null == message) {
          return null;
        } else {
          channel = ChannelStore.getChannel(message.channel_id);
          let tmp5 = null;
          if (null != channel) {
            obj = { message, messageChannel: channel };
            tmp5 = obj;
          }
          return tmp5;
        }
      }
    };
    obj.isModalOrActionsheetObstructing = function isModalOrActionsheetObstructing() {
      obj = isAlertOrActionSheetOpen;
      return obj.isAlertOrActionSheetOpen(obj.params.selectedChannelId);
    };
    obj.handleTapImage = function handleTapImage(nativeEvent) {
      nativeEvent = nativeEvent.nativeEvent;
      const messageData = nativeEvent.getMessageData(nativeEvent.id);
      if (null != messageData) {
        const promise = obj(dependencyMap[40])(dependencyMap[39], dependencyMap.paths);
        promise.then((handleMessagesTapImage) => {
          obj = {
            tapImageData: nativeEvent,
            allowWithinModal: false,
            message: messageData.message,
            messageChannel: messageData.messageChannel,
            selectedChannelId: obj.params.selectedChannelId,
          };
          const result = handleMessagesTapImage.handleMessagesTapImage(obj);
        });
      }
    };
    obj.handleTapChannel = function handleTapChannel(nativeEvent) {
      let data;
      if (!data.isModalOrActionsheetObstructing()) {
        obj = obj(dependencyMap[41]);
        data = obj.getNativeSyntheticEventData(nativeEvent).data;
        const promise = obj(dependencyMap[40])(dependencyMap[42], dependencyMap.paths);
        promise.then((handleMessagesTapChannel) => {
          let params;
          obj = {
            data,
            dismissKeyboard() {
              const current = params.getParams().chatInputRef.current;
              let dismissKeyboardResult;
              if (current != null) {
                dismissKeyboardResult = current.dismissKeyboard();
              }
              return dismissKeyboardResult;
            },
          };
          const result = handleMessagesTapChannel.handleMessagesTapChannel(obj);
        });
      }
    };
    obj.handleLongPressChannel = function handleLongPressChannel(nativeEvent) {
      if (!obj.isModalOrActionsheetObstructing()) {
        obj = MessageDataSnowflakeUtils;
        const data = obj.getNativeSyntheticEventData(nativeEvent).data;
        const promise = asyncRequire(11213, dependencyMap.paths);
        promise.then((handleMessagesLongPressChannel) => {
          obj = { data };
          const result = handleMessagesLongPressChannel.handleMessagesLongPressChannel(obj);
        });
      }
    };
    obj.handleTapAttachmentLink = function handleTapAttachmentLink(arg0) {
      if (!obj.isModalOrActionsheetObstructing()) {
        const contentHandlers = contentHandlers2.contentHandlers;
        contentHandlers.onTapAttachmentLink(arg0);
      }
    };
    obj.handleTapAttachmentTextPreview = function handleTapAttachmentTextPreview(arg0) {
      if (!obj.isModalOrActionsheetObstructing()) {
        const contentHandlers = contentHandlers2.contentHandlers;
        const result = contentHandlers.onTapAttachmentTextPreview(arg0);
      }
    };
    obj.handleLongPressAttachmentLink = function handleLongPressAttachmentLink(arg0) {
      if (!obj.isModalOrActionsheetObstructing()) {
        const contentHandlers = contentHandlers2.contentHandlers;
        const result = contentHandlers.onLongPressAttachmentLink(arg0);
      }
    };
    obj.handleTapCall = function handleTapCall(nativeEvent) {
      let intl;
      let intl2;
      obj = channel(closure_3[41]);
      const data = obj.getNativeSyntheticEventData(nativeEvent).data;
      const channelId = data.channelId;
      const messageId = data.messageId;
      channel = channel.getChannel(channelId);
      const tmp3 = null != channel && channel.isPrivate();
      if (tmp3) {
        const tmpResult = channel(closure_3[45]);
        if (tmpResult.checkIsCallActive(channelId, messageId)) {
          const tmpResult3 = channel(closure_3[46]);
          tmpResult3.handleJoinCall(channel);
        } else {
          const obj2 = { key: "CallTap", options: items, hasIcons: true };
          const obj3 = {
            label: intl.string(channel(closure_3[48]).t.focH1t),
            IconComponent: channel(closure_3[49]).PhoneCallIcon,
            onPress() {
              obj = obj(dependencyMap[46]);
              obj.handleStartCall(channel);
            },
          };
          const showSimpleActionSheet = channel(closure_3[47]).showSimpleActionSheet;
          channel(closure_3[47]);
          intl = tmp(closure_3[48]).intl;
          items = [obj3];
          const obj4 = {
            label: intl2.string(channel(closure_3[48]).t.oCqlGG),
            IconComponent: channel(closure_3[50]).VideoIcon,
            onPress() {
              obj = obj(dependencyMap[46]);
              obj.handleStartCall(channel, true);
            },
          };
          intl2 = tmp(closure_3[48]).intl;
          items[1] = obj4;
          const result = showSimpleActionSheet(obj2);
        }
      }
    };
    obj.handleTapMention = function handleTapMention(nativeEvent) {
      if (!obj.isModalOrActionsheetObstructing()) {
        const contentHandlers = contentHandlers2.contentHandlers;
        contentHandlers.onTapMention(nativeEvent);
      }
    };
    obj.handleTapCommandMention = function handleTapCommandMention(nativeEvent) {
      let str;
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      const commandName = nativeSyntheticEventData.commandName;
      const commandId = nativeSyntheticEventData.commandId;
      const channelId = nativeSyntheticEventData.channelId;
      const chatInputRef = obj.getParams().chatInputRef;
      let current = chatInputRef.current;
      const obj2 = {
        channelId,
        currentText: str,
        commandId,
        commandName,
        onOpenCustomKeyboard(arg0) {
          const current = chatInputRef.current;
          let openCustomKeyboardResult;
          if (current != null) {
            openCustomKeyboardResult = current.openCustomKeyboard(arg0);
          }
          return openCustomKeyboardResult;
        },
        onSetCommand() {
          obj = closure_2_1(closure_2_3[52]);
          obj.hideActionSheet();
          closure_2_1(closure_2_3[53])();
          const current = chatInputRef.current;
          if (current != null) {
            current.openSystemKeyboard();
          }
          const current2 = chatInputRef.current;
          if (current2 != null) {
            const applicationCommandManager = current2.getApplicationCommandManager();
            if (applicationCommandManager != null) {
              applicationCommandManager.setPartialCommand(
                commandId,
                commandName,
                closure_2_0(closure_2_3[54]).ApplicationCommandTriggerLocations.MENTION,
              );
            }
          }
        },
      };
      str = undefined;
      const handleTapCommandMention = MarkupReactCommandRule.handleTapCommandMention;
      if (current != null) {
        str = current.getText();
      }
      if (str == null) {
        str = "";
      }
      const result = handleTapCommandMention(obj2);
    };
    obj.handleLongPressCommandMention = function handleLongPressCommandMention(nativeEvent) {
      let commandId;
      let commandName;
      ({ commandName, commandId } = nativeEvent.nativeEvent);
      obj = obj(dependencyMap[51]);
      const result = obj.handleLongPressCommandMention(commandName, commandId);
    };
    obj.handleTapGameMention = function handleTapGameMention(nativeEvent) {
      if (!obj.isModalOrActionsheetObstructing()) {
        obj = MessageDataSnowflakeUtils;
        const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
        const promise = asyncRequire(11249, dependencyMap.paths);
        promise.then((handleMessagesTapGameMention) => {
          obj = { gameId: gameId.gameId };
          const result = handleMessagesTapGameMention.handleMessagesTapGameMention(obj);
        });
      }
    };
    obj.handleTapGuildEventLink = function handleTapGuildEventLink(node) {
      node = node.node;
      if (null != node) {
        const tmp2 = obj;
        obj = obj(dependencyMap[56]);
        if (obj.isLinkTrusted(node)) {
          const payload = parseURLDefault(tmp).payload;
          if (payload.type !== constants8.INVITE) {
            return false;
          } else if (null == payload.inviteCode) {
            return false;
          } else {
            invite = invite.getInvite(payload.inviteCode);
            let tmp8 = null == invite;
            if (!tmp8) {
              const tmp2Result = tmp2(dependencyMap[58]);
              tmp8 = !tmp2Result.isGuildScheduledEventInviteEmbed(invite);
            }
            let flag = !tmp8;
            if (flag) {
              handleAcceptEventInstantInviteDefault(invite);
              flag = true;
            }
            return flag;
          }
        }
      }
      return false;
    };
    obj.handleTapLink = function handleTapLink(nativeEvent) {
      let closure_1;
      nativeEvent = nativeEvent.nativeEvent;
      const messageData = nativeEvent.getMessageData(nativeEvent.data.messageId);
      const promise = obj(dependencyMap[40])(dependencyMap[60], dependencyMap.paths);
      promise.then((handleMessagesTapLink) => {
        let message;
        let messageChannel;
        let tmp;
        obj = {
          allowWithinModal: false,
          chatInputRef: obj.params.chatInputRef,
          handleTransitionToThread: obj.handleTransitionToThread,
          message,
          messageChannel,
          selectedChannelId: tmp.params.selectedChannelId,
          tapLinkData: nativeEvent,
        };
        message = undefined;
        handleMessagesTapLink = handleMessagesTapLink.handleMessagesTapLink;
        tmp = obj;
        if (closure_1 != null) {
          message = closure_1.message;
        }
        messageChannel = undefined;
        if (closure_1 != null) {
          messageChannel = closure_1.messageChannel;
        }
        const result = handleMessagesTapLink(obj);
      });
    };
    obj.handleLongPressLink = function handleLongPressLink(nativeEvent) {
      if (!obj.isModalOrActionsheetObstructing()) {
        const contentHandlers = contentHandlers2.contentHandlers;
        contentHandlers.onLongPressLink(nativeEvent);
      }
    };
    obj.handleTapReaction = function handleTapReaction(nativeEvent) {
      let isBurst;
      let messageId;
      let reaction;
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      ({ reaction, messageId, isBurst } = nativeSyntheticEventData);
      const obj2 = obj;
      if (!obj.isModalOrActionsheetObstructing()) {
        const messageData = obj2.getMessageData(messageId);
        if (null != messageData) {
          const messageChannel = messageData.messageChannel;
          let tmp7 = null;
          const handleAddOrRemoveReaction = messages_MessagesUtils.handleAddOrRemoveReaction;
          const tmpResult = messages_MessagesUtils;
          if (null != reaction) {
            const obj3 = { emoji: reaction.emoji };
            const merged = Object.assign(reaction);
            tmp7 = obj3;
          }
          const result = handleAddOrRemoveReaction(
            messageId,
            messageChannel,
            tmp7,
            isBurst,
            nativeEvent.nativeEvent.location,
          );
        }
      }
    };
    obj.handleTapReactionOverflow = function handleTapReactionOverflow(nativeEvent) {
      let channelId;
      let messageId;
      let obj3;
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      ({ messageId, channelId } = nativeSyntheticEventData);
      if (!obj.isModalOrActionsheetObstructing()) {
        const obj2 = { messageId, channelId, location: obj3 };
        obj3 = { object: constants2.CHANNEL, objectType: constants3.REACTION_OVERFLOW };
        const tmpResult = reactions_ReactionUtils;
        tmpResult.handleViewReactions(obj2);
      }
    };
    obj.handleLongPressReaction = function handleLongPressReaction(nativeEvent) {
      let channelId;
      let emoji;
      let isBurst;
      let messageId;
      let obj3;
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      const reaction = nativeSyntheticEventData.reaction;
      ({ messageId, channelId, isBurst } = nativeSyntheticEventData);
      if (!obj.isModalOrActionsheetObstructing()) {
        const obj2 = { messageId, channelId, emoji, isSelectedBurst: isBurst, location: obj3 };
        emoji = null;
        const handleViewReactions = reactions_ReactionUtils.handleViewReactions;
        reactions_ReactionUtils;
        if (null != reaction) {
          emoji = reaction.emoji;
        }
        obj3 = { object: constants2.CHANNEL, objectType: constants3.REACTION };
        handleViewReactions(obj2);
      }
    };
    obj.handleOpenSticker = function handleOpenSticker(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      const sticker = nativeSyntheticEventData.sticker;
      const messageData = obj.getMessageData(nativeSyntheticEventData.messageId);
      const tmp4 = obj;
      if (null != messageData) {
        const obj2 = {
          renderableSticker: sticker,
          channel: messageData.messageChannel,
          chatInputRef: tmp4.params.chatInputRef,
        };
        const tmpResult = showStickerDetailActionSheet;
        const result = tmpResult.showStickerDetailActionSheet(obj2);
      }
    };
    obj.handleTapAvatar = function handleTapAvatar(arg0) {
      const handleOpenProfile = obj.handleOpenProfile;
      items = [AnalyticsLocationDefault.AVATAR];
      handleOpenProfile(arg0, items);
    };
    obj.handleTapUsername = function handleTapUsername(nativeEvent) {
      obj = PlatformUtils;
      if (obj.isIOS()) {
        const handleOpenProfile2 = obj.handleOpenProfile;
        items = [AnalyticsLocationDefault.USERNAME];
        handleOpenProfile2(nativeEvent, items);
      } else {
        const tmpResult = MessageDataSnowflakeUtils;
        const nativeSyntheticEventData = tmpResult.getNativeSyntheticEventData(nativeEvent);
        const userId = nativeSyntheticEventData.userId;
        const messageData = obj.getMessageData(nativeSyntheticEventData.messageId);
        if (null != messageData) {
          const message = messageData.message;
          if (isCrosspostDefault(message)) {
            if (null != message.messageReference.guild_id) {
              const handleOpenProfile = obj3.handleOpenProfile;
              const items1 = [AnalyticsLocationDefault.USERNAME];
              handleOpenProfile(nativeEvent, items1);
            }
          }
          if (null != userId) {
            const user = UserStore.getUser(userId);
            const messageChannel = messageData.messageChannel;
            const chatInputRef = obj3.getParams().chatInputRef;
            const isPrivateResult = messageChannel.isPrivate();
            const canResult = PermissionStore.can(constants5.SEND_MESSAGES, messageChannel);
            let tmp7 = undefined === user;
            const tmpResult3 = ThreadHooks;
            const isReadOnlyThread = tmpResult3.computeIsReadOnlyThread(messageChannel);
            if (!tmp7) {
              tmp7 = !isPrivateResult && !canResult;
            }
            if (!tmp7) {
              tmp7 = isReadOnlyThread;
            }
            if (!tmp7) {
              const current = chatInputRef.current;
              if (current != null) {
                const insertText = current.insertText;
                const tmpResult4 = autocompleter_AutocompleteUtils;
                insertText(tmpResult4.getMentionTextWithUser(messageChannel, user), null, true);
              }
            }
          }
        }
      }
    };
    obj.handleLongPressUsername = function handleLongPressUsername(arg0) {
      const handleOpenProfile = obj.handleOpenProfile;
      items = [AnalyticsLocationDefault.USERNAME];
      handleOpenProfile(arg0, items);
    };
    obj.handleOpenProfile = function handleOpenProfile(nativeEvent, sourceAnalyticsLocations) {
      let messageId;
      let userId;
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      ({ messageId, userId } = nativeSyntheticEventData);
      const messageData = obj.getMessageData(messageId);
      if (null != messageData) {
        const message = messageData.message;
        let user;
        const messageChannel = messageData.messageChannel;
        if (null != userId) {
          user = UserStore.getUser(userId);
        }
        let tmp7 = user;
        if (null != messageId) {
          const tmpResult = PublicGuildsUtils;
          if (tmpResult.isPublicSystemMessage(message)) {
            const obj5 = ActionSheetActionCreatorsDefault;
            obj5.openLazy(asyncRequire(11285, dependencyMap.paths), "PublicGuildAnnouncementProfile");
          } else {
            let user1 = user;
            if (null == user) {
              user1 = UserStore.getUser(message.author.id);
            }
            if (isCrosspostDefault(message)) {
              const guild_id = message.messageReference.guild_id;
              if (null != guild_id) {
                const openLazy2 = ActionSheetActionCreatorsDefault.openLazy;
                const _HermesInternal2 = HermesInternal;
                ActionSheetActionCreatorsDefault;
                const obj2 = { guildId: guild_id };
                const tmp22 = asyncRequire(9410, dependencyMap.paths);
                openLazy2(tmp22, "GuildProfileActionSheet:" + guild_id, obj2);
              }
            }
            tmp7 = user1;
            if (message.type === closure_52.THREAD_STARTER_MESSAGE) {
              tmp7 = user1;
              if (null != message.messageReference) {
                const messageByReference = ReferencedMessageStore.getMessageByReference(message.messageReference);
                tmp7 = user1;
                if (null != messageByReference) {
                  tmp7 = user1;
                  if (null != messageByReference.message) {
                    tmp7 = user1;
                    if (isCrosspostDefault(messageByReference.message)) {
                      tmp7 = user1;
                      if (null != messageByReference.message.messageReference) {
                        tmp7 = user1;
                        if (null != messageByReference.message.messageReference.guild_id) {
                          const guild_id2 = messageByReference.message.messageReference.guild_id;
                          const openLazy = ActionSheetActionCreatorsDefault.openLazy;
                          const _HermesInternal = HermesInternal;
                          ActionSheetActionCreatorsDefault;
                          const obj3 = { guildId: guild_id2 };
                          const tmp18 = asyncRequire(9410, dependencyMap.paths);
                          openLazy(tmp18, "GuildProfileActionSheet:" + guild_id2, obj3);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        if (null != tmp7) {
          const obj4 = { userId: tmp7.id, channelId: messageChannel.id, messageId, sourceAnalyticsLocations };
          showUserProfileActionSheetDefault(obj4);
        }
      }
    };
    obj.handleTapThreadEmbed = function handleTapThreadEmbed(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const messageId = obj.getNativeSyntheticEventData(nativeEvent).messageId;
      const messageData = obj.getMessageData(messageId);
      if (null != messageData) {
        const messageChannel = messageData.messageChannel;
        const guildId = messageChannel.getGuildId();
        const tmp4 = null != messageId && null != guildId;
        if (tmp4) {
          const current = obj2.getParams().chatInputRef.current;
          if (current != null) {
            current.blur();
          }
          const handleTransitionToThread = obj2.handleTransitionToThread;
          const obj3 = SnowflakeUtilsDefault;
          const result = handleTransitionToThread(guildId, obj3.castMessageIdAsChannelId(messageId), constants12.EMBED);
        }
      }
    };
    obj.handleTapReply = function handleTapReply(nativeEvent) {
      let message;
      let messageChannel;
      const messageData = obj.getMessageData(nativeEvent.nativeEvent.originId);
      if (null != messageData) {
        ({ messageChannel, message } = messageData);
        let guildId = messageChannel.getGuildId();
        if (guildId == null) {
          guildId = lastJoinedRecommendedGuild;
        }
        const messageReference = message.messageReference;
        let message_id;
        if (messageReference != null) {
          message_id = messageReference.message_id;
        }
        if (null != message_id) {
          const messageByReference = ReferencedMessageStore.getMessageByReference(message.messageReference);
          trackRepliedMessageClickedDefault(message, messageByReference, messageChannel);
          const result = obj.handleTransitionToMessage(guildId, messageChannel.id, message_id);
        }
      }
    };
    obj.handleTapSummary = function handleTapSummary(nativeEvent) {
      let channelId;
      let summaryId;
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      ({ channelId, summaryId } = nativeSyntheticEventData);
      if (null != obj.getMessageData(nativeSyntheticEventData.messageId)) {
        const findSummaryResult = SummaryStore.findSummary(channelId, summaryId);
        if (null != findSummaryResult) {
          const obj3 = { summary: findSummaryResult };
          const obj2 = ActionSheetActionCreatorsDefault;
          obj2.openLazy(asyncRequire(11288, dependencyMap.paths), "SummaryActionSheet", obj3);
        }
      }
    };
    obj.handleTapConversationHeader = function handleTapConversationHeader(nativeEvent) {
      let channelId;
      let conversationId;
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      ({ channelId, conversationId } = nativeSyntheticEventData);
      if (null != obj.getMessageData(nativeSyntheticEventData.messageId)) {
        const selectedConversation = SelectedConversationStore.getSelectedConversation(channelId);
        id = undefined;
        if (selectedConversation != null) {
          id = selectedConversation.id;
        }
        if (id === conversationId) {
          const ConversationsAnalytics = ConversationsAnalytics2.ConversationsAnalytics;
          const obj2 = { channelId, conversationId, isFocusMode: false };
          const result = ConversationsAnalytics.trackTopicsUnitClicked(obj2);
          const tmpResult = ConversationsActionCreators;
          const conversationMessages = tmpResult.fetchConversationMessages(channelId, conversationId, {
            includeReactions: true,
            includeMessageReferences: true,
          });
          const obj3 = { channelId, guildId: selectedConversation.guildId, focusSelectedConversation: true };
          const tmpResult2 = ConversationNavigator;
          const result1 = tmpResult2.openConversationNavigator(obj3);
        }
      }
    };
    obj.handleTapSummaryJump = function handleTapSummaryJump(nativeEvent) {
      let channelId;
      let message;
      let messageChannel;
      let summaryId;
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      ({ channelId, summaryId } = nativeSyntheticEventData);
      const messageData = obj.getMessageData(nativeSyntheticEventData.messageId);
      const obj2 = obj;
      if (null != messageData) {
        ({ messageChannel, message } = messageData);
        let guildId = messageChannel.getGuildId();
        if (guildId == null) {
          guildId = lastJoinedRecommendedGuild;
        }
        const result = obj2.handleTransitionToMessage(guildId, messageChannel.id, message.id);
        const obj3 = SummaryActionCreatorsDefault;
        obj3.setSelectedSummary(channelId, summaryId);
      }
    };
    obj.handleLongPressMessage = function handleLongPressMessage(nativeEvent) {
      let componentMediaIndex;
      let mediaIndex;
      let mediaType;
      let message;
      let messageChannel;
      let messageId;
      let obj4;
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      ({ messageId, mediaIndex, mediaType, componentMediaIndex } = nativeSyntheticEventData);
      const componentId = nativeSyntheticEventData.componentId;
      const messageData = obj.getMessageData(messageId);
      if (null != messageData) {
        ({ messageChannel, message } = messageData);
        if (!obj.isModalOrActionsheetObstructing()) {
          const user = UserStore.getUser(message.author.id);
          if (null != user) {
            if (null == UploadStore.getUploaderFileForMessageId(messageId)) {
              const getLongPressSelectedMedia = messages_MessagesUtils.getLongPressSelectedMedia;
              const tmpResult = messages_MessagesUtils;
              const tmpResult3 = InteractionComponentTypes;
              const longPressSelectedMedia = getLongPressSelectedMedia(
                message,
                mediaIndex,
                mediaType,
                tmpResult3.asComponentId(componentId),
                componentMediaIndex,
              );
              const obj3 = {
                analyticsLocation: obj4,
                canAddNewReactions: canAddNewReactionsDefault(messageChannel),
                channel: messageChannel,
                chatInputRef: obj.params.chatInputRef,
                message,
                selectedMedia: longPressSelectedMedia,
                user,
              };
              obj4 = { section: constants7.CHANNEL, object: constants2.MESSAGE };
              const showLongPressMessageActionSheet = showLongPressMessageActionSheet2.showLongPressMessageActionSheet;
              showLongPressMessageActionSheet2;
              const result = showLongPressMessageActionSheet(obj3);
            }
          }
        }
      }
    };
    obj.handleInitiateReply = function handleInitiateReply(nativeEvent) {
      let message;
      let messageChannel;
      let str;
      const chatInputRef = obj.params.chatInputRef;
      obj = MessageDataSnowflakeUtils;
      const messageData = obj.getMessageData(obj.getNativeSyntheticEventData(nativeEvent).messageId);
      if (null != messageData) {
        ({ messageChannel, message } = messageData);
        if (nativeEvent.nativeEvent.triggerHaptic) {
          const tmpResult = HapticUtils;
          const result = tmpResult.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
        }
        const obj2 = { message, channel: messageChannel, chatInputRef, actionSource: str, invertible: true };
        str = nativeEvent.nativeEvent.location;
        const tmp7 = replyToMessageDefault;
        if (str == null) {
          str = "message_swipe";
        }
        tmp7(obj2);
      }
    };
    obj.handleInitiateThread = function handleInitiateThread(nativeEvent) {
      let message;
      let messageChannel;
      obj = MessageDataSnowflakeUtils;
      const messageData = obj.getMessageData(obj.getNativeSyntheticEventData(nativeEvent).messageId);
      if (null != messageData) {
        ({ messageChannel, message } = messageData);
        const tmpResult = HapticUtils;
        const result = tmpResult.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
        if (message.hasFlag(constants4.HAS_THREAD)) {
          const transitionToGuild = router_utils.transitionToGuild;
          const guild_id = messageChannel.guild_id;
          router_utils;
          const tmp7Result = SnowflakeUtilsDefault;
          transitionToGuild(guild_id, tmp7Result.castMessageIdAsChannelId(message.id));
        } else {
          const tmpResult4 = LongPressMessageActionSheetUtils;
          tmpResult4.handleCreateThread(messageChannel, message, "Message Shortcut");
        }
      }
    };
    obj.handleInitiateEdit = function handleInitiateEdit(nativeEvent) {
      let message;
      let messageChannel;
      const chatInputRef = obj.params.chatInputRef;
      obj = MessageDataSnowflakeUtils;
      const messageData = obj.getMessageData(obj.getNativeSyntheticEventData(nativeEvent).messageId);
      if (null != messageData) {
        ({ messageChannel, message } = messageData);
        const currentUser = UserStore.getCurrentUser();
        id = undefined;
        const tmp7 = canEditMessageDefault;
        if (currentUser != null) {
          id = currentUser.id;
        }
        if (tmp7(message, id)) {
          const tmpResult = LongPressMessageActionSheetUtils;
          tmpResult.handleEdit(message, messageChannel, chatInputRef, "message_swipe", true);
        }
      }
    };
    obj.handleTapMessage = function handleTapMessage(nativeEvent) {
      let embedChannel;
      let flaggedMessageId;
      let message;
      let messageChannel;
      let obj5;
      obj = MessageDataSnowflakeUtils;
      const messageData = obj.getMessageData(obj.getNativeSyntheticEventData(nativeEvent).messageId);
      const tmp3 = obj;
      if (null != messageData) {
        ({ messageChannel, message } = messageData);
        const guildId = messageChannel.getGuildId();
        if (null != message) {
          if (null != guildId) {
            const type = message.type;
            if (closure_52.GUILD_BOOST !== type) {
              if (closure_52.GUILD_BOOST_TIER_1 !== type) {
                if (closure_52.GUILD_BOOST_TIER_2 !== type) {
                  if (closure_52.GUILD_BOOST_TIER_3 !== type) {
                    if (closure_52.AUTO_MODERATION_ACTION === type) {
                      const tmpResult = AutomodMessageUtils;
                      if (tmpResult.isAutomodMessageRecord(message)) {
                        const tmpResult2 = AutomodMessageUtils;
                        const result = tmpResult2.extractAutomodMessageFields(message);
                        ({ embedChannel, flaggedMessageId } = result);
                        const tmp6 = null != flaggedMessageId && null != embedChannel;
                        if (tmp6) {
                          id = undefined;
                          const handleTransitionToMessage = tmp3.handleTransitionToMessage;
                          if (embedChannel != null) {
                            id = embedChannel.id;
                          }
                          const result1 = handleTransitionToMessage(guildId, id, flaggedMessageId);
                        }
                      }
                    }
                  }
                }
              }
            }
            const obj3 = BoostingActionCreatorsAll;
            obj3.openApplyBoostModal(guildId);
            const obj2 = { location: obj5 };
            obj5 = { section: constants7.CHANNEL_TEXT_AREA, object: constants2.BOOST_ANNOUNCEMENT_UPSELL };
            const obj4 = AppAnalyticsUtilsDefault;
            obj4.trackWithMetadata(set2.PREMIUM_GUILD_PROMOTION_OPENED, obj2);
          }
        }
      }
    };
    obj.handleDoubleTapMessage = function handleDoubleTapMessage(nativeEvent) {
      let message;
      let messageChannel;
      obj = MessageDataSnowflakeUtils;
      const messageData = obj.getMessageData(obj.getNativeSyntheticEventData(nativeEvent).messageId);
      if (null != messageData) {
        ({ messageChannel, message } = messageData);
        const tmpResult = DoubleTapToReactUtils;
        const result = tmpResult.handleAddDefaultDoubleTapReaction(message, messageChannel);
      }
    };
    obj.handleTapSeparator = function handleTapSeparator(nativeEvent) {
      nativeEvent = nativeEvent.nativeEvent;
      if (!obj.isModalOrActionsheetObstructing()) {
        const type = nativeEvent.type;
        if (SeparatorAction.LOAD_MORE_BEFORE === type) {
          const params2 = obj.params;
          const moreBefore = params2.loadMoreBefore();
        } else if (SeparatorAction.LOAD_MORE_AFTER === type) {
          const params = obj.params;
          const moreAfter = params.loadMoreAfter();
        } else if (SeparatorAction.TOGGLE_BLOCKED_MESSAGES === type) {
          if (null != nativeEvent.context) {
            obj.handleReveal(nativeEvent.context);
          }
        }
      }
    };
    obj.handleTapCancelUploadItem = function handleTapCancelUploadItem(nativeEvent) {
      const uploaderId = nativeEvent.nativeEvent.uploaderId;
      const uploads = obj.params.uploads;
      if (null != uploads) {
        const found = uploads.find((id) => id.id === uploaderId);
        if (null != found) {
          obj = HapticUtils;
          const result = obj.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
          const obj2 = UploadActionCreatorsDefault;
          obj2.cancelUploadItem(found, tmp);
        }
      }
    };
    obj.handleTapSpotifyResource = function handleTapSpotifyResource(message) {
      const author = message.author;
      if (null != author) {
        if (null != author.id) {
          const findActivityResult = PresenceStore.findActivity(author.id, (type) => type.type === constants.LISTENING);
          obj = obj(dependencyMap[93]);
          obj.openTrack(findActivityResult);
        }
      }
    };
    obj.handleTapActivityResource = function handleTapActivityResource(message) {
      let author;
      let deeplink_uri;
      let guild_id;
      let guild_id1;
      let id2;
      let items1;
      let items2;
      let items3;
      ({ author, application } = message);
      if (null != author) {
        if (null != message.activity) {
          if (null != application) {
            if (null != author.id) {
              const channel_id = message.channel_id;
              channel = ChannelStore.getChannel(channel_id);
              ({ id, deeplink_uri } = application);
              applicationActivity = PresenceStore.getApplicationActivity(author.id, id);
              if (null != applicationActivity) {
                const session_id = applicationActivity.session_id;
                if (null != session_id) {
                  let ANDROID;
                  const obj9 = obj(dependencyMap[64]);
                  if (obj9.isIOS()) {
                    ANDROID = constants3.IOS;
                  } else {
                    const tmp33Result = obj(dependencyMap[64]);
                    if (tmp33Result.isAndroid()) {
                      ANDROID = constants3.ANDROID;
                    }
                  }
                  let hasFlagResult = null != applicationActivity.flags;
                  if (hasFlagResult) {
                    const tmp33Result6 = obj(dependencyMap[94]);
                    hasFlagResult = tmp33Result6.hasFlag(applicationActivity.flags, constants2.EMBEDDED);
                  }
                  let flag = null != ANDROID;
                  if (flag) {
                    const supported_platforms = applicationActivity.supported_platforms;
                    let hasItem;
                    if (supported_platforms != null) {
                      hasItem = supported_platforms.includes(ANDROID);
                    }
                    flag = hasItem;
                  }
                  if (flag == null) {
                    flag = false;
                  }
                  let application1 = application.getApplication(id);
                  if (application1 == null) {
                    application1 = null;
                  }
                  if (null != application1) {
                    const tmp33Result7 = obj(dependencyMap[95]);
                    obj = {
                      presenceActivity: applicationActivity,
                      currentUserPresenceActivity: getCurrentUserPresenceActivityDefault(
                        LocalActivityStore,
                        closure_1_33,
                        id,
                      ),
                      currentUserId: id.getId(),
                      message,
                      application: application1,
                      isEmbeddedApplication: hasFlagResult,
                      isFrameApplication: false,
                      isGameLaunchable: flag,
                    };
                    const getCanJoin = tmp33Result7.getCanJoin;
                    const canJoin1 = getCanJoin(obj);
                    const remoteJoinPlatform = canJoin1.remoteJoinPlatform;
                    let tmp11;
                    const canJoin = canJoin1.canJoin;
                    if (null != remoteJoinPlatform) {
                      const party = applicationActivity.party;
                      let id1;
                      if (party != null) {
                        id1 = party.id;
                      }
                      tmp11 = id1;
                    }
                    if (!canJoin) {
                      const tmp33Result8 = obj(dependencyMap[97]);
                      if (tmp33Result8.getSupportsRemoteJoin(applicationActivity)) {
                        const tmp33Result9 = obj(dependencyMap[98]);
                        if (tmp33Result9.getShouldShowAppAuthPrompt(application1)) {
                          const startAuthorizationNoHook = obj(dependencyMap[99]).startAuthorizationNoHook;
                          items = [];
                          obj(dependencyMap[99]);
                          items[0] = AnalyticsLocationDefault.INVITE_EMBED;
                          const result = startAuthorizationNoHook(application1, items);
                        }
                      }
                    }
                    const obj2 = {
                      userId: author.id,
                      sessionId: session_id,
                      application,
                      channelId: channel_id,
                      messageId: message.id,
                      applicationActivity,
                      remotePartyId: tmp11,
                      embedded: hasFlagResult,
                      source: constants5.MESSAGE_EMBED,
                      analyticsLocations: items1,
                    };
                    const join = GamesActionCreatorsDefault.join;
                    items1 = [];
                    GamesActionCreatorsDefault;
                    items1[0] = AnalyticsLocationDefault.INVITE_EMBED;
                    const joined = join(obj2);
                    const obj3 = {
                      type: constants4.JOIN,
                      source: constants5.MESSAGE_EMBED,
                      userId: message.author.id,
                      guildId: guild_id,
                      channelId: channel_id,
                      applicationId: id,
                      partyId: id2,
                      messageId: message.id,
                      analyticsLocations: items2,
                      remoteJoinPlatform,
                    };
                    guild_id = undefined;
                    const tmp36Result2 = trackApplicationOpenDefault;
                    if (channel != null) {
                      guild_id = channel.guild_id;
                    }
                    const party2 = applicationActivity.party;
                    id2 = undefined;
                    if (party2 != null) {
                      id2 = party2.id;
                    }
                    items2 = [AnalyticsLocationDefault.INVITE_EMBED];
                    tmp36Result2(obj3);
                  }
                }
              } else if (null != deeplink_uri) {
                const obj7 = LinkingDefault;
                obj7.openURL(deeplink_uri, constants10.SAFARI);
                const obj4 = {
                  type: constants4.PLAY,
                  source: constants5.MESSAGE_EMBED,
                  userId: message.author.id,
                  guildId: guild_id1,
                  channelId: channel_id,
                  applicationId: application.id,
                  messageId: message.id,
                  analyticsLocations: items3,
                };
                guild_id1 = undefined;
                const tmp30 = trackApplicationOpenDefault;
                if (channel != null) {
                  guild_id1 = channel.guild_id;
                }
                items3 = [AnalyticsLocationDefault.INVITE_EMBED];
                tmp30(obj4);
              }
            }
          }
        }
      }
    };
    obj.handleTapStreamRequest = function handleTapStreamRequest(message) {
      obj = obj(dependencyMap[103]);
      if (_slicedToArray(obj.canFulfillStreamRequest(message, true), 1)[0]) {
        channel = ChannelStore.getChannel(message.channel_id);
        if (null != channel) {
          const tmpResult = obj(dependencyMap[104]);
          const oSRequirement = tmpResult.getOSRequirement();
          const obj2 = { channel, hasPermission: true, isActive: false, osRequirement: oSRequirement };
          const tmpResult2 = obj(dependencyMap[104]);
          tmpResult2.getStreamPressHandler(obj2)();
        }
      }
    };
    obj.handleTapActivityInviteToJoin = function handleTapActivityInviteToJoin(message) {
      let author;
      ({ author, application } = message);
      if (null != author) {
        if (null != application) {
          if (null != author.id) {
            applicationActivity = applicationActivity.getApplicationActivity(application.id, true);
            if (null != applicationActivity) {
              const obj2 = {
                channelId: message.channel_id,
                type: constants.JOIN,
                activity: applicationActivity,
                location: constants5.MESSAGE_EMBED,
              };
              obj = ActivitiesActionCreatorsDefault;
              obj.sendActivityInvite(obj2);
            }
          }
        }
      }
    };
    obj.handleTapGuildEventInvite = function handleTapGuildEventInvite(arg0) {
      let guildEventId;
      let isMember;
      let primary;
      let recurrenceId;
      let secondary;
      ({ invite, primary, guildEventId, recurrenceId } = arg0);
      ({ isMember, secondary } = arg0);
      if (null != invite) {
        const guild_scheduled_event = invite.guild_scheduled_event;
        id = undefined;
        if (guild_scheduled_event != null) {
          id = guild_scheduled_event.id;
        }
        guildEventId = id;
      }
      guildScheduledEvent = guildScheduledEvent.getGuildScheduledEvent(guildEventId);
      if (null != guildScheduledEvent) {
        if (null != guildEventId) {
          if (!isMember) {
            if (null != invite) {
              handleAcceptEventInstantInviteDefault(invite);
              return { action: "accept" };
            }
          }
          if (secondary) {
            let inviteKeyFromExtraData = null;
            if (null != invite) {
              const obj2 = { baseCode: invite.code, guildScheduledEventId: guildEventId };
              const obj4 = obj(dependencyMap[106]);
              inviteKeyFromExtraData = obj4.generateInviteKeyFromExtraData(obj2);
            }
            let tmp20;
            const openShareEvent = obj(dependencyMap[107]).openShareEvent;
            obj(dependencyMap[107]);
            if (null != inviteKeyFromExtraData) {
              tmp20 = getInviteURLDefault(inviteKeyFromExtraData);
            }
            openShareEvent(guildScheduledEvent, tmp20);
            return { action: "share" };
          } else {
            let obj5;
            if (primary) {
              if (closure_1_14(guildScheduledEvent)) {
                const obj3 = obj(dependencyMap[107]);
                const result = obj3.transitionToEventDetailsFromInvite(guildScheduledEvent, recurrenceId);
                obj5 = { action: "transition" };
              }
              return obj5;
            }
            obj = obj(dependencyMap[107]);
            if (primary) {
              const result1 = obj.handleGuildScheduledEventRsvp(
                guildScheduledEvent.id,
                recurrenceId,
                guildScheduledEvent.guild_id,
              );
              obj5 = { action: "rsvp" };
            } else {
              const result2 = obj.transitionToEventDetailsFromInvite(guildScheduledEvent, recurrenceId);
              obj5 = { action: "transition" };
            }
          }
        }
      }
      return { action: "noop" };
    };
    obj._questsEmbedOnPress = function _questsEmbedOnPress(code) {
      obj = obj(dependencyMap[109]);
      if (!obj.isMetaQuest()) {
        const tmpResult = obj(dependencyMap[110]);
        const result = tmpResult.findQuestOrReplacement(code, QuestStore.quests, QuestStore.excludedQuests);
        if (null != result) {
          const obj2 = {
            scrollToQuestId: result.id,
            fromContent: obj(dependencyMap[112]).QuestContent.QUEST_EMBED_MOBILE,
          };
          const openQuestHome2 = obj(dependencyMap[111]).openQuestHome;
          obj(dependencyMap[111]);
          openQuestHome2(obj2);
        } else {
          const obj3 = { fromContent: obj(dependencyMap[112]).QuestContent.QUEST_EMBED_MOBILE };
          const openQuestHome = obj(dependencyMap[111]).openQuestHome;
          obj(dependencyMap[111]);
          openQuestHome(obj3);
        }
      }
    };
    obj._questsEmbedOnAccept = function _questsEmbedOnAccept(code) {
      obj = obj(dependencyMap[109]);
      if (obj.isMetaQuest()) {
        const tmpResult = obj(dependencyMap[111]);
        tmpResult.openDiscordQuestsFAQ();
      } else {
        const tmpResult6 = obj(dependencyMap[110]);
        const result = tmpResult6.findQuestOrReplacement(code, QuestStore.quests, QuestStore.excludedQuests);
        if (null != result) {
          if (null == QuestStore.questEnrollmentBlockedUntil) {
            if (!QuestStore.isQuestAccessSuspended) {
              const userStatus = result.userStatus;
              let enrolledAt;
              if (userStatus != null) {
                enrolledAt = userStatus.enrolledAt;
              }
              let tmp10 = null != enrolledAt;
              const _Date = Date;
              const self = this;
              const self2 = this;
              const expiresAt = result.config.expiresAt;
              const date = new Date();
              if (!tmp10) {
                tmp10 = expiresAt < date.toISOString();
              }
              if (!tmp10) {
                const obj2 = {
                  questContent: obj(dependencyMap[112]).QuestContent.QUEST_EMBED_MOBILE,
                  questContentCTA: obj(dependencyMap[114]).QuestContentCTA.ACCEPT_QUEST,
                  sourceQuestContent: obj(dependencyMap[112]).QuestContent.QUEST_EMBED_MOBILE,
                };
                const enrollInQuest = obj(dependencyMap[113]).enrollInQuest;
                id = result.id;
                obj(dependencyMap[113]);
                enrollInQuest(id, obj2);
              }
              const obj3 = {
                scrollToQuestId: result.id,
                fromContent: obj(dependencyMap[112]).QuestContent.QUEST_EMBED_MOBILE,
              };
              const openQuestHome2 = obj(dependencyMap[111]).openQuestHome;
              obj(dependencyMap[111]);
              openQuestHome2(obj3);
            }
          }
          const obj4 = {
            scrollToQuestId: result.id,
            fromContent: obj(dependencyMap[112]).QuestContent.QUEST_EMBED_MOBILE,
          };
          const openQuestHome3 = obj(dependencyMap[111]).openQuestHome;
          obj(dependencyMap[111]);
          openQuestHome3(obj4);
        } else {
          const obj5 = { fromContent: obj(dependencyMap[112]).QuestContent.QUEST_EMBED_MOBILE };
          const openQuestHome = obj(dependencyMap[111]).openQuestHome;
          obj(dependencyMap[111]);
          openQuestHome(obj5);
        }
      }
    };
    obj.handleTapInviteEmbedAccept = function handleTapInviteEmbedAccept(nativeEvent) {
      let index;
      let items2;
      let primary;
      let secondary;
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      ({ index, primary, secondary } = nativeSyntheticEventData);
      const messageData = obj.getMessageData(nativeSyntheticEventData.messageId);
      if (null != messageData) {
        let codedLinks;
        const message2 = messageData.message;
        const current = obj2.getParams().chatInputRef.current;
        if (current != null) {
          current.dismissKeyboard();
        }
        if (message2.type === closure_52.THREAD_STARTER_MESSAGE) {
          if (null != message2.messageReference) {
            const message = ReferencedMessageStore.getMessageByReference(message2.messageReference).message;
            if (null != message) {
              codedLinks = message.codedLinks;
            }
          }
          let tmp8;
          if (codedLinks != null) {
            tmp8 = codedLinks[index];
          }
          if (null != tmp8) {
            if (tmp8.type === CodedLink.CodedLinkType.INVITE) {
              invite = InviteStore.getInvite(tmp8.code);
              if (null != invite) {
                let str5;
                id = AuthenticationStore.getId();
                let id1;
                const isMember = GuildMemberStore.isMember;
                if (invite != null) {
                  const guild = invite.guild;
                  if (guild != null) {
                    id1 = guild.id;
                  }
                }
                const isMemberResult = isMember(id1, id);
                let flag = false;
                if (isMemberResult) {
                  flag = false;
                  if (null != invite.roles) {
                    flag = false;
                    if (invite.roles.length > 0) {
                      const guild2 = invite.guild;
                      let id2;
                      if (guild2 != null) {
                        id2 = guild2.id;
                      }
                      flag = false;
                      if (null != id2) {
                        const member = GuildMemberStore.getMember(invite.guild.id, id);
                        let roles1;
                        const _Set = Set;
                        if (member != null) {
                          roles1 = member.roles;
                        }
                        if (roles1 == null) {
                          roles1 = [];
                        }
                        const self = this;
                        const self2 = this;
                        const _Set1 = new _Set(roles1);
                        const roles = invite.roles;
                        flag = roles.some((id) => !_Set1.has(id.id));
                      }
                    }
                  }
                }
                const tmpResult = InviteCodeUtils;
                const inviteInstanceId = tmpResult.getInviteInstanceId(tmp8.code, message2.id);
                const tmpResult8 = InviteTypeUtils;
                if (tmpResult8.isGuildScheduledEventInviteEmbed(invite)) {
                  const obj3 = { invite, isMember: isMemberResult, primary, secondary };
                  str5 = obj2.handleTapGuildEventInvite(obj3).action;
                } else {
                  if (isMemberResult) {
                    if (!flag) {
                      const result = obj2.handleTransitionToInviteChannel(invite);
                      str5 = "transition";
                    }
                  }
                  const result1 = obj2.handleAcceptInstantInvite(invite, inviteInstanceId);
                  str5 = "accept";
                }
                const guild3 = invite.guild;
                let id3;
                if (guild3 != null) {
                  id3 = guild3.id;
                }
                if (null != id3) {
                  const tmpResult9 = InviteTypeUtils;
                  const guildInviteExtendedType = tmpResult9.getGuildInviteExtendedType(invite);
                  if (guildInviteExtendedType === InviteTypeUtils.GuildInviteExtendedType.VOICE_CHANNEL) {
                    const obj4 = { guildId: id3, location: "mobile_invite_embed" };
                    const tmpResult10 = VoiceChannelListInviteExperiment;
                    if (tmpResult10.getVoiceChannelListInviteExperiment(obj4).enabled) {
                      let items1;
                      const tmpResult11 = VoiceChannelListInviteEmbed;
                      if (tmpResult11.canShowVoiceChannelListInviteEmbed(invite)) {
                        items = [
                          AnalyticsLocationDefault.INVITE_EMBED,
                          AnalyticsLocationDefault.VOICE_CHANNEL_LIST_INVITE_EMBED,
                        ];
                        items1 = items;
                      }
                      const obj6 = {
                        invite,
                        action: str5,
                        inviter_id: message2.author.id,
                        invite_message_id: message2.id,
                        invite_instance_id: inviteInstanceId,
                      };
                      const tmpResult12 = InstantInviteActionCreators;
                      const result2 = tmpResult12.trackInviteEmbedActioned(obj6, items1);
                    }
                  }
                }
                items1 = [AnalyticsLocationDefault.INVITE_EMBED];
              }
            } else if (tmp8.type === CodedLink.CodedLinkType.CHANNEL_LINK) {
              const obj7 = { guildId: null, channelId: null, message: message2 };
              [obj5.guildId, obj5.channelId] = tmp8.code.split("/");
              _slicedToArray(tmp8.code.split("/"), 2);
              const result3 = obj2.handleTapVoiceChannelPreview(obj7);
            } else {
              if (tmp8.type !== CodedLink.CodedLinkType.BUILD_OVERRIDE) {
                if (tmp8.type !== CodedLink.CodedLinkType.MANUAL_BUILD_OVERRIDE) {
                  if (tmp8.type === CodedLink.CodedLinkType.QUESTS_EMBED) {
                    obj._questsEmbedOnAccept(tmp8.code);
                  } else {
                    if (tmp8.type !== CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT) {
                      if (tmp8.type !== CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP) {
                        if (tmp8.type === CodedLink.CodedLinkType.GAME_ORGANIZATION_INVITE) {
                          logger.info("Join tapped for game organization invite", tmp8.code);
                        }
                      }
                    }
                    const str = tmp8.code;
                    const first = _slicedToArray(str.split("-"), 1)[0];
                    const obj8 = { skuId: first, analyticsLocations: items2 };
                    const openSocialLayerStorefrontProductDetailsModal =
                      SocialLayerStorefrontNativeActionCreators.openSocialLayerStorefrontProductDetailsModal;
                    items2 = [];
                    SocialLayerStorefrontNativeActionCreators;
                    items2[0] = AnalyticsLocationDefault.GIFT_CODE_EMBED;
                    const result4 = openSocialLayerStorefrontProductDetailsModal(obj8);
                  }
                }
              }
              const tmpResult14 = build_overrides_BuildOverrideUtils;
              tmpResult14.toggleOverride(tmp8.code);
            }
          }
        }
        if (message2.messageSnapshots.length > 0) {
          codedLinks = message2.messageSnapshots[0].message.codedLinks;
        } else {
          codedLinks = message2.codedLinks;
        }
      }
    };
    obj.handleTapInviteEmbed = function handleTapInviteEmbed(nativeEvent) {
      let primary;
      let secondary;
      let tmp26;
      let tmp27;
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      ({ primary, secondary } = nativeSyntheticEventData);
      const index = nativeSyntheticEventData.index;
      const messageData = obj.getMessageData(nativeSyntheticEventData.messageId);
      if (null != messageData) {
        let codedLinks;
        const message2 = messageData.message;
        const current = obj2.getParams().chatInputRef.current;
        if (current != null) {
          current.dismissKeyboard();
        }
        if (message2.type === closure_52.THREAD_STARTER_MESSAGE) {
          if (null != message2.messageReference) {
            const message = ReferencedMessageStore.getMessageByReference(message2.messageReference).message;
            if (null != message) {
              codedLinks = message.codedLinks;
            }
          }
          let tmp8;
          if (codedLinks != null) {
            tmp8 = codedLinks[index];
          }
          if (null != tmp8) {
            id = AuthenticationStore.getId();
            if (tmp8.type !== CodedLink.CodedLinkType.INVITE) {
              if (tmp8.type !== CodedLink.CodedLinkType.EMBEDDED_ACTIVITY_INVITE) {
                if (tmp8.type === CodedLink.CodedLinkType.TEMPLATE) {
                  const obj12 = guild_templates_GuildTemplateActionCreatorsDefault;
                  obj12.showModal(tmp8.code);
                } else {
                  if (tmp8.type !== CodedLink.CodedLinkType.BUILD_OVERRIDE) {
                    if (tmp8.type !== CodedLink.CodedLinkType.MANUAL_BUILD_OVERRIDE) {
                      if (tmp8.type === CodedLink.CodedLinkType.EXPERIMENT) {
                        const tmpResult = ExperimentEmbedUtils;
                        const experimentFromEmbedURL = tmpResult.getExperimentFromEmbedURL(tmp8.code);
                        if (null != experimentFromEmbedURL) {
                          const tmpResult15 = ExperimentEmbedUtils;
                          const experimentTreatmentFromEmbedURL = tmpResult15.getExperimentTreatmentFromEmbedURL(
                            tmp8.code,
                          );
                          const tmpResult16 = ExperimentEmbedPlatformUtils;
                          const result = tmpResult16.handleCodedLinkExperimentEmbedTap(
                            experimentFromEmbedURL,
                            experimentTreatmentFromEmbedURL,
                          );
                        }
                      } else if (tmp8.type === CodedLink.CodedLinkType.EVENT) {
                        const str7 = tmp8.code;
                        const tmp25 = _slicedToArray(str7.split("-"), 3);
                        const obj3 = {
                          invite: null,
                          isMember: GuildMemberStore.isMember(tmp25[0], id),
                          primary,
                          secondary,
                          guildEventId: tmp26,
                          recurrenceId: tmp27,
                        };
                        tmp26 = tmp25[1];
                        tmp27 = tmp25[2];
                        const result1 = obj2.handleTapGuildEventInvite(obj3);
                      } else if (tmp8.type === CodedLink.CodedLinkType.CHANNEL_LINK) {
                        const obj4 = { guildId: null, channelId: null, message: message2 };
                        [obj6.guildId, obj6.channelId] = tmp8.code.split("/");
                        _slicedToArray(tmp8.code.split("/"), 2);
                        const result2 = obj2.handleTapVoiceChannelPreview(obj4);
                      } else if (tmp8.type === CodedLink.CodedLinkType.APP_DIRECTORY_PROFILE) {
                        application = ApplicationDirectoryApplicationsStore.getApplication(tmp8.code);
                        if (null != application) {
                          const obj7 = {
                            applicationId: null,
                            customInstallUrl: null,
                            installParams: null,
                            integrationTypesConfig: null,
                            source: "app_directory_profile_embed",
                          };
                          ({
                            id: obj5.applicationId,
                            custom_install_url: obj5.customInstallUrl,
                            install_params: obj5.installParams,
                            integration_types_config: obj5.integrationTypesConfig,
                          } = application);
                          const tmpResult17 = ApplicationUtils;
                          tmpResult17.installApplication(obj7);
                        }
                      } else if (tmp8.type === CodedLink.CodedLinkType.QUESTS_EMBED) {
                        obj._questsEmbedOnPress(tmp8.code);
                      } else {
                        if (tmp8.type !== CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT) {
                          if (tmp8.type !== CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP) {
                            if (tmp8.type === CodedLink.CodedLinkType.GAME_ORGANIZATION_INVITE) {
                              logger.info("Card tapped for game organization invite", tmp8.code);
                            } else if (tmp8.type !== CodedLink.CodedLinkType.APP_OAUTH2_LINK) {
                              const _Error = Error;
                              const _HermesInternal = HermesInternal;
                              throw Error("Unknown coded link type: " + tmp8.type);
                            } else {
                              const application1 = ApplicationStore.getApplication(tmp8.code);
                              if (null != application1) {
                                const obj8 = { application_id: application1.id };
                                const obj24 = AppAnalyticsUtilsDefault;
                                obj24.trackWithMetadata(set2.APP_OAUTH2_LINK_EMBED_CTA_CLICKED, obj8);
                                const obj9 = {
                                  applicationId: null,
                                  customInstallUrl: null,
                                  installParams: null,
                                  integrationTypesConfig: null,
                                  source: "app_oauth2_link_embed",
                                };
                                ({
                                  id: obj27.applicationId,
                                  customInstallUrl: obj27.customInstallUrl,
                                  installParams: obj27.installParams,
                                  integrationTypesConfig: obj27.integrationTypesConfig,
                                } = application1);
                                const tmpResult18 = ApplicationUtils;
                                tmpResult18.installApplication(obj9);
                              }
                            }
                          }
                        }
                        const str3 = tmp8.code;
                        const first = _slicedToArray(str3.split("-"), 1)[0];
                        const obj10 = { skuId: first, analyticsLocations: items };
                        const openSocialLayerStorefrontProductDetailsModal =
                          SocialLayerStorefrontNativeActionCreators.openSocialLayerStorefrontProductDetailsModal;
                        items = [];
                        SocialLayerStorefrontNativeActionCreators;
                        items[0] = AnalyticsLocationDefault.GIFT_CODE_EMBED;
                        const result3 = openSocialLayerStorefrontProductDetailsModal(obj10);
                      }
                    }
                  }
                  const tmpResult20 = build_overrides_BuildOverrideUtils;
                  tmpResult20.toggleOverride(tmp8.code);
                }
              }
            }
            invite = InviteStore.getInvite(tmp8.code);
            let id1;
            const isMember = GuildMemberStore.isMember;
            if (invite != null) {
              const guild = invite.guild;
              if (guild != null) {
                id1 = guild.id;
              }
            }
            const isMemberResult = isMember(id1, id);
            if (null != invite) {
              let str9;
              let items2;
              const guild4 = invite.guild;
              let id2;
              if (guild4 != null) {
                id2 = guild4.id;
              }
              let enabled = null != id2;
              if (enabled) {
                const tmpResult21 = InviteTypeUtils;
                const guildInviteExtendedType = tmpResult21.getGuildInviteExtendedType(invite);
                enabled = guildInviteExtendedType === InviteTypeUtils.GuildInviteExtendedType.VOICE_CHANNEL;
              }
              if (enabled) {
                const obj11 = { guildId: id2, location: "mobile_invite_embed" };
                const tmpResult22 = VoiceChannelListInviteExperiment;
                enabled = tmpResult22.getVoiceChannelListInviteExperiment(obj11).enabled;
              }
              if (enabled) {
                const tmpResult23 = VoiceChannelListInviteEmbed;
                enabled = tmpResult23.canShowVoiceChannelListInviteEmbed(invite);
              }
              const tmpResult24 = InviteTypeUtils;
              if (tmpResult24.isGuildScheduledEventInviteEmbed(invite)) {
                const obj13 = { invite, isMember: isMemberResult, primary, secondary };
                str9 = obj2.handleTapGuildEventInvite(obj13).action;
              } else {
                if (enabled) {
                  channel = invite.channel;
                  let id3;
                  if (channel != null) {
                    id3 = channel.id;
                  }
                  if (null != id3) {
                    const channel1 = ChannelStore.getChannel(invite.channel.id);
                    str9 = "noop";
                    if (null != channel1) {
                      const guildId = channel1.getGuildId();
                      const tmp55 = null != guildId && guildId !== SelectedGuildStore.getGuildId();
                      if (tmp55) {
                        const tmpResult25 = transitionToGuild2;
                        tmpResult25.transitionToGuild(guildId);
                      }
                      const tmpResult26 = PrivateChannelCallUtils;
                      const result4 = tmpResult26.navigateToVoiceChannel(channel1, "Mobile Invite Embed");
                      str9 = "voice channel preview";
                    }
                  }
                }
                const guild2 = invite.guild;
                let id4;
                if (guild2 != null) {
                  id4 = guild2.id;
                }
                if (null != id4) {
                  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
                  const _HermesInternal2 = HermesInternal;
                  ActionSheetActionCreatorsDefault;
                  const obj14 = {
                    guildId: invite.guild.id,
                    context: useGuildProfileCTA.GuildProfileCTAContext.INVITE,
                    inviteKey: tmp8.code,
                  };
                  const tmp49 = asyncRequire(9410, dependencyMap.paths);
                  const combined = "GuildProfileActionSheet:" + invite.guild.id;
                  openLazy(tmp49, combined, obj14);
                  str9 = "show profile";
                } else if (isMemberResult) {
                  const result5 = obj2.handleTransitionToInviteChannel(invite);
                  str9 = "transition";
                } else {
                  const handleAcceptInstantInvite = obj2.handleAcceptInstantInvite;
                  const tmpResult27 = InviteCodeUtils;
                  const result6 = handleAcceptInstantInvite(
                    invite,
                    tmpResult27.getInviteInstanceId(tmp8.code, message2.id),
                  );
                  str9 = "accept";
                }
              }
              const INVITE_EMBED = AnalyticsLocationDefault.INVITE_EMBED;
              if (enabled) {
                const items1 = [INVITE_EMBED, AnalyticsLocationDefault.VOICE_CHANNEL_LIST_INVITE_EMBED];
                items2 = items1;
              } else {
                items2 = [INVITE_EMBED];
              }
              let id5;
              const trackInviteServerClicked = InstantInviteActionCreators.trackInviteServerClicked;
              InstantInviteActionCreators;
              if (invite != null) {
                const guild3 = invite.guild;
                if (guild3 != null) {
                  id5 = guild3.id;
                }
              }
              const result7 = trackInviteServerClicked(id5, str9, items2);
            }
          }
        }
        if (message2.messageSnapshots.length > 0) {
          codedLinks = message2.messageSnapshots[0].message.codedLinks;
        } else {
          codedLinks = message2.codedLinks;
        }
      }
    };
    obj.handleTapVoiceChannelPreview = function handleTapVoiceChannelPreview(message) {
      let channelId;
      let guildId;
      ({ guildId, channelId } = message);
      message = message.message;
      const guildId1 = SelectedGuildStore.getGuildId();
      const channelId1 = SelectedChannelStore.getChannelId(guildId1);
      channel = ChannelStore.getChannel(channelId);
      if (null != channel) {
        obj = {
          author_id: message.author.id,
          link_guild_id: guildId,
          link_channel_id: channelId,
          link_channel_type: channel.type,
          guild_id: guildId1,
          channel_id: channelId1,
        };
        const obj8 = AnalyticsUtilsDefault;
        obj8.track(set2.CHANNEL_LINK_PREVIEW_JOINED, obj);
        const current = obj.getParams().chatInputRef.current;
        if (current != null) {
          current.dismissKeyboard();
        }
        const obj2 = AgeGateUtils;
        if (!obj2.shouldShowAgeGateForVoiceChannel(channelId)) {
          const tmp4Result = SpoilerChannelUtils;
          if (!tmp4Result.shouldShowSpoilerGateForChannelId(channelId)) {
            if (channel.isGuildStageVoice()) {
              const tmp4Result4 = StageChannelModalActionCreators;
              tmp4Result4.connectAndOpen(channel);
            } else {
              const tmp10Result = SelectedChannelActionCreatorsDefault;
              const voiceChannel = tmp10Result.selectVoiceChannel(channelId);
              const tmp4Result5 = PrivateChannelCallUtils;
              tmp4Result5.openChannelCallModal(channel);
            }
          }
        }
        const tmp4Result6 = router_utils;
        tmp4Result6.transitionTo(guildMetadata.CHANNEL(guildId, channelId));
      }
    };
    obj.handleTapJoinActivity = function handleTapJoinActivity(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const messageData = obj.getMessageData(obj.getNativeSyntheticEventData(nativeEvent).messageId);
      if (null != messageData) {
        const message = messageData.message;
        const activity = message.activity;
        if (null != activity) {
          const type = activity.type;
          if (type === constants.LISTEN) {
            const result = obj2.handleTapSpotifyResource(message);
          } else if (type === constants.JOIN) {
            const result1 = obj2.handleTapActivityResource(message);
          } else if (type === constants.STREAM_REQUEST) {
            const result2 = obj2.handleTapStreamRequest(message);
          }
        }
      }
    };
    obj.handleTapJoinRichPresence = function handleTapJoinRichPresence(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const messageData = obj.getMessageData(obj.getNativeSyntheticEventData(nativeEvent).messageId);
      if (null != messageData) {
        const message = messageData.message;
        const activity = message.activity;
        if (null != activity) {
          const type = activity.type;
          if (type === constants.LISTEN) {
            const result = obj2.handleTapSpotifyResource(message);
          } else if (type === constants.JOIN) {
            const result1 = obj2.handleTapActivityResource(message);
          } else if (type === constants.JOIN_REQUEST) {
            const result2 = obj2.handleTapActivityInviteToJoin(message);
          } else if (type === constants.STREAM_REQUEST) {
            const result3 = obj2.handleTapStreamRequest(message);
          }
        }
      }
    };
    obj.handleAcceptInstantInvite = function handleAcceptInstantInvite(invite, inviteInstanceId) {
      let closure_1 = inviteInstanceId;
      const code = invite.code;
      if (null != code) {
        function acceptInvite() {
          let obj3;
          let obj4;
          let obj7;
          let obj8;
          if (invite.type === InviteTypes.GUILD) {
            obj = GuildCapUpsellHooks;
            if (obj.isAtGuildCapAndNonPremium()) {
              const obj2 = {
                initialUpsellKey: constants2.GUILD_CAP,
                analyticsLocation: obj3,
                analyticsLocations: items,
                analyticsProperties: obj4,
              };
              obj3 = { page: constants.INVITE_EMBED };
              const handleShowUpsellAlert = PremiumUpsellUtilsDefault.handleShowUpsellAlert;
              items = [];
              PremiumUpsellUtilsDefault;
              items[0] = AnalyticsLocationDefault.INVITE_EMBED;
              obj4 = { type: constants3.GUILD_CAP_MODAL_UPSELL };
              const result = handleShowUpsellAlert(obj2);
            }
          }
          const obj5 = { inviteKey: code, context: obj8, callback: obj.handleTransitionToInviteChannel };
          const acceptInvite = InstantInviteActionCreatorsDefault.acceptInvite;
          InstantInviteActionCreatorsDefault;
          if (null != inviteInstanceId) {
            obj7 = { invite_instance_id: tmp4 };
            const obj6 = { invite_instance_id: tmp4 };
          } else {
            obj7 = {};
          }
          obj8 = { location: "Invite Button Embed" };
          const merged = Object.assign(obj7);
          acceptInvite(obj5);
        }
        obj = obj(dependencyMap[134]);
        let obj2 = { onConfirm: acceptInvite };
        if (!obj.handleNSFWGuildInvite(invite, obj2)) {
          acceptInvite();
        }
      }
    };
    obj.handleTransitionToInviteChannel = function handleTransitionToInviteChannel(invite) {
      obj = InstantInviteActionCreatorsDefault;
      obj.transitionToInvite(invite, { forceTransition: true });
    };
    obj.handleTapGiftCodeEmbed = function handleTapGiftCodeEmbed() {};
    obj.handleTapGiftCodeAccept = function handleTapGiftCodeAccept(nativeEvent) {
      let content;
      let name;
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      const giftCode = nativeSyntheticEventData.giftCode;
      const messageId = nativeSyntheticEventData.messageId;
      const currentUser = UserStore.getCurrentUser();
      if (null != currentUser) {
        if (currentUser.verified) {
          const value = GiftCodeStore.get(giftCode);
          if (null != value) {
            let messageData;
            if (null != value.giftStyle) {
              messageData = obj.getMessageData(messageId);
            }
            if (obj.params.paymentsBlocked) {
              openBlockedPaymentsCountryActionSheetDefault();
            } else {
              const tmp12Result = AnalyticsUtilsDefault;
              tmp12Result.track(set2.OPEN_MODAL, { type: "gift_accept", location: null });
              const pushLazy = ModalActionCreatorsDefault.pushLazy;
              const obj3 = { code: giftCode, customMessage: content, soundId: id, emojiName: name };
              content = undefined;
              ModalActionCreatorsDefault;
              const tmp16 = asyncRequire(11110, dependencyMap.paths);
              if (null != messageData) {
                content = messageData.message.content;
              }
              id = undefined;
              if (messageData != null) {
                const message = messageData.message;
                if (message != null) {
                  const giftInfo = message.giftInfo;
                  if (giftInfo != null) {
                    const sound = giftInfo.sound;
                    if (sound != null) {
                      id = sound.id;
                    }
                  }
                }
              }
              name = undefined;
              if (messageData != null) {
                const message2 = messageData.message;
                if (message2 != null) {
                  const giftInfo2 = message2.giftInfo;
                  if (giftInfo2 != null) {
                    const emoji = giftInfo2.emoji;
                    if (emoji != null) {
                      name = emoji.name;
                    }
                  }
                }
              }
              pushLazy(tmp16, obj3);
            }
          }
        } else {
          const obj2 = EmailVerificationModalActionCreatorsDefault;
          obj2.open();
        }
      }
    };
    obj.handleTapReferralRedeem = function handleTapReferralRedeem() {
      let obj3;
      const tmp = obj;
      obj = obj(dependencyMap[139]);
      if (obj.canOpenPremiumPlanDirectlyForReferralTrial()) {
        const obj2 = { analyticsLocation: obj3, analyticsLocations: items, premiumType: TIER_2.TIER_2 };
        items = [];
        obj3 = { page: constants6.REFERRAL_MESSAGE_EMBED };
        const tmp6 = openPremiumPlanSelectionActionSheetDefault;
        items[0] = AnalyticsLocationDefault.REFERRAL_MESSAGE_EMBED;
        tmp6(obj2);
      } else {
        const obj4 = { screen: constants9.PREMIUM };
        const tmpResult = tmp(dependencyMap[141]);
        tmpResult.openUserSettings(obj4);
      }
    };
    obj.getGiftIntentCtaContext = function getGiftIntentCtaContext(nativeEvent) {
      let giftIntentType;
      let messageId;
      let recipientUserId;
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      ({ messageId, recipientUserId, giftIntentType } = nativeSyntheticEventData);
      const obj2 = PremiumGiftingIntentUtils;
      const parseGiftIntentTypeResult = obj2.parseGiftIntentType(giftIntentType);
      if (null == parseGiftIntentTypeResult) {
        return null;
      } else {
        const params = obj.params;
        const message = params.getMessage(messageId);
        let channel_id;
        const tmp3 = obj;
        if (message != null) {
          channel_id = message.channel_id;
        }
        if (channel_id == null) {
          channel_id = tmp3.params.selectedChannelId;
        }
        const obj3 = {
          channel: ChannelStore.getChannel(channel_id),
          giftIntentType: parseGiftIntentTypeResult,
          messageId,
          recipientUserId,
        };
        return obj3;
      }
    };
    obj.handleTapGiftIntentPrimaryCta = function handleTapGiftIntentPrimaryCta(nativeEvent) {
      let dmProbability;
      let obj3;
      let recipientUserId;
      const giftIntentCtaContext = obj.getGiftIntentCtaContext(nativeEvent);
      if (null != giftIntentCtaContext) {
        let DM_CHANNEL;
        ({ channel, recipientUserId } = giftIntentCtaContext);
        const giftIntentType = giftIntentCtaContext.giftIntentType;
        const userAffinity = UserAffinitiesV2Store.getUserAffinity(recipientUserId);
        const obj2 = { gift_intent_type: giftIntentType, affinity: dmProbability, location_stack: items };
        dmProbability = undefined;
        const track = AnalyticsUtilsDefault.track;
        const GIFT_INTENT_ACTION_BUTTON_CLICKED = set2.GIFT_INTENT_ACTION_BUTTON_CLICKED;
        AnalyticsUtilsDefault;
        if (userAffinity != null) {
          dmProbability = userAffinity.dmProbability;
        }
        track(GIFT_INTENT_ACTION_BUTTON_CLICKED, obj2);
        obj = {
          recipientUserId,
          analyticsLocation: obj3,
          analyticsLocations: items,
          navigationParams: { presentation: "card" },
        };
        let guild_id;
        const openGiftModal = utils_openGiftModal.openGiftModal;
        utils_openGiftModal;
        if (channel != null) {
          guild_id = channel.guild_id;
        }
        if (null != guild_id) {
          DM_CHANNEL = constants6.GUILD_CHANNEL;
        } else {
          DM_CHANNEL = constants6.DM_CHANNEL;
        }
        obj3 = { page: DM_CHANNEL };
        openGiftModal(obj);
      }
    };
    obj.handleTapGiftIntentSecondaryCta = function handleTapGiftIntentSecondaryCta(nativeEvent) {
      const giftIntentCtaContext = obj.getGiftIntentCtaContext(nativeEvent);
      const tmp2 = null != giftIntentCtaContext && null != giftIntentCtaContext.channel;
      if (tmp2) {
        obj = AnalyticsUtilsDefault;
        const obj2 = {
          gift_intent_type: giftIntentCtaContext.giftIntentType,
          cta_type: "send_message",
          location_stack: items,
        };
        obj.track(set2.GIFT_INTENT_CARD_SECONDARY_CTA_CLICKED, obj2);
        const obj4 = {
          channelId: giftIntentCtaContext.channel.id,
          giftIntentType: giftIntentCtaContext.giftIntentType,
        };
        const obj3 = ModalActionCreatorsDefault;
        obj3.pushLazy(asyncRequire(11439, dependencyMap.paths), obj4);
      }
    };
    obj.handleGiftIntentCardViewed = function handleGiftIntentCardViewed(nativeEvent) {
      let obj4;
      obj = obj(dependencyMap[41]);
      const giftIntentType = obj.getNativeSyntheticEventData(nativeEvent).giftIntentType;
      const obj2 = obj(dependencyMap[142]);
      const parseGiftIntentTypeResult = obj2.parseGiftIntentType(giftIntentType);
      if (null != parseGiftIntentTypeResult) {
        const obj3 = {
          name: obj(dependencyMap[146]).ImpressionNames.GIFT_INTENT_CARD,
          type: obj(dependencyMap[146]).ImpressionTypes.VIEW,
          properties: obj4,
        };
        const trackImpression = obj(dependencyMap[145]).trackImpression;
        obj(dependencyMap[145]);
        obj4 = {
          gift_intent_type: parseGiftIntentTypeResult,
          num_friend_anniversaries: friendAnniversaries.getFriendAnniversaries().length,
        };
        trackImpression(obj3);
      }
    };
    obj.handleTapEmoji = function handleTapEmoji(nativeEvent) {
      if (!obj.isModalOrActionsheetObstructing()) {
        const contentHandlers = contentHandlers2.contentHandlers;
        contentHandlers.onTapEmoji(nativeEvent);
      }
    };
    obj.handleTapTimestamp = function handleTapTimestamp(nativeEvent) {
      const contentHandlers = obj(dependencyMap[44]).contentHandlers;
      contentHandlers.onTapTimestamp(nativeEvent);
    };
    obj.handleTapInlineCode = function handleTapInlineCode(nativeEvent) {
      const contentHandlers = obj(dependencyMap[44]).contentHandlers;
      contentHandlers.onTapInlineCode(nativeEvent);
    };
    obj.handleTapRoleIcon = function handleTapRoleIcon(nativeEvent) {
      let combined;
      let roleIconSource;
      let roleIconUnicodeEmoji;
      let roleName;
      let tmp9;
      ({ roleName, roleIconSource, roleIconUnicodeEmoji } = nativeEvent.nativeEvent);
      let name;
      let winningStreak;
      if (roleName.startsWith(name(closure_3[147]).LEADERBOARD_WINNER_ROLE_NAME_PREFIX)) {
        const tmpResult = name(closure_3[147]);
        const decodeWinnerDataResult = tmpResult.decodeWinnerData(
          roleName.slice(name(closure_3[147]).LEADERBOARD_WINNER_ROLE_NAME_PREFIX.length),
        );
        const tmpResult4 = name(closure_3[148]);
        name = tmpResult4.getStatName(decodeWinnerDataResult.winningStat).name;
        winningStreak = decodeWinnerDataResult.winningStreak;
        const tmpResult5 = name(closure_3[149]);
        const designSystemsNotificationComponents = tmpResult5.getDesignSystemsNotificationComponents(
          "MessagesHandlersLeaderboardBadge",
        );
        const tmp18 = winningStreak;
        const tmp19 = winningStreak(closure_3[150]);
        if (designSystemsNotificationComponents) {
          if (null != winningStreak) {
            let formatToPlainStringResult;
            if (winningStreak > 1) {
              let intl2 = tmp(closure_3[48]).intl;
              obj = { streakCount: winningStreak, statName: name };
              formatToPlainStringResult = intl2.formatToPlainString(tmp(closure_3[48]).t.owAd83, obj);
            }
            let obj2 = {
              text: formatToPlainStringResult,
              icon: name(closure_3[151]).TrophyIcon,
              iconColor: tmp18(closure_3[152]).colors.ICON_FEEDBACK_WARNING,
            };
            tmp22("LEADERBOARD_WINNER_BADGE_TOOLTIP", obj2);
          }
          let intl = tmp(closure_3[48]).intl;
          const obj3 = { statName: name };
          formatToPlainStringResult = intl.formatToPlainString(tmp(closure_3[48]).t.So4gmj, obj3);
        } else {
          const open2 = tmp19.open;
          const obj4 = {
            key: "LEADERBOARD_WINNER_BADGE_TOOLTIP",
            content() {
              if (null != winningStreak) {
                let formatResult;
                if (winningStreak > 1) {
                  const intl2 = tmp2(dependencyMap[48]).intl;
                  const obj2 = { streakCount: winningStreak, statName: name };
                  formatResult = intl2.format(tmp2(dependencyMap[48]).t.owAd83, obj2);
                }
                return (
                  <tmp4 variant="text-md/normal" color="text-default">
                    {formatResult}
                  </tmp4>
                );
              }
              const intl = tmp2(dependencyMap[48]).intl;
              obj = { statName: name };
              formatResult = intl.format(tmp2(dependencyMap[48]).t.So4gmj, obj);
            },
            IconComponent: name(closure_3[151]).TrophyIcon,
            iconColor: "text-feedback-warning",
          };
          open2(obj4);
        }
        return tmp21;
      } else {
        const tmpResult6 = name(closure_3[149]);
        const designSystemsNotificationComponents1 =
          tmpResult6.getDesignSystemsNotificationComponents("MessagesHandlersRoleIcon");
        const tmp5 = winningStreak(closure_3[150]);
        if (designSystemsNotificationComponents1) {
          let tmp14;
          const _HermesInternal3 = HermesInternal;
          const openMana = tmp5.openMana;
          const obj5 = { text: roleName, icon: null };
          if (null != roleIconSource) {
            if ("" !== roleIconSource) {
              tmp14 = { type: "image", src: roleIconSource, alt: roleName };
              const obj6 = { type: "image", src: roleIconSource, alt: roleName };
            }
            obj5.icon = tmp14;
            openMana(tmp12, obj5);
          }
          if (null != roleIconUnicodeEmoji) {
            tmp14 = { type: "emoji", unicode: roleIconUnicodeEmoji };
            const obj7 = { type: "emoji", unicode: roleIconUnicodeEmoji };
          }
        } else {
          const _HermesInternal = HermesInternal;
          const open = tmp5.open;
          const obj8 = { key: "ROLE_NAME-" + roleName, content: combined, icon: tmp9 };
          combined = roleName;
          if (null != roleIconUnicodeEmoji) {
            const _HermesInternal2 = HermesInternal;
            combined = "" + roleIconUnicodeEmoji + " " + roleName;
          }
          tmp9 = undefined;
          if (null != roleIconSource) {
            tmp9 = { uri: roleIconSource };
            const obj9 = { uri: roleIconSource };
          }
          open(obj8);
        }
      }
    };
    obj.handleTapVoiceChannelBadge = function handleTapVoiceChannelBadge(nativeEvent) {
      const tmp = obj;
      obj = obj(dependencyMap[41]);
      channel = ChannelStore.getChannel(obj.getNativeSyntheticEventData(nativeEvent).channelId);
      if (null != channel) {
        const tmpResult = tmp(dependencyMap[46]);
        const result = tmpResult.navigateToVoiceChannel(channel);
      }
    };
    obj.handleTapGameIcon = function handleTapGameIcon(nativeEvent) {
      let gameApplicationId;
      let timestamp;
      ({ gameApplicationId, timestamp } = nativeEvent.nativeEvent);
      if (!obj.isModalOrActionsheetObstructing()) {
        obj = ActionSheetActionCreatorsDefault;
        const obj2 = { applicationId: gameApplicationId, messageTimestamp: timestamp };
        obj.openLazy(asyncRequire(11441, dependencyMap.paths), "MessageGameIconActionSheet", obj2);
      }
    };
    obj.handleTapSuppressNotificationsIcon = function handleTapSuppressNotificationsIcon() {
      let intl;
      obj = {
        key: "SUPPRESS_NOTIFICATIONS_TOOLTIP",
        content: intl.string(obj(dependencyMap[48]).t["RO/KYj"]),
        icon: AssetRegistryDefault,
      };
      const open = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      intl = obj(dependencyMap[48]).intl;
      open(obj);
    };
    obj.handleTapConnectionsRoleTag = function handleTapConnectionsRoleTag(nativeEvent) {
      let channelId;
      let guildId;
      let roleId;
      let userId;
      obj = obj(dependencyMap[41]);
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      ({ userId, guildId, channelId, roleId } = nativeSyntheticEventData);
      const obj2 = ActionSheetActionCreatorsDefault;
      obj2.openLazy(
        obj(dependencyMap[40])(dependencyMap[156], dependencyMap.paths),
        "ConnectionsRoleMessageBadgeActionSheet",
        { userId, guildId, channelId, roleId },
      );
    };
    obj.handleTapTimeoutIcon = function handleTapTimeoutIcon() {
      let intl;
      obj = {
        key: "GUILD_COMMUNICATION_DISABLED_ICON_TOOLTIP_BODY",
        content: intl.string(obj(dependencyMap[48]).t["AeYyL+"]),
        icon: AssetRegistryDefault,
      };
      const open = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      intl = obj(dependencyMap[48]).intl;
      open(obj);
    };
    obj.handleReveal = function handleReveal(context) {
      const messageData = obj.getMessageData(context);
      if (null != messageData) {
        const messageChannel = messageData.messageChannel;
        let tmp6 = null;
        const revealMessage = MessageActionCreatorsDefault.revealMessage;
        id = messageChannel.id;
        MessageActionCreatorsDefault;
        if (obj.params.revealedMessageId !== context) {
          tmp6 = context;
        }
        revealMessage(id, tmp6);
      }
    };
    obj.handleTapButtonActionComponent = function handleTapButtonActionComponent(nativeEvent) {
      let componentId;
      let intl;
      let intl2;
      let intl3;
      let message;
      let messageChannel;
      let messageId;
      let tmpResult6;
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      ({ messageId, componentId } = nativeSyntheticEventData);
      const messageData = obj.getMessageData(messageId);
      if (null != messageData) {
        ({ messageChannel, message } = messageData);
        id = message.applicationId;
        if (id == null) {
          id = message.author.id;
        }
        const tmpResult = InteractionComponentUtils;
        const get = tmpResult.flattenComponents(message.components).get;
        tmpResult.flattenComponents(message.components);
        const tmpResult4 = InteractionComponentTypes;
        const value = get(tmpResult4.asComponentId(componentId));
        const tmp7 = null != value && value.type === Server.ComponentType.BUTTON && null != value.customId;
        if (tmp7) {
          if (value.style !== Server.ButtonStyle.PREMIUM) {
            const obj2 = {
              componentType: Server.ComponentType.BUTTON,
              messageId,
              messageFlags: message.flags,
              customId: value.customId,
              componentId: tmpResult6.asComponentId(componentId),
              applicationId: id,
              channelId: messageChannel.id,
              guildId: messageChannel.getGuildId(),
            };
            const executeMessageComponentInteraction = InteractionUtils.executeMessageComponentInteraction;
            InteractionUtils;
            tmpResult6 = InteractionComponentTypes;
            const result = executeMessageComponentInteraction(obj2);
          } else {
            const obj3 = {
              title: intl.string(intl4.t["ZtdF0+"]),
              body: intl2.string(intl4.t["0BEZLT"]),
              confirmText: intl3.string(intl4.t.BddRzS),
            };
            const show = AlertActionCreatorsDefault.show;
            AlertActionCreatorsDefault;
            intl = intl4.intl;
            intl2 = intl4.intl;
            intl3 = intl4.intl;
            show(obj3);
          }
        }
      }
    };
    obj.handleTapSelectActionComponent = function handleTapSelectActionComponent(nativeEvent) {
      let applicationId;
      let closure_129_1;
      let message;
      let messageChannel;
      let tmpResult6;
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      const messageId = nativeSyntheticEventData.messageId;
      const componentId = nativeSyntheticEventData.componentId;
      const messageData = obj.getMessageData(messageId);
      if (null != messageData) {
        ({ messageChannel, message } = messageData);
        ({ flags: closure_129_1, applicationId } = message);
        if (applicationId == null) {
          applicationId = message.author.id;
        }
        id = messageChannel.id;
        const guildId = messageChannel.getGuildId();
        const tmpResult = InteractionComponentUtils;
        const get = tmpResult.flattenComponents(message.components).get;
        tmpResult.flattenComponents(message.components);
        const tmpResult4 = InteractionComponentTypes;
        const value = get(tmpResult4.asComponentId(componentId));
        if (null != value) {
          const tmpResult5 = InteractionComponentUtils;
          const parents = tmpResult5.getParents(message.components, value);
          let first;
          if (parents != null) {
            first = parents[0];
          }
          let type1;
          if (first != null) {
            type1 = first.type;
          }
          let tmp10;
          if (type1 === Server.ComponentType.LABEL) {
            tmp10 = first;
          }
          let obj2 = {
            channelId: id,
            guildId,
            containerId: messageId,
            labelComponent: tmp10,
            allowEmpty: tmpResult6.canSelectBeEmpty(value, "message"),
            onSubmit(localState) {
              obj = closure_2_0(closure_2_3[161]);
              const obj2 = {
                componentType: value.type,
                messageId,
                messageFlags,
                customId: value.customId,
                componentId: value.id,
                applicationId,
                channelId: id,
                guildId,
                localState,
              };
              const result = obj.executeMessageComponentInteraction(obj2);
            },
          };
          const type = value.type;
          tmpResult6 = InteractionComponentUtils;
          if (Server.ComponentType.STRING_SELECT === type) {
            const openLazy2 = ActionSheetActionCreatorsDefault.openLazy;
            const _HermesInternal2 = HermesInternal;
            ActionSheetActionCreatorsDefault;
            const obj3 = { selectionActionComponent: value };
            const tmp22 = asyncRequire(11444, dependencyMap.paths);
            const combined = "StringSelectComponentActionSheet:" + messageId;
            const merged = Object.assign(obj2);
            openLazy2(tmp22, combined, obj3);
          } else {
            if (Server.ComponentType.USER_SELECT !== type) {
              if (Server.ComponentType.ROLE_SELECT !== type) {
                if (Server.ComponentType.MENTIONABLE_SELECT !== type) {
                  if (Server.ComponentType.CHANNEL_SELECT === type) {
                    const openLazy3 = ActionSheetActionCreatorsDefault.openLazy;
                    const _HermesInternal3 = HermesInternal;
                    ActionSheetActionCreatorsDefault;
                    const obj4 = { selectionActionComponent: value };
                    const tmp32 = asyncRequire(11450, dependencyMap.paths);
                    const combined1 = "ChannelSelectComponentActionSheet:" + messageId;
                    const merged1 = Object.assign(obj2);
                    openLazy3(tmp32, combined1, obj4);
                  }
                }
              }
            }
            const openLazy = ActionSheetActionCreatorsDefault.openLazy;
            const _HermesInternal = HermesInternal;
            ActionSheetActionCreatorsDefault;
            const obj5 = { selectionActionComponent: value };
            const tmp13 = asyncRequire(11446, dependencyMap.paths);
            const combined2 = "MentionableSelectComponentActionSheet:" + messageId;
            const merged2 = Object.assign(obj2);
            openLazy(tmp13, combined2, obj5);
          }
        }
      }
    };
    obj.handleTapWelcomeReply = function handleTapWelcomeReply(nativeEvent) {
      let message;
      let messageChannel;
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      const stickerId = nativeSyntheticEventData.stickerId;
      const messageData = obj.getMessageData(nativeSyntheticEventData.messageId);
      if (null != messageData) {
        ({ messageChannel, message } = messageData);
        if (message.type === closure_52.USER_JOIN) {
          const tmpResult = WelcomeCTAUtils;
          const result = tmpResult.handleWelcomeCtaClicked(messageChannel, message, stickerId);
        } else if (message.type === tmp5.ROLE_SUBSCRIPTION_PURCHASE) {
          const tmpResult2 = system_message_GuildRoleSubscriptionSystemMessageUtils;
          const result1 = tmpResult2.handleRoleSubscriptionPurchaseSystemMessageCtaClicked(
            messageChannel,
            message,
            stickerId,
          );
        }
      }
    };
    obj.handleTapInviteToSpeak = function handleTapInviteToSpeak(nativeEvent) {
      let message;
      let messageChannel;
      obj = MessageDataSnowflakeUtils;
      const messageData = obj.getMessageData(obj.getNativeSyntheticEventData(nativeEvent).messageId);
      if (null != messageData) {
        ({ messageChannel, message } = messageData);
        if (message.type === closure_52.STAGE_RAISE_HAND) {
          const tmpResult = StageChannelActionCreators;
          tmpResult.setUserSuppress(messageChannel, message.author.id, false);
          const obj3 = MessageActionCreatorsDefault;
          obj3.deleteMessage(messageChannel.id, message.id, true);
        }
      }
    };
    obj.handleTapAutoModerationActions = function handleTapAutoModerationActions(nativeEvent) {
      let guildIncident;
      let intl;
      let message;
      let messageChannel;
      let tmpResult6;
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      const channelId = nativeSyntheticEventData.channelId;
      const messageId = nativeSyntheticEventData.messageId;
      const obj2 = obj;
      if (!obj.isModalOrActionsheetObstructing()) {
        const messageData = obj2.getMessageData(messageId);
        if (null != messageData) {
          ({ message, messageChannel } = messageData);
          const tmpResult = AutomodMessageUtils;
          if (tmpResult.isAutomodMessageRecord(message)) {
            if (messageChannel.id === channelId) {
              channel = ChannelStore.getChannel(channelId);
              let guild_id;
              const getGuild = GuildStore.getGuild;
              if (channel != null) {
                guild_id = channel.guild_id;
              }
              const guild = getGuild(guild_id);
              if (null != guild) {
                const tmpResult4 = AutomodMessageUtils;
                if (tmpResult4.isAutomodMessageRecord(message)) {
                  const tmpResult5 = AutomodMessageUtils;
                  if (tmpResult5.isAutomodNotification(message)) {
                    const obj3 = {
                      source: GuildAntiRaidTypes.GuildIncidentActionSources.MESSAGE,
                      alertType: tmpResult6.getIncidentAlertType(guildIncident),
                      messageId: message.id,
                    };
                    guildIncident = GuildIncidentsStore.getGuildIncident(guild.id);
                    const obj4 = { guild, analyticsData: obj3 };
                    tmpResult6 = GuildAntiRaidUtils;
                    const obj8 = ActionSheetActionCreatorsDefault;
                    obj8.openLazy(asyncRequire(11452, dependencyMap.paths), "GuildIncidentActionsActionSheet", obj4);
                  }
                }
                if (GuildMemberStore.isMember(guild.id, message.author.id)) {
                  const obj5 = { user: message.author, guild };
                  showModerateUserActionSheetDefault(obj5);
                } else {
                  const obj6 = {
                    key: "GUILD_AUTOMOD_ERROR_MESSAGE_NOT_MEMBER",
                    content: intl.string(intl4.t.UsD2YP),
                    icon: AssetRegistryDefault,
                  };
                  const open = ToastActionCreatorsDefault.open;
                  ToastActionCreatorsDefault;
                  intl = intl4.intl;
                  open(obj6);
                }
              }
            }
          }
        }
      }
    };
    obj.handleTapAutoModerationFeedback = function handleTapAutoModerationFeedback(nativeEvent) {
      let channelId;
      let content;
      let decisionId;
      let message;
      let messageChannel;
      let messageId;
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      ({ messageId, channelId } = nativeSyntheticEventData);
      const messageData = obj.getMessageData(messageId);
      if (null != messageData) {
        ({ message, messageChannel } = messageData);
        const tmpResult = AutomodMessageUtils;
        if (tmpResult.isAutomodMessageRecord(message)) {
          if (messageChannel.id === channelId) {
            channel = ChannelStore.getChannel(channelId);
            if (null != channel) {
              const tmpResult5 = AutomodMessageUtils;
              if (tmpResult5.isAutomodMessageRecord(message)) {
                const tmpResult6 = AutomodMessageUtils;
                if (tmpResult6.isAutomodNotification(message)) {
                  const obj2 = { guildId: channel.guild_id, messageId };
                  const obj5 = ActionSheetActionCreatorsDefault;
                  obj5.openLazy(asyncRequire(11485, dependencyMap.paths), "GuildRaidResolveActionSheet", obj2);
                }
              }
              const tmpResult7 = AutomodMessageUtils;
              const result = tmpResult7.extractAutomodMessageFields(message);
              ({ decisionId, content } = result);
              const tmpResult8 = GuildAutomodActionActionCreators;
              tmpResult8.openSubmitFeedback(messageId, content, decisionId, channel);
            }
          }
        }
      }
    };
    obj.handleTransitionToThread = function handleTransitionToThread(arg0, arg1, source) {
      channel = ChannelStore.getChannel(arg1);
      if (null != channel) {
        obj = obj(dependencyMap[174]);
        const obj2 = { source, navigationReplace: false };
        obj.transitionToThread(channel, obj2);
      }
    };
    obj.handleTransitionToMessage = function handleTransitionToMessage(guildId, id, flaggedMessageId) {
      obj = obj(dependencyMap[174]);
      obj.transitionToMessage(id, flaggedMessageId, { navigationReplace: false });
    };
    obj.handleTapFollowForumPost = function handleTapFollowForumPost(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      const channelId = nativeSyntheticEventData.channelId;
      const messageData = obj.getMessageData(nativeSyntheticEventData.messageId);
      if (null != messageData) {
        const messageChannel = messageData.messageChannel;
        const tmpResult = messages_MessagesUtils;
        const result = tmpResult.handleToggleFollowForumPost(messageChannel, JoinedThreadsStore.hasJoined(channelId));
      }
    };
    obj.handleTapShareForumPost = function handleTapShareForumPost(nativeEvent) {
      let channelId;
      let guildId;
      obj = obj(dependencyMap[41]);
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      ({ guildId, channelId } = nativeSyntheticEventData);
      const obj2 = obj(dependencyMap[61]);
      const obj3 = { section: constants7.CHANNEL };
      const result = obj2.handleCopyLinkForumPost(guildId, channelId, obj3);
    };
    obj.handleTapSeeMore = function handleTapSeeMore() {};
    obj.handleCopyText = function handleCopyText(nativeEvent) {
      const text = nativeEvent.nativeEvent.text;
      obj = obj(dependencyMap[175]);
      obj.copy(text);
      const obj2 = obj(dependencyMap[176]);
      const result = obj2.presentCopiedToClipboard();
    };
    obj.handleTapTag = function handleTapTag(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const messageData = obj.getMessageData(obj.getNativeSyntheticEventData(nativeEvent).messageId);
    };
    obj.handleTapOpTag = function handleTapOpTag() {
      obj = ToastActionCreatorsDefault;
      const obj2 = {
        key: "FORUM_OP-" + obj.params.selectedChannelId,
        content: ForumOriginalPoster.getForumOriginalPoster,
      };
      obj.open(obj2);
    };
    obj.handleMediaAttachmentPlaybackStarted = function handleMediaAttachmentPlaybackStarted(nativeEvent) {
      let closure_129_0;
      let isVoiceMessage;
      let messageId;
      let startDurationSecs;
      let totalDurationSecs;
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      ({
        messageId,
        totalDurationSecs,
        startDurationSecs,
        isVoiceMessage,
        attachmentId: closure_129_0,
      } = nativeSyntheticEventData);
      const messageData = obj.getMessageData(messageId);
      if (null != messageData) {
        if (undefined !== isVoiceMessage) {
          if (!isVoiceMessage) {
            const message = messageData.message;
            const contentMessage = message.getContentMessage();
            let found;
            if (contentMessage != null) {
              const attachments = contentMessage.attachments;
              found = attachments.find((id) => id.id === closure_1_0);
            }
            if (null != found) {
              const tmpResult = MediaAnalytics;
              const result = tmpResult.logMediaAttachmentPlaybackStarted(
                messageData.messageChannel,
                found,
                totalDurationSecs,
                messageId,
                startDurationSecs,
                messageData.message.author.id,
              );
            }
          }
        }
        const tmpResult2 = VoiceMessageAnalytics;
        const result1 = tmpResult2.logVoiceMessagePlaybackStarted(
          messageId,
          totalDurationSecs,
          startDurationSecs,
          messageData.message.author.id,
        );
      }
    };
    obj.handleMediaAttachmentPlaybackEnded = function handleMediaAttachmentPlaybackEnded(nativeEvent) {
      let closure_129_0;
      let durationListeningSecs;
      let endDurationSecs;
      let isVoiceMessage;
      let messageId;
      let totalDurationSecs;
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      ({
        messageId,
        totalDurationSecs,
        endDurationSecs,
        durationListeningSecs,
        isVoiceMessage,
        attachmentId: closure_129_0,
      } = nativeSyntheticEventData);
      const messageData = obj.getMessageData(messageId);
      if (null != messageData) {
        if (undefined !== isVoiceMessage) {
          if (!isVoiceMessage) {
            const message = messageData.message;
            const contentMessage = message.getContentMessage();
            let found;
            if (contentMessage != null) {
              const attachments = contentMessage.attachments;
              found = attachments.find((id) => id.id === closure_1_0);
            }
            if (null != found) {
              const tmpResult = MediaAnalytics;
              const result = tmpResult.logMediaAttachmentPlaybackEnded(
                messageId,
                totalDurationSecs,
                endDurationSecs,
                messageData.message.author.id,
                durationListeningSecs,
                found,
              );
            }
          }
        }
        const tmpResult2 = VoiceMessageAnalytics;
        const result1 = tmpResult2.logVoiceMessagePlaybackEnded(
          messageId,
          totalDurationSecs,
          endDurationSecs,
          messageData.message.author.id,
          durationListeningSecs,
        );
      }
    };
    obj.handleVoiceMessagePlaybackFailed = function handleVoiceMessagePlaybackFailed(nativeEvent) {
      let errorMessage;
      let intl;
      let messageId;
      obj = obj(dependencyMap[41]);
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      ({ messageId, errorMessage } = nativeSyntheticEventData);
      const logVoiceMessagePlaybackFailed = obj(dependencyMap[178]).logVoiceMessagePlaybackFailed;
      obj(dependencyMap[178]);
      if (errorMessage == null) {
        errorMessage = null;
      }
      const result = logVoiceMessagePlaybackFailed(messageId, errorMessage);
      const tmp6 = ToastActionCreatorsDefault;
      const open = tmp6.open;
      const obj2 = {
        key: "AUDIO_PLAYBACK_FAILED-" + messageId,
        content: intl.string(obj(dependencyMap[48]).t.gRHMh8),
        icon: AssetRegistryDefault,
      };
      intl = tmp(dependencyMap[48]).intl;
      open(obj2);
    };
    let closure_0 = _asyncToGenerator(async (arg0) => {
      let canViewChannelResult;
      let currentUser;
      let guildId;
      let isMember;
      let parentChannelId;
      let threadId;
      let v1;
      closure_0 = arg0;
      if (c1 === 2) {
        c1 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c1 = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              c1 = 3;
              throw value;
            } else if (arg0 === 2) {
              c1 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const obj10 = closure_0(c3[41]);
              const nativeSyntheticEventData = obj10.getNativeSyntheticEventData(closure_0);
              ({ guildId, parentChannelId, threadId } = nativeSyntheticEventData);
              const messageId = nativeSyntheticEventData.messageId;
              isMember = isMember.isMember;
              currentUser = currentUser.getCurrentUser();
              id = undefined;
              if (currentUser != null) {
                id = currentUser.id;
              }
              const isMemberResult = isMember(guildId, id);
              channel = channel.getChannel(parentChannelId);
              const obj5 = { media_post_id: threadId, can_access: canViewChannelResult, is_member: isMemberResult };
              canViewChannelResult = null != channel;
              const trackWithMetadata = closure_0(c3[89]).trackWithMetadata;
              const MEDIA_POST_PREVIEW_EMBED_CLICKED = constants.MEDIA_POST_PREVIEW_EMBED_CLICKED;
              const tmp21Result = closure_0(c3[89]);
              if (canViewChannelResult) {
                const tmp21Result3 = closure_0(c3[180]);
                canViewChannelResult = tmp21Result3.canViewChannel(channel);
              }
              trackWithMetadata(MEDIA_POST_PREVIEW_EMBED_CLICKED, obj5);
              if (isMemberResult) {
                const tmp21Result4 = closure_0(c3[174]);
                const result = tmp21Result4.tryTransitionToThreadMessage(parentChannelId, threadId, messageId);
              } else {
                c3 = 1;
                const obj6 = { channelId: parentChannelId };
                const obj4 = v1(c3[181]);
                v1 = 2;
                c1 = 1;
                const obj7 = { value: obj4.startLurking(guildId, {}, obj6), done: false };
                return obj7;
              }
            }
          } else if (1 === tmp3) {
            c3 = 0;
          } else if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c1 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c3 = 0;
          }
          c1 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp14) {
          if (0 === c3) {
            c1 = 3;
            throw tmp14;
          } else {
            v1 = 1;
          }
        }
      }
    });
    obj.handleTapPostPreviewEmbed = function () {
      return closure_0(...arguments);
    };
    obj.handleTapDismissMediaPostSharePrompt = function handleTapDismissMediaPostSharePrompt(nativeEvent) {
      obj = obj(dependencyMap[41]);
      const messageId = obj.getNativeSyntheticEventData(nativeEvent).messageId;
      const dismissMediaPostSharePrompt = MediaChannelActionCreatorsAll.dismissMediaPostSharePrompt;
      MediaChannelActionCreatorsAll;
      const obj2 = SnowflakeUtilsDefault;
      const result = dismissMediaPostSharePrompt(obj2.castMessageIdAsChannelId(messageId));
    };
    obj.handleTapObscuredMediaLearnMore = function handleTapObscuredMediaLearnMore(nativeEvent) {
      let attachmentId;
      let channelId;
      let embedId;
      let messageId;
      obj = obj(dependencyMap[41]);
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      ({ messageId, channelId, attachmentId, embedId } = nativeSyntheticEventData);
      const obj2 = ActionSheetActionCreatorsDefault;
      obj2.openLazy(obj(dependencyMap[40])(dependencyMap[183], dependencyMap.paths), "ExplicitMediaLearnMore", {
        messageId,
        channelId,
        attachmentId,
        embedId,
      });
    };
    obj.onTapObscuredMediaToggle = function onTapObscuredMediaToggle(nativeEvent) {
      let attachmentId;
      let channelId;
      let embedId;
      let isReveal;
      let messageId;
      obj = obj(dependencyMap[41]);
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      ({ messageId, channelId, isReveal, attachmentId, embedId } = nativeSyntheticEventData);
      const obj2 = obj(dependencyMap[184]);
      const tmp4 = isReveal && obj2.shouldAgeVerifyForExplicitMedia();
      if (tmp4) {
        const obj3 = { entryPoint: obj(dependencyMap[186]).AgeVerificationModalEntryPoint.OBSCURED_MEDIA };
        const showAgeVerificationGetStartedModal =
          AgeVerificationActionCreatorsDefault.showAgeVerificationGetStartedModal;
        AgeVerificationActionCreatorsDefault;
        const result = showAgeVerificationGetStartedModal(obj3);
      }
      const tmpResult = obj(dependencyMap[184]);
      const result1 = tmpResult.trackToggleMediaObscurityV2({ obscure: isReveal });
    };
    obj.handleTapSafetyPolicyNoticeEmbed = function handleTapSafetyPolicyNoticeEmbed(nativeEvent) {
      obj = obj(dependencyMap[41]);
      const classificationId = obj.getNativeSyntheticEventData(nativeEvent).classificationId;
      const obj2 = ModalActionCreatorsDefault;
      obj2.pushLazy(obj(dependencyMap[40])(dependencyMap[187], dependencyMap.paths), {
        classificationId,
        shouldRedirectToAccountStanding: true,
      });
    };
    obj.handleTapSafetySystemNotificationCta = function handleTapSafetySystemNotificationCta(nativeEvent) {
      let ctaKey;
      let ctaType;
      ({ ctaType, ctaKey } = nativeEvent.nativeEvent);
      if (constants11.POLICY_VIOLATION_DETAIL === ctaType) {
        if (null != ctaKey) {
          const obj3 = { classificationId: ctaKey, shouldRedirectToAccountStanding: true };
          const obj2 = ModalActionCreatorsDefault;
          obj2.pushLazy(obj(dependencyMap[40])(dependencyMap[187], dependencyMap.paths), obj3);
        }
      } else if (tmp.LEARN_MORE_LINK === ctaType) {
        if (null != ctaKey) {
          obj = LinkingDefault;
          obj.openURL(ctaKey);
        }
      }
    };
    obj.handleTapPollAnswer = function handleTapPollAnswer(arg0) {
      const replaceCorrectMessageParams = obj.replaceCorrectMessageParams;
      obj = MessageDataSnowflakeUtils;
      const result = replaceCorrectMessageParams(obj.castNativeSyntheticEventData(arg0));
      if (null != result) {
        const obj2 = PollsActionCreatorsDefault;
        const result1 = obj2.handlePollAnswerTapped(result);
      }
    };
    obj.handleTapPollSubmitVote = function handleTapPollSubmitVote(arg0) {
      const replaceCorrectMessageParams = obj.replaceCorrectMessageParams;
      obj = MessageDataSnowflakeUtils;
      const result = replaceCorrectMessageParams(obj.castNativeSyntheticEventData(arg0));
      if (null != result) {
        const obj2 = PollsActionCreatorsDefault;
        obj2.handlePollSubmitVote(result);
      }
    };
    obj.handleTapPollAction = function handleTapPollAction(arg0) {
      const replaceCorrectMessageParams = obj.replaceCorrectMessageParams;
      obj = MessageDataSnowflakeUtils;
      const result = replaceCorrectMessageParams(obj.castNativeSyntheticEventData(arg0));
      if (null != result) {
        const obj2 = PollsActionCreatorsDefault;
        const result1 = obj2.handlePollActionTapped(result);
      }
    };
    obj.handleLongPressPollImage = function handleLongPressPollImage(arg0) {
      let message;
      let messageChannel;
      const replaceCorrectMessageParams = obj.replaceCorrectMessageParams;
      const obj2 = MessageDataSnowflakeUtils;
      const result = replaceCorrectMessageParams(obj2.castNativeSyntheticEventData(arg0));
      if (null != result) {
        const messageData = obj.getMessageData(result.messageId);
        if (null != messageData) {
          ({ message, messageChannel } = messageData);
          const attachments = message.attachments;
          const findIndexResult = attachments.findIndex((id) => id.id === result.attachmentId);
          if (null != findIndexResult) {
            const tmpResult = MediaSourceUtil;
            const result1 = tmpResult.extractMediaSourcesFromMessage(message, message, messageChannel.guild_id);
            const obj3 = {
              initialSources: result1,
              initialIndex: findIndexResult,
              originViewOrOriginLayout: result.layout,
              analyticsSource: "Channel",
              channelId: messageChannel.id,
            };
            const tmpResult2 = openMediaModal;
            tmpResult2.openMediaModal(obj3);
          }
        }
      }
    };
    obj.handleTapCtaButton = function handleTapCtaButton(nativeEvent) {
      let callback;
      let channelId;
      let messageId;
      obj = obj(dependencyMap[41]);
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      ({ channelId, callback, messageId } = nativeSyntheticEventData);
      if (obj(dependencyMap[191]).CtaButtonType.MARK_AS_FALSE_POSITIVE === callback) {
        const tmpResult = obj(dependencyMap[192]);
        const result = tmpResult.handleSenderFalsePositiveFlow(channelId, messageId);
      } else if (obj(dependencyMap[191]).CtaButtonType.AGE_VERIFICATION_RETRY === callback) {
        const obj2 = { entryPoint: obj(dependencyMap[186]).AgeVerificationModalEntryPoint.SYSTEM_DM_RETRY_BUTTON };
        const showAgeVerificationGetStartedModal =
          AgeVerificationActionCreatorsDefault.showAgeVerificationGetStartedModal;
        AgeVerificationActionCreatorsDefault;
        const result1 = showAgeVerificationGetStartedModal(obj2);
        const tmpResult7 = obj(dependencyMap[186]);
        const result2 = tmpResult7.trackAgeVerificationDmClicked(
          tmp(dependencyMap[186]).AgeVerificationDmCta.RETRY,
          channelId,
        );
      } else if (obj(dependencyMap[191]).CtaButtonType.CONNECT_TO_TEEN === callback) {
        const tmpResult8 = obj(dependencyMap[193]);
        if (!tmpResult8.resumeFamilyCenterConnection()) {
          const obj3 = { screen: constants9.FAMILY_CENTER };
          const tmpResult9 = obj(dependencyMap[141]);
          tmpResult9.openUserSettings(obj3);
        }
        const tmpResult10 = obj(dependencyMap[186]);
        const result3 = tmpResult10.trackAgeVerificationDmClicked(
          tmp(dependencyMap[186]).AgeVerificationDmCta.CONNECT_TO_TEEN,
          channelId,
        );
      } else if (obj(dependencyMap[191]).CtaButtonType.AGE_VERIFICATION_MANUAL_REVIEW === callback) {
        const tmpResult11 = obj(dependencyMap[194]);
        const result4 = tmpResult11.handleManualReviewCta();
        const tmpResult12 = obj(dependencyMap[186]);
        const result5 = tmpResult12.trackAgeVerificationDmClicked(
          tmp(dependencyMap[186]).AgeVerificationDmCta.MANUAL_REVIEW,
          channelId,
        );
      }
    };
    obj.handleMessageAccessibilityAction = function handleMessageAccessibilityAction(nativeEvent) {
      let getUser;
      let id1;
      let id2;
      obj = MessageDataSnowflakeUtils;
      const messageId = obj.getNativeSyntheticEventData(nativeEvent).messageId;
      const obj2 = MessageAccessibilityActions;
      const messageAccessibilityActionFromLabel = obj2.getMessageAccessibilityActionFromLabel(
        nativeEvent.nativeEvent.action,
      );
      const params = obj.params;
      const chatInputRef = params.chatInputRef;
      const message = params.getMessage(messageId);
      const tmp4 = obj;
      if (null != message) {
        channel = ChannelStore.getChannel(message.channel_id);
        if (
          MessageAccessibilityActions.MessageAccessibilityAction.VIEW_PROFILE === messageAccessibilityActionFromLabel
        ) {
          if (message.type === closure_52.FRIEND_REQUEST_ACCEPTED) {
            if (null != channel) {
              if (channel.isDM()) {
                id = channel.getRecipientId();
              }
              if (null != id) {
                const obj3 = { userId: id, channelId: id1, messageId };
                id1 = undefined;
                const tmp12 = showUserProfileActionSheetDefault;
                if (channel != null) {
                  id1 = channel.id;
                }
                tmp12(obj3);
              }
            }
          }
          const author2 = message.author;
          if (author2 != null) {
            id = author2.id;
          }
        } else if (
          MessageAccessibilityActions.MessageAccessibilityAction.REPLY === messageAccessibilityActionFromLabel
        ) {
          if (null != channel) {
            const obj4 = { message, channel, chatInputRef, actionSource: "a11y_action" };
            replyToMessageDefault(obj4);
          }
        } else if (
          MessageAccessibilityActions.MessageAccessibilityAction.ADD_REACTION === messageAccessibilityActionFromLabel
        ) {
          if (null != channel) {
            const tmpResult = reactions_ReactionUtils;
            const result = tmpResult.handleAddNewReactions(channel, message.id);
          }
        } else if (
          MessageAccessibilityActions.MessageAccessibilityAction.MESSAGE_ACTIONS_MENU ===
          messageAccessibilityActionFromLabel
        ) {
          if (null != channel) {
            const obj5 = {
              channel,
              message,
              canAddNewReactions: canAddNewReactionsDefault(channel),
              user: getUser(id2),
              chatInputRef: tmp4.params.chatInputRef,
            };
            const showLongPressMessageActionSheet = showLongPressMessageActionSheet2.showLongPressMessageActionSheet;
            showLongPressMessageActionSheet2;
            id2 = undefined;
            getUser = UserStore.getUser;
            if (message != null) {
              const author = message.author;
              if (author != null) {
                id2 = author.id;
              }
            }
            const result1 = showLongPressMessageActionSheet(obj5);
          }
        } else if (
          MessageAccessibilityActions.MessageAccessibilityAction.ADD_QUICK_REACTION ===
          messageAccessibilityActionFromLabel
        ) {
          if (null != channel) {
            const tmpResult4 = DoubleTapToReactUtils;
            const result2 = tmpResult4.handleAddDefaultDoubleTapReaction(message, channel);
          }
        } else if (
          MessageAccessibilityActions.MessageAccessibilityAction.EDIT_GDM === messageAccessibilityActionFromLabel
        ) {
          if (null != channel) {
            const obj6 = { channelId: channel.id };
            showChatGDMCustomizeActionSheetDefault(obj6);
          }
        } else if (
          MessageAccessibilityActions.MessageAccessibilityAction.OPEN_PINS === messageAccessibilityActionFromLabel
        ) {
          openPinnedMessagesDefault(message.channel_id, "pinned-message-system-message");
        } else if (
          MessageAccessibilityActions.MessageAccessibilityAction.JUMP_TO_MESSAGE === messageAccessibilityActionFromLabel
        ) {
          jumpToReferencedMessageDefault(message);
        }
      }
    };
    obj.handleTapForwardFooter = function handleTapForwardFooter(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const params = obj.params;
      const message = params.getMessage(obj.getNativeSyntheticEventData(nativeEvent).messageId);
      if (null != message) {
        handleForwardBreadcrumbDefault(message);
      }
    };
    obj.handleTapInlineForward = function handleTapInlineForward(nativeEvent) {
      let str;
      let tmp8;
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      const params = obj.params;
      const message = params.getMessage(nativeSyntheticEventData.messageId);
      if (null != message) {
        const tmpResult = getInlineForwardOptions;
        const inlineForwardOptions = tmpResult.getInlineForwardOptions(message, nativeSyntheticEventData);
        if (null != inlineForwardOptions) {
          const _Object = Object;
          const length = Object.keys(inlineForwardOptions).length;
          if (nativeEvent.nativeEvent.triggerHaptic) {
            const tmpResult3 = HapticUtils;
            const result = tmpResult3.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
          }
          const obj2 = { message, source: str, forwardOptions: tmp8 };
          str = nativeEvent.nativeEvent.location;
          const openForwardModal = ForwardModalUtils.openForwardModal;
          ForwardModalUtils;
          if (str == null) {
            str = "inline-button";
          }
          tmp8 = undefined;
          if (0 !== length) {
            tmp8 = inlineForwardOptions;
          }
          openForwardModal(obj2);
        }
      }
    };
    obj.handleTapSoundmoji = function handleTapSoundmoji(nativeEvent) {
      obj = obj(dependencyMap[41]);
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      openSoundmojiActionSheetDefault(nativeSyntheticEventData);
    };
    obj.handleTapClanTagChiplet = function handleTapClanTagChiplet(nativeEvent) {
      const tmp = obj;
      obj = obj(dependencyMap[41]);
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      const tmp4 = null != nativeSyntheticEventData && null != nativeSyntheticEventData.guildId;
      if (tmp4) {
        const openLazy = ActionSheetActionCreatorsDefault.openLazy;
        const _HermesInternal = HermesInternal;
        ActionSheetActionCreatorsDefault;
        const obj2 = { guildId: nativeSyntheticEventData.guildId };
        const tmp7 = tmp(dependencyMap[40])(dependencyMap[70], dependencyMap.paths);
        openLazy(tmp7, "GuildProfileActionSheet:" + nativeSyntheticEventData.guildId, obj2);
      }
    };
    obj.handleTapContentInventoryEntryEmbed = function handleTapContentInventoryEntryEmbed(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      const messageId = nativeSyntheticEventData.messageId;
      const tmp4 = _objectWithoutProperties(nativeSyntheticEventData, closure_4);
      const message = obj.params.getMessage(messageId);
      if (null != message) {
        const obj2 = { message, authorId: null, contentId: null, tappedElement: null };
        ({ authorId: obj3.authorId, contentId: obj3.contentId, tappedElement: obj3.tappedElement } = tmp4);
        const tmpResult = ContentInventoryActionCreators;
        const result = tmpResult.onTapContentInventoryEntryEmbed(obj2);
      }
    };
    obj.handleTapCheckpointCard = function handleTapCheckpointCard(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      const messageId = nativeSyntheticEventData.messageId;
      const tmp4 = _objectWithoutProperties(nativeSyntheticEventData, closure_5);
      const message = obj.params.getMessage(messageId);
      if (null != message) {
        const obj2 = { message, authorId: tmp4.authorId };
        const tmpResult = onTapCheckpointCard;
        tmpResult.onTapCheckpointCard(obj2);
      }
    };
    obj.handleTapAppMessageEmbed = function handleTapAppMessageEmbed(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      const message = obj.params.getMessage(nativeSyntheticEventData.messageId);
      if (null != message) {
        const obj2 = { message };
        const handleTapAppMessageEmbed = createAppMessageEmbed.handleTapAppMessageEmbed;
        createAppMessageEmbed;
        const merged = Object.assign(nativeSyntheticEventData);
        const result = handleTapAppMessageEmbed(obj2);
      }
    };
    obj.handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      const message = obj.params.getMessage(nativeSyntheticEventData.messageId);
      if (null != message) {
        const obj2 = { message };
        const handleTapPreviewSharedClientTheme = previewSharedClientTheme.handleTapPreviewSharedClientTheme;
        previewSharedClientTheme;
        const merged = Object.assign(nativeSyntheticEventData);
        const result = handleTapPreviewSharedClientTheme(obj2);
      }
    };
    obj.handleSharedClientThemeViewed = function handleSharedClientThemeViewed(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      const message = obj.params.getMessage(nativeSyntheticEventData.messageId);
      if (null != message) {
        const obj2 = { message };
        const handleSharedClientThemeViewed = sharedClientThemeViewed.handleSharedClientThemeViewed;
        sharedClientThemeViewed;
        const merged = Object.assign(nativeSyntheticEventData);
        const result = handleSharedClientThemeViewed(obj2);
      }
    };
    obj.getParams = getParams;
    return obj;
  }
  replaceCorrectMessageParams(nativeEvent) {
    let channel_id;
    let id;
    let obj7;
    const self = this;
    nativeEvent = nativeEvent.nativeEvent;
    const message = this.params.getMessage(nativeEvent.messageId);
    if (null != message) {
      if (message.type === constants8.THREAD_STARTER_MESSAGE) {
        const messageReference = message.messageReference;
        if (null != messageReference) {
          let tmp13;
          if (null != MessageStore.getMessage(messageReference.channel_id, messageReference.message_id)) {
            const obj2 = {};
            const merged = Object.assign(nativeEvent);
            ({ message_id: obj4.messageId, channel_id: obj4.channelId } = messageReference);
            tmp13 = obj2;
          } else {
            const handleLongPressMessage = self.handleLongPressMessage;
            const obj3 = { nativeEvent: obj7 };
            const merged1 = Object.assign(nativeEvent);
            obj7 = { mediaIndex: 0, mediaType: "" };
            const merged2 = Object.assign(nativeEvent);
            const result = handleLongPressMessage(obj3);
          }
          return tmp13;
        }
      } else {
        const obj = { messageId: id, channelId: channel_id };
        ({ id, channel_id } = message);
        const merged3 = Object.assign(nativeEvent);
        return obj;
      }
    }
  }
}
Object.defineProperty(MessagesHandlers.prototype, "params", {
  get: function params() {
    return this.getParams();
  },
  set: undefined,
});

export { MessagesHandlers };
