// === Module 11998: LongPressMessageActionSheetUtils ===

// Module 11998 (LongPressMessageActionSheetUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import router_utils from "router_utils" /* 1101 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1110 */;
import util from "util" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import ToastUtils from "ToastUtils" /* 4520 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4534 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4684 */;
import ChannelUtils from "ChannelUtils" /* 4972 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5193 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7513 */;
import ClipboardUtils from "ClipboardUtils" /* 7520 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7784 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 8092 */;
import MediaSourceUtil from "MediaSourceUtil" /* 8611 */;
import ForumComposerModalActionCreators from "ForumComposerModalActionCreators" /* 10594 */;
import PendingReplyActionCreators from "PendingReplyActionCreators" /* 12000 */;
import ChannelPinActionCreatorsDefault from "ChannelPinActionCreators" /* 12005 */;
import SavedMessageHelpers from "SavedMessageHelpers" /* 12038 */;
import SavedMessageSources from "SavedMessageSources" /* 12043 */;
import noop from "module_19" /* 19 */;
import PendingReplyStore from "PendingReplyStore" /* 8001 */;
import EditMessageStore from "EditMessageStore" /* 8002 */;
import UploadStore from "UploadStore" /* 8165 */;
import UserStore from "UserStore" /* 1372 */;
import SendMessageOptionsStore from "SendMessageOptionsStore" /* 11999 */;

require = fn;
function handleEdit(id, isForumPost, current, source) {
  let flag = arg4;
  if (arg4 === undefined) {
    flag = false;
  }
  if (isForumPost.isForumPost()) {
    if (isForumPost.id === obj.castMessageIdAsChannelId(id.id)) {
      if (null != isForumPost.parent_id) {
        PendingReplyActionCreators.deletePendingReply(isForumPost.id);
        const obj6 = { guildId: null, parentChannelId: null, threadId: null, messageId: null, isEdit: true, analyticsLocations: null, analyticsLocationObject: null };
        ({ guild_id: obj9.guildId, parent_id: obj9.parentChannelId, id: obj9.threadId } = isForumPost);
        obj6.messageId = id.id;
        const items = [AnalyticsLocationDefault.FORUM_CHANNEL, AnalyticsLocationDefault.GUILD_CHANNEL];
        obj6.analyticsLocations = items;
        const obj10 = { page: constants3.GUILD_CHANNEL, section: constants4.FORUM_POST_HEADER, object: constants2.CONTEXT_MENU };
        obj6.analyticsLocationObject = obj10;
        const result = ForumComposerModalActionCreators.openCreateForumPostModal(obj6);
      }
    }
    obj = SnowflakeUtilsDefault;
  }
  if (flag) {
    if ("message_swipe" === source) {
      if (EditMessageStore.isEditing(isForumPost.id, id.id)) {
        const currentUser = UserStore.getCurrentUser();
        const obj16 = { message_id: id.id, channel_id: null, guild_id: null, context_action: "edit", reason: "swipe_edit_undo", is_own_message: null };
        ({ id: obj5.channel_id, guild_id: obj5.guild_id } = isForumPost);
        let tmp15 = null != currentUser;
        if (tmp15) {
          tmp15 = currentUser.id === id.author.id;
        }
        obj16.is_own_message = tmp15;
        AnalyticsUtilsDefault.track(constants.CHAT_CONTEXT_BAR_ACTION_CANCELED, obj16);
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
    const obj17 = { message_id: id.id, channel_id: null, guild_id: null, context_action: "reply", reason: null, is_own_message: null };
    ({ id: obj12.channel_id, guild_id: obj12.guild_id } = isForumPost);
    if ("message_swipe" === source) {
      let str3 = "swipe_edit";
    } else if ("action_sheet" === source) {
      str3 = "action_sheet_edit";
    } else {
      str3 = "pressed_cancel";
    }
    obj17.reason = str3;
    obj17.is_own_message = null != currentUser1 && currentUser1.id === pendingReply.message.author.id;
    AnalyticsUtilsDefault.track(constants.CHAT_CONTEXT_BAR_ACTION_CANCELED, obj17);
  }
  PendingReplyActionCreators.deletePendingReply(isForumPost.id);
  const result1 = MessageActionCreatorsDefault.startEditMessageRecord(isForumPost.id, id, source);
  if (current != null) {
    current = current.current;
    if (current != null) {
      current.openSystemKeyboard();
    }
  }
}
const isMessageComponentsV2 = fn(4473).isMessageComponentsV2;
const Constants = fn(1074);
({ AnalyticEvents: c10, AnalyticsObjects: closure_11, AnalyticsPages: closure_12, AnalyticsSections: map1, ComponentActions: closure_14, GIF_RE_IOS: closure_15, MediaType: closure_16, MessageStates: closure_17, MessageTypes: closure_18 } = Constants);
const isStaticChannelRoute = fn(2049).isStaticChannelRoute;
let closure_20 = fn(7929).EXPLICIT_MEDIA_FALSE_POSITIVE_ACTION_SHEET_KEY;
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
    const obj2 = NavigationRouteUtils;
    result1 = obj2.navigateToCreateThread(guild_id.guild_id, SnowflakeUtilsDefault.castMessageIdAsChannelId(id.id));
    const tmpResult = SnowflakeUtilsDefault;
  }
  if (!result1) {
    const obj4 = router_utils;
    obj4.transitionToGuild(guild_id.guild_id, SnowflakeUtilsDefault.castMessageIdAsChannelId(id.id));
    const tmpResult2 = SnowflakeUtilsDefault;
  }
};
export const handleCopyMessageLink = function handleCopyMessageLink(channel, message_id) {
  AnalyticsUtilsDefault.track(constants.MESSAGE_LINK_COPIED, { message_id, channel: channel.id });
  const obj2 = { message_id, channel: channel.id };
  const channelPermalink = ChannelUtils.getChannelPermalink(channel.guild_id, channel.id, message_id);
  if (null != channelPermalink) {
    ClipboardUtils.copy(channelPermalink);
    const tmp3Result = ClipboardUtils;
    ToastUtils.presentLinkCopied();
    const tmp3Result2 = ToastUtils;
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
  const id2 = message.id;
  if (!disabled) {
    let intl = channel(1115).intl;
    if (label !== intl.string(channel(1115).t.PHjkRE)) {
      id(4794).hideActionSheet();
      let obj = id(4794);
    }
    let intl2 = channel(1115).intl;
    if (intl2.string(channel(1115).t["+78Pfm"]) !== label) {
      const intl26 = channel(1115).intl;
      if (intl26.string(channel(1115).t.n5EBAJ) !== label) {
        const intl27 = channel(1115).intl;
        if (intl27.string(id(2616)["1D+vqy"]) === label) {
          if (tmpResult.canReportMessageToMods(message)) {
            let result = channel(8983).showReportToModMessageModal(message);
            const tmpResult34 = channel(8983);
          }
          tmpResult = channel(7604);
        } else {
          const intl28 = channel(1115).intl;
          if (intl28.string(channel(1115).t.k5WiPf) === label) {
            if (message.type === constants8.THREAD_STARTER_MESSAGE) {
              if (null != message.messageReference) {
                const guild_id2 = message.messageReference.guild_id;
                if (null != guild_id2) {
                  channel(1101).transitionToGuild(guild_id2, tmp148, tmp147);
                  const tmpResult35 = channel(1101);
                }
              }
            }
          } else {
            const intl29 = channel(1115).intl;
            if (intl29.string(channel(1115).t["+TSRGD"]) === label) {
              channel(4838).transitionToMessage(id, id2, { navigationReplace: true });
              const tmpResult36 = channel(4838);
            } else {
              const intl30 = channel(1115).intl;
              if (intl30.string(channel(1115).t.zBoHlf) === label) {
                channel(7520).copy(id2);
                const tmpResult37 = channel(7520);
                const result1 = channel(4520).presentMessageIdCopied();
                const tmpResult38 = channel(4520);
              } else {
                const intl31 = channel(1115).intl;
                if (intl31.string(channel(1115).t.P8tvKG) === label) {
                  const user = UserStore.getUser(message.author.id);
                  if (null != user) {
                    if (chatInputRef != null) {
                      const current7 = chatInputRef.current;
                      if (current7 != null) {
                        const _HermesInternal = HermesInternal;
                        current7.insertText("@" + tmp131(4671).getUserTag(user, { decoration: "never" }), null, true);
                        const tmp131Result = tmp131(4671);
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
                  const intl32 = channel(1115).intl;
                  if (intl32.string(channel(1115).t.cduTBL) === label) {
                    let obj2 = { userId: message.author.id, channelId: id, messageId: message.id, sourceAnalyticsLocations: analyticsLocations.analyticsLocations };
                    tmp131(8523)(obj2);
                  } else {
                    const intl33 = channel(1115).intl;
                    if (intl33.string(channel(1115).t.fsBWmS) === label) {
                      handleEdit(message, channel, chatInputRef, "action_sheet");
                    } else {
                      const intl34 = channel(1115).intl;
                      if (intl34.string(channel(1115).t.Y8ujqr) === label) {
                        let sourceType;
                        if (selectedMedia != null) {
                          sourceType = selectedMedia.sourceType;
                        }
                        if ("attachment" === sourceType) {
                          let obj3 = { message, attachment: selectedMedia.source };
                          tmp131(4794).openLazy(channel(1980)(12010, dependencyMap.paths), "EditAttachmentActionSheet", obj3);
                          const tmp131Result30 = tmp131(4794);
                        }
                      } else {
                        const intl35 = channel(1115).intl;
                        if (intl35.string(channel(1115).t.MFGE51) === label) {
                          closure_135_0 = id;
                          closure_135_1 = id2;
                          if (chatInputRef != null) {
                            const current6 = chatInputRef.current;
                            if (current6 != null) {
                              current6.dismissKeyboard();
                            }
                          }
                          let obj4 = { title: null, children: null, cancelText: null, confirmText: null, onConfirm: null };
                          const intl23 = channel(1115).intl;
                          obj4.title = intl23.string(channel(1115).t.aIz1oV);
                          let obj5 = { channelId: id };
                          obj4.children = jsx(tmp131(12001), { channelId: id });
                          const intl24 = channel(1115).intl;
                          obj4.cancelText = intl24.string(channel(1115).t["ETE/oC"]);
                          const intl25 = channel(1115).intl;
                          obj4.confirmText = intl25.string(channel(1115).t["cY+Oob"]);
                          obj4.onConfirm = function onConfirm() {
                            return MessageActionCreatorsDefault.crosspostMessage(channel, id);
                          };
                          tmp131(5193).show(obj4);
                          const tmp131Result31 = tmp131(5193);
                        } else {
                          const intl36 = channel(1115).intl;
                          if (intl36.string(channel(1115).t.CvQ18w) === label) {
                            closure_134_0 = channel;
                            closure_134_1 = message;
                            if (chatInputRef != null) {
                              const current5 = chatInputRef.current;
                              if (current5 != null) {
                                current5.dismissKeyboard();
                              }
                            }
                            const obj6 = { title: null, body: null, children: null, cancelText: null, confirmText: null, onConfirm: null };
                            const intl19 = channel(1115).intl;
                            obj6.title = intl19.string(channel(1115).t.CvQ18w);
                            const intl20 = channel(1115).intl;
                            obj6.body = intl20.string(channel(1115).t.WG5dyo);
                            const obj7 = { message };
                            obj6.children = jsx(tmp131(12004), { message });
                            const intl21 = channel(1115).intl;
                            obj6.cancelText = intl21.string(channel(1115).t.gm1Vej);
                            const intl22 = channel(1115).intl;
                            obj6.confirmText = intl22.string(channel(1115).t.p89ACt);
                            obj6.onConfirm = function onConfirm() {
                              ChannelPinActionCreatorsDefault.pinMessage(channel, id.id);
                              const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
                              const intl = util.intl;
                              AccessibilityAnnouncer.announce(intl.string(util.t.sCfDDl));
                            };
                            tmp131(5193).show(obj6);
                            const tmp131Result32 = tmp131(5193);
                          } else {
                            const intl37 = channel(1115).intl;
                            if (intl37.string(channel(1115).t["Bse+F/"]) === label) {
                              closure_133_0 = channel;
                              closure_133_1 = message;
                              if (chatInputRef != null) {
                                const current4 = chatInputRef.current;
                                if (current4 != null) {
                                  current4.dismissKeyboard();
                                }
                              }
                              const obj8 = { title: null, body: null, children: null, cancelText: null, confirmText: null, onConfirm: null };
                              const intl15 = channel(1115).intl;
                              obj8.title = intl15.string(channel(1115).t["Bse+F/"]);
                              const intl16 = channel(1115).intl;
                              obj8.body = intl16.string(channel(1115).t.NjEPp7);
                              const obj10 = { message };
                              obj8.children = jsx(tmp131(12004), { message });
                              const intl17 = channel(1115).intl;
                              obj8.cancelText = intl17.string(channel(1115).t.gm1Vej);
                              const intl18 = channel(1115).intl;
                              obj8.confirmText = intl18.string(channel(1115).t.p89ACt);
                              obj8.onConfirm = function onConfirm() {
                                return ChannelPinActionCreatorsDefault.unpinMessage(channel, id.id);
                              };
                              tmp131(5193).show(obj8);
                              const tmp131Result33 = tmp131(5193);
                            } else {
                              const intl38 = channel(1115).intl;
                              if (intl38.string(channel(1115).t["lE/PG3"]) === label) {
                                const result2 = tmp131(7784).patchMessageGuildOfficial(id, id2, true);
                                const tmp131Result34 = tmp131(7784);
                              } else {
                                const intl39 = channel(1115).intl;
                                if (intl39.string(channel(1115).t["2km5Gf"]) === label) {
                                  const result3 = tmp131(7784).patchMessageGuildOfficial(id, id2, false);
                                  const tmp131Result35 = tmp131(7784);
                                } else {
                                  const intl40 = channel(1115).intl;
                                  if (intl40.string(channel(1115).t.xwMqD7) === label) {
                                    if (message.state === constants7.SENDING) {
                                      tmp131(8161).cancelRequest(id2);
                                      const tmp131Result36 = tmp131(8161);
                                      tmp131(7784).deleteMessage(id, id2, true);
                                      const tmp131Result37 = tmp131(7784);
                                    } else if (message.state === tmp86.SEND_FAILED) {
                                      tmp131(7784).deleteMessage(id, id2, true);
                                      const tmp131Result38 = tmp131(7784);
                                    } else {
                                      closure_132_0 = id;
                                      closure_132_1 = message;
                                      if (chatInputRef != null) {
                                        const current3 = chatInputRef.current;
                                        if (current3 != null) {
                                          current3.dismissKeyboard();
                                        }
                                      }
                                      const obj11 = { title: null, body: null, children: null, cancelText: null, confirmText: null, onConfirm: null };
                                      const intl11 = channel(1115).intl;
                                      obj11.title = intl11.string(channel(1115).t.MWMcg7);
                                      const intl12 = channel(1115).intl;
                                      obj11.body = intl12.string(channel(1115).t.AMvpS4);
                                      const obj13 = { message };
                                      obj11.children = jsx(tmp131(12004), { message });
                                      const intl13 = channel(1115).intl;
                                      obj11.cancelText = intl13.string(channel(1115).t.gm1Vej);
                                      const intl14 = channel(1115).intl;
                                      obj11.confirmText = intl14.string(channel(1115).t.p89ACt);
                                      obj11.onConfirm = function onConfirm() {
                                        MessageActionCreatorsDefault.deleteMessage(channel, id.id, false);
                                      };
                                      tmp131(5193).show(obj11);
                                      const tmp131Result39 = tmp131(5193);
                                    }
                                    const obj15 = { channel_id: id, guild_id, action_sheet_option: "delete", message_state: message.state };
                                    tmp131(5007).trackWithMetadata(constants.MESSAGE_ACTION_SHEET_OPTION_PRESSED, obj15);
                                    const tmp131Result40 = tmp131(5007);
                                  } else {
                                    const intl41 = channel(1115).intl;
                                    if (intl41.string(channel(1115).t["5911Lb"]) === label) {
                                      const uploaderFileForMessageId = UploadStore.getUploaderFileForMessageId(message.id);
                                      let items;
                                      if (uploaderFileForMessageId != null) {
                                        items = uploaderFileForMessageId.items;
                                      }
                                      tmp131(12007)(channel, message, items, SendMessageOptionsStore.getOptions(message.id));
                                      const tmp131Result41 = tmp131(12007);
                                      const obj17 = { channel_id: id, guild_id, action_sheet_option: "retry", message_state: message.state };
                                      tmp131(5007).trackWithMetadata(constants.MESSAGE_ACTION_SHEET_OPTION_PRESSED, obj17);
                                      const tmp131Result42 = tmp131(5007);
                                    } else {
                                      const intl42 = channel(1115).intl;
                                      if (intl42.string(channel(1115).t.JrGD7E) === label) {
                                        const contentMessage = message.getContentMessage();
                                        if (isMessageComponentsV2(contentMessage)) {
                                          const allTextDisplayContent = channel(5051).getAllTextDisplayContent(contentMessage.components);
                                          if (null != allTextDisplayContent) {
                                            channel(7520).copy(allTextDisplayContent);
                                            const tmpResult40 = channel(7520);
                                          }
                                          const tmpResult39 = channel(5051);
                                        } else {
                                          channel(7520).copy(contentMessage.content);
                                          const tmpResult41 = channel(7520);
                                        }
                                        channel(4520).presentMessageCopied();
                                        const tmpResult42 = channel(4520);
                                      } else {
                                        const intl43 = channel(1115).intl;
                                        if (intl43.string(channel(1115).t.lfIHs4) === label) {
                                          const result4 = channel(11600).handleAddNewReactions(channel, id2);
                                          const tmpResult43 = channel(11600);
                                        } else {
                                          const intl44 = channel(1115).intl;
                                          if (intl44.string(channel(1115).t.gHp0C4) === label) {
                                            if ("Preview" === actionSheetSource) {
                                              const result5 = channel(11600).handleViewPreviewReactions(id2, id);
                                              const tmpResult44 = channel(11600);
                                            } else {
                                              const obj18 = { messageId: id2, channelId: id, location: null };
                                              const obj19 = { object: constants2.MESSAGE_ACTION_SHEET };
                                              obj18.location = obj19;
                                              channel(11600).handleViewReactions(obj18);
                                              const tmpResult45 = channel(11600);
                                            }
                                          } else {
                                            const intl45 = channel(1115).intl;
                                            if (intl45.string(channel(1115).t.ZbtGBm) === label) {
                                              const result6 = channel(11600).handleRemoveAllReactions(id, id2);
                                              const tmpResult46 = channel(11600);
                                            } else {
                                              const intl46 = channel(1115).intl;
                                              if (intl46.string(channel(1115).t["g33r/P"]) === label) {
                                                const obj20 = { recipientIds: message.author.id };
                                                tmp131(4840).openPrivateChannel(obj20);
                                                const tmp131Result43 = tmp131(4840);
                                              } else {
                                                const intl47 = channel(1115).intl;
                                                if (intl47.string(channel(1115).t.Xrt5Po) === label) {
                                                  const obj21 = { message_id: id2, channel: channel.id };
                                                  tmp131(1241).track(constants.MESSAGE_LINK_COPIED, obj21);
                                                  const tmp131Result44 = tmp131(1241);
                                                  const channelPermalink = channel(4972).getChannelPermalink(channel.guild_id, channel.id, id2);
                                                  if (null != channelPermalink) {
                                                    channel(7520).copy(channelPermalink);
                                                    const tmpResult48 = channel(7520);
                                                    channel(4520).presentLinkCopied();
                                                    const tmpResult49 = channel(4520);
                                                  }
                                                  const tmpResult47 = channel(4972);
                                                } else {
                                                  const intl48 = channel(1115).intl;
                                                  if (intl48.string(channel(1115).t.RpE9k7) === label) {
                                                    tmp131(10590)(id, id2);
                                                  } else {
                                                    const intl49 = channel(1115).intl;
                                                    if (intl49.string(channel(1115).t["S/xNKV"]) === label) {
                                                      closure_131_0 = selectedMedia;
                                                      closure_131_1 = id;
                                                      let mediaUrl;
                                                      if (selectedMedia != null) {
                                                        mediaUrl = selectedMedia.mediaUrl;
                                                      }
                                                      if (null != mediaUrl) {
                                                        closure_131_2 = channel(4977).urlMatchesFileExtension(selectedMedia.mediaUrl, closure_15);
                                                        const tmpResult50 = channel(4977);
                                                        const toURLSafeResult = tmp131(1366).toURLSafe(selectedMedia.mediaUrl);
                                                        if (null != toURLSafeResult) {
                                                          if (obj40.isRefreshableAttachmentUrl(toURLSafeResult)) {
                                                            let result7 = tmp53(10286).maybeRefreshAttachmentUrl(selectedMedia.mediaUrl);
                                                            const tmp53Result = tmp53(10286);
                                                          }
                                                          obj40 = id2(10286);
                                                          tmp53 = id2;
                                                          result7.then((result) => MediaSourceUtil.downloadMediaAssetWithContentType(result, id2 ? constants6.GIF : constants6.IMAGE, channel.contentType)).then(() => {
                                                            const obj = ToastUtils;
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
                                                            const obj3 = { channel_id: tmp5, channel_static_route: null };
                                                            let tmp6;
                                                            if (tmp4) {
                                                              tmp6 = id;
                                                            }
                                                            obj3.channel_static_route = tmp6;
                                                            const merged = Object.assign(obj3);
                                                            AnalyticsUtilsDefault.track(constants.CONTEXT_MENU_IMAGE_SAVED, {});
                                                            const obj4 = {};
                                                          }, () => {
                                                            const obj2 = { title: null, body: null, isDismissable: true };
                                                            const intl = util.intl;
                                                            obj2.title = intl.string(util.t.cV3alD);
                                                            const intl2 = util.intl;
                                                            obj2.body = intl2.string(util.t.r4Zjzv);
                                                            AlertActionCreatorsDefault.show(obj2);
                                                            const tmp3 = isStaticChannelRoute(id);
                                                            let tmp4;
                                                            if (!tmp3) {
                                                              tmp4 = id;
                                                            }
                                                            const obj4 = { channel_id: tmp4, channel_static_route: null };
                                                            let tmp5;
                                                            if (tmp3) {
                                                              tmp5 = id;
                                                            }
                                                            obj4.channel_static_route = tmp5;
                                                            const merged = Object.assign(obj4);
                                                            AnalyticsUtilsDefault.track(constants.CONTEXT_MENU_IMAGE_SAVE_FAILED, {});
                                                            const obj5 = {};
                                                          });
                                                          const nextPromise = result7.then((result) => MediaSourceUtil.downloadMediaAssetWithContentType(result, id2 ? constants6.GIF : constants6.IMAGE, channel.contentType));
                                                        }
                                                        result7 = Promise.resolve(selectedMedia.mediaUrl);
                                                        const tmp131Result45 = tmp131(1366);
                                                      }
                                                    } else {
                                                      const intl50 = channel(1115).intl;
                                                      if (intl50.string(channel(1115).t.JVuuz3) === label) {
                                                        let mediaUrl1;
                                                        if (selectedMedia != null) {
                                                          mediaUrl1 = selectedMedia.mediaUrl;
                                                        }
                                                        if (null != mediaUrl1) {
                                                          const result8 = channel(8611).downloadMediaAssetWithContentType(selectedMedia.mediaUrl, constants6.VIDEO, selectedMedia.contentType);
                                                          result8.then(() => {
                                                            channel(4520).presentVideoSaved();
                                                          }, () => {
                                                            const obj2 = { title: null, body: null, isDismissable: true };
                                                            const intl = channel(1115).intl;
                                                            obj2.title = intl.string(channel(1115).t.cV3alD);
                                                            const intl2 = channel(1115).intl;
                                                            obj2.body = intl2.string(channel(1115).t.r4Zjzv);
                                                            id(5193).show(obj2);
                                                          });
                                                          const tmpResult51 = channel(8611);
                                                        }
                                                      } else {
                                                        const intl51 = channel(1115).intl;
                                                        if (intl51.string(channel(1115).t.vbAEaA) === label) {
                                                          let mediaUrl2;
                                                          if (selectedMedia != null) {
                                                            mediaUrl2 = selectedMedia.mediaUrl;
                                                          }
                                                          if (null != mediaUrl2) {
                                                            const obj22 = { href: mediaUrl2 };
                                                            channel(8716).handleClick(obj22);
                                                            const tmpResult52 = channel(8716);
                                                          }
                                                        } else {
                                                          const intl52 = channel(1115).intl;
                                                          if (intl52.string(channel(1115).t["92CPQ+"]) !== label) {
                                                            const intl53 = channel(1115).intl;
                                                            if (intl53.string(channel(1115).t["8xHmxo"]) !== label) {
                                                              const intl54 = channel(1115).intl;
                                                              if (intl54.string(channel(1115).t["5IEsGx"]) === label) {
                                                                const obj23 = { message, channel, chatInputRef, actionSource: "action_sheet" };
                                                                tmp131(12011)(obj23);
                                                                if ("Preview" === actionSheetSource) {
                                                                  channel(4838).transitionToMessage(channel.id, message.id);
                                                                  const _setTimeout = setTimeout;
                                                                  const timerId = setTimeout(() => {
                                                                    const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
                                                                    return ComponentDispatch.dispatch(constants5.TEXTAREA_FOCUS, { channelId: channel.id });
                                                                  }, 500);
                                                                  const tmpResult53 = channel(4838);
                                                                }
                                                              } else {
                                                                const intl55 = channel(1115).intl;
                                                                if (intl55.string(channel(1115).t.I3ltXO) === label) {
                                                                  const obj24 = { message, source: "long-press-sheet" };
                                                                  channel(12012).openForwardModal(obj24);
                                                                  const tmpResult54 = channel(12012);
                                                                } else {
                                                                  const intl56 = channel(1115).intl;
                                                                  if (intl56.string(channel(1115).t.rBIGBL) === label) {
                                                                    let id1;
                                                                    if (message != null) {
                                                                      id1 = message.id;
                                                                    }
                                                                    const result9 = tmp131(8092).openThreadCreationForMobile(channel, id1, "Message");
                                                                    let result10 = null == message;
                                                                    if (!result10) {
                                                                      const tmpResult55 = channel(4684);
                                                                      result10 = tmpResult55.navigateToCreateThread(channel.guild_id, tmp131(11).castMessageIdAsChannelId(message.id));
                                                                      const tmp131Result47 = tmp131(11);
                                                                    }
                                                                    if (!result10) {
                                                                      const tmpResult56 = channel(1101);
                                                                      tmpResult56.transitionToGuild(channel.guild_id, tmp131(11).castMessageIdAsChannelId(message.id));
                                                                      const tmp131Result48 = tmp131(11);
                                                                    }
                                                                    const tmp131Result46 = tmp131(8092);
                                                                  } else {
                                                                    const intl57 = channel(1115).intl;
                                                                    if (intl57.string(channel(1115).t["39d0Wj"]) === label) {
                                                                      const tmpResult57 = channel(1101);
                                                                      tmpResult57.transitionToGuild(channel.guild_id, tmp131(11).castMessageIdAsChannelId(message.id));
                                                                      const tmp131Result49 = tmp131(11);
                                                                    } else {
                                                                      const intl58 = channel(1115).intl;
                                                                      if (intl58.string(channel(1115).t.PHjkRE) === label) {
                                                                        tmp131(4794).hideActionSheet();
                                                                        const tmp131Result50 = tmp131(4794);
                                                                        const obj25 = { channel, commandType: channel(1978).ApplicationCommandType.MESSAGE, commandTargetId: message.id };
                                                                        const result11 = channel(4684).navigateToContextMenuCommands(obj25);
                                                                        const tmpResult58 = channel(4684);
                                                                      } else {
                                                                        const intl59 = channel(1115).intl;
                                                                        if (intl59.string(channel(1115).t.tpxJto) === label) {
                                                                          const obj26 = { channelId: id, messageId: id2, displayToast: true, source: channel(12043).SavedMessageSources.LONG_PRESS_ACTION_SHEET };
                                                                          const result12 = channel(12038).addOrUpdateSavedMessage(obj26);
                                                                          const tmpResult59 = channel(12038);
                                                                        } else {
                                                                          const intl60 = channel(1115).intl;
                                                                          if (intl60.string(channel(1115).t.SvXS1Z) === label) {
                                                                            const obj27 = { channelId: id, messageId: id2, displayToast: true };
                                                                            channel(12038).removeSavedMessage(obj27);
                                                                            const tmpResult60 = channel(12038);
                                                                          } else {
                                                                            const intl61 = channel(1115).intl;
                                                                            if (intl61.string(channel(1115).t.mJ3P0N) === label) {
                                                                              const obj28 = {
                                                                                createReminder(dueAt) {
                                                                                                                                                              const obj = SavedMessageHelpers;
                                                                                                                                                              return obj.addOrUpdateSavedMessage({ channelId: id, messageId: id2, dueAt, displayToast: true, source: SavedMessageSources.SavedMessageSources.LONG_PRESS_ACTION_SHEET });
                                                                                                                                                            },
                                                                                channelId: null,
                                                                                messageId: null,
                                                                                onBack: null
                                                                              };
                                                                              ({ channel_id: obj16.channelId, id: obj16.messageId } = message);
                                                                              obj28.onBack = onBack;
                                                                              tmp131(4794).openLazy(channel(1980)(12044, dependencyMap.paths), "MessageReminderDurationActionSheet", obj28);
                                                                              const tmp131Result51 = tmp131(4794);
                                                                            } else {
                                                                              const intl62 = channel(1115).intl;
                                                                              if (intl62.string(channel(1115).t.vrbqs1) === label) {
                                                                                const obj29 = {
                                                                                  createReminder(dueAt) {
                                                                                                                                                                  const obj = SavedMessageHelpers;
                                                                                                                                                                  return obj.addOrUpdateSavedMessage({ channelId: id, messageId: id2, dueAt, displayToast: true, source: SavedMessageSources.SavedMessageSources.LONG_PRESS_ACTION_SHEET });
                                                                                                                                                                },
                                                                                  removeReminder() {
                                                                                                                                                                  return SavedMessageHelpers.removeSavedMessage({ channelId: id, messageId: id2, displayToast: true, isReminder: true });
                                                                                                                                                                },
                                                                                  channelId: null,
                                                                                  messageId: null,
                                                                                  onBack: null
                                                                                };
                                                                                ({ channel_id: obj14.channelId, id: obj14.messageId } = message);
                                                                                obj29.onBack = onBack;
                                                                                tmp131(4794).openLazy(channel(1980)(12044, dependencyMap.paths), "MessageReminderDurationActionSheet", obj29);
                                                                                const tmp131Result52 = tmp131(4794);
                                                                              } else {
                                                                                const intl63 = channel(1115).intl;
                                                                                if (intl63.string(channel(1115).t.ZH7P2h) === label) {
                                                                                  if (null != selectedMedia) {
                                                                                    let id3;
                                                                                    if ("embed" === selectedMedia.sourceType) {
                                                                                      id3 = selectedMedia.source.id;
                                                                                    }
                                                                                    let id4;
                                                                                    if ("attachment" === selectedMedia.sourceType) {
                                                                                      id4 = selectedMedia.source.id;
                                                                                    }
                                                                                    let result13 = undefined !== id3 || undefined !== id4;
                                                                                    if (!result13) {
                                                                                      result13 = channel(7620).messageHasObscurableMedia(message);
                                                                                      const tmpResult61 = channel(7620);
                                                                                    }
                                                                                    if (result13) {
                                                                                      const obj30 = { channelId: null, messageId: null, attachmentId: null, embedId: null };
                                                                                      ({ channel_id: obj12.channelId, id: obj12.messageId } = message);
                                                                                      obj30.attachmentId = id4;
                                                                                      obj30.embedId = id3;
                                                                                      tmp131(4794).openLazy(channel(1980)(12008, dependencyMap.paths), closure_20, obj30);
                                                                                      const tmp131Result53 = tmp131(4794);
                                                                                    }
                                                                                  }
                                                                                } else {
                                                                                  const intl64 = channel(1115).intl;
                                                                                  if (intl64.string(channel(1115).t.grdwwt) === label) {
                                                                                    ({ channel_id: obj9.channelId, id: obj9.messageId } = message);
                                                                                    tmp131(12048).endPollEarly({ channelId: null, messageId: null });
                                                                                    const obj31 = { channelId: null, messageId: null };
                                                                                    const tmp131Result54 = tmp131(12048);
                                                                                  } else {
                                                                                    const intl65 = channel(1115).intl;
                                                                                    if (intl65.string(channel(1115).t.Rjezbz) === label) {
                                                                                      const obj32 = { message, guildId: guild_id, onBack };
                                                                                      tmp131(4794).openLazy(channel(1980)(12061, dependencyMap.paths), "AppInteractionInfoActionSheet", obj32);
                                                                                      const tmp131Result55 = tmp131(4794);
                                                                                    } else {
                                                                                      const intl66 = channel(1115).intl;
                                                                                      if (intl66.string(channel(1115).t["4sxKOb"]) !== label) {
                                                                                        const intl67 = channel(1115).intl;
                                                                                        if (intl67.string(channel(1115).t.wUIMqa) !== label) {
                                                                                          const intl68 = channel(1115).intl;
                                                                                          if (intl68.string(channel(1115).t.kFwAsa) === label) {
                                                                                            closure_129_0 = id;
                                                                                            closure_129_1 = message;
                                                                                            closure_129_2 = selectedMedia;
                                                                                            let sourceType1;
                                                                                            if (selectedMedia != null) {
                                                                                              sourceType1 = selectedMedia.sourceType;
                                                                                            }
                                                                                            if ("attachment" === sourceType1) {
                                                                                              if (chatInputRef != null) {
                                                                                                const current = chatInputRef.current;
                                                                                                if (current != null) {
                                                                                                  current.dismissKeyboard();
                                                                                                }
                                                                                              }
                                                                                              const obj33 = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null };
                                                                                              const intl3 = channel(1115).intl;
                                                                                              obj33.title = intl3.string(channel(1115).t.CbTIEo);
                                                                                              const intl4 = channel(1115).intl;
                                                                                              obj33.body = intl4.string(channel(1115).t.faHmO3);
                                                                                              const intl5 = channel(1115).intl;
                                                                                              obj33.cancelText = intl5.string(channel(1115).t["ETE/oC"]);
                                                                                              const intl6 = channel(1115).intl;
                                                                                              obj33.confirmText = intl6.string(channel(1115).t.kFwAsa);
                                                                                              obj33.onConfirm = function onConfirm() {
                                                                                                id = id2.source.id;
                                                                                                const attachments = id.attachments;
                                                                                                const found = attachments.filter((id) => id.id !== id);
                                                                                                const result = MessageActionCreatorsDefault.patchMessageAttachments(channel, id.id, found);
                                                                                              };
                                                                                              tmp131(5193).show(obj33);
                                                                                              const tmp131Result56 = tmp131(5193);
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
                                                                                      const obj34 = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null };
                                                                                      const intl7 = channel(1115).intl;
                                                                                      obj34.title = intl7.string(channel(1115).t.VL1KOk);
                                                                                      const intl8 = channel(1115).intl;
                                                                                      obj34.body = intl8.string(channel(1115).t["vXZ+Fo"]);
                                                                                      const intl9 = channel(1115).intl;
                                                                                      obj34.cancelText = intl9.string(channel(1115).t["ETE/oC"]);
                                                                                      const intl10 = channel(1115).intl;
                                                                                      obj34.confirmText = intl10.string(channel(1115).t.YEHppG);
                                                                                      obj34.onConfirm = function onConfirm() {
                                                                                        MessageActionCreatorsDefault.suppressEmbeds(channel, id);
                                                                                      };
                                                                                      tmp131(5193).show(obj34);
                                                                                      const tmp131Result57 = tmp131(5193);
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
                                                            channel(7520).copy(mediaUrl3);
                                                            const tmpResult62 = channel(7520);
                                                            channel(4520).presentLinkCopied();
                                                            flag = true;
                                                            const tmpResult63 = channel(4520);
                                                          }
                                                          if (flag) {
                                                            let hostname;
                                                            if (null != mediaUrl3) {
                                                              hostname = channel(8719).getHostname(mediaUrl3);
                                                              const tmpResult64 = channel(8719);
                                                            }
                                                            const obj35 = { hostname };
                                                            const tmp40 = isStaticChannelRoute(id);
                                                            let tmp41;
                                                            if (!tmp40) {
                                                              tmp41 = id;
                                                            }
                                                            const obj36 = { channel_id: tmp41, channel_static_route: null };
                                                            let tmp42;
                                                            if (tmp40) {
                                                              tmp42 = id;
                                                            }
                                                            obj36.channel_static_route = tmp42;
                                                            let merged = Object.assign(obj36);
                                                            tmp131(1241).track(constants.CONTEXT_MENU_MEDIA_LINK_COPIED, obj35);
                                                            const tmp131Result58 = tmp131(1241);
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
      }
      if (onActionExecuted != null) {
        onActionExecuted(label);
      }
    }
    if (tmpResult65.canReportMessage(message)) {
      const result14 = channel(8983).showReportModalForMessage(message, "mobile_message_action_sheet");
      const tmpResult66 = channel(8983);
    }
    tmpResult65 = channel(7617);
  }
};