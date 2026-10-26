// discord_app/modules/conjure/background_frames/ConjureBackgroundFramesManager.tsx
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import AutomaticLifecycleManager from "../../../lib/AutomaticLifecycleManager.tsx";

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
  closure_1 = tmp2;
  ({ applicationId: closure_129_0, frameId: closure_129_1, surface: closure_129_2 } = closure_0);
  await "Reflect";
  if (1 === tmp5) {
    if (arg0 === 1) {
      c4 = 3;
      throw value;
    } else if (arg0 === 2) {
      c4 = 3;
      return { value, done: true };
    } else if (closure_129_2.type === closure_130_0(closure_130_1[2]).EmbeddedSurfaceType.MAIN) {
      c3 = 2;
      c4 = 1;
      return { value: closure_130_0(closure_130_1[4])(closure_130_1[3], closure_130_1.paths), done: false };
    } else {
      c4 = 3;
    }
  } else if (arg0 === 1) {
    c4 = 3;
    throw value;
  } else if (arg0 !== 2) {
    const result = value.closeBackgroundedConjureAppFrames(closure_129_0, closure_129_1);
  }
  return value;
};
const prototype = function ConjureBackgroundFramesManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = { FRAME_LAUNCH_START: handleFrameLaunchStart };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {}
const prototype1 = new prototype();
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/background_frames/ConjureBackgroundFramesManager.tsx");

export default prototype1;
