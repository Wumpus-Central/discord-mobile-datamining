// === Module 17198: FramePanelHeader ===

// Module 17198 (FramePanelHeader)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import useGetOrFetchApplicationsDefault from "useGetOrFetchApplications" /* 6663 */;
import ActivityPanelHeader from "ActivityPanelHeader" /* 17177 */;
import InviteActivityButtonDefault from "InviteActivityButton" /* 17179 */;
import MinimizeActivityButtonDefault from "MinimizeActivityButton" /* 17183 */;
import QuestActivityButtonDefault from "QuestActivityButton" /* 17184 */;
import FramePanelStateContextDefault from "FramePanelStateContext" /* 17194 */;
import panel_LeaveActivityButtonDefault from "panel/LeaveActivityButton" /* 17199 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import FramesStore from "FramesStore" /* 8703 */;

require = fn;
const View = fn(17).View;
const asLaunched = fn(8704).asLaunched;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(33);
  ({ frame, landscape, setMode, pipState, wrapperOffset } = arg0);
  if (cResult[0] !== frame.applicationId) {
    const items = [frame.applicationId];
    cResult[0] = frame.applicationId;
    cResult[1] = items;
    let tmp4 = items;
  } else {
    tmp4 = cResult[1];
  }
  const first = _slicedToArray(useGetOrFetchApplicationsDefault(tmp4), 1)[0];
  if (cResult[2] === landscape) {
    if (cResult[3] === pipState) {
      if (cResult[4] === setMode) {
        if (cResult[5] === wrapperOffset) {
          let tmp7 = cResult[6];
        }
        const baseActivityPanelHeaderContent = ActivityPanelHeader.useBaseActivityPanelHeaderContent(tmp7);
        ({ gesture, headerWrapperStyles, headerStyles } = baseActivityPanelHeaderContent);
        const tmpResult = ActivityPanelHeader;
        const minimizeAndQuestButtonContainerStyles = ActivityPanelHeader.useMinimizeAndQuestButtonContainerStyles();
        let id;
        if (first != null) {
          id = first.id;
        }
        if (cResult[7] !== id) {
          const obj2 = { applicationId: id };
          const tmp14 = React5(InviteActivityButtonDefault, obj2);
          cResult[7] = id;
          cResult[8] = tmp14;
          let tmp12 = tmp14;
        } else {
          tmp12 = cResult[8];
        }
        let prop;
        if (landscape) {
          prop = minimizeAndQuestButtonContainerStyles.buttonContainerLandscape;
        }
        if (cResult[9] === minimizeAndQuestButtonContainerStyles.buttonContainer) {
          if (cResult[10] === prop) {
            let tmp16 = cResult[11];
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
            if (cResult[13] === tmp17) {
              let tmp19 = cResult[14];
            }
            if (cResult[15] !== frame.applicationId) {
              const obj3 = { applicationId: frame.applicationId };
              const tmp24 = React5(QuestActivityButtonDefault, obj3);
              cResult[15] = frame.applicationId;
              cResult[16] = tmp24;
              let tmp22 = tmp24;
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
                  if (cResult[20] === tmp22) {
                    let tmp26 = cResult[21];
                  }
                  let tmp30 = null;
                  if (!landscape) {
                    tmp30 = tmp12;
                  }
                  if (cResult[22] === frame) {
                    if (cResult[23] === setMode) {
                      let tmp31 = cResult[24];
                    }
                    if (cResult[25] === gesture) {
                      if (cResult[26] === headerStyles) {
                        if (cResult[27] === headerWrapperStyles) {
                          if (cResult[28] === landscape) {
                            if (cResult[29] === tmp26) {
                              if (cResult[30] === tmp30) {
                                if (cResult[31] === tmp31) {
                                  let tmp34 = cResult[32];
                                }
                                return tmp34;
                              }
                            }
                          }
                        }
                      }
                    }
                    const obj4 = { hasConnectedActivity: true, gesture, headerWrapperStyles, headerStyles, landscape, children: null };
                    const items1 = [tmp26, tmp30, tmp31];
                    obj4.children = items1;
                    const tmp36 = closure_1_8(ActivityPanelHeader.BaseActivityPanelContent, obj4);
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
                  const tmp33 = React5(panel_LeaveActivityButtonDefault, obj5);
                  cResult[22] = frame;
                  cResult[23] = setMode;
                  cResult[24] = tmp33;
                  tmp31 = tmp33;
                }
              }
            }
            const obj6 = { style: tmp16, children: null };
            const items2 = [tmp19, tmp22, tmp25];
            obj6.children = items2;
            const tmp29 = closure_1_8(View, obj6);
            cResult[17] = tmp25;
            cResult[18] = tmp16;
            cResult[19] = tmp19;
            cResult[20] = tmp22;
            cResult[21] = tmp29;
            tmp26 = tmp29;
          }
          const obj7 = { activityName: tmp17, setMode };
          const tmp21 = React5(MinimizeActivityButtonDefault, obj7);
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
        const tmpResult2 = ActivityPanelHeader;
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
  ({ frame, landscape, setMode } = arg0);
  ({ pipState, wrapperOffset } = arg0);
  const items = [frame.applicationId];
  const first = _slicedToArray(useGetOrFetchApplicationsDefault(items), 1)[0];
  const baseActivityPanelHeaderContent = ActivityPanelHeader.useBaseActivityPanelHeaderContent({ landscape, setMode, wrapperOffset, pipState });
  ({ gesture, headerWrapperStyles, headerStyles } = baseActivityPanelHeaderContent);
  const minimizeAndQuestButtonContainerStyles = ActivityPanelHeader.useMinimizeAndQuestButtonContainerStyles();
  let id;
  if (first != null) {
    id = first.id;
  }
  const tmp7Result = React5(InviteActivityButtonDefault, { applicationId: id });
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
  const items2 = [React5(MinimizeActivityButtonDefault, { activityName: tmp15, setMode }), React5(QuestActivityButtonDefault, { applicationId: frame.applicationId }), ];
  let tmp17 = null;
  if (landscape) {
    tmp17 = tmp7Result;
  }
  items2[2] = tmp17;
  obj4.children = items2;
  const items3 = [closure_1_8(View, obj4), , ];
  let tmp18 = null;
  if (!landscape) {
    tmp18 = tmp7Result;
  }
  items3[1] = tmp18;
  items3[2] = React5(panel_LeaveActivityButtonDefault, { frame, setMode });
  obj3.children = items3;
  return closure_1_8(ActivityPanelHeader.BaseActivityPanelContent, obj3);
});
ReactCompilerGating = fn(558);
let closure_10 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(5);
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
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  if (null == stateFromStores) {
    return null;
  } else {
    if (cResult[2] === stateFromStores) {
    }
    const obj2 = { frame: stateFromStores };
    const merged = Object.assign(arg0);
    const tmp15 = React5(closure_9, obj2);
    cResult[2] = stateFromStores;
    cResult[3] = arg0;
    cResult[4] = tmp15;
  }
  const tmpResult = initialize;
}) : ((arg0) => {
  const items = [FramesStore];
  const stateFromStores = initialize.useStateFromStores(items, () => asLaunched(mainFrame.getMainFrame()));
  let tmp2 = null;
  if (null != stateFromStores) {
    const obj2 = { frame: stateFromStores };
    const merged = Object.assign(arg0);
    tmp2 = React5(closure_9, obj2);
  }
  return tmp2;
}));
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelHeader.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(9);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { context: FramePanelStateContextDefault };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  const baseActivityPanelHeader = ActivityPanelHeader.useBaseActivityPanelHeader(first);
  ({ headerStyles, wrapperDimensions, setMode, wrapperOffset, pipState } = baseActivityPanelHeader);
  if (cResult[1] === pipState) {
    if (cResult[2] === setMode) {
      if (cResult[3] === wrapperDimensions.isWindowLandscape) {
        if (cResult[4] === wrapperOffset) {
          let tmp7 = cResult[5];
        }
        if (cResult[6] === headerStyles) {
          if (cResult[7] === tmp7) {
            let tmp9 = cResult[8];
          }
          return tmp9;
        }
        const obj3 = { style: headerStyles, children: tmp7 };
        const tmp12 = React5(View, obj3);
        cResult[6] = headerStyles;
        cResult[7] = tmp7;
        cResult[8] = tmp12;
        tmp9 = tmp12;
      }
    }
  }
  const tmp8 = React5(closure_10, { landscape: wrapperDimensions.isWindowLandscape, setMode, wrapperOffset, pipState });
  cResult[1] = pipState;
  cResult[2] = setMode;
  cResult[3] = wrapperDimensions.isWindowLandscape;
  cResult[4] = wrapperOffset;
  cResult[5] = tmp8;
  tmp7 = tmp8;
  const obj4 = { landscape: wrapperDimensions.isWindowLandscape, setMode, wrapperOffset, pipState };
  const tmpResult = ActivityPanelHeader;
}) : (() => {
  const obj = ActivityPanelHeader;
  const baseActivityPanelHeader = obj.useBaseActivityPanelHeader({ context: FramePanelStateContextDefault });
  const obj3 = { style: baseActivityPanelHeader.headerStyles, children: React5(closure_10, { landscape: baseActivityPanelHeader.wrapperDimensions.isWindowLandscape, setMode: baseActivityPanelHeader.setMode, wrapperOffset: baseActivityPanelHeader.wrapperOffset, pipState: baseActivityPanelHeader.pipState }) };
  return React5(View, obj3);
}));