// discord_app/modules/chat/native/ChatUpdatesQueue.tsx
import get_ActivityIndicator from "get ActivityIndicator";

const NativeEventEmitter = get_ActivityIndicator.NativeEventEmitter;
const DCDChatBlockerManager = get_ActivityIndicator.NativeModules.DCDChatBlockerManager;
const result = require("set").fileFinishedImporting("modules/chat/native/ChatUpdatesQueue.tsx");
class ChatUpdatesQueue {
  constructor(arg0, arg1) {
    obj = Object.create(new.target.prototype);
    NativeEventEmitter = obj;
    set = new Set();
    obj.blockers = set;
    obj.queue = [];
    obj.queueStartTimestamp = null;
    obj.setOnFlushItem = function setOnFlushItem(onFlushItem) {
      obj.onFlushItem = onFlushItem;
    };
    obj.getReactTag = global;
    obj.onFlushItem = require;
    tmp3 = new NativeEventEmitter(DCDChatBlockerManager);
    obj.eventEmitter = tmp3;
    eventEmitter = obj.eventEmitter;
    obj.addBlockerSubscription = eventEmitter.addListener("AddBlocker", (reactTag) => {
      reactTag = reactTag.reactTag;
      if (tmp) {
        obj.addBlocker(reactTag.blockerId);
      }
    });
    eventEmitter2 = obj.eventEmitter;
    obj.removeBlockerSubscription = eventEmitter2.addListener("RemoveBlocker", (reactTag) => {
      reactTag = reactTag.reactTag;
      if (tmp) {
        obj.removeBlocker(reactTag.blockerId);
      }
    });
    return obj;
  }
}
const prototype = ChatUpdatesQueue.prototype;
prototype["hasUpdates"] = function hasUpdates() {
  return this.queue.length > 0;
};
Object.defineProperty(prototype, "isBlocking", {
  get: function isBlocking() {
    let hasUpdatesResult = this.hasUpdates();
    if (!hasUpdatesResult) {
      hasUpdatesResult = this.blockers.size > 0;
    }
    return hasUpdatesResult;
  },
  set: undefined
});
prototype["addBlocker"] = function addBlocker(blockerId) {
  if (null != blockerId) {
    const self = this;
    const blockers = this.blockers;
    blockers.add(blockerId);
  }
};
prototype["removeBlocker"] = function removeBlocker(blockerId) {
  if (null != blockerId) {
    const self = this;
    const blockers = this.blockers;
    blockers.delete(blockerId);
    if (0 === this.blockers.size) {
      self.flush();
    }
  }
};
prototype["add"] = function add(arg0) {
  const self = this;
  if (null == this.queueStartTimestamp) {
    const _Date = Date;
    self.queueStartTimestamp = Date.now();
  }
  const queue = self.queue;
  queue.push(arg0);
  let tmp3 = self.queue.length > 100;
  let tmp4 = null != self.queueStartTimestamp;
  if (tmp4) {
    const _Date2 = Date;
    tmp4 = Date.now() - self.queueStartTimestamp > 30000;
  }
  if (!tmp3) {
    tmp3 = tmp4;
  }
  if (tmp3) {
    const blockers = self.blockers;
    blockers.clear();
    self.flush();
  }
};
prototype["tryFlush"] = function tryFlush() {
  const self = this;
  if (0 === this.blockers.size) {
    self.flush();
  }
};
prototype["clear"] = function clear() {
  this.queue = [];
  this.queueStartTimestamp = null;
};
prototype["flush"] = function flush() {
  const self = this;
  this.queueStartTimestamp = null;
  const queue = this.queue;
  const item = queue.forEach((arg0) => {
    if (null != arg0) {
      const onFlushItem = self.onFlushItem;
      if (onFlushItem != null) {
        onFlushItem(arg0);
      }
    }
  });
  this.queue = [];
};
prototype["cleanup"] = function cleanup() {
  const addBlockerSubscription = this.addBlockerSubscription;
  addBlockerSubscription.remove();
  const removeBlockerSubscription = this.removeBlockerSubscription;
  removeBlockerSubscription.remove();
};

export default ChatUpdatesQueue;