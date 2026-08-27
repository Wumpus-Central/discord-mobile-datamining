// === Module 5027: getClipCreatedAt ===

// Module 5027 (getClipCreatedAt)
import closure_3 from "_slicedToArray" /* 32 */;
import result from "result" /* 4503 */;
import { AnalyticEvents } from "ME" /* 676 */;
import { SpeakingFlags } from "DesktopSources" /* 4509 */;

const require = arg1;
({ CLIPS_MAX_PARTICIPANTS: c4, CLIPS_MAX_TIMELINE_EVENTS: c5, ClipSignalTypes: closure_6, GameEventType: error } = result);
let obj = { UNKNOWN: 0, [0]: "UNKNOWN", KILL: 1, [1]: "KILL", MULTIKILL: 2, [2]: "MULTIKILL", DEATH: 3, [3]: "DEATH" };
result = require("set").fileFinishedImporting("modules/clips/clipPayloadUtils.tsx");

export const getClipCreatedAt = function getClipCreatedAt(createdAt) {
  return new Date(createdAt).toISOString();
};
export const getClipParticipantIds = function getClipParticipantIds(users) {
  return users.slice(0, closure_4);
};
export const ServerClipGameEventType = obj;
export const getClipEventsTimeline = function getClipEventsTimeline(clip) {
  const _require = clip;
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
        obj = { start: 0, end: null };
        obj[1] = clip.length / 1000;
        editMetadata = obj;
      }
      const diff = clip.decision.timestamp - clip.length;
      const sum = diff + 1000 * editMetadata.end;
      const sum1 = diff + 1000 * editMetadata.start;
      closure_1 = _require(5028).isGameEventsOnPlayerEnabled("getClipEventsTimeline");
      const timeline1 = clip.timeline;
      const found = timeline1.filter((signal) => {
        editMetadata = editMetadata.editMetadata;
        let voiceAudio;
        if (editMetadata != null) {
          voiceAudio = editMetadata.voiceAudio;
        }
        let tmp2 = false !== voiceAudio;
        if (tmp2) {
          tmp2 = signal.signal.type === closure_1_6.SPEAKING;
        }
        if (!tmp2) {
          let tmp4 = closure_1;
          if (closure_1) {
            tmp4 = signal.signal.type === closure_1_6.GAME_EVENT;
          }
          tmp2 = tmp4;
        }
        return tmp2;
      });
      const sorted = found.sort((timestamp, timestamp2) => timestamp.timestamp - timestamp2.timestamp);
      if (0 !== sorted.length) {
        const _Map = Map;
        const map = new Map();
        const items = [];
        const _Map2 = Map;
        new Map();
        for (const item10061 of sorted) {
          let tmp16 = item10061;
          let tmp17 = constants;
          let tmp18 = constants;
          if (item10061.signal.type !== constants.SPEAKING) {
            continue;
          } else {
            let tmp19 = item10061;
            if (tmp16.timestamp >= sum1) {
              let tmp23 = obj5;
              obj5.return();
              break;
            } else {
              let tmp20 = item10061;
              let tmp21 = SpeakingFlags;
              let result = map.set(tmp16.signal.userId, (tmp16.signal.speakingFlags & SpeakingFlags.VOICE) === SpeakingFlags.VOICE);
            }
            break;
          }
          let tmp25 = map;
          let num4 = 2;
          let tmp24 = __exception;
          tmp10[Symbol.iterator]().return();
          throw tmp24;
        }
        const tmp10 = map;
      }
      const obj2 = _require(5028);
    }
  }
};