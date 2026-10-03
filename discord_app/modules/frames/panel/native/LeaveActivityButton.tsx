// === Module 17175: panel/LeaveActivityButton ===

// Module 17175 (panel/LeaveActivityButton)
import FramesNativeManagerDefault from "FramesNativeManager" /* 8978 */;
import LeaveActivityButton from "LeaveActivityButton" /* 17165 */;
import noop from "module_19" /* 19 */;

require = fn;
const ActivityPanelModes = fn(8705).ActivityPanelModes;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/panel/native/LeaveActivityButton.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((frame) => {
  const cResult = frame(576).c(3);
  frame = frame.frame;
  const setMode = frame.setMode;
  if (cResult[0] === frame) {
    if (cResult[1] === setMode) {
      let tmp4 = cResult[2];
    }
    return tmp4;
  }
  const tmp5 = jsx(frame(17165).BaseLeaveActivityButton, {
    onPress() {
      setMode(ActivityPanelModes.DISCONNECTED);
      const timerId = setTimeout(() => {
        setMode(dependencyMap[5]).leaveFrame(id.id);
      }, 400);
    }
  });
  cResult[0] = frame;
  cResult[1] = setMode;
  cResult[2] = tmp5;
  tmp4 = tmp5;
  const obj = frame(576);
  const obj2 = {
    onPress() {
      setMode(ActivityPanelModes.DISCONNECTED);
      const timerId = setTimeout(() => {
        setMode(dependencyMap[5]).leaveFrame(id.id);
      }, 400);
    }
  };
}) : ((arg0) => {
  ({ frame: require, setMode: importDefault } = arg0);
  return jsx(LeaveActivityButton.BaseLeaveActivityButton, {
    onPress() {
      importDefault(ActivityPanelModes.DISCONNECTED);
      const timerId = setTimeout(() => {
        FramesNativeManagerDefault.leaveFrame(id.id);
      }, 400);
    }
  });
}));