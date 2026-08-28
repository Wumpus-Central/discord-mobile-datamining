// === Module 14048: toListenerRelativePosition ===

// Module 14048 (toListenerRelativePosition)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/vibegrations/voice/VibegrationsVoiceGeometry.tsx");

export const toListenerRelativePosition = function toListenerRelativePosition(closure_0, position) {
  const forward = closure_0.forward;
  ({ x, y, z } = forward);
  const sqrtResult = Math.sqrt(x * x + y * y + z * z);
  let point = null;
  if (sqrtResult >= Number.EPSILON) {
    let obj = { x: null, y: null, z: null };
    obj[0] = forward.x / sqrtResult;
    obj[1] = forward.y / sqrtResult;
    obj[2] = forward.z / sqrtResult;
    point = obj;
  }
  if (point == null) {
    point = { x: 0, y: 0, z: -1 };
  }
  const point2 = Math.abs(point.y) < 0.99 ? { x: 0, y: 1, z: 0 } : { x: 0, y: 0, z: 1 };
  const diff = point.y * point2.z - point.z * point2.y;
  const diff1 = point.z * point2.x - point.x * point2.z;
  const diff2 = point.x * point2.y - point.y * point2.x;
  const sqrtResult1 = Math.sqrt(diff * diff + diff1 * diff1 + diff2 * diff2);
  let point3 = null;
  if (sqrtResult1 >= Number.EPSILON) {
    obj = { x: null, y: null, z: null };
    obj[0] = diff / sqrtResult1;
    obj[1] = diff1 / sqrtResult1;
    obj[2] = diff2 / sqrtResult1;
    point3 = obj;
  }
  if (point3 == null) {
    point3 = { x: 1, y: 0, z: 0 };
  }
  const diff3 = point3.y * point.z - point3.z * point.y;
  const diff4 = point3.z * point.x - point3.x * point.z;
  const diff5 = point3.x * point.y - point3.y * point.x;
  const sqrtResult2 = Math.sqrt(diff3 * diff3 + diff4 * diff4 + diff5 * diff5);
  let point4 = null;
  if (sqrtResult2 >= Number.EPSILON) {
    obj = { x: null, y: null, z: null };
    obj[0] = diff3 / sqrtResult2;
    obj[1] = diff4 / sqrtResult2;
    obj[2] = diff5 / sqrtResult2;
    point4 = obj;
  }
  if (point4 == null) {
    point4 = { x: 0, y: 1, z: 0 };
  }
  const diff6 = position.x - closure_0.position.x;
  const diff7 = position.y - closure_0.position.y;
  const diff8 = position.z - closure_0.position.z;
  if (Math.sqrt(diff6 * diff6 + diff7 * diff7 + diff8 * diff8) < 0.001) {
    obj1 = { x: 0, y: 0, z: -0.001 };
  } else {
    obj1 = { x: null, y: null, z: null };
    obj1[0] = diff6 * point3.x + diff7 * point3.y + diff8 * point3.z;
    obj1[1] = diff6 * point4.x + diff7 * point4.y + diff8 * point4.z;
    obj1[2] = -diff6 * point.x + diff7 * point.y + diff8 * point.z;
  }
  return obj1;
};