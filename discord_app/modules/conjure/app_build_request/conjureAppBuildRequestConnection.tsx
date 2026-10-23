// === Module 10810: conjureAppBuildRequestConnection ===

// Module 10810 (conjureAppBuildRequestConnection)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/app_build_request/conjureAppBuildRequestConnection.tsx");

export const appBuildRequestStepHandlers = {
  app_build_request(app_build_request, arg1) {
    if (null != app_build_request.app_build_request) {
      const obj2 = { type: "CONJURE_CHAT_TURN_PATCH", projectId: tmp, turnId: app_build_request.turn_id, patch: null };
      const obj3 = { appBuildRequest: app_build_request.app_build_request };
      obj2.patch = obj3;
      DispatcherDefault.dispatch(obj2);
    }
  }
};