// === Module 15806: DevToolsLoggingFlagsScreen ===

// Module 15806 (DevToolsLoggingFlagsScreen)
import _mod17 from "module_17" /* 17 */;
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import TableRowGroup from "TableRowGroup" /* 6269 */;
import TableSwitchRow from "TableSwitchRow" /* 6889 */;
import DeveloperOptionsStore from "DeveloperOptionsStore" /* 1370 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const ScrollView = _mod17.ScrollView;
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let obj = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, content: null };
let obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.content = { padding: nativeDefault.space.PX_16 };
let closure_6 = createStyles.createStyles(obj);
let obj3 = { padding: nativeDefault.space.PX_16 };
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsLoggingFlagsScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function DevToolsLoggingFlagsScreen() {
  const cResult = c.c(23);
  closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [DeveloperOptionsStore];
    const fn = function v() {
      return { isLoggingGatewayEvents: DeveloperOptionsStore.isLoggingGatewayEvents, isLoggingAnalyticsEvents: DeveloperOptionsStore.isLoggingAnalyticsEvents, isLoggingInteractionTTIAnalytics: DeveloperOptionsStore.isLoggingInteractionTTIAnalytics, isTracingRequests: DeveloperOptionsStore.isTracingRequests };
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const stateFromStoresObject = initialize.useStateFromStoresObject(tmp5, tmp6);
  ({ isLoggingGatewayEvents, isLoggingAnalyticsEvents, isLoggingInteractionTTIAnalytics, isTracingRequests } = stateFromStoresObject);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function y(logGatewayEvents) {
      return require("DeveloperOptionsActionCreators").setDeveloperOptionSettings({ logGatewayEvents });
    };
    cResult[2] = fn2;
    let tmp9 = fn2;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] !== isLoggingGatewayEvents) {
    const obj2 = { label: "Gateway Events", subLabel: "Logs all gateway events to console, including content. Enable verbose logs to see them.", value: isLoggingGatewayEvents, onValueChange: tmp9 };
    const tmp12 = React4(TableSwitchRow.TableSwitchRow, obj2);
    cResult[3] = isLoggingGatewayEvents;
    cResult[4] = tmp12;
    let tmp10 = tmp12;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class L {
      constructor(arg0) {
        obj = closure_1_0(closure_1_1[8]);
        obj1 = { logAnalyticsEvents: arg0 };
        return obj.setDeveloperOptionSettings(obj1);
      }
    }
    cResult[5] = L;
  } else {
    class L {
      constructor(arg0) {
        obj = closure_1_0(closure_1_1[8]);
        obj1 = { logAnalyticsEvents: arg0 };
        return obj.setDeveloperOptionSettings(obj1);
      }
    }
  }
  if (cResult[6] !== isLoggingAnalyticsEvents) {
    class L {
      constructor(arg0) {
        obj = closure_1_0(closure_1_1[8]);
        obj1 = { logAnalyticsEvents: arg0 };
        return obj.setDeveloperOptionSettings(obj1);
      }
    }
    const obj3 = { label: "Analytics Events", subLabel: "Logs all analytics events to the developer console.", value: isLoggingAnalyticsEvents, onValueChange: L };
    const tmp15 = React4(TableSwitchRow.TableSwitchRow, obj3);
    cResult[6] = isLoggingAnalyticsEvents;
    cResult[7] = tmp15;
  } else {
    class L {
      constructor(arg0) {
        obj = closure_1_0(closure_1_1[8]);
        obj1 = { logAnalyticsEvents: arg0 };
        return obj.setDeveloperOptionSettings(obj1);
      }
    }
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class L {
      constructor(arg0) {
        obj = closure_1_0(closure_1_1[8]);
        obj1 = { logAnalyticsEvents: arg0 };
        return obj.setDeveloperOptionSettings(obj1);
      }
    }
    cResult[8] = tmp17;
  } else {
    class L {
      constructor(arg0) {
        obj = closure_1_0(closure_1_1[8]);
        obj1 = { logAnalyticsEvents: arg0 };
        return obj.setDeveloperOptionSettings(obj1);
      }
    }
  }
  if (cResult[9] !== isLoggingInteractionTTIAnalytics) {
    class L {
      constructor(arg0) {
        obj = closure_1_0(closure_1_1[8]);
        obj1 = { logAnalyticsEvents: arg0 };
        return obj.setDeveloperOptionSettings(obj1);
      }
    }
    const obj4 = { label: "Interaction TTI Analytics", subLabel: "Logs Interaction TTI analytics events to the developer console.", value: isLoggingInteractionTTIAnalytics, onValueChange: tmp17 };
    const tmp19 = React4(TableSwitchRow.TableSwitchRow, obj4);
    cResult[9] = isLoggingInteractionTTIAnalytics;
    cResult[10] = tmp19;
  } else {
    class L {
      constructor(arg0) {
        obj = closure_1_0(closure_1_1[8]);
        obj1 = { logAnalyticsEvents: arg0 };
        return obj.setDeveloperOptionSettings(obj1);
      }
    }
  }
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    class L {
      constructor(arg0) {
        obj = closure_1_0(closure_1_1[8]);
        obj1 = { logAnalyticsEvents: arg0 };
        return obj.setDeveloperOptionSettings(obj1);
      }
    }
    cResult[11] = tmp21;
  } else {
    class L {
      constructor(arg0) {
        obj = closure_1_0(closure_1_1[8]);
        obj1 = { logAnalyticsEvents: arg0 };
        return obj.setDeveloperOptionSettings(obj1);
      }
    }
  }
  if (cResult[12] !== isTracingRequests) {
    class L {
      constructor(arg0) {
        obj = closure_1_0(closure_1_1[8]);
        obj1 = { logAnalyticsEvents: arg0 };
        return obj.setDeveloperOptionSettings(obj1);
      }
    }
    const obj5 = { label: "Tracing Requests", subLabel: "Force trace all client requests with APM.", value: isTracingRequests, onValueChange: tmp21 };
    const tmp23 = React4(TableSwitchRow.TableSwitchRow, obj5);
    cResult[12] = isTracingRequests;
    cResult[13] = tmp23;
  } else {
    class L {
      constructor(arg0) {
        obj = closure_1_0(closure_1_1[8]);
        obj1 = { logAnalyticsEvents: arg0 };
        return obj.setDeveloperOptionSettings(obj1);
      }
    }
  }
  if (cResult[14] === tmp10) {
    class L {
      constructor(arg0) {
        obj = closure_1_0(closure_1_1[8]);
        obj1 = { logAnalyticsEvents: arg0 };
        return obj.setDeveloperOptionSettings(obj1);
      }
    }
  }
  const obj6 = { title: "Logging", hasIcons: false, children: null };
  const items1 = [tmp10, tmp14, tmp18, tmp22];
  obj6.children = items1;
  const tmpResult = initialize;
  cResult[14] = tmp10;
  cResult[15] = tmp14;
  cResult[16] = tmp18;
  cResult[17] = tmp22;
  cResult[18] = hasOwnProperty(TableRowGroup.TableRowGroup, obj6);
  const tmp24 = hasOwnProperty(TableRowGroup.TableRowGroup, obj6);
}) : (function DevToolsLoggingFlagsScreen() {
  const tmp = closure_6();
  const items = [DeveloperOptionsStore];
  const stateFromStoresObject = initialize.useStateFromStoresObject(items, () => ({ isLoggingGatewayEvents: DeveloperOptionsStore.isLoggingGatewayEvents, isLoggingAnalyticsEvents: DeveloperOptionsStore.isLoggingAnalyticsEvents, isLoggingInteractionTTIAnalytics: DeveloperOptionsStore.isLoggingInteractionTTIAnalytics, isTracingRequests: DeveloperOptionsStore.isTracingRequests }));
  const obj2 = { style: tmp.container, contentContainerStyle: tmp.content, children: null };
  ({ isLoggingGatewayEvents, isLoggingAnalyticsEvents, isLoggingInteractionTTIAnalytics, isTracingRequests } = stateFromStoresObject);
  const obj3 = { title: "Logging", hasIcons: false, children: null };
  const items1 = [
    React4(TableSwitchRow.TableSwitchRow, {
      label: "Gateway Events",
      subLabel: "Logs all gateway events to console, including content. Enable verbose logs to see them.",
      value: isLoggingGatewayEvents,
      onValueChange(logGatewayEvents) {
        return require("DeveloperOptionsActionCreators").setDeveloperOptionSettings({ logGatewayEvents });
      }
    }),
    React4(TableSwitchRow.TableSwitchRow, {
      label: "Analytics Events",
      subLabel: "Logs all analytics events to the developer console.",
      value: isLoggingAnalyticsEvents,
      onValueChange(logAnalyticsEvents) {
        return require("DeveloperOptionsActionCreators").setDeveloperOptionSettings({ logAnalyticsEvents });
      }
    }),
    React4(TableSwitchRow.TableSwitchRow, {
      label: "Interaction TTI Analytics",
      subLabel: "Logs Interaction TTI analytics events to the developer console.",
      value: isLoggingInteractionTTIAnalytics,
      onValueChange(logInteractionTTIAnalytics) {
        return require("DeveloperOptionsActionCreators").setDeveloperOptionSettings({ logInteractionTTIAnalytics });
      }
    }),
    React4(TableSwitchRow.TableSwitchRow, {
      label: "Tracing Requests",
      subLabel: "Force trace all client requests with APM.",
      value: isTracingRequests,
      onValueChange(trace) {
        return require("DeveloperOptionsActionCreators").setDeveloperOptionSettings({ trace });
      }
    })
  ];
  obj3.children = items1;
  obj2.children = hasOwnProperty(TableRowGroup.TableRowGroup, obj3);
  return React4(ScrollView, obj2);
});