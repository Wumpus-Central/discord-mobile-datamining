// discord_app/modules/frames/panel/native/FramePanelHeader.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import useGetOrFetchApplicationsDefault from "../../../applications/useGetOrFetchApplications.tsx";
import useBaseActivityPanelHeaderContent from "../../../activities/panel/native/ActivityPanelHeader.tsx";
import _modDef16519 from "../../../activities/panel/native/InviteActivityButton.tsx";
import _modDef16523 from "../../../activities/panel/native/MinimizeActivityButton.tsx";
import QuestActivityButtonInnerDefault from "QuestActivityButton.tsx";
import contextDefault from "FramePanelStateContext.tsx";
import _modDef16539 from "LeaveActivityButton.tsx";
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../FramesStore.tsx";
import { asLaunched } from "../../FramesConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
function FramePanelHeaderContentInner(arg0) {
  ({ frame, landscape, setMode } = arg0);
  ({ pipState, wrapperOffset } = arg0);
  const items = [frame.applicationId];
  const first = callback(useGetOrFetchApplicationsDefault(items), 1)[0];
  let obj = useBaseActivityPanelHeaderContent;
  const baseActivityPanelHeaderContent = obj.useBaseActivityPanelHeaderContent({ landscape, setMode, wrapperOffset, pipState });
  ({ gesture, headerWrapperStyles, headerStyles } = baseActivityPanelHeaderContent);
  obj1 = useBaseActivityPanelHeaderContent;
  const minimizeAndQuestButtonContainerStyles = obj1.useMinimizeAndQuestButtonContainerStyles();
  let id;
  if (first != null) {
    id = first.id;
  }
  const tmp7Result = closure_7(_modDef16519, { applicationId: id });
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
  const tmp8 = _modDef16519;
  if (!landscape) {
    let name;
    if (first != null) {
      name = first.name;
    }
    tmp15 = name;
  }
  const items2 = [closure_7(_modDef16523, { activityName: tmp15, setMode }), , ];
  obj1 = { applicationId: frame.applicationId };
  items2[1] = closure_7(QuestActivityButtonInnerDefault, obj1);
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
  items3[2] = closure_7(_modDef16539, { frame, setMode });
  obj[5] = items3;
  return closure_8(useBaseActivityPanelHeaderContent.BaseActivityPanelContent, obj);
}
({ jsx: error, jsxs: closure_8 } = jsxProd);
let closure_10 = importAllResult.memo((arg0) => {
  let obj = initialize;
  const items = [closure_5];
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
  obj = { context: contextDefault };
  const baseActivityPanelHeader = obj.useBaseActivityPanelHeader(obj);
  obj = { style: baseActivityPanelHeader.headerStyles, children: callback2(closure_10, obj1) };
  return callback2(View, obj);
});
const result = require("set").fileFinishedImporting("modules/frames/panel/native/FramePanelHeader.tsx");

export default memoResult;