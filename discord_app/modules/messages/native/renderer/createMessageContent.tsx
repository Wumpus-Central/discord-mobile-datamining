// discord_app/modules/messages/native/renderer/createMessageContent.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import DISCORD_EPOCHDefault from "../../../../utils/SnowflakeUtils.tsx";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import computeChannelName from "../../../channel/useChannelName.tsx";
import processMessage from "../../../replies/ReferencedMessageStore.tsx";
import isChannelSpoilerGated from "../../../spoiler_channels/SpoilerChannelUtils.tsx";
import Changeset from "RowGeneratorConstants.tsx";
import items6 from "../../../guild_tag/GuildTagConstants.tsx";
import getEmbedThemeColorsDefault from "row_data/embeds/getEmbedThemeColors.tsx";
import _formatMessageCountLabel from "../../../threads/MessageCountUtils.tsx";
import frozen from "EmbedUtils.tsx";
import registerAssetDefault from "../../../../../_runtime/08172_registerAsset.js";
import maybeApplyNoTextColorForLightCustomTheme from "../../../a11y/AccessibilityStore.tsx";
import addApplication from "../../../applications/ApplicationStore.tsx";
import isSyncedModeThemesEnabled from "../../../client_themes/ClientThemesBackgroundStore.tsx";
import getEmojiToGroupId from "../../../emojis/EmojiStore.tsx";
import handleMessageSendFailedAutomod from "../../../guild_automod/GuildAutomodMessageStore.tsx";
import deleteNonce from "../../../interactions/InteractionStore.tsx";
import initialize from "../../../lurker_mode/LurkingStore.tsx";
import set from "../../../media_channel/MediaPostSharePromptStore.tsx";
import processMessage2 from "../../../replies/ReferencedMessageStore.tsx";
import storeThread from "../../../threads/JoinedThreadsStore.tsx";
import updateState from "../../../threads/ThreadMessageStore.tsx";
import handleThemeChange from "../../../user_settings/ThemeStore.tsx";
import fetchFingerprint from "../../../../stores/AuthenticationStore.tsx";
import ensureGuildLoaded from "../../../../stores/ChannelStore.tsx";
import trackCommunicationDisabled from "../../../../stores/GuildMemberStore.tsx";
import createGuildRecordFromRust from "../../../../stores/GuildStore.tsx";
import markAllUserIdListsStale from "../../../../stores/RelationshipStore.tsx";
import initialize2 from "../../../../stores/UploadStore.tsx";
import mergeGuildAvatar from "../../../../stores/UserStore.tsx";
import MESSAGE_GROUP_SPACING from "../../MessageConstants.tsx";
import ME from "../../../../Constants.tsx";

function createThreadEmbed(message, roleStyle, isInlineReplyPreview, channel1, options, forcedTheme) {
  if (!isInlineReplyPreview) {
    if (message.hasFlag(constants3.HAS_THREAD)) {
      if (null != channel1) {
        let string2Result = dependencyMap;
        const channelName = computeChannelName.computeChannelName(channel1, closure_23, closure_21);
        const backgroundColor = getEmbedThemeColorsDefault(forcedTheme).baseColors.backgroundColor;
        const mostRecentMessage = store3.getMostRecentMessage(DISCORD_EPOCHDefault.castMessageIdAsChannelId(message.id));
        const count = store3.getCount(DISCORD_EPOCHDefault.castMessageIdAsChannelId(message.id));
        let intl5 = _formatMessageCountLabel.formatMobileMessageCountLabel(count, channel1.id);
        let string2 = _formatMessageCountLabel.formatMessageCountLabel(count, channel1.id);
        if (null != count) {
          if (count > 0) {
            let tmp15Result = isChannelSpoilerGated;
            if (tmp15Result.isChannelSpoilerGated(channel1)) {
              let obj = { title: null, messageCountLabel: null, messageCountAccessibilityLabel: null, messagePreviewString: null, archived: false, backgroundColor: null };
              obj[0] = channelName;
              obj[1] = intl5;
              obj[2] = string2;
              intl5 = getSystemLocale.intl;
              string2 = intl5.string;
              string2Result = string2(getSystemLocale.t["5uaI/7"]);
              obj[3] = string2Result;
              obj[5] = backgroundColor;
              obj1 = obj;
            } else {
              const threadMetadata = channel1.threadMetadata;
              let archived;
              if (threadMetadata != null) {
                archived = threadMetadata.archived;
              }
              if (archived) {
                obj = { title: null, messageCountLabel: null, messageCountAccessibilityLabel: null, messagePreviewString: null, archived: true, archivedIconUrl: null, backgroundColor: null };
                obj[0] = channelName;
                obj[1] = intl5;
                obj[2] = string2;
                const intl4 = getSystemLocale.intl;
                obj[3] = intl4.string(getSystemLocale.t.ZTo4HS);
                tmp15Result = frozen;
                obj[5] = tmp15Result.getAssetUriForEmbed(registerAssetDefault);
                obj[6] = backgroundColor;
                obj1 = obj;
              } else {
                if (null != mostRecentMessage) {
                  if (mostRecentMessage.type !== constants.CHANNEL_NAME_CHANGE) {
                    if (mostRecentMessage.type !== tmp23.THREAD_STARTER_MESSAGE) {
                      if (!mostRecentMessage.blocked) {
                        if (!mostRecentMessage.ignored) {
                          obj1 = { title: null, messageCountLabel: null, messageCountAccessibilityLabel: null, referencedMessage: null, backgroundColor: null };
                          obj1[0] = channelName;
                          obj1[1] = intl5;
                          obj1[2] = string2;
                          const obj2 = { state: null, message: null };
                          obj2[0] = ReferencedMessageRowState.LOADED;
                          const obj3 = { message: null, roleStyle: null, options: null, isFirst: true, isEditing: false, canShowImages: true, isSystemDM: false, isInlineReplyPreview: true };
                          obj3[0] = mostRecentMessage;
                          obj3[1] = roleStyle;
                          obj3[2] = options;
                          obj2[1] = createMessageContent(obj3);
                          obj1[3] = obj2;
                          obj1[4] = backgroundColor;
                        }
                      }
                      const obj4 = { title: null, messageCountLabel: null, messageCountAccessibilityLabel: null, messagePreviewString: null, archived: false, backgroundColor: null };
                      obj4[0] = channelName;
                      obj4[1] = intl5;
                      obj4[2] = string2;
                      const intl2 = getSystemLocale.intl;
                      const string = intl2.string;
                      let XAkOo2 = getSystemLocale.t;
                      if (mostRecentMessage.blocked) {
                        XAkOo2 = XAkOo2.XAkOo2;
                        let stringResult = string(XAkOo2);
                      } else {
                        stringResult = string(XAkOo2["G7p6v/"]);
                      }
                      obj4[3] = stringResult;
                      obj4[5] = backgroundColor;
                    }
                  }
                }
                const obj5 = { title: null, messageCountLabel: null, messageCountAccessibilityLabel: null, messagePreviewString: null, archived: false, backgroundColor: null };
                obj5[0] = channelName;
                obj5[1] = intl5;
                obj5[2] = string2;
                const intl3 = getSystemLocale.intl;
                obj5[3] = intl3.string(getSystemLocale.t.ZTo4HS);
                obj5[5] = backgroundColor;
                obj1 = obj5;
              }
            }
          }
        }
        obj = { title: null, messageCountLabel: null, messageCountAccessibilityLabel: null, messagePreviewString: null, archived: false, backgroundColor: null };
        obj[0] = channelName;
        obj[1] = intl5;
        obj[2] = string2;
        const intl = getSystemLocale.intl;
        obj[3] = intl.string(getSystemLocale.t.HYtNyE);
        obj[5] = backgroundColor;
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
  closure_4 = undefined;
  let store;
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
    forcedTheme = theme.theme;
  }
  const tmp3 = shouldObscureSpoiler;
  const tmp4 = gifAutoPlay(shouldObscureSpoiler[36])(forcedTheme, useAlternateEmbedColors);
  closure_4 = tmp4;
  store = tmp5;
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
  let obj = store4;
  const channel = store4.getChannel(message.getChannelId());
  let tmp2Result = tmp2(tmp3[26]);
  const channel1 = store4.getChannel(tmp2Result.castMessageIdAsChannelId(message.id));
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
    obj = { reactions: null, animateEmoji: null };
    obj[0] = message.reactions;
    obj[1] = animateEmoji;
    items = tmp2(tmp3[39])(obj);
  }
  let tmp16 = null;
  if (message.type === constants.THREAD_STARTER_MESSAGE) {
    const messageByReference = store2.getMessageByReference(message.messageReference);
    message = null;
    if (messageByReference.state === ReferencedMessageState.LOADED) {
      message = messageByReference.message;
    }
    tmp16 = message;
  }
  if (null != tmp16) {
    obj = {};
    obj1 = { message: null, roleStyle: null, isFirst: null, isEditing: null, canShowImages: null, isSystemDM: null, isInlineReplyPreview: null, options: null };
    obj1[0] = tmp16;
    obj1[1] = roleStyle;
    obj1[2] = isFirst;
    obj1[3] = isEditing;
    obj1[4] = canShowImages;
    obj1[5] = isSystemDM;
    obj1[6] = isInlineReplyPreview;
    const obj2 = {};
    const merged = Object.assign(options);
    obj2.renderThreadEmbeds = false;
    obj2.renderReactions = false;
    obj2.shouldDisableInteractiveComponents = true;
    obj1[7] = obj2;
    const merged1 = Object.assign(createMessageContent(obj1));
    obj.id = message.id;
    return obj;
  } else if (tmp2(tmp3[40])(message)) {
    if (message.type === constants.THREAD_CREATED) {
      obj3 = { threadEmbed: null };
      obj3[0] = createThreadEmbed(message, roleStyle, isInlineReplyPreview, channel1, options, tmp6);
      tmp13Result = tmp13(tmp3[41]);
      const obj4 = { message: null, theme: null, reactions: null, roleStyle: null };
      obj4[0] = message;
      obj4[1] = forcedTheme;
      obj4[2] = items;
      obj4[3] = roleStyle;
      const merged2 = Object.assign(tmp13Result.createSystemMessageContent(obj4));
      let systemMessageContent = obj3;
    } else {
      const obj5 = { message: null, theme: null, reactions: null, roleStyle: null, isForumPost: null };
      obj5[0] = message;
      obj5[1] = forcedTheme;
      obj5[2] = items;
      obj5[3] = roleStyle;
      let isForumPostResult;
      if (channel != null) {
        isForumPostResult = channel.isForumPost();
      }
      obj5[4] = isForumPostResult;
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
      const content = parseMessageMarkupResult.content;
      let tmp33 = restrictedPreview;
      ({ hasSpoilerEmbeds, hasBailedAst } = parseMessageMarkupResult);
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
        tmp7 = !hasBailedAst;
      }
      if (tmp7) {
        tmp7 = !restrictedPreview;
      }
      interaction = setting.getInteraction(message);
      let tmp40;
      if (tmp7) {
        const obj6 = { embeds: null, channelId: null, gifAutoPlay: null, hasSpoilerEmbeds: null, ignoreEmbedDescriptionCache: null, shouldInlineEmbedMedia: null, colors: null, showListsAndHeaders: null, showMaskedLinks: null, themedBackgroundColor: null, enabledContentHarmTypeFlags: null, shouldAgeVerify: null, authorIsBot: null, showContentInventoryEntryFallbackEmbed: null, transformComponents: null };
        obj6[0] = message2.embeds;
        obj6[1] = message.channel_id;
        obj6[2] = gifAutoPlay;
        obj6[3] = hasSpoilerEmbeds;
        obj6[4] = ignoreEmbedDescriptionCache;
        obj6[5] = tmp9;
        obj6[6] = tmp4;
        obj6[7] = result;
        obj6[8] = result;
        obj6[9] = tmp4.embedBackgroundColor;
        obj6[10] = enabledHarmTypesForMessage;
        obj6[11] = result1;
        obj6[12] = message.author.bot;
        obj6[13] = message.showContentInventoryEntryFallbackEmbed;
        obj6[14] = function transformComponents(arg0) {
          return gifAutoPlay(shouldObscureSpoiler[49])({ message, guildId, interaction, shouldDisableInteractiveComponents, shouldShowMedia: closure_5, shouldObscureSpoiler, enabledContentHarmTypeFlags: enabledHarmTypesForMessage, shouldAgeVerify: result1, shouldShowMosaicMediaDescriptions: setting, shouldAutoPlayGifs: gifAutoPlay, colors: closure_4 }, arg0);
        };
        tmp40 = tmp2(tmp3[48])(obj6);
      }
      const obj7 = { message: null, isSystemDM: null, channel: null, colors: null };
      obj7[0] = message;
      obj7[1] = isSystemDM;
      obj7[2] = channel;
      obj7[3] = tmp4;
      const tmp13Result5 = tmp13(tmp3[46]);
      let obj13 = uploaderFileForMessageId;
      ({ tagText, tagAccessibilityLabel, tagVerified, tagTextColor, tagBackgroundColor, tagType, tagIconUrl, opTagText, opTagTextColor, opTagBackgroundColor } = tmp2(tmp3[50])(obj7));
      uploaderFileForMessageId = uploaderFileForMessageId.getUploaderFileForMessageId(message.id);
      const tmp41 = tmp2(tmp3[50])(obj7);
      let tmp46 = tmp40;
      if (!tmp45) {
        let items1 = tmp40;
        if (tmp40 == null) {
          items1 = [];
        }
        const obj8 = { uploaderFile: null, useAttachmentUploadPreview: null, colors: null };
        obj8[0] = uploaderFileForMessageId;
        obj8[1] = tmp43;
        obj8[2] = tmp4;
        items1.push(tmp2(tmp3[51])(obj8));
        tmp46 = items1;
      }
      const message1 = result1.getMessage(message.id);
      let tmp50 = tmp46;
      if (null != message1) {
        let items2 = tmp46;
        if (tmp46 == null) {
          items2 = [];
        }
        const obj9 = { errorMessage: null, colors: null };
        obj9[0] = message1.errorMessage;
        obj9[1] = tmp4;
        items2.push(tmp13(tmp3[51]).createAutomodBlockedMessageEmbed(obj9));
        tmp50 = items2;
        const tmp13Result6 = tmp13(tmp3[51]);
      }
      tmp45 = message.state !== constants2.SEND_FAILED || message.isCommandType();
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
              tmp2Result = tmp2(tmp3[54]);
              const obj10 = { id: null, icon: null, bot: null };
              obj10[0] = message.application.id;
              obj10[1] = message.application.icon;
              obj10[2] = message.application.bot;
              let applicationIconSource = tmp2Result.getApplicationIconSource(obj10);
            }
            const ensureAvatarSourceResult = tmp13Result8.ensureAvatarSource(applicationIconSource);
            if (null == guildMemberAvatarDecoration) {
              guildMemberAvatarDecoration = author.avatarDecoration;
            }
            const obj11 = { avatarDecoration: null, size: null };
            obj11[0] = guildMemberAvatarDecoration;
            const tmp13Result9 = tmp13(tmp3[54]);
            obj11[1] = tmp13(tmp3[55]).getDecorationSizeForAvatarSize(tmp13(tmp3[56]).AvatarSizes.NORMAL);
            const avatarDecorationURL = tmp13Result9.getAvatarDecorationURL(obj11);
            if (null != iconRoleId) {
              if (null != guildId) {
                const obj12 = { guildId: null, roleId: null, size: 18 };
                obj12[0] = guildId;
                obj12[1] = iconRoleId;
                const roleIcon = tmp13(tmp3[57]).getRoleIcon(obj12);
                const tmp13Result11 = tmp13(tmp3[57]);
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
              obj13 = { appName: null };
              obj13[0] = nick;
              stringResult = intl2.formatToPlainString(tmp13(tmp3[29]).t["u4A+xK"], obj13);
            }
            if (message.type === constants.REPLY) {
              if (renderReplies) {
                const messageByReference1 = store2.getMessageByReference(message.messageReference);
                const state = messageByReference1.state;
                if (ReferencedMessageState.LOADED === state) {
                  const message3 = messageByReference1.message;
                  const result2 = tmp13(tmp3[38]).maybeCreateSingleForwardForMessage(message3);
                  if (blockedForMessage.isBlockedForMessage(message3)) {
                    const obj14 = { state: null, content: null };
                    obj14[0] = ReferencedMessageRowState.SYSTEM;
                    const intl12 = tmp13(tmp3[29]).intl;
                    obj14[1] = intl12.string(tmp13(tmp3[29]).t.XAkOo2);
                    let tmp60 = obj14;
                  } else if (blockedForMessage.isIgnoredForMessage(message3)) {
                    const obj15 = { state: null, content: null };
                    obj15[0] = ReferencedMessageRowState.SYSTEM;
                    const intl11 = tmp13(tmp3[29]).intl;
                    obj15[1] = intl11.string(tmp13(tmp3[29]).t["G7p6v/"]);
                    tmp60 = obj15;
                  } else {
                    const obj16 = { message: null, messageForward: null, roleStyle: null, isFirst: true, isEditing: false, canShowImages: true, isSystemDM: false, isInlineReplyPreview: true, options: null };
                    obj16[0] = message3;
                    obj16[1] = result2;
                    obj16[2] = roleStyle;
                    const obj17 = {};
                    const merged3 = Object.assign(options);
                    obj17.renderReplies = false;
                    obj16[8] = obj17;
                    const tmp72 = createMessageContent(obj16);
                    if (null == tmp72) {
                      const obj18 = { state: null, content: null };
                      obj18[0] = ReferencedMessageRowState.SYSTEM;
                      const intl10 = tmp13(tmp3[29]).intl;
                      obj18[1] = intl10.string(tmp13(tmp3[29]).t["1i+hMi"]);
                      tmp60 = obj18;
                    } else {
                      if ("username" in tmp72) {
                        const messageAuthor1 = tmp13(tmp3[52]).getMessageAuthor(message3);
                        ({ nick: nick2, colorString: colorString2 } = messageAuthor1);
                        if (nick2 == null) {
                          nick2 = message3.author.username;
                        }
                        tmp72.username = nick2;
                        if (tmp21) {
                          let colorString3 = tmp72.colorString;
                        } else {
                          colorString3 = shouldDisableInteractiveComponents(colorString2);
                          if (colorString3 == null) {
                            colorString3 = tmp72.colorString;
                          }
                        }
                        tmp72.colorString = colorString3;
                        if (tmp2(tmp3[58])(message, message3)) {
                          tmp72.username = `@${tmp72.username}`;
                        }
                        const tmp13Result14 = tmp13(tmp3[52]);
                      }
                      const _Array = Array;
                      let isArray = Array.isArray(tmp72.content);
                      if (isArray) {
                        isArray = 0 === tmp72.content.length;
                      }
                      if (isArray) {
                        tmp72.content = undefined;
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
                        const tmp13Result15 = tmp13(tmp3[33]);
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
                        if (tmp13Result16.hasFlag(message2.flags, constants3.IS_VOICE_MESSAGE)) {
                          const intl7 = tmp13(tmp3[29]).intl;
                          stringResult1 = intl7.string(tmp13(tmp3[29]).t["6bhHrc"]);
                        } else if (message2.type === constants.POLL_RESULT) {
                          stringResult1 = tmp13(tmp3[35]).getPollResultsReplyPreviewMobile(message2);
                          const tmp13Result17 = tmp13(tmp3[35]);
                        } else {
                          if (tmp13Result18.hasFlag(message2.flags, constants3.IS_COMPONENTS_V2)) {
                            const intl6 = tmp13(tmp3[29]).intl;
                            stringResult1 = intl6.string(tmp13(tmp3[29]).t.Xxm5i3);
                          } else if ("" === message2.content) {
                            const intl5 = tmp13(tmp3[29]).intl;
                            stringResult1 = intl5.string(tmp13(tmp3[29]).t.JAKsM8);
                          } else {
                            stringResult1 = null;
                          }
                          tmp13Result18 = tmp13(tmp3[34]);
                        }
                        tmp13Result16 = tmp13(tmp3[34]);
                      }
                      if (message3.type === constants.POLL_RESULT) {
                        tmp72.content = stringResult1;
                      }
                      const obj19 = { state: null, message: null };
                      obj19[0] = ReferencedMessageRowState.LOADED;
                      obj19[1] = tmp72;
                      tmp60 = obj19;
                      if (null != stringResult1) {
                        obj19.systemContent = stringResult1;
                        tmp60 = obj19;
                      }
                    }
                  }
                  const tmp13Result13 = tmp13(tmp3[38]);
                } else if (ReferencedMessageState.NOT_LOADED === state) {
                  const obj20 = { state: null, content: null };
                  obj20[0] = ReferencedMessageRowState.SYSTEM;
                  const intl4 = tmp13(tmp3[29]).intl;
                  obj20[1] = intl4.string(tmp13(tmp3[29]).t["1i+hMi"]);
                  tmp60 = obj20;
                } else if (ReferencedMessageState.DELETED === state) {
                  const obj21 = { state: null, content: null };
                  obj21[0] = ReferencedMessageRowState.SYSTEM;
                  const intl3 = tmp13(tmp3[29]).intl;
                  obj21[1] = intl3.string(tmp13(tmp3[29]).t.mE3KJN);
                  tmp60 = obj21;
                } else {
                  tmp13(tmp3[59]).assertNever(messageByReference1);
                  const tmp13Result19 = tmp13(tmp3[59]);
                }
              }
            }
            if (renderThreadEmbeds) {
              const tmp83 = createThreadEmbed(message, roleStyle, isInlineReplyPreview, channel1, options, tmp6);
            }
            const tmp13Result12 = tmp13(tmp3[52]);
            let member = null;
            const interactionStatus = tmp13(tmp3[60]).createInteractionStatus(message, interaction);
            if (null != guildId) {
              member = member.getMember(guildId, author.id);
            }
            const tmp13Result20 = tmp13(tmp3[60]);
            const useReducedMotion = closure_4.useReducedMotion;
            let parent_id;
            const result3 = tmp13(tmp3[61]).isMemberCommunicationDisabled(member);
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
            const tmp13Result21 = tmp13(tmp3[61]);
            const obj22 = { guildMember: null, channel: null, onlyChannelConnectionRoles: true };
            obj22[0] = member;
            obj22[1] = channel2;
            const visibleConnectionsRole = tmp13(tmp3[62]).getVisibleConnectionsRole(obj22);
            let tmp101 = tmp43;
            if (tmp43) {
              tmp101 = 0 === message.attachments.length;
            }
            if (tmp101) {
              tmp101 = null != uploaderFileForMessageId;
            }
            if (tmp101) {
              const obj23 = { uploaderFile: null, isFailedMessage: null, shouldInlineAttachmentMedia: null };
              obj23[0] = uploaderFileForMessageId;
              obj23[1] = message.state === constants2.SEND_FAILED;
              obj23[2] = tmp10;
              let items3 = tmp2(tmp3[63])(obj23);
            } else {
              items3 = [];
              if (renderAttachments) {
                const obj24 = { attachments: null, uploadAttachments: null, shouldInlineAttachmentMedia: null, gifAutoPlay: null, viewImageDescriptions: null, useReducedMotion: null, shouldObscureSpoiler: null, themedBackgroundColor: null, enabledContentHarmTypeFlags: null, shouldAgeVerify: null, colors: null };
                obj24[0] = message2.attachments;
                obj24[1] = obj13.getUploadAttachments(message.nonce);
                obj24[2] = tmp10;
                obj24[3] = gifAutoPlay;
                obj24[4] = setting;
                obj24[5] = useReducedMotion;
                obj24[6] = shouldObscureSpoiler;
                obj24[7] = tmp4.embedBackgroundColor;
                obj24[8] = enabledHarmTypesForMessage;
                obj24[9] = result1;
                obj24[10] = tmp4;
                items3 = tmp2(tmp3[64])(obj24);
                const tmp2Result1 = tmp2(tmp3[64]);
              }
            }
            if (tmp101) {
              if (message.state !== constants2.SEND_FAILED) {
                const intl13 = tmp13(tmp3[29]).intl;
                let stringResult2 = intl13.string(tmp13(tmp3[29]).t["yXY+5J"]);
              }
              if (tmp101) {
                if (message.state !== constants2.SEND_FAILED) {
                  const intl14 = tmp13(tmp3[29]).intl;
                  let stringResult3 = intl14.string(tmp13(tmp3[29]).t["yXY+5J"]);
                }
                let stringResult4 = stringResult;
                id = id.getId();
                if (message.isUnsupported) {
                  const intl15 = tmp13(tmp3[29]).intl;
                  stringResult4 = intl15.string(tmp13(tmp3[29]).t.sWi5EU);
                }
                const isPollResult = message.isPoll();
                let tmp109 = !isPollResult;
                if (isPollResult) {
                  let tmp110 = !isInlineReplyPreview;
                  if (!isInlineReplyPreview) {
                    tmp110 = renderPolls;
                  }
                  tmp109 = tmp110;
                }
                if (!tmp109) {
                  let tmp111 = null != stringResult;
                  if (tmp111) {
                    tmp111 = "" !== stringResult;
                  }
                  tmp109 = tmp111;
                }
                if (!tmp109) {
                  stringResult4 = tmp13(tmp3[35]).getPollReplyPreview(message);
                  const tmp13Result23 = tmp13(tmp3[35]);
                }
                if (renderPolls) {
                  const obj25 = { theme: null, animateEmoji: null };
                  obj25[0] = forcedTheme;
                  obj25[1] = animateEmoji;
                  const tmp112 = tmp2(tmp3[66])(message, undefined, obj25);
                }
                if (renderSharedClientTheme) {
                  const result4 = tmp13(tmp3[67]).formatSharedClientThemeData(message, ensureAvatarSourceResult, nick);
                  const tmp13Result24 = tmp13(tmp3[67]);
                }
                if (tmp13Result25.shouldDisplayGuildTag(author.id, tmp114)) {
                  const userPrimaryGuild = tmp13(tmp3[68]).getUserPrimaryGuild(author.primaryGuild);
                  let guildTagBadgeUrl;
                  ({ guildId, tag } = userPrimaryGuild);
                  if (null != userPrimaryGuild.guildId) {
                    guildTagBadgeUrl = tmp13(tmp3[68]).getGuildTagBadgeUrl(userPrimaryGuild.guildId, userPrimaryGuild.badge, GuildTagBadgeSize.SIZE_12);
                    const tmp13Result27 = tmp13(tmp3[68]);
                  }
                  const tmp115 = guildTagBadgeUrl;
                  const tmp117 = guildId;
                  const tmp13Result26 = tmp13(tmp3[68]);
                }
                let linkedLobby;
                if (channel != null) {
                  linkedLobby = channel.linkedLobby;
                }
                if (null != linkedLobby) {
                  if (null != message.additionalName) {
                    if ("" !== message.additionalName) {
                      application = store.getApplication(linkedLobby.application_id);
                      let icon1;
                      if (application != null) {
                        icon1 = application.icon;
                      }
                      let applicationIconURL;
                      if (null != icon1) {
                        ({ id: obj61[0], icon: obj61[1] } = application);
                        applicationIconURL = tmp2(tmp3[54]).getApplicationIconURL({ id: null, icon: null, size: 16 });
                        const tmp2Result2 = tmp2(tmp3[54]);
                      }
                      const additionalName = message.additionalName;
                      const tmp122 = applicationIconURL;
                    }
                  }
                }
                tmp114 = guildId;
                tmp13Result25 = tmp13(tmp3[68]);
                let tmp127 = message2;
                if (message2 == null) {
                  tmp127 = message;
                }
                let str8 = message.applicationId;
                const tmp13Result28 = tmp13(tmp3[34]);
                if (str8 == null) {
                  str8 = "";
                }
                const application1 = store.getApplication(str8);
                let hasFlagResult1 = null != application1;
                if (hasFlagResult1) {
                  hasFlagResult1 = tmp13(tmp3[34]).hasFlag(message.flags, constants3.SENT_BY_SOCIAL_LAYER_INTEGRATION);
                  const tmp13Result29 = tmp13(tmp3[34]);
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
                  guild = guild.getGuild(guildId);
                  if (null != guild) {
                    if (tmp13Result30.isGuildOfficialMessagesEnabled(guild, "createMessageContent")) {
                      let officialMessageColor = guild.officialMessageColor;
                      if (officialMessageColor == null) {
                        officialMessageColor = closure_24;
                      }
                      const officialMessageStyle = tmp95.officialMessageStyle;
                      const result5 = tmp13(tmp3[69]).showGuildOfficialMessageGradient(officialMessageStyle);
                      let tmp138;
                      if (result5) {
                        tmp138 = officialMessageColor | closure_26;
                      }
                      const tmp13Result31 = tmp13(tmp3[69]);
                      let numResult;
                      if (tmp13Result32.showGuildOfficialMessageTextColor(officialMessageStyle)) {
                        const internal = tmp2(tmp3[70]).internal;
                        const semanticColor = internal.resolveSemanticColor(forcedTheme, tmp2(tmp3[70]).colors.BACKGROUND_BASE_LOWER);
                        let num5 = 1;
                        if (tmp95.desaturateUserColors) {
                          num5 = tmp95.saturation;
                        }
                        const tmp13Result33 = tmp13(tmp3[69]);
                        let num6 = 0;
                        if (result5) {
                          num6 = closure_25;
                        }
                        const accessibleGuildOfficialTextColor = tmp13Result33.getAccessibleGuildOfficialTextColor(officialMessageColor, semanticColor, num5, num6);
                        numResult = accessibleGuildOfficialTextColor.num();
                      }
                      const intl16 = tmp13(tmp3[29]).intl;
                      items4.push(intl16.string(tmp13(tmp3[29]).t.GzDTxY));
                      const tmp134 = tmp138;
                      tmp13Result32 = tmp13(tmp3[69]);
                    }
                    tmp13Result30 = tmp13(tmp3[69]);
                  }
                }
                let obj69 = message2;
                if (message2 == null) {
                  obj69 = message;
                }
                if (obj69.hasFlag(constants3.SUPPRESS_NOTIFICATIONS)) {
                  const intl17 = tmp13(tmp3[29]).intl;
                  items4.push(intl17.string(tmp13(tmp3[29]).t.t0MA8g));
                }
                if (items4.length > 0) {
                  const joined = items4.join(", ");
                }
                const hasFlagResult = tmp13(tmp3[34]).hasFlag(tmp127.flags, constants3.IS_VOICE_MESSAGE);
                const obj27 = { id: null, channelId: null, guildId: null, flags: null, type: null, nonce: null, state: null, reactions: null, referencedMessage: null, threadEmbed: null, forwardInfo: null, mentioned: null, edited: null, editedTimestamp: null, editedColor: null, textColor: null, officialMessageColor: null, linkColor: null, tagText: null, tagAccessibilityLabel: null, tagVerified: null, tagTextColor: null, tagBackgroundColor: null, tagType: null, tagIconUrl: null, opTagText: null, opTagTextColor: null, opTagBackgroundColor: null, stateAccessibilityLabel: null, constrainedWidth: null, gifAutoPlay: null, animateEmoji: null, username: null, avatarURL: null, avatarDecorationURL: null, authorId: null, usernameColor: null, roleColor: null, roleColors: null, shouldShowRoleDot: null, shouldShowRoleOnName: null, showLinkDecorations: null, colorString: null, roleIcon: null, connectionsRoleTag: null, timestamp: null, timestampTooltip: null, timestampColor: null, timestampAccessibilityLabel: null, content: null, isEditing: null, renderContentOnly: null, surveyIndication: null, ephemeralIndication: null, interactionStatus: null, executedCommand: null, components: null, feedbackColor: null, highlightColor: null, embeds: null, giftCodes: null, codedLinks: null, activityInstanceEmbed: null, activityRichPresenceInviteEmbed: null, useAttachmentGridLayout: null, useAttachmentUploadPreview: null, attachments: null, attachmentsOpacity: null, stickers: null, communicationDisabled: null, isFirstForumPostMessage: null, postActions: null, isCurrentUserMessageAuthor: null, usingGradientTheme: null, swipeToReplyIconUrl: null, swipeToEditIconUrl: null, postPreviewEmbeds: null, obscureLearnMoreLabel: null, safetyPolicyNoticeEmbed: null, pollData: null, sharedClientTheme: null, safetySystemNotificationEmbed: null, ctaButton: null, audioAttachmentBackgroundColor: null, accessibilityActions: null, clanTagGuildId: null, clanTag: null, clanBadgeUrl: null, lobbyAdditionalName: null, lobbyTagIconUrl: null, isFirst: null, gameApplicationId: null, isAnnouncementChannel: null, displayNameStyles: null, voiceChannelBadge: null };
                ({ id: obj71[0], channel_id: obj71[1] } = message);
                const voiceChannelBadge = tmp13(tmp3[71]).createVoiceChannelBadge(message.author.id, guildId);
                obj27[2] = guildId;
                let tmp152 = message2;
                if (message2 == null) {
                  tmp152 = message;
                }
                obj27[3] = tmp152.flags;
                obj27[4] = message.type;
                if (null != message.nonce) {
                  if (typeof message.nonce !== "string") {
                    const _String = String;
                    let nonce = String(message.nonce);
                  }
                  obj27[5] = nonce;
                  obj27[6] = message.state;
                  obj27[7] = items;
                  let tmp154;
                  if (!renderContentOnly) {
                    tmp154 = tmp60;
                  }
                  obj27[8] = tmp154;
                  obj27[9] = tmp83;
                  let forwardInfo;
                  if (null != messageForward) {
                    forwardInfo = messageForward.getForwardInfo();
                  }
                  obj27[10] = forwardInfo;
                  let mentioned = !ignoreMentioned;
                  if (!ignoreMentioned) {
                    mentioned = message.mentioned;
                  }
                  obj27[11] = mentioned;
                  let str12 = "";
                  if (message.isEdited()) {
                    str12 = "";
                    if (!renderContentOnly) {
                      const intl18 = tmp13(tmp3[29]).intl;
                      str12 = intl18.string(tmp13(tmp3[29]).t.C8sXIM);
                    }
                  }
                  obj27[12] = str12;
                  let dateFormatResult;
                  if (message.isEdited()) {
                    if (!renderContentOnly) {
                      if (null != message.editedTimestamp) {
                        dateFormatResult = tmp13(tmp3[65]).dateFormat(message.editedTimestamp, "LLLL");
                        const tmp13Result35 = tmp13(tmp3[65]);
                      }
                    }
                  }
                  obj27[13] = dateFormatResult;
                  obj27[14] = tmp4.editedColor;
                  if (message.isUnsupported) {
                    let textColor = tmp4.unsupportedColor;
                  } else if (null != tmp133) {
                    textColor = 4278190080 | tmp133;
                  } else {
                    textColor = tmp4.textColor;
                  }
                  obj27[15] = textColor;
                  obj27[16] = tmp134;
                  obj27[17] = tmp4.linkColor;
                  obj27[18] = tagText;
                  obj27[19] = tagAccessibilityLabel;
                  obj27[20] = tagVerified;
                  obj27[21] = tagTextColor;
                  obj27[22] = tagBackgroundColor;
                  obj27[23] = tagType;
                  obj27[24] = tagIconUrl;
                  obj27[25] = opTagText;
                  obj27[26] = opTagTextColor;
                  obj27[27] = opTagBackgroundColor;
                  obj27[28] = joined;
                  obj27[29] = constrainedWidth;
                  obj27[30] = gifAutoPlay;
                  obj27[31] = animateEmoji;
                  if (tmp21) {
                    nick = author.username;
                  }
                  obj27[32] = nick;
                  let uri;
                  if (!tmp21) {
                    uri = ensureAvatarSourceResult.uri;
                  }
                  obj27[33] = uri;
                  let tmp158 = null;
                  if (!tmp21) {
                    tmp158 = avatarDecorationURL;
                  }
                  obj27[34] = tmp158;
                  obj27[35] = author.id;
                  if (!tmp21) {
                    if ("username" === roleStyle) {
                      let defaultUsernameColor = shouldDisableInteractiveComponents(colorString);
                      if (defaultUsernameColor == null) {
                        defaultUsernameColor = tmp4.defaultUsernameColor;
                      }
                    }
                    obj27[36] = defaultUsernameColor;
                    let tmp161 = null;
                    if (!tmp21) {
                      let tmp162Result = shouldDisableInteractiveComponents(colorString);
                      if (tmp162Result == null) {
                        tmp162Result = null;
                      }
                      tmp161 = tmp162Result;
                    }
                    obj27[37] = tmp161;
                    let processColorStringsResult = null;
                    if (hasEnhancedRoleColors) {
                      processColorStringsResult = null;
                      if (!tmp21) {
                        processColorStringsResult = tmp13(tmp3[72]).processColorStrings(colorStrings);
                        const tmp13Result36 = tmp13(tmp3[72]);
                      }
                    }
                    obj27[38] = processColorStringsResult;
                    obj27[39] = "dot" === roleStyle;
                    obj27[40] = "username" === roleStyle;
                    obj27[41] = closure_4.alwaysShowLinkDecorations;
                    if (tmp21) {
                      let defaultUsernameColor2 = tmp4.defaultUsernameColor;
                    } else {
                      defaultUsernameColor2 = shouldDisableInteractiveComponents(colorString);
                      if (defaultUsernameColor2 == null) {
                        defaultUsernameColor2 = tmp4.defaultUsernameColor;
                      }
                    }
                    obj27[42] = defaultUsernameColor2;
                    let tmp167;
                    if (!tmp21) {
                      tmp167 = roleIcon;
                    }
                    obj27[43] = tmp167;
                    let connectionsRoleTag;
                    if (null != visibleConnectionsRole) {
                      connectionsRoleTag = tmp13(tmp3[73]).createConnectionsRoleTag(visibleConnectionsRole);
                      const tmp13Result37 = tmp13(tmp3[73]);
                    }
                    obj27[44] = connectionsRoleTag;
                    let tmp169;
                    if (!tmp21) {
                      tmp169 = stringResult2;
                    }
                    obj27[45] = tmp169;
                    let dateFormatResult1;
                    if (!tmp21) {
                      dateFormatResult1 = tmp13(tmp3[65]).dateFormat(message.timestamp, "LLLL");
                      const tmp13Result38 = tmp13(tmp3[65]);
                    }
                    obj27[46] = dateFormatResult1;
                    let timestampColor;
                    if (!tmp21) {
                      timestampColor = tmp4.timestampColor;
                    }
                    obj27[47] = timestampColor;
                    let tmp172;
                    if (!tmp21) {
                      tmp172 = stringResult3;
                    }
                    obj27[48] = tmp172;
                    obj27[49] = stringResult4;
                    obj27[50] = isEditing;
                    obj27[51] = renderContentOnly;
                    let surveyIndication;
                    if (undefined !== pushFeedbackType) {
                      surveyIndication = tmp13(tmp3[74]).createSurveyIndication(message, forcedTheme, pushFeedbackType);
                      const tmp13Result39 = tmp13(tmp3[74]);
                    }
                    obj27[52] = surveyIndication;
                    obj27[53] = tmp13(tmp3[75]).createEphemeralIndication(message);
                    obj27[54] = interactionStatus;
                    let executedCommand;
                    if (renderExecutedCommands) {
                      const tmp13Result41 = tmp13(tmp3[76]);
                      executedCommand = tmp13Result41.createExecutedCommand(message, channel, roleStyle, tmp6, tmp4.defaultUsernameColor);
                    }
                    obj27[55] = executedCommand;
                    let tmp180;
                    if (message2.components.length > 0) {
                      if (renderComponents) {
                        const obj28 = { message: null, guildId: null, interaction: null, shouldDisableInteractiveComponents: null, shouldShowMedia: null, shouldObscureSpoiler: null, enabledContentHarmTypeFlags: null, shouldAgeVerify: null, shouldShowMosaicMediaDescriptions: null, shouldAutoPlayGifs: null, colors: null };
                        obj28[0] = message;
                        obj28[1] = guildId;
                        obj28[2] = interaction;
                        obj28[3] = shouldDisableInteractiveComponents;
                        obj28[4] = tmp5;
                        obj28[5] = shouldObscureSpoiler;
                        obj28[6] = enabledHarmTypesForMessage;
                        obj28[7] = result1;
                        obj28[8] = setting;
                        obj28[9] = gifAutoPlay;
                        obj28[10] = tmp4;
                        tmp180 = tmp2(tmp3[49])(obj28, message2.components);
                      }
                    }
                    obj27[56] = tmp180;
                    let num9 = 0;
                    if (!renderContentOnly) {
                      num9 = tmp4.feedbackColor;
                    }
                    obj27[57] = num9;
                    let num10 = 0;
                    if (!renderContentOnly) {
                      num10 = tmp4.highlightColor;
                    }
                    obj27[58] = num10;
                    obj27[59] = tmp50;
                    if (renderGiftCode) {
                      let giftCodeEmbed = tmp13(tmp3[77]).createGiftCodeEmbed(message, forcedTheme);
                      const tmp13Result42 = tmp13(tmp3[77]);
                    } else {
                      giftCodeEmbed = [];
                    }
                    obj27[60] = giftCodeEmbed;
                    if (renderCodedLinks) {
                      const tmp13Result43 = tmp13(tmp3[78]);
                      let codedLinkEmbeds = tmp13Result43.createCodedLinkEmbeds(message, message2, channel, tmp6);
                    } else {
                      codedLinkEmbeds = [];
                    }
                    obj27[61] = codedLinkEmbeds;
                    let activityInstanceEmbed;
                    if (renderActivityInstanceEmbed) {
                      activityInstanceEmbed = tmp13(tmp3[79]).createActivityInstanceEmbed(message);
                      const tmp13Result44 = tmp13(tmp3[79]);
                    }
                    obj27[62] = activityInstanceEmbed;
                    let activityRichPresenceInviteEmbed;
                    if (renderActivityInviteEmbed) {
                      activityRichPresenceInviteEmbed = tmp13(tmp3[80]).createActivityRichPresenceInviteEmbed(message, channel);
                      const tmp13Result45 = tmp13(tmp3[80]);
                    }
                    obj27[63] = activityRichPresenceInviteEmbed;
                    if (tmp10) {
                      if (renderAttachments) {
                        renderAttachments = 0 !== message2.attachments.length || 0 !== message2.embeds.length;
                      }
                      if (!renderAttachments) {
                        renderAttachments = tmp43;
                      }
                      tmp10 = renderAttachments;
                    }
                    obj27[64] = tmp10;
                    obj27[65] = tmp43;
                    obj27[66] = items3;
                    let num12 = 1;
                    if (tmp43) {
                      num12 = 1;
                      if (message.state === constants2.SEND_FAILED) {
                        num12 = 0.2;
                      }
                    }
                    obj27[67] = num12;
                    if (restrictedPreview) {
                      let items5 = [];
                    } else {
                      const obj29 = { message: null, animateStickersSetting: null, isUserInteracting: null };
                      obj29[0] = message2;
                      const AnimateStickers = tmp13(tmp3[47]).AnimateStickers;
                      obj29[1] = AnimateStickers.getSetting();
                      obj29[2] = message.id === animatingStickerMessageId;
                      items5 = tmp2(tmp3[81])(obj29);
                      const tmp2Result3 = tmp2(tmp3[81]);
                    }
                    obj27[68] = items5;
                    if (renderCommunicationDisabled) {
                      renderCommunicationDisabled = result3;
                    }
                    obj27[69] = renderCommunicationDisabled;
                    let isForumPostResult1;
                    if (channel != null) {
                      isForumPostResult1 = channel.isForumPost();
                    }
                    obj27[70] = isForumPostResult1 && message.id === message.channel_id;
                    let isForumPostResult2;
                    if (channel != null) {
                      isForumPostResult2 = channel.isForumPost();
                    }
                    let tmp192;
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
                              const obj30 = { defaultReactionEmoji: null, customGuildEmoji: null };
                              obj30[0] = defaultReactionEmoji;
                              obj30[1] = usableCustomEmojiById;
                              defaultReaction = tmp13(tmp3[32]).createDefaultReaction(obj30);
                              const tmp13Result46 = tmp13(tmp3[32]);
                            }
                            const hasJoinedResult = closure_14.hasJoined(message.channel_id);
                            const shouldDisplayPromptResult = closure_11.shouldDisplayPrompt(channel.id);
                            const obj31 = { isFollowing: null, hasReactions: null, defaultReaction: null, showMediaPostSharePrompt: null };
                            obj31[0] = hasJoinedResult;
                            obj31[1] = 0 !== message.reactions.length;
                            obj31[2] = defaultReaction;
                            obj31[3] = shouldDisplayPromptResult;
                            forumPostActions = tmp13(tmp3[32]).createForumPostActions(obj31);
                            const tmp13Result47 = tmp13(tmp3[32]);
                          }
                        }
                        tmp192 = forumPostActions;
                      }
                    }
                    obj27[71] = tmp192;
                    obj27[72] = message.author.id === id;
                    obj27[73] = null != guildId.gradientPreset;
                    const tmp13Result40 = tmp13(tmp3[75]);
                    obj27[74] = tmp13(tmp3[30]).getAssetUriForEmbed(tmp2(tmp3[82]));
                    const tmp13Result48 = tmp13(tmp3[30]);
                    obj27[75] = tmp13(tmp3[30]).getAssetUriForEmbed(tmp2(tmp3[83]));
                    if (tmp7) {
                      let postPreviewEmbeds = tmp13(tmp3[84]).createPostPreviewEmbeds(message, roleStyle, useReducedMotion);
                      const tmp13Result50 = tmp13(tmp3[84]);
                    } else {
                      postPreviewEmbeds = [];
                    }
                    obj27[76] = postPreviewEmbeds;
                    const intl19 = tmp13(tmp3[29]).intl;
                    obj27[77] = intl19.string(tmp13(tmp3[29]).t["2aXnfa"]);
                    const tmp13Result49 = tmp13(tmp3[30]);
                    obj27[78] = tmp13(tmp3[85]).createSafetyPolicyNoticeEmbed(message);
                    obj27[79] = tmp112;
                    obj27[80] = result4;
                    const tmp13Result51 = tmp13(tmp3[85]);
                    obj27[81] = tmp13(tmp3[86]).createSafetySystemNotificationEmbed(message);
                    const tmp13Result52 = tmp13(tmp3[86]);
                    obj27[82] = tmp13(tmp3[87]).createCtaButton(message.id, message.channel_id, tmp4);
                    let embedBackgroundColor;
                    if (hasFlagResult) {
                      embedBackgroundColor = tmp4.embedBackgroundColor;
                    }
                    obj27[83] = embedBackgroundColor;
                    const tmp13Result53 = tmp13(tmp3[87]);
                    obj27[84] = tmp13(tmp3[88]).createMessageAccessibilityActions(message, channel);
                    obj27[85] = tmp117;
                    obj27[86] = tag;
                    obj27[87] = tmp115;
                    obj27[88] = additionalName;
                    obj27[89] = tmp122;
                    obj27[90] = isFirst;
                    obj27[91] = id;
                    let type;
                    if (channel != null) {
                      type = channel.type;
                    }
                    obj27[92] = type === constants4.GUILD_ANNOUNCEMENT;
                    const tmp13Result54 = tmp13(tmp3[88]);
                    obj27[93] = tmp13(tmp3[89]).createDisplayNameStylesMobile(message.author, member);
                    obj27[94] = voiceChannelBadge;
                    return obj27;
                  }
                  defaultUsernameColor = tmp4.defaultUsernameColor;
                }
                nonce = message.nonce;
                const tmp13Result34 = tmp13(tmp3[71]);
              }
              stringResult3 = tmp13(tmp3[65]).accessibilityLabelCalendarFormat(message.timestamp);
              const tmp13Result56 = tmp13(tmp3[65]);
            }
            const tmp13Result22 = tmp13(tmp3[62]);
            stringResult2 = tmp13(tmp3[65]).calendarFormat(message.timestamp, true, timestampHourCycle);
            const tmp13Result57 = tmp13(tmp3[65]);
          }
        }
      }
      if (null != guildMemberAvatar) {
        if (null != guildId) {
          const obj32 = { userId: null, avatar: null, guildId: null };
          obj32[0] = author.id;
          obj32[1] = guildMemberAvatar;
          obj32[2] = guildId;
          applicationIconSource = tmp2(tmp3[54]).getGuildMemberAvatarSource(obj32, author);
          const tmp2Result4 = tmp2(tmp3[54]);
        }
      }
      applicationIconSource = author.getAvatarSource(undefined);
      tmp13Result8 = tmp13(tmp3[53]);
    }
    parseMessageMarkupResult = { content: "PX_16", hasSpoilerEmbeds: 2087, hasBailedAst: 2088 };
    const tmp13Result2 = tmp13(tmp3[42]);
  }
}
const processColor = get_ActivityIndicator.processColor;
const ReferencedMessageState = processMessage.ReferencedMessageState;
({ DEFAULT_GUILD_OFFICIAL_COLOR: closure_24, GUILD_OFFICIAL_HIGHLIGHT_ALPHA: closure_25, GUILD_OFFICIAL_HIGHLIGHT_ALPHA_COLOR: closure_26 } = MESSAGE_GROUP_SPACING);
const ReferencedMessageRowState = Changeset.ReferencedMessageRowState;
({ MessageTypes: closure_28, MessageStates: closure_29, MessageFlags: closure_30, ChannelTypes: closure_31 } = ME);
const GuildTagBadgeSize = items6.GuildTagBadgeSize;
let result = obj132.fileFinishedImporting("modules/messages/native/renderer/createMessageContent.tsx");

export default createMessageContent;