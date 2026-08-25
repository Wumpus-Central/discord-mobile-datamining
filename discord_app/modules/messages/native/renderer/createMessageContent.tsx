// === Module 8199: createThreadEmbed ===

// Module 8199 (createThreadEmbed)
import set from "set" /* 2 */;
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import computeChannelName from "computeChannelName" /* 4574 */;
import processMessage from "processMessage" /* 7201 */;
import Changeset from "Changeset" /* 8193 */;
import items6 from "items" /* 8203 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 8204 */;
import _formatMessageCountLabel from "_formatMessageCountLabel" /* 8205 */;
import closure_4 from "maybeApplyNoTextColorForLightCustomTheme" /* 4372 */;
import closure_5 from "addApplication" /* 4421 */;
import closure_6 from "isSyncedModeThemesEnabled" /* 4200 */;
import closure_7 from "getEmojiToGroupId" /* 5282 */;
import closure_8 from "handleMessageSendFailedAutomod" /* 8198 */;
import closure_9 from "deleteNonce" /* 8200 */;
import closure_10 from "initialize" /* 4026 */;
import closure_11 from "set" /* 8201 */;
import closure_12 from "processMessage" /* 7201 */;
import closure_14 from "storeThread" /* 4027 */;
import closure_15 from "updateState" /* 6029 */;
import closure_16 from "handleThemeChange" /* 1302 */;
import closure_17 from "fetchFingerprint" /* 1218 */;
import closure_18 from "ensureGuildLoaded" /* 1391 */;
import closure_19 from "trackCommunicationDisabled" /* 1992 */;
import closure_20 from "createGuildRecordFromRust" /* 1910 */;
import closure_21 from "markAllUserIdListsStale" /* 4034 */;
import closure_22 from "initialize" /* 7441 */;
import closure_23 from "mergeGuildAvatar" /* 1922 */;
import MESSAGE_GROUP_SPACING from "MESSAGE_GROUP_SPACING" /* 4373 */;
import ME from "ME" /* 676 */;

function createThreadEmbed(message, roleStyle, isInlineReplyPreview, channel1, options, arg5) {
  if (!isInlineReplyPreview) {
    if (message.hasFlag(constants3.HAS_THREAD)) {
      if (null != channel1) {
        let string2Result = dependencyMap;
        const channelName = computeChannelName.computeChannelName(channel1, closure_23, closure_21);
        const backgroundColor = getEmbedThemeColorsDefault(arg5).baseColors.backgroundColor;
        const obj11 = computeChannelName;
        const tmp19 = importDefault;
        const mostRecentMessage = store3.getMostRecentMessage(DISCORD_EPOCHDefault.castMessageIdAsChannelId(message.id));
        const obj12 = DISCORD_EPOCHDefault;
        const count = store3.getCount(DISCORD_EPOCHDefault.castMessageIdAsChannelId(message.id));
        const obj13 = DISCORD_EPOCHDefault;
        let intl5 = _formatMessageCountLabel.formatMobileMessageCountLabel(count, channel1.id);
        const obj14 = _formatMessageCountLabel;
        let string2 = _formatMessageCountLabel.formatMessageCountLabel(count, channel1.id);
        if (null != count) {
          if (count > 0) {
            let tmp15Result = tmp15(6053);
            if (tmp15Result.isChannelSpoilerGated(channel1)) {
              let obj = { title: null, messageCountLabel: null, messageCountAccessibilityLabel: null, messagePreviewString: null, archived: false, backgroundColor: null };
              obj[0] = channelName;
              obj[1] = intl5;
              obj[2] = string2;
              intl5 = tmp15(1236).intl;
              string2 = intl5.string;
              string2Result = string2(tmp15(1236).t["5uaI/7"]);
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
                const intl4 = tmp15(1236).intl;
                obj[3] = intl4.string(tmp15(1236).t.ZTo4HS);
                tmp15Result = tmp15(8206);
                obj[5] = tmp15Result.getAssetUriForEmbed(tmp19(8207));
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
                      const intl2 = tmp15(1236).intl;
                      const string = intl2.string;
                      let XAkOo2 = tmp15(1236).t;
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
                const intl3 = tmp15(1236).intl;
                obj5[3] = intl3.string(tmp15(1236).t.ZTo4HS);
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
        const intl = tmp15(1236).intl;
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
  let shouldDisableInteractiveComponents;
  closure_4 = undefined;
  let store;
  guildId = undefined;
  let enabledHarmTypesForMessage;
  let result1;
  let setting;
  let interaction;
  ({ ignoreMentioned, animateEmoji, gifAutoPlay } = options);
  ({ renderCommunicationDisabled, renderAttachments, renderPolls, forcedTheme, forceHideSimpleEmbedContent, shouldObscureSpoiler } = options);
  shouldDisableInteractiveComponents = options.shouldDisableInteractiveComponents;
  const restrictedPreview = options.restrictedPreview;
  ({ renderEmbeds, renderReactions, inlineEmbedMedia, inlineAttachmentMedia, constrainedWidth, animatingStickerMessageId, timestampHourCycle, renderCodedLinks, renderGiftCode, renderActivityInstanceEmbed, renderActivityInviteEmbed, renderComponents, renderThreadEmbeds, renderReplies, renderExecutedCommands, renderSharedClientTheme, renderForumPostActions, ignoreEmbedDescriptionCache, useAlternateEmbedColors } = options);
  if (forcedTheme == null) {
    let merged = theme;
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
  let obj4 = message(tmp3[37]);
  const hasEnhancedRoleColors = obj4.getHasEnhancedRoleColors(guildId, message.author.id);
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
    merged = createMessageContent;
    obj = { message: null, roleStyle: null, isFirst: null, isEditing: null, canShowImages: null, isSystemDM: null, isInlineReplyPreview: null, options: null };
    obj[0] = tmp16;
    obj[1] = roleStyle;
    obj[2] = isFirst;
    obj[3] = isEditing;
    obj[4] = canShowImages;
    obj[5] = isSystemDM;
    obj[6] = isInlineReplyPreview;
    obj = {};
    merged = obj;
    merged = options;
    merged = Object.assign(options);
    obj.renderThreadEmbeds = false;
    obj.renderReactions = false;
    obj.shouldDisableInteractiveComponents = true;
    obj[7] = obj;
    merged = obj;
    merged = Object.assign(createMessageContent(obj));
    obj.id = message.id;
    return obj;
  } else if (tmp2(tmp3[40])(message)) {
    if (message.type === tmp15.THREAD_CREATED) {
      obj1 = { threadEmbed: null };
      merged = createThreadEmbed;
      merged = message;
      merged = roleStyle;
      merged = isInlineReplyPreview;
      merged = channel1;
      merged = options;
      merged = forcedTheme;
      obj1[0] = createThreadEmbed(message, roleStyle, isInlineReplyPreview, channel1, options, tmp6);
      obj = tmp13(tmp3[41]);
      obj = { message: null, theme: null, reactions: null, roleStyle: null };
      obj[0] = message;
      obj[1] = forcedTheme;
      obj[2] = items;
      obj[3] = roleStyle;
      merged = obj1;
      merged = Object.assign(obj.createSystemMessageContent(obj));
      merged = obj1;
    } else {
      tmp13Result = tmp13(tmp3[41]);
      const obj2 = { message: null, theme: null, reactions: null, roleStyle: null, isForumPost: null };
      obj2[0] = message;
      obj2[1] = forcedTheme;
      obj2[2] = items;
      obj2[3] = roleStyle;
      merged = undefined;
      if (channel != null) {
        merged = channel.isForumPost();
      }
      obj2[4] = merged;
      merged = tmp13Result.createSystemMessageContent(obj2);
    }
    return merged;
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
        const tmp13Result2 = tmp13(tmp3[43]);
        if (!forceHideSimpleEmbedContent) {
          let tmp23 = tmp7;
          if (tmp7) {
            tmp23 = tmp9;
          }
          forceHideSimpleEmbedContent = tmp23;
        }
        const tmp24 = null != channel1 && message.isFirstMessageInForumPost(channel1);
        let parseMessageMarkupResult = tmp13Result2.parseMessageMarkup(message, message2, forceHideSimpleEmbedContent, isInlineReplyPreview, tmp24, result, result);
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
      const tmp13Result3 = tmp13(tmp3[45]);
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
        const obj3 = { embeds: null, channelId: null, gifAutoPlay: null, hasSpoilerEmbeds: null, ignoreEmbedDescriptionCache: null, shouldInlineEmbedMedia: null, colors: null, showListsAndHeaders: null, showMaskedLinks: null, themedBackgroundColor: null, enabledContentHarmTypeFlags: null, shouldAgeVerify: null, authorIsBot: null, showContentInventoryEntryFallbackEmbed: null, transformComponents: null };
        obj3[0] = message2.embeds;
        obj3[1] = message.channel_id;
        obj3[2] = gifAutoPlay;
        obj3[3] = hasSpoilerEmbeds;
        obj3[4] = ignoreEmbedDescriptionCache;
        obj3[5] = tmp9;
        obj3[6] = tmp4;
        obj3[7] = result;
        obj3[8] = result;
        obj3[9] = tmp4.embedBackgroundColor;
        obj3[10] = enabledHarmTypesForMessage;
        obj3[11] = result1;
        obj3[12] = message.author.bot;
        obj3[13] = message.showContentInventoryEntryFallbackEmbed;
        obj3[14] = function transformComponents(arg0) {
          return gifAutoPlay(shouldObscureSpoiler[49])({ message, guildId, interaction, shouldDisableInteractiveComponents, shouldShowMedia: closure_5, shouldObscureSpoiler, enabledContentHarmTypeFlags: enabledHarmTypesForMessage, shouldAgeVerify: result1, shouldShowMosaicMediaDescriptions: setting, shouldAutoPlayGifs: gifAutoPlay, colors: closure_4 }, arg0);
        };
        tmp40 = tmp2(tmp3[48])(obj3);
      }
      obj4 = { message: null, isSystemDM: null, channel: null, colors: null };
      obj4[0] = message;
      obj4[1] = isSystemDM;
      obj4[2] = channel;
      obj4[3] = tmp4;
      const tmp13Result4 = tmp13(tmp3[46]);
      let obj14 = uploaderFileForMessageId;
      ({ tagText, tagAccessibilityLabel, tagVerified, tagTextColor, tagBackgroundColor, tagType, tagIconUrl, opTagText, opTagTextColor, opTagBackgroundColor } = tmp2(tmp3[50])(obj4));
      uploaderFileForMessageId = uploaderFileForMessageId.getUploaderFileForMessageId(message.id);
      const tmp41 = tmp2(tmp3[50])(obj4);
      let tmp46 = tmp40;
      if (!tmp45) {
        let items1 = tmp40;
        if (tmp40 == null) {
          items1 = [];
        }
        const obj5 = { uploaderFile: null, useAttachmentUploadPreview: null, colors: null };
        obj5[0] = uploaderFileForMessageId;
        obj5[1] = tmp43;
        obj5[2] = tmp4;
        items1.push(tmp2(tmp3[51])(obj5));
        tmp46 = items1;
      }
      const message1 = result1.getMessage(message.id);
      let tmp50 = tmp46;
      if (null != message1) {
        let items2 = tmp46;
        if (tmp46 == null) {
          items2 = [];
        }
        const obj6 = { errorMessage: null, colors: null };
        obj6[0] = message1.errorMessage;
        obj6[1] = tmp4;
        items2.push(tmp13(tmp3[51]).createAutomodBlockedMessageEmbed(obj6));
        tmp50 = items2;
        const tmp13Result5 = tmp13(tmp3[51]);
      }
      tmp45 = message.state !== constants2.SEND_FAILED || message.isCommandType();
      const userAuthor = tmp13(tmp3[52]).getUserAuthor(message.author, channel);
      ({ guildMemberAvatar, guildMemberAvatarDecoration, iconRoleId } = userAuthor);
      const tmp13Result6 = tmp13(tmp3[52]);
      if (message.isInteractionPlaceholder()) {
        if (null == message.author.avatar) {
          if (null == guildMemberAvatar) {
            const application = message.application;
            let icon;
            if (application != null) {
              icon = application.icon;
            }
            if (null != icon) {
              tmp2Result = tmp2(tmp3[54]);
              const obj7 = { id: null, icon: null, bot: null };
              obj7[0] = message.application.id;
              obj7[1] = message.application.icon;
              obj7[2] = message.application.bot;
              let applicationIconSource = tmp2Result.getApplicationIconSource(obj7);
            }
            const ensureAvatarSourceResult = tmp13Result7.ensureAvatarSource(applicationIconSource);
            if (null == guildMemberAvatarDecoration) {
              guildMemberAvatarDecoration = author.avatarDecoration;
            }
            const obj8 = { avatarDecoration: null, size: null };
            obj8[0] = guildMemberAvatarDecoration;
            const tmp13Result8 = tmp13(tmp3[54]);
            obj8[1] = tmp13(tmp3[55]).getDecorationSizeForAvatarSize(tmp13(tmp3[56]).AvatarSizes.NORMAL);
            const avatarDecorationURL = tmp13Result8.getAvatarDecorationURL(obj8);
            if (null != iconRoleId) {
              if (null != guildId) {
                const obj9 = { guildId: null, roleId: null, size: 18 };
                obj9[0] = guildId;
                obj9[1] = iconRoleId;
                const roleIcon = tmp13(tmp3[57]).getRoleIcon(obj9);
                const tmp13Result10 = tmp13(tmp3[57]);
              }
            }
            if (message.hasFlag(constants3.SOURCE_MESSAGE_DELETED)) {
              const intl = tmp13(tmp3[29]).intl;
              stringResult = intl.string(tmp13(tmp3[29]).t.JOtgSw);
            }
            const tmp13Result9 = tmp13(tmp3[55]);
            const messageAuthor = tmp13(tmp3[52]).getMessageAuthor(message);
            ({ nick, colorString, colorStrings } = messageAuthor);
            if (message.type === tmp15.INTERACTION_PREMIUM_UPSELL) {
              const intl2 = tmp13(tmp3[29]).intl;
              const obj10 = { appName: null };
              obj10[0] = nick;
              stringResult = intl2.formatToPlainString(tmp13(tmp3[29]).t["u4A+xK"], obj10);
            }
            if (message.type === tmp15.REPLY) {
              if (renderReplies) {
                const messageByReference1 = store2.getMessageByReference(message.messageReference);
                const state = messageByReference1.state;
                if (ReferencedMessageState.LOADED === state) {
                  const message3 = messageByReference1.message;
                  const result2 = tmp13(tmp3[38]).maybeCreateSingleForwardForMessage(message3);
                  if (blockedForMessage.isBlockedForMessage(message3)) {
                    const obj11 = { state: null, content: null };
                    obj11[0] = ReferencedMessageRowState.SYSTEM;
                    const intl12 = tmp13(tmp3[29]).intl;
                    obj11[1] = intl12.string(tmp13(tmp3[29]).t.XAkOo2);
                    let tmp60 = obj11;
                  } else if (obj35.isIgnoredForMessage(message3)) {
                    const obj12 = { state: null, content: null };
                    obj12[0] = ReferencedMessageRowState.SYSTEM;
                    const intl11 = tmp13(tmp3[29]).intl;
                    obj12[1] = intl11.string(tmp13(tmp3[29]).t["G7p6v/"]);
                    tmp60 = obj12;
                  } else {
                    const obj13 = { message: null, messageForward: null, roleStyle: null, isFirst: true, isEditing: false, canShowImages: true, isSystemDM: false, isInlineReplyPreview: true, options: null };
                    obj13[0] = message3;
                    obj13[1] = result2;
                    obj13[2] = roleStyle;
                    obj14 = {};
                    const merged1 = Object.assign(options);
                    obj14.renderReplies = false;
                    obj13[8] = obj14;
                    const tmp72 = createMessageContent(obj13);
                    if (null == tmp72) {
                      const obj15 = { state: null, content: null };
                      obj15[0] = ReferencedMessageRowState.SYSTEM;
                      const intl10 = tmp13(tmp3[29]).intl;
                      obj15[1] = intl10.string(tmp13(tmp3[29]).t["1i+hMi"]);
                      tmp60 = obj15;
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
                          const tmp74 = shouldDisableInteractiveComponents;
                        }
                        tmp72.colorString = colorString3;
                        if (tmp2(tmp3[58])(message, message3)) {
                          tmp72.username = `@${tmp72.username}`;
                        }
                        const tmp13Result13 = tmp13(tmp3[52]);
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
                        const tmp13Result14 = tmp13(tmp3[33]);
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
                        if (tmp13Result15.hasFlag(message2.flags, tmp58.IS_VOICE_MESSAGE)) {
                          const intl7 = tmp13(tmp3[29]).intl;
                          stringResult1 = intl7.string(tmp13(tmp3[29]).t["6bhHrc"]);
                        } else if (message2.type === tmp15.POLL_RESULT) {
                          stringResult1 = tmp13(tmp3[35]).getPollResultsReplyPreviewMobile(message2);
                          const tmp13Result16 = tmp13(tmp3[35]);
                        } else {
                          obj = tmp13(tmp3[34]);
                          if (obj.hasFlag(message2.flags, tmp58.IS_COMPONENTS_V2)) {
                            const intl6 = tmp13(tmp3[29]).intl;
                            stringResult1 = intl6.string(tmp13(tmp3[29]).t.Xxm5i3);
                          } else if ("" === message2.content) {
                            const intl5 = tmp13(tmp3[29]).intl;
                            stringResult1 = intl5.string(tmp13(tmp3[29]).t.JAKsM8);
                          } else {
                            stringResult1 = null;
                          }
                        }
                        tmp13Result15 = tmp13(tmp3[34]);
                      }
                      if (message3.type === tmp15.POLL_RESULT) {
                        tmp72.content = stringResult1;
                      }
                      const obj16 = { state: null, message: null };
                      obj16[0] = ReferencedMessageRowState.LOADED;
                      obj16[1] = tmp72;
                      tmp60 = obj16;
                      if (null != stringResult1) {
                        obj16.systemContent = stringResult1;
                        tmp60 = obj16;
                      }
                    }
                  }
                  obj35 = blockedForMessage;
                  const tmp13Result12 = tmp13(tmp3[38]);
                } else if (tmp63.NOT_LOADED === state) {
                  const obj17 = { state: null, content: null };
                  obj17[0] = ReferencedMessageRowState.SYSTEM;
                  const intl4 = tmp13(tmp3[29]).intl;
                  obj17[1] = intl4.string(tmp13(tmp3[29]).t["1i+hMi"]);
                  tmp60 = obj17;
                } else if (tmp63.DELETED === state) {
                  const obj18 = { state: null, content: null };
                  obj18[0] = ReferencedMessageRowState.SYSTEM;
                  const intl3 = tmp13(tmp3[29]).intl;
                  obj18[1] = intl3.string(tmp13(tmp3[29]).t.mE3KJN);
                  tmp60 = obj18;
                } else {
                  tmp13(tmp3[59]).assertNever(messageByReference1);
                  const tmp13Result17 = tmp13(tmp3[59]);
                }
              }
            }
            if (renderThreadEmbeds) {
              const tmp83 = createThreadEmbed(message, roleStyle, isInlineReplyPreview, channel1, options, tmp6);
            }
            const tmp13Result11 = tmp13(tmp3[52]);
            let member = null;
            const interactionStatus = tmp13(tmp3[60]).createInteractionStatus(message, interaction);
            if (null != guildId) {
              member = member.getMember(guildId, author.id);
            }
            const tmp13Result18 = tmp13(tmp3[60]);
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
            const tmp13Result19 = tmp13(tmp3[61]);
            const obj19 = { guildMember: null, channel: null, onlyChannelConnectionRoles: true };
            obj19[0] = member;
            obj19[1] = channel2;
            merged = tmp13(tmp3[62]).getVisibleConnectionsRole(obj19);
            merged = tmp43;
            if (tmp43) {
              merged = 0 === message.attachments.length;
            }
            if (merged) {
              merged = null != uploaderFileForMessageId;
            }
            if (merged) {
              const obj20 = { uploaderFile: null, isFailedMessage: null, shouldInlineAttachmentMedia: null };
              obj20[0] = uploaderFileForMessageId;
              obj20[1] = message.state === tmp44.SEND_FAILED;
              obj20[2] = tmp10;
              let items3 = tmp2(tmp3[63])(obj20);
            } else {
              items3 = [];
              if (renderAttachments) {
                const obj21 = { attachments: null, uploadAttachments: null, shouldInlineAttachmentMedia: null, gifAutoPlay: null, viewImageDescriptions: null, useReducedMotion: null, shouldObscureSpoiler: null, themedBackgroundColor: null, enabledContentHarmTypeFlags: null, shouldAgeVerify: null, colors: null };
                obj21[0] = message2.attachments;
                merged = tmp2(tmp3[64]);
                obj21[1] = obj14.getUploadAttachments(message.nonce);
                obj21[2] = tmp10;
                obj21[3] = gifAutoPlay;
                obj21[4] = setting;
                obj21[5] = useReducedMotion;
                obj21[6] = shouldObscureSpoiler;
                obj21[7] = tmp4.embedBackgroundColor;
                obj21[8] = enabledHarmTypesForMessage;
                obj21[9] = result1;
                obj21[10] = tmp4;
                items3 = merged(obj21);
              }
            }
            if (merged) {
              if (message.state !== tmp44.SEND_FAILED) {
                const intl13 = tmp13(tmp3[29]).intl;
                merged = intl13.string(tmp13(tmp3[29]).t["yXY+5J"]);
              }
              if (merged) {
                if (message.state !== tmp44.SEND_FAILED) {
                  const intl14 = tmp13(tmp3[29]).intl;
                  merged = intl14.string(tmp13(tmp3[29]).t["yXY+5J"]);
                }
                merged = id;
                merged = stringResult;
                merged = id.getId();
                if (message.isUnsupported) {
                  const intl15 = tmp13(tmp3[29]).intl;
                  merged = intl15.string(tmp13(tmp3[29]).t.sWi5EU);
                }
                merged = message.isPoll();
                merged = !merged;
                if (merged) {
                  merged = !isInlineReplyPreview;
                  if (!isInlineReplyPreview) {
                    merged = renderPolls;
                  }
                }
                if (!merged) {
                  merged = null != stringResult;
                  if (merged) {
                    merged = "" !== stringResult;
                  }
                }
                if (!merged) {
                  merged = tmp13(tmp3[35]).getPollReplyPreview(message);
                  const tmp13Result21 = tmp13(tmp3[35]);
                }
                if (renderPolls) {
                  const obj22 = { theme: null, animateEmoji: null };
                  obj22[0] = forcedTheme;
                  obj22[1] = animateEmoji;
                  merged = tmp2(tmp3[66])(message, undefined, obj22);
                }
                if (renderSharedClientTheme) {
                  merged = tmp13(tmp3[67]).formatSharedClientThemeData(message, ensureAvatarSourceResult, nick);
                  const tmp13Result22 = tmp13(tmp3[67]);
                }
                merged = guildId;
                if (tmp13Result23.shouldDisplayGuildTag(author.id, merged)) {
                  merged = tmp13(tmp3[68]).getUserPrimaryGuild(author.primaryGuild);
                  merged = undefined;
                  ({ guildId, tag } = merged);
                  if (null != merged.guildId) {
                    merged = GuildTagBadgeSize;
                    merged = tmp13(tmp3[68]).getGuildTagBadgeUrl(merged.guildId, merged.badge, GuildTagBadgeSize.SIZE_12);
                    const tmp13Result25 = tmp13(tmp3[68]);
                  }
                  merged = tag;
                  merged = guildId;
                  const tmp13Result24 = tmp13(tmp3[68]);
                }
                merged = undefined;
                if (channel != null) {
                  merged = channel.linkedLobby;
                }
                if (null != merged) {
                  if (null != message.additionalName) {
                    if ("" !== message.additionalName) {
                      merged = store;
                      merged = store.getApplication(merged.application_id);
                      merged = undefined;
                      if (merged != null) {
                        merged = merged.icon;
                      }
                      merged = undefined;
                      if (null != merged) {
                        ({ id: obj61[0], icon: obj61[1] } = merged);
                        merged = tmp2(tmp3[54]).getApplicationIconURL({ id: null, icon: null, size: 16 });
                        const obj23 = { id: null, icon: null, size: 16 };
                        const tmp2Result1 = tmp2(tmp3[54]);
                      }
                      const additionalName = message.additionalName;
                    }
                  }
                }
                tmp13Result23 = tmp13(tmp3[68]);
                merged = message2;
                if (message2 == null) {
                  merged = message;
                }
                let str8 = message.applicationId;
                merged = tmp13(tmp3[34]).hasFlag(merged.flags, tmp58.IS_VOICE_MESSAGE);
                merged = store;
                if (str8 == null) {
                  str8 = "";
                }
                merged = store.getApplication(str8);
                merged = null != merged;
                if (merged) {
                  merged = tmp13(tmp3[34]).hasFlag(message.flags, tmp58.SENT_BY_SOCIAL_LAYER_INTEGRATION);
                  const tmp13Result27 = tmp13(tmp3[34]);
                }
                if (merged) {
                  id = merged.id;
                }
                merged = undefined;
                if (message2 != null) {
                  merged = message2.hasFlag(tmp58.IS_GUILD_OFFICIAL);
                }
                const items4 = [];
                if (merged) {
                  merged = guild;
                  merged = guild.getGuild(guildId);
                  if (null != merged) {
                    if (tmp13Result28.isGuildOfficialMessagesEnabled(merged, "createMessageContent")) {
                      let officialMessageColor = merged.officialMessageColor;
                      if (officialMessageColor == null) {
                        officialMessageColor = closure_24;
                      }
                      const officialMessageStyle = tmp95.officialMessageStyle;
                      merged = tmp13(tmp3[69]).showGuildOfficialMessageGradient(officialMessageStyle);
                      merged = undefined;
                      if (merged) {
                        merged = closure_26;
                        merged = officialMessageColor | closure_26;
                      }
                      const tmp13Result29 = tmp13(tmp3[69]);
                      merged = undefined;
                      if (tmp13Result30.showGuildOfficialMessageTextColor(officialMessageStyle)) {
                        const internal = tmp2(tmp3[70]).internal;
                        merged = internal.resolveSemanticColor(forcedTheme, tmp2(tmp3[70]).colors.BACKGROUND_BASE_LOWER);
                        let num5 = 1;
                        if (tmp95.desaturateUserColors) {
                          num5 = tmp95.saturation;
                        }
                        const tmp13Result31 = tmp13(tmp3[69]);
                        let num6 = 0;
                        if (merged) {
                          num6 = closure_25;
                        }
                        merged = tmp13Result31;
                        merged = officialMessageColor;
                        merged = num5;
                        merged = num6;
                        const accessibleGuildOfficialTextColor = tmp13Result31.getAccessibleGuildOfficialTextColor(officialMessageColor, merged, num5, num6);
                        merged = accessibleGuildOfficialTextColor.num();
                      }
                      const intl16 = tmp13(tmp3[29]).intl;
                      merged = items4.push(intl16.string(tmp13(tmp3[29]).t.GzDTxY));
                      tmp13Result30 = tmp13(tmp3[69]);
                    }
                    tmp13Result28 = tmp13(tmp3[69]);
                  }
                }
                let obj69 = message2;
                if (message2 == null) {
                  obj69 = message;
                }
                if (obj69.hasFlag(tmp58.SUPPRESS_NOTIFICATIONS)) {
                  const intl17 = tmp13(tmp3[29]).intl;
                  merged = items4.push(intl17.string(tmp13(tmp3[29]).t.t0MA8g));
                }
                if (items4.length > 0) {
                  merged = items4.join(", ");
                }
                const tmp13Result26 = tmp13(tmp3[34]);
                const obj24 = { id: null, channelId: null, guildId: null, flags: null, type: null, nonce: null, state: null, reactions: null, referencedMessage: null, threadEmbed: null, forwardInfo: null, mentioned: null, edited: null, editedTimestamp: null, editedColor: null, textColor: null, officialMessageColor: null, linkColor: null, tagText: null, tagAccessibilityLabel: null, tagVerified: null, tagTextColor: null, tagBackgroundColor: null, tagType: null, tagIconUrl: null, opTagText: null, opTagTextColor: null, opTagBackgroundColor: null, stateAccessibilityLabel: null, constrainedWidth: null, gifAutoPlay: null, animateEmoji: null, username: null, avatarURL: null, avatarDecorationURL: null, authorId: null, usernameColor: null, roleColor: null, roleColors: null, shouldShowRoleDot: null, shouldShowRoleOnName: null, showLinkDecorations: null, colorString: null, roleIcon: null, connectionsRoleTag: null, timestamp: null, timestampTooltip: null, timestampColor: null, timestampAccessibilityLabel: null, content: null, isEditing: null, renderContentOnly: null, surveyIndication: null, ephemeralIndication: null, interactionStatus: null, executedCommand: null, components: null, feedbackColor: null, highlightColor: null, embeds: null, giftCodes: null, codedLinks: null, activityInstanceEmbed: null, activityRichPresenceInviteEmbed: null, useAttachmentGridLayout: null, useAttachmentUploadPreview: null, attachments: null, attachmentsOpacity: null, stickers: null, communicationDisabled: null, isFirstForumPostMessage: null, postActions: null, isCurrentUserMessageAuthor: null, usingGradientTheme: null, swipeToReplyIconUrl: null, swipeToEditIconUrl: null, postPreviewEmbeds: null, obscureLearnMoreLabel: null, safetyPolicyNoticeEmbed: null, pollData: null, sharedClientTheme: null, safetySystemNotificationEmbed: null };
                ({ id: obj71[0], channel_id: obj71[1] } = message);
                merged = guildId;
                merged = tmp13(tmp3[71]).createVoiceChannelBadge(message.author.id, guildId);
                obj24[2] = merged;
                merged = message2;
                if (message2 == null) {
                  merged = message;
                }
                obj24[3] = merged.flags;
                obj24[4] = message.type;
                if (null != message.nonce) {
                  if (typeof message.nonce !== "string") {
                    merged = globalThis;
                    const _String = String;
                    let nonce = String(message.nonce);
                  }
                  obj24[5] = nonce;
                  obj24[6] = message.state;
                  obj24[7] = items;
                  merged = undefined;
                  if (!renderContentOnly) {
                    merged = tmp60;
                  }
                  obj24[8] = merged;
                  obj24[9] = tmp83;
                  merged = undefined;
                  if (null != messageForward) {
                    merged = messageForward.getForwardInfo();
                  }
                  obj24[10] = merged;
                  let mentioned = !ignoreMentioned;
                  if (!ignoreMentioned) {
                    mentioned = message.mentioned;
                  }
                  obj24[11] = mentioned;
                  let str12 = "";
                  if (message.isEdited()) {
                    str12 = "";
                    if (!renderContentOnly) {
                      const intl18 = tmp13(tmp3[29]).intl;
                      str12 = intl18.string(tmp13(tmp3[29]).t.C8sXIM);
                    }
                  }
                  obj24[12] = str12;
                  merged = undefined;
                  if (message.isEdited()) {
                    if (!renderContentOnly) {
                      if (null != message.editedTimestamp) {
                        merged = tmp13(tmp3[65]).dateFormat(message.editedTimestamp, "LLLL");
                        const tmp13Result33 = tmp13(tmp3[65]);
                      }
                    }
                  }
                  obj24[13] = merged;
                  obj24[14] = tmp4.editedColor;
                  if (message.isUnsupported) {
                    let textColor = tmp4.unsupportedColor;
                  } else if (null != merged) {
                    textColor = 4278190080 | merged;
                  } else {
                    textColor = tmp4.textColor;
                  }
                  obj24[15] = textColor;
                  obj24[16] = merged;
                  obj24[17] = tmp4.linkColor;
                  obj24[18] = tagText;
                  obj24[19] = tagAccessibilityLabel;
                  obj24[20] = tagVerified;
                  obj24[21] = tagTextColor;
                  obj24[22] = tagBackgroundColor;
                  obj24[23] = tagType;
                  obj24[24] = tagIconUrl;
                  obj24[25] = opTagText;
                  obj24[26] = opTagTextColor;
                  obj24[27] = opTagBackgroundColor;
                  obj24[28] = merged;
                  obj24[29] = constrainedWidth;
                  obj24[30] = gifAutoPlay;
                  obj24[31] = animateEmoji;
                  if (tmp21) {
                    nick = author.username;
                  }
                  obj24[32] = nick;
                  merged = undefined;
                  if (!tmp21) {
                    merged = ensureAvatarSourceResult.uri;
                  }
                  obj24[33] = merged;
                  merged = null;
                  if (!tmp21) {
                    merged = avatarDecorationURL;
                  }
                  obj24[34] = merged;
                  obj24[35] = author.id;
                  if (!tmp21) {
                    if ("username" === roleStyle) {
                      merged = colorString;
                      merged = shouldDisableInteractiveComponents;
                      let defaultUsernameColor = merged(merged);
                      if (defaultUsernameColor == null) {
                        defaultUsernameColor = tmp4.defaultUsernameColor;
                      }
                    }
                    obj24[36] = defaultUsernameColor;
                    merged = null;
                    if (!tmp21) {
                      merged = colorString;
                      merged = shouldDisableInteractiveComponents;
                      merged = merged(merged);
                      if (merged == null) {
                        merged = null;
                      }
                    }
                    obj24[37] = merged;
                    merged = null;
                    if (hasEnhancedRoleColors) {
                      merged = null;
                      if (!tmp21) {
                        merged = tmp13(tmp3[72]).processColorStrings(colorStrings);
                        const tmp13Result34 = tmp13(tmp3[72]);
                      }
                    }
                    obj24[38] = merged;
                    obj24[39] = "dot" === roleStyle;
                    obj24[40] = "username" === roleStyle;
                    obj24[41] = closure_4.alwaysShowLinkDecorations;
                    if (tmp21) {
                      let defaultUsernameColor2 = tmp4.defaultUsernameColor;
                    } else {
                      merged = shouldDisableInteractiveComponents;
                      defaultUsernameColor2 = merged(colorString);
                      if (defaultUsernameColor2 == null) {
                        defaultUsernameColor2 = tmp4.defaultUsernameColor;
                      }
                    }
                    obj24[42] = defaultUsernameColor2;
                    merged = undefined;
                    if (!tmp21) {
                      merged = roleIcon;
                    }
                    obj24[43] = merged;
                    merged = undefined;
                    if (null != merged) {
                      merged = tmp13(tmp3[73]).createConnectionsRoleTag(merged);
                      const tmp13Result35 = tmp13(tmp3[73]);
                    }
                    obj24[44] = merged;
                    merged = undefined;
                    obj24[45] = merged;
                    merged = undefined;
                    if (!tmp21) {
                      merged = tmp13(tmp3[65]).dateFormat(message.timestamp, "LLLL");
                      const tmp13Result36 = tmp13(tmp3[65]);
                    }
                    obj24[46] = merged;
                    merged = undefined;
                    if (!tmp21) {
                      merged = tmp4.timestampColor;
                    }
                    obj24[47] = merged;
                    merged = undefined;
                    obj24[48] = merged;
                    obj24[49] = merged;
                    obj24[50] = isEditing;
                    obj24[51] = renderContentOnly;
                    merged = undefined;
                    if (undefined !== pushFeedbackType) {
                      merged = tmp13(tmp3[74]).createSurveyIndication(message, forcedTheme, pushFeedbackType);
                      const tmp13Result37 = tmp13(tmp3[74]);
                    }
                    obj24[52] = merged;
                    obj24[53] = tmp13(tmp3[75]).createEphemeralIndication(message);
                    obj24[54] = interactionStatus;
                    merged = undefined;
                    if (renderExecutedCommands) {
                      const tmp13Result39 = tmp13(tmp3[76]);
                      merged = tmp13Result39;
                      merged = message;
                      merged = channel;
                      merged = roleStyle;
                      merged = forcedTheme;
                      merged = tmp13Result39.createExecutedCommand(message, channel, roleStyle, tmp6, tmp4.defaultUsernameColor);
                    }
                    obj24[55] = merged;
                    merged = undefined;
                    if (message2.components.length > 0) {
                      if (renderComponents) {
                        const obj25 = { message: null, guildId: null, interaction: null, shouldDisableInteractiveComponents: null, shouldShowMedia: null, shouldObscureSpoiler: null, enabledContentHarmTypeFlags: null, shouldAgeVerify: null, shouldShowMosaicMediaDescriptions: null, shouldAutoPlayGifs: null, colors: null };
                        obj25[0] = message;
                        obj25[1] = guildId;
                        obj25[2] = interaction;
                        obj25[3] = shouldDisableInteractiveComponents;
                        obj25[4] = tmp5;
                        obj25[5] = shouldObscureSpoiler;
                        obj25[6] = enabledHarmTypesForMessage;
                        obj25[7] = result1;
                        obj25[8] = setting;
                        obj25[9] = gifAutoPlay;
                        obj25[10] = tmp4;
                        merged = tmp2(tmp3[49])(obj25, message2.components);
                      }
                    }
                    obj24[56] = merged;
                    let num9 = 0;
                    if (!renderContentOnly) {
                      num9 = tmp4.feedbackColor;
                    }
                    obj24[57] = num9;
                    let num10 = 0;
                    if (!renderContentOnly) {
                      num10 = tmp4.highlightColor;
                    }
                    obj24[58] = num10;
                    obj24[59] = tmp50;
                    if (renderGiftCode) {
                      let giftCodeEmbed = tmp13(tmp3[77]).createGiftCodeEmbed(message, forcedTheme);
                      const tmp13Result40 = tmp13(tmp3[77]);
                    } else {
                      giftCodeEmbed = [];
                    }
                    obj24[60] = giftCodeEmbed;
                    if (renderCodedLinks) {
                      const tmp13Result41 = tmp13(tmp3[78]);
                      merged = tmp13Result41;
                      merged = message;
                      merged = message2;
                      merged = channel;
                      merged = forcedTheme;
                      let codedLinkEmbeds = tmp13Result41.createCodedLinkEmbeds(message, message2, channel, tmp6);
                    } else {
                      codedLinkEmbeds = [];
                    }
                    obj24[61] = codedLinkEmbeds;
                    merged = undefined;
                    if (renderActivityInstanceEmbed) {
                      merged = tmp13(tmp3[79]).createActivityInstanceEmbed(message);
                      const tmp13Result42 = tmp13(tmp3[79]);
                    }
                    obj24[62] = merged;
                    merged = undefined;
                    if (renderActivityInviteEmbed) {
                      merged = tmp13(tmp3[80]).createActivityRichPresenceInviteEmbed(message, channel);
                      const tmp13Result43 = tmp13(tmp3[80]);
                    }
                    obj24[63] = merged;
                    if (tmp10) {
                      if (renderAttachments) {
                        merged = 0 !== message2.attachments.length || 0 !== message2.embeds.length;
                        renderAttachments = merged;
                      }
                      if (!renderAttachments) {
                        renderAttachments = tmp43;
                      }
                      tmp10 = renderAttachments;
                    }
                    obj24[64] = tmp10;
                    obj24[65] = tmp43;
                    obj24[66] = items3;
                    let num12 = 1;
                    if (tmp43) {
                      num12 = 1;
                      if (message.state === tmp44.SEND_FAILED) {
                        num12 = 0.2;
                      }
                    }
                    obj24[67] = num12;
                    if (restrictedPreview) {
                      let items5 = [];
                    } else {
                      const obj26 = { message: null, animateStickersSetting: null, isUserInteracting: null };
                      obj26[0] = message2;
                      merged = tmp2(tmp3[81]);
                      const AnimateStickers = tmp13(tmp3[47]).AnimateStickers;
                      obj26[1] = AnimateStickers.getSetting();
                      obj26[2] = message.id === animatingStickerMessageId;
                      items5 = merged(obj26);
                    }
                    obj24[68] = items5;
                    if (renderCommunicationDisabled) {
                      renderCommunicationDisabled = result3;
                    }
                    obj24[69] = renderCommunicationDisabled;
                    merged = undefined;
                    if (channel != null) {
                      merged = channel.isForumPost();
                    }
                    obj24[70] = merged && message.id === message.channel_id;
                    merged = undefined;
                    if (channel != null) {
                      merged = channel.isForumPost();
                    }
                    merged = undefined;
                    if (merged) {
                      if (renderForumPostActions) {
                        merged = undefined;
                        if (message.id === message.channel_id) {
                          merged = channel.getGuildId();
                          if (null == merged) {
                            merged = closure_14;
                            merged = 0 !== message.reactions.length;
                            merged = undefined;
                            merged = closure_14.hasJoined(message.channel_id);
                            if (!merged) {
                              merged = obj.getChannel(channel.parent_id);
                              merged = undefined;
                              if (merged != null) {
                                merged = merged.defaultReactionEmoji;
                              }
                              merged = undefined;
                              if (merged != null) {
                                merged = merged.emojiId;
                              }
                              merged = null;
                              if (null != merged) {
                                merged = enabledHarmTypesForMessage;
                                merged = enabledHarmTypesForMessage.getUsableCustomEmojiById(merged.emojiId);
                              }
                              const obj27 = { defaultReactionEmoji: null, customGuildEmoji: null };
                              obj27[0] = merged;
                              obj27[1] = merged;
                              merged = tmp13(tmp3[32]).createDefaultReaction(obj27);
                              const tmp13Result44 = tmp13(tmp3[32]);
                            }
                            merged = closure_11;
                            merged = closure_11.shouldDisplayPrompt(channel.id);
                            const obj28 = { isFollowing: null, hasReactions: null, defaultReaction: null, showMediaPostSharePrompt: null };
                            obj28[0] = merged;
                            obj28[1] = merged;
                            obj28[2] = merged;
                            obj28[3] = merged;
                            merged = tmp13(tmp3[32]).createForumPostActions(obj28);
                            const tmp13Result45 = tmp13(tmp3[32]);
                          } else {
                            merged = interaction;
                          }
                        }
                      }
                    }
                    obj24[71] = merged;
                    obj24[72] = message.author.id === merged;
                    merged = guildId;
                    obj24[73] = null != guildId.gradientPreset;
                    const tmp13Result38 = tmp13(tmp3[75]);
                    obj24[74] = tmp13(tmp3[30]).getAssetUriForEmbed(tmp2(tmp3[82]));
                    const tmp13Result46 = tmp13(tmp3[30]);
                    obj24[75] = tmp13(tmp3[30]).getAssetUriForEmbed(tmp2(tmp3[83]));
                    if (tmp7) {
                      let postPreviewEmbeds = tmp13(tmp3[84]).createPostPreviewEmbeds(message, roleStyle, useReducedMotion);
                      const tmp13Result48 = tmp13(tmp3[84]);
                    } else {
                      postPreviewEmbeds = [];
                    }
                    obj24[76] = postPreviewEmbeds;
                    const intl19 = tmp13(tmp3[29]).intl;
                    obj24[77] = intl19.string(tmp13(tmp3[29]).t["2aXnfa"]);
                    const tmp13Result47 = tmp13(tmp3[30]);
                    obj24[78] = tmp13(tmp3[85]).createSafetyPolicyNoticeEmbed(message);
                    obj24[79] = merged;
                    obj24[80] = merged;
                    const tmp13Result49 = tmp13(tmp3[85]);
                    obj24[81] = tmp13(tmp3[86]).createSafetySystemNotificationEmbed(message);
                    const tmp13Result50 = tmp13(tmp3[86]);
                    merged = obj24;
                    merged = Object.assign(tmp13(tmp3[87]).createCtaButtons(message.id, message.channel_id, tmp4));
                    merged = undefined;
                    if (merged) {
                      merged = tmp4.embedBackgroundColor;
                    }
                    obj24.audioAttachmentBackgroundColor = merged;
                    const tmp13Result51 = tmp13(tmp3[87]);
                    obj24.accessibilityActions = tmp13(tmp3[88]).createMessageAccessibilityActions(message, channel);
                    obj24.clanTagGuildId = merged;
                    obj24.clanTag = merged;
                    obj24.clanBadgeUrl = merged;
                    obj24.lobbyAdditionalName = additionalName;
                    obj24.lobbyTagIconUrl = merged;
                    obj24.isFirst = isFirst;
                    obj24.gameApplicationId = id;
                    merged = undefined;
                    if (channel != null) {
                      merged = channel.type;
                    }
                    merged = constants4;
                    obj24.isAnnouncementChannel = merged === constants4.GUILD_ANNOUNCEMENT;
                    const tmp13Result52 = tmp13(tmp3[88]);
                    obj24.displayNameStyles = tmp13(tmp3[89]).createDisplayNameStylesMobile(message.author, member);
                    obj24.voiceChannelBadge = merged;
                    return obj24;
                  }
                  defaultUsernameColor = tmp4.defaultUsernameColor;
                }
                nonce = message.nonce;
                const tmp13Result32 = tmp13(tmp3[71]);
              }
              merged = tmp13(tmp3[65]).accessibilityLabelCalendarFormat(message.timestamp);
              const tmp13Result54 = tmp13(tmp3[65]);
            }
            const tmp13Result20 = tmp13(tmp3[62]);
            merged = tmp13(tmp3[65]).calendarFormat(message.timestamp, true, timestampHourCycle);
            const tmp13Result55 = tmp13(tmp3[65]);
          }
        }
      }
      if (null != guildMemberAvatar) {
        if (null != guildId) {
          const obj29 = { userId: null, avatar: null, guildId: null };
          obj29[0] = author.id;
          obj29[1] = guildMemberAvatar;
          obj29[2] = guildId;
          applicationIconSource = tmp2(tmp3[54]).getGuildMemberAvatarSource(obj29, author);
          const tmp2Result2 = tmp2(tmp3[54]);
        }
      }
      applicationIconSource = author.getAvatarSource(undefined);
      tmp13Result7 = tmp13(tmp3[53]);
    }
    parseMessageMarkupResult = { content: "PX_16", hasSpoilerEmbeds: "minForce", hasBailedAst: "maxForce" };
    const tmp13Result1 = tmp13(tmp3[42]);
  }
}
const processColor = get_ActivityIndicator.processColor;
const ReferencedMessageState = processMessage.ReferencedMessageState;
({ DEFAULT_GUILD_OFFICIAL_COLOR: closure_24, GUILD_OFFICIAL_HIGHLIGHT_ALPHA: closure_25, GUILD_OFFICIAL_HIGHLIGHT_ALPHA_COLOR: closure_26 } = MESSAGE_GROUP_SPACING);
const ReferencedMessageRowState = Changeset.ReferencedMessageRowState;
({ MessageTypes: closure_28, MessageStates: closure_29, MessageFlags: closure_30, ChannelTypes: closure_31 } = ME);
const GuildTagBadgeSize = items6.GuildTagBadgeSize;
let result = set.fileFinishedImporting("modules/messages/native/renderer/createMessageContent.tsx");

export default createMessageContent;