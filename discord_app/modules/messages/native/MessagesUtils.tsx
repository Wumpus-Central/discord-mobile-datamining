// === Module 11516: messages/MessagesUtils ===

// Module 11516 (messages/MessagesUtils)
import TTITrackerDefault from "TTITracker" /* 9 */;
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef12 from "module_12" /* 12 */;
import util from "util" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import KeyboardTypes from "KeyboardTypes" /* 1610 */;
import PremiumTypeUtils from "PremiumTypeUtils" /* 1969 */;
import Server from "Server" /* 1978 */;
import CommunicationDisabledUtils from "CommunicationDisabledUtils" /* 4383 */;
import ReactionUtils from "ReactionUtils" /* 4407 */;
import ToastUtils from "ToastUtils" /* 4453 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4454 */;
import Client from "Client" /* 4686 */;
import HapticUtils from "HapticUtils" /* 4724 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 4725 */;
import ChannelUtils from "ChannelUtils" /* 4901 */;
import MediaFormatTesters from "MediaFormatTesters" /* 4906 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4936 */;
import InteractionComponentUtils from "InteractionComponentUtils" /* 4980 */;
import useShowMemberVerificationGate from "useShowMemberVerificationGate" /* 5268 */;
import QuestTypes from "QuestTypes" /* 5659 */;
import MemberVerificationModalActionCreators from "MemberVerificationModalActionCreators" /* 5781 */;
import ClipboardUtils from "ClipboardUtils" /* 7429 */;
import ExplicitMediaRedactionModels from "ExplicitMediaRedactionModels" /* 7537 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7696 */;
import ApplicationCommandUtils from "ApplicationCommandUtils" /* 7761 */;
import MessageReactionsTypes from "MessageReactionsTypes" /* 8003 */;
import ReactionActionCreators from "ReactionActionCreators" /* 8004 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 8005 */;
import tracking_Tracking from "tracking/Tracking" /* 8007 */;
import _modDef11517 from "module_11517" /* 11517 */;
import reactions_ReactionUtils from "reactions/ReactionUtils" /* 11518 */;
import computeScrollData from "computeScrollData" /* 11534 */;
import NativeChatUtilsDefault from "NativeChatUtils" /* 11535 */;
import MediaPlaybackFacts from "MediaPlaybackFacts" /* 11539 */;
import QuestActionCreators from "QuestActionCreators" /* 11540 */;
import MessageImpressionAnalyticsHelpers from "MessageImpressionAnalyticsHelpers" /* 11565 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ReferencedMessageStore from "ReferencedMessageStore" /* 7833 */;
import ChannelStore from "ChannelStore" /* 2041 */;
import GuildMemberStore from "GuildMemberStore" /* 2105 */;
import GuildVerificationStore from "GuildVerificationStore" /* 5625 */;
import MessageStore from "MessageStore" /* 4976 */;
import NetworkStore from "NetworkStore" /* 4805 */;
import PermissionStore from "PermissionStore" /* 4395 */;
import ReadStateStore from "ReadStateStore" /* 4771 */;
import UserStore from "UserStore" /* 1372 */;

const require = globalThis.__r;

require = fn;
function getVisibleMessages(arg0) {
  ({ firstVisibleMessageRowIndex, lastVisibleMessageRowIndex, firstVisibleMessagePercentVisible, lastVisibleMessagePercentVisible, chatManager } = arg0);
  if (null != firstVisibleMessageRowIndex) {
    if (null != lastVisibleMessageRowIndex) {
      if (firstVisibleMessageRowIndex >= 0) {
        if (lastVisibleMessageRowIndex >= 0) {
          if (null != chatManager._rows) {
            if (null != chatManager._messages) {
              const items = [];
              let diff = firstVisibleMessageRowIndex;
              if (firstVisibleMessageRowIndex >= lastVisibleMessageRowIndex) {
                do {
                  let tmp2 = chatManager._rows[diff];
                  if (null != tmp2) {
                    if (tmp2.type === constants.MESSAGE) {
                      let message = tmp2.message;
                      let id;
                      if (message != null) {
                        id = message.id;
                      }
                      if (null != id) {
                        if (diff !== firstVisibleMessageRowIndex) {
                          let tmp5 = diff === lastVisibleMessageRowIndex && null != lastVisibleMessagePercentVisible;
                          let num = 1;
                          if (tmp5) {
                            num = lastVisibleMessagePercentVisible;
                          }
                        } else {
                          num = firstVisibleMessagePercentVisible;
                        }
                        let message1 = MessageStore.getMessage(tmp, tmp2.message.id);
                        if (null != message1) {
                          let obj = { message: message1, percentVisible: num, state: message1.state };
                          let arr = items.push(obj);
                        }
                      }
                    }
                  }
                  diff = diff - 1;
                } while (diff >= lastVisibleMessageRowIndex);
              }
              return items;
            }
          }
        }
      }
    }
  }
  return [];
}
function getMessage(toArray, arg1) {
  closure_0 = arg1;
  return _modDef12.find(toArray.toArray(), (id) => id.id === closure_0 || id.nonce === closure_0);
}
let closure_24 = async function _handleTapNavBar(arg0) {
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c3 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_1 = tmp2;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          ({ channel, useReducedMotion } = closure_0);
          closure_129_0 = useReducedMotion;
          ({ scrollToTop: closure_129_1, isNearTop, messages, findMessageIndex, chatRef } = closure_0);
          if (channel.isForumPost()) {
            if (!isNearTop) {
              if (null == getMessage(messages, obj2.castChannelIdAsMessageId(channel.id))) {
                const obj5 = { channelId: channel.id, jump: null, limit: null };
                const obj6 = { messageId: channel.id, flash: false };
                obj5.jump = obj6;
                obj5.limit = limit;
                c2 = 1;
                c3 = 1;
                const obj7 = { value: MessageActionCreatorsDefault.fetchMessages(obj5), done: false };
                return obj7;
              } else {
                const findMessageIndexResult = findMessageIndex(SnowflakeUtilsDefault.castChannelIdAsMessageId(channel.id));
                if (null == findMessageIndexResult) {
                  c3 = 3;
                  return { value: "HermesInternal", done: null };
                } else {
                  const obj8 = { animated: !useReducedMotion };
                  NativeChatUtilsDefault.scrollTo(chatRef.current, findMessageIndexResult, obj8);
                  const _setTimeout2 = setTimeout;
                  const timerId = setTimeout(() => closure_1_1(!closure_1_0), 10 * findMessageIndexResult);
                  const tmp10Result4 = NativeChatUtilsDefault;
                }
                const tmp10Result3 = SnowflakeUtilsDefault;
              }
              obj2 = SnowflakeUtilsDefault;
            }
          }
          c3 = 3;
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 !== 2) {
        const _setTimeout = setTimeout;
        const timerId1 = setTimeout(() => closure_1_1(!closure_1_0), 50);
      }
      c3 = 3;
      const obj = { value, done: true };
      return obj;
    } catch (tmp17) {
      c3 = tmp;
      throw tmp17;
    }
  }
};
function parseVoiceStateChannelIdSummary(prop) {
  const map = new Map();
  if (null != prop) {
    if ("" !== prop) {
      const parts = prop.split("|");
      const iter = parts[Symbol.iterator]();
      while (iter !== undefined) {
        let tmp6 = _slicedToArray(str4.split(":"), 2);
        [tmp7, tmp9] = tmp6;
        if (null != tmp7) {
          let str5 = tmp9;
          if (tmp9 == null) {
            str5 = "";
          }
          let result = map.set(tmp8, str5);
        }
        continue;
      }
      return map;
    }
  }
  return map;
}
let closure_5 = fn(9653).updateShouldShowJumpToPresentButton;
const RowGeneratorConstants = fn(8190);
({ RowType: closure_15, Changeset: closure_16 } = RowGeneratorConstants);
const Constants = fn(1074);
({ AnalyticEvents: closure_17, MessageEmbedTypes: closure_18, MessageTypes: closure_19, Permissions: closure_20, MAX_MESSAGES_PER_CHANNEL: closure_21 } = Constants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/MessagesUtils.tsx");

export const getLongPressSelectedMedia = function getLongPressSelectedMedia(message, mediaIndex, mediaType, tmpResult3, componentMediaIndex) {
  let obj = message;
  if (message.type === constants5.THREAD_STARTER_MESSAGE) {
    obj = message;
    if (null != message.messageReference) {
      message = ReferencedMessageStore.getMessageByReference(message.messageReference).message;
      obj = message;
      if (null != message) {
        obj = message;
      }
    }
  }
  if ("attachment" === mediaType) {
    let tmp13 = obj.attachments[mediaIndex];
    if (tmp13 == null) {
      const contentMessage = obj.getContentMessage();
      let tmp16;
      if (contentMessage != null) {
        tmp16 = contentMessage.attachments[mediaIndex];
      }
      tmp13 = tmp16;
    }
    let tmp17 = null;
    if (null != tmp13) {
      const obj2 = { sourceType: "attachment", source: tmp13, mediaType: null, mediaUrl: null, contentType: null };
      let str3 = "video";
      if (!obj9.isVideoFile(tmp13.filename)) {
        let str4 = "audio";
        if (!tmp18Result.isAudioFile(tmp13.filename)) {
          let str5 = "file";
          if (tmp18Result2.isImageFile(tmp13.filename)) {
            str5 = "image";
          }
          str4 = str5;
          tmp18Result2 = MediaFormatTesters;
        }
        str3 = str4;
        tmp18Result = MediaFormatTesters;
      }
      obj2.mediaType = str3;
      ({ url: obj8.mediaUrl, content_type } = tmp13);
      obj2.contentType = content_type;
      tmp17 = obj2;
      obj9 = MediaFormatTesters;
    }
    return tmp17;
  } else if ("embed" === mediaType) {
    if (null == obj.embeds[mediaIndex]) {
      return null;
    } else {
      if (tmp8.type === constants4.IMAGE) {
        if (null != tmp8.url) {
          const obj3 = { sourceType: "embed", source: tmp8, mediaType: "image", mediaUrl: tmp8.url, contentType: "o" };
          return obj3;
        }
      }
      if (tmp8.type === constants4.GIFV) {
        const video = tmp8.video;
        let url1;
        if (video != null) {
          url1 = video.url;
        }
        if (null != url1) {
          if (null != tmp8.video.proxyURL) {
            if ("" !== tmp8.video.proxyURL) {
              let url = tmp8.video.proxyURL;
            }
            const obj4 = { sourceType: "embed", source: tmp8, mediaType: "video", mediaUrl: url, contentType: tmp8.video.contentType };
            return obj4;
          }
          url = tmp8.video.url;
        }
      }
      if (tmp8.type === constants4.RICH) {
        const image = tmp8.image;
        let url2;
        if (image != null) {
          url2 = image.url;
        }
        if (null != url2) {
          const obj5 = { sourceType: "embed", source: tmp8, mediaType: "image", mediaUrl: tmp8.image.url, contentType: tmp8.image.contentType };
          return obj5;
        } else {
          const video2 = tmp8.video;
          let url3;
          if (video2 != null) {
            url3 = video2.url;
          }
          if (null != url3) {
            const obj6 = { sourceType: "embed", source: tmp8, mediaType: "video", mediaUrl: tmp8.video.url, contentType: tmp8.video.contentType };
            return obj6;
          }
        }
      }
      return null;
    }
  } else if ("component" === mediaType) {
    if (null == tmpResult3) {
      return null;
    } else {
      value = InteractionComponentUtils.flattenComponents(obj.components).get(tmpResult3);
      if (null == value) {
        return null;
      } else if (value.type === Server.ComponentType.MEDIA_GALLERY) {
        if (null == componentMediaIndex) {
          return null;
        } else if (null == value.items[componentMediaIndex]) {
          return null;
        } else {
          const media = tmp7.media;
          const obj7 = { sourceType: "component", source: value, mediaType: null, mediaUrl: null };
          let str = "image";
          if (tmp20Result.isVideoContentType(media.contentType)) {
            str = "video";
          }
          obj7.mediaType = str;
          obj7.mediaUrl = media.url;
          return obj7;
        }
      } else {
        return null;
      }
      const flattenComponentsResult = InteractionComponentUtils.flattenComponents(obj.components);
    }
  } else {
    return null;
  }
};
export const toObscuredMedia = function toObscuredMedia(sourceType) {
  if ("attachment" === sourceType.sourceType) {
    const obj2 = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Attachment, media: sourceType.source };
    let tmp = obj2;
  } else {
    tmp = null;
    if ("embed" === sourceType.sourceType) {
      const obj = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Embed, media: sourceType.source };
      tmp = obj;
    }
  }
  return tmp;
};
export const handleAddOrRemoveReaction = function handleAddOrRemoveReaction(messageId, channel, reaction) {
  let flag = isBurst;
  if (isBurst === undefined) {
    flag = false;
  }
  if (MESSAGE === undefined) {
    MESSAGE = ReactionActionCreators.ReactionLocations.MESSAGE;
  }
  const guildId = channel.getGuildId();
  const currentUser = UserStore.getCurrentUser();
  if (currentUser != null) {
    const id = currentUser.id;
  }
  let canChatInGuildResult = null != guildId;
  if (canChatInGuildResult) {
    canChatInGuildResult = GuildVerificationStore.canChatInGuild(guildId);
  }
  let result = null != guildId;
  if (result) {
    result = useShowMemberVerificationGate.shouldShowMembershipVerificationGate(guildId);
  }
  let member = null;
  if (null != guildId) {
    member = null;
    if (null != id) {
      member = GuildMemberStore.getMember(guildId, id);
    }
  }
  let tmp36Result = dependencyMap;
  const result1 = CommunicationDisabledUtils.isMemberCommunicationDisabled(member);
  if (channel.isArchivedLockedThread()) {
    const obj15 = ToastActionCreatorsDefault;
    const intl = util.intl;
    const string = intl.string;
    let t = util.t;
    if (isForumPostResult) {
      let stringResult = string(t.EJQrFq);
    } else {
      stringResult = string(t.X2L3Oa);
    }
    const obj3 = { key: "ARCHIVED_POST_REACTIONS_DISABLED_TOAST", content: stringResult, icon: null };
    tmp36Result = _modDef11517;
    obj3.icon = tmp36Result;
    t = obj15.open(obj3);
    isForumPostResult = channel.isForumPost();
  } else if (null != reaction) {
    if (flag) {
      if (true === !reaction.me_burst) {
        if (!tmp12Result.isPremium(currentUser)) {
          return reactions_ReactionUtils.handleOutOfSuperReactions();
        }
        tmp12Result = PremiumTypeUtils;
      }
    }
    const ReactionTypes = MessageReactionsTypes.ReactionTypes;
    if (tmp12Result10.isMeReaction(reaction.me, reaction.me_burst, tmp23)) {
      const result2 = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
      const tmp12Result11 = HapticUtils;
      const obj4 = { channelId: channel.id, messageId, emoji: reaction.emoji, location: MESSAGE, options: null };
      const obj5 = { burst: flag };
      obj4.options = obj5;
      ReactionActionCreators.removeReaction(obj4);
      const tmp12Result12 = ReactionActionCreators;
    } else {
      if (!result) {
        if (channel.isPrivate()) {
          if (!result1) {
            const tmp12Result13 = ReactionActionCreators;
            const obj6 = { burst: flag };
            tmp12Result13.addReaction(channel.id, messageId, reaction.emoji, MESSAGE, obj6);
            if (!flag) {
              const result3 = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
              const tmp12Result14 = HapticUtils;
            }
          }
        }
      }
      if (result) {
        const guildId1 = channel.getGuildId();
        if (null != guildId1) {
          return MemberVerificationModalActionCreators.openMemberVerificationModal(guildId1);
        }
      }
    }
    tmp12Result10 = ReactionUtils;
    tmp23 = flag ? ReactionTypes.BURST : ReactionTypes.NORMAL;
  } else {
    const tmp12Result16 = reactions_ReactionUtils;
    const obj7 = { burst: flag };
    const result4 = tmp12Result16.handleAddNewReactions(channel, messageId, MESSAGE, obj7);
  }
};
export const handleToggleFollowForumPost = function handleToggleFollowForumPost(channel, JoinedThreadsStore) {
  const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
  const obj2 = ThreadActionCreatorsDefault;
  if (JoinedThreadsStore) {
    obj2.leaveThread(channel, "iOS Forum Toolbar");
  } else {
    obj2.joinThread(channel, "iOS Forum Toolbar");
  }
};
export const handleCopyLinkForumPost = function handleCopyLinkForumPost(guildId, id, location) {
  const channel = ChannelStore.getChannel(id);
  let parent_id;
  if (channel != null) {
    parent_id = channel.parent_id;
  }
  const channel1 = ChannelStore.getChannel(parent_id);
  let flag;
  if (channel1 != null) {
    flag = channel1.isMediaChannel();
  }
  if (flag == null) {
    flag = false;
  }
  const result = tracking_Tracking.trackForumPostLinkCopied({ postId: id, location });
  if (flag) {
    const obj3 = { media_post_id: id };
    AppAnalyticsUtils.trackWithMetadata(constants3.MEDIA_POST_SHARE_PROMPT_CLICKED, obj3);
    const tmp4Result = AppAnalyticsUtils;
  }
  const obj = { postId: id, location };
  const result1 = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
  if (null == channel) {
    const tmp4Result8 = ClipboardUtils;
    let result2;
    if (true === flag) {
      result2 = SnowflakeUtilsDefault.castChannelIdAsMessageId(id);
      const tmp9Result = SnowflakeUtilsDefault;
    }
    tmp4Result8.copy(ChannelUtils.getChannelPermalink(guildId, id, result2));
    const tmp4Result9 = ChannelUtils;
  } else {
    const tmp4Result10 = ClipboardUtils;
    tmp4Result10.copy(ChannelUtils.getChannelLinkToCopy(channel, channel1));
    const tmp4Result11 = ChannelUtils;
  }
  const tmp4Result7 = HapticUtils;
  ToastUtils.presentLinkCopied();
  const tmp4Result12 = ToastUtils;
};
export const findMessageIndex = function findMessageIndex(previousRows, ChatTTITracker) {
  if (null != ChatTTITracker) {
    return computeScrollData.findMessageRowIndex(previousRows, ChatTTITracker);
  }
};
export { getVisibleMessages };
export const shouldJumpToOriginalPost = function shouldJumpToOriginalPost(isForumPost, id, jumpTargetId, arg3) {
  let isForumPostResult = isForumPost.isForumPost();
  if (isForumPostResult) {
    isForumPostResult = SnowflakeUtilsDefault.castChannelIdAsMessageId(id) === jumpTargetId.jumpTargetId;
  }
  if (isForumPostResult) {
    isForumPostResult = !arg3;
  }
  return isForumPostResult;
};
export const startOrCancelChannelLatestMessagesLoad = function startOrCancelChannelLatestMessagesLoad(hasJumpedToOriginalPost) {
  if (null == hasJumpedToOriginalPost.jumpTargetId) {
    if (null == hasJumpedToOriginalPost.oldestUnreadMessageId) {
      if (!hasJumpedToOriginalPost.shouldJumpToOriginalPost) {
        const tracker = hasJumpedToOriginalPost.tracker;
        const obj = { channelId: hasJumpedToOriginalPost.channelId };
        tracker.start(obj);
      }
    }
  }
  const tracker2 = hasJumpedToOriginalPost.tracker;
  tracker2.cancel();
};
export const recordTimings = function recordTimings(channelId, hasFetched) {
  const mapped = hasFetched.map((id) => id.id);
  hasFetched = hasFetched.hasFetched;
  if (!hasFetched) {
    hasFetched = hasFetched.ready && !hasFetched.cached;
    const tmp2 = hasFetched.ready && !hasFetched.cached;
  }
  TTITrackerDefault.recordMessageRender(channelId, mapped, hasFetched, hasFetched.hasMoreAfter);
};
export const findMessageIndexInRows = function findMessageIndexInRows(ChatTTITracker, previousRows) {
  if (null != ChatTTITracker) {
    return computeScrollData.findMessageRowIndex(previousRows, ChatTTITracker);
  }
};
export { getMessage };
export const isLoadingAtTop = function isLoadingAtTop(arg0, arg1) {
  if (arg1) {
    const iter = arg0[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      if (nextResult.changeType === constants2.INSERT) {
        let tmp8 = nextResult.index <= 1;
        iter.return();
        return tmp8;
      }
    }
    return false;
  } else {
    return false;
  }
};
export const handleTapTableView = function handleTapTableView(current, arg1) {
  let isIOSResult = PlatformUtils.isIOS();
  if (isIOSResult) {
    isIOSResult = arg1 !== KeyboardTypes.KeyboardTypes.SYSTEM;
  }
  if (isIOSResult) {
    current = current.current;
    if (current != null) {
      current.closeCustomKeyboard();
    }
  }
};
export const handleMediaPlayFinishedAnalytics = function handleMediaPlayFinishedAnalytics(mediaSource) {
  const reportedMediaFacts = MediaPlaybackFacts.resolveReportedMediaFacts(mediaSource.mediaSource, mediaSource.fileDurationSec);
  ({ fileSize, fileDurationSec } = reportedMediaFacts);
  const obj3 = { play_time_sec: mediaSource.playWallTimeMs / 1000, play_wall_time_ms: mediaSource.playWallTimeMs, first_play_waiting_ms: Math.min(mediaSource.firstPlayWaitingMs, 600000), stall_count: mediaSource.stallCount, stall_ms: mediaSource.stallMs, seek_count: mediaSource.seekCount, seek_waiting_ms: null, media_source: mediaSource.mediaSource, mime_type: null, file_size: null, file_duration_sec: null, error_code: null, error_message: null, connection_type: null, effective_connection_speed: null, service_provider: null };
  let mimeType = null;
  if (null != mediaSource.mimeType) {
    mimeType = null;
    if ("" !== mediaSource.mimeType) {
      mimeType = mediaSource.mimeType;
    }
  }
  obj3.mime_type = mimeType;
  obj3.file_size = fileSize;
  obj3.file_duration_sec = fileDurationSec;
  let errorCode = mediaSource.errorCode;
  if (errorCode == null) {
    errorCode = null;
  }
  obj3.error_code = errorCode;
  let errorMessage = null;
  if (null != mediaSource.errorMessage) {
    errorMessage = null;
    if ("" !== mediaSource.errorMessage) {
      errorMessage = mediaSource.errorMessage;
    }
  }
  obj3.error_message = errorMessage;
  obj3.connection_type = NetworkStore.getType();
  obj3.effective_connection_speed = NetworkStore.getEffectiveConnectionSpeed();
  obj3.service_provider = NetworkStore.getServiceProvider();
  AnalyticsUtilsDefault.track(constants3.MEDIA_PLAY_FINISHED, obj3);
};
export const scrollToBottom = function scrollToBottom(current, arg1, fn) {
  let flag = arg3;
  if (arg3 === undefined) {
    flag = true;
  }
  fn({ eventTimestamp: Date.now(), isAtBottom: true });
  const obj = { eventTimestamp: Date.now(), isAtBottom: true };
  if (flag) {
    flag = !arg1;
  }
  NativeChatUtilsDefault.scrollToBottom(current.current, flag);
};
export const scrollToTop = function scrollToTop(current, arg1) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  if (flag) {
    flag = !arg1;
  }
  NativeChatUtilsDefault.scrollToTop(current.current, flag);
};
export const scrollToRelativeOffset = function scrollToRelativeOffset(current, arg1, arg2) {
  let flag = arg3;
  if (arg3 === undefined) {
    flag = true;
  }
  if (flag) {
    flag = !arg1;
  }
  const result = NativeChatUtilsDefault.scrollToRelativeOffset(current.current, arg2, flag);
};
export const scrollToTopMessage = function scrollToTopMessage(current, getPreviousRows) {
  const previousRows = getPreviousRows.getPreviousRows();
  if (previousRows.length > 0) {
    NativeChatUtilsDefault.scrollTo(current.current, previousRows.length - 1);
  }
};
export const canAddNewReactions = function canAddNewReactions(isPrivate, arg1) {
  let canResult = arg1;
  if (arg1) {
    canResult = PermissionStore.can(constants6.ADD_REACTIONS, isPrivate);
  }
  if (!canResult) {
    canResult = isPrivate.isPrivate();
  }
  return canResult;
};
export const loadMoreBefore = function loadMoreBefore(channelId, hasMoreBefore, fn) {
  fn(true);
  if (tmp2) {
    const obj2 = { channelId, before: null, limit: null };
    const firstResult = hasMoreBefore.first();
    let id;
    if (firstResult != null) {
      id = firstResult.id;
    }
    obj2.before = id;
    obj2.limit = limit;
    const messages = MessageActionCreatorsDefault.fetchMessages(obj2);
  }
  tmp2 = hasMoreBefore.hasMoreBefore && !hasMoreBefore.loadingMore;
};
export const loadMoreAfter = function loadMoreAfter(channelId, hasMoreAfter, fn) {
  fn(true);
  if (tmp2) {
    const obj2 = { channelId, after: null, limit: null };
    const lastResult = hasMoreAfter.last();
    let id;
    if (lastResult != null) {
      id = lastResult.id;
    }
    obj2.after = id;
    obj2.limit = limit;
    const messages = MessageActionCreatorsDefault.fetchMessages(obj2);
  }
  tmp2 = hasMoreAfter.hasMoreAfter && !hasMoreAfter.loadingMore;
};
export const clearRows = function clearRows(current, clear, arg2, arg3, fn) {
  fn({ animated: false, hasHandledScroll: false, isNearBottom: false, isAtBottom: false, isNearTop: false, decelerating: false, dragging: false, hasMoreMessagesAfterForLastUpdate: false, pendingUpdatesQueue: [], _loaded: false, animatingStickerMessageId: null });
  clear.clear();
  closure_5(arg2, arg3, false);
  NativeChatUtilsDefault.clearRows(current.current);
};
export const handleFirstLayout = function handleFirstLayout(fn, firstVisibleMessageRowIndex, lastVisibleMessageRowIndex, firstVisibleMessagePercentVisible, lastVisibleMessagePercentVisible) {
  fn({ firstVisibleMessageRowIndex, lastVisibleMessageRowIndex, firstVisibleMessagePercentVisible, lastVisibleMessagePercentVisible, source: QuestTypes.QuestsVisibleMessagesChangedSource.FIRST_LAYOUT });
};
export const handleMessageVisibilityChanged = function handleMessageVisibilityChanged(fn, firstVisibleMessageRowIndex, lastVisibleMessageRowIndex, firstVisibleMessagePercentVisible, lastVisibleMessagePercentVisible) {
  fn({ firstVisibleMessageRowIndex, lastVisibleMessageRowIndex, firstVisibleMessagePercentVisible, lastVisibleMessagePercentVisible, source: QuestTypes.QuestsVisibleMessagesChangedSource.VISIBILITY_CHANGED });
};
export const handleLongPressSticker = function handleLongPressSticker(arg0, arg1, fn) {
  const items = [arg0];
  const set = new Set(items);
  if (null != arg1) {
    set.add(arg1);
  }
  let tmp2 = null;
  if (arg1 !== arg0) {
    tmp2 = arg0;
  }
  fn({ forceRender: true, updateMessageIds: set });
  return tmp2;
};
export const handleTapNavBar = function handleTapNavBar() {
  const self = this;
  const apply = closure_24.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const jumpToPresent = function jumpToPresent(jumpReturnTargetId, id, fn) {
  if (null == jumpReturnTargetId.jumpReturnTargetId) {
    if (!jumpReturnTargetId.loadingMore) {
      if (jumpReturnTargetId.hasMoreAfter) {
        const obj2 = { channelId: id.id, limit, jump: { present: true } };
        const messages = MessageActionCreatorsDefault.fetchMessages(obj2);
      } else {
        fn();
      }
    }
  } else {
    const obj4 = { channelId: id.id, messageId: jumpReturnTargetId, flash: true };
    MessageActionCreatorsDefault.jumpToMessage(obj4);
  }
};
export const scrollToNewMessages = function scrollToNewMessages(channel) {
  channel = channel.channel;
  let id = ReadStateStore.ackMessageId(channel.id);
  const obj2 = { channelId: channel.id, messageId: null, offset: 1, context: "Mark As Read" };
  if (id == null) {
    id = channel.id;
  }
  obj2.messageId = id;
  MessageActionCreatorsDefault.jumpToMessage(obj2);
};
export const syncMessageDisplay = function syncMessageDisplay(messages) {
  messages = messages.messages;
  const oldestUnreadMessageId = messages.oldestUnreadMessageId;
  ({ channelId, updateRows, scrollToMessageId } = messages);
  if (messages.isMessagesReady) {
    const obj = { scrollToMessageId: null, jumpTargetId: null, jumpType: null, focusTargetId: null };
    ({ jumpTargetId: obj.scrollToMessageId, jumpTargetId: obj.jumpTargetId } = messages);
    obj.jumpType = messages(scrollToMessageId[48]).JumpType.INSTANT;
    obj.focusTargetId = messages.focusTargetId;
    updateRows(obj);
    if (null != messages.jumpTargetId) {
      const obj4 = { scrollToMessageId: null, jumpTargetId: null, jumpType: null };
      ({ jumpTargetId: obj2.scrollToMessageId, jumpTargetId: obj2.jumpTargetId } = messages);
      obj4.jumpType = tmp2(tmp3[48]).JumpType.INSTANT;
      scrollToMessageId(obj4);
    } else if (null != oldestUnreadMessageId) {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => scrollToMessageId({ scrollToMessageId: oldestUnreadMessageId, jumpTargetId: messages.jumpTargetId, jumpType: Client.JumpType.INSTANT }), 50);
    }
    tmp2 = messages;
    tmp3 = scrollToMessageId;
  } else {
    updateRows({});
  }
  const mapped = messages.map((id) => id.id);
  let hasFetched = messages.hasFetched;
  if (!hasFetched) {
    hasFetched = messages.ready && !messages.cached;
    const tmp10 = messages.ready && !messages.cached;
  }
  oldestUnreadMessageId(scrollToMessageId[39]).recordMessageRender(channelId, mapped, hasFetched, messages.hasMoreAfter);
};
export function getChatRef(arg0) {
  return arg0;
}
export const maybeRescrollToMessageId = function maybeRescrollToMessageId(arg0, jumpType) {
  _require = arg0;
  ({ chatRef: importDefault, findMessageIndex: dependencyMap, updateRows: _slicedToArray, updateRowsEnabled } = jumpType);
  closure_4 = undefined !== updateRowsEnabled && updateRowsEnabled;
  let INSTANT = jumpType.jumpType;
  if (undefined === INSTANT) {
    INSTANT = require("Client").JumpType.INSTANT;
  }
  if (null != arg0) {
    const _setTimeout = setTimeout;
    const timerId = setTimeout(() => {
      const tmp2 = chatRef(scrollToMessageId);
      if (null != tmp2) {
        if (null != jumpTargetId.current) {
          let flag = false;
          if (findMessageIndexResult) {
            const obj = { scrollToMessageId, jumpTargetId: scrollToMessageId, jumpType, focusTargetId: scrollToMessageId, overrideScrollJumpType: Client.JumpType.INSTANT, isRescrolling: true };
            animated(obj);
            flag = true;
          }
          if (!flag) {
            const obj3 = { animated: jumpType === Client.JumpType.ANIMATED };
            NativeChatUtilsDefault.scrollTo(tmp14.current, tmp2, obj3);
          }
        }
      }
    }, 50);
  }
};
export const scrollToMessageIdWithRescroll = function scrollToMessageIdWithRescroll(scrollToMessageId) {
  scrollToMessageId = scrollToMessageId.scrollToMessageId;
  let jumpTargetId = scrollToMessageId.jumpTargetId;
  let tmp = null;
  if (undefined !== jumpTargetId) {
    tmp = jumpTargetId;
  }
  jumpTargetId = tmp;
  let ANIMATED = scrollToMessageId.jumpType;
  if (undefined === ANIMATED) {
    ANIMATED = scrollToMessageId(chatRef[48]).JumpType.ANIMATED;
  }
  let TOP = scrollToMessageId.scrollPosition;
  if (undefined === TOP) {
    TOP = scrollToMessageId(chatRef[45]).ChatScrollPosition.TOP;
  }
  const minimizeScrolling = scrollToMessageId.minimizeScrolling;
  const isRescrolling = scrollToMessageId.isRescrolling;
  ({ useReducedMotion, chatRef } = scrollToMessageId);
  ({ findMessageIndex, updateRows } = scrollToMessageId);
  if (!useReducedMotion) {
    useReducedMotion = ANIMATED === scrollToMessageId(chatRef[48]).JumpType.INSTANT;
  }
  const animated = tmp10;
  if (obj.isIOS()) {
    if (!tmp7) {
      const JumpType = tmp11(tmp12[48]).JumpType;
      let INSTANT = useReducedMotion ? JumpType.INSTANT : JumpType.ANIMATED;
      closure_129_0 = scrollToMessageId;
      closure_129_1 = chatRef;
      closure_129_2 = findMessageIndex;
      closure_129_3 = updateRows;
      closure_129_4 = true;
      if (undefined === INSTANT) {
        INSTANT = tmp11(tmp12[48]).JumpType.INSTANT;
      }
      closure_129_5 = INSTANT;
      if (null != scrollToMessageId) {
        const _setTimeout2 = setTimeout;
        const timerId = setTimeout(() => {
          const tmp2 = chatRef(scrollToMessageId);
          if (null != tmp2) {
            if (null != jumpTargetId.current) {
              let flag = false;
              if (findMessageIndexResult) {
                const obj = { scrollToMessageId, jumpTargetId: scrollToMessageId, jumpType, focusTargetId: scrollToMessageId, overrideScrollJumpType: Client.JumpType.INSTANT, isRescrolling: true };
                animated(obj);
                flag = true;
              }
              if (!flag) {
                const obj3 = { animated: jumpType === Client.JumpType.ANIMATED };
                NativeChatUtilsDefault.scrollTo(tmp14.current, tmp2, obj3);
              }
            }
          }
        }, 50);
      }
    }
  }
  const findMessageIndexResult = findMessageIndex(scrollToMessageId);
  asyncGeneratorStep = findMessageIndexResult;
  if (null != findMessageIndexResult) {
    if (tmp6) {
      const _setTimeout = setTimeout;
      const timerId1 = setTimeout(() => {
        NativeChatUtilsDefault.scrollIntoView(chatRef.current, findMessageIndexResult, { animated, highlight: jumpTargetId === scrollToMessageId });
      }, 5);
    } else {
      let obj3 = { animated: tmp10, highlight: tmp === scrollToMessageId, position: TOP };
      jumpTargetId(tmp12[45]).scrollTo(chatRef.current, findMessageIndexResult, obj3);
      let obj2 = jumpTargetId(tmp12[45]);
    }
  }
};
export const handleVisibleMessagesChange = function handleVisibleMessagesChange(arg0) {
  ({ firstVisibleMessageRowIndex, firstVisibleMessagePercentVisible, lastVisibleMessageRowIndex, lastVisibleMessagePercentVisible, shouldTrackAnnouncementMessageViews, shouldTrackOfficialMessageViews, shouldTrackRichPresenceInviteEmbedViews, shouldTrackVoiceInviteEmbedViews, guildId, channel } = arg0);
  if (null != firstVisibleMessageRowIndex) {
    if (null != lastVisibleMessageRowIndex) {
      if (null != firstVisibleMessagePercentVisible) {
        if (null != lastVisibleMessagePercentVisible) {
          const obj = { firstVisibleMessageRowIndex, lastVisibleMessageRowIndex, firstVisibleMessagePercentVisible, lastVisibleMessagePercentVisible, chatManager: tmp2, channelId: tmp3 };
          const arr = getVisibleMessages(obj);
          if (arr.length > 0) {
            const obj3 = { visibleMessages: arr, source: tmp };
            const result = QuestActionCreators.questsVisibleMobileMessagesChanged(obj3);
            const obj4 = MessageImpressionAnalyticsHelpers;
            const result1 = obj4.handleAnnouncementMessageViewTracking(arr, shouldTrackAnnouncementMessageViews, guildId, channel);
            const obj5 = MessageImpressionAnalyticsHelpers;
            const result2 = obj5.handleOfficialMessageViewTracking(arr, shouldTrackOfficialMessageViews, guildId, channel);
            const obj6 = MessageImpressionAnalyticsHelpers;
            const result3 = obj6.handleRichPresenceInviteEmbedViewTracking(arr, shouldTrackRichPresenceInviteEmbedViews, guildId, channel);
            const obj7 = MessageImpressionAnalyticsHelpers;
            const result4 = obj7.handleVoiceInviteEmbedViewTracking(arr, shouldTrackVoiceInviteEmbedViews, guildId, channel);
          }
        }
      }
    }
  }
};
export const getVoiceStateChannelSummaryFromVoiceStates = function getVoiceStateChannelSummaryFromVoiceStates(voiceStates) {
  const entries = Object.entries(voiceStates);
  const found = entries.filter((item) => {
    [, tmp] = item;
    return false !== tmp.discoverable;
  });
  const mapped = found.map((item) => {
    [tmp, tmp2] = item;
    let str = tmp2.channelId;
    if (str == null) {
      str = "";
    }
    return "" + tmp + ":" + str;
  });
  const sorted = mapped.sort();
  return sorted.join("|");
};
export const getVoiceChannelIdChangedAuthorIds = function getVoiceChannelIdChangedAuthorIds(prop, prop1) {
  const obj = parseVoiceStateChannelIdSummary(prop);
  const obj2 = parseVoiceStateChannelIdSummary(prop1);
  const set = new Set();
  const items = [...obj.keys(), ...obj2.keys()];
  for (const item10032 of set1) {
    value = obj.get(item10032);
    if (value !== obj2.get(item10032)) {
      let addResult = set.add(item10032);
    }
    continue;
  }
  return set;
};
export const getMessageAuthorMemberUserIds = function getMessageAuthorMemberUserIds(author) {
  const initialInteractionMetadata = ApplicationCommandUtils.getInitialInteractionMetadata(author);
  let type;
  if (initialInteractionMetadata != null) {
    type = initialInteractionMetadata.type;
  }
  let tmp5;
  if (type === Server.InteractionTypes.APPLICATION_COMMAND) {
    const target_user = initialInteractionMetadata.target_user;
    let id;
    if (target_user != null) {
      id = target_user.id;
    }
    tmp5 = id;
  }
  author = author.author;
  let id1;
  if (author != null) {
    id1 = author.id;
  }
  const items = [id1, , ];
  const interaction = author.interaction;
  let id2;
  if (interaction != null) {
    const user = interaction.user;
    if (user != null) {
      id2 = user.id;
    }
  }
  items[1] = id2;
  items[2] = tmp5;
  return items.filter((item) => null != item);
};