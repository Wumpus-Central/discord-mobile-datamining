// === Module 17147: FrameView ===

// Module 17147 (FrameView)
import DispatcherDefault from "Dispatcher" /* 584 */;
import util from "util" /* 1126 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5708 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 8978 */;
import frames_getDefaultOrientationLockState from "frames/getDefaultOrientationLockState" /* 17148 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const FrameLayoutModes = fn(8704).FrameLayoutModes;
const ActivityPlatform = fn(2011).ActivityPlatform;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/native/FrameView.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((frame) => {
  const cResult = frame(576).c(37);
  frame = frame.frame;
  ({ iframeId, onActivityCrash, presentation } = frame);
  const layoutMode = presentation.layoutMode;
  ({ portraitSafeAreasConfig, landscapeSafeAreasConfig } = presentation);
  let obj = frame(576);
  const data = frame(6658).useApplication(frame.applicationId).data;
  const orientationLock = frame.data.orientationLock;
  const obj2 = frame(6658);
  let first = _slicedToArray(noop.useState(true), 2)[0];
  if (cResult[0] === frame.applicationId) {
    if (cResult[1] === frame.id) {
      if (cResult[2] === layoutMode) {
        let tmp7 = cResult[3];
        let tmp8 = cResult[4];
      }
      const layoutEffect = noop.useLayoutEffect(tmp7, tmp8);
      if (cResult[5] !== frame.id) {
        const fn2 = function f() {
          FramesNativeManagerDefault.leaveFrame(frame.id);
        };
        cResult[5] = frame.id;
        cResult[6] = fn2;
        let tmp10 = fn2;
      } else {
        tmp10 = cResult[6];
      }
      if (cResult[7] !== frame.id) {
        const fn3 = function k(application, arg1) {
          return frames_getDefaultOrientationLockState.setOrientationLockState(frame.id, application, arg1);
        };
        cResult[7] = frame.id;
        cResult[8] = fn3;
        let tmp11 = fn3;
      } else {
        tmp11 = cResult[8];
      }
      if (!first) {
        first = null == data;
      }
      if (cResult[9] === data) {
        if (cResult[10] === orientationLock) {
          if (cResult[11] === tmp11) {
            if (cResult[12] === first) {
              let tmp12 = cResult[13];
            }
            const baseActivityView = tmp(9134).useBaseActivityView(tmp12);
            ({ isResetting, isLandscape } = baseActivityView);
            if (cResult[14] !== frame.id) {
              const fn4 = function b() {
                FramesNativeManagerDefault.leaveFrame(frame.id);
                const obj3 = { body: null, confirmText: null };
                const intl = util.intl;
                obj3.body = intl.string(util.t.tYBBWz);
                const intl2 = util.intl;
                obj3.confirmText = intl2.string(util.t.BddRzS);
                actions_AlertActionCreatorsDefault.show(obj3);
              };
              class D {
                constructor() {
                  obj = closure_1(closure_2[9]);
                  return obj.leaveFrame(frame.id);
                }
              }
              cResult[14] = frame.id;
              cResult[15] = fn4;
              cResult[16] = D;
              let tmp14 = fn4;
            } else {
              tmp14 = cResult[15];
              class D {
                constructor() {
                  obj = closure_1(closure_2[9]);
                  return obj.leaveFrame(frame.id);
                }
              }
            }
            if (cResult[17] !== frame) {
              class D {
                constructor() {
                  obj = closure_1(closure_2[9]);
                  return obj.leaveFrame(frame.id);
                }
              }
              const tmp18 = layoutMode(17149)(frame, ActivityPlatform.MOBILE);
              cResult[17] = frame;
              cResult[18] = tmp18;
              let tmp16 = tmp18;
            } else {
              tmp16 = cResult[18];
            }
            if (cResult[19] !== data) {
              tmp(9147);
              class D {
                constructor() {
                  obj = closure_1(closure_2[9]);
                  return obj.leaveFrame(frame.id);
                }
              }
              cResult[19] = data;
              cResult[20] = tmp21;
              let tmp19 = tmp21;
            } else {
              tmp19 = cResult[20];
            }
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
                          if (cResult[28] === tmp23) {
                            if (cResult[29] === portraitSafeAreasConfig) {
                              if (cResult[30] === tmp14) {
                                if (cResult[31] === D) {
                                  let tmp24 = cResult[32];
                                }
                                class D {
                                  constructor() {
                                    obj = closure_1(closure_2[9]);
                                    return obj.leaveFrame(frame.id);
                                  }
                                }
                                const obj4 = { showLoadingIndicator: first, isResetting, children: tmp24 };
                                const tmp30 = jsx(tmp(9134).BaseActivityView, { showLoadingIndicator: first, isResetting, children: tmp24 });
                                cResult[33] = isResetting;
                                cResult[34] = first;
                                cResult[35] = tmp24;
                                cResult[36] = tmp30;
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
            const obj5 = { onActivityCrash, applicationId: frame.applicationId, iframeId, onDisallowedNavigation: tmp14, onInvalidUrl: D, activityUrl: frame.data.url, queryParams: tmp16, onLoadError: tmp10, allowPopups: tmp19, referrerPolicy: "origin", isPipOrGridMode: layoutMode === FrameLayoutModes.PIP, safeAreasConfig: portraitSafeAreasConfig };
            const tmp27 = jsx(layoutMode(17152), { onActivityCrash, applicationId: frame.applicationId, iframeId, onDisallowedNavigation: tmp14, onInvalidUrl: D, activityUrl: frame.data.url, queryParams: tmp16, onLoadError: tmp10, allowPopups: tmp19, referrerPolicy: "origin", isPipOrGridMode: layoutMode === FrameLayoutModes.PIP, safeAreasConfig: portraitSafeAreasConfig });
            cResult[21] = frame.applicationId;
            cResult[22] = frame.data.url;
            cResult[23] = iframeId;
            cResult[24] = onActivityCrash;
            cResult[25] = tmp10;
            cResult[26] = tmp16;
            cResult[27] = tmp19;
            cResult[28] = layoutMode === FrameLayoutModes.PIP;
            cResult[29] = portraitSafeAreasConfig;
            cResult[30] = tmp14;
            cResult[31] = D;
            cResult[32] = tmp27;
            tmp24 = tmp27;
            const tmpResult = tmp(9134);
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
    DispatcherDefault.dispatch({ type: "FRAME_UPDATE_LAYOUT_MODE", layoutMode, applicationId: frame.applicationId, frameId: frame.id });
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
  const tmp4 = _slicedToArray(noop.useState(true), 2);
}) : ((frame) => {
  frame = frame.frame;
  const presentation = frame.presentation;
  const layoutMode = presentation.layoutMode;
  let landscapeSafeAreasConfig = presentation.portraitSafeAreasConfig;
  ({ iframeId, onActivityCrash } = frame);
  const data = frame(6658).useApplication(frame.applicationId).data;
  const orientationLock = frame.data.orientationLock;
  const tmp3 = _slicedToArray(noop.useState(true), 2);
  let first = tmp3[0];
  const items = [layoutMode, , ];
  ({ applicationId: arr[1], id: arr[2] } = frame);
  const layoutEffect = noop.useLayoutEffect(() => {
    DispatcherDefault.dispatch({ type: "FRAME_UPDATE_LAYOUT_MODE", layoutMode, applicationId: frame.applicationId, frameId: frame.id });
  }, items);
  const items1 = [frame.id];
  const items2 = [frame.id];
  const callback = noop.useCallback(() => {
    FramesNativeManagerDefault.leaveFrame(frame.id);
  }, items1);
  const callback1 = noop.useCallback((application, arg1) => frames_getDefaultOrientationLockState.setOrientationLockState(frame.id, application, arg1), items2);
  if (!first) {
    first = null == data;
  }
  let obj = frame(6658);
  const baseActivityView = frame(9134).useBaseActivityView({ orientationLockState: orientationLock, showLoadingIndicator: first, setShowLoadingStateForLockingOrientation: tmp3[1], application: data, setOrientationLockState: callback1 });
  ({ isResetting, isLandscape } = baseActivityView);
  const obj2 = { showLoadingIndicator: first, isResetting, children: null };
  let obj3 = {
    onActivityCrash,
    applicationId: frame.applicationId,
    iframeId,
    onDisallowedNavigation() {
      FramesNativeManagerDefault.leaveFrame(frame.id);
      const obj3 = { body: null, confirmText: null };
      const intl = util.intl;
      obj3.body = intl.string(util.t.tYBBWz);
      const intl2 = util.intl;
      obj3.confirmText = intl2.string(util.t.BddRzS);
      actions_AlertActionCreatorsDefault.show(obj3);
    },
    onInvalidUrl() {
      return FramesNativeManagerDefault.leaveFrame(frame.id);
    },
    activityUrl: frame.data.url,
    queryParams: null,
    onLoadError: null,
    allowPopups: null,
    referrerPolicy: "origin",
    isPipOrGridMode: null,
    safeAreasConfig: null
  };
  const tmpResult = frame(9134);
  obj3.queryParams = layoutMode(17149)(frame, ActivityPlatform.MOBILE);
  obj3.onLoadError = callback;
  const tmp10 = layoutMode(17152);
  obj3.allowPopups = frame(9147).allowPopups(data);
  obj3.isPipOrGridMode = layoutMode === FrameLayoutModes.PIP;
  if (isLandscape) {
    landscapeSafeAreasConfig = presentation.landscapeSafeAreasConfig;
  }
  obj3.safeAreasConfig = landscapeSafeAreasConfig;
  obj2.children = <tmp10 onActivityCrash={onActivityCrash} applicationId={frame.applicationId} iframeId={iframeId} onDisallowedNavigation={function onDisallowedNavigation() {
    FramesNativeManagerDefault.leaveFrame(frame.id);
    const obj3 = { body: null, confirmText: null };
    const intl = util.intl;
    obj3.body = intl.string(util.t.tYBBWz);
    const intl2 = util.intl;
    obj3.confirmText = intl2.string(util.t.BddRzS);
    actions_AlertActionCreatorsDefault.show(obj3);
  }} onInvalidUrl={function onInvalidUrl() {
    return FramesNativeManagerDefault.leaveFrame(frame.id);
  }} activityUrl={frame.data.url} queryParams={null} onLoadError={null} allowPopups={null} referrerPolicy="origin" isPipOrGridMode={null} safeAreasConfig={null} />;
  return jsx(frame(9134).BaseActivityView, { showLoadingIndicator: first, isResetting, children: null });
});