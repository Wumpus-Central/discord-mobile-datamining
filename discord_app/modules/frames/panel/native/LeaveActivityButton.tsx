// discord_app/modules/frames/panel/native/LeaveActivityButton.tsx
import FramesNativeManagerDefault from "../../native/FramesNativeManager.tsx";
import LeaveActivityButton from "../../../activities/panel/native/LeaveActivityButton.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const ActivityPanelModes = fn(9505).ActivityPanelModes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/panel/native/LeaveActivityButton.tsx");

export default noop.memo(function LeaveActivityButton(arg0) {
  ({ frame: require, setMode: importDefault } = arg0);
  return jsx(LeaveActivityButton.BaseLeaveActivityButton, {
    onPress() {
      importDefault(ActivityPanelModes.DISCONNECTED);
      const timerId = setTimeout(() => {
        FramesNativeManagerDefault.leaveFrame(id.id);
      }, 400);
    },
  });
});
