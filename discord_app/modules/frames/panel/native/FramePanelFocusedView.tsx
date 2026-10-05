// discord_app/modules/frames/panel/native/FramePanelFocusedView.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import ActivityPanelConstants from "../../../activities/panel/ActivityPanelConstants.tsx";
import FramesActionCreatorsDefault from "../../FramesActionCreators.native.tsx";
import FrameRenderTargetDefault from "../../native/FrameRenderTarget.tsx";
import FrameStackLevel from "../../FrameStackLevel.tsx";
import ActivityPanelFocusedView from "../../../activities/panel/native/ActivityPanelFocusedView.tsx";
import FramePanelStateContextDefault from "FramePanelStateContext.tsx";
import FramePanelHeaderDefault from "FramePanelHeader.tsx";
import react from "../../../../../_runtime/00019_react.js";
import FramesStore from "../../FramesStore.tsx";
import FramesConstants from "../../FramesConstants.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let hasOwnProperty;
let metroRequire;
({ asLaunched: hasOwnProperty, FrameLayoutModes: metroRequire } = FramesConstants);
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const jsx = Fragment.jsx;
let memo = react.memo;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let landscapeSafeAreasConfig;
        let mainFrame;
        let portraitSafeAreasConfig;
        let stateFromStores;
        let tmp11;
        let tmp15;
        let tmp4;
        let tmp5;
        let tmp8;
        let transitionCleanUp;
        let transitionState;
        let tmp = stateFromStores;
        let obj = stateFromStores(576);
        const cResult = obj.c(16);
        ({ transitionState, transitionCleanUp } = arg0);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [FramesStore];
          const fn = function f() {
            const tmp = closure_1_5(mainFrame.getMainFrame());
            let id;
            if (tmp != null) {
              id = tmp.id;
            }
            return id;
          };
          cResult[0] = items;
          cResult[1] = fn;
          tmp4 = items;
          tmp5 = fn;
        } else {
          [tmp4, tmp5] = cResult;
        }
        const tmpResult = tmp(504);
        stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { context: FramePanelStateContextDefault };
          cResult[2] = obj2;
          tmp8 = obj2;
        } else {
          tmp8 = cResult[2];
        }
        const tmpResult2 = tmp(17176);
        const baseActivityPanelFocusedView = tmpResult2.useBaseActivityPanelFocusedView(tmp8);
        ({ portraitSafeAreasConfig, landscapeSafeAreasConfig } = baseActivityPanelFocusedView);
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp14 = jsx(FramePanelHeaderDefault, {});
          cResult[3] = tmp14;
          tmp11 = tmp14;
        } else {
          tmp11 = cResult[3];
        }
        if (cResult[4] !== stateFromStores) {
          const fn2 = function h() {
            if (null != stateFromStores) {
              const obj = FramesActionCreatorsDefault;
              obj.updateFramePanelMode(tmp, ActivityPanelModes.PIP);
            }
          };
          cResult[4] = stateFromStores;
          cResult[5] = fn2;
          tmp15 = fn2;
        } else {
          tmp15 = cResult[5];
        }
        if (cResult[6] === landscapeSafeAreasConfig) {
          if (cResult[7] === stateFromStores) {
            let tmp17;
            if (cResult[8] === portraitSafeAreasConfig) {
              tmp17 = cResult[9];
            }
            if ((cResult[10] === null) != stateFromStores) {
              if (cResult[11] === tmp17) {
                if (cResult[12] === transitionCleanUp) {
                  if (cResult[13] === transitionState) {
                    let tmp23;
                    if (cResult[14] === tmp15) {
                      tmp23 = cResult[15];
                    }
                    return tmp23;
                  }
                }
              }
            }
            const BaseActivityPanelFocusedView = tmp(17176).BaseActivityPanelFocusedView;
            const tmp26 = (
              <BaseActivityPanelFocusedView
                transitionState={transitionState}
                transitionCleanUp={transitionCleanUp}
                updateActivityPanelModeToPIP={tmp15}
                hasActivity={null != stateFromStores}
                context={FramePanelStateContextDefault}
                header={tmp11}
              >
                {tmp17}
              </BaseActivityPanelFocusedView>
            );
            cResult[10] = null != stateFromStores;
            cResult[11] = tmp17;
            cResult[12] = transitionCleanUp;
            cResult[13] = transitionState;
            cResult[14] = tmp15;
            cResult[15] = tmp26;
            tmp23 = tmp26;
          }
        }
        let tmp18 = null;
        if (null != stateFromStores) {
          FrameRenderTargetDefault;
          const obj5 = { layoutMode: constants.FOCUSED, portraitSafeAreasConfig, landscapeSafeAreasConfig };
          tmp18 = (
            <tmp21 frameId={stateFromStores} level={tmp(16598).FrameStackLevel.AboveAppContent} presentation={obj5} />
          );
        }
        cResult[6] = landscapeSafeAreasConfig;
        cResult[7] = stateFromStores;
        cResult[8] = portraitSafeAreasConfig;
        cResult[9] = tmp18;
        tmp17 = tmp18;
      }
    : (transitionState) => {
        transitionState = transitionState.transitionState;
        const transitionCleanUp = transitionState.transitionCleanUp;
        let stateFromStores;
        let landscapeSafeAreasConfig;
        let obj = transitionState(stateFromStores[7]);
        const items = [landscapeSafeAreasConfig];
        stateFromStores = obj.useStateFromStores(items, () => {
          const tmp = memo(landscapeSafeAreasConfig.getMainFrame());
          let id;
          if (tmp != null) {
            id = tmp.id;
          }
          return id;
        });
        const obj2 = transitionState(stateFromStores[9]);
        let obj3 = { context: transitionCleanUp(stateFromStores[8]) };
        const baseActivityPanelFocusedView = obj2.useBaseActivityPanelFocusedView(obj3);
        const portraitSafeAreasConfig = baseActivityPanelFocusedView.portraitSafeAreasConfig;
        landscapeSafeAreasConfig = baseActivityPanelFocusedView.landscapeSafeAreasConfig;
        const memo = portraitSafeAreasConfig.useMemo(() => jsx(transitionCleanUp(stateFromStores[10]), {}), []);
        const items1 = [stateFromStores];
        const updateActivityPanelModeToPIP = portraitSafeAreasConfig.useCallback(() => {
          if (null != stateFromStores) {
            const obj = FramesActionCreatorsDefault;
            obj.updateFramePanelMode(tmp, ActivityPanelModes.PIP);
          }
        }, items1);
        const items2 = [
          stateFromStores,
          memo,
          landscapeSafeAreasConfig,
          portraitSafeAreasConfig,
          transitionCleanUp,
          transitionState,
          updateActivityPanelModeToPIP,
        ];
        return portraitSafeAreasConfig.useMemo(() => {
          let tmpResult = null;
          const BaseActivityPanelFocusedView = ActivityPanelFocusedView.BaseActivityPanelFocusedView;
          if (null != stateFromStores) {
            FrameRenderTargetDefault;
            const obj3 = { layoutMode: metroRequire.FOCUSED, portraitSafeAreasConfig, landscapeSafeAreasConfig };
            tmpResult = (
              <tmp6Result
                frameId={stateFromStores}
                level={FrameStackLevel.FrameStackLevel.AboveAppContent}
                presentation={obj3}
              />
            );
          }
          return (
            <BaseActivityPanelFocusedView
              transitionState={transitionState}
              transitionCleanUp={transitionCleanUp}
              updateActivityPanelModeToPIP={updateActivityPanelModeToPIP}
              hasActivity={null != stateFromStores}
              context={FramePanelStateContextDefault}
              header={memo}
            >
              {tmpResult}
            </BaseActivityPanelFocusedView>
          );
        }, items2);
      },
);
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelFocusedView.tsx");

export default memoResult;
