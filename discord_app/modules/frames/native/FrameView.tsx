// === Module 17147: FrameView ===

// Module 17147 (FrameView)
import Fragment from "Fragment" /* 21 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import intl3 from "intl" /* 1126 */;
import Constants from "Constants" /* 2011 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5708 */;
import FramesConstants from "FramesConstants" /* 8704 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 8978 */;
import frames_getDefaultOrientationLockState from "frames/getDefaultOrientationLockState" /* 17148 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let frame;

const FrameLayoutModes = FramesConstants.FrameLayoutModes;
const ActivityPlatform = Constants.ActivityPlatform;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((frame) => {
  let iframeId;
  let isLandscape;
  let isResetting;
  let landscapeSafeAreasConfig;
  let onActivityCrash;
  let portraitSafeAreasConfig;
  let presentation;
  let obj = frame(576);
  const cResult = obj.c(37);
  frame = frame.frame;
  ({ iframeId, onActivityCrash, presentation } = frame);
  const layoutMode = presentation.layoutMode;
  ({ portraitSafeAreasConfig, landscapeSafeAreasConfig } = presentation);
  let obj2 = frame(6658);
  const data = obj2.useApplication(frame.applicationId).data;
  const orientationLock = frame.data.orientationLock;
  let first = _slicedToArray(react.useState(true), 2)[0];
  _slicedToArray(react.useState(true), 2);
  if (cResult[0] === frame.applicationId) {
    if (cResult[1] === frame.id) {
      let tmp7;
      let tmp8;
      let tmp10;
      let tmp11;
      if (cResult[2] === layoutMode) {
        tmp7 = cResult[3];
        tmp8 = cResult[4];
      }
      const layoutEffect = react.useLayoutEffect(tmp7, tmp8);
      if (cResult[5] !== frame.id) {
        const fn2 = function f() {
          const obj = FramesNativeManagerDefault;
          obj.leaveFrame(frame.id);
        };
        cResult[5] = frame.id;
        cResult[6] = fn2;
        tmp10 = fn2;
      } else {
        tmp10 = cResult[6];
      }
      if (cResult[7] !== frame.id) {
        const fn3 = function k(application, arg1) {
          const obj = frames_getDefaultOrientationLockState;
          return obj.setOrientationLockState(frame.id, application, arg1);
        };
        cResult[7] = frame.id;
        cResult[8] = fn3;
        tmp11 = fn3;
      } else {
        tmp11 = cResult[8];
      }
      if (!first) {
        first = null == data;
      }
      if (cResult[9] === data) {
        if (cResult[10] === orientationLock) {
          if (cResult[11] === tmp11) {
            let tmp12;
            let tmp14;
            let tmp16;
            let tmp19;
            if (cResult[12] === first) {
              tmp12 = cResult[13];
            }
            const tmpResult = frame(9134);
            const baseActivityView = tmpResult.useBaseActivityView(tmp12);
            ({ isResetting, isLandscape } = baseActivityView);
            const applicationId = frame.applicationId;
            if (cResult[14] !== frame.id) {
              const fn4 = function b() {
                let intl;
                let intl2;
                const obj = FramesNativeManagerDefault;
                obj.leaveFrame(frame.id);
                const obj2 = { body: intl.string(intl3.t.tYBBWz), confirmText: intl2.string(intl3.t.BddRzS) };
                const show = actions_AlertActionCreatorsDefault.show;
                actions_AlertActionCreatorsDefault;
                intl = intl3.intl;
                intl2 = intl3.intl;
                show(obj2);
              };
              class D {
                constructor() {
                  const obj = FramesNativeManagerDefault;
                  return obj.leaveFrame(frame.id);
                }
              }
              cResult[14] = frame.id;
              cResult[15] = fn4;
              cResult[16] = D;
              tmp14 = fn4;
            } else {
              tmp14 = cResult[15];
              class D {
                constructor() {
                  const obj = FramesNativeManagerDefault;
                  return obj.leaveFrame(frame.id);
                }
              }
            }
            const url = frame.data.url;
            if (cResult[17] !== frame) {
              class D {
                constructor() {
                  const obj = FramesNativeManagerDefault;
                  return obj.leaveFrame(frame.id);
                }
              }
              const tmp18 = layoutMode(17149)(frame, ActivityPlatform.MOBILE);
              cResult[17] = frame;
              cResult[18] = tmp18;
              tmp16 = tmp18;
            } else {
              tmp16 = cResult[18];
            }
            if (cResult[19] !== data) {
              frame(9147);
              class D {
                constructor() {
                  const obj = FramesNativeManagerDefault;
                  return obj.leaveFrame(frame.id);
                }
              }
              cResult[19] = data;
              cResult[20] = tmp21;
              tmp19 = tmp21;
            } else {
              tmp19 = cResult[20];
            }
            const PIP = FrameLayoutModes.PIP;
            if (isLandscape) {
              portraitSafeAreasConfig = landscapeSafeAreasConfig;
            }
            if (cResult[21] === frame.applicationId) {
              if (cResult[22] === frame.data.url) {
                if (cResult[23] === iframeId) {
                  if (cResult[24] === onActivityCrash) {
                    if (cResult[25] === tmp10) {
                      if (cResult[26] === tmp16) {
                        if (cResult[27] === tmp19) {
                          if (cResult[28] === layoutMode === PIP) {
                            if (cResult[29] === portraitSafeAreasConfig) {
                              if (cResult[30] === tmp14) {
                                let tmp24;
                                if (cResult[31] === D) {
                                  tmp24 = cResult[32];
                                }
                                class D {
                                  constructor() {
                                    const obj = FramesNativeManagerDefault;
                                    return obj.leaveFrame(frame.id);
                                  }
                                }
                                cResult[33] = isResetting;
                                cResult[34] = first;
                                cResult[35] = tmp24;
                                cResult[36] = jsx(frame(9134).BaseActivityView, { showLoadingIndicator: first, isResetting, children: tmp24 });
                                const tmp30 = jsx(frame(9134).BaseActivityView, { showLoadingIndicator: first, isResetting, children: tmp24 });
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            const tmp27 = jsx(layoutMode(17152), { onActivityCrash, applicationId, iframeId, onDisallowedNavigation: tmp14, onInvalidUrl: D, activityUrl: url, queryParams: tmp16, onLoadError: tmp10, allowPopups: tmp19, referrerPolicy: "origin", isPipOrGridMode: layoutMode === PIP, safeAreasConfig: portraitSafeAreasConfig });
            cResult[21] = frame.applicationId;
            cResult[22] = frame.data.url;
            cResult[23] = iframeId;
            cResult[24] = onActivityCrash;
            cResult[25] = tmp10;
            cResult[26] = tmp16;
            cResult[27] = tmp19;
            cResult[28] = layoutMode === PIP;
            cResult[29] = portraitSafeAreasConfig;
            cResult[30] = tmp14;
            cResult[31] = D;
            cResult[32] = tmp27;
            tmp24 = tmp27;
          }
        }
      }
      const obj6 = { orientationLockState: orientationLock, showLoadingIndicator: first, setShowLoadingStateForLockingOrientation: tmp6, application: data, setOrientationLockState: tmp11 };
      cResult[9] = data;
      cResult[10] = orientationLock;
      cResult[11] = tmp11;
      cResult[12] = first;
      cResult[13] = obj6;
      tmp12 = obj6;
    }
  }
  const fn = function p() {
    const obj = DispatcherDefault;
    const obj2 = { type: "FRAME_UPDATE_LAYOUT_MODE", layoutMode, applicationId: frame.applicationId, frameId: frame.id };
    obj.dispatch(obj2);
  };
  const items = [layoutMode, , ];
  ({ applicationId: arr[1], id: arr[2] } = frame);
  cResult[0] = frame.applicationId;
  cResult[1] = frame.id;
  cResult[2] = layoutMode;
  cResult[3] = fn;
  cResult[4] = items;
  tmp8 = items;
  tmp7 = fn;
}) : ((frame) => {
  let first;
  let iframeId;
  let isLandscape;
  let isResetting;
  let onActivityCrash;
  let tmp5;
  let tmpResult2;
  frame = frame.frame;
  const presentation = frame.presentation;
  const layoutMode = presentation.layoutMode;
  let portraitSafeAreasConfig = presentation.portraitSafeAreasConfig;
  ({ iframeId, onActivityCrash } = frame);
  const landscapeSafeAreasConfig = presentation.landscapeSafeAreasConfig;
  let obj = frame(6658);
  const data = obj.useApplication(frame.applicationId).data;
  const orientationLock = frame.data.orientationLock;
  [first, tmp5] = react.useState(true);
  const items = [layoutMode, , ];
  ({ applicationId: arr[1], id: arr[2] } = frame);
  const layoutEffect = react.useLayoutEffect(() => {
    const obj = DispatcherDefault;
    const obj2 = { type: "FRAME_UPDATE_LAYOUT_MODE", layoutMode, applicationId: frame.applicationId, frameId: frame.id };
    obj.dispatch(obj2);
  }, items);
  const items1 = [frame.id];
  const items2 = [frame.id];
  const callback = react.useCallback(() => {
    const obj = FramesNativeManagerDefault;
    obj.leaveFrame(frame.id);
  }, items1);
  const callback1 = react.useCallback((application, arg1) => {
    const obj = frames_getDefaultOrientationLockState;
    return obj.setOrientationLockState(frame.id, application, arg1);
  }, items2);
  if (!first) {
    first = null == data;
  }
  const tmpResult = frame(9134);
  const baseActivityView = tmpResult.useBaseActivityView({ orientationLockState: orientationLock, showLoadingIndicator: first, setShowLoadingStateForLockingOrientation: tmp5, application: data, setOrientationLockState: callback1 });
  ({ isResetting, isLandscape } = baseActivityView);
  const BaseActivityView = tmp(9134).BaseActivityView;
  ({
    onActivityCrash,
    applicationId: frame.applicationId,
    iframeId,
    onDisallowedNavigation() {
      let intl;
      let intl2;
      const obj = FramesNativeManagerDefault;
      obj.leaveFrame(frame.id);
      const obj2 = { body: intl.string(intl3.t.tYBBWz), confirmText: intl2.string(intl3.t.BddRzS) };
      const show = actions_AlertActionCreatorsDefault.show;
      actions_AlertActionCreatorsDefault;
      intl = intl3.intl;
      intl2 = intl3.intl;
      show(obj2);
    },
    onInvalidUrl() {
      const obj = FramesNativeManagerDefault;
      return obj.leaveFrame(frame.id);
    },
    activityUrl: frame.data.url,
    queryParams: layoutMode(17149)(frame, ActivityPlatform.MOBILE),
    onLoadError: callback,
    allowPopups: tmpResult2.allowPopups(data),
    referrerPolicy: "origin",
    isPipOrGridMode: layoutMode === FrameLayoutModes.PIP,
    safeAreasConfig: portraitSafeAreasConfig
  });
  layoutMode(17152);
  tmpResult2 = frame(9147);
  if (isLandscape) {
    portraitSafeAreasConfig = landscapeSafeAreasConfig;
  }
  return <BaseActivityView showLoadingIndicator={first} isResetting={isResetting}>{null}</BaseActivityView>;
});
const result = size.fileFinishedImporting("modules/frames/native/FrameView.tsx");

export default tmp2;