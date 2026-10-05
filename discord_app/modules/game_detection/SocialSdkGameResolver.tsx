// discord_app/modules/game_detection/SocialSdkGameResolver.tsx
import DetectableGameStore from "../../stores/DetectableGameStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

let map;

const SdkCanonicalGameResolutionType = {
  UNRESOLVED: 0,
  [0]: "UNRESOLVED",
  MATCHES_DETECTED: 1,
  [1]: "MATCHES_DETECTED",
  DIFFERS: 2,
  [2]: "DIFFERS",
};
let closure_2 = { type: SdkCanonicalGameResolutionType.UNRESOLVED };
let result = size.fileFinishedImporting("modules/game_detection/SocialSdkGameResolver.tsx");
class SocialSdkGameResolver {
  constructor() {
    const merged = Object.assign({ resolutionsByPid: null, canonicalGameIdByPid: null });
    merged[0] = new Map();
    merged[1] = {};
    new Map();
    return merged;
  }
  setCanonicalGameIds(canonicalGameIdByPid) {
    this.canonicalGameIdByPid = canonicalGameIdByPid;
  }
  resolve(arr) {
    const self = this;
    let tmp = arr;
    let closure_1 = arr;
    map = new Map();
    const mapped = arr.map((processGame) => {
      let obj;
      let obj10;
      let obj4;
      let tmp = processGame;
      processGame = processGame.processGame;
      let tmp2 = processGame;
      if (null != processGame) {
        obj = { processGame: undefined };
        const merged = Object.assign(tmp);
        ({ id: obj.id, name: obj.name } = processGame);
        tmp2 = obj;
      }
      const detectableGame = DetectableGameStore.getDetectableGame(self.canonicalGameIdByPid[tmp.pid]);
      if (null == detectableGame) {
        obj4 = closure_2;
      } else {
        let id2 = tmp2.id;
        const id = detectableGame.id;
        if (id2 == null) {
          const findGameResult = DetectableGameStore.findGame(tmp2);
          let id1;
          if (findGameResult != null) {
            id1 = findGameResult.id;
          }
          id2 = id1;
        }
        if (id === id2) {
          obj4 = { type: obj.MATCHES_DETECTED, game: detectableGame };
          const obj3 = { type: obj.MATCHES_DETECTED, game: detectableGame };
        } else {
          obj4 = { type: obj.DIFFERS, game: detectableGame };
        }
      }
      const resolutionsByPid = self.resolutionsByPid;
      const value = resolutionsByPid.get(tmp.pid);
      const tmp13 = obj;
      if (obj4.type !== obj.UNRESOLVED) {
        const result = map.set(tmp.pid, obj4);
      } else if (null != value) {
        const result1 = map.set(tmp.pid, value);
      }
      const value2 = map.get(tmp.pid);
      let type;
      if (value2 != null) {
        type = value2.type;
      }
      let tmp20 = tmp2;
      if (type === tmp13.DIFFERS) {
        if (null != tmp.processGame) {
          tmp20 = tmp;
        }
        const obj5 = { id: value2.game.id, name: value2.game.name, processGame: obj10 };
        const merged1 = Object.assign(tmp2);
        obj10 = { id: null, name: null };
        ({ id: obj6.id, name: obj6.name } = tmp2);
        tmp = obj5;
      }
      return tmp20;
    });
    let someResult = mapped.some((item, index) => item !== arr[index]);
    let someResult1 = map.size !== this.resolutionsByPid.size;
    if (!someResult1) {
      const items = [];
      let tmp5 = items;
      HermesBuiltin.arraySpread(items, map, 0);
      someResult1 = items.some((item) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = item;
        const resolutionsByPid = self.resolutionsByPid;
        const value = resolutionsByPid.get(tmp);
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
    let obj = { games: tmp, changed: someResult };
    if (!someResult) {
      someResult = someResult1;
    }
    return obj;
  }
  getResolution(arg0) {
    const resolutionsByPid = this.resolutionsByPid;
    let value = resolutionsByPid.get(arg0);
    if (value == null) {
      value = closure_2;
    }
    return value;
  }
}
const prototype = SocialSdkGameResolver.prototype;

export { SdkCanonicalGameResolutionType };
export const withProcessIdentity = function withProcessIdentity(processGame) {
  processGame = processGame.processGame;
  let tmp = processGame;
  if (null != processGame) {
    const obj = { processGame: undefined };
    const merged = Object.assign(processGame);
    ({ id: obj.id, name: obj.name } = processGame);
    tmp = obj;
  }
  return tmp;
};
export { SocialSdkGameResolver };
