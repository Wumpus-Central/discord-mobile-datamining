// discord_app/modules/frames/panel/native/FramePanelContainer.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../_runtime/00576_c.js";
import WakeLockDefault from "../../../device/native/WakeLock.tsx";
import FramePanelControllerDefault from "FramePanelController.tsx";
import FramePanelUIDefault from "FramePanelUI.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import FramesStore from "../../FramesStore.tsx";

require = fn;
const isLaunched = fn(10613).isLaunched;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const FrameActivities = "FrameActivities";
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelContainer.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function FramePanelContainer() {
        const cResult = c.c(4);
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
        const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
        if (cResult[2] !== stateFromStores) {
          let tmp9 = null;
          if (stateFromStores) {
            const obj2 = { children: null };
            const obj3 = { wakeLockKey: FrameActivities };
            const items1 = [hasOwnProperty(WakeLockDefault, obj3)];
            const obj4 = { children: hasOwnProperty(FramePanelUIDefault, {}) };
            items1[1] = hasOwnProperty(FramePanelControllerDefault, obj4);
            obj2.children = items1;
            tmp9 = React5(timestampProducer, obj2);
          }
          cResult[2] = stateFromStores;
          cResult[3] = tmp9;
          let tmp8 = tmp9;
        } else {
          tmp8 = cResult[3];
        }
        return tmp8;
      }
    : function FramePanelContainer() {
        const items = [FramesStore];
        let tmp2 = null;
        if (obj.useStateFromStores(items, () => isLaunched(mainFrame.getMainFrame()))) {
          const obj2 = { children: null };
          const obj3 = { wakeLockKey: FrameActivities };
          const items1 = [hasOwnProperty(WakeLockDefault, obj3)];
          const obj4 = { children: hasOwnProperty(FramePanelUIDefault, {}) };
          items1[1] = hasOwnProperty(FramePanelControllerDefault, obj4);
          obj2.children = items1;
          tmp2 = React5(timestampProducer, obj2);
        }
        return tmp2;
      },
);
