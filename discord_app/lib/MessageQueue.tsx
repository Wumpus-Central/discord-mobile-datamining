// discord_app/lib/MessageQueue.tsx
import LoggerDefault from "../modules/debug/Logger.tsx";
import DurationsDefault from "../utils/Durations.tsx";
import HTTPUtils from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import MessageConstants from "../modules/messages/MessageConstants.tsx";
import AppAnalyticsUtils from "../modules/app_analytics/AppAnalyticsUtils.tsx";
import NetStats from "../modules/network/NetStats.android.tsx";
import getOverlayMessageAnaylticsLocationDefault from "../modules/overlay/getOverlayMessageAnaylticsLocation.native.tsx";
import _objectWithoutProperties from "../../_runtime/metro/00109__objectWithoutProperties.js";
import DevSettingsStore from "../modules/devtools/dev_settings/DevSettingsStore.tsx";
import AuthenticationStore from "../stores/AuthenticationStore.tsx";
import NetworkStore from "../stores/NetworkStore.tsx";
import Constants from "../Constants.tsx";
import Queue from "../utils/Queue.tsx";
import size from "../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let obj, total;

let c10;
let c9;
let tmp;
let tmp2;
let unpackModuleId;
function handleEdit(messageId, fn) {
  let channelId;
  let isCrossposted;
  messageId = messageId.messageId;
  ({ channelId, isCrossposted } = messageId);
  const merged = Object.assign(messageId, Object.assign({ channelId: 0, messageId: 0, isCrossposted: 0 }));
  const abortController = new AbortController();
  const request = {
    url: constants.MESSAGE(channelId, messageId),
    body: merged,
    retries: 1,
    oldFormErrors: true,
    signal: abortController.signal,
    rejectWithError: true,
    onRequestCreated() {
      const requests = messageId.requests;
      const result = requests.set(messageId, abortController);
    },
  };
  const responseHandler = messageId.createResponseHandler(messageId, fn);
  if (isCrossposted) {
    request.failImmediatelyWhenRateLimited = true;
  }
  const HTTP = messageId(dependencyMap[12]).HTTP;
  HTTP.patch(request, responseHandler);
}
let closure_3 = ["channelId", "analyticsLocation"];
let closure_4 = ["channelId", "analyticsLocation"];
({ AbortCodes: c9, Endpoints: c10, AnalyticEvents: unpackModuleId } = Constants);
let closure_12 = MessageConstants.MESSAGE_HTTP_TIMEOUT_RETRY_OPTIONS;
const MessageDataType = {
  SEND: 0,
  [0]: "SEND",
  EDIT: 1,
  [1]: "EDIT",
  COMMAND: 2,
  [2]: "COMMAND",
  SEND_ANNOUNCEMENT: 3,
  [3]: "SEND_ANNOUNCEMENT",
};
let items = [DurationsDefault.Millis.MINUTE, 5 * DurationsDefault.Millis.MINUTE];
class MessageQueue extends Queue {
  constructor() {
    let num = arg0;
    if (arg0 === undefined) {
      num = 5;
    }
    const tmp2 = new LoggerDefault("MessageQueue");
    const tmp3 = new tmp(tmp2, this, new.target, tmp, this);
    let closure_0 = tmp3;
    tmp3.requests = new Map();
    new Map();
    tmp3.analyticsTimeouts = new Map();
    tmp3.handleEdit = handleEdit;
    tmp3.maxSize = num;
    new Map();
    return tmp3;
  }
  isFull() {
    return this.queue.length >= this.maxSize;
  }
  drain(type, fn) {
    const self = this;
    const logger = this.logger;
    logger.log("Draining Message Queue with: ", type.type);
    type = type.type;
    if (obj.SEND === type) {
      self.handleSend(type.message, fn);
    } else if (obj.SEND_ANNOUNCEMENT === type) {
      const result = self.handleSendAnnouncement(type.message, fn);
    } else if (obj.EDIT === type) {
      self.handleEdit(type.message, fn);
    } else if (obj.COMMAND === type) {
      self.handleCommand(type.message, fn);
    }
  }
  cancelRequest(id2) {
    const self = this;
    let closure_0 = id2;
    const logger = this.logger;
    logger.log("Cancel message send: ", id2);
    const requests = this.requests;
    const value = requests.get(id2);
    if (value != null) {
      value.abort();
    }
    const requests2 = self.requests;
    requests2.delete(id2);
    const result = self.cancelQueueMetricTimers(id2);
    self.remove(
      (type) =>
        (type.type === obj.SEND || type.type === obj.SEND_ANNOUNCEMENT || type.type === obj.COMMAND) &&
        type.message.nonce === id2,
    );
  }
  cancelPendingSendRequests(c0) {
    const self = this;
    items = [];
    const items1 = [];
    if (this.queue.length > 0) {
      while (true) {
        let queue = self.queue;
        let arr = queue.shift();
        let message = arr.message;
        if (message.type === obj.SEND) {
          if (message.message.channelId === c0) {
            let arr2 = items.push(message.message);
            if (self.queue.length <= 0) {
              break;
            }
          }
        }
        let arr3 = items1.push(arr);
      }
    }
    const queue1 = self.queue;
    const items2 = [...items1];
    queue1.push.apply(items2);
    const logger = self.logger;
    logger.log("Cancel pending send requests", items.length);
    return items;
  }
  clear() {
    const self = this;
    const requests1 = this.requests;
    const item = requests1.forEach((abort) => abort.abort());
    const requests = this.requests;
    requests.clear();
    const analyticsTimeouts = this.analyticsTimeouts;
    const item1 = analyticsTimeouts.forEach((item, index) => self.cancelQueueMetricTimers(index));
    super.clear();
  }
  startQueueMetricTimers(nonce) {
    const analyticsTimeouts = this.analyticsTimeouts;
    const result = analyticsTimeouts.set(
      nonce,
      items.map((item) => {
        const queued_duration_ms = item;
        return setTimeout(() => {
          obj = AppAnalyticsUtils;
          const obj2 = { queued_duration_ms };
          obj.trackWithMetadata(constants.SEND_MESSAGE_QUEUED, obj2);
        }, item);
      }),
    );
  }
  cancelQueueMetricTimers(index) {
    const analyticsTimeouts = this.analyticsTimeouts;
    const value = analyticsTimeouts.get(index);
    if (value != null) {
      const _clearTimeout = clearTimeout;
      const item = value.forEach(clearTimeout);
    }
    const analyticsTimeouts2 = this.analyticsTimeouts;
    analyticsTimeouts2.delete(index);
  }
  createResponseHandler(nonce, fn) {
    const self = this;
    let closure_1 = nonce;
    let closure_0 = fn;
    return (hasErr) => {
      if (null != nonce) {
        const requests = self.requests;
        requests.delete(nonce);
        const result = self.cancelQueueMetricTimers(nonce);
      }
      if (hasErr.hasErr) {
        return fn(null, hasErr);
      } else if (null == hasErr.body) {
        if (429 === hasErr.status) {
          const _parseInt = parseInt;
          const parsed = parseInt(hasErr.headers["retry-after"]);
          const _isNaN = isNaN;
          if (isNaN(parsed)) {
            fn(null, hasErr);
          } else {
            obj = { retryAfter: parsed * DurationsDefault.Millis.SECOND };
            fn(obj);
          }
        } else {
          fn(null, hasErr);
        }
      } else {
        fn(null, hasErr);
      }
    };
  }
  handleSend(nonce, fn) {
    let analyticsLocation;
    let channelId;
    let tmp4;
    ({ channelId, analyticsLocation } = nonce);
    const tmp = _objectWithoutProperties(nonce, closure_3);
    let tmp3 = getOverlayMessageAnaylticsLocationDefault();
    if (tmp3 == null) {
      tmp3 = analyticsLocation;
    }
    if (null != tmp3) {
      tmp4 = { location: tmp3 };
    }
    const obj2 = NetStats;
    const signalStrength = obj2.getSignalStrength();
    const obj3 = { mobile_network_type: NetworkStore.getType() };
    const merged = Object.assign(tmp);
    let tmp8 = null != signalStrength;
    if (tmp8) {
      tmp8 = { signal_strength: signalStrength };
      const obj4 = { signal_strength: signalStrength };
    }
    const self = this;
    const merged1 = Object.assign(tmp8);
    if (DevSettingsStore.get("send_fail_100")) {
      const logger = self.logger;
      logger.log("Skipping message send because send_fail_100 is enabled");
      const response = { ok: false, hasErr: false, status: 500, headers: {}, body: "{}", text: "Simulated failure" };
      fn(null, response);
    } else {
      const _AbortController = AbortController;
      const self2 = this;
      const self3 = this;
      const responseHandler = self.createResponseHandler(nonce.nonce, fn);
      const abortController = new AbortController();
      if (null != nonce.nonce) {
        const requests = self.requests;
        const result = requests.set(nonce.nonce, abortController);
      }
      const result1 = self.startQueueMetricTimers(nonce.nonce);
      const HTTP = HTTPUtils.HTTP;
      const request = {
        url: authStore.MESSAGES(channelId),
        body: obj3,
        context: tmp4,
        oldFormErrors: true,
        signal: abortController.signal,
        rejectWithError: true,
      };
      const post = HTTP.post;
      const merged2 = Object.assign(closure_12);
      post(request, responseHandler);
    }
  }
  handleSendAnnouncement(message, fn) {
    let analyticsLocation;
    let channelId;
    let tmp4;
    ({ channelId, analyticsLocation } = message);
    const tmp = _objectWithoutProperties(message, closure_4);
    let tmp3 = getOverlayMessageAnaylticsLocationDefault();
    if (tmp3 == null) {
      tmp3 = analyticsLocation;
    }
    if (null != tmp3) {
      tmp4 = { location: tmp3 };
    }
    const obj2 = NetStats;
    const signalStrength = obj2.getSignalStrength();
    const obj3 = { mobile_network_type: NetworkStore.getType() };
    const merged = Object.assign(tmp);
    let tmp8 = null != signalStrength;
    if (tmp8) {
      tmp8 = { signal_strength: signalStrength };
      const obj4 = { signal_strength: signalStrength };
    }
    const self = this;
    const merged1 = Object.assign(tmp8);
    if (DevSettingsStore.get("send_fail_100")) {
      const logger = self.logger;
      logger.log("Skipping message send because send_fail_100 is enabled");
      const response = { ok: false, hasErr: false, status: 500, headers: {}, body: "{}", text: "Simulated failure" };
      fn(null, response);
    } else {
      const _AbortController = AbortController;
      const self2 = this;
      const self3 = this;
      const responseHandler = self.createResponseHandler(message.nonce, fn);
      const abortController = new AbortController();
      if (null != message.nonce) {
        const requests = self.requests;
        const result = requests.set(message.nonce, abortController);
      }
      const result1 = self.startQueueMetricTimers(message.nonce);
      const HTTP = HTTPUtils.HTTP;
      const request = {
        url: authStore.MESSAGES_ANNOUNCEMENT(channelId),
        body: obj3,
        context: tmp4,
        oldFormErrors: true,
        signal: abortController.signal,
        rejectWithError: true,
      };
      const post = HTTP.post;
      const merged2 = Object.assign(closure_12);
      post(request, responseHandler);
    }
  }
}
const prototype = MessageQueue.prototype;
function handleCommand(message, fn) {
  let analytics_location;
  let applicationId;
  let attachments;
  let channelId;
  let data;
  let sectionName;
  let source;
  const self = this;
  const guildId = message.guildId;
  const nonce = message.nonce;
  ({ attachments, maxSizeCallback: require } = message);
  const body = {
    type: require("InteractionTypes").InteractionTypes.APPLICATION_COMMAND,
    application_id: applicationId,
    guild_id: guildId,
    channel_id: channelId,
    session_id: AuthenticationStore.getSessionId(),
    data,
    nonce,
    analytics_location,
    section_name: sectionName,
    source,
  };
  ({ applicationId, channelId, data, analytics_location, sectionName, source } = message);
  const tmp2 = nonce;
  if (null != attachments) {
    body.data.attachments = attachments.map((status, index) => {
      const tmp = guildId(nonce[14]);
      tmp(
        status.status === require("CloudUpload").CloudUploadStatus.COMPLETED,
        "Uploads must be staged before trying to send a message",
      );
      obj = require("UploadUtils");
      return obj.getAttachmentPayload(status, index);
    });
  }
  const abortController = new AbortController();
  const requests = self.requests;
  const result = requests.set(nonce, abortController);
  const HTTP = require("HTTPUtils").HTTP;
  const request = {
    url: constants.INTERACTIONS,
    body,
    signal: abortController.signal,
    rejectWithError: true,
    onRequestCreated(on) {
      on.on("progress", (total) => {
        total = total.total;
        const getEffectiveUploadLimit = require("UploadLimits").getEffectiveUploadLimit;
        require("UploadLimits");
        obj = require("FileUtils");
        const effectiveUploadLimit = getEffectiveUploadLimit(obj.maxFileSize(guildId));
        const tmp3 = null != total && total > effectiveUploadLimit;
        if (tmp3) {
          self.cancelRequest(closure_1_2);
          if (closure_1_0 != null) {
            closure_1_0(effectiveUploadLimit);
          }
        }
      });
    },
  };
  HTTP.post(request, self.createResponseHandler(nonce, fn));
}
prototype["handleCommand"] = handleCommand;
const tmp6 = new LoggerDefault("MessageQueue");
const handleCommand1 = new handleCommand(
  tmp6,
  tmp2,
  tmp,
  this,
  MessageQueue,
  handleCommand,
  globalThis,
  this,
  require,
  dependencyMap,
  tmp6,
);
const map = new Map();
handleCommand1.requests = map;
const map1 = new Map();
handleCommand1.analyticsTimeouts = map1;
handleCommand1.handleEdit = handleEdit;
handleCommand1.maxSize = 5;
let result = size.fileFinishedImporting("lib/MessageQueue.tsx");

export default handleCommand1;
export { MessageDataType };
export const isMessageDataSend = function isMessageDataSend(type) {
  return type.type === obj.SEND || type.type === tmp.SEND_ANNOUNCEMENT;
};
export const isMessageDataEdit = function isMessageDataEdit(messageData) {
  return messageData.type === obj.EDIT;
};
export const isMessageDataCommand = function isMessageDataCommand(type) {
  return type.type === obj.COMMAND;
};
export const getFailedMessageId = function getFailedMessageId(messageData) {
  let id;
  const tmp2 = messageData.type === obj.SEND || messageData.type === obj.SEND_ANNOUNCEMENT;
  if (tmp2) {
    id = messageData.message.nonce;
  } else if (messageData.type === obj.EDIT) {
    id = messageData.message.messageId;
  } else {
    id = messageData.message.data.id;
  }
  return id;
};
