// === Module 15859: DevToolsLoggingFlagsScreen ===

// Module 15859 (DevToolsLoggingFlagsScreen)
import _mod17 from "module_17" /* 17 */;
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import DeveloperOptionsActionCreators from "DeveloperOptionsActionCreators" /* 1347 */;
import TableRowGroup from "TableRowGroup" /* 5899 */;
import TableSwitchRow from "TableSwitchRow" /* 7440 */;
import DeveloperOptionsStore from "DeveloperOptionsStore" /* 1346 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4756 */;
import size from "module_2" /* 2 */;

const ScrollView = _mod17.ScrollView;
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const obj = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, content: null };
let obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.content = { padding: nativeDefault.space.PX_16 };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsLoggingFlagsScreen.tsx");

export default function DevToolsLoggingFlagsScreen() {
  const tmp = closure_6();
  const items = [DeveloperOptionsStore];
  const stateFromStoresObject = initialize.useStateFromStoresObject(items, () => ({ isLoggingGatewayEvents: DeveloperOptionsStore.isLoggingGatewayEvents, isLoggingAnalyticsEvents: DeveloperOptionsStore.isLoggingAnalyticsEvents, isTracingRequests: DeveloperOptionsStore.isTracingRequests }));
  const obj2 = { style: tmp.container, contentContainerStyle: tmp.content, children: null };
  ({ isLoggingGatewayEvents, isLoggingAnalyticsEvents, isTracingRequests } = stateFromStoresObject);
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
};