// === Module 11431: CodedLinkActionCreators ===

// Module 11431 (CodedLinkActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import ConferenceModeConstants from "ConferenceModeConstants" /* 1081 */;
import size from "module_2" /* 2 */;

const CONFERENCE_MODE_ENABLED = ConferenceModeConstants.CONFERENCE_MODE_ENABLED;
const result = size.fileFinishedImporting("modules/coded_links/web/CodedLinkActionCreators.tsx");

export default {
  openNativeAppModal(arg0, arg1) {

  },
  nativeModalOpened(code) {
    const obj = { type: "NATIVE_APP_MODAL_OPENED", code };
    obj.dispatch(obj);
  },
  nativeModalOpenFailed(code) {
    const obj = { type: "NATIVE_APP_MODAL_OPEN_FAILED", code };
    obj.dispatch(obj);
  }
};