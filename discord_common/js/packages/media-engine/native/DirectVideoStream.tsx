// === Module 4951: DirectVideoStream ===

// Module 4951 (DirectVideoStream)
import inject from "inject" /* 2001 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c2, dependencyMap;

class RefCountedStream {
  constructor(arg0) {
    if (null == createDiscordStream) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Direct video streams are unavailable outside the native client");
      throw error;
    } else {
      const merged = Object.assign({ refcount: 0 });
      merged.stream = createDiscordStream(arg0);
      return merged;
    }
  }
  addref() {
    this.refcount = this.refcount + 1;
  }
  release() {
    this.refcount = this.refcount - 1;
    return 0 === this.refcount;
  }
}
const prototype = RefCountedStream.prototype;
const map = new Map();
let result = size.fileFinishedImporting("../discord_common/js/packages/media-engine/native/DirectVideoStream.tsx");

export const supportsDirectVideoStreams = function supportsDirectVideoStreams() {
  return null != window.createDiscordStream;
};
export const getDirectVideoStreamConsumerCount = function getDirectVideoStreamConsumerCount(arg0) {
  const value = map.get(arg0);
  let num;
  if (value != null) {
    num = value.refcount;
  }
  if (num == null) {
    num = 0;
  }
  return num;
};
export const acquireDirectVideoStream = function acquireDirectVideoStream(streamId) {
  _require = streamId;
  let value = map.get(streamId);
  if (null == value) {
    const self3 = this;
    if (typeof c2 === "function") {
      const _window = window;
      if (null == createDiscordStream) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("Direct video streams are unavailable outside the native client");
        throw error;
      } else {
        const merged = Object.assign({ refcount: 0 });
        merged.stream = createDiscordStream(streamId);
        const obj4 = require("inject");
        let voiceEngine = obj4.getVoiceEngine();
        let result = voiceEngine.addDirectVideoOutputSink(streamId);
        const result1 = map.set(streamId, merged);
        value = merged;
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  dependencyMap = value;
  value.addref();
  c2 = false;
  return {
    stream: value.stream,
    release() {
      const tmp = c2;
      if (!tmp) {
        c2 = true;
        if (dependencyMap.release()) {
          map.delete(streamId);
          const obj = inject;
          const voiceEngine = obj.getVoiceEngine();
          const result = voiceEngine.removeDirectVideoOutputSink(streamId);
        }
      }
    }
  };
};