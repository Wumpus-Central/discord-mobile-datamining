// === Module 10857: handleEdit ===

// Module 10857 (handleEdit)
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import noopAll from "noop" /* 19 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import transitionTo from "transitionTo" /* 1222 */;
import presentAddedFriendToast from "presentAddedFriendToast" /* 4093 */;
import coerceMainRoute from "coerceMainRoute" /* 4229 */;
import allowChannelAccess from "allowChannelAccess" /* 4979 */;
import QUICK_SWITCHERDefault from "QUICK_SWITCHER" /* 7159 */;
import _copy from "_copy" /* 7167 */;
import trackInviteDefault from "trackInvite" /* 7427 */;
import patchThreadDefault from "patchThread" /* 7512 */;
import openCreateForumPostModal from "openCreateForumPostModal" /* 10165 */;
import createPendingReply from "createPendingReply" /* 10859 */;
import getState from "getState" /* 7434 */;
import { isMessageComponentsV2 } from "hasFlag" /* 4031 */;
import initialize from "initialize" /* 7435 */;
import initialize2 from "initialize" /* 7582 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import getOptions from "getOptions" /* 10858 */;
import ME from "ME" /* 676 */;
import { isStaticChannelRoute } from "set" /* 1398 */;
import { EXPLICIT_MEDIA_FALSE_POSITIVE_ACTION_SHEET_KEY as closure_19 } from "USER_SETTING_ACTION_SHEET_KEY" /* 5004 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
function handleEdit(id, isForumPost, current, source) {
  let flag = arg4;
  if (arg4 === undefined) {
    flag = false;
  }
  if (isForumPost.isForumPost()) {
    let obj = DISCORD_EPOCHDefault;
    if (isForumPost.id === obj.castMessageIdAsChannelId(id.id)) {
      if (null != isForumPost.parent_id) {
        createPendingReply.deletePendingReply(isForumPost.id);
        obj = { guildId: null, parentChannelId: null, threadId: null, messageId: null, isEdit: true, analyticsLocations: null, analyticsLocationObject: null };
        ({ guild_id: obj9[0], parent_id: obj9[1], id: obj9[2] } = isForumPost);
        obj[3] = id.id;
        const items = [QUICK_SWITCHERDefault.FORUM_CHANNEL, QUICK_SWITCHERDefault.GUILD_CHANNEL];
        obj[5] = items;
        obj = { page: null, section: null, object: null };
        obj[0] = constants3.GUILD_CHANNEL;
        obj[1] = constants4.FORUM_POST_HEADER;
        obj[2] = constants2.CONTEXT_MENU;
        obj[6] = obj;
        const result = openCreateForumPostModal.openCreateForumPostModal(obj);
      }
    }
  }
  if (flag) {
    if ("message_swipe" === source) {
      if (editing.isEditing(isForumPost.id, id.id)) {
        const currentUser = authStore.getCurrentUser();
        obj1 = { message_id: null, channel_id: null, guild_id: null, context_action: "edit", reason: "swipe_edit_undo", is_own_message: null };
        obj1[0] = id.id;
        ({ id: obj5[1], guild_id: obj5[2] } = isForumPost);
        let tmp15 = null != currentUser;
        if (tmp15) {
          tmp15 = currentUser.id === id.author.id;
        }
        obj1[5] = tmp15;
        expandEventPropertiesDefault.track(constants.CHAT_CONTEXT_BAR_ACTION_CANCELED, obj1);
        trackInviteDefault.endEditMessage(isForumPost.id);
        if (current != null) {
          const current2 = current.current;
          if (current2 != null) {
            current2.dismissKeyboard();
          }
        }
        const tmp11Result = trackInviteDefault;
      }
    }
  }
  pendingReply = pendingReply.getPendingReply(isForumPost.id);
  if (null != pendingReply) {
    const currentUser1 = authStore.getCurrentUser();
    let obj2 = { message_id: null, channel_id: null, guild_id: null, context_action: "reply", reason: null, is_own_message: null };
    obj2[0] = id.id;
    ({ id: obj12[1], guild_id: obj12[2] } = isForumPost);
    if ("message_swipe" === source) {
      let str3 = "swipe_edit";
    } else if ("action_sheet" === source) {
      str3 = "action_sheet_edit";
    } else {
      str3 = "pressed_cancel";
    }
    obj2[4] = str3;
    obj2[5] = null != currentUser1 && currentUser1.id === pendingReply.message.author.id;
    expandEventPropertiesDefault.track(constants.CHAT_CONTEXT_BAR_ACTION_CANCELED, obj2);
  }
  obj1 = createPendingReply;
  obj1.deletePendingReply(isForumPost.id);
  obj2 = trackInviteDefault;
  const result1 = obj2.startEditMessageRecord(isForumPost.id, id, source);
  if (current != null) {
    current = current.current;
    if (current != null) {
      current.openSystemKeyboard();
    }
  }
}
noopAll;
({ AnalyticEvents: c9, AnalyticsObjects: c10, AnalyticsPages: unpackModuleId, AnalyticsSections: closure_12, ComponentActions: map1, GIF_RE_IOS: closure_14, MediaType: closure_15, MessageStates: closure_16, MessageTypes: closure_17 } = ME);
let result = require("obj132").fileFinishedImporting("modules/messages/native/long_press/LongPressMessageActionSheetUtils.tsx");

export function getContextBarCancelReason(edit, cancel) {
  if ("message_swipe" === cancel) {
    let str6 = "swipe_reply";
    if ("reply" === edit) {
      str6 = "swipe_edit";
    }
    return str6;
  } else if ("action_sheet" === cancel) {
    let str4 = "action_sheet_reply";
    if ("reply" === edit) {
      str4 = "action_sheet_edit";
    }
    return str4;
  } else if ("cancel" === cancel) {
    return "pressed_cancel";
  }
}
export { handleEdit };
export const handleCreateThread = function handleCreateThread(guild_id, id, Message) {
  let str = Message;
  if (Message === undefined) {
    str = "Message";
  }
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  const result = patchThreadDefault.openThreadCreationForMobile(guild_id, id, str);
  let result1 = null == id;
  if (!result1) {
    let tmpResult = DISCORD_EPOCHDefault;
    result1 = coerceMainRoute.navigateToCreateThread(guild_id.guild_id, tmpResult.castMessageIdAsChannelId(id.id));
  }
  if (!result1) {
    tmpResult = DISCORD_EPOCHDefault;
    transitionTo.transitionToGuild(guild_id.guild_id, tmpResult.castMessageIdAsChannelId(id.id));
  }
};
export const handleCopyMessageLink = function handleCopyMessageLink(channel, message_id) {
  const obj = { message_id, channel: channel.id };
  obj.track(constants.MESSAGE_LINK_COPIED, obj);
  const channelPermalink = allowChannelAccess.getChannelPermalink(channel.guild_id, channel.id, message_id);
  if (null != channelPermalink) {
    let tmp3Result = _copy;
    tmp3Result.copy(channelPermalink);
    tmp3Result = presentAddedFriendToast;
    tmp3Result.presentLinkCopied();
  }
};
export const handleCopyId = function handleCopyId(arg0) {
  _copy.copy(arg0);
  const result = presentAddedFriendToast.presentMessageIdCopied();
};
export const longPressMessageOptionHandler = function longPressMessageOptionHandler(analyticsLocations) {
  ({ label, message, channel } = analyticsLocations);
  id = channel;
  ({ chatInputRef, selectedMedia, actionSheetSource, onActionExecuted, onBack, disabled } = analyticsLocations);
  if (disabled === undefined) {
    disabled = false;
  }
  ({ guild_id, id } = channel);
  let id2 = message.id;
  selectedMedia = id2;
  if (!disabled) {
    const tmp = id;
    const tmp2 = selectedMedia;
    let intl = id(selectedMedia[19]).intl;
    if (label !== intl.string(id(selectedMedia[19]).t.PHjkRE)) {
      let obj = id2(tmp2[42]);
      obj.hideActionSheet();
    }
    let intl2 = tmp(tmp2[19]).intl;
    if (intl2.string(tmp(tmp2[19]).t["+78Pfm"]) !== label) {
      const intl26 = tmp(tmp2[19]).intl;
      if (intl26.string(tmp(tmp2[19]).t.n5EBAJ) !== label) {
        const intl27 = tmp(tmp2[19]).intl;
        if (intl27.string(id2(tmp2[47])["1D+vqy"]) === label) {
          let tmpResult = tmp(tmp2[48]);
          if (tmpResult.canReportMessageToMods(message)) {
            tmpResult = tmp(tmp2[46]);
            let result = tmpResult.showReportToModMessageModal(message);
          }
        } else {
          const intl28 = tmp(tmp2[19]).intl;
          if (intl28.string(tmp(tmp2[19]).t.k5WiPf) === label) {
            if (message.type === constants7.THREAD_STARTER_MESSAGE) {
              if (null != message.messageReference) {
                const guild_id2 = message.messageReference.guild_id;
                if (null != guild_id2) {
                  tmp(tmp2[28]).transitionToGuild(guild_id2, tmp145, tmp144);
                  const tmpResult1 = tmp(tmp2[28]);
                }
              }
            }
          } else {
            const intl29 = tmp(tmp2[19]).intl;
            if (intl29.string(tmp(tmp2[19]).t["+TSRGD"]) === label) {
              tmp(tmp2[49]).transitionToMessage(channel.id, message.id);
              const tmpResult2 = tmp(tmp2[49]);
            } else {
              const intl30 = tmp(tmp2[19]).intl;
              if (intl30.string(tmp(tmp2[19]).t.zBoHlf) === label) {
                tmp(tmp2[30]).copy(id2);
                const tmpResult3 = tmp(tmp2[30]);
                const result1 = tmp(tmp2[31]).presentMessageIdCopied();
                const tmpResult4 = tmp(tmp2[31]);
              } else {
                const intl31 = tmp(tmp2[19]).intl;
                if (intl31.string(tmp(tmp2[19]).t.P8tvKG) === label) {
                  const user = authStore.getUser(message.author.id);
                  if (null != user) {
                    if (chatInputRef != null) {
                      const current7 = chatInputRef.current;
                      if (current7 != null) {
                        let tmp129Result = tmp129(tmp2[11]);
                        const _HermesInternal = HermesInternal;
                        current7.insertText("@" + tmp129Result.getUserTag(user, { decoration: "never" }), null, true);
                      }
                    }
                    if (chatInputRef != null) {
                      const current8 = chatInputRef.current;
                      if (current8 != null) {
                        current8.focus();
                      }
                    }
                    if (chatInputRef != null) {
                      const current9 = chatInputRef.current;
                      if (current9 != null) {
                        current9.openSystemKeyboard();
                      }
                    }
                  }
                } else {
                  const intl32 = tmp(tmp2[19]).intl;
                  if (intl32.string(tmp(tmp2[19]).t.cduTBL) === label) {
                    obj = { userId: null, channelId: null, messageId: null, sourceAnalyticsLocations: null };
                    obj[0] = message.author.id;
                    obj[1] = id;
                    obj[2] = message.id;
                    obj[3] = analyticsLocations.analyticsLocations;
                    tmp129(tmp2[50])(obj);
                  } else {
                    const intl33 = tmp(tmp2[19]).intl;
                    if (intl33.string(tmp(tmp2[19]).t.fsBWmS) === label) {
                      handleEdit(message, channel, chatInputRef, "action_sheet");
                    } else {
                      const intl34 = tmp(tmp2[19]).intl;
                      if (intl34.string(tmp(tmp2[19]).t.MFGE51) === label) {
                        if (chatInputRef != null) {
                          const current6 = chatInputRef.current;
                          if (current6 != null) {
                            current6.dismissKeyboard();
                          }
                        }
                        tmp129Result = tmp129(tmp2[18]);
                        obj = { title: null, children: null, cancelText: null, confirmText: null, onConfirm: null };
                        const intl23 = tmp(tmp2[19]).intl;
                        obj[0] = intl23.string(tmp(tmp2[19]).t.aIz1oV);
                        obj1 = { channelId: null };
                        obj1[0] = id;
                        obj[1] = jsx(tmp129(tmp2[20]), { channelId: null });
                        const intl24 = tmp(tmp2[19]).intl;
                        obj[2] = intl24.string(tmp(tmp2[19]).t["ETE/oC"]);
                        const intl25 = tmp(tmp2[19]).intl;
                        obj[3] = intl25.string(tmp(tmp2[19]).t["cY+Oob"]);
                        obj[4] = function onConfirm() {
                          return id2(selectedMedia[17]).crosspostMessage(id, id2);
                        };
                        tmp129Result.show(obj);
                      } else {
                        const intl35 = tmp(tmp2[19]).intl;
                        if (intl35.string(tmp(tmp2[19]).t.CvQ18w) === label) {
                          id = channel;
                          id2 = message;
                          if (chatInputRef != null) {
                            const current5 = chatInputRef.current;
                            if (current5 != null) {
                              current5.dismissKeyboard();
                            }
                          }
                          let obj2 = { title: null, body: null, children: null, cancelText: null, confirmText: null, onConfirm: null };
                          const intl19 = tmp(tmp2[19]).intl;
                          obj2[0] = intl19.string(tmp(tmp2[19]).t.CvQ18w);
                          const intl20 = tmp(tmp2[19]).intl;
                          obj2[1] = intl20.string(tmp(tmp2[19]).t.WG5dyo);
                          let obj3 = { message: null };
                          obj3[0] = message;
                          obj2[2] = jsx(tmp129(tmp2[21]), { message: null });
                          const intl21 = tmp(tmp2[19]).intl;
                          obj2[3] = intl21.string(tmp(tmp2[19]).t.gm1Vej);
                          const intl22 = tmp(tmp2[19]).intl;
                          obj2[4] = intl22.string(tmp(tmp2[19]).t.p89ACt);
                          obj2[5] = function onConfirm() {
                            id2(selectedMedia[22]).pinMessage(id, id2.id);
                            const AccessibilityAnnouncer = id(selectedMedia[23]).AccessibilityAnnouncer;
                            const intl = id(selectedMedia[19]).intl;
                            AccessibilityAnnouncer.announce(intl.string(id(selectedMedia[19]).t.sCfDDl));
                          };
                          tmp129(tmp2[18]).show(obj2);
                          const tmp129Result1 = tmp129(tmp2[18]);
                        } else {
                          const intl36 = tmp(tmp2[19]).intl;
                          if (intl36.string(tmp(tmp2[19]).t["Bse+F/"]) === label) {
                            id = channel;
                            id2 = message;
                            if (chatInputRef != null) {
                              const current4 = chatInputRef.current;
                              if (current4 != null) {
                                current4.dismissKeyboard();
                              }
                            }
                            const obj4 = { title: null, body: null, children: null, cancelText: null, confirmText: null, onConfirm: null };
                            const intl15 = tmp(tmp2[19]).intl;
                            obj4[0] = intl15.string(tmp(tmp2[19]).t["Bse+F/"]);
                            const intl16 = tmp(tmp2[19]).intl;
                            obj4[1] = intl16.string(tmp(tmp2[19]).t.NjEPp7);
                            const obj5 = { message: null };
                            obj5[0] = message;
                            obj4[2] = jsx(tmp129(tmp2[21]), { message: null });
                            const intl17 = tmp(tmp2[19]).intl;
                            obj4[3] = intl17.string(tmp(tmp2[19]).t.gm1Vej);
                            const intl18 = tmp(tmp2[19]).intl;
                            obj4[4] = intl18.string(tmp(tmp2[19]).t.p89ACt);
                            obj4[5] = function onConfirm() {
                              return id2(selectedMedia[22]).unpinMessage(id, id2.id);
                            };
                            tmp129(tmp2[18]).show(obj4);
                            const tmp129Result2 = tmp129(tmp2[18]);
                          } else {
                            const intl37 = tmp(tmp2[19]).intl;
                            if (intl37.string(tmp(tmp2[19]).t["lE/PG3"]) === label) {
                              const result2 = tmp129(tmp2[17]).patchMessageGuildOfficial(id, id2, true);
                              const tmp129Result3 = tmp129(tmp2[17]);
                            } else {
                              const intl38 = tmp(tmp2[19]).intl;
                              if (intl38.string(tmp(tmp2[19]).t["2km5Gf"]) === label) {
                                const result3 = tmp129(tmp2[17]).patchMessageGuildOfficial(id, id2, false);
                                const tmp129Result4 = tmp129(tmp2[17]);
                              } else {
                                const intl39 = tmp(tmp2[19]).intl;
                                if (intl39.string(tmp(tmp2[19]).t.xwMqD7) === label) {
                                  if (message.state === constants6.SENDING) {
                                    tmp129(tmp2[24]).cancelRequest(id2);
                                    const tmp129Result5 = tmp129(tmp2[24]);
                                    tmp129(tmp2[17]).deleteMessage(id, id2, true);
                                    const tmp129Result6 = tmp129(tmp2[17]);
                                  } else if (message.state === tmp85.SEND_FAILED) {
                                    tmp129(tmp2[17]).deleteMessage(id, id2, true);
                                    const tmp129Result7 = tmp129(tmp2[17]);
                                  } else {
                                    id2 = message;
                                    if (chatInputRef != null) {
                                      const current3 = chatInputRef.current;
                                      if (current3 != null) {
                                        current3.dismissKeyboard();
                                      }
                                    }
                                    const obj6 = { title: null, body: null, children: null, cancelText: null, confirmText: null, onConfirm: null };
                                    const intl11 = tmp(tmp2[19]).intl;
                                    obj6[0] = intl11.string(tmp(tmp2[19]).t.MWMcg7);
                                    const intl12 = tmp(tmp2[19]).intl;
                                    obj6[1] = intl12.string(tmp(tmp2[19]).t.AMvpS4);
                                    const obj7 = { message: null };
                                    obj7[0] = message;
                                    obj6[2] = jsx(tmp129(tmp2[21]), { message: null });
                                    const intl13 = tmp(tmp2[19]).intl;
                                    obj6[3] = intl13.string(tmp(tmp2[19]).t.gm1Vej);
                                    const intl14 = tmp(tmp2[19]).intl;
                                    obj6[4] = intl14.string(tmp(tmp2[19]).t.p89ACt);
                                    obj6[5] = function onConfirm() {
                                      id2(selectedMedia[17]).deleteMessage(id, id2.id, false);
                                    };
                                    tmp129(tmp2[18]).show(obj6);
                                    const tmp129Result8 = tmp129(tmp2[18]);
                                  }
                                  const obj8 = { channel_id: null, guild_id: null, action_sheet_option: "delete", message_state: null };
                                  obj8[0] = id;
                                  obj8[1] = guild_id;
                                  obj8[3] = message.state;
                                  tmp129(tmp2[51]).trackWithMetadata(constants.MESSAGE_ACTION_SHEET_OPTION_PRESSED, obj8);
                                  const tmp129Result9 = tmp129(tmp2[51]);
                                } else {
                                  const intl40 = tmp(tmp2[19]).intl;
                                  if (intl40.string(tmp(tmp2[19]).t["5911Lb"]) === label) {
                                    uploaderFileForMessageId = uploaderFileForMessageId.getUploaderFileForMessageId(message.id);
                                    let items;
                                    if (uploaderFileForMessageId != null) {
                                      items = uploaderFileForMessageId.items;
                                    }
                                    tmp129(tmp2[25])(channel, message, items, options.getOptions(message.id));
                                    const tmp129Result10 = tmp129(tmp2[25]);
                                    const obj9 = { channel_id: null, guild_id: null, action_sheet_option: "retry", message_state: null };
                                    obj9[0] = id;
                                    obj9[1] = guild_id;
                                    obj9[3] = message.state;
                                    tmp129(tmp2[51]).trackWithMetadata(constants.MESSAGE_ACTION_SHEET_OPTION_PRESSED, obj9);
                                    const tmp129Result11 = tmp129(tmp2[51]);
                                  } else {
                                    const intl41 = tmp(tmp2[19]).intl;
                                    if (intl41.string(tmp(tmp2[19]).t.JrGD7E) === label) {
                                      const contentMessage = message.getContentMessage();
                                      if (isMessageComponentsV2(contentMessage)) {
                                        const allTextDisplayContent = tmp(tmp2[29]).getAllTextDisplayContent(contentMessage.components);
                                        if (null != allTextDisplayContent) {
                                          tmp(tmp2[30]).copy(allTextDisplayContent);
                                          const tmpResult6 = tmp(tmp2[30]);
                                        }
                                        const tmpResult5 = tmp(tmp2[29]);
                                      } else {
                                        tmp(tmp2[30]).copy(contentMessage.content);
                                        const tmpResult7 = tmp(tmp2[30]);
                                      }
                                      tmp(tmp2[31]).presentMessageCopied();
                                      const tmpResult8 = tmp(tmp2[31]);
                                    } else {
                                      const intl42 = tmp(tmp2[19]).intl;
                                      if (intl42.string(tmp(tmp2[19]).t.lfIHs4) === label) {
                                        const result4 = tmp(tmp2[52]).handleAddNewReactions(channel, id2);
                                        const tmpResult9 = tmp(tmp2[52]);
                                      } else {
                                        const intl43 = tmp(tmp2[19]).intl;
                                        if (intl43.string(tmp(tmp2[19]).t.gHp0C4) === label) {
                                          if ("Preview" === actionSheetSource) {
                                            const result5 = tmp(tmp2[52]).handleViewPreviewReactions(id2, id);
                                            const tmpResult10 = tmp(tmp2[52]);
                                          } else {
                                            const obj10 = { messageId: null, channelId: null, location: null };
                                            obj10[0] = id2;
                                            obj10[1] = id;
                                            const obj11 = { object: null };
                                            obj11[0] = constants2.MESSAGE_ACTION_SHEET;
                                            obj10[2] = obj11;
                                            tmp(tmp2[52]).handleViewReactions(obj10);
                                            const tmpResult11 = tmp(tmp2[52]);
                                          }
                                        } else {
                                          const intl44 = tmp(tmp2[19]).intl;
                                          if (intl44.string(tmp(tmp2[19]).t.ZbtGBm) === label) {
                                            const result6 = tmp(tmp2[52]).handleRemoveAllReactions(id, id2);
                                            const tmpResult12 = tmp(tmp2[52]);
                                          } else {
                                            const intl45 = tmp(tmp2[19]).intl;
                                            if (intl45.string(tmp(tmp2[19]).t["g33r/P"]) === label) {
                                              const obj12 = { recipientIds: null };
                                              obj12[0] = message.author.id;
                                              tmp129(tmp2[33]).openPrivateChannel(obj12);
                                              const tmp129Result12 = tmp129(tmp2[33]);
                                            } else {
                                              const intl46 = tmp(tmp2[19]).intl;
                                              if (intl46.string(tmp(tmp2[19]).t.Xrt5Po) === label) {
                                                const obj13 = { message_id: null, channel: null };
                                                obj13[0] = id2;
                                                obj13[1] = channel.id;
                                                tmp129(tmp2[16]).track(constants.MESSAGE_LINK_COPIED, obj13);
                                                const tmp129Result13 = tmp129(tmp2[16]);
                                                const channelPermalink = tmp(tmp2[32]).getChannelPermalink(channel.guild_id, channel.id, id2);
                                                if (null != channelPermalink) {
                                                  tmp(tmp2[30]).copy(channelPermalink);
                                                  const tmpResult14 = tmp(tmp2[30]);
                                                  tmp(tmp2[31]).presentLinkCopied();
                                                  const tmpResult15 = tmp(tmp2[31]);
                                                }
                                                const tmpResult13 = tmp(tmp2[32]);
                                              } else {
                                                const intl47 = tmp(tmp2[19]).intl;
                                                if (intl47.string(tmp(tmp2[19]).t.RpE9k7) === label) {
                                                  tmp129(tmp2[34])(id, id2);
                                                } else {
                                                  const intl48 = tmp(tmp2[19]).intl;
                                                  if (intl48.string(tmp(tmp2[19]).t["S/xNKV"]) === label) {
                                                    id = selectedMedia;
                                                    id2 = id;
                                                    let mediaUrl;
                                                    if (selectedMedia != null) {
                                                      mediaUrl = selectedMedia.mediaUrl;
                                                    }
                                                    if (null != mediaUrl) {
                                                      selectedMedia = tmp(tmp2[35]).urlMatchesFileExtension(selectedMedia.mediaUrl, closure_14);
                                                      const tmpResult16 = tmp(tmp2[35]);
                                                      const toURLSafeResult = tmp129(tmp2[36]).toURLSafe(selectedMedia.mediaUrl);
                                                      if (null != toURLSafeResult) {
                                                        if (tmpResult17.isAttachmentUrl(toURLSafeResult)) {
                                                          let result7 = tmp(tmp2[37]).maybeRefreshAttachmentUrl(selectedMedia.mediaUrl);
                                                          const tmpResult18 = tmp(tmp2[37]);
                                                        }
                                                        tmpResult17 = tmp(tmp2[37]);
                                                        result7.then((result) => id(selectedMedia[38]).downloadMediaAssetWithContentType(result, selectedMedia ? closure_1_15.GIF : closure_1_15.IMAGE, id.contentType)).then((result) => {
                                                          let obj = id(selectedMedia[31]);
                                                          if (selectedMedia) {
                                                            obj.presentGifSaved();
                                                          } else {
                                                            obj.presentImageSaved();
                                                          }
                                                          const tmp4 = isStaticChannelRoute(id2);
                                                          let tmp5;
                                                          if (!tmp4) {
                                                            tmp5 = id2;
                                                          }
                                                          obj = { channel_id: tmp5, channel_static_route: null };
                                                          let tmp6;
                                                          if (tmp4) {
                                                            tmp6 = id2;
                                                          }
                                                          obj = {};
                                                          obj[1] = tmp6;
                                                          const merged = Object.assign(obj);
                                                          id2(selectedMedia[16]).track(closure_1_9.CONTEXT_MENU_IMAGE_SAVED, obj);
                                                          const obj2 = id2(selectedMedia[16]);
                                                        }, () => {
                                                          id2(selectedMedia[18]);
                                                          let obj = { title: null, body: null, isDismissable: true };
                                                          const intl = id(selectedMedia[19]).intl;
                                                          obj[0] = intl.string(id(selectedMedia[19]).t.cV3alD);
                                                          const intl2 = id(selectedMedia[19]).intl;
                                                          obj[1] = intl2.string(id(selectedMedia[19]).t.r4Zjzv);
                                                          obj.show(obj);
                                                          const tmp3 = isStaticChannelRoute(id2);
                                                          let tmp4;
                                                          if (!tmp3) {
                                                            tmp4 = id2;
                                                          }
                                                          obj = { channel_id: tmp4, channel_static_route: null };
                                                          let tmp5;
                                                          if (tmp3) {
                                                            tmp5 = id2;
                                                          }
                                                          obj[1] = tmp5;
                                                          const merged = Object.assign(obj);
                                                          id2(selectedMedia[16]).track(closure_1_9.CONTEXT_MENU_IMAGE_SAVE_FAILED, {});
                                                          const obj3 = id2(selectedMedia[16]);
                                                        });
                                                        const nextPromise = result7.then((result) => id(selectedMedia[38]).downloadMediaAssetWithContentType(result, selectedMedia ? closure_1_15.GIF : closure_1_15.IMAGE, id.contentType));
                                                      }
                                                      result7 = Promise.resolve(selectedMedia.mediaUrl);
                                                      const tmp129Result14 = tmp129(tmp2[36]);
                                                    }
                                                  } else {
                                                    const intl49 = tmp(tmp2[19]).intl;
                                                    if (intl49.string(tmp(tmp2[19]).t.JVuuz3) === label) {
                                                      let mediaUrl1;
                                                      if (selectedMedia != null) {
                                                        mediaUrl1 = selectedMedia.mediaUrl;
                                                      }
                                                      if (null != mediaUrl1) {
                                                        const result8 = tmp(tmp2[38]).downloadMediaAssetWithContentType(selectedMedia.mediaUrl, constants5.VIDEO, selectedMedia.contentType);
                                                        result8.then((result) => {
                                                          id(selectedMedia[31]).presentVideoSaved();
                                                        }, () => {
                                                          id2(selectedMedia[18]);
                                                          const obj = { title: null, body: null, isDismissable: true };
                                                          const intl = id(selectedMedia[19]).intl;
                                                          obj[0] = intl.string(id(selectedMedia[19]).t.cV3alD);
                                                          const intl2 = id(selectedMedia[19]).intl;
                                                          obj[1] = intl2.string(id(selectedMedia[19]).t.r4Zjzv);
                                                          obj.show(obj);
                                                        });
                                                        const tmpResult19 = tmp(tmp2[38]);
                                                      }
                                                    } else {
                                                      const intl50 = tmp(tmp2[19]).intl;
                                                      if (intl50.string(tmp(tmp2[19]).t.vbAEaA) === label) {
                                                        let mediaUrl2;
                                                        if (selectedMedia != null) {
                                                          mediaUrl2 = selectedMedia.mediaUrl;
                                                        }
                                                        if (null != mediaUrl2) {
                                                          const obj14 = { href: null };
                                                          obj14[0] = mediaUrl2;
                                                          tmp(tmp2[39]).handleClick(obj14);
                                                          const tmpResult20 = tmp(tmp2[39]);
                                                        }
                                                      } else {
                                                        const intl51 = tmp(tmp2[19]).intl;
                                                        if (intl51.string(tmp(tmp2[19]).t["92CPQ+"]) !== label) {
                                                          const intl52 = tmp(tmp2[19]).intl;
                                                          if (intl52.string(tmp(tmp2[19]).t["8xHmxo"]) !== label) {
                                                            const intl53 = tmp(tmp2[19]).intl;
                                                            if (intl53.string(tmp(tmp2[19]).t["5IEsGx"]) === label) {
                                                              const obj15 = { message: null, channel: null, chatInputRef: null, actionSource: "action_sheet" };
                                                              obj15[0] = message;
                                                              obj15[1] = channel;
                                                              obj15[2] = chatInputRef;
                                                              tmp129(tmp2[53])(obj15);
                                                              if ("Preview" === actionSheetSource) {
                                                                tmp(tmp2[49]).transitionToMessage(channel.id, message.id);
                                                                const _setTimeout = setTimeout;
                                                                const timerId = setTimeout(() => {
                                                                  const ComponentDispatch = id(selectedMedia[54]).ComponentDispatch;
                                                                  return ComponentDispatch.dispatch(closure_1_13.TEXTAREA_FOCUS, { channelId: id.id });
                                                                }, 500);
                                                                const tmpResult21 = tmp(tmp2[49]);
                                                              }
                                                            } else {
                                                              const intl54 = tmp(tmp2[19]).intl;
                                                              if (intl54.string(tmp(tmp2[19]).t.I3ltXO) === label) {
                                                                const obj16 = { message: null, source: "long-press-sheet" };
                                                                obj16[0] = message;
                                                                tmp(tmp2[55]).openForwardModal(obj16);
                                                                const tmpResult22 = tmp(tmp2[55]);
                                                              } else {
                                                                const intl55 = tmp(tmp2[19]).intl;
                                                                if (intl55.string(tmp(tmp2[19]).t.rBIGBL) === label) {
                                                                  id = undefined;
                                                                  if (message != null) {
                                                                    id = message.id;
                                                                  }
                                                                  const result9 = tmp129(tmp2[26]).openThreadCreationForMobile(channel, id, "Message");
                                                                  let result10 = null == message;
                                                                  if (!result10) {
                                                                    const tmpResult23 = tmp(tmp2[27]);
                                                                    result10 = tmpResult23.navigateToCreateThread(channel.guild_id, tmp129(tmp2[12]).castMessageIdAsChannelId(message.id));
                                                                    const tmp129Result16 = tmp129(tmp2[12]);
                                                                  }
                                                                  if (!result10) {
                                                                    const tmpResult24 = tmp(tmp2[28]);
                                                                    tmpResult24.transitionToGuild(channel.guild_id, tmp129(tmp2[12]).castMessageIdAsChannelId(message.id));
                                                                    const tmp129Result17 = tmp129(tmp2[12]);
                                                                  }
                                                                  const tmp129Result15 = tmp129(tmp2[26]);
                                                                } else {
                                                                  const intl56 = tmp(tmp2[19]).intl;
                                                                  if (intl56.string(tmp(tmp2[19]).t["39d0Wj"]) === label) {
                                                                    const tmpResult25 = tmp(tmp2[28]);
                                                                    tmpResult25.transitionToGuild(channel.guild_id, tmp129(tmp2[12]).castMessageIdAsChannelId(message.id));
                                                                    const tmp129Result18 = tmp129(tmp2[12]);
                                                                  } else {
                                                                    const intl57 = tmp(tmp2[19]).intl;
                                                                    if (intl57.string(tmp(tmp2[19]).t.PHjkRE) === label) {
                                                                      tmp129(tmp2[42]).hideActionSheet();
                                                                      const tmp129Result19 = tmp129(tmp2[42]);
                                                                      const obj17 = { channel: null, commandType: null, commandTargetId: null };
                                                                      obj17[0] = channel;
                                                                      obj17[1] = tmp(tmp2[56]).ApplicationCommandType.MESSAGE;
                                                                      obj17[2] = message.id;
                                                                      const result11 = tmp(tmp2[27]).navigateToContextMenuCommands(obj17);
                                                                      const tmpResult26 = tmp(tmp2[27]);
                                                                    } else {
                                                                      const intl58 = tmp(tmp2[19]).intl;
                                                                      if (intl58.string(tmp(tmp2[19]).t.tpxJto) === label) {
                                                                        const obj18 = { channelId: null, messageId: null, displayToast: true, source: null };
                                                                        obj18[0] = id;
                                                                        obj18[1] = id2;
                                                                        obj18[3] = tmp(tmp2[58]).SavedMessageSources.LONG_PRESS_ACTION_SHEET;
                                                                        const result12 = tmp(tmp2[57]).addOrUpdateSavedMessage(obj18);
                                                                        const tmpResult27 = tmp(tmp2[57]);
                                                                      } else {
                                                                        const intl59 = tmp(tmp2[19]).intl;
                                                                        if (intl59.string(tmp(tmp2[19]).t.SvXS1Z) === label) {
                                                                          const obj19 = { channelId: null, messageId: null, displayToast: true };
                                                                          obj19[0] = id;
                                                                          obj19[1] = id2;
                                                                          tmp(tmp2[57]).removeSavedMessage(obj19);
                                                                          const tmpResult28 = tmp(tmp2[57]);
                                                                        } else {
                                                                          const intl60 = tmp(tmp2[19]).intl;
                                                                          if (intl60.string(tmp(tmp2[19]).t.mJ3P0N) === label) {
                                                                            const obj20 = { createReminder: null, channelId: null, messageId: null, onBack: null };
                                                                            obj20[0] = function createReminder(dueAt) {
                                                                              id(selectedMedia[57]);
                                                                              const obj = { channelId: id2, messageId: selectedMedia, dueAt, displayToast: true, source: id(selectedMedia[58]).SavedMessageSources.LONG_PRESS_ACTION_SHEET };
                                                                              return obj.addOrUpdateSavedMessage(obj);
                                                                            };
                                                                            ({ channel_id: obj16[1], id: obj16[2] } = message);
                                                                            obj20[3] = onBack;
                                                                            tmp129(tmp2[42]).openLazy(tmp(tmp2[44])(tmp2[59], tmp2.paths), "MessageReminderDurationActionSheet", obj20);
                                                                            const tmp129Result20 = tmp129(tmp2[42]);
                                                                          } else {
                                                                            const intl61 = tmp(tmp2[19]).intl;
                                                                            if (intl61.string(tmp(tmp2[19]).t.vrbqs1) === label) {
                                                                              const obj21 = { createReminder: null, removeReminder: null, channelId: null, messageId: null, onBack: null };
                                                                              obj21[0] = function createReminder(dueAt) {
                                                                                id(selectedMedia[57]);
                                                                                const obj = { channelId: id2, messageId: selectedMedia, dueAt, displayToast: true, source: id(selectedMedia[58]).SavedMessageSources.LONG_PRESS_ACTION_SHEET };
                                                                                return obj.addOrUpdateSavedMessage(obj);
                                                                              };
                                                                              obj21[1] = function removeReminder() {
                                                                                id(selectedMedia[57]);
                                                                                const obj = { channelId: id2, messageId: selectedMedia, displayToast: true, isReminder: true };
                                                                                return obj.removeSavedMessage(obj);
                                                                              };
                                                                              ({ channel_id: obj14[2], id: obj14[3] } = message);
                                                                              obj21[4] = onBack;
                                                                              tmp129(tmp2[42]).openLazy(tmp(tmp2[44])(tmp2[59], tmp2.paths), "MessageReminderDurationActionSheet", obj21);
                                                                              const tmp129Result21 = tmp129(tmp2[42]);
                                                                            } else {
                                                                              const intl62 = tmp(tmp2[19]).intl;
                                                                              if (intl62.string(tmp(tmp2[19]).t.ZH7P2h) === label) {
                                                                                if (null != selectedMedia) {
                                                                                  let id1;
                                                                                  if ("embed" === selectedMedia.sourceType) {
                                                                                    id1 = selectedMedia.source.id;
                                                                                  }
                                                                                  id2 = undefined;
                                                                                  if ("attachment" === selectedMedia.sourceType) {
                                                                                    id2 = selectedMedia.source.id;
                                                                                  }
                                                                                  let result13 = undefined !== id1 || undefined !== id2;
                                                                                  if (!result13) {
                                                                                    result13 = tmp(tmp2[41]).messageHasObscurableMedia(message);
                                                                                    const tmpResult29 = tmp(tmp2[41]);
                                                                                  }
                                                                                  if (result13) {
                                                                                    const obj22 = { channelId: null, messageId: null, attachmentId: null, embedId: null };
                                                                                    ({ channel_id: obj12[0], id: obj12[1] } = message);
                                                                                    obj22[2] = id2;
                                                                                    obj22[3] = id1;
                                                                                    tmp129(tmp2[42]).openLazy(tmp(tmp2[44])(tmp2[43], tmp2.paths), closure_19, obj22);
                                                                                    const tmp129Result22 = tmp129(tmp2[42]);
                                                                                  }
                                                                                }
                                                                              } else {
                                                                                const intl63 = tmp(tmp2[19]).intl;
                                                                                if (intl63.string(tmp(tmp2[19]).t.grdwwt) === label) {
                                                                                  ({ channel_id: obj9[0], id: obj9[1] } = message);
                                                                                  tmp129(tmp2[60]).endPollEarly({ channelId: null, messageId: null });
                                                                                  const tmp129Result23 = tmp129(tmp2[60]);
                                                                                } else {
                                                                                  const intl64 = tmp(tmp2[19]).intl;
                                                                                  if (intl64.string(tmp(tmp2[19]).t.Rjezbz) === label) {
                                                                                    const obj24 = { message: null, guildId: null, onBack: null };
                                                                                    obj24[0] = message;
                                                                                    obj24[1] = guild_id;
                                                                                    obj24[2] = onBack;
                                                                                    tmp129(tmp2[42]).openLazy(tmp(tmp2[44])(tmp2[61], tmp2.paths), "AppInteractionInfoActionSheet", obj24);
                                                                                    const tmp129Result24 = tmp129(tmp2[42]);
                                                                                  } else {
                                                                                    const intl65 = tmp(tmp2[19]).intl;
                                                                                    if (intl65.string(tmp(tmp2[19]).t["4sxKOb"]) !== label) {
                                                                                      const intl66 = tmp(tmp2[19]).intl;
                                                                                      if (intl66.string(tmp(tmp2[19]).t.wUIMqa) !== label) {
                                                                                        const intl67 = tmp(tmp2[19]).intl;
                                                                                        if (intl67.string(tmp(tmp2[19]).t.kFwAsa) === label) {
                                                                                          id2 = message;
                                                                                          let sourceType;
                                                                                          if (selectedMedia != null) {
                                                                                            sourceType = selectedMedia.sourceType;
                                                                                          }
                                                                                          if ("attachment" === sourceType) {
                                                                                            if (chatInputRef != null) {
                                                                                              const current = chatInputRef.current;
                                                                                              if (current != null) {
                                                                                                current.dismissKeyboard();
                                                                                              }
                                                                                            }
                                                                                            const obj25 = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null };
                                                                                            const intl3 = tmp(tmp2[19]).intl;
                                                                                            obj25[0] = intl3.string(tmp(tmp2[19]).t.CbTIEo);
                                                                                            const intl4 = tmp(tmp2[19]).intl;
                                                                                            obj25[1] = intl4.string(tmp(tmp2[19]).t.faHmO3);
                                                                                            const intl5 = tmp(tmp2[19]).intl;
                                                                                            obj25[2] = intl5.string(tmp(tmp2[19]).t["ETE/oC"]);
                                                                                            const intl6 = tmp(tmp2[19]).intl;
                                                                                            obj25[3] = intl6.string(tmp(tmp2[19]).t.kFwAsa);
                                                                                            obj25[4] = function onConfirm() {
                                                                                              id = selectedMedia.source.id;
                                                                                              const attachments = id2.attachments;
                                                                                              const found = attachments.filter((item, index) => item.id !== id);
                                                                                              const result = id2(selectedMedia[17]).patchMessageAttachments(id, id2.id, found);
                                                                                            };
                                                                                            tmp129(tmp2[18]).show(obj25);
                                                                                            const tmp129Result25 = tmp129(tmp2[18]);
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                    if (chatInputRef != null) {
                                                                                      const current2 = chatInputRef.current;
                                                                                      if (current2 != null) {
                                                                                        current2.dismissKeyboard();
                                                                                      }
                                                                                    }
                                                                                    const obj26 = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null };
                                                                                    const intl7 = tmp(tmp2[19]).intl;
                                                                                    obj26[0] = intl7.string(tmp(tmp2[19]).t.VL1KOk);
                                                                                    const intl8 = tmp(tmp2[19]).intl;
                                                                                    obj26[1] = intl8.string(tmp(tmp2[19]).t["vXZ+Fo"]);
                                                                                    const intl9 = tmp(tmp2[19]).intl;
                                                                                    obj26[2] = intl9.string(tmp(tmp2[19]).t["ETE/oC"]);
                                                                                    const intl10 = tmp(tmp2[19]).intl;
                                                                                    obj26[3] = intl10.string(tmp(tmp2[19]).t.YEHppG);
                                                                                    obj26[4] = function onConfirm() {
                                                                                      id2(selectedMedia[17]).suppressEmbeds(id, id2);
                                                                                    };
                                                                                    tmp129(tmp2[18]).show(obj26);
                                                                                    const tmp129Result26 = tmp129(tmp2[18]);
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                        let mediaUrl3;
                                                        if (selectedMedia != null) {
                                                          mediaUrl3 = selectedMedia.mediaUrl;
                                                        }
                                                        let flag = null != mediaUrl3;
                                                        if (flag) {
                                                          tmp(tmp2[30]).copy(mediaUrl3);
                                                          const tmpResult30 = tmp(tmp2[30]);
                                                          tmp(tmp2[31]).presentLinkCopied();
                                                          flag = true;
                                                          const tmpResult31 = tmp(tmp2[31]);
                                                        }
                                                        if (flag) {
                                                          let hostname;
                                                          if (null != mediaUrl3) {
                                                            hostname = tmp(tmp2[40]).getHostname(mediaUrl3);
                                                            const tmpResult32 = tmp(tmp2[40]);
                                                          }
                                                          const obj27 = { hostname: null };
                                                          obj27[0] = hostname;
                                                          const tmp40 = isStaticChannelRoute(id);
                                                          let tmp41;
                                                          if (!tmp40) {
                                                            tmp41 = id;
                                                          }
                                                          const obj28 = { channel_id: null, channel_static_route: null };
                                                          obj28[0] = tmp41;
                                                          let tmp42;
                                                          if (tmp40) {
                                                            tmp42 = id;
                                                          }
                                                          obj28[1] = tmp42;
                                                          let merged = Object.assign(obj28);
                                                          tmp129(tmp2[16]).track(constants.CONTEXT_MENU_MEDIA_LINK_COPIED, obj27);
                                                          const tmp129Result27 = tmp129(tmp2[16]);
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      if (onActionExecuted != null) {
        onActionExecuted(label);
      }
    }
    if (tmpResult33.canReportMessage(message)) {
      const result14 = tmp(tmp2[46]).showReportModalForMessage(message, "mobile_message_action_sheet");
      const tmpResult34 = tmp(tmp2[46]);
    }
    tmpResult33 = tmp(tmp2[45]);
  }
};