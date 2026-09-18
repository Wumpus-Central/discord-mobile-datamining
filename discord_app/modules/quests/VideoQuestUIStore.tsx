// discord_app/modules/quests/VideoQuestUIStore.tsx
import ReactBatchUpdates from "../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";
import _objectWithoutProperties from "../../../_runtime/metro/00109__objectWithoutProperties.js";

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
const VideoProgressState = {
  UNKNOWN: "UNKNOWN",
  NOT_STARTED: "NOT_STARTED",
  IN_PROGRESS: "IN_PROGRESS",
  COMPLETED: "COMPLETED",
};
let identity = fn(1243);
identity = identity.createWithEqualityFn();
fn(4593);
const obj4 = { name: "videoQuestUIState", storage: null, partialize: null, version: 0 };
const module_4593 = fn(4593);
obj4.storage = module_4593.createJSONStorage(() => require("LocalStorageWrapper"));
obj4.partialize = function partialize(volume) {
  return { volume: volume.volume, muted: volume.muted, videoProgress: volume.videoProgress };
};
const withEqualityFnResult = identity(
  module_4593.persist((arg0, arg1) => {
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
        volume(1248).batchUpdates(() => volume({ volume }));
      },
      setMuted(muted) {
        muted(1248).batchUpdates(() => muted({ muted }));
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
        closure_0(1248).batchUpdates(() => {
          const obj = { videoProgress: null };
          const obj2 = {};
          const merged = Object.assign(timestampSec().videoProgress);
          obj2[closure_0] = { timestampSec, duration, maxTimestampSec };
          obj.videoProgress = obj2;
          return closure_0(obj);
        });
      },
      setTranscriptEnabled(transcriptEnabled) {
        transcriptEnabled(1248).batchUpdates(() => transcriptEnabled({ transcriptEnabled }));
      },
      setCaptionEnabled(captionEnabled) {
        captionEnabled(1248).batchUpdates(() => captionEnabled({ captionEnabled }));
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
        questId(1248).batchUpdates(() => {
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
        transcript(1248).batchUpdates(() => {
          transcript({ transcript });
        });
      },
    };
  }, obj4),
);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/VideoQuestUIStore.tsx");

export default withEqualityFnResult;
export const DEFAULT_VIDEO_PROGRESS = { timestampSec: 0, duration: 10, maxTimestampSec: 0 };
export { VideoProgressState };
export const FetchStatus = { NONE: "NONE", FETCHING: "FETCHING", SUCCESS: "SUCCESS", FAILURE: "FAILURE" };
export const useVideoQuestUIStore = withEqualityFnResult;
