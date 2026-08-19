// === Module 16268: ? ===

// Module 16268
import BaseLeaveActivityButton from "BaseLeaveActivityButton" /* 16255 */;
import { ActivityPanelModes } from "ActivityPanelModes" /* 8703 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = fn;
const memoResult = importAllResult.memo(function LeaveActivityButton(arg0) {
  ({ frame: require, setMode: importDefault } = arg0);
  return jsx(BaseLeaveActivityButton.BaseLeaveActivityButton, {
    onPress() {
      callback(ActivityPanelModes.DISCONNECTED);
      const timerId = setTimeout(() => {
        closure_1_1(closure_1_2[4]).leaveFrame(id.id);
      }, 400);
    }
  });
});
const result = require("obj132").fileFinishedImporting("modules/frames/panel/native/LeaveActivityButton.tsx");

export default memoResult;