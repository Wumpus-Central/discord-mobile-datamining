// discord_app/modules/messages/native/MessagesUtils.tsx
import serializeDefault from "../../tti_analytics/TTITracker.tsx";
import DISCORD_EPOCHDefault from "../../../utils/SnowflakeUtils.tsx";
import applyDefault from "../../../../_runtime/00012_apply.js";
import obj132 from "../../../utils/PlatformUtils.tsx";
import expandEventPropertiesDefault from "../../../utils/AnalyticsUtils.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import KeyboardTypes from "../../keyboard/native/KeyboardTypes.tsx";
import isPremiumAtLeast from "../../../utils/PremiumTypeUtils.tsx";
import PermissionOverwriteType from "../../../flow/Server.tsx";
import isCommunicationDisabled from "../../guild_communication_disabled/CommunicationDisabledUtils.tsx";
import MAX_REACTIONS from "../../reactions/ReactionUtils.tsx";
import presentAddedFriendToast from "../../toast/native/ToastUtils.tsx";
import dispatcherDefault from "../../toast/native/ToastActionCreators.tsx";
import HapticFeedbackTypes from "../../haptics/HapticUtils.native.tsx";
import IMPACT_LIGHTDefault from "../../haptics/HapticFeedbackTypes.tsx";
import flattenComponents from "../../interaction_components/InteractionComponentUtils.tsx";
import urlMatchesFileExtension from "../MediaFormatTesters.tsx";
import allowChannelAccess from "../../../utils/ChannelUtils.tsx";
import ContentHarmTypeChannel from "../../explicit_media_redaction/ExplicitMediaRedactionModels.tsx";
import collectGuildAnalyticsMetadata from "../../app_analytics/AppAnalyticsUtils.tsx";
import QuestsVisibleMessagesChangedSource from "../../quests/QuestTypes.tsx";
import shouldShowMembershipVerificationGate from "../../guild_member_verification/hooks/useShowMemberVerificationGate.tsx";
import _copy from "../../../utils/ClipboardUtils.native.tsx";
import trackInviteDefault from "../../../actions/MessageActionCreators.tsx";
import ReactionTypes2 from "../MessageReactionsTypes.tsx";
import checkReactionResponse from "../../reactions/ReactionActionCreators.tsx";
import patchThreadDefault from "../../threads/ThreadActionCreators.tsx";
import trackForumChannelSeenBatch from "../../forums/tracking/Tracking.tsx";
import openMemberVerificationModal from "../../guild_member_verification/MemberVerificationModalActionCreators.tsx";
import registerAssetDefault from "../../../../_runtime/10455_registerAsset.js";
import handleOutOfSuperReactions from "../../reactions/native/ReactionUtils.tsx";
import computeScrollData from "../../chat/native/computeScrollData.tsx";
import ChatScrollPositionDefault from "../../chat/native/NativeChatUtils.tsx";
import _manuallyStartConsoleQuest from "../../quests/QuestActionCreators.tsx";
import getVoiceInviteEmbedRenderInfo from "MessageImpressionAnalyticsHelpers.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import { updateShouldShowJumpToPresentButton as closure_5 } from "../../chat_input/native/useChatBottomManagerUIStore.tsx";
import processMessage from "../../replies/ReferencedMessageStore.tsx";
import ensureGuildLoaded from "../../../stores/ChannelStore.tsx";
import trackCommunicationDisabled from "../../../stores/GuildMemberStore.tsx";
import recomputeGuild from "../../../stores/GuildVerificationStore.tsx";
import reinjectEphemerals from "../../../stores/MessageStore.tsx";
import handleConnectionInfoChange from "../../../stores/NetworkStore.tsx";
import getUncachedChannelPermissions from "../../../stores/PermissionStore.tsx";
import generateOldThreadCutoff from "../../../stores/ReadStateStore.tsx";
import mergeGuildAvatar from "../../../stores/UserStore.tsx";
import Changeset from "renderer/RowGeneratorConstants.tsx";
import ME from "../../../Constants.tsx";

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
                        message = message.getMessage(tmp, tmp2.message.id);
                        if (null != message) {
                          let obj = { message: null, percentVisible: null, state: null };
                          obj[0] = message;
                          obj[1] = num;
                          obj[2] = message.state;
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
function getMessage(toArray) {
  closure_0 = arg1;
  return applyDefault.find(toArray.toArray(), (id) => id.id === closure_0 || id.nonce === closure_0);
}
function _handleTapNavBar() {
  const self = this;
  const tmp = callback2((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c3 = 0;
    return (function*(arg0) {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c3 = 2;
          if (0 === table) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              c1 = tmp2;
              useReducedMotion = undefined;
              c1 = undefined;
              ({ channel, useReducedMotion } = useReducedMotion);
              ({ scrollToTop: c1, isNearTop, messages, findMessageIndex, chatRef } = useReducedMotion);
              if (channel.isForumPost()) {
                if (!isNearTop) {
                  obj1 = closure_1_1(table[36]);
                  if (null == closure_1_23(messages, obj1.castChannelIdAsMessageId(channel.id))) {
                    let tmp10Result = closure_1_1(tmp11[45]);
                    obj1 = { channelId: null, jump: null, limit: null };
                    obj1[0] = channel.id;
                    const obj2 = { messageId: null, flash: false };
                    obj2[0] = channel.id;
                    obj1[1] = obj2;
                    obj1[2] = closure_1_21;
                    table = 1;
                    c3 = 1;
                    const obj3 = { value: null, done: false };
                    obj3[0] = tmp10Result.fetchMessages(obj1);
                    return obj3;
                  } else {
                    tmp10Result = closure_1_1(tmp11[36]);
                    const findMessageIndexResult = findMessageIndex(tmp10Result.castChannelIdAsMessageId(channel.id));
                    if (null == findMessageIndexResult) {
                      c3 = 3;
                      return { value: "HermesInternal", done: "HermesInternal" };
                    } else {
                      const obj4 = { animated: null };
                      obj4[0] = !useReducedMotion;
                      closure_1_1(tmp11[44]).scrollTo(chatRef.current, findMessageIndexResult, obj4);
                      const _setTimeout2 = setTimeout;
                      const timerId = setTimeout(() => _undefined(!useReducedMotion), 10 * findMessageIndexResult);
                      const tmp10Result1 = closure_1_1(tmp11[44]);
                    }
                  }
                }
              }
              c3 = 3;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            const _setTimeout = setTimeout;
            const timerId1 = setTimeout(() => _undefined(!useReducedMotion), 50);
          }
          c3 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } catch (tmp17) {
          c3 = tmp;
          throw tmp17;
        }
      }
    })();
  });
  closure_24 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function parseVoiceStateChannelIdSummary(prop) {
  const map = new Map();
  if (null != prop) {
    if ("" !== prop) {
      const parts = prop.split("|");
      const iter = parts[Symbol.iterator]();
      while (iter !== undefined) {
        let tmp6 = callback(str4.split(":"), 2);
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
({ RowType: closure_15, Changeset: closure_16 } = Changeset);
({ AnalyticEvents: closure_17, MessageEmbedTypes: closure_18, MessageTypes: closure_19, Permissions: closure_20, MAX_MESSAGES_PER_CHANNEL: closure_21 } = ME);
let result = require("obj132").fileFinishedImporting("modules/messages/native/MessagesUtils.tsx");

export const getLongPressSelectedMedia = function getLongPressSelectedMedia(message, mediaIndex, mediaType, tmpResult, componentMediaIndex) {
  let obj = message;
  if (message.type === constants5.THREAD_STARTER_MESSAGE) {
    obj = message;
    if (null != message.messageReference) {
      message = messageByReference.getMessageByReference(message.messageReference).message;
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
      obj = { sourceType: "attachment", source: null, mediaType: null, mediaUrl: null, contentType: null };
      obj[1] = tmp13;
      let str3 = "video";
      if (!obj9.isVideoFile(tmp13.filename)) {
        let tmp18Result = urlMatchesFileExtension;
        let str4 = "audio";
        if (!tmp18Result.isAudioFile(tmp13.filename)) {
          tmp18Result = urlMatchesFileExtension;
          let str5 = "file";
          if (tmp18Result.isImageFile(tmp13.filename)) {
            str5 = "image";
          }
          str4 = str5;
        }
        str3 = str4;
      }
      obj[2] = str3;
      ({ url: obj8[3], content_type } = tmp13);
      obj[4] = content_type;
      tmp17 = obj;
      obj9 = urlMatchesFileExtension;
    }
    return tmp17;
  } else if ("embed" === mediaType) {
    if (null == obj.embeds[mediaIndex]) {
      return null;
    } else {
      if (tmp8.type === constants4.IMAGE) {
        if (null != tmp8.url) {
          obj = { sourceType: "embed", source: null, mediaType: "image", mediaUrl: null, contentType: "Boolean" };
          obj[1] = tmp8;
          obj[3] = tmp8.url;
          return obj;
        }
      }
      if (tmp8.type === constants4.GIFV) {
        const video = tmp8.video;
        let url;
        if (video != null) {
          url = video.url;
        }
        if (null != url) {
          if (null != tmp8.video.proxyURL) {
            if ("" !== tmp8.video.proxyURL) {
              url = tmp8.video.proxyURL;
            }
            obj1 = { sourceType: "embed", source: null, mediaType: "video", mediaUrl: null, contentType: null };
            obj1[1] = tmp8;
            obj1[3] = url;
            obj1[4] = tmp8.video.contentType;
            return obj1;
          }
          url = tmp8.video.url;
        }
      }
      if (tmp8.type === constants4.RICH) {
        const image = tmp8.image;
        let url1;
        if (image != null) {
          url1 = image.url;
        }
        if (null != url1) {
          const obj2 = { sourceType: "embed", source: null, mediaType: "image", mediaUrl: null, contentType: null };
          obj2[1] = tmp8;
          obj2[3] = tmp8.image.url;
          obj2[4] = tmp8.image.contentType;
          return obj2;
        } else {
          const video2 = tmp8.video;
          let url2;
          if (video2 != null) {
            url2 = video2.url;
          }
          if (null != url2) {
            const obj3 = { sourceType: "embed", source: null, mediaType: "video", mediaUrl: null, contentType: null };
            obj3[1] = tmp8;
            obj3[3] = tmp8.video.url;
            obj3[4] = tmp8.video.contentType;
            return obj3;
          }
        }
      }
      return null;
    }
  } else if ("component" === mediaType) {
    if (null == tmpResult) {
      return null;
    } else {
      const value = flattenComponents.flattenComponents(obj.components).get(tmpResult);
      if (null == value) {
        return null;
      } else if (value.type === PermissionOverwriteType.ComponentType.MEDIA_GALLERY) {
        if (null == componentMediaIndex) {
          return null;
        } else if (null == value.items[componentMediaIndex]) {
          return null;
        } else {
          const media = tmp7.media;
          const obj4 = { sourceType: "component", source: null, mediaType: null, mediaUrl: null };
          obj4[1] = value;
          let str = "image";
          if (tmp20Result.isVideoContentType(media.contentType)) {
            str = "video";
          }
          obj4[2] = str;
          obj4[3] = media.url;
          return obj4;
        }
      } else {
        return null;
      }
      const flattenComponentsResult = flattenComponents.flattenComponents(obj.components);
    }
  } else {
    return null;
  }
};
export const toObscuredMedia = function toObscuredMedia(sourceType) {
  if ("attachment" === sourceType.sourceType) {
    let obj = { type: null, media: null };
    obj[0] = ContentHarmTypeChannel.ObscuredMediaTypes.Attachment;
    obj[1] = sourceType.source;
    let tmp = obj;
  } else {
    tmp = null;
    if ("embed" === sourceType.sourceType) {
      obj = { type: null, media: null };
      obj[0] = ContentHarmTypeChannel.ObscuredMediaTypes.Embed;
      obj[1] = sourceType.source;
      tmp = obj;
    }
  }
  return tmp;
};
export const handleAddOrRemoveReaction = function handleAddOrRemoveReaction(messageId, channel, reaction, isBurst, MESSAGE) {
  let flag = isBurst;
  if (isBurst === undefined) {
    flag = false;
  }
  if (MESSAGE === undefined) {
    MESSAGE = checkReactionResponse.ReactionLocations.MESSAGE;
  }
  const guildId = channel.getGuildId();
  currentUser = currentUser.getCurrentUser();
  if (currentUser != null) {
    const id = currentUser.id;
  }
  let canChatInGuildResult = null != guildId;
  if (canChatInGuildResult) {
    canChatInGuildResult = closure_9.canChatInGuild(guildId);
  }
  let result = null != guildId;
  if (result) {
    let obj = shouldShowMembershipVerificationGate;
    result = obj.shouldShowMembershipVerificationGate(guildId);
  }
  let member = null;
  if (null != guildId) {
    member = null;
    if (null != id) {
      member = member.getMember(guildId, id);
    }
  }
  let tmp36Result = dependencyMap;
  obj1 = isCommunicationDisabled;
  const result1 = obj1.isMemberCommunicationDisabled(member);
  if (channel.isArchivedLockedThread()) {
    const obj15 = dispatcherDefault;
    const intl = getSystemLocale.intl;
    const string = intl.string;
    let t = getSystemLocale.t;
    if (isForumPostResult) {
      let stringResult = string(t.EJQrFq);
    } else {
      stringResult = string(t.X2L3Oa);
    }
    obj = { key: "ARCHIVED_POST_REACTIONS_DISABLED_TOAST", content: null, icon: null };
    obj[1] = stringResult;
    tmp36Result = registerAssetDefault;
    obj[2] = tmp36Result;
    t = obj15.open(obj);
    isForumPostResult = channel.isForumPost();
  } else if (null != reaction) {
    if (flag) {
      if (true === !reaction.me_burst) {
        let tmp12Result = isPremiumAtLeast;
        if (!tmp12Result.isPremium(currentUser)) {
          tmp12Result = handleOutOfSuperReactions;
          return tmp12Result.handleOutOfSuperReactions();
        }
      }
    }
    const ReactionTypes = ReactionTypes2.ReactionTypes;
    if (tmp12Result1.isMeReaction(reaction.me, reaction.me_burst, tmp23)) {
      const result2 = HapticFeedbackTypes.triggerHapticFeedback(IMPACT_LIGHTDefault.IMPACT_LIGHT);
      const tmp12Result2 = HapticFeedbackTypes;
      obj = { channelId: null, messageId: null, emoji: null, location: null, options: null };
      obj[0] = channel.id;
      obj[1] = messageId;
      obj[2] = reaction.emoji;
      obj[3] = MESSAGE;
      obj1 = { burst: null };
      obj1[0] = flag;
      obj[4] = obj1;
      checkReactionResponse.removeReaction(obj);
      const tmp12Result3 = checkReactionResponse;
    } else {
      if (!result) {
        if (channel.isPrivate()) {
          if (!result1) {
            const tmp12Result4 = checkReactionResponse;
            const obj2 = { burst: null };
            obj2[0] = flag;
            tmp12Result4.addReaction(channel.id, messageId, reaction.emoji, MESSAGE, obj2);
            if (!flag) {
              const result3 = HapticFeedbackTypes.triggerHapticFeedback(IMPACT_LIGHTDefault.IMPACT_LIGHT);
              const tmp12Result5 = HapticFeedbackTypes;
            }
          }
        }
      }
      if (result) {
        const guildId1 = channel.getGuildId();
        if (null != guildId1) {
          return openMemberVerificationModal.openMemberVerificationModal(guildId1);
        }
      }
    }
    tmp12Result1 = MAX_REACTIONS;
    tmp23 = flag ? ReactionTypes.BURST : ReactionTypes.NORMAL;
  } else {
    const tmp12Result7 = handleOutOfSuperReactions;
    const obj3 = { burst: null };
    obj3[0] = flag;
    const result4 = tmp12Result7.handleAddNewReactions(channel, messageId, MESSAGE, obj3);
  }
};
export const handleToggleFollowForumPost = function handleToggleFollowForumPost(channel, closure_1_19) {
  const result = HapticFeedbackTypes.triggerHapticFeedback(IMPACT_LIGHTDefault.IMPACT_LIGHT);
  const obj2 = patchThreadDefault;
  if (closure_1_19) {
    obj2.leaveThread(channel, "iOS Forum Toolbar");
  } else {
    obj2.joinThread(channel, "iOS Forum Toolbar");
  }
};
export const handleCopyLinkForumPost = function handleCopyLinkForumPost(guildId, id, location) {
  const channel = store.getChannel(id);
  let parent_id;
  if (channel != null) {
    parent_id = channel.parent_id;
  }
  const channel1 = store.getChannel(parent_id);
  let flag;
  if (channel1 != null) {
    flag = channel1.isMediaChannel();
  }
  if (flag == null) {
    flag = false;
  }
  let obj = { postId: id, location };
  const result = trackForumChannelSeenBatch.trackForumPostLinkCopied(obj);
  if (flag) {
    let tmp4Result = collectGuildAnalyticsMetadata;
    obj = { media_post_id: null };
    obj[0] = id;
    tmp4Result.trackWithMetadata(constants3.MEDIA_POST_SHARE_PROMPT_CLICKED, obj);
  }
  tmp4Result = HapticFeedbackTypes;
  const result1 = tmp4Result.triggerHapticFeedback(IMPACT_LIGHTDefault.IMPACT_LIGHT);
  if (null == channel) {
    const tmp4Result1 = _copy;
    let result2;
    if (true === flag) {
      result2 = DISCORD_EPOCHDefault.castChannelIdAsMessageId(id);
      const tmp9Result = DISCORD_EPOCHDefault;
    }
    tmp4Result1.copy(allowChannelAccess.getChannelPermalink(guildId, id, result2));
    const tmp4Result2 = allowChannelAccess;
  } else {
    const tmp4Result3 = _copy;
    tmp4Result3.copy(allowChannelAccess.getChannelLinkToCopy(channel, channel1));
    const tmp4Result4 = allowChannelAccess;
  }
  presentAddedFriendToast.presentLinkCopied();
  const tmp4Result5 = presentAddedFriendToast;
};
export const findMessageIndex = function findMessageIndex(previousRows, ChatTTITracker) {
  if (null != ChatTTITracker) {
    return computeScrollData.findMessageRowIndex(previousRows, ChatTTITracker);
  }
};
export { getVisibleMessages };
export const shouldJumpToOriginalPost = function shouldJumpToOriginalPost(isForumPost, id, jumpTargetId) {
  let isForumPostResult = isForumPost.isForumPost();
  if (isForumPostResult) {
    isForumPostResult = DISCORD_EPOCHDefault.castChannelIdAsMessageId(id) === jumpTargetId.jumpTargetId;
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
        const obj = { channelId: null };
        obj[0] = hasJumpedToOriginalPost.channelId;
        tracker.start(obj);
      }
    }
  }
  const tracker2 = hasJumpedToOriginalPost.tracker;
  tracker2.cancel();
};
export const recordTimings = function recordTimings(channelId, closure_0) {
  const mapped = _require.map((item, index) => item.id);
  let hasFetched = _require.hasFetched;
  if (!hasFetched) {
    hasFetched = _require.ready && !_require.cached;
  }
  serializeDefault.recordMessageRender(channelId, mapped, hasFetched, _require.hasMoreAfter);
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
export const handleTapTableView = function handleTapTableView(current) {
  let isIOSResult = obj132.isIOS();
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
export const handleMediaPlayFinishedAnalytics = function handleMediaPlayFinishedAnalytics(playWallTimeMs) {
  const obj = { play_time_sec: playWallTimeMs.playWallTimeMs / 1000, play_wall_time_ms: playWallTimeMs.playWallTimeMs, first_play_waiting_ms: Math.min(playWallTimeMs.firstPlayWaitingMs, 600000), stall_count: playWallTimeMs.stallCount, stall_ms: playWallTimeMs.stallMs, seek_count: playWallTimeMs.seekCount, seek_waiting_ms: null, media_source: playWallTimeMs.mediaSource, mime_type: null, file_size: null, file_duration_sec: null, connection_type: null, effective_connection_speed: null, service_provider: null };
  let mimeType = null;
  if (null != playWallTimeMs.mimeType) {
    mimeType = null;
    if ("" !== playWallTimeMs.mimeType) {
      mimeType = playWallTimeMs.mimeType;
    }
  }
  obj[8] = mimeType;
  obj[10] = playWallTimeMs.fileDurationSec;
  obj[11] = store2.getType();
  obj[12] = store2.getEffectiveConnectionSpeed();
  obj[13] = store2.getServiceProvider();
  obj.track(constants3.MEDIA_PLAY_FINISHED, obj);
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
  ChatScrollPositionDefault.scrollToBottom(current.current, flag);
};
export const scrollToTop = function scrollToTop(current) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  if (flag) {
    flag = !arg1;
  }
  ChatScrollPositionDefault.scrollToTop(current.current, flag);
};
export const scrollToRelativeOffset = function scrollToRelativeOffset(current) {
  let flag = arg3;
  if (arg3 === undefined) {
    flag = true;
  }
  if (flag) {
    flag = !arg1;
  }
  const result = ChatScrollPositionDefault.scrollToRelativeOffset(current.current, arg2, flag);
};
export const scrollToTopMessage = function scrollToTopMessage(current, getPreviousRows) {
  const previousRows = getPreviousRows.getPreviousRows();
  if (previousRows.length > 0) {
    ChatScrollPositionDefault.scrollTo(current.current, previousRows.length - 1);
  }
};
export const canAddNewReactions = function canAddNewReactions(isPrivate) {
  let canResult = arg1;
  if (arg1) {
    canResult = closure_12.can(constants6.ADD_REACTIONS, isPrivate);
  }
  if (!canResult) {
    canResult = isPrivate.isPrivate();
  }
  return canResult;
};
export const loadMoreBefore = function loadMoreBefore(arg0, hasMoreBefore, fn) {
  fn(true);
  if (tmp2) {
    const obj = { channelId: null, before: null, limit: null };
    obj[0] = arg0;
    const firstResult = hasMoreBefore.first();
    let id;
    if (firstResult != null) {
      id = firstResult.id;
    }
    obj[1] = id;
    obj[2] = closure_21;
    const messages = obj.fetchMessages(obj);
  }
  tmp2 = hasMoreBefore.hasMoreBefore && !hasMoreBefore.loadingMore;
};
export const loadMoreAfter = function loadMoreAfter(arg0, hasMoreAfter, fn) {
  fn(true);
  if (tmp2) {
    const obj = { channelId: null, after: null, limit: null };
    obj[0] = arg0;
    const lastResult = hasMoreAfter.last();
    let id;
    if (lastResult != null) {
      id = lastResult.id;
    }
    obj[1] = id;
    obj[2] = closure_21;
    const messages = obj.fetchMessages(obj);
  }
  tmp2 = hasMoreAfter.hasMoreAfter && !hasMoreAfter.loadingMore;
};
export const clearRows = function clearRows(current, clear, arg2, arg3, fn) {
  fn({ animated: false, hasHandledScroll: false, isNearBottom: false, isAtBottom: false, isNearTop: false, decelerating: false, dragging: false, hasMoreMessagesAfterForLastUpdate: false, pendingUpdatesQueue: [], _loaded: false, animatingStickerMessageId: null });
  clear.clear();
  callback3(arg2, arg3, false);
  ChatScrollPositionDefault.clearRows(current.current);
};
export const handleFirstLayout = function handleFirstLayout(fn, firstVisibleMessageRowIndex, lastVisibleMessageRowIndex, firstVisibleMessagePercentVisible, lastVisibleMessagePercentVisible) {
  fn({ firstVisibleMessageRowIndex, lastVisibleMessageRowIndex, firstVisibleMessagePercentVisible, lastVisibleMessagePercentVisible, source: QuestsVisibleMessagesChangedSource.QuestsVisibleMessagesChangedSource.FIRST_LAYOUT });
};
export const handleMessageVisibilityChanged = function handleMessageVisibilityChanged(fn, firstVisibleMessageRowIndex, lastVisibleMessageRowIndex, firstVisibleMessagePercentVisible, lastVisibleMessagePercentVisible) {
  fn({ firstVisibleMessageRowIndex, lastVisibleMessageRowIndex, firstVisibleMessagePercentVisible, lastVisibleMessagePercentVisible, source: QuestsVisibleMessagesChangedSource.QuestsVisibleMessagesChangedSource.VISIBILITY_CHANGED });
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
  const apply = _handleTapNavBar.apply;
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
        let obj = { channelId: null, limit: null, jump: null };
        obj[0] = id.id;
        obj[1] = closure_21;
        obj[2] = { present: true };
        const messages = trackInviteDefault.fetchMessages(obj);
      } else {
        fn();
      }
    }
  } else {
    obj = { channelId: null, messageId: null, flash: true };
    obj[0] = id.id;
    obj[1] = jumpReturnTargetId;
    obj.jumpToMessage(obj);
  }
};
export const scrollToNewMessages = function scrollToNewMessages(channel) {
  channel = channel.channel;
  let id = closure_13.ackMessageId(channel.id);
  const obj = { channelId: channel.id, messageId: null, offset: 1, context: "Mark As Read" };
  if (id == null) {
    id = channel.id;
  }
  obj[1] = id;
  obj.jumpToMessage(obj);
};
export const syncMessageDisplay = function syncMessageDisplay(messages) {
  messages = messages.messages;
  const oldestUnreadMessageId = messages.oldestUnreadMessageId;
  ({ channelId, updateRows, scrollToMessageId } = messages);
  if (messages.isMessagesReady) {
    let obj = { scrollToMessageId: null, jumpTargetId: null, jumpType: null, focusTargetId: null };
    ({ jumpTargetId: obj[0], jumpTargetId: obj[1] } = messages);
    obj[2] = messages(scrollToMessageId[47]).JumpType.INSTANT;
    obj[3] = messages.focusTargetId;
    updateRows(obj);
    if (null != messages.jumpTargetId) {
      obj = { scrollToMessageId: null, jumpTargetId: null, jumpType: null };
      ({ jumpTargetId: obj2[0], jumpTargetId: obj2[1] } = messages);
      obj[2] = tmp2(tmp3[47]).JumpType.INSTANT;
      scrollToMessageId(obj);
    } else if (null != oldestUnreadMessageId) {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => scrollToMessageId({ scrollToMessageId: oldestUnreadMessageId, jumpTargetId: messages.jumpTargetId, jumpType: messages(scrollToMessageId[47]).JumpType.INSTANT }), 50);
    }
    tmp2 = messages;
    tmp3 = scrollToMessageId;
  } else {
    updateRows({});
  }
  const mapped = messages.map((item, index) => item.id);
  let hasFetched = messages.hasFetched;
  if (!hasFetched) {
    hasFetched = messages.ready && !messages.cached;
  }
  oldestUnreadMessageId(scrollToMessageId[39]).recordMessageRender(channelId, mapped, hasFetched, messages.hasMoreAfter);
};
export function getChatRef(arg0) {
  return arg0;
}
export const maybeRescrollToMessageId = function maybeRescrollToMessageId(arg0, jumpType) {
  const _require = arg0;
  ({ chatRef: importDefault, findMessageIndex: dependencyMap, updateRows: closure_3, updateRowsEnabled } = jumpType);
  closure_4 = undefined !== updateRowsEnabled && updateRowsEnabled;
  let INSTANT = jumpType.jumpType;
  if (undefined === INSTANT) {
    INSTANT = require("../../../flow/Client.tsx").JumpType.INSTANT;
  }
  if (null != arg0) {
    const _setTimeout = setTimeout;
    const timerId = setTimeout(() => {
      const tmp2 = findMessageIndex(scrollToMessageId);
      if (null != tmp2) {
        if (null != chatRef.current) {
          let flag = false;
          if (c4) {
            let obj = { scrollToMessageId: null, jumpTargetId: null, jumpType: null, focusTargetId: null, overrideScrollJumpType: null, isRescrolling: true };
            obj[0] = scrollToMessageId;
            obj[1] = scrollToMessageId;
            obj[2] = INSTANT;
            obj[3] = scrollToMessageId;
            obj[4] = scrollToMessageId(findMessageIndex[47]).JumpType.INSTANT;
            updateRows(obj);
            flag = true;
          }
          if (!flag) {
            obj = { animated: null };
            obj[0] = INSTANT === scrollToMessageId(findMessageIndex[47]).JumpType.ANIMATED;
            chatRef(findMessageIndex[44]).scrollTo(tmp14.current, tmp2, obj);
            const obj2 = chatRef(findMessageIndex[44]);
          }
        }
      }
    }, 50);
  }
};
export const scrollToMessageIdWithRescroll = function scrollToMessageIdWithRescroll(scrollToMessageId) {
  scrollToMessageId = scrollToMessageId.scrollToMessageId;
  const jumpTargetId = scrollToMessageId.jumpTargetId;
  let tmp = null;
  if (undefined !== jumpTargetId) {
    tmp = jumpTargetId;
  }
  chatRef = tmp;
  let ANIMATED = scrollToMessageId.jumpType;
  if (undefined === ANIMATED) {
    ANIMATED = scrollToMessageId(findMessageIndex[47]).JumpType.ANIMATED;
  }
  let TOP = scrollToMessageId.scrollPosition;
  if (undefined === TOP) {
    TOP = scrollToMessageId(findMessageIndex[44]).ChatScrollPosition.TOP;
  }
  const minimizeScrolling = scrollToMessageId.minimizeScrolling;
  const isRescrolling = scrollToMessageId.isRescrolling;
  ({ useReducedMotion, chatRef } = scrollToMessageId);
  findMessageIndex = chatRef;
  ({ findMessageIndex, updateRows } = scrollToMessageId);
  if (!useReducedMotion) {
    useReducedMotion = ANIMATED === scrollToMessageId(findMessageIndex[47]).JumpType.INSTANT;
  }
  updateRows = tmp10;
  let obj = scrollToMessageId(findMessageIndex[41]);
  if (obj.isIOS()) {
    if (!tmp7) {
      const JumpType = tmp11(tmp12[47]).JumpType;
      let INSTANT = useReducedMotion ? JumpType.INSTANT : JumpType.ANIMATED;
      c4 = true;
      if (undefined === INSTANT) {
        INSTANT = tmp11(tmp12[47]).JumpType.INSTANT;
      }
      if (null != scrollToMessageId) {
        const _setTimeout2 = setTimeout;
        const timerId = setTimeout(() => {
          const tmp2 = findMessageIndex(scrollToMessageId);
          if (null != tmp2) {
            if (null != chatRef.current) {
              let flag = false;
              if (c4) {
                let obj = { scrollToMessageId: null, jumpTargetId: null, jumpType: null, focusTargetId: null, overrideScrollJumpType: null, isRescrolling: true };
                obj[0] = scrollToMessageId;
                obj[1] = scrollToMessageId;
                obj[2] = INSTANT;
                obj[3] = scrollToMessageId;
                obj[4] = scrollToMessageId(findMessageIndex[47]).JumpType.INSTANT;
                updateRows(obj);
                flag = true;
              }
              if (!flag) {
                obj = { animated: null };
                obj[0] = INSTANT === scrollToMessageId(findMessageIndex[47]).JumpType.ANIMATED;
                chatRef(findMessageIndex[44]).scrollTo(tmp14.current, tmp2, obj);
                const obj2 = chatRef(findMessageIndex[44]);
              }
            }
          }
        }, 50);
      }
    }
  }
  const findMessageIndexResult = findMessageIndex(scrollToMessageId);
  c4 = findMessageIndexResult;
  if (null != findMessageIndexResult) {
    if (tmp6) {
      const _setTimeout = setTimeout;
      const timerId1 = setTimeout(() => {
        chatRef(findMessageIndex[44]);
        const obj = { animated: updateRows, highlight: chatRef === scrollToMessageId };
        obj.scrollIntoView(findMessageIndex.current, c4, obj);
      }, 5);
    } else {
      obj = { animated: null, highlight: null, position: null };
      obj[0] = tmp10;
      obj[1] = tmp === scrollToMessageId;
      obj[2] = TOP;
      chatRef(tmp12[44]).scrollTo(chatRef.current, findMessageIndexResult, obj);
      let obj2 = chatRef(tmp12[44]);
    }
  }
};
export const handleVisibleMessagesChange = function handleVisibleMessagesChange(arg0) {
  ({ firstVisibleMessageRowIndex, firstVisibleMessagePercentVisible, lastVisibleMessageRowIndex, lastVisibleMessagePercentVisible, shouldTrackAnnouncementMessageViews, shouldTrackOfficialMessageViews, shouldTrackRichPresenceInviteEmbedViews, shouldTrackVoiceInviteEmbedViews, guildId, channel } = arg0);
  if (null != firstVisibleMessageRowIndex) {
    if (null != lastVisibleMessageRowIndex) {
      if (null != firstVisibleMessagePercentVisible) {
        if (null != lastVisibleMessagePercentVisible) {
          let obj = { firstVisibleMessageRowIndex: null, lastVisibleMessageRowIndex: null, firstVisibleMessagePercentVisible: null, lastVisibleMessagePercentVisible: null, chatManager: null, channelId: null };
          obj[0] = firstVisibleMessageRowIndex;
          obj[1] = lastVisibleMessageRowIndex;
          obj[2] = firstVisibleMessagePercentVisible;
          obj[3] = lastVisibleMessagePercentVisible;
          obj[4] = tmp2;
          obj[5] = tmp3;
          const arr = getVisibleMessages(obj);
          if (arr.length > 0) {
            obj = { visibleMessages: null, source: null };
            obj[0] = arr;
            obj[1] = tmp;
            const result = _manuallyStartConsoleQuest.questsVisibleMobileMessagesChanged(obj);
            const obj4 = getVoiceInviteEmbedRenderInfo;
            const result1 = obj4.handleAnnouncementMessageViewTracking(arr, shouldTrackAnnouncementMessageViews, guildId, channel);
            const obj5 = getVoiceInviteEmbedRenderInfo;
            const result2 = obj5.handleOfficialMessageViewTracking(arr, shouldTrackOfficialMessageViews, guildId, channel);
            const obj6 = getVoiceInviteEmbedRenderInfo;
            const result3 = obj6.handleRichPresenceInviteEmbedViewTracking(arr, shouldTrackRichPresenceInviteEmbedViews, guildId, channel);
            const obj7 = getVoiceInviteEmbedRenderInfo;
            const result4 = obj7.handleVoiceInviteEmbedViewTracking(arr, shouldTrackVoiceInviteEmbedViews, guildId, channel);
          }
        }
      }
    }
  }
};
export const getVoiceStateChannelSummaryFromVoiceStates = function getVoiceStateChannelSummaryFromVoiceStates(voiceStates) {
  const entries = Object.entries(voiceStates);
  const found = entries.filter((item, index) => {
    [, tmp] = item;
    return false !== tmp.discoverable;
  });
  const mapped = found.map((item, index) => {
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
    let value = obj.get(item10032);
    if (value !== obj2.get(item10032)) {
      let addResult = set.add(item10032);
    }
    continue;
  }
  return set;
};