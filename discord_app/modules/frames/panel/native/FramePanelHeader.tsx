// === Module 17227: FramePanelHeader ===

// Module 17227 (FramePanelHeader)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import useGetOrFetchApplicationsDefault from "useGetOrFetchApplications" /* 6670 */;
import FramesConstants from "FramesConstants" /* 8738 */;
import ActivityPanelHeader from "ActivityPanelHeader" /* 17206 */;
import InviteActivityButtonDefault from "InviteActivityButton" /* 17208 */;
import MinimizeActivityButtonDefault from "MinimizeActivityButton" /* 17212 */;
import QuestActivityButtonDefault from "QuestActivityButton" /* 17213 */;
import FramePanelStateContextDefault from "FramePanelStateContext" /* 17223 */;
import panel_LeaveActivityButtonDefault from "panel/LeaveActivityButton" /* 17228 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import FramesStore from "FramesStore" /* 9000 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
const View = react_native.View;
const asLaunched = FramesConstants.asLaunched;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let frame;
  let gesture;
  let headerStyles;
  let headerWrapperStyles;
  let items1;
  let items2;
  let landscape;
  let pipState;
  let setMode;
  let tmp4;
  let wrapperOffset;
  const obj = react2;
  const cResult = obj.c(33);
  ({ frame, landscape, setMode, pipState, wrapperOffset } = arg0);
  if (cResult[0] !== frame.applicationId) {
    const items = [frame.applicationId];
    cResult[0] = frame.applicationId;
    cResult[1] = items;
    tmp4 = items;
  } else {
    tmp4 = cResult[1];
  }
  const first = _slicedToArray(useGetOrFetchApplicationsDefault(tmp4), 1)[0];
  if (cResult[2] === landscape) {
    if (cResult[3] === pipState) {
      if (cResult[4] === setMode) {
        let tmp7;
        let tmp12;
        if (cResult[5] === wrapperOffset) {
          tmp7 = cResult[6];
        }
        const tmpResult = ActivityPanelHeader;
        const baseActivityPanelHeaderContent = tmpResult.useBaseActivityPanelHeaderContent(tmp7);
        ({ gesture, headerWrapperStyles, headerStyles } = baseActivityPanelHeaderContent);
        const tmpResult2 = ActivityPanelHeader;
        const minimizeAndQuestButtonContainerStyles = tmpResult2.useMinimizeAndQuestButtonContainerStyles();
        let id;
        if (first != null) {
          id = first.id;
        }
        if (cResult[7] !== id) {
          const obj2 = { applicationId: id };
          const tmp14 = metroImportDefault(InviteActivityButtonDefault, obj2);
          cResult[7] = id;
          cResult[8] = tmp14;
          tmp12 = tmp14;
        } else {
          tmp12 = cResult[8];
        }
        let prop;
        if (landscape) {
          prop = minimizeAndQuestButtonContainerStyles.buttonContainerLandscape;
        }
        if (cResult[9] === minimizeAndQuestButtonContainerStyles.buttonContainer) {
          let tmp16;
          if (cResult[10] === prop) {
            tmp16 = cResult[11];
          }
          let tmp17;
          if (!landscape) {
            let name;
            if (first != null) {
              name = first.name;
            }
            tmp17 = name;
          }
          if (cResult[12] === setMode) {
            let tmp19;
            let tmp22;
            if (cResult[13] === tmp17) {
              tmp19 = cResult[14];
            }
            if (cResult[15] !== frame.applicationId) {
              const obj3 = { applicationId: frame.applicationId };
              const tmp24 = metroImportDefault(QuestActivityButtonDefault, obj3);
              cResult[15] = frame.applicationId;
              cResult[16] = tmp24;
              tmp22 = tmp24;
            } else {
              tmp22 = cResult[16];
            }
            let tmp25 = null;
            if (landscape) {
              tmp25 = tmp12;
            }
            if (cResult[17] === tmp25) {
              if (cResult[18] === tmp16) {
                if (cResult[19] === tmp19) {
                  let tmp26;
                  if (cResult[20] === tmp22) {
                    tmp26 = cResult[21];
                  }
                  let tmp30 = null;
                  if (!landscape) {
                    tmp30 = tmp12;
                  }
                  if (cResult[22] === frame) {
                    let tmp31;
                    if (cResult[23] === setMode) {
                      tmp31 = cResult[24];
                    }
                    if (cResult[25] === gesture) {
                      if (cResult[26] === headerStyles) {
                        if (cResult[27] === headerWrapperStyles) {
                          if (cResult[28] === landscape) {
                            if (cResult[29] === tmp26) {
                              if (cResult[30] === tmp30) {
                                let tmp34;
                                if (cResult[31] === tmp31) {
                                  tmp34 = cResult[32];
                                }
                                return tmp34;
                              }
                            }
                          }
                        }
                      }
                    }
                    const obj4 = { hasConnectedActivity: true, gesture, headerWrapperStyles, headerStyles, landscape, children: items1 };
                    items1 = [tmp26, tmp30, tmp31];
                    const tmp36 = metroImportAll(ActivityPanelHeader.BaseActivityPanelContent, obj4);
                    cResult[25] = gesture;
                    cResult[26] = headerStyles;
                    cResult[27] = headerWrapperStyles;
                    cResult[28] = landscape;
                    cResult[29] = tmp26;
                    cResult[30] = tmp30;
                    cResult[31] = tmp31;
                    cResult[32] = tmp36;
                    tmp34 = tmp36;
                  }
                  const obj5 = { frame, setMode };
                  const tmp33 = metroImportDefault(panel_LeaveActivityButtonDefault, obj5);
                  cResult[22] = frame;
                  cResult[23] = setMode;
                  cResult[24] = tmp33;
                  tmp31 = tmp33;
                }
              }
            }
            const obj6 = { style: tmp16, children: items2 };
            items2 = [tmp19, tmp22, tmp25];
            const tmp29 = metroImportAll(View, obj6);
            cResult[17] = tmp25;
            cResult[18] = tmp16;
            cResult[19] = tmp19;
            cResult[20] = tmp22;
            cResult[21] = tmp29;
            tmp26 = tmp29;
          }
          const obj7 = { activityName: tmp17, setMode };
          const tmp21 = metroImportDefault(MinimizeActivityButtonDefault, obj7);
          cResult[12] = setMode;
          cResult[13] = tmp17;
          cResult[14] = tmp21;
          tmp19 = tmp21;
        }
        const items3 = [minimizeAndQuestButtonContainerStyles.buttonContainer, prop];
        cResult[9] = minimizeAndQuestButtonContainerStyles.buttonContainer;
        cResult[10] = prop;
        cResult[11] = items3;
        tmp16 = items3;
      }
    }
  }
  const obj8 = { landscape, setMode, wrapperOffset, pipState };
  cResult[2] = landscape;
  cResult[3] = pipState;
  cResult[4] = setMode;
  cResult[5] = wrapperOffset;
  cResult[6] = obj8;
  tmp7 = obj8;
}) : ((arg0) => {
  let frame;
  let gesture;
  let headerStyles;
  let headerWrapperStyles;
  let items2;
  let items3;
  let landscape;
  let pipState;
  let setMode;
  let wrapperOffset;
  ({ frame, landscape, setMode } = arg0);
  ({ pipState, wrapperOffset } = arg0);
  const items = [frame.applicationId];
  const first = _slicedToArray(useGetOrFetchApplicationsDefault(items), 1)[0];
  const obj = ActivityPanelHeader;
  const baseActivityPanelHeaderContent = obj.useBaseActivityPanelHeaderContent({ landscape, setMode, wrapperOffset, pipState });
  ({ gesture, headerWrapperStyles, headerStyles } = baseActivityPanelHeaderContent);
  const obj2 = ActivityPanelHeader;
  const minimizeAndQuestButtonContainerStyles = obj2.useMinimizeAndQuestButtonContainerStyles();
  let id;
  const tmp8 = InviteActivityButtonDefault;
  if (first != null) {
    id = first.id;
  }
  const tmp7Result = metroImportDefault(tmp8, { applicationId: id });
  const items1 = [minimizeAndQuestButtonContainerStyles.buttonContainer, ];
  let prop;
  const obj3 = { hasConnectedActivity: true, gesture, headerWrapperStyles, headerStyles, landscape, children: items3 };
  const BaseActivityPanelContent = ActivityPanelHeader.BaseActivityPanelContent;
  if (landscape) {
    prop = minimizeAndQuestButtonContainerStyles.buttonContainerLandscape;
  }
  const obj4 = { style: items1, children: items2 };
  items1[1] = prop;
  let tmp15;
  const tmpResult = MinimizeActivityButtonDefault;
  if (!landscape) {
    let name;
    if (first != null) {
      name = first.name;
    }
    tmp15 = name;
  }
  items2 = [metroImportDefault(tmpResult, { activityName: tmp15, setMode }), , ];
  const obj5 = { applicationId: frame.applicationId };
  items2[1] = metroImportDefault(QuestActivityButtonDefault, obj5);
  let tmp17 = null;
  if (landscape) {
    tmp17 = tmp7Result;
  }
  items2[2] = tmp17;
  items3 = [metroImportAll(View, obj4), , ];
  let tmp18 = null;
  if (!landscape) {
    tmp18 = tmp7Result;
  }
  items3[1] = tmp18;
  items3[2] = metroImportDefault(panel_LeaveActivityButtonDefault, { frame, setMode });
  return metroImportAll(BaseActivityPanelContent, obj3);
});
const memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let mainFrame;
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FramesStore];
    const fn = function s() {
      return asLaunched(mainFrame.getMainFrame());
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  let tmp8 = null;
  if (null != stateFromStores) {
    if (cResult[2] === stateFromStores) {
      let tmp10;
      if (cResult[3] === arg0) {
        tmp10 = cResult[4];
      }
      tmp8 = tmp10;
    }
    const obj2 = { frame: stateFromStores };
    const merged = Object.assign(arg0);
    const tmp16 = metroImportDefault(closure_9, obj2);
    cResult[2] = stateFromStores;
    cResult[3] = arg0;
    cResult[4] = tmp16;
    tmp10 = tmp16;
  }
  return tmp8;
}) : ((arg0) => {
  let mainFrame;
  const items = [FramesStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => asLaunched(mainFrame.getMainFrame()));
  let tmp2 = null;
  if (null != stateFromStores) {
    const obj2 = { frame: stateFromStores };
    const merged = Object.assign(arg0);
    tmp2 = metroImportDefault(closure_9, obj2);
  }
  return tmp2;
}));
const memo2 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memo2Result = memo2(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let headerStyles;
  let pipState;
  let setMode;
  let wrapperDimensions;
  let wrapperOffset;
  const obj = react2;
  const cResult = obj.c(9);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { context: FramePanelStateContextDefault };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const tmpResult = ActivityPanelHeader;
  const baseActivityPanelHeader = tmpResult.useBaseActivityPanelHeader(first);
  ({ headerStyles, wrapperDimensions, setMode, wrapperOffset, pipState } = baseActivityPanelHeader);
  if (cResult[1] === pipState) {
    if (cResult[2] === setMode) {
      if (cResult[3] === wrapperDimensions.isWindowLandscape) {
        let tmp7;
        if (cResult[4] === wrapperOffset) {
          tmp7 = cResult[5];
        }
        if (cResult[6] === headerStyles) {
          let tmp9;
          if (cResult[7] === tmp7) {
            tmp9 = cResult[8];
          }
          return tmp9;
        }
        const obj3 = { style: headerStyles, children: tmp7 };
        const tmp12 = metroImportDefault(View, obj3);
        cResult[6] = headerStyles;
        cResult[7] = tmp7;
        cResult[8] = tmp12;
        tmp9 = tmp12;
      }
    }
  }
  const obj4 = { landscape: wrapperDimensions.isWindowLandscape, setMode, wrapperOffset, pipState };
  const tmp8 = metroImportDefault(closure_10, obj4);
  cResult[1] = pipState;
  cResult[2] = setMode;
  cResult[3] = wrapperDimensions.isWindowLandscape;
  cResult[4] = wrapperOffset;
  cResult[5] = tmp8;
  tmp7 = tmp8;
}) : (() => {
  let obj4;
  const obj = ActivityPanelHeader;
  const obj2 = { context: FramePanelStateContextDefault };
  const baseActivityPanelHeader = obj.useBaseActivityPanelHeader(obj2);
  const obj3 = { style: baseActivityPanelHeader.headerStyles, children: metroImportDefault(closure_10, obj4) };
  obj4 = { landscape: baseActivityPanelHeader.wrapperDimensions.isWindowLandscape, setMode: baseActivityPanelHeader.setMode, wrapperOffset: baseActivityPanelHeader.wrapperOffset, pipState: baseActivityPanelHeader.pipState };
  return metroImportDefault(View, obj3);
}));
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelHeader.tsx");

export default memo2Result;