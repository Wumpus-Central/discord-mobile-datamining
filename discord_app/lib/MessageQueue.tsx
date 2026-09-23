// === Module 8161: MessageQueue ===

// Module 8161 (MessageQueue)
import LoggerDefault from "Logger" /* 3 */;
import DurationsDefault from "Durations" /* 1091 */;
import getOverlayMessageAnaylticsLocationDefault from "getOverlayMessageAnaylticsLocation" /* 8163 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import DevSettingsStore from "DevSettingsStore" /* 4826 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import NetworkStore from "NetworkStore" /* 4876 */;
import Queue from "Queue" /* 8162 */;

let handleCommand1 = fn;
let closure_3 = ["channelId", "analyticsLocation"];
let closure_4 = ["channelId", "analyticsLocation"];
const Constants = fn(1074);
({ AbortCodes: closure_9, Endpoints: c10, AnalyticEvents: closure_11 } = Constants);
let closure_12 = fn(4820).MESSAGE_HTTP_TIMEOUT_RETRY_OPTIONS;
const MessageDataType = { SEND: 0, [0]: "SEND", EDIT: 1, [1]: "EDIT", COMMAND: 2, [2]: "COMMAND", SEND_ANNOUNCEMENT: 3, [3]: "SEND_ANNOUNCEMENT" };
let items = [DurationsDefault.Millis.MINUTE, 5 * DurationsDefault.Millis.MINUTE];
class MessageQueue extends tmp5 {
  constructor() {
    num = global;
    if (global === undefined) {
      num = 5;
    }
    tmp2 = new closure_1(closure_2[8])("MessageQueue");
    tmp1 = new tmp(tmp2, new.target, new.target, tmp, new.target);
    closure_0 = tmp1;
    map = new Map();
    tmp1.requests = map;
    map1 = new Map();
    tmp1.analyticsTimeouts = map1;
    tmp1.handleEdit = function handleEdit(messageId, fn) {
      messageId = messageId.messageId;
      ({ channelId, isCrossposted } = messageId);
      const merged = Object.assign(messageId, Object.assign({ channelId: 0, messageId: 0, isCrossposted: 0 }));
      const abortController = new AbortController();
      const request = {
        url: closure_1_10.MESSAGE(channelId, messageId),
        body: merged,
        retries: 1,
        oldFormErrors: true,
        signal: abortController.signal,
        rejectWithError: true,
        onRequestCreated() {
          const requests = messageId.requests;
          const result = requests.set(messageId, abortController);
        }
      };
      if (isCrossposted) {
        request.failImmediatelyWhenRateLimited = true;
      }
      const HTTP = messageId(dependencyMap[12]).HTTP;
      HTTP.patch(request, messageId.createResponseHandler(messageId, fn));
    };
    tmp1.maxSize = num;
    return tmp1;
  }
  clear() {
    self = this;
    requests1 = this.requests;
    item = requests1.forEach((abort) => abort.abort());
    requests = this.requests;
    clearResult = requests.clear();
    analyticsTimeouts = this.analyticsTimeouts;
    item1 = analyticsTimeouts.forEach((item, index) => self.cancelQueueMetricTimers(index));
    clearResult1 = super.clear();
    return;
  }
}
const prototype = MessageQueue.prototype;
prototype["isFull"] = function isFull() {
  return this.queue.length >= this.maxSize;
};
prototype["drain"] = function drain(type, fn) {
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
};
prototype["cancelRequest"] = function cancelRequest(id2) {
  const self = this;
  closure_0 = id2;
  const logger = this.logger;
  logger.log("Cancel message send: ", id2);
  const requests = this.requests;
  value = requests.get(id2);
  if (value != null) {
    value.abort();
  }
  const requests2 = self.requests;
  requests2.delete(id2);
  const result = self.cancelQueueMetricTimers(id2);
  self.remove((type) => {
    let tmp2 = type.type === obj.SEND || type.type === obj.SEND_ANNOUNCEMENT || type.type === obj.COMMAND;
    if (tmp2) {
      tmp2 = type.message.nonce === closure_0;
    }
    return tmp2;
  });
};
prototype["cancelPendingSendRequests"] = function cancelPendingSendRequests(c0) {
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
};
prototype["startQueueMetricTimers"] = function startQueueMetricTimers(nonce) {
  const analyticsTimeouts = this.analyticsTimeouts;
  const result = analyticsTimeouts.set(nonce, items.map((item) => {
    const queued_duration_ms = item;
    return setTimeout(() => {
      handleCommand1(dependencyMap[9]).trackWithMetadata(constants.SEND_MESSAGE_QUEUED, { queued_duration_ms });
    }, item);
  }));
};
prototype["cancelQueueMetricTimers"] = function cancelQueueMetricTimers(index) {
  const analyticsTimeouts = this.analyticsTimeouts;
  value = analyticsTimeouts.get(index);
  if (value != null) {
    const _clearTimeout = clearTimeout;
    const item = value.forEach(clearTimeout);
  }
  const analyticsTimeouts2 = this.analyticsTimeouts;
  analyticsTimeouts2.delete(index);
};
prototype["createResponseHandler"] = function createResponseHandler(nonce, fn) {
  const self = this;
  closure_1 = nonce;
  closure_0 = fn;
  return (hasErr) => {
    if (null != closure_1) {
      const requests = self.requests;
      requests.delete(closure_1);
      const result = self.cancelQueueMetricTimers(closure_1);
    }
    if (hasErr.hasErr) {
      return closure_0(null, hasErr);
    } else if (null == hasErr.body) {
      if (429 === hasErr.status) {
        const _parseInt = parseInt;
        const parsed = parseInt(hasErr.headers["retry-after"]);
        const _isNaN = isNaN;
        if (isNaN(parsed)) {
          closure_0(null, hasErr);
        } else {
          obj = { retryAfter: parsed * DurationsDefault.Millis.SECOND };
          closure_0(obj);
        }
      } else {
        closure_0(null, hasErr);
      }
    } else {
      closure_0(null, hasErr);
    }
  };
};
prototype["handleSend"] = function handleSend(nonce, fn) {
  ({ channelId, analyticsLocation } = nonce);
  let tmp3 = getOverlayMessageAnaylticsLocationDefault();
  if (tmp3 == null) {
    tmp3 = analyticsLocation;
  }
  if (null != tmp3) {
    obj = { location: tmp3 };
    const tmp4 = obj;
  }
  const tmp = _objectWithoutProperties(nonce, closure_3);
  const signalStrength = handleCommand1(7787).getSignalStrength();
  const obj2 = handleCommand1(7787);
  const merged = Object.assign(tmp);
  let tmp8 = null != signalStrength;
  if (tmp8) {
    const obj4 = { signal_strength: signalStrength };
    tmp8 = obj4;
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
    const abortController = new AbortController();
    if (null != nonce.nonce) {
      const requests = self.requests;
      const result = requests.set(nonce.nonce, abortController);
    }
    const result1 = self.startQueueMetricTimers(nonce.nonce);
    const HTTP = handleCommand1(1271).HTTP;
    const request = { url: closure_1_10.MESSAGES(channelId), body: obj3, context: tmp4, oldFormErrors: true };
    const merged2 = Object.assign(closure_12);
    request.signal = abortController.signal;
    request.rejectWithError = true;
    HTTP.post(request, self.createResponseHandler(nonce.nonce, fn));
    const responseHandler = self.createResponseHandler(nonce.nonce, fn);
  }
  obj3 = { mobile_network_type: NetworkStore.getType() };
};
prototype["handleSendAnnouncement"] = function handleSendAnnouncement(message, fn) {
  ({ channelId, analyticsLocation } = message);
  let tmp3 = getOverlayMessageAnaylticsLocationDefault();
  if (tmp3 == null) {
    tmp3 = analyticsLocation;
  }
  if (null != tmp3) {
    obj = { location: tmp3 };
    const tmp4 = obj;
  }
  const tmp = _objectWithoutProperties(message, closure_4);
  const signalStrength = handleCommand1(7787).getSignalStrength();
  const obj2 = handleCommand1(7787);
  const merged = Object.assign(tmp);
  let tmp8 = null != signalStrength;
  if (tmp8) {
    const obj4 = { signal_strength: signalStrength };
    tmp8 = obj4;
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
    const abortController = new AbortController();
    if (null != message.nonce) {
      const requests = self.requests;
      const result = requests.set(message.nonce, abortController);
    }
    const result1 = self.startQueueMetricTimers(message.nonce);
    const HTTP = handleCommand1(1271).HTTP;
    const request = { url: closure_1_10.MESSAGES_ANNOUNCEMENT(channelId), body: obj3, context: tmp4, oldFormErrors: true };
    const merged2 = Object.assign(closure_12);
    request.signal = abortController.signal;
    request.rejectWithError = true;
    HTTP.post(request, self.createResponseHandler(message.nonce, fn));
    const responseHandler = self.createResponseHandler(message.nonce, fn);
  }
  obj3 = { mobile_network_type: NetworkStore.getType() };
};
function handleCommand(message, fn) {
  const self = this;
  const guildId = message.guildId;
  const nonce = message.nonce;
  ({ attachments, maxSizeCallback: handleCommand1 } = message);
  const body = { type: handleCommand1(nonce[13]).InteractionTypes.APPLICATION_COMMAND, application_id: applicationId, guild_id: guildId, channel_id: channelId, session_id: AuthenticationStore.getSessionId(), data, nonce, analytics_location, section_name: sectionName, source };
  ({ applicationId, channelId, data, analytics_location, sectionName, source } = message);
  if (null != attachments) {
    body.data.attachments = attachments.map((status, index) => {
      guildId(nonce[14])(status.status === handleCommand1(nonce[15]).CloudUploadStatus.COMPLETED, "Uploads must be staged before trying to send a message");
      const tmp = guildId(nonce[14]);
      return handleCommand1(nonce[16]).getAttachmentPayload(status, index);
    });
  }
  const abortController = new AbortController();
  const requests = self.requests;
  const result = requests.set(nonce, abortController);
  const HTTP = handleCommand1(nonce[12]).HTTP;
  const request = {
    url: closure_10.INTERACTIONS,
    body,
    signal: abortController.signal,
    rejectWithError: true,
    onRequestCreated(on) {
      on.on("progress", (total) => {
        total = total.total;
        obj = handleCommand1(nonce[17]);
        const effectiveUploadLimit = obj.getEffectiveUploadLimit(handleCommand1(nonce[18]).maxFileSize(guildId));
        if (tmp2) {
          self.cancelRequest(closure_1_2);
          if (closure_1_0 != null) {
            closure_1_0(effectiveUploadLimit);
          }
        }
        const obj2 = handleCommand1(nonce[18]);
        tmp2 = null != total && total > effectiveUploadLimit;
      });
    }
  };
  HTTP.post(request, self.createResponseHandler(nonce, fn));
}
prototype["handleCommand"] = handleCommand;
const tmp6 = new LoggerDefault("MessageQueue");
handleCommand1 = new handleCommand(tmp6, tmp2, tmp, new.target, MessageQueue, handleCommand, globalThis, new.target, fn, dependencyMap, tmp6);
handleCommand1.requests = new Map();
let map = new Map();
handleCommand1.analyticsTimeouts = new Map();
handleCommand1.handleEdit = function handleEdit(messageId, fn) {
  messageId = messageId.messageId;
  ({ channelId, isCrossposted } = messageId);
  const merged = Object.assign(messageId, Object.assign({ channelId: 0, messageId: 0, isCrossposted: 0 }));
  const abortController = new AbortController();
  const request = {
    url: closure_1_10.MESSAGE(channelId, messageId),
    body: merged,
    retries: 1,
    oldFormErrors: true,
    signal: abortController.signal,
    rejectWithError: true,
    onRequestCreated() {
      const requests = messageId.requests;
      const result = requests.set(messageId, abortController);
    }
  };
  if (isCrossposted) {
    request.failImmediatelyWhenRateLimited = true;
  }
  const HTTP = messageId(dependencyMap[12]).HTTP;
  HTTP.patch(request, messageId.createResponseHandler(messageId, fn));
};
handleCommand1.maxSize = 5;
const size = fn(2);
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
  if (tmp2) {
    let id = messageData.message.nonce;
  } else if (messageData.type === obj.EDIT) {
    id = messageData.message.messageId;
  } else {
    id = messageData.message.data.id;
  }
  return id;
};