// === Module 11097: handleMessagesTapLink ===

// Module 11097 (handleMessagesTapLink)
import router_utils from "router_utils" /* 1101 */;
import ThreadConstants from "ThreadConstants" /* 1114 */;
import AppLauncherNativeConstants from "AppLauncherNativeConstants" /* 1483 */;
import KeyboardTypes from "KeyboardTypes" /* 1610 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ChannelConstants from "ChannelConstants" /* 2051 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import parseURLDefault from "parseURL" /* 4809 */;
import StreamActionCreators from "StreamActionCreators" /* 4971 */;
import useMessageAuthor from "useMessageAuthor" /* 5076 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5718 */;
import PushNotificationConstants from "PushNotificationConstants" /* 6008 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6598 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 6871 */;
import InviteTypeUtils from "InviteTypeUtils" /* 7149 */;
import GuildRoleSubscriptionSystemMessageUtils from "GuildRoleSubscriptionSystemMessageUtils" /* 7429 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7617 */;
import MaskedLinkUtils from "MaskedLinkUtils" /* 7810 */;
import GameProfileActionCreators from "GameProfileActionCreators" /* 8125 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8131 */;
import ApplicationCommandIndexStore from "ApplicationCommandIndexStore" /* 8583 */;
import showChatGDMCustomizeActionSheetDefault from "showChatGDMCustomizeActionSheet" /* 10369 */;
import isAlertOrActionSheetOpen from "isAlertOrActionSheetOpen" /* 11025 */;
import MarkupReactLinkUtils from "MarkupReactLinkUtils" /* 11095 */;
import handleAcceptEventInstantInviteDefault from "handleAcceptEventInstantInvite" /* 11096 */;
import openPinnedMessagesDefault from "openPinnedMessages" /* 11098 */;
import GuildAutomodMessageActionCreators from "GuildAutomodMessageActionCreators" /* 11099 */;
import ApplicationInteractionInfoUtils from "ApplicationInteractionInfoUtils" /* 11100 */;
import showExecutedApplicationCommandPopoutDefault from "showExecutedApplicationCommandPopout" /* 11101 */;
import GuildHighlightsNotificationsActionCreators from "GuildHighlightsNotificationsActionCreators" /* 11104 */;
import ApplicationStore from "ApplicationStore" /* 5056 */;
import GuildAutomodMessageStore from "GuildAutomodMessageStore" /* 7375 */;
import SummaryStore from "SummaryStore" /* 10874 */;
import UserRecord from "UserRecord" /* 1386 */;
import ChannelStore from "ChannelStore" /* 2044 */;
import InviteStore from "InviteStore" /* 4813 */;
import MessageStore from "MessageStore" /* 5049 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

function handleMessagesTapURLLink(data, channelId) {
  let flag = null != data.url;
  if (flag) {
    flag = "" !== data.url;
  }
  if (flag) {
    const node = data.node;
    let flag2 = false;
    if (null != node) {
      flag2 = false;
      if (obj.isLinkTrusted(node)) {
        const payload = parseURLDefault(tmp).payload;
        flag2 = false;
        if (payload.type === constants2.INVITE) {
          flag2 = false;
          if (null != payload.inviteCode) {
            const invite = InviteStore.getInvite(payload.inviteCode);
            let num = null == invite;
            if (!num) {
              num = !InviteTypeUtils.isGuildScheduledEventInviteEmbed(invite);
              const tmp2Result = InviteTypeUtils;
            }
            if (!num) {
              handleAcceptEventInstantInviteDefault(invite);
              num = 0;
            }
            flag2 = !num;
          }
        }
      }
      obj = MarkupReactLinkUtils;
    }
    if (!flag2) {
      const payload2 = parseURLDefault(data.url).payload;
      let flag3 = false;
      if (payload2.type === constants2.GAME_PROFILE) {
        const gameId = payload2.gameId;
        let tmp13;
        if (null != channelId) {
          if (null != data.messageId) {
            const message = MessageStore.getMessage(channelId, data.messageId);
            let id;
            if (message != null) {
              id = message.author.id;
            }
            tmp13 = id;
          }
        }
        const obj2 = { gameId, source: GameProfileAnalyticUtils.GameProfileSources.Deeplink, sourceUserId: tmp13, gameProfileModalChecks: null };
        const obj3 = { shouldOpenGameProfile: true, gameId };
        obj2.gameProfileModalChecks = obj3;
        GameProfileActionCreators.default.openGameProfileModal(obj2);
        flag3 = true;
        const _default = GameProfileActionCreators.default;
      }
      flag2 = flag3;
    }
    flag = true;
    if (!flag2) {
      const obj4 = { href: data.url, trusted: null, messageId: null, channelId: null };
      let isLinkTrustedResult = null != data.node;
      if (isLinkTrustedResult) {
        isLinkTrustedResult = MarkupReactLinkUtils.isLinkTrusted(data.node);
        const tmp19Result = MarkupReactLinkUtils;
      }
      obj4.trusted = isLinkTrustedResult;
      obj4.messageId = data.messageId;
      obj4.channelId = channelId;
      MaskedLinkUtils.handleClick(obj4);
      flag = true;
    }
  }
  return flag;
}
const getSection = ApplicationCommandIndexStore.getSection;
({ AnalyticsLocations: closure_12, LinkingTypes: map1, Routes: closure_14 } = Constants);
const AppLauncherRouteName = AppLauncherNativeConstants.AppLauncherRouteName;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const NotificationTypes = PushNotificationConstants.NotificationTypes;
const constants3 = ThreadConstants.OpenThreadAnalyticsLocations;
let result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapLink.tsx");

export { handleMessagesTapURLLink };
export const handleMessagesTapLink = function handleMessagesTapLink(tapLinkData) {
  ({ chatInputRef, message, messageChannel } = tapLinkData);
  const data = tapLinkData.tapLinkData.data;
  if (true === tapLinkData.allowWithinModal) {
    let id;
    if (messageChannel != null) {
      id = messageChannel.id;
    }
    if (!handleMessagesTapURLLink(data, id)) {
      if (null != data.action) {
        switch (data.action) {
          case "bindUserMenu":
            ({ userId: obj21.userId, messageChannelId: obj21.channelId, messageId: obj21.messageId } = data);
            showUserProfileActionSheetDefault({ userId: null, channelId: null, messageId: null });
            const obj4 = { userId: null, channelId: null, messageId: null };
          break;
          case "bindGuildMenu":
            if (null != data.messageReference) {
              const guild_id = data.messageReference.guild_id;
              if (null != guild_id) {
                const _HermesInternal = HermesInternal;
                const obj19 = ActionSheetActionCreatorsDefault;
                const obj9 = { guildId: guild_id };
                obj19.openLazy(asyncRequireImpl(9195, dependencyMap.paths), "GuildProfileActionSheet:" + guild_id, obj9);
                const tmp97 = asyncRequireImpl(9195, dependencyMap.paths);
              }
            }
          break;
          case "bindJoinStream":
            const stream = data.stream;
            if (null != stream) {
              const voiceChannel = SelectedChannelActionCreatorsDefault.selectVoiceChannel(stream.channelId);
              const result = StreamActionCreators.watchStreamAndTransitionToStream(stream);
            }
          break;
          case "bindOpenPins":
            openPinnedMessagesDefault(data.messageChannelId, "pinned-message-system-message");
          break;
          case "bindOpenGdmCustomizeActionSheet":
            const obj10 = { channelId: data.messageChannelId };
            showChatGDMCustomizeActionSheetDefault(obj10);
          break;
          case "bindDismissMessage":
            const message3 = data.message;
            let id1;
            if (message3 != null) {
              id1 = message3.id;
            }
            const message1 = GuildAutomodMessageStore.getMessage(id1);
            let isBlockedEdit;
            if (message1 != null) {
              isBlockedEdit = message1.isBlockedEdit;
            }
            if (isBlockedEdit) {
              const message4 = data.message;
              let id2;
              if (message4 != null) {
                id2 = message4.id;
              }
              const result1 = GuildAutomodMessageActionCreators.removeAutomodMessageNotice(id2);
            } else {
              const result2 = MessageActionCreatorsDefault.dismissAutomatedMessage(data.message);
            }
          break;
          case "bindTapUsername":
            const obj11 = { userId: null, channelId: null, messageId: null, sourceAnalyticsLocations: null };
            ({ userId: obj13.userId, messageChannelId: obj13.channelId, messageId: obj13.messageId } = data);
            const items = [AnalyticsLocationDefault.USERNAME];
            obj11.sourceAnalyticsLocations = items;
            showUserProfileActionSheetDefault(obj11);
          break;
          case "bindTapCommandName":
            let interaction;
            if (message != null) {
              interaction = message.interaction;
            }
            if (null != interaction) {
              if (null != messageChannel) {
                const user = UserStore.getUser(data.userId);
                if (null != user) {
                  if (obj24.isPrimaryEntryPointCommandMessage(message)) {
                    if (null != message.applicationId) {
                      const channel = ChannelStore.getChannel(data.messageChannelId);
                      if (null != channel) {
                        const obj12 = { channel, type: "channel" };
                        const tmp119 = getSection(obj12, message.applicationId);
                        const descriptor = tmp119.descriptor;
                        let application;
                        if (descriptor != null) {
                          application = descriptor.application;
                        }
                        if (null != application) {
                          if (chatInputRef != null) {
                            const current4 = chatInputRef.current;
                            if (current4 != null) {
                              const obj16 = { type: KeyboardTypes.KeyboardTypes.APP_LAUNCHER, context: null };
                              const obj20 = { initialRouteName: AppLauncherRouteName.APPLICATION_VIEW, initiallyExpanded: true, application: tmp119.descriptor.application, installOnDemand: null };
                              const isGuildInstalled = tmp119.isGuildInstalled;
                              let tmp66 = !isGuildInstalled;
                              if (!isGuildInstalled) {
                                tmp66 = !tmp119.isUserInstalled;
                              }
                              obj20.installOnDemand = tmp66;
                              obj16.context = obj20;
                              current4.openCustomKeyboard(obj16);
                            }
                          }
                        } else if (chatInputRef != null) {
                          const current3 = chatInputRef.current;
                          if (current3 != null) {
                            const obj23 = { type: KeyboardTypes.KeyboardTypes.APP_LAUNCHER, context: null };
                            const obj25 = { initialRouteName: AppLauncherRouteName.APPLICATION_VIEW, initiallyExpanded: true, applicationId: message.applicationId, installOnDemand: true };
                            obj23.context = obj25;
                            current3.openCustomKeyboard(obj23);
                          }
                        }
                      }
                    }
                  } else {
                    let author;
                    if (message != null) {
                      author = message.author;
                    }
                    if (null != author) {
                      const obj26 = { author: null, channelId: null, chatInputRef: null, messageId: null, user: null, applicationUser: null, guildId: null, messageType: null };
                      const tmp114 = showExecutedApplicationCommandPopoutDefault;
                      obj26.author = useMessageAuthor.getUserAuthor(message.interaction.user, messageChannel);
                      obj26.channelId = data.messageChannelId;
                      obj26.chatInputRef = chatInputRef;
                      obj26.messageId = data.messageId;
                      obj26.user = user;
                      let author1;
                      if (message != null) {
                        author1 = message.author;
                      }
                      const tmp1152 = new UserRecord(author1);
                      obj26.applicationUser = tmp1152;
                      const guildId = messageChannel.getGuildId();
                      obj26.guildId = guildId;
                      obj26.messageType = data.messageType;
                      tmp114(obj26);
                      const tmp111Result = useMessageAuthor;
                    }
                  }
                  obj24 = ApplicationInteractionInfoUtils;
                }
              }
            }
          break;
          case "bindTapActivityText":
            const application1 = ApplicationStore.getApplication(data.applicationUserId);
            if (chatInputRef != null) {
              const current2 = chatInputRef.current;
              if (current2 != null) {
                if (null == application1) {
                  const obj27 = { type: KeyboardTypes.KeyboardTypes.APP_LAUNCHER, context: null };
                  const obj28 = { initialRouteName: AppLauncherRouteName.APPLICATION_VIEW, applicationId: data.applicationUserId, initiallyExpanded: true };
                  obj27.context = obj28;
                  let obj29 = obj27;
                } else {
                  obj29 = { type: KeyboardTypes.KeyboardTypes.APP_LAUNCHER, context: null };
                  const obj30 = { initialRouteName: AppLauncherRouteName.APPLICATION_VIEW, application: application1, initiallyExpanded: true };
                  obj29.context = obj30;
                }
                current2.openCustomKeyboard(obj29);
              }
            }
          break;
          case "bindOpenThreadChannel":
            const channel1 = ChannelStore.getChannel(data.threadId);
            if (null != channel1) {
              let guild_id1;
              if (channel1 != null) {
                guild_id1 = channel1.guild_id;
              }
              tmp(guild_id1, channel1.id, constants3.EMBED);
            }
          break;
          case "bindJumpToMessage":
            ({ targetChannelId: obj8.channelId, targetMessageId: obj8.messageId, messageId: obj8.returnMessageId } = data);
            MessageActionCreatorsDefault.jumpToMessage({ channelId: null, messageId: null, flash: true, returnMessageId: null });
            const obj31 = { channelId: null, messageId: null, flash: true, returnMessageId: null };
          break;
          case "bindOpenRoleSubscriptionOverview":
            router_utils.transitionTo(closure_1_14.CHANNEL(data.guildId, StaticChannelRoute.ROLE_SUBSCRIPTIONS));
            const obj6 = GuildRoleSubscriptionSystemMessageUtils;
            const result3 = obj6.trackRoleSubscriptionPurchaseMessageTierClick(data.guildId, data.channelId, data.messageId, data.roleSubscriptionListingId);
          break;
          case "bindUserSurvey":
            const channel2 = ChannelStore.getChannel(data.message.channel_id);
            let guild_id2;
            if (channel2 != null) {
              guild_id2 = channel2.guild_id;
            }
            if (null != guild_id2) {
              const notificationType2 = data.notificationType;
              if (NotificationTypes.TRENDING_CONTENT_PUSH === notificationType2) {
                const obj3 = GuildHighlightsNotificationsActionCreators;
                ({ message: message2, notificationType } = data);
                const MESSAGE_EMBED = constants.MESSAGE_EMBED;
                const selectedSummaryResult = SummaryStore.selectedSummary(data.message.channel_id);
                let str2;
                if (selectedSummaryResult != null) {
                  str2 = selectedSummaryResult.id;
                }
                if (str2 == null) {
                  str2 = "unknown";
                }
                const obj48 = { summary_id: str2 };
                const result4 = obj3.openGuildHighlightNotificationForPush(guild_id2, message2, notificationType, MESSAGE_EMBED, obj48);
              } else if (NotificationTypes.TOP_MESSAGE_PUSH === notificationType2) {
                const obj2 = GuildHighlightsNotificationsActionCreators;
                const result5 = obj2.openGuildHighlightNotificationForPush(guild_id2, data.message, data.notificationType, constants.MESSAGE_EMBED);
              } else {
                const tmp106 = asyncRequireImpl(11127, dependencyMap.paths);
                const obj49 = { location: constants.MESSAGE_EMBED, messageId: data.message.id, notificationType: null };
                let TOP_MESSAGE_PUSH = data.notificationType;
                if (TOP_MESSAGE_PUSH == null) {
                  TOP_MESSAGE_PUSH = NotificationTypes.TOP_MESSAGE_PUSH;
                }
                obj49.notificationType = TOP_MESSAGE_PUSH;
                ActionSheetActionCreatorsDefault.openLazy(tmp106, "NotificationSurvey", obj49);
              }
            }
          break;
          case "bindInsertText":
            if (chatInputRef != null) {
              const current = chatInputRef.current;
              if (current != null) {
                let flag = data.addSpace;
                if (flag == null) {
                  flag = true;
                }
                current.insertText(data.text, null, flag);
              }
            }
          break;
        }
      }
    }
  } else {
    isAlertOrActionSheetOpen;
  }
};