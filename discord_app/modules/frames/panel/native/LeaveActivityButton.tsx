// === Module 16362: ? ===

// Module 16362
import BaseLeaveActivityButton from "BaseLeaveActivityButton" /* 16352 */;
import { ActivityPanelModes } from "ActivityPanelModes" /* 8740 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

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