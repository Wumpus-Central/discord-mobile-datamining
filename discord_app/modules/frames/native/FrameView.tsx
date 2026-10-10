// discord_app/modules/frames/native/FrameView.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import util from "../../../intl/index.native.tsx";
import actions_AlertActionCreatorsDefault from "../../../actions/native/AlertActionCreators.tsx";
import leaveFrame from "../leaveFrame.tsx";
import frames_getDefaultOrientationLockState from "getDefaultOrientationLockState.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const FrameLayoutModes = fn(10802).FrameLayoutModes;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/native/FrameView.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function FrameView(frame) {
      const cResult = frame(576).c(40);
      frame = frame.frame;
      ({ iframeId, onActivityCrash, presentation } = frame);
      const layoutMode = presentation.layoutMode;
      ({ portraitSafeAreasConfig, landscapeSafeAreasConfig } = presentation);
      let obj = frame(576);
      const data = frame(6852).useApplication(frame.applicationId).data;
      const orientationLock = frame.data.orientationLock;
      const obj2 = frame(6852);
      const first = _slicedToArray(noop.useState(true), 2)[0];
      if (cResult[0] === frame.applicationId) {
        if (cResult[1] === frame.id) {
          if (cResult[2] === layoutMode) {
            let tmp5 = cResult[3];
            let tmp6 = cResult[4];
          }
          const layoutEffect = noop.useLayoutEffect(tmp5, tmp6);
          if (cResult[5] !== frame.id) {
            const fn2 = function u() {
              leaveFrame.leaveFrame(frame.id);
            };
            cResult[5] = frame.id;
            cResult[6] = fn2;
          }
          if (cResult[7] !== frame.id) {
            class O {
              constructor(arg0, arg1) {
                obj = closure_0(closure_2[9]);
                return obj.setOrientationLockState(frame.id, frame, arg1);
              }
            }
            cResult[7] = frame.id;
            cResult[8] = O;
          } else {
            class O {
              constructor(arg0, arg1) {
                obj = closure_0(closure_2[9]);
                return obj.setOrientationLockState(frame.id, frame, arg1);
              }
            }
          }
          if (!first) {
            class O {
              constructor(arg0, arg1) {
                obj = closure_0(closure_2[9]);
                return obj.setOrientationLockState(frame.id, frame, arg1);
              }
            }
          }
          if (cResult[9] === data) {
            class O {
              constructor(arg0, arg1) {
                obj = closure_0(closure_2[9]);
                return obj.setOrientationLockState(frame.id, frame, arg1);
              }
            }
          }
          const obj4 = {
            orientationLockState: orientationLock,
            showLoadingIndicator: first,
            setShowLoadingStateForLockingOrientation: tmp4,
            application: data,
            setOrientationLockState: O,
          };
          cResult[9] = data;
          cResult[10] = orientationLock;
          cResult[11] = O;
          cResult[12] = first;
          cResult[13] = obj4;
        }
      }
      const fn = function c() {
        DispatcherDefault.dispatch({
          type: "FRAME_UPDATE_LAYOUT_MODE",
          layoutMode,
          applicationId: frame.applicationId,
          frameId: frame.id,
        });
      };
      const items = [layoutMode, ,];
      ({ applicationId: arr[1], id: arr[2] } = frame);
      cResult[0] = frame.applicationId;
      cResult[1] = frame.id;
      cResult[2] = layoutMode;
      cResult[3] = fn;
      cResult[4] = items;
      tmp6 = items;
      tmp5 = fn;
      const tmp2 = _slicedToArray(noop.useState(true), 2);
    }
  : function FrameView(frame) {
      frame = frame.frame;
      const presentation = frame.presentation;
      const layoutMode = presentation.layoutMode;
      let landscapeSafeAreasConfig = presentation.portraitSafeAreasConfig;
      ({ iframeId, onActivityCrash } = frame);
      const data = frame(6852).useApplication(frame.applicationId).data;
      const orientationLock = frame.data.orientationLock;
      const tmp3 = _slicedToArray(noop.useState(true), 2);
      let first = tmp3[0];
      const items = [layoutMode, ,];
      ({ applicationId: arr[1], id: arr[2] } = frame);
      const layoutEffect = noop.useLayoutEffect(() => {
        DispatcherDefault.dispatch({
          type: "FRAME_UPDATE_LAYOUT_MODE",
          layoutMode,
          applicationId: frame.applicationId,
          frameId: frame.id,
        });
      }, items);
      const items1 = [frame.id];
      const items2 = [frame.id];
      const callback = noop.useCallback(() => {
        leaveFrame.leaveFrame(frame.id);
      }, items1);
      const callback1 = noop.useCallback(
        (application, arg1) =>
          frames_getDefaultOrientationLockState.setOrientationLockState(frame.id, application, arg1),
        items2,
      );
      if (!first) {
        first = null == data;
      }
      let obj = frame(6852);
      const baseActivityView = frame(10924).useBaseActivityView({
        orientationLockState: orientationLock,
        showLoadingIndicator: first,
        setShowLoadingStateForLockingOrientation: tmp3[1],
        application: data,
        setOrientationLockState: callback1,
      });
      ({ isResetting, isLandscape } = baseActivityView);
      const obj2 = { showLoadingIndicator: first, isResetting, children: null };
      let obj3 = {
        onActivityCrash,
        applicationId: frame.applicationId,
        iframeId,
        onDisallowedNavigation() {
          leaveFrame.leaveFrame(frame.id);
          const obj3 = { body: null, confirmText: null };
          const intl = util.intl;
          obj3.body = intl.string(util.t.tYBBWz);
          const intl2 = util.intl;
          obj3.confirmText = intl2.string(util.t.BddRzS);
          actions_AlertActionCreatorsDefault.show(obj3);
        },
        onInvalidUrl() {
          return leaveFrame.leaveFrame(frame.id);
        },
        activityUrl: frame.data.url,
        contextSource: null,
        queryParams: null,
        onLoadError: null,
        allowPopups: null,
        referrerPolicy: "origin",
        isPipOrGridMode: null,
        safeAreasConfig: null,
      };
      const obj4 = { type: null, frameId: null };
      const tmpResult = frame(10924);
      obj4.type = frame(10809).EmbeddedContextSourceType.FRAME;
      obj4.frameId = frame.id;
      obj3.contextSource = obj4;
      const tmp10 = layoutMode(17686);
      obj3.queryParams = layoutMode(17683)(frame, frame(10941).ActivityPlatform.MOBILE);
      obj3.onLoadError = callback;
      const tmp11 = layoutMode(17683);
      obj3.allowPopups = frame(10960).allowPopups(data);
      obj3.isPipOrGridMode = layoutMode === FrameLayoutModes.PIP;
      if (isLandscape) {
        landscapeSafeAreasConfig = presentation.landscapeSafeAreasConfig;
      }
      obj3.safeAreasConfig = landscapeSafeAreasConfig;
      obj2.children = (
        <tmp10
          onActivityCrash={onActivityCrash}
          applicationId={frame.applicationId}
          iframeId={iframeId}
          onDisallowedNavigation={function onDisallowedNavigation() {
            leaveFrame.leaveFrame(frame.id);
            const obj3 = { body: null, confirmText: null };
            const intl = util.intl;
            obj3.body = intl.string(util.t.tYBBWz);
            const intl2 = util.intl;
            obj3.confirmText = intl2.string(util.t.BddRzS);
            actions_AlertActionCreatorsDefault.show(obj3);
          }}
          onInvalidUrl={function onInvalidUrl() {
            return leaveFrame.leaveFrame(frame.id);
          }}
          activityUrl={frame.data.url}
          contextSource={null}
          queryParams={null}
          onLoadError={null}
          allowPopups={null}
          referrerPolicy="origin"
          isPipOrGridMode={null}
          safeAreasConfig={null}
        />
      );
      return jsx(frame(10924).BaseActivityView, { showLoadingIndicator: first, isResetting, children: null });
    };
