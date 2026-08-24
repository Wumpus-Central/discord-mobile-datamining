// discord_app/modules/messages/native/long_press/LongPressMessageActionSheetUtils.tsx
import DISCORD_EPOCHDefault from "../../../../utils/SnowflakeUtils.tsx";
import noopAll from "../../../../../_runtime/00019_noop.js";
import expandEventPropertiesDefault from "../../../../utils/AnalyticsUtils.tsx";
import transitionTo from "../../../routing/router_utils.tsx";
import presentAddedFriendToast from "../../../toast/native/ToastUtils.tsx";
import coerceMainRoute from "../../../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import allowChannelAccess from "../../../../utils/ChannelUtils.tsx";
import _copy from "../../../../utils/ClipboardUtils.native.tsx";
import trackInviteDefault from "../../../../actions/MessageActionCreators.tsx";
import patchThreadDefault from "../../../threads/ThreadActionCreators.tsx";
import openCreateForumPostModal from "../../../forums/native/composer/ForumComposerModalActionCreators.tsx";
import createPendingReply from "../../../replies/PendingReplyActionCreators.tsx";
import closure_4 from "../../../replies/PendingReplyStore.tsx";
import { isMessageComponentsV2 } from "../../../../records/MessageRecord.tsx";
import closure_6 from "../../../../stores/EditMessageStore.tsx";
import closure_7 from "../../../../stores/UploadStore.tsx";
import closure_8 from "../../../../stores/UserStore.tsx";
import closure_9 from "../../SendMessageOptionsStore.tsx";
import ME from "../../../../Constants.tsx";
import { isStaticChannelRoute } from "../../../channel/ChannelConstants.tsx";
import { EXPLICIT_MEDIA_FALSE_POSITIVE_ACTION_SHEET_KEY as closure_20 } from "../../../explicit_media_redaction/ExplicitMediaRedactionConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
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
        const obj7 = createPendingReply;
        obj = { guildId: null, parentChannelId: null, threadId: null, messageId: null, isEdit: true, analyticsLocations: null, analyticsLocationObject: null };
        ({ guild_id: obj9[0], parent_id: obj9[1], id: obj9[2] } = isForumPost);
        obj[3] = id.id;
        const items = [tmp(7197).FORUM_CHANNEL, tmp(7197).GUILD_CHANNEL];
        obj[5] = items;
        obj = { page: null, section: null, object: null };
        obj[0] = constants3.GUILD_CHANNEL;
        obj[1] = constants4.FORUM_POST_HEADER;
        obj[2] = constants2.CONTEXT_MENU;
        obj[6] = obj;
        const result = openCreateForumPostModal.openCreateForumPostModal(obj);
        const obj8 = openCreateForumPostModal;
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
        const obj4 = expandEventPropertiesDefault;
        const tmp11 = importDefault;
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
    const obj11 = expandEventPropertiesDefault;
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
({ AnalyticEvents: c10, AnalyticsObjects: unpackModuleId, AnalyticsPages: closure_12, AnalyticsSections: map1, ComponentActions: closure_14, GIF_RE_IOS: closure_15, MediaType: closure_16, MessageStates: closure_17, MessageTypes: closure_18 } = ME);
let result = require("set").fileFinishedImporting("modules/messages/native/long_press/LongPressMessageActionSheetUtils.tsx");

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
    let tmpResult = tmp(11);
    result1 = coerceMainRoute.navigateToCreateThread(guild_id.guild_id, tmpResult.castMessageIdAsChannelId(id.id));
    const obj2 = coerceMainRoute;
  }
  if (!result1) {
    tmpResult = tmp(11);
    transitionTo.transitionToGuild(guild_id.guild_id, tmpResult.castMessageIdAsChannelId(id.id));
    const obj4 = transitionTo;
  }
};
export const handleCopyMessageLink = function handleCopyMessageLink(channel, message_id) {
  let obj = expandEventPropertiesDefault;
  obj = { message_id, channel: channel.id };
  obj.track(constants.MESSAGE_LINK_COPIED, obj);
  const channelPermalink = allowChannelAccess.getChannelPermalink(channel.guild_id, channel.id, message_id);
  if (null != channelPermalink) {
    let tmp3Result = tmp3(7205);
    tmp3Result.copy(channelPermalink);
    tmp3Result = tmp3(4096);
    tmp3Result.presentLinkCopied();
  }
};
export const handleCopyId = function handleCopyId(arg0) {
  _copy.copy(arg0);
  const obj = _copy;
  const result = presentAddedFriendToast.presentMessageIdCopied();
};
export const longPressMessageOptionHandler = function longPressMessageOptionHandler(analyticsLocations) {
  ({ label, message, channel } = analyticsLocations);
  id = channel;
  ({ chatInputRef, selectedMedia, actionSheetSource, onActionExecuted, onBack, disabled } = analyticsLocations);
  if (disabled === undefined) {
    disabled = false;
  }
  let id2;
  selectedMedia = undefined;
  ({ guild_id, id } = channel);
  id2 = id;
  id2 = message.id;
  selectedMedia = id2;
  if (!disabled) {
    let result = id;
    let intl = id(1236).intl;
    if (label !== intl.string(id(1236).t.PHjkRE)) {
      let obj = id2(4346);
      obj.hideActionSheet();
    }
    let intl2 = result(1236).intl;
    if (intl2.string(result(1236).t["+78Pfm"]) !== label) {
      const intl26 = result(1236).intl;
      if (intl26.string(result(1236).t.n5EBAJ) !== label) {
        const intl27 = result(1236).intl;
        result = id2;
        if (intl27.string(id2(2436)["1D+vqy"]) === label) {
          if (resultResult.canReportMessageToMods(message)) {
            result = result(8175).showReportToModMessageModal(message);
            const resultResult1 = result(8175);
          }
          resultResult = result(7276);
        } else {
          const intl28 = result(1236).intl;
          if (intl28.string(result(1236).t.k5WiPf) === label) {
            result = constants7;
            if (message.type === constants7.THREAD_STARTER_MESSAGE) {
              result = null;
              if (null != message.messageReference) {
                const guild_id2 = message.messageReference.guild_id;
                if (null != guild_id2) {
                  result = result(1222).transitionToGuild(guild_id2, result, result);
                  const resultResult2 = result(1222);
                }
              }
            }
          } else {
            const intl29 = result(1236).intl;
            if (intl29.string(result(1236).t["+TSRGD"]) === label) {
              result = result(4773).transitionToMessage(channel.id, message.id);
              const resultResult3 = result(4773);
            } else {
              const intl30 = result(1236).intl;
              if (intl30.string(result(1236).t.zBoHlf) === label) {
                result = result(7205).copy(id2);
                const resultResult4 = result(7205);
                result = result(4096).presentMessageIdCopied();
                const resultResult5 = result(4096);
              } else {
                const intl31 = result(1236).intl;
                if (intl31.string(result(1236).t.P8tvKG) === label) {
                  result = authStore;
                  result = authStore.getUser(message.author.id);
                  result = null;
                  if (null != result) {
                    if (chatInputRef != null) {
                      const current7 = chatInputRef.current;
                      if (current7 != null) {
                        result = globalThis;
                        const _HermesInternal = HermesInternal;
                        result = current7.insertText("@" + result(4223).getUserTag(result, { decoration: "never" }), null, true);
                        const resultResult6 = result(4223);
                      }
                    }
                    if (chatInputRef != null) {
                      const current8 = chatInputRef.current;
                      if (current8 != null) {
                        result = current8.focus();
                      }
                    }
                    if (chatInputRef != null) {
                      const current9 = chatInputRef.current;
                      if (current9 != null) {
                        result = current9.openSystemKeyboard();
                      }
                    }
                  }
                } else {
                  const intl32 = result(1236).intl;
                  if (intl32.string(result(1236).t.cduTBL) === label) {
                    obj = { userId: null, channelId: null, messageId: null, sourceAnalyticsLocations: null };
                    obj[0] = message.author.id;
                    obj[1] = id;
                    obj[2] = message.id;
                    obj[3] = analyticsLocations.analyticsLocations;
                    result = result(8966)(obj);
                  } else {
                    const intl33 = result(1236).intl;
                    if (intl33.string(result(1236).t.fsBWmS) === label) {
                      result = handleEdit;
                      result = message;
                      result = channel;
                      result = chatInputRef;
                      result = handleEdit(message, channel, chatInputRef, "action_sheet");
                    } else {
                      const intl34 = result(1236).intl;
                      if (intl34.string(result(1236).t.MFGE51) === label) {
                        result = null;
                        if (chatInputRef != null) {
                          const current6 = chatInputRef.current;
                          if (current6 != null) {
                            result = current6.dismissKeyboard();
                          }
                        }
                        obj = { title: null, children: null, cancelText: null, confirmText: null, onConfirm: null };
                        const intl23 = result(1236).intl;
                        obj[0] = intl23.string(result(1236).t.aIz1oV);
                        result = jsx;
                        obj1 = { channelId: null };
                        obj1[0] = id;
                        obj[1] = jsx(result(10899), { channelId: null });
                        const intl24 = result(1236).intl;
                        obj[2] = intl24.string(result(1236).t["ETE/oC"]);
                        const intl25 = result(1236).intl;
                        obj[3] = intl25.string(result(1236).t["cY+Oob"]);
                        obj[4] = function onConfirm() {
                          return id2(closure_1_3[17]).crosspostMessage(id, id2);
                        };
                        result = result(4832).show(obj);
                        const resultResult7 = result(4832);
                      } else {
                        const intl35 = result(1236).intl;
                        if (intl35.string(result(1236).t.CvQ18w) === label) {
                          id = channel;
                          id2 = message;
                          result = null;
                          if (chatInputRef != null) {
                            const current5 = chatInputRef.current;
                            if (current5 != null) {
                              result = current5.dismissKeyboard();
                            }
                          }
                          const obj2 = { title: null, body: null, children: null, cancelText: null, confirmText: null, onConfirm: null };
                          const intl19 = result(1236).intl;
                          obj2[0] = intl19.string(result(1236).t.CvQ18w);
                          const intl20 = result(1236).intl;
                          obj2[1] = intl20.string(result(1236).t.WG5dyo);
                          result = jsx;
                          const obj3 = { message: null };
                          obj3[0] = message;
                          obj2[2] = jsx(result(10902), { message: null });
                          const intl21 = result(1236).intl;
                          obj2[3] = intl21.string(result(1236).t.gm1Vej);
                          const intl22 = result(1236).intl;
                          obj2[4] = intl22.string(result(1236).t.p89ACt);
                          obj2[5] = function onConfirm() {
                            id2(closure_1_3[22]).pinMessage(id, id2.id);
                            const AccessibilityAnnouncer = id(closure_1_3[23]).AccessibilityAnnouncer;
                            const intl = id(closure_1_3[19]).intl;
                            AccessibilityAnnouncer.announce(intl.string(id(closure_1_3[19]).t.sCfDDl));
                          };
                          result = result(4832).show(obj2);
                          const resultResult8 = result(4832);
                        } else {
                          const intl36 = result(1236).intl;
                          if (intl36.string(result(1236).t["Bse+F/"]) === label) {
                            id = channel;
                            id2 = message;
                            if (chatInputRef != null) {
                              const current4 = chatInputRef.current;
                              if (current4 != null) {
                                current4.dismissKeyboard();
                              }
                            }
                            const obj4 = { title: null, body: null, children: null, cancelText: null, confirmText: null, onConfirm: null };
                            const intl15 = result(1236).intl;
                            obj4[0] = intl15.string(result(1236).t["Bse+F/"]);
                            const intl16 = result(1236).intl;
                            obj4[1] = intl16.string(result(1236).t.NjEPp7);
                            const obj5 = { message: null };
                            obj5[0] = message;
                            obj4[2] = jsx(result(10902), { message: null });
                            const intl17 = result(1236).intl;
                            obj4[3] = intl17.string(result(1236).t.gm1Vej);
                            const intl18 = result(1236).intl;
                            obj4[4] = intl18.string(result(1236).t.p89ACt);
                            obj4[5] = function onConfirm() {
                              return id2(closure_1_3[22]).unpinMessage(id, id2.id);
                            };
                            result = result(4832).show(obj4);
                            const resultResult9 = result(4832);
                          } else {
                            const intl37 = result(1236).intl;
                            if (intl37.string(result(1236).t["lE/PG3"]) === label) {
                              const result1 = result(7465).patchMessageGuildOfficial(id, id2, true);
                              const resultResult10 = result(7465);
                            } else {
                              const intl38 = result(1236).intl;
                              if (intl38.string(result(1236).t["2km5Gf"]) === label) {
                                const result2 = result(7465).patchMessageGuildOfficial(id, id2, false);
                                const resultResult11 = result(7465);
                              } else {
                                const intl39 = result(1236).intl;
                                if (intl39.string(result(1236).t.xwMqD7) === label) {
                                  if (message.state === constants6.SENDING) {
                                    result(5045).cancelRequest(id2);
                                    const resultResult12 = result(5045);
                                    result(7465).deleteMessage(id, id2, true);
                                    const resultResult13 = result(7465);
                                  } else if (message.state === tmp86.SEND_FAILED) {
                                    result(7465).deleteMessage(id, id2, true);
                                    const resultResult14 = result(7465);
                                  } else {
                                    id2 = message;
                                    result = null;
                                    if (chatInputRef != null) {
                                      const current3 = chatInputRef.current;
                                      if (current3 != null) {
                                        current3.dismissKeyboard();
                                      }
                                    }
                                    const obj6 = { title: null, body: null, children: null, cancelText: null, confirmText: null, onConfirm: null };
                                    const intl11 = result(1236).intl;
                                    obj6[0] = intl11.string(result(1236).t.MWMcg7);
                                    const intl12 = result(1236).intl;
                                    obj6[1] = intl12.string(result(1236).t.AMvpS4);
                                    const obj7 = { message: null };
                                    obj7[0] = message;
                                    obj6[2] = jsx(result(10902), { message: null });
                                    const intl13 = result(1236).intl;
                                    obj6[3] = intl13.string(result(1236).t.gm1Vej);
                                    const intl14 = result(1236).intl;
                                    obj6[4] = intl14.string(result(1236).t.p89ACt);
                                    obj6[5] = function onConfirm() {
                                      id2(closure_1_3[17]).deleteMessage(id, id2.id, false);
                                    };
                                    result(4832).show(obj6);
                                    const resultResult15 = result(4832);
                                  }
                                  const obj8 = { channel_id: null, guild_id: null, action_sheet_option: "delete", message_state: null };
                                  obj8[0] = id;
                                  obj8[1] = guild_id;
                                  obj8[3] = message.state;
                                  result(5047).trackWithMetadata(constants.MESSAGE_ACTION_SHEET_OPTION_PRESSED, obj8);
                                  const resultResult16 = result(5047);
                                } else {
                                  const intl40 = result(1236).intl;
                                  if (intl40.string(result(1236).t["5911Lb"]) === label) {
                                    uploaderFileForMessageId = uploaderFileForMessageId.getUploaderFileForMessageId(message.id);
                                    let items;
                                    if (uploaderFileForMessageId != null) {
                                      items = uploaderFileForMessageId.items;
                                    }
                                    result(10905)(channel, message, items, options.getOptions(message.id));
                                    const resultResult17 = result(10905);
                                    const obj9 = { channel_id: null, guild_id: null, action_sheet_option: "retry", message_state: null };
                                    obj9[0] = id;
                                    obj9[1] = guild_id;
                                    obj9[3] = message.state;
                                    result(5047).trackWithMetadata(constants.MESSAGE_ACTION_SHEET_OPTION_PRESSED, obj9);
                                    const resultResult18 = result(5047);
                                  } else {
                                    const intl41 = result(1236).intl;
                                    if (intl41.string(result(1236).t.JrGD7E) === label) {
                                      const contentMessage = message.getContentMessage();
                                      if (isMessageComponentsV2(contentMessage)) {
                                        const allTextDisplayContent = result(4810).getAllTextDisplayContent(contentMessage.components);
                                        if (null != allTextDisplayContent) {
                                          result(7205).copy(allTextDisplayContent);
                                          const resultResult20 = result(7205);
                                        }
                                        const resultResult19 = result(4810);
                                      } else {
                                        result(7205).copy(contentMessage.content);
                                        const resultResult21 = result(7205);
                                      }
                                      result(4096).presentMessageCopied();
                                      const resultResult22 = result(4096);
                                    } else {
                                      const intl42 = result(1236).intl;
                                      if (intl42.string(result(1236).t.lfIHs4) === label) {
                                        const result3 = result(10495).handleAddNewReactions(channel, id2);
                                        const resultResult23 = result(10495);
                                      } else {
                                        const intl43 = result(1236).intl;
                                        if (intl43.string(result(1236).t.gHp0C4) === label) {
                                          if ("Preview" === actionSheetSource) {
                                            const result4 = result(10495).handleViewPreviewReactions(id2, id);
                                            const resultResult24 = result(10495);
                                          } else {
                                            const obj10 = { messageId: null, channelId: null, location: null };
                                            obj10[0] = id2;
                                            obj10[1] = id;
                                            const obj11 = { object: null };
                                            obj11[0] = constants2.MESSAGE_ACTION_SHEET;
                                            obj10[2] = obj11;
                                            result(10495).handleViewReactions(obj10);
                                            const resultResult25 = result(10495);
                                          }
                                        } else {
                                          const intl44 = result(1236).intl;
                                          if (intl44.string(result(1236).t.ZbtGBm) === label) {
                                            const result5 = result(10495).handleRemoveAllReactions(id, id2);
                                            const resultResult26 = result(10495);
                                          } else {
                                            const intl45 = result(1236).intl;
                                            if (intl45.string(result(1236).t["g33r/P"]) === label) {
                                              const obj12 = { recipientIds: null };
                                              obj12[0] = message.author.id;
                                              result(4775).openPrivateChannel(obj12);
                                              const resultResult27 = result(4775);
                                            } else {
                                              const intl46 = result(1236).intl;
                                              if (intl46.string(result(1236).t.Xrt5Po) === label) {
                                                const obj13 = { message_id: null, channel: null };
                                                obj13[0] = id2;
                                                obj13[1] = channel.id;
                                                result(698).track(constants.MESSAGE_LINK_COPIED, obj13);
                                                const resultResult28 = result(698);
                                                const channelPermalink = result(4984).getChannelPermalink(channel.guild_id, channel.id, id2);
                                                if (null != channelPermalink) {
                                                  result = result(7205).copy(channelPermalink);
                                                  const resultResult30 = result(7205);
                                                  result = result(4096).presentLinkCopied();
                                                  const resultResult31 = result(4096);
                                                }
                                                const resultResult29 = result(4984);
                                              } else {
                                                const intl47 = result(1236).intl;
                                                if (intl47.string(result(1236).t.RpE9k7) === label) {
                                                  result(10906)(id, id2);
                                                } else {
                                                  const intl48 = result(1236).intl;
                                                  if (intl48.string(result(1236).t["S/xNKV"]) === label) {
                                                    id = selectedMedia;
                                                    id2 = id;
                                                    let mediaUrl;
                                                    if (selectedMedia != null) {
                                                      mediaUrl = selectedMedia.mediaUrl;
                                                    }
                                                    if (null != mediaUrl) {
                                                      result = closure_15;
                                                      selectedMedia = result(4816).urlMatchesFileExtension(selectedMedia.mediaUrl, closure_15);
                                                      const resultResult32 = result(4816);
                                                      result = result(1487).toURLSafe(selectedMedia.mediaUrl);
                                                      if (null != result) {
                                                        if (obj40.isRefreshableAttachmentUrl(result)) {
                                                          let result6 = tmp53(9122).maybeRefreshAttachmentUrl(selectedMedia.mediaUrl);
                                                          const tmp53Result = tmp53(9122);
                                                        }
                                                        obj40 = selectedMedia(9122);
                                                        tmp53 = selectedMedia;
                                                        result6.then((mediaUrl) => id(closure_1_3[38]).downloadMediaAssetWithContentType(mediaUrl, selectedMedia ? closure_1_16.GIF : closure_1_16.IMAGE, id.contentType)).then(() => {
                                                          let obj = id(closure_1_3[31]);
                                                          if (selectedMedia) {
                                                            obj.presentGifSaved();
                                                          } else {
                                                            obj.presentImageSaved();
                                                          }
                                                          const tmp4 = closure_1_19(id2);
                                                          let tmp5;
                                                          if (!tmp4) {
                                                            tmp5 = tmp3;
                                                          }
                                                          obj = { channel_id: tmp5, channel_static_route: null };
                                                          let tmp6;
                                                          if (tmp4) {
                                                            tmp6 = tmp3;
                                                          }
                                                          obj = {};
                                                          obj[1] = tmp6;
                                                          const merged = Object.assign(obj);
                                                          id2(closure_1_3[16]).track(closure_1_10.CONTEXT_MENU_IMAGE_SAVED, obj);
                                                        }, () => {
                                                          let obj = id2(closure_1_3[18]);
                                                          obj = { title: null, body: null, isDismissable: true };
                                                          const intl = id(closure_1_3[19]).intl;
                                                          obj[0] = intl.string(id(closure_1_3[19]).t.cV3alD);
                                                          const intl2 = id(closure_1_3[19]).intl;
                                                          obj[1] = intl2.string(id(closure_1_3[19]).t.r4Zjzv);
                                                          obj.show(obj);
                                                          const tmp3 = closure_1_19(id2);
                                                          let tmp4;
                                                          if (!tmp3) {
                                                            tmp4 = tmp2;
                                                          }
                                                          obj = { channel_id: tmp4, channel_static_route: null };
                                                          let tmp5;
                                                          if (tmp3) {
                                                            tmp5 = tmp2;
                                                          }
                                                          obj[1] = tmp5;
                                                          const merged = Object.assign(obj);
                                                          id2(closure_1_3[16]).track(closure_1_10.CONTEXT_MENU_IMAGE_SAVE_FAILED, {});
                                                        });
                                                        const nextPromise = result6.then((mediaUrl) => id(closure_1_3[38]).downloadMediaAssetWithContentType(mediaUrl, selectedMedia ? closure_1_16.GIF : closure_1_16.IMAGE, id.contentType));
                                                      }
                                                      result6 = Promise.resolve(selectedMedia.mediaUrl);
                                                      const resultResult33 = result(1487);
                                                    }
                                                  } else {
                                                    const intl49 = result(1236).intl;
                                                    if (intl49.string(result(1236).t.JVuuz3) === label) {
                                                      let mediaUrl1;
                                                      if (selectedMedia != null) {
                                                        mediaUrl1 = selectedMedia.mediaUrl;
                                                      }
                                                      if (null != mediaUrl1) {
                                                        result = constants5;
                                                        const result7 = result(9031).downloadMediaAssetWithContentType(selectedMedia.mediaUrl, constants5.VIDEO, selectedMedia.contentType);
                                                        result = result7.then(() => {
                                                          id(4096).presentVideoSaved();
                                                        }, () => {
                                                          let obj = id2(4832);
                                                          obj = { title: null, body: null, isDismissable: true };
                                                          const intl = id(1236).intl;
                                                          obj[0] = intl.string(id(1236).t.cV3alD);
                                                          const intl2 = id(1236).intl;
                                                          obj[1] = intl2.string(id(1236).t.r4Zjzv);
                                                          obj.show(obj);
                                                        });
                                                        const resultResult34 = result(9031);
                                                      }
                                                    } else {
                                                      const intl50 = result(1236).intl;
                                                      if (intl50.string(result(1236).t.vbAEaA) === label) {
                                                        let mediaUrl2;
                                                        if (selectedMedia != null) {
                                                          mediaUrl2 = selectedMedia.mediaUrl;
                                                        }
                                                        if (null != mediaUrl2) {
                                                          const obj14 = { href: null };
                                                          obj14[0] = mediaUrl2;
                                                          result = result(8812).handleClick(obj14);
                                                          const resultResult35 = result(8812);
                                                        }
                                                      } else {
                                                        const intl51 = result(1236).intl;
                                                        if (intl51.string(result(1236).t["92CPQ+"]) !== label) {
                                                          const intl52 = result(1236).intl;
                                                          if (intl52.string(result(1236).t["8xHmxo"]) !== label) {
                                                            const intl53 = result(1236).intl;
                                                            if (intl53.string(result(1236).t["5IEsGx"]) === label) {
                                                              const obj15 = { message: null, channel: null, chatInputRef: null, actionSource: "action_sheet" };
                                                              obj15[0] = message;
                                                              obj15[1] = channel;
                                                              obj15[2] = chatInputRef;
                                                              result(10911)(obj15);
                                                              if ("Preview" === actionSheetSource) {
                                                                result = result(4773).transitionToMessage(channel.id, message.id);
                                                                result = globalThis;
                                                                const _setTimeout = setTimeout;
                                                                result = setTimeout(() => {
                                                                  const ComponentDispatch = id(closure_1_3[54]).ComponentDispatch;
                                                                  return ComponentDispatch.dispatch(closure_1_14.TEXTAREA_FOCUS, { channelId: id.id });
                                                                }, 500);
                                                                const resultResult36 = result(4773);
                                                              }
                                                            } else {
                                                              const intl54 = result(1236).intl;
                                                              if (intl54.string(result(1236).t.I3ltXO) === label) {
                                                                const obj16 = { message: null, source: "long-press-sheet" };
                                                                obj16[0] = message;
                                                                result(9113).openForwardModal(obj16);
                                                                const resultResult37 = result(9113);
                                                              } else {
                                                                const intl55 = result(1236).intl;
                                                                if (intl55.string(result(1236).t.rBIGBL) === label) {
                                                                  id = undefined;
                                                                  if (message != null) {
                                                                    id = message.id;
                                                                  }
                                                                  const result8 = result(7550).openThreadCreationForMobile(channel, id, "Message");
                                                                  let result9 = null == message;
                                                                  if (!result9) {
                                                                    const resultResult39 = result(4233);
                                                                    result9 = resultResult39.navigateToCreateThread(channel.guild_id, result(11).castMessageIdAsChannelId(message.id));
                                                                    const resultResult40 = result(11);
                                                                  }
                                                                  if (!result9) {
                                                                    const resultResult41 = result(1222);
                                                                    resultResult41.transitionToGuild(channel.guild_id, result(11).castMessageIdAsChannelId(message.id));
                                                                    const resultResult42 = result(11);
                                                                  }
                                                                  const resultResult38 = result(7550);
                                                                } else {
                                                                  const intl56 = result(1236).intl;
                                                                  if (intl56.string(result(1236).t["39d0Wj"]) === label) {
                                                                    const resultResult43 = result(1222);
                                                                    resultResult43.transitionToGuild(channel.guild_id, result(11).castMessageIdAsChannelId(message.id));
                                                                    const resultResult44 = result(11);
                                                                  } else {
                                                                    const intl57 = result(1236).intl;
                                                                    if (intl57.string(result(1236).t.PHjkRE) === label) {
                                                                      result(4346).hideActionSheet();
                                                                      const resultResult45 = result(4346);
                                                                      const obj17 = { channel: null, commandType: null, commandTargetId: null };
                                                                      obj17[0] = channel;
                                                                      obj17[1] = result(1954).ApplicationCommandType.MESSAGE;
                                                                      obj17[2] = message.id;
                                                                      const result10 = result(4233).navigateToContextMenuCommands(obj17);
                                                                      const resultResult46 = result(4233);
                                                                    } else {
                                                                      const intl58 = result(1236).intl;
                                                                      if (intl58.string(result(1236).t.tpxJto) === label) {
                                                                        const obj18 = { channelId: null, messageId: null, displayToast: true, source: null };
                                                                        obj18[0] = id;
                                                                        obj18[1] = id2;
                                                                        obj18[3] = result(10917).SavedMessageSources.LONG_PRESS_ACTION_SHEET;
                                                                        const result11 = result(10912).addOrUpdateSavedMessage(obj18);
                                                                        const resultResult47 = result(10912);
                                                                      } else {
                                                                        const intl59 = result(1236).intl;
                                                                        if (intl59.string(result(1236).t.SvXS1Z) === label) {
                                                                          const obj19 = { channelId: null, messageId: null, displayToast: true };
                                                                          obj19[0] = id;
                                                                          obj19[1] = id2;
                                                                          result(10912).removeSavedMessage(obj19);
                                                                          const resultResult48 = result(10912);
                                                                        } else {
                                                                          const intl60 = result(1236).intl;
                                                                          if (intl60.string(result(1236).t.mJ3P0N) === label) {
                                                                            const obj20 = { createReminder: null, channelId: null, messageId: null, onBack: null };
                                                                            obj20[0] = function createReminder(dueAt) {
                                                                              let obj = id(closure_1_3[57]);
                                                                              obj = { channelId: id2, messageId: selectedMedia, dueAt, displayToast: true, source: id(closure_1_3[58]).SavedMessageSources.LONG_PRESS_ACTION_SHEET };
                                                                              return obj.addOrUpdateSavedMessage(obj);
                                                                            };
                                                                            ({ channel_id: obj16[1], id: obj16[2] } = message);
                                                                            obj20[3] = onBack;
                                                                            result(4346).openLazy(result(2008)(10918, tmp2.paths), "MessageReminderDurationActionSheet", obj20);
                                                                            const resultResult49 = result(4346);
                                                                          } else {
                                                                            const intl61 = result(1236).intl;
                                                                            if (intl61.string(result(1236).t.vrbqs1) === label) {
                                                                              const obj21 = { createReminder: null, removeReminder: null, channelId: null, messageId: null, onBack: null };
                                                                              obj21[0] = function createReminder(dueAt) {
                                                                                let obj = id(closure_1_3[57]);
                                                                                obj = { channelId: id2, messageId: selectedMedia, dueAt, displayToast: true, source: id(closure_1_3[58]).SavedMessageSources.LONG_PRESS_ACTION_SHEET };
                                                                                return obj.addOrUpdateSavedMessage(obj);
                                                                              };
                                                                              obj21[1] = function removeReminder() {
                                                                                let obj = id(closure_1_3[57]);
                                                                                obj = { channelId: id2, messageId: selectedMedia, displayToast: true, isReminder: true };
                                                                                return obj.removeSavedMessage(obj);
                                                                              };
                                                                              ({ channel_id: obj14[2], id: obj14[3] } = message);
                                                                              obj21[4] = onBack;
                                                                              result(4346).openLazy(result(2008)(10918, tmp2.paths), "MessageReminderDurationActionSheet", obj21);
                                                                              const resultResult50 = result(4346);
                                                                            } else {
                                                                              const intl62 = result(1236).intl;
                                                                              if (intl62.string(result(1236).t.ZH7P2h) === label) {
                                                                                if (null != selectedMedia) {
                                                                                  let id1;
                                                                                  if ("embed" === selectedMedia.sourceType) {
                                                                                    id1 = selectedMedia.source.id;
                                                                                  }
                                                                                  id2 = undefined;
                                                                                  if ("attachment" === selectedMedia.sourceType) {
                                                                                    id2 = selectedMedia.source.id;
                                                                                  }
                                                                                  let result12 = undefined !== id1 || undefined !== id2;
                                                                                  if (!result12) {
                                                                                    result12 = result(5024).messageHasObscurableMedia(message);
                                                                                    const resultResult51 = result(5024);
                                                                                  }
                                                                                  if (result12) {
                                                                                    const obj22 = { channelId: null, messageId: null, attachmentId: null, embedId: null };
                                                                                    ({ channel_id: obj12[0], id: obj12[1] } = message);
                                                                                    obj22[2] = id2;
                                                                                    obj22[3] = id1;
                                                                                    result(4346).openLazy(result(2008)(10907, tmp2.paths), closure_20, obj22);
                                                                                    const resultResult52 = result(4346);
                                                                                  }
                                                                                }
                                                                              } else {
                                                                                const intl63 = result(1236).intl;
                                                                                if (intl63.string(result(1236).t.grdwwt) === label) {
                                                                                  ({ channel_id: obj9[0], id: obj9[1] } = message);
                                                                                  result(10922).endPollEarly({ channelId: null, messageId: null });
                                                                                  const obj23 = { channelId: null, messageId: null };
                                                                                  const resultResult53 = result(10922);
                                                                                } else {
                                                                                  const intl64 = result(1236).intl;
                                                                                  if (intl64.string(result(1236).t.Rjezbz) === label) {
                                                                                    const obj24 = { message: null, guildId: null, onBack: null };
                                                                                    obj24[0] = message;
                                                                                    obj24[1] = guild_id;
                                                                                    obj24[2] = onBack;
                                                                                    result(4346).openLazy(result(2008)(10929, tmp2.paths), "AppInteractionInfoActionSheet", obj24);
                                                                                    const resultResult54 = result(4346);
                                                                                  } else {
                                                                                    const intl65 = result(1236).intl;
                                                                                    if (intl65.string(result(1236).t["4sxKOb"]) !== label) {
                                                                                      const intl66 = result(1236).intl;
                                                                                      if (intl66.string(result(1236).t.wUIMqa) !== label) {
                                                                                        const intl67 = result(1236).intl;
                                                                                        if (intl67.string(result(1236).t.kFwAsa) === label) {
                                                                                          id2 = message;
                                                                                          result = null;
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
                                                                                            const intl3 = result(1236).intl;
                                                                                            obj25[0] = intl3.string(result(1236).t.CbTIEo);
                                                                                            const intl4 = result(1236).intl;
                                                                                            obj25[1] = intl4.string(result(1236).t.faHmO3);
                                                                                            const intl5 = result(1236).intl;
                                                                                            obj25[2] = intl5.string(result(1236).t["ETE/oC"]);
                                                                                            const intl6 = result(1236).intl;
                                                                                            obj25[3] = intl6.string(result(1236).t.kFwAsa);
                                                                                            obj25[4] = function onConfirm() {
                                                                                              id = selectedMedia.source.id;
                                                                                              const attachments = id2.attachments;
                                                                                              const found = attachments.filter((id) => id.id !== id);
                                                                                              const result = id2(closure_1_3[17]).patchMessageAttachments(id, id2.id, found);
                                                                                            };
                                                                                            result(4832).show(obj25);
                                                                                            const resultResult55 = result(4832);
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
                                                                                    const intl7 = result(1236).intl;
                                                                                    obj26[0] = intl7.string(result(1236).t.VL1KOk);
                                                                                    const intl8 = result(1236).intl;
                                                                                    obj26[1] = intl8.string(result(1236).t["vXZ+Fo"]);
                                                                                    const intl9 = result(1236).intl;
                                                                                    obj26[2] = intl9.string(result(1236).t["ETE/oC"]);
                                                                                    const intl10 = result(1236).intl;
                                                                                    obj26[3] = intl10.string(result(1236).t.YEHppG);
                                                                                    obj26[4] = function onConfirm() {
                                                                                      id2(closure_1_3[17]).suppressEmbeds(id, id2);
                                                                                    };
                                                                                    result(4832).show(obj26);
                                                                                    const resultResult56 = result(4832);
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
                                                          result(7205).copy(mediaUrl3);
                                                          const resultResult57 = result(7205);
                                                          result(4096).presentLinkCopied();
                                                          flag = true;
                                                          const resultResult58 = result(4096);
                                                        }
                                                        if (flag) {
                                                          let hostname;
                                                          if (null != mediaUrl3) {
                                                            hostname = result(8815).getHostname(mediaUrl3);
                                                            const resultResult60 = result(8815);
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
                                                          result(698).track(constants.CONTEXT_MENU_MEDIA_LINK_COPIED, obj27);
                                                          const resultResult59 = result(698);
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
      result = null;
      if (onActionExecuted != null) {
        result = onActionExecuted(label);
      }
    }
    if (resultResult61.canReportMessage(message)) {
      result = result(8175).showReportModalForMessage(message, "mobile_message_action_sheet");
      const resultResult62 = result(8175);
    }
    resultResult61 = result(7305);
  }
};