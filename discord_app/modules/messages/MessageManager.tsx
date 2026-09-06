// discord_app/modules/messages/MessageManager.tsx
import LoggerDefault from "../debug/Logger.tsx";
import Storage3 from "../../../discord_common/js/packages/storage/Storage.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import DurationsDefault from "../../utils/Durations.tsx";
import router_utils from "../routing/router_utils.tsx";
import util from "../../intl/index.native.tsx";
import matchPathCompat from "../routing/matchPathCompat.tsx";
import Client from "../../flow/Client.tsx";
import AlertActionCreatorsDefault from "../../actions/AlertActionCreators.tsx";
import ChannelMessagesDefault from "../../lib/ChannelMessages.tsx";
import SidebarActionTypes from "../sidebar/SidebarActionTypes.tsx";
import MessageActionCreatorsDefault from "../../actions/MessageActionCreators.tsx";
import AttachmentUrlUtilsAll from "AttachmentUrlUtils.tsx";
import getAdaptiveMessageLimit from "getAdaptiveMessageLimit.native.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import ChannelRTCStore from "../calls/ChannelRTCStore.tsx";
import GatewayConnectionStore from "../gateway/GatewayConnectionStore.tsx";
import ChannelSectionStore from "../../stores/ChannelSectionStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import ReadStateStore from "../../stores/ReadStateStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";
import SelectedGuildStore from "../../stores/SelectedGuildStore.tsx";
import AutomaticLifecycleManager from "../../lib/AutomaticLifecycleManager.tsx";

require = fn;
function fetchMessages(arg0) {
  ({ guildId, channelId, messageId, forceFetch, isPreload, skipLocalFetch, avoidInitialScroll, fetchKey } = arg0);
  if (null != channelId) {
    if (!isStaticChannelRoute(channelId)) {
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
          let obj2 = ChannelMessagesDefault;
          const orCreate = obj2.getOrCreate(channelId);
          let orCreate1 = orCreate;
          if (orCreate.some(AttachmentUrlUtilsAll.messageHasExpiredAttachmentUrl)) {
            logger.log("Found expired attachment link, clearing messages");
            let tmp9Result = tmp9(5272);
            tmp9Result.clear(channelId);
            tmp9Result = tmp9(5272);
            orCreate1 = tmp9Result.getOrCreate(channelId);
          }
          let obj7 = orCreate1;
          if (tmp15) {
            let obj = { jumpTargetId: null, jumped: false, jumpType: Client.JumpType.ANIMATED };
            const mutation = orCreate1.mutate(obj);
            tmp9(5272).commit(mutation);
            obj7 = mutation;
            const tmp9Result1 = tmp9(5272);
          }
          let obj10 = obj7;
          if (tmp19) {
            const mutation1 = obj7.mutate({ focusTargetId: null });
            tmp9(5272).commit(mutation1);
            obj10 = mutation1;
            const tmp9Result2 = tmp9(5272);
          }
          if (isPreload) {
            if (!GatewayConnectionStore.isConnected()) {
              let flag = true;
            }
            let hasUnreadResult = tmp9(8374)(channelId);
            if (hasUnreadResult) {
              hasUnreadResult = ReadStateStore.hasUnread(channelId);
            }
            if (hasUnreadResult) {
              flag = true;
            }
            if (flag) {
              tmp9(5272).commit(obj10.mutate({ loadingMore: true }));
              if (null == messageId) {
                let isThreadResult;
                if (channel != null) {
                  isThreadResult = channel.isThread();
                }
                if (isThreadResult) {
                  let flag2 = false;
                  if (!ReadStateStore.hasOpenedThread(channelId)) {
                    if (null == obj) {
                      const Storage = Storage3.Storage;
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
                      for (const key10132 in obj) {
                        if (obj[key10132] >= tmp38) {
                          continue;
                        } else {
                          delete tmp[tmp2];
                          continue;
                        }
                        continue;
                      }
                      const Storage2 = Storage3.Storage;
                      const result = Storage2.set(viewedThreadIds, obj);
                      flag2 = true;
                    }
                  }
                  if (flag2) {
                    const _HermesInternal2 = HermesInternal;
                    logger.log("Jumping to start of thread " + channel.id);
                    const obj1 = {
                      channelId,
                      limit: null,
                      jump: null,
                      isPreload: null,
                      skipLocalFetch: null,
                      avoidInitialScroll: null,
                      fetchKey: null,
                    };
                    const tmp9Result4 = tmp9(7456);
                    obj1.limit = getAdaptiveMessageLimit.getMessageLimit("MessageManager.threadStart");
                    obj2 = { messageId: channelId, flash: false };
                    obj1.jump = obj2;
                    obj1.isPreload = isPreload;
                    obj1.skipLocalFetch = skipLocalFetch;
                    obj1.avoidInitialScroll = avoidInitialScroll;
                    obj1.fetchKey = fetchKey;
                    return tmp9Result4.fetchMessages(obj1);
                  }
                }
                let isThreadResult1;
                if (channel != null) {
                  isThreadResult1 = channel.isThread();
                }
                if (isThreadResult1) {
                  if (ReadStateStore.hasTrackedUnread(channel.id)) {
                    if (!obj10.ready) {
                      const trackedAckMessageId = obj16.getTrackedAckMessageId(channel.id);
                      const _HermesInternal = HermesInternal;
                      logger.log(
                        "Jumping to most recent message in thread " + channel.id + " - " + trackedAckMessageId,
                      );
                      const obj3 = {
                        channelId,
                        limit: null,
                        jump: null,
                        isPreload: null,
                        skipLocalFetch: null,
                        avoidInitialScroll: null,
                        fetchKey: null,
                      };
                      const tmp9Result5 = tmp9(7456);
                      obj3.limit = getAdaptiveMessageLimit.getMessageLimit("MessageManager.threadUnread");
                      const obj4 = { messageId: trackedAckMessageId, flash: false, offset: 1 };
                      obj3.jump = obj4;
                      obj3.isPreload = isPreload;
                      obj3.skipLocalFetch = skipLocalFetch;
                      obj3.avoidInitialScroll = avoidInitialScroll;
                      obj3.fetchKey = fetchKey;
                      return tmp9Result5.fetchMessages(obj3);
                    }
                  }
                  obj16 = ReadStateStore;
                }
                const obj5 = {
                  channelId,
                  limit: null,
                  isPreload: null,
                  skipLocalFetch: null,
                  jump: null,
                  avoidInitialScroll: null,
                  fetchKey: null,
                };
                const tmp9Result6 = tmp9(7456);
                obj5.limit = getAdaptiveMessageLimit.getMessageLimit("MessageManager.initialFetch");
                obj5.isPreload = isPreload;
                obj5.skipLocalFetch = skipLocalFetch;
                const obj6 = { jumpType: Client.JumpType.ANIMATED };
                obj5.jump = obj6;
                obj5.avoidInitialScroll = avoidInitialScroll;
                obj5.fetchKey = fetchKey;
                return tmp9Result6.fetchMessages(obj5);
              } else {
                obj7 = {
                  channelId,
                  messageId,
                  flash: true,
                  isPreload,
                  skipLocalFetch,
                  jumpType: tmp3,
                  avoidInitialScroll,
                };
                tmp9(7456).jumpToMessage(obj7);
                const tmp9Result7 = tmp9(7456);
              }
              const tmp9Result3 = tmp9(5272);
            }
          }
          if (!obj10.loadingMore) {
            let tmp23 = null != guildId;
            if (tmp23) {
              tmp23 = null == GuildStore.getGuild(guildId);
            }
            flag = forceFetch;
            if (!tmp23) {
              flag = true;
            }
          }
          flag = forceFetch;
          if (null != messageId) {
            flag = true;
          }
          tmp15 = null != orCreate1.jumpTargetId && null == messageId;
          tmp19 = null != obj7.focusTargetId && null == messageId;
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
          let obj = { guildId: channel.getGuildId(), channelId: channel.id };
          fetchMessages(obj);
        }
      }
    }
    const channel1 = ChannelStore.getChannel(channelId);
    if (null != channel1) {
      const id2 = channel1.id;
      const obj7 = matchPathCompat;
      obj = { path: collapsedCategories.CHANNEL(":guild", ":channel", ":message"), exact: true };
      const matchPathResult = obj7.matchPath(router_utils.getHistory().location.pathname, obj);
      let message;
      if (matchPathResult != null) {
        const params = matchPathResult.params;
        if (params != null) {
          message = params.message;
        }
      }
      const obj1 = {
        guildId: channel1.getGuildId(),
        channelId: channel1.id,
        messageId: message,
        avoidInitialScroll: null != message,
      };
      fetchMessages(obj1);
      const id = channel1.id;
      const guildId = channel1.getGuildId();
      const currentSidebarChannelId = ChannelSectionStore.getCurrentSidebarChannelId(id);
      if (null != currentSidebarChannelId) {
        const obj2 = { guildId, channelId: currentSidebarChannelId, messageId: obj5.getCurrentSidebarMessageId(id) };
        tmp7(obj2);
      }
      obj5 = ChannelSectionStore;
      tmp7 = fetchMessages;
    }
  }
}
function loadSelectedChannelIfNecessary() {
  const channelId = SelectedChannelStore.getChannelId();
  if (null != channelId) {
    const channel = ChannelStore.getChannel(channelId);
    if (null != channel) {
      if (isTextChannel(channel.type)) {
        let obj1 = ChannelMessagesDefault;
        const orCreate = obj1.getOrCreate(channelId);
        if (!tmp7) {
          let obj = { guildId: channel.getGuildId(), channelId: channel.id };
          fetchMessages(obj);
        }
        const id2 = channel.id;
        const guildId = channel.getGuildId();
        const currentSidebarChannelId = ChannelSectionStore.getCurrentSidebarChannelId(id2);
        if (null != currentSidebarChannelId) {
          obj = { guildId, channelId: currentSidebarChannelId, messageId: obj4.getCurrentSidebarMessageId(id2) };
          fetchMessages(obj);
        }
        obj4 = ChannelSectionStore;
        tmp7 = orCreate.ready && orCreate.hasFetched;
      } else {
        const id = channel.id;
        obj = ChannelSectionStore;
        const guildId1 = channel.getGuildId();
        const currentSidebarChannelId1 = ChannelSectionStore.getCurrentSidebarChannelId(id);
        if (null != currentSidebarChannelId1) {
          obj1 = {
            guildId: guildId1,
            channelId: currentSidebarChannelId1,
            messageId: obj.getCurrentSidebarMessageId(id),
          };
          fetchMessages(obj1);
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
    let obj = { guildId, channelId, messageId: tmp, jumpType: tmp2 };
    fetchMessages(obj);
    const currentSidebarChannelId = ChannelSectionStore.getCurrentSidebarChannelId(channelId);
    if (null != currentSidebarChannelId) {
      obj = {
        guildId,
        channelId: currentSidebarChannelId,
        messageId: ChannelSectionStore.getCurrentSidebarMessageId(channelId),
      };
      fetchMessages(obj);
    }
  }
}
function handleVoiceChannelSelect(guildId) {
  fetchMessages({ guildId: guildId.guildId, channelId: guildId.channelId });
}
function handleJumpToVoiceChannelMessage(guildId) {
  fetchMessages({
    guildId: guildId.guildId,
    channelId: guildId.channelId,
    messageId: guildId.messageId,
    jumpType: guildId.jumpType,
  });
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
        const currentSidebarChannelId = obj2.getCurrentSidebarChannelId(channelId);
        if (null != currentSidebarChannelId) {
          const obj = {
            guildId,
            channelId: currentSidebarChannelId,
            messageId: obj2.getCurrentSidebarMessageId(channelId),
          };
          fetchMessages(obj);
        }
      }
      tmp6 = type === SidebarActionTypes.SidebarType.VIEW_CHANNEL && sidebarState.channelId === channelId;
    }
  }
}
function handleChannelPreload(context) {
  ({ guildId, channelId } = context);
  if (context.context === __initData) {
    let obj = { guildId, channelId };
    fetchMessages(obj);
    const currentSidebarChannelId = ChannelSectionStore.getCurrentSidebarChannelId(channelId);
    if (null != currentSidebarChannelId) {
      obj = { guildId, channelId: currentSidebarChannelId, messageId: obj2.getCurrentSidebarMessageId(channelId) };
      tmp(obj);
    }
    obj2 = ChannelSectionStore;
    tmp = fetchMessages;
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
          let obj = { title: null, body: null };
          const intl = util.intl;
          obj.title = intl.string(util.t.Whhv4w);
          const intl2 = util.intl;
          obj = { retryAfterMinutes: null };
          const _Math = Math;
          obj.retryAfterMinutes = Math.ceil(retry_after / 60);
          obj.body = intl2.formatToPlainString(util.t.qoxdQB, obj);
          obj.show(obj);
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
    let num = closure_36[channelId];
    if (num == null) {
      num = 0;
    }
    const _Date = Date;
    if (Date.now() - num >= closure_21) {
      const _Date2 = Date;
      tmp[channelId] = Date.now();
      channelId = SelectedChannelStore.getChannelId();
      const currentSidebarChannelId = ChannelSectionStore.getCurrentSidebarChannelId(channelId);
      if (isStale) {
        isStale = GatewayConnectionStore.isConnected();
      }
      if (isStale) {
        isStale = channelId === channelId || channelId === currentSidebarChannelId;
        const tmp6 = channelId === channelId || channelId === currentSidebarChannelId;
      }
      if (isStale) {
        const obj = {
          channelId,
          limit: getAdaptiveMessageLimit.getMessageLimit("MessageManager.staleFetch"),
          jump: jump.jump,
        };
        const messages = obj.fetchMessages(obj);
      }
    }
    tmp = closure_36;
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
    const obj = { type: "MESSAGE_SEND_FAILED", channelId, messageId, reason: null, shouldNotify: null };
    if (reason == null) {
      reason = null;
    }
    obj.reason = reason;
    obj.shouldNotify = false !== shouldSendNotification;
    obj.dispatch(obj);
  }
}
function handleAppWillBecomeActive() {
  const channelId = SelectedChannelStore.getChannelId();
  if (null == channelId) {
    return false;
  } else {
    const newLocalMessages = MessageActionCreatorsDefault.fetchNewLocalMessages(channelId, closure_1_14);
  }
}
const isTextChannel = fn(1961).isTextChannel;
const Constants = fn(1074);
({
  MAX_MESSAGES_PER_CHANNEL: closure_14,
  CURRENT_APP_CONTEXT: closure_15,
  ChannelTypes: closure_16,
  AbortCodes: closure_17,
  Routes: closure_18,
  ChannelTypesSets: closure_19,
} = Constants);
const isStaticChannelRoute = fn(1964).isStaticChannelRoute;
let closure_21 = 10 * DurationsDefault.Millis.SECOND;
const logger = new LoggerDefault("MessageManager");
let closure_25 = 90 * DurationsDefault.Millis.DAY;
const viewedThreadIds = "viewedThreadIds";
let closure_36 = {};
class MessageManager extends tmp4 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.fetchMessages = fetchMessages;
    applyArgumentsResult.loadSelectedChannelIfNecessary = loadSelectedChannelIfNecessary;
    map = new Map();
    applyArgumentsResult.stores = map.set(closure_8, handleChannelSectionStoreChange);
    obj = {
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
      CHANNEL_RTC_JUMP_TO_VOICE_CHANNEL_MESSAGE: handleJumpToVoiceChannelMessage,
    };
    applyArgumentsResult.actions = obj;
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
