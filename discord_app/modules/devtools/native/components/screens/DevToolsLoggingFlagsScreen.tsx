// discord_app/modules/devtools/native/components/screens/DevToolsLoggingFlagsScreen.tsx
import { ScrollView } from "get ActivityIndicator";
import refreshSourceMapCookie from "refreshSourceMapCookie";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { initialize } from "../../../../../../discord_common/js/packages/flux/index.tsx";
import { TableRowGroupTitle } from "../../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import { TableSwitchRow } from "../../../../../design/components/TableRow/native/TableSwitchRow.native.tsx";

let c4;
let c5;
({ jsx: c4, jsxs: c5 } = jsxProd);
let obj = { container: null, content: null };
obj = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
obj[0] = obj;
obj[1] = { padding: require("Themes").space.PX_16 };
let closure_6 = createCacheKey.createStyles(obj);
const obj1 = { padding: require("Themes").space.PX_16 };
const result = require("jsxProd").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsLoggingFlagsScreen.tsx");

export default function DevToolsLoggingFlagsScreen() {
  let isLoggingAnalyticsEvents;
  let isLoggingGatewayEvents;
  let isTracingRequests;
  const tmp = callback3();
  let obj = initialize;
  const items = [refreshSourceMapCookie];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ isLoggingGatewayEvents: refreshSourceMapCookie.isLoggingGatewayEvents, isLoggingAnalyticsEvents: refreshSourceMapCookie.isLoggingAnalyticsEvents, isTracingRequests: refreshSourceMapCookie.isTracingRequests }));
  obj = { style: tmp.container, contentContainerStyle: tmp.content, children: null };
  ({ isLoggingGatewayEvents, isLoggingAnalyticsEvents, isTracingRequests } = stateFromStoresObject);
  obj = { title: "Logging", hasIcons: false, children: null };
  const items1 = [
    callback(TableSwitchRow.TableSwitchRow, {
      label: "Gateway Events",
      subLabel: "Logs all gateway events to console, including content. Enable verbose logs to see them.",
      value: isLoggingGatewayEvents,
      onValueChange(logGatewayEvents) {
        let obj = callback(708);
        obj = { logGatewayEvents };
        return obj.setDeveloperOptionSettings(obj);
      }
    }),
    callback(TableSwitchRow.TableSwitchRow, {
      label: "Analytics Events",
      subLabel: "Logs all analytics events to the developer console.",
      value: isLoggingAnalyticsEvents,
      onValueChange(logAnalyticsEvents) {
        let obj = callback(708);
        obj = { logAnalyticsEvents };
        return obj.setDeveloperOptionSettings(obj);
      }
    }),
    callback(TableSwitchRow.TableSwitchRow, {
      label: "Tracing Requests",
      subLabel: "Force trace all client requests with APM.",
      value: isTracingRequests,
      onValueChange(trace) {
        let obj = callback(708);
        obj = { trace };
        return obj.setDeveloperOptionSettings(obj);
      }
    })
  ];
  obj[2] = items1;
  obj[2] = callback2(TableRowGroupTitle.TableRowGroup, obj);
  return callback(ScrollView, obj);
};