// discord_app/modules/frames/panel/native/FramePanelFocusedView.tsx
import FramesActionCreatorsDefault from "../../FramesActionCreators.native.tsx";
import FrameRenderTargetDefault from "../../native/FrameRenderTarget.tsx";
import FrameStackLevel from "../../FrameStackLevel.tsx";
import ActivityPanelFocusedView from "../../../activities/panel/native/ActivityPanelFocusedView.tsx";
import FramePanelStateContextDefault from "FramePanelStateContext.tsx";
import FramePanelHeaderDefault from "FramePanelHeader.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import FramesStore from "../../FramesStore.tsx";

require = fn;
const FramesConstants = fn(8704);
({ asLaunched: hasOwnProperty, FrameLayoutModes: metroRequire } = FramesConstants);
const ActivityPanelModes = fn(8705).ActivityPanelModes;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelFocusedView.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        const cResult = stateFromStores(576).c(16);
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
        let obj = stateFromStores(576);
        stateFromStores = stateFromStores(504).useStateFromStores(tmp4, tmp5);
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { context: FramePanelStateContextDefault };
          cResult[2] = obj2;
          let tmp8 = obj2;
        } else {
          tmp8 = cResult[2];
        }
        const tmpResult = stateFromStores(504);
        const baseActivityPanelFocusedView = stateFromStores(17176).useBaseActivityPanelFocusedView(tmp8);
        ({ portraitSafeAreasConfig, landscapeSafeAreasConfig } = baseActivityPanelFocusedView);
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp14 = jsx(FramePanelHeaderDefault, {});
          cResult[3] = tmp14;
          let tmp11 = tmp14;
        } else {
          tmp11 = cResult[3];
        }
        if (cResult[4] !== stateFromStores) {
          const fn2 = function h() {
            if (null != stateFromStores) {
              FramesActionCreatorsDefault.updateFramePanelMode(tmp, ActivityPanelModes.PIP);
            }
          };
          cResult[4] = stateFromStores;
          cResult[5] = fn2;
          let tmp15 = fn2;
        } else {
          tmp15 = cResult[5];
        }
        if (cResult[6] === landscapeSafeAreasConfig) {
          if (cResult[7] === stateFromStores) {
            if (cResult[8] === portraitSafeAreasConfig) {
              let tmp17 = cResult[9];
            }
            if (cResult[10] === tmp16) {
              if (cResult[11] === tmp17) {
                if (cResult[12] === transitionCleanUp) {
                  if (cResult[13] === transitionState) {
                    if (cResult[14] === tmp15) {
                      let tmp23 = cResult[15];
                    }
                    return tmp23;
                  }
                }
              }
            }
            const obj3 = {
              transitionState,
              transitionCleanUp,
              updateActivityPanelModeToPIP: tmp15,
              hasActivity: tmp16,
              context: FramePanelStateContextDefault,
              header: tmp11,
              children: tmp17,
            };
            const tmp26 = jsx(tmp(17176).BaseActivityPanelFocusedView, {
              transitionState,
              transitionCleanUp,
              updateActivityPanelModeToPIP: tmp15,
              hasActivity: tmp16,
              context: FramePanelStateContextDefault,
              header: tmp11,
              children: tmp17,
            });
            cResult[10] = tmp16;
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
          const obj4 = {
            frameId: stateFromStores,
            level: tmp(16598).FrameStackLevel.AboveAppContent,
            presentation: null,
          };
          const obj5 = { layoutMode: constants.FOCUSED, portraitSafeAreasConfig, landscapeSafeAreasConfig };
          obj4.presentation = obj5;
          tmp18 = jsx(FrameRenderTargetDefault, {
            frameId: stateFromStores,
            level: tmp(16598).FrameStackLevel.AboveAppContent,
            presentation: null,
          });
        }
        cResult[6] = landscapeSafeAreasConfig;
        cResult[7] = stateFromStores;
        cResult[8] = portraitSafeAreasConfig;
        cResult[9] = tmp18;
        tmp17 = tmp18;
        const tmpResult2 = stateFromStores(17176);
      }
    : (transitionState) => {
        transitionState = transitionState.transitionState;
        const transitionCleanUp = transitionState.transitionCleanUp;
        let stateFromStores;
        let landscapeSafeAreasConfig;
        const items = [landscapeSafeAreasConfig];
        stateFromStores = transitionState(stateFromStores[7]).useStateFromStores(items, () => {
          const tmp = memo(landscapeSafeAreasConfig.getMainFrame());
          let id;
          if (tmp != null) {
            id = tmp.id;
          }
          return id;
        });
        let obj = transitionState(stateFromStores[7]);
        let obj2 = transitionState(stateFromStores[9]);
        const baseActivityPanelFocusedView = obj2.useBaseActivityPanelFocusedView({
          context: transitionCleanUp(stateFromStores[8]),
        });
        const portraitSafeAreasConfig = baseActivityPanelFocusedView.portraitSafeAreasConfig;
        landscapeSafeAreasConfig = baseActivityPanelFocusedView.landscapeSafeAreasConfig;
        const memo = portraitSafeAreasConfig.useMemo(() => jsx(transitionCleanUp(stateFromStores[10]), {}), []);
        const items1 = [stateFromStores];
        const updateActivityPanelModeToPIP = portraitSafeAreasConfig.useCallback(() => {
          if (null != stateFromStores) {
            FramesActionCreatorsDefault.updateFramePanelMode(tmp, ActivityPanelModes.PIP);
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
          const obj = {
            transitionState,
            transitionCleanUp,
            updateActivityPanelModeToPIP,
            hasActivity: null != stateFromStores,
            context: FramePanelStateContextDefault,
            header: memo,
            children: null,
          };
          let tmpResult = null;
          if (null != stateFromStores) {
            const obj2 = {
              frameId: stateFromStores,
              level: FrameStackLevel.FrameStackLevel.AboveAppContent,
              presentation: null,
            };
            const obj3 = { layoutMode: constants.FOCUSED, portraitSafeAreasConfig, landscapeSafeAreasConfig };
            obj2.presentation = obj3;
            tmpResult = jsx(FrameRenderTargetDefault, {
              frameId: stateFromStores,
              level: FrameStackLevel.FrameStackLevel.AboveAppContent,
              presentation: null,
            });
            const tmp6Result = FrameRenderTargetDefault;
          }
          obj.children = tmpResult;
          return jsx(ActivityPanelFocusedView.BaseActivityPanelFocusedView, {
            transitionState,
            transitionCleanUp,
            updateActivityPanelModeToPIP,
            hasActivity: null != stateFromStores,
            context: FramePanelStateContextDefault,
            header: memo,
            children: null,
          });
        }, items2);
      },
);
