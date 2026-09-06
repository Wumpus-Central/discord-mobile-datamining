// === Module 7705: VideoQuestUIStore ===

// Module 7705 (VideoQuestUIStore)
import ReactBatchUpdates from "ReactBatchUpdates" /* 1249 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;

require = fn;
function _toPropertyKey(obj) {
  let StringResult = obj;
  if (typeof obj === "object") {
    StringResult = obj;
    if (obj) {
      const _Symbol = Symbol;
      if (undefined !== obj[Symbol.toPrimitive]) {
        const call = tmp3.call;
        if (typeof call === "unknown") {
          let callResult = tmp3("string");
        } else {
          callResult = call(obj, "string");
        }
        StringResult = callResult;
        if (typeof callResult === "object") {
          const _TypeError = TypeError;
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
let VideoProgressState = { UNKNOWN: "UNKNOWN", NOT_STARTED: "NOT_STARTED", IN_PROGRESS: "IN_PROGRESS", COMPLETED: "COMPLETED" };
let identity = fn(1244);
identity = identity.createWithEqualityFn();
fn(4430);
VideoProgressState = { name: "videoQuestUIState", storage: null, partialize: null, version: 0 };
const module_4430 = fn(4430);
VideoProgressState.storage = module_4430.createJSONStorage(() => require("LocalStorageWrapper"));
VideoProgressState.partialize = function partialize(volume) {
  return { volume: volume.volume, muted: volume.muted, videoProgress: volume.videoProgress };
};
const withEqualityFnResult = identity(module_4430.persist((arg0, arg1) => {
  _require = arg0;
  closure_1 = arg1;
  return {
    volume: require("DiscordVideoPlayerTypes").DEFAULT_VIDEO_VOLUME,
    muted: false,
    transcriptEnabled: false,
    captionEnabled: false,
    videoProgress: {},
    transcript: null,
    setVolume(volume) {
      volume(1249).batchUpdates(() => volume({ volume }));
    },
    setMuted(muted) {
      muted(1249).batchUpdates(() => muted({ muted }));
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
      closure_0(1249).batchUpdates(() => {
        let videoProgress = { videoProgress: null };
        videoProgress = {};
        const merged = Object.assign(timestampSec().videoProgress);
        videoProgress = { timestampSec, duration, maxTimestampSec };
        videoProgress[closure_0] = videoProgress;
        videoProgress.videoProgress = videoProgress;
        return closure_0(videoProgress);
      });
    },
    setTranscriptEnabled(transcriptEnabled) {
      transcriptEnabled(1249).batchUpdates(() => transcriptEnabled({ transcriptEnabled }));
    },
    setCaptionEnabled(captionEnabled) {
      captionEnabled(1249).batchUpdates(() => captionEnabled({ captionEnabled }));
    },
    getVideoProgress(questId) {
      return closure_1().videoProgress[questId];
    },
    getVideoProgressState(arg0) {
      const tmp = closure_1().videoProgress[arg0];
      if (null == tmp) {
        let IN_PROGRESS = obj.UNKNOWN;
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
      questId(1249).batchUpdates(() => {
        const items = [questId];
        questId({ videoProgress: _objectWithoutProperties(closure_1().videoProgress, items.map(_toPropertyKey)) });
      });
    },
    clearState() {
      ReactBatchUpdates.batchUpdates(() => {
        closure_1_0({ videoProgress: {} });
      });
    },
    setTranscriptAsset(transcript) {
      transcript(1249).batchUpdates(() => {
        transcript({ transcript });
      });
    }
  };
}, VideoProgressState));
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/VideoQuestUIStore.tsx");

export default withEqualityFnResult;
export const DEFAULT_VIDEO_PROGRESS = { timestampSec: 0, duration: 10, maxTimestampSec: 0 };
export { VideoProgressState };
export const FetchStatus = { NONE: "NONE", FETCHING: "FETCHING", SUCCESS: "SUCCESS", FAILURE: "FAILURE" };
export const useVideoQuestUIStore = withEqualityFnResult;