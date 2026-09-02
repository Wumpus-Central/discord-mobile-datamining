// discord_app/modules/explicit_media_redaction/ExplicitMediaManager.tsx
import DISCORD_EPOCHDefault from "../../utils/SnowflakeUtils.tsx";
import initializeDefault from "../../lib/AutomaticLifecycleManager.tsx";
import getEligibleHarmTypesConfigsForContext from "ObscuredMediaUtils.tsx";
import redactionSettingToRenderedString from "ExplicitMediaRedactionUtils.tsx";
import closure_3 from "../replies/ReferencedMessageStore.tsx";
import { ReferencedMessageState } from "../replies/ReferencedMessageStore.tsx";
import closure_5 from "../../stores/AuthenticationStore.tsx";
import closure_6 from "../../stores/ChannelSectionStore.tsx";
import closure_7 from "../../stores/ChannelStore.tsx";
import closure_8 from "../../stores/MessageStore.tsx";
import closure_9 from "../../stores/SelectedChannelStore.tsx";
import closure_10 from "../../stores/SelectedGuildStore.tsx";
import closure_11 from "ExplicitMediaSearchStore.tsx";
import { MessageTypesWithLazyLoadedReferences as closure_12 } from "../../Constants.tsx";
import { UserSettingsTypes } from "../user_settings/UserSettingsConstants.tsx";

require = arg1;
function resetManager() {
  const values = Object.values(closure_14);
  const item = values.forEach((timeout) => {
    clearTimeout(timeout.timeout);
  });
  closure_14 = {};
}
function maybeCancelTimeout(message, UPDATE) {
  if (null != message.id) {
    if (null != message.channel_id) {
      const _HermesInternal = HermesInternal;
      const combined = "" + message.channel_id + ":" + message.id;
      if (null != dependencyMap[combined]) {
        ({ timeout, setAt } = dependencyMap[combined]);
        if (UPDATE === redactionSettingToRenderedString.TimeoutCancelSource.UPDATE) {
          let attachments = message.attachments;
          if (attachments == null) {
            attachments = [];
          }
          let embeds = message.embeds;
          if (embeds == null) {
            embeds = [];
          }
          const found = attachments.filter((media) => {
            let obj = callback(6146);
            obj = { type: callback(6151).ObscuredMediaTypes.Attachment, media };
            return obj.isMediaFlaggedForHarmType(callback(6149).ContentHarmType.EXPLICIT, obj);
          });
          const found1 = embeds.filter((media) => {
            let obj = callback(6146);
            obj = { type: callback(6151).ObscuredMediaTypes.Embed, media };
            return obj.isMediaFlaggedForHarmType(callback(6149).ContentHarmType.EXPLICIT, obj);
          });
          let tmp5Result = tmp5(7354);
          let obj = {
            messageId: null,
            channelId: null,
            numOfAttachments: null,
            numOfEmbeds: null,
            numOfExplicitAttachments: null,
            numOfExplicitEmbeds: null,
          };
          ({ id: obj2[0], channel_id: obj2[1] } = message);
          obj[2] = attachments.length;
          obj[3] = embeds.length;
          obj[4] = found.length;
          obj[5] = found1.length;
          const result = tmp5Result.trackExplicitMediaScanComplete(obj);
        }
        tmp5Result = tmp5(7354);
        tmp5Result.trackScanTiming(setAt, UPDATE);
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
      let result = found1(6146).isEligibleForScanning(message);
      if (result) {
        result = found1(6146).hasUnscannedMedia(message);
        const tmpResult = found1(6146);
      }
      return result;
    });
    let found1 = found.filter(withoutScheduledTimeout);
  } else {
    found2 = filter((components) => found1(6146).isEligibleForScanning(components));
    found1 = found2.filter(withoutScheduledTimeout);
  }
  const item = found1.forEach((channel_id) => {
    const callback = channel_id;
    const combined = "" + channel_id.channel_id + ":" + channel_id.id;
    if (null == table[combined]) {
      let obj = callback2(7356);
      obj = { name: null };
      obj[0] = callback(7361).MetricEvents.EXPLICIT_MEDIA_SCAN_CLIENT_TIMEOUT_CREATE;
      obj.increment(obj);
      obj = { setAt: null, timeout: null };
      const _Date = Date;
      obj[0] = Date.now();
      const _setTimeout = setTimeout;
      obj[1] = setTimeout(() => {
        if (closure_1_16(channel_id, channel_id(closure_1_2[10]).TimeoutCancelSource.TIMEOUT)) {
          const message = closure_1_8.getMessage(tmp.channel_id, tmp.id);
          if (null != message) {
            let tmp2Result = tmp2(tmp3[11]);
            const unscannedMediaIds = tmp2Result.getUnscannedMediaIds(message);
            ({ attachmentIds, embedIds } = unscannedMediaIds);
            tmp2Result = tmp2(tmp3[10]);
            let obj = { channelId: null, messageId: null, attachmentIds: null, embedIds: null };
            ({ channel_id: obj3[0], id: obj3[1] } = tmp);
            obj[2] = attachmentIds;
            obj[3] = embedIds;
            const result = tmp2Result.trackScanningTimedOut(obj);
          }
          obj = { type: "MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT", messageId: null, channelId: null };
          ({ id: obj5[1], channel_id: obj5[2] } = tmp);
          closure_1_1(tmp3[14]).dispatch(obj);
          const obj4 = closure_1_1(tmp3[14]);
        }
      }, 3000);
      table[combined] = obj;
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
      const found = found1.filter((arg0) => null != table["" + arg0.channel_id + ":" + arg0.id]);
      if (0 !== found.length) {
        const obj = found1(closure_1_2[15]);
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
    const obj2 = found1(7364);
    if (tmp) {
      let result = obj2.sendMultiChannelMessagesForScanning(found1);
    } else {
      let result1 = obj2.sendMessagesForScanning(
        found1[0].channel_id,
        found1.map((id) => id.id),
      );
    }
  }
}
function processMessagesFromAction(firstMessages, isMessageUpdate) {
  const found = firstMessages.filter((message) => {
    obj = obj(7365);
    let result = obj.hasAttachmentsEmbedsComponentsOrSnapshots(message);
    obj(6146);
    if (result) {
      result = 0 !== tmp3;
    }
    return result;
  });
  const mapped = firstMessages.map((referenced_message) => {
    if (null != referenced_message) {
      if ("referenced_message" in referenced_message) {
        if (null != referenced_message.referenced_message) {
          obj = obj(7365);
          if (obj.hasAttachmentsEmbedsComponentsOrSnapshots(referenced_message.referenced_message)) {
            if (0 !== tmpResult.getEnabledHarmTypesForMessage(referenced_message.referenced_message)) {
              return referenced_message.referenced_message;
            }
            tmpResult = tmp(6146);
          }
          tmp = obj;
        }
      }
    }
  });
  const found1 = mapped.filter((arg0) => null != arg0);
  let tmp2 = found;
  if (found1.length > 0) {
    const items = [];
    HermesBuiltin.arraySpread(found1, HermesBuiltin.arraySpread(found, 0));
    tmp2 = items;
  }
  const arr4 = obj(7366)(tmp2, (id, id2) => id.id === id2.id && id.channel_id === id2.channel_id);
  const found2 = arr4.filter((message) => {
    obj = obj(6146);
    return obj.hasUnscannedMedia(message);
  });
  obj = {};
  obj = {};
  const item = arr4.forEach((channel_id) => {
    if (null == obj[channel_id.channel_id]) {
      tmp[channel_id.channel_id] = {
        numOfAttachments: 0,
        numOfAttachmentsPendingScan: 0,
        numOfEmbeds: 0,
        numOfEmbedsPendingScan: 0,
      };
    }
    if (null == obj[channel_id.id]) {
      obj = {
        channelId: null,
        numOfAttachments: 0,
        numOfSelfHarmAttachments: 0,
        numOfGoreAttachments: 0,
        numOfExplicitAttachments: 0,
        numOfEmbeds: 0,
        numOfSelfHarmEmbeds: 0,
        numOfGoreEmbeds: 0,
        numOfExplicitEmbeds: 0,
      };
      obj[0] = channel_id.channel_id;
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
    const unscannedMediaIds = obj(closure_1_2[11]).getUnscannedMediaIds(channel_id);
    obj[channel_id.channel_id].numOfAttachments = obj[channel_id.channel_id].numOfAttachments + num;
    obj[channel_id.channel_id].numOfEmbeds = obj[channel_id.channel_id].numOfEmbeds + num2;
    obj[channel_id.channel_id].numOfAttachmentsPendingScan =
      obj[channel_id.channel_id].numOfAttachmentsPendingScan + unscannedMediaIds.attachmentIds.length;
    obj[channel_id.channel_id].numOfEmbedsPendingScan =
      obj[channel_id.channel_id].numOfEmbedsPendingScan + unscannedMediaIds.embedIds.length;
    obj[channel_id.id].numOfAttachments = obj[channel_id.id].numOfAttachments + num;
    obj[channel_id.id].numOfEmbeds = obj[channel_id.id].numOfEmbeds + num2;
    const attachments1 = channel_id.attachments;
    let num3;
    if (attachments1 != null) {
      num3 = attachments1.filter((media) => {
        obj = callback(6146);
        obj = { type: callback(6151).ObscuredMediaTypes.Attachment, media };
        return obj.isMediaFlaggedForHarmType(callback(6149).ContentHarmType.EXPLICIT, obj);
      }).length;
    }
    if (num3 == null) {
      num3 = 0;
    }
    obj[channel_id.id].numOfExplicitAttachments = num3;
    const embeds1 = channel_id.embeds;
    let num4;
    if (embeds1 != null) {
      num4 = embeds1.filter((media) => {
        obj = callback(6146);
        obj = { type: callback(6151).ObscuredMediaTypes.Embed, media };
        return obj.isMediaFlaggedForHarmType(callback(6149).ContentHarmType.EXPLICIT, obj);
      }).length;
    }
    if (num4 == null) {
      num4 = 0;
    }
    obj[channel_id.id].numOfExplicitEmbeds = num4;
    const attachments2 = channel_id.attachments;
    let num5;
    if (attachments2 != null) {
      num5 = attachments2.filter((media) => {
        obj = callback(6146);
        obj = { type: callback(6151).ObscuredMediaTypes.Attachment, media };
        return obj.isMediaFlaggedForHarmType(callback(6149).ContentHarmType.GORE, obj);
      }).length;
    }
    if (num5 == null) {
      num5 = 0;
    }
    obj[channel_id.id].numOfGoreAttachments = num5;
    const embeds2 = channel_id.embeds;
    let num6;
    if (embeds2 != null) {
      num6 = embeds2.filter((media) => {
        obj = callback(6146);
        obj = { type: callback(6151).ObscuredMediaTypes.Embed, media };
        return obj.isMediaFlaggedForHarmType(callback(6149).ContentHarmType.GORE, obj);
      }).length;
    }
    if (num6 == null) {
      num6 = 0;
    }
    obj[channel_id.id].numOfGoreEmbeds = num6;
    const attachments3 = channel_id.attachments;
    let num7;
    if (attachments3 != null) {
      num7 = attachments3.filter((media) => {
        obj = callback(6146);
        obj = { type: callback(6151).ObscuredMediaTypes.Attachment, media };
        return obj.isMediaFlaggedForHarmType(callback(6149).ContentHarmType.SELF_HARM, obj);
      }).length;
    }
    if (num7 == null) {
      num7 = 0;
    }
    obj[channel_id.id].numOfSelfHarmAttachments = num7;
    const embeds3 = channel_id.embeds;
    let num8;
    if (embeds3 != null) {
      num8 = embeds3.filter((media) => {
        obj = callback(6146);
        obj = { type: callback(6151).ObscuredMediaTypes.Embed, media };
        return obj.isMediaFlaggedForHarmType(callback(6149).ContentHarmType.SELF_HARM, obj);
      }).length;
    }
    if (num8 == null) {
      num8 = 0;
    }
    obj[channel_id.id].numOfSelfHarmEmbeds = num8;
  });
  const entries = obj(11).entries(obj);
  const item1 = entries.forEach((arg0) => {
    [tmp, tmp2] = arg0;
    obj = obj(7354);
    obj = {
      channelId: tmp,
      numOfAttachments: tmp2.numOfAttachments,
      numOfAttachmentsPendingScan: tmp2.numOfAttachmentsPendingScan,
      numOfEmbeds: tmp2.numOfEmbeds,
      numOfEmbedsPendingScan: tmp2.numOfEmbedsPendingScan,
    };
    const result = obj.trackExplicitMediaRedactableMessagedLoaded(obj);
  });
  const obj3 = obj(11);
  const entries1 = obj(11).entries(obj);
  const item2 = entries1.forEach((arg0) => {
    [tmp, tmp2] = arg0;
    obj = obj(7354);
    obj = {
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
    const result = obj.trackRedactableMessageLoaded(obj);
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
      if (obj6.getChannelIdAndAuthorIdFromMessage(message).authorId !== store.getId()) {
        if (null == message.embeds) {
          if (null == message.attachments) {
            let tmp20Result = tmp20(7354);
            if (!tmp20Result.hasMessageSnapshotsWithAttachmentsOrEmbeds(message)) {
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
            tmp20Result = tmp20(7354);
            if (!tmp20Result.hasMessageSnapshotsWithAttachmentsOrEmbeds(message)) {
              return false;
            }
          }
        }
        if (!tmp20Result1.hasUnscannedMedia(message)) {
          message = store3.getMessage(message.channel_id, message.id);
          if (message == null) {
            message = message2.getMessage(message.id, message.channel_id);
          }
          if (message == null) {
            const message1 = message.getMessage(message.channel_id, message.id);
            message2 = undefined;
            if (message1 != null) {
              message2 = message1.message;
            }
            message = message2;
          }
          let hasUnscannedMediaResult = null == message;
          if (!hasUnscannedMediaResult) {
            const tmp20Result2 = tmp20(6146);
            hasUnscannedMediaResult = tmp20Result2.hasUnscannedMedia(tmp20(4737).updateMessageRecord(message, message));
            const tmp20Result3 = tmp20(4737);
          }
          if (!hasUnscannedMediaResult) {
            maybeCancelTimeout(message, tmp20(7354).TimeoutCancelSource.UPDATE);
          }
        }
        const channelId = store4.getChannelId();
        if (message.channel_id !== channelId) {
          if (message.channel_id !== tmp15) {
            return false;
          }
        }
        const message3 = store3.getMessage(message.channel_id, message.id);
        let tmp18 = null != message3;
        if (tmp18) {
          const items = [message3];
          tmp18 = processMessagesFromAction(items, { isMessageUpdate: true });
        }
        return tmp18;
      }
      obj6 = getEligibleHarmTypesConfigsForContext;
    }
  }
  return false;
}
function handleMessageCreate(optimistic) {
  ({ channelId, message } = optimistic);
  if (!optimistic.optimistic) {
    if (!optimistic.isPushNotification) {
      if (null != channelId) {
        if (obj2.getChannelIdAndAuthorIdFromMessage(message).authorId !== store.getId()) {
          channelId = store4.getChannelId();
          const currentSidebarChannelId = store2.getCurrentSidebarChannelId(channelId);
          channel = channel.getChannel(channelId);
          let tmp3Result = channelId === channelId || channelId === currentSidebarChannelId;
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
            const obj = { jitter: null };
            obj[0] = flag;
            tmp3Result = processMessagesFromAction(items, obj);
            const tmp3 = processMessagesFromAction;
          }
          return tmp3Result;
        }
        obj2 = getEligibleHarmTypesConfigsForContext;
      }
    }
  }
  return false;
}
function handleMessagesLoad(arg0) {
  ({ channelId, messages } = arg0);
  if (null != channelId) {
    if (null != messages) {
      channelId = store4.getChannelId();
      let tmp4 = channelId === channelId || channelId === store2.getCurrentSidebarChannelId(channelId);
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
  c0 = false;
  const item = data.forEach((messages) => {
    const tmp = closure_1_1(closure_1_2[22])(messages.messages);
    closure_0 =
      closure_1_19(
        closure_1_1(closure_1_2[19])(
          closure_1_1(closure_1_2[22])(messages.messages),
          (id, id2) => id.id === id2.id && id.channel_id === id2.channel_id,
        ),
      ) || closure_0;
  });
  return c0;
}
function handleLoadPinnedMessages(pins) {
  pins = pins.pins;
  return processMessagesFromAction(pins.map((message) => message.message));
}
function handleForumPostsLoad(threads) {
  threads = threads.threads;
  let tmp2 = null != threads;
  if (tmp2) {
    let tmp4 = store5.getGuildId() === tmp;
    if (tmp4) {
      const keys = DISCORD_EPOCHDefault.keys(threads);
      tmp4 = processMessagesFromAction(keys.map((arg0) => threads[arg0].first_message));
      const obj = DISCORD_EPOCHDefault;
    }
    tmp2 = tmp4;
  }
  return tmp2;
}
function handleThreadsLoad(firstMessages) {
  firstMessages = firstMessages.firstMessages;
  let tmp2 = null != firstMessages;
  if (tmp2) {
    let tmp4 = store5.getGuildId() === tmp;
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
    let tmp3 = channelId === store4.getChannelId();
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
      const channelId = store4.getChannelId();
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
  const messages = store3.getMessages(channelId);
  let tmp = 0 !== messages.length;
  if (tmp) {
    const found = messages.filter((message) => {
      obj = obj(7365);
      let result = obj.hasAttachmentsEmbedsComponentsOrSnapshots(message);
      if (result) {
        result = 0 !== obj(6146).getEnabledHarmTypesForMessage(message);
        const tmpResult = obj(6146);
      }
      return result;
    });
    const mapped = messages.map((type) => {
      if (set.has(type.type)) {
        if (null != type.messageReference) {
          messageByReference = messageByReference.getMessageByReference(type.messageReference);
          if (messageByReference.state === constants.LOADED) {
            if (null != messageByReference.message) {
              obj = obj(7365);
              if (obj.hasAttachmentsEmbedsComponentsOrSnapshots(messageByReference.message)) {
                if (0 !== tmp5Result.getEnabledHarmTypesForMessage(messageByReference.message)) {
                  return messageByReference.message;
                }
                tmp5Result = tmp5(6146);
              }
              tmp5 = obj;
            }
          }
        }
      }
    });
    const found1 = mapped.filter((arg0) => null != arg0);
    let tmp3 = found;
    if (found1.length > 0) {
      const items = [];
      HermesBuiltin.arraySpread(found1, HermesBuiltin.arraySpread(found, 0));
      tmp3 = items;
    }
    const arr5 = obj(7366)(tmp3, (id, id2) => id.id === id2.id && id.channel_id === id2.channel_id);
    const found2 = arr5.filter((message) => {
      obj = obj(6146);
      return obj.hasUnscannedMedia(message);
    });
    obj = {};
    obj = {};
    const item = arr5.forEach((channel_id) => {
      if (null == obj[channel_id.channel_id]) {
        tmp[channel_id.channel_id] = {
          numOfAttachments: 0,
          numOfAttachmentsPendingScan: 0,
          numOfEmbeds: 0,
          numOfEmbedsPendingScan: 0,
        };
      }
      if (null == obj[channel_id.id]) {
        obj = {
          channelId: null,
          numOfAttachments: 0,
          numOfSelfHarmAttachments: 0,
          numOfGoreAttachments: 0,
          numOfExplicitAttachments: 0,
          numOfEmbeds: 0,
          numOfSelfHarmEmbeds: 0,
          numOfGoreEmbeds: 0,
          numOfExplicitEmbeds: 0,
        };
        obj[0] = channel_id.channel_id;
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
      const unscannedMediaIds = obj(closure_1_2[11]).getUnscannedMediaIds(channel_id);
      obj[channel_id.channel_id].numOfAttachments = obj[channel_id.channel_id].numOfAttachments + num;
      obj[channel_id.channel_id].numOfEmbeds = obj[channel_id.channel_id].numOfEmbeds + num2;
      obj[channel_id.channel_id].numOfAttachmentsPendingScan =
        obj[channel_id.channel_id].numOfAttachmentsPendingScan + unscannedMediaIds.attachmentIds.length;
      obj[channel_id.channel_id].numOfEmbedsPendingScan =
        obj[channel_id.channel_id].numOfEmbedsPendingScan + unscannedMediaIds.embedIds.length;
      obj[channel_id.id].numOfAttachments = obj[channel_id.id].numOfAttachments + num;
      obj[channel_id.id].numOfEmbeds = obj[channel_id.id].numOfEmbeds + num2;
      const attachments1 = channel_id.attachments;
      let num3;
      if (attachments1 != null) {
        num3 = attachments1.filter((media) => {
          obj = callback(6146);
          obj = { type: callback(6151).ObscuredMediaTypes.Attachment, media };
          return obj.isMediaFlaggedForHarmType(callback(6149).ContentHarmType.EXPLICIT, obj);
        }).length;
      }
      if (num3 == null) {
        num3 = 0;
      }
      obj[channel_id.id].numOfExplicitAttachments = num3;
      const embeds1 = channel_id.embeds;
      let num4;
      if (embeds1 != null) {
        num4 = embeds1.filter((media) => {
          obj = callback(6146);
          obj = { type: callback(6151).ObscuredMediaTypes.Embed, media };
          return obj.isMediaFlaggedForHarmType(callback(6149).ContentHarmType.EXPLICIT, obj);
        }).length;
      }
      if (num4 == null) {
        num4 = 0;
      }
      obj[channel_id.id].numOfExplicitEmbeds = num4;
      const attachments2 = channel_id.attachments;
      let num5;
      if (attachments2 != null) {
        num5 = attachments2.filter((media) => {
          obj = callback(6146);
          obj = { type: callback(6151).ObscuredMediaTypes.Attachment, media };
          return obj.isMediaFlaggedForHarmType(callback(6149).ContentHarmType.GORE, obj);
        }).length;
      }
      if (num5 == null) {
        num5 = 0;
      }
      obj[channel_id.id].numOfGoreAttachments = num5;
      const embeds2 = channel_id.embeds;
      let num6;
      if (embeds2 != null) {
        num6 = embeds2.filter((media) => {
          obj = callback(6146);
          obj = { type: callback(6151).ObscuredMediaTypes.Embed, media };
          return obj.isMediaFlaggedForHarmType(callback(6149).ContentHarmType.GORE, obj);
        }).length;
      }
      if (num6 == null) {
        num6 = 0;
      }
      obj[channel_id.id].numOfGoreEmbeds = num6;
      const attachments3 = channel_id.attachments;
      let num7;
      if (attachments3 != null) {
        num7 = attachments3.filter((media) => {
          obj = callback(6146);
          obj = { type: callback(6151).ObscuredMediaTypes.Attachment, media };
          return obj.isMediaFlaggedForHarmType(callback(6149).ContentHarmType.SELF_HARM, obj);
        }).length;
      }
      if (num7 == null) {
        num7 = 0;
      }
      obj[channel_id.id].numOfSelfHarmAttachments = num7;
      const embeds3 = channel_id.embeds;
      let num8;
      if (embeds3 != null) {
        num8 = embeds3.filter((media) => {
          obj = callback(6146);
          obj = { type: callback(6151).ObscuredMediaTypes.Embed, media };
          return obj.isMediaFlaggedForHarmType(callback(6149).ContentHarmType.SELF_HARM, obj);
        }).length;
      }
      if (num8 == null) {
        num8 = 0;
      }
      obj[channel_id.id].numOfSelfHarmEmbeds = num8;
    });
    const entries = obj(11).entries(obj);
    const item1 = entries.forEach((arg0) => {
      [tmp, tmp2] = arg0;
      obj = obj(7354);
      obj = {
        channelId: tmp,
        numOfAttachments: tmp2.numOfAttachments,
        numOfAttachmentsPendingScan: tmp2.numOfAttachmentsPendingScan,
        numOfEmbeds: tmp2.numOfEmbeds,
        numOfEmbedsPendingScan: tmp2.numOfEmbedsPendingScan,
      };
      const result = obj.trackExplicitMediaRedactableMessagedLoaded(obj);
    });
    const obj3 = obj(11);
    const entries1 = obj(11).entries(obj);
    const item2 = entries1.forEach((arg0) => {
      [tmp, tmp2] = arg0;
      obj = obj(7354);
      obj = {
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
      const result = obj.trackRedactableMessageLoaded(obj);
    });
    let flag = found2.length > 0;
    if (flag) {
      handleUnscannedMessages(found2);
      flag = true;
    }
    tmp = flag;
    const obj4 = obj(11);
  }
  return tmp;
}
let closure_14 = {};
initializeDefault;
let prototype = function ExplicitMediaManager() {
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
prototype = new prototype();
let result = require("set").fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaManager.tsx");

export default prototype;
export const MESSAGE_SCAN_TIMEOUT = 3000;
export const MAX_TIMEOUT_FOR_JITTER = 800;
