// === Module 17045: FramePanelHeader ===

// Module 17045 (FramePanelHeader)
import initialize from "initialize" /* 504 */;
import useGetOrFetchApplicationsDefault from "useGetOrFetchApplications" /* 7168 */;
import ActivityPanelHeader from "ActivityPanelHeader" /* 17024 */;
import InviteActivityButtonDefault from "InviteActivityButton" /* 17026 */;
import MinimizeActivityButtonDefault from "MinimizeActivityButton" /* 17030 */;
import QuestActivityButtonDefault from "QuestActivityButton" /* 17031 */;
import FramePanelStateContextDefault from "FramePanelStateContext" /* 17041 */;
import panel_LeaveActivityButtonDefault from "panel/LeaveActivityButton" /* 17046 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import FramesStore from "FramesStore" /* 9510 */;

require = fn;
function FramePanelHeaderContentInner(arg0) {
  ({ frame, landscape, setMode } = arg0);
  ({ pipState, wrapperOffset } = arg0);
  const items = [frame.applicationId];
  const first = _slicedToArray(useGetOrFetchApplicationsDefault(items), 1)[0];
  let obj = ActivityPanelHeader;
  const baseActivityPanelHeaderContent = obj.useBaseActivityPanelHeaderContent({ landscape, setMode, wrapperOffset, pipState });
  ({ gesture, headerWrapperStyles, headerStyles } = baseActivityPanelHeaderContent);
  let obj1 = ActivityPanelHeader;
  const minimizeAndQuestButtonContainerStyles = obj1.useMinimizeAndQuestButtonContainerStyles();
  let id;
  if (first != null) {
    id = first.id;
  }
  const tmp7Result = React5(InviteActivityButtonDefault, { applicationId: id });
  obj = { hasConnectedActivity: true, gesture, headerWrapperStyles, headerStyles, landscape, children: null };
  const items1 = [minimizeAndQuestButtonContainerStyles.buttonContainer, ];
  let prop;
  if (landscape) {
    prop = minimizeAndQuestButtonContainerStyles.buttonContainerLandscape;
  }
  obj = { style: items1, children: null };
  items1[1] = prop;
  let tmp15;
  if (!landscape) {
    let name;
    if (first != null) {
      name = first.name;
    }
    tmp15 = name;
  }
  const items2 = [React5(MinimizeActivityButtonDefault, { activityName: tmp15, setMode }), , ];
  obj1 = { applicationId: frame.applicationId };
  items2[1] = React5(QuestActivityButtonDefault, obj1);
  let tmp17 = null;
  if (landscape) {
    tmp17 = tmp7Result;
  }
  items2[2] = tmp17;
  obj.children = items2;
  const items3 = [React6(View, obj), , ];
  let tmp18 = null;
  if (!landscape) {
    tmp18 = tmp7Result;
  }
  items3[1] = tmp18;
  items3[2] = React5(panel_LeaveActivityButtonDefault, { frame, setMode });
  obj.children = items3;
  return React6(ActivityPanelHeader.BaseActivityPanelContent, obj);
}
const View = fn(17).View;
const asLaunched = fn(9511).asLaunched;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let closure_10 = noop.memo((arg0) => {
  let obj = initialize;
  const items = [FramesStore];
  const stateFromStores = obj.useStateFromStores(items, () => asLaunched(mainFrame.getMainFrame()));
  let tmp2 = null;
  if (null != stateFromStores) {
    obj = { frame: stateFromStores };
    const merged = Object.assign(arg0);
    tmp2 = React5(FramePanelHeaderContentInner, obj);
  }
  return tmp2;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelHeader.tsx");

export default noop.memo(() => {
  let obj = { context: FramePanelStateContextDefault };
  const baseActivityPanelHeader = obj.useBaseActivityPanelHeader(obj);
  obj = { style: baseActivityPanelHeader.headerStyles, children: React5(closure_10, { landscape: baseActivityPanelHeader.wrapperDimensions.isWindowLandscape, setMode: baseActivityPanelHeader.setMode, wrapperOffset: baseActivityPanelHeader.wrapperOffset, pipState: baseActivityPanelHeader.pipState }) };
  return React5(View, obj);
});