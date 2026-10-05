// discord_app/modules/frames/panel/native/FramePanelPIPView.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import get_initialized from "../../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../../_runtime/00576_react.js";
import FrameRenderTargetDefault from "../../native/FrameRenderTarget.tsx";
import FrameStackLevel from "../../FrameStackLevel.tsx";
import ActivityPanelPIPView from "../../../activities/panel/native/ActivityPanelPIPView.tsx";
import ActivityPanelNativeConstants from "../../../activities/panel/native/ActivityPanelNativeConstants.tsx";
import FramePanelStateContextDefault from "FramePanelStateContext.tsx";
import react_mod from "../../../../../_runtime/00019_react.js";
import FramesStore from "../../FramesStore.tsx";
import FramesConstants from "../../FramesConstants.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let react = react_mod;
({
  asLaunched: hasOwnProperty,
  FrameLayoutModes: metroRequire,
  getPipOrientationLockStateForFrame: metroImportDefault,
} = FramesConstants);
const portraitSafeAreasConfig = ActivityPanelNativeConstants.DEFAULT_PORTRAIT_LETTERBOX_CONFIG;
const jsx = Fragment.jsx;
const memo = react.memo;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let mainFrame;
        let tmp4;
        let tmp5;
        let tmp8;
        let transitionCleanUp;
        let transitionState;
        const obj = react2;
        const cResult = obj.c(13);
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
        const tmpResult = get_initialized;
        const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
        if (cResult[2] !== stateFromStores) {
          const tmp10 = metroImportDefault(stateFromStores);
          cResult[2] = stateFromStores;
          cResult[3] = tmp10;
          tmp8 = tmp10;
        } else {
          tmp8 = cResult[3];
        }
        const tmpResult2 = ActivityPanelPIPView;
        const landscapeSafeAreasConfig = tmpResult2.useBaseActivityPanelPIPView().landscapeSafeAreasConfig;
        if (cResult[4] === landscapeSafeAreasConfig) {
          let tmp12;
          if (cResult[5] === stateFromStores) {
            tmp12 = cResult[6];
          }
          if (cResult[7] === tmp8) {
            if ((cResult[8] === null) != stateFromStores) {
              if (cResult[9] === tmp12) {
                if (cResult[10] === transitionCleanUp) {
                  let tmp19;
                  if (cResult[11] === transitionState) {
                    tmp19 = cResult[12];
                  }
                  return tmp19;
                }
              }
            }
          }
          const BaseActivityPanelPIPView = ActivityPanelPIPView.BaseActivityPanelPIPView;
          const tmp22 = (
            <BaseActivityPanelPIPView
              transitionState={transitionState}
              transitionCleanUp={transitionCleanUp}
              pipOrientationLockState={tmp8}
              hasActivity={null != stateFromStores}
              context={FramePanelStateContextDefault}
            >
              {tmp12}
            </BaseActivityPanelPIPView>
          );
          cResult[7] = tmp8;
          cResult[8] = null != stateFromStores;
          cResult[9] = tmp12;
          cResult[10] = transitionCleanUp;
          cResult[11] = transitionState;
          cResult[12] = tmp22;
          tmp19 = tmp22;
        }
        let tmp13 = null;
        if (null != stateFromStores) {
          FrameRenderTargetDefault;
          const obj4 = { layoutMode: metroRequire.PIP, portraitSafeAreasConfig, landscapeSafeAreasConfig };
          tmp13 = (
            <tmp16
              frameId={stateFromStores.id}
              level={FrameStackLevel.FrameStackLevel.AboveAppContent}
              presentation={obj4}
            />
          );
        }
        cResult[4] = landscapeSafeAreasConfig;
        cResult[5] = stateFromStores;
        cResult[6] = tmp13;
        tmp12 = tmp13;
      }
    : (transitionState) => {
        let pipOrientationLockState;
        transitionState = transitionState.transitionState;
        const transitionCleanUp = transitionState.transitionCleanUp;
        let stateFromStores;
        let landscapeSafeAreasConfig;
        const items = [landscapeSafeAreasConfig];
        const obj = transitionState(stateFromStores[7]);
        stateFromStores = obj.useStateFromStores(items, () => closure_1_5(landscapeSafeAreasConfig.getMainFrame()));
        const tmp2 = closure_7(stateFromStores);
        react = tmp2;
        const obj2 = transitionState(stateFromStores[8]);
        landscapeSafeAreasConfig = obj2.useBaseActivityPanelPIPView().landscapeSafeAreasConfig;
        const items1 = [stateFromStores, landscapeSafeAreasConfig, tmp2, transitionCleanUp, transitionState];
        return react.useMemo(() => {
          let tmpResult = null;
          const BaseActivityPanelPIPView = ActivityPanelPIPView.BaseActivityPanelPIPView;
          if (null != stateFromStores) {
            FrameRenderTargetDefault;
            const obj3 = { layoutMode: metroRequire.PIP, portraitSafeAreasConfig, landscapeSafeAreasConfig };
            tmpResult = (
              <tmp6Result
                frameId={stateFromStores.id}
                level={FrameStackLevel.FrameStackLevel.AboveAppContent}
                presentation={obj3}
              />
            );
          }
          return (
            <BaseActivityPanelPIPView
              transitionState={transitionState}
              transitionCleanUp={transitionCleanUp}
              pipOrientationLockState={pipOrientationLockState}
              hasActivity={null != stateFromStores}
              context={FramePanelStateContextDefault}
            >
              {tmpResult}
            </BaseActivityPanelPIPView>
          );
        }, items1);
      },
);
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelPIPView.tsx");

export default memoResult;
