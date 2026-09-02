// === Module 8491: ? ===

// Module 8491
import set from "set" /* 2 */;
import CONFERENCE_MODE_ENABLED2 from "CONFERENCE_MODE_ENABLED" /* 680 */;
import dispatcherDefault from "dispatcher" /* 706 */;

const CONFERENCE_MODE_ENABLED = CONFERENCE_MODE_ENABLED2.CONFERENCE_MODE_ENABLED;
const result = set.fileFinishedImporting("modules/coded_links/web/CodedLinkActionCreators.tsx");

export default {
  openNativeAppModal(arg0, arg1) {

  },
  nativeModalOpened(code) {
    let obj = dispatcherDefault;
    obj = { type: "NATIVE_APP_MODAL_OPENED", code };
    obj.dispatch(obj);
  },
  nativeModalOpenFailed(code) {
    let obj = dispatcherDefault;
    obj = { type: "NATIVE_APP_MODAL_OPEN_FAILED", code };
    obj.dispatch(obj);
  }
};