// === Module 18735: ConjureBackgroundFramesManager ===

// Module 18735 (ConjureBackgroundFramesManager)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7212 */;

const require = fn;
function handleFrameLaunchStart() {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_4 = async function _handleFrameLaunchStart(arg0) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
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
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_2 = tmp5;
          closure_1 = tmp2;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          ({ applicationId: closure_129_0, frameId: closure_129_1, surface: closure_129_2 } = closure_0);
          c3 = 1;
          c4 = 1;
          return { value: "Reflect", done: true };
        }
      } else {
        if (1 === tmp5) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else if (closure_129_2.type === closure_130_0(closure_130_1[2]).EmbeddedSurfaceType.MAIN) {
            c3 = 2;
            c4 = 1;
            const obj5 = { value: closure_130_0(closure_130_1[4])(closure_130_1[3], closure_130_1.paths), done: false };
            return obj5;
          } else {
            c4 = 3;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 !== 2) {
          const result = value.closeBackgroundedConjureAppFrames(closure_129_0, closure_129_1);
        }
        c4 = 3;
        const obj = { value, done: true };
        return obj;
      }
    } catch (tmp16) {
      c4 = tmp;
      throw tmp16;
    }
  }
};
const prototype = function ConjureBackgroundFramesManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = { FRAME_LAUNCH_START: handleFrameLaunchStart };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
const prototype1 = new prototype();
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/background_frames/ConjureBackgroundFramesManager.tsx");

export default prototype1;