// === Module 9101: createMessageContent ===

// Module 9101 (createMessageContent)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _mod17 from "module_17" /* 17 */;
import util from "util" /* 1113 */;
import useChannelName from "useChannelName" /* 5891 */;
import SpoilerChannelUtils from "SpoilerChannelUtils" /* 6795 */;
import GuildTagConstants from "GuildTagConstants" /* 8344 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8588 */;
import transformMessageComponentsDefault from "transformMessageComponents" /* 8589 */;
import ReferencedMessageStore2 from "ReferencedMessageStore" /* 8677 */;
import MessageCountUtils from "MessageCountUtils" /* 9044 */;
import RowGeneratorConstants from "RowGeneratorConstants" /* 9094 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 9104 */;
import _modDef9105 from "module_9105" /* 9105 */;
import AccessibilityStore from "AccessibilityStore" /* 5244 */;
import ApplicationStore from "ApplicationStore" /* 2162 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 5267 */;
import EmojiStore from "EmojiStore" /* 6906 */;
import GuildAutomodMessageStore from "GuildAutomodMessageStore" /* 9099 */;
import InteractionStore from "InteractionStore" /* 8592 */;
import LurkingStore from "LurkingStore" /* 5176 */;
import MediaPostSharePromptStore from "MediaPostSharePromptStore" /* 9102 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 5177 */;
import ThreadMessageStore from "ThreadMessageStore" /* 8805 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 5092 */;
import GuildMemberStore from "GuildMemberStore" /* 5155 */;
import GuildStore from "GuildStore" /* 5114 */;
import RelationshipStore from "RelationshipStore" /* 5185 */;
import UploadStore from "UploadStore" /* 8955 */;
import UserStore from "UserStore" /* 1385 */;
import MessageConstants from "MessageConstants" /* 5248 */;
import Constants from "Constants" /* 1072 */;
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
                obj3.archivedIconUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef9105);
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
  ({ options, pushFeedbackType, renderContentOnly, unlinkedGamePlayerPlaceholders } = message);
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
    const AnimateEmoji = message(shouldObscureSpoiler[37]).AnimateEmoji;
    animateEmoji = AnimateEmoji.getSetting();
  }
  if (forcedTheme == null) {
    forcedTheme = ThemeStore.theme;
  }
  const tmp5 = shouldObscureSpoiler;
  const tmp6 = gifAutoPlay(shouldObscureSpoiler[38])(forcedTheme, useAlternateEmbedColors);
  AccessibilityStore = tmp6;
  ApplicationStore = tmp7;
  let tmp8 = tmp7;
  if (true === canShowImages) {
    tmp8 = renderEmbeds;
  }
  if (tmp8) {
    tmp8 = message.type !== constants.CUSTOM_GIFT;
  }
  let tmp10 = tmp7;
  if (true === canShowImages) {
    tmp10 = inlineEmbedMedia;
  }
  let tmp11 = tmp7;
  if (true === canShowImages) {
    tmp11 = inlineAttachmentMedia;
  }
  const channel = ChannelStore.getChannel(message.getChannelId());
  const channel1 = ChannelStore.getChannel(gifAutoPlay(tmp5[26]).castMessageIdAsChannelId(message.id));
  guildId1 = undefined;
  if (channel != null) {
    guildId1 = channel.getGuildId();
  }
  const tmp14 = message;
  const tmp4Result = gifAutoPlay(tmp5[26]);
  const hasEnhancedRoleColors = message(tmp5[39]).getHasEnhancedRoleColors(guildId1, message.author.id);
  if (messageForward == null) {
    messageForward = tmp14(tmp5[40]).maybeCreateSingleForwardForMessage(message);
    const tmp14Result = tmp14(tmp5[40]);
  }
  let message2 = message;
  if (null != messageForward) {
    message2 = messageForward.messageSnapshot.message;
  }
  items = [];
  if (renderReactions) {
    const obj2 = { reactions: message.reactions, animateEmoji };
    items = tmp4(tmp5[41])(obj2);
  }
  let tmp17 = null;
  if (message.type === constants.THREAD_STARTER_MESSAGE) {
    const messageByReference = ReferencedMessageStore.getMessageByReference(message.messageReference);
    let message1 = null;
    if (messageByReference.state === ReferencedMessageState.LOADED) {
      message1 = messageByReference.message;
    }
    tmp17 = message1;
  }
  if (null != tmp17) {
    const obj3 = {};
    const obj5 = { message: tmp17, roleStyle, isFirst, isEditing, canShowImages, isSystemDM, isInlineReplyPreview, options: null };
    const obj6 = {};
    const merged = Object.assign(options);
    obj6.renderThreadEmbeds = false;
    obj6.renderReactions = false;
    obj6.shouldDisableInteractiveComponents = true;
    obj5.options = obj6;
    const merged1 = Object.assign(createMessageContent(obj5));
    obj3.id = message.id;
    return obj3;
  } else if (null != unlinkedGamePlayerPlaceholders) {
    const obj7 = { message, theme: forcedTheme, reactions: [], roleStyle };
    return tmp14(tmp5[42]).createUnlinkedGamePlayersSystemMessage(obj7, unlinkedGamePlayerPlaceholders);
  } else if (tmp4(tmp5[43])(message)) {
    if (message.type === constants.THREAD_CREATED) {
      const obj8 = { threadEmbed: createThreadEmbed(message, roleStyle, isInlineReplyPreview, channel1, options, forcedTheme) };
      const obj9 = { message, theme: forcedTheme, reactions: items, roleStyle };
      const merged2 = Object.assign(tmp14(tmp5[44]).createSystemMessageContent(obj9));
      let systemMessageContent = obj8;
      const tmp14Result67 = tmp14(tmp5[44]);
    } else {
      const obj10 = { message, theme: forcedTheme, reactions: items, roleStyle, isForumPost: null };
      let isForumPostResult;
      if (channel != null) {
        isForumPostResult = channel.isForumPost();
      }
      obj10.isForumPost = isForumPostResult;
      systemMessageContent = tmp14(tmp5[44]).createSystemMessageContent(obj10);
      const tmp14Result68 = tmp14(tmp5[44]);
    }
    return systemMessageContent;
  } else {
    let tmp22 = !isFirst;
    if (isFirst) {
      tmp22 = renderContentOnly;
    }
    const author = message.author;
    let timestamp = message.editedTimestamp;
    if (timestamp == null) {
      timestamp = message.timestamp;
    }
    const result = tmp14(tmp5[45]).isMessageNewerThanImprovedMarkdownEpoch(timestamp.valueOf());
    if (null != message2.content) {
      if ("" !== message2.content) {
        const tmp14Result70 = tmp14(tmp5[46]);
        if (!forceHideSimpleEmbedContent) {
          let tmp24 = tmp8;
          if (tmp8) {
            tmp24 = tmp10;
          }
          forceHideSimpleEmbedContent = tmp24;
        }
        const tmp25 = null != channel1 && message.isFirstMessageInForumPost(channel1);
        let parseMessageMarkupResult = tmp14Result70.parseMessageMarkup(message, message2, forceHideSimpleEmbedContent, isInlineReplyPreview, tmp25, result, result);
      }
      ({ content, hasSpoilerEmbeds } = parseMessageMarkupResult);
      let tmp34 = restrictedPreview;
      if (restrictedPreview) {
        tmp34 = null != content;
      }
      let stringResult = content;
      if (tmp34) {
        stringResult = tmp4(tmp5[47])(content);
      }
      enabledHarmTypesForMessage = tmp14(tmp5[48]).getEnabledHarmTypesForMessage(message);
      const tmp14Result71 = tmp14(tmp5[48]);
      result1 = tmp14(tmp5[49]).shouldAgeVerifyForExplicitMedia();
      const ViewImageDescriptions = tmp14(tmp5[37]).ViewImageDescriptions;
      setting = ViewImageDescriptions.getSetting();
      if (tmp8) {
        tmp8 = !parseMessageMarkupResult.hasBailedAst;
      }
      if (tmp8) {
        tmp8 = !restrictedPreview;
      }
      interaction = setting.getInteraction(message);
      let tmp4Result1Result;
      if (tmp8) {
        const obj11 = { embeds: message2.embeds, channelId: message.channel_id, gifAutoPlay, hasSpoilerEmbeds: null, ignoreEmbedDescriptionCache: null, shouldInlineEmbedMedia: null, colors: null, showListsAndHeaders: null, showMaskedLinks: null, themedBackgroundColor: null, enabledContentHarmTypeFlags: null, shouldAgeVerify: null, authorIsBot: null, showContentInventoryEntryFallbackEmbed: null, transformComponents: null };
        if (hasSpoilerEmbeds) {
          hasSpoilerEmbeds = shouldObscureSpoiler;
        }
        obj11.hasSpoilerEmbeds = hasSpoilerEmbeds;
        obj11.ignoreEmbedDescriptionCache = ignoreEmbedDescriptionCache;
        obj11.shouldInlineEmbedMedia = tmp10;
        obj11.colors = tmp6;
        obj11.showListsAndHeaders = result;
        obj11.showMaskedLinks = result;
        obj11.themedBackgroundColor = tmp6.embedBackgroundColor;
        obj11.enabledContentHarmTypeFlags = enabledHarmTypesForMessage;
        obj11.shouldAgeVerify = result1;
        obj11.authorIsBot = message.author.bot;
        obj11.showContentInventoryEntryFallbackEmbed = message.showContentInventoryEntryFallbackEmbed;
        obj11.transformComponents = function transformComponents(arg0) {
          return transformMessageComponentsDefault({ message, guildId: guildId1, interaction, shouldDisableInteractiveComponents, shouldShowMedia, shouldObscureSpoiler, enabledContentHarmTypeFlags: enabledHarmTypesForMessage, shouldAgeVerify: result1, shouldShowMosaicMediaDescriptions: setting, shouldAutoPlayGifs: gifAutoPlay, colors }, arg0);
        };
        tmp4Result1Result = tmp4(tmp5[50])(obj11);
        const tmp4Result8 = tmp4(tmp5[50]);
      }
      const obj12 = { message, isSystemDM, channel, colors: tmp6 };
      const tmp14Result72 = tmp14(tmp5[49]);
      ({ tagText, tagAccessibilityLabel, tagVerified, tagTextColor, tagBackgroundColor, tagType, tagIconUrl, opTagText, opTagTextColor, opTagBackgroundColor } = tmp4(tmp5[52])(obj12));
      const uploaderFileForMessageId = UploadStore.getUploaderFileForMessageId(message.id);
      const tmp43 = tmp4(tmp5[52])(obj12);
      let tmp48 = tmp4Result1Result;
      if (!tmp47) {
        let items1 = tmp4Result1Result;
        if (tmp4Result1Result == null) {
          items1 = [];
        }
        const obj13 = { uploaderFile: uploaderFileForMessageId, useAttachmentUploadPreview: tmp45, colors: tmp6 };
        items1.push(tmp4(tmp5[53])(obj13));
        tmp48 = items1;
      }
      const message4 = result1.getMessage(message.id);
      let tmp52 = tmp48;
      if (null != message4) {
        let items2 = tmp48;
        if (tmp48 == null) {
          items2 = [];
        }
        const obj15 = { errorMessage: message4.errorMessage, colors: tmp6 };
        items2.push(tmp14(tmp5[53]).createAutomodBlockedMessageEmbed(obj15));
        tmp52 = items2;
        const tmp14Result73 = tmp14(tmp5[53]);
      }
      tmp47 = message.state !== constants2.SEND_FAILED || message.isCommandType();
      const userAuthor = tmp14(tmp5[54]).getUserAuthor(message.author, channel);
      ({ guildMemberAvatar, guildMemberAvatarDecoration, iconRoleId } = userAuthor);
      const tmp14Result74 = tmp14(tmp5[54]);
      if (message.isInteractionPlaceholder()) {
        if (null == message.author.avatar) {
          if (null == guildMemberAvatar) {
            const application = message.application;
            let icon;
            if (application != null) {
              icon = application.icon;
            }
            if (null != icon) {
              const obj16 = { id: message.application.id, icon: message.application.icon, bot: message.application.bot };
              let applicationIconSource = tmp4(tmp5[56]).getApplicationIconSource(obj16);
              const tmp4Result9 = tmp4(tmp5[56]);
            }
            const ensureAvatarSourceResult = tmp14Result75.ensureAvatarSource(applicationIconSource);
            if (null == guildMemberAvatarDecoration) {
              guildMemberAvatarDecoration = author.avatarDecoration;
            }
            const obj17 = { avatarDecoration: guildMemberAvatarDecoration, size: null };
            const tmp14Result76 = tmp14(tmp5[56]);
            obj17.size = tmp14(tmp5[57]).getDecorationSizeForAvatarSize(tmp14(tmp5[58]).AvatarSizes.NORMAL);
            let member = null;
            const avatarDecorationURL = tmp14Result76.getAvatarDecorationURL(obj17);
            if (null != guildId1) {
              member = GuildMemberStore.getMember(guildId1, author.id);
            }
            const tmp14Result77 = tmp14(tmp5[57]);
            let prop;
            if (member != null) {
              prop = member.gamingLeaderboardData;
            }
            const activeLeaderboardWinnerData = tmp14(tmp5[59]).getActiveLeaderboardWinnerData(prop);
            let tmp63;
            if (null != activeLeaderboardWinnerData) {
              if (null != activeLeaderboardWinnerData.winningStreak) {
                if (null != activeLeaderboardWinnerData.winningWeek) {
                  if (null != activeLeaderboardWinnerData.winningStat) {
                    tmp63 = activeLeaderboardWinnerData;
                  }
                }
              }
            }
            const tmp14Result78 = tmp14(tmp5[59]);
            let prop1;
            if (member != null) {
              prop1 = member.gamingLeaderboardData;
            }
            const activeLeaderboardLeaderData = tmp14(tmp5[59]).getActiveLeaderboardLeaderData(prop1);
            if (null != tmp63) {
              let num2 = tmp63.winningStreak;
              if (num2 == null) {
                num2 = 0;
              }
              if (num2 > 1) {
                let tmp4Result10 = tmp4(tmp5[60]);
              } else {
                tmp4Result10 = tmp4(tmp5[61]);
              }
              const obj18 = { source: tmp4Result10, name: tmp14(tmp5[62]).LEADERBOARD_WINNER_ROLE_NAME_PREFIX + tmp14(tmp5[62]).encodeWinnerData(tmp63), size: 18, alt: null };
              const tmp14Result80 = tmp14(tmp5[62]);
              obj18.alt = tmp14(tmp5[62]).getLeaderboardWinnerBadgeText(tmp63);
              const tmp14Result81 = tmp14(tmp5[62]);
            } else {
              if (null != activeLeaderboardLeaderData) {
                const obj19 = { source: tmp4(tmp5[63]), name: null, size: 18, alt: null };
                let num = activeLeaderboardLeaderData.currentLeaderStat;
                if (num == null) {
                  num = 0;
                }
                obj19.name = tmp14(tmp5[62]).LEADERBOARD_LEADER_ROLE_NAME_PREFIX + num;
                obj19.alt = tmp14(tmp5[62]).getLeaderboardLeaderBadgeText(activeLeaderboardLeaderData);
                let roleIcon = obj19;
                const tmp14Result82 = tmp14(tmp5[62]);
              } else if (null != iconRoleId) {
                if (null != guildId1) {
                  const obj20 = { guildId: guildId1, roleId: iconRoleId, size: 18 };
                  roleIcon = tmp14(tmp5[64]).getRoleIcon(obj20);
                  const tmp14Result83 = tmp14(tmp5[64]);
                }
              }
              if (message.hasFlag(constants3.SOURCE_MESSAGE_DELETED)) {
                const intl = tmp14(tmp5[29]).intl;
                stringResult = intl.string(tmp14(tmp5[29]).t.JOtgSw);
              }
              const messageAuthor = tmp14(tmp5[54]).getMessageAuthor(message);
              ({ nick, colorString, colorStrings } = messageAuthor);
              if (message.type === constants.INTERACTION_PREMIUM_UPSELL) {
                const intl2 = tmp14(tmp5[29]).intl;
                const obj21 = { appName: nick };
                stringResult = intl2.formatToPlainString(tmp14(tmp5[29]).t["u4A+xK"], obj21);
              }
              if (message.type === constants.REPLY) {
                if (renderReplies) {
                  const messageByReference1 = ReferencedMessageStore.getMessageByReference(message.messageReference);
                  state = messageByReference1.state;
                  if (ReferencedMessageState.LOADED === state) {
                    const message3 = messageByReference1.message;
                    const result2 = tmp14(tmp5[40]).maybeCreateSingleForwardForMessage(message3);
                    if (RelationshipStore.isBlockedForMessage(message3)) {
                      const obj22 = { state: ReferencedMessageRowState.SYSTEM, content: null };
                      const intl12 = tmp14(tmp5[29]).intl;
                      obj22.content = intl12.string(tmp14(tmp5[29]).t.XAkOo2);
                      let tmp71 = obj22;
                    } else if (RelationshipStore.isIgnoredForMessage(message3)) {
                      const obj23 = { state: ReferencedMessageRowState.SYSTEM, content: null };
                      const intl11 = tmp14(tmp5[29]).intl;
                      obj23.content = intl11.string(tmp14(tmp5[29]).t["G7p6v/"]);
                      tmp71 = obj23;
                    } else {
                      const obj24 = { message: message3, messageForward: result2, roleStyle, isFirst: true, isEditing: false, canShowImages: true, isSystemDM: false, isInlineReplyPreview: true, options: null };
                      const obj25 = {};
                      const merged3 = Object.assign(options);
                      obj25.renderReplies = false;
                      obj24.options = obj25;
                      const tmp83 = createMessageContent(obj24);
                      if (null == tmp83) {
                        const obj26 = { state: ReferencedMessageRowState.SYSTEM, content: null };
                        const intl10 = tmp14(tmp5[29]).intl;
                        obj26.content = intl10.string(tmp14(tmp5[29]).t["1i+hMi"]);
                        tmp71 = obj26;
                      } else {
                        if ("username" in tmp83) {
                          const messageAuthor1 = tmp14(tmp5[54]).getMessageAuthor(message3);
                          ({ nick: nick2, colorString: colorString2 } = messageAuthor1);
                          if (nick2 == null) {
                            nick2 = message3.author.username;
                          }
                          tmp83.username = nick2;
                          if (tmp22) {
                            let colorString3 = tmp83.colorString;
                          } else {
                            colorString3 = shouldDisableInteractiveComponents(colorString2);
                            if (colorString3 == null) {
                              colorString3 = tmp83.colorString;
                            }
                          }
                          tmp83.colorString = colorString3;
                          if (tmp4(tmp5[65])(message, message3)) {
                            tmp83.username = `@${tmp83.username}`;
                          }
                          const tmp14Result86 = tmp14(tmp5[54]);
                        }
                        const _Array = Array;
                        let isArray = Array.isArray(tmp83.content);
                        if (isArray) {
                          isArray = 0 === tmp83.content.length;
                        }
                        if (isArray) {
                          tmp83.content = undefined;
                        }
                        let message5;
                        if (result2 != null) {
                          message5 = result2.messageSnapshot.message;
                        }
                        if (message5 == null) {
                          message5 = message3;
                        }
                        if ("stickers" in message5) {
                          let messageStickers = tmp14(tmp5[33]).getMessageStickers(message5);
                          const tmp14Result87 = tmp14(tmp5[33]);
                        } else {
                          messageStickers = [];
                        }
                        if (messageStickers.length > 0) {
                          const intl9 = tmp14(tmp5[29]).intl;
                          let stringResult1 = intl9.string(tmp14(tmp5[29]).t["7K5Lma"]);
                        } else {
                          if ("interaction" in message5) {
                            if (null != message5.interaction) {
                              if ("" === message5.content) {
                                const intl8 = tmp14(tmp5[29]).intl;
                                stringResult1 = intl8.string(tmp14(tmp5[29]).t["2v7kfl"]);
                              }
                            }
                          }
                          if (tmp14Result88.hasFlag(message5.flags, constants3.IS_VOICE_MESSAGE)) {
                            const intl7 = tmp14(tmp5[29]).intl;
                            stringResult1 = intl7.string(tmp14(tmp5[29]).t["6bhHrc"]);
                          } else if (message5.type === constants.POLL_RESULT) {
                            stringResult1 = tmp14(tmp5[35]).getPollResultsReplyPreviewMobile(message5);
                            const tmp14Result89 = tmp14(tmp5[35]);
                          } else {
                            if (tmp14Result90.hasFlag(message5.flags, constants3.IS_COMPONENTS_V2)) {
                              const intl6 = tmp14(tmp5[29]).intl;
                              stringResult1 = intl6.string(tmp14(tmp5[29]).t.Xxm5i3);
                            } else {
                              if (message5.type === constants.GUILD_SPACE_MESSAGE) {
                                if ("guildSpaceData" in message5) {
                                  if (null != channel) {
                                    stringResult1 = tmp14(tmp5[36]).stringifyGuildSpaceSystemMessage(message5, channel);
                                    const tmp14Result91 = tmp14(tmp5[36]);
                                  }
                                }
                              }
                              if ("" === message5.content) {
                                const intl5 = tmp14(tmp5[29]).intl;
                                let stringResult2 = intl5.string(tmp14(tmp5[29]).t.JAKsM8);
                              } else {
                                stringResult2 = null;
                              }
                              stringResult1 = stringResult2;
                            }
                            tmp14Result90 = tmp14(tmp5[34]);
                          }
                          tmp14Result88 = tmp14(tmp5[34]);
                        }
                        if (message3.type === constants.POLL_RESULT) {
                          tmp83.content = stringResult1;
                        }
                        const obj27 = { state: ReferencedMessageRowState.LOADED, message: tmp83 };
                        tmp71 = obj27;
                        if (null != stringResult1) {
                          obj27.systemContent = stringResult1;
                          tmp71 = obj27;
                        }
                      }
                    }
                    const tmp14Result85 = tmp14(tmp5[40]);
                  } else if (ReferencedMessageState.NOT_LOADED === state) {
                    const obj28 = { state: ReferencedMessageRowState.SYSTEM, content: null };
                    const intl4 = tmp14(tmp5[29]).intl;
                    obj28.content = intl4.string(tmp14(tmp5[29]).t["1i+hMi"]);
                    tmp71 = obj28;
                  } else if (ReferencedMessageState.DELETED === state) {
                    const obj29 = { state: ReferencedMessageRowState.SYSTEM, content: null };
                    const intl3 = tmp14(tmp5[29]).intl;
                    obj29.content = intl3.string(tmp14(tmp5[29]).t.mE3KJN);
                    tmp71 = obj29;
                  } else {
                    tmp14(tmp5[66]).assertNever(messageByReference1);
                    const tmp14Result92 = tmp14(tmp5[66]);
                  }
                }
              }
              if (renderThreadEmbeds) {
                const tmp95 = createThreadEmbed(message, roleStyle, isInlineReplyPreview, channel1, options, forcedTheme);
              }
              const tmp14Result84 = tmp14(tmp5[54]);
              const interactionStatus = tmp14(tmp5[67]).createInteractionStatus(message, interaction);
              const tmp14Result93 = tmp14(tmp5[67]);
              const useReducedMotion = AccessibilityStore.useReducedMotion;
              let parent_id;
              const result3 = tmp14(tmp5[68]).isMemberCommunicationDisabled(member);
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
              const tmp14Result94 = tmp14(tmp5[68]);
              const obj30 = { guildMember: member, channel: channel2, onlyChannelConnectionRoles: true };
              const visibleConnectionsRole = tmp14(tmp5[69]).getVisibleConnectionsRole(obj30);
              let tmp110 = tmp45;
              if (tmp45) {
                tmp110 = 0 === message.attachments.length;
              }
              if (tmp110) {
                tmp110 = null != uploaderFileForMessageId;
              }
              if (tmp110) {
                const obj31 = { uploaderFile: uploaderFileForMessageId, isFailedMessage: message.state === constants2.SEND_FAILED, shouldInlineAttachmentMedia: tmp11 };
                let items3 = tmp4(tmp5[70])(obj31);
              } else {
                items3 = [];
                if (renderAttachments) {
                  const obj32 = { attachments: message2.attachments, uploadAttachments: UploadStore.getUploadAttachments(message.nonce), shouldInlineAttachmentMedia: tmp11, gifAutoPlay, viewImageDescriptions: setting, useReducedMotion, shouldObscureSpoiler, themedBackgroundColor: tmp6.embedBackgroundColor, enabledContentHarmTypeFlags: enabledHarmTypesForMessage, shouldAgeVerify: result1, colors: tmp6 };
                  items3 = tmp4(tmp5[71])(obj32);
                  const tmp4Result11 = tmp4(tmp5[71]);
                }
              }
              if (tmp110) {
                if (message.state !== constants2.SEND_FAILED) {
                  const intl13 = tmp14(tmp5[29]).intl;
                  let stringResult3 = intl13.string(tmp14(tmp5[29]).t["yXY+5J"]);
                }
                if (tmp110) {
                  if (message.state !== constants2.SEND_FAILED) {
                    const intl14 = tmp14(tmp5[29]).intl;
                    let stringResult4 = intl14.string(tmp14(tmp5[29]).t["yXY+5J"]);
                  }
                  let stringResult5 = stringResult;
                  const id1 = AuthenticationStore.getId();
                  if (message.isUnsupported) {
                    const intl15 = tmp14(tmp5[29]).intl;
                    stringResult5 = intl15.string(tmp14(tmp5[29]).t.sWi5EU);
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
                    stringResult5 = tmp14(tmp5[35]).getPollReplyPreview(message);
                    const tmp14Result96 = tmp14(tmp5[35]);
                  }
                  if (renderPolls) {
                    const obj33 = { theme: forcedTheme, animateEmoji };
                    const tmp121 = tmp4(tmp5[73])(message, undefined, obj33);
                  }
                  if (renderSharedClientTheme) {
                    const result4 = tmp14(tmp5[74]).formatSharedClientThemeData(message, ensureAvatarSourceResult, nick);
                    const tmp14Result97 = tmp14(tmp5[74]);
                  }
                  if (tmp14Result98.shouldDisplayGuildTag(author.id, tmp123)) {
                    const userPrimaryGuild = tmp14(tmp5[75]).getUserPrimaryGuild(author.primaryGuild);
                    let guildTagBadgeUrl;
                    ({ guildId, tag } = userPrimaryGuild);
                    if (null != userPrimaryGuild.guildId) {
                      guildTagBadgeUrl = tmp14(tmp5[75]).getGuildTagBadgeUrl(userPrimaryGuild.guildId, userPrimaryGuild.badge, GuildTagBadgeSize.SIZE_12);
                      const tmp14Result100 = tmp14(tmp5[75]);
                    }
                    const tmp124 = guildTagBadgeUrl;
                    const tmp14Result99 = tmp14(tmp5[75]);
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
                          ({ id: obj69.id, icon: obj69.icon } = application1);
                          applicationIconURL = tmp4(tmp5[56]).getApplicationIconURL({ id: null, icon: null, size: 16 });
                          const obj34 = { id: null, icon: null, size: 16 };
                          const tmp4Result12 = tmp4(tmp5[56]);
                        }
                        const additionalName = message.additionalName;
                        const tmp131 = applicationIconURL;
                      }
                    }
                  }
                  tmp123 = guildId1;
                  tmp14Result98 = tmp14(tmp5[75]);
                  let tmp136 = message2;
                  if (message2 == null) {
                    tmp136 = message;
                  }
                  let str10 = message.applicationId;
                  const tmp14Result101 = tmp14(tmp5[34]);
                  if (str10 == null) {
                    str10 = "";
                  }
                  const application2 = ApplicationStore.getApplication(str10);
                  let hasFlagResult1 = null != application2;
                  if (hasFlagResult1) {
                    hasFlagResult1 = tmp14(tmp5[34]).hasFlag(message.flags, constants3.SENT_BY_SOCIAL_LAYER_INTEGRATION);
                    const tmp14Result102 = tmp14(tmp5[34]);
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
                      if (tmp14Result103.isGuildOfficialMessagesEnabled(guild, "createMessageContent")) {
                        let officialMessageColor = guild.officialMessageColor;
                        if (officialMessageColor == null) {
                          officialMessageColor = closure_24;
                        }
                        const officialMessageStyle = tmp105.officialMessageStyle;
                        const result5 = tmp14(tmp5[76]).showGuildOfficialMessageGradient(officialMessageStyle);
                        let tmp147;
                        if (result5) {
                          tmp147 = officialMessageColor | closure_26;
                        }
                        const tmp14Result104 = tmp14(tmp5[76]);
                        let numResult;
                        if (tmp14Result105.showGuildOfficialMessageTextColor(officialMessageStyle)) {
                          const internal = tmp4(tmp5[77]).internal;
                          const semanticColor = internal.resolveSemanticColor(forcedTheme, tmp4(tmp5[77]).colors.BACKGROUND_BASE_LOWER);
                          let num8 = 1;
                          if (tmp105.desaturateUserColors) {
                            num8 = tmp105.saturation;
                          }
                          const tmp14Result106 = tmp14(tmp5[76]);
                          let num9 = 0;
                          if (result5) {
                            num9 = closure_25;
                          }
                          const accessibleGuildOfficialTextColor = tmp14Result106.getAccessibleGuildOfficialTextColor(officialMessageColor, semanticColor, num8, num9);
                          numResult = accessibleGuildOfficialTextColor.num();
                        }
                        const intl16 = tmp14(tmp5[29]).intl;
                        items4.push(intl16.string(tmp14(tmp5[29]).t.GzDTxY));
                        const tmp143 = tmp147;
                        tmp14Result105 = tmp14(tmp5[76]);
                      }
                      tmp14Result103 = tmp14(tmp5[76]);
                    }
                  }
                  let obj77 = message2;
                  if (message2 == null) {
                    obj77 = message;
                  }
                  if (obj77.hasFlag(constants3.SUPPRESS_NOTIFICATIONS)) {
                    const intl17 = tmp14(tmp5[29]).intl;
                    items4.push(intl17.string(tmp14(tmp5[29]).t.t0MA8g));
                  }
                  if (items4.length > 0) {
                    const joined = items4.join(", ");
                  }
                  const hasFlagResult = tmp14(tmp5[34]).hasFlag(tmp136.flags, constants3.IS_VOICE_MESSAGE);
                  const obj35 = { id: null, channelId: null, guildId: null, flags: null, type: null, nonce: null, state: null, reactions: null, referencedMessage: null, threadEmbed: null, forwardInfo: null, mentioned: null, edited: null, editedTimestamp: null, editedColor: null, textColor: null, officialMessageColor: null, linkColor: null, tagText: null, tagAccessibilityLabel: null, tagVerified: null, tagTextColor: null, tagBackgroundColor: null, tagType: null, tagIconUrl: null, opTagText: null, opTagTextColor: null, opTagBackgroundColor: null, stateAccessibilityLabel: null, constrainedWidth: null, gifAutoPlay: null, animateEmoji: null, username: null, avatarURL: null, avatarDecorationURL: null, authorId: null, usernameColor: null, roleColor: null, roleColors: null, shouldShowRoleDot: null, shouldShowRoleOnName: null, showLinkDecorations: null, forceRevealSpoilers: null, colorString: null, roleIcon: null, connectionsRoleTag: null, timestamp: null, timestampTooltip: null, timestampColor: null, timestampAccessibilityLabel: null, content: null, isEditing: null, renderContentOnly: null, surveyIndication: null, ephemeralIndication: null, interactionStatus: null, executedCommand: null, components: null, feedbackColor: null, highlightColor: null, embeds: null, giftCodes: null, codedLinks: null, activityInstanceEmbed: null, activityRichPresenceInviteEmbed: null, useAttachmentGridLayout: null, useAttachmentUploadPreview: null, attachments: null, attachmentsOpacity: null, stickers: null, communicationDisabled: null, isFirstForumPostMessage: null, postActions: null, isCurrentUserMessageAuthor: null, usingGradientTheme: null, swipeToReplyIconUrl: null, swipeToEditIconUrl: null, postPreviewEmbeds: null, obscureLearnMoreLabel: null, safetyPolicyNoticeEmbed: null, pollData: null, sharedClientTheme: null, safetySystemNotificationEmbed: null };
                  ({ id: obj79.id, channel_id: obj79.channelId } = message);
                  const voiceChannelBadge = tmp14(tmp5[78]).createVoiceChannelBadge(message.author.id, guildId1);
                  obj35.guildId = guildId1;
                  let tmp161 = message2;
                  if (message2 == null) {
                    tmp161 = message;
                  }
                  obj35.flags = tmp161.flags;
                  obj35.type = message.type;
                  if (null != message.nonce) {
                    if (typeof message.nonce !== "string") {
                      const _String = String;
                      let nonce = String(message.nonce);
                    }
                    obj35.nonce = nonce;
                    obj35.state = message.state;
                    obj35.reactions = items;
                    let tmp163;
                    if (!renderContentOnly) {
                      tmp163 = tmp71;
                    }
                    obj35.referencedMessage = tmp163;
                    obj35.threadEmbed = tmp95;
                    let forwardInfo;
                    if (null != messageForward) {
                      forwardInfo = messageForward.getForwardInfo();
                    }
                    obj35.forwardInfo = forwardInfo;
                    let mentioned = !ignoreMentioned;
                    if (!ignoreMentioned) {
                      mentioned = message.mentioned;
                    }
                    obj35.mentioned = mentioned;
                    let str14 = "";
                    if (message.isEdited()) {
                      str14 = "";
                      if (!renderContentOnly) {
                        const intl18 = tmp14(tmp5[29]).intl;
                        str14 = intl18.string(tmp14(tmp5[29]).t.C8sXIM);
                      }
                    }
                    obj35.edited = str14;
                    let dateFormatResult;
                    if (message.isEdited()) {
                      if (!renderContentOnly) {
                        if (null != message.editedTimestamp) {
                          dateFormatResult = tmp14(tmp5[72]).dateFormat(message.editedTimestamp, "LLLL");
                          const tmp14Result108 = tmp14(tmp5[72]);
                        }
                      }
                    }
                    obj35.editedTimestamp = dateFormatResult;
                    obj35.editedColor = tmp6.editedColor;
                    if (message.isUnsupported) {
                      let textColor = tmp6.unsupportedColor;
                    } else if (null != tmp142) {
                      textColor = 4278190080 | tmp142;
                    } else {
                      textColor = tmp6.textColor;
                    }
                    obj35.textColor = textColor;
                    obj35.officialMessageColor = tmp143;
                    obj35.linkColor = tmp6.linkColor;
                    obj35.tagText = tagText;
                    obj35.tagAccessibilityLabel = tagAccessibilityLabel;
                    obj35.tagVerified = tagVerified;
                    obj35.tagTextColor = tagTextColor;
                    obj35.tagBackgroundColor = tagBackgroundColor;
                    obj35.tagType = tagType;
                    obj35.tagIconUrl = tagIconUrl;
                    obj35.opTagText = opTagText;
                    obj35.opTagTextColor = opTagTextColor;
                    obj35.opTagBackgroundColor = opTagBackgroundColor;
                    obj35.stateAccessibilityLabel = joined;
                    obj35.constrainedWidth = constrainedWidth;
                    obj35.gifAutoPlay = gifAutoPlay;
                    obj35.animateEmoji = animateEmoji;
                    if (tmp22) {
                      nick = author.username;
                    }
                    obj35.username = nick;
                    let uri;
                    if (!tmp22) {
                      uri = ensureAvatarSourceResult.uri;
                    }
                    obj35.avatarURL = uri;
                    let tmp167 = null;
                    if (!tmp22) {
                      tmp167 = avatarDecorationURL;
                    }
                    obj35.avatarDecorationURL = tmp167;
                    obj35.authorId = author.id;
                    if (!tmp22) {
                      if ("username" === roleStyle) {
                        let defaultUsernameColor = shouldDisableInteractiveComponents(colorString);
                        if (defaultUsernameColor == null) {
                          defaultUsernameColor = tmp6.defaultUsernameColor;
                        }
                      }
                      obj35.usernameColor = defaultUsernameColor;
                      let tmp170 = null;
                      if (!tmp22) {
                        let tmp171Result = shouldDisableInteractiveComponents(colorString);
                        if (tmp171Result == null) {
                          tmp171Result = null;
                        }
                        tmp170 = tmp171Result;
                      }
                      obj35.roleColor = tmp170;
                      let processColorStringsResult = null;
                      if (hasEnhancedRoleColors) {
                        processColorStringsResult = null;
                        if (!tmp22) {
                          processColorStringsResult = tmp14(tmp5[79]).processColorStrings(colorStrings);
                          const tmp14Result109 = tmp14(tmp5[79]);
                        }
                      }
                      obj35.roleColors = processColorStringsResult;
                      obj35.shouldShowRoleDot = "dot" === roleStyle;
                      obj35.shouldShowRoleOnName = "username" === roleStyle;
                      obj35.showLinkDecorations = AccessibilityStore.alwaysShowLinkDecorations;
                      obj35.forceRevealSpoilers = !shouldObscureSpoiler;
                      if (tmp22) {
                        let defaultUsernameColor2 = tmp6.defaultUsernameColor;
                      } else {
                        defaultUsernameColor2 = shouldDisableInteractiveComponents(colorString);
                        if (defaultUsernameColor2 == null) {
                          defaultUsernameColor2 = tmp6.defaultUsernameColor;
                        }
                      }
                      obj35.colorString = defaultUsernameColor2;
                      let tmp176;
                      if (!tmp22) {
                        tmp176 = roleIcon;
                      }
                      obj35.roleIcon = tmp176;
                      let connectionsRoleTag;
                      if (null != visibleConnectionsRole) {
                        connectionsRoleTag = tmp14(tmp5[80]).createConnectionsRoleTag(visibleConnectionsRole);
                        const tmp14Result110 = tmp14(tmp5[80]);
                      }
                      obj35.connectionsRoleTag = connectionsRoleTag;
                      let tmp178;
                      if (!tmp22) {
                        tmp178 = stringResult3;
                      }
                      obj35.timestamp = tmp178;
                      let dateFormatResult1;
                      if (!tmp22) {
                        dateFormatResult1 = tmp14(tmp5[72]).dateFormat(message.timestamp, "LLLL");
                        const tmp14Result111 = tmp14(tmp5[72]);
                      }
                      obj35.timestampTooltip = dateFormatResult1;
                      let timestampColor;
                      if (!tmp22) {
                        timestampColor = tmp6.timestampColor;
                      }
                      obj35.timestampColor = timestampColor;
                      let tmp181;
                      if (!tmp22) {
                        tmp181 = stringResult4;
                      }
                      obj35.timestampAccessibilityLabel = tmp181;
                      obj35.content = stringResult5;
                      obj35.isEditing = isEditing;
                      obj35.renderContentOnly = renderContentOnly;
                      let surveyIndication;
                      if (undefined !== pushFeedbackType) {
                        surveyIndication = tmp14(tmp5[81]).createSurveyIndication(message, forcedTheme, pushFeedbackType);
                        const tmp14Result112 = tmp14(tmp5[81]);
                      }
                      obj35.surveyIndication = surveyIndication;
                      obj35.ephemeralIndication = tmp14(tmp5[82]).createEphemeralIndication(message);
                      obj35.interactionStatus = interactionStatus;
                      let executedCommand;
                      if (renderExecutedCommands) {
                        const tmp14Result114 = tmp14(tmp5[83]);
                        executedCommand = tmp14Result114.createExecutedCommand(message, channel, roleStyle, forcedTheme, tmp6.defaultUsernameColor);
                      }
                      obj35.executedCommand = executedCommand;
                      let tmp189;
                      if (message2.components.length > 0) {
                        if (renderComponents) {
                          const obj36 = { message, guildId: guildId1, interaction, shouldDisableInteractiveComponents, shouldShowMedia: tmp7, shouldObscureSpoiler, enabledContentHarmTypeFlags: enabledHarmTypesForMessage, shouldAgeVerify: result1, shouldShowMosaicMediaDescriptions: setting, shouldAutoPlayGifs: gifAutoPlay, colors: tmp6 };
                          tmp189 = tmp4(tmp5[51])(obj36, message2.components);
                        }
                      }
                      obj35.components = tmp189;
                      let num12 = 0;
                      if (!renderContentOnly) {
                        num12 = tmp6.feedbackColor;
                      }
                      obj35.feedbackColor = num12;
                      let num13 = 0;
                      if (!renderContentOnly) {
                        num13 = tmp6.highlightColor;
                      }
                      obj35.highlightColor = num13;
                      obj35.embeds = tmp52;
                      if (renderGiftCode) {
                        let giftCodeEmbed = tmp14(tmp5[84]).createGiftCodeEmbed(message, forcedTheme);
                        const tmp14Result115 = tmp14(tmp5[84]);
                      } else {
                        giftCodeEmbed = [];
                      }
                      obj35.giftCodes = giftCodeEmbed;
                      if (renderCodedLinks) {
                        const tmp14Result116 = tmp14(tmp5[85]);
                        let codedLinkEmbeds = tmp14Result116.createCodedLinkEmbeds(message, message2, channel, forcedTheme);
                      } else {
                        codedLinkEmbeds = [];
                      }
                      obj35.codedLinks = codedLinkEmbeds;
                      let activityInstanceEmbed;
                      if (renderActivityInstanceEmbed) {
                        activityInstanceEmbed = tmp14(tmp5[86]).createActivityInstanceEmbed(message);
                        const tmp14Result117 = tmp14(tmp5[86]);
                      }
                      obj35.activityInstanceEmbed = activityInstanceEmbed;
                      let activityRichPresenceInviteEmbed;
                      if (renderActivityInviteEmbed) {
                        activityRichPresenceInviteEmbed = tmp14(tmp5[87]).createActivityRichPresenceInviteEmbed(message, channel, forcedTheme);
                        const tmp14Result118 = tmp14(tmp5[87]);
                      }
                      obj35.activityRichPresenceInviteEmbed = activityRichPresenceInviteEmbed;
                      if (tmp11) {
                        if (renderAttachments) {
                          renderAttachments = 0 !== message2.attachments.length || 0 !== message2.embeds.length;
                          const tmp197 = 0 !== message2.attachments.length || 0 !== message2.embeds.length;
                        }
                        if (!renderAttachments) {
                          renderAttachments = tmp45;
                        }
                        tmp11 = renderAttachments;
                      }
                      obj35.useAttachmentGridLayout = tmp11;
                      obj35.useAttachmentUploadPreview = tmp45;
                      obj35.attachments = items3;
                      let num15 = 1;
                      if (tmp45) {
                        num15 = 1;
                        if (message.state === constants2.SEND_FAILED) {
                          num15 = 0.2;
                        }
                      }
                      obj35.attachmentsOpacity = num15;
                      if (restrictedPreview) {
                        let items5 = [];
                      } else {
                        const obj37 = { message: message2, animateStickersSetting: null, isUserInteracting: null };
                        const AnimateStickers = tmp14(tmp5[37]).AnimateStickers;
                        obj37.animateStickersSetting = AnimateStickers.getSetting();
                        obj37.isUserInteracting = message.id === animatingStickerMessageId;
                        items5 = tmp4(tmp5[88])(obj37);
                        const tmp4Result13 = tmp4(tmp5[88]);
                      }
                      obj35.stickers = items5;
                      if (renderCommunicationDisabled) {
                        renderCommunicationDisabled = result3;
                      }
                      obj35.communicationDisabled = renderCommunicationDisabled;
                      let isForumPostResult1;
                      if (channel != null) {
                        isForumPostResult1 = channel.isForumPost();
                      }
                      obj35.isFirstForumPostMessage = isForumPostResult1 && message.id === message.channel_id;
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
                                const obj38 = { defaultReactionEmoji, customGuildEmoji: usableCustomEmojiById };
                                defaultReaction = tmp14(tmp5[32]).createDefaultReaction(obj38);
                                const tmp14Result119 = tmp14(tmp5[32]);
                              }
                              const hasJoinedResult = JoinedThreadsStore.hasJoined(message.channel_id);
                              const shouldDisplayPromptResult = MediaPostSharePromptStore.shouldDisplayPrompt(channel.id);
                              const obj39 = { isFollowing: hasJoinedResult, hasReactions: 0 !== message.reactions.length, defaultReaction, showMediaPostSharePrompt: shouldDisplayPromptResult };
                              forumPostActions = tmp14(tmp5[32]).createForumPostActions(obj39);
                              const tmp14Result120 = tmp14(tmp5[32]);
                            }
                          }
                          tmp201 = forumPostActions;
                        }
                      }
                      obj35.postActions = tmp201;
                      obj35.isCurrentUserMessageAuthor = message.author.id === id1;
                      obj35.usingGradientTheme = null != guildId1.gradientPreset;
                      const tmp14Result113 = tmp14(tmp5[82]);
                      obj35.swipeToReplyIconUrl = tmp14(tmp5[30]).getAssetUriForEmbed(tmp4(tmp5[89]));
                      const tmp14Result121 = tmp14(tmp5[30]);
                      obj35.swipeToEditIconUrl = tmp14(tmp5[30]).getAssetUriForEmbed(tmp4(tmp5[90]));
                      if (tmp8) {
                        let postPreviewEmbeds = tmp14(tmp5[91]).createPostPreviewEmbeds(message, roleStyle, useReducedMotion);
                        const tmp14Result123 = tmp14(tmp5[91]);
                      } else {
                        postPreviewEmbeds = [];
                      }
                      obj35.postPreviewEmbeds = postPreviewEmbeds;
                      const intl19 = tmp14(tmp5[29]).intl;
                      obj35.obscureLearnMoreLabel = intl19.string(tmp14(tmp5[29]).t["2aXnfa"]);
                      const tmp14Result122 = tmp14(tmp5[30]);
                      obj35.safetyPolicyNoticeEmbed = tmp14(tmp5[92]).createSafetyPolicyNoticeEmbed(message);
                      obj35.pollData = tmp121;
                      obj35.sharedClientTheme = result4;
                      const tmp14Result124 = tmp14(tmp5[92]);
                      obj35.safetySystemNotificationEmbed = tmp14(tmp5[93]).createSafetySystemNotificationEmbed(message);
                      const tmp14Result125 = tmp14(tmp5[93]);
                      const merged4 = Object.assign(tmp14(tmp5[94]).createCtaButtons(message.id, message.channel_id, tmp6));
                      let embedBackgroundColor;
                      if (hasFlagResult) {
                        embedBackgroundColor = tmp6.embedBackgroundColor;
                      }
                      obj35.audioAttachmentBackgroundColor = embedBackgroundColor;
                      const tmp14Result126 = tmp14(tmp5[94]);
                      obj35.accessibilityActions = tmp14(tmp5[95]).createMessageAccessibilityActions(message, channel);
                      obj35.clanTagGuildId = guildId;
                      obj35.clanTag = tag;
                      obj35.clanBadgeUrl = tmp124;
                      obj35.lobbyAdditionalName = additionalName;
                      obj35.lobbyTagIconUrl = tmp131;
                      obj35.isFirst = isFirst;
                      obj35.gameApplicationId = id;
                      let type;
                      if (channel != null) {
                        type = channel.type;
                      }
                      obj35.isAnnouncementChannel = type === constants4.GUILD_ANNOUNCEMENT;
                      const tmp14Result127 = tmp14(tmp5[95]);
                      obj35.displayNameStyles = tmp14(tmp5[96]).createDisplayNameStylesMobile(message.author, member);
                      obj35.voiceChannelBadge = voiceChannelBadge;
                      return obj35;
                    }
                    defaultUsernameColor = tmp6.defaultUsernameColor;
                  }
                  nonce = message.nonce;
                  const tmp14Result107 = tmp14(tmp5[78]);
                }
                stringResult4 = tmp14(tmp5[72]).accessibilityLabelCalendarFormat(message.timestamp);
                const tmp14Result129 = tmp14(tmp5[72]);
              }
              const tmp14Result95 = tmp14(tmp5[69]);
              stringResult3 = tmp14(tmp5[72]).calendarFormat(message.timestamp, true, timestampHourCycle);
              const tmp14Result130 = tmp14(tmp5[72]);
            }
            const tmp14Result79 = tmp14(tmp5[59]);
          }
        }
      }
      if (null != guildMemberAvatar) {
        if (null != guildId1) {
          const obj40 = { userId: author.id, avatar: guildMemberAvatar, guildId: guildId1 };
          applicationIconSource = tmp4(tmp5[56]).getGuildMemberAvatarSource(obj40, author);
          const tmp4Result14 = tmp4(tmp5[56]);
        }
      }
      applicationIconSource = author.getAvatarSource(undefined);
      tmp14Result75 = tmp14(tmp5[55]);
    }
    parseMessageMarkupResult = { content: "PX_8", hasSpoilerEmbeds: "none", hasBailedAst: "URL" };
    const tmp14Result69 = tmp14(tmp5[45]);
  }
  const obj4 = message(tmp5[39]);
}
const processColor = _mod17.processColor;
const ReferencedMessageState = ReferencedMessageStore2.ReferencedMessageState;
({ DEFAULT_GUILD_OFFICIAL_COLOR: closure_24, GUILD_OFFICIAL_HIGHLIGHT_ALPHA: closure_25, GUILD_OFFICIAL_HIGHLIGHT_ALPHA_COLOR: closure_26 } = MessageConstants);
const ReferencedMessageRowState = RowGeneratorConstants.ReferencedMessageRowState;
({ MessageTypes: closure_28, MessageStates: closure_29, MessageFlags: closure_30, ChannelTypes: closure_31 } = Constants);
const GuildTagBadgeSize = GuildTagConstants.GuildTagBadgeSize;
let result = size.fileFinishedImporting("modules/messages/native/renderer/createMessageContent.tsx");

export default createMessageContent;