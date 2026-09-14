// discord_app/modules/devtools/native/components/screens/DevToolsLoggingFlagsScreen.tsx
import _mod17 from "../../../../../../_runtime/metro/00017__.js";
import initialize from "../../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import DeveloperOptionsActionCreators from "../../../../../actions/DeveloperOptionsActionCreators.tsx";
import TableRowGroup from "../../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import TableSwitchRow from "../../../../../design/components/TableRow/native/TableSwitchRow.native.tsx";
import DeveloperOptionsStore from "../../../../../stores/DeveloperOptionsStore.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

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
  const stateFromStoresObject = initialize.useStateFromStoresObject(items, () => ({
    isLoggingGatewayEvents: DeveloperOptionsStore.isLoggingGatewayEvents,
    isLoggingAnalyticsEvents: DeveloperOptionsStore.isLoggingAnalyticsEvents,
    isTracingRequests: DeveloperOptionsStore.isTracingRequests,
  }));
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
      },
    }),
    React4(TableSwitchRow.TableSwitchRow, {
      label: "Analytics Events",
      subLabel: "Logs all analytics events to the developer console.",
      value: isLoggingAnalyticsEvents,
      onValueChange(logAnalyticsEvents) {
        return DeveloperOptionsActionCreators.setDeveloperOptionSettings({ logAnalyticsEvents });
      },
    }),
    React4(TableSwitchRow.TableSwitchRow, {
      label: "Tracing Requests",
      subLabel: "Force trace all client requests with APM.",
      value: isTracingRequests,
      onValueChange(trace) {
        return DeveloperOptionsActionCreators.setDeveloperOptionSettings({ trace });
      },
    }),
  ];
  obj3.children = items1;
  obj2.children = hasOwnProperty(TableRowGroup.TableRowGroup, obj3);
  return React4(ScrollView, obj2);
}
