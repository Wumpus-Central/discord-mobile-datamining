// === Module 10942: conjurePublishScheduleRequests ===

// Module 10942 (conjurePublishScheduleRequests)
import conjureProjectSockets from "conjureProjectSockets" /* 10854 */;
import ConjurePublishScheduleErrorDefault from "ConjurePublishScheduleError" /* 10943 */;
import size from "module_2" /* 2 */;

function rejectPendingPublishSchedule(projectId) {
  value = map.get(projectId);
  if (null != value) {
    map.delete(projectId);
    const _clearTimeout = clearTimeout;
    clearTimeout(value.timeout);
    const _Error = Error;
    const error = new Error("Publishing schedule response unavailable");
    value.reject(error);
  }
}
const map = new Map();
let result = size.fileFinishedImporting("modules/conjure/publish_schedule/conjurePublishScheduleRequests.tsx");

export const publishScheduleFrameHandlers = {
  publish_schedule(error, projectId) {
    error = error.error;
    projectId = projectId.projectId;
    value = map.get(projectId);
    if (null != value) {
      map.delete(projectId);
      const _clearTimeout = clearTimeout;
      clearTimeout(value.timeout);
      if (null != error) {
        const tmp10 = new ConjurePublishScheduleErrorDefault(error);
        value.reject(tmp10);
      } else {
        value.resolve(error.schedule);
      }
    }
  }
};
export { rejectPendingPublishSchedule };
export function fetchPublishSchedule(iter) {
  closure_0 = iter;
  closure_1 = { type: "get_publish_schedule" };
  return new Promise((resolve, reject) => {
    if (map.has(closure_0)) {
      const _Error2 = Error;
      let error = new Error("Publishing schedule request already pending");
      reject(error);
    } else {
      const _setTimeout = setTimeout;
      const obj2 = {
        resolve,
        reject,
        timeout: setTimeout(() => {
            value = map.get(closure_1_0);
            if (null != value) {
              map.delete(closure_1_0);
              const _clearTimeout = clearTimeout;
              clearTimeout(value.timeout);
              const _Error = Error;
              const error = new Error("Publishing schedule response unavailable");
              value.reject(error);
            }
          }, 15000)
      };
      const result = map.set(closure_0, obj2);
      try {
        const conjureSocket = conjureProjectSockets.getConjureSocket(closure_0);
        if (null == conjureSocket) {
          let _Error = Error;
          const error1 = new Error("Not connected");
          throw error1;
        } else {
          const result1 = obj4.sendPublishScheduleMessage(map);
        }
        obj4 = conjureSocket;
      } catch (err) {
        rejectPendingPublishSchedule(tmp2);
      }
    }
  });
}
export function deletePublishSchedule(arg0) {
  closure_0 = arg0;
  closure_1 = { type: "delete_publish_schedule", supports_errors: true };
  return new Promise((resolve, reject) => {
    if (map.has(closure_0)) {
      const _Error2 = Error;
      let error = new Error("Publishing schedule request already pending");
      reject(error);
    } else {
      const _setTimeout = setTimeout;
      const obj2 = {
        resolve,
        reject,
        timeout: setTimeout(() => {
            value = map.get(closure_1_0);
            if (null != value) {
              map.delete(closure_1_0);
              const _clearTimeout = clearTimeout;
              clearTimeout(value.timeout);
              const _Error = Error;
              const error = new Error("Publishing schedule response unavailable");
              value.reject(error);
            }
          }, 15000)
      };
      const result = map.set(closure_0, obj2);
      try {
        const conjureSocket = conjureProjectSockets.getConjureSocket(closure_0);
        if (null == conjureSocket) {
          let _Error = Error;
          const error1 = new Error("Not connected");
          throw error1;
        } else {
          const result1 = obj4.sendPublishScheduleMessage(map);
        }
        obj4 = conjureSocket;
      } catch (err) {
        rejectPendingPublishSchedule(tmp2);
      }
    }
  });
}
export function setPublishSchedule(arg0, trigger) {
  const obj = { type: "set_publish_schedule", trigger, supports_errors: true };
  closure_0 = arg0;
  return new Promise((resolve, reject) => {
    if (map.has(closure_0)) {
      const _Error2 = Error;
      let error = new Error("Publishing schedule request already pending");
      reject(error);
    } else {
      const _setTimeout = setTimeout;
      const obj2 = {
        resolve,
        reject,
        timeout: setTimeout(() => {
            value = map.get(closure_1_0);
            if (null != value) {
              map.delete(closure_1_0);
              const _clearTimeout = clearTimeout;
              clearTimeout(value.timeout);
              const _Error = Error;
              const error = new Error("Publishing schedule response unavailable");
              value.reject(error);
            }
          }, 15000)
      };
      const result = map.set(closure_0, obj2);
      try {
        const conjureSocket = conjureProjectSockets.getConjureSocket(closure_0);
        if (null == conjureSocket) {
          let _Error = Error;
          const error1 = new Error("Not connected");
          throw error1;
        } else {
          const result1 = obj4.sendPublishScheduleMessage(map);
        }
        obj4 = conjureSocket;
      } catch (err) {
        rejectPendingPublishSchedule(tmp2);
      }
    }
  });
}