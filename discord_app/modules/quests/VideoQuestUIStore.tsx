// discord_app/modules/quests/VideoQuestUIStore.tsx
import closure_3 from "_objectWithoutProperties" /* 109 */;
import identity from "identity" /* 700 */;
import createJSONStorage from "createJSONStorage" /* 4242 */;
import { DEFAULT_VIDEO_VOLUME } from "../../../discord_common/js/packages/video-player/DiscordVideoPlayerTypes.tsx";
import { frozen } from "../zustand/LocalStorageWrapper.tsx";

const require = arg1;
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
let obj = { UNKNOWN: "UNKNOWN", NOT_STARTED: "NOT_STARTED", IN_PROGRESS: "IN_PROGRESS", COMPLETED: "COMPLETED" };
identity = identity.createWithEqualityFn();
obj = { name: "videoQuestUIState", storage: null, partialize: null, version: 0 };
obj[1] = createJSONStorage.createJSONStorage(() => frozen);
obj[2] = function partialize(volume) {
  return { volume: volume.volume, muted: volume.muted, videoProgress: volume.videoProgress };
};
const withEqualityFnResult = identity(createJSONStorage.persist((arg0, arg1) => {
  const _require = arg0;
  closure_1 = arg1;
  return {
    volume: _DEFAULT_VIDEO_VOLUME.DEFAULT_VIDEO_VOLUME,
    muted: false,
    transcriptEnabled: false,
    captionEnabled: false,
    videoProgress: {},
    transcript: null,
    setVolume(arg0) {
      const callback = arg0;
      callback(closure_1_2[4]).batchUpdates(() => callback({ volume: callback }));
    },
    setMuted(arg0) {
      const callback = arg0;
      callback(closure_1_2[4]).batchUpdates(() => callback({ muted: callback }));
    },
    setVideoProgress(arg0, arg1, arg2) {
      const callback = arg0;
      const callback2 = arg1;
      closure_2 = arg2;
      const tmp = callback2().videoProgress[arg0];
      let num;
      if (tmp != null) {
        num = tmp.maxTimestampSec;
      }
      if (num == null) {
        num = 0;
      }
      closure_3 = Math.max(num, arg1);
      callback(closure_1_2[4]).batchUpdates(() => {
        obj = { videoProgress: null };
        obj = {};
        const merged = Object.assign(callback2().videoProgress);
        obj = { timestampSec: callback2, duration: closure_2, maxTimestampSec: closure_3 };
        obj[callback] = obj;
        obj[0] = obj;
        return callback(obj);
      });
    },
    setTranscriptEnabled(arg0) {
      const callback = arg0;
      callback(closure_1_2[4]).batchUpdates(() => callback({ transcriptEnabled: callback }));
    },
    setCaptionEnabled(arg0) {
      const callback = arg0;
      callback(closure_1_2[4]).batchUpdates(() => callback({ captionEnabled: callback }));
    },
    getVideoProgress(questId) {
      return callback2().videoProgress[questId];
    },
    getVideoProgressState(arg0) {
      const tmp = callback2().videoProgress[arg0];
      if (null == tmp) {
        let IN_PROGRESS = closure_1_5.UNKNOWN;
      } else if (0 === tmp.timestampSec) {
        IN_PROGRESS = closure_1_5.NOT_STARTED;
      } else if (tmp.timestampSec >= tmp.duration) {
        IN_PROGRESS = closure_1_5.COMPLETED;
      } else {
        IN_PROGRESS = closure_1_5.IN_PROGRESS;
      }
      return IN_PROGRESS;
    },
    resetQuest(questId) {
      const callback = questId;
      callback(closure_1_2[4]).batchUpdates(() => {
        const items = [questId];
        questId({ videoProgress: closure_2_3(closure_1_1().videoProgress, items.map(closure_2_4)) });
      });
    },
    clearState() {
      callback(closure_1_2[4]).batchUpdates(() => {
        callback({ videoProgress: {} });
      });
    },
    setTranscriptAsset(arg0) {
      const callback = arg0;
      callback(closure_1_2[4]).batchUpdates(() => {
        callback({ transcript: callback });
      });
    }
  };
}, obj));
const result = require("set").fileFinishedImporting("modules/quests/VideoQuestUIStore.tsx");

export default withEqualityFnResult;
export const DEFAULT_VIDEO_PROGRESS = { timestampSec: 0, duration: 10, maxTimestampSec: 0 };
export const VideoProgressState = obj;
export const FetchStatus = { NONE: "NONE", FETCHING: "FETCHING", SUCCESS: "SUCCESS", FAILURE: "FAILURE" };
export const useVideoQuestUIStore = withEqualityFnResult;