// discord_app/lib/MessageQueue.tsx
import timestampDefault from "../modules/debug/Logger.tsx";
import setDefault from "../utils/Durations.tsx";
import enqueueDefault from "../utils/Queue.tsx";
import getOverlayMessageAnalyticsLocationDefault from "../modules/overlay/getOverlayMessageAnaylticsLocation.native.tsx";
import closure_5 from "../../_runtime/metro/00109__objectWithoutProperties.js";
import closure_6 from "../modules/devtools/dev_settings/DevSettingsStore.tsx";
import closure_7 from "../stores/AuthenticationStore.tsx";
import closure_8 from "../stores/NetworkStore.tsx";
import ME from "../Constants.tsx";
import { MESSAGE_HTTP_TIMEOUT_RETRY_OPTIONS as closure_12 } from "../modules/messages/MessageConstants.tsx";

let handleCommand = arg1;
let closure_3 = ["channelId", "analyticsLocation"];
let closure_4 = ["channelId", "analyticsLocation"];
({ AbortCodes: c9, Endpoints: c10, AnalyticEvents: unpackModuleId } = ME);
let obj = { SEND: 0, [0]: "SEND", EDIT: 1, [1]: "EDIT", COMMAND: 2, [2]: "COMMAND", SEND_ANNOUNCEMENT: 3, [3]: "SEND_ANNOUNCEMENT" };
let items = [setDefault.Millis.MINUTE, 5 * setDefault.Millis.MINUTE];
enqueueDefault;
class MessageQueue extends tmp5 {
  constructor() {
    num = global;
    if (global === undefined) {
      num = 5;
    }
    tmp2 = new require("timestamp")("MessageQueue");
    tmp = new tmp(tmp2, new.target, new.target, tmp, new.target);
    // ThrowIfThisInitialized (0x7c)
    closure_0 = tmp;
    map = new Map();
    tmp.requests = map;
    map1 = new Map();
    tmp.analyticsTimeouts = map1;
    tmp.handleEdit = function handleEdit(messageId) {
      messageId = messageId.messageId;
      ({ channelId, isCrossposted } = messageId);
      let abortController;
      const merged = Object.assign(messageId, Object.create(null));
      abortController = new AbortController();
      obj = {
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
        obj.failImmediatelyWhenRateLimited = true;
      }
      const HTTP = callback(closure_1_2[12]).HTTP;
      HTTP.patch(obj, messageId.createResponseHandler(messageId, arg1));
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
    item1 = analyticsTimeouts.forEach((arg0, closure_2) => self.cancelQueueMetricTimers(closure_2));
    clearResult1 = super.clear();
    return;
  }
}
const prototype = MessageQueue.prototype;
prototype["isFull"] = function isFull() {
  return this.queue.length >= this.maxSize;
};
prototype["drain"] = function drain(type) {
  const self = this;
  const logger = this.logger;
  logger.log("Draining Message Queue with: ", type.type);
  type = type.type;
  if (obj.SEND === type) {
    self.handleSend(type.message, arg1);
  } else if (tmp2.SEND_ANNOUNCEMENT === type) {
    const result = self.handleSendAnnouncement(type.message, arg1);
  } else if (tmp2.EDIT === type) {
    self.handleEdit(type.message, arg1);
  } else if (tmp2.COMMAND === type) {
    self.handleCommand(type.message, arg1);
  }
};
prototype["cancelRequest"] = function cancelRequest(closure_2) {
  const self = this;
  closure_0 = closure_2;
  const logger = this.logger;
  logger.log("Cancel message send: ", closure_2);
  const requests = this.requests;
  const value = requests.get(closure_2);
  if (value != null) {
    value.abort();
  }
  const requests2 = self.requests;
  requests2.delete(closure_2);
  const result = self.cancelQueueMetricTimers(closure_2);
  self.remove((type) => {
    let tmp2 = type.type === closure_1_13.SEND || type.type === tmp.SEND_ANNOUNCEMENT || type.type === tmp.COMMAND;
    if (tmp2) {
      tmp2 = type.message.nonce === closure_0;
    }
    return tmp2;
  });
};
prototype["cancelPendingSendRequests"] = function cancelPendingSendRequests(closure_0) {
  const self = this;
  items = [];
  const items1 = [];
  if (this.queue.length > 0) {
    while (true) {
      let queue = self.queue;
      let arr = queue.shift();
      let message = arr.message;
      let tmp2 = obj;
      if (message.type === obj.SEND) {
        if (message.message.channelId === closure_0) {
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
  const result = analyticsTimeouts.set(nonce, items.map((arg0) => {
    closure_0 = arg0;
    return setTimeout(() => {
      obj = callback(closure_1_2[9]);
      obj = { queued_duration_ms: callback };
      obj.trackWithMetadata(closure_1_11.SEND_MESSAGE_QUEUED, obj);
    }, arg0);
  }));
};
prototype["cancelQueueMetricTimers"] = function cancelQueueMetricTimers(closure_2) {
  const analyticsTimeouts = this.analyticsTimeouts;
  const value = analyticsTimeouts.get(closure_2);
  if (value != null) {
    const _clearTimeout = clearTimeout;
    const item = value.forEach(clearTimeout);
  }
  const analyticsTimeouts2 = this.analyticsTimeouts;
  analyticsTimeouts2.delete(closure_2);
};
prototype["createResponseHandler"] = function createResponseHandler(nonce, arg1) {
  const self = this;
  closure_1 = nonce;
  closure_0 = arg1;
  return (hasErr) => {
    if (null != nonce) {
      const requests = self.requests;
      requests.delete(tmp);
      const result = self.cancelQueueMetricTimers(tmp);
    }
    if (hasErr.hasErr) {
      return callback(null, hasErr);
    } else if (null == hasErr.body) {
      if (429 === hasErr.status) {
        const _parseInt = parseInt;
        const parsed = parseInt(hasErr.headers["retry-after"]);
        const _isNaN = isNaN;
        if (isNaN(parsed)) {
          tmp12(null, hasErr);
        } else {
          obj = { retryAfter: null };
          obj[0] = parsed * nonce(self[6]).Millis.SECOND;
          tmp12(obj);
        }
      } else {
        callback(null, hasErr);
      }
    } else {
      callback(null, hasErr);
    }
  };
};
prototype["handleSend"] = function handleSend(nonce) {
  ({ channelId, analyticsLocation } = nonce);
  let tmp3 = getOverlayMessageAnalyticsLocationDefault();
  if (tmp3 == null) {
    tmp3 = analyticsLocation;
  }
  if (null != tmp3) {
    obj = { location: null };
    obj[0] = tmp3;
    const tmp4 = obj;
  }
  obj1 = handleCommand(7152);
  const signalStrength = obj1.getSignalStrength();
  obj = { mobile_network_type: store2.getType() };
  const merged = Object.assign(callback(nonce, closure_3));
  let tmp8 = null != signalStrength;
  if (tmp8) {
    obj = { signal_strength: null };
    obj[0] = signalStrength;
    tmp8 = obj;
  }
  const self = this;
  const merged1 = Object.assign(tmp8);
  if (store.get("send_fail_100")) {
    const logger = self.logger;
    logger.log("Skipping message send because send_fail_100 is enabled");
    obj1 = { ok: false, hasErr: false, status: 500, headers: null, body: "{}", text: "Simulated failure" };
    obj1[3] = {};
    arg1(null, obj1);
  } else {
    const _AbortController = AbortController;
    const abortController = new AbortController();
    if (null != nonce.nonce) {
      const requests = self.requests;
      const result = requests.set(nonce.nonce, abortController);
    }
    const result1 = self.startQueueMetricTimers(nonce.nonce);
    const HTTP = tmp5(530).HTTP;
    const obj2 = { url: null, body: null, context: null, oldFormErrors: true };
    obj2[0] = closure_10.MESSAGES(channelId);
    obj2[1] = obj;
    obj2[2] = tmp4;
    const merged2 = Object.assign(closure_12);
    obj2.signal = abortController.signal;
    obj2.rejectWithError = true;
    HTTP.post(obj2, self.createResponseHandler(nonce.nonce, arg1));
  }
  const tmp = callback(nonce, closure_3);
  tmp5 = handleCommand;
};
prototype["handleSendAnnouncement"] = function handleSendAnnouncement(message, arg1) {
  ({ channelId, analyticsLocation } = message);
  let tmp3 = getOverlayMessageAnalyticsLocationDefault();
  if (tmp3 == null) {
    tmp3 = analyticsLocation;
  }
  if (null != tmp3) {
    obj = { location: null };
    obj[0] = tmp3;
    const tmp4 = obj;
  }
  obj1 = handleCommand(7152);
  const signalStrength = obj1.getSignalStrength();
  obj = { mobile_network_type: store2.getType() };
  const merged = Object.assign(callback(message, closure_4));
  let tmp8 = null != signalStrength;
  if (tmp8) {
    obj = { signal_strength: null };
    obj[0] = signalStrength;
    tmp8 = obj;
  }
  const self = this;
  const merged1 = Object.assign(tmp8);
  if (store.get("send_fail_100")) {
    const logger = self.logger;
    logger.log("Skipping message send because send_fail_100 is enabled");
    obj1 = { ok: false, hasErr: false, status: 500, headers: null, body: "{}", text: "Simulated failure" };
    obj1[3] = {};
    arg1(null, obj1);
  } else {
    const _AbortController = AbortController;
    const abortController = new AbortController();
    if (null != message.nonce) {
      const requests = self.requests;
      const result = requests.set(message.nonce, abortController);
    }
    const result1 = self.startQueueMetricTimers(message.nonce);
    const HTTP = tmp5(530).HTTP;
    const obj2 = { url: null, body: null, context: null, oldFormErrors: true };
    obj2[0] = closure_10.MESSAGES_ANNOUNCEMENT(channelId);
    obj2[1] = obj;
    obj2[2] = tmp4;
    const merged2 = Object.assign(closure_12);
    obj2.signal = abortController.signal;
    obj2.rejectWithError = true;
    HTTP.post(obj2, self.createResponseHandler(message.nonce, arg1));
  }
  const tmp = callback(message, closure_4);
  tmp5 = handleCommand;
};
handleCommand = function handleCommand(message, arg1, arg2, arg3, MessageQueue, handleCommand, arg6, arg7, arg8, dependencyMap, arg10) {
  let self = this;
  self = this;
  const guildId = message.guildId;
  const nonce = message.nonce;
  ({ attachments, maxSizeCallback: handleCommand } = message);
  obj = { type: handleCommand(nonce[13]).InteractionTypes.APPLICATION_COMMAND, application_id: applicationId, guild_id: guildId, channel_id: channelId, session_id: sessionId.getSessionId(), data, nonce, analytics_location, section_name: sectionName, source };
  ({ applicationId, channelId, data, analytics_location, sectionName, source } = message);
  if (null != attachments) {
    obj.data.attachments = attachments.map((status, closure_1) => {
      guildId(nonce[14])(status.status === callback(nonce[15]).CloudUploadStatus.COMPLETED, "Uploads must be staged before trying to send a message");
      const tmp = guildId(nonce[14]);
      return callback(nonce[16]).getAttachmentPayload(status, closure_1);
    });
  }
  const abortController = new AbortController();
  const requests = self.requests;
  const result = requests.set(nonce, abortController);
  const HTTP = handleCommand(nonce[12]).HTTP;
  obj = {
    url: closure_10.INTERACTIONS,
    body: obj,
    signal: abortController.signal,
    rejectWithError: true,
    onRequestCreated(on) {
      on.on("progress", (total) => {
        total = total.total;
        const maxFileSizeResult = closure_1_0(closure_1_2[17]).maxFileSize(closure_1);
        if (tmp2) {
          closure_3.cancelRequest(closure_2);
          if (callback != null) {
            callback(maxFileSizeResult);
          }
        }
      });
    }
  };
  HTTP.post(obj, self.createResponseHandler(nonce, arg1));
};
prototype["handleCommand"] = handleCommand;
const tmp6 = new timestampDefault("MessageQueue");
handleCommand = new handleCommand(tmp6, tmp2, tmp, new.target, MessageQueue, handleCommand, globalThis, new.target, arg1, dependencyMap, tmp6);
// ThrowIfThisInitialized (0x7c)
handleCommand.requests = new Map();
let map = new Map();
handleCommand.analyticsTimeouts = new Map();
handleCommand.handleEdit = function handleEdit(messageId) {
  messageId = messageId.messageId;
  ({ channelId, isCrossposted } = messageId);
  let abortController;
  const merged = Object.assign(messageId, Object.create(null));
  abortController = new AbortController();
  obj = {
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
    obj.failImmediatelyWhenRateLimited = true;
  }
  const HTTP = callback(closure_1_2[12]).HTTP;
  HTTP.patch(obj, messageId.createResponseHandler(messageId, arg1));
};
handleCommand.maxSize = 5;
const map1 = new Map();
let result = require("set").fileFinishedImporting("lib/MessageQueue.tsx");

export default handleCommand;
export const MessageDataType = obj;
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