// === Module 11636: MessagesHandlers ===

// Module 11636 (MessagesHandlers)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import router_utils from "router_utils" /* 1100 */;
import util from "util" /* 1114 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import Server from "Server" /* 1894 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import LinkingDefault from "Linking" /* 4301 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4305 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4573 */;
import HapticUtils from "HapticUtils" /* 4574 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 4575 */;
import parseURLDefault from "parseURL" /* 4586 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 4786 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4809 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 4813 */;
import AgeGateUtils from "AgeGateUtils" /* 4817 */;
import InteractionComponentUtils from "InteractionComponentUtils" /* 4831 */;
import InteractionComponentTypes from "InteractionComponentTypes" /* 4838 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 4950 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5462 */;
import actions_BoostingActionCreatorsAll from "actions/BoostingActionCreators" /* 5485 */;
import EmailVerificationModalActionCreatorsDefault from "EmailVerificationModalActionCreators" /* 5672 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7255 */;
import GuildCapUpsellHooks from "GuildCapUpsellHooks" /* 7285 */;
import ThreadHooks from "ThreadHooks" /* 7342 */;
import SpoilerChannelUtils from "SpoilerChannelUtils" /* 7402 */;
import transitionToGuild from "transitionToGuild" /* 7415 */;
import openPremiumPlanSelectionActionSheetDefault from "openPremiumPlanSelectionActionSheet" /* 7495 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7529 */;
import AutomodMessageUtils from "AutomodMessageUtils" /* 7581 */;
import getInviteURLDefault from "getInviteURL" /* 7831 */;
import ExperimentEmbedUtils from "ExperimentEmbedUtils" /* 7964 */;
import MessageAccessibilityActions from "MessageAccessibilityActions" /* 8041 */;
import DoubleTapToReactUtils from "DoubleTapToReactUtils" /* 8042 */;
import canAddNewReactionsDefault from "canAddNewReactions" /* 8045 */;
import WelcomeCTAUtils from "WelcomeCTAUtils" /* 8075 */;
import GuildAntiRaidUtils from "GuildAntiRaidUtils" /* 8089 */;
import GuildAntiRaidTypes from "GuildAntiRaidTypes" /* 8091 */;
import PublicGuildsUtils from "PublicGuildsUtils" /* 8109 */;
import isCrosspostDefault from "isCrosspost" /* 8111 */;
import InteractionUtils from "InteractionUtils" /* 8201 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8264 */;
import openMediaModal from "openMediaModal" /* 8345 */;
import MediaSourceUtil from "MediaSourceUtil" /* 8351 */;
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 8464 */;
import StageChannelModalActionCreators from "StageChannelModalActionCreators" /* 8479 */;
import StageChannelActionCreators from "StageChannelActionCreators" /* 8484 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8497 */;
import useGuildProfileCTA from "useGuildProfileCTA" /* 9295 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 9404 */;
import trackApplicationOpenDefault from "trackApplicationOpen" /* 9661 */;
import ApplicationUtils from "ApplicationUtils" /* 9664 */;
import autocompleter_AutocompleteUtils from "autocompleter/AutocompleteUtils" /* 10351 */;
import age_gate_AgeGateUtils from "age_gate/AgeGateUtils" /* 10383 */;
import showStickerDetailActionSheet from "showStickerDetailActionSheet" /* 10492 */;
import utils_openGiftModal from "utils/openGiftModal" /* 10750 */;
import showChatGDMCustomizeActionSheetDefault from "showChatGDMCustomizeActionSheet" /* 11011 */;
import MarkupReactCommandRule from "MarkupReactCommandRule" /* 11306 */;
import navigateToLastChannelDefault from "navigateToLastChannel" /* 11311 */;
import messages_MessagesUtils from "messages/MessagesUtils" /* 11346 */;
import _modDef11347 from "module_11347" /* 11347 */;
import reactions_ReactionUtils from "reactions/ReactionUtils" /* 11348 */;
import SummaryActionCreatorsDefault from "SummaryActionCreators" /* 11438 */;
import openBlockedPaymentsCountryActionSheetDefault from "openBlockedPaymentsCountryActionSheet" /* 11527 */;
import ActivitiesActionCreatorsDefault from "ActivitiesActionCreators" /* 11566 */;
import isAlertOrActionSheetOpen from "isAlertOrActionSheetOpen" /* 11637 */;
import MessageDataSnowflakeUtils from "MessageDataSnowflakeUtils" /* 11640 */;
import contentHandlers2 from "contentHandlers" /* 11679 */;
import handleAcceptEventInstantInviteDefault from "handleAcceptEventInstantInvite" /* 11708 */;
import openPinnedMessagesDefault from "openPinnedMessages" /* 11710 */;
import trackRepliedMessageClickedDefault from "trackRepliedMessageClicked" /* 11744 */;
import showLongPressMessageActionSheet from "showLongPressMessageActionSheet" /* 11750 */;
import LongPressMessageActionSheetUtils from "LongPressMessageActionSheetUtils" /* 11760 */;
import replyToMessageDefault from "replyToMessage" /* 11772 */;
import ForwardModalUtils from "ForwardModalUtils" /* 11773 */;
import PollsActionCreatorsDefault from "PollsActionCreators" /* 11807 */;
import canEditMessageDefault from "canEditMessage" /* 11839 */;
import UploadActionCreatorsDefault from "UploadActionCreators" /* 11840 */;
import getCurrentUserPresenceActivityDefault from "getCurrentUserPresenceActivity" /* 11854 */;
import GamesActionCreatorsDefault from "GamesActionCreators" /* 11858 */;
import guild_templates_GuildTemplateActionCreatorsDefault from "guild_templates/GuildTemplateActionCreators" /* 11886 */;
import ExperimentEmbedPlatformUtils from "ExperimentEmbedPlatformUtils" /* 11900 */;
import PremiumGiftingIntentUtils from "PremiumGiftingIntentUtils" /* 11909 */;
import system_message_GuildRoleSubscriptionSystemMessageUtils from "system_message/GuildRoleSubscriptionSystemMessageUtils" /* 11922 */;
import showModerateUserActionSheetDefault from "showModerateUserActionSheet" /* 11927 */;
import GuildAutomodActionActionCreators from "GuildAutomodActionActionCreators" /* 11955 */;
import ForumOriginalPoster from "ForumOriginalPoster" /* 11966 */;
import VoiceMessageAnalytics from "VoiceMessageAnalytics" /* 11967 */;
import MediaAnalytics from "MediaAnalytics" /* 11968 */;
import MediaChannelActionCreatorsAll from "MediaChannelActionCreators" /* 11969 */;
import jumpToReferencedMessageDefault from "jumpToReferencedMessage" /* 12023 */;
import handleForwardBreadcrumbDefault from "handleForwardBreadcrumb" /* 12024 */;
import getInlineForwardOptions from "getInlineForwardOptions" /* 12025 */;
import openSoundmojiActionSheetDefault from "openSoundmojiActionSheet" /* 12026 */;
import ContentInventoryActionCreators from "ContentInventoryActionCreators" /* 12029 */;
import onTapCheckpointCard from "onTapCheckpointCard" /* 12032 */;
import createAppMessageEmbed from "createAppMessageEmbed" /* 12033 */;
import previewSharedClientTheme from "previewSharedClientTheme" /* 12039 */;
import sharedClientThemeViewed from "sharedClientThemeViewed" /* 12042 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import ApplicationStore from "ApplicationStore" /* 4834 */;
import ApplicationDirectoryApplicationsStore from "ApplicationDirectoryApplicationsStore" /* 7237 */;
import GuildIncidentsStore from "GuildIncidentsStore" /* 10170 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 7599 */;
import PremiumGiftingIntentStore from "PremiumGiftingIntentStore" /* 8153 */;
import QuestStore from "QuestStore" /* 7775 */;
import ReferencedMessageStore from "ReferencedMessageStore" /* 7667 */;
import SummaryStore from "SummaryStore" /* 11439 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4247 */;
import UserAffinitiesV2Store from "UserAffinitiesV2Store" /* 7731 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GiftCodeStore from "GiftCodeStore" /* 11523 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import GuildStore from "GuildStore" /* 1979 */;
import InviteStore from "InviteStore" /* 4590 */;
import LocalActivityStore from "LocalActivityStore" /* 11551 */;
import MessageStore from "MessageStore" /* 4827 */;
import PermissionStore from "PermissionStore" /* 4245 */;
import PresenceStore from "PresenceStore" /* 4646 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4428 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5330 */;
import UploadStore from "UploadStore" /* 7910 */;
import UserStore from "UserStore" /* 1371 */;

const InviteCodeUtils = trackInviteEmbedActioned(4591);
const CodedLink = trackInviteEmbedActioned(4594);
const InviteTypeUtils = trackInviteEmbedActioned(7807);
const InstantInviteActionCreators = trackInviteEmbedActioned(8464);
const SocialLayerStorefrontNativeActionCreators = trackInviteEmbedActioned(10886);
const VoiceChannelListInviteExperiment = trackInviteEmbedActioned(11400);
const VoiceChannelListInviteEmbed = trackInviteEmbedActioned(11401);
const build_overrides_BuildOverrideUtils = trackInviteEmbedActioned(11883);
require = fn;
let closure_4 = ["messageId"];
let closure_5 = ["messageId"];
let closure_13 = fn(7599).isGuildScheduledEventActive;
const SeparatorAction = fn(8007).SeparatorAction;
const Constants = fn(1074);
({ ActivityActionTypes: closure_36, ActivityFlags: closure_37, ActivityGamePlatforms: closure_38, ActivityTypes: closure_39, AnalyticEvents: closure_40, AnalyticsGameOpenTypes: closure_41, AnalyticsLocations: closure_42, AnalyticsObjects: closure_43, AnalyticsObjectTypes: closure_44, AnalyticsPages: closure_45, AnalyticsSections: closure_46, LinkingTypes: closure_47, ME: closure_48, MessageFlags: closure_49, MessageStates: closure_50, MessageTypes: closure_51, Permissions: closure_52, Routes: closure_53, UpsellTypes: closure_54, UserSettingsSections: closure_55, WebBrowserType: closure_56 } = Constants);
const InviteTypes = fn(7808).InviteTypes;
const PremiumConstants = fn(1373);
({ PremiumTypes: closure_58, PremiumUpsellTypes: closure_59 } = PremiumConstants);
let closure_60 = fn(8505).SafetySystemNotificationCtaType;
let closure_61 = fn(1113).OpenThreadAnalyticsLocations;
const jsx = fn(21).jsx;
let items = [AnalyticsLocationDefault.PREMIUM_GIFT_INTENT_CARD];
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/MessagesHandlers.tsx");
class MessagesHandlers {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
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
        obj(dependencyMap[38])(dependencyMap[37], dependencyMap.paths).then((handleMessagesTapImage) => {
          obj = { tapImageData: nativeEvent, allowWithinModal: false, message: messageData.message, messageChannel: messageData.messageChannel, selectedChannelId: obj.params.selectedChannelId };
          const result = handleMessagesTapImage.handleMessagesTapImage(obj);
        });
        const promise = obj(dependencyMap[38])(dependencyMap[37], dependencyMap.paths);
      }
    };
    obj.handleTapChannel = function handleTapChannel(nativeEvent) {
      if (!data.isModalOrActionsheetObstructing()) {
        obj = obj(dependencyMap[39]);
        data = obj.getNativeSyntheticEventData(nativeEvent).data;
        obj(dependencyMap[38])(dependencyMap[40], dependencyMap.paths).then((handleMessagesTapChannel) => {
          const result = handleMessagesTapChannel.handleMessagesTapChannel({
            data,
            dismissKeyboard() {
              const current = params.getParams().chatInputRef.current;
              let dismissKeyboardResult;
              if (current != null) {
                dismissKeyboardResult = current.dismissKeyboard();
              }
              return dismissKeyboardResult;
            }
          });
        });
        const promise = obj(dependencyMap[38])(dependencyMap[40], dependencyMap.paths);
      }
    };
    obj.handleLongPressChannel = function handleLongPressChannel(nativeEvent) {
      if (!obj.isModalOrActionsheetObstructing()) {
        obj = MessageDataSnowflakeUtils;
        const data = obj.getNativeSyntheticEventData(nativeEvent).data;
        asyncRequireImpl(11676, dependencyMap.paths).then((handleMessagesLongPressChannel) => {
          const result = handleMessagesLongPressChannel.handleMessagesLongPressChannel({ data });
        });
        const promise = asyncRequireImpl(11676, dependencyMap.paths);
      }
    };
    obj.handleTapAttachmentLink = function handleTapAttachmentLink(arg0) {
      if (!obj.isModalOrActionsheetObstructing()) {
        contentHandlers2.contentHandlers.onTapAttachmentLink(arg0);
        const contentHandlers = contentHandlers2.contentHandlers;
      }
    };
    obj.handleLongPressAttachmentLink = function handleLongPressAttachmentLink(arg0) {
      if (!obj.isModalOrActionsheetObstructing()) {
        const result = contentHandlers2.contentHandlers.onLongPressAttachmentLink(arg0);
        const contentHandlers = contentHandlers2.contentHandlers;
      }
    };
    obj.handleTapCall = function handleTapCall(nativeEvent) {
      obj = channel(dependencyMap[39]);
      const data = obj.getNativeSyntheticEventData(nativeEvent).data;
      const channelId = data.channelId;
      channel = channel.getChannel(channelId);
      if (tmp3) {
        let tmpResult = tmp(dependencyMap[43]);
        if (tmpResult.checkIsCallActive(channelId, data.messageId)) {
          tmpResult = tmp(dependencyMap[44]);
          tmpResult.handleJoinCall(channel);
        } else {
          obj = { key: "CallTap", options: null, hasIcons: true };
          obj = { label: null, IconComponent: null, onPress: null };
          const intl = tmp(dependencyMap[46]).intl;
          obj.label = intl.string(tmp(dependencyMap[46]).t.focH1t);
          obj.IconComponent = tmp(dependencyMap[47]).PhoneCallIcon;
          obj.onPress = function onPress() {
            obj = obj(dependencyMap[44]);
            obj.handleStartCall(channel);
          };
          items = [obj, ];
          const obj1 = { label: null, IconComponent: null, onPress: null };
          const intl2 = tmp(dependencyMap[46]).intl;
          obj1.label = intl2.string(tmp(dependencyMap[46]).t.oCqlGG);
          obj1.IconComponent = tmp(dependencyMap[48]).VideoIcon;
          obj1.onPress = function onPress() {
            obj = obj(dependencyMap[44]);
            obj.handleStartCall(channel, true);
          };
          items[1] = obj1;
          obj.options = items;
          const result = tmp(dependencyMap[45]).showSimpleActionSheet(obj);
          const tmpResult1 = tmp(dependencyMap[45]);
        }
      }
      tmp3 = null != channel && channel.isPrivate();
    };
    obj.handleTapMention = function handleTapMention(nativeEvent) {
      if (!obj.isModalOrActionsheetObstructing()) {
        contentHandlers2.contentHandlers.onTapMention(nativeEvent);
        const contentHandlers = contentHandlers2.contentHandlers;
      }
    };
    obj.handleTapCommandMention = function handleTapCommandMention(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      const commandName = nativeSyntheticEventData.commandName;
      const commandId = nativeSyntheticEventData.commandId;
      const chatInputRef = obj.getParams().chatInputRef;
      obj = { channelId: nativeSyntheticEventData.channelId, currentText: null, commandId: null, commandName: null, onOpenCustomKeyboard: null, onSetCommand: null };
      let current = chatInputRef.current;
      let str;
      if (current != null) {
        str = current.getText();
      }
      if (str == null) {
        str = "";
      }
      obj.currentText = str;
      obj.commandId = commandId;
      obj.commandName = commandName;
      obj.onOpenCustomKeyboard = function onOpenCustomKeyboard(arg0) {
        const current = chatInputRef.current;
        let openCustomKeyboardResult;
        if (current != null) {
          openCustomKeyboardResult = current.openCustomKeyboard(arg0);
        }
        return openCustomKeyboardResult;
      };
      obj.onSetCommand = function onSetCommand() {
        obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
        navigateToLastChannelDefault();
        const current = chatInputRef.current;
        if (current != null) {
          current.openSystemKeyboard();
        }
        const current2 = chatInputRef.current;
        if (current2 != null) {
          const applicationCommandManager = current2.getApplicationCommandManager();
          if (applicationCommandManager != null) {
            applicationCommandManager.setPartialCommand(commandId, commandName, obj(dependencyMap[52]).ApplicationCommandTriggerLocations.MENTION);
          }
        }
      };
      const result = MarkupReactCommandRule.handleTapCommandMention(obj);
    };
    obj.handleLongPressCommandMention = function handleLongPressCommandMention(nativeEvent) {
      ({ commandName, commandId } = nativeEvent.nativeEvent);
      obj = obj(dependencyMap[49]);
      const result = obj.handleLongPressCommandMention(commandName, commandId);
    };
    obj.handleTapGameMention = function handleTapGameMention(nativeEvent) {
      if (!obj.isModalOrActionsheetObstructing()) {
        obj = MessageDataSnowflakeUtils;
        const gameId = obj.getNativeSyntheticEventData(nativeEvent);
        asyncRequireImpl(11706, dependencyMap.paths).then((handleMessagesTapGameMention) => {
          const result = handleMessagesTapGameMention.handleMessagesTapGameMention({ gameId: gameId.gameId });
        });
        const promise = asyncRequireImpl(11706, dependencyMap.paths);
      }
    };
    obj.handleTapGuildEventLink = function handleTapGuildEventLink(node) {
      node = node.node;
      if (null != node) {
        obj = obj(dependencyMap[54]);
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
              tmp8 = !tmp2(dependencyMap[56]).isGuildScheduledEventInviteEmbed(invite);
              const tmp2Result = tmp2(dependencyMap[56]);
            }
            let flag = !tmp8;
            if (!tmp8) {
              handleAcceptEventInstantInviteDefault(invite);
              flag = true;
            }
            return flag;
          }
        }
        tmp2 = obj;
      }
      return false;
    };
    obj.handleTapLink = function handleTapLink(nativeEvent) {
      nativeEvent = nativeEvent.nativeEvent;
      const messageData = nativeEvent.getMessageData(nativeEvent.data.messageId);
      obj(dependencyMap[38])(dependencyMap[58], dependencyMap.paths).then((handleMessagesTapLink) => {
        obj = { allowWithinModal: false, chatInputRef: obj.params.chatInputRef, handleTransitionToThread: obj.handleTransitionToThread, message: null, messageChannel: null, selectedChannelId: null, tapLinkData: null };
        let message;
        if (closure_1 != null) {
          message = closure_1.message;
        }
        obj.message = message;
        let messageChannel;
        if (closure_1 != null) {
          messageChannel = closure_1.messageChannel;
        }
        obj.messageChannel = messageChannel;
        obj.selectedChannelId = obj.params.selectedChannelId;
        obj.tapLinkData = nativeEvent;
        const result = handleMessagesTapLink.handleMessagesTapLink(obj);
      });
    };
    obj.handleLongPressLink = function handleLongPressLink(nativeEvent) {
      if (!obj.isModalOrActionsheetObstructing()) {
        contentHandlers2.contentHandlers.onLongPressLink(nativeEvent);
        const contentHandlers = contentHandlers2.contentHandlers;
      }
    };
    obj.handleTapReaction = function handleTapReaction(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      ({ reaction, messageId, isBurst } = nativeSyntheticEventData);
      if (!obj.isModalOrActionsheetObstructing()) {
        const messageData = obj2.getMessageData(messageId);
        if (null != messageData) {
          const messageChannel = messageData.messageChannel;
          const tmpResult = messages_MessagesUtils;
          let tmp6 = null;
          if (null != reaction) {
            obj = {};
            const merged = Object.assign(reaction);
            obj.emoji = reaction.emoji;
            tmp6 = obj;
          }
          const result = tmpResult.handleAddOrRemoveReaction(messageId, messageChannel, tmp6, isBurst, nativeEvent.nativeEvent.location);
        }
      }
      obj2 = obj;
    };
    obj.handleTapReactionOverflow = function handleTapReactionOverflow(nativeEvent) {
      let location = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = location.getNativeSyntheticEventData(nativeEvent);
      ({ messageId, channelId } = nativeSyntheticEventData);
      if (!location.isModalOrActionsheetObstructing()) {
        location = { messageId, channelId, location: null };
        location = { object: constants2.CHANNEL, objectType: constants3.REACTION_OVERFLOW };
        location.location = location;
        reactions_ReactionUtils.handleViewReactions(location);
        const tmpResult = reactions_ReactionUtils;
      }
    };
    obj.handleLongPressReaction = function handleLongPressReaction(nativeEvent) {
      let location = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = location.getNativeSyntheticEventData(nativeEvent);
      const reaction = nativeSyntheticEventData.reaction;
      ({ messageId, channelId, isBurst } = nativeSyntheticEventData);
      if (!location.isModalOrActionsheetObstructing()) {
        location = { messageId, channelId, emoji: null, isSelectedBurst: null, location: null };
        let emoji = null;
        if (null != reaction) {
          emoji = reaction.emoji;
        }
        location.emoji = emoji;
        location.isSelectedBurst = isBurst;
        location = { object: constants2.CHANNEL, objectType: constants3.REACTION };
        location.location = location;
        reactions_ReactionUtils.handleViewReactions(location);
        const tmpResult = reactions_ReactionUtils;
      }
    };
    obj.handleOpenSticker = function handleOpenSticker(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      const messageData = obj.getMessageData(nativeSyntheticEventData.messageId);
      if (null != messageData) {
        obj = { renderableSticker: nativeSyntheticEventData.sticker, channel: messageData.messageChannel, chatInputRef: tmp4.params.chatInputRef };
        const result = showStickerDetailActionSheet.showStickerDetailActionSheet(obj);
        const tmpResult = showStickerDetailActionSheet;
      }
      tmp4 = obj;
    };
    obj.handleTapAvatar = function handleTapAvatar(arg0) {
      items = [AnalyticsLocationDefault.AVATAR];
      obj.handleOpenProfile(arg0, items);
    };
    obj.handleTapUsername = function handleTapUsername(nativeEvent) {
      obj = PlatformUtils;
      if (obj.isIOS()) {
        items = [AnalyticsLocationDefault.USERNAME];
        obj.handleOpenProfile(nativeEvent, items);
      } else {
        let tmpResult = MessageDataSnowflakeUtils;
        const nativeSyntheticEventData = tmpResult.getNativeSyntheticEventData(nativeEvent);
        const userId = nativeSyntheticEventData.userId;
        const messageData = obj.getMessageData(nativeSyntheticEventData.messageId);
        if (null != messageData) {
          const message = messageData.message;
          if (isCrosspostDefault(message)) {
            if (null != message.messageReference.guild_id) {
              const items1 = [AnalyticsLocationDefault.USERNAME];
              obj3.handleOpenProfile(nativeEvent, items1);
            }
          }
          if (null != userId) {
            const user = UserStore.getUser(userId);
            const messageChannel = messageData.messageChannel;
            const isPrivateResult = messageChannel.isPrivate();
            tmpResult = ThreadHooks;
            let tmp7 = undefined === user;
            const isReadOnlyThread = tmpResult.computeIsReadOnlyThread(messageChannel);
            if (!tmp7) {
              let tmp6 = !isPrivateResult;
              if (!isPrivateResult) {
                tmp6 = !canResult;
              }
              tmp7 = tmp6;
            }
            if (!tmp7) {
              tmp7 = isReadOnlyThread;
            }
            if (!tmp7) {
              const current = obj3.getParams().chatInputRef.current;
              if (current != null) {
                current.insertText(autocompleter_AutocompleteUtils.getMentionTextWithUser(messageChannel, user), null, true);
                const tmpResult1 = autocompleter_AutocompleteUtils;
              }
            }
            canResult = PermissionStore.can(constants9.SEND_MESSAGES, messageChannel);
          }
        }
      }
    };
    obj.handleLongPressUsername = function handleLongPressUsername(arg0) {
      items = [AnalyticsLocationDefault.USERNAME];
      obj.handleOpenProfile(arg0, items);
    };
    obj.handleOpenProfile = function handleOpenProfile(nativeEvent, sourceAnalyticsLocations) {
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      ({ messageId, userId } = nativeSyntheticEventData);
      const messageData = obj.getMessageData(messageId);
      if (null != messageData) {
        const message = messageData.message;
        let user;
        if (null != userId) {
          user = UserStore.getUser(userId);
        }
        let tmp7 = user;
        if (null != messageId) {
          if (tmpResult.isPublicSystemMessage(message)) {
            ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11742, dependencyMap.paths), "PublicGuildAnnouncementProfile");
          } else {
            let user1 = user;
            if (null == user) {
              user1 = UserStore.getUser(message.author.id);
            }
            if (isCrosspostDefault(message)) {
              const guild_id = message.messageReference.guild_id;
              if (null != guild_id) {
                let tmp10Result = ActionSheetActionCreatorsDefault;
                const _HermesInternal2 = HermesInternal;
                obj = { guildId: guild_id };
                tmp10Result.openLazy(asyncRequireImpl(9275, dependencyMap.paths), "GuildProfileActionSheet:" + guild_id, obj);
                const tmp20 = asyncRequireImpl(9275, dependencyMap.paths);
              }
            }
            tmp7 = user1;
            if (message.type === constants8.THREAD_STARTER_MESSAGE) {
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
                          tmp10Result = ActionSheetActionCreatorsDefault;
                          const _HermesInternal = HermesInternal;
                          obj = { guildId: guild_id2 };
                          tmp10Result.openLazy(asyncRequireImpl(9275, dependencyMap.paths), "GuildProfileActionSheet:" + guild_id2, obj);
                          const tmp17 = asyncRequireImpl(9275, dependencyMap.paths);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          tmpResult = PublicGuildsUtils;
        }
        if (null != tmp7) {
          const obj1 = { userId: tmp7.id, channelId: messageData.messageChannel.id, messageId, sourceAnalyticsLocations };
          showUserProfileActionSheetDefault(obj1);
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
        if (tmp4) {
          const current = obj2.getParams().chatInputRef.current;
          if (current != null) {
            current.blur();
          }
          const result = obj2.handleTransitionToThread(guildId, SnowflakeUtilsDefault.castMessageIdAsChannelId(messageId), constants12.EMBED);
        }
        tmp4 = null != messageId && null != guildId;
      }
    };
    obj.handleTapReply = function handleTapReply(nativeEvent) {
      const messageData = obj.getMessageData(nativeEvent.nativeEvent.originId);
      if (null != messageData) {
        ({ messageChannel, message } = messageData);
        let guildId = messageChannel.getGuildId();
        if (guildId == null) {
          guildId = __V;
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
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      ({ channelId, summaryId } = nativeSyntheticEventData);
      if (null != obj.getMessageData(nativeSyntheticEventData.messageId)) {
        const findSummaryResult = SummaryStore.findSummary(channelId, summaryId);
        if (null != findSummaryResult) {
          obj = { summary: findSummaryResult };
          ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11745, dependencyMap.paths), "SummaryActionSheet", obj);
        }
      }
    };
    obj.handleTapSummaryJump = function handleTapSummaryJump(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      ({ channelId, summaryId } = nativeSyntheticEventData);
      const messageData = obj.getMessageData(nativeSyntheticEventData.messageId);
      if (null != messageData) {
        ({ messageChannel, message } = messageData);
        let guildId = messageChannel.getGuildId();
        if (guildId == null) {
          guildId = __V;
        }
        const result = obj2.handleTransitionToMessage(guildId, messageChannel.id, message.id);
        SummaryActionCreatorsDefault.setSelectedSummary(channelId, summaryId);
      }
      obj2 = obj;
    };
    obj.handleLongPressMessage = function handleLongPressMessage(nativeEvent) {
      let analyticsLocation = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = analyticsLocation.getNativeSyntheticEventData(nativeEvent);
      ({ messageId, mediaIndex, mediaType, componentMediaIndex } = nativeSyntheticEventData);
      const messageData = analyticsLocation.getMessageData(messageId);
      if (null != messageData) {
        ({ messageChannel, message } = messageData);
        if (!obj2.isModalOrActionsheetObstructing()) {
          const user = UserStore.getUser(message.author.id);
          if (null != user) {
            if (null == UploadStore.getUploaderFileForMessageId(messageId)) {
              const tmpResult = InteractionComponentTypes;
              const longPressSelectedMedia = tmpResult.getLongPressSelectedMedia(message, mediaIndex, mediaType, tmpResult.asComponentId(nativeSyntheticEventData.componentId), componentMediaIndex);
              analyticsLocation = { analyticsLocation: null, canAddNewReactions: null, channel: null, chatInputRef: null, message: null, selectedMedia: null, user: null };
              analyticsLocation = { section: constants5.CHANNEL, object: constants2.MESSAGE };
              analyticsLocation.analyticsLocation = analyticsLocation;
              analyticsLocation.canAddNewReactions = canAddNewReactionsDefault(messageChannel);
              analyticsLocation.channel = messageChannel;
              analyticsLocation.chatInputRef = obj2.params.chatInputRef;
              analyticsLocation.message = message;
              analyticsLocation.selectedMedia = longPressSelectedMedia;
              analyticsLocation.user = user;
              const result = showLongPressMessageActionSheet.showLongPressMessageActionSheet(analyticsLocation);
              const tmpResult1 = showLongPressMessageActionSheet;
            }
          }
        }
      }
    };
    obj.handleInitiateReply = function handleInitiateReply(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const messageData = obj.getMessageData(obj.getNativeSyntheticEventData(nativeEvent).messageId);
      if (null != messageData) {
        ({ messageChannel, message } = messageData);
        if (nativeEvent.nativeEvent.triggerHaptic) {
          const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
          const tmpResult = HapticUtils;
        }
        obj = { message, channel: messageChannel, chatInputRef: null, actionSource: null, invertible: true };
        obj.chatInputRef = obj.params.chatInputRef;
        let str = nativeEvent.nativeEvent.location;
        if (str == null) {
          str = "message_swipe";
        }
        obj.actionSource = str;
        replyToMessageDefault(obj);
      }
    };
    obj.handleInitiateThread = function handleInitiateThread(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const messageData = obj.getMessageData(obj.getNativeSyntheticEventData(nativeEvent).messageId);
      if (null != messageData) {
        ({ messageChannel, message } = messageData);
        let tmpResult = HapticUtils;
        const result = tmpResult.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
        if (message.hasFlag(constants6.HAS_THREAD)) {
          tmpResult = router_utils;
          tmpResult.transitionToGuild(messageChannel.guild_id, SnowflakeUtilsDefault.castMessageIdAsChannelId(message.id));
          const tmp6Result = SnowflakeUtilsDefault;
        } else {
          LongPressMessageActionSheetUtils.handleCreateThread(messageChannel, message, "Message Shortcut");
          const tmpResult1 = LongPressMessageActionSheetUtils;
        }
      }
    };
    obj.handleInitiateEdit = function handleInitiateEdit(nativeEvent) {
      const chatInputRef = obj.params.chatInputRef;
      obj = MessageDataSnowflakeUtils;
      const messageData = obj.getMessageData(obj.getNativeSyntheticEventData(nativeEvent).messageId);
      if (null != messageData) {
        ({ messageChannel, message } = messageData);
        const currentUser = UserStore.getCurrentUser();
        id = undefined;
        if (currentUser != null) {
          id = currentUser.id;
        }
        if (tmp7(message, id)) {
          const tmpResult = LongPressMessageActionSheetUtils;
          tmpResult.handleEdit(message, messageChannel, chatInputRef, "message_swipe", true);
        }
        tmp7 = canEditMessageDefault;
      }
    };
    obj.handleTapMessage = function handleTapMessage(nativeEvent) {
      let location = MessageDataSnowflakeUtils;
      const messageData = location.getMessageData(location.getNativeSyntheticEventData(nativeEvent).messageId);
      if (null != messageData) {
        ({ messageChannel, message } = messageData);
        const guildId = messageChannel.getGuildId();
        if (null != message) {
          if (null != guildId) {
            const type = message.type;
            if (constants8.GUILD_BOOST !== type) {
              if (constants8.GUILD_BOOST_TIER_1 !== type) {
                if (constants8.GUILD_BOOST_TIER_2 !== type) {
                  if (constants8.GUILD_BOOST_TIER_3 !== type) {
                    if (constants8.AUTO_MODERATION_ACTION === type) {
                      let tmpResult = AutomodMessageUtils;
                      if (tmpResult.isAutomodMessageRecord(message)) {
                        tmpResult = AutomodMessageUtils;
                        const result = tmpResult.extractAutomodMessageFields(message);
                        ({ embedChannel, flaggedMessageId } = result);
                        if (tmp5) {
                          id = undefined;
                          if (embedChannel != null) {
                            id = embedChannel.id;
                          }
                          const result1 = obj2.handleTransitionToMessage(guildId, id, flaggedMessageId);
                        }
                        tmp5 = null != flaggedMessageId && null != embedChannel;
                      }
                    }
                  }
                }
              }
            }
            actions_BoostingActionCreatorsAll.openApplyBoostModal(guildId);
            location = { location: null };
            location = { section: constants5.CHANNEL_TEXT_AREA, object: constants2.BOOST_ANNOUNCEMENT_UPSELL };
            location.location = location;
            AppAnalyticsUtilsDefault.trackWithMetadata(BottomSheet.PREMIUM_GUILD_PROMOTION_OPENED, location);
          }
        }
      }
      obj2 = location;
    };
    obj.handleDoubleTapMessage = function handleDoubleTapMessage(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const messageData = obj.getMessageData(obj.getNativeSyntheticEventData(nativeEvent).messageId);
      if (null != messageData) {
        ({ messageChannel, message } = messageData);
        const result = DoubleTapToReactUtils.handleAddDefaultDoubleTapReaction(message, messageChannel);
        const tmpResult = DoubleTapToReactUtils;
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
          UploadActionCreatorsDefault.cancelUploadItem(found, tmp);
        }
      }
    };
    obj.handleTapSpotifyResource = function handleTapSpotifyResource(message) {
      const author = message.author;
      if (null != author) {
        if (null != author.id) {
          obj = obj(dependencyMap[88]);
          obj.openTrack(PresenceStore.findActivity(author.id, (type) => type.type === constants.LISTENING));
          const findActivityResult = PresenceStore.findActivity(author.id, (type) => type.type === constants.LISTENING);
        }
      }
    };
    obj.handleTapActivityResource = function handleTapActivityResource(message) {
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
                  if (obj11.isIOS()) {
                    let ANDROID = constants3.IOS;
                  } else {
                    let tmp31Result = tmp31(dependencyMap[62]);
                    if (tmp31Result.isAndroid()) {
                      ANDROID = constants3.ANDROID;
                    }
                  }
                  let hasFlagResult = null != applicationActivity.flags;
                  if (hasFlagResult) {
                    tmp31Result = tmp31(dependencyMap[89]);
                    hasFlagResult = tmp31Result.hasFlag(applicationActivity.flags, constants2.EMBEDDED);
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
                  application = application.getApplication(id);
                  if (application == null) {
                    application = null;
                  }
                  if (null != application) {
                    obj = { presenceActivity: applicationActivity, currentUserPresenceActivity: getCurrentUserPresenceActivityDefault(LocalActivityStore, closure_1_32, id), currentUserId: id.getId(), message, application, isEmbeddedApplication: hasFlagResult, isFrameApplication: false, isGameLaunchable: flag };
                    const canJoin = tmp31(dependencyMap[90]).getCanJoin(obj);
                    const remoteJoinPlatform = canJoin.remoteJoinPlatform;
                    let tmp11;
                    if (null != remoteJoinPlatform) {
                      const party = applicationActivity.party;
                      id = undefined;
                      if (party != null) {
                        id = party.id;
                      }
                      tmp11 = id;
                    }
                    if (!canJoin.canJoin) {
                      if (tmp31Result2.getSupportsRemoteJoin(applicationActivity)) {
                        if (tmp31Result3.getShouldShowAppAuthPrompt(application)) {
                          items = [AnalyticsLocationDefault.INVITE_EMBED];
                          const result = tmp31(dependencyMap[94]).startAuthorizationNoHook(application, items);
                          const tmp31Result4 = tmp31(dependencyMap[94]);
                        }
                        tmp31Result3 = tmp31(dependencyMap[93]);
                      }
                      tmp31Result2 = tmp31(dependencyMap[92]);
                    }
                    let tmp33Result = GamesActionCreatorsDefault;
                    obj = { userId: author.id, sessionId: session_id, application, channelId: channel_id, messageId: message.id, applicationActivity, remotePartyId: tmp11, embedded: hasFlagResult, source: constants5.MESSAGE_EMBED, analyticsLocations: null };
                    const items1 = [AnalyticsLocationDefault.INVITE_EMBED];
                    obj.analyticsLocations = items1;
                    const joined = tmp33Result.join(obj);
                    const obj1 = { type: constants4.JOIN, source: constants5.MESSAGE_EMBED, userId: message.author.id, guildId: null, channelId: null, applicationId: null, partyId: null, messageId: null, analyticsLocations: null, remoteJoinPlatform: null };
                    let guild_id;
                    tmp33Result = trackApplicationOpenDefault;
                    if (channel != null) {
                      guild_id = channel.guild_id;
                    }
                    obj1.guildId = guild_id;
                    obj1.channelId = channel_id;
                    obj1.applicationId = id;
                    const party2 = applicationActivity.party;
                    let id1;
                    if (party2 != null) {
                      id1 = party2.id;
                    }
                    obj1.partyId = id1;
                    obj1.messageId = message.id;
                    const items2 = [AnalyticsLocationDefault.INVITE_EMBED];
                    obj1.analyticsLocations = items2;
                    obj1.remoteJoinPlatform = remoteJoinPlatform;
                    tmp33Result(obj1);
                    const tmp31Result1 = tmp31(dependencyMap[90]);
                  }
                  obj11 = obj(dependencyMap[62]);
                }
              } else if (null != deeplink_uri) {
                LinkingDefault.openURL(deeplink_uri, constants10.SAFARI);
                const obj2 = { type: constants4.PLAY, source: constants5.MESSAGE_EMBED, userId: message.author.id, guildId: null, channelId: null, applicationId: null, messageId: null, analyticsLocations: null };
                let guild_id1;
                if (channel != null) {
                  guild_id1 = channel.guild_id;
                }
                obj2.guildId = guild_id1;
                obj2.channelId = channel_id;
                obj2.applicationId = application.id;
                obj2.messageId = message.id;
                const items3 = [AnalyticsLocationDefault.INVITE_EMBED];
                obj2.analyticsLocations = items3;
                trackApplicationOpenDefault(obj2);
              }
            }
          }
        }
      }
    };
    obj.handleTapStreamRequest = function handleTapStreamRequest(message) {
      obj = obj(dependencyMap[98]);
      if (_slicedToArray(obj.canFulfillStreamRequest(message, true), 1)[0]) {
        channel = ChannelStore.getChannel(message.channel_id);
        if (null != channel) {
          let tmpResult = tmp(dependencyMap[99]);
          const oSRequirement = tmpResult.getOSRequirement();
          tmpResult = tmp(dependencyMap[99]);
          obj = { channel, hasPermission: true, isActive: false, osRequirement: oSRequirement };
          tmpResult.getStreamPressHandler(obj)();
        }
      }
    };
    obj.handleTapActivityInviteToJoin = function handleTapActivityInviteToJoin(message) {
      ({ author, application } = message);
      if (null != author) {
        if (null != application) {
          if (null != author.id) {
            applicationActivity = applicationActivity.getApplicationActivity(application.id, true);
            if (null != applicationActivity) {
              obj = { channelId: message.channel_id, type: constants.JOIN, activity: applicationActivity, location: constants5.MESSAGE_EMBED };
              obj.sendActivityInvite(obj);
            }
          }
        }
      }
    };
    obj.handleTapGuildEventInvite = function handleTapGuildEventInvite(arg0) {
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
              obj = { baseCode: invite.code, guildScheduledEventId: guildEventId };
              inviteKeyFromExtraData = obj(dependencyMap[101]).generateInviteKeyFromExtraData(obj);
              const obj4 = obj(dependencyMap[101]);
            }
            let tmp19;
            if (null != inviteKeyFromExtraData) {
              tmp19 = getInviteURLDefault(inviteKeyFromExtraData);
            }
            obj(dependencyMap[102]).openShareEvent(guildScheduledEvent, tmp19);
            return { action: "share" };
          } else {
            if (primary) {
              if (closure_1_13(guildScheduledEvent)) {
                const result = obj(dependencyMap[102]).transitionToEventDetailsFromInvite(guildScheduledEvent, recurrenceId);
                obj = { action: "transition" };
                const obj3 = obj(dependencyMap[102]);
              }
              return obj;
            }
            obj = obj(dependencyMap[102]);
            if (primary) {
              const result1 = obj.handleGuildScheduledEventRsvp(guildScheduledEvent.id, recurrenceId, guildScheduledEvent.guild_id);
              obj = { action: "rsvp" };
            } else {
              const result2 = obj.transitionToEventDetailsFromInvite(guildScheduledEvent, recurrenceId);
              obj = { action: "transition" };
            }
          }
        }
      }
      return { action: "noop" };
    };
    obj._questsEmbedOnPress = function _questsEmbedOnPress(code) {
      obj = obj(dependencyMap[104]);
      if (!obj.isMetaQuest()) {
        let tmpResult = tmp(dependencyMap[105]);
        const result = tmpResult.findQuestOrReplacement(code, QuestStore.quests, QuestStore.excludedQuests);
        if (null != result) {
          tmpResult = tmp(dependencyMap[106]);
          obj = { scrollToQuestId: result.id, fromContent: tmp(dependencyMap[107]).QuestContent.QUEST_EMBED_MOBILE };
          tmpResult.openQuestHome(obj);
        } else {
          obj = { fromContent: tmp(dependencyMap[107]).QuestContent.QUEST_EMBED_MOBILE };
          tmp(dependencyMap[106]).openQuestHome(obj);
          const tmpResult1 = tmp(dependencyMap[106]);
        }
      }
    };
    obj._questsEmbedOnAccept = function _questsEmbedOnAccept(code) {
      obj = obj(dependencyMap[104]);
      if (obj.isMetaQuest()) {
        let tmpResult = tmp(dependencyMap[106]);
        tmpResult.openDiscordQuestsFAQ();
      } else {
        tmpResult = tmp(dependencyMap[105]);
        const result = tmpResult.findQuestOrReplacement(code, QuestStore.quests, QuestStore.excludedQuests);
        if (null != result) {
          if (null == QuestStore.questEnrollmentBlockedUntil) {
            if (!QuestStore.isQuestAccessSuspended) {
              const userStatus = result.userStatus;
              let enrolledAt;
              if (userStatus != null) {
                enrolledAt = userStatus.enrolledAt;
              }
              let tmp9 = null != enrolledAt;
              const _Date = Date;
              const date = new Date();
              if (!tmp9) {
                tmp9 = result.config.expiresAt < date.toISOString();
              }
              if (!tmp9) {
                obj = { questContent: tmp(dependencyMap[107]).QuestContent.QUEST_EMBED_MOBILE, questContentCTA: tmp(dependencyMap[109]).QuestContentCTA.ACCEPT_QUEST, sourceQuestContent: tmp(dependencyMap[107]).QuestContent.QUEST_EMBED_MOBILE };
                tmp(dependencyMap[108]).enrollInQuest(result.id, obj);
                const tmpResult1 = tmp(dependencyMap[108]);
              }
              obj = { scrollToQuestId: result.id, fromContent: tmp(dependencyMap[107]).QuestContent.QUEST_EMBED_MOBILE };
              tmp(dependencyMap[106]).openQuestHome(obj);
              const tmpResult2 = tmp(dependencyMap[106]);
            }
          }
          const obj1 = { scrollToQuestId: result.id, fromContent: tmp(dependencyMap[107]).QuestContent.QUEST_EMBED_MOBILE };
          tmp(dependencyMap[106]).openQuestHome(obj1);
          const tmpResult3 = tmp(dependencyMap[106]);
        } else {
          const obj2 = { fromContent: tmp(dependencyMap[107]).QuestContent.QUEST_EMBED_MOBILE };
          tmp(dependencyMap[106]).openQuestHome(obj2);
          const tmpResult4 = tmp(dependencyMap[106]);
        }
      }
    };
    obj.handleTapInviteEmbedAccept = function handleTapInviteEmbedAccept(nativeEvent) {
      let trackInviteEmbedActioned = require;
      let result8 = dependencyMap;
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      let obj1 = obj;
      ({ index, primary, secondary } = nativeSyntheticEventData);
      const messageData = obj.getMessageData(nativeSyntheticEventData.messageId);
      if (null != messageData) {
        id = messageData.message;
        const current = obj1.getParams().chatInputRef.current;
        if (current != null) {
          current.dismissKeyboard();
        }
        if (id.type === constants8.THREAD_STARTER_MESSAGE) {
          if (null != id.messageReference) {
            const message = ReferencedMessageStore.getMessageByReference(id.messageReference).message;
            if (null != message) {
              let codedLinks = message.codedLinks;
            }
          }
          let tmp7;
          if (codedLinks != null) {
            tmp7 = codedLinks[index];
          }
          if (null != tmp7) {
            if (tmp7.type === CodedLink.CodedLinkType.INVITE) {
              invite = InviteStore.getInvite(tmp7.code);
              if (null != invite) {
                id = AuthenticationStore.getId();
                let id1;
                if (invite != null) {
                  const guild = invite.guild;
                  if (guild != null) {
                    id1 = guild.id;
                  }
                }
                const isMemberResult = GuildMemberStore.isMember(id1, id);
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
                        let roles;
                        if (member != null) {
                          roles = member.roles;
                        }
                        if (roles == null) {
                          roles = [];
                        }
                        roles = invite.roles;
                        flag = roles.some((id) => !set.has(id.id));
                        const set = new Set(roles);
                      }
                    }
                  }
                }
                const result = InviteCodeUtils;
                const inviteInstanceId = result.getInviteInstanceId(tmp7.code, id.id);
                const result1 = InviteTypeUtils;
                if (result1.isGuildScheduledEventInviteEmbed(invite)) {
                  obj = { invite, isMember: isMemberResult, primary, secondary };
                  let str5 = obj1.handleTapGuildEventInvite(obj).action;
                } else {
                  if (isMemberResult) {
                    if (!flag) {
                      const result2 = obj1.handleTransitionToInviteChannel(invite);
                      str5 = "transition";
                    }
                  }
                  const result3 = obj1.handleAcceptInstantInvite(invite, inviteInstanceId);
                  str5 = "accept";
                }
                const guild3 = invite.guild;
                let id3;
                if (guild3 != null) {
                  id3 = guild3.id;
                }
                if (null != id3) {
                  const result4 = InviteTypeUtils;
                  const guildInviteExtendedType = result4.getGuildInviteExtendedType(invite);
                  if (guildInviteExtendedType === InviteTypeUtils.GuildInviteExtendedType.VOICE_CHANNEL) {
                    const result5 = VoiceChannelListInviteExperiment;
                    obj = { guildId: id3, location: "mobile_invite_embed" };
                    if (result5.getVoiceChannelListInviteExperiment(obj).enabled) {
                      const result6 = VoiceChannelListInviteEmbed;
                      const result7 = InstantInviteActionCreators;
                      trackInviteEmbedActioned = result7.trackInviteEmbedActioned;
                      obj1 = { invite, action: str5, inviter_id: null, invite_message_id: null, invite_instance_id: null };
                      str5 = id.author.id;
                      obj1.inviter_id = str5;
                      id = id.id;
                      obj1.invite_message_id = id;
                      obj1.invite_instance_id = inviteInstanceId;
                      result8 = trackInviteEmbedActioned(obj1, items1);
                    }
                    items = [AnalyticsLocationDefault.INVITE_EMBED, AnalyticsLocationDefault.VOICE_CHANNEL_LIST_INVITE_EMBED];
                    items1 = items;
                  }
                }
                items1 = [AnalyticsLocationDefault.INVITE_EMBED];
              }
            } else if (tmp7.type === CodedLink.CodedLinkType.CHANNEL_LINK) {
              const obj2 = { guildId: null, channelId: null, message: null };
              [obj6.guildId, obj6.channelId] = _slicedToArray(tmp7.code.split("/"), 2);
              obj2.message = id;
              const result9 = obj1.handleTapVoiceChannelPreview(obj2);
              const tmp14 = _slicedToArray(tmp7.code.split("/"), 2);
            } else {
              if (tmp7.type !== CodedLink.CodedLinkType.BUILD_OVERRIDE) {
                if (tmp7.type !== CodedLink.CodedLinkType.MANUAL_BUILD_OVERRIDE) {
                  if (tmp7.type === CodedLink.CodedLinkType.QUESTS_EMBED) {
                    obj1._questsEmbedOnAccept(tmp7.code);
                  } else if (tmp7.type === CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT) {
                    const result10 = SocialLayerStorefrontNativeActionCreators;
                    const obj3 = { skuId: _slicedToArray(tmp7.code.split("-"), 1)[0], analyticsLocations: null };
                    const items2 = [AnalyticsLocationDefault.GIFT_CODE_EMBED];
                    obj3.analyticsLocations = items2;
                    const result11 = result10.openSocialLayerStorefrontProductDetailsModal(obj3);
                  }
                }
              }
              const result12 = build_overrides_BuildOverrideUtils;
              result12.toggleOverride(tmp7.code);
            }
          }
        }
        if (id.messageSnapshots.length > 0) {
          codedLinks = id.messageSnapshots[0].message.codedLinks;
        } else {
          codedLinks = id.codedLinks;
        }
      }
    };
    obj.handleTapInviteEmbed = function handleTapInviteEmbed(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      ({ primary, secondary } = nativeSyntheticEventData);
      let obj1 = obj;
      const messageData = obj.getMessageData(nativeSyntheticEventData.messageId);
      if (null != messageData) {
        const message2 = messageData.message;
        const current = obj1.getParams().chatInputRef.current;
        if (current != null) {
          current.dismissKeyboard();
        }
        if (message2.type === constants8.THREAD_STARTER_MESSAGE) {
          if (null != message2.messageReference) {
            const message = ReferencedMessageStore.getMessageByReference(message2.messageReference).message;
            if (null != message) {
              let codedLinks = message.codedLinks;
            }
          }
          let tmp8;
          if (codedLinks != null) {
            tmp8 = codedLinks[nativeSyntheticEventData.index];
          }
          if (null != tmp8) {
            id = AuthenticationStore.getId();
            if (tmp8.type !== CodedLink.CodedLinkType.INVITE) {
              if (tmp8.type !== CodedLink.CodedLinkType.EMBEDDED_ACTIVITY_INVITE) {
                if (tmp8.type === CodedLink.CodedLinkType.TEMPLATE) {
                  guild_templates_GuildTemplateActionCreatorsDefault.showModal(tmp8.code);
                } else {
                  if (tmp8.type !== CodedLink.CodedLinkType.BUILD_OVERRIDE) {
                    if (tmp8.type !== CodedLink.CodedLinkType.MANUAL_BUILD_OVERRIDE) {
                      if (tmp8.type === CodedLink.CodedLinkType.EXPERIMENT) {
                        let tmpResult = ExperimentEmbedUtils;
                        const experimentFromEmbedURL = tmpResult.getExperimentFromEmbedURL(tmp8.code);
                        if (null != experimentFromEmbedURL) {
                          tmpResult = ExperimentEmbedUtils;
                          const experimentTreatmentFromEmbedURL = tmpResult.getExperimentTreatmentFromEmbedURL(tmp8.code);
                          const result = ExperimentEmbedPlatformUtils.handleCodedLinkExperimentEmbedTap(experimentFromEmbedURL, experimentTreatmentFromEmbedURL);
                          const tmpResult1 = ExperimentEmbedPlatformUtils;
                        }
                      } else if (tmp8.type === CodedLink.CodedLinkType.EVENT) {
                        const tmp21 = _slicedToArray(tmp8.code.split("-"), 3);
                        obj = { invite: null, isMember: GuildMemberStore.isMember(tmp21[0], id), primary, secondary, guildEventId: tmp21[1], recurrenceId: tmp21[2] };
                        const result1 = obj1.handleTapGuildEventInvite(obj);
                      } else if (tmp8.type === CodedLink.CodedLinkType.CHANNEL_LINK) {
                        obj = { guildId: null, channelId: null, message: null };
                        [obj7.guildId, obj7.channelId] = _slicedToArray(tmp8.code.split("/"), 2);
                        obj.message = message2;
                        const result2 = obj1.handleTapVoiceChannelPreview(obj);
                        const tmp18 = _slicedToArray(tmp8.code.split("/"), 2);
                      } else if (tmp8.type === CodedLink.CodedLinkType.APP_DIRECTORY_PROFILE) {
                        application = ApplicationDirectoryApplicationsStore.getApplication(tmp8.code);
                        if (null != application) {
                          obj1 = { applicationId: null, customInstallUrl: null, installParams: null, integrationTypesConfig: null, source: "app_directory_profile_embed" };
                          ({ id: obj6.applicationId, custom_install_url: obj6.customInstallUrl, install_params: obj6.installParams, integration_types_config: obj6.integrationTypesConfig } = application);
                          ApplicationUtils.installApplication(obj1);
                          const tmpResult2 = ApplicationUtils;
                        }
                      } else if (tmp8.type === CodedLink.CodedLinkType.QUESTS_EMBED) {
                        obj1._questsEmbedOnPress(tmp8.code);
                      } else {
                        if (tmp8.type !== CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT) {
                          if (tmp8.type !== CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP) {
                            if (tmp8.type !== CodedLink.CodedLinkType.APP_OAUTH2_LINK) {
                              const _Error = Error;
                              const _HermesInternal = HermesInternal;
                              throw Error("Unknown coded link type: " + tmp8.type);
                            } else {
                              const application1 = ApplicationStore.getApplication(tmp8.code);
                              if (null != application1) {
                                const obj2 = { application_id: application1.id };
                                AppAnalyticsUtilsDefault.trackWithMetadata(BottomSheet.APP_OAUTH2_LINK_EMBED_CTA_CLICKED, obj2);
                                ({ id: obj30.applicationId, customInstallUrl: obj30.customInstallUrl, installParams: obj30.installParams, integrationTypesConfig: obj30.integrationTypesConfig } = application1);
                                ApplicationUtils.installApplication({ applicationId: null, customInstallUrl: null, installParams: null, integrationTypesConfig: null, source: "app_oauth2_link_embed" });
                                const obj3 = { applicationId: null, customInstallUrl: null, installParams: null, integrationTypesConfig: null, source: "app_oauth2_link_embed" };
                                const tmpResult3 = ApplicationUtils;
                              }
                            }
                          }
                        }
                        const obj4 = { skuId: _slicedToArray(tmp8.code.split("-"), 1)[0], analyticsLocations: null };
                        items = [AnalyticsLocationDefault.GIFT_CODE_EMBED];
                        obj4.analyticsLocations = items;
                        const result3 = SocialLayerStorefrontNativeActionCreators.openSocialLayerStorefrontProductDetailsModal(obj4);
                        const tmpResult4 = SocialLayerStorefrontNativeActionCreators;
                      }
                    }
                  }
                  build_overrides_BuildOverrideUtils.toggleOverride(tmp8.code);
                  const tmpResult5 = build_overrides_BuildOverrideUtils;
                }
              }
            }
            invite = InviteStore.getInvite(tmp8.code);
            let id1;
            if (invite != null) {
              const guild = invite.guild;
              if (guild != null) {
                id1 = guild.id;
              }
            }
            const isMemberResult = GuildMemberStore.isMember(id1, id);
            if (null != invite) {
              const guild4 = invite.guild;
              let id2;
              if (guild4 != null) {
                id2 = guild4.id;
              }
              let enabled = null != id2;
              if (enabled) {
                const guildInviteExtendedType = InviteTypeUtils.getGuildInviteExtendedType(invite);
                enabled = guildInviteExtendedType === InviteTypeUtils.GuildInviteExtendedType.VOICE_CHANNEL;
                const tmpResult6 = InviteTypeUtils;
              }
              if (enabled) {
                const obj5 = { guildId: id2, location: "mobile_invite_embed" };
                enabled = VoiceChannelListInviteExperiment.getVoiceChannelListInviteExperiment(obj5).enabled;
                const tmpResult7 = VoiceChannelListInviteExperiment;
              }
              if (enabled) {
                enabled = VoiceChannelListInviteEmbed.canShowVoiceChannelListInviteEmbed(invite);
                const tmpResult8 = VoiceChannelListInviteEmbed;
              }
              if (tmpResult9.isGuildScheduledEventInviteEmbed(invite)) {
                const obj6 = { invite, isMember: isMemberResult, primary, secondary };
                let str8 = obj1.handleTapGuildEventInvite(obj6).action;
              } else {
                if (enabled) {
                  channel = invite.channel;
                  let id3;
                  if (channel != null) {
                    id3 = channel.id;
                  }
                  if (null != id3) {
                    channel = ChannelStore.getChannel(invite.channel.id);
                    str8 = "noop";
                    if (null != channel) {
                      const guildId = channel.getGuildId();
                      let tmp48 = null != guildId;
                      if (tmp48) {
                        tmp48 = guildId !== SelectedGuildStore.getGuildId();
                      }
                      if (tmp48) {
                        transitionToGuild.transitionToGuild(guildId);
                        const tmpResult10 = transitionToGuild;
                      }
                      const result4 = PrivateChannelCallUtils.navigateToVoiceChannel(channel, "Mobile Invite Embed");
                      str8 = "voice channel preview";
                      const tmpResult11 = PrivateChannelCallUtils;
                    }
                  }
                }
                const guild2 = invite.guild;
                let id4;
                if (guild2 != null) {
                  id4 = guild2.id;
                }
                if (null != id4) {
                  const _HermesInternal2 = HermesInternal;
                  const obj20 = ActionSheetActionCreatorsDefault;
                  const obj7 = { guildId: invite.guild.id, context: null, inviteKey: null };
                  const combined = "GuildProfileActionSheet:" + invite.guild.id;
                  obj7.context = useGuildProfileCTA.GuildProfileCTAContext.INVITE;
                  obj7.inviteKey = tmp8.code;
                  obj20.openLazy(asyncRequireImpl(9275, dependencyMap.paths), combined, obj7);
                  str8 = "show profile";
                  const tmp42 = asyncRequireImpl(9275, dependencyMap.paths);
                } else if (isMemberResult) {
                  const result5 = obj1.handleTransitionToInviteChannel(invite);
                  str8 = "transition";
                } else {
                  const result6 = obj1.handleAcceptInstantInvite(invite, InviteCodeUtils.getInviteInstanceId(tmp8.code, message2.id));
                  str8 = "accept";
                  const tmpResult12 = InviteCodeUtils;
                }
              }
              const INVITE_EMBED = AnalyticsLocationDefault.INVITE_EMBED;
              if (enabled) {
                const items1 = [INVITE_EMBED, AnalyticsLocationDefault.VOICE_CHANNEL_LIST_INVITE_EMBED];
                let items2 = items1;
              } else {
                items2 = [INVITE_EMBED];
              }
              tmpResult9 = InviteTypeUtils;
              let id5;
              if (invite != null) {
                const guild3 = invite.guild;
                if (guild3 != null) {
                  id5 = guild3.id;
                }
              }
              const result7 = InstantInviteActionCreators.trackInviteServerClicked(id5, str8, items2);
              const tmpResult13 = InstantInviteActionCreators;
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
      ({ guildId, channelId } = message);
      guildId = SelectedGuildStore.getGuildId();
      channelId = SelectedChannelStore.getChannelId(guildId);
      channel = ChannelStore.getChannel(channelId);
      if (null != channel) {
        obj = { author_id: message.message.author.id, link_guild_id: guildId, link_channel_id: channelId, link_channel_type: channel.type, guild_id: guildId, channel_id: channelId };
        AnalyticsUtilsDefault.track(BottomSheet.CHANNEL_LINK_PREVIEW_JOINED, obj);
        const current = obj.getParams().chatInputRef.current;
        if (current != null) {
          current.dismissKeyboard();
        }
        if (!obj2.shouldShowAgeGateForVoiceChannel(channelId)) {
          let tmp4Result = SpoilerChannelUtils;
          if (!tmp4Result.shouldShowSpoilerGateForChannelId(channelId)) {
            if (channel.isGuildStageVoice()) {
              tmp4Result = StageChannelModalActionCreators;
              tmp4Result.connectAndOpen(channel);
            } else {
              const voiceChannel = SelectedChannelActionCreatorsDefault.selectVoiceChannel(channelId);
              const tmp10Result = SelectedChannelActionCreatorsDefault;
              PrivateChannelCallUtils.openChannelCallModal(channel);
              const tmp4Result1 = PrivateChannelCallUtils;
            }
          }
        }
        obj2 = AgeGateUtils;
        router_utils.transitionTo(closure_2_53.CHANNEL(guildId, channelId));
        const tmp4Result2 = router_utils;
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
      let analyticsLocation = age_gate_AgeGateUtils;
      if (!analyticsLocation.handleNSFWGuildInvite(invite)) {
        if (null != invite.code) {
          if (invite.type === InviteTypes.GUILD) {
            if (tmpResult.isAtGuildCapAndNonPremium()) {
              analyticsLocation = { initialUpsellKey: constants10.GUILD_CAP, analyticsLocation: null, analyticsLocations: null, analyticsProperties: null };
              analyticsLocation = { page: constants4.INVITE_EMBED };
              analyticsLocation.analyticsLocation = analyticsLocation;
              items = [AnalyticsLocationDefault.INVITE_EMBED];
              analyticsLocation.analyticsLocations = items;
              const obj1 = { type: constants11.GUILD_CAP_MODAL_UPSELL };
              analyticsLocation.analyticsProperties = obj1;
              const result = PremiumUpsellUtilsDefault.handleShowUpsellAlert(analyticsLocation);
            }
            tmpResult = GuildCapUpsellHooks;
          }
          const obj2 = { inviteKey: invite.code, context: null, callback: null };
          if (null != inviteInstanceId) {
            const obj3 = { invite_instance_id: inviteInstanceId };
            let obj4 = obj3;
          } else {
            obj4 = {};
          }
          const obj5 = { location: "Invite Button Embed" };
          const merged = Object.assign(obj4);
          obj2.context = obj5;
          obj2.callback = analyticsLocation.handleTransitionToInviteChannel;
          obj2.acceptInvite(obj2);
        }
      }
    };
    obj.handleTransitionToInviteChannel = function handleTransitionToInviteChannel(invite) {
      InstantInviteActionCreatorsDefault.transitionToInvite(invite, { forceTransition: true });
    };
    obj.handleTapGiftCodeEmbed = function handleTapGiftCodeEmbed() {

    };
    obj.handleTapGiftCodeAccept = function handleTapGiftCodeAccept(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      const giftCode = nativeSyntheticEventData.giftCode;
      const currentUser = UserStore.getCurrentUser();
      if (null != currentUser) {
        if (currentUser.verified) {
          value = GiftCodeStore.get(giftCode);
          if (null != value) {
            if (null != value.giftStyle) {
              const messageData = obj.getMessageData(nativeSyntheticEventData.messageId);
            }
            if (obj.params.paymentsBlocked) {
              openBlockedPaymentsCountryActionSheetDefault();
            } else {
              let tmp12Result = AnalyticsUtilsDefault;
              tmp12Result.track(BottomSheet.OPEN_MODAL, { type: "gift_accept", location: null });
              tmp12Result = ModalActionCreatorsDefault;
              obj = { code: giftCode, customMessage: null, soundId: null, emojiName: null };
              let content;
              if (null != messageData) {
                content = messageData.message.content;
              }
              obj.customMessage = content;
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
              obj.soundId = id;
              let name;
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
              obj.emojiName = name;
              tmp12Result.pushLazy(asyncRequireImpl(11532, dependencyMap.paths), obj);
              const tmp15 = asyncRequireImpl(11532, dependencyMap.paths);
            }
          }
        } else {
          EmailVerificationModalActionCreatorsDefault.open();
        }
      }
    };
    obj.handleTapReferralRedeem = function handleTapReferralRedeem() {
      analyticsLocation = analyticsLocation(dependencyMap[134]);
      if (analyticsLocation.canOpenPremiumPlanDirectlyForReferralTrial()) {
        analyticsLocation = { analyticsLocation: null, analyticsLocations: null, premiumType: null };
        analyticsLocation = { page: constants6.REFERRAL_MESSAGE_EMBED };
        analyticsLocation.analyticsLocation = analyticsLocation;
        items = [AnalyticsLocationDefault.REFERRAL_MESSAGE_EMBED];
        analyticsLocation.analyticsLocations = items;
        analyticsLocation.premiumType = TIER_2.TIER_2;
        openPremiumPlanSelectionActionSheetDefault(analyticsLocation);
      } else {
        const obj1 = { screen: constants9.PREMIUM };
        tmp(dependencyMap[136]).openUserSettings(obj1);
        const tmpResult = tmp(dependencyMap[136]);
      }
      tmp = analyticsLocation;
    };
    obj.getGiftIntentCtaContext = function getGiftIntentCtaContext(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      ({ messageId, recipientUserId, giftIntentType } = nativeSyntheticEventData);
      const parseGiftIntentTypeResult = PremiumGiftingIntentUtils.parseGiftIntentType(giftIntentType);
      if (null == parseGiftIntentTypeResult) {
        return null;
      } else {
        const params = obj.params;
        const message = params.getMessage(messageId);
        let channel_id;
        if (message != null) {
          channel_id = message.channel_id;
        }
        if (channel_id == null) {
          channel_id = obj.params.selectedChannelId;
        }
        obj = { channel: ChannelStore.getChannel(channel_id), giftIntentType: parseGiftIntentTypeResult, messageId, recipientUserId };
        return obj;
      }
    };
    obj.handleTapGiftIntentPrimaryCta = function handleTapGiftIntentPrimaryCta(nativeEvent) {
      const giftIntentCtaContext = navigationParams.getGiftIntentCtaContext(nativeEvent);
      if (null != giftIntentCtaContext) {
        ({ channel, recipientUserId } = giftIntentCtaContext);
        const userAffinity = UserAffinitiesV2Store.getUserAffinity(recipientUserId);
        navigationParams = { gift_intent_type: giftIntentCtaContext.giftIntentType, affinity: null, location_stack: null };
        let dmProbability;
        if (userAffinity != null) {
          dmProbability = userAffinity.dmProbability;
        }
        navigationParams.affinity = dmProbability;
        navigationParams = items;
        navigationParams.location_stack = items;
        AnalyticsUtilsDefault.track(BottomSheet.GIFT_INTENT_ACTION_BUTTON_CLICKED, navigationParams);
        let obj1 = utils_openGiftModal;
        navigationParams = { recipientUserId, analyticsLocation: null, analyticsLocations: null, navigationParams: null };
        let guild_id;
        if (channel != null) {
          guild_id = channel.guild_id;
        }
        if (null != guild_id) {
          let DM_CHANNEL = constants4.GUILD_CHANNEL;
        } else {
          DM_CHANNEL = constants4.DM_CHANNEL;
        }
        obj1 = { page: DM_CHANNEL };
        navigationParams.analyticsLocation = obj1;
        navigationParams.analyticsLocations = navigationParams;
        navigationParams = { presentation: "card" };
        navigationParams.navigationParams = navigationParams;
        navigationParams = obj1.openGiftModal(navigationParams);
      }
    };
    obj.handleTapGiftIntentSecondaryCta = function handleTapGiftIntentSecondaryCta(nativeEvent) {
      const giftIntentCtaContext = obj.getGiftIntentCtaContext(nativeEvent);
      if (tmp2) {
        obj = { gift_intent_type: giftIntentCtaContext.giftIntentType, cta_type: "send_message", location_stack: items };
        obj.track(BottomSheet.GIFT_INTENT_CARD_SECONDARY_CTA_CLICKED, obj);
        obj = { channelId: giftIntentCtaContext.channel.id, giftIntentType: giftIntentCtaContext.giftIntentType };
        ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11910, dependencyMap.paths), obj);
      }
      tmp2 = null != giftIntentCtaContext && null != giftIntentCtaContext.channel;
    };
    obj.handleGiftIntentCardViewed = function handleGiftIntentCardViewed(nativeEvent) {
      properties = properties(dependencyMap[39]);
      const parseGiftIntentTypeResult = properties(dependencyMap[137]).parseGiftIntentType(properties.getNativeSyntheticEventData(nativeEvent).giftIntentType);
      if (null != parseGiftIntentTypeResult) {
        properties = { name: tmp(dependencyMap[141]).ImpressionNames.GIFT_INTENT_CARD, type: tmp(dependencyMap[141]).ImpressionTypes.VIEW, properties: null };
        properties = { gift_intent_type: parseGiftIntentTypeResult, num_friend_anniversaries: friendAnniversaries.getFriendAnniversaries().length };
        properties.properties = properties;
        tmp(dependencyMap[140]).trackImpression(properties);
        const tmpResult = tmp(dependencyMap[140]);
      }
      const obj2 = properties(dependencyMap[137]);
    };
    obj.handleTapEmoji = function handleTapEmoji(emojiNode) {
      if (!obj.isModalOrActionsheetObstructing()) {
        contentHandlers2.contentHandlers.onTapEmoji(emojiNode);
        const contentHandlers = contentHandlers2.contentHandlers;
      }
    };
    obj.handleTapTimestamp = function handleTapTimestamp(nativeEvent) {
      obj(dependencyMap[42]).contentHandlers.onTapTimestamp(nativeEvent);
    };
    obj.handleTapInlineCode = function handleTapInlineCode(nativeEvent) {
      obj(dependencyMap[42]).contentHandlers.onTapInlineCode(nativeEvent);
    };
    obj.handleTapRoleIcon = function handleTapRoleIcon(nativeEvent) {
      ({ roleName, roleIconSource, roleIconUnicodeEmoji } = nativeEvent.nativeEvent);
      let name;
      let winningStreak;
      if (roleName.startsWith(name(dependencyMap[142]).LEADERBOARD_WINNER_ROLE_NAME_PREFIX)) {
        let tmpResult = tmp(dependencyMap[142]);
        const decodeWinnerDataResult = tmpResult.decodeWinnerData(roleName.slice(tmp(dependencyMap[142]).LEADERBOARD_WINNER_ROLE_NAME_PREFIX.length));
        tmpResult = tmp(dependencyMap[143]);
        name = tmpResult.getStatName(decodeWinnerDataResult.winningStat).name;
        winningStreak = decodeWinnerDataResult.winningStreak;
        obj = {
          key: "LEADERBOARD_WINNER_BADGE_TOOLTIP",
          content() {
              if (null != winningStreak) {
                if (winningStreak > 1) {
                  const intl2 = tmp2(dependencyMap[46]).intl;
                  obj = { streakCount: winningStreak, statName: name };
                  let formatResult = intl2.format(tmp2(dependencyMap[46]).t.owAd83, obj);
                }
                obj = { variant: "text-md/normal", color: "text-default", children: formatResult };
                return <tmp4 variant="text-md/normal" color="text-default">{formatResult}</tmp4>;
              }
              const intl = tmp2(dependencyMap[46]).intl;
              obj = { statName: name };
              formatResult = intl.format(tmp2(dependencyMap[46]).t.So4gmj, obj);
            },
          IconComponent: tmp(dependencyMap[146]).TrophyIcon,
          iconColor: "text-feedback-warning"
        };
        winningStreak(dependencyMap[144]).open(obj);
        const obj6 = winningStreak(dependencyMap[144]);
      } else {
        winningStreak(dependencyMap[144]);
        obj = { key: null, content: null, icon: null };
        const _HermesInternal = HermesInternal;
        obj.key = "ROLE_NAME-" + roleName;
        let combined = roleName;
        if (null != roleIconUnicodeEmoji) {
          const _HermesInternal2 = HermesInternal;
          combined = "" + roleIconUnicodeEmoji + " " + roleName;
        }
        obj.content = combined;
        let tmp7;
        if (null != roleIconSource) {
          const obj1 = { uri: roleIconSource };
          tmp7 = obj1;
        }
        obj.icon = tmp7;
        obj.open(obj);
      }
    };
    obj.handleTapVoiceChannelBadge = function handleTapVoiceChannelBadge(nativeEvent) {
      obj = obj(dependencyMap[39]);
      channel = ChannelStore.getChannel(obj.getNativeSyntheticEventData(nativeEvent).channelId);
      if (null != channel) {
        const result = tmp(dependencyMap[44]).navigateToVoiceChannel(channel);
        const tmpResult = tmp(dependencyMap[44]);
      }
      tmp = obj;
    };
    obj.handleTapGameIcon = function handleTapGameIcon(nativeEvent) {
      ({ gameApplicationId, timestamp } = nativeEvent.nativeEvent);
      if (!obj.isModalOrActionsheetObstructing()) {
        obj = { applicationId: gameApplicationId, messageTimestamp: timestamp };
        obj.openLazy(asyncRequireImpl(11912, dependencyMap.paths), "MessageGameIconActionSheet", obj);
      }
    };
    obj.handleTapSuppressNotificationsIcon = function handleTapSuppressNotificationsIcon() {
      obj = { key: "SUPPRESS_NOTIFICATIONS_TOOLTIP", content: null, icon: null };
      const intl = obj(dependencyMap[46]).intl;
      obj.content = intl.string(obj(dependencyMap[46]).t["RO/KYj"]);
      obj.icon = _modDef11347;
      obj.open(obj);
    };
    obj.handleTapConnectionsRoleTag = function handleTapConnectionsRoleTag(nativeEvent) {
      obj = obj(dependencyMap[39]);
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      ({ userId, guildId, channelId, roleId } = nativeSyntheticEventData);
      ActionSheetActionCreatorsDefault.openLazy(obj(dependencyMap[38])(dependencyMap[149], dependencyMap.paths), "ConnectionsRoleMessageBadgeActionSheet", { userId, guildId, channelId, roleId });
    };
    obj.handleTapTimeoutIcon = function handleTapTimeoutIcon() {
      obj = { key: "GUILD_COMMUNICATION_DISABLED_ICON_TOOLTIP_BODY", content: null, icon: null };
      const intl = obj(dependencyMap[46]).intl;
      obj.content = intl.string(obj(dependencyMap[46]).t["AeYyL+"]);
      obj.icon = _modDef11347;
      obj.open(obj);
    };
    obj.handleReveal = function handleReveal(context) {
      const messageData = obj.getMessageData(context);
      if (null != messageData) {
        obj = MessageActionCreatorsDefault;
        let tmp5 = null;
        if (tmp.params.revealedMessageId !== context) {
          tmp5 = context;
        }
        obj.revealMessage(messageData.messageChannel.id, tmp5);
      }
      tmp = obj;
    };
    obj.handleTapButtonActionComponent = function handleTapButtonActionComponent(nativeEvent) {
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
        const tmpResult = InteractionComponentTypes;
        value = tmpResult.flattenComponents(message.components).get(tmpResult.asComponentId(componentId));
        let tmp6 = null != value;
        if (tmp6) {
          tmp6 = value.type === Server.ComponentType.BUTTON;
        }
        if (tmp6) {
          tmp6 = null != value.customId;
        }
        if (tmp6) {
          if (value.style !== Server.ButtonStyle.PREMIUM) {
            obj = { componentType: Server.ComponentType.BUTTON, messageId, messageFlags: message.flags, customId: value.customId, componentId: null, applicationId: null, channelId: null, guildId: null };
            const tmpResult1 = InteractionUtils;
            obj.componentId = InteractionComponentTypes.asComponentId(componentId);
            obj.applicationId = id;
            obj.channelId = messageChannel.id;
            obj.guildId = messageChannel.getGuildId();
            const result = tmpResult1.executeMessageComponentInteraction(obj);
            const tmpResult2 = InteractionComponentTypes;
          } else {
            obj = { title: null, body: null, confirmText: null };
            const intl = util.intl;
            obj.title = intl.string(util.t["ZtdF0+"]);
            const intl2 = util.intl;
            obj.body = intl2.string(util.t["0BEZLT"]);
            const intl3 = util.intl;
            obj.confirmText = intl3.string(util.t.BddRzS);
            AlertActionCreatorsDefault.show(obj);
          }
        }
        const flattenComponentsResult = tmpResult.flattenComponents(message.components);
      }
    };
    obj.handleTapSelectActionComponent = function handleTapSelectActionComponent(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      const messageId = nativeSyntheticEventData.messageId;
      const messageData = obj.getMessageData(messageId);
      if (null != messageData) {
        ({ messageChannel, message } = messageData);
        ({ flags: closure_1, applicationId } = message);
        if (applicationId == null) {
          applicationId = message.author.id;
        }
        id = messageChannel.id;
        const guildId = messageChannel.getGuildId();
        const tmpResult = InteractionComponentTypes;
        value = tmpResult.flattenComponents(message.components).get(tmpResult.asComponentId(nativeSyntheticEventData.componentId));
        closure_5 = value;
        if (null != value) {
          const parents = InteractionComponentUtils.getParents(message.components, value);
          let first;
          if (parents != null) {
            first = parents[0];
          }
          let type;
          if (first != null) {
            type = first.type;
          }
          let tmp9;
          if (type === Server.ComponentType.LABEL) {
            tmp9 = first;
          }
          obj = { channelId: id, guildId, containerId: messageId, labelComponent: tmp9, allowEmpty: null, onSubmit: null };
          const tmpResult1 = InteractionComponentUtils;
          obj.allowEmpty = InteractionComponentUtils.canSelectBeEmpty(value, "message");
          obj.onSubmit = function onSubmit(localState) {
            obj(dependencyMap[154]);
            obj = { componentType: value.type, messageId, messageFlags, customId: value.customId, componentId: value.id, applicationId, channelId: id, guildId, localState };
            const result = obj.executeMessageComponentInteraction(obj);
          };
          type = value.type;
          if (Server.ComponentType.STRING_SELECT === type) {
            const _HermesInternal2 = HermesInternal;
            const obj9 = ActionSheetActionCreatorsDefault;
            obj = { selectionActionComponent: value };
            const combined = "StringSelectComponentActionSheet:" + messageId;
            const merged = Object.assign(obj);
            obj9.openLazy(asyncRequireImpl(11915, dependencyMap.paths), combined, obj);
            const tmp19 = asyncRequireImpl(11915, dependencyMap.paths);
          } else {
            if (Server.ComponentType.USER_SELECT !== type) {
              if (Server.ComponentType.ROLE_SELECT !== type) {
                if (Server.ComponentType.MENTIONABLE_SELECT !== type) {
                  if (Server.ComponentType.CHANNEL_SELECT === type) {
                    const _HermesInternal3 = HermesInternal;
                    const obj12 = ActionSheetActionCreatorsDefault;
                    const obj1 = { selectionActionComponent: value };
                    const combined1 = "ChannelSelectComponentActionSheet:" + messageId;
                    const merged1 = Object.assign(obj);
                    obj12.openLazy(asyncRequireImpl(11921, dependencyMap.paths), combined1, obj1);
                    const tmp28 = asyncRequireImpl(11921, dependencyMap.paths);
                  }
                }
              }
            }
            const _HermesInternal = HermesInternal;
            const obj7 = ActionSheetActionCreatorsDefault;
            const obj2 = { selectionActionComponent: value };
            const combined2 = "MentionableSelectComponentActionSheet:" + messageId;
            const merged2 = Object.assign(obj);
            obj7.openLazy(asyncRequireImpl(11917, dependencyMap.paths), combined2, obj2);
            const tmp11 = asyncRequireImpl(11917, dependencyMap.paths);
          }
          const tmpResult2 = InteractionComponentUtils;
        }
        const flattenComponentsResult = tmpResult.flattenComponents(message.components);
      }
    };
    obj.handleTapWelcomeReply = function handleTapWelcomeReply(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      const stickerId = nativeSyntheticEventData.stickerId;
      const messageData = obj.getMessageData(nativeSyntheticEventData.messageId);
      if (null != messageData) {
        ({ messageChannel, message } = messageData);
        if (message.type === constants8.USER_JOIN) {
          let tmpResult = WelcomeCTAUtils;
          const result = tmpResult.handleWelcomeCtaClicked(messageChannel, message, stickerId);
        } else if (message.type === tmp5.ROLE_SUBSCRIPTION_PURCHASE) {
          tmpResult = system_message_GuildRoleSubscriptionSystemMessageUtils;
          const result1 = tmpResult.handleRoleSubscriptionPurchaseSystemMessageCtaClicked(messageChannel, message, stickerId);
        }
      }
    };
    obj.handleTapInviteToSpeak = function handleTapInviteToSpeak(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const messageData = obj.getMessageData(obj.getNativeSyntheticEventData(nativeEvent).messageId);
      if (null != messageData) {
        ({ messageChannel, message } = messageData);
        if (message.type === constants8.STAGE_RAISE_HAND) {
          StageChannelActionCreators.setUserSuppress(messageChannel, message.author.id, false);
          const tmpResult = StageChannelActionCreators;
          MessageActionCreatorsDefault.deleteMessage(messageChannel.id, message.id, true);
        }
      }
    };
    obj.handleTapAutoModerationActions = function handleTapAutoModerationActions(nativeEvent) {
      let analyticsData = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = analyticsData.getNativeSyntheticEventData(nativeEvent);
      const channelId = nativeSyntheticEventData.channelId;
      let obj1 = analyticsData;
      if (!analyticsData.isModalOrActionsheetObstructing()) {
        const messageData = obj1.getMessageData(nativeSyntheticEventData.messageId);
        if (null != messageData) {
          ({ message, messageChannel } = messageData);
          let tmpResult = AutomodMessageUtils;
          if (tmpResult.isAutomodMessageRecord(message)) {
            if (messageChannel.id === channelId) {
              channel = ChannelStore.getChannel(channelId);
              let guild_id;
              if (channel != null) {
                guild_id = channel.guild_id;
              }
              const guild = GuildStore.getGuild(guild_id);
              if (null != guild) {
                tmpResult = AutomodMessageUtils;
                if (tmpResult.isAutomodMessageRecord(message)) {
                  if (tmpResult1.isAutomodNotification(message)) {
                    analyticsData = { source: null, alertType: null, messageId: null };
                    const guildIncident = GuildIncidentsStore.getGuildIncident(guild.id);
                    analyticsData.source = GuildAntiRaidTypes.GuildIncidentActionSources.MESSAGE;
                    analyticsData.alertType = GuildAntiRaidUtils.getIncidentAlertType(guildIncident);
                    analyticsData.messageId = message.id;
                    const tmpResult2 = GuildAntiRaidUtils;
                    analyticsData = { guild, analyticsData: null };
                    analyticsData.analyticsData = analyticsData;
                    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11923, dependencyMap.paths), "GuildIncidentActionsActionSheet", analyticsData);
                  }
                  tmpResult1 = AutomodMessageUtils;
                }
                if (GuildMemberStore.isMember(guild.id, message.author.id)) {
                  obj1 = { user: message.author, guild };
                  showModerateUserActionSheetDefault(obj1);
                } else {
                  const obj2 = { key: "GUILD_AUTOMOD_ERROR_MESSAGE_NOT_MEMBER", content: null, icon: null };
                  const intl = util.intl;
                  obj2.content = intl.string(util.t.UsD2YP);
                  obj2.icon = _modDef11347;
                  ToastActionCreatorsDefault.open(obj2);
                  const tmp9Result = ToastActionCreatorsDefault;
                }
              }
            }
          }
        }
      }
    };
    obj.handleTapAutoModerationFeedback = function handleTapAutoModerationFeedback(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      ({ messageId, channelId } = nativeSyntheticEventData);
      const messageData = obj.getMessageData(messageId);
      if (null != messageData) {
        ({ message, messageChannel } = messageData);
        let tmpResult = AutomodMessageUtils;
        if (tmpResult.isAutomodMessageRecord(message)) {
          if (messageChannel.id === channelId) {
            channel = ChannelStore.getChannel(channelId);
            if (null != channel) {
              tmpResult = AutomodMessageUtils;
              if (tmpResult.isAutomodMessageRecord(message)) {
                if (tmpResult1.isAutomodNotification(message)) {
                  obj = { guildId: channel.guild_id, messageId };
                  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11954, dependencyMap.paths), "GuildRaidResolveActionSheet", obj);
                }
                tmpResult1 = AutomodMessageUtils;
              }
              const result = AutomodMessageUtils.extractAutomodMessageFields(message);
              ({ decisionId, content } = result);
              const tmpResult3 = GuildAutomodActionActionCreators;
              tmpResult3.openSubmitFeedback(messageId, content, decisionId, channel);
              const tmpResult2 = AutomodMessageUtils;
            }
          }
        }
      }
    };
    obj.handleTransitionToThread = function handleTransitionToThread(arg0, arg1, source) {
      channel = ChannelStore.getChannel(arg1);
      if (null != channel) {
        obj(dependencyMap[167]);
        obj = { source, navigationReplace: false };
        obj.transitionToThread(channel, obj);
      }
    };
    obj.handleTransitionToMessage = function handleTransitionToMessage(guildId, id, flaggedMessageId) {
      obj = obj(dependencyMap[167]);
      obj.transitionToMessage(id, flaggedMessageId, { navigationReplace: false });
    };
    obj.handleTapFollowForumPost = function handleTapFollowForumPost(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      const messageData = obj.getMessageData(nativeSyntheticEventData.messageId);
      if (null != messageData) {
        const result = messages_MessagesUtils.handleToggleFollowForumPost(messageData.messageChannel, JoinedThreadsStore.hasJoined(nativeSyntheticEventData.channelId));
        const tmpResult = messages_MessagesUtils;
      }
    };
    obj.handleTapShareForumPost = function handleTapShareForumPost(nativeEvent) {
      obj = obj(dependencyMap[39]);
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      ({ guildId, channelId } = nativeSyntheticEventData);
      obj = { section: constants7.CHANNEL };
      const result = obj(dependencyMap[59]).handleCopyLinkForumPost(guildId, channelId, obj);
    };
    obj.handleTapSeeMore = function handleTapSeeMore() {

    };
    obj.handleCopyText = function handleCopyText(nativeEvent) {
      obj = obj(dependencyMap[168]);
      obj.copy(nativeEvent.nativeEvent.text);
      const result = obj(dependencyMap[169]).presentCopiedToClipboard();
    };
    obj.handleTapTag = function handleTapTag(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const messageData = obj.getMessageData(obj.getNativeSyntheticEventData(nativeEvent).messageId);
    };
    obj.handleTapOpTag = function handleTapOpTag() {
      obj = ToastActionCreatorsDefault;
      obj = { key: "FORUM_OP-" + obj.params.selectedChannelId, content: ForumOriginalPoster.getForumOriginalPoster };
      obj.open(obj);
    };
    obj.handleMediaAttachmentPlaybackStarted = function handleMediaAttachmentPlaybackStarted(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      ({ messageId, totalDurationSecs, startDurationSecs, isVoiceMessage, attachmentId: obj } = nativeSyntheticEventData);
      const messageData = obj.getMessageData(messageId);
      if (null != messageData) {
        if (undefined !== isVoiceMessage) {
          if (!isVoiceMessage) {
            const message = messageData.message;
            const contentMessage = message.getContentMessage();
            let found;
            if (contentMessage != null) {
              const attachments = contentMessage.attachments;
              found = attachments.find((id) => id.id === obj);
            }
            if (null != found) {
              let tmpResult = MediaAnalytics;
              const result = tmpResult.logMediaAttachmentPlaybackStarted(messageData.messageChannel, found, totalDurationSecs, messageId, startDurationSecs, messageData.message.author.id);
            }
          }
        }
        tmpResult = VoiceMessageAnalytics;
        const result1 = tmpResult.logVoiceMessagePlaybackStarted(messageId, totalDurationSecs, startDurationSecs, messageData.message.author.id);
      }
    };
    obj.handleMediaAttachmentPlaybackEnded = function handleMediaAttachmentPlaybackEnded(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      ({ messageId, totalDurationSecs, endDurationSecs, durationListeningSecs, isVoiceMessage, attachmentId: obj } = nativeSyntheticEventData);
      const messageData = obj.getMessageData(messageId);
      if (null != messageData) {
        if (undefined !== isVoiceMessage) {
          if (!isVoiceMessage) {
            const message = messageData.message;
            const contentMessage = message.getContentMessage();
            let found;
            if (contentMessage != null) {
              const attachments = contentMessage.attachments;
              found = attachments.find((id) => id.id === obj);
            }
            if (null != found) {
              let tmpResult = MediaAnalytics;
              const result = tmpResult.logMediaAttachmentPlaybackEnded(messageId, totalDurationSecs, endDurationSecs, messageData.message.author.id, durationListeningSecs, found);
            }
          }
        }
        tmpResult = VoiceMessageAnalytics;
        const result1 = tmpResult.logVoiceMessagePlaybackEnded(messageId, totalDurationSecs, endDurationSecs, messageData.message.author.id, durationListeningSecs);
      }
    };
    obj.handleVoiceMessagePlaybackFailed = function handleVoiceMessagePlaybackFailed(nativeEvent) {
      obj = obj(dependencyMap[39]);
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      ({ messageId, errorMessage } = nativeSyntheticEventData);
      if (errorMessage == null) {
        errorMessage = null;
      }
      const result = obj(dependencyMap[171]).logVoiceMessagePlaybackFailed(messageId, errorMessage);
      const obj2 = obj(dependencyMap[171]);
      obj = { key: "AUDIO_PLAYBACK_FAILED-" + messageId, content: null, icon: null };
      const intl = tmp(dependencyMap[46]).intl;
      obj.content = intl.string(obj(dependencyMap[46]).t.gRHMh8);
      obj.icon = _modDef11347;
      ToastActionCreatorsDefault.open(obj);
    };
    closure_129_0 = undefined;
    closure_129_0 = closure_7(async (arg0) => {
      if (c1 === 2) {
        c1 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c1 = 2;
          if (0 === v2) {
            if (arg0 === 1) {
              c1 = 3;
              throw value;
            } else if (arg0 === 2) {
              c1 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              const nativeSyntheticEventData = closure_0(dependencyMap[39]).getNativeSyntheticEventData(closure_0);
              ({ guildId, parentChannelId, threadId } = nativeSyntheticEventData);
              currentUser = currentUser.getCurrentUser();
              id = undefined;
              if (currentUser != null) {
                id = currentUser.id;
              }
              const isMemberResult = member.isMember(guildId, id);
              channel = channel.getChannel(parentChannelId);
              let tmp24Result = closure_0(tmp25[84]);
              const obj1 = { media_post_id: threadId, can_access: null, is_member: null };
              let canViewChannelResult = null != channel;
              if (canViewChannelResult) {
                tmp24Result = closure_0(tmp25[173]);
                canViewChannelResult = tmp24Result.canViewChannel(channel);
              }
              obj1.can_access = canViewChannelResult;
              obj1.is_member = isMemberResult;
              tmp24Result.trackWithMetadata(constants.MEDIA_POST_PREVIEW_EMBED_CLICKED, obj1);
              if (isMemberResult) {
                const result = closure_0(tmp25[167]).tryTransitionToThreadMessage(parentChannelId, threadId, nativeSyntheticEventData.messageId);
                const tmp24Result1 = closure_0(tmp25[167]);
              } else {
                dependencyMap = 1;
                const obj2 = { channelId: parentChannelId };
                v2 = 2;
                c1 = 1;
                const obj3 = { value: v2(tmp25[174]).startLurking(guildId, {}, obj2), done: false };
                return obj3;
              }
              const obj11 = closure_0(dependencyMap[39]);
            }
          } else {
            if (1 === tmp6) {
              dependencyMap = 0;
            } else if (arg0 === 1) {
              c1 = 3;
              throw value;
            } else if (arg0 !== 2) {
              dependencyMap = 0;
            }
            dependencyMap = 0;
            c1 = 3;
            obj = { value, done: true };
            return obj;
          }
          c1 = 3;
        } catch (tmp16) {
          if (tmp3 === dependencyMap) {
            c1 = tmp2;
            throw tmp16;
          } else {
            v2 = tmp;
          }
        }
      }
    });
    obj.handleTapPostPreviewEmbed = function() {
      const self = this;
      const apply = obj.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    obj.handleTapDismissMediaPostSharePrompt = function handleTapDismissMediaPostSharePrompt(nativeEvent) {
      obj = obj(dependencyMap[39]);
      const obj2 = MediaChannelActionCreatorsAll;
      const result = obj2.dismissMediaPostSharePrompt(SnowflakeUtilsDefault.castMessageIdAsChannelId(obj.getNativeSyntheticEventData(nativeEvent).messageId));
    };
    obj.handleTapObscuredMediaLearnMore = function handleTapObscuredMediaLearnMore(nativeEvent) {
      obj = obj(dependencyMap[39]);
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      ({ messageId, channelId, attachmentId, embedId } = nativeSyntheticEventData);
      ActionSheetActionCreatorsDefault.openLazy(obj(dependencyMap[38])(dependencyMap[176], dependencyMap.paths), "ExplicitMediaLearnMore", { messageId, channelId, attachmentId, embedId });
    };
    obj.onTapObscuredMediaToggle = function onTapObscuredMediaToggle(nativeEvent) {
      obj = obj(dependencyMap[39]);
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      ({ messageId, channelId, isReveal, attachmentId, embedId } = nativeSyntheticEventData);
      let result = isReveal;
      if (isReveal) {
        result = obj2.shouldAgeVerifyForExplicitMedia();
      }
      if (result) {
        obj = { entryPoint: tmp(dependencyMap[179]).AgeVerificationModalEntryPoint.OBSCURED_MEDIA };
        const result1 = AgeVerificationActionCreatorsDefault.showAgeVerificationGetStartedModal(obj);
      }
      obj2 = obj(dependencyMap[177]);
      const result2 = obj(dependencyMap[177]).trackToggleMediaObscurityV2({ obscure: isReveal });
      const tmpResult = obj(dependencyMap[177]);
    };
    obj.handleTapSafetyPolicyNoticeEmbed = function handleTapSafetyPolicyNoticeEmbed(nativeEvent) {
      obj = obj(dependencyMap[39]);
      ModalActionCreatorsDefault.pushLazy(obj(dependencyMap[38])(dependencyMap[180], dependencyMap.paths), { classificationId: obj.getNativeSyntheticEventData(nativeEvent).classificationId, shouldRedirectToAccountStanding: true });
    };
    obj.handleTapSafetySystemNotificationCta = function handleTapSafetySystemNotificationCta(nativeEvent) {
      ({ ctaType, ctaKey } = nativeEvent.nativeEvent);
      if (constants11.POLICY_VIOLATION_DETAIL === ctaType) {
        if (null != ctaKey) {
          obj = { classificationId: ctaKey, shouldRedirectToAccountStanding: true };
          ModalActionCreatorsDefault.pushLazy(obj(dependencyMap[38])(dependencyMap[180], dependencyMap.paths), obj);
        }
      } else if (tmp.LEARN_MORE_LINK === ctaType) {
        if (null != ctaKey) {
          obj = LinkingDefault;
          obj.openURL(ctaKey);
        }
      }
    };
    obj.handleTapPollAnswer = function handleTapPollAnswer(arg0) {
      obj = MessageDataSnowflakeUtils;
      const result = obj.replaceCorrectMessageParams(obj.castNativeSyntheticEventData(arg0));
      if (null != result) {
        const result1 = PollsActionCreatorsDefault.handlePollAnswerTapped(result);
      }
    };
    obj.handleTapPollSubmitVote = function handleTapPollSubmitVote(arg0) {
      obj = MessageDataSnowflakeUtils;
      const result = obj.replaceCorrectMessageParams(obj.castNativeSyntheticEventData(arg0));
      if (null != result) {
        PollsActionCreatorsDefault.handlePollSubmitVote(result);
      }
    };
    obj.handleTapPollAction = function handleTapPollAction(arg0) {
      obj = MessageDataSnowflakeUtils;
      const result = obj.replaceCorrectMessageParams(obj.castNativeSyntheticEventData(arg0));
      if (null != result) {
        const result1 = PollsActionCreatorsDefault.handlePollActionTapped(result);
      }
    };
    obj.handleLongPressPollImage = function handleLongPressPollImage(arg0) {
      const result = obj.replaceCorrectMessageParams(MessageDataSnowflakeUtils.castNativeSyntheticEventData(arg0));
      obj = result;
      if (null != result) {
        const messageData = obj.getMessageData(result.messageId);
        if (null != messageData) {
          ({ message, messageChannel } = messageData);
          const attachments = message.attachments;
          const findIndexResult = attachments.findIndex((id) => id.id === result.attachmentId);
          if (null != findIndexResult) {
            let tmpResult = MediaSourceUtil;
            const result1 = tmpResult.extractMediaSourcesFromMessage(message, message, messageChannel.guild_id);
            tmpResult = openMediaModal;
            obj = { initialSources: result1, initialIndex: findIndexResult, originViewOrOriginLayout: result.layout, analyticsSource: "Channel", channelId: messageChannel.id };
            tmpResult.openMediaModal(obj);
          }
        }
      }
    };
    obj.handleTapCtaButton = function handleTapCtaButton(nativeEvent) {
      obj = obj(dependencyMap[39]);
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      ({ channelId, callback, messageId } = nativeSyntheticEventData);
      if (obj(dependencyMap[184]).CtaButtonType.MARK_AS_FALSE_POSITIVE === callback) {
        let tmpResult = tmp(dependencyMap[185]);
        const result = tmpResult.handleSenderFalsePositiveFlow(channelId, messageId);
      } else if (tmp(dependencyMap[184]).CtaButtonType.AGE_VERIFICATION_RETRY === callback) {
        obj = { entryPoint: tmp(dependencyMap[179]).AgeVerificationModalEntryPoint.SYSTEM_DM_RETRY_BUTTON };
        const result1 = AgeVerificationActionCreatorsDefault.showAgeVerificationGetStartedModal(obj);
        tmpResult = tmp(dependencyMap[179]);
        const result2 = tmpResult.trackAgeVerificationDmClicked(tmp(dependencyMap[179]).AgeVerificationDmCta.RETRY, channelId);
      } else if (tmp(dependencyMap[184]).CtaButtonType.CONNECT_TO_TEEN === callback) {
        if (!tmpResult1.resumeFamilyCenterConnection()) {
          obj = { screen: constants9.FAMILY_CENTER };
          tmp(dependencyMap[136]).openUserSettings(obj);
          const tmpResult2 = tmp(dependencyMap[136]);
        }
        tmpResult1 = tmp(dependencyMap[186]);
        const result3 = tmp(dependencyMap[179]).trackAgeVerificationDmClicked(tmp(dependencyMap[179]).AgeVerificationDmCta.CONNECT_TO_TEEN, channelId);
        const tmpResult3 = tmp(dependencyMap[179]);
      } else if (tmp(dependencyMap[184]).CtaButtonType.AGE_VERIFICATION_MANUAL_REVIEW === callback) {
        const result4 = tmp(dependencyMap[187]).handleManualReviewCta();
        const tmpResult4 = tmp(dependencyMap[187]);
        const result5 = tmp(dependencyMap[179]).trackAgeVerificationDmClicked(tmp(dependencyMap[179]).AgeVerificationDmCta.MANUAL_REVIEW, channelId);
        const tmpResult5 = tmp(dependencyMap[179]);
      }
    };
    obj.handleMessageAccessibilityAction = function handleMessageAccessibilityAction(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const messageId = obj.getNativeSyntheticEventData(nativeEvent).messageId;
      let obj1 = MessageAccessibilityActions;
      const messageAccessibilityActionFromLabel = obj1.getMessageAccessibilityActionFromLabel(nativeEvent.nativeEvent.action);
      const params = obj.params;
      const message = params.getMessage(messageId);
      if (null != message) {
        channel = ChannelStore.getChannel(message.channel_id);
        if (MessageAccessibilityActions.MessageAccessibilityAction.VIEW_PROFILE === messageAccessibilityActionFromLabel) {
          if (message.type === constants8.FRIEND_REQUEST_ACCEPTED) {
            if (null != channel) {
              if (channel.isDM()) {
                id = channel.getRecipientId();
              }
              if (null != id) {
                obj = { userId: id, channelId: null, messageId: null };
                id = undefined;
                if (channel != null) {
                  id = channel.id;
                }
                obj.channelId = id;
                obj.messageId = messageId;
                showUserProfileActionSheetDefault(obj);
              }
            }
          }
          const author2 = message.author;
          if (author2 != null) {
            id = author2.id;
          }
        } else if (MessageAccessibilityActions.MessageAccessibilityAction.REPLY === messageAccessibilityActionFromLabel) {
          if (null != channel) {
            obj = { message, channel, chatInputRef: params.chatInputRef, actionSource: "a11y_action" };
            replyToMessageDefault(obj);
          }
        } else if (MessageAccessibilityActions.MessageAccessibilityAction.ADD_REACTION === messageAccessibilityActionFromLabel) {
          if (null != channel) {
            let tmpResult = reactions_ReactionUtils;
            const result = tmpResult.handleAddNewReactions(channel, message.id);
          }
        } else if (MessageAccessibilityActions.MessageAccessibilityAction.MESSAGE_ACTIONS_MENU === messageAccessibilityActionFromLabel) {
          if (null != channel) {
            tmpResult = showLongPressMessageActionSheet;
            obj1 = { channel, message, canAddNewReactions: canAddNewReactionsDefault(channel), user: null, chatInputRef: null };
            let id1;
            if (message != null) {
              const author = message.author;
              if (author != null) {
                id1 = author.id;
              }
            }
            obj1.user = UserStore.getUser(id1);
            obj1.chatInputRef = tmp4.params.chatInputRef;
            const result1 = tmpResult.showLongPressMessageActionSheet(obj1);
          }
        } else if (MessageAccessibilityActions.MessageAccessibilityAction.ADD_QUICK_REACTION === messageAccessibilityActionFromLabel) {
          if (null != channel) {
            const result2 = DoubleTapToReactUtils.handleAddDefaultDoubleTapReaction(message, channel);
            const tmpResult1 = DoubleTapToReactUtils;
          }
        } else if (MessageAccessibilityActions.MessageAccessibilityAction.EDIT_GDM === messageAccessibilityActionFromLabel) {
          if (null != channel) {
            const obj2 = { channelId: channel.id };
            showChatGDMCustomizeActionSheetDefault(obj2);
          }
        } else if (MessageAccessibilityActions.MessageAccessibilityAction.OPEN_PINS === messageAccessibilityActionFromLabel) {
          openPinnedMessagesDefault(message.channel_id, "pinned-message-system-message");
        } else if (MessageAccessibilityActions.MessageAccessibilityAction.JUMP_TO_MESSAGE === messageAccessibilityActionFromLabel) {
          jumpToReferencedMessageDefault(message);
        }
      }
      tmp4 = obj;
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
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      const params = obj.params;
      const message = params.getMessage(nativeSyntheticEventData.messageId);
      if (null != message) {
        let tmpResult = getInlineForwardOptions;
        const inlineForwardOptions = tmpResult.getInlineForwardOptions(message, nativeSyntheticEventData);
        if (null != inlineForwardOptions) {
          const _Object = Object;
          if (nativeEvent.nativeEvent.triggerHaptic) {
            tmpResult = HapticUtils;
            const result = tmpResult.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
          }
          obj = { message, source: null, forwardOptions: null };
          let str = nativeEvent.nativeEvent.location;
          if (str == null) {
            str = "inline-button";
          }
          obj.source = str;
          let tmp7;
          if (0 !== Object.keys(inlineForwardOptions).length) {
            tmp7 = inlineForwardOptions;
          }
          obj.forwardOptions = tmp7;
          ForwardModalUtils.openForwardModal(obj);
          const tmpResult1 = ForwardModalUtils;
        }
      }
    };
    obj.handleTapSoundmoji = function handleTapSoundmoji(nativeEvent) {
      obj = obj(dependencyMap[39]);
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      openSoundmojiActionSheetDefault(nativeSyntheticEventData);
    };
    obj.handleTapClanTagChiplet = function handleTapClanTagChiplet(nativeEvent) {
      obj = obj(dependencyMap[39]);
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      if (tmp4) {
        const _HermesInternal = HermesInternal;
        const obj2 = ActionSheetActionCreatorsDefault;
        obj = { guildId: nativeSyntheticEventData.guildId };
        obj2.openLazy(tmp(dependencyMap[38])(dependencyMap[68], dependencyMap.paths), "GuildProfileActionSheet:" + nativeSyntheticEventData.guildId, obj);
        const tmp6 = tmp(dependencyMap[38])(dependencyMap[68], dependencyMap.paths);
      }
      tmp = obj;
      tmp4 = null != nativeSyntheticEventData && null != nativeSyntheticEventData.guildId;
    };
    obj.handleTapContentInventoryEntryEmbed = function handleTapContentInventoryEntryEmbed(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      const message = obj.params.getMessage(nativeSyntheticEventData.messageId);
      if (null != message) {
        obj = { message, authorId: null, contentId: null, tappedElement: null };
        ({ authorId: obj3.authorId, contentId: obj3.contentId, tappedElement: obj3.tappedElement } = tmp4);
        const result = ContentInventoryActionCreators.onTapContentInventoryEntryEmbed(obj);
        const tmpResult = ContentInventoryActionCreators;
      }
      tmp4 = _objectWithoutProperties(nativeSyntheticEventData, closure_4);
    };
    obj.handleTapCheckpointCard = function handleTapCheckpointCard(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      const message = obj.params.getMessage(nativeSyntheticEventData.messageId);
      if (null != message) {
        obj = { message, authorId: tmp4.authorId };
        onTapCheckpointCard.onTapCheckpointCard(obj);
        const tmpResult = onTapCheckpointCard;
      }
      tmp4 = _objectWithoutProperties(nativeSyntheticEventData, closure_5);
    };
    obj.handleTapAppMessageEmbed = function handleTapAppMessageEmbed(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      const message = obj.params.getMessage(nativeSyntheticEventData.messageId);
      if (null != message) {
        obj = {};
        const merged = Object.assign(nativeSyntheticEventData);
        obj.message = message;
        const result = createAppMessageEmbed.handleTapAppMessageEmbed(obj);
        const tmpResult = createAppMessageEmbed;
      }
    };
    obj.handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      const message = obj.params.getMessage(nativeSyntheticEventData.messageId);
      if (null != message) {
        obj = {};
        const merged = Object.assign(nativeSyntheticEventData);
        obj.message = message;
        const result = previewSharedClientTheme.handleTapPreviewSharedClientTheme(obj);
        const tmpResult = previewSharedClientTheme;
      }
    };
    obj.handleSharedClientThemeViewed = function handleSharedClientThemeViewed(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      const message = obj.params.getMessage(nativeSyntheticEventData.messageId);
      if (null != message) {
        obj = {};
        const merged = Object.assign(nativeSyntheticEventData);
        obj.message = message;
        const result = sharedClientThemeViewed.handleSharedClientThemeViewed(obj);
        const tmpResult = sharedClientThemeViewed;
      }
    };
    obj.getParams = global;
    return obj;
  }
}
const prototype = MessagesHandlers.prototype;
Object.defineProperty(prototype, "params", {
  get: function params() {
    return this.getParams();
  },
  set: undefined
});
prototype["replaceCorrectMessageParams"] = function replaceCorrectMessageParams(nativeEvent) {
  const self = this;
  nativeEvent = nativeEvent.nativeEvent;
  const message = this.params.getMessage(nativeEvent.messageId);
  if (null != message) {
    if (message.type === constants8.THREAD_STARTER_MESSAGE) {
      const messageReference = message.messageReference;
      if (null != messageReference) {
        if (null != MessageStore.getMessage(messageReference.channel_id, messageReference.message_id)) {
          let obj = {};
          const merged = Object.assign(nativeEvent);
          ({ message_id: obj4.messageId, channel_id: obj4.channelId } = messageReference);
          const tmp13 = obj;
        } else {
          obj = {};
          const merged1 = Object.assign(nativeEvent);
          const obj1 = {};
          const merged2 = Object.assign(nativeEvent);
          obj1.mediaIndex = 0;
          obj1.mediaType = "";
          obj.nativeEvent = obj1;
          const result = self.handleLongPressMessage(obj);
        }
        return tmp13;
      }
    } else {
      obj = {};
      ({ id, channel_id } = message);
      const merged3 = Object.assign(nativeEvent);
      obj.messageId = id;
      obj.channelId = channel_id;
      return obj;
    }
  }
};

export { MessagesHandlers };