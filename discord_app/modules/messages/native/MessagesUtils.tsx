// === Module 9854: messages/MessagesUtils ===

// Module 9854 (messages/MessagesUtils)
import TTITrackerDefault from "TTITracker" /* 9 */;
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef12 from "module_12" /* 12 */;
import intl2 from "intl" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import KeyboardTypes from "KeyboardTypes" /* 1616 */;
import PremiumTypeUtils from "PremiumTypeUtils" /* 1976 */;
import Server from "Server" /* 1985 */;
import CommunicationDisabledUtils from "CommunicationDisabledUtils" /* 4496 */;
import ReactionUtils from "ReactionUtils" /* 4521 */;
import ToastUtils from "ToastUtils" /* 4567 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4568 */;
import flow_Client from "flow/Client" /* 4787 */;
import AssetRegistryDefault from "AssetRegistry" /* 4811 */;
import HapticUtils from "HapticUtils" /* 4855 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 4856 */;
import ChannelUtils from "ChannelUtils" /* 5035 */;
import MediaFormatTesters from "MediaFormatTesters" /* 5040 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5070 */;
import InteractionComponentUtils from "InteractionComponentUtils" /* 5114 */;
import QuestTypes from "QuestTypes" /* 5626 */;
import useShowMemberVerificationGate from "useShowMemberVerificationGate" /* 5841 */;
import MemberVerificationModalActionCreators from "MemberVerificationModalActionCreators" /* 5960 */;
import ClipboardUtils from "ClipboardUtils" /* 6688 */;
import ExplicitMediaRedactionModels from "ExplicitMediaRedactionModels" /* 6800 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 6965 */;
import ApplicationCommandUtils from "ApplicationCommandUtils" /* 7030 */;
import MessageReactionsTypes from "MessageReactionsTypes" /* 7259 */;
import ReactionActionCreators from "ReactionActionCreators" /* 7260 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 7261 */;
import tracking_Tracking from "tracking/Tracking" /* 7263 */;
import useChatBottomManagerUIStore from "useChatBottomManagerUIStore" /* 9064 */;
import reactions_ReactionUtils from "reactions/ReactionUtils" /* 9855 */;
import computeScrollData from "computeScrollData" /* 9988 */;
import NativeChatUtilsDefault from "NativeChatUtils" /* 9989 */;
import MediaPlaybackFacts from "MediaPlaybackFacts" /* 9993 */;
import QuestActionCreators from "QuestActionCreators" /* 9994 */;
import MessageImpressionAnalyticsHelpers from "MessageImpressionAnalyticsHelpers" /* 10019 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import ReferencedMessageStore from "ReferencedMessageStore" /* 7102 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import GuildVerificationStore from "GuildVerificationStore" /* 5570 */;
import MessageStore from "MessageStore" /* 5110 */;
import NetworkStore from "NetworkStore" /* 4939 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import ReadStateStore from "ReadStateStore" /* 4905 */;
import UserStore from "UserStore" /* 1377 */;
import RowGeneratorConstants from "RowGeneratorConstants" /* 7592 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c2, c3, map, set;

let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
const f101881 = (id) => id.id;
function getVisibleMessages(arg0) {
  let chatManager;
  let firstVisibleMessagePercentVisible;
  let firstVisibleMessageRowIndex;
  let lastVisibleMessagePercentVisible;
  let lastVisibleMessageRowIndex;
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
                        let num;
                        if (diff !== firstVisibleMessageRowIndex) {
                          let tmp5 = diff === lastVisibleMessageRowIndex && null != lastVisibleMessagePercentVisible;
                          num = 1;
                          if (tmp5) {
                            num = lastVisibleMessagePercentVisible;
                          }
                        } else {
                          num = firstVisibleMessagePercentVisible;
                        }
                        let message1 = MessageStore.getMessage(tmp, tmp2.message.id);
                        if (null != message1) {
                          obj = { message: message1, percentVisible: num, state: message1.state };
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
  let closure_0 = arg1;
  const arr = _modDef12;
  return arr.find(toArray.toArray(), (id) => id.id === closure_0 || id.nonce === closure_0);
}
let obj = function _handleTapNavBar() {
  obj = _asyncToGenerator(async (arg0) => {
    let c1;
    let channel;
    let chatRef;
    let findMessageIndex;
    let isNearTop;
    let messages;
    let obj6;
    let tmp9Result;
    let useReducedMotion;
    let closure_0 = arg0;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
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
            let closure_1 = tmp;
            useReducedMotion = undefined;
            c1 = undefined;
            ({ channel, useReducedMotion } = closure_0);
            ({ scrollToTop: c1, isNearTop, messages, findMessageIndex, chatRef } = closure_0);
            if (channel.isForumPost()) {
              if (!isNearTop) {
                const obj2 = SnowflakeUtilsDefault;
                if (null == getMessage(messages, obj2.castChannelIdAsMessageId(channel.id))) {
                  const obj5 = { channelId: channel.id, jump: obj6, limit };
                  obj6 = { messageId: channel.id, flash: false };
                  c2 = 1;
                  c3 = 1;
                  const obj7 = { value: tmp9Result.fetchMessages(obj5), done: false };
                  tmp9Result = MessageActionCreatorsDefault;
                  return obj7;
                } else {
                  const tmp9Result3 = SnowflakeUtilsDefault;
                  const findMessageIndexResult = findMessageIndex(tmp9Result3.castChannelIdAsMessageId(channel.id));
                  if (null == findMessageIndexResult) {
                    c3 = 3;
                    return { value: "IconComponent", done: null };
                  } else {
                    const obj8 = { animated: !useReducedMotion };
                    const tmp9Result4 = NativeChatUtilsDefault;
                    tmp9Result4.scrollTo(chatRef.current, findMessageIndexResult, obj8);
                    const _setTimeout2 = setTimeout;
                    const timerId = setTimeout(() => _undefined(!useReducedMotion), 10 * findMessageIndexResult);
                  }
                }
              }
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          const _setTimeout = setTimeout;
          const timerId1 = setTimeout(() => closure_1_1(!closure_1_0), 50);
        }
        c3 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp16) {
        c3 = 3;
        throw tmp16;
      }
    }
  });
  return obj(...arguments);
};
function parseVoiceStateChannelIdSummary(prop) {
  let tmp10;
  let tmp8;
  map = new Map();
  if (null != prop) {
    if ("" !== prop) {
      const parts = prop.split("|");
      const iter = parts[Symbol.iterator]();
      const str4 = iter.next();
      while (iter !== undefined) {
        let tmp7 = _slicedToArray(str4.split(":"), 2);
        [tmp8, tmp10] = tmp7;
        if (null != tmp8) {
          let str5 = tmp10;
          set = map.set;
          if (tmp10 == null) {
            str5 = "";
          }
          let result = set(tmp9, str5);
        }
        continue;
      }
      return map;
    }
  }
  return map;
}
let _asyncToGenerator = _asyncToGenerator_mod;
let closure_5 = useChatBottomManagerUIStore.updateShouldShowJumpToPresentButton;
({ RowType: closure_15, Changeset: closure_16 } = RowGeneratorConstants);
({ AnalyticEvents: closure_17, MessageEmbedTypes: closure_18, MessageTypes: closure_19, Permissions: closure_20, MAX_MESSAGES_PER_CHANNEL: closure_21 } = Constants);
let result = size.fileFinishedImporting("modules/messages/native/MessagesUtils.tsx");
const findMessageIndex_export = function findMessageIndex(previousRows, startMessageId) {
  if (null != startMessageId) {
    obj = computeScrollData;
    return obj.findMessageRowIndex(previousRows, startMessageId);
  }
};

export const getLongPressSelectedMedia = function getLongPressSelectedMedia(message, mediaIndex, mediaType, tmpResult3, componentMediaIndex) {
  let content_type;
  let str;
  let str3;
  obj = message;
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
      const obj2 = { sourceType: "attachment", source: tmp13, mediaType: str3, mediaUrl: null, contentType: content_type };
      str3 = "video";
      const obj9 = MediaFormatTesters;
      if (!obj9.isVideoFile(tmp13.filename)) {
        let str4 = "audio";
        const tmp18Result = MediaFormatTesters;
        if (!tmp18Result.isAudioFile(tmp13.filename)) {
          let str5 = "file";
          const tmp18Result2 = MediaFormatTesters;
          if (tmp18Result2.isImageFile(tmp13.filename)) {
            str5 = "image";
          }
          str4 = str5;
        }
        str3 = str4;
      }
      ({ url: obj8.mediaUrl, content_type } = tmp13);
      tmp17 = obj2;
    }
    return tmp17;
  } else if ("embed" === mediaType) {
    if (null == obj.embeds[mediaIndex]) {
      return null;
    } else {
      if (obj.embeds[mediaIndex].type === constants4.IMAGE) {
        if (null != obj.embeds[mediaIndex].url) {
          return { sourceType: "embed", source: obj.embeds[mediaIndex], mediaType: "image", mediaUrl: obj.embeds[mediaIndex].url, contentType: "o" };
        }
      }
      if (obj.embeds[mediaIndex].type === constants4.GIFV) {
        const video = tmp8.video;
        let url1;
        if (video != null) {
          url1 = video.url;
        }
        if (null != url1) {
          if (null != obj.embeds[mediaIndex].video.proxyURL) {
            let url;
            if ("" !== obj.embeds[mediaIndex].video.proxyURL) {
              url = tmp8.video.proxyURL;
            }
            return { sourceType: "embed", source: obj.embeds[mediaIndex], mediaType: "video", mediaUrl: url, contentType: obj.embeds[mediaIndex].video.contentType };
          }
          url = tmp8.video.url;
        }
      }
      if (obj.embeds[mediaIndex].type === constants4.RICH) {
        const image = tmp8.image;
        let url2;
        if (image != null) {
          url2 = image.url;
        }
        if (null != url2) {
          return { sourceType: "embed", source: obj.embeds[mediaIndex], mediaType: "image", mediaUrl: obj.embeds[mediaIndex].image.url, contentType: obj.embeds[mediaIndex].image.contentType };
        } else {
          const video2 = tmp8.video;
          let url3;
          if (video2 != null) {
            url3 = video2.url;
          }
          if (null != url3) {
            return { sourceType: "embed", source: obj.embeds[mediaIndex], mediaType: "video", mediaUrl: obj.embeds[mediaIndex].video.url, contentType: obj.embeds[mediaIndex].video.contentType };
          }
        }
      }
      return null;
    }
  } else if ("component" === mediaType) {
    if (null == tmpResult3) {
      return null;
    } else {
      const obj12 = InteractionComponentUtils;
      const flattenComponentsResult = obj12.flattenComponents(obj.components);
      const value = flattenComponentsResult.get(tmpResult3);
      if (null == value) {
        return null;
      } else if (value.type === Server.ComponentType.MEDIA_GALLERY) {
        if (null == componentMediaIndex) {
          return null;
        } else if (null == value.items[componentMediaIndex]) {
          return null;
        } else {
          const media = tmp7.media;
          const obj7 = { sourceType: "component", source: value, mediaType: str, mediaUrl: media.url };
          str = "image";
          const tmp20Result = MediaFormatTesters;
          if (tmp20Result.isVideoContentType(media.contentType)) {
            str = "video";
          }
          return obj7;
        }
      } else {
        return null;
      }
    }
  } else {
    return null;
  }
};
export const toObscuredMedia = function toObscuredMedia(sourceType) {
  let tmp;
  if ("attachment" === sourceType.sourceType) {
    tmp = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Attachment, media: sourceType.source };
    const obj2 = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Attachment, media: sourceType.source };
  } else {
    tmp = null;
    if ("embed" === sourceType.sourceType) {
      tmp = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Embed, media: sourceType.source };
      obj = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Embed, media: sourceType.source };
    }
  }
  return tmp;
};
export const handleAddOrRemoveReaction = function handleAddOrRemoveReaction(messageId, channel, reaction) {
  let MESSAGE;
  let id;
  let obj5;
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
    id = currentUser.id;
  }
  null != guildId && GuildVerificationStore.canChatInGuild(guildId);
  let result = null != guildId;
  if (result) {
    obj = useShowMemberVerificationGate;
    result = obj.shouldShowMembershipVerificationGate(guildId);
  }
  let member = null;
  if (null != guildId) {
    member = null;
    if (null != id) {
      member = GuildMemberStore.getMember(guildId, id);
    }
  }
  const obj2 = CommunicationDisabledUtils;
  const result1 = obj2.isMemberCommunicationDisabled(member);
  if (channel.isArchivedLockedThread()) {
    let stringResult;
    const open = ToastActionCreatorsDefault.open;
    ToastActionCreatorsDefault;
    const isForumPostResult = channel.isForumPost();
    const intl = intl2.intl;
    const string = intl.string;
    const t = intl2.t;
    if (isForumPostResult) {
      stringResult = string(t.EJQrFq);
    } else {
      stringResult = string(t.X2L3Oa);
    }
    const obj3 = { key: "ARCHIVED_POST_REACTIONS_DISABLED_TOAST", content: stringResult, icon: AssetRegistryDefault };
    open(obj3);
  } else if (null != reaction) {
    if (flag) {
      if (true === !reaction.me_burst) {
        const tmp12Result = PremiumTypeUtils;
        if (!tmp12Result.isPremium(currentUser)) {
          const tmp12Result9 = reactions_ReactionUtils;
          return tmp12Result9.handleOutOfSuperReactions();
        }
      }
    }
    const ReactionTypes = MessageReactionsTypes.ReactionTypes;
    const tmp23 = flag ? ReactionTypes.BURST : ReactionTypes.NORMAL;
    const tmp12Result10 = ReactionUtils;
    if (tmp12Result10.isMeReaction(reaction.me, reaction.me_burst, tmp23)) {
      const tmp12Result11 = HapticUtils;
      const result2 = tmp12Result11.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
      const obj4 = { channelId: channel.id, messageId, emoji: reaction.emoji, location: MESSAGE, options: obj5 };
      obj5 = { burst: flag };
      const tmp12Result12 = ReactionActionCreators;
      tmp12Result12.removeReaction(obj4);
    } else {
      if (!result) {
        if (channel.isPrivate()) {
          if (!result1) {
            const obj6 = { burst: flag };
            const tmp12Result13 = ReactionActionCreators;
            tmp12Result13.addReaction(channel.id, messageId, reaction.emoji, MESSAGE, obj6);
            const tmp29 = flag;
            if (!tmp29) {
              const tmp12Result14 = HapticUtils;
              const result3 = tmp12Result14.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
            }
          }
        }
      }
      if (result) {
        const guildId1 = channel.getGuildId();
        if (null != guildId1) {
          const tmp12Result15 = MemberVerificationModalActionCreators;
          return tmp12Result15.openMemberVerificationModal(guildId1);
        }
      }
    }
  } else {
    const obj7 = { burst: flag };
    const tmp12Result16 = reactions_ReactionUtils;
    const result4 = tmp12Result16.handleAddNewReactions(channel, messageId, MESSAGE, obj7);
  }
};
export const handleToggleFollowForumPost = function handleToggleFollowForumPost(channel, stateFromStores1) {
  obj = HapticUtils;
  const result = obj.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
  const obj2 = ThreadActionCreatorsDefault;
  const tmp2 = stateFromStores1;
  if (tmp2) {
    obj2.leaveThread(channel, "iOS Forum Toolbar");
  } else {
    obj2.joinThread(channel, "iOS Forum Toolbar");
  }
};
export const handleCopyLinkForumPost = function handleCopyLinkForumPost(guildId, id, location) {
  const channel = ChannelStore.getChannel(id);
  let parent_id;
  const getChannel = ChannelStore.getChannel;
  if (channel != null) {
    parent_id = channel.parent_id;
  }
  const channel1 = getChannel(parent_id);
  let flag;
  if (channel1 != null) {
    flag = channel1.isMediaChannel();
  }
  if (flag == null) {
    flag = false;
  }
  obj = { postId: id, location };
  const obj2 = tracking_Tracking;
  const result = obj2.trackForumPostLinkCopied(obj);
  if (flag) {
    const obj3 = { media_post_id: id };
    const tmp4Result = AppAnalyticsUtils;
    tmp4Result.trackWithMetadata(constants3.MEDIA_POST_SHARE_PROMPT_CLICKED, obj3);
  }
  const tmp4Result7 = HapticUtils;
  const result1 = tmp4Result7.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
  if (null == channel) {
    const copy2 = ClipboardUtils.copy;
    ClipboardUtils;
    let result2;
    const getChannelPermalink = ChannelUtils.getChannelPermalink;
    ChannelUtils;
    if (true === flag) {
      const tmp9Result = SnowflakeUtilsDefault;
      result2 = tmp9Result.castChannelIdAsMessageId(id);
    }
    copy2(getChannelPermalink(guildId, id, result2));
  } else {
    const copy = ClipboardUtils.copy;
    ClipboardUtils;
    const tmp4Result11 = ChannelUtils;
    copy(tmp4Result11.getChannelLinkToCopy(channel, channel1));
  }
  const tmp4Result12 = ToastUtils;
  tmp4Result12.presentLinkCopied();
};
export { findMessageIndex_export as findMessageIndex };
export { getVisibleMessages };
export const shouldJumpToOriginalPost = function shouldJumpToOriginalPost(first1, id, arg2, arg3) {
  let isForumPostResult = first1.isForumPost();
  if (isForumPostResult) {
    obj = SnowflakeUtilsDefault;
    isForumPostResult = obj.castChannelIdAsMessageId(id) === arg2.jumpTargetId;
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
        obj = { channelId: hasJumpedToOriginalPost.channelId };
        tracker.start(obj);
      }
    }
  }
  const tracker2 = hasJumpedToOriginalPost.tracker;
  tracker2.cancel();
};
export const recordTimings = function recordTimings(channelId, hasFetched) {
  const recordMessageRender = TTITrackerDefault.recordMessageRender;
  TTITrackerDefault;
  const mapped = hasFetched.map(f101881);
  hasFetched = hasFetched.hasFetched;
  if (!hasFetched) {
    const tmp3 = hasFetched.ready && !hasFetched.cached;
    hasFetched = tmp3;
  }
  recordMessageRender(channelId, mapped, hasFetched, hasFetched.hasMoreAfter);
};
export const findMessageIndexInRows = function findMessageIndexInRows(startMessageId, previousRows) {
  if (null != startMessageId) {
    obj = computeScrollData;
    return obj.findMessageRowIndex(previousRows, startMessageId);
  }
};
export { getMessage };
export const isLoadingAtTop = function isLoadingAtTop(arg0, arg1) {
  const tmp = arg1;
  if (tmp) {
    const iter = arg0[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      if (nextResult.changeType === constants2.INSERT) {
        let tmp9 = nextResult.index <= 1;
        iter.return();
        return tmp9;
      }
    }
    return false;
  } else {
    return false;
  }
};
export const handleTapTableView = function handleTapTableView(current, arg1) {
  obj = PlatformUtils;
  const isIOSResult = obj.isIOS() && arg1 !== KeyboardTypes.KeyboardTypes.SYSTEM;
  if (isIOSResult) {
    current = current.current;
    if (current != null) {
      current.closeCustomKeyboard();
    }
  }
};
export const handleMediaPlayFinishedAnalytics = function handleMediaPlayFinishedAnalytics(mediaSource) {
  let errorCode;
  let errorMessage;
  let fileDurationSec;
  let fileSize;
  let mimeType;
  obj = MediaPlaybackFacts;
  const reportedMediaFacts = obj.resolveReportedMediaFacts(mediaSource.mediaSource, mediaSource.fileDurationSec);
  ({ fileSize, fileDurationSec } = reportedMediaFacts);
  const tmp2 = AnalyticsUtilsDefault;
  const track = tmp2.track;
  const MEDIA_PLAY_FINISHED = constants3.MEDIA_PLAY_FINISHED;
  const obj2 = { play_time_sec: mediaSource.playWallTimeMs / 1000, play_wall_time_ms: mediaSource.playWallTimeMs, first_play_waiting_ms: Math.min(mediaSource.firstPlayWaitingMs, 600000), stall_count: mediaSource.stallCount, stall_ms: mediaSource.stallMs, seek_count: mediaSource.seekCount, seek_waiting_ms: null, media_source: mediaSource.mediaSource, mime_type: mimeType, file_size: fileSize, file_duration_sec: fileDurationSec, error_code: errorCode, error_message: errorMessage, connection_type: NetworkStore.getType(), effective_connection_speed: NetworkStore.getEffectiveConnectionSpeed(), service_provider: NetworkStore.getServiceProvider() };
  mimeType = null;
  if (null != mediaSource.mimeType) {
    mimeType = null;
    if ("" !== mediaSource.mimeType) {
      mimeType = mediaSource.mimeType;
    }
  }
  errorCode = mediaSource.errorCode;
  if (errorCode == null) {
    errorCode = null;
  }
  errorMessage = null;
  if (null != mediaSource.errorMessage) {
    errorMessage = null;
    if ("" !== mediaSource.errorMessage) {
      errorMessage = mediaSource.errorMessage;
    }
  }
  track(MEDIA_PLAY_FINISHED, obj2);
};
export const scrollToBottom = function scrollToBottom(current, arg1, fn) {
  let flag = arg3;
  if (arg3 === undefined) {
    flag = true;
  }
  obj = { eventTimestamp: Date.now(), isAtBottom: true };
  fn(obj);
  const scrollToBottom = NativeChatUtilsDefault.scrollToBottom;
  current = current.current;
  NativeChatUtilsDefault;
  if (flag) {
    flag = !arg1;
  }
  scrollToBottom(current, flag);
};
export const scrollToTop = function scrollToTop(current, arg1) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  const scrollToTop = NativeChatUtilsDefault.scrollToTop;
  current = current.current;
  NativeChatUtilsDefault;
  if (flag) {
    flag = !arg1;
  }
  scrollToTop(current, flag);
};
export const scrollToRelativeOffset = function scrollToRelativeOffset(current, arg1, arg2) {
  let flag = arg3;
  if (arg3 === undefined) {
    flag = true;
  }
  const scrollToRelativeOffset = NativeChatUtilsDefault.scrollToRelativeOffset;
  current = current.current;
  NativeChatUtilsDefault;
  if (flag) {
    flag = !arg1;
  }
  const result = scrollToRelativeOffset(current, arg2, flag);
};
export const scrollToTopMessage = function scrollToTopMessage(current, getPreviousRows) {
  const previousRows = getPreviousRows.getPreviousRows();
  if (previousRows.length > 0) {
    obj = NativeChatUtilsDefault;
    obj.scrollTo(current.current, previousRows.length - 1);
  }
};
export const canAddNewReactions = function canAddNewReactions(isPrivate, arg1) {
  const canResult = arg1 && PermissionStore.can(constants6.ADD_REACTIONS, isPrivate) || isPrivate.isPrivate();
  return canResult;
};
export const loadMoreBefore = function loadMoreBefore(channelId, hasMoreBefore, fn) {
  let id;
  fn(true);
  const tmp2 = hasMoreBefore.hasMoreBefore && !hasMoreBefore.loadingMore;
  if (tmp2) {
    obj = { channelId, before: id, limit };
    const fetchMessages = MessageActionCreatorsDefault.fetchMessages;
    MessageActionCreatorsDefault;
    const firstResult = hasMoreBefore.first();
    id = undefined;
    if (firstResult != null) {
      id = firstResult.id;
    }
    const messages = fetchMessages(obj);
  }
};
export const loadMoreAfter = function loadMoreAfter(channelId, hasMoreAfter, fn) {
  let id;
  fn(true);
  const tmp2 = hasMoreAfter.hasMoreAfter && !hasMoreAfter.loadingMore;
  if (tmp2) {
    obj = { channelId, after: id, limit };
    const fetchMessages = MessageActionCreatorsDefault.fetchMessages;
    MessageActionCreatorsDefault;
    const lastResult = hasMoreAfter.last();
    id = undefined;
    if (lastResult != null) {
      id = lastResult.id;
    }
    const messages = fetchMessages(obj);
  }
};
export const clearRows = function clearRows(current, clear, arg2, arg3, fn) {
  fn({ animated: false, hasHandledScroll: false, isNearBottom: false, isAtBottom: false, isNearTop: false, decelerating: false, dragging: false, hasMoreMessagesAfterForLastUpdate: false, pendingUpdatesQueue: [], _loaded: false, animatingStickerMessageId: null });
  clear.clear();
  closure_5(arg2, arg3, false);
  obj = NativeChatUtilsDefault;
  obj.clearRows(current.current);
};
export const handleFirstLayout = function handleFirstLayout(fn, firstVisibleMessageRowIndex, lastVisibleMessageRowIndex, firstVisibleMessagePercentVisible, lastVisibleMessagePercentVisible) {
  obj = { firstVisibleMessageRowIndex, lastVisibleMessageRowIndex, firstVisibleMessagePercentVisible, lastVisibleMessagePercentVisible, source: QuestTypes.QuestsVisibleMessagesChangedSource.FIRST_LAYOUT };
  fn(obj);
};
export const handleMessageVisibilityChanged = function handleMessageVisibilityChanged(fn, firstVisibleMessageRowIndex, lastVisibleMessageRowIndex, firstVisibleMessagePercentVisible, lastVisibleMessagePercentVisible) {
  obj = { firstVisibleMessageRowIndex, lastVisibleMessageRowIndex, firstVisibleMessagePercentVisible, lastVisibleMessagePercentVisible, source: QuestTypes.QuestsVisibleMessagesChangedSource.VISIBILITY_CHANGED };
  fn(obj);
};
export const handleLongPressSticker = function handleLongPressSticker(arg0, arg1, fn) {
  const items = [arg0];
  set = new Set(items);
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
  return obj(...arguments);
};
export const jumpToPresent = function jumpToPresent(jumpReturnTargetId, id, fn) {
  if (null == jumpReturnTargetId.jumpReturnTargetId) {
    if (!jumpReturnTargetId.jumpReturnTargetId.loadingMore) {
      if (jumpReturnTargetId.jumpReturnTargetId.hasMoreAfter) {
        const obj2 = { channelId: id.id, limit, jump: { present: true } };
        const obj3 = MessageActionCreatorsDefault;
        const messages = obj3.fetchMessages(obj2);
      } else {
        fn();
      }
    }
  } else {
    const obj4 = { channelId: id.id, messageId: jumpReturnTargetId.jumpReturnTargetId, flash: true };
    obj = MessageActionCreatorsDefault;
    obj.jumpToMessage(obj4);
  }
};
export const scrollToNewMessages = function scrollToNewMessages(channel) {
  channel = channel.channel;
  let id = ReadStateStore.ackMessageId(channel.id);
  obj = { channelId: channel.id, messageId: id, offset: 1, context: "Mark As Read" };
  const jumpToMessage = MessageActionCreatorsDefault.jumpToMessage;
  MessageActionCreatorsDefault;
  if (id == null) {
    id = channel.id;
  }
  jumpToMessage(obj);
};
export const syncMessageDisplay = function syncMessageDisplay(messages) {
  let channelId;
  let scrollToMessageId;
  let updateRows;
  messages = messages.messages;
  const oldestUnreadMessageId = messages.oldestUnreadMessageId;
  ({ channelId, updateRows, scrollToMessageId } = messages);
  if (messages.isMessagesReady) {
    obj = { scrollToMessageId: null, jumpTargetId: null, jumpType: messages(scrollToMessageId[48]).JumpType.INSTANT, focusTargetId: messages.focusTargetId };
    ({ jumpTargetId: obj.scrollToMessageId, jumpTargetId: obj.jumpTargetId } = messages);
    updateRows(obj);
    const tmp2 = messages;
    const tmp3 = scrollToMessageId;
    if (null != messages.jumpTargetId) {
      ({ jumpTargetId: obj2.scrollToMessageId, jumpTargetId: obj2.jumpTargetId } = messages);
      const obj3 = { scrollToMessageId: null, jumpTargetId: null, jumpType: tmp2(tmp3[48]).JumpType.INSTANT };
      scrollToMessageId(obj3);
    } else if (null != oldestUnreadMessageId) {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        obj = { scrollToMessageId: oldestUnreadMessageId, jumpTargetId: messages.jumpTargetId, jumpType: flow_Client.JumpType.INSTANT };
        return scrollToMessageId(obj);
      }, 50);
    }
  } else {
    updateRows({});
  }
  const recordMessageRender = oldestUnreadMessageId(scrollToMessageId[39]).recordMessageRender;
  oldestUnreadMessageId(scrollToMessageId[39]);
  const mapped = messages.map(f101881);
  let hasFetched = messages.hasFetched;
  if (!hasFetched) {
    hasFetched = messages.ready && !messages.cached;
  }
  recordMessageRender(channelId, mapped, hasFetched, messages.hasMoreAfter);
};
export function getChatRef(arg0) {
  return arg0;
}
export const maybeRescrollToMessageId = function maybeRescrollToMessageId(arg0, jumpType) {
  let closure_0;
  let updateRowsEnabled;
  _require = arg0;
  ({ chatRef: importDefault, findMessageIndex: dependencyMap, updateRows: _slicedToArray, updateRowsEnabled } = jumpType);
  let closure_4 = undefined !== updateRowsEnabled && updateRowsEnabled;
  let INSTANT = jumpType.jumpType;
  if (undefined === INSTANT) {
    INSTANT = require("flow/Client").JumpType.INSTANT;
  }
  if (null != arg0) {
    const _setTimeout = setTimeout;
    const timerId = setTimeout(() => {
      const tmp2 = findMessageIndex(scrollToMessageId);
      if (null != tmp2) {
        if (null != chatRef.current) {
          let flag = false;
          if (c4) {
            obj = { scrollToMessageId, jumpTargetId: scrollToMessageId, jumpType: INSTANT, focusTargetId: scrollToMessageId, overrideScrollJumpType: scrollToMessageId(chatRef[48]).JumpType.INSTANT, isRescrolling: true };
            updateRows(obj);
            flag = true;
          }
          if (!flag) {
            const obj2 = { animated: INSTANT === scrollToMessageId(chatRef[48]).JumpType.ANIMATED };
            const scrollTo = jumpTargetId(chatRef[45]).scrollTo;
            const current = tmp15.current;
            jumpTargetId(chatRef[45]);
            scrollTo(current, tmp2, obj2);
          }
        }
      }
    }, 50);
  }
};
export const scrollToMessageIdWithRescroll = function scrollToMessageIdWithRescroll(scrollToMessageId) {
  let chatRef;
  let findMessageIndex;
  let updateRows;
  let useReducedMotion;
  scrollToMessageId = scrollToMessageId.scrollToMessageId;
  let jumpTargetId = scrollToMessageId.jumpTargetId;
  let tmp = null;
  if (undefined !== jumpTargetId) {
    tmp = jumpTargetId;
  }
  jumpTargetId = tmp;
  let ANIMATED = scrollToMessageId.jumpType;
  if (undefined === ANIMATED) {
    let tmp2 = scrollToMessageId;
    ANIMATED = scrollToMessageId(chatRef[48]).JumpType.ANIMATED;
  }
  let TOP = scrollToMessageId.scrollPosition;
  if (undefined === TOP) {
    TOP = scrollToMessageId(chatRef[45]).ChatScrollPosition.TOP;
  }
  const minimizeScrolling = scrollToMessageId.minimizeScrolling;
  const isRescrolling = scrollToMessageId.isRescrolling;
  const tmp6 = undefined !== minimizeScrolling && minimizeScrolling;
  const tmp7 = undefined !== isRescrolling && isRescrolling;
  ({ useReducedMotion, chatRef } = scrollToMessageId);
  ({ findMessageIndex, updateRows } = scrollToMessageId);
  if (!useReducedMotion) {
    useReducedMotion = ANIMATED === scrollToMessageId(chatRef[48]).JumpType.INSTANT;
  }
  const tmp10 = !useReducedMotion;
  const animated = tmp10;
  obj = scrollToMessageId(chatRef[41]);
  if (obj.isIOS()) {
    if (!tmp7) {
      const JumpType = tmp11(tmp12[48]).JumpType;
      let INSTANT = useReducedMotion ? JumpType.INSTANT : JumpType.ANIMATED;
      let flag = true;
      let c4 = true;
      if (undefined === INSTANT) {
        INSTANT = tmp11(tmp12[48]).JumpType.INSTANT;
      }
      if (null != scrollToMessageId) {
        const _setTimeout2 = setTimeout;
        const timerId = setTimeout(() => {
          const tmp2 = findMessageIndex(scrollToMessageId);
          if (null != tmp2) {
            if (null != chatRef.current) {
              let flag = false;
              if (c4) {
                obj = { scrollToMessageId, jumpTargetId: scrollToMessageId, jumpType: INSTANT, focusTargetId: scrollToMessageId, overrideScrollJumpType: scrollToMessageId(chatRef[48]).JumpType.INSTANT, isRescrolling: true };
                updateRows(obj);
                flag = true;
              }
              if (!flag) {
                const obj2 = { animated: INSTANT === scrollToMessageId(chatRef[48]).JumpType.ANIMATED };
                const scrollTo = jumpTargetId(chatRef[45]).scrollTo;
                const current = tmp15.current;
                jumpTargetId(chatRef[45]);
                scrollTo(current, tmp2, obj2);
              }
            }
          }
        }, 50);
      }
    }
  }
  const findMessageIndexResult = findMessageIndex(scrollToMessageId);
  _asyncToGenerator = findMessageIndexResult;
  if (null != findMessageIndexResult) {
    if (tmp6) {
      const _setTimeout = setTimeout;
      const timerId1 = setTimeout(() => {
        obj = NativeChatUtilsDefault;
        const obj2 = { animated, highlight: jumpTargetId === scrollToMessageId };
        obj.scrollIntoView(chatRef.current, _asyncToGenerator, obj2);
      }, 5);
    } else {
      let obj2 = jumpTargetId(tmp12[45]);
      const obj3 = { animated: tmp10, highlight: tmp === scrollToMessageId, position: TOP };
      obj2.scrollTo(chatRef.current, findMessageIndexResult, obj3);
    }
  }
};
export const handleVisibleMessagesChange = function handleVisibleMessagesChange(arg0) {
  let channel;
  let firstVisibleMessagePercentVisible;
  let firstVisibleMessageRowIndex;
  let guildId;
  let lastVisibleMessagePercentVisible;
  let lastVisibleMessageRowIndex;
  let shouldTrackAnnouncementMessageViews;
  let shouldTrackOfficialMessageViews;
  let shouldTrackRichPresenceInviteEmbedViews;
  let shouldTrackVoiceInviteEmbedViews;
  ({ firstVisibleMessageRowIndex, firstVisibleMessagePercentVisible, lastVisibleMessageRowIndex, lastVisibleMessagePercentVisible, shouldTrackAnnouncementMessageViews, shouldTrackOfficialMessageViews, shouldTrackRichPresenceInviteEmbedViews, shouldTrackVoiceInviteEmbedViews, guildId, channel } = arg0);
  if (null != firstVisibleMessageRowIndex) {
    if (null != lastVisibleMessageRowIndex) {
      if (null != firstVisibleMessagePercentVisible) {
        if (null != lastVisibleMessagePercentVisible) {
          obj = { firstVisibleMessageRowIndex, lastVisibleMessageRowIndex, firstVisibleMessagePercentVisible, lastVisibleMessagePercentVisible, chatManager: tmp2, channelId: tmp3 };
          const arr = getVisibleMessages(obj);
          if (arr.length > 0) {
            const obj3 = { visibleMessages: arr, source: tmp };
            const obj2 = QuestActionCreators;
            const result = obj2.questsVisibleMobileMessagesChanged(obj3);
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
    let tmp;
    [, tmp] = item;
    return false !== tmp.discoverable;
  });
  const mapped = found.map((item) => {
    let tmp;
    let tmp2;
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
  obj = parseVoiceStateChannelIdSummary(prop);
  const obj2 = parseVoiceStateChannelIdSummary(prop1);
  set = new Set();
  const items = [...obj.keys(), ...obj2.keys()];
  const set1 = new Set(items);
  for (const item10032 of set1) {
    let value = obj.get(item10032);
    if (value !== obj2.get(item10032)) {
      let addResult = set.add(item10032);
    }
    continue;
  }
  return set;
};
export const getMessageAuthorMemberUserIds = function getMessageAuthorMemberUserIds(author) {
  obj = ApplicationCommandUtils;
  const initialInteractionMetadata = obj.getInitialInteractionMetadata(author);
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