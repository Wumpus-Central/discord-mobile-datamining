// discord_app/modules/clips/clipPayloadUtils.tsx
import _slicedToArray from "../../../_runtime/metro/00032__.js";

const require = globalThis.__r;

const require = fn;
const ClipsConstants = fn(8206);
({
  CLIPS_MAX_PARTICIPANTS: closure_4,
  CLIPS_MAX_TIMELINE_EVENTS: hasOwnProperty,
  ClipSignalTypes: metroRequire,
  GameEventType: closure_7,
  CLIP_RUNTIME: closure_8,
} = ClipsConstants);
const AnalyticEvents = fn(1072).AnalyticEvents;
const SpeakingFlags = fn(5763).SpeakingFlags;
const ServerClipGameEventType = {
  UNKNOWN: 0,
  [0]: "UNKNOWN",
  KILL: 1,
  [1]: "KILL",
  MULTIKILL: 2,
  [2]: "MULTIKILL",
  DEATH: 3,
  [3]: "DEATH",
};
let obj2 = { UNKNOWN: 0, [0]: "UNKNOWN", LAUGHTER: 1, [1]: "LAUGHTER", SHOUTING: 2, [2]: "SHOUTING" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/clips/clipPayloadUtils.tsx");

export function getClipCreatedAt(createdAt) {
  return new Date(createdAt).toISOString();
}
export function getClipSyncTimestamp(clip) {
  if (null != clip.syncTimestamp) {
    const editMetadata = clip.editMetadata;
    let end;
    if (editMetadata != null) {
      end = editMetadata.end;
    }
    if (null != end) {
      let length = 1000 * clip.editMetadata.end;
    } else {
      length = clip.length;
    }
    const _Date = Date;
    const date = new Date(clip.syncTimestamp - (clip.length - length));
    return date.toISOString();
  }
}
export function getClipParticipantIds(users) {
  return users.slice(0, React4);
}
export { ServerClipGameEventType };
export const ServerClipEmotionType = obj2;
export function getClipEventsTimeline(clip) {
  _require = clip;
  const timeline = clip.timeline;
  let num;
  if (timeline != null) {
    num = timeline.length;
  }
  if (num == null) {
    num = 0;
  }
  if (0 !== num) {
    const decision = clip.decision;
    let timestamp;
    if (decision != null) {
      timestamp = decision.timestamp;
    }
    if (null != timestamp) {
      let editMetadata = clip.editMetadata;
      if (editMetadata == null) {
        const obj = { start: 0, end: clip.length / 1000 };
        editMetadata = obj;
      }
      const diff = clip.decision.timestamp - clip.length;
      const sum = diff + 1000 * editMetadata.end;
      const sum1 = diff + 1000 * editMetadata.start;
      closure_1 = require("GameEventsOnPlayerExperiment").isGameEventsOnPlayerEnabled("getClipEventsTimeline");
      const timeline1 = clip.timeline;
      const found = timeline1.filter((signal) => {
        editMetadata = editMetadata.editMetadata;
        let voiceAudio;
        if (editMetadata != null) {
          voiceAudio = editMetadata.voiceAudio;
        }
        let tmp2 = false !== voiceAudio;
        if (tmp2) {
          tmp2 = signal.signal.type === constants.SPEAKING;
        }
        if (!tmp2) {
          let tmp4 = closure_1;
          if (closure_1) {
            tmp4 = signal.signal.type === constants.GAME_EVENT;
          }
          tmp2 = tmp4;
        }
        return tmp2;
      });
      const sorted = found.sort((timestamp, timestamp2) => timestamp.timestamp - timestamp2.timestamp);
      const editMetadata2 = clip.editMetadata;
      let voiceAudio;
      if (editMetadata2 != null) {
        voiceAudio = editMetadata2.voiceAudio;
      }
      if (false !== voiceAudio) {
        let audioEvents = clip.audioEvents;
        if (audioEvents == null) {
          audioEvents = [];
        }
        let items = audioEvents;
      } else {
        items = [];
      }
      const _Map = Map;
      const map = new Map();
      const items1 = [];
      for (const item10067 of sorted) {
        if (item10067.signal.type !== constants.SPEAKING) {
          continue;
        } else {
          if (item10067.timestamp >= sum1) {
            obj5.return();
            break;
          } else {
            let result = map.set(
              item10067.signal.userId,
              (item10067.signal.speakingFlags & SpeakingFlags.VOICE) === SpeakingFlags.VOICE,
            );
          }
          break;
        }
        tmp11[Symbol.iterator]().return();
        throw __exception;
      }
      obj2 = require("GameEventsOnPlayerExperiment");
    }
  } else {
    const audioEvents1 = clip.audioEvents;
    let num2;
    if (audioEvents1 != null) {
      num2 = audioEvents1.length;
    }
    if (num2 == null) {
      num2 = 0;
    }
  }
}
