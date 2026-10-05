// discord_app/modules/frames/panel/native/LeaveActivityButton.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import ActivityPanelConstants from "../../../activities/panel/ActivityPanelConstants.tsx";
import FramesNativeManagerDefault from "../../native/FramesNativeManager.tsx";
import LeaveActivityButton from "../../../activities/panel/native/LeaveActivityButton.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let frame;

const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const jsx = Fragment.jsx;
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (frame) => {
        let obj = frame(576);
        const cResult = obj.c(3);
        const tmp = frame;
        frame = frame.frame;
        const setMode = frame.setMode;
        if (cResult[0] === frame) {
          let tmp4;
          if (cResult[1] === setMode) {
            tmp4 = cResult[2];
          }
          return tmp4;
        }
        const tmp5 = jsx(tmp(17189).BaseLeaveActivityButton, {
          onPress() {
            let id;
            setMode(ActivityPanelModes.DISCONNECTED);
            const timerId = setTimeout(() => {
              const obj = setMode(dependencyMap[5]);
              obj.leaveFrame(id.id);
            }, 400);
          },
        });
        cResult[0] = frame;
        cResult[1] = setMode;
        cResult[2] = tmp5;
        tmp4 = tmp5;
      }
    : (arg0) => {
        ({ frame: require, setMode: importDefault } = arg0);
        return jsx(LeaveActivityButton.BaseLeaveActivityButton, {
          onPress() {
            let id;
            importDefault(ActivityPanelModes.DISCONNECTED);
            const timerId = setTimeout(() => {
              const obj = FramesNativeManagerDefault;
              obj.leaveFrame(id.id);
            }, 400);
          },
        });
      },
);
const result = size.fileFinishedImporting("modules/frames/panel/native/LeaveActivityButton.tsx");

export default memoResult;
