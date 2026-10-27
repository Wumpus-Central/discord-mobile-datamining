// === Module 8267: createMessageContent ===

// Module 8267 (createMessageContent)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _mod17 from "module_17" /* 17 */;
import util from "util" /* 1125 */;
import useChannelName from "useChannelName" /* 5605 */;
import SpoilerChannelUtils from "SpoilerChannelUtils" /* 6683 */;
import ReferencedMessageStore2 from "ReferencedMessageStore" /* 7697 */;
import RowGeneratorConstants from "RowGeneratorConstants" /* 8132 */;
import GuildTagConstants from "GuildTagConstants" /* 8272 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 8273 */;
import MessageCountUtils from "MessageCountUtils" /* 8274 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8275 */;
import _modDef8276 from "module_8276" /* 8276 */;
import transformMessageComponentsDefault from "transformMessageComponents" /* 8593 */;
import AccessibilityStore from "AccessibilityStore" /* 4973 */;
import ApplicationStore from "ApplicationStore" /* 2042 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4996 */;
import EmojiStore from "EmojiStore" /* 6726 */;
import GuildAutomodMessageStore from "GuildAutomodMessageStore" /* 8137 */;
import InteractionStore from "InteractionStore" /* 8268 */;
import LurkingStore from "LurkingStore" /* 4905 */;
import MediaPostSharePromptStore from "MediaPostSharePromptStore" /* 8269 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4906 */;
import ThreadMessageStore from "ThreadMessageStore" /* 7405 */;
import ThemeStore from "ThemeStore" /* 1204 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4824 */;
import GuildMemberStore from "GuildMemberStore" /* 4884 */;
import GuildStore from "GuildStore" /* 4846 */;
import RelationshipStore from "RelationshipStore" /* 4914 */;
import UploadStore from "UploadStore" /* 8271 */;
import UserStore from "UserStore" /* 1389 */;
import MessageConstants from "MessageConstants" /* 4977 */;
import Constants from "Constants" /* 1084 */;
import size from "module_2" /* 2 */;

const ReferencedMessageStore = ReferencedMessageStore2;

function createThreadEmbed(message, roleStyle, isInlineReplyPreview, channel1, options, forcedTheme) {
  if (!isInlineReplyPreview) {
    if (message.hasFlag(constants3.HAS_THREAD)) {
      if (null != channel1) {
        let string2Result = dependencyMap;
        const channelName = useChannelName.computeChannelName(channel1, UserStore, RelationshipStore);
        const backgroundColor = getEmbedThemeColorsDefault(forcedTheme).baseColors.backgroundColor;
        const mostRecentMessage = ThreadMessageStore.getMostRecentMessage(SnowflakeUtilsDefault.castMessageIdAsChannelId(message.id));
        const count = ThreadMessageStore.getCount(SnowflakeUtilsDefault.castMessageIdAsChannelId(message.id));
        let intl5 = MessageCountUtils.formatMobileMessageCountLabel(count, channel1.id);
        let string2 = MessageCountUtils.formatMessageCountLabel(count, channel1.id);
        if (null != count) {
          if (count > 0) {
            if (tmp15Result.isChannelSpoilerGated(channel1)) {
              const obj2 = { title: channelName, messageCountLabel: intl5, messageCountAccessibilityLabel: string2, messagePreviewString: null, archived: false, backgroundColor: null };
              intl5 = util.intl;
              string2 = intl5.string;
              string2Result = string2(util.t["5uaI/7"]);
              obj2.messagePreviewString = string2Result;
              obj2.backgroundColor = backgroundColor;
              let obj4 = obj2;
            } else {
              const threadMetadata = channel1.threadMetadata;
              let archived;
              if (threadMetadata != null) {
                archived = threadMetadata.archived;
              }
              if (archived) {
                const obj3 = { title: channelName, messageCountLabel: intl5, messageCountAccessibilityLabel: string2, messagePreviewString: null, archived: true, archivedIconUrl: null, backgroundColor: null };
                const intl4 = util.intl;
                obj3.messagePreviewString = intl4.string(util.t.ZTo4HS);
                obj3.archivedIconUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef8276);
                obj3.backgroundColor = backgroundColor;
                obj4 = obj3;
                const tmp15Result2 = renderer_EmbedUtils;
              } else {
                if (null != mostRecentMessage) {
                  if (mostRecentMessage.type !== constants.CHANNEL_NAME_CHANGE) {
                    if (mostRecentMessage.type !== tmp23.THREAD_STARTER_MESSAGE) {
                      if (!mostRecentMessage.blocked) {
                        if (!mostRecentMessage.ignored) {
                          obj4 = { title: channelName, messageCountLabel: intl5, messageCountAccessibilityLabel: string2, referencedMessage: null, backgroundColor: null };
                          const obj5 = { state: ReferencedMessageRowState.LOADED, message: null };
                          const obj6 = { message: mostRecentMessage, roleStyle, options, isFirst: true, isEditing: false, canShowImages: true, isSystemDM: false, isInlineReplyPreview: true };
                          obj5.message = createMessageContent(obj6);
                          obj4.referencedMessage = obj5;
                          obj4.backgroundColor = backgroundColor;
                        }
                      }
                      const obj7 = { title: channelName, messageCountLabel: intl5, messageCountAccessibilityLabel: string2, messagePreviewString: null, archived: false, backgroundColor: null };
                      const intl2 = util.intl;
                      const string = intl2.string;
                      let XAkOo2 = util.t;
                      if (mostRecentMessage.blocked) {
                        XAkOo2 = XAkOo2.XAkOo2;
                        let stringResult = string(XAkOo2);
                      } else {
                        stringResult = string(XAkOo2["G7p6v/"]);
                      }
                      obj7.messagePreviewString = stringResult;
                      obj7.backgroundColor = backgroundColor;
                    }
                  }
                }
                const obj8 = { title: channelName, messageCountLabel: intl5, messageCountAccessibilityLabel: string2, messagePreviewString: null, archived: false, backgroundColor: null };
                const intl3 = util.intl;
                obj8.messagePreviewString = intl3.string(util.t.ZTo4HS);
                obj8.backgroundColor = backgroundColor;
                obj4 = obj8;
              }
            }
            tmp15Result = SpoilerChannelUtils;
          }
        }
        const obj = { title: channelName, messageCountLabel: intl5, messageCountAccessibilityLabel: string2, messagePreviewString: null, archived: false, backgroundColor: null };
        const intl = util.intl;
        obj.messagePreviewString = intl.string(util.t.HYtNyE);
        obj.backgroundColor = backgroundColor;
        return obj;
      }
    }
  }
}
function createMessageContent(message) {
  message = message.message;
  ({ messageForward, roleStyle, isFirst, isEditing, canShowImages, isSystemDM, isInlineReplyPreview } = message);
  if (isInlineReplyPreview === undefined) {
    isInlineReplyPreview = false;
  }
  ({ options, pushFeedbackType, renderContentOnly } = message);
  gifAutoPlay = undefined;
  shouldObscureSpoiler = undefined;
  AccessibilityStore = undefined;
  ApplicationStore = undefined;
  let guildId1;
  let enabledHarmTypesForMessage;
  let result1;
  let setting;
  let interaction;
  ({ ignoreMentioned, animateEmoji, gifAutoPlay } = options);
  ({ renderCommunicationDisabled, renderAttachments, renderPolls, forcedTheme, forceHideSimpleEmbedContent, shouldObscureSpoiler } = options);
  const shouldDisableInteractiveComponents = options.shouldDisableInteractiveComponents;
  const restrictedPreview = options.restrictedPreview;
  ({ renderEmbeds, renderReactions, inlineEmbedMedia, inlineAttachmentMedia, constrainedWidth, animatingStickerMessageId, timestampHourCycle, renderCodedLinks, renderGiftCode, renderActivityInstanceEmbed, renderActivityInviteEmbed, renderComponents, renderThreadEmbeds, renderReplies, renderExecutedCommands, renderSharedClientTheme, renderForumPostActions, ignoreEmbedDescriptionCache, useAlternateEmbedColors } = options);
  if (animateEmoji) {
    const AnimateEmoji = message(shouldObscureSpoiler[36]).AnimateEmoji;
    animateEmoji = AnimateEmoji.getSetting();
  }
  if (forcedTheme == null) {
    forcedTheme = ThemeStore.theme;
  }
  const tmp5 = shouldObscureSpoiler;
  const tmp6 = gifAutoPlay(shouldObscureSpoiler[37])(forcedTheme, useAlternateEmbedColors);
  AccessibilityStore = tmp6;
  ApplicationStore = tmp7;
  let tmp9 = tmp7;
  if (true === canShowImages) {
    tmp9 = renderEmbeds;
  }
  if (tmp9) {
    tmp9 = message.type !== constants.CUSTOM_GIFT;
  }
  let tmp11 = tmp7;
  if (true === canShowImages) {
    tmp11 = inlineEmbedMedia;
  }
  let tmp12 = tmp7;
  if (true === canShowImages) {
    tmp12 = inlineAttachmentMedia;
  }
  const channel = ChannelStore.getChannel(message.getChannelId());
  const channel1 = ChannelStore.getChannel(gifAutoPlay(tmp5[26]).castMessageIdAsChannelId(message.id));
  guildId1 = undefined;
  if (channel != null) {
    guildId1 = channel.getGuildId();
  }
  const tmp15 = message;
  const tmp4Result = gifAutoPlay(tmp5[26]);
  const hasEnhancedRoleColors = message(tmp5[38]).getHasEnhancedRoleColors(guildId1, message.author.id);
  if (messageForward == null) {
    messageForward = tmp15(tmp5[39]).maybeCreateSingleForwardForMessage(message);
    const tmp15Result = tmp15(tmp5[39]);
  }
  let message2 = message;
  if (null != messageForward) {
    message2 = messageForward.messageSnapshot.message;
  }
  let items = [];
  if (renderReactions) {
    const obj2 = { reactions: message.reactions, animateEmoji };
    items = tmp4(tmp5[40])(obj2);
  }
  let tmp18 = null;
  if (message.type === constants.THREAD_STARTER_MESSAGE) {
    const messageByReference = ReferencedMessageStore.getMessageByReference(message.messageReference);
    let message1 = null;
    if (messageByReference.state === ReferencedMessageState.LOADED) {
      message1 = messageByReference.message;
    }
    tmp18 = message1;
  }
  if (null != tmp18) {
    const obj3 = {};
    const obj5 = { message: tmp18, roleStyle, isFirst, isEditing, canShowImages, isSystemDM, isInlineReplyPreview, options: null };
    const obj6 = {};
    const merged = Object.assign(options);
    obj6.renderThreadEmbeds = false;
    obj6.renderReactions = false;
    obj6.shouldDisableInteractiveComponents = true;
    obj5.options = obj6;
    const merged1 = Object.assign(createMessageContent(obj5));
    obj3.id = message.id;
    return obj3;
  } else if (tmp4(tmp5[41])(message)) {
    if (message.type === constants.THREAD_CREATED) {
      const obj7 = { threadEmbed: createThreadEmbed(message, roleStyle, isInlineReplyPreview, channel1, options, tmp8) };
      const obj8 = { message, theme: forcedTheme, reactions: items, roleStyle };
      const merged2 = Object.assign(tmp15(tmp5[42]).createSystemMessageContent(obj8));
      let systemMessageContent = obj7;
      const tmp15Result64 = tmp15(tmp5[42]);
    } else {
      const obj9 = { message, theme: forcedTheme, reactions: items, roleStyle, isForumPost: null };
      let isForumPostResult;
      if (channel != null) {
        isForumPostResult = channel.isForumPost();
      }
      obj9.isForumPost = isForumPostResult;
      systemMessageContent = tmp15(tmp5[42]).createSystemMessageContent(obj9);
      const tmp15Result65 = tmp15(tmp5[42]);
    }
    return systemMessageContent;
  } else {
    let tmp23 = !isFirst;
    if (isFirst) {
      tmp23 = renderContentOnly;
    }
    const author = message.author;
    let timestamp = message.editedTimestamp;
    if (timestamp == null) {
      timestamp = message.timestamp;
    }
    const result = tmp15(tmp5[43]).isMessageNewerThanImprovedMarkdownEpoch(timestamp.valueOf());
    if (null != message2.content) {
      if ("" !== message2.content) {
        const tmp15Result67 = tmp15(tmp5[44]);
        if (!forceHideSimpleEmbedContent) {
          let tmp25 = tmp9;
          if (tmp9) {
            tmp25 = tmp11;
          }
          forceHideSimpleEmbedContent = tmp25;
        }
        const tmp26 = null != channel1 && message.isFirstMessageInForumPost(channel1);
        let parseMessageMarkupResult = tmp15Result67.parseMessageMarkup(message, message2, forceHideSimpleEmbedContent, isInlineReplyPreview, tmp26, result, result);
      }
      ({ content, hasSpoilerEmbeds } = parseMessageMarkupResult);
      let tmp35 = restrictedPreview;
      if (restrictedPreview) {
        tmp35 = null != content;
      }
      let stringResult = content;
      if (tmp35) {
        stringResult = tmp4(tmp5[45])(content);
      }
      enabledHarmTypesForMessage = tmp15(tmp5[46]).getEnabledHarmTypesForMessage(message);
      const tmp15Result68 = tmp15(tmp5[46]);
      result1 = tmp15(tmp5[47]).shouldAgeVerifyForExplicitMedia();
      const ViewImageDescriptions = tmp15(tmp5[36]).ViewImageDescriptions;
      setting = ViewImageDescriptions.getSetting();
      if (tmp9) {
        tmp9 = !parseMessageMarkupResult.hasBailedAst;
      }
      if (tmp9) {
        tmp9 = !restrictedPreview;
      }
      interaction = setting.getInteraction(message);
      let tmp4Result1Result;
      if (tmp9) {
        const obj10 = { embeds: message2.embeds, channelId: message.channel_id, gifAutoPlay, hasSpoilerEmbeds: null, ignoreEmbedDescriptionCache: null, shouldInlineEmbedMedia: null, colors: null, showListsAndHeaders: null, showMaskedLinks: null, themedBackgroundColor: null, enabledContentHarmTypeFlags: null, shouldAgeVerify: null, authorIsBot: null, showContentInventoryEntryFallbackEmbed: null, transformComponents: null };
        if (hasSpoilerEmbeds) {
          hasSpoilerEmbeds = shouldObscureSpoiler;
        }
        obj10.hasSpoilerEmbeds = hasSpoilerEmbeds;
        obj10.ignoreEmbedDescriptionCache = ignoreEmbedDescriptionCache;
        obj10.shouldInlineEmbedMedia = tmp11;
        obj10.colors = tmp6;
        obj10.showListsAndHeaders = result;
        obj10.showMaskedLinks = result;
        obj10.themedBackgroundColor = tmp6.embedBackgroundColor;
        obj10.enabledContentHarmTypeFlags = enabledHarmTypesForMessage;
        obj10.shouldAgeVerify = result1;
        obj10.authorIsBot = message.author.bot;
        obj10.showContentInventoryEntryFallbackEmbed = message.showContentInventoryEntryFallbackEmbed;
        obj10.transformComponents = function transformComponents(arg0) {
          return transformMessageComponentsDefault({ message, guildId: guildId1, interaction, shouldDisableInteractiveComponents, shouldShowMedia, shouldObscureSpoiler, enabledContentHarmTypeFlags: enabledHarmTypesForMessage, shouldAgeVerify: result1, shouldShowMosaicMediaDescriptions: setting, shouldAutoPlayGifs: gifAutoPlay, colors }, arg0);
        };
        tmp4Result1Result = tmp4(tmp5[48])(obj10);
        const tmp4Result8 = tmp4(tmp5[48]);
      }
      const obj11 = { message, isSystemDM, channel, colors: tmp6 };
      const tmp15Result69 = tmp15(tmp5[47]);
      ({ tagText, tagAccessibilityLabel, tagVerified, tagTextColor, tagBackgroundColor, tagType, tagIconUrl, opTagText, opTagTextColor, opTagBackgroundColor } = tmp4(tmp5[50])(obj11));
      const uploaderFileForMessageId = UploadStore.getUploaderFileForMessageId(message.id);
      const tmp44 = tmp4(tmp5[50])(obj11);
      let tmp49 = tmp4Result1Result;
      if (!tmp48) {
        let items1 = tmp4Result1Result;
        if (tmp4Result1Result == null) {
          items1 = [];
        }
        const obj12 = { uploaderFile: uploaderFileForMessageId, useAttachmentUploadPreview: tmp46, colors: tmp6 };
        items1.push(tmp4(tmp5[51])(obj12));
        tmp49 = items1;
      }
      const message4 = result1.getMessage(message.id);
      let tmp53 = tmp49;
      if (null != message4) {
        let items2 = tmp49;
        if (tmp49 == null) {
          items2 = [];
        }
        const obj13 = { errorMessage: message4.errorMessage, colors: tmp6 };
        items2.push(tmp15(tmp5[51]).createAutomodBlockedMessageEmbed(obj13));
        tmp53 = items2;
        const tmp15Result70 = tmp15(tmp5[51]);
      }
      tmp48 = message.state !== constants2.SEND_FAILED || message.isCommandType();
      const userAuthor = tmp15(tmp5[52]).getUserAuthor(message.author, channel);
      ({ guildMemberAvatar, guildMemberAvatarDecoration, iconRoleId } = userAuthor);
      const tmp15Result71 = tmp15(tmp5[52]);
      if (message.isInteractionPlaceholder()) {
        if (null == message.author.avatar) {
          if (null == guildMemberAvatar) {
            const application = message.application;
            let icon;
            if (application != null) {
              icon = application.icon;
            }
            if (null != icon) {
              const obj15 = { id: message.application.id, icon: message.application.icon, bot: message.application.bot };
              let applicationIconSource = tmp4(tmp5[54]).getApplicationIconSource(obj15);
              const tmp4Result9 = tmp4(tmp5[54]);
            }
            const ensureAvatarSourceResult = tmp15Result72.ensureAvatarSource(applicationIconSource);
            if (null == guildMemberAvatarDecoration) {
              guildMemberAvatarDecoration = author.avatarDecoration;
            }
            const obj16 = { avatarDecoration: guildMemberAvatarDecoration, size: null };
            const tmp15Result73 = tmp15(tmp5[54]);
            obj16.size = tmp15(tmp5[55]).getDecorationSizeForAvatarSize(tmp15(tmp5[56]).AvatarSizes.NORMAL);
            let member = null;
            const avatarDecorationURL = tmp15Result73.getAvatarDecorationURL(obj16);
            if (null != guildId1) {
              member = GuildMemberStore.getMember(guildId1, author.id);
            }
            const tmp15Result74 = tmp15(tmp5[55]);
            let prop;
            if (member != null) {
              prop = member.gamingLeaderboardData;
            }
            const activeLeaderboardWinnerData = tmp15(tmp5[57]).getActiveLeaderboardWinnerData(prop);
            let tmp64;
            if (null != activeLeaderboardWinnerData) {
              if (null != activeLeaderboardWinnerData.winningStreak) {
                if (null != activeLeaderboardWinnerData.winningWeek) {
                  if (null != activeLeaderboardWinnerData.winningStat) {
                    tmp64 = activeLeaderboardWinnerData;
                  }
                }
              }
            }
            const tmp15Result75 = tmp15(tmp5[57]);
            let prop1;
            if (member != null) {
              prop1 = member.gamingLeaderboardData;
            }
            const activeLeaderboardLeaderData = tmp15(tmp5[57]).getActiveLeaderboardLeaderData(prop1);
            if (null != tmp64) {
              let num2 = tmp64.winningStreak;
              if (num2 == null) {
                num2 = 0;
              }
              if (num2 > 1) {
                let tmp4Result10 = tmp4(tmp5[58]);
              } else {
                tmp4Result10 = tmp4(tmp5[59]);
              }
              const obj17 = { source: tmp4Result10, name: tmp15(tmp5[60]).LEADERBOARD_WINNER_ROLE_NAME_PREFIX + tmp15(tmp5[60]).encodeWinnerData(tmp64), size: 18, alt: null };
              const tmp15Result77 = tmp15(tmp5[60]);
              obj17.alt = tmp15(tmp5[60]).getLeaderboardWinnerBadgeText(tmp64);
              const tmp15Result78 = tmp15(tmp5[60]);
            } else {
              if (null != activeLeaderboardLeaderData) {
                const obj18 = { source: tmp4(tmp5[61]), name: null, size: 18, alt: null };
                let num = activeLeaderboardLeaderData.currentLeaderStat;
                if (num == null) {
                  num = 0;
                }
                obj18.name = tmp15(tmp5[60]).LEADERBOARD_LEADER_ROLE_NAME_PREFIX + num;
                obj18.alt = tmp15(tmp5[60]).getLeaderboardLeaderBadgeText(activeLeaderboardLeaderData);
                let roleIcon = obj18;
                const tmp15Result79 = tmp15(tmp5[60]);
              } else if (null != iconRoleId) {
                if (null != guildId1) {
                  const obj19 = { guildId: guildId1, roleId: iconRoleId, size: 18 };
                  roleIcon = tmp15(tmp5[62]).getRoleIcon(obj19);
                  const tmp15Result80 = tmp15(tmp5[62]);
                }
              }
              if (message.hasFlag(constants3.SOURCE_MESSAGE_DELETED)) {
                const intl = tmp15(tmp5[29]).intl;
                stringResult = intl.string(tmp15(tmp5[29]).t.JOtgSw);
              }
              const messageAuthor = tmp15(tmp5[52]).getMessageAuthor(message);
              ({ nick, colorString, colorStrings } = messageAuthor);
              if (message.type === constants.INTERACTION_PREMIUM_UPSELL) {
                const intl2 = tmp15(tmp5[29]).intl;
                const obj20 = { appName: nick };
                stringResult = intl2.formatToPlainString(tmp15(tmp5[29]).t["u4A+xK"], obj20);
              }
              if (message.type === constants.REPLY) {
                if (renderReplies) {
                  const messageByReference1 = ReferencedMessageStore.getMessageByReference(message.messageReference);
                  const state = messageByReference1.state;
                  if (ReferencedMessageState.LOADED === state) {
                    const message3 = messageByReference1.message;
                    const result2 = tmp15(tmp5[39]).maybeCreateSingleForwardForMessage(message3);
                    if (RelationshipStore.isBlockedForMessage(message3)) {
                      const obj21 = { state: ReferencedMessageRowState.SYSTEM, content: null };
                      const intl12 = tmp15(tmp5[29]).intl;
                      obj21.content = intl12.string(tmp15(tmp5[29]).t.XAkOo2);
                      let tmp72 = obj21;
                    } else if (RelationshipStore.isIgnoredForMessage(message3)) {
                      const obj22 = { state: ReferencedMessageRowState.SYSTEM, content: null };
                      const intl11 = tmp15(tmp5[29]).intl;
                      obj22.content = intl11.string(tmp15(tmp5[29]).t["G7p6v/"]);
                      tmp72 = obj22;
                    } else {
                      const obj23 = { message: message3, messageForward: result2, roleStyle, isFirst: true, isEditing: false, canShowImages: true, isSystemDM: false, isInlineReplyPreview: true, options: null };
                      const obj24 = {};
                      const merged3 = Object.assign(options);
                      obj24.renderReplies = false;
                      obj23.options = obj24;
                      const tmp84 = createMessageContent(obj23);
                      if (null == tmp84) {
                        const obj25 = { state: ReferencedMessageRowState.SYSTEM, content: null };
                        const intl10 = tmp15(tmp5[29]).intl;
                        obj25.content = intl10.string(tmp15(tmp5[29]).t["1i+hMi"]);
                        tmp72 = obj25;
                      } else {
                        if ("username" in tmp84) {
                          const messageAuthor1 = tmp15(tmp5[52]).getMessageAuthor(message3);
                          ({ nick: nick2, colorString: colorString2 } = messageAuthor1);
                          if (nick2 == null) {
                            nick2 = message3.author.username;
                          }
                          tmp84.username = nick2;
                          if (tmp23) {
                            let colorString3 = tmp84.colorString;
                          } else {
                            colorString3 = shouldDisableInteractiveComponents(colorString2);
                            if (colorString3 == null) {
                              colorString3 = tmp84.colorString;
                            }
                          }
                          tmp84.colorString = colorString3;
                          if (tmp4(tmp5[63])(message, message3)) {
                            tmp84.username = `@${tmp84.username}`;
                          }
                          const tmp15Result83 = tmp15(tmp5[52]);
                        }
                        const _Array = Array;
                        let isArray = Array.isArray(tmp84.content);
                        if (isArray) {
                          isArray = 0 === tmp84.content.length;
                        }
                        if (isArray) {
                          tmp84.content = undefined;
                        }
                        let message5;
                        if (result2 != null) {
                          message5 = result2.messageSnapshot.message;
                        }
                        if (message5 == null) {
                          message5 = message3;
                        }
                        if ("stickers" in message5) {
                          let messageStickers = tmp15(tmp5[33]).getMessageStickers(message5);
                          const tmp15Result84 = tmp15(tmp5[33]);
                        } else {
                          messageStickers = [];
                        }
                        if (messageStickers.length > 0) {
                          const intl9 = tmp15(tmp5[29]).intl;
                          let stringResult1 = intl9.string(tmp15(tmp5[29]).t["7K5Lma"]);
                        } else {
                          if ("interaction" in message5) {
                            if (null != message5.interaction) {
                              if ("" === message5.content) {
                                const intl8 = tmp15(tmp5[29]).intl;
                                stringResult1 = intl8.string(tmp15(tmp5[29]).t["2v7kfl"]);
                              }
                            }
                          }
                          if (tmp15Result85.hasFlag(message5.flags, constants3.IS_VOICE_MESSAGE)) {
                            const intl7 = tmp15(tmp5[29]).intl;
                            stringResult1 = intl7.string(tmp15(tmp5[29]).t["6bhHrc"]);
                          } else if (message5.type === constants.POLL_RESULT) {
                            stringResult1 = tmp15(tmp5[35]).getPollResultsReplyPreviewMobile(message5);
                            const tmp15Result86 = tmp15(tmp5[35]);
                          } else {
                            if (tmp15Result87.hasFlag(message5.flags, constants3.IS_COMPONENTS_V2)) {
                              const intl6 = tmp15(tmp5[29]).intl;
                              stringResult1 = intl6.string(tmp15(tmp5[29]).t.Xxm5i3);
                            } else if ("" === message5.content) {
                              const intl5 = tmp15(tmp5[29]).intl;
                              stringResult1 = intl5.string(tmp15(tmp5[29]).t.JAKsM8);
                            } else {
                              stringResult1 = null;
                            }
                            tmp15Result87 = tmp15(tmp5[34]);
                          }
                          tmp15Result85 = tmp15(tmp5[34]);
                        }
                        if (message3.type === constants.POLL_RESULT) {
                          tmp84.content = stringResult1;
                        }
                        const obj26 = { state: ReferencedMessageRowState.LOADED, message: tmp84 };
                        tmp72 = obj26;
                        if (null != stringResult1) {
                          obj26.systemContent = stringResult1;
                          tmp72 = obj26;
                        }
                      }
                    }
                    const tmp15Result82 = tmp15(tmp5[39]);
                  } else if (ReferencedMessageState.NOT_LOADED === state) {
                    const obj27 = { state: ReferencedMessageRowState.SYSTEM, content: null };
                    const intl4 = tmp15(tmp5[29]).intl;
                    obj27.content = intl4.string(tmp15(tmp5[29]).t["1i+hMi"]);
                    tmp72 = obj27;
                  } else if (ReferencedMessageState.DELETED === state) {
                    const obj28 = { state: ReferencedMessageRowState.SYSTEM, content: null };
                    const intl3 = tmp15(tmp5[29]).intl;
                    obj28.content = intl3.string(tmp15(tmp5[29]).t.mE3KJN);
                    tmp72 = obj28;
                  } else {
                    tmp15(tmp5[64]).assertNever(messageByReference1);
                    const tmp15Result88 = tmp15(tmp5[64]);
                  }
                }
              }
              if (renderThreadEmbeds) {
                const tmp95 = createThreadEmbed(message, roleStyle, isInlineReplyPreview, channel1, options, tmp8);
              }
              const tmp15Result81 = tmp15(tmp5[52]);
              const interactionStatus = tmp15(tmp5[65]).createInteractionStatus(message, interaction);
              const tmp15Result89 = tmp15(tmp5[65]);
              const useReducedMotion = AccessibilityStore.useReducedMotion;
              let parent_id;
              const result3 = tmp15(tmp5[66]).isMemberCommunicationDisabled(member);
              if (channel != null) {
                parent_id = channel.parent_id;
              }
              let channel2 = channel;
              if (null != parent_id) {
                let isThreadResult;
                if (channel != null) {
                  isThreadResult = channel.isThread();
                }
                channel2 = channel;
                if (isThreadResult) {
                  channel2 = ChannelStore.getChannel(channel.parent_id);
                }
              }
              const tmp15Result90 = tmp15(tmp5[66]);
              const obj29 = { guildMember: member, channel: channel2, onlyChannelConnectionRoles: true };
              const visibleConnectionsRole = tmp15(tmp5[67]).getVisibleConnectionsRole(obj29);
              let tmp110 = tmp46;
              if (tmp46) {
                tmp110 = 0 === message.attachments.length;
              }
              if (tmp110) {
                tmp110 = null != uploaderFileForMessageId;
              }
              if (tmp110) {
                const obj30 = { uploaderFile: uploaderFileForMessageId, isFailedMessage: message.state === constants2.SEND_FAILED, shouldInlineAttachmentMedia: tmp12 };
                let items3 = tmp4(tmp5[68])(obj30);
              } else {
                items3 = [];
                if (renderAttachments) {
                  const obj31 = { attachments: message2.attachments, uploadAttachments: UploadStore.getUploadAttachments(message.nonce), shouldInlineAttachmentMedia: tmp12, gifAutoPlay, viewImageDescriptions: setting, useReducedMotion, shouldObscureSpoiler, themedBackgroundColor: tmp6.embedBackgroundColor, enabledContentHarmTypeFlags: enabledHarmTypesForMessage, shouldAgeVerify: result1, colors: tmp6 };
                  items3 = tmp4(tmp5[69])(obj31);
                  const tmp4Result11 = tmp4(tmp5[69]);
                }
              }
              if (tmp110) {
                if (message.state !== constants2.SEND_FAILED) {
                  const intl13 = tmp15(tmp5[29]).intl;
                  let stringResult2 = intl13.string(tmp15(tmp5[29]).t["yXY+5J"]);
                }
                if (tmp110) {
                  if (message.state !== constants2.SEND_FAILED) {
                    const intl14 = tmp15(tmp5[29]).intl;
                    let stringResult3 = intl14.string(tmp15(tmp5[29]).t["yXY+5J"]);
                  }
                  let stringResult4 = stringResult;
                  const id1 = AuthenticationStore.getId();
                  if (message.isUnsupported) {
                    const intl15 = tmp15(tmp5[29]).intl;
                    stringResult4 = intl15.string(tmp15(tmp5[29]).t.sWi5EU);
                  }
                  const isPollResult = message.isPoll();
                  let tmp118 = !isPollResult;
                  if (isPollResult) {
                    let tmp119 = !isInlineReplyPreview;
                    if (!isInlineReplyPreview) {
                      tmp119 = renderPolls;
                    }
                    tmp118 = tmp119;
                  }
                  if (!tmp118) {
                    let tmp120 = null != stringResult;
                    if (tmp120) {
                      tmp120 = "" !== stringResult;
                    }
                    tmp118 = tmp120;
                  }
                  if (!tmp118) {
                    stringResult4 = tmp15(tmp5[35]).getPollReplyPreview(message);
                    const tmp15Result92 = tmp15(tmp5[35]);
                  }
                  if (renderPolls) {
                    const obj32 = { theme: forcedTheme, animateEmoji };
                    const tmp121 = tmp4(tmp5[71])(message, undefined, obj32);
                  }
                  if (renderSharedClientTheme) {
                    const result4 = tmp15(tmp5[72]).formatSharedClientThemeData(message, ensureAvatarSourceResult, nick);
                    const tmp15Result93 = tmp15(tmp5[72]);
                  }
                  if (tmp15Result94.shouldDisplayGuildTag(author.id, tmp123)) {
                    const userPrimaryGuild = tmp15(tmp5[73]).getUserPrimaryGuild(author.primaryGuild);
                    let guildTagBadgeUrl;
                    ({ guildId, tag } = userPrimaryGuild);
                    if (null != userPrimaryGuild.guildId) {
                      guildTagBadgeUrl = tmp15(tmp5[73]).getGuildTagBadgeUrl(userPrimaryGuild.guildId, userPrimaryGuild.badge, GuildTagBadgeSize.SIZE_12);
                      const tmp15Result96 = tmp15(tmp5[73]);
                    }
                    const tmp124 = guildTagBadgeUrl;
                    const tmp15Result95 = tmp15(tmp5[73]);
                  }
                  let linkedLobby;
                  if (channel != null) {
                    linkedLobby = channel.linkedLobby;
                  }
                  if (null != linkedLobby) {
                    if (null != message.additionalName) {
                      if ("" !== message.additionalName) {
                        const application1 = ApplicationStore.getApplication(linkedLobby.application_id);
                        let icon1;
                        if (application1 != null) {
                          icon1 = application1.icon;
                        }
                        let applicationIconURL;
                        if (null != icon1) {
                          ({ id: obj68.id, icon: obj68.icon } = application1);
                          applicationIconURL = tmp4(tmp5[54]).getApplicationIconURL({ id: null, icon: null, size: 16 });
                          const obj33 = { id: null, icon: null, size: 16 };
                          const tmp4Result12 = tmp4(tmp5[54]);
                        }
                        const additionalName = message.additionalName;
                        const tmp131 = applicationIconURL;
                      }
                    }
                  }
                  tmp123 = guildId1;
                  tmp15Result94 = tmp15(tmp5[73]);
                  let tmp136 = message2;
                  if (message2 == null) {
                    tmp136 = message;
                  }
                  let str8 = message.applicationId;
                  const tmp15Result97 = tmp15(tmp5[34]);
                  if (str8 == null) {
                    str8 = "";
                  }
                  const application2 = ApplicationStore.getApplication(str8);
                  let hasFlagResult1 = null != application2;
                  if (hasFlagResult1) {
                    hasFlagResult1 = tmp15(tmp5[34]).hasFlag(message.flags, constants3.SENT_BY_SOCIAL_LAYER_INTEGRATION);
                    const tmp15Result98 = tmp15(tmp5[34]);
                  }
                  if (hasFlagResult1) {
                    const id = application2.id;
                  }
                  let hasFlagResult2;
                  if (message2 != null) {
                    hasFlagResult2 = message2.hasFlag(constants3.IS_GUILD_OFFICIAL);
                  }
                  const items4 = [];
                  if (hasFlagResult2) {
                    guild = GuildStore.getGuild(guildId1);
                    if (null != guild) {
                      if (tmp15Result99.isGuildOfficialMessagesEnabled(guild, "createMessageContent")) {
                        let officialMessageColor = guild.officialMessageColor;
                        if (officialMessageColor == null) {
                          officialMessageColor = closure_24;
                        }
                        const officialMessageStyle = tmp105.officialMessageStyle;
                        const result5 = tmp15(tmp5[74]).showGuildOfficialMessageGradient(officialMessageStyle);
                        let tmp147;
                        if (result5) {
                          tmp147 = officialMessageColor | closure_26;
                        }
                        const tmp15Result100 = tmp15(tmp5[74]);
                        let numResult;
                        if (tmp15Result101.showGuildOfficialMessageTextColor(officialMessageStyle)) {
                          const internal = tmp4(tmp5[75]).internal;
                          const semanticColor = internal.resolveSemanticColor(forcedTheme, tmp4(tmp5[75]).colors.BACKGROUND_BASE_LOWER);
                          let num8 = 1;
                          if (tmp105.desaturateUserColors) {
                            num8 = tmp105.saturation;
                          }
                          const tmp15Result102 = tmp15(tmp5[74]);
                          let num9 = 0;
                          if (result5) {
                            num9 = closure_25;
                          }
                          const accessibleGuildOfficialTextColor = tmp15Result102.getAccessibleGuildOfficialTextColor(officialMessageColor, semanticColor, num8, num9);
                          numResult = accessibleGuildOfficialTextColor.num();
                        }
                        const intl16 = tmp15(tmp5[29]).intl;
                        items4.push(intl16.string(tmp15(tmp5[29]).t.GzDTxY));
                        const tmp143 = tmp147;
                        tmp15Result101 = tmp15(tmp5[74]);
                      }
                      tmp15Result99 = tmp15(tmp5[74]);
                    }
                  }
                  let obj76 = message2;
                  if (message2 == null) {
                    obj76 = message;
                  }
                  if (obj76.hasFlag(constants3.SUPPRESS_NOTIFICATIONS)) {
                    const intl17 = tmp15(tmp5[29]).intl;
                    items4.push(intl17.string(tmp15(tmp5[29]).t.t0MA8g));
                  }
                  if (items4.length > 0) {
                    const joined = items4.join(", ");
                  }
                  const hasFlagResult = tmp15(tmp5[34]).hasFlag(tmp136.flags, constants3.IS_VOICE_MESSAGE);
                  const obj34 = { id: null, channelId: null, guildId: null, flags: null, type: null, nonce: null, state: null, reactions: null, referencedMessage: null, threadEmbed: null, forwardInfo: null, mentioned: null, edited: null, editedTimestamp: null, editedColor: null, textColor: null, officialMessageColor: null, linkColor: null, tagText: null, tagAccessibilityLabel: null, tagVerified: null, tagTextColor: null, tagBackgroundColor: null, tagType: null, tagIconUrl: null, opTagText: null, opTagTextColor: null, opTagBackgroundColor: null, stateAccessibilityLabel: null, constrainedWidth: null, gifAutoPlay: null, animateEmoji: null, username: null, avatarURL: null, avatarDecorationURL: null, authorId: null, usernameColor: null, roleColor: null, roleColors: null, shouldShowRoleDot: null, shouldShowRoleOnName: null, showLinkDecorations: null, forceRevealSpoilers: null, colorString: null, roleIcon: null, connectionsRoleTag: null, timestamp: null, timestampTooltip: null, timestampColor: null, timestampAccessibilityLabel: null, content: null, isEditing: null, renderContentOnly: null, surveyIndication: null, ephemeralIndication: null, interactionStatus: null, executedCommand: null, components: null, feedbackColor: null, highlightColor: null, embeds: null, giftCodes: null, codedLinks: null, activityInstanceEmbed: null, activityRichPresenceInviteEmbed: null, useAttachmentGridLayout: null, useAttachmentUploadPreview: null, attachments: null, attachmentsOpacity: null, stickers: null, communicationDisabled: null, isFirstForumPostMessage: null, postActions: null, isCurrentUserMessageAuthor: null, usingGradientTheme: null, swipeToReplyIconUrl: null, swipeToEditIconUrl: null, postPreviewEmbeds: null, obscureLearnMoreLabel: null, safetyPolicyNoticeEmbed: null, pollData: null, sharedClientTheme: null, safetySystemNotificationEmbed: null };
                  ({ id: obj78.id, channel_id: obj78.channelId } = message);
                  const voiceChannelBadge = tmp15(tmp5[76]).createVoiceChannelBadge(message.author.id, guildId1);
                  obj34.guildId = guildId1;
                  let tmp161 = message2;
                  if (message2 == null) {
                    tmp161 = message;
                  }
                  obj34.flags = tmp161.flags;
                  obj34.type = message.type;
                  if (null != message.nonce) {
                    if (typeof message.nonce !== "string") {
                      const _String = String;
                      let nonce = String(message.nonce);
                    }
                    obj34.nonce = nonce;
                    obj34.state = message.state;
                    obj34.reactions = items;
                    let tmp163;
                    if (!renderContentOnly) {
                      tmp163 = tmp72;
                    }
                    obj34.referencedMessage = tmp163;
                    obj34.threadEmbed = tmp95;
                    let forwardInfo;
                    if (null != messageForward) {
                      forwardInfo = messageForward.getForwardInfo();
                    }
                    obj34.forwardInfo = forwardInfo;
                    let mentioned = !ignoreMentioned;
                    if (!ignoreMentioned) {
                      mentioned = message.mentioned;
                    }
                    obj34.mentioned = mentioned;
                    let str12 = "";
                    if (message.isEdited()) {
                      str12 = "";
                      if (!renderContentOnly) {
                        const intl18 = tmp15(tmp5[29]).intl;
                        str12 = intl18.string(tmp15(tmp5[29]).t.C8sXIM);
                      }
                    }
                    obj34.edited = str12;
                    let dateFormatResult;
                    if (message.isEdited()) {
                      if (!renderContentOnly) {
                        if (null != message.editedTimestamp) {
                          dateFormatResult = tmp15(tmp5[70]).dateFormat(message.editedTimestamp, "LLLL");
                          const tmp15Result104 = tmp15(tmp5[70]);
                        }
                      }
                    }
                    obj34.editedTimestamp = dateFormatResult;
                    obj34.editedColor = tmp6.editedColor;
                    if (message.isUnsupported) {
                      let textColor = tmp6.unsupportedColor;
                    } else if (null != tmp142) {
                      textColor = 4278190080 | tmp142;
                    } else {
                      textColor = tmp6.textColor;
                    }
                    obj34.textColor = textColor;
                    obj34.officialMessageColor = tmp143;
                    obj34.linkColor = tmp6.linkColor;
                    obj34.tagText = tagText;
                    obj34.tagAccessibilityLabel = tagAccessibilityLabel;
                    obj34.tagVerified = tagVerified;
                    obj34.tagTextColor = tagTextColor;
                    obj34.tagBackgroundColor = tagBackgroundColor;
                    obj34.tagType = tagType;
                    obj34.tagIconUrl = tagIconUrl;
                    obj34.opTagText = opTagText;
                    obj34.opTagTextColor = opTagTextColor;
                    obj34.opTagBackgroundColor = opTagBackgroundColor;
                    obj34.stateAccessibilityLabel = joined;
                    obj34.constrainedWidth = constrainedWidth;
                    obj34.gifAutoPlay = gifAutoPlay;
                    obj34.animateEmoji = animateEmoji;
                    if (tmp23) {
                      nick = author.username;
                    }
                    obj34.username = nick;
                    let uri;
                    if (!tmp23) {
                      uri = ensureAvatarSourceResult.uri;
                    }
                    obj34.avatarURL = uri;
                    let tmp167 = null;
                    if (!tmp23) {
                      tmp167 = avatarDecorationURL;
                    }
                    obj34.avatarDecorationURL = tmp167;
                    obj34.authorId = author.id;
                    if (!tmp23) {
                      if ("username" === roleStyle) {
                        let defaultUsernameColor = shouldDisableInteractiveComponents(colorString);
                        if (defaultUsernameColor == null) {
                          defaultUsernameColor = tmp6.defaultUsernameColor;
                        }
                      }
                      obj34.usernameColor = defaultUsernameColor;
                      let tmp170 = null;
                      if (!tmp23) {
                        let tmp171Result = shouldDisableInteractiveComponents(colorString);
                        if (tmp171Result == null) {
                          tmp171Result = null;
                        }
                        tmp170 = tmp171Result;
                      }
                      obj34.roleColor = tmp170;
                      let processColorStringsResult = null;
                      if (hasEnhancedRoleColors) {
                        processColorStringsResult = null;
                        if (!tmp23) {
                          processColorStringsResult = tmp15(tmp5[77]).processColorStrings(colorStrings);
                          const tmp15Result105 = tmp15(tmp5[77]);
                        }
                      }
                      obj34.roleColors = processColorStringsResult;
                      obj34.shouldShowRoleDot = "dot" === roleStyle;
                      obj34.shouldShowRoleOnName = "username" === roleStyle;
                      obj34.showLinkDecorations = AccessibilityStore.alwaysShowLinkDecorations;
                      obj34.forceRevealSpoilers = !shouldObscureSpoiler;
                      if (tmp23) {
                        let defaultUsernameColor2 = tmp6.defaultUsernameColor;
                      } else {
                        defaultUsernameColor2 = shouldDisableInteractiveComponents(colorString);
                        if (defaultUsernameColor2 == null) {
                          defaultUsernameColor2 = tmp6.defaultUsernameColor;
                        }
                      }
                      obj34.colorString = defaultUsernameColor2;
                      let tmp176;
                      if (!tmp23) {
                        tmp176 = roleIcon;
                      }
                      obj34.roleIcon = tmp176;
                      let connectionsRoleTag;
                      if (null != visibleConnectionsRole) {
                        connectionsRoleTag = tmp15(tmp5[78]).createConnectionsRoleTag(visibleConnectionsRole);
                        const tmp15Result106 = tmp15(tmp5[78]);
                      }
                      obj34.connectionsRoleTag = connectionsRoleTag;
                      let tmp178;
                      if (!tmp23) {
                        tmp178 = stringResult2;
                      }
                      obj34.timestamp = tmp178;
                      let dateFormatResult1;
                      if (!tmp23) {
                        dateFormatResult1 = tmp15(tmp5[70]).dateFormat(message.timestamp, "LLLL");
                        const tmp15Result107 = tmp15(tmp5[70]);
                      }
                      obj34.timestampTooltip = dateFormatResult1;
                      let timestampColor;
                      if (!tmp23) {
                        timestampColor = tmp6.timestampColor;
                      }
                      obj34.timestampColor = timestampColor;
                      let tmp181;
                      if (!tmp23) {
                        tmp181 = stringResult3;
                      }
                      obj34.timestampAccessibilityLabel = tmp181;
                      obj34.content = stringResult4;
                      obj34.isEditing = isEditing;
                      obj34.renderContentOnly = renderContentOnly;
                      let surveyIndication;
                      if (undefined !== pushFeedbackType) {
                        surveyIndication = tmp15(tmp5[79]).createSurveyIndication(message, forcedTheme, pushFeedbackType);
                        const tmp15Result108 = tmp15(tmp5[79]);
                      }
                      obj34.surveyIndication = surveyIndication;
                      obj34.ephemeralIndication = tmp15(tmp5[80]).createEphemeralIndication(message);
                      obj34.interactionStatus = interactionStatus;
                      let executedCommand;
                      if (renderExecutedCommands) {
                        const tmp15Result110 = tmp15(tmp5[81]);
                        executedCommand = tmp15Result110.createExecutedCommand(message, channel, roleStyle, tmp8, tmp6.defaultUsernameColor);
                      }
                      obj34.executedCommand = executedCommand;
                      let tmp189;
                      if (message2.components.length > 0) {
                        if (renderComponents) {
                          const obj35 = { message, guildId: guildId1, interaction, shouldDisableInteractiveComponents, shouldShowMedia: tmp7, shouldObscureSpoiler, enabledContentHarmTypeFlags: enabledHarmTypesForMessage, shouldAgeVerify: result1, shouldShowMosaicMediaDescriptions: setting, shouldAutoPlayGifs: gifAutoPlay, colors: tmp6 };
                          tmp189 = tmp4(tmp5[49])(obj35, message2.components);
                        }
                      }
                      obj34.components = tmp189;
                      let num12 = 0;
                      if (!renderContentOnly) {
                        num12 = tmp6.feedbackColor;
                      }
                      obj34.feedbackColor = num12;
                      let num13 = 0;
                      if (!renderContentOnly) {
                        num13 = tmp6.highlightColor;
                      }
                      obj34.highlightColor = num13;
                      obj34.embeds = tmp53;
                      if (renderGiftCode) {
                        let giftCodeEmbed = tmp15(tmp5[82]).createGiftCodeEmbed(message, forcedTheme);
                        const tmp15Result111 = tmp15(tmp5[82]);
                      } else {
                        giftCodeEmbed = [];
                      }
                      obj34.giftCodes = giftCodeEmbed;
                      if (renderCodedLinks) {
                        const tmp15Result112 = tmp15(tmp5[83]);
                        let codedLinkEmbeds = tmp15Result112.createCodedLinkEmbeds(message, message2, channel, tmp8);
                      } else {
                        codedLinkEmbeds = [];
                      }
                      obj34.codedLinks = codedLinkEmbeds;
                      let activityInstanceEmbed;
                      if (renderActivityInstanceEmbed) {
                        activityInstanceEmbed = tmp15(tmp5[84]).createActivityInstanceEmbed(message);
                        const tmp15Result113 = tmp15(tmp5[84]);
                      }
                      obj34.activityInstanceEmbed = activityInstanceEmbed;
                      let activityRichPresenceInviteEmbed;
                      if (renderActivityInviteEmbed) {
                        activityRichPresenceInviteEmbed = tmp15(tmp5[85]).createActivityRichPresenceInviteEmbed(message, channel, forcedTheme);
                        const tmp15Result114 = tmp15(tmp5[85]);
                      }
                      obj34.activityRichPresenceInviteEmbed = activityRichPresenceInviteEmbed;
                      if (tmp12) {
                        if (renderAttachments) {
                          renderAttachments = 0 !== message2.attachments.length || 0 !== message2.embeds.length;
                          const tmp197 = 0 !== message2.attachments.length || 0 !== message2.embeds.length;
                        }
                        if (!renderAttachments) {
                          renderAttachments = tmp46;
                        }
                        tmp12 = renderAttachments;
                      }
                      obj34.useAttachmentGridLayout = tmp12;
                      obj34.useAttachmentUploadPreview = tmp46;
                      obj34.attachments = items3;
                      let num15 = 1;
                      if (tmp46) {
                        num15 = 1;
                        if (message.state === constants2.SEND_FAILED) {
                          num15 = 0.2;
                        }
                      }
                      obj34.attachmentsOpacity = num15;
                      if (restrictedPreview) {
                        let items5 = [];
                      } else {
                        const obj36 = { message: message2, animateStickersSetting: null, isUserInteracting: null };
                        const AnimateStickers = tmp15(tmp5[36]).AnimateStickers;
                        obj36.animateStickersSetting = AnimateStickers.getSetting();
                        obj36.isUserInteracting = message.id === animatingStickerMessageId;
                        items5 = tmp4(tmp5[86])(obj36);
                        const tmp4Result13 = tmp4(tmp5[86]);
                      }
                      obj34.stickers = items5;
                      if (renderCommunicationDisabled) {
                        renderCommunicationDisabled = result3;
                      }
                      obj34.communicationDisabled = renderCommunicationDisabled;
                      let isForumPostResult1;
                      if (channel != null) {
                        isForumPostResult1 = channel.isForumPost();
                      }
                      obj34.isFirstForumPostMessage = isForumPostResult1 && message.id === message.channel_id;
                      let isForumPostResult2;
                      if (channel != null) {
                        isForumPostResult2 = channel.isForumPost();
                      }
                      let tmp201;
                      if (isForumPostResult2) {
                        if (renderForumPostActions) {
                          let forumPostActions;
                          if (message.id === message.channel_id) {
                            const guildId2 = channel.getGuildId();
                            if (null == guildId2) {
                              let defaultReaction;
                              if (0 === message.reactions.length) {
                                const channel3 = ChannelStore.getChannel(channel.parent_id);
                                let defaultReactionEmoji;
                                if (channel3 != null) {
                                  defaultReactionEmoji = channel3.defaultReactionEmoji;
                                }
                                let emojiId;
                                if (defaultReactionEmoji != null) {
                                  emojiId = defaultReactionEmoji.emojiId;
                                }
                                let usableCustomEmojiById = null;
                                if (null != emojiId) {
                                  usableCustomEmojiById = enabledHarmTypesForMessage.getUsableCustomEmojiById(defaultReactionEmoji.emojiId);
                                }
                                const obj37 = { defaultReactionEmoji, customGuildEmoji: usableCustomEmojiById };
                                defaultReaction = tmp15(tmp5[32]).createDefaultReaction(obj37);
                                const tmp15Result115 = tmp15(tmp5[32]);
                              }
                              const hasJoinedResult = JoinedThreadsStore.hasJoined(message.channel_id);
                              const shouldDisplayPromptResult = MediaPostSharePromptStore.shouldDisplayPrompt(channel.id);
                              const obj38 = { isFollowing: hasJoinedResult, hasReactions: 0 !== message.reactions.length, defaultReaction, showMediaPostSharePrompt: shouldDisplayPromptResult };
                              forumPostActions = tmp15(tmp5[32]).createForumPostActions(obj38);
                              const tmp15Result116 = tmp15(tmp5[32]);
                            }
                          }
                          tmp201 = forumPostActions;
                        }
                      }
                      obj34.postActions = tmp201;
                      obj34.isCurrentUserMessageAuthor = message.author.id === id1;
                      obj34.usingGradientTheme = null != guildId1.gradientPreset;
                      const tmp15Result109 = tmp15(tmp5[80]);
                      obj34.swipeToReplyIconUrl = tmp15(tmp5[30]).getAssetUriForEmbed(tmp4(tmp5[87]));
                      const tmp15Result117 = tmp15(tmp5[30]);
                      obj34.swipeToEditIconUrl = tmp15(tmp5[30]).getAssetUriForEmbed(tmp4(tmp5[88]));
                      if (tmp9) {
                        let postPreviewEmbeds = tmp15(tmp5[89]).createPostPreviewEmbeds(message, roleStyle, useReducedMotion);
                        const tmp15Result119 = tmp15(tmp5[89]);
                      } else {
                        postPreviewEmbeds = [];
                      }
                      obj34.postPreviewEmbeds = postPreviewEmbeds;
                      const intl19 = tmp15(tmp5[29]).intl;
                      obj34.obscureLearnMoreLabel = intl19.string(tmp15(tmp5[29]).t["2aXnfa"]);
                      const tmp15Result118 = tmp15(tmp5[30]);
                      obj34.safetyPolicyNoticeEmbed = tmp15(tmp5[90]).createSafetyPolicyNoticeEmbed(message);
                      obj34.pollData = tmp121;
                      obj34.sharedClientTheme = result4;
                      const tmp15Result120 = tmp15(tmp5[90]);
                      obj34.safetySystemNotificationEmbed = tmp15(tmp5[91]).createSafetySystemNotificationEmbed(message);
                      const tmp15Result121 = tmp15(tmp5[91]);
                      const merged4 = Object.assign(tmp15(tmp5[92]).createCtaButtons(message.id, message.channel_id, tmp6));
                      let embedBackgroundColor;
                      if (hasFlagResult) {
                        embedBackgroundColor = tmp6.embedBackgroundColor;
                      }
                      obj34.audioAttachmentBackgroundColor = embedBackgroundColor;
                      const tmp15Result122 = tmp15(tmp5[92]);
                      obj34.accessibilityActions = tmp15(tmp5[93]).createMessageAccessibilityActions(message, channel);
                      obj34.clanTagGuildId = guildId;
                      obj34.clanTag = tag;
                      obj34.clanBadgeUrl = tmp124;
                      obj34.lobbyAdditionalName = additionalName;
                      obj34.lobbyTagIconUrl = tmp131;
                      obj34.isFirst = isFirst;
                      obj34.gameApplicationId = id;
                      let type;
                      if (channel != null) {
                        type = channel.type;
                      }
                      obj34.isAnnouncementChannel = type === constants4.GUILD_ANNOUNCEMENT;
                      const tmp15Result123 = tmp15(tmp5[93]);
                      obj34.displayNameStyles = tmp15(tmp5[94]).createDisplayNameStylesMobile(message.author, member);
                      obj34.voiceChannelBadge = voiceChannelBadge;
                      return obj34;
                    }
                    defaultUsernameColor = tmp6.defaultUsernameColor;
                  }
                  nonce = message.nonce;
                  const tmp15Result103 = tmp15(tmp5[76]);
                }
                stringResult3 = tmp15(tmp5[70]).accessibilityLabelCalendarFormat(message.timestamp);
                const tmp15Result125 = tmp15(tmp5[70]);
              }
              const tmp15Result91 = tmp15(tmp5[67]);
              stringResult2 = tmp15(tmp5[70]).calendarFormat(message.timestamp, true, timestampHourCycle);
              const tmp15Result126 = tmp15(tmp5[70]);
            }
            const tmp15Result76 = tmp15(tmp5[57]);
          }
        }
      }
      if (null != guildMemberAvatar) {
        if (null != guildId1) {
          const obj39 = { userId: author.id, avatar: guildMemberAvatar, guildId: guildId1 };
          applicationIconSource = tmp4(tmp5[54]).getGuildMemberAvatarSource(obj39, author);
          const tmp4Result14 = tmp4(tmp5[54]);
        }
      }
      applicationIconSource = author.getAvatarSource(undefined);
      tmp15Result72 = tmp15(tmp5[53]);
    }
    parseMessageMarkupResult = { content: "Set", hasSpoilerEmbeds: "none", hasBailedAst: "URL" };
    const tmp15Result66 = tmp15(tmp5[43]);
  }
  const obj4 = message(tmp5[38]);
}
const processColor = _mod17.processColor;
const ReferencedMessageState = ReferencedMessageStore2.ReferencedMessageState;
({ DEFAULT_GUILD_OFFICIAL_COLOR: closure_24, GUILD_OFFICIAL_HIGHLIGHT_ALPHA: closure_25, GUILD_OFFICIAL_HIGHLIGHT_ALPHA_COLOR: closure_26 } = MessageConstants);
const ReferencedMessageRowState = RowGeneratorConstants.ReferencedMessageRowState;
({ MessageTypes: closure_28, MessageStates: closure_29, MessageFlags: closure_30, ChannelTypes: closure_31 } = Constants);
const GuildTagBadgeSize = GuildTagConstants.GuildTagBadgeSize;
let result = size.fileFinishedImporting("modules/messages/native/renderer/createMessageContent.tsx");

export default createMessageContent;