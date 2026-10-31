// discord_app/modules/frames/panel/native/LeaveActivityButton.tsx
import leaveFrame from "../../leaveFrame.tsx";
import LeaveActivityButton from "../../../activities/panel/native/LeaveActivityButton.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const ActivityPanelModes = fn(5657).ActivityPanelModes;
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
    },
  });
});
