// === Module 11810: useTrackSearchItems ===

// Module 11810 (useTrackSearchItems)
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/search/useTrackSearchItems.tsx");

export const useTrackSearchItems = ReactCompilerGating.isReactCompilerEnabled() ? (function useTrackSearchItems(arg0, arg1, current) {
  _require = arg0;
  dependencyMap = arg1;
  noop = current;
  const cResult = require("c").c(8);
  let obj = require("c");
  const entrypoint = require("AppLauncherContext").useAppLauncherContext().entrypoint;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj3 = {};
    cResult[0] = obj3;
    let first = obj3;
  } else {
    first = cResult[0];
  }
  closure_4 = noop.useRef(first);
  noop.useRef(current);
  if (cResult[1] === entrypoint) {
    if (cResult[2] === arg0) {
      if (cResult[3] === arg1) {
        if (cResult[4] === current) {
          let tmp3 = cResult[5];
        }
        if (cResult[6] !== tmp3) {
          const obj4 = { handleViewableItemsChanged: tmp3 };
          cResult[6] = tmp3;
          cResult[7] = obj4;
          let tmp4 = obj4;
        } else {
          tmp4 = cResult[7];
        }
        return tmp4;
      }
    }
  }
  const fn = function l(viewableItems) {
    viewableItems = viewableItems.viewableItems;
    if (ref.current !== current) {
      ref.current = current;
      ref.current = {};
    }
    const item = viewableItems.forEach((isViewable) => {
      if (isViewable.isViewable) {
        const tmp2 = closure_1_0(isViewable.item);
        if (null != tmp2) {
          if (null == ref.current[tmp2]) {
            ref.current[tmp2] = true;
            ({ applicationId, commandId } = dependencyMap(isViewable.item));
            const tmp5 = dependencyMap(isViewable.item);
            const obj2 = { type: closure_0(1272).ImpressionTypes.VIEW, name: closure_0(1272).ImpressionNames.APP_LAUNCHER_SEARCH_RESULTS_ITEM, properties: null };
            const obj3 = { location: closure_0(7235).ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME_SEARCH, application_id: applicationId, command_id: commandId, search_results_position: isViewable.index, query, source };
            obj2.properties = obj3;
            closure_0(8941).trackImpression(obj2, false);
            const obj = closure_0(8941);
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
}) : (function useTrackSearchItems(arg0, arg1, current) {
  _require = arg0;
  dependencyMap = arg1;
  noop = current;
  const entrypoint = require("AppLauncherContext").useAppLauncherContext().entrypoint;
  closure_4 = noop.useRef({});
  noop.useRef(current);
  let obj2 = { handleViewableItemsChanged: null };
  const items = [entrypoint, arg0, arg1, current];
  obj2.handleViewableItemsChanged = noop.useCallback((viewableItems) => {
    viewableItems = viewableItems.viewableItems;
    if (ref.current !== current) {
      ref.current = current;
      ref.current = {};
    }
    const item = viewableItems.forEach((isViewable) => {
      if (isViewable.isViewable) {
        const tmp2 = closure_1_0(isViewable.item);
        if (null != tmp2) {
          if (null == ref.current[tmp2]) {
            ref.current[tmp2] = true;
            ({ applicationId, commandId } = dependencyMap(isViewable.item));
            const tmp5 = dependencyMap(isViewable.item);
            const obj2 = { type: closure_0(1272).ImpressionTypes.VIEW, name: closure_0(1272).ImpressionNames.APP_LAUNCHER_SEARCH_RESULTS_ITEM, properties: null };
            const obj3 = { location: closure_0(7235).ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME_SEARCH, application_id: applicationId, command_id: commandId, search_results_position: isViewable.index, query, source };
            obj2.properties = obj3;
            closure_0(8941).trackImpression(obj2, false);
            const obj = closure_0(8941);
          }
        }
      }
    });
  }, items);
  return obj2;
});