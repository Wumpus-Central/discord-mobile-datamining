// === Module 7834: MessageQueue ===

// Module 7834 (MessageQueue)
import LoggerDefault from "Logger" /* 3 */;
import DurationsDefault from "Durations" /* 1090 */;
import getOverlayMessageAnaylticsLocationDefault from "getOverlayMessageAnaylticsLocation" /* 7836 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import DevSettingsStore from "DevSettingsStore" /* 4559 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import NetworkStore from "NetworkStore" /* 4609 */;
import Queue from "Queue" /* 7835 */;

let handleCommand = fn;
let closure_3 = ["channelId", "analyticsLocation"];
let closure_4 = ["channelId", "analyticsLocation"];
const Constants = fn(1074);
({ AbortCodes: closure_9, Endpoints: c10, AnalyticEvents: closure_11 } = Constants);
let closure_12 = fn(4553).MESSAGE_HTTP_TIMEOUT_RETRY_OPTIONS;
const MessageDataType = { SEND: 0, [0]: "SEND", EDIT: 1, [1]: "EDIT", COMMAND: 2, [2]: "COMMAND", SEND_ANNOUNCEMENT: 3, [3]: "SEND_ANNOUNCEMENT" };
let items = [DurationsDefault.Millis.MINUTE, 5 * DurationsDefault.Millis.MINUTE];
class MessageQueue extends tmp5 {
  constructor() {
    num = global;
    if (global === undefined) {
      num = 5;
    }
    tmp2 = new closure_1(closure_2[8])("MessageQueue");
    tmp = new tmp(tmp2, new.target, new.target, tmp, new.target);
    closure_0 = tmp;
    map = new Map();
    tmp.requests = map;
    map1 = new Map();
    tmp.analyticsTimeouts = map1;
    tmp.handleEdit = function handleEdit(messageId, fn) {
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
    tmp.maxSize = num;
    return tmp;
  }
  clear() {
    self = this;
    requests = this.requests;
    item = requests.forEach((abort) => abort.abort());
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
  } else if (tmp2.SEND_ANNOUNCEMENT === type) {
    const result = self.handleSendAnnouncement(type.message, fn);
  } else if (tmp2.EDIT === type) {
    self.handleEdit(type.message, fn);
  } else if (tmp2.COMMAND === type) {
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
    let tmp2 = type.type === obj.SEND || type.type === tmp.SEND_ANNOUNCEMENT || type.type === tmp.COMMAND;
    if (tmp2) {
      tmp2 = type.message.nonce === closure_0;
    }
    return tmp2;
  });
};
prototype["cancelPendingSendRequests"] = function cancelPendingSendRequests(arg0) {
  const self = this;
  items = [];
  const items1 = [];
  if (this.queue.length > 0) {
    while (true) {
      let queue = self.queue;
      let arr = queue.shift();
      let message = arr.message;
      if (message.type === obj.SEND) {
        if (message.message.channelId === arg0) {
          arr = items.push(message.message);
          if (self.queue.length <= 0) {
            break;
          }
        }
      }
      let arr1 = items1.push(arr);
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
      handleCommand(dependencyMap[9]);
      obj = { queued_duration_ms };
      obj.trackWithMetadata(constants.SEND_MESSAGE_QUEUED, obj);
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
      requests.delete(tmp);
      const result = self.cancelQueueMetricTimers(tmp);
    }
    if (hasErr.hasErr) {
      return closure_0(null, hasErr);
    } else if (null == hasErr.body) {
      if (429 === hasErr.status) {
        const _parseInt = parseInt;
        const parsed = parseInt(hasErr.headers["retry-after"]);
        const _isNaN = isNaN;
        if (isNaN(parsed)) {
          tmp12(null, hasErr);
        } else {
          obj = { retryAfter: parsed * DurationsDefault.Millis.SECOND };
          tmp12(obj);
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
    let body = { location: tmp3 };
    const tmp4 = body;
  }
  const tmp = _objectWithoutProperties(nonce, closure_3);
  const tmp5 = handleCommand;
  const signalStrength = handleCommand(7459).getSignalStrength();
  body = { mobile_network_type: NetworkStore.getType() };
  const merged = Object.assign(tmp);
  let tmp8 = null != signalStrength;
  if (tmp8) {
    body = { signal_strength: signalStrength };
    tmp8 = body;
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
    const HTTP = tmp5(1272).HTTP;
    const request = { url: closure_1_10.MESSAGES(channelId), body, context: tmp4, oldFormErrors: true };
    const merged2 = Object.assign(closure_12);
    request.signal = abortController.signal;
    request.rejectWithError = true;
    HTTP.post(request, self.createResponseHandler(nonce.nonce, fn));
  }
  const obj2 = handleCommand(7459);
};
prototype["handleSendAnnouncement"] = function handleSendAnnouncement(message, fn) {
  ({ channelId, analyticsLocation } = message);
  let tmp3 = getOverlayMessageAnaylticsLocationDefault();
  if (tmp3 == null) {
    tmp3 = analyticsLocation;
  }
  if (null != tmp3) {
    let body = { location: tmp3 };
    const tmp4 = body;
  }
  const tmp = _objectWithoutProperties(message, closure_4);
  const tmp5 = handleCommand;
  const signalStrength = handleCommand(7459).getSignalStrength();
  body = { mobile_network_type: NetworkStore.getType() };
  const merged = Object.assign(tmp);
  let tmp8 = null != signalStrength;
  if (tmp8) {
    body = { signal_strength: signalStrength };
    tmp8 = body;
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
    const HTTP = tmp5(1272).HTTP;
    const request = { url: closure_1_10.MESSAGES_ANNOUNCEMENT(channelId), body, context: tmp4, oldFormErrors: true };
    const merged2 = Object.assign(closure_12);
    request.signal = abortController.signal;
    request.rejectWithError = true;
    HTTP.post(request, self.createResponseHandler(message.nonce, fn));
  }
  const obj2 = handleCommand(7459);
};
handleCommand = function handleCommand(dependencyMap, fn) {
  const self = this;
  const guildId = dependencyMap.guildId;
  const nonce = dependencyMap.nonce;
  ({ attachments, maxSizeCallback: handleCommand } = dependencyMap);
  const body = { type: handleCommand(nonce[13]).InteractionTypes.APPLICATION_COMMAND, application_id: applicationId, guild_id: guildId, channel_id: channelId, session_id: AuthenticationStore.getSessionId(), data, nonce, analytics_location, section_name: sectionName, source };
  ({ applicationId, channelId, data, analytics_location, sectionName, source } = dependencyMap);
  if (null != attachments) {
    body.data.attachments = attachments.map((status, index) => {
      guildId(nonce[14])(status.status === handleCommand(nonce[15]).CloudUploadStatus.COMPLETED, "Uploads must be staged before trying to send a message");
      const tmp = guildId(nonce[14]);
      return handleCommand(nonce[16]).getAttachmentPayload(status, index);
    });
  }
  const abortController = new AbortController();
  const requests = self.requests;
  const result = requests.set(nonce, abortController);
  const HTTP = handleCommand(nonce[12]).HTTP;
  const request = {
    url: closure_10.INTERACTIONS,
    body,
    signal: abortController.signal,
    rejectWithError: true,
    onRequestCreated(on) {
      on.on("progress", (total) => {
        total = total.total;
        const maxFileSizeResult = handleCommand(nonce[17]).maxFileSize(guildId);
        if (tmp2) {
          self.cancelRequest(closure_1_2);
          if (closure_1_0 != null) {
            closure_1_0(maxFileSizeResult);
          }
        }
      });
    }
  };
  HTTP.post(request, self.createResponseHandler(nonce, fn));
};
prototype["handleCommand"] = handleCommand;
const tmp6 = new LoggerDefault("MessageQueue");
handleCommand = new handleCommand(tmp6, tmp2, tmp, new.target, MessageQueue, handleCommand, globalThis, new.target, fn, dependencyMap, tmp6);
handleCommand.requests = new Map();
let map = new Map();
handleCommand.analyticsTimeouts = new Map();
handleCommand.handleEdit = function handleEdit(messageId, fn) {
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
handleCommand.maxSize = 5;
const size = fn(2);
let result = size.fileFinishedImporting("lib/MessageQueue.tsx");

export default handleCommand;
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
  } else if (messageData.type === tmp.EDIT) {
    id = messageData.message.messageId;
  } else {
    id = messageData.message.data.id;
  }
  return id;
};