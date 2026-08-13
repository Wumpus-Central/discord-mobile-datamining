// discord_app/modules/messages/native/MessagesHandlers.tsx
import getQuestContentName from "getQuestContentName";
import set from "set";
import closure_8 from "GuildFeatures";
import initialize from "initialize";
import addApplication from "addApplication";
import closure_11 from "set";
import computeAlertSettings from "computeAlertSettings";
import scheduledEventSort from "scheduledEventSort";
import { isGuildScheduledEventActive as closure_14 } from "scheduledEventSort";
import getCurrentTime from "getCurrentTime";
import initializeState from "initializeState";
import processMessage from "processMessage";
import handleQuickSwitcherUpdate from "handleQuickSwitcherUpdate";
import storeThread from "storeThread";
import recomputeAffinities from "recomputeAffinities";
import fetchFingerprint from "fetchFingerprint";
import ensureGuildLoaded from "ensureGuildLoaded";
import updateGiftCode from "updateGiftCode";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import updateInvite from "updateInvite";
import updateActivities from "updateActivities";
import reinjectEphemerals from "reinjectEphemerals";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import sortActivity from "sortActivity";
import handleConnectionOpen from "handleConnectionOpen";
import closure_32 from "handleConnectionOpen";
import filterPlayingActivities from "filterPlayingActivities";
import closure_34 from "initialize";
import mergeGuildAvatar from "mergeGuildAvatar";
import { SeparatorAction } from "Changeset";
import ME from "ME";
import { InviteTypes } from "InviteSendStates";
import GuildFeatures from "GuildFeatures";
import { SafetySystemNotificationCtaType as closure_61 } from "SafetyHubView";
import { OpenThreadAnalyticsLocations as closure_62 } from "AbortCodes";

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
const require = arg1;
let closure_4 = ["messageId"];
let closure_5 = ["messageId"];
({ ActivityActionTypes: closure_37, ActivityFlags: closure_38, ActivityGamePlatforms: closure_39, ActivityTypes: closure_40, AnalyticEvents: closure_41, AnalyticsGameOpenTypes: closure_42, AnalyticsLocations: closure_43, AnalyticsObjects: closure_44, AnalyticsObjectTypes: closure_45, AnalyticsPages: closure_46, AnalyticsSections: closure_47, LinkingTypes: closure_48, ME: closure_49, MessageFlags: closure_50, MessageStates: closure_51, MessageTypes: closure_52, Permissions: closure_53, Routes: closure_54, UpsellTypes: closure_55, UserSettingsSections: closure_56, WebBrowserType: closure_57 } = ME);
({ PremiumTypes: closure_59, PremiumUpsellTypes: closure_60 } = GuildFeatures);
let items = [require("QUICK_SWITCHER").PREMIUM_GIFT_INTENT_CARD];
let result = require("_slicedToArray").fileFinishedImporting("modules/messages/native/MessagesHandlers.tsx");
class MessagesHandlers {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    f108898 = obj;
    obj.getMessageData = function getMessageData(messageId) {
      if (null == messageId) {
        return null;
      } else {
        const message = uiStore.params.getMessage(messageId);
        if (null == message) {
          return null;
        } else {
          const channel = outer1_22.getChannel(message.channel_id);
          let tmp5 = null;
          if (null != channel) {
            const obj = { message: null, messageChannel: null };
            obj[0] = message;
            obj[1] = channel;
            tmp5 = obj;
          }
          return tmp5;
        }
      }
    };
    obj.isModalOrActionsheetObstructing = function isModalOrActionsheetObstructing() {
      return uiStore(outer1_3[36]).isAlertOrActionSheetOpen(uiStore.params.selectedChannelId);
    };
    obj.handleTapImage = function handleTapImage(nativeEvent) {
      nativeEvent = nativeEvent.nativeEvent;
      let messageData;
      messageData = nativeEvent.getMessageData(nativeEvent.id);
      if (null != messageData) {
        uiStore(outer1_3[38])(outer1_3[37], outer1_3.paths).then((handleMessagesTapImage) => {
          const result = handleMessagesTapImage.handleMessagesTapImage({ tapImageData: nativeEvent, allowWithinModal: false, message: messageData.message, messageChannel: messageData.messageChannel, selectedChannelId: nativeEvent.params.selectedChannelId });
        });
        const promise = uiStore(outer1_3[38])(outer1_3[37], outer1_3.paths);
      }
    };
    obj.handleTapChannel = function handleTapChannel(closure_0) {
      if (!data.isModalOrActionsheetObstructing()) {
        data = uiStore(outer1_3[39]).getNativeSyntheticEventData(closure_0).data;
        const obj = uiStore(outer1_3[39]);
        uiStore(outer1_3[38])(outer1_3[40], outer1_3.paths).then((handleMessagesTapChannel) => {
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
        const promise = uiStore(outer1_3[38])(outer1_3[40], outer1_3.paths);
      }
    };
    obj.handleLongPressChannel = function handleLongPressChannel(closure_0) {
      if (!data.isModalOrActionsheetObstructing()) {
        data = uiStore(outer1_3[39]).getNativeSyntheticEventData(closure_0).data;
        const obj = uiStore(outer1_3[39]);
        uiStore(outer1_3[38])(outer1_3[41], outer1_3.paths).then((handleMessagesLongPressChannel) => {
          const result = handleMessagesLongPressChannel.handleMessagesLongPressChannel({ data });
        });
        const promise = uiStore(outer1_3[38])(outer1_3[41], outer1_3.paths);
      }
    };
    obj.handleTapAttachmentLink = function handleTapAttachmentLink(arg0) {
      if (!uiStore.isModalOrActionsheetObstructing()) {
        uiStore(outer1_3[42]).contentHandlers.onTapAttachmentLink(arg0);
        const contentHandlers = uiStore(outer1_3[42]).contentHandlers;
      }
    };
    obj.handleLongPressAttachmentLink = function handleLongPressAttachmentLink(arg0) {
      if (!uiStore.isModalOrActionsheetObstructing()) {
        const result = uiStore(outer1_3[42]).contentHandlers.onLongPressAttachmentLink(arg0);
        const contentHandlers = uiStore(outer1_3[42]).contentHandlers;
      }
    };
    obj.handleTapCall = function handleTapCall(closure_0) {
      let obj = channel(closure_3[39]);
      const data = obj.getNativeSyntheticEventData(closure_0).data;
      const channelId = data.channelId;
      channel = store.getChannel(channelId);
      if (tmp3) {
        let tmpResult = tmp(tmp2[43]);
        if (tmpResult.checkIsCallActive(channelId, data.messageId)) {
          tmpResult = tmp(tmp2[44]);
          tmpResult.handleJoinCall(channel);
        } else {
          obj = { key: "CallTap", options: null, hasIcons: true };
          obj = { label: null, IconComponent: null, onPress: null };
          const intl = tmp(tmp2[46]).intl;
          obj[0] = intl.string(tmp(tmp2[46]).t.focH1t);
          obj[1] = tmp(tmp2[47]).PhoneCallIcon;
          obj[2] = function onPress() {
            channel(outer1_3[44]).handleStartCall(channel);
          };
          const items = [obj, ];
          const obj1 = { label: null, IconComponent: null, onPress: null };
          const intl2 = tmp(tmp2[46]).intl;
          obj1[0] = intl2.string(tmp(tmp2[46]).t.oCqlGG);
          obj1[1] = tmp(tmp2[48]).VideoIcon;
          obj1[2] = function onPress() {
            channel(outer1_3[44]).handleStartCall(channel, true);
          };
          items[1] = obj1;
          obj[1] = items;
          const result = tmp(tmp2[45]).showSimpleActionSheet(obj);
          const tmpResult1 = tmp(tmp2[45]);
        }
      }
    };
    obj.handleTapMention = function handleTapMention(closure_0) {
      if (!uiStore.isModalOrActionsheetObstructing()) {
        uiStore(outer1_3[42]).contentHandlers.onTapMention(closure_0);
        const contentHandlers = uiStore(outer1_3[42]).contentHandlers;
      }
    };
    obj.handleTapCommandMention = function handleTapCommandMention(closure_0) {
      let obj = uiStore(outer1_3[39]);
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(closure_0);
      const commandName = nativeSyntheticEventData.commandName;
      const commandId = nativeSyntheticEventData.commandId;
      const chatInputRef = commandName.getParams().chatInputRef;
      obj = { channelId: nativeSyntheticEventData.channelId, currentText: null, commandId: null, commandName: null, onOpenCustomKeyboard: null, onSetCommand: null };
      let current = chatInputRef.current;
      let str;
      if (current != null) {
        str = current.getText();
      }
      if (str == null) {
        str = "";
      }
      obj[1] = str;
      obj[2] = commandId;
      obj[3] = commandName;
      obj[4] = function onOpenCustomKeyboard(arg0) {
        const current = chatInputRef.current;
        let openCustomKeyboardResult;
        if (current != null) {
          openCustomKeyboardResult = current.openCustomKeyboard(arg0);
        }
        return openCustomKeyboardResult;
      };
      obj[5] = function onSetCommand() {
        commandId(outer1_3[50]).hideActionSheet();
        commandId(outer1_3[51])();
        const current = chatInputRef.current;
        if (current != null) {
          current.openSystemKeyboard();
        }
        const current2 = chatInputRef.current;
        if (current2 != null) {
          const applicationCommandManager = current2.getApplicationCommandManager();
          if (applicationCommandManager != null) {
            applicationCommandManager.setPartialCommand(commandId, commandName, commandName(outer1_3[52]).ApplicationCommandTriggerLocations.MENTION);
          }
        }
      };
      const result = uiStore(outer1_3[49]).handleTapCommandMention(obj);
    };
    obj.handleLongPressCommandMention = function handleLongPressCommandMention(nativeEvent) {
      let commandId;
      let commandName;
      ({ commandName, commandId } = nativeEvent.nativeEvent);
      const result = uiStore(closure_3[49]).handleLongPressCommandMention(commandName, commandId);
    };
    obj.handleTapGameMention = function handleTapGameMention(closure_0) {
      if (!uiStore.isModalOrActionsheetObstructing()) {
        uiStore = uiStore(outer1_3[39]).getNativeSyntheticEventData(closure_0);
        const obj = uiStore(outer1_3[39]);
        uiStore(outer1_3[38])(outer1_3[53], outer1_3.paths).then((handleMessagesTapGameMention) => {
          const result = handleMessagesTapGameMention.handleMessagesTapGameMention({ gameId: gameId.gameId });
        });
        const promise = uiStore(outer1_3[38])(outer1_3[53], outer1_3.paths);
      }
    };
    obj.handleTapGuildEventLink = function handleTapGuildEventLink(node) {
      node = node.node;
      if (null != node) {
        if (obj.isLinkTrusted(node)) {
          const payload = callback(tmp3[55])(tmp).payload;
          if (payload.type !== constants8.INVITE) {
            return false;
          } else if (null == payload.inviteCode) {
            return false;
          } else {
            invite = invite.getInvite(payload.inviteCode);
            let tmp8 = null == invite;
            if (!tmp8) {
              tmp8 = !tmp2(tmp3[56]).isGuildScheduledEventInviteEmbed(invite);
              const tmp2Result = tmp2(tmp3[56]);
            }
            let flag = !tmp8;
            if (!tmp8) {
              tmp4(tmp3[57])(invite);
              flag = true;
            }
            return flag;
          }
          tmp4 = callback;
        }
        obj = uiStore(closure_3[54]);
        tmp2 = uiStore;
      }
      return false;
    };
    obj.handleTapLink = function handleTapLink(nativeEvent) {
      nativeEvent = nativeEvent.nativeEvent;
      let messageData;
      messageData = nativeEvent.getMessageData(nativeEvent.data.messageId);
      uiStore(outer1_3[38])(outer1_3[58], outer1_3.paths).then((handleMessagesTapLink) => {
        const obj = { allowWithinModal: false, chatInputRef: nativeEvent.params.chatInputRef, handleTransitionToThread: nativeEvent.handleTransitionToThread, message: null, messageChannel: null, selectedChannelId: null, tapLinkData: null };
        let message;
        if (closure_1 != null) {
          message = tmp2.message;
        }
        obj[3] = message;
        let messageChannel;
        if (closure_1 != null) {
          messageChannel = tmp2.messageChannel;
        }
        obj[4] = messageChannel;
        obj[5] = nativeEvent.params.selectedChannelId;
        obj[6] = nativeEvent;
        const result = handleMessagesTapLink.handleMessagesTapLink(obj);
      });
    };
    obj.handleLongPressLink = function handleLongPressLink(nativeEvent) {
      if (!uiStore.isModalOrActionsheetObstructing()) {
        uiStore(outer1_3[42]).contentHandlers.onLongPressLink(nativeEvent);
        const contentHandlers = uiStore(outer1_3[42]).contentHandlers;
      }
    };
    obj.handleTapReaction = function handleTapReaction(nativeEvent) {
      let isBurst;
      let messageId;
      let reaction;
      let obj = uiStore(outer1_3[39]);
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      ({ reaction, messageId, isBurst } = nativeSyntheticEventData);
      if (!uiStore.isModalOrActionsheetObstructing()) {
        const messageData = uiStore.getMessageData(messageId);
        if (null != messageData) {
          const messageChannel = messageData.messageChannel;
          const tmpResult = uiStore(outer1_3[59]);
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
    };
    obj.handleTapReactionOverflow = function handleTapReactionOverflow(closure_0) {
      let channelId;
      let messageId;
      let obj = uiStore(outer1_3[39]);
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(closure_0);
      ({ messageId, channelId } = nativeSyntheticEventData);
      if (!uiStore.isModalOrActionsheetObstructing()) {
        obj = { messageId: null, channelId: null, location: null };
        obj[0] = messageId;
        obj[1] = channelId;
        obj = { object: null, objectType: null };
        obj[0] = outer1_44.CHANNEL;
        obj[1] = outer1_45.REACTION_OVERFLOW;
        obj[2] = obj;
        uiStore(outer1_3[60]).handleViewReactions(obj);
        const tmpResult = uiStore(outer1_3[60]);
      }
    };
    obj.handleLongPressReaction = function handleLongPressReaction(closure_0) {
      let channelId;
      let isBurst;
      let messageId;
      let obj = uiStore(outer1_3[39]);
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(closure_0);
      const reaction = nativeSyntheticEventData.reaction;
      ({ messageId, channelId, isBurst } = nativeSyntheticEventData);
      if (!uiStore.isModalOrActionsheetObstructing()) {
        obj = { messageId: null, channelId: null, emoji: null, isSelectedBurst: null, location: null };
        obj[0] = messageId;
        obj[1] = channelId;
        let emoji = null;
        if (null != reaction) {
          emoji = reaction.emoji;
        }
        obj[2] = emoji;
        obj[3] = isBurst;
        obj = { object: null, objectType: null };
        obj[0] = outer1_44.CHANNEL;
        obj[1] = outer1_45.REACTION;
        obj[4] = obj;
        uiStore(outer1_3[60]).handleViewReactions(obj);
        const tmpResult = uiStore(outer1_3[60]);
      }
    };
    obj.handleOpenSticker = function handleOpenSticker(closure_0) {
      let obj = uiStore(outer1_3[39]);
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(closure_0);
      const messageData = uiStore.getMessageData(nativeSyntheticEventData.messageId);
      if (null != messageData) {
        obj = { renderableSticker: null, channel: null, chatInputRef: null };
        obj[0] = nativeSyntheticEventData.sticker;
        obj[1] = messageData.messageChannel;
        obj[2] = uiStore.params.chatInputRef;
        const result = uiStore(outer1_3[61]).showStickerDetailActionSheet(obj);
        const tmpResult = uiStore(outer1_3[61]);
      }
    };
    obj.handleTapAvatar = function handleTapAvatar(arg0) {
      const items = [outer1_1(outer1_3[35]).AVATAR];
      uiStore.handleOpenProfile(arg0, items);
    };
    obj.handleTapUsername = function handleTapUsername(closure_0) {
      if (obj.isIOS()) {
        const items = [outer1_1(tmp2[35]).USERNAME];
        uiStore.handleOpenProfile(closure_0, items);
      } else {
        let tmpResult = tmp(tmp2[39]);
        const nativeSyntheticEventData = tmpResult.getNativeSyntheticEventData(closure_0);
        const userId = nativeSyntheticEventData.userId;
        const messageData = uiStore.getMessageData(nativeSyntheticEventData.messageId);
        if (null != messageData) {
          const message = messageData.message;
          if (outer1_1(tmp2[63])(message)) {
            if (null != message.messageReference.guild_id) {
              const items1 = [tmp13(tmp2[35]).USERNAME];
              obj3.handleOpenProfile(closure_0, items1);
            }
          }
          if (null != userId) {
            const user = outer1_35.getUser(userId);
            const messageChannel = messageData.messageChannel;
            const isPrivateResult = messageChannel.isPrivate();
            tmpResult = tmp(tmp2[64]);
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
                current.insertText(tmp(tmp2[65]).getMentionTextWithUser(messageChannel, user), null, true);
                const tmpResult1 = tmp(tmp2[65]);
              }
            }
            canResult = outer1_29.can(outer1_53.SEND_MESSAGES, messageChannel);
          }
          tmp13 = outer1_1;
        }
      }
    };
    obj.handleLongPressUsername = function handleLongPressUsername(arg0) {
      const items = [outer1_1(outer1_3[35]).USERNAME];
      uiStore.handleOpenProfile(arg0, items);
    };
    obj.handleOpenProfile = function handleOpenProfile(closure_0) {
      let messageId;
      let userId;
      let obj = uiStore(outer1_3[39]);
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(closure_0);
      ({ messageId, userId } = nativeSyntheticEventData);
      const messageData = uiStore.getMessageData(messageId);
      if (null != messageData) {
        const message = messageData.message;
        let user;
        if (null != userId) {
          user = outer1_35.getUser(userId);
        }
        let tmp7 = user;
        if (null != messageId) {
          if (tmpResult.isPublicSystemMessage(message)) {
            outer1_1(tmp2[50]).openLazy(tmp(tmp2[38])(tmp2[67], tmp2.paths), "PublicGuildAnnouncementProfile");
          } else {
            let user1 = user;
            if (null == user) {
              user1 = outer1_35.getUser(message.author.id);
            }
            if (outer1_1(tmp2[63])(message)) {
              const guild_id = message.messageReference.guild_id;
              if (null != guild_id) {
                let tmp10Result = tmp10(tmp2[50]);
                const _HermesInternal2 = HermesInternal;
                obj = { guildId: null };
                obj[0] = guild_id;
                tmp10Result.openLazy(tmp(tmp2[38])(tmp2[68], tmp2.paths), "GuildProfileActionSheet:" + guild_id, obj);
              }
            }
            tmp7 = user1;
            if (message.type === outer1_52.THREAD_STARTER_MESSAGE) {
              tmp7 = user1;
              if (null != message.messageReference) {
                const messageByReference = outer1_17.getMessageByReference(message.messageReference);
                tmp7 = user1;
                if (null != messageByReference) {
                  tmp7 = user1;
                  if (null != messageByReference.message) {
                    tmp7 = user1;
                    if (tmp10(tmp2[63])(messageByReference.message)) {
                      tmp7 = user1;
                      if (null != messageByReference.message.messageReference) {
                        tmp7 = user1;
                        if (null != messageByReference.message.messageReference.guild_id) {
                          const guild_id2 = messageByReference.message.messageReference.guild_id;
                          tmp10Result = tmp10(tmp2[50]);
                          const _HermesInternal = HermesInternal;
                          obj = { guildId: null };
                          obj[0] = guild_id2;
                          tmp10Result.openLazy(tmp(tmp2[38])(tmp2[68], tmp2.paths), "GuildProfileActionSheet:" + guild_id2, obj);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          tmpResult = tmp(tmp2[66]);
        }
        if (null != tmp7) {
          const obj1 = { userId: null, channelId: null, messageId: null, sourceAnalyticsLocations: null };
          obj1[0] = tmp7.id;
          obj1[1] = messageData.messageChannel.id;
          obj1[2] = messageId;
          obj1[3] = arg1;
          outer1_1(tmp2[69])(obj1);
        }
      }
    };
    obj.handleTapThreadEmbed = function handleTapThreadEmbed(closure_0) {
      const messageId = uiStore(outer1_3[39]).getNativeSyntheticEventData(closure_0).messageId;
      const messageData = uiStore.getMessageData(messageId);
      if (null != messageData) {
        const messageChannel = messageData.messageChannel;
        const guildId = messageChannel.getGuildId();
        if (tmp4) {
          const current = obj2.getParams().chatInputRef.current;
          if (current != null) {
            current.blur();
          }
          const result = obj2.handleTransitionToThread(guildId, outer1_1(outer1_3[70]).castMessageIdAsChannelId(messageId), outer1_62.EMBED);
          const obj3 = outer1_1(outer1_3[70]);
        }
        tmp4 = null != messageId && null != guildId;
      }
    };
    obj.handleTapReply = function handleTapReply(nativeEvent) {
      let message;
      let messageChannel;
      const messageData = uiStore.getMessageData(nativeEvent.nativeEvent.originId);
      if (null != messageData) {
        ({ messageChannel, message } = messageData);
        let guildId = messageChannel.getGuildId();
        if (guildId == null) {
          guildId = outer1_49;
        }
        const messageReference = message.messageReference;
        let message_id;
        if (messageReference != null) {
          message_id = messageReference.message_id;
        }
        if (null != message_id) {
          const messageByReference = outer1_17.getMessageByReference(message.messageReference);
          outer1_1(outer1_3[71])(message, messageByReference, messageChannel);
          const result = uiStore.handleTransitionToMessage(guildId, messageChannel.id, message_id);
        }
      }
    };
    obj.handleTapSummary = function handleTapSummary(closure_0) {
      let channelId;
      let summaryId;
      let obj = uiStore(outer1_3[39]);
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(closure_0);
      ({ channelId, summaryId } = nativeSyntheticEventData);
      if (null != uiStore.getMessageData(nativeSyntheticEventData.messageId)) {
        const findSummaryResult = outer1_18.findSummary(channelId, summaryId);
        if (null != findSummaryResult) {
          obj = { summary: null };
          obj[0] = findSummaryResult;
          outer1_1(tmp2[50]).openLazy(uiStore(tmp2[38])(tmp2[72], tmp2.paths), "SummaryActionSheet", obj);
          const obj2 = outer1_1(tmp2[50]);
        }
      }
    };
    obj.handleTapSummaryJump = function handleTapSummaryJump(closure_0) {
      let channelId;
      let message;
      let messageChannel;
      let summaryId;
      const nativeSyntheticEventData = uiStore(outer1_3[39]).getNativeSyntheticEventData(closure_0);
      ({ channelId, summaryId } = nativeSyntheticEventData);
      const messageData = uiStore.getMessageData(nativeSyntheticEventData.messageId);
      if (null != messageData) {
        ({ messageChannel, message } = messageData);
        let guildId = messageChannel.getGuildId();
        if (guildId == null) {
          guildId = outer1_49;
        }
        const result = uiStore.handleTransitionToMessage(guildId, messageChannel.id, message.id);
        outer1_1(outer1_3[73]).setSelectedSummary(channelId, summaryId);
        const obj3 = outer1_1(outer1_3[73]);
      }
    };
    obj.handleLongPressMessage = function handleLongPressMessage(closure_0) {
      let componentMediaIndex;
      let mediaIndex;
      let mediaType;
      let message;
      let messageChannel;
      let messageId;
      let obj = uiStore(outer1_3[39]);
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(closure_0);
      ({ messageId, mediaIndex, mediaType, componentMediaIndex } = nativeSyntheticEventData);
      const messageData = uiStore.getMessageData(messageId);
      if (null != messageData) {
        ({ messageChannel, message } = messageData);
        if (!obj2.isModalOrActionsheetObstructing()) {
          const user = outer1_35.getUser(message.author.id);
          if (null != user) {
            if (null == outer1_34.getUploaderFileForMessageId(messageId)) {
              let tmpResult = tmp(tmp2[59]);
              tmpResult = tmp(tmp2[74]);
              const longPressSelectedMedia = tmpResult.getLongPressSelectedMedia(message, mediaIndex, mediaType, tmpResult.asComponentId(nativeSyntheticEventData.componentId), componentMediaIndex);
              obj = { analyticsLocation: null, canAddNewReactions: null, channel: null, chatInputRef: null, message: null, selectedMedia: null, user: null };
              obj = { section: null, object: null };
              obj[0] = outer1_47.CHANNEL;
              obj[1] = outer1_44.MESSAGE;
              obj[0] = obj;
              obj[1] = outer1_1(tmp2[76])(messageChannel);
              obj[2] = messageChannel;
              obj[3] = obj2.params.chatInputRef;
              obj[4] = message;
              obj[5] = longPressSelectedMedia;
              obj[6] = user;
              const result = tmp(tmp2[75]).showLongPressMessageActionSheet(obj);
              const tmpResult1 = tmp(tmp2[75]);
            }
          }
        }
      }
    };
    obj.handleInitiateReply = function handleInitiateReply(nativeEvent) {
      let message;
      let messageChannel;
      let obj = uiStore(outer1_3[39]);
      const messageData = uiStore.getMessageData(obj.getNativeSyntheticEventData(nativeEvent).messageId);
      if (null != messageData) {
        ({ messageChannel, message } = messageData);
        if (nativeEvent.nativeEvent.triggerHaptic) {
          const result = uiStore(tmp2[77]).triggerHapticFeedback(outer1_1(tmp2[78]).IMPACT_LIGHT);
          const tmpResult = uiStore(tmp2[77]);
        }
        obj = { message: null, channel: null, chatInputRef: null, actionSource: null, invertible: true };
        obj[0] = message;
        obj[1] = messageChannel;
        obj[2] = uiStore.params.chatInputRef;
        let str = nativeEvent.nativeEvent.location;
        if (str == null) {
          str = "message_swipe";
        }
        obj[3] = str;
        outer1_1(tmp2[79])(obj);
        const tmp7 = outer1_1(tmp2[79]);
      }
    };
    obj.handleInitiateThread = function handleInitiateThread(closure_0) {
      let message;
      let messageChannel;
      const messageData = uiStore.getMessageData(uiStore(outer1_3[39]).getNativeSyntheticEventData(closure_0).messageId);
      if (null != messageData) {
        ({ messageChannel, message } = messageData);
        let tmpResult = tmp(tmp2[77]);
        const result = tmpResult.triggerHapticFeedback(outer1_1(tmp2[78]).IMPACT_LIGHT);
        if (message.hasFlag(outer1_50.HAS_THREAD)) {
          tmpResult = tmp(tmp2[80]);
          tmpResult.transitionToGuild(messageChannel.guild_id, tmp6(tmp2[70]).castMessageIdAsChannelId(message.id));
          const tmp6Result = tmp6(tmp2[70]);
        } else {
          tmp(tmp2[81]).handleCreateThread(messageChannel, message, "Message Shortcut");
          const tmpResult1 = tmp(tmp2[81]);
        }
        tmp6 = outer1_1;
      }
    };
    obj.handleInitiateEdit = function handleInitiateEdit(closure_0) {
      let message;
      let messageChannel;
      const chatInputRef = uiStore.params.chatInputRef;
      const messageData = uiStore.getMessageData(uiStore(outer1_3[39]).getNativeSyntheticEventData(closure_0).messageId);
      if (null != messageData) {
        ({ messageChannel, message } = messageData);
        const currentUser = outer1_35.getCurrentUser();
        let id;
        if (currentUser != null) {
          id = currentUser.id;
        }
        if (tmp7(message, id)) {
          const tmpResult = uiStore(tmp2[81]);
          tmpResult.handleEdit(message, messageChannel, chatInputRef, "message_swipe", true);
        }
        tmp7 = outer1_1(tmp2[82]);
      }
    };
    obj.handleTapMessage = function handleTapMessage(closure_0) {
      let embedChannel;
      let flaggedMessageId;
      let message;
      let messageChannel;
      let obj = uiStore(outer1_3[39]);
      const messageData = uiStore.getMessageData(obj.getNativeSyntheticEventData(closure_0).messageId);
      if (null != messageData) {
        ({ messageChannel, message } = messageData);
        const guildId = messageChannel.getGuildId();
        if (null != message) {
          if (null != guildId) {
            const type = message.type;
            if (outer1_52.GUILD_BOOST !== type) {
              if (tmp16.GUILD_BOOST_TIER_1 !== type) {
                if (tmp16.GUILD_BOOST_TIER_2 !== type) {
                  if (tmp16.GUILD_BOOST_TIER_3 !== type) {
                    if (tmp16.AUTO_MODERATION_ACTION === type) {
                      let tmpResult = tmp(tmp2[85]);
                      if (tmpResult.isAutomodMessageRecord(message)) {
                        tmpResult = tmp(tmp2[85]);
                        const result = tmpResult.extractAutomodMessageFields(message);
                        ({ embedChannel, flaggedMessageId } = result);
                        if (tmp5) {
                          let id;
                          if (embedChannel != null) {
                            id = embedChannel.id;
                          }
                          const result1 = uiStore.handleTransitionToMessage(guildId, id, flaggedMessageId);
                        }
                        tmp5 = null != flaggedMessageId && null != embedChannel;
                      }
                    }
                  }
                }
              }
            }
            outer1_2(tmp2[83]).openApplyBoostModal(guildId);
            const obj4 = outer1_2(tmp2[83]);
            obj = { location: null };
            obj = { section: null, object: null };
            obj[0] = outer1_47.CHANNEL_TEXT_AREA;
            obj[1] = outer1_44.BOOST_ANNOUNCEMENT_UPSELL;
            obj[0] = obj;
            outer1_1(tmp2[84]).trackWithMetadata(outer1_41.PREMIUM_GUILD_PROMOTION_OPENED, obj);
            const obj5 = outer1_1(tmp2[84]);
          }
        }
      }
    };
    obj.handleDoubleTapMessage = function handleDoubleTapMessage(closure_0) {
      let message;
      let messageChannel;
      const messageData = uiStore.getMessageData(uiStore(outer1_3[39]).getNativeSyntheticEventData(closure_0).messageId);
      if (null != messageData) {
        ({ messageChannel, message } = messageData);
        const result = uiStore(outer1_3[86]).handleAddDefaultDoubleTapReaction(message, messageChannel);
        const tmpResult = uiStore(outer1_3[86]);
      }
    };
    obj.handleTapSeparator = function handleTapSeparator(nativeEvent) {
      nativeEvent = nativeEvent.nativeEvent;
      if (!uiStore.isModalOrActionsheetObstructing()) {
        const type = nativeEvent.type;
        if (outer1_36.LOAD_MORE_BEFORE === type) {
          const params2 = obj.params;
          const moreBefore = params2.loadMoreBefore();
        } else if (tmp.LOAD_MORE_AFTER === type) {
          const params = obj.params;
          const moreAfter = params.loadMoreAfter();
        } else if (tmp.TOGGLE_BLOCKED_MESSAGES === type) {
          if (null != nativeEvent.context) {
            obj.handleReveal(nativeEvent.context);
          }
        }
      }
    };
    obj.handleTapCancelUploadItem = function handleTapCancelUploadItem(nativeEvent) {
      const uploaderId = nativeEvent.nativeEvent.uploaderId;
      const uploads = uploaderId.params.uploads;
      if (null != uploads) {
        const found = uploads.find((id) => id.id === uploaderId);
        if (null != found) {
          const result = uiStore(outer1_3[77]).triggerHapticFeedback(outer1_1(outer1_3[78]).IMPACT_LIGHT);
          const obj = uiStore(outer1_3[77]);
          outer1_1(outer1_3[87]).cancelUploadItem(found, tmp);
          const obj2 = outer1_1(outer1_3[87]);
        }
      }
    };
    obj.handleTapSpotifyResource = function handleTapSpotifyResource(message) {
      const author = message.author;
      if (null != author) {
        if (null != author.id) {
          const findActivityResult = sortActivity.findActivity(author.id, (type) => type.type === constants.LISTENING);
          uiStore(closure_3[88]).openTrack(findActivityResult);
          const obj = uiStore(closure_3[88]);
        }
      }
    };
    obj.handleTapActivityResource = function handleTapActivityResource(message) {
      let application;
      let author;
      let deeplink_uri;
      let id;
      ({ author, application } = message);
      if (null != author) {
        if (null != message.activity) {
          if (null != application) {
            if (null != author.id) {
              const channel_id = message.channel_id;
              const channel = store.getChannel(channel_id);
              ({ id, deeplink_uri } = application);
              const applicationActivity = sortActivity.getApplicationActivity(author.id, id);
              if (null != applicationActivity) {
                const session_id = applicationActivity.session_id;
                if (null != session_id) {
                  if (obj11.isIOS()) {
                    let ANDROID = constants3.IOS;
                  } else {
                    let tmp31Result = tmp31(tmp32[62]);
                    if (tmp31Result.isAndroid()) {
                      ANDROID = constants3.ANDROID;
                    }
                  }
                  let hasFlagResult = null != applicationActivity.flags;
                  if (hasFlagResult) {
                    tmp31Result = tmp31(tmp32[89]);
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
                    let obj = { presenceActivity: null, currentUserPresenceActivity: null, currentUserId: null, message: null, application: null, isEmbeddedApplication: null, isFrameApplication: false, isGameLaunchable: null };
                    obj[0] = applicationActivity;
                    obj[1] = callback(tmp32[91])(updateActivities, filterPlayingActivities, id);
                    obj[2] = id.getId();
                    obj[3] = message;
                    obj[4] = application;
                    obj[5] = hasFlagResult;
                    obj[7] = flag;
                    const canJoin = tmp31(tmp32[90]).getCanJoin(obj);
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
                          const items = [tmp33(tmp32[35]).INVITE_EMBED];
                          const result = tmp31(tmp32[94]).startAuthorizationNoHook(application, items);
                        }
                        tmp31Result3 = tmp31(tmp32[93]);
                      }
                      tmp31Result2 = tmp31(tmp32[92]);
                    }
                    let tmp33Result = tmp33(tmp32[95]);
                    obj = { userId: null, sessionId: null, application: null, channelId: null, messageId: null, applicationActivity: null, remotePartyId: null, embedded: null, source: null, analyticsLocations: null };
                    obj[0] = author.id;
                    obj[1] = session_id;
                    obj[2] = application;
                    obj[3] = channel_id;
                    obj[4] = message.id;
                    obj[5] = applicationActivity;
                    obj[6] = tmp11;
                    obj[7] = hasFlagResult;
                    obj[8] = constants5.MESSAGE_EMBED;
                    const items1 = [callback(tmp32[35]).INVITE_EMBED];
                    obj[9] = items1;
                    const joined = tmp33Result.join(obj);
                    const obj1 = { type: null, source: null, userId: null, guildId: null, channelId: null, applicationId: null, partyId: null, messageId: null, analyticsLocations: null, remoteJoinPlatform: null };
                    obj1[0] = constants4.JOIN;
                    obj1[1] = constants5.MESSAGE_EMBED;
                    obj1[2] = message.author.id;
                    let guild_id;
                    tmp33Result = tmp33(tmp32[96]);
                    if (channel != null) {
                      guild_id = channel.guild_id;
                    }
                    obj1[3] = guild_id;
                    obj1[4] = channel_id;
                    obj1[5] = id;
                    const party2 = applicationActivity.party;
                    let id1;
                    if (party2 != null) {
                      id1 = party2.id;
                    }
                    obj1[6] = id1;
                    obj1[7] = message.id;
                    const items2 = [callback(tmp32[35]).INVITE_EMBED];
                    obj1[8] = items2;
                    obj1[9] = remoteJoinPlatform;
                    tmp33Result(obj1);
                    const tmp31Result1 = tmp31(tmp32[90]);
                  }
                  obj11 = uiStore(closure_3[62]);
                }
              } else if (null != deeplink_uri) {
                callback(closure_3[97]).openURL(deeplink_uri, constants10.SAFARI);
                const obj2 = { type: null, source: null, userId: null, guildId: null, channelId: null, applicationId: null, messageId: null, analyticsLocations: null };
                obj2[0] = constants4.PLAY;
                obj2[1] = constants5.MESSAGE_EMBED;
                obj2[2] = message.author.id;
                let guild_id1;
                const obj9 = callback(closure_3[97]);
                const tmp24 = callback;
                const tmp25 = closure_3;
                if (channel != null) {
                  guild_id1 = channel.guild_id;
                }
                obj2[3] = guild_id1;
                obj2[4] = channel_id;
                obj2[5] = application.id;
                obj2[6] = message.id;
                const items3 = [tmp24(tmp25[35]).INVITE_EMBED];
                obj2[7] = items3;
                callback(closure_3[96])(obj2);
                const tmp28 = callback(closure_3[96]);
              }
            }
          }
        }
      }
    };
    obj.handleTapStreamRequest = function handleTapStreamRequest(message) {
      let obj = uiStore(closure_3[98]);
      if (callback3(obj.canFulfillStreamRequest(message, true), 1)[0]) {
        const channel = store.getChannel(message.channel_id);
        if (null != channel) {
          let tmpResult = tmp(tmp2[99]);
          const oSRequirement = tmpResult.getOSRequirement();
          tmpResult = tmp(tmp2[99]);
          obj = { channel: null, hasPermission: true, isActive: false, osRequirement: null };
          obj[0] = channel;
          obj[3] = oSRequirement;
          tmpResult.getStreamPressHandler(obj)();
        }
      }
    };
    obj.handleTapActivityInviteToJoin = function handleTapActivityInviteToJoin(message) {
      let application;
      let author;
      ({ author, application } = message);
      if (null != author) {
        if (null != application) {
          if (null != author.id) {
            applicationActivity = applicationActivity.getApplicationActivity(application.id, true);
            if (null != applicationActivity) {
              let obj = callback(closure_3[100]);
              obj = { channelId: null, type: null, activity: null, location: null };
              obj[0] = message.channel_id;
              obj[1] = constants.JOIN;
              obj[2] = applicationActivity;
              obj[3] = constants5.MESSAGE_EMBED;
              obj.sendActivityInvite(obj);
            }
          }
        }
      }
    };
    obj.handleTapGuildEventInvite = function handleTapGuildEventInvite(arg0) {
      let guildEventId;
      let invite;
      let isMember;
      let primary;
      let recurrenceId;
      let secondary;
      ({ invite, primary, guildEventId, recurrenceId } = arg0);
      ({ isMember, secondary } = arg0);
      if (null != invite) {
        const guild_scheduled_event = invite.guild_scheduled_event;
        let id;
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
              callback(closure_3[57])(invite);
              return { action: "accept" };
            }
          }
          if (secondary) {
            let inviteKeyFromExtraData = null;
            if (null != invite) {
              let obj = { baseCode: null, guildScheduledEventId: null };
              obj[0] = invite.code;
              obj[1] = guildEventId;
              inviteKeyFromExtraData = uiStore(closure_3[101]).generateInviteKeyFromExtraData(obj);
              const obj4 = uiStore(closure_3[101]);
            }
            let tmp19;
            if (null != inviteKeyFromExtraData) {
              tmp19 = callback(closure_3[103])(inviteKeyFromExtraData);
            }
            uiStore(closure_3[102]).openShareEvent(guildScheduledEvent, tmp19);
            return { action: "share" };
          } else {
            if (primary) {
              if (callback4(guildScheduledEvent)) {
                const result = uiStore(closure_3[102]).transitionToEventDetailsFromInvite(guildScheduledEvent, recurrenceId);
                obj = { action: "transition" };
                const obj3 = uiStore(closure_3[102]);
              }
              return obj;
            }
            obj = uiStore(closure_3[102]);
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
      let obj = uiStore(closure_3[104]);
      if (!obj.isMetaQuest()) {
        let tmpResult = tmp(tmp2[105]);
        const result = tmpResult.findQuestOrReplacement(code, initializeState.quests, initializeState.excludedQuests);
        if (null != result) {
          tmpResult = tmp(tmp2[106]);
          obj = { scrollToQuestId: null, fromContent: null };
          obj[0] = result.id;
          obj[1] = tmp(tmp2[107]).QuestContent.QUEST_EMBED_MOBILE;
          tmpResult.openQuestHome(obj);
        } else {
          obj = { fromContent: null };
          obj[0] = tmp(tmp2[107]).QuestContent.QUEST_EMBED_MOBILE;
          tmp(tmp2[106]).openQuestHome(obj);
          const tmpResult1 = tmp(tmp2[106]);
        }
      }
    };
    obj._questsEmbedOnAccept = function _questsEmbedOnAccept(code) {
      let obj = uiStore(closure_3[104]);
      if (obj.isMetaQuest()) {
        let tmpResult = tmp(tmp2[106]);
        tmpResult.openDiscordQuestsFAQ();
      } else {
        tmpResult = tmp(tmp2[105]);
        const result = tmpResult.findQuestOrReplacement(code, initializeState.quests, initializeState.excludedQuests);
        if (null != result) {
          if (null == initializeState.questEnrollmentBlockedUntil) {
            if (!tmp4.isQuestAccessSuspended) {
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
                obj = { questContent: null, questContentCTA: null, sourceQuestContent: null };
                obj[0] = tmp(tmp2[107]).QuestContent.QUEST_EMBED_MOBILE;
                obj[1] = tmp(tmp2[109]).QuestContentCTA.ACCEPT_QUEST;
                obj[2] = tmp(tmp2[107]).QuestContent.QUEST_EMBED_MOBILE;
                tmp(tmp2[108]).enrollInQuest(result.id, obj);
                const tmpResult1 = tmp(tmp2[108]);
              }
              obj = { scrollToQuestId: null, fromContent: null };
              obj[0] = result.id;
              obj[1] = tmp(tmp2[107]).QuestContent.QUEST_EMBED_MOBILE;
              tmp(tmp2[106]).openQuestHome(obj);
              const tmpResult2 = tmp(tmp2[106]);
            }
          }
          const obj1 = { scrollToQuestId: null, fromContent: null };
          obj1[0] = result.id;
          obj1[1] = tmp(tmp2[107]).QuestContent.QUEST_EMBED_MOBILE;
          tmp(tmp2[106]).openQuestHome(obj1);
          const tmpResult3 = tmp(tmp2[106]);
        } else {
          const obj2 = { fromContent: null };
          obj2[0] = tmp(tmp2[107]).QuestContent.QUEST_EMBED_MOBILE;
          tmp(tmp2[106]).openQuestHome(obj2);
          const tmpResult4 = tmp(tmp2[106]);
        }
        tmp4 = initializeState;
      }
    };
    obj.handleTapInviteEmbedAccept = function handleTapInviteEmbedAccept(closure_0) {
      let index;
      let primary;
      let secondary;
      let trackInviteEmbedActioned = uiStore;
      let result8 = outer1_3;
      let obj = uiStore(outer1_3[39]);
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(closure_0);
      let obj1 = set;
      ({ index, primary, secondary } = nativeSyntheticEventData);
      const messageData = set.getMessageData(nativeSyntheticEventData.messageId);
      if (null != messageData) {
        let id = messageData.message;
        const current = obj1.getParams().chatInputRef.current;
        if (current != null) {
          current.dismissKeyboard();
        }
        if (id.type === outer1_52.THREAD_STARTER_MESSAGE) {
          if (null != id.messageReference) {
            const message = outer1_17.getMessageByReference(id.messageReference).message;
            if (null != message) {
              let codedLinks = message.codedLinks;
            }
          }
          let tmp7;
          if (codedLinks != null) {
            tmp7 = codedLinks[index];
          }
          if (null != tmp7) {
            if (tmp7.type === trackInviteEmbedActioned(result8[110]).CodedLinkType.INVITE) {
              const invite = outer1_26.getInvite(tmp7.code);
              if (null != invite) {
                id = outer1_21.getId();
                let id1;
                if (invite != null) {
                  const guild = invite.guild;
                  if (guild != null) {
                    id1 = guild.id;
                  }
                }
                const isMemberResult = outer1_24.isMember(id1, id);
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
                        const member = obj15.getMember(invite.guild.id, id);
                        let roles;
                        if (member != null) {
                          roles = member.roles;
                        }
                        if (roles == null) {
                          roles = [];
                        }
                        set = new Set(roles);
                        roles = invite.roles;
                        flag = roles.some((id) => !set.has(id.id));
                      }
                    }
                  }
                }
                const result = trackInviteEmbedActioned(result8[101]);
                const inviteInstanceId = result.getInviteInstanceId(tmp7.code, id.id);
                const result1 = trackInviteEmbedActioned(result8[56]);
                if (result1.isGuildScheduledEventInviteEmbed(invite)) {
                  obj = { invite: null, isMember: null, primary: null, secondary: null };
                  obj[0] = invite;
                  obj[1] = isMemberResult;
                  obj[2] = primary;
                  obj[3] = secondary;
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
                  const result4 = trackInviteEmbedActioned(result8[56]);
                  const guildInviteExtendedType = result4.getGuildInviteExtendedType(invite);
                  if (guildInviteExtendedType === trackInviteEmbedActioned(result8[56]).GuildInviteExtendedType.VOICE_CHANNEL) {
                    const result5 = trackInviteEmbedActioned(result8[111]);
                    obj = { guildId: null, location: "mobile_invite_embed" };
                    obj[0] = id3;
                    if (result5.getVoiceChannelListInviteExperiment(obj).enabled) {
                      const result6 = trackInviteEmbedActioned(result8[112]);
                      const result7 = trackInviteEmbedActioned(result8[113]);
                      trackInviteEmbedActioned = result7.trackInviteEmbedActioned;
                      obj1 = { invite: null, action: null, inviter_id: null, invite_message_id: null, invite_instance_id: null };
                      obj1[0] = invite;
                      obj1[1] = str5;
                      str5 = id.author.id;
                      obj1[2] = str5;
                      id = id.id;
                      obj1[3] = id;
                      obj1[4] = inviteInstanceId;
                      result8 = trackInviteEmbedActioned(obj1, items1);
                    }
                    const items = [outer1_1(result8[35]).INVITE_EMBED, outer1_1(result8[35]).VOICE_CHANNEL_LIST_INVITE_EMBED];
                    items1 = items;
                  }
                }
                items1 = [outer1_1(result8[35]).INVITE_EMBED];
                obj15 = outer1_24;
              }
            } else if (tmp7.type === trackInviteEmbedActioned(result8[110]).CodedLinkType.CHANNEL_LINK) {
              const obj2 = { guildId: null, channelId: null, message: null };
              [obj6[0], obj6[1]] = outer1_8(tmp7.code.split("/"), 2);
              obj2[2] = id;
              const result9 = obj1.handleTapVoiceChannelPreview(obj2);
              const str3 = tmp7.code;
              const tmp14 = outer1_8(tmp7.code.split("/"), 2);
            } else {
              if (tmp7.type !== trackInviteEmbedActioned(result8[110]).CodedLinkType.BUILD_OVERRIDE) {
                if (tmp7.type !== trackInviteEmbedActioned(result8[110]).CodedLinkType.MANUAL_BUILD_OVERRIDE) {
                  if (tmp7.type === trackInviteEmbedActioned(result8[110]).CodedLinkType.QUESTS_EMBED) {
                    obj1._questsEmbedOnAccept(tmp7.code);
                  } else if (tmp7.type === trackInviteEmbedActioned(result8[110]).CodedLinkType.SOCIAL_LAYER_STOREFRONT) {
                    const result10 = trackInviteEmbedActioned(result8[115]);
                    const obj3 = { skuId: null, analyticsLocations: null };
                    obj3[0] = outer1_8(tmp7.code.split("-"), 1)[0];
                    const items2 = [outer1_1(result8[35]).GIFT_CODE_EMBED];
                    obj3[1] = items2;
                    const result11 = result10.openSocialLayerStorefrontProductDetailsModal(obj3);
                    const str = tmp7.code;
                  }
                }
              }
              const result12 = trackInviteEmbedActioned(result8[114]);
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
    obj.handleTapInviteEmbed = function handleTapInviteEmbed(closure_0) {
      let primary;
      let secondary;
      let obj = uiStore(outer1_3[39]);
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(closure_0);
      ({ primary, secondary } = nativeSyntheticEventData);
      let obj1 = uiStore;
      const messageData = uiStore.getMessageData(nativeSyntheticEventData.messageId);
      if (null != messageData) {
        const message2 = messageData.message;
        const current = obj1.getParams().chatInputRef.current;
        if (current != null) {
          current.dismissKeyboard();
        }
        if (message2.type === outer1_52.THREAD_STARTER_MESSAGE) {
          if (null != message2.messageReference) {
            const message = outer1_17.getMessageByReference(message2.messageReference).message;
            if (null != message) {
              let codedLinks = message.codedLinks;
            }
          }
          let tmp8;
          if (codedLinks != null) {
            tmp8 = codedLinks[nativeSyntheticEventData.index];
          }
          if (null != tmp8) {
            const id = outer1_21.getId();
            if (tmp8.type !== tmp(tmp2[110]).CodedLinkType.INVITE) {
              if (tmp8.type !== tmp(tmp2[110]).CodedLinkType.EMBEDDED_ACTIVITY_INVITE) {
                if (tmp8.type === tmp(tmp2[110]).CodedLinkType.TEMPLATE) {
                  outer1_1(tmp2[118]).showModal(tmp8.code);
                  const obj13 = outer1_1(tmp2[118]);
                } else {
                  if (tmp8.type !== tmp(tmp2[110]).CodedLinkType.BUILD_OVERRIDE) {
                    if (tmp8.type !== tmp(tmp2[110]).CodedLinkType.MANUAL_BUILD_OVERRIDE) {
                      if (tmp8.type === tmp(tmp2[110]).CodedLinkType.EXPERIMENT) {
                        let tmpResult = tmp(tmp2[119]);
                        const experimentFromEmbedURL = tmpResult.getExperimentFromEmbedURL(tmp8.code);
                        if (null != experimentFromEmbedURL) {
                          tmpResult = tmp(tmp2[119]);
                          const experimentTreatmentFromEmbedURL = tmpResult.getExperimentTreatmentFromEmbedURL(tmp8.code);
                          const result = tmp(tmp2[120]).handleCodedLinkExperimentEmbedTap(experimentFromEmbedURL, experimentTreatmentFromEmbedURL);
                          const tmpResult1 = tmp(tmp2[120]);
                        }
                      } else if (tmp8.type === tmp(tmp2[110]).CodedLinkType.EVENT) {
                        const tmp21 = outer1_8(tmp8.code.split("-"), 3);
                        obj = { invite: null, isMember: null, primary: null, secondary: null, guildEventId: null, recurrenceId: null };
                        obj[1] = outer1_24.isMember(tmp21[0], id);
                        obj[2] = primary;
                        obj[3] = secondary;
                        obj[4] = tmp21[1];
                        obj[5] = tmp21[2];
                        const result1 = obj1.handleTapGuildEventInvite(obj);
                        const str6 = tmp8.code;
                      } else if (tmp8.type === tmp(tmp2[110]).CodedLinkType.CHANNEL_LINK) {
                        obj = { guildId: null, channelId: null, message: null };
                        [obj7[0], obj7[1]] = outer1_8(tmp8.code.split("/"), 2);
                        obj[2] = message2;
                        const result2 = obj1.handleTapVoiceChannelPreview(obj);
                        const str4 = tmp8.code;
                        const tmp18 = outer1_8(tmp8.code.split("/"), 2);
                      } else if (tmp8.type === tmp(tmp2[110]).CodedLinkType.APP_DIRECTORY_PROFILE) {
                        const application = outer1_11.getApplication(tmp8.code);
                        if (null != application) {
                          obj1 = { applicationId: null, customInstallUrl: null, installParams: null, integrationTypesConfig: null, source: "app_directory_profile_embed" };
                          ({ id: obj6[0], custom_install_url: obj6[1], install_params: obj6[2], integration_types_config: obj6[3] } = application);
                          tmp(tmp2[121]).installApplication(obj1);
                          const tmpResult2 = tmp(tmp2[121]);
                        }
                      } else if (tmp8.type === tmp(tmp2[110]).CodedLinkType.QUESTS_EMBED) {
                        obj1._questsEmbedOnPress(tmp8.code);
                      } else {
                        if (tmp8.type !== tmp(tmp2[110]).CodedLinkType.SOCIAL_LAYER_STOREFRONT) {
                          if (tmp8.type !== tmp(tmp2[110]).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP) {
                            if (tmp8.type !== tmp(tmp2[110]).CodedLinkType.APP_OAUTH2_LINK) {
                              const _Error = Error;
                              const _HermesInternal = HermesInternal;
                              throw Error("Unknown coded link type: " + tmp8.type);
                            } else {
                              const application1 = outer1_10.getApplication(tmp8.code);
                              if (null != application1) {
                                const obj2 = { application_id: null };
                                obj2[0] = application1.id;
                                outer1_1(tmp2[84]).trackWithMetadata(outer1_41.APP_OAUTH2_LINK_EMBED_CTA_CLICKED, obj2);
                                const obj27 = outer1_1(tmp2[84]);
                                ({ id: obj30[0], customInstallUrl: obj30[1], installParams: obj30[2], integrationTypesConfig: obj30[3] } = application1);
                                tmp(tmp2[121]).installApplication({ applicationId: null, customInstallUrl: null, installParams: null, integrationTypesConfig: null, source: "app_oauth2_link_embed" });
                                const obj3 = { applicationId: null, customInstallUrl: null, installParams: null, integrationTypesConfig: null, source: "app_oauth2_link_embed" };
                                const tmpResult3 = tmp(tmp2[121]);
                              }
                            }
                          }
                        }
                        const obj4 = { skuId: null, analyticsLocations: null };
                        obj4[0] = outer1_8(tmp8.code.split("-"), 1)[0];
                        const items = [outer1_1(tmp2[35]).GIFT_CODE_EMBED];
                        obj4[1] = items;
                        const result3 = tmp(tmp2[115]).openSocialLayerStorefrontProductDetailsModal(obj4);
                        const str2 = tmp8.code;
                        const tmpResult4 = tmp(tmp2[115]);
                      }
                    }
                  }
                  tmp(tmp2[114]).toggleOverride(tmp8.code);
                  const tmpResult5 = tmp(tmp2[114]);
                }
              }
            }
            const invite = outer1_26.getInvite(tmp8.code);
            let id1;
            if (invite != null) {
              const guild = invite.guild;
              if (guild != null) {
                id1 = guild.id;
              }
            }
            const isMemberResult = outer1_24.isMember(id1, id);
            if (null != invite) {
              const guild4 = invite.guild;
              let id2;
              if (guild4 != null) {
                id2 = guild4.id;
              }
              let enabled = null != id2;
              if (enabled) {
                const guildInviteExtendedType = tmp(tmp2[56]).getGuildInviteExtendedType(invite);
                enabled = guildInviteExtendedType === tmp(tmp2[56]).GuildInviteExtendedType.VOICE_CHANNEL;
                const tmpResult6 = tmp(tmp2[56]);
              }
              if (enabled) {
                const obj5 = { guildId: null, location: "mobile_invite_embed" };
                obj5[0] = id2;
                enabled = tmp(tmp2[111]).getVoiceChannelListInviteExperiment(obj5).enabled;
                const tmpResult7 = tmp(tmp2[111]);
              }
              if (enabled) {
                enabled = tmp(tmp2[112]).canShowVoiceChannelListInviteEmbed(invite);
                const tmpResult8 = tmp(tmp2[112]);
              }
              if (tmpResult9.isGuildScheduledEventInviteEmbed(invite)) {
                const obj6 = { invite: null, isMember: null, primary: null, secondary: null };
                obj6[0] = invite;
                obj6[1] = isMemberResult;
                obj6[2] = primary;
                obj6[3] = secondary;
                let str8 = obj1.handleTapGuildEventInvite(obj6).action;
              } else {
                if (enabled) {
                  let channel = invite.channel;
                  let id3;
                  if (channel != null) {
                    id3 = channel.id;
                  }
                  if (null != id3) {
                    channel = outer1_22.getChannel(invite.channel.id);
                    str8 = "noop";
                    if (null != channel) {
                      const guildId = channel.getGuildId();
                      let tmp48 = null != guildId;
                      if (tmp48) {
                        tmp48 = guildId !== outer1_32.getGuildId();
                      }
                      if (tmp48) {
                        tmp(tmp2[116]).transitionToGuild(guildId);
                        const tmpResult10 = tmp(tmp2[116]);
                      }
                      const result4 = tmp(tmp2[44]).navigateToVoiceChannel(channel, "Mobile Invite Embed");
                      str8 = "voice channel preview";
                      const tmpResult11 = tmp(tmp2[44]);
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
                  const obj20 = outer1_1(tmp2[50]);
                  const obj7 = { guildId: null, context: null, inviteKey: null };
                  obj7[0] = invite.guild.id;
                  const combined = "GuildProfileActionSheet:" + invite.guild.id;
                  obj7[1] = tmp(tmp2[117]).GuildProfileCTAContext.INVITE;
                  obj7[2] = tmp8.code;
                  obj20.openLazy(tmp(tmp2[38])(tmp2[68], tmp2.paths), combined, obj7);
                  str8 = "show profile";
                  const tmp42 = tmp(tmp2[38])(tmp2[68], tmp2.paths);
                } else if (isMemberResult) {
                  const result5 = obj1.handleTransitionToInviteChannel(invite);
                  str8 = "transition";
                } else {
                  const result6 = obj1.handleAcceptInstantInvite(invite, tmp(tmp2[101]).getInviteInstanceId(tmp8.code, message2.id));
                  str8 = "accept";
                  const tmpResult12 = tmp(tmp2[101]);
                }
              }
              const INVITE_EMBED = outer1_1(tmp2[35]).INVITE_EMBED;
              if (enabled) {
                const items1 = [INVITE_EMBED, tmp52(tmp2[35]).VOICE_CHANNEL_LIST_INVITE_EMBED];
                let items2 = items1;
              } else {
                items2 = [INVITE_EMBED];
              }
              tmp52 = outer1_1;
              tmpResult9 = tmp(tmp2[56]);
              let id5;
              if (invite != null) {
                const guild3 = invite.guild;
                if (guild3 != null) {
                  id5 = guild3.id;
                }
              }
              const result7 = tmp(tmp2[113]).trackInviteServerClicked(id5, str8, items2);
              const tmpResult13 = tmp(tmp2[113]);
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
      guildId = outer1_32.getGuildId();
      channelId = outer1_31.getChannelId(guildId);
      const channel = outer1_22.getChannel(channelId);
      if (null != channel) {
        const obj = { author_id: null, link_guild_id: null, link_channel_id: null, link_channel_type: null, guild_id: null, channel_id: null };
        obj[0] = message.message.author.id;
        obj[1] = guildId;
        obj[2] = channelId;
        obj[3] = channel.type;
        obj[4] = guildId;
        obj[5] = channelId;
        outer1_1(outer1_3[122]).track(outer1_41.CHANNEL_LINK_PREVIEW_JOINED, obj);
        const current = uiStore.getParams().chatInputRef.current;
        if (current != null) {
          current.dismissKeyboard();
        }
        const obj8 = outer1_1(outer1_3[122]);
        const tmp10 = outer1_1;
        if (!obj2.shouldShowAgeGateForVoiceChannel(channelId)) {
          let tmp4Result = tmp4(tmp11[124]);
          if (!tmp4Result.shouldShowSpoilerGateForChannelId(channelId)) {
            if (channel.isGuildStageVoice()) {
              tmp4Result = tmp4(tmp11[125]);
              tmp4Result.connectAndOpen(channel);
            } else {
              const voiceChannel = tmp10(tmp11[126]).selectVoiceChannel(channelId);
              const tmp10Result = tmp10(tmp11[126]);
              tmp4(tmp11[44]).openChannelCallModal(channel);
              const tmp4Result1 = tmp4(tmp11[44]);
            }
          }
        }
        obj2 = uiStore(outer1_3[123]);
        uiStore(outer1_3[80]).transitionTo(outer1_54.CHANNEL(guildId, channelId));
        const tmp4Result2 = uiStore(outer1_3[80]);
      }
    };
    obj.handleTapJoinActivity = function handleTapJoinActivity(closure_0) {
      const messageData = uiStore.getMessageData(uiStore(outer1_3[39]).getNativeSyntheticEventData(closure_0).messageId);
      if (null != messageData) {
        const message = messageData.message;
        const activity = message.activity;
        if (null != activity) {
          const type = activity.type;
          if (type === outer1_37.LISTEN) {
            const result = obj2.handleTapSpotifyResource(message);
          } else if (type === tmp2.JOIN) {
            const result1 = obj2.handleTapActivityResource(message);
          } else if (type === tmp2.STREAM_REQUEST) {
            const result2 = obj2.handleTapStreamRequest(message);
          }
        }
      }
    };
    obj.handleTapJoinRichPresence = function handleTapJoinRichPresence(closure_0) {
      const messageData = uiStore.getMessageData(uiStore(outer1_3[39]).getNativeSyntheticEventData(closure_0).messageId);
      if (null != messageData) {
        const message = messageData.message;
        const activity = message.activity;
        if (null != activity) {
          const type = activity.type;
          if (type === outer1_37.LISTEN) {
            const result = obj2.handleTapSpotifyResource(message);
          } else if (type === tmp2.JOIN) {
            const result1 = obj2.handleTapActivityResource(message);
          } else if (type === tmp2.JOIN_REQUEST) {
            const result2 = obj2.handleTapActivityInviteToJoin(message);
          } else if (type === tmp2.STREAM_REQUEST) {
            const result3 = obj2.handleTapStreamRequest(message);
          }
        }
      }
    };
    obj.handleAcceptInstantInvite = function handleAcceptInstantInvite(invite, inviteInstanceId) {
      let obj = uiStore(outer1_3[127]);
      if (!obj.handleNSFWGuildInvite(invite)) {
        if (null != invite.code) {
          if (invite.type === outer1_58.GUILD) {
            if (tmpResult.isAtGuildCapAndNonPremium()) {
              obj = { initialUpsellKey: null, analyticsLocation: null, analyticsLocations: null, analyticsProperties: null };
              obj[0] = outer1_55.GUILD_CAP;
              obj = { page: null };
              obj[0] = outer1_46.INVITE_EMBED;
              obj[1] = obj;
              const items = [outer1_1(tmp2[35]).INVITE_EMBED];
              obj[2] = items;
              const obj1 = { type: null };
              obj1[0] = outer1_60.GUILD_CAP_MODAL_UPSELL;
              obj[3] = obj1;
              const result = outer1_1(tmp2[129]).handleShowUpsellAlert(obj);
            }
            tmpResult = uiStore(tmp2[128]);
          }
          let obj2 = outer1_1(tmp2[113]);
          obj2 = { inviteKey: null, context: null, callback: null };
          obj2[0] = invite.code;
          if (null != inviteInstanceId) {
            const obj3 = { invite_instance_id: null };
            obj3[0] = inviteInstanceId;
            let obj4 = obj3;
          } else {
            obj4 = {};
          }
          const obj5 = { location: "Invite Button Embed" };
          const merged = Object.assign(obj4);
          obj2[1] = obj5;
          obj2[2] = uiStore.handleTransitionToInviteChannel;
          obj2.acceptInvite(obj2);
        }
      }
    };
    obj.handleTransitionToInviteChannel = function handleTransitionToInviteChannel(invite) {
      callback(closure_3[113]).transitionToInvite(invite, { forceTransition: true });
    };
    obj.handleTapGiftCodeEmbed = function handleTapGiftCodeEmbed() {

    };
    obj.handleTapGiftCodeAccept = function handleTapGiftCodeAccept(closure_0) {
      let obj = uiStore(outer1_3[39]);
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(closure_0);
      const giftCode = nativeSyntheticEventData.giftCode;
      const currentUser = outer1_35.getCurrentUser();
      if (null != currentUser) {
        if (currentUser.verified) {
          const value = outer1_23.get(giftCode);
          if (null != value) {
            if (null != value.giftStyle) {
              const messageData = uiStore.getMessageData(nativeSyntheticEventData.messageId);
            }
            if (uiStore.params.paymentsBlocked) {
              tmp12(tmp2[131])();
            } else {
              let tmp12Result = tmp12(tmp2[122]);
              tmp12Result.track(outer1_41.OPEN_MODAL, { type: "gift_accept", location: null });
              tmp12Result = tmp12(tmp2[132]);
              obj = { code: null, customMessage: null, soundId: null, emojiName: null };
              obj[0] = giftCode;
              let content;
              if (null != messageData) {
                content = messageData.message.content;
              }
              obj[1] = content;
              let id;
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
              obj[2] = id;
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
              obj[3] = name;
              tmp12Result.pushLazy(uiStore(tmp2[38])(tmp2[133], tmp2.paths), obj);
              const tmp15 = uiStore(tmp2[38])(tmp2[133], tmp2.paths);
            }
          }
        } else {
          outer1_1(tmp2[130]).open();
          const obj2 = outer1_1(tmp2[130]);
        }
      }
    };
    obj.handleTapReferralRedeem = function handleTapReferralRedeem() {
      let obj = uiStore(closure_3[134]);
      if (obj.canOpenPremiumPlanDirectlyForReferralTrial()) {
        obj = { analyticsLocation: null, analyticsLocations: null, premiumType: null };
        obj = { page: null };
        obj[0] = constants6.REFERRAL_MESSAGE_EMBED;
        obj[0] = obj;
        const items = [callback(tmp2[35]).REFERRAL_MESSAGE_EMBED];
        obj[1] = items;
        obj[2] = TIER_2.TIER_2;
        callback(tmp2[135])(obj);
        const tmp6 = callback(tmp2[135]);
      } else {
        const obj1 = { screen: null };
        obj1[0] = constants9.PREMIUM;
        uiStore(tmp2[136]).openUserSettings(obj1);
        const tmpResult = uiStore(tmp2[136]);
      }
    };
    obj.getGiftIntentCtaContext = function getGiftIntentCtaContext(closure_0) {
      let giftIntentType;
      let messageId;
      let recipientUserId;
      let obj = uiStore(outer1_3[39]);
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(closure_0);
      ({ messageId, recipientUserId, giftIntentType } = nativeSyntheticEventData);
      const parseGiftIntentTypeResult = uiStore(outer1_3[137]).parseGiftIntentType(giftIntentType);
      if (null == parseGiftIntentTypeResult) {
        return null;
      } else {
        const params = uiStore.params;
        const message = params.getMessage(messageId);
        let channel_id;
        if (message != null) {
          channel_id = message.channel_id;
        }
        if (channel_id == null) {
          channel_id = uiStore.params.selectedChannelId;
        }
        obj = { channel: null, giftIntentType: null, messageId: null, recipientUserId: null };
        obj[0] = outer1_22.getChannel(channel_id);
        obj[1] = parseGiftIntentTypeResult;
        obj[2] = messageId;
        obj[3] = recipientUserId;
        return obj;
      }
      const obj2 = uiStore(outer1_3[137]);
    };
    obj.handleTapGiftIntentPrimaryCta = function handleTapGiftIntentPrimaryCta(closure_0) {
      let channel;
      let recipientUserId;
      const giftIntentCtaContext = uiStore.getGiftIntentCtaContext(closure_0);
      if (null != giftIntentCtaContext) {
        ({ channel, recipientUserId } = giftIntentCtaContext);
        const userAffinity = outer1_20.getUserAffinity(recipientUserId);
        let obj = { gift_intent_type: null, affinity: null, location_stack: null };
        obj[0] = giftIntentCtaContext.giftIntentType;
        let dmProbability;
        if (userAffinity != null) {
          dmProbability = userAffinity.dmProbability;
        }
        obj[1] = dmProbability;
        obj = outer1_63;
        obj[2] = outer1_63;
        outer1_1(outer1_3[122]).track(outer1_41.GIFT_INTENT_ACTION_BUTTON_CLICKED, obj);
        let obj1 = uiStore(outer1_3[138]);
        obj = { recipientUserId: null, analyticsLocation: null, analyticsLocations: null, navigationParams: null };
        obj[0] = recipientUserId;
        let guild_id;
        if (channel != null) {
          guild_id = channel.guild_id;
        }
        if (null != guild_id) {
          let DM_CHANNEL = outer1_46.GUILD_CHANNEL;
        } else {
          DM_CHANNEL = outer1_46.DM_CHANNEL;
        }
        obj1 = { page: null };
        obj1[0] = DM_CHANNEL;
        obj[1] = obj1;
        obj[2] = obj;
        obj = { presentation: "card" };
        obj[3] = obj;
        obj = obj1.openGiftModal(obj);
        const obj5 = outer1_1(outer1_3[122]);
        const tmp11 = outer1_3;
      }
    };
    obj.handleTapGiftIntentSecondaryCta = function handleTapGiftIntentSecondaryCta(closure_0) {
      const giftIntentCtaContext = uiStore.getGiftIntentCtaContext(closure_0);
      if (tmp2) {
        let obj = outer1_1(outer1_3[122]);
        obj = { gift_intent_type: null, cta_type: "send_message", location_stack: null };
        obj[0] = giftIntentCtaContext.giftIntentType;
        obj[2] = outer1_63;
        obj.track(outer1_41.GIFT_INTENT_CARD_SECONDARY_CTA_CLICKED, obj);
        obj = { channelId: null, giftIntentType: null };
        obj[0] = giftIntentCtaContext.channel.id;
        obj[1] = giftIntentCtaContext.giftIntentType;
        outer1_1(outer1_3[132]).pushLazy(uiStore(outer1_3[38])(outer1_3[139], outer1_3.paths), obj);
        const obj3 = outer1_1(outer1_3[132]);
      }
    };
    obj.handleGiftIntentCardViewed = function handleGiftIntentCardViewed(closure_0) {
      let obj = uiStore(closure_3[39]);
      const parseGiftIntentTypeResult = uiStore(closure_3[137]).parseGiftIntentType(obj.getNativeSyntheticEventData(closure_0).giftIntentType);
      if (null != parseGiftIntentTypeResult) {
        obj = { name: null, type: null, properties: null };
        obj[0] = tmp(tmp2[141]).ImpressionNames.GIFT_INTENT_CARD;
        obj[1] = tmp(tmp2[141]).ImpressionTypes.VIEW;
        obj = { gift_intent_type: null, num_friend_anniversaries: null };
        obj[0] = parseGiftIntentTypeResult;
        obj[1] = friendAnniversaries.getFriendAnniversaries().length;
        obj[2] = obj;
        tmp(tmp2[140]).trackImpression(obj);
        const tmpResult = tmp(tmp2[140]);
      }
    };
    obj.handleTapEmoji = function handleTapEmoji(emojiNode) {
      if (!uiStore.isModalOrActionsheetObstructing()) {
        uiStore(outer1_3[42]).contentHandlers.onTapEmoji(emojiNode);
        const contentHandlers = uiStore(outer1_3[42]).contentHandlers;
      }
    };
    obj.handleTapTimestamp = function handleTapTimestamp(nativeEvent) {
      uiStore(closure_3[42]).contentHandlers.onTapTimestamp(nativeEvent);
    };
    obj.handleTapInlineCode = function handleTapInlineCode(nativeEvent) {
      uiStore(closure_3[42]).contentHandlers.onTapInlineCode(nativeEvent);
    };
    obj.handleTapRoleIcon = function handleTapRoleIcon(nativeEvent) {
      let roleIconSource;
      let roleIconUnicodeEmoji;
      let roleName;
      ({ roleName, roleIconSource, roleIconUnicodeEmoji } = nativeEvent.nativeEvent);
      let obj = callback(closure_3[142]);
      obj = { key: "ROLE_NAME-" + roleName, content: null, icon: null };
      let combined = roleName;
      if (null != roleIconUnicodeEmoji) {
        const _HermesInternal = HermesInternal;
        combined = "" + roleIconUnicodeEmoji + " " + roleName;
      }
      obj[1] = combined;
      let tmp2;
      if (null != roleIconSource) {
        obj = { uri: null };
        obj[0] = roleIconSource;
        tmp2 = obj;
      }
      obj[2] = tmp2;
      obj.open(obj);
    };
    obj.handleTapVoiceChannelBadge = function handleTapVoiceChannelBadge(closure_0) {
      const channel = store.getChannel(uiStore(closure_3[39]).getNativeSyntheticEventData(closure_0).channelId);
      if (null != channel) {
        const result = uiStore(closure_3[44]).navigateToVoiceChannel(channel);
        const tmpResult = uiStore(closure_3[44]);
      }
    };
    obj.handleTapGameIcon = function handleTapGameIcon(nativeEvent) {
      let gameApplicationId;
      let timestamp;
      ({ gameApplicationId, timestamp } = nativeEvent.nativeEvent);
      if (!uiStore.isModalOrActionsheetObstructing()) {
        let obj = outer1_1(outer1_3[50]);
        obj = { applicationId: null, messageTimestamp: null };
        obj[0] = gameApplicationId;
        obj[1] = timestamp;
        obj.openLazy(uiStore(outer1_3[38])(outer1_3[143], outer1_3.paths), "MessageGameIconActionSheet", obj);
      }
    };
    obj.handleTapSuppressNotificationsIcon = function handleTapSuppressNotificationsIcon() {
      let obj = callback(closure_3[142]);
      obj = { key: "SUPPRESS_NOTIFICATIONS_TOOLTIP", content: null, icon: null };
      const intl = uiStore(closure_3[46]).intl;
      obj[1] = intl.string(uiStore(closure_3[46]).t["RO/KYj"]);
      obj[2] = callback(closure_3[144]);
      obj.open(obj);
    };
    obj.handleTapConnectionsRoleTag = function handleTapConnectionsRoleTag(closure_0) {
      let channelId;
      let guildId;
      let roleId;
      let userId;
      const nativeSyntheticEventData = uiStore(closure_3[39]).getNativeSyntheticEventData(closure_0);
      ({ userId, guildId, channelId, roleId } = nativeSyntheticEventData);
      const obj = uiStore(closure_3[39]);
      callback(closure_3[50]).openLazy(uiStore(closure_3[38])(closure_3[145], closure_3.paths), "ConnectionsRoleMessageBadgeActionSheet", { userId, guildId, channelId, roleId });
    };
    obj.handleTapTimeoutIcon = function handleTapTimeoutIcon() {
      let obj = callback(closure_3[142]);
      obj = { key: "GUILD_COMMUNICATION_DISABLED_ICON_TOOLTIP_BODY", content: null, icon: null };
      const intl = uiStore(closure_3[46]).intl;
      obj[1] = intl.string(uiStore(closure_3[46]).t["AeYyL+"]);
      obj[2] = callback(closure_3[144]);
      obj.open(obj);
    };
    obj.handleReveal = function handleReveal(context) {
      const messageData = uiStore.getMessageData(context);
      if (null != messageData) {
        let tmp5 = null;
        if (uiStore.params.revealedMessageId !== context) {
          tmp5 = context;
        }
        outer1_1(outer1_3[146]).revealMessage(messageData.messageChannel.id, tmp5);
        const obj = outer1_1(outer1_3[146]);
      }
    };
    obj.handleTapButtonActionComponent = function handleTapButtonActionComponent(closure_0) {
      let componentId;
      let message;
      let messageChannel;
      let messageId;
      let obj = uiStore(outer1_3[39]);
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(closure_0);
      ({ messageId, componentId } = nativeSyntheticEventData);
      const messageData = uiStore.getMessageData(messageId);
      if (null != messageData) {
        ({ messageChannel, message } = messageData);
        let id = message.applicationId;
        if (id == null) {
          id = message.author.id;
        }
        let tmpResult = tmp(tmp2[147]);
        tmpResult = tmp(tmp2[74]);
        const value = tmpResult.flattenComponents(message.components).get(tmpResult.asComponentId(componentId));
        let tmp6 = null != value;
        if (tmp6) {
          tmp6 = value.type === tmp(tmp2[148]).ComponentType.BUTTON;
        }
        if (tmp6) {
          tmp6 = null != value.customId;
        }
        if (tmp6) {
          if (value.style !== tmp(tmp2[148]).ButtonStyle.PREMIUM) {
            obj = { componentType: null, messageId: null, messageFlags: null, customId: null, componentId: null, applicationId: null, channelId: null, guildId: null };
            obj[0] = tmp(tmp2[148]).ComponentType.BUTTON;
            obj[1] = messageId;
            obj[2] = message.flags;
            obj[3] = value.customId;
            const tmpResult1 = tmp(tmp2[150]);
            obj[4] = tmp(tmp2[74]).asComponentId(componentId);
            obj[5] = id;
            obj[6] = messageChannel.id;
            obj[7] = messageChannel.getGuildId();
            const result = tmpResult1.executeMessageComponentInteraction(obj);
            const tmpResult2 = tmp(tmp2[74]);
          } else {
            obj = { title: null, body: null, confirmText: null };
            const intl = tmp(tmp2[46]).intl;
            obj[0] = intl.string(tmp(tmp2[46]).t["ZtdF0+"]);
            const intl2 = tmp(tmp2[46]).intl;
            obj[1] = intl2.string(tmp(tmp2[46]).t["0BEZLT"]);
            const intl3 = tmp(tmp2[46]).intl;
            obj[2] = intl3.string(tmp(tmp2[46]).t.BddRzS);
            outer1_1(tmp2[149]).show(obj);
            const obj8 = outer1_1(tmp2[149]);
          }
        }
        const flattenComponentsResult = tmpResult.flattenComponents(message.components);
      }
    };
    obj.handleTapSelectActionComponent = function handleTapSelectActionComponent(closure_0) {
      let applicationId;
      let closure_1;
      let message;
      let messageChannel;
      let obj = uiStore(outer1_3[39]);
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(closure_0);
      const messageId = nativeSyntheticEventData.messageId;
      const messageData = messageId.getMessageData(messageId);
      if (null != messageData) {
        ({ messageChannel, message } = messageData);
        ({ flags: closure_1, applicationId } = message);
        if (applicationId == null) {
          applicationId = message.author.id;
        }
        const id = messageChannel.id;
        const guildId = messageChannel.getGuildId();
        let tmpResult = tmp(tmp2[147]);
        tmpResult = tmp(tmp2[74]);
        const value = tmpResult.flattenComponents(message.components).get(tmpResult.asComponentId(nativeSyntheticEventData.componentId));
        let closure_5 = value;
        if (null != value) {
          const parents = tmp(tmp2[147]).getParents(message.components, value);
          let first;
          if (parents != null) {
            first = parents[0];
          }
          let type;
          if (first != null) {
            type = first.type;
          }
          let tmp9;
          if (type === tmp(tmp2[148]).ComponentType.LABEL) {
            tmp9 = first;
          }
          obj = { channelId: null, guildId: null, containerId: null, labelComponent: null, allowEmpty: null, onSubmit: null };
          obj[0] = id;
          obj[1] = guildId;
          obj[2] = messageId;
          obj[3] = tmp9;
          const tmpResult1 = tmp(tmp2[147]);
          obj[4] = tmp(tmp2[147]).canSelectBeEmpty(value, "message");
          obj[5] = function onSubmit(localState) {
            let obj = messageId(id[150]);
            obj = { componentType: value.type, messageId, messageFlags: closure_1, customId: value.customId, componentId: value.id, applicationId, channelId: id, guildId, localState };
            const result = obj.executeMessageComponentInteraction(obj);
          };
          type = value.type;
          if (tmp(tmp2[148]).ComponentType.STRING_SELECT === type) {
            const _HermesInternal2 = HermesInternal;
            const obj9 = outer1_1(tmp2[50]);
            obj = { selectionActionComponent: null };
            obj[0] = value;
            const combined = "StringSelectComponentActionSheet:" + messageId;
            const merged = Object.assign(obj);
            obj9.openLazy(tmp(tmp2[38])(tmp2[151], tmp2.paths), combined, obj);
            const tmp19 = tmp(tmp2[38])(tmp2[151], tmp2.paths);
          } else {
            if (tmp(tmp2[148]).ComponentType.USER_SELECT !== type) {
              if (tmp(tmp2[148]).ComponentType.ROLE_SELECT !== type) {
                if (tmp(tmp2[148]).ComponentType.MENTIONABLE_SELECT !== type) {
                  if (tmp(tmp2[148]).ComponentType.CHANNEL_SELECT === type) {
                    const _HermesInternal3 = HermesInternal;
                    const obj12 = outer1_1(tmp2[50]);
                    const obj1 = { selectionActionComponent: null };
                    obj1[0] = value;
                    const combined1 = "ChannelSelectComponentActionSheet:" + messageId;
                    const merged1 = Object.assign(obj);
                    obj12.openLazy(tmp(tmp2[38])(tmp2[153], tmp2.paths), combined1, obj1);
                    const tmp28 = tmp(tmp2[38])(tmp2[153], tmp2.paths);
                  }
                }
              }
            }
            const _HermesInternal = HermesInternal;
            const obj7 = outer1_1(tmp2[50]);
            const obj2 = { selectionActionComponent: null };
            obj2[0] = value;
            const combined2 = "MentionableSelectComponentActionSheet:" + messageId;
            const merged2 = Object.assign(obj);
            obj7.openLazy(tmp(tmp2[38])(tmp2[152], tmp2.paths), combined2, obj2);
            const tmp11 = tmp(tmp2[38])(tmp2[152], tmp2.paths);
          }
          const tmpResult2 = tmp(tmp2[147]);
        }
        const flattenComponentsResult = tmpResult.flattenComponents(message.components);
      }
    };
    obj.handleTapWelcomeReply = function handleTapWelcomeReply(closure_0) {
      let message;
      let messageChannel;
      const nativeSyntheticEventData = uiStore(outer1_3[39]).getNativeSyntheticEventData(closure_0);
      const stickerId = nativeSyntheticEventData.stickerId;
      const messageData = uiStore.getMessageData(nativeSyntheticEventData.messageId);
      if (null != messageData) {
        ({ messageChannel, message } = messageData);
        if (message.type === outer1_52.USER_JOIN) {
          let tmpResult = tmp(tmp2[154]);
          const result = tmpResult.handleWelcomeCtaClicked(messageChannel, message, stickerId);
        } else if (message.type === tmp5.ROLE_SUBSCRIPTION_PURCHASE) {
          tmpResult = tmp(tmp2[155]);
          const result1 = tmpResult.handleRoleSubscriptionPurchaseSystemMessageCtaClicked(messageChannel, message, stickerId);
        }
      }
    };
    obj.handleTapInviteToSpeak = function handleTapInviteToSpeak(closure_0) {
      let message;
      let messageChannel;
      const messageData = uiStore.getMessageData(uiStore(outer1_3[39]).getNativeSyntheticEventData(closure_0).messageId);
      if (null != messageData) {
        ({ messageChannel, message } = messageData);
        if (message.type === outer1_52.STAGE_RAISE_HAND) {
          uiStore(tmp2[156]).setUserSuppress(messageChannel, message.author.id, false);
          const tmpResult = uiStore(tmp2[156]);
          outer1_1(tmp2[146]).deleteMessage(messageChannel.id, message.id, true);
          const obj3 = outer1_1(tmp2[146]);
        }
      }
    };
    obj.handleTapAutoModerationActions = function handleTapAutoModerationActions(closure_0) {
      let message;
      let messageChannel;
      let obj = uiStore(outer1_3[39]);
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(closure_0);
      const channelId = nativeSyntheticEventData.channelId;
      let obj1 = uiStore;
      if (!uiStore.isModalOrActionsheetObstructing()) {
        const messageData = obj1.getMessageData(nativeSyntheticEventData.messageId);
        if (null != messageData) {
          ({ message, messageChannel } = messageData);
          let tmpResult = tmp(tmp2[85]);
          if (tmpResult.isAutomodMessageRecord(message)) {
            if (messageChannel.id === channelId) {
              const channel = outer1_22.getChannel(channelId);
              let guild_id;
              if (channel != null) {
                guild_id = channel.guild_id;
              }
              const guild = outer1_25.getGuild(guild_id);
              if (null != guild) {
                tmpResult = tmp(tmp2[85]);
                if (tmpResult.isAutomodMessageRecord(message)) {
                  if (tmpResult1.isAutomodNotification(message)) {
                    obj = { source: null, alertType: null, messageId: null };
                    const guildIncident = outer1_12.getGuildIncident(guild.id);
                    obj[0] = tmp(tmp2[157]).GuildIncidentActionSources.MESSAGE;
                    obj[1] = tmp(tmp2[158]).getIncidentAlertType(guildIncident);
                    obj[2] = message.id;
                    const tmpResult2 = tmp(tmp2[158]);
                    obj = { guild: null, analyticsData: null };
                    obj[0] = guild;
                    obj[1] = obj;
                    outer1_1(tmp2[50]).openLazy(tmp(tmp2[38])(tmp2[159], tmp2.paths), "GuildIncidentActionsActionSheet", obj);
                    const obj9 = outer1_1(tmp2[50]);
                  }
                  tmpResult1 = tmp(tmp2[85]);
                }
                if (outer1_24.isMember(guild.id, message.author.id)) {
                  obj1 = { user: null, guild: null };
                  obj1[0] = message.author;
                  obj1[1] = guild;
                  tmp9(tmp2[160])(obj1);
                } else {
                  const obj2 = { key: "GUILD_AUTOMOD_ERROR_MESSAGE_NOT_MEMBER", content: null, icon: null };
                  const intl = tmp(tmp2[46]).intl;
                  obj2[1] = intl.string(tmp(tmp2[46]).t.UsD2YP);
                  obj2[2] = tmp9(tmp2[144]);
                  tmp9(tmp2[142]).open(obj2);
                  const tmp9Result = tmp9(tmp2[142]);
                }
              }
            }
          }
        }
      }
    };
    obj.handleTapAutoModerationFeedback = function handleTapAutoModerationFeedback(closure_0) {
      let channelId;
      let content;
      let decisionId;
      let message;
      let messageChannel;
      let messageId;
      let obj = uiStore(outer1_3[39]);
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(closure_0);
      ({ messageId, channelId } = nativeSyntheticEventData);
      const messageData = uiStore.getMessageData(messageId);
      if (null != messageData) {
        ({ message, messageChannel } = messageData);
        let tmpResult = tmp(tmp2[85]);
        if (tmpResult.isAutomodMessageRecord(message)) {
          if (messageChannel.id === channelId) {
            const channel = outer1_22.getChannel(channelId);
            if (null != channel) {
              tmpResult = tmp(tmp2[85]);
              if (tmpResult.isAutomodMessageRecord(message)) {
                if (tmpResult1.isAutomodNotification(message)) {
                  obj = { guildId: null, messageId: null };
                  obj[0] = channel.guild_id;
                  obj[1] = messageId;
                  outer1_1(tmp2[50]).openLazy(tmp(tmp2[38])(tmp2[161], tmp2.paths), "GuildRaidResolveActionSheet", obj);
                  const obj5 = outer1_1(tmp2[50]);
                }
                tmpResult1 = tmp(tmp2[85]);
              }
              const result = tmp(tmp2[85]).extractAutomodMessageFields(message);
              ({ decisionId, content } = result);
              const tmpResult3 = tmp(tmp2[162]);
              tmpResult3.openSubmitFeedback(messageId, content, decisionId, channel);
              const tmpResult2 = tmp(tmp2[85]);
            }
          }
        }
      }
    };
    obj.handleTransitionToThread = function handleTransitionToThread(arg0, arg1, arg2) {
      const channel = store.getChannel(arg1);
      if (null != channel) {
        let obj = uiStore(closure_3[163]);
        obj = { source: null, navigationReplace: false };
        obj[0] = arg2;
        obj.transitionToThread(channel, obj);
      }
    };
    obj.handleTransitionToMessage = function handleTransitionToMessage(guildId, id, flaggedMessageId) {
      uiStore(closure_3[163]).transitionToMessage(id, flaggedMessageId, { navigationReplace: false });
    };
    obj.handleTapFollowForumPost = function handleTapFollowForumPost(closure_0) {
      const nativeSyntheticEventData = uiStore(outer1_3[39]).getNativeSyntheticEventData(closure_0);
      const messageData = uiStore.getMessageData(nativeSyntheticEventData.messageId);
      if (null != messageData) {
        const result = uiStore(outer1_3[59]).handleToggleFollowForumPost(messageData.messageChannel, outer1_19.hasJoined(nativeSyntheticEventData.channelId));
        const tmpResult = uiStore(outer1_3[59]);
      }
    };
    obj.handleTapShareForumPost = function handleTapShareForumPost(closure_0) {
      let channelId;
      let guildId;
      let obj = uiStore(closure_3[39]);
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(closure_0);
      ({ guildId, channelId } = nativeSyntheticEventData);
      obj = { section: constants7.CHANNEL };
      const result = uiStore(closure_3[59]).handleCopyLinkForumPost(guildId, channelId, obj);
    };
    obj.handleTapSeeMore = function handleTapSeeMore() {

    };
    obj.handleCopyText = function handleCopyText(nativeEvent) {
      uiStore(closure_3[164]).copy(nativeEvent.nativeEvent.text);
      const obj = uiStore(closure_3[164]);
      const result = uiStore(closure_3[165]).presentCopiedToClipboard();
    };
    obj.handleTapTag = function handleTapTag(closure_0) {
      const messageData = uiStore.getMessageData(uiStore(outer1_3[39]).getNativeSyntheticEventData(closure_0).messageId);
    };
    obj.handleTapOpTag = function handleTapOpTag() {
      let obj = outer1_1(outer1_3[142]);
      obj = { key: "FORUM_OP-" + uiStore.params.selectedChannelId, content: uiStore(outer1_3[166]).getForumOriginalPoster };
      obj.open(obj);
    };
    obj.handleMediaAttachmentPlaybackStarted = function handleMediaAttachmentPlaybackStarted(closure_0) {
      let isVoiceMessage;
      let messageId;
      let startDurationSecs;
      let totalDurationSecs;
      const nativeSyntheticEventData = uiStore(outer1_3[39]).getNativeSyntheticEventData(closure_0);
      ({ messageId, totalDurationSecs, startDurationSecs, isVoiceMessage, attachmentId: closure_0 } = nativeSyntheticEventData);
      const messageData = uiStore.getMessageData(messageId);
      if (null != messageData) {
        if (undefined !== isVoiceMessage) {
          if (!isVoiceMessage) {
            const message = messageData.message;
            const contentMessage = message.getContentMessage();
            let found;
            if (contentMessage != null) {
              const attachments = contentMessage.attachments;
              found = attachments.find((id) => id.id === closure_0);
            }
            if (null != found) {
              let tmpResult = tmp(tmp2[168]);
              const result = tmpResult.logMediaAttachmentPlaybackStarted(messageData.messageChannel, found, totalDurationSecs, messageId, startDurationSecs, messageData.message.author.id);
            }
          }
        }
        tmpResult = tmp(tmp2[167]);
        const result1 = tmpResult.logVoiceMessagePlaybackStarted(messageId, totalDurationSecs, startDurationSecs, messageData.message.author.id);
      }
    };
    obj.handleMediaAttachmentPlaybackEnded = function handleMediaAttachmentPlaybackEnded(closure_0) {
      let durationListeningSecs;
      let endDurationSecs;
      let isVoiceMessage;
      let messageId;
      let totalDurationSecs;
      const nativeSyntheticEventData = uiStore(outer1_3[39]).getNativeSyntheticEventData(closure_0);
      ({ messageId, totalDurationSecs, endDurationSecs, durationListeningSecs, isVoiceMessage, attachmentId: closure_0 } = nativeSyntheticEventData);
      const messageData = uiStore.getMessageData(messageId);
      if (null != messageData) {
        if (undefined !== isVoiceMessage) {
          if (!isVoiceMessage) {
            const message = messageData.message;
            const contentMessage = message.getContentMessage();
            let found;
            if (contentMessage != null) {
              const attachments = contentMessage.attachments;
              found = attachments.find((id) => id.id === closure_0);
            }
            if (null != found) {
              let tmpResult = tmp(tmp2[168]);
              const result = tmpResult.logMediaAttachmentPlaybackEnded(messageId, totalDurationSecs, endDurationSecs, messageData.message.author.id, durationListeningSecs, found);
            }
          }
        }
        tmpResult = tmp(tmp2[167]);
        const result1 = tmpResult.logVoiceMessagePlaybackEnded(messageId, totalDurationSecs, endDurationSecs, messageData.message.author.id, durationListeningSecs);
      }
    };
    obj.handleVoiceMessagePlaybackFailed = function handleVoiceMessagePlaybackFailed(closure_0) {
      let errorMessage;
      let messageId;
      let obj = uiStore(closure_3[39]);
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(closure_0);
      ({ messageId, errorMessage } = nativeSyntheticEventData);
      if (errorMessage == null) {
        errorMessage = null;
      }
      const result = uiStore(closure_3[167]).logVoiceMessagePlaybackFailed(messageId, errorMessage);
      const obj2 = uiStore(closure_3[167]);
      obj = { key: "AUDIO_PLAYBACK_FAILED-" + messageId, content: null, icon: null };
      const intl = tmp(tmp2[46]).intl;
      obj[1] = intl.string(uiStore(closure_3[46]).t.gRHMh8);
      obj[2] = callback(closure_3[144]);
      callback(closure_3[142]).open(obj);
    };
    f108898 = undefined;
    f108898 = set((arg0) => {
      let closure_0 = arg0;
      let c2 = 0;
      let c1 = 0;
      let c3 = 0;
      return (function*(arg0) {
        let guildId;
        let parentChannelId;
        let threadId;
        if (c1 === 2) {
          c1 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp5 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c1 = 2;
            if (0 === v0) {
              if (arg0 === 1) {
                c1 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c1 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                const nativeSyntheticEventData = callback(table[39]).getNativeSyntheticEventData(callback);
                ({ guildId, parentChannelId, threadId } = nativeSyntheticEventData);
                const currentUser = outer1_35.getCurrentUser();
                let id;
                if (currentUser != null) {
                  id = currentUser.id;
                }
                const isMemberResult = outer1_24.isMember(guildId, id);
                const channel = outer1_22.getChannel(parentChannelId);
                let tmp25Result = tmp25(tmp26[84]);
                const obj1 = { media_post_id: null, can_access: null, is_member: null };
                obj1[0] = threadId;
                let canViewChannelResult = null != channel;
                if (canViewChannelResult) {
                  tmp25Result = tmp25(tmp26[169]);
                  canViewChannelResult = tmp25Result.canViewChannel(channel);
                }
                obj1[1] = canViewChannelResult;
                obj1[2] = isMemberResult;
                tmp25Result.trackWithMetadata(outer1_41.MEDIA_POST_PREVIEW_EMBED_CLICKED, obj1);
                if (isMemberResult) {
                  const result = tmp25(tmp26[163]).tryTransitionToThreadMessage(parentChannelId, threadId, nativeSyntheticEventData.messageId);
                  const tmp25Result1 = tmp25(tmp26[163]);
                } else {
                  table = 1;
                  const obj2 = { channelId: null };
                  obj2[0] = parentChannelId;
                  v0 = 2;
                  c1 = 1;
                  const obj3 = { value: null, done: false };
                  obj3[0] = v0(tmp26[170]).startLurking(guildId, {}, obj2);
                  return obj3;
                }
                const obj11 = callback(table[39]);
              }
            } else {
              if (1 === tmp6) {
                table = 0;
              } else if (arg0 === 1) {
                c1 = 3;
                throw arg1;
              } else if (arg0 !== 2) {
                table = 0;
              }
              table = 0;
              c1 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
            c1 = 3;
          } catch (tmp16) {
            if (tmp3 === table) {
              c1 = tmp2;
              throw tmp16;
            } else {
              v0 = tmp;
            }
          }
        }
      })();
    });
    obj.handleTapPostPreviewEmbed = function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    obj.handleTapDismissMediaPostSharePrompt = function handleTapDismissMediaPostSharePrompt(closure_0) {
      const obj = uiStore(closure_3[39]);
      const obj2 = callback2(closure_3[171]);
      const result = obj2.dismissMediaPostSharePrompt(callback(closure_3[70]).castMessageIdAsChannelId(obj.getNativeSyntheticEventData(closure_0).messageId));
    };
    obj.handleTapObscuredMediaLearnMore = function handleTapObscuredMediaLearnMore(closure_0) {
      let attachmentId;
      let channelId;
      let embedId;
      let messageId;
      const nativeSyntheticEventData = uiStore(closure_3[39]).getNativeSyntheticEventData(closure_0);
      ({ messageId, channelId, attachmentId, embedId } = nativeSyntheticEventData);
      const obj = uiStore(closure_3[39]);
      callback(closure_3[50]).openLazy(uiStore(closure_3[38])(closure_3[172], closure_3.paths), "ExplicitMediaLearnMore", { messageId, channelId, attachmentId, embedId });
    };
    f108898 = set((arg0) => {
      let closure_0 = arg0;
      let c3 = 0;
      let c4 = 0;
      return (function*(arg0) {
        let attachmentId;
        let channelId;
        let embedId;
        let isReveal;
        let messageId;
        if (c4 === 2) {
          c4 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c4 = 2;
            if (0 === dependencyMap) {
              if (arg0 === 1) {
                c4 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c4 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let closure_2 = tmp5;
                let closure_1 = tmp2;
                isReveal = undefined;
                closure_1 = undefined;
                const nativeSyntheticEventData = callback(10994).getNativeSyntheticEventData(isReveal);
                ({ messageId, channelId, isReveal } = nativeSyntheticEventData);
                ({ attachmentId, embedId } = nativeSyntheticEventData);
                const obj10 = callback(10994);
                if (isReveal) {
                  if (obj11.shouldAgeVerifyForExplicitMedia()) {
                    dependencyMap = 1;
                    c4 = 1;
                    const obj1 = { value: null, done: false };
                    obj1[0] = callback(4560).maybePerformReactiveCheck();
                    return obj1;
                  }
                }
                let obj3 = callback(7107);
                const obj2 = { obscure: null };
                obj2[0] = isReveal;
                const result = obj3.trackToggleMediaObscurityV2(obj2);
                c4 = 3;
                obj11 = callback(7107);
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              closure_1 = arg1;
              if (null != closure_1) {
                let reactiveCheckPassed = "passed" === closure_1;
              } else {
                reactiveCheckPassed = outer1_9.getReactiveCheckPassed();
              }
              if (!reactiveCheckPassed) {
                obj = outer1_1(7842);
                obj3 = { entryPoint: null };
                obj3[0] = callback(7844).AgeVerificationModalEntryPoint.OBSCURED_MEDIA;
                const result1 = obj.showAgeVerificationGetStartedModal(obj3);
              }
            }
            c4 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } catch (tmp25) {
            c4 = tmp;
            throw tmp25;
          }
        }
      })();
    });
    obj.onTapObscuredMediaToggle = function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    obj.handleTapSafetyPolicyNoticeEmbed = function handleTapSafetyPolicyNoticeEmbed(closure_0) {
      const obj = uiStore(closure_3[39]);
      callback(closure_3[132]).pushLazy(uiStore(closure_3[38])(closure_3[177], closure_3.paths), { classificationId: obj.getNativeSyntheticEventData(closure_0).classificationId, shouldRedirectToAccountStanding: true });
    };
    obj.handleTapSafetySystemNotificationCta = function handleTapSafetySystemNotificationCta(nativeEvent) {
      let ctaKey;
      let ctaType;
      ({ ctaType, ctaKey } = nativeEvent.nativeEvent);
      if (constants11.POLICY_VIOLATION_DETAIL === ctaType) {
        if (null != ctaKey) {
          let obj = { classificationId: null, shouldRedirectToAccountStanding: true };
          obj[0] = ctaKey;
          callback(closure_3[132]).pushLazy(uiStore(closure_3[38])(closure_3[177], closure_3.paths), obj);
          const obj2 = callback(closure_3[132]);
        }
      } else if (tmp.LEARN_MORE_LINK === ctaType) {
        if (null != ctaKey) {
          obj = callback(closure_3[97]);
          obj.openURL(ctaKey);
        }
      }
    };
    obj.handleTapPollAnswer = function handleTapPollAnswer(arg0) {
      const result = uiStore.replaceCorrectMessageParams(uiStore(outer1_3[39]).castNativeSyntheticEventData(arg0));
      if (null != result) {
        const result1 = outer1_1(outer1_3[178]).handlePollAnswerTapped(result);
        const obj2 = outer1_1(outer1_3[178]);
      }
    };
    obj.handleTapPollSubmitVote = function handleTapPollSubmitVote(arg0) {
      const result = uiStore.replaceCorrectMessageParams(uiStore(outer1_3[39]).castNativeSyntheticEventData(arg0));
      if (null != result) {
        outer1_1(outer1_3[178]).handlePollSubmitVote(result);
        const obj2 = outer1_1(outer1_3[178]);
      }
    };
    obj.handleTapPollAction = function handleTapPollAction(arg0) {
      const result = uiStore.replaceCorrectMessageParams(uiStore(outer1_3[39]).castNativeSyntheticEventData(arg0));
      if (null != result) {
        const result1 = outer1_1(outer1_3[178]).handlePollActionTapped(result);
        const obj2 = outer1_1(outer1_3[178]);
      }
    };
    obj.handleLongPressPollImage = function handleLongPressPollImage(arg0) {
      let message;
      let messageChannel;
      let obj = uiStore;
      const result = uiStore.replaceCorrectMessageParams(uiStore(outer1_3[39]).castNativeSyntheticEventData(arg0));
      uiStore = result;
      if (null != result) {
        const messageData = obj.getMessageData(result.messageId);
        if (null != messageData) {
          ({ message, messageChannel } = messageData);
          const attachments = message.attachments;
          const findIndexResult = attachments.findIndex((id) => id.id === attachmentId.attachmentId);
          if (null != findIndexResult) {
            let tmpResult = tmp(tmp2[179]);
            const result1 = tmpResult.extractMediaSourcesFromMessage(message, message, messageChannel.guild_id);
            tmpResult = tmp(tmp2[180]);
            obj = { initialSources: null, initialIndex: null, originViewOrOriginLayout: null, analyticsSource: "Channel", channelId: null };
            obj[0] = result1;
            obj[1] = findIndexResult;
            obj[2] = result.layout;
            obj[4] = messageChannel.id;
            tmpResult.openMediaModal(obj);
          }
        }
      }
    };
    obj.handleTapCtaButton = function handleTapCtaButton(closure_0) {
      let callback;
      let channelId;
      let messageId;
      let obj = uiStore(closure_3[39]);
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(closure_0);
      ({ channelId, callback, messageId } = nativeSyntheticEventData);
      if (uiStore(closure_3[181]).CtaButtonType.MARK_AS_FALSE_POSITIVE === callback) {
        let tmpResult = tmp(tmp2[182]);
        const result = tmpResult.handleSenderFalsePositiveFlow(channelId, messageId);
      } else if (tmp(tmp2[181]).CtaButtonType.AGE_VERIFICATION_RETRY === callback) {
        obj = { entryPoint: null };
        obj[0] = tmp(tmp2[176]).AgeVerificationModalEntryPoint.SYSTEM_DM_RETRY_BUTTON;
        const result1 = callback(tmp2[175]).showAgeVerificationGetStartedModal(obj);
        tmpResult = tmp(tmp2[176]);
        const result2 = tmpResult.trackAgeVerificationDmClicked(tmp(tmp2[176]).AgeVerificationDmCta.RETRY, channelId);
        const obj5 = callback(tmp2[175]);
      } else if (tmp(tmp2[181]).CtaButtonType.CONNECT_TO_TEEN === callback) {
        if (!tmpResult1.resumeFamilyCenterConnection()) {
          obj = { screen: null };
          obj[0] = constants9.FAMILY_CENTER;
          tmp(tmp2[136]).openUserSettings(obj);
          const tmpResult2 = tmp(tmp2[136]);
        }
        tmpResult1 = tmp(tmp2[183]);
        const result3 = tmp(tmp2[176]).trackAgeVerificationDmClicked(tmp(tmp2[176]).AgeVerificationDmCta.CONNECT_TO_TEEN, channelId);
        const tmpResult3 = tmp(tmp2[176]);
      }
    };
    obj.handleMessageAccessibilityAction = function handleMessageAccessibilityAction(nativeEvent) {
      let obj = uiStore(outer1_3[39]);
      const messageId = obj.getNativeSyntheticEventData(nativeEvent).messageId;
      let obj1 = uiStore(outer1_3[184]);
      const messageAccessibilityActionFromLabel = obj1.getMessageAccessibilityActionFromLabel(nativeEvent.nativeEvent.action);
      const params = uiStore.params;
      const message = params.getMessage(messageId);
      if (null != message) {
        const channel = outer1_22.getChannel(message.channel_id);
        if (tmp(tmp2[184]).MessageAccessibilityAction.VIEW_PROFILE === messageAccessibilityActionFromLabel) {
          if (message.type === outer1_52.FRIEND_REQUEST_ACCEPTED) {
            if (null != channel) {
              if (channel.isDM()) {
                let id = channel.getRecipientId();
              }
              if (null != id) {
                obj = { userId: null, channelId: null, messageId: null };
                obj[0] = id;
                id = undefined;
                if (channel != null) {
                  id = channel.id;
                }
                obj[1] = id;
                obj[2] = messageId;
                outer1_1(tmp2[69])(obj);
                const tmp12 = outer1_1(tmp2[69]);
              }
            }
          }
          const author2 = message.author;
          if (author2 != null) {
            id = author2.id;
          }
        } else if (tmp(tmp2[184]).MessageAccessibilityAction.REPLY === messageAccessibilityActionFromLabel) {
          if (null != channel) {
            obj = { message: null, channel: null, chatInputRef: null, actionSource: "a11y_action" };
            obj[0] = message;
            obj[1] = channel;
            obj[2] = params.chatInputRef;
            outer1_1(tmp2[79])(obj);
          }
        } else if (tmp(tmp2[184]).MessageAccessibilityAction.ADD_REACTION === messageAccessibilityActionFromLabel) {
          if (null != channel) {
            let tmpResult = tmp(tmp2[60]);
            const result = tmpResult.handleAddNewReactions(channel, message.id);
          }
        } else if (tmp(tmp2[184]).MessageAccessibilityAction.MESSAGE_ACTIONS_MENU === messageAccessibilityActionFromLabel) {
          if (null != channel) {
            tmpResult = tmp(tmp2[75]);
            obj1 = { channel: null, message: null, canAddNewReactions: null, user: null, chatInputRef: null };
            obj1[0] = channel;
            obj1[1] = message;
            obj1[2] = outer1_1(tmp2[76])(channel);
            let id1;
            if (message != null) {
              const author = message.author;
              if (author != null) {
                id1 = author.id;
              }
            }
            obj1[3] = outer1_35.getUser(id1);
            obj1[4] = uiStore.params.chatInputRef;
            const result1 = tmpResult.showLongPressMessageActionSheet(obj1);
          }
        } else if (tmp(tmp2[184]).MessageAccessibilityAction.ADD_QUICK_REACTION === messageAccessibilityActionFromLabel) {
          if (null != channel) {
            const result2 = tmp(tmp2[86]).handleAddDefaultDoubleTapReaction(message, channel);
            const tmpResult1 = tmp(tmp2[86]);
          }
        } else if (tmp(tmp2[184]).MessageAccessibilityAction.EDIT_GDM === messageAccessibilityActionFromLabel) {
          if (null != channel) {
            const obj2 = { channelId: null };
            obj2[0] = channel.id;
            outer1_1(tmp2[185])(obj2);
          }
        } else if (tmp(tmp2[184]).MessageAccessibilityAction.OPEN_PINS === messageAccessibilityActionFromLabel) {
          outer1_1(tmp2[186])(message.channel_id, "pinned-message-system-message");
        } else if (tmp(tmp2[184]).MessageAccessibilityAction.JUMP_TO_MESSAGE === messageAccessibilityActionFromLabel) {
          outer1_1(tmp2[187])(message);
        }
      }
    };
    obj.handleTapForwardFooter = function handleTapForwardFooter(closure_0) {
      const params = uiStore.params;
      const message = params.getMessage(uiStore(outer1_3[39]).getNativeSyntheticEventData(closure_0).messageId);
      if (null != message) {
        outer1_1(outer1_3[188])(message);
      }
    };
    obj.handleTapInlineForward = function handleTapInlineForward(nativeEvent) {
      let obj = uiStore(outer1_3[39]);
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      const params = uiStore.params;
      const message = params.getMessage(nativeSyntheticEventData.messageId);
      if (null != message) {
        let tmpResult = tmp(tmp2[189]);
        const inlineForwardOptions = tmpResult.getInlineForwardOptions(message, nativeSyntheticEventData);
        if (null != inlineForwardOptions) {
          const _Object = Object;
          if (nativeEvent.nativeEvent.triggerHaptic) {
            tmpResult = tmp(tmp2[77]);
            const result = tmpResult.triggerHapticFeedback(outer1_1(tmp2[78]).IMPACT_LIGHT);
          }
          obj = { message: null, source: null, forwardOptions: null };
          obj[0] = message;
          let str = nativeEvent.nativeEvent.location;
          if (str == null) {
            str = "inline-button";
          }
          obj[1] = str;
          let tmp7;
          if (0 !== Object.keys(inlineForwardOptions).length) {
            tmp7 = inlineForwardOptions;
          }
          obj[2] = tmp7;
          tmp(tmp2[190]).openForwardModal(obj);
          const tmpResult1 = tmp(tmp2[190]);
        }
      }
    };
    obj.handleTapSoundmoji = function handleTapSoundmoji(closure_0) {
      const nativeSyntheticEventData = uiStore(closure_3[39]).getNativeSyntheticEventData(closure_0);
      callback(closure_3[191])(nativeSyntheticEventData);
    };
    obj.handleTapClanTagChiplet = function handleTapClanTagChiplet(closure_0) {
      let obj = uiStore(closure_3[39]);
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(closure_0);
      if (tmp4) {
        const _HermesInternal = HermesInternal;
        const obj2 = callback(tmp2[50]);
        obj = { guildId: null };
        obj[0] = nativeSyntheticEventData.guildId;
        obj2.openLazy(uiStore(tmp2[38])(tmp2[68], tmp2.paths), "GuildProfileActionSheet:" + nativeSyntheticEventData.guildId, obj);
        const tmp6 = uiStore(tmp2[38])(tmp2[68], tmp2.paths);
      }
    };
    obj.handleTapContentInventoryEntryEmbed = function handleTapContentInventoryEntryEmbed(closure_0) {
      let obj = uiStore(outer1_3[39]);
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(closure_0);
      const message = uiStore.params.getMessage(nativeSyntheticEventData.messageId);
      if (null != message) {
        obj = { message: null, authorId: null, contentId: null, tappedElement: null };
        obj[0] = message;
        ({ authorId: obj3[1], contentId: obj3[2], tappedElement: obj3[3] } = tmp4);
        const result = uiStore(outer1_3[192]).onTapContentInventoryEntryEmbed(obj);
        const tmpResult = uiStore(outer1_3[192]);
      }
    };
    obj.handleTapCheckpointCard = function handleTapCheckpointCard(closure_0) {
      let obj = uiStore(outer1_3[39]);
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(closure_0);
      const message = uiStore.params.getMessage(nativeSyntheticEventData.messageId);
      if (null != message) {
        obj = { message: null, authorId: null };
        obj[0] = message;
        obj[1] = tmp4.authorId;
        uiStore(outer1_3[193]).onTapCheckpointCard(obj);
        const tmpResult = uiStore(outer1_3[193]);
      }
    };
    obj.handleTapAppMessageEmbed = function handleTapAppMessageEmbed(closure_0) {
      let obj = uiStore(outer1_3[39]);
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(closure_0);
      const message = uiStore.params.getMessage(nativeSyntheticEventData.messageId);
      if (null != message) {
        obj = {};
        const merged = Object.assign(nativeSyntheticEventData);
        obj.message = message;
        const result = uiStore(outer1_3[194]).handleTapAppMessageEmbed(obj);
        const tmpResult = uiStore(outer1_3[194]);
      }
    };
    obj.handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(closure_0) {
      let obj = uiStore(outer1_3[39]);
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(closure_0);
      const message = uiStore.params.getMessage(nativeSyntheticEventData.messageId);
      if (null != message) {
        obj = {};
        const merged = Object.assign(nativeSyntheticEventData);
        obj.message = message;
        const result = uiStore(outer1_3[195]).handleTapPreviewSharedClientTheme(obj);
        const tmpResult = uiStore(outer1_3[195]);
      }
    };
    obj.handleSharedClientThemeViewed = function handleSharedClientThemeViewed(closure_0) {
      let obj = uiStore(outer1_3[39]);
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(closure_0);
      const message = uiStore.params.getMessage(nativeSyntheticEventData.messageId);
      if (null != message) {
        obj = {};
        const merged = Object.assign(nativeSyntheticEventData);
        obj.message = message;
        const result = uiStore(outer1_3[196]).handleSharedClientThemeViewed(obj);
        const tmpResult = uiStore(outer1_3[196]);
      }
    };
    obj.getParams = global;
    return obj;
  }
}
const prototype = MessagesHandlers.prototype;
Object.defineProperty(prototype, "params", {
  get: function params(arg0) {
    return this.getParams();
  },
  set: undefined
});
prototype["replaceCorrectMessageParams"] = function replaceCorrectMessageParams(nativeEvent) {
  let channel_id;
  let id;
  const self = this;
  nativeEvent = nativeEvent.nativeEvent;
  const message = this.params.getMessage(nativeEvent.messageId);
  if (null != message) {
    if (message.type === constants.THREAD_STARTER_MESSAGE) {
      const messageReference = message.messageReference;
      if (null != messageReference) {
        if (null != message.getMessage(messageReference.channel_id, messageReference.message_id)) {
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