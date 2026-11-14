// discord_app/modules/waterwheels/interest/native/InterestPickerPerformance.tsx
import size from "../../../../../_runtime/metro/00002__.js";

let set = new Set();
let result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestPickerPerformance.tsx");
class InterestCoverLoad {
  constructor(arg0) {
    fn = require;
    if (require === undefined) {
      fn = function s() {
        return performance.now();
      };
    }
    merged = Object.assign({ settled: false });
    merged.uri = global;
    merged.now = fn;
    merged.startedAt = fn();
    hasItem = null != global;
    if (hasItem) {
      tmp3 = closure_0;
      hasItem = closure_0.has(global);
    }
    merged.previouslyLoaded = hasItem;
    return merged;
  }
}
const prototype = InterestCoverLoad.prototype;
prototype["start"] = function start() {
  const self = this;
  if (!this.settled) {
    self.startedAt = self.now();
  }
};
prototype["finish"] = function finish(outcome) {
  const self = this;
  let tmp = null;
  if (!this.settled) {
    self.settled = true;
    if (tmp3) {
      if (set.size >= 256) {
        set.delete(set.values().next().value);
        const iter = set.values();
      }
      set.add(self.uri);
    }
    const obj2 = { duration_ms: null, outcome: null, previously_loaded: null };
    const _Math = Math;
    const _Math2 = Math;
    obj2.duration_ms = Math.max(0, Math.round(self.now() - self.startedAt));
    obj2.outcome = outcome;
    obj2.previously_loaded = self.previouslyLoaded;
    tmp = obj2;
    tmp3 = "loaded" === outcome && null != self.uri;
  }
  return tmp;
};
class InterestPickerPerformance {
  constructor(arg0, arg1, arg2) {
    fn = importAll;
    if (importAll === undefined) {
      fn = function h() {
        return performance.now();
      };
    }
    merged = Object.assign({
      outcomes: null,
      reported: null,
      rows: null,
      games: null,
      viewportHeight: 0,
      contentTop: null,
      bottomInset: 0,
      firstViewport: null,
      finished: false,
      disposed: false,
    });
    map = new Map();
    merged[0] = map;
    set = new Set();
    merged[1] = set;
    map1 = new Map();
    merged[2] = map1;
    merged.emitCover = global;
    merged.emitReady = require;
    merged.sampled = importDefault;
    merged.now = fn;
    merged.startedAt = fn();
    return merged;
  }
}
const prototype2 = InterestPickerPerformance.prototype;
prototype2["settle"] = function settle(game_id) {
  const self = this;
  if (!this.disposed) {
    const finished = self.finished;
    let tmp = !finished;
    if (!finished) {
      tmp = self.outcomes.size < 120;
    }
    if (tmp) {
      const outcomes = self.outcomes;
      const result = outcomes.set(game_id.game_id, game_id.outcome);
    }
    let sampled = self.sampled;
    if (sampled) {
      const reported = self.reported;
      sampled = !reported.has(game_id.game_id);
    }
    if (sampled) {
      sampled = self.reported.size < 60;
    }
    if (sampled) {
      const reported2 = self.reported;
      reported2.add(game_id.game_id);
      self.emitCover(game_id);
    }
    self.checkReady();
  }
};
prototype2["setGames"] = function setGames(mapped, first1) {
  const self = this;
  let finished = this.finished;
  if (!finished) {
    finished = null != self.firstViewport;
  }
  if (!finished) {
    self.games = mapped;
    self.bottomInset = first1;
    self.checkReady();
  }
};
prototype2["setViewport"] = function setViewport(height) {
  this.viewportHeight = height;
  this.checkReady();
};
prototype2["setContentTop"] = function setContentTop(contentTop) {
  this.contentTop = contentTop;
  this.checkReady();
};
prototype2["setRow"] = function setRow(arg0, layout) {
  const rows = this.rows;
  const result = rows.set(arg0, layout);
  this.checkReady();
};
prototype2["checkReady"] = function checkReady() {
  const self = this;
  if (!this.finished) {
    if (null != self.games) {
      if (null != self.contentTop) {
        if (self.viewportHeight > self.bottomInset) {
          if (null == self.firstViewport) {
            const games = self.games;
            if (
              !games.some((item, index) => {
                const rows = self.rows;
                return !rows.has(index);
              })
            ) {
              closure_0 = self.viewportHeight - self.bottomInset;
              const games2 = self.games;
              self.firstViewport = games2.flatMap((item, index) => {
                const rows = self.rows;
                value = rows.get(index);
                const sum = self.contentTop + value.y;
                if (value.height > 0) {
                  return [];
                }
              });
            }
          }
          const firstViewport = self.firstViewport;
          if (
            firstViewport.every((item) => {
              const outcomes = self.outcomes;
              return outcomes.has(item);
            })
          ) {
            self.finish("settled");
          }
        }
      }
    }
  }
};
prototype2["finish"] = function finish(ready_status) {
  const self = this;
  if ("abandoned" === ready_status) {
    self.disposed = true;
  }
  if (!self.finished) {
    self.finished = true;
    let firstViewport = self.firstViewport;
    if (firstViewport == null) {
      firstViewport = [];
    }
    const obj = { duration_ms: null, ready_status: null, cover_count: null, settled_count: null };
    const _Math = Math;
    const _Math2 = Math;
    obj.duration_ms = Math.max(0, Math.round(self.now() - self.startedAt));
    obj.ready_status = ready_status;
    obj.cover_count = firstViewport.length;
    obj.settled_count = firstViewport.filter((item) => {
      const outcomes = self.outcomes;
      return outcomes.has(item);
    }).length;
    self.emitReady(obj);
  }
};

export const COVER_LOAD_SAMPLE_RATE = 0.1;
export const PICKER_READY_TIMEOUT_MS = 15000;
export function wasCoverPreviouslyLoaded(arg0) {
  return set.has(arg0);
}
export function recordLoadedCover(arg0) {
  if (set.size >= 256) {
    set.delete(set.values().next().value);
    const iter = set.values();
  }
  set.add(arg0);
}
export { InterestCoverLoad };
export { InterestPickerPerformance };
