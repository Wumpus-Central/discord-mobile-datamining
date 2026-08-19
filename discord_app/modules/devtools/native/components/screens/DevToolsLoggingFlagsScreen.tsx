// === Module 13959: DevToolsLoggingFlagsScreen ===

// Module 13959 (DevToolsLoggingFlagsScreen)
import obj132 from "obj132" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import initialize from "initialize" /* 589 */;
import ThemesDefault from "Themes" /* 712 */;
import TableRowGroupTitle from "TableRowGroupTitle" /* 6286 */;
import TableSwitchRow from "TableSwitchRow" /* 7178 */;
import refreshSourceMapCookie from "refreshSourceMapCookie" /* 706 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const ScrollView = get_ActivityIndicator.ScrollView;
({ jsx: c4, jsxs: c5 } = jsxProd);
let obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
obj[0] = obj;
obj[1] = { padding: ThemesDefault.space.PX_16 };
let closure_6 = createCacheKey.createStyles(obj);
const result = obj132.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsLoggingFlagsScreen.tsx");

export default function DevToolsLoggingFlagsScreen() {
  const tmp = callback3();
  let obj = initialize;
  const items = [closure_3];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ isLoggingGatewayEvents: closure_3.isLoggingGatewayEvents, isLoggingAnalyticsEvents: closure_3.isLoggingAnalyticsEvents, isTracingRequests: closure_3.isTracingRequests }));
  ({ isLoggingGatewayEvents, isLoggingAnalyticsEvents, isTracingRequests } = stateFromStoresObject);
  obj = { title: "Logging", hasIcons: false, children: null };
  const items1 = [
    callback(TableSwitchRow.TableSwitchRow, {
      label: "Gateway Events",
      subLabel: "Logs all gateway events to console, including content. Enable verbose logs to see them.",
      value: isLoggingGatewayEvents,
      onValueChange(logGatewayEvents) {
        callback(708);
        const obj = { logGatewayEvents };
        return obj.setDeveloperOptionSettings(obj);
      }
    }),
    callback(TableSwitchRow.TableSwitchRow, {
      label: "Analytics Events",
      subLabel: "Logs all analytics events to the developer console.",
      value: isLoggingAnalyticsEvents,
      onValueChange(logAnalyticsEvents) {
        callback(708);
        const obj = { logAnalyticsEvents };
        return obj.setDeveloperOptionSettings(obj);
      }
    }),
    callback(TableSwitchRow.TableSwitchRow, {
      label: "Tracing Requests",
      subLabel: "Force trace all client requests with APM.",
      value: isTracingRequests,
      onValueChange(trace) {
        callback(708);
        const obj = { trace };
        return obj.setDeveloperOptionSettings(obj);
      }
    })
  ];
  obj[2] = items1;
  obj[2] = callback2(TableRowGroupTitle.TableRowGroup, obj);
  return callback(ScrollView, obj);
};