// discord_app/modules/messages/native/long_press/LongPressMessageActionSheetUtils.tsx
import SnowflakeUtilsDefault from "../../../../utils/SnowflakeUtils.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import router_utils from "../../../routing/router_utils.tsx";
import ComponentDispatchUtils from "../../../../utils/ComponentDispatchUtils.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import ChannelConstants from "../../../channel/ChannelConstants.tsx";
import MessageRecord from "../../../../records/MessageRecord.tsx";
import ToastUtils from "../../../toast/native/ToastUtils.tsx";
import NavigationRouteUtils from "../../../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import ChannelUtils from "../../../../utils/ChannelUtils.tsx";
import AnalyticsLocationDefault from "../../../app_analytics/AnalyticsLocation.tsx";
import ClipboardUtils from "../../../../utils/ClipboardUtils.native.tsx";
import MessageActionCreatorsDefault from "../../../../actions/MessageActionCreators.tsx";
import ExplicitMediaRedactionConstants from "../../../explicit_media_redaction/ExplicitMediaRedactionConstants.tsx";
import ThreadActionCreatorsDefault from "../../../threads/ThreadActionCreators.tsx";
import ForumComposerModalActionCreators from "../../../forums/native/composer/ForumComposerModalActionCreators.tsx";
import PendingReplyActionCreators from "../../../replies/PendingReplyActionCreators.tsx";
import SavedMessageHelpers from "../../../saved_messages/SavedMessageHelpers.native.tsx";
import SavedMessageSources from "../../../saved_messages/SavedMessageSources.tsx";
import react from "../../../../../_runtime/00019_react.js";
import PendingReplyStore from "../../../replies/PendingReplyStore.tsx";
import EditMessageStore from "../../../../stores/EditMessageStore.tsx";
import UploadStore from "../../../../stores/UploadStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import SendMessageOptionsStore from "../../SendMessageOptionsStore.tsx";
import Constants from "../../../../Constants.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let c10;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let map1;
let unpackModuleId;
function handleEdit(id, isForumPost, current, source) {
  let items;
  let obj8;
  let str3;
  let tmp16;
  let flag = arg4;
  if (arg4 === undefined) {
    flag = false;
  }
  if (isForumPost.isForumPost()) {
    id = isForumPost.id;
    const obj = SnowflakeUtilsDefault;
    if (id === obj.castMessageIdAsChannelId(id.id)) {
      if (null != isForumPost.parent_id) {
        const obj6 = PendingReplyActionCreators;
        obj6.deletePendingReply(isForumPost.id);
        const obj5 = {
          guildId: null,
          parentChannelId: null,
          threadId: null,
          messageId: id.id,
          isEdit: true,
          analyticsLocations: items,
          analyticsLocationObject: obj8,
        };
        ({ guild_id: obj7.guildId, parent_id: obj7.parentChannelId, id: obj7.threadId } = isForumPost);
        const openCreateForumPostModal = ForumComposerModalActionCreators.openCreateForumPostModal;
        items = [,];
        ForumComposerModalActionCreators;
        items[0] = AnalyticsLocationDefault.FORUM_CHANNEL;
        items[1] = AnalyticsLocationDefault.GUILD_CHANNEL;
        obj8 = { page: constants3.GUILD_CHANNEL, section: map1.FORUM_POST_HEADER, object: unpackModuleId.CONTEXT_MENU };
        const result = openCreateForumPostModal(obj5);
      }
    }
  }
  if (flag) {
    if ("message_swipe" === source) {
      if (EditMessageStore.isEditing(isForumPost.id, id.id)) {
        const currentUser = UserStore.getCurrentUser();
        const obj13 = {
          message_id: id.id,
          channel_id: null,
          guild_id: null,
          context_action: "edit",
          reason: "swipe_edit_undo",
          is_own_message: tmp16,
        };
        ({ id: obj4.channel_id, guild_id: obj4.guild_id } = isForumPost);
        tmp16 = null != currentUser;
        const track = AnalyticsUtilsDefault.track;
        const CHAT_CONTEXT_BAR_ACTION_CANCELED = constants.CHAT_CONTEXT_BAR_ACTION_CANCELED;
        AnalyticsUtilsDefault;
        if (tmp16) {
          tmp16 = currentUser.id === id.author.id;
        }
        track(CHAT_CONTEXT_BAR_ACTION_CANCELED, obj13);
        const tmp11Result = MessageActionCreatorsDefault;
        tmp11Result.endEditMessage(isForumPost.id);
        if (current != null) {
          const current2 = current.current;
          if (current2 != null) {
            current2.dismissKeyboard();
          }
        }
      }
    }
  }
  const pendingReply = PendingReplyStore.getPendingReply(isForumPost.id);
  if (null != pendingReply) {
    const currentUser1 = UserStore.getCurrentUser();
    const obj14 = {
      message_id: id.id,
      channel_id: null,
      guild_id: null,
      context_action: "reply",
      reason: str3,
      is_own_message: null != currentUser1 && currentUser1.id === pendingReply.message.author.id,
    };
    ({ id: obj9.channel_id, guild_id: obj9.guild_id } = isForumPost);
    const track2 = AnalyticsUtilsDefault.track;
    const CHAT_CONTEXT_BAR_ACTION_CANCELED2 = constants.CHAT_CONTEXT_BAR_ACTION_CANCELED;
    AnalyticsUtilsDefault;
    if ("message_swipe" === source) {
      str3 = "swipe_edit";
    } else if ("action_sheet" === source) {
      str3 = "action_sheet_edit";
    } else {
      str3 = "pressed_cancel";
    }
    track2(CHAT_CONTEXT_BAR_ACTION_CANCELED2, obj14);
  }
  const obj2 = PendingReplyActionCreators;
  obj2.deletePendingReply(isForumPost.id);
  const obj3 = MessageActionCreatorsDefault;
  const result1 = obj3.startEditMessageRecord(isForumPost.id, id, source);
  if (current != null) {
    current = current.current;
    if (current != null) {
      current.openSystemKeyboard();
    }
  }
}
const isMessageComponentsV2 = MessageRecord.isMessageComponentsV2;
({
  AnalyticEvents: c10,
  AnalyticsObjects: unpackModuleId,
  AnalyticsPages: closure_12,
  AnalyticsSections: map1,
  ComponentActions: closure_14,
  GIF_RE_IOS: closure_15,
  MediaType: closure_16,
  MessageStates: closure_17,
  MessageTypes: closure_18,
} = Constants);
const isStaticChannelRoute = ChannelConstants.isStaticChannelRoute;
let closure_20 = ExplicitMediaRedactionConstants.EXPLICIT_MEDIA_FALSE_POSITIVE_ACTION_SHEET_KEY;
const jsx = Fragment.jsx;
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
  const openThreadCreationForMobile = ThreadActionCreatorsDefault.openThreadCreationForMobile;
  ThreadActionCreatorsDefault;
  if (id != null) {
    id = id.id;
  }
  const result = openThreadCreationForMobile(guild_id, id, str);
  let result1 = null == id;
  if (!result1) {
    const navigateToCreateThread = NavigationRouteUtils.navigateToCreateThread;
    guild_id = guild_id.guild_id;
    NavigationRouteUtils;
    const tmpResult = SnowflakeUtilsDefault;
    result1 = navigateToCreateThread(guild_id, tmpResult.castMessageIdAsChannelId(id.id));
  }
  if (!result1) {
    const transitionToGuild = router_utils.transitionToGuild;
    const guild_id2 = guild_id.guild_id;
    router_utils;
    const tmpResult2 = SnowflakeUtilsDefault;
    transitionToGuild(guild_id2, tmpResult2.castMessageIdAsChannelId(id.id));
  }
};
export const handleCopyMessageLink = function handleCopyMessageLink(channel, message_id) {
  const obj = AnalyticsUtilsDefault;
  const obj2 = { message_id, channel: channel.id };
  obj.track(constants.MESSAGE_LINK_COPIED, obj2);
  const obj3 = ChannelUtils;
  const channelPermalink = obj3.getChannelPermalink(channel.guild_id, channel.id, message_id);
  if (null != channelPermalink) {
    const tmp3Result = ClipboardUtils;
    tmp3Result.copy(channelPermalink);
    const tmp3Result2 = ToastUtils;
    tmp3Result2.presentLinkCopied();
  }
};
export const handleCopyId = function handleCopyId(id) {
  const obj = ClipboardUtils;
  obj.copy(id);
  const obj2 = ToastUtils;
  const result = obj2.presentMessageIdCopied();
};
export const longPressMessageOptionHandler = function longPressMessageOptionHandler(analyticsLocations) {
  let actionSheetSource;
  let channel;
  let chatInputRef;
  let disabled;
  let guild_id;
  let id;
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl14;
  let intl15;
  let intl16;
  let intl17;
  let intl18;
  let intl19;
  let intl20;
  let intl21;
  let intl22;
  let intl23;
  let intl24;
  let intl25;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let label;
  let message;
  let obj19;
  let onActionExecuted;
  let onBack;
  let selectedMedia;
  let tmp51;
  ({ label, message, channel } = analyticsLocations);
  ({ chatInputRef, selectedMedia, actionSheetSource, onActionExecuted, onBack, disabled } = analyticsLocations);
  analyticsLocations = analyticsLocations.analyticsLocations;
  if (disabled === undefined) {
    disabled = false;
  }
  id = undefined;
  ({ guild_id, id } = channel);
  const id2 = message.id;
  if (!disabled) {
    let intl = channel(1126).intl;
    if (label !== intl.string(channel(1126).t.PHjkRE)) {
      let obj = id(4860);
      obj.hideActionSheet();
    }
    let intl2 = channel(1126).intl;
    if (intl2.string(channel(1126).t["+78Pfm"]) !== label) {
      const intl26 = channel(1126).intl;
      if (intl26.string(channel(1126).t.n5EBAJ) !== label) {
        const intl27 = channel(1126).intl;
        if (intl27.string(id(2653)["1D+vqy"]) === label) {
          const tmpResult = channel(6789);
          if (tmpResult.canReportMessageToMods(message)) {
            const tmpResult34 = channel(8312);
            let result = tmpResult34.showReportToModMessageModal(message);
          }
        } else {
          const intl28 = channel(1126).intl;
          if (intl28.string(channel(1126).t.k5WiPf) === label) {
            if (message.type === constants8.THREAD_STARTER_MESSAGE) {
              if (null != message.messageReference) {
                const guild_id5 = message.messageReference.guild_id;
                if (null != guild_id5) {
                  const tmpResult35 = channel(1112);
                  tmpResult35.transitionToGuild(guild_id5, tmp161, tmp160);
                }
              }
            }
          } else {
            const intl29 = channel(1126).intl;
            if (intl29.string(channel(1126).t["+TSRGD"]) === label) {
              const tmpResult36 = channel(4907);
              tmpResult36.transitionToMessage(id, id2, { navigationReplace: true });
            } else {
              const intl30 = channel(1126).intl;
              if (intl30.string(channel(1126).t.zBoHlf) === label) {
                const tmpResult37 = channel(6695);
                tmpResult37.copy(id2);
                const tmpResult38 = channel(4573);
                const result1 = tmpResult38.presentMessageIdCopied();
              } else {
                const intl31 = channel(1126).intl;
                if (intl31.string(channel(1126).t.P8tvKG) === label) {
                  const user = UserStore.getUser(message.author.id);
                  if (null != user) {
                    if (chatInputRef != null) {
                      const current7 = chatInputRef.current;
                      if (current7 != null) {
                        const insertText = current7.insertText;
                        const _HermesInternal = HermesInternal;
                        const tmp144Result = id(4728);
                        insertText("@" + tmp144Result.getUserTag(user, { decoration: "never" }), null, true);
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
                  const intl32 = channel(1126).intl;
                  if (intl32.string(channel(1126).t.cduTBL) === label) {
                    let obj2 = {
                      userId: message.author.id,
                      channelId: id,
                      messageId: message.id,
                      sourceAnalyticsLocations: analyticsLocations,
                    };
                    id(7861)(obj2);
                  } else {
                    const intl33 = channel(1126).intl;
                    if (intl33.string(channel(1126).t.fsBWmS) === label) {
                      handleEdit(message, channel, chatInputRef, "action_sheet");
                    } else {
                      const intl34 = channel(1126).intl;
                      if (intl34.string(channel(1126).t.Y8ujqr) === label) {
                        let sourceType;
                        if (selectedMedia != null) {
                          sourceType = selectedMedia.sourceType;
                        }
                        if ("attachment" === sourceType) {
                          let obj3 = { message, attachment: selectedMedia.source };
                          const tmp144Result30 = id(4860);
                          tmp144Result30.openLazy(
                            channel(1987)(11317, dependencyMap.paths),
                            "EditAttachmentActionSheet",
                            obj3,
                          );
                        }
                      } else {
                        const intl35 = channel(1126).intl;
                        if (intl35.string(channel(1126).t.MFGE51) === label) {
                          if (chatInputRef != null) {
                            const current6 = chatInputRef.current;
                            if (current6 != null) {
                              current6.dismissKeyboard();
                            }
                          }
                          const obj4 = {
                            title: intl23.string(channel(1126).t.aIz1oV),
                            children: null,
                            cancelText: intl24.string(channel(1126).t["ETE/oC"]),
                            confirmText: intl25.string(channel(1126).t["cY+Oob"]),
                            onConfirm() {
                              const obj = id(dependencyMap[17]);
                              return obj.crosspostMessage(id, id2);
                            },
                          };
                          const show6 = id(5714).show;
                          id(5714);
                          intl23 = channel(1126).intl;
                          intl24 = channel(1126).intl;
                          intl25 = channel(1126).intl;
                          show6(obj4);
                        } else {
                          const intl36 = channel(1126).intl;
                          if (intl36.string(channel(1126).t.CvQ18w) === label) {
                            if (chatInputRef != null) {
                              const current5 = chatInputRef.current;
                              if (current5 != null) {
                                current5.dismissKeyboard();
                              }
                            }
                            const obj6 = {
                              title: intl19.string(channel(1126).t.CvQ18w),
                              body: intl20.string(channel(1126).t.WG5dyo),
                              children: null,
                              cancelText: intl21.string(channel(1126).t.gm1Vej),
                              confirmText: intl22.string(channel(1126).t.p89ACt),
                              onConfirm() {
                                const obj = id(dependencyMap[22]);
                                obj.pinMessage(channel, message.id);
                                const AccessibilityAnnouncer = channel(dependencyMap[23]).AccessibilityAnnouncer;
                                const announce = AccessibilityAnnouncer.announce;
                                const intl = channel(dependencyMap[19]).intl;
                                announce(intl.string(channel(dependencyMap[19]).t.sCfDDl));
                              },
                            };
                            const show5 = id(5714).show;
                            id(5714);
                            intl19 = channel(1126).intl;
                            intl20 = channel(1126).intl;
                            intl21 = channel(1126).intl;
                            intl22 = channel(1126).intl;
                            show5(obj6);
                          } else {
                            const intl37 = channel(1126).intl;
                            if (intl37.string(channel(1126).t["Bse+F/"]) === label) {
                              if (chatInputRef != null) {
                                const current4 = chatInputRef.current;
                                if (current4 != null) {
                                  current4.dismissKeyboard();
                                }
                              }
                              const obj9 = {
                                title: intl15.string(channel(1126).t["Bse+F/"]),
                                body: intl16.string(channel(1126).t.NjEPp7),
                                children: null,
                                cancelText: intl17.string(channel(1126).t.gm1Vej),
                                confirmText: intl18.string(channel(1126).t.p89ACt),
                                onConfirm() {
                                  const obj = id(dependencyMap[22]);
                                  return obj.unpinMessage(channel, message.id);
                                },
                              };
                              const show4 = id(5714).show;
                              id(5714);
                              intl15 = channel(1126).intl;
                              intl16 = channel(1126).intl;
                              intl17 = channel(1126).intl;
                              intl18 = channel(1126).intl;
                              show4(obj9);
                            } else {
                              const intl38 = channel(1126).intl;
                              if (intl38.string(channel(1126).t["lE/PG3"]) === label) {
                                const tmp144Result34 = id(6978);
                                const result2 = tmp144Result34.patchMessageGuildOfficial(id, id2, true);
                              } else {
                                const intl39 = channel(1126).intl;
                                if (intl39.string(channel(1126).t["2km5Gf"]) === label) {
                                  const tmp144Result35 = id(6978);
                                  const result3 = tmp144Result35.patchMessageGuildOfficial(id, id2, false);
                                } else {
                                  const intl40 = channel(1126).intl;
                                  if (intl40.string(channel(1126).t.xwMqD7) === label) {
                                    if (message.state === constants7.SENDING) {
                                      const tmp144Result36 = id(7473);
                                      tmp144Result36.cancelRequest(id2);
                                      const tmp144Result37 = id(6978);
                                      tmp144Result37.deleteMessage(id, id2, true);
                                    } else if (message.state === tmp95.SEND_FAILED) {
                                      const tmp144Result38 = id(6978);
                                      tmp144Result38.deleteMessage(id, id2, true);
                                    } else {
                                      if (chatInputRef != null) {
                                        const current3 = chatInputRef.current;
                                        if (current3 != null) {
                                          current3.dismissKeyboard();
                                        }
                                      }
                                      const obj13 = {
                                        title: intl11.string(channel(1126).t.MWMcg7),
                                        body: intl12.string(channel(1126).t.AMvpS4),
                                        children: null,
                                        cancelText: intl13.string(channel(1126).t.gm1Vej),
                                        confirmText: intl14.string(channel(1126).t.p89ACt),
                                        onConfirm() {
                                          id = message.id;
                                          const obj = id(dependencyMap[17]);
                                          obj.deleteMessage(id, id, false);
                                        },
                                      };
                                      const show3 = id(5714).show;
                                      id(5714);
                                      intl11 = channel(1126).intl;
                                      intl12 = channel(1126).intl;
                                      intl13 = channel(1126).intl;
                                      intl14 = channel(1126).intl;
                                      show3(obj13);
                                    }
                                    const obj16 = {
                                      channel_id: id,
                                      guild_id,
                                      action_sheet_option: "delete",
                                      message_state: message.state,
                                    };
                                    const tmp144Result40 = id(5076);
                                    tmp144Result40.trackWithMetadata(
                                      constants.MESSAGE_ACTION_SHEET_OPTION_PRESSED,
                                      obj16,
                                    );
                                  } else {
                                    const intl41 = channel(1126).intl;
                                    if (intl41.string(channel(1126).t["5911Lb"]) === label) {
                                      const uploaderFileForMessageId = UploadStore.getUploaderFileForMessageId(
                                        message.id,
                                      );
                                      let items;
                                      if (uploaderFileForMessageId != null) {
                                        items = uploaderFileForMessageId.items;
                                      }
                                      const tmp144Result41 = id(11313);
                                      tmp144Result41(
                                        channel,
                                        message,
                                        items,
                                        SendMessageOptionsStore.getOptions(message.id),
                                      );
                                      const obj17 = {
                                        channel_id: id,
                                        guild_id,
                                        action_sheet_option: "retry",
                                        message_state: message.state,
                                      };
                                      const tmp144Result42 = id(5076);
                                      tmp144Result42.trackWithMetadata(
                                        constants.MESSAGE_ACTION_SHEET_OPTION_PRESSED,
                                        obj17,
                                      );
                                    } else {
                                      const intl42 = channel(1126).intl;
                                      if (intl42.string(channel(1126).t.JrGD7E) === label) {
                                        const contentMessage = message.getContentMessage();
                                        if (isMessageComponentsV2(contentMessage)) {
                                          const tmpResult39 = channel(5120);
                                          const allTextDisplayContent = tmpResult39.getAllTextDisplayContent(
                                            contentMessage.components,
                                          );
                                          if (null != allTextDisplayContent) {
                                            const tmpResult40 = channel(6695);
                                            tmpResult40.copy(allTextDisplayContent);
                                          }
                                        } else {
                                          const tmpResult41 = channel(6695);
                                          tmpResult41.copy(contentMessage.content);
                                        }
                                        const tmpResult42 = channel(4573);
                                        tmpResult42.presentMessageCopied();
                                      } else {
                                        const intl43 = channel(1126).intl;
                                        if (intl43.string(channel(1126).t.lfIHs4) === label) {
                                          const tmpResult43 = channel(9868);
                                          const result4 = tmpResult43.handleAddNewReactions(channel, id2);
                                        } else {
                                          const intl44 = channel(1126).intl;
                                          if (intl44.string(channel(1126).t.gHp0C4) === label) {
                                            if ("Preview" === actionSheetSource) {
                                              const tmpResult44 = channel(9868);
                                              const result5 = tmpResult44.handleViewPreviewReactions(id2, id);
                                            } else {
                                              const obj18 = { messageId: id2, channelId: id, location: obj19 };
                                              obj19 = { object: constants2.MESSAGE_ACTION_SHEET };
                                              const tmpResult45 = channel(9868);
                                              tmpResult45.handleViewReactions(obj18);
                                            }
                                          } else {
                                            const intl45 = channel(1126).intl;
                                            if (intl45.string(channel(1126).t.ZbtGBm) === label) {
                                              const tmpResult46 = channel(9868);
                                              const result6 = tmpResult46.handleRemoveAllReactions(id, id2);
                                            } else {
                                              const intl46 = channel(1126).intl;
                                              if (intl46.string(channel(1126).t["g33r/P"]) === label) {
                                                const id3 = message.author.id;
                                                const obj20 = { recipientIds: id3 };
                                                const tmp144Result43 = id(4909);
                                                tmp144Result43.openPrivateChannel(obj20);
                                              } else {
                                                const intl47 = channel(1126).intl;
                                                if (intl47.string(channel(1126).t.Xrt5Po) === label) {
                                                  const obj21 = { message_id: id2, channel: channel.id };
                                                  const tmp144Result44 = id(1252);
                                                  tmp144Result44.track(constants.MESSAGE_LINK_COPIED, obj21);
                                                  const tmpResult47 = channel(5041);
                                                  const channelPermalink = tmpResult47.getChannelPermalink(
                                                    channel.guild_id,
                                                    channel.id,
                                                    id2,
                                                  );
                                                  if (null != channelPermalink) {
                                                    const tmpResult48 = channel(6695);
                                                    tmpResult48.copy(channelPermalink);
                                                    const tmpResult49 = channel(4573);
                                                    tmpResult49.presentLinkCopied();
                                                  }
                                                } else {
                                                  const intl48 = channel(1126).intl;
                                                  if (intl48.string(channel(1126).t.RpE9k7) === label) {
                                                    id(10068)(id, id2);
                                                  } else {
                                                    const intl49 = channel(1126).intl;
                                                    if (intl49.string(channel(1126).t["S/xNKV"]) === label) {
                                                      let mediaUrl;
                                                      if (selectedMedia != null) {
                                                        mediaUrl = selectedMedia.mediaUrl;
                                                      }
                                                      if (null != mediaUrl) {
                                                        const tmpResult50 = channel(5046);
                                                        let closure_2 = tmpResult50.urlMatchesFileExtension(
                                                          selectedMedia.mediaUrl,
                                                          closure_15,
                                                        );
                                                        const tmp144Result45 = id(1371);
                                                        const toURLSafeResult = tmp144Result45.toURLSafe(
                                                          selectedMedia.mediaUrl,
                                                        );
                                                        if (null != toURLSafeResult) {
                                                          let result7;
                                                          const obj31 = id2(7529);
                                                          const tmp62 = id2;
                                                          if (obj31.isRefreshableAttachmentUrl(toURLSafeResult)) {
                                                            const tmp62Result = tmp62(7529);
                                                            result7 = tmp62Result.maybeRefreshAttachmentUrl(
                                                              selectedMedia.mediaUrl,
                                                            );
                                                          }
                                                          const nextPromise = result7.then((result) => {
                                                            const obj = channel(dependencyMap[38]);
                                                            return obj.downloadMediaAssetWithContentType(
                                                              result,
                                                              closure_2 ? constants6.GIF : constants6.IMAGE,
                                                              selectedMedia.contentType,
                                                            );
                                                          });
                                                          nextPromise.then(
                                                            () => {
                                                              let tmp7;
                                                              const obj = channel(dependencyMap[31]);
                                                              if (closure_2) {
                                                                obj.presentGifSaved();
                                                              } else {
                                                                obj.presentImageSaved();
                                                              }
                                                              const track = id(dependencyMap[16]).track;
                                                              const CONTEXT_MENU_IMAGE_SAVED =
                                                                constants.CONTEXT_MENU_IMAGE_SAVED;
                                                              id(dependencyMap[16]);
                                                              const tmp5 = isStaticChannelRoute(id);
                                                              let tmp6;
                                                              if (!tmp5) {
                                                                tmp6 = id;
                                                              }
                                                              const obj2 = {
                                                                channel_id: tmp6,
                                                                channel_static_route: tmp7,
                                                              };
                                                              tmp7 = undefined;
                                                              if (tmp5) {
                                                                tmp7 = id;
                                                              }
                                                              const obj3 = {};
                                                              const merged = Object.assign(obj2);
                                                              track(CONTEXT_MENU_IMAGE_SAVED, obj3);
                                                            },
                                                            () => {
                                                              let intl;
                                                              let intl2;
                                                              let tmp7;
                                                              const obj = {
                                                                title: intl.string(channel(dependencyMap[19]).t.cV3alD),
                                                                body: intl2.string(channel(dependencyMap[19]).t.r4Zjzv),
                                                                isDismissable: true,
                                                              };
                                                              const show = id(dependencyMap[18]).show;
                                                              id(dependencyMap[18]);
                                                              intl = channel(dependencyMap[19]).intl;
                                                              intl2 = channel(dependencyMap[19]).intl;
                                                              show(obj);
                                                              const track = id(dependencyMap[16]).track;
                                                              const CONTEXT_MENU_IMAGE_SAVE_FAILED =
                                                                constants.CONTEXT_MENU_IMAGE_SAVE_FAILED;
                                                              id(dependencyMap[16]);
                                                              const tmp5 = isStaticChannelRoute(id);
                                                              let tmp6;
                                                              if (!tmp5) {
                                                                tmp6 = id;
                                                              }
                                                              const obj2 = {
                                                                channel_id: tmp6,
                                                                channel_static_route: tmp7,
                                                              };
                                                              tmp7 = undefined;
                                                              if (tmp5) {
                                                                tmp7 = id;
                                                              }
                                                              const obj3 = {};
                                                              const merged = Object.assign(obj2);
                                                              track(CONTEXT_MENU_IMAGE_SAVE_FAILED, obj3);
                                                            },
                                                          );
                                                        }
                                                        result7 = Promise.resolve(selectedMedia.mediaUrl);
                                                      }
                                                    } else {
                                                      const intl50 = channel(1126).intl;
                                                      if (intl50.string(channel(1126).t.JVuuz3) === label) {
                                                        let mediaUrl1;
                                                        if (selectedMedia != null) {
                                                          mediaUrl1 = selectedMedia.mediaUrl;
                                                        }
                                                        if (null != mediaUrl1) {
                                                          const tmpResult51 = channel(7950);
                                                          const result8 = tmpResult51.downloadMediaAssetWithContentType(
                                                            selectedMedia.mediaUrl,
                                                            constants6.VIDEO,
                                                            selectedMedia.contentType,
                                                          );
                                                          result8.then(
                                                            () => {
                                                              const obj = channel(dependencyMap[31]);
                                                              obj.presentVideoSaved();
                                                            },
                                                            () => {
                                                              let intl;
                                                              let intl2;
                                                              const obj = {
                                                                title: intl.string(channel(dependencyMap[19]).t.cV3alD),
                                                                body: intl2.string(channel(dependencyMap[19]).t.r4Zjzv),
                                                                isDismissable: true,
                                                              };
                                                              const show = id(dependencyMap[18]).show;
                                                              id(dependencyMap[18]);
                                                              intl = channel(dependencyMap[19]).intl;
                                                              intl2 = channel(dependencyMap[19]).intl;
                                                              show(obj);
                                                            },
                                                          );
                                                        }
                                                      } else {
                                                        const intl51 = channel(1126).intl;
                                                        if (intl51.string(channel(1126).t.vbAEaA) === label) {
                                                          let mediaUrl2;
                                                          if (selectedMedia != null) {
                                                            mediaUrl2 = selectedMedia.mediaUrl;
                                                          }
                                                          if (null != mediaUrl2) {
                                                            const obj22 = { href: mediaUrl2 };
                                                            const tmpResult52 = channel(8057);
                                                            tmpResult52.handleClick(obj22);
                                                          }
                                                        } else {
                                                          const intl52 = channel(1126).intl;
                                                          if (intl52.string(channel(1126).t["92CPQ+"]) !== label) {
                                                            const intl53 = channel(1126).intl;
                                                            if (intl53.string(channel(1126).t["8xHmxo"]) !== label) {
                                                              const intl54 = channel(1126).intl;
                                                              if (intl54.string(channel(1126).t["5IEsGx"]) === label) {
                                                                const obj23 = {
                                                                  message,
                                                                  channel,
                                                                  chatInputRef,
                                                                  actionSource: "action_sheet",
                                                                };
                                                                id(11318)(obj23);
                                                                if ("Preview" === actionSheetSource) {
                                                                  const tmpResult53 = channel(4907);
                                                                  tmpResult53.transitionToMessage(
                                                                    channel.id,
                                                                    message.id,
                                                                  );
                                                                  const _setTimeout = setTimeout;
                                                                  const timerId = setTimeout(() => {
                                                                    const ComponentDispatch =
                                                                      ComponentDispatchUtils.ComponentDispatch;
                                                                    const obj = { channelId: channel.id };
                                                                    return ComponentDispatch.dispatch(
                                                                      constants.TEXTAREA_FOCUS,
                                                                      obj,
                                                                    );
                                                                  }, 500);
                                                                }
                                                              } else {
                                                                const intl55 = channel(1126).intl;
                                                                if (intl55.string(channel(1126).t.I3ltXO) === label) {
                                                                  const obj24 = { message, source: "long-press-sheet" };
                                                                  const tmpResult54 = channel(11319);
                                                                  tmpResult54.openForwardModal(obj24);
                                                                } else {
                                                                  const intl56 = channel(1126).intl;
                                                                  if (intl56.string(channel(1126).t.rBIGBL) === label) {
                                                                    let id1;
                                                                    const openThreadCreationForMobile =
                                                                      id(7274).openThreadCreationForMobile;
                                                                    id(7274);
                                                                    if (message != null) {
                                                                      id1 = message.id;
                                                                    }
                                                                    const result9 = openThreadCreationForMobile(
                                                                      channel,
                                                                      id1,
                                                                      "Message",
                                                                    );
                                                                    let result10 = null == message;
                                                                    if (!result10) {
                                                                      const navigateToCreateThread =
                                                                        channel(4742).navigateToCreateThread;
                                                                      const guild_id3 = channel.guild_id;
                                                                      channel(4742);
                                                                      const tmp144Result47 = id(11);
                                                                      result10 = navigateToCreateThread(
                                                                        guild_id3,
                                                                        tmp144Result47.castMessageIdAsChannelId(
                                                                          message.id,
                                                                        ),
                                                                      );
                                                                    }
                                                                    if (!result10) {
                                                                      const transitionToGuild2 =
                                                                        channel(1112).transitionToGuild;
                                                                      const guild_id4 = channel.guild_id;
                                                                      channel(1112);
                                                                      const tmp144Result48 = id(11);
                                                                      transitionToGuild2(
                                                                        guild_id4,
                                                                        tmp144Result48.castMessageIdAsChannelId(
                                                                          message.id,
                                                                        ),
                                                                      );
                                                                    }
                                                                  } else {
                                                                    const intl57 = channel(1126).intl;
                                                                    if (
                                                                      intl57.string(channel(1126).t["39d0Wj"]) === label
                                                                    ) {
                                                                      const transitionToGuild =
                                                                        channel(1112).transitionToGuild;
                                                                      const guild_id2 = channel.guild_id;
                                                                      channel(1112);
                                                                      const tmp144Result49 = id(11);
                                                                      transitionToGuild(
                                                                        guild_id2,
                                                                        tmp144Result49.castMessageIdAsChannelId(
                                                                          message.id,
                                                                        ),
                                                                      );
                                                                    } else {
                                                                      const intl58 = channel(1126).intl;
                                                                      if (
                                                                        intl58.string(channel(1126).t.PHjkRE) === label
                                                                      ) {
                                                                        const tmp144Result50 = id(4860);
                                                                        tmp144Result50.hideActionSheet();
                                                                        const obj25 = {
                                                                          channel,
                                                                          commandType:
                                                                            channel(1985).ApplicationCommandType
                                                                              .MESSAGE,
                                                                          commandTargetId: message.id,
                                                                        };
                                                                        const navigateToContextMenuCommands =
                                                                          channel(4742).navigateToContextMenuCommands;
                                                                        channel(4742);
                                                                        const result11 =
                                                                          navigateToContextMenuCommands(obj25);
                                                                      } else {
                                                                        const intl59 = channel(1126).intl;
                                                                        if (
                                                                          intl59.string(channel(1126).t.tpxJto) ===
                                                                          label
                                                                        ) {
                                                                          const obj26 = {
                                                                            channelId: id,
                                                                            messageId: id2,
                                                                            displayToast: true,
                                                                            source:
                                                                              channel(11352).SavedMessageSources
                                                                                .LONG_PRESS_ACTION_SHEET,
                                                                          };
                                                                          const addOrUpdateSavedMessage =
                                                                            channel(11347).addOrUpdateSavedMessage;
                                                                          channel(11347);
                                                                          const result12 =
                                                                            addOrUpdateSavedMessage(obj26);
                                                                        } else {
                                                                          const intl60 = channel(1126).intl;
                                                                          if (
                                                                            intl60.string(channel(1126).t.SvXS1Z) ===
                                                                            label
                                                                          ) {
                                                                            const obj27 = {
                                                                              channelId: id,
                                                                              messageId: id2,
                                                                              displayToast: true,
                                                                            };
                                                                            const tmpResult60 = channel(11347);
                                                                            tmpResult60.removeSavedMessage(obj27);
                                                                          } else {
                                                                            const intl61 = channel(1126).intl;
                                                                            if (
                                                                              intl61.string(channel(1126).t.mJ3P0N) ===
                                                                              label
                                                                            ) {
                                                                              const obj28 = {
                                                                                createReminder(dueAt) {
                                                                                  const obj = SavedMessageHelpers;
                                                                                  const obj2 = {
                                                                                    channelId: id,
                                                                                    messageId: id2,
                                                                                    dueAt,
                                                                                    displayToast: true,
                                                                                    source:
                                                                                      SavedMessageSources
                                                                                        .SavedMessageSources
                                                                                        .LONG_PRESS_ACTION_SHEET,
                                                                                  };
                                                                                  return obj.addOrUpdateSavedMessage(
                                                                                    obj2,
                                                                                  );
                                                                                },
                                                                                channelId: null,
                                                                                messageId: null,
                                                                                onBack,
                                                                              };
                                                                              ({
                                                                                channel_id: obj14.channelId,
                                                                                id: obj14.messageId,
                                                                              } = message);
                                                                              const tmp144Result51 = id(4860);
                                                                              tmp144Result51.openLazy(
                                                                                channel(1987)(
                                                                                  11353,
                                                                                  dependencyMap.paths,
                                                                                ),
                                                                                "MessageReminderDurationActionSheet",
                                                                                obj28,
                                                                              );
                                                                            } else {
                                                                              const intl62 = channel(1126).intl;
                                                                              if (
                                                                                intl62.string(
                                                                                  channel(1126).t.vrbqs1,
                                                                                ) === label
                                                                              ) {
                                                                                const obj29 = {
                                                                                  createReminder(dueAt) {
                                                                                    const obj = SavedMessageHelpers;
                                                                                    const obj2 = {
                                                                                      channelId: id,
                                                                                      messageId: id2,
                                                                                      dueAt,
                                                                                      displayToast: true,
                                                                                      source:
                                                                                        SavedMessageSources
                                                                                          .SavedMessageSources
                                                                                          .LONG_PRESS_ACTION_SHEET,
                                                                                    };
                                                                                    return obj.addOrUpdateSavedMessage(
                                                                                      obj2,
                                                                                    );
                                                                                  },
                                                                                  removeReminder() {
                                                                                    const obj = SavedMessageHelpers;
                                                                                    const obj2 = {
                                                                                      channelId: id,
                                                                                      messageId: id2,
                                                                                      displayToast: true,
                                                                                      isReminder: true,
                                                                                    };
                                                                                    return obj.removeSavedMessage(obj2);
                                                                                  },
                                                                                  channelId: null,
                                                                                  messageId: null,
                                                                                  onBack,
                                                                                };
                                                                                ({
                                                                                  channel_id: obj12.channelId,
                                                                                  id: obj12.messageId,
                                                                                } = message);
                                                                                const tmp144Result52 = id(4860);
                                                                                tmp144Result52.openLazy(
                                                                                  channel(1987)(
                                                                                    11353,
                                                                                    dependencyMap.paths,
                                                                                  ),
                                                                                  "MessageReminderDurationActionSheet",
                                                                                  obj29,
                                                                                );
                                                                              } else {
                                                                                const intl63 = channel(1126).intl;
                                                                                if (
                                                                                  intl63.string(
                                                                                    channel(1126).t.ZH7P2h,
                                                                                  ) === label
                                                                                ) {
                                                                                  if (null != selectedMedia) {
                                                                                    let id4;
                                                                                    if (
                                                                                      "embed" ===
                                                                                      selectedMedia.sourceType
                                                                                    ) {
                                                                                      id4 = selectedMedia.source.id;
                                                                                    }
                                                                                    let id5;
                                                                                    if (
                                                                                      "attachment" ===
                                                                                      selectedMedia.sourceType
                                                                                    ) {
                                                                                      id5 = selectedMedia.source.id;
                                                                                    }
                                                                                    let result13 =
                                                                                      undefined !== id4 ||
                                                                                      undefined !== id5;
                                                                                    if (!result13) {
                                                                                      const tmpResult61 = channel(6805);
                                                                                      result13 =
                                                                                        tmpResult61.messageHasObscurableMedia(
                                                                                          message,
                                                                                        );
                                                                                    }
                                                                                    if (result13) {
                                                                                      const obj30 = {
                                                                                        channelId: null,
                                                                                        messageId: null,
                                                                                        attachmentId: id5,
                                                                                        embedId: id4,
                                                                                      };
                                                                                      ({
                                                                                        channel_id: obj10.channelId,
                                                                                        id: obj10.messageId,
                                                                                      } = message);
                                                                                      const tmp144Result53 = id(4860);
                                                                                      tmp144Result53.openLazy(
                                                                                        channel(1987)(
                                                                                          11314,
                                                                                          dependencyMap.paths,
                                                                                        ),
                                                                                        closure_20,
                                                                                        obj30,
                                                                                      );
                                                                                    }
                                                                                  }
                                                                                } else {
                                                                                  const intl64 = channel(1126).intl;
                                                                                  if (
                                                                                    intl64.string(
                                                                                      channel(1126).t.grdwwt,
                                                                                    ) === label
                                                                                  ) {
                                                                                    const obj32 = {
                                                                                      channelId: null,
                                                                                      messageId: null,
                                                                                    };
                                                                                    ({
                                                                                      channel_id: obj7.channelId,
                                                                                      id: obj7.messageId,
                                                                                    } = message);
                                                                                    const tmp144Result54 = id(11357);
                                                                                    tmp144Result54.endPollEarly(obj32);
                                                                                  } else {
                                                                                    const intl65 = channel(1126).intl;
                                                                                    if (
                                                                                      intl65.string(
                                                                                        channel(1126).t.Rjezbz,
                                                                                      ) === label
                                                                                    ) {
                                                                                      const obj33 = {
                                                                                        message,
                                                                                        guildId: guild_id,
                                                                                        onBack,
                                                                                      };
                                                                                      const tmp144Result55 = id(4860);
                                                                                      tmp144Result55.openLazy(
                                                                                        channel(1987)(
                                                                                          11370,
                                                                                          dependencyMap.paths,
                                                                                        ),
                                                                                        "AppInteractionInfoActionSheet",
                                                                                        obj33,
                                                                                      );
                                                                                    } else {
                                                                                      const intl66 = channel(1126).intl;
                                                                                      if (
                                                                                        intl66.string(
                                                                                          channel(1126).t["4sxKOb"],
                                                                                        ) !== label
                                                                                      ) {
                                                                                        const intl67 =
                                                                                          channel(1126).intl;
                                                                                        if (
                                                                                          intl67.string(
                                                                                            channel(1126).t.wUIMqa,
                                                                                          ) !== label
                                                                                        ) {
                                                                                          const intl68 =
                                                                                            channel(1126).intl;
                                                                                          if (
                                                                                            intl68.string(
                                                                                              channel(1126).t.kFwAsa,
                                                                                            ) === label
                                                                                          ) {
                                                                                            let sourceType1;
                                                                                            if (selectedMedia != null) {
                                                                                              sourceType1 =
                                                                                                selectedMedia.sourceType;
                                                                                            }
                                                                                            if (
                                                                                              "attachment" ===
                                                                                              sourceType1
                                                                                            ) {
                                                                                              if (
                                                                                                chatInputRef != null
                                                                                              ) {
                                                                                                const current =
                                                                                                  chatInputRef.current;
                                                                                                if (current != null) {
                                                                                                  current.dismissKeyboard();
                                                                                                }
                                                                                              }
                                                                                              const obj34 = {
                                                                                                title: intl3.string(
                                                                                                  channel(1126).t
                                                                                                    .CbTIEo,
                                                                                                ),
                                                                                                body: intl4.string(
                                                                                                  channel(1126).t
                                                                                                    .faHmO3,
                                                                                                ),
                                                                                                cancelText:
                                                                                                  intl5.string(
                                                                                                    channel(1126).t[
                                                                                                      "ETE/oC"
                                                                                                    ],
                                                                                                  ),
                                                                                                confirmText:
                                                                                                  intl6.string(
                                                                                                    channel(1126).t
                                                                                                      .kFwAsa,
                                                                                                  ),
                                                                                                onConfirm() {
                                                                                                  id =
                                                                                                    selectedMedia.source
                                                                                                      .id;
                                                                                                  const attachments =
                                                                                                    message.attachments;
                                                                                                  const found =
                                                                                                    attachments.filter(
                                                                                                      (id) =>
                                                                                                        id.id !== id,
                                                                                                    );
                                                                                                  const obj = id(
                                                                                                    dependencyMap[17],
                                                                                                  );
                                                                                                  const result =
                                                                                                    obj.patchMessageAttachments(
                                                                                                      id,
                                                                                                      message.id,
                                                                                                      found,
                                                                                                    );
                                                                                                },
                                                                                              };
                                                                                              let show = id(5714).show;
                                                                                              id(5714);
                                                                                              intl3 =
                                                                                                channel(1126).intl;
                                                                                              intl4 =
                                                                                                channel(1126).intl;
                                                                                              intl5 =
                                                                                                channel(1126).intl;
                                                                                              intl6 =
                                                                                                channel(1126).intl;
                                                                                              show(obj34);
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                      if (chatInputRef != null) {
                                                                                        const current2 =
                                                                                          chatInputRef.current;
                                                                                        if (current2 != null) {
                                                                                          current2.dismissKeyboard();
                                                                                        }
                                                                                      }
                                                                                      const obj35 = {
                                                                                        title: intl7.string(
                                                                                          channel(1126).t.VL1KOk,
                                                                                        ),
                                                                                        body: intl8.string(
                                                                                          channel(1126).t["vXZ+Fo"],
                                                                                        ),
                                                                                        cancelText: intl9.string(
                                                                                          channel(1126).t["ETE/oC"],
                                                                                        ),
                                                                                        confirmText: intl10.string(
                                                                                          channel(1126).t.YEHppG,
                                                                                        ),
                                                                                        onConfirm() {
                                                                                          const obj = id(
                                                                                            dependencyMap[17],
                                                                                          );
                                                                                          obj.suppressEmbeds(id, id2);
                                                                                        },
                                                                                      };
                                                                                      const show2 = id(5714).show;
                                                                                      id(5714);
                                                                                      intl7 = channel(1126).intl;
                                                                                      intl8 = channel(1126).intl;
                                                                                      intl9 = channel(1126).intl;
                                                                                      intl10 = channel(1126).intl;
                                                                                      show2(obj35);
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
                                                            const tmpResult62 = channel(6695);
                                                            tmpResult62.copy(mediaUrl3);
                                                            const tmpResult63 = channel(4573);
                                                            tmpResult63.presentLinkCopied();
                                                            flag = true;
                                                          }
                                                          if (flag) {
                                                            let hostname;
                                                            let track = id(1252).track;
                                                            const CONTEXT_MENU_MEDIA_LINK_COPIED =
                                                              constants.CONTEXT_MENU_MEDIA_LINK_COPIED;
                                                            id(1252);
                                                            if (null != mediaUrl3) {
                                                              const tmpResult64 = channel(8060);
                                                              hostname = tmpResult64.getHostname(mediaUrl3);
                                                            }
                                                            const obj36 = { hostname };
                                                            const tmp49 = isStaticChannelRoute(id);
                                                            let tmp50;
                                                            if (!tmp49) {
                                                              tmp50 = id;
                                                            }
                                                            const obj37 = {
                                                              channel_id: tmp50,
                                                              channel_static_route: tmp51,
                                                            };
                                                            tmp51 = undefined;
                                                            if (tmp49) {
                                                              tmp51 = id;
                                                            }
                                                            let merged = Object.assign(obj37);
                                                            track(CONTEXT_MENU_MEDIA_LINK_COPIED, obj36);
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
    const tmpResult65 = channel(6802);
    if (tmpResult65.canReportMessage(message)) {
      const tmpResult66 = channel(8312);
      const result14 = tmpResult66.showReportModalForMessage(message, "mobile_message_action_sheet");
    }
  }
};
