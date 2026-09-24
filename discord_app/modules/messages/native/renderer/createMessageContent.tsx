// === Module 8288: createMessageContent ===

// Module 8288 (createMessageContent)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _mod17 from "module_17" /* 17 */;
import util from "util" /* 1115 */;
import useChannelName from "useChannelName" /* 4982 */;
import SpoilerChannelUtils from "SpoilerChannelUtils" /* 7659 */;
import ReferencedMessageStore2 from "ReferencedMessageStore" /* 7923 */;
import MessageCountUtils from "MessageCountUtils" /* 8218 */;
import RowGeneratorConstants from "RowGeneratorConstants" /* 8281 */;
import GuildTagConstants from "GuildTagConstants" /* 8292 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 8293 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8294 */;
import _modDef8295 from "module_8295" /* 8295 */;
import transformMessageComponentsDefault from "transformMessageComponents" /* 8469 */;
import AccessibilityStore from "AccessibilityStore" /* 4821 */;
import ApplicationStore from "ApplicationStore" /* 5056 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4648 */;
import EmojiStore from "EmojiStore" /* 5764 */;
import GuildAutomodMessageStore from "GuildAutomodMessageStore" /* 8286 */;
import InteractionStore from "InteractionStore" /* 8289 */;
import LurkingStore from "LurkingStore" /* 4465 */;
import MediaPostSharePromptStore from "MediaPostSharePromptStore" /* 8290 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4466 */;
import ThreadMessageStore from "ThreadMessageStore" /* 7636 */;
import ThemeStore from "ThemeStore" /* 1182 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2044 */;
import GuildMemberStore from "GuildMemberStore" /* 2107 */;
import GuildStore from "GuildStore" /* 2066 */;
import RelationshipStore from "RelationshipStore" /* 4474 */;
import UploadStore from "UploadStore" /* 8167 */;
import UserStore from "UserStore" /* 1372 */;
import MessageConstants from "MessageConstants" /* 4822 */;
import Constants from "Constants" /* 1074 */;
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
                obj3.archivedIconUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef8295);
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
  if (forcedTheme == null) {
    forcedTheme = ThemeStore.theme;
  }
  const tmp3 = shouldObscureSpoiler;
  const tmp4 = gifAutoPlay(shouldObscureSpoiler[36])(forcedTheme, useAlternateEmbedColors);
  AccessibilityStore = tmp4;
  ApplicationStore = tmp5;
  let tmp7 = tmp5;
  if (true === canShowImages) {
    tmp7 = renderEmbeds;
  }
  if (tmp7) {
    tmp7 = message.type !== constants.CUSTOM_GIFT;
  }
  let tmp9 = tmp5;
  if (true === canShowImages) {
    tmp9 = inlineEmbedMedia;
  }
  let tmp10 = tmp5;
  if (true === canShowImages) {
    tmp10 = inlineAttachmentMedia;
  }
  const channel = ChannelStore.getChannel(message.getChannelId());
  const channel1 = ChannelStore.getChannel(gifAutoPlay(tmp3[26]).castMessageIdAsChannelId(message.id));
  guildId1 = undefined;
  if (channel != null) {
    guildId1 = channel.getGuildId();
  }
  const tmp13 = message;
  const tmp2Result = gifAutoPlay(tmp3[26]);
  const hasEnhancedRoleColors = message(tmp3[37]).getHasEnhancedRoleColors(guildId1, message.author.id);
  if (messageForward == null) {
    messageForward = tmp13(tmp3[38]).maybeCreateSingleForwardForMessage(message);
    const tmp13Result = tmp13(tmp3[38]);
  }
  let message2 = message;
  if (null != messageForward) {
    message2 = messageForward.messageSnapshot.message;
  }
  let items = [];
  if (renderReactions) {
    const obj2 = { reactions: message.reactions, animateEmoji };
    items = tmp2(tmp3[39])(obj2);
  }
  let tmp16 = null;
  if (message.type === constants.THREAD_STARTER_MESSAGE) {
    const messageByReference = ReferencedMessageStore.getMessageByReference(message.messageReference);
    let message1 = null;
    if (messageByReference.state === ReferencedMessageState.LOADED) {
      message1 = messageByReference.message;
    }
    tmp16 = message1;
  }
  if (null != tmp16) {
    const obj3 = {};
    const obj5 = { message: tmp16, roleStyle, isFirst, isEditing, canShowImages, isSystemDM, isInlineReplyPreview, options: null };
    const obj6 = {};
    const merged = Object.assign(options);
    obj6.renderThreadEmbeds = false;
    obj6.renderReactions = false;
    obj6.shouldDisableInteractiveComponents = true;
    obj5.options = obj6;
    const merged1 = Object.assign(createMessageContent(obj5));
    obj3.id = message.id;
    return obj3;
  } else if (tmp2(tmp3[40])(message)) {
    if (message.type === constants.THREAD_CREATED) {
      const obj7 = { threadEmbed: createThreadEmbed(message, roleStyle, isInlineReplyPreview, channel1, options, tmp6) };
      const obj8 = { message, theme: forcedTheme, reactions: items, roleStyle };
      const merged2 = Object.assign(tmp13(tmp3[41]).createSystemMessageContent(obj8));
      let systemMessageContent = obj7;
      const tmp13Result61 = tmp13(tmp3[41]);
    } else {
      const obj9 = { message, theme: forcedTheme, reactions: items, roleStyle, isForumPost: null };
      let isForumPostResult;
      if (channel != null) {
        isForumPostResult = channel.isForumPost();
      }
      obj9.isForumPost = isForumPostResult;
      systemMessageContent = tmp13(tmp3[41]).createSystemMessageContent(obj9);
      const tmp13Result62 = tmp13(tmp3[41]);
    }
    return systemMessageContent;
  } else {
    let tmp21 = !isFirst;
    if (isFirst) {
      tmp21 = renderContentOnly;
    }
    const author = message.author;
    let timestamp = message.editedTimestamp;
    if (timestamp == null) {
      timestamp = message.timestamp;
    }
    const result = tmp13(tmp3[42]).isMessageNewerThanImprovedMarkdownEpoch(timestamp.valueOf());
    if (null != message2.content) {
      if ("" !== message2.content) {
        const tmp13Result64 = tmp13(tmp3[43]);
        if (!forceHideSimpleEmbedContent) {
          let tmp23 = tmp7;
          if (tmp7) {
            tmp23 = tmp9;
          }
          forceHideSimpleEmbedContent = tmp23;
        }
        const tmp24 = null != channel1 && message.isFirstMessageInForumPost(channel1);
        let parseMessageMarkupResult = tmp13Result64.parseMessageMarkup(message, message2, forceHideSimpleEmbedContent, isInlineReplyPreview, tmp24, result, result);
      }
      ({ content, hasSpoilerEmbeds } = parseMessageMarkupResult);
      let tmp33 = restrictedPreview;
      if (restrictedPreview) {
        tmp33 = null != content;
      }
      let stringResult = content;
      if (tmp33) {
        stringResult = tmp2(tmp3[44])(content);
      }
      enabledHarmTypesForMessage = tmp13(tmp3[45]).getEnabledHarmTypesForMessage(message);
      const tmp13Result65 = tmp13(tmp3[45]);
      result1 = tmp13(tmp3[46]).shouldAgeVerifyForExplicitMedia();
      const ViewImageDescriptions = tmp13(tmp3[47]).ViewImageDescriptions;
      setting = ViewImageDescriptions.getSetting();
      if (tmp7) {
        tmp7 = !parseMessageMarkupResult.hasBailedAst;
      }
      if (tmp7) {
        tmp7 = !restrictedPreview;
      }
      interaction = setting.getInteraction(message);
      let tmp2Result1Result;
      if (tmp7) {
        const obj10 = { embeds: message2.embeds, channelId: message.channel_id, gifAutoPlay, hasSpoilerEmbeds: null, ignoreEmbedDescriptionCache: null, shouldInlineEmbedMedia: null, colors: null, showListsAndHeaders: null, showMaskedLinks: null, themedBackgroundColor: null, enabledContentHarmTypeFlags: null, shouldAgeVerify: null, authorIsBot: null, showContentInventoryEntryFallbackEmbed: null, transformComponents: null };
        if (hasSpoilerEmbeds) {
          hasSpoilerEmbeds = shouldObscureSpoiler;
        }
        obj10.hasSpoilerEmbeds = hasSpoilerEmbeds;
        obj10.ignoreEmbedDescriptionCache = ignoreEmbedDescriptionCache;
        obj10.shouldInlineEmbedMedia = tmp9;
        obj10.colors = tmp4;
        obj10.showListsAndHeaders = result;
        obj10.showMaskedLinks = result;
        obj10.themedBackgroundColor = tmp4.embedBackgroundColor;
        obj10.enabledContentHarmTypeFlags = enabledHarmTypesForMessage;
        obj10.shouldAgeVerify = result1;
        obj10.authorIsBot = message.author.bot;
        obj10.showContentInventoryEntryFallbackEmbed = message.showContentInventoryEntryFallbackEmbed;
        obj10.transformComponents = function transformComponents(arg0) {
          return transformMessageComponentsDefault({ message, guildId: guildId1, interaction, shouldDisableInteractiveComponents, shouldShowMedia, shouldObscureSpoiler, enabledContentHarmTypeFlags: enabledHarmTypesForMessage, shouldAgeVerify: result1, shouldShowMosaicMediaDescriptions: setting, shouldAutoPlayGifs: gifAutoPlay, colors }, arg0);
        };
        tmp2Result1Result = tmp2(tmp3[48])(obj10);
        const tmp2Result7 = tmp2(tmp3[48]);
      }
      const obj11 = { message, isSystemDM, channel, colors: tmp4 };
      const tmp13Result66 = tmp13(tmp3[46]);
      ({ tagText, tagAccessibilityLabel, tagVerified, tagTextColor, tagBackgroundColor, tagType, tagIconUrl, opTagText, opTagTextColor, opTagBackgroundColor } = tmp2(tmp3[50])(obj11));
      const uploaderFileForMessageId = UploadStore.getUploaderFileForMessageId(message.id);
      const tmp42 = tmp2(tmp3[50])(obj11);
      let tmp47 = tmp2Result1Result;
      if (!tmp46) {
        let items1 = tmp2Result1Result;
        if (tmp2Result1Result == null) {
          items1 = [];
        }
        const obj12 = { uploaderFile: uploaderFileForMessageId, useAttachmentUploadPreview: tmp44, colors: tmp4 };
        items1.push(tmp2(tmp3[51])(obj12));
        tmp47 = items1;
      }
      const message4 = result1.getMessage(message.id);
      let tmp51 = tmp47;
      if (null != message4) {
        let items2 = tmp47;
        if (tmp47 == null) {
          items2 = [];
        }
        const obj13 = { errorMessage: message4.errorMessage, colors: tmp4 };
        items2.push(tmp13(tmp3[51]).createAutomodBlockedMessageEmbed(obj13));
        tmp51 = items2;
        const tmp13Result67 = tmp13(tmp3[51]);
      }
      tmp46 = message.state !== constants2.SEND_FAILED || message.isCommandType();
      const userAuthor = tmp13(tmp3[52]).getUserAuthor(message.author, channel);
      ({ guildMemberAvatar, guildMemberAvatarDecoration, iconRoleId } = userAuthor);
      const tmp13Result68 = tmp13(tmp3[52]);
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
              let applicationIconSource = tmp2(tmp3[54]).getApplicationIconSource(obj15);
              const tmp2Result8 = tmp2(tmp3[54]);
            }
            const ensureAvatarSourceResult = tmp13Result69.ensureAvatarSource(applicationIconSource);
            if (null == guildMemberAvatarDecoration) {
              guildMemberAvatarDecoration = author.avatarDecoration;
            }
            const obj16 = { avatarDecoration: guildMemberAvatarDecoration, size: null };
            const tmp13Result70 = tmp13(tmp3[54]);
            obj16.size = tmp13(tmp3[55]).getDecorationSizeForAvatarSize(tmp13(tmp3[56]).AvatarSizes.NORMAL);
            let member = null;
            const avatarDecorationURL = tmp13Result70.getAvatarDecorationURL(obj16);
            if (null != guildId1) {
              member = GuildMemberStore.getMember(guildId1, author.id);
            }
            let prop;
            if (null != member) {
              prop = member.gamingLeaderboardData;
            }
            let tmp61;
            if (null != prop) {
              if (null != prop.winningStreak) {
                if (null != prop.winningWeek) {
                  if (null != prop.winningStat) {
                    tmp61 = prop;
                  }
                }
              }
            }
            if (null != tmp61) {
              const obj17 = { unicodeEmoji: "\u{1F3C6}", name: tmp13(tmp3[57]).LEADERBOARD_WINNER_ROLE_NAME_PREFIX + tmp13(tmp3[57]).encodeWinnerData(tmp61), size: 18, alt: null };
              const tmp13Result72 = tmp13(tmp3[57]);
              obj17.alt = tmp13(tmp3[57]).getLeaderboardWinnerBadgeText(tmp61);
              let roleIcon = obj17;
              const tmp13Result73 = tmp13(tmp3[57]);
            } else if (null != iconRoleId) {
              if (null != guildId1) {
                const obj18 = { guildId: guildId1, roleId: iconRoleId, size: 18 };
                roleIcon = tmp13(tmp3[58]).getRoleIcon(obj18);
                const tmp13Result74 = tmp13(tmp3[58]);
              }
            }
            if (message.hasFlag(constants3.SOURCE_MESSAGE_DELETED)) {
              const intl = tmp13(tmp3[29]).intl;
              stringResult = intl.string(tmp13(tmp3[29]).t.JOtgSw);
            }
            const tmp13Result71 = tmp13(tmp3[55]);
            const messageAuthor = tmp13(tmp3[52]).getMessageAuthor(message);
            ({ nick, colorString, colorStrings } = messageAuthor);
            if (message.type === constants.INTERACTION_PREMIUM_UPSELL) {
              const intl2 = tmp13(tmp3[29]).intl;
              const obj19 = { appName: nick };
              stringResult = intl2.formatToPlainString(tmp13(tmp3[29]).t["u4A+xK"], obj19);
            }
            if (message.type === constants.REPLY) {
              if (renderReplies) {
                const messageByReference1 = ReferencedMessageStore.getMessageByReference(message.messageReference);
                const state = messageByReference1.state;
                if (ReferencedMessageState.LOADED === state) {
                  const message3 = messageByReference1.message;
                  const result2 = tmp13(tmp3[38]).maybeCreateSingleForwardForMessage(message3);
                  if (RelationshipStore.isBlockedForMessage(message3)) {
                    const obj20 = { state: ReferencedMessageRowState.SYSTEM, content: null };
                    const intl12 = tmp13(tmp3[29]).intl;
                    obj20.content = intl12.string(tmp13(tmp3[29]).t.XAkOo2);
                    let tmp65 = obj20;
                  } else if (RelationshipStore.isIgnoredForMessage(message3)) {
                    const obj21 = { state: ReferencedMessageRowState.SYSTEM, content: null };
                    const intl11 = tmp13(tmp3[29]).intl;
                    obj21.content = intl11.string(tmp13(tmp3[29]).t["G7p6v/"]);
                    tmp65 = obj21;
                  } else {
                    const obj22 = { message: message3, messageForward: result2, roleStyle, isFirst: true, isEditing: false, canShowImages: true, isSystemDM: false, isInlineReplyPreview: true, options: null };
                    const obj23 = {};
                    const merged3 = Object.assign(options);
                    obj23.renderReplies = false;
                    obj22.options = obj23;
                    const tmp77 = createMessageContent(obj22);
                    if (null == tmp77) {
                      const obj24 = { state: ReferencedMessageRowState.SYSTEM, content: null };
                      const intl10 = tmp13(tmp3[29]).intl;
                      obj24.content = intl10.string(tmp13(tmp3[29]).t["1i+hMi"]);
                      tmp65 = obj24;
                    } else {
                      if ("username" in tmp77) {
                        const messageAuthor1 = tmp13(tmp3[52]).getMessageAuthor(message3);
                        ({ nick: nick2, colorString: colorString2 } = messageAuthor1);
                        if (nick2 == null) {
                          nick2 = message3.author.username;
                        }
                        tmp77.username = nick2;
                        if (tmp21) {
                          let colorString3 = tmp77.colorString;
                        } else {
                          colorString3 = shouldDisableInteractiveComponents(colorString2);
                          if (colorString3 == null) {
                            colorString3 = tmp77.colorString;
                          }
                        }
                        tmp77.colorString = colorString3;
                        if (tmp2(tmp3[59])(message, message3)) {
                          tmp77.username = `@${tmp77.username}`;
                        }
                        const tmp13Result77 = tmp13(tmp3[52]);
                      }
                      const _Array = Array;
                      let isArray = Array.isArray(tmp77.content);
                      if (isArray) {
                        isArray = 0 === tmp77.content.length;
                      }
                      if (isArray) {
                        tmp77.content = undefined;
                      }
                      let message5;
                      if (result2 != null) {
                        message5 = result2.messageSnapshot.message;
                      }
                      if (message5 == null) {
                        message5 = message3;
                      }
                      if ("stickers" in message5) {
                        let messageStickers = tmp13(tmp3[33]).getMessageStickers(message5);
                        const tmp13Result78 = tmp13(tmp3[33]);
                      } else {
                        messageStickers = [];
                      }
                      if (messageStickers.length > 0) {
                        const intl9 = tmp13(tmp3[29]).intl;
                        let stringResult1 = intl9.string(tmp13(tmp3[29]).t["7K5Lma"]);
                      } else {
                        if ("interaction" in message5) {
                          if (null != message5.interaction) {
                            if ("" === message5.content) {
                              const intl8 = tmp13(tmp3[29]).intl;
                              stringResult1 = intl8.string(tmp13(tmp3[29]).t["2v7kfl"]);
                            }
                          }
                        }
                        if (tmp13Result79.hasFlag(message5.flags, constants3.IS_VOICE_MESSAGE)) {
                          const intl7 = tmp13(tmp3[29]).intl;
                          stringResult1 = intl7.string(tmp13(tmp3[29]).t["6bhHrc"]);
                        } else if (message5.type === constants.POLL_RESULT) {
                          stringResult1 = tmp13(tmp3[35]).getPollResultsReplyPreviewMobile(message5);
                          const tmp13Result80 = tmp13(tmp3[35]);
                        } else {
                          if (tmp13Result81.hasFlag(message5.flags, constants3.IS_COMPONENTS_V2)) {
                            const intl6 = tmp13(tmp3[29]).intl;
                            stringResult1 = intl6.string(tmp13(tmp3[29]).t.Xxm5i3);
                          } else if ("" === message5.content) {
                            const intl5 = tmp13(tmp3[29]).intl;
                            stringResult1 = intl5.string(tmp13(tmp3[29]).t.JAKsM8);
                          } else {
                            stringResult1 = null;
                          }
                          tmp13Result81 = tmp13(tmp3[34]);
                        }
                        tmp13Result79 = tmp13(tmp3[34]);
                      }
                      if (message3.type === constants.POLL_RESULT) {
                        tmp77.content = stringResult1;
                      }
                      const obj25 = { state: ReferencedMessageRowState.LOADED, message: tmp77 };
                      tmp65 = obj25;
                      if (null != stringResult1) {
                        obj25.systemContent = stringResult1;
                        tmp65 = obj25;
                      }
                    }
                  }
                  const tmp13Result76 = tmp13(tmp3[38]);
                } else if (ReferencedMessageState.NOT_LOADED === state) {
                  const obj26 = { state: ReferencedMessageRowState.SYSTEM, content: null };
                  const intl4 = tmp13(tmp3[29]).intl;
                  obj26.content = intl4.string(tmp13(tmp3[29]).t["1i+hMi"]);
                  tmp65 = obj26;
                } else if (ReferencedMessageState.DELETED === state) {
                  const obj27 = { state: ReferencedMessageRowState.SYSTEM, content: null };
                  const intl3 = tmp13(tmp3[29]).intl;
                  obj27.content = intl3.string(tmp13(tmp3[29]).t.mE3KJN);
                  tmp65 = obj27;
                } else {
                  tmp13(tmp3[60]).assertNever(messageByReference1);
                  const tmp13Result82 = tmp13(tmp3[60]);
                }
              }
            }
            if (renderThreadEmbeds) {
              const tmp88 = createThreadEmbed(message, roleStyle, isInlineReplyPreview, channel1, options, tmp6);
            }
            const tmp13Result75 = tmp13(tmp3[52]);
            const interactionStatus = tmp13(tmp3[61]).createInteractionStatus(message, interaction);
            const tmp13Result83 = tmp13(tmp3[61]);
            const useReducedMotion = AccessibilityStore.useReducedMotion;
            let parent_id;
            const result3 = tmp13(tmp3[62]).isMemberCommunicationDisabled(member);
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
            const tmp13Result84 = tmp13(tmp3[62]);
            const obj28 = { guildMember: member, channel: channel2, onlyChannelConnectionRoles: true };
            const visibleConnectionsRole = tmp13(tmp3[63]).getVisibleConnectionsRole(obj28);
            let tmp103 = tmp44;
            if (tmp44) {
              tmp103 = 0 === message.attachments.length;
            }
            if (tmp103) {
              tmp103 = null != uploaderFileForMessageId;
            }
            if (tmp103) {
              const obj29 = { uploaderFile: uploaderFileForMessageId, isFailedMessage: message.state === constants2.SEND_FAILED, shouldInlineAttachmentMedia: tmp10 };
              let items3 = tmp2(tmp3[64])(obj29);
            } else {
              items3 = [];
              if (renderAttachments) {
                const obj30 = { attachments: message2.attachments, uploadAttachments: UploadStore.getUploadAttachments(message.nonce), shouldInlineAttachmentMedia: tmp10, gifAutoPlay, viewImageDescriptions: setting, useReducedMotion, shouldObscureSpoiler, themedBackgroundColor: tmp4.embedBackgroundColor, enabledContentHarmTypeFlags: enabledHarmTypesForMessage, shouldAgeVerify: result1, colors: tmp4 };
                items3 = tmp2(tmp3[65])(obj30);
                const tmp2Result9 = tmp2(tmp3[65]);
              }
            }
            if (tmp103) {
              if (message.state !== constants2.SEND_FAILED) {
                const intl13 = tmp13(tmp3[29]).intl;
                let stringResult2 = intl13.string(tmp13(tmp3[29]).t["yXY+5J"]);
              }
              if (tmp103) {
                if (message.state !== constants2.SEND_FAILED) {
                  const intl14 = tmp13(tmp3[29]).intl;
                  let stringResult3 = intl14.string(tmp13(tmp3[29]).t["yXY+5J"]);
                }
                let stringResult4 = stringResult;
                const id1 = AuthenticationStore.getId();
                if (message.isUnsupported) {
                  const intl15 = tmp13(tmp3[29]).intl;
                  stringResult4 = intl15.string(tmp13(tmp3[29]).t.sWi5EU);
                }
                const isPollResult = message.isPoll();
                let tmp111 = !isPollResult;
                if (isPollResult) {
                  let tmp112 = !isInlineReplyPreview;
                  if (!isInlineReplyPreview) {
                    tmp112 = renderPolls;
                  }
                  tmp111 = tmp112;
                }
                if (!tmp111) {
                  let tmp113 = null != stringResult;
                  if (tmp113) {
                    tmp113 = "" !== stringResult;
                  }
                  tmp111 = tmp113;
                }
                if (!tmp111) {
                  stringResult4 = tmp13(tmp3[35]).getPollReplyPreview(message);
                  const tmp13Result86 = tmp13(tmp3[35]);
                }
                if (renderPolls) {
                  const obj31 = { theme: forcedTheme, animateEmoji };
                  const tmp114 = tmp2(tmp3[67])(message, undefined, obj31);
                }
                if (renderSharedClientTheme) {
                  const result4 = tmp13(tmp3[68]).formatSharedClientThemeData(message, ensureAvatarSourceResult, nick);
                  const tmp13Result87 = tmp13(tmp3[68]);
                }
                if (tmp13Result88.shouldDisplayGuildTag(author.id, tmp116)) {
                  const userPrimaryGuild = tmp13(tmp3[69]).getUserPrimaryGuild(author.primaryGuild);
                  let guildTagBadgeUrl;
                  ({ guildId, tag } = userPrimaryGuild);
                  if (null != userPrimaryGuild.guildId) {
                    guildTagBadgeUrl = tmp13(tmp3[69]).getGuildTagBadgeUrl(userPrimaryGuild.guildId, userPrimaryGuild.badge, GuildTagBadgeSize.SIZE_12);
                    const tmp13Result90 = tmp13(tmp3[69]);
                  }
                  const tmp117 = guildTagBadgeUrl;
                  const tmp13Result89 = tmp13(tmp3[69]);
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
                        ({ id: obj64.id, icon: obj64.icon } = application1);
                        applicationIconURL = tmp2(tmp3[54]).getApplicationIconURL({ id: null, icon: null, size: 16 });
                        const obj32 = { id: null, icon: null, size: 16 };
                        const tmp2Result10 = tmp2(tmp3[54]);
                      }
                      const additionalName = message.additionalName;
                      const tmp124 = applicationIconURL;
                    }
                  }
                }
                tmp116 = guildId1;
                tmp13Result88 = tmp13(tmp3[69]);
                let tmp129 = message2;
                if (message2 == null) {
                  tmp129 = message;
                }
                let str8 = message.applicationId;
                const tmp13Result91 = tmp13(tmp3[34]);
                if (str8 == null) {
                  str8 = "";
                }
                const application2 = ApplicationStore.getApplication(str8);
                let hasFlagResult1 = null != application2;
                if (hasFlagResult1) {
                  hasFlagResult1 = tmp13(tmp3[34]).hasFlag(message.flags, constants3.SENT_BY_SOCIAL_LAYER_INTEGRATION);
                  const tmp13Result92 = tmp13(tmp3[34]);
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
                  const guild = GuildStore.getGuild(guildId1);
                  if (null != guild) {
                    if (tmp13Result93.isGuildOfficialMessagesEnabled(guild, "createMessageContent")) {
                      let officialMessageColor = guild.officialMessageColor;
                      if (officialMessageColor == null) {
                        officialMessageColor = closure_24;
                      }
                      const officialMessageStyle = tmp98.officialMessageStyle;
                      const result5 = tmp13(tmp3[70]).showGuildOfficialMessageGradient(officialMessageStyle);
                      let tmp140;
                      if (result5) {
                        tmp140 = officialMessageColor | closure_26;
                      }
                      const tmp13Result94 = tmp13(tmp3[70]);
                      let numResult;
                      if (tmp13Result95.showGuildOfficialMessageTextColor(officialMessageStyle)) {
                        const internal = tmp2(tmp3[71]).internal;
                        const semanticColor = internal.resolveSemanticColor(forcedTheme, tmp2(tmp3[71]).colors.BACKGROUND_BASE_LOWER);
                        let num5 = 1;
                        if (tmp98.desaturateUserColors) {
                          num5 = tmp98.saturation;
                        }
                        const tmp13Result96 = tmp13(tmp3[70]);
                        let num6 = 0;
                        if (result5) {
                          num6 = closure_25;
                        }
                        const accessibleGuildOfficialTextColor = tmp13Result96.getAccessibleGuildOfficialTextColor(officialMessageColor, semanticColor, num5, num6);
                        numResult = accessibleGuildOfficialTextColor.num();
                      }
                      const intl16 = tmp13(tmp3[29]).intl;
                      items4.push(intl16.string(tmp13(tmp3[29]).t.GzDTxY));
                      const tmp136 = tmp140;
                      tmp13Result95 = tmp13(tmp3[70]);
                    }
                    tmp13Result93 = tmp13(tmp3[70]);
                  }
                }
                let obj72 = message2;
                if (message2 == null) {
                  obj72 = message;
                }
                if (obj72.hasFlag(constants3.SUPPRESS_NOTIFICATIONS)) {
                  const intl17 = tmp13(tmp3[29]).intl;
                  items4.push(intl17.string(tmp13(tmp3[29]).t.t0MA8g));
                }
                if (items4.length > 0) {
                  const joined = items4.join(", ");
                }
                const hasFlagResult = tmp13(tmp3[34]).hasFlag(tmp129.flags, constants3.IS_VOICE_MESSAGE);
                const obj33 = { id: null, channelId: null, guildId: null, flags: null, type: null, nonce: null, state: null, reactions: null, referencedMessage: null, threadEmbed: null, forwardInfo: null, mentioned: null, edited: null, editedTimestamp: null, editedColor: null, textColor: null, officialMessageColor: null, linkColor: null, tagText: null, tagAccessibilityLabel: null, tagVerified: null, tagTextColor: null, tagBackgroundColor: null, tagType: null, tagIconUrl: null, opTagText: null, opTagTextColor: null, opTagBackgroundColor: null, stateAccessibilityLabel: null, constrainedWidth: null, gifAutoPlay: null, animateEmoji: null, username: null, avatarURL: null, avatarDecorationURL: null, authorId: null, usernameColor: null, roleColor: null, roleColors: null, shouldShowRoleDot: null, shouldShowRoleOnName: null, showLinkDecorations: null, forceRevealSpoilers: null, colorString: null, roleIcon: null, connectionsRoleTag: null, timestamp: null, timestampTooltip: null, timestampColor: null, timestampAccessibilityLabel: null, content: null, isEditing: null, renderContentOnly: null, surveyIndication: null, ephemeralIndication: null, interactionStatus: null, executedCommand: null, components: null, feedbackColor: null, highlightColor: null, embeds: null, giftCodes: null, codedLinks: null, activityInstanceEmbed: null, activityRichPresenceInviteEmbed: null, useAttachmentGridLayout: null, useAttachmentUploadPreview: null, attachments: null, attachmentsOpacity: null, stickers: null, communicationDisabled: null, isFirstForumPostMessage: null, postActions: null, isCurrentUserMessageAuthor: null, usingGradientTheme: null, swipeToReplyIconUrl: null, swipeToEditIconUrl: null, postPreviewEmbeds: null, obscureLearnMoreLabel: null, safetyPolicyNoticeEmbed: null, pollData: null, sharedClientTheme: null, safetySystemNotificationEmbed: null };
                ({ id: obj74.id, channel_id: obj74.channelId } = message);
                const voiceChannelBadge = tmp13(tmp3[72]).createVoiceChannelBadge(message.author.id, guildId1);
                obj33.guildId = guildId1;
                let tmp154 = message2;
                if (message2 == null) {
                  tmp154 = message;
                }
                obj33.flags = tmp154.flags;
                obj33.type = message.type;
                if (null != message.nonce) {
                  if (typeof message.nonce !== "string") {
                    const _String = String;
                    let nonce = String(message.nonce);
                  }
                  obj33.nonce = nonce;
                  obj33.state = message.state;
                  obj33.reactions = items;
                  let tmp156;
                  if (!renderContentOnly) {
                    tmp156 = tmp65;
                  }
                  obj33.referencedMessage = tmp156;
                  obj33.threadEmbed = tmp88;
                  let forwardInfo;
                  if (null != messageForward) {
                    forwardInfo = messageForward.getForwardInfo();
                  }
                  obj33.forwardInfo = forwardInfo;
                  let mentioned = !ignoreMentioned;
                  if (!ignoreMentioned) {
                    mentioned = message.mentioned;
                  }
                  obj33.mentioned = mentioned;
                  let str12 = "";
                  if (message.isEdited()) {
                    str12 = "";
                    if (!renderContentOnly) {
                      const intl18 = tmp13(tmp3[29]).intl;
                      str12 = intl18.string(tmp13(tmp3[29]).t.C8sXIM);
                    }
                  }
                  obj33.edited = str12;
                  let dateFormatResult;
                  if (message.isEdited()) {
                    if (!renderContentOnly) {
                      if (null != message.editedTimestamp) {
                        dateFormatResult = tmp13(tmp3[66]).dateFormat(message.editedTimestamp, "LLLL");
                        const tmp13Result98 = tmp13(tmp3[66]);
                      }
                    }
                  }
                  obj33.editedTimestamp = dateFormatResult;
                  obj33.editedColor = tmp4.editedColor;
                  if (message.isUnsupported) {
                    let textColor = tmp4.unsupportedColor;
                  } else if (null != tmp135) {
                    textColor = 4278190080 | tmp135;
                  } else {
                    textColor = tmp4.textColor;
                  }
                  obj33.textColor = textColor;
                  obj33.officialMessageColor = tmp136;
                  obj33.linkColor = tmp4.linkColor;
                  obj33.tagText = tagText;
                  obj33.tagAccessibilityLabel = tagAccessibilityLabel;
                  obj33.tagVerified = tagVerified;
                  obj33.tagTextColor = tagTextColor;
                  obj33.tagBackgroundColor = tagBackgroundColor;
                  obj33.tagType = tagType;
                  obj33.tagIconUrl = tagIconUrl;
                  obj33.opTagText = opTagText;
                  obj33.opTagTextColor = opTagTextColor;
                  obj33.opTagBackgroundColor = opTagBackgroundColor;
                  obj33.stateAccessibilityLabel = joined;
                  obj33.constrainedWidth = constrainedWidth;
                  obj33.gifAutoPlay = gifAutoPlay;
                  obj33.animateEmoji = animateEmoji;
                  if (tmp21) {
                    nick = author.username;
                  }
                  obj33.username = nick;
                  let uri;
                  if (!tmp21) {
                    uri = ensureAvatarSourceResult.uri;
                  }
                  obj33.avatarURL = uri;
                  let tmp160 = null;
                  if (!tmp21) {
                    tmp160 = avatarDecorationURL;
                  }
                  obj33.avatarDecorationURL = tmp160;
                  obj33.authorId = author.id;
                  if (!tmp21) {
                    if ("username" === roleStyle) {
                      let defaultUsernameColor = shouldDisableInteractiveComponents(colorString);
                      if (defaultUsernameColor == null) {
                        defaultUsernameColor = tmp4.defaultUsernameColor;
                      }
                    }
                    obj33.usernameColor = defaultUsernameColor;
                    let tmp163 = null;
                    if (!tmp21) {
                      let tmp164Result = shouldDisableInteractiveComponents(colorString);
                      if (tmp164Result == null) {
                        tmp164Result = null;
                      }
                      tmp163 = tmp164Result;
                    }
                    obj33.roleColor = tmp163;
                    let processColorStringsResult = null;
                    if (hasEnhancedRoleColors) {
                      processColorStringsResult = null;
                      if (!tmp21) {
                        processColorStringsResult = tmp13(tmp3[73]).processColorStrings(colorStrings);
                        const tmp13Result99 = tmp13(tmp3[73]);
                      }
                    }
                    obj33.roleColors = processColorStringsResult;
                    obj33.shouldShowRoleDot = "dot" === roleStyle;
                    obj33.shouldShowRoleOnName = "username" === roleStyle;
                    obj33.showLinkDecorations = AccessibilityStore.alwaysShowLinkDecorations;
                    obj33.forceRevealSpoilers = !shouldObscureSpoiler;
                    if (tmp21) {
                      let defaultUsernameColor2 = tmp4.defaultUsernameColor;
                    } else {
                      defaultUsernameColor2 = shouldDisableInteractiveComponents(colorString);
                      if (defaultUsernameColor2 == null) {
                        defaultUsernameColor2 = tmp4.defaultUsernameColor;
                      }
                    }
                    obj33.colorString = defaultUsernameColor2;
                    let tmp169;
                    if (!tmp21) {
                      tmp169 = roleIcon;
                    }
                    obj33.roleIcon = tmp169;
                    let connectionsRoleTag;
                    if (null != visibleConnectionsRole) {
                      connectionsRoleTag = tmp13(tmp3[74]).createConnectionsRoleTag(visibleConnectionsRole);
                      const tmp13Result100 = tmp13(tmp3[74]);
                    }
                    obj33.connectionsRoleTag = connectionsRoleTag;
                    let tmp171;
                    if (!tmp21) {
                      tmp171 = stringResult2;
                    }
                    obj33.timestamp = tmp171;
                    let dateFormatResult1;
                    if (!tmp21) {
                      dateFormatResult1 = tmp13(tmp3[66]).dateFormat(message.timestamp, "LLLL");
                      const tmp13Result101 = tmp13(tmp3[66]);
                    }
                    obj33.timestampTooltip = dateFormatResult1;
                    let timestampColor;
                    if (!tmp21) {
                      timestampColor = tmp4.timestampColor;
                    }
                    obj33.timestampColor = timestampColor;
                    let tmp174;
                    if (!tmp21) {
                      tmp174 = stringResult3;
                    }
                    obj33.timestampAccessibilityLabel = tmp174;
                    obj33.content = stringResult4;
                    obj33.isEditing = isEditing;
                    obj33.renderContentOnly = renderContentOnly;
                    let surveyIndication;
                    if (undefined !== pushFeedbackType) {
                      surveyIndication = tmp13(tmp3[75]).createSurveyIndication(message, forcedTheme, pushFeedbackType);
                      const tmp13Result102 = tmp13(tmp3[75]);
                    }
                    obj33.surveyIndication = surveyIndication;
                    obj33.ephemeralIndication = tmp13(tmp3[76]).createEphemeralIndication(message);
                    obj33.interactionStatus = interactionStatus;
                    let executedCommand;
                    if (renderExecutedCommands) {
                      const tmp13Result104 = tmp13(tmp3[77]);
                      executedCommand = tmp13Result104.createExecutedCommand(message, channel, roleStyle, tmp6, tmp4.defaultUsernameColor);
                    }
                    obj33.executedCommand = executedCommand;
                    let tmp182;
                    if (message2.components.length > 0) {
                      if (renderComponents) {
                        const obj34 = { message, guildId: guildId1, interaction, shouldDisableInteractiveComponents, shouldShowMedia: tmp5, shouldObscureSpoiler, enabledContentHarmTypeFlags: enabledHarmTypesForMessage, shouldAgeVerify: result1, shouldShowMosaicMediaDescriptions: setting, shouldAutoPlayGifs: gifAutoPlay, colors: tmp4 };
                        tmp182 = tmp2(tmp3[49])(obj34, message2.components);
                      }
                    }
                    obj33.components = tmp182;
                    let num9 = 0;
                    if (!renderContentOnly) {
                      num9 = tmp4.feedbackColor;
                    }
                    obj33.feedbackColor = num9;
                    let num10 = 0;
                    if (!renderContentOnly) {
                      num10 = tmp4.highlightColor;
                    }
                    obj33.highlightColor = num10;
                    obj33.embeds = tmp51;
                    if (renderGiftCode) {
                      let giftCodeEmbed = tmp13(tmp3[78]).createGiftCodeEmbed(message, forcedTheme);
                      const tmp13Result105 = tmp13(tmp3[78]);
                    } else {
                      giftCodeEmbed = [];
                    }
                    obj33.giftCodes = giftCodeEmbed;
                    if (renderCodedLinks) {
                      const tmp13Result106 = tmp13(tmp3[79]);
                      let codedLinkEmbeds = tmp13Result106.createCodedLinkEmbeds(message, message2, channel, tmp6);
                    } else {
                      codedLinkEmbeds = [];
                    }
                    obj33.codedLinks = codedLinkEmbeds;
                    let activityInstanceEmbed;
                    if (renderActivityInstanceEmbed) {
                      activityInstanceEmbed = tmp13(tmp3[80]).createActivityInstanceEmbed(message);
                      const tmp13Result107 = tmp13(tmp3[80]);
                    }
                    obj33.activityInstanceEmbed = activityInstanceEmbed;
                    let activityRichPresenceInviteEmbed;
                    if (renderActivityInviteEmbed) {
                      activityRichPresenceInviteEmbed = tmp13(tmp3[81]).createActivityRichPresenceInviteEmbed(message, channel);
                      const tmp13Result108 = tmp13(tmp3[81]);
                    }
                    obj33.activityRichPresenceInviteEmbed = activityRichPresenceInviteEmbed;
                    if (tmp10) {
                      if (renderAttachments) {
                        renderAttachments = 0 !== message2.attachments.length || 0 !== message2.embeds.length;
                        const tmp190 = 0 !== message2.attachments.length || 0 !== message2.embeds.length;
                      }
                      if (!renderAttachments) {
                        renderAttachments = tmp44;
                      }
                      tmp10 = renderAttachments;
                    }
                    obj33.useAttachmentGridLayout = tmp10;
                    obj33.useAttachmentUploadPreview = tmp44;
                    obj33.attachments = items3;
                    let num12 = 1;
                    if (tmp44) {
                      num12 = 1;
                      if (message.state === constants2.SEND_FAILED) {
                        num12 = 0.2;
                      }
                    }
                    obj33.attachmentsOpacity = num12;
                    if (restrictedPreview) {
                      let items5 = [];
                    } else {
                      const obj35 = { message: message2, animateStickersSetting: null, isUserInteracting: null };
                      const AnimateStickers = tmp13(tmp3[47]).AnimateStickers;
                      obj35.animateStickersSetting = AnimateStickers.getSetting();
                      obj35.isUserInteracting = message.id === animatingStickerMessageId;
                      items5 = tmp2(tmp3[82])(obj35);
                      const tmp2Result11 = tmp2(tmp3[82]);
                    }
                    obj33.stickers = items5;
                    if (renderCommunicationDisabled) {
                      renderCommunicationDisabled = result3;
                    }
                    obj33.communicationDisabled = renderCommunicationDisabled;
                    let isForumPostResult1;
                    if (channel != null) {
                      isForumPostResult1 = channel.isForumPost();
                    }
                    obj33.isFirstForumPostMessage = isForumPostResult1 && message.id === message.channel_id;
                    let isForumPostResult2;
                    if (channel != null) {
                      isForumPostResult2 = channel.isForumPost();
                    }
                    let tmp194;
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
                              const obj36 = { defaultReactionEmoji, customGuildEmoji: usableCustomEmojiById };
                              defaultReaction = tmp13(tmp3[32]).createDefaultReaction(obj36);
                              const tmp13Result109 = tmp13(tmp3[32]);
                            }
                            const hasJoinedResult = JoinedThreadsStore.hasJoined(message.channel_id);
                            const shouldDisplayPromptResult = MediaPostSharePromptStore.shouldDisplayPrompt(channel.id);
                            const obj37 = { isFollowing: hasJoinedResult, hasReactions: 0 !== message.reactions.length, defaultReaction, showMediaPostSharePrompt: shouldDisplayPromptResult };
                            forumPostActions = tmp13(tmp3[32]).createForumPostActions(obj37);
                            const tmp13Result110 = tmp13(tmp3[32]);
                          }
                        }
                        tmp194 = forumPostActions;
                      }
                    }
                    obj33.postActions = tmp194;
                    obj33.isCurrentUserMessageAuthor = message.author.id === id1;
                    obj33.usingGradientTheme = null != guildId1.gradientPreset;
                    const tmp13Result103 = tmp13(tmp3[76]);
                    obj33.swipeToReplyIconUrl = tmp13(tmp3[30]).getAssetUriForEmbed(tmp2(tmp3[83]));
                    const tmp13Result111 = tmp13(tmp3[30]);
                    obj33.swipeToEditIconUrl = tmp13(tmp3[30]).getAssetUriForEmbed(tmp2(tmp3[84]));
                    if (tmp7) {
                      let postPreviewEmbeds = tmp13(tmp3[85]).createPostPreviewEmbeds(message, roleStyle, useReducedMotion);
                      const tmp13Result113 = tmp13(tmp3[85]);
                    } else {
                      postPreviewEmbeds = [];
                    }
                    obj33.postPreviewEmbeds = postPreviewEmbeds;
                    const intl19 = tmp13(tmp3[29]).intl;
                    obj33.obscureLearnMoreLabel = intl19.string(tmp13(tmp3[29]).t["2aXnfa"]);
                    const tmp13Result112 = tmp13(tmp3[30]);
                    obj33.safetyPolicyNoticeEmbed = tmp13(tmp3[86]).createSafetyPolicyNoticeEmbed(message);
                    obj33.pollData = tmp114;
                    obj33.sharedClientTheme = result4;
                    const tmp13Result114 = tmp13(tmp3[86]);
                    obj33.safetySystemNotificationEmbed = tmp13(tmp3[87]).createSafetySystemNotificationEmbed(message);
                    const tmp13Result115 = tmp13(tmp3[87]);
                    const merged4 = Object.assign(tmp13(tmp3[88]).createCtaButtons(message.id, message.channel_id, tmp4));
                    let embedBackgroundColor;
                    if (hasFlagResult) {
                      embedBackgroundColor = tmp4.embedBackgroundColor;
                    }
                    obj33.audioAttachmentBackgroundColor = embedBackgroundColor;
                    const tmp13Result116 = tmp13(tmp3[88]);
                    obj33.accessibilityActions = tmp13(tmp3[89]).createMessageAccessibilityActions(message, channel);
                    obj33.clanTagGuildId = guildId;
                    obj33.clanTag = tag;
                    obj33.clanBadgeUrl = tmp117;
                    obj33.lobbyAdditionalName = additionalName;
                    obj33.lobbyTagIconUrl = tmp124;
                    obj33.isFirst = isFirst;
                    obj33.gameApplicationId = id;
                    let type;
                    if (channel != null) {
                      type = channel.type;
                    }
                    obj33.isAnnouncementChannel = type === constants4.GUILD_ANNOUNCEMENT;
                    const tmp13Result117 = tmp13(tmp3[89]);
                    obj33.displayNameStyles = tmp13(tmp3[90]).createDisplayNameStylesMobile(message.author, member);
                    obj33.voiceChannelBadge = voiceChannelBadge;
                    return obj33;
                  }
                  defaultUsernameColor = tmp4.defaultUsernameColor;
                }
                nonce = message.nonce;
                const tmp13Result97 = tmp13(tmp3[72]);
              }
              stringResult3 = tmp13(tmp3[66]).accessibilityLabelCalendarFormat(message.timestamp);
              const tmp13Result119 = tmp13(tmp3[66]);
            }
            const tmp13Result85 = tmp13(tmp3[63]);
            stringResult2 = tmp13(tmp3[66]).calendarFormat(message.timestamp, true, timestampHourCycle);
            const tmp13Result120 = tmp13(tmp3[66]);
          }
        }
      }
      if (null != guildMemberAvatar) {
        if (null != guildId1) {
          const obj39 = { userId: author.id, avatar: guildMemberAvatar, guildId: guildId1 };
          applicationIconSource = tmp2(tmp3[54]).getGuildMemberAvatarSource(obj39, author);
          const tmp2Result12 = tmp2(tmp3[54]);
        }
      }
      applicationIconSource = author.getAvatarSource(undefined);
      tmp13Result69 = tmp13(tmp3[53]);
    }
    parseMessageMarkupResult = { content: "flexDirection", hasSpoilerEmbeds: "BACKGROUND_SYNC", hasBailedAst: "CONNECTION_OPEN" };
    const tmp13Result63 = tmp13(tmp3[42]);
  }
  const obj4 = message(tmp3[37]);
}
const processColor = _mod17.processColor;
const ReferencedMessageState = ReferencedMessageStore2.ReferencedMessageState;
({ DEFAULT_GUILD_OFFICIAL_COLOR: closure_24, GUILD_OFFICIAL_HIGHLIGHT_ALPHA: closure_25, GUILD_OFFICIAL_HIGHLIGHT_ALPHA_COLOR: closure_26 } = MessageConstants);
const ReferencedMessageRowState = RowGeneratorConstants.ReferencedMessageRowState;
({ MessageTypes: closure_28, MessageStates: closure_29, MessageFlags: closure_30, ChannelTypes: items } = Constants);
const GuildTagBadgeSize = GuildTagConstants.GuildTagBadgeSize;
let result = size.fileFinishedImporting("modules/messages/native/renderer/createMessageContent.tsx");

export default createMessageContent;