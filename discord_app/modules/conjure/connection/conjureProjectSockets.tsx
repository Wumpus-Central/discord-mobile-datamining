// === Module 11022: conjureProjectSockets ===

// Module 11022 (conjureProjectSockets)
import size from "module_2" /* 2 */;

const map = new Map();
let result = size.fileFinishedImporting("modules/conjure/connection/conjureProjectSockets.tsx");

export const getConjureSocket = function getConjureSocket(projectId) {
  return map.get(projectId);
};
export const setConjureSocket = function setConjureSocket(projectId, ws) {
  const result = map.set(projectId, ws);
};
export const deleteConjureSocket = function deleteConjureSocket(projectId) {
  map.delete(projectId);
};
export const sendOnConjureSocket = function sendOnConjureSocket(projectId, arg1, fn) {
  value = map.get(projectId);
  try {
    if (null == value) {
      const _Error = Error;
      const error = new Error("Not connected");
      throw error;
    } else {
      fn(value);
      return true;
    }
  } catch (err) {
    return false;
  }
};