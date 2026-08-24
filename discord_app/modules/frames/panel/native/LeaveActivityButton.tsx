// discord_app/modules/frames/panel/native/LeaveActivityButton.tsx
import BaseLeaveActivityButton from "../../../activities/panel/native/LeaveActivityButton.tsx";
import { ActivityPanelModes } from "../../../activities/panel/ActivityPanelConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";

require = arg1;
const memoResult = importAllResult.memo(function LeaveActivityButton(arg0) {
  ({ frame: require, setMode: importDefault } = arg0);
  return jsx(BaseLeaveActivityButton.BaseLeaveActivityButton, {
    onPress() {
      callback(closure_1_3.DISCONNECTED);
      const timerId = setTimeout(() => {
        closure_1_1(closure_1_2[4]).leaveFrame(id.id);
      }, 400);
    }
  });
});
const result = require("set").fileFinishedImporting("modules/frames/panel/native/LeaveActivityButton.tsx");

export default memoResult;