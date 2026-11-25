// === Module 8088: clipPayloadUtils ===

// Module 8088 (clipPayloadUtils)
import _slicedToArray from "module_32" /* 32 */;

const ClipsConstants = fn(8089);
({ CLIPS_MAX_PARTICIPANTS: c3, CLIPS_MAX_TIMELINE_EVENTS: closure_4, ClipSignalTypes: hasOwnProperty, GameEventType: closure_6, CLIP_RUNTIME: metroImportDefault } = ClipsConstants);
const AnalyticEvents = fn(1071).AnalyticEvents;
const SpeakingFlags = fn(5824).SpeakingFlags;
const ServerClipGameEventType = { UNKNOWN: 0, [0]: "UNKNOWN", KILL: 1, [1]: "KILL", MULTIKILL: 2, [2]: "MULTIKILL", DEATH: 3, [3]: "DEATH" };
const obj2 = { UNKNOWN: 0, [0]: "UNKNOWN", LAUGHTER: 1, [1]: "LAUGHTER", SHOUTING: 2, [2]: "SHOUTING" };
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
      length = 1000 * clip.editMetadata.end;
    } else {
      length = clip.length;
    }
    const _Date = Date;
    const date = new Date(clip.syncTimestamp - (clip.length - length));
    return date.toISOString();
  }
}
export function getClipParticipantIds(users) {
  return users.slice(0, React3);
}
export { ServerClipGameEventType };
export const ServerClipEmotionType = obj2;
export function getClipEventsTimeline(clip) {
  let editMetadata = clip;
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
      editMetadata = clip.editMetadata;
      if (editMetadata == null) {
        const obj = { start: 0, end: clip.length / 1000 };
        editMetadata = obj;
      }
      const diff = clip.decision.timestamp - clip.length;
      const sum = diff + 1000 * editMetadata.end;
      const timeline1 = clip.timeline;
      const sum1 = diff + 1000 * editMetadata.start;
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
          tmp2 = signal.signal.type === constants.GAME_EVENT;
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
        items = audioEvents;
      } else {
        items = [];
      }
      const _Map = Map;
      const map = new Map();
      const items1 = [];
      for (const item10060 of sorted) {
        if (item10060.signal.type !== constants.SPEAKING) {
          continue;
        } else {
          if (item10060.timestamp >= sum1) {
            obj4.return();
            break;
          } else {
            let result = map.set(item10060.signal.userId, (item10060.signal.speakingFlags & SpeakingFlags.VOICE) === SpeakingFlags.VOICE);
          }
          break;
        }
        tmp9[Symbol.iterator]().return();
        throw __exception;
      }
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