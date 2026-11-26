// === Module 7636: waitForFrameSubscription ===

// Module 7636 (waitForFrameSubscription)
import getSocketFrameDefault from "getSocketFrame" /* 7637 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/waitForFrameSubscription.tsx");

export default function waitForFrameSubscription(waitForSubscription, frameId, ACTIVITY_JOIN) {
  closure_0 = frameId;
  return waitForSubscription.waitForSubscription(ACTIVITY_JOIN, (socket) => {
    const tmp = getSocketFrameDefault(socket.socket);
    let id;
    if (tmp != null) {
      id = tmp.id;
    }
    return id === closure_0;
  }, 120000);
};