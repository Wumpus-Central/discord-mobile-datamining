// === Module 4621: DirectVideoStream ===

// Module 4621 (DirectVideoStream)
import inject from "inject" /* 1910 */;
import size from "module_2" /* 2 */;

class RefCountedStream {
  constructor(arg0) {
    createDiscordStream = window.createDiscordStream;
    if (null == createDiscordStream) {
      _Error = Error;
      tmp4 = new.target;
      str = "Direct video streams are unavailable outside the native client";
      tmp5 = new.target;
      error = new Error("Direct video streams are unavailable outside the native client");
      tmp7 = error;
      throw error;
    } else {
      tmp2 = global;
      merged = Object.assign({ refcount: 0 });
      merged.stream = createDiscordStream(global);
      return merged;
    }
  }
}
const prototype = RefCountedStream.prototype;
prototype["addref"] = function addref() {
  this.refcount = this.refcount + 1;
};
prototype["release"] = function release() {
  this.refcount = this.refcount - 1;
  return 0 === this.refcount;
};
const map = new Map();
let result = size.fileFinishedImporting("../discord_common/js/packages/media-engine/native/DirectVideoStream.tsx");

export const supportsDirectVideoStreams = function supportsDirectVideoStreams() {
  return null != window.createDiscordStream;
};
export const getDirectVideoStreamConsumerCount = function getDirectVideoStreamConsumerCount(arg0) {
  value = map.get(arg0);
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
  let obj = map;
  value = map.get(streamId);
  if (null == value) {
    if (typeof c2 === "function") {
      const _window = window;
      if (null == createDiscordStream) {
        const _Error = Error;
        const error = new Error("Direct video streams are unavailable outside the native client");
        throw error;
      } else {
        const merged = Object.assign({ refcount: 0 });
        merged.stream = createDiscordStream(streamId);
        let voiceEngine = require("inject").getVoiceEngine();
        let result = voiceEngine.addDirectVideoOutputSink(streamId);
        const result1 = obj.set(streamId, merged);
        value = merged;
        const obj4 = require("inject");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  dependencyMap = value;
  value.addref();
  c2 = false;
  obj = {
    stream: value.stream,
    release() {
      if (!c2) {
        c2 = true;
        if (value.release()) {
          map.delete(closure_0);
          const voiceEngine = inject.getVoiceEngine();
          const result = voiceEngine.removeDirectVideoOutputSink(closure_0);
        }
      }
    }
  };
  return obj;
};