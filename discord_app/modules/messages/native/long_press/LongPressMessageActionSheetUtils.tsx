// === Module 11667: LongPressMessageActionSheetUtils ===

// Module 11667 (LongPressMessageActionSheetUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import router_utils from "router_utils" /* 1100 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1109 */;
import util from "util" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import ToastUtils from "ToastUtils" /* 4258 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4272 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4417 */;
import ChannelUtils from "ChannelUtils" /* 4705 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 4904 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7182 */;
import ClipboardUtils from "ClipboardUtils" /* 7190 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7456 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 7765 */;
import MediaSourceUtil from "MediaSourceUtil" /* 8263 */;
import ForumComposerModalActionCreators from "ForumComposerModalActionCreators" /* 10251 */;
import PendingReplyActionCreators from "PendingReplyActionCreators" /* 11669 */;
import ChannelPinActionCreatorsDefault from "ChannelPinActionCreators" /* 11674 */;
import SavedMessageHelpers from "SavedMessageHelpers" /* 11704 */;
import SavedMessageSources from "SavedMessageSources" /* 11709 */;
import noop from "module_19" /* 19 */;
import PendingReplyStore from "PendingReplyStore" /* 7680 */;
import EditMessageStore from "EditMessageStore" /* 7681 */;
import UploadStore from "UploadStore" /* 7838 */;
import UserStore from "UserStore" /* 1371 */;
import SendMessageOptionsStore from "SendMessageOptionsStore" /* 11668 */;

require = fn;
function handleEdit(id, isForumPost, current, source) {
  let flag = arg4;
  if (arg4 === undefined) {
    flag = false;
  }
  if (isForumPost.isForumPost()) {
    let obj = SnowflakeUtilsDefault;
    if (isForumPost.id === obj.castMessageIdAsChannelId(id.id)) {
      if (null != isForumPost.parent_id) {
        PendingReplyActionCreators.deletePendingReply(isForumPost.id);
        obj = { guildId: null, parentChannelId: null, threadId: null, messageId: null, isEdit: true, analyticsLocations: null, analyticsLocationObject: null };
        ({ guild_id: obj9.guildId, parent_id: obj9.parentChannelId, id: obj9.threadId } = isForumPost);
        obj.messageId = id.id;
        const items = [AnalyticsLocationDefault.FORUM_CHANNEL, AnalyticsLocationDefault.GUILD_CHANNEL];
        obj.analyticsLocations = items;
        obj = { page: constants3.GUILD_CHANNEL, section: constants4.FORUM_POST_HEADER, object: constants2.CONTEXT_MENU };
        obj.analyticsLocationObject = obj;
        const result = ForumComposerModalActionCreators.openCreateForumPostModal(obj);
      }
    }
  }
  if (flag) {
    if ("message_swipe" === source) {
      if (EditMessageStore.isEditing(isForumPost.id, id.id)) {
        const currentUser = UserStore.getCurrentUser();
        let obj1 = { message_id: id.id, channel_id: null, guild_id: null, context_action: "edit", reason: "swipe_edit_undo", is_own_message: null };
        ({ id: obj5.channel_id, guild_id: obj5.guild_id } = isForumPost);
        let tmp15 = null != currentUser;
        if (tmp15) {
          tmp15 = currentUser.id === id.author.id;
        }
        obj1.is_own_message = tmp15;
        AnalyticsUtilsDefault.track(constants.CHAT_CONTEXT_BAR_ACTION_CANCELED, obj1);
        MessageActionCreatorsDefault.endEditMessage(isForumPost.id);
        if (current != null) {
          const current2 = current.current;
          if (current2 != null) {
            current2.dismissKeyboard();
          }
        }
        const tmp11Result = MessageActionCreatorsDefault;
      }
    }
  }
  const pendingReply = PendingReplyStore.getPendingReply(isForumPost.id);
  if (null != pendingReply) {
    const currentUser1 = UserStore.getCurrentUser();
    let obj2 = { message_id: id.id, channel_id: null, guild_id: null, context_action: "reply", reason: null, is_own_message: null };
    ({ id: obj12.channel_id, guild_id: obj12.guild_id } = isForumPost);
    if ("message_swipe" === source) {
      let str3 = "swipe_edit";
    } else if ("action_sheet" === source) {
      str3 = "action_sheet_edit";
    } else {
      str3 = "pressed_cancel";
    }
    obj2.reason = str3;
    obj2.is_own_message = null != currentUser1 && currentUser1.id === pendingReply.message.author.id;
    AnalyticsUtilsDefault.track(constants.CHAT_CONTEXT_BAR_ACTION_CANCELED, obj2);
  }
  obj1 = PendingReplyActionCreators;
  obj1.deletePendingReply(isForumPost.id);
  obj2 = MessageActionCreatorsDefault;
  const result1 = obj2.startEditMessageRecord(isForumPost.id, id, source);
  if (current != null) {
    current = current.current;
    if (current != null) {
      current.openSystemKeyboard();
    }
  }
}
const isMessageComponentsV2 = fn(4210).isMessageComponentsV2;
const Constants = fn(1074);
({ AnalyticEvents: c10, AnalyticsObjects: closure_11, AnalyticsPages: closure_12, AnalyticsSections: map1, ComponentActions: closure_14, GIF_RE_IOS: closure_15, MediaType: closure_16, MessageStates: closure_17, MessageTypes: closure_18 } = Constants);
const isStaticChannelRoute = fn(1964).isStaticChannelRoute;
let closure_20 = fn(7601).EXPLICIT_MEDIA_FALSE_POSITIVE_ACTION_SHEET_KEY;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/long_press/LongPressMessageActionSheetUtils.tsx");

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
export const handleCreateThread = function handleCreateThread(guild_id, id) {
  let str = Message;
  if (Message === undefined) {
    str = "Message";
  }
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  const result = ThreadActionCreatorsDefault.openThreadCreationForMobile(guild_id, id, str);
  let result1 = null == id;
  if (!result1) {
    let tmpResult = SnowflakeUtilsDefault;
    result1 = NavigationRouteUtils.navigateToCreateThread(guild_id.guild_id, tmpResult.castMessageIdAsChannelId(id.id));
  }
  if (!result1) {
    tmpResult = SnowflakeUtilsDefault;
    router_utils.transitionToGuild(guild_id.guild_id, tmpResult.castMessageIdAsChannelId(id.id));
  }
};
export const handleCopyMessageLink = function handleCopyMessageLink(channel, message_id) {
  const obj = { message_id, channel: channel.id };
  obj.track(constants.MESSAGE_LINK_COPIED, obj);
  const channelPermalink = ChannelUtils.getChannelPermalink(channel.guild_id, channel.id, message_id);
  if (null != channelPermalink) {
    let tmp3Result = ClipboardUtils;
    tmp3Result.copy(channelPermalink);
    tmp3Result = ToastUtils;
    tmp3Result.presentLinkCopied();
  }
};
export const handleCopyId = function handleCopyId(id) {
  ClipboardUtils.copy(id);
  const result = ToastUtils.presentMessageIdCopied();
};
export const longPressMessageOptionHandler = function longPressMessageOptionHandler(analyticsLocations) {
  ({ label, message, channel } = analyticsLocations);
  ({ chatInputRef, selectedMedia, actionSheetSource, onActionExecuted, onBack, disabled } = analyticsLocations);
  if (disabled === undefined) {
    disabled = false;
  }
  id = undefined;
  ({ guild_id, id } = channel);
  let id2 = message.id;
  if (!disabled) {
    let intl = channel(1114).intl;
    if (label !== intl.string(channel(1114).t.PHjkRE)) {
      let obj = id(4527);
      obj.hideActionSheet();
    }
    let intl2 = channel(1114).intl;
    if (intl2.string(channel(1114).t["+78Pfm"]) !== label) {
      const intl26 = channel(1114).intl;
      if (intl26.string(channel(1114).t.n5EBAJ) !== label) {
        const intl27 = channel(1114).intl;
        if (intl27.string(id(2528)["1D+vqy"]) === label) {
          let tmpResult = channel(7276);
          if (tmpResult.canReportMessageToMods(message)) {
            tmpResult = channel(8629);
            let result = tmpResult.showReportToModMessageModal(message);
          }
        } else {
          const intl28 = channel(1114).intl;
          if (intl28.string(channel(1114).t.k5WiPf) === label) {
            if (message.type === constants8.THREAD_STARTER_MESSAGE) {
              if (null != message.messageReference) {
                const guild_id2 = message.messageReference.guild_id;
                if (null != guild_id2) {
                  channel(1100).transitionToGuild(guild_id2, tmp146, tmp145);
                  const tmpResult1 = channel(1100);
                }
              }
            }
          } else {
            const intl29 = channel(1114).intl;
            if (intl29.string(channel(1114).t["+TSRGD"]) === label) {
              channel(4571).transitionToMessage(channel.id, message.id);
              const tmpResult2 = channel(4571);
            } else {
              const intl30 = channel(1114).intl;
              if (intl30.string(channel(1114).t.zBoHlf) === label) {
                channel(7190).copy(id2);
                const tmpResult3 = channel(7190);
                const result1 = channel(4258).presentMessageIdCopied();
                const tmpResult4 = channel(4258);
              } else {
                const intl31 = channel(1114).intl;
                if (intl31.string(channel(1114).t.P8tvKG) === label) {
                  const user = UserStore.getUser(message.author.id);
                  if (null != user) {
                    if (chatInputRef != null) {
                      const current7 = chatInputRef.current;
                      if (current7 != null) {
                        let tmp130Result = tmp130(4404);
                        const _HermesInternal = HermesInternal;
                        current7.insertText("@" + tmp130Result.getUserTag(user, { decoration: "never" }), null, true);
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
                  const intl32 = channel(1114).intl;
                  if (intl32.string(channel(1114).t.cduTBL) === label) {
                    obj = { userId: message.author.id, channelId: id, messageId: message.id, sourceAnalyticsLocations: analyticsLocations.analyticsLocations };
                    tmp130(8179)(obj);
                  } else {
                    const intl33 = channel(1114).intl;
                    if (intl33.string(channel(1114).t.fsBWmS) === label) {
                      handleEdit(message, channel, chatInputRef, "action_sheet");
                    } else {
                      const intl34 = channel(1114).intl;
                      if (intl34.string(channel(1114).t.MFGE51) === label) {
                        closure_135_0 = id;
                        closure_135_1 = id2;
                        if (chatInputRef != null) {
                          const current6 = chatInputRef.current;
                          if (current6 != null) {
                            current6.dismissKeyboard();
                          }
                        }
                        tmp130Result = tmp130(4904);
                        obj = { title: null, children: null, cancelText: null, confirmText: null, onConfirm: null };
                        const intl23 = channel(1114).intl;
                        obj.title = intl23.string(channel(1114).t.aIz1oV);
                        let obj1 = { channelId: id };
                        obj.children = jsx(tmp130(11670), { channelId: id });
                        const intl24 = channel(1114).intl;
                        obj.cancelText = intl24.string(channel(1114).t["ETE/oC"]);
                        const intl25 = channel(1114).intl;
                        obj.confirmText = intl25.string(channel(1114).t["cY+Oob"]);
                        obj.onConfirm = function onConfirm() {
                          return MessageActionCreatorsDefault.crosspostMessage(channel, id);
                        };
                        tmp130Result.show(obj);
                      } else {
                        const intl35 = channel(1114).intl;
                        if (intl35.string(channel(1114).t.CvQ18w) === label) {
                          closure_134_0 = channel;
                          closure_134_1 = message;
                          if (chatInputRef != null) {
                            const current5 = chatInputRef.current;
                            if (current5 != null) {
                              current5.dismissKeyboard();
                            }
                          }
                          let obj2 = { title: null, body: null, children: null, cancelText: null, confirmText: null, onConfirm: null };
                          const intl19 = channel(1114).intl;
                          obj2.title = intl19.string(channel(1114).t.CvQ18w);
                          const intl20 = channel(1114).intl;
                          obj2.body = intl20.string(channel(1114).t.WG5dyo);
                          let obj3 = { message };
                          obj2.children = jsx(tmp130(11673), { message });
                          const intl21 = channel(1114).intl;
                          obj2.cancelText = intl21.string(channel(1114).t.gm1Vej);
                          const intl22 = channel(1114).intl;
                          obj2.confirmText = intl22.string(channel(1114).t.p89ACt);
                          obj2.onConfirm = function onConfirm() {
                            ChannelPinActionCreatorsDefault.pinMessage(channel, id.id);
                            const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
                            const intl = util.intl;
                            AccessibilityAnnouncer.announce(intl.string(util.t.sCfDDl));
                          };
                          tmp130(4904).show(obj2);
                          const tmp130Result1 = tmp130(4904);
                        } else {
                          const intl36 = channel(1114).intl;
                          if (intl36.string(channel(1114).t["Bse+F/"]) === label) {
                            closure_133_0 = channel;
                            closure_133_1 = message;
                            if (chatInputRef != null) {
                              const current4 = chatInputRef.current;
                              if (current4 != null) {
                                current4.dismissKeyboard();
                              }
                            }
                            const obj4 = { title: null, body: null, children: null, cancelText: null, confirmText: null, onConfirm: null };
                            const intl15 = channel(1114).intl;
                            obj4.title = intl15.string(channel(1114).t["Bse+F/"]);
                            const intl16 = channel(1114).intl;
                            obj4.body = intl16.string(channel(1114).t.NjEPp7);
                            const obj5 = { message };
                            obj4.children = jsx(tmp130(11673), { message });
                            const intl17 = channel(1114).intl;
                            obj4.cancelText = intl17.string(channel(1114).t.gm1Vej);
                            const intl18 = channel(1114).intl;
                            obj4.confirmText = intl18.string(channel(1114).t.p89ACt);
                            obj4.onConfirm = function onConfirm() {
                              return ChannelPinActionCreatorsDefault.unpinMessage(channel, id.id);
                            };
                            tmp130(4904).show(obj4);
                            const tmp130Result2 = tmp130(4904);
                          } else {
                            const intl37 = channel(1114).intl;
                            if (intl37.string(channel(1114).t["lE/PG3"]) === label) {
                              const result2 = tmp130(7456).patchMessageGuildOfficial(id, id2, true);
                              const tmp130Result3 = tmp130(7456);
                            } else {
                              const intl38 = channel(1114).intl;
                              if (intl38.string(channel(1114).t["2km5Gf"]) === label) {
                                const result3 = tmp130(7456).patchMessageGuildOfficial(id, id2, false);
                                const tmp130Result4 = tmp130(7456);
                              } else {
                                const intl39 = channel(1114).intl;
                                if (intl39.string(channel(1114).t.xwMqD7) === label) {
                                  if (message.state === constants7.SENDING) {
                                    tmp130(7834).cancelRequest(id2);
                                    const tmp130Result5 = tmp130(7834);
                                    tmp130(7456).deleteMessage(id, id2, true);
                                    const tmp130Result6 = tmp130(7456);
                                  } else if (message.state === tmp86.SEND_FAILED) {
                                    tmp130(7456).deleteMessage(id, id2, true);
                                    const tmp130Result7 = tmp130(7456);
                                  } else {
                                    closure_132_0 = id;
                                    closure_132_1 = message;
                                    if (chatInputRef != null) {
                                      const current3 = chatInputRef.current;
                                      if (current3 != null) {
                                        current3.dismissKeyboard();
                                      }
                                    }
                                    const obj6 = { title: null, body: null, children: null, cancelText: null, confirmText: null, onConfirm: null };
                                    const intl11 = channel(1114).intl;
                                    obj6.title = intl11.string(channel(1114).t.MWMcg7);
                                    const intl12 = channel(1114).intl;
                                    obj6.body = intl12.string(channel(1114).t.AMvpS4);
                                    const obj7 = { message };
                                    obj6.children = jsx(tmp130(11673), { message });
                                    const intl13 = channel(1114).intl;
                                    obj6.cancelText = intl13.string(channel(1114).t.gm1Vej);
                                    const intl14 = channel(1114).intl;
                                    obj6.confirmText = intl14.string(channel(1114).t.p89ACt);
                                    obj6.onConfirm = function onConfirm() {
                                      MessageActionCreatorsDefault.deleteMessage(channel, id.id, false);
                                    };
                                    tmp130(4904).show(obj6);
                                    const tmp130Result8 = tmp130(4904);
                                  }
                                  const obj8 = { channel_id: id, guild_id, action_sheet_option: "delete", message_state: message.state };
                                  tmp130(4740).trackWithMetadata(constants.MESSAGE_ACTION_SHEET_OPTION_PRESSED, obj8);
                                  const tmp130Result9 = tmp130(4740);
                                } else {
                                  const intl40 = channel(1114).intl;
                                  if (intl40.string(channel(1114).t["5911Lb"]) === label) {
                                    const uploaderFileForMessageId = UploadStore.getUploaderFileForMessageId(message.id);
                                    let items;
                                    if (uploaderFileForMessageId != null) {
                                      items = uploaderFileForMessageId.items;
                                    }
                                    tmp130(11676)(channel, message, items, SendMessageOptionsStore.getOptions(message.id));
                                    const tmp130Result10 = tmp130(11676);
                                    const obj9 = { channel_id: id, guild_id, action_sheet_option: "retry", message_state: message.state };
                                    tmp130(4740).trackWithMetadata(constants.MESSAGE_ACTION_SHEET_OPTION_PRESSED, obj9);
                                    const tmp130Result11 = tmp130(4740);
                                  } else {
                                    const intl41 = channel(1114).intl;
                                    if (intl41.string(channel(1114).t.JrGD7E) === label) {
                                      const contentMessage = message.getContentMessage();
                                      if (isMessageComponentsV2(contentMessage)) {
                                        const allTextDisplayContent = channel(4785).getAllTextDisplayContent(contentMessage.components);
                                        if (null != allTextDisplayContent) {
                                          channel(7190).copy(allTextDisplayContent);
                                          const tmpResult6 = channel(7190);
                                        }
                                        const tmpResult5 = channel(4785);
                                      } else {
                                        channel(7190).copy(contentMessage.content);
                                        const tmpResult7 = channel(7190);
                                      }
                                      channel(4258).presentMessageCopied();
                                      const tmpResult8 = channel(4258);
                                    } else {
                                      const intl42 = channel(1114).intl;
                                      if (intl42.string(channel(1114).t.lfIHs4) === label) {
                                        const result4 = channel(11254).handleAddNewReactions(channel, id2);
                                        const tmpResult9 = channel(11254);
                                      } else {
                                        const intl43 = channel(1114).intl;
                                        if (intl43.string(channel(1114).t.gHp0C4) === label) {
                                          if ("Preview" === actionSheetSource) {
                                            const result5 = channel(11254).handleViewPreviewReactions(id2, id);
                                            const tmpResult10 = channel(11254);
                                          } else {
                                            const obj10 = { messageId: id2, channelId: id, location: null };
                                            const obj11 = { object: constants2.MESSAGE_ACTION_SHEET };
                                            obj10.location = obj11;
                                            channel(11254).handleViewReactions(obj10);
                                            const tmpResult11 = channel(11254);
                                          }
                                        } else {
                                          const intl44 = channel(1114).intl;
                                          if (intl44.string(channel(1114).t.ZbtGBm) === label) {
                                            const result6 = channel(11254).handleRemoveAllReactions(id, id2);
                                            const tmpResult12 = channel(11254);
                                          } else {
                                            const intl45 = channel(1114).intl;
                                            if (intl45.string(channel(1114).t["g33r/P"]) === label) {
                                              const obj12 = { recipientIds: message.author.id };
                                              tmp130(4573).openPrivateChannel(obj12);
                                              const tmp130Result12 = tmp130(4573);
                                            } else {
                                              const intl46 = channel(1114).intl;
                                              if (intl46.string(channel(1114).t.Xrt5Po) === label) {
                                                const obj13 = { message_id: id2, channel: channel.id };
                                                tmp130(1242).track(constants.MESSAGE_LINK_COPIED, obj13);
                                                const tmp130Result13 = tmp130(1242);
                                                const channelPermalink = channel(4705).getChannelPermalink(channel.guild_id, channel.id, id2);
                                                if (null != channelPermalink) {
                                                  channel(7190).copy(channelPermalink);
                                                  const tmpResult14 = channel(7190);
                                                  channel(4258).presentLinkCopied();
                                                  const tmpResult15 = channel(4258);
                                                }
                                                const tmpResult13 = channel(4705);
                                              } else {
                                                const intl47 = channel(1114).intl;
                                                if (intl47.string(channel(1114).t.RpE9k7) === label) {
                                                  tmp130(10247)(id, id2);
                                                } else {
                                                  const intl48 = channel(1114).intl;
                                                  if (intl48.string(channel(1114).t["S/xNKV"]) === label) {
                                                    closure_131_0 = selectedMedia;
                                                    closure_131_1 = id;
                                                    let mediaUrl;
                                                    if (selectedMedia != null) {
                                                      mediaUrl = selectedMedia.mediaUrl;
                                                    }
                                                    if (null != mediaUrl) {
                                                      closure_131_2 = channel(4710).urlMatchesFileExtension(selectedMedia.mediaUrl, closure_15);
                                                      const tmpResult16 = channel(4710);
                                                      const toURLSafeResult = tmp130(1365).toURLSafe(selectedMedia.mediaUrl);
                                                      if (null != toURLSafeResult) {
                                                        if (obj40.isRefreshableAttachmentUrl(toURLSafeResult)) {
                                                          let result7 = tmp53(9942).maybeRefreshAttachmentUrl(selectedMedia.mediaUrl);
                                                          const tmp53Result = tmp53(9942);
                                                        }
                                                        obj40 = id2(9942);
                                                        tmp53 = id2;
                                                        result7.then((result) => MediaSourceUtil.downloadMediaAssetWithContentType(result, id2 ? constants6.GIF : constants6.IMAGE, channel.contentType)).then(() => {
                                                          let obj = ToastUtils;
                                                          if (id2) {
                                                            obj.presentGifSaved();
                                                          } else {
                                                            obj.presentImageSaved();
                                                          }
                                                          const tmp4 = isStaticChannelRoute(id);
                                                          let tmp5;
                                                          if (!tmp4) {
                                                            tmp5 = id;
                                                          }
                                                          obj = { channel_id: tmp5, channel_static_route: null };
                                                          let tmp6;
                                                          if (tmp4) {
                                                            tmp6 = id;
                                                          }
                                                          obj = { channel_static_route: tmp6 };
                                                          const merged = Object.assign(obj);
                                                          AnalyticsUtilsDefault.track(constants.CONTEXT_MENU_IMAGE_SAVED, obj);
                                                        }, () => {
                                                          let obj = { title: null, body: null, isDismissable: true };
                                                          const intl = util.intl;
                                                          obj.title = intl.string(util.t.cV3alD);
                                                          const intl2 = util.intl;
                                                          obj.body = intl2.string(util.t.r4Zjzv);
                                                          obj.show(obj);
                                                          const tmp3 = isStaticChannelRoute(id);
                                                          let tmp4;
                                                          if (!tmp3) {
                                                            tmp4 = id;
                                                          }
                                                          obj = { channel_id: tmp4, channel_static_route: null };
                                                          let tmp5;
                                                          if (tmp3) {
                                                            tmp5 = id;
                                                          }
                                                          obj.channel_static_route = tmp5;
                                                          const merged = Object.assign(obj);
                                                          AnalyticsUtilsDefault.track(constants.CONTEXT_MENU_IMAGE_SAVE_FAILED, {});
                                                          const obj1 = {};
                                                        });
                                                        const nextPromise = result7.then((result) => MediaSourceUtil.downloadMediaAssetWithContentType(result, id2 ? constants6.GIF : constants6.IMAGE, channel.contentType));
                                                      }
                                                      result7 = Promise.resolve(selectedMedia.mediaUrl);
                                                      const tmp130Result14 = tmp130(1365);
                                                    }
                                                  } else {
                                                    const intl49 = channel(1114).intl;
                                                    if (intl49.string(channel(1114).t.JVuuz3) === label) {
                                                      let mediaUrl1;
                                                      if (selectedMedia != null) {
                                                        mediaUrl1 = selectedMedia.mediaUrl;
                                                      }
                                                      if (null != mediaUrl1) {
                                                        const result8 = channel(8263).downloadMediaAssetWithContentType(selectedMedia.mediaUrl, constants6.VIDEO, selectedMedia.contentType);
                                                        result8.then(() => {
                                                          channel(4258).presentVideoSaved();
                                                        }, () => {
                                                          id(4904);
                                                          const obj = { title: null, body: null, isDismissable: true };
                                                          const intl = channel(1114).intl;
                                                          obj.title = intl.string(channel(1114).t.cV3alD);
                                                          const intl2 = channel(1114).intl;
                                                          obj.body = intl2.string(channel(1114).t.r4Zjzv);
                                                          obj.show(obj);
                                                        });
                                                        const tmpResult17 = channel(8263);
                                                      }
                                                    } else {
                                                      const intl50 = channel(1114).intl;
                                                      if (intl50.string(channel(1114).t.vbAEaA) === label) {
                                                        let mediaUrl2;
                                                        if (selectedMedia != null) {
                                                          mediaUrl2 = selectedMedia.mediaUrl;
                                                        }
                                                        if (null != mediaUrl2) {
                                                          const obj14 = { href: mediaUrl2 };
                                                          channel(8370).handleClick(obj14);
                                                          const tmpResult18 = channel(8370);
                                                        }
                                                      } else {
                                                        const intl51 = channel(1114).intl;
                                                        if (intl51.string(channel(1114).t["92CPQ+"]) !== label) {
                                                          const intl52 = channel(1114).intl;
                                                          if (intl52.string(channel(1114).t["8xHmxo"]) !== label) {
                                                            const intl53 = channel(1114).intl;
                                                            if (intl53.string(channel(1114).t["5IEsGx"]) === label) {
                                                              const obj15 = { message, channel, chatInputRef, actionSource: "action_sheet" };
                                                              tmp130(11679)(obj15);
                                                              if ("Preview" === actionSheetSource) {
                                                                channel(4571).transitionToMessage(channel.id, message.id);
                                                                const _setTimeout = setTimeout;
                                                                const timerId = setTimeout(() => {
                                                                  const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
                                                                  return ComponentDispatch.dispatch(constants5.TEXTAREA_FOCUS, { channelId: channel.id });
                                                                }, 500);
                                                                const tmpResult19 = channel(4571);
                                                              }
                                                            } else {
                                                              const intl54 = channel(1114).intl;
                                                              if (intl54.string(channel(1114).t.I3ltXO) === label) {
                                                                const obj16 = { message, source: "long-press-sheet" };
                                                                channel(11680).openForwardModal(obj16);
                                                                const tmpResult20 = channel(11680);
                                                              } else {
                                                                const intl55 = channel(1114).intl;
                                                                if (intl55.string(channel(1114).t.rBIGBL) === label) {
                                                                  id = undefined;
                                                                  if (message != null) {
                                                                    id = message.id;
                                                                  }
                                                                  const result9 = tmp130(7765).openThreadCreationForMobile(channel, id, "Message");
                                                                  let result10 = null == message;
                                                                  if (!result10) {
                                                                    const tmpResult21 = channel(4417);
                                                                    result10 = tmpResult21.navigateToCreateThread(channel.guild_id, tmp130(11).castMessageIdAsChannelId(message.id));
                                                                    const tmp130Result16 = tmp130(11);
                                                                  }
                                                                  if (!result10) {
                                                                    const tmpResult22 = channel(1100);
                                                                    tmpResult22.transitionToGuild(channel.guild_id, tmp130(11).castMessageIdAsChannelId(message.id));
                                                                    const tmp130Result17 = tmp130(11);
                                                                  }
                                                                  const tmp130Result15 = tmp130(7765);
                                                                } else {
                                                                  const intl56 = channel(1114).intl;
                                                                  if (intl56.string(channel(1114).t["39d0Wj"]) === label) {
                                                                    const tmpResult23 = channel(1100);
                                                                    tmpResult23.transitionToGuild(channel.guild_id, tmp130(11).castMessageIdAsChannelId(message.id));
                                                                    const tmp130Result18 = tmp130(11);
                                                                  } else {
                                                                    const intl57 = channel(1114).intl;
                                                                    if (intl57.string(channel(1114).t.PHjkRE) === label) {
                                                                      tmp130(4527).hideActionSheet();
                                                                      const tmp130Result19 = tmp130(4527);
                                                                      const obj17 = { channel, commandType: channel(1894).ApplicationCommandType.MESSAGE, commandTargetId: message.id };
                                                                      const result11 = channel(4417).navigateToContextMenuCommands(obj17);
                                                                      const tmpResult24 = channel(4417);
                                                                    } else {
                                                                      const intl58 = channel(1114).intl;
                                                                      if (intl58.string(channel(1114).t.tpxJto) === label) {
                                                                        const obj18 = { channelId: id, messageId: id2, displayToast: true, source: channel(11709).SavedMessageSources.LONG_PRESS_ACTION_SHEET };
                                                                        const result12 = channel(11704).addOrUpdateSavedMessage(obj18);
                                                                        const tmpResult25 = channel(11704);
                                                                      } else {
                                                                        const intl59 = channel(1114).intl;
                                                                        if (intl59.string(channel(1114).t.SvXS1Z) === label) {
                                                                          const obj19 = { channelId: id, messageId: id2, displayToast: true };
                                                                          channel(11704).removeSavedMessage(obj19);
                                                                          const tmpResult26 = channel(11704);
                                                                        } else {
                                                                          const intl60 = channel(1114).intl;
                                                                          if (intl60.string(channel(1114).t.mJ3P0N) === label) {
                                                                            const obj20 = {
                                                                              createReminder(dueAt) {
                                                                                                                                                          const obj = { channelId: id, messageId: id2, dueAt, displayToast: true, source: SavedMessageSources.SavedMessageSources.LONG_PRESS_ACTION_SHEET };
                                                                                                                                                          return obj.addOrUpdateSavedMessage(obj);
                                                                                                                                                        },
                                                                              channelId: null,
                                                                              messageId: null,
                                                                              onBack: null
                                                                            };
                                                                            ({ channel_id: obj16.channelId, id: obj16.messageId } = message);
                                                                            obj20.onBack = onBack;
                                                                            tmp130(4527).openLazy(channel(1896)(11710, dependencyMap.paths), "MessageReminderDurationActionSheet", obj20);
                                                                            const tmp130Result20 = tmp130(4527);
                                                                          } else {
                                                                            const intl61 = channel(1114).intl;
                                                                            if (intl61.string(channel(1114).t.vrbqs1) === label) {
                                                                              const obj21 = {
                                                                                createReminder(dueAt) {
                                                                                                                                                              const obj = { channelId: id, messageId: id2, dueAt, displayToast: true, source: SavedMessageSources.SavedMessageSources.LONG_PRESS_ACTION_SHEET };
                                                                                                                                                              return obj.addOrUpdateSavedMessage(obj);
                                                                                                                                                            },
                                                                                removeReminder() {
                                                                                                                                                              const obj = { channelId: id, messageId: id2, displayToast: true, isReminder: true };
                                                                                                                                                              return obj.removeSavedMessage(obj);
                                                                                                                                                            },
                                                                                channelId: null,
                                                                                messageId: null,
                                                                                onBack: null
                                                                              };
                                                                              ({ channel_id: obj14.channelId, id: obj14.messageId } = message);
                                                                              obj21.onBack = onBack;
                                                                              tmp130(4527).openLazy(channel(1896)(11710, dependencyMap.paths), "MessageReminderDurationActionSheet", obj21);
                                                                              const tmp130Result21 = tmp130(4527);
                                                                            } else {
                                                                              const intl62 = channel(1114).intl;
                                                                              if (intl62.string(channel(1114).t.ZH7P2h) === label) {
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
                                                                                    result13 = channel(7292).messageHasObscurableMedia(message);
                                                                                    const tmpResult27 = channel(7292);
                                                                                  }
                                                                                  if (result13) {
                                                                                    const obj22 = { channelId: null, messageId: null, attachmentId: null, embedId: null };
                                                                                    ({ channel_id: obj12.channelId, id: obj12.messageId } = message);
                                                                                    obj22.attachmentId = id2;
                                                                                    obj22.embedId = id1;
                                                                                    tmp130(4527).openLazy(channel(1896)(11677, dependencyMap.paths), closure_20, obj22);
                                                                                    const tmp130Result22 = tmp130(4527);
                                                                                  }
                                                                                }
                                                                              } else {
                                                                                const intl63 = channel(1114).intl;
                                                                                if (intl63.string(channel(1114).t.grdwwt) === label) {
                                                                                  ({ channel_id: obj9.channelId, id: obj9.messageId } = message);
                                                                                  tmp130(11714).endPollEarly({ channelId: null, messageId: null });
                                                                                  const obj23 = { channelId: null, messageId: null };
                                                                                  const tmp130Result23 = tmp130(11714);
                                                                                } else {
                                                                                  const intl64 = channel(1114).intl;
                                                                                  if (intl64.string(channel(1114).t.Rjezbz) === label) {
                                                                                    const obj24 = { message, guildId: guild_id, onBack };
                                                                                    tmp130(4527).openLazy(channel(1896)(11727, dependencyMap.paths), "AppInteractionInfoActionSheet", obj24);
                                                                                    const tmp130Result24 = tmp130(4527);
                                                                                  } else {
                                                                                    const intl65 = channel(1114).intl;
                                                                                    if (intl65.string(channel(1114).t["4sxKOb"]) !== label) {
                                                                                      const intl66 = channel(1114).intl;
                                                                                      if (intl66.string(channel(1114).t.wUIMqa) !== label) {
                                                                                        const intl67 = channel(1114).intl;
                                                                                        if (intl67.string(channel(1114).t.kFwAsa) === label) {
                                                                                          closure_129_0 = id;
                                                                                          closure_129_1 = message;
                                                                                          closure_129_2 = selectedMedia;
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
                                                                                            const intl3 = channel(1114).intl;
                                                                                            obj25.title = intl3.string(channel(1114).t.CbTIEo);
                                                                                            const intl4 = channel(1114).intl;
                                                                                            obj25.body = intl4.string(channel(1114).t.faHmO3);
                                                                                            const intl5 = channel(1114).intl;
                                                                                            obj25.cancelText = intl5.string(channel(1114).t["ETE/oC"]);
                                                                                            const intl6 = channel(1114).intl;
                                                                                            obj25.confirmText = intl6.string(channel(1114).t.kFwAsa);
                                                                                            obj25.onConfirm = function onConfirm() {
                                                                                              id = id2.source.id;
                                                                                              const attachments = id.attachments;
                                                                                              const found = attachments.filter((id) => id.id !== id);
                                                                                              const result = MessageActionCreatorsDefault.patchMessageAttachments(channel, id.id, found);
                                                                                            };
                                                                                            tmp130(4904).show(obj25);
                                                                                            const tmp130Result25 = tmp130(4904);
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                    closure_130_0 = id;
                                                                                    closure_130_1 = id2;
                                                                                    if (chatInputRef != null) {
                                                                                      const current2 = chatInputRef.current;
                                                                                      if (current2 != null) {
                                                                                        current2.dismissKeyboard();
                                                                                      }
                                                                                    }
                                                                                    const obj26 = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null };
                                                                                    const intl7 = channel(1114).intl;
                                                                                    obj26.title = intl7.string(channel(1114).t.VL1KOk);
                                                                                    const intl8 = channel(1114).intl;
                                                                                    obj26.body = intl8.string(channel(1114).t["vXZ+Fo"]);
                                                                                    const intl9 = channel(1114).intl;
                                                                                    obj26.cancelText = intl9.string(channel(1114).t["ETE/oC"]);
                                                                                    const intl10 = channel(1114).intl;
                                                                                    obj26.confirmText = intl10.string(channel(1114).t.YEHppG);
                                                                                    obj26.onConfirm = function onConfirm() {
                                                                                      MessageActionCreatorsDefault.suppressEmbeds(channel, id);
                                                                                    };
                                                                                    tmp130(4904).show(obj26);
                                                                                    const tmp130Result26 = tmp130(4904);
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
                                                          channel(7190).copy(mediaUrl3);
                                                          const tmpResult28 = channel(7190);
                                                          channel(4258).presentLinkCopied();
                                                          flag = true;
                                                          const tmpResult29 = channel(4258);
                                                        }
                                                        if (flag) {
                                                          let hostname;
                                                          if (null != mediaUrl3) {
                                                            hostname = channel(8373).getHostname(mediaUrl3);
                                                            const tmpResult30 = channel(8373);
                                                          }
                                                          const obj27 = { hostname };
                                                          const tmp40 = isStaticChannelRoute(id);
                                                          let tmp41;
                                                          if (!tmp40) {
                                                            tmp41 = id;
                                                          }
                                                          const obj28 = { channel_id: tmp41, channel_static_route: null };
                                                          let tmp42;
                                                          if (tmp40) {
                                                            tmp42 = id;
                                                          }
                                                          obj28.channel_static_route = tmp42;
                                                          let merged = Object.assign(obj28);
                                                          tmp130(1242).track(constants.CONTEXT_MENU_MEDIA_LINK_COPIED, obj27);
                                                          const tmp130Result27 = tmp130(1242);
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
    if (tmpResult31.canReportMessage(message)) {
      const result14 = channel(8629).showReportModalForMessage(message, "mobile_message_action_sheet");
      const tmpResult32 = channel(8629);
    }
    tmpResult31 = channel(7289);
  }
};