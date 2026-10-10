// === Module 17733: panel/LeaveActivityButton ===

// Module 17733 (panel/LeaveActivityButton)
import leaveFrame from "leaveFrame" /* 10821 */;
import LeaveActivityButton from "LeaveActivityButton" /* 17723 */;
import noop from "module_19" /* 19 */;

require = fn;
const ActivityPanelModes = fn(6067).ActivityPanelModes;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/panel/native/LeaveActivityButton.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function LeaveActivityButton(frame) {
  const cResult = frame(setMode[4]).c(3);
  frame = frame.frame;
  setMode = frame.setMode;
  if (cResult[0] === frame) {
    if (cResult[1] === setMode) {
      let tmp4 = cResult[2];
    }
    return tmp4;
  }
  const tmp5 = jsx(frame(setMode[6]).BaseLeaveActivityButton, {
    onPress() {
      setMode(ActivityPanelModes.DISCONNECTED);
      const timerId = setTimeout(() => {
        frame(setMode[5]).leaveFrame(id.id);
      }, 400);
    }
  });
  cResult[0] = frame;
  cResult[1] = setMode;
  cResult[2] = tmp5;
  tmp4 = tmp5;
}) : (function LeaveActivityButton(arg0) {
  ({ frame: require, setMode: dependencyMap } = arg0);
  return jsx(LeaveActivityButton.BaseLeaveActivityButton, {
    onPress() {
      dependencyMap(ActivityPanelModes.DISCONNECTED);
      const timerId = setTimeout(() => {
        leaveFrame.leaveFrame(id.id);
      }, 400);
    }
  });
}));