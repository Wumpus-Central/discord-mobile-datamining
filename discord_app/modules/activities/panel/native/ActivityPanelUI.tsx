// discord_app/modules/activities/panel/native/ActivityPanelUI.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import LayerScope2 from "../../../../design/components/Layers/native/LayerScope.native.tsx";
import ActivityPanelConstants from "../ActivityPanelConstants.tsx";
import ActivityPanelStateContextDefault from "ActivityPanelStateContext.tsx";
import useIsConnectedToVoiceChannelDefault from "../../../voice_panel/native/hooks/useIsConnectedToVoiceChannel.tsx";
import ActivityPanelSystemUIManagerDefault from "ActivityPanelSystemUIManager.tsx";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let importDefault;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
function renderActivityOrPIP(id, arg1, transitionState, transitionCleanUp) {
  let tmp4;
  if ("pip" === arg1) {
    tmp4 = 17199;
  } else {
    tmp4 = 17205;
  }
  const obj = { transitionState, transitionCleanUp };
  return metroImportDefault(importDefault(tmp4), obj, id);
}
function getKey(arg0) {
  return arg0;
}
function wrapChildren(children) {
  const obj = { style: hasOwnProperty.absoluteFill, pointerEvents: "box-none", children };
  return metroImportDefault(React3, obj);
}
({ View: closure_4, StyleSheet: hasOwnProperty } = react_native);
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_12 = [];
let closure_13 = ["pip"];
let closure_14 = ["activity"];
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (context) => {
      let items;
      let renderActivityPanelSystemUIManager;
      let tmp6;
      const obj = react2;
      const cResult = obj.c(8);
      ({ renderActivityOrPIP, renderActivityPanelSystemUIManager } = context);
      const mode = react.useContext(context.context).mode;
      if (mode !== ActivityPanelModes.DISCONNECTED) {
        if (mode === ActivityPanelModes.PIP) {
          let tmp7;
          if (cResult[0] !== renderActivityPanelSystemUIManager) {
            const result = renderActivityPanelSystemUIManager();
            cResult[0] = renderActivityPanelSystemUIManager;
            cResult[1] = result;
            tmp7 = result;
          } else {
            tmp7 = cResult[1];
          }
          if (cResult[2] === tmp6) {
            let tmp9;
            if (cResult[3] === renderActivityOrPIP) {
              tmp9 = cResult[4];
            }
            if (cResult[5] === tmp7) {
              let tmp14;
              if (cResult[6] === tmp9) {
                tmp14 = cResult[7];
              }
              return tmp14;
            }
            const obj2 = { children: items };
            items = [tmp7, tmp9];
            const tmp16 = metroImportAll(LayerScope2.LayerScope, obj2);
            cResult[5] = tmp7;
            cResult[6] = tmp9;
            cResult[7] = tmp16;
            tmp14 = tmp16;
          }
          const obj3 = { items: tmp6, renderItem: renderActivityOrPIP, getItemKey: getKey, wrapChildren };
          const tmp13 = metroImportDefault(native.TransitionGroup, obj3);
          cResult[2] = tmp6;
          cResult[3] = renderActivityOrPIP;
          cResult[4] = tmp13;
          tmp9 = tmp13;
        }
        tmp6 = mode === ActivityPanelModes.PIP ? closure_13 : closure_14;
      }
      tmp6 = closure_12;
    }
  : (context) => {
      let closure_1;
      let items1;
      let renderActivityPanelSystemUIManager;
      ({ renderActivityOrPIP, renderActivityPanelSystemUIManager } = context);
      const mode = react.useContext(context.context).mode;
      const tmp = useIsConnectedToVoiceChannelDefault();
      importDefault = tmp;
      const items = [mode, tmp];
      const memo = react.useMemo(() => {
        let tmp4;
        if (mode !== ActivityPanelModes.DISCONNECTED) {
          if (mode === ActivityPanelModes.PIP) {
            return tmp4;
          }
          tmp4 = mode === ActivityPanelModes.PIP ? closure_13 : closure_14;
        }
        tmp4 = closure_12;
      }, items);
      const obj = { children: items1 };
      const LayerScope = mode(6658).LayerScope;
      items1 = [renderActivityPanelSystemUIManager()];
      const obj2 = { items: memo, renderItem: renderActivityOrPIP, getItemKey: getKey, wrapChildren };
      items1[1] = closure_7(mode(4595).TransitionGroup, obj2);
      return closure_8(LayerScope, obj);
    };
let closure_15 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let tmp4;
      const obj = react2;
      const cResult = obj.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function t() {
          return closure_1_7(ActivityPanelSystemUIManagerDefault, {});
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = {
          renderActivityOrPIP,
          context: ActivityPanelStateContextDefault,
          renderActivityPanelSystemUIManager: first,
        };
        const tmp9 = metroImportDefault(closure_15, obj2);
        cResult[1] = tmp9;
        tmp4 = tmp9;
      } else {
        tmp4 = cResult[1];
      }
      return tmp4;
    }
  : () => {
      const renderActivityPanelSystemUIManager = react.useCallback(
        () => closure_1_7(ActivityPanelSystemUIManagerDefault, {}),
        [],
      );
      const items = [renderActivityPanelSystemUIManager];
      return react.useMemo(() => {
        const obj = {
          renderActivityOrPIP,
          context: ActivityPanelStateContextDefault,
          renderActivityPanelSystemUIManager,
        };
        return metroImportDefault(closure_15, obj);
      }, items);
    };
let result = size.fileFinishedImporting("modules/activities/panel/native/ActivityPanelUI.tsx");

export default tmp5;
export const BaseActivityPanelUI = tmp4;
