// discord_app/modules/messages/native/handlers/handleMessagesTapLink.tsx
import router_utils from "../../../routing/router_utils.tsx";
import ThreadConstants from "../../../threads/ThreadConstants.tsx";
import AppLauncherNativeConstants from "../../../app_launcher/native/AppLauncherNativeConstants.tsx";
import KeyboardTypes from "../../../keyboard/native/KeyboardTypes.tsx";
import asyncRequire from "../../../../../_runtime/01987_asyncRequire.js";
import ChannelConstants from "../../../channel/ChannelConstants.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import parseURLDefault from "../../../../utils/native/parseURL.tsx";
import StreamActionCreators from "../../../../actions/StreamActionCreators.tsx";
import useMessageAuthor from "../../useMessageAuthor.tsx";
import SelectedChannelActionCreatorsDefault from "../../../../actions/SelectedChannelActionCreators.tsx";
import PushNotificationConstants from "../../../push_notifications/PushNotificationConstants.tsx";
import AnalyticsLocationDefault from "../../../app_analytics/AnalyticsLocation.tsx";
import MessageActionCreatorsDefault from "../../../../actions/MessageActionCreators.tsx";
import InviteTypeUtils from "../../../instant_invite/InviteTypeUtils.tsx";
import GuildRoleSubscriptionSystemMessageUtils from "../../../guild_role_subscriptions/GuildRoleSubscriptionSystemMessageUtils.tsx";
import showUserProfileActionSheetDefault from "../../../user_profile/native/showUserProfileActionSheet.tsx";
import MaskedLinkUtils from "../../../../utils/MaskedLinkUtils.tsx";
import GameProfileAnalyticUtils from "../../../game_profile/GameProfileAnalyticUtils.tsx";
import GameProfileActionCreators from "../../../game_profile/GameProfileActionCreators.native.tsx";
import ApplicationCommandIndexStore from "../../../application_commands/ApplicationCommandIndexStore.tsx";
import showChatGDMCustomizeActionSheetDefault from "../../../group_dm/native/showChatGDMCustomizeActionSheet.tsx";
import isAlertOrActionSheetOpen from "../../../../components_native/chat/isAlertOrActionSheetOpen.tsx";
import MarkupReactLinkUtils from "../../../markup/MarkupReactLinkUtils.tsx";
import handleAcceptEventInstantInviteDefault from "../../../guild_scheduled_events/native/handleAcceptEventInstantInvite.tsx";
import openPinnedMessagesDefault from "../openPinnedMessages.tsx";
import GuildAutomodMessageActionCreators from "../../../guild_automod/GuildAutomodMessageActionCreators.tsx";
import ApplicationInteractionInfoUtils from "../../../applications/ApplicationInteractionInfoUtils.tsx";
import showExecutedApplicationCommandPopoutDefault from "../../../application_commands/native/showExecutedApplicationCommandPopout.tsx";
import GuildHighlightsNotificationsActionCreators from "../../../notifications/native/GuildHighlightsNotificationsActionCreators.tsx";
import ApplicationStore from "../../../applications/ApplicationStore.tsx";
import GuildAutomodMessageStore from "../../../guild_automod/GuildAutomodMessageStore.tsx";
import SummaryStore from "../../../summaries/SummaryStore.tsx";
import UserRecord from "../../../../records/UserRecord.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import InviteStore from "../../../../stores/InviteStore.tsx";
import MessageStore from "../../../../stores/MessageStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import Constants from "../../../../Constants.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let closure_12;
let closure_14;
let map1;
function handleMessagesTapURLLink(data, channelId) {
  let isLinkTrustedResult;
  let obj3;
  let flag = null != data.url && "" !== data.url;
  if (flag) {
    const node = data.node;
    let flag2 = false;
    if (null != node) {
      flag2 = false;
      const obj = MarkupReactLinkUtils;
      if (obj.isLinkTrusted(node)) {
        const payload = parseURLDefault(tmp).payload;
        flag2 = false;
        if (payload.type === map1.INVITE) {
          flag2 = false;
          if (null != payload.inviteCode) {
            const invite = InviteStore.getInvite(payload.inviteCode);
            let num = null == invite;
            if (!num) {
              const tmp2Result = InviteTypeUtils;
              num = !tmp2Result.isGuildScheduledEventInviteEmbed(invite);
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
      if (payload2.type === map1.GAME_PROFILE) {
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
        const GameProfileSources = GameProfileAnalyticUtils.GameProfileSources;
        const obj2 = { gameId, source: GameProfileSources.Deeplink, sourceUserId: tmp13, gameProfileModalChecks: obj3 };
        obj3 = { shouldOpenGameProfile: true, gameId };
        const _default = GameProfileActionCreators.default;
        _default.openGameProfileModal(obj2);
        flag3 = true;
      }
      flag2 = flag3;
    }
    flag = true;
    if (!flag2) {
      const obj4 = { href: data.url, trusted: isLinkTrustedResult, messageId: data.messageId, channelId };
      isLinkTrustedResult = null != data.node;
      const handleClick = MaskedLinkUtils.handleClick;
      MaskedLinkUtils;
      if (isLinkTrustedResult) {
        const tmp19Result = MarkupReactLinkUtils;
        isLinkTrustedResult = tmp19Result.isLinkTrusted(data.node);
      }
      handleClick(obj4);
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
  let TOP_MESSAGE_PUSH;
  let chatInputRef;
  let guildId;
  let items;
  let message;
  let messageChannel;
  let obj17;
  let obj21;
  let obj24;
  let obj26;
  let tmp113Result;
  let tmp1172;
  let tmp65;
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
          case "bindUserMenu": {
            const obj3 = { userId: null, channelId: null, messageId: null };
            ({ userId: obj18.userId, messageChannelId: obj18.channelId, messageId: obj18.messageId } = data);
            showUserProfileActionSheetDefault(obj3);
            break;
          }
          case "bindGuildMenu": {
            if (null != data.messageReference) {
              const guild_id = data.messageReference.guild_id;
              if (null != guild_id) {
                const openLazy = ActionSheetActionCreatorsDefault.openLazy;
                const _HermesInternal = HermesInternal;
                ActionSheetActionCreatorsDefault;
                const obj8 = { guildId: guild_id };
                const tmp98 = asyncRequire(9410, dependencyMap.paths);
                openLazy(tmp98, "GuildProfileActionSheet:" + guild_id, obj8);
              }
            }
            break;
          }
          case "bindJoinStream": {
            const stream = data.stream;
            if (null != stream) {
              const obj15 = SelectedChannelActionCreatorsDefault;
              const voiceChannel = obj15.selectVoiceChannel(stream.channelId);
              const obj16 = StreamActionCreators;
              const result = obj16.watchStreamAndTransitionToStream(stream);
            }
            break;
          }
          case "bindOpenPins": {
            openPinnedMessagesDefault(data.messageChannelId, "pinned-message-system-message");
            break;
          }
          case "bindOpenGdmCustomizeActionSheet": {
            const obj9 = { channelId: data.messageChannelId };
            showChatGDMCustomizeActionSheetDefault(obj9);
            break;
          }
          case "bindDismissMessage": {
            const message3 = data.message;
            let id1;
            const getMessage = GuildAutomodMessageStore.getMessage;
            if (message3 != null) {
              id1 = message3.id;
            }
            const message1 = getMessage(id1);
            let isBlockedEdit;
            if (message1 != null) {
              isBlockedEdit = message1.isBlockedEdit;
            }
            if (isBlockedEdit) {
              const message4 = data.message;
              let id2;
              const removeAutomodMessageNotice = GuildAutomodMessageActionCreators.removeAutomodMessageNotice;
              GuildAutomodMessageActionCreators;
              if (message4 != null) {
                id2 = message4.id;
              }
              const result1 = removeAutomodMessageNotice(id2);
            } else {
              const obj13 = MessageActionCreatorsDefault;
              const result2 = obj13.dismissAutomatedMessage(data.message);
            }
            break;
          }
          case "bindTapUsername": {
            const obj10 = { userId: null, channelId: null, messageId: null, sourceAnalyticsLocations: items };
            ({ userId: obj12.userId, messageChannelId: obj12.channelId, messageId: obj12.messageId } = data);
            items = [];
            const tmp69 = showUserProfileActionSheetDefault;
            items[0] = AnalyticsLocationDefault.USERNAME;
            tmp69(obj10);
            break;
          }
          case "bindTapCommandName": {
            let interaction;
            if (message != null) {
              interaction = message.interaction;
            }
            if (null != interaction) {
              if (null != messageChannel) {
                const user = UserStore.getUser(data.userId);
                if (null != user) {
                  const obj20 = ApplicationInteractionInfoUtils;
                  if (obj20.isPrimaryEntryPointCommandMessage(message)) {
                    if (null != message.applicationId) {
                      const channel = ChannelStore.getChannel(data.messageChannelId);
                      if (null != channel) {
                        const obj11 = { channel, type: "channel" };
                        const tmp121 = getSection(obj11, message.applicationId);
                        const descriptor = tmp121.descriptor;
                        let application;
                        if (descriptor != null) {
                          application = descriptor.application;
                        }
                        if (null != application) {
                          if (chatInputRef != null) {
                            const current4 = chatInputRef.current;
                            if (current4 != null) {
                              const openCustomKeyboard3 = current4.openCustomKeyboard;
                              const obj14 = { type: KeyboardTypes.KeyboardTypes.APP_LAUNCHER, context: obj17 };
                              const isGuildInstalled = tmp121.isGuildInstalled;
                              obj17 = {
                                initialRouteName: AppLauncherRouteName.APPLICATION_VIEW,
                                initiallyExpanded: true,
                                application: tmp121.descriptor.application,
                                installOnDemand: tmp65,
                              };
                              tmp65 = !isGuildInstalled && !tmp121.isUserInstalled;
                              openCustomKeyboard3(obj14);
                            }
                          }
                        } else if (chatInputRef != null) {
                          const current3 = chatInputRef.current;
                          if (current3 != null) {
                            const openCustomKeyboard2 = current3.openCustomKeyboard;
                            const obj19 = { type: KeyboardTypes.KeyboardTypes.APP_LAUNCHER, context: obj21 };
                            obj21 = {
                              initialRouteName: AppLauncherRouteName.APPLICATION_VIEW,
                              initiallyExpanded: true,
                              applicationId: message.applicationId,
                              installOnDemand: true,
                            };
                            openCustomKeyboard2(obj19);
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
                      const obj22 = {
                        author: tmp113Result.getUserAuthor(message.interaction.user, messageChannel),
                        channelId: data.messageChannelId,
                        chatInputRef,
                        messageId: data.messageId,
                        user,
                        applicationUser: tmp1172,
                        guildId,
                        messageType: data.messageType,
                      };
                      const tmp116 = showExecutedApplicationCommandPopoutDefault;
                      let author1;
                      tmp113Result = useMessageAuthor;
                      if (message != null) {
                        author1 = message.author;
                      }
                      const self = this;
                      const self2 = this;
                      tmp1172 = new UserRecord(author1);
                      guildId = messageChannel.getGuildId();
                      tmp116(obj22);
                    }
                  }
                }
              }
            }
            break;
          }
          case "bindTapActivityText": {
            const application1 = ApplicationStore.getApplication(data.applicationUserId);
            if (chatInputRef != null) {
              const current2 = chatInputRef.current;
              if (current2 != null) {
                let obj25;
                const openCustomKeyboard = current2.openCustomKeyboard;
                if (null == application1) {
                  const obj23 = { type: KeyboardTypes.KeyboardTypes.APP_LAUNCHER, context: obj24 };
                  obj25 = obj23;
                  obj24 = {
                    initialRouteName: AppLauncherRouteName.APPLICATION_VIEW,
                    applicationId: data.applicationUserId,
                    initiallyExpanded: true,
                  };
                } else {
                  obj25 = { type: KeyboardTypes.KeyboardTypes.APP_LAUNCHER, context: obj26 };
                  obj26 = {
                    initialRouteName: AppLauncherRouteName.APPLICATION_VIEW,
                    application: application1,
                    initiallyExpanded: true,
                  };
                }
                openCustomKeyboard(obj25);
              }
            }
            break;
          }
          case "bindOpenThreadChannel": {
            const channel1 = ChannelStore.getChannel(data.threadId);
            if (null != channel1) {
              let guild_id1;
              if (channel1 != null) {
                guild_id1 = channel1.guild_id;
              }
              tmp(guild_id1, channel1.id, constants3.EMBED);
            }
            break;
          }
          case "bindJumpToMessage": {
            const obj27 = { channelId: null, messageId: null, flash: true, returnMessageId: null };
            ({
              targetChannelId: obj7.channelId,
              targetMessageId: obj7.messageId,
              messageId: obj7.returnMessageId,
            } = data);
            const obj6 = MessageActionCreatorsDefault;
            obj6.jumpToMessage(obj27);
            break;
          }
          case "bindOpenRoleSubscriptionOverview": {
            const obj4 = router_utils;
            obj4.transitionTo(authStore2.CHANNEL(data.guildId, StaticChannelRoute.ROLE_SUBSCRIPTIONS));
            const obj5 = GuildRoleSubscriptionSystemMessageUtils;
            const result3 = obj5.trackRoleSubscriptionPurchaseMessageTierClick(
              data.guildId,
              data.channelId,
              data.messageId,
              data.roleSubscriptionListingId,
            );
            break;
          }
          case "bindUserSurvey": {
            let message2;
            let notificationType;
            const channel2 = ChannelStore.getChannel(data.message.channel_id);
            let guild_id2;
            if (channel2 != null) {
              guild_id2 = channel2.guild_id;
            }
            if (null != guild_id2) {
              const notificationType2 = data.notificationType;
              if (NotificationTypes.TRENDING_CONTENT_PUSH === notificationType2) {
                ({ message: message2, notificationType } = data);
                const MESSAGE_EMBED = constants.MESSAGE_EMBED;
                const openGuildHighlightNotificationForPush =
                  GuildHighlightsNotificationsActionCreators.openGuildHighlightNotificationForPush;
                const selectedSummaryResult = SummaryStore.selectedSummary(data.message.channel_id);
                let str2;
                if (selectedSummaryResult != null) {
                  str2 = selectedSummaryResult.id;
                }
                if (str2 == null) {
                  str2 = "unknown";
                }
                const obj44 = { summary_id: str2 };
                const result4 = openGuildHighlightNotificationForPush(
                  guild_id2,
                  message2,
                  notificationType,
                  MESSAGE_EMBED,
                  obj44,
                );
              } else if (NotificationTypes.TOP_MESSAGE_PUSH === notificationType2) {
                const obj2 = GuildHighlightsNotificationsActionCreators;
                const result5 = obj2.openGuildHighlightNotificationForPush(
                  guild_id2,
                  data.message,
                  data.notificationType,
                  constants.MESSAGE_EMBED,
                );
              } else {
                const obj45 = {
                  location: constants.MESSAGE_EMBED,
                  messageId: data.message.id,
                  notificationType: TOP_MESSAGE_PUSH,
                };
                TOP_MESSAGE_PUSH = data.notificationType;
                const tmp107 = asyncRequire(11282, dependencyMap.paths);
                const openLazy2 = ActionSheetActionCreatorsDefault.openLazy;
                ActionSheetActionCreatorsDefault;
                if (TOP_MESSAGE_PUSH == null) {
                  TOP_MESSAGE_PUSH = NotificationTypes.TOP_MESSAGE_PUSH;
                }
                openLazy2(tmp107, "NotificationSurvey", obj45);
              }
            }
            break;
          }
          case "bindInsertText": {
            if (chatInputRef != null) {
              const current = chatInputRef.current;
              if (current != null) {
                let flag = data.addSpace;
                const insertText = current.insertText;
                const text = data.text;
                if (flag == null) {
                  flag = true;
                }
                insertText(text, null, flag);
              }
            }
            break;
          }
        }
      }
    }
  } else {
    isAlertOrActionSheetOpen;
  }
};
