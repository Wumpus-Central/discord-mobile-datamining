// discord_app/modules/frames/panel/native/FramePanelContainer.tsx
import get_initialized from "../../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../../_runtime/00576_react.js";
import FramesConstants from "../../FramesConstants.tsx";
import WakeLockDefault from "../../../device/native/WakeLock.tsx";
import FramePanelControllerDefault from "FramePanelController.tsx";
import FramePanelUIDefault from "FramePanelUI.tsx";
import react from "../../../../../_runtime/00019_react.js";
import FramesStore from "../../FramesStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
const isLaunched = FramesConstants.isLaunched;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
const FrameActivities = "FrameActivities";
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        let items1;
        let mainFrame;
        let tmp4;
        let tmp5;
        let tmp8;
        const obj = react2;
        const cResult = obj.c(4);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [FramesStore];
          const fn = function o() {
            return isLaunched(mainFrame.getMainFrame());
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
          let tmp9 = null;
          if (stateFromStores) {
            const obj2 = { children: items1 };
            const obj3 = { wakeLockKey: FrameActivities };
            items1 = [hasOwnProperty(WakeLockDefault, obj3)];
            const obj4 = { children: hasOwnProperty(FramePanelUIDefault, {}) };
            const tmp15 = FramePanelControllerDefault;
            items1[1] = hasOwnProperty(tmp15, obj4);
            tmp9 = metroImportDefault(metroRequire, obj2);
          }
          cResult[2] = stateFromStores;
          cResult[3] = tmp9;
          tmp8 = tmp9;
        } else {
          tmp8 = cResult[3];
        }
        return tmp8;
      }
    : () => {
        let items1;
        let mainFrame;
        const items = [FramesStore];
        let tmp2 = null;
        const obj = get_initialized;
        if (obj.useStateFromStores(items, () => isLaunched(mainFrame.getMainFrame()))) {
          const obj2 = { children: items1 };
          const obj3 = { wakeLockKey: FrameActivities };
          items1 = [hasOwnProperty(WakeLockDefault, obj3)];
          const obj4 = { children: hasOwnProperty(FramePanelUIDefault, {}) };
          const tmp8 = FramePanelControllerDefault;
          items1[1] = hasOwnProperty(tmp8, obj4);
          tmp2 = metroImportDefault(metroRequire, obj2);
        }
        return tmp2;
      },
);
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelContainer.tsx");

export default memoResult;
