// === Module 11028: conjureLiveReloadConnection ===

// Module 11028 (conjureLiveReloadConnection)
import DispatcherDefault from "Dispatcher" /* 584 */;
import conjureProjectSockets from "conjureProjectSockets" /* 11010 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/live_reload/conjureLiveReloadConnection.tsx");

export const liveReloadFrameHandlers = {
  live_reload(enabled, projectId) {
    const obj2 = { type: "CONJURE_LIVE_RELOAD_SET", projectId: projectId.projectId, enabled: enabled.enabled, error: null, phase: null, step: null, background: null };
    let error = enabled.error;
    if (error == null) {
      error = null;
    }
    obj2.error = error;
    let phase = enabled.phase;
    if (phase == null) {
      phase = null;
    }
    obj2.phase = phase;
    let step = enabled.step;
    if (step == null) {
      step = null;
    }
    obj2.step = step;
    obj2.background = true === enabled.background;
    DispatcherDefault.dispatch(obj2);
  }
};
export const sendLiveReload = function sendLiveReload(projectId, flag) {
  const conjureSocket = conjureProjectSockets.getConjureSocket(projectId);
  try {
    if (null == conjureSocket) {
      const _Error = Error;
      const error = new Error("Not connected");
      throw error;
    } else {
      conjureSocket.sendLiveReload(flag);
      return true;
    }
  } catch (err) {
    return false;
  }
};