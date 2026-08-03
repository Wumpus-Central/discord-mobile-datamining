const result = require("set").fileFinishedImporting("../discord_common/js/shared/utils/SetUtils.tsx");

export const areSetsEqual = function areSetsEqual(set, set1) {
  if (set === set1) {
    return true;
  } else if (set.size !== set1.size) {
    return false;
  } else {
    const obj = set[Symbol.iterator]();
    while (obj !== undefined) {
      if (set1.has(tmp3)) {
        continue;
      } else {
        let tmp5 = obj;
        obj.return();
        let flag = false;
        return false;
      }
    }
    return true;
  }
};
export const toSetInplace = function toSetInplace(features) {
  if (null == features) {
    const _Set3 = Set;
    let set = new Set();
  } else {
    const _Set = Set;
    set = features;
    if (!(features instanceof Set)) {
      const _Set2 = Set;
      set = new Set(features);
    }
  }
  return set;
};