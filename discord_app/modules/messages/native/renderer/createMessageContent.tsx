// === Module 8014: createMessageContent ===

// Module 8014 (createMessageContent)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _mod17 from "module_17" /* 17 */;
import util from "util" /* 1114 */;
import useChannelName from "useChannelName" /* 4759 */;
import SpoilerChannelUtils from "SpoilerChannelUtils" /* 7402 */;
import ReferencedMessageStore2 from "ReferencedMessageStore" /* 7667 */;
import MessageCountUtils from "MessageCountUtils" /* 7961 */;
import RowGeneratorConstants from "RowGeneratorConstants" /* 8007 */;
import GuildTagConstants from "GuildTagConstants" /* 8018 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 8019 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8020 */;
import _modDef8021 from "module_8021" /* 8021 */;
import transformMessageComponentsDefault from "transformMessageComponents" /* 8195 */;
import AccessibilityStore from "AccessibilityStore" /* 4598 */;
import ApplicationStore from "ApplicationStore" /* 4834 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4426 */;
import EmojiStore from "EmojiStore" /* 5510 */;
import GuildAutomodMessageStore from "GuildAutomodMessageStore" /* 8012 */;
import InteractionStore from "InteractionStore" /* 8015 */;
import LurkingStore from "LurkingStore" /* 4246 */;
import MediaPostSharePromptStore from "MediaPostSharePromptStore" /* 8016 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4247 */;
import ThreadMessageStore from "ThreadMessageStore" /* 7379 */;
import ThemeStore from "ThemeStore" /* 1183 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import GuildStore from "GuildStore" /* 1979 */;
import RelationshipStore from "RelationshipStore" /* 4255 */;
import UploadStore from "UploadStore" /* 7910 */;
import UserStore from "UserStore" /* 1371 */;
import MessageConstants from "MessageConstants" /* 4599 */;
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
            let tmp15Result = SpoilerChannelUtils;
            if (tmp15Result.isChannelSpoilerGated(channel1)) {
              let obj = { title: channelName, messageCountLabel: intl5, messageCountAccessibilityLabel: string2, messagePreviewString: null, archived: false, backgroundColor: null };
              intl5 = util.intl;
              string2 = intl5.string;
              string2Result = string2(util.t["5uaI/7"]);
              obj.messagePreviewString = string2Result;
              obj.backgroundColor = backgroundColor;
              let obj1 = obj;
            } else {
              const threadMetadata = channel1.threadMetadata;
              let archived;
              if (threadMetadata != null) {
                archived = threadMetadata.archived;
              }
              if (archived) {
                obj = { title: channelName, messageCountLabel: intl5, messageCountAccessibilityLabel: string2, messagePreviewString: null, archived: true, archivedIconUrl: null, backgroundColor: null };
                const intl4 = util.intl;
                obj.messagePreviewString = intl4.string(util.t.ZTo4HS);
                tmp15Result = renderer_EmbedUtils;
                obj.archivedIconUrl = tmp15Result.getAssetUriForEmbed(_modDef8021);
                obj.backgroundColor = backgroundColor;
                obj1 = obj;
              } else {
                if (null != mostRecentMessage) {
                  if (mostRecentMessage.type !== constants.CHANNEL_NAME_CHANGE) {
                    if (mostRecentMessage.type !== tmp23.THREAD_STARTER_MESSAGE) {
                      if (!mostRecentMessage.blocked) {
                        if (!mostRecentMessage.ignored) {
                          obj1 = { title: channelName, messageCountLabel: intl5, messageCountAccessibilityLabel: string2, referencedMessage: null, backgroundColor: null };
                          const obj2 = { state: ReferencedMessageRowState.LOADED, message: null };
                          const obj3 = { message: mostRecentMessage, roleStyle, options, isFirst: true, isEditing: false, canShowImages: true, isSystemDM: false, isInlineReplyPreview: true };
                          obj2.message = createMessageContent(obj3);
                          obj1.referencedMessage = obj2;
                          obj1.backgroundColor = backgroundColor;
                        }
                      }
                      const obj4 = { title: channelName, messageCountLabel: intl5, messageCountAccessibilityLabel: string2, messagePreviewString: null, archived: false, backgroundColor: null };
                      const intl2 = util.intl;
                      const string = intl2.string;
                      let XAkOo2 = util.t;
                      if (mostRecentMessage.blocked) {
                        XAkOo2 = XAkOo2.XAkOo2;
                        let stringResult = string(XAkOo2);
                      } else {
                        stringResult = string(XAkOo2["G7p6v/"]);
                      }
                      obj4.messagePreviewString = stringResult;
                      obj4.backgroundColor = backgroundColor;
                    }
                  }
                }
                const obj5 = { title: channelName, messageCountLabel: intl5, messageCountAccessibilityLabel: string2, messagePreviewString: null, archived: false, backgroundColor: null };
                const intl3 = util.intl;
                obj5.messagePreviewString = intl3.string(util.t.ZTo4HS);
                obj5.backgroundColor = backgroundColor;
                obj1 = obj5;
              }
            }
          }
        }
        obj = { title: channelName, messageCountLabel: intl5, messageCountAccessibilityLabel: string2, messagePreviewString: null, archived: false, backgroundColor: null };
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
  guildId = undefined;
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
  let obj = ChannelStore;
  const channel = ChannelStore.getChannel(message.getChannelId());
  let tmp2Result = tmp2(tmp3[26]);
  const channel1 = ChannelStore.getChannel(tmp2Result.castMessageIdAsChannelId(message.id));
  guildId = undefined;
  if (channel != null) {
    guildId = channel.getGuildId();
  }
  const tmp13 = message;
  let obj3 = message(tmp3[37]);
  const hasEnhancedRoleColors = obj3.getHasEnhancedRoleColors(guildId, message.author.id);
  if (messageForward == null) {
    let tmp13Result = tmp13(tmp3[38]);
    messageForward = tmp13Result.maybeCreateSingleForwardForMessage(message);
  }
  let message2 = message;
  if (null != messageForward) {
    message2 = messageForward.messageSnapshot.message;
  }
  let items = [];
  if (renderReactions) {
    obj = { reactions: message.reactions, animateEmoji };
    items = tmp2(tmp3[39])(obj);
  }
  let tmp16 = null;
  if (message.type === constants.THREAD_STARTER_MESSAGE) {
    const messageByReference = ReferencedMessageStore.getMessageByReference(message.messageReference);
    message = null;
    if (messageByReference.state === ReferencedMessageState.LOADED) {
      message = messageByReference.message;
    }
    tmp16 = message;
  }
  if (null != tmp16) {
    obj = {};
    const obj1 = { message: tmp16, roleStyle, isFirst, isEditing, canShowImages, isSystemDM, isInlineReplyPreview, options: null };
    const obj2 = {};
    const merged = Object.assign(options);
    obj2.renderThreadEmbeds = false;
    obj2.renderReactions = false;
    obj2.shouldDisableInteractiveComponents = true;
    obj1.options = obj2;
    const merged1 = Object.assign(createMessageContent(obj1));
    obj.id = message.id;
    return obj;
  } else if (tmp2(tmp3[40])(message)) {
    if (message.type === constants.THREAD_CREATED) {
      obj3 = { threadEmbed: createThreadEmbed(message, roleStyle, isInlineReplyPreview, channel1, options, tmp6) };
      tmp13Result = tmp13(tmp3[41]);
      const obj4 = { message, theme: forcedTheme, reactions: items, roleStyle };
      const merged2 = Object.assign(tmp13Result.createSystemMessageContent(obj4));
      let systemMessageContent = obj3;
    } else {
      const obj5 = { message, theme: forcedTheme, reactions: items, roleStyle, isForumPost: null };
      let isForumPostResult;
      if (channel != null) {
        isForumPostResult = channel.isForumPost();
      }
      obj5.isForumPost = isForumPostResult;
      systemMessageContent = tmp13(tmp3[41]).createSystemMessageContent(obj5);
      const tmp13Result1 = tmp13(tmp3[41]);
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
        const tmp13Result3 = tmp13(tmp3[43]);
        if (!forceHideSimpleEmbedContent) {
          let tmp23 = tmp7;
          if (tmp7) {
            tmp23 = tmp9;
          }
          forceHideSimpleEmbedContent = tmp23;
        }
        const tmp24 = null != channel1 && message.isFirstMessageInForumPost(channel1);
        let parseMessageMarkupResult = tmp13Result3.parseMessageMarkup(message, message2, forceHideSimpleEmbedContent, isInlineReplyPreview, tmp24, result, result);
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
      const tmp13Result4 = tmp13(tmp3[45]);
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
        const obj6 = { embeds: message2.embeds, channelId: message.channel_id, gifAutoPlay, hasSpoilerEmbeds: null, ignoreEmbedDescriptionCache: null, shouldInlineEmbedMedia: null, colors: null, showListsAndHeaders: null, showMaskedLinks: null, themedBackgroundColor: null, enabledContentHarmTypeFlags: null, shouldAgeVerify: null, authorIsBot: null, showContentInventoryEntryFallbackEmbed: null, transformComponents: null };
        tmp2Result = tmp2(tmp3[48]);
        if (hasSpoilerEmbeds) {
          hasSpoilerEmbeds = shouldObscureSpoiler;
        }
        obj6.hasSpoilerEmbeds = hasSpoilerEmbeds;
        obj6.ignoreEmbedDescriptionCache = ignoreEmbedDescriptionCache;
        obj6.shouldInlineEmbedMedia = tmp9;
        obj6.colors = tmp4;
        obj6.showListsAndHeaders = result;
        obj6.showMaskedLinks = result;
        obj6.themedBackgroundColor = tmp4.embedBackgroundColor;
        obj6.enabledContentHarmTypeFlags = enabledHarmTypesForMessage;
        obj6.shouldAgeVerify = result1;
        obj6.authorIsBot = message.author.bot;
        obj6.showContentInventoryEntryFallbackEmbed = message.showContentInventoryEntryFallbackEmbed;
        obj6.transformComponents = function transformComponents(arg0) {
          return transformMessageComponentsDefault({ message, guildId, interaction, shouldDisableInteractiveComponents, shouldShowMedia, shouldObscureSpoiler, enabledContentHarmTypeFlags: enabledHarmTypesForMessage, shouldAgeVerify: result1, shouldShowMosaicMediaDescriptions: setting, shouldAutoPlayGifs: gifAutoPlay, colors }, arg0);
        };
        tmp2Result1Result = tmp2Result(obj6);
      }
      const obj7 = { message, isSystemDM, channel, colors: tmp4 };
      const tmp13Result5 = tmp13(tmp3[46]);
      let obj13 = UploadStore;
      ({ tagText, tagAccessibilityLabel, tagVerified, tagTextColor, tagBackgroundColor, tagType, tagIconUrl, opTagText, opTagTextColor, opTagBackgroundColor } = tmp2(tmp3[50])(obj7));
      const uploaderFileForMessageId = UploadStore.getUploaderFileForMessageId(message.id);
      const tmp42 = tmp2(tmp3[50])(obj7);
      let tmp47 = tmp2Result1Result;
      if (!tmp46) {
        let items1 = tmp2Result1Result;
        if (tmp2Result1Result == null) {
          items1 = [];
        }
        const obj8 = { uploaderFile: uploaderFileForMessageId, useAttachmentUploadPreview: tmp44, colors: tmp4 };
        items1.push(tmp2(tmp3[51])(obj8));
        tmp47 = items1;
      }
      const message1 = result1.getMessage(message.id);
      let tmp51 = tmp47;
      if (null != message1) {
        let items2 = tmp47;
        if (tmp47 == null) {
          items2 = [];
        }
        const obj9 = { errorMessage: message1.errorMessage, colors: tmp4 };
        items2.push(tmp13(tmp3[51]).createAutomodBlockedMessageEmbed(obj9));
        tmp51 = items2;
        const tmp13Result6 = tmp13(tmp3[51]);
      }
      tmp46 = message.state !== constants2.SEND_FAILED || message.isCommandType();
      const userAuthor = tmp13(tmp3[52]).getUserAuthor(message.author, channel);
      ({ guildMemberAvatar, guildMemberAvatarDecoration, iconRoleId } = userAuthor);
      const tmp13Result7 = tmp13(tmp3[52]);
      if (message.isInteractionPlaceholder()) {
        if (null == message.author.avatar) {
          if (null == guildMemberAvatar) {
            let application = message.application;
            let icon;
            if (application != null) {
              icon = application.icon;
            }
            if (null != icon) {
              const obj10 = { id: message.application.id, icon: message.application.icon, bot: message.application.bot };
              let applicationIconSource = tmp2(tmp3[54]).getApplicationIconSource(obj10);
              const tmp2Result1 = tmp2(tmp3[54]);
            }
            const ensureAvatarSourceResult = tmp13Result8.ensureAvatarSource(applicationIconSource);
            if (null == guildMemberAvatarDecoration) {
              guildMemberAvatarDecoration = author.avatarDecoration;
            }
            const obj11 = { avatarDecoration: guildMemberAvatarDecoration, size: null };
            const tmp13Result9 = tmp13(tmp3[54]);
            obj11.size = tmp13(tmp3[55]).getDecorationSizeForAvatarSize(tmp13(tmp3[56]).AvatarSizes.NORMAL);
            let member = null;
            const avatarDecorationURL = tmp13Result9.getAvatarDecorationURL(obj11);
            if (null != guildId) {
              member = GuildMemberStore.getMember(guildId, author.id);
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
              const obj12 = { unicodeEmoji: "\u{1F3C6}", name: tmp13(tmp3[57]).LEADERBOARD_WINNER_ROLE_NAME_PREFIX + tmp13(tmp3[57]).encodeWinnerData(tmp61), size: 18, alt: null };
              const tmp13Result11 = tmp13(tmp3[57]);
              obj12.alt = tmp13(tmp3[57]).getLeaderboardWinnerBadgeText(tmp61);
              let roleIcon = obj12;
              const tmp13Result12 = tmp13(tmp3[57]);
            } else if (null != iconRoleId) {
              if (null != guildId) {
                obj13 = { guildId, roleId: iconRoleId, size: 18 };
                roleIcon = tmp13(tmp3[58]).getRoleIcon(obj13);
                const tmp13Result13 = tmp13(tmp3[58]);
              }
            }
            if (message.hasFlag(constants3.SOURCE_MESSAGE_DELETED)) {
              const intl = tmp13(tmp3[29]).intl;
              stringResult = intl.string(tmp13(tmp3[29]).t.JOtgSw);
            }
            const tmp13Result10 = tmp13(tmp3[55]);
            const messageAuthor = tmp13(tmp3[52]).getMessageAuthor(message);
            ({ nick, colorString, colorStrings } = messageAuthor);
            if (message.type === constants.INTERACTION_PREMIUM_UPSELL) {
              const intl2 = tmp13(tmp3[29]).intl;
              const obj14 = { appName: nick };
              stringResult = intl2.formatToPlainString(tmp13(tmp3[29]).t["u4A+xK"], obj14);
            }
            if (message.type === constants.REPLY) {
              if (renderReplies) {
                const messageByReference1 = ReferencedMessageStore.getMessageByReference(message.messageReference);
                const state = messageByReference1.state;
                if (ReferencedMessageState.LOADED === state) {
                  const message3 = messageByReference1.message;
                  const result2 = tmp13(tmp3[38]).maybeCreateSingleForwardForMessage(message3);
                  if (RelationshipStore.isBlockedForMessage(message3)) {
                    const obj15 = { state: ReferencedMessageRowState.SYSTEM, content: null };
                    const intl12 = tmp13(tmp3[29]).intl;
                    obj15.content = intl12.string(tmp13(tmp3[29]).t.XAkOo2);
                    let tmp65 = obj15;
                  } else if (RelationshipStore.isIgnoredForMessage(message3)) {
                    const obj16 = { state: ReferencedMessageRowState.SYSTEM, content: null };
                    const intl11 = tmp13(tmp3[29]).intl;
                    obj16.content = intl11.string(tmp13(tmp3[29]).t["G7p6v/"]);
                    tmp65 = obj16;
                  } else {
                    const obj17 = { message: message3, messageForward: result2, roleStyle, isFirst: true, isEditing: false, canShowImages: true, isSystemDM: false, isInlineReplyPreview: true, options: null };
                    const obj18 = {};
                    const merged3 = Object.assign(options);
                    obj18.renderReplies = false;
                    obj17.options = obj18;
                    const tmp77 = createMessageContent(obj17);
                    if (null == tmp77) {
                      const obj19 = { state: ReferencedMessageRowState.SYSTEM, content: null };
                      const intl10 = tmp13(tmp3[29]).intl;
                      obj19.content = intl10.string(tmp13(tmp3[29]).t["1i+hMi"]);
                      tmp65 = obj19;
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
                        const tmp13Result16 = tmp13(tmp3[52]);
                      }
                      const _Array = Array;
                      let isArray = Array.isArray(tmp77.content);
                      if (isArray) {
                        isArray = 0 === tmp77.content.length;
                      }
                      if (isArray) {
                        tmp77.content = undefined;
                      }
                      message2 = undefined;
                      if (result2 != null) {
                        message2 = result2.messageSnapshot.message;
                      }
                      if (message2 == null) {
                        message2 = message3;
                      }
                      if ("stickers" in message2) {
                        let messageStickers = tmp13(tmp3[33]).getMessageStickers(message2);
                        const tmp13Result17 = tmp13(tmp3[33]);
                      } else {
                        messageStickers = [];
                      }
                      if (messageStickers.length > 0) {
                        const intl9 = tmp13(tmp3[29]).intl;
                        let stringResult1 = intl9.string(tmp13(tmp3[29]).t["7K5Lma"]);
                      } else {
                        if ("interaction" in message2) {
                          if (null != message2.interaction) {
                            if ("" === message2.content) {
                              const intl8 = tmp13(tmp3[29]).intl;
                              stringResult1 = intl8.string(tmp13(tmp3[29]).t["2v7kfl"]);
                            }
                          }
                        }
                        if (tmp13Result18.hasFlag(message2.flags, constants3.IS_VOICE_MESSAGE)) {
                          const intl7 = tmp13(tmp3[29]).intl;
                          stringResult1 = intl7.string(tmp13(tmp3[29]).t["6bhHrc"]);
                        } else if (message2.type === constants.POLL_RESULT) {
                          stringResult1 = tmp13(tmp3[35]).getPollResultsReplyPreviewMobile(message2);
                          const tmp13Result19 = tmp13(tmp3[35]);
                        } else {
                          if (tmp13Result20.hasFlag(message2.flags, constants3.IS_COMPONENTS_V2)) {
                            const intl6 = tmp13(tmp3[29]).intl;
                            stringResult1 = intl6.string(tmp13(tmp3[29]).t.Xxm5i3);
                          } else if ("" === message2.content) {
                            const intl5 = tmp13(tmp3[29]).intl;
                            stringResult1 = intl5.string(tmp13(tmp3[29]).t.JAKsM8);
                          } else {
                            stringResult1 = null;
                          }
                          tmp13Result20 = tmp13(tmp3[34]);
                        }
                        tmp13Result18 = tmp13(tmp3[34]);
                      }
                      if (message3.type === constants.POLL_RESULT) {
                        tmp77.content = stringResult1;
                      }
                      const obj20 = { state: ReferencedMessageRowState.LOADED, message: tmp77 };
                      tmp65 = obj20;
                      if (null != stringResult1) {
                        obj20.systemContent = stringResult1;
                        tmp65 = obj20;
                      }
                    }
                  }
                  const tmp13Result15 = tmp13(tmp3[38]);
                } else if (ReferencedMessageState.NOT_LOADED === state) {
                  const obj21 = { state: ReferencedMessageRowState.SYSTEM, content: null };
                  const intl4 = tmp13(tmp3[29]).intl;
                  obj21.content = intl4.string(tmp13(tmp3[29]).t["1i+hMi"]);
                  tmp65 = obj21;
                } else if (ReferencedMessageState.DELETED === state) {
                  const obj22 = { state: ReferencedMessageRowState.SYSTEM, content: null };
                  const intl3 = tmp13(tmp3[29]).intl;
                  obj22.content = intl3.string(tmp13(tmp3[29]).t.mE3KJN);
                  tmp65 = obj22;
                } else {
                  tmp13(tmp3[60]).assertNever(messageByReference1);
                  const tmp13Result21 = tmp13(tmp3[60]);
                }
              }
            }
            if (renderThreadEmbeds) {
              const tmp88 = createThreadEmbed(message, roleStyle, isInlineReplyPreview, channel1, options, tmp6);
            }
            const tmp13Result14 = tmp13(tmp3[52]);
            const interactionStatus = tmp13(tmp3[61]).createInteractionStatus(message, interaction);
            const tmp13Result22 = tmp13(tmp3[61]);
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
                channel2 = obj.getChannel(channel.parent_id);
              }
            }
            const tmp13Result23 = tmp13(tmp3[62]);
            const obj23 = { guildMember: member, channel: channel2, onlyChannelConnectionRoles: true };
            const visibleConnectionsRole = tmp13(tmp3[63]).getVisibleConnectionsRole(obj23);
            let tmp103 = tmp44;
            if (tmp44) {
              tmp103 = 0 === message.attachments.length;
            }
            if (tmp103) {
              tmp103 = null != uploaderFileForMessageId;
            }
            if (tmp103) {
              const obj24 = { uploaderFile: uploaderFileForMessageId, isFailedMessage: message.state === constants2.SEND_FAILED, shouldInlineAttachmentMedia: tmp10 };
              let items3 = tmp2(tmp3[64])(obj24);
            } else {
              items3 = [];
              if (renderAttachments) {
                const obj25 = { attachments: message2.attachments, uploadAttachments: obj13.getUploadAttachments(message.nonce), shouldInlineAttachmentMedia: tmp10, gifAutoPlay, viewImageDescriptions: setting, useReducedMotion, shouldObscureSpoiler, themedBackgroundColor: tmp4.embedBackgroundColor, enabledContentHarmTypeFlags: enabledHarmTypesForMessage, shouldAgeVerify: result1, colors: tmp4 };
                items3 = tmp2(tmp3[65])(obj25);
                const tmp2Result2 = tmp2(tmp3[65]);
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
                let id = AuthenticationStore.getId();
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
                  const tmp13Result25 = tmp13(tmp3[35]);
                }
                if (renderPolls) {
                  const obj26 = { theme: forcedTheme, animateEmoji };
                  const tmp114 = tmp2(tmp3[67])(message, undefined, obj26);
                }
                if (renderSharedClientTheme) {
                  const result4 = tmp13(tmp3[68]).formatSharedClientThemeData(message, ensureAvatarSourceResult, nick);
                  const tmp13Result26 = tmp13(tmp3[68]);
                }
                if (tmp13Result27.shouldDisplayGuildTag(author.id, tmp116)) {
                  const userPrimaryGuild = tmp13(tmp3[69]).getUserPrimaryGuild(author.primaryGuild);
                  let guildTagBadgeUrl;
                  ({ guildId, tag } = userPrimaryGuild);
                  if (null != userPrimaryGuild.guildId) {
                    guildTagBadgeUrl = tmp13(tmp3[69]).getGuildTagBadgeUrl(userPrimaryGuild.guildId, userPrimaryGuild.badge, GuildTagBadgeSize.SIZE_12);
                    const tmp13Result29 = tmp13(tmp3[69]);
                  }
                  const tmp117 = guildTagBadgeUrl;
                  const tmp119 = guildId;
                  const tmp13Result28 = tmp13(tmp3[69]);
                }
                let linkedLobby;
                if (channel != null) {
                  linkedLobby = channel.linkedLobby;
                }
                if (null != linkedLobby) {
                  if (null != message.additionalName) {
                    if ("" !== message.additionalName) {
                      application = ApplicationStore.getApplication(linkedLobby.application_id);
                      let icon1;
                      if (application != null) {
                        icon1 = application.icon;
                      }
                      let applicationIconURL;
                      if (null != icon1) {
                        ({ id: obj64.id, icon: obj64.icon } = application);
                        applicationIconURL = tmp2(tmp3[54]).getApplicationIconURL({ id: null, icon: null, size: 16 });
                        const obj27 = { id: null, icon: null, size: 16 };
                        const tmp2Result3 = tmp2(tmp3[54]);
                      }
                      const additionalName = message.additionalName;
                      const tmp124 = applicationIconURL;
                    }
                  }
                }
                tmp116 = guildId;
                tmp13Result27 = tmp13(tmp3[69]);
                let tmp129 = message2;
                if (message2 == null) {
                  tmp129 = message;
                }
                let str8 = message.applicationId;
                const tmp13Result30 = tmp13(tmp3[34]);
                if (str8 == null) {
                  str8 = "";
                }
                const application1 = ApplicationStore.getApplication(str8);
                let hasFlagResult1 = null != application1;
                if (hasFlagResult1) {
                  hasFlagResult1 = tmp13(tmp3[34]).hasFlag(message.flags, constants3.SENT_BY_SOCIAL_LAYER_INTEGRATION);
                  const tmp13Result31 = tmp13(tmp3[34]);
                }
                if (hasFlagResult1) {
                  id = application1.id;
                }
                let hasFlagResult2;
                if (message2 != null) {
                  hasFlagResult2 = message2.hasFlag(constants3.IS_GUILD_OFFICIAL);
                }
                const items4 = [];
                if (hasFlagResult2) {
                  const guild = GuildStore.getGuild(guildId);
                  if (null != guild) {
                    if (tmp13Result32.isGuildOfficialMessagesEnabled(guild, "createMessageContent")) {
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
                      const tmp13Result33 = tmp13(tmp3[70]);
                      let numResult;
                      if (tmp13Result34.showGuildOfficialMessageTextColor(officialMessageStyle)) {
                        const internal = tmp2(tmp3[71]).internal;
                        const semanticColor = internal.resolveSemanticColor(forcedTheme, tmp2(tmp3[71]).colors.BACKGROUND_BASE_LOWER);
                        let num5 = 1;
                        if (tmp98.desaturateUserColors) {
                          num5 = tmp98.saturation;
                        }
                        const tmp13Result35 = tmp13(tmp3[70]);
                        let num6 = 0;
                        if (result5) {
                          num6 = closure_25;
                        }
                        const accessibleGuildOfficialTextColor = tmp13Result35.getAccessibleGuildOfficialTextColor(officialMessageColor, semanticColor, num5, num6);
                        numResult = accessibleGuildOfficialTextColor.num();
                      }
                      const intl16 = tmp13(tmp3[29]).intl;
                      items4.push(intl16.string(tmp13(tmp3[29]).t.GzDTxY));
                      const tmp136 = tmp140;
                      tmp13Result34 = tmp13(tmp3[70]);
                    }
                    tmp13Result32 = tmp13(tmp3[70]);
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
                const obj28 = { id: null, channelId: null, guildId: null, flags: null, type: null, nonce: null, state: null, reactions: null, referencedMessage: null, threadEmbed: null, forwardInfo: null, mentioned: null, edited: null, editedTimestamp: null, editedColor: null, textColor: null, officialMessageColor: null, linkColor: null, tagText: null, tagAccessibilityLabel: null, tagVerified: null, tagTextColor: null, tagBackgroundColor: null, tagType: null, tagIconUrl: null, opTagText: null, opTagTextColor: null, opTagBackgroundColor: null, stateAccessibilityLabel: null, constrainedWidth: null, gifAutoPlay: null, animateEmoji: null, username: null, avatarURL: null, avatarDecorationURL: null, authorId: null, usernameColor: null, roleColor: null, roleColors: null, shouldShowRoleDot: null, shouldShowRoleOnName: null, showLinkDecorations: null, forceRevealSpoilers: null, colorString: null, roleIcon: null, connectionsRoleTag: null, timestamp: null, timestampTooltip: null, timestampColor: null, timestampAccessibilityLabel: null, content: null, isEditing: null, renderContentOnly: null, surveyIndication: null, ephemeralIndication: null, interactionStatus: null, executedCommand: null, components: null, feedbackColor: null, highlightColor: null, embeds: null, giftCodes: null, codedLinks: null, activityInstanceEmbed: null, activityRichPresenceInviteEmbed: null, useAttachmentGridLayout: null, useAttachmentUploadPreview: null, attachments: null, attachmentsOpacity: null, stickers: null, communicationDisabled: null, isFirstForumPostMessage: null, postActions: null, isCurrentUserMessageAuthor: null, usingGradientTheme: null, swipeToReplyIconUrl: null, swipeToEditIconUrl: null, postPreviewEmbeds: null, obscureLearnMoreLabel: null, safetyPolicyNoticeEmbed: null, pollData: null, sharedClientTheme: null, safetySystemNotificationEmbed: null };
                ({ id: obj74.id, channel_id: obj74.channelId } = message);
                const voiceChannelBadge = tmp13(tmp3[72]).createVoiceChannelBadge(message.author.id, guildId);
                obj28.guildId = guildId;
                let tmp154 = message2;
                if (message2 == null) {
                  tmp154 = message;
                }
                obj28.flags = tmp154.flags;
                obj28.type = message.type;
                if (null != message.nonce) {
                  if (typeof message.nonce !== "string") {
                    const _String = String;
                    let nonce = String(message.nonce);
                  }
                  obj28.nonce = nonce;
                  obj28.state = message.state;
                  obj28.reactions = items;
                  let tmp156;
                  if (!renderContentOnly) {
                    tmp156 = tmp65;
                  }
                  obj28.referencedMessage = tmp156;
                  obj28.threadEmbed = tmp88;
                  let forwardInfo;
                  if (null != messageForward) {
                    forwardInfo = messageForward.getForwardInfo();
                  }
                  obj28.forwardInfo = forwardInfo;
                  let mentioned = !ignoreMentioned;
                  if (!ignoreMentioned) {
                    mentioned = message.mentioned;
                  }
                  obj28.mentioned = mentioned;
                  let str12 = "";
                  if (message.isEdited()) {
                    str12 = "";
                    if (!renderContentOnly) {
                      const intl18 = tmp13(tmp3[29]).intl;
                      str12 = intl18.string(tmp13(tmp3[29]).t.C8sXIM);
                    }
                  }
                  obj28.edited = str12;
                  let dateFormatResult;
                  if (message.isEdited()) {
                    if (!renderContentOnly) {
                      if (null != message.editedTimestamp) {
                        dateFormatResult = tmp13(tmp3[66]).dateFormat(message.editedTimestamp, "LLLL");
                        const tmp13Result37 = tmp13(tmp3[66]);
                      }
                    }
                  }
                  obj28.editedTimestamp = dateFormatResult;
                  obj28.editedColor = tmp4.editedColor;
                  if (message.isUnsupported) {
                    let textColor = tmp4.unsupportedColor;
                  } else if (null != tmp135) {
                    textColor = 4278190080 | tmp135;
                  } else {
                    textColor = tmp4.textColor;
                  }
                  obj28.textColor = textColor;
                  obj28.officialMessageColor = tmp136;
                  obj28.linkColor = tmp4.linkColor;
                  obj28.tagText = tagText;
                  obj28.tagAccessibilityLabel = tagAccessibilityLabel;
                  obj28.tagVerified = tagVerified;
                  obj28.tagTextColor = tagTextColor;
                  obj28.tagBackgroundColor = tagBackgroundColor;
                  obj28.tagType = tagType;
                  obj28.tagIconUrl = tagIconUrl;
                  obj28.opTagText = opTagText;
                  obj28.opTagTextColor = opTagTextColor;
                  obj28.opTagBackgroundColor = opTagBackgroundColor;
                  obj28.stateAccessibilityLabel = joined;
                  obj28.constrainedWidth = constrainedWidth;
                  obj28.gifAutoPlay = gifAutoPlay;
                  obj28.animateEmoji = animateEmoji;
                  if (tmp21) {
                    nick = author.username;
                  }
                  obj28.username = nick;
                  let uri;
                  if (!tmp21) {
                    uri = ensureAvatarSourceResult.uri;
                  }
                  obj28.avatarURL = uri;
                  let tmp160 = null;
                  if (!tmp21) {
                    tmp160 = avatarDecorationURL;
                  }
                  obj28.avatarDecorationURL = tmp160;
                  obj28.authorId = author.id;
                  if (!tmp21) {
                    if ("username" === roleStyle) {
                      let defaultUsernameColor = shouldDisableInteractiveComponents(colorString);
                      if (defaultUsernameColor == null) {
                        defaultUsernameColor = tmp4.defaultUsernameColor;
                      }
                    }
                    obj28.usernameColor = defaultUsernameColor;
                    let tmp163 = null;
                    if (!tmp21) {
                      let tmp164Result = shouldDisableInteractiveComponents(colorString);
                      if (tmp164Result == null) {
                        tmp164Result = null;
                      }
                      tmp163 = tmp164Result;
                    }
                    obj28.roleColor = tmp163;
                    let processColorStringsResult = null;
                    if (hasEnhancedRoleColors) {
                      processColorStringsResult = null;
                      if (!tmp21) {
                        processColorStringsResult = tmp13(tmp3[73]).processColorStrings(colorStrings);
                        const tmp13Result38 = tmp13(tmp3[73]);
                      }
                    }
                    obj28.roleColors = processColorStringsResult;
                    obj28.shouldShowRoleDot = "dot" === roleStyle;
                    obj28.shouldShowRoleOnName = "username" === roleStyle;
                    obj28.showLinkDecorations = AccessibilityStore.alwaysShowLinkDecorations;
                    obj28.forceRevealSpoilers = !shouldObscureSpoiler;
                    if (tmp21) {
                      let defaultUsernameColor2 = tmp4.defaultUsernameColor;
                    } else {
                      defaultUsernameColor2 = shouldDisableInteractiveComponents(colorString);
                      if (defaultUsernameColor2 == null) {
                        defaultUsernameColor2 = tmp4.defaultUsernameColor;
                      }
                    }
                    obj28.colorString = defaultUsernameColor2;
                    let tmp169;
                    if (!tmp21) {
                      tmp169 = roleIcon;
                    }
                    obj28.roleIcon = tmp169;
                    let connectionsRoleTag;
                    if (null != visibleConnectionsRole) {
                      connectionsRoleTag = tmp13(tmp3[74]).createConnectionsRoleTag(visibleConnectionsRole);
                      const tmp13Result39 = tmp13(tmp3[74]);
                    }
                    obj28.connectionsRoleTag = connectionsRoleTag;
                    let tmp171;
                    if (!tmp21) {
                      tmp171 = stringResult2;
                    }
                    obj28.timestamp = tmp171;
                    let dateFormatResult1;
                    if (!tmp21) {
                      dateFormatResult1 = tmp13(tmp3[66]).dateFormat(message.timestamp, "LLLL");
                      const tmp13Result40 = tmp13(tmp3[66]);
                    }
                    obj28.timestampTooltip = dateFormatResult1;
                    let timestampColor;
                    if (!tmp21) {
                      timestampColor = tmp4.timestampColor;
                    }
                    obj28.timestampColor = timestampColor;
                    let tmp174;
                    if (!tmp21) {
                      tmp174 = stringResult3;
                    }
                    obj28.timestampAccessibilityLabel = tmp174;
                    obj28.content = stringResult4;
                    obj28.isEditing = isEditing;
                    obj28.renderContentOnly = renderContentOnly;
                    let surveyIndication;
                    if (undefined !== pushFeedbackType) {
                      surveyIndication = tmp13(tmp3[75]).createSurveyIndication(message, forcedTheme, pushFeedbackType);
                      const tmp13Result41 = tmp13(tmp3[75]);
                    }
                    obj28.surveyIndication = surveyIndication;
                    obj28.ephemeralIndication = tmp13(tmp3[76]).createEphemeralIndication(message);
                    obj28.interactionStatus = interactionStatus;
                    let executedCommand;
                    if (renderExecutedCommands) {
                      const tmp13Result43 = tmp13(tmp3[77]);
                      executedCommand = tmp13Result43.createExecutedCommand(message, channel, roleStyle, tmp6, tmp4.defaultUsernameColor);
                    }
                    obj28.executedCommand = executedCommand;
                    let tmp182;
                    if (message2.components.length > 0) {
                      if (renderComponents) {
                        const obj29 = { message, guildId, interaction, shouldDisableInteractiveComponents, shouldShowMedia: tmp5, shouldObscureSpoiler, enabledContentHarmTypeFlags: enabledHarmTypesForMessage, shouldAgeVerify: result1, shouldShowMosaicMediaDescriptions: setting, shouldAutoPlayGifs: gifAutoPlay, colors: tmp4 };
                        tmp182 = tmp2(tmp3[49])(obj29, message2.components);
                      }
                    }
                    obj28.components = tmp182;
                    let num9 = 0;
                    if (!renderContentOnly) {
                      num9 = tmp4.feedbackColor;
                    }
                    obj28.feedbackColor = num9;
                    let num10 = 0;
                    if (!renderContentOnly) {
                      num10 = tmp4.highlightColor;
                    }
                    obj28.highlightColor = num10;
                    obj28.embeds = tmp51;
                    if (renderGiftCode) {
                      let giftCodeEmbed = tmp13(tmp3[78]).createGiftCodeEmbed(message, forcedTheme);
                      const tmp13Result44 = tmp13(tmp3[78]);
                    } else {
                      giftCodeEmbed = [];
                    }
                    obj28.giftCodes = giftCodeEmbed;
                    if (renderCodedLinks) {
                      const tmp13Result45 = tmp13(tmp3[79]);
                      let codedLinkEmbeds = tmp13Result45.createCodedLinkEmbeds(message, message2, channel, tmp6);
                    } else {
                      codedLinkEmbeds = [];
                    }
                    obj28.codedLinks = codedLinkEmbeds;
                    let activityInstanceEmbed;
                    if (renderActivityInstanceEmbed) {
                      activityInstanceEmbed = tmp13(tmp3[80]).createActivityInstanceEmbed(message);
                      const tmp13Result46 = tmp13(tmp3[80]);
                    }
                    obj28.activityInstanceEmbed = activityInstanceEmbed;
                    let activityRichPresenceInviteEmbed;
                    if (renderActivityInviteEmbed) {
                      activityRichPresenceInviteEmbed = tmp13(tmp3[81]).createActivityRichPresenceInviteEmbed(message, channel);
                      const tmp13Result47 = tmp13(tmp3[81]);
                    }
                    obj28.activityRichPresenceInviteEmbed = activityRichPresenceInviteEmbed;
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
                    obj28.useAttachmentGridLayout = tmp10;
                    obj28.useAttachmentUploadPreview = tmp44;
                    obj28.attachments = items3;
                    let num12 = 1;
                    if (tmp44) {
                      num12 = 1;
                      if (message.state === constants2.SEND_FAILED) {
                        num12 = 0.2;
                      }
                    }
                    obj28.attachmentsOpacity = num12;
                    if (restrictedPreview) {
                      let items5 = [];
                    } else {
                      const obj30 = { message: message2, animateStickersSetting: null, isUserInteracting: null };
                      const AnimateStickers = tmp13(tmp3[47]).AnimateStickers;
                      obj30.animateStickersSetting = AnimateStickers.getSetting();
                      obj30.isUserInteracting = message.id === animatingStickerMessageId;
                      items5 = tmp2(tmp3[82])(obj30);
                      const tmp2Result4 = tmp2(tmp3[82]);
                    }
                    obj28.stickers = items5;
                    if (renderCommunicationDisabled) {
                      renderCommunicationDisabled = result3;
                    }
                    obj28.communicationDisabled = renderCommunicationDisabled;
                    let isForumPostResult1;
                    if (channel != null) {
                      isForumPostResult1 = channel.isForumPost();
                    }
                    obj28.isFirstForumPostMessage = isForumPostResult1 && message.id === message.channel_id;
                    let isForumPostResult2;
                    if (channel != null) {
                      isForumPostResult2 = channel.isForumPost();
                    }
                    let tmp194;
                    if (isForumPostResult2) {
                      if (renderForumPostActions) {
                        let forumPostActions;
                        if (message.id === message.channel_id) {
                          const guildId1 = channel.getGuildId();
                          if (null == guildId1) {
                            let defaultReaction;
                            if (0 === message.reactions.length) {
                              const channel3 = obj.getChannel(channel.parent_id);
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
                              const obj31 = { defaultReactionEmoji, customGuildEmoji: usableCustomEmojiById };
                              defaultReaction = tmp13(tmp3[32]).createDefaultReaction(obj31);
                              const tmp13Result48 = tmp13(tmp3[32]);
                            }
                            const hasJoinedResult = JoinedThreadsStore.hasJoined(message.channel_id);
                            const shouldDisplayPromptResult = MediaPostSharePromptStore.shouldDisplayPrompt(channel.id);
                            const obj32 = { isFollowing: hasJoinedResult, hasReactions: 0 !== message.reactions.length, defaultReaction, showMediaPostSharePrompt: shouldDisplayPromptResult };
                            forumPostActions = tmp13(tmp3[32]).createForumPostActions(obj32);
                            const tmp13Result49 = tmp13(tmp3[32]);
                          }
                        }
                        tmp194 = forumPostActions;
                      }
                    }
                    obj28.postActions = tmp194;
                    obj28.isCurrentUserMessageAuthor = message.author.id === id;
                    obj28.usingGradientTheme = null != guildId.gradientPreset;
                    const tmp13Result42 = tmp13(tmp3[76]);
                    obj28.swipeToReplyIconUrl = tmp13(tmp3[30]).getAssetUriForEmbed(tmp2(tmp3[83]));
                    const tmp13Result50 = tmp13(tmp3[30]);
                    obj28.swipeToEditIconUrl = tmp13(tmp3[30]).getAssetUriForEmbed(tmp2(tmp3[84]));
                    if (tmp7) {
                      let postPreviewEmbeds = tmp13(tmp3[85]).createPostPreviewEmbeds(message, roleStyle, useReducedMotion);
                      const tmp13Result52 = tmp13(tmp3[85]);
                    } else {
                      postPreviewEmbeds = [];
                    }
                    obj28.postPreviewEmbeds = postPreviewEmbeds;
                    const intl19 = tmp13(tmp3[29]).intl;
                    obj28.obscureLearnMoreLabel = intl19.string(tmp13(tmp3[29]).t["2aXnfa"]);
                    const tmp13Result51 = tmp13(tmp3[30]);
                    obj28.safetyPolicyNoticeEmbed = tmp13(tmp3[86]).createSafetyPolicyNoticeEmbed(message);
                    obj28.pollData = tmp114;
                    obj28.sharedClientTheme = result4;
                    const tmp13Result53 = tmp13(tmp3[86]);
                    obj28.safetySystemNotificationEmbed = tmp13(tmp3[87]).createSafetySystemNotificationEmbed(message);
                    const tmp13Result54 = tmp13(tmp3[87]);
                    const merged4 = Object.assign(tmp13(tmp3[88]).createCtaButtons(message.id, message.channel_id, tmp4));
                    let embedBackgroundColor;
                    if (hasFlagResult) {
                      embedBackgroundColor = tmp4.embedBackgroundColor;
                    }
                    obj28.audioAttachmentBackgroundColor = embedBackgroundColor;
                    const tmp13Result55 = tmp13(tmp3[88]);
                    obj28.accessibilityActions = tmp13(tmp3[89]).createMessageAccessibilityActions(message, channel);
                    obj28.clanTagGuildId = tmp119;
                    obj28.clanTag = tag;
                    obj28.clanBadgeUrl = tmp117;
                    obj28.lobbyAdditionalName = additionalName;
                    obj28.lobbyTagIconUrl = tmp124;
                    obj28.isFirst = isFirst;
                    obj28.gameApplicationId = id;
                    let type;
                    if (channel != null) {
                      type = channel.type;
                    }
                    obj28.isAnnouncementChannel = type === constants4.GUILD_ANNOUNCEMENT;
                    const tmp13Result56 = tmp13(tmp3[89]);
                    obj28.displayNameStyles = tmp13(tmp3[90]).createDisplayNameStylesMobile(message.author, member);
                    obj28.voiceChannelBadge = voiceChannelBadge;
                    return obj28;
                  }
                  defaultUsernameColor = tmp4.defaultUsernameColor;
                }
                nonce = message.nonce;
                const tmp13Result36 = tmp13(tmp3[72]);
              }
              stringResult3 = tmp13(tmp3[66]).accessibilityLabelCalendarFormat(message.timestamp);
              const tmp13Result58 = tmp13(tmp3[66]);
            }
            const tmp13Result24 = tmp13(tmp3[63]);
            stringResult2 = tmp13(tmp3[66]).calendarFormat(message.timestamp, true, timestampHourCycle);
            const tmp13Result59 = tmp13(tmp3[66]);
          }
        }
      }
      if (null != guildMemberAvatar) {
        if (null != guildId) {
          const obj33 = { userId: author.id, avatar: guildMemberAvatar, guildId };
          applicationIconSource = tmp2(tmp3[54]).getGuildMemberAvatarSource(obj33, author);
          const tmp2Result5 = tmp2(tmp3[54]);
        }
      }
      applicationIconSource = author.getAvatarSource(undefined);
      tmp13Result8 = tmp13(tmp3[53]);
    }
    parseMessageMarkupResult = { content: "flex", hasSpoilerEmbeds: "151", hasBailedAst: "BG" };
    const tmp13Result2 = tmp13(tmp3[42]);
  }
}
const processColor = _mod17.processColor;
const ReferencedMessageState = ReferencedMessageStore2.ReferencedMessageState;
({ DEFAULT_GUILD_OFFICIAL_COLOR: closure_24, GUILD_OFFICIAL_HIGHLIGHT_ALPHA: closure_25, GUILD_OFFICIAL_HIGHLIGHT_ALPHA_COLOR: closure_26 } = MessageConstants);
const ReferencedMessageRowState = RowGeneratorConstants.ReferencedMessageRowState;
({ MessageTypes: closure_28, MessageStates: closure_29, MessageFlags: closure_30, ChannelTypes: items } = Constants);
const GuildTagBadgeSize = GuildTagConstants.GuildTagBadgeSize;
let result = size.fileFinishedImporting("modules/messages/native/renderer/createMessageContent.tsx");

export default createMessageContent;