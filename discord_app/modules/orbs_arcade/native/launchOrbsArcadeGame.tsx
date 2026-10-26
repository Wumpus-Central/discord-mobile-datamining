// discord_app/modules/orbs_arcade/native/launchOrbsArcadeGame.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import util from "../../../intl/index.native.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import ApplicationActionCreatorsDefault from "../../applications/ApplicationActionCreators.tsx";
import OrbsArcadeActionCreators from "../OrbsArcadeActionCreators.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import ApplicationStore from "../../applications/ApplicationStore.tsx";
import OrbsArcadeStore from "../OrbsArcadeStore.tsx";

require = fn;
function showLaunchError() {
  let stringResult = arg0;
  if (arg0 === undefined) {
    const intl = util.intl;
    stringResult = intl.string(util.t.CKsXk3);
  }
  ToastActionCreatorsDefault.open("ORBS_ARCADE_LAUNCH_ERROR", { text: stringResult, variant: "critical" });
}
let closure_10 = async function _ensureEnrollment(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj4 = { value, done: true };
      return obj4;
    } else {
      return { value: "IconComponent", done: "+352" };
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
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          c4 = 1;
          c5 = 2;
          c6 = 1;
          const obj6 = { value: OrbsArcadeActionCreators.ensureOrbsArcadeEnrollment(closure_0), done: false };
          return obj6;
        }
      } else if (1 === tmp7) {
        c4 = 0;
        closure_129_0 = closure_3;
        if (closure_129_0 instanceof closure_130_1(closure_130_2[8])) {
          if (closure_129_0.code === closure_130_6.ORBS_ARCADE_GAME_VERSION_OUTDATED) {
            const orbsArcadeGames = closure_130_0(closure_130_2[7]).fetchOrbsArcadeGames();
            const intl2 = closure_130_0(closure_130_2[5]).intl;
            closure_130_9(intl2.string(closure_130_0(closure_130_2[5]).t.ZkQ7rP));
            const obj2 = closure_130_0(closure_130_2[7]);
          }
          c6 = 3;
          const intl = closure_130_0(closure_130_2[5]).intl;
          closure_130_9(intl.string(closure_130_0(closure_130_2[5]).t["2rQ7Zf"]));
        }
        if (!(closure_129_0 instanceof closure_130_1(closure_130_2[8]))) {
          closure_130_9();
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        c4 = 0;
        c6 = 3;
        return { value: true, done: true };
      }
    } catch (tmp51) {
      closure_3 = tmp51;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp51;
      } else {
        c5 = tmp;
      }
    }
  }
};
let closure_11 = async function _launchGame(arg0, arg1) {
  let applicationId = arg0;
  closure_1 = arg1;
  c5 = 0;
  c6 = 0;
  c4 = 0;
  return (async (arg0, value) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: "+352" };
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
            const obj6 = { value, done: true };
            return obj6;
          } else {
            closure_3 = tmp3;
            closure_2 = tmp8;
            closure_130_0 = applicationId;
            closure_130_1 = closure_1;
            closure_130_2 = undefined;
            closure_130_3 = undefined;
            closure_130_4 = undefined;
            closure_130_5 = undefined;
            closure_130_6 = undefined;
            let rootNavigationRef;
            applicationId = applicationId.applicationId;
            closure_130_2 = applicationId;
            if (null != applicationId) {
              c4 = 1;
              if (null == application.getApplication(applicationId)) {
                const items = [applicationId];
                c5 = 2;
                c6 = 1;
                const obj7 = { value: ApplicationActionCreatorsDefault.fetchApplications(items, false), done: false };
                return obj7;
              }
            }
            c6 = 3;
            closure_131_0(closure_131_2[15]).leaveFrame(closure_130_4);
            closure_131_9();
            c6 = 3;
            return { value: "IconComponent", done: "+352" };
          }
        } else if (1 === tmp8) {
          c4 = 0;
          closure_131_9();
          c6 = 3;
          return { value: "IconComponent", done: "+352" };
        } else if (2 === tmp8) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj9 = { value, done: true };
            return obj9;
          }
        } else if (3 === tmp8) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj10 = { value, done: true };
            return obj10;
          } else {
            closure_130_3 = value;
            if (closure_130_3) {
              const orbsArcadeClaimableRewards = closure_131_0(closure_131_2[11]).getOrbsArcadeClaimableRewards(
                closure_130_0.rewards,
                closure_131_5.getGameStateForGame(closure_130_0.id),
              );
              closure_130_5 = orbsArcadeClaimableRewards.map((id) => id.id);
              c4 = 2;
              const obj4 = closure_131_0(closure_131_2[11]);
              const obj11 = { applicationId: closure_130_2, surface: closure_131_7, analyticsContext: null };
              const obj13 = { isStart: true, analyticsLocations: closure_130_1 };
              obj11.analyticsContext = obj13;
              closure_130_6 = closure_131_1(closure_131_2[12]).launchFrame(obj11);
              const obj5 = closure_131_1(closure_131_2[12]);
              closure_131_1(closure_131_2[12]).demoteMainFrame(closure_131_8(closure_130_2, closure_131_7));
              c5 = 5;
              c6 = 1;
              const obj15 = { value: closure_130_6, done: false };
              return obj15;
            }
          }
        } else if (4 === tmp8) {
          c4 = 0;
          c6 = 3;
          return { value: "IconComponent", done: "+352" };
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj16 = { value, done: true };
          return obj16;
        } else {
          closure_130_4 = value;
          c4 = 0;
          closure_131_1(closure_131_2[13]).hideActionSheet();
          const obj18 = closure_131_1(closure_131_2[13]);
          rootNavigationRef = closure_131_0(closure_131_2[14]).getRootNavigationRef();
          if (null != rootNavigationRef) {
            if (rootNavigationRef.isReady()) {
              const obj = {
                frameId: closure_130_4,
                gameId: closure_130_0.id,
                claimableRewardIdsAtLaunch: closure_130_5,
              };
              rootNavigationRef.navigate("orbs-arcade-game", obj);
            }
          }
          const obj19 = closure_131_0(closure_131_2[14]);
        }
        c4 = 0;
        if (obj12.canLaunchContextlessFrame(closure_131_4.getApplication(closure_130_2))) {
          c5 = 3;
          c6 = 1;
          const obj17 = {
            value: (function ensureEnrollment() {
              const self = this;
              const apply = closure_1_10.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            })(closure_130_0),
            done: false,
          };
          return obj17;
        } else {
          closure_131_9();
        }
        obj12 = closure_131_0(closure_131_2[10]);
      } catch (tmp60) {
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp60;
        } else if (tmp === tmp61) {
          c5 = tmp;
        } else {
          c5 = tmp5;
        }
      }
    }
  })();
};
let closure_12 = async function _launchOrbsArcadeGame(arg0, arg1) {
  let id = arg0;
  closure_1 = arg1;
  c6 = 0;
  c7 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "+352" };
      }
    } else {
      try {
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_3 = tmp3;
            closure_2 = tmp7;
            closure_130_0 = id;
            if (launchingGame.isLaunchingGame(id.id)) {
              c7 = 3;
            } else {
              const obj5 = { type: "ORBS_ARCADE_LAUNCH_GAME_BEGIN", gameId: id.id };
              DispatcherDefault.dispatch(obj5);
              c5 = 1;
              c6 = 2;
              c7 = 1;
              const obj7 = {
                value: (function launchGame() {
                  const self = this;
                  const apply = closure_1_11.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                })(id, closure_1),
                done: false,
              };
              return obj7;
            }
          }
        } else if (1 === tmp7) {
          c5 = 0;
          const obj9 = { type: "ORBS_ARCADE_LAUNCH_GAME_END", gameId: closure_130_0.id };
          closure_131_1(closure_131_2[16]).dispatch(obj9);
          throw closure_4;
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 !== 2) {
          c5 = 0;
          const obj10 = { type: "ORBS_ARCADE_LAUNCH_GAME_END", gameId: closure_130_0.id };
          closure_131_1(closure_131_2[16]).dispatch(obj10);
          const obj = closure_131_1(closure_131_2[16]);
        }
        c5 = 0;
        const obj11 = { type: "ORBS_ARCADE_LAUNCH_GAME_END", gameId: closure_130_0.id };
        closure_131_1(closure_131_2[16]).dispatch(obj11);
        c7 = 3;
        const obj12 = { value, done: true };
        return obj12;
      } catch (tmp31) {
        closure_4 = tmp31;
        if (tmp4 === c5) {
          c7 = tmp2;
          throw tmp31;
        } else {
          c6 = tmp;
        }
      }
    }
  })();
};
const AbortCodes = fn(1087).AbortCodes;
const FramesConstants = fn(6776);
({ MAIN_SURFACE: closure_7, makeFrameId: closure_8 } = FramesConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/orbs_arcade/native/launchOrbsArcadeGame.tsx");

export default function launchOrbsArcadeGame() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
