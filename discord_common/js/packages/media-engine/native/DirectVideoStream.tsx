// === Module 4553: addref ===

// Module 4553 (addref)
import set from "set" /* 2 */;

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
      obj = Object.create(tmp);
      obj.stream = createDiscordStream(global);
      return obj;
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
let result = set.fileFinishedImporting("../discord_common/js/packages/media-engine/native/DirectVideoStream.tsx");

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
export const acquireDirectVideoStream = function acquireDirectVideoStream(current) {
  const _require = current;
  let obj = map;
  let value = map.get(current);
  if (null == value) {
    if (typeof c2 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const _window = window;
    if (null == createDiscordStream) {
      const _Error = Error;
      error = new Error("Direct video streams are unavailable outside the native client");
      throw error;
    } else {
      obj = Object.create(tmp);
      obj.stream = createDiscordStream(current);
      let voiceEngine = _require(4501).getVoiceEngine();
      let result = voiceEngine.addDirectVideoOutputSink(current);
      const result1 = obj.set(current, obj);
      value = obj;
      const obj4 = _require(4501);
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
          closure_1_3.delete(current);
          const voiceEngine = current(value[0]).getVoiceEngine();
          const result = voiceEngine.removeDirectVideoOutputSink(current);
          const obj = current(value[0]);
        }
      }
    }
  };
  return obj;
};