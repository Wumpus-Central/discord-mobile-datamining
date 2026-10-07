// === Module 15431: DevToolsLoggingFlagsScreen ===

// Module 15431 (DevToolsLoggingFlagsScreen)
import _mod17 from "module_17" /* 17 */;
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import DeveloperOptionsActionCreators from "DeveloperOptionsActionCreators" /* 1358 */;
import TableRowGroup from "TableRowGroup" /* 6081 */;
import TableSwitchRow from "TableSwitchRow" /* 6705 */;
import DeveloperOptionsStore from "DeveloperOptionsStore" /* 1357 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ScrollView = _mod17.ScrollView;
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let obj = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, content: null };
let obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.content = { padding: nativeDefault.space.PX_16 };
let closure_6 = createStyles.createStyles(obj);
let obj3 = { padding: nativeDefault.space.PX_16 };
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsLoggingFlagsScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(23);
  const tmp4 = closure_6();
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
      return DeveloperOptionsActionCreators.setDeveloperOptionSettings({ logGatewayEvents });
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
    const fn3 = function h(logAnalyticsEvents) {
      return DeveloperOptionsActionCreators.setDeveloperOptionSettings({ logAnalyticsEvents });
    };
    cResult[5] = fn3;
    let tmp13 = fn3;
  } else {
    tmp13 = cResult[5];
  }
  if (cResult[6] !== isLoggingAnalyticsEvents) {
    const obj3 = { label: "Analytics Events", subLabel: "Logs all analytics events to the developer console.", value: isLoggingAnalyticsEvents, onValueChange: tmp13 };
    const tmp16 = React4(TableSwitchRow.TableSwitchRow, obj3);
    cResult[6] = isLoggingAnalyticsEvents;
    cResult[7] = tmp16;
    let tmp14 = tmp16;
  } else {
    tmp14 = cResult[7];
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const fn4 = function w(logInteractionTTIAnalytics) {
      return DeveloperOptionsActionCreators.setDeveloperOptionSettings({ logInteractionTTIAnalytics });
    };
    cResult[8] = fn4;
    let tmp17 = fn4;
  } else {
    tmp17 = cResult[8];
  }
  if (cResult[9] !== isLoggingInteractionTTIAnalytics) {
    const obj4 = { label: "Interaction TTI Analytics", subLabel: "Logs Interaction TTI analytics events to the developer console.", value: isLoggingInteractionTTIAnalytics, onValueChange: tmp17 };
    const tmp20 = React4(TableSwitchRow.TableSwitchRow, obj4);
    cResult[9] = isLoggingInteractionTTIAnalytics;
    cResult[10] = tmp20;
    let tmp18 = tmp20;
  } else {
    tmp18 = cResult[10];
  }
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    const fn5 = function p(trace) {
      return DeveloperOptionsActionCreators.setDeveloperOptionSettings({ trace });
    };
    cResult[11] = fn5;
    let tmp21 = fn5;
  } else {
    tmp21 = cResult[11];
  }
  if (cResult[12] !== isTracingRequests) {
    const obj5 = { label: "Tracing Requests", subLabel: "Force trace all client requests with APM.", value: isTracingRequests, onValueChange: tmp21 };
    const tmp24 = React4(TableSwitchRow.TableSwitchRow, obj5);
    cResult[12] = isTracingRequests;
    cResult[13] = tmp24;
    let tmp22 = tmp24;
  } else {
    tmp22 = cResult[13];
  }
  if (cResult[14] === tmp10) {
    if (cResult[15] === tmp14) {
      if (cResult[16] === tmp18) {
        if (cResult[17] === tmp22) {
          let tmp25 = cResult[18];
        }
        if (cResult[19] === tmp4.container) {
          if (cResult[20] === tmp4.content) {
            if (cResult[21] === tmp25) {
              let tmp27 = cResult[22];
            }
            return tmp27;
          }
        }
        const obj6 = { style: null, contentContainerStyle: null, children: null };
        ({ container: obj8.style, content: obj8.contentContainerStyle } = tmp4);
        obj6.children = tmp25;
        const tmp30 = React4(ScrollView, obj6);
        cResult[19] = tmp4.container;
        cResult[20] = tmp4.content;
        cResult[21] = tmp25;
        cResult[22] = tmp30;
        tmp27 = tmp30;
      }
    }
  }
  const obj7 = { title: "Logging", hasIcons: false, children: null };
  const items1 = [tmp10, tmp14, tmp18, tmp22];
  obj7.children = items1;
  const tmp26 = hasOwnProperty(TableRowGroup.TableRowGroup, obj7);
  cResult[14] = tmp10;
  cResult[15] = tmp14;
  cResult[16] = tmp18;
  cResult[17] = tmp22;
  cResult[18] = tmp26;
  tmp25 = tmp26;
  const tmpResult = initialize;
}) : (() => {
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
        return DeveloperOptionsActionCreators.setDeveloperOptionSettings({ logGatewayEvents });
      }
    }),
    React4(TableSwitchRow.TableSwitchRow, {
      label: "Analytics Events",
      subLabel: "Logs all analytics events to the developer console.",
      value: isLoggingAnalyticsEvents,
      onValueChange(logAnalyticsEvents) {
        return DeveloperOptionsActionCreators.setDeveloperOptionSettings({ logAnalyticsEvents });
      }
    }),
    React4(TableSwitchRow.TableSwitchRow, {
      label: "Interaction TTI Analytics",
      subLabel: "Logs Interaction TTI analytics events to the developer console.",
      value: isLoggingInteractionTTIAnalytics,
      onValueChange(logInteractionTTIAnalytics) {
        return DeveloperOptionsActionCreators.setDeveloperOptionSettings({ logInteractionTTIAnalytics });
      }
    }),
    React4(TableSwitchRow.TableSwitchRow, {
      label: "Tracing Requests",
      subLabel: "Force trace all client requests with APM.",
      value: isTracingRequests,
      onValueChange(trace) {
        return DeveloperOptionsActionCreators.setDeveloperOptionSettings({ trace });
      }
    })
  ];
  obj3.children = items1;
  obj2.children = hasOwnProperty(TableRowGroup.TableRowGroup, obj3);
  return React4(ScrollView, obj2);
});