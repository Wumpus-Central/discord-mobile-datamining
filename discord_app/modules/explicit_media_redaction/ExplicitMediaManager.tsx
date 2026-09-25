// discord_app/modules/explicit_media_redaction/ExplicitMediaManager.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import flattenDefault from "../../../_runtime/04938_flatten.js";
import MessageRecordUtils from "../messages/MessageRecordUtils.tsx";
import ObscuredMediaUtils from "ObscuredMediaUtils.tsx";
import HarmTypeConfiguration from "HarmTypeConfiguration.tsx";
import ExplicitMediaRedactionModels from "ExplicitMediaRedactionModels.tsx";
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils.tsx";
import ExplicitMediaRedactionActionCreators from "ExplicitMediaRedactionActionCreators.tsx";
import uniqWithDefault from "../../../_runtime/07021_uniqWith.js";
import ReferencedMessageStore from "../replies/ReferencedMessageStore.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import ChannelSectionStore from "../../stores/ChannelSectionStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import MessageStore from "../../stores/MessageStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";
import SelectedGuildStore from "../../stores/SelectedGuildStore.tsx";
import ExplicitMediaSearchStore from "ExplicitMediaSearchStore.tsx";
import AutomaticLifecycleManager from "../../lib/AutomaticLifecycleManager.tsx";

require = fn;
function resetManager() {
  const values = Object.values(closure_14);
  const item = values.forEach((timeout) => {
    clearTimeout(timeout.timeout);
  });
  closure_14 = {};
}
function maybeCancelTimeout(message1, UPDATE) {
  if (null != message1.id) {
    if (null != message1.channel_id) {
      const _HermesInternal = HermesInternal;
      const combined = "" + message1.channel_id + ":" + message1.id;
      if (null != dependencyMap[combined]) {
        ({ timeout, setAt } = dependencyMap[combined]);
        if (UPDATE === ExplicitMediaRedactionUtils.TimeoutCancelSource.UPDATE) {
          let attachments = message1.attachments;
          if (attachments == null) {
            attachments = [];
          }
          let embeds = message1.embeds;
          if (embeds == null) {
            embeds = [];
          }
          const found = attachments.filter((media) => {
            const obj = ObscuredMediaUtils;
            return obj.isMediaFlaggedForHarmType(HarmTypeConfiguration.ContentHarmType.EXPLICIT, {
              type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Attachment,
              media,
            });
          });
          const found1 = embeds.filter((media) => {
            const obj = ObscuredMediaUtils;
            return obj.isMediaFlaggedForHarmType(HarmTypeConfiguration.ContentHarmType.EXPLICIT, {
              type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Embed,
              media,
            });
          });
          let obj = {
            messageId: null,
            channelId: null,
            numOfAttachments: null,
            numOfEmbeds: null,
            numOfExplicitAttachments: null,
            numOfExplicitEmbeds: null,
          };
          ({ id: obj2.messageId, channel_id: obj2.channelId } = message1);
          obj.numOfAttachments = attachments.length;
          obj.numOfEmbeds = embeds.length;
          obj.numOfExplicitAttachments = found.length;
          obj.numOfExplicitEmbeds = found1.length;
          const result = ExplicitMediaRedactionUtils.trackExplicitMediaScanComplete(obj);
          const tmp5Result = ExplicitMediaRedactionUtils;
        }
        ExplicitMediaRedactionUtils.trackScanTiming(setAt, UPDATE);
        const _clearTimeout = clearTimeout;
        clearTimeout(timeout);
        delete tmp[tmp2];
        return true;
      } else {
        return false;
      }
    }
  }
  return false;
}
function withoutScheduledTimeout(arg0) {
  return null == dependencyMap["" + arg0.channel_id + ":" + arg0.id];
}
function handleUnscannedMessages(found2, isMessageUpdate) {
  let obj = isMessageUpdate;
  if (isMessageUpdate == null) {
    obj = {};
  }
  const forceBatchScan = obj.forceBatchScan;
  let tmp = undefined !== forceBatchScan && forceBatchScan;
  const jitter = obj.jitter;
  isMessageUpdate = undefined;
  if (isMessageUpdate != null) {
    isMessageUpdate = isMessageUpdate.isMessageUpdate;
  }
  const filter = found2.filter;
  if (isMessageUpdate) {
    let found = filter((message) => {
      let result = found1(6705).isEligibleForScanning(message);
      if (result) {
        result = found1(6705).hasUnscannedMedia(message);
        const tmpResult = found1(6705);
      }
      return result;
    });
    let found1 = found.filter(withoutScheduledTimeout);
  } else {
    found2 = filter((components) => found1(6705).isEligibleForScanning(components));
    found1 = found2.filter(withoutScheduledTimeout);
  }
  const item = found1.forEach((channel_id) => {
    const combined = "" + channel_id.channel_id + ":" + channel_id.id;
    if (null == closure_14[combined]) {
      let obj2 = { name: channel_id(5177).MetricEvents.EXPLICIT_MEDIA_SCAN_CLIENT_TIMEOUT_CREATE };
      closure_1(5172).increment(obj2);
      const obj3 = { setAt: null, timeout: null };
      const _Date = Date;
      obj3.setAt = Date.now();
      const _setTimeout = setTimeout;
      obj3.timeout = setTimeout(() => {
        if (maybeCancelTimeout(channel_id, found1(7015).TimeoutCancelSource.TIMEOUT)) {
          message = message.getMessage(channel_id.channel_id, channel_id.id);
          if (null != message) {
            const unscannedMediaIds = found1(6705).getUnscannedMediaIds(message);
            ({ attachmentIds, embedIds } = unscannedMediaIds);
            const tmp2Result = found1(6705);
            const obj = { channelId: null, messageId: null, attachmentIds: null, embedIds: null };
            ({ channel_id: obj3.channelId, id: obj3.messageId } = channel_id);
            obj.attachmentIds = attachmentIds;
            obj.embedIds = embedIds;
            const result = found1(7015).trackScanningTimedOut(obj);
            const tmp2Result2 = found1(7015);
          }
          ({ id: obj5.messageId, channel_id: obj5.channelId } = channel_id);
          closure_1(573).dispatch({ type: "MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT", messageId: null, channelId: null });
          const obj2 = { type: "MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT", messageId: null, channelId: null };
          const obj4 = closure_1(573);
        }
      }, 3000);
      closure_14[combined] = obj3;
      let obj = closure_1(5172);
    }
  });
  if (!tmp) {
    const _Set = Set;
    const set = new Set(found1.map((channel_id) => channel_id.channel_id));
    tmp = set.size > 1;
  }
  closure_1 = tmp;
  if (tmp2) {
    let _setTimeout = setTimeout;
    const _Math = Math;
    const timerId = setTimeout(() => {
      const found = found1.filter((item) => null != closure_1_14["" + item.channel_id + ":" + item.id]);
      if (0 !== found.length) {
        const obj = ExplicitMediaRedactionActionCreators;
        if (tmp) {
          const result = obj.sendMultiChannelMessagesForScanning(found);
        } else {
          const result1 = obj.sendMessagesForScanning(
            found[0].channel_id,
            found.map((id) => id.id),
          );
        }
      }
    }, 800 * Math.random());
  } else if (0 !== found1.length) {
    let obj2 = found1(7019);
    if (tmp) {
      let result = obj2.sendMultiChannelMessagesForScanning(found1);
    } else {
      let result1 = obj2.sendMessagesForScanning(
        found1[0].channel_id,
        found1.map((id) => id.id),
      );
    }
  }
  tmp2 = undefined !== jitter && jitter;
}
function processMessagesFromAction(firstMessages, isMessageUpdate) {
  const found = firstMessages.filter((item) => {
    obj = obj(7020);
    let result = obj.hasAttachmentsEmbedsComponentsOrSnapshots(item);
    obj(6705);
    if (result) {
      result = 0 !== tmp3;
    }
    return result;
  });
  const mapped = firstMessages.map((referenced_message) => {
    if (null != referenced_message) {
      if ("referenced_message" in referenced_message) {
        if (null != referenced_message.referenced_message) {
          obj = obj(7020);
          if (obj.hasAttachmentsEmbedsComponentsOrSnapshots(referenced_message.referenced_message)) {
            if (0 !== tmpResult.getEnabledHarmTypesForMessage(referenced_message.referenced_message)) {
              return referenced_message.referenced_message;
            }
            tmpResult = tmp(6705);
          }
          tmp = obj;
        }
      }
    }
  });
  const found1 = mapped.filter((item) => null != item);
  let tmp2 = found;
  if (found1.length > 0) {
    const items = [];
    HermesBuiltin.arraySpread(found1, HermesBuiltin.arraySpread(found, 0));
    tmp2 = items;
  }
  const arr4 = obj2(7021)(tmp2, (id, id2) => id.id === id2.id && id.channel_id === id2.channel_id);
  const found2 = arr4.filter((item) => {
    obj = obj(6705);
    return obj.hasUnscannedMedia(item);
  });
  obj2 = {};
  const item = arr4.forEach((channel_id) => {
    if (null == obj[channel_id.channel_id]) {
      tmp[channel_id.channel_id] = {
        numOfAttachments: 0,
        numOfAttachmentsPendingScan: 0,
        numOfEmbeds: 0,
        numOfEmbedsPendingScan: 0,
      };
    }
    if (null == obj2[channel_id.id]) {
      obj = {
        channelId: channel_id.channel_id,
        numOfAttachments: 0,
        numOfSelfHarmAttachments: 0,
        numOfGoreAttachments: 0,
        numOfExplicitAttachments: 0,
        numOfEmbeds: 0,
        numOfSelfHarmEmbeds: 0,
        numOfGoreEmbeds: 0,
        numOfExplicitEmbeds: 0,
      };
      tmp2[channel_id.id] = obj;
    }
    const attachments = channel_id.attachments;
    let num;
    if (attachments != null) {
      num = attachments.length;
    }
    if (num == null) {
      num = 0;
    }
    const embeds = channel_id.embeds;
    let num2;
    if (embeds != null) {
      num2 = embeds.length;
    }
    if (num2 == null) {
      num2 = 0;
    }
    obj2 = ObscuredMediaUtils;
    const unscannedMediaIds = obj2.getUnscannedMediaIds(channel_id);
    obj[channel_id.channel_id].numOfAttachments = obj[channel_id.channel_id].numOfAttachments + num;
    obj[channel_id.channel_id].numOfEmbeds = obj[channel_id.channel_id].numOfEmbeds + num2;
    obj[channel_id.channel_id].numOfAttachmentsPendingScan =
      obj[channel_id.channel_id].numOfAttachmentsPendingScan + unscannedMediaIds.attachmentIds.length;
    obj[channel_id.channel_id].numOfEmbedsPendingScan =
      obj[channel_id.channel_id].numOfEmbedsPendingScan + unscannedMediaIds.embedIds.length;
    obj2[channel_id.id].numOfAttachments = obj2[channel_id.id].numOfAttachments + num;
    obj2[channel_id.id].numOfEmbeds = obj2[channel_id.id].numOfEmbeds + num2;
    const attachments1 = channel_id.attachments;
    let num3;
    if (attachments1 != null) {
      num3 = attachments1.filter((media) => {
        obj = closure_1_0(6705);
        return obj.isMediaFlaggedForHarmType(closure_1_0(6708).ContentHarmType.EXPLICIT, {
          type: closure_1_0(6710).ObscuredMediaTypes.Attachment,
          media,
        });
      }).length;
    }
    if (num3 == null) {
      num3 = 0;
    }
    obj2[channel_id.id].numOfExplicitAttachments = num3;
    const embeds1 = channel_id.embeds;
    let num4;
    if (embeds1 != null) {
      num4 = embeds1.filter((media) => {
        obj = closure_1_0(6705);
        return obj.isMediaFlaggedForHarmType(closure_1_0(6708).ContentHarmType.EXPLICIT, {
          type: closure_1_0(6710).ObscuredMediaTypes.Embed,
          media,
        });
      }).length;
    }
    if (num4 == null) {
      num4 = 0;
    }
    obj2[channel_id.id].numOfExplicitEmbeds = num4;
    const attachments2 = channel_id.attachments;
    let num5;
    if (attachments2 != null) {
      num5 = attachments2.filter((media) => {
        obj = closure_1_0(6705);
        return obj.isMediaFlaggedForHarmType(closure_1_0(6708).ContentHarmType.GORE, {
          type: closure_1_0(6710).ObscuredMediaTypes.Attachment,
          media,
        });
      }).length;
    }
    if (num5 == null) {
      num5 = 0;
    }
    obj2[channel_id.id].numOfGoreAttachments = num5;
    const embeds2 = channel_id.embeds;
    let num6;
    if (embeds2 != null) {
      num6 = embeds2.filter((media) => {
        obj = closure_1_0(6705);
        return obj.isMediaFlaggedForHarmType(closure_1_0(6708).ContentHarmType.GORE, {
          type: closure_1_0(6710).ObscuredMediaTypes.Embed,
          media,
        });
      }).length;
    }
    if (num6 == null) {
      num6 = 0;
    }
    obj2[channel_id.id].numOfGoreEmbeds = num6;
    const attachments3 = channel_id.attachments;
    let num7;
    if (attachments3 != null) {
      num7 = attachments3.filter((media) => {
        obj = closure_1_0(6705);
        return obj.isMediaFlaggedForHarmType(closure_1_0(6708).ContentHarmType.SELF_HARM, {
          type: closure_1_0(6710).ObscuredMediaTypes.Attachment,
          media,
        });
      }).length;
    }
    if (num7 == null) {
      num7 = 0;
    }
    obj2[channel_id.id].numOfSelfHarmAttachments = num7;
    const embeds3 = channel_id.embeds;
    let num8;
    if (embeds3 != null) {
      num8 = embeds3.filter((media) => {
        obj = closure_1_0(6705);
        return obj.isMediaFlaggedForHarmType(closure_1_0(6708).ContentHarmType.SELF_HARM, {
          type: closure_1_0(6710).ObscuredMediaTypes.Embed,
          media,
        });
      }).length;
    }
    if (num8 == null) {
      num8 = 0;
    }
    obj2[channel_id.id].numOfSelfHarmEmbeds = num8;
  });
  const entries = obj2(11).entries({});
  const item1 = entries.forEach((item) => {
    [tmp, tmp2] = item;
    obj = obj(7015);
    const result = obj.trackExplicitMediaRedactableMessagedLoaded({
      channelId: tmp,
      numOfAttachments: tmp2.numOfAttachments,
      numOfAttachmentsPendingScan: tmp2.numOfAttachmentsPendingScan,
      numOfEmbeds: tmp2.numOfEmbeds,
      numOfEmbedsPendingScan: tmp2.numOfEmbedsPendingScan,
    });
  });
  let obj = {};
  const obj3 = obj2(11);
  const entries1 = obj2(11).entries(obj2);
  const item2 = entries1.forEach((item) => {
    [tmp, tmp2] = item;
    obj = obj(7015);
    const result = obj.trackRedactableMessageLoaded({
      messageId: tmp,
      channelId: tmp2.channelId,
      numOfAttachments: tmp2.numOfAttachments,
      numOfGoreAttachments: tmp2.numOfGoreAttachments,
      numOfExplicitAttachments: tmp2.numOfExplicitAttachments,
      numOfSelfHarmAttachments: tmp2.numOfSelfHarmAttachments,
      numOfEmbeds: tmp2.numOfEmbeds,
      numOfGoreEmbeds: tmp2.numOfGoreEmbeds,
      numOfExplicitEmbeds: tmp2.numOfExplicitEmbeds,
      numOfSelfHarmEmbeds: tmp2.numOfSelfHarmEmbeds,
    });
  });
  let flag = found2.length > 0;
  if (flag) {
    handleUnscannedMessages(found2, isMessageUpdate);
    flag = true;
  }
  return flag;
}
function handleMessageUpdate(message) {
  message = message.message;
  if (null != message.channel_id) {
    if (null != message.id) {
      if (obj6.getChannelIdAndAuthorIdFromMessage(message).authorId !== AuthenticationStore.getId()) {
        if (null == message.embeds) {
          if (null == message.attachments) {
            if (!tmp20Result.hasMessageSnapshotsWithAttachmentsOrEmbeds(message)) {
              return false;
            }
            tmp20Result = ExplicitMediaRedactionUtils;
          }
        }
        const embeds = message.embeds;
        let length;
        if (embeds != null) {
          length = embeds.length;
        }
        if (0 === length) {
          const attachments = message.attachments;
          let length1;
          if (attachments != null) {
            length1 = attachments.length;
          }
          if (0 === length1) {
            if (!tmp20Result5.hasMessageSnapshotsWithAttachmentsOrEmbeds(message)) {
              return false;
            }
            tmp20Result5 = ExplicitMediaRedactionUtils;
          }
        }
        if (!tmp20Result6.hasUnscannedMedia(message)) {
          let message1 = MessageStore.getMessage(message.channel_id, message.id);
          if (message1 == null) {
            message1 = ExplicitMediaSearchStore.getMessage(message.id, message.channel_id);
          }
          if (message1 == null) {
            const message2 = ReferencedMessageStore.getMessage(message.channel_id, message.id);
            let message3;
            if (message2 != null) {
              message3 = message2.message;
            }
            message1 = message3;
          }
          let hasUnscannedMediaResult = null == message1;
          if (!hasUnscannedMediaResult) {
            const tmp20Result7 = ObscuredMediaUtils;
            hasUnscannedMediaResult = tmp20Result7.hasUnscannedMedia(
              MessageRecordUtils.updateMessageRecord(message1, message),
            );
            const tmp20Result8 = MessageRecordUtils;
          }
          if (!hasUnscannedMediaResult) {
            maybeCancelTimeout(message1, ExplicitMediaRedactionUtils.TimeoutCancelSource.UPDATE);
          }
        }
        const channelId = SelectedChannelStore.getChannelId();
        if (message.channel_id !== channelId) {
          if (message.channel_id !== tmp15) {
            return false;
          }
        }
        const message4 = MessageStore.getMessage(message.channel_id, message.id);
        let tmp18 = null != message4;
        if (tmp18) {
          const items = [message4];
          tmp18 = processMessagesFromAction(items, { isMessageUpdate: true });
        }
        return tmp18;
      }
      obj6 = ObscuredMediaUtils;
    }
  }
  return false;
}
function handleMessageCreate(optimistic) {
  ({ channelId, message } = optimistic);
  if (!optimistic.optimistic) {
    if (!optimistic.isPushNotification) {
      if (null != channelId) {
        if (obj2.getChannelIdAndAuthorIdFromMessage(message).authorId !== AuthenticationStore.getId()) {
          const channelId1 = SelectedChannelStore.getChannelId();
          const currentSidebarChannelId = ChannelSectionStore.getCurrentSidebarChannelId(channelId1);
          const channel = ChannelStore.getChannel(channelId);
          let tmp3Result = channelId === channelId1 || channelId === currentSidebarChannelId;
          if (tmp3Result) {
            const items = [message];
            let flag;
            if (channel != null) {
              flag = channel.isPrivate();
            }
            if (flag == null) {
              flag = true;
            }
            if (flag) {
              let memberCount;
              if (channel != null) {
                memberCount = channel.memberCount;
              }
              let tmp5 = null == memberCount;
              if (!tmp5) {
                let memberCount1;
                if (channel != null) {
                  memberCount1 = channel.memberCount;
                }
                tmp5 = memberCount1 > 100;
              }
              flag = tmp5;
            }
            const obj = { jitter: flag };
            tmp3Result = processMessagesFromAction(items, obj);
          }
          return tmp3Result;
        }
        obj2 = ObscuredMediaUtils;
      }
    }
  }
  return false;
}
function handleMessagesLoad(arg0) {
  ({ channelId, messages } = arg0);
  if (null != channelId) {
    if (null != messages) {
      const channelId1 = SelectedChannelStore.getChannelId();
      let tmp4 = channelId === channelId1 || channelId === ChannelSectionStore.getCurrentSidebarChannelId(channelId1);
      if (tmp4) {
        tmp4 = processMessagesFromAction(messages);
      }
      return tmp4;
    }
  }
  return false;
}
function handleSearchMessagesSuccess(data) {
  data = data.data;
  closure_0 = false;
  const item = data.forEach((messages) => {
    const tmp = flattenDefault(messages.messages);
    closure_0 =
      processMessagesFromAction(
        uniqWithDefault(
          flattenDefault(messages.messages),
          (id, id2) => id.id === id2.id && id.channel_id === id2.channel_id,
        ),
      ) || closure_0;
  });
  return closure_0;
}
function handleLoadPinnedMessages(pins) {
  pins = pins.pins;
  return processMessagesFromAction(pins.map((message) => message.message));
}
function handleForumPostsLoad(threads) {
  threads = threads.threads;
  let tmp2 = null != threads;
  if (tmp2) {
    let tmp4 = SelectedGuildStore.getGuildId() === tmp;
    if (tmp4) {
      const keys = SnowflakeUtilsDefault.keys(threads);
      tmp4 = processMessagesFromAction(keys.map((item) => threads[item].first_message));
    }
    tmp2 = tmp4;
  }
  return tmp2;
}
function handleThreadsLoad(firstMessages) {
  firstMessages = firstMessages.firstMessages;
  let tmp2 = null != firstMessages;
  if (tmp2) {
    let tmp4 = SelectedGuildStore.getGuildId() === tmp;
    if (tmp4) {
      tmp4 = processMessagesFromAction(firstMessages, { forceBatchScan: true });
    }
    tmp2 = tmp4;
  }
  return tmp2;
}
function handleSidebarViewChannel(channelId) {
  channelId = channelId.channelId;
  let tmp = null != channelId;
  if (tmp) {
    tmp = maybeScanMessagesForChannelId(channelId);
  }
  return tmp;
}
function handleChannelSelect(channelId) {
  channelId = channelId.channelId;
  let tmp = null != channelId;
  if (tmp) {
    let tmp3 = channelId === SelectedChannelStore.getChannelId();
    if (tmp3) {
      tmp3 = maybeScanMessagesForChannelId(channelId);
    }
    tmp = tmp3;
  }
  return tmp;
}
function handleUserSettingsUpdate(local) {
  if (local.local) {
    if (local.settings.type === UserSettingsTypes.PRELOADED_USER_SETTINGS) {
      const channelId = SelectedChannelStore.getChannelId();
      let tmp5 = null != channelId;
      if (tmp5) {
        tmp5 = maybeScanMessagesForChannelId(channelId);
      }
      return tmp5;
    }
  }
  return false;
}
function handleVoiceChannelChatOpen(chatOpen) {
  chatOpen = chatOpen.chatOpen;
  if (chatOpen) {
    chatOpen = maybeScanMessagesForChannelId(tmp);
  }
  return chatOpen;
}
function maybeScanMessagesForChannelId(channelId) {
  const messages = MessageStore.getMessages(channelId);
  let tmp = 0 !== messages.length;
  if (tmp) {
    const found = messages.filter((item) => {
      obj = obj(7020);
      let result = obj.hasAttachmentsEmbedsComponentsOrSnapshots(item);
      if (result) {
        result = 0 !== obj(6705).getEnabledHarmTypesForMessage(item);
        const tmpResult = obj(6705);
      }
      return result;
    });
    const mapped = messages.map((type) => {
      if (set.has(type.type)) {
        if (null != type.messageReference) {
          messageByReference = messageByReference.getMessageByReference(type.messageReference);
          if (messageByReference.state === constants.LOADED) {
            if (null != messageByReference.message) {
              obj = obj(7020);
              if (obj.hasAttachmentsEmbedsComponentsOrSnapshots(messageByReference.message)) {
                if (0 !== tmp5Result.getEnabledHarmTypesForMessage(messageByReference.message)) {
                  return messageByReference.message;
                }
                tmp5Result = tmp5(6705);
              }
              tmp5 = obj;
            }
          }
        }
      }
    });
    const found1 = mapped.filter((item) => null != item);
    let tmp3 = found;
    if (found1.length > 0) {
      const items = [];
      HermesBuiltin.arraySpread(found1, HermesBuiltin.arraySpread(found, 0));
      tmp3 = items;
    }
    const arr5 = obj2(7021)(tmp3, (id, id2) => id.id === id2.id && id.channel_id === id2.channel_id);
    const found2 = arr5.filter((item) => {
      obj = obj(6705);
      return obj.hasUnscannedMedia(item);
    });
    obj2 = {};
    const item = arr5.forEach((channel_id) => {
      if (null == obj[channel_id.channel_id]) {
        tmp[channel_id.channel_id] = {
          numOfAttachments: 0,
          numOfAttachmentsPendingScan: 0,
          numOfEmbeds: 0,
          numOfEmbedsPendingScan: 0,
        };
      }
      if (null == obj2[channel_id.id]) {
        obj = {
          channelId: channel_id.channel_id,
          numOfAttachments: 0,
          numOfSelfHarmAttachments: 0,
          numOfGoreAttachments: 0,
          numOfExplicitAttachments: 0,
          numOfEmbeds: 0,
          numOfSelfHarmEmbeds: 0,
          numOfGoreEmbeds: 0,
          numOfExplicitEmbeds: 0,
        };
        tmp2[channel_id.id] = obj;
      }
      const attachments = channel_id.attachments;
      let num;
      if (attachments != null) {
        num = attachments.length;
      }
      if (num == null) {
        num = 0;
      }
      const embeds = channel_id.embeds;
      let num2;
      if (embeds != null) {
        num2 = embeds.length;
      }
      if (num2 == null) {
        num2 = 0;
      }
      obj2 = ObscuredMediaUtils;
      const unscannedMediaIds = obj2.getUnscannedMediaIds(channel_id);
      obj[channel_id.channel_id].numOfAttachments = obj[channel_id.channel_id].numOfAttachments + num;
      obj[channel_id.channel_id].numOfEmbeds = obj[channel_id.channel_id].numOfEmbeds + num2;
      obj[channel_id.channel_id].numOfAttachmentsPendingScan =
        obj[channel_id.channel_id].numOfAttachmentsPendingScan + unscannedMediaIds.attachmentIds.length;
      obj[channel_id.channel_id].numOfEmbedsPendingScan =
        obj[channel_id.channel_id].numOfEmbedsPendingScan + unscannedMediaIds.embedIds.length;
      obj2[channel_id.id].numOfAttachments = obj2[channel_id.id].numOfAttachments + num;
      obj2[channel_id.id].numOfEmbeds = obj2[channel_id.id].numOfEmbeds + num2;
      const attachments1 = channel_id.attachments;
      let num3;
      if (attachments1 != null) {
        num3 = attachments1.filter((media) => {
          obj = closure_1_0(6705);
          return obj.isMediaFlaggedForHarmType(closure_1_0(6708).ContentHarmType.EXPLICIT, {
            type: closure_1_0(6710).ObscuredMediaTypes.Attachment,
            media,
          });
        }).length;
      }
      if (num3 == null) {
        num3 = 0;
      }
      obj2[channel_id.id].numOfExplicitAttachments = num3;
      const embeds1 = channel_id.embeds;
      let num4;
      if (embeds1 != null) {
        num4 = embeds1.filter((media) => {
          obj = closure_1_0(6705);
          return obj.isMediaFlaggedForHarmType(closure_1_0(6708).ContentHarmType.EXPLICIT, {
            type: closure_1_0(6710).ObscuredMediaTypes.Embed,
            media,
          });
        }).length;
      }
      if (num4 == null) {
        num4 = 0;
      }
      obj2[channel_id.id].numOfExplicitEmbeds = num4;
      const attachments2 = channel_id.attachments;
      let num5;
      if (attachments2 != null) {
        num5 = attachments2.filter((media) => {
          obj = closure_1_0(6705);
          return obj.isMediaFlaggedForHarmType(closure_1_0(6708).ContentHarmType.GORE, {
            type: closure_1_0(6710).ObscuredMediaTypes.Attachment,
            media,
          });
        }).length;
      }
      if (num5 == null) {
        num5 = 0;
      }
      obj2[channel_id.id].numOfGoreAttachments = num5;
      const embeds2 = channel_id.embeds;
      let num6;
      if (embeds2 != null) {
        num6 = embeds2.filter((media) => {
          obj = closure_1_0(6705);
          return obj.isMediaFlaggedForHarmType(closure_1_0(6708).ContentHarmType.GORE, {
            type: closure_1_0(6710).ObscuredMediaTypes.Embed,
            media,
          });
        }).length;
      }
      if (num6 == null) {
        num6 = 0;
      }
      obj2[channel_id.id].numOfGoreEmbeds = num6;
      const attachments3 = channel_id.attachments;
      let num7;
      if (attachments3 != null) {
        num7 = attachments3.filter((media) => {
          obj = closure_1_0(6705);
          return obj.isMediaFlaggedForHarmType(closure_1_0(6708).ContentHarmType.SELF_HARM, {
            type: closure_1_0(6710).ObscuredMediaTypes.Attachment,
            media,
          });
        }).length;
      }
      if (num7 == null) {
        num7 = 0;
      }
      obj2[channel_id.id].numOfSelfHarmAttachments = num7;
      const embeds3 = channel_id.embeds;
      let num8;
      if (embeds3 != null) {
        num8 = embeds3.filter((media) => {
          obj = closure_1_0(6705);
          return obj.isMediaFlaggedForHarmType(closure_1_0(6708).ContentHarmType.SELF_HARM, {
            type: closure_1_0(6710).ObscuredMediaTypes.Embed,
            media,
          });
        }).length;
      }
      if (num8 == null) {
        num8 = 0;
      }
      obj2[channel_id.id].numOfSelfHarmEmbeds = num8;
    });
    const entries = obj2(11).entries({});
    const item1 = entries.forEach((item) => {
      [tmp, tmp2] = item;
      obj = obj(7015);
      const result = obj.trackExplicitMediaRedactableMessagedLoaded({
        channelId: tmp,
        numOfAttachments: tmp2.numOfAttachments,
        numOfAttachmentsPendingScan: tmp2.numOfAttachmentsPendingScan,
        numOfEmbeds: tmp2.numOfEmbeds,
        numOfEmbedsPendingScan: tmp2.numOfEmbedsPendingScan,
      });
    });
    let obj = {};
    const obj3 = obj2(11);
    const entries1 = obj2(11).entries(obj2);
    const item2 = entries1.forEach((item) => {
      [tmp, tmp2] = item;
      obj = obj(7015);
      const result = obj.trackRedactableMessageLoaded({
        messageId: tmp,
        channelId: tmp2.channelId,
        numOfAttachments: tmp2.numOfAttachments,
        numOfGoreAttachments: tmp2.numOfGoreAttachments,
        numOfSelfHarmAttachments: tmp2.numOfSelfHarmAttachments,
        numOfExplicitAttachments: tmp2.numOfExplicitAttachments,
        numOfEmbeds: tmp2.numOfEmbeds,
        numOfGoreEmbeds: tmp2.numOfGoreEmbeds,
        numOfExplicitEmbeds: tmp2.numOfExplicitEmbeds,
        numOfSelfHarmEmbeds: tmp2.numOfSelfHarmEmbeds,
      });
    });
    let flag = found2.length > 0;
    if (flag) {
      handleUnscannedMessages(found2);
      flag = true;
    }
    tmp = flag;
    const obj4 = obj2(11);
  }
  return tmp;
}
const ReferencedMessageState = fn(7008).ReferencedMessageState;
let closure_12 = fn(1074).MessageTypesWithLazyLoadedReferences;
const UserSettingsTypes = fn(1084).UserSettingsTypes;
const dependencyMap = {};
const prototype = function ExplicitMediaManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = {
    LOAD_MESSAGES_SUCCESS: handleMessagesLoad,
    LOAD_FORUM_POSTS: handleForumPostsLoad,
    LOAD_THREADS_SUCCESS: handleThreadsLoad,
    LOAD_ARCHIVED_THREADS_SUCCESS: handleThreadsLoad,
    SIDEBAR_VIEW_CHANNEL: handleSidebarViewChannel,
    MESSAGE_CREATE: handleMessageCreate,
    MESSAGE_UPDATE: handleMessageUpdate,
    LOGOUT: resetManager,
    SEARCH_MESSAGES_SUCCESS: handleSearchMessagesSuccess,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: handleSearchMessagesSuccess,
    CHANNEL_SELECT: handleChannelSelect,
    LOAD_PINNED_MESSAGES_SUCCESS: handleLoadPinnedMessages,
    USER_SETTINGS_PROTO_UPDATE: handleUserSettingsUpdate,
    CHANNEL_RTC_UPDATE_CHAT_OPEN: handleVoiceChannelChatOpen,
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {}
const prototype1 = new prototype();
const size = fn(2);
let result = size.fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaManager.tsx");

export default prototype1;
export const MESSAGE_SCAN_TIMEOUT = 3000;
export const MAX_TIMEOUT_FOR_JITTER = 800;
