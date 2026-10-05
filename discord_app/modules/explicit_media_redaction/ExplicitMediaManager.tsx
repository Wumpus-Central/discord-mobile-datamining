// discord_app/modules/explicit_media_redaction/ExplicitMediaManager.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import Constants from "../../Constants.tsx";
import UserSettingsConstants from "../user_settings/UserSettingsConstants.tsx";
import flattenDefault from "../../../_runtime/05000_flatten.js";
import MessageRecordUtils from "../messages/MessageRecordUtils.tsx";
import ObscuredMediaUtils from "ObscuredMediaUtils.tsx";
import HarmTypeConfiguration from "HarmTypeConfiguration.tsx";
import ExplicitMediaRedactionModels from "ExplicitMediaRedactionModels.tsx";
import ReferencedMessageStore2 from "../replies/ReferencedMessageStore.tsx";
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils.tsx";
import ExplicitMediaRedactionConstants from "ExplicitMediaRedactionConstants.tsx";
import ExplicitMediaRedactionActionCreators from "ExplicitMediaRedactionActionCreators.tsx";
import uniqWithDefault from "../../../_runtime/17494_uniqWith.js";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import ChannelSectionStore from "../../stores/ChannelSectionStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import MessageStore from "../../stores/MessageStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";
import SelectedGuildStore from "../../stores/SelectedGuildStore.tsx";
import ExplicitMediaSearchStore from "ExplicitMediaSearchStore.tsx";
import AutomaticLifecycleManager from "../../lib/AutomaticLifecycleManager.tsx";
import size from "../../../_runtime/metro/00002__.js";

const ReferencedMessageStore = ReferencedMessageStore2;
let messageByReference, set;

const f130878 = (channel_id) => {
  const tmp = obj;
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
    obj2[channel_id.id] = obj;
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
  tmp[channel_id.channel_id].numOfAttachments = tmp[channel_id.channel_id].numOfAttachments + num;
  tmp[channel_id.channel_id].numOfEmbeds = tmp[channel_id.channel_id].numOfEmbeds + num2;
  tmp[channel_id.channel_id].numOfAttachmentsPendingScan =
    tmp[channel_id.channel_id].numOfAttachmentsPendingScan + unscannedMediaIds.attachmentIds.length;
  tmp[channel_id.channel_id].numOfEmbedsPendingScan =
    tmp[channel_id.channel_id].numOfEmbedsPendingScan + unscannedMediaIds.embedIds.length;
  obj2[channel_id.id].numOfAttachments = obj2[channel_id.id].numOfAttachments + num;
  obj2[channel_id.id].numOfEmbeds = obj2[channel_id.id].numOfEmbeds + num2;
  const attachments1 = channel_id.attachments;
  let num3;
  if (attachments1 != null) {
    num3 = attachments1.filter((media) => {
      const isMediaFlaggedForHarmType = closure_1_0(closure_1_2[12]).isMediaFlaggedForHarmType;
      obj = { type: closure_1_0(closure_1_2[14]).ObscuredMediaTypes.Attachment, media };
      closure_1_0(closure_1_2[12]);
      const EXPLICIT = closure_1_0(closure_1_2[13]).ContentHarmType.EXPLICIT;
      return isMediaFlaggedForHarmType(EXPLICIT, obj);
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
      const isMediaFlaggedForHarmType = closure_1_0(closure_1_2[12]).isMediaFlaggedForHarmType;
      obj = { type: closure_1_0(closure_1_2[14]).ObscuredMediaTypes.Embed, media };
      closure_1_0(closure_1_2[12]);
      const EXPLICIT = closure_1_0(closure_1_2[13]).ContentHarmType.EXPLICIT;
      return isMediaFlaggedForHarmType(EXPLICIT, obj);
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
      const isMediaFlaggedForHarmType = closure_1_0(closure_1_2[12]).isMediaFlaggedForHarmType;
      obj = { type: closure_1_0(closure_1_2[14]).ObscuredMediaTypes.Attachment, media };
      closure_1_0(closure_1_2[12]);
      const GORE = closure_1_0(closure_1_2[13]).ContentHarmType.GORE;
      return isMediaFlaggedForHarmType(GORE, obj);
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
      const isMediaFlaggedForHarmType = closure_1_0(closure_1_2[12]).isMediaFlaggedForHarmType;
      obj = { type: closure_1_0(closure_1_2[14]).ObscuredMediaTypes.Embed, media };
      closure_1_0(closure_1_2[12]);
      const GORE = closure_1_0(closure_1_2[13]).ContentHarmType.GORE;
      return isMediaFlaggedForHarmType(GORE, obj);
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
      const isMediaFlaggedForHarmType = closure_1_0(closure_1_2[12]).isMediaFlaggedForHarmType;
      obj = { type: closure_1_0(closure_1_2[14]).ObscuredMediaTypes.Attachment, media };
      closure_1_0(closure_1_2[12]);
      const SELF_HARM = closure_1_0(closure_1_2[13]).ContentHarmType.SELF_HARM;
      return isMediaFlaggedForHarmType(SELF_HARM, obj);
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
      const isMediaFlaggedForHarmType = closure_1_0(closure_1_2[12]).isMediaFlaggedForHarmType;
      obj = { type: closure_1_0(closure_1_2[14]).ObscuredMediaTypes.Embed, media };
      closure_1_0(closure_1_2[12]);
      const SELF_HARM = closure_1_0(closure_1_2[13]).ContentHarmType.SELF_HARM;
      return isMediaFlaggedForHarmType(SELF_HARM, obj);
    }).length;
  }
  if (num8 == null) {
    num8 = 0;
  }
  obj2[channel_id.id].numOfSelfHarmEmbeds = num8;
};
function resetManager() {
  const values = Object.values(closure_15);
  const item = values.forEach((timeout) => {
    clearTimeout(timeout.timeout);
  });
  closure_15 = {};
}
function maybeCancelTimeout(message1, UPDATE) {
  let setAt;
  let timeout;
  if (null != message1.id) {
    if (null != message1.channel_id) {
      const _HermesInternal = HermesInternal;
      const combined = "" + message1.channel_id + ":" + message1.id;
      if (null != closure_15[combined]) {
        ({ timeout, setAt } = closure_15[combined]);
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
            const isMediaFlaggedForHarmType = ObscuredMediaUtils.isMediaFlaggedForHarmType;
            const obj = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Attachment, media };
            ObscuredMediaUtils;
            const EXPLICIT = HarmTypeConfiguration.ContentHarmType.EXPLICIT;
            return isMediaFlaggedForHarmType(EXPLICIT, obj);
          });
          const found1 = embeds.filter((media) => {
            const isMediaFlaggedForHarmType = ObscuredMediaUtils.isMediaFlaggedForHarmType;
            const obj = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Embed, media };
            ObscuredMediaUtils;
            const EXPLICIT = HarmTypeConfiguration.ContentHarmType.EXPLICIT;
            return isMediaFlaggedForHarmType(EXPLICIT, obj);
          });
          let obj = {
            messageId: null,
            channelId: null,
            numOfAttachments: attachments.length,
            numOfEmbeds: embeds.length,
            numOfExplicitAttachments: found.length,
            numOfExplicitEmbeds: found1.length,
          };
          ({ id: obj2.messageId, channel_id: obj2.channelId } = message1);
          const tmp3Result = ExplicitMediaRedactionUtils;
          const result = tmp3Result.trackExplicitMediaScanComplete(obj);
        }
        const tmp3Result2 = ExplicitMediaRedactionUtils;
        tmp3Result2.trackScanTiming(setAt, UPDATE);
        const _clearTimeout = clearTimeout;
        clearTimeout(timeout);
        delete closure_15[tmp9];
        return true;
      } else {
        return false;
      }
    }
  }
  return false;
}
function withoutScheduledTimeout(arg0) {
  return null == closure_15["" + arg0.channel_id + ":" + arg0.id];
}
function handleUnscannedMessages(found2, isMessageUpdate) {
  let found1;
  const f130872 = (id) => id.id;
  const f130876 = (channel_id) => channel_id.channel_id;
  let obj = isMessageUpdate;
  if (isMessageUpdate == null) {
    obj = {};
  }
  const forceBatchScan = obj.forceBatchScan;
  let tmp = undefined !== forceBatchScan && forceBatchScan;
  const jitter = obj.jitter;
  isMessageUpdate = undefined;
  const tmp2 = undefined !== jitter && jitter;
  if (isMessageUpdate != null) {
    isMessageUpdate = isMessageUpdate.isMessageUpdate;
  }
  const filter = found2.filter;
  if (isMessageUpdate) {
    let found = filter((message) => {
      const obj = found1(dependencyMap[12]);
      let result = obj.isEligibleForScanning(message);
      if (result) {
        const tmpResult = found1(dependencyMap[12]);
        result = tmpResult.hasUnscannedMedia(message);
      }
      return result;
    });
    found1 = found.filter(withoutScheduledTimeout);
  } else {
    found2 = filter((components) => {
      const obj = found1(dependencyMap[12]);
      return obj.isEligibleForScanning(components);
    });
    found1 = found2.filter(withoutScheduledTimeout);
  }
  const item = found1.forEach((channel_id) => {
    found1 = channel_id;
    const combined = "" + channel_id.channel_id + ":" + channel_id.id;
    if (null == closure_15[combined]) {
      const tmp4 = closure_1(closure_2[17]);
      let obj = { name: found1(closure_2[18]).MetricEvents.EXPLICIT_MEDIA_SCAN_CLIENT_TIMEOUT_CREATE };
      const increment = tmp4.increment;
      increment(obj);
      let obj2 = {
        setAt: Date.now(),
        timeout: setTimeout(() => {
          let attachmentIds;
          let embedIds;
          if (maybeCancelTimeout(channel_id, found1(dependencyMap[11]).TimeoutCancelSource.TIMEOUT)) {
            message = message.getMessage(channel_id.channel_id, channel_id.id);
            if (null != message) {
              const tmp2Result = found1(dependencyMap[12]);
              const unscannedMediaIds = tmp2Result.getUnscannedMediaIds(message);
              ({ attachmentIds, embedIds } = unscannedMediaIds);
              const obj = { channelId: null, messageId: null, attachmentIds, embedIds };
              ({ channel_id: obj3.channelId, id: obj3.messageId } = channel_id);
              const tmp2Result2 = found1(dependencyMap[11]);
              const result = tmp2Result2.trackScanningTimedOut(obj);
            }
            const obj2 = { type: "MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT", messageId: null, channelId: null };
            ({ id: obj5.messageId, channel_id: obj5.channelId } = channel_id);
            const obj4 = closure_1(dependencyMap[15]);
            obj4.dispatch(obj2);
          }
        }, closure_12),
      };
      const _Date = Date;
      const _setTimeout = setTimeout;
      closure_15[combined] = obj2;
    }
  });
  if (!tmp) {
    const _Set = Set;
    const self = this;
    const self2 = this;
    tmp = new Set(found1.map(f130876)).size > 1;
    set = new Set(found1.map(f130876));
  }
  let closure_1 = tmp;
  if (tmp2) {
    let _setTimeout = setTimeout;
    const _Math = Math;
    const timerId = setTimeout(() => {
      const found = found1.filter((item) => null != closure_1_15["" + item.channel_id + ":" + item.id]);
      if (0 !== found.length) {
        const obj = ExplicitMediaRedactionActionCreators;
        if (tmp) {
          const result = obj.sendMultiChannelMessagesForScanning(found);
        } else {
          const result1 = obj.sendMessagesForScanning(found[0].channel_id, found.map(f130872));
        }
      }
    }, 800 * Math.random());
  } else if (0 !== found1.length) {
    let obj2 = found1(8924);
    if (tmp) {
      let result = obj2.sendMultiChannelMessagesForScanning(found1);
    } else {
      let result1 = obj2.sendMessagesForScanning(found1[0].channel_id, found1.map(f130872));
    }
  }
}
function processMessagesFromAction(firstMessages, isMessageUpdate) {
  let obj2;
  const found = firstMessages.filter((item) => {
    obj = obj(dependencyMap[19]);
    let result = obj.hasAttachmentsEmbedsComponentsOrSnapshots(item);
    obj(dependencyMap[12]);
    if (result) {
      result = 0 !== tmp3;
    }
    return result;
  });
  const mapped = firstMessages.map((referenced_message) => {
    if (null != referenced_message) {
      if ("referenced_message" in referenced_message) {
        if (null != referenced_message.referenced_message) {
          const tmp = obj;
          obj = obj(dependencyMap[19]);
          if (obj.hasAttachmentsEmbedsComponentsOrSnapshots(referenced_message.referenced_message)) {
            const tmpResult = tmp(dependencyMap[12]);
            if (0 !== tmpResult.getEnabledHarmTypesForMessage(referenced_message.referenced_message)) {
              return referenced_message.referenced_message;
            }
          }
        }
      }
    }
  });
  const found1 = mapped.filter((item) => null != item);
  let tmp3 = found;
  if (found1.length > 0) {
    const items = [];
    HermesBuiltin.arraySpread(items, found1, HermesBuiltin.arraySpread(items, found, 0));
    tmp3 = items;
  }
  const arr4 = obj2(17494)(tmp3, (id, id2) => id.id === id2.id && id.channel_id === id2.channel_id);
  const found2 = arr4.filter((item) => {
    obj = obj(dependencyMap[12]);
    return obj.hasUnscannedMedia(item);
  });
  let obj = {};
  obj2 = {};
  const item = arr4.forEach(f130878);
  const obj3 = obj2(11);
  const entries = obj3.entries(obj);
  const item1 = entries.forEach((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    obj = obj(dependencyMap[11]);
    obj2 = {
      channelId: tmp,
      numOfAttachments: tmp2.numOfAttachments,
      numOfAttachmentsPendingScan: tmp2.numOfAttachmentsPendingScan,
      numOfEmbeds: tmp2.numOfEmbeds,
      numOfEmbedsPendingScan: tmp2.numOfEmbedsPendingScan,
    };
    const result = obj.trackExplicitMediaRedactableMessagedLoaded(obj2);
  });
  const obj4 = obj2(11);
  const entries1 = obj4.entries(obj2);
  const item2 = entries1.forEach((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    obj = obj(dependencyMap[11]);
    obj2 = {
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
    };
    const result = obj.trackRedactableMessageLoaded(obj2);
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
      const obj5 = ObscuredMediaUtils;
      if (obj5.getChannelIdAndAuthorIdFromMessage(message).authorId !== AuthenticationStore.getId()) {
        if (null == message.embeds) {
          if (null == message.attachments) {
            const tmp21Result = ExplicitMediaRedactionUtils;
            if (!tmp21Result.hasMessageSnapshotsWithAttachmentsOrEmbeds(message)) {
              return false;
            }
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
            const tmp21Result5 = ExplicitMediaRedactionUtils;
            if (!tmp21Result5.hasMessageSnapshotsWithAttachmentsOrEmbeds(message)) {
              return false;
            }
          }
        }
        const tmp21Result6 = ObscuredMediaUtils;
        if (!tmp21Result6.hasUnscannedMedia(message)) {
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
            const hasUnscannedMedia = ObscuredMediaUtils.hasUnscannedMedia;
            ObscuredMediaUtils;
            const tmp21Result8 = MessageRecordUtils;
            hasUnscannedMediaResult = hasUnscannedMedia(tmp21Result8.updateMessageRecord(message1, message));
          }
          if (!hasUnscannedMediaResult) {
            maybeCancelTimeout(message1, ExplicitMediaRedactionUtils.TimeoutCancelSource.UPDATE);
          }
        }
        const channelId = SelectedChannelStore.getChannelId();
        if (message.channel_id !== channelId) {
          if (message.channel_id !== tmp16) {
            return false;
          }
        }
        const message4 = MessageStore.getMessage(message.channel_id, message.id);
        let tmp19 = null != message4;
        if (tmp19) {
          const items = [message4];
          tmp19 = processMessagesFromAction(items, { isMessageUpdate: true });
        }
        return tmp19;
      }
    }
  }
  return false;
}
function handleMessageCreate(optimistic) {
  let channelId;
  let message;
  ({ channelId, message } = optimistic);
  if (!optimistic.optimistic) {
    if (!optimistic.isPushNotification) {
      if (null != channelId) {
        const obj2 = ObscuredMediaUtils;
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
      }
    }
  }
  return false;
}
function handleMessagesLoad(arg0) {
  let channelId;
  let messages;
  ({ channelId, messages } = arg0);
  if (null != channelId) {
    if (null != messages) {
      const channelId1 = SelectedChannelStore.getChannelId();
      const tmp4 =
        (channelId === channelId1 || channelId === ChannelSectionStore.getCurrentSidebarChannelId(channelId1)) &&
        processMessagesFromAction(messages);
      return tmp4;
    }
  }
  return false;
}
function handleSearchMessagesSuccess(data) {
  data = data.data;
  let closure_0 = false;
  const item = data.forEach((messages) => {
    const tmp = flattenDefault(messages.messages);
    const tmp2 =
      processMessagesFromAction(
        uniqWithDefault(tmp, (id, id2) => id.id === id2.id && id.channel_id === id2.channel_id),
      ) || closure_0;
    closure_0 = tmp2;
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
      const obj = SnowflakeUtilsDefault;
      const keys = obj.keys(threads);
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
    tmp2 =
      SelectedGuildStore.getGuildId() === tmp && processMessagesFromAction(firstMessages, { forceBatchScan: true });
    const tmp4 =
      SelectedGuildStore.getGuildId() === tmp && processMessagesFromAction(firstMessages, { forceBatchScan: true });
  }
  return tmp2;
}
function handleSidebarViewChannel(channelId) {
  channelId = channelId.channelId;
  const tmp = null != channelId && maybeScanMessagesForChannelId(channelId);
  return tmp;
}
function handleChannelSelect(channelId) {
  channelId = channelId.channelId;
  let tmp = null != channelId;
  if (tmp) {
    tmp = channelId === SelectedChannelStore.getChannelId() && maybeScanMessagesForChannelId(channelId);
    const tmp3 = channelId === SelectedChannelStore.getChannelId() && maybeScanMessagesForChannelId(channelId);
  }
  return tmp;
}
function handleUserSettingsUpdate(local) {
  if (local.local) {
    if (local.settings.type === UserSettingsTypes.PRELOADED_USER_SETTINGS) {
      const channelId = SelectedChannelStore.getChannelId();
      const tmp5 = null != channelId && maybeScanMessagesForChannelId(channelId);
      return tmp5;
    }
  }
  return false;
}
function handleVoiceChannelChatOpen(chatOpen) {
  chatOpen = chatOpen.chatOpen && maybeScanMessagesForChannelId(tmp);
  return chatOpen;
}
function maybeScanMessagesForChannelId(channelId) {
  let obj2;
  const messages = MessageStore.getMessages(channelId);
  let tmp2 = 0 !== messages.length;
  if (tmp2) {
    const found = messages.filter((item) => {
      const tmp = obj;
      obj = obj(dependencyMap[19]);
      let result = obj.hasAttachmentsEmbedsComponentsOrSnapshots(item);
      if (result) {
        const tmpResult = tmp(dependencyMap[12]);
        result = 0 !== tmpResult.getEnabledHarmTypesForMessage(item);
      }
      return result;
    });
    const mapped = messages.map((type) => {
      if (set.has(type.type)) {
        if (null != type.messageReference) {
          messageByReference = messageByReference.getMessageByReference(type.messageReference);
          if (messageByReference.state === constants.LOADED) {
            if (null != messageByReference.message) {
              const tmp5 = obj;
              obj = obj(dependencyMap[19]);
              if (obj.hasAttachmentsEmbedsComponentsOrSnapshots(messageByReference.message)) {
                const tmp5Result = tmp5(dependencyMap[12]);
                if (0 !== tmp5Result.getEnabledHarmTypesForMessage(messageByReference.message)) {
                  return messageByReference.message;
                }
              }
            }
          }
        }
      }
    });
    const found1 = mapped.filter((item) => null != item);
    let tmp4 = found;
    if (found1.length > 0) {
      const items = [];
      let tmp5 = items;
      let num = 0;
      HermesBuiltin.arraySpread(items, found1, HermesBuiltin.arraySpread(items, found, 0));
      tmp4 = items;
    }
    const arr5 = obj2(17494)(tmp4, (id, id2) => id.id === id2.id && id.channel_id === id2.channel_id);
    const found2 = arr5.filter((item) => {
      obj = obj(dependencyMap[12]);
      return obj.hasUnscannedMedia(item);
    });
    let obj = {};
    obj2 = {};
    const item = arr5.forEach(f130878);
    const obj3 = obj2(11);
    const entries = obj3.entries(obj);
    const item1 = entries.forEach((item) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = item;
      obj = obj(dependencyMap[11]);
      obj2 = {
        channelId: tmp,
        numOfAttachments: tmp2.numOfAttachments,
        numOfAttachmentsPendingScan: tmp2.numOfAttachmentsPendingScan,
        numOfEmbeds: tmp2.numOfEmbeds,
        numOfEmbedsPendingScan: tmp2.numOfEmbedsPendingScan,
      };
      const result = obj.trackExplicitMediaRedactableMessagedLoaded(obj2);
    });
    const obj4 = obj2(11);
    const entries1 = obj4.entries(obj2);
    const item2 = entries1.forEach((item) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = item;
      obj = obj(dependencyMap[11]);
      obj2 = {
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
      };
      const result = obj.trackRedactableMessageLoaded(obj2);
    });
    let flag = found2.length > 0;
    if (flag) {
      handleUnscannedMessages(found2);
      flag = true;
    }
    tmp2 = flag;
  }
  return tmp2;
}
const ReferencedMessageState = ReferencedMessageStore2.ReferencedMessageState;
const MESSAGE_SCAN_TIMEOUT = ExplicitMediaRedactionConstants.MESSAGE_SCAN_TIMEOUT;
let closure_13 = Constants.MessageTypesWithLazyLoadedReferences;
const UserSettingsTypes = UserSettingsConstants.UserSettingsTypes;
let closure_15 = {};
class ExplicitMediaManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    const obj = {
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
    applyArgumentsResult.actions = obj;
    return applyArgumentsResult;
  }
}
const explicitMediaManager = new ExplicitMediaManager();
let result = size.fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaManager.tsx");

export default explicitMediaManager;
export const MAX_TIMEOUT_FOR_JITTER = 800;
