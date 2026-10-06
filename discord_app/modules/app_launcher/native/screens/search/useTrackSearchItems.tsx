// === Module 11744: useTrackSearchItems ===

// Module 11744 (useTrackSearchItems)
import react_mod from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let react = react_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, current) => {
  let closure_0;
  let closure_1;
  let first;
  _require = arg0;
  dependencyMap = arg1;
  react = current;
  let obj = require("react");
  const cResult = obj.c(8);
  let obj2 = require("AppLauncherContext");
  const entrypoint = obj2.useAppLauncherContext().entrypoint;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = {};
    cResult[0] = obj3;
    first = obj3;
  } else {
    first = cResult[0];
  }
  let closure_4 = react.useRef(first);
  const ref = react.useRef(current);
  if (cResult[1] === entrypoint) {
    if (cResult[2] === arg0) {
      if (cResult[3] === arg1) {
        let tmp3;
        let tmp4;
        if (cResult[4] === current) {
          tmp3 = cResult[5];
        }
        if (cResult[6] !== tmp3) {
          const obj4 = { handleViewableItemsChanged: tmp3 };
          cResult[6] = tmp3;
          cResult[7] = obj4;
          tmp4 = obj4;
        } else {
          tmp4 = cResult[7];
        }
        return tmp4;
      }
    }
  }
  const fn = function l(viewableItems) {
    let query;
    let source;
    viewableItems = viewableItems.viewableItems;
    if (ref.current !== current) {
      ref.current = current;
      ref.current = {};
    }
    const item = viewableItems.forEach((isViewable) => {
      let applicationId;
      let commandId;
      let obj2;
      if (isViewable.isViewable) {
        const tmp2 = closure_1_0(isViewable.item);
        if (null != tmp2) {
          if (null == ref.current[tmp2]) {
            ref.current[tmp2] = true;
            ({ applicationId, commandId } = closure_1_1(isViewable.item));
            closure_1_1(isViewable.item);
            const obj = { type: closure_0(closure_1[5]).ImpressionTypes.VIEW, name: closure_0(closure_1[5]).ImpressionNames.APP_LAUNCHER_SEARCH_RESULTS_ITEM, properties: obj2 };
            const trackImpression = closure_0(closure_1[4]).trackImpression;
            closure_0(closure_1[4]);
            obj2 = { location: closure_0(closure_1[6]).ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME_SEARCH, application_id: applicationId, command_id: commandId, search_results_position: isViewable.index, query, source };
            trackImpression(obj, false);
          }
        }
      }
    });
  };
  cResult[1] = entrypoint;
  cResult[2] = arg0;
  cResult[3] = arg1;
  cResult[4] = current;
  cResult[5] = fn;
  tmp3 = fn;
}) : ((arg0, arg1, current) => {
  let closure_0;
  let closure_1;
  let items;
  _require = arg0;
  dependencyMap = arg1;
  react = current;
  let obj = require("AppLauncherContext");
  const entrypoint = obj.useAppLauncherContext().entrypoint;
  let closure_4 = react.useRef({});
  const ref = react.useRef(current);
  let obj2 = {
    handleViewableItemsChanged: react.useCallback((viewableItems) => {
      let query;
      let source;
      viewableItems = viewableItems.viewableItems;
      if (ref.current !== current) {
        ref.current = current;
        ref.current = {};
      }
      const item = viewableItems.forEach((isViewable) => {
        let applicationId;
        let commandId;
        let obj2;
        if (isViewable.isViewable) {
          const tmp2 = closure_1_0(isViewable.item);
          if (null != tmp2) {
            if (null == ref.current[tmp2]) {
              ref.current[tmp2] = true;
              ({ applicationId, commandId } = closure_1_1(isViewable.item));
              closure_1_1(isViewable.item);
              const obj = { type: closure_0(closure_1[5]).ImpressionTypes.VIEW, name: closure_0(closure_1[5]).ImpressionNames.APP_LAUNCHER_SEARCH_RESULTS_ITEM, properties: obj2 };
              const trackImpression = closure_0(closure_1[4]).trackImpression;
              closure_0(closure_1[4]);
              obj2 = { location: closure_0(closure_1[6]).ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME_SEARCH, application_id: applicationId, command_id: commandId, search_results_position: isViewable.index, query, source };
              trackImpression(obj, false);
            }
          }
        }
      });
    }, items)
  };
  items = [entrypoint, arg0, arg1, current];
  return obj2;
});
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/search/useTrackSearchItems.tsx");

export const useTrackSearchItems = tmp2;