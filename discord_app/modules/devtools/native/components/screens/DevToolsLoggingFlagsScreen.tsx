// === Module 15415: DevToolsLoggingFlagsScreen ===

// Module 15415 (DevToolsLoggingFlagsScreen)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import DeveloperOptionsActionCreators from "DeveloperOptionsActionCreators" /* 1358 */;
import TableRowGroup2 from "TableRowGroup" /* 6074 */;
import TableSwitchRow from "TableSwitchRow" /* 6698 */;
import DeveloperOptionsStore from "DeveloperOptionsStore" /* 1357 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
const ScrollView = react_native.ScrollView;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, content: obj3 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_16 };
let closure_6 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let isLoggingAnalyticsEvents;
  let isLoggingGatewayEvents;
  let isLoggingInteractionTTIAnalytics;
  let isTracingRequests;
  let items1;
  let tmp10;
  let tmp13;
  let tmp14;
  let tmp17;
  let tmp18;
  let tmp21;
  let tmp22;
  let tmp5;
  let tmp6;
  let tmp9;
  let obj = react;
  const cResult = obj.c(23);
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
  const tmpResult = get_initialized;
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp5, tmp6);
  ({ isLoggingGatewayEvents, isLoggingAnalyticsEvents, isLoggingInteractionTTIAnalytics, isTracingRequests } = stateFromStoresObject);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function y(logGatewayEvents) {
      const obj = DeveloperOptionsActionCreators;
      const obj2 = { logGatewayEvents };
      return obj.setDeveloperOptionSettings(obj2);
    };
    cResult[2] = fn2;
    tmp9 = fn2;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] !== isLoggingGatewayEvents) {
    let obj2 = { label: "Gateway Events", subLabel: "Logs all gateway events to console, including content. Enable verbose logs to see them.", value: isLoggingGatewayEvents, onValueChange: tmp9 };
    const tmp12 = React3(TableSwitchRow.TableSwitchRow, obj2);
    cResult[3] = isLoggingGatewayEvents;
    cResult[4] = tmp12;
    tmp10 = tmp12;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const fn3 = function h(logAnalyticsEvents) {
      const obj = DeveloperOptionsActionCreators;
      const obj2 = { logAnalyticsEvents };
      return obj.setDeveloperOptionSettings(obj2);
    };
    cResult[5] = fn3;
    tmp13 = fn3;
  } else {
    tmp13 = cResult[5];
  }
  if (cResult[6] !== isLoggingAnalyticsEvents) {
    const obj3 = { label: "Analytics Events", subLabel: "Logs all analytics events to the developer console.", value: isLoggingAnalyticsEvents, onValueChange: tmp13 };
    const tmp16 = React3(TableSwitchRow.TableSwitchRow, obj3);
    cResult[6] = isLoggingAnalyticsEvents;
    cResult[7] = tmp16;
    tmp14 = tmp16;
  } else {
    tmp14 = cResult[7];
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const fn4 = function w(logInteractionTTIAnalytics) {
      const obj = DeveloperOptionsActionCreators;
      const obj2 = { logInteractionTTIAnalytics };
      return obj.setDeveloperOptionSettings(obj2);
    };
    cResult[8] = fn4;
    tmp17 = fn4;
  } else {
    tmp17 = cResult[8];
  }
  if (cResult[9] !== isLoggingInteractionTTIAnalytics) {
    const obj4 = { label: "Interaction TTI Analytics", subLabel: "Logs Interaction TTI analytics events to the developer console.", value: isLoggingInteractionTTIAnalytics, onValueChange: tmp17 };
    const tmp20 = React3(TableSwitchRow.TableSwitchRow, obj4);
    cResult[9] = isLoggingInteractionTTIAnalytics;
    cResult[10] = tmp20;
    tmp18 = tmp20;
  } else {
    tmp18 = cResult[10];
  }
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    const fn5 = function p(trace) {
      const obj = DeveloperOptionsActionCreators;
      const obj2 = { trace };
      return obj.setDeveloperOptionSettings(obj2);
    };
    cResult[11] = fn5;
    tmp21 = fn5;
  } else {
    tmp21 = cResult[11];
  }
  if (cResult[12] !== isTracingRequests) {
    const obj5 = { label: "Tracing Requests", subLabel: "Force trace all client requests with APM.", value: isTracingRequests, onValueChange: tmp21 };
    const tmp24 = React3(TableSwitchRow.TableSwitchRow, obj5);
    cResult[12] = isTracingRequests;
    cResult[13] = tmp24;
    tmp22 = tmp24;
  } else {
    tmp22 = cResult[13];
  }
  if (cResult[14] === tmp10) {
    if (cResult[15] === tmp14) {
      if (cResult[16] === tmp18) {
        let tmp25;
        if (cResult[17] === tmp22) {
          tmp25 = cResult[18];
        }
        if (cResult[19] === tmp4.container) {
          if (cResult[20] === tmp4.content) {
            let tmp27;
            if (cResult[21] === tmp25) {
              tmp27 = cResult[22];
            }
            return tmp27;
          }
        }
        const obj6 = { style: null, contentContainerStyle: null, children: tmp25 };
        ({ container: obj8.style, content: obj8.contentContainerStyle } = tmp4);
        const tmp30 = React3(ScrollView, obj6);
        cResult[19] = tmp4.container;
        cResult[20] = tmp4.content;
        cResult[21] = tmp25;
        cResult[22] = tmp30;
        tmp27 = tmp30;
      }
    }
  }
  const obj7 = { title: "Logging", hasIcons: false, children: items1 };
  items1 = [tmp10, tmp14, tmp18, tmp22];
  const tmp26 = hasOwnProperty(TableRowGroup2.TableRowGroup, obj7);
  cResult[14] = tmp10;
  cResult[15] = tmp14;
  cResult[16] = tmp18;
  cResult[17] = tmp22;
  cResult[18] = tmp26;
  tmp25 = tmp26;
}) : (() => {
  let TableRowGroup;
  let isLoggingAnalyticsEvents;
  let isLoggingGatewayEvents;
  let isLoggingInteractionTTIAnalytics;
  let isTracingRequests;
  let items1;
  let obj3;
  const tmp = closure_6();
  let obj = get_initialized;
  const items = [DeveloperOptionsStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ isLoggingGatewayEvents: DeveloperOptionsStore.isLoggingGatewayEvents, isLoggingAnalyticsEvents: DeveloperOptionsStore.isLoggingAnalyticsEvents, isLoggingInteractionTTIAnalytics: DeveloperOptionsStore.isLoggingInteractionTTIAnalytics, isTracingRequests: DeveloperOptionsStore.isTracingRequests }));
  let obj2 = { style: tmp.container, contentContainerStyle: tmp.content, children: hasOwnProperty(TableRowGroup, obj3) };
  ({ isLoggingGatewayEvents, isLoggingAnalyticsEvents, isLoggingInteractionTTIAnalytics, isTracingRequests } = stateFromStoresObject);
  obj3 = { title: "Logging", hasIcons: false, children: items1 };
  TableRowGroup = TableRowGroup2.TableRowGroup;
  items1 = [, , , ];
  const obj4 = {
    label: "Gateway Events",
    subLabel: "Logs all gateway events to console, including content. Enable verbose logs to see them.",
    value: isLoggingGatewayEvents,
    onValueChange(logGatewayEvents) {
      const obj = DeveloperOptionsActionCreators;
      const obj2 = { logGatewayEvents };
      return obj.setDeveloperOptionSettings(obj2);
    }
  };
  items1[0] = React3(TableSwitchRow.TableSwitchRow, obj4);
  const obj5 = {
    label: "Analytics Events",
    subLabel: "Logs all analytics events to the developer console.",
    value: isLoggingAnalyticsEvents,
    onValueChange(logAnalyticsEvents) {
      const obj = DeveloperOptionsActionCreators;
      const obj2 = { logAnalyticsEvents };
      return obj.setDeveloperOptionSettings(obj2);
    }
  };
  items1[1] = React3(TableSwitchRow.TableSwitchRow, obj5);
  const obj6 = {
    label: "Interaction TTI Analytics",
    subLabel: "Logs Interaction TTI analytics events to the developer console.",
    value: isLoggingInteractionTTIAnalytics,
    onValueChange(logInteractionTTIAnalytics) {
      const obj = DeveloperOptionsActionCreators;
      const obj2 = { logInteractionTTIAnalytics };
      return obj.setDeveloperOptionSettings(obj2);
    }
  };
  items1[2] = React3(TableSwitchRow.TableSwitchRow, obj6);
  const obj7 = {
    label: "Tracing Requests",
    subLabel: "Force trace all client requests with APM.",
    value: isTracingRequests,
    onValueChange(trace) {
      const obj = DeveloperOptionsActionCreators;
      const obj2 = { trace };
      return obj.setDeveloperOptionSettings(obj2);
    }
  };
  items1[3] = React3(TableSwitchRow.TableSwitchRow, obj7);
  return React3(ScrollView, obj2);
});
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsLoggingFlagsScreen.tsx");

export default tmp4;