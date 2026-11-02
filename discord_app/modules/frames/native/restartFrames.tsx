// === Module 10926: restartFrames ===

// Module 10926 (restartFrames)
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10927 */;
import FramesStore from "FramesStore" /* 6846 */;

function restartFrame(data) {
  if (tmp) {
    FramesActionCreatorsDefault.refreshProxyTicket(data.id).catch(() => {

    });
    const refreshProxyTicketResult = FramesActionCreatorsDefault.refreshProxyTicket(data.id);
  }
  tmp = isLaunched(data) && !data.data.proxyTicketRefreshing;
}
const isLaunched = fn(6847).isLaunched;
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