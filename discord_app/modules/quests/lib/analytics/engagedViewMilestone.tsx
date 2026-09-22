// === Module 15308: engagedViewMilestone ===

// Module 15308 (engagedViewMilestone)
import size from "module_2" /* 2 */;

const set = new Set();
const result = size.fileFinishedImporting("modules/quests/lib/analytics/engagedViewMilestone.tsx");

export const ENGAGED_VIEW_THRESHOLD_SEC = 5;
export const resetEngagedViewMilestoneStateForTests = function resetEngagedViewMilestoneStateForTests() {
  set.clear();
};
export const createEngagedViewEmitter = function createEngagedViewEmitter(thresholdSeconds) {
  ({ getImpressionId: set, onEmit: closure_1, initialWatchedSeconds } = thresholdSeconds);
  if (initialWatchedSeconds === undefined) {
    initialWatchedSeconds = 0;
  }
  let num = thresholdSeconds.thresholdSeconds;
  if (num === undefined) {
    num = 5;
  }
  let video_watch_seconds = Math.max(0, initialWatchedSeconds);
  c4 = null;
  c5 = null;
  c6 = false;
  return {
    onProgress(positionSeconds) {
      positionSeconds = positionSeconds.positionSeconds;
      ({ durationSeconds, isPlaying } = positionSeconds);
      arr = arr();
      let tmp = null;
      if (null != arr) {
        tmp = null;
        if (arr.length > 0) {
          tmp = arr;
        }
      }
      if (null != tmp) {
        let tmp3 = null != arr;
        if (tmp3) {
          tmp3 = arr !== tmp;
        }
        if (tmp3) {
          video_watch_seconds = 0;
          c4 = null;
        }
        arr = tmp;
        if (!set.has(tmp)) {
          if (!c6) {
            if (isPlaying) {
              if (null != c4) {
                const diff = positionSeconds - c4;
                let tmp9 = diff > 0;
                if (tmp9) {
                  tmp9 = diff <= 1.5;
                }
                if (tmp9) {
                  video_watch_seconds = video_watch_seconds + diff;
                }
              }
              c4 = positionSeconds;
              arr = tmp;
              if (video_watch_seconds >= num) {
                if (!set.has(tmp)) {
                  if (!c6) {
                    c6 = true;
                    const obj2 = { video_watch_seconds, video_position_seconds: positionSeconds, video_duration_seconds: durationSeconds };
                    const resolved = Promise.resolve(closure_1(obj2));
                    const nextPromise = resolved.then(() => {
                      set.add(arr);
                    });
                    resolved.then(() => {
                      set.add(arr);
                    }).catch(() => {

                    }).finally(() => {
                      c6 = false;
                    });
                    const catchPromise = resolved.then(() => {
                      set.add(arr);
                    }).catch(() => {

                    });
                  }
                }
              }
            } else {
              c4 = null;
            }
          }
        }
      } else {
        c4 = null;
      }
    },
    pause() {
      c4 = null;
    },
    getWatchedSeconds() {
      return closure_3;
    },
    hasEmitted() {
      const arr = set();
      let tmp = null;
      if (null != arr) {
        tmp = null;
        if (arr.length > 0) {
          tmp = arr;
        }
      }
      let tmp2 = c6;
      if (!c6) {
        let hasItem = null != tmp;
        if (hasItem) {
          hasItem = set.has(tmp);
        }
        tmp2 = hasItem;
      }
      return tmp2;
    }
  };
};