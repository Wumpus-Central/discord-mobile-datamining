// === Module 7528: MessageManager ===

// Module 7528 (MessageManager)
import LoggerDefault from "Logger" /* 3 */;
import Storage3 from "Storage" /* 510 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import DurationsDefault from "Durations" /* 1102 */;
import router_utils from "router_utils" /* 1112 */;
import intl3 from "intl" /* 1126 */;
import ChannelRecord from "ChannelRecord" /* 2055 */;
import ChannelConstants from "ChannelConstants" /* 2058 */;
import matchPathCompat from "matchPathCompat" /* 4710 */;
import flow_Client from "flow/Client" /* 4793 */;
import ChannelMessagesDefault from "ChannelMessages" /* 5438 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5714 */;
import SidebarActionTypes from "SidebarActionTypes" /* 6795 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 6978 */;
import AttachmentUrlUtilsAll from "AttachmentUrlUtils" /* 7529 */;
import isChangelogChannelDefault from "isChangelogChannel" /* 7530 */;
import getAdaptiveMessageLimit from "getAdaptiveMessageLimit" /* 7531 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4912 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5443 */;
import ChannelSectionStore from "ChannelSectionStore" /* 6793 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;
import ReadStateStore from "ReadStateStore" /* 4911 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4705 */;
import Constants from "Constants" /* 1085 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6620 */;
import size from "module_2" /* 2 */;

let map, obj3;

let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
function fetchMessages(arg0) {
  let avoidInitialScroll;
  let channelId;
  let fetchKey;
  let forceFetch;
  let guildId;
  let isPreload;
  let messageId;
  let obj11;
  let obj17;
  let obj20;
  let obj23;
  let obj5;
  let obj8;
  let skipLocalFetch;
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
          let flag;
          const obj2 = ChannelMessagesDefault;
          const orCreate = obj2.getOrCreate(channelId);
          let orCreate1 = orCreate;
          if (orCreate.some(AttachmentUrlUtilsAll.messageHasExpiredAttachmentUrl)) {
            logger.log("Found expired attachment link, clearing messages");
            const tmp7Result = ChannelMessagesDefault;
            tmp7Result.clear(channelId);
            const tmp7Result9 = ChannelMessagesDefault;
            orCreate1 = tmp7Result9.getOrCreate(channelId);
          }
          let obj6 = orCreate1;
          const tmp14 = null != orCreate1.jumpTargetId && null == messageId;
          if (tmp14) {
            const mutate = orCreate1.mutate;
            const obj = { jumpTargetId: null, jumped: false, jumpType: flow_Client.JumpType.ANIMATED };
            const mutation = mutate(obj);
            const tmp7Result10 = ChannelMessagesDefault;
            tmp7Result10.commit(mutation);
            obj6 = mutation;
          }
          let obj9 = obj6;
          const tmp18 = null != obj6.focusTargetId && null == messageId;
          if (tmp18) {
            const mutation1 = obj6.mutate({ focusTargetId: null });
            const tmp7Result11 = ChannelMessagesDefault;
            tmp7Result11.commit(mutation1);
            obj9 = mutation1;
          }
          if (isPreload) {
            if (!GatewayConnectionStore.isConnected()) {
              flag = true;
            }
            const hasUnreadResult = isChangelogChannelDefault(channelId) && ReadStateStore.hasUnread(channelId);
            if (hasUnreadResult) {
              flag = true;
            }
            if (flag) {
              const tmp7Result12 = ChannelMessagesDefault;
              tmp7Result12.commit(obj9.mutate({ loadingMore: true }));
              if (null == messageId) {
                let isThreadResult;
                if (channel != null) {
                  isThreadResult = channel.isThread();
                }
                if (isThreadResult) {
                  let flag2 = false;
                  if (!ReadStateStore.hasOpenedThread(channelId)) {
                    if (null == obj3) {
                      const Storage = Storage3.Storage;
                      obj3 = Storage.get(viewedThreadIds, {});
                      if (obj3 == null) {
                        obj3 = {};
                      }
                    }
                    flag2 = false;
                    if (!(channelId in obj3)) {
                      const _Date = Date;
                      obj3[channelId] = Date.now();
                      const _Date2 = Date;
                      for (const key10132 in obj3) {
                        if (obj3[key10132] >= tmp37) {
                          continue;
                        } else {
                          delete obj3[tmp59];
                          continue;
                        }
                        continue;
                      }
                      const Storage2 = Storage3.Storage;
                      const result = Storage2.set(viewedThreadIds, obj3);
                      flag2 = true;
                    }
                  }
                  if (flag2) {
                    const _HermesInternal2 = HermesInternal;
                    logger.log("Jumping to start of thread " + channel.id);
                    const obj4 = { channelId, limit: obj23.getMessageLimit("MessageManager.threadStart"), jump: obj5, isPreload, skipLocalFetch, avoidInitialScroll, fetchKey };
                    const fetchMessages3 = MessageActionCreatorsDefault.fetchMessages;
                    MessageActionCreatorsDefault;
                    obj23 = getAdaptiveMessageLimit;
                    obj5 = { messageId: channelId, flash: false };
                    return fetchMessages3(obj4);
                  }
                }
                let isThreadResult1;
                if (channel != null) {
                  isThreadResult1 = channel.isThread();
                }
                if (isThreadResult1) {
                  if (ReadStateStore.hasTrackedUnread(channel.id)) {
                    if (!obj9.ready) {
                      const trackedAckMessageId = ReadStateStore.getTrackedAckMessageId(channel.id);
                      const _HermesInternal = HermesInternal;
                      logger.log("Jumping to most recent message in thread " + channel.id + " - " + trackedAckMessageId);
                      const obj7 = { channelId, limit: obj17.getMessageLimit("MessageManager.threadUnread"), jump: obj8, isPreload, skipLocalFetch, avoidInitialScroll, fetchKey };
                      fetchMessages = MessageActionCreatorsDefault.fetchMessages;
                      MessageActionCreatorsDefault;
                      obj17 = getAdaptiveMessageLimit;
                      obj8 = { messageId: trackedAckMessageId, flash: false, offset: 1 };
                      return fetchMessages(obj7);
                    }
                  }
                }
                const obj10 = { channelId, limit: obj20.getMessageLimit("MessageManager.initialFetch"), isPreload, skipLocalFetch, jump: obj11, avoidInitialScroll, fetchKey };
                const fetchMessages2 = MessageActionCreatorsDefault.fetchMessages;
                MessageActionCreatorsDefault;
                obj20 = getAdaptiveMessageLimit;
                obj11 = { jumpType: flow_Client.JumpType.ANIMATED };
                return fetchMessages2(obj10);
              } else {
                const obj12 = { channelId, messageId, flash: true, isPreload, skipLocalFetch, jumpType: tmp, avoidInitialScroll };
                const tmp7Result16 = MessageActionCreatorsDefault;
                tmp7Result16.jumpToMessage(obj12);
              }
            }
          }
          if (!obj9.loadingMore) {
            flag = forceFetch;
            const tmp22 = null != guildId && null == GuildStore.getGuild(guildId);
            if (!tmp22) {
              flag = true;
            }
          }
          flag = forceFetch;
          if (null != messageId) {
            flag = true;
          }
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
      const matchPath = matchPathCompat.matchPath;
      matchPathCompat;
      const obj2 = { path: authStore4.CHANNEL(":guild", ":channel", ":message"), exact: true };
      const obj7 = router_utils;
      const pathname = obj7.getHistory().location.pathname;
      const matchPathResult = matchPath(pathname, obj2);
      let message;
      if (matchPathResult != null) {
        const params = matchPathResult.params;
        if (params != null) {
          message = params.message;
        }
      }
      obj3 = { guildId: channel1.getGuildId(), channelId: channel1.id, messageId: message, avoidInitialScroll: null != message };
      fetchMessages(obj3);
      const id = channel1.id;
      const guildId = channel1.getGuildId();
      const currentSidebarChannelId = ChannelSectionStore.getCurrentSidebarChannelId(id);
      if (null != currentSidebarChannelId) {
        const obj4 = { guildId, channelId: currentSidebarChannelId, messageId: ChannelSectionStore.getCurrentSidebarMessageId(id) };
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
        const obj2 = ChannelMessagesDefault;
        const orCreate = obj2.getOrCreate(channelId);
        const tmp7 = orCreate.ready && orCreate.hasFetched;
        if (!tmp7) {
          obj3 = { guildId: channel.getGuildId(), channelId: channel.id };
          fetchMessages(obj3);
        }
        const id2 = channel.id;
        const guildId = channel.getGuildId();
        const currentSidebarChannelId = ChannelSectionStore.getCurrentSidebarChannelId(id2);
        if (null != currentSidebarChannelId) {
          const obj5 = { guildId, channelId: currentSidebarChannelId, messageId: ChannelSectionStore.getCurrentSidebarMessageId(id2) };
          fetchMessages(obj5);
        }
      } else {
        const id = channel.id;
        const guildId1 = channel.getGuildId();
        const currentSidebarChannelId1 = ChannelSectionStore.getCurrentSidebarChannelId(id);
        if (null != currentSidebarChannelId1) {
          const obj6 = { guildId: guildId1, channelId: currentSidebarChannelId1, messageId: ChannelSectionStore.getCurrentSidebarMessageId(id) };
          fetchMessages(obj6);
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
    const obj = { guildId, channelId, messageId: tmp, jumpType: tmp2 };
    fetchMessages(obj);
    const currentSidebarChannelId = ChannelSectionStore.getCurrentSidebarChannelId(channelId);
    if (null != currentSidebarChannelId) {
      obj3 = { guildId, channelId: currentSidebarChannelId, messageId: ChannelSectionStore.getCurrentSidebarMessageId(channelId) };
      fetchMessages(obj3);
    }
  }
}
function handleVoiceChannelSelect(guildId) {
  const obj = { guildId: guildId.guildId, channelId: guildId.channelId };
  fetchMessages(obj);
}
function handleJumpToVoiceChannelMessage(guildId) {
  const obj = { guildId: guildId.guildId, channelId: guildId.channelId, messageId: guildId.messageId, jumpType: guildId.jumpType };
  fetchMessages(obj);
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
      const tmp6 = type === SidebarActionTypes.SidebarType.VIEW_CHANNEL && sidebarState.channelId === channelId;
      if (!tmp6) {
        const currentSidebarChannelId = ChannelSectionStore.getCurrentSidebarChannelId(channelId);
        if (null != currentSidebarChannelId) {
          const obj = { guildId, channelId: currentSidebarChannelId, messageId: ChannelSectionStore.getCurrentSidebarMessageId(channelId) };
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
  if (context.context === closure_15) {
    const obj = { guildId, channelId };
    fetchMessages(obj);
    const currentSidebarChannelId = ChannelSectionStore.getCurrentSidebarChannelId(channelId);
    if (null != currentSidebarChannelId) {
      obj3 = { guildId, channelId: currentSidebarChannelId, messageId: ChannelSectionStore.getCurrentSidebarMessageId(channelId) };
      fetchMessages(obj3);
    }
  }
}
function handleChannelCreate(channel) {
  channel = channel.channel;
  const guild_id = channel.guild_id;
  let tmp = null != guild_id;
  const messageId = channel.messageId;
  if (tmp) {
    tmp = SelectedChannelStore.getChannelId(guild_id) === channel.id;
  }
  if (tmp) {
    const obj = { guildId: guild_id, channelId: channel.id, messageId };
    fetchMessages(obj);
  }
}
function handleMessageEditEnd(response) {
  let formatToPlainString;
  let intl;
  let obj2;
  let qoxdQB;
  response = response.response;
  if (null != response) {
    if (null != response.body) {
      if (response.body.code === constants2.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED) {
        const retry_after = response.body.retry_after;
        if (null != retry_after) {
          const obj = { title: intl.string(intl3.t.Whhv4w), body: formatToPlainString(qoxdQB, obj2) };
          const show = AlertActionCreatorsDefault.show;
          AlertActionCreatorsDefault;
          intl = intl3.intl;
          const intl2 = intl3.intl;
          formatToPlainString = intl2.formatToPlainString;
          const _Math = Math;
          obj2 = { retryAfterMinutes: Math.ceil(retry_after / 60) };
          qoxdQB = intl3.t.qoxdQB;
          show(obj);
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
  let obj2;
  ({ channelId, isStale, isPreview } = jump);
  jump = jump.jump;
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
      closure_36[channelId] = Date.now();
      const channelId1 = SelectedChannelStore.getChannelId();
      const currentSidebarChannelId = ChannelSectionStore.getCurrentSidebarChannelId(channelId1);
      if (isStale) {
        isStale = GatewayConnectionStore.isConnected();
      }
      if (isStale) {
        isStale = channelId === channelId1 || channelId === currentSidebarChannelId;
      }
      if (isStale) {
        const obj = { channelId, limit: obj2.getMessageLimit("MessageManager.staleFetch"), jump };
        fetchMessages = MessageActionCreatorsDefault.fetchMessages;
        MessageActionCreatorsDefault;
        obj2 = getAdaptiveMessageLimit;
        const messages = fetchMessages(obj);
      }
    }
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
    const obj = { type: "MESSAGE_SEND_FAILED", channelId, messageId, reason, shouldNotify: false !== shouldSendNotification };
    const dispatch = DispatcherDefault.dispatch;
    DispatcherDefault;
    if (reason == null) {
      reason = null;
    }
    dispatch(obj);
  }
}
function handleAppWillBecomeActive() {
  const channelId = SelectedChannelStore.getChannelId();
  if (null == channelId) {
    return false;
  } else {
    const obj = MessageActionCreatorsDefault;
    const newLocalMessages = obj.fetchNewLocalMessages(channelId, authStore2);
  }
}
const isTextChannel = ChannelRecord.isTextChannel;
({ MAX_MESSAGES_PER_CHANNEL: closure_14, CURRENT_APP_CONTEXT: closure_15, ChannelTypes: closure_16, AbortCodes: closure_17, Routes: closure_18, ChannelTypesSets: closure_19 } = Constants);
const isStaticChannelRoute = ChannelConstants.isStaticChannelRoute;
let closure_21 = 10 * DurationsDefault.Millis.SECOND;
const logger = new LoggerDefault("MessageManager");
const tmp3 = new LoggerDefault("MessageManager");
let closure_25 = 90 * DurationsDefault.Millis.DAY;
const viewedThreadIds = "viewedThreadIds";
let closure_36 = {};
class MessageManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.fetchMessages = fetchMessages;
    applyArgumentsResult.loadSelectedChannelIfNecessary = loadSelectedChannelIfNecessary;
    map = new Map();
    applyArgumentsResult.stores = map.set(ChannelSectionStore, handleChannelSectionStoreChange);
    const obj = {
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
    applyArgumentsResult.actions = obj;
    return applyArgumentsResult;
  }
  _initialize() {
    const obj = DispatcherDefault;
    const subscription = obj.subscribe("CONNECTION_OPEN", handleConnectionOpen);
  }
  _terminate() {
    const obj = DispatcherDefault;
    obj.unsubscribe("CONNECTION_OPEN", handleConnectionOpen);
  }
}
const prototype = MessageManager.prototype;
const messageManager = new MessageManager();
let result = size.fileFinishedImporting("modules/messages/MessageManager.tsx");

export default messageManager;