// === Module 8728: useApplicationWidgetConfigs ===

// Module 8728 (useApplicationWidgetConfigs)
import GlobalUtils from "GlobalUtils" /* 1375 */;
import ApplicationWidgetConfigActions from "ApplicationWidgetConfigActions" /* 8730 */;
import noop from "module_19" /* 19 */;
import ApplicationWidgetConfigStore from "ApplicationWidgetConfigStore" /* 8729 */;

const require = globalThis.__r;

require = fn;
const FetchState = fn(8729).FetchState;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/application_widget/hooks/useApplicationWidgetConfigs.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(21);
  const DeveloperMode = require("UserSettings").DeveloperMode;
  setting = DeveloperMode.useSetting();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [stateFromStores1];
    const fn = function n() {
      return stateFromStores1.getFeaturedFetchState();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [stateFromStores1];
    class S {
      constructor() {
        return closure_3.getDeveloperFetchState();
      }
    }
    cResult[2] = items1;
    cResult[3] = S;
    let tmp10 = S;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult = require("initialize");
  stateFromStores1 = require("initialize").useStateFromStores(tmp9, tmp10);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [stateFromStores1];
    class S {
      constructor() {
        return closure_3.getDeveloperFetchState();
      }
    }
    cResult[4] = items2;
    let tmp13 = items2;
  } else {
    tmp13 = cResult[4];
  }
  if (cResult[5] !== arg0) {
    const fn2 = function _() {
      return closure_0.filter((item) => fetchState.getFetchState(item) === constants.NOT_FETCHED);
    };
    cResult[5] = arg0;
    class S {
      constructor() {
        return closure_3.getDeveloperFetchState();
      }
    }
    cResult[6] = fn2;
    let tmp15 = fn2;
  } else {
    tmp15 = cResult[6];
  }
  const tmpResult4 = require("initialize");
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(tmp13, tmp15);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const items3 = [stateFromStores1];
    class S {
      constructor() {
        return closure_3.getDeveloperFetchState();
      }
    }
    cResult[7] = items3;
    let tmp17 = items3;
  } else {
    tmp17 = cResult[7];
  }
  if (cResult[8] !== arg0) {
    class T {
      constructor() {
        mapped = closure_0.map((item) => config.getConfig(item));
        return mapped.filter(closure_0(closure_1[6]).isNotNullish);
      }
    }
    cResult[8] = arg0;
    class S {
      constructor() {
        return closure_3.getDeveloperFetchState();
      }
    }
    cResult[9] = T;
  } else {
    class T {
      constructor() {
        mapped = closure_0.map((item) => config.getConfig(item));
        return mapped.filter(closure_0(closure_1[6]).isNotNullish);
      }
    }
  }
  const tmpResult5 = require("initialize");
  const stateFromStoresArray1 = require("initialize").useStateFromStoresArray(tmp17, T);
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    class N {
      constructor() {
        obj = closure_0(closure_1[7]);
        featuredWidgetConfigs = obj.fetchFeaturedWidgetConfigs();
        catchPromise = featuredWidgetConfigs.catch(() => {

        });
        return;
      }
    }
    const items4 = [];
    class S {
      constructor() {
        return closure_3.getDeveloperFetchState();
      }
    }
    cResult[11] = items4;
    let tmp22 = items4;
  } else {
    class N {
      constructor() {
        obj = closure_0(closure_1[7]);
        featuredWidgetConfigs = obj.fetchFeaturedWidgetConfigs();
        catchPromise = featuredWidgetConfigs.catch(() => {

        });
        return;
      }
    }
    tmp22 = cResult[11];
  }
  const effect = stateFromStores.useEffect(N, tmp22);
  if (cResult[12] !== setting) {
    class N {
      constructor() {
        obj = closure_0(closure_1[7]);
        featuredWidgetConfigs = obj.fetchFeaturedWidgetConfigs();
        catchPromise = featuredWidgetConfigs.catch(() => {

        });
        return;
      }
    }
    const items5 = [setting];
    class S {
      constructor() {
        return closure_3.getDeveloperFetchState();
      }
    }
    cResult[12] = setting;
    cResult[13] = tmp26;
    cResult[14] = items5;
    let tmp25 = items5;
  } else {
    class N {
      constructor() {
        obj = closure_0(closure_1[7]);
        featuredWidgetConfigs = obj.fetchFeaturedWidgetConfigs();
        catchPromise = featuredWidgetConfigs.catch(() => {

        });
        return;
      }
    }
    tmp25 = cResult[14];
  }
  const effect1 = stateFromStores.useEffect(tmp26, tmp25);
  if (cResult[15] === stateFromStores1) {
    class N {
      constructor() {
        obj = closure_0(closure_1[7]);
        featuredWidgetConfigs = obj.fetchFeaturedWidgetConfigs();
        catchPromise = featuredWidgetConfigs.catch(() => {

        });
        return;
      }
    }
  }
  const fn3 = function b() {
    if (stateFromStores !== FetchState.NOT_FETCHED) {
      if (tmp !== FetchState.FETCHING) {
        if (!setting) {
          for (const item10012 of stateFromStoresArray) {
            let obj = ApplicationWidgetConfigActions;
            let widgetConfigs = obj.fetchWidgetConfigs(item10012);
            let catchPromise = widgetConfigs.catch(() => {

            });
            continue;
          }
        }
      }
    }
  };
  const items6 = [stateFromStores1, stateFromStores, stateFromStoresArray, setting];
  cResult[15] = stateFromStores1;
  cResult[16] = stateFromStores;
  cResult[17] = stateFromStoresArray;
  cResult[18] = setting;
  cResult[19] = fn3;
  cResult[20] = items6;
  const tmpResult6 = require("initialize");
}) : ((arg0) => {
  _require = arg0;
  const DeveloperMode = require("UserSettings").DeveloperMode;
  setting = DeveloperMode.useSetting();
  const items = [stateFromStores1];
  const stateFromStores = require("initialize").useStateFromStores(items, () => stateFromStores1.getFeaturedFetchState());
  let obj = require("initialize");
  const items1 = [stateFromStores1];
  stateFromStores1 = require("initialize").useStateFromStores(items1, () => stateFromStores1.getDeveloperFetchState());
  const obj2 = require("initialize");
  const items2 = [stateFromStores1];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items2, () => closure_0.filter((item) => fetchState.getFetchState(item) === constants.NOT_FETCHED));
  const obj3 = require("initialize");
  const items3 = [stateFromStores1];
  const stateFromStoresArray1 = require("initialize").useStateFromStoresArray(items3, () => {
    const mapped = closure_0.map((item) => config.getConfig(item));
    return mapped.filter(GlobalUtils.isNotNullish);
  });
  const effect = stateFromStores.useEffect(() => {
    const featuredWidgetConfigs = closure_0(setting[7]).fetchFeaturedWidgetConfigs();
    featuredWidgetConfigs.catch(() => {

    });
  }, []);
  const items4 = [setting];
  const effect1 = stateFromStores.useEffect(() => {
    if (setting) {
      const developerWidgetConfigs = ApplicationWidgetConfigActions.fetchDeveloperWidgetConfigs();
      developerWidgetConfigs.catch(() => {

      });
    }
  }, items4);
  const items5 = [stateFromStores1, stateFromStores, stateFromStoresArray, setting];
  const effect2 = stateFromStores.useEffect(() => {
    if (stateFromStores !== FetchState.NOT_FETCHED) {
      if (tmp !== FetchState.FETCHING) {
        if (!setting) {
          for (const item10012 of stateFromStoresArray) {
            let obj = ApplicationWidgetConfigActions;
            let widgetConfigs = obj.fetchWidgetConfigs(item10012);
            let catchPromise = widgetConfigs.catch(() => {

            });
            continue;
          }
        }
      }
    }
  }, items5);
  return stateFromStoresArray1;
});