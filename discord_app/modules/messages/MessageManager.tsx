// === Module 9920: MessageManager ===

// Module 9920 (MessageManager)
import LoggerDefault from "Logger" /* 3 */;
import Storage3 from "Storage" /* 510 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import DurationsDefault from "Durations" /* 1089 */;
import router_utils from "router_utils" /* 1099 */;
import util from "util" /* 1113 */;
import matchPathCompat from "matchPathCompat" /* 5176 */;
import Client from "Client" /* 5365 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 6090 */;
import ChannelMessagesDefault from "ChannelMessages" /* 6618 */;
import SidebarActionTypes from "SidebarActionTypes" /* 6919 */;
import isChangelogChannelDefault from "isChangelogChannel" /* 6948 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7712 */;
import getNitroMessagePrefetchKey from "getNitroMessagePrefetchKey" /* 9921 */;
import AttachmentUrlUtilsAll from "AttachmentUrlUtils" /* 9951 */;
import getAdaptiveMessageLimit from "getAdaptiveMessageLimit" /* 9952 */;
import _slicedToArray from "module_32" /* 32 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6898 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6623 */;
import ChannelSectionStore from "ChannelSectionStore" /* 6917 */;
import ChannelStore from "ChannelStore" /* 4989 */;
import GuildStore from "GuildStore" /* 5011 */;
import ReadStateStore from "ReadStateStore" /* 6897 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5043 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5171 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7350 */;

require = fn;
function fetchMessages(arg0) {
  ({ guildId, channelId, messageId, forceFetch, isPreload, skipLocalFetch, avoidInitialScroll, fetchKey } = arg0);
  if (null != channelId) {
    if (!isStaticChannelRoute(channelId)) {
      if (tmp4) {
        const nitroMessagePrefetchKey = getNitroMessagePrefetchKey.getNitroMessagePrefetchKey(channelId);
      }
      const channel = ChannelStore.getChannel(channelId);
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
          const orCreate = ChannelMessagesDefault.getOrCreate(channelId);
          let orCreate1 = orCreate;
          if (orCreate.some(AttachmentUrlUtilsAll.messageHasExpiredAttachmentUrl)) {
            logger.log("Found expired attachment link, clearing messages");
            ChannelMessagesDefault.clear(channelId);
            const tmp13Result = ChannelMessagesDefault;
            orCreate1 = ChannelMessagesDefault.getOrCreate(channelId);
            const tmp13Result9 = ChannelMessagesDefault;
          }
          let obj8 = orCreate1;
          if (tmp19) {
            const obj2 = { jumpTargetId: null, jumped: false, jumpType: Client.JumpType.ANIMATED };
            const mutation = orCreate1.mutate(obj2);
            ChannelMessagesDefault.commit(mutation);
            obj8 = mutation;
            const tmp13Result10 = ChannelMessagesDefault;
          }
          let obj11 = obj8;
          if (tmp23) {
            const mutation1 = obj8.mutate({ focusTargetId: null });
            ChannelMessagesDefault.commit(mutation1);
            obj11 = mutation1;
            const tmp13Result11 = ChannelMessagesDefault;
          }
          if (isPreload) {
            if (!GatewayConnectionStore.isConnected()) {
              let flag = true;
            }
            let hasUnreadResult = isChangelogChannelDefault(channelId);
            if (hasUnreadResult) {
              hasUnreadResult = ReadStateStore.hasUnread(channelId);
            }
            if (hasUnreadResult) {
              flag = true;
            }
            if (flag) {
              ChannelMessagesDefault.commit(obj11.mutate({ loadingMore: true }));
              if (null == messageId) {
                let isThreadResult;
                if (channel != null) {
                  isThreadResult = channel.isThread();
                }
                if (isThreadResult) {
                  let flag2 = false;
                  if (!ReadStateStore.hasOpenedThread(channelId)) {
                    if (null == obj4) {
                      const Storage = Storage3.Storage;
                      obj4 = Storage.get(viewedThreadIds, {});
                      if (obj4 == null) {
                        obj4 = {};
                      }
                    }
                    flag2 = false;
                    if (!(channelId in obj4)) {
                      const _Date = Date;
                      obj4[channelId] = Date.now();
                      const _Date2 = Date;
                      for (const key10139 in obj4) {
                        if (obj4[key10139] >= tmp42) {
                          continue;
                        } else {
                          delete tmp[tmp2];
                          continue;
                        }
                        continue;
                      }
                      const Storage2 = Storage3.Storage;
                      const result = Storage2.set(viewedThreadIds, obj4);
                      flag2 = true;
                    }
                  }
                  if (flag2) {
                    const _HermesInternal2 = HermesInternal;
                    logger.log("Jumping to start of thread " + channel.id);
                    const obj5 = { channelId, limit: null, jump: null, isPreload: null, skipLocalFetch: null, avoidInitialScroll: null, fetchKey: null };
                    const tmp13Result13 = MessageActionCreatorsDefault;
                    obj5.limit = getAdaptiveMessageLimit.getMessageLimit("MessageManager.threadStart");
                    const obj6 = { messageId: channelId, flash: false };
                    obj5.jump = obj6;
                    obj5.isPreload = isPreload;
                    obj5.skipLocalFetch = skipLocalFetch;
                    obj5.avoidInitialScroll = avoidInitialScroll;
                    obj5.fetchKey = fetchKey;
                    return tmp13Result13.fetchMessages(obj5);
                  }
                }
                let isThreadResult1;
                if (channel != null) {
                  isThreadResult1 = channel.isThread();
                }
                if (isThreadResult1) {
                  if (ReadStateStore.hasTrackedUnread(channel.id)) {
                    if (!obj11.ready) {
                      const trackedAckMessageId = ReadStateStore.getTrackedAckMessageId(channel.id);
                      const _HermesInternal = HermesInternal;
                      logger.log("Jumping to most recent message in thread " + channel.id + " - " + trackedAckMessageId);
                      const obj7 = { channelId, limit: null, jump: null, isPreload: null, skipLocalFetch: null, avoidInitialScroll: null, fetchKey: null };
                      const tmp13Result14 = MessageActionCreatorsDefault;
                      obj7.limit = getAdaptiveMessageLimit.getMessageLimit("MessageManager.threadUnread");
                      const obj9 = { messageId: trackedAckMessageId, flash: false, offset: 1 };
                      obj7.jump = obj9;
                      obj7.isPreload = isPreload;
                      obj7.skipLocalFetch = skipLocalFetch;
                      obj7.avoidInitialScroll = avoidInitialScroll;
                      obj7.fetchKey = fetchKey;
                      return tmp13Result14.fetchMessages(obj7);
                    }
                  }
                }
                if (null != nitroMessagePrefetchKey) {
                  let messageLimit = closure_1_15;
                } else {
                  messageLimit = getAdaptiveMessageLimit.getMessageLimit("MessageManager.initialFetch");
                }
                const obj10 = { channelId, limit: messageLimit, isPreload, skipLocalFetch, jump: null, avoidInitialScroll: null, fetchKey: null, nitroPrefetchKey: null };
                const obj12 = { jumpType: Client.JumpType.ANIMATED };
                obj10.jump = obj12;
                obj10.avoidInitialScroll = avoidInitialScroll;
                obj10.fetchKey = fetchKey;
                obj10.nitroPrefetchKey = nitroMessagePrefetchKey;
                return MessageActionCreatorsDefault.fetchMessages(obj10);
              } else {
                const obj13 = { channelId, messageId, flash: true, isPreload, skipLocalFetch, jumpType: tmp3, avoidInitialScroll, nitroPrefetchKey: nitroMessagePrefetchKey };
                MessageActionCreatorsDefault.jumpToMessage(obj13);
                const tmp13Result16 = MessageActionCreatorsDefault;
              }
              const tmp13Result12 = ChannelMessagesDefault;
            }
          }
          if (!obj11.loadingMore) {
            let tmp27 = null != guildId;
            if (tmp27) {
              tmp27 = null == GuildStore.getGuild(guildId);
            }
            flag = forceFetch;
            if (!tmp27) {
              flag = true;
            }
          }
          flag = forceFetch;
          if (null != messageId) {
            flag = true;
          }
          tmp19 = null != orCreate1.jumpTargetId && null == messageId;
          tmp23 = null != obj8.focusTargetId && null == messageId;
        } else {
          const GUILD_THREADS_ONLY = constants3.GUILD_THREADS_ONLY;
        }
      }
    }
  }
}
function handleConnectionOpen() {
  const channelId = SelectedChannelStore.getChannelId();
  if (null != channelId) {
    const first = _slicedToArray(ChannelRTCStore.getOpenChatChannelIds(), 1)[0];
    if (null != first) {
      if (first !== channelId) {
        const channel = ChannelStore.getChannel(first);
        if (null != channel) {
          const obj = { guildId: channel.getGuildId(), channelId: channel.id };
          fetchMessages(obj);
        }
      }
    }
    const channel1 = ChannelStore.getChannel(channelId);
    if (null != channel1) {
      const id2 = channel1.id;
      const obj7 = matchPathCompat;
      const obj2 = { path: expandedHeight.CHANNEL(":guild", ":channel", ":message"), exact: true };
      const matchPathResult = obj7.matchPath(router_utils.getHistory().location.pathname, obj2);
      let message;
      if (matchPathResult != null) {
        const params = matchPathResult.params;
        if (params != null) {
          message = params.message;
        }
      }
      const obj3 = { guildId: channel1.getGuildId(), channelId: channel1.id, messageId: message, avoidInitialScroll: null != message };
      fetchMessages(obj3);
      const id = channel1.id;
      const guildId = channel1.getGuildId();
      const currentSidebarChannelId = ChannelSectionStore.getCurrentSidebarChannelId(id);
      if (null != currentSidebarChannelId) {
        obj4 = { guildId, channelId: currentSidebarChannelId, messageId: ChannelSectionStore.getCurrentSidebarMessageId(id) };
        fetchMessages(obj4);
      }
    }
  }
}
function loadSelectedChannelIfNecessary() {
  const channelId = SelectedChannelStore.getChannelId();
  if (null != channelId) {
    const channel = ChannelStore.getChannel(channelId);
    if (null != channel) {
      if (isTextChannel(channel.type)) {
        const orCreate = ChannelMessagesDefault.getOrCreate(channelId);
        if (!tmp7) {
          const obj6 = { guildId: channel.getGuildId(), channelId: null, messageId: null };
          ({ id: obj3.channelId, id: id2 } = channel);
          obj4 = matchPathCompat;
          const obj8 = { path: expandedHeight.CHANNEL(":guild", ":channel", ":message"), exact: true };
          const matchPathResult = obj4.matchPath(router_utils.getHistory().location.pathname, obj8);
          let message;
          if (matchPathResult != null) {
            const params = matchPathResult.params;
            if (params != null) {
              message = params.message;
            }
          }
          obj6.messageId = message;
          fetchMessages(obj6);
        }
        const id3 = channel.id;
        const guildId = channel.getGuildId();
        const currentSidebarChannelId = ChannelSectionStore.getCurrentSidebarChannelId(id3);
        if (null != currentSidebarChannelId) {
          const obj9 = { guildId, channelId: currentSidebarChannelId, messageId: ChannelSectionStore.getCurrentSidebarMessageId(id3) };
          fetchMessages(obj9);
        }
        tmp7 = orCreate.ready && orCreate.hasFetched;
      } else {
        const id = channel.id;
        const guildId1 = channel.getGuildId();
        const currentSidebarChannelId1 = ChannelSectionStore.getCurrentSidebarChannelId(id);
        if (null != currentSidebarChannelId1) {
          const obj10 = { guildId: guildId1, channelId: currentSidebarChannelId1, messageId: ChannelSectionStore.getCurrentSidebarMessageId(id) };
          fetchMessages(obj10);
        }
      }
    }
  }
}
function handleChannelSelect(skipMessageFetch) {
  ({ guildId, channelId } = skipMessageFetch);
  if (skipMessageFetch.skipMessageFetch) {
    return false;
  } else {
    const obj = { guildId, channelId, messageId: tmp, jumpType: tmp2 };
    fetchMessages(obj);
    const currentSidebarChannelId = ChannelSectionStore.getCurrentSidebarChannelId(channelId);
    if (null != currentSidebarChannelId) {
      const obj3 = { guildId, channelId: currentSidebarChannelId, messageId: ChannelSectionStore.getCurrentSidebarMessageId(channelId) };
      fetchMessages(obj3);
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
  const channelId = SelectedChannelStore.getChannelId();
  const guildId = SelectedGuildStore.getGuildId();
  if (null != guildId) {
    if (null != channelId) {
      const sidebarState = ChannelSectionStore.getSidebarState(channelId);
      let type;
      if (sidebarState != null) {
        type = sidebarState.type;
      }
      if (!tmp6) {
        const currentSidebarChannelId = ChannelSectionStore.getCurrentSidebarChannelId(channelId);
        if (null != currentSidebarChannelId) {
          const obj = { guildId, channelId: currentSidebarChannelId, messageId: ChannelSectionStore.getCurrentSidebarMessageId(channelId) };
          fetchMessages(obj);
        }
      }
      tmp6 = type === SidebarActionTypes.SidebarType.VIEW_CHANNEL && sidebarState.channelId === channelId;
    }
  }
}
function handleChannelPreload(context) {
  ({ guildId, channelId } = context);
  if (context.context === value2) {
    const obj = { guildId, channelId };
    fetchMessages(obj);
    const currentSidebarChannelId = ChannelSectionStore.getCurrentSidebarChannelId(channelId);
    if (null != currentSidebarChannelId) {
      const obj3 = { guildId, channelId: currentSidebarChannelId, messageId: ChannelSectionStore.getCurrentSidebarMessageId(channelId) };
      fetchMessages(obj3);
    }
  }
}
function handleChannelCreate(channel) {
  channel = channel.channel;
  const guild_id = channel.guild_id;
  let tmp = null != guild_id;
  if (tmp) {
    tmp = SelectedChannelStore.getChannelId(guild_id) === channel.id;
  }
  if (tmp) {
    const obj = { guildId: guild_id, channelId: channel.id, messageId: channel.messageId };
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
          const obj2 = { title: null, body: null };
          const intl = util.intl;
          obj2.title = intl.string(util.t.Whhv4w);
          const intl2 = util.intl;
          const obj3 = { retryAfterMinutes: null };
          const _Math = Math;
          obj3.retryAfterMinutes = Math.ceil(retry_after / 60);
          obj2.body = intl2.formatToPlainString(util.t.qoxdQB, obj3);
          AlertActionCreatorsDefault.show(obj2);
        }
      }
    }
  }
  return null;
}
function handleLoadMessagesSuccess(jump) {
  ({ channelId, isStale, isPreview } = jump);
  if (isPreview === undefined) {
    isPreview = false;
  }
  if (!isPreview) {
    let num = closure_37[channelId];
    if (num == null) {
      num = 0;
    }
    const _Date = Date;
    if (Date.now() - num >= closure_22) {
      const _Date2 = Date;
      closure_37[channelId] = Date.now();
      const channelId1 = SelectedChannelStore.getChannelId();
      const currentSidebarChannelId = ChannelSectionStore.getCurrentSidebarChannelId(channelId1);
      if (isStale) {
        isStale = GatewayConnectionStore.isConnected();
      }
      if (isStale) {
        isStale = channelId === channelId1 || channelId === currentSidebarChannelId;
        const tmp6 = channelId === channelId1 || channelId === currentSidebarChannelId;
      }
      if (isStale) {
        const obj2 = { channelId, limit: null, jump: null };
        const obj = MessageActionCreatorsDefault;
        obj2.limit = getAdaptiveMessageLimit.getMessageLimit("MessageManager.staleFetch");
        obj2.jump = jump.jump;
        const messages = obj.fetchMessages(obj2);
      }
    }
  }
}
function handleUploadFail(arg0) {
  ({ messageId, reason } = arg0);
  let tmp2 = null != messageId;
  ({ channelId, shouldSendNotification } = arg0);
  if (tmp2) {
    tmp2 = true !== tmp;
  }
  if (tmp2) {
    const obj2 = { type: "MESSAGE_SEND_FAILED", channelId, messageId, reason: null, shouldNotify: null };
    if (reason == null) {
      reason = null;
    }
    obj2.reason = reason;
    obj2.shouldNotify = false !== shouldSendNotification;
    DispatcherDefault.dispatch(obj2);
  }
}
function handleAppWillBecomeActive() {
  const channelId = SelectedChannelStore.getChannelId();
  if (null == channelId) {
    return false;
  } else {
    const newLocalMessages = MessageActionCreatorsDefault.fetchNewLocalMessages(channelId, gesture);
  }
}
const isTextChannel = fn(4993).isTextChannel;
const Constants = fn(1072);
({ MAX_MESSAGES_PER_CHANNEL: closure_14, MAX_MESSAGES_FOR_JUMP: closure_15, CURRENT_APP_CONTEXT: closure_16, ChannelTypes: closure_17, AbortCodes: closure_18, Routes: closure_19, ChannelTypesSets: closure_20 } = Constants);
const isStaticChannelRoute = fn(4996).isStaticChannelRoute;
let closure_22 = 10 * DurationsDefault.Millis.SECOND;
const logger = new LoggerDefault("MessageManager");
let closure_26 = 90 * DurationsDefault.Millis.DAY;
const viewedThreadIds = "viewedThreadIds";
let closure_37 = {};
class MessageManager extends tmp4 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.fetchMessages = fetchMessages;
    applyArgumentsResult.loadSelectedChannelIfNecessary = loadSelectedChannelIfNecessary;
    map = new Map();
    applyArgumentsResult.stores = map.set(closure_8, handleChannelSectionStoreChange);
    obj1 = {
      APP_STATE_UPDATE_WILL_BECOME_ACTIVE: handleAppWillBecomeActive,
      OVERLAY_INITIALIZE: handleConnectionOpen,
      CHANNEL_SELECT: handleChannelSelect,
      VOICE_CHANNEL_SELECT: handleVoiceChannelSelect,
      THREAD_CREATE: handleChannelCreate,
      THREAD_LIST_SYNC() {
            loadSelectedChannelIfNecessary();
          },
      CHANNEL_CREATE: handleChannelCreate,
      CHANNEL_PRELOAD: handleChannelPreload,
      GUILD_CREATE() {
            loadSelectedChannelIfNecessary();
          },
      MESSAGE_END_EDIT: handleMessageEditEnd,
      LOAD_MESSAGES_SUCCESS: handleLoadMessagesSuccess,
      UPLOAD_FAIL: handleUploadFail,
      CHANNEL_DELETE() {
            loadSelectedChannelIfNecessary();
          },
      THREAD_DELETE() {
            loadSelectedChannelIfNecessary();
          },
      CHANNEL_RTC_JUMP_TO_VOICE_CHANNEL_MESSAGE: handleJumpToVoiceChannelMessage
    };
    applyArgumentsResult.actions = obj1;
    return applyArgumentsResult;
  }
}
const prototype = MessageManager.prototype;
prototype["_initialize"] = function _initialize() {
  const subscription = DispatcherDefault.subscribe("CONNECTION_OPEN", handleConnectionOpen);
};
prototype["_terminate"] = function _terminate() {
  DispatcherDefault.unsubscribe("CONNECTION_OPEN", handleConnectionOpen);
};
const messageManager = new MessageManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/MessageManager.tsx");

export default messageManager;