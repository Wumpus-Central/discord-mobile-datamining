// discord_app/modules/conjure/publish_eval/conjurePublishEvalConnection.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import v1 from "../../../../_runtime/01269_v1.js";
import conjureProjectSockets from "../connection/conjureProjectSockets.tsx";
import size from "../../../../_runtime/metro/00002__.js";

function rejectPendingPublishEval(projectId) {
  value = map.get(projectId);
  if (null != value) {
    map.delete(projectId);
    const _clearTimeout = clearTimeout;
    clearTimeout(value.timeout);
    const _Error = Error;
    const error = new Error("Publish eval result unavailable");
    value.reject(error);
  }
}
const map = new Map();
let result = size.fileFinishedImporting("modules/conjure/publish_eval/conjurePublishEvalConnection.tsx");

export const publishEvalFrameHandlers = {
  publish_eval_result(request_id, projectId) {
    projectId = projectId.projectId;
    value = map.get(projectId);
    let requestId;
    if (value != null) {
      requestId = value.requestId;
    }
    if (requestId === request_id.request_id) {
      map.delete(projectId);
      const _clearTimeout = clearTimeout;
      clearTimeout(value.timeout);
      value.resolve(request_id);
    }
  },
};
export { rejectPendingPublishEval };
export function releasePublishEvalOnTicketRefused(projectId, status) {
  status = undefined;
  if (status != null) {
    status = status.status;
  }
  let tmp2 = 403 !== status;
  if (tmp2) {
    tmp2 = 404 !== status;
  }
  if (!tmp2) {
    const obj2 = { type: "CONJURE_PUBLISH_EVAL_PROJECT_GONE", projectId };
    DispatcherDefault.dispatch(obj2);
  }
}
export function sendConjurePublishEval(projectId, arg1) {
  closure_0 = projectId;
  closure_1 = arg1;
  return new Promise((resolve, reject) => {
    if (map.has(closure_0)) {
      const _Error2 = Error;
      let error = new Error("Publish eval already pending");
      reject(error);
    } else {
      const v4Result = v1.v4();
      const _setTimeout = setTimeout;
      const obj3 = {
        requestId: v4Result,
        resolve,
        reject,
        timeout: setTimeout(() => {
          value = map.get(projectId);
          if (null != value) {
            map.delete(projectId);
            const _clearTimeout = clearTimeout;
            clearTimeout(value.timeout);
            const _Error = Error;
            const error = new Error("Publish eval result unavailable");
            value.reject(error);
          }
        }, 15000),
      };
      const result = map.set(closure_0, obj3);
      try {
        const conjureSocket = conjureProjectSockets.getConjureSocket(closure_0);
        if (null == conjureSocket) {
          let _Error = Error;
          const error1 = new Error("Not connected");
          throw error1;
        } else {
          const obj4 = { type: "submit_publish_eval", request_id: v4Result };
          const merged = Object.assign(closure_1);
          obj5.sendPublishEval(obj4);
        }
        obj5 = conjureSocket;
        const tmp5Result = conjureProjectSockets;
      } catch (err) {
        rejectPendingPublishEval(tmp2);
      }
    }
  });
}
