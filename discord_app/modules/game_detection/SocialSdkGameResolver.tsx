// === Module 10621: SocialSdkGameResolver ===

// Module 10621 (SocialSdkGameResolver)
import DetectableGameStore from "DetectableGameStore" /* 2037 */;

const SdkCanonicalGameResolutionType = { UNRESOLVED: 0, [0]: "UNRESOLVED", MATCHES_DETECTED: 1, [1]: "MATCHES_DETECTED", DIFFERS: 2, [2]: "DIFFERS" };
let closure_2 = { type: SdkCanonicalGameResolutionType.UNRESOLVED };
const size = fn(2);
let result = size.fileFinishedImporting("modules/game_detection/SocialSdkGameResolver.tsx");
class SocialSdkGameResolver {
  constructor() {
    merged = Object.assign({ resolutionsByPid: null, canonicalGameIdByPid: null });
    map = new Map();
    merged[0] = map;
    merged[1] = {};
    return merged;
  }
}
const prototype = SocialSdkGameResolver.prototype;
prototype["setCanonicalGameIds"] = function setCanonicalGameIds(canonicalGameIdByPid) {
  this.canonicalGameIdByPid = canonicalGameIdByPid;
};
prototype["resolve"] = function resolve(arr) {
  const self = this;
  let tmp = arr;
  closure_1 = arr;
  const map = new Map();
  const mapped = arr.map((processGame) => {
    let tmp = processGame;
    processGame = processGame.processGame;
    let tmp2 = processGame;
    if (null != processGame) {
      const obj = {};
      const merged = Object.assign(tmp);
      ({ id: obj.id, name: obj.name } = processGame);
      obj.processGame = undefined;
      tmp2 = obj;
    }
    const detectableGame = DetectableGameStore.getDetectableGame(self.canonicalGameIdByPid[tmp.pid]);
    if (null == detectableGame) {
      let obj4 = closure_2;
    } else {
      let id = tmp2.id;
      if (id == null) {
        const findGameResult = DetectableGameStore.findGame(tmp2);
        let id1;
        if (findGameResult != null) {
          id1 = findGameResult.id;
        }
        id = id1;
      }
      if (detectableGame.id === id) {
        const obj3 = { type: obj.MATCHES_DETECTED, game: detectableGame };
        obj4 = obj3;
      } else {
        obj4 = { type: obj.DIFFERS, game: detectableGame };
      }
    }
    const resolutionsByPid = self.resolutionsByPid;
    value = resolutionsByPid.get(tmp.pid);
    if (obj4.type !== obj.UNRESOLVED) {
      const result = map.set(tmp.pid, obj4);
    } else if (null != value) {
      const result1 = map.set(tmp.pid, value);
    }
    value2 = map.get(tmp.pid);
    let type;
    if (value2 != null) {
      type = value2.type;
    }
    let tmp20 = tmp2;
    if (type === obj.DIFFERS) {
      if (null != tmp.processGame) {
        tmp20 = tmp;
      }
      const obj5 = {};
      const merged1 = Object.assign(tmp2);
      obj5.id = value2.game.id;
      obj5.name = value2.game.name;
      ({ id: obj6.id, name: obj6.name } = tmp2);
      obj5.processGame = { id: null, name: null };
      tmp = obj5;
      const obj10 = { id: null, name: null };
    }
    return tmp20;
  });
  let someResult = mapped.some((item, index) => item !== closure_1[index]);
  let someResult1 = map.size !== this.resolutionsByPid.size;
  if (!someResult1) {
    const items = [];
    HermesBuiltin.arraySpread(map, 0);
    someResult1 = items.some((item) => {
      [tmp, tmp2] = item;
      const resolutionsByPid = self.resolutionsByPid;
      value = resolutionsByPid.get(tmp);
      let type;
      if (value != null) {
        type = value.type;
      }
      let tmp5 = type !== tmp2.type;
      if (!tmp5) {
        let id;
        if (null != value) {
          if (value.type !== obj.UNRESOLVED) {
            id = value.game.id;
          }
        }
        let id1;
        if (null != tmp2) {
          if (tmp2.type !== obj.UNRESOLVED) {
            id1 = tmp2.game.id;
          }
        }
        tmp5 = id !== id1;
      }
      return tmp5;
    });
  }
  this.resolutionsByPid = map;
  if (someResult) {
    tmp = mapped;
  }
  let obj = { games: tmp, changed: null };
  if (!someResult) {
    someResult = someResult1;
  }
  obj.changed = someResult;
  return obj;
};
prototype["getResolution"] = function getResolution(arg0) {
  const resolutionsByPid = this.resolutionsByPid;
  value = resolutionsByPid.get(arg0);
  if (value == null) {
    value = closure_2;
  }
  return value;
};

export { SdkCanonicalGameResolutionType };
export const withProcessIdentity = function withProcessIdentity(processGame) {
  processGame = processGame.processGame;
  let tmp = processGame;
  if (null != processGame) {
    const obj = {};
    const merged = Object.assign(processGame);
    ({ id: obj.id, name: obj.name } = processGame);
    obj.processGame = undefined;
    tmp = obj;
  }
  return tmp;
};
export { SocialSdkGameResolver };