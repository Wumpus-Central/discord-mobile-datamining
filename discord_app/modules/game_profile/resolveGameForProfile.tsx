// discord_app/modules/game_profile/resolveGameForProfile.tsx
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import ApplicationStore from "../applications/ApplicationStore.tsx";
import GameStore from "../games/GameStore.tsx";

const require = fn;
let closure_6 = async function _resolveGameForProfile(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: "+95" };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_4 = tmp5;
          closure_3 = tmp2;
          closure_131_0 = undefined;
          closure_131_1 = undefined;
          ({ applicationId: closure_131_0, gameId: closure_131_1 } = closure_0);
          let canonicalGameId;
          let application2;
          c5 = 1;
          c6 = 1;
          return { value: "Path", done: true };
        }
      } else {
        if (1 === tmp5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            c1 = closure_131_1;
            if (closure_131_1 == null) {
              c1 = null;
            }
            canonicalGameId = c1;
            if (null == canonicalGameId) {
              if (null != closure_131_0) {
                if (!closure_132_3.isHydrated(closure_131_0)) {
                  const application = closure_132_0(closure_132_1[4]).fetchApplication(closure_131_0);
                  c5 = 2;
                  c6 = 1;
                  const obj6 = { value: application.catch(closure_132_5), done: false };
                  return obj6;
                }
              }
            }
            if (null == canonicalGameId) {
              c6 = 3;
              c6 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              const useGame = closure_132_0(closure_132_1[5]).useGame;
              items = [canonicalGameId];
              c5 = 3;
              c6 = 1;
              const obj7 = { value: useGame.fetchMany(items), done: false };
              return obj7;
            }
          }
        } else if (2 === tmp5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj8 = { value, done: true };
            return obj8;
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 !== 2) {
          const game = closure_132_4.getGame(canonicalGameId);
          c2 = game;
          if (game == null) {
            c2 = null;
          }
        }
        application2 = closure_132_3.getApplication(closure_131_0);
        if (null == application2) {
          c6 = 3;
          return { value: null, done: true };
        } else {
          canonicalGameId = application2.getCanonicalGameId();
        }
      }
    } catch (tmp38) {
      c6 = tmp;
      throw tmp38;
    }
  }
};
const NOOP = fn(1071).NOOP;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/resolveGameForProfile.tsx");

export default function resolveGameForProfile() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
