// === Module 11616: handleMessagesTapLink ===

// Module 11616 (handleMessagesTapLink)
import router_utils from "router_utils" /* 1100 */;
import ThreadConstants from "ThreadConstants" /* 1113 */;
import AppLauncherNativeConstants from "AppLauncherNativeConstants" /* 1482 */;
import KeyboardTypes from "KeyboardTypes" /* 1609 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ChannelConstants from "ChannelConstants" /* 1964 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import parseURLDefault from "parseURL" /* 4540 */;
import StreamActionCreators from "StreamActionCreators" /* 4702 */;
import useMessageAuthor from "useMessageAuthor" /* 4793 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5411 */;
import PushNotificationConstants from "PushNotificationConstants" /* 6596 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7182 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7456 */;
import InviteTypeUtils from "InviteTypeUtils" /* 7735 */;
import GuildRoleSubscriptionSystemMessageUtils from "GuildRoleSubscriptionSystemMessageUtils" /* 7992 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8179 */;
import MaskedLinkUtils from "MaskedLinkUtils" /* 8370 */;
import GameProfileActionCreators from "GameProfileActionCreators" /* 8680 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8686 */;
import ApplicationCommandIndexStore from "ApplicationCommandIndexStore" /* 9290 */;
import showChatGDMCustomizeActionSheetDefault from "showChatGDMCustomizeActionSheet" /* 10919 */;
import isAlertOrActionSheetOpen from "isAlertOrActionSheetOpen" /* 11544 */;
import MarkupReactLinkUtils from "MarkupReactLinkUtils" /* 11614 */;
import handleAcceptEventInstantInviteDefault from "handleAcceptEventInstantInvite" /* 11615 */;
import openPinnedMessagesDefault from "openPinnedMessages" /* 11617 */;
import GuildAutomodMessageActionCreators from "GuildAutomodMessageActionCreators" /* 11618 */;
import ApplicationInteractionInfoUtils from "ApplicationInteractionInfoUtils" /* 11619 */;
import showExecutedApplicationCommandPopoutDefault from "showExecutedApplicationCommandPopout" /* 11620 */;
import GuildHighlightsNotificationsActionCreators from "GuildHighlightsNotificationsActionCreators" /* 11623 */;
import ApplicationStore from "ApplicationStore" /* 4788 */;
import GuildAutomodMessageStore from "GuildAutomodMessageStore" /* 7938 */;
import SummaryStore from "SummaryStore" /* 11345 */;
import UserRecord from "UserRecord" /* 1385 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import InviteStore from "InviteStore" /* 4544 */;
import MessageStore from "MessageStore" /* 4781 */;
import UserStore from "UserStore" /* 1371 */;
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
      let obj = MarkupReactLinkUtils;
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
        obj = { gameId, source: GameProfileAnalyticUtils.GameProfileSources.Deeplink, sourceUserId: tmp13, gameProfileModalChecks: null };
        obj = { shouldOpenGameProfile: true, gameId };
        obj.gameProfileModalChecks = obj;
        GameProfileActionCreators.default.openGameProfileModal(obj);
        flag3 = true;
        const _default = GameProfileActionCreators.default;
      }
      flag2 = flag3;
    }
    flag = true;
    if (!flag2) {
      const obj1 = { href: data.url, trusted: null, messageId: null, channelId: null };
      let isLinkTrustedResult = null != data.node;
      if (isLinkTrustedResult) {
        isLinkTrustedResult = MarkupReactLinkUtils.isLinkTrusted(data.node);
        const tmp19Result = MarkupReactLinkUtils;
      }
      obj1.trusted = isLinkTrustedResult;
      obj1.messageId = data.messageId;
      obj1.channelId = channelId;
      MaskedLinkUtils.handleClick(obj1);
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
            let obj = { userId: null, channelId: null, messageId: null };
            ({ userId: obj21.userId, messageChannelId: obj21.channelId, messageId: obj21.messageId } = data);
            showUserProfileActionSheetDefault(obj);
          break;
          case "bindGuildMenu":
            if (null != data.messageReference) {
              let guild_id = data.messageReference.guild_id;
              if (null != guild_id) {
                const _HermesInternal = HermesInternal;
                const obj19 = ActionSheetActionCreatorsDefault;
                obj = { guildId: guild_id };
                obj19.openLazy(asyncRequireImpl(9185, dependencyMap.paths), "GuildProfileActionSheet:" + guild_id, obj);
                const tmp97 = asyncRequireImpl(9185, dependencyMap.paths);
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
            let obj1 = { channelId: data.messageChannelId };
            showChatGDMCustomizeActionSheetDefault(obj1);
          break;
          case "bindDismissMessage":
            const message3 = data.message;
            let id1;
            if (message3 != null) {
              id1 = message3.id;
            }
            message = GuildAutomodMessageStore.getMessage(id1);
            let isBlockedEdit;
            if (message != null) {
              isBlockedEdit = message.isBlockedEdit;
            }
            if (isBlockedEdit) {
              let obj14 = GuildAutomodMessageActionCreators;
              const message4 = data.message;
              let id2;
              if (message4 != null) {
                id2 = message4.id;
              }
              const result1 = obj14.removeAutomodMessageNotice(id2);
            } else {
              let obj13 = MessageActionCreatorsDefault;
              const result2 = obj13.dismissAutomatedMessage(data.message);
            }
          break;
          case "bindTapUsername":
            let obj2 = { userId: null, channelId: null, messageId: null, sourceAnalyticsLocations: null };
            ({ userId: obj13.userId, messageChannelId: obj13.channelId, messageId: obj13.messageId } = data);
            const items = [AnalyticsLocationDefault.USERNAME];
            obj2.sourceAnalyticsLocations = items;
            showUserProfileActionSheetDefault(obj2);
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
                        const obj3 = { channel, type: "channel" };
                        const tmp119 = getSection(obj3, message.applicationId);
                        const descriptor = tmp119.descriptor;
                        let application;
                        if (descriptor != null) {
                          application = descriptor.application;
                        }
                        if (null != application) {
                          if (chatInputRef != null) {
                            const current4 = chatInputRef.current;
                            if (current4 != null) {
                              let obj4 = { type: KeyboardTypes.KeyboardTypes.APP_LAUNCHER, context: null };
                              let obj5 = { initialRouteName: AppLauncherRouteName.APPLICATION_VIEW, initiallyExpanded: true, application: tmp119.descriptor.application, installOnDemand: null };
                              const isGuildInstalled = tmp119.isGuildInstalled;
                              let tmp66 = !isGuildInstalled;
                              if (!isGuildInstalled) {
                                tmp66 = !tmp119.isUserInstalled;
                              }
                              obj5.installOnDemand = tmp66;
                              obj4.context = obj5;
                              current4.openCustomKeyboard(obj4);
                            }
                          }
                        } else if (chatInputRef != null) {
                          const current3 = chatInputRef.current;
                          if (current3 != null) {
                            let obj6 = { type: KeyboardTypes.KeyboardTypes.APP_LAUNCHER, context: null };
                            const obj7 = { initialRouteName: AppLauncherRouteName.APPLICATION_VIEW, initiallyExpanded: true, applicationId: message.applicationId, installOnDemand: true };
                            obj6.context = obj7;
                            current3.openCustomKeyboard(obj6);
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
                      const obj8 = { author: null, channelId: null, chatInputRef: null, messageId: null, user: null, applicationUser: null, guildId: null, messageType: null };
                      const tmp114 = showExecutedApplicationCommandPopoutDefault;
                      obj8.author = useMessageAuthor.getUserAuthor(message.interaction.user, messageChannel);
                      obj8.channelId = data.messageChannelId;
                      obj8.chatInputRef = chatInputRef;
                      obj8.messageId = data.messageId;
                      obj8.user = user;
                      let author1;
                      let tmp115 = UserRecord;
                      if (message != null) {
                        author1 = message.author;
                      }
                      tmp115 = new tmp115(author1);
                      obj8.applicationUser = tmp115;
                      const guildId = messageChannel.getGuildId();
                      obj8.guildId = guildId;
                      obj8.messageType = data.messageType;
                      tmp114(obj8);
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
                  const obj9 = { type: KeyboardTypes.KeyboardTypes.APP_LAUNCHER, context: null };
                  const obj10 = { initialRouteName: AppLauncherRouteName.APPLICATION_VIEW, applicationId: data.applicationUserId, initiallyExpanded: true };
                  obj9.context = obj10;
                  let obj11 = obj9;
                } else {
                  obj11 = { type: KeyboardTypes.KeyboardTypes.APP_LAUNCHER, context: null };
                  const obj12 = { initialRouteName: AppLauncherRouteName.APPLICATION_VIEW, application: application1, initiallyExpanded: true };
                  obj11.context = obj12;
                }
                current2.openCustomKeyboard(obj11);
              }
            }
          break;
          case "bindOpenThreadChannel":
            const channel1 = ChannelStore.getChannel(data.threadId);
            if (null != channel1) {
              guild_id = undefined;
              if (channel1 != null) {
                guild_id = channel1.guild_id;
              }
              tmp(guild_id, channel1.id, constants3.EMBED);
            }
          break;
          case "bindJumpToMessage":
            obj6 = MessageActionCreatorsDefault;
            obj13 = { channelId: null, messageId: null, flash: true, returnMessageId: null };
            ({ targetChannelId: obj8.channelId, targetMessageId: obj8.messageId, messageId: obj8.returnMessageId } = data);
            obj6.jumpToMessage(obj13);
          break;
          case "bindOpenRoleSubscriptionOverview":
            obj4 = router_utils;
            obj4.transitionTo(closure_1_14.CHANNEL(data.guildId, StaticChannelRoute.ROLE_SUBSCRIPTIONS));
            obj5 = GuildRoleSubscriptionSystemMessageUtils;
            const result3 = obj5.trackRoleSubscriptionPurchaseMessageTierClick(data.guildId, data.channelId, data.messageId, data.roleSubscriptionListingId);
          break;
          case "bindUserSurvey":
            const channel2 = ChannelStore.getChannel(data.message.channel_id);
            let guild_id1;
            if (channel2 != null) {
              guild_id1 = channel2.guild_id;
            }
            if (null != guild_id1) {
              const notificationType2 = data.notificationType;
              if (NotificationTypes.TRENDING_CONTENT_PUSH === notificationType2) {
                obj2 = GuildHighlightsNotificationsActionCreators;
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
                obj14 = { summary_id: str2 };
                const result4 = obj2.openGuildHighlightNotificationForPush(guild_id1, message2, notificationType, MESSAGE_EMBED, obj14);
              } else if (NotificationTypes.TOP_MESSAGE_PUSH === notificationType2) {
                obj1 = GuildHighlightsNotificationsActionCreators;
                const result5 = obj1.openGuildHighlightNotificationForPush(guild_id1, data.message, data.notificationType, constants.MESSAGE_EMBED);
              } else {
                const tmp106 = asyncRequireImpl(11646, dependencyMap.paths);
                const obj15 = { location: constants.MESSAGE_EMBED, messageId: data.message.id, notificationType: null };
                let TOP_MESSAGE_PUSH = data.notificationType;
                if (TOP_MESSAGE_PUSH == null) {
                  TOP_MESSAGE_PUSH = NotificationTypes.TOP_MESSAGE_PUSH;
                }
                obj15.notificationType = TOP_MESSAGE_PUSH;
                ActionSheetActionCreatorsDefault.openLazy(tmp106, "NotificationSurvey", obj15);
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
    obj = isAlertOrActionSheetOpen;
  }
};