// discord_app/modules/orbs_arcade/native/launchOrbsArcadeGame.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import util from "../../../intl/index.native.tsx";
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
      return { value: "IconComponent", done: "IconComponent" };
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
let closure_13 = async function _launchGame(arg0, arg1) {
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
        return { value: "IconComponent", done: "IconComponent" };
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
            const obj7 = { value, done: true };
            return obj7;
          } else {
            closure_3 = tmp3;
            closure_2 = tmp8;
            closure_130_0 = applicationId;
            closure_130_1 = closure_1;
            closure_130_2 = undefined;
            closure_130_3 = undefined;
            closure_130_4 = undefined;
            closure_130_5 = undefined;
            let frame;
            closure_130_7 = undefined;
            let rootNavigationRef;
            applicationId = applicationId.applicationId;
            closure_130_2 = applicationId;
            if (null != applicationId) {
              c4 = 1;
              if (null == application.getApplication(applicationId)) {
                const items = [applicationId];
                c5 = 2;
                c6 = 1;
                const obj8 = { value: ApplicationActionCreatorsDefault.fetchApplications(items, false), done: false };
                return obj8;
              }
            }
            c6 = 3;
            closure_131_0(closure_131_2[13]).leaveFrame(closure_130_4);
            closure_131_11();
            c6 = 3;
            return { value: "IconComponent", done: "IconComponent" };
          }
        } else if (1 === tmp8) {
          c4 = 0;
          closure_131_11();
          c6 = 3;
          return { value: "IconComponent", done: "IconComponent" };
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
            const obj11 = { value, done: true };
            return obj11;
          } else {
            closure_130_3 = value;
            if (closure_130_3) {
              const orbsArcadeClaimableRewards = closure_131_0(closure_131_2[12]).getOrbsArcadeClaimableRewards(
                closure_130_0.rewards,
                closure_131_6.getGameStateForGame(closure_130_0.id),
              );
              closure_130_5 = orbsArcadeClaimableRewards.map((id) => id.id);
              frame = closure_131_5.getFrame(closure_131_10(closure_130_2, closure_131_9));
              let tmp36 = null != frame;
              if (tmp36) {
                const tmp41 = closure_131_8(frame);
                let customId;
                if (tmp41 != null) {
                  customId = tmp41.customId;
                }
                tmp36 = customId !== closure_130_0.id;
              }
              if (tmp36) {
                closure_131_0(closure_131_2[13]).leaveFrame(frame.id);
                const obj5 = closure_131_0(closure_131_2[13]);
              }
              c4 = 2;
              const obj4 = closure_131_0(closure_131_2[12]);
              const obj12 = {
                applicationId: closure_130_2,
                surface: closure_131_9,
                launch: null,
                analyticsContext: null,
              };
              const obj13 = { customId: closure_130_0.id, path: null };
              const _HermesInternal = HermesInternal;
              obj13.path = "/" + closure_130_0.id + "/";
              obj12.launch = obj13;
              const obj15 = { isStart: true, analyticsLocations: closure_130_1 };
              obj12.analyticsContext = obj15;
              closure_130_7 = closure_131_1(closure_131_2[14]).launchFrame(obj12);
              const obj6 = closure_131_1(closure_131_2[14]);
              closure_131_1(closure_131_2[14]).demoteMainFrame(closure_131_10(closure_130_2, closure_131_9));
              c5 = 5;
              c6 = 1;
              const obj17 = { value: closure_130_7, done: false };
              return obj17;
            }
          }
        } else if (4 === tmp8) {
          c4 = 0;
          c6 = 3;
          return { value: "IconComponent", done: "IconComponent" };
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj18 = { value, done: true };
          return obj18;
        } else {
          closure_130_4 = value;
          c4 = 0;
          closure_131_1(closure_131_2[15]).hideActionSheet();
          const obj20 = closure_131_1(closure_131_2[15]);
          rootNavigationRef = closure_131_0(closure_131_2[16]).getRootNavigationRef();
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
          const obj21 = closure_131_0(closure_131_2[16]);
        }
        c4 = 0;
        if (obj14.canLaunchContextlessFrame(closure_131_4.getApplication(closure_130_2))) {
          c5 = 3;
          c6 = 1;
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
            })(closure_130_0),
            done: false,
          };
          return obj19;
        } else {
          closure_131_11();
        }
        obj14 = closure_131_0(closure_131_2[11]);
      } catch (tmp83) {
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp83;
        } else if (tmp === tmp84) {
          c5 = tmp;
        } else {
          c5 = tmp5;
        }
      }
    }
  })();
};
let closure_14 = async function _launchOrbsArcadeGame(arg0, arg1) {
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
        return { value: "IconComponent", done: "IconComponent" };
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
            if (isLaunchingAnyGame.isLaunchingAnyGame) {
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
                  const apply = closure_1_13.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                })(id, tmp39),
                done: false,
              };
              return obj7;
            }
          }
        } else if (1 === tmp7) {
          c5 = 0;
          const obj9 = { type: "ORBS_ARCADE_LAUNCH_GAME_END", gameId: closure_130_0.id };
          closure_131_1(closure_131_2[17]).dispatch(obj9);
          throw closure_4;
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 !== 2) {
          c5 = 0;
          const obj10 = { type: "ORBS_ARCADE_LAUNCH_GAME_END", gameId: closure_130_0.id };
          closure_131_1(closure_131_2[17]).dispatch(obj10);
          const obj = closure_131_1(closure_131_2[17]);
        }
        c5 = 0;
        const obj11 = { type: "ORBS_ARCADE_LAUNCH_GAME_END", gameId: closure_130_0.id };
        closure_131_1(closure_131_2[17]).dispatch(obj11);
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
const AbortCodes = fn(1084).AbortCodes;
const FramesConstants = fn(6834);
({ getFrameLaunchParams: closure_8, MAIN_SURFACE: closure_9, makeFrameId: c10 } = FramesConstants);
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
