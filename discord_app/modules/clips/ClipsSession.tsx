// === Module 14254: ClipsSession ===

// Module 14254 (ClipsSession)
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/clips/ClipsSession.tsx");
class ClipsSession {
  constructor(arg0, arg1) {
    nowResult = importDefault;
    if (importDefault === undefined) {
      tmp2 = globalThis;
      _performance = performance;
      nowResult = performance.now();
    }
    merged = Object.assign({ endedAt: null, savedClipIds: null, candidateClipsById: null, manualClipsSavedCount: 0, candidateClipsSavedCount: 0, candidateClipsPromotedCount: 0 });
    merged[1] = [];
    map = new Map();
    merged[2] = map;
    merged.id = global;
    merged.gameId = require;
    merged.startedAt = nowResult;
    return merged;
  }
}
const prototype = ClipsSession.prototype;
Object.defineProperty(prototype, "clipIds", {
  get: function clipIds() {
    return this.savedClipIds;
  },
  set: undefined
});
Object.defineProperty(prototype, "candidates", {
  get: function candidates() {
    const candidateClipsById = this.candidateClipsById;
    const items = [...candidateClipsById.values()];
    return items;
  },
  set: undefined
});
Object.defineProperty(prototype, "isActive", {
  get: function isActive() {
    return null == this.endedAt;
  },
  set: undefined
});
Object.defineProperty(prototype, "hasClips", {
  get: function hasClips() {
    return this.savedClipIds.length > 0;
  },
  set: undefined
});
Object.defineProperty(prototype, "manualClipsSaved", {
  get: function manualClipsSaved() {
    return this.manualClipsSavedCount;
  },
  set: undefined
});
Object.defineProperty(prototype, "candidateClipsSaved", {
  get: function candidateClipsSaved() {
    return this.candidateClipsSavedCount;
  },
  set: undefined
});
Object.defineProperty(prototype, "candidateClipsPromoted", {
  get: function candidateClipsPromoted() {
    return this.candidateClipsPromotedCount;
  },
  set: undefined
});
prototype["recordSavedClip"] = function recordSavedClip(clip) {
  const self = this;
  if ("manual" === clip.clipMethod) {
    self.manualClipsSavedCount = self.manualClipsSavedCount + 1;
  }
  if (true === clip.isCandidate) {
    self.candidateClipsSavedCount = self.candidateClipsSavedCount + 1;
    const candidateClipsById = self.candidateClipsById;
    const result = candidateClipsById.set(clip.id, clip);
  } else {
    const items = [];
    items[HermesBuiltin.arraySpread(self.savedClipIds, 0)] = clip.id;
    self.savedClipIds = items;
  }
};
prototype["recordPromotedClip"] = function recordPromotedClip(clip) {
  this.candidateClipsPromotedCount = this.candidateClipsPromotedCount + 1;
  this.removeCandidate(clip.id);
  const items = [];
  items[HermesBuiltin.arraySpread(this.savedClipIds, 0)] = clip.id;
  this.savedClipIds = items;
};
prototype["removeCandidate"] = function removeCandidate(id) {
  const candidateClipsById = this.candidateClipsById;
  candidateClipsById.delete(id);
};
prototype["getCandidate"] = function getCandidate(arg0) {
  const candidateClipsById = this.candidateClipsById;
  return candidateClipsById.get(arg0);
};
prototype["updateCandidate"] = function updateCandidate(clip) {
  const candidateClipsById = this.candidateClipsById;
  if (candidateClipsById.has(clip.id)) {
    const candidateClipsById2 = this.candidateClipsById;
    const result = candidateClipsById2.set(clip.id, clip);
  }
};
prototype["recordMontageClip"] = function recordMontageClip(clip) {
  const items = [];
  items[HermesBuiltin.arraySpread(this.savedClipIds, 0)] = clip.id;
  this.savedClipIds = items;
};
prototype["end"] = function end() {
  if (this.endedAt == null) {
    const _performance = performance;
    tmp.endedAt = performance.now();
  }
};

export { ClipsSession };