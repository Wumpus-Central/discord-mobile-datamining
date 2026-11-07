// === Module 19517: FramePanelHeader ===

// Module 19517 (FramePanelHeader)
import initialize from "initialize" /* 504 */;
import useGetOrFetchApplicationsDefault from "useGetOrFetchApplications" /* 7391 */;
import ActivityPanelHeader from "ActivityPanelHeader" /* 19497 */;
import InviteActivityButtonDefault from "InviteActivityButton" /* 19499 */;
import MinimizeActivityButtonDefault from "MinimizeActivityButton" /* 19503 */;
import QuestActivityButtonDefault from "QuestActivityButton" /* 19504 */;
import FramePanelStateContextDefault from "FramePanelStateContext" /* 19513 */;
import panel_LeaveActivityButtonDefault from "panel/LeaveActivityButton" /* 19518 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import FramesStore from "FramesStore" /* 6901 */;

require = fn;
function FramePanelHeaderContentInner(arg0) {
  ({ frame, landscape, setMode } = arg0);
  ({ pipState, wrapperOffset } = arg0);
  items = [frame.applicationId];
  const first = _slicedToArray(useGetOrFetchApplicationsDefault(items), 1)[0];
  const baseActivityPanelHeaderContent = ActivityPanelHeader.useBaseActivityPanelHeaderContent({ landscape, setMode, wrapperOffset, pipState });
  ({ gesture, headerWrapperStyles, headerStyles } = baseActivityPanelHeaderContent);
  const minimizeAndQuestButtonContainerStyles = ActivityPanelHeader.useMinimizeAndQuestButtonContainerStyles();
  let id;
  if (first != null) {
    id = first.id;
  }
  const tmp7Result = metroImportDefault(InviteActivityButtonDefault, { applicationId: id });
  const obj3 = { hasConnectedActivity: true, gesture, headerWrapperStyles, headerStyles, landscape, children: null };
  const items1 = [minimizeAndQuestButtonContainerStyles.buttonContainer, ];
  let prop;
  if (landscape) {
    prop = minimizeAndQuestButtonContainerStyles.buttonContainerLandscape;
  }
  const obj4 = { style: items1, children: null };
  items1[1] = prop;
  let tmp15;
  if (!landscape) {
    let name;
    if (first != null) {
      name = first.name;
    }
    tmp15 = name;
  }
  const items2 = [metroImportDefault(MinimizeActivityButtonDefault, { activityName: tmp15, setMode }), metroImportDefault(QuestActivityButtonDefault, { applicationId: frame.applicationId }), ];
  let tmp17 = null;
  if (landscape) {
    tmp17 = tmp7Result;
  }
  items2[2] = tmp17;
  obj4.children = items2;
  const items3 = [React5(View, obj4), , ];
  let tmp18 = null;
  if (!landscape) {
    tmp18 = tmp7Result;
  }
  items3[1] = tmp18;
  items3[2] = metroImportDefault(panel_LeaveActivityButtonDefault, { frame, setMode });
  obj3.children = items3;
  return React5(ActivityPanelHeader.BaseActivityPanelContent, obj3);
}
const View = fn(17).View;
const asLaunched = fn(6902).asLaunched;
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
let closure_10 = noop.memo(function FramePanelHeaderContent(arg0) {
  items = [FramesStore];
  const stateFromStores = initialize.useStateFromStores(items, () => asLaunched(mainFrame.getMainFrame()));
  let tmp2 = null;
  if (null != stateFromStores) {
    const obj2 = { frame: stateFromStores };
    const merged = Object.assign(arg0);
    tmp2 = metroImportDefault(FramePanelHeaderContentInner, obj2);
  }
  return tmp2;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelHeader.tsx");

export default noop.memo(function FramePanelHeader() {
  const obj = ActivityPanelHeader;
  const baseActivityPanelHeader = obj.useBaseActivityPanelHeader({ context: FramePanelStateContextDefault });
  const obj3 = { style: baseActivityPanelHeader.headerStyles, children: metroImportDefault(closure_10, { landscape: baseActivityPanelHeader.wrapperDimensions.isWindowLandscape, setMode: baseActivityPanelHeader.setMode, wrapperOffset: baseActivityPanelHeader.wrapperOffset, pipState: baseActivityPanelHeader.pipState }) };
  return metroImportDefault(View, obj3);
});