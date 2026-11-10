// === Module 11069: restartFrames ===

// Module 11069 (restartFrames)
import FramesActionCreatorsDefault from "FramesActionCreators" /* 11070 */;
import FramesStore from "FramesStore" /* 6904 */;

function restartFrame(frame) {
  if (tmp) {
    FramesActionCreatorsDefault.refreshProxyTicket(frame.id).catch(() => {

    });
    const refreshProxyTicketResult = FramesActionCreatorsDefault.refreshProxyTicket(frame.id);
  }
  tmp = isLaunched(frame) && !frame.data.proxyTicketRefreshing;
}
const isLaunched = fn(6905).isLaunched;
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/native/restartFrames.tsx");

export { restartFrame };
export function restartAppFrames(application_id) {
  if (null != application_id) {
    const allFrames = FramesStore.getAllFrames();
    for (const item10010 of allFrames) {
      if (item10010.applicationId === arg0) {
        let tmp8 = restartFrame(tmp5);
      }
      continue;
    }
  }
}