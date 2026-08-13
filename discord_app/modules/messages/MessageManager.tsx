// discord_app/modules/messages/MessageManager.tsx
import _slicedToArray from "_slicedToArray";
import getParticipants from "getParticipants";
import _handleConnectionOpen from "_handleConnectionOpen";
import { isTextChannel } from "createChannelRecord";
import handlePermissionsChange from "handlePermissionsChange";
import ensureGuildLoaded from "ensureGuildLoaded";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import generateOldThreadCutoff from "generateOldThreadCutoff";
import handleConnectionOpen from "handleConnectionOpen";
import closure_12 from "handleConnectionOpen";
import ME from "ME";
import { isStaticChannelRoute } from "set";
import "initialize";
import { Storage } from "../../../discord_common/js/packages/storage/Storage.tsx";
import { set } from "../../actions/AlertActionCreators.tsx";
import { trackInvite } from "../../actions/MessageActionCreators.tsx";
import { dispatcher } from "../../Dispatcher.tsx";
import { getSystemLocale } from "../../intl/index.native.tsx";
import { mergeMessage } from "../../lib/ChannelMessages.tsx";
import { matchPath } from "../routing/matchPathCompat.tsx";
import { transitionTo } from "../routing/router_utils.tsx";
import { SidebarType } from "../sidebar/SidebarActionTypes.tsx";
import { getMessageLimit } from "getAdaptiveMessageLimit.native.tsx";
import { shouldRefreshAttachmentUrl } from "SignedAttachmentLinkUtils.tsx";

let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let map1;
const require = arg1;
function fetchMessages(arg0) {
  let avoidInitialScroll;
  let channelId;
  let fetchKey;
  let forceFetch;
  let guildId;
  let isPreload;
  let messageId;
  let skipLocalFetch;
  ({ guildId, channelId, messageId, forceFetch, isPreload, skipLocalFetch, avoidInitialScroll, fetchKey } = arg0);
  if (null != channelId) {
    if (!isStaticChannelRoute(channelId)) {
      const channel = store2.getChannel(channelId);
      let type;
      if (channel != null) {
        type = channel.type;
      }
      if (type !== constants.GUILD_STORE) {
        let type1;
        if (channel != null) {
          type1 = channel.type;
        }
        if (null == type1) {
          let obj2 = mergeMessage;
          const orCreate = obj2.getOrCreate(channelId);
          let orCreate1 = orCreate;
          if (orCreate.some(shouldRefreshAttachmentUrl.messageHasExpiredAttachmentUrl)) {
            tmp3.log("Found expired attachment link, clearing messages");
            let tmp9Result = tmp9(5030);
            tmp9Result.clear(channelId);
            tmp9Result = tmp9(5030);
            orCreate1 = tmp9Result.getOrCreate(channelId);
          }
          let obj7 = orCreate1;
          if (tmp15) {
            let obj = { jumpTargetId: null, jumped: false, jumpType: null };
            obj[2] = tmp11(4274).JumpType.ANIMATED;
            const mutation = orCreate1.mutate(obj);
            tmp9(5030).commit(mutation);
            obj7 = mutation;
            const tmp9Result1 = tmp9(5030);
          }
          let obj10 = obj7;
          if (tmp18) {
            const mutation1 = obj7.mutate({ focusTargetId: null });
            tmp9(5030).commit(mutation1);
            obj10 = mutation1;
            const tmp9Result2 = tmp9(5030);
          }
          if (isPreload) {
            if (!_handleConnectionOpen.isConnected()) {
              let flag = true;
            }
            let hasUnreadResult = tmp9(8985)(channelId);
            if (hasUnreadResult) {
              hasUnreadResult = generateOldThreadCutoff.hasUnread(channelId);
            }
            if (hasUnreadResult) {
              flag = true;
            }
            if (flag) {
              tmp9(5030).commit(obj10.mutate({ loadingMore: true }));
              if (null == messageId) {
                let isThreadResult;
                if (channel != null) {
                  isThreadResult = channel.isThread();
                }
                if (isThreadResult) {
                  let flag2 = false;
                  if (!generateOldThreadCutoff.hasOpenedThread(channelId)) {
                    if (null == obj) {
                      const Storage = tmp11(595).Storage;
                      obj = Storage.get(viewedThreadIds, {});
                      if (obj == null) {
                        obj = {};
                      }
                    }
                    flag2 = false;
                    if (!(channelId in obj)) {
                      const _Date = Date;
                      obj[channelId] = Date.now();
                      const _Date2 = Date;
                      for (const key10130 in obj) {
                        let tmp53 = key10130;
                        let tmp54 = obj;
                        if (obj[key10130] >= tmp36) {
                          continue;
                        } else {
                          let tmp38 = obj;
                          delete tmp[tmp2];
                          continue;
                        }
                        continue;
                      }
                      const Storage2 = Storage.Storage;
                      const result = Storage2.set(viewedThreadIds, obj);
                      flag2 = true;
                    }
                  }
                  if (flag2) {
                    const _HermesInternal2 = HermesInternal;
                    tmp3.log("Jumping to start of thread " + channel.id);
                    const obj1 = { channelId: null, limit: null, jump: null, isPreload: null, skipLocalFetch: null, avoidInitialScroll: null, fetchKey: null };
                    obj1[0] = channelId;
                    let tmp11Result = tmp11(9797);
                    obj1[1] = tmp11Result.getMessageLimit("MessageManager.threadStart");
                    obj2 = { messageId: null, flash: false };
                    obj2[0] = channelId;
                    obj1[2] = obj2;
                    obj1[3] = isPreload;
                    obj1[4] = skipLocalFetch;
                    obj1[5] = avoidInitialScroll;
                    obj1[6] = fetchKey;
                    return tmp9(6965).fetchMessages(obj1);
                  }
                }
                let isThreadResult1;
                if (channel != null) {
                  isThreadResult1 = channel.isThread();
                }
                if (isThreadResult1) {
                  if (generateOldThreadCutoff.hasTrackedUnread(channel.id)) {
                    if (!obj10.ready) {
                      const trackedAckMessageId = obj16.getTrackedAckMessageId(channel.id);
                      const _HermesInternal = HermesInternal;
                      tmp3.log("Jumping to most recent message in thread " + channel.id + " - " + trackedAckMessageId);
                      const obj3 = { channelId: null, limit: null, jump: null, isPreload: null, skipLocalFetch: null, avoidInitialScroll: null, fetchKey: null };
                      obj3[0] = channelId;
                      tmp11Result = tmp11(9797);
                      obj3[1] = tmp11Result.getMessageLimit("MessageManager.threadUnread");
                      const obj4 = { messageId: null, flash: false, offset: 1 };
                      obj4[0] = trackedAckMessageId;
                      obj3[2] = obj4;
                      obj3[3] = isPreload;
                      obj3[4] = skipLocalFetch;
                      obj3[5] = avoidInitialScroll;
                      obj3[6] = fetchKey;
                      return tmp9(6965).fetchMessages(obj3);
                    }
                  }
                  obj16 = generateOldThreadCutoff;
                }
                const obj5 = { channelId: null, limit: null, isPreload: null, skipLocalFetch: null, jump: null, avoidInitialScroll: null, fetchKey: null };
                obj5[0] = channelId;
                const tmp9Result6 = tmp9(6965);
                obj5[1] = tmp11(9797).getMessageLimit("MessageManager.initialFetch");
                obj5[2] = isPreload;
                obj5[3] = skipLocalFetch;
                const obj6 = { jumpType: null };
                obj6[0] = tmp11(4274).JumpType.ANIMATED;
                obj5[4] = obj6;
                obj5[5] = avoidInitialScroll;
                obj5[6] = fetchKey;
                return tmp9Result6.fetchMessages(obj5);
              } else {
                obj7 = { channelId: null, messageId: null, flash: true, isPreload: null, skipLocalFetch: null, jumpType: null, avoidInitialScroll: null };
                obj7[0] = channelId;
                obj7[1] = messageId;
                obj7[3] = isPreload;
                obj7[4] = skipLocalFetch;
                obj7[5] = tmp3;
                obj7[6] = avoidInitialScroll;
                tmp9(6965).jumpToMessage(obj7);
                const tmp9Result7 = tmp9(6965);
              }
              const tmp9Result3 = tmp9(5030);
            }
          }
          if (!obj10.loadingMore) {
            let tmp22 = null != guildId;
            if (tmp22) {
              tmp22 = null == guild.getGuild(guildId);
            }
            flag = forceFetch;
            if (!tmp22) {
              flag = true;
            }
          }
          flag = forceFetch;
          if (null != messageId) {
            flag = true;
          }
          tmp15 = null != orCreate1.jumpTargetId && null == messageId;
          tmp18 = null != obj7.focusTargetId && null == messageId;
        } else {
          const GUILD_THREADS_ONLY = constants3.GUILD_THREADS_ONLY;
        }
      }
    }
  }
}
function handleConnectionOpen() {
  const channelId = store3.getChannelId();
  if (null != channelId) {
    const first = callback(openChatChannelIds.getOpenChatChannelIds(), 1)[0];
    if (null != first) {
      if (first !== channelId) {
        const channel = store2.getChannel(first);
        if (null != channel) {
          let obj = { guildId: null, channelId: null };
          obj[0] = channel.getGuildId();
          obj[1] = channel.id;
          fetchMessages(obj);
        }
      }
    }
    const channel1 = store2.getChannel(channelId);
    if (null != channel1) {
      const id2 = channel1.id;
      const obj7 = matchPath;
      obj = { path: null, exact: true };
      obj[0] = closure_17.CHANNEL(":guild", ":channel", ":message");
      const matchPathResult = obj7.matchPath(transitionTo.getHistory().location.pathname, obj);
      let message;
      if (matchPathResult != null) {
        const params = matchPathResult.params;
        if (params != null) {
          message = params.message;
        }
      }
      const obj1 = { guildId: null, channelId: null, messageId: null, avoidInitialScroll: null };
      obj1[0] = channel1.getGuildId();
      obj1[1] = channel1.id;
      obj1[2] = message;
      obj1[3] = null != message;
      fetchMessages(obj1);
      const id = channel1.id;
      const guildId = channel1.getGuildId();
      const currentSidebarChannelId = store.getCurrentSidebarChannelId(id);
      if (null != currentSidebarChannelId) {
        const obj2 = { guildId: null, channelId: null, messageId: null };
        obj2[0] = guildId;
        obj2[1] = currentSidebarChannelId;
        obj2[2] = obj5.getCurrentSidebarMessageId(id);
        tmp7(obj2);
      }
      obj5 = store;
      const obj8 = transitionTo;
      tmp7 = fetchMessages;
    }
  }
}
function loadSelectedChannelIfNecessary() {
  const channelId = store3.getChannelId();
  if (null != channelId) {
    const channel = store2.getChannel(channelId);
    if (null != channel) {
      if (isTextChannel(channel.type)) {
        let obj1 = mergeMessage;
        const orCreate = obj1.getOrCreate(channelId);
        if (!tmp7) {
          let obj = { guildId: null, channelId: null };
          obj[0] = channel.getGuildId();
          obj[1] = channel.id;
          fetchMessages(obj);
        }
        const id2 = channel.id;
        const guildId = channel.getGuildId();
        const currentSidebarChannelId = store.getCurrentSidebarChannelId(id2);
        if (null != currentSidebarChannelId) {
          obj = { guildId: null, channelId: null, messageId: null };
          obj[0] = guildId;
          obj[1] = currentSidebarChannelId;
          obj[2] = obj4.getCurrentSidebarMessageId(id2);
          fetchMessages(obj);
        }
        obj4 = store;
        tmp7 = orCreate.ready && orCreate.hasFetched;
      } else {
        const id = channel.id;
        obj = store;
        const guildId1 = channel.getGuildId();
        const currentSidebarChannelId1 = store.getCurrentSidebarChannelId(id);
        if (null != currentSidebarChannelId1) {
          obj1 = { guildId: null, channelId: null, messageId: null };
          obj1[0] = guildId1;
          obj1[1] = currentSidebarChannelId1;
          obj1[2] = obj.getCurrentSidebarMessageId(id);
          fetchMessages(obj1);
        }
      }
    }
  }
}
function handleChannelSelect(skipMessageFetch) {
  let channelId;
  let guildId;
  ({ guildId, channelId } = skipMessageFetch);
  if (skipMessageFetch.skipMessageFetch) {
    return false;
  } else {
    let obj = { guildId: null, channelId: null, messageId: null, jumpType: null };
    obj[0] = guildId;
    obj[1] = channelId;
    obj[2] = tmp;
    obj[3] = tmp2;
    fetchMessages(obj);
    const currentSidebarChannelId = store.getCurrentSidebarChannelId(channelId);
    if (null != currentSidebarChannelId) {
      obj = { guildId: null, channelId: null, messageId: null };
      obj[0] = guildId;
      obj[1] = currentSidebarChannelId;
      obj[2] = store.getCurrentSidebarMessageId(channelId);
      fetchMessages(obj);
    }
  }
}
function handleVoiceChannelSelect(guildId) {
  fetchMessages({ guildId: guildId.guildId, channelId: guildId.channelId });
}
function handleJumpToVoiceChannelMessage(guildId) {
  fetchMessages({ guildId: guildId.guildId, channelId: guildId.channelId, messageId: guildId.messageId, jumpType: guildId.jumpType });
}
function handleChannelSectionStoreChange() {
  const channelId = store3.getChannelId();
  guildId = guildId.getGuildId();
  if (null != guildId) {
    if (null != channelId) {
      const sidebarState = store.getSidebarState(channelId);
      let type;
      if (sidebarState != null) {
        type = sidebarState.type;
      }
      if (type !== SidebarType.SidebarType.VIEW_CHANNEL) {
        const currentSidebarChannelId = obj2.getCurrentSidebarChannelId(channelId);
        if (null != currentSidebarChannelId) {
          const obj = { guildId: null, channelId: null, messageId: null };
          obj[0] = guildId;
          obj[1] = currentSidebarChannelId;
          obj[2] = obj2.getCurrentSidebarMessageId(channelId);
          fetchMessages(obj);
        }
      }
    }
  }
}
function handleChannelPreload(context) {
  let channelId;
  let guildId;
  ({ guildId, channelId } = context);
  if (context.context === closure_14) {
    let obj = { guildId: null, channelId: null };
    obj[0] = guildId;
    obj[1] = channelId;
    fetchMessages(obj);
    const currentSidebarChannelId = store.getCurrentSidebarChannelId(channelId);
    if (null != currentSidebarChannelId) {
      obj = { guildId: null, channelId: null, messageId: null };
      obj[0] = guildId;
      obj[1] = currentSidebarChannelId;
      obj[2] = obj2.getCurrentSidebarMessageId(channelId);
      tmp(obj);
    }
    obj2 = store;
    tmp = fetchMessages;
  }
}
function handleChannelCreate(channel) {
  channel = channel.channel;
  const guild_id = channel.guild_id;
  let tmp = null != guild_id;
  if (tmp) {
    tmp = store3.getChannelId(guild_id) === channel.id;
  }
  if (tmp) {
    const obj = { guildId: null, channelId: null, messageId: null };
    obj[0] = guild_id;
    obj[1] = channel.id;
    obj[2] = channel.messageId;
    fetchMessages(obj);
  }
}
function handleMessageEditEnd(response) {
  response = response.response;
  if (null != response) {
    if (null != response.body) {
      if (response.body.code === constants2.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED) {
        const retry_after = response.body.retry_after;
        if (null != retry_after) {
          let obj = set;
          obj = { title: null, body: null };
          const intl = getSystemLocale.intl;
          obj[0] = intl.string(getSystemLocale.t.Whhv4w);
          const intl2 = getSystemLocale.intl;
          obj = { retryAfterMinutes: null };
          const _Math = Math;
          obj[0] = Math.ceil(retry_after / 60);
          obj[1] = intl2.formatToPlainString(getSystemLocale.t.qoxdQB, obj);
          obj.show(obj);
        }
      }
    }
  }
  return null;
}
function handleLoadMessagesSuccess(jump) {
  let channelId;
  let isPreview;
  let isStale;
  ({ channelId, isStale, isPreview } = jump);
  if (isPreview === undefined) {
    isPreview = false;
  }
  if (!isPreview) {
    let num = table[channelId];
    if (num == null) {
      num = 0;
    }
    const _Date = Date;
    if (Date.now() - num >= closure_20) {
      const _Date2 = Date;
      tmp[channelId] = Date.now();
      channelId = store3.getChannelId();
      const currentSidebarChannelId = store.getCurrentSidebarChannelId(channelId);
      if (isStale) {
        isStale = _handleConnectionOpen.isConnected();
      }
      if (isStale) {
        isStale = channelId === channelId || channelId === currentSidebarChannelId;
        const tmp6 = channelId === channelId || channelId === currentSidebarChannelId;
      }
      if (isStale) {
        let obj = trackInvite;
        obj = { channelId: null, limit: null, jump: null };
        obj[0] = channelId;
        obj[1] = getMessageLimit.getMessageLimit("MessageManager.staleFetch");
        obj[2] = jump.jump;
        const messages = obj.fetchMessages(obj);
        const obj3 = getMessageLimit;
      }
    }
    tmp = table;
  }
}
function handleUploadFail(arg0) {
  let channelId;
  let messageId;
  let reason;
  let shouldSendNotification;
  ({ messageId, reason } = arg0);
  let tmp2 = null != messageId;
  ({ channelId, shouldSendNotification } = arg0);
  if (tmp2) {
    tmp2 = true !== tmp;
  }
  if (tmp2) {
    let obj = dispatcher;
    obj = { type: "MESSAGE_SEND_FAILED", channelId: null, messageId: null, reason: null, shouldNotify: null };
    obj[1] = channelId;
    obj[2] = messageId;
    if (reason == null) {
      reason = null;
    }
    obj[3] = reason;
    obj[4] = false !== shouldSendNotification;
    obj.dispatch(obj);
  }
}
function handleAppWillBecomeActive() {
  const channelId = store3.getChannelId();
  if (null == channelId) {
    return false;
  } else {
    const newLocalMessages = trackInvite.fetchNewLocalMessages(channelId, closure_13);
  }
}
({ MAX_MESSAGES_PER_CHANNEL: map1, CURRENT_APP_CONTEXT: closure_14, ChannelTypes: closure_15, AbortCodes: closure_16, Routes: closure_17, ChannelTypesSets: closure_18 } = ME);
let closure_20 = 10 * require("set").Millis.SECOND;
let closure_21 = new require("createChannelRecord")("MessageManager");
let closure_24 = 90 * require("set").Millis.DAY;
const viewedThreadIds = "viewedThreadIds";
let closure_35 = {};
class MessageManager extends tmp4 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.fetchMessages = fetchMessages;
    applyArgumentsResult.loadSelectedChannelIfNecessary = loadSelectedChannelIfNecessary;
    map = new Map();
    applyArgumentsResult.stores = map.set(isTextChannel, handleChannelSectionStoreChange);
    obj = {
      APP_STATE_UPDATE_WILL_BECOME_ACTIVE: handleAppWillBecomeActive,
      OVERLAY_INITIALIZE: handleConnectionOpen,
      CHANNEL_SELECT: handleChannelSelect,
      VOICE_CHANNEL_SELECT: handleVoiceChannelSelect,
      THREAD_CREATE: handleChannelCreate,
      THREAD_LIST_SYNC() {
            callback();
          },
      CHANNEL_CREATE: handleChannelCreate,
      CHANNEL_PRELOAD: handleChannelPreload,
      GUILD_CREATE() {
            callback();
          },
      MESSAGE_END_EDIT: handleMessageEditEnd,
      LOAD_MESSAGES_SUCCESS: handleLoadMessagesSuccess,
      UPLOAD_FAIL: handleUploadFail,
      CHANNEL_DELETE() {
            callback();
          },
      THREAD_DELETE() {
            callback();
          },
      CHANNEL_RTC_JUMP_TO_VOICE_CHANNEL_MESSAGE: handleJumpToVoiceChannelMessage
    };
    applyArgumentsResult.actions = obj;
    return applyArgumentsResult;
  }
}
const prototype = MessageManager.prototype;
prototype["_initialize"] = function _initialize() {
  const subscription = dispatcher.subscribe("CONNECTION_OPEN", handleConnectionOpen);
};
prototype["_terminate"] = function _terminate() {
  dispatcher.unsubscribe("CONNECTION_OPEN", handleConnectionOpen);
};
const messageManager = new MessageManager();
const tmp3 = new require("createChannelRecord")("MessageManager");
let result = require("_handleConnectionOpen").fileFinishedImporting("modules/messages/MessageManager.tsx");

export default messageManager;