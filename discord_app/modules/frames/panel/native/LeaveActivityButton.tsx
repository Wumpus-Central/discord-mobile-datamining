// === Module 17049: panel/LeaveActivityButton ===

// Module 17049 (panel/LeaveActivityButton)
import FramesNativeManagerDefault from "FramesNativeManager" /* 9573 */;
import LeaveActivityButton from "LeaveActivityButton" /* 17039 */;
import noop from "module_19" /* 19 */;

require = fn;
const ActivityPanelModes = fn(9510).ActivityPanelModes;
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
    }
  });
});