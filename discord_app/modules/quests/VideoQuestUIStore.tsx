// === Module 7202: VideoQuestUIStore ===

// Module 7202 (VideoQuestUIStore)
import react_native from "react-native" /* 1259 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import module_1254_mod from "module_1254" /* 1254 */;
import combine_mod from "combine" /* 4756 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_0;

function _toPropertyKey(obj) {
  let StringResult = obj;
  if (typeof obj === "object") {
    StringResult = obj;
    if (StringResult) {
      const _Symbol = Symbol;
      if (undefined !== obj[Symbol.toPrimitive]) {
        const callResult = obj[Symbol.toPrimitive].call(obj[Symbol.toPrimitive], "string");
        StringResult = callResult;
        if (typeof callResult === "object") {
          const _TypeError = TypeError;
          const self = this;
          const self2 = this;
          const typeError = new TypeError("@@toPrimitive must return a primitive value.");
          throw typeError;
        }
      } else {
        const _String = String;
        StringResult = String(obj);
      }
    }
  }
  let text = StringResult;
  if (typeof StringResult !== "symbol") {
    text = `${tmp}`;
  }
  return text;
}
const VideoProgressState = { UNKNOWN: "UNKNOWN", NOT_STARTED: "NOT_STARTED", IN_PROGRESS: "IN_PROGRESS", COMPLETED: "COMPLETED" };
let module_1254 = module_1254_mod;
module_1254 = module_1254.createWithEqualityFn();
let combine = combine_mod;
let obj2 = {
  name: "videoQuestUIState",
  storage: combine.createJSONStorage(() => require("LocalStorageWrapper")),
  partialize(volume) {
    return { volume: volume.volume, muted: volume.muted, videoProgress: volume.videoProgress };
  },
  version: 0
};
const persist = combine.persist;
combine = combine_mod;
const withEqualityFnResult = module_1254(persist((arg0, arg1) => {
  _require = arg0;
  let closure_1 = arg1;
  let obj = {
    volume: require("DiscordVideoPlayerTypes").DEFAULT_VIDEO_VOLUME,
    muted: false,
    transcriptEnabled: false,
    captionEnabled: false,
    videoProgress: {},
    transcript: null,
    setVolume(volume) {
      let obj = volume(dependencyMap[4]);
      obj.batchUpdates(() => {
        const obj = { volume };
        return volume(obj);
      });
    },
    setMuted(muted) {
      let obj = muted(dependencyMap[4]);
      obj.batchUpdates(() => {
        const obj = { muted };
        return muted(obj);
      });
    },
    setVideoProgress(arg0, timestampSec, duration) {
      closure_0 = arg0;
      const tmp = timestampSec().videoProgress[arg0];
      let num;
      if (tmp != null) {
        num = tmp.maxTimestampSec;
      }
      if (num == null) {
        num = 0;
      }
      const maxTimestampSec = Math.max(num, timestampSec);
      let obj = closure_0(dependencyMap[4]);
      obj.batchUpdates(() => {
        let obj2;
        const obj = { videoProgress: obj2 };
        obj2 = {};
        const merged = Object.assign(timestampSec().videoProgress);
        const obj3 = { timestampSec, duration, maxTimestampSec };
        obj2[closure_0] = obj3;
        return closure_0(obj);
      });
    },
    setTranscriptEnabled(transcriptEnabled) {
      let obj = transcriptEnabled(dependencyMap[4]);
      obj.batchUpdates(() => {
        const obj = { transcriptEnabled };
        return transcriptEnabled(obj);
      });
    },
    setCaptionEnabled(captionEnabled) {
      let obj = captionEnabled(dependencyMap[4]);
      obj.batchUpdates(() => {
        const obj = { captionEnabled };
        return captionEnabled(obj);
      });
    },
    getVideoProgress(questId) {
      return closure_1().videoProgress[questId];
    },
    getVideoProgressState(arg0) {
      let IN_PROGRESS;
      const tmp = closure_1().videoProgress[arg0];
      if (null == tmp) {
        IN_PROGRESS = obj.UNKNOWN;
      } else if (0 === tmp.timestampSec) {
        IN_PROGRESS = obj.NOT_STARTED;
      } else if (tmp.timestampSec >= tmp.duration) {
        IN_PROGRESS = obj.COMPLETED;
      } else {
        IN_PROGRESS = obj.IN_PROGRESS;
      }
      return IN_PROGRESS;
    },
    resetQuest(questId) {
      let obj = questId(dependencyMap[4]);
      obj.batchUpdates(() => {
        const items = [questId];
        const obj = { videoProgress: _objectWithoutProperties(closure_1().videoProgress, items.map(_toPropertyKey)) };
        questId(obj);
      });
    },
    clearState() {
      const obj = react_native;
      obj.batchUpdates(() => {
        closure_1_0({ videoProgress: {} });
      });
    },
    setTranscriptAsset(transcript) {
      let obj = transcript(dependencyMap[4]);
      obj.batchUpdates(() => {
        const obj = { transcript };
        transcript(obj);
      });
    }
  };
  return obj;
}, obj2));
const result = size.fileFinishedImporting("modules/quests/VideoQuestUIStore.tsx");

export default withEqualityFnResult;
export const DEFAULT_VIDEO_PROGRESS = { timestampSec: 0, duration: 10, maxTimestampSec: 0 };
export { VideoProgressState };
export const FetchStatus = { NONE: "NONE", FETCHING: "FETCHING", SUCCESS: "SUCCESS", FAILURE: "FAILURE" };
export const useVideoQuestUIStore = withEqualityFnResult;