// === Module 16338: launchOrbsArcadeGame ===

// Module 16338 (launchOrbsArcadeGame)
import DispatcherDefault from "Dispatcher" /* 584 */;
import util from "util" /* 1128 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5649 */;
import ApplicationActionCreatorsDefault from "ApplicationActionCreators" /* 6794 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ApplicationStore from "ApplicationStore" /* 2045 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 16316 */;

require = fn;
function showLaunchError() {
  const obj2 = { text: null, variant: "critical" };
  const intl = util.intl;
  obj2.text = intl.string(util.t.CKsXk3);
  ToastActionCreatorsDefault.open("ORBS_ARCADE_LAUNCH_ERROR", obj2);
}
let closure_9 = async function _launchGame(arg0, arg1) {
  let applicationId = arg0;
  closure_1 = arg1;
  c5 = 0;
  c6 = 0;
  c4 = 0;
  return (async (arg0, value) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
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
            closure_3 = tmp3;
            closure_2 = tmp7;
            closure_130_0 = closure_1;
            closure_130_1 = undefined;
            closure_130_2 = undefined;
            closure_130_3 = undefined;
            let rootNavigationRef;
            applicationId = applicationId.applicationId;
            closure_130_1 = applicationId;
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
            closure_131_0(closure_131_2[11]).leaveFrame(closure_130_2);
            closure_131_8();
            c6 = 3;
            return { value: "IconComponent", done: null };
          }
        } else if (1 === tmp7) {
          c4 = 0;
          closure_131_8();
          c6 = 3;
          return { value: "IconComponent", done: null };
        } else if (2 === tmp7) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj8 = { value, done: true };
            return obj8;
          }
        } else if (3 === tmp7) {
          c4 = 0;
          c6 = 3;
          return { value: "IconComponent", done: null };
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj10 = { value, done: true };
          return obj10;
        } else {
          closure_130_2 = value;
          c4 = 0;
          closure_131_1(closure_131_2[9]).hideActionSheet();
          const obj15 = closure_131_1(closure_131_2[9]);
          rootNavigationRef = closure_131_0(closure_131_2[10]).getRootNavigationRef();
          if (null != rootNavigationRef) {
            if (rootNavigationRef.isReady()) {
              const obj = { frameId: closure_130_2 };
              rootNavigationRef.navigate("orbs-arcade-game", obj);
            }
          }
          const obj16 = closure_131_0(closure_131_2[10]);
        }
        c4 = 0;
        if (obj5.canLaunchContextlessFrame(closure_131_4.getApplication(closure_130_1))) {
          c4 = 2;
          const obj12 = { applicationId: closure_130_1, surface: closure_131_6, analyticsContext: null };
          const obj13 = { isStart: true, analyticsLocations: closure_130_0 };
          obj12.analyticsContext = obj13;
          closure_130_3 = closure_131_1(closure_131_2[8]).launchFrame(obj12);
          const obj6 = closure_131_1(closure_131_2[8]);
          closure_131_1(closure_131_2[8]).demoteMainFrame(closure_131_7(closure_130_1, closure_131_6));
          c5 = 4;
          c6 = 1;
          const obj14 = { value: closure_130_3, done: false };
          return obj14;
        } else {
          closure_131_8();
        }
        obj5 = closure_131_0(closure_131_2[7]);
      } catch (tmp49) {
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp49;
        } else if (tmp === tmp50) {
          c5 = tmp;
        } else {
          c5 = tmp2;
        }
      }
    }
  })();
};
let closure_10 = async function _launchOrbsArcadeGame(arg0, arg1) {
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
        return { value: "IconComponent", done: null };
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
                            const apply = closure_1_9.apply;
                            if (typeof apply === "unknown") {
                              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                            } else {
                              applyArgumentsResult = apply(self, arguments);
                            }
                            return applyArgumentsResult;
                          })(id, closure_1),
                done: false
              };
              return obj7;
            }
          }
        } else if (1 === tmp7) {
          c5 = 0;
          const obj9 = { type: "ORBS_ARCADE_LAUNCH_GAME_END", gameId: closure_130_0.id };
          closure_131_1(closure_131_2[12]).dispatch(obj9);
          throw closure_4;
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 !== 2) {
          c5 = 0;
          const obj10 = { type: "ORBS_ARCADE_LAUNCH_GAME_END", gameId: closure_130_0.id };
          closure_131_1(closure_131_2[12]).dispatch(obj10);
          const obj = closure_131_1(closure_131_2[12]);
        }
        c5 = 0;
        const obj11 = { type: "ORBS_ARCADE_LAUNCH_GAME_END", gameId: closure_130_0.id };
        closure_131_1(closure_131_2[12]).dispatch(obj11);
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
const FramesConstants = fn(6761);
({ MAIN_SURFACE: metroRequire, makeFrameId: closure_7 } = FramesConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/orbs_arcade/native/launchOrbsArcadeGame.tsx");

export default function launchOrbsArcadeGame() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};