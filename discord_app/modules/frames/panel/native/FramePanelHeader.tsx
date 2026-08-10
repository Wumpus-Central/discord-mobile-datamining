// discord_app/modules/frames/panel/native/FramePanelHeader.tsx
import _slicedToArray from "_slicedToArray";
import importAllResult from "noop";
import { View } from "get ActivityIndicator";
import map from "map";
import { asLaunched } from "FrameLayoutModes";
import jsxProd from "jsxProd";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { useBaseActivityPanelHeaderContent } from "../../../activities/panel/native/ActivityPanelHeader.tsx";
import { InviteActivityButton } from "../../../activities/panel/native/InviteActivityButton.tsx";
import { MinimizeActivityButton } from "../../../activities/panel/native/MinimizeActivityButton.tsx";
import { useGetOrFetchApplications } from "../../../applications/useGetOrFetchApplications.tsx";
import { context } from "FramePanelStateContext.tsx";
import { LeaveActivityButton } from "LeaveActivityButton.tsx";
import { QuestActivityButtonInner } from "QuestActivityButton.tsx";

let error;
let metroImportAll;
const require = arg1;
function FramePanelHeaderContentInner(arg0) {
  let frame;
  let gesture;
  let headerStyles;
  let headerWrapperStyles;
  let landscape;
  let pipState;
  let setMode;
  let wrapperOffset;
  ({ frame, landscape, setMode } = arg0);
  ({ pipState, wrapperOffset } = arg0);
  const items = [frame.applicationId];
  const first = callback(useGetOrFetchApplications(items), 1)[0];
  let obj = useBaseActivityPanelHeaderContent;
  const baseActivityPanelHeaderContent = obj.useBaseActivityPanelHeaderContent({ landscape, setMode, wrapperOffset, pipState });
  ({ gesture, headerWrapperStyles, headerStyles } = baseActivityPanelHeaderContent);
  let obj1 = useBaseActivityPanelHeaderContent;
  const minimizeAndQuestButtonContainerStyles = obj1.useMinimizeAndQuestButtonContainerStyles();
  let id;
  if (first != null) {
    id = first.id;
  }
  const tmp7Result = closure_7(InviteActivityButton, { applicationId: id });
  obj = { hasConnectedActivity: true, gesture, headerWrapperStyles, headerStyles, landscape, children: null };
  const items1 = [minimizeAndQuestButtonContainerStyles.buttonContainer, ];
  let prop;
  if (landscape) {
    prop = minimizeAndQuestButtonContainerStyles.buttonContainerLandscape;
  }
  obj = { style: items1, children: null };
  items1[1] = prop;
  let tmp15;
  const tmp12 = View;
  const tmp4 = require;
  const tmp8 = InviteActivityButton;
  if (!landscape) {
    let name;
    if (first != null) {
      name = first.name;
    }
    tmp15 = name;
  }
  const items2 = [closure_7(MinimizeActivityButton, { activityName: tmp15, setMode }), , ];
  obj1 = { applicationId: frame.applicationId };
  items2[1] = closure_7(QuestActivityButtonInner, obj1);
  let tmp17 = null;
  if (landscape) {
    tmp17 = tmp7Result;
  }
  items2[2] = tmp17;
  obj[1] = items2;
  const items3 = [closure_8(tmp12, obj), , ];
  let tmp18 = null;
  if (!landscape) {
    tmp18 = tmp7Result;
  }
  items3[1] = tmp18;
  items3[2] = closure_7(LeaveActivityButton, { frame, setMode });
  obj[5] = items3;
  return closure_8(tmp4(16099).BaseActivityPanelContent, obj);
}
({ jsx: error, jsxs: metroImportAll } = jsxProd);
let closure_10 = importAllResult.memo((arg0) => {
  let obj = initialize;
  const items = [map];
  const stateFromStores = obj.useStateFromStores(items, () => callback(mainFrame.getMainFrame()));
  let tmp2 = null;
  if (null != stateFromStores) {
    obj = { frame: null };
    obj[0] = stateFromStores;
    const merged = Object.assign(arg0);
    tmp2 = callback2(FramePanelHeaderContentInner, obj);
  }
  return tmp2;
});
const memoResult = importAllResult.memo(() => {
  let obj = useBaseActivityPanelHeaderContent;
  obj = { context: context };
  const baseActivityPanelHeader = obj.useBaseActivityPanelHeader(obj);
  obj = { style: baseActivityPanelHeader.headerStyles, children: callback2(closure_10, obj1) };
  return callback2(View, obj);
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/frames/panel/native/FramePanelHeader.tsx");

export default memoResult;