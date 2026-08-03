// === Module 15960: ? ===

// Module 15960
import _slicedToArray from "_slicedToArray";
import importAllResult from "noop";
import { View } from "get ActivityIndicator";
import map from "map";
import jsxProd from "jsxProd";

let closure_6;
let error;
const require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = importAllResult.memo(function FramePanelHeaderContentInner(arg0) {
  let gesture;
  let headerStyles;
  let headerWrapperStyles;
  let landscape;
  let pipState;
  let setMode;
  let wrapperOffset;
  ({ landscape, setMode } = arg0);
  ({ pipState, wrapperOffset } = arg0);
  let obj = require(589) /* initialize */;
  const items = [map];
  const stateFromStores = obj.useStateFromStores(items, () => connectedFrame.getConnectedFrame(), []);
  let applicationId;
  if (stateFromStores != null) {
    applicationId = stateFromStores.applicationId;
  }
  const items1 = [applicationId];
  const first = callback(importDefault(5587)(items1), 1)[0];
  let tmpResult = tmp(15936);
  const baseActivityPanelHeaderContent = tmpResult.useBaseActivityPanelHeaderContent({ landscape, setMode, wrapperOffset, pipState });
  ({ gesture, headerWrapperStyles, headerStyles } = baseActivityPanelHeaderContent);
  tmpResult = tmp(15936);
  const minimizeAndQuestButtonContainerStyles = tmpResult.useMinimizeAndQuestButtonContainerStyles();
  if (null == stateFromStores) {
    return null;
  } else {
    let id;
    let tmp5Result = tmp5(15938);
    if (first != null) {
      id = first.id;
    }
    obj = { applicationId: null };
    obj[0] = id;
    let tmp20Result = tmp20(tmp5Result, obj);
    obj = { hasConnectedActivity: null, gesture: null, headerWrapperStyles: null, headerStyles: null, landscape: null, children: null };
    obj[0] = null != stateFromStores;
    obj[1] = gesture;
    obj[2] = headerWrapperStyles;
    obj[3] = headerStyles;
    obj[4] = landscape;
    const items2 = [minimizeAndQuestButtonContainerStyles.buttonContainer, ];
    let prop;
    if (landscape) {
      prop = minimizeAndQuestButtonContainerStyles.buttonContainerLandscape;
    }
    const obj1 = { style: null, children: null };
    items2[1] = prop;
    obj1[0] = items2;
    let tmp15;
    tmp5Result = tmp5(15942);
    if (!landscape) {
      let name;
      if (first != null) {
        name = first.name;
      }
      tmp15 = name;
    }
    const obj2 = { activityName: null, setMode: null };
    obj2[0] = tmp15;
    obj2[1] = setMode;
    const items3 = [closure_6(tmp5Result, obj2), , ];
    tmp20Result = null != applicationId;
    if (tmp20Result) {
      const obj3 = { applicationId: null };
      obj3[0] = applicationId;
      tmp20Result = tmp20(tmp5(15943), obj3);
    }
    items3[1] = tmp20Result;
    let tmp18 = null;
    if (landscape) {
      tmp18 = tmp20Result;
    }
    items3[2] = tmp18;
    obj1[1] = items3;
    const items4 = [closure_7(View, obj1), , ];
    let tmp19 = null;
    if (!landscape) {
      tmp19 = tmp20Result;
    }
    items4[1] = tmp19;
    const obj4 = { frame: null, setMode: null };
    obj4[0] = stateFromStores;
    obj4[1] = setMode;
    items4[2] = closure_6(tmp5(15961), obj4);
    obj[5] = items4;
    return closure_7(tmp(15936).BaseActivityPanelContent, obj);
  }
});
const memoResult = importAllResult.memo(() => {
  let obj = require(15936) /* useBaseActivityPanelHeaderContent */;
  obj = { context: importDefault(15953) };
  const baseActivityPanelHeader = obj.useBaseActivityPanelHeader(obj);
  obj = { style: baseActivityPanelHeader.headerStyles, children: callback2(closure_8, obj1) };
  return callback2(View, obj);
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/frames/panel/native/FramePanelHeader.tsx");

export default memoResult;