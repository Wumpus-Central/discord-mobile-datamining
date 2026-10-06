// === Module 7258: clipPayloadUtils ===

// Module 7258 (clipPayloadUtils)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import Constants2 from "Constants" /* 4921 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ClipsConstants from "ClipsConstants" /* 7244 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault, map, map1;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ CLIPS_MAX_PARTICIPANTS: closure_4, CLIPS_MAX_TIMELINE_EVENTS: hasOwnProperty, ClipSignalTypes: metroRequire, GameEventType: metroImportDefault, CLIP_RUNTIME: metroImportAll } = ClipsConstants);
const AnalyticEvents = Constants.AnalyticEvents;
const SpeakingFlags = Constants2.SpeakingFlags;
const ServerClipGameEventType = { UNKNOWN: 0, [0]: "UNKNOWN", KILL: 1, [1]: "KILL", MULTIKILL: 2, [2]: "MULTIKILL", DEATH: 3, [3]: "DEATH" };
let result = size.fileFinishedImporting("modules/clips/clipPayloadUtils.tsx");

export const getClipCreatedAt = function getClipCreatedAt(createdAt) {
  const date = new Date(createdAt);
  return date.toISOString();
};
export const getClipSyncTimestamp = function getClipSyncTimestamp(clip) {
  if (null != clip.syncTimestamp) {
    let length;
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
    const self = this;
    const self2 = this;
    const date = new Date(clip.syncTimestamp - (clip.length - length));
    return date.toISOString();
  }
};
export const getClipParticipantIds = function getClipParticipantIds(users) {
  return users.slice(0, React3);
};
export { ServerClipGameEventType };
export const getClipEventsTimeline = function getClipEventsTimeline(clip) {
  let closure_1;
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
      let obj;
      let editMetadata = clip.editMetadata;
      if (editMetadata == null) {
        obj = { start: 0, end: clip.length / 1000 };
        editMetadata = obj;
      }
      const diff = clip.decision.timestamp - clip.length;
      const sum = diff + 1000 * editMetadata.start;
      const sum1 = diff + 1000 * editMetadata.end;
      const obj2 = require("GameEventsOnPlayerExperiment");
      importDefault = obj2.isGameEventsOnPlayerEnabled("getClipEventsTimeline");
      const timeline1 = clip.timeline;
      const found = timeline1.filter((signal) => {
        const editMetadata = clip.editMetadata;
        let voiceAudio;
        if (editMetadata != null) {
          voiceAudio = editMetadata.voiceAudio;
        }
        let tmp2 = false !== voiceAudio && signal.signal.type === metroRequire.SPEAKING;
        if (!tmp2) {
          tmp2 = closure_1 && signal.signal.type === metroRequire.GAME_EVENT;
          const tmp4 = closure_1 && signal.signal.type === metroRequire.GAME_EVENT;
        }
        return tmp2;
      });
      const sorted = found.sort((timestamp, timestamp2) => timestamp.timestamp - timestamp2.timestamp);
      if (0 !== sorted.length) {
        const _Map = Map;
        const self = this;
        const self2 = this;
        map = new Map();
        const items = [];
        const _Map2 = Map;
        const self3 = this;
        const self4 = this;
        map1 = new Map();
        for (const item10061 of sorted) {
          if (item10061.signal.type !== constants.SPEAKING) {
            continue;
          } else {
            if (item10061.timestamp >= sum) {
              obj6.return();
              break;
            } else {
              let result = map.set(item10061.signal.userId, (item10061.signal.speakingFlags & SpeakingFlags.VOICE) === SpeakingFlags.VOICE);
            }
            break;
          }
          let tmp21 = tmp8[Symbol.iterator]();
          while (tmp21 !== undefined) {
            let tmp26 = _slicedToArray(tmp23, 2);
            let first = tmp26[0];
            if (tmp26[1]) {
              let obj3 = { timestamp_ms: 0, speaking: obj4 };
              let obj4 = { user_id: first, speaking_flags: SpeakingFlags.VOICE };
              let arr = items.push(obj3);
            }
            continue;
          }
          for (const item10106 of sorted) {
            if (item10106.signal.type === constants.SPEAKING) {
              if (item10106.timestamp < sum) {
                continue;
              } else {
                if (item10106.timestamp > sum1) {
                  obj9.return();
                  break;
                } else {
                  let tmp73 = (item10106.signal.speakingFlags & SpeakingFlags.VOICE) === SpeakingFlags.VOICE;
                  let flag = map.get(item10106.signal.userId) ?? false;
                  if (flag === tmp73) {
                    continue;
                  } else {
                    let result1 = map.set(item10106.signal.userId, tmp73);
                    let obj5 = { timestamp_ms: Math.round(item10106.timestamp - sum), speaking: obj7 };
                    let _Math2 = Math;
                    let push = items.push;
                    let obj7 = { user_id: item10106.signal.userId, speaking_flags: item10106.signal.speakingFlags };
                    let arr2 = push(obj5);
                  }
                }
                break;
              }
              let substr = items.slice(0, closure_5);
              if (substr.length !== items.length) {
                let obj13 = AnalyticsUtilsDefault;
                let obj8 = { clip_uuid: clip.id, clip_event_timeline_size: items.length, clip_runtime };
                let trackResult = obj13.track(AnalyticEvents.CLIP_TIMELINE_TRIMMED, obj8);
              }
              let tmp58;
              if (substr.length > 0) {
                tmp58 = substr;
              }
              return tmp58;
            } else {
              if (item10106.signal.type === tmp35.GAME_EVENT) {
                if (item10106.timestamp < sum) {
                  continue;
                } else {
                  if (item10106.timestamp > sum1) {
                    obj9.return();
                    break;
                  } else {
                    let KILL;
                    let eventType = item10106.signal.eventType;
                    if (constants2.KILL === eventType) {
                      KILL = obj.KILL;
                    } else if (tmp64.MULTIKILL === eventType) {
                      KILL = obj.MULTIKILL;
                    }
                    if (null == KILL) {
                      continue;
                    } else {
                      let _Math = Math;
                      let rounded = Math.round(item10106.timestamp - sum);
                      let tmp67 = rounded;
                      let value = map1.get(rounded);
                      if (null != value) {
                        if (KILL === obj.MULTIKILL) {
                          let obj10 = { type: KILL };
                          items[tmp69].game = obj10;
                        }
                        continue;
                      } else {
                        let result2 = map1.set(tmp67, items.length);
                        let obj11 = { timestamp_ms: tmp67, game: obj12 };
                        let obj12 = { type: KILL };
                        let arr3 = items.push(obj11);
                      }
                    }
                  }
                  break;
                }
                break;
              }
              continue;
            }
            continue;
          }
        }
      }
    }
  }
};