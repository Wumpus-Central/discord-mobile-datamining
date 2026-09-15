// discord_app/modules/messages/native/long_press/LongPressMessageActionSheetUtils.tsx
import SnowflakeUtilsDefault from "../../../../utils/SnowflakeUtils.tsx";
import router_utils from "../../../routing/router_utils.tsx";
import ComponentDispatchUtils from "../../../../utils/ComponentDispatchUtils.tsx";
import util from "../../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import ToastUtils from "../../../toast/native/ToastUtils.tsx";
import AccessibilityAnnouncer2 from "../../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import NavigationRouteUtils from "../../../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import ChannelUtils from "../../../../utils/ChannelUtils.tsx";
import AlertActionCreatorsDefault from "../../../../actions/AlertActionCreators.tsx";
import AnalyticsLocationDefault from "../../../app_analytics/AnalyticsLocation.tsx";
import ClipboardUtils from "../../../../utils/ClipboardUtils.native.tsx";
import MessageActionCreatorsDefault from "../../../../actions/MessageActionCreators.tsx";
import ThreadActionCreatorsDefault from "../../../threads/ThreadActionCreators.tsx";
import MediaSourceUtil from "../../../media_viewer/native/MediaSourceUtil.tsx";
import ForumComposerModalActionCreators from "../../../forums/native/composer/ForumComposerModalActionCreators.tsx";
import PendingReplyActionCreators from "../../../replies/PendingReplyActionCreators.tsx";
import ChannelPinActionCreatorsDefault from "../../../../actions/ChannelPinActionCreators.tsx";
import SavedMessageHelpers from "../../../saved_messages/SavedMessageHelpers.native.tsx";
import SavedMessageSources from "../../../saved_messages/SavedMessageSources.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import PendingReplyStore from "../../../replies/PendingReplyStore.tsx";
import EditMessageStore from "../../../../stores/EditMessageStore.tsx";
import UploadStore from "../../../../stores/UploadStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import SendMessageOptionsStore from "../../SendMessageOptionsStore.tsx";

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
        const obj6 = {
          guildId: null,
          parentChannelId: null,
          threadId: null,
          messageId: null,
          isEdit: true,
          analyticsLocations: null,
          analyticsLocationObject: null,
        };
        ({ guild_id: obj9.guildId, parent_id: obj9.parentChannelId, id: obj9.threadId } = isForumPost);
        obj6.messageId = id.id;
        const items = [AnalyticsLocationDefault.FORUM_CHANNEL, AnalyticsLocationDefault.GUILD_CHANNEL];
        obj6.analyticsLocations = items;
        const obj10 = {
          page: constants3.GUILD_CHANNEL,
          section: constants4.FORUM_POST_HEADER,
          object: constants2.CONTEXT_MENU,
        };
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
        const obj16 = {
          message_id: id.id,
          channel_id: null,
          guild_id: null,
          context_action: "edit",
          reason: "swipe_edit_undo",
          is_own_message: null,
        };
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
    const obj17 = {
      message_id: id.id,
      channel_id: null,
      guild_id: null,
      context_action: "reply",
      reason: null,
      is_own_message: null,
    };
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
const isMessageComponentsV2 = fn(4289).isMessageComponentsV2;
const Constants = fn(1074);
({
  AnalyticEvents: c10,
  AnalyticsObjects: closure_11,
  AnalyticsPages: closure_12,
  AnalyticsSections: map1,
  ComponentActions: closure_14,
  GIF_RE_IOS: closure_15,
  MediaType: closure_16,
  MessageStates: closure_17,
  MessageTypes: closure_18,
} = Constants);
const isStaticChannelRoute = fn(1965).isStaticChannelRoute;
let closure_20 = fn(7706).EXPLICIT_MEDIA_FALSE_POSITIVE_ACTION_SHEET_KEY;
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
      id(4606).hideActionSheet();
      let obj = id(4606);
    }
    let intl2 = channel(1115).intl;
    if (intl2.string(channel(1115).t["+78Pfm"]) !== label) {
      const intl26 = channel(1115).intl;
      if (intl26.string(channel(1115).t.n5EBAJ) !== label) {
        const intl27 = channel(1115).intl;
        if (intl27.string(id(2529)["1D+vqy"]) === label) {
          if (tmpResult.canReportMessageToMods(message)) {
            let result = channel(8755).showReportToModMessageModal(message);
            const tmpResult34 = channel(8755);
          }
          tmpResult = channel(7383);
        } else {
          const intl28 = channel(1115).intl;
          if (intl28.string(channel(1115).t.k5WiPf) === label) {
            if (message.type === constants8.THREAD_STARTER_MESSAGE) {
              if (null != message.messageReference) {
                const guild_id2 = message.messageReference.guild_id;
                if (null != guild_id2) {
                  channel(1101).transitionToGuild(guild_id2, tmp146, tmp145);
                  const tmpResult35 = channel(1101);
                }
              }
            }
          } else {
            const intl29 = channel(1115).intl;
            if (intl29.string(channel(1115).t["+TSRGD"]) === label) {
              channel(4650).transitionToMessage(channel.id, message.id);
              const tmpResult36 = channel(4650);
            } else {
              const intl30 = channel(1115).intl;
              if (intl30.string(channel(1115).t.zBoHlf) === label) {
                channel(7296).copy(id2);
                const tmpResult37 = channel(7296);
                const result1 = channel(4337).presentMessageIdCopied();
                const tmpResult38 = channel(4337);
              } else {
                const intl31 = channel(1115).intl;
                if (intl31.string(channel(1115).t.P8tvKG) === label) {
                  const user = UserStore.getUser(message.author.id);
                  if (null != user) {
                    if (chatInputRef != null) {
                      const current7 = chatInputRef.current;
                      if (current7 != null) {
                        const _HermesInternal = HermesInternal;
                        current7.insertText("@" + tmp130(4484).getUserTag(user, { decoration: "never" }), null, true);
                        const tmp130Result = tmp130(4484);
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
                    let obj2 = {
                      userId: message.author.id,
                      channelId: id,
                      messageId: message.id,
                      sourceAnalyticsLocations: analyticsLocations.analyticsLocations,
                    };
                    tmp130(8299)(obj2);
                  } else {
                    const intl33 = channel(1115).intl;
                    if (intl33.string(channel(1115).t.fsBWmS) === label) {
                      handleEdit(message, channel, chatInputRef, "action_sheet");
                    } else {
                      const intl34 = channel(1115).intl;
                      if (intl34.string(channel(1115).t.MFGE51) === label) {
                        closure_135_0 = id;
                        closure_135_1 = id2;
                        if (chatInputRef != null) {
                          const current6 = chatInputRef.current;
                          if (current6 != null) {
                            current6.dismissKeyboard();
                          }
                        }
                        let obj3 = {
                          title: null,
                          children: null,
                          cancelText: null,
                          confirmText: null,
                          onConfirm: null,
                        };
                        const intl23 = channel(1115).intl;
                        obj3.title = intl23.string(channel(1115).t.aIz1oV);
                        let obj4 = { channelId: id };
                        obj3.children = jsx(tmp130(11804), { channelId: id });
                        const intl24 = channel(1115).intl;
                        obj3.cancelText = intl24.string(channel(1115).t["ETE/oC"]);
                        const intl25 = channel(1115).intl;
                        obj3.confirmText = intl25.string(channel(1115).t["cY+Oob"]);
                        obj3.onConfirm = function onConfirm() {
                          return MessageActionCreatorsDefault.crosspostMessage(channel, id);
                        };
                        tmp130(4983).show(obj3);
                        const tmp130Result29 = tmp130(4983);
                      } else {
                        const intl35 = channel(1115).intl;
                        if (intl35.string(channel(1115).t.CvQ18w) === label) {
                          closure_134_0 = channel;
                          closure_134_1 = message;
                          if (chatInputRef != null) {
                            const current5 = chatInputRef.current;
                            if (current5 != null) {
                              current5.dismissKeyboard();
                            }
                          }
                          let obj5 = {
                            title: null,
                            body: null,
                            children: null,
                            cancelText: null,
                            confirmText: null,
                            onConfirm: null,
                          };
                          const intl19 = channel(1115).intl;
                          obj5.title = intl19.string(channel(1115).t.CvQ18w);
                          const intl20 = channel(1115).intl;
                          obj5.body = intl20.string(channel(1115).t.WG5dyo);
                          const obj6 = { message };
                          obj5.children = jsx(tmp130(11807), { message });
                          const intl21 = channel(1115).intl;
                          obj5.cancelText = intl21.string(channel(1115).t.gm1Vej);
                          const intl22 = channel(1115).intl;
                          obj5.confirmText = intl22.string(channel(1115).t.p89ACt);
                          obj5.onConfirm = function onConfirm() {
                            ChannelPinActionCreatorsDefault.pinMessage(channel, id.id);
                            const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
                            const intl = util.intl;
                            AccessibilityAnnouncer.announce(intl.string(util.t.sCfDDl));
                          };
                          tmp130(4983).show(obj5);
                          const tmp130Result30 = tmp130(4983);
                        } else {
                          const intl36 = channel(1115).intl;
                          if (intl36.string(channel(1115).t["Bse+F/"]) === label) {
                            closure_133_0 = channel;
                            closure_133_1 = message;
                            if (chatInputRef != null) {
                              const current4 = chatInputRef.current;
                              if (current4 != null) {
                                current4.dismissKeyboard();
                              }
                            }
                            const obj7 = {
                              title: null,
                              body: null,
                              children: null,
                              cancelText: null,
                              confirmText: null,
                              onConfirm: null,
                            };
                            const intl15 = channel(1115).intl;
                            obj7.title = intl15.string(channel(1115).t["Bse+F/"]);
                            const intl16 = channel(1115).intl;
                            obj7.body = intl16.string(channel(1115).t.NjEPp7);
                            const obj8 = { message };
                            obj7.children = jsx(tmp130(11807), { message });
                            const intl17 = channel(1115).intl;
                            obj7.cancelText = intl17.string(channel(1115).t.gm1Vej);
                            const intl18 = channel(1115).intl;
                            obj7.confirmText = intl18.string(channel(1115).t.p89ACt);
                            obj7.onConfirm = function onConfirm() {
                              return ChannelPinActionCreatorsDefault.unpinMessage(channel, id.id);
                            };
                            tmp130(4983).show(obj7);
                            const tmp130Result31 = tmp130(4983);
                          } else {
                            const intl37 = channel(1115).intl;
                            if (intl37.string(channel(1115).t["lE/PG3"]) === label) {
                              const result2 = tmp130(7563).patchMessageGuildOfficial(id, id2, true);
                              const tmp130Result32 = tmp130(7563);
                            } else {
                              const intl38 = channel(1115).intl;
                              if (intl38.string(channel(1115).t["2km5Gf"]) === label) {
                                const result3 = tmp130(7563).patchMessageGuildOfficial(id, id2, false);
                                const tmp130Result33 = tmp130(7563);
                              } else {
                                const intl39 = channel(1115).intl;
                                if (intl39.string(channel(1115).t.xwMqD7) === label) {
                                  if (message.state === constants7.SENDING) {
                                    tmp130(7939).cancelRequest(id2);
                                    const tmp130Result34 = tmp130(7939);
                                    tmp130(7563).deleteMessage(id, id2, true);
                                    const tmp130Result35 = tmp130(7563);
                                  } else if (message.state === tmp86.SEND_FAILED) {
                                    tmp130(7563).deleteMessage(id, id2, true);
                                    const tmp130Result36 = tmp130(7563);
                                  } else {
                                    closure_132_0 = id;
                                    closure_132_1 = message;
                                    if (chatInputRef != null) {
                                      const current3 = chatInputRef.current;
                                      if (current3 != null) {
                                        current3.dismissKeyboard();
                                      }
                                    }
                                    const obj10 = {
                                      title: null,
                                      body: null,
                                      children: null,
                                      cancelText: null,
                                      confirmText: null,
                                      onConfirm: null,
                                    };
                                    const intl11 = channel(1115).intl;
                                    obj10.title = intl11.string(channel(1115).t.MWMcg7);
                                    const intl12 = channel(1115).intl;
                                    obj10.body = intl12.string(channel(1115).t.AMvpS4);
                                    const obj11 = { message };
                                    obj10.children = jsx(tmp130(11807), { message });
                                    const intl13 = channel(1115).intl;
                                    obj10.cancelText = intl13.string(channel(1115).t.gm1Vej);
                                    const intl14 = channel(1115).intl;
                                    obj10.confirmText = intl14.string(channel(1115).t.p89ACt);
                                    obj10.onConfirm = function onConfirm() {
                                      MessageActionCreatorsDefault.deleteMessage(channel, id.id, false);
                                    };
                                    tmp130(4983).show(obj10);
                                    const tmp130Result37 = tmp130(4983);
                                  }
                                  const obj13 = {
                                    channel_id: id,
                                    guild_id,
                                    action_sheet_option: "delete",
                                    message_state: message.state,
                                  };
                                  tmp130(4819).trackWithMetadata(constants.MESSAGE_ACTION_SHEET_OPTION_PRESSED, obj13);
                                  const tmp130Result38 = tmp130(4819);
                                } else {
                                  const intl40 = channel(1115).intl;
                                  if (intl40.string(channel(1115).t["5911Lb"]) === label) {
                                    const uploaderFileForMessageId = UploadStore.getUploaderFileForMessageId(
                                      message.id,
                                    );
                                    let items;
                                    if (uploaderFileForMessageId != null) {
                                      items = uploaderFileForMessageId.items;
                                    }
                                    tmp130(11810)(
                                      channel,
                                      message,
                                      items,
                                      SendMessageOptionsStore.getOptions(message.id),
                                    );
                                    const tmp130Result39 = tmp130(11810);
                                    const obj15 = {
                                      channel_id: id,
                                      guild_id,
                                      action_sheet_option: "retry",
                                      message_state: message.state,
                                    };
                                    tmp130(4819).trackWithMetadata(
                                      constants.MESSAGE_ACTION_SHEET_OPTION_PRESSED,
                                      obj15,
                                    );
                                    const tmp130Result40 = tmp130(4819);
                                  } else {
                                    const intl41 = channel(1115).intl;
                                    if (intl41.string(channel(1115).t.JrGD7E) === label) {
                                      const contentMessage = message.getContentMessage();
                                      if (isMessageComponentsV2(contentMessage)) {
                                        const allTextDisplayContent = channel(4864).getAllTextDisplayContent(
                                          contentMessage.components,
                                        );
                                        if (null != allTextDisplayContent) {
                                          channel(7296).copy(allTextDisplayContent);
                                          const tmpResult40 = channel(7296);
                                        }
                                        const tmpResult39 = channel(4864);
                                      } else {
                                        channel(7296).copy(contentMessage.content);
                                        const tmpResult41 = channel(7296);
                                      }
                                      channel(4337).presentMessageCopied();
                                      const tmpResult42 = channel(4337);
                                    } else {
                                      const intl42 = channel(1115).intl;
                                      if (intl42.string(channel(1115).t.lfIHs4) === label) {
                                        const result4 = channel(11392).handleAddNewReactions(channel, id2);
                                        const tmpResult43 = channel(11392);
                                      } else {
                                        const intl43 = channel(1115).intl;
                                        if (intl43.string(channel(1115).t.gHp0C4) === label) {
                                          if ("Preview" === actionSheetSource) {
                                            const result5 = channel(11392).handleViewPreviewReactions(id2, id);
                                            const tmpResult44 = channel(11392);
                                          } else {
                                            const obj17 = { messageId: id2, channelId: id, location: null };
                                            const obj18 = { object: constants2.MESSAGE_ACTION_SHEET };
                                            obj17.location = obj18;
                                            channel(11392).handleViewReactions(obj17);
                                            const tmpResult45 = channel(11392);
                                          }
                                        } else {
                                          const intl44 = channel(1115).intl;
                                          if (intl44.string(channel(1115).t.ZbtGBm) === label) {
                                            const result6 = channel(11392).handleRemoveAllReactions(id, id2);
                                            const tmpResult46 = channel(11392);
                                          } else {
                                            const intl45 = channel(1115).intl;
                                            if (intl45.string(channel(1115).t["g33r/P"]) === label) {
                                              const obj19 = { recipientIds: message.author.id };
                                              tmp130(4652).openPrivateChannel(obj19);
                                              const tmp130Result41 = tmp130(4652);
                                            } else {
                                              const intl46 = channel(1115).intl;
                                              if (intl46.string(channel(1115).t.Xrt5Po) === label) {
                                                const obj20 = { message_id: id2, channel: channel.id };
                                                tmp130(1241).track(constants.MESSAGE_LINK_COPIED, obj20);
                                                const tmp130Result42 = tmp130(1241);
                                                const channelPermalink = channel(4784).getChannelPermalink(
                                                  channel.guild_id,
                                                  channel.id,
                                                  id2,
                                                );
                                                if (null != channelPermalink) {
                                                  channel(7296).copy(channelPermalink);
                                                  const tmpResult48 = channel(7296);
                                                  channel(4337).presentLinkCopied();
                                                  const tmpResult49 = channel(4337);
                                                }
                                                const tmpResult47 = channel(4784);
                                              } else {
                                                const intl47 = channel(1115).intl;
                                                if (intl47.string(channel(1115).t.RpE9k7) === label) {
                                                  tmp130(10378)(id, id2);
                                                } else {
                                                  const intl48 = channel(1115).intl;
                                                  if (intl48.string(channel(1115).t["S/xNKV"]) === label) {
                                                    closure_131_0 = selectedMedia;
                                                    closure_131_1 = id;
                                                    let mediaUrl;
                                                    if (selectedMedia != null) {
                                                      mediaUrl = selectedMedia.mediaUrl;
                                                    }
                                                    if (null != mediaUrl) {
                                                      closure_131_2 = channel(4789).urlMatchesFileExtension(
                                                        selectedMedia.mediaUrl,
                                                        closure_15,
                                                      );
                                                      const tmpResult50 = channel(4789);
                                                      const toURLSafeResult = tmp130(1366).toURLSafe(
                                                        selectedMedia.mediaUrl,
                                                      );
                                                      if (null != toURLSafeResult) {
                                                        if (obj40.isRefreshableAttachmentUrl(toURLSafeResult)) {
                                                          let result7 = tmp53(10074).maybeRefreshAttachmentUrl(
                                                            selectedMedia.mediaUrl,
                                                          );
                                                          const tmp53Result = tmp53(10074);
                                                        }
                                                        obj40 = id2(10074);
                                                        tmp53 = id2;
                                                        result7
                                                          .then((result) =>
                                                            MediaSourceUtil.downloadMediaAssetWithContentType(
                                                              result,
                                                              id2 ? constants6.GIF : constants6.IMAGE,
                                                              channel.contentType,
                                                            ),
                                                          )
                                                          .then(
                                                            () => {
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
                                                              const obj3 = {
                                                                channel_id: tmp5,
                                                                channel_static_route: null,
                                                              };
                                                              let tmp6;
                                                              if (tmp4) {
                                                                tmp6 = id;
                                                              }
                                                              obj3.channel_static_route = tmp6;
                                                              const merged = Object.assign(obj3);
                                                              AnalyticsUtilsDefault.track(
                                                                constants.CONTEXT_MENU_IMAGE_SAVED,
                                                                {},
                                                              );
                                                              const obj4 = {};
                                                            },
                                                            () => {
                                                              const obj2 = {
                                                                title: null,
                                                                body: null,
                                                                isDismissable: true,
                                                              };
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
                                                              const obj4 = {
                                                                channel_id: tmp4,
                                                                channel_static_route: null,
                                                              };
                                                              let tmp5;
                                                              if (tmp3) {
                                                                tmp5 = id;
                                                              }
                                                              obj4.channel_static_route = tmp5;
                                                              const merged = Object.assign(obj4);
                                                              AnalyticsUtilsDefault.track(
                                                                constants.CONTEXT_MENU_IMAGE_SAVE_FAILED,
                                                                {},
                                                              );
                                                              const obj5 = {};
                                                            },
                                                          );
                                                        const nextPromise = result7.then((result) =>
                                                          MediaSourceUtil.downloadMediaAssetWithContentType(
                                                            result,
                                                            id2 ? constants6.GIF : constants6.IMAGE,
                                                            channel.contentType,
                                                          ),
                                                        );
                                                      }
                                                      result7 = Promise.resolve(selectedMedia.mediaUrl);
                                                      const tmp130Result43 = tmp130(1366);
                                                    }
                                                  } else {
                                                    const intl49 = channel(1115).intl;
                                                    if (intl49.string(channel(1115).t.JVuuz3) === label) {
                                                      let mediaUrl1;
                                                      if (selectedMedia != null) {
                                                        mediaUrl1 = selectedMedia.mediaUrl;
                                                      }
                                                      if (null != mediaUrl1) {
                                                        const result8 = channel(8386).downloadMediaAssetWithContentType(
                                                          selectedMedia.mediaUrl,
                                                          constants6.VIDEO,
                                                          selectedMedia.contentType,
                                                        );
                                                        result8.then(
                                                          () => {
                                                            channel(4337).presentVideoSaved();
                                                          },
                                                          () => {
                                                            const obj2 = {
                                                              title: null,
                                                              body: null,
                                                              isDismissable: true,
                                                            };
                                                            const intl = channel(1115).intl;
                                                            obj2.title = intl.string(channel(1115).t.cV3alD);
                                                            const intl2 = channel(1115).intl;
                                                            obj2.body = intl2.string(channel(1115).t.r4Zjzv);
                                                            id(4983).show(obj2);
                                                          },
                                                        );
                                                        const tmpResult51 = channel(8386);
                                                      }
                                                    } else {
                                                      const intl50 = channel(1115).intl;
                                                      if (intl50.string(channel(1115).t.vbAEaA) === label) {
                                                        let mediaUrl2;
                                                        if (selectedMedia != null) {
                                                          mediaUrl2 = selectedMedia.mediaUrl;
                                                        }
                                                        if (null != mediaUrl2) {
                                                          const obj21 = { href: mediaUrl2 };
                                                          channel(8491).handleClick(obj21);
                                                          const tmpResult52 = channel(8491);
                                                        }
                                                      } else {
                                                        const intl51 = channel(1115).intl;
                                                        if (intl51.string(channel(1115).t["92CPQ+"]) !== label) {
                                                          const intl52 = channel(1115).intl;
                                                          if (intl52.string(channel(1115).t["8xHmxo"]) !== label) {
                                                            const intl53 = channel(1115).intl;
                                                            if (intl53.string(channel(1115).t["5IEsGx"]) === label) {
                                                              const obj22 = {
                                                                message,
                                                                channel,
                                                                chatInputRef,
                                                                actionSource: "action_sheet",
                                                              };
                                                              tmp130(11813)(obj22);
                                                              if ("Preview" === actionSheetSource) {
                                                                channel(4650).transitionToMessage(
                                                                  channel.id,
                                                                  message.id,
                                                                );
                                                                const _setTimeout = setTimeout;
                                                                const timerId = setTimeout(() => {
                                                                  const ComponentDispatch =
                                                                    ComponentDispatchUtils.ComponentDispatch;
                                                                  return ComponentDispatch.dispatch(
                                                                    constants5.TEXTAREA_FOCUS,
                                                                    { channelId: channel.id },
                                                                  );
                                                                }, 500);
                                                                const tmpResult53 = channel(4650);
                                                              }
                                                            } else {
                                                              const intl54 = channel(1115).intl;
                                                              if (intl54.string(channel(1115).t.I3ltXO) === label) {
                                                                const obj23 = { message, source: "long-press-sheet" };
                                                                channel(11814).openForwardModal(obj23);
                                                                const tmpResult54 = channel(11814);
                                                              } else {
                                                                const intl55 = channel(1115).intl;
                                                                if (intl55.string(channel(1115).t.rBIGBL) === label) {
                                                                  let id1;
                                                                  if (message != null) {
                                                                    id1 = message.id;
                                                                  }
                                                                  const result9 = tmp130(
                                                                    7870,
                                                                  ).openThreadCreationForMobile(
                                                                    channel,
                                                                    id1,
                                                                    "Message",
                                                                  );
                                                                  let result10 = null == message;
                                                                  if (!result10) {
                                                                    const tmpResult55 = channel(4497);
                                                                    result10 = tmpResult55.navigateToCreateThread(
                                                                      channel.guild_id,
                                                                      tmp130(11).castMessageIdAsChannelId(message.id),
                                                                    );
                                                                    const tmp130Result45 = tmp130(11);
                                                                  }
                                                                  if (!result10) {
                                                                    const tmpResult56 = channel(1101);
                                                                    tmpResult56.transitionToGuild(
                                                                      channel.guild_id,
                                                                      tmp130(11).castMessageIdAsChannelId(message.id),
                                                                    );
                                                                    const tmp130Result46 = tmp130(11);
                                                                  }
                                                                  const tmp130Result44 = tmp130(7870);
                                                                } else {
                                                                  const intl56 = channel(1115).intl;
                                                                  if (
                                                                    intl56.string(channel(1115).t["39d0Wj"]) === label
                                                                  ) {
                                                                    const tmpResult57 = channel(1101);
                                                                    tmpResult57.transitionToGuild(
                                                                      channel.guild_id,
                                                                      tmp130(11).castMessageIdAsChannelId(message.id),
                                                                    );
                                                                    const tmp130Result47 = tmp130(11);
                                                                  } else {
                                                                    const intl57 = channel(1115).intl;
                                                                    if (
                                                                      intl57.string(channel(1115).t.PHjkRE) === label
                                                                    ) {
                                                                      tmp130(4606).hideActionSheet();
                                                                      const tmp130Result48 = tmp130(4606);
                                                                      const obj24 = {
                                                                        channel,
                                                                        commandType:
                                                                          channel(1895).ApplicationCommandType.MESSAGE,
                                                                        commandTargetId: message.id,
                                                                      };
                                                                      const result11 =
                                                                        channel(4497).navigateToContextMenuCommands(
                                                                          obj24,
                                                                        );
                                                                      const tmpResult58 = channel(4497);
                                                                    } else {
                                                                      const intl58 = channel(1115).intl;
                                                                      if (
                                                                        intl58.string(channel(1115).t.tpxJto) === label
                                                                      ) {
                                                                        const obj25 = {
                                                                          channelId: id,
                                                                          messageId: id2,
                                                                          displayToast: true,
                                                                          source:
                                                                            channel(11843).SavedMessageSources
                                                                              .LONG_PRESS_ACTION_SHEET,
                                                                        };
                                                                        const result12 =
                                                                          channel(11838).addOrUpdateSavedMessage(obj25);
                                                                        const tmpResult59 = channel(11838);
                                                                      } else {
                                                                        const intl59 = channel(1115).intl;
                                                                        if (
                                                                          intl59.string(channel(1115).t.SvXS1Z) ===
                                                                          label
                                                                        ) {
                                                                          const obj26 = {
                                                                            channelId: id,
                                                                            messageId: id2,
                                                                            displayToast: true,
                                                                          };
                                                                          channel(11838).removeSavedMessage(obj26);
                                                                          const tmpResult60 = channel(11838);
                                                                        } else {
                                                                          const intl60 = channel(1115).intl;
                                                                          if (
                                                                            intl60.string(channel(1115).t.mJ3P0N) ===
                                                                            label
                                                                          ) {
                                                                            const obj27 = {
                                                                              createReminder(dueAt) {
                                                                                const obj = SavedMessageHelpers;
                                                                                return obj.addOrUpdateSavedMessage({
                                                                                  channelId: id,
                                                                                  messageId: id2,
                                                                                  dueAt,
                                                                                  displayToast: true,
                                                                                  source:
                                                                                    SavedMessageSources
                                                                                      .SavedMessageSources
                                                                                      .LONG_PRESS_ACTION_SHEET,
                                                                                });
                                                                              },
                                                                              channelId: null,
                                                                              messageId: null,
                                                                              onBack: null,
                                                                            };
                                                                            ({
                                                                              channel_id: obj16.channelId,
                                                                              id: obj16.messageId,
                                                                            } = message);
                                                                            obj27.onBack = onBack;
                                                                            tmp130(4606).openLazy(
                                                                              channel(1897)(11844, dependencyMap.paths),
                                                                              "MessageReminderDurationActionSheet",
                                                                              obj27,
                                                                            );
                                                                            const tmp130Result49 = tmp130(4606);
                                                                          } else {
                                                                            const intl61 = channel(1115).intl;
                                                                            if (
                                                                              intl61.string(channel(1115).t.vrbqs1) ===
                                                                              label
                                                                            ) {
                                                                              const obj28 = {
                                                                                createReminder(dueAt) {
                                                                                  const obj = SavedMessageHelpers;
                                                                                  return obj.addOrUpdateSavedMessage({
                                                                                    channelId: id,
                                                                                    messageId: id2,
                                                                                    dueAt,
                                                                                    displayToast: true,
                                                                                    source:
                                                                                      SavedMessageSources
                                                                                        .SavedMessageSources
                                                                                        .LONG_PRESS_ACTION_SHEET,
                                                                                  });
                                                                                },
                                                                                removeReminder() {
                                                                                  return SavedMessageHelpers.removeSavedMessage(
                                                                                    {
                                                                                      channelId: id,
                                                                                      messageId: id2,
                                                                                      displayToast: true,
                                                                                      isReminder: true,
                                                                                    },
                                                                                  );
                                                                                },
                                                                                channelId: null,
                                                                                messageId: null,
                                                                                onBack: null,
                                                                              };
                                                                              ({
                                                                                channel_id: obj14.channelId,
                                                                                id: obj14.messageId,
                                                                              } = message);
                                                                              obj28.onBack = onBack;
                                                                              tmp130(4606).openLazy(
                                                                                channel(1897)(
                                                                                  11844,
                                                                                  dependencyMap.paths,
                                                                                ),
                                                                                "MessageReminderDurationActionSheet",
                                                                                obj28,
                                                                              );
                                                                              const tmp130Result50 = tmp130(4606);
                                                                            } else {
                                                                              const intl62 = channel(1115).intl;
                                                                              if (
                                                                                intl62.string(
                                                                                  channel(1115).t.ZH7P2h,
                                                                                ) === label
                                                                              ) {
                                                                                if (null != selectedMedia) {
                                                                                  let id3;
                                                                                  if (
                                                                                    "embed" === selectedMedia.sourceType
                                                                                  ) {
                                                                                    id3 = selectedMedia.source.id;
                                                                                  }
                                                                                  let id4;
                                                                                  if (
                                                                                    "attachment" ===
                                                                                    selectedMedia.sourceType
                                                                                  ) {
                                                                                    id4 = selectedMedia.source.id;
                                                                                  }
                                                                                  let result13 =
                                                                                    undefined !== id3 ||
                                                                                    undefined !== id4;
                                                                                  if (!result13) {
                                                                                    result13 =
                                                                                      channel(
                                                                                        7399,
                                                                                      ).messageHasObscurableMedia(
                                                                                        message,
                                                                                      );
                                                                                    const tmpResult61 = channel(7399);
                                                                                  }
                                                                                  if (result13) {
                                                                                    const obj29 = {
                                                                                      channelId: null,
                                                                                      messageId: null,
                                                                                      attachmentId: null,
                                                                                      embedId: null,
                                                                                    };
                                                                                    ({
                                                                                      channel_id: obj12.channelId,
                                                                                      id: obj12.messageId,
                                                                                    } = message);
                                                                                    obj29.attachmentId = id4;
                                                                                    obj29.embedId = id3;
                                                                                    tmp130(4606).openLazy(
                                                                                      channel(1897)(
                                                                                        11811,
                                                                                        dependencyMap.paths,
                                                                                      ),
                                                                                      closure_20,
                                                                                      obj29,
                                                                                    );
                                                                                    const tmp130Result51 = tmp130(4606);
                                                                                  }
                                                                                }
                                                                              } else {
                                                                                const intl63 = channel(1115).intl;
                                                                                if (
                                                                                  intl63.string(
                                                                                    channel(1115).t.grdwwt,
                                                                                  ) === label
                                                                                ) {
                                                                                  ({
                                                                                    channel_id: obj9.channelId,
                                                                                    id: obj9.messageId,
                                                                                  } = message);
                                                                                  tmp130(11848).endPollEarly({
                                                                                    channelId: null,
                                                                                    messageId: null,
                                                                                  });
                                                                                  const obj30 = {
                                                                                    channelId: null,
                                                                                    messageId: null,
                                                                                  };
                                                                                  const tmp130Result52 = tmp130(11848);
                                                                                } else {
                                                                                  const intl64 = channel(1115).intl;
                                                                                  if (
                                                                                    intl64.string(
                                                                                      channel(1115).t.Rjezbz,
                                                                                    ) === label
                                                                                  ) {
                                                                                    const obj31 = {
                                                                                      message,
                                                                                      guildId: guild_id,
                                                                                      onBack,
                                                                                    };
                                                                                    tmp130(4606).openLazy(
                                                                                      channel(1897)(
                                                                                        11861,
                                                                                        dependencyMap.paths,
                                                                                      ),
                                                                                      "AppInteractionInfoActionSheet",
                                                                                      obj31,
                                                                                    );
                                                                                    const tmp130Result53 = tmp130(4606);
                                                                                  } else {
                                                                                    const intl65 = channel(1115).intl;
                                                                                    if (
                                                                                      intl65.string(
                                                                                        channel(1115).t["4sxKOb"],
                                                                                      ) !== label
                                                                                    ) {
                                                                                      const intl66 = channel(1115).intl;
                                                                                      if (
                                                                                        intl66.string(
                                                                                          channel(1115).t.wUIMqa,
                                                                                        ) !== label
                                                                                      ) {
                                                                                        const intl67 =
                                                                                          channel(1115).intl;
                                                                                        if (
                                                                                          intl67.string(
                                                                                            channel(1115).t.kFwAsa,
                                                                                          ) === label
                                                                                        ) {
                                                                                          closure_129_0 = id;
                                                                                          closure_129_1 = message;
                                                                                          closure_129_2 = selectedMedia;
                                                                                          let sourceType;
                                                                                          if (selectedMedia != null) {
                                                                                            sourceType =
                                                                                              selectedMedia.sourceType;
                                                                                          }
                                                                                          if (
                                                                                            "attachment" === sourceType
                                                                                          ) {
                                                                                            if (chatInputRef != null) {
                                                                                              const current =
                                                                                                chatInputRef.current;
                                                                                              if (current != null) {
                                                                                                current.dismissKeyboard();
                                                                                              }
                                                                                            }
                                                                                            const obj32 = {
                                                                                              title: null,
                                                                                              body: null,
                                                                                              cancelText: null,
                                                                                              confirmText: null,
                                                                                              onConfirm: null,
                                                                                            };
                                                                                            const intl3 =
                                                                                              channel(1115).intl;
                                                                                            obj32.title = intl3.string(
                                                                                              channel(1115).t.CbTIEo,
                                                                                            );
                                                                                            const intl4 =
                                                                                              channel(1115).intl;
                                                                                            obj32.body = intl4.string(
                                                                                              channel(1115).t.faHmO3,
                                                                                            );
                                                                                            const intl5 =
                                                                                              channel(1115).intl;
                                                                                            obj32.cancelText =
                                                                                              intl5.string(
                                                                                                channel(1115).t[
                                                                                                  "ETE/oC"
                                                                                                ],
                                                                                              );
                                                                                            const intl6 =
                                                                                              channel(1115).intl;
                                                                                            obj32.confirmText =
                                                                                              intl6.string(
                                                                                                channel(1115).t.kFwAsa,
                                                                                              );
                                                                                            obj32.onConfirm =
                                                                                              function onConfirm() {
                                                                                                id = id2.source.id;
                                                                                                const attachments =
                                                                                                  id.attachments;
                                                                                                const found =
                                                                                                  attachments.filter(
                                                                                                    (id) =>
                                                                                                      id.id !== id,
                                                                                                  );
                                                                                                const result =
                                                                                                  MessageActionCreatorsDefault.patchMessageAttachments(
                                                                                                    channel,
                                                                                                    id.id,
                                                                                                    found,
                                                                                                  );
                                                                                              };
                                                                                            tmp130(4983).show(obj32);
                                                                                            const tmp130Result54 =
                                                                                              tmp130(4983);
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                    closure_130_0 = id;
                                                                                    closure_130_1 = id2;
                                                                                    if (chatInputRef != null) {
                                                                                      const current2 =
                                                                                        chatInputRef.current;
                                                                                      if (current2 != null) {
                                                                                        current2.dismissKeyboard();
                                                                                      }
                                                                                    }
                                                                                    const obj33 = {
                                                                                      title: null,
                                                                                      body: null,
                                                                                      cancelText: null,
                                                                                      confirmText: null,
                                                                                      onConfirm: null,
                                                                                    };
                                                                                    const intl7 = channel(1115).intl;
                                                                                    obj33.title = intl7.string(
                                                                                      channel(1115).t.VL1KOk,
                                                                                    );
                                                                                    const intl8 = channel(1115).intl;
                                                                                    obj33.body = intl8.string(
                                                                                      channel(1115).t["vXZ+Fo"],
                                                                                    );
                                                                                    const intl9 = channel(1115).intl;
                                                                                    obj33.cancelText = intl9.string(
                                                                                      channel(1115).t["ETE/oC"],
                                                                                    );
                                                                                    const intl10 = channel(1115).intl;
                                                                                    obj33.confirmText = intl10.string(
                                                                                      channel(1115).t.YEHppG,
                                                                                    );
                                                                                    obj33.onConfirm =
                                                                                      function onConfirm() {
                                                                                        MessageActionCreatorsDefault.suppressEmbeds(
                                                                                          channel,
                                                                                          id,
                                                                                        );
                                                                                      };
                                                                                    tmp130(4983).show(obj33);
                                                                                    const tmp130Result55 = tmp130(4983);
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
                                                          channel(7296).copy(mediaUrl3);
                                                          const tmpResult62 = channel(7296);
                                                          channel(4337).presentLinkCopied();
                                                          flag = true;
                                                          const tmpResult63 = channel(4337);
                                                        }
                                                        if (flag) {
                                                          let hostname;
                                                          if (null != mediaUrl3) {
                                                            hostname = channel(8494).getHostname(mediaUrl3);
                                                            const tmpResult64 = channel(8494);
                                                          }
                                                          const obj34 = { hostname };
                                                          const tmp40 = isStaticChannelRoute(id);
                                                          let tmp41;
                                                          if (!tmp40) {
                                                            tmp41 = id;
                                                          }
                                                          const obj35 = {
                                                            channel_id: tmp41,
                                                            channel_static_route: null,
                                                          };
                                                          let tmp42;
                                                          if (tmp40) {
                                                            tmp42 = id;
                                                          }
                                                          obj35.channel_static_route = tmp42;
                                                          let merged = Object.assign(obj35);
                                                          tmp130(1241).track(
                                                            constants.CONTEXT_MENU_MEDIA_LINK_COPIED,
                                                            obj34,
                                                          );
                                                          const tmp130Result56 = tmp130(1241);
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
      const result14 = channel(8755).showReportModalForMessage(message, "mobile_message_action_sheet");
      const tmpResult66 = channel(8755);
    }
    tmpResult65 = channel(7396);
  }
};
