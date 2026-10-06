// === Module 7610: createMessageContent ===

// Module 7610 (createMessageContent)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import react_native from "react-native" /* 17 */;
import intl20 from "intl" /* 1126 */;
import useChannelName from "useChannelName" /* 5049 */;
import SpoilerChannelUtils from "SpoilerChannelUtils" /* 6842 */;
import ReferencedMessageStore2 from "ReferencedMessageStore" /* 7115 */;
import MessageCountUtils from "MessageCountUtils" /* 7541 */;
import RowGeneratorConstants from "RowGeneratorConstants" /* 7603 */;
import GuildTagConstants from "GuildTagConstants" /* 7614 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 7615 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 7616 */;
import AssetRegistryDefault from "AssetRegistry" /* 7617 */;
import transformMessageComponentsDefault from "transformMessageComponents" /* 7804 */;
import AccessibilityStore_mod from "AccessibilityStore" /* 4885 */;
import ApplicationStore_mod from "ApplicationStore" /* 5124 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4703 */;
import EmojiStore from "EmojiStore" /* 5645 */;
import GuildAutomodMessageStore from "GuildAutomodMessageStore" /* 7608 */;
import InteractionStore from "InteractionStore" /* 7611 */;
import LurkingStore from "LurkingStore" /* 4516 */;
import MediaPostSharePromptStore from "MediaPostSharePromptStore" /* 7612 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4517 */;
import ThreadMessageStore from "ThreadMessageStore" /* 6819 */;
import ThemeStore from "ThemeStore" /* 1193 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import GuildStore from "GuildStore" /* 2074 */;
import RelationshipStore from "RelationshipStore" /* 4525 */;
import UploadStore from "UploadStore" /* 7477 */;
import UserStore from "UserStore" /* 1377 */;
import MessageConstants from "MessageConstants" /* 4889 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const ReferencedMessageStore = ReferencedMessageStore2;

let closure_24;
let closure_25;
let closure_26;
let closure_28;
let closure_29;
let closure_30;
let closure_31;
function createThreadEmbed(message, roleStyle, isInlineReplyPreview, channel1, options, forcedTheme) {
  let intl;
  let intl3;
  let intl4;
  let intl5;
  let obj5;
  let obj6;
  let stringResult;
  let tmp13Result2;
  const tmp = isInlineReplyPreview;
  if (!tmp) {
    if (message.hasFlag(constants3.HAS_THREAD)) {
      if (null != channel1) {
        const obj11 = useChannelName;
        const channelName = obj11.computeChannelName(channel1, UserStore, RelationshipStore);
        const backgroundColor = getEmbedThemeColorsDefault(forcedTheme).baseColors.backgroundColor;
        const getMostRecentMessage = ThreadMessageStore.getMostRecentMessage;
        const obj12 = SnowflakeUtilsDefault;
        const mostRecentMessage = getMostRecentMessage(obj12.castMessageIdAsChannelId(message.id));
        const getCount = ThreadMessageStore.getCount;
        const obj13 = SnowflakeUtilsDefault;
        const count = getCount(obj13.castMessageIdAsChannelId(message.id));
        const obj14 = MessageCountUtils;
        const result = obj14.formatMobileMessageCountLabel(count, channel1.id);
        const obj15 = MessageCountUtils;
        const result1 = obj15.formatMessageCountLabel(count, channel1.id);
        if (null != count) {
          let obj;
          if (count > 0) {
            let obj4;
            const tmp13Result = SpoilerChannelUtils;
            if (tmp13Result.isChannelSpoilerGated(channel1)) {
              const obj2 = { title: channelName, messageCountLabel: result, messageCountAccessibilityLabel: result1, messagePreviewString: intl5.string(intl20.t["5uaI/7"]), archived: false, backgroundColor };
              intl5 = intl20.intl;
              obj4 = obj2;
            } else {
              const threadMetadata = channel1.threadMetadata;
              let archived;
              if (threadMetadata != null) {
                archived = threadMetadata.archived;
              }
              if (archived) {
                const obj3 = { title: channelName, messageCountLabel: result, messageCountAccessibilityLabel: result1, messagePreviewString: intl4.string(intl20.t.ZTo4HS), archived: true, archivedIconUrl: tmp13Result2.getAssetUriForEmbed(AssetRegistryDefault), backgroundColor };
                intl4 = intl20.intl;
                obj4 = obj3;
                tmp13Result2 = renderer_EmbedUtils;
              } else {
                if (null != mostRecentMessage) {
                  if (mostRecentMessage.type !== constants.CHANNEL_NAME_CHANGE) {
                    if (mostRecentMessage.type !== tmp24.THREAD_STARTER_MESSAGE) {
                      if (!mostRecentMessage.blocked) {
                        if (!mostRecentMessage.ignored) {
                          obj4 = { title: channelName, messageCountLabel: result, messageCountAccessibilityLabel: result1, referencedMessage: obj5, backgroundColor };
                          obj5 = { state: ReferencedMessageRowState.LOADED, message: createMessageContent(obj6) };
                          obj6 = { message: mostRecentMessage, roleStyle, options, isFirst: true, isEditing: false, canShowImages: true, isSystemDM: false, isInlineReplyPreview: true };
                        }
                      }
                      const blocked = mostRecentMessage.blocked;
                      const obj7 = { title: channelName, messageCountLabel: result, messageCountAccessibilityLabel: result1, messagePreviewString: stringResult, archived: false, backgroundColor };
                      const intl2 = intl20.intl;
                      const string = intl2.string;
                      const t = intl20.t;
                      if (blocked) {
                        stringResult = string(t.XAkOo2);
                      } else {
                        stringResult = string(t["G7p6v/"]);
                      }
                      obj4 = obj7;
                    }
                  }
                }
                const obj8 = { title: channelName, messageCountLabel: result, messageCountAccessibilityLabel: result1, messagePreviewString: intl3.string(intl20.t.ZTo4HS), archived: false, backgroundColor };
                intl3 = intl20.intl;
                obj4 = obj8;
              }
            }
            obj = obj4;
          }
          return obj;
        }
        obj = { title: channelName, messageCountLabel: result, messageCountAccessibilityLabel: result1, messagePreviewString: intl.string(intl20.t.HYtNyE), archived: false, backgroundColor };
        intl = intl20.intl;
      }
    }
  }
}
function createMessageContent(message) {
  let AnimateStickers;
  let LEADERBOARD_WINNER_ROLE_NAME_PREFIX;
  let animateEmoji;
  let animatingStickerMessageId;
  let canShowImages;
  let colorString;
  let colorString2;
  let colorStrings;
  let colors;
  let constrainedWidth;
  let content;
  let forceHideSimpleEmbedContent;
  let forcedTheme;
  let gifAutoPlay;
  let guildId;
  let guildMemberAvatar;
  let guildMemberAvatarDecoration;
  let hasSpoilerEmbeds;
  let iconRoleId;
  let ignoreEmbedDescriptionCache;
  let ignoreMentioned;
  let inlineAttachmentMedia;
  let inlineEmbedMedia;
  let intl10;
  let intl11;
  let intl12;
  let intl3;
  let intl4;
  let isEditing;
  let isFirst;
  let isForumPostResult;
  let isInlineReplyPreview;
  let isSystemDM;
  let messageForward;
  let nick;
  let nick2;
  let obj23;
  let obj6;
  let opTagBackgroundColor;
  let opTagText;
  let opTagTextColor;
  let options;
  let pushFeedbackType;
  let renderActivityInstanceEmbed;
  let renderActivityInviteEmbed;
  let renderAttachments;
  let renderCodedLinks;
  let renderCommunicationDisabled;
  let renderComponents;
  let renderContentOnly;
  let renderEmbeds;
  let renderExecutedCommands;
  let renderForumPostActions;
  let renderGiftCode;
  let renderPolls;
  let renderReactions;
  let renderReplies;
  let renderSharedClientTheme;
  let renderThreadEmbeds;
  let roleStyle;
  let shouldObscureSpoiler;
  let shouldShowMedia;
  let tag;
  let tagAccessibilityLabel;
  let tagBackgroundColor;
  let tagIconUrl;
  let tagText;
  let tagTextColor;
  let tagType;
  let tagVerified;
  let timestampHourCycle;
  let tmp13Result72;
  let tmp13Result74;
  let tmp13Result75;
  let tmp164;
  let useAlternateEmbedColors;
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
  const showContentInventoryEntryFallbackEmbed = message.showContentInventoryEntryFallbackEmbed;
  ({ renderEmbeds, renderReactions, inlineEmbedMedia, inlineAttachmentMedia, constrainedWidth, animatingStickerMessageId, timestampHourCycle, renderCodedLinks, renderGiftCode, renderActivityInstanceEmbed, renderActivityInviteEmbed, renderComponents, renderThreadEmbeds, renderReplies, renderExecutedCommands, renderSharedClientTheme, renderForumPostActions, ignoreEmbedDescriptionCache, useAlternateEmbedColors } = options);
  if (forcedTheme == null) {
    forcedTheme = ThemeStore.theme;
  }
  const tmp3 = shouldObscureSpoiler;
  const tmp4 = gifAutoPlay(shouldObscureSpoiler[36])(forcedTheme, useAlternateEmbedColors);
  AccessibilityStore = tmp4;
  ApplicationStore = tmp5;
  let tmp7 = tmp5 && renderEmbeds && message.type !== constants.CUSTOM_GIFT;
  let tmp10 = tmp5 && inlineAttachmentMedia;
  const channel = ChannelStore.getChannel(message.getChannelId());
  const getChannel = ChannelStore.getChannel;
  const tmp2Result = gifAutoPlay(tmp3[26]);
  const channel1 = getChannel(tmp2Result.castMessageIdAsChannelId(message.id));
  guildId1 = undefined;
  if (channel != null) {
    guildId1 = channel.getGuildId();
  }
  const tmp13 = message;
  const id = message.author.id;
  const obj4 = message(tmp3[37]);
  const hasEnhancedRoleColors = obj4.getHasEnhancedRoleColors(guildId1, id);
  if (messageForward == null) {
    const tmp13Result = tmp13(tmp3[38]);
    messageForward = tmp13Result.maybeCreateSingleForwardForMessage(message);
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
    const obj5 = { message: tmp16, roleStyle, isFirst, isEditing, canShowImages, isSystemDM, isInlineReplyPreview, options: obj6 };
    const obj3 = { id: message.id };
    obj6 = { renderThreadEmbeds: false, renderReactions: false, shouldDisableInteractiveComponents: true };
    const merged = Object.assign(options);
    const merged1 = Object.assign(createMessageContent(obj5));
    return obj3;
  } else if (gifAutoPlay(tmp3[40])(message)) {
    let systemMessageContent;
    if (message.type === constants.THREAD_CREATED) {
      const obj7 = { threadEmbed: createThreadEmbed(message, roleStyle, isInlineReplyPreview, channel1, options, forcedTheme) };
      const obj8 = { message, theme: forcedTheme, reactions: items, roleStyle };
      const tmp13Result62 = tmp13(tmp3[41]);
      const merged2 = Object.assign(tmp13Result62.createSystemMessageContent(obj8));
      systemMessageContent = obj7;
    } else {
      const obj9 = { message, theme: forcedTheme, reactions: items, roleStyle, isForumPost: isForumPostResult };
      isForumPostResult = undefined;
      const createSystemMessageContent = tmp13(tmp3[41]).createSystemMessageContent;
      tmp13(tmp3[41]);
      if (channel != null) {
        isForumPostResult = channel.isForumPost();
      }
      systemMessageContent = createSystemMessageContent(obj9);
    }
    return systemMessageContent;
  } else {
    let tmp21 = !isFirst;
    if (isFirst) {
      tmp21 = renderContentOnly;
    }
    const author = message.author;
    let timestamp = message.editedTimestamp;
    const isMessageNewerThanImprovedMarkdownEpoch = tmp13(tmp3[42]).isMessageNewerThanImprovedMarkdownEpoch;
    tmp13(tmp3[42]);
    if (timestamp == null) {
      timestamp = message.timestamp;
    }
    const result = isMessageNewerThanImprovedMarkdownEpoch(timestamp.valueOf());
    if (null != message2.content) {
      let parseMessageMarkupResult;
      let applicationIconSource;
      if ("" !== message2.content) {
        const parseMessageMarkup = tmp13(tmp3[43]).parseMessageMarkup;
        const tmp13Result65 = tmp13(tmp3[43]);
        if (!forceHideSimpleEmbedContent) {
          forceHideSimpleEmbedContent = tmp7 && (true === canShowImages && inlineEmbedMedia);
        }
        const tmp26 = null != channel1 && message.isFirstMessageInForumPost(channel1);
        parseMessageMarkupResult = parseMessageMarkup(message, message2, forceHideSimpleEmbedContent, isInlineReplyPreview, tmp26, result, result);
      }
      ({ content, hasSpoilerEmbeds } = parseMessageMarkupResult);
      let tmp35 = restrictedPreview;
      const hasBailedAst = parseMessageMarkupResult.hasBailedAst;
      if (restrictedPreview) {
        tmp35 = null != content;
      }
      let stringResult = content;
      if (tmp35) {
        stringResult = tmp2(tmp3[44])(content);
      }
      const tmp13Result66 = tmp13(tmp3[45]);
      enabledHarmTypesForMessage = tmp13Result66.getEnabledHarmTypesForMessage(message);
      const tmp13Result67 = tmp13(tmp3[46]);
      result1 = tmp13Result67.shouldAgeVerifyForExplicitMedia();
      const ViewImageDescriptions = tmp13(tmp3[47]).ViewImageDescriptions;
      setting = ViewImageDescriptions.getSetting();
      if (tmp7) {
        tmp7 = !hasBailedAst;
      }
      if (tmp7) {
        tmp7 = !restrictedPreview;
      }
      interaction = setting.getInteraction(message);
      let tmp2Result1Result;
      if (tmp7) {
        const obj10 = {
          embeds: message2.embeds,
          channelId: message.channel_id,
          gifAutoPlay,
          hasSpoilerEmbeds,
          ignoreEmbedDescriptionCache,
          shouldInlineEmbedMedia: true === canShowImages && inlineEmbedMedia,
          colors: tmp4,
          showListsAndHeaders: result,
          showMaskedLinks: result,
          themedBackgroundColor: tmp4.embedBackgroundColor,
          enabledContentHarmTypeFlags: enabledHarmTypesForMessage,
          shouldAgeVerify: result1,
          authorIsBot: message.author.bot,
          showContentInventoryEntryFallbackEmbed,
          transformComponents(arg0) {
                  const obj = { message, guildId: guildId1, interaction, shouldDisableInteractiveComponents, shouldShowMedia, shouldObscureSpoiler, enabledContentHarmTypeFlags: enabledHarmTypesForMessage, shouldAgeVerify: result1, shouldShowMosaicMediaDescriptions: setting, shouldAutoPlayGifs: gifAutoPlay, colors };
                  return transformMessageComponentsDefault(obj, arg0);
                }
        };
        const tmp2Result7 = gifAutoPlay(tmp3[48]);
        if (hasSpoilerEmbeds) {
          hasSpoilerEmbeds = shouldObscureSpoiler;
        }
        tmp2Result1Result = tmp2Result7(obj10);
      }
      const obj11 = { message, isSystemDM, channel, colors: tmp4 };
      ({ tagText, tagAccessibilityLabel, tagVerified, tagTextColor, tagBackgroundColor, tagType, tagIconUrl, opTagText, opTagTextColor, opTagBackgroundColor } = gifAutoPlay(tmp3[50])(obj11));
      gifAutoPlay(tmp3[50])(obj11);
      const uploaderFileForMessageId = UploadStore.getUploaderFileForMessageId(message.id);
      let tmp49 = tmp2Result1Result;
      const tmp48 = message.state !== constants2.SEND_FAILED || message.isCommandType();
      if (!tmp48) {
        let items1 = tmp2Result1Result;
        if (tmp2Result1Result == null) {
          items1 = [];
        }
        const obj13 = { uploaderFile: uploaderFileForMessageId, useAttachmentUploadPreview: null != uploaderFileForMessageId, colors: tmp4 };
        items1.push(gifAutoPlay(tmp3[51])(obj13));
        tmp49 = items1;
      }
      const message4 = result1.getMessage(message.id);
      let tmp53 = tmp49;
      if (null != message4) {
        let items2 = tmp49;
        if (tmp49 == null) {
          items2 = [];
        }
        const errorMessage = message4.errorMessage;
        const push = items2.push;
        const obj14 = { errorMessage, colors: tmp4 };
        const tmp13Result68 = tmp13(tmp3[51]);
        push(tmp13Result68.createAutomodBlockedMessageEmbed(obj14));
        tmp53 = items2;
      }
      const tmp13Result69 = tmp13(tmp3[52]);
      const userAuthor = tmp13Result69.getUserAuthor(message.author, channel);
      ({ guildMemberAvatar, guildMemberAvatarDecoration, iconRoleId } = userAuthor);
      const ensureAvatarSource = tmp13(tmp3[53]).ensureAvatarSource;
      tmp13(tmp3[53]);
      if (message.isInteractionPlaceholder()) {
        if (null == message.author.avatar) {
          if (null == guildMemberAvatar) {
            let roleIcon;
            let tmp71;
            let tmp94;
            let items3;
            const application = message.application;
            let icon;
            if (application != null) {
              icon = application.icon;
            }
            if (null != icon) {
              const obj15 = { id: message.application.id, icon: message.application.icon, bot: message.application.bot };
              const tmp2Result8 = gifAutoPlay(tmp3[54]);
              applicationIconSource = tmp2Result8.getApplicationIconSource(obj15);
            }
            const ensureAvatarSourceResult = ensureAvatarSource(applicationIconSource);
            const getAvatarDecorationURL = tmp13(tmp3[54]).getAvatarDecorationURL;
            tmp13(tmp3[54]);
            if (null == guildMemberAvatarDecoration) {
              guildMemberAvatarDecoration = author.avatarDecoration;
            }
            const obj16 = { avatarDecoration: guildMemberAvatarDecoration, size: tmp13Result72.getDecorationSizeForAvatarSize(tmp13(tmp3[56]).AvatarSizes.NORMAL) };
            let member = null;
            tmp13Result72 = tmp13(tmp3[55]);
            const avatarDecorationURL = getAvatarDecorationURL(obj16);
            if (null != guildId1) {
              member = GuildMemberStore.getMember(guildId1, author.id);
            }
            let prop;
            const getActiveLeaderboardWinnerData = tmp13(tmp3[57]).getActiveLeaderboardWinnerData;
            tmp13(tmp3[57]);
            if (member != null) {
              prop = member.gamingLeaderboardData;
            }
            const activeLeaderboardWinnerData = getActiveLeaderboardWinnerData(prop);
            let tmp67;
            if (null != activeLeaderboardWinnerData) {
              if (null != activeLeaderboardWinnerData.winningStreak) {
                if (null != activeLeaderboardWinnerData.winningWeek) {
                  if (null != activeLeaderboardWinnerData.winningStat) {
                    tmp67 = activeLeaderboardWinnerData;
                  }
                }
              }
            }
            if (null != tmp67) {
              const obj17 = { unicodeEmoji: "\u{1F3C6}", name: LEADERBOARD_WINNER_ROLE_NAME_PREFIX + tmp13Result74.encodeWinnerData(tmp67), size: 18, alt: tmp13Result75.getLeaderboardWinnerBadgeText(tmp67) };
              LEADERBOARD_WINNER_ROLE_NAME_PREFIX = tmp13(tmp3[58]).LEADERBOARD_WINNER_ROLE_NAME_PREFIX;
              tmp13Result74 = tmp13(tmp3[58]);
              roleIcon = obj17;
              tmp13Result75 = tmp13(tmp3[58]);
            } else if (null != iconRoleId) {
              if (null != guildId1) {
                const obj18 = { guildId: guildId1, roleId: iconRoleId, size: 18 };
                const tmp13Result76 = tmp13(tmp3[59]);
                roleIcon = tmp13Result76.getRoleIcon(obj18);
              }
            }
            if (message.hasFlag(constants3.SOURCE_MESSAGE_DELETED)) {
              const intl = tmp13(tmp3[29]).intl;
              stringResult = intl.string(tmp13(tmp3[29]).t.JOtgSw);
            }
            const tmp13Result77 = tmp13(tmp3[52]);
            const messageAuthor = tmp13Result77.getMessageAuthor(message);
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
                  const tmp13Result78 = tmp13(tmp3[38]);
                  const result2 = tmp13Result78.maybeCreateSingleForwardForMessage(message3);
                  if (RelationshipStore.isBlockedForMessage(message3)) {
                    const obj20 = { state: ReferencedMessageRowState.SYSTEM, content: intl12.string(tmp13(tmp3[29]).t.XAkOo2) };
                    intl12 = tmp13(tmp3[29]).intl;
                    tmp71 = obj20;
                  } else if (RelationshipStore.isIgnoredForMessage(message3)) {
                    const obj21 = { state: ReferencedMessageRowState.SYSTEM, content: intl11.string(tmp13(tmp3[29]).t["G7p6v/"]) };
                    intl11 = tmp13(tmp3[29]).intl;
                    tmp71 = obj21;
                  } else {
                    const obj22 = { message: message3, messageForward: result2, roleStyle, isFirst: true, isEditing: false, canShowImages: true, isSystemDM: false, isInlineReplyPreview: true, options: obj23 };
                    obj23 = { renderReplies: false };
                    const merged3 = Object.assign(options);
                    const tmp83 = createMessageContent(obj22);
                    if (null == tmp83) {
                      const obj24 = { state: ReferencedMessageRowState.SYSTEM, content: intl10.string(tmp13(tmp3[29]).t["1i+hMi"]) };
                      intl10 = tmp13(tmp3[29]).intl;
                      tmp71 = obj24;
                    } else {
                      let messageStickers;
                      let stringResult1;
                      if ("username" in tmp83) {
                        let colorString3;
                        const tmp13Result79 = tmp13(tmp3[52]);
                        const messageAuthor1 = tmp13Result79.getMessageAuthor(message3);
                        ({ nick: nick2, colorString: colorString2 } = messageAuthor1);
                        if (nick2 == null) {
                          nick2 = message3.author.username;
                        }
                        tmp83.username = nick2;
                        if (tmp21) {
                          colorString3 = tmp83.colorString;
                        } else {
                          colorString3 = shouldDisableInteractiveComponents(colorString2);
                          if (colorString3 == null) {
                            colorString3 = tmp83.colorString;
                          }
                        }
                        tmp83.colorString = colorString3;
                        if (gifAutoPlay(tmp3[60])(message, message3)) {
                          tmp83.username = `@${tmp83.username}`;
                        }
                      }
                      const _Array = Array;
                      const isArray = Array.isArray(tmp83.content) && 0 === tmp83.content.length;
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
                      const content2 = tmp83.content;
                      if ("stickers" in message5) {
                        const tmp13Result80 = tmp13(tmp3[33]);
                        messageStickers = tmp13Result80.getMessageStickers(message5);
                      } else {
                        messageStickers = [];
                      }
                      if (messageStickers.length > 0) {
                        const intl9 = tmp13(tmp3[29]).intl;
                        stringResult1 = intl9.string(tmp13(tmp3[29]).t["7K5Lma"]);
                      } else {
                        if ("interaction" in message5) {
                          if (null != message5.interaction) {
                            if ("" === message5.content) {
                              const intl8 = tmp13(tmp3[29]).intl;
                              stringResult1 = intl8.string(tmp13(tmp3[29]).t["2v7kfl"]);
                            }
                          }
                        }
                        const tmp13Result81 = tmp13(tmp3[34]);
                        if (tmp13Result81.hasFlag(message5.flags, constants3.IS_VOICE_MESSAGE)) {
                          const intl7 = tmp13(tmp3[29]).intl;
                          stringResult1 = intl7.string(tmp13(tmp3[29]).t["6bhHrc"]);
                        } else if (message5.type === constants.POLL_RESULT) {
                          const tmp13Result82 = tmp13(tmp3[35]);
                          stringResult1 = tmp13Result82.getPollResultsReplyPreviewMobile(message5);
                        } else {
                          const tmp13Result83 = tmp13(tmp3[34]);
                          if (tmp13Result83.hasFlag(message5.flags, constants3.IS_COMPONENTS_V2)) {
                            const intl6 = tmp13(tmp3[29]).intl;
                            stringResult1 = intl6.string(tmp13(tmp3[29]).t.Xxm5i3);
                          } else if ("" === message5.content) {
                            const intl5 = tmp13(tmp3[29]).intl;
                            stringResult1 = intl5.string(tmp13(tmp3[29]).t.JAKsM8);
                          } else {
                            stringResult1 = null;
                          }
                        }
                      }
                      if (message3.type === constants.POLL_RESULT) {
                        tmp83.content = stringResult1;
                      }
                      const obj25 = { state: ReferencedMessageRowState.LOADED, message: tmp83 };
                      tmp71 = obj25;
                      if (null != stringResult1) {
                        obj25.systemContent = stringResult1;
                        tmp71 = obj25;
                      }
                    }
                  }
                } else if (ReferencedMessageState.NOT_LOADED === state) {
                  const obj26 = { state: ReferencedMessageRowState.SYSTEM, content: intl4.string(tmp13(tmp3[29]).t["1i+hMi"]) };
                  intl4 = tmp13(tmp3[29]).intl;
                  tmp71 = obj26;
                } else if (ReferencedMessageState.DELETED === state) {
                  const obj27 = { state: ReferencedMessageRowState.SYSTEM, content: intl3.string(tmp13(tmp3[29]).t.mE3KJN) };
                  intl3 = tmp13(tmp3[29]).intl;
                  tmp71 = obj27;
                } else {
                  const tmp13Result84 = tmp13(tmp3[61]);
                  tmp13Result84.assertNever(messageByReference1);
                }
              }
            }
            if (renderThreadEmbeds) {
              tmp94 = createThreadEmbed(message, roleStyle, isInlineReplyPreview, channel1, options, forcedTheme);
            }
            const tmp13Result85 = tmp13(tmp3[62]);
            const interactionStatus = tmp13Result85.createInteractionStatus(message, interaction);
            const useReducedMotion = AccessibilityStore.useReducedMotion;
            let parent_id;
            const tmp13Result86 = tmp13(tmp3[63]);
            const result3 = tmp13Result86.isMemberCommunicationDisabled(member);
            const alwaysShowLinkDecorations = AccessibilityStore.alwaysShowLinkDecorations;
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
            const obj28 = { guildMember: member, channel: channel2, onlyChannelConnectionRoles: true };
            const tmp13Result87 = tmp13(tmp3[64]);
            const visibleConnectionsRole = tmp13Result87.getVisibleConnectionsRole(obj28);
            let tmp109 = tmp46;
            if (null != uploaderFileForMessageId) {
              tmp109 = 0 === message.attachments.length;
            }
            if (tmp109) {
              tmp109 = null != uploaderFileForMessageId;
            }
            if (tmp109) {
              const obj29 = { uploaderFile: uploaderFileForMessageId, isFailedMessage: message.state === constants2.SEND_FAILED, shouldInlineAttachmentMedia: tmp10 };
              items3 = tmp2(tmp3[65])(obj29);
            } else {
              items3 = [];
              if (renderAttachments) {
                const obj30 = { attachments: message2.attachments, uploadAttachments: UploadStore.getUploadAttachments(message.nonce), shouldInlineAttachmentMedia: tmp10, gifAutoPlay, viewImageDescriptions: setting, useReducedMotion, shouldObscureSpoiler, themedBackgroundColor: tmp4.embedBackgroundColor, enabledContentHarmTypeFlags: enabledHarmTypesForMessage, shouldAgeVerify: result1, colors: tmp4 };
                const tmp2Result9 = gifAutoPlay(tmp3[66]);
                items3 = tmp2Result9(obj30);
              }
            }
            if (tmp109) {
              let stringResult2;
              if (message.state !== constants2.SEND_FAILED) {
                const intl13 = tmp13(tmp3[29]).intl;
                stringResult2 = intl13.string(tmp13(tmp3[29]).t["yXY+5J"]);
              }
              if (tmp109) {
                let stringResult3;
                let tmp120;
                let result4;
                let tmp124;
                let tmp131;
                let tmp132;
                let id3;
                let tmp145;
                let joined;
                if (message.state !== constants2.SEND_FAILED) {
                  const intl14 = tmp13(tmp3[29]).intl;
                  stringResult3 = intl14.string(tmp13(tmp3[29]).t["yXY+5J"]);
                }
                let stringResult4 = stringResult;
                const id1 = AuthenticationStore.getId();
                if (message.isUnsupported) {
                  const intl15 = tmp13(tmp3[29]).intl;
                  stringResult4 = intl15.string(tmp13(tmp3[29]).t.sWi5EU);
                }
                const isPollResult = message.isPoll();
                let tmp117 = !isPollResult;
                if (isPollResult) {
                  tmp117 = !isInlineReplyPreview && renderPolls;
                }
                if (!tmp117) {
                  tmp117 = null != stringResult && "" !== stringResult;
                  const tmp119 = null != stringResult && "" !== stringResult;
                }
                if (!tmp117) {
                  const tmp13Result88 = tmp13(tmp3[35]);
                  stringResult4 = tmp13Result88.getPollReplyPreview(message);
                }
                if (renderPolls) {
                  const obj31 = { theme: forcedTheme, animateEmoji };
                  tmp120 = gifAutoPlay(tmp3[68])(message, undefined, obj31);
                }
                if (renderSharedClientTheme) {
                  const tmp13Result89 = tmp13(tmp3[69]);
                  result4 = tmp13Result89.formatSharedClientThemeData(message, ensureAvatarSourceResult, nick);
                }
                const shouldDisplayGuildTag = tmp13(tmp3[70]).shouldDisplayGuildTag;
                const id2 = author.id;
                tmp13(tmp3[70]);
                const tmp123 = guildId1;
                if (shouldDisplayGuildTag(id2, tmp123)) {
                  const tmp13Result91 = tmp13(tmp3[70]);
                  const userPrimaryGuild = tmp13Result91.getUserPrimaryGuild(author.primaryGuild);
                  let guildTagBadgeUrl;
                  ({ guildId, tag } = userPrimaryGuild);
                  if (null != userPrimaryGuild.guildId) {
                    const tmp13Result92 = tmp13(tmp3[70]);
                    guildTagBadgeUrl = tmp13Result92.getGuildTagBadgeUrl(userPrimaryGuild.guildId, userPrimaryGuild.badge, GuildTagBadgeSize.SIZE_12);
                  }
                  tmp124 = guildTagBadgeUrl;
                }
                let linkedLobby;
                if (channel != null) {
                  linkedLobby = channel.linkedLobby;
                }
                if (null != linkedLobby) {
                  if (null != message.additionalName) {
                    if ("" !== message.additionalName) {
                      const additionalName = message.additionalName;
                      const application1 = ApplicationStore.getApplication(linkedLobby.application_id);
                      let icon1;
                      if (application1 != null) {
                        icon1 = application1.icon;
                      }
                      let applicationIconURL;
                      if (null != icon1) {
                        const obj32 = { id: null, icon: null, size: 16 };
                        ({ id: obj59.id, icon: obj59.icon } = application1);
                        const tmp2Result10 = gifAutoPlay(tmp3[54]);
                        applicationIconURL = tmp2Result10.getApplicationIconURL(obj32);
                      }
                      tmp131 = applicationIconURL;
                      tmp132 = additionalName;
                    }
                  }
                }
                let tmp138 = message2;
                const hasFlag = tmp13(tmp3[34]).hasFlag;
                tmp13(tmp3[34]);
                if (message2 == null) {
                  tmp138 = message;
                }
                let str8 = message.applicationId;
                const getApplication = ApplicationStore.getApplication;
                const hasFlagResult = hasFlag(tmp138.flags, constants3.IS_VOICE_MESSAGE);
                if (str8 == null) {
                  str8 = "";
                }
                const application2 = getApplication(str8);
                let hasFlagResult1 = null != application2;
                if (hasFlagResult1) {
                  const tmp13Result94 = tmp13(tmp3[34]);
                  hasFlagResult1 = tmp13Result94.hasFlag(message.flags, constants3.SENT_BY_SOCIAL_LAYER_INTEGRATION);
                }
                if (hasFlagResult1) {
                  id3 = application2.id;
                }
                let hasFlagResult2;
                if (message2 != null) {
                  hasFlagResult2 = message2.hasFlag(constants3.IS_GUILD_OFFICIAL);
                }
                const items4 = [];
                if (hasFlagResult2) {
                  const guild = GuildStore.getGuild(guildId1);
                  if (null != guild) {
                    const tmp13Result95 = tmp13(tmp3[71]);
                    if (tmp13Result95.isGuildOfficialMessagesEnabled(guild, "createMessageContent")) {
                      let officialMessageColor = guild.officialMessageColor;
                      if (officialMessageColor == null) {
                        officialMessageColor = closure_24;
                      }
                      const officialMessageStyle = tmp104.officialMessageStyle;
                      const tmp13Result96 = tmp13(tmp3[71]);
                      const result5 = tmp13Result96.showGuildOfficialMessageGradient(officialMessageStyle);
                      let tmp149;
                      if (result5) {
                        tmp149 = officialMessageColor | closure_26;
                      }
                      const tmp13Result97 = tmp13(tmp3[71]);
                      if (tmp13Result97.showGuildOfficialMessageTextColor(officialMessageStyle)) {
                        const internal = tmp2(tmp3[72]).internal;
                        const semanticColor = internal.resolveSemanticColor(forcedTheme, tmp2(tmp3[72]).colors.BACKGROUND_BASE_LOWER);
                        let num5 = 1;
                        if (AccessibilityStore.desaturateUserColors) {
                          num5 = tmp104.saturation;
                        }
                        let num6 = 0;
                        const getAccessibleGuildOfficialTextColor = tmp13(tmp3[71]).getAccessibleGuildOfficialTextColor;
                        const tmp13Result98 = tmp13(tmp3[71]);
                        if (result5) {
                          num6 = closure_25;
                        }
                        const accessibleGuildOfficialTextColor = getAccessibleGuildOfficialTextColor(officialMessageColor, semanticColor, num5, num6);
                        accessibleGuildOfficialTextColor.num();
                      }
                      const push2 = items4.push;
                      const intl16 = tmp13(tmp3[29]).intl;
                      push2(intl16.string(tmp13(tmp3[29]).t.GzDTxY));
                      tmp145 = tmp149;
                    }
                  }
                }
                let obj65 = message2;
                if (message2 == null) {
                  obj65 = message;
                }
                if (obj65.hasFlag(constants3.SUPPRESS_NOTIFICATIONS)) {
                  const push3 = items4.push;
                  const intl17 = tmp13(tmp3[29]).intl;
                  push3(intl17.string(tmp13(tmp3[29]).t.t0MA8g));
                }
                if (items4.length > 0) {
                  joined = items4.join(", ");
                }
                const obj33 = { id: null, channelId: null, guildId: guildId1, flags: tmp164.flags, type: message.type, nonce: null, state: null, reactions: null, referencedMessage: null, threadEmbed: null, forwardInfo: null, mentioned: null, edited: null, editedTimestamp: null, editedColor: null, textColor: null, officialMessageColor: null, linkColor: null, tagText: null, tagAccessibilityLabel: null, tagVerified: null, tagTextColor: null, tagBackgroundColor: null, tagType: null, tagIconUrl: null, opTagText: null, opTagTextColor: null, opTagBackgroundColor: null, stateAccessibilityLabel: null, constrainedWidth: null, gifAutoPlay: null, animateEmoji: null, username: null, avatarURL: null, avatarDecorationURL: null, authorId: null, usernameColor: null, roleColor: null, roleColors: null, shouldShowRoleDot: null, shouldShowRoleOnName: null, showLinkDecorations: null, forceRevealSpoilers: null, colorString: null, roleIcon: null, connectionsRoleTag: null, timestamp: null, timestampTooltip: null, timestampColor: null, timestampAccessibilityLabel: null, content: null, isEditing: null, renderContentOnly: null, surveyIndication: null, ephemeralIndication: null, interactionStatus: null, executedCommand: null, components: null, feedbackColor: null, highlightColor: null, embeds: null, giftCodes: null, codedLinks: null, activityInstanceEmbed: null, activityRichPresenceInviteEmbed: null, useAttachmentGridLayout: null, useAttachmentUploadPreview: null, attachments: null, attachmentsOpacity: null, stickers: null, communicationDisabled: null, isFirstForumPostMessage: null, postActions: null, isCurrentUserMessageAuthor: null, usingGradientTheme: null, swipeToReplyIconUrl: null, swipeToEditIconUrl: null, postPreviewEmbeds: null, obscureLearnMoreLabel: null, safetyPolicyNoticeEmbed: null, pollData: null, sharedClientTheme: null, safetySystemNotificationEmbed: null };
                ({ id: obj67.id, channel_id: obj67.channelId } = message);
                const tmp13Result99 = tmp13(tmp3[73]);
                const voiceChannelBadge = tmp13Result99.createVoiceChannelBadge(message.author.id, guildId1);
                tmp164 = message2;
                if (message2 == null) {
                  tmp164 = message;
                }
                if (null != message.nonce) {
                  let nonce;
                  let textColor;
                  if (typeof message.nonce !== "string") {
                    const _String = String;
                    nonce = String(message.nonce);
                  }
                  obj33.nonce = nonce;
                  obj33.state = message.state;
                  obj33.reactions = items;
                  let tmp166;
                  if (!renderContentOnly) {
                    tmp166 = tmp71;
                  }
                  obj33.referencedMessage = tmp166;
                  obj33.threadEmbed = tmp94;
                  let forwardInfo;
                  if (null != messageForward) {
                    forwardInfo = messageForward.getForwardInfo();
                  }
                  obj33.forwardInfo = forwardInfo;
                  obj33.mentioned = !ignoreMentioned && message.mentioned;
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
                        const tmp13Result100 = tmp13(tmp3[67]);
                        dateFormatResult = tmp13Result100.dateFormat(message.editedTimestamp, "LLLL");
                      }
                    }
                  }
                  obj33.editedTimestamp = dateFormatResult;
                  obj33.editedColor = tmp4.editedColor;
                  if (message.isUnsupported) {
                    textColor = tmp4.unsupportedColor;
                  } else if (null != tmp144) {
                    textColor = 4278190080 | tmp144;
                  } else {
                    textColor = tmp4.textColor;
                  }
                  obj33.textColor = textColor;
                  obj33.officialMessageColor = tmp145;
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
                  let tmp170 = null;
                  if (!tmp21) {
                    tmp170 = avatarDecorationURL;
                  }
                  obj33.avatarDecorationURL = tmp170;
                  obj33.authorId = author.id;
                  if (!tmp21) {
                    let defaultUsernameColor;
                    let defaultUsernameColor2;
                    let giftCodeEmbed;
                    let codedLinkEmbeds;
                    let items5;
                    let postPreviewEmbeds;
                    if ("username" === roleStyle) {
                      defaultUsernameColor = shouldDisableInteractiveComponents(colorString);
                      if (defaultUsernameColor == null) {
                        defaultUsernameColor = tmp4.defaultUsernameColor;
                      }
                    }
                    obj33.usernameColor = defaultUsernameColor;
                    let tmp173 = null;
                    if (!tmp21) {
                      let tmp174Result = shouldDisableInteractiveComponents(colorString);
                      if (tmp174Result == null) {
                        tmp174Result = null;
                      }
                      tmp173 = tmp174Result;
                    }
                    obj33.roleColor = tmp173;
                    let processColorStringsResult = null;
                    if (hasEnhancedRoleColors) {
                      processColorStringsResult = null;
                      if (!tmp21) {
                        const tmp13Result101 = tmp13(tmp3[74]);
                        processColorStringsResult = tmp13Result101.processColorStrings(colorStrings);
                      }
                    }
                    obj33.roleColors = processColorStringsResult;
                    obj33.shouldShowRoleDot = "dot" === roleStyle;
                    obj33.shouldShowRoleOnName = "username" === roleStyle;
                    obj33.showLinkDecorations = alwaysShowLinkDecorations;
                    obj33.forceRevealSpoilers = !shouldObscureSpoiler;
                    if (tmp21) {
                      defaultUsernameColor2 = tmp4.defaultUsernameColor;
                    } else {
                      defaultUsernameColor2 = shouldDisableInteractiveComponents(colorString);
                      if (defaultUsernameColor2 == null) {
                        defaultUsernameColor2 = tmp4.defaultUsernameColor;
                      }
                    }
                    obj33.colorString = defaultUsernameColor2;
                    let tmp179;
                    if (!tmp21) {
                      tmp179 = roleIcon;
                    }
                    obj33.roleIcon = tmp179;
                    let connectionsRoleTag;
                    if (null != visibleConnectionsRole) {
                      const tmp13Result102 = tmp13(tmp3[75]);
                      connectionsRoleTag = tmp13Result102.createConnectionsRoleTag(visibleConnectionsRole);
                    }
                    obj33.connectionsRoleTag = connectionsRoleTag;
                    let tmp181;
                    if (!tmp21) {
                      tmp181 = stringResult2;
                    }
                    obj33.timestamp = tmp181;
                    let dateFormatResult1;
                    if (!tmp21) {
                      const tmp13Result103 = tmp13(tmp3[67]);
                      dateFormatResult1 = tmp13Result103.dateFormat(message.timestamp, "LLLL");
                    }
                    obj33.timestampTooltip = dateFormatResult1;
                    let timestampColor;
                    if (!tmp21) {
                      timestampColor = tmp4.timestampColor;
                    }
                    obj33.timestampColor = timestampColor;
                    let tmp184;
                    if (!tmp21) {
                      tmp184 = stringResult3;
                    }
                    obj33.timestampAccessibilityLabel = tmp184;
                    obj33.content = stringResult4;
                    obj33.isEditing = isEditing;
                    obj33.renderContentOnly = renderContentOnly;
                    let surveyIndication;
                    if (undefined !== pushFeedbackType) {
                      const tmp13Result104 = tmp13(tmp3[76]);
                      surveyIndication = tmp13Result104.createSurveyIndication(message, forcedTheme, pushFeedbackType);
                    }
                    obj33.surveyIndication = surveyIndication;
                    const tmp13Result105 = tmp13(tmp3[77]);
                    obj33.ephemeralIndication = tmp13Result105.createEphemeralIndication(message);
                    obj33.interactionStatus = interactionStatus;
                    let executedCommand;
                    if (renderExecutedCommands) {
                      const tmp13Result106 = tmp13(tmp3[78]);
                      executedCommand = tmp13Result106.createExecutedCommand(message, channel, roleStyle, tmp6, tmp4.defaultUsernameColor);
                    }
                    obj33.executedCommand = executedCommand;
                    let tmp192;
                    if (message2.components.length > 0) {
                      if (renderComponents) {
                        const obj35 = { message, guildId: guildId1, interaction, shouldDisableInteractiveComponents, shouldShowMedia: true === canShowImages, shouldObscureSpoiler, enabledContentHarmTypeFlags: enabledHarmTypesForMessage, shouldAgeVerify: result1, shouldShowMosaicMediaDescriptions: setting, shouldAutoPlayGifs: gifAutoPlay, colors: tmp4 };
                        tmp192 = tmp2(tmp3[49])(obj35, message2.components);
                      }
                    }
                    obj33.components = tmp192;
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
                    obj33.embeds = tmp53;
                    if (renderGiftCode) {
                      const tmp13Result107 = tmp13(tmp3[79]);
                      giftCodeEmbed = tmp13Result107.createGiftCodeEmbed(message, forcedTheme);
                    } else {
                      giftCodeEmbed = [];
                    }
                    obj33.giftCodes = giftCodeEmbed;
                    if (renderCodedLinks) {
                      const tmp13Result108 = tmp13(tmp3[80]);
                      codedLinkEmbeds = tmp13Result108.createCodedLinkEmbeds(message, message2, channel, tmp6);
                    } else {
                      codedLinkEmbeds = [];
                    }
                    obj33.codedLinks = codedLinkEmbeds;
                    let activityInstanceEmbed;
                    if (renderActivityInstanceEmbed) {
                      const tmp13Result109 = tmp13(tmp3[81]);
                      activityInstanceEmbed = tmp13Result109.createActivityInstanceEmbed(message);
                    }
                    obj33.activityInstanceEmbed = activityInstanceEmbed;
                    let activityRichPresenceInviteEmbed;
                    if (renderActivityInviteEmbed) {
                      const tmp13Result110 = tmp13(tmp3[82]);
                      activityRichPresenceInviteEmbed = tmp13Result110.createActivityRichPresenceInviteEmbed(message, channel);
                    }
                    obj33.activityRichPresenceInviteEmbed = activityRichPresenceInviteEmbed;
                    if (tmp10) {
                      if (renderAttachments) {
                        renderAttachments = 0 !== length || 0 !== length2;
                      }
                      if (!renderAttachments) {
                        renderAttachments = tmp46;
                      }
                      tmp10 = renderAttachments;
                    }
                    obj33.useAttachmentGridLayout = tmp10;
                    obj33.useAttachmentUploadPreview = null != uploaderFileForMessageId;
                    obj33.attachments = items3;
                    let num12 = 1;
                    if (null != uploaderFileForMessageId) {
                      num12 = 1;
                      if (message.state === constants2.SEND_FAILED) {
                        num12 = 0.2;
                      }
                    }
                    obj33.attachmentsOpacity = num12;
                    if (restrictedPreview) {
                      items5 = [];
                    } else {
                      const obj36 = { message: message2, animateStickersSetting: AnimateStickers.getSetting(), isUserInteracting: message.id === animatingStickerMessageId };
                      const tmp2Result11 = gifAutoPlay(tmp3[83]);
                      AnimateStickers = tmp13(tmp3[47]).AnimateStickers;
                      items5 = tmp2Result11(obj36);
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
                    let tmp204;
                    if (isForumPostResult2) {
                      if (renderForumPostActions) {
                        let forumPostActions;
                        if (message.id === message.channel_id) {
                          const guildId2 = channel.getGuildId();
                          if (null == guildId2) {
                            let defaultReaction;
                            const hasJoinedResult = JoinedThreadsStore.hasJoined(message.channel_id);
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
                              const tmp13Result111 = tmp13(tmp3[32]);
                              defaultReaction = tmp13Result111.createDefaultReaction(obj37);
                            }
                            const obj38 = { isFollowing: hasJoinedResult, hasReactions: 0 !== message.reactions.length, defaultReaction, showMediaPostSharePrompt: MediaPostSharePromptStore.shouldDisplayPrompt(channel.id) };
                            const tmp13Result112 = tmp13(tmp3[32]);
                            forumPostActions = tmp13Result112.createForumPostActions(obj38);
                          }
                        }
                        tmp204 = forumPostActions;
                      }
                    }
                    obj33.postActions = tmp204;
                    obj33.isCurrentUserMessageAuthor = message.author.id === id1;
                    obj33.usingGradientTheme = null != guildId1.gradientPreset;
                    const tmp13Result113 = tmp13(tmp3[30]);
                    obj33.swipeToReplyIconUrl = tmp13Result113.getAssetUriForEmbed(gifAutoPlay(tmp3[84]));
                    const tmp13Result114 = tmp13(tmp3[30]);
                    obj33.swipeToEditIconUrl = tmp13Result114.getAssetUriForEmbed(gifAutoPlay(tmp3[85]));
                    if (tmp7) {
                      const tmp13Result115 = tmp13(tmp3[86]);
                      postPreviewEmbeds = tmp13Result115.createPostPreviewEmbeds(message, roleStyle, useReducedMotion);
                    } else {
                      postPreviewEmbeds = [];
                    }
                    obj33.postPreviewEmbeds = postPreviewEmbeds;
                    const intl19 = tmp13(tmp3[29]).intl;
                    obj33.obscureLearnMoreLabel = intl19.string(tmp13(tmp3[29]).t["2aXnfa"]);
                    const tmp13Result116 = tmp13(tmp3[87]);
                    obj33.safetyPolicyNoticeEmbed = tmp13Result116.createSafetyPolicyNoticeEmbed(message);
                    obj33.pollData = tmp120;
                    obj33.sharedClientTheme = result4;
                    const tmp13Result117 = tmp13(tmp3[88]);
                    obj33.safetySystemNotificationEmbed = tmp13Result117.createSafetySystemNotificationEmbed(message);
                    const tmp13Result118 = tmp13(tmp3[89]);
                    const merged4 = Object.assign(tmp13Result118.createCtaButtons(message.id, message.channel_id, tmp4));
                    let embedBackgroundColor;
                    if (hasFlagResult) {
                      embedBackgroundColor = tmp4.embedBackgroundColor;
                    }
                    obj33.audioAttachmentBackgroundColor = embedBackgroundColor;
                    const tmp13Result119 = tmp13(tmp3[90]);
                    obj33.accessibilityActions = tmp13Result119.createMessageAccessibilityActions(message, channel);
                    obj33.clanTagGuildId = guildId;
                    obj33.clanTag = tag;
                    obj33.clanBadgeUrl = tmp124;
                    obj33.lobbyAdditionalName = tmp132;
                    obj33.lobbyTagIconUrl = tmp131;
                    obj33.isFirst = isFirst;
                    obj33.gameApplicationId = id3;
                    let type;
                    if (channel != null) {
                      type = channel.type;
                    }
                    obj33.isAnnouncementChannel = type === constants4.GUILD_ANNOUNCEMENT;
                    const tmp13Result120 = tmp13(tmp3[91]);
                    obj33.displayNameStyles = tmp13Result120.createDisplayNameStylesMobile(message.author, member);
                    obj33.voiceChannelBadge = voiceChannelBadge;
                    return obj33;
                  }
                  defaultUsernameColor = tmp4.defaultUsernameColor;
                }
                nonce = message.nonce;
              }
              const tmp13Result121 = tmp13(tmp3[67]);
              stringResult3 = tmp13Result121.accessibilityLabelCalendarFormat(message.timestamp);
            }
            const tmp13Result122 = tmp13(tmp3[67]);
            stringResult2 = tmp13Result122.calendarFormat(message.timestamp, true, timestampHourCycle);
          }
        }
      }
      if (null != guildMemberAvatar) {
        if (null != guildId1) {
          const obj39 = { userId: author.id, avatar: guildMemberAvatar, guildId: guildId1 };
          const tmp2Result12 = gifAutoPlay(tmp3[54]);
          applicationIconSource = tmp2Result12.getGuildMemberAvatarSource(obj39, author);
        }
      }
      applicationIconSource = author.getAvatarSource(undefined);
    }
    parseMessageMarkupResult = { content: "Set", hasSpoilerEmbeds: "none", hasBailedAst: "URL" };
  }
}
const processColor = react_native.processColor;
let AccessibilityStore = AccessibilityStore_mod;
let ApplicationStore = ApplicationStore_mod;
const ReferencedMessageState = ReferencedMessageStore2.ReferencedMessageState;
({ DEFAULT_GUILD_OFFICIAL_COLOR: closure_24, GUILD_OFFICIAL_HIGHLIGHT_ALPHA: closure_25, GUILD_OFFICIAL_HIGHLIGHT_ALPHA_COLOR: closure_26 } = MessageConstants);
const ReferencedMessageRowState = RowGeneratorConstants.ReferencedMessageRowState;
({ MessageTypes: closure_28, MessageStates: closure_29, MessageFlags: closure_30, ChannelTypes: closure_31 } = Constants);
const GuildTagBadgeSize = GuildTagConstants.GuildTagBadgeSize;
let result = size.fileFinishedImporting("modules/messages/native/renderer/createMessageContent.tsx");

export default createMessageContent;