// discord_app/modules/frames/panel/native/FramePanelPIPView.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../_runtime/00576_c.js";
import FrameRenderTargetDefault from "../../native/FrameRenderTarget.tsx";
import FrameStackLevel from "../../FrameStackLevel.tsx";
import ActivityPanelPIPView from "../../../activities/panel/native/ActivityPanelPIPView.tsx";
import FramePanelStateContextDefault from "FramePanelStateContext.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import FramesStore from "../../FramesStore.tsx";

require = fn;
const FramesConstants = fn(8704);
({
  asLaunched: hasOwnProperty,
  FrameLayoutModes: metroRequire,
  getPipOrientationLockStateForFrame: closure_7,
} = FramesConstants);
const portraitSafeAreasConfig = fn(17171).DEFAULT_PORTRAIT_LETTERBOX_CONFIG;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelPIPView.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        const cResult = c.c(13);
        ({ transitionState, transitionCleanUp } = arg0);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [FramesStore];
          const fn = function f() {
            return closure_1_5(mainFrame.getMainFrame());
          };
          cResult[0] = items;
          cResult[1] = fn;
          tmp4 = items;
          tmp5 = fn;
        } else {
          [tmp4, tmp5] = cResult;
        }
        const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
        if (cResult[2] !== stateFromStores) {
          const tmp10 = React5(stateFromStores);
          cResult[2] = stateFromStores;
          cResult[3] = tmp10;
          let tmp8 = tmp10;
        } else {
          tmp8 = cResult[3];
        }
        const tmpResult = initialize;
        const landscapeSafeAreasConfig = ActivityPanelPIPView.useBaseActivityPanelPIPView().landscapeSafeAreasConfig;
        if (cResult[4] === landscapeSafeAreasConfig) {
          if (cResult[5] === stateFromStores) {
            let tmp12 = cResult[6];
          }
          if (cResult[7] === tmp8) {
            if (cResult[8] === tmp11) {
              if (cResult[9] === tmp12) {
                if (cResult[10] === transitionCleanUp) {
                  if (cResult[11] === transitionState) {
                    let tmp19 = cResult[12];
                  }
                  return tmp19;
                }
              }
            }
          }
          const obj2 = {
            transitionState,
            transitionCleanUp,
            pipOrientationLockState: tmp8,
            hasActivity: tmp11,
            context: FramePanelStateContextDefault,
            children: tmp12,
          };
          const tmp22 = jsx(ActivityPanelPIPView.BaseActivityPanelPIPView, {
            transitionState,
            transitionCleanUp,
            pipOrientationLockState: tmp8,
            hasActivity: tmp11,
            context: FramePanelStateContextDefault,
            children: tmp12,
          });
          cResult[7] = tmp8;
          cResult[8] = tmp11;
          cResult[9] = tmp12;
          cResult[10] = transitionCleanUp;
          cResult[11] = transitionState;
          cResult[12] = tmp22;
          tmp19 = tmp22;
        }
        let tmp13 = null;
        if (null != stateFromStores) {
          const obj3 = {
            frameId: stateFromStores.id,
            level: FrameStackLevel.FrameStackLevel.AboveAppContent,
            presentation: null,
          };
          const obj4 = { layoutMode: constants.PIP, portraitSafeAreasConfig, landscapeSafeAreasConfig };
          obj3.presentation = obj4;
          tmp13 = jsx(FrameRenderTargetDefault, {
            frameId: stateFromStores.id,
            level: FrameStackLevel.FrameStackLevel.AboveAppContent,
            presentation: null,
          });
        }
        cResult[4] = landscapeSafeAreasConfig;
        cResult[5] = stateFromStores;
        cResult[6] = tmp13;
        tmp12 = tmp13;
        const tmpResult2 = ActivityPanelPIPView;
      }
    : (transitionState) => {
        transitionState = transitionState.transitionState;
        const transitionCleanUp = transitionState.transitionCleanUp;
        let stateFromStores;
        let landscapeSafeAreasConfig;
        const items = [landscapeSafeAreasConfig];
        stateFromStores = transitionState(stateFromStores[7]).useStateFromStores(items, () =>
          closure_1_5(landscapeSafeAreasConfig.getMainFrame()),
        );
        const tmp2 = closure_7(stateFromStores);
        noop = tmp2;
        let obj = transitionState(stateFromStores[7]);
        landscapeSafeAreasConfig = transitionState(stateFromStores[8]).useBaseActivityPanelPIPView()
          .landscapeSafeAreasConfig;
        const items1 = [stateFromStores, landscapeSafeAreasConfig, tmp2, transitionCleanUp, transitionState];
        return noop.useMemo(() => {
          const obj = {
            transitionState,
            transitionCleanUp,
            pipOrientationLockState,
            hasActivity: null != stateFromStores,
            context: FramePanelStateContextDefault,
            children: null,
          };
          let tmpResult = null;
          if (null != stateFromStores) {
            const obj2 = {
              frameId: stateFromStores.id,
              level: FrameStackLevel.FrameStackLevel.AboveAppContent,
              presentation: null,
            };
            const obj3 = { layoutMode: constants.PIP, portraitSafeAreasConfig, landscapeSafeAreasConfig };
            obj2.presentation = obj3;
            tmpResult = jsx(FrameRenderTargetDefault, {
              frameId: stateFromStores.id,
              level: FrameStackLevel.FrameStackLevel.AboveAppContent,
              presentation: null,
            });
            const tmp6Result = FrameRenderTargetDefault;
          }
          obj.children = tmpResult;
          return jsx(ActivityPanelPIPView.BaseActivityPanelPIPView, {
            transitionState,
            transitionCleanUp,
            pipOrientationLockState,
            hasActivity: null != stateFromStores,
            context: FramePanelStateContextDefault,
            children: null,
          });
        }, items1);
      },
);
