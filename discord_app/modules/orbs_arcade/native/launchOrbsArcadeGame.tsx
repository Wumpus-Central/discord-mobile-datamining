// discord_app/modules/orbs_arcade/native/launchOrbsArcadeGame.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import util from "../../../intl/index.native.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import ApplicationActionCreatorsDefault from "../../applications/ApplicationActionCreators.tsx";
import OrbsArcadeActionCreators from "../OrbsArcadeActionCreators.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import ApplicationStore from "../../applications/ApplicationStore.tsx";
import FramesStore from "../../frames/FramesStore.tsx";
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
let closure_12 = async function _ensureEnrollment(arg0) {
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
      return { value: "HermesInternal", done: null };
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
        if (closure_129_0 instanceof closure_130_1(closure_130_2[9])) {
          if (closure_129_0.code === closure_130_7.ORBS_ARCADE_GAME_VERSION_OUTDATED) {
            const orbsArcadeGames = closure_130_0(closure_130_2[8]).fetchOrbsArcadeGames();
            const intl2 = closure_130_0(closure_130_2[6]).intl;
            closure_130_11(intl2.string(closure_130_0(closure_130_2[6]).t.ZkQ7rP));
            const obj2 = closure_130_0(closure_130_2[8]);
          }
          c6 = 3;
          const intl = closure_130_0(closure_130_2[6]).intl;
          closure_130_11(intl.string(closure_130_0(closure_130_2[6]).t["2rQ7Zf"]));
        }
        if (!(closure_129_0 instanceof closure_130_1(closure_130_2[9]))) {
          closure_130_11();
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
let closure_13 = async function _launchGame(arg0, arg1, arg2) {
  let applicationId = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
  c7 = 0;
  c8 = 0;
  c6 = 0;
  return (async (arg0, value, arg2) => {
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c8 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            closure_5 = tmp3;
            closure_4 = tmp8;
            closure_132_0 = applicationId;
            closure_132_1 = closure_1;
            closure_132_2 = closure_2;
            closure_132_3 = undefined;
            closure_132_4 = undefined;
            let gameStateForGame;
            closure_132_6 = undefined;
            closure_132_7 = undefined;
            let frame;
            closure_132_9 = undefined;
            closure_132_10 = undefined;
            let rootNavigationRef;
            applicationId = applicationId.applicationId;
            closure_132_3 = applicationId;
            if (null != applicationId) {
              ActionSheetActionCreatorsDefault.hideActionSheet();
              c6 = 1;
              if (null == application.getApplication(applicationId)) {
                items = [applicationId];
                c7 = 2;
                c8 = 1;
                const obj8 = { value: ApplicationActionCreatorsDefault.fetchApplications(items, false), done: false };
                return obj8;
              }
            }
            c8 = 3;
            closure_133_0(closure_133_2[14]).leaveFrame(closure_132_9);
            closure_133_11();
            c8 = 3;
            return { value: "HermesInternal", done: null };
          }
        } else if (1 === tmp8) {
          c6 = 0;
          closure_133_11();
          c8 = 3;
          return { value: "HermesInternal", done: null };
        } else if (2 === tmp8) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            const obj9 = { value, done: true };
            return obj9;
          }
        } else if (3 === tmp8) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj11 = { value, done: true };
            return obj11;
          } else {
            closure_132_4 = value;
            if (closure_132_4) {
              gameStateForGame = closure_133_6.getGameStateForGame(closure_132_0.id);
              const orbsArcadeClaimableRewards = closure_133_0(closure_133_2[13]).getOrbsArcadeClaimableRewards(
                closure_132_0.rewards,
                gameStateForGame,
              );
              closure_132_6 = orbsArcadeClaimableRewards.map((id) => id.id);
              let id;
              if (gameStateForGame != null) {
                const currentRun = gameStateForGame.currentRun;
                if (currentRun != null) {
                  id = currentRun.id;
                }
              }
              c3 = id;
              if (id == null) {
                c3 = null;
              }
              closure_132_7 = c3;
              frame = closure_133_5.getFrame(closure_133_10(closure_132_3, closure_133_9));
              let tmp43 = null != frame;
              if (tmp43) {
                const tmp48 = closure_133_8(frame);
                let customId;
                if (tmp48 != null) {
                  customId = tmp48.customId;
                }
                tmp43 = customId !== closure_132_0.id;
              }
              if (tmp43) {
                closure_133_0(closure_133_2[14]).leaveFrame(frame.id);
                const obj5 = closure_133_0(closure_133_2[14]);
              }
              const obj4 = closure_133_0(closure_133_2[13]);
              const obj12 = {
                applicationId: closure_132_3,
                surface: closure_133_9,
                launch: null,
                analyticsContext: null,
              };
              const obj13 = { customId: closure_132_0.id, path: null };
              const _HermesInternal = HermesInternal;
              obj13.path = "/" + closure_132_0.id + "/";
              obj12.launch = obj13;
              const obj15 = { isStart: true, analyticsLocations: closure_132_1 };
              obj12.analyticsContext = obj15;
              closure_132_10 = closure_133_1(closure_133_2[15]).launchFrame(obj12);
              const obj6 = closure_133_1(closure_133_2[15]);
              closure_133_1(closure_133_2[15]).demoteMainFrame(closure_133_10(closure_132_3, closure_133_9));
              c6 = 2;
              c7 = 5;
              c8 = 1;
              const obj17 = { value: closure_132_10, done: false };
              return obj17;
            }
          }
        } else if (4 === tmp8) {
          c6 = 0;
          c8 = 3;
          return { value: "HermesInternal", done: null };
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c8 = 3;
          const obj18 = { value, done: true };
          return obj18;
        } else {
          closure_132_9 = value;
          c6 = 0;
          rootNavigationRef = closure_133_0(closure_133_2[16]).getRootNavigationRef();
          if (null != rootNavigationRef) {
            if (rootNavigationRef.isReady()) {
              const obj = {
                frameId: closure_132_9,
                gameId: closure_132_0.id,
                claimableRewardIdsAtLaunch: closure_132_6,
                runIdAtLaunch: closure_132_7,
                surface: closure_132_2,
              };
              rootNavigationRef.navigate("orbs-arcade-game", obj);
            }
          }
          const obj20 = closure_133_0(closure_133_2[16]);
        }
        c6 = 0;
        if (obj14.canLaunchContextlessFrame(closure_133_4.getApplication(closure_132_3))) {
          c7 = 3;
          c8 = 1;
          const obj19 = {
            value: (function ensureEnrollment() {
              const self = this;
              const apply = closure_1_12.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            })(closure_132_0),
            done: false,
          };
          return obj19;
        } else {
          closure_133_11();
        }
        obj14 = closure_133_0(closure_133_2[12]);
      } catch (tmp90) {
        if (tmp4 === c6) {
          c8 = tmp2;
          throw tmp90;
        } else if (tmp === tmp91) {
          c7 = tmp;
        } else {
          c7 = tmp5;
        }
      }
    }
  })();
};
let closure_14 = async function _launchOrbsArcadeGame(arg0, arg1, arg2) {
  let id = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
  c7 = 0;
  c8 = 0;
  c6 = 0;
  return (async (arg0, value, arg2) => {
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c8 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_4 = tmp3;
            closure_3 = tmp7;
            closure_131_0 = id;
            if (isLaunchingAnyGame.isLaunchingAnyGame) {
              c8 = 3;
            } else {
              const obj5 = { type: "ORBS_ARCADE_LAUNCH_GAME_BEGIN", gameId: id.id };
              DispatcherDefault.dispatch(obj5);
              c6 = 1;
              c7 = 2;
              c8 = 1;
              const obj7 = {
                value: (function launchGame() {
                  const self = this;
                  const apply = closure_1_13.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                })(id, tmp39, tmp40),
                done: false,
              };
              return obj7;
            }
          }
        } else if (1 === tmp7) {
          c6 = 0;
          const obj9 = { type: "ORBS_ARCADE_LAUNCH_GAME_END", gameId: closure_131_0.id };
          closure_132_1(closure_132_2[17]).dispatch(obj9);
          throw closure_5;
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 !== 2) {
          c6 = 0;
          const obj10 = { type: "ORBS_ARCADE_LAUNCH_GAME_END", gameId: closure_131_0.id };
          closure_132_1(closure_132_2[17]).dispatch(obj10);
          const obj = closure_132_1(closure_132_2[17]);
        }
        c6 = 0;
        const obj11 = { type: "ORBS_ARCADE_LAUNCH_GAME_END", gameId: closure_131_0.id };
        closure_132_1(closure_132_2[17]).dispatch(obj11);
        c8 = 3;
        const obj12 = { value, done: true };
        return obj12;
      } catch (tmp31) {
        closure_5 = tmp31;
        if (tmp4 === c6) {
          c8 = tmp2;
          throw tmp31;
        } else {
          c7 = tmp;
        }
      }
    }
  })();
};
const AbortCodes = fn(1072).AbortCodes;
const FramesConstants = fn(6957);
({ getFrameLaunchParams: closure_8, MAIN_SURFACE: closure_9, makeFrameId: closure_10 } = FramesConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/orbs_arcade/native/launchOrbsArcadeGame.tsx");

export default function launchOrbsArcadeGame() {
  const self = this;
  const apply = closure_14.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
