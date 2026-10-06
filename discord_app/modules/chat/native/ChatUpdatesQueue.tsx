// === Module 11150: ChatUpdatesQueue ===

// Module 11150 (ChatUpdatesQueue)
import react_native from "react-native" /* 17 */;
import size from "module_2" /* 2 */;

let reactTag;

const NativeEventEmitter = react_native.NativeEventEmitter;
const DCDChatBlockerManager = react_native.NativeModules.DCDChatBlockerManager;
const result = size.fileFinishedImporting("modules/chat/native/ChatUpdatesQueue.tsx");
class ChatUpdatesQueue {
  constructor(getReactTag, onFlushItem) {
    const obj = Object.create(new.target.prototype);
    obj.blockers = new Set();
    obj.queue = [];
    obj.queueStartTimestamp = null;
    obj.setOnFlushItem = function setOnFlushItem(onFlushItem) {
      obj.onFlushItem = onFlushItem;
    };
    obj.getReactTag = getReactTag;
    obj.onFlushItem = onFlushItem;
    new Set();
    obj.eventEmitter = new NativeEventEmitter(DCDChatBlockerManager);
    const eventEmitter = obj.eventEmitter;
    new NativeEventEmitter(DCDChatBlockerManager);
    obj.addBlockerSubscription = eventEmitter.addListener("AddBlocker", (reactTag) => {
      reactTag = reactTag.reactTag;
      const blockerId = reactTag.blockerId;
      const tmp = null != reactTag && reactTag === obj.getReactTag();
      if (tmp) {
        obj.addBlocker(blockerId);
      }
    });
    const eventEmitter2 = obj.eventEmitter;
    obj.removeBlockerSubscription = eventEmitter2.addListener("RemoveBlocker", (reactTag) => {
      reactTag = reactTag.reactTag;
      const blockerId = reactTag.blockerId;
      const tmp = null != reactTag && reactTag === obj.getReactTag();
      if (tmp) {
        obj.removeBlocker(blockerId);
      }
    });
    return obj;
  }
  hasUpdates() {
    return this.queue.length > 0;
  }
  addBlocker(blockerId) {
    if (null != blockerId) {
      const self = this;
      const blockers = this.blockers;
      blockers.add(blockerId);
    }
  }
  removeBlocker(blockerId) {
    if (null != blockerId) {
      const self = this;
      const blockers = this.blockers;
      blockers.delete(blockerId);
      if (0 === this.blockers.size) {
        self.flush();
      }
    }
  }
  add(arg0) {
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
  }
  tryFlush() {
    const self = this;
    if (0 === this.blockers.size) {
      self.flush();
    }
  }
  clear() {
    this.queue = [];
    this.queueStartTimestamp = null;
  }
  flush() {
    const self = this;
    this.queueStartTimestamp = null;
    const queue = this.queue;
    const item = queue.forEach((item) => {
      if (null != item) {
        const onFlushItem = self.onFlushItem;
        if (onFlushItem != null) {
          onFlushItem(item);
        }
      }
    });
    this.queue = [];
  }
  cleanup() {
    const addBlockerSubscription = this.addBlockerSubscription;
    addBlockerSubscription.remove();
    const removeBlockerSubscription = this.removeBlockerSubscription;
    removeBlockerSubscription.remove();
  }
}
Object.defineProperty(ChatUpdatesQueue.prototype, "isBlocking", {
  get: function isBlocking() {
    const hasUpdatesResult = this.hasUpdates() || this.blockers.size > 0;
    return hasUpdatesResult;
  },
  set: undefined
});

export default ChatUpdatesQueue;