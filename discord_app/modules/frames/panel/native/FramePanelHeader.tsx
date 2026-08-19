// discord_app/modules/frames/panel/native/FramePanelHeader.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import useGetOrFetchApplicationsDefault from "../../../applications/useGetOrFetchApplications.tsx";
import useBaseActivityPanelHeaderContent from "../../../activities/panel/native/ActivityPanelHeader.tsx";
import _modDef16245 from "../../../activities/panel/native/InviteActivityButton.tsx";
import _modDef16249 from "../../../activities/panel/native/MinimizeActivityButton.tsx";
import QuestActivityButtonInnerDefault from "QuestActivityButton.tsx";
import contextDefault from "FramePanelStateContext.tsx";
import _modDef16268 from "LeaveActivityButton.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import map from "../../FramesStore.tsx";
import { asLaunched } from "../../FramesConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";

require = fn;
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
  const tmp7Result = callback(_modDef16245, { applicationId: id });
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
  const items2 = [callback(_modDef16249, { activityName: tmp15, setMode }), , ];
  obj1 = { applicationId: frame.applicationId };
  items2[1] = callback(QuestActivityButtonInnerDefault, obj1);
  let tmp17 = null;
  if (landscape) {
    tmp17 = tmp7Result;
  }
  items2[2] = tmp17;
  obj[1] = items2;
  const items3 = [callback2(View, obj), , ];
  let tmp18 = null;
  if (!landscape) {
    tmp18 = tmp7Result;
  }
  items3[1] = tmp18;
  items3[2] = callback(_modDef16268, { frame, setMode });
  obj[5] = items3;
  return callback2(useBaseActivityPanelHeaderContent.BaseActivityPanelContent, obj);
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
  let obj = { context: contextDefault };
  const baseActivityPanelHeader = obj.useBaseActivityPanelHeader(obj);
  obj = { style: baseActivityPanelHeader.headerStyles, children: callback2(closure_10, obj1) };
  return callback2(View, obj);
});
const result = require("obj132").fileFinishedImporting("modules/frames/panel/native/FramePanelHeader.tsx");

export default memoResult;