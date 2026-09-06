// discord_app/modules/coded_links/web/CodedLinkActionCreators.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import ConferenceModeConstants from "../../conference_mode/ConferenceModeConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const CONFERENCE_MODE_ENABLED = ConferenceModeConstants.CONFERENCE_MODE_ENABLED;
const result = size.fileFinishedImporting("modules/coded_links/web/CodedLinkActionCreators.tsx");

export default {
  openNativeAppModal(arg0, arg1) {},
  nativeModalOpened(code) {
    const obj = { type: "NATIVE_APP_MODAL_OPENED", code };
    obj.dispatch(obj);
  },
  nativeModalOpenFailed(code) {
    const obj = { type: "NATIVE_APP_MODAL_OPEN_FAILED", code };
    obj.dispatch(obj);
  },
};
