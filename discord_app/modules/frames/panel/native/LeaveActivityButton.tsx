// === Module 19467: panel/LeaveActivityButton ===

// Module 19467 (panel/LeaveActivityButton)
import leaveFrame from "leaveFrame" /* 11078 */;
import LeaveActivityButton from "LeaveActivityButton" /* 19308 */;
import noop from "module_19" /* 19 */;

require = fn;
const ActivityPanelModes = fn(5793).ActivityPanelModes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/panel/native/LeaveActivityButton.tsx");

export default noop.memo(function LeaveActivityButton(arg0) {
  ({ frame: require, setMode: dependencyMap } = arg0);
  return jsx(LeaveActivityButton.BaseLeaveActivityButton, {
    onPress() {
      dependencyMap(ActivityPanelModes.DISCONNECTED);
      const timerId = setTimeout(() => {
        leaveFrame.leaveFrame(id.id);
      }, 400);
    }
  });
});