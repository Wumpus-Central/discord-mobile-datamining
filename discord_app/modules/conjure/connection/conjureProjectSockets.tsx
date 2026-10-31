// === Module 10874: conjureProjectSockets ===

// Module 10874 (conjureProjectSockets)
import size from "module_2" /* 2 */;

const map = new Map();
let result = size.fileFinishedImporting("modules/conjure/connection/conjureProjectSockets.tsx");

export function getConjureSocket(projectId) {
  return map.get(projectId);
}
export function setConjureSocket(projectId, ws) {
  const result = map.set(projectId, ws);
}
export function deleteConjureSocket(projectId) {
  map.delete(projectId);
}
export function sendOnConjureSocket(projectId, arg1, fn) {
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
}