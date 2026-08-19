// discord_app/modules/coded_links/web/CodedLinkActionCreators.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import CONFERENCE_MODE_ENABLED2 from "../../conference_mode/ConferenceModeConstants.tsx";
import dispatcherDefault from "../../../Dispatcher.tsx";

const CONFERENCE_MODE_ENABLED = CONFERENCE_MODE_ENABLED2.CONFERENCE_MODE_ENABLED;
const result = obj132.fileFinishedImporting("modules/coded_links/web/CodedLinkActionCreators.tsx");

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