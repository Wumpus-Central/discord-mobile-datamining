// === Module 15585: DevToolsLoggingFlagsScreen ===

// Module 15585 (DevToolsLoggingFlagsScreen)
import _mod17 from "module_17" /* 17 */;
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import DeveloperOptionsActionCreators from "DeveloperOptionsActionCreators" /* 1348 */;
import TableRowGroup from "TableRowGroup" /* 5687 */;
import TableSwitchRow from "TableSwitchRow" /* 7201 */;
import DeveloperOptionsStore from "DeveloperOptionsStore" /* 1347 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4560 */;
import size from "module_2" /* 2 */;

const ScrollView = _mod17.ScrollView;
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let obj = { container: null, content: null };
obj = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.container = obj;
obj.content = { padding: nativeDefault.space.PX_16 };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsLoggingFlagsScreen.tsx");

export default function DevToolsLoggingFlagsScreen() {
  const tmp = closure_6();
  let obj = initialize;
  const items = [DeveloperOptionsStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ isLoggingGatewayEvents: DeveloperOptionsStore.isLoggingGatewayEvents, isLoggingAnalyticsEvents: DeveloperOptionsStore.isLoggingAnalyticsEvents, isTracingRequests: DeveloperOptionsStore.isTracingRequests }));
  obj = { style: tmp.container, contentContainerStyle: tmp.content, children: null };
  ({ isLoggingGatewayEvents, isLoggingAnalyticsEvents, isTracingRequests } = stateFromStoresObject);
  obj = { title: "Logging", hasIcons: false, children: null };
  const items1 = [
    React4(TableSwitchRow.TableSwitchRow, {
      label: "Gateway Events",
      subLabel: "Logs all gateway events to console, including content. Enable verbose logs to see them.",
      value: isLoggingGatewayEvents,
      onValueChange(logGatewayEvents) {
        const obj = { logGatewayEvents };
        return obj.setDeveloperOptionSettings(obj);
      }
    }),
    React4(TableSwitchRow.TableSwitchRow, {
      label: "Analytics Events",
      subLabel: "Logs all analytics events to the developer console.",
      value: isLoggingAnalyticsEvents,
      onValueChange(logAnalyticsEvents) {
        const obj = { logAnalyticsEvents };
        return obj.setDeveloperOptionSettings(obj);
      }
    }),
    React4(TableSwitchRow.TableSwitchRow, {
      label: "Tracing Requests",
      subLabel: "Force trace all client requests with APM.",
      value: isTracingRequests,
      onValueChange(trace) {
        const obj = { trace };
        return obj.setDeveloperOptionSettings(obj);
      }
    })
  ];
  obj.children = items1;
  obj.children = hasOwnProperty(TableRowGroup.TableRowGroup, obj);
  return React4(ScrollView, obj);
};